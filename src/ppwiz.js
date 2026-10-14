// ── Consulta de puerpério guiada ─────────────────────────────────────────────
// Evolução no modelo "CONSULTA DE PUERPÉRIO TARDIO" da usuária; regras do protocolo de Betim 2024,
// PNSF 2022, Caderneta da Gestante e OMS MEC. Nada é salvo.
const PPW = (() => {
  let S = {};
  const N = v => { const s = String(v ?? "").replace(",", "."); return s === "" ? NaN : parseFloat(s); };
  const ok = x => typeof x === "number" && isFinite(x);
  const it = (t, src, link) => ({t, src, link});
  const hoje = () => pd(isoHoje());
  const QX = [["q_sang", "Sangramento aumentado ou com odor fétido"], ["q_febre", "Febre"], ["q_dorab", "Dor abdominal ou lombar intensa"], ["q_tev", "Dor/edema em panturrilha, dispneia ou dor torácica"], ["q_cef", "Cefaleia forte, escotomas ou dor epigástrica"], ["q_uri", "Sintomas urinários"], ["q_ferida", "Ferida/períneo com secreção, deiscência ou hiperemia"], ["q_mama", "Mama vermelha, quente e dolorida"], ["q_iu", "Incontinência urinária"], ["q_if", "Incontinência fecal"], ["q_dorper", "Dor perineal ou na incisão"], ["q_disp", "Dispareunia"]];
  const AM = [["ame", "exclusivo"], ["misto", "misto"], ["art", "artificial"]];
  const AMD = [["d_fis", "Dor ou fissuras mamilares"], ["d_prod", "Produção insuficiente (percepção)"], ["d_ins", "Insegura nos cuidados com o bebê"], ["d_apoio", "Sem rede de apoio"], ["d_mat", "Dificuldades materiais (moradia, alimentação, fraldas)"]];
  const HUM = [["h_trist", "Tristeza persistente, choro fácil ou anedonia"], ["h_ans", "Ansiedade excessiva"], ["h_sono", "Sono muito prejudicado"], ["h_ideac", "Ideação suicida ou de causar dano ao bebê"]];
  const COMP = [["c_dmg", "Diabetes gestacional"], ["c_has", "Distúrbio hipertensivo (HAS gestacional/pré-eclâmpsia)"], ["c_pe_grave", "Pré-eclâmpsia grave/HELLP"], ["c_rn4kg", "RN ≥ 4.000 g"], ["c_sif", "Sífilis na gestação"], ["c_anemia", "Anemia na gestação"]];
  const MET = [["", "não definido"], ["nenhum", "nenhum no momento"], ["lam", "LAM (amamentação exclusiva + amenorreia)"], ["diu", "DIU de cobre"], ["impl", "Implante de etonogestrel"], ["prog", "Pílula só de progestagênio"], ["inj3", "Injetável trimestral"], ["comb", "Pílula/injetável combinado"], ["pres", "Preservativo"], ["laq", "Laqueadura / vasectomia do parceiro"]];
  const VACP = [["v_dtpa", "dTpa não feita na gestação"], ["v_flu", "Influenza não feita"], ["v_hb", "Hepatite B incompleta"]];
  const sel = (k, l, o) => `<label class="f">${esc(l)}<select data-w="${k}">${o.map(([v, t]) => `<option value="${v}">${esc(t)}</option>`).join("")}</select></label>`;
  const num = (k, l, o = {}) => `<label class="f">${esc(l)}<input data-w="${k}" type="number" inputmode="decimal" step="${o.step || "any"}" placeholder="${esc(o.ph || "")}"></label>`;
  const txt = (k, l, ph = "") => `<label class="f">${esc(l)}<input data-w="${k}" type="text" placeholder="${esc(ph)}"></label>`;
  const box = (k, l) => `<label class="pw-ck"><input type="checkbox" data-w="${k}"><span>${esc(l)}</span></label>`;

  function html(){
    return `<div class="pnw" id="ppw">
  <div class="pw-form">
    <p class="hint" style="margin:0 0 10px">Comece pela data do parto. Marque só o que <b>foge do normal</b>: o restante sai como negativa no seu modelo. <b>Nada é salvo</b>.</p>
    <fieldset class="pw-sec"><legend>1. Parto</legend>
      <div class="pw-row">
        <label class="f">Data do parto<input data-w="dparto" type="date"></label>
        ${sel("tipo", "Tipo de parto", [["vaginal", "vaginal"], ["cesarea", "cesárea"], ["induzido", "vaginal induzido"], ["forceps", "fórceps/vácuo"]])}
        ${txt("intercor", "Intercorrências do parto", "sem intercorrências")}
        ${txt("acomp", "Acompanhante", "nome / vínculo")}
        ${txt("gpa", "GPA", "G2P2A0")}${num("igp", "IG ao parto (sem)", {step: 1})}
        ${txt("apgar", "APGAR 1' e 5'", "9/10")}${num("prn", "Peso do RN (g)", {step: 10})}${num("ern", "Estatura do RN (cm)", {step: "0.5"})}${txt("tsrn", "TS do RN", "O+")}
      </div>
      <p class="pw-ig" id="pp-dias"></p>
    </fieldset>
    <div data-vis="ok">
    <fieldset class="pw-sec"><legend>2. Queixas</legend><div class="pw-grid">${QX.map(([k, l]) => box(k, l)).join("")}</div>
      <div class="pw-row" style="margin-top:6px">${sel("loq", "Lóquios", [["dim", "em diminuição, sem odor"], ["rubra", "ainda rubros"], ["aus", "ausentes"], ["alt", "aumentados/odor fétido"]])}${sel("ativ", "Atividade física leve", [["", "—"], ["sim", "retomou"], ["nao", "não retomou"]])}${sel("sex", "Atividade sexual", [["", "—"], ["sim", "retomou"], ["nao", "não retomou"]])}</div>
    </fieldset>
    <fieldset class="pw-sec"><legend>3. Amamentação e cuidados</legend>
      <div class="pw-row">${sel("am", "Aleitamento", AM)}${sel("mens", "Menstruação", [["amen", "amenorreia desde o parto"], ["volta", "já retornou"]])}</div>
      <div class="pw-grid" style="margin-top:6px">${AMD.map(([k, l]) => box(k, l)).join("")}</div>
    </fieldset>
    <fieldset class="pw-sec"><legend>4. Humor</legend>
      <div class="pw-grid">${HUM.map(([k, l]) => box(k, l)).join("")}</div>
      <div class="pw-row" style="margin-top:6px">${num("epds", "EPDS (pontos)", {step: 1})}${num("epds10", "EPDS item 10 (0–3)", {step: 1})}</div>
    </fieldset>
    <fieldset class="pw-sec"><legend>5. Gestação, crônicas e hábitos</legend>
      <div class="pw-grid">${COMP.map(([k, l]) => box(k, l)).join("")}</div>
      <div class="pw-row" style="margin-top:6px">${txt("outras", "Outras condições", "")}${txt("meds", "Medicações em uso", "")}${txt("alerg", "Alergia medicamentosa", "Desconhece")}${sel("hab", "Tabaco/álcool/outras", [["nega", "nega"], ["tab", "tabaco"], ["alc", "álcool"], ["out", "outras substâncias"]])}</div>
      <div class="pw-grid" style="margin-top:6px">${box("u_fe", "Usando sulfato ferroso")}${box("cito_atr", "Citopatológico em atraso")}</div>
    </fieldset>
    <fieldset class="pw-sec"><legend>6. Contracepção e vacinas</legend>
      <div class="pw-row">${sel("met", "Método escolhido", MET)}${sel("desejo", "Nova gestação", [["", "—"], ["nao", "não deseja no momento"], ["sim", "deseja"]])}${txt("espac", "Espaçamento planejado", "ex.: 2 anos")}</div>
      <div class="pw-grid" style="margin-top:6px">${VACP.map(([k, l]) => box(k, l)).join("")}</div>
    </fieldset>
    <fieldset class="pw-sec"><legend>7. Exame</legend>
      <div class="pw-row">${num("pas", "PAS", {step: 1})}${num("pad", "PAD", {step: 1})}${num("fc", "FC", {step: 1})}${num("tax", "Tax (°C)", {step: "0.1"})}${num("peso", "Peso (kg)", {step: "0.1"})}</div>
      <div class="pw-row" style="margin-top:6px">${txt("mamas", "Mamas", "pega adequada, sem fissuras")}${txt("utero", "Útero", "involuído, indolor")}${txt("pontos", "Lóquios e pontos", "lóquios serosos, ferida limpa e seca")}</div>
    </fieldset>
    </div>
    <div class="actions" style="margin-top:6px"><button type="button" class="btn ghost sm" id="pp-reset">Limpar tudo</button></div>
    <div class="pw-jump" data-vis="ok"><button type="button" class="btn pri" id="pp-jump">Ver plano e evolução ↓</button></div>
  </div>
  <div class="pw-out" id="pp-out" aria-live="polite"></div>
</div>`;
  }
  const rd = root => { const o = {}; root.querySelectorAll("[data-w]").forEach(el => { o[el.dataset.w] = el.type === "checkbox" ? el.checked : el.value.trim(); }); return o; };
  const C = k => !!S[k];
  function plano(){
    const dp = pd(S.dparto), ref = hoje(), dias = Math.round((ref - dp) / DIA);
    const out = {urg: [], fazer: [], rx: [], orient: [], probs: []};
    const pas = N(S.pas), pad = N(S.pad), tax = N(S.tax), epds = N(S.epds), e10 = N(S.epds10);
    // urgências
    if ((ok(pas) && pas >= 160) || (ok(pad) && pad >= 110)) out.urg.push(it(`PA ${S.pas}x${S.pad}: hipertensão grave no puerpério – tratar e encaminhar à maternidade/urgência hoje`, "Betim", "pa-gestante"));
    if (C("q_cef") && ((ok(pas) && pas >= 140) || (ok(pad) && pad >= 90) || C("c_has"))) out.urg.push(it("Cefaleia/escotomas/epigastralgia com PA elevada ou pré-eclâmpsia: pré-eclâmpsia pós-parto até prova em contrário – urgência obstétrica", "Caderneta", "pa-gestante"));
    else if (C("q_cef")) out.fazer.push(it("Cefaleia forte no puerpério: aferir PA e investigar sinais neurológicos", "C"));
    if (C("q_tev")) out.urg.push(it("Suspeita de TEV (TVP/TEP): avaliação de urgência hoje", "Caderneta", "tvp"));
    if (C("q_sang") || S.loq === "alt") out.urg.push(it("Sangramento aumentado ou lóquios com odor: avaliar hemorragia tardia/endometrite – maternidade se sangramento ativo ou febre", "Caderneta"));
    if (C("q_febre") || (ok(tax) && tax >= 37.8)) out.urg.push(it("Febre no puerpério: procurar foco (endometrite, mastite, ferida, ITU, TEV); endometrite ou sepse → maternidade", "C"));
    if (C("h_ideac") || (ok(e10) && e10 >= 1)) out.urg.push(it("Ideação de se ferir ou ferir o bebê: avaliar risco hoje, não deixar sozinha; CERSAM/urgência psiquiátrica conforme o risco", "Betim", "risco-suicida"));
    // problemas e conduta
    if (C("q_mama")) out.fazer.push(it("Mama dolorosa e hiperemiada: avaliar mastite/abscesso, manter amamentação", "C", "mastite"));
    if (C("q_ferida")) out.fazer.push(it("Ferida/períneo alterado: avaliar infecção ou deiscência; secreção purulenta ou febre → antibiótico/maternidade", "C"));
    if (C("q_uri")) out.fazer.push(it("Sintomas urinários: EAS e urocultura; tratar conforme cultura (compatível com amamentação)", "C", "cistite"));
    if (C("q_iu") || C("q_if")) out.fazer.push(it("Incontinência: fisioterapia pélvica (eMulti/reabilitação)", "Betim", "pp-consulta"));
    if (C("d_fis") || C("d_prod") || S.am !== "ame") out.fazer.push(it("Dificuldade de amamentação: observar mamada, corrigir pega; banco de leite se persistir", "Caderneta", "amamentacao"));
    if (C("d_apoio") || C("d_mat")) out.fazer.push(it("Vulnerabilidade social ou sem rede de apoio: acionar ACS/eMulti e CRAS", "I"));
    if (ok(epds)){ if (epds >= 10) { out.probs.push(`EPDS ${epds}: rastreio positivo`); out.fazer.push(it(`EPDS ${epds} (≥ 10): avaliar depressão perinatal`, "EPDS", "pp-depressao")); } }
    else if (dias >= 14) out.fazer.push(it("Aplicar EPDS (corte ≥ 10)", "Betim", "pp-depressao"));
    if (C("h_trist") || C("h_ans")) out.fazer.push(it("Sintomas de humor além da 'tristeza materna' (> 2 semanas): avaliar depressão/ansiedade perinatal", "C", "pp-depressao"));
    // HAS / PE
    if (C("c_has") || C("c_pe_grave")){
      out.probs.push("Distúrbio hipertensivo da gestação");
      if (C("c_pe_grave")) out.fazer.push(it("Pré-eclâmpsia grave/HELLP: puerpério patológico – conferir seguimento no PNAR", "Betim", "pp-pos-gestacao-risco"));
      if (ok(pas) && ok(pad) && pas < 160 && pad < 110){ if (pas >= 140 || pad >= 90) out.fazer.push(it(`PA ${S.pas}x${S.pad}: ajustar anti-hipertensivo (compatível com amamentação) e reavaliar em até 7 dias`, "Betim", "pp-pos-gestacao-risco")); else out.fazer.push(it("PA < 140/90: se sustentada, reduzir/suspender anti-hipertensivo", "Betim", "pp-pos-gestacao-risco")); }
      else if (!ok(pas)) out.fazer.push(it("Aferir PA (seguimento: 5º–7º dia, ~40 dias e 12 semanas)", "Betim", "pp-pos-gestacao-risco"));
      out.fazer.push(it("Registrar como fator de risco cardiovascular; se HAS persistir após 12 semanas, investigar HAS crônica. Próxima gestação: AAS de 12–16 semanas", "Betim", "pp-pos-gestacao-risco"));
    } else if (ok(pas) && ok(pad) && (pas >= 140 || pad >= 90) && pas < 160 && pad < 110) out.fazer.push(it(`PA ${S.pas}x${S.pad} sem diagnóstico prévio: repetir; hipertensão pós-parto de novo – reavaliar em até 7 dias`, "C", "pp-pos-gestacao-risco"));
    // DMG
    if (C("c_dmg") || C("c_rn4kg")){
      const ini = dp + 42 * DIA, fim = dp + 56 * DIA;
      out.probs.push(C("c_dmg") ? "DMG" : "RN ≥ 4.000 g");
      out.fazer.push(it(`TOTG 75 g entre 6 e 8 semanas pós-parto: ${fd(ini)} a ${fd(fim)}${ref > fim ? " (janela passou: pedir agora)" : ""}; depois glicemia/HbA1c anual`, "Betim", "pp-pos-gestacao-risco"));
    }
    if (C("c_sif")) out.fazer.push(it("Sífilis na gestação: VDRL trimestral até 12 meses (mãe) e seguimento da criança exposta", "Betim", "in-sifilis"));
    out.fazer.push(it("Testagem rápida de HIV, sífilis e hepatites na consulta puerperal", "Betim", "pp-consulta"));
    if (C("cito_atr")) out.fazer.push(it(`Citopatológico em atraso: coletar a partir de 6–8 semanas pós-parto${dias < 42 ? " (agendar)" : ""}`, "Betim", "mu-colo"));
    // ferro
    if (dias < 91) out.rx.push(it(`Sulfato ferroso 40 mg de ferro elementar 1 vez ao dia até 3 meses pós-parto (${fd(dp + 91 * DIA)})${C("u_fe") ? " – manter" : " – prescrever"}`, "PNSF 2022"));
    if (C("c_anemia")) out.fazer.push(it("Anemia na gestação: hemograma de controle; se anemia, dose de tratamento", "C", "cr-ferro"));
    // contracepção
    const am = S.am || "ame", lamOk = am === "ame" && S.mens !== "volta" && dias < 180;
    if (S.met === "lam" && !lamOk) out.fazer.push(it("LAM deixou de valer (menstruação voltou, aleitamento não exclusivo ou ≥ 6 meses): iniciar outro método hoje", "OMS MEC", "pp-contracepcao"));
    if (S.met === "comb" && am !== "art" && dias < 180) out.fazer.push(it("Combinado em lactante < 6 meses: OMS categoria 4 antes de 6 semanas e 3 de 6 semanas a 6 meses – preferir só progestagênio, DIU ou implante", "OMS MEC", "pp-contracepcao"));
    if (S.met === "comb" && am === "art" && dias < 21) out.fazer.push(it("Combinado < 21 dias pós-parto (não amamenta): OMS categoria 4 – adiar", "OMS MEC", "pp-contracepcao"));
    if (S.met === "diu" && dias < 28) out.fazer.push(it("DIU de cobre: inserir a partir de 4 semanas pós-parto", "OMS MEC", "pp-contracepcao"));
    if (!S.met || S.met === "nenhum") out.fazer.push(it("Contracepção: discutir e iniciar método (implante e DIU são os mais eficazes; só progestagênio é compatível com amamentação)", "Betim", "pp-contracepcao"));
    // vacinas
    if (C("v_dtpa")) out.fazer.push(it("dTpa: aplicar o mais cedo possível no puerpério", "PNI", "pn-vacinas"));
    if (C("v_flu")) out.fazer.push(it("Influenza: puérpera até 45 dias pós-parto", "PNI", "pn-vacinas"));
    if (C("v_hb")) out.fazer.push(it("Completar esquema de hepatite B", "PNI", "pn-vacinas"));
    // retorno
    let ret;
    const paAlta = ok(pas) && ok(pad) && (pas >= 140 || pad >= 90);
    if (C("c_has") && dias < 30) ret = "Reavaliar PA em até 7 dias; consulta puerperal entre 30 e 40 dias";
    else if (C("c_has") && dias < 84) ret = `${paAlta ? "Reavaliar PA em até 7 dias; depois " : ""}PA com 12 semanas (${fd(dp + 84 * DIA)})`;
    else if (dias < 30) ret = `Consulta puerperal entre 30 e 40 dias (${fd(dp + 30 * DIA)} a ${fd(dp + 40 * DIA)})`;
    else if (ok(epds) && epds >= 10) ret = "Reavaliar humor em 2 semanas";
    else ret = "Seguimento de rotina (planejamento reprodutivo e rastreios); puericultura conforme calendário";
    return {dias, out, ret, lamOk, am};
  }
  const li = x => `<li>${esc(x.t)}${x.src ? ` <span class="pw-src">${esc(x.src)}</span>` : ""}${x.link ? ` <button type="button" class="golink pw-go" data-id="${esc(x.link)}">ver →</button>` : ""}</li>`;
  const bloco = (t, arr, cls) => arr.length ? `<div class="pw-b ${cls || ""}"><h4>${esc(t)}</h4><ul>${arr.map(li).join("")}</ul></div>` : "";
  const TIPO = {vaginal: "vaginal", cesarea: "cesárea", induzido: "vaginal induzido", forceps: "fórceps/vácuo"};
  const fase = d => d <= 10 ? "PUERPÉRIO IMEDIATO (1ª SEMANA)" : d <= 42 ? "PUERPÉRIO TARDIO" : "PUERPÉRIO REMOTO";
  function evolucao(R){
    const {dias, out} = R; const ces = S.tipo === "cesarea"; const L = [];
    const loq = {dim: "em diminuição progressiva, sem odor", rubra: "ainda rubros, em quantidade habitual", aus: "ausentes", alt: "aumentados e/ou com odor fétido"}[S.loq || "dim"];
    L.push(`CONSULTA DE ${fase(dias)}`, "", "S - Subjetivo");
    L.push(`Puérpera comparece à UBS${S.acomp ? " acompanhada de " + S.acomp : ""} para consulta de puerpério, atualmente com ${dias} dias pós-parto. Parto ${TIPO[S.tipo || "vaginal"]} em ${fd(pd(S.dparto))}, ${S.intercor ? "com " + S.intercor : "sem intercorrências"}. Recém-nascido em boas condições, acompanhamento pediátrico regular.`, "");
    const neg = [], ref = [];
    (C("q_sang") ? ref : neg).push("sangramento vaginal excessivo ou com odor fétido");
    (C("q_febre") ? ref : neg).push("febre");
    (C("q_dorab") ? ref : neg).push("dor abdominal ou lombar intensa");
    (C("q_tev") ? ref : neg).push("sinais de tromboembolismo (dor em membros inferiores, dispneia, dor torácica)");
    (C("q_uri") ? ref : neg).push("sintomas urinários (disúria, polaciúria, hematúria)");
    if (C("q_cef")) ref.push("cefaleia forte, escotomas ou dor epigástrica");
    L.push([ref.length ? `Refere ${ref.join("; ")}.` : "", neg.length ? `Nega ${neg.join("; ")}.` : "", `Loquiação ${loq}.`].filter(Boolean).join(" "), "");
    L.push(`${C("q_dorper") ? "Refere" : "Nega"} dor ${ces ? "em incisão de cesariana" : "perineal"}. Cicatrização ${C("q_ferida") ? "com intercorrências (secreção/deiscência/hiperemia)" : "adequada"}. ${C("q_iu") ? "Refere" : "Nega"} incontinência urinária. ${C("q_if") ? "Refere" : "Nega"} incontinência fecal.${S.ativ ? ` ${S.ativ === "sim" ? "Retomou" : "Não retomou"} atividades físicas leves.` : ""}`, "");
    L.push(`# Amamentação: Aleitamento materno ${({ame: "exclusivo", misto: "misto", art: "artificial"})[R.am]}. Refere-se ${C("d_fis") || C("d_prod") ? "com dificuldades" : "confortável"} em relação à amamentação. ${C("d_fis") ? "Refere dor durante a amamentação/fissuras mamilares." : "Nega dor durante amamentação, fissuras mamilares" + (C("q_mama") ? "." : " ou sinais de mastite.")}${C("q_mama") ? " Refere mama hiperemiada e dolorosa." : C("d_fis") ? " Nega sinais de mastite." : ""} Produção láctea ${C("d_prod") ? "percebida como insuficiente" : "adequada"}. Bebê ganhando peso adequadamente conforme acompanhamento pediátrico.`, "");
    L.push(`# Cuidados com o recém-nascido: Sente-se ${C("d_ins") ? "insegura" : "confiante"} nos cuidados com o bebê. Recém-nascido com pediatra de referência. Rede de apoio ${C("d_apoio") ? "ausente" : "presente"}. Necessidades materiais básicas (moradia, alimentação, fraldas) ${C("d_mat") ? "com dificuldades" : "supridas"}.`, "");
    const hneg = []; const href = [];
    (C("h_trist") ? href : hneg).push("tristeza persistente, choro fácil");
    (C("h_ans") ? href : hneg).push("ansiedade excessiva ou pensamentos negativos");
    L.push("# Humor e bem-estar emocional:", [href.length ? `Refere ${href.join(", ")}.` : "", hneg.length ? `Nega ${hneg.join(", ")}.` : "", `Sono ${C("h_sono") ? "muito prejudicado" : "preservado dentro do esperado"}. Apoio familiar/parceiro ${C("d_apoio") ? "ausente" : "presente"}.`, C("h_ideac") || (ok(N(S.epds10)) && N(S.epds10) >= 1) ? "REFERE ideação suicida ou pensamentos de causar dano ao bebê." : "Nega ideação suicida ou pensamentos de causar dano ao bebê.", S.epds ? `Aplicado EPDS: ${S.epds} pontos${S.epds10 ? " (item 10: " + S.epds10 + ")" : ""}.` : ""].filter(Boolean).join(" "), "");
    const metT = (MET.find(([v]) => v === S.met) || ["", ""])[1];
    L.push("# Sexualidade e contracepção:", [S.sex ? `${S.sex === "sim" ? "Retomou" : "Não retomou"} atividade sexual.` : "", `${C("q_disp") ? "Refere" : "Nega"} dispareunia.`, S.desejo ? `${S.desejo === "sim" ? "Deseja" : "Não deseja"} nova gestação no momento.` : "", S.espac ? `Planeja espaçamento de ${S.espac} para próxima gestação.` : "", `Método contraceptivo atual: ${S.met && S.met !== "" ? metT : "nenhum no momento"}.`, S.mens === "volta" ? "Menstruação já retornou." : "Em amenorreia desde o parto."].filter(Boolean).join(" "), "");
    const cg = [];
    if (C("c_dmg")) cg.push("Diabetes gestacional - TOTG 75 g pós-parto: ______");
    if (C("c_has") || C("c_pe_grave")) cg.push(`Distúrbio hipertensivo${C("c_pe_grave") ? " (pré-eclâmpsia grave/HELLP)" : ""} - PA hoje: ${S.pas && S.pad ? S.pas + "x" + S.pad + " mmHg" : "______"}`);
    if (C("c_rn4kg")) cg.push("RN macrossômico (≥ 4.000 g)");
    if (C("c_sif")) cg.push("Sífilis na gestação - seguimento com VDRL trimestral");
    if (C("c_anemia")) cg.push("Anemia na gestação");
    if (S.outras) cg.push(S.outras);
    L.push(`# Complicações gestacionais: ${cg.length ? "" : "Nega."}`, ...cg, "");
    L.push("# Condições crônicas:", `- Medicações em uso: ${[S.meds, C("u_fe") ? "sulfato ferroso 40 mg/dia" : ""].filter(Boolean).join(", ") || "nega"}.`, "");
    L.push("# Hábitos:", ({nega: "Nega uso de tabaco, álcool ou outras substâncias.", tab: "Refere tabagismo.", alc: "Refere uso de álcool.", out: "Refere uso de outras substâncias."})[S.hab || "nega"], "");
    L.push(`# Alergia medicamentosa: ${S.alerg || "Desconhece"}`, "-----", "O - Objetivo");
    L.push(`GPA: ${S.gpa || ""}`, `Data do parto: ${fd(pd(S.dparto))}`, `IG ao parto: ${S.igp ? S.igp + " semanas" : ""}`, `Tipo de Parto: ${TIPO[S.tipo || "vaginal"]}`, `APGAR: ${S.apgar || ""}`, `Peso e Estatura do RN: ${S.prn ? S.prn + " g" : ""}${S.ern ? " / " + S.ern + " cm" : ""}`, `TS RN: ${S.tsrn || ""}`);
    const vp = VACP.filter(([k]) => C(k)).map(([, l]) => l);
    L.push(`Vacinas puérpera: ${vp.length ? "pendências – " + vp.join("; ") : "conferidas, em dia"}`, `Exames/medicações: ${C("c_dmg") || C("c_rn4kg") ? "TOTG pós-parto; " : ""}testes rápidos (HIV, sífilis, hepatites B e C)`, "-----", "Exame Físico:");
    L.push(`PA: ${S.pas && S.pad ? S.pas + "x" + S.pad + " mmHg" : "____"} FC: ${S.fc || "___"} bpm Tax: ${S.tax || "___"} °C${S.peso ? " Peso: " + S.peso + " kg" : ""}`);
    L.push("BEG, colaborativa, orientada", "AR: MVA sem RA", "ACV: RCR em 2T / BNF sem sopros", `Mamas: ${S.mamas || (C("q_mama") ? "hiperemia e dor à palpação" : C("d_fis") ? "fissuras mamilares; técnica de amamentação revisada" : "técnica de amamentação adequada, sem fissuras, indolores")}`, `ABD: ${S.utero || "útero involuído, indolor"}, RHA+`, "Extremidades: sem edemas, TEC < 2s, panturrilhas livres", `Lóquios e pontos: ${S.pontos || (C("q_ferida") ? "ferida com sinais flogísticos – descrever" : `lóquios ${loq}; ${ces ? "ferida operatória limpa e seca" : "períneo íntegro/cicatrizado"}`)}`, "-----");
    L.push("A - Avaliação", fase(dias).charAt(0) + fase(dias).slice(1).toLowerCase().replace("(1ª semana)", "(1ª semana)"), ...out.probs.map(x => "- " + x), "-----", "P - Plano");
    out.urg.forEach(x => L.push("- " + x.t));
    L.push("- Orientações sobre aleitamento materno");
    if (dias < 91) L.push(`- Manter suplementação de ferro até 3 meses pós-parto (${fd(pd(S.dparto) + 91 * DIA)})`);
    out.fazer.forEach(x => L.push("- " + x.t));
    L.push("- Oriento sobre sinais de alerta materno e neonatal");
    if (R.lamOk && (!S.met || S.met === "lam" || S.met === "nenhum")) L.push("- Oriento que a amamentação só protege contra gravidez (LAM) enquanto houver amenorreia, aleitamento exclusivo em livre demanda e menos de 6 meses pós-parto; iniciar método contraceptivo assim que qualquer critério falhar");
    else if (S.met && !["", "nenhum", "lam"].includes(S.met)) L.push(`- Método contraceptivo: ${metT}; preservativo para prevenção de IST`);
    L.push(`- Retorno: ${R.ret}`, "- Oriento paciente sobre o caso e esclareço dúvidas - paciente afirma compreender", "- Oriento quais e como identificar sinais de alarme, gravidade e busca imediata por atendimento em caso de algum sinal", "- Certifico que paciente compreende corretamente e concorda com orientações e conduta");
    return L.join("\n");
  }
  function receita(R){
    const L = [];
    if (R.dias < 91) L.push("USO ORAL", "1. Sulfato ferroso 40 mg de ferro elementar ______ 90 comprimidos", `   Tomar 1 comprimido 1 vez ao dia até ${fd(pd(S.dparto) + 91 * DIA)} (3 meses pós-parto).`);
    if (S.met === "prog") L.push(L.length ? "" : "USO ORAL", `${L.filter(x => /^\d\./.test(x)).length + 1}. Noretisterona 0,35 mg ______ 3 cartelas`, "   Tomar 1 comprimido por dia, sempre no mesmo horário, sem pausa entre as cartelas. [dose: conferir na bula]");
    if (S.met === "inj3") L.push("", "USO INTRAMUSCULAR", "1. Medroxiprogesterona 150 mg/mL ______ 1 ampola", "   Aplicar 1 ampola IM profunda a cada 12 semanas. [dose: conferir na bula]");
    return L.join("\n").trim() || "Sem prescrição de rotina.";
  }
  function render(root){
    S = rd(root);
    const dp = pd(S.dparto), ref = hoje(); const okD = dp != null && ref >= dp && ref - dp < 366 * DIA;
    root.querySelectorAll("[data-vis]").forEach(el => { el.hidden = !(el.dataset.vis === "ok" && okD); });
    const id = root.querySelector("#pp-dias"), O = root.querySelector("#pp-out");
    if (!okD){ id.textContent = ""; O.innerHTML = `<div class="pw-empty"><b>Informe a data do parto</b> para montar a consulta.</div>`; return; }
    const R = plano();
    id.innerHTML = `<b>${R.dias} dias pós-parto</b> · ${fase(R.dias).toLowerCase()}`;
    O.innerHTML = `<div class="pw-head"><span><b>${R.dias} dias</b> pós-parto</span><span>Retorno: <b>${esc(R.ret)}</b></span></div>
      ${R.out.urg.length ? `<div class="pw-b urg"><h4>Agora</h4><ul>${R.out.urg.map(li).join("")}</ul></div>` : ""}
      ${bloco("Fazer nesta consulta", R.out.fazer)}
      ${bloco("Suplementação", R.out.rx)}
      <div class="pw-b"><h4>Evolução</h4><textarea class="fill mono pw-ta" id="pp-evo" aria-label="Evolução gerada">${esc(evolucao(R))}</textarea>
      <div class="actions" style="margin-top:8px"><button type="button" class="btn pri sm" id="pp-cp">Copiar evolução</button></div>
      <p class="hint" style="margin:6px 0 0">No seu modelo de puerpério tardio. Exame físico sai como padrão normal: corrija o que estiver diferente antes de copiar.</p></div>
      <div class="pw-b"><h4>Receita</h4><textarea class="fill mono pw-ta" id="pp-rec" aria-label="Receita gerada">${esc(receita(R))}</textarea>
      <div class="actions" style="margin-top:8px"><button type="button" class="btn sm" id="pp-cprec">Copiar receita</button></div></div>
      <p class="hint">Fontes: Protocolo Pré-natal e Puerpério de Betim 2024 (consulta 30–40 dias, TOTG 6–8 semanas, seguimento da pré-eclâmpsia, testes rápidos), PNSF 2022 (ferro), Caderneta da Gestante (sinais de alerta), OMS MEC 2025 (contracepção).</p>`;
    O.querySelectorAll(".pw-ta").forEach(grow);
  }
  function init(root){
    const box = root.querySelector("#ppw"); if (!box) return;
    box.querySelectorAll("[data-w]").forEach(el => { const v = S[el.dataset.w]; if (v === undefined) return; if (el.type === "checkbox") el.checked = !!v; else el.value = v; });
    box.addEventListener("input", ev => { if (!ev.target.classList.contains("pw-ta")) render(box); });
    box.addEventListener("change", ev => { if (!ev.target.classList.contains("pw-ta")) render(box); });
    box.addEventListener("click", ev => { const t = ev.target.closest("button"); if (!t) return;
      if (t.id === "pp-cp") copy(box.querySelector("#pp-evo").value, "Evolução");
      if (t.id === "pp-cprec") copy(box.querySelector("#pp-rec").value, "Receita");
      if (t.id === "pp-jump"){ const o = box.querySelector("#pp-out"); if (o && o.scrollIntoView) o.scrollIntoView({behavior: "smooth", block: "start"}); }
      if (t.id === "pp-reset"){ S = {}; box.querySelectorAll("[data-w]").forEach(el => { if (el.type === "checkbox") el.checked = false; else el.value = el.tagName === "SELECT" ? el.options[0].value : ""; }); render(box); } });
    render(box);
  }
  return {html, init};
})();
