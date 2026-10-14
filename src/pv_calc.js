// ── calculadoras de prevenção e saúde do homem
Object.assign(CALCS, {
 macos: {nome: "Carga tabágica (maços-ano) e TC de baixa dose",
  desc: "Maços-ano = (cigarros por dia ÷ 20) × anos de tabagismo. Elegibilidade pelos critérios da USPSTF 2021 (sem programa no SUS).",
  html: () => `<div class="cgrid">${fld("cig","Cigarros por dia",{min:0,step:1})}${fld("anos","Anos fumando",{min:0,step:1})}${fld("idade","Idade",{step:1})}${fld("parou","Parou há (anos)",{min:0,step:1,ph:"0 se fuma"})}</div>`,
  run(el){
   const c = V(el,"cig"), a = V(el,"anos"), id = V(el,"idade"), p = okN(V(el,"parou")) ? V(el,"parou") : 0;
   if (!(c > 0 && a > 0)) return saida(el, vazio("Informe cigarros por dia e anos fumando."));
   const ma = c/20*a; const L = [["Carga tabágica", `<span class="big">${nF(ma)} maços-ano</span>`]];
   let el2 = "";
   if (id > 0){ const ok = id >= 50 && id <= 80 && ma >= 20 && p <= 15;
     el2 = ok ? "Elegível pelos critérios da USPSTF (50–80 anos, ≥ 20 maços-ano, fuma ou parou há ≤ 15 anos). No SUS não há programa: decisão compartilhada e prioridade à cessação." : `Não elegível pela USPSTF (${id < 50 ? "idade < 50" : id > 80 ? "idade > 80" : ma < 20 ? "< 20 maços-ano" : "parou há > 15 anos"}).`;
     L.push(["TC de baixa dose", el2 + ' <span class="lab C">C</span>']); }
   saida(el, kv(L), `Carga tabágica: ${nF(ma)} maços-ano (${c} cig/dia por ${a} anos${p ? `, parou há ${p} anos` : ", fumante atual"}). ${el2}`); }},
 ccr: {nome: "Rastreio colorretal: próximo passo",
  desc: "Risco padrão e assintomático (diretriz brasileira em consulta pública, 2026). Sintomas ou alto risco não são rastreio.",
  html: () => `<div class="cgrid">${fld("idade","Idade",{step:1})}${sel("fit","Último FIT",[["nao","Nunca fez / > 2 anos"],["neg","Negativo há ≤ 2 anos"],["pos","Positivo"]])}</div><div class="cchk">${chk("colo","Colonoscopia completa normal há < 10 anos")}${chk("sint","Sangramento, mudança do hábito, anemia ou perda de peso")}${chk("fam","Parente de 1º grau com câncer colorretal ou síndrome hereditária/DII")}</div>`,
  run(el){
   const id = V(el,"idade"), f = Sv(el,"fit"), co = V(el,"colo") === 1, s = V(el,"sint") === 1, fa = V(el,"fam") === 1; let t, k = "warn";
   if (s){ t = "Sintomático: investigação diagnóstica (colonoscopia), não rastreio [F]."; k = "stop"; }
   else if (f === "pos"){ t = "FIT positivo: colonoscopia diagnóstica – registrar e fazer busca ativa até completar [F]."; k = "stop"; }
   else if (fa){ t = "Alto risco familiar: colonoscopia a partir dos 40 anos ou 10 anos antes do caso índice, conforme especialista [C]."; }
   else if (!(id > 0)) return saida(el, vazio("Informe a idade."));
   else if (id < 50){ t = "Abaixo de 50 anos: sem rastreio no programa brasileiro (USPSTF inicia aos 45) [F]."; k = "ok"; }
   else if (id > 75){ t = "Acima de 75 anos: rastreio encerrado; individualizar até 85 se nunca rastreado e boa expectativa de vida [F]."; k = "ok"; }
   else if (co){ t = "Colonoscopia completa normal há < 10 anos: não fazer FIT nesse intervalo [F]."; k = "ok"; }
   else if (f === "neg"){ t = "FIT negativo: repetir 2 anos após o último [F]."; k = "ok"; }
   else t = "Solicitar FIT agora (bienal, 50–75 anos) [F].";
   saida(el, `<div class="fn ${k}" style="padding:10px 12px;border:1px solid;border-radius:10px">${fmt(t)}</div>`, `Rastreio colorretal${id>0?` (${id} anos)`:""}: ${t.replace(/\s*\[[FC]\]/g,"")}`); }},
 psa: {nome: "PSA: interpretação na APS",
  desc: "Apoio ao que fazer com um PSA já solicitado (decisão compartilhada). Referências gerais; a urologia define biópsia/RM.",
  html: () => `<div class="cgrid">${fld("psa","PSA total",{ph:"ng/mL"})}${fld("idade","Idade",{step:1})}</div><div class="cchk">${chk("fin","Usa finasterida ou dutasterida há ≥ 6 meses")}${chk("tr","Toque retal alterado (nódulo, endurecimento)")}${chk("rep","Valor já repetido (confirmado)")}${chk("itu","ITU, prostatite, sonda ou ejaculação/ciclismo nas 48 h antes")}</div>`,
  run(el){
   const v = V(el,"psa"), id = V(el,"idade"), fin = V(el,"fin") === 1, tr = V(el,"tr") === 1, rep = V(el,"rep") === 1, itu = V(el,"itu") === 1;
   if (!(v >= 0)) return saida(el, vazio("Informe o PSA."));
   const aj = fin ? v*2 : v; let t, k = "ok";
   if (tr){ t = "Toque retal alterado: encaminhar à urologia independentemente do PSA."; k = "stop"; }
   else if (aj >= 3 && itu){ t = "PSA pode estar falsamente elevado: tratar/aguardar 6–8 semanas e repetir antes de encaminhar."; k = "warn"; }
   else if (aj >= 10){ t = "PSA ≥ 10: encaminhar à urologia com prioridade."; k = "stop"; }
   else if (aj >= 3 && !rep){ t = "PSA ≥ 3: repetir em 6–8 semanas (sem ejaculação/ciclismo nas 48 h) antes de encaminhar."; k = "warn"; }
   else if (aj >= 3){ t = "PSA ≥ 3 confirmado: encaminhar à urologia (RM multiparamétrica antes de biópsia, quando disponível)."; k = "stop"; }
   else t = aj < 1 ? "PSA < 1: baixo risco; se mantido o rastreio por decisão compartilhada, intervalos longos (ex.: ≥ 4–8 anos)." : "PSA < 3: sem indicação de encaminhamento; se mantido o rastreio, repetir em 2 anos.";
   const age = id >= 70 ? " Aos ≥ 70 anos, considerar a expectativa de vida antes de investigar." : "";
   saida(el, kv([["PSA considerado", `<span class="big">${nF(aj)} ng/mL</span>${fin ? " (dobrado pela finasterida)" : ""}`], ["Conduta", `<div class="fn ${k}" style="padding:8px 10px;border:1px solid;border-radius:8px">${esc(t + age)} <span class="lab C">C</span></div>`]]), `PSA ${nF(v)} ng/mL${fin?` (ajustado ${nF(aj)} pela finasterida)`:""}${id>0?`, ${id} anos`:""}. Conduta: ${t}${age}`); }}
});
SC.push(
 {id:"ipss", nome:"IPSS (sintomas prostáticos)", itens:[
   ["Esvaziamento incompleto da bexiga"],["Urinar de novo em menos de 2 horas"],["Jato que para e recomeça"],["Dificuldade para segurar (urgência)"],["Jato fraco"],["Fazer força para começar"]
  ].map(([t]) => ({t, sel: opt([["— responda —",null],["Nenhuma vez",0],["Menos de 1 vez em 5",1],["Menos da metade das vezes",2],["Cerca de metade",3],["Mais da metade",4],["Quase sempre",5]])})).concat([{t:"Noctúria (vezes por noite)", sel: opt([["— responda —",null],["Nenhuma",0],["1",1],["2",2],["3",3],["4",4],["5 ou mais",5]])}]), exige:true,
  interp: s => s >= 20 ? "20–35: sintomas graves – tratamento clínico e avaliação urológica." : s >= 8 ? "8–19: sintomas moderados – considerar tratamento medicamentoso." : "0–7: sintomas leves – orientação e vigilância.",
  nota:"Últimos 30 dias. Pergunte também a qualidade de vida (0 'ótimo' a 6 'péssimo'): pesa na decisão de tratar."},
 {id:"iief5", nome:"IIEF-5 (função erétil)", itens:[
   "Confiança em conseguir e manter a ereção","Ereção firme o suficiente para penetração","Manter a ereção após a penetração","Manter a ereção até o fim da relação","Satisfação com as relações sexuais"
  ].map(t => ({t, sel: opt([["— responda —",null],["1 – muito baixa / quase nunca",1],["2 – baixa / poucas vezes",2],["3 – moderada / às vezes",3],["4 – alta / na maioria",4],["5 – muito alta / quase sempre",5]])})), exige:true,
  interp: s => s >= 22 ? "22–25: sem disfunção erétil." : s >= 17 ? "17–21: DE leve." : s >= 12 ? "12–16: DE leve a moderada." : s >= 8 ? "8–11: DE moderada." : "5–7: DE grave.",
  nota:"Últimos 6 meses, em quem teve atividade sexual."},
 {id:"auditc", nome:"AUDIT-C (uso de álcool)", itens:[
   {t:"Com que frequência toma bebidas alcoólicas?", sel: opt([["— responda —",null],["Nunca",0],["Mensalmente ou menos",1],["2 a 4 vezes por mês",2],["2 a 3 vezes por semana",3],["4 ou mais vezes por semana",4]])},
   {t:"Quantas doses toma num dia típico em que bebe?", sel: opt([["— responda —",null],["1 a 2",0],["3 a 4",1],["5 a 6",2],["7 a 9",3],["10 ou mais",4]])},
   {t:"Com que frequência toma 6 ou mais doses numa ocasião?", sel: opt([["— responda —",null],["Nunca",0],["Menos que mensalmente",1],["Mensalmente",2],["Semanalmente",3],["Diariamente ou quase",4]])}], exige:true,
  interp: s => s >= 8 ? "≥ 8: uso de alto risco/possível dependência – AUDIT completo, avaliar abstinência e encaminhamento (CAPS AD)." : s >= 4 ? "Positivo (≥ 4 em homens; ≥ 3 em mulheres): intervenção breve e retorno." : s === 3 ? "3: positivo para mulheres (intervenção breve); para homens, abaixo do corte." : "Abaixo do corte: reforçar baixo risco.",
  nota:"1 dose ≈ 14 g de álcool (1 lata de cerveja, 1 taça de vinho, 1 dose de destilado). Cortes usuais [C]."}
);
CALC_MENU.push(["macos","Maços-ano e TC de baixa dose"],["ccr","Rastreio colorretal"],["psa","PSA: interpretação"],["sc:ipss","IPSS (próstata)"],["sc:iief5","IIEF-5 (ereção)"],["sc:auditc","AUDIT-C (álcool)"]);
