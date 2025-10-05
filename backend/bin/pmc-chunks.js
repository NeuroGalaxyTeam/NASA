#!/usr/bin/env node
/**
 * @file generate-chunks.js
 * @description
 * Genera fragmentos densos y embeddings desde `assets/articles/*.md`
 * y los guarda como JSON en `assets/chunks/`.
 */

import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

import { invoke, embedding } from "../lib/open-ai.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const articlesDir = path.resolve(__dirname, "../assets/articles");
const chunksDir = path.resolve(__dirname, "../assets/chunks");

if (!fs.existsSync(chunksDir)) fs.mkdirSync(chunksDir, { recursive: true });

function extractText(filePath) {
    return fs.readFileSync(filePath, "utf-8");
}

function splitText(text, maxLen = 2000) {
    const parts = [];
    let current = "";

    for (const sentence of text.split(/(\.|\n)/)) {
        if (current.length + sentence.length > maxLen) {
            parts.push(current.trim());
            current = "";
        }
        current += sentence;
    }
    if (current.trim()) parts.push(current.trim());
    return parts;
}

async function processFile(mdPath, chunkPath) {
    console.log(`📄 Procesando: ${mdPath}`);

    const rawText = extractText(mdPath);

    console.log("⚙️ Dividiendo en fragmentos...");
    const denseText = await invoke(
        `
      Instrucciones:
        Vas a procesar un texto largo en inglés.
        1. Divide el texto en fragmentos completamente auto-contenidos.
           - Cada fragmento debe poder leerse y entenderse por sí mismo, incluso si el lector no ve los otros.
           - Repite la información necesaria para que tenga sentido aislado (por ejemplo: tema general, qué son las proteínas 14-3-3, especie, relevancia).
        2. Mantén frases completas, nunca cortes ideas a la mitad.
        3. Cada fragmento debe tener entre 200 y 500 palabras.
        4. Devuelve los fragmentos traducidos al español con un tono neutro.
        5. No enumeres, no enlaces los fragmentos.
        6. Devuelve únicamente los fragmentos, separados por doble salto de línea.
        7. Genera al menos 5 fragmentos, aunque debas reorganizar o repetir contenido.
    
      Texto:
      ${rawText}
      `
    );


    const texts = splitText(denseText).filter(t => t.length >= 50);

    const result = {
        file: path.basename(mdPath),
        chunks: []
    };

    for (const text of texts) {
        const vector = await embedding(text);
        result.chunks.push({ text, embedding: vector });
    }

    fs.writeFileSync(chunkPath, JSON.stringify(result, null, 2), "utf-8");
    console.log(`✅ Guardado: ${chunkPath}`);
}

async function main() {
    if (!fs.existsSync(articlesDir)) {
        console.error("❌ No existe la carpeta articles/");
        process.exit(1);
    }

    const files = fs.readdirSync(articlesDir).filter(f => f.endsWith(".md"));
    if (files.length === 0) {
        console.log("ℹ️ No se encontraron archivos MD.");
        return;
    }

    let i = 0;
    for (const file of files) {
        // if (i >= 1) {
        //     console.log("⏹️ Límite de 10 archivos alcanzado, se detiene.");
        //     break;
        // }

        const mdPath = path.join(articlesDir, file);
        const chunkPath = path.join(chunksDir, file.replace(/\.md$/, ".json"));

        if (!fs.existsSync(chunkPath)) {
            try {
                await processFile(mdPath, chunkPath);
                i++;
            } catch (err) {
                console.error(`❌ Error generando ${file}:`, err.message);
                if (err.code === "rate_limit_exceeded") {
                    console.log("⏳ Esperando 90s por límite de tokens...");
                    await new Promise(res => setTimeout(res, 90000));
                }
            }
        } else {
            console.log(`⏭️ Ya existe: ${chunkPath}, se omite generación`);
        }
    }

    console.log("✅ Finalizado: generación de chunks");
}

main().catch(err => {
    console.error("❌ Error general:", err);
    process.exit(1);
});