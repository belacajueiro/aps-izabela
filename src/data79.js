// ───────────── data79.js – v66: Guia Clínico – fase 2 (completar os guias antigos), lote 3: demanda espontânea de risco moderado/baixo.
// Diferenciais [C] e "Ver também": síndrome gripal, rinossinusite, faringite, otite média, otite externa, conjuntivites (3 itens com o mesmo guia),
// diarreia aguda do adulto, dispepsia, cistite, lombalgia, migrânea, VPPB, lombociatalgia, dermatite atópica, tabagismo.
// Condutas já conferidas nos guias.

(() => {
  const get = id => CONDICOES.find(x => x.id === id);
  const MUD = "v66 (26/10/2026): Guia Clínico completado (fase 2) – ";
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

  AUG("gripal", {
    dif: T([
      ["COVID-19", "Quadro semelhante; teste muda a conduta em ≥ 65 anos/imunossuprimidos (nirmatrelvir) [C]"],
      ["Dengue e outras arboviroses", "Febre com mialgia e dor retro-orbitária, **sem** coriza/tosse importantes, época de transmissão [C]"],
      ["Resfriado comum", "Coriza e espirros sem febre alta nem prostração [C]"],
      ["Pneumonia", "Febre persistente, taquipneia, ausculta focal, piora após melhora inicial [C]"],
      ["Faringite estreptocócica", "Odinofagia, exsudato, adenite cervical, sem tosse [C]"]
    ]),
    ir: [["covid", "COVID-19"], ["resfriado", "Resfriado comum"], ["pac", "Pneumonia"], ["dengue-a", "Dengue"], ["sepse", "Sepse"]]
  });
  AUG("sinusite", {
    dif: T([
      ["Resfriado (rinossinusite viral)", "< 10 dias, melhora progressiva; secreção verde não indica bactéria [C]"],
      ["Rinite alérgica", "Prurido, espirros em salva, gatilhos, sem febre [C]"],
      ["Dor dentária", "Dor em um dente, sensível à percussão [C]"],
      ["Migrânea / cefaleia tensional", "Dor 'sinusal' recorrente sem sintomas nasais purulentos [C]"],
      ["Corpo estranho nasal (criança)", "Rinorreia unilateral fétida [C]"],
      ["Complicação orbitária/intracraniana", "Edema periorbitário, alteração visual, cefaleia intensa, rigidez de nuca → urgência [C]"]
    ]),
    ir: [["resfriado", "Resfriado comum"], ["rinite", "Rinite alérgica"], ["odontalgia", "Dor de dente"], ["migranea", "Migrânea"]]
  });
  AUG("faringite", {
    dif: T([
      ["Faringite viral", "Coriza, tosse, rouquidão, conjuntivite, aftas [C]"],
      ["Mononucleose", "Adolescente, adenomegalia posterior, esplenomegalia, fadiga; exantema após amoxicilina [C]"],
      ["Abscesso periamigdaliano", "Trismo, voz abafada, desvio da úvula → urgência [C]"],
      ["Epiglotite", "Sialorreia, estridor, toxemia, posição de tripé → urgência [C]"],
      ["Gonococo / sífilis / HIV agudo", "Exposição sexual de risco; úlcera ou exantema [C]"],
      ["Herpangina / mão-pé-boca", "Criança, vesículas no palato mole, mãos e pés [C]"]
    ]),
    ir: [["resfriado", "Resfriado comum"], ["gripal", "Síndrome gripal"], ["maopeboca", "Mão-pé-boca"], ["gengivoestomatite", "Gengivoestomatite"]]
  });
  AUG("oma", {
    dif: T([
      ["Otite média com efusão", "Líquido sem sinais agudos (sem abaulamento nem dor/febre) – não usar antibiótico [C]"],
      ["Otite externa", "Dor à tração do pavilhão/tragus, conduto edemaciado, membrana normal [C]"],
      ["Miringite / hiperemia por choro", "Membrana vermelha sem abaulamento [C]"],
      ["Dor referida", "Dente, ATM, faringite – otoscopia normal [C]"],
      ["Mastoidite", "Edema e dor retroauricular, pavilhão deslocado → urgência [C]"]
    ]),
    ir: [["otite-externa", "Otite externa"], ["cerume", "Cerume"], ["febre-crianca", "Febre na criança"], ["conj-bact", "Conjuntivite + otite"]]
  });
  AUG("otite-externa", {
    dif: T([
      ["Otite média com perfuração", "Otorreia com história de dor que aliviou ao drenar; usar gota sem aminoglicosídeo [C]"],
      ["Otite externa necrosante", "Idoso diabético/imunossuprimido, dor intensa e persistente, tecido de granulação → urgência [C]"],
      ["Otomicose", "Prurido, debris brancos/pretos (algodão), pouca dor [C]"],
      ["Furúnculo do conduto", "Dor localizada, nódulo no terço externo [C]"],
      ["Dermatite de contato", "Prurido após brinco, fone, gotas (neomicina) [C]"],
      ["Herpes-zóster ótico (Ramsay Hunt)", "Vesículas no pavilhão + paralisia facial [C]"]
    ]),
    ir: [["oma", "Otite média aguda"], ["cerume", "Cerume"], ["zoster", "Herpes-zóster"]]
  });
  const DIF_CONJ = T([
    ["Ceratite", "Dor, fotofobia, baixa visual, lente de contato, fluoresceína positiva → oftalmologia [C]"],
    ["Uveíte anterior", "Injeção perilímbica, dor, fotofobia, pupila miótica [C]"],
    ["Glaucoma agudo", "Dor intensa, halos, pupila médio-fixa, náuseas [C]"],
    ["Corpo estranho", "Sensação de areia unilateral após partícula [C]"],
    ["Blefarite", "Bordas palpebrais com crostas, crônica [C]"],
    ["Hemorragia subconjuntival", "Mancha vermelha homogênea sem secreção [C]"]
  ]);
  const IR_CONJ = [["olho-vermelho-alarme", "Olho vermelho com alarme"], ["blefarite", "Blefarite"], ["corpo-estranho-ocular", "Corpo estranho"], ["oma", "Otite média (síndrome conjuntivite-otite)"]];
  ["conj-bact", "conj-viral", "conj-alergica"].forEach(id => AUG(id, {dif: DIF_CONJ, difT: "Diferenciais que não podem passar", ir: IR_CONJ}));
  AUG("diarreia", {
    dif: T([
      ["Diarreia por medicamento", "Antibiótico recente (C. difficile), metformina, magnésio, laxante [C]"],
      ["Apendicite / diverticulite", "Dor localizada que precede ou supera a diarreia [C]"],
      ["Isquemia mesentérica", "Idoso, FA, dor desproporcional ao exame [C]"],
      ["DII (1º surto)", "Sangue, > 14 dias, perda de peso, manifestações extraintestinais [C]"],
      ["Hipertireoidismo / doença celíaca", "Diarreia recorrente com perda de peso [C]"]
    ]),
    ir: [["dii-suspeita", "Diarreia crônica / DII"], ["nauseas", "Náuseas e vômitos"], ["parasitoses", "Enteroparasitoses"], ["diarreia-crianca", "Diarreia na criança"]]
  });
  AUG("dispepsia", {
    dif: T([
      ["DRGE", "Pirose e regurgitação predominam [C]"],
      ["Doença coronariana", "Desconforto epigástrico ao esforço, fatores de risco – ECG [C]"],
      ["Colelitíase", "Dor em HCD pós-prandial, em cólica, irradiada para o dorso [C]"],
      ["Pancreatite crônica/câncer", "Perda de peso, dor em barra, etilismo [C]"],
      ["Medicamentos", "AINE, AAS, bisfosfonato, ferro, metformina [C]"],
      ["Câncer gástrico", "> 60 anos, perda de peso, anemia, vômitos, disfagia [C]"]
    ]),
    ir: [["drge", "DRGE"], ["dor-toracica", "Dor torácica"], ["nauseas", "Náuseas e vômitos"], ["anemia-ferropriva", "Anemia ferropriva"]]
  });
  AUG("cistite", {
    dif: T([
      ["Vaginite / cervicite", "Corrimento, prurido, disúria 'externa', dispareunia [C]"],
      ["Uretrite por IST", "Parceria nova, corrimento uretral, urocultura negativa [C]"],
      ["Pielonefrite", "Febre, dor lombar, Giordano, náuseas [C]"],
      ["Cólica renal", "Dor em cólica e hematúria [C]"],
      ["Síndrome da bexiga dolorosa", "Sintomas crônicos com culturas negativas [C]"],
      ["Gestação", "Polaciúria e atraso menstrual – teste de gravidez [C]"]
    ]),
    ir: [["pielonefrite", "Pielonefrite"], ["itu-gestante", "ITU na gestante"], ["vaginose", "Vaginose"], ["uretrite", "Uretrite"]]
  });
  AUG("lombalgia", {
    dif: T([
      ["Lombociatalgia (radiculopatia)", "Dor que irradia abaixo do joelho em dermátomo [C]"],
      ["Cauda equina", "Retenção/incontinência, anestesia em sela → urgência [C]"],
      ["Fratura osteoporótica", "Idoso, corticoide, trauma mínimo, dor súbita [C]"],
      ["Câncer/metástase", "> 50 anos, câncer prévio, perda de peso, dor noturna [C]"],
      ["Infecção (espondilodiscite)", "Febre, droga injetável, imunossupressão [C]"],
      ["Espondiloartrite", "< 45 anos, dor inflamatória (melhora com exercício, rigidez matinal > 30 min) [C]"],
      ["Causa visceral", "Pielonefrite, cólica renal, aneurisma de aorta, pancreatite [C]"]
    ]),
    ir: [["lombociatalgia", "Lombociatalgia"], ["cr-espondilo", "Espondiloartrite"], ["cr-osteoporose", "Osteoporose"], ["colica-renal", "Cólica renal"]]
  });
  AUG("lombociatalgia", {
    ir: [["lombalgia", "Lombalgia"], ["cr-espondilo", "Espondiloartrite"], ["parestesias", "Parestesias"]]
  });
  AUG("migranea", {
    dif: T([
      ["Cefaleia tensional", "Pressão bilateral, leve a moderada, sem náusea nem piora com atividade [C]"],
      ["Cefaleia por uso excessivo de analgésico", "≥ 15 dias/mês com analgésico frequente [C]"],
      ["Cefaleia em salvas", "Dor orbitária intensa de 15–180 min com lacrimejamento e rinorreia ipsilaterais [C]"],
      ["Hemorragia subaracnoidea", "Pior dor da vida, súbita (pico em segundos) → urgência [C]"],
      ["AIT", "Sintomas negativos (perda) súbitos, sem marcha, > 50 anos [C]"],
      ["Arterite temporal", "> 50 anos, cefaleia nova, claudicação mandibular, VHS alta [C]"]
    ]),
    ir: [["tensional", "Cefaleia tensional"], ["cefaleia-abuso", "Uso excessivo de analgésico"], ["avc-ait", "AVC/AIT"], ["cr-pmr", "Polimialgia / arterite"]]
  });
  AUG("vppb", {
    ir: [["tontura", "Tontura – avaliação"], ["queda-idoso", "Queda no idoso"], ["avc-ait", "Suspeita de AVC"]]
  });
  AUG("dermatite-atopica", {
    dif: T([
      ["Dermatite seborreica", "Escamas oleosas em couro cabeludo, face e dobras, pouco prurido [C]"],
      ["Escabiose", "Prurido noturno, contactantes, lesões em interdígitos e punhos [C]"],
      ["Dermatite de contato", "Limitada ao local de contato [C]"],
      ["Psoríase", "Placas bem delimitadas com escama prateada em extensoras [C]"],
      ["Tinea", "Borda ativa descamativa, crescimento centrífugo [C]"],
      ["Impetiginização / eczema herpético", "Crostas melicéricas; vesículas umbilicadas dolorosas com febre → urgência no herpético [C]"]
    ]),
    ir: [["seborreica", "Dermatite seborreica"], ["escabiose", "Escabiose"], ["dermatite-contato", "Dermatite de contato"], ["impetigo", "Impetigo"]]
  });
  AUG("tabagismo", {
    ir: [["pv-pulmao", "Câncer de pulmão (TC)"], ["cr-dpoc", "DPOC"], ["cr-dac", "Doença coronariana"]]
  });
})();
