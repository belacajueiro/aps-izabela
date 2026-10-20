// ───────────── v41.3 (20/10/2026): CHECK-UP DA PESSOA IDOSA E DA CRIANÇA/ADOLESCENTE
// Conferido nos PDFs da base da usuária: INCA colo 2025, NT 626/2025, CONITEC CP 20/2026, Calendários PNI 2026 (idoso e criança),
// MS 2024 (demência), CAB 29 (2010), CAB 33 (2012), Caderneta da Criança 2025, SBP Diretriz 32 (ferro, 2026), SBP DC 181 (vitamina D),
// DBHA 2025 (cap. 9), Diretriz de Dislipidemias SBC 2025 (seção 9.10), PCDT IST 2022 (Quadro 5) e Protocolo de Regulação de Exames de Betim (2026).
Object.assign(FONTES, {
  lee_ttb2013: {s: "Lee 2013 – tempo até o benefício do rastreio", t: "Lee SJ, Boscardin WJ, Stijacic-Cenzer I et al. Time lag to benefit after screening for breast and colorectal cancer: meta-analysis of survival data from the United States, Sweden, United Kingdom, and Denmark. BMJ 2013;346:e8441. PMID 23299842 (metanálise de ECR): ~10,7 anos (mama) e ~10,3 anos (colorretal) para evitar 1 morte a cada 1.000 rastreados; rastreio mais apropriado com expectativa de vida > 10 anos.", f: "F", url: "https://doi.org/10.1136/bmj.e8441"},
  cab29_2010: {s: "CAB 29 – Rastreamento (2010)", t: "Ministério da Saúde. Cadernos de Atenção Primária nº 29 – Rastreamento, 2010 (manual MS): tabelas de recomendações para adultos, crianças e cânceres; ênfase na prevenção quaternária e nos danos do excesso de exames (PDF da base da usuária).", f: "F", url: ""},
  cab33_2012: {s: "CAB 33 – Saúde da criança (2012)", t: "Ministério da Saúde. Cadernos de Atenção Básica nº 33 – Saúde da criança: crescimento e desenvolvimento, 2012 (manual MS): cap. 4.3.4–4.3.5 (visão e audição) e cap. 5 (exames em crianças assintomáticas – hemograma só em risco, sem EAS/parasitológico de rotina, perfil lipídico seletivo) (PDF da base da usuária).", f: "F", url: ""},
  pcdt_ist2022_q5: {s: "PCDT IST 2022 – Quadro 5", t: "Ministério da Saúde. PCDT para Atenção Integral às Pessoas com IST, 2022, seção 2.4, Quadro 5 – Rastreamento de IST: adolescentes e jovens (≤ 30 anos) com vida sexual ativa – HIV e sífilis anual; clamídia/gonococo e hepatites conforme subgrupo ou prática sexual (norma; PDF da base da usuária).", f: "F", url: ""},
  betim_exames2026: {s: "Betim – Protocolo de exames eletivos (2026)", t: "SMS Betim, Diretoria de Regulação, Controle e Avaliação – Central de Exames. Protocolo de Regulação do Acesso aos Exames Eletivos de Alta e Média Complexidade, versão final, 2026 (densitometria, colonoscopia, mamografia, audiometria/PEATE) (documento municipal anexado ao Projeto).", f: "F", url: ""},
  uspstf_quedas2024: {s: "USPSTF 2024 – quedas", t: "USPSTF. Falls Prevention in Community-Dwelling Older Adults: Interventions (jun/2024): exercício para ≥ 65 anos com risco aumentado de queda (B); intervenções multifatoriais individualizadas (C) (diretriz; conferida por notícia da Healio, 04/06/2024).", f: "F", url: "https://healio.com/news/primary-care/20240604/uspstf-finalizes-recommendation-on-exercise-for-fall-prevention-among-older-adults"},
  zoster_sus2026: {s: "Herpes-zóster – não incorporada (2026)", t: "Ministério da Saúde/CONITEC, Relatório de Recomendação nº 1.073 – vacina recombinante adjuvada contra herpes-zóster: não incorporada ao SUS (decisão divulgada em 12/01/2026; populações avaliadas: ≥ 80 anos e imunocomprometidos ≥ 18 anos; motivo: custo-efetividade e impacto orçamentário > R$ 5,2 bilhões em 5 anos) (conferido por notícia do Poder360; relatório não aberto).", f: "F", url: "https://www.poder360.com.br/poder-saude/sus-rejeita-inclusao-de-vacina-contra-herpes-zoster/"},
  uspstf_idoso: {s: "USPSTF – rastreios de evidência insuficiente ou contra", t: "USPSTF: evidência insuficiente (I) para rastrear perda auditiva (2021), acuidade visual (2022), comprometimento cognitivo (2020), disfunção tireoidiana (2015) e deficiência de vitamina D (2021) em assintomáticos; contra (D) rastrear bacteriúria assintomática fora da gestação (2019), estenose de carótida (2021), ECG em baixo risco (2018) e PSA ≥ 70 anos (2018); câncer colorretal 76–85 anos: decisão individual (C, 2021); vitamina D para prevenir quedas em idosos da comunidade: contra (D, 2018) (diretrizes; citadas de memória).", f: "C", url: ""},
  uspstf_ped: {s: "USPSTF – rastreios pediátricos", t: "USPSTF: acuidade visual/ambliopia 3–5 anos (B, 2017); obesidade ≥ 6 anos com intervenção comportamental (B, 2024); depressão 12–18 anos (B, 2022) e ansiedade 8–18 anos (B, 2022); evidência insuficiente (I) para perfil lipídico (2023), PA (2020) e deficiência de ferro 6–24 meses (2015) em assintomáticos (diretrizes; citadas de memória, exceto ferro, conferido em resumo).", f: "C", url: ""},
  aap_obes2023: {s: "AAP 2023 – obesidade pediátrica", t: "Hampl SE et al. Clinical Practice Guideline for the Evaluation and Treatment of Children and Adolescents With Obesity. Pediatrics 2023;151(2):e2022060640 – avaliar lipídios, glicemia/HbA1c e ALT a partir dos 10 anos na obesidade (diretriz; citada de memória).", f: "C", url: ""},
  ada_jovem: {s: "ADA – DM2 em jovens", t: "ADA Standards of Care: rastrear DM2 após a puberdade ou a partir dos 10 anos em jovens com sobrepeso/obesidade e ≥ 1 fator de risco, a cada 3 anos (diretriz; citada de memória).", f: "C", url: ""},
  headsss: {s: "HEEADSSS", t: "Entrevista psicossocial do adolescente HEEADSSS (casa, educação/emprego, alimentação, atividades, drogas, sexualidade, suicídio/humor, segurança) – Goldenring & Rosen, 2004 (derivada do HEADSS de Goldenring & Cohen, 1988) (instrumento; citado de memória; uso em materiais do MS/SBP não conferido).", f: "C", url: ""}
});

