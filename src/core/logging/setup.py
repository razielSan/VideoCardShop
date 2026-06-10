import logging

from settings.paths import LOG_DIR
from core.logging.format import LogFormat

LOG_DIR.mkdir(exist_ok=True)


def setup_logging() -> None:
    formatter = logging.Formatter(
        fmt=LogFormat.FMT,
        datefmt=LogFormat.DATE_FMT,
    )

    console_handler = logging.StreamHandler()
    console_handler.setFormatter(formatter)

    file_handler = logging.FileHandler(
        filename=LOG_DIR / "app.log",
        encoding="utf-8",
    )
    file_handler.setFormatter(formatter)

    root_logger = logging.getLogger()

    if root_logger.handlers:
        root_logger.handlers.clear()

    root_logger.addHandler(file_handler)
    root_logger.addHandler(console_handler)
