# Multi-Cloud Resume Platform

A production-style multi-cloud portfolio demonstrating:

- Azure Static Website Hosting
- Azure CDN
- AWS ECS
- Docker
- FastAPI
- DynamoDB
- Terraform
- GitHub Actions
- CloudWatch Monitoring

## Architecture

The React/Vite frontend obtains portfolio content from the FastAPI backend.
During local development it calls FastAPI at `http://127.0.0.1:8000`. In
production, set `VITE_API_URL` to the public FastAPI origin, or configure the
web server to route `/api/*` to FastAPI.

## Run locally

From the project root, start both services with one command:

```bash
npm run dev
```

This starts FastAPI on port 8000 before it starts Vite, so the frontend can
load `resume.json` through `GET /resume`. Stop it once with `Ctrl+C` to stop
both services.

To start services separately, use two terminals:

```bash
cd backend
.venv/bin/python -m uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
```

```bash
cd frontend
npm install
npm run dev
```

Open the URL printed by Vite (normally `http://localhost:5173`). Verify the
backend separately at `http://127.0.0.1:8000/health` or its API docs at
`http://127.0.0.1:8000/docs`.

### Serve the complete application through FastAPI

This is the production-style path and avoids a separate frontend host. Build
the React application first, then start FastAPI:

```bash
cd frontend
npm run build

cd ../backend
.venv/bin/python -m uvicorn app.main:app --host 127.0.0.1 --port 8000
```

Open `http://127.0.0.1:8000/`. The page and `GET /resume` are now served by the
same FastAPI application. Refresh after editing `resume.json` to see the new
data; restart FastAPI only when Python code changes.

The same production-style flow is available as `npm run build` followed by
`npm run serve`.

## API

- `GET /resume` returns the profile, skills, and project content.
- `GET /skills` and `GET /projects` return their respective collections.
- `POST /visit` increments the current process's visitor count.

`/visit` is intentionally an in-memory development implementation. It resets
when FastAPI restarts and is not shared by multiple instances; use DynamoDB or
another database before treating it as a production visitor counter.
