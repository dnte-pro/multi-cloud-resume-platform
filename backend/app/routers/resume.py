import json

from pathlib import Path

from fastapi import APIRouter

router = APIRouter()

DATA = Path(__file__).parent.parent / "data" / "resume.json"

@router.get("/resume")
def get_resume():

    with open(DATA) as file:
        return json.load(file)