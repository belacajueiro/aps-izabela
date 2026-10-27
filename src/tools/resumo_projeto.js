// resumo_projeto.js – gera a cópia resumida do conteúdo clínico do app para o Projeto
// "Motor Evidência Clínica + Camada SUS" (documentos app-aps/*.md).
//
// Uso (na raiz do repositório):
//   node src/tools/resumo_projeto.js verificar      → imprime MUDOU ou SEM MUDANÇA (hash de src/data*.js)
//   node src/tools/resumo_projeto.js gerar DIR      → grava os .md em DIR (nomes = caminho no Projeto sem "app-aps/")
//   node src/tools/resumo_projeto.js marcar         → registra o hash atual em src/monitor/resumo_projeto.json
//   node src/tools/resumo_projeto.js checar         → confere se a ferramenta e o estado existem (para a sentinela)
// Só "marcar" depois de gravar os documentos no Projeto. Não gera nem toca app-aps/pendencias-do-app.md
// nem os documentos de versão (app-aps/NN-vXX-*.md), que são escritos à mão.
// "gerar" grava também DIR/LISTA.txt com os nomes dos arquivos gerados: gravar no Projeto exatamente esses.
// Restaurada em 26/10/2026 (v72): o arquivo tinha sido apagado por engano no commit 545552c (v39.2), e por isso
// a sentinela semanal deixou de atualizar a cópia. O build agora falha se ela sumir de novo (build.py).
const fs = require("fs"), path = require("path"), vm = require("vm"), crypto = require("crypto"), cp = require("child_process");
const SRC = path.resolve(__dirname, ".."), ROOT = path.resolve(SRC, "..");
const ESTADO = path.join(SRC, "monitor", "resumo_projeto.json");

function arquivos() {
  const n = f => +((f.match(/data(\d*)\.js$/) || [])[1] || 1);
  return fs.readdirSync(SRC).filter(f => /^data\d*\.js$/.test(f)).sort((a, b) => n(a) - n(b));
}
function hash() {
  const h = crypto.createHash("sha256");
  arquivos().forEach(f => h.update(fs.readFileSync(path.join(SRC, f))));
  return h.digest("hex").slice(0, 16);
}
function estado() { try { return JSON.parse(fs.readFileSync(ESTADO, "utf8")); } catch { return {}; } }
function versao() {
  try {
    const s = cp.execSync('git log -1 --format="%h|%ci|%s" -- "src/data*.js" src/app.html', {cwd: ROOT}).toString().trim();
    const [h, d, msg] = s.split("|"); const v = (msg.match(/^v[\d.]+/) || [""])[0];
    return {commit: h, data: d.slice(0, 16), v: v || "(versão não identificada)"};
  } catch { return {commit: "?", data: "", v: "(versão não identificada)"}; }
}
function carregar() {
  let code = arquivos().map(f => fs.readFileSync(path.join(SRC, f), "utf8")).join("\n");
  const nomes = [...new Set([...code.matchAll(/^(?:const|let|var) ([A-Za-z_0-9]+)/gm)].map(m => m[1]))];
  code += "\n;globalThis.__out={" + nomes.map(k => `${k}:typeof ${k}!=="undefined"?${k}:null`).join(",") + "};";
  const nada = () => null;
  const ctx = {console, window: {}, document: {getElementById: nada, querySelector: nada, addEventListener: nada}, localStorage: {getItem: nada, setItem: nada}};
  ctx.globalThis = ctx; vm.createContext(ctx); vm.runInContext(code, ctx);
  return ctx.__out;
}

const cl = s => String(s || "").replace(/\*\*/g, "").replace(/_{3,}/g, "___").replace(/[ \t]+/g, " ").trim();
const T = (s, n) => s.length > n ? s.slice(0, n - 1).replace(/\s+\S*$/, "") + "…" : s;
const one = s => cl(s).replace(/\s*\n+\s*/g, " · ");
const TR = {ambos: "evidência = SUS", evidencia: "melhor evidência", sus: "opção SUS", fora: "fora do SUS"};
const MOD = {de: "Demanda espontânea", cr: "Crônicos", pn: "Pré-natal e puerpério", pu: "Puericultura", mu: "Saúde da mulher", pv: "Prevenção e rastreios", ho: "Saúde do homem", in: "Infecciosas (IST, HIV, hepatites, TB, hanseníase)", po: "Populações e atenção domiciliar", co: "Consulta guiada"};
const ARQ = {de: "02-demanda-espontanea-*.md", cr: "03-cronicos.md (Saúde mental em 06-cronicos-saude-mental.md)", pn: "04-pre-natal-puericultura.md", pu: "04-pre-natal-puericultura.md", co: "04-pre-natal-puericultura.md", mu: "05-mulher-homem-prevencao-infecciosas-populacoes.md", pv: "05-mulher-homem-prevencao-infecciosas-populacoes.md", ho: "05-mulher-homem-prevencao-infecciosas-populacoes.md", in: "05-mulher-homem-prevencao-infecciosas-populacoes.md", po: "05-mulher-homem-prevencao-infecciosas-populacoes.md"};

