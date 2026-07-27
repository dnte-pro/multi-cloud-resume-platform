from fastapi import FastAPI

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

app.include_router(health.router)
app.include_router(resume.router)
app.include_router(skills.router)
app.include_router(projects.router)
app.include_router(visitors.router)