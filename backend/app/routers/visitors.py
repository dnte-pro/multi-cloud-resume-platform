from fastapi import APIRouter

router = APIRouter()

count = 0

@router.post("/visit")
def visit():

    global count

    count += 1

    return {
        "visitors": count
    }