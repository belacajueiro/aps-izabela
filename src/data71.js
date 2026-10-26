// ───────────── data71.js – v58: Guia Clínico – lote 8 (Musculoesquelético e neurológico: 14 itens sem guia).
// Conferido em 26/10/2026: TelessaúdeRS Reumatologia adulto 2022 (Protocolos 5–7, 9 e 10; Quadros 10–13), CAB 28 vol. II (cefaleia: sinais de
// alerta, limites de analgésicos e profilaxia; crise epiléptica: causas por idade e fármacos que baixam o limiar), REMUME Betim.
// Calculadoras novas no app.html: critérios de gota ACR/EULAR 2015 e regras de Ottawa.
Object.assign(FONTES, {
  tsrs_reum2022: {s: "TelessaúdeRS – Reumatologia adulto (2022)", t: "TelessaúdeRS-UFRGS. Protocolos de encaminhamento – Reumatologia adulto, 2022 (cópia na base clínica): Protocolo 5 e Quadro 10 (dor lombar; suspeita de cauda equina/compressão medular); Protocolo 6 e Quadro 11 (gota: critérios ACR/EULAR 2015 ≥ 8 pontos; reumatologia se ≥ 3 crises/ano apesar de tratamento otimizado – profilaxia com colchicina, AINE ou corticoide em dose baixa + alopurinol até 800 mg/dia; medicina interna/nefrologia se hiperuricemia de origem incerta ou TFG < 30; ortopedia se tofos complicados); Protocolo 7, Quadros 12–13 (osteoartrite: dor mecânica, rigidez < 30 min, sem sintomas constitucionais; tópicos – capsaicina 0,025–0,075% ou AINE gel – no manejo inicial de joelho e mão; perda ≥ 10% do peso; exercícios; AINE sistêmicos na menor dose com IBP se risco; encaminhar após 6 meses de tratamento otimizado); Protocolo 9 (bursite/tendinite: ortopedia após 4 meses de tratamento otimizado com cinesioterapia; saúde do trabalhador se relação laboral > 3 meses); Protocolo 10 (dor miofascial) (referência técnica de outro estado).", f: "F", url: "https://www.ufrgs.br/telessauders/regulasus/#regulasus-protocolos"},
  cab28_neuro: {s: "CAB 28 vol. II – cefaleia e crise epiléptica", t: "Ministério da Saúde. Cadernos de Atenção Básica nº 28, vol. II, 2013, cap. 2.2 e 2.3: Quadro 1 (sinais de alerta da cefaleia); limitar analgésicos a no máximo 3 vezes por semana e ergóticos a 2 vezes por semana para prevenir cefaleia crônica diária; cefaleia por abuso de medicação sempre no diferencial; profilaxia da migrânea com propranolol 40 mg ou amitriptilina 25 mg; Quadros 7–9 (classificação das crises, causas por idade – em adultos > 35 anos doença cerebrovascular, tumor, abstinência alcoólica, distúrbios metabólicos; fármacos que podem causar crises: betalactâmicos, quinolonas, isoniazida, tramadol, meperidina, antidepressivos, antipsicóticos, lítio, teofilina, abstinência de álcool, benzodiazepínicos e barbitúricos, cocaína, anfetaminas) (manual MS).", f: "F", url: "https://bvsms.saude.gov.br/bvs/publicacoes/acolhimento_demanda_espontanea_queixas_comuns_cab28v2.pdf"}
});

