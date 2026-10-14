#!/bin/sh
# Baixa a lista CMED (PMC) mais recente e regenera data39.js (No balcão). Uso: sh tools/cmed_update.sh
set -e
D=$(cd "$(dirname "$0")/.." && pwd); T=$(mktemp -d)
P="https://www.gov.br/anvisa/pt-br/assuntos/medicamentos/cmed/precos"
REL=$(curl -sS -L -m 60 "$P" | grep -oE '/anvisa/pt-br/assuntos/medicamentos/cmed/precos/arquivos/lista_pmc__[0-9_]+\.xlsx/@@download/file' | head -1)
[ -n "$REL" ] || { echo "link da lista PMC não encontrado"; exit 1; }
DATA=$(echo "$REL" | sed -E 's#.*lista_pmc__([0-9]{4})([0-9]{2})([0-9]{2}).*#\3/\2/\1#')
echo "Lista CMED: $DATA"
curl -sS -L -m 300 -o "$T/pmc.xlsx" "https://www.gov.br$REL"
python3 -I "$D/tools/cmed_csv.py" "$T/pmc.xlsx" "$T/pmc.csv"
python3 -I "$D/tools/balgen.py" "$T/pmc.csv" "$T/balcao.json" > "$T/relatorio.txt"
python3 -I "$D/tools/mkdata39.py" "$T/balcao.json" "$D/data39.js" "$DATA"
echo "data39.js regenerado ($DATA); resumo em $T/relatorio.txt"
