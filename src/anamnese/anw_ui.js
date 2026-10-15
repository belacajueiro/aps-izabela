
// ─── Integração com o APS Betim ─────────────────────────────────────────────
// Os construtores acima vêm do AnamnesePro v4 (sem identificação e sem ditado).
const QPS = [["dor","Dor"],["febre","Febre"],["dispneia","Dispneia"],["perda-peso","Perda de peso"],["nausea","Náuseas/vômitos"],["tontura","Tontura/síncope"],["edema","Edema"],["palpitacoes","Palpitações"],["tosse","Tosse"],["urinario","Queixas urinárias"],["evacuacao","Queixas evacuatórias"],["dermatologia","Lesões de pele"],["dm-descomp","Descompensação do DM2"],["has-descomp","Descompensação da HAS"]];
const PROGS = [["renovacao","Renovação de receita"],["exames","Apresentação de exames"],["rotina","Rotina / acompanhamento de comorbidades"]];
const SUBS = [["toracica","torácica"],["abdominal","abdominal"],["cefaleia","cefaleia"],["lombar","lombar"],["mmii","MMII"],["generica","outra"]];
// queixa/motivo → condições do APS (ordem = relevância)
const SUG = {
  "dor:toracica": ["dor-toracica","palpitacoes","panico"],
  "dor:abdominal": ["dor-abdominal","dispepsia","drge","colica-renal","constipacao"],
  "dor:cefaleia": ["migranea","tensional","cefaleia-abuso","pa-elevada"],
  "dor:lombar": ["lombalgia","lombociatalgia","colica-renal","pielonefrite","cr-espondilo"],
  "dor:mmii": ["tvp","ivc","gota","artrite-aguda","oa-joelho","caimbras"],
  "dor:generica": ["artrite-aguda","cr-artralgia","cr-fibromialgia","ombro","cervicalgia","odontalgia"],
  "dor": ["dor-toracica","dor-abdominal","migranea","lombalgia","artrite-aguda"],
  febre: ["febre-adulto","dengue-a","chikungunya","gripal","covid","pac","sepse"],
  dispneia: ["asma-crise","cr-asma","dpoc-exac","ic-descompensada","pac","dor-toracica","anafilaxia"],
  "perda-peso": ["perda-peso","cr-inapetencia","cr-hipertireoidismo","cr-dm2"],
  nausea: ["nauseas","dispepsia","drge","diarreia","dor-abdominal"],
  tontura: ["tontura","vppb","sincope","hipoglicemia","pa-elevada"],
  edema: ["tvp","ivc","ic-descompensada","cr-drc"],
  palpitacoes: ["palpitacoes","panico","cr-fa","cr-hipertireoidismo"],
  tosse: ["resfriado","bronquite","gripal","pac","tosse-subaguda","tb-sr","asma-crise","cr-asma"],
  urinario: ["cistite","pielonefrite","colica-renal","uretrite","hematuria","incontinencia","ho-hpb"],
  evacuacao: ["diarreia","constipacao","hemorroida","parasitoses","dii-suspeita"],
  dermatologia: ["celulite","impetigo","abscesso","tinea","urticaria","dermatite-contato","escabiose","zoster","cr-psoriase"],
  "dm-descomp": ["hiperglicemia","hipoglicemia","cr-dm2","cr-dm2-insulina"],
  "has-descomp": ["pa-elevada","cr-crise-has","cr-has","cr-has-resistente"],
  renovacao: ["cr-has","cr-dm2","cr-dislipidemia","cr-hipotireoidismo","cr-polifarmacia"],
  exames: ["pv-checkup","cr-dislipidemia","cr-dm2","cr-drc","cr-ferro","cr-hipotireoidismo","cr-vitd","cr-b12"],
  rotina: ["cr-has","cr-dm2","cr-dislipidemia","cr-obesidade","pv-checkup","pv-vacinas"]
};
const COMORB = {"HAS":"cr-has","DM2":"cr-dm2","pré-diabetes":"cr-prediabetes","dislipidemia":"cr-dislipidemia","hipotireoidismo":"cr-hipotireoidismo","hipertireoidismo":"cr-hipertireoidismo","asma":"cr-asma","DPOC":"cr-dpoc","ICC":"cr-ic","DAC":"cr-dac","doença renal crônica (DRC)":"cr-drc","obesidade":"cr-obesidade","hepatopatia crônica":"cr-masld","função renal":"cr-drc","função hepática":"cr-masld","tireoide":"cr-hipotireoidismo","anemia":"cr-ferro","rastreamento / rotina":"pv-checkup"};
const FECHO = FECHO_P.join("\n");

let tipo = "queixa";
const vals = {};            // textos digitados (id → valor), preservados ao navegar
let chosen = [];            // condições do APS escolhidas para esta consulta
const rxSel = {};           // "id|i" → incluir na receita?

