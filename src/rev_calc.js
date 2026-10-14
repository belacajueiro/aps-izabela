// ── calculadora da revisão 10/10/2026: TRN pelo PCDT Tabagismo 2020
Object.assign(CALCS, {
 trn: {nome: "Tabagismo: TRN e bupropiona (PCDT 2020)",
  desc: "Indicação de farmacoterapia e dose inicial do adesivo pelo número de cigarros/dia, conforme o PCDT do Tabagismo (Portaria Conjunta nº 10/2020). 1 mg de nicotina por cigarro; máximo 42 mg/dia.",
  html: () => `<div class="cgrid">${fld("cig","Cigarros por dia",{min:0,step:1})}${fld("fag","Fagerström (0–10)",{min:0,max:10,step:1})}${sel("prim","1º cigarro após acordar",[["5","Até 5 min"],["30","6–30 min"],["60","31–60 min"],["61","Mais de 60 min"]])}</div><div class="cchk">${chk("abst","Tem sintomas de abstinência quando fica sem fumar")}${chk("difr","Fuma > 20/dia e tem dificuldade de reduzir")}${chk("gest","Gestante ou amamentando")}${chk("menor","Menor de 18 anos")}${chk("cibup","Contraindicação à bupropiona (convulsão, transtorno alimentar, abstinência alcoólica, IMAO)")}</div>`,
  run(el){
   const n = V(el,"cig"), f = V(el,"fag"), p = +Sv(el,"prim"), ab = V(el,"abst") === 1, dr = V(el,"difr") === 1, g = V(el,"gest") === 1, m = V(el,"menor") === 1, cb = V(el,"cibup") === 1;
   if (!(n >= 0)) return saida(el, vazio("Informe os cigarros por dia."));
   const box = (t,k) => `<div class="fn ${k}" style="padding:8px 10px;border:1px solid;border-radius:8px">${esc(t)} <span class="lab F">F</span></div>`;
   if (g || m){ const t = g ? "Gestante ou nutriz: aconselhamento estruturado, sem medicamento." : "Menor de 18 anos: aconselhamento estruturado (de preferência em grupo); sem evidência suficiente para farmacoterapia.";
     return saida(el, kv([["Conduta", box(t,"warn")]]), `Tabagismo (PCDT 2020): ${t}`); }
   const crit = [];
   if (!ab) crit.push("sem sintomas de abstinência"); if (n <= 5) crit.push("≤ 5 cigarros/dia"); if (p > 60) crit.push("1º cigarro > 1 h após acordar"); if (okN(f) && f <= 4) crit.push("Fagerström ≤ 4");
   if (crit.length){ const t = `Aconselhamento estruturado isolado é o preconizado (${crit.join("; ")}).${n <= 5 && n > 0 ? " Se precisar de apoio para fissura: goma ou pastilha (até 5 de 2 mg ou 3 de 4 mg/dia), sem adesivo." : ""}`;
     return saida(el, kv([["Conduta", box(t,"ok")]]), `Tabagismo (PCDT 2020), ${n} cig/dia: ${t}`); }
   let ad;
   if (n <= 5) ad = "sem adesivo; goma ou pastilha";
   else if (n <= 10) ad = "adesivo 7 mg/dia";
   else if (n < 20) ad = "adesivo 14 mg/dia";
   else if (n <= 20 || !dr) ad = "adesivo 21 mg/dia";
   else if (n <= 30) ad = "adesivos 21 + 7 mg/dia";
   else if (n <= 40) ad = "adesivos 21 + 14 mg/dia";
   else ad = "adesivos 21 + 21 mg/dia (máximo 42 mg)";
   const trn = `TRN combinada (preferencial): ${ad} a partir do dia da parada + goma 2 mg ou pastilha para fissura.${/\+/.test(ad) ? " Retirar 7 mg por semana conforme a abstinência." : ""}`;
   const bup = cb ? "Bupropiona contraindicada: usar TRN." : "Alternativa ou associação: bupropiona 150 mg 1×/dia do 1º ao 3º dia, depois 150 mg 2×/dia (8 h de intervalo) até o 84º dia; receituário de controle especial.";
   saida(el, kv([["Farmacoterapia", box(trn,"warn")], ["Bupropiona", box(bup, cb ? "stop" : "ok")], ["Sempre", "Aconselhamento estruturado (4 sessões, de preferência semanais) + retornos; TRN não deve ser usada junto com o cigarro."]]),
    `Tabagismo (PCDT 2020), ${n} cig/dia${okN(f) ? `, Fagerström ${f}` : ""}: ${trn} ${bup}`); }}
});
CALC_MENU.push(["trn","Tabagismo: TRN (PCDT 2020)"]);
