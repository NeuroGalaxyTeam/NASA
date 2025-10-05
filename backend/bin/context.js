#!/usr/bin/env node
/**
 * @file index-to-redis.js
 * @description
 * Lee los archivos de `assets/chunks/*.json` y los guarda en Redis.
 */

import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

import { Redis } from "../lib/redis.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const chunksDir = path.resolve(__dirname, "../assets/chunks");
const indexName = process.env.REDIS_DOCUMENT_INDEX;

async function indexFromFile(chunkPath) {
    const data = JSON.parse(fs.readFileSync(chunkPath, "utf-8"));
    for (const { text, embedding } of data.chunks) {
        await Redis.record(indexName, text, embedding);
    }
}

async function main() {
    console.log("Redis chunk record started");
    if (!fs.existsSync(chunksDir)) {
        console.error("❌ No existe la carpeta chunks/");
        process.exit(1);
    }

    const files = fs.readdirSync(chunksDir).filter(f => f.endsWith(".json"));
    if (files.length === 0) {
        console.log("ℹ️ No se encontraron archivos JSON.");
        return;
    }

    console.log("🛠️ Asegurando índice en Redis...");
    await Redis.create(indexName);

    for (const file of files) {
        const chunkPath = path.join(chunksDir, file);
        try {
            await indexFromFile(chunkPath);
            console.log(`✅ Indexado: ${file}`);
        } catch (err) {
            console.error(`❌ Error indexando ${file}:`, err.message);
        }
    }

    console.log("🚀 Todos los archivos han sido indexados en Redis.");
    await Redis.client.quit();
    console.log("🔌 Conexión Redis cerrada");
}

main().catch(err => {
    console.error("❌ Error general:", err);
    process.exit(1);
});
