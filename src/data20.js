// ───────────── PREVENÇÃO E RASTREIOS DO ADULTO (revisão 10/10/2026). Temas guiados pelo Notion (não usado como fonte).
Object.assign(FONTES, {
  conitec_ccr2026: {s: "CONITEC CP 20/2026 – colorretal", t: "CONITEC. Relatório preliminar – Diretrizes Brasileiras do Rastreamento do Câncer de Cólon e Reto (Consulta Pública nº 20/2026): FIT (pesquisa imunoquímica de sangue oculto) bienal dos 50 aos 75 anos, ponto de corte 50 ng/mL, colonoscopia se positivo; colonoscopia não recomendada como rastreio primário; não se aplica a sintomáticos (diretriz em consulta pública).", f: "F", url: "https://www.gov.br/conitec/pt-br/midias/consultas/relatorios/2026/relatorio-preliminar-diretrizes-brasileiras-do-rastreamento-do-cancer-de-colon-e-reto-cp-20/@@display-file/file"},
  fit_sus2026: {s: "FIT no SUS (maio/2026)", t: "CFF, 25/05/2026: SUS adota o teste imunoquímico fecal (FIT) como exame de referência para rastrear câncer colorretal em pessoas assintomáticas de 50 a 75 anos, com aval técnico da CONITEC; positivo → colonoscopia (notícia; portaria não citada).", f: "F", url: "https://site.cff.org.br/noticia/Noticias-gerais/25/05/2026/sus-adota-novo-exame-para-detectar-cancer-de-intestino-antes-dos-sintomas"},
  inca_pulmao2026: {s: "INCA – estudo de rastreio de pulmão", t: "Portal Afya, 02/04/2026: INCA e SMS-Rio iniciam estudo de 2 anos para avaliar a viabilidade de um programa de rastreamento do câncer de pulmão no SUS (50–80 anos, fumantes ou ex-fumantes há até 15 anos, alta carga tabágica) (notícia).", f: "F", url: "https://portal.afya.com.br/saude/inca-inicia-estudo-para-viabilizar-rastreamento-de-cancer-de-pulmao-no-sus"},
  uspstf_pulmao: {s: "USPSTF 2021 – pulmão", t: "USPSTF. Lung Cancer: Screening (2021) – TC de baixa dose anual de 50 a 80 anos com ≥ 20 maços-ano, fumantes ou que pararam há ≤ 15 anos (recomendação B) (diretriz).", f: "C", url: ""},
  uspstf_ccr: {s: "USPSTF 2021 – colorretal", t: "USPSTF. Colorectal Cancer: Screening (2021) – 45 a 75 anos; FIT anual, colonoscopia a cada 10 anos ou outras estratégias (diretriz).", f: "C", url: ""},
  uspstf_naorastrear: {s: "USPSTF – não rastrear", t: "USPSTF: recomendações contra rastreamento (D) de câncer de tireoide, testículo, ovário e pâncreas em assintomáticos; ECG em adultos de baixo risco cardiovascular; evidência insuficiente (I) para exame de pele de rotina (diretriz).", f: "C", url: ""},
  pcdt_hcv2026: {s: "PCDT Hepatite C 2026", t: "Portal Afya: atualização de 2026 do PCDT Hepatite C – testar todas as pessoas com 18 anos ou mais ao menos uma vez na vida; intensificar busca ativa ≥ 40 anos; testagem anual em vulneráveis; a cada 4 meses em usuários de PrEP (notícia que resume o PCDT; portaria não citada).", f: "F", url: "https://portal.afya.com.br/infectologia/pcdt-de-hepatite-c-amplia-rastreio-e-simplifica-cuidado"},
  pni_adulto2026: {s: "PNI 2026 – adulto", t: "Ministério da Saúde. Calendário Nacional de Vacinação 2026 – Adulto (25–59 anos), atualizado em 30/01/2026 (norma).", f: "F", url: "https://www.gov.br/saude/pt-br/composicao/svsa/pni/calendario-tecnico/calendario-tecnico-nacional-de-vacinacao-adulto/@@download/file"},
  pni_idoso2026: {s: "PNI 2026 – idoso", t: "Ministério da Saúde. Calendário Nacional de Vacinação 2026 – Idoso (≥ 60 anos), atualizado em 29/01/2026 (norma).", f: "F", url: "https://www.gov.br/saude/pt-br/composicao/svsa/pni/calendario-tecnico/calendario-tecnico-nacional-de-vacinacao-idoso/@@download/file"},
  audit_c: {s: "AUDIT-C", t: "Bush K et al. The AUDIT alcohol consumption questions (AUDIT-C), 1998; OMS – AUDIT e intervenção breve (escala e manual).", f: "C", url: ""}
});

