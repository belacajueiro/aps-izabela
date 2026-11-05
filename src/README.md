# APS Betim – SOAP (fontes)

Site: https://belacajueiro.github.io/aps-izabela (sem dados de pacientes; `noindex`).

- `app.html` – interface; `data*.js` – conteúdo clínico (camadas em ordem numérica; a última vence); `pnwiz.js`, `puwiz.js`, `ppwiz.js` – assistentes; `anamnese/` → gera `anwiz.js` (`python3 anamnese/gen.py`).
- `build.sh` → `index.html` (artefato) e `site/` (Pages) + `site/fontes.json` (inventário de fontes e onde são usadas).
- `deploy.sh "mensagem"` – monta e publica (site na raiz do repo, fontes em `src/`).
- `tools/cmed_update.sh` – baixa a lista CMED mais recente e regenera o "No balcão" (`data39.js`).
- `tools/sentinelas.py` – monitor: páginas oficiais em `monitor/vigiar.json`, URLs das fontes; estado em `monitor/estado.json`, relatório em `monitor/sentinelas.md`.
- `rce.js` + `rce_logos.js` – **Receita de Controle Especial** (2 vias, A4 paisagem): janela aberta pelo menu Ferramentas ou pelo botão da aba Prescrição quando há medicamento da Lista C. Pacientes, receitas e dados do emitente ficam **só no IndexedDB do navegador** (nunca no banco `window.claude`, no repositório ou em servidor); backup manual por arquivo JSON, que contém dados de pacientes e não deve ir ao GitHub. Testes: `node --test tests/rce.test.js`.
