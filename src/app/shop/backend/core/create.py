from core.logging.setup import setup_logging
from fastapi import FastAPI


def create_app() -> FastAPI:
    router = FastAPI()

    setup_logging()
    return router
