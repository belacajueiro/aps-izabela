// ───────────── data94.js – Receita ilustrada de insulina (gerador)
// Gerado por /home/claude/work/rx/gen.py a partir de tpl.js + desenhos de gerar.py (os mesmos dos folhetos "Minha insulina").
// Conteúdo clínico conferido em 05/11/2026: NT DAPS Betim 14/2026, bulas Novolin N e R (frasco e caneta),
// Diretriz SBD "Técnicas de aplicação de insulina" (ed. 2026) e Diretriz SBD "Metas no tratamento do diabetes"
// (rev. 16/05/2023, DOI 10.29327/557753.2022-3). Desenhos e código próprios.
const RXINS = (() => {
const E = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;"}[c]));
const ICO = {"maos": "<svg class=\"ic\" width=\"34\" height=\"34\" viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 30V16a3 3 0 0 1 6 0v10M20 24V12a3 3 0 0 1 6 0v12M26 24V14a3 3 0 0 1 6 0v12M32 26v-6a3 3 0 0 1 6 0v8c0 8-5 14-13 14h-2c-5 0-8-3-11-7l-5-7a3 3 0 0 1 5-3l3 3\"/><path d=\"M8 8c1 2 1 3 0 5M40 6c1 2 1 3 0 5\" stroke-width=\"1.8\"/></svg>", "misturar": "<svg class=\"ic\" width=\"34\" height=\"34\" viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"19\" y=\"8\" width=\"10\" height=\"30\" rx=\"4\"/><path d=\"M19 30h10\"/><path d=\"M8 18a16 16 0 0 1 6-8M40 30a16 16 0 0 1-6 8\"/><path d=\"M8 11v7h7M40 37v-7h-7\"/></svg>", "agulha": "<svg class=\"ic\" width=\"34\" height=\"34\" viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"8\" y=\"20\" width=\"22\" height=\"9\" rx=\"3\"/><path d=\"M30 22h6v5h-6M36 24.5h8\"/><path d=\"M12 20v-4M18 20v-4\" stroke-width=\"1.8\"/></svg>", "gota": "<svg class=\"ic\" width=\"34\" height=\"34\" viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M24 6v12\"/><path d=\"M24 26c-4 5-6 8-6 11a6 6 0 0 0 12 0c0-3-2-6-6-11z\"/><path d=\"M18 12l6-6 6 6\"/></svg>", "seletor": "<svg class=\"ic\" width=\"34\" height=\"34\" viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"24\" cy=\"24\" r=\"15\"/><path d=\"M24 9v5M24 34v5M9 24h5M34 24h5\"/><text x=\"24\" y=\"29\" font-size=\"13\" text-anchor=\"middle\" fill=\"currentColor\" stroke=\"none\" font-weight=\"700\">UI</text></svg>", "aplicar": "<svg class=\"ic\" width=\"34\" height=\"34\" viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 36h36\"/><path d=\"M6 40c6-2 12-2 18 0s12 2 18 0\" stroke-width=\"1.6\"/><rect x=\"20\" y=\"4\" width=\"8\" height=\"20\" rx=\"3\"/><path d=\"M24 24v12\"/><path d=\"M14 30l3 3M34 30l-3 3\" stroke-width=\"1.6\"/><text x=\"38\" y=\"14\" font-size=\"10\" fill=\"currentColor\" stroke=\"none\" font-weight=\"700\">90°</text></svg>", "relogio": "<svg class=\"ic\" width=\"34\" height=\"34\" viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"24\" cy=\"25\" r=\"16\"/><path d=\"M24 25V15M24 25l6 4\"/><path d=\"M19 5h10\"/></svg>", "dez": "<svg class=\"ic\" width=\"34\" height=\"34\" viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"24\" cy=\"24\" r=\"17\"/><text x=\"24\" y=\"31\" font-size=\"18\" text-anchor=\"middle\" fill=\"currentColor\" stroke=\"none\" font-weight=\"700\">10</text></svg>", "descarte": "<svg class=\"ic\" width=\"34\" height=\"34\" viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M18 6h12v5l3 4v25a3 3 0 0 1-3 3H18a3 3 0 0 1-3-3V15l3-4z\"/><path d=\"M15 20h18\"/><path d=\"M21 27l6 8M27 27l-6 8\" stroke-width=\"1.8\"/></svg>", "sol": "<svg class=\"ic\" width=\"26\" height=\"26\" viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"24\" cy=\"24\" r=\"8\"/><path d=\"M24 6v5M24 37v5M6 24h5M37 24h5M11 11l3.5 3.5M33.5 33.5L37 37M37 11l-3.5 3.5M14.5 33.5L11 37\"/></svg>", "prato": "<svg class=\"ic\" width=\"26\" height=\"26\" viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"24\" cy=\"24\" r=\"14\"/><circle cx=\"24\" cy=\"24\" r=\"8\"/><path d=\"M5 10v10a3 3 0 0 0 3 3v17M43 8c-4 2-5 7-5 13h5v19\"/></svg>", "lua": "<svg class=\"ic\" width=\"26\" height=\"26\" viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M32 30a14 14 0 0 1-14-20 15 15 0 1 0 20 20 14 14 0 0 1-6 0z\"/><path d=\"M36 8v4M34 10h4\" stroke-width=\"1.8\"/></svg>", "noite3": "<svg class=\"ic\" width=\"26\" height=\"26\" viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M30 28a12 12 0 0 1-12-17 13 13 0 1 0 17 17 12 12 0 0 1-5 0z\"/><text x=\"36\" y=\"44\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\" font-weight=\"700\">3h</text></svg>", "suor": "<svg class=\"ic\" width=\"30\" height=\"30\" viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"24\" cy=\"22\" r=\"13\"/><path d=\"M19 20h.01M29 20h.01\" stroke-width=\"3\"/><path d=\"M19 28c3 2 7 2 10 0\"/><path d=\"M40 10c-2 3-3 5-3 6a3 3 0 0 0 6 0c0-1-1-3-3-6zM9 28c-2 3-3 5-3 6a3 3 0 0 0 6 0c0-1-1-3-3-6z\" stroke-width=\"1.8\"/></svg>", "tremor": "<svg class=\"ic\" width=\"30\" height=\"30\" viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M16 34V18a2.5 2.5 0 0 1 5 0v8M21 24V14a2.5 2.5 0 0 1 5 0v10M26 24V16a2.5 2.5 0 0 1 5 0v10M31 26v-4a2.5 2.5 0 0 1 5 0v6c0 7-4 12-11 12h-1c-4 0-7-2-9-5\"/><path d=\"M8 18l-3 3 3 3M42 14l3 3-3 3\" stroke-width=\"1.8\"/></svg>", "fome": "<svg class=\"ic\" width=\"30\" height=\"30\" viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10 22h28l-3 16H13z\"/><path d=\"M16 22c0-6 4-10 8-10s8 4 8 10\"/><path d=\"M24 6v4\" /></svg>", "coracao": "<svg class=\"ic\" width=\"30\" height=\"30\" viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M24 40S8 30 8 18a8 8 0 0 1 16-2 8 8 0 0 1 16 2c0 12-16 22-16 22z\"/><path d=\"M12 24h7l3-5 4 9 3-4h7\" stroke-width=\"1.8\"/></svg>", "tontura": "<svg class=\"ic\" width=\"30\" height=\"30\" viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"24\" cy=\"26\" r=\"12\"/><path d=\"M18 24l3 3M21 24l-3 3M27 24l3 3M30 24l-3 3\" stroke-width=\"1.8\"/><path d=\"M14 8c4-3 16-3 20 0M18 12c3-2 9-2 12 0\" stroke-width=\"1.8\"/></svg>", "confusao": "<svg class=\"ic\" width=\"30\" height=\"30\" viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"24\" cy=\"24\" r=\"14\"/><path d=\"M20 20a4 4 0 1 1 6 3c-1.5 1-2 2-2 4M24 32h.01\" stroke-width=\"2.6\"/></svg>", "acucar": "<svg class=\"ic\" width=\"34\" height=\"34\" viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10 22h28v4a14 14 0 0 1-28 0z\"/><path d=\"M38 24h4a3 3 0 0 1 0 6h-4\"/><rect x=\"18\" y=\"8\" width=\"7\" height=\"7\" rx=\"1\"/><rect x=\"24\" y=\"12\" width=\"7\" height=\"7\" rx=\"1\"/></svg>", "glicosimetro": "<svg class=\"ic\" width=\"34\" height=\"34\" viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"12\" y=\"8\" width=\"20\" height=\"32\" rx=\"4\"/><rect x=\"16\" y=\"12\" width=\"12\" height=\"9\" rx=\"1\"/><path d=\"M22 40v6M19 46h6\"/><circle cx=\"22\" cy=\"30\" r=\"3\"/></svg>", "lanche": "<svg class=\"ic\" width=\"34\" height=\"34\" viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 30c0-10 7-16 16-16s16 6 16 16z\"/><path d=\"M6 30h36v4a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4z\"/><path d=\"M18 22h.01M26 20h.01M31 25h.01\" stroke-width=\"3\"/></svg>", "telefone": "<svg class=\"ic\" width=\"30\" height=\"30\" viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 6h8l3 9-5 3a24 24 0 0 0 12 12l3-5 9 3v8a4 4 0 0 1-4 4C21 40 8 27 8 10a4 4 0 0 1 4-4z\"/></svg>", "alerta": "<svg class=\"ic\" width=\"30\" height=\"30\" viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M24 6l20 34H4z\"/><path d=\"M24 18v10M24 34h.01\" stroke-width=\"3\"/></svg>", "termometro": "<svg class=\"ic\" width=\"30\" height=\"30\" viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M20 30V10a4 4 0 0 1 8 0v20a8 8 0 1 1-8 0z\"/><path d=\"M24 16v18\" stroke-width=\"3\"/></svg>", "geladeira": "<svg class=\"ic\" width=\"30\" height=\"30\" viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"12\" y=\"4\" width=\"24\" height=\"40\" rx=\"3\"/><path d=\"M12 18h24M16 10v4M16 24v6\"/><text x=\"26\" y=\"36\" font-size=\"9\" fill=\"currentColor\" stroke=\"none\" font-weight=\"700\">2-8°</text></svg>", "sol2": "<svg class=\"ic\" width=\"30\" height=\"30\" viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"24\" cy=\"24\" r=\"7\"/><path d=\"M24 7v4M24 37v4M7 24h4M37 24h4M12 12l3 3M33 33l3 3M36 12l-3 3M15 33l-3 3\"/><path d=\"M6 6l36 36\" stroke=\"#b3261e\"/></svg>", "bolsa": "<svg class=\"ic\" width=\"30\" height=\"30\" viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"8\" y=\"16\" width=\"32\" height=\"24\" rx=\"4\"/><path d=\"M18 16v-4a6 6 0 0 1 12 0v4\"/><path d=\"M8 26h32\" stroke-width=\"1.8\"/><path d=\"M22 31l2 2 2-2M24 33v-6\" stroke-width=\"1.8\"/></svg>", "caroco": "<svg class=\"ic\" width=\"30\" height=\"30\" viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 34c8 0 10-10 20-10s12 10 20 10\"/><path d=\"M4 40h40\" stroke-width=\"1.6\"/><path d=\"M16 16l16 12M32 16L16 28\" stroke=\"#b3261e\" stroke-width=\"2.6\"/></svg>", "nao": "<svg class=\"ic\" width=\"26\" height=\"26\" viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"24\" cy=\"24\" r=\"16\"/><path d=\"M13 35L35 13\"/></svg>", "metade": "<svg class=\"ic\" width=\"26\" height=\"26\" viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"24\" cy=\"24\" r=\"15\"/><path d=\"M24 9a15 15 0 0 1 0 30z\" fill=\"currentColor\"/></svg>", "doente": "<svg class=\"ic\" width=\"30\" height=\"30\" viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"24\" cy=\"24\" r=\"14\"/><path d=\"M19 22h.01M29 22h.01\" stroke-width=\"3\"/><path d=\"M19 31c3-2 7-2 10 0\"/><rect x=\"34\" y=\"4\" width=\"6\" height=\"18\" rx=\"3\"/><path d=\"M37 10v8\" stroke-width=\"1.8\"/></svg>", "caminhar": "<svg class=\"ic\" width=\"26\" height=\"26\" viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"26\" cy=\"8\" r=\"4\"/><path d=\"M24 14l-5 12 6 4 2 12M19 26l-5 14M24 16l8 6 6-2M22 18l-8 2-3 6\"/></svg>", "frasco": "<svg class=\"ic\" width=\"34\" height=\"34\" viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"17\" y=\"6\" width=\"14\" height=\"6\" rx=\"2\"/><path d=\"M19 12v4l-5 4v18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V20l-5-4v-4\"/><path d=\"M14 26h20\" stroke-width=\"1.6\"/></svg>", "seringa": "<svg class=\"ic\" width=\"34\" height=\"34\" viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 42l8-8\"/><rect x=\"12\" y=\"20\" width=\"22\" height=\"9\" rx=\"2\" transform=\"rotate(-45 23 24.5)\"/><path d=\"M30 8l10 10M34 4l10 10\" stroke-width=\"2\"/><path d=\"M13 31l5 5\" stroke-width=\"1.6\"/></svg>", "ar": "<svg class=\"ic\" width=\"34\" height=\"34\" viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10 16h16a5 5 0 1 0-5-5M6 24h30a5 5 0 1 1-5 5M10 32h12a4 4 0 1 1-4 4\"/></svg>", "alcool": "<svg class=\"ic\" width=\"34\" height=\"34\" viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"12\" y=\"20\" width=\"24\" height=\"22\" rx=\"4\"/><path d=\"M18 20v-6h12v6\"/><path d=\"M24 26v10M19 31h10\" stroke=\"#b3261e\"/></svg>", "copo": "<svg class=\"ic\" width=\"26\" height=\"26\" viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 8h20l-3 32H17z\"/><path d=\"M15 18h18\"/><path d=\"M36 6l-6 12\" stroke=\"#b3261e\"/></svg>", "olho": "<svg class=\"ic\" width=\"34\" height=\"34\" viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 24s7-12 20-12 20 12 20 12-7 12-20 12S4 24 4 24z\"/><circle cx=\"24\" cy=\"24\" r=\"6\"/></svg>", "fruta": "<svg class=\"ic\" width=\"26\" height=\"26\" viewBox=\"0 0 48 48\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M24 14c-8-4-16 2-14 12s8 16 14 14c6 2 12-4 14-14s-6-16-14-12z\"/><path d=\"M24 14c0-4 2-7 6-8\"/></svg>"};
const ART = {"corpo": "<svg class=\"corpo\" viewBox=\"0 0 300 190\">\n      <circle cx=\"100\" cy=\"22\" r=\"12\" fill=\"#eef1f4\" stroke=\"#a9b3bd\" stroke-width=\"1.6\"/>\n        <rect x=\"83\" y=\"38\" width=\"34\" height=\"58\" rx=\"10\" fill=\"#eef1f4\" stroke=\"#a9b3bd\" stroke-width=\"1.6\"/>\n        <rect x=\"72\" y=\"41\" width=\"10\" height=\"54\" rx=\"5\" fill=\"#eef1f4\" stroke=\"#a9b3bd\" stroke-width=\"1.6\"/>\n        <rect x=\"118\" y=\"41\" width=\"10\" height=\"54\" rx=\"5\" fill=\"#eef1f4\" stroke=\"#a9b3bd\" stroke-width=\"1.6\"/>\n        <rect x=\"84\" y=\"94\" width=\"14\" height=\"78\" rx=\"6\" fill=\"#eef1f4\" stroke=\"#a9b3bd\" stroke-width=\"1.6\"/>\n        <rect x=\"102\" y=\"94\" width=\"14\" height=\"78\" rx=\"6\" fill=\"#eef1f4\" stroke=\"#a9b3bd\" stroke-width=\"1.6\"/><path d=\"M86 62 h28 v22 h-28z\" fill=\"#0f7b6c\" fill-opacity=\".55\"/>\n            <circle cx=\"100\" cy=\"73\" r=\"5\" fill=\"#fff\"/><circle cx=\"100\" cy=\"73\" r=\"1.6\" fill=\"#a9b3bd\"/>\n            <rect x=\"85\" y=\"106\" width=\"12\" height=\"34\" rx=\"3\" fill=\"#0f7b6c\" fill-opacity=\".55\"/>\n            <rect x=\"103\" y=\"106\" width=\"12\" height=\"34\" rx=\"3\" fill=\"#0f7b6c\" fill-opacity=\".55\"/><circle cx=\"205\" cy=\"22\" r=\"12\" fill=\"#eef1f4\" stroke=\"#a9b3bd\" stroke-width=\"1.6\"/>\n        <rect x=\"188\" y=\"38\" width=\"34\" height=\"58\" rx=\"10\" fill=\"#eef1f4\" stroke=\"#a9b3bd\" stroke-width=\"1.6\"/>\n        <rect x=\"177\" y=\"41\" width=\"10\" height=\"54\" rx=\"5\" fill=\"#eef1f4\" stroke=\"#a9b3bd\" stroke-width=\"1.6\"/>\n        <rect x=\"223\" y=\"41\" width=\"10\" height=\"54\" rx=\"5\" fill=\"#eef1f4\" stroke=\"#a9b3bd\" stroke-width=\"1.6\"/>\n        <rect x=\"189\" y=\"94\" width=\"14\" height=\"78\" rx=\"6\" fill=\"#eef1f4\" stroke=\"#a9b3bd\" stroke-width=\"1.6\"/>\n        <rect x=\"207\" y=\"94\" width=\"14\" height=\"78\" rx=\"6\" fill=\"#eef1f4\" stroke=\"#a9b3bd\" stroke-width=\"1.6\"/><rect x=\"178\" y=\"48\" width=\"8\" height=\"22\" rx=\"3\" fill=\"#0f7b6c\" fill-opacity=\".55\"/>\n            <rect x=\"224\" y=\"48\" width=\"8\" height=\"22\" rx=\"3\" fill=\"#0f7b6c\" fill-opacity=\".55\"/>\n            <path d=\"M189 82 h12 v12 h-12z M209 82 h12 v12 h-12z\" fill=\"#0f7b6c\" fill-opacity=\".55\"/>\n      <text x=\"100\" y=\"186\" font-size=\"9\" text-anchor=\"middle\" fill=\"#5b6773\">FRENTE</text>\n      <text x=\"205\" y=\"186\" font-size=\"9\" text-anchor=\"middle\" fill=\"#5b6773\">COSTAS</text>\n      <path d=\"M88 70L66 62\" stroke=\"#5b6773\" stroke-width=\"1\"/><text x=\"63\" y=\"65\" font-size=\"10\" fill=\"#1d2733\" text-anchor=\"end\" font-weight=\"600\">Barriga</text>\n      <text x=\"63\" y=\"74\" font-size=\"8\" fill=\"#5b6773\" text-anchor=\"end\">3 dedos longe</text><text x=\"63\" y=\"83\" font-size=\"8\" fill=\"#5b6773\" text-anchor=\"end\">do umbigo</text>\n      <path d=\"M88 122L66 118\" stroke=\"#5b6773\" stroke-width=\"1\"/><text x=\"63\" y=\"121\" font-size=\"10\" fill=\"#1d2733\" text-anchor=\"end\" font-weight=\"600\">Coxas</text>\n      <text x=\"63\" y=\"130\" font-size=\"8\" fill=\"#5b6773\" text-anchor=\"end\">frente e lado</text>\n      <path d=\"M229 58L244 48\" stroke=\"#5b6773\" stroke-width=\"1\"/><text x=\"247\" y=\"51\" font-size=\"10\" fill=\"#1d2733\" text-anchor=\"start\" font-weight=\"600\"></text>\n      <text x=\"247\" y=\"51\" font-size=\"10\" fill=\"#1d2733\" font-weight=\"600\">Braços</text>\n      <text x=\"247\" y=\"61\" font-size=\"8\" fill=\"#5b6773\">parte de trás</text>\n      <path d=\"M218 88L244 100\" stroke=\"#5b6773\" stroke-width=\"1\"/><text x=\"247\" y=\"103\" font-size=\"10\" fill=\"#1d2733\" text-anchor=\"start\" font-weight=\"600\"></text>\n      <text x=\"247\" y=\"103\" font-size=\"10\" fill=\"#1d2733\" font-weight=\"600\">Nádegas</text>\n      <text x=\"247\" y=\"113\" font-size=\"8\" fill=\"#5b6773\">parte de cima</text>\n    </svg>", "rodizio": "<svg class=\"rod\" viewBox=\"0 0 160 100\"><rect x=\"20\" y=\"14\" width=\"58\" height=\"36\" rx=\"5\" fill=\"#0f7b6c\" fill-opacity=\"0.15\"/><text x=\"49\" y=\"38\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#12355b\">1</text><rect x=\"82\" y=\"14\" width=\"58\" height=\"36\" rx=\"5\" fill=\"#0f7b6c\" fill-opacity=\"0.3\"/><text x=\"111\" y=\"38\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#12355b\">2</text><rect x=\"20\" y=\"54\" width=\"58\" height=\"36\" rx=\"5\" fill=\"#0f7b6c\" fill-opacity=\"0.44999999999999996\"/><text x=\"49\" y=\"78\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#12355b\">3</text><rect x=\"82\" y=\"54\" width=\"58\" height=\"36\" rx=\"5\" fill=\"#0f7b6c\" fill-opacity=\"0.6\"/><text x=\"111\" y=\"78\" font-size=\"16\" text-anchor=\"middle\" font-weight=\"800\" fill=\"#12355b\">4</text><circle cx=\"28\" cy=\"20\" r=\"2\" fill=\"#12355b\"/><circle cx=\"36\" cy=\"20\" r=\"2\" fill=\"#12355b\"/><circle cx=\"44\" cy=\"20\" r=\"2\" fill=\"#12355b\"/><circle cx=\"52\" cy=\"20\" r=\"2\" fill=\"#12355b\"/>\n      <circle cx=\"80\" cy=\"52\" r=\"7\" fill=\"#fff\" stroke=\"#8892a0\"/><circle cx=\"80\" cy=\"52\" r=\"2\" fill=\"#8892a0\"/>\n      <text x=\"80\" y=\"100\" font-size=\"9\" text-anchor=\"middle\" fill=\"#5b6773\">1, 2, 3, 4 = semanas</text></svg>", "geladeira": "<svg class=\"gel\" viewBox=\"0 0 120 190\" fill=\"none\" stroke=\"#1d2733\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n  <rect x=\"14\" y=\"8\" width=\"92\" height=\"174\" rx=\"8\" fill=\"#f4f7f9\"/>\n  <path d=\"M14 62h92\"/>\n  <path d=\"M96 30v20M96 76v20\" stroke-width=\"3\"/>\n  <rect x=\"24\" y=\"18\" width=\"62\" height=\"34\" rx=\"3\" fill=\"#e4eaee\"/>\n  <text x=\"55\" y=\"39\" font-size=\"9\" font-weight=\"700\" fill=\"#5b6773\" stroke=\"none\" text-anchor=\"middle\">congelador</text>\n  <path d=\"M24 86h72M24 112h72M24 138h72\" stroke=\"#9aa5b1\" stroke-width=\"1.6\"/>\n  <rect x=\"30\" y=\"116\" width=\"40\" height=\"18\" rx=\"3\" fill=\"#0f7b6c\" fill-opacity=\".25\" stroke=\"#0f7b6c\" stroke-width=\"1.8\"/>\n  <path d=\"M34 125l5 5 10-11\" stroke=\"#0f7b6c\" stroke-width=\"2.6\"/>\n  <path d=\"M106 70v100\" stroke=\"#c9d1d9\" stroke-width=\"7\"/>\n  <path d=\"M112 96l-10 10M112 106l-10-10\" stroke=\"#b3261e\" stroke-width=\"2.6\"/>\n  <text x=\"60\" y=\"176\" font-size=\"11\" fill=\"#5b6773\" stroke=\"none\" text-anchor=\"middle\">2 a 8 °C</text>\n</svg>"};
const G = (k, s) => s ? ICO[k].replace(/width="\d+" height="\d+"/, `width="${s}" height="${s}"`) : ICO[k];

// ── dispositivos (REMUME Betim: NPH e regular em frasco 10 mL e caneta 3 mL; glargina em refil 3 mL + caneta reutilizável, NT DAPS 14/2026)
const DISP = {
  caneta: {n: "Caneta reutilizável com refil de 3 mL", curto: "caneta", tipo: "caneta", apres: "refil (tubete) de 3 mL", cap: 300, mL: false},
  fixa:   {n: "Seringa de 100 UI com agulha fixa", curto: "seringa de agulha fixa", tipo: "seringa", apres: "frasco de 10 mL", cap: 1000, mL: false},
  movel:  {n: "Seringa de 100 UI com agulha removível", curto: "seringa de agulha removível", tipo: "seringa", apres: "frasco de 10 mL", cap: 1000, mL: false},
  ml:     {n: "Seringa de 1 mL graduada em mL (agulha removível)", curto: "seringa graduada em mL", tipo: "seringa", apres: "frasco de 10 mL", cap: 1000, mL: true}
};
const SLOTS = [
  {k: "cafe",   lbl: "de manhã, antes do café da manhã", reg: "30 minutos antes do café da manhã", tag: "DE MANHÃ",        ico: "sol"},
  {k: "almoco", lbl: "antes do almoço",                  reg: "30 minutos antes do almoço",        tag: "ANTES DO ALMOÇO", ico: "prato"},
  {k: "jantar", lbl: "antes do jantar",                  reg: "30 minutos antes do jantar",        tag: "ANTES DO JANTAR", ico: "prato"},
  {k: "deitar", lbl: "ao deitar, já na cama",            reg: "",                                  tag: "AO DEITAR",       ico: "lua"}
];
const nf = (x, d = 2) => x.toLocaleString("pt-BR", {minimumFractionDigits: d, maximumFractionDigits: d});
const n0 = x => x.toLocaleString("pt-BR");
const dose = (n, d) => d.mL ? `${nf(n / 100)} mL` : `${n0(n)} UI`;
const doseFull = (n, d) => d.mL ? `${nf(n / 100)} mL (${n0(n)} UI)` : `${n0(n)} UI`;

// ── leitura do formulário em um objeto normalizado
function ler(v){
  const o = {nome: (v.nome || "").trim(), ubs: (v.ubs || "").trim(), basal: v.basal === "gla" ? "gla" : "nph",
             dB: DISP[v.dispB] || DISP.caneta, dR: DISP[v.dispR === "mesma" ? v.dispB : v.dispR] || DISP.caneta,
             mesma: v.dispR === "mesma", horaGla: v.horaGla === "deitar" ? "deitar" : "cafe",
             nph: {}, reg: {}, gla: 0, mistura: !!v.mistura, hgt: !!v.hgt, corr: !!v.corr, tiras: !!v.tiras};
  for (const s of SLOTS){ const x = +v["nph_" + s.k]; if (x > 0) o.nph[s.k] = x; }
  for (const s of SLOTS.slice(0, 3)){ const x = +v["reg_" + s.k]; if (x > 0) o.reg[s.k] = x; }
  o.gla = +v.gla > 0 ? +v.gla : 0;
  if (o.basal === "gla"){ o.nph = {}; o.dB = DISP.caneta; if (o.mesma) o.dR = DISP.caneta; }
  o.bNome = o.basal === "gla" ? "glargina" : "NPH";
  o.bSlots = o.basal === "gla" ? (o.gla ? [{k: o.horaGla, v: o.gla}] : []) : SLOTS.filter(s => o.nph[s.k]).map(s => ({k: s.k, v: o.nph[s.k]}));
  o.rSlots = SLOTS.slice(0, 3).filter(s => o.reg[s.k]).map(s => ({k: s.k, v: o.reg[s.k]}));
  o.temB = o.bSlots.length > 0; o.temR = o.rSlots.length > 0;
  o.totB = o.bSlots.reduce((a, x) => a + x.v, 0); o.totR = o.rSlots.reduce((a, x) => a + x.v, 0);
  o.podeMisturar = o.basal === "nph" && o.temB && o.temR && o.dB === o.dR && o.dB.tipo === "seringa" && !o.dB.mL;
  o.misturar = o.mistura && o.podeMisturar;
  return o;
}
const slotDe = k => SLOTS.find(s => s.k === k);

// ── texto da prescrição
function itens(o){
  const L = [];
  const frase = a => a.length < 2 ? (a[0] || "") : a.slice(0, -1).join(", ") + " e " + a[a.length - 1];
  const lista = (arr, d, campo) => frase(arr.map(x => `${doseFull(x.v, d)} ${slotDe(x.k)[campo]}`));
  if (o.temB){
    const nome = o.basal === "gla" ? "Insulina glargina 100 UI/mL" : "Insulina humana NPH 100 UI/mL";
    L.push({t: `${nome} — ${o.dB.apres} — uso contínuo`,
            p: o.basal === "gla"
              ? `Aplicar ${doseFull(o.gla, o.dB)} por via subcutânea 1 vez ao dia, ${slotDe(o.horaGla).lbl}, sempre no mesmo horário.`
              : `Aplicar por via subcutânea ${lista(o.bSlots, o.dB, "lbl")}.`});
  }
  if (o.temR)
    L.push({t: `Insulina humana regular 100 UI/mL — ${o.dR.apres} — uso contínuo`,
            p: `Aplicar por via subcutânea ${lista(o.rSlots, o.dR, "reg")}.`});
  const ins = insumos(o);
  for (const i of ins) L.push({t: i.t, p: i.p});
  if (o.tiras){
    L.push({t: "Tiras reagentes para glicemia capilar — ____ unidades", p: "Medir conforme orientação da equipe e anotar no mapa de glicemia."});
    L.push({t: "Lancetas — ____ unidades", p: "Uma por medida."});
  }
  return L;
}
function insumos(o){
  const out = [], canetas = [], seringas = [];
  if (o.temB) (o.dB.tipo === "caneta" ? canetas : seringas).push(o.dB);
  if (o.temR && !(o.mesma && o.misturar)) (o.dR.tipo === "caneta" ? canetas : seringas).push(o.dR);
  const nApl = o.bSlots.length + o.rSlots.length - (o.misturar ? Math.min(o.bSlots.length, o.rSlots.length) : 0);
  if (canetas.length){
    const nC = canetas.length, qt = 30 * nC;
    out.push({t: `Agulha para caneta de insulina 4 mm — ${qt} unidades por mês`,
              p: `Uma agulha nova por dia${nC > 1 ? ", para cada caneta" : ""}. O ideal é uma a cada aplicação.`, q: qt});
  }
  if (seringas.length){
    const qt = nApl * 30;
    const n = o.dB.mL || (o.dR && o.dR.mL) ? "Seringa para insulina de 1 mL graduada em mL, com agulha"
            : seringas.some(d => d === DISP.movel) ? "Seringa para insulina 100 UI com agulha removível"
            : "Seringa para insulina 100 UI com agulha acoplada";
    out.push({t: `${n} — ${qt} unidades por mês`, p: "Uma seringa nova a cada aplicação.", q: qt});
  }
  if (canetas.length) out.push({t: "Caneta reutilizável de insulina — 1 por tipo de insulina", p: "Identificar cada caneta com o nome da insulina. Vale 3 anos a partir do primeiro uso."});
  return out;
}

// ── estimativa de 30 dias
function estimativa(o){
  const linhas = [];
  const calc = (nome, total, nApl, d) => {
    if (!total) return;
    const escorva = d.tipo === "caneta" ? 2 * nApl : 0;
    const mes = (total + escorva) * 30;
    const un = Math.max(1, Math.ceil(mes / d.cap));
    linhas.push([nome, `${n0(total)} UI`, `${n0(mes)} UI`, `${un} ${d.tipo === "caneta" ? (un > 1 ? "refis (tubetes) de 3 mL" : "refil (tubete) de 3 mL") : (un > 1 ? "frascos de 10 mL" : "frasco de 10 mL")}`]);
  };
  calc(o.basal === "gla" ? "Glargina" : "NPH", o.totB, o.bSlots.length, o.dB);
  calc("Regular", o.totR, o.rSlots.length, o.dR);
  const ins = insumos(o).filter(i => i.q).map(i => i.t.replace(" por mês", ""));
  return {linhas, insumos: ins,
    nota: `Estimativa da própria ferramenta: dose por dia × 30${o.dB.tipo === "caneta" || o.dR.tipo === "caneta" ? ", somando 2 UI por aplicação para o teste de segurança da caneta" : ""}, arredondando para cima, com no mínimo 1 unidade por mês (o frasco e o refil abertos valem 28 dias). Não considera perda no espaço morto da seringa nem reposição por quebra. A farmácia confere.`};
}

// ── blocos ilustrados
function tira(o){
  const card = (txt, sub, ico, tag, cor, ins) => `<div class="dcard ${cor}">
      <div class="dn">${txt}</div>${sub ? `<div class="dsub">${sub}</div>` : ""}
      <div class="dic">${G(ico, 30)}</div>
      <div class="dtag ${cor}">${tag}</div><div class="dins">${ins}</div></div>`;
  const bn = o.basal === "gla" ? "GLARGINA" : "NPH";
  const mix = o.misturar ? o.rSlots.filter(x => o.nph[x.k]).map(x => x.k) : [];
  const out = [];
  for (const s of SLOTS){
    const b = o.bSlots.find(x => x.k === s.k), r = o.rSlots.find(x => x.k === s.k);
    if (mix.includes(s.k)){
      out.push(card(`${n0(b.v)} + ${n0(r.v)} UI`, `total de ${n0(b.v + r.v)} UI na seringa`, s.ico, s.tag, "m", "NPH + REGULAR juntas"));
      continue;
    }
    if (b) out.push(card(dose(b.v, o.dB), o.dB.mL ? `${n0(b.v)} UI` : "", s.ico, s.tag, "b", bn));
    if (r) out.push(card(dose(r.v, o.dR), o.dR.mL ? `${n0(r.v)} UI` : "", s.ico, s.tag, "r", "REGULAR"));
  }
  return `<div class="tira">${out.join("")}</div>`;
}
function passos(o, d, comMistura){
  if (d.tipo === "caneta"){
    const gla = o.basal === "gla";
    return [["maos", "Lave as mãos", `Confira o nome no refil e a validade.${o.temB && o.temR ? " <b>NPH é leitosa; Regular e glargina são transparentes.</b> Leia o nome antes de cada aplicação." : ""}`],
      [gla ? "olho" : "misturar", gla ? "Confira o aspecto" : "Misture a NPH",
        gla ? "A glargina deve estar transparente, sem partículas. Não precisa misturar. Turva? Não use."
            : "Role a caneta 10 vezes entre as palmas e vire de cabeça para baixo, devagar, 10 vezes, até ficar leitosa por igual. Não sacuda."],
      ["agulha", "Agulha nova", "Rosqueie uma agulha nova de 4 mm. O ideal é uma a cada aplicação; no mínimo, uma por dia."],
      ["gota", "Teste de 2 UI", "Marque 2 UI com a ponta para cima, dê batidinhas e aperte até sair uma gota. Não saiu? Repita até 3 vezes ou troque a agulha."],
      ["seletor", "Marque a dose", "Gire o seletor até o número da dose e confira na janelinha."],
      ["aplicar", "Aplique reto", "Pele limpa e seca. Agulha reta (90°), de uma vez. Com 4 mm não precisa beliscar a pele; pessoa muito magra: prega leve."],
      ["dez", "Conte até 10", "Aperte o botão até o fim e conte devagar até 10 antes de tirar a agulha."],
      ["descarte", "Tire e descarte", "Desrosqueie a agulha e jogue no recipiente rígido. Guarde a caneta sem agulha."]];
  }
  const unidade = d.mL ? "até a marca da dose em mL" : "até a marca da dose";
  if (comMistura) return [
    ["maos", "Lave as mãos e separe o material", "Os dois frascos, uma seringa nova de agulha fixa e algodão com álcool 70%. NPH é leitosa; Regular é transparente."],
    ["misturar", "Misture a NPH", "Role o frasco da NPH devagar entre as palmas até ficar branco e leitoso por igual. A Regular não precisa."],
    ["alcool", "Limpe as duas borrachas", "Passe álcool na tampa de borracha dos dois frascos e espere secar."],
    ["ar", "Ar na NPH, sem puxar", "Puxe ar igual à dose de NPH, injete no frasco da NPH e retire a agulha <b>sem puxar insulina</b>."],
    ["ar", "Ar na Regular e puxe a Regular", "Puxe ar igual à dose de Regular, injete no frasco da Regular, vire o frasco e puxe a dose da Regular."],
    ["seringa", "Puxe a NPH na mesma seringa", "Espete o frasco da NPH virado de cabeça para baixo e puxe a dose da NPH. O total na seringa é a soma das duas doses."],
    ["nao", "Passou da soma?", "Não devolva ao frasco: descarte a seringa e recomece com uma nova."],
    ["aplicar", "Aplique e espere", "Agulha reta (90°), empurre o êmbolo até o fim e mantenha a agulha por pelo menos 6 segundos. Descarte seringa e agulha juntas."]];
  return [
    ["maos", "Lave as mãos e separe o material", `A insulina, uma seringa nova e algodão com álcool 70%. Confira o nome do frasco e a validade.`],
    ["misturar", "Misture (só a NPH)", "Role o frasco devagar entre as palmas até ficar branco e leitoso por igual. A Regular e a glargina são transparentes e não precisam."],
    ["alcool", "Limpe a borracha", "Passe o algodão com álcool na tampa de borracha do frasco e espere secar."],
    ["ar", "Puxe ar e injete no frasco", `Com a tampa na agulha, puxe ar ${unidade}. Tire a tampa, espete a borracha e injete o ar no frasco.`],
    ["seringa", "Aspire a dose", `Sem tirar a agulha, vire o frasco de cabeça para baixo e puxe ${unidade}, com os riscos na altura dos olhos. Bolhas? Dê batidinhas e ajuste.`],
    ["aplicar", "Aplique", "Álcool no local e espere secar. Agulha reta (90°); pessoa muito magra ou criança: 45° com prega. Agulha de 6 mm ou mais: sempre com prega."],
    ["dez", "Injete e espere", "Empurre o êmbolo até o fim, sem pressa, e mantenha a agulha por pelo menos 6 segundos."],
    ["descarte", "Descarte", "Seringa e agulha vão juntas no recipiente rígido, sem reencapar. Uma seringa nova a cada aplicação."]];
}
function blocoPreparo(o, segunda){
  const partes = [];
  const grade = (titulo, arr) => `<div class="box"><h3>${E(titulo)}</h3><div class="steps">${arr.map(([k, t, d], i) =>
      `<div class="step"><div class="sn">${i + 1}</div>${G(k, 28)}<div class="st"><b>${t}</b>${d}</div></div>`).join("")}</div></div>`;
  if (segunda && !(o.temB && o.temR && o.dB !== o.dR && !o.misturar)) return "";
  if (o.misturar){
    partes.push(grade("Como preparar: NPH e Regular na mesma seringa", passos(o, o.dB, true)));
    partes.push(`<p class="av"><b>A mistura só vale se a equipe ensinou e conferiu.</b> A Regular entra na seringa primeiro. Na dúvida, aplique as duas em seringas separadas, em locais diferentes.</p>`);
  } else {
    const mesmoTipo = o.temB && o.temR && o.dB === o.dR;
    partes.push(grade(`Como preparar e aplicar — ${o.dB.tipo === "caneta" ? "caneta" : "frasco e seringa"}`, passos(o, o.temB ? o.dB : o.dR, false)));
    if (o.temB && o.temR && !mesmoTipo && segunda)
      return `<div class="compact">${grade(`Insulina regular — ${o.dR.tipo === "caneta" ? "caneta" : "frasco e seringa"}`, passos(o, o.dR, false))}</div>`;
    if (o.temB && o.temR && !mesmoTipo)
      partes.push(`<p class="av">A insulina regular usa outro dispositivo: o passo a passo dela está na <b>folha de orientações</b>, atrás.</p>`);
    if (o.temB && o.temR)
      partes.push(`<p class="av"><b>Duas insulinas no mesmo horário: dois ${o.dB.tipo === "caneta" ? "dispositivos" : "seringas"} e dois locais diferentes.</b> Nunca misture no mesmo frasco. A Regular age mais rápido na barriga.</p>`);
  }
  if (o.dB.mL || o.dR.mL) partes.push(`<p class="av"><b>Seringa graduada em mL:</b> 100 UI = 1 mL. Confira o número na seringa antes de aplicar; um erro de leitura muda a dose.</p>`);
  return partes.join("");
}
function blocoGuardar(o){
  const temFrasco = (o.temB && o.dB.tipo === "seringa") || (o.temR && o.dR.tipo === "seringa");
  const emUso = temFrasco ? "Frasco em uso" : "Refil em uso";
  return `<div class="box"><h3>Como guardar</h3>
    <div class="row">${ART.geladeira}<ul class="lst">
      <li><b>${emUso}:</b> fora da geladeira, em local fresco (até 30 °C), longe do sol${temFrasco ? ", dentro da caixa" : ""}. Anote a data de abertura e use por <b>até 28 dias</b>. Acima de 30 °C, guarde na geladeira e tire 30 minutos antes de aplicar.</li>
      <li><b>Reservas:</b> geladeira (2 a 8 °C), na <b>prateleira da metade de baixo</b>, longe do fundo. <b>Nunca no congelador, na porta nem na gaveta de cima.</b></li>
      <li>Congelou, ficou no sol ou dentro do carro, ou mudou de aspecto (Regular ou glargina turva, NPH com grumos)? <b>Não use.</b></li>
      <li>Para sair ou viajar: bolsa térmica, sem encostar no gelo. Nunca no porta-malas.</li>
      <li><b>${temFrasco ? "Seringas, agulhas" : "Agulhas"} e lancetas:</b> garrafa de plástico grosso com tampa. Com 2/3 cheia, feche com fita e entregue na UBS.</li>
    </ul></div></div>`;
}
function blocoAplicar(o){
  return `<div class="box"><h3>Onde aplicar</h3>
    <div class="row">${ART.corpo}
      <ul class="lst">
        <li>Barriga (3 dedos longe do umbigo), frente e lado das coxas, parte de trás dos braços e parte de cima das nádegas.</li>
        <li><b>Mude de lugar a cada aplicação.</b> Divida a região em 4 partes e use uma por semana, com 1 dedo de distância entre as picadas.</li>
        ${o.temR ? "<li>A <b>Regular</b> age mais rápido na barriga: prefira esse local para ela.</li>" : ""}
        <li><b>Caroço, área dura, inchada ou &quot;fofa&quot;?</b> Não aplique ali e mostre à equipe: a insulina é mal absorvida e a glicemia fica imprevisível.</li>
      </ul></div>
    <div class="row rod">${ART.rodizio}<p class="sm">Um quadrante por semana, sempre no sentido do relógio.</p></div></div>`;
}
function blocoHipo(o){
  return `<div class="box red"><h3>${G("alerta", 20)} Hipoglicemia: açúcar baixo (abaixo de 70)</h3>
    <p class="sm">Suor frio, tremedeira, fome forte, coração acelerado, tontura, visão turva, confusão ou fala enrolada. Pesadelo e suor ao dormir também contam.</p>
    <ol class="lst sm">
      <li><b>Meça.</b> Abaixo de 70: tome <b>15 g de açúcar rápido</b> — 1 colher de sopa de açúcar em meio copo de água, ou 1 copo pequeno (150 mL) de refrigerante comum (não diet) ou de suco de laranja. Chocolate não serve.</li>
      <li>Espere <b>15 minutos</b> e meça de novo. Ainda abaixo de 70? Repita.</li>
      <li>Melhorou: coma um lanche se a refeição demorar mais de 1 hora.</li>
      <li><b>Desmaiou ou não consegue engolir?</b> Não dê nada pela boca. Deite a pessoa de lado e ligue <b>192 (SAMU)</b>.</li>
    </ol>
    <p class="sm"><b>Procure a UPA ou a UBS</b> se a glicemia passar de 300 em duas medidas, o aparelho mostrar &quot;HI&quot;, ou houver vômitos que não param, dor na barriga, respiração rápida, sonolência ou confusão.
    ${o.temB ? `<b>Não pare a ${o.basal === "gla" ? "glargina" : "NPH"} por conta própria</b>, mesmo comendo pouco: na doença, o açúcar costuma subir.` : ""}</p></div>`;
}

// ── folha do mapa de glicemia (metas: Diretriz SBD, Metas no tratamento do diabetes, rev. 16/05/2023)
const METAS = [
  ["HbA1c", "menor que 7,0%", "menor que 7,5%", "menor que 8,0%", "evitar sintomas de hiper ou hipoglicemia", "menor que 7,0%"],
  ["Glicemia de jejum e antes das refeições", "80 a 130", "80 a 130", "90 a 150", "100 a 180", "70 a 130"],
  ["Glicemia 2 h depois de comer", "menor que 180", "menor que 180", "menor que 180", "—", "menor que 180"],
  ["Glicemia ao deitar", "90 a 150", "90 a 150", "100 a 180", "110 a 200", "90 a 150"]
];
function mapaHGT(o){
  const cols = [["Jejum", "antes do café", "sol"], ["2 h depois", "do café", "relogio"], ["Antes", "do almoço", "prato"],
                ["2 h depois", "do almoço", "relogio"], ["Antes", "do jantar", "prato"], ["2 h depois", "do jantar", "relogio"],
                ["Ao deitar", "já na cama", "lua"], ["3 h", "da madrugada", "noite3"]];
  const head = `<tr>${["Dia e data"].map(t => `<th class="dia">${t}</th>`).join("")}${cols.map(([a, b, i]) =>
      `<th><div class="chd">${G(i, 22)}<span><b>${a}</b><br>${b}</span></div></th>`).join("")}<th class="obs">O que aconteceu (hipoglicemia, exercício, doença)</th></tr>`;
  const meta = `<tr class="meta"><td class="dia">Minha meta</td>${cols.map(() => "<td></td>").join("")}<td></td></tr>`;
  const linhas = Array.from({length: 5}, (_, i) => `<tr><td class="dia">Dia ${i + 1}<br>___/___</td>${cols.map(() => "<td></td>").join("")}<td></td></tr>`).join("");
  const grupos = ["Adulto com DM1 ou DM2", "Idoso saudável", "Idoso comprometido (frágil)", "Idoso muito comprometido", "Criança e adolescente"];
  return `<section class="folha">
    <div class="cab"><div><b>CONTROLE DA GLICEMIA CAPILAR — 5 DIAS</b><br><span class="sm">Nome: ${o.nome ? E(o.nome) : "____________________________"} · Início: ___/___/______</span></div>
      <div class="sm">${o.ubs ? E(o.ubs) : "UBS: ______________________"}</div></div>
    <p class="sm">Fure a lateral da ponta do dedo. Anote o número que aparecer no aparelho, no quadradinho do dia e do horário. A equipe risca as colunas que você <b>não</b> precisa medir.</p>
    <table class="mapa"><thead>${head}</thead><tbody>${meta}${linhas}</tbody></table>
    <div class="col2">
      <div class="box"><h3>Metas de controle <span class="sm">(a equipe marca o grupo)</span></h3>
        <table class="metas"><tr><th></th>${grupos.map(g => `<th><span class="ck"></span>${g}</th>`).join("")}</tr>
        ${METAS.map(l => `<tr><td class="lbl">${l[0]}</td>${l.slice(1).map(x => `<td>${x}</td>`).join("")}</tr>`).join("")}</table>
        <p class="xs">Valores em mg/dL. Fonte: Diretriz da Sociedade Brasileira de Diabetes, "Metas no tratamento do diabetes" (última revisão 16/05/2023). Idoso comprometido: várias doenças crônicas, perda funcional leve a moderada ou perda cognitiva moderada. Idoso muito comprometido: doença terminal, perda funcional grave ou perda cognitiva grave.</p></div>
      ${blocoHipo(o)}
    </div></section>`;
}
// ── folha da correção da Regular
function folhaCorr(o){
  const faixas = [["Abaixo de 70", "Não aplique a Regular. Trate a hipoglicemia e coma."], ["70 a 150", "Nada a somar."],
                  ["151 a 200", "+ ____ UI"], ["201 a 250", "+ ____ UI"], ["251 a 300", "+ ____ UI"],
                  ["301 a 350", "+ ____ UI"], ["Acima de 350", "+ ____ UI e avise a UBS"]];
  return `<section class="folha">
    <div class="cab"><div><b>CORREÇÃO DA INSULINA REGULAR</b><br><span class="sm">Nome: ${o.nome ? E(o.nome) : "____________________________"}</span></div><div class="sm">Some à dose fixa da refeição</div></div>
    <div class="box"><h3>Minhas doses fixas de Regular</h3><table class="dosetab">
      <tr><th>Refeição</th><th>Dose fixa</th><th>Glicemia de hoje</th><th>Somar da tabela</th><th>Total a aplicar</th></tr>
      ${o.rSlots.map(x => `<tr><td class="lbl">${G(slotDe(x.k).ico, 18)} ${slotDe(x.k).tag}</td><td><b>${dose(x.v, o.dR)}</b></td><td></td><td></td><td></td></tr>`).join("")}
      ${o.rSlots.length ? "" : "<tr><td class='lbl'>____________</td><td></td><td></td><td></td><td></td></tr>"}
    </table></div>
    <div class="box"><h3>Tabela de correção <span class="sm">(a equipe preenche)</span></h3>
      <table class="metas"><tr><th>Glicemia antes da refeição (mg/dL)</th><th>Somar à dose fixa</th></tr>
      ${faixas.map(([a, b]) => `<tr><td class="lbl">${a}</td><td>${b}</td></tr>`).join("")}</table>
      <p class="sm"><b>A correção vale só antes das refeições com Regular</b>, nunca ao deitar e nunca para &quot;corrigir&quot; sozinha uma glicemia alta fora de hora, salvo orientação da equipe.
      Vai comer menos da metade do habitual: aplique metade da dose fixa. Vai pular a refeição: não aplique a Regular.</p></div>
    <p class="ass">Data: ___/___/______ &nbsp;&nbsp;&nbsp; _______________________________________<br><span class="xs" style="margin-left:60mm">assinatura e carimbo</span></p></section>`;
}

// ── documento completo
function doc(v){
  const o = ler(v), est = estimativa(o), L = itens(o);
  const hoje = new Date().toLocaleDateString("pt-BR");
  const receita = `<section class="folha">
    <div class="cab"><div><b>RECEITUÁRIO</b><br><span class="sm">Uso subcutâneo</span></div>
      <div class="sm">${o.ubs ? E(o.ubs) + "<br>" : "Estabelecimento de saúde: ______________________<br>"}Nome: ${o.nome ? E(o.nome) : "__________________________________"}</div></div>
    <ol class="rx">${L.map(i => `<li><b>${E(i.t)}</b><br><span class="sm">${i.p}</span></li>`).join("")}</ol>
    ${tira(o)}
    ${blocoPreparo(o)}
    <p class="ass">Data: ${hoje} &nbsp;&nbsp;&nbsp; _______________________________________<br><span class="xs" style="margin-left:60mm">assinatura e carimbo</span></p>
    <p class="xs">Estimativa para 30 dias: ${est.linhas.map(l => `${l[0]} ${l[3]}`).join(" · ") || "—"}${est.insumos.length ? " · " + est.insumos.join(" · ") : ""}. ${E(est.nota)}</p>
  </section>`;
  const orient = `<section class="folha">
    <div class="cab"><div><b>COMO CUIDAR DA SUA INSULINA</b><br><span class="sm">Material educativo da APS. Não substitui as orientações da sua equipe.</span></div>
      <div class="sm">${o.nome ? E(o.nome) : ""}</div></div>
    ${blocoPreparo(o, true)}${blocoAplicar(o)}${blocoGuardar(o)}${blocoHipo(o)}
    <p class="xs">Fontes: Nota Técnica DAPS 14/2026 (Betim), bulas das insulinas e diretrizes da SBD. Leve este papel em toda consulta.</p></section>`;
  const paginas = receita + orient + (o.hgt ? mapaHGT(o) : "") + (o.corr && o.temR ? folhaCorr(o) : "");
  return `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><title>Receita ilustrada de insulina${o.nome ? " – " + E(o.nome) : ""}</title>
<style>${CSS}</style></head><body>${paginas}</body></html>`;
}

const CSS = `@page{size:A4 portrait;margin:9mm}
*{box-sizing:border-box}
body{margin:0;font:10.5pt/1.3 "Segoe UI",system-ui,sans-serif;color:#1d2733}
.folha{page-break-after:always;display:flex;flex-direction:column;gap:2mm}
.folha:last-child{page-break-after:auto}
.cab{display:flex;justify-content:space-between;align-items:flex-end;gap:4mm;border-bottom:.6mm solid #12355b;padding-bottom:1.6mm}
.cab b{font-size:14pt;letter-spacing:.4pt;color:#12355b}
.sm{font-size:8.6pt;line-height:1.25}.xs{font-size:7.4pt;line-height:1.25;color:#5b6773}
h3{margin:0 0 1.4mm;font-size:10pt;color:#12355b;display:flex;align-items:center;gap:1.5mm}
.box{border:.3mm solid #c9d1d9;border-radius:2.5mm;padding:1.9mm 2.6mm;background:#fff}
.box.red{border-color:#e3b3ae;background:#fdf4f3}.box.red h3{color:#b3261e}
.row{display:flex;gap:3mm;align-items:flex-start}.row.rod{align-items:center;margin-top:1.6mm}
.col2{display:flex;flex-direction:column;gap:2.4mm}
.lst{margin:0;padding-left:4.5mm;font-size:8.5pt;line-height:1.24}.lst li{margin-bottom:.9mm}
ol.rx{margin:0;padding-left:5mm;font-size:10pt}ol.rx li{margin-bottom:1.8mm}
.av{margin:0;font-size:8.8pt;border-left:.8mm solid #b86a00;background:#fdf6ea;padding:1.4mm 2.4mm;border-radius:0 2mm 2mm 0}
.ass{margin:6mm 0 0;font-size:9.5pt;padding-top:3mm}
.tira{display:flex;flex-wrap:wrap;gap:2mm;margin:.6mm 0}
.dcard{flex:1 1 0;min-width:28mm;border:.4mm solid #0f7b6c;border-radius:2.5mm;padding:1.6mm;text-align:center;background:#f3faf8}
.dcard.r{border-color:#b86a00;background:#fdf6ea}
.dcard.m{border-color:#12355b;background:#eef4f9}
.dcard.m .dn{color:#12355b;font-size:15pt}
.dn{font-size:17pt;font-weight:800;color:#0f7b6c;line-height:1}
.dcard.r .dn{color:#b86a00}
.dsub{font-size:7.6pt;color:#5b6773}
.dic{margin:.8mm 0;color:#5b6773}
.dtag{font-size:7.4pt;font-weight:800;color:#fff;background:#0f7b6c;border-radius:1.4mm;padding:.5mm 1mm}
.dtag.r{background:#b86a00}
.dins{font-size:7.6pt;font-weight:700;color:#1d2733;margin-top:.7mm}
.steps{display:grid;grid-template-columns:1fr 1fr;gap:1.4mm 2.4mm}
.step{display:flex;gap:1.6mm;align-items:flex-start;border:.25mm solid #dfe4e9;border-radius:2mm;padding:1.2mm 1.6mm}
.step .sn{flex:none;width:5mm;height:5mm;border-radius:50%;background:#12355b;color:#fff;font-size:8pt;font-weight:800;display:flex;align-items:center;justify-content:center}
.step .st{font-size:8.1pt;line-height:1.22}
.compact .step .st{font-size:7.5pt;line-height:1.2}.compact .steps{gap:1mm 2mm}.compact .step{padding:1mm 1.3mm}.step .st b{display:block;color:#12355b}
.step svg{flex:none;color:#0f7b6c}
svg.corpo{width:52mm;flex:none}svg.rod{width:22mm;flex:none}svg.gel{width:26mm;flex:none}
table{width:100%;border-collapse:collapse}
.mapa th,.mapa td{border:.25mm solid #9aa5b1;padding:1mm;font-size:7.8pt;text-align:center}
.mapa th{background:#12355b;color:#fff;font-weight:600}
.mapa td.dia,.mapa th.dia{width:17mm;text-align:left}
.mapa th.obs{width:40mm}.mapa tbody td{height:8.6mm}
.mapa tr.meta td{background:#eef4f9;height:6mm}
.chd{display:flex;flex-direction:column;align-items:center;gap:.4mm;line-height:1.1}
.chd svg{color:#fff}
.metas th,.metas td,.dosetab th,.dosetab td{border:.25mm solid #c9d1d9;padding:1mm 1.4mm;font-size:8pt;text-align:center}
.metas th,.dosetab th{background:#eef4f9;color:#12355b}
.metas td.lbl,.dosetab td.lbl{text-align:left;font-weight:600}
.ck{display:inline-block;width:2.6mm;height:2.6mm;border:.3mm solid #5b6773;border-radius:.6mm;margin-right:1mm;vertical-align:-.2mm}
@media screen{body{background:#eef1f4;padding:6mm}.folha{background:#fff;padding:9mm;margin:0 auto 6mm;max-width:210mm;box-shadow:0 1mm 4mm rgba(0,0,0,.15)}}`;

// ── resumo para a tela do app
function resumo(v){
  const o = ler(v), est = estimativa(o), L = itens(o);
  const txt = L.map((i, n) => `${n + 1}) ${i.t}\n   ${i.p.replace(/<[^>]+>/g, "")}`).join("\n");
  return {o, est, itens: L, texto: txt};
}
return {DISP, doc, resumo, ler};
})();

