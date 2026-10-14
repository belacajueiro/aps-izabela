// ───────────── CRÔNICOS – Asma, DPOC e pós-AVC
CR_PATCH["cr-asma"] = {sistema: "Asma e DPOC", guia: {
  resumo: "Na asma, o que reduz crise grave e morte é **nunca tratar só com broncodilatador de alívio (SABA)**: todo paciente precisa de corticoide inalado, idealmente **budesonida-formoterol** como alívio (trilha 1 da GINA). Antes de subir a etapa, confira **técnica inalatória e adesão** – são a causa mais comum de falta de controle.",
  calcs: ["sc:gina"],
  secoes: [
   {t: "Asma ou DPOC?", b: [
     {tab: {h: ["Característica", "Asma", "DPOC"], r: [["Início", "Geralmente < 40 anos, frequentemente na infância", "> 40 anos"], ["Sintomas", "Variáveis, intermitentes, piora à noite/gatilhos", "Persistentes e progressivos"], ["Exposição", "Atopia pessoal/familiar, rinite", "Tabaco, fogão a lenha, poeira ocupacional"], ["Espirometria", "Obstrução variável; resposta ao BD (≥ 12% e 200 mL no VEF1)", "VEF1/CVF < 0,70 pós-BD persistente"]]}, nota: "Diferenciação pelas características clínicas e espirométricas descritas em GINA e GOLD [C]. Pode haver sobreposição; na dúvida, trate a asma (corticoide inalado) e encaminhe para espirometria."},
     {ref: ["gina", "gold"]}
   ]},
   {t: "Controle e risco de crise", b: [
     {calc: "sc:gina"},
     {ul: ["**Risco de crise grave:** ≥ 1 crise grave no último ano, uso de SABA ≥ 3 frascos/ano, técnica ruim, baixa adesão ao corticoide, tabagismo, obesidade, eosinofilia, VEF1 baixo, gestação [C].", "Avalie sempre: técnica (peça para o paciente mostrar), adesão (retirada na farmácia), gatilhos, rinite, DRGE, ansiedade."]},
     {perola: {t: "SABA demais é marcador de morte", x: "O uso de 3 ou mais frascos de salbutamol por ano associa-se a mais crises graves, e ≥ 12 por ano a maior mortalidade (GINA) [C]. Quem 'só usa a bombinha de alívio' está sem tratamento anti-inflamatório.", d: "identificar e tratar esse paciente previne internação e morte.", l: "C"}},
     {ref: ["gina"]}
   ]},
   {t: "Tratamento por etapas", b: [
     {fluxo: [
       {t: "Etapas 1–2 (sintomas < 4–5 dias/semana)", ramos: [
         {r: "Trilha 1 (preferida)", n: [{t: "Budesonida-formoterol só quando precisar", k: "ok", s: "compra; cobertura pelo PCDT nessas etapas não confirmada"}]},
         {r: "Trilha 2 (REMUME)", n: [{t: "Beclometasona dose baixa diária + salbutamol de alívio", s: "exige adesão diária ao corticoide"}]}
       ]},
       {t: "Etapa 3: MART dose baixa", k: "ok", s: "formoterol + budesonida 6/200 manutenção e alívio – CEAF (PCDT Asma 2026)"},
       {t: "Etapa 4: MART dose média", k: "warn", s: "CEAF; revisar técnica, adesão e comorbidades antes"},
       {t: "Etapa 5: encaminhar", k: "stop", s: "LAMA, fenotipagem, biológicos (mepolizumabe, omalizumabe – CEAF)"}
     ], nota: "GINA [C] e PCDT Asma 2026 (MART nas etapas 3–4) [F]."},
     {tab: {h: ["Corticoide inalado (adulto, mcg/dia)", "Dose baixa", "Média", "Alta"], r: [["Beclometasona aerossol, partícula padrão", "200–500", "> 500–1.000", "> 1.000"], ["Beclometasona aerossol, partícula extrafina", "100–200", "> 200–400", "> 400"], ["Budesonida (pó/DPI)", "200–400", "> 400–800", "> 800"]]}, nota: "Faixas da GINA [C]. A REMUME tem beclometasona aerossol 50 e 200 mcg/jato: conferir na bula se a formulação é de partícula padrão ou extrafina [NV]."},
     {perola: {t: "Budesonida-formoterol conforme necessidade bate o SABA isolado", x: "Nos ECR SYGMA 1, SYGMA 2 e Novel START, budesonida-formoterol usado só quando necessário reduziu as crises graves em relação ao SABA isolado e foi semelhante ao corticoide diário, com menos corticoide total [C].", d: "menos crises graves, idas ao pronto-socorro e corticoide oral.", l: "C"}},
     {perola: {t: "Fenoterol: evitar", x: "O fenoterol esteve associado a excesso de mortalidade por asma em séries históricas (Nova Zelândia, anos 1970–80). Prefira salbutamol ou formoterol [C].", d: "segurança.", l: "C"}},
     {ref: ["pcdt_asma2026", "gina", "sygma", "rename", "remume"]}
   ]},
   {t: "Técnica inalatória, plano de ação e crise", b: [
     {ul: ["**Aerossol com espaçador** em todas as idades quando possível; enxaguar a boca após o corticoide.", "**Pó seco (DPI):** inspiração rápida e profunda; não serve para quem não gera fluxo (crise, idoso frágil).", "**MART:** 1 inalação extra quando tiver sintomas; total máximo de 12 inalações/dia de formoterol 6 mcg; se precisar de mais de 8 por dia por 2–3 dias, procurar a unidade [C].", "**Plano de ação escrito:** quando aumentar, quando usar prednisona (conforme combinado) e quando procurar urgência."]},
     {p: "Linhas de cuidado do MS: [[Portal da asma – APS|https://linhasdecuidado.saude.gov.br/portal/asma/unidade-de-atencao-primaria/]] · [[Técnica inalatória|https://linhasdecuidado.saude.gov.br/portal/asma/tecnica-inalatoria/]]"},
     {ref: ["gina"]}
   ]},
   {t: "Comorbidades, redução de etapa e encaminhamento", b: [
     {ul: ["**Rinite:** corticoide nasal (budesonida nasal na REMUME) melhora o controle da asma [C].", "**Tabagismo, obesidade, DRGE, ansiedade:** tratar.", "**Vacinas:** influenza anual, COVID-19.", "**Reduzir etapa** após 3 meses controlado: diminuir o corticoide em 25–50% [C]; nunca suspender totalmente o corticoide inalado.", "**Encaminhar:** não controlada na etapa 4 com técnica e adesão adequadas, suspeita de outro diagnóstico, asma ocupacional, ≥ 2 crises com corticoide oral no ano."]},
     {trio: {ideal: "Budesonida-formoterol como alívio (etapas 1–2) e como manutenção e alívio – MART (etapas 3–4).", sus: "MART pelo CEAF nas etapas 3–4 (PCDT 2026); na REMUME, beclometasona + salbutamol (trilha 2).", ponte: "Etapas 3–4: abrir LME no CEAF. Etapas 1–2: trilha 2 com beclometasona diária é aceitável se houver adesão; a compra de budesonida-formoterol é a opção de menor risco de crise."}},
     {ref: ["pcdt_asma2026", "gina", "remume"]}
   ]}
  ]}};

