// ───────────── data48.js – v40 (18/10/2026): Saúde mental nos Crônicos – depressão (seguimento), ansiedade, desprescrição de benzodiazepínico, TAB, esquizofrenia, álcool, outras drogas, TDAH, adolescente e comportamento agressivo no TEA
Object.assign(FONTES, {
  pcdt_tab2016: {s: "PCDT Transtorno Afetivo Bipolar tipo I 2016", t: "Ministério da Saúde. PCDT do Transtorno Afetivo Bipolar do tipo I – Portaria SAS/MS nº 315, de 30/03/2016: mania – estabilizador + antipsicótico (nível 1 lítio + risperidona; 2 valproato/olanzapina; 3 carbamazepina, haloperidol ou quetiapina; 4 clozapina após falha de ≥ 2 combinações); depressão bipolar – lítio, quetiapina, lamotrigina, olanzapina + fluoxetina; manutenção com os fármacos eficazes no episódio, por tempo indeterminado; antidepressivo reduzido após 6–8 semanas de remissão; litemia 0,6–1,2 mEq/L (toxicidade > 1,5; potencialmente fatal > 3,5); valproato teratogênico; clozapina com hemograma semanal nas primeiras 18 semanas e mensal depois (norma).", f: "F", url: "https://www.gov.br/conitec/pt-br/midias/protocolos/pcdt_transtornoafetivobipolar_tipoi.pdf/@@download/file"},
  pcdt_esq2013: {s: "PCDT Esquizofrenia 2013", t: "Ministério da Saúde. PCDT da Esquizofrenia – Portaria SAS/MS nº 364, de 09/04/2013: antipsicóticos (exceto clozapina) sem ordem de preferência, em monoterapia; falha = 6 semanas em dose adequada com melhora < 30% na BPRS; clozapina após 2 falhas, alto risco de suicídio ou discinesia tardia; decanoato de haloperidol se adesão oral impossível; posologias (risperidona 3–6 mg/dia; haloperidol até 15 mg na fase aguda e 10 mg na manutenção; clorpromazina 400–800 mg/dia; decanoato 150–200 mg/mês); monitorização: antropometria e PA no início e em 3, 6 e 12 meses, glicemia e lipídios no início e em 3 e 12 meses, depois anual; prolactina se sintomas – > 25 ng/mL (mulher) ou > 20 ng/mL (homem) com sintomas → trocar (norma).", f: "F", url: "https://www.gov.br/saude/pt-br/assuntos/pcdt/e/esquizofrenia"},
  pcdt_tdah2022: {s: "PCDT TDAH 2022", t: "Ministério da Saúde. PCDT do Transtorno do Déficit de Atenção com Hiperatividade – Portaria Conjunta SAES/SCTIE nº 14, de 29/07/2022: diagnóstico clínico (CID-10/DSM-5) com informações da família e da escola; SNAP-IV como apoio; tratamento multimodal não medicamentoso (psicoeducação, treinamento parental, TCC, apoio escolar); metilfenidato e lisdexanfetamina NÃO incorporados (Relatórios CONITEC 601 e 610/2021 – evidência de baixa/muito baixa certeza e alto impacto orçamentário) e não preconizados; consultas a cada ≤ 30 dias no início, depois a cada 3–4 meses; sem exames de rotina (norma).", f: "F", url: "https://www.gov.br/conitec/pt-br/midias/protocolos/portariaconjuntan14pcdttranstornododeficitdeatencaocomhiperatividadetdah.pdf/@@download/file"},
  pcdt_tea2022: {s: "PCDT Comportamento agressivo no TEA 2022", t: "Ministério da Saúde. PCDT do Comportamento Agressivo no Transtorno do Espectro do Autismo – Portaria Conjunta SAES/SCTIE nº 7, de 12/04/2022 (Relatório CONITEC 716): risperidona para agressividade grave com baixa resposta ou adesão às intervenções não medicamentosas, > 5 anos; doses por peso (Quadro 1); suspender sem resposta em 6 semanas na dose máxima; considerar retirada gradual após 6–12 meses de controle; monitorização (antropometria e PA em 3, 6 e 12 meses; hemograma, lipídios e glicemia em 3 e 12 meses; depois anual); prolactina se sintomas (> 25 ng/mL mulher, > 20 ng/mL homem, com galactorreia/alteração menstrual/libido → interromper); neutropenia grave (< 1 × 10⁹/L) → suspender; adultos 1 mg/dia, +1 mg a cada 3–4 dias, ~3 mg/dia (1–6), máximo 10 mg/dia; APS pode manter e monitorar após prescrição inicial especializada (norma).", f: "F", url: "https://www.gov.br/saude/pt-br/assuntos/pcdt/c/comportamento-agressivo-no-transtorno-do-espectro-do-autismo"},
  ceaf_mg2026: {s: "CEAF/MG – lista por doença (set/2026)", t: "SES-MG. Lista de medicamentos do Componente Especializado por doença (documento atualizado em set/2026): TAB (F31.1–F31.7) – clozapina, lamotrigina, olanzapina, quetiapina, risperidona; esquizofrenia (F20.0–F20.8) – clozapina, olanzapina, quetiapina, risperidona, ziprasidona; comportamento agressivo no TEA (F84.0, F84.1, F84.3, F84.5, F84.8) – risperidona 1 mg, 2 mg e solução 1 mg/mL (idade mínima 5 anos) (lista oficial estadual).", f: "F", url: "https://www.saude.mg.gov.br/obtermedicamentos/ceaf/lista-de-medicamentos-por-doenca/"},
  cab34: {s: "CAB 34 – Saúde mental (MS 2013)", t: "Ministério da Saúde. Cadernos de Atenção Básica nº 34 – Saúde Mental, 2013: papel da APS e matriciamento; faixas de dose de antidepressivos (fluoxetina 20 mg usual, 5–80 mg; sertralina 50–150 mg usual, 50–200 mg; amitriptilina/clomipramina/imipramina 150–200 mg usual, iniciar 25 mg e aumentar 25 mg a cada 2–3 dias), benzodiazepínicos (meias-vidas e doses usuais) e redução gradual do clonazepam em gotas (manual oficial; PDF na base clínica do Drive).", f: "F", url: ""},
  nice_ng222: {s: "NICE NG222 (2022) – depressão no adulto", t: "NICE. Depression in adults: treatment and management (NG222), 2022: primeira revisão em até 2 semanas (1 semana se 18–25 anos ou risco de suicídio); efeito geralmente em até 4 semanas; sem resposta em 4–6 semanas, rever adesão e fatores e então aumentar dose, trocar, associar psicoterapia ou potencializar (lítio, antipsicótico de 2ª geração – com especialista); manter ≥ 6 meses após remissão; retirada gradual (degraus de ~50%, depois ~25%), guiada por sintomas de retirada, que podem durar semanas a meses; hiponatremia e quedas em idosos; trocas podem exigir redução cruzada (diretriz).", f: "F", url: "https://www.nice.org.uk/guidance/ng222"},
  nice_cg113: {s: "NICE CG113 (2011, rev. 2020) – TAG e pânico", t: "NICE. Generalised anxiety disorder and panic disorder in adults: management (CG113): cuidado escalonado; ISRS como fármaco de escolha (sertralina primeiro na TAG); benzodiazepínico não na TAG, exceto crise breve, e não no pânico; < 30 anos – rever em 1 semana e vigiar ideação semanalmente no 1º mês; rever a cada 2–4 semanas nos 3 primeiros meses; TAG – manter ≥ 1 ano se eficaz; pânico – rever em 2, 4, 6 e 12 semanas, sem melhora em 12 semanas considerar imipramina ou clomipramina, manter ≥ 6 meses após dose ótima; ISRS + AINE/AAS aumentam sangramento (gastroproteção) (diretriz).", f: "F", url: "https://www.nice.org.uk/guidance/cg113"},
  nice_cg185: {s: "NICE CG185 (2014, rev. 2023) – transtorno bipolar", t: "NICE. Bipolar disorder: assessment and management (CG185): lítio como 1ª linha de longo prazo; não iniciar lítio na APS sem cuidado compartilhado nem valproato na APS; litemia 0,6–0,8 mmol/L no 1º tratamento (0,8–1,0 se recaída em uso de lítio ou sintomas subclínicos); litemia a cada 3 meses no 1º ano e depois a cada 6 meses (3 meses em idosos, interações, risco renal/tireoidiano, má adesão ou último nível ≥ 0,8); peso, ureia/eletrólitos com cálcio, TFG e TSH a cada 6 meses; evitar AINE; retirada do lítio em ≥ 4 semanas (ideal até 3 meses); valproato com as restrições MHRA (não iniciar < 55 anos sem 2 especialistas); valproato – orientar sinais de doença hepática/hematológica; lítio na gestação com especialista e litemia mais frequente; checagem anual de saúde física (diretriz).", f: "F", url: "https://www.nice.org.uk/guidance/cg185"},
  nice_ng87: {s: "NICE NG87 (2018, rev. 2019) – TDAH", t: "NICE. Attention deficit hyperactivity disorder: diagnosis and management (NG87): < 5 anos – treinamento parental em grupo como 1ª linha, sem medicação sem 2ª opinião especializada; ≥ 5 anos – medicação se prejuízo persistente após adaptações do ambiente, metilfenidato como 1ª linha, lisdexanfetamina após 6 semanas sem benefício; avaliação basal com altura, peso, pulso e PA (diretriz).", f: "F", url: "https://www.nice.org.uk/guidance/ng87"},
  nice_ng134: {s: "NICE NG134 (2019) – depressão em crianças e adolescentes", t: "NICE. Depression in children and young people: identification and management (NG134): leve – espera vigilante de 2 semanas e psicoterapia, sem antidepressivo inicial; moderada a grave – psicoterapia específica; fluoxetina só com psicoterapia concomitante, após avaliação de psiquiatra da infância e adolescência, início 10 mg e 20 mg após 1 semana; vigiar suicídio semanalmente no início; manter ≥ 6 meses após remissão; 2ª linha sertralina ou citalopram; não usar tricíclicos; retirada em 6–12 semanas (diretriz).", f: "F", url: "https://www.nice.org.uk/guidance/ng134"},
  pottie2018: {s: "Pottie 2018 – desprescrição de benzodiazepínico", t: "Pottie K et al. Deprescribing benzodiazepine receptor agonists: evidence-based clinical practice guideline. Can Fam Physician 2018;64(5):339-51. PMID 29760253 (diretriz GRADE): oferecer retirada lenta a ≥ 65 anos qualquer que seja a duração (forte) e a 18–64 anos com uso > 4 semanas (fraca) na insônia; redução de ~25% a cada 2 semanas e ~12,5% perto do fim, com dias sem o remédio; a retirada gradual aumenta a cessação em 3 e 12 meses sem dano grave.", f: "F", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5951648/"},
  jonas2014: {s: "Jonas 2014 – fármacos para transtorno por uso de álcool", t: "Jonas DE et al. Pharmacotherapy for adults with alcohol use disorders in outpatient settings: a systematic review and meta-analysis. JAMA 2014;311(18):1889-900. DOI 10.1001/jama.2014.3628 – naltrexona oral 50 mg: NNT 20 para evitar qualquer retorno ao beber e NNT 12 para evitar retorno ao beber pesado; acamprosato NNT 12; sem diferença entre os dois (RS/MA de 122 ECR).", f: "F", url: "https://doi.org/10.1001/jama.2014.3628"},
  decrescenzo2018: {s: "De Crescenzo 2018 – intervenções psicossociais em cocaína", t: "De Crescenzo F et al. Comparative efficacy and acceptability of psychosocial interventions for individuals with cocaine and amphetamine addiction: a systematic review and network meta-analysis. PLoS Med 2018;15(12):e1002715. DOI 10.1371/journal.pmed.1002715 – manejo de contingência + abordagem de reforço comunitário foi a única intervenção que aumentou a abstinência no fim do tratamento (OR 2,84) e no seguimento longo (50 ECR).", f: "F", url: "https://doi.org/10.1371/journal.pmed.1002715"},
  chan2019: {s: "Chan 2019 – fármacos para cocaína", t: "Chan B et al. Pharmacotherapy for cocaine use disorder – a systematic review and meta-analysis. J Gen Intern Med 2019;34(12):2858-73. DOI 10.1007/s11606-019-05074-8 – antidepressivos sem efeito; bupropiona, topiramato e psicoestimulantes com aumento de abstinência de baixa força de evidência; nenhum aprovado.", f: "F", url: "https://doi.org/10.1007/s11606-019-05074-8"},
  cortese2018: {s: "Cortese 2018 – fármacos no TDAH", t: "Cortese S et al. Comparative efficacy and tolerability of medications for ADHD in children, adolescents, and adults: a systematic review and network meta-analysis. Lancet Psychiatry 2018;5(9):727-38. DOI 10.1016/S2215-0366(18)30269-4 – metilfenidato preferido em crianças e adolescentes e anfetaminas em adultos no curto prazo (133 ECR duplo-cegos); faltam dados ≥ 26 semanas.", f: "F", url: "https://doi.org/10.1016/S2215-0366(18)30269-4"}
});
// fontes antigas agora conferidas na fonte
Object.assign(FONTES.nice_depressao || (FONTES.nice_depressao = {}), {f: "F", url: "https://www.nice.org.uk/guidance/ng222"});
Object.assign(FONTES.nice_ansiedade || (FONTES.nice_ansiedade = {}), {f: "F", url: "https://www.nice.org.uk/guidance/cg113"});

const PORT344 = "Receita de controle especial em 2 vias (Portaria SVS/MS 344/1998, lista C1) [C].";

CONDICOES.push(
// ════════════════════════════════════════ 1. DEPRESSÃO – SEGUIMENTO
{
  id: "cr-depressao", modulo: "cr", nome: "Depressão no adulto: seguimento, falha terapêutica e retirada do antidepressivo", sistema: "Saúde mental", risco: "moderado",
  ciap: "P76", cid: "F32 · F33",
  tags: "depressão seguimento PHQ-9 resposta remissão falha terapêutica troca potencialização lítio antipsicótico sertralina fluoxetina amitriptilina nortriptilina bupropiona retirada síndrome de descontinuação desmame recorrência manutenção matriciamento CAPS",
  alerta: "Ideação suicida com plano ou tentativa recente, sintomas psicóticos, virada maníaca ou incapacidade de autocuidado: avaliação no mesmo dia (CAPS/urgência).",
  S: "Diagnóstico de depressão desde ___ (episódio nº ___) | Em uso de ___ (dose ___, desde ___) | Adesão ___ | PHQ-9 inicial ___ → atual ___ | Efeitos adversos (sexual, sono, peso, náusea) ___ | Ideação suicida ___ | Sintomas de (hipo)mania ___ | Álcool/drogas ___ | Psicoterapia ___ | Estressores e rede de apoio ___.",
  O: "PA ___ | Peso ___ | Aparência, psicomotricidade, afeto ___ | Conteúdo do pensamento (culpa, ruína, psicose) ___.",
  A: "Episódio depressivo ___ (leve / moderado / grave), resposta ___ (resposta: queda ≥ 50% no PHQ-9; remissão: PHQ-9 < 5) em ___ semanas de ___; risco suicida ___.",
  P: "- Sem resposta em 4 semanas de antidepressivo (4–6 se psicoterapia ou combinação): rever adesão, dose, álcool, diagnóstico (bipolaridade, hipotireoidismo, luto) e estressores.\n- Depois: aumentar dose OU trocar OU associar psicoterapia; 2ª falha → matriciamento/psiquiatria (potencialização).\n- Remissão: manter a mesma dose ≥ 6 meses; risco de recaída alto → discutir manter por mais tempo.\n- Retirada: em degraus, ao longo de semanas a meses.\n- Retorno em ___ semanas; PHQ-9 em todo retorno.",
  rx: [
    {trilha: "ambos", titulo: "Sertralina – otimização de dose (REMUME Betim)", texto: "USO ORAL\n1. Sertralina 50 mg ______ 60 comprimidos\n   Tomar 2 comprimidos (100 mg) pela manhã.\n   (Ajustar de 50 em 50 mg a cada 2–4 semanas conforme resposta; máximo 200 mg ao dia.)", dose: "F", nota: "Faixa 50–200 mg/dia (CAB 34, MS 2013) [F]. Sertralina está na REMUME de Betim [F], mas não na RENAME 2024 [F]. " + PORT344},
    {trilha: "ambos", titulo: "Fluoxetina – otimização de dose", texto: "USO ORAL\n1. Fluoxetina 20 mg ______ 60 cápsulas\n   Tomar 2 cápsulas (40 mg) pela manhã.\n   (Máximo usual 80 mg ao dia.)", dose: "F", nota: "Faixa 20–80 mg/dia (CAB 34 [F]; PCDT TAB 2016: 20–40 mg, máx. 80 mg [F]). Meia-vida longa: mais interações (CYP2D6) e menos sintomas de retirada [C]. RENAME e REMUME [F]. " + PORT344},
    {trilha: "ambos", titulo: "Troca para tricíclico (2ª opção; evitar em idoso e cardiopata)", texto: "USO ORAL\n1. Nortriptilina 25 mg ______ ___ cápsulas\n   Tomar 1 cápsula à noite; aumentar 25 mg a cada 2–3 dias até ___ mg à noite.", dose: "NV", nota: "Esquema de titulação dos tricíclicos (iniciar 25 mg, +25 mg a cada 2–3 dias) [F – CAB 34]; dose-alvo da nortriptilina não conferida nesta sessão – conferir na bula [NV]. ECG basal se > 40 anos ou cardiopatia [C]. Tóxico em superdosagem: dispensar em pequenas quantidades se risco suicida [C]. Vindo da fluoxetina: a inibição do CYP2D6 persiste por semanas – começar com dose baixa, titular devagar, ECG e, de preferência, discutir com o psiquiatra; NICE trata a troca para tricíclico como opção com apoio especializado [F]. Nunca associar a outro serotoninérgico sem orientação (síndrome serotoninérgica) [C]. Nortriptilina 25/50 mg e amitriptilina 25 mg na REMUME [F]. " + PORT344}
  ],
  orient: "O remédio leva algumas semanas para fazer efeito; se não melhorou, ajustamos juntos – não é sua culpa.\nDepois que melhorar, o tratamento continua por pelo menos 6 meses para evitar recaída.\nNunca pare de repente: pode dar tontura, irritação, insônia e sensação de choque. A retirada é combinada, aos poucos.\nPensamentos de morte: procure a unidade no mesmo dia ou ligue 188 (CVV, 24 h).",
  alarme: ["Pensamentos de se matar ou plano", "Euforia, pouca necessidade de sono, gastos ou ideias de grandeza (virada maníaca)", "Confusão, sonolência ou quedas no idoso (hiponatremia)", "Ouvir vozes ou ideias de perseguição", "Parar de comer ou de sair da cama"],
  encaminhar: "Falha de 2 tentativas adequadas, depressão psicótica, suspeita de bipolaridade, risco suicida alto ou gestação com depressão grave → matriciamento e CAPS/psiquiatria (cuidado compartilhado). Potencialização com lítio ou antipsicótico: com especialista. Tentativa de suicídio ou autolesão: notificação compulsória imediata [C].",
  sus: {nacional: "RENAME 2024 (Básico): fluoxetina 20 mg, amitriptilina, nortriptilina, clomipramina [F]. Psicoterapia na APS/eMulti e CAPS (RAPS) [C].", betim: "REMUME Betim: sertralina 50 mg, fluoxetina 20 mg, amitriptilina 25 mg, nortriptilina 25 e 50 mg, clomipramina 25 e 75 mg, bupropiona 150 mg, carbonato de lítio 300 mg [F]. Escitalopram, venlafaxina e duloxetina não constam [F]. Oferta de psicoterapia e fluxo de matriciamento em Betim: confirmar."},
  evid: {resumo: "Cerca de metade dos pacientes não responde ao primeiro antidepressivo; NICE 2022 recomenda revisar causas da não resposta antes de mudar e, depois, aumentar dose, trocar ou associar psicoterapia; potencialização com lítio ou antipsicótico em cuidado especializado. Manter ≥ 6 meses após remissão reduz recaída; a retirada deve ser gradual. Sertralina tem bom equilíbrio eficácia–tolerabilidade (Cipriani 2018).", certeza: "Moderada", fontes: ["nice_ng222", "cipriani", "cab34", "rename", "remume"]},
  idealsus: {ideal: "Escolha entre vários ISRS/IRSN e acesso rápido a psicoterapia estruturada (TCC, ativação comportamental, interpessoal).", sus: "Na REMUME de Betim: sertralina, fluoxetina, tricíclicos e bupropiona; escitalopram e IRSN fora da lista; psicoterapia com fila variável.", ponte: "Otimize dose e adesão antes de trocar; use grupos e eMulti; troque entre sertralina e fluoxetina antes de tricíclico; para quem não tolera os da lista, escitalopram genérico tem custo baixo no varejo (preço não verificado nesta sessão)."},
  mudancas: ["Item novo (v40): seguimento longitudinal da depressão; o item 'Depressão leve a moderada' segue na demanda espontânea."],
  nv: ["Dose-alvo da nortriptilina e da bupropiona para depressão: conferir na bula.", "Fluxo de matriciamento e psicoterapia em Betim.", "Preço do escitalopram genérico."],
  guia: {
    resumo: "O que muda desfecho no seguimento: **medir (PHQ-9) em toda consulta**, **rever em 2 semanas** (1 semana se 18–25 anos ou risco), **não trocar antes de 4 semanas em dose adequada** (4–6 se psicoterapia ou combinação), **manter ≥ 6 meses após a remissão** e **retirar devagar**. Duas falhas → matriciamento.",
    calcs: ["sc:phq9"],
    secoes: [
      {t: "Avaliar a resposta", b: [
        {fluxo: [
          {t: "PHQ-9 a cada retorno (2 semanas no início; 1 semana se 18–25 anos ou risco de suicídio)"},
          {t: "4 semanas em dose adequada (4–6 se psicoterapia ou combinação)", ramos: [
            {r: "Remissão (PHQ-9 < 5)", n: [{t: "Manter a mesma dose ≥ 6 meses; rever a cada 6 meses", k: "ok"}]},
            {r: "Resposta parcial", n: [{t: "Aumentar dose e/ou associar psicoterapia", k: "warn"}]},
            {r: "Sem resposta", n: [{t: "Rever adesão, álcool, diagnóstico (bipolaridade, hipotireoidismo), estressores; depois trocar", k: "warn"}]}]},
          {t: "2ª falha adequada, psicose ou risco alto → matriciamento/CAPS", k: "stop"}
        ], nota: "NICE NG222 [F]: o efeito, se vier, costuma aparecer em até 4 semanas. Definições de resposta e remissão pelo PHQ-9 [C]."},
        {calc: "sc:phq9"},
        {ref: ["nice_ng222"]}]},
      {t: "Opções após falha (NICE 2022)", b: [
        {tab: {h: ["Situação", "Opções", "Na UBS de Betim"], r: [
          ["Só antidepressivo", "Aumentar dose (vigiar efeitos), trocar de fármaco (mesma ou outra classe) ou associar psicoterapia [F]", "Sertralina até 200 mg; fluoxetina até 80 mg [F]; troca sertralina ↔ fluoxetina ou para tricíclico [I]"],
          ["Só psicoterapia", "Trocar a psicoterapia, associar ou trocar por ISRS [F]", "Grupos e eMulti; ISRS da REMUME [F]"],
          ["Combinação sem resposta", "Associar antidepressivo de outra classe; potencializar com antipsicótico de 2ª geração ou lítio; ECT, lamotrigina ou T3 [F]", "Com psiquiatria (matriciamento/CAPS) [I]; lítio 300 mg na REMUME [F]"]]},
         nota: "Associações aumentam efeitos adversos; NICE sugere consulta especializada antes [F]. Trocas podem exigir redução cruzada [F]; da fluoxetina para tricíclico, cuidado com a interação pelo CYP2D6 (toxicidade, QT) [C]. Vigiar síndrome serotoninérgica (agitação, tremor, clônus, hipertermia) em trocas e associações [C]. Idosos: risco de hiponatremia e quedas com antidepressivos [F]; ISRS + AINE ou AAS aumentam sangramento digestivo – considerar gastroproteção [F]."},
        {perola: {t: "Antes de chamar de refratária, procure a bipolaridade", x: "Pergunte ativamente por episódios de euforia, pouca necessidade de sono e gastos excessivos, e por história familiar. Depressão bipolar responde mal a antidepressivo isolado e pode virar.", d: "evita virada maníaca e trocas inúteis.", l: "C"}},
        {ref: ["nice_ng222", "cab34"]}]},
      {t: "Manter e retirar", b: [
        {ul: [
          "Manter a dose que levou à remissão por ≥ 6 meses e rever a cada 6 meses [F].",
          "Risco de recaída maior: episódios recorrentes, resposta incompleta prévia, depressão grave, comorbidades, estilos de enfrentamento ruminativos, fatores sociais [F] → decisão compartilhada sobre manter por mais tempo [F].",
          "Retirada: degraus de ~50% da dose anterior e, nas doses baixas, de ~25%; cada degrau só após os sintomas de retirada cederem; pode levar semanas a meses [F].",
          "Paroxetina e venlafaxina dão mais sintomas de retirada [F]; fluoxetina, por meia-vida longa, costuma ser a mais fácil de retirar [C].",
          "Sintomas de retirada (tontura, 'choques', irritabilidade, insônia, sintomas gripais) surgem em dias e costumam durar 1–2 semanas, às vezes semanas a meses; graves → voltar à dose anterior e reduzir mais devagar [F].",
          "Quem quer parar o remédio com risco de recaída: oferecer TCC em grupo ou terapia baseada em mindfulness [F]."]},
        {ref: ["nice_ng222"]}]}
    ]}
},
// ════════════════════════════════════════ 2. ANSIEDADE – LONGO PRAZO
{
  id: "cr-ansiedade", modulo: "cr", nome: "Transtornos de ansiedade (TAG e pânico): tratamento de longo prazo", sistema: "Saúde mental", risco: "moderado",
  ciap: "P74", cid: "F41.0 · F41.1",
  tags: "ansiedade TAG transtorno de ansiedade generalizada pânico GAD-7 ISRS sertralina fluoxetina clomipramina imipramina TCC cuidado escalonado benzodiazepínico manutenção 1 ano",
  S: "Diagnóstico ___ (TAG / pânico / ansiedade social) desde ___ | GAD-7 inicial ___ → atual ___ | Crises/semana ___ | Evitação ___ | Em uso de ___ desde ___ | Benzodiazepínico ___ | Cafeína, álcool, estimulantes ___ | Depressão associada (PHQ-9) ___ | Psicoterapia ___.",
  O: "PA ___ | FC ___ | Peso ___ | Tremor, sinais de tireotoxicose ___.",
  A: "Transtorno de ___, resposta ___ ao tratamento de ___ semanas; comorbidade ___.",
  P: "- Cuidado escalonado: psicoeducação → autoajuda guiada/grupo → TCC individual ou ISRS.\n- ISRS na TAG: rever a cada 2–4 semanas nos 3 primeiros meses, depois a cada 3 meses. No pânico: rever em 2, 4, 6 e 12 semanas; se continuar, a cada 8–12 semanas.\n- TAG respondeu: manter ≥ 1 ano. Pânico respondeu: manter ≥ 6 meses após dose ótima, depois reduzir.\n- Benzodiazepínico: não como tratamento de manutenção (ver 'Benzodiazepínico de uso prolongado').",
  rx: [
    {trilha: "ambos", titulo: "Sertralina (1ª escolha na TAG; REMUME)", texto: "USO ORAL\n1. Sertralina 50 mg ______ 30 comprimidos\n   Tomar ½ comprimido (25 mg) pela manhã por 7 dias; depois 1 comprimido (50 mg).\n   (Ajustar a cada 2–4 semanas; máximo 200 mg ao dia.)", dose: "F", nota: "Sertralina como 1ª escolha na TAG (NICE CG113) [F]; faixa 50–200 mg (CAB 34) [F]. Início com 25 mg para reduzir a piora inicial da ansiedade [C]. < 30 anos: rever em 1 semana e vigiar ideação suicida semanalmente no 1º mês [F]. " + PORT344},
    {trilha: "ambos", titulo: "Pânico sem resposta a ISRS em 12 semanas – clomipramina", texto: "USO ORAL\n1. Clomipramina 25 mg ______ ___ comprimidos\n   Tomar 1 comprimido à noite; aumentar 25 mg a cada 2–3 dias até ___ mg.", dose: "NV", nota: "NICE CG113: sem melhora após 12 semanas de ISRS, considerar imipramina ou clomipramina (uso off-label no Reino Unido) [F]. CAB 34: doses menores costumam bastar no pânico [F]. Dose-alvo no pânico: conferir na bula [NV]. Clomipramina 25 e 75 mg na REMUME [F]; imipramina não consta [F]. " + PORT344}
  ],
  orient: "A ansiedade tem tratamento e o objetivo é você voltar a fazer o que deixou de fazer.\nO remédio pode aumentar a ansiedade nos primeiros dias; isso passa. O efeito pleno leva semanas.\nQuando funcionar, mantenha por pelo menos 1 ano (TAG) – parar cedo aumenta a recaída.\nCafé, energético e álcool pioram a ansiedade.",
  alarme: ["Pensamentos de se matar", "Crises com dor no peito, desmaio ou falta de ar fora do padrão habitual", "Uso crescente de álcool ou calmantes para aguentar"],
  encaminhar: "Sem resposta após TCC e 2 fármacos, incapacidade funcional grave, risco de autoagressão ou comorbidade grave → matriciamento/CAPS.",
  sus: {nacional: "ISRS e tricíclicos no Componente Básico (RENAME 2024: fluoxetina, clomipramina, amitriptilina, nortriptilina) [F]; TCC conforme oferta da RAPS [C].", betim: "REMUME Betim: sertralina 50 mg, fluoxetina 20 mg, clomipramina 25/75 mg [F]. Pregabalina, escitalopram, venlafaxina e duloxetina não constam [F]. Psicoterapia na rede: confirmar."},
  evid: {resumo: "NICE CG113 organiza a TAG e o pânico em cuidado escalonado; TCC e ISRS são as intervenções de 1ª linha, com sertralina preferida na TAG por custo-efetividade. Benzodiazepínicos pioram o desfecho de longo prazo no pânico e não devem ser usados na TAG fora de crises. Recaída é frequente quando o ISRS é suspenso cedo.", certeza: "Moderada (estimada)", fontes: ["nice_cg113", "cab34", "rename", "remume"]},
  idealsus: {ideal: "TCC individual de alta intensidade com terapeuta treinado e escolha entre ISRS/IRSN e pregabalina.", sus: "TCC com oferta limitada; na REMUME só sertralina, fluoxetina e tricíclicos.", ponte: "Use psicoeducação, grupos e autoajuda guiada na UBS e na eMulti enquanto aguarda psicoterapia; otimize o ISRS da lista antes de pensar em fármacos fora dela."},
  mudancas: ["Item novo (v40): ansiedade no longo prazo; 'TAG' e 'Crise de ansiedade / ataque de pânico' seguem na demanda espontânea."],
  nv: ["Dose-alvo de clomipramina no pânico: conferir bula.", "Oferta de TCC em Betim."],
  guia: {
    resumo: "**Cuidado escalonado**, **ISRS em dose adequada por tempo suficiente** (TAG: ≥ 1 ano após resposta) e **nada de benzodiazepínico como manutenção**. Medir com GAD-7 e rastrear depressão e álcool.",
    calcs: ["sc:gad7", "sc:phq9"],
    secoes: [
      {t: "Cuidado escalonado (NICE CG113)", b: [
        {fluxo: [
          {t: "Passo 1: identificar, psicoeducar, monitorar ativamente"},
          {t: "Passo 2: autoajuda guiada ou não, grupos psicoeducativos", k: "ok"},
          {t: "Passo 3: TCC individual OU ISRS (sertralina primeiro), conforme preferência", k: "warn"},
          {t: "Passo 4: refratário, prejuízo muito grave ou risco → especialista", k: "stop"}
        ], nota: "Rever o fármaco a cada 2–4 semanas nos 3 primeiros meses e depois a cada 3 meses [F]."},
        {calc: "sc:gad7"},
        {ref: ["nice_cg113"]}]},
      {t: "Duração e retirada", b: [
        {tab: {h: ["Quadro", "Se respondeu", "Se não respondeu"], r: [
          ["TAG", "Manter ≥ 1 ano (recaída alta) [F]", "Outro ISRS ou IRSN; pregabalina se intolerância a ambos (fora da REMUME) [F]"],
          ["Pânico", "Manter ≥ 6 meses após dose ótima; depois reduzir gradualmente [F]", "12 semanas sem melhora: imipramina ou clomipramina [F]"]]},
         nota: "Retirada gradual, como na depressão [C]. Benzodiazepínico no pânico associa-se a pior desfecho no longo prazo e não deve ser prescrito [F]."},
        {perola: {t: "A piora da 1ª semana derruba a adesão", x: "ISRS podem aumentar a ansiedade e a insônia no início. Avisar antes, começar com metade da dose e rever em 1–2 semanas evita o abandono e o pedido de 'calmante'.", d: "mais pessoas chegam à dose eficaz.", l: "C"}},
        {ref: ["nice_cg113", "cab34"]}]}
    ]}
},
// ════════════════════════════════════════ 3. BENZODIAZEPÍNICO DE USO PROLONGADO
{
  id: "cr-bzd", modulo: "cr", nome: "Benzodiazepínico de uso prolongado: desprescrição gradual", sistema: "Saúde mental", risco: "moderado",
  ciap: "P18", cid: "F13.2 · Z79.8",
  tags: "benzodiazepínico clonazepam rivotril diazepam lorazepam bromazepam alprazolam zolpidem dependência desprescrição retirada gradual desmame gotas idoso quedas insônia renovação de receita",
  alerta: "Não suspender de forma abrupta após uso prolongado ou em doses altas: risco de abstinência grave e convulsão. Uso associado a álcool ou opioides: risco de depressão respiratória.",
  S: "BZD ___ dose ___ desde ___ | Motivo original ___ | Quem prescreveu ___ | Tentativas de parar ___ (sintomas) | Insônia/ansiedade atuais ___ | Quedas, esquecimento, sonolência diurna, direção de veículos ___ | Álcool, opioides ___ | Depressão/ansiedade não tratadas ___ | Desejo de reduzir ___.",
  O: "Idade ___ | Marcha e equilíbrio ___ | Cognição ___ | PHQ-9 / GAD-7 ___.",
  A: "Uso prolongado de ___ (___ mg/dia, ___ anos), com ___ (quedas / cognição / dependência); indicação atual ___.",
  P: "- Explicar riscos e acordar o plano de redução com a pessoa.\n- Tratar a causa de base (TCC-I para insônia; ISRS/TCC para ansiedade/depressão).\n- Insônia: reduzir ~25% a cada 2 semanas; perto do fim, ~12,5% a cada 2 semanas; depois dias sem o remédio. Ansiedade ou doses altas: degraus menores e mais lentos (extrapolação).\n- Pausar (não voltar atrás) se sintomas difíceis; reavaliar a cada degrau.\n- Receita para o intervalo combinado; pactuar um único prescritor.",
  rx: [
    {trilha: "ambos", titulo: "Clonazepam em gotas para redução fina", texto: "USO ORAL\n1. Clonazepam 2,5 mg/mL solução oral ______ 1 frasco (20 mL)\n   Tomar ___ gotas à noite.\n   A cada 2 semanas, reduzir ___ gotas, conforme o plano combinado.", dose: "NV", nota: "CAB 34 recomenda a formulação em gotas e redução de 1 gota a cada 2 ou mais semanas [F]. Equivalência gota → mg depende do frasco e do fabricante: conferir na bula [NV]. Clonazepam 2 mg cp e 2,5 mg/mL na REMUME [F]. Notificação de receita B (azul) – Portaria 344/1998, lista B1 [C]."}
  ],
  orient: "Esse remédio, usado por muito tempo, perde efeito para o sono e aumenta o risco de quedas, esquecimento e acidentes.\nVamos reduzir devagar, no seu ritmo – não vamos tirar de uma vez.\nNos primeiros dias de cada redução o sono pode piorar um pouco; costuma melhorar em 1 a 2 semanas.\nNão misture com bebida alcoólica. Não dirija se estiver sonolento.",
  alarme: ["Convulsão", "Confusão, tremor intenso ou alucinações durante a redução", "Pensamentos de se matar", "Quedas"],
  encaminhar: "Doses muito altas, uso de vários BZD, uso combinado com álcool/drogas, abstinência complicada prévia ou transtorno psiquiátrico grave → CAPS/CAPS AD e matriciamento. Convulsão ou delirium → urgência.",
  sus: {nacional: "Desprescrição é cuidado da APS; TCC-I e grupos conforme oferta [C].", betim: "REMUME Betim: clonazepam 2 mg e 2,5 mg/mL, diazepam 10 mg, lorazepam 2 mg [F]. Bromazepam, alprazolam e zolpidem não constam [F]."},
  evid: {resumo: "A diretriz GRADE de Pottie 2018 recomenda oferecer desprescrição lenta de benzodiazepínicos e 'drogas Z' a todo idoso (forte) e a adultos com uso > 4 semanas (fraca) para insônia: a retirada gradual aumenta a taxa de cessação em 3 e 12 meses sem dano grave, e a TCC associada melhora o resultado no curto prazo. Não há ensaios comparando esquemas diferentes de redução. Beers 2023 lista benzodiazepínicos como potencialmente inapropriados no idoso.", certeza: "Moderada", fontes: ["pottie2018", "cab34", "beers2023", "nice_cg113", "remume"]},
  mudancas: ["Item novo (v40)."],
  nv: ["Número de gotas por mL do clonazepam do fornecedor da REMUME.", "Oferta de TCC-I em Betim."],
  guia: {
    resumo: "**Ofereça a desprescrição a todo idoso** e a todo adulto com uso > 4 semanas, **trate a causa de base**, reduza **~25% a cada 2 semanas** (e ~12,5% no fim) e **pause em vez de voltar**. Retirada abrupta é perigosa.",
    calcs: ["sc:gad7", "sc:phq9"],
    secoes: [
      {t: "Quem e como", b: [
        {fluxo: [
          {t: "BZD ou 'droga Z' por > 4 semanas (ou qualquer duração se ≥ 65 anos)"},
          {t: "Há indicação atual específica (epilepsia, abstinência alcoólica, ansiedade grave sem outra opção, fim de vida)?", ramos: [
            {r: "Sim", n: [{t: "A diretriz não se aplica; rever com o especialista", k: "warn"}]},
            {r: "Não", n: [{t: "Oferecer desprescrição com plano escrito", k: "ok"}]}]},
          {t: "Depressão/ansiedade não tratada ou outra causa de insônia? Tratar antes ou junto", k: "warn"},
          {t: "Reduzir ~25% a cada 2 semanas → ~12,5% no fim → dias sem o remédio"},
          {t: "Sintomas difíceis: manter a dose atual por mais tempo antes do próximo degrau", k: "warn"}
        ], nota: "Pottie 2018 [F]. Converter para diazepam foi usado em alguns ensaios, mas não há comparação entre esquemas [F]."},
        {tab: {h: ["Situação", "Ritmo sugerido"], r: [["Insônia (população dos ensaios)", "~25% a cada 2 semanas; ~12,5% no fim; dias sem o remédio [F]"], ["Ansiedade, doses altas, uso muito longo", "Extrapolação: não estudado diretamente nos ensaios de Pottie – reduzir mais devagar, em degraus menores (ex.: 1 gota de clonazepam a cada ≥ 2 semanas, CAB 34) e tratar a ansiedade com ISRS/TCC [I]"]]}},
        {ref: ["pottie2018"]}]},
      {t: "Na prática da UBS", b: [
        {ul: [
          "Combinar um único prescritor e quantidades para o intervalo entre consultas [C].",
          "Gotas de clonazepam permitem degraus pequenos e quase imperceptíveis (CAB 34) [F].",
          "Higiene do sono e TCC-I aumentam o sucesso; a TCC associada melhora a cessação logo após o programa [F].",
          "Sintomas mais comuns: piora transitória do sono, ansiedade, irritabilidade; costumam ceder em dias a semanas [C].",
          "Uso crônico sem desejo de parar: registrar a discussão, manter dose mínima, revisitar o tema [C]."]},
        {perola: {t: "Comece pela pergunta, não pela receita", x: "Perguntar 'o que você acha desse remédio hoje?' e explicar quedas, memória e direção costuma ser suficiente para muitas pessoas aceitarem tentar. Pressão e corte abrupto rompem o vínculo.", d: "mais desprescrições bem-sucedidas.", l: "C"}},
        {ref: ["pottie2018", "cab34", "beers2023"]}]}
    ]}
},
// ════════════════════════════════════════ 4. TRANSTORNO BIPOLAR
{
  id: "cr-bipolar", modulo: "cr", nome: "Transtorno afetivo bipolar: manutenção, lítio e cuidado compartilhado", sistema: "Saúde mental", risco: "alto",
  ciap: "P73", cid: "F31",
  tags: "transtorno bipolar TAB mania hipomania depressão bipolar lítio litemia valproato ácido valproico carbamazepina risperidona quetiapina olanzapina lamotrigina clozapina CEAF PCDT TSH creatinina cálcio teratogenicidade CAPS",
  alerta: "Litemia > 1,5 mEq/L ou sinais de intoxicação (vômitos, diarreia, tremor grosseiro, ataxia, confusão): suspender o lítio e encaminhar à urgência. Mania com risco ou psicose: CAPS/urgência no mesmo dia.",
  S: "Diagnóstico de TAB ___ desde ___ | Último episódio ___ (mania / depressão / misto) em ___ | Internações ___ | Em uso de ___ (doses) | Litemia/nível sérico ___ em ___ | Adesão ___ | Sinais precoces de recaída ___ | Efeitos adversos (tremor, poliúria, peso, sedação) ___ | Álcool/drogas ___ | Contracepção / desejo de gestar ___ | Acompanhamento no CAPS ___.",
  O: "PA ___ (3 medidas no início) | Peso ___ | IMC ___ | CA ___ | Tremor ___ | Humor e pensamento ___.",
  A: "TAB tipo ___, ___ (eutímico / episódio ___), em uso de ___; litemia ___; risco metabólico ___.",
  P: "- Manter os fármacos que funcionaram no episódio, sem prazo para suspender.\n- Lítio: litemia 12 h após a última dose; a cada 3 meses no 1º ano, depois a cada 6 meses; creatinina/TFG, ureia, eletrólitos, cálcio, TSH e peso a cada 6 meses.\n- Antipsicótico: peso, PA, glicemia e lipídios (ver 'Esquizofrenia').\n- Antidepressivo: só associado a estabilizador; reduzir 6–8 semanas após a remissão.\n- Psicoeducação: sinais precoces, sono regular, evitar álcool; plano de crise.",
  rx: [
    {trilha: "ambos", titulo: "Carbonato de lítio – manutenção (dose guiada por litemia)", texto: "USO ORAL\n1. Carbonato de lítio 300 mg ______ ___ comprimidos\n   Tomar ___ comprimido(s) ___ vez(es) ao dia (dose total ___ mg/dia).\n   Colher a litemia 12 horas após a última dose.", dose: "F", nota: "PCDT TAB 2016 [F]: início 300 mg/dia, +300 mg a cada 2 dias até 900 mg e então litemia; faixa 300–1.800 mg/dia; alvo 0,6–1,2 mEq/L, colhido 12 h após a última dose, 5–7 dias após mudança. NICE CG185 [F]: alvo 0,6–0,8 mmol/L no 1º tratamento (0,8–1,0 por ≥ 6 meses se recaída em uso de lítio ou sintomas subclínicos com prejuízo). Interações: diuréticos, IECA, AINE [F]. Lítio 300 mg na REMUME [F]. Iniciar só com psiquiatria/cuidado compartilhado (NICE) [F]. " + PORT344},
    {trilha: "ambos", titulo: "Ácido valproico – manutenção (evitar em mulher que pode engravidar)", texto: "USO ORAL\n1. Ácido valproico 500 mg ______ ___ comprimidos\n   Tomar ___ comprimido(s) ___ vez(es) ao dia (dose total ___ mg/dia).", dose: "F", nota: "PCDT TAB 2016 [F]: início 250 mg, +250 mg a cada 2 dias até 750 mg; máximo 2.000 mg/dia; nível 50–125 mcg/mL; contraindicado na gravidez (teratogênico); função hepática basal. NICE/MHRA [F]: não iniciar valproato em menores de 55 anos sem 2 especialistas concordarem; se mulher em idade fértil, só com programa de prevenção da gravidez. Ácido valproico 250 mg, 500 mg e xarope na REMUME [F]. " + PORT344}
  ],
  orient: "O remédio do transtorno bipolar é para prevenir crises – é usado por muito tempo, mesmo quando você está bem.\nDurma em horário regular; noites sem dormir podem disparar uma crise.\nLítio: beba água normalmente, não fique desidratado, não use anti-inflamatório (ibuprofeno, diclofenaco, nimesulida) por conta própria e faça os exames de sangue nas datas certas.\nVômitos, diarreia, tremor forte, desequilíbrio ou confusão: pare o lítio e procure atendimento no mesmo dia.\nMulher: avise antes de planejar gravidez – alguns remédios precisam ser trocados antes.",
  alarme: ["Vômitos, diarreia, tremor grosseiro, fala enrolada, desequilíbrio ou confusão (intoxicação por lítio)", "Euforia, insônia sem cansaço, gastos ou agressividade", "Ideação suicida", "Febre, rigidez muscular e confusão (síndrome neuroléptica maligna)", "Gravidez em uso de valproato, carbamazepina ou lítio", "Icterícia, sangramentos ou hematomas em uso de valproato"],
  encaminhar: "Início e trocas de esquema, episódio agudo, gestação ou desejo de gestar, TFG em queda, litemia instável → psiquiatria/CAPS (cuidado compartilhado). Intoxicação por lítio, mania grave ou risco → urgência. CEAF (quetiapina, olanzapina, lamotrigina, clozapina, risperidona) exige LME.",
  sus: {nacional: "PCDT TAB tipo I (2016) [F]. CEAF/MG (F31.1–F31.7): clozapina, lamotrigina, olanzapina, quetiapina, risperidona [F]. Lítio, valproato e carbamazepina no Componente Básico (RENAME 2024) [F].", betim: "REMUME Betim: carbonato de lítio 300 mg; ácido valproico 250 mg cápsula, 500 mg comprimido e xarope; carbamazepina 200 mg e suspensão; risperidona 1 e 2 mg e solução; haloperidol [F]. Litemia na rede municipal: confirmar laboratório e prazo."},
  evid: {resumo: "Lítio é o tratamento de manutenção mais eficaz no TAB e reduz o risco de suicídio (NICE CG185; PCDT 2016). A janela terapêutica é estreita: litemia, função renal, tireoidiana e cálcio exigem monitorização regular. Valproato é teratogênico e tem restrições crescentes em pessoas que podem gestar. Antipsicóticos atípicos são alternativa, com custo metabólico. Antidepressivo isolado deve ser evitado no TAB.", certeza: "Moderada", fontes: ["pcdt_tab2016", "nice_cg185", "ceaf_mg2026", "remume", "cab34"]},
  idealsus: {ideal: "Lítio de 1ª linha com litemia disponível; alternativas atípicas e lamotrigina conforme o perfil.", sus: "Lítio, valproato, carbamazepina e risperidona na REMUME; quetiapina, olanzapina, lamotrigina e clozapina pelo CEAF com LME.", ponte: "Garanta a litemia e os exames na rede (pedido com data e hora da última dose); para atípicos fora da REMUME, abra o processo do CEAF com o psiquiatra (LME + exames do PCDT)."},
  mudancas: ["Item novo (v40), com base no PCDT TAB 2016 e no NICE CG185."],
  nv: ["Laboratório e prazo da litemia em Betim.", "Documentos exigidos pela Farmácia de Minas para o CEAF do TAB (LME, relatório, exames)."],
  guia: {
    resumo: "Na APS, o TAB é **manutenção a longo prazo**: **litemia e exames nas datas certas**, **evitar AINE, diuréticos e desidratação com lítio**, **valproato fora de quem pode engravidar**, **nunca antidepressivo isolado** e **plano de crise com o CAPS**.",
    calcs: [],
    secoes: [
      {t: "Monitorização do lítio", b: [
        {tab: {h: ["O quê", "Quando", "Fonte"], r: [
          ["Litemia (12 h após a última dose)", "1 semana após início e após cada mudança, semanal até estabilizar; a cada 3 meses no 1º ano; depois a cada 6 meses", "NICE CG185 [F]; PCDT: coleta 5–7 dias após mudança [F]"],
          ["Litemia a cada 3 meses (sempre)", "Idosos, interações, risco renal/tireoidiano/cálcio, má adesão, sintomas mal controlados, último nível ≥ 0,8", "NICE CG185 [F]"],
          ["Peso/IMC, ureia, eletrólitos com cálcio, TFG, TSH", "A cada 6 meses (mais se alterados)", "NICE CG185 [F]"],
          ["Basal: TSH, creatinina, ureia, hemograma, glicemia, lipídios, PA, antropometria", "Antes de iniciar", "PCDT TAB 2016 [F]"],
          ["Neurotoxicidade (parestesia, ataxia, tremor, déficit cognitivo)", "Toda consulta – pode ocorrer em nível terapêutico", "NICE CG185 [F]"]]},
         nota: "Alvo: PCDT 0,6–1,2 mEq/L [F]; NICE 0,6–0,8 mmol/L no 1º tratamento; 0,8–1,0 por ≥ 6 meses se recaída em uso de lítio ou sintomas subclínicos com prejuízo funcional [F]. Toxicidade > 1,5; potencialmente fatal > 3,5 [F]. TFG em queda em 2 ou mais exames: aumentar a frequência e discutir com psiquiatra/nefrologista [F]."},
        {ref: ["nice_cg185", "pcdt_tab2016"]}]},
      {t: "Esquemas do PCDT 2016", b: [
        {tab: {h: ["Fase", "Nível 1", "Nível 2", "Nível 3", "Nível 4"], r: [
          ["Mania (estabilizador + antipsicótico, de preferência)", "Lítio + risperidona", "Valproato ou olanzapina", "Carbamazepina, haloperidol ou quetiapina", "Clozapina (após ≥ 2 combinações)"],
          ["Depressão bipolar", "Lítio", "Quetiapina", "Lamotrigina", "Olanzapina + fluoxetina ou lítio/valproato + fluoxetina"],
          ["Manutenção", "Os mesmos que funcionaram no episódio; tempo indeterminado", "", "", ""]]},
         nota: "Os níveis indicam preferência, não sequência obrigatória [F]. Avaliar resposta da mania em até 2 semanas na combinação em dose adequada [F]. Antidepressivo: reduzir após 6–8 semanas de remissão e suspender sempre que possível, salvo muitas recorrências depressivas [F]."},
        {ref: ["pcdt_tab2016"]}]},
      {t: "Segurança e interações", b: [
        {ul: [
          "Lítio + AINE, diuréticos (tiazídicos) ou IECA/BRA eleva a litemia [F]; se inevitável, AINE de horário fixo e litemia mensal até estabilizar, depois trimestral [F].",
          "Desidratação, diarreia, febre e dieta sem sal elevam a litemia [C].",
          "Retirar o lítio em ≥ 4 semanas (ideal até 3 meses) e vigiar mania/depressão por 3 meses [F]: suspensão abrupta aumenta a recaída [C].",
          "Valproato: teratogênico; em mulher que pode engravidar, só com contracepção eficaz e decisão especializada [F]. Orientar sinais de doença hepática ou hematológica (icterícia, sangramento, hematomas, infecção) e suspender/avaliar se surgirem [F]. Valproato dobra os níveis de lamotrigina – a associação exige titulação própria com especialista [C]. Carbamazepina: indutor enzimático – reduz a eficácia de contraceptivos hormonais [C].",
          "Lítio na gestação ou desejo de gestar: decisão com psiquiatria e pré-natal de alto risco (litemia mais frequente) [F].",
          "Checagem anual de saúde física (peso, PA, glicemia/HbA1c, lipídios, fígado; com lítio, rim, tireoide e cálcio) [F]."]},
        {perola: {t: "Pedido de litemia sem horário é exame perdido", x: "Anote no pedido a hora da última dose e oriente colher 12 h depois (geralmente de manhã, antes da dose). Litemia colhida 2–3 h após a dose superestima o nível e leva a reduções erradas.", d: "decisões de dose confiáveis.", l: "C"}},
        {ref: ["nice_cg185", "pcdt_tab2016"]}]}
    ]}
},
// ════════════════════════════════════════ 5. ESQUIZOFRENIA
{
  id: "cr-esquizofrenia", modulo: "cr", nome: "Esquizofrenia e psicoses crônicas: antipsicóticos, saúde física e cuidado compartilhado", sistema: "Saúde mental", risco: "alto",
  ciap: "P72", cid: "F20",
  tags: "esquizofrenia psicose antipsicótico haloperidol decanoato depósito clorpromazina risperidona quetiapina olanzapina ziprasidona clozapina biperideno extrapiramidal acatisia discinesia tardia prolactina síndrome metabólica CEAF PCDT CAPS adesão",
  alerta: "Febre, rigidez muscular, confusão e instabilidade autonômica (síndrome neuroléptica maligna); em uso de clozapina: febre ou dor de garganta (agranulocitose – hemograma no mesmo dia), dor torácica, taquicardia ou dispneia nas primeiras semanas (miocardite), constipação grave (íleo); agitação com risco ou ideação suicida: urgência. Parar de fumar eleva os níveis de clozapina e olanzapina (risco de toxicidade e convulsão): avisar o psiquiatra antes ou logo ao parar.",
  S: "Diagnóstico ___ desde ___ | Antipsicótico ___ dose ___ (oral / depósito, última aplicação ___) | Adesão ___ | Sintomas atuais (alucinações, delírios, isolamento) ___ | Sinais precoces de recaída ___ | Efeitos adversos (tremor, rigidez, inquietação, sonolência, ganho de peso, galactorreia, alteração menstrual ou sexual) ___ | Tabaco, álcool, drogas ___ | CAPS ___ | Rede familiar ___.",
  O: "PA ___ | Peso ___ | IMC ___ | CA ___ | Rigidez, tremor, movimentos involuntários ___ | Exame psíquico ___.",
  A: "Esquizofrenia ___ (estável / recaída), em uso de ___; efeitos adversos ___; risco cardiometabólico ___.",
  P: "- Manter o antipsicótico na menor dose eficaz; monoterapia.\n- Monitorização: antropometria e PA em 3, 6 e 12 meses; glicemia e lipídios em 3 e 12 meses; depois anual. Prolactina se sintomas.\n- Extrapiramidal: ajustar dose → biperideno (ou propranolol na acatisia) → trocar.\n- Adesão impossível por via oral: decanoato de haloperidol.\n- Tabagismo, peso, PA, glicemia: tratar como qualquer paciente de alto risco CV. Com clozapina ou olanzapina, parar de fumar exige ajuste de dose com o psiquiatra.",
  rx: [
    {trilha: "ambos", titulo: "Risperidona oral (REMUME)", texto: "USO ORAL\n1. Risperidona 2 mg ______ ___ comprimidos\n   Tomar ___ comprimido(s) ao dia (dose total ___ mg/dia).", dose: "F", nota: "Início e trocas com o psiquiatra/CAPS [I]. PCDT 2013 [F] (redação do protocolo, titulação rápida): início 1 mg 2×/dia, alvo 6 mg/dia ao 3º dia; manutenção 3–6 mg/dia; máximo 3 mg/dia em insuficiência renal ou hepática. REMUME [F]. " + PORT344},
    {trilha: "ambos", titulo: "Haloperidol decanoato (depósito)", texto: "USO INTRAMUSCULAR\n1. Haloperidol decanoato 50 mg/mL ______ ___ ampolas\n   Aplicar ___ mL (___ mg) IM profundo, a cada 4 semanas.", dose: "F", nota: "PCDT 2013 [F]: 150–200 mg/mês, a cada 4 semanas (até 400 mg/mês no início); meia-vida ≈ 3 semanas; indicado se adesão oral impossível. Conversão a partir do haloperidol oral: com psiquiatra [NV]. Decanoato 50 mg/mL na REMUME [F]. " + PORT344},
    {trilha: "ambos", titulo: "Biperideno para efeito extrapiramidal", texto: "USO ORAL\n1. Biperideno 2 mg ______ ___ comprimidos\n   Tomar 1 comprimido ___ vez(es) ao dia.", dose: "NV", nota: "PCDT 2013: biperideno ou propranolol após ajuste de dose [F]; CAB 34 cita biperideno 2 mg oral ou IM na distonia aguda [F]. Dose de manutenção: conferir na bula [NV]. Não usar de rotina como profilaxia; anticolinérgico piora cognição e constipação [C]. Biperideno 2 mg e injetável na REMUME [F]. Receita de controle especial (lista C1) [C]."}
  ],
  orient: "O remédio protege de novas crises e é usado por muito tempo; não pare por conta própria.\nSe sentir rigidez, tremor, inquietação ou muita sonolência, avise: dá para ajustar.\nO remédio pode aumentar o apetite e o peso: vamos acompanhar peso, pressão e exames.\nFebre alta com corpo rígido e confusão: vá à urgência.",
  alarme: ["Febre com rigidez muscular e confusão", "Febre, dor de garganta ou feridas na boca em uso de clozapina", "Ideias de se matar ou de ferir alguém", "Volta de vozes ou desconfiança intensa", "Movimentos involuntários da boca e da língua"],
  encaminhar: "1º episódio psicótico, recaída, troca de antipsicótico, refratariedade (clozapina), gestação → CAPS/psiquiatria. Antipsicóticos atípicos pelo CEAF com LME. Síndrome neuroléptica maligna, agitação grave, neutropenia na clozapina → urgência.",
  sus: {nacional: "PCDT Esquizofrenia 2013 [F]. CEAF/MG (F20.0–F20.8): clozapina, olanzapina, quetiapina, risperidona, ziprasidona [F]. RENAME 2024: haloperidol (inclusive 50 mg/mL injetável), clorpromazina e biperideno no Componente Básico; risperidona, quetiapina, olanzapina, ziprasidona e clozapina no Especializado [F].", betim: "REMUME Betim: haloperidol 1 mg, 5 mg, solução 2 mg/mL, injetável 5 mg/mL e decanoato 50 mg/mL; clorpromazina 25 e 100 mg, solução 40 mg/mL e injetável; risperidona 1 e 2 mg e solução 1 mg/mL; biperideno 2 mg e injetável [F]. Local de aplicação do depósito e fluxo com o CAPS de Betim: confirmar."},
  evid: {resumo: "Antipsicóticos reduzem recaídas; o PCDT 2013 não estabelece preferência entre eles (exceto clozapina, reservada à refratariedade), e a escolha segue o perfil de efeitos adversos. Pessoas com esquizofrenia morrem mais cedo, sobretudo por doença cardiovascular: a monitorização metabólica e o tratamento do tabagismo são tarefas da APS. Antipsicótico de depósito é opção para baixa adesão.", certeza: "Moderada", fontes: ["pcdt_esq2013", "ceaf_mg2026", "remume", "cab34"]},
  idealsus: {ideal: "Escolha do antipsicótico pelo perfil de efeitos, com atípicos e depósitos de 2ª geração disponíveis.", sus: "Típicos e risperidona na REMUME; atípicos pelo CEAF; depósito disponível é o decanoato de haloperidol.", ponte: "Para ganho de peso ou efeito extrapiramidal importantes, discuta com o CAPS a troca e o processo do CEAF; mantenha a monitorização na UBS."},
  mudancas: ["Item novo (v40), com base no PCDT 2013 e na lista CEAF/MG de set/2026."],
  nv: ["Conversão de haloperidol oral para decanoato.", "Dose de manutenção do biperideno.", "Fluxo de aplicação do depósito e de compartilhamento com o CAPS em Betim."],
  guia: {
    resumo: "Na APS: **manter o antipsicótico em monoterapia e na menor dose eficaz**, **monitorar peso, PA, glicemia e lipídios** (3, 6, 12 meses e depois anual), **perguntar por efeitos extrapiramidais e hormonais**, **tratar o tabagismo** e **acionar o CAPS cedo** nos sinais de recaída.",
    calcs: [],
    secoes: [
      {t: "Monitorização (PCDT 2013)", b: [
        {tab: {h: ["Exame", "Basal", "3 meses", "6 meses", "12 meses", "Depois"], r: [
          ["Peso, IMC, CA", "✓", "✓", "✓", "✓", "Anual"],
          ["PA (3 medidas no basal)", "✓", "✓", "✓", "✓", "Anual"],
          ["Glicemia de jejum e perfil lipídico", "✓", "✓", "", "✓", "Anual"],
          ["Prolactina", "Se sintomas (galactorreia, amenorreia, disfunção sexual)", "", "", "", ""],
          ["Hemograma (clozapina)", "✓", "Semanal até a 18ª semana; depois mensal", "", "", ""]]},
         nota: "PCDT Esquizofrenia 2013 [F]; frequência do hemograma com clozapina conforme PCDT TAB 2016 [F]. Prolactina > 25 ng/mL (mulher) ou > 20 ng/mL (homem) com sintomas → trocar [F]. Clozapina: queda de neutrófilos, febre ou dor de garganta → hemograma imediato e contato com o psiquiatra (pontos de corte para suspender: conferir no PCDT/bula) [NV]; vigiar miocardite nas primeiras semanas e constipação grave [C]. Cessar o tabagismo aumenta os níveis de clozapina e olanzapina [C]."},
        {ref: ["pcdt_esq2013", "pcdt_tab2016"]}]},
      {t: "Doses de referência (PCDT 2013)", b: [
        {tab: {h: ["Fármaco", "Faixa", "Observação"], r: [
          ["Haloperidol oral", "Até 15 mg/dia (aguda), 10 mg/dia (manutenção) [F]", "Mais extrapiramidal [C]"],
          ["Haloperidol decanoato", "150–200 mg a cada 4 semanas (até 400 mg/mês no início) [F]", "Adesão oral impossível [F]"],
          ["Clorpromazina", "50–100 mg 2–3×/dia; média 400–800 mg/dia; máx. 1 g [F]", "< 150 mg/dia: mais recaída [F]; sedação e hipotensão [C]"],
          ["Risperidona", "3–6 mg/dia [F]", "Prolactina [C]"],
          ["Quetiapina (CEAF)", "300–600 mg/dia; máx. 750–800 mg [F]", "Sedação, peso [C]"],
          ["Olanzapina (CEAF)", "5 → 20 mg/dia [F]", "Maior ganho de peso [C]"],
          ["Clozapina (CEAF)", "12,5 mg → 300–400 mg/dia; máx. 800 mg [F]", "Refratariedade; hemograma obrigatório [F]"]]},
         nota: "Falha = 6 semanas em dose adequada com melhora < 30% (BPRS) [F]. Clozapina após 2 falhas, alto risco de suicídio ou discinesia tardia [F]."},
        {ref: ["pcdt_esq2013"]}]},
      {t: "Efeitos extrapiramidais", b: [
        {fluxo: [
          {t: "Tremor, rigidez, distonia, acatisia (inquietação)"},
          {t: "Reduzir a dose, se possível", k: "ok"},
          {t: "Persistiu: biperideno (parkinsonismo/distonia) ou propranolol (acatisia)", k: "warn"},
          {t: "Persistiu ou discinesia tardia: trocar o antipsicótico com o CAPS (clozapina se discinesia tardia)", k: "stop"}
        ], nota: "PCDT 2013 [F]."},
        {perola: {t: "A inquietação nova pode ser o remédio", x: "Acatisia é confundida com piora da psicose ou ansiedade e leva a aumentar a dose do antipsicótico – que piora a acatisia. Pergunte se a inquietação é nas pernas e se começou após mudança de dose.", d: "evita escalada de dose e abandono.", l: "C"}},
        {ref: ["pcdt_esq2013"]}]}
    ]}
},
// ════════════════════════════════════════ 6. ÁLCOOL – SEGUIMENTO
{
  id: "cr-alcool", modulo: "cr", nome: "Transtorno por uso de álcool: seguimento, prevenção de recaída e complicações", sistema: "Saúde mental", risco: "moderado",
  ciap: "P15", cid: "F10.2",
  tags: "álcool alcoolismo dependência seguimento recaída naltrexona acamprosato tiamina Wernicke hepatopatia esteatose cirrose gama-GT AUDIT CAPS AD redução de danos depressão induzida",
  alerta: "Tremor intenso, alucinações, convulsão ou confusão (abstinência complicada), icterícia, ascite, hematêmese ou ideação suicida: urgência. Tiamina antes de glicose.",
  S: "Meta pactuada ___ (abstinência / redução) | Consumo atual (doses/semana, dias de beber pesado) ___ | Dias sem beber ___ | Recaídas e gatilhos ___ | Naltrexona desde ___ (adesão, efeitos) ___ | Uso de opioides ___ | Humor, sono, ansiedade ___ | Outras drogas, tabaco ___ | Trabalho, família, direção ___ | CAPS AD / grupos ___.",
  O: "PA ___ | Peso ___ | Icterícia, aranhas vasculares, hepatomegalia, ascite ___ | Tremor ___ | Marcha, nistagmo, confusão ___ | AUDIT ___.",
  A: "Transtorno por uso de álcool ___ (em remissão inicial / em uso), meta ___; complicações ___.",
  P: "- Rever meta e plano de prevenção de recaída a cada consulta; recaída não é alta.\n- Naltrexona 50 mg/dia (se sem opioides e sem hepatite aguda/insuficiência hepática); TGO/TGP antes e periodicamente.\n- Tiamina; avaliar fígado (enzimas, plaquetas, FIB-4), hemograma, B12/folato conforme o caso.\n- Depressão/ansiedade: reavaliar após 2–4 semanas de abstinência antes de rotular como primária.\n- Testes rápidos e vacinas.",
  rx: [
    {trilha: "ambos", titulo: "Naltrexona – prevenção de recaída", texto: "USO ORAL\n1. Naltrexona 50 mg ______ 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia.", dose: "F", nota: "Bula ANVISA 2026 [F]: 50 mg/dia; contraindicada com uso/dependência de opioides, hepatite aguda, insuficiência hepática e < 18 anos. NNT 12 para evitar retorno ao beber pesado (Jonas 2014) [F]. Duração: os ensaios foram de ≥ 12 semanas; manter enquanto houver benefício, em decisão compartilhada [I]. Antes de iniciar: sem opioides por 7–10 dias [C]. Depois de parar: risco de overdose se voltar a usar opioides (perda de tolerância) [C]. Em uso, analgesia opioide de urgência fica bloqueada – avisar e registrar [C]. REMUME Betim [F] – confirmar estoque."}
  ],
  orient: "Recaída faz parte do caminho para muita gente: volte à unidade, não é motivo de vergonha.\nA naltrexona diminui a vontade e o prazer de beber; não causa reação ruim se você beber, mas não a use com remédios à base de opioides (codeína, tramadol, morfina).\nAnote os momentos de vontade de beber e o que ajudou a passar.\nNão dirija depois de beber.",
  alarme: ["Tremor forte, confusão, ver ou ouvir coisas, convulsão", "Pele ou olhos amarelos, barriga inchada, vômito com sangue ou fezes pretas", "Confusão, andar desequilibrado e visão dupla (Wernicke)", "Pensamentos de se matar"],
  encaminhar: "Dependência grave, abstinência complicada prévia, comorbidade psiquiátrica grave, gestação, falha repetida na APS → CAPS AD (porta aberta, cuidado compartilhado). Cirrose descompensada → urgência/hepatologia.",
  sus: {nacional: "RAPS: APS e CAPS AD [C]. Naltrexona, acamprosato e dissulfiram não constam da RENAME 2024 [F]: a naltrexona é oferta municipal (REMUME de Betim). Tiamina 300 mg no Componente Básico [F].", betim: "REMUME Betim: naltrexona 50 mg, tiamina 300 mg e injetável [F]. Dissulfiram e topiramato não constam [F]. Fluxo do CAPS AD de Betim: confirmar."},
  evid: {resumo: "Naltrexona oral e acamprosato reduzem o retorno ao beber em ambulatório, sem diferença entre si (Jonas 2014: naltrexona NNT 20 para qualquer retorno e NNT 12 para retorno ao beber pesado). O benefício é modesto e soma-se ao vínculo, à intervenção psicossocial e ao manejo das comorbidades.", certeza: "Moderada", fontes: ["jonas2014", "naltrexona_bula", "remume", "audit_c"]},
  idealsus: {ideal: "Escolha entre naltrexona e acamprosato conforme fígado, rins e preferência.", sus: "Só naltrexona na REMUME; acamprosato fora da lista.", ponte: "Naltrexona é tão eficaz quanto o acamprosato; na insuficiência hepática (contraindicação), discuta com o CAPS AD alternativas não farmacológicas e farmacológicas."},
  mudancas: ["Item novo (v40): seguimento; rastreio e intervenção breve continuam em 'Uso de álcool e outras drogas' (Populações vulneráveis)."],
  nv: ["Fluxo do CAPS AD de Betim.", "Estoque de naltrexona na farmácia da UBS."],
  guia: {
    resumo: "No seguimento do álcool, o que muda desfecho é **manter o vínculo após a recaída**, **oferecer naltrexona** a quem pode usar, **cuidar do fígado, da nutrição e da tiamina** e **reavaliar humor após algumas semanas sem beber**.",
    calcs: ["sc:auditc", "sc:ciwa"],
    secoes: [
      {t: "Consulta de seguimento", b: [
        {fluxo: [
          {t: "Meta pactuada e consumo desde a última consulta"},
          {t: "Recaída?", ramos: [
            {r: "Sim", n: [{t: "Acolher, analisar gatilhos, rever plano e fármaco; manter retorno", k: "warn"}]},
            {r: "Não", n: [{t: "Reforçar estratégias; espaçar retornos", k: "ok"}]}]},
          {t: "Naltrexona: adesão, efeitos (náusea, cefaleia), uso de opioides; TGO/TGP"},
          {t: "Complicações: fígado, pâncreas, nutrição, cognição, PA, humor"},
          {t: "Abstinência complicada, Wernicke, descompensação hepática ou risco suicida → urgência", k: "stop"}
        ], nota: "Rastreio, intervenção breve e manejo da abstinência: itens 'Uso de álcool e outras drogas' e 'Abstinência alcoólica'."},
        {ref: ["naltrexona_bula", "jonas2014"]}]},
      {t: "Comorbidades", b: [
        {ul: [
          "Sintomas depressivos e ansiosos frequentemente melhoram com a abstinência; reavaliar após 2–4 semanas sem beber antes de iniciar antidepressivo, salvo quadro grave ou risco [C].",
          "Benzodiazepínico só no manejo da abstinência, por tempo curto [C].",
          "Fígado: enzimas, plaquetas, albumina; FIB-4 para estimar fibrose; vacinar para hepatites A e B se suscetível [C].",
          "Tabagismo associado: tratar junto (item 'Tabagismo') [C]."]},
        {perola: {t: "Gama-GT como conversa, não como prova", x: "Mostrar a evolução da gama-GT ou do VCM à pessoa pode reforçar a mudança, mas não use o exame para 'pegar' recaída – a confiança é o principal tratamento.", d: "mais vínculo e mais adesão.", l: "C"}},
        {ref: ["jonas2014"]}]}
    ]}
},
// ════════════════════════════════════════ 7. OUTRAS DROGAS
{
  id: "cr-drogas", modulo: "cr", nome: "Uso de cocaína, crack e maconha: cuidado longitudinal e redução de danos", sistema: "Saúde mental", risco: "alto",
  ciap: "P19", cid: "F12 · F14 · F19",
  tags: "cocaína crack maconha cannabis estimulantes dependência redução de danos manejo de contingência CAPS AD psicose induzida dor torácica cocaína gestante consultório na rua",
  alerta: "Dor torácica, AVC, convulsão, hipertermia ou agitação grave após cocaína/crack; psicose aguda com risco; ideação suicida: urgência.",
  S: "Substância(s) ___ | Via (inalada/aspirada/injetada) ___ | Frequência e quantidade ___ | Último uso ___ | Metas da pessoa ___ | Gatilhos e contexto ___ | Sintomas psicóticos, humor, sono ___ | Uso de álcool e tabaco ___ | Sexo desprotegido, compartilhamento de material ___ | Moradia, renda, violência ___ | CAPS AD / Consultório na Rua ___.",
  O: "PA ___ | FC ___ | Peso ___ | Lesões em lábios/narinas, pele, dentes ___ | Ausculta ___ | Exame psíquico ___ | Testes rápidos ___.",
  A: "Uso ___ (nocivo / dependência) de ___; metas ___; riscos ___ (infecções, cardiovascular, psicose, social).",
  P: "- Metas pactuadas (abstinência ou redução de danos) e retorno combinado.\n- Abordagem psicossocial; manejo de contingência quando houver no CAPS AD.\n- Sem farmacoterapia de rotina para a dependência de cocaína ou maconha.\n- Testes rápidos HIV, sífilis, hepatites B e C; vacinas; PrEP.\n- Tratar comorbidades (depressão, ansiedade, TDAH, psicose) com o CAPS AD.",
  rx: [],
  orient: "Você é bem-vindo aqui usando ou não usando. Vamos combinar metas possíveis.\nSe for usar: não compartilhe cachimbo, canudo ou seringa; beba água, coma e durma; não misture com álcool ou calmantes; não use sozinho.\nDor no peito, falta de ar, fraqueza de um lado do corpo ou convulsão depois de usar: vá à urgência.\nO CAPS AD atende sem agendamento.",
  alarme: ["Dor no peito ou falta de ar após uso", "Fraqueza ou fala enrolada (AVC)", "Convulsão ou febre muito alta", "Ouvir vozes ou desconfiança intensa", "Pensamentos de se matar"],
  encaminhar: "Dependência moderada/grave, gestante, psicose, comorbidade grave ou situação de rua → CAPS AD e Consultório na Rua (cuidado compartilhado). Complicações agudas → urgência.",
  sus: {nacional: "RAPS: APS, CAPS AD, unidades de acolhimento, Consultório na Rua; redução de danos como diretriz [C]. Não há medicamento incorporado para dependência de cocaína ou maconha [I – não há PCDT].", betim: "Fluxo do CAPS AD e do Consultório na Rua de Betim: confirmar."},
  evid: {resumo: "Para cocaína e anfetaminas, a intervenção com melhor evidência é o manejo de contingência associado à abordagem de reforço comunitário (De Crescenzo 2018). Nenhum fármaco tem benefício consistente na dependência de cocaína: antidepressivos não funcionam; bupropiona, topiramato e psicoestimulantes têm sinais de baixa força de evidência (Chan 2019).", certeza: "Baixa a moderada", fontes: ["decrescenzo2018", "chan2019", "assist_oms"]},
  idealsus: {ideal: "Manejo de contingência estruturado e abordagem de reforço comunitário.", sus: "Oferta de manejo de contingência não padronizada na RAPS; CAPS AD de porta aberta.", ponte: "Na UBS: vínculo, metas, redução de danos, testes e vacinas, tratamento das comorbidades; discuta com o CAPS AD estratégias de reforço disponíveis no território."},
  mudancas: ["Item novo (v40): cuidado longitudinal; rastreio e intervenção breve em 'Uso de álcool e outras drogas'."],
  nv: ["Fluxos do CAPS AD e do Consultório na Rua de Betim."],
  guia: {
    resumo: "Para cocaína, crack e maconha **não há remédio que trate a dependência**: o cuidado é **vínculo, metas pactuadas, redução de danos, prevenção de infecções e tratamento das comorbidades**, com o **CAPS AD** como parceiro.",
    calcs: [],
    secoes: [
      {t: "Plano de cuidado", b: [
        {fluxo: [
          {t: "Acolher sem julgamento; ASSIST para gravidade"},
          {t: "Meta da pessoa", ramos: [
            {r: "Abstinência", n: [{t: "Plano de prevenção de recaída + CAPS AD", k: "ok"}]},
            {r: "Redução/uso mais seguro", n: [{t: "Redução de danos + retorno combinado", k: "ok"}]},
            {r: "Sem meta de mudança", n: [{t: "Manter vínculo, testes, vacinas, cuidados gerais", k: "warn"}]}]},
          {t: "Comorbidades: depressão, ansiedade, TDAH, psicose, dor, tabagismo"},
          {t: "Complicações agudas ou psicose com risco → urgência", k: "stop"}
        ], nota: "Intervenções psicossociais: De Crescenzo 2018 [F]. Farmacoterapia: Chan 2019 [F]."},
        {ref: ["decrescenzo2018", "chan2019"]}]},
      {t: "Riscos específicos", b: [
        {ul: [
          "Cocaína/crack: síndrome coronariana, arritmia, AVC, convulsão, hipertermia; dor torácica após uso merece ECG e avaliação de urgência [C].",
          "Betabloqueador na intoxicação aguda por cocaína: evitar na urgência (vasoespasmo) [C].",
          "Maconha: piora e precipita psicose em predispostos, especialmente uso precoce e de alta potência; síndrome de hiperêmese canabinoide em uso diário prolongado [C].",
          "Gestação: CAPS AD + pré-natal de alto risco; não condicionar o pré-natal à abstinência [C].",
          "Infecções: HIV, sífilis, hepatites B e C, tuberculose (crack, situação de rua) [C]."]},
        {perola: {t: "Trate a dor e o sono", x: "Muita gente usa para dormir, para a dor ou para a ansiedade. Perguntar 'o que a droga resolve para você?' abre caminho para tratar o que está por trás.", d: "metas mais realistas.", l: "C"}},
        {ref: ["assist_oms"]}]}
    ]}
},
// ════════════════════════════════════════ 8. TDAH
{
  id: "cr-tdah", modulo: "cr", nome: "TDAH: diagnóstico, cuidado multimodal e o que o SUS oferece", sistema: "Saúde mental", risco: "moderado",
  ciap: "P81", cid: "F90",
  tags: "TDAH déficit de atenção hiperatividade SNAP-IV escola treinamento parental TCC metilfenidato ritalina lisdexanfetamina venvanse não incorporado CONITEC PCDT notificação de receita A adulto",
  S: "Queixa ___ (desatenção / hiperatividade / impulsividade) desde ___ anos | Em casa ___ | Na escola/trabalho ___ (relatório escolar ___) | SNAP-IV pais ___ / professor ___ | Prejuízo ___ | Sono, telas ___ | Gestação/parto, desenvolvimento ___ | História familiar ___ | Comorbidades (ansiedade, depressão, TEA, dificuldades de aprendizagem, uso de substâncias) ___ | Visão/audição ___ | Medicação em uso (prescrição externa) ___.",
  O: "Peso ___ | Altura ___ (percentil) | PA ___ (percentil) | FC ___ | Exame neurológico ___ | Observação do comportamento ___.",
  A: "Quadro ___ (sugestivo de TDAH tipo ___ / a esclarecer), com prejuízo em ___; comorbidades ___.",
  P: "- Excluir/tratar causas e comorbidades (sono, visão, audição, ansiedade, violência, dificuldades de aprendizagem).\n- Diagnóstico clínico com informações de família e escola (≥ 2 contextos), SNAP-IV como apoio.\n- Psicoeducação; treinamento parental; apoio escolar; TCC para adolescentes e adultos (eMulti/CAPSi).\n- Retornos ≤ 30 dias no início, depois a cada 3–4 meses.\n- Medicação: fora do SUS (ver Ideal × SUS).",
  rx: [],
  orient: "TDAH não é falta de educação nem preguiça. Rotina, combinados claros e elogio ao que dá certo ajudam muito.\nConverse com a escola: pequenas adaptações (lugar na sala, tarefas divididas, tempo extra) fazem diferença.\nTelas à noite e sono curto pioram a atenção.\nSe usar remédio receitado em outro serviço, traga a receita e informe efeitos (apetite, sono, coração).",
  alarme: ["Perda de peso ou parada de crescimento em uso de estimulante", "Palpitações, dor no peito ou desmaio em uso de estimulante", "Tristeza intensa, ideação suicida ou uso de drogas", "Sinais de violência ou negligência"],
  encaminhar: "Dúvida diagnóstica, comorbidade grave (TEA, deficiência intelectual, depressão, uso de substâncias), prejuízo grave ou < 5 anos → CAPSi/neuropediatria/psiquiatria (conforme rede). Suspeita de violência → notificar e acionar a rede.",
  sus: {nacional: "PCDT TDAH 2022: tratamento não medicamentoso; metilfenidato e lisdexanfetamina não incorporados (CONITEC 2021) e não preconizados [F].", betim: "Metilfenidato não consta na REMUME de Betim [F]. Oferta de psicologia, fonoaudiologia, psicopedagogia e CAPSi em Betim: confirmar."},
  evid: {resumo: "Metilfenidato reduz os sintomas centrais no curto prazo em crianças e adolescentes (Cortese 2018) e é a 1ª linha farmacológica do NICE a partir de 5 anos; abaixo de 5 anos, a 1ª linha é o treinamento parental. A CONITEC julgou a evidência de baixa/muito baixa certeza e o impacto orçamentário alto e não incorporou estimulantes; o PCDT 2022 preconiza intervenções multimodais não medicamentosas.", certeza: "Moderada (curto prazo); baixa no longo prazo", fontes: ["pcdt_tdah2022", "nice_ng87", "cortese2018", "remume"]},
  idealsus: {ideal: "Intervenções comportamentais + metilfenidato a partir de 5 anos quando o prejuízo persiste (NICE NG87; Cortese 2018).", sus: "Só tratamento não medicamentoso no PCDT; estimulantes não incorporados nem na REMUME.", ponte: "Ofereça treinamento parental, psicoeducação e articulação com a escola; se a família tiver acesso à compra de metilfenidato, a prescrição exige notificação de receita A (amarela) [C], avaliação basal de peso, altura, FC e PA [F – NICE] e seguimento desses parâmetros."},
  mudancas: ["Item novo (v40), com base no PCDT TDAH 2022 e no NICE NG87."],
  nv: ["Rede de apoio (psicologia, CAPSi, psicopedagogia) em Betim.", "Preço do metilfenidato no varejo."],
  guia: {
    resumo: "TDAH é **diagnóstico clínico com informação da família e da escola**. No SUS o tratamento é **multimodal não medicamentoso** (PCDT 2022): psicoeducação, **treinamento parental**, apoio escolar e TCC. Metilfenidato tem benefício de curto prazo, mas **não está incorporado**.",
    calcs: [],
    secoes: [
      {t: "Avaliação", b: [
        {fluxo: [
          {t: "Desatenção e/ou hiperatividade-impulsividade com prejuízo"},
          {t: "Sintomas em ≥ 2 contextos (casa, escola, trabalho) e início na infância", k: "warn"},
          {t: "Excluir: sono ruim, déficit visual/auditivo, ansiedade/depressão, violência, dificuldade de aprendizagem, TEA, uso de substâncias"},
          {t: "SNAP-IV (pais e professor) como apoio e para seguimento", k: "ok"},
          {t: "< 5 anos, dúvida ou comorbidade grave → serviço especializado", k: "stop"}
        ], nota: "PCDT TDAH 2022: critérios da CID-10/DSM-5, informações de família e escola; SNAP-IV pode ser aplicado pela escola em caráter auxiliar [F]."},
        {ref: ["pcdt_tdah2022"]}]},
      {t: "Tratamento: ideal × SUS", b: [
        {tab: {h: ["Faixa", "Melhor evidência (NICE NG87)", "SUS (PCDT 2022)"], r: [
          ["< 5 anos", "Treinamento parental em grupo; sem medicação sem 2ª opinião especializada [F]", "Treinamento parental, psicoeducação [F]"],
          ["≥ 5 anos e adolescentes", "Ajustes ambientais; se prejuízo persistir, metilfenidato 1ª linha; lisdexanfetamina após 6 semanas sem benefício [F]", "TCC, treinamento parental, apoio escolar; estimulantes não preconizados [F]"],
          ["Adultos", "Medicação se prejuízo após ajustes ambientais [F]; anfetaminas preferidas no curto prazo (Cortese 2018) [F]", "TCC e estratégias compensatórias; lisdexanfetamina não incorporada [F]"]]},
         nota: "Seguimento no PCDT: consultas a cada ≤ 30 dias no início, depois a cada 3–4 meses; exames não são rotina [F]. Transição para serviços de adulto planejada até os 18 anos [F]."},
        {perola: {t: "A escola é parte do tratamento", x: "Um relatório curto do professor (com SNAP-IV) e um combinado de adaptações simples em sala costumam render mais que uma troca de remédio. Peça e responda por escrito.", d: "diagnóstico mais seguro e menos prejuízo escolar.", l: "C"}},
        {ref: ["nice_ng87", "pcdt_tdah2022", "cortese2018"]}]},
      {t: "Se a pessoa já usa estimulante (prescrição externa)", b: [
        {ul: [
          "Registrar peso, altura (percentil), FC e PA a cada consulta [F – NICE avaliação basal; seguimento [C]].",
          "Perguntar por apetite, sono, palpitações, humor e uso indevido [C].",
          "Metilfenidato é da lista A3: notificação de receita A (amarela) [C]; a renovação depende de quem prescreveu e do acesso da família [I].",
          "PA consistentemente > p95 em crianças: especialista antes de iniciar ou manter [F]."]},
        {ref: ["nice_ng87"]}]}
    ]}
},
// ════════════════════════════════════════ 9. ADOLESCENTE
{
  id: "cr-adolescente", modulo: "cr", nome: "Depressão e ansiedade na adolescência: avaliação, psicoterapia e quando usar fluoxetina", sistema: "Saúde mental", risco: "alto",
  ciap: "P76 · P74", cid: "F32 · F41",
  tags: "adolescente depressão ansiedade PHQ-9 PHQ-A HEEADSSS sigilo escola bullying autolesão fluoxetina sertralina psicoterapia TCC espera vigilante CAPSi ECA notificação violência",
  alerta: "Ideação suicida com plano, tentativa, autolesão grave, psicose ou violência: avaliação no mesmo dia e rede de proteção (notificar violência; Conselho Tutelar quando indicado).",
  S: "Idade ___ | Acompanhante ___ (parte da consulta a sós: sim/não) | Humor, irritabilidade, perda de interesse há ___ semanas | Sono, apetite, energia ___ | Escola (rendimento, faltas, bullying) ___ | Família ___ | Amigos, redes sociais, telas ___ | Álcool/drogas ___ | Sexualidade, violência ___ | Autolesão/ideação suicida ___ | PHQ-9 ___ | GAD-7 ___.",
  O: "Peso ___ | Altura ___ | PA ___ | Sinais de autolesão ___ | Exame psíquico ___.",
  A: "Episódio depressivo ___ (leve / moderado / grave) e/ou transtorno de ansiedade ___ em adolescente de ___ anos; risco ___; contexto ___.",
  P: "- Consulta com tempo a sós; explicar sigilo e seus limites (risco à vida).\n- Leve: espera vigilante com nova consulta em ~2 semanas; psicoterapia/grupos; sem antidepressivo inicial.\n- Moderada a grave: psicoterapia específica e matriciamento/CAPSi; fluoxetina só associada à psicoterapia e após avaliação especializada.\n- Plano de segurança e restrição de meios se ideação.\n- Articular escola e família; notificar violência.",
  rx: [
    {trilha: "ambos", titulo: "Fluoxetina (moderada a grave, com psicoterapia e psiquiatria)", texto: "USO ORAL\n1. Fluoxetina ______ (apresentação que permita 10 mg) ______\n   Tomar 10 mg pela manhã por 7 dias.\n2. Depois, se necessário: Fluoxetina 20 mg ______ 30 cápsulas\n   Tomar 1 cápsula pela manhã.", dose: "F", nota: "Esquema 10 mg → 20 mg após 1 semana (NICE NG134) [F]; apresentação de 10 mg [NV]. NICE NG134 [F]: doses menores em baixo peso; só com psicoterapia concomitante e após avaliação de psiquiatra da infância e adolescência; contato semanal no início para vigiar ideação suicida e hostilidade. A RENAME 2024 tem fluoxetina 20 mg cápsula e comprimido, mas a REMUME de Betim lista só a cápsula [F]: o início com 10 mg exige outra apresentação (solução oral ou comprimido divisível) [I]; se o comprimido disponível é sulcado: conferir [NV]. Indicações pediátricas aprovadas pela ANVISA: conferir na bula [NV]. " + PORT344}
  ],
  orient: "O que você contar aqui fica entre nós, a não ser que haja risco para a sua vida ou de outra pessoa – nesse caso, combinamos juntos como avisar alguém de confiança.\nTristeza e preocupação que não passam têm tratamento. Conversar com um profissional ajuda.\nSe começar remédio, nas primeiras semanas os pensamentos de se machucar podem aumentar: avise logo.\nCVV 188 (24 h, gratuito). Em risco imediato, procure a urgência.",
  alarme: ["Pensamentos de se matar, plano ou despedidas", "Autolesão", "Parar de comer, de ir à escola ou de sair do quarto", "Uso de álcool ou drogas para aguentar", "Sinais de violência em casa, na escola ou na internet"],
  encaminhar: "Depressão moderada a grave, sem resposta a 4–6 sessões de psicoterapia, risco suicida, autolesão, psicose, transtorno alimentar → CAPSi/psiquiatria da infância e adolescência. Risco iminente → urgência. Violência → notificação e rede de proteção. Lesão autoprovocada (autolesão e tentativa de suicídio) é de notificação compulsória imediata no SINAN [C – conferir a portaria vigente].",
  sus: {nacional: "RAPS: APS, CAPSi, eMulti; Programa Saúde na Escola [C]. Fluoxetina 20 mg cápsula e comprimido no Componente Básico (RENAME 2024) [F].", betim: "REMUME Betim: fluoxetina 20 mg cápsula e sertralina 50 mg [F]. Fluxo de acesso ao CAPSi e à psiquiatria infantil em Betim: confirmar."},
  evid: {resumo: "NICE NG134: na depressão leve do adolescente, espera vigilante e psicoterapia, sem antidepressivo inicial. Na moderada a grave, psicoterapia específica; fluoxetina é o único antidepressivo com relação benefício–risco favorável demonstrada em ensaios, sempre associada à psicoterapia e com vigilância de ideação suicida; sertralina e citalopram são 2ª linha; tricíclicos não devem ser usados.", certeza: "Moderada (estimada)", fontes: ["nice_ng134", "suicidio", "remume"]},
  idealsus: {ideal: "Psicoterapia específica (TCC, interpessoal, familiar) com acesso rápido; fluoxetina em titulação a partir de 10 mg.", sus: "Psicoterapia com fila; CAPSi para casos graves; REMUME só com fluoxetina 20 mg.", ponte: "Use a eMulti e grupos na UBS e o PSE; para iniciar com 10 mg, combine com o psiquiatra a apresentação adequada (fora da REMUME); não iniciar diretamente com 20 mg [F – NICE NG134]."},
  mudancas: ["Item novo (v40), com base no NICE NG134."],
  nv: ["Indicações pediátricas da fluoxetina na bula ANVISA.", "Acesso ao CAPSi e à psiquiatria infantil em Betim."],
  guia: {
    resumo: "No adolescente: **tempo a sós e sigilo com limites claros**, **perguntar sobre suicídio, autolesão, violência e substâncias**, **psicoterapia primeiro**, **fluoxetina só com psicoterapia e psiquiatria**, **contato semanal no início** do antidepressivo.",
    calcs: ["sc:phq9", "sc:gad7"],
    secoes: [
      {t: "Gravidade e conduta (NICE NG134)", b: [
        {fluxo: [
          {t: "Avaliação psicossocial (casa, escola, atividades, drogas, sexualidade, suicídio, segurança)"},
          {t: "Gravidade", ramos: [
            {r: "Leve", n: [{t: "Espera vigilante ~2 semanas → psicoterapia por 2–3 meses (TCC digital/grupo, apoio não diretivo); sem antidepressivo inicial", k: "ok"}]},
            {r: "Moderada a grave", n: [{t: "Psicoterapia específica (TCC, interpessoal, familiar) + matriciamento/CAPSi", k: "warn"}]},
            {r: "Sem resposta após 4–6 sessões", n: [{t: "Revisão multidisciplinar → fluoxetina associada à psicoterapia", k: "warn"}]}]},
          {t: "Risco suicida alto, psicose ou autolesão grave → mesmo dia", k: "stop"}
        ], nota: "NICE NG134 [F]. Atividade física estruturada (3×/semana, 10–12 semanas) também é recomendada [F]."},
        {calc: "sc:phq9"},
        {ref: ["nice_ng134"]}]},
      {t: "Se usar antidepressivo", b: [
        {ul: [
          "Fluoxetina é a escolha; 10 mg/dia, 20 mg após 1 semana se necessário; pouca evidência acima de 20 mg [F].",
          "Monitorar ideação suicida, autolesão e hostilidade, sobretudo no início (ex.: contato semanal) [F].",
          "Resposta: manter ≥ 6 meses após a remissão (8 semanas sem sintomas e com funcionamento pleno) [F].",
          "Falha ou intolerância: sertralina ou citalopram (iniciar com metade da dose do adulto) [F]. Tricíclicos não [F].",
          "Retirada em 6–12 semanas, guiada pelos sintomas de descontinuação [F]."]},
        {perola: {t: "Pergunte de novo, a sós", x: "Muitos adolescentes só falam de autolesão, violência ou sexualidade quando o responsável sai da sala. Combine isso logo no início da consulta como rotina para todos.", d: "risco identificado mais cedo.", l: "C"}},
        {ref: ["nice_ng134", "suicidio"]}]}
    ]}
},
// ════════════════════════════════════════ 10. TEA – COMPORTAMENTO AGRESSIVO
{
  id: "cr-tea", modulo: "cr", nome: "TEA com comportamento agressivo: risperidona pelo PCDT e monitorização na APS", sistema: "Saúde mental", risco: "alto",
  ciap: "P99", cid: "F84",
  tags: "autismo TEA transtorno do espectro autista agressividade autoagressão irritabilidade risperidona CEAF PCDT 2022 LME peso prolactina dor comunicação análise do comportamento CER CAPSi",
  alerta: "Mudança súbita de comportamento em quem não comunica bem: procurar dor, infecção, constipação, convulsão ou violência antes de medicar. Agressão com risco grave: urgência.",
  S: "Diagnóstico de TEA desde ___ | Comunicação ___ (verbal / não verbal) | Comportamento-alvo ___ (agressão a outros / autoagressão / crises), frequência ___ | Gatilhos ___ | Mudança recente (dor, sono, escola, rotina, família) ___ | Terapias em curso ___ | Risperidona desde ___ dose ___ | Efeitos (apetite, peso, sonolência, galactorreia, movimentos) ___ | Sobrecarga do cuidador ___.",
  O: "Peso ___ | Altura ___ | IMC/percentil ___ | CA ___ | PA ___ (3 medidas no início) | Dentes, ouvidos, pele, abdome (fonte de dor) ___ | Movimentos involuntários ___.",
  A: "TEA com comportamento agressivo ___ (grave / moderado), resposta ___ a intervenções não medicamentosas; risperidona ___.",
  P: "- Causas tratáveis primeiro: dor, constipação, sono, convulsão, ambiente, violência.\n- Intervenções comportamentais e apoio à família são a base.\n- Risperidona (a partir de 5 anos; o PCDT exclui menores de 5): agressividade grave com baixa resposta/adesão às outras medidas; menor dose eficaz; resposta inicial no 14º dia e revisão em 3–4 semanas; suspender sem resposta em 6 semanas na dose máxima.\n- Monitorização: antropometria e PA em 3, 6 e 12 meses; hemograma, lipídios e glicemia em 3 e 12 meses; depois anual.\n- Após 6–12 meses de controle: discutir retirada gradual.",
  rx: [
    {trilha: "ambos", titulo: "Risperidona solução oral – criança > 5 anos e adolescente", texto: "USO ORAL\n1. Risperidona 1 mg/mL solução oral ______ 1 frasco (30 mL)\n   Dias 1 a 3: ___ mL (0,25 mg se < 20 kg / 0,5 mg se ≥ 20 kg) 1 vez ao dia.\n   A partir do 4º dia: ___ mL (0,5 mg se < 20 kg / 1 mg se ≥ 20 kg) 1 vez ao dia. Reavaliar no 14º dia; ajustes seguintes lentos, dentro da faixa de manutenção.", dose: "F", nota: "PCDT TEA 2022, Quadro 1 [F]: avaliar resposta por volta do 14º dia e rever efetividade e efeitos em 3–4 semanas; manutenção 0,5–1,5 mg/dia (< 20 kg) e 1,0–2,5 mg/dia (≥ 20 kg); > 45 kg até 3,5 mg/dia (máxima avaliada). Aumentos lentos (extrapiramidal). Excluídos: < 5 anos e lactantes [F]. CEAF/MG (F84.0, F84.1, F84.3, F84.5, F84.8; idade mínima 5 anos) e REMUME Betim (1 mg, 2 mg, 1 mg/mL) [F]. " + PORT344},
    {trilha: "ambos", titulo: "Risperidona – adulto com TEA", texto: "USO ORAL\n1. Risperidona 1 mg ______ ___ comprimidos\n   Tomar 1 comprimido à noite; aumentar 1 mg a cada 3–4 dias conforme resposta (habitual ~3 mg ao dia).", dose: "F", nota: "PCDT TEA 2022 [F]: início 1 mg/dia (preferencialmente à noite), +1 mg a cada 3–4 dias; doses de ~3 mg/dia (1–6 mg) com resposta; máximo 10 mg/dia (acima da faixa usual da esquizofrenia; usar a menor dose eficaz) [F]. " + PORT344}
  ],
  orient: "O remédio ajuda a reduzir crises de agressividade, mas não trata o autismo; as terapias e a rotina continuam sendo o principal.\nPode aumentar muito o apetite: ofereça comida saudável, evite refrigerantes e mantenha atividade física.\nSonolência, rigidez, movimentos estranhos, saída de leite pelas mamas ou alteração da menstruação: avise a equipe.\nMudança brusca de comportamento pode ser dor (dente, ouvido, intestino preso): traga para avaliar.",
  alarme: ["Febre com rigidez muscular e confusão", "Movimentos involuntários novos", "Ganho de peso rápido", "Autoagressão grave ou agressão com risco", "Convulsão"],
  encaminhar: "Início da risperidona idealmente por profissional familiarizado com TEA (psiquiatria/neuropediatria/CAPSi); a APS pode manter e monitorar após a prescrição inicial [F]. Terapias de reabilitação → CER/serviços da rede. Refratariedade → especialista.",
  sus: {nacional: "PCDT Comportamento Agressivo no TEA 2022: risperidona [F]; CEAF/MG para F84.0/1/3/5/8, idade mínima 5 anos [F]. ECT e estimulação magnética não preconizadas [F].", betim: "REMUME Betim: risperidona 1 mg, 2 mg e 1 mg/mL solução [F]. Fluxo do CER/CAPSi e da Farmácia de Minas para o CEAF: confirmar."},
  evid: {resumo: "Na RS do PCDT, risperidona reduziu irritabilidade/agressividade no curto prazo em relação ao placebo, com ganho de peso médio de 1,75 kg em 8 semanas e prolactina mais alta (+27 ng/mL); aripiprazol não diferiu da risperidona com baixa certeza. Antipsicóticos não tratam os sintomas centrais do TEA e não devem ser a forma primária de cuidado.", certeza: "Moderada (curto prazo)", fontes: ["pcdt_tea2022", "ceaf_mg2026", "remume", "sbp_tea"]},
  mudancas: ["Item novo (v40), com base no PCDT 2022 e na lista CEAF/MG de set/2026."],
  nv: ["Documentos exigidos pela Farmácia de Minas para o CEAF (risperidona/TEA).", "Fluxo de CER e CAPSi em Betim."],
  guia: {
    resumo: "Risperidona no TEA é para **agressividade grave que não respondeu às medidas não medicamentosas**, a partir de **5 anos**, na **menor dose eficaz**, com **reavaliação em 3–4 semanas**, **suspensão sem resposta em 6 semanas** e **monitorização metabólica**. Procure a **dor** antes.",
    calcs: [],
    secoes: [
      {t: "Quando usar (PCDT 2022)", b: [
        {fluxo: [
          {t: "Comportamento agressivo (a si ou a outros) em pessoa com TEA"},
          {t: "Causa tratável? Dor, constipação, otite, dente, sono, convulsão, mudança de rotina, violência", k: "warn"},
          {t: "Intervenções comportamentais e apoio familiar em curso?"},
          {t: "Agressividade grave com baixa resposta/adesão, risco a si ou a outros, ou atrapalhando as terapias?", ramos: [
            {r: "Sim (≥ 5 anos)", n: [{t: "Risperidona: definir comportamento-alvo e medida de seguimento", k: "warn"}]},
            {r: "Não", n: [{t: "Manter medidas não medicamentosas", k: "ok"}]}]},
          {t: "Sem resposta em 6 semanas na dose máxima → suspender", k: "stop"}
        ], nota: "PCDT TEA 2022 [F]. Anticonvulsivantes, homeopatia, quelação, suplementos e vitaminas sem evidência para agressividade no TEA [F]."},
        {ref: ["pcdt_tea2022"]}]},
      {t: "Doses (Quadro 1 do PCDT)", b: [
        {tab: {h: ["Peso", "Dias 1–3", "Dia 4 em diante", "Manutenção", "Máximo estudado"], r: [
          ["< 20 kg", "0,25 mg", "0,5 mg", "0,5–1,5 mg/dia", "1,5 mg/dia"],
          ["20–45 kg", "0,5 mg", "1,0 mg", "1,0–2,5 mg/dia", "2,5 mg/dia"],
          ["> 45 kg", "0,5 mg", "1,0 mg", "1,0–2,5 mg/dia (pode precisar de mais)", "3,5 mg/dia"],
          ["Adulto", "1 mg/dia", "+1 mg a cada 3–4 dias", "~3 mg/dia (1–6 mg)", "10 mg/dia"]]},
         nota: "PCDT TEA 2022 [F]. Solução 1 mg/mL para frações de 0,25–0,5 mg [F]."},
        {ref: ["pcdt_tea2022"]}]},
      {t: "Monitorização e retirada", b: [
        {tab: {h: ["Quando", "O quê"], r: [
          ["Antes de iniciar", "Peso, altura, CA e quadril, PA (3 medidas em dias diferentes), lipídios, glicemia; história de obesidade, DM, dislipidemia, HAS, DCV, SNM, discinesia, suicídio; ECG se cardiopatia [F]"],
          ["3, 6 e 12 meses", "Antropometria e PA [F]"],
          ["3 e 12 meses", "Hemograma, perfil lipídico, glicemia de jejum [F]"],
          ["Depois", "Anual [F]; ECG a cada 3 meses se cardiopatia [F]"],
          ["Se sintomas", "Prolactina (galactorreia, alteração menstrual, libido): > 25 ng/mL (mulher) ou > 20 ng/mL (homem) com sintomas → suspender [F]"],
          ["Sempre", "Neutrófilos < 1.000/mm³ → suspender [F]"]]},
         nota: "Duração ideal curta; após 6–12 meses de controle, retirada gradual compartilhada com a família, com reavaliação periódica [F]. Dieta e atividade física para prevenir ganho de peso [F]."},
        {perola: {t: "Defina o alvo antes da primeira dose", x: "Anote com a família qual comportamento será medido (ex.: nº de episódios de autoagressão por semana) e como. Sem alvo, a risperidona tende a ficar para sempre e a dose a subir.", d: "suspensões e retiradas no tempo certo.", l: "C"}},
        {ref: ["pcdt_tea2022", "ceaf_mg2026"]}]}
    ]}
}
);

// correção (v40): naltrexona não consta da RENAME 2024 (conferido no documento) – oferta municipal em Betim
CONDICOES.forEach(c => { if (c.id === "po-substancias" && c.sus) {
  c.sus.nacional = "RAPS: APS, CAPS AD (porta aberta), unidades de acolhimento; redução de danos como diretriz [C]. RENAME 2024: tiamina 300 mg e naloxona 0,4 mg/mL no Componente Básico; naltrexona, acamprosato e dissulfiram não constam [F].";
  c.mudancas = (c.mudancas || []).concat(["v40: SUS nacional corrigido – a naltrexona não consta da RENAME 2024 (é oferta da REMUME de Betim)."]);
} });
