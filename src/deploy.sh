#!/bin/sh
# Monta e publica no GitHub Pages (repo belacajueiro/aps-izabela): site na raiz, fontes em src/.
# Uso: sh deploy.sh "mensagem"  [REPO=/caminho/do/clone]
set -e
D=$(cd "$(dirname "$0")" && pwd); REPO=${REPO:-/home/claude/aps-izabela}
sh "$D/build.sh"
python3 -I "$D/tools/sync_repo.py" "$REPO"
cd "$REPO" && git add -A && git commit -q -m "${1:-Atualização}

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01KBbybiZExXYAxf4dgnRi8X" && git push -q origin main
