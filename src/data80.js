// ───────────── data80.js – v67: Guia Clínico – fase 2 (completar os guias antigos), lote 4: crônicos.
// "Ver também" em todos os guias crônicos antigos que não tinham; diferenciais [C] nos itens diagnósticos (tireoide, demência, Parkinson,
// artralgia, AR, psoríase, espondiloartrite, fibromialgia, gota, TDAH, IC, DRC, pré-diabetes);
// calculadora ACR/EULAR 2015 ligada à gota crônica. Condutas já conferidas nos guias.

(() => {
  const get = id => CONDICOES.find(x => x.id === id);
  const MUD = "v67 (26/10/2026): Guia Clínico completado (fase 2) – ";
  const AUG = (id, o) => {
    const c = get(id); if (!c || !c.guia) return;
    c.guia = {...c.guia, secoes: [...(c.guia.secoes || [])]};
    const g = c.guia;
    if (o.antes) g.secoes.unshift(...o.antes);
    if (o.dif) g.secoes.splice(Math.min(o.pos ?? 1, g.secoes.length), 0, {t: o.difT || "Diferenciais", b: [o.dif]});
    if (o.ir) g.secoes.push({t: "Ver também", b: [{ir: o.ir}]});
    if (o.calcs) g.calcs = [...new Set([...(g.calcs || []), ...o.calcs])];
    (c.mudancas = c.mudancas || []).push(MUD + (o.mud || (o.dif ? "diferenciais e links relacionados" : "links relacionados")) + ".");
  };
  const T = (rows, nota) => ({tab: {h: ["Hipótese", "Pistas"], r: rows}, nota: nota || "Conhecimento consolidado [C]."});

  // Só links
  AUG("cr-has", {ir: [["cr-has-meds", "Anti-hipertensivos"], ["cr-has-resistente", "HAS resistente"], ["pa-elevada", "PA elevada na UBS"], ["cr-dislipidemia", "Dislipidemia"], ["cr-drc", "DRC"]]});
  AUG("cr-has-resistente", {ir: [["cr-has", "HAS – metas"], ["cr-has-meds", "Anti-hipertensivos"], ["cr-apso", "Apneia do sono"], ["cr-drc", "DRC"]]});
  AUG("cr-has-meds", {ir: [["cr-has", "HAS – metas"], ["cr-has-resistente", "HAS resistente"], ["pn-has", "Hipertensão na gestação"], ["pp-pos-gestacao-risco", "Pós-parto"]]});
  AUG("cr-crise-has", {ir: [["pa-elevada", "PA elevada sem lesão"], ["pa-gestante", "PA elevada na gestante"], ["avc-ait", "AVC"], ["dor-toracica", "Dor torácica"]]});
  AUG("cr-dm2", {ir: [["cr-dm2-insulina", "Insulinoterapia"], ["cr-glp1", "GLP-1"], ["cr-pe-diabetico", "Pé diabético"], ["cr-prediabetes", "Pré-diabetes"], ["hipoglicemia", "Hipoglicemia"]], mud: "links relacionados (complementares)"});
  AUG("cr-dm2-insulina", {ir: [["cr-dm2", "DM2"], ["cr-glargina", "Glargina na APS"], ["hipoglicemia", "Hipoglicemia"], ["pn-dmg", "DMG"]]});
  AUG("cr-glargina", {ir: [["cr-dm2-insulina", "Insulinoterapia"], ["hipoglicemia", "Hipoglicemia"], ["cr-dm2", "DM2"]]});
  AUG("cr-dislipidemia", {ir: [["cr-has", "HAS"], ["cr-dm2", "DM2"], ["cr-dac", "Doença coronariana"], ["cr-masld", "Esteatose (MASLD)"], ["cr-hipotireoidismo", "Hipotireoidismo"]]});
  AUG("cr-pos-avc", {ir: [["avc-ait", "AVC agudo"], ["cr-fa", "Fibrilação atrial"], ["cr-dislipidemia", "Dislipidemia"], ["cr-has", "HAS"], ["cr-quedas", "Quedas"]]});
  AUG("cr-obesidade", {ir: [["cr-glp1", "GLP-1"], ["cr-prediabetes", "Pré-diabetes"], ["cr-masld", "MASLD"], ["cr-apso", "Apneia do sono"]], mud: "links relacionados (complementares)"});
  AUG("cr-vitd", {ir: [["cr-osteoporose", "Osteoporose"], ["pu-suplementacao", "Vitamina D na criança"], ["cr-quedas", "Quedas"]]});
  AUG("cr-asma", {ir: [["asma-crise", "Crise de asma"], ["cr-dpoc", "DPOC"], ["rinite", "Rinite alérgica"], ["asma-crianca", "Sibilância na criança"]]});
  AUG("cr-dpoc", {ir: [["dpoc-exac", "Exacerbação de DPOC"], ["tabagismo", "Tabagismo"], ["cr-asma", "Asma"], ["pv-pulmao", "Câncer de pulmão"]]});
  AUG("cr-ferro", {ir: [["anemia-ferropriva", "Anemia ferropriva"], ["pn-anemia", "Anemia na gestação"], ["cr-b12", "Vitamina B12"], ["sua", "Sangramento uterino"]]});
  AUG("cr-osteoporose", {ir: [["cr-quedas", "Quedas"], ["queda-idoso", "Queda no idoso"], ["cr-vitd", "Vitamina D"], ["climaterio", "Climatério"]]});
  AUG("cr-escalas", {ir: [["cr-aga", "Avaliação geriátrica"], ["po-idoso-vulneravel", "IVCF-20"], ["cr-fragilidade", "Fragilidade"]]});
  AUG("cr-fa", {ir: [["palpitacoes", "Palpitações"], ["cr-valvopatias", "Valvopatias"], ["cr-pos-avc", "Pós-AVC"], ["cr-ic", "IC"]]});
  AUG("cr-dac", {ir: [["dor-toracica", "Dor torácica"], ["cr-dislipidemia", "Dislipidemia"], ["cr-ic", "IC"], ["tabagismo", "Tabagismo"]]});
  AUG("cr-pe-diabetico", {ir: [["cr-dm2", "DM2"], ["ferida", "Ferimentos"], ["celulite", "Celulite"], ["onicocriptose", "Unha encravada"]]});
  AUG("cr-masld", {ir: [["cr-obesidade", "Obesidade"], ["cr-dm2", "DM2"], ["cr-alcool", "Álcool"], ["in-hepatites", "Hepatites"]], mud: "links relacionados (complementares)"});
  AUG("cr-b12", {ir: [["anemia-ferropriva", "Anemia ferropriva"], ["parestesias", "Parestesias"], ["cr-demencia", "Demência"]]});
  AUG("cr-polifarmacia", {ir: [["cr-bzd", "Desprescrição de BZD"], ["queda-idoso", "Queda no idoso"], ["delirium", "Delirium"], ["cr-aga", "Avaliação geriátrica"]]});
  AUG("cr-aga", {ir: [["cr-escalas", "Escalas"], ["cr-fragilidade", "Fragilidade"], ["cr-demencia", "Demência"], ["cr-polifarmacia", "Polifarmácia"]]});
  AUG("cr-inapetencia", {ir: [["perda-peso", "Perda de peso"], ["cr-fragilidade", "Fragilidade"], ["depressao", "Depressão"]]});
  AUG("cr-fragilidade", {ir: [["cr-quedas", "Quedas"], ["cr-inapetencia", "Inapetência"], ["po-idoso-vulneravel", "IVCF-20"]]});
  AUG("cr-quedas", {ir: [["queda-idoso", "Queda (atendimento)"], ["cr-osteoporose", "Osteoporose"], ["cr-polifarmacia", "Polifarmácia"]]});
  AUG("cr-apso", {ir: [["cr-has-resistente", "HAS resistente"], ["cr-obesidade", "Obesidade"], ["insonia", "Insônia"]]});
  AUG("cr-depressao", {ir: [["depressao", "Depressão (início)"], ["risco-suicida", "Ideação suicida"], ["cr-ansiedade", "Ansiedade"], ["pp-depressao", "Depressão perinatal"]]});
  AUG("cr-ansiedade", {ir: [["tag", "TAG"], ["panico", "Pânico"], ["cr-bzd", "Desprescrição de BZD"], ["insonia", "Insônia"]]});
  AUG("cr-bzd", {ir: [["insonia", "Insônia"], ["cr-ansiedade", "Ansiedade"], ["cr-polifarmacia", "Polifarmácia"], ["queda-idoso", "Queda no idoso"]]});
  AUG("cr-alcool", {ir: [["abstinencia-alcool", "Abstinência"], ["pv-alcool", "AUDIT-C"], ["cr-masld", "Fígado"], ["po-substancias", "Uso de substâncias"]]});
  AUG("cr-glp1", {ir: [["cr-obesidade", "Obesidade"], ["cr-dm2", "DM2"], ["cr-masld", "MASLD"]], mud: "links relacionados (complementares)"});
  AUG("cr-icfep", {ir: [["cr-ic", "ICFEr"], ["cr-fa", "Fibrilação atrial"], ["cr-has", "HAS"]], mud: "links relacionados (complementares)"});
  AUG("cr-valvopatias", {ir: [["cr-fa", "Fibrilação atrial"], ["cr-ic", "IC"], ["odontalgia", "Saúde bucal (endocardite)"]], mud: "links relacionados (complementares)"});

  // Diferenciais + links
  AUG("cr-ic", {
    dif: T([
      ["DPOC/asma", "Sibilância, tabagismo, espirometria [C]"],
      ["Edema por bloqueador de canal de cálcio", "Edema maleolar sem congestão nem dispneia [C]"],
      ["Síndrome nefrótica / hepatopatia", "Proteinúria maciça, albumina baixa, ascite, estigmas hepáticos [C]"],
      ["Anemia / hipertireoidismo", "Dispneia de esforço com alto débito [C]"],
      ["Obesidade/descondicionamento", "Dispneia sem congestão, BNP normal [C]"]
    ]),
    ir: [["cr-icfep", "ICFEp"], ["cr-fa", "Fibrilação atrial"], ["cr-valvopatias", "Valvopatias"], ["cr-dac", "Doença coronariana"]], mud: "diferenciais e links (complementares)"
  });
  AUG("cr-drc", {
    dif: T([
      ["Lesão renal aguda", "Queda recente da TFG (< 3 meses) – AINE, desidratação, IECA/BRA, obstrução, contraste [C]"],
      ["Obstrução urinária", "Homem idoso com LUTS, bexigoma, hidronefrose na USG [C]"],
      ["Glomerulonefrite", "Hematúria dismórfica, proteinúria, edema, HAS nova [C]"],
      ["Variação da creatinina", "Massa muscular alta, dieta, creatina – confirmar com repetição (≥ 3 meses) [C]"]
    ], "Conhecimento consolidado [C]. DRC exige alteração por > 3 meses [C]."),
    ir: [["cr-has", "HAS"], ["cr-dm2", "DM2"], ["hematuria", "Hematúria"], ["cr-polifarmacia", "Doses e desprescrição"]]
  });
  AUG("cr-prediabetes", {
    dif: T([
      ["DM2 já estabelecido", "Glicemia ≥ 126 ou HbA1c ≥ 6,5% confirmadas [C]"],
      ["Hiperglicemia por fármaco", "Corticoide, tiazídico, antipsicótico atípico [C]"],
      ["HbA1c falsamente alterada", "Anemia ferropriva, hemoglobinopatia, DRC – preferir glicemia/TOTG [C]"]
    ]),
    ir: [["cr-dm2", "DM2"], ["cr-obesidade", "Obesidade"], ["pp-pos-gestacao-risco", "Após DMG"]]
  });
  AUG("cr-hipotireoidismo", {
    dif: T([
      ["Hipotireoidismo subclínico transitório", "TSH levemente alto após doença aguda ou tireoidite – repetir em 6–12 semanas [C]"],
      ["Síndrome do eutireóideo doente", "Doença grave, TSH normal/baixo, T4L baixo [C]"],
      ["Fase de recuperação de tireoidite", "TSH alto após fase de hipertireoidismo (pós-parto, viral) [C]"],
      ["Interferência de fármacos/biotina", "Amiodarona, lítio, biotina em altas doses alteram exames [C]"],
      ["Depressão / anemia", "Fadiga e ganho de peso com TSH normal [C]"]
    ]),
    ir: [["cr-hipertireoidismo", "Hipertireoidismo"], ["pn-tireoide", "Tireoide na gestação"], ["fadiga", "Fadiga"], ["cr-dislipidemia", "Dislipidemia"]]
  });
  AUG("cr-hipertireoidismo", {
    dif: T([
      ["Doença de Graves", "Bócio difuso, oftalmopatia, TRAb positivo [C]"],
      ["Bócio multinodular / adenoma tóxico", "Idoso, nódulos, cintilografia com captação focal [C]"],
      ["Tireoidite (subaguda, pós-parto, silenciosa)", "Dor cervical ou pós-parto, captação baixa, autolimitada [C]"],
      ["Excesso de levotiroxina", "Uso de hormônio, TSH baixo iatrogênico [C]"],
      ["TSH baixo do 1º trimestre", "Fisiológico pelo hCG [C]"],
      ["Ansiedade / feocromocitoma", "Taquicardia e tremor com TSH normal [C]"]
    ]),
    ir: [["cr-hipotireoidismo", "Hipotireoidismo"], ["palpitacoes", "Palpitações"], ["cr-fa", "Fibrilação atrial"], ["perda-peso", "Perda de peso"]]
  });
  AUG("cr-demencia", {
    dif: T([
      ["Delirium", "Início agudo, flutuação, desatenção – causa clínica [C]"],
      ["Depressão (pseudodemência)", "Queixa de memória mais que a família, humor deprimido, 'não sei' [C]"],
      ["Causas reversíveis", "Hipotireoidismo, B12, sífilis, hidrocefalia de pressão normal, hematoma subdural, fármacos anticolinérgicos/BZD [C]"],
      ["Comprometimento cognitivo leve", "Déficit sem prejuízo funcional [C]"],
      ["Perda auditiva/visual", "Pior desempenho em testes sem declínio real [C]"]
    ]),
    ir: [["cr-alzheimer", "Alzheimer (PCDT)"], ["delirium", "Delirium"], ["cr-b12", "B12"], ["cr-polifarmacia", "Polifarmácia"]]
  });
  AUG("cr-alzheimer", {ir: [["cr-demencia", "Demência – avaliação"], ["po-acamado", "Acamado"], ["po-paliativos", "Paliativos"]]});
  AUG("cr-parkinson", {
    dif: T([
      ["Tremor essencial", "Tremor postural/de ação bilateral, melhora com álcool, sem bradicinesia [C]"],
      ["Parkinsonismo medicamentoso", "Metoclopramida, haloperidol, risperidona, cinarizina, flunarizina – simétrico [C]"],
      ["Parkinsonismo vascular", "Predomínio em membros inferiores, marcha, AVC prévios [C]"],
      ["Hidrocefalia de pressão normal", "Marcha magnética, incontinência, declínio cognitivo [C]"],
      ["Parkinson-plus", "Quedas precoces, disautonomia grave, má resposta à levodopa [C]"]
    ]),
    ir: [["tremor", "Tremor"], ["queda-idoso", "Queda no idoso"], ["cr-demencia", "Demência"], ["cr-polifarmacia", "Polifarmácia"]]
  });
  AUG("cr-artralgia", {
    ir: [["artrite-aguda", "Monoartrite aguda"], ["cr-ar", "Artrite reumatoide"], ["oa-joelho", "Osteoartrite"], ["chikungunya", "Chikungunya"], ["cr-fibromialgia", "Fibromialgia"]]
  });
  AUG("cr-ar", {
    dif: T([
      ["Artrite viral", "Chikungunya, parvovírus, hepatites – < 6 semanas, contexto epidemiológico [C]"],
      ["LES", "Citopenias, rim, serosite, FAN em título alto [C]"],
      ["Artrite psoriásica", "Psoríase, dactilite, IFD, assimetria [C]"],
      ["Gota poliarticular", "Tofos, hiperuricemia, crises prévias [C]"],
      ["Osteoartrite de mãos", "IFD e IFP com nódulos ósseos, rigidez curta [C]"],
      ["Polimialgia reumática", "> 50 anos, cinturas, VHS alta [C]"]
    ]),
    ir: [["cr-artralgia", "Artralgia"], ["cr-les", "LES"], ["cr-apso", "Artrite psoriásica"], ["cr-pmr", "Polimialgia"]]
  });
  AUG("cr-psoriase", {
    dif: T([
      ["Dermatite seborreica", "Escamas amareladas oleosas, couro cabeludo e face [C]"],
      ["Tinea corporis", "Borda ativa, clareamento central – exame micológico [C]"],
      ["Eczema numular", "Placas pruriginosas exsudativas [C]"],
      ["Pitiríase rósea", "Medalhão inicial, autolimitada [C]"],
      ["Sífilis secundária", "Lesões em palmas/plantas, VDRL [C]"],
      ["Líquen plano", "Pápulas violáceas poligonais, mucosa oral [C]"]
    ]),
    ir: [["cr-apso", "Artrite psoriásica"], ["seborreica", "Dermatite seborreica"], ["tinea", "Tinha"], ["pele-atlas", "Atlas de pele"]]
  });
  AUG("cr-apso", {ir: [["cr-psoriase", "Psoríase"], ["cr-ar", "AR"], ["cr-espondilo", "Espondiloartrite"]]});
  AUG("cr-espondilo", {
    dif: T([
      ["Lombalgia mecânica", "Piora com esforço, melhora com repouso, > 45 anos no início [C]"],
      ["Hiperostose esquelética difusa (DISH)", "Idoso, pontes ósseas anteriores, sem sacroiliíte [C]"],
      ["Fibromialgia", "Dor difusa, sem inflamação objetiva [C]"],
      ["Artrite reativa", "Uretrite/diarreia 1–4 semanas antes [C]"],
      ["DII com artropatia", "Diarreia crônica, sangue [C]"]
    ], "Conhecimento consolidado [C]. Dor lombar inflamatória: início < 45 anos, insidiosa, > 3 meses, melhora com exercício, não com repouso, dor noturna que melhora ao levantar [C]."),
    ir: [["lombalgia", "Lombalgia"], ["cr-apso", "Artrite psoriásica"], ["dii-suspeita", "DII"], ["olho-vermelho-alarme", "Uveíte"]]
  });
  AUG("cr-fibromialgia", {
    dif: T([
      ["Hipotireoidismo", "TSH alto, fadiga, ganho de peso [C]"],
      ["Polimialgia reumática", "> 50 anos, rigidez de cinturas, VHS/PCR altos [C]"],
      ["Miopatia (estatina, inflamatória)", "Fraqueza real, CK elevada [C]"],
      ["AR / LES / espondiloartrite", "Sinovite, alterações laboratoriais [C]"],
      ["Depressão, apneia do sono, deficiência de vitamina D", "Comorbidades que amplificam a dor [C]"]
    ]),
    ir: [["cr-artralgia", "Artralgia"], ["depressao", "Depressão"], ["insonia", "Insônia"], ["cr-pmr", "Polimialgia"]]
  });
  AUG("cr-gota", {
    dif: T([
      ["Artrite séptica", "Febre, prótese, imunossupressão – punção [C]"],
      ["Pseudogota (pirofosfato de cálcio)", "Idoso, joelho/punho, condrocalcinose [C]"],
      ["Celulite", "Eritema que ultrapassa a articulação, porta de entrada [C]"],
      ["Artrite psoriásica", "Dactilite, psoríase [C]"],
      ["Osteoartrite com nódulos", "Dor mecânica, sem crises inflamatórias [C]"]
    ]),
    calcs: ["sc:gota2015"],
    ir: [["gota", "Crise de gota"], ["artrite-aguda", "Monoartrite aguda"], ["cr-drc", "DRC"]]
  });
  AUG("cr-tdah", {
    dif: T([
      ["Ansiedade / depressão", "Desatenção por ruminação ou anedonia [C]"],
      ["Privação de sono / apneia", "Sonolência diurna, ronco [C]"],
      ["Déficit auditivo ou visual", "Desatenção em sala de aula – testar visão e audição [C]"],
      ["Transtorno de aprendizagem / deficiência intelectual", "Dificuldade restrita a leitura/escrita/cálculo ou global [C]"],
      ["TEA", "Prejuízo social e comportamentos restritos [C]"],
      ["Uso de substâncias / hipertireoidismo", "Início tardio, agitação nova [C]"]
    ], "Conhecimento consolidado [C]. TDAH exige sintomas antes dos 12 anos e em ≥ 2 contextos [C]."),
    ir: [["cr-tea", "TEA"], ["cr-adolescente", "Ansiedade/depressão no adolescente"], ["pu-telas", "Telas"]]
  });
  AUG("cr-tea", {ir: [["pu-dnpm", "Sinais de autismo"], ["cr-tdah", "TDAH"], ["pu-18m", "M-CHAT-R aos 18 meses"]]});
})();
