from typing import cast

from fastapi import Request
import httpx


async def get_http_client(request: Request) -> httpx.AsyncClient:
    return cast(httpx.AsyncClient, request.app.state.http_client)
