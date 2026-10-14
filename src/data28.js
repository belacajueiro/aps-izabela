// ───────────── data28.js – Saúde da pessoa idosa (11/10/2026): consulta multidimensional, Alzheimer, Parkinson, inapetência, fragilidade/sarcopenia, quedas
Object.assign(FONTES, {
  pcdt_parkinson2025: {s: "PCDT Doença de Parkinson 2025", t: "Ministério da Saúde. PCDT Doença de Parkinson – Portaria Conjunta SAES/SECTICS nº 16, de 01/08/2025 (DOU 18/09/2025; revoga a Portaria 291/2017), com base no Relatório CONITEC nº 957: critérios MDS 2015; tratamento inicial por perfil (levodopa em > 70 anos, comorbidades ou déficit cognitivo); posologias do Quadro 5; clozapina na psicose (antipsicóticos típicos contraindicados; quetiapina não recomendada); rivastigmina na demência da DP; selegilina descontinuada (trocar por rasagilina) (norma).", f: "F", url: "https://www.gov.br/conitec/pt-br/midias/relatorios/2025/relatorio-de-recomendacao-no-957-parkinson/@@display-file/file"},
  alz_sc_resumo: {s: "PCDT Alzheimer 2025 – resumo SES-SC", t: "SES-SC. Resumo do PCDT da Doença de Alzheimer (Portaria Conjunta SAES/SCTIE nº 27, de 27/11/2025), jan/2026: posologia – donepezila 5 mg/dia → 10 mg após 4–6 semanas; galantamina LP 8 mg por 4 semanas → 16 mg (≥ 4 semanas) → máx. 24 mg (16 mg se insuficiência renal/hepática moderada); rivastigmina oral 3 mg/dia → 6 mg após 2 semanas, depois 9 e 12 mg/dia a cada 2 semanas (máx. 12 mg); adesivo 9 mg → 18 mg após 4 semanas; memantina 5 mg/dia + 5 mg/semana até 20 mg/dia na 4ª semana (10 mg/dia se ClCr < 50) (resumo oficial estadual).", f: "F", url: "https://saude.sc.gov.br/index.php/pt/legislacao/legislacao-geral/portarias/resumo-doenca-de-alzheimer/download"},
  alz_ba_fluxo: {s: "Alzheimer – fluxo de acesso CEAF (SESAB 2026)", t: "SESAB. Fluxo de acesso – Doença de Alzheimer (ago/2026): apresentações do CEAF; documentos (LME, TER, receita, relatório com CID, MEEM e CDR); exames de abertura (TC/RM de crânio, hemograma, Na, K, Ca, glicemia, creatinina, ureia, TSH, sífilis, HIV, B12, ácido fólico, TGO, TGP); renovação semestral; MEEM e CDR após 3–4 meses e depois a cada 6 meses (fluxo estadual da Bahia – o de MG pode diferir).", f: "F", url: "https://www.ba.gov.br/saude/sites/site-sesab/files/2026-08/Fluxo%20de%20Acesso-%20DOEN%C3%87A%20DE%20ALZHEIMER%202.pdf"},
  espen_ger2022: {s: "ESPEN 2022 – nutrição em geriatria", t: "Volkert D et al. ESPEN practical guideline: Clinical nutrition and hydration in geriatrics. Clin Nutr 2022. DOI 10.1016/j.clnu.2022.01.024 – rastrear desnutrição em todos; 30 kcal/kg/dia; proteína ≥ 1 g/kg/dia; alimentos enriquecidos; suplemento oral ≥ 400 kcal e ≥ 30 g de proteína/dia por ≥ 1 mês; evitar restrições dietéticas; textura modificada na disfagia; líquidos ≥ 1,6 L (mulheres) e 2,0 L (homens); nutrição enteral desfavorável na demência grave (diretriz).", f: "F", url: "https://ueaeprints.uea.ac.uk/83181/7/1_s2.0_S0261561422000346_main.pdf"},
  mna_sf: {s: "MNA-SF (Nestlé, versão brasileira)", t: "Nestlé Nutrition Institute. Mini Nutritional Assessment – MNA® forma curta, versão brasileira: 6 itens (ingesta, perda de peso, mobilidade, estresse/doença aguda, problemas neuropsicológicos, IMC ou panturrilha); 12–14 normal, 8–11 risco de desnutrição, 0–7 desnutrido (instrumento validado).", f: "F", url: "https://www.MNA-elderly.com/sites/default/files/2021-10/mna-mini-portuguese-brazil.pdf"},
  sarcf: {s: "SARC-F (Malmstrom 2013)", t: "Malmstrom TK, Morley JE. SARC-F: a simple questionnaire to rapidly diagnose sarcopenia. J Am Med Dir Assoc 2013;14(8):531-2 – 5 itens (força, caminhar, levantar da cadeira, subir escadas, quedas), 0–10; ≥ 4 indica avaliação de sarcopenia (conferido por resumo secundário – Physiopedia/StatPearls) (instrumento).", f: "F", url: "https://www.physio-pedia.com/SARC-F:_A_Simple_Questionnaire_to_Rapidly_Diagnose_Sarcopenia"},
  sbd_idoso2025: {s: "SBD/SBGG 2025 – idoso com diabetes", t: "Moura F et al. O paciente idoso com diabetes – Diretriz SBD 2025, posicionamento conjunto com a SBGG (DOI 10.29327/5660187.2025-13): fenótipo de fragilidade de Fried – perda de peso > 4 kg ou > 5%/ano, exaustão (2 perguntas da CES-D), fraqueza (preensão < p20), lentidão (marcha de 4,6 m < p20), baixa atividade física; ≥ 3 frágil, 1–2 pré-frágil; Escala Clínica de Fragilidade (diretriz; PDF no Drive da usuária).", f: "F", url: "https://diretriz.diabetes.org.br/o-paciente-idoso-com-diabetes/"},
  wfg2022: {s: "World Falls Guidelines 2022", t: "Montero-Odasso M et al. World guidelines for falls prevention and management for older adults: a global initiative. Age Ageing 2022;51(9) – velocidade de marcha ≤ 0,8 m/s (GRADE 1A) ou TUG ≥ 15 s (1B) para estratificar; avaliação cognitiva na avaliação multifatorial; exercício de equilíbrio e multicomponente inclusive em CCL/demência leve-moderada (pontos conferidos em apresentação oficial dos autores; algoritmo completo não aberto) (diretriz).", f: "F", url: "https://www.nottingham.ac.uk/praised/documents/dissemination-event/main-presentations/p8-world-falls-guidelines.pdf"},
  ho_consenso: {s: "Hipotensão ortostática – consenso 2011", t: "Freeman R et al. Consensus statement on the definition of orthostatic hypotension, neurally mediated syncope and the postural tachycardia syndrome. Clin Auton Res 2011;21:69-72 – queda sustentada da PAS ≥ 20 mmHg ou da PAD ≥ 10 mmHg em até 3 min de pé (consenso; não conferido nesta revisão).", f: "C", url: ""},
  ewgsop2: {s: "EWGSOP2 2019 – sarcopenia", t: "Cruz-Jentoft AJ et al. Sarcopenia: revised European consensus on definition and diagnosis (EWGSOP2). Age Ageing 2019;48:16-31 – SARC-F para busca; força (preensão < 27 kg homens, < 16 kg mulheres; ou 5 levantadas da cadeira > 15 s); desempenho (marcha ≤ 0,8 m/s) para gravidade (consenso; não conferido nesta revisão).", f: "C", url: ""},
  icfsr2017: {s: "ICFSR 2017 – fragilidade", t: "Dent E et al. Physical frailty: ICFSR international clinical practice guidelines for identification and management. J Nutr Health Aging 2019 – exercício multicomponente com resistência, revisão de polifarmácia, suplementação proteica/calórica se perda de peso ou desnutrição; vitamina D só se deficiência (diretriz; não conferida nesta revisão).", f: "C", url: ""},
  precos_ger2026: {s: "Preços de mercado – geriatria (CliqueFarma, 11/10/2026)", t: "CliqueFarma, consulta de 11/10/2026: donepezila 10 mg × 30 cp genérico R$ 22,69–53,29; memantina 10 mg × 60 cp genérico R$ 36,49–65,24; mirtazapina 15 mg × 30 cp genérico R$ 41,59–83,83; pramipexol 0,25 mg × 30 cp genérico R$ 25,99–57,63 (preços de varejo; variam por farmácia e data).", f: "F", url: "https://www.cliquefarma.com.br/medicamentos/medicamentos-a-z/cloridrato-de-donepezila-10mg-30-comprimidos-ache-generico"}
});

