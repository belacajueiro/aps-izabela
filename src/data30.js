// ───────────── data30.js – Demanda: guias das queixas mais comuns + resolução de pendências de dose em itens de risco alto (11/10/2026)
Object.assign(FONTES, {
  fhemig_diarreia: {s: "FHEMIG/HIJPII – diarreia aguda < 5 anos", t: "Hospital Infantil João Paulo II (FHEMIG). Protocolo de diarreia aguda em menores de 5 anos (revisado 02/2019; fluxograma dez/2019): escala clínica de desidratação 0–8 (aparência, olhos, mucosas, lágrimas); planos A/B/C; ondansetrona VO 0,15 mg/kg se intolerância oral (2C); zinco em desnutridos > 6 meses (2B); probióticos e racecadotrila não recomendados no serviço; antibiótico só em disenteria com critérios – ceftriaxona 50–80 mg/kg/dia (máx. 2,5 g), azitromicina 12 mg/kg no D1 + 6 mg/kg D2–D5 (máx. 500/250 mg), alternativa ciprofloxacino 10–15 mg/kg/dose 12/12 h por 3 dias (máx. 1 g/dia) (protocolo estadual de MG; PDF no Drive da usuária).", f: "F", url: ""},
  fhemig_amigdalite: {s: "FHEMIG/HIJPII – amigdalite aguda", t: "Hospital Infantil João Paulo II (FHEMIG). Protocolo de amigdalite (revisado 03/2021), ≥ 3 anos: sintomas virais excluem; McIsaac 0–1 sem exames e sem antibiótico; 2–3 observação vigilante 48–72 h com receita de backup ou teste rápido; 4–5 antibiótico empírico ou teste rápido; amoxicilina 50 mg/kg 1×/dia (máx. 1.000 mg) ou 25 mg/kg 12/12 h (máx. 500 mg) por 10 dias; penicilina benzatina 1,2 milhão UI IM se > 27 kg; alergia: cefalexina 20 mg/kg 12/12 h (máx. 500 mg) ou clindamicina 7 mg/kg 8/8 h (máx. 300 mg) por 10 dias; afastar da escola por 24 h após início do antibiótico (protocolo estadual de MG; PDF no Drive da usuária).", f: "F", url: ""},
  fhemig_dengue: {s: "FHEMIG/HIJPII – dengue na criança (2024)", t: "Hospital Infantil João Paulo II (FHEMIG). Protocolo de manejo da dengue na criança, versão 2024 (fontes PAHO 2022, WHO 2016, CDC 2021, MS 2024): grupos A–D; sinais de alarme (queda isolada de plaquetas não é alarme); soro de reidratação por Holliday-Segar, 1/3 SRO e 2/3 líquidos; grupo C: SF/RL 10 mL/kg em 1 h, até 3×; grupo D: 20 mL/kg em 20 min até 3× (protocolo estadual de MG; PDF no Drive da usuária).", f: "F", url: ""},
  fhemig_eme: {s: "FHEMIG/HIJPII – estado de mal epiléptico", t: "Hospital Infantil João Paulo II (FHEMIG). Protocolo de estado de mal epiléptico (revisão 12/2019): crise > 5 min; midazolam 0,2 mg/kg EV, IM, intranasal ou bucal (máx. 5 mg), repetir se necessário; fenitoína 15 mg/kg EV (máx. 750 mg); fenobarbital 10 mg/kg (> 1 mês) ou 20 mg/kg (RN); glicemia < 60 → SGH 10% 2–4 mL/kg (protocolo pediátrico estadual de MG; PDF no Drive da usuária).", f: "F", url: ""},
  fhemig_anafilaxia: {s: "FHEMIG/HIJPII – anafilaxia em crianças (2019)", t: "Hospital Infantil João Paulo II (FHEMIG). Anafilaxia em crianças e adolescentes (2019, GRADE): epinefrina IM na coxa 0,01 mL/kg da solução 1 mg/mL (máx. 0,5 mL), repetir a cada 5–15 min (forte); anti-histamínico (2ª geração) só para sintomas cutâneos, nunca antes da epinefrina; observação de 4–6 h; 12–24 h se sibilância, comprometimento cardiovascular, > 1 dose de epinefrina, > 90 min até a chegada ou gatilho desconhecido; kit com epinefrina autoinjetável e treinamento na alta (protocolo estadual de MG; PDF no Drive da usuária).", f: "F", url: ""},
  pcdt_asma2023: {s: "PCDT Asma 2023", t: "Ministério da Saúde. PCDT da Asma – Portaria Conjunta SAES/SECTICS nº 32, de 20/12/2023: crise – salbutamol 100–200 mcg a cada 20 min (1–2 doses); moderada/grave 4 jatos a cada 10 min ou 8 a cada 20 min por até 4 h; criança 22,5–30 mcg/kg/dose (até 9 jatos com espaçador) ou 0,15 mg/kg nebulizado (máx. 5 mg); prednisona 40–60 mg/dia (adulto) e prednisolona 1–2 mg/kg/dia (criança; ≥ 40 kg = adulto), sem desmame até 7 dias; CI doses (≥ 12 anos): beclometasona 200–500 baixa, > 500–1.000 média, > 1.000 alta mcg/dia; nenhum paciente deve usar só SABA; formoterol máximo 72 mcg/dia (adulto) e 48 mcg/dia (> 6 anos) na estratégia de manutenção e resgate (norma).", f: "F", url: "https://www.gov.br/saude/pt-br/assuntos/pcdt/arquivos/2023/portaria-conjunta-saes-sectics-no-32-pcdt-asma.pdf"},
  sbce_profilaxia2022: {s: "SBCe 2022 – profilaxia da migrânea", t: "Consenso da Sociedade Brasileira de Cefaleia para o tratamento profilático da migrânea episódica – parte I. Arq Neuropsiquiatr 2022;80(8):845-861 (DOI 10.1055/s-0042-1756441): indicar profilaxia com ≥ 3 crises/mês por ≥ 3 meses, crises muito incapacitantes, falha do tratamento agudo ou auras especiais; dose baixa e titulação lenta, avaliar por 2–3 meses, manter ≥ 6 meses; propranolol 40–240 mg/dia (A), amitriptilina 10–150 mg/dia (A), topiramato 50–200 mg/dia (A), valproato 250–1.000 mg/dia (A) (consenso de sociedade).", f: "F", url: "https://thieme-connect.de/products/ejournals/html/10.1055/s-0042-1756441"}
});
const NG59_TXT = "NICE NG59. Low back pain and sciatica in over 16s (2016; ciática atualizada em 2020): estratificação (STarT Back); sem imagem de rotina; exercício; terapia manual ou TCC só junto com exercício; AINE na menor dose e menor tempo; não oferecer paracetamol isolado; opioide não de rotina na aguda e não na crônica; não oferecer ISRS/IRSN/tricíclicos nem gabapentinoides/antiepilépticos na lombalgia; na ciática, não oferecer gabapentinoides, corticoide oral ou benzodiazepínicos; epidural na ciática aguda grave; considerar descompressão se tratamento conservador falhar (diretriz; recomendações conferidas em 10/2026).";
Object.assign(FONTES.nice_lombar, {s: "NICE NG59 – lombalgia e ciática", t: NG59_TXT, f: "F", url: "https://www.nice.org.uk/guidance/ng59/chapter/Recommendation"});
Object.assign(FONTES.nice_ciatica, {f: "F", url: "https://www.nice.org.uk/guidance/ng59/chapter/Recommendation"});

