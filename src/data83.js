// ───────────── data83.js – v70: Guia Clínico – fase 2, lote 7 (último): pele/demanda, puericultura e consultas guiadas.
// Diferenciais [C] em febre amarela, farmacodermia grave e choro agudo do lactente; links em tensional, primeira consulta de pré-natal
// e consultas guiadas; EPDS no puerpério guiado; seguimento do VDRL na 1ª consulta. Nenhuma conduta ou dose nova.
// Faixa "Agir agora" em in-hiv, cr-has-resistente e monilíase oral (texto tirado do alerta/encaminhamento do item).

(() => {
  const get = id => CONDICOES.find(x => x.id === id);
  const MUD = "v70 (26/10/2026): Guia Clínico completado (fase 2) – ";
  const AUG = (id, o) => {
    const c = get(id); if (!c || !c.guia) return;
    c.guia = {...c.guia, secoes: [...(c.guia.secoes || [])]};
    const g = c.guia;
    if (o.dif) g.secoes.splice(Math.min(o.pos ?? 1, g.secoes.length), 0, {t: o.difT || "Diferenciais", b: [o.dif]});
    if (o.ir) {
      const last = g.secoes[g.secoes.length - 1];
      if (last && last.t === "Ver também") g.secoes[g.secoes.length - 1] = {t: "Ver também", b: [{ir: [...(last.b[0].ir || []), ...o.ir]}]};
      else g.secoes.push({t: "Ver também", b: [{ir: o.ir}]});
    }
    if (o.calcs) g.calcs = [...new Set([...(g.calcs || []), ...o.calcs])];
    (c.mudancas = c.mudancas || []).push(MUD + (o.mud || (o.dif ? "diferenciais e links relacionados" : "links relacionados")) + ".");
  };
  const T = (rows, nota) => ({tab: {h: ["Hipótese", "Pistas"], r: rows}, nota: nota || "Conhecimento consolidado [C]."});

  AUG("febre-amarela", {
    dif: T([
      ["Leptospirose", "Enchente/esgoto/rato, mialgia em panturrilhas, sufusão conjuntival, icterícia rubínica [C]"],
      ["Dengue grave", "Plaquetopenia, extravasamento plasmático, hemoconcentração; icterícia é rara [C]"],
      ["Malária", "Viagem à região amazônica ou fora do país; gota espessa/teste rápido [C]"],
      ["Hepatite viral aguda", "Pródromo arrastado, transaminases muito altas sem febre alta mantida [C]"],
      ["Febre maculosa", "Carrapato, capivara, exantema palmoplantar, piora rápida [C]"],
      ["Sepse / colangite", "Foco infeccioso, dor em hipocôndrio direito [C]"]
    ]),
    pos: 3,
    ir: [["leptospirose", "Leptospirose"], ["dengue-a", "Dengue"], ["febre-maculosa", "Febre maculosa"], ["malaria", "Malária"], ["pv-vacinas", "Vacinas do adulto"]]
  });
  AUG("pele-farmacodermia", {
    dif: T([
      ["Eritema multiforme", "Lesões em alvo típicas nas extremidades, pouca mucosa, após herpes [C]"],
      ["Exantema morbiliforme simples", "Sem bolhas, sem mucosa, sem dor cutânea nem febre alta [C]"],
      ["DRESS", "Febre, edema facial, linfonodos, eosinofilia, hepatite, 2–8 semanas após o fármaco [C]"],
      ["Síndrome da pele escaldada estafilocócica", "Criança, sem mucosa, descamação superficial [C]"],
      ["Pênfigo / penfigoide", "Bolhas crônicas, idoso, sem relação com medicamento novo [C]"],
      ["Varicela / herpes disseminado", "Vesículas em fases diferentes, contexto infeccioso [C]"]
    ], "Conhecimento consolidado [C]. Qualquer dúvida com bolha, mucosa ou dor na pele → tratar como grave e referenciar."),
    pos: 1,
    ir: [["anafilaxia", "Anafilaxia"], ["urticaria", "Urticária aguda"], ["exantema", "Exantema febril"], ["varicela", "Varicela"]]
  });
  AUG("pu-choro-colica", {
    dif: T([
      ["Infecção (ITU, otite, meningite)", "Febre, gemência, recusa alimentar, letargia [C]"],
      ["Hérnia inguinal encarcerada / torção testicular", "Abaulamento ou escroto endurecido – examinar a fralda [C]"],
      ["Invaginação intestinal", "Crises de choro com palidez e flexão das pernas, vômitos, fezes em geleia [C]"],
      ["Fio de cabelo enrolado (dedo, pênis)", "Sulco com edema distal [C]"],
      ["Trauma não acidental", "Hematoma em bebê que não anda, fratura, história incoerente [C]"],
      ["Abrasão de córnea / fissura anal", "Lacrimejamento unilateral; sangue vivo nas fezes [C]"]
    ], "Conhecimento consolidado [C]. Cólica é diagnóstico de exclusão: choro agudo diferente do habitual pede exame completo no mesmo dia."),
    difT: "Diferenciais que não podem passar",
    pos: 1,
    ir: [["colica-lactente", "Cólica (demanda)"], ["pp-depressao", "Depressão pós-parto"], ["febre-menor-3m", "Febre < 3 meses"]]
  });
  AUG("tensional", {ir: [["migranea", "Migrânea"], ["cefaleia-abuso", "Cefaleia por uso excessivo de analgésico"], ["cr-ansiedade", "Ansiedade"], ["insonia", "Insônia"]]});
  AUG("pele-urticaria-cronica", {ir: [["cr-hipotireoidismo", "Tireoide"], ["pele-atlas", "Atlas de pele"]]});
  AUG("pn-1consulta", {
    ir: [["pn-risco", "Estratificação de risco"], ["pn-vacinas", "Vacinas"], ["in-sifilis", "Sífilis"], ["pn-anemia", "Anemia"], ["pn-rh", "Rh negativo"], ["pn-toxo", "Toxoplasmose"], ["pn-dmg", "DMG"], ["pn-tireoide", "Tireoide"], ["hepatites-tr", "Hepatites (teste rápido)"]],
    calcs: ["vdrl"]
  });
  AUG("pn-guiada", {ir: [["pn-1consulta", "Exames: resultado → conduta"], ["pn-risco", "Risco gestacional"], ["pn-queixas", "Queixas comuns"], ["pa-gestante", "PA elevada na gestante"], ["sangramento-1tri", "Sangramento"]]});
  AUG("pp-guiada", {ir: [["pp-1semana", "Primeira semana"], ["pp-contracepcao", "Contracepção pós-parto"], ["pp-depressao", "Depressão pós-parto"], ["mastite", "Mastite"], ["pp-pos-gestacao-risco", "Após gestação de risco"]], calcs: ["sc:epds"], mud: "links relacionados e EPDS"});
  AUG("pu-guiada", {ir: [["pu-vacinas", "Vacinas"], ["pu-crescimento", "Crescimento"], ["pu-dnpm", "Desenvolvimento"], ["pu-alimentacao", "Alimentação"], ["pu-acidentes", "Prevenção de acidentes"], ["pu-checkup", "Check-up 0–19 anos"]]});
  AUG("co-consulta", {ir: [["urg-abordagem", "Urgência na UBS"], ["pv-checkup", "Check-up do adulto"], ["pv-checkup-idoso", "Check-up do idoso"], ["cr-polifarmacia", "Polifarmácia"]]});

  // Guias de risco alto/alerta ainda sem "Agir agora"
  const URG = (id, txt) => { const c = get(id); if (!c || !c.guia || c.guia.urg) return; c.guia = {...c.guia, urg: txt}; (c.mudancas = c.mudancas || []).push(MUD + "faixa de alerta no guia."); };
  URG("moniliase-oral", (get("moniliase-oral") || {}).alerta);
  URG("in-hiv", "Sinais de infecção oportunista (febre persistente, dispneia, cefaleia intensa ou déficit neurológico, emagrecimento importante) → urgência/SAE no mesmo dia. Diagnóstico novo: vincular ao SAE com prioridade.");
  URG("cr-has-resistente", "PA muito elevada com sintomas ou lesão aguda de órgão-alvo (dor torácica, dispneia, déficit neurológico, alteração visual) é emergência hipertensiva → urgência. Sem sintomas: não baixar rápido na UBS.");
})();
