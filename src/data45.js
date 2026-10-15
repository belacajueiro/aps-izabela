// ───────────── data45.js – v39: NT Conjunta 32/2026 (projeto-piloto da glargina) e prioridade local em Betim; pendência da cistite (linha Betim)
FONTES["nt32_2026"] = {s: "MS – NT Conjunta 32/2026 (piloto da glargina)", t: "Ministério da Saúde. Nota Técnica Conjunta nº 32/2026-DEPROS/SAPS/DAET/SAES/MS (assinada em 06/02/2026): transição NPH → glargina no projeto-piloto (≥ 80 anos com DM1 ou DM2 e DM1 de 2 a 17 anos; DF, AP, PB e PR); glargina 1×/dia em horário fixo; conversão 1:1 (NPH 1×/dia) ou −20% (NPH ≥ 2×/dia); titulação pela glicemia de jejum em intervalos de até 3 dias; critérios de excesso de basal no DM2 e no DM1 pediátrico. A NTC 169/2026 ampliou o público para ≥ 70 anos (norma federal; documento recebido da usuária).", f: "F", url: ""};
FONTES["betim_glargina_prior"] = {s: "Betim – prioridade da glargina", t: "SMS Betim/DAPS. Capacitação 'Manejo clínico do diabetes na APS' (2026): proposta de ordem de prioridade para a transição NPH → glargina, a pactuar; a SMS informou que publicará nota técnica municipal com os grupos prioritários, porque o estoque não permite trocar todos os elegíveis de uma vez (informação da capacitação, relatada pela usuária).", f: "F", url: ""};

(function(){
  const get = id => CONDICOES.find(x => x.id === id);
  const sec = (c, re) => c && c.guia && c.guia.secoes.find(s => re.test(s.t));

  const i = get("cr-dm2-insulina");
  if (i) {
    const sg = sec(i, /Glargina na APS/);
    if (sg) {
      const t = sg.b.find(b => b.tab);
      if (t) t.nota = "NTC 169/2026 [F]. Antes dela, a NT Conjunta 32/2026 limitava o piloto a ≥ 80 anos e DM1 de 2 a 17 anos em 4 estados [F]. Fora dessas listas, o PCDT DM2 2026 prioriza análogos para hipoglicemia noturna ou grave, IMC < 30, grande variabilidade glicêmica, disfunção renal ou hepática, gestantes e quem não consegue aplicar várias doses de basal [F].";
      const iT = sg.b.indexOf(t);
      sg.b.splice(iT + 1, 0, {nota: "**Betim: a troca será por grupos prioritários.** O estoque não cobre todos os elegíveis de uma vez, e a SMS vai publicar nota técnica municipal com a ordem [F: capacitação municipal]. Proposta levada à oficina, ainda a pactuar: 1º DM1 de 2 a < 18 anos sem glargina deferida no CEAF e novos diagnósticos ou novas insulinizações de elegíveis; 2º pessoas ≥ 70 anos fora da meta de HbA1c – este é critério local, não da NT [F: slides DAPS]. Até a nota sair, não trocar por conta própria: confirmar com a farmácia e a coordenação."});
      const f = sg.b.find(b => b.fluxo);
      if (f) { f.fluxo[0].t = "Elegível, no grupo prioritário de Betim e com estoque confirmado com a farmácia?"; f.fluxo[2].t = "Titular 1–2 UI pela glicemia de jejum (80–130) a cada 3 dias (NT 32/2026; a SBD cita 3–4); não passar de 0,5 UI/kg; reavaliar em 1–2 semanas"; f.nota = "NT 32/2026, NTC 169/2026 (via SBD 2026), PCDT DM2 2026 e DAPS Betim 2026 [F]."; }
      const pb = sg.b.find(b => b.perola && /Sobrebasaliza/.test(b.perola.t));
      if (pb) pb.perola.x = "DM2: basal > 0,5 UI/kg/dia (até 0,75 se resistência insulínica importante), HbA1c alta com jejum na meta, hipoglicemia ou queda > 50 mg/dL entre deitar e acordar. DM1 na criança e no adolescente: basal > 50% da dose total do dia, queda noturna > 30 mg/dL (criança) ou > 50 mg/dL (adolescente), hipoglicemia com grande variabilidade (NT 32/2026) [F]. Nesses casos, não subir a basal: revisar técnica, lipo-hipertrofia e adesão; considerar 1 dose de regular (basal plus) ou apoio da atenção especializada.";
      const r = sg.b.find(b => b.ref); if (r) r.ref = [...new Set([...r.ref, "nt32_2026", "betim_glargina_prior"])];
    }
    const rg = i.rx.find(r => /glargina/i.test(r.titulo));
    if (rg) { rg.titulo = "Insulina glargina – elegíveis da NTC 169/2026, conforme a prioridade de Betim"; rg.texto = rg.texto.replace("Titular pela glicemia de jejum a cada 3–4 dias (+1 a 2 UI) até 80–130", "Titular pela glicemia de jejum a cada 3 dias (+1 a 2 UI) até 80–130"); rg.nota = "Conversão 1:1 (NPH 1×/dia) ou −20% (NPH ≥ 2×/dia) e titulação pela glicemia de jejum em intervalos de até 3 dias: NT 32/2026 e NTC 169/2026 [F] (a SBD 2026 cita 3–4 dias); meta de jejum 80–130 e teto de 0,5 UI/kg: SBD 2026 e PCDT DM2 2026 [F]; redução de 25–30% se hipoglicemias e passos de 1–2 UI: material da DAPS Betim 2026 [F]. A troca não altera a insulina regular. Não iniciar sem estoque garantido nem fora do grupo prioritário de Betim."; }
    i.sus.betim = "Glargina na APS para os elegíveis da NTC 169/2026, por grupos prioritários que a SMS vai definir em nota técnica municipal (estoque insuficiente para trocar todos de uma vez); só iniciar com estoque confirmado com a farmácia; 100 tiras/90 dias (curva escalonada); farmácia clínica da eMulti para início/transição, hipoglicemias de repetição e baixa adesão (DAPS, 2026). REMUME Betim: insulina NPH e regular (frasco e caneta 3 mL); glargina consta da lista (uso conforme protocolo). Insumos conforme protocolo municipal.";
    i.nv = ["Nota técnica municipal de Betim sobre a glargina (grupos prioritários, local e sistema de dispensação): anunciada na capacitação, ainda não publicada – conferir quando sair."];
    i.evid.fontes = [...new Set([...i.evid.fontes, "nt32_2026", "betim_glargina_prior"])];
    i.mudancas.push("Revisão 14/10/2026 (v39): NT Conjunta 32/2026 (piloto, critérios de excesso de basal no DM1 pediátrico, titulação em até 3 dias) e troca por grupos prioritários em Betim, com nota técnica municipal prevista.");
  }

  // Pendência aberta em 14/10/2026: linha Betim da cistite
  const c = get("cistite");
  if (c) {
    c.sus.betim = "REMUME Betim: nitrofurantoína 100 mg (1ª escolha), amoxicilina + clavulanato 500/125 mg comprimido e 250/62,5 mg/5 mL suspensão (a alternativa SUS da prescrição); cefalexina 500 mg e sulfametoxazol + trimetoprima 400/80 mg também constam, mas não são a 1ª escolha do app para cistite não complicada.";
    c.mudancas = (c.mudancas || []).concat(["Revisão 14/10/2026 (v39): linha Betim completada com amoxicilina + clavulanato (REMUME, cód. 22534 e 24538) e com cefalexina e SMX-TMP marcados como não preferenciais."]);
  }
})();