const R30 = {
  rx: (c, i, patch) => { if (c.rx && c.rx[i]) Object.assign(c.rx[i], patch); },
  dropNV: (c, re) => { c.nv = (c.nv || []).filter(x => !re.test(x)); },
  muda: (c, t) => { c.mudancas = c.mudancas || []; c.mudancas.push("Revisão 11/10/2026: " + t); },
  fonte: (c, ...ks) => { c.evid.fontes = c.evid.fontes || []; ks.forEach(k => { if (!c.evid.fontes.includes(k)) c.evid.fontes.push(k); }); }
};

const REV30 = {
  // ── pendências de dose (risco alto)
  "asma-crise": c => {
    R30.rx(c, 0, {texto: "USO INALATÓRIO\n1. Salbutamol 100 mcg/dose aerossol com espaçador\n   Leve: 1 a 2 jatos a cada 20 minutos (1 a 2 doses).\n   Moderada/grave: 4 jatos a cada 10 minutos ou 8 jatos a cada 20 minutos, por até 4 horas; depois a cada 1 a 4 horas conforme resposta.\n\nUSO ORAL\n2. Prednisona 20 mg – 2 a 3 comprimidos (40 a 60 mg) agora.", dose: "F", nota: "PCDT Asma 2023 [F]. Sem espaçador: nebulização 2,5–5 mg a cada 20 min por 3 doses [F]."});
    R30.rx(c, 1, {texto: "USO ORAL\n1. Prednisona 20 mg ______ 14 comprimidos\n   Tomar 2 comprimidos (40 mg) pela manhã por 5 a 7 dias (não precisa desmame até 7 dias).\n\nUSO INALATÓRIO\n2. Beclometasona 200 mcg/dose aerossol ______ 1 frasco\n   Fazer 1 jato de 12/12h com espaçador (400 mcg/dia = dose baixa), todos os dias. Enxaguar a boca após.\n3. Salbutamol 100 mcg/dose aerossol ______ 1 frasco\n   Fazer 2 a 4 jatos com espaçador se falta de ar ou chiado, até de 4/4h.", dose: "F", nota: "PCDT Asma 2023 [F]: prednisona 40–60 mg/dia; beclometasona 200–500 mcg/dia = dose baixa (≥ 12 anos); ninguém com asma deve ficar só com salbutamol. Salbutamol e beclometasona: REMUME e grátis na Farmácia Popular [F]."});
    R30.rx(c, 2, {dose: "F", nota: "PCDT 2023 [F]: manutenção e resgate com budesonida+formoterol a partir da etapa III; formoterol máximo 72 mcg/dia no adulto (12 inalações de 6 mcg). CEAF conforme PCDT; fora disso, compra. Não associar a salbutamol de rotina."});
    R30.dropNV(c, /Doses de prednisona e beclometasona/); R30.fonte(c, "pcdt_asma2023");
    R30.muda(c, "doses da crise e da alta conferidas no PCDT Asma 2023.");
  },
  "asma-crianca": c => {
    R30.rx(c, 0, {texto: "USO INALATÓRIO (com espaçador; máscara se < 4 anos)\n1. Salbutamol 100 mcg/jato – 22,5 a 30 mcg/kg por dose (≈ 1 jato a cada 3–4 kg; máximo 9 jatos) a cada 20 min na 1ª hora; depois conforme reavaliação.\n   Nebulização (se sem espaçador): 0,15 mg/kg (máx. 5 mg) a cada 20 min.\n\nUSO ORAL\n2. Prednisolona 3 mg/mL – 1 a 2 mg/kg 1 vez ao dia por 3 a 5 dias (≥ 40 kg: dose de adulto, 40–60 mg).", dose: "F", nota: "PCDT Asma 2023 [F]. Ipratrópio na crise moderada/grave: dose não conferida nesta revisão [NV]. Use a calculadora pediátrica para volumes."});
    R30.dropNV(c, /^Doses: conferir bula e GINA/); c.nv.push("Doses de corticoide inalatório por idade em < 12 anos: o PCDT 2023 traz o esquema < 5 anos só em figura (não lida).");
    R30.fonte(c, "pcdt_asma2023"); R30.muda(c, "doses de salbutamol e prednisolona na crise conferidas no PCDT Asma 2023.");
  },
  "diarreia-crianca": c => {
    R30.rx(c, 4, {texto: "USO ORAL\n1. Ondansetrona – 0,15 mg/kg VO, dose única na unidade antes de recomeçar o SRO, se vômitos impedirem a hidratação oral.\n   (Evitar a via EV para esse fim.)", dose: "F", nota: "Protocolo FHEMIG/HIJPII (2C) [F]; reduz vômitos e necessidade de hidratação venosa (Cochrane) [C]. O cartaz do MS desaconselha antieméticos de rotina. Betim só tem ondansetrona injetável; comprimido orodispersível 4 mg é compra."});
    R30.rx(c, 3, {nota: "Reavaliar em 48 h; sangue persistente em criança → internar. FHEMIG [F]: azitromicina 12 mg/kg no D1 + 6 mg/kg D2–D5 (máx. 500/250 mg) é a outra opção oral; ceftriaxona 50–80 mg/kg/dia (máx. 2,5 g); ciprofloxacino 10–15 mg/kg/dose 12/12 h por 3 dias (máx. 1 g/dia)."});
    R30.dropNV(c, /ondansetrona/i); R30.fonte(c, "fhemig_diarreia");
    R30.muda(c, "ondansetrona e antibióticos conferidos no protocolo FHEMIG.");
  },
  "convulsao-ativa": c => {
    R30.rx(c, 0, {nota: "Criança (FHEMIG) [F]: midazolam 0,2 mg/kg EV, IM, intranasal ou bucal, máximo 5 mg por dose, repetível; se persistir, fenitoína 15 mg/kg EV (máx. 750 mg) no serviço de urgência. Adulto: midazolam 10 mg IM (> 40 kg) [C]. Monitorar respiração."});
    R30.rx(c, 1, {nota: "Criança com glicemia < 60 mg/dL: SGH 10% 2–4 mL/kg (FHEMIG) [F]. Adulto: glicose 50% [C]."});
    c.nv = ["Doses de adulto: conferir protocolo do SAMU 192 vigente."];
    R30.fonte(c, "fhemig_eme"); R30.muda(c, "doses pediátricas conferidas no protocolo FHEMIG de estado de mal epiléptico.");
  },
  "anafilaxia": c => {
    R30.rx(c, 1, {nota: "Corticoide e anti-histamínico não tratam obstrução de via aérea nem choque. FHEMIG [F]: anti-histamínico só para sintomas cutâneos, nunca antes da epinefrina, de preferência de 2ª geração (a prometazina da REMUME seda e pode baixar a PA); não usar epinefrina SC nem em bolus EV. Doses dos adjuvantes: conferir bula."});
    c.nv = ["Doses dos adjuvantes (prometazina, hidrocortisona): conferir bula.", "Epinefrina autoinjetável: disponibilidade no Brasil e custo não verificados."];
    if (c.encaminhar && !/12–24 h/.test(c.encaminhar)) c.encaminhar += " Observação mínima de 4–6 h após melhora; 12–24 h se sibilância, comprometimento cardiovascular, > 1 dose de epinefrina, > 90 min até o atendimento ou gatilho desconhecido (FHEMIG).";
    R30.fonte(c, "fhemig_anafilaxia"); R30.muda(c, "tempo de observação e adjuvantes conferidos no protocolo FHEMIG.");
  },
  "migranea": c => {
    R30.rx(c, 1, {texto: "USO ORAL\n1. Propranolol 40 mg ______ 60 comprimidos\n   Tomar 1 comprimido de 12/12h (faixa 40–240 mg/dia; começar baixo e subir devagar). Evitar em asma.\n   OU\n2. Amitriptilina 25 mg ______ 30 comprimidos\n   Tomar ½ comprimido à noite por 1 a 2 semanas; depois 1 comprimido à noite (faixa 10–150 mg/dia).", dose: "F", nota: "SBCe 2022 [F]: avaliar por 2–3 meses antes de trocar; manter ≥ 6 meses se eficaz. Propranolol 40 mg: REMUME e grátis na Farmácia Popular; amitriptilina 25 mg: REMUME [F]."});
    R30.fonte(c, "sbce_profilaxia2022"); R30.muda(c, "doses e critérios de profilaxia conferidos no consenso SBCe 2022.");
  }
};

