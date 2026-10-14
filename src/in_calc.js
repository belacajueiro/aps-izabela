// ── calculadoras de infectologia na APS
Object.assign(CALCS, {
 vdrl: {nome: "Sífilis: seguimento do VDRL",
  desc: "Compara o título do dia do tratamento com o atual (PCDT IST 2020). Só vale com o mesmo método (VDRL ou RPR).",
  html: () => `<div class="cgrid">${fld("t0","Título no tratamento (1:x)",{min:1,step:1,ph:"ex.: 64"})}${fld("t1","Título atual (1:x)",{min:0,step:1,ph:"0 se não reagente"})}${fld("m","Meses desde o tratamento",{min:0,step:1})}${sel("est","Estágio tratado",[["rec","Recente (≤ 1 ano)"],["tar","Tardia ou ignorada"]])}</div><div class="cchk">${chk("exp","Nova exposição de risco desde o tratamento")}${chk("sint","Sinais/sintomas persistentes ou recorrentes")}${chk("hiv","Pessoa vivendo com HIV")}</div>`,
  run(el){
   const a = V(el,"t0"), b = V(el,"t1"), m = V(el,"m"), tar = Sv(el,"est") === "tar", exp = V(el,"exp") === 1, s = V(el,"sint") === 1, hiv = V(el,"hiv") === 1;
   if (!(a >= 1 && b >= 0 && m >= 0)) return saida(el, vazio("Informe os dois títulos e os meses desde o tratamento."));
   const d = b === 0 ? Infinity : Math.log2(a/b), lim = tar ? 12 : 6; let t, k;
   const dTxt = b === 0 ? "não reagente" : d >= 0 ? `queda de ${nF(Math.round(d*10)/10)} diluição(ões)` : `aumento de ${nF(Math.round(-d*10)/10)} diluição(ões)`;
   const neuro = hiv ? " PVHIV: investigar neurossífilis (punção lombar) em todo retratamento." : "";
   if (s){ t = "Sinais clínicos persistentes/recorrentes: retratar e avaliar neurossífilis." + neuro; k = "stop"; }
   else if (d <= -2){ t = (exp ? "Aumento ≥ 2 diluições com nova exposição: reinfecção – retratar, testar e tratar parcerias, notificar." : "Aumento ≥ 2 diluições sem nova exposição: falha – investigar neurossífilis (punção lombar) e retratar.") + neuro; k = "stop"; }
   else if (d >= 2){ t = b === 0 ? "Negativou: resposta adequada. Manter seguimento trimestral até 12 meses." : `Resposta adequada (queda ≥ 2 diluições). Manter VDRL trimestral até 12 meses; título baixo que persiste estável depois disso, sem nova exposição, é cicatriz sorológica – não retratar.`; k = "ok"; }
   else if (m >= lim){ t = `Sem queda de 2 diluições em ${lim} meses (${tar ? "tardia" : "recente"}): resposta inadequada – retratar (avaliar neurossífilis se não houver nova exposição).` + neuro; k = "stop"; }
   else { t = `Ainda dentro do prazo (${lim} meses para ${tar ? "tardia" : "recente"}). Variação de 1 diluição não tem significado; repetir VDRL em 3 meses.`; k = "warn"; }
   saida(el, kv([["Variação", `<span class="big">${esc(dTxt)}</span>`], ["Conduta", `<div class="fn ${k}" style="padding:8px 10px;border:1px solid;border-radius:8px">${esc(t)} <span class="lab F">F</span></div>`]]), `Sífilis ${tar ? "tardia" : "recente"}: título 1:${a} no tratamento → ${b === 0 ? "não reagente" : "1:" + b} após ${m} meses (${dTxt}). ${t}`); }},
 rhze: {nome: "Tuberculose: esquema básico por peso",
  desc: "≥ 10 anos (Manual MS 2019; quadro da NI SMS-SP 07/23, manutenção com RH 300/150 'dose plena'). Crianças < 10 anos: esquema RHZ pediátrico.",
  html: () => `<div class="cgrid">${fld("peso","Peso",{ph:"kg"})}${fld("idade","Idade",{step:1})}</div>`,
  run(el){
   const p = V(el,"peso"), id = V(el,"idade");
   if (!(p > 0)) return saida(el, vazio("Informe o peso."));
   if (id > 0 && id < 10) return saida(el, `<div class="fn warn" style="padding:10px 12px;border:1px solid;border-radius:10px">Menor de 10 anos: esquema RHZ pediátrico (comprimidos dispersíveis, REMUME) – conferir a tabela por peso do Manual de TB <span class="lab NV">NV</span>.</div>`, "Criança < 10 anos: usar esquema pediátrico (conferir Manual de TB).");
   if (p < 20) return saida(el, vazio("Peso < 20 kg: fora das faixas do esquema básico – conferir Manual de TB."));
   const f = p <= 35 ? [2, "1 cp de RH 300/150"] : p <= 50 ? [3, "1 cp de RH 300/150 + 1 cp de RH 150/75"] : p <= 70 ? [4, "2 cp de RH 300/150"] : [5, "2 cp de RH 300/150 + 1 cp de RH 150/75"];
   const L = [["Ataque (2 meses)", `<span class="big">${f[0]} cp de RHZE</span> 150/75/400/275 mg, 1×/dia em jejum <span class="lab F">F</span>`], ["Manutenção (4 meses)", `${f[1]}, 1×/dia <span class="lab F">F</span>`], ["Lembrar", "Notificar no Sinan, TDO, HIV e glicemia, contatos; reajustar a dose se o peso mudar."]];
   saida(el, kv(L), `Tuberculose, ${nF(p)} kg: ataque RHZE 150/75/400/275 ${f[0]} comprimidos/dia por 2 meses; manutenção ${f[1]}/dia por 4 meses.`); }},
 iltb: {nome: "ILTB: dose do tratamento preventivo",
  desc: "SES-MG Nota Técnica Conjunta 1/2023. 3HP é o preferencial (12 doses semanais). Excluir TB ativa antes.",
  html: () => `<div class="cgrid">${fld("peso","Peso",{ph:"kg"})}${fld("idade","Idade",{step:1})}${sel("esq","Esquema",[["3hp","3HP – isoniazida + rifapentina semanal"],["4r","4R – rifampicina diária"],["6h","6H/9H – isoniazida diária"]])}</div>`,
  run(el){
   const p = V(el,"peso"), id = V(el,"idade"), e = Sv(el,"esq");
   if (!(p > 0 && id >= 0)) return saida(el, vazio("Informe peso e idade."));
   const crianca = id <= 14; let L = [], txt;
   if (e === "3hp"){
     if (!crianca && p >= 30){ L = [["Isoniazida", `<span class="big">900 mg</span> (3 cp de 300 mg) 1×/semana <span class="lab F">F</span>`], ["Rifapentina", `<span class="big">900 mg</span> (6 cp de 150 mg) 1×/semana <span class="lab F">F</span>`]]; txt = "3HP adulto: isoniazida 900 mg + rifapentina 900 mg 1×/semana, 12 doses em 12–15 semanas"; }
     else if (p < 10) return saida(el, vazio("Peso < 10 kg: 3HP fora das faixas da nota – usar outro esquema (conferir)."));
     else { const b = p <= 15 ? [300, 300] : p <= 23 ? [500, 450] : p <= 30 ? [600, 600] : [700, 750];
       L = [["Isoniazida", `<span class="big">${b[0]} mg</span> 1×/semana <span class="lab F">F</span>`], ["Rifapentina", `<span class="big">${b[1]} mg</span> 1×/semana (cp de 150 mg) <span class="lab F">F</span>`], ["Atenção", "Idade mínima e apresentação pediátrica: conferir na nota <span class=\"lab NV\">NV</span>"]];
       txt = `3HP pediátrico (${nF(p)} kg): isoniazida ${b[0]} mg + rifapentina ${b[1]} mg 1×/semana, 12 doses`; }
     L.push(["Duração", "12 doses semanais em 12–15 semanas; abandono = 3 doses perdidas"]);
   } else if (e === "4r"){
     const mg = Math.min(600, Math.round(p*(crianca ? 15 : 10)));
     L = [["Rifampicina", `<span class="big">${mg} mg/dia</span> (${crianca ? "15 (10–20) mg/kg" : "10 mg/kg"}, máx. 600 mg) <span class="lab F">F</span>`], ["Duração", "120 doses em 4–6 meses; abandono = 2 meses sem medicação"]];
     txt = `4R: rifampicina ${mg} mg/dia, 120 doses em 4–6 meses`;
   } else {
     const lo = Math.min(300, Math.round(p*5)), hi = Math.min(300, Math.round(p*10));
     L = [["Isoniazida", `<span class="big">${lo === hi ? lo : lo + "–" + hi} mg/dia</span> (5–10 mg/kg, máx. 300 mg) <span class="lab F">F</span>`], ["Duração", "6H: 180 doses em 6–9 meses; 9H (mais eficaz): 270 doses em 9–12 meses; abandono = 3 meses sem medicação"]];
     txt = `6H/9H: isoniazida ${lo === hi ? lo : lo + "–" + hi} mg/dia`;
   }
   L.push(["Lembrar", "Excluir TB ativa (sintomas + RX); notificar no IL-TB; rifamicinas interagem com contraceptivos, antirretrovirais e anticoagulantes."]);
   saida(el, kv(L), `ILTB (${nF(p)} kg, ${id} anos): ${txt}. Notificar no IL-TB.`); }},
 apri: {nome: "APRI (fibrose na hepatite C)",
  desc: "APRI = (AST ÷ limite superior da AST) ÷ plaquetas (×10⁹/L) × 100. PCDT Hepatite C 2026: APRI < 1 sem cirrose pode tratar na APS.",
  html: () => `<div class="cgrid">${fld("ast","AST (TGO)",{ph:"U/L"})}${fld("lsn","Limite superior da AST",{ph:"U/L (ex.: 40)"})}${fld("plq","Plaquetas",{ph:"mil/µL (ex.: 220)"})}</div>`,
  run(el){ const ast = V(el,"ast"), lsn = V(el,"lsn"), plq = V(el,"plq");
   if (!(ast > 0 && lsn > 0 && plq > 0)) return saida(el, vazio("Informe AST, limite superior e plaquetas."));
   const a = ast/lsn/plq*100, r = Math.round(a*100)/100;
   const it = a < 1 ? "APRI < 1: sem fibrose avançada provável – hepatite C pode ser tratada na APS (sofosbuvir + daclatasvir 12 semanas), se não houver outro critério de especialista [F]." : a < 2 ? "APRI 1–2: fibrose significativa possível – sofosbuvir/velpatasvir 12 semanas, com especialista [F]." : "APRI ≥ 2: alta probabilidade de cirrose – avaliar Child-Pugh, rastrear CHC/varizes e encaminhar [C].";
   saida(el, kv([["APRI", `<span class="big">${r.toLocaleString("pt-BR")}</span>`], ["Interpretação", fmt(it)]]), `APRI ${r.toLocaleString("pt-BR")}: ${it.replace(/\s*\[[FC]\]/g,"")}`); }}
});
CALC_MENU.push(["vdrl","Sífilis: seguimento do VDRL"],["rhze","TB: RHZE por peso"],["iltb","ILTB: 3HP, 4R, 6H"],["apri","APRI (hepatite C)"]);
