# 🚀 Proyecto: Motor de Conocimiento para Biología Espacial

> Participación en **NASA International Space Apps Challenge**

---

## 🧭 Resumen
Construimos una plataforma que **indexa, busca y visualiza** conocimiento de biología espacial (papers, datasets y guías de misión) para acelerar hipótesis y toma de decisiones. El sistema ofrece un **chat de consulta**, búsqueda semántica y paneles de evidencia trazables a las fuentes.

**Objetivo:** acercar evidencia científica reutilizable a equipos de investigación, educación y divulgación con una experiencia simple, reproducible y portable (Docker).

---

## 🧩 Problema que abordamos
- La información crítica (papers PMC, reportes de misión, guías) está **dispersa y en múltiples formatos**.
- Las búsquedas por palabras clave **no bastan**: necesitamos **semántica** y **trazabilidad**.
- Equipos con recursos limitados requieren **despliegues simples**, reproducibles y con **costos mínimos**.

---

## 💡 Nuestra solución
- **Ingesta** de PDFs/HTML (PMC/NASA), limpieza y normalización.
- **Vectorización** (embeddings) para consultas semánticas.
- **API** para búsqueda híbrida (texto + semántica) y citación de fuentes.
- **Frontend** con chat, vista de resultados, filtros y panel de evidencia.
- **Contenedores Docker** para levantar todo local o en la nube (Azure/GCP).

---

## 🏗️ Arquitectura (alto nivel)
```
┌──────────────┐   PDFs/HTML   ┌───────────────┐       ┌─────────────┐
│   Fuentes    │──────────────▶│  Ingesta &    │  TXT  │  Embeddings │
│ (NASA/PMC)   │                │  Limpieza     │──────▶│  + Storage  │
└──────────────┘                └───────────────┘       └─────┬───────┘
                                                                │
                                                     ┌──────────┴─────────┐
                                                     │      Backend API   │
                                                     │  (search, cites)   │
                                                     └──────────┬─────────┘
                                                                │
                                                         ┌───────┴───────┐
                                                         │   Frontend    │
                                                         │  (chat+UI)    │
                                                         └───────────────┘
```

---

## 🛠️ Stack
- **Backend:** Node.js / Express (API REST)
- **Búsqueda:** Redis Stack / OpenSearch (opcional)
- **Vector DB:** Redis (FT + Vector), opcional Supabase pgvector
- **Frontend:** Vite/React o equivalente (build estático)
- **Orquestación:** Docker Compose
- **CI/CD:** GitHub Actions (despliegue a Azure/GCP)

> Nota: este README asume Redis Stack por simplicidad. Puedes cambiar a OpenSearch/Supabase activando servicios en `docker-compose.yml`.

---

## 📦 Requisitos
- **Windows / macOS / Linux**
- **Docker Desktop 4.x** (Compose v2)
- **Node.js 18+** (para scripts locales)

---

## ⚙️ Variables de entorno
Crea un archivo `.env` en la raíz (no se sube al repo). Ejemplo:

```bash
# .env (ejemplo)
NODE_ENV=production
PORT=3000
REDIS_URL=redis://redis:6379
# Para Redis Stack UI (local): http://localhost:8001
# Si usas OpenSearch/Supabase, añade aquí sus credenciales.
```

Incluimos **`.env.example`** para referencia.

---

## ▶️ Ejecución local
### Opción A — Docker Compose (recomendada)
```bash
# Levantar
docker compose up -d

# Ver estado
docker compose ps

# Logs
docker compose logs -f backend

# Bajar
docker compose down
```
> Sugerencia: elimina `version:` y evita `container_name:` en `docker-compose.yml`. Puedes fijar un nombre de proyecto con `name: nasa` en el YAML o usar `docker compose -p nasa ...`.

### Opción B — Scripts npm (si el repo los define)
```bash
npm run start   # levanta servicios
npm run stop    # detiene servicios
```

---

## 🔌 Endpoints (API)
- `GET /health` → estado del servicio
- `POST /search` → { query: string } ⇒ resultados + citas
- `POST /ingest` → carga/actualiza documentos (según configuración)

> Ver `backend/README.md` para parámetros y ejemplos.

---

## 🧪 Datos de prueba
- Incluimos un set mínimo de documentos de ejemplo (carpeta `docs/` o script en `scripts/`).
- Para ingestar localmente, ejecuta el script correspondiente (ver documentación del backend).

---

## ☁️ Despliegue en la nube

### Azure (rápido y con costo bajo)
**Backend → Azure Container Apps** | **Frontend → Azure Static Web Apps**

