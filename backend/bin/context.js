#!/usr/bin/env node
/**
 * @file context.js
 * @description
 * Limpia el índice 'articles' de Redis y vuelve a indexar
 * todos los archivos .md de la carpeta `articles/`.
 */

import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import OpenAI from "openai";
import { Redis } from "../lib/redis.js";

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

async function main() {
    console.log("🚀 Iniciando indexación de artículos Markdown...");

    const articlesDir = path.join(process.cwd(), "articles");
    if (!fs.existsSync(articlesDir)) {
        console.error("❌ Carpeta 'articles/' no encontrada.");
        process.exit(1);
    }

    // 🧹 Limpiar el índice anterior
    console.log("🧨 Eliminando índice anterior de Redis...");
    await Redis.drop("articles");

    // 📚 Crear un nuevo índice limpio
    await Redis.create("articles");
    console.log("✅ Nuevo índice 'articles' creado en Redis.");

    // 📄 Obtener los archivos .md
    const files = fs.readdirSync(articlesDir).filter(f => f.endsWith(".md"));
    if (files.length === 0) {
        console.log("⚠️ No se encontraron archivos .md en 'articles/'.");
        process.exit(0);
    }

    // 🔁 Procesar e indexar cada archivo
    for (const file of files) {
        const filePath = path.join(articlesDir, file);
        const content = fs.readFileSync(filePath, "utf8");

        console.log(`🧩 Procesando: ${file}...`);

        try {
            const embeddingResponse = await openai.embeddings.create({
                model: "text-embedding-3-small",
                input: content,
            });

            const embedding = embeddingResponse.data[0].embedding;
            await Redis.record("articles", content, embedding);

            console.log(`✅ ${file} indexado correctamente.`);
        } catch (err) {
            console.error(`❌ Error en ${file}:`, err.message);
        }
    }

    console.log("🏁 Indexación completada con éxito.");
}

main();
