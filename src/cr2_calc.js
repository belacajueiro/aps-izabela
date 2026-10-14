// ── calculadoras crônicos lote 2
const qtxt = q => { const w = Math.floor(q/4), r = q%4, f = ["", "¼", "½", "¾"][r]; return (w ? w + (f ? " " + f : "") : (f || "0")) + " cp"; };
Object.assign(CALCS, {
 inr: {nome: "Varfarina: ajuste pelo RNI",
  desc: "Tabela do TelessaúdeRS para alvo de RNI 2–3 (FA, TEV). Ajusta a dose total semanal (DTS) e sugere a distribuição com comprimidos de 5 mg.",
  html: () => `<div class="cgrid">${fld("rni","RNI atual",{step:0.1})}${fld("dts","Dose total semanal atual",{ph:"mg/semana (ex.: 35)"})}${sel("alvo","Alvo",[["23","2–3 (FA, TEV, prótese aórtica)"],["2535","2,5–3,5 (prótese mitral)"]])}</div><div class="cchk">${chk("sang","Sangramento ativo")}${chk("est","RNI estável antes (dose sem mudança > 3 meses)")}${chk("risco","Fatores de alto risco de sangramento (idade avançada, sangramento prévio, AVC, DRC)")}</div>`,
  run(el){
   const r = V(el,"rni"), w = V(el,"dts"), a = Sv(el,"alvo"), s = V(el,"sang") === 1, est = V(el,"est") === 1, hr = V(el,"risco") === 1;
   if (!(r > 0)) return saida(el, vazio("Informe o RNI."));
   let t, k = "warn", pct = 0, rep = "1–2 semanas";
   if (s){ t = "Sangramento ativo: encaminhar à emergência (vitamina K EV, plasma ou fatores conforme gravidade)."; k = "stop"; rep = "após avaliação na emergência"; }
   else if (a === "2535"){ t = r >= 2.5 && r <= 3.5 ? "Na faixa: manter dose; repetir em 4 semanas." : r <= 3.8 && r > 3.5 && est ? "Pouco acima do alvo com RNI previamente estável (até 3,8): manter e repetir em 1–2 semanas." : "Fora do alvo em prótese mitral mecânica: ajustar com cardiologia/hematologia (a tabela de % do TelessaúdeRS foi descrita para alvo 2–3)."; k = r >= 2.5 && r <= 3.5 ? "ok" : "warn"; }
   else if (r >= 9){ t = "RNI ≥ 9: suspender 2 doses; vitamina K oral 2,5–5 mg se alto risco de sangramento (sem vitamina K na unidade e alto risco → emergência). Ao voltar ao alvo, reiniciar com DTS 15–20% menor."; pct = -17.5; k = "stop"; rep = "precoce, até voltar ao alvo (definir com o paciente)"; }
   else if (r >= 5){ t = `RNI 5–8,9: omitir 1–2 doses${hr ? "; vitamina K oral 2,5 mg (há fatores de risco de sangramento)" : ""}. Ao voltar ao alvo, reduzir DTS em 10–15%.`; pct = -12.5; k = "stop"; rep = "precoce, até voltar ao alvo (definir com o paciente)"; }
   else if (r >= 4.0){ t = "RNI 4,0–4,99: suspender a dose do dia e reduzir a DTS em 10%."; pct = -10; rep = "1 semana"; }
   else if (r > 3.0){ if (est && r <= 3.3){ t = "RNI até 3,3 com controle previamente estável: manter a dose e repetir em 1–2 semanas."; k = "ok"; } else { t = "RNI 3,01–3,99: reduzir a DTS em 10–15%."; pct = -12.5; } }
   else if (r >= 2.0){ t = "Na faixa (2–3): manter a dose; repetir em 4 semanas (até 12 semanas se estável > 3 meses)."; k = "ok"; rep = "4 semanas"; }
   else if (r >= 1.51){ if (est && r >= 1.7){ t = "RNI 1,7–1,99 com controle previamente estável: manter e repetir em 1–2 semanas."; k = "ok"; } else { t = "RNI 1,51–1,99: aumentar a DTS em 10%."; pct = 10; } }
   else { t = "RNI ≤ 1,5: aumentar 15% da DTS (verificar adesão, interações, dieta)."; pct = 15; }
   const L = [["Conduta", `<div class="fn ${k}" style="padding:8px 10px;border:1px solid;border-radius:8px">${esc(t)} <span class="lab F">F</span></div>`], ["Nova RNI", rep]];
   let extra = "";
   if (pct && w > 0 && !s){ const nw = w*(1+pct/100), q = Math.round(nw/1.25), b = Math.floor(q/7), x = q%7;
     const dist = x ? `${x} dia(s) com ${qtxt(b+1)} e ${7-x} dia(s) com ${qtxt(b)} de 5 mg` : `${qtxt(b)} de 5 mg todos os dias`;
     L.push(["Nova DTS", `<span class="big">${nF(Math.round(q*1.25*100)/100)} mg/semana</span> (${pct > 0 ? "+" : ""}${nF(pct)}% de ${nF(w)} mg)`], ["Distribuição sugerida", dist + ' <span class="lab I">I</span>']);
     extra = ` Nova DTS ≈ ${nF(Math.round(q*1.25*100)/100)} mg/semana: ${dist}.`; }
   L.push(["Lembrar", "Investigar interações (antibióticos, amiodarona, omeprazol), adesão, dieta e função renal; preferir a mesma dose todos os dias quando possível."]);
   saida(el, kv(L), `Varfarina – RNI ${nF(r)}${w > 0 ? `, DTS ${nF(w)} mg` : ""}: ${t}${extra} Nova RNI em ${rep}.`); }},
 pe: {nome: "Pé diabético: categoria de risco",
  desc: "Estratificação IWGDF (0–3) com intervalos de reavaliação da SBD. PSP = perda da sensibilidade protetora (monofilamento 10 g).",
  html: () => `<div class="cchk">${chk("psp","Perda da sensibilidade protetora (monofilamento)")}${chk("dap","Doença arterial periférica (pulsos ausentes, ITB alterado, claudicação)")}${chk("def","Deformidade (dedos em garra, hálux valgo, Charcot, proeminências)")}${chk("ulc","Úlcera prévia")}${chk("amp","Amputação (menor ou maior)")}${chk("drc","DRC terminal (diálise)")}</div>`,
  run(el){
   const p = V(el,"psp") === 1, d = V(el,"dap") === 1, f = V(el,"def") === 1, u = V(el,"ulc") === 1, a = V(el,"amp") === 1, r = V(el,"drc") === 1;
   let c, iv, k;
   if ((p || d) && (u || a || r)){ c = "3 – alto"; iv = "a cada 1–3 meses; cuidado integrado (podologia, calçado terapêutico, educação)"; k = "stop"; }
   else if ((p && d) || (p && f) || (d && f)){ c = "2 – moderado"; iv = "a cada 3–6 meses; calçado que acomode o pé; tratar lesões pré-ulcerativas"; k = "warn"; }
   else if (p || d){ c = "1 – baixo"; iv = "a cada 6–12 meses; educação em autocuidado"; k = "warn"; }
   else { c = "0 – muito baixo"; iv = "anual (exame com monofilamento e pulsos)"; k = "ok"; }
   const enc = d ? " DAP: avaliar ITB e encaminhar à cirurgia vascular." : "";
   saida(el, kv([["Categoria", `<span class="big">${c}</span>`], ["Reavaliação", `<div class="fn ${k}" style="padding:8px 10px;border:1px solid;border-radius:8px">${esc(iv + "." + enc)} <span class="lab F">F</span></div>`]]), `Pé diabético – categoria de risco IWGDF ${c}: reavaliar ${iv}.${enc}`); }},
 alz: {nome: "Alzheimer: critérios do PCDT 2025",
  desc: "Elegibilidade para donepezila, galantamina, rivastigmina e memantina pelo CEAF (Portaria Conjunta 27/2025), por MEEM ajustado à escolaridade e CDR.",
  html: () => `<div class="cgrid">${fld("meem","MEEM",{min:0,max:30,step:1})}${sel("esc","Escolaridade",[["mais","> 4 anos"],["menos","≤ 4 anos"]])}${sel("cdr","CDR",[["1","1 – leve"],["2","2 – moderada"],["3","3 – grave"]])}</div>`,
  run(el){
   const m = V(el,"meem"), e = Sv(el,"esc"), c = +Sv(el,"cdr");
   if (!(m >= 0)) return saida(el, vazio("Informe o MEEM."));
   const hi = e === "mais", inR = (a,b,x,y) => hi ? (m >= a && m <= b) : (m >= x && m <= y);
   const leveMod = inR(12,24,8,21), mod = inR(12,19,8,15), grave = inR(5,11,3,7), op = [];
   if ((c === 1 || c === 2) && leveMod) op.push("Donepezila, galantamina ou rivastigmina (monoterapia)");
   if (c === 2 && mod) op.push("Memantina + galantamina, rivastigmina ou donepezila");
   if (c === 3 && grave){ op.push("Donepezila (monoterapia)"); op.push("Memantina + donepezila"); op.push("Memantina (monoterapia)"); }
   const t = op.length ? op.join("; ") : "Fora dos critérios de inclusão do PCDT para essa combinação de MEEM/escolaridade/CDR.";
   saida(el, kv([["Opções no PCDT", `<div class="fn ${op.length ? "ok" : "warn"}" style="padding:8px 10px;border:1px solid;border-radius:8px">${esc(t)} <span class="lab F">F</span></div>`], ["Lembrar", "Excluir contraindicações (bradicardia, BAV 2º/3º grau, doença do nó sinusal, asma/DPOC grave; galantamina na insuficiência hepática/renal grave). Diagnóstico provável por critérios NIA-AA com neuroimagem."]]), `PCDT Alzheimer 2025 – MEEM ${m} (${hi ? "> 4" : "≤ 4"} anos de estudo), CDR ${c}: ${t}`); }}
});
CALC_MENU.push(["inr","Varfarina: ajuste pelo RNI"],["pe","Pé diabético: risco"],["alz","Alzheimer: critérios PCDT"]);
