// ───────────── SAÚDE DA MULHER – guias de decisão (revisão 10/10/2026). Divisão temática inspirada no Notion (não usado como fonte).
Object.assign(FONTES, {
  inca_colo2025: {s: "INCA 2025 – DNA-HPV", t: "INCA/Ministério da Saúde. Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero, 3ª ed., Volume 1 – Rastreamento organizado com teste molecular para detecção de DNA-HPV oncogênico (2025), aprovadas pela Portaria Conjunta SAES/SECTICS nº 13, de 29/07/2025 (diretriz nacional; conduta após colposcopia no Volume 2).", f: "F", url: "https://ninho.inca.gov.br/jspui/bitstream/123456789/17858/3/Diretrizes%20para%20o%20Rastreamento%20do%20c%c3%a2ncer%20do%20colo%20do%20%c3%batero_2025_completo.pdf"},
  inca_colo2016: {s: "INCA 2016 – citologia", t: "INCA/Ministério da Saúde. Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero, 2ª ed., 2016 – Quadro 4 (conduta inicial na APS frente a citologias alteradas) e recomendações para populações especiais (PDF arquivado no Drive da usuária) (diretriz nacional).", f: "F", url: ""},
  mg_hpv: {s: "Agência Minas – DNA-HPV", t: "Agência Minas (31/03, ano não informado no texto): teste molecular de HPV implantado em municípios-piloto de MG (Uberaba e Juiz de Fora desde o fim de 2025; Diamantina e Santo Antônio do Monte previstos em 2026), com expansão gradual (notícia oficial).", f: "F", url: "https://agenciaminas.mg.gov.br/news/pdf/129541.pdf"},
  nt_mama2025: {s: "NT 626/2025 – mamografia", t: "Ministério da Saúde. Nota Técnica nº 626/2025-CGCAN/DECAN/SAES/MS (24/09/2025): rastreamento bienal de 50 a 74 anos; acesso por demanda de 40 a 49 e acima de 74 anos após orientação sobre riscos e benefícios; sinais de suspeita para encaminhamento urgente em qualquer idade (norma).", f: "F", url: "https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/notas-tecnicas/2025/nota-tecnica-no-626-2025-cgcan-decan-saes-ms.pdf"},
  mg_brca: {s: "SES-MG – BRCA", t: "Agência Minas (28/10, ano não informado no texto): teste genético BRCA1/BRCA2 pelo SUS-MG, em convênio com a UFMG, previsto para o início de 2026, para mulheres com histórico pessoal ou familiar de câncer de mama/ovário segundo critérios da SES-MG (notícia oficial).", f: "F", url: "https://www.agenciaminas.mg.gov.br/news/pdf/128015.pdf"},
  hpv_vac2026: {s: "HPV – NT 56/2026 (ES)", t: "SESA-ES. Nota Técnica nº 056/2026 (14/09/2026), que consolida as NT nacionais nº 41/2024, 101/2024, 32/2026 e 96/2026-CGICI/DPNI/SVSA/MS: dose única de 9 a 14 anos; resgate de 15 a 19 anos; imunocomprometidos 9–45 anos (3 doses); vítimas de violência sexual a partir de 2 anos; PrEP 15–45 anos; tratadas por NIC 2+/AIS, qualquer idade (norma estadual que reproduz as nacionais).", f: "F", url: "https://saude.es.gov.br/media/Imuniza%C3%A7%C3%A3o/nota-tecnica/nota_tecnica_no_056_2026_-_sesa_ssvs_gevs_nei_-_atualizacao_da_estrategia_de_vacina_contra_o_hpv-docx.pdf"},
  acr_birads: {s: "ACR BI-RADS", t: "American College of Radiology. BI-RADS Atlas, 5ª ed. (2013) – categorias e condutas (classificação).", f: "C", url: ""},
  uspstf_mama: {s: "USPSTF 2024 – mama", t: "USPSTF. Breast Cancer: Screening (2024) – mamografia bienal dos 40 aos 74 anos (recomendação B) (diretriz).", f: "C", url: ""},
  aps_mulher2016: {s: "MS – Protocolos APS Mulher", t: "Ministério da Saúde/IEP-HSL. Protocolos da Atenção Básica: Saúde das Mulheres, 2016 (protocolo nacional).", f: "C", url: ""}
});