const CHK_LINKS = [["pv-checkup", "Check-up do adulto"], ["pv-checkup-idoso", "Check-up da pessoa idosa"], ["pu-checkup", "Check-up da criança e do adolescente"]];

CONDICOES.push(
// ════════════════════════════════════════ 1. CHECK-UP DA PESSOA IDOSA
{
  id: "pv-checkup-idoso", modulo: "pv", nome: "Check-up da pessoa idosa: o que rastrear, quando parar e o que não pedir", sistema: "Rastreios gerais", risco: "moderado",
  ciap: "A98", cid: "Z00.0",
  tags: "check-up idoso pessoa idosa exames de rotina 60 anos 65 anos 70 anos 75 anos 80 anos rastreamento quando parar expectativa de vida fragilidade IVCF-20 densitometria DXA osteoporose aneurisma de aorta mamografia colo do útero sangue oculto FIT PSA vitamina D B12 TSH urocultura bacteriúria assintomática vacinas idoso herpes-zóster quedas memória prevenção quaternária",
  S: "Pessoa idosa, ___ anos, para consulta preventiva. Queixas ___. O que é mais importante para ela hoje ___.\nIVCF-20 ___ pontos (data ___). Quedas no último ano ___. Memória – 3 perguntas da Caderneta da Pessoa Idosa (alguém comentou esquecimento? piorando nos últimos meses? atrapalha atividades?) ___. Humor ___. Visão ___ | audição ___ | continência ___.\nMedicamentos (nº, inclusive comprados) ___. Tabaco ___ (já fumou? maços-ano ___) | álcool (AUDIT-C ___).\nÚltimos rastreios: mamografia ___ | colo do útero ___ | sangue oculto/colonoscopia ___ | DXA ___ | hepatite C/HIV/sífilis ___. Vacinas ___.",
  O: "PA sentado ___ e em pé ___ mmHg | Peso ___ kg | IMC ___ | Panturrilha ___ cm\nMarcha 4 m ___ s / TUG ___ s | Teste do sussurro ___ | Acuidade visual ___.",
  A: "Pessoa idosa ___ (robusta / em risco / frágil – IVCF-20 ___), expectativa de vida estimada ___ (> 10 anos / < 10 anos). Rastreios ainda indicados: ___. Rastreios a encerrar: ___.",
  P: "- Rastreios conforme idade, sexo e expectativa de vida (ver guia): ___.\n- Rastreios encerrados: ___ (motivo e conversa registrados).\n- Vacinas do Calendário do Idoso: ___.\n- Medicamentos a revisar ou desprescrever: ___.\n- Exercício de força e equilíbrio; prevenção de quedas.\n- Retorno: ___.",
  orient: "Na sua idade, o check-up serve para manter você ativo e independente, e não para pedir muitos exames.\nAlguns exames de câncer deixam de ajudar depois de certa idade, porque o benefício demora cerca de 10 anos para aparecer e os riscos (exames a mais, procedimentos, sustos) continuam. Parar um exame também é cuidado.\nO que mais protege a saúde agora: exercício de força e equilíbrio, comer proteína, rever os remédios, manter as vacinas em dia e contar para a equipe sobre quedas, esquecimentos, tristeza, perda de peso e dificuldades para ver ou ouvir.",
  alarme: ["Perda de peso sem explicação", "Sangue nas fezes ou mudança persistente do intestino", "Sangramento vaginal depois da menopausa", "Queda com dificuldade para levantar, ou quedas repetidas", "Esquecimento que piora rápido ou confusão de início súbito"],
  encaminhar: "Conforme o resultado: sangue oculto positivo → colonoscopia; mamografia BI-RADS 0, 4 ou 5 → ver 'Câncer de mama'; DNA-HPV/citologia alterados → ver 'Colo do útero'; DXA com osteoporose → ver 'Osteoporose'; aorta 3,0–5,4 cm → angiologia/cirurgia vascular para vigilância, parar de fumar e controlar a PA; ≥ 5,5 cm ou crescimento > 1 cm/ano → prioridade; dor abdominal ou lombar com aneurisma conhecido → urgência [C]; IVCF-20 ≥ 15 → ver 'Consulta da pessoa idosa'.",
  sus: {nacional: "Na APS do SUS: PA, glicemia/HbA1c, perfil lipídico, testes rápidos (HIV, sífilis, hepatites B e C), DNA-HPV/citologia, mamografia, sangue oculto (FIT em implantação), DXA e USG por regulação; IVCF-20 no PEC e-SUS APS; Calendário do Idoso 2026 (influenza anual, covid-19 semestral, hepatite B, dT; VPP23 para acamados/institucionalizados e indígenas) [F]. Vacina recombinante contra herpes-zóster: não incorporada (jan/2026) [F].", betim: "Protocolo de Regulação de Exames Eletivos de Betim (2026) [F]: densitometria em P2 para mulheres > 65 e homens > 70 anos, independentemente de outros fatores (P1 se fratura por baixo impacto, menopausa < 45 anos ou osteopenia radiológica), pedido por clínico geral; colonoscopia pode ser pedida pelo generalista com sangue oculto imunoquímico positivo ou sinais de alarme; mamografia de rastreio em P1; audiometria pelo item 'Exames básicos de audição' no MV. Oferta do FIT nas UBS de Betim: confirmar [NV]."},
  evid: {resumo: "O benefício do rastreio de câncer aparece anos depois do teste: em metanálise de ECR, foram precisos cerca de 10 anos para evitar 1 morte por câncer de mama ou colorretal a cada 1.000 pessoas rastreadas, o que torna o rastreio apropriado quando a expectativa de vida passa de 10 anos. Na pessoa idosa, os ganhos maiores vêm de exercício (quedas e função), revisão de medicamentos, vacinas, controle da PA e identificação de declínio funcional, cognitivo e de humor – organizados pelo IVCF-20.", certeza: "Moderada (tempo até o benefício: metanálise de ECR); variável por rastreio", fontes: ["lee_ttb2013", "inca_colo2025", "nt_mama2025", "conitec_ccr2026", "pcdt_osteo2025", "pni_idoso2026", "ms_demencia2024", "uspstf_quedas2024", "betim_exames2026"]},
  idealsus: {ideal: "Rastreios escolhidos pela expectativa de vida e pelas preferências; IVCF-20 anual; exercício supervisionado de força e equilíbrio; revisão farmacêutica; vacinas recombinantes contra herpes-zóster e contra VSR; acesso rápido a DXA, FIT e colonoscopia.", sus: "IVCF-20 no PEC; mamografia (bienal 50–74; por demanda > 74), DNA-HPV/citologia, FIT (em implantação, 50–75), DXA regulada; Calendário do Idoso 2026 com influenza, covid-19, hepatite B, dT e VPP23 para grupos. Herpes-zóster recombinante não incorporada (jan/2026); VSR não consta no Calendário do Idoso de 29/01/2026.", ponte: "Priorize o que o SUS oferece e mais muda desfecho: exercício (eMulti, Academia da Saúde), desprescrição, vacinas do calendário, PA e prevenção de quedas. Para herpes-zóster e VSR, informe que existem na rede privada e o que fazem, sem tratá-las como obrigatórias [I]."},
  divergencia: "Mama > 74 anos: a NT 626/2025 garante mamografia por demanda após conversa; a USPSTF (2024) considera a evidência insuficiente acima de 74 [C]. Colorretal: o relatório preliminar da CONITEC (CP 20/2026) não inclui > 75 anos no rastreio organizado, mas registra que diretrizes internacionais admitem estender até 85 em casos individualizados (boa funcionalidade, expectativa ≥ 10 anos, sem rastreio prévio) [F]; a USPSTF (2021) dá C para 76–85 [C].",
  mudancas: ["Item novo (v41.3), a pedido da usuária: rastreios da pessoa idosa, limites de idade e o que não pedir, com o protocolo de regulação de exames de Betim (2026)."],
  nv: ["Oferta do FIT nas UBS de Betim e prazo da colonoscopia.", "Vacina contra VSR para idosos no SUS após 29/01/2026 (não consta no Calendário do Idoso; conferir NT do PNI antes de orientar).", "Edição vigente da Caderneta da Pessoa Idosa (as 3 perguntas de memória foram conferidas no guia de demência do MS 2024).", "Vigência da recomendação USPSTF contra vitamina D para prevenir quedas após a atualização de 2024."],
  guia: {
    resumo: "O check-up do idoso começa por uma pergunta: **esta pessoa provavelmente vive mais 10 anos?** Se sim, mantenha os rastreios de câncer até o limite de idade; se não (fragilidade avançada, doença grave – IVCF-20 alto sozinho não basta), **encerre-os** e foque em função, quedas, remédios, vacinas e no que importa para ela. **Hemograma, TSH, vitamina D, B12, EAS/urocultura, ECG e PSA 'de rotina' não entram.**",
    calcs: ["sc:ivcf", "prevent", "colo", "ccr", "antropo", "sc:gds15", "sc:auditc"],
    secoes: [
      {t: "Por onde começar", b: [
        {fluxo: [
          {t: "IVCF-20 (PEC) + pergunta: o que é mais importante para a pessoa?"},
          {t: "Estrato e expectativa de vida", ramos: [
            {r: "Baixo risco de vulnerabilidade (0–6)", n: [{t: "Rastreios por idade e sexo (tabela abaixo) + prevenção (exercício, vacinas, remédios)", k: "ok"}]},
            {r: "Risco moderado (7–14)", n: [{t: "Rastreios por idade + investigar os domínios pontuados (ver 'Consulta da pessoa idosa')", k: "warn"}]},
            {r: "Alto risco (≥ 15)", n: [{t: "Estimar a expectativa de vida (comorbidades, funcionalidade, índices como Lee ou Schonberg) e decidir com a pessoa: se < 10 anos, encerrar rastreios de câncer e focar em sintomas, função, cuidador e diretivas antecipadas", k: "stop"}]}]}
        ], nota: "Estratos do IVCF-20 (baixo, moderado e alto risco de vulnerabilidade clínico-funcional) conforme o manual do MS [F]; IVCF-20 alto não equivale a expectativa de vida curta – pode refletir só déficit sensorial ou incontinência [I]. Tempo até o benefício do rastreio de mama e colorretal ~10 anos (metanálise de ECR) [F]; para outros cânceres, extrapolação. Condutas por estrato: inferência clínica [I]."},
        {ref: ["ivcf_ms", "lee_ttb2013"]}
      ]},
      {t: "O que rastrear", b: [
        {tab: {h: ["Rastreio", "Quem", "Como / intervalo"], r: [
          ["PA", "Todos", "Toda consulta; PA sentado e em pé (hipotensão ortostática) [C]"],
          ["Risco cardiovascular", "Até 79 anos", "PREVENT com perfil lipídico; > 75 anos sem DCV: estatina por decisão individual [C]. Não iniciar AAS em prevenção primária [F]"],
          ["DM2", "Todos (≥ 35 anos)", "Glicemia de jejum ou HbA1c a cada 3 anos [F]"],
          ["Câncer colorretal", "50–75 anos, risco padrão", "Sangue oculto imunoquímico (FIT) a cada 2 anos; positivo → colonoscopia [F]"],
          ["Câncer de mama", "50–74 anos", "Mamografia a cada 2 anos [F]"],
          ["Colo do útero", "Até 64 anos", "DNA-HPV a cada 5 anos (encerrar se o último teste após os 60 for negativo – INCA 2025) ou, onde ainda houver, citologia (encerrar aos 64 com 2 exames negativos nos últimos 5 anos – INCA 2016) [F]"],
          ["Osteoporose", "Mulheres ≥ 65; homens ≥ 70; antes, se fator de risco", "DXA (PCDT 2025) [F]; na regulação de Betim, P2 para mulheres > 65 e homens > 70 (aos 65/70 exatos, justificar fator de risco) [F]"],
          ["Aneurisma de aorta abdominal", "Homens 65–75 anos que já fumaram", "USG de abdome 1 vez (USPSTF B) [C]"],
          ["Hepatite C", "Todos ≥ 18 anos ao menos uma vez (busca ativa ≥ 40)", "Teste rápido [F]"],
          ["HIV, sífilis, hepatite B", "Ao menos uma vez e conforme risco", "Testes rápidos; hepatite B: vacinar quem não tem esquema completo [F]"],
          ["Quedas", "Todos", "Perguntar anualmente; marcha 4 m ou TUG se queda ou medo de cair; exercício se risco (USPSTF B) [F]"],
          ["Memória", "Todos", "3 perguntas da Caderneta; aplicar 10-CS ou QMC8 só se alguma for 'sim' ou houver queixa [F]"],
          ["Humor", "Todos", "GDS-15 (≥ 6 sugere depressão) [C]"],
          ["Visão e audição", "Todos", "Perguntar e testar (Snellen, sussurro); rastreio instrumental em assintomático: evidência insuficiente [C]"],
          ["Câncer de pulmão", "50–80 anos, ≥ 20 maços-ano, fuma ou parou há ≤ 15 anos", "TC de baixa dose anual (USPSTF) – sem programa no SUS [F]; discutir e, sobretudo, tratar o tabagismo (ver 'Câncer de pulmão') [C]"],
          ["Tabaco e álcool", "Todos", "Perguntar e intervir (AUDIT-C) [C]"]]}},
        {ref: ["sbd_rastreio2025", "conitec_ccr2026", "fit_sus2026", "nt_mama2025", "inca_colo2025", "inca_colo2016", "gds_br", "pcdt_osteo2025", "betim_exames2026", "uspstf_aaa", "pcdt_hcv2026", "ms_demencia2024", "uspstf_quedas2024", "beers2023"]}
      ]},
      {t: "Quando parar", b: [
        {tab: {h: ["Rastreio", "Limite no SUS", "Depois do limite"], r: [
          ["Mama", "74 anos [F]", "Mamografia por demanda, após conversa sobre riscos e benefícios (NT 626/2025) [F]"],
          ["Colo do útero", "DNA-HPV: teste negativo após os 60 encerra (INCA 2025); citologia: 64 anos com 2 negativos em 5 anos (INCA 2016) [F]", "> 60 anos sem teste de DNA-HPV prévio: 1 teste e, se negativo, encerra (INCA 2025) [F]; > 64 nunca rastreada (citologia): 2 exames com intervalo de 1–3 anos (INCA 2016) [F]; NIC 2+/AIS tratada: manter até 25 anos após o tratamento [F]"],
          ["Colorretal", "75 anos (relatório preliminar CONITEC CP 20/2026) [F]", "76–85: decisão individual se boa funcionalidade, sem comorbidade importante, expectativa ≥ 10 anos e sem rastreio prévio (o próprio relatório da CONITEC cita diretrizes internacionais; USPSTF C) [F]; > 85: não rastrear [C]"],
          ["Próstata (PSA)", "Sem rastreio populacional no SUS [F]", "≥ 70 anos: não rastrear (USPSTF D) [C]"],
          ["Pulmão (TC baixa dose)", "Sem programa no SUS; INCA iniciou estudo de viabilidade em 2026 [F]", "USPSTF: até 80 anos e parar se parou de fumar há > 15 anos [C]"],
          ["Qualquer câncer", "—", "Expectativa de vida < 10 anos: encerrar e registrar a conversa – tempo até o benefício conferido para mama e colorretal [F]; demais cânceres, extrapolação; conduta [I]"]]}, nota: "Limites conferidos nas normas brasileiras (INCA 2025 e 2016, NT 626/2025, NT 9/2023, relatório preliminar CONITEC CP 20/2026); condutas acima do limite pelas diretrizes citadas."},
        {perola: {t: "Parar um rastreio é uma decisão, não um esquecimento", x: "Diga com clareza: 'este exame foi útil até agora; daqui em diante, ele traz mais risco do que benefício para você'. Registre no prontuário o motivo (idade, resultados anteriores, expectativa de vida, preferência). Isso evita que outro profissional reinicie a cascata.", d: "menos sobrediagnóstico e menos procedimentos sem benefício.", l: "I"}},
        {ref: ["nt_mama2025", "inca_colo2025", "inca_colo2016", "conitec_ccr2026", "nt_psa2023", "lee_ttb2013", "uspstf_idoso", "uspstf_pulmao", "inca_pulmao2026"]}
      ]},
      {t: "O que NÃO pedir em assintomático", b: [
        {ul: [
          "**Hemograma, TSH, função hepática, ferritina, vitamina D** 'de rotina' [C]. TSH e vitamina D em assintomático: evidência insuficiente (USPSTF I) [C].",
          "**B12** só com motivo: metformina prolongada, IBP crônico, gastrectomia, anemia macrocítica, neuropatia ou declínio cognitivo [C].",
          "**EAS e urocultura** sem sintomas: bacteriúria assintomática no idoso não se trata (exceto antes de procedimento urológico) – rastrear e tratar só gera resistência e efeito adverso (USPSTF D) [C].",
          "**ECG e teste ergométrico** em assintomático de baixo risco (USPSTF D); **USG de carótidas** (USPSTF D) [C].",
          "**PSA de rotina** em qualquer idade: o MS não recomenda rastreio populacional (NT 9/2023) [F]; se o homem pedir, decisão compartilhada; ≥ 70 anos: não rastrear (USPSTF D) [C]. **Marcadores tumorais, USG de tireoide ou de abdome total** [C] – exceto a USG para aneurisma de aorta quando indicada.",
          "**Teste cognitivo em todos:** o MS (2024) aplica 10-CS/QMC8 só a quem responde 'sim' a uma das 3 perguntas ou tem queixa [F].",
          "**Vitamina D para prevenir quedas** sem deficiência: não prescrever (USPSTF D, 2018; vigência após a atualização de 2024 a conferir [NV])."]},
        {perola: {t: "Na pessoa idosa, um exame a mais pesa mais", x: "Bacteriúria assintomática vira antibiótico, diarreia por C. difficile e delirium. TSH levemente alto vira levotiroxina e fibrilação atrial. Antes de pedir, pergunte: 'o que eu faço com o resultado alterado – e isso vai ajudar esta pessoa?'.", d: "menos iatrogenia em quem tem menos reserva.", l: "I"}},
        {ref: ["uspstf_idoso", "ms_demencia2024", "nt_psa2023", "cab29_2010"]}
      ]},
      {t: "Vacinas (Calendário do Idoso 2026)", b: [
        {tab: {h: ["Vacina", "Para quem", "Esquema"], r: [
          ["Influenza", "Todos ≥ 60 anos", "1 dose anual [F]"],
          ["Covid-19", "Todos ≥ 60 anos", "1 dose a cada 6 meses [F]"],
          ["Hepatite B", "Todos sem esquema completo", "Iniciar ou completar 3 doses [F]"],
          ["dT (dupla adulto)", "Todos", "Completar 3 doses; reforço a cada 10 anos (5 anos se ferimento de risco) [F]"],
          ["Pneumocócica 23 (VPP23)", "Acamados e/ou institucionalizados; indígenas sem vacina conjugada prévia", "Sem histórico: 2 doses, intervalo de 5 anos [F]; outras condições: CRIE"],
          ["Febre amarela", "Só não vacinados que moram ou vão para área com transmissão ativa", "1 dose após avaliação caso a caso, ≥ 10 dias antes da viagem [F]"],
          ["Herpes-zóster recombinante", "—", "Não incorporada ao SUS (jan/2026) [F]"],
          ["VSR", "—", "Não consta no Calendário do Idoso 2026 [F]; oferta posterior a conferir [NV]"],
          ["Tríplice viral e varicela", "Só trabalhadores da saúde (varicela também indígenas)", "Conforme histórico vacinal; varicela após avaliação caso a caso [F]"]]}},
        {ref: ["pni_idoso2026", "zoster_sus2026"]}
      ]},
      {t: "Navegar", b: [{ir: [["cr-aga", "Consulta da pessoa idosa (IVCF-20)"], ["cr-quedas", "Prevenção de quedas"], ["cr-polifarmacia", "Polifarmácia e desprescrição"], ["cr-demencia", "Declínio cognitivo e demência"], ["cr-osteoporose", "Osteoporose"], ["mu-colo", "Colo do útero"], ["mu-mama", "Câncer de mama"], ["pv-colorretal", "Colorretal (FIT)"], ["ho-psa", "PSA"], ["pv-vacinas", "Vacinas do adulto e do idoso"], ["pv-checkup", "Check-up do adulto"]]}]}
    ]}
},
// ════════════════════════════════════════ 2. CHECK-UP DA CRIANÇA E DO ADOLESCENTE
{
  id: "pu-checkup", modulo: "pu", nome: "Check-up da criança e do adolescente (0–19 anos): o que rastrear e o que não pedir", sistema: "Consulta guiada", risco: "baixo",
  ciap: "A98", cid: "Z00.1 · Z00.3",
  tags: "check-up criança adolescente exames de rotina escolar exames para escola hemograma de rotina parasitológico EAS urina vitamina D colesterol perfil lipídico pressão arterial pediátrica percentil acuidade visual Snellen reflexo vermelho audição M-CHAT saúde bucal flúor HEADSSS depressão adolescente IST HPV atestado educação física prevenção quaternária",
  S: "___ anos, para consulta de rotina, acompanhado(a) de ___. Preocupações da família ___ e da criança/adolescente ___.\nEscola (série, desempenho) ___. Alimentação ___ | atividade física ___ | telas ___ h/dia | sono ___. Desenvolvimento e comportamento ___. Visão e audição (família/escola) ___. Escovação e dentista ___.\nAntecedentes (prematuridade, baixo peso, internações) ___. Família: colesterol alto, DCV precoce, DM ___. Vacinas (Caderneta) ___.\nAdolescente, a sós: casa ___ | escola ___ | alimentação e imagem corporal ___ | atividades ___ | álcool, tabaco, drogas ___ | sexualidade e proteção ___ | humor, autolesão ___ | segurança e violência ___.",
  O: "Peso ___ kg | Estatura ___ cm | IMC/idade escore-z ___ | PA ___ mmHg (percentil ___ para idade, sexo e estatura)\nAcuidade visual OD ___ OE ___ | Cobertura/Hirschberg ___ | Dentição ___ | Tanner ___.",
  A: "___ anos, crescimento ___ (SISVAN), desenvolvimento ___, PA ___ (normal / pré-hipertensão / HA estágio ___). Rastreios indicados nesta idade: ___.",
  P: "- Rastreios conforme idade e risco (ver guia): ___.\n- Vacinas em atraso: ___.\n- Orientações: alimentação, atividade física, telas, sono e prevenção de acidentes.\n- Saúde bucal: escovação com creme dental com flúor; equipe de saúde bucal ___.\n- Sinais de alerta orientados.\n- Próxima consulta: ___.",
  orient: "Criança saudável não precisa de exames de sangue, fezes ou urina 'de rotina'. O que mais ajuda é a consulta: medir peso, altura e pressão, ver visão, audição, dentes, desenvolvimento e vacinas.\nExame pedido sem motivo pode dar alteração que não significa doença e levar a mais exames e preocupação.\nTelas com moderação, sono regular, brincadeira ativa todos os dias e alimentação com comida de verdade fazem mais pela saúde do que qualquer exame.\nAdolescente: parte da consulta é a sós com o profissional, com sigilo – que só é quebrado se houver risco à vida ou à integridade, como suspeita de violência ou abuso.",
  alarme: ["Reflexo branco no olho em fotos ou estrabismo que apareceu de repente", "Manchas roxas ou sangramentos sem pancada, ou febre prolongada sem causa", "Caroço na barriga, ou dor nos ossos persistente ou que acorda à noite", "Perda de peso, cansaço ou palidez que não melhoram", "Dor de cabeça forte com vômitos, ou visão dupla", "Perda de habilidades que a criança já tinha", "Tristeza persistente, isolamento ou falas sobre morrer", "Desmaio ou dor no peito durante esforço"],
  encaminhar: "Acuidade visual alterada ou estrabismo → oftalmologia; falha auditiva → audiologia (audiometria/PEATE regulados); M-CHAT-R 3–7 com entrevista de seguimento positiva ou ≥ 8 → ver 'Atraso do desenvolvimento'; PA ≥ P95 (< 13 anos) ou ≥ 130/80 (≥ 13 anos) em 3 atendimentos diferentes (método auscultatório) = HA confirmada [F] → investigar causa secundária se < 6 anos, PA muito elevada ou achados de risco – avaliação extensa é dispensável a partir de 6 anos com sobrepeso/obesidade, história familiar de HA e exame sem achados de risco [F]; HA estágio 2 sintomática → urgência [C]; LDL > 190 (ou > 160 com história familiar) em 2 dosagens em 3 meses → suspeita de hipercolesterolemia familiar; risco de suicídio → CAPSi/urgência.",
  sus: {nacional: "Na APS do SUS: Caderneta da Criança (curvas OMS, instrumento de desenvolvimento), vacinas do PNI, PA, tabela de acuidade visual, perfil lipídico, glicemia, testes rápidos de IST, saúde bucal na eSB; audiometria, PEATE e oftalmologia por regulação (em Betim, audiometria e PEATE conferidos no protocolo municipal [F]; oftalmologia pediátrica [NV]). HPV: dose única de 9 a 14 anos e resgate de 15 a 19 [F].", betim: "Protocolo de Regulação de Exames Eletivos de Betim (2026): logoaudiometria/audiometria pelo item 'Exames básicos de audição' no MV e PEATE/BERA regulados [F]. Fluxo de oftalmologia pediátrica e triagem visual nas escolas (PSE) em Betim: confirmar [NV]."},
  evid: {resumo: "Na criança assintomática, os rastreios com base são clínicos: crescimento, desenvolvimento (M-CHAT-R aos 18 e 24 meses), PA anual a partir dos 3 anos, visão (reflexo vermelho, cobertura e acuidade a partir dos 3 anos), audição e saúde bucal; no adolescente, entrevista psicossocial, humor, uso de substâncias e IST. Hemograma, parasitológico e EAS 'de rotina' não mostraram impacto em desfechos (MS, CAB 33); a SBP não recomenda exames de ferro em lactentes saudáveis nem dosar vitamina D em todos. O perfil lipídico é o ponto de divergência: universal aos 9–11 e 17–21 anos na SBC 2025, seletivo no MS (2012) e evidência insuficiente na USPSTF.", certeza: "Variável: normativa e de consenso para a maior parte; moderada para lipídios (SBC 2025)", fontes: ["caderneta_crianca", "cab33_2012", "dbha2025", "dbdisl2025", "sbp_ferro2026", "sbp_vitd2024", "pcdt_ist2022_q5", "hpv_vac2026", "uspstf_ped"]},
  idealsus: {ideal: "Consultas anuais com crescimento, desenvolvimento, PA, triagem visual e auditiva, saúde bucal com flúor, perfil lipídico conforme a SBC 2025, entrevista psicossocial do adolescente e vacinas em dia.", sus: "Tudo isso cabe na APS: Caderneta, vacinas, PA, tabela de acuidade, perfil lipídico, testes rápidos e equipe de saúde bucal; audiometria, PEATE e oftalmologia dependem de regulação.", ponte: "Use a tabela de Snellen na UBS e, onde houver, as ações do Programa Saúde na Escola para triagem visual [NV]; encaminhe só quem falha na triagem."},
  divergencia: "Perfil lipídico: a SBC 2025 recomenda dosagem universal aos 9–11 anos (forte, moderada) e novamente aos 17–21 anos; o CAB 33 (MS, 2012) recomenda apenas o rastreio seletivo, a partir dos 2 anos, a cada 3–5 anos; a USPSTF (2023) considera a evidência insuficiente [C]. Na SBC, o quadro de recomendações graduado traz universal aos 9–11 e seletivo a partir dos 2 anos; a janela de 17–21 anos está só no texto [F]. Escolha do app: seletivo sempre; universal aos 9–11 anos oferecido com explicação, pois o objetivo principal é achar hipercolesterolemia familiar; de 17 a 19 anos, se nunca dosado, oferecer uma dosagem [I].",
  mudancas: ["Item novo (v41.3), a pedido da usuária: rastreios de 0 a 19 anos e o que não pedir, com a classificação de PA pediátrica da DBHA 2025 e o rastreio lipídico da SBC 2025."],
  nv: ["Idade recomendada para a 1ª consulta odontológica (a Caderneta 2025 orienta escovação com flúor desde o 1º dente e registro do acompanhamento odontológico).", "Fluxo de oftalmologia pediátrica e triagem visual escolar (PSE) em Betim.", "ECG pré-participação para atleta competitivo: conferir a diretriz brasileira de cardiologia do esporte.", "Norma vigente de notificação e comunicação ao Conselho Tutelar na suspeita de violência sexual em < 14 anos (ver item 'Violência').", "Exigência de exames por escolas/creches em Betim."],
  guia: {
    resumo: "O check-up da criança é **consulta, não exame de sangue**: crescimento, desenvolvimento, **PA anual a partir dos 3 anos**, **visão** (reflexo vermelho, cobertura, acuidade a partir dos 3), audição, dentes e vacinas. No adolescente, **conversa a sós** (HEEADSSS), humor, substâncias e IST. **Hemograma, parasitológico, EAS e vitamina D 'de rotina' não entram**; perfil lipídico conforme risco (e aos 9–11 anos pela SBC 2025).",
    calcs: ["sc:mchat", "sc:phq9", "sc:gad7"],
    secoes: [
      {t: "O que rastrear, por idade", b: [
        {tab: {h: ["Rastreio", "Quando", "Como / conduta"], r: [
          ["Crescimento", "Toda consulta: 1ª semana, 1, 2, 4, 6, 9, 12, 18, 24 e 36 meses; depois anual [F]", "Peso, estatura e IMC/idade nas curvas da OMS (Caderneta); vale a tendência [F]"],
          ["Desenvolvimento", "Toda consulta (instrumento da Caderneta); M-CHAT-R aos 18 e 24 meses [F]", "M-CHAT-R 0–2 baixo risco; 3–7 entrevista de seguimento (positivo se ≥ 2); ≥ 8 encaminhar [F]. Ver 'Atraso do desenvolvimento e sinais de autismo'"],
          ["Pressão arterial", "Anual a partir dos 3 anos; antes dos 3 se fator de risco [F]", "Manguito adequado; classificar pelo percentil para idade, sexo e estatura (Tabelas 9.2 e 9.3 da DBHA 2025; classificação na seção abaixo) [F]"],
          ["Olhos", "Reflexo vermelho na 1ª consulta e aos 4, 6 e 12 meses e 2 anos (CAB 33; a SBP sugere 2–3 vezes ao ano até 3 anos); cobertura e Hirschberg aos 4, 6 e 12 meses [F]", "Ausente/assimétrico ou desvio → oftalmologia [F]"],
          ["Quadril", "15 dias, 1 e 2 meses; depois, abdução e marcha", "Barlow e Ortolani; limitação da abdução ou encurtamento → ortopedia [F]"],
          ["Testículos (meninos)", "Toda consulta até a descida", "Não palpáveis aos 6 meses → cirurgia pediátrica; retráteis: rever a cada 6–12 meses dos 4 aos 10 anos [F]"],
          ["Acuidade visual", "A partir dos 3 anos; repetir na entrada da escola [F]", "Tabela de letras ou figuras: 3–5 anos < 20/40 ou ≥ 6 anos < 20/30, ou diferença de 2 linhas entre os olhos → oftalmologia [F]"],
          ["Audição", "Teste da orelhinha; depois, sinais de alerta da Caderneta; repetir na entrada da escola [F]", "Falha, suspeita ou indicador de risco para perda auditiva (CAB 33), mesmo com teste da orelhinha normal → audiologia [F]"],
          ["Saúde bucal", "Desde o 1º dente", "Escovar 2x/dia com creme dental ≥ 1.000 ppm de flúor (grão de arroz até 3 anos e 11 meses; ervilha a partir dos 4); acompanhamento odontológico na Caderneta [F]"],
          ["Anemia", "Só com fator de risco", "Lactente: prematuro, baixo peso, falha da profilaxia, dieta pobre em ferro ou crescimento inadequado → hemograma + ferritina + PCR aos 9–12 meses (SBP 2026) [F]; > 2 anos com dieta pobre em ferro, perdas ou infecções frequentes → hemograma anual até 5 anos (CAB 33) [F]"],
          ["Perfil lipídico", "Seletivo: 2–8 e 12–16 anos com fator de risco; universal: 9–11 e 17–21 anos (SBC 2025) [F]", "Fatores: história familiar de hipercolesterolemia ou DCV precoce, sobrepeso/obesidade, DM, HAS, tabagismo [F]. Ver divergência com o MS"],
          ["Obesidade – comorbidades", "Obesidade a partir dos 10 anos [C]", "Glicemia/HbA1c, perfil lipídico e ALT (AAP 2023); DM2: a cada 3 anos se sobrepeso + fator de risco após a puberdade ou ≥ 10 anos (ADA) [C]"],
          ["Adolescente – psicossocial", "A cada consulta, parte a sós", "HEEADSSS (inclui alimentação/transtornos alimentares) [C]; depressão 12–18 anos e ansiedade 8–18 anos (USPSTF B; PHQ-9, GAD-7 – este validado a partir de ~11 anos; 8–10 anos: SCARED) [C]; risco de suicídio a partir dos 12 anos (ASQ, AAP) [C]"],
          ["IST", "Vida sexual ativa (≤ 30 anos)", "HIV e sífilis anual por teste rápido; hepatites e clamídia/gonococo conforme subgrupo ou prática sexual (PCDT IST 2022) [F]. < 14 anos com vida sexual: avaliar violência sexual (estupro de vulnerável, Código Penal art. 217-A) [C]; notificar e comunicar ao Conselho Tutelar conforme a norma vigente [NV] (ver 'Violência')"],
          ["Vacinas", "Toda consulta", "Caderneta e PNI 2026; HPV dose única 9–14 anos, resgate 15–19 [F]"]]}},
        {ref: ["caderneta_crianca", "mchat", "sbp_tea", "dbha2025", "cab33_2012", "sbp_ferro2026", "dbdisl2025", "aap_obes2023", "ada_jovem", "headsss", "uspstf_ped", "pcdt_ist2022_q5", "hpv_vac2026"]}
      ]},
      {t: "Pressão arterial pediátrica (DBHA 2025)", b: [
        {tab: {h: ["Classificação", "1 a 12 anos", "≥ 13 anos"], r: [
          ["Normal", "< P90 para idade, sexo e estatura", "< 120/< 80 mmHg"],
          ["Pré-hipertensão (PA elevada)", "≥ P90 e < P95, ou 120/80 mas < P95 (o que for menor)", "120–129/< 80 mmHg"],
          ["HA estágio 1", "≥ P95 até < P95 + 12 mmHg, ou 130/80 a 139/89 (o que for menor)", "130/80 a 139/89 mmHg"],
          ["HA estágio 2", "≥ P95 + 12 mmHg, ou ≥ 140/90 (o que for menor)", "≥ 140/90 mmHg"]]}, nota: "Tabela 9.1 da DBHA 2025 [F]; a diretriz passou a chamar a PA elevada de pré-hipertensão também na criança [F]. Diagnóstico de HA: ≥ P95 em 3 atendimentos diferentes, por método auscultatório [F]. Percentis nas Tabelas 9.2 e 9.3 da diretriz (meninos e meninas, por percentil de estatura). Medida rotineira antes dos 3 anos se: prematuridade, muito baixo peso, RCIU, UTI neonatal ou cateter umbilical, cardiopatia congênita, DRC, ITU de repetição, hematúria ou proteinúria, nefrouropatia, transplante, câncer, DM, medicamentos que elevam a PA, doença sistêmica associada à HA ou hipertensão intracraniana [F]."},
        {ref: ["dbha2025"]}
      ]},
      {t: "O que NÃO pedir em assintomático", b: [
        {ul: [
          "**Hemograma 'de rotina'** em criança saudável, com crescimento e alimentação adequados: sem indicação (SBP 2026; CAB 33) [F].",
          "**Parasitológico de fezes e EAS/urocultura** de rotina: sem impacto demonstrado em desfechos; o parasitológico pode ser feito em áreas de alta prevalência, sem frequência definida [F]. Prevenção: calçados, lavar as mãos, água e alimentos seguros [F].",
          "**Vitamina D (25-OH):** dosar só em grupos de risco – a SBP não recomenda triagem universal [F]. Prevenção: 400 UI/dia até 1 ano e 600 UI/dia de 1 a 18 anos (SBP) [F].",
          "**TSH, glicemia, ferritina, função hepática** em criança eutrófica sem fator de risco [C].",
          "**Exames 'para a escola ou a creche'** em criança saudável: não têm indicação clínica [C]; se a escola exigir, verificar a norma local [NV].",
          "**ECG, ecocardiograma ou raio-X para liberar educação física** em criança assintomática, sem sopro patológico, síncope ou dor no peito ao esforço e sem história familiar de morte súbita ou cardiomiopatia [C]. Atleta competitivo: conferir a diretriz de cardiologia do esporte [NV]."]},
        {perola: {t: "O hemograma 'para ver se está tudo bem'", x: "Na criança saudável, alterações leves e transitórias (linfocitose, eosinofilia, plaquetas no limite) são comuns e levam a repetições, encaminhamentos e preocupação. A pergunta útil é a da história: dieta, sangramentos, crescimento, palidez. Se nada disso aparece, a consulta já respondeu.", d: "menos punções e cascatas em crianças.", l: "I"}},
        {ref: ["sbp_ferro2026", "cab33_2012", "sbp_vitd2024", "cab29_2010"]}
      ]},
      {t: "Navegar", b: [{ir: [["pu-guiada", "Puericultura guiada pela idade"], ["pu-crescimento", "Desvios do crescimento"], ["pu-dnpm", "Desenvolvimento e autismo"], ["pu-triagens", "Triagens neonatais"], ["pu-suplementacao", "Ferro, vitamina D e vitamina A"], ["pu-vacinas", "Vacinação da criança"], ["cr-adolescente", "Depressão e ansiedade na adolescência"], ["pv-infecciosas", "HIV, sífilis e hepatites"], ["violencia", "Violência doméstica ou sexual"], ["pv-checkup", "Check-up do adulto"]]}]}
    ]}
}
);

