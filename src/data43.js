// ───────────── data43.js – v38: DM2 revisado pelo PCDT DM2 2026 (Portaria SCTIE/MS nº 13, de 21/02/2026) e pela Diretriz SBD 2026
FONTES["pcdt_dm2"] = {s: "PCDT DM2 2026", t: "Ministério da Saúde. Protocolo Clínico e Diretrizes Terapêuticas do Diabete Melito Tipo 2 – Portaria SCTIE/MS nº 13, de 21/02/2026, que revoga a Portaria SECTICS/MS nº 7/2024 (norma). Relatório de recomendação CONITEC nº 1074. Inclui metas (Quadro 6), dapagliflozina, NPH e análogos de insulina incorporados em 2024.", f: "F", url: "https://www.gov.br/conitec/pt-br/midias/protocolos/2026/pcdt-diabete-melito-tipo-2/@@display-file/file"};
FONTES["sbd_metas"] = {s: "SBD 2026 – Metas", t: "Sociedade Brasileira de Diabetes. Diretriz 2026 – Metas de controle glicêmico (DOI 10.29327/5881296.2026-1). Diretriz de sociedade.", f: "F", url: "https://diretriz.diabetes.org.br/metas-de-controle-glicemico/"};
FONTES["sbd_sus"] = {s: "SBD 2026 – DM2 no SUS", t: "Sociedade Brasileira de Diabetes. Diretriz 2026 – Tratamento do DM2 no Sistema Único de Saúde (DOI 10.29327/5937204.2026-1). Diretriz de sociedade; resume o PCDT DM2 2026 e as NT 32/2026 e 169/2026 sobre glargina na APS.", f: "F", url: "https://diretriz.diabetes.org.br/tratamento-do-dm2-no-sistema-unico-de-saude-sus/"};

