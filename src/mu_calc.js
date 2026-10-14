// ── calculadoras da Saúde da Mulher
const MEC_M = ["Combinado (pílula/injetável mensal)", "Pílula de progestagênio", "Trimestral (DMPA)", "Implante", "DIU-LNG", "DIU de cobre"];
const MEC_C = [
  ["fum15", "≥ 35 anos e fuma < 15 cigarros/dia", ["3","1","1","1","1","1"]],
  ["fum15m", "≥ 35 anos e fuma ≥ 15 cigarros/dia", ["4","1","1","1","1","1"]],
  ["hasc", "HAS controlada ou PA 140–159/90–99", ["3","1","2","1","1","1"]],
  ["has160", "PA ≥ 160/100", ["4","2","3","2","2","1"]],
  ["cvmult", "Múltiplos fatores de risco cardiovascular", ["3/4","2","3","2","2","1"]],
  ["dac", "Doença coronariana ou AVC prévio", ["4","2/3","3","2/3","2/3","1"]],
  ["tev", "TEV prévio (sem anticoagulação, alto risco de recorrência)", ["4","2","3","2","2","1"]],
  ["trombof", "Trombofilia conhecida (fator V de Leiden, protrombina)", ["4","2","2","2","2","1"]],
  ["aura", "Enxaqueca com aura", ["4","1","1","1","1","1"]],
  ["semaura", "Enxaqueca sem aura", ["2","1","1","1","1","1"]],
  ["les", "LES com antifosfolípide positivo ou desconhecido", ["4","2","3","2","2","1"]],
  ["amam21", "Amamentando, < 21 dias pós-parto", ["4","2","2","2","2","2"]],
  ["amam30", "Amamentando, 21 a < 30 dias", ["3","2","2","2","2","2"]],
  ["pp21", "Pós-parto sem amamentar, < 21 dias", ["4","1","1","1","2","2"]],
  ["bariat", "Cirurgia bariátrica disabsortiva", ["3","3","1","1","1","1"]],
  ["obes", "Obesidade (IMC ≥ 30)", ["2","1","1","1","1","1"]],
  ["indutor", "Anticonvulsivante indutor ou rifampicina", ["3","3","1","2","1","1"]],
  ["lamo", "Lamotrigina em monoterapia", ["3","1","1","1","1","1"]],
  ["mama", "Câncer de mama atual", ["4","4","4","4","4","1"]],
  ["dip", "DIP, cervicite purulenta, clamídia ou gonorreia atual", ["1","1","1","1","4","4"]],
  ["sang", "Sangramento vaginal inexplicado (antes de avaliar)", ["2","2","3","3","4","4"]],
  ["cavid", "Cavidade uterina distorcida (mioma submucoso, malformação)", ["1","1","1","1","4","4"]],
  ["adol", "Adolescente (< 18 anos)", ["1","1","2","1","2","2"]]
];
const MEC_F = {has160:"F",cvmult:"F",tev:"F",aura:"F",les:"F",amam21:"F",amam30:"F",mama:"F"};
const mecN = s => Math.max(...String(s).split("/").map(Number));
Object.assign(CALCS, {
 mec: {nome: "Critérios de elegibilidade (MEC rápido)",
  desc: "Marque as condições da paciente. A tabela mostra a categoria mais restritiva por método (US MEC 2024; interações e alguns métodos não hormonais [C]).",
  html: () => `<div class="cchk">${MEC_C.map(([k,l]) => chk(k, l)).join("")}</div>`,
  run(el){
   const on = MEC_C.filter(([k]) => V(el,k) === 1);
   if (!on.length) return saida(el, vazio("Marque ao menos uma condição."));
   const cat = MEC_M.map((m,j) => on.reduce((a,[,,v]) => mecN(v[j]) > mecN(a) ? v[j] : a, "1"));
   const lbl = {1:"Sem restrição", 2:"Benefício > risco", 3:"Evitar (só sem alternativa)", 4:"Não usar"};
   const rows = MEC_M.map((m,j) => `<tr><td>${esc(m)}</td><td><span class="mecc c${mecN(cat[j])}">${esc(cat[j])}</span> ${esc(lbl[mecN(cat[j])])}</td></tr>`).join("");
   const prov = on.every(([k]) => MEC_F[k]) ? "F" : "C";
   const melhor = MEC_M.filter((m,j) => mecN(cat[j]) <= 2);
   saida(el, `<div class="gtw"><table class="gt"><thead><tr><th>Método</th><th>Categoria</th></tr></thead><tbody>${rows}</tbody></table></div><p class="gnote">Condições: ${esc(on.map(x=>x[1]).join("; "))}. Fonte: US MEC 2024 <span class="lab ${prov}">${prov}</span>. Categoria 3/4 ou 2/3: depende do grau ou de iniciar × manter.</p>`,
    `MEC (US MEC 2024) para: ${on.map(x=>x[1]).join("; ")}. Categorias – ${MEC_M.map((m,j)=>`${m}: ${cat[j]}`).join("; ")}. Opções categoria 1–2: ${melhor.join(", ") || "nenhuma"}.`); }},
 colo: {nome: "Rastreio do colo: próximo passo",
  desc: "Conduta inicial na APS pelo resultado (DNA-HPV: INCA 2025; citologia: INCA 2016).",
  html: () => `<div class="cgrid">${sel("res","Resultado",[["","— escolha —"],["h_neg","DNA-HPV: não detectado"],["h_1618","DNA-HPV: 16 e/ou 18"],["h_out_cneg","DNA-HPV: outros tipos + citologia reflexa normal"],["h_out_cpos","DNA-HPV: outros tipos + citologia ≥ ASC-US ou insatisfatória"],["h_rep_neg","DNA-HPV de 12 meses: não detectado"],["h_rep_pos","DNA-HPV de 12 meses: outros tipos ainda presentes"],["h_inv","DNA-HPV: inválido"],["c_neg","Citologia: negativa"],["c_ascus","Citologia: ASC-US"],["c_lsil","Citologia: LSIL"],["c_alto","Citologia: ASC-H, AGC, AOI, HSIL, AIS ou carcinoma"],["c_insat","Citologia: insatisfatória"],["c_rep_neg","Citologia de repetição (após ASC-US/LSIL): negativa"],["c_rep_alt","Citologia de repetição: alteração persiste"]])}${fld("idade","Idade",{step:1})}</div><div class="cchk">${chk("imuno","Imunossuprimida ou HIV")}${chk("doisneg","Já tem 2 citologias anuais negativas consecutivas")}</div>`,
  run(el){
   const r = Sv(el,"res"), id = V(el,"idade"), im = V(el,"imuno") === 1, dn = V(el,"doisneg") === 1;
   if (!r) return saida(el, vazio("Escolha o resultado."));
   if (!(id > 0) && /^(h_neg|c_neg|c_ascus|c_lsil)$/.test(r)) return saida(el, vazio("Informe a idade."));
   const C = "colposcopia"; let t, k = "warn";
   switch (r){
    case "h_neg": t = id < 25 && !im ? "Abaixo de 25 anos: desconsiderar o resultado e iniciar o rastreio aos 25 [F]." : im ? "Repetir DNA-HPV em 3 anos; não encerrar por idade [F]." : id >= 60 ? "≥ 60 anos com teste negativo: encerrar o rastreio, se sem lesão de alto grau prévia [F]." : "Repetir DNA-HPV em 5 anos [F]."; k = "ok"; break;
    case "h_1618": t = `Encaminhar para ${C} [F].`; k = "stop"; break;
    case "h_out_cneg": t = im ? `Imunossuprimida com qualquer HPV positivo: ${C} [F].` : "Repetir DNA-HPV em 12 meses [F]."; k = im ? "stop" : "warn"; break;
    case "h_out_cpos": t = `Encaminhar para ${C} [F].`; k = "stop"; break;
    case "h_rep_neg": t = im ? "Volta ao intervalo de 3 anos [F]." : "Volta ao rastreio a cada 5 anos [F]."; k = "ok"; break;
    case "h_rep_pos": t = `Se 16/18 ou citologia ≥ ASC-US: ${C}. Outros tipos persistindo por 24 meses: ${C}, qualquer que seja a citologia [F].`; k = "stop"; break;
    case "h_inv": t = "Nova coleta por profissional de saúde e repetir o teste [F]."; break;
    case "c_neg": t = im ? "Semestral no 1º ano e depois anual (semestral se CD4 < 200) [F]." : id >= 64 && dn ? "≥ 64 anos com 2 negativos nos últimos 5 anos: encerrar o rastreio [F]." : dn ? "Repetir em 3 anos [F]." : "Repetir em 1 ano; após 2 anuais negativas, a cada 3 anos [F]."; k = "ok"; break;
    case "c_ascus": t = id < 25 ? "Repetir em 3 anos [F]." : id < 30 ? "Repetir a citologia em 12 meses [F]." : "Repetir a citologia em 6 meses [F]."; break;
    case "c_lsil": t = id < 25 ? "Repetir em 3 anos [F]." : "Repetir a citologia em 6 meses [F]."; break;
    case "c_alto": t = `Encaminhar para ${C} [F].`; k = "stop"; break;
    case "c_insat": t = "Repetir em 6–12 semanas, corrigindo a causa (ex.: tratar infecção, estrogênio tópico se atrofia) [C]."; break;
    case "c_rep_neg": t = "Se for a 2ª repetição negativa consecutiva, volta à rotina trienal; se for a 1ª, repetir mais uma vez no mesmo intervalo [F]."; k = "ok"; break;
    case "c_rep_alt": t = `Alteração igual ou mais grave na repetição: ${C} [F].`; k = "stop"; break;
   }
   const extra = im && /^c_(ascus|lsil)$/.test(r) ? " Em imunossuprimidas, considerar colposcopia já na primeira alteração [C]." : "";
   saida(el, `<div class="fn ${k}" style="padding:10px 12px;border:1px solid;border-radius:10px">${fmt(t + extra)}</div>`, `Rastreio do colo – resultado: ${el.querySelector('[data-k="res"]').selectedOptions[0].text}${id>0?`, ${id} anos`:""}${im?", imunossuprimida":""}. Conduta: ${(t+extra).replace(/\s*\[[FCI]\]/g,"")}`); }},
 pilula: {nome: "Pílula esquecida: o que fazer",
  desc: "Recomendações práticas (CDC SPR 2024) para pílula combinada com 30–35 µg de etinilestradiol e pílulas só de progestagênio.",
  html: () => `<div class="cgrid">${sel("tipo","Pílula",[["coc","Combinada (21 ativas)"],["pop","Noretisterona 0,35 mg"],["deso","Desogestrel 75 µg"]])}${fld("n","Pílulas esquecidas",{min:0,step:1,ph:"combinada: nº de dias"})}${sel("sem","Semana da cartela",[["1","1ª (dias 1–7)"],["2","2ª (dias 8–14)"],["3","3ª (dias 15–21)"]])}${fld("h","Atraso (horas)",{min:0,step:1,ph:"só progestagênio"})}</div><div class="cchk">${chk("rel","Relação desprotegida nos últimos 5 dias")}</div>`,
  run(el){
   const tipo = Sv(el,"tipo"), n = V(el,"n"), sem = Sv(el,"sem"), h = V(el,"h"), rel = V(el,"rel") === 1; let t;
   if (tipo === "coc"){
    if (!(n >= 0)) return saida(el, vazio("Informe quantas pílulas foram esquecidas."));
    if (n === 0) t = "Atraso < 24 h: tomar assim que lembrar e seguir normalmente; sem proteção extra.";
    else if (n === 1) t = "Tomar a pílula esquecida já (pode tomar 2 no mesmo dia) e seguir a cartela. Não precisa de proteção extra.";
    else t = `Tomar a última esquecida já, descartar as outras e seguir a cartela. Preservativo ou abstinência até 7 dias seguidos de pílulas ativas.${sem === "3" ? " Como foi na 3ª semana: terminar as ativas e emendar a próxima cartela, sem pausa." : ""}${sem === "1" && rel ? " Como foi na 1ª semana com relação nos últimos 5 dias: oferecer contracepção de emergência." : ""}`;
   } else {
    const lim = tipo === "deso" ? 12 : 3;
    if (!(h >= 0)) return saida(el, vazio("Informe o atraso em horas."));
    t = h <= lim ? `Atraso de até ${lim} h: tomar e seguir normalmente.` : `Atraso > ${lim} h: tomar já e seguir; preservativo por 2 dias.${rel ? " Relação desprotegida recente: oferecer contracepção de emergência." : ""}`;
   }
   saida(el, `<div>${esc(t)} <span class="lab C">C</span></div>`, `Pílula esquecida – conduta: ${t}`); }},
 ae: {nome: "Contracepção de emergência: qual opção",
  desc: "DIU de cobre é o mais eficaz até 5 dias; levonorgestrel perde eficácia com o tempo, com indutores enzimáticos e com peso elevado (FSRH).",
  html: () => `<div class="cgrid">${fld("h","Horas desde a relação",{min:0,step:1})}${fld("kg","Peso",{ph:"kg (opcional)"})}</div><div class="cchk">${chk("ind","Usa indutor enzimático (carbamazepina, fenitoína, rifampicina, efavirenz…)")}${chk("diu","Aceita DIU de cobre")}${chk("hormo","Quer iniciar método hormonal logo")}</div>`,
  run(el){
   const h = V(el,"h"), kg = V(el,"kg"), ind = V(el,"ind") === 1, diu = V(el,"diu") === 1, hor = V(el,"hormo") === 1;
   if (!(h >= 0)) return saida(el, vazio("Informe as horas desde a relação."));
   const L = [];
   if (h > 120) L.push("Mais de 120 h: fora da janela das pílulas. DIU de cobre ainda pode ser inserido até 5 dias após a ovulação estimada. Teste de gravidez se atraso menstrual; iniciar método regular.");
   else {
    if (diu) L.push("**1ª escolha: DIU de cobre** (falha < 0,1%; mantém-se como método) [C].");
    if (ind) L.push("Indutor enzimático: preferir DIU de cobre; se não, levonorgestrel **3 mg** (dose dupla: 4 cp de 0,75 mg) [NV]. Ulipristal não é recomendado com indutores [C].");
    else if (h <= 72) L.push(`Levonorgestrel 1,5 mg dose única (REMUME: 2 cp de 0,75 mg juntos) [NV].${kg > 70 ? " Peso > 70 kg: eficácia possivelmente menor – considerar dose dupla (FSRH) ou ulipristal [C]." : ""}`);
    else L.push("Entre 72 e 120 h: ulipristal 30 mg (comprar; dose [NV]) é mais eficaz que levonorgestrel; levonorgestrel ainda pode ser usado, com eficácia menor [C].");
    if (hor) L.push("Após levonorgestrel: iniciar o hormonal no mesmo dia + preservativo 7 dias. Após ulipristal: esperar 5 dias para iniciar o hormonal [C].");
    L.push("Teste de gravidez se a menstruação atrasar > 7 dias. Relação não consentida: seguir o fluxo de violência sexual (PEP ≤ 72 h).");
   }
   saida(el, `<ul style="margin:0;padding-left:18px">${L.map(x=>`<li>${fmt(x)}</li>`).join("")}</ul>`, `Contracepção de emergência (${h} h): ${L.join(" ").replace(/\*\*/g,"").replace(/\s*\[[FC]\]/g,"")}`); }}
});
SC.push(
 {id:"ferriman", nome:"Ferriman-Gallwey modificado (hirsutismo)", itens:[
   "Lábio superior","Queixo","Tórax","Abdome superior","Abdome inferior","Braços","Coxas","Dorso superior","Dorso inferior"
  ].map(t => ({t, sel: opt([["0 – sem pelos terminais",0],["1 – mínimo",1],["2 – leve",2],["3 – moderado",3],["4 – intenso (padrão masculino)",4]])})),
  interp: s => s >= 8 ? "≥ 8: hirsutismo pelo corte clássico; investigar hiperandrogenismo (SOP e outras causas)." : s >= 4 ? "4–7: hirsutismo possível – a diretriz de SOP de 2023 aceita cortes de 4–6 conforme a etnia; correlacionar com queixa e exames." : "< 4: sem hirsutismo pelo escore.",
  nota:"Avaliar pelos terminais antes de depilação recente. Cortes variam por etnia (diretriz internacional de SOP, 2023)."},
 {id:"mrs", nome:"Menopause Rating Scale (MRS)", itens:[
   "Ondas de calor, suor","Desconforto no coração (batimento, aperto)","Problemas de sono","Humor depressivo","Irritabilidade","Ansiedade","Esgotamento físico e mental","Problemas sexuais","Problemas na bexiga","Ressecamento vaginal","Desconforto nas articulações e músculos"
  ].map(t => ({t, sel: opt([["— responda —",null],["Nenhum",0],["Leve",1],["Moderado",2],["Forte",3],["Muito forte",4]])})), exige:true,
  interp: s => s >= 17 ? "≥ 17: sintomas graves." : s >= 9 ? "9–16: sintomas moderados." : s >= 5 ? "5–8: sintomas leves." : "0–4: ausentes ou mínimos.",
  nota:"Útil para medir a resposta ao tratamento (repetir em 3 meses). Pontos de corte usuais de Heinemann et al. [NV – conferir na validação brasileira]."}
);
CALC_MENU.push(["mec","MEC rápido (contracepção)"],["colo","Rastreio do colo: próximo passo"],["pilula","Pílula esquecida"],["ae","Contracepção de emergência"],["sc:ferriman","Ferriman-Gallwey"],["sc:mrs","Menopause Rating Scale"]);
