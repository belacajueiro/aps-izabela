// ───────────── data78.js – v65: Guia Clínico – fase 2 (completar os guias antigos), lote 2.
// Diferenciais [C] e links "Ver também" em guias antigos de risco alto: pielonefrite, tontura, olho vermelho com alarme, LES, polimialgia,
// diarreia na criança, dengue, febre maculosa, esquizofrenia, bipolar, depressão/ansiedade no adolescente, TB, sífilis, HIV, drogas,
// saúde mental masculina, violência (vulneráveis, mulher, atendimento inicial), PCR e paliativos. Condutas já conferidas nos guias.

(() => {
  const get = id => CONDICOES.find(x => x.id === id);
  const MUD = "v65 (26/10/2026): Guia Clínico completado (fase 2) – ";
  const AUG = (id, o) => {
    const c = get(id); if (!c || !c.guia) return;
    c.guia = {...c.guia, secoes: [...(c.guia.secoes || [])]};
    const g = c.guia;
    if (o.dif) g.secoes.splice(Math.min(o.pos ?? 1, g.secoes.length), 0, {t: o.difT || "Diferenciais", b: [o.dif]});
    if (o.ir) g.secoes.push({t: "Ver também", b: [{ir: o.ir}]});
    if (o.calcs) g.calcs = [...new Set([...(g.calcs || []), ...o.calcs])];
    (c.mudancas = c.mudancas || []).push(MUD + (o.mud || (o.dif ? "diferenciais e links relacionados" : "links relacionados")) + ".");
  };
  const T = (rows, nota) => ({tab: {h: ["Hipótese", "Pistas"], r: rows}, nota: nota || "Conhecimento consolidado [C]."});

  AUG("pielonefrite", {
    dif: T([
      ["Cólica renal (± infecção)", "Dor em cólica intensa, hematúria; febre + obstrução = urgência urológica [C]"],
      ["Apendicite / colecistite", "Dor localizada em FID/HCD, sem sintomas urinários [C]"],
      ["DIP", "Mulher sexualmente ativa, dor pélvica, corrimento, dor à mobilização do colo [C]"],
      ["Prostatite aguda", "Homem, disúria, dor perineal, próstata dolorosa ao toque [C]"],
      ["Gestação ectópica", "Atraso menstrual, dor e sangramento – teste de gravidez [C]"],
      ["Pneumonia de base", "Dor 'lombar' com tosse e crepitações [C]"]
    ]),
    ir: [["itu-gestante", "ITU na gestante"], ["colica-renal", "Cólica renal"], ["dip", "DIP"], ["sepse", "Sepse"]]
  });
  AUG("tontura", {
    dif: T([
      ["VPPB", "Segundos, ao deitar/virar na cama, Dix-Hallpike positivo [C]"],
      ["Neurite vestibular", "Vertigem contínua por dias após viose, sem perda auditiva, HINTS periférico [C]"],
      ["Labirintite", "Como a neurite, com perda auditiva [C]"],
      ["Doença de Ménière", "Crises de horas com zumbido, plenitude e hipoacusia flutuante [C]"],
      ["Migrânea vestibular", "Crises com cefaleia, foto/fonofobia, história de enxaqueca [C]"],
      ["AVC/AIT de fossa posterior", "Déficits associados, HINTS central, fatores de risco vascular [C]"],
      ["Hipotensão ortostática / arritmia", "Pré-síncope ao levantar ou com palpitações [C]"],
      ["Medicamentos", "Anti-hipertensivos, sedativos, anticonvulsivantes, aminoglicosídeos [C]"]
    ]),
    ir: [["vppb", "VPPB"], ["avc-ait", "Suspeita de AVC"], ["sincope", "Síncope"], ["migranea", "Migrânea"], ["queda-idoso", "Queda no idoso"]]
  });
  AUG("olho-vermelho-alarme", {
    dif: T([
      ["Glaucoma agudo", "Dor intensa, halos, pupila médio-fixa, olho duro, náuseas [C]"],
      ["Uveíte anterior", "Dor, fotofobia, injeção perilímbica, pupila miótica [C]"],
      ["Ceratite/úlcera de córnea", "Lente de contato, opacidade, fluoresceína positiva [C]"],
      ["Esclerite", "Dor profunda que acorda à noite, cor violácea, doença autoimune [C]"],
      ["Endoftalmite", "Cirurgia ocular recente, hipópio [C]"],
      ["Hemorragia subconjuntival", "Mancha vermelha homogênea, sem dor e com visão normal [C]"]
    ]),
    ir: [["corpo-estranho-ocular", "Corpo estranho/abrasão"], ["hemorragia-subconj", "Hemorragia subconjuntival"], ["conj-bact", "Conjuntivite bacteriana"], ["conj-viral", "Conjuntivite viral"]]
  });
  AUG("cr-les", {
    dif: T([
      ["Lúpus induzido por fármaco", "Hidralazina, isoniazida, minociclina, anti-TNF; anti-histona; sem rim/SNC [C]"],
      ["Artrite reumatoide", "Poliartrite erosiva, FR/anti-CCP, sem citopenias [C]"],
      ["Síndrome de Sjögren", "Olho e boca secos, anti-Ro/La [C]"],
      ["Infecções virais (parvovírus, HIV, hepatites)", "Artralgia, exantema, citopenias transitórias [C]"],
      ["Fibromialgia com FAN baixo título", "Dor difusa sem sinais objetivos – FAN não confirma LES [C]"],
      ["Dermatomiosite", "Fraqueza proximal, CK alta, heliótropo [C]"]
    ]),
    ir: [["cr-artralgia", "Artralgia"], ["cr-ar", "Artrite reumatoide"], ["cr-osteoporose", "Osteoporose (corticoide)"]]
  });
  AUG("cr-pmr", {
    dif: T([
      ["Artrite reumatoide de início tardio", "Sinovite em mãos/punhos, anti-CCP [C]"],
      ["Hipotireoidismo", "Mialgia, rigidez, TSH alto [C]"],
      ["Miopatia (estatina, inflamatória)", "Fraqueza real, CK alta [C]"],
      ["Mieloma / câncer", "Perda de peso, anemia, eletroforese alterada, dor óssea [C]"],
      ["Infecção (endocardite)", "Febre, sopro, hemoculturas [C]"],
      ["Capsulite adesiva bilateral / ombro doloroso", "Limitação passiva, VHS normal [C]"]
    ]),
    ir: [["cr-ar", "Artrite reumatoide"], ["cr-osteoporose", "Osteoporose"], ["ombro", "Ombro doloroso"], ["cr-hipotireoidismo", "Hipotireoidismo"]]
  });
  AUG("diarreia-crianca", {
    dif: T([
      ["Infecção urinária", "Lactente febril com vômitos/diarreia – EAS/urocultura [C]"],
      ["Invaginação intestinal", "Lactente, choro em crises, fezes em 'geleia de framboesa', massa [C]"],
      ["Apendicite", "Dor localizada, febre, vômitos antes da diarreia [C]"],
      ["Otite/pneumonia", "Diarreia como sintoma associado a infecção extraintestinal [C]"],
      ["Síndrome hemolítico-urêmica", "Diarreia sanguinolenta seguida de palidez, oligúria, petéquias [C]"],
      ["Intolerância/alergia alimentar", "Relação com leite, sangue nas fezes no lactente (APLV) [C]"]
    ]),
    ir: [["diarreia", "Diarreia aguda (adulto)"], ["parasitoses", "Enteroparasitoses"], ["febre-crianca", "Febre na criança"], ["itu-crianca", "ITU na criança"]]
  });
  AUG("dengue-a", {
    dif: T([
      ["Chikungunya", "Artralgia intensa e incapacitante, edema articular [C]"],
      ["Zika", "Exantema pruriginoso precoce, conjuntivite não purulenta, febre baixa [C]"],
      ["Leptospirose", "Enchente/esgoto, mialgia de panturrilha, sufusão conjuntival, icterícia [C]"],
      ["Febre maculosa", "Carrapato, exantema palmo-plantar – doxiciclina precoce [C]"],
      ["Influenza/COVID-19", "Sintomas respiratórios predominantes [C]"],
      ["Sarampo/rubéola", "Exantema com tosse, coriza e conjuntivite; não vacinado [C]"],
      ["Malária", "Procedência de área endêmica [C]"],
      ["Meningococcemia", "Petéquias com toxemia rápida [C]"]
    ]),
    pos: 1,
    ir: [["chikungunya", "Chikungunya"], ["leptospirose", "Leptospirose"], ["febre-maculosa", "Febre maculosa"], ["febre-adulto", "Febre sem foco"], ["sepse", "Sepse"]]
  });
  AUG("febre-maculosa", {
    dif: T([
      ["Dengue", "Exantema sem palmas/plantas, prova do laço, plaquetopenia; sem carrapato [C]"],
      ["Leptospirose", "Contato com água/roedores, mialgia de panturrilha [C]"],
      ["Meningococcemia", "Petéquias/púrpura com toxemia rápida – ceftriaxona e notificação [C]"],
      ["Sarampo", "Tosse, coriza, conjuntivite, Koplik [C]"],
      ["Farmacodermia", "Exposição a fármaco, sem febre alta toxêmica [C]"]
    ]),
    ir: [["dengue-a", "Dengue"], ["leptospirose", "Leptospirose"], ["sepse", "Sepse"], ["exantema", "Exantema febril"]]
  });
  AUG("cr-esquizofrenia", {
    dif: T([
      ["Psicose induzida por substância", "Cocaína, anfetamina, maconha de alta potência, abstinência [C]"],
      ["Delirium", "Flutuação, desatenção, causa clínica [C]"],
      ["Transtorno bipolar com psicose", "Episódios de humor bem definidos [C]"],
      ["Depressão psicótica", "Delírios de culpa/ruína com humor deprimido [C]"],
      ["Causa orgânica", "Epilepsia temporal, tumor, encefalite, hipertireoidismo, demência [C]"]
    ]),
    ir: [["agitacao", "Agitação psicomotora"], ["cr-bipolar", "Transtorno bipolar"], ["cr-drogas", "Uso de drogas"], ["tabagismo", "Tabagismo"]]
  });
  AUG("cr-bipolar", {
    dif: T([
      ["Depressão unipolar", "Sem episódios de mania/hipomania – perguntar ativamente antes de antidepressivo [C]"],
      ["TDAH", "Sintomas crônicos desde a infância, sem episódios [C]"],
      ["Transtorno de personalidade borderline", "Instabilidade em horas, ligada a relações [C]"],
      ["Uso de substâncias", "Euforia/irritabilidade com cocaína, anfetamina, corticoide [C]"],
      ["Hipertireoidismo", "Agitação, insônia, perda de peso, TSH baixo [C]"]
    ]),
    ir: [["depressao", "Depressão"], ["cr-esquizofrenia", "Psicoses"], ["risco-suicida", "Ideação suicida"], ["cr-hipotireoidismo", "Hipotireoidismo (lítio)"]]
  });
  AUG("cr-adolescente", {
    ir: [["depressao", "Depressão (adulto)"], ["risco-suicida", "Ideação suicida"], ["po-violencia-vulneraveis", "Violência contra criança/adolescente"], ["pu-telas", "Telas"]]
  });
  AUG("in-tb", {
    dif: T([
      ["Pneumonia bacteriana", "Quadro agudo que responde ao antibiótico em 48–72 h [C]"],
      ["Câncer de pulmão", "Tabagista > 50 anos, hemoptise, massa [C]"],
      ["Micobactéria não tuberculosa / micose", "Paracoccidioidomicose em trabalhador rural, imunossupressão [C]"],
      ["Bronquiectasias", "Escarro crônico abundante, infecções de repetição [C]"],
      ["Tosse por IECA, asma, DRGE", "Sem febre, perda de peso nem sudorese [C]"]
    ]),
    ir: [["tb-sr", "Sintomático respiratório"], ["in-iltb", "ILTB e contatos"], ["in-hiv", "HIV"], ["perda-peso", "Perda de peso"]]
  });
  AUG("in-sifilis", {
    dif: T([
      ["Herpes genital", "Úlceras múltiplas dolorosas com vesículas [C]"],
      ["Cancroide", "Úlcera dolorosa, purulenta, bubão [C]"],
      ["Pitiríase rósea", "Medalhão inicial, placas em 'árvore de Natal', sem palmas/plantas [C]"],
      ["Farmacodermia / exantema viral", "Exposição ou viose recente; VDRL não reagente [C]"],
      ["Falso-positivo do VDRL", "Título baixo com treponêmico não reagente (gestação, autoimune) [C]"]
    ]),
    ir: [["sifilis", "Sífilis (demanda)"], ["herpes-genital", "Herpes genital"], ["pv-infecciosas", "Quem testar"], ["in-prep", "PrEP/PEP"]]
  });
  AUG("in-hiv", {
    ir: [["hiv-diagnostico", "Teste rápido reagente"], ["in-tb", "Tuberculose"], ["in-iltb", "ILTB"], ["in-prep", "PrEP/PEP"], ["pv-infecciosas", "Quem testar"]]
  });
  AUG("cr-drogas", {
    ir: [["agitacao", "Agitação"], ["dor-toracica", "Dor torácica"], ["cr-alcool", "Álcool"], ["tabagismo", "Tabagismo"], ["po-rua", "Pessoa em situação de rua"]]
  });
  AUG("ho-mental", {
    calcs: ["sc:cssrs"],
    ir: [["risco-suicida", "Ideação suicida"], ["depressao", "Depressão"], ["pv-alcool", "Álcool"], ["cr-alcool", "Transtorno por uso de álcool"]]
  });
  AUG("po-violencia-vulneraveis", {
    ir: [["violencia", "Violência – atendimento inicial"], ["mu-violencia", "Violência contra a mulher"], ["pep", "PEP"], ["ae", "Contracepção de emergência"]]
  });
  AUG("mu-violencia", {
    ir: [["violencia", "Violência – atendimento inicial"], ["po-violencia-vulneraveis", "Criança, idoso e PcD"], ["pep", "PEP"], ["ae", "Contracepção de emergência"]]
  });
  AUG("violencia", {
    ir: [["mu-violencia", "Violência contra a mulher"], ["po-violencia-vulneraveis", "Criança, idoso e PcD"], ["pep", "PEP"], ["ae", "Contracepção de emergência"]]
  });
  AUG("pcr", {
    ir: [["ovace", "Engasgo"], ["anafilaxia", "Anafilaxia"], ["hipoglicemia", "Hipoglicemia"], ["intoxicacao", "Intoxicação"], ["urg-abordagem", "Abordagem da urgência"]]
  });
  AUG("po-paliativos", {
    ir: [["po-acamado", "Pessoa acamada"], ["cr-polifarmacia", "Desprescrição"], ["delirium", "Delirium"], ["cr-demencia", "Demência"]]
  });
})();