// grupo renomeado: "Saúde da pessoa idosa"
CONDICOES.forEach(c => { if (c.sistema === "Idoso: cognição e medicamentos") c.sistema = "Saúde da pessoa idosa"; });

const BETIM_GER = "REMUME Betim: levodopa + benserazida 100/25 e 200/50 mg, levodopa + carbidopa 250/25 mg, sertralina 50 mg, lactulose, biperideno 2 mg [F]. Geriatria, neurologia e Farmácia de Minas (CEAF) de referência: confirmar.";

CONDICOES.push(
{
  id: "cr-aga", modulo: "cr", nome: "Consulta da pessoa idosa: avaliação multidimensional na APS", sistema: "Saúde da pessoa idosa", risco: "moderado",
  ciap: "A98", cid: "Z00.0",
  tags: "avaliação geriátrica ampla AGA consulta do idoso IVCF-20 fragilidade funcionalidade AVD Katz Lawton cognição humor GDS quedas marcha nutrição MNA visão audição incontinência polifarmácia cuidador caderneta da pessoa idosa diretivas antecipadas",
  S: "Idade ___ | Queixas ___ | Autopercepção de saúde ___ | AVD básicas/instrumentais ___ | Memória ___ | Humor ___ | Quedas (último ano) ___ | Perda de peso ___ | Continência ___ | Visão/audição ___ | Medicamentos (nº, incluindo comprados) ___ | Internações (6 meses) ___ | Mora com ___ | Cuidador ___ | Vacinas ___.",
  O: "PA sentado e em pé ___ | Peso ___ | IMC ___ | Panturrilha ___ cm | Marcha 4 m ___ s | TUG ___ s | IVCF-20 ___ | 10-CS ___ | GDS-15 ___ | MNA-SF ___.",
  A: "Pessoa idosa ___ (robusta / em risco / frágil – IVCF-20 ___); síndromes geriátricas: ___.",
  P: "- IVCF-20 e plano proporcional ao estrato.\n- Avaliar os domínios alterados (cognição, humor, quedas, nutrição, medicamentos, continência, sentidos).\n- Desprescrição.\n- Vacinas do PNI.\n- Rastreios: suspender os que não trazem mais benefício.\n- Conversar sobre preferências e diretivas antecipadas.\n- Retorno ___.",
  orient: "Traga todos os remédios (inclusive os comprados e chás) nas consultas.\nAvise se tiver queda, esquecimento, perda de peso ou dificuldade para fazer suas atividades.\nAtividade física regular, com exercícios de força e equilíbrio, é o que mais protege a independência.",
  alarme: ["Confusão de início rápido", "Queda com dor ou sem conseguir levantar", "Parou de comer ou beber", "Perda rápida da capacidade de se cuidar"],
  encaminhar: "IVCF-20 ≥ 15 ou declínio rápido sem causa clara → geriatria/eMulti; demais conforme o domínio alterado (ver itens específicos).",
  sus: {nacional: "IVCF-20 no PEC e-SUS APS [F]; vacinas do PNI para ≥ 60 anos [F]; eMulti; atenção domiciliar (AD1 na APS) [F].", betim: BETIM_GER},
  evid: {resumo: "A avaliação multidimensional organizada por um instrumento de rastreio (IVCF-20) concentra a atenção em quem mais se beneficia. Os componentes com maior impacto em desfechos são exercício (quedas e função), revisão de medicamentos, nutrição e identificação precoce de declínio cognitivo e funcional.", certeza: "Moderada (estimada)", fontes: ["ivcf_ms", "ivcf_moraes", "beers2023", "pni_idoso2026", "espen_ger2022", "wfg2022"]},
  mudancas: ["Item novo (Saúde da pessoa idosa)."],
  nv: ["Edição vigente da Caderneta da Pessoa Idosa (MS): não conferida nesta revisão.", "Referência de geriatria em Betim."],
  guia: {
    resumo: "Uma consulta de idoso rende quando começa pelo **IVCF-20** (no PEC) e termina com **um plano curto**: o que tirar (remédios), o que acrescentar (exercício, proteína, vacina) e o que investigar (só os domínios alterados).",
    calcs: ["sc:ivcf", "sc:gds15", "sc:barthel", "sc:mnasf", "sc:sarcf"],
    secoes: [
      {t: "Estratificar", b: [
        {calc: "sc:ivcf"},
        {fluxo: [
          {t: "IVCF-20 em toda pessoa ≥ 60 anos (repetir anualmente ou se houver mudança)"},
          {t: "Estrato", ramos: [
            {r: "0–6 (robusto)", n: [{t: "Prevenção: exercício, vacinas, rastreios proporcionais, revisão de remédios", k: "ok"}]},
            {r: "7–14 (em risco)", n: [{t: "Investigar os domínios pontuados (abaixo) e intervir", k: "warn"}]},
            {r: "≥ 15 (frágil)", n: [{t: "Plano de cuidados compartilhado (eMulti/geriatria), cuidador, avaliar VD", k: "stop"}]}]}
        ], nota: "Estratos do manual do IVCF-20 no PEC [F]; condutas por estrato: inferência clínica [I]."},
        {ref: ["ivcf_ms", "ivcf_moraes"]}]},
      {t: "Domínios e ferramentas", b: [
        {tab: {h: ["Domínio", "Ferramenta rápida", "Se alterado"], r: [
          ["Cognição", "10-CS / QMC8 [F]", "Ver 'Declínio cognitivo e demência' [F]"],
          ["Humor", "GDS-15 (≥ 6) [F]", "Ver 'Depressão'; sertralina na REMUME [F]"],
          ["Mobilidade e quedas", "Marcha 4 m (≤ 0,8 m/s) ou TUG (≥ 15 s) [F]", "Ver 'Prevenção de quedas' [F]"],
          ["Nutrição", "MNA-SF; panturrilha < 31 cm [F]", "Ver 'Inapetência e desnutrição' [F]"],
          ["Força/sarcopenia", "SARC-F (≥ 4) [F]", "Ver 'Fragilidade e sarcopenia' [F]"],
          ["Medicamentos", "≥ 5 fármacos; Beers/STOPP [F]", "Ver 'Polifarmácia e desprescrição' [F]"],
          ["Funcionalidade", "Barthel (AVD básicas) [C]", "eMulti; cuidador; AD1"],
          ["Visão e audição", "Pergunta + teste do sussurro / Snellen [C]", "Oftalmologia (catarata) / audiologia"],
          ["Continência", "Pergunta direta [C]", "Ver 'Incontinência urinária'"]]}},
        {ref: ["ivcf_ms", "gds_br", "mna_sf", "sarcf", "wfg2022", "beers2023"]}]},
      {t: "O que parar e o que manter", b: [
        {ul: [
          "Rastreios com limite de idade no SUS: mama até 74 anos, colo do útero até 64 anos (com exames anteriores normais), colorretal até 75 anos – depois, só sintomas ou decisão individual [C].",
          "Metas mais flexíveis em frágeis: HbA1c e PA individualizadas para evitar hipoglicemia, hipotensão e quedas [C].",
          "Vacinas do PNI para ≥ 60 anos: influenza anual, COVID-19, hepatite B, dT; VPP23 em grupos específicos [F].",
          "Conversar sobre o que importa para a pessoa e registrar diretivas antecipadas [C]."]},
        {ref: ["pni_idoso2026"]}]}
    ]}
},
{
  id: "cr-alzheimer", modulo: "cr", nome: "Doença de Alzheimer: tratamento, sintomas comportamentais e cuidador", sistema: "Saúde da pessoa idosa", risco: "moderado",
  ciap: "P70", cid: "G30 · F00",
  tags: "Alzheimer demência donepezila galantamina rivastigmina adesivo memantina titulação CEAF LME MEEM CDR sintomas comportamentais agitação agressividade antipsicótico cuidador sobrecarga",
  S: "Diagnóstico de Alzheimer desde ___ | CDR ___ | MEEM atual ___ (escolaridade ___ anos) | Em uso de ___ (dose ___, desde ___) | Efeitos adversos (náusea, vômitos, perda de peso, tontura, síncope, insônia) ___ | Sintomas comportamentais (agitação, apatia, alucinações, insônia, deambulação) ___ | Gatilhos ___ | Cuidador e sobrecarga ___ | Quedas ___.",
  O: "PA ___ | FC ___ (bradicardia?) | Peso ___ | MEEM ___ | Exame físico (dor, constipação, retenção, infecção) ___.",
  A: "Doença de Alzheimer ___ (leve / moderada / grave – CDR ___); tratamento ___; sintomas comportamentais ___.",
  P: "- Manter/ajustar anticolinesterásico ou memantina conforme PCDT.\n- MEEM e CDR em 3–4 meses do início e depois a cada 6 meses; renovar LME semestralmente.\n- Sintomas comportamentais: procurar causa (dor, infecção, constipação, ambiente, remédios) e medidas não farmacológicas.\n- Rever anticolinérgicos e benzodiazepínicos.\n- Apoio ao cuidador; plano de segurança.",
  rx: [
    {trilha: "ambos", titulo: "Donepezila (CEAF – PCDT 2025; leve a grave)", texto: "USO ORAL\n1. Donepezila 5 mg ______ 30 comprimidos\n   Tomar 1 comprimido ao dia por 4 a 6 semanas.\n   Depois: donepezila 10 mg, 1 comprimido ao dia.", dose: "F", nota: "PCDT 2025 (resumo SES-SC) [F]. Retirar pelo CEAF (Farmácia de Minas) com LME; sem acesso, genérico de 10 mg × 30 cp custa R$ 23–53 (out/2026) [F]. Insônia é efeito adverso frequente; atenção a bradicardia e síncope [F/C]."},
    {trilha: "ambos", titulo: "Rivastigmina adesivo (CEAF; leve a moderada)", texto: "USO TRANSDÉRMICO\n1. Rivastigmina 9 mg adesivo ______ 30 adesivos\n   Aplicar 1 adesivo a cada 24 horas, em local diferente (costas, braço, tórax), retirando o anterior.\n   Após 4 semanas: rivastigmina 18 mg adesivo, 1 a cada 24 horas.", dose: "F", nota: "PCDT 2025 [F]: só um adesivo por vez. Menos náusea que a forma oral (Cochrane citada no relatório) [F]. Oral: 3 mg/dia → 6 mg após 2 semanas, depois 9 e 12 mg/dia a cada 2 semanas [F]."},
    {trilha: "ambos", titulo: "Galantamina LP (CEAF; leve a moderada)", texto: "USO ORAL\n1. Galantamina 8 mg cápsula de liberação prolongada ______ 30 cápsulas\n   Tomar 1 cápsula ao dia, pela manhã, por 4 semanas.\n   Depois: 16 mg ao dia por pelo menos 4 semanas; dose máxima 24 mg ao dia.", dose: "F", nota: "PCDT 2025 [F]: máximo 16 mg/dia em insuficiência renal ou hepática moderada; contraindicada na grave [F]."},
    {trilha: "ambos", titulo: "Memantina (CEAF; moderada com IAChE, ou grave)", texto: "USO ORAL\n1. Memantina 10 mg ______ 60 comprimidos\n   Semana 1: ½ comprimido ao dia (5 mg).\n   Semana 2: ½ comprimido 2 vezes ao dia.\n   Semana 3: 1 comprimido + ½ comprimido ao dia.\n   A partir da semana 4: 1 comprimido 2 vezes ao dia (20 mg).", dose: "F", nota: "PCDT 2025 [F]: 10 mg/dia se ClCr < 50 mL/min. Genérico 10 mg × 60 cp: R$ 36–65 no varejo (out/2026) [F]."}
  ],
  orient: "O remédio não cura, mas pode ajudar a manter a memória e a autonomia por mais tempo. Os efeitos aparecem em semanas a meses.\nNáusea, vômitos, perda de apetite, tontura ou desmaio: avise a equipe.\nRotina previsível, boa luz, pouco barulho e atividades de que a pessoa gosta ajudam a reduzir a agitação.\nQuem cuida também precisa de cuidado: procure a UBS.",
  alarme: ["Desmaio, pulso muito lento ou quedas novas", "Confusão que piora em horas ou dias (delirium)", "Agressividade com risco para a pessoa ou para outros", "Parou de comer ou beber"],
  encaminhar: "Início do tratamento pelo CEAF conforme fluxo estadual (laudo LME); dúvida diagnóstica, início < 65 anos, progressão rápida → neurologia/geriatria. Sintomas comportamentais graves refratários → geriatria/psiquiatria. Delirium → mesmo dia.",
  sus: {nacional: "Donepezila, galantamina, rivastigmina (oral e adesivo) e memantina no Componente Especializado (PCDT 2025), com LME e renovação semestral [F]. Fármacos para sintomas comportamentais não incorporados para essa indicação [F].", betim: "Fluxo da Farmácia de Minas (CEAF) e neurologia/geriatria de Betim: confirmar."},
  evid: {resumo: "Inibidores da acetilcolinesterase e memantina têm benefício pequeno e sintomático em cognição e função global; a troca entre anticolinesterásicos só se justifica por intolerância, e perda de peso é efeito da classe. Para sintomas comportamentais, medidas não farmacológicas são primeira linha; antipsicóticos aumentam mortalidade e AVC na demência.", certeza: "Moderada", fontes: ["pcdt_alz2025", "alz_sc_resumo", "alz_ba_fluxo", "beers2023", "precos_ger2026"]},
  mudancas: ["Item novo, com posologia do PCDT 2025 (resumo oficial da SES-SC)."],
  nv: ["Documentos e exames exigidos pela Farmácia de Minas (MG) – o fluxo citado é o da Bahia.", "Doses de antidepressivos e antipsicóticos para sintomas comportamentais: fora do PCDT; não detalhadas aqui."],
  guia: {
    resumo: "O que mais muda a vida na doença de Alzheimer é **o plano com a família**. O remédio tem **benefício pequeno**: titule devagar, **reavalie em 3–4 meses** e **troque só por intolerância**. Agitação é sintoma de algo (dor, constipação, infecção, ambiente, remédio) até prova em contrário.",
    calcs: ["alz", "sc:gds15", "sc:barthel"],
    secoes: [
      {t: "Do diagnóstico ao CEAF", b: [
        {fluxo: [
          {t: "Demência provável (investigação no item 'Declínio cognitivo e demência')"},
          {t: "MEEM (pela escolaridade) + CDR → critério do PCDT (calculadora)", k: "warn"},
          {t: "Estágio", ramos: [
            {r: "Leve a moderada (CDR 1–2)", n: [{t: "Donepezila, galantamina ou rivastigmina", k: "ok"}]},
            {r: "Moderada (CDR 2)", n: [{t: "Memantina isolada ou + anticolinesterásico", k: "ok"}]},
            {r: "Grave (CDR 3)", n: [{t: "Donepezila, memantina ou a associação", k: "ok"}]}]},
          {t: "LME + exames de abertura; MEEM e CDR em 3–4 meses e depois a cada 6 meses; renovação semestral"},
          {t: "Intolerância → trocar de anticolinesterásico; perda de peso isolada não justifica troca", k: "warn"}
        ], nota: "PCDT Alzheimer 2025 (relatório CONITEC e fluxo SESAB) [F]."},
        {calc: "alz"},
        {ref: ["pcdt_alz2025", "alz_ba_fluxo"]}]},
      {t: "Titulação (PCDT 2025)", b: [
        {tab: {h: ["Fármaco", "Início", "Aumento", "Máximo"], r: [
          ["Donepezila", "5 mg/dia [F]", "10 mg após 4–6 semanas [F]", "10 mg/dia [F]"],
          ["Galantamina LP", "8 mg/dia por 4 semanas [F]", "16 mg por ≥ 4 semanas [F]", "24 mg/dia (16 mg em IR/IH moderada) [F]"],
          ["Rivastigmina oral", "3 mg/dia (1,5 mg 12/12 h) [F]", "+3 mg/dia a cada 2 semanas [F]", "12 mg/dia [F]"],
          ["Rivastigmina adesivo", "9 mg/24 h [F]", "18 mg/24 h após 4 semanas [F]", "1 adesivo por vez [F]"],
          ["Memantina", "5 mg/dia [F]", "+5 mg/semana [F]", "20 mg/dia (10 mg se ClCr < 50) [F]"]]},
         nota: "Exclusões dos anticolinesterásicos: insuficiência ou arritmia cardíaca grave, distúrbio de condução, asma/DPOC grave descompensada; galantamina na insuficiência hepática/renal grave [F]. Efeitos comuns: náusea, vômitos, perda de peso, insônia (donepezila), bradicardia e síncope [F/C]."},
        {ref: ["alz_sc_resumo", "pcdt_alz2025"]}]},
      {t: "Sintomas comportamentais e psicológicos", b: [
        {fluxo: [
          {t: "Agitação, agressividade, alucinação, insônia, deambulação"},
          {t: "Causa tratável? Dor, constipação, retenção urinária, infecção, desidratação, delirium, medicamentos (anticolinérgicos, benzodiazepínicos)", k: "warn"},
          {t: "Ambiente e cuidador: rotina, luz, ruído, atividades com significado, como o cuidador reage"},
          {t: "Risco para a pessoa ou outros, ou sofrimento intenso apesar disso?", ramos: [
            {r: "Sim", n: [{t: "Discutir com geriatria/psiquiatria; se antipsicótico, menor dose e menor tempo, com plano de retirada", k: "stop"}]},
            {r: "Não", n: [{t: "Manter medidas não farmacológicas e reavaliar", k: "ok"}]}]}
        ], nota: "PCDT 2025 prioriza medidas não farmacológicas e não incorporou fármacos para esses sintomas [F]; antipsicóticos aumentam mortalidade e AVC na demência (Beers 2023) [F]."},
        {perola: {t: "Antes do haloperidol, procure a dor", x: "Pessoas com demência raramente dizem 'estou com dor': agitação noturna, gemência e recusa de cuidado podem ser dor, fecaloma ou bexigoma. Analgesia regular com paracetamol pode reduzir a agitação.", d: "menos antipsicótico e menos quedas.", l: "C"}},
        {ref: ["pcdt_alz2025", "beers2023"]}]},
      {t: "Cuidador e segurança", b: [
        {ul: [
          "Avaliar sobrecarga e depressão do cuidador em toda consulta; oferecer grupo e apoio da eMulti [C].",
          "Segurança: direção de veículos, fogão, medicamentos guardados, identificação (pulseira) se deambula [C].",
          "Planejamento antecipado: finanças, curatela quando necessário, preferências de fim de vida [C].",
          "Fase avançada: cuidados paliativos; alimentação por sonda tem relação risco-benefício desfavorável na demência grave [F]."]},
        {ref: ["espen_ger2022", "pncp2024"]}]}
    ]}
},
{
  id: "cr-parkinson", modulo: "cr", nome: "Doença de Parkinson na APS: diagnóstico, levodopa e sintomas não motores", sistema: "Saúde da pessoa idosa", risco: "moderado",
  ciap: "N87", cid: "G20",
  tags: "Parkinson parkinsonismo tremor de repouso bradicinesia rigidez levodopa carbidopa benserazida pramipexol rasagilina amantadina entacapona hipotensão ortostática constipação psicose alucinação clozapina quetiapina demência rivastigmina parkinsonismo medicamentoso metoclopramida flunarizina cinarizina Farmácia Popular",
  alerta: "Não suspender a levodopa de forma abrupta (risco de síndrome semelhante à neuroléptica maligna) [C]. Evitar haloperidol e metoclopramida na doença de Parkinson.",
  S: "Início dos sintomas ___ (lado ___) | Tremor de repouso ___ | Lentidão ___ | Rigidez ___ | Marcha/quedas ___ | Olfato, constipação, sono (atua sonhos), humor ___ | Alucinações ___ | Tontura ao levantar ___ | Medicamentos que causam parkinsonismo (metoclopramida, bromoprida, haloperidol, risperidona, flunarizina, cinarizina) ___ | Em uso de levodopa ___ (horários, flutuações, discinesias) ___.",
  O: "PA deitado ___ e em pé (3 min) ___ | Tremor ___ | Bradicinesia (toque de dedos) ___ | Rigidez ___ | Marcha e reflexos posturais ___ | Sinais de alerta (simetria, quedas precoces, disautonomia grave, sinais piramidais/cerebelares) ___ | MEEM ___.",
  A: "Parkinsonismo ___ (doença de Parkinson provável / suspeita de parkinsonismo medicamentoso / atípico); estágio ___; sintomas não motores ___.",
  P: "- Suspender medicamentos que causam parkinsonismo.\n- Encaminhar à neurologia para confirmação; iniciar levodopa se incapacidade funcional e espera prolongada (> 70 anos, comorbidades ou déficit cognitivo).\n- Hipotensão ortostática, constipação, humor, sono e quedas.\n- Fisioterapia/eMulti.",
  rx: [
    {trilha: "ambos", titulo: "Levodopa + benserazida (início)", texto: "USO ORAL\n1. Levodopa 100 mg + benserazida 25 mg ______ 60 comprimidos\n   Tomar 1 comprimido 2 vezes ao dia.\n   (Titulação conforme resposta; máximo de levodopa 2.000 mg/dia.)", dose: "F", nota: "PCDT 2025: dose inicial 200/50 mg/dia em ≥ 2 tomadas [F]. Na REMUME de Betim (100/25 e 200/50) e grátis na Farmácia Popular (100/25) [F]."},
    {trilha: "ambos", titulo: "Levodopa + carbidopa (alternativa)", texto: "USO ORAL\n1. Levodopa 250 mg + carbidopa 25 mg ______ 30 comprimidos\n   Tomar ½ comprimido 2 vezes ao dia.\n   (Titulação conforme resposta; máximo de levodopa 2.000 mg/dia.)", dose: "F", nota: "PCDT 2025: início 250/25 mg/dia em ≥ 2 tomadas [F]. REMUME Betim e Farmácia Popular (250/25) [F]."},
    {trilha: "fora", titulo: "Pramipexol (CEAF; preferir em mais jovens)", texto: "USO ORAL\n1. Pramipexol 0,125 mg ______ 90 comprimidos\n   Tomar 1 comprimido 3 vezes ao dia (0,375 mg/dia).\n   (Titulação pelo neurologista; máximo 4,5 mg/dia.)", dose: "F", nota: "PCDT 2025: início 0,375 mg/dia em 3 doses [F]. CEAF; varejo genérico 0,25 mg × 30 cp R$ 26–58 (out/2026) [F]. Em idosos, maior risco de sonolência, alucinações e compulsões [C]."}
  ],
  orient: "O tratamento melhora a lentidão e a rigidez; tome a levodopa nos horários combinados, sem pular doses e sem parar de repente.\nLevante-se devagar (sente antes de ficar de pé), beba bastante água e aumente fibras para o intestino.\nExercício regular e fisioterapia ajudam a marcha e o equilíbrio.\nAvise se houver alucinações, confusão, quedas ou movimentos involuntários.",
  alarme: ["Febre, rigidez intensa e confusão após parar ou reduzir a levodopa", "Quedas repetidas", "Alucinações ou confusão novas", "Engasgos frequentes ao comer"],
  encaminhar: "Toda suspeita → neurologia para confirmação e plano (fluxo e prioridade conforme regulação). Sinais de alerta (parkinsonismo atípico), início < 50 anos, flutuações motoras ou discinesias → neurologia. Psicose → neurologia/psiquiatria (clozapina pelo CEAF).",
  sus: {nacional: "Levodopa + benserazida e levodopa + carbidopa no Componente Básico e na Farmácia Popular [F]; pramipexol, rasagilina, amantadina, entacapona, triexifenidil, clozapina e rivastigmina no Componente Especializado (PCDT 2025) [F]; biperideno no Básico [F].", betim: BETIM_GER},
  evid: {resumo: "A levodopa é o fármaco mais eficaz para os sintomas motores e o preferido em > 70 anos, com comorbidades ou déficit cognitivo (PCDT 2025); agonistas dopaminérgicos e IMAO-B são alternativas em mais jovens. Sintomas não motores (hipotensão ortostática, constipação, depressão, psicose, demência) determinam grande parte da incapacidade e são manejáveis na APS.", certeza: "Moderada", fontes: ["pcdt_parkinson2025", "rename", "remume", "fp_elenco2026", "precos_ger2026", "beers2023"]},
  idealsus: {ideal: "Confirmação com neurologista; levodopa como base, agonista ou IMAO-B em mais jovens; fisioterapia especializada.", sus: "Levodopa sai na UBS de Betim e de graça na Farmácia Popular; pramipexol e demais via CEAF; neurologia pela regulação.", ponte: "Com suspeita clara, incapacidade funcional e espera longa pela neurologia, a levodopa pode ser iniciada na APS em quem tem > 70 anos ou comorbidades, enquanto o encaminhamento corre (inferência clínica)."},
  mudancas: ["Item novo, com o PCDT Doença de Parkinson 2025 (Portaria Conjunta nº 16/2025)."],
  nv: ["Fluxo e prioridade da neurologia em Betim.", "Início de levodopa na APS antes da avaliação do neurologista: inferência clínica, não regra do PCDT."],
  guia: {
    resumo: "Antes de dizer Parkinson, **pergunte pelos remédios** (metoclopramida, bromoprida, flunarizina, cinarizina, haloperidol, risperidona). Confirmado o quadro, a **levodopa** é a base no idoso – e sai **na UBS e de graça na Farmácia Popular**. O que mais incapacita costuma ser **não motor**: tontura ao levantar, constipação, humor, alucinações e quedas.",
    calcs: ["ho"],
    secoes: [
      {t: "Suspeita e diagnóstico", b: [
        {fluxo: [
          {t: "Bradicinesia + tremor de repouso e/ou rigidez"},
          {t: "Usa fármaco que causa parkinsonismo?", ramos: [
            {r: "Sim", n: [{t: "Suspender/trocar e reavaliar em semanas a meses", k: "warn"}]},
            {r: "Não", n: [{t: "Procurar sinais de alerta"}]}]},
          {t: "Sinais de alerta (simétrico, quedas precoces, disautonomia grave precoce, disfunção bulbar, sinais piramidais, progressão rápida)?", ramos: [
            {r: "Sim", n: [{t: "Parkinsonismo atípico provável → neurologia com prioridade", k: "stop"}]},
            {r: "Não", n: [{t: "Doença de Parkinson provável → neurologia; tratar se incapacidade", k: "ok"}]}]}
        ], nota: "Critérios MDS 2015 e sinais de alerta conforme PCDT 2025 [F]; lista de fármacos indutores [C]."},
        {perola: {t: "Tontura no idoso não é cinarizina", x: "Flunarizina e cinarizina, muito usadas para tontura, causam parkinsonismo e depressão em idosos. Metoclopramida e bromoprida também. Retirar o fármaco é o tratamento – e evita um diagnóstico errado para a vida toda.", d: "menos parkinsonismo iatrogênico e quedas.", l: "C"}},
        {ref: ["pcdt_parkinson2025"]}]},
      {t: "Tratamento motor (PCDT 2025)", b: [
        {tab: {h: ["Perfil", "Escolha", "Acesso"], r: [
          ["> 70 anos, comorbidades ou déficit cognitivo", "Levodopa + carbidopa ou benserazida [F]", "UBS (REMUME) e Farmácia Popular, grátis [F]"],
          ["Mais jovem, risco de complicações motoras", "Pramipexol ou rasagilina [F]", "CEAF; pramipexol genérico R$ 26–58/30 cp [F]"],
          ["Flutuações motoras", "Associar à levodopa: pramipexol, rasagilina, entacapona ou triexifenidil [F]", "CEAF – neurologia"],
          ["Discinesias", "Amantadina [F]", "CEAF – neurologia"]]},
         nota: "Selegilina foi descontinuada no Brasil: trocar por rasagilina [F]. Anticolinérgicos (triexifenidil, biperideno) pioram cognição e quedas no idoso – evitar [C]."},
        {ref: ["pcdt_parkinson2025", "fp_elenco2026", "precos_ger2026"]}]},
      {t: "Sintomas não motores na APS", b: [
        {calc: "ho"},
        {tab: {h: ["Sintoma", "Conduta"], r: [
          ["Hipotensão ortostática", "Evitar grandes refeições, álcool, calor e hipotensores desnecessários; elevar a cabeceira, meias de compressão, mais sal se sintomática [F]"],
          ["Constipação", "Líquidos, fibras, exercício; lactulose (REMUME); reduzir anticolinérgicos [F]"],
          ["Psicose/alucinações", "Rever anticolinérgicos, agonistas, IMAO-B e COMT; clozapina é a escolha (CEAF, hemograma); antipsicóticos típicos contraindicados; quetiapina não recomendada [F]"],
          ["Demência da DP", "Rivastigmina (CEAF) [F]"],
          ["Depressão", "Rastrear (GDS-15); tratar como na depressão do idoso [C]"],
          ["Quedas e disfagia", "Fisioterapia, avaliação de quedas, fonoaudiologia [C]"]]}},
        {ref: ["pcdt_parkinson2025"]}]}
    ]}
},
{
  id: "cr-inapetencia", modulo: "cr", nome: "Inapetência, perda de peso e desnutrição na pessoa idosa", sistema: "Saúde da pessoa idosa", risco: "moderado",
  ciap: "T03 · T08", cid: "R63.0 · R63.4 · E44",
  tags: "inapetência anorexia do envelhecimento perda de apetite perda de peso desnutrição MNA-SF panturrilha disfagia dentição suplemento nutricional proteína mirtazapina megestrol idoso",
  S: "Perda de apetite há ___ | Perda de peso ___ kg em ___ meses | Ingesta (refeições/dia, proteína) ___ | Mastigação/dentição/prótese ___ | Engasgos/tosse ao comer ___ | Humor ___ | Memória ___ | Dor ___ | Náusea, constipação, dor abdominal ___ | Medicamentos (nº; digoxina, metformina, ISRS, anticolinesterásico, opioide, ferro) ___ | Dieta restritiva prescrita ___ | Quem prepara a comida, renda, sozinho ___.",
  O: "Peso ___ (anterior ___) | IMC ___ | Panturrilha ___ cm | MNA-SF ___ | Boca e dentes ___ | Exame abdominal ___ | Sinais de câncer ___.",
  A: "Inapetência com ___ (risco de desnutrição / desnutrição – MNA-SF ___); causas prováveis: ___.",
  P: "- MNA-SF e peso seriado.\n- Procurar causas (boca, deglutição, humor, cognição, remédios, doença orgânica, social).\n- Exames dirigidos.\n- Liberar dietas restritivas; enriquecer refeições; suplemento oral se risco/desnutrição.\n- Rever medicamentos.\n- Retorno em ___ com peso.",
  rx: [
    {trilha: "fora", titulo: "Inapetência com depressão: mirtazapina (fora da REMUME)", texto: "USO ORAL\n1. Mirtazapina 15 mg ______ 30 comprimidos\n   Tomar ___ comprimido à noite.", dose: "NV", nota: "Opção quando há depressão e insônia associadas [C] – dose inicial no idoso: conferir bula. Não identificada na REMUME de Betim [F]; varejo genérico 15 mg × 30 cp R$ 42–84 (out/2026) [F]. Sem depressão, não há fármaco orexígeno com benefício claro em desfechos; megestrol e ciproeptadina são potencialmente inapropriados no idoso [C]."}
  ],
  orient: "Faça refeições menores e mais vezes ao dia, com proteína em todas (ovo, leite, feijão, carne, frango).\nAcrescente azeite, leite em pó ou ovo às preparações para aumentar calorias sem aumentar volume.\nComa sentado, com calma e, se possível, acompanhado.\nPese-se todo mês ou peça para pesar na UBS.",
  alarme: ["Perda de peso rápida (mais de 3 kg em 3 meses) ou recusa total de comida", "Engasgos frequentes, tosse ao comer ou pneumonias", "Sangue nas fezes, vômitos ou dor abdominal persistente", "Sem conseguir beber água ou urinando pouco"],
  encaminhar: "Suspeita de câncer, disfagia orofaríngea, perda de peso sem causa após investigação inicial → avaliação especializada; fonoaudiologia e nutrição (eMulti); saúde bucal.",
  sus: {nacional: "Avaliação nutricional, eMulti (nutrição, fonoaudiologia) e saúde bucal na APS [C]. Suplementos nutricionais orais: dependem de programas municipais/estaduais de dietas especiais [NV].", betim: "Programa de dietas/suplementos especiais de Betim: confirmar critérios e fluxo."},
  evid: {resumo: "Todos os idosos devem ser rastreados para desnutrição com instrumento validado; meta de cerca de 30 kcal/kg e ≥ 1 g/kg/dia de proteína; alimentos enriquecidos e suplemento oral (≥ 400 kcal e ≥ 30 g de proteína/dia por ≥ 1 mês) melhoram ingestão e peso. Restrições dietéticas devem ser evitadas. Orexígenos não têm benefício claro em desfechos e alguns são potencialmente inapropriados.", certeza: "Moderada", fontes: ["espen_ger2022", "mna_sf", "beers2023", "remume", "precos_ger2026"]},
  idealsus: {ideal: "Enriquecimento da dieta e suplemento oral hiperproteico; mirtazapina se depressão associada.", sus: "Orientação nutricional e eMulti; suplementos dependem de programa municipal; mirtazapina não está na REMUME (sertralina está).", ponte: "Enriquecer a comida de casa (leite em pó, ovo, azeite) custa pouco e segue a diretriz; se houver depressão, sertralina da REMUME é opção; mirtazapina se a família puder comprar."},
  mudancas: ["Item novo (Saúde da pessoa idosa)."],
  nv: ["Fluxo de suplementos nutricionais orais em Betim.", "Dose inicial de mirtazapina no idoso: conferir bula."],
  guia: {
    resumo: "Inapetência no idoso quase nunca é 'da idade'. Rode o **MNA-SF**, procure os **D's** (dentes, deglutição, depressão, demência, drogas/remédios, doença, dinheiro/solidão) e **libere a dieta**: no idoso que emagrece, restrição de sal, açúcar ou gordura costuma fazer mais mal do que bem.",
    calcs: ["sc:mnasf", "sc:gds15"],
    secoes: [
      {t: "Rastrear e investigar", b: [
        {calc: "sc:mnasf"},
        {fluxo: [
          {t: "MNA-SF (com peso seriado)"},
          {t: "Resultado", ramos: [
            {r: "12–14", n: [{t: "Normal: reavaliar anualmente ou se mudar", k: "ok"}]},
            {r: "8–11", n: [{t: "Risco: causas + enriquecer dieta; reavaliar em 1–3 meses", k: "warn"}]},
            {r: "0–7", n: [{t: "Desnutrido: causas + suplemento oral + eMulti; acompanhar de perto", k: "stop"}]}]},
          {t: "Causas: boca/dentes, disfagia, depressão, cognição, medicamentos, doença orgânica (câncer, IC, DRC, DPOC, tireoide), isolamento e renda"},
          {t: "Exames dirigidos: hemograma, glicemia, creatinina, eletrólitos, TSH, PCR; demais conforme sinais (endoscopia/colonoscopia, imagem)", k: "warn"}
        ], nota: "Faixas do MNA-SF [F]; rastreio universal (ESPEN 2022) [F]; lista de causas e exames [C]."},
        {ref: ["mna_sf", "espen_ger2022"]}]},
      {t: "Tratar", b: [
        {tab: {h: ["Medida", "Meta / como"], r: [
          ["Energia", "≈ 30 kcal/kg/dia, ajustada ao estado nutricional e à atividade [F]"],
          ["Proteína", "≥ 1 g/kg/dia; mais em doença aguda [F]"],
          ["Enriquecimento", "Acrescentar óleo, manteiga, leite em pó, ovo às preparações [F]"],
          ["Suplemento oral", "≥ 400 kcal e ≥ 30 g de proteína/dia por ≥ 1 mês, reavaliando mensalmente [F]"],
          ["Restrições", "Evitar dietas restritivas (sal, açúcar, gordura) que reduzam a ingestão [F]"],
          ["Disfagia", "Textura modificada enriquecida + fonoaudiologia [F]"],
          ["Hidratação", "≥ 1,6 L/dia (mulheres) e ≥ 2,0 L/dia (homens), salvo restrição clínica [F]"],
          ["Demência grave", "Alimentação assistida por via oral; sonda tem relação risco-benefício desfavorável [F]"]]}},
        {perola: {t: "Tire antes de acrescentar", x: "Digoxina, metformina, ISRS, anticolinesterásicos, opioides, ferro oral e polifarmácia reduzem o apetite. Revisar a lista de remédios costuma devolver mais apetite que qualquer estimulante.", d: "mais ingestão sem novo fármaco.", l: "C"}},
        {ref: ["espen_ger2022"]}]},
      {t: "Remédios para apetite: acesso e cautela", b: [
        {ul: [
          "Sem depressão: não há orexígeno com benefício claro em desfechos; megestrol e ciproeptadina são potencialmente inapropriados em idosos [C].",
          "Com depressão: sertralina (REMUME Betim) ou mirtazapina (compra: genérico R$ 42–84/30 cp em out/2026), que pode ajudar sono e apetite [F/C].",
          "Corticoide: só em cuidados paliativos, por tempo curto [C]."]},
        {ref: ["remume", "precos_ger2026", "beers2023"]}]}
    ]}
},
{
  id: "cr-fragilidade", modulo: "cr", nome: "Fragilidade e sarcopenia", sistema: "Saúde da pessoa idosa", risco: "moderado",
  ciap: "A05 · L99", cid: "R54 · M62.84",
  tags: "fragilidade frágil pré-frágil fenótipo de Fried sarcopenia SARC-F força de preensão sentar e levantar velocidade de marcha panturrilha exercício resistido proteína IVCF-20",
  S: "Perda de peso ___ | Cansaço/exaustão ___ | Fraqueza (abrir potes, carregar sacolas) ___ | Lentidão ao caminhar ___ | Atividade física ___ | Quedas ___ | Internações ___ | Medicamentos ___ | Alimentação/proteína ___.",
  O: "Peso ___ | IMC ___ | Panturrilha ___ cm | Marcha 4 m ___ s | Senta-levanta 5× ___ s | TUG ___ s | SARC-F ___ | IVCF-20 ___.",
  A: "Pessoa idosa ___ (robusta / pré-frágil / frágil); sarcopenia ___ (provável / confirmada / ausente).",
  P: "- Exercício multicomponente com resistência e equilíbrio (eMulti/academia da saúde).\n- Proteína ≥ 1 g/kg/dia.\n- Revisar medicamentos.\n- Tratar causas (depressão, doença crônica descompensada, desnutrição).\n- Vitamina D só se deficiência.\n- Reavaliar em 3–6 meses.",
  orient: "Músculo se recupera com exercício em qualquer idade: exercícios de força 2 a 3 vezes por semana e caminhada.\nInclua proteína em todas as refeições.\nLevante-se da cadeira sem usar as mãos algumas vezes ao dia, com segurança.",
  alarme: ["Quedas", "Perda de peso rápida", "Não conseguir mais sair de casa ou se cuidar"],
  encaminhar: "Fragilidade com declínio rápido ou múltiplas síndromes geriátricas → geriatria/eMulti. Fisioterapia para programa de exercício supervisionado.",
  sus: {nacional: "IVCF-20 no PEC [F]; eMulti (fisioterapia, educação física, nutrição) e Academia da Saúde, conforme oferta local [C].", betim: "Grupos de exercício e Academia da Saúde de Betim: confirmar."},
  evid: {resumo: "Fragilidade (fenótipo de Fried: ≥ 3 de perda de peso, exaustão, fraqueza, lentidão e baixa atividade) prediz quedas, incapacidade, internação e morte; é parcialmente reversível. Exercício multicomponente com resistência e adequação proteica são as intervenções com melhor evidência; SARC-F ajuda a identificar sarcopenia, confirmada por força e desempenho.", certeza: "Moderada", fontes: ["sbd_idoso2025", "sarcf", "ewgsop2", "icfsr2017", "espen_ger2022", "ivcf_ms"]},
  mudancas: ["Item novo (Saúde da pessoa idosa)."],
  nv: ["Oferta de exercício supervisionado (eMulti/Academia da Saúde) em Betim."],
  guia: {
    resumo: "**Fragilidade é parcialmente reversível**. Identifique com IVCF-20 ou fenótipo de Fried, procure **sarcopenia** (SARC-F, panturrilha, senta-levanta) e prescreva o que funciona: **exercício de força e equilíbrio + proteína + desprescrição**.",
    calcs: ["sc:sarcf", "sc:ivcf"],
    secoes: [
      {t: "Identificar", b: [
        {tab: {h: ["Critério de Fried", "Como medir"], r: [
          ["Perda de peso", "> 4 kg ou > 5% no último ano [F]"],
          ["Exaustão", "2 perguntas da CES-D (esforço para tarefas; não conseguir iniciar atividades) [F]"],
          ["Fraqueza", "Preensão palmar < p20 [F]"],
          ["Lentidão", "Marcha de 4,6 m < p20 [F]"],
          ["Baixa atividade física", "Gasto < p20 (questionário) [F]"]]},
         nota: "≥ 3 = frágil; 1–2 = pré-frágil [F]. Na APS sem dinamômetro, IVCF-20, velocidade de marcha (≤ 0,8 m/s) e panturrilha (< 31 cm) são substitutos práticos [F/C]."},
        {ref: ["sbd_idoso2025", "ivcf_ms"]}]},
      {t: "Sarcopenia", b: [
        {calc: "sc:sarcf"},
        {fluxo: [
          {t: "SARC-F ≥ 4 ou panturrilha < 31 cm ou queixa de fraqueza"},
          {t: "Força: preensão (< 27 kg homem / < 16 kg mulher) ou 5 levantadas da cadeira > 15 s", ramos: [
            {r: "Normal", n: [{t: "Sarcopenia improvável; manter exercício e proteína", k: "ok"}]},
            {r: "Alterada", n: [{t: "Sarcopenia provável: tratar já (exercício + proteína); gravidade pela marcha ≤ 0,8 m/s", k: "warn"}]}]}
        ], nota: "SARC-F ≥ 4 [F]; pontos de corte EWGSOP2 [C]."},
        {ref: ["sarcf", "ewgsop2"]}]},
      {t: "Intervir", b: [
        {ul: [
          "Exercício multicomponente com resistência progressiva e equilíbrio, de preferência supervisionado [C].",
          "Proteína ≥ 1 g/kg/dia; suplemento oral se perda de peso ou desnutrição [F].",
          "Desprescrição (Beers/STOPP) e controle de doenças descompensadas [C].",
          "Vitamina D apenas se deficiência – não como tratamento da fragilidade [C].",
          "Rastrear depressão, cognição e quedas; planejar cuidado com a família nos frágeis [C]."]},
        {ref: ["icfsr2017", "espen_ger2022"]}]}
    ]}
},
{
  id: "cr-quedas", modulo: "cr", nome: "Prevenção de quedas: estratificação e avaliação multifatorial", sistema: "Saúde da pessoa idosa", risco: "moderado",
  ciap: "A29 · N17", cid: "W19 · Z91.81",
  tags: "quedas prevenção de quedas risco de queda velocidade de marcha TUG hipotensão ortostática medicamentos psicotrópicos benzodiazepínico casa segura calçado visão catarata exercício equilíbrio osteoporose medo de cair",
  S: "Quedas no último ano ___ (nº ___) | Circunstâncias (onde, como, tontura, perda de consciência) ___ | Ficou no chão sem conseguir levantar ___ | Lesões ___ | Medo de cair ___ | Medicamentos (benzodiazepínicos, hipnóticos, antidepressivos, antipsicóticos, opioides, anti-hipertensivos, hipoglicemiantes) ___ | Visão ___ | Noctúria/incontinência ___ | Calçados e casa ___.",
  O: "PA deitado ___ / em pé 1 min ___ / 3 min ___ | FC ___ | Marcha 4 m ___ s | TUG ___ s | Visão ___ | Pés ___ | Cognição ___.",
  A: "Risco de quedas ___ (baixo / intermediário / alto); fatores: ___.",
  P: "- Estratificar (quedas, gravidade, marcha).\n- Alto risco: avaliação multifatorial e plano individual.\n- Exercício de equilíbrio e força.\n- Retirar ou reduzir medicamentos que aumentam quedas.\n- Hipotensão ortostática, visão, pés/calçados, casa.\n- Osteoporose.",
  orient: "Exercícios de equilíbrio e força, feitos com regularidade por meses, são o que mais previne quedas.\nCasa segura: tire tapetes soltos, deixe luz acesa à noite no caminho do banheiro, instale barras no banheiro.\nUse calçado fechado, firme e antiderrapante.\nLevante-se devagar, principalmente à noite.",
  alarme: ["Queda com perda de consciência, dor no peito ou palpitação", "Queda com dor no quadril ou sem conseguir apoiar", "Batida na cabeça em quem usa anticoagulante", "Quedas cada vez mais frequentes"],
  encaminhar: "Queda com suspeita de síncope, fratura ou TCE → urgência (ver 'Queda no idoso'). Alto risco → eMulti (fisioterapia/terapia ocupacional); oftalmologia se catarata.",
  sus: {nacional: "Avaliação na APS, eMulti (fisioterapia, terapia ocupacional), oftalmologia (catarata) pela regulação [C].", betim: "Fisioterapia/eMulti e oftalmologia em Betim: confirmar fluxo."},
  evid: {resumo: "Estratificar por histórico de quedas, gravidade e desempenho de marcha (velocidade ≤ 0,8 m/s ou TUG ≥ 15 s) orienta quem precisa de avaliação multifatorial. Exercício de equilíbrio e força reduz quedas; revisão de medicamentos que aumentam quedas, correção de hipotensão ortostática, catarata, calçados e riscos domésticos completam a abordagem. A cognição deve ser avaliada em todos.", certeza: "Moderada", fontes: ["wfg2022", "beers2023", "ho_consenso"]},
  mudancas: ["Item novo de prevenção (complementa 'Queda no idoso', que trata o evento agudo)."],
  nv: ["Algoritmo completo da World Falls Guidelines (critérios de gravidade): estrutura conhecida, não conferida no texto integral."],
  guia: {
    resumo: "Pergunte a toda pessoa idosa: **caiu no último ano?** Se sim e foi grave, ou se a **marcha é lenta** (≤ 0,8 m/s ou TUG ≥ 15 s), faça a **avaliação multifatorial**. Três ações valem mais: **exercício de equilíbrio e força**, **tirar remédios que derrubam** e **medir a PA em pé**.",
    calcs: ["ho"],
    secoes: [
      {t: "Estratificar", b: [
        {fluxo: [
          {t: "Pergunta oportunística: caiu no último ano? Tem medo de cair ou instabilidade?"},
          {t: "Queda com gravidade (lesão, ≥ 2 quedas, fragilidade, ficou no chão sem levantar, perda de consciência/síncope)?", ramos: [
            {r: "Sim", n: [{t: "Alto risco → avaliação multifatorial + intervenções individualizadas", k: "stop"}]},
            {r: "Não", n: [{t: "Testar marcha"}]}]},
          {t: "Velocidade de marcha ≤ 0,8 m/s ou TUG ≥ 15 s?", ramos: [
            {r: "Sim", n: [{t: "Risco intermediário → exercício de equilíbrio e força", k: "warn"}]},
            {r: "Não", n: [{t: "Baixo risco → orientação e atividade física; reavaliar anualmente", k: "ok"}]}]}
        ], nota: "Limiares de marcha e TUG (World Falls Guidelines 2022) [F]; critérios de gravidade e estrutura do algoritmo [C]."},
        {ref: ["wfg2022"]}]},
      {t: "Avaliação multifatorial", b: [
        {calc: "ho"},
        {tab: {h: ["Fator", "O que fazer"], r: [
          ["Medicamentos", "Reduzir/retirar benzodiazepínicos, hipnóticos, antipsicóticos, antidepressivos sedativos, opioides, anticolinérgicos; rever anti-hipertensivos e sulfonilureias [C]"],
          ["Hipotensão ortostática", "Medir PA deitado e em pé (1 e 3 min); queda ≥ 20/10 mmHg = HO → rever fármacos, hidratação, levantar em etapas [C]"],
          ["Marcha, força e equilíbrio", "Exercício progressivo de equilíbrio e força, ≥ 3×/semana por vários meses; Tai Chi é opção [C/F]"],
          ["Cognição", "Avaliar em todos; exercício também beneficia quem tem CCL ou demência leve a moderada [F]"],
          ["Visão", "Acuidade; catarata → cirurgia; evitar lentes multifocais ao caminhar fora de casa [C]"],
          ["Pés e calçados", "Calçado fechado e firme; tratar calos e unhas; neuropatia [C]"],
          ["Casa", "Tapetes, iluminação noturna, barras no banheiro, escadas com corrimão (terapia ocupacional) [C]"],
          ["Continência/noctúria", "Tratar causas; rever diuréticos à noite [C]"],
          ["Osteoporose", "Avaliar e tratar (ver 'Osteoporose') [C]"]]}},
        {perola: {t: "O benzodiazepínico é o fator de risco mais fácil de tirar", x: "Benzodiazepínicos e hipnóticos aumentam quedas e fratura de quadril em idosos. Redução gradual combinada com orientação sobre sono costuma funcionar, mesmo em usuários de longa data.", d: "menos quedas e fraturas.", l: "C"}},
        {ref: ["wfg2022", "beers2023", "ho_consenso"]}]}
    ]}
}
);
