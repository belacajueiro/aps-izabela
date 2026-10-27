// ───────────── data81.js – v68: Guia Clínico – fase 2 (completar os guias antigos), lote 5: saúde da mulher e do homem.
// "Ver também" nos 21 guias; diferenciais [C] em climatério, SUA, endometriose, SOP, mama (queixas), HPB, DE e testosterona baixa;
// fluxogramas em endometriose (tratamento empírico), DE e testosterona baixa. Condutas e doses já conferidas nos guias (PCDT Endometriose 2026,
// PCDT SOP 2019 etc.); fluxogramas montados a partir delas [C/F].

(() => {
  const get = id => CONDICOES.find(x => x.id === id);
  const MUD = "v68 (26/10/2026): Guia Clínico completado (fase 2) – ";
  const AUG = (id, o) => {
    const c = get(id); if (!c || !c.guia) return;
    c.guia = {...c.guia, secoes: [...(c.guia.secoes || [])]};
    const g = c.guia;
    if (o.dif) g.secoes.splice(Math.min(o.pos ?? 1, g.secoes.length), 0, {t: o.difT || "Diferenciais", b: [o.dif]});
    if (o.extra) g.secoes.splice(Math.min(o.extraPos ?? g.secoes.length, g.secoes.length), 0, ...o.extra);
    if (o.ir) g.secoes.push({t: "Ver também", b: [{ir: o.ir}]});
    if (o.calcs) g.calcs = [...new Set([...(g.calcs || []), ...o.calcs])];
    (c.mudancas = c.mudancas || []).push(MUD + (o.mud || (o.dif ? "diferenciais e links relacionados" : "links relacionados")) + ".");
  };
  const T = (rows, nota) => ({tab: {h: ["Hipótese", "Pistas"], r: rows}, nota: nota || "Conhecimento consolidado [C]."});

  // Mulher
  AUG("mu-rotina", {ir: [["mu-colo", "Rastreio do colo"], ["mu-mama", "Rastreio de mama"], ["mu-metodos", "Contracepção"], ["mu-violencia", "Violência contra a mulher"], ["pv-vacinas", "Vacinas do adulto"]]});
  AUG("mu-colo", {ir: [["mu-rotina", "Consulta de rotina"], ["condiloma", "Condiloma"], ["in-hiv", "HIV (rastreio anual)"], ["sangramento-1tri", "Sangramento"]]});
  AUG("mu-mama", {
    dif: T([
      ["Mastalgia cíclica", "Bilateral, pré-menstrual, sem nódulo dominante [C]"],
      ["Fibroadenoma", "Jovem, nódulo móvel, elástico, bem delimitado [C]"],
      ["Cisto mamário", "30–50 anos, nódulo liso, às vezes doloroso; USG resolve [C]"],
      ["Mastite / abscesso", "Lactante, dor, calor, febre [C]"],
      ["Ectasia ductal / papiloma", "Descarga papilar; sanguinolenta, unilateral e espontânea → investigar [C]"],
      ["Câncer de mama", "Nódulo endurecido, fixo, retração, pele em casca de laranja, linfonodo axilar [C]"]
    ], "Conhecimento consolidado [C]. Sinais de suspeita e BI-RADS no guia [F]."),
    pos: 2,
    ir: [["mastite", "Mastite"], ["amamentacao", "Amamentação"], ["mu-rotina", "Consulta de rotina"]]
  });
  AUG("mu-climaterio", {
    dif: T([
      ["Gestação", "Atraso menstrual na perimenopausa – β-hCG [C]"],
      ["Hipo/hipertireoidismo", "Fogachos, palpitação, fadiga – TSH [C]"],
      ["Insuficiência ovariana prematura", "< 40 anos com amenorreia e FSH elevado em 2 dosagens [C]"],
      ["Depressão / ansiedade", "Humor e sono como queixa principal [C]"],
      ["Medicamentos", "Tamoxifeno, inibidores de aromatase, ISRS/IRSN causam fogachos [C]"],
      ["Feocromocitoma / carcinoide (raros)", "Crises com HAS, rubor e diarreia [C]"]
    ]),
    ir: [["climaterio", "Climatério (demanda)"], ["cr-osteoporose", "Osteoporose"], ["mu-sua", "Sangramento uterino anormal"], ["sua", "SUA (demanda)"]]
  });
  AUG("mu-metodos", {ir: [["mu-mec", "Critérios de elegibilidade"], ["mu-hormonal", "Hormonais: esquecimento e sangramento"], ["mu-larc", "LARC"], ["ae", "Contracepção de emergência"], ["pp-contracepcao", "Pós-parto"]]});
  AUG("mu-mec", {ir: [["mu-metodos", "Métodos"], ["mu-hormonal", "Hormonais"], ["pp-contracepcao", "Pós-parto"], ["migranea", "Migrânea com aura"]]});
  AUG("mu-hormonal", {ir: [["mu-metodos", "Métodos"], ["mu-mec", "Critérios de elegibilidade"], ["ae", "Contracepção de emergência"], ["teste-gravidez-positivo", "Teste de gravidez positivo"]]});
  AUG("mu-larc", {ir: [["mu-metodos", "Métodos"], ["pp-contracepcao", "Pós-parto"], ["mu-sua", "Sangramento uterino anormal"], ["dip", "DIP"]]});
  AUG("mu-laqueadura", {ir: [["mu-metodos", "Métodos"], ["mu-larc", "LARC (alternativa reversível)"], ["ho-rotina", "Vasectomia (parceiro)"]]});
  AUG("mu-preconcepcional", {ir: [["pn-1consulta", "Primeira consulta de pré-natal"], ["pv-vacinas", "Vacinas"], ["pv-infecciosas", "Testagem"], ["cr-dm2", "DM2"], ["cr-has-meds", "Anti-hipertensivos na gestação"]]});
  AUG("mu-infertilidade", {
    dif: T([
      ["Anovulação (SOP, tireoide, prolactina)", "Ciclos irregulares, hirsutismo, galactorreia [C]"],
      ["Fator tubário", "DIP prévia, cirurgia pélvica, endometriose [C]"],
      ["Fator masculino", "Responde por ~metade dos casos – espermograma do parceiro desde o início [C]"],
      ["Idade materna / reserva ovariana", "> 35 anos: investigar após 6 meses [C]"]
    ]),
    ir: [["mu-sop", "SOP"], ["mu-endometriose", "Endometriose"], ["ho-testosterona", "Testosterona (não usar se deseja filhos)"], ["mu-preconcepcional", "Preconcepção"]]
  });
  AUG("mu-sua", {ir: [["sua", "SUA (demanda)"], ["miomas", "Miomas"], ["anemia-ferropriva", "Anemia ferropriva"], ["mu-climaterio", "Climatério"]]});
  AUG("mu-endometriose", {
    dif: T([
      ["Dismenorreia primária", "Início logo após a menarca, responde a AINE/ACO, exame normal [C]"],
      ["Adenomiose", "Útero aumentado e amolecido, SUA, > 35 anos [C]"],
      ["DIP crônica", "Corrimento, IST, dor à mobilização do colo [C]"],
      ["Síndrome do intestino irritável", "Dor com alteração do hábito que melhora ao evacuar [C]"],
      ["Cistite intersticial", "Dor suprapúbica, urgência, urocultura negativa [C]"],
      ["Mioma / cisto ovariano", "Massa ou alteração na USG [C]"]
    ]),
    extra: [{t: "Fluxo na APS", b: [
      {fluxo: [
        {t: "Dismenorreia/dor pélvica sugestiva"},
        {t: "Dor incapacitante, endometrioma > 4 cm, infertilidade ou suspeita de doença profunda?", ramos: [
          {r: "Sim", n: [{t: "Ginecologia (mantendo tratamento na APS)", k: "warn"}]},
          {r: "Não", n: [{t: "Tratamento empírico: AINE + combinado ou progestagênio da REMUME", k: "ok"}]}
        ]},
        {t: "Reavaliar em 3–6 meses", ramos: [
          {r: "Melhorou", n: [{t: "Manter; combinado contínuo se dor na pausa", k: "ok"}]},
          {r: "Não melhorou", n: [{t: "Desogestrel/DIU-LNG pelo PCDT ou ginecologia", k: "warn"}]}
        ]},
        {t: "CA-125 não entra na decisão", k: "q"}
      ], nota: "PCDT Endometriose 2026 (conteúdo já conferido no guia) [F]."}
    ]}],
    extraPos: 2,
    ir: [["endometriose", "Endometriose (demanda)"], ["dismenorreia", "Dismenorreia"], ["mu-infertilidade", "Infertilidade"], ["dip", "DIP"]],
    mud: "diferenciais, fluxograma na APS e links"
  });
  AUG("mu-sop", {
    dif: T([
      ["Hiperprolactinemia", "Galactorreia, amenorreia, medicamentos (antipsicóticos, metoclopramida) [F/C]"],
      ["Hipotireoidismo", "TSH elevado [F/C]"],
      ["Hiperplasia adrenal congênita não clássica", "17-OH-progesterona elevada [F/C]"],
      ["Tumor virilizante (ovário/adrenal)", "Instalação rápida, clitoromegalia, voz grave, testosterona muito alta [C]"],
      ["Síndrome de Cushing", "Estrias violáceas, fraqueza proximal, HAS, DM [C]"],
      ["Insuficiência ovariana / gestação", "FSH alto; β-hCG [C]"]
    ], "Exames de exclusão do PCDT SOP (testosterona, 17-OH-progesterona, prolactina, TSH) [F]; quadro clínico [C]."),
    ir: [["sop", "SOP (demanda)"], ["cr-prediabetes", "Pré-diabetes"], ["cr-obesidade", "Obesidade"], ["mu-infertilidade", "Infertilidade"]]
  });
  AUG("mu-aborto-legal", {ir: [["violencia", "Violência sexual"], ["mu-violencia", "Violência contra a mulher"], ["ae", "Contracepção de emergência"], ["sangramento-1tri", "Sangramento no 1º trimestre"]]});

  // Homem
  AUG("ho-rotina", {ir: [["ho-psa", "PSA"], ["pv-colorretal", "Rastreio colorretal"], ["pv-alcool", "Álcool"], ["ho-mental", "Saúde mental"], ["tabagismo", "Tabagismo"]]});
  AUG("ho-psa", {ir: [["ho-hpb", "HPB"], ["ho-rotina", "Rotina do homem"], ["pv-nao-rastrear", "O que não rastrear"]]});
  AUG("ho-hpb", {
    dif: T([
      ["ITU / prostatite", "Disúria, febre, dor perineal [C]"],
      ["Câncer de próstata", "Nódulo endurecido ao toque, PSA alto para a idade [C]"],
      ["Bexiga hiperativa", "Urgência sem jato fraco [C]"],
      ["Poliúria (DM, diuréticos)", "Grandes volumes, sede, glicemia [C]"],
      ["Estenose de uretra", "Uretrite/trauma/sonda prévios, jato muito fino [C]"],
      ["Bexiga neurogênica", "DM, AVC, Parkinson, lesão medular [C]"]
    ]),
    ir: [["ho-psa", "PSA"], ["incontinencia", "Incontinência urinária"], ["cistite", "ITU"], ["cr-drc", "DRC (retenção)"]]
  });
  AUG("ho-de", {
    dif: T([
      ["Vasculogênica", "Instalação gradual, fatores de risco cardiovascular – a mais comum [C]"],
      ["Psicogênica", "Início súbito, situacional, ereções matinais preservadas [C]"],
      ["Medicamentosa", "Tiazídico, betabloqueador, ISRS, antipsicótico, finasterida, opioide [C]"],
      ["Hipogonadismo", "Baixa libido, redução de pelos, ginecomastia [C]"],
      ["Neurológica", "DM com neuropatia, cirurgia pélvica, lesão medular [C]"],
      ["Doença de Peyronie", "Curvatura e placa palpável [C]"]
    ]),
    extra: [{t: "Fluxo", b: [
      {fluxo: [
        {t: "Disfunção erétil"},
        {t: "DCV instável ou uso de nitrato?", ramos: [
          {r: "Sim", n: [{t: "Não usar PDE5; cardiologia", k: "stop"}]},
          {r: "Não", n: [{t: "IIEF-5, PA, glicemia/HbA1c, lipídios, PREVENT; revisar fármacos"}]}
        ]},
        {t: "Baixa libido ou sinais de hipogonadismo → testosterona matinal", k: "q"},
        {t: "PDE5 bem usado (dose, 4–8 tentativas, estímulo sexual) + tratar fatores de risco", k: "ok"},
        {t: "Falha, Peyronie, trauma pélvico, hipogonadismo confirmado → urologia/endocrinologia", k: "warn"}
      ], nota: "Montado a partir do guia (AUA) [C]."}
    ]}],
    ir: [["ho-testosterona", "Testosterona baixa"], ["cr-has-meds", "Anti-hipertensivos"], ["cr-dm2", "DM2"], ["cr-dac", "Doença coronariana"]],
    mud: "diferenciais, fluxograma e links"
  });
  AUG("ho-testosterona", {
    dif: T([
      ["Queda transitória", "Doença aguda, privação de sono, jejum prolongado – repetir [C]"],
      ["Obesidade/DM2/apneia", "SHBG baixa reduz a testosterona total; perda de peso recupera [C]"],
      ["Opioides, glicocorticoides, anabolizantes", "Hipogonadismo central induzido [C]"],
      ["Hiperprolactinemia / tumor hipofisário", "LH/FSH baixos ou normais, prolactina alta, cefaleia, alteração visual [C]"],
      ["Hipogonadismo primário (Klinefelter, orquite, trauma)", "LH/FSH altos, testículos pequenos [C]"],
      ["Depressão", "Libido baixa e fadiga com testosterona normal [C]"]
    ]),
    extra: [{t: "Fluxo", b: [
      {fluxo: [
        {t: "Sintomas de hipogonadismo"},
        {t: "Testosterona total matinal (7–10 h), em jejum"},
        {t: "Baixa?", ramos: [
          {r: "Não", n: [{t: "Procurar outra causa (depressão, sono, DE vascular)", k: "ok"}]},
          {r: "Sim", n: [{t: "Repetir; se confirmada: LH, FSH, prolactina", k: "warn"}]}
        ]},
        {t: "Tratar causas reversíveis (peso, opioide, álcool, apneia)", k: "q"},
        {t: "Confirmado ou deseja fertilidade → endocrinologia/urologia; não repor testosterona em quem quer filhos", k: "warn"}
      ], nota: "Montado a partir do guia (AUA) [C]."}
    ]}],
    ir: [["ho-de", "Disfunção erétil"], ["cr-obesidade", "Obesidade"], ["cr-apso", "Apneia do sono"], ["mu-infertilidade", "Infertilidade do casal"]],
    mud: "diferenciais, fluxograma e links"
  });
  AUG("ho-escroto", {ir: [["escroto-agudo", "Dor escrotal aguda"], ["ho-rotina", "Rotina do homem"], ["mu-infertilidade", "Infertilidade (varicocele)"]]});
})();