const BETIM_MU = "Contraceptivos na REMUME Betim: levonorgestrel 0,15 + etinilestradiol 0,03 mg; noretisterona 0,35 mg; enantato de noretisterona 50 + valerato de estradiol 5 mg (mensal); medroxiprogesterona 150 mg/mL (trimestral) e 10 mg comprimido; levonorgestrel 0,75 mg. DIU, implante, diafragma e preservativos são insumos (não constam da REMUME): confirmar na unidade.";

CONDICOES.push(
{
  id: "mu-rotina", modulo: "mu", nome: "Consulta preventiva da mulher por ciclo de vida", sistema: "Consulta de rotina", risco: "baixo",
  ciap: "A98 · X77", cid: "Z00.0 · Z01.4",
  tags: "consulta de rotina check-up preventivo mulher adolescente adulta climatério rastreamento vacinas HPV prevenção quaternária o que não pedir",
  S: "Paciente, ___ anos, comparece para consulta preventiva. DUM ___. Ciclos ___ (regulares / irregulares; fluxo ___; dismenorreia ___). G___P___A___. Método contraceptivo ___ (satisfação ___). Desejo reprodutivo ___. Vida sexual ___ (parcerias ___; preservativo ___). Último preventivo ___ (resultado ___). Última mamografia ___. Vacinas ___. Tabaco ___ | álcool ___ | atividade física ___. Sintomas climatéricos ___. Perda urinária ___. Violência (pergunta direta, a sós) ___. Humor ___. Antecedentes familiares (câncer de mama/ovário/colo/intestino; DCV precoce) ___.",
  O: "PA ___ | IMC ___ | cintura ___ cm.\nExame das mamas (se queixa ou alto risco) ___. Exame especular/coleta (se indicado pelo rastreio) ___.",
  A: "Consulta preventiva de mulher de ___ anos. Rastreios em dia: ___. Pendências: ___. Fatores de risco: ___.",
  P: "- Rastreios conforme idade (ver guia): colo do útero ___; mama ___; PA; risco cardiovascular ___; DM ___; ISTs ___.\n- Atualizar vacinas: ___.\n- Planejamento reprodutivo: ___.\n- Orientações: tabaco, álcool, atividade física, alimentação, sono.\n- Retorno: ___.",
  orient: "A consulta preventiva serve para cuidar da saúde antes de aparecerem problemas.\nExames demais também fazem mal: só pedimos os que trazem benefício para a sua idade e o seu risco.\nO preventivo (ou teste de HPV) e a mamografia têm idade e intervalo certos – guarde a data do próximo.\nVocê pode conversar sobre sexualidade, métodos para evitar gravidez e violência com sigilo.",
  alarme: ["Sangramento após a relação ou fora da menstruação", "Sangramento depois da menopausa", "Caroço endurecido na mama ou na axila", "Saída de sangue pelo mamilo"],
  encaminhar: "Conforme achados: colposcopia (rastreio alterado), mastologia (sinais de suspeita), ginecologia (SUA com risco, massa pélvica).",
  sus: {nacional: "Consulta, coleta de citologia/DNA-HPV, testes rápidos (HIV, sífilis, hepatites), vacinas do PNI e contraceptivos estão na APS do SUS.", betim: BETIM_MU},
  evid: {resumo: "Rastreamentos com benefício demonstrado na mulher de risco habitual: colo do útero (DNA-HPV ou citologia), mama (mamografia bienal), PA, risco cardiovascular, DM2 em grupos de risco, HIV/sífilis/hepatites e tabagismo. Exames sem benefício como rotina (USG pélvica ou transvaginal, CA-125, TSH, exame de urina em assintomáticas) geram cascatas e sobrediagnóstico.", certeza: "Variável por rastreio", fontes: ["inca_colo2025", "nt_mama2025", "hpv_vac2026", "sbd_rastreio2025", "aps_mulher2016"]},
  mudancas: ["Item novo. A tabela de exames da página original foi revista: USG transvaginal, TSH e exame de urina saíram da rotina de assintomáticas; colo do útero passou a seguir o DNA-HPV (INCA 2025) e a mama, a NT 626/2025."],
  nv: ["Disponibilidade do DNA-HPV em Betim (em MG, só municípios-piloto confirmados).", "Fluxo de agendamento de mamografia em Betim para 40–49 anos (acesso por demanda)."],
  guia: {
    resumo: "A consulta preventiva muda desfecho pelo que **rastreia certo** (colo, mama, PA, risco cardiovascular, tabaco, violência) e pelo que **deixa de pedir**. Cada exame sem indicação é uma porta para cascata de achados incidentais.",
    calcs: ["antropo", "prevent"],
    secoes: [
     {t: "O que fazer por faixa etária", b: [
       {tab: {h: ["Faixa", "Rastrear / fazer", "Vacinas (PNI)"], r: [
         ["10–19 anos", "Contracepção e prevenção de IST com sigilo; PA; IMC; uso de substâncias; violência; saúde mental. **Sem** colpocitologia/DNA-HPV antes dos 25 [F]", "HPV dose única 9–14 anos; resgate 15–19 anos [F]; hepatite B, dT, febre amarela, meningocócica ACWY conforme calendário [C]"],
         ["20–39 anos", "Colo do útero a partir dos 25 [F]; PA; IMC; tabaco/álcool; HIV, sífilis e hepatites (pelo menos 1 vez e conforme risco); planejamento reprodutivo e ácido fólico se deseja gestar", "dT a cada 10 anos; hepatite B; tríplice viral se não vacinada [C]"],
         ["40–49 anos", "Colo do útero; mamografia **por demanda após conversa** sobre riscos e benefícios [F]; DM2 a partir dos 35 [F]; risco cardiovascular (PREVENT a partir dos 30) [C]", "dT; influenza se grupo prioritário [C]"],
         ["50–74 anos", "Mamografia bienal [F]; colo até 60 (DNA-HPV) ou 64 (citologia) [F]; colorretal [C]; osteoporose aos 65 (DXA) [F]", "dT; influenza; pneumocócica conforme grupo [C]"],
         ["≥ 75 anos", "Mamografia por demanda após conversa [F]; foco em quedas, funcionalidade, polifarmácia", "Influenza; COVID-19 [C]"]]}, nota: "Mamografia: NT 626/2025 [F]. Colo: INCA 2025 (DNA-HPV 25–60 anos) e INCA 2016 (citologia 25–64 anos) [F]. DM2: SBD 2025 [F]. HPV: NT nacionais consolidadas na NT 56/2026 [F]."},
       {ref: ["nt_mama2025", "inca_colo2025", "inca_colo2016", "hpv_vac2026", "sbd_rastreio2025"]}
     ]},
     {t: "O que NÃO pedir (prevenção quaternária)", b: [
       {ul: ["**USG pélvica ou transvaginal de rotina** em assintomática: não reduz mortalidade por câncer de ovário e gera cirurgias desnecessárias por cistos funcionais [C].", "**CA-125** como rastreio: não recomendado [C].", "**Colpocitologia antes dos 25 anos** ou anual após 2 exames normais: aumenta tratamento de lesões que regrediriam [F].", "**Mamografia anual** de rotina e **USG de mama** como rastreio na mulher de risco habitual [C].", "**TSH, vitamina D, exame de urina** em assintomáticas: sem benefício [C].", "**Exame ginecológico 'anual'** fora das indicações (coleta, queixa): não é exigido para iniciar contraceptivo [C]."]},
       {perola: {t: "A transvaginal 'de rotina' é a origem mais comum de cirurgia evitável", x: "Cistos funcionais e miomas assintomáticos achados ao acaso viram ansiedade, repetição de exame e, às vezes, cirurgia. Peça imagem só com queixa (SUA, dor, massa) ou indicação específica.", d: "menos procedimentos e iatrogenia.", l: "C"}},
       {ref: ["inca_colo2016", "aps_mulher2016"]}
     ]},
     {t: "Adolescência e menarca", b: [
       {ul: ["Atender a adolescente **também a sós**; garantir sigilo, salvo risco à vida ou violência [C].", "Oferecer contracepção sem exigir presença dos responsáveis; LARC (DIU, implante) é adequado na adolescência (MEC categoria 1–2) [F].", "Ciclos podem ser irregulares nos 2 primeiros anos; investigar se amenorreia > 90 dias, ciclos < 21 ou > 45 dias após 1 ano da menarca, fluxo > 7 dias ou troca de absorvente a cada 1–2 h [C].", "Menor de 14 anos com vida sexual: avaliar violência (estupro de vulnerável) e acionar a rede de proteção [C]."]},
       {ref: ["mec_cdc2024", "hpv_vac2026"]}
     ]},
     {t: "Pergunte sempre sobre violência", b: [
       {p: "Pergunte a sós, de forma direta e sem julgamento (\"Alguém em casa já te machucou, ameaçou ou te obrigou a algo?\"). Revelar violência abre a porta para proteção, profilaxias e notificação. Ver o guia 'Violência contra a mulher'."},
       {trio: {ideal: "Rastreio de colo por DNA-HPV a cada 5 anos (25–60), mamografia bienal dos 40 aos 74 (USPSTF 2024) ou 50–74 (MS), vacinação HPV e cuidado cardiovascular.", sus: "Citologia trienal (DNA-HPV só em municípios-piloto de MG); mamografia bienal 50–74 e por demanda 40–49 e ≥ 75; vacinas do PNI e testes rápidos na UBS.", ponte: "Mantenha a citologia no intervalo certo enquanto o DNA-HPV não chega a Betim; para 40–49 anos, converse sobre benefício (menos mortes) e dano (falso-positivo, sobrediagnóstico) e solicite se ela desejar."}},
       {ref: ["uspstf_mama", "nt_mama2025", "mg_hpv"]}
     ]}
    ]}
},
{
  id: "mu-colo", modulo: "mu", nome: "Rastreamento do câncer do colo do útero (DNA-HPV e citologia)", sistema: "Rastreio de colo e mama", risco: "moderado",
  ciap: "X37 · A98", cid: "Z12.4 · R87.6",
  tags: "preventivo papanicolau citologia oncótica colpocitologia DNA-HPV teste molecular genotipagem 16 18 ASC-US LSIL HSIL ASC-H AGC colposcopia autocoleta rastreamento colo útero",
  S: "Paciente, ___ anos, para rastreamento do câncer do colo do útero. Último exame ___ (data/método/resultado). Exames anteriores alterados ___ (tratamento ___). Imunossupressão/HIV ___. Histerectomia ___ (motivo ___). Gestação ___. Menopausa ___. Sangramento pós-coito/intermenstrual ___. Vacina HPV ___.",
  O: "Exame especular: colo ___ (aspecto ___), conteúdo vaginal ___. Coleta: ___ (DNA-HPV / citologia convencional / meio líquido; autocoleta ___).",
  A: "Rastreamento do câncer do colo do útero – ___ (rotina / seguimento de resultado ___).",
  P: "- Coleta realizada: ___.\n- Próximo passo conforme resultado (ver guia): ___.\n- Próximo rastreio previsto: ___.\n- Orientada sobre retorno para resultado e sinais de alerta.",
  orient: "O exame procura lesões que aparecem anos antes do câncer e podem ser tratadas.\nO teste de HPV, quando negativo, permite repetir só em 5 anos. A citologia (preventivo), se normal duas vezes, passa a ser a cada 3 anos.\nTer HPV é comum e na maioria das vezes desaparece sozinho; o resultado positivo indica acompanhamento, não câncer.\nVolte para buscar o resultado. Sangramento após a relação deve ser avaliado mesmo com exame recente normal.",
  alarme: ["Sangramento após a relação sexual", "Sangramento depois da menopausa", "Corrimento com sangue ou mau cheiro persistente", "Dor pélvica com sangramento"],
  encaminhar: "Colposcopia: DNA-HPV 16/18; outros tipos com citologia ≥ ASC-US ou insatisfatória; persistência por 24 meses; imunossuprimida com qualquer HPV; citologia ASC-H, AGC, AOI, HSIL, AIS ou carcinoma; ASC-US/LSIL que persistem. Lesão visível suspeita no colo: encaminhar mesmo com citologia normal.",
  sus: {nacional: "Citologia e colposcopia no SUS; DNA-HPV aprovado como método de rastreio (Portaria Conjunta SAES/SECTICS nº 13/2025), em implantação gradual pelos estados.", betim: "Em MG, o DNA-HPV começou em municípios-piloto (Uberaba, Juiz de Fora); Betim não consta. Confirmar o método em uso e o laboratório de referência."},
  evid: {resumo: "O teste de DNA-HPV detecta mais lesões de alto grau que a citologia e um resultado negativo dá proteção longa, permitindo intervalo de 5 anos (recomendação forte, certeza moderada – INCA 2025). Onde ainda não há teste molecular, a citologia trienal após dois exames anuais negativos segue recomendada.", certeza: "Moderada (DNA-HPV primário)", fontes: ["inca_colo2025", "inca_colo2016", "mg_hpv", "hpv_vac2026"]},
  mudancas: ["Item novo. A faixa etária do DNA-HPV é 25–60 anos (INCA 2025), diferente dos 25–64 da citologia; a página original citava apenas a citologia."],
  nv: ["Método de rastreio vigente em Betim (citologia ou DNA-HPV) e laboratório de referência.", "Fluxo e tempo de espera para colposcopia em Betim."],
  guia: {
    resumo: "O que mais muda desfecho aqui é **cobertura** (achar quem nunca fez, sobretudo 30–49 anos) e **seguimento** (não perder quem teve resultado alterado). O DNA-HPV permite intervalo de 5 anos; a citologia, de 3. Fazer mais vezes do que o recomendado não protege mais e aumenta procedimentos desnecessários.",
    calcs: ["colo"],
    secoes: [
     {t: "Quem, quando e como", b: [
       {tab: {h: ["", "DNA-HPV (INCA 2025)", "Citologia (INCA 2016 – enquanto não houver teste molecular)"], r: [
         ["Início", "25 anos (condicional 25–29; forte a partir dos 30) [F]", "25 anos para quem já teve atividade sexual [F]"],
         ["Intervalo após negativo", "5 anos [F]", "Anual nos 2 primeiros; depois a cada 3 anos [F]"],
         ["Término", "60 anos com teste negativo; > 60 nunca testada: 1 teste e, se negativo, encerra [F]", "64 anos, com 2 exames negativos nos últimos 5 anos; > 64 nunca rastreada: 2 exames com intervalo de 1–3 anos [F]"],
         ["Imunossuprimida / HIV", "Após início da atividade sexual, a cada 3 anos, sem idade para parar; qualquer HPV positivo → colposcopia [F]", "Semestral no 1º ano e depois anual; semestral se CD4 < 200 [F]"],
         ["Gestante", "Pode coletar no pré-natal, inclusive endocervical, em qualquer idade gestacional [F]", "Mesmo rastreio; a gestação é oportunidade [F]"],
         ["Histerectomia total por doença benigna", "Pode sair do rastreio se sem lesão de alto grau prévia [F]", "Idem [F]"],
         ["Nunca teve atividade sexual", "Não rastrear [F]", "Não rastrear [F]"]]}},
       {alerta: "Sem atividade sexual, não há rastreio – mas a Diretriz define atividade sexual de forma ampla (inclusive não penetrativa e não consentida)."},
       {ref: ["inca_colo2025", "inca_colo2016"]}
     ]},
     {t: "Fluxo após o DNA-HPV", b: [
       {fluxo: [
         {t: "Resultado do DNA-HPV"},
         {t: "Qual resultado?", ramos: [
           {r: "Não detectado", n: [{t: "Repetir em 5 anos (imunossuprimida: 3 anos)", k: "ok"}]},
           {r: "HPV 16 e/ou 18", n: [{t: "Colposcopia direta", k: "stop"}]},
           {r: "Outros tipos oncogênicos", n: [{t: "Citologia reflexa na mesma amostra"}, {t: "≥ ASC-US ou insatisfatória → colposcopia", k: "stop"}, {t: "Normal → repetir DNA-HPV em 12 meses", k: "warn", s: "Negativo: volta a 5 anos. 16/18: colposcopia. Outros tipos persistindo por 24 meses: colposcopia, qualquer citologia"}]},
           {r: "Inválido", n: [{t: "Nova coleta por profissional"}]}
         ]}
       ], nota: "INCA 2025, Figura 1 e recomendações 18–25 [F]. Imunossuprimida com qualquer HPV positivo: colposcopia (rec. 40) [F]. Autocoleta: se precisar de citologia reflexa, nova coleta por profissional (rec. 7) [F]."},
       {calc: "colo"},
       {ref: ["inca_colo2025"]}
     ]},
     {t: "Conduta inicial na citologia alterada (APS)", b: [
       {tab: {h: ["Resultado", "Idade", "Conduta inicial"], r: [
         ["ASC-US", "< 25", "Repetir em 3 anos [F]"], ["ASC-US", "25–29", "Repetir a citologia em 12 meses [F]"], ["ASC-US", "≥ 30", "Repetir a citologia em 6 meses [F]"],
         ["LSIL", "< 25", "Repetir em 3 anos [F]"], ["LSIL", "≥ 25", "Repetir a citologia em 6 meses [F]"],
         ["ASC-H, AGC, AOI, HSIL, HSIL com suspeita de microinvasão, carcinoma, AIS", "Qualquer", "Encaminhar para colposcopia [F]"]]}, nota: "Quadro 4 da Diretriz INCA 2016 [F]. Tratar processo infeccioso ou atrofia antes de repetir. Dois exames repetidos negativos: volta ao intervalo trienal; alteração persistente na repetição: colposcopia [F]."},
       {perola: {t: "A perda de seguimento mata mais que a falta de exame", x: "Boa parte dos cânceres de colo em mulheres rastreadas ocorre em quem teve resultado alterado e não completou a investigação. Busca ativa pelo ACS e registro de quem foi encaminhada à colposcopia fecham essa porta.", d: "evita progressão de lesões de alto grau para câncer invasor.", l: "I"}},
       {ref: ["inca_colo2016"]}
     ]},
     {t: "Transição e vacinação", b: [
       {ul: ["Ao chegar o DNA-HPV: usar no lugar da citologia na **próxima data prevista** de rastreio [F].", "Quem já tem indicação de colposcopia pela citologia: encaminhar, **sem** fazer DNA-HPV antes [F].", "Prioridade: mulheres de 30–49 anos nunca rastreadas ou com último exame há mais de 36 meses [F].", "O rastreio **não muda** com o status vacinal para HPV [F].", "**Novo (2026):** mulheres tratadas por NIC 2+ ou AIS (conização, CAF) devem receber 3 doses de HPV, em qualquer idade, até 12 meses após o tratamento [F]."]},
       {trio: {ideal: "DNA-HPV com genotipagem 16/18 a cada 5 anos, com oferta de autocoleta para quem não vem à unidade.", sus: "DNA-HPV aprovado em 2025, mas em MG só em municípios-piloto; em Betim, provavelmente citologia [NV].", ponte: "Faça a citologia no intervalo certo (não anual após 2 normais) e foque em cobertura e seguimento – é aí que está o maior ganho enquanto o teste molecular não chega."}},
       {ref: ["inca_colo2025", "hpv_vac2026", "mg_hpv"]}
     ]}
    ]}
},
{
  id: "mu-mama", modulo: "mu", nome: "Câncer de mama: rastreamento e queixas mamárias", sistema: "Rastreio de colo e mama", risco: "moderado",
  ciap: "X19 · X76 · A98", cid: "Z12.3 · N63 · N64.5",
  tags: "mamografia rastreamento câncer de mama 40 anos 50 a 74 BI-RADS nódulo mamário mastalgia descarga papilar alto risco BRCA ultrassonografia mama",
  orient: "A mamografia a cada 2 anos dos 50 aos 74 anos reduz mortes por câncer de mama. Entre 40 e 49 anos você pode fazer se desejar, depois de conversar sobre benefícios e riscos.\nConheça suas mamas. Procure a UBS se notar caroço endurecido, pele repuxada ou em casca de laranja, saída de sangue pelo mamilo ou caroço na axila – em qualquer idade.\nDor nas mamas que varia com a menstruação é muito comum e raramente é câncer.",
  alarme: ["Nódulo endurecido, fixo ou que cresce", "Pele em casca de laranja, vermelhidão ou retração", "Saída de sangue por um mamilo", "Caroço endurecido na axila", "Mudança no formato do mamilo"],
  encaminhar: "Urgente (qualquer idade): nódulo endurecido e fixo ou crescente; descarga papilar sanguinolenta unilateral; lesão eczematosa do mamilo refratária; pele em casca de laranja ou retração; linfonodo axilar endurecido; aumento da mama com edema; retração unilateral do mamilo; mastite que não melhora com antibiótico; nódulo unilateral em homem. BI-RADS 4 ou 5: mastologia para biópsia.",
  sus: {nacional: "Mamografia bienal 50–74 anos; por demanda (após orientação) de 40–49 e > 74 anos; mamografia diagnóstica com prioridade para sintomáticas (NT 626/2025).", betim: "Agendamento e regulação da mamografia e da mastologia em Betim: confirmar fluxo local."},
  evid: {resumo: "A mamografia bienal reduz a mortalidade por câncer de mama, com benefício absoluto maior a partir dos 50 anos; entre 40 e 49 o benefício é menor e os danos (falso-positivos, biópsias, sobrediagnóstico) proporcionalmente maiores – por isso o MS garante o acesso por demanda após decisão informada, e a USPSTF (2024) passou a recomendar a partir dos 40.", certeza: "Moderada", fontes: ["nt_mama2025", "uspstf_mama", "acr_birads", "mg_brca"]},
  mudancas: ["Item novo. Atualizado pela NT 626/2025 (rastreio 50–74 anos; acesso por demanda a partir dos 40)."],
  nv: ["Critérios da SES-MG para o teste BRCA pelo SUS e fluxo de solicitação.", "Fila de mamografia diagnóstica em Betim para sintomáticas."],
  guia: {
    resumo: "Duas decisões mudam desfecho: **não atrasar a mulher com sinal de suspeita** (encaminhamento urgente, em qualquer idade, independentemente de mamografia recente) e **identificar a de alto risco**, que precisa de rastreio diferente. Para as demais, mamografia bienal 50–74 e decisão compartilhada aos 40–49.",
    secoes: [
     {t: "Rastreamento na mulher de risco habitual", b: [
       {tab: {h: ["Idade", "MS (NT 626/2025)", "Outras referências"], r: [
         ["40–49", "Acesso por demanda, após orientação sobre riscos e benefícios [F]", "USPSTF 2024: bienal a partir dos 40 [C]; SBM/CBR/FEBRASGO: anual a partir dos 40 [C]"],
         ["50–74", "Rastreamento bienal [F]", "Concordância geral [C]"],
         ["≥ 75", "Acesso por demanda, após orientação [F]", "Individualizar pela expectativa de vida [C]"]]}},
       {p: "**Conversa para 40–49 anos:** a cada 1.000 mulheres rastreadas por 10 anos, poucas mortes são evitadas, enquanto uma parte relevante terá falso-positivo e algumas, biópsia desnecessária ou sobrediagnóstico. Quem valoriza mais a chance de evitar a morte do que o desconforto de exames extras tende a escolher rastrear [C]."},
       {ref: ["nt_mama2025", "uspstf_mama"]}
     ]},
     {t: "Sinais de suspeita – encaminhar com urgência", b: [
       {ul: ["Nódulo endurecido e fixo, em qualquer idade [F]", "Nódulo que vem aumentando de tamanho [F]", "Descarga papilar sanguinolenta unilateral [F]", "Lesão eczematosa do mamilo que não responde ao tratamento tópico [F]", "Pele em casca de laranja ou retração da pele [F]", "Linfonodo axilar endurecido, fixo ou móvel [F]", "Aumento progressivo da mama com edema, vermelhidão ou casca de laranja [F]", "Retração unilateral do mamilo [F]", "Mastite que não melhora após antibiótico adequado [F]", "Homem com nódulo unilateral [F]"]},
       {alerta: "Mamografia recente normal não afasta câncer diante de nódulo palpável: encaminhe pela clínica."},
       {ref: ["nt_mama2025"]}
     ]},
     {t: "Interpretação do BI-RADS", b: [
       {tab: {h: ["Categoria", "Significado", "Conduta na APS"], r: [
         ["0", "Incompleto", "Completar com imagem adicional (USG, incidências) [C]"], ["1–2", "Normal / benigno", "Rastreio de rotina [C]"],
         ["3", "Provavelmente benigno (≤ 2% de malignidade)", "Controle de imagem em 6 meses (depois 6 e 12) [C]"],
         ["4 (A, B, C)", "Suspeito", "Biópsia – encaminhar à mastologia [C]"], ["5", "Altamente sugestivo de malignidade", "Biópsia com prioridade [C]"], ["6", "Malignidade confirmada", "Oncologia [C]"]]}},
       {ref: ["acr_birads"]}
     ]},
     {t: "Queixas comuns e alto risco", b: [
       {ul: ["**Mastalgia cíclica:** tranquilizar, sutiã adequado, analgésico; sem exame se exame físico normal e < 40 anos [C].", "**Nódulo em mulher < 30–35 anos:** USG é o exame inicial; fibroadenoma típico pode ser acompanhado [C].", "**Descarga papilar** bilateral, multiductal, leitosa: geralmente benigna (investigar prolactina e medicamentos); unilateral, uniductal, espontânea ou sanguinolenta: encaminhar [C].", "**Alto risco** (mutação BRCA conhecida, parente de 1º grau com BRCA, radioterapia torácica antes dos 30, risco vitalício ≥ 20%): rastreio diferente (mamografia ± RM, início precoce) – encaminhar [C]. Em MG, teste BRCA1/2 pelo SUS previsto desde 2026 para critérios da SES-MG [F]."]},
       {trio: {ideal: "Mamografia bienal a partir dos 40 (USPSTF 2024); RM anual + mamografia no alto risco; teste genético para quem tem critério.", sus: "Bienal 50–74; por demanda 40–49 e ≥ 75; RM e genética via especialista; BRCA pela SES-MG para critérios específicos.", ponte: "Para 40–49: decisão compartilhada e solicitação se desejar. Para alto risco: encaminhar à mastologia/oncogenética pela regulação."}},
       {ref: ["acr_birads", "mg_brca"]}
     ]}
    ]}
}
);