const REV30G = {
  // ── guias novos
  "faringite": c => {
    c.guia = {
      resumo: "A maioria das dores de garganta é **viral**: tosse, coriza, rouquidão, conjuntivite ou diarreia praticamente afastam estreptococo. Use **Centor/McIsaac** para decidir; com 2–3 pontos, **observação de 48–72 h com receita de reserva** é segura. Antibiótico, quando indicado, por **10 dias** (ou benzatina dose única).",
      calcs: ["sc:centor"],
      secoes: [
        {t: "Decidir", b: [
          {calc: "sc:centor"},
          {fluxo: [
            {t: "Dor de garganta aguda + inflamação de faringe/amígdalas"},
            {t: "Tosse, coriza, rouquidão, conjuntivite, diarreia ou exantema viral?", ramos: [
              {r: "Sim", n: [{t: "Viral: sintomáticos, sem exames e sem antibiótico", k: "ok"}]},
              {r: "Não", n: [{t: "Aplicar McIsaac (Centor + idade)"}]}]},
            {t: "Pontuação", ramos: [
              {r: "0–1", n: [{t: "Sem antibiótico e sem exames", k: "ok"}]},
              {r: "2–3", n: [{t: "Observação vigilante 48–72 h com receita de reserva, ou teste rápido se houver", k: "warn"}]},
              {r: "4–5", n: [{t: "Antibiótico empírico (ou teste rápido)", k: "stop"}]}]},
            {t: "Trismo, voz abafada, desvio de úvula, baba → urgência (abscesso)", k: "stop"}
          ], nota: "Protocolo FHEMIG/HIJPII 2021 para ≥ 3 anos [F]; extrapolação para adultos com Centor: IDSA [C]. Menores de 3 anos: estreptococo é raro [F]."},
          {ref: ["fhemig_amigdalite", "idsa_faringite"]}]},
        {t: "Tratar", b: [
          {tab: {h: ["Situação", "Criança (FHEMIG)", "Adulto"], r: [
            ["1ª escolha VO", "Amoxicilina 50 mg/kg 1×/dia (máx. 1 g) ou 25 mg/kg 12/12 h (máx. 500 mg) por 10 dias [F]", "Amoxicilina 500 mg 8/8 h ou 12/12 h por 10 dias [NV]"],
            ["Dose única IM", "Penicilina benzatina 1,2 milhão UI se > 27 kg [F]; 600.000 UI se ≤ 27 kg [NV]", "Penicilina benzatina 1,2 milhão UI [NV]"],
            ["Alergia não grave", "Cefalexina 20 mg/kg 12/12 h (máx. 500 mg) por 10 dias [F]", "Cefalexina 500 mg 12/12 h por 10 dias [NV]"],
            ["Alergia imediata/grave", "Clindamicina 7 mg/kg 8/8 h (máx. 300 mg) por 10 dias [F]", "Clindamicina ou azitromicina 5 dias (há resistência) [NV]"]]},
           nota: "Amoxicilina, benzatina, cefalexina, clindamicina 300 mg e azitromicina na REMUME de Betim [F]. Afastar da escola por 24 h após o início do antibiótico [F]."},
          {perola: {t: "Receita de reserva funciona", x: "Entregar a receita com data para dali a 2–3 dias, com orientação escrita de quando começar, reduz o uso de antibiótico sem aumentar complicações – e a família sai com um plano.", d: "menos antibiótico desnecessário.", l: "F"}},
          {ref: ["fhemig_amigdalite", "remume"]}]}
      ]};
    c.nv = ["Doses de adulto: conferir bula (o protocolo FHEMIG é pediátrico).", "Disponibilidade de teste rápido para estreptococo na UBS: não verificada."]; R30.fonte(c, "fhemig_amigdalite"); R30.muda(c, "guia com fluxograma McIsaac e tabela de doses (FHEMIG 2021).");
  },
  "diarreia-crianca": c => {
    c.guia = {
      resumo: "O que salva é **avaliar a desidratação** (escala 0–8) e **hidratar pelo plano certo**, mantendo **aleitamento e comida**. Antibiótico só em **disenteria com critérios**; ondansetrona VO ajuda quem vomita a aceitar o SRO.",
      secoes: [
        {t: "Avaliar e escolher o plano", b: [
          {tab: {h: ["Característica", "0", "1", "2"], r: [
            ["Aparência", "Normal", "Sedento, inquieto ou letárgico, irritável ao toque", "Sonolento, frio ou suado, comatoso"],
            ["Olhos", "Normais", "Levemente fundos", "Extremamente fundos"],
            ["Mucosas", "Úmidas", "Pegajosas", "Secas"],
            ["Lágrimas", "Presentes", "Reduzidas", "Ausentes"]]},
           nota: "Escala clínica de desidratação do protocolo FHEMIG/HIJPII: 0 = sem desidratação (Plano A); 1–4 = leve (Plano B); 5–8 = moderada a grave (Plano C) [F]."},
          {fluxo: [
            {t: "Diarreia aguda (≥ 3 evacuações amolecidas/24 h) ± febre/vômitos"},
            {t: "Sinais de choque?", ramos: [
              {r: "Sim", n: [{t: "SF 0,9% 20 mL/kg EV, repetir até 3× e transferir", k: "stop"}]},
              {r: "Não", n: [{t: "Escala 0–8"}]}]},
            {t: "Pontuação", ramos: [
              {r: "0", n: [{t: "Plano A: SRO após cada perda, aleitamento e alimentação habitual", k: "ok"}]},
              {r: "1–4", n: [{t: "Plano B: SRO 50–100 mL/kg em 4 h na unidade; reavaliar a cada 1–2 h; ondansetrona VO se vomita", k: "warn"}]},
              {r: "5–8", n: [{t: "Plano C: hidratação venosa e transferência", k: "stop"}]}]},
            {t: "Sangue e muco + febre/cólica (disenteria)? Ver critérios de antibiótico abaixo", k: "warn"}
          ], nota: "Protocolo FHEMIG/HIJPII [F] e cartaz do MS (planos A/B/C) [F]."},
          {ref: ["fhemig_diarreia", "ms_diarreia"]}]},
        {t: "Antibiótico, zinco e o que não usar", b: [
          {ul: [
            "Diarreia aquosa: **não** prescrever antibiótico (1A) [F].",
            "Disenteria: imunodeficiente, < 3 meses, desnutrido ou toxemiado após hidratar → antibiótico parenteral e internação; 3–6 meses → considerar; demais com estado geral comprometido e febre alta → considerar antibiótico oral e reavaliar em 48 h [F].",
            "Opções: azitromicina 12 mg/kg no D1 + 6 mg/kg D2–D5; ceftriaxona 50–80 mg/kg/dia por 2–5 dias; ciprofloxacino 10–15 mg/kg/dose 12/12 h por 3 dias [F].",
            "Zinco: o cartaz do MS recomenda para todos (10–14 dias); o protocolo FHEMIG restringe a desnutridos > 6 meses [F] – zinco não está na REMUME de Betim.",
            "Probióticos e racecadotrila: benefício pequeno; não recomendados de rotina pelo protocolo [F]. Evitar refrigerantes, sucos artificiais, chás e café [F]."]},
          {ref: ["fhemig_diarreia", "ms_diarreia", "remume"]}]}
      ]};
    R30.fonte(c, "fhemig_diarreia");
  },
  "diarreia": c => {
    c.guia = {
      resumo: "No adulto, quase toda diarreia aguda é autolimitada: **hidratação oral**, **comida normal** e **suspender temporariamente** diurético, IECA/BRA, iSGLT2 e metformina se houver desidratação. Antibiótico só em **disenteria febril, toxemia ou imunossupressão**; loperamida só **sem febre e sem sangue**.",
      secoes: [
        {t: "Avaliar e conduzir", b: [
          {fluxo: [
            {t: "Diarreia aguda (< 14 dias)"},
            {t: "Desidratação grave, vômitos incoercíveis, abdome agudo, idoso frágil desidratado?", ramos: [
              {r: "Sim", n: [{t: "Urgência / hidratação venosa", k: "stop"}]},
              {r: "Não", n: [{t: "Grau de desidratação"}]}]},
            {t: "Com algum grau de desidratação?", ramos: [
              {r: "Sim", n: [{t: "Plano B na unidade (SRO em 4 h), reavaliar", k: "warn"}]},
              {r: "Não", n: [{t: "Plano A: SRO após cada evacuação + alimentação habitual", k: "ok"}]}]},
            {t: "Sangue nas fezes + febre, toxemia ou imunossupressão?", ramos: [
              {r: "Sim", n: [{t: "Antibiótico (azitromicina 3 dias ou ciprofloxacino 3 dias) e reavaliar em 48 h", k: "warn"}]},
              {r: "Não", n: [{t: "Sem antibiótico; loperamida se sem febre e sem sangue", k: "ok"}]}]},
            {t: "> 14 dias, perda de peso, sangue persistente ou anemia → investigar (ver 'Diarreia crônica')", k: "warn"}
          ], nota: "Planos A/B/C do cartaz do MS [F]; indicação de antibiótico e loperamida [C]."},
          {ref: ["ms_diarreia", "cab28"]}]},
        {t: "Situações especiais", b: [
          {ul: [
            "Surto (≥ 2 pessoas após o mesmo alimento): notificar à vigilância como doença transmitida por alimentos [C].",
            "Uso recente de antibiótico ou internação: pensar em C. difficile [C].",
            "Viagem, água de poço, imunossupressão: parasitológico/coprocultura conforme o quadro [C].",
            "Idoso ou DRC: suspender metformina, diurético, IECA/BRA e iSGLT2 até voltar a comer e beber (dias de doença) [C]."]},
          {ref: ["cab28"]}]}
      ]};
  },
  "dengue-a": c => {
    c.guia = {
      resumo: "Dengue é **dinâmica**: classifique (A, B, C, D) **em todo contato**. O que mais salva é **hidratar cedo** e **reconhecer sinais de alarme**, sobretudo na **queda da febre**. Plaquetas baixas isoladas não são sinal de alarme. Notifique todo caso suspeito.",
      secoes: [
        {t: "Classificar", b: [
          {fluxo: [
            {t: "Suspeita: febre de 2–7 dias + ≥ 2 de náusea/vômito, exantema, mialgia, artralgia, cefaleia, dor retro-orbitária, petéquias/prova do laço +, leucopenia (criança: febre sem foco)"},
            {t: "Choque, sangramento grave ou disfunção grave de órgão?", ramos: [
              {r: "Sim", n: [{t: "Grupo D: expansão 20 mL/kg em 20 min (até 3×) e transferência", k: "stop"}]},
              {r: "Não", n: [{t: "Procurar sinais de alarme"}]}]},
            {t: "Sinal de alarme (dor abdominal intensa e contínua, vômitos persistentes, acúmulo de líquidos, hipotensão postural/lipotimia, hepatomegalia > 2 cm, sangramento de mucosa, letargia/irritabilidade, Ht em ascensão)?", ramos: [
              {r: "Sim", n: [{t: "Grupo C: SF 0,9% 10 mL/kg na 1ª hora em qualquer serviço e transferir", k: "stop"}]},
              {r: "Não", n: [{t: "Sangramento de pele espontâneo/induzido, ou risco/comorbidade/condição especial?"}]}]},
            {t: "Classificação", ramos: [
              {r: "Sim", n: [{t: "Grupo B: hemograma obrigatório (resultado em até 2–4 h), observação com hidratação oral; Ht normal → domicílio com reavaliação diária até 48 h sem febre", k: "warn"}]},
              {r: "Não", n: [{t: "Grupo A: domicílio, hidratação oral, paracetamol/dipirona, retorno no dia em que a febre baixar (ou no 5º dia)", k: "ok"}]}]}
          ], nota: "MS – Dengue: diagnóstico e manejo clínico, 6ª ed. 2024 [F]; grupo D e pediatria conforme protocolo FHEMIG 2024 [F]. Risco/condição especial: < 2 anos, > 65 anos, gestantes, obesidade, asma, DM, HAS, doenças hematológicas, DRC, autoimunes, risco social [F]."},
          {ref: ["ms_dengue", "fhemig_dengue"]}]},
        {t: "Hidratação e sintomáticos", b: [
          {tab: {h: ["Quem", "Volume oral por dia", "Como"], r: [
            ["Adulto", "60 mL/kg/dia [F]", "1/3 em SRO; 1/3 do total nas primeiras 4–6 h (ex.: 70 kg → 4,2 L/dia, 1,4 L nas 4–6 h) [F]"],
            ["Criança ≤ 10 kg", "130 mL/kg/dia [F]", "1/3 SRO nas primeiras 4–6 h; resto em líquidos claros e leite [F]"],
            ["Criança 10–20 kg", "100 mL/kg/dia [F]", "Idem [F]"],
            ["Criança > 20 kg", "80 mL/kg/dia [F]", "Idem [F]"]]},
           nota: "Manter durante a febre e até 24–48 h após a defervescência [F]. Paracetamol e/ou dipirona; não usar AAS, AINE nem corticoide [F]. Vômitos/diarreia na criança: acrescentar 50–100 mL (< 2 anos) ou 100–200 mL (> 2 anos) por perda [F]."},
          {perola: {t: "A febre baixou? Agora é que é perigoso", x: "A fase crítica começa na defervescência (geralmente entre o 3º e o 7º dia): é quando aparecem extravasamento plasmático e choque. Marque o retorno para o dia em que a febre baixar – não 'se piorar'.", d: "reconhecer o grupo C antes do choque.", l: "F"}},
          {ref: ["ms_dengue", "fhemig_dengue"]}]}
      ]};
    R30.fonte(c, "fhemig_dengue"); R30.muda(c, "guia com fluxograma de classificação A–D e tabela de hidratação (MS 2024; FHEMIG 2024 na pediatria).");
  },
  "lombalgia": c => {
    c.guia = {
      resumo: "Sem sinal de alarme, **não peça imagem**. O que melhora desfecho é **manter-se ativo** e **exercício**. AINE na menor dose pelo menor tempo; **paracetamol isolado, opioide de rotina, antidepressivos e gabapentinoides não ajudam** na lombalgia (NICE).",
      secoes: [
        {t: "Triagem", b: [
          {fluxo: [
            {t: "Dor lombar ± irradiação"},
            {t: "Cauda equina: retenção/incontinência urinária ou fecal, anestesia em sela, déficit motor bilateral ou progressivo?", ramos: [
              {r: "Sim", n: [{t: "Urgência imediata", k: "stop"}]},
              {r: "Não", n: [{t: "Outros sinais de alarme"}]}]},
            {t: "Câncer prévio, perda de peso, febre/uso de drogas IV/imunossupressão, trauma importante ou osteoporose, dor noturna/constante > 50 anos?", ramos: [
              {r: "Sim", n: [{t: "Investigação dirigida (exames e imagem)", k: "warn"}]},
              {r: "Não", n: [{t: "Lombalgia inespecífica: sem imagem; orientar e tratar", k: "ok"}]}]},
            {t: "Sem melhora em 4–6 semanas, dor ciática incapacitante ou fatores de risco de cronificação → reavaliar, fisioterapia/eMulti", k: "warn"}
          ], nota: "Sem imagem de rotina (NICE NG59) [F]; bandeiras vermelhas [C]."},
          {ref: ["nice_lombar"]}]},
        {t: "Tratar (NICE NG59)", b: [
          {tab: {h: ["Medida", "Recomendação"], r: [
            ["Manter-se ativo e exercício", "Base do tratamento; exercício em grupo em episódios ou crises [F]"],
            ["Terapia manual / TCC", "Só como parte de pacote com exercício [F]"],
            ["AINE oral", "Menor dose eficaz pelo menor tempo, avaliando risco GI, renal e CV [F]"],
            ["Paracetamol isolado", "Não oferecer [F]"],
            ["Opioide", "Não de rotina na aguda; não na crônica [F]"],
            ["ISRS, IRSN, tricíclicos, gabapentinoides", "Não oferecer para lombalgia [F]"],
            ["Ciática", "Não oferecer gabapentinoides, corticoide oral nem benzodiazepínicos; AINE com cautela; epidural na ciática aguda grave; avaliar descompressão se o tratamento conservador falhar [F]"],
            ["Cintas, TENS, ultrassom, tração, acupuntura", "Não oferecer [F]"]]},
           nota: "Relaxante muscular (ciclobenzaprina, na REMUME de Betim): o NG59 não o recomenda; se usado, poucos dias e cautela com sonolência e idosos [C]."},
          {ref: ["nice_lombar", "remume"]}]}
      ]};
    R30.muda(c, "guia com fluxograma de bandeiras vermelhas e recomendações do NICE NG59 (fonte conferida).");
  },
  "lombociatalgia": c => {
    c.guia = {
      resumo: "A maioria das ciatalgias por hérnia **melhora em 6–12 semanas** sem cirurgia. Afaste **cauda equina e déficit motor progressivo**; sem eles, **sem imagem precoce**. Na ciática o NICE **não recomenda** gabapentinoides, corticoide oral nem benzodiazepínicos; RM e cirurgia ficam para quem **não melhora** ou tem déficit.",
      secoes: [
        {t: "Triagem e seguimento", b: [
          {fluxo: [
            {t: "Dor lombar irradiada abaixo do joelho, em dermátomo"},
            {t: "Retenção/incontinência, anestesia em sela, déficit bilateral?", ramos: [
              {r: "Sim", n: [{t: "Cauda equina: urgência imediata", k: "stop"}]},
              {r: "Não", n: [{t: "Déficit motor importante ou progressivo?"}]}]},
            {t: "Déficit motor", ramos: [
              {r: "Sim", n: [{t: "RM e avaliação cirúrgica prioritárias", k: "warn"}]},
              {r: "Não", n: [{t: "Tratamento conservador: ativo, exercício, AINE com cautela; reavaliar em 2–4 semanas", k: "ok"}]}]},
            {t: "Dor incapacitante refratária após 6–12 semanas → RM e neurocirurgia/ortopedia (epidural ou descompressão)", k: "warn"}
          ], nota: "NICE NG59 [F]; prazos de 6–12 semanas e bandeiras vermelhas [C]."},
          {ref: ["nice_ciatica", "nice_lombar"]}]},
        {t: "O que não ajuda", b: [
          {ul: [
            "Gabapentina e pregabalina: o NICE não recomenda na ciática; pregabalina não superou placebo (PRECISE) [F/C].",
            "Corticoide oral e benzodiazepínicos: não oferecer [F].",
            "Opioide: não de rotina; se usado na dor aguda grave, poucos dias [F].",
            "Repouso no leito prolongado e imagem precoce sem alarme: não [F/C]."]},
          {ref: ["nice_ciatica", "nice_lombar"]}]}
      ]};
    R30.fonte(c, "nice_lombar"); R30.muda(c, "guia com fluxograma da ciática (NICE NG59).");
  },
  "migranea": c => {
    c.guia = {
      resumo: "Primeiro, **afaste os sinais de alarme**. Na crise, **trate cedo** (AINE ou dipirona + antiemético; triptano se falhar). **Profilaxia** se ≥ 3 crises/mês por 3 meses, crises incapacitantes ou falha do tratamento agudo – e **limite analgésicos** para não criar cefaleia por uso excessivo.",
      secoes: [
        {t: "Sinais de alarme e crise", b: [
          {fluxo: [
            {t: "Cefaleia"},
            {t: "Sinal de alarme: pior dor da vida/súbita, déficit neurológico, febre com rigidez de nuca, início > 50 anos, imunossupressão, câncer, piora com Valsalva/posição, mudança de padrão, gestação/puerpério?", ramos: [
              {r: "Sim", n: [{t: "Urgência / investigação", k: "stop"}]},
              {r: "Não", n: [{t: "Cefaleia primária: migrânea ou tensional"}]}]},
            {t: "Crise de migrânea", ramos: [
              {r: "Leve/moderada", n: [{t: "AINE (ibuprofeno) ou dipirona no início + metoclopramida se náusea", k: "ok"}]},
              {r: "Falha ou crise forte", n: [{t: "Triptano (compra) se sem contraindicação cardiovascular", k: "warn"}]}]},
            {t: "≥ 3 crises/mês por ≥ 3 meses, crise muito incapacitante ou falha do agudo? → profilaxia", k: "warn"}
          ], nota: "Critérios de profilaxia: SBCe 2022 [F]; sinais de alarme e tratamento agudo [C]."},
          {ref: ["sbce_profilaxia2022", "ahs_migranea"]}]},
        {t: "Profilaxia (SBCe 2022)", b: [
          {tab: {h: ["Fármaco", "Faixa diária", "Acesso"], r: [
            ["Propranolol", "40–240 mg em 2–3 tomadas (A) [F]", "REMUME 40 mg; grátis na Farmácia Popular [F]"],
            ["Amitriptilina", "10–150 mg à noite (A) [F]", "REMUME 25 mg [F]"],
            ["Topiramato", "50–200 mg em 2 tomadas (A) [F]", "Compra (não identificado na REMUME) [I]"],
            ["Valproato/divalproato", "250–1.000 mg/dia (A) [F]", "Ácido valproico na REMUME; evitar em mulheres que podem engravidar [F/C]"]]},
           nota: "Começar baixo, subir devagar, avaliar por 2–3 meses e manter ≥ 6 meses se reduzir as crises [F]. Diário de cefaleia ajuda a decidir."},
          {perola: {t: "Analgésico demais vira cefaleia", x: "Analgésico simples em ≥ 15 dias/mês ou triptano/combinações em ≥ 10 dias/mês por 3 meses causam cefaleia por uso excessivo. Explicar isso na primeira consulta evita a cronificação.", d: "menos migrânea crônica.", l: "C"}},
          {ref: ["sbce_profilaxia2022", "ichd3", "fp_elenco2026", "remume"]}]}
      ]};
  },
  "dermatite-atopica": c => {
    c.guia = {
      resumo: "O tratamento que mais muda o curso é o **hidratante todos os dias**, mesmo sem lesão. Na crise, **corticoide tópico na potência certa** pelo tempo certo e depois **manutenção 2×/semana** nas áreas que voltam. Coceira com crostas melicéricas = infecção.",
      secoes: [
        {t: "Conduzir", b: [
          {fluxo: [
            {t: "Eczema pruriginoso, recorrente, em dobras (criança maior/adulto) ou face e extensores (lactente)"},
            {t: "Infecção secundária (crostas amareladas, pústulas, vesículas agrupadas dolorosas)?", ramos: [
              {r: "Sim", n: [{t: "Tratar infecção (impetigo; eczema herpético = urgência)", k: "stop"}]},
              {r: "Não", n: [{t: "Gravidade e área"}]}]},
            {t: "Crise", ramos: [
              {r: "Corpo", n: [{t: "Corticoide de média potência (dexametasona 0,1%) por poucos dias, até controlar", k: "ok"}]},
              {r: "Face, dobras, genitais", n: [{t: "Baixa potência (hidrocortisona 1%) por poucos dias ou tacrolimo (compra)", k: "warn"}]}]},
            {t: "Depois: hidratante diário + corticoide 2×/semana nas áreas de recorrência; refratária/grave → dermatologia", k: "ok"}
          ], nota: "Diretrizes AAD 2023 e EuroGuiDerm 2022 [C]; disponibilidade REMUME/RENAME [F]."},
          {ref: ["da_guias", "remume", "rename"]}]},
        {t: "Acesso real", b: [
          {ul: [
            "Dexametasona 0,1% creme: REMUME de Betim [F].",
            "Hidrocortisona 1% creme: RENAME (Básico), não identificada na REMUME [F] – conferir a farmácia.",
            "Hidratante: vaselina sólida ou cremes simples sem fragrância são as opções mais baratas [C].",
            "Anti-histamínico oral não trata o eczema; sedativo pode ajudar o sono por poucos dias [C].",
            "Moderada/grave refratária: ciclosporina pelo CEAF (PCDT) via dermatologia [C]."]},
          {ref: ["rename", "remume"]}]}
      ]};
  }
};

CONDICOES.forEach(c => { [REV30, REV30G].forEach(m => { const f = m[c.id]; if (f) f(c); }); });
