from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse

from app.domain.exceptions import AppException


def inculde_exceptions(app: FastAPI) -> None:
    @app.exception_handler(AppException)
    async def exception_handler(request: Request, ext: AppException) -> JSONResponse:
        return JSONResponse(
            status_code=ext.status_code,
            content={
                "message": ext.user_message,
                "code": ext.code,
            },
        )