// Ligações a partir do check-up do adulto
CONDICOES.forEach(c => {
  if (c.id === "pv-checkup" && c.guia && c.guia.secoes && !c.guia.secoes.some(s => s.t === "Navegar")) {
    c.guia.secoes.push({t: "Navegar", b: [{ir: CHK_LINKS.filter(l => l[0] !== "pv-checkup")}]});
    c.mudancas = (c.mudancas || []).concat(["Revisão 20/10/2026 (v41.3): links para os check-ups da pessoa idosa e da criança/adolescente."]);
  }
});

// Camada Betim a partir do Protocolo de Regulação de Exames Eletivos (2026)
CONDICOES.forEach(c => {
  const mud = t => { c.mudancas = (c.mudancas || []).concat([t]); };
  const addF = k => { if (c.evid && c.evid.fontes && !c.evid.fontes.includes(k)) c.evid.fontes.push(k); };
  if (c.id === "pv-colorretal" && c.sus) {
    c.sus.betim = "Protocolo de Regulação de Exames Eletivos de Betim (2026) [F]: colonoscopia pode ser pedida pelo generalista com sangue oculto imunoquímico positivo ou sinais de alarme (perda de peso sem causa, mudança do hábito intestinal); P0 se sangue oculto positivo com perda de peso ou massa palpável; P1 para história familiar (parente de 1º grau com CCR ou pólipo avançado < 60 anos, ou ≥ 2 parentes: iniciar aos 40 anos ou 10 anos antes do caso mais jovem, repetir a cada 5 anos). Oferta do FIT nas UBS e prazo da colonoscopia: confirmar [NV].";
    if (c.nv) c.nv = c.nv.map(x => /Disponibilidade do FIT em Betim/.test(x) ? "Oferta do FIT nas UBS de Betim e prazo até a colonoscopia (os critérios de regulação foram conferidos no protocolo municipal de 2026)." : x);
    addF("betim_exames2026");
    mud("Revisão 20/10/2026 (v41.3): critérios de colonoscopia do protocolo de regulação de exames de Betim (2026).");
  }
  if (c.id === "pv-checkup" && c.sus) {
    c.sus.betim = "Protocolo de Regulação de Exames Eletivos de Betim (2026) [F]: colonoscopia pelo generalista com sangue oculto imunoquímico positivo ou sinais de alarme; mamografia de rastreio em P1; densitometria em P2 para mulheres > 65 e homens > 70 anos. Oferta do FIT nas UBS: confirmar [NV].";
    addF("betim_exames2026");
  }
  if (c.id === "cr-osteoporose" && c.sus) {
    c.sus.betim = (c.sus.betim || "") + " Densitometria (Protocolo de Regulação de Exames de Betim, 2026) [F]: P1 – fratura por trauma mínimo, menopausa < 45 anos ou amenorreia secundária > 1 ano, osteopenia radiológica ou diagnóstico de osteoporose; P2 – mulheres > 65 e homens > 70 anos, IMC < 19, fratura de colo de fêmur materna, doenças e medicamentos que reduzem massa óssea (prednisona ≥ 5 mg/dia > 3 meses), osteopenia e monitorização do tratamento; clínico geral pode solicitar.";
    addF("betim_exames2026");
    mud("Revisão 20/10/2026 (v41.3): critérios de prioridade da densitometria em Betim (protocolo municipal de 2026).");
  }
});