```bash
# Login y recurso
az login
az group create -n rg-nasa -l eastus

# Registry
az acr create -n acrnasaxxx -g rg-nasa --sku Basic
az acr login -n acrnasaxxx

# Backend: build & push
docker build -t acrnasaxxx.azurecr.io/api:v1 backend
docker push acrnasaxxx.azurecr.io/api:v1

# Container Apps
az extension add -n containerapp --upgrade
az containerapp env create -n env-nasa -g rg-nasa -l eastus
az containerapp create -n api-nasa -g rg-nasa \
  --environment env-nasa \
  --image acrnasaxxx.azurecr.io/api:v1 \
  --ingress external --target-port 3000 \
  --registry-server acrnasaxxx.azurecr.io \
  --env-vars NODE_ENV=production REDIS_URL=${REDIS_URL}

# Frontend: Azure Static Web Apps (desde GitHub, workflow auto)
```

### Google Cloud (simple y escalable)
**Backend → Cloud Run** | **Frontend → Firebase Hosting**

```bash
gcloud auth login
gcloud config set project <PROJECT_ID>
gcloud services enable run.googleapis.com artifactregistry.googleapis.com

# Artifact Registry
gcloud artifacts repositories create repo-nasa --repository-format=docker --location=us-central1
gcloud auth configure-docker us-central1-docker.pkg.dev

# Backend: build & push
docker build -t us-central1-docker.pkg.dev/<PROJECT_ID>/repo-nasa/api:v1 backend
docker push us-central1-docker.pkg.dev/<PROJECT_ID>/repo-nasa/api:v1

# Cloud Run
gcloud run deploy api-nasa \
  --image us-central1-docker.pkg.dev/<PROJECT_ID>/repo-nasa/api:v1 \
  --region us-central1 --allow-unauthenticated \
  --set-env-vars NODE_ENV=production,REDIS_URL=${REDIS_URL}

# Frontend: Firebase Hosting
npm i -g firebase-tools
firebase login
firebase init hosting   # carpeta de salida: frontend/dist
npm --prefix frontend run build
firebase deploy
```

---

## 🔄 CI/CD (GitHub Actions)
Ejemplo mínimo para Cloud Run (`.github/workflows/deploy-cloudrun.yml`):
```yaml
name: Deploy Cloud Run
on: [push]
jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions: { contents: read, id-token: write }
    steps:
      - uses: actions/checkout@v4
      - uses: google-github-actions/auth@v2
        with:
          workload_identity_provider: ${{ secrets.GCP_WIF_PROVIDER }}
          service_account: ${{ secrets.GCP_SA_EMAIL }}
      - name: Build & Push
        run: |
          gcloud auth configure-docker us-central1-docker.pkg.dev -q
          docker build -t us-central1-docker.pkg.dev/$PROJECT/repo-nasa/api:${GITHUB_SHA} backend
          docker push us-central1-docker.pkg.dev/$PROJECT/repo-nasa/api:${GITHUB_SHA}
        env:
          PROJECT: ${{ secrets.GCP_PROJECT_ID }}
      - name: Deploy
        run: |
          gcloud run deploy api-nasa \
            --image us-central1-docker.pkg.dev/$PROJECT/repo-nasa/api:${GITHUB_SHA} \
            --region us-central1 --platform managed \
            --allow-unauthenticated
        env:
          PROJECT: ${{ secrets.GCP_PROJECT_ID }}
```

---

## 📐 Buenas prácticas
- **No subas** `.env`; usa `.env.example`.
- Añade `/health` y logs a stdout para observabilidad en nube.
- Documenta decisiones de diseño en `docs/`.
- Controla CORS si FE/BE están en dominios distintos.
- Revisa costos: usa servicios serverless y almacenamiento de bajo costo.

---

## 📊 Roadmap
- [ ] Conector directo a API de PMC (descarga por lotes)
- [ ] Deduplicación y chunking adaptativo de PDFs
- [ ] Reranking híbrido (BM25 + embeddings)
- [ ] UI de anotaciones y exportación a CSV/JSON
- [ ] Modo offline con caché local

---

## 🧑‍🤝‍🧑 Equipo
- Nombre Apellido — rol
- Nombre Apellido — rol
- …

Contacto: equipo@example.com

---

## 📝 Licencia
MIT (o la que defina el equipo). Ver `LICENSE`.

---

## 🙌 Agradecimientos
- NASA Space Apps
- Comunidades locales y mentores
- Fuentes abiertas (PMC, datasets públicos)