CONDICOES.push(
{
  id: "pv-checkup", modulo: "pv", nome: "Check-up do adulto: o que rastrear e o que não pedir", sistema: "Rastreios gerais", risco: "baixo",
  ciap: "A98", cid: "Z00.0",
  tags: "check-up exames de rotina rastreamento adulto idoso prevenção quaternária o que não pedir hemograma TSH EAS ECG PSA vitamina D risco cardiovascular",
  S: "Paciente, ___ anos, sexo ___, para consulta preventiva. Queixas ___. Tabaco ___ (maços-ano ___) | álcool (AUDIT-C ___) | atividade física ___ | alimentação ___. Antecedentes pessoais ___ e familiares (DCV precoce, DM, câncer de intestino/mama/próstata) ___. Medicamentos ___. Último rastreio: ___. Vacinas ___. Saúde mental/sono ___. Violência ___.",
  O: "PA ___ | IMC ___ | cintura ___ cm.",
  A: "Consulta preventiva. Rastreios indicados: ___. Fatores de risco: ___.",
  P: "- Solicito conforme idade e risco (ver guia): ___.\n- Vacinas: ___.\n- Intervenção breve: ___ (tabaco/álcool/atividade física).\n- Retorno com resultados: ___.",
  orient: "Os exames de rotina são escolhidos pela sua idade e pelo seu risco – pedir exames demais traz achados que geram preocupação e procedimentos sem benefício.\nOs exames que realmente salvam vidas são poucos: pressão arterial, colesterol e glicose quando indicados, os de câncer na idade certa e as vacinas em dia.\nParar de fumar e reduzir o álcool fazem mais pela sua saúde do que qualquer exame.",
  alarme: ["Perda de peso sem explicação", "Sangue nas fezes ou mudança persistente do hábito intestinal", "Tosse com sangue", "Sangue na urina"],
  encaminhar: "Conforme resultado de rastreio (colonoscopia, mamografia/colposcopia, urologia).",
  sus: {nacional: "Rastreios com indicação estão disponíveis na APS do SUS: PA, glicemia/HbA1c, perfil lipídico, testes rápidos de IST, FIT (em implantação), citologia/DNA-HPV, mamografia; vacinas do PNI.", betim: "Fluxo local de FIT e colonoscopia em Betim: confirmar."},
  evid: {resumo: "Rastreios com redução de mortalidade ou de eventos: PA, risco cardiovascular, DM2 em grupos de risco, câncer colorretal, colo do útero, mama, pulmão (alto risco, onde houver programa), HIV/hepatites, tabaco e álcool. Exames laboratoriais 'de rotina' sem indicação não reduzem mortalidade e aumentam cascatas.", certeza: "Variável por rastreio", fontes: ["conitec_ccr2026", "pcdt_hcv2026", "uspstf_naorastrear", "sbd_rastreio2025", "prevent_aha", "pni_adulto2026"]},
  mudancas: ["Item novo. A rotina da página original pedia TSH, EAS e PSA para todos: retirados por falta de benefício em assintomáticos (PSA vira decisão compartilhada; ver Saúde do homem)."],
  nv: ["Implantação do FIT e fluxo de colonoscopia em Betim."],
  guia: {
    resumo: "Bom check-up é **curto e certeiro**: PA, risco cardiovascular, DM2 quando indicado, câncer colorretal (FIT) dos 50 aos 75, rastreios específicos por sexo, hepatite C/HIV ao menos uma vez, tabaco, álcool e vacinas. **Hemograma, TSH, EAS, ECG e PSA 'de rotina'** não entram.",
    calcs: ["prevent", "antropo", "macos", "ccr", "sc:auditc"],
    secoes: [
     {t: "O que rastrear", b: [
       {tab: {h: ["Rastreio", "Quem", "Como / intervalo"], r: [
         ["PA", "Todo adulto", "Toda consulta; ≥ 1x/ano [C]"],
         ["Risco cardiovascular", "30–79 anos", "PREVENT (SBC 2025) com perfil lipídico [C]"],
         ["DM2", "≥ 35 anos ou antes com obesidade e fatores de risco", "Glicemia de jejum/HbA1c a cada 3 anos [F]"],
         ["Câncer colorretal", "50–75 anos, risco padrão, assintomático", "FIT bienal; positivo → colonoscopia [F]"],
         ["Câncer de pulmão", "50–80 anos, ≥ 20 maços-ano, fuma ou parou há ≤ 15 anos", "TC de baixa dose anual (USPSTF) – sem programa no SUS [C]"],
         ["Hepatite C", "Todos ≥ 18 anos, ao menos uma vez", "Teste rápido [F]"],
         ["HIV, sífilis, hepatite B", "Ao menos uma vez e conforme risco", "Testes rápidos [C]"],
         ["Tabaco e álcool", "Todo adulto", "Perguntar e intervir (AUDIT-C) [C]"],
         ["Aneurisma de aorta abdominal", "Homens 65–75 anos que já fumaram", "USG de abdome 1 vez [C]"],
         ["Osteoporose", "Mulheres ≥ 65; homens ≥ 70; ou com fatores de risco", "DXA (PCDT 2025) [F]"],
         ["Colo do útero e mama", "Ver módulo Saúde da Mulher", "—"]]}},
       {ref: ["sbd_rastreio2025", "conitec_ccr2026", "uspstf_pulmao", "pcdt_hcv2026", "pcdt_osteo2025", "prevent_aha"]}
     ]},
     {t: "O que NÃO pedir em assintomático", b: [
       {ul: ["**Hemograma, EAS, TSH, função hepática, vitamina D, ferritina** 'de rotina' [C].", "**ECG** em adulto de baixo risco cardiovascular (USPSTF D) [C].", "**PSA** sem decisão compartilhada (MS não recomenda rastreio populacional) [F].", "**USG de tireoide, de abdome total ou pélvica**, CA-125, CEA, marcadores tumorais [C].", "**Exame de pele e autoexame testicular** como rastreio populacional [C]."]},
       {perola: {t: "Um exame inútil não é inofensivo", x: "Um nódulo de tireoide achado ao acaso, uma transaminase levemente alterada ou um PSA limítrofe geram retornos, novos exames, biópsias e ansiedade. Antes de pedir, pergunte: 'o que eu faço com o resultado alterado?'. Se a resposta não muda conduta, não peça.", d: "menos sobrediagnóstico e iatrogenia.", l: "I"}},
       {ref: ["uspstf_naorastrear", "nt_psa2023"]}
     ]}
    ]}
},
{
  id: "pv-colorretal", modulo: "pv", nome: "Câncer colorretal: rastreamento com FIT", sistema: "Rastreio de câncer", risco: "moderado",
  ciap: "D36 · A98", cid: "Z12.1",
  tags: "câncer colorretal intestino rastreamento sangue oculto nas fezes FIT teste imunoquímico colonoscopia pólipo história familiar 50 75 anos",
  orient: "O câncer de intestino é dos mais comuns e, descoberto cedo, tem cura. Dos 50 aos 75 anos, um exame simples de fezes a cada 2 anos ajuda a encontrar sangramentos invisíveis.\nSe o exame der positivo, a colonoscopia é necessária – não deixe de fazer.\nSangue nas fezes, mudança do hábito intestinal que não passa ou perda de peso: procure a UBS, mesmo com exame recente normal.",
  alarme: ["Sangue nas fezes", "Mudança do hábito intestinal por mais de 4 semanas", "Anemia por falta de ferro sem causa", "Perda de peso sem explicação", "Massa abdominal ou retal"],
  encaminhar: "FIT positivo → colonoscopia. Sintomas ou sinais de alarme → investigação diagnóstica (não é rastreio). Alto risco (parente de 1º grau com CCR < 60 anos, síndrome hereditária, DII, pólipos prévios) → colonoscopia/especialista.",
  sus: {nacional: "FIT adotado como exame de referência para rastreio no SUS (maio/2026), com diretriz nacional em consulta pública (CP 20/2026); colonoscopia pela regulação.", betim: "Disponibilidade do FIT e fila de colonoscopia em Betim: confirmar."},
  evid: {resumo: "Pesquisa de sangue oculto nas fezes reduz a mortalidade por câncer colorretal; o FIT é mais sensível que o teste de guaiaco (~79% × 20–50% para câncer). A diretriz brasileira em consulta pública recomenda FIT bienal dos 50 aos 75, ponto de corte 50 ng/mL e colonoscopia diagnóstica se positivo. A USPSTF (2021) inicia aos 45.", certeza: "Moderada a alta", fontes: ["conitec_ccr2026", "fit_sus2026", "uspstf_ccr"]},
  mudancas: ["Item novo; a página original citava 'sangue oculto' sem método nem faixa etária."],
  nv: ["Texto final das Diretrizes de rastreamento do CCR (após a consulta pública) e portaria.", "Disponibilidade do FIT em Betim e tempo até a colonoscopia."],
  guia: {
    resumo: "O ganho do rastreio colorretal se perde em dois pontos: **não oferecer** (sobretudo a homens que vêm pouco à UBS) e **não completar a colonoscopia** após FIT positivo. Sintomático não é rastreio – investigue.",
    calcs: ["ccr"],
    secoes: [
     {t: "Diretriz brasileira (em consulta pública, 2026)", b: [
       {tab: {h: ["Ponto", "Recomendação", "Força / certeza"], r: [
         ["Método", "Sangue oculto nas fezes, preferindo FIT (quantitativo ou qualitativo) [F]", "Forte / alta"],
         ["Faixa etária", "50 a 75 anos, risco padrão, assintomático [F]", "Condicional / moderada"],
         ["Intervalo", "Bienal [F]", "Condicional / baixa"],
         ["Ponto de corte", "50 ng/mL (≈ 10 µg Hb/g de fezes) [F]", "Forte"],
         ["FIT positivo", "Colonoscopia diagnóstica [F]", "Forte"],
         ["Colonoscopia como rastreio primário", "Não recomendada no programa (FIT preferido) [F]", "—"],
         ["Após colonoscopia completa normal", "Repetir em 10 anos; sem FIT nesse intervalo [F]", "—"]]}, nota: "Relatório preliminar CONITEC CP 20/2026 [F]. Guaiaco é alternativa só se não houver FIT [F]."},
       {calc: "ccr"},
       {ref: ["conitec_ccr2026", "fit_sus2026"]}
     ]},
     {t: "Alto risco e sintomáticos", b: [
       {ul: ["Parente de 1º grau com câncer colorretal ou adenoma avançado (sobretudo < 60 anos): colonoscopia a partir dos 40 anos ou 10 anos antes do caso índice [C].", "Síndrome de Lynch, polipose, DII de longa data: seguimento especializado [C].", "Sangramento retal, mudança de hábito, anemia ferropriva, perda de peso: **investigação diagnóstica**, independentemente do último rastreio [F]."]},
       {trio: {ideal: "FIT anual ou bienal a partir dos 45–50 anos, com colonoscopia em até 30–60 dias após positivo e busca ativa de quem não completa.", sus: "FIT adotado em 2026 (50–75 anos, bienal) – implantação em curso; colonoscopia pela regulação.", ponte: "Enquanto o FIT não chega, ofereça o teste disponível (guaiaco, se for o caso) e registre quem tem positivo para cobrar a colonoscopia."}},
       {ref: ["conitec_ccr2026", "uspstf_ccr"]}
     ]}
    ]}
},
{
  id: "pv-pulmao", modulo: "pv", nome: "Câncer de pulmão: TC de baixa dose em tabagistas", sistema: "Rastreio de câncer", risco: "moderado",
  ciap: "R84 · P17", cid: "Z12.2 · F17",
  tags: "câncer de pulmão rastreamento tomografia de baixa dose TCBD tabagista maços-ano ex-fumante cessação tabágica nódulo pulmonar Lung-RADS",
  orient: "Parar de fumar é a medida que mais reduz o risco de câncer de pulmão – em qualquer idade.\nPara fumantes pesados de 50 a 80 anos, a tomografia de baixa dose anual pode achar o câncer cedo, mas também acha nódulos benignos que exigem novos exames. Converse sobre benefícios e riscos.\nTosse com sangue, tosse que muda e não melhora, ou perda de peso: procure a UBS.",
  alarme: ["Tosse com sangue", "Tosse persistente que mudou de padrão", "Perda de peso sem explicação", "Rouquidão por mais de 3 semanas"],
  encaminhar: "Sintomas → investigação diagnóstica (RX/TC). Nódulo pulmonar → seguimento conforme tamanho/aspecto (pneumologia).",
  sus: {nacional: "Sem programa nacional de rastreio por TC de baixa dose; INCA iniciou estudo de viabilidade em 2026. Tratamento do tabagismo no SUS (TRN e bupropiona).", betim: "REMUME Betim: adesivo, goma e pastilha de nicotina; bupropiona 150 mg. Acesso a TC de baixa dose para rastreio: não identificado."},
  evid: {resumo: "Em fumantes de alta carga, a TC de baixa dose anual reduziu a mortalidade por câncer de pulmão (NLST ~20%; NELSON ~24% em homens), com falso-positivos frequentes. USPSTF (2021): 50–80 anos, ≥ 20 maços-ano, fumante ou que parou há ≤ 15 anos. No SUS, não há programa; o INCA começou um estudo de viabilidade em 2026.", certeza: "Moderada", fontes: ["uspstf_pulmao", "inca_pulmao2026", "cochrane_tabaco", "remume"]},
  mudancas: ["Item novo."],
  nv: ["Possibilidade de TC de baixa dose pela regulação de Betim/MG."],
  guia: {
    resumo: "No SUS, o que mais muda desfecho no tabagista ainda é **tratar o tabagismo** (TRN e bupropiona na REMUME). A TC de baixa dose é eficaz no alto risco, mas exige programa (laudo padronizado, seguimento de nódulos, cessação) – sem ele, aumenta dano.",
    calcs: ["macos"],
    secoes: [
     {t: "Quem seria elegível", b: [
       {calc: "macos"},
       {ul: ["USPSTF 2021: 50–80 anos, ≥ 20 maços-ano, fumante atual ou que parou há ≤ 15 anos; TC anual [C].", "Estudo do INCA (2026): 50–80 anos, fumantes ou ex-fumantes há até 15 anos, alta carga tabágica [F].", "Parar o rastreio após 15 anos sem fumar ou se a expectativa de vida/condição clínica não permitir tratamento curativo [C]."]},
       {ref: ["uspstf_pulmao", "inca_pulmao2026"]}
     ]},
     {t: "Decisão no SUS de hoje", b: [
       {trio: {ideal: "Programa organizado de TC de baixa dose anual para o alto risco, com Lung-RADS, seguimento de nódulos e cessação tabágica integrada.", sus: "Sem programa nacional; estudo do INCA em andamento (RJ).", ponte: "Não peça TC 'de rastreio' isolada sem fluxo de seguimento. Priorize a cessação (TRN + bupropiona), investigue sintomas e, se o paciente puder fazer a TC fora do SUS, oriente decisão compartilhada sobre falso-positivos."}},
       {perola: {t: "Parar de fumar vale mais que qualquer tomografia", x: "A cessação reduz mortalidade total, cardiovascular e por vários cânceres; combinada ao rastreio, a redução de mortalidade por câncer de pulmão é ainda maior. Toda consulta do tabagista é oportunidade de oferecer tratamento.", d: "menos mortes por câncer e DCV.", l: "C"}},
       {ref: ["cochrane_tabaco", "remume"]}
     ]}
    ]}
},
{
  id: "pv-nao-rastrear", modulo: "pv", nome: "Pele, boca, tireoide, ovário, testículo: quando não rastrear", sistema: "Rastreio de câncer", risco: "baixo",
  ciap: "A98", cid: "Z12.8",
  tags: "prevenção quaternária câncer de pele melanoma câncer de boca tireoide USG nódulo ovário CA-125 testículo autoexame pâncreas marcadores tumorais",
  orient: "Nem todo exame preventivo traz benefício: alguns encontram alterações que nunca causariam doença e levam a cirurgias desnecessárias.\nObserve e mostre à equipe: pinta que muda de cor, forma ou tamanho; ferida na boca que não cicatriza em 3 semanas; caroço no pescoço ou no testículo.",
  alarme: ["Pinta que muda, sangra ou tem bordas irregulares", "Ferida na boca que não cicatriza em 3 semanas", "Caroço endurecido no testículo", "Nódulo no pescoço que cresce"],
  encaminhar: "Lesão suspeita de pele → dermatologia; lesão oral persistente → estomatologia/CEO; nódulo testicular → USG e urologia com prioridade.",
  sus: {nacional: "Exame clínico oportunístico na APS; saúde bucal (CEO) para lesões orais.", betim: "Referência de estomatologia/CEO e dermatologia em Betim: confirmar."},
  evid: {resumo: "Rastreamento populacional de câncer de tireoide, testículo, ovário e pâncreas não reduz mortalidade e causa dano (USPSTF D). Para pele, a evidência é insuficiente (I). O exame oportunístico de lesões em quem tem fatores de risco (tabaco/álcool para boca; pele clara e muitos nevos para melanoma) segue razoável.", certeza: "Moderada", fontes: ["uspstf_naorastrear"]},
  mudancas: ["Item novo, a partir do bloco 'Rastreamento de cânceres' da página da Saúde da Mulher."],
  nv: [],
  guia: {
    resumo: "Aqui a decisão que muda desfecho é **não pedir**: USG de tireoide, CA-125 e marcadores em assintomáticos geram sobrediagnóstico (a 'epidemia' de câncer de tireoide é exemplo clássico) – e **examinar quem tem queixa ou alto risco**.",
    secoes: [
     {t: "Resumo por órgão", b: [
       {tab: {h: ["Órgão", "Rastreio populacional?", "O que fazer"], r: [
         ["Pele (melanoma)", "Não (evidência insuficiente) [C]", "Examinar lesões em pele clara, muitos nevos, história familiar; regra ABCDE; fotoproteção [C]"],
         ["Boca", "Não organizado [C]", "Inspecionar a boca de tabagistas e etilistas na consulta; lesão > 3 semanas → estomatologia [C]"],
         ["Tireoide", "Não (USPSTF D) [C]", "Palpar só se queixa; não pedir USG de rotina [C]"],
         ["Ovário", "Não (USPSTF D) [C]", "Sem USG/CA-125 de rotina; BRCA → especialista [C]"],
         ["Testículo", "Não (USPSTF D) [C]", "Investigar queixa; nódulo → USG urgente [C]"],
         ["Pâncreas", "Não (USPSTF D) [C]", "Só alto risco genético, com especialista [C]"],
         ["Fígado", "Não na população geral", "Cirrose ou hepatite B crônica: USG 6/6 meses (vigilância) [C]"]]}},
       {ref: ["uspstf_naorastrear"]}
     ]}
    ]}
},
{
  id: "pv-infecciosas", modulo: "pv", nome: "HIV, sífilis e hepatites B e C: quem testar", sistema: "Rastreios gerais", risco: "moderado",
  ciap: "A98 · B90 · D72", cid: "Z11.4 · Z11.5",
  tags: "teste rápido HIV sífilis hepatite B hepatite C rastreamento testagem 18 anos uma vez na vida PrEP vacinação hepatite B tuberculose latente",
  orient: "Todo adulto deve fazer, pelo menos uma vez, os testes rápidos de HIV, sífilis e hepatites B e C. São rápidos, gratuitos e sigilosos.\nHepatite C e HIV têm tratamento eficaz; hepatite C tem cura.\nSe você teve relação sem preservativo, novas parcerias ou outras exposições, repita os testes.",
  alarme: ["Exposição sexual de risco nas últimas 72 horas (PEP)", "Ferida genital ou manchas pelo corpo"],
  encaminhar: "Teste reagente → confirmação e vinculação (SAE/infectologia conforme fluxo); exposição ≤ 72 h → PEP.",
  sus: {nacional: "Testes rápidos de HIV, sífilis, hepatite B e C na APS; vacina hepatite B para toda a população; PrEP/PEP.", betim: "Serviço de referência (SAE/infectologia) em Betim: confirmar em 'Rede de Betim'."},
  evid: {resumo: "O PCDT Hepatite C (atualização 2026) recomenda testar todas as pessoas ≥ 18 anos ao menos uma vez, com busca ativa a partir dos 40, testagem anual em vulneráveis e a cada 4 meses em usuários de PrEP. Diagnóstico precoce de HIV e hepatites permite tratamento que reduz mortalidade e transmissão.", certeza: "Alta (benefício do tratamento)", fontes: ["pcdt_hcv2026", "pni_adulto2026", "pcdt_pep"]},
  mudancas: ["Item novo."],
  nv: ["Número e data da portaria do PCDT Hepatite C 2026.", "Fluxo de confirmação e vinculação em Betim."],
  guia: {
    resumo: "**Testar todo adulto ao menos uma vez** para HIV, sífilis e hepatites B e C – e repetir conforme risco. Hepatite C é curável e costuma ser silenciosa por décadas: o adulto com mais de 40 anos que nunca testou é o alvo prioritário.",
    secoes: [
     {t: "Quem testar e com que frequência", b: [
       {tab: {h: ["Agravo", "Quem", "Frequência"], r: [
         ["Hepatite C", "Todos ≥ 18 anos; busca ativa ≥ 40 anos [F]", "1 vez; anual em vulneráveis; a cada 4 meses em PrEP; a cada gestação [F]"],
         ["Hepatite B", "Todos ao menos uma vez; não vacinados [C]", "Vacinar todos sem esquema completo (3 doses) [F]"],
         ["HIV", "Todos ao menos uma vez; gestantes; exposição de risco [C]", "Conforme risco (anual ou mais em populações-chave) [C]"],
         ["Sífilis", "Gestantes, parcerias, populações-chave, ISTs [C]", "Conforme risco [C]"]]}},
       {perola: {t: "Hepatite C: oferecer o teste muda a história natural", x: "Os antivirais de ação direta curam mais de 95% dos casos em 8–12 semanas. Quem nunca foi testado pode estar há décadas evoluindo para cirrose sem sintomas.", d: "evita cirrose, carcinoma hepatocelular e transmissão.", l: "C"}},
       {ref: ["pcdt_hcv2026", "pni_adulto2026", "pcdt_pep"]}
     ]}
    ]}
},
{
  id: "pv-vacinas", modulo: "pv", nome: "Vacinas do adulto e do idoso (PNI 2026)", sistema: "Vacinação", risco: "baixo",
  ciap: "A98", cid: "Z27.9",
  tags: "vacina adulto idoso calendário 2026 hepatite B dT difteria tétano febre amarela tríplice viral influenza COVID-19 pneumocócica 23 VPP23 HPV dTpa trabalhador de saúde",
  orient: "Adultos também precisam de vacinas: confira hepatite B, difteria e tétano (reforço a cada 10 anos), febre amarela e tríplice viral.\nA partir dos 60 anos: gripe todo ano e COVID-19 a cada 6 meses.\nTraga a caderneta de vacinação nas consultas.",
  alarme: ["Ferimento sujo ou profundo sem reforço do tétano há mais de 5 anos"],
  encaminhar: "Imunocomprometidos, asplênicos, transplantados e outras condições especiais → CRIE.",
  sus: {nacional: "Calendário Nacional de Vacinação 2026 (adulto e idoso); CRIE para condições especiais.", betim: "Salas de vacina e CRIE de referência: ver 'Rede de Betim'."},
  evid: {resumo: "Calendários do PNI 2026 (atualizados em 29–30/01/2026): hepatite B para toda a população; dT a cada 10 anos; febre amarela em dose única até 59 anos; tríplice viral conforme idade; a partir dos 60, influenza anual e COVID-19 a cada 6 meses; VPP23 para grupos específicos.", certeza: "Norma", fontes: ["pni_adulto2026", "pni_idoso2026", "hpv_vac2026"]},
  mudancas: ["Item novo."],
  nv: ["Esquema de VPP23 por grupo e intervalos (tabela do calendário do idoso de difícil leitura).", "Disponibilidade local de vacinas de CRIE (herpes zóster recombinante, VPC20) para condições especiais."],
  guia: {
    resumo: "Em adultos, as perdas mais comuns são **hepatite B incompleta**, **dT atrasada** e **idoso sem influenza/COVID**. Revise a caderneta em toda consulta preventiva.",
    secoes: [
     {t: "Adulto (25–59 anos)", b: [
       {tab: {h: ["Vacina", "Esquema"], r: [
         ["Hepatite B", "Iniciar ou completar 3 doses (0, 1 e 6 meses) – toda a população [F]"],
         ["dT", "Reforço a cada 10 anos; 5 anos se ferimento de risco; sem esquema: 3 doses com 60 dias de intervalo [F]"],
         ["Febre amarela", "1 dose se nunca vacinado; reforço se só doses fracionadas [F]"],
         ["Tríplice viral", "Até 29 anos: 2 doses; 30–59 anos: 1 dose; trabalhador de saúde: 2 doses [F]"],
         ["HPV", "Grupos prioritários (imunocomprometidos, PrEP, vítimas de violência sexual, tratadas por NIC 2+) [F]"],
         ["VPP23 / varicela", "Só grupos específicos (indígenas; trabalhadores de saúde para varicela) [F]"]]}},
       {ref: ["pni_adulto2026", "hpv_vac2026"]}
     ]},
     {t: "Idoso (≥ 60 anos)", b: [
       {tab: {h: ["Vacina", "Esquema"], r: [
         ["Influenza", "1 dose anual [F]"], ["COVID-19", "A cada 6 meses [F]"], ["Hepatite B", "Iniciar ou completar 3 doses [F]"], ["dT", "Reforço a cada 10 anos [F]"],
         ["Pneumocócica 23 (VPP23)", "Acamados, institucionalizados, indígenas e trabalhadores de saúde [F]"],
         ["Febre amarela", "Só em situação excepcional (área de transmissão), avaliação caso a caso [F]"]]}},
       {trio: {ideal: "Além do PNI: vacina recombinante para herpes zóster ≥ 50 anos, pneumocócica conjugada (VPC20) e VSR ≥ 60–75 anos conforme risco (sociedades e agências internacionais).", sus: "PNI: influenza, COVID-19, hepatite B, dT e VPP23 para grupos; herpes zóster e VPC20 só em situações de CRIE.", ponte: "Ofereça o calendário do PNI completo; para quem pode comprar, informe sobre herpes zóster recombinante e pneumocócica conjugada na rede privada."}},
       {ref: ["pni_idoso2026"]}
     ]}
    ]}
},
{
  id: "pv-alcool", modulo: "pv", nome: "Álcool: rastreio (AUDIT-C) e intervenção breve", sistema: "Rastreios gerais", risco: "moderado",
  ciap: "P15 · P16", cid: "F10.1 · Z72.1",
  tags: "álcool AUDIT AUDIT-C uso de risco binge intervenção breve naltrexona dependência abstinência CAPS AD redução de danos",
  orient: "Para a saúde, quanto menos álcool, melhor – não existe dose totalmente segura.\nBeber 5 ou mais doses numa ocasião aumenta muito o risco de acidentes e violência.\nSe quiser reduzir ou parar, a UBS pode ajudar com acompanhamento e, quando indicado, remédio.\nTremores, suor e agitação ao ficar sem beber são sinais de dependência: não pare de repente sem orientação.",
  alarme: ["Tremor, confusão ou alucinações ao ficar sem beber", "Convulsão", "Vômito com sangue", "Pensamentos de se machucar"],
  encaminhar: "Dependência grave, comorbidade psiquiátrica, abstinência complicada → CAPS AD; abstinência grave → urgência.",
  sus: {nacional: "Intervenção breve na APS; CAPS AD; naltrexona na RENAME.", betim: "REMUME Betim: naltrexona 50 mg; tiamina 300 mg; CAPS AD: ver 'Rede de Betim'."},
  evid: {resumo: "Rastreio com AUDIT-C seguido de intervenção breve reduz o consumo em usuários de risco na APS (RS). Naltrexona e acamprosato reduzem dias de consumo pesado na dependência.", certeza: "Moderada", fontes: ["audit_c", "remume"]},
  mudancas: ["Item novo."],
  nv: ["Dose de naltrexona e contraindicações (hepatopatia, opioides): conferir bula."],
  guia: {
    resumo: "Duas perguntas e 5 minutos mudam consumo: **AUDIT-C** em todo adulto e **intervenção breve** (feedback, conselho, metas) em quem pontua. Na dependência, **naltrexona** (REMUME) e CAPS AD.",
    calcs: ["sc:auditc"],
    secoes: [
     {t: "Rastreio e intervenção breve", b: [
       {calc: "sc:auditc"},
       {ol: ["**Feedback:** relacione o consumo ao problema dele (PA, fígado, sono, humor) [C].", "**Conselho claro:** reduzir ou parar [C].", "**Meta combinada** e estratégias (dias sem álcool, não beber sozinho, alternar com água) [C].", "**Retorno** em 1–3 meses [C]."]},
       {perola: {t: "Pergunte por 'binge', não só por frequência", x: "Quem bebe 'só no fim de semana', mas 6–10 doses por ocasião, tem risco alto de acidente, violência, arritmia e HAS de difícil controle. A 3ª pergunta do AUDIT-C capta isso.", d: "identifica uso de risco que passaria despercebido.", l: "C"}},
       {ref: ["audit_c", "remume"]}
     ]}
    ]}
}
);