function sugestoes(){
  const ids = [];
  const add = id => { if (id && !ids.includes(id) && get(id)) ids.push(id); };
  activeProgs.forEach(p => { if (p === "rotina") getAll("rot-comorb").forEach(v => add(COMORB[v])); if (p === "exames") getAll("ex-ctx").forEach(v => add(COMORB[v])); });
  activeQPs.forEach(q => { const k = q === "dor" && currentDorSub ? "dor:" + currentDorSub : q; (SUG[k] || []).forEach(add); });
  activeProgs.forEach(p => (SUG[p] || []).forEach(add));
  return ids;
}
// receita: nada entra sozinho; a médica marca o que prescrever (evita levar, por ex., a conduta de urgência sem querer)
const rxOn = (c, i) => !!rxSel[c.id + "|" + i];

function compor(){
  const items = chosen.map(get).filter(Boolean);
  const sT = buildSText(), oT = buildO(), aAn = buildA(), pAn = buildP();
  const A = [aAn, ...items.map(c => (c.A || "").trim())].filter(Boolean).join("\n");
  let P = [pAn, ...items.map(c => (c.P || "").trim())].filter(Boolean).join("\n");
  if (sT || oT || A || P) P = (P ? P + "\n" : "") + FECHO;
  const cod = items.length ? `CIAP-2: ${items.map(c => c.ciap).filter(Boolean).join("; ") || "—"} | CID-10: ${items.map(c => c.cid).filter(Boolean).join("; ") || "—"}` : "";
  const rec = items.flatMap(c => (c.rx || []).map((b, i) => rxOn(c, i) ? b.texto : null).filter(Boolean)).join("\n\n");
  return {items, cod, S: sT, O: oT, A, P, rec};
}

function html(){
  const qb = (k, l, attr) => `<button type="button" class="an-qb" ${attr}="${k}" aria-pressed="false">${esc(l)}</button>`;
  return `<div class="pnw anw" id="anw">
  <div class="pw-form">
    <div class="an-tipo" role="group" aria-label="Tipo de consulta"><button type="button" data-an-tipo="queixa" aria-pressed="true">Por queixa</button><button type="button" data-an-tipo="programada" aria-pressed="false">Consulta programada</button></div>
    <div data-an-zone="queixa"><div class="an-lab">Queixa principal <span>(pode marcar mais de uma)</span></div><div class="an-qps">${QPS.map(([k, l]) => qb(k, l, "data-an-qp")).join("")}</div>
      <div class="an-subs" id="an-subs" hidden><span class="an-lab" style="margin:0">Tipo de dor</span>${SUBS.map(([k, l]) => qb(k, l, "data-an-sub")).join("")}</div></div>
    <div data-an-zone="programada" hidden><div class="an-lab">Motivo da consulta</div><div class="an-qps">${PROGS.map(([k, l]) => qb(k, l, "data-an-prog")).join("")}</div></div>
    ${PANELS}
    <div class="actions" style="margin-top:6px"><button type="button" class="btn ghost sm" id="an-reset">Nova consulta (limpar)</button></div>
    <div class="pw-jump"><button type="button" class="btn pri" id="an-jump">Ver evolução ↓</button></div>
  </div>
  <div class="pw-out" id="an-out" aria-live="polite">
    <div class="pw-b"><h4>Conduta do APS</h4>
      <p class="hint" style="margin:0 0 6px">Marque a condição deste atendimento: a avaliação, o plano e a receita dela entram na evolução.</p>
      <div class="an-sugl" id="an-sug"></div>
      <input type="search" class="an-find" id="an-find" placeholder="Buscar outra condição…" autocomplete="off" aria-label="Buscar outra condição">
      <div class="an-res" id="an-res"></div>
    </div>
    <div class="pw-b"><h4>Evolução</h4>
      ${["S","O","A","P"].map(k => `<div class="an-sec"><div class="an-sech"><b>${k}</b><span>${({S:"Subjetivo",O:"Objetivo",A:"Avaliação",P:"Plano"})[k]}</span><button type="button" class="btn ghost sm" data-an-cp="${k}">Copiar</button></div><textarea class="fill pw-ta" id="an-${k}" aria-label="${k}"></textarea></div>`).join("")}
      <div class="actions" style="margin-top:8px"><button type="button" class="btn pri sm" data-an-cp="evo">Copiar evolução</button><button type="button" class="btn sm" data-an-cp="tudo">Evolução + receita</button></div>
      <p class="hint" style="margin:6px 0 0">Pode editar os campos antes de copiar; uma nova marcação à esquerda refaz o texto.</p>
    </div>
    <div class="pw-b" id="an-recb" hidden><h4>Receita</h4><div class="an-rxl" id="an-rxl"></div><textarea class="fill mono pw-ta" id="an-rec" aria-label="Receita"></textarea><div id="an-bal"></div>
      <div class="actions" style="margin-top:8px"><button type="button" class="btn sm" data-an-cp="rec">Copiar receita</button></div></div>
  </div>
</div>`;
}

