// ───────────── data46.js – v39.4: consultas de pré-natal por trimestre no mesmo formato da evolução guiada; sinais de alarme específicos e retorno em linha própria; carga tabágica no tabagismo
(function(){
  const get = id => CONDICOES.find(x => x.id === id);
  const EX1 = "### EXAMES DO 1° TRIMESTRE ###\n- TR (__/__/__): HIV ___ / Sífilis ___ / Hep C ___ / Hep B ___\n- LAB (__/__/__): Hb ___ / Ht ___ / GL ___ / Plaq ___\nABO/Rh: ___ | Glicemia de jejum: ___ | Toxoplasmose IgG/IgM: ___ | Eletroforese de Hb: ___\n- EAS e urocultura (__/__/__): ___\n- USG (__/__/__): ___\n------------------------------------------------------------------------------------";
  const VAC = (w20, w28) => `### VACINAÇÃO ###\n- COVID-19: ___\n- Influenza: ___\n- Hepatite B (se esquema incompleto): ___\n- dTpa (a partir de 20 semanas): ${w20}\n- VSR (a partir de 28 semanas): ${w28}`;
  const ALARME_2 = "- Oriento sinais de alarme: sangramento, perda de líquido, febre, cefaleia forte ou visão turva, dor forte na boca do estômago, inchaço repentino, contrações regulares ou dor forte na barriga, bebê mexendo menos – procurar a maternidade.";
  const ALARME_3 = "- Oriento sinais de alarme e de trabalho de parto: sangramento, perda de líquido, contrações regulares, cefaleia forte ou visão turva, dor forte na boca do estômago, inchaço repentino, febre, bebê mexendo menos – procurar a maternidade (CMI).";
  const FECHO_PN = "- Dúvidas esclarecidas; gestante verbaliza entendimento e concorda com a conduta.";

  const t2 = get("pn-2tri");
  if (t2) {
    t2.S = "## PRÉ-NATAL ##\n__ª CONSULTA DE PRÉ-NATAL – 2º TRIMESTRE\n- IG: ___ (DUM/USG) | DPP: ___\n- PNRH / PNAR (alto risco), mantendo acompanhamento na UBS\n- Comorbidades: ___\n- Em uso de: sulfato ferroso, AAS ___\n\nGestante comparece à consulta para seguimento de pré-natal. Refere ___ (bem-estar geral / queixas: ___).\nNega sintomas urinários, dor abdominal, perdas de líquido, sangramento, contrações, cefaleia ou alterações visuais. Movimentação fetal: ___ (percebida / ainda não).\n\n# HPP: ___. Alergias: ___.\n# Antecedentes obstétricos: GPA ___ | intercorrências em gestações anteriores: ___";
    t2.O = "# EXAME FÍSICO:\nPA: ___x___ mmHg\nPeso: ___ kg (ganho ___ kg desde o início)\nBCF: ___ bpm\nAU: ___ cm\nMF: ___ | Edema: ___\n\n" + EX1 + "\n### EXAMES DO 2° TRIMESTRE ###\n- TOTG 75 g (__/__/__): jejum ___ / 1 h ___ / 2 h ___\n- Toxoplasmose IgG/IgM (se suscetível): ___\n- Coombs indireto (se Rh negativo): ___\n- USG morfológico 2°T (__/__/__): ___\n------------------------------------------------------------------------------------\n" + VAC("___", "a partir de 28 semanas");
    t2.A = "- Gestação de ___ semanas, pré-natal de risco ___ (habitual / intermediário / alto), evolução ___ (favorável / com ___).";
    t2.P = "- TOTG 75 g entre 24 e 28 semanas (jejum, 1 h e 2 h).\n- Toxoplasmose IgG/IgM se suscetível; Coombs indireto se Rh negativo.\n- Mantido ferro; AAS até 36 semanas se em uso. Cálcio usado só para pré-eclâmpsia: suspenso (Betim, 30/09/2026).\n- dTpa a partir de 20 semanas, se ainda não feita.\n- Atualizada caderneta da gestante.\n" + ALARME_2 + "\n" + FECHO_PN + "\n\n- Retorno em 4 semanas, alternando médico e enfermagem.";
    t2.mudancas = (t2.mudancas || []).concat(["Revisão 14/10/2026 (v39.4): SOAP no mesmo formato da consulta guiada (cabeçalho, HPP, exame físico, exames por trimestre, vacinação); sinais de alarme específicos e retorno em linha própria."]);
  }

  const t3 = get("pn-3tri");
  if (t3) {
    t3.S = "## PRÉ-NATAL ##\n__ª CONSULTA DE PRÉ-NATAL – 3º TRIMESTRE\n- IG: ___ (DUM/USG) | DPP: ___\n- PNRH / PNAR (alto risco), mantendo acompanhamento na UBS\n- Comorbidades: ___\n- Em uso de: sulfato ferroso, AAS ___ (suspender com 36 semanas)\n\nGestante comparece à consulta para seguimento de pré-natal. Refere ___ (bem-estar geral / queixas: ___).\nNega sangramento, perda de líquido, contrações regulares, cefaleia, escotomas, epigastralgia ou edema súbito. Relata movimentação fetal ___ (preservada).\n\n# HPP: ___. Alergias: ___.\n# Antecedentes obstétricos: GPA ___ | intercorrências em gestações anteriores: ___";
    t3.O = "# EXAME FÍSICO:\nPA: ___x___ mmHg\nPeso: ___ kg\nBCF: ___ bpm\nAU: ___ cm\nApresentação: ___ (cefálica / pélvica / transversa)\nMF: ___ | Edema: ___\n\n" + EX1 + "\n### EXAMES DO 2° TRIMESTRE ###\n- TOTG 75 g (__/__/__): jejum ___ / 1 h ___ / 2 h ___\n- USG morfológico 2°T (__/__/__): ___\n------------------------------------------------------------------------------------\n### EXAMES DO 3° TRIMESTRE ###\n- TR (__/__/__): HIV ___ / Sífilis ___ / Hep C ___ / Hep B ___\n- LAB (__/__/__): Hb ___ / Ht ___ / GL ___ / Plaq ___ / GJ ___\nToxoplasmose IgG/IgM (se suscetível): ___ | Coombs indireto (se Rh negativo): ___\n- EAS e urocultura (__/__/__): ___\n- USG 3º tri (__/__/__): ___\n------------------------------------------------------------------------------------\n" + VAC("___", "___");
    t3.A = "- Gestação de ___ semanas, pré-natal de risco ___ (habitual / intermediário / alto), evolução ___ (favorável / com ___).";
    t3.P = "- Exames do 3º trimestre: hemograma, glicemia de jejum, EAS e urocultura, testes de sífilis e HIV, Coombs se Rh negativo, toxoplasmose se suscetível.\n- Vacina VSR (a partir de 28 semanas) e dTpa, se pendentes.\n- AAS suspenso com 36 semanas (se em uso).\n- Plano de parto conversado; maternidade de referência confirmada.\n- Cesárea a pedido: ___ (se desejo mantido após aconselhamento – TCLE, registro e termo de transferência ao CMI a partir de 36 semanas; cirurgia entre 39 e 41 semanas completas).\n- A partir de 34 semanas: registro diário de movimentos fetais (≥ 6 movimentos em 1 h após comer; se não, repetir; persistindo < 6 → maternidade).\n- 41 semanas: encaminhar ao CMI.\n- Atualizada caderneta da gestante.\n" + ALARME_3 + "\n" + FECHO_PN + "\n\n- Retorno quinzenal até 36 semanas e semanal depois.";
    t3.mudancas = (t3.mudancas || []).concat(["Revisão 14/10/2026 (v39.4): SOAP no mesmo formato da consulta guiada; sinais de alarme e de trabalho de parto específicos; retorno em linha própria."]);
  }

  const p1 = get("pn-1consulta");
  if (p1) {
    p1.P = p1.P.replace("- Sinais de alerta orientados. Retorno em até 4 semanas, alternando médico e enfermagem.", "- Caderneta da gestante preenchida.\n" + ALARME_2.replace(", contrações regulares ou dor forte na barriga, bebê mexendo menos", ", dor forte na barriga") + "\n" + FECHO_PN);
    p1.P += "\n\n- Retorno em até 4 semanas, alternando médico e enfermagem.";
    p1.mudancas = (p1.mudancas || []).concat(["Revisão 14/10/2026 (v39.4): sinais de alarme específicos e retorno em linha própria, no fim do plano."]);
  }

  // Puericultura: alarme específico no lugar do genérico
  CONDICOES.filter(c => c.modulo === "pu" && typeof c.P === "string" && c.P.includes("- Sinais de alerta orientados.")).forEach(c => {
    c.P = c.P.replace("- Sinais de alerta orientados.", "- Oriento sinais de alarme: febre, recusa alimentar, vômitos, letargia, desconforto respiratório.\n- Dúvidas dos responsáveis esclarecidas.\n");
  });

  // Carga tabágica à mão no item de tabagismo e na DPOC
  const tb = get("tabagismo");
  if (tb && tb.guia) tb.guia.calcs = ["macos", ...(tb.guia.calcs || []).filter(x => x !== "macos")];
  const dp = get("cr-dpoc");
  if (dp && dp.guia && !(dp.guia.calcs || []).includes("macos")) dp.guia.calcs = [...(dp.guia.calcs || []), "macos"];
})();
