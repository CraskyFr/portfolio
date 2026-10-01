#!/usr/bin/env bash
# Régénère les images dérivées dans public/ : og.png, apple-touch-icon.png, favicon.ico.
# Nécessite Microsoft Edge (ou Chrome via la variable BROWSER).
set -euo pipefail

cd "$(dirname "$0")/.."
BROWSER="${BROWSER:-/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe}"
ROOT="$(pwd -W 2>/dev/null || pwd)"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

shot() {
  "$BROWSER" --headless=new --disable-gpu --hide-scrollbars --allow-file-access-from-files \
    --default-background-color=00000000 --window-size="$2" --screenshot="$3" "file:///$ROOT/scripts/$1${4:-}" 2>/dev/null
}

shot og-image.html 1200,630 "$ROOT/public/og.png"
shot icon.html 180,180 "$ROOT/public/apple-touch-icon.png" "#180"
shot icon.html 48,48 "$TMP/icon-48.png" "#48"
node scripts/png-to-ico.mjs "$TMP/icon-48.png" public/favicon.ico

ls -l public/og.png public/apple-touch-icon.png public/favicon.ico