function rx(r) {
  const L = cl(r.texto).split("\n"), out = [];
  L.forEach((l, i) => {
    if (/^\d+\.\s/.test(l.trim())) {
      let x = l.trim().replace(/\s*___\s*/g, " — ");
      const nx = (L[i + 1] || "").trim();
      if (nx && !/^\d+\./.test(nx) && !/^USO /.test(nx)) x += " → " + T(nx, 60);
      out.push(x);
    }
  });
  return `  - ${r.trilha ? "[" + (TR[r.trilha] || r.trilha) + "] " : ""}${cl(r.titulo)}: ${out.join(" | ") || one(r.texto).slice(0, 200)}${r.dose ? " (dose " + r.dose + ")" : ""}${r.nota ? " — " + T(one(r.nota), 100) : ""}`;
}
function cond(c) {
  const L = [`### ${cl(c.nome)}`, `id: ${c.id} · ${c.sistema} · risco ${c.risco}${c.ciap ? " · CIAP " + c.ciap : ""}${c.cid ? " · CID " + c.cid : ""}`];
  if (c.guia && c.guia.resumo) L.push(`- Guia: ${T(one(c.guia.resumo), 350)}`);
  if (c.guia && c.guia.urg) L.push(`- Agir agora (guia): ${T(one(c.guia.urg), 260)}`);
  if (c.guia && (c.guia.secoes || []).length) L.push(`- Seções do guia: ${c.guia.secoes.map(x => cl(x.t)).join(" · ")}`);
  if (c.evid) { L.push(`- Evidência: ${T(one(c.evid.resumo), 380)}`); if (c.evid.certeza) L.push(`- Certeza (app): ${one(c.evid.certeza)}`); }
  if (c.idealsus) { const i = c.idealsus; L.push(`- Ideal × SUS: ideal — ${T(one(i.ideal), 220)} | SUS — ${T(one(i.sus), 220)}${i.ponte ? " | ponte — " + T(one(i.ponte), 220) : ""}`); }
  if (c.rx && c.rx.length) { L.push("- Prescrições no app:"); c.rx.forEach(r => L.push(rx(r))); }
  if (c.sus) { if (typeof c.sus === "string") L.push(`- SUS: ${T(one(c.sus), 240)}`); else if (c.sus.betim) L.push(`- Betim: ${T(one(c.sus.betim), 240)}`); }
  if (c.encaminhar) L.push(`- Encaminhar: ${T(one(c.encaminhar), 220)}`);
  if (c.alerta) L.push(`- Alerta: ${T(one(c.alerta), 220)}`);
  if (c.divergencia) L.push(`- Divergência entre diretrizes: ${one(c.divergencia)}`);
  if (c.nv && c.nv.length) L.push(`- [NV] no app: ${c.nv.map(one).join(" / ")}`);
  if (c.evid && c.evid.fontes && c.evid.fontes.length) L.push(`- Fontes (chaves): ${c.evid.fontes.join(", ")}`);
  return L.join("\n");
}
function corpo(lista) {
  const bySys = {}; lista.forEach(c => (bySys[c.sistema] = bySys[c.sistema] || []).push(c));
  return Object.keys(bySys).map(s => `\n## ${s}\n\n` + bySys[s].map(cond).join("\n\n") + "\n");
}