(() => {
  const get = id => CONDICOES.find(x => x.id === id);
  const G = (id, guia, o = {}) => {
    const c = get(id); if (!c) return;
    c.guia = guia;
    if (c.evid && o.fontes) c.evid.fontes = [...new Set([...(c.evid.fontes || []), ...o.fontes])];
    (c.mudancas = c.mudancas || []).push("v58 (26/10/2026): Guia Clínico novo – " + (o.mud || "reconhecer, diferenciais, fluxograma e fontes") + ".");
    if (o.nv) c.nv = [...(c.nv || []), ...o.nv];
  };

  // ── 1. Monoartrite aguda
  G("artrite-aguda", {
    urg: "**Monoartrite quente e dolorosa com febre**, imunossupressão, prótese, uso de drogas injetáveis, DM ou artrite reumatoide de base: **artrite séptica até prova em contrário** – punção e antibiótico no mesmo dia (urgência) [C]. Monoartrite após relação de risco com lesões de pele e tenossinovite: gonocócica [C].",
    resumo: "O exame que decide é a **análise do líquido sinovial** (celularidade, Gram, cultura, cristais) [C]. **Ácido úrico normal não exclui gota** na crise [C]. Gota típica (1ª metatarsofalangeana, início < 24 h, eritema) sem sinais de infecção pode ser tratada com segurança [C]. Poliartralgia com febre e exantema: pensar em **arboviroses** (chikungunya) [C].",
    secoes: [
      {t: "Diferenciais", b: [
        {tab: {h: ["Hipótese", "Pistas"], r: [
          ["Artrite séptica", "Febre, joelho/quadril, dor intensa a qualquer movimento, porta de entrada; leucócitos no líquido em geral > 50.000 [C]"],
          ["Gota", "1ª MTF, tornozelo, joelho; dor máxima em < 24 h; eritema; crises prévias; diuréticos, álcool [F/C]"],
          ["Pseudogota (pirofosfato de cálcio)", "Idoso, joelho/punho, condrocalcinose no RX [C]"],
          ["Gonocócica", "Jovem sexualmente ativo, poliartralgia migratória, tenossinovite, pústulas [C]"],
          ["Reativa", "Diarreia ou uretrite 1–4 semanas antes, joelho/tornozelo, entesite [C]"],
          ["Hemartrose", "Trauma, anticoagulante, hemofilia [C]"],
          ["Chikungunya/arboviroses", "Poliartralgia simétrica intensa com febre e exantema em época de transmissão [F]"],
          ["Início de artrite reumatoide/psoriásica", "Oligo ou poliartrite > 6 semanas, rigidez matinal longa [C]"]
        ]}}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Articulação quente, edemaciada e dolorosa"},
          {t: "Febre, imunossupressão, prótese, droga injetável ou toxemia?", ramos: [
            {r: "Sim", n: [{t: "Suspeita de séptica: punção e urgência no mesmo dia", k: "stop"}]},
            {r: "Não", n: [{t: "Quadro típico de gota?"}]}
          ]},
          {t: "Gota típica", ramos: [
            {r: "Sim", n: [{t: "Tratar a crise (ver Gota) e reavaliar em 48–72 h", k: "ok"}]},
            {r: "Não/dúvida", n: [{t: "Artrocentese (ou encaminhar no mesmo dia); hemograma, PCR/VHS, creatinina, ácido úrico", k: "warn"}]}
          ]},
          {t: "Sem melhora em 48–72 h ou febre surgindo → rever séptica", k: "stop"},
          {t: "Artrite persistente > 6 semanas → reumatologia", k: "warn"}
        ], nota: "Conhecimento consolidado [C]; ver calculadora de gota ACR/EULAR 2015 [F]."},
        {calc: "sc:gota2015"},
        {ir: [["gota", "Crise de gota"], ["chikungunya", "Chikungunya"]]},
        {ref: ["monoartrite", "tsrs_reum2022", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["tsrs_reum2022"], nv: ["Onde fazer artrocentese com análise do líquido em Betim (UPA/ortopedia)."]});

  // ── 2. Câimbras
  G("caimbras", {
    resumo: "Contração **súbita, involuntária e dolorosa**, geralmente na **panturrilha à noite**, que cede com alongamento [C]. Na maioria é idiopática; procurar causas tratáveis: **medicamentos** (diuréticos, estatinas, β-agonistas), **desidratação, gestação, DRC/diálise, DM, hipotireoidismo, distúrbios de K, Mg, Ca**, doença vascular e neuropatia [C]. **Quinina não**: riscos graves [C].",
    secoes: [
      {t: "Diferenciais", b: [
        {tab: {h: ["Hipótese", "O que separa"], r: [
          ["Síndrome das pernas inquietas", "Desconforto com **urgência de mexer**, alivia ao mover, sem contração dolorosa; ferritina [C]"],
          ["Claudicação intermitente", "Dor ao caminhar que melhora em repouso, pulsos diminuídos [C]"],
          ["Miopatia (estatina, hipotireoidismo)", "Dor contínua, fraqueza proximal, CK elevada [C]"],
          ["Neuropatia periférica / doença do neurônio motor", "Parestesias, fasciculações, atrofia, fraqueza [C]"],
          ["TVP", "Edema unilateral, dor contínua [C]"]
        ]}}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Câimbras recorrentes"},
          {t: "Fraqueza, atrofia ou fasciculações?", ramos: [
            {r: "Sim", n: [{t: "Neurologia", k: "warn"}]},
            {r: "Não", n: [{t: "Revisar medicamentos; K, Mg, Ca, creatinina, glicemia, TSH (CK se estatina + dor)"}]}
          ]},
          {t: "Alongamento da panturrilha antes de dormir; hidratação; tratar a causa", k: "ok"},
          {t: "Magnésio: provavelmente não ajuda em idosos; quinina não recomendada", k: "q"}
        ], nota: "Cochrane 2015 (quinina) e 2020 (magnésio) [C]."},
        {ref: ["caimbras"]}
      ]}
    ]
  });

  // ── 3. Cefaleia por uso excessivo de analgésicos
  G("cefaleia-abuso", {
    urg: "Cefaleia **súbita e explosiva**, nova após os 50 anos, com febre e rigidez de nuca, déficit focal, papiledema, piora com Valsalva, em imunossuprimido, gestante/puérpera ou após trauma: **investigar com urgência** (sinais de alerta do CAB 28) [F].",
    resumo: "Cefaleia em **≥ 15 dias/mês** em quem já tem cefaleia primária (geralmente migrânea) e usa analgésico em excesso por > 3 meses – analgésico simples em ≥ 15 dias/mês, ou triptano, ergótico, opioide ou combinações em ≥ 10 dias/mês (ICHD-3) [C]. O CAB 28 orienta limitar analgésicos a **no máximo 3 vezes por semana** [F]. Tratamento: **explicar, retirar o excesso e iniciar profilaxia** ao mesmo tempo [C].",
    secoes: [
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Cefaleia quase diária + uso frequente de analgésico"},
          {t: "Sinal de alerta?", ramos: [
            {r: "Sim", n: [{t: "Investigar (urgência conforme o sinal)", k: "stop"}]},
            {r: "Não", n: [{t: "Diário de cefaleia e de remédios; contar dias de uso"}]}
          ]},
          {t: "Retirada", ramos: [
            {r: "Analgésico simples / triptano", n: [{t: "Suspender de uma vez; piora por 1–2 semanas é esperada", k: "warn"}]},
            {r: "Opioide / barbitúrico (combinações)", n: [{t: "Redução gradual; considerar neurologia", k: "warn"}]}
          ]},
          {t: "Profilaxia junto: amitriptilina ou propranolol (REMUME); topiramato se falha", k: "ok"},
          {t: "Analgésico de resgate ≤ 2–3 dias/semana; reavaliar em 4–8 semanas", k: "ok"}
        ], nota: "CAB 28 vol. II, cap. 2.2 [F]; ICHD-3 [C]."},
        {tab: {h: ["Profilaxia", "Como (CAB 28 / prática)"], r: [
          ["Amitriptilina 25 mg", "12,5–25 mg à noite, subir até 50–75 mg; boa se insônia ou tensional associada [F/C]"],
          ["Propranolol 40 mg", "40 mg 2×/dia (migrânea); evitar em asma, bradicardia [F/C]"],
          ["Topiramato", "25 mg à noite, subir 25 mg/semana até 50 mg 2×/dia; teratogênico; não está na REMUME [C/F]"]
        ]}},
        {ref: ["cab28_neuro", "ichd3", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["cab28_neuro"]});

  // ── 4. Cervicalgia
  G("cervicalgia", {
    urg: "**Trauma** (regras canadenses/NEXUS), febre, perda de peso ou câncer prévio, **déficit neurológico progressivo**, sinais de **mielopatia** (mãos desajeitadas, marcha alterada, Hoffmann, hiper-reflexia), dor cervical com **cefaleia súbita ou síndrome de Horner** (dissecção arterial), dor torácica: investigação urgente [C].",
    resumo: "A maioria é **mecânica** e melhora em semanas [C]. Manter-se ativo, calor local, exercícios e analgesia curta; **imagem não é indicada** sem bandeira vermelha [C]. **Radiculopatia** (dor que desce pelo braço em dermátomo, parestesia, reflexo diminuído) também costuma melhorar com tratamento conservador; déficit motor progressivo → encaminhar [C].",
    secoes: [
      {t: "Diferenciar", b: [
        {tab: {h: ["Quadro", "Pistas"], r: [
          ["Mecânica / miofascial", "Dor e rigidez, pontos-gatilho, piora com postura, sem déficit [C/F]"],
          ["Radiculopatia (C5–C8)", "Dor irradiada para o braço, parestesia em dermátomo, Spurling positivo [C]"],
          ["Mielopatia cervical", "Mãos desajeitadas, marcha instável, sinais piramidais – urgência relativa [C]"],
          ["Torcicolo agudo", "Ao acordar, contratura, sem trauma [C]"],
          ["Causas referidas", "IAM (dor cervical/mandíbula com esforço), dissecção, meningite (rigidez de nuca com febre), polimialgia reumática (idoso, cintura escapular, VHS alta) [C]"]
        ]}}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Dor cervical"},
          {t: "Bandeira vermelha?", ramos: [
            {r: "Sim", n: [{t: "Investigar (urgência conforme o sinal)", k: "stop"}]},
            {r: "Não", n: [{t: "Explicar bom prognóstico; manter atividade; calor; exercícios; AINE/dipirona curtos"}]}
          ]},
          {t: "Radiculopatia com déficit motor progressivo → neurocirurgia/ortopedia com prioridade", k: "warn"},
          {t: "Sem melhora em 4–6 semanas → reavaliar; fisioterapia; dor miofascial > 6 meses → serviço de dor", k: "q"}
        ], nota: "NICE (dor lombar, por extensão) [F]; TelessaúdeRS Reumatologia 2022, Protocolo 10 (dor miofascial) [F]; demais [C]."},
        {ref: ["nice_lombar", "tsrs_reum2022", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["tsrs_reum2022"]});

  // ── 5. Primeira crise convulsiva
  G("crise-convulsiva", {
    urg: "**Crise que dura > 5 min** ou crises repetidas sem recuperar a consciência (**estado de mal**), déficit focal, confusão que não melhora, febre com rigidez de nuca, TCE, **gestante** (eclâmpsia), hipoglicemia, abstinência alcoólica: **urgência** [C]. Durante a crise: proteger, lateralizar, não colocar nada na boca, glicemia capilar [C].",
    resumo: "Primeiro: **foi mesmo uma crise?** (síncope convulsiva, crise psicogênica, AIT, enxaqueca) – a história de quem viu é decisiva [F]. Depois: **provocada ou não?** (hipoglicemia, Na, Ca, Mg, álcool, drogas, **fármacos que baixam o limiar**, infecção, AVC) [F]. Pedir glicemia, eletrólitos, função renal/hepática, **EEG e neuroimagem** e encaminhar à neurologia [C]. Em geral **não se inicia antiepiléptico** após crise única não provocada sem fatores de risco [C]. **Não dirigir** até liberação [C].",
    secoes: [
      {t: "Crise × imitadores", b: [
        {tab: {h: ["", "Crise epiléptica", "Síncope", "Crise psicogênica"], r: [
          ["Antes", "Aura (cheiro, déjà-vu, sensação epigástrica) [C]", "De pé, calor, palidez, sudorese, visão escura [C]", "Estresse; início gradual [C]"],
          ["Durante", "Olhos abertos, desvio, mordedura **lateral** da língua, cianose, 1–2 min [C]", "Abalos breves (< 15 s) possíveis [C]", "Olhos fechados, movimentos assíncronos, balançar da pelve, longa duração [C]"],
          ["Depois", "Confusão pós-ictal por minutos a horas, mialgia, cefaleia [C]", "Recuperação rápida e lúcida [C]", "Choro, sem confusão típica [C]"]
        ]}, nota: "Liberação de esfíncter ocorre em ambos (crise e síncope) e não diferencia [C]."}
      ]},
      {t: "Causas e conduta", b: [
        {tab: {h: ["Idade (CAB 28, Quadro 8)", "Causas mais comuns"], r: [
          ["18–35 anos", "Trauma, abstinência de álcool, drogas, tumor, idiopática [F]"],
          ["> 35 anos", "Doença cerebrovascular, tumor, abstinência de álcool, distúrbios metabólicos (uremia, insuficiência hepática, eletrólitos, hipoglicemia), demências [F]"]
        ]}, nota: "Fármacos que podem causar crise (Quadro 9): betalactâmicos, quinolonas, isoniazida, aciclovir, tramadol, meperidina, antidepressivos, antipsicóticos, lítio, teofilina, contrastes; abstinência de álcool, benzodiazepínicos e barbitúricos; cocaína, anfetaminas, metilfenidato [F]."},
        {fluxo: [
          {t: "Primeira crise, já recuperado"},
          {t: "Sinal de alarme (ver topo)?", ramos: [
            {r: "Sim", n: [{t: "Urgência", k: "stop"}]},
            {r: "Não", n: [{t: "Glicemia, Na, Ca, Mg, função renal e hepática, hemograma; ECG (síncope cardíaca?)"}]}
          ]},
          {t: "Provocada?", ramos: [
            {r: "Sim", n: [{t: "Tratar a causa; sem antiepiléptico em regra", k: "ok"}]},
            {r: "Não", n: [{t: "EEG + RM (ou TC) e neurologia com prioridade", k: "warn"}]}
          ]},
          {t: "EEG epileptiforme, lesão estrutural, crise noturna ou crises prévias → discutir antiepiléptico (risco de recorrência maior)", k: "q"},
          {t: "Orientar: não dirigir, não nadar sozinho, evitar alturas e privação de sono; plano de primeiros socorros", k: "ok"}
        ], nota: "CAB 28 vol. II, cap. 2.3 [F]; AAN/AES 2015 [C]."},
        {ir: [["convulsao-ativa", "Crise convulsiva em curso"], ["sincope", "Síncope"], ["abstinencia-alcool", "Abstinência alcoólica"], ["pa-gestante", "Eclâmpsia"]]},
        {ref: ["cab28_neuro", "ilae_crise", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["cab28_neuro"]});

  // ── 6. Distensão muscular
  G("distensao", {
    urg: "**Gap palpável** ou incapacidade de contrair o músculo (ruptura completa – ex.: tendão de Aquiles: teste de Thompson), **dor desproporcional com tensão do compartimento e dor ao estiramento passivo** (síndrome compartimental), hematoma volumoso em anticoagulado: urgência/ortopedia [C].",
    resumo: "Dor súbita durante corrida, salto ou mudança de direção, com dor à palpação e ao alongamento e à contração contra resistência; equimose em 24–48 h [C]. Tratamento: **proteger por 2–3 dias**, gelo, elevação, compressão, e depois **mobilização e carga progressivas** guiadas pela dor; fortalecimento **excêntrico** reduz recidiva (posteriores da coxa) [C].",
    secoes: [
      {t: "Graduar e decidir", b: [
        {tab: {h: ["Grau", "Achado", "Retorno esperado"], r: [
          ["I", "Dor sem perda de força [C]", "Dias a 2 semanas [C]"],
          ["II", "Dor com perda parcial de força, equimose [C]", "Semanas [C]"],
          ["III", "Ruptura completa, gap, perda de função [C]", "Ortopedia [C]"]
        ]}},
        {fluxo: [
          {t: "Dor muscular aguda após esforço"},
          {t: "Gap, perda de função ou suspeita de compartimental?", ramos: [
            {r: "Sim", n: [{t: "Urgência/ortopedia", k: "stop"}]},
            {r: "Não", n: [{t: "Proteção 2–3 dias, gelo 15–20 min, elevação; analgesia curta", k: "ok"}]}
          ]},
          {t: "Depois: mobilização ativa, alongamento sem dor e fortalecimento progressivo (excêntrico)", k: "ok"},
          {t: "Retorno ao esporte quando força e amplitude estiverem simétricas", k: "ok"}
        ], nota: "Conhecimento consolidado [C]."},
        {ref: ["entorse", "rename", "remume"]}
      ]}
    ]
  });

  // ── 7. Entorse de tornozelo
  G("entorse", {
    resumo: "Inversão do pé com dor e edema lateral (ligamento talofibular anterior) [C]. **Radiografia só se as regras de Ottawa forem positivas** [C]. Proteção, gelo, compressão e elevação por 48–72 h, **suporte funcional** (tornozeleira) e **mobilização precoce** – melhor que imobilização rígida [C]. **AINE tópico** alivia como o oral, com menos efeitos [C]. Propriocepção após a fase aguda reduz recidiva [C].",
    calcs: ["sc:ottawa"],
    secoes: [
      {t: "Decidir", b: [
        {calc: "sc:ottawa"},
        {tab: {h: ["Diferenciais / lesões associadas", "Pista"], r: [
          ["Fratura de maléolo ou da base do 5º metatarso", "Ottawa positivo [C]"],
          ["Lesão da sindesmose (entorse alta)", "Dor acima do tornozelo, teste de compressão (squeeze) positivo, mecanismo em rotação externa – recuperação mais lenta [C]"],
          ["Ruptura do tendão de Aquiles", "Estalo posterior, Thompson positivo – urgência [C]"],
          ["Lesão do tendão fibular", "Dor retromaleolar, estalido [C]"],
          ["Instabilidade crônica", "Entorses de repetição – fisioterapia/ortopedia [C]"]
        ]}},
        {fluxo: [
          {t: "Entorse de tornozelo"},
          {t: "Ottawa positivo?", ramos: [
            {r: "Sim", n: [{t: "Radiografia; fratura → ortopedia", k: "warn"}]},
            {r: "Não", n: [{t: "PRICE 48–72 h + tornozeleira + carga conforme dor", k: "ok"}]}
          ]},
          {t: "Exercícios de amplitude e propriocepção após a fase aguda", k: "ok"},
          {t: "Sem melhora em 1–2 semanas ou instabilidade importante → reavaliar / ortopedia", k: "warn"}
        ], nota: "Regras de Ottawa (Stiell) [C]; AINE tópico: Cochrane 2015 [C]."},
        {ref: ["entorse", "rename", "remume"]}
      ]}
    ]
  });

  // ── 8. Fascite plantar
  G("fascite", {
    resumo: "**Dor no calcanhar, na face plantar medial**, pior nos **primeiros passos da manhã** ou após repouso, que melhora com o caminhar e piora ao fim do dia [C]. Diagnóstico clínico; **RX não é necessário** (esporão é achado comum e não explica a dor) [C]. Alongamento da fáscia e da panturrilha, calçado com amortecimento, palmilha; melhora em meses na maioria [C].",
    secoes: [
      {t: "Diferenciais", b: [
        {tab: {h: ["Hipótese", "Pista"], r: [
          ["Fratura de estresse do calcâneo", "Dor ao comprimir o calcâneo dos lados, corredor, osteoporose [C]"],
          ["Síndrome do túnel do tarso", "Parestesias na planta, Tinel atrás do maléolo medial [C]"],
          ["Tendinopatia de Aquiles", "Dor posterior, no tendão [C]"],
          ["Atrofia do coxim gorduroso", "Idoso, dor central no calcanhar ao apoio [C]"],
          ["Entesite (espondiloartrite)", "Bilateral, jovem, lombalgia inflamatória, uveíte, psoríase [C]"]
        ]}}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Dor plantar no calcanhar ao acordar"},
          {t: "Bilateral com dor lombar inflamatória ou psoríase?", ramos: [
            {r: "Sim", n: [{t: "Pensar em espondiloartrite – reumatologia", k: "warn"}]},
            {r: "Não", n: [{t: "Alongamentos, calçado, palmilha, gelo; AINE curto", k: "ok"}]}
          ]},
          {t: "> 6 meses: órtese noturna; infiltração dá alívio curto e pode romper a fáscia", k: "q"},
          {t: "Refratária a 6–12 meses de tratamento conservador → ortopedia/fisioterapia", k: "warn"}
        ], nota: "JOSPT 2023 [C]; TelessaúdeRS Reumatologia 2022, Protocolo 9 (tendinites: encaminhar após 4 meses de tratamento otimizado) [F]."},
        {ref: ["fascite", "tsrs_reum2022", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["tsrs_reum2022"]});

  // ── 9. Gota
  G("gota", {
    urg: "Febre, toxemia, monoartrite atípica ou que não melhora em 48–72 h: **afastar artrite séptica** (punção) [C].",
    resumo: "Crise típica: **dor intensa que chega ao máximo em < 24 h**, eritema, não tolera nem o lençol, na **1ª metatarsofalangeana (podagra)**, tornozelo ou joelho [F]. **Ácido úrico pode estar normal na crise** – dosar 2–4 semanas depois [F/C]. Tratar a crise o quanto antes com **AINE, corticoide ou colchicina** conforme comorbidades [C]; **não suspender** alopurinol em uso [C]. Classificação: critérios ACR/EULAR 2015 (≥ 8 pontos) [F].",
    calcs: ["sc:gota2015"],
    secoes: [
      {t: "Classificar", b: [
        {calc: "sc:gota2015"},
        {det: {t: "Fisiopatologia", b: ["Hiperuricemia prolongada leva à deposição de cristais de urato monossódico nas articulações frias e periféricas. A crise é a resposta inflamatória (inflamassoma, IL-1) a cristais liberados – por trauma, álcool, desidratação, diuréticos, jejum ou por **variação brusca do ácido úrico**, inclusive ao iniciar o alopurinol sem profilaxia [C]."]}}
      ]},
      {t: "Tratar e seguir", b: [
        {tab: {h: ["Crise – escolha pela comorbidade", ""], r: [
          ["Prednisona/prednisolona", "Boa opção na DRC, úlcera, anticoagulação; cuidado no DM [C]; REMUME [F]"],
          ["AINE (ibuprofeno)", "Sem DRC, úlcera, ICC, anticoagulante [C]; REMUME [F]"],
          ["Colchicina em dose baixa", "Melhor nas primeiras 12–36 h; ajustar na DRC; interações com claritromicina, verapamil [C]; não está na REMUME [F]"]
        ]}},
        {tab: {h: ["Depois da crise (TelessaúdeRS 2022)", ""], r: [
          ["Tratamento otimizado", "Profilaxia das crises com colchicina (ou AINE/corticoide em dose baixa) + alopurinol até 800 mg/dia [F]"],
          ["Paciente estável, sem crises e aderente", "Não precisa mudar a terapia só porque o ácido úrico está fora do alvo [F]"],
          ["Reumatologia", "≥ 3 crises/ano apesar de tratamento otimizado [F]"],
          ["Medicina interna/nefrologia", "Hiperuricemia de origem incerta (jovens, mulheres na pré-menopausa) ou TFG < 30 [F]"],
          ["Ortopedia", "Tofos com complicações sem melhora [F]"]
        ]}, nota: "Alopurinol 100 e 300 mg na REMUME [F]. Revisar diuréticos tiazídicos/de alça, álcool (cerveja, destilados), frutose; losartana tem leve efeito uricosúrico [C]."},
        {fluxo: [
          {t: "Crise de gota provável"},
          {t: "Sinais de infecção?", ramos: [
            {r: "Sim", n: [{t: "Punção/urgência", k: "stop"}]},
            {r: "Não", n: [{t: "Corticoide, AINE ou colchicina hoje; gelo; repouso da articulação", k: "ok"}]}
          ]},
          {t: "2–4 semanas depois: ácido úrico, creatinina, glicemia, lipídios; discutir hipouricemiante com profilaxia", k: "ok"}
        ], nota: "TelessaúdeRS Reumatologia 2022, Protocolo 6 e Quadro 11 [F]; ACR 2020 e ECR [C]."},
        {ref: ["tsrs_reum2022", "gota_ecr", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["tsrs_reum2022"], mud: "calculadora de classificação ACR/EULAR 2015 e critérios de tratamento otimizado e encaminhamento do TelessaúdeRS 2022"});

  // ── 10. Osteoartrite de joelho
  G("oa-joelho", {
    resumo: "Dor **mecânica** (piora com atividade, melhora com repouso), **rigidez < 30 min**, crepitação, aumento ósseo, derrame pequeno e frio, **sem sintomas constitucionais** [F]. Diagnóstico clínico; RX não é obrigatório [C]. Base: **exercício** (fortalecimento + aeróbico de baixo impacto), **perda de ≥ 10% do peso** se sobrepeso, **tópico** (AINE gel ou capsaicina) [F]. AINE oral na menor dose e menor tempo, com IBP se risco [F]. Encaminhar após **6 meses** de tratamento otimizado [F].",
    secoes: [
      {t: "Diferenciais", b: [
        {tab: {h: ["Hipótese", "Pista"], r: [
          ["Artrite inflamatória (AR, psoriásica)", "Rigidez > 1 h, calor, vários sítios, < 45 anos – reumatologia [F/C]"],
          ["Gota / pseudogota", "Crise aguda, quente [C]"],
          ["Bursite anserina", "Dor medial abaixo da linha articular [C]"],
          ["Lesão meniscal", "Travamento, falseio, dor na linha articular após torção [C]"],
          ["Dor referida do quadril", "Dor no joelho com rotação do quadril dolorosa/limitada [C]"],
          ["Osteonecrose / fratura por insuficiência", "Dor súbita e intensa em idoso, à noite [C]"]
        ]}, nota: "Suspeitar de OA secundária a doença inflamatória se < 45 anos sem trauma, locais incomuns (ombro, cotovelo, punho, tornozelo), dor inflamatória ou perda de peso (TelessaúdeRS) [F]."}
      ]},
      {t: "Tratar (Quadro 13)", b: [
        {tab: {h: ["Componente", "Como"], r: [
          ["Exercício", "Fortalecimento (musculação, funcional), aeróbico de baixo impacto (hidroginástica, caminhada, bicicleta), flexibilidade [F]"],
          ["Peso", "Perder ≥ 10% se sobrepeso/obesidade [F]"],
          ["Tópico (1º passo)", "Capsaicina 0,025–0,075% até 4×/dia ou AINE gel (cetoprofeno, diclofenaco) até 4×/dia [F]"],
          ["AINE sistêmico", "Ibuprofeno 600 mg 8/8 h, naproxeno 500 mg 12/12 h, diclofenaco 50 mg 8/8 h ou meloxicam 7,5–15 mg/dia, na menor dose; IBP se idoso, úlcera prévia, AAS, corticoide, anticoagulante, ISRS [F]"],
          ["Auxílio de marcha", "Bengala/andador nos casos graves [F]"]
        ]}, nota: "TelessaúdeRS Reumatologia 2022, Quadro 13 [F]. Opioides e glucosamina/condroitina sem benefício consistente (OARSI) [C]. REMUME: ibuprofeno 600 mg; tópicos não constam [F]."},
        {fluxo: [
          {t: "Dor crônica no joelho"},
          {t: "Inflamatória ou atípica?", ramos: [
            {r: "Sim", n: [{t: "Investigar / reumatologia", k: "warn"}]},
            {r: "Não", n: [{t: "Exercício + peso + tópico; AINE oral em crises", k: "ok"}]}
          ]},
          {t: "Refratária a 6 meses ou prejuízo importante nas AVD → ortopedia (cirurgia) ou serviço de dor (sem indicação cirúrgica)", k: "warn"}
        ], nota: "TelessaúdeRS Reumatologia 2022, Protocolo 7 [F]."},
        {ref: ["tsrs_reum2022", "oarsi", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["tsrs_reum2022"]});

  // ── 11. Dor no ombro
  G("ombro", {
    urg: "Dor no ombro (sobretudo esquerdo) **com esforço, dispneia ou sudorese** (SCA), febre com articulação quente (séptica), trauma com deformidade (luxação/fratura), **fraqueza súbita importante** após trauma em jovem (ruptura aguda do manguito), dor no ombro direito com doença biliar ou no esquerdo após trauma abdominal (baço): avaliação urgente [C].",
    resumo: "A causa mais comum é a **tendinopatia do manguito rotador** (dor lateral no ombro ao elevar o braço, arco doloroso, dor noturna ao deitar sobre o lado) [C]. **Capsulite adesiva**: perda progressiva da **rotação externa passiva**, frequente no DM [C]. Tratamento: **exercícios** de fortalecimento do manguito e da escápula por 6–12 semanas, analgesia curta, calor [F/C]. Encaminhar após **4 meses** de tratamento otimizado [F].",
    secoes: [
      {t: "Diferenciar", b: [
        {tab: {h: ["Hipótese", "Pista no exame"], r: [
          ["Tendinopatia/bursite subacromial", "Arco doloroso 60–120°, dor à abdução resistida, amplitude passiva preservada [C]"],
          ["Ruptura do manguito", "Fraqueza, 'sinal do braço caído', idoso ou trauma [C]"],
          ["Capsulite adesiva (ombro congelado)", "Rotação externa **passiva** muito reduzida, fases de dor e rigidez, DM/tireoide [C]"],
          ["Osteoartrite glenoumeral", "Crepitação, perda global de movimento, RX [F/C]"],
          ["Radiculopatia C5–C6", "Dor que desce do pescoço, piora com movimento do pescoço [C]"],
          ["Polimialgia reumática", "> 50 anos, dor bilateral em cintura escapular e pélvica, rigidez matinal, VHS/PCR altos [C]"],
          ["Dor referida visceral", "Não reproduzida ao mobilizar o ombro [C]"]
        ]}}
      ]},
      {t: "Tratar e decidir", b: [
        {tab: {h: ["Fase (TelessaúdeRS, Quadro 13 – ombro)", "Conduta"], r: [
          ["Aguda", "Evitar elevar os braços acima da cabeça; AINE; calor úmido 10–15 min; exercício pendular com peso 5 min/dia após o calor; alongamento passivo em todos os eixos [F]"],
          ["Crônica", "Fortalecimento do manguito rotador [F]"]
        ]}},
        {fluxo: [
          {t: "Dor no ombro"},
          {t: "Bandeira vermelha (ver topo)?", ramos: [
            {r: "Sim", n: [{t: "Urgência conforme a causa", k: "stop"}]},
            {r: "Não", n: [{t: "Exercícios + analgesia curta; infiltração se a dor impedir a reabilitação", k: "ok"}]}
          ]},
          {t: "Sem resposta a 4 meses de tratamento otimizado (com cinesioterapia) → ortopedia ou serviço de dor", k: "warn"},
          {t: "Relação com o trabalho há > 3 meses → saúde do trabalhador", k: "q"}
        ], nota: "TelessaúdeRS Reumatologia 2022, Protocolos 7 e 9 [F]; BMJ 2019 (descompressão subacromial não supera placebo) [C]."},
        {ref: ["tsrs_reum2022", "ombro", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["tsrs_reum2022"]});

  // ── 12. Parestesias
  G("parestesias", {
    urg: "Parestesia ou fraqueza **súbita unilateral**, na face, com alteração de fala ou visão: **AVC/AIT** – urgência [C]. **Fraqueza ascendente** em dias com arreflexia (Guillain-Barré), parestesia em sela com retenção urinária (**cauda equina**) ou nível sensitivo (medula): urgência [F/C].",
    resumo: "Primeiro o **padrão**: **focal** (túnel do carpo, ulnar, fibular), **radicular** (dermátomo, com dor que irradia), **polineuropatia** simétrica distal em 'bota e luva', ou **central** (hemicorpo, face) [C]. Polineuropatia: **glicemia/HbA1c, B12, TSH, creatinina, hemograma, TGO/TGP, álcool**; HIV e sífilis conforme risco [C]. Tratar a causa; dor neuropática: amitriptilina [C].",
    secoes: [
      {t: "Por padrão", b: [
        {tab: {h: ["Padrão", "Causas principais", "Primeiro passo"], r: [
          ["Polineuropatia simétrica distal", "DM, álcool, B12 (inclusive metformina, IBP), hipotireoidismo, DRC, HIV, sífilis, quimioterapia [C]", "Exames de causa; monofilamento e cuidado com os pés no DM [C]"],
          ["Mononeuropatia", "Túnel do carpo (polegar a 4º dedo, noturna), ulnar (4º–5º dedos), fibular (pé caído após cruzar as pernas) [C]", "Ver item túnel do carpo; evitar compressão [C]"],
          ["Radiculopatia", "Hérnia de disco, estenose [C]", "Ver lombalgia/cervicalgia; bandeiras vermelhas [C]"],
          ["Central", "AVC/AIT, esclerose múltipla [C]", "Urgência se súbito [C]"],
          ["Perioral e mãos, com ansiedade", "Hiperventilação, hipocalcemia [C]", "Cálcio se recorrente [C]"]
        ]}}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Parestesias"},
          {t: "Súbita, unilateral, ascendente rápida ou com esfíncteres?", ramos: [
            {r: "Sim", n: [{t: "Urgência", k: "stop"}]},
            {r: "Não", n: [{t: "Classificar o padrão"}]}
          ]},
          {t: "Polineuropatia → exames de causa; tratar; B12 oral 1.000–2.000 mcg/dia se baixa", k: "ok"},
          {t: "Déficit motor progressivo, atrofia ou dúvida → neurologia (ENMG)", k: "warn"}
        ], nota: "Conhecimento consolidado [C]; B12 oral × IM: Cochrane 2018 [F]."},
        {ir: [["tunel-carpo", "Túnel do carpo"], ["avc-ait", "AVC/AIT"], ["cervicalgia", "Cervicalgia/radiculopatia"]]},
        {ref: ["cochrane_b12", "rename", "remume"]}
      ]}
    ]
  });

  // ── 13. Tremor
  G("tremor", {
    resumo: "**Tremor essencial**: tremor de **ação/postural**, bilateral e relativamente simétrico das mãos (± cabeça e voz), por ≥ 3 anos, história familiar, **melhora com álcool** [C]. **Parkinson**: tremor de **repouso**, assimétrico, com bradicinesia e rigidez [C]. Antes de rotular: **TSH, cafeína, medicamentos** (salbutamol, valproato, lítio, ISRS, levotiroxina, antipsicóticos, metoclopramida) e abstinência alcoólica [C]. Tratar só se atrapalhar a vida: **propranolol** ou primidona [C].",
    secoes: [
      {t: "Diferenciar", b: [
        {tab: {h: ["", "Essencial", "Parkinsoniano", "Fisiológico exacerbado"], r: [
          ["Quando aparece", "Ao segurar copo, escrever (ação/postural) [C]", "Em repouso, some ao mover [C]", "Postural fino [C]"],
          ["Distribuição", "Bilateral, cabeça e voz [C]", "Unilateral no início, 'contar moedas' [C]", "Mãos [C]"],
          ["Outros sinais", "Nenhum ou ataxia leve [C]", "Bradicinesia, rigidez, marcha em pequenos passos, hipomimia [C]", "Ansiedade, cafeína, tireoide, fármacos [C]"],
          ["Álcool", "Melhora [C]", "Não muda [C]", "Variável [C]"]
        ]}}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Tremor"},
          {t: "Início súbito, sinais parkinsonianos, cerebelares ou assimetria marcada?", ramos: [
            {r: "Sim", n: [{t: "Neurologia (AVC se súbito com déficit → urgência)", k: "warn"}]},
            {r: "Não", n: [{t: "TSH, revisar fármacos, cafeína e álcool"}]}
          ]},
          {t: "Impacto funcional?", ramos: [
            {r: "Não", n: [{t: "Orientar; sem remédio", k: "ok"}]},
            {r: "Sim", n: [{t: "Propranolol (REMUME) ou primidona; refratário → neurologia", k: "ok"}]}
          ]}
        ], nota: "AAN 2011; MDS 2018 [C]."},
        {ref: ["tremor", "rename", "remume"]}
      ]}
    ]
  });

  // ── 14. Túnel do carpo
  G("tunel-carpo", {
    resumo: "Parestesia e dor no **território do mediano** (polegar, indicador, médio, metade do anelar), **pior à noite** e ao segurar volante/celular, alivia ao **sacudir a mão** [C]. Testes de **Phalen** e **Tinel** ajudam pouco isoladamente [C]. Associações: **gestação, DM, hipotireoidismo, obesidade, AR**, trabalho repetitivo [C]. Leve a moderado: **órtese noturna em posição neutra** por 6–8 semanas; corticoide (oral curto ou infiltração) para alívio de curto prazo [C]. **Atrofia tenar ou fraqueza**: ENMG e cirurgia [C].",
    secoes: [
      {t: "Diferenciar e decidir", b: [
        {tab: {h: ["Hipótese", "Pista"], r: [
          ["Radiculopatia C6–C7", "Dor cervical, alteração de reflexo, parestesia que sobe pelo braço [C]"],
          ["Neuropatia ulnar", "4º e 5º dedos, cotovelo [C]"],
          ["Polineuropatia", "Bilateral, pés também [C]"],
          ["Tenossinovite de De Quervain", "Dor na base do polegar, Finkelstein positivo [C]"],
          ["Rizartrose (OA da base do polegar)", "Dor mecânica, sem parestesia [F/C]"]
        ]}},
        {fluxo: [
          {t: "Parestesia noturna no território do mediano"},
          {t: "Atrofia tenar, fraqueza ou sintomas constantes?", ramos: [
            {r: "Sim", n: [{t: "ENMG e ortopedia/cirurgia de mão", k: "warn"}]},
            {r: "Não", n: [{t: "TSH, glicemia; órtese noturna neutra 6–8 semanas; ajustar atividade", k: "ok"}]}
          ]},
          {t: "Sintomas intensos: prednisona curta ou infiltração (alívio de curto prazo)", k: "q"},
          {t: "Falha em 3–6 meses → ENMG e cirurgia; gestante costuma melhorar após o parto", k: "warn"}
        ], nota: "AAOS [C]."},
        {ir: [["parestesias", "Parestesias"]]},
        {ref: ["tunel_carpo", "rename", "remume"]}
      ]}
    ]
  }, {nv: ["Fornecimento de órtese de punho e acesso à ENMG em Betim."]});
})();
