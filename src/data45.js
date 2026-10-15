// ───────────── data45.js – v39: NT Conjunta 32/2026 (projeto-piloto da glargina) e prioridade local em Betim; pendência da cistite (linha Betim)
FONTES["nt32_2026"] = {s: "MS – NT Conjunta 32/2026 (revogada)", t: "Ministério da Saúde. Nota Técnica Conjunta nº 32/2026-DEPROS/SAPS/DAET/SAES/MS (06/02/2026): projeto-piloto da glargina (≥ 80 anos com DM1 ou DM2 e DM1 de 2 a 17 anos; DF, AP, PB e PR). Revogada pela NTC 169/2026, item 8.4 (histórico; documento recebido da usuária).", f: "F", url: ""};
FONTES["ntc169_2026"] = {s: "MS – NTC 169/2026 (glargina na APS)", t: "Ministério da Saúde. Nota Técnica Conjunta nº 169/2026-DAF/SCTIE/DEPROS/SAPS/DAET/SAES/MS (assinada em 12–15/06/2026; Ofício Circular nº 77/2026/SCTIE): glargina no Componente Básico para DM1 de 2 a < 18 anos e pessoas ≥ 70 anos com DM1 ou DM2, incluindo novos diagnósticos; quem está no CEAF permanece nas regras vigentes; implantação gradual conforme organização local; recomenda substituir a NPH nos elegíveis pela restrição global de insulina humana; conversão 1:1 ou −20%; titulação em intervalos de até 3 dias; critérios de excesso de basal; caneta, tubetes e agulhas por pessoa; armazenamento; notificação no e-Notivisa e no VigiMed. Revoga a NT 26/2026 e a NT Conjunta 32/2026 (norma federal; texto conferido no documento recebido da usuária).", f: "F", url: "https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/notas-tecnicas/2026/nota-tecnica-conjunta-no-169-2026-dafsctie-deprossaps-daetsaes-ms.pdf"};
FONTES["betim_glargina_prior"] = {s: "Betim – prioridade da glargina", t: "SMS Betim/DAPS. Capacitação 'Manejo clínico do diabetes na APS' (2026): proposta de ordem de prioridade para a transição NPH → glargina, a pactuar; a SMS informou que publicará nota técnica municipal com os grupos prioritários, porque o estoque não permite trocar todos os elegíveis de uma vez (informação da capacitação, relatada pela usuária).", f: "F", url: ""};

