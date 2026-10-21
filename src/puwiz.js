// ── Consulta de puericultura guiada pela idade ───────────────────────────────
// v42 (20/10/2026): usa o MESMO conteúdo e o MESMO gerador (PU, em data51.js) das "Consultas por idade".
// A evolução sai em S, O, A e P; lembretes e orientações ao médico ficam fora dela. Nada é salvo.
const PUW = (() => {
  let S = {}; const OPT = {};
  const N = v => { const s2 = String(v ?? "").replace(",", "."); return s2 === "" ? NaN : parseFloat(s2); };
  const hoje = () => pd(isoHoje());
  const ALIM = [["", "padrão da idade"], ["ame", "Aleitamento materno exclusivo"], ["misto", "Aleitamento materno + fórmula"], ["formula", "Fórmula infantil"], ["lv", "Leite de vaca (com ou sem peito)"], ["amc", "Aleitamento materno + alimentação complementar"], ["amf", "Aleitamento materno + alimentação da família"], ["comp", "Alimentação complementar, sem aleitamento"], ["fam", "Alimentação da família"]];
  const ALARM = [["a_febre", "Febre"], ["a_recusa", "Recusa alimentar"], ["a_vom", "Vômitos persistentes"], ["a_letar", "Hipoatividade ou letargia"], ["a_resp", "Desconforto respiratório"], ["a_conv", "Convulsão ou espasmos"], ["a_cian", "Cianose"], ["a_ict", "Icterícia"], ["a_diar", "Diarreia com desidratação"], ["a_peso", "Perda de peso"]];
  const TRI = [["t_pez", "Teste do pezinho"], ["t_ore", "Teste da orelhinha"], ["t_olh", "Teste do olhinho (reflexo vermelho)"], ["t_cor", "Teste do coraçãozinho"], ["t_lin", "Teste da linguinha"]];
  const TRIOPT = [["", "não informado"], ["ok", "realizado – normal"], ["ag", "realizado – aguarda resultado"], ["alt", "alterado"], ["nao", "não realizado"]];
  const it = (t, src, link) => { const mm = !src && /\s\[(F|C|I|NV)\]$/.exec(t); return mm ? {t: t.slice(0, mm.index), src: mm[1], link} : {t, src, link}; };
  const sel = (k, l, o) => `<label class="f">${esc(l)}<select data-w="${k}">${o.map(([v, t]) => `<option value="${v}">${esc(t)}</option>`).join("")}</select></label>`;
  const num = (k, l, o = {}) => `<label class="f">${esc(l)}<input data-w="${k}" type="number" inputmode="decimal" step="${o.step || "any"}" placeholder="${esc(o.ph || "")}"></label>`;
  const txt = (k, l, ph = "") => `<label class="f">${esc(l)}<input data-w="${k}" type="text" placeholder="${esc(ph)}"></label>`;
  const box = (k, l) => `<label class="pw-ck"><input type="checkbox" data-w="${k}"><span>${esc(l)}</span></label>`;

  function html(){
    return `<div class="pnw" id="puw">
  <div class="pw-form">
    <p class="hint" style="margin:0 0 10px">Comece pela data de nascimento. A consulta é a mesma das <b>Consultas por idade</b>, preenchida com os dados abaixo. <b>Nada é salvo</b>.</p>
    <fieldset class="pw-sec"><legend>1. Criança</legend>
      <div class="pw-row">
        <label class="f">Data de nascimento<input data-w="dn" type="date"></label>
        ${sel("sexo", "Sexo", [["", "—"], ["m", "masculino"], ["f", "feminino"]])}
        ${sel("acomp", "Acompanhante", [["mae", "mãe"], ["pai", "pai"], ["maes", "mãe e pai"], ["avo", "avó"], ["outro", "outro"]])}
        <div data-vis="acompt">${txt("acompt", "Quem acompanha")}</div>
        ${txt("ign", "IG ao nascer", "38+0")}
        ${num("pn", "Peso ao nascer (g)", {step: 10})}
      </div>
      <p class="pw-ig" id="pu-idade"></p>
      <div data-vis="nrn" class="pw-grid" style="margin-top:6px">${box("prim", "Primeira consulta na unidade (inclui nascimento, triagens e cuidador)")}</div>
    </fieldset>
    <div data-vis="ok">
    <div data-vis="prim"><fieldset class="pw-sec"><legend>Primeira consulta</legend>
      <div class="pw-row">
        ${txt("gest", "Gestação", "única, sem intercorrências")}${txt("parto", "Tipo de parto", "vaginal / cesárea / induzido")}${txt("apgar", "APGAR", "8/9")}
        ${num("cn", "Comprimento ao nascer (cm)", {step: "0.5"})}${num("pcn", "PC ao nascer (cm)", {step: "0.5"})}${txt("alta", "Alta", "sem intercorrências")}
      </div>
      <div class="pw-row" style="margin-top:6px">${txt("sor", "Sorologias maternas / tipagem", "VDRL NR, HIV NR, HBsAg NR, toxo IgG+; O+")}</div>
      <p class="hint" style="margin:8px 0 4px">Cuidador(a) – só entra na evolução o que for preenchido.</p>
      <div class="pw-row">${txt("c_humor", "Humor do cuidador", "eutímico / tristeza")}${txt("c_rede", "Rede de apoio", "presente / ausente")}${sel("c_fumo", "Fumaça de cigarro em casa", [["", "não informado"], ["nao", "não"], ["sim", "sim"]])}</div>
    </fieldset></div>
    <div data-vis="m6t"><fieldset class="pw-sec"><legend>Triagens neonatais</legend>
      <p class="hint" style="margin:0 0 6px">Entram na evolução só na primeira consulta e só as informadas; resultado alterado ou não realizado gera conduta em qualquer consulta antes dos 6 meses.</p>
      <div class="pw-row pw-ex">${TRI.map(([k, l]) => sel(k, l, TRIOPT)).join("")}</div>
    </fieldset></div>
    <fieldset class="pw-sec"><legend>2. Hoje</legend>
      <p class="hint" style="margin:0 0 6px">Antropometria e sinais vitais servem para a avaliação aqui (vão para o campo próprio do SIGSS, não para a evolução).</p>
      <div class="pw-row">
        ${num("peso", "Peso (g)", {step: 5})}${num("comp", "Comprimento/estatura (cm)", {step: "0.1"})}${num("pc", "PC (cm)", {step: "0.1"})}
        ${num("tax", "Temperatura (°C)", {step: "0.1"})}${num("fc", "FC (bpm)", {step: 1})}${num("fr", "FR (irpm)", {step: 1})}
        <div data-vis="font">${num("font", "Fontanela anterior (polpas)", {step: "0.5"})}</div>
        <div data-vis="m4">${sel("orto", "Ortolani/Barlow", [["", "não informado"], ["n", "negativos"], ["alt", "alterado"]])}</div>
        <div data-vis="m36">${txt("pa", "PA (a partir de 3 anos)", "100x60")}</div>
      </div>
      <p class="hint" style="margin:6px 0 0">Com sexo, peso e comprimento, o app calcula P/I, C/I, PC/I e IMC/I em escore-z (OMS; idade corrigida no prematuro) e classifica pelo SISVAN.</p>
      <div class="pw-row" style="margin-top:6px">${sel("cres", "Crescimento nas curvas", [["", "adequado"], ["alt", "desvio"]])}<div data-vis="cres_t">${txt("cres_t", "Qual desvio", "ex.: queda de canal de peso")}</div></div>
      <div data-vis="m12" class="pw-row" style="margin-top:6px">${txt("creche", "Creche/escola", "sim, período integral")}${txt("telas", "Telas (h/dia)", "1")}${txt("escova", "Escovação (vezes/dia)", "2")}<div data-vis="esf">${txt("esfin", "Controle esfincteriano", "fralda / em curso / completo")}</div></div>
      <details class="pw-det"><summary>Sinais de alerta referidos ou observados</summary><div class="pw-grid">${ALARM.map(([k, l]) => box(k, l)).join("")}</div></details>
    </fieldset>
    <fieldset class="pw-sec"><legend>3. Alimentação e suplementos</legend>
      <div class="pw-row">${sel("alim", "Alimentação", ALIM)}${txt("motfor", "Motivo (se não exclusivo)")}<div data-vis="ia">${sel("ia", "Introdução alimentar", [["", "a definir"], ["trad", "tradicional"], ["bliss", "participativa (BLISS)"], ["mista", "mista"]])}</div></div>
      <div class="pw-grid" style="margin-top:6px">${box("bico", "Usa mamadeira ou chupeta")}</div>
      <div class="pw-row" style="margin-top:6px">
        <div class="an-sg">${box("u_vitd", "Vitamina D")}${sel("d_vitd", "UI/dia", [["", "dose da idade"], ["400", "400"], ["600", "600"], ["800", "800"], ["1000", "1.000"]])}</div>
        <div class="an-sg">${box("u_fe", "Sulfato ferroso")}${txt("g_fe", "gotas/dia", "ex.: 10")}</div>
        <div class="an-sg">${box("u_poli", "Polivitamínico A+D")}${txt("d_poli", "mL/dia", "0,45")}</div>
        ${box("u_vita", "Vitamina A (megadose)")}
      </div>
    </fieldset>
    <fieldset class="pw-sec"><legend>4. Desenvolvimento</legend>
      <p class="hint" style="margin:0 0 6px">Marque só o que está <b>ausente</b>.</p>
      <div class="pw-grid" id="pu-marcos"></div>
      <div class="pw-grid" style="margin-top:6px">${box("m_ant", "Ausência de marco da faixa anterior")}${box("m_feno", "PC alterado ou 3+ alterações fenotípicas")}</div>
      <div data-vis="mchat" class="pw-row" style="margin-top:6px">${num("mchat", "M-CHAT-R (pontos)", {step: 1})}</div>
    </fieldset>
    <fieldset class="pw-sec"><legend>5. Vacinas</legend>
      <div class="pw-grid">${box("v_ok", "Caderneta de vacinação em dia (incluindo as desta idade)")}</div>
      <div class="pw-row" style="margin-top:6px">${txt("v_pend", "Pendências", "ex.: rotavírus 2")}</div>
    </fieldset>
    </div>
    <div class="actions" style="margin-top:6px"><button type="button" class="btn ghost sm" id="pu-reset">Limpar tudo</button></div>
    <div class="pw-jump" data-vis="ok"><button type="button" class="btn pri" id="pu-jump">Ver plano e evolução ↓</button></div>
  </div>
  <div class="pw-out" id="pu-out" aria-live="polite"></div>
</div>`;
  }

  // campos ocultos não contam (evita que um valor esquecido em seção escondida mude o plano)
  const rd = root => { const o = {}; root.querySelectorAll("[data-w]").forEach(el => { if (el.closest("[data-vis][hidden]")) return; o[el.dataset.w] = el.type === "checkbox" ? el.checked : el.value.trim(); }); return o; };
  function vacinasIdade(dn, ref){
    if (typeof VAC === "undefined") return {agora: [], prox: null};
    const agora = VAC.filter(([m]) => addMeses(dn, m) > ref - 45 * DIA && addMeses(dn, m) <= ref + 14 * DIA).map(([, r, v]) => `${r}: ${v}`);
    const prox = VAC.find(([m]) => addMeses(dn, m) > ref + 14 * DIA);
    return {agora, prox: prox ? `${prox[1]} (${fd(addMeses(dn, prox[0]))}): ${prox[2]}` : null, proxObj: prox ? {r: prox[1], data: fd(addMeses(dn, prox[0]))} : null};
  }
  const li = x => `<li>${esc(x.t)}${x.src ? ` <span class="pw-src">${esc(x.src)}</span>` : ""}${x.link ? ` <button type="button" class="golink pw-go" data-id="${esc(x.link)}">ver →</button>` : ""}</li>`;
  const bloco = (t, arr, cls) => arr.length ? `<div class="pw-b ${cls || ""}"><h4>${esc(t)}</h4><ul>${arr.map(x => li(typeof x === "string" ? it(x) : x)).join("")}</ul></div>` : "";
  const det = (t, arr) => arr.length ? `<details class="pw-b pw-dt"><summary><b>${esc(t)}</b></summary><ul>${arr.map(x => li(it(x))).join("")}</ul></details>` : "";
  const soapAll = ev => `CIAP-2: A98 | CID-10: Z00.1\n\nS: ${ev.S}\n\nO: ${ev.O}\n\nA: ${ev.A}\n\nP: ${ev.P}`;
  let EV = null;
  // receita: suplementos da idade + opções marcadas (doses pela bula, calculadas pelo peso de hoje)
  const OPC = [["o_parg", "Paracetamol gotas"], ["o_pars", "Paracetamol suspensão 32 mg/mL"], ["o_dipg", "Dipirona gotas"], ["o_dips", "Dipirona solução oral 50 mg/mL"], ["o_sime", "Simeticona gotas"], ["o_reut", "L. reuteri (Colidis)"]];
  const br = x => String(Math.round(x * 100) / 100).replace(".", ",");
  const dipTab = kg => kg < 5 ? null : kg <= 8.99 ? [2, 5, 1.25, 2.5] : kg <= 15.99 ? [3, 10, 2.5, 5] : kg <= 23.99 ? [5, 15, 3.75, 7.5] : kg <= 30.99 ? [8, 20, 5, 10] : [10, 30, 7.5, 15];
  function receita(k, R, mReal){
    const m = PU.mesesDe(k), kg = N(S.peso) / 1000, temKg = kg > 0;
    const L = ["USO ORAL"]; let n = 0; const av = [];
    if (R.fer && R.pb) L.push(`${++n}. Sulfato ferroso 125 mg/mL (25 mg/mL de ferro elementar) gotas ______ 1 frasco de 30 mL`, `   Dar ___ gotas (___ mg/kg/dia${temKg ? "; " + br(kg) + " kg" : ""}) 1 vez ao dia${m < 12 ? " até 12 meses; depois 1 mg/kg/dia até 24 meses" : " até 24 meses"}. Conferir as gotas por mL do frasco.`);
    else if (R.fer) L.push(`${++n}. Sulfato ferroso 125 mg/mL (25 mg/mL de ferro elementar) gotas ______ 1 frasco de 30 mL`, "   Dar 10 gotas 1 vez ao dia, por 3 meses (não precisa suspender o peito). Limpar os dentes depois.");
    if (m < 24) L.push(`${++n}. Vitamina D (colecalciferol) 200 UI/gota ______ 1 frasco`, `   Dar ${R.vitd === 400 ? "2 gotas (400 UI)" : "3 gotas (600 UI)"} 1 vez ao dia.`, "   Pode ser de qualquer marca, desde que a apresentação seja de 200 UI por gota (conferir no rótulo ou com o farmacêutico).");
    const sn = mReal < 3 ? "se dor" : "se febre ou dor";
    if (S.o_parg){ const g = temKg ? Math.min(Math.round(kg), 35) : null; L.push(`${++n}. Paracetamol 200 mg/mL gotas ______ 1 frasco`, `   Dar ${g ? g : "___"} gotas até de 6/6 horas, ${sn}. Não dar mais de 5 vezes ao dia.`); }
    if (S.o_pars){ let ml = null; if (temKg){ ml = kg >= 32 ? 15 : kg >= 27 ? 12.5 : kg >= 22 ? 10 : kg >= 16 ? 7.5 : kg >= 11 ? 5 : Math.round(kg * 12.5 / 32 * 4) / 4; } L.push(`${++n}. Paracetamol 32 mg/mL suspensão oral ______ 1 frasco`, `   Dar ${ml ? br(ml) : "___"} mL até de 6/6 horas, ${sn}. Não dar mais de 5 vezes ao dia.`); }
    if (mReal < 3 && (S.o_parg || S.o_pars)){ L.push("   Febre (37,8 °C ou mais) em bebê menor de 3 meses: procurar atendimento no mesmo dia, antes de dar o remédio."); av.push("Febre em < 3 meses exige avaliação médica no mesmo dia: a receita traz o paracetamol só para dor e a orientação de procurar atendimento se febre."); }
    if (S.o_dipg || S.o_dips){ const t = temKg ? dipTab(kg) : null;
      if (mReal < 3 || (temKg && kg < 5)) av.push("Dipirona contraindicada em < 3 meses ou < 5 kg (bula): não incluída.");
      else { if (S.o_dipg) L.push(`${++n}. Dipirona 500 mg/mL gotas ______ 1 frasco`, `   Dar ${t ? t[1] : "___"} gotas até de 6/6 horas, se febre ou dor.`); if (S.o_dips) L.push(`${++n}. Dipirona 50 mg/mL solução oral ______ 1 frasco`, `   Dar ${t ? br(t[3]) : "___"} mL até de 6/6 horas, se febre ou dor.`); if (t) av.push(`Dipirona pela bula para ${br(kg)} kg: ${t[0]}–${t[1]} gotas (500 mg/mL) ou ${br(t[2])}–${br(t[3])} mL (50 mg/mL) por dose; a receita usa o limite superior – ajuste se quiser.`); } }
    if (S.o_sime) L.push(`${++n}. Simeticona 75 mg/mL gotas ______ 1 frasco`, "   Dar 3 a 5 gotas, 3 vezes ao dia, se desconforto por gases.");
    if (S.o_reut) L.push(`${++n}. Lactobacillus reuteri DSM 17938 gotas (ex.: Colidis) ______ 1 frasco`, "   Dar 5 gotas 1 vez ao dia por 21 dias, misturadas em leite materno ordenhado ou líquido frio (nunca quente).");
    if (m < 12) L.push("", "Opção da REMUME para a vitamina D (sem custo):", `${n + 1}. Polivitamínico gotas (por mL: vitamina A 3.000 UI, complexo B, vitamina C 80 mg, vitamina D2 900 UI, vitamina E 15 mg) ______ 1 frasco`, "   Dar 0,45 mL 1 vez ao dia (≈ 400 UI de vitamina D2). [dose: conferir na bula]");
    if (!temKg && (S.o_parg || S.o_pars || S.o_dipg || S.o_dips)) av.push("Informe o peso de hoje para calcular as doses.");
    return {txt: n ? L.join("\n") : "Sem prescrição de rotina para esta idade.", av};
  }
  function render(root){
    S = rd(root);
    const dn = pd(S.dn); const ref = hoje(); const okDn = dn != null && ref >= dn && ref - dn < 6 * 366 * DIA;
    const velho = dn != null && ref - dn >= 6 * 366 * DIA;
    const dias = okDn ? Math.round((ref - dn) / DIA) : NaN;
    const Q = okDn ? PU.qual(dn, ref) : null; const k = Q ? Q.x.k : null;
    const m = okDn ? dias / 30.4375 : NaN;
    const prim = k === "rn" || !!S.prim;
    const mk0 = okDn ? PU.mesesDe(k) : NaN;
    const vis = {ok: okDn, nrn: okDn && k !== "rn", prim: okDn && prim, m6t: okDn && mk0 < 6, acompt: S.acomp === "outro", font: mk0 < 24, m4: mk0 < 4, m36: mk0 >= 36, mchat: k === 18 || k === 24, ia: k === 6, m12: mk0 >= 12, esf: mk0 >= 18 && mk0 < 48, cres_t: S.cres === "alt"};
    root.querySelectorAll("[data-vis]").forEach(el => { el.hidden = !vis[el.dataset.vis]; });
    S = rd(root);
    const id = root.querySelector("#pu-idade"), O = root.querySelector("#pu-out");
    if (!okDn){ id.textContent = ""; O.innerHTML = velho ? `<div class="pw-empty"><b>Criança com 6 anos ou mais</b>: a puericultura guiada vai até 5 anos. <button type="button" class="golink pw-go" data-id="pu-checkup">abrir o Check-up da criança e do adolescente →</button></div>` : `<div class="pw-empty"><b>Informe a data de nascimento</b> para montar a consulta.</div>`; EV = null; return; }
    const mkBox = root.querySelector("#pu-marcos");
    if (mkBox.dataset.k !== String(k)){ const mk = PU.marcos(k); mkBox.dataset.k = String(k); mkBox.innerHTML = mk.length ? mk.map((x, i) => box("mk_" + i, x)).join("") : `<p class="hint" style="margin:0">${k === "rn" ? "No RN, avalie reflexos primitivos e tônus no exame." : "Use os marcos desta idade na Caderneta da Criança."}</p>`; root.querySelectorAll('[data-w^="mk_"]').forEach(el => { el.checked = !!S[el.dataset.w]; }); S = rd(root); }
    const X = Q.x, idTxt = PU.idade(dn, ref);
    id.innerHTML = `<b>${esc(idTxt)}</b> · consulta de ${esc(X.nome)}${Q.dentro ? "" : " (a mais próxima)"}`;
    const V = vacinasIdade(dn, ref);
    const mR0 = okDn ? PU.mesesCal(dn, ref) : 0; const OPCv = OPC.filter(([kk]) => !((kk === "o_sime" || kk === "o_reut") && mR0 >= 5)); OPC.forEach(([kk]) => { S[kk] = !!OPT[kk] && OPCv.some(o => o[0] === kk); });
    const ctx = {m, mc: PU.mesesCal(dn, ref), fora: !Q.dentro, dias, idade: idTxt, ref, dn, vac: {agora: V.agora, prox: V.proxObj}};
    EV = PU.evo(k, S, ctx); const R = EV.R; const I = PU.info(k); const REC = receita(k, R, PU.mesesCal(dn, ref));
    const nx = PU.PROX[k];
    const fora = Q.dentro ? "" : `<div class="pw-b warn" style="border-color:var(--warn);background:var(--warn-soft)"><h4>Não há consulta de puericultura prevista para ${esc(idTxt)}</h4><p style="margin:0;font-size:.88rem">Calendário da Caderneta: 1ª semana, 1, 2, 4, 6, 9, 12, 18 e 24 meses e, depois, anual (o app também tem modelos extras de 15 e 30 meses). A consulta pronta mais próxima é a de <b>${esc(X.nome)}</b>, usada abaixo. <button type="button" class="golink pw-go" data-id="${esc(X.id)}">abrir a consulta de ${esc(X.nome)} →</button></p></div>`;
    const extra = X.extra ? `<div class="pw-b"><p style="margin:0;font-size:.88rem">Consulta extra (não consta no calendário da Caderneta). O retorno segue a Caderneta: ${esc(PU.X[nx].nome)}.</p></div>` : "";
    const med = [["peso", "Peso", "g"], ["comp", "Comprimento/estatura", "cm"], ["pc", "PC", "cm"], ["tax", "Tax", "°C"], ["fc", "FC", "bpm"], ["fr", "FR", "irpm"], ["pa", "PA", "mmHg"]].filter(([kk]) => S[kk]).map(([kk, l, u]) => `${l} ${S[kk]} ${u}`);
    const av = (med.length ? [it("Para o SIGSS: " + med.join(" · "))] : []).concat(R.out.achados.length ? [it(R.out.achados.join("; ") + ".")] : []);
    O.innerHTML = `<div class="pw-head"><span>Consulta de <b>${esc(X.nome)}</b> · ${esc(idTxt)}</span><span>Retorno: <b>${nx != null ? esc(PU.X[nx].nome) : "anual"}</b></span></div>
      ${fora}${extra}
      ${R.out.urg.length ? `<div class="pw-b urg"><h4>Agora</h4><ul>${R.out.urg.map(li).join("")}</ul></div>` : ""}
      ${bloco("Avaliação da criança (não vai para a evolução)", av)}
      ${bloco("Fazer nesta consulta", I.fazer.map(t => it(t)).concat(R.out.fazer))}
      ${bloco("Vacinas para conferir (PNI 2026)", (V.agora.length ? V.agora.map(x => it(x, "PNI")) : [it(I.vac, "PNI")]).concat(V.prox ? [it("Próximas: " + V.prox)] : []))}
      ${bloco("Suplementação", R.out.rx.concat(I.sup.slice(1).map(t => it(t))))}
      ${det("Alimentação", I.alim)}${I.ia.map(g => det(g.g, g.i)).join("")}
      ${det("Estímulos recomendados", I.est)}${det(I.sono.length ? "Sono seguro" + (m < 6 ? " e tempo de barriguinha" : "") : "", I.sono)}${det("Prevenção de acidentes", I.acid)}
      <div class="pw-b"><h4>Evolução (SOAP)</h4>
        ${[["S", "Subjetivo"], ["O", "Objetivo"], ["A", "Avaliação"], ["P", "Plano"]].map(([kk, l]) => `<div style="margin-bottom:8px"><div class="sec-h" style="display:flex;justify-content:space-between;align-items:center"><b>${kk} – ${l}</b><button type="button" class="btn sm ghost" data-pucp="${kk}">Copiar</button></div><textarea class="fill mono pw-ta" id="pu-${kk}" aria-label="${l}">${esc(EV[kk])}</textarea></div>`).join("")}
        <div class="actions" style="margin-top:8px"><button type="button" class="btn pri sm" id="pu-cp">Copiar evolução</button></div>
        <p class="hint" style="margin:6px 0 0">Mesmo modelo da consulta de ${esc(X.nome)} em "Consultas por idade". O exame vem como padrão normal: corrija o que estiver diferente antes de copiar.</p></div>
      <div class="pw-b"><h4>Receita</h4><p class="hint" style="margin:0 0 6px">Incluir também:</p><div class="pw-grid" id="pu-opc">${OPCv.map(([kk, l]) => `<label class="pw-ck"><input type="checkbox" data-opc="${kk}" ${S[kk] ? "checked" : ""}><span>${esc(l)}</span></label>`).join("")}</div>${REC.av.length ? `<ul style="margin:6px 0;font-size:.85rem">${REC.av.map(a => `<li>${esc(a)}</li>`).join("")}</ul>` : ""}<textarea class="fill mono pw-ta" id="pu-rec" aria-label="Receita gerada">${esc(REC.txt)}</textarea>
      <div class="actions" style="margin-top:8px"><button type="button" class="btn sm" id="pu-cprec">Copiar receita</button></div></div>
      <p class="hint">Fontes: Caderneta da Criança 2025 (consultas e marcos), Calendário Nacional de Vacinação 2026, PNSF 2022 e SBP 2026 (ferro), SBP 2024 (vitamina D), SBP 2023 (sono seguro), Guia Alimentar &lt; 2 anos (introdução alimentar), Memorando DAPS 1098/2026 (triagem tardia).</p>`;
    O.querySelectorAll(".pw-ta").forEach(grow);
  }
  function init(root){
    const box2 = root.querySelector("#puw"); if (!box2) return;
    box2.querySelectorAll("[data-w]").forEach(el => { const val = S[el.dataset.w]; if (val === undefined) return; if (el.type === "checkbox") el.checked = !!val; else el.value = val; });
    box2.addEventListener("input", ev => { if (ev.target.dataset && ev.target.dataset.opc) return; if (!ev.target.classList.contains("pw-ta")) render(box2); });
    box2.addEventListener("change", ev => { if (ev.target.dataset && ev.target.dataset.opc){ OPT[ev.target.dataset.opc] = ev.target.checked; render(box2); return; } if (!ev.target.classList.contains("pw-ta")) render(box2); });
    box2.addEventListener("click", ev => { const t = ev.target.closest("button"); if (!t) return;
      const val = kk => (box2.querySelector("#pu-" + kk) || {}).value || "";
      if (t.dataset.pucp) copy(val(t.dataset.pucp), t.dataset.pucp);
      if (t.id === "pu-cp") copy(soapAll({S: val("S"), O: val("O"), A: val("A"), P: val("P")}), "Evolução");
      if (t.id === "pu-cprec") copy(box2.querySelector("#pu-rec").value, "Receita");
      if (t.id === "pu-jump"){ const o = box2.querySelector("#pu-out"); if (o && o.scrollIntoView) o.scrollIntoView({behavior: "smooth", block: "start"}); }
      if (t.id === "pu-reset"){ S = {}; Object.keys(OPT).forEach(kk => delete OPT[kk]); box2.querySelectorAll("[data-w]").forEach(el => { if (el.type === "checkbox") el.checked = false; else el.value = el.tagName === "SELECT" ? el.options[0].value : ""; }); box2.querySelector("#pu-marcos").dataset.k = ""; render(box2); } });
    render(box2);
  }
  return {html, init};
})();
