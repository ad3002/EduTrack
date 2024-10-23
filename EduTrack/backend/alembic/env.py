# EduTrack/backend/alembic/env.py
from logging.config import fileConfig
from sqlalchemy import engine_from_config
from sqlalchemy import pool
from alembic import context
import os
from dotenv import load_dotenv

# Загрузка переменных окружения
load_dotenv()

# Конфигурация Alembic
config = context.config

# Интерпретация конфигурационного файла для настройки логирования
if config.config_file_name is not None:
    fileConfig(config.config_file_name)

# Импорт MetaData из моделей
from app.models import Base
target_metadata = Base.metadata

def run_migrations_offline() -> None:
    url = os.getenv("DATABASE_URL")
    if not url:
        raise ValueError("DATABASE_URL не задан в переменных окружения.")
    context.configure(
        url=url,
        target_metadata=target_metadata,
        literal_binds=True,
        dialect_opts={"paramstyle": "named"},
    )

    with context.begin_transaction():
        context.run_migrations()

def run_migrations_online() -> None:
    url = os.getenv("DATABASE_URL")
    if not url:
        raise ValueError("DATABASE_URL не задан в переменных окружения.")
    connectable = engine_from_config(
        {"sqlalchemy.url": url},
        prefix="sqlalchemy.",
        poolclass=pool.NullPool,
    )

    with connectable.connect() as connection:
        context.configure(connection=connection, target_metadata=target_metadata)

        with context.begin_transaction():
            context.run_migrations()

if context.is_offline_mode():
    run_migrations_offline()
else:
    run_migrations_online()