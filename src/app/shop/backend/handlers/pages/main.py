from fastapi import APIRouter, Request
from fastapi.responses import HTMLResponse

from app.shop.backend.core.extensions import templates


router = APIRouter(tags=["main"])


@router.get("/")
async def main(request: Request) -> HTMLResponse:
    return templates.TemplateResponse(
        request=request,
        name="index.html",
    )
