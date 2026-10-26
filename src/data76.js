// ───────────── data76.js – v63: Guia Clínico – lote 13 (Puericultura: 21 itens – 14 consultas por idade com guia curto e 7 guias completos).
// Fontes já conferidas no app: Caderneta da Criança 2025 (calendário, vigilância do desenvolvimento), SISVAN 2011, PNI 2026 (NT 64/2026 VIP,
// VPC20, NT 109/2025 nirsevimabe, Protocolo de Uso CONITEC 2026), Caderno PNSF 2022, SBP Diretriz 32/2026 (ferro), SBP DC 181/2024 (vitamina D),
// SBP Nota de Alerta 56/2023 (sono seguro), triagens neonatais (MS 2016 e 2012, SBP 2018 e 2022, Memorando DAPS Betim 1098/2026), M-CHAT-R/F,
// Lei 13.438/2017, SBP MO 150/2024, Cochrane 2024 e SBP DC 69/2023 (fimose), PNSVA (NT 134/2025).
// Com isto, todos os itens do app têm Guia Clínico.

(() => {
  const get = id => CONDICOES.find(x => x.id === id);
  const G = (id, guia, o = {}) => {
    const c = get(id); if (!c) return;
    c.guia = guia;
    if (c.evid && o.fontes) c.evid.fontes = [...new Set([...(c.evid.fontes || []), ...o.fontes])];
    (c.mudancas = c.mudancas || []).push("v63 (26/10/2026): Guia Clínico novo – " + (o.mud || "guia curto da consulta") + ".");
    if (o.nv) c.nv = [...(c.nv || []), ...o.nv];
  };
  const URG_CRIANCA = "**Sinais gerais de perigo** – não consegue mamar ou beber, vomita tudo, convulsão, letargia/inconsciência, gemência, tiragem, cianose, febre em < 3 meses, petéquias: **urgência pediátrica no mesmo momento** (AIDPI) [C].";
  const FLUXO_DNPM = {fluxo: [
    {t: "Marcos da faixa etária (Caderneta da Criança)"},
    {t: "Todos presentes?", ramos: [
      {r: "Sim", n: [{t: "Desenvolvimento adequado: elogiar e orientar estímulos", k: "ok"}]},
      {r: "Não", n: [{t: "Falta marco da faixa anterior, PC alterado ou ≥ 3 alterações fenotípicas?"}]}
    ]},
    {t: "Classificação", ramos: [
      {r: "Sim", n: [{t: "Provável atraso → avaliação e intervenção precoce", k: "stop"}]},
      {r: "Não (só da faixa atual)", n: [{t: "Alerta → estímulo e reavaliar em 30 dias", k: "warn"}]}
    ]},
    {t: "Perda de habilidade já adquirida, em qualquer idade → avaliação prioritária", k: "stop"}
  ], nota: "Caderneta da Criança 2025 [F]."};
  const V = (id, o) => G(id, {
    rotulo: "Guia curto",
    urg: o.urg || URG_CRIANCA,
    resumo: o.resumo,
    calcs: o.calcs,
    secoes: [{t: "Não deixar passar", b: [
      {ul: o.itens},
      ...(o.dnpm === false ? [] : [FLUXO_DNPM]),
      ...(o.extra || []),
      {ir: o.ir},
      {ref: o.ref || ["caderneta_crianca", "pni2026", "sbp_vitd2024", "sbp_ferro2026"]}
    ]}]
  }, {mud: "guia curto da consulta"});

  // ── Consultas por idade (guia curto)
  V("pu-rn", {
    urg: "**Icterícia nas primeiras 24 h ou que chega a pernas/pés**, febre ou hipotermia, gemência, letargia, recusa alimentar, **perda de peso > 10%** ou convulsão → avaliação de urgência no mesmo dia [F].",
    resumo: "Primeira consulta na **1ª semana** (em Betim, junto com a da mãe entre 3 e 10 dias; RN de risco até 3 dias) [F]. Conferir **pezinho (3º–5º dia)**, orelhinha, olhinho, coraçãozinho e linguinha; **BCG e hepatite B**; recuperação do peso de nascimento até **10–14 dias**; uma mamada observada [F]. **Vitamina D 400 UI/dia** desde já [F]. Sono **de barriga para cima** [F].",
    dnpm: false,
    itens: [
      "Peso, comprimento e PC nas curvas (escore-z); perda de peso em relação ao nascimento [F].",
      "Icterícia: início, extensão (zonas de Kramer) e fatores de risco – ver 'Icterícia neonatal' [F/C].",
      "Triagens: orelhinha que falhou → reteste em até 30 dias; reflexo vermelho ausente/duvidoso → oftalmologia; oximetria ≤ 89% → eco [F].",
      "Sorologias maternas (sífilis, HIV, hepatite B, toxo) e tipagem [F].",
      "Coto umbilical, pele, quadril (Ortolani/Barlow), genitália (testículos, hipospádia), fontanelas [C]."
    ],
    ir: [["pu-triagens", "Triagens neonatais"], ["pu-ictericia", "Icterícia neonatal"], ["pu-amamentacao", "Amamentação"], ["pu-umbigo-olhos", "Umbigo e olhos"], ["pp-1semana", "Puerpério – 1ª semana"]],
    ref: ["caderneta_crianca", "triagem_bio", "triagem_aud", "sbp_tro", "sbp_coracao", "sbp_vitd2024", "sbp_sono2023"]
  });
  V("pu-1m", {
    resumo: "Conferir **resultado do pezinho e das triagens** [F]. **Icterícia que persiste > 2 semanas** no termo → investigar (bilirrubina direta – atresia de vias biliares: **fezes claras, urina escura**) [F/C]. Aleitamento exclusivo; cólica e regurgitação fisiológicas sem medicação [F/C]. **Humor da mãe** (EPDS se indicado) [F]. Marcos: observa um rosto, reage ao som, eleva a cabeça [F].",
    itens: [
      "Curvas: peso, comprimento, PC, IMC/idade (escore-z) [F].",
      "Fezes claras/acólicas ou urina escura → urgência para investigação de colestase [C].",
      "Vitamina D 400 UI/dia; prematuro/baixo peso: iniciar ferro com 30 dias [F].",
      "Próximas vacinas aos 2 meses [F]."
    ],
    ir: [["pu-ictericia", "Icterícia neonatal"], ["pu-choro-colica", "Choro e cólica"], ["pu-refluxo", "Regurgitação"], ["pp-depressao", "Depressão perinatal"]]
  });
  V("pu-2m", {
    resumo: "**Vacinas dos 2 meses** (Penta, VIP, rotavírus, pneumocócica) [F]. Marcos: **sorri quando estimulada**, abre as mãos, emite sons [F]. Retorno da mãe ao trabalho: ordenha e armazenamento [C]. **Humor da mãe** [F]. Tempo de barriguinha supervisionado [F].",
    itens: [
      "Ausência de sorriso social aos 2 meses → alerta; reavaliar em 30 dias [F].",
      "Rotavírus: 1ª dose até 11m29d – não perder a janela [F].",
      "Sono seguro e prevenção de quedas do trocador [F/C]."
    ],
    ir: [["pu-vacinas", "Vacinas"], ["pu-amamentacao", "Amamentação"], ["pu-sono", "Sono"]]
  });
  V("pu-4m", {
    resumo: "**Vacinas dos 4 meses** [F]. Marcos: responde ao contato social, **segura objetos**, ri alto, **sustenta a cabeça e apoia-se nos antebraços** [F]. Recebe **leite de vaca**? → ferro a partir de 4 meses e orientação de preparo (leite de vaca antes de 9 meses não é recomendado) [F]. Aleitamento exclusivo, sem água ou chá [F].",
    itens: [
      "Sem sustento cefálico aos 4 meses → avaliar (hipotonia, atraso) [F/C].",
      "Começa a rolar: risco de queda de locais altos [C].",
      "Vitamina D 400 UI/dia [F]."
    ],
    ir: [["pu-vacinas", "Vacinas"], ["pu-suplementacao", "Ferro e vitaminas"], ["pu-formula", "Fórmula infantil"]]
  });
  V("pu-6m", {
    resumo: "**Introdução alimentar** a partir de hoje, mantendo o leite materno até 2 anos ou mais; combinar o método (tradicional, BLISS ou misto) [F]. **Ferro – 1º ciclo (6 a 9 meses)**: 10–12,5 mg/dia de ferro elementar [F]. **Vacinas dos 6 meses** e influenza (1ª vez: 2 doses) [F]. Marcos: leva objetos à boca, localiza o som, **rola** [F].",
    itens: [
      "Prontidão: senta com pouco apoio, menos protrusão da língua, interesse pela comida [F].",
      "Alimentos de risco de engasgo; sem mel, açúcar e ultraprocessados até 2 anos [F].",
      "Dentes: escovação com creme dental fluoretado assim que nascerem [C]."
    ],
    ir: [["pu-alimentacao", "Alimentação até 2 anos"], ["pu-suplementacao", "Ferro e vitaminas"], ["pu-vacinas", "Vacinas"], ["pu-dentes", "Dentição"]],
    ref: ["caderneta_crianca", "guia_menor2", "guia_menor2_cons", "pnsf2022", "sbp_ferro2026", "pni2026"]
  });
  V("pu-9m", {
    resumo: "**Encerrar o 1º ciclo de ferro** (2º ciclo dos 12 aos 15 meses) [F]. **Febre amarela** aos 9 meses [F]. Marcos: **senta sem apoio**, transfere objetos, **duplica sílabas**, brinca de esconde-achou [F]. Reflexo vermelho 2–3 vezes ao ano até 3 anos [F]. Alimentos picados, consistência da família [F].",
    itens: [
      "Não senta sem apoio aos 9 meses → alerta/provável atraso conforme os marcos anteriores [F].",
      "Febre amarela e tríplice viral em < 2 anos: não no mesmo dia (30 dias) [F].",
      "Tudo vai à boca: objetos pequenos, tomadas, escadas [C]."
    ],
    ir: [["pu-vacinas", "Vacinas"], ["pu-acidentes", "Prevenção de acidentes"], ["pu-alimentacao", "Alimentação"]]
  });
  V("pu-12m", {
    resumo: "**2º ciclo de ferro (12 a 15 meses)**; **vitamina D passa a 600 UI/dia** [F]. **Vacinas dos 12 meses**: pneumocócica (reforço), meningocócica ACWY, tríplice viral [F]. Marcos: **pinça**, imita gestos, jargão, **anda com apoio** [F]. Primeira consulta odontológica [F]. Alimentação da família; sem açúcar até 2 anos [F].",
    itens: [
      "Não faz pinça nem fica de pé com apoio → alerta [F].",
      "Não aponta nem responde ao nome → observar sinais de TEA [F].",
      "Afogamento em baldes e bacias; início da marcha [C]."
    ],
    ir: [["pu-vacinas", "Vacinas"], ["pu-suplementacao", "Ferro e vitaminas"], ["pu-dnpm", "Atraso e sinais de autismo"], ["pu-dentes", "Dentição"]]
  });
  V("pu-15m", {
    resumo: "Consulta **extra** (não está no calendário da Caderneta) [F]. **Encerrar o 2º ciclo de ferro** [F]. **Vacinas dos 15 meses**: DTP e VIP (reforço), tríplice viral 2/varicela, hepatite A [F]. Marcos: **anda sem apoio**, diz uma palavra, mostra o que quer [F].",
    itens: [
      "Não anda sem apoio aos 15–18 meses → avaliar [F/C].",
      "Lista complementar CDC/AAP 2022 (≥ 75% das crianças) para refinar a vigilância [F].",
      "Seletividade: oferecer de novo sem forçar e sem trocar a refeição por leite [C]."
    ],
    ir: [["pu-vacinas", "Vacinas"], ["pu-nao-come", "Meu filho não come"], ["pu-dnpm", "Atraso e sinais de autismo"]],
    ref: ["caderneta_crianca", "cdc_marcos2022", "pni2026", "sbp_ferro2026"]
  });
  V("pu-18m", {
    calcs: ["sc:mchat"],
    resumo: "**M-CHAT-R/F** (protocolo de risco psíquico obrigatório até 18 meses – Lei 13.438/2017; SBP aos 18 e 24 meses) [F]. Marcos: usa colher, torre de 2 cubos, **fala 3 palavras**, anda para trás [F]. **Sem telas antes de 2 anos** [F]. Conferir as vacinas dos 15 meses [F].",
    itens: [
      "M-CHAT-R: 0–2 baixo risco; 3–7 entrevista de seguimento; 8–20 encaminhar direto [F].",
      "Perda de palavras ou de interação → avaliação prioritária [F].",
      "Sem palavras aos 18 meses → audiologia + avaliação de linguagem [C]."
    ],
    ir: [["pu-dnpm", "Atraso e sinais de autismo"], ["pu-telas", "Telas"], ["pu-vacinas", "Vacinas"]],
    ref: ["caderneta_crianca", "mchat", "lei13438", "sbp_tea", "oms_telas2019"]
  });
  V("pu-24m", {
    calcs: ["sc:mchat"],
    resumo: "**M-CHAT-R/F** de novo [F]. Marcos: tira roupa, torre de 3 cubos, aponta 2 figuras, **chuta bola** [F]. A partir de 2 anos: **IMC/idade** na curva [F]. Telas **até 1 h/dia** com adulto junto (2–5 anos) [F]. Desfralde quando a criança der sinais [F]. Consulta odontológica [F].",
    itens: [
      "Sem frases de 2 palavras aos 24–30 meses → avaliação de linguagem e audição [F/C].",
      "Ferro: sem profilaxia de rotina após 24 meses; investigar anemia só com fator de risco [F].",
      "Vitamina D: SBP sugere 600 UI/dia de 1 a 18 anos por dieta e/ou suplemento (sem programa do MS) [F]."
    ],
    ir: [["pu-dnpm", "Atraso e sinais de autismo"], ["pu-desfralde", "Desfralde"], ["pu-telas", "Telas"], ["pu-checkup", "Check-up da criança"]],
    ref: ["caderneta_crianca", "mchat", "sbp_tea", "oms_telas2019", "sisvan"]
  });
  V("pu-30m", {
    resumo: "Consulta **extra** (não está no calendário da Caderneta) [F]. Marcos: veste-se com supervisão, torre de 6 cubos, **frases com 2 palavras**, pula com os dois pés [F]. Lista CDC/AAP 2022: ~50 palavras, faz de conta, segue instruções de duas etapas [F]. Desfralde, telas e seletividade [F/C].",
    itens: [
      "Sem frases de 2 palavras ou sem faz de conta → avaliação do desenvolvimento [F].",
      "IMC/idade: risco de sobrepeso > +1 escore-z em < 5 anos (SISVAN) [F].",
      "Afogamento e queimaduras: maior mobilidade e curiosidade [C]."
    ],
    ir: [["pu-dnpm", "Atraso e sinais de autismo"], ["pu-crescimento", "Desvios do crescimento"], ["pu-desfralde", "Desfralde"]],
    ref: ["caderneta_crianca", "cdc_marcos2022", "sisvan"]
  });
  V("pu-3a5a", {
    resumo: "A partir de 3 anos: **PA anual** (classificação pediátrica) e **acuidade visual** (CAB 33: 3–5 anos < 20/40 ou diferença de 2 linhas entre os olhos → oftalmologia) [F]. IMC/idade (SISVAN: < 5 anos risco de sobrepeso > +1, sobrepeso > +2, obesidade > +3) [F]. Brincadeira ativa ≥ 3 h/dia (OMS) [F]. Marcos: brinca com outras crianças, imita linha, arremessa bola [F].",
    itens: [
      "PA elevada confirmada → ver 'Check-up da criança' (tabelas pediátricas) [F].",
      "Estrabismo ou baixa acuidade → oftalmologia (ambliopia tem janela de tratamento) [F/C].",
      "Influenza anual; reforços aos 4 anos [F]."
    ],
    ir: [["pu-checkup", "Check-up da criança"], ["pu-crescimento", "Desvios do crescimento"], ["cr-obesidade", "Obesidade"]],
    ref: ["caderneta_crianca", "sisvan", "oms_telas2019", "pni2026"]
  });
  V("pu-4a", {
    resumo: "**Vacinas dos 4 anos**: DTP (2º reforço), **VIP (2º reforço – NT 64/2026)**, varicela 2, febre amarela (reforço) [F]. PA anual e acuidade visual [F]. Marcos: emparelha cores, copia círculo, **fala clara e compreensível**, pula em um pé [F].",
    itens: [
      "Fala pouco compreensível aos 4 anos → fonoaudiologia e audiometria [C].",
      "Bicicleta e patinete com capacete; cadeirinha/assento de elevação [C]."
    ],
    ir: [["pu-vacinas", "Vacinas"], ["pu-checkup", "Check-up da criança"], ["pu-acidentes", "Prevenção de acidentes"]],
    ref: ["caderneta_crianca", "pni2026", "nt64_vip"]
  });
  V("pu-5a", {
    resumo: "PA anual, **acuidade visual** (repetir na entrada da escola) e saúde bucal [F]. IMC/idade a partir de 5 anos: **sobrepeso > +1, obesidade > +2** (SISVAN) [F]. Marcos: escova os dentes sem ajuda, define 5 palavras, equilibra-se em um pé por 5 s [F]. Conferir calendário vacinal completo para a escola [F].",
    itens: [
      "Dificuldade escolar, desatenção ou comportamento → avaliar visão, audição e desenvolvimento antes de rotular [C].",
      "Telas limitadas; sono adequado; atividade física diária [F/C]."
    ],
    ir: [["pu-checkup", "Check-up da criança"], ["pu-vacinas", "Vacinas"], ["cr-obesidade", "Obesidade"]],
    ref: ["caderneta_crianca", "sisvan", "pni2026"]
  });

  // ── Suplementação (guia completo)
  G("pu-suplementacao", {
    urg: "**Ingestão acidental de ferro** (frasco ao alcance da criança) → urgência/CIATox [F].",
    resumo: "**Ferro** (PNSF 2022; SBP 2026): termo com peso adequado – **10–12,5 mg/dia** de ferro elementar em **2 ciclos de 3 meses** (6–9 e 12–15 meses); pode iniciar **aos 4 meses** se recebe leite de vaca [F]. **Prematuro/baixo peso**: a partir de **30 dias**, 2 mg/kg (1.500–2.499 g), 3 mg/kg (1.000–1.499 g) ou 4 mg/kg (< 1.000 g) até 12 meses; depois 1 mg/kg até 24 meses [F]. **Vitamina D**: 400 UI/dia até 12 meses e 600 UI/dia a partir de 1 ano (SBP 2024) [F]. **Vitamina A** só nas áreas do PNSVA (Betim não é área prioritária) [F].",
    secoes: [
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Peso ao nascer e idade gestacional"},
          {t: "Prematuro ou < 2.500 g?", ramos: [
            {r: "Sim", n: [{t: "Ferro 2–4 mg/kg/dia do 30º dia aos 12 meses; 1 mg/kg/dia até 24 meses", k: "warn"}]},
            {r: "Não", n: [{t: "Recebe leite de vaca antes de 6 meses?"}]}
          ]},
          {t: "Termo", ramos: [
            {r: "Sim", n: [{t: "Ferro a partir de 4 meses (e orientar alimentação)", k: "q"}]},
            {r: "Não", n: [{t: "Ferro 10–12,5 mg/dia: 6–9 meses e 12–15 meses", k: "ok"}]}
          ]},
          {t: "Vitamina D 400 UI/dia até 12 meses; 600 UI/dia depois (prescrever pela UI do produto)", k: "ok"}
        ], nota: "Caderno PNSF 2022 [F]; SBP Diretriz 32/2026 [F]; SBP DC 181/2024 [F]."},
        {trio: {ideal: "Vitamina D3 isolada na dose da SBP (400 UI até 1 ano; 600 UI depois).", sus: "A REMUME de Betim não tem vitamina D isolada; o polivitamínico gotas tem 900 UI/mL de D2 e 3.000 UI/mL de vitamina A (0,45 mL ≈ 400 UI de D, com 1.350 UI de A).", ponte: "Até 12 meses, o polivitamínico atende a vitamina D sem megadose de A associada; a partir de 1 ano, preferir D3 isolada (compra), porque o polivitamínico não chega a 600 UI de D sem excesso de vitamina A."}},
        "Dose em mL pelo peso atual: usar a ferramenta **Dose pediátrica** (sulfato ferroso 25 mg/mL de ferro elementar; gotas por mL variam por fabricante) [F/NV].",
        {ir: [["pu-prematuro", "Prematuro"], ["pu-alimentacao", "Alimentação até 2 anos"], ["anemia-ferropriva", "Anemia ferropriva"]]},
        {ref: ["pnsf2022", "sbp_ferro2026", "sbp_vitd2024", "pnsva2025", "remume"]}
      ]}
    ]
  }, {mud: "fluxograma de ferro por peso ao nascer, vitamina D e ideal × SUS do polivitamínico"});

  // ── Desvios do crescimento
  G("pu-crescimento", {
    urg: "**Magreza acentuada (IMC/idade ou P/E < −3 escore-z)**, **edema** bilateral, desidratação, infecção grave ou recusa alimentar → avaliação imediata/internação [F/C]. Suspeita de **negligência ou maus-tratos** → rede de proteção [C].",
    resumo: "A **tendência** na curva (cruzar canais) vale mais que um ponto isolado [F]. Classificação SISVAN em escore-z (curvas OMS) para peso/idade, estatura/idade e IMC/idade [F]. Investigar **ingestão e insegurança alimentar**, infecções de repetição, diarreia crônica, parasitoses e **estatura-alvo familiar** [F]. Baixa estatura **com velocidade de crescimento normal e proporções normais** costuma ser familiar ou constitucional [C].",
    secoes: [
      {t: "Classificar (SISVAN, escore-z)", b: [
        {tab: {h: ["Índice", "Pontos de corte"], r: [
          ["Peso/idade", "< −3 muito baixo; −3 a < −2 baixo; −2 a +2 adequado; > +2 elevado [F]"],
          ["Estatura/idade", "< −3 muito baixa; −3 a < −2 baixa; ≥ −2 adequada [F]"],
          ["IMC/idade < 5 anos", "< −3 magreza acentuada; −3 a < −2 magreza; −2 a +1 eutrofia; > +1 a +2 risco de sobrepeso; > +2 a +3 sobrepeso; > +3 obesidade [F]"],
          ["IMC/idade 5–10 anos", "> +1 a +2 sobrepeso; > +2 a +3 obesidade; > +3 obesidade grave [F]"]
        ]}, nota: "Norma técnica do SISVAN 2011 [F]."}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Desvio na curva (confirmar técnica e balança)"},
          {t: "Magreza acentuada, edema ou doença aguda grave?", ramos: [
            {r: "Sim", n: [{t: "Avaliação imediata/internação", k: "stop"}]},
            {r: "Não", n: [{t: "Tipo de desvio"}]}
          ]},
          {t: "Desvio", ramos: [
            {r: "Baixo peso/magreza", n: [{t: "Dieta, insegurança alimentar (CRAS), infecções, parasitas; hemograma, EAS/urocultura, parasitológico; retorno em 30 dias", k: "warn"}]},
            {r: "Baixa estatura", n: [{t: "Estatura-alvo, velocidade de crescimento, proporções, dismorfismos", k: "q"}]},
            {r: "Excesso de peso", n: [{t: "Hábitos da família, telas, bebidas adoçadas; PA; comorbidades", k: "q"}]}
          ]},
          {t: "Baixa estatura com velocidade baixa, desproporção ou dismorfismos → pediatria/endocrinologia", k: "warn"}
        ], nota: "SISVAN 2011 e Caderneta da Criança 2025 [F]; investigação: conhecimento consolidado [C]."},
        {ir: [["cr-obesidade", "Obesidade"], ["pu-nao-come", "Meu filho não come"], ["parasitoses", "Enteroparasitoses"]]},
        {ref: ["sisvan", "caderneta_crianca", "oms_mgrs2006"]}
      ]}
    ]
  }, {mud: "classificação SISVAN, fluxograma por tipo de desvio"});

  // ── Vacinas da criança
  G("pu-vacinas", {
    resumo: "Calendário PNI 2026 de 0 a 5 anos com as mudanças recentes: **VPC20** substitui a VPC10 (transição), **VIP exclusiva** com **2º reforço aos 4 anos** (NT 64/2026), **meningocócica ACWY aos 12 meses**, COVID-19 a partir de 6 meses [F]. **Nunca reiniciar esquema**: completar respeitando intervalos mínimos [F]. Rotavírus: 1ª dose de 1m15d a 11m29d [F]. **Nirsevimabe** para prematuros ≤ 36s6d no 1º ano e < 24 meses com comorbidades (NT 109/2025; Protocolo de Uso 2026) [F].",
    secoes: [
      {t: "Calendário (0–5 anos)", b: [
        {tab: {h: ["Idade", "Vacinas"], r: [
          ["Ao nascer", "BCG; hepatite B [F]"],
          ["2 meses", "Penta, VIP, rotavírus, pneumocócica [F]"],
          ["3 meses", "Meningocócica C [F]"],
          ["4 meses", "Penta, VIP, rotavírus, pneumocócica [F]"],
          ["5 meses", "Meningocócica C [F]"],
          ["6 meses", "Penta, VIP, COVID-19; influenza (1ª vez: 2 doses) [F]"],
          ["9 meses", "Febre amarela; COVID-19 conforme esquema [F]"],
          ["12 meses", "Pneumocócica (reforço), meningocócica ACWY, tríplice viral [F]"],
          ["15 meses", "DTP e VIP (reforço), tríplice viral 2/varicela, hepatite A [F]"],
          ["4 anos", "DTP e VIP (2º reforço), varicela 2, febre amarela (reforço) [F]"]
        ]}, nota: "Calendário Nacional 2026 [F]; NT 64/2026 [F]. Influenza anual a partir de 6 meses [F]."}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Caderneta de vacinação em toda consulta"},
          {t: "Atrasada?", ramos: [
            {r: "Sim", n: [{t: "Encaminhar à sala de vacina hoje: completar sem reiniciar (intervalos mínimos)", k: "warn"}]},
            {r: "Não", n: [{t: "Agendar as próximas", k: "ok"}]}
          ]},
          {t: "Prematuro ou comorbidade? → VPC20 3 doses + reforço; nirsevimabe; CRIE se indicação especial", k: "q"},
          {t: "Evento adverso grave → notificar (e-SUS Notifica/ESAVI) e CRIE", k: "warn"}
        ], nota: "PNI 2026 [F]; NT 109/2025 e Protocolo de Uso CONITEC 2026 (nirsevimabe 50 mg se < 5 kg, 100 mg se ≥ 5 kg) [F]."},
        "Criança vítima de violência sexual: **HPV a partir de 2 anos**, 1 dose em estratégia especial (NT 96/2026) [F].",
        {ir: [["pu-reacoes-vacinas", "Reações às vacinas"], ["pu-prematuro", "Prematuro"], ["pn-vacinas", "Vacinas da gestante"]]},
        {ref: ["pni2026", "nt64_vip", "vpc20", "nirsevimabe", "nirse_conitec", "nt96_hpv2026"]}
      ]}
    ]
  }, {mud: "calendário 0–5 anos em tabela, regras de atraso e indicações especiais"});

  // ── Triagens neonatais
  G("pu-triagens", {
    resumo: "Cinco triagens: **pezinho** (coleta ideal do **3º ao 5º dia**), **orelhinha** (até 1 mês; falhou → reteste em até 30 dias; diagnóstico até 3 meses), **olhinho** (reflexo vermelho na maternidade e 2–3 vezes/ano até 3 anos), **coraçãozinho** (oximetria em ≥ 35 semanas entre 24 e 48 h) e **linguinha** (protocolo nas maternidades) [F]. Em Betim, o Nupad processa a **1ª coleta só até 30 dias**; depois, biotinidase e teste do suor no Nupad e **triagem tardia pela Direg com relatório médico** (Memorando 1098/2026) [F].",
    secoes: [
      {t: "Interpretar", b: [
        {tab: {h: ["Teste", "Normal", "Alterado → conduta"], r: [
          ["Pezinho", "Resultado normal no prazo", "Alterado → serviço de referência estadual com prioridade; recoleta pedida → papel-filtro na UBS [F]"],
          ["Orelhinha (EOAE; PEATE-A se risco)", "Passou", "Falhou → reteste em até 30 dias; falhou de novo → audiologia [F]"],
          ["Olhinho", "Reflexo vermelho simétrico", "Ausente, branco (leucocoria) ou assimétrico → oftalmologia com prioridade [F]"],
          ["Coraçãozinho", "SpO₂ ≥ 95% e diferença MSD–MI ≤ 3%", "90–94% ou diferença ≥ 4% → repetir em 1 h (até 2 vezes); ≤ 89% → ecocardiograma [F]"],
          ["Linguinha", "Protocolo da maternidade", "Alterado com dificuldade de mamar → avaliação (frenotomia se indicada) [F/NV]"]
        ]}, nota: "MS 2016 e 2012; SBP 2018 e 2022; Lei 13.002/2014 [F]. Pontos de corte da ferramenta Bristol não conferidos [NV]."}
      ]},
      {t: "Pezinho perdido (Betim)", b: [
        {fluxo: [
          {t: "RN sem coleta do pezinho"},
          {t: "Idade ≤ 30 dias?", ramos: [
            {r: "Sim", n: [{t: "Coletar na UBS já (papel-filtro)", k: "ok"}]},
            {r: "Não", n: [{t: "Nupad: pedido de biotinidase quantitativa + teste do suor (agendar)", k: "warn"}]}
          ]},
          {t: "Município (Direg): SMN1/SMN2 e NGS SCID/AGAMA em pedido separado; demais exames em pedido único + relatório justificando o atraso", k: "warn"},
          {t: "Limites: AME, SCID/AGAMA e acilcarnitinas 6 m; TSH/T4L, HAC, toxo 12 m; fenilalanina 24 m; eletroforese 5 anos; com sintomas: investigar sem limite", k: "q"}
        ], nota: "Memorando DAPS Betim 1098/2026 [F]."},
        {ir: [["pu-rn", "Consulta do RN"], ["pu-ictericia", "Icterícia neonatal"], ["pu-umbigo-olhos", "Olhos do bebê"]]},
        {ref: ["triagem_bio", "triagem_aud", "sbp_tro", "sbp_coracao", "lei_linguinha", "betim_triagem2026"]}
      ]}
    ]
  }, {mud: "tabela de interpretação das 5 triagens e fluxo de pezinho perdido em Betim"});

  // ── Atraso do desenvolvimento e TEA
  G("pu-dnpm", {
    calcs: ["sc:mchat"],
    urg: "**Perda de habilidades já adquiridas** (fala, interação, motricidade) em qualquer idade → avaliação prioritária [F]. Regressão com crises, alteração do PC ou sinais neurológicos focais → neuropediatria com urgência [C].",
    resumo: "Vigilância em **toda consulta** pelos marcos da Caderneta: adequado, **alerta** (falta marco da faixa atual → estimular e reavaliar em 30 dias) ou **provável atraso** (falta marco da faixa anterior, PC alterado ou ≥ 3 alterações fenotípicas → encaminhar) [F]. **M-CHAT-R/F aos 18 e 24 meses** (SBP 2024; protocolo de risco psíquico obrigatório até 18 meses) [F]. **Encaminhar para intervenção precoce sem esperar o diagnóstico** [F]. Atraso de fala → **avaliação auditiva** [F].",
    secoes: [
      {t: "Classificar", b: [FLUXO_DNPM,
        {tab: {h: ["M-CHAT-R/F", "Conduta"], r: [
          ["0–2", "Baixo risco; repetir aos 24 meses se aplicado antes [F]"],
          ["3–7", "Entrevista de seguimento; ≥ 2 itens alterados = positivo [F]"],
          ["8–20", "Encaminhar direto para avaliação e intervenção [F]"]
        ]}}
      ]},
      {t: "Sinais de alerta para TEA", b: [
        {ul: ["Não responde ao nome; pouco contato visual e sorriso social [F].", "Não aponta para mostrar ou pedir; não imita; não brinca de faz de conta [F].", "Movimentos repetitivos, apego rígido a rotinas, interesses restritos [F].", "Perda de palavras ou de habilidades sociais [F]."]},
        {det: {t: "Por que intervir antes do diagnóstico", b: ["A plasticidade cerebral é maior nos primeiros anos; estimulação e intervenção precoces melhoram linguagem e funcionalidade, e a espera pelo diagnóstico formal pode levar meses. Por isso o encaminhamento se baseia no risco, não na confirmação [C]."]}},
        {ir: [["pu-18m", "Consulta de 18 meses"], ["pu-24m", "Consulta de 24 meses"], ["pu-telas", "Telas"]]},
        {ref: ["caderneta_crianca", "mchat", "lei13438", "sbp_tea", "cdc_marcos2022"]}
      ]}
    ]
  }, {mud: "classificação da Caderneta, M-CHAT-R/F e sinais de TEA"});

  // ── Prematuro
  G("pu-prematuro", {
    urg: URG_CRIANCA,
    resumo: "Crescimento e desenvolvimento pela **idade corrigida até 2 anos**; **vacinas pela idade cronológica** [F]. **VPC20 em 2, 4 e 6 meses + reforço** (≤ 36s6d) e **nirsevimabe no 1º ano de vida** [F]. **Ferro** por peso ao nascer do 30º dia aos 12 meses (2–4 mg/kg) e 1 mg/kg até 24 meses (SBP 2026); **vitamina D 400 UI/dia** [F]. Conferir **ROP** (oftalmologia) e triagem auditiva com **PEATE-A** [F]. Seguimento **compartilhado** com o ambulatório de egressos [F].",
    secoes: [
      {t: "Checklist", b: [
        {tab: {h: ["Tema", "Conduta"], r: [
          ["Idade corrigida", "Idade cronológica − (40 − IG ao nascer em semanas), até 2 anos [C]"],
          ["Ferro", "1.500–2.499 g: 2 mg/kg; 1.000–1.499 g: 3 mg/kg; < 1.000 g: 4 mg/kg (30 dias–12 meses); 1 mg/kg de 12 a 24 meses [F]"],
          ["Vacinas", "Idade cronológica; VPC20 3 doses + reforço; nirsevimabe [F]"],
          ["Olhos e ouvidos", "ROP conforme a maternidade; PEATE-A [F]"],
          ["Desenvolvimento", "Marcos pela idade corrigida; baixo limiar para estimulação precoce [F/C]"]
        ]}},
        {ir: [["pu-suplementacao", "Ferro e vitaminas"], ["pu-vacinas", "Vacinas"], ["pu-dnpm", "Desenvolvimento"], ["pu-triagens", "Triagens"]]},
        {ref: ["sbp_ferro2026", "sbp_vitd2024", "vpc20", "nirsevimabe", "caderneta_crianca"]}
      ]}
    ]
  });

  // ── Fimose
  G("pu-fimose", {
    urg: "**Parafimose** (prepúcio retraído que não volta, glande edemaciada) → redução/urgência no mesmo dia [F]. Retenção urinária ou balonamento com dor e febre → avaliar no mesmo dia [C].",
    resumo: "Fimose **fisiológica** é a regra: prepúcio retrátil em ~4% ao nascer, ~20% aos 6 meses, aumentando até a adolescência [F]. **Não forçar a retração** (causa fissuras e fibrose) [F]. **Balonamento ao urinar sem outros sintomas é comum e não indica cirurgia** [C]. **Corticoide tópico por 4–8 semanas** se sintomas (balanopostite, ITU, dor) ou fimose persistente em criança maior – resolução ~25% → ~69% (Cochrane 2024, certeza baixa) [F]. Cirurgia: **fimose cicatricial**, ITU/balanopostite de repetição, parafimose, falha do tratamento [F].",
    secoes: [
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Prepúcio não retrai"},
          {t: "Parafimose?", ramos: [
            {r: "Sim", n: [{t: "Urgência", k: "stop"}]},
            {r: "Não", n: [{t: "Anel cicatricial esbranquiçado (BXO)?"}]}
          ]},
          {t: "Cicatricial", ramos: [
            {r: "Sim", n: [{t: "Cirurgia pediátrica", k: "warn"}]},
            {r: "Não", n: [{t: "Sintomas (balanopostite, ITU, dor) ou criança maior incomodada?"}]}
          ]},
          {t: "Sintomas", ramos: [
            {r: "Sim", n: [{t: "Corticoide tópico 2×/dia por 4–8 semanas (decisão com a família)", k: "q"}]},
            {r: "Não", n: [{t: "Só higiene, sem forçar; reavaliar", k: "ok"}]}
          ]},
          {t: "Falha ou recorrência → cirurgia pediátrica", k: "warn"}
        ], nota: "SBP DC 69/2023 [F]; Cochrane 2024 [F]. Corticoide tópico para fimose: uso fora da bula [F]."},
        {trio: {ideal: "Betametasona 0,05% (corticoide mais estudado).", sus: "REMUME Betim: dexametasona 0,1% creme (potência menor, menos dados).", ponte: "Começar com dexametasona da REMUME; se falhar após 8 semanas ou a família puder comprar, betametasona antes de indicar cirurgia."}},
        {ir: [["balanopostite", "Balanopostite"], ["itu-crianca", "ITU na criança"]]},
        {ref: ["sbp_fimose", "cochrane_fimose", "remume"]}
      ]}
    ]
  }, {mud: "fluxograma fisiológica × patológica, corticoide e ideal × SUS"});
})();
