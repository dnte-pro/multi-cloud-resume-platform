#!/usr/bin/env bash

set -euo pipefail

project_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
backend_python="$project_dir/backend/.venv/bin/python"

if [[ ! -x "$backend_python" ]]; then
  echo "Backend virtual environment not found at backend/.venv. Create it and install backend/requirements.txt first."
  exit 1
fi

cleanup() {
  kill "$backend_pid" 2>/dev/null || true
}

"$backend_python" -m uvicorn app.main:app \
  --app-dir "$project_dir/backend" \
  --reload \
  --host 127.0.0.1 \
  --port 8000 &
backend_pid=$!
trap cleanup EXIT INT TERM

echo "FastAPI: http://127.0.0.1:8000/resume"
echo "Starting Vite..."
npm --prefix "$project_dir/frontend" run dev
