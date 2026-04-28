#!/usr/bin/env bash

set -euo pipefail

COMPOSE_FILE="$(dirname "$0")/docker-compose.yml"

if ! command -v docker >/dev/null 2>&1; then
  echo "docker is required to stop DynamoDB Local." >&2
  exit 1
fi

echo "Stopping DynamoDB Local via docker compose..."
docker compose -f "$COMPOSE_FILE" down
