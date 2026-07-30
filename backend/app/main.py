import os
from pathlib import Path

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from app.routers import (
    health,
    resume,
    skills,
    projects,
    visitors,
)

app = FastAPI(
    title="Multi-Cloud Resume API",
    version="1.0.0"
)

frontend_origins = os.getenv(
    "FRONTEND_ORIGINS", "http://localhost:5173,http://127.0.0.1:5173"
).split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=frontend_origins,
    # Vite automatically selects another port when 5173 is occupied.
    allow_origin_regex=r"https?://(localhost|127\.0\.0\.1)(:\d+)?",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health.router)
app.include_router(resume.router)
app.include_router(skills.router)
app.include_router(projects.router)
app.include_router(visitors.router)

# A production run uses one origin: FastAPI serves both its API and the Vite
# build. API routes above are registered before this catch-all static mount.
frontend_dist = Path(__file__).resolve().parents[2] / "frontend" / "dist"
if frontend_dist.is_dir():
    app.mount("/", StaticFiles(directory=frontend_dist, html=True), name="frontend")