function gerar(dir) {
  const o = carregar(), C = o.CONDICOES, F = o.FONTES, V = versao(), hoje = new Date().toLocaleDateString("pt-BR", {timeZone: "America/Sao_Paulo"});
  const rot = `cópia de ${hoje}, ${V.v}`;
  const H = t => `# App APS Betim — ${t} (${rot})\n\nResumo do conteúdo do app para consulta nas discussões de caso. **Não é fonte nem referência citável**: confirmar na fonte primária ou normativa. Regras de uso e legenda em app-aps/00-indice-e-regras.md.\n`;
  const g = {}; C.forEach(c => (g[c.modulo || "de"] = g[c.modulo || "de"] || []).push(c));
  const docs = {};

  // 00 – índice, regras e dados locais
  let s = `# App APS Betim — resumo do conteúdo clínico (${rot})

**O que é:** cópia resumida do conteúdo clínico do app APS Betim (site belacajueiro.github.io/aps-izabela; repositório GitHub belacajueiro/aps-izabela, versão ${V.v}, commit ${V.commit}, de ${V.data}). Gerada automaticamente por src/tools/resumo_projeto.js a partir de src/data*.js, já com todas as revisões aplicadas; atualizada pela sentinela semanal quando o conteúdo do app muda.

**Como usar nas discussões de caso:**
- Serve para saber o que a Dra. Izabela já decidiu para cada condição, que opção do SUS/Betim o app usa e quais pontos o app marcou como não verificados.
- **Não é fonte.** Não citar como referência, não usar para rotular uma afirmação como [F] e não tratar como "documento anexado pela usuária" para fins de prioridade (seção 12.1). Toda afirmação vinda daqui é confirmada na fonte primária ou normativa antes de entrar numa resposta.
- Os rótulos [F]/[NV] e a "certeza" que aparecem no texto são os que o app atribuiu na época da revisão, não uma verificação feita nesta sessão.
- Se a fonte primária ou oficial divergir do app, vale a fonte, e a divergência vai para app-aps/pendencias-do-app.md.
- Quando o repositório estiver acessível, ele prevalece sobre esta cópia.

**O que foi omitido para caber no projeto:** modelos de S/O/A, orientações ao paciente, sinais de alarme para o paciente, fluxogramas, tabelas e calculadoras dos guias, histórico de mudanças e a lista nacional (RENAME) por condição, que já está no projeto. Posologias e notas de prescrição aparecem abreviadas.

**Guia Clínico:** as linhas "Agir agora (guia)" e "Seções do guia" mostram o que existe no Guia Clínico de cada item; o conteúdo das seções está só no app.

**Documentos desta série (gerados):** 00 (este índice e dados locais) · 02-demanda-espontanea-1 e -2 · 03-cronicos · 06-cronicos-saude-mental · 04-pre-natal-puericultura · 05-mulher-homem-prevencao-infecciosas-populacoes · fontes-do-app · precos-balcao. **Escritos à mão:** pendencias-do-app e os registros de versão (app-aps/NN-vXX-*.md).

**Legenda das prescrições:** [evidência = SUS] a mesma opção é a melhor evidência e está no SUS; [melhor evidência] opção preferida pela evidência; [opção SUS] alternativa disponível no SUS; [fora do SUS] opção de compra.

## Índice de condições (${C.length})
`;
  for (const m of ["de", "cr", "pn", "pu", "mu", "pv", "ho", "in", "po", "co"]) {
    if (!g[m]) continue;
    const bySys = {}; g[m].forEach(c => (bySys[c.sistema] = bySys[c.sistema] || []).push(c));
    s += `\n### ${MOD[m]} (${g[m].length}) — em app-aps/${ARQ[m]}\n`;
    for (const sys in bySys) s += `- **${sys}:** ${bySys[sys].map(c => cl(c.nome) + " [" + c.id + "]").join("; ")}\n`;
  }
  s += `\n## Dados locais de Betim registrados no app\n\nResumo do que o app registrou da REMUME Betim e de fluxos locais. Conferir na REMUME anexada ao projeto antes de usar.\n\n`;
  [["HAS", "BETIM_HAS"], ["Saúde da mulher (contracepção)", "BETIM_MU"], ["Infecciosas", "BETIM_INF"], ["Cardiovascular e anticoagulação", "BETIM_CR2"], ["Geriatria e neurologia", "BETIM_GER"], ["Populações e rede social", "BETIM_PO2"], ["Farmácia Popular – dapagliflozina", "FP_DAPA"], ["Insulina glargina – fases em Betim", "BETIM_FASE1"], ["Urgência – SAMU", "SAMU"]]
    .forEach(([k, v]) => { if (typeof o[v] === "string") s += `- **${k}:** ${cl(o[v])}\n`; });
  docs["00-indice-e-regras.md"] = s;

  // 02 – demanda espontânea em duas partes
  const de = corpo(g.de || []), tot = de.reduce((a, p) => a + p.length, 0); let acc = 0; const a = [], b = [];
  de.forEach(p => { (acc < tot / 2 ? a : b).push(p); acc += p.length; });
  const sa = L => L.map(p => p.match(/\n## (.+)/)[1]).join(", ");
  docs["02-demanda-espontanea-1.md"] = H("Demanda espontânea, parte 1: " + sa(a)) + a.join("");
  docs["02-demanda-espontanea-2.md"] = H("Demanda espontânea, parte 2: " + sa(b)) + b.join("");
  const SM = c => c.sistema === "Saúde mental";
  docs["03-cronicos.md"] = H("Crônicos (exceto Saúde mental, em 06-cronicos-saude-mental.md)") + corpo((g.cr || []).filter(c => !SM(c))).join("");
  docs["06-cronicos-saude-mental.md"] = H("Crônicos – Saúde mental") + corpo((g.cr || []).filter(SM)).join("");
  docs["04-pre-natal-puericultura.md"] = H("Pré-natal, puerpério, puericultura e consulta guiada") +
    [["pn", "Pré-natal e puerpério"], ["pu", "Puericultura"], ["co", "Consulta guiada"]].map(([m, t]) => `\n# ${t}\n` + corpo(g[m] || []).join("")).join("");
  docs["05-mulher-homem-prevencao-infecciosas-populacoes.md"] = H("Saúde da mulher, saúde do homem, prevenção, infecciosas e populações") +
    [["mu", "Saúde da mulher"], ["ho", "Saúde do homem"], ["pv", "Prevenção e rastreios"], ["in", MOD.in], ["po", MOD.po]].map(([m, t]) => `\n# ${t}\n` + corpo(g[m] || []).join("")).join("");

  // fontes
  const usadas = new Set(), js = JSON.stringify(C);
  Object.keys(F).forEach(k => { if (js.includes('"' + k + '"')) usadas.add(k); });
  let f = `# App APS Betim — fontes usadas pelo app (${rot})\n\nInventário das fontes que o app cita, com o rótulo que o app atribuiu ([F] conferida na revisão do app; [C] citada sem conferência) e o link registrado. **Ponto de partida para busca, não verificação**: abrir a fonte antes de citar numa resposta. As chaves (em negrito) são as que aparecem em "Fontes (chaves)" nos resumos.\n\n`;
  [...usadas].sort().forEach(k => { const x = F[k]; f += `- **${k}** [${x.f}] ${x.s ? cl(x.s) : T(cl(x.t), 110)}${x.url ? " — " + x.url : ""}\n`; });
  docs["fontes-do-app.md"] = f;

  // preços de balcão
  if (Array.isArray(o.BALCAO) && o.BALCAO_INFO) {
    const BI = o.BALCAO_INFO, U = {emb: "embalagem", un: "unidade (comprimido/cápsula)"};
    let p = `# App APS Betim — preços de balcão (CMED, ${rot})\n\nPreços de balcão (PMC, CMED) usados no app. Data da lista: ${BI.data}. ${BI.icms}. Teto (preço máximo ao consumidor), não preço praticado: no balcão costuma sair abaixo, sobretudo o genérico. Coluna "Preço por": unidade = preço de cada comprimido/cápsula; embalagem = preço da caixa/frasco na apresentação indicada.\n\n| Medicamento | Preço por | Opções (tipo · apresentação · PMC R$) |\n|---|---|---|\n`;
    o.BALCAO.forEach(x => {
      p += `| ${cl(x.rot)} | ${U[x.u] || x.u} | ${(x.it || []).map(i => `${i.t}${i.n && i.n !== "genérico" ? " (" + i.n + ")" : ""} · ${i.e ? i.e + " · " : ""}${i.p != null ? i.p.toFixed(2).replace(".", ",") : "sem preço"}`).join("; ") || "não consta na lista CMED"} |\n`;
    });
    docs["precos-balcao.md"] = p;
  }

  // Conferência: todo item precisa estar em algum documento gerado.
  const todos = Object.values(docs).join("\n"), faltam = C.filter(c => !todos.includes("id: " + c.id + " ")).map(c => c.id);
  if (faltam.length) { console.error("ERRO: itens fora da cópia: " + faltam.join(", ")); process.exit(2); }
  fs.mkdirSync(dir, {recursive: true});
  for (const [k, v] of Object.entries(docs)) { fs.writeFileSync(path.join(dir, k), v); console.log(k, Buffer.byteLength(v)); }
  fs.writeFileSync(path.join(dir, "LISTA.txt"), Object.keys(docs).join("\n") + "\n");
  console.log("versão", V.v, "commit", V.commit, "hash", hash(), "condições", C.length);
}

const [cmd, arg] = process.argv.slice(2);
if (cmd === "checar") { const e = estado(); console.log(e.hash ? "OK – última cópia " + e.versao + " (" + (e.gerado_em || "?") + ")" : "SEM ESTADO – rodar gerar e marcar"); }
else if (cmd === "verificar") console.log(estado().hash === hash() ? "SEM MUDANÇA" : "MUDOU");
else if (cmd === "gerar" && arg) gerar(path.resolve(arg));
else if (cmd === "marcar") { const V = versao(); fs.writeFileSync(ESTADO, JSON.stringify({hash: hash(), versao: V.v, commit: V.commit, gerado_em: new Date().toISOString()}, null, 1) + "\n"); console.log("marcado", hash()); }
else { console.error("uso: verificar | gerar DIR | marcar"); process.exit(1); }
