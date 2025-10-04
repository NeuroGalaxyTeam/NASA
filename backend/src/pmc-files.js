import fs from "fs";
import path from "path";
import csv from "csv-parser";
import { JSDOM } from "jsdom";
import TurndownService from "turndown";
import gfm from "turndown-plugin-gfm";
import { Readability } from "@mozilla/readability";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Rutas
const INPUT_FILE = path.join(__dirname, "../assets/registry.csv");
const OUTPUT_DIR = path.join(__dirname, "../articles");
const DELAY_MS = 3000;

if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function sanitizeFilename(name) {
    return name.replace(/[<>:"/\\|?*]+/g, "").replace(/\s+/g, "_").substring(0, 120);
}

// --- Helpers de metadatos ---
function getMetaContent(doc, name) {
    const el = doc.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
    return el?.getAttribute("content")?.trim() || "";
}

function getAllMeta(doc, name) {
    return [...doc.querySelectorAll(`meta[name="${name}"], meta[property="${name}"]`)]
        .map((m) => m.getAttribute("content")?.trim())
        .filter(Boolean);
}

// Para sitios que no traen <main>, escogemos el contenedor más probable
function pickMainContainer(doc) {
    const candidates = [
        "article",
        "main",
        "#main-content",
        ".article__content",
        ".article-content",
        ".content",
        ".PMC",
        "#ContentDiv",
        "#article",
    ];
    for (const sel of candidates) {
        const el = doc.querySelector(sel);
        if (el) return el;
    }
    return doc.body;
}

async function downloadAsMarkdown(titleFromCSV, url, index) {
    try {
        const safeTitle = sanitizeFilename(titleFromCSV || `article_${index}`);
        const filePath = path.join(OUTPUT_DIR, `${safeTitle}.md`);
        if (fs.existsSync(filePath)) {
            console.log(`Skipping [${index}] ${titleFromCSV} (already exists)`);
            return;
        }

        console.log(`Fetching [${index}] ${titleFromCSV} -> ${url}`);
        const response = await fetch(url, {
            headers: { "User-Agent": "Mozilla/5.0 (Node.js script)" },
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const html = await response.text();
        const dom = new JSDOM(html, { url }); // importante para Readability
        const { document } = dom.window;

        // Limpieza gruesa de ruido inmediato
        document.querySelectorAll(
            "header, nav, footer, script, style, noscript, .usa-banner, .nav, .footer, .site-footer, .cookie, .advert, .ad, .banner"
        ).forEach((el) => el.remove());

        // --- Readability: extrae solo el artículo ---
        // 1) Elegimos un contenedor razonable por si Readability falla
        const container = pickMainContainer(document);
        const tmpDOM = new JSDOM(container.outerHTML, { url });
        const reader = new Readability(tmpDOM.window.document);
        const article = reader.parse();

        // Contenido y metadatos
        const mdTitle =
            getMetaContent(document, "citation_title") ||
            article?.title ||
            document.title ||
            titleFromCSV ||
            "Untitled";

        const doi =
            getMetaContent(document, "citation_doi") ||
            getMetaContent(document, "dc.identifier") ||
            "";

        const journal =
            getMetaContent(document, "citation_journal_title") ||
            getMetaContent(document, "prism.publicationName") ||
            getMetaContent(document, "og:site_name") ||
            "";

        const pubDate =
            getMetaContent(document, "citation_publication_date") ||
            getMetaContent(document, "dc.date") ||
            getMetaContent(document, "prism.publicationDate") ||
            "";

        const authors =
            getAllMeta(document, "citation_author").length > 0
                ? getAllMeta(document, "citation_author")
                : []; // algunos sitios no llenan authors en meta

        // Si Readability no devolvió contenido, caemos al contenedor seleccionado
        const contentHTML = article?.content || container.innerHTML;

        // Quitar figuras/aside que meten ruido
        const contentDOM = new JSDOM(contentHTML);
        const cdoc = contentDOM.window.document;
        cdoc.querySelectorAll("figure, aside, .figures, .references, .ref-list").forEach((el) => el.remove());

        // --- Turndown -> Markdown (con GFM para tablas/listas) ---
        const turndown = new TurndownService({ headingStyle: "atx", codeBlockStyle: "fenced" });
        turndown.use(gfm.gfm);
        // Regla: links -> [texto](url) (ya default), imágenes fuera
        turndown.addRule("stripImages", {
            filter: (node) => node.nodeName === "IMG",
            replacement: () => "",
        });

        let bodyMd = turndown.turndown(cdoc.body.innerHTML);

        // Pequeñas limpiezas de markdown
        bodyMd = bodyMd
            .replace(/\n{3,}/g, "\n\n")
            .replace(/[ \t]+$/gm, "")
            .trim();

        // --- Frontmatter + cabecera tipo “paper” ---
        const lines = [];
        lines.push("---");
        lines.push(`title: "${mdTitle.replace(/"/g, '\\"')}"`);
        if (authors.length) lines.push(`authors: [${authors.map((a) => `"${a}"`).join(", ")}]`);
        if (journal) lines.push(`journal: "${journal.replace(/"/g, '\\"')}"`);
        if (pubDate) lines.push(`date: "${pubDate}"`);
        if (doi) lines.push(`doi: "${doi}"`);
        lines.push(`source_url: "${url}"`);
        lines.push("---\n");

        // Encabezado visible
        lines.push(`# ${mdTitle}\n`);
        if (journal || pubDate || doi) {
            const bits = [];
            if (journal) bits.push(`*${journal}*`);
            if (pubDate) bits.push(pubDate);
            if (doi) bits.push(`[doi:${doi}](https://doi.org/${doi})`);
            lines.push(bits.join(", ") + "\n");
        }
        if (authors.length) {
            lines.push(authors.map((a) => `### ${a}`).join("\n") + "\n");
        }

        lines.push(bodyMd);

        const finalMd = lines.join("\n");

        fs.writeFileSync(filePath, finalMd, "utf8");
        console.log(`Saved -> ${filePath}`);
    } catch (err) {
        console.error(`Error [${index}] ${url}: ${err.message}`);
    }
}

async function main() {
    const entries = [];

    fs.createReadStream(INPUT_FILE)
        .pipe(csv({ separator: ";" }))
        .on("data", (row) => {
            const values = Object.values(row);
            if (values.length >= 2) {
                const title = values[0]?.trim();
                const url = values[1]?.trim();
                if (url?.startsWith("http")) {
                    entries.push({ title, url });
                }
            }
        })
        .on("end", async () => {
            console.log(`Found ${entries.length} valid entries. Starting...`);

            for (let i = 0; i < entries.length; i++) {
                await downloadAsMarkdown(entries[i].title, entries[i].url, i + 1);
                if (i < entries.length - 1) {
                    console.log(`Waiting ${DELAY_MS}ms...`);
                    await delay(DELAY_MS);
                }
            }

            console.log("All done ✅");
        });
}

main();