(function(){
  const get = id => CONDICOES.find(x => x.id === id);
  const sec = (c, re) => c && c.guia && c.guia.secoes.find(s => re.test(s.t));
  const tabIn = (s, re) => s && s.b.find(b => b.tab && re.test(b.tab.h.join("|")));

  // ── cr-dm2 ──────────────────────────────────────────────
  const d = get("cr-dm2");
  if (d) {
    d.P = d.P.replace("- HbA1c a cada 3 meses se fora da meta; 6 meses se na meta.", "- Consulta e HbA1c a cada 6 meses se na meta; a cada 3 meses se fora da meta ou após mudar o tratamento (SBD 2026; PCDT 2026).");
    const rd = d.rx.find(r => /Dapagliflozina/.test(r.titulo));
    if (rd) {
      rd.titulo = "Dapagliflozina (Farmácia Popular ou CEAF)";
      rd.texto = "USO ORAL\n1. Dapagliflozina 10 mg ______ 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia.\n   (≥ 65 anos com DM2 + doença cardiovascular: Farmácia Popular, receita comum. Demais: CEAF com LME e relatório – 2ª intensificação + ≥ 40 anos com DCV estabelecida, OU homem ≥ 55 / mulher ≥ 60 anos com HAS, dislipidemia ou tabagismo; ou DRC: TFGe 25–75 ou RAC ≥ 300 mg/g.)";
      rd.dose = "F";
      rd.nota = "Dose 10 mg 1×/dia e não iniciar com TFGe < 25: PCDT DM2 2026 [F]. Vias de acesso: SBD 2026, Quadro 2 [F]. Cautela no idoso (cetoacidose euglicêmica, infecção urogenital no 1º mês). Queda de até 30% da TFG no início é esperada.";
    }
    const rg = d.rx.find(r => /Gliclazida/.test(r.titulo));
    if (rg) {
      rg.dose = "F";
      rg.nota = "SU de escolha pela SBD 2026 (menos hipoglicemia que glibenclamida, segurança CV, redução de doença renal) e preferida no idoso e com risco de hipoglicemia pelo PCDT 2026. MR 30 e 60 mg, 1×/dia, máx. 120 mg/dia (PCDT 2026) [F]. Está na RENAME (Básico), ainda não abastecida em Betim."
    }
    const rgl = d.rx.find(r => /Glibenclamida/.test(r.titulo));
    if (rgl) { rgl.dose = "F"; rgl.nota = "5 mg/dia em 1–2 tomadas, máx. 20 mg/dia (PCDT 2026) [F]. Maior risco de hipoglicemia prolongada; evitar em idosos (PCDT 2026) e com TFG < 30."; }
    const rm = d.rx.find(r => /Metformina/.test(r.titulo));
    if (rm) rm.nota = "Iniciar baixo para reduzir efeitos gastrointestinais. Máximo 1.000 mg/dia se TFGe < 45 e suspender < 30 (SBD 2026) [F]. Metformina XR 500 mg grátis na Farmácia Popular se houver intolerância (PCDT e SBD 2026) [F]. Suspender em desidratação grave, vômitos ou internação.";
    d.idealsus.sus = "Metformina e glibenclamida na REMUME; metformina XR 500 mg e dapagliflozina (≥ 65 anos com DCV) grátis na Farmácia Popular; dapagliflozina pelo CEAF nos critérios do PCDT; insulina NPH/regular; glargina na APS para ≥ 70 anos (NT 169/2026) [F].";
    d.sus.nacional = "PCDT DM2 2026: metformina 500/850 mg, glibenclamida 5 mg, gliclazida MR 30/60 mg e 80 mg, dapagliflozina 10 mg, insulinas NPH e regular, análogos de ação rápida e prolongada (incorporados em 2024). Farmácia Popular: metformina XR 500 mg e dapagliflozina para ≥ 65 anos com DCV. Rastreamento SBD: a partir de 35 anos.";
    d.divergencia = "Metas no idoso: o PCDT DM2 2026 (Quadro 6) usa HbA1c < 7,5% no idoso saudável e < 8,0% no comprometido; a SBD 2026 recomenda 7,0–7,5% e < 8,5%. RENAME 2024 ainda descreve o critério antigo da dapagliflozina (40–64 anos).";
    d.evid.resumo = "Metformina segue como 1ª linha. Em pessoas com DCV, IC ou DRC, iSGLT2 reduzem internação por IC e progressão renal, e agonistas de GLP-1 com benefício reduzem eventos cardiovasculares, independentemente da HbA1c (diretriz luso-brasileira 2023). Meta de HbA1c < 7% para a maioria; no idoso, mais flexível (PCDT DM2 2026 e SBD 2026, com valores diferentes).";
    if (!d.evid.fontes.includes("ntc169_2026")) d.evid.fontes.push("ntc169_2026");
    d.nv = d.nv.filter(x => !/idoso comprometido/.test(x));
    d.nv.push("Dapagliflozina pela via renal (TFGe 25–75 ou RAC ≥ 300): critério listado pela SBD 2026; conferir se a LME do CEAF em MG aceita pelo PCDT DM2 ou pelo PCDT DRC.");
    d.mudancas.push("Revisão 14/10/2026 (v38): PCDT DM2 2026 (Portaria SCTIE 13/2026) substitui o de 2024; metas do idoso com a divergência PCDT × SBD 2026; vias de acesso da dapagliflozina; doses das sulfonilureias e da metformina na DRC; intervalos de consulta.");

    const sm = sec(d, /^Metas/);
    if (sm) {
      sm.b = [
        {tab: {h: ["Perfil", "HbA1c PCDT", "HbA1c SBD", "Jejum"], r: [
          ["Adulto", "< 7,0%", "< 7,0%", "80–130"],
          ["Idoso saudável", "< 7,5%", "7,0–7,5%", "80–130"],
          ["Idoso comprometido", "< 8,0%", "< 8,5%", "90–150"],
          ["Idoso muito comprometido", "evitar sintomas", "evitar sintomas", "100–180"]]},
         nota: "PCDT DM2 2026, Quadro 6 [F]; SBD 2026, R3 e R4 [F]. Glicemia 2 h após a refeição < 180 (exceto no muito comprometido); ao deitar 90–150 no adulto e idoso saudável, 100–180 no comprometido e 110–200 no muito comprometido. Idoso saudável: poucas comorbidades, função e cognição preservadas; comprometido: múltiplas comorbidades, comprometimento funcional leve a moderado ou cognitivo moderado; muito comprometido: doença terminal ou dependência grave. Tempo no alvo (CGM): > 70%, ou > 50% no idoso comprometido (SBD 2026) [F]. HbA1c 7% ≈ glicemia média 154 mg/dL."},
        {nota: "**Qual meta usar no idoso?** As duas fontes concordam no essencial: no frágil, a meta é evitar hipoglicemia, não baixar a HbA1c. A SBD admite até 8,5% porque, em coortes de idosos, a mortalidade sobe tanto com HbA1c < 6% quanto > 8,5% (curva em J) [F]. Para registro e auditoria no SUS, o PCDT é a norma; para decidir desintensificar, a SBD dá mais margem [I]."},
        {calc: "glic"},
        {perola: {t: "No idoso, HbA1c baixa demais também mata", x: "No ACCORD, a meta intensiva (HbA1c média 6,4%) em DM2 de longa data com DCV aumentou a mortalidade em 22%; ADVANCE e VADT não mostraram benefício cardiovascular (SBD) [F]. O PCDT 2026 desencoraja HbA1c < 7% no idoso vulnerável [F]. Idoso frágil com HbA1c < 7% usando sulfonilureia ou insulina é candidato a **desintensificar**.", d: "menos hipoglicemia grave, quedas, fraturas e internações.", l: "F"}},
        {ref: ["pcdt_dm2", "sbd_metas"]}
      ];
    }

    const st = sec(d, /Escolha do tratamento/);
    if (st) {
      const fl = st.b.find(b => b.fluxo);
      if (fl) fl.nota = "Metformina + sulfonilureia já no início se HbA1c > 7,5% (SBD 2026, para evitar inércia) [F]; insulina se HbA1c > 9% ou glicemia ≥ 300 com sintomas, catabolismo ou intercorrência (PCDT 2026) [F]; iSGLT2 na DCV/IC/DRC (diretriz luso-brasileira 2023; SBD) [F].";
      const tc = tabIn(st, /^Classe/);
      if (tc) {
        tc.tab.r.forEach(r => {
          if (/^Metformina/.test(r[0])) { r[1] = "REMUME 850 mg; RENAME 500/850 mg; XR 500 mg na Farmácia Popular"; r[3] = "TGI (iniciar baixo, com refeição; XR se intolerância); B12 anual; máx. 1.000 mg se TFGe < 45; suspender < 30"; }
          if (/^iSGLT2/.test(r[0])) r[1] = "Farmácia Popular (≥ 65 anos com DCV); CEAF – PCDT DM2, DRC e ICFEr";
          if (/^Sulfonilureia/.test(r[0])) { r[1] = "Glibenclamida 5 mg (REMUME); gliclazida MR 30/60 mg (RENAME e PCDT 2026; não abastecida em Betim)"; r[3] = "Hipoglicemia (glibenclamida > gliclazida); ganho de peso; contraindicadas com TFG < 30 (gliclazida MR com muita cautela)"; }
          if (/^Insulina/.test(r[0])) r[1] = "NPH/regular (REMUME, frasco e caneta); glargina na APS para ≥ 70 anos (NT 169/2026)";
        });
        tc.nota = "Disponibilidade: PCDT DM2 2026, RENAME 2024 e REMUME Betim [F]. Pioglitazona, iDPP-4 e acarbose: não constam do PCDT 2026 nem da RENAME 2024 [F].";
      }
      const tdap = tabIn(st, /^Dapagliflozina/);
      if (tdap) {
        tdap.tab = {h: ["Dapagliflozina no SUS", "Critério"], r: [
          ["Farmácia Popular (receita comum)", "≥ 65 anos com DM2 e doença cardiovascular"],
          ["CEAF – DCV estabelecida", "2ª intensificação + ≥ 40 anos com IAM, revascularização, angioplastia, angina, AVC isquêmico, AIT ou IC com FE < 40%"],
          ["CEAF – alto risco sem DCV", "2ª intensificação + homem ≥ 55 / mulher ≥ 60 anos com HAS, dislipidemia ou tabagismo"],
          ["CEAF – rim", "≥ 18 anos com TFGe 25–75 ou RAC ≥ 300 mg/g (listado pela SBD 2026)"],
          ["ICFEr", "FEVE ≤ 40%, NYHA II–IV, sintomática apesar da terapia padrão (incorporação 2022)"]]};
        tdap.nota = "Critérios do CEAF por DCV e por risco: PCDT DM2 2026, item 6 [F]. Farmácia Popular, via renal e ICFEr: SBD 2026, Quadro 2 [F]. Dose 10 mg 1×/dia; não iniciar com TFGe < 25; eficácia glicêmica menor com TFGe < 45 (PCDT 2026) [F].";
      }
      const pref = st.b.find(b => b.ref); if (pref) pref.ref = ["pcdt_dm2", "sbd_sus", "sbd_luso2023", "cardiorrenal", "kdigo2024", "fp_elenco2026", "rename", "remume"];
    }
    const sr = sec(d, /Rastreio anual/);
    if (sr) { const t = tabIn(sr, /^O quê/); if (t) t.nota = "Periodicidade: PCDT DM2 2026 e SBD 2026 (lipidograma, creatinina/TFGe, RAC, pé e olho anuais; HbA1c a cada 3–6 meses) [F]."; }
    const ss = sec(d, /Dias de doença/);
    if (ss) { const t = ss.b.find(b => b.trio); if (t) t.trio = {...d.idealsus}; }
  }

  // ── cr-dm2-insulina ─────────────────────────────────────
  const i = get("cr-dm2-insulina");
  if (i) {
    i.P = "- Iniciar NPH ao deitar (~22 h): 10 UI ou 0,1–0,2 UI/kg.\n- Autotitulação: +2 UI a cada 3 dias até jejum 80–130 (até 180 no idoso comprometido); reduzir 2–4 UI se < 70 ou hipoglicemia noturna.\n- Manter metformina (e iSGLT2 se em uso); reduzir/suspender sulfonilureia ao intensificar.\n- Jejum na meta e HbA1c alta: 2ª dose de NPH pela manhã (dividir 80% da dose: 2/3 manhã, 1/3 noite) ou regular antes da maior refeição.\n- Basal > 0,5 UI/kg/dia: sinal de sobrebasalização.\n- ≥ 70 anos: glargina na APS (NT 169/2026), se houver estoque.\n- Educação: técnica, rodízio, conservação, hipoglicemia. Insumos (seringas, tiras, lancetas).\n- Retorno em 1–2 semanas.";
    const rn = i.rx.find(r => /NPH basal/.test(r.titulo));
    if (rn) {
      rn.texto = rn.texto.replace("diminuir 4 UI se ficar abaixo de 70.", "diminuir 2 a 4 UI se ficar abaixo de 70 ou houver hipoglicemia à noite.");
      rn.nota = "Início 10 UI ou 0,1–0,2 UI/kg às 22 h, +2 UI a cada 3 dias e −2 a 4 UI se < 70: PCDT DM2 2026 [F]. A SBD 2026 sugere −4 UI ou −10% (o maior).";
    }
    const rr = i.rx.find(r => /regular antes/.test(r.titulo));
    if (rr) { rr.texto = rr.texto.replace("(iniciar com 4 UI)", "(iniciar com 2 a 4 UI)"); rr.dose = "F"; rr.nota = "Indicada se a glicemia de jejum está na meta mas a HbA1c segue alta ou a glicemia 2 h após > 180. Início 2–4 UI; ajustar 1–2 UI ou 10–15% duas vezes por semana pela glicemia 2 h após (SBD) [F]."; }
    i.rx.push({trilha: "ambos", titulo: "NPH em 2 doses (jejum na meta, HbA1c alta)", texto: "USO SUBCUTÂNEO\n1. Insulina humana NPH 100 UI/mL ______ 1 frasco (10 mL)\n   Aplicar ___ UI antes do café da manhã e ___ UI às 22 horas.\n   (Pegar 80% da dose atual da noite: 2/3 de manhã e 1/3 à noite. Ex.: 30 UI → 24 UI → 16 UI de manhã e 8 UI à noite.)\n   Ajustar a dose da manhã em 1 a 3 UI a cada 3 dias pela glicemia antes do jantar (meta 80–130).", dose: "F", nota: "PCDT DM2 2026: divisão de 80% da dose noturna em 2/3 manhã e 1/3 noite; titular a da manhã pela glicemia antes do jantar [F]."});
    const rgl = i.rx.find(r => /glargina/i.test(r.titulo));
    if (rgl) {
      rgl.texto = rgl.texto.replace("Titular pela glicemia de jejum: +1 a 2 UI a cada 3 dias até a meta; reduzir se < 70.", "Titular pela glicemia de jejum a cada 3–4 dias (+1 a 2 UI) até 80–130; reduzir se < 70. Evitar passar de 0,5 UI/kg.");
      rgl.nota = "NT 169/2026 via SBD 2026 (1:1; −20%; titulação a cada 3–4 dias até jejum 80–130; não passar de 0,5 UI/kg) e PCDT DM2 2026 (mesma conversão) [F]; redução de 25–30% e passos de 1–2 UI: material da DAPS Betim 2026 [F]. A troca não altera a insulina regular. Não iniciar sem estoque garantido.";
    }
    i.sus.nacional = "RENAME 2024: insulina humana NPH e regular (Básico); seringas, canetas e agulhas, tiras e lancetas. PCDT DM2 2026: análogos de ação prolongada e rápida incorporados ao DM2 (Portarias SECTICS 58 e 59/2024), prioridade para hipoglicemia noturna/grave, IMC < 30, idosos, grande variabilidade, disfunção renal/hepática, gestantes e dificuldade com múltiplas doses. NT 169/2026: glargina na APS para DM1 de 2 a < 18 anos e pessoas ≥ 70 anos com DM1 ou DM2.";
    i.evid.resumo = "Insulina basal ao deitar com autotitulação pela glicemia de jejum é segura e eficaz para atingir metas, mantendo metformina. NPH e análogos têm eficácia semelhante na HbA1c; análogos reduzem hipoglicemia, sobretudo noturna (degludeca também a grave) (PCDT DM2 2026).";
    i.mudancas = i.mudancas.map(x => x.replace("PCDT DM2 2024", "PCDT DM2 2026"));
    i.mudancas.push("Revisão 14/10/2026 (v38): PCDT DM2 2026 – redução de 2–4 UI na hipoglicemia, 2ª dose de NPH (80%: 2/3 + 1/3), meta de jejum até 180 no idoso comprometido, critérios de sobrebasalização e prioridades para análogos; titulação da glargina a cada 3–4 dias (NT 169/2026 via SBD 2026).");

    const si = sec(i, /Início e titulação/);
    if (si) {
      const fl = si.b.find(b => b.fluxo);
      if (fl) {
        fl.fluxo[2].ramos[0].r = "> 130 (> 180 no idoso comprometido)";
        fl.fluxo[2].ramos[2].n[0].t = "−2 a 4 UI";
        fl.fluxo[3].ramos[0].n[0].t = "2ª dose de NPH de manhã (80% da dose: 2/3 manhã + 1/3 noite) ou regular 2–4 UI antes da maior refeição";
        fl.fluxo[3].ramos[1].n[0].t = "Seguir titulação da NPH noturna";
        fl.nota = "PCDT DM2 2026 [F]: início 10 UI ou 0,1–0,2 UI/kg às 22 h; +2 UI a cada 3 dias até jejum 80–130 (até 180 no idoso comprometido ou muito comprometido); −2 a 4 UI se < 70 ou hipoglicemia noturna; dose total no DM2 0,5–1,0 UI/kg/dia (até 1,5 na obesidade), basal < 0,5 UI/kg/dia (até 0,75 se muita resistência).";
      }
      const pb = si.b.find(b => b.perola && /0,5 UI\/kg/.test(b.perola.t));
      if (pb) { pb.perola.x = "Sinais de dose excessiva de basal (PCDT 2026): > 0,5 UI/kg/dia, queda > 50 mg/dL entre deitar e acordar, pós-prandial > 180, HbA1c alta com jejum na meta, hipoglicemia ou grande variabilidade. Pense em pós-prandial, adesão ou técnica (lipo-hipertrofia) [F]."; pb.perola.l = "F"; }
      const r = si.b.find(b => b.ref); if (r) r.ref = ["pcdt_dm2", "sbd_sus"];
    }
    const sg = sec(i, /Glargina na APS/);
    if (sg) {
      const t = sg.b.find(b => b.tab);
      if (t) t.nota = "NT 169/2026 [F]. Fora dessa lista, o PCDT DM2 2026 prioriza análogos para hipoglicemia noturna ou grave, IMC < 30, grande variabilidade glicêmica, disfunção renal ou hepática, gestantes e quem não consegue aplicar várias doses de basal [F]. A ordem de início entre os elegíveis em Betim depende do estoque e da pactuação municipal.";
      const f = sg.b.find(b => b.fluxo);
      if (f) { f.fluxo[2].t = "Titular 1–2 UI a cada 3–4 dias pela glicemia de jejum (80–130); não passar de 0,5 UI/kg; reavaliar em 1–2 semanas"; f.nota = "NT 169/2026 (via SBD 2026) e PCDT DM2 2026; DAPS Betim 2026 [F]."; }
      const r = sg.b.find(b => b.ref); if (r && !r.ref.includes("sbd_sus")) r.ref.push("pcdt_dm2", "sbd_sus");
    }
    const sint = sec(i, /Intensificação/);
    if (sint) {
      const u = sint.b.find(b => b.ul);
      if (u) u.ul.splice(0, 0, "**Antes da regular:** se jejum na meta e HbA1c alta, o PCDT 2026 propõe uma 2ª dose de NPH antes do café (80% da dose noturna, dividida 2/3 manhã e 1/3 noite), titulada pela glicemia antes do jantar (+1 a 3 UI a cada 3 dias) [F].",
        "**Perfil para ajustar:** glicemia antes das 3 refeições e, 1–2 dias por mês, perfil de 7–8 pontos (antes e 2 h após as refeições, deitar e madrugada) (PCDT 2026) [F].");
      const r = sint.b.find(b => b.ref); if (r) r.ref = ["pcdt_dm2", "sbd_sus"];
    }
  }

  // ── cr-polifarmacia ─────────────────────────────────────
  const p = get("cr-polifarmacia");
  if (p) {
    const s = JSON.stringify(p).replace("meta de HbA1c individualizada (< 7,5–8%) [F]", "meta de HbA1c individualizada: idoso saudável < 7,5% (PCDT 2026) ou 7,0–7,5% (SBD 2026); comprometido < 8,0% (PCDT) ou < 8,5% (SBD) [F]");
    Object.assign(p, JSON.parse(s));
    const r = p.guia.secoes[0].b.find(b => b.ref); if (r) r.ref = r.ref.filter(k => k !== "sbd_sus").concat(["pcdt_dm2", "sbd_metas"]);
  }
})();
