#!/usr/bin/env sh
# Idempotent setup script for Spec Kit tooling.
# Run automatically at session start via the SessionStart hook in .claude/settings.json.
# Requires network access to astral.sh and github.com on first install.

set -e

UV_BIN="$HOME/.local/bin/uv"
SPECIFY_BIN="$HOME/.local/bin/specify"

# Install uv if missing.
if [ ! -f "$UV_BIN" ]; then
  echo "[setup-spec-kit] Installing uv..."
  curl -LsSf https://astral.sh/uv/install.sh | sh
else
  echo "[setup-spec-kit] uv already installed: $("$UV_BIN" --version)"
fi

export PATH="$HOME/.local/bin:$PATH"

# Install specify-cli if missing.
if [ ! -f "$SPECIFY_BIN" ]; then
  echo "[setup-spec-kit] Installing specify-cli from spec-kit..."
  uv tool install specify-cli --from git+https://github.com/github/spec-kit.git
else
  echo "[setup-spec-kit] specify already installed: $(specify --version 2>/dev/null || echo 'version unavailable')"
fi

echo "[setup-spec-kit] Done. Run 'specify check' to verify."
