import json

from pathlib import Path

from fastapi import APIRouter

router = APIRouter()

DATA = Path(__file__).parent.parent / "data" / "resume.json"

@router.get("/projects")
def get_projects():

    with open(DATA) as file:
        data = json.load(file)

    return data["projects"]