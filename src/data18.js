// ───────────── SAÚDE DA MULHER – climatério e planejamento reprodutivo (revisão 10/10/2026)
Object.assign(FONTES, {
  fda_th2025: {s: "FDA 2025 – rotulagem da TH", t: "FDA, 10/11/2025: pedido de alteração da rotulagem da terapia hormonal da menopausa – retirada do alerta em tarja preta sobre doença cardiovascular, câncer de mama e demência (mantido só para estrogênio sistêmico isolado e câncer de endométrio); considerar início em < 60 anos ou < 10 anos da menopausa (via Contemporary OB/GYN, 10/11/2025) (regulatório).", f: "F", url: "https://www.contemporaryobgyn.net/view/fda-initiates-removal-of-boxed-warnings-from-hormone-therapy-for-menopause"},
  fezolinetante: {s: "ANVISA – fezolinetanto", t: "CFF, 25/06/2026: ANVISA aprova Veoza (fezolinetanto), primeiro tratamento não hormonal específico para fogachos e sudorese noturna moderados a intensos (notícia de conselho profissional; dose e alertas a conferir na bula).", f: "F", url: "https://site.cff.org.br/noticia/Noticias-gerais/25/06/2026/anvisa-aprova-novo-medicamento-sem-hormonios-para-aliviar-sintomas-da-menopausa"},
  nice_meno: {s: "NICE NG23", t: "NICE NG23. Menopause: identification and management (2015, atualizada 2024) (diretriz).", f: "C", url: ""},
  mrs_escala: {s: "MRS (Heinemann 2004)", t: "Heinemann K et al. The Menopause Rating Scale (MRS) scale: a methodological review. Health Qual Life Outcomes 2004 (escala validada, inclusive em português).", f: "C", url: ""},
  mec_cdc_chc: {s: "US MEC 2024 – combinados", t: "CDC. U.S. Medical Eligibility Criteria for Contraceptive Use, 2024 – tabela de contraceptivos hormonais combinados (conferida nesta revisão) (diretriz).", f: "F", url: "https://www.cdc.gov/contraception/hcp/usmec/combined-hormonal-contraceptives.html"},
  mec_cdc_diu: {s: "US MEC 2024 – DIU", t: "CDC. U.S. Medical Eligibility Criteria for Contraceptive Use, 2024 – tabela de DIU de cobre e DIU-LNG (conferida nesta revisão) (diretriz).", f: "F", url: "https://www.cdc.gov/contraception/hcp/usmec/intrauterine-devices.html"},
  cdc_spr2024: {s: "US SPR 2024", t: "CDC. U.S. Selected Practice Recommendations for Contraceptive Use, 2024 – início dos métodos, 'razoavelmente certa de não estar grávida', esquecimento de pílula, sangramento irregular (diretriz).", f: "C", url: ""},
  trussell: {s: "Efetividade (Trussell)", t: "Trussell J. Contraceptive failure in the United States; Contraceptive Technology – taxas de gravidez no 1º ano em uso típico e perfeito (revisão).", f: "C", url: ""},
  nt52_2026: {s: "NT 52/2026 – LARC na APS", t: "Ministério da Saúde. Nota Técnica Conjunta nº 52/2026-CGESMU/CGCRIAJ/DGCI/SAPS e DAHUD/SAES: mobilização para DIU de cobre e implante; implantes em todas as UBS a partir de 2026; inserção por médicos e enfermeiros capacitados (Resolução COFEN 802/2026); critérios de elegibilidade da OMS; códigos SIGTAP 03.01.04.014-1 (DIU) e 03.01.04.017-6 (implante) (norma).", f: "F", url: "https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/notas-tecnicas/2026/nota-tecnica-conjunta-no-52-2026-cgesmu-cgcriaj-dgci-saps-e-dahud-saes-ms.pdf/@@download/file"},
  lei_14443: {s: "Lei 14.443/2022", t: "Lei nº 14.443, de 02/09/2022 (altera a Lei 9.263/1996): esterilização voluntária a partir de 21 anos ou com 2 filhos vivos; prazo de 60 dias entre a manifestação e a cirurgia, com aconselhamento multiprofissional; laqueadura no parto se respeitado o prazo de 60 dias antes do parto; revogado o § 5º (consentimento do cônjuge); métodos disponibilizados em até 30 dias (lei).", f: "F", url: "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2022/lei/l14443.htm"},
  nice_infert: {s: "NICE CG156", t: "NICE CG156. Fertility problems: assessment and treatment (2013, atualizada 2017) (diretriz).", f: "C", url: ""},
  fsrh_ae: {s: "FSRH – AE", t: "FSRH Clinical Guideline: Emergency Contraception (2017, atualizada) – dupla dose de levonorgestrel com indutores enzimáticos ou IMC > 26/peso > 70 kg; DIU de cobre como método mais eficaz (diretriz).", f: "C", url: ""}
});

