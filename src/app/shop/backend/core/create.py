from contextlib import asynccontextmanager
from typing import AsyncGenerator

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
import httpx

from app.shop.backend.handlers.pages import main_router
from app.shop.backend.core.routers import include_routers
from app.shop.backend.core.exceptions import inculde_exceptions
from app.shop.backend.settings.paths import STATIC_DIR
from core.logging.setup import setup_logging


def create_app() -> FastAPI:
    @asynccontextmanager
    async def life_span(app: FastAPI) -> AsyncGenerator[None, None]:
        app.state.http_client = httpx.AsyncClient()
        yield
        await app.state.http_client.aclose()

    root_router = FastAPI(lifespan=life_span)
    root_router.mount(
        path="/static",
        app=StaticFiles(directory=STATIC_DIR),
        name="static",
    )
    include_routers(
        root_router=root_router,
        routers=[main_router],
    )
    inculde_exceptions(app=root_router)
    setup_logging()
    return root_router