// ── fontes e registro da ferramenta nos itens de DM
Object.assign(FONTES, {
  sbd_metas2023: {s: "SBD – Metas no tratamento do diabetes (Diretriz da SBD)", t: "Sociedade Brasileira de Diabetes. Metas no tratamento do diabetes. Tabela 1 (metas individualizadas por situação clínica: adulto com DM1 ou DM2, idoso saudável, idoso comprometido/frágil, idoso muito comprometido, criança e adolescente – HbA1c, glicemia de jejum e pré-prandial, 2 h pós-prandial, ao deitar e tempo no alvo) e Tabela 2 (classificação do estado clínico do idoso). Página aberta em 05/11/2026; consta 'última revisão 16/05/2023', DOI 10.29327/557753.2022-3, dentro do site da Diretriz edição 2026.", f: "F", url: "https://diretriz.diabetes.org.br/metas-no-tratamento-do-diabetes/"}
});
(() => {
  const MUD = "v83 (05/11/2026): ferramenta 'Receita ilustrada de insulina' (Ferramentas › Calculadoras). Monta a receita com a dose desenhada por horário, o passo a passo do dispositivo que a farmácia entrega (caneta, seringa de agulha fixa ou removível, seringa graduada em mL), mistura de NPH e regular na mesma seringa (regular primeiro, SBD), como guardar, onde aplicar, estimativa de 30 dias e, opcionais, mapa de glicemia de 5 dias com as metas da SBD e folha de correção da regular.";
  const NV = [
    "Receita ilustrada de insulina: seringas em Betim – a REMUME não lista seringa (o app prescreve 'seringa para insulina 100 UI com agulha acoplada'). Escala, comprimento da agulha e quantidade por paciente por dia não confirmados; a ferramenta estima 1 seringa por aplicação (SBD: reutilizar não é recomendado).",
    "Receita ilustrada de insulina: a estimativa de 30 dias é cálculo da própria ferramenta (dose × 30, mais 2 UI por aplicação de caneta para o teste de segurança, arredondando para cima, mínimo de 1 unidade/mês). Não considera espaço morto da seringa, perdas nem quebra; as unidades da escorva dependem do fabricante da caneta. A farmácia confere.",
    "Receita ilustrada de insulina: a ferramenta só monta mistura de NPH + regular em seringa de agulha fixa. A ordem (regular primeiro) é da Diretriz SBD de técnica de aplicação; a restrição à agulha fixa é regra da ferramenta e não foi conferida em fonte – confirmar com a enfermagem.",
    "Receita ilustrada de insulina: prazo de 28 dias para frasco ou refil aberto é conservador – a bula do Novolin N frasco traz 4 semanas e a do Novolin R frasco, 6 semanas; outras marcas têm prazo próprio.",
    "Receita ilustrada de insulina: as metas do mapa de glicemia vêm da Diretriz SBD 'Metas no tratamento do diabetes', cuja página indica última revisão em 16/05/2023 dentro da edição 2026 – conferir se há versão mais nova antes de imprimir em série."
  ];
  for (const id of ["cr-dm1", "cr-dm2-insulina", "cr-glargina"]){
    const c = CONDICOES.find(x => x.id === id); if (!c) continue;
    c.mudancas = [...(c.mudancas || []), MUD];
    c.nv = [...(c.nv || []), ...NV];
    c.evid = c.evid || {};
    c.evid.fontes = [...new Set([...(c.evid.fontes || []), "sbd_metas2023", "sbd_tecnica_insulina2026"])];
  }
})();
