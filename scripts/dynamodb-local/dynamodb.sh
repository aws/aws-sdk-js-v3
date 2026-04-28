#!/usr/bin/env bash

set -euo pipefail

PORT="${DYNAMODB_LOCAL_PORT:-8000}"
COMPOSE_FILE="$(dirname "$0")/docker-compose.yml"
HEALTH_URL="http://localhost:${PORT}"

if ! command -v docker >/dev/null 2>&1; then
  echo "docker is required to start DynamoDB Local." >&2
  exit 1
fi

echo "Starting DynamoDB Local via docker compose..."
docker compose -f "$COMPOSE_FILE" up -d

echo "Waiting for DynamoDB Local on port ${PORT}..."
for _ in $(seq 1 60); do
  code="$(curl --silent --output /dev/null --write-out "%{http_code}" "$HEALTH_URL" || true)"
  if [ "$code" = "400" ] || [ "$code" = "200" ]; then
    echo "DynamoDB Local is ready."
    echo "Endpoint: ${HEALTH_URL}"
    exit 0
  fi
  sleep 1
done

echo "Timed out waiting for DynamoDB Local." >&2
echo "Inspect logs with: docker compose -f \"$COMPOSE_FILE\" logs" >&2
exit 1
