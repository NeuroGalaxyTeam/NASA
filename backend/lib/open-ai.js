/**
 * @file openaiController.js
 * @description
 * Controlador unificado para trabajar con:
 * - **OpenAI** → embeddings y chat con memoria de sesión (Agents SDK).
 * - **Redis** → búsqueda semántica de contexto.
 *
 * Instrucciones del agente:
 * - "Eres un asistente experto en biología espacial, especializado en el estudio
 *   de los procesos biológicos fuera de la Tierra y sus aplicaciones científicas."
 *
 * Modelos:
 * - Embeddings: `text-embedding-3-small`
 * - Chat: `gpt-5-nano`
 *
 * Variables de entorno requeridas:
 * - `OPENAI_API_KEY`
 * - `REDIS_URL`
 * - `REDIS_DOCUMENT_INDEX`
 */

import OpenAI from "openai";
import { z } from "zod";
import { Agent, run, tool } from "@openai/agents";
import { Redis } from "./redis.js";
import * as dotenv from "dotenv";
dotenv.config();

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const model = process.env.OPENAI_CHAT_MODEL;
const modelEmbedding = process.env.OPENAI_EMBEDDING_MODEL;

/**
 * Genera un embedding numérico a partir de un texto.
 */
export async function embedding(text) {
    if (!text || typeof text !== "string") {
        throw new Error("El parámetro 'text' debe ser un string válido.");
    }

    const response = await client.embeddings.create({
        model: modelEmbedding,
        input: text,
    });

    return response.data[0].embedding;
}

/**
 * Invocación directa sin agente ni memoria (consulta rápida).
 */
export async function invoke(prompt) {
    if (!prompt || typeof prompt !== "string") {
        throw new Error("El parámetro 'prompt' debe ser un string válido.");
    }

    const response = await client.chat.completions.create({
        model: model,
        messages: [{ role: "user", content: prompt }],
    });

    return response.choices[0]?.message?.content || "(sin respuesta del modelo)";
}

/**
 * 🧠 Instrucciones del agente principal
 *
 * Este asistente es un **motor de conocimiento especializado en biología espacial**.
 * Su objetivo es explicar y analizar cómo la vida responde a las condiciones
 * fuera de la Tierra, incluyendo los efectos de la microgravedad, la radiación,
 * la fisiología humana en el espacio, los experimentos en estaciones espaciales,
 * la astrobiología y la biotecnología aplicada al entorno espacial.
 *
 * Cuando un usuario pregunte "¿qué sabes?" o "¿de qué hablas?", el asistente debe
 * responder que su especialidad es **la biología espacial**, explicando brevemente
 * qué estudia esta disciplina.
 *
 * Reglas:
 * - Usa la herramienta `context` para obtener fragmentos relevantes desde Redis.
 * - Si la pregunta es simple (como saludos o agradecimientos), responde sin contexto.
 * - Nunca inventes información no respaldada por la herramienta.
 * - Responde con claridad, rigor científico y sin exceder los 250 tokens.
 * - Adapta el nivel de detalle según el usuario (estudiante, investigador o público general).
 *
 * const agentInstructions = `
 * Eres un asistente experto en biología espacial.
 *
 * Tu especialidad es explicar cómo los organismos vivos se comportan, adaptan y evolucionan
 * fuera de la Tierra, incluyendo los efectos de la microgravedad, la radiación cósmica,
 * la fisiología humana en misiones espaciales y las aplicaciones en astrobiología y biotecnología.
 *
 * Cuando un usuario te pregunte "¿qué sabes?" o "¿sobre qué temas hablas?",
 * debes responder que eres un motor de conocimiento especializado en **biología espacial**
 * y que tu base de información proviene de artículos científicos procesados en Redis.
 *
 * Usa la herramienta \`context\` para obtener fragmentos relevantes desde la base de conocimiento.
 * Responde de manera clara, concisa y basada en evidencia, con un máximo de 250 tokens.
 * `;
 *
 */
const agentInstructions = `
Eres un asistente experto en biología espacial.

Tu especialidad es explicar cómo los organismos vivos se comportan, adaptan y evolucionan
fuera de la Tierra, incluyendo los efectos de la microgravedad, la radiación cósmica,
la fisiología humana en misiones espaciales y las aplicaciones en astrobiología y biotecnología.

Siempre que respondas, debes **consultar primero la documentación oficial**
a través de la herramienta \`context\`. Usa la herramienta para recuperar
fragmentos relevantes antes de generar tu respuesta.  
Solo si la pregunta es trivial o de saludo (ej. "hola", "gracias"),
puedes contestar sin usar la herramienta.

Reglas:
- Usa el contenido recuperado con \`context\` como fuente principal.
- Si la herramienta no devuelve nada útil, responde con base en tu conocimiento general, pero deja claro que no encontraste información oficial.
- Nunca inventes información no respaldada por la herramienta.
- Responde de manera breve, clara y comprensible, no mas de 250 tokens.
`;

/**
 * Chat con memoria y perfil de usuario.
 */
export async function chat(sessionId, text, userProfile = null) {
    if (!sessionId || typeof sessionId !== "string") {
        throw new Error("El parámetro 'sessionId' debe ser un string válido.");
    }
    if (!text || typeof text !== "string") {
        throw new Error("El parámetro 'text' debe ser un string válido.");
    }
    if (!model) {
        throw new Error("El modelo de chat no está configurado.");
    }

    const stored = await Redis.get(`session:${sessionId}`);
    const history = stored?.messages ?? [];

    let profile = stored?.profile ?? null;
    if (userProfile) profile = userProfile;

    const profileContext = profile
        ? `\nEl usuario tiene el siguiente perfil:\n- Nombre: ${profile.name}\n- Profesión: ${profile.Role}\n- Edad: ${profile.age}\nAdapta tus respuestas a este contexto.`
        : "";

    const newTurn = [{ role: "user", content: text }];

    const agentDef = new Agent({
        name: "BIOLOGIA_ESPACIAL_AI",
        instructions: (agentInstructions.trim() + profileContext),
        model,
        tools: [contextTool],
    });

    const inputText = [...history, ...newTurn]
        .map(m => `${m.role.toUpperCase()}: ${m.content}`)
        .join("\n");

    const result = await run(agentDef, inputText, { stream: false });
    const output = (result?.finalOutput ?? result?.text);

    const assistantMsg = { role: "assistant", content: String(output) };
    const updatedHistory = [...history, ...newTurn, assistantMsg];

    await Redis.set(`session:${sessionId}`, { messages: updatedHistory, profile });

    return String(output) || "(sin respuesta del modelo)";
}

/**
 * Tool: context
 * Recupera fragmentos relevantes desde Redis.
 */
export const contextTool = tool({
    name: "context",
    description: "Busca información en la base de conocimiento de biología espacial (Redis).",
    parameters: z.object({
        query: z.string().describe("Consulta o tema sobre biología espacial."),
        k: z.number().default(2).describe("Número de fragmentos relevantes a recuperar (1-3)."),
    }),
    strict: true,
    async execute({ query, k }) {
        try {
            const vector = await embedding(query);
            const results = await Redis.search(
                String(process.env.REDIS_DOCUMENT_INDEX),
                vector,
                k > 3 ? 3 : k
            );

            if (!results.length) return "";

            return results.map(r => r.text).join("\n");
        } catch (e) {
            console.error(e);
            return "";
        }
    },
});