let root = null;
const $a = s => root && root.querySelector(s);
function syncChips(){
  root.querySelectorAll(".chip").forEach(ch => ch.classList.toggle("active", !!(S[ch.dataset.g] && S[ch.dataset.g].has(ch.dataset.v))));
  root.querySelectorAll('input[type="checkbox"][data-g]').forEach(cb => { cb.checked = !!(S[cb.dataset.g] && S[cb.dataset.g].has(cb.dataset.v)); });
}
function syncTop(){
  root.querySelectorAll("[data-an-tipo]").forEach(b => b.setAttribute("aria-pressed", b.dataset.anTipo === tipo));
  root.querySelectorAll("[data-an-zone]").forEach(z => { z.hidden = z.dataset.anZone !== tipo; });
  root.querySelectorAll("[data-an-qp]").forEach(b => b.setAttribute("aria-pressed", activeQPs.has(b.dataset.anQp)));
  root.querySelectorAll("[data-an-prog]").forEach(b => b.setAttribute("aria-pressed", activeProgs.has(b.dataset.anProg)));
  root.querySelectorAll("[data-an-sub]").forEach(b => b.setAttribute("aria-pressed", b.dataset.anSub === currentDorSub));
  $a("#an-subs").hidden = !activeQPs.has("dor");
  root.querySelectorAll(".ctx-panel").forEach(p => p.classList.remove("active"));
  const on = [...activeQPs, ...activeProgs];
  if (!on.length) $a("#an-ctx-empty").classList.add("active");
  on.forEach(k => { const p = $a("#an-ctx-" + k); if (p) p.classList.add("active"); });
}
function renderSug(){
  const sug = sugestoes(); const ids = [...chosen.filter(id => !sug.includes(id)), ...sug];
  $a("#an-sug").innerHTML = ids.length ? ids.map(id => { const c = get(id); return `<div class="an-sg"><label class="pw-ck"><input type="checkbox" data-an-pick="${esc(id)}"${chosen.includes(id) ? " checked" : ""}><span>${esc(c.nome)}</span></label><button type="button" class="golink pw-go" data-gomod="${esc(modOf(c))}" data-id="${esc(id)}" title="Abrir a condição">abrir →</button></div>`; }).join("")
    : `<p class="hint" style="margin:0">Escolha uma queixa ou motivo para ver sugestões, ou busque abaixo.</p>`;
}
function renderOut(){
  const R = compor();
  [["S", R.S], ["O", R.O], ["A", R.A], ["P", R.P]].forEach(([k, t]) => { const el = $a("#an-" + k); if (el && document.activeElement !== el){ el.value = t; grow(el); } });
  const rb = $a("#an-recb"), lst = R.items.flatMap(c => (c.rx || []).map((b, i) => ({c, b, i})));
  rb.hidden = !lst.length; if (!lst.length) $a("#an-bal").innerHTML = "";
  if (lst.length){
    const TR = {ambos:["evidência · SUS","t-ambos"], evidencia:["comprar","t-evid"], sus:["SUS Betim","t-sus"], fora:["alternativa","t-fora"]};
    $a("#an-rxl").innerHTML = lst.map(({c, b, i}) => { const t = TR[b.trilha] || null; return `<label class="pw-ck"><input type="checkbox" data-an-rx="${esc(c.id + "|" + i)}"${rxOn(c, i) ? " checked" : ""}><span>${t ? `<small class="trilha ${t[1]}">${t[0]}</small> ` : ""}${esc(b.titulo)}${R.items.length > 1 ? ` <small>(${esc(c.nome)})</small>` : ""}</span></label>`; }).join("");
    const vistos = new Set(), bal = lst.filter(({c, i}) => rxOn(c, i)).flatMap(({b}) => balMatch(b.texto)).filter(e => !vistos.has(e.k) && vistos.add(e.k));
    $a("#an-bal").innerHTML = bal.map(e => balHtml(e)).join("");
    const rec = $a("#an-rec"); if (document.activeElement !== rec){ rec.value = R.rec || "Marque acima o que entra na receita."; grow(rec); }
  }
  renderSug();
}
function txt(k){ const el = $a("#an-" + k); return el ? el.value.trim() : ""; }
function evolucao(){
  const R = compor();
  return [R.cod, ...["S","O","A","P"].map(k => txt(k) ? `${k}: ${txt(k)}` : "").filter(Boolean)].filter(Boolean).join("\n\n");
}
function limpar(){
  for (const k in S) S[k].clear();
  activeQPs.clear(); activeProgs.clear(); currentDorSub = null; tipo = "queixa"; chosen = [];
  for (const k in vals) delete vals[k]; for (const k in rxSel) delete rxSel[k];
  root.querySelectorAll(".pw-form textarea, .pw-form input:not([type=checkbox])").forEach(el => { el.value = ""; });
  syncChips(); syncTop(); renderOut();
}
function init(r){
  root = r.querySelector("#anw"); if (!root) return;
  Object.entries(vals).forEach(([id, v]) => { const el = root.querySelector("#" + CSS.escape(id)); if (el) el.value = v; });
  syncChips(); syncTop(); renderOut();
  root.addEventListener("click", ev => {
    const ch = ev.target.closest(".chip");
    if (ch && root.contains(ch)){
      const g = ch.dataset.g, v = ch.dataset.v, set = getSet(g);
      if (ch.classList.contains("radio")){ const was = set.has(v); root.querySelectorAll(`.chip[data-g="${g}"]`).forEach(c => set.delete(c.dataset.v)); if (!was) set.add(v); }
      else set.has(v) ? set.delete(v) : set.add(v);
      syncChips(); renderOut(); return;
    }
    const hd = ev.target.closest(".acc-header");
    if (hd){ hd.nextElementSibling.classList.toggle("open"); const ca = hd.querySelector(".acc-caret"); if (ca) ca.classList.toggle("open"); return; }
    const b = ev.target.closest("button"); if (!b) return;
    if (b.dataset.anTipo){ tipo = b.dataset.anTipo; syncTop(); return; }
    if (b.dataset.anQp){ const q = b.dataset.anQp; activeQPs.has(q) ? activeQPs.delete(q) : activeQPs.add(q); if (!activeQPs.has("dor")) currentDorSub = null; syncTop(); renderOut(); return; }
    if (b.dataset.anSub){ currentDorSub = currentDorSub === b.dataset.anSub ? null : b.dataset.anSub; syncTop(); renderOut(); return; }
    if (b.dataset.anProg){ const p = b.dataset.anProg; activeProgs.has(p) ? activeProgs.delete(p) : activeProgs.add(p); syncTop(); renderOut(); return; }
    if (b.dataset.anAdd){ if (!chosen.includes(b.dataset.anAdd)) chosen.push(b.dataset.anAdd); $a("#an-find").value = ""; $a("#an-res").innerHTML = ""; renderOut(); return; }
    if (b.dataset.anCp){ const k = b.dataset.anCp;
      if ("SOAP".includes(k) && k.length === 1) copy(txt(k), k);
      else if (k === "evo") copy(evolucao(), "Evolução");
      else if (k === "rec") copy(txt("rec"), "Receita");
      else if (k === "tudo") copy(evolucao() + (txt("rec") && !$a("#an-recb").hidden ? "\n\nPRESCRIÇÃO\n" + txt("rec") : ""), "Evolução e receita");
      return; }
    if (b.id === "an-reset"){ limpar(); return; }
    if (b.id === "an-jump"){ const o = $a("#an-out"); if (o && o.scrollIntoView) o.scrollIntoView({behavior: "smooth", block: "start"}); }
  });
  root.addEventListener("input", ev => {
    const el = ev.target;
    if (el.id === "an-find"){ const q = norm(el.value.trim()); $a("#an-res").innerHTML = q.length < 2 ? "" : all().filter(c => c.id !== "co-consulta" && !chosen.includes(c.id) && norm(c.nome + " " + (c.tags || "")).includes(q)).slice(0, 8).map(c => `<button type="button" data-an-add="${esc(c.id)}">${esc(c.nome)} <small>${esc(MOD(modOf(c)).curto)}</small></button>`).join("") || `<p class="hint" style="margin:4px 0 0">Nada encontrado.</p>`; return; }
    if (el.classList.contains("pw-ta")) return;
    if (el.id && el.closest(".pw-form")){ vals[el.id] = el.value; renderOut(); }
  });
  root.addEventListener("change", ev => {
    const el = ev.target;
    if (el.dataset.anPick){ const id = el.dataset.anPick; chosen = el.checked ? [...chosen.filter(x => x !== id), id] : chosen.filter(x => x !== id); renderOut(); return; }
    if (el.dataset.anRx){ rxSel[el.dataset.anRx] = el.checked; renderOut(); return; }
    if (el.type === "checkbox" && el.dataset.g){ const s = getSet(el.dataset.g); el.checked ? s.add(el.dataset.v) : s.delete(el.dataset.v); renderOut(); }
  });
}
return {html, init};
})();
