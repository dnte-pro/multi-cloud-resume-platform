#!/usr/bin/env bash

set -euo pipefail

project_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
backend_python="$project_dir/backend/.venv/bin/python"

if [[ ! -f "$project_dir/frontend/dist/index.html" ]]; then
  echo "The frontend build is missing. Run: npm run build"
  exit 1
fi

exec "$backend_python" -m uvicorn app.main:app \
  --app-dir "$project_dir/backend" \
  --host 127.0.0.1 \
  --port 8000