CR_PATCH["cr-dpoc"] = {sistema: "Asma e DPOC",
  S: "Paciente, ___ anos, DPOC (VEF1 ___% do previsto; VEF1/CVF ___ pós-BD em ___). Tabagismo ___ maços-ano (atual ___). Exposição a fogão a lenha/biomassa ou ocupacional ___.\nDispneia mMRC ___ | CAT ___. Exacerbações no último ano: moderadas ___ | com internação ___.\nMedicações e técnica inalatória ___. Oxigênio domiciliar ___.",
  A: "DPOC grupo ___ (A / B / E – PCDT 2025), obstrução GOLD ___, mMRC ___, exacerbações ___. Eosinófilos ___. Tabagismo ___.",
  P: "- Cessação do tabagismo (prioridade; TRN e bupropiona na REMUME).\n- Grupo A: SABA ou SAMA (LAMA ou LABA se sintomas frequentes). Grupos B e E: LAMA + LABA (umeclidínio + vilanterol pelo CEAF; tiotrópio + olodaterol se GOLD 3–4 exacerbador).\n- Corticoide inalado só se eosinófilos ≥ 300 ou asma associada; exacerbações persistentes → terapia tripla.\n- Técnica inalatória, plano para exacerbação, reabilitação/atividade física, vacinas.\n- Oxigenoterapia se SpO₂ ≤ 88% em repouso, estável.",
  rx: [
    {trilha: "ambos", titulo: "LAMA + LABA (CEAF – PCDT DPOC 2025)", texto: "USO INALATÓRIO\n1. Umeclidínio + vilanterol 62,5/25 mcg (pó inalatório) ______ 1 inalador\n   Inalar 1 dose 1 vez ao dia.\n   (GOLD 3–4 exacerbador ou dificuldade com pó seco: tiotrópio + olodaterol 2,5/2,5 mcg névoa, 2 jatos 1 vez ao dia.)", dose: "NV", nota: "PCDT DPOC 2025: umeclidínio + vilanterol para sintomáticos dos grupos B ou E, independentemente do grau de obstrução; tiotrópio + olodaterol para GOLD 3–4 com perfil exacerbador. Solicitar pelo CEAF com LME."},
    {trilha: "ambos", titulo: "Terapia tripla (CEAF – GOLD 3–4 exacerbador)", texto: "USO INALATÓRIO\n1. Furoato de fluticasona + umeclidínio + vilanterol 100/62,5/25 mcg ______ 1 inalador\n   Inalar 1 dose 1 vez ao dia.\n   (Alternativa: beclometasona + formoterol + glicopirrônio 100/6/12,5 mcg aerossol, 2 jatos de 12/12 horas.)", dose: "NV", nota: "Indicar se exacerbações persistem com LAMA + LABA e eosinófilos ≥ 300 (ou asma associada). Evitar ICS se eosinófilos < 100 ou pneumonias de repetição."},
    {trilha: "sus", titulo: "REMUME: ipratrópio + salbutamol (grupo A ou enquanto aguarda o CEAF)", texto: "USO INALATÓRIO\n1. Ipratrópio 20 mcg/dose aerossol ______ 1 frasco\n   Inalar 2 jatos de 6/6 a 8/8 horas com espaçador.\n2. Salbutamol 100 mcg/dose aerossol ______ 1 frasco\n   Inalar 2 jatos se falta de ar, até de 4/4 horas.", dose: "NV", nota: "Broncodilatadores de curta ação; também na Farmácia Popular (ipratrópio, beclometasona, salbutamol – PCDT 2025)."},
    {trilha: "ambos", titulo: "Cessação do tabagismo (REMUME)", texto: "USO TRANSDÉRMICO\n1. Nicotina 21 mg/24 h adesivo ______ 28 adesivos\n   Aplicar 1 adesivo ao acordar, trocando o local diariamente (reduzir para 14 e 7 mg conforme o protocolo).\nUSO ORAL\n2. Nicotina 2 mg goma ou 4 mg pastilha ______ conforme o protocolo\n   Usar quando tiver fissura.\n3. Bupropiona 150 mg ______ 60 comprimidos\n   1 comprimido pela manhã por 3 dias; depois 1 comprimido de 12/12 horas. Parar de fumar entre o 8º e o 14º dia.", dose: "NV", nota: "TRN e bupropiona estão na REMUME (programa de tabagismo). Ajustar a dose de nicotina ao Fagerström e ao número de cigarros. Bupropiona: contraindicada com convulsão, bulimia/anorexia e uso de IMAO."}
  ],
  idealsus: {ideal: "LAMA + LABA para grupos B e E (GOLD 2025), tripla só com eosinófilos ≥ 300 e exacerbações, cessação do tabagismo, reabilitação e vacinas.", sus: "PCDT DPOC 2025: umeclidínio + vilanterol (B e E), tiotrópio + olodaterol e triplas (GOLD 3–4 exacerbador) pelo CEAF; na REMUME, ipratrópio, salbutamol, beclometasona, TRN e bupropiona.", ponte: "O PCDT 2025 aproximou o SUS da GOLD: grupo B sintomático já tem LAMA + LABA pelo CEAF. Abra a LME com espirometria, mMRC/CAT e histórico de exacerbações."},
  sus: {nacional: "PCDT DPOC 2025 (CEAF): umeclidínio + vilanterol; tiotrópio + olodaterol; fluticasona + umeclidínio + vilanterol; beclometasona + formoterol + glicopirrônio; formoterol, budesonida, formoterol + budesonida, salmeterol. Básico/Farmácia Popular: ipratrópio, salbutamol, beclometasona. Estratégico: nicotina (adesivo, goma, pastilha).", betim: "REMUME Betim: ipratrópio (aerossol e solução), salbutamol (aerossol e solução), beclometasona, prednisona, nicotina (adesivos 7/14/21 mg, goma 2 mg, pastilha 4 mg) e bupropiona 150 mg."},
  evid: {resumo: "LAMA + LABA melhoram sintomas e reduzem exacerbações em relação à monoterapia; o corticoide inalado beneficia sobretudo quem tem eosinófilos ≥ 300 e exacerba. Cessação do tabagismo e oxigenoterapia na hipoxemia grave são as intervenções que mudam a sobrevida; reabilitação reduz readmissões.", certeza: "Alta", fontes: ["pcdt_dpoc2025", "gold", "nott", "rename", "remume"]},
  mudancas: ["PCDT atualizado de 2021 (grupos ABCD) para 2025 (grupos A/B/E; umeclidínio + vilanterol para o grupo B).", "Prescrição do Notion (tiotrópio isolado; tripla) reorganizada pelas trilhas e pelos critérios do PCDT 2025.", "Bloco de cessação do tabagismo com TRN e bupropiona da REMUME."],
  nv: ["Versão final do PCDT DPOC 2025 (conteúdo conferido na consulta pública).", "Doses dos inaladores: conferir bula.", "Fluxo do CEAF (LME) e do programa de tabagismo em Betim."],
  guia: {
  resumo: "Na DPOC, o que muda **sobrevida** é **parar de fumar** e **oxigênio domiciliar na hipoxemia grave**; o que reduz **exacerbações** é **LAMA + LABA** (grupos B e E) e, só com eosinófilos ≥ 300 ou asma, **corticoide inalado** na terapia tripla. O PCDT 2025 trouxe os grupos A/B/E e LAMA + LABA para o grupo B.",
  calcs: ["sc:mmrc", "sc:fagerstrom"],
  secoes: [
   {t: "Diagnóstico", b: [
     {ul: ["**Espirometria pós-BD:** VEF1/CVF < 0,70 confirma; se entre 0,60 e 0,80, repetir (PCDT 2025) [F].", "Sem espirometria disponível, o PCDT admite estratégias alternativas de apoio ao diagnóstico clínico – mas espirometria segue necessária para o CEAF [F].", "**Gravidade da obstrução (GOLD):** 1 ≥ 80%; 2: 50–79%; 3: 30–49%; 4: < 30% do VEF1 previsto [C].", "**Exposições:** tabaco (maços-ano), **fogão a lenha**/biomassa, poeira ocupacional.", "**Alfa-1-antitripsina:** suspeitar se < 45 anos, enfisema de bases ou pouca carga tabágica → pneumologia [F]."]},
     {ref: ["pcdt_dpoc2025", "gold"]}
   ]},
   {t: "Classificação A/B/E (PCDT 2025)", b: [
     {tab: {h: ["Grupo", "Sintomas", "Exacerbações nos últimos 12 meses"], r: [["A (baixo risco)", "Pouco sintomático: mMRC 0–1 e/ou CAT < 10", "0 ou 1 moderada (sem internação)"], ["B (baixo risco)", "Muito sintomático: mMRC ≥ 2 e/ou CAT ≥ 10", "0 ou 1 moderada (sem internação)"], ["E (alto risco)", "Qualquer", "≥ 1 com internação ou ≥ 2 moderadas"]]}, nota: "Quadro 4 do PCDT DPOC 2025 [F]."},
     {calc: "sc:mmrc"},
     {ref: ["pcdt_dpoc2025"]}
   ]},
   {t: "Tratamento farmacológico", b: [
     {fluxo: [
       {t: "Grupo", ramos: [
         {r: "A", n: [{t: "SAMA ou SABA para alívio", k: "ok"}, {t: "LAMA ou LABA se sintomas frequentes"}]},
         {r: "B", n: [{t: "LAMA + LABA contínuo", k: "ok", s: "umeclidínio + vilanterol (CEAF)"}]},
         {r: "E", n: [{t: "LAMA + LABA contínuo", k: "warn", s: "umeclidínio + vilanterol; tiotrópio + olodaterol se GOLD 3–4"}, {t: "Eosinófilos ≥ 300 ou asma?", ramos: [
           {r: "Sim", n: [{t: "Terapia tripla (LAMA + LABA + ICS)", k: "stop"}]},
           {r: "Não", n: [{t: "Exacerbador sem eosinofilia e sem tabagismo ativo: considerar azitromicina (até 1 ano)"}]}
         ]}]}
       ]},
       {t: "Todos: SABA/SAMA para alívio; técnica inalatória em toda consulta", k: "ok"}
     ], nota: "Quadro 5 e texto do PCDT DPOC 2025 [F]."},
     {tab: {h: ["Esquema", "Dose usual", "Acesso"], r: [["Umeclidínio + vilanterol 62,5/25 mcg (pó)", "1 inalação 1x/dia", "CEAF – B ou E, qualquer obstrução"], ["Tiotrópio + olodaterol 2,5/2,5 mcg (névoa)", "2 jatos 1x/dia", "CEAF – GOLD 3–4 exacerbador; VEF1 < 50% com dificuldade no pó seco"], ["Fluticasona + umeclidínio + vilanterol 100/62,5/25", "1 inalação 1x/dia", "CEAF – GOLD 3–4 exacerbador"], ["Beclometasona + formoterol + glicopirrônio 100/6/12,5", "2 jatos 2x/dia", "CEAF – GOLD 3–4 exacerbador"], ["Ipratrópio 20 mcg; salbutamol 100 mcg", "2 jatos até 6/6 h; 2 jatos se necessário", "REMUME e Farmácia Popular"]]}, nota: "Apresentações do PCDT DPOC 2025 [F]; doses usuais [C] – conferir bula."},
     {perola: {t: "Corticoide inalado não é para todo DPOC", x: "O PCDT 2025 não recomenda LABA + ICS de rotina; se o ICS for indicado, preferir a tripla, sobretudo com eosinófilos ≥ 300. Evitar ICS com eosinófilos < 100 ou história de pneumonia [F].", d: "evita pneumonias sem ganho em exacerbação.", l: "F"}},
     {perola: {t: "A névoa suave ajuda quem não consegue inalar o pó", x: "Para VEF1 < 50% com dificuldade no inalador de pó seco, o PCDT recomenda tiotrópio + olodaterol em névoa suave [F]. Peça para o paciente mostrar como usa.", d: "o broncodilatador só funciona se chegar ao pulmão.", l: "F"}},
     {ref: ["pcdt_dpoc2025", "gold", "remume"]}
   ]},
   {t: "O que muda sobrevida", b: [
     {perola: {t: "Parar de fumar é o tratamento mais eficaz da DPOC", x: "A cessação é a única intervenção que reduz o declínio do VEF1 (Lung Health Study) e reduz a mortalidade; o tabagismo também reduz a efetividade do corticoide inalado (PCDT) [C]. TRN (adesivo, goma, pastilha) e bupropiona estão na REMUME [F].", d: "menor declínio funcional e menor mortalidade.", l: "C"}},
     {calc: "sc:fagerstrom"},
     {perola: {t: "Oxigênio por ≥ 15 h/dia na hipoxemia grave", x: "Em DPOC estável com PaO₂ ≤ 55 mmHg ou SpO₂ ≤ 88% em repouso (ou PaO₂ 56–59 com cor pulmonale ou policitemia), a oxigenoterapia domiciliar prolongada reduziu a mortalidade (NOTT, MRC) [C].", d: "aumento de sobrevida; checar SpO₂ em repouso em toda consulta.", l: "C"}},
     {ul: ["**Reabilitação pulmonar** e atividade física: melhoram dispneia e qualidade de vida; após exacerbação, reduzem readmissões [C].", "**Vacinas:** influenza anual, pneumocócica (CRIE), COVID-19.", "**Nutrição:** IMC baixo piora o prognóstico; avaliar perda de peso.", "**Comorbidades:** DCV, ansiedade/depressão, osteoporose (corticoide), câncer de pulmão."]},
     {ref: ["pcdt_dpoc2025", "nott", "remume"]}
   ]},
   {t: "Exacerbação e seguimento", b: [
     {ul: ["**Plano escrito:** aumentar o broncodilatador de curta ação; prednisona 40 mg por 5 dias se piora importante; antibiótico se escarro purulento [C].", "**Internação:** resposta ruim ao tratamento ambulatorial, piora importante da dispneia, SpO₂ baixa, confusão, comorbidade descompensada (PCDT) [F].", "**Após exacerbação:** rever em 2–4 semanas; checar técnica, tabagismo, vacinas e escalonar.", "**Encaminhar:** grupo E (PCDT recomenda acompanhamento especializado), hipoxemia, suspeita de alfa-1, VEF1 muito baixo, avaliação para cirurgia redutora."]},
     {trio: {ideal: "LAMA + LABA para grupos B e E (GOLD 2025), tripla só com eosinófilos ≥ 300 e exacerbações, cessação do tabagismo, reabilitação e vacinas.", sus: "PCDT 2025 pelo CEAF: umeclidínio + vilanterol (B e E), tiotrópio + olodaterol e triplas (GOLD 3–4 exacerbador); REMUME: ipratrópio, salbutamol, TRN e bupropiona.", ponte: "Abra a LME com espirometria, mMRC/CAT e exacerbações. Enquanto aguarda, ipratrópio regular + salbutamol de alívio; cessação do tabagismo desde a 1ª consulta."}},
     {ref: ["pcdt_dpoc2025", "gold"]}
   ]}
  ]}};

