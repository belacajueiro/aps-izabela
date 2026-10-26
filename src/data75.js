// ───────────── data75.js – v62: Guia Clínico – lote 12 (Pré-natal e puerpério: 14 itens sem guia; roteiros de consulta com guia curto).
// Fontes já conferidas no app: NT SES-MG 2024 (estratificação), Caderneta da Gestante 2026, Protocolo Pré-natal e Puerpério de Betim 2024
// (e Memorando 0109698/2026 – cálcio; Portaria SMS 18/2025 – cesárea a pedido), SBD 2026 (DMG), Consenso OPAS/MS/FEBRASGO/SBD 2019,
// PNSF 2022, Rede Alyne, OMS MEC 2025, Portarias do implante (47 e 48/2025), EPDS validada em Pelotas.
// Correção: pn-anemia – sacarato férrico não é dispensado nas UBS de Betim (Circular DUE-DIOP 003/2024).

(() => {
  const get = id => CONDICOES.find(x => x.id === id);
  const G = (id, guia, o = {}) => {
    const c = get(id); if (!c) return;
    c.guia = guia;
    if (c.evid && o.fontes) c.evid.fontes = [...new Set([...(c.evid.fontes || []), ...o.fontes])];
    (c.mudancas = c.mudancas || []).push("v62 (26/10/2026): Guia Clínico novo – " + (o.mud || "reconhecer, fluxograma e fontes") + ".");
    if (o.nv) c.nv = [...(c.nv || []), ...o.nv];
  };
  const URG_PN = "**Maternidade (CMI) agora:** sangramento, perda de líquido, **PA ≥ 160/110** ou cefaleia intensa, alteração visual, epigastralgia, dispneia; febre ≥ 37,8 °C sem foco respiratório; contrações regulares ou dor abdominal intensa; **movimentos fetais diminuídos**; Hb ≤ 7 g/dL ou anemia com sinais de gravidade; suspeita de TVP (NT SES-MG 2024) [F].";

  // Correção pn-anemia (ferro EV)
  const pa = get("pn-anemia");
  if (pa && pa.sus && typeof pa.sus.betim === "string") {
    pa.sus.betim = pa.sus.betim.replace(/hidróxido férrico sacarato injetável\.?$/, "hidróxido férrico sacarato injetável consta, mas não é dispensado nas UBS (Circular DUE-DIOP 003/2024): a paciente adquire e a UBS administra; HAS descompensada, asma moderada/grave ou betabloqueador → UPA.");
    if (pa.evid && pa.evid.fontes) pa.evid.fontes = [...new Set([...pa.evid.fontes, "betim_ferro2024"])];
    (pa.mudancas = pa.mudancas || []).push("v62 (26/10/2026): ferro EV conforme Circular DUE-DIOP 003/2024 de Betim.");
  }

  // ── 1. Estratificação de risco
  G("pn-risco", {
    urg: URG_PN,
    resumo: "A NT SES-MG (out/2024) usa **dois estratos**: **risco habitual** (inclui fatores manejáveis na APS com apoio multiprofissional) e **alto risco** (PNAR **compartilhado** – a gestante **continua na APS**) [F]. Reestratificar **em toda consulta** [F]. Consultas: mensais até 28 semanas, quinzenais de 28 a 36 e semanais depois; **pré-natal não tem alta** [F]. Em Betim: alto risco → PNAR mantendo a APS; urgências → **CMI**; situações fetais especiais → medicina fetal (Quadro 32) [F].",
    secoes: [
      {t: "Classificar", b: [
        {tab: {h: ["Estrato", "Exemplos (resumo)", "Onde"], r: [
          ["Alto risco", "HAS crônica, síndrome hipertensiva; DM1/DM2/DMG; gemelar; pré-eclâmpsia grave/HELLP/hemorragia grave em gestação anterior; perdas e prematuridade prévias; aloimunização; cardiopatia, nefropatia, doença autoimune, hematológica, neurológica ou pulmonar grave; hipotireoidismo em uso de medicação ou hipertireoidismo; TEV prévio; transtorno psiquiátrico grave ou dependência; HIV, hepatites, TB, hanseníase; anemia < 8 ou refratária; alteração do crescimento fetal ou do líquido", "PNAR + APS [F]"],
          ["Habitual com fatores", "Idade < 15 ou > 35; IMC < 18,5 ou 30–39; altura < 1,45 m; violência, baixa escolaridade, pouco apoio; nuliparidade ou ≥ 5 partos; ≥ 2 cesáreas; tabagismo/álcool sem repercussão fetal; asma controlada; hipotireoidismo subclínico da gestação; 1–2 ITU; anemia 8–10,9; sífilis não grave; arboviroses", "APS com eMulti [F]"],
          ["Urgência", "Critérios no topo", "Maternidade/CMI [F]"]
        ]}, nota: "NT SES-MG 2024 (lista resumida – conferir a íntegra) [F]; Protocolo Betim 2024, Quadro 32 [F]."}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Toda consulta de pré-natal"},
          {t: "Critério de urgência?", ramos: [
            {r: "Sim", n: [{t: "Maternidade/CMI imediatamente", k: "stop"}]},
            {r: "Não", n: [{t: "Critério de alto risco?"}]}
          ]},
          {t: "Alto risco", ramos: [
            {r: "Sim", n: [{t: "PNAR com resumo, exames e IG; manter consultas na APS", k: "warn"}]},
            {r: "Não", n: [{t: "Risco habitual (com ou sem fatores): APS ± eMulti", k: "ok"}]}
          ]},
          {t: "Registrar o estrato na caderneta e no prontuário; reavaliar no próximo retorno", k: "q"}
        ], nota: "NT SES-MG 2024 [F]; Protocolo Betim 2024 [F]."},
        "DM prévio na gestação: **retinografia a cada trimestre e no 1º ano pós-parto** (NT Betim 08/2025) [F].",
        {ir: [["pn-1consulta", "Primeira consulta"], ["pn-has", "Hipertensão na gestação"], ["pn-dmg", "Diabetes gestacional"], ["pn-anemia", "Anemia na gestação"]]},
        {ref: ["sesmg_risco", "betim_pn2024", "caderneta2026", "betim_retino2025"]}
      ]}
    ]
  }, {mud: "estratos da NT SES-MG 2024, critérios de urgência e fluxograma"});

  // ── 2. Vacinação da gestante
  G("pn-vacinas", {
    resumo: "Calendário da gestante (Caderneta 2026): **dTpa a partir de 20 semanas em toda gestação**; **dT** para completar esquema; **hepatite B** (3 doses se incompleto/desconhecido); **influenza** na temporada, em qualquer IG; **COVID-19** 1 dose por gestação; **VSR dose única a partir de 28 semanas** (incorporada pela Portaria SECTICS 14/2025) [F]. Vacinas de vírus vivo (tríplice viral, febre amarela, varicela) **não** são rotina na gestação [C].",
    secoes: [
      {t: "Por vacina", b: [
        {tab: {h: ["Vacina", "Quando", "Para quê"], r: [
          ["dTpa", "A partir de 20 semanas, toda gestação", "Anticorpos contra coqueluche para o lactente [F]"],
          ["dT", "Completar 3 doses se esquema incompleto (1 delas dTpa)", "Tétano materno e neonatal [F]"],
          ["Hepatite B", "3 doses se incompleto ou desconhecido", "Transmissão vertical [F]"],
          ["Influenza", "Na campanha, qualquer IG (puérpera até 45 dias)", "Formas graves maternas [F]"],
          ["COVID-19", "1 dose por gestação (≥ 6 meses da anterior)", "Formas graves maternas [F]"],
          ["VSR", "Dose única a partir de 28 semanas", "Bronquiolite grave no lactente nos primeiros 6 meses [F]"]
        ]}, nota: "Caderneta da Gestante 2026 [F]; CONITEC 975 / Portaria SECTICS 14/2025 [F]."}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Conferir caderneta de vacinação em toda consulta"},
          {t: "IG ≥ 20 semanas sem dTpa nesta gestação?", ramos: [
            {r: "Sim", n: [{t: "dTpa hoje", k: "ok"}]},
            {r: "Não", n: [{t: "Agendar ao atingir 20 semanas", k: "q"}]}
          ]},
          {t: "IG ≥ 28 semanas sem VSR?", ramos: [
            {r: "Sim", n: [{t: "VSR (conferir estoque na sala de vacina)", k: "ok"}]},
            {r: "Não", n: [{t: "Agendar", k: "q"}]}
          ]},
          {t: "Lactente prematuro ≤ 36s6d ou com comorbidade: nirsevimabe não substitui a vacina materna (NT 109/2025)", k: "q"}
        ], nota: "Caderneta 2026 [F]; NT 109/2025 [F]."},
        {ir: [["pn-1consulta", "Primeira consulta"], ["pp-1semana", "Puerpério – 1ª semana"]]},
        {ref: ["caderneta2026", "vsr_sus", "nirsevimabe"]}
      ]}
    ]
  });

  // ── 3. Consulta do 2º trimestre (guia curto)
  G("pn-2tri", {
    rotulo: "Guia curto",
    urg: URG_PN,
    resumo: "**TOTG 75 g entre 24 e 28 semanas** (jejum ≥ 92, 1 h ≥ 180 ou 2 h ≥ 153 → DMG; 1 valor basta) [F]. **dTpa a partir de 20 semanas** [F]. Toxoplasmose se suscetível; Coombs se Rh negativo [F]. Ferro mantido; **AAS 100 mg** até 36 semanas se indicado; **cálcio para pré-eclâmpsia suspenso em Betim** (Memorando 0109698/2026) [F]. PA em toda consulta: ≥ 140/90 após 20 semanas → hipertensão na gestação [F].",
    secoes: [
      {t: "Checklist", b: [
        {ul: [
          "PA, peso, AU (≈ IG em cm entre 20 e 34 semanas), BCF, edema [F/C].",
          "TOTG 75 g (24–28 semanas; em Betim, a qualquer IG se a 1ª consulta for após 28) [F].",
          "Sorologias conforme pendência (toxoplasmose, Coombs) [F].",
          "Vacinas: dTpa ≥ 20 semanas [F].",
          "Saúde mental e violência; reestratificar risco [F].",
          "Retorno em 4 semanas, alternando médico e enfermagem [F]."
        ]},
        {ir: [["pn-dmg", "Diabetes gestacional"], ["pn-has", "Hipertensão na gestação"], ["pn-risco", "Estratificação de risco"], ["pn-vacinas", "Vacinas"]]},
        {ref: ["caderneta2026", "sbd_dmg", "betim_calcio2026", "betim_pn2024"]}
      ]}
    ]
  }, {mud: "guia curto da consulta"});

  // ── 4. Consulta do 3º trimestre (guia curto)
  G("pn-3tri", {
    rotulo: "Guia curto",
    urg: URG_PN,
    resumo: "Exames do 3º trimestre: hemograma, glicemia de jejum, EAS e urocultura, **sífilis e HIV**, Coombs se Rh negativo, toxoplasmose se suscetível [F]. **VSR a partir de 28 semanas** [F]. **AAS suspenso com 36 semanas** [F]. Consultas **quinzenais até 36 e semanais depois** [F]. Movimentos fetais a partir de 34 semanas (≥ 6 em 1 h após comer) [F]. **41 semanas → CMI** [F]. Cesárea a pedido: TCLE e termo de transferência ao CMI a partir de 36 semanas; cirurgia entre 39 e 41 semanas (Portaria SMS 18/2025) [F].",
    secoes: [
      {t: "Checklist", b: [
        {ul: [
          "PA, peso, AU, BCF, apresentação fetal (pélvica a termo → PNAR/maternidade) [F].",
          "Exames do 3º trimestre e testes rápidos [F].",
          "Plano de parto e maternidade de referência (CMI) [F].",
          "Sinais de trabalho de parto e de alarme por escrito [F].",
          "Estreptococo do grupo B: não consta no protocolo municipal – conferir conduta da maternidade [NV]."
        ]},
        {ir: [["pn-plano-parto", "Plano de parto"], ["pn-vacinas", "Vacinas"], ["pn-risco", "Estratificação de risco"]]},
        {ref: ["caderneta2026", "betim_pn2024", "betim_cesarea2025", "sesmg_risco"]}
      ]}
    ]
  }, {mud: "guia curto da consulta"});

  // ── 5. Plano de parto
  G("pn-plano-parto", {
    rotulo: "Guia curto",
    resumo: "Plano de parto é instrumento de **comunicação e decisão compartilhada**: acompanhante, posições, alívio da dor, contato pele a pele e amamentação na 1ª hora [C]. Direitos: **acompanhante de livre escolha** (Lei 11.108/2005) e **vinculação prévia à maternidade** (Lei 11.634/2007) [C]. Em Betim, a maternidade de referência é o **CMI**; entregar o plano impresso na admissão [F]. Dúvida em ficar com o bebê: **entrega legal para adoção** (Lei 13.509/2017) pela Vara da Infância [C].",
    secoes: [
      {t: "Conversar", b: [
        {ul: [
          "Quem será o acompanhante? Como chegar ao CMI e quando ir (trabalho de parto, perda de líquido, sangramento, menos movimentos) [F].",
          "Preferências: deambulação, posição, métodos não farmacológicos e analgesia, episiotomia só se necessária, clampeamento oportuno do cordão, pele a pele [C].",
          "Violência obstétrica e canais de denúncia (ouvidoria, Disque 136, Disque 180) [F].",
          "Banco de Leite Humano no CMI [F]."
        ]},
        {ir: [["pn-3tri", "Consulta do 3º trimestre"], ["amamentacao", "Amamentação"]]},
        {ref: ["leis_parto", "betim_pn2024"]}
      ]}
    ]
  }, {mud: "guia curto"});

  // ── 6. Queixas comuns da gestação
  G("pn-queixas", {
    urg: "**Epigastralgia ou cefaleia com PA elevada** (pré-eclâmpsia), **dor abdominal intensa ou contrações**, **edema unilateral com dor na panturrilha** (TVP), **prurido em palmas e plantas** (colestase) ou **vômitos após 20 semanas**: avaliar no mesmo dia/maternidade [F].",
    resumo: "A maioria das queixas é fisiológica e responde a medidas simples [C]. **Paracetamol** é o analgésico de escolha; **evitar AINE**, sobretudo após 20 semanas (oligoidrâmnio, fechamento do ducto arterial) [C]. Antiácido longe do ferro (2 h) [C].",
    secoes: [
      {t: "Por queixa", b: [
        {tab: {h: ["Queixa", "Medidas", "Quando preocupar"], r: [
          ["Náuseas/vômitos (1º tri)", "Refeições pequenas e frequentes, evitar jejum; ver NVG", "Desidratação, perda de peso, cetonúria [F/C]"],
          ["Pirose", "Fracionar, não deitar após comer, elevar a cabeceira; antiácido; omeprazol se persistir", "Epigastralgia com PA alta (pré-eclâmpsia) [F/C]"],
          ["Constipação", "Fibras, água, atividade; lactulose", "Dor abdominal intensa, sangramento [C]"],
          ["Hemorroidas", "Tratar a constipação, banho de assento", "Trombose dolorosa [C]"],
          ["Lombalgia", "Postura, calor local, alongamento; paracetamol", "Febre, disúria (pielonefrite), contrações [C]"],
          ["Câimbras", "Alongamento da panturrilha", "Dor contínua com edema unilateral (TVP) [C]"],
          ["Edema de MMII", "Elevar as pernas, decúbito lateral", "Súbito, de face/mãos, com PA alta; unilateral doloroso [F]"],
          ["Varizes", "Elevação, meia de compressão (compra)", "Cordão endurecido e doloroso (tromboflebite) [C]"],
          ["Corrimento", "Aumento fisiológico sem odor ou prurido", "Odor, prurido, perda de líquido [C]"]
        ]}, nota: "Conhecimento consolidado [C]; critérios de urgência da NT SES-MG 2024 [F]."},
        {ir: [["nvg", "Náuseas e vômitos na gestação"], ["itu-gestante", "ITU na gestação"], ["pa-gestante", "PA elevada na gestante"], ["tvp", "Suspeita de TVP"]]},
        {ref: ["betim_pn2024", "sesmg_risco", "remume"]}
      ]}
    ]
  });

  // ── 7. Diabetes gestacional
  G("pn-dmg", {
    urg: "**Glicemia de jejum ≥ 126 ou HbA1c ≥ 6,5%** na gestação = diabetes diagnosticado na gestação (não DMG) → PNAR com prioridade [F]. Hipoglicemia grave, cetose ou vômitos com hiperglicemia → urgência [F].",
    resumo: "Diagnóstico (SBD 2026): **jejum 92–125 mg/dL** em qualquer momento = DMG; **TOTG 75 g de 24 a 28 semanas**: jejum ≥ 92, 1 h ≥ 180 ou 2 h ≥ 153 (**1 valor basta**) [F]. Metas: **jejum 65–95, 1 h < 140, 2 h < 120** [F]. Dieta e atividade física por 1–2 semanas; **insulina** se glicemias fora da meta (SBD: ≥ 30% dos valores; Betim: ≥ 2 acima da meta) [F]. **Toda DMG vai ao PNAR** mantendo a APS (Betim/NT SES-MG) [F]. **TOTG 75 g ~6 semanas após o parto** [F].",
    secoes: [
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Glicemia de jejum no 1º trimestre"},
          {t: "Resultado", ramos: [
            {r: "≥ 126", n: [{t: "Diabetes na gestação → PNAR prioritário", k: "stop"}]},
            {r: "92–125", n: [{t: "DMG → MEV + monitorização + PNAR", k: "warn"}]},
            {r: "< 92", n: [{t: "TOTG 75 g entre 24 e 28 semanas", k: "ok"}]}
          ]},
          {t: "DMG: glicemias capilares (jejum e pós-prandial) por 1–2 semanas", k: "q"},
          {t: "Fora da meta?", ramos: [
            {r: "Sim", n: [{t: "Insulina NPH (dose com PNAR); metformina só se insulina inviável", k: "warn"}]},
            {r: "Não", n: [{t: "Manter MEV e monitorização", k: "ok"}]}
          ]},
          {t: "Pós-parto: suspender insulina; TOTG 75 g ~6 semanas; depois glicemia/HbA1c anual", k: "q"}
        ], nota: "SBD 2026 [F]; Protocolo Betim 2024 [F]; Consenso OPAS/MS/FEBRASGO/SBD 2019 [F]."},
        {det: {t: "Fisiopatologia", b: ["Hormônios placentários (lactogênio placentário, progesterona, cortisol) aumentam a resistência à insulina a partir do 2º trimestre. Quem não consegue aumentar a secreção de insulina desenvolve hiperglicemia, que atravessa a placenta e estimula o hiperinsulinismo fetal (macrossomia, hipoglicemia neonatal) [C]."]}},
        "Metformina (Betim, Quadro 25): 500 mg 1–2×/dia, titular a cada 1–2 semanas, máx. 2.500 mg/dia; não usar com feto < p50, CIUR ou DRC; a REMUME tem só 850 mg [F].",
        {ir: [["pp-pos-gestacao-risco", "Seguimento após DMG"], ["pn-risco", "Estratificação de risco"]]},
        {ref: ["sbd_dmg", "consenso_dmg", "sesmg_risco", "betim_pn2024", "remume"]}
      ]}
    ]
  }, {mud: "critérios SBD 2026, metas, fluxograma e pós-parto"});

  // ── 8. Hipertensão na gestação
  G("pn-has", {
    urg: "**PA ≥ 160/110** ou cefaleia intensa, alteração visual, epigastralgia, dispneia, oligúria, convulsão → **maternidade imediatamente** (sulfato de magnésio na pré-eclâmpsia grave) [F].",
    resumo: "**Hipertensão crônica**: antes de 20 semanas ou prévia; **gestacional**: após 20 semanas sem proteinúria nem lesão de órgão; **pré-eclâmpsia**: após 20 semanas com proteinúria ou disfunção de órgão (plaquetas, creatinina, transaminases, sintomas) [C]. Toda síndrome hipertensiva → **PNAR mantendo a APS** [F]. Betim adota o bundle com **alvo ~130/85**; o ECR **CHAP** mostrou benefício em tratar a partir de 140/90 [F/C]. **IECA, BRA e espironolactona contraindicados** [F]. Metildopa da REMUME como início; nifedipino retard por compra [F].",
    secoes: [
      {t: "Classificar", b: [
        {tab: {h: ["Tipo", "Quando", "Achados"], r: [
          ["HAS crônica", "Antes da gestação ou < 20 semanas", "Pode sobrepor pré-eclâmpsia [C]"],
          ["Hipertensão gestacional", "≥ 20 semanas", "Sem proteinúria nem disfunção de órgão; retorno em até 7 dias [F/C]"],
          ["Pré-eclâmpsia", "≥ 20 semanas", "Proteinúria (relação P/C ≥ 0,3) ou plaquetas < 100 mil, creatinina ↑, transaminases ↑, sintomas [C]"],
          ["Pré-eclâmpsia com gravidade / HELLP / eclâmpsia", "Qualquer momento após 20 sem e no puerpério", "PA ≥ 160/110, sintomas, hemólise, convulsão – maternidade [F]"]
        ]}}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "PA ≥ 140/90 em gestante"},
          {t: "PA ≥ 160/110 ou sintomas?", ramos: [
            {r: "Sim", n: [{t: "Maternidade/CMI", k: "stop"}]},
            {r: "Não", n: [{t: "Exames de pré-eclâmpsia: hemograma/plaquetas, creatinina, TGO/TGP, DHL, relação P/C urinária"}]}
          ]},
          {t: "Iniciar/ajustar: metildopa 250 mg 8/8h → até 2 g/dia; nifedipino retard se comprar", k: "warn"},
          {t: "PNAR (compartilhado); curva domiciliar de PA; retorno ≤ 14 dias (gestacional ≤ 7)", k: "warn"},
          {t: "AAS 100 mg à noite até 36 semanas se iniciado até 16", k: "q"}
        ], nota: "Protocolo Betim 2024 (Quadro 19 e bundle) [F]; NT SES-MG 2024 [F]; CHAP 2022 [C]."},
        {ir: [["pa-gestante", "PA elevada na gestante (urgência)"], ["pp-pos-gestacao-risco", "Seguimento após pré-eclâmpsia"], ["pn-risco", "Estratificação de risco"]]},
        {ref: ["betim_pn2024", "sesmg_risco", "chap", "iff_eclampsia", "remume"]}
      ]}
    ]
  });

  // ── 9. Anemia na gestação
  G("pn-anemia", {
    urg: "**Hb ≤ 7 g/dL** ou anemia com **dispneia, taquicardia, hipotensão** → maternidade (NT SES-MG 2024) [F].",
    resumo: "**Hb < 11 g/dL** = anemia na gestação [F]. Hb **8–10,9**: manejo na APS – parasitológico, **ferro de tratamento** e Hb em 30 dias [F]. **Hb < 8 ou refratária** → PNAR [F]. Dose: **120 mg/dia** de ferro elementar (OMS, PACK 2025), escalonando se não subir; o protocolo de Betim prevê **200 mg/dia** [F]. **Eletroforese de Hb** (traço/doença falciforme) [F]. Ferro EV: em Betim, a paciente adquire e a UBS administra (Circular 003/2024) [F].",
    secoes: [
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Hb < 11 g/dL na gestação"},
          {t: "Hb ≤ 7 ou sinais de gravidade?", ramos: [
            {r: "Sim", n: [{t: "Maternidade", k: "stop"}]},
            {r: "Não", n: [{t: "Hb < 8?"}]}
          ]},
          {t: "Hb < 8", ramos: [
            {r: "Sim", n: [{t: "PNAR + iniciar ferro", k: "warn"}]},
            {r: "Não (8–10,9)", n: [{t: "Ferro 120 mg/dia, parasitológico, eletroforese; Hb em 30 dias", k: "ok"}]}
          ]},
          {t: "Subiu: manter até Hb > 11 e depois profilaxia até 3 meses pós-parto; não subiu: adesão, parasitose, falciforme → aumentar dose e PNAR", k: "q"}
        ], nota: "NT SES-MG 2024 [F]; Protocolo Betim 2024 [F]; PACK Brasil 2025 [F]; Circular DUE-DIOP 003/2024 [F]."},
        {ir: [["anemia-ferropriva", "Anemia ferropriva"], ["parasitoses", "Enteroparasitoses"], ["pn-risco", "Estratificação de risco"]]},
        {ref: ["sesmg_risco", "betim_pn2024", "pack2025", "oms_anemia_gest", "betim_ferro2024", "remume"]}
      ]}
    ]
  }, {fontes: ["betim_ferro2024"]});

  // ── 10. Puerpério – 1ª semana (guia curto)
  G("pp-1semana", {
    rotulo: "Guia curto",
    calcs: ["sc:epds"],
    urg: "**Sangramento que encharca > 1 absorvente/hora**, febre, dor/odor no útero ou na ferida, **PA ≥ 160/110 ou cefaleia/alteração visual** (pré-eclâmpsia pode surgir no pós-parto), dor torácica/dispneia ou panturrilha dolorosa (TEV), **ideação suicida ou sintomas psicóticos** → urgência no mesmo dia [F/C].",
    resumo: "Rede Alyne: **visita domiciliar até o 7º dia** [F]. Betim: VD na 1ª semana + **Primeira Semana de Saúde Integral** (5º dia) na UBS entre 3 e 10 dias (RN de risco: até 3 dias), **mãe e bebê no mesmo dia** – teste do pezinho, BCG, hepatite B, triagem auditiva, amamentação [F]. Ferro **40 mg/dia até 3 meses pós-parto** (PNSF) [F]. Hipertensas: **PA em até 7 dias** [F].",
    secoes: [
      {t: "Checklist", b: [
        {ul: [
          "Mãe: PA, temperatura, involução uterina, lóquios, ferida (cesárea/episiotomia), mamas, humor (EPDS se indicado) [F/C].",
          "Amamentação: pega, posição, fissuras, ingurgitamento [F].",
          "Vacinas: dTpa se não feita, influenza (até 45 dias), completar hepatite B [F].",
          "Contracepção: discutir já (LARC preferível) [F].",
          "RN: pezinho, BCG/hepatite B, icterícia, coto umbilical, peso [F].",
          "Agendar consulta puerperal entre 30 e 40 dias [F]."
        ]},
        {ir: [["pp-consulta", "Consulta puerperal (~30 dias)"], ["pp-depressao", "Depressão perinatal"], ["pp-contracepcao", "Contracepção pós-parto"], ["amamentacao", "Amamentação"], ["pu-rn", "Consulta do RN"]]},
        {ref: ["alyne", "caderneta2026", "pnsf2022", "betim_pn2024"]}
      ]}
    ]
  }, {mud: "guia curto da visita"});

  // ── 11. Consulta puerperal (~30 dias) (guia curto)
  G("pp-consulta", {
    rotulo: "Guia curto",
    calcs: ["sc:epds"],
    resumo: "Consulta entre **30 e 40 dias** (Betim) / 30–42 dias (NT SES-MG) [F]. Pontos: **método contraceptivo iniciado**, **EPDS** (≥ 10 → avaliar depressão; item 10 positivo → risco de suicídio no mesmo dia), **TOTG 75 g ~6 semanas se DMG**, ajuste de anti-hipertensivo e **registro de risco cardiovascular** se pré-eclâmpsia, citopatológico se atrasado (após 6–8 semanas), testes rápidos; **VDRL trimestral até 12 meses** se sífilis na gestação [F].",
    secoes: [
      {t: "Checklist", b: [
        {ul: [
          "Contracepção escolhida e iniciada [F].",
          "EPDS aplicada [F].",
          "DMG → TOTG ~6 semanas; pré-eclâmpsia/HAS → PA e seguimento [F].",
          "Amamentação, retorno à atividade sexual, assoalho pélvico e incontinência [C].",
          "Puericultura em dia [F].",
          "DIU pós-placentário → revisão em 30–45 dias (Betim) [F]."
        ]},
        {ir: [["pp-contracepcao", "Contracepção pós-parto"], ["pp-depressao", "Depressão perinatal"], ["pp-pos-gestacao-risco", "Seguimento após DMG/pré-eclâmpsia"]]},
        {ref: ["caderneta2026", "sesmg_risco", "consenso_dmg", "epds_br", "betim_pn2024"]}
      ]}
    ]
  }, {mud: "guia curto da consulta"});

  // ── 12. Contracepção pós-parto
  G("pp-contracepcao", {
    resumo: "Ideal: **método de longa duração (implante ou DIU)** iniciado cedo – menor falha [F]. **Implante de etonogestrel** pode ser inserido **a qualquer momento**, inclusive amamentando; incorporado ao SUS (14–49 anos, Portarias 47/48 de 2025), oferta pela APS por cotas [F]. **DIU de cobre** no pós-parto imediato (até 48 h, maternidade) ou **a partir de 4 semanas** [F]. **Progestagênio isolado** (noretisterona 0,35 mg; medroxiprogesterona trimestral) é compatível com amamentação; **combinados** aumentam o risco de TEV nas primeiras semanas pós-parto [F].",
    secoes: [
      {t: "Quando iniciar (OMS 2025 / CDC 2024, resumo)", b: [
        {tab: {h: ["Método", "Amamentando", "Não amamentando"], r: [
          ["Implante, pílula de progestagênio", "A qualquer momento [F]", "A qualquer momento [F]"],
          ["Medroxiprogesterona trimestral", "Categoria 2 antes de 6 semanas (OMS 2025) [F]", "A qualquer momento [F]"],
          ["DIU (cobre ou LNG)", "Até 48 h ou ≥ 4 semanas [F]", "Até 48 h ou ≥ 4 semanas [F]"],
          ["Combinado (pílula, injetável mensal)", "Evitar nas primeiras semanas (TEV, lactação) – conferir categoria por semana [NV]", "Evitar < 3 semanas; 3–6 semanas conforme risco de TEV [NV]"]
        ]}, nota: "OMS MEC 2025 e CDC MEC 2024 [F]; categorias dos combinados conferidas só em fonte secundária [NV]."}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Puérpera: desejo reprodutivo e preferências"},
          {t: "Aceita LARC?", ramos: [
            {r: "Sim", n: [{t: "Implante (APS) ou DIU (≥ 4 semanas); ponte com progestagênio oral até a inserção", k: "ok"}]},
            {r: "Não", n: [{t: "Noretisterona 0,35 mg (mesmo horário) ou medroxiprogesterona 150 mg a cada 12 semanas", k: "ok"}]}
          ]},
          {t: "LAM (amenorreia da lactação) só se < 6 meses, amamentação exclusiva e sem menstruação", k: "q"},
          {t: "Preservativo para IST em todos os casos", k: "q"}
        ], nota: "OMS MEC 2025 [F]; Portarias SECTICS 47 e 48/2025 e NT 51/2026 [F]; Portaria 3.265/2017 [F]."},
        {calc: "mec"},
        {ir: [["mu-metodos", "Métodos contraceptivos"], ["ae", "Contracepção de emergência"]]},
        {ref: ["mec_who2025", "mec_cdc2024", "implante_sus", "diu_pp", "remume"]}
      ]}
    ]
  });

  // ── 13. Depressão perinatal
  G("pp-depressao", {
    calcs: ["sc:epds"],
    urg: "**Ideação suicida, pensamentos de ferir o bebê, confusão, alucinações, agitação ou insônia < 4 h por várias noites** (suspeita de psicose puerperal) → **avaliação psiquiátrica no mesmo dia**; em Betim, **CERSAM** (adultos) ou CERSAMI (adolescentes), mantendo o vínculo com a APS [F].",
    resumo: "**Baby blues** (choro, labilidade nos primeiros dias, some em até 2 semanas) é comum e não é doença [C]. Depressão perinatal: sintomas depressivos na gestação ou até 12 meses pós-parto, > 2 semanas, com prejuízo [C]. **EPDS ≥ 10** (sensibilidade 82,6%, especificidade 65,4% em Pelotas) indica avaliação clínica; **item 10** sempre avaliado [F]. Leve: intervenção psicológica/eMulti; moderada a grave: **psicoterapia + ISRS** – **sertralina** preferida na amamentação [F/C]. Rastrear **bipolaridade** antes do antidepressivo [C].",
    secoes: [
      {t: "Diferenciais", b: [
        {tab: {h: ["Quadro", "Pistas"], r: [
          ["Baby blues", "Primeiros 3–5 dias, leve, regride em até 2 semanas [C]"],
          ["Psicose puerperal", "Início súbito nas primeiras semanas, confusão, delírios, alucinações – emergência [F/C]"],
          ["Bipolaridade", "Euforia, pouca necessidade de sono, história prévia ou familiar [C]"],
          ["Hipotireoidismo / tireoidite pós-parto", "Fadiga, ganho de peso; TSH [C]"],
          ["Anemia", "Fadiga, palidez; hemograma [C]"],
          ["Ansiedade / TOC perinatal", "Preocupação excessiva com o bebê, pensamentos intrusivos de dano vividos com horror [C]"]
        ]}}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "EPDS (gestação e puerpério)"},
          {t: "Item 10 positivo, psicose ou risco ao bebê?", ramos: [
            {r: "Sim", n: [{t: "Mesmo dia: CERSAM/urgência; não deixar sozinha", k: "stop"}]},
            {r: "Não", n: [{t: "EPDS ≥ 10?"}]}
          ]},
          {t: "EPDS", ramos: [
            {r: "≥ 10", n: [{t: "Avaliação clínica; leve → psicologia/eMulti; moderada-grave → + sertralina", k: "warn"}]},
            {r: "< 10", n: [{t: "Apoio, rede, sono; repetir na próxima consulta", k: "ok"}]}
          ]},
          {t: "Sem resposta em 6 semanas → CERSAM/psiquiatria (Betim)", k: "warn"}
        ], nota: "EPDS validada em Pelotas [F]; Protocolo Betim 2024 [F]; NICE NG222 [F]; LactMed [C]."},
        {ir: [["depressao", "Depressão"], ["risco-suicida", "Ideação suicida"], ["pp-consulta", "Consulta puerperal"]]},
        {ref: ["epds_br", "betim_pn2024", "nice_depressao", "lactmed", "remume"]}
      ]}
    ]
  });

  // ── 14. Seguimento após DMG ou pré-eclâmpsia
  G("pp-pos-gestacao-risco", {
    resumo: "**DMG**: suspender insulina após o parto; **TOTG 75 g por volta de 6 semanas** (Betim: 6–8 semanas, também se RN ≥ 4.000 g); depois glicemia/HbA1c **anual** – risco muito aumentado de DM2 [F]. **Pré-eclâmpsia/hipertensão**: PA até o 5º–7º dia, ~40 dias e 12 semanas; suspender anti-hipertensivo quando PA < 140/90 sustentada; **persistiu após 12 semanas → HAS crônica** [F]. Registrar como **fator de risco cardiovascular** para a vida toda [F]. Próxima gestação: **AAS 12–16 semanas** se pré-eclâmpsia prévia [F]. Amamentando: **enalapril e anlodipino** são compatíveis; evitar metildopa se risco de depressão [F/C].",
    secoes: [
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Puérpera com DMG ou síndrome hipertensiva"},
          {t: "Condição", ramos: [
            {r: "DMG", n: [{t: "TOTG 75 g em 6–8 semanas → normal: glicemia/HbA1c anual; alterado: tratar como pré-DM/DM", k: "ok"}]},
            {r: "Pré-eclâmpsia/HAS", n: [{t: "PA em ≤ 7 dias, ~40 dias e 12 semanas; ajustar/suspender anti-hipertensivo", k: "warn"}]}
          ]},
          {t: "PA alta após 12 semanas → HAS crônica (Crônicos)", k: "warn"},
          {t: "Risco cardiovascular: PA, glicemia e lipídios periódicos; peso e atividade física", k: "q"}
        ], nota: "Consenso OPAS/MS/FEBRASGO/SBD 2019 [F]; Protocolo Betim 2024 [F]; SBD 2026 [F]."},
        {ir: [["cr-has", "HAS – diagnóstico e metas"], ["cr-prediabetes", "Pré-diabetes"], ["pp-contracepcao", "Contracepção pós-parto"]]},
        {ref: ["consenso_dmg", "sbd_dmg", "betim_pn2024", "lactmed", "remume"]}
      ]}
    ]
  });
})();
