# 🚀 NASA Space Apps — NeuroGalaxy

Plataforma que **ingesta, indexa, busca y visualiza** conocimiento de biología espacial (papers, datasets y guías de misión) para acelerar hipótesis y decisiones con **búsqueda semántica** y **trazabilidad de fuentes**.

- **Frontend:** chat + resultados + panel de evidencia
- **Backend:** API REST para búsqueda, ingesta y citas
- **Infra:** ejecutable en local con Docker o Node

---

## 📑 Tabla de contenidos
- [Contexto](#contexto)
- [Arquitectura](#arquitectura)
- [Stack](#stack)
- [Estructura del repositorio](#estructura-del-repositorio)
- [Requisitos](#requisitos)
- [Variables de entorno](#variables-de-entorno)
- [Guía rápida: correr en local](#guía-rápida-correr-en-local)
    - [Opción A: Docker (recomendada)](#opción-a-docker-recomendada)
    - [Opción B: Node (sin Docker)](#opción-b-node-sin-docker)
- [Uso básico](#uso-básico)
- [Endpoints principales](#endpoints-principales)
- [Datos de prueba](#datos-de-prueba)
- [Despliegue en la nube](#despliegue-en-la-nube)
- [Solución de problemas](#solución-de-problemas)
- [Roadmap](#roadmap)
- [Equipo](#equipo)
- [Licencia](#licencia)
- [Agradecimientos](#agradecimientos)

---

## Contexto
Proyecto para **NASA International Space Apps Challenge**. La meta: acercar evidencia científica reutilizable con una UX simple, reproducible y portable.

---

## Arquitectura

Fuentes (NASA/PMC) → Ingesta/Limpieza → Texto/Embeddings → Backend API → Frontend (Chat + Evidencia)

yaml
Copiar código

- Ingesta: normaliza documentos (PDF/HTML).
- Indexado: vectorial + palabras clave para búsquedas híbridas.
- API: búsqueda, cita de fuentes, healthcheck.
- UI: chat con resultados, snippets y enlaces a evidencias.

---

## Stack

- **Backend:** Node.js / Express
- **Vector/Search:** Redis Stack (FT + Vector) o alternativos (OpenSearch / Postgres+pgvector)
- **Frontend:** React (Vite)
- **Contenedores (opcional):** Docker
- **CI/CD (opcional):** GitHub Actions

---

## Estructura del repositorio

.
├─ backend/ # API: /search, /ingest, /health, etc.
├─ frontend/ # UI: chat + panel de evidencia
├─ docs/ # Documentación y notas técnicas
├─ scripts/ # utilidades de ingestión/indexado
├─ README.md
└─ .env.example # valores de ejemplo para variables (si existe)

yaml
Copiar código

---

## Requisitos

- **Windows / macOS / Linux**
- **Node.js 18+** (para correr sin Docker y/o scripts)
- **Docker Desktop 4.x** (opcional, para la Opción A)

---

## Variables de entorno

Crea un archivo `.env` en la **raíz** del repo (puedes copiar desde `.env.example` si existe):

.env (ejemplo)
NODE_ENV=development
PORT=3000
REDIS_URL=redis://localhost:6379

Si usas OpenSearch/Supabase u otros, agrega sus credenciales aquí.
FRONTEND_URL=http://localhost:5173
BACKEND_URL=http://localhost:3000
yaml
Copiar código

> Ajusta puertos/URLs según tu entorno.

---

## Guía rápida: correr en local

### Opción A: Docker (recomendada)

1. **Clonar el repo**
   git clone https://github.com/NeuroGalaxyTeam/NASA.git
   cd NASA

markdown
Copiar código

2. **Variables**
- Copia `.env.example` a `.env` y edítalo, o crea tu `.env`.

3. **Levantar servicios**
   docker compose up -d

markdown
Copiar código

4. **Ver estado y logs**
   docker compose ps
   docker compose logs -f backend

markdown
Copiar código

5. **Apagar**
   docker compose down

yaml
Copiar código

> Nota: Si ves advertencias sobre el atributo `version` en tu compose, puedes remover esa clave en tu archivo local para que no aparezca el warning (Compose v2 ya no la usa). No es obligatorio, solo estético.

---

### Opción B: Node (sin Docker)

**Backend**
1. Ir a la carpeta `backend/`
2. Instalar dependencias:
   npm install

markdown
Copiar código
3. Iniciar:
   npm run dev

markdown
Copiar código
- Por defecto expone `http://localhost:3000` (ajustable con `PORT`).

**Frontend**
1. Ir a `frontend/`
2. Instalar:
   npm install

markdown
Copiar código
3. Iniciar:
   npm run dev

yaml
Copiar código
- Por defecto expone `http://localhost:5173`.
- Asegúrate de que el frontend conozca el `BACKEND_URL` (vía `.env` o configuración del proyecto).

---

## Uso básico

- Abre el **frontend** en tu navegador.
- Escribe una consulta en el **chat**.
- Revisa **evidencias/citas** adjuntas a cada resultado (cuando aplique).
- Para ingestar nuevos documentos, usa el endpoint de ingesta o los scripts en `scripts/`.

---

## Endpoints principales

- `GET /health` → Estado del servicio
- `POST /search` → Cuerpo: `{ "query": "string" }` → Devuelve resultados con metadatos y citas
- `POST /ingest` → Carga/actualiza documentos en el índice

> Revisa `backend/` para detalles y parámetros adicionales.

---

## Datos de prueba

- Carpeta `docs/` y/o utilidades en `scripts/` para cargas rápidas.
- Puedes empezar con un par de PDFs/HTML públicos y ejecutar el flujo de ingesta.

---

## Despliegue en la nube

Incluye aquí tus URLs una vez publicadas:

- **Frontend (App):** `https://TU-DOMINIO-FRONTEND`
- **Backend (API):** `https://TU-DOMINIO-API/health`

Rutas sugeridas:
- **Azure**: Container Apps (backend) + Static Web Apps (frontend)
- **Google Cloud**: Cloud Run (backend) + Firebase Hosting (frontend)

> Cuando tengas las URLs productivas, edítalas en este apartado para que cualquiera pueda acceder.

---

## Solución de problemas

- **El frontend no “ve” al backend**
- Verifica `BACKEND_URL` en el frontend y CORS en el backend.
- **Puertos ocupados**
- Cambia `PORT` en `.env` o los puertos del dev server de Vite.
- **Redis no responde**
- Asegura `REDIS_URL` correcto y que el servicio esté corriendo.
- **Advertencia de Compose sobre `version`**
- Es seguro eliminar la clave `version` del compose local (en Compose v2 ya no se usa).

---

## Roadmap

- Conector PMC (descarga por lotes)
- Deduplicación y chunking adaptativo de PDFs
- Reranking híbrido (BM25 + embeddings)
- UI de anotaciones y exportación (CSV/JSON)
- Modo offline con caché local

---

## Equipo

- Henry Escobar -    Backend
- Rodrigo Salcedo -  Backend
- Adrián Mejía -     Backend
- Lucía López -      Fronted
- Jimmy Morales -    Fronted
- Lisseth Chilin -   Fronted


---


---

## Agradecimientos

- NASA Space Apps
- Comunidades locales y mentores
- Fuentes abiertas (PMC, datasets públicos)