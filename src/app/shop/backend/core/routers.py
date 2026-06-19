from typing import Sequence

from fastapi import FastAPI, APIRouter


def include_routers(
    root_router: FastAPI,
    routers: Sequence[APIRouter],
) -> None:
    for router in routers:
        root_router.include_router(router)