(function(){
  const get = id => CONDICOES.find(x => x.id === id);
  const sec = (c, re) => c && c.guia && c.guia.secoes.find(s => re.test(s.t));

  const i = get("cr-dm2-insulina");
  if (i) {
    const sg = sec(i, /Glargina na APS/);
    if (sg) {
      const t = sg.b.find(b => b.tab);
      if (t) t.nota = "NTC 169/2026 [F]. Ela substituiu o projeto-piloto da NT Conjunta 32/2026 (≥ 80 anos e DM1 de 2 a 17 anos, em 4 estados), que foi revogada [F]. Fora dessas listas, o PCDT DM2 2026 prioriza análogos para hipoglicemia noturna ou grave, IMC < 30, grande variabilidade glicêmica, disfunção renal ou hepática, gestantes e quem não consegue aplicar várias doses de basal [F].";
      const iT = sg.b.indexOf(t);
      sg.b.splice(iT + 1, 0, {nota: "**Betim: a troca será por grupos prioritários.** O estoque não cobre todos os elegíveis de uma vez, e a SMS vai publicar nota técnica municipal com a ordem [F: capacitação municipal]. Proposta levada à oficina, ainda a pactuar: 1º DM1 de 2 a < 18 anos sem glargina deferida no CEAF e novos diagnósticos ou novas insulinizações de elegíveis; 2º pessoas ≥ 70 anos fora da meta de HbA1c – este é critério local, não da NT [F: slides DAPS]. Até a nota sair, não trocar por conta própria: confirmar com a farmácia e a coordenação."});
      const f = sg.b.find(b => b.fluxo);
      if (f) { f.fluxo[0].t = "Elegível, no grupo prioritário de Betim e com estoque confirmado com a farmácia?"; f.fluxo[2].t = "Titular 1–2 UI pela glicemia de jejum (80–130) a cada 3 dias (NTC 169/2026; a SBD cita 3–4); não passar de 0,5 UI/kg; reavaliar em 1–2 semanas"; f.nota = "NTC 169/2026, PCDT DM2 2026 e DAPS Betim 2026 [F]."; }
      const iF = sg.b.indexOf(f);
      sg.b.splice(iF + 1, 0, {ul: [
        "**Por que trocar:** a NPH está com restrição global de produção; o MS recomenda substituir pela glargina nos elegíveis e vai reduzir aos poucos a NPH distribuída [F].",
        "**Por pessoa:** 1 caneta reutilizável (dura 3 anos ou 5.000 aplicações), tubetes de glargina 100 UI/mL (média de 3,7 por mês) e 1 agulha de 4 mm por dia para cada tipo de insulina [F].",
        "**Conservação:** tubete fechado na geladeira (2–8 °C); aberto, até 30 °C por no máximo 28 dias [F].",
        "**Dispensação:** o farmacêutico demonstra a montagem do tubete e o teste de escorva (fluxo) antes de cada aplicação [F].",
        "**Notificar:** defeito da caneta no e-Notivisa; evento adverso do medicamento no VigiMed. Caneta avariada volta no estojo original [F].",
        "**Compartilhar com a atenção especializada:** nefropatia, retinopatia ou neuropatia diabética, DRC avançada, insulinoterapia complexa ou difícil controle; receitas da especializada vigentes podem ser renovadas na APS [F].",
        "**DM1 na criança:** basal em geral 30–50% da dose total do dia (~30% no lactente; 50–55% no adolescente) [F]."]});
      const pb = sg.b.find(b => b.perola && /Sobrebasaliza/.test(b.perola.t));
      if (pb) pb.perola.x = "DM2: basal > 0,5 UI/kg/dia (até 0,75 se resistência insulínica importante), HbA1c alta com jejum na meta, hipoglicemia ou queda > 50 mg/dL entre deitar e acordar. DM1 na criança e no adolescente: basal > 50% da dose total do dia, queda noturna > 30 mg/dL (criança) ou > 50 mg/dL (adolescente), hipoglicemia com grande variabilidade (NTC 169/2026) [F]. Nesses casos, não subir a basal: revisar técnica, lipo-hipertrofia e adesão; considerar 1 dose de regular (basal plus) ou apoio da atenção especializada.";
      const r = sg.b.find(b => b.ref); if (r) r.ref = [...new Set([...r.ref, "betim_glargina_prior"])];
    }
    const rg = i.rx.find(r => /glargina/i.test(r.titulo));
    if (rg) { rg.titulo = "Insulina glargina – elegíveis da NTC 169/2026, conforme a prioridade de Betim"; rg.texto = rg.texto.replace("Titular pela glicemia de jejum a cada 3–4 dias (+1 a 2 UI) até 80–130", "Titular pela glicemia de jejum a cada 3 dias (+1 a 2 UI) até 80–130"); rg.nota = "Conversão 1:1 (NPH 1×/dia) ou −20% (NPH ≥ 2×/dia) e titulação pela glicemia de jejum em intervalos de até 3 dias: NTC 169/2026 [F] (a SBD 2026 cita 3–4 dias); meta de jejum 80–130 e teto de 0,5 UI/kg: SBD 2026 e PCDT DM2 2026 [F]; redução de 25–30% se hipoglicemias e passos de 1–2 UI: material da DAPS Betim 2026 [F]. A troca não altera a insulina regular. Não iniciar sem estoque garantido nem fora do grupo prioritário de Betim."; }
    const st = sec(i, /Técnica, insumos/);
    if (st){ const u = st.b.find(b => b.ul); if (u) u.ul = u.ul.map(x => /^Conservação/.test(x) ? "Conservação: geladeira (2–8 °C, não congelar). Em uso, fora da geladeira até 30 °C: tubete de glargina por até 28 dias (NTC 169/2026) [F]; frasco de NPH/regular conforme a bula do fabricante." : /^Glargina: tubete/.test(x) ? "Glargina: tubete 100 UI/mL com caneta reutilizável e agulha de 4 mm (1 agulha por dia para cada tipo de insulina, NTC 169/2026) [F]." : x); }
    i.sus.betim = "Glargina na APS para os elegíveis da NTC 169/2026, por grupos prioritários que a SMS vai definir em nota técnica municipal (estoque insuficiente para trocar todos de uma vez); só iniciar com estoque confirmado com a farmácia; 100 tiras/90 dias (curva escalonada); farmácia clínica da eMulti para início/transição, hipoglicemias de repetição e baixa adesão (DAPS, 2026). REMUME Betim: insulina NPH e regular (frasco e caneta 3 mL); glargina consta da lista (uso conforme protocolo). Insumos conforme protocolo municipal.";
    i.nv = ["Nota técnica municipal de Betim sobre a glargina (grupos prioritários, local e sistema de dispensação): anunciada na capacitação, ainda não publicada – conferir quando sair."];
    i.evid.fontes = [...new Set([...i.evid.fontes, "betim_glargina_prior"])];
    i.mudancas.push("Revisão 14/10/2026 (v39): NTC 169/2026 conferida no texto integral (revoga a NT Conjunta 32/2026 do piloto): critérios de excesso de basal no DM1 pediátrico, titulação em até 3 dias, insumos, armazenamento, notificação e compartilhamento com a atenção especializada; troca por grupos prioritários em Betim, com nota técnica municipal prevista.");
  }

  // Pendência aberta em 14/10/2026: linha Betim da cistite
  const c = get("cistite");
  if (c) {
    c.sus.betim = "REMUME Betim: nitrofurantoína 100 mg (1ª escolha), amoxicilina + clavulanato 500/125 mg comprimido e 250/62,5 mg/5 mL suspensão (a alternativa SUS da prescrição); cefalexina 500 mg e sulfametoxazol + trimetoprima 400/80 mg também constam, mas não são a 1ª escolha do app para cistite não complicada.";
    c.mudancas = (c.mudancas || []).concat(["Revisão 14/10/2026 (v39): linha Betim completada com amoxicilina + clavulanato (REMUME, cód. 22534 e 24538) e com cefalexina e SMX-TMP marcados como não preferenciais."]);
  }
})();
