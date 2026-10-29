// ── Consulta de pré-natal guiada pela IG ─────────────────────────────────────
// Entradas (IG, achados de hoje, condições, exames, vacinas) → plano da consulta e evolução SOAP.
// Nada é salvo: os dados ficam só nesta tela e somem ao recarregar.
const PNW = (() => {
  let S = {};
  const COND = [
    ["Doenças prévias (alto risco: PNAR)", [
      ["has", "Hipertensão crônica ou uso de anti-hipertensivo", {ar: 1, peA: 1, link: "pn-has"}],
      ["dm", "Diabetes tipo 1 ou 2 prévio", {ar: 1, peA: 1}],
      ["renal", "Doença renal", {ar: 1, peA: 1}],
      ["autoimune", "Lúpus, SAF ou outra doença autoimune", {ar: 1, peA: 1}],
      ["cardio", "Cardiopatia", {ar: 1}],
      ["tireo", "Hipotireoidismo em tratamento ou hipertireoidismo", {ar: 1, link: "pn-tireoide"}],
      ["hemato", "Doença falciforme, PTI, talassemia ou coagulopatia", {ar: 1}],
      ["neuro", "Epilepsia, AVC ou outra doença neurológica", {ar: 1}],
      ["tev", "Trombose venosa ou embolia prévia", {ar: 1}],
      ["pulm", "Asma em uso contínuo, DPOC ou fibrose cística", {ar: 1}],
      ["psiq", "Transtorno mental grave", {ar: 1}],
      ["drogas", "Dependência ou uso abusivo de álcool ou drogas", {ar: 1}],
      ["hiv", "HIV", {ar: 1, sepadi: 1}],
      ["hep", "Hepatite B ou C", {ar: 1, sepadi: 1}],
      ["bari", "Cirurgia bariátrica prévia", {ar: 1}]]],
    ["História obstétrica", [
      ["pe_prev", "Pré-eclâmpsia em gestação anterior", {peA: 1}],
      ["pe_grave", "Pré-eclâmpsia grave, HELLP ou eclâmpsia prévia", {ar: 1, peA: 1}],
      ["prematuro", "Parto prematuro prévio", {ar: 1}],
      ["perinatal", "Morte perinatal prévia", {ar: 1}],
      ["abortos", "3 ou mais abortos seguidos", {ar: 1}],
      ["corporal", "Cesárea corporal/longitudinal ou acretismo prévio", {ar: 1}],
      ["iso", "Isoimunização Rh em gestação anterior", {ar: 1}],
      ["advers", "Descolamento de placenta, RN pequeno a termo ou parto prematuro prévio", {peM: 1}],
      ["nulip", "Nulípara (primeira gestação)", {peM: 1, int: 1}],
      ["interv10", "Mais de 10 anos desde o último parto", {peM: 1}],
      ["ces2", "Duas ou mais cesáreas prévias", {int: 1}],
      ["dmgprev", "DMG em gestação anterior", {int: 1}]]],
    ["Nesta gestação", [
      ["gemelar", "Gestação múltipla", {ar: 1, peA: 1}],
      ["ra", "Reprodução assistida", {peA: 1}],
      ["hfpe", "Mãe ou irmã com pré-eclâmpsia", {peM: 1}],
      ["dmg", "DMG já diagnosticado", {ar: 1, link: "pn-dmg"}],
      ["hgest", "Hipertensão gestacional ou pré-eclâmpsia já diagnosticada", {ar: 1, link: "pn-has"}],
      ["iturep", "3 ou mais ITU, ou 2 ou mais pielonefrites", {ar: 1}],
      ["cresc", "Alteração do crescimento fetal ou do líquido amniótico", {ar: 1}],
      ["placenta", "Placenta prévia ou acretismo", {ar: 1}],
      ["estupro", "Gestação decorrente de violência sexual", {ar: 1, link: "violencia"}],
      ["cesped", "Deseja cesárea a pedido", {}],
      ["dtn", "Alto risco de defeito do tubo neural (ácido fólico 5 mg)", {link: "pn-1consulta"}]]],
    ["Contexto (risco intermediário)", [
      ["negra", "Mulher preta ou parda", {peM: 1, int: 1}],
      ["vulner", "Vulnerabilidade social, violência ou pouco apoio", {peM: 1, int: 1}],
      ["fumo", "Tabagismo", {int: 1}],
      ["ansdep", "Depressão ou ansiedade leve", {int: 1}],
      ["terato", "Uso de medicamento teratogênico", {int: 1}],
      ["naoaceita", "Não aceitação da gestação", {int: 1}]]]
  ];
  const CONDF = Object.fromEntries(COND.flatMap(([, l]) => l.map(([k, t, f]) => [k, {t, ...f}])));
  const RES = [["", "não informado"], ["nr", "não reagente"], ["r", "reagente"]];
  // EAS/urocultura não dão diagnóstico de pielonefrite (diagnóstico clínico: ver sintomas urinários com febre ou dor lombar).
  const URI = [["", "não informado"], ["ok", "normais"], ["itu", "urocultura positiva (bacteriúria)"], ["prot", "proteinúria"]];
  const COOMBS = [["", "não informado"], ["n", "negativo"], ["p", "positivo"]];
  const TOXOR = [["", "não informado"], ["susc", "IgG− IgM− (segue suscetível)"], ["igm", "IgM reagente ou soroconversão de IgG"]];
  const EX1TR = [["sif1", "Sífilis (TR)", RES], ["hiv1", "HIV (TR)", RES], ["hbv1", "Hepatite B (TR)", RES], ["hcv1", "Hepatite C (TR)", RES]];
  const EX1 = [
    ["abo", "Tipo sanguíneo (ABO)", [["", "não informado"], ["A", "A"], ["B", "B"], ["AB", "AB"], ["O", "O"]]],
    ["rh", "Fator Rh", [["", "não informado"], ["pos", "Rh positivo"], ["neg", "Rh negativo"]]],
    ["coombs", "Coombs indireto", COOMBS, "rhneg"],
    ["hb1", "Hemoglobina (g/dL)", "num"], ["ht1", "Hematócrito (%)", "num"], ["gl1", "Leucócitos (/mm³)", "num"], ["plq1", "Plaquetas (/mm³)", "num"],
    ["eletro", "Eletroforese de Hb", [["", "não informado"], ["aa", "AA (normal)"], ["as", "AS (traço falciforme)"], ["df", "SS, SC, Sβ ou SD (doença falciforme)"]]],
    ["gj", "Glicemia de jejum (mg/dL)", "num"],
    ["htlv", "HTLV", RES],
    ["toxo", "Toxoplasmose", [["", "não informado"], ["imune", "IgG+ IgM− (imune)"], ["susc", "IgG− IgM− (suscetível)"], ["igm", "IgM reagente"]]],
    ["urina1", "EAS e urocultura", URI],
    ["usg", "USG obstétrica", [["", "não informada"], ["ok", "feita, sem alteração"], ["alt", "alterada"]]],
    ["cito", "Citopatológico", [["", "não informado"], ["dia", "em dia"], ["atraso", "em atraso"]], "cito"]];
  const EX2TR = [["sif2", "Sífilis (TR) – 2º tri", RES], ["hiv2", "HIV (TR) – 2º tri", RES], ["hep2", "Hepatites B e C (TR) – 2º tri", RES]];
  const EX2 = [["toxo2", "Toxoplasmose – 2º tri", TOXOR, "toxosusc"], ["coombs2", "Coombs indireto – 2º tri", COOMBS, "rhneg"]];
  const EX3TR = [["sif3", "Sífilis (TR) – 3º tri", RES], ["hiv3", "HIV (TR) – 3º tri", RES], ["hep3", "Hepatites B e C (TR) – 3º tri", RES]];
  const EX3 = [["hb3", "Hemoglobina 3º tri (g/dL)", "num"], ["ht3", "Hematócrito 3º tri (%)", "num"], ["gl3", "Leucócitos 3º tri (/mm³)", "num"], ["plq3", "Plaquetas 3º tri (/mm³)", "num"], ["gj3", "Glicemia de jejum 3º tri", "num"], ["toxo3", "Toxoplasmose – 3º tri", TOXOR, "toxosusc"], ["coombs3", "Coombs indireto – 3º tri", COOMBS, "rhneg"], ["urina3", "EAS e urocultura – 3º tri", URI]];
  const VAC = [["v_hepb", "Hepatite B: 3 doses"], ["v_dtpa", "dTpa nesta gestação"], ["v_flu", "Influenza nesta temporada"], ["v_covid", "COVID-19 nesta gestação"], ["v_vsr", "VSR nesta gestação"]];
  const ALARM = [["a_sang", "Sangramento vaginal"], ["a_liq", "Perda de líquido"], ["a_pe", "Cefaleia intensa, escotomas ou dor epigástrica"], ["a_tp", "Contrações regulares antes de 37 semanas"], ["a_febre", "Febre ≥ 37,8 °C sem quadro de vias aéreas"], ["a_mf", "Movimentos fetais diminuídos"], ["a_vom", "Vômitos persistentes ou desidratação"], ["a_prur", "Prurido intenso ou icterícia"], ["a_dorab", "Dor abdominal intensa"], ["a_tvp", "Dor ou edema em uma perna"], ["a_disp", "Falta de ar ou dor no peito"]];
  const QUEIX = [["q_uri", "Sintomas urinários (disúria, polaciúria)"]];
  const URIQ = [["qu_dis", "disúria"], ["qu_pol", "polaciúria"], ["qu_urg", "urgência miccional"], ["qu_sup", "dor suprapúbica"], ["qu_hem", "hematúria"], ["qu_feb", "febre ou calafrios"], ["qu_lomb", "dor lombar (Giordano positivo)"], ["qu_nv", "náuseas ou vômitos"]];
  // dose em uso: aparece ao marcar o medicamento e vai para a evolução
  const USO = [["u_fol", "Ácido fólico", [["0,4 mg/dia", "0,4 mg/dia"], ["5 mg/dia", "5 mg/dia"]]],
    ["u_fe", "Sulfato ferroso", [["40 mg/dia", "40 mg/dia (1 cp)"], ["80 mg/dia", "80 mg/dia (2 cp)"], ["120 mg/dia", "120 mg/dia (3 cp)"]]],
    ["u_aas", "AAS", [["100 mg à noite", "100 mg à noite"], ["150 mg à noite", "150 mg à noite"]]],
    ["u_ca", "Carbonato de cálcio", [["500 mg/dia de cálcio elementar", "500 mg/dia de cálcio elementar (1 cp)"], ["1.000 mg/dia de cálcio elementar", "1.000 mg/dia (2 cp)"], ["1.500 mg/dia de cálcio elementar", "1.500 mg/dia (3 cp)"]]]];
  const doseK = k => "d" + k.slice(1);

  const sel = (k, l, opts) => `<label class="f">${esc(l)}<select data-w="${k}">${opts.map(([v, t]) => `<option value="${v}">${esc(t)}</option>`).join("")}</select></label>`;
  const num = (k, l, o = {}) => `<label class="f">${esc(l)}<input data-w="${k}" type="number" inputmode="decimal" step="${o.step || "any"}" ${o.min != null ? `min="${o.min}"` : ""} ${o.max != null ? `max="${o.max}"` : ""} placeholder="${esc(o.ph || "")}"></label>`;
  const box = (k, l) => `<label class="pw-ck"><input type="checkbox" data-w="${k}"><span>${esc(l)}</span></label>`;
  const txt = (k, l, ph = "") => `<label class="f">${esc(l)}<input data-w="${k}" type="text" placeholder="${esc(ph)}"></label>`;
  const dt = (k, l) => `<label class="f">${esc(l)}<input data-w="${k}" type="date"></label>`;
  const exField = ([k, l, o, vis]) => `<div ${vis ? `data-vis="${vis}"` : ""}>${o === "num" ? num(k, l, {step: "0.1"}) : sel(k, l, o)}</div>`;

  function html(){
    return `<div class="pnw" id="pnw">
  <div class="pw-form">
    <p class="hint" style="margin:0 0 10px">Comece pela IG. Os campos seguintes aparecem conforme a idade gestacional; o plano e a evolução se montam ao lado. <b>Nada é salvo</b>: os dados somem ao recarregar.</p>
    <fieldset class="pw-sec"><legend>1. Gestação</legend>
      <div class="pw-row">
        <label class="f">Consulta<select data-w="tipo"><option value="seg">Seguimento</option><option value="1">1ª consulta de pré-natal</option></select></label>
        ${num("igs", "IG: semanas", {min: 4, max: 42, step: 1, ph: "ex.: 22"})}
        ${num("igd", "+ dias", {min: 0, max: 6, step: 1, ph: "0"})}
        <label class="f">ou DUM<input data-w="dum" type="date"></label>
        ${num("idade", "Idade (anos)", {min: 10, max: 55, step: 1})}
        ${num("ncons", "Nº da consulta", {min: 1, max: 20, step: 1})}
        ${txt("bebe", "Nome do bebê (opcional)")}
        ${txt("gpa", "GPA", "ex.: G2P1A0")}
      </div>
      <p class="pw-ig" id="pw-ig"></p>
    </fieldset>
    <div data-vis="ig">
    <fieldset class="pw-sec"><legend>2. Hoje</legend>
      <div class="pw-row">
        ${num("pas", "PA sistólica", {min: 60, max: 260, step: 1})}${num("pad", "PA diastólica", {min: 30, max: 160, step: 1})}
        ${num("peso", "Peso (kg)", {min: 30, max: 250, step: "0.1"})}
        <div data-vis="prim">${num("alt", "Altura (cm)", {min: 120, max: 210, step: 1})}</div>
        <div data-vis="ig18">${num("au", "AU (cm)", {min: 10, max: 50, step: 1})}</div>
        <div data-vis="ig12">${num("bcf", "BCF (bpm)", {min: 60, max: 220, step: 1})}</div>
        <div data-vis="ig12">${sel("bcfna", "BCF", [["", "—"], ["na", "não audível"]])}</div>
        <div data-vis="ig20">${sel("mf", "MF", [["", "presente"], ["dim", "diminuída"], ["aus", "ausente"]])}</div>
      </div>
      <div class="pw-grid" style="margin-top:6px">${QUEIX.map(([k, l]) => box(k, l)).join("")}</div>
      <div data-vis="q_uri"><div class="pw-grid">${URIQ.map(([k, l]) => box(k, l)).join("")}</div><div class="pw-row">${txt("qu_dias", "Há quantos dias", "ex.: 3")}</div></div>
      <details class="pw-det"><summary>Sinais de alerta referidos (marque se houver)</summary><div class="pw-grid">${ALARM.map(([k, l]) => box(k, l)).join("")}</div></details>
      <details class="pw-det"><summary>Em uso e alergias</summary><div class="pw-grid">${USO.map(([k, l]) => box(k, l)).join("")}</div><div class="pw-row">${USO.map(([k, l, d]) => `<div data-vis="${k}">${sel(doseK(k), "Dose – " + l.toLowerCase(), d)}</div>`).join("")}</div><div class="pw-row" style="margin-top:6px">${txt("usoout", "Outros medicamentos")}${txt("alerg", "Alergias", "nega")}</div></details>
    </fieldset>
    <fieldset class="pw-sec"><legend>3. Condições e história</legend>
      ${COND.map(([g, l]) => `<details class="pw-det"${g === "Nesta gestação" ? " open" : ""}><summary>${esc(g)}</summary><div class="pw-grid">${l.map(([k, t]) => box(k, t)).join("")}</div></details>`).join("")}
      <div class="pw-row" style="margin-top:6px">${txt("hppout", "Outras comorbidades (HPP)")}${txt("usocont", "Medicamentos de uso contínuo prévios", "ex.: levotiroxina 50 mcg/dia")}</div>
      <div class="pw-row" data-vis="gant" style="margin-top:6px">${txt("intercor", "Intercorrências em gestações anteriores")}${txt("nvivos", "Nascidos vivos")}${txt("amam", "Amamentação prévia", "sim / não / duração / causa")}</div>
    </fieldset>
    <fieldset class="pw-sec"><legend>4. Exames</legend>
      <p class="hint" style="margin:0 0 6px">Deixe "não informado" no que ainda não tem resultado: vira pedido no plano.</p>
      <h4 class="pw-h">Entrada / 1º trimestre</h4>
      <div class="pw-row pw-ex">${dt("d1tr", "Data dos testes rápidos")}${EX1TR.map(exField).join("")}</div>
      <div class="pw-row pw-ex" style="margin-top:6px">${dt("d1", "Data dos exames laboratoriais")}${EX1.map(exField).join("")}</div>
      <div data-vis="ig20"><h4 class="pw-h">TOTG 75 g (24–28 semanas)</h4><div class="pw-row pw-ex">${num("tj", "Jejum", {step: 1})}${num("t1", "1 hora", {step: 1})}${num("t2", "2 horas", {step: 1})}</div></div>
      <div data-vis="ig14"><h4 class="pw-h">2º trimestre (Betim)</h4><div class="pw-row pw-ex">${dt("d2tr", "Data dos testes rápidos")}${EX2TR.map(exField).join("")}</div>
        <div class="pw-row pw-ex" style="margin-top:6px">${dt("d2", "Data dos exames laboratoriais")}${EX2.map(exField).join("")}</div></div>
      <div data-vis="ig28"><h4 class="pw-h">3º trimestre</h4><div class="pw-row pw-ex">${dt("d3tr", "Data dos testes rápidos")}${EX3TR.map(exField).join("")}</div>
        <div class="pw-row pw-ex" style="margin-top:6px">${dt("d3", "Data dos exames laboratoriais")}${EX3.map(exField).join("")}</div></div>
      <h4 class="pw-h">Modelos de USG para a evolução <span class="hint" style="font-weight:400">(marque quantos quiser)</span></h4><div class="pw-grid">${USGOPT.map(([k, l]) => box("usg_" + k, l)).join("")}</div><div class="pw-row" style="margin-top:6px">${txt("usgout", "Outro laudo de USG (colar ou digitar)", "ex.: USG 3º tri (10/10/26): IG 33s, PFE 2.100 g (p40)…")}</div>
    </fieldset>
    <fieldset class="pw-sec"><legend>5. Vacinas já feitas</legend><div class="pw-grid">${VAC.map(([k, l]) => box(k, l)).join("")}</div></fieldset>
    </div>
    <div class="actions" style="margin-top:6px"><button type="button" class="btn ghost sm" id="pw-reset">Limpar tudo</button></div>
    <div class="pw-jump" data-vis="ig"><button type="button" class="btn pri" id="pw-jump">Ver plano e evolução ↓</button></div>
  </div>
  <div class="pw-out" id="pw-out" aria-live="polite"></div>
</div>`;
  }

  // ── leitura e utilidades
  const rd = root => { const o = {}; root.querySelectorAll("[data-w]").forEach(el => { const k = el.dataset.w; o[k] = el.type === "checkbox" ? el.checked : el.value.trim(); }); return o; };
  const N = v => { const s = String(v ?? "").replace(",", "."); return s === "" ? NaN : parseFloat(s); };
  const ok = x => typeof x === "number" && isFinite(x);
  const hojeUTC = () => pd(isoHoje());
  const igDias = () => { const s = N(S.igs), d = N(S.igd); return ok(s) ? s * 7 + (ok(d) ? d : 0) : NaN; };
  const dataEm = (sem, ig) => fd(hojeUTC() + (sem * 7 - ig) * DIA);
  const it = (t, src, link) => ({t, src, link});
  // GPA: G conta a gestação atual (G1 = primigesta). gAnt() = nº de gestações anteriores, ou NaN se não informado.
  const gAnt = () => { const m = String(S.gpa || "").match(/G\s*(\d+)/i); if (m) return parseInt(m[1], 10) - 1; const pa = String(S.gpa || "").match(/[PA]\s*([1-9])/i); return pa ? 1 : NaN; };

  function plano(){
    const ig = igDias(); const w = ig / 7; const out = {urg: [], ref: [], pedir: [], rx: [], vac: [], fazer: [], orient: [], lemb: [], probs: [], achados: [], fatores: []};
    const C = k => !!S[k];
    const prim = S.tipo === "1";
    const idade = N(S.idade), pas = N(S.pas), pad = N(S.pad), peso = N(S.peso), alt = N(S.alt), au = N(S.au), bcf = N(S.bcf);
    let imc = NaN; if (ok(peso) && ok(alt) && alt > 100) imc = peso / Math.pow(alt / 100, 2);
    // risco
    const flags = Object.keys(CONDF).filter(C);
    let alto = flags.some(k => CONDF[k].ar), inter = flags.some(k => CONDF[k].int);
    if (ok(imc) && imc >= 40) alto = true;
    if (ok(idade) && (idade < 15 || idade >= 35)) inter = true;
    if (ok(imc) && (imc < 18.5 || (imc >= 30 && imc < 40))) inter = true;
    if (ok(alt) && alt < 145) inter = true;
    flags.forEach(k => { const f = CONDF[k]; if (f.ar) out.probs.push(it(f.t, "", f.link)); else if (f.int || f.peM || f.peA) out.fatores.push(f.t); });
    if (ok(idade) && idade >= 35) out.fatores.push("idade materna ≥ 35 anos"); if (ok(idade) && idade < 15) out.fatores.push("idade < 15 anos");
    // sinais de alerta referidos
    ALARM.forEach(([k, l]) => { if (C(k)) out.urg.push(it(`${l}: avaliar agora e encaminhar ao CMI`, "Betim")); });
    if (w >= 20 && (S.mf === "dim" || S.mf === "aus") && !C("a_mf")) out.urg.push(it(`Movimentação fetal ${S.mf === "aus" ? "ausente" : "diminuída"}: avaliar vitalidade no CMI hoje`, "Betim"));
    if (C("q_uri")){
      if (C("qu_feb") || C("qu_lomb")) out.urg.push(it("Sintomas urinários com febre ou dor lombar: suspeita de pielonefrite – emergência obstétrica (CMI)", "Betim", "pielonefrite"));
      else out.fazer.push(it("Sintomas urinários: EAS e urocultura; tratar cistite conforme o protocolo (ver item)", "Betim", "itu-gestante"));
    }
    if (w >= 41) out.urg.push(it("41 semanas ou mais: encaminhar ao CMI hoje", "Betim"));
    // PA
    if (ok(pas) || ok(pad)){
      out.achados.push(`PA ${ok(pas) ? pas : "___"}/${ok(pad) ? pad : "___"} mmHg`);
      const grave = (pas >= 160) || (pad >= 110), alta = (pas >= 140) || (pad >= 90);
      if (grave){ out.urg.push(it("PA ≥ 160/110: hipertensão grave – CMI agora (SAMU se sintomas)", "Betim")); out.probs.push(it("Hipertensão grave na gestação", "", "pa-gestante")); }
      else if (alta && w >= 20 && !C("has")){ out.fazer.push(it("PA ≥ 140/90 após 20 semanas: fita urinária agora; proteinúria ou sintomas → CMI; sem eles → repetir PA em 4 h (até 7 dias), exames de pré-eclâmpsia (Hb/plaquetas, TGO/TGP, creatinina, relação proteína/creatinina) e curva domiciliar", "Betim")); out.ref.push(it("PNAR: suspeita de hipertensão gestacional", "Betim")); out.probs.push(it("PA elevada após 20 semanas", "", "pa-gestante")); alto = true; }
      else if (alta && w < 20 && !C("has")){ out.fazer.push(it("PA ≥ 140/90 antes de 20 semanas: provável hipertensão crônica – confirmar, exames basais e iniciar tratamento enquanto aguarda o PNAR", "Betim")); out.ref.push(it("PNAR: hipertensão crônica", "Betim")); out.probs.push(it("Provável hipertensão crônica", "", "pn-has")); alto = true; }
      else if (C("has") || C("hgest")){ if ((pas > 130) || (pad > 85)) out.fazer.push(it("Acima do alvo (~130/85): ajustar anti-hipertensivo (metildopa 250 mg 8/8 h é o início)", "Betim", "pn-has")); }
    }
    if (C("has") || C("hgest")){ out.fazer.push(it("Curva de PA domiciliar 2–3 vezes por semana e fita urinária em todo retorno", "Betim")); }
    // IMC e ganho de peso
    if (ok(imc)){
      const cl = imc < 18.5 ? ["baixo peso", "12,5–18 kg"] : imc < 25 ? ["adequado", "11,5–16 kg"] : imc < 30 ? ["sobrepeso", "7–11,5 kg"] : ["obesidade", "5–9 kg"];
      out.achados.push(`IMC ${nF(imc)} kg/m² (${cl[0]})`);
      out.fazer.push(it(`IMC ${nF(imc)} (${cl[0]}): ganho total recomendado ${cl[1]}; registrar no gráfico da caderneta`, "Betim"));
    }
    if (ok(peso)) out.achados.push(`peso ${nF(peso)} kg`);
    // AU e BCF
    if (ok(au)){ out.achados.push(`AU ${au} cm`); if (w >= 20 && w <= 34 && Math.abs(au - w) > 3) out.fazer.push(it(`AU ${au} cm com ${Math.floor(w)} semanas (diferença > 3 cm): USG para avaliar crescimento; suspeita de restrição ou macrossomia → PNAR`, "I")); }
    if (S.bcfna === "na"){ out.achados.push("BCF não audível"); if (w >= 24) out.urg.push(it("BCF não audível com ≥ 24 semanas (após checar IG, sonar e outro profissional): CMI", "Betim")); else out.fazer.push(it("BCF não audível: conferir IG e pedir USG", "Betim")); }
    else if (ok(bcf)){ out.achados.push(`BCF ${bcf} bpm`); if (bcf < 110 || bcf > 160) out.urg.push(it(`BCF ${bcf} bpm persistente: CMI com urgência`, "Betim")); }
    // exames
    const ex = (k, l) => S[k] === "" || S[k] == null;
    const pedir1 = [];
    if (ex("rh")) pedir1.push("tipagem ABO/Rh");
    if (!ok(N(S.hb1))) pedir1.push("hemograma");
    if (ex("eletro")) pedir1.push("eletroforese de Hb");
    if (!ok(N(S.gj)) && w < 24) pedir1.push("glicemia de jejum");
    ["sif1:TR sífilis", "hiv1:TR HIV", "hbv1:TR hepatite B", "hcv1:TR hepatite C", "htlv:HTLV", "toxo:toxoplasmose IgG/IgM", "urina1:EAS e urocultura"].forEach(s => { const [k, l] = s.split(":"); if (ex(k)) pedir1.push(l); });
    if (ex("usg")) pedir1.push(w < 14 ? "USG obstétrica (ideal 11–13s6d)" : "USG obstétrica o quanto antes");
    if (S.rh === "neg" && ex("coombs")) pedir1.push("Coombs indireto");
    if (ex("abo") && !ex("rh")) pedir1.push("tipagem ABO");
    if (pedir1.length) out.pedir.push(it((prim ? "Exames de entrada: " : "Exames de entrada sem resultado informado – conferir na caderneta e pedir os que faltam: ") + pedir1.join(", "), "Betim/Caderneta"));
    if (S.cito === "atraso" || (prim && ok(idade) && idade >= 25 && ex("cito"))) out.lemb.push(it("Citopatológico, se rastreio em atraso (25–64 anos)", "Betim"));
    // interpretação 1º tri
    const hbInt = (v, tri) => { if (!ok(v)) return; out.achados.push(`Hb ${nF(v)} g/dL (${tri})`);
      if (v < 7){ out.urg.push(it(`Hb ${nF(v)}: anemia grave – CMI`, "Betim")); }
      else if (v < 8){ out.ref.push(it(`PNAR: Hb ${nF(v)} (< 8)`, "Betim")); out.probs.push(it("Anemia grave", "", "pn-anemia")); alto = true; }
      else if (v < 11){ out.probs.push(it(`Anemia (Hb ${nF(v)})`, "", "pn-anemia")); out.rx.push(it("Sulfato ferroso 40 mg: 1 comprimido 3 vezes ao dia (120 mg/dia) + parasitológico de fezes; Hb em 30 dias (sem resposta → aumentar a dose e PNAR)", "PACK 2025/Betim", "pn-anemia")); } };
    hbInt(N(S.hb1), "entrada"); hbInt(N(S.hb3), "3º tri");
    if (S.rh === "neg"){
      out.achados.push("Rh negativo");
      const cb = [S.coombs3, S.coombs2, S.coombs].find(v => v === "p" || v === "n") || "";
      if (cb === "p"){
        out.ref.push(it("Rh negativo com Coombs indireto POSITIVO: aloimunização – PNAR/medicina fetal, mantendo a UBS", "Betim", "pn-rh")); alto = true; out.probs.push(it("Coombs indireto positivo (aloimunização Rh)", "", "pn-rh"));
        out.lemb.push(it("Coombs positivo logo após anti-D costuma ser passivo (título baixo): confirmar com o serviço antes de concluir aloimunização", "FEBRASGO", "pn-rh"));
      } else if (cb === "n"){
        out.fazer.push(it(w >= 24 ? "Rh negativo com Coombs indireto negativo: repetir Coombs mensalmente a partir de 24 semanas (Betim; Caderneta: 2º e 3º trimestres)" : `Rh negativo com Coombs indireto negativo: repetir mensalmente a partir de 24 semanas (${dataEm(24, ig)}) – Betim; Caderneta: 2º e 3º trimestres`, "Betim/Caderneta", "pn-rh"));
        out.orient.push(it("Oriento procurar a maternidade se sangramento, trauma abdominal ou procedimento invasivo: imunoglobulina anti-D até 72 h", "Betim/FEBRASGO", "pn-rh"));
        out.lemb.push(it("Imunoglobulina anti-D: anteparto com 28–34 semanas se disponível (FEBRASGO; não localizada na REMUME – conferir na maternidade/hemocentro) e até 72 h após parto de RN Rh+, abortamento ou ectópica", "FEBRASGO/Betim", "pn-rh"));
      }
    }
    if (S.eletro === "df"){ out.ref.push(it("PNAR: doença falciforme", "Betim")); alto = true; }
    if (S.eletro === "as") out.achados.push("traço falciforme (sem encaminhamento)");
    const gjv = N(S.gj), gj3 = N(S.gj3);
    let dmgDx = C("dmg");
    [[gjv, "entrada"], [gj3, "3º tri"]].forEach(([v, l]) => { if (!ok(v)) return; out.achados.push(`glicemia de jejum ${v} mg/dL (${l})`);
      if (v >= 126){ out.probs.push(it("Diabetes diagnosticado na gestação", "", "pn-dmg")); out.ref.push(it("PNAR: glicemia de jejum ≥ 126 (DM diagnosticado na gestação)", "Betim")); dmgDx = true; alto = true; }
      else if (v >= 92){ out.probs.push(it("Diabetes gestacional (jejum 92–125)", "", "pn-dmg")); out.ref.push(it("PNAR: DMG", "Betim")); dmgDx = true; alto = true; } });
    const tj = N(S.tj), t1 = N(S.t1), t2 = N(S.t2);
    if (ok(tj) || ok(t1) || ok(t2)){
      out.achados.push(`TOTG ${ok(tj) ? tj : "—"}/${ok(t1) ? t1 : "—"}/${ok(t2) ? t2 : "—"} mg/dL`);
      if (tj >= 126 || t2 >= 200){ out.probs.push(it("DM diagnosticado na gestação (TOTG)", "", "pn-dmg")); out.ref.push(it("PNAR: TOTG compatível com DM", "Betim")); dmgDx = true; alto = true; }
      else if (tj >= 92 || t1 >= 180 || t2 >= 153){ out.probs.push(it("Diabetes gestacional (TOTG)", "", "pn-dmg")); out.ref.push(it("PNAR: DMG pelo TOTG", "Betim")); dmgDx = true; alto = true; }
      else out.achados.push("TOTG normal");
    } else if (!dmgDx && !C("dm")){
      if (w < 24) out.lemb.push(it(`Programar TOTG 75 g entre 24 semanas (${dataEm(24, ig)}) e 28 semanas (${dataEm(28, ig)})`, "Caderneta"));
      else if (w <= 28) out.pedir.push(it("TOTG 75 g agora (janela de 24–28 semanas)", "Caderneta"));
      else out.pedir.push(it(prim ? "TOTG 75 g o quanto antes (1ª consulta após 28 semanas)" : "TOTG 75 g: se não foi feito, pedir o quanto antes", "Betim"));
    }
    if (dmgDx || C("dm")){ out.fazer.push(it("Automonitorização: glicosímetro emprestado e fitas pela farmácia; metas jejum 65–95, 1 h < 140, 2 h < 120 mg/dL", "Betim", "pn-dmg")); out.orient.push(it("Plano alimentar e atividade física; nutrição da eMulti", "Betim")); }
    const sifR = ["sif1", "sif2", "sif3"].some(k => S[k] === "r");
    if (sifR){ out.fazer.push(it("Sífilis: 1ª dose de penicilina benzatina 2,4 milhões UI HOJE, VDRL ('diagnóstico após TR reagente'), notificar, tratar a parceria; VDRL mensal", "Betim", "sifilis")); out.probs.push(it("Sífilis na gestação", "", "sifilis")); }
    if (["hiv1", "hiv2", "hiv3"].some(k => S[k] === "r")){ out.ref.push(it("HIV reagente: 2º teste de outro fabricante e carga viral; PNAR + SEPADI, mantendo a UBS", "Betim", "hiv-diagnostico")); alto = true; out.probs.push(it("HIV na gestação", "", "hiv-diagnostico")); }
    if (S.hbv1 === "r" || S.hcv1 === "r" || S.hep3 === "r"){ out.ref.push(it("Hepatite B ou C reagente: PNAR + SEPADI; RN de mãe HBsAg+ recebe vacina e imunoglobulina nas primeiras horas", "Betim", "in-hepatites")); alto = true; out.probs.push(it("Hepatite viral na gestação", "", "in-hepatites")); }
    if (S.htlv === "r"){ out.ref.push(it("HTLV reagente: confirmar e discutir com o PNAR/infectologia (orientação sobre aleitamento)", "C")); }
    if (S.toxo === "susc" && (S.toxo2 === "igm" || S.toxo3 === "igm")){ out.fazer.push(it("Toxoplasmose: IgM reagente ou soroconversão em gestante antes suscetível – espiramicina 1 g 8/8 h já; notificar; PNAR", "Betim", "pn-toxo")); alto = true; out.probs.push(it("Toxoplasmose aguda provável", "", "pn-toxo")); }
    if (S.toxo === "igm"){ out.fazer.push(it(`Toxoplasmose IgM+: espiramicina 1 g 8/8 h já${w < 16 ? ", teste de avidez de IgG (só até 16 semanas)" : ""}; notificar; PNAR`, "Betim", "pn-toxo")); alto = true; out.probs.push(it("Toxoplasmose aguda provável", "", "pn-toxo")); }
    if (S.toxo === "susc"){ out.orient.push(it("Suscetível à toxoplasmose: carne bem passada, lavar frutas e verduras, luvas com terra e areia de gato", "Betim")); out.pedir.push(it("Toxoplasmose IgG/IgM: repetir a cada trimestre (se não feita neste) e no parto", "Betim", "pn-toxo")); }
    ["urina1", "urina3"].forEach(k => { const v = S[k];
      if (v === "itu") out.fazer.push(it(C("q_uri") ? "Urocultura positiva com sintomas (cistite): tratar conforme antibiograma e urocultura de controle" : "Bacteriúria assintomática: tratar conforme antibiograma e urocultura de controle", "Betim", "itu-gestante"));
      if (v === "prot") out.fazer.push(it("Proteinúria: repetir em 15 dias (persistindo → PNAR); com PA alta ou edema → CMI", "Betim")); });
    if (S.usg === "alt"){ out.ref.push(it("USG alterada: discutir com o PNAR (medicina fetal se malformação)", "Betim")); }
    // 2º e 3º trimestres
    if (w >= 14 && w < 28 && (ex("sif2") || ex("hiv2"))) out.pedir.push(it("TR de sífilis e HIV do 2º trimestre", "Betim"));
    if (w >= 28){ const p3 = []; if (!ok(N(S.hb3))) p3.push("hemograma"); if (!ok(gj3) && !dmgDx) p3.push("glicemia de jejum"); [["sif3", "TR sífilis"], ["hiv3", "TR HIV"], ["hep3", "TR hepatites B e C"], ["urina3", "EAS e urocultura"]].forEach(([k, l]) => { if (ex(k)) p3.push(l); }); if (p3.length) out.pedir.push(it("Exames do 3º trimestre: " + p3.join(", "), "Betim/Caderneta")); }
    // AAS
    const peA = flags.filter(k => CONDF[k].peA).length + (ok(imc) && imc >= 30 ? 1 : 0);
    const peM = flags.filter(k => CONDF[k].peM).length + (ok(idade) && idade >= 35 ? 1 : 0);
    const aasInd = peA >= 1 || peM >= 2;
    if (aasInd){
      out.probs.push(it("Risco aumentado de pré-eclâmpsia (indicação de AAS)", "", "pn-1consulta"));
      if (w >= 36) out.rx.push(it(C("u_aas") ? "AAS: suspender (36 semanas)" : "AAS: fora da janela (≥ 36 semanas)", "Betim"));
      else if (C("u_aas")) out.rx.push(it(`Mantenho AAS ${S.d_aas || "100 mg à noite"} até 36 semanas`, "Betim"));
      else if (w < 12) out.rx.push(it(`AAS 100 mg à noite: indicado – iniciar com 12 semanas (${dataEm(12, ig)}), antes de 16 (${dataEm(16, ig)}), até 36`, "CONITEC/Betim"));
      else if (w < 16) out.rx.push(it("AAS 100 mg à noite: iniciar HOJE e manter até 36 semanas", "CONITEC/Betim"));
      else if (w < 28) out.rx.push(it("AAS: o protocolo de Betim admite iniciar até 28 semanas; o benefício demonstrado é maior antes de 16 – decidir e registrar", "I"));
      else out.rx.push(it("AAS: não iniciar após 28 semanas", "Betim"));
    } else if (C("u_aas")) out.lemb.push(it("AAS em uso sem fator de risco marcado: conferir a indicação", "I"));
    // suplementos
    const folDose = C("dtn") ? "5 mg/dia" : (C("u_fol") && S.d_fol) ? S.d_fol : "0,4 mg/dia";
    if (w < 12) out.rx.push(it(`${C("u_fol") ? "Mantenho" : "Prescrevo"} ácido fólico ${folDose} até 12 semanas`, "PNSF/Betim", "pn-1consulta"));
    else if (C("u_fol")) out.rx.push(it("Suspendo ácido fólico (mais de 12 semanas)", "PNSF"));
    const anemia = (ok(N(S.hb1)) && N(S.hb1) < 11) || (ok(N(S.hb3)) && N(S.hb3) < 11);
    if (!anemia) out.rx.push(it(`${C("u_fe") ? "Mantenho" : "Prescrevo"} sulfato ferroso 40 mg/dia até 3 meses pós-parto`, "PNSF/Betim"));
    if (C("u_ca")) out.rx.push(it("Carbonato de cálcio: suspender se usado só para pré-eclâmpsia (Betim, 30/09/2026); manter só com indicação registrada", "Betim", "pn-1consulta"));
    // vacinas
    if (!C("v_hepb")) out.vac.push(it("Hepatite B: iniciar ou completar 3 doses", "Caderneta"));
    if (!C("v_dtpa")) out.vac.push(it(w >= 20 ? "dTpa: aplicar hoje (toda gestação, a partir de 20 semanas)" : `dTpa a partir de 20 semanas (${dataEm(20, ig)})`, "Caderneta"));
    if (!C("v_flu")) out.vac.push(it("Influenza: 1 dose na temporada, em qualquer IG", "Caderneta"));
    if (!C("v_covid")) out.vac.push(it("COVID-19: 1 dose na gestação (≥ 6 meses da anterior)", "Caderneta"));
    if (!C("v_vsr")) out.vac.push(it(w >= 28 ? "VSR: dose única hoje (a partir de 28 semanas)" : `VSR: dose única a partir de 28 semanas (${dataEm(28, ig)})`, "Caderneta"));
    // ações por IG
    out.fazer.push(it("Atualizo caderneta da gestante", "Caderneta"));
    // lembretes para a médica: aparecem na tela, não na evolução
    if (prim){ ["Ficha de acompanhamento para o ACS", "Estratificação de risco registrada", "Rever medicamentos teratogênicos (IECA/BRA, estatina, isotretinoína, varfarina, valproato)", "Rastrear violência e saúde mental, em privado", "Exames e testes rápidos da parceria", "Consulta odontológica agendada", "Repelente prescrito (icaridina, DEET ou IR3535)", "Maternidade de referência: Centro Materno Infantil (CMI)"].forEach(t => out.lemb.push(it(t, "Betim"))); }
    if (w >= 28 && w < 36) out.orient.push(it("Plano de parto, sinais de trabalho de parto e visita ao CMI", "Betim", "pn-plano-parto"));
    if (w >= 34) out.orient.push(it("Registro diário de movimentos fetais: ≥ 6 em 1 h após comer; se não, repetir; persistindo → maternidade", "Betim"));
    if (C("cesped") && w >= 36) out.fazer.push(it("Cesárea a pedido: aconselhamento registrado, TCLE e termo de transferência ao CMI (cirurgia entre 39 e 41 semanas)", "Betim", "pn-3tri"));
    else if (C("cesped")) out.fazer.push(it("Cesárea a pedido: aconselhar sobre vias de parto; termo de transferência ao CMI a partir de 36 semanas", "Betim", "pn-3tri"));
    if (w >= 36) out.orient.push(it("Amamentação na 1ª hora, consultas puerperais (até o 5º dia e 30–40 dias) e contracepção pós-parto", "Betim", "pp-1semana"));
    out.orient.push(it(`Oriento sinais de alarme: sangramento, perda de líquido, febre, cefaleia forte ou visão turva, dor forte na boca do estômago, inchaço repentino${w >= 20 ? ", contrações regulares ou dor forte na barriga, bebê mexendo menos" : ", dor forte na barriga"} – procurar a maternidade`, "Caderneta"));
    // encaminhamento por risco
    if (alto && !out.ref.some(r => /^PNAR/.test(r.t))) out.ref.push(it("PNAR: gestação de alto risco (critérios marcados)", "Betim"));
    if (flags.some(k => CONDF[k].sepadi)) out.ref.push(it("SEPADI: HIV ou hepatite", "Betim"));
    if (alto) out.ref.push(it("Manter consultas na UBS alternando médico e enfermeiro; a gestante não recebe alta da APS", "Betim"));
    // retorno
    // retorno em dias: mensal (28) até 28 semanas, quinzenal até 36, semanal depois (Betim); HAS e PA elevada encurtam
    let retD = w >= 36 ? 7 : w >= 28 ? 15 : 28;
    if (C("hgest") || out.probs.some(p => /PA elevada/.test(p.t))) retD = 7;
    else if (C("has")) retD = w >= 36 ? 7 : 14;
    const ret = w >= 41 ? "encaminhada ao CMI" : `em ${retD} dias`;
    const risco = alto ? "alto risco" : inter ? "risco intermediário" : "risco habitual";
    return {out, ig, w, risco, ret, imc, prim};
  }

  const li = x => `<li>${esc(x.t)}${x.src ? ` <span class="pw-src">${esc(x.src)}</span>` : ""}${x.link ? ` <button type="button" class="golink pw-go" data-id="${esc(x.link)}">ver →</button>` : ""}</li>`;
  const bloco = (t, arr, cls) => arr.length ? `<div class="pw-b ${cls || ""}"><h4>${esc(t)}</h4><ul>${arr.map(li).join("")}</ul></div>` : "";
  const DT = k => S[k] ? fd(pd(S[k])) : "__/__/__";
  const TRv = v => v === "nr" ? "NR" : v === "r" ? "R" : "";
  const USGOPT = [["tv", "USG transvaginal (8–12 s)"], ["m1", "Morfológica 1º tri (11–13s6d)"], ["m2", "Morfológica 2º tri (20–24 s)"], ["t3", "USG 3º tri (32–36 s)"], ["dop", "USG com Doppler"]];
  const USGM = {
    tv: ["1", "USGTV (__/__/__): IG ___s, feto único, BCF ___ bpm, CCN ___ mm, implantação intrauterina, saco gestacional e vesícula vitelínica presentes, sem sinais de descolamento. DPP: __/__/__."],
    m1: ["1", "USG morfológico 1º tri (__/__/__): IG ___s, feto único, BCF ___ bpm, apresentação ___, CCN ___ mm, TN ___ mm, osso nasal presente, ducto venoso normal, fluxo tricúspide normal, anatomia sem alterações, placenta ___. Risco para aneuploidias baixo."],
    m2: ["2", "USG morfológico 2º tri (__/__/__): IG ___s, feto único, BCF ___ bpm, apresentação ___, PFE ___ g (p __), CA ___cm (p __), anatomia fetal sem alterações, placenta ___, LA normal."],
    t3: ["3", "USG 3º tri (__/__/__): IG ___s, feto único, BCF ___ bpm, apresentação ___, PFE ___ g (p __), CA ___cm (p __), anatomia fetal sem alterações, placenta ___, cordão 2A1V, LA normal."],
    dop: ["3", "USG Doppler (__/__/__): IG ___s, feto único, BCF ___ bpm, apresentação ___, PFE ___ g (p __), CA ___cm (p __), placenta ___, LA normal. Doppler: AU/IP ___ (normal/alterado), ACM/IP ___, CPR ___, artérias uterinas/IP ___."]};
  const kg = v => ok(v) ? v.toLocaleString("pt-BR", {minimumFractionDigits: 3, maximumFractionDigits: 3}) + " kg" : "";
  function evolucao(R){
    const {out, ig, w, ret, risco} = R;
    const C = k => !!S[k];
    const nc = N(S.ncons);
    const comorb = [...new Set([...Object.keys(CONDF).filter(k => C(k) && CONDF[k].ar).map(k => CONDF[k].t), ...(S.hppout ? [S.hppout] : [])])];
    const probsEx = [...new Set(out.probs.map(p => p.t).filter(t => !comorb.includes(t)))];
    const usos = [...USO.filter(([k]) => S[k]).map(([k, l, d]) => (l === "AAS" ? l : l.toLowerCase()) + " " + (S[doseK(k)] || d[0][0])), ...(S.usoout ? [S.usoout] : [])];
    const prev = Object.keys(CONDF).filter(k => C(k) && ["pe_prev","pe_grave","prematuro","perinatal","abortos","corporal","iso","advers","ces2","dmgprev"].includes(k)).map(k => CONDF[k].t.toLowerCase());
    const L = [];
    L.push("## PRÉ-NATAL ##", `${ok(nc) ? nc : "__"}ª CONSULTA DE PRÉ-NATAL${S.bebe ? " - " + S.bebe : ""}`);
    L.push(`- IG: ${sd(ig)}${S.dum ? " (DUM " + DT("dum") + ")" : ""} | DPP: ${fd(hojeUTC() + (280 - ig) * DIA)}`);
    L.push(`- ${risco === "alto risco" ? "PNAR (alto risco), mantendo acompanhamento na UBS" : "PNRH" + (risco === "risco intermediário" ? " (risco intermediário)" : "")}`);
    L.push(`- Comorbidades: ${comorb.length ? comorb.join("; ") : "nega"}${probsEx.length ? " | Nesta consulta: " + probsEx.join("; ") : ""}`);
    if (out.fatores.length) L.push(`- Fatores de risco: ${[...new Set(out.fatores)].join("; ").toLowerCase()}`);
    L.push(`- Em uso de: ${usos.length ? usos.join(", ") : "___"}`, "");
    const NEG = [["q_uri", "sintomas urinários"], ["a_dorab", "dor abdominal"], ["a_liq", "perdas de líquido"], ["a_sang", "sangramento"], ["a_tp", "contrações"]];
    const neg = NEG.filter(([k]) => !C(k)).map(([, l]) => l), ref = NEG.filter(([k]) => C(k)).map(([, l]) => l);
    const outros = ALARM.filter(([k]) => C(k) && !NEG.some(([n]) => n === k)).map(([, l]) => l.toLowerCase());
    const lista = a => a.length > 1 ? a.slice(0, -1).join(", ") + " ou " + a[a.length - 1] : a.join("");
    const quri = URIQ.filter(([k]) => C(k)).map(([, l]) => l);
    const refTxt = ref.map(l => l === "sintomas urinários" && quri.length ? "sintomas urinários (" + quri.join(", ") + (S.qu_dias ? ", há " + S.qu_dias.replace(/\s*dias?$/i, "") + " dias" : "") + ")" : l === "sintomas urinários" && S.qu_dias ? "sintomas urinários há " + S.qu_dias.replace(/\s*dias?$/i, "") + " dias" : l);
    let sub = "Gestante comparece à consulta para seguimento de pré-natal. " + (refTxt.length || outros.length ? "Refere " + [...refTxt, ...outros].join(", ") + ". " : "Refere bem-estar geral. ");
    if (neg.length) sub += "\nNega " + lista(neg) + ". ";
    if (w >= 20) sub += (S.mf === "dim" || C("a_mf")) ? "Refere diminuição da movimentação fetal." : S.mf === "aus" ? "Refere ausência de movimentação fetal." : "Relata movimentação fetal preservada.";
    L.push(sub, "");
    L.push(`# HPP: ${comorb.length ? comorb.join("; ") : "nega comorbidades"}.`, `- ${S.usocont ? "Medicamentos de uso contínuo prévios: " + S.usocont : "Nega uso de medicamentos contínuos prévios"}.`, `- ${S.alerg && !/^nega/i.test(S.alerg) ? "Alergias: " + S.alerg : "Nega alergias medicamentosas"}.`, "");
    const ga = gAnt();
    L.push("# Antecedentes obstétricos:", `- GPA: ${S.gpa || ""}`);
    if (ga === 0 || (!ok(ga) && C("nulip"))) L.push("- Primigesta.", "");
    else L.push(`- Intercorrências em gestações anteriores: ${[...prev, ...(S.intercor ? [S.intercor] : [])].join("; ")}`, `- Nascidos vivos: ${S.nvivos || ""}`, `- Amamentação: ${S.amam || "sim | não | duração: | causa do insucesso:"}`, "");
    const pas = N(S.pas), pad = N(S.pad), au = N(S.au), bcf = N(S.bcf);
    L.push("# EXAME FÍSICO:", `PA: ${ok(pas) ? pas : "___"}x${ok(pad) ? pad : "___"} mmHg`, `Peso: ${kg(N(S.peso)) || "___ kg"}${ok(R.imc) ? " (IMC " + nF(R.imc) + ")" : ""}`);
    if (w >= 12) L.push(`BCF: ${S.bcfna === "na" ? "não audível" : ok(bcf) ? bcf + " bpm" : "___ bpm"}`);
    if (w >= 18) L.push(`AU: ${ok(au) ? au + " cm" : "___ cm"}`);
    if (w >= 20) L.push(`MF: ${S.mf === "dim" ? "diminuída" : S.mf === "aus" ? "ausente" : "presente"}`);
    L.push("");
    const toxo = {imune: "IgG reagente / IgM não reagente (imune)", susc: "IgG não reagente / IgM não reagente (suscetível)", igm: "IgM reagente"}[S.toxo] || "";
    const urina = v => ({ok: "sem alterações", itu: "urocultura positiva", prot: "proteinúria"}[v] || "");
    const nn = v => ok(N(v)) ? N(v).toLocaleString("pt-BR") : "";
    const hemo = t => `Hb ${ok(N(S["hb" + t])) ? nF(N(S["hb" + t])) : ""} / Ht ${ok(N(S["ht" + t])) ? nF(N(S["ht" + t])) + "%" : ""} / GL ${nn(S["gl" + t])} / Plaq ${nn(S["plq" + t])}`;
    const cbTxt = v => v === "n" ? "negativo" : v === "p" ? "positivo" : "";
    const toxoTri = v => ({susc: "IgG não reagente / IgM não reagente (segue suscetível)", igm: "IgM reagente ou soroconversão"}[v] || "");
    const rhTxt = (S.abo || "") + (S.rh === "neg" ? (S.abo ? " " : "Rh ") + "negativo" : S.rh === "pos" ? (S.abo ? " " : "Rh ") + "positivo" : "");
    const eletro = {aa: "Hb AA (normal)", as: "Hb AS (traço falciforme)", df: "doença falciforme"}[S.eletro] || "Hb A1 __% / Hb A2 __% / Hb Fetal __%";
    const triAt = w >= 28 ? "3" : w >= 14 ? "2" : "1";
    const usgLines = (tri, vazio) => { const l = Object.keys(USGM).filter(k => S["usg_" + k] && USGM[k][0] === tri).map(k => "- " + USGM[k][1]); if (S.usgout && tri === triAt) l.push("- " + S.usgout.replace(/^-\s*/, "")); return l.length ? l : vazio; };
    L.push("### EXAMES DO 1° TRIMESTRE ###", `- TR (${DT("d1tr")}): HIV ${TRv(S.hiv1)} / Sífilis ${TRv(S.sif1)} / Hep C ${TRv(S.hcv1)} / Hep B ${TRv(S.hbv1)}`, `- LAB (${DT("d1")}): ${hemo("1")}`,
      `ABO/Rh: ${rhTxt}`, ...(S.rh !== "pos" ? [`Coombs indireto: ${cbTxt(S.coombs)}`] : []), `Glicemia de jejum: ${ok(N(S.gj)) ? N(S.gj) : ""}`, `Toxoplasmose IgG/IgM: ${toxo}`, `Eletroforese de Hemoglobina: ${eletro}`);
    if (S.htlv) L.push(`HTLV: ${TRv(S.htlv)}`);
    L.push(`- EAS e urocultura (${DT("d1")}): ${urina(S.urina1)}`, ...(S.usg_tv ? [] : [`- USGTV (__/__/__): ${S.usg === "ok" ? "sem alterações" : S.usg === "alt" ? "alterada: ___" : ""}`]), ...usgLines("1", S.usg_tv ? [] : ["- USG morfológico 1°T (__/__/__):"]), "------------------------------------------------------------------------------------");
    if (w >= 14){
      const tj = N(S.tj), t1 = N(S.t1), t2 = N(S.t2);
      L.push("### EXAMES DO 2° TRIMESTRE ###", `- TR (${DT("d2tr")}): HIV ${TRv(S.hiv2)} / Sífilis ${TRv(S.sif2)} / Hep C ${TRv(S.hep2)} / Hep B ${TRv(S.hep2)}`, `- LAB (${DT("d2")}): TOTG ${ok(tj) || ok(t1) || ok(t2) ? `${ok(tj) ? tj : "—"} / ${ok(t1) ? t1 : "—"} / ${ok(t2) ? t2 : "—"}` : ""}`, ...(S.toxo !== "imune" ? [`Toxoplasmose IgG/IgM: ${toxoTri(S.toxo2)}`] : []), ...(S.rh !== "pos" ? [`Coombs indireto: ${cbTxt(S.coombs2)}`] : []), ...usgLines("2", ["- USG morfológico 2°T (__/__/__):"]), "------------------------------------------------------------------------------------");
    }
    if (w >= 28){
      L.push("### EXAMES DO 3° TRIMESTRE ###", `- TR (${DT("d3tr")}): HIV ${TRv(S.hiv3)} / Sífilis ${TRv(S.sif3)} / Hep C ${TRv(S.hep3)} / Hep B ${TRv(S.hep3)}`, `- LAB (${DT("d3")}): ${hemo("3")}`, `Glicemia de jejum: ${ok(N(S.gj3)) ? N(S.gj3) : ""}`, ...(S.toxo !== "imune" ? [`Toxoplasmose IgG/IgM: ${toxoTri(S.toxo3)}`] : []), ...(S.rh !== "pos" ? [`Coombs indireto: ${cbTxt(S.coombs3)}`] : []), `- EAS e Urocultura (${DT("d3")}): ${urina(S.urina3)}`, ...usgLines("3", []), "------------------------------------------------------------------------------------");
    }
    const vs = (k, feito, pend) => C(k) ? feito : pend;
    L.push("", "### VACINAÇÃO ###", `- COVID-19: ${vs("v_covid", "realizada", "pendente – 1 dose na gestação")}`, `- Influenza: ${vs("v_flu", "realizada", "pendente – aplicar na temporada")}`, `- Hepatite B (se esquema incompleto): ${vs("v_hepb", "esquema completo", "pendente – iniciar/completar")}`, "- DT: ",
      `dTpa (> 20 semanas/conferir esquema): ${vs("v_dtpa", "realizada", w >= 20 ? "aplicar hoje" : "a partir de 20 semanas (" + dataEm(20, ig) + ")")}`, `- VSR (a partir de 28 semanas): ${vs("v_vsr", "realizada", w >= 28 ? "aplicar hoje" : "a partir de " + dataEm(28, ig))}`, "");
    L.push("PLANO / CONDUTA:");
    [...out.urg, ...out.ref, ...out.fazer, ...out.pedir, ...out.rx, ...out.orient].forEach(x => L.push("- " + x.t));
    L.push("- Dúvidas esclarecidas; gestante verbaliza entendimento e concorda com a conduta.", w >= 41 ? "- Encaminhada ao CMI (41 semanas ou mais)." : `- Agendo retorno ${ret}.`);
    return L.join("\n");
  }
  function receita(R){
    const {w, ig, out} = R; const L = [];
    const anemia = out.probs.some(p => /^Anemia/.test(p.t));
    if (w < 12 && (S.dtn || (S.u_fol && S.d_fol === "5 mg/dia"))) L.push("- Ácido fólico 5 mg comprimido", "  Tomar 01 cp 1 vez ao dia, até 12 semanas de gestação.");
    else if (w < 12) L.push("- Ácido fólico 0,2 mg/mL solução oral", "  Tomar 2 mL (0,4 mg) 1 vez ao dia, até 12 semanas de gestação.");
    L.push("- Sulfato ferroso 40 mg de ferro elementar", anemia ? "  Tomar 01 cp 3 vezes ao dia, 30 minutos antes das refeições, de preferência com suco cítrico (ex.: limão, laranja). Não tomar com leite, café ou chá." : "  Tomar 01 cp 30 minutos antes do almoço, de preferência com suco cítrico (ex.: limão, laranja). Não tomar com leite, café ou chá.");
    if (out.rx.some(r => /^AAS 100 mg à noite: iniciar HOJE/.test(r.t) || /^Mantenho AAS/.test(r.t))) L.push("- AAS 100 mg", S.u_aas && S.d_aas === "150 mg à noite" ? "  Tomar 1 cp e meio (150 mg) à noite, até 36 semanas de gestação." : "  Tomar 01 cp à noite, até 36 semanas de gestação.");
    return L.join("\n");
  }
  function render(root){
    S = rd(root);
    const ig = igDias(); const w = ig / 7;
    const ga = gAnt();
    const vis = {ig: ok(ig), prim: S.tipo === "1", ig12: w >= 12, ig14: w >= 14, ig18: w >= 18, ig20: w >= 20, ig28: w >= 28, rhneg: S.rh === "neg", toxosusc: S.toxo === "susc", cito: true,
      q_uri: !!S.q_uri, u_fol: !!S.u_fol, u_fe: !!S.u_fe, u_aas: !!S.u_aas, u_ca: !!S.u_ca, gant: !(ga === 0 || (!ok(ga) && S.nulip))};
    root.querySelectorAll("[data-vis]").forEach(el => { el.hidden = !vis[el.dataset.vis]; });
    const igEl = root.querySelector("#pw-ig");
    const O = root.querySelector("#pw-out");
    if (!ok(ig) || ig < 28 || ig > 44 * 7){ igEl.textContent = ok(ig) ? "IG fora do intervalo (4 a 44 semanas)." : ""; O.innerHTML = `<div class="pw-empty"><b>Informe a IG</b> (ou a DUM) para montar a consulta.</div>`; return; }
    const dpp = hojeUTC() + (280 - ig) * DIA;
    const tri = w < 14 ? "1º trimestre" : w < 28 ? "2º trimestre" : "3º trimestre";
    igEl.innerHTML = `<b>${sd(ig)}</b> · ${tri} · DPP ${fd(dpp)}`;
    const R = plano();
    const {out} = R;
    O.innerHTML = `<div class="pw-head"><span class="pill ${R.risco === "alto risco" ? "alto" : R.risco === "risco habitual" ? "baixo" : "moderado"}">${esc(R.risco)}</span><span>Retorno <b>${esc(R.ret)}</b></span></div>
      ${out.urg.length ? `<div class="pw-b urg"><h4>Agora: encaminhar ao CMI</h4><ul>${out.urg.map(li).join("")}</ul></div>` : ""}
      ${bloco("Encaminhamentos", out.ref)}
      ${bloco("Fazer nesta consulta", out.fazer)}
      ${bloco("Pedir", out.pedir)}
      ${bloco("Prescrição e suplementos", out.rx)}
      ${bloco("Vacinas", out.vac)}
      ${bloco("Orientar", out.orient)}
      ${bloco("Lembretes para você (não entram na evolução)", out.lemb, "lemb")}
      <div class="pw-b"><h4>Evolução</h4><textarea class="fill mono pw-ta" id="pw-soap" aria-label="Evolução gerada">${esc(evolucao(R))}</textarea>
      <div class="actions" style="margin-top:8px"><button type="button" class="btn pri sm" id="pw-cp">Copiar evolução</button></div>
      <p class="hint" style="margin:6px 0 0">No seu modelo de prontuário. Complete os campos vazios antes de copiar; ao mudar uma entrada, o texto é refeito.</p></div>
      <div class="pw-b"><h4>Receita</h4><textarea class="fill mono pw-ta" id="pw-rec" aria-label="Receita gerada">${esc(receita(R))}</textarea>
      <div class="actions" style="margin-top:8px"><button type="button" class="btn sm" id="pw-cprec">Copiar receita</button></div>
      <p class="hint" style="margin:6px 0 0">Ácido fólico 0,4 mg pela solução da REMUME; 5 mg (comprimido da REMUME) se marcado alto risco de defeito do tubo neural; sem cálcio de rotina.</p></div>
      <p class="hint">Fontes: Protocolo Pré-Natal e Puerpério de Betim 2024 (com o Memorando 0109698/2026), Caderneta da Gestante 2026, NT SES-MG 2024, CONITEC 2026 (AAS), PNSF 2022, PACK Brasil 2025. Marcas: <span class="pw-src">I</span> = inferência clínica. Detalhes e doses: botão "ver" de cada item.</p>`;
    O.querySelectorAll(".pw-ta").forEach(grow);
  }
  function init(root){
    const box = root.querySelector("#pnw"); if (!box) return;
    box.querySelectorAll("[data-w]").forEach(el => { const v = S[el.dataset.w]; if (v === undefined) return; if (el.type === "checkbox") el.checked = !!v; else el.value = v; });
    box.addEventListener("input", ev => {
      if (ev.target.dataset.w === "dum" && ev.target.value){ const d = pd(ev.target.value); const ig = Math.round((hojeUTC() - d) / DIA); if (ig >= 0 && ig <= 44 * 7){ box.querySelector('[data-w="igs"]').value = Math.floor(ig / 7); box.querySelector('[data-w="igd"]').value = ig % 7; } }
      if (!ev.target.classList.contains("pw-ta")) render(box);
    });
    box.addEventListener("change", ev => { if (!ev.target.classList.contains("pw-ta")) render(box); });
    box.addEventListener("click", ev => {
      const t = ev.target.closest("button"); if (!t) return;
      if (t.id === "pw-jump"){ const o = box.querySelector("#pw-out"); if (o && o.scrollIntoView) o.scrollIntoView({behavior: "smooth", block: "start"}); }
      if (t.id === "pw-cp"){ copy(box.querySelector("#pw-soap").value, "Evolução"); }
      if (t.id === "pw-cprec"){ copy(box.querySelector("#pw-rec").value, "Receita"); }
      if (t.id === "pw-reset"){ box.querySelectorAll("[data-w]").forEach(el => { if (el.type === "checkbox") el.checked = false; else el.value = el.tagName === "SELECT" ? el.options[0].value : ""; }); render(box); }
    });
    render(box);
  }
  return {html, init};
})();