CONDICOES.push(
{
  id: "mu-climaterio", modulo: "mu", nome: "Climatério: decisão sobre terapia hormonal e alternativas", sistema: "Climatério", risco: "moderado",
  ciap: "X11 · X85", cid: "N95.1 · N95.2",
  tags: "climatério menopausa fogacho ondas de calor terapia hormonal TH reposição estrogênio progestagênio transdérmico síndrome geniturinária atrofia vaginal secura insuficiência ovariana prematura fezolinetanto paroxetina venlafaxina gabapentina oxibutinina",
  S: "Paciente, ___ anos, DUM ___ (amenorreia há ___ meses). Fogachos ___ por dia, sudorese noturna ___, impacto no sono/trabalho ___. Humor ___. Secura vaginal/dispareunia ___. Sintomas urinários ___. Útero presente ___. Antecedentes: câncer de mama ___, TEV ___, AVC/IAM ___, doença hepática ___, sangramento inexplicado ___, enxaqueca com aura ___. Tabaco ___. Preferência da paciente ___.",
  O: "PA ___ | IMC ___. MRS ___ pontos. Mamografia ___ (data/resultado). Exame genital (se SGM) ___.",
  A: "Síndrome climatérica com sintomas vasomotores ___ (leves/moderados/graves), ___ anos de pós-menopausa. Candidata a TH: ___ (sim / contraindicação: ___).",
  P: "- Decisão compartilhada sobre TH: ___.\n- Se TH com útero: estrogênio + progestagênio (proteção endometrial).\n- Se contraindicação/recusa: alternativa não hormonal ___.\n- SGM: lubrificante/hidratante; estrogênio vaginal ___.\n- Mamografia conforme idade; risco CV; densitometria se indicação.\n- Reavaliar em 3 meses (resposta, sangramento, PA).",
  orient: "As ondas de calor costumam durar alguns anos e têm tratamento.\nA terapia hormonal, iniciada antes dos 60 anos ou nos primeiros 10 anos após a menopausa, é segura para a maioria das mulheres e é o tratamento mais eficaz.\nQuem tem útero precisa usar também o progestagênio, para proteger o endométrio.\nSangramento depois de 1 ano sem menstruar precisa ser avaliado.\nSecura vaginal melhora com lubrificantes, hidratantes e creme de estrogênio em dose baixa.",
  alarme: ["Sangramento vaginal após 1 ano sem menstruação", "Dor e inchaço em uma perna ou falta de ar súbita", "Dor no peito ou fraqueza de um lado do corpo", "Nódulo na mama"],
  encaminhar: "Insuficiência ovariana prematura (< 40 anos), TH com sangramento persistente, sobrevivente de câncer hormônio-dependente com sintomas graves, contraindicação múltipla com sintomas refratários → ginecologia/endocrinologia.",
  sus: {nacional: "RENAME 2024 (Básico): estrogênios conjugados 0,3 e 0,625 mg comprimido e 0,625 mg/g creme vaginal; estriol 1 mg/g creme vaginal; acetato de medroxiprogesterona 10 mg; isoflavona de soja (fitoterápico). Estradiol transdérmico não consta.", betim: "REMUME Betim: medroxiprogesterona 10 mg, fluoxetina, sertralina, amitriptilina e oxibutinina 5 mg; estrogênios conjugados e estriol não constam – confirmar acesso."},
  evid: {resumo: "A TH é o tratamento mais eficaz para sintomas vasomotores e previne fraturas; em mulheres < 60 anos ou < 10 anos da menopausa, os benefícios superam os riscos para a maioria. Em 11/2025 a FDA pediu a retirada da tarja preta sobre doença cardiovascular, câncer de mama e demência. Estrogênio + progestagênio aumenta discretamente o risco de câncer de mama com uso prolongado; a via transdérmica tem menor risco de TEV (dados observacionais).", certeza: "Alta para eficácia; moderada para riscos de longo prazo", fontes: ["menopausa", "nice_meno", "fda_th2025", "fezolinetante", "rename", "remume"]},
  mudancas: ["Item novo. A página original já distinguia 'consulta inicial', 'avaliação para TH', 'SGM' e 'contraindicação à TH'; aqui unificados como guia de decisão."],
  nv: ["Acesso a estrogênios conjugados e estriol em Betim (constam na RENAME, não na REMUME).", "Doses de estrogênio e progestagênio: conferir bula.", "Dose e monitoramento hepático do fezolinetanto: conferir bula brasileira."],
  guia: {
    resumo: "A pergunta que muda desfecho não é 'TH faz mal?', e sim **'ela está na janela e sem contraindicação?'** Antes dos 60 anos ou nos primeiros 10 anos de menopausa, a TH alivia sintomas, previne fratura e tem risco absoluto baixo. Fora da janela ou com contraindicação, há alternativas não hormonais eficazes – inclusive na REMUME.",
    calcs: ["sc:mrs"],
    secoes: [
     {t: "Diagnóstico", b: [
       {ul: ["**≥ 45 anos com sintomas:** diagnóstico clínico (perimenopausa: ciclos irregulares + sintomas; menopausa: 12 meses de amenorreia). **FSH não é necessário** [C].", "**40–45 anos** com sintomas atípicos: considerar FSH [C].", "**< 40 anos:** suspeitar de **insuficiência ovariana prematura** – 2 FSH elevados com 4–6 semanas de intervalo; TH (ou contraceptivo combinado) até a idade natural da menopausa, para proteger osso e coração [C].", "Sangramento após 12 meses de amenorreia = sangramento pós-menopausa: investigar endométrio [C]."]},
       {ref: ["nice_meno", "menopausa"]}
     ]},
     {t: "Decisão sobre a TH", b: [
       {fluxo: [
         {t: "Sintomas vasomotores que incomodam (MRS ajuda a medir)"},
         {t: "Contraindicação? Câncer de mama, câncer de endométrio ativo, sangramento genital inexplicado, TEV, AVC, IAM/coronariopatia, hepatopatia ativa", ramos: [
           {r: "Sim", n: [{t: "Alternativa não hormonal (abaixo)", k: "warn"}]},
           {r: "Não", n: [{t: "< 60 anos ou < 10 anos de menopausa?", ramos: [
             {r: "Sim", n: [{t: "TH: benefício supera risco para a maioria", k: "ok"}, {t: "Útero presente → associar progestagênio", k: "warn"}]},
             {r: "Não", n: [{t: "Risco maior: individualizar; preferir dose baixa e via transdérmica, ou não hormonal"}]}
           ]}]}
         ]}
       ], nota: "Contraindicações e janela: NAMS 2022 e NICE [C]; FDA 11/2025 [F]."},
       {calc: "sc:mrs"},
       {tab: {h: ["Situação", "Preferir"], r: [
         ["Útero presente", "Estrogênio + progestagênio (cíclico na perimenopausa; contínuo na pós-menopausa) [C]"],
         ["Histerectomizada", "Estrogênio isolado [C]"],
         ["Obesidade, risco de TEV, HTG, enxaqueca, tabagismo, DM", "Estradiol transdérmico (menor risco de TEV) – não disponível no SUS [C]"],
         ["Só sintomas geniturinários", "Estrogênio vaginal em dose baixa, sem progestagênio [C]"]]}},
       {perola: {t: "O risco de mama precisa vir em número absoluto", x: "Com estrogênio + progestagênio, o excesso de câncer de mama no WHI foi da ordem de menos de 1 caso por 1.000 mulheres por ano de uso, surgindo após alguns anos; com estrogênio isolado não houve aumento. Apresentar o risco assim muda a decisão de muitas mulheres que sofrem com sintomas.", d: "decisão informada; melhora de qualidade de vida e sono.", l: "C"}},
       {ref: ["menopausa", "nice_meno", "fda_th2025"]}
     ]},
     {t: "Alternativas não hormonais", b: [
       {tab: {h: ["Opção", "Evidência", "SUS / REMUME"], r: [
         ["Paroxetina 7,5 mg, venlafaxina 37,5–75 mg, escitalopram 10–20 mg [NV]", "Reduzem fogachos de forma moderada (ECR) [C]", "Não na REMUME; fluoxetina e sertralina estão, com evidência mais fraca [C]"],
         ["Gabapentina 300–900 mg à noite [NV]", "Eficaz, útil se fogachos noturnos e insônia [C]", "Não na REMUME [NV]"],
         ["Oxibutinina", "Reduz fogachos (ECR); evitar em idosas pelo efeito anticolinérgico [C]", "Oxibutinina 5 mg na REMUME [F]"],
         ["Fezolinetanto (antagonista NK3)", "Eficaz em ECR; aprovado pela ANVISA (2026) [F]", "Não no SUS"],
         ["TCC, hipnose clínica, perda de peso", "Benefício em ECR [C]", "eMulti/psicologia"],
         ["Isoflavona de soja, fitoterápicos", "Não recomendados pela NAMS 2023 [C]", "Isoflavona está na RENAME – evidência fraca"]]}},
       {alerta: "Paroxetina e fluoxetina inibem o CYP2D6 e reduzem o efeito do tamoxifeno: em usuárias de tamoxifeno, prefira venlafaxina ou gabapentina."},
       {ref: ["menopausa", "fezolinetante", "remume"]}
     ]},
     {t: "Síndrome geniturinária e contracepção na transição", b: [
       {ul: ["**SGM:** lubrificante na relação e hidratante vaginal regular; estrogênio vaginal em dose baixa é eficaz e tem absorção mínima – não exige progestagênio [C]. Na RENAME: estriol 1 mg/g e estrogênios conjugados 0,625 mg/g creme [F]; não constam da REMUME [F].", "**Contracepção na perimenopausa:** manter até 1 ano de amenorreia após os 50 anos (2 anos se < 50) ou até os 55 anos [C]. Combinado pode ser usado até 50 anos se sem fatores de risco e alivia sintomas [C]."]},
       {trio: {ideal: "TH individualizada (estradiol transdérmico + progesterona micronizada ou DIU-LNG no alto risco de TEV); estrogênio vaginal na SGM; fezolinetanto ou ISRS/IRSN se contraindicação.", sus: "Estrogênios conjugados VO + medroxiprogesterona (RENAME); REMUME só tem medroxiprogesterona; oxibutinina, fluoxetina e sertralina na REMUME.", ponte: "Sem contraindicação e com via oral aceitável: estrogênios conjugados 0,3–0,625 mg (comprar ou buscar acesso) + medroxiprogesterona da REMUME. Com risco de TEV: transdérmico comprado. Contraindicação: oxibutinina (não idosa frágil) ou ISRS/IRSN."}},
       {ref: ["menopausa", "rename", "remume"]}
     ]}
    ]}
},
{
  id: "mu-metodos", modulo: "mu", nome: "Escolha do método contraceptivo e início no mesmo dia", sistema: "Planejamento reprodutivo", risco: "baixo",
  ciap: "W10 · W11 · W12 · W14", cid: "Z30.0 · Z30.8",
  tags: "planejamento reprodutivo anticoncepção contracepção método pílula injetável mensal trimestral implante DIU cobre LARC efetividade quick start início imediato critérios de elegibilidade MEC",
  S: "Paciente, ___ anos, deseja contracepção. Método atual/prévio ___ (motivo da troca ___). Desejo de gestar e quando ___. Prioridades (eficácia, não lembrar diariamente, sangramento, privacidade, retorno rápido da fertilidade) ___. DUM ___; relação desprotegida desde a DUM ___. Amamentação/pós-parto ___. Condições do MEC (PA, enxaqueca com aura, TEV, tabaco ≥ 35 anos, LES, medicamentos indutores) ___.",
  O: "PA ___ | IMC ___. Teste de gravidez ___ (se não for possível estar razoavelmente certa).",
  A: "Planejamento reprodutivo – escolha informada de ___. Critério de elegibilidade (MEC) categoria ___.",
  P: "- Método escolhido: ___ (início hoje / data ___).\n- Proteção adicional (preservativo) por ___ dias.\n- Preservativo para prevenção de IST.\n- Retorno: ___.",
  orient: "Os métodos mais eficazes são o implante e o DIU: funcionam por anos, sem precisar lembrar, e a fertilidade volta logo após a retirada.\nVocê pode começar o método hoje mesmo, na maioria das vezes.\nO preservativo é o único que também protege contra infecções sexualmente transmissíveis – use junto.\nSe não se adaptar, volte: existem outras opções.",
  alarme: ["Dor forte na barriga, no peito ou na perna (em uso de pílula ou injeção combinada)", "Dor de cabeça forte e diferente, com alteração da visão", "Atraso menstrual com dor pélvica (possível gravidez ectópica)"],
  encaminhar: "Condição com MEC 3–4 para a maioria dos métodos, desejo de laqueadura/vasectomia (fluxo próprio) ou dificuldade de inserção de DIU → ginecologia/planejamento reprodutivo.",
  sus: {nacional: "RENAME 2024: etinilestradiol + levonorgestrel; noretisterona 0,35 mg; injetáveis mensais (medroxiprogesterona + cipionato de estradiol; algestona + enantato de estradiol); medroxiprogesterona 150 mg/mL; levonorgestrel 0,75/1,5 mg; DIU de cobre, diafragma e preservativos (aquisição do MS); implante de etonogestrel incorporado em 2025 e ofertado nas UBS a partir de 2026.", betim: BETIM_MU},
  evid: {resumo: "Em uso típico, implante e DIU têm falha < 1% ao ano, contra cerca de 4% do injetável trimestral e 7% da pílula; a diferença decorre do uso inconsistente. Oferecer LARC primeiro, com aconselhamento centrado na pessoa, reduz gestações não planejadas. A maioria dos métodos pode ser iniciada no mesmo dia, sem exame especular nem exames laboratoriais.", certeza: "Alta", fontes: ["trussell", "cdc_spr2024", "mec_cdc_chc", "mec_cdc_diu", "mec_who2025", "implante_sus", "nt52_2026", "rename", "remume"]},
  mudancas: ["Item novo, reunindo 'Aconselhamento e dispensação de métodos' e 'Anticoncepção hormonal' da página original."],
  nv: ["Disponibilidade de implante e DIU de cobre na UBS e agenda de inserção em Betim.", "Oferta de diafragma em Betim."],
  guia: {
    resumo: "O que mais muda desfecho é **oferecer primeiro os LARC** (implante, DIU) e **começar no mesmo dia** – cada retorno exigido é uma chance de gravidez não planejada. A maioria dos métodos não exige exame ginecológico nem exames de sangue; para combinados, basta medir a PA.",
    calcs: ["mec"],
    secoes: [
     {t: "Efetividade (gravidez no 1º ano)", b: [
       {tab: {h: ["Método", "Uso típico", "Uso perfeito", "Na REMUME/SUS"], r: [
         ["Implante de etonogestrel", "0,1%", "0,1%", "SUS (2025/2026) – confirmar na UBS"], ["DIU-LNG 52 mg", "0,1–0,4%", "0,1–0,4%", "SUS só para endometriose e leiomioma com sangramento (PCDT)"], ["DIU de cobre", "0,8%", "0,6%", "SUS (insumo)"],
         ["Injetável trimestral (DMPA)", "4%", "0,2%", "REMUME"], ["Injetável mensal", "~4% [C]", "< 1%", "REMUME"], ["Pílula combinada ou só de progestagênio", "7%", "0,3%", "REMUME"],
         ["Diafragma", "17%", "16%", "SUS (insumo)"], ["Preservativo masculino", "13%", "2%", "SUS"], ["Coito interrompido", "20%", "4%", "—"], ["Nenhum método", "85%", "85%", "—"]]}, nota: "Taxas aproximadas (Trussell/CDC) [C]; disponibilidade: RENAME 2024 e REMUME [F]."},
       {ref: ["trussell", "rename", "remume", "implante_sus"]}
     ]},
     {t: "Início no mesmo dia (quick start)", b: [
       {p: "Pode-se iniciar hoje se for **razoavelmente certo que não está grávida** – qualquer um destes, sem sinais de gravidez [C]:"},
       {ul: ["≤ 7 dias do início da menstruação", "Sem relação desde a última menstruação", "Usando corretamente um método confiável", "≤ 7 dias após aborto", "≤ 4 semanas pós-parto", "Amamentação exclusiva, amenorreica e < 6 meses pós-parto"]},
       {tab: {h: ["Método", "Proteção extra se iniciar fora dos primeiros dias do ciclo"], r: [["DIU de cobre", "Nenhuma (também é contracepção de emergência até 5 dias)"], ["Combinado (pílula, injetável mensal)", "7 dias (se > 5 dias do início da menstruação)"], ["Pílula só de progestagênio", "2 dias"], ["Injetável trimestral, implante, DIU-LNG", "7 dias"]]}, nota: "CDC SPR 2024 [C]. Teste de gravidez se não houver certeza; se houve relação desprotegida nos últimos 5 dias, oferecer contracepção de emergência antes."},
       {perola: {t: "Esperar a menstruação para começar é uma barreira, não uma precaução", x: "Exigir 'vir no 1º dia da menstruação' ou trazer exames antes de iniciar perde mulheres no caminho. Com os critérios acima, comece hoje e repita o teste de gravidez em 3–4 semanas se houve exposição recente.", d: "menos gestações não planejadas.", l: "C"}},
       {ref: ["cdc_spr2024"]}
     ]},
     {t: "Exames necessários antes de iniciar", b: [
       {tab: {h: ["Avaliação", "Necessária?"], r: [["PA", "Sim, antes de métodos combinados [C]"], ["IMC", "Útil para acompanhamento, não impede o início [C]"], ["Exame especular / bimanual", "Só para inserção de DIU [C]"], ["Citologia, mamografia, exames de sangue", "Não – não condicionam o início [C]"], ["Rastreio de clamídia/gonorreia", "Se risco, pode coletar no dia da inserção do DIU sem adiá-la [C]"]]}},
       {trio: {ideal: "Todos os métodos disponíveis na UBS, com LARC (implante, DIU de cobre e DIU-LNG) oferecidos em primeiro lugar e inseridos no mesmo dia.", sus: "Pílulas, injetáveis mensal e trimestral e levonorgestrel na REMUME; DIU de cobre e implante como insumos (implante em todas as UBS a partir de 2026 – NT 52/2026); DIU-LNG só pelo PCDT.", ponte: "Se não houver inserção no mesmo dia, inicie uma ponte hormonal (pílula ou trimestral) e agende o LARC – não deixe a mulher sem método."}},
       {ref: ["cdc_spr2024", "nt52_2026", "remume"]}
     ]}
    ]}
},
{
  id: "mu-mec", modulo: "mu", nome: "Contracepção em situações especiais (critérios de elegibilidade)", sistema: "Planejamento reprodutivo", risco: "moderado",
  ciap: "W10 · W11", cid: "Z30.0",
  tags: "critérios de elegibilidade MEC OMS CDC categoria 4 contraindicação enxaqueca com aura hipertensão tabagista 35 anos TEV trombofilia lúpus antifosfolípide epilepsia anticonvulsivante indutor lamotrigina rifampicina obesidade bariátrica amamentação pós-parto adolescente HIV câncer de mama",
  orient: "Algumas condições de saúde mudam qual método é mais seguro para você. Quase sempre existe uma opção eficaz e segura – geralmente o DIU, o implante ou a pílula só de progestagênio.\nInforme sempre os remédios que usa: alguns (para convulsão, tuberculose, HIV) diminuem o efeito dos hormônios.",
  alarme: ["Dor de cabeça forte com alteração da visão ou da fala", "Dor e inchaço em uma perna", "Falta de ar súbita ou dor no peito"],
  encaminhar: "Quando todas as opções acessíveis forem categoria 3–4 (ex.: cardiopatia complexa, transplante, câncer ativo) → ginecologia/planejamento reprodutivo.",
  sus: {nacional: "Métodos da RENAME e insumos do MS (DIU de cobre, implante, diafragma, preservativos).", betim: BETIM_MU},
  evid: {resumo: "Os critérios de elegibilidade da OMS (6ª ed., 2025) e do CDC (2024) classificam cada condição de 1 (sem restrição) a 4 (risco inaceitável). Estrogênio é o componente que mais restringe (TEV, AVC, IAM); métodos só de progestagênio e DIU de cobre servem à maioria das situações de risco cardiovascular.", certeza: "Moderada (consenso com revisão sistemática)", fontes: ["mec_cdc_chc", "mec_cdc_diu", "mec_cdc2024", "mec_who2025"]},
  mudancas: ["Item novo, a partir dos casos da página original (lactante, adolescente com acne, LES, epilepsia com fenitoína)."],
  nv: [],
  guia: {
    resumo: "O **estrogênio** é o que restringe: tabagismo ≥ 35 anos, HAS, enxaqueca com aura, TEV, LES com antifosfolípide, pós-parto recente. Nesses casos, **DIU de cobre, implante, DIU-LNG ou pílula só de progestagênio** quase sempre resolvem. A outra armadilha é a **interação** com anticonvulsivantes indutores e rifampicina.",
    calcs: ["mec"],
    secoes: [
     {t: "Categorias", b: [
       {tab: {h: ["Categoria", "Significado", "Na prática"], r: [["1", "Sem restrição", "Usar"], ["2", "Benefícios geralmente superam os riscos", "Usar, com acompanhamento"], ["3", "Riscos geralmente superam os benefícios", "Evitar; só se não houver alternativa aceitável, com acompanhamento"], ["4", "Risco inaceitável", "Não usar"]]}},
       {ref: ["mec_who2025", "mec_cdc_chc"]}
     ]},
     {t: "Situações frequentes na APS", b: [
       {calc: "mec"},
       {tab: {h: ["Situação", "Evitar", "Boas opções"], r: [
         ["≥ 35 anos e fumante", "Combinados (≥ 15 cig/dia: cat. 4; < 15: cat. 3) [F]", "Todos os de progestagênio e DIUs (cat. 1) [C]"],
         ["HAS (mesmo controlada)", "Combinados (cat. 3; ≥ 160/100: cat. 4) [F]", "DIU de cobre (1), implante, DIU-LNG e pílula de progestagênio (1–2); trimestral 2–3 [F]"],
         ["Enxaqueca com aura", "Combinados (cat. 4) [F]", "Qualquer método só de progestagênio ou DIU (cat. 1) [F]"],
         ["TEV prévio / trombofilia", "Combinados (cat. 4) [F]", "DIU de cobre (1); implante, DIU-LNG, pílula de progestagênio (2); trimestral 2–3 [F]"],
         ["LES com antifosfolípide + ou desconhecido", "Combinados (4); trimestral (3) [F]", "DIU de cobre (1); implante, DIU-LNG, pílula de progestagênio (2) [F]"],
         ["Amamentando < 21 dias", "Combinados (cat. 4); 21–30 dias: 3 [F]", "Progestagênio (2) e DIU no pós-parto imediato [F]"],
         ["Bariátrica disabsortiva", "Pílulas orais (3) [F]", "Implante, injetável, DIUs (1) [F]"],
         ["Anticonvulsivante indutor (fenitoína, carbamazepina, fenobarbital, topiramato, oxcarbazepina) ou rifampicina", "Pílulas combinada e de progestagênio (3); implante (2) [C]", "DIU de cobre, DIU-LNG, trimestral (1) [C]"],
         ["Lamotrigina em monoterapia", "Combinados (3): reduzem o nível da lamotrigina [C]", "Progestagênio e DIUs [C]"],
         ["Câncer de mama atual", "Todos os hormonais, inclusive DIU-LNG (4) [F]", "DIU de cobre (1) [F]"],
         ["Adolescente", "—", "LARC (DIU 2, implante 1); trimestral 2 por massa óssea [F]"],
         ["Obesidade (IMC ≥ 30)", "Combinados são cat. 2 (somar outros fatores) [F]", "Todos os de progestagênio e DIUs (1) [F]"]]}, nota: "Categorias do US MEC 2024 (tabelas de combinados, progestagênios e DIU conferidas) [F]; interações medicamentosas [C] – tabela de interações do CDC não aberta nesta revisão."},
       {ref: ["mec_cdc_chc", "mec_cdc_diu", "mec_cdc2024"]}
     ]},
     {t: "Divergências que importam", b: [
       {ul: ["**DIU entre 48 h e 4 semanas pós-parto:** OMS categoria 3; CDC categoria 2 (por risco de expulsão/perfuração). Na prática: inserir no pós-parto imediato (< 48 h) ou após 4 semanas [C].", "**Trimestral no pós-parto/amamentação precoce:** a OMS 2025 rebaixou para categoria 2 antes de 6 semanas; o CDC já classificava 2 [F].", "**Injetável mensal** (combinado) segue as restrições do estrogênio, com categorias da OMS próximas às da pílula combinada [C]."]},
       {perola: {t: "Pergunte por aura antes de prescrever pílula combinada", x: "Enxaqueca com aura + estrogênio multiplica o risco de AVC isquêmico. Uma pergunta ('vê luzes, pontos ou zigue-zague antes da dor?') separa categoria 2 de categoria 4.", d: "evita AVC em mulher jovem.", l: "C"}},
       {ref: ["mec_who2025", "mec_cdc_diu"]}
     ]}
    ]}
},
{
  id: "mu-hormonal", modulo: "mu", nome: "Contraceptivo hormonal: esquecimento, sangramento irregular e trocas", sistema: "Planejamento reprodutivo", risco: "baixo",
  ciap: "W10 · W11", cid: "Z30.4",
  tags: "esqueci a pílula esquecimento atraso injeção trimestral atrasada sangramento irregular escape spotting implante troca de método vômito diarreia interação contracepção de emergência",
  orient: "Esqueceu 1 pílula: tome assim que lembrar, mesmo que tome 2 no mesmo dia, e siga normalmente.\nEsqueceu 2 ou mais: tome a última esquecida, siga a cartela e use camisinha por 7 dias. Se foi na última semana, emende a próxima cartela sem pausa.\nVômito até 3 horas depois de tomar conta como esquecimento.\nSangramento irregular no início do implante ou da injeção é comum e não faz mal; se incomodar, há tratamento.",
  alarme: ["Atraso menstrual após esquecimento ou atraso da injeção", "Sangramento muito intenso", "Dor pélvica forte"],
  encaminhar: "Sangramento persistente apesar do tratamento, com suspeita de causa estrutural → investigar como SUA.",
  sus: {nacional: "Pílulas, injetáveis e levonorgestrel de emergência na RENAME.", betim: BETIM_MU},
  evid: {resumo: "As regras de esquecimento e de sangramento irregular seguem as recomendações práticas do CDC (2024) e da OMS. O risco de gravidez é maior quando o esquecimento prolonga o intervalo sem hormônio (início ou fim da cartela).", certeza: "Baixa a moderada (consenso)", fontes: ["cdc_spr2024", "fsrh_ae", "ulip_bula", "rename", "remume"]},
  mudancas: ["Item novo."],
  nv: ["Janelas de esquecimento do desogestrel e da noretisterona: conferir bula do produto dispensado."],
  guia: {
    resumo: "O esquecimento mais perigoso é o que **prolonga a pausa** – na 1ª semana (após a pausa) ou na 3ª (antes dela). A regra prática: 1 esquecida, tome e siga; 2 ou mais, preservativo por 7 dias, emende a cartela se for na 3ª semana e pense em contracepção de emergência se for na 1ª.",
    calcs: ["pilula", "ae"],
    secoes: [
     {t: "Pílula combinada esquecida", b: [
       {fluxo: [
         {t: "Quantas pílulas ativas esquecidas (≥ 24 h de atraso cada)?", ramos: [
           {r: "1 (24–48 h)", n: [{t: "Tomar a esquecida já e seguir normalmente; sem proteção extra", k: "ok"}]},
           {r: "≥ 2 (≥ 48 h)", n: [{t: "Tomar a última esquecida, descartar as outras, seguir a cartela + preservativo 7 dias", k: "warn"}, {t: "Na 3ª semana: emendar a próxima cartela, sem pausa"}, {t: "Na 1ª semana com relação nos últimos 5 dias: contracepção de emergência", k: "stop"}]}
         ]}
       ], nota: "CDC SPR 2024 [C]. Vômito ou diarreia intensa até 3 h após a dose conta como esquecimento [C]."},
       {calc: "pilula"},
       {ref: ["cdc_spr2024"]}
     ]},
     {t: "Outros métodos", b: [
       {tab: {h: ["Situação", "Conduta"], r: [
         ["Pílula de progestagênio (noretisterona 0,35 mg) > 3 h de atraso", "Tomar já, seguir; preservativo por 2 dias; contracepção de emergência se relação desprotegida [C]"],
         ["Desogestrel 75 µg > 12 h de atraso", "Mesma conduta [C]"],
         ["Trimestral (DMPA) atrasado", "Pode reaplicar até 15 semanas após a última sem proteção extra; > 15 semanas: reaplicar se razoavelmente certa de não estar grávida + 7 dias de preservativo [C]"],
         ["Injetável mensal atrasado", "Aplicar até 7 dias após a data prevista sem proteção extra (OMS) [C]; além disso, teste de gravidez se houve relação e 7 dias de preservativo [C]"]]}},
       {calc: "ae"},
       {ref: ["cdc_spr2024"]}
     ]},
     {t: "Sangramento irregular", b: [
       {ul: ["**Primeiro:** afastar gravidez, IST/cervicite, interação medicamentosa, tabagismo e causa estrutural [C].", "**Implante ou DIU-LNG:** AINE por 5–7 dias (ibuprofeno na REMUME) ou, se elegível, combinado por 1–3 meses [C].", "**Trimestral:** AINE por 5–7 dias ou estrogênio por curto período [C]; amenorreia é esperada e não exige suspensão.", "**Pílula combinada:** escape nos primeiros 3 meses é comum; checar adesão; depois disso, considerar outra formulação [C]."]},
       {perola: {t: "Antecipe o sangramento para evitar a desistência", x: "A principal causa de retirada precoce do implante é o padrão de sangramento. Explicar antes da inserção que ele é imprevisível e oferecer tratamento curto se incomodar aumenta a continuidade.", d: "maior continuidade de LARC, menos gestações não planejadas.", l: "C"}},
       {ref: ["cdc_spr2024", "remume"]}
     ]}
    ]}
},
{
  id: "mu-larc", modulo: "mu", nome: "DIU e implante na APS: inserção, seguimento e intercorrências", sistema: "Planejamento reprodutivo", risco: "moderado",
  ciap: "W12 · W14", cid: "Z30.1 · Z30.5",
  tags: "DIU cobre TCu 380A implante etonogestrel Implanon inserção retirada fio não visível expulsão perfuração gravidez com DIU DIP enfermagem COFEN SIGTAP LARC DIU-LNG Mirena",
  S: "Paciente, ___ anos, deseja ___ (DIU de cobre / implante). DUM ___. Relação desprotegida desde a DUM ___. Paridade ___. Dismenorreia/fluxo ___. Risco de IST ___. Contraindicações (sangramento inexplicado, DIP/cervicite atual, cavidade distorcida, câncer de colo/endométrio) ___.",
  O: "Exame especular ___ (sinais de cervicite ___). Toque bimanual: útero ___ (posição ___, volume ___). Histerometria ___ cm. Teste de gravidez ___.",
  A: "Inserção de ___ sem intercorrências / com ___.",
  P: "- Inserção de ___ (lote ___, validade ___).\n- Orientada sobre fios/local do implante, sinais de alerta e validade (até ___).\n- Proteção extra ___.\n- Retorno se queixas; revisão em ___.",
  orient: "O DIU de cobre protege por 10 anos e o implante por 3 anos; ambos podem ser retirados quando você quiser, e a fertilidade volta logo.\nCólica e sangramento podem aumentar nos primeiros meses com o DIU de cobre; com o implante, o sangramento fica irregular – costuma melhorar.\nProcure a UBS se tiver febre com dor pélvica, dor forte, sangramento muito intenso, atraso menstrual ou se sentir a ponta do DIU.",
  alarme: ["Febre com dor pélvica nas primeiras semanas", "Dor pélvica forte ou dor na relação", "Atraso menstrual (risco de ectópica)", "Fio do DIU sumiu ou ficou mais longo", "Braço vermelho, quente ou com pus no local do implante"],
  encaminhar: "Fio não visível com DIU não localizado na USG, suspeita de perfuração, implante não palpável, dificuldade de inserção (estenose, cavidade distorcida) → ginecologia.",
  sus: {nacional: "DIU de cobre e implante de etonogestrel (14–49 anos) fornecidos pelo MS; inserção na APS por médicos e enfermeiros capacitados (NT 52/2026); DIU-LNG 52 mg só para endometriose (2025) e leiomioma com sangramento intenso (2025/2026), conforme PCDT.", betim: "Agenda de inserção, profissionais capacitados e estoque de DIU e implante em Betim: confirmar."},
  evid: {resumo: "DIU e implante são os métodos reversíveis mais eficazes (falha < 1%/ano) e seguros na adolescência e em nulíparas. Não é necessária antibioticoprofilaxia; rastreio de clamídia/gonorreia, quando indicado, pode ser coletado no dia sem adiar a inserção. Perfuração é rara (~1 por 1.000 inserções).", certeza: "Alta", fontes: ["mec_cdc_diu", "cdc_spr2024", "nt52_2026", "implante_sus", "conitec_1002", "conitec_1066"]},
  mudancas: ["Item novo."],
  nv: ["Fluxo de inserção, estoque e capacitação em Betim.", "Duração de uso registrada na bula do DIU de cobre dispensado."],
  guia: {
    resumo: "LARC muda desfecho porque **elimina o erro de uso**. O ganho real na APS vem de inserir **no mesmo dia**, sem exigir exames desnecessários, e de manejar bem os primeiros meses (sangramento, cólica) para que a mulher não retire precocemente.",
    secoes: [
     {t: "Antes da inserção", b: [
       {ul: ["Pode ser inserido **em qualquer momento do ciclo** se razoavelmente certa de não estar grávida [C].", "**Não precisa** de USG, citologia ou exames de sangue antes [C].", "Rastreio de clamídia/gonorreia se risco: coletar no dia e inserir; tratar se positivo, sem retirar o DIU [C].", "**Não usar** antibiótico profilático [C].", "Contraindicações para iniciar (cat. 4): DIP ou cervicite purulenta atual, sangramento inexplicado suspeito, cavidade distorcida, câncer de colo/endométrio aguardando tratamento, sepse puerperal ou pós-aborto séptico [F]."]},
       {ref: ["mec_cdc_diu", "cdc_spr2024"]}
     ]},
     {t: "Intercorrências", b: [
       {tab: {h: ["Situação", "Conduta"], r: [
         ["Fio não visível", "Teste de gravidez; preservativo; USG para localizar. Na cavidade: manter. Não localizado: RX abdominal (perfuração?) → ginecologia [C]"],
         ["Gravidez com DIU", "Excluir ectópica (USG). Intrauterina com fios visíveis: retirar (reduz aborto e infecção) [C]"],
         ["DIP com DIU", "Tratar com antibiótico sem retirar o DIU; retirar se não melhora em 48–72 h [C]"],
         ["Expulsão parcial", "Retirar e, se desejar, inserir novo [C]"],
         ["Implante não palpável", "Não retirar às cegas; USG de partes moles → ginecologia [C]"]]}},
       {ref: ["cdc_spr2024"]}
     ]},
     {t: "Na rede", b: [
       {ul: ["Inserção por **médicos e enfermeiros capacitados**; enfermagem conforme Resolução COFEN 802/2026 [F].", "Registrar no e-SUS com SIGTAP **03.01.04.014-1** (DIU) e **03.01.04.017-6** (implante) [F].", "**Implante** incorporado ao SUS para 14–49 anos (Portarias SECTICS 47 e 48/2025), disponível em todas as UBS a partir de 2026 [F].", "**DIU-LNG 52 mg** incorporado para endometriose com contraindicação ou não adesão a combinado (DOU 29/05/2025) e para leiomioma com sangramento intenso (Relatório 1.066, dez/2025), conforme PCDT – **não** como contraceptivo de rotina [F]."]},
       {trio: {ideal: "DIU de cobre, DIU-LNG e implante inseridos no mesmo dia, inclusive no pós-parto e pós-aborto imediatos.", sus: "DIU de cobre e implante na APS; DIU-LNG apenas pelas indicações do PCDT; DIU no pós-parto imediato nas maternidades (Portaria 3.265/2017).", ponte: "Quem prefere DIU-LNG por sangramento intenso sem mioma/endometriose precisa comprar; a alternativa SUS é DIU de cobre (pode aumentar fluxo) ou implante."}},
       {ref: ["nt52_2026", "implante_sus", "conitec_1002", "conitec_1066", "diu_pp"]}
     ]}
    ]}
},
{
  id: "mu-laqueadura", modulo: "mu", nome: "Laqueadura e vasectomia", sistema: "Planejamento reprodutivo", risco: "baixo",
  ciap: "W13 · Y13", cid: "Z30.2",
  tags: "laqueadura ligadura tubária esterilização vasectomia lei 14.443 21 anos dois filhos 60 dias consentimento cônjuge parto cesárea arrependimento",
  orient: "Laqueadura e vasectomia são definitivas. A lei permite a partir dos 21 anos ou com 2 filhos vivos, com intervalo de 60 dias entre o pedido e a cirurgia.\nNão é preciso autorização do cônjuge.\nA vasectomia é mais simples e segura que a laqueadura; o implante e o DIU têm eficácia parecida e são reversíveis.\nApós a vasectomia, use outro método até o espermograma confirmar ausência de espermatozoides.",
  alarme: ["Dor, febre ou secreção na ferida operatória", "Atraso menstrual após laqueadura (risco de ectópica)"],
  encaminhar: "Manifestação de vontade registrada + aconselhamento → regulação para o serviço que realiza a cirurgia.",
  sus: {nacional: "Laqueadura e vasectomia no SUS conforme a Lei 9.263/1996, alterada pela Lei 14.443/2022.", betim: "Fluxo de encaminhamento para laqueadura e vasectomia em Betim: confirmar."},
  evid: {resumo: "A Lei 14.443/2022 reduziu a idade mínima para 21 anos (ou 2 filhos vivos), manteve o prazo de 60 dias com aconselhamento, permitiu a laqueadura no parto se o pedido foi feito 60 dias antes e retirou a exigência de consentimento do cônjuge. O arrependimento é maior quando a esterilização é feita em idade jovem.", certeza: "Norma legal", fontes: ["lei_14443", "trussell"]},
  mudancas: ["Item novo."],
  nv: ["Fluxo e tempo de espera para laqueadura e vasectomia em Betim."],
  guia: {
    resumo: "O papel da APS é garantir o **direito** (critérios legais, sem exigir autorização do cônjuge), registrar a **data da manifestação** (conta os 60 dias) e oferecer aconselhamento honesto: a **vasectomia** é mais simples e segura, e os **LARC** têm eficácia semelhante sem serem definitivos.",
    secoes: [
     {t: "Critérios legais (Lei 14.443/2022)", b: [
       {ul: ["Capacidade civil plena **e** > 21 anos **ou** pelo menos 2 filhos vivos [F].", "Prazo mínimo de **60 dias** entre a manifestação de vontade e a cirurgia, com acesso a aconselhamento por equipe multiprofissional nesse período [F].", "**Laqueadura no parto:** garantida se a manifestação ocorreu ≥ 60 dias antes do parto e houver condições médicas [F] – registrar no pré-natal.", "**Sem** exigência de consentimento do cônjuge (§ 5º revogado) [F].", "Qualquer método contraceptivo deve ser disponibilizado em até 30 dias [F]."]},
       {alerta: "Registre a data da manifestação de vontade no prontuário e no cartão da gestante: é ela que viabiliza a laqueadura no parto."},
       {ref: ["lei_14443"]}
     ]},
     {t: "Aconselhamento", b: [
       {ul: ["Arrependimento é maior em quem é esterilizada antes dos 30 anos, logo após o parto ou em relação instável [C].", "Falha da laqueadura é baixa (~0,5% no 1º ano), mas, quando ocorre, o risco de **ectópica** é alto [C].", "**Vasectomia:** procedimento ambulatorial, anestesia local, menos complicações; eficácia só após espermograma sem espermatozoides (cerca de 3 meses) [C].", "Implante e DIU têm eficácia comparável e são reversíveis – ofereça como alternativa, sem condicionar o direito [C]."]},
       {perola: {t: "Inclua o parceiro na conversa", x: "Quando o casal decide encerrar a vida reprodutiva, a vasectomia é a opção de menor risco. Convidar o parceiro para a consulta muda a escolha em muitas famílias.", d: "menos morbidade cirúrgica para o casal.", l: "C"}},
       {ref: ["trussell"]}
     ]}
    ]}
},
{
  id: "mu-preconcepcional", modulo: "mu", nome: "Consulta pré-concepcional", sistema: "Planejamento reprodutivo", risco: "moderado",
  ciap: "W14 · A98", cid: "Z31.6 · Z32.0",
  tags: "pré-concepcional planejar gravidez ácido fólico teratogênico valproato isotretinoína IECA vacinas rubéola diabetes HbA1c epilepsia hipotireoidismo obesidade sífilis HIV",
  S: "Paciente, ___ anos, deseja engravidar em ___. G___P___A___ (intercorrências ___). Doenças crônicas ___. Medicamentos ___ (teratogênicos? ___). Vacinas ___. Tabaco/álcool/drogas ___. Peso ___. História familiar ___. Parceria ___ (HIV/sífilis ___).",
  O: "PA ___ | IMC ___. Testes rápidos: HIV ___, sífilis ___, hepatite B ___, hepatite C ___.",
  A: "Consulta pré-concepcional. Riscos identificados: ___.",
  P: "- Ácido fólico 0,4 mg/dia ≥ 30 dias antes da concepção (dose alta se ___).\n- Ajustar medicamentos: ___.\n- Vacinas: ___.\n- Controle de ___ antes de engravidar.\n- Orientar sobre tabaco, álcool, peso e janela fértil.",
  orient: "Comece o ácido fólico pelo menos 1 mês antes de engravidar e mantenha até o fim do 3º mês de gestação.\nNão pare remédios de uso contínuo por conta própria – alguns precisam ser trocados antes da gravidez.\nAtualize as vacinas: algumas (como a tríplice viral) não podem ser tomadas durante a gestação.",
  alarme: ["Atraso menstrual em uso de remédio que pode prejudicar o bebê", "Glicemias muito altas antes de engravidar"],
  encaminhar: "Doença crônica grave descompensada, cardiopatia, epilepsia em uso de valproato, uso de varfarina ou isotretinoína → especialista antes da concepção.",
  sus: {nacional: "Ácido fólico 5 mg comprimido e 0,2 mg/mL solução oral (RENAME); testes rápidos e vacinas do PNI.", betim: "REMUME Betim: ácido fólico 5 mg comprimido e 0,2 mg/mL solução (2 mL = 0,4 mg). Comprimido de 0,4 mg não consta."},
  evid: {resumo: "Ácido fólico iniciado antes da concepção reduz defeitos do tubo neural. Controle glicêmico pré-concepcional no DM reduz malformações e perdas. Trocar teratogênicos (valproato, isotretinoína, IECA/BRA, varfarina, estatina em uso não essencial) antes da gestação evita exposição no período crítico da organogênese, que ocorre antes de muitas mulheres saberem que estão grávidas.", certeza: "Alta (ácido fólico); moderada (demais)", fontes: ["pnsf2022", "rename", "remume", "sbd_dmg"]},
  mudancas: ["Item novo, a partir da 'Consulta pré-concepcional' da página original."],
  nv: ["Doses de ácido fólico para alto risco: conferir protocolo vigente."],
  guia: {
    resumo: "A organogênese acontece **antes** de a mulher saber que está grávida. O que muda desfecho é agir antes: **ácido fólico ≥ 30 dias antes**, **trocar teratogênicos**, **controlar DM/HAS/tireoide** e **vacinar** (tríplice viral não pode na gestação).",
    secoes: [
     {t: "Ações essenciais", b: [
       {tab: {h: ["Ação", "Como"], r: [
         ["Ácido fólico", "0,4 mg/dia ≥ 30 dias antes até 12 semanas (PNSF) [F]. Na REMUME: solução 0,2 mg/mL (2 mL) [F]. Dose alta (4–5 mg) se DTN prévio, anticonvulsivante, DM pré-gestacional ou obesidade, conforme protocolo [NV]"],
         ["Teratogênicos", "Valproato, isotretinoína, metotrexato, varfarina, IECA/BRA, estatina, lítio, topiramato: rever com antecedência [C]"],
         ["DM", "HbA1c < 6,5% antes de engravidar, se sem hipoglicemia; trocar para insulina/metformina conforme diretriz [C]"],
         ["HAS", "Trocar IECA/BRA por metildopa, nifedipino ou anlodipino antes da concepção [C]"],
         ["Hipotireoidismo", "TSH < 2,5 antes de engravidar; aumentar a levotiroxina ~25–30% ao confirmar gravidez [C]"],
         ["Vacinas", "Tríplice viral se suscetível (evitar gravidez por 4 semanas), hepatite B, dT, influenza, COVID-19 [C]"],
         ["Rastreios", "HIV, sífilis, hepatites B e C (casal) [C]"],
         ["Estilo de vida", "Cessar tabaco e álcool; peso; atividade física [C]"]]}},
       {perola: {t: "Mulher com epilepsia em uso de valproato: a conversa é urgente", x: "O valproato tem o maior risco de malformações e de prejuízo neurocognitivo entre os anticonvulsivantes. Troca deve ser planejada com o neurologista meses antes – nunca suspensão abrupta.", d: "evita malformações e prejuízo cognitivo no bebê sem descontrolar crises.", l: "C"}},
       {ref: ["pnsf2022", "remume", "sbd_dmg"]}
     ]}
    ]}
},
{
  id: "mu-infertilidade", modulo: "mu", nome: "Infertilidade: avaliação inicial do casal na APS", sistema: "Saúde reprodutiva e ginecologia", risco: "baixo",
  ciap: "W15 · Y10", cid: "N97 · N46",
  tags: "infertilidade dificuldade para engravidar espermograma ovulação progesterona janela fértil histerossalpingografia reprodução assistida SOP idade",
  orient: "Para a maioria dos casais, a gravidez acontece em até 1 ano de relações regulares sem proteção.\nRelações a cada 2–3 dias ao longo do ciclo funcionam tão bem quanto 'acertar o dia'.\nO exame do homem (espermograma) é simples e faz parte da investigação desde o início.\nCigarro, álcool e excesso ou falta de peso diminuem a fertilidade nos dois.",
  alarme: ["Dor pélvica intensa com atraso menstrual", "Ausência de menstruação por mais de 3 meses"],
  encaminhar: "Após avaliação inicial ou antes se ≥ 35 anos com 6 meses de tentativa, > 40 anos, amenorreia, endometriose conhecida, cirurgia pélvica prévia, alteração do espermograma → ginecologia/reprodução humana.",
  sus: {nacional: "Investigação básica na APS e na atenção especializada; reprodução assistida restrita a centros de referência.", betim: "Referência para infertilidade e acesso a histerossalpingografia em Betim: confirmar."},
  evid: {resumo: "Cerca de 80–85% dos casais concebem em 1 ano. Fator masculino participa de até metade dos casos, por isso o espermograma entra na avaliação inicial. Idade feminina é o principal determinante prognóstico.", certeza: "Moderada", fontes: ["nice_infert", "pcdt_sop"]},
  mudancas: ["Item novo."],
  nv: ["Serviço de referência em reprodução humana pelo SUS acessível a Betim."],
  guia: {
    resumo: "Duas decisões mudam desfecho: **não atrasar** quem tem idade (≥ 35 anos: investigar com 6 meses; > 40: de imediato) e **investigar o homem desde o início** (espermograma). Muitas causas são tratáveis com medidas simples (peso, tabaco, SOP).",
    secoes: [
     {t: "Quando e o que investigar", b: [
       {tab: {h: ["Quando", "Investigação inicial"], r: [
         ["< 35 anos, 12 meses de tentativa", "Mulher: ciclos (regulares = ovulação provável); progesterona no 21º dia (ou 7 dias antes da menstruação esperada) se ciclos irregulares; TSH e prolactina se irregulares; USG transvaginal [C]"],
         ["≥ 35 anos, 6 meses", "Homem: espermograma (2–7 dias de abstinência) [C]"],
         ["> 40 anos ou causa evidente", "Encaminhar logo; avaliar tubas (histerossalpingografia) pela regulação [C]"]]}},
       {ul: ["Orientar relações a cada 2–3 dias, ácido fólico, cessação de tabaco e álcool, peso adequado [C].", "SOP: perda de 5–10% do peso pode restaurar ovulação; indução (letrozol) com especialista [C]."]},
       {ref: ["nice_infert", "pcdt_sop"]}
     ]}
    ]}
}
);
