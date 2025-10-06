# 🚀 NASA Space Apps — NeuroGalaxy

[👉 Probar la app (demo)](http://ec2-13-58-13-245.us-east-2.compute.amazonaws.com)

Platform that **ingests, indexes, searches, and visualizes** space biology knowledge (papers, datasets, and mission guides) to speed up hypotheses and decisions with **semantic search** and **source traceability**.

## Basic Usage

- Open the **frontend** in your browser.  
  - Local: `http://localhost:5173`
  - **Demo:** `http://ec2-13-58-13-245.us-east-2.compute.amazonaws.com`
- Type a query in the **chat**.  
- Review **evidence/citations** attached to each result (when applicable).  
- To ingest new documents, use the ingestion endpoint or the scripts in `scripts/`.


- **Frontend:** chat + results + evidence panel
- **Backend:** REST API for search, ingestion, and citations
- **Infra:** runnable locally with Docker or Node

---

## 📑 Table of Contents
- [Context](#context)
- [Architecture](#architecture)
- [Stack](#stack)
- [Repository Structure](#repository-structure)
- [Requirements](#requirements)
- [Environment Variables](#environment-variables)
- [Quick Start: Run Locally](#quick-start-run-locally)
    - [Option A: Docker (recommended)](#option-a-docker-recommended)
    - [Option B: Node (without Docker)](#option-b-node-without-docker)
- [Basic Usage](#basic-usage)
- [Main Endpoints](#main-endpoints)
- [Sample Data](#sample-data)
- [Cloud Deployment](#cloud-deployment)
- [Troubleshooting](#troubleshooting)
- [Roadmap](#roadmap)
- [Team](#team)
- [Acknowledgments](#acknowledgments)

---

## Context
Project for the **NASA International Space Apps Challenge**. The goal: bring reusable scientific evidence closer with a simple, reproducible, and portable UX.

---

## Architecture

Sources (NASA/PMC) → Ingestion/Cleaning → Text/Embeddings → Backend API → Frontend (Chat + Evidence)

- Ingestion: normalizes documents (PDF/HTML).
- Indexing: vector + keywords for hybrid search.
- API: search, source citation, healthcheck.
- UI: chat with results, snippets, and links to evidence.

---

## Stack

- **Backend:** Node.js / Express  
- **Vector/Search:** Redis Stack (FT + Vector) or alternatives (OpenSearch / Postgres+pgvector)  
- **Frontend:** React (Vite)  
- **Containers (optional):** Docker  
- **CI/CD (optional):** GitHub Actions

---

## Repository Structure

.
├─ backend/ # API: /search, /ingest, /health, etc.
├─ frontend/ # UI: chat + evidence panel
├─ docs/ # Documentation and technical notes
├─ scripts/ # ingestion/indexing utilities
├─ README.md
└─ .env.example # sample values for variables (if present)

yaml
Copiar código

---

## Requirements

- **Windows / macOS / Linux**
- **Node.js 18+** (to run without Docker and/or scripts)
- **Docker Desktop 4.x** (optional, for Option A)

---

## Environment Variables

Create a `.env` file in the **repo root** (you can copy from `.env.example` if available):

.env (example)
NODE_ENV=development
PORT=3000
REDIS_URL=redis://localhost:6379

If you use OpenSearch/Supabase or others, add their credentials here.
FRONTEND_URL=http://localhost:5173
BACKEND_URL=http://localhost:3000

yaml
Copiar código

> Adjust ports/URLs according to your environment.

---

## Quick Start: Run Locally

### Option A: Docker (recommended)

1. **Clone the repo**
git clone https://github.com/NeuroGalaxyTeam/NASA.git
cd NASA

markdown
Copiar código

2. **Variables**
- Copy `.env.example` to `.env` and edit it, or create your `.env`.

3. **Start services**
docker compose up -d

markdown
Copiar código

4. **Check status and logs**
docker compose ps
docker compose logs -f backend

markdown
Copiar código

5. **Shut down**
docker compose down

yaml
Copiar código

> Note: If you see warnings about the `version` attribute in your compose file, you can remove that key locally so the warning disappears (Compose v2 no longer uses it). Not mandatory—just aesthetic.

---

### Option B: Node (without Docker)

**Backend**
1. Go to `backend/`  
2. Install dependencies:
npm install

markdown
Copiar código
3. Start:
npm run dev

markdown
Copiar código
- By default exposes `http://localhost:3000` (adjustable with `PORT`).

**Frontend**
1. Go to `frontend/`  
2. Install:
npm install

markdown
Copiar código
3. Start:
npm run dev

yaml
Copiar código
- By default exposes `http://localhost:5173`.  
- Make sure the frontend knows `BACKEND_URL` (via `.env` or project config).

---

## Basic Usage

- Open the **frontend** in your browser.  
- Type a query in the **chat**.  
- Review **evidence/citations** attached to each result (when applicable).  
- To ingest new documents, use the ingestion endpoint or the scripts in `scripts/`.

---

## Main Endpoints

- `GET /health` → Service status  
- `POST /search` → Body: `{ "query": "string" }` → Returns results with metadata and citations  
- `POST /ingest` → Upload/update documents in the index

> See `backend/` for details and additional parameters.

---

## Sample Data

- `docs/` folder and/or utilities in `scripts/` for quick loads.  
- You can start with a couple of public PDFs/HTML and run the ingestion flow.

---

## Cloud Deployment

Add your URLs here once published:

- **Frontend (App):** `https://YOUR-FRONTEND-DOMAIN`
- **Backend (API):** `https://YOUR-API-DOMAIN/health`

Suggested paths:
- **Azure**: Container Apps (backend) + Static Web Apps (frontend)  
- **Google Cloud**: Cloud Run (backend) + Firebase Hosting (frontend)

> When you have production URLs, edit this section so anyone can access.

---

## Troubleshooting

- **Frontend doesn’t “see” the backend**  
- Check `BACKEND_URL` in the frontend and CORS in the backend.
- **Ports in use**  
- Change `PORT` in `.env` or the dev server ports for Vite.
- **Redis doesn’t respond**  
- Ensure the correct `REDIS_URL` and that the service is running.
- **Compose warning about `version`**  
- It’s safe to remove the `version` key from the local compose file (Compose v2 doesn’t use it).

---

## Roadmap

- PMC connector (batch downloads)  
- Deduplication and adaptive PDF chunking  
- Hybrid reranking (BM25 + embeddings)  
- Annotation UI and export (CSV/JSON)  
- Offline mode with local cache

---

## Team

- Henry Escobar — Backend  
- Rodrigo Salcedo — Backend  
- Adrián Mejía — Backend  
- Lucía López — Frontend  
- Jimmy Morales — Frontend  
- Lisseth Chilin — Frontend

---

## Acknowledgments

- NASA Space Apps  
- Local communities and mentors  
- Open sources (PMC, public datasets)
