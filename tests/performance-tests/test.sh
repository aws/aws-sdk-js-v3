#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"
npm install --ignore-scripts >&2
node runner/run.mjs