CR_PATCH["cr-pos-avc"] = {sistema: "AVC", guia: {
  resumo: "Depois do AVC, o que reduz recorrência é **prevenção secundária pelo mecanismo** (antiagregante; anticoagulante se FA), **estatina de alta intensidade com LDL < 50**, **PA < 130/80** e cessar o tabaco. O que devolve função é a **reabilitação**; o que mais se perde na APS é **depressão, disfagia e sobrecarga do cuidador**.",
  calcs: ["sc:rankin", "sc:barthel", "sc:gds15", "sc:cha2ds2va", "sc:hasbled", "lipides"],
  secoes: [
   {t: "Objetivos na APS", b: [
     {ol: ["**Prevenção secundária** – evitar novo AVC ou AIT.", "**Controle de fatores de risco** – HAS, DM, dislipidemia, FA, tabagismo, sedentarismo.", "**Reabilitação e manutenção funcional** – motor, fala, cognição, mobilidade, AVD.", "**Complicações** – depressão, disfagia, epilepsia, dor no ombro, quedas, TVP.", "**Coordenação do cuidado** – neurologia, fisioterapia, fonoaudiologia, terapia ocupacional.", "**Apoio psicossocial** – família, cuidador, adesão."]},
     {ref: ["aha_avc2021"]}
   ]},
   {t: "Prevenção secundária pelo mecanismo", b: [
     {fluxo: [
       {t: "Tipo de AVC", ramos: [
         {r: "Hemorrágico", n: [{t: "Sem antitrombótico ou estatina de alta intensidade sem o neurologista", k: "stop"}, {t: "Controle rigoroso da PA"}]},
         {r: "Isquêmico ou AIT", n: [{t: "FA (ECG, Holter)?", ramos: [
           {r: "Sim", n: [{t: "Anticoagulação oral", k: "warn", s: "varfarina INR 2–3 (REMUME) ou DOAC (compra)"}]},
           {r: "Não", n: [{t: "Antiagregante: AAS 100 mg ou clopidogrel 75 mg", k: "ok"}, {t: "Saiu com AAS + clopidogrel? Conferir a data de parar (21–90 dias)", k: "warn"}]}
         ]}]}
       ]},
       {t: "Todos: estatina (LDL < 50), PA < 130/80, DM, tabaco", k: "ok"}
     ], nota: "AHA/ASA 2021 e SBC 2025 [C/F]."},
     {perola: {t: "Dupla antiagregação tem data para acabar", x: "Após AVC menor ou AIT de alto risco, AAS + clopidogrel por 21–90 dias reduz recorrência (CHANCE, POINT); prolongar além disso aumenta sangramento sem benefício adicional [C]. Muitos pacientes chegam à APS sem a data de suspensão.", d: "evita hemorragia grave por dupla antiagregação esquecida.", l: "C"}},
     {calc: "sc:cha2ds2va"},
     {calc: "sc:hasbled"},
     {perola: {t: "HAS-BLED alto não contraindica anticoagulação", x: "O escore serve para corrigir fatores modificáveis (PA, AINE, álcool, INR lábil) e seguir de perto. Na FA com AVC prévio, o benefício da anticoagulação supera o risco de sangramento na grande maioria [C]. ESC 2024: CHA₂DS₂-VA ≥ 2 = anticoagular (classe I) [F].", d: "evita AVC cardioembólico, o de maior mortalidade e sequela.", l: "F"}},
     {perola: {t: "DOAC × varfarina", x: "Os DOAC reduziram hemorragia intracraniana e mortalidade em relação à varfarina (metanálise de ECR) [C]. A varfarina da REMUME é aceitável se o INR ficar no alvo na maior parte do tempo (> 65–70%); com INR lábil ou difícil acesso ao controle, discutir DOAC comprado.", d: "menos sangramento cerebral.", l: "C"}},
     {ref: ["aha_avc2021", "dapt_avc", "esc_fa2024", "doac_ma", "remume"]}
   ]},
   {t: "Fatores de risco", b: [
     {ul: ["**LDL < 50 mg/dL** e redução ≥ 50% (AVC aterotrombótico = muito alto risco, SBC 2025) [F]: em geral exige atorvastatina 40–80 mg (compra ou CEAF).", "**PA < 130/80** [F], com cuidado na hipotensão ortostática.", "**DM:** metas individualizadas; iSGLT2/GLP-1 se DCV.", "**Tabaco:** cessação com apoio farmacológico.", "**Apneia do sono:** comum após AVC; investigar ronco e sonolência [C]."]},
     {calc: "lipides"},
     {ref: ["dbdisl2025", "dbha2025"]}
   ]},
   {t: "Reabilitação e funcionalidade", b: [
     {calc: "sc:rankin"},
     {calc: "sc:barthel"},
     {tab: {h: ["Ashworth modificada", "Tônus"], r: [["0", "Normal"], ["1", "Leve aumento, resistência no fim do movimento"], ["1+", "Leve aumento, resistência em menos da metade do arco"], ["2", "Aumento moderado na maior parte do arco"], ["3", "Aumento considerável; movimento passivo difícil"], ["4", "Rigidez em flexão ou extensão"]]}, nota: "Escala de Ashworth modificada (Bohannon e Smith, 1987) [C]. Espasticidade incapacitante: toxina botulínica A (CEAF/especialista)."},
     {ul: ["Fisioterapia, fonoaudiologia e terapia ocupacional (eMulti, CER, conforme a rede).", "**Dor no ombro hemiplégico:** posicionamento, apoio do membro, analgesia, fisioterapia; evitar tracionar o braço [C].", "**Prevenção de quedas** e adaptação do domicílio (barras, retirar tapetes).", "**Cognição:** MEEM ou MoCA conforme escolaridade (pontos de corte variam entre estudos brasileiros) [C]."]},
     {perola: {t: "Fluoxetina não acelera a recuperação motora", x: "Três grandes ECR (FOCUS, AFFINITY, EFFECTS) não mostraram melhora funcional com fluoxetina após AVC e houve mais fraturas [C]. Use antidepressivo para tratar depressão, não para reabilitação.", d: "evita efeito adverso sem benefício.", l: "C"}},
     {ref: ["avc_flx"]}
   ]},
   {t: "Complicações a rastrear", b: [
     {calc: "sc:gds15"},
     {ul: ["**Depressão pós-AVC:** frequente (cerca de 1 em 3) e piora a reabilitação; GDS-15 ou PHQ-9 [C].", "**Disfagia:** tosse ou engasgo ao comer, voz molhada, pneumonias → fonoaudiologia; consistência adaptada [C].", "**Epilepsia pós-AVC**, incontinência, úlceras de pressão, TVP, constipação.", "**Retorno ao trabalho e direção:** orientar e encaminhar conforme o caso."]},
     {ref: ["aha_avc2021", "gds_br"]}
   ]},
   {t: "Cuidador e rede", b: [
     {ul: ["Pergunte ao cuidador como ele está: sobrecarga é comum e leva a institucionalização e piora do paciente.", "Visita domiciliar periódica; plano de cuidado compartilhado com a eMulti.", "Novo déficit neurológico súbito → **SAMU 192** (janela de trombólise/trombectomia)."]},
     {trio: {ideal: "Antiagregante (ou DOAC se FA), atorvastatina de alta intensidade com LDL < 50, PA < 130/80 e reabilitação multiprofissional.", sus: "AAS, clopidogrel, sinvastatina 20 mg e varfarina na REMUME; atorvastatina pelo CEAF; DOAC não localizado no SUS.", ponte: "Na FA, varfarina com INR bem controlado é aceitável; com INR lábil ou alto risco de sangramento, discutir DOAC comprado. Para LDL < 50, atorvastatina comprada ou pelo CEAF."}},
     {ref: ["aha_avc2021", "remume"]}
   ]}
  ]}};
