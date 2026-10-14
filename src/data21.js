// ───────────── SAÚDE DO HOMEM (revisão 10/10/2026). Temas guiados pelo Notion (não usado como fonte).
Object.assign(FONTES, {
  nt_psa2023: {s: "NT 9/2023 – próstata", t: "Ministério da Saúde. Nota Técnica nº 9/2023-COSAH/CGACI/DGCI/SAPS/MS (out/2023): não recomenda o rastreamento populacional do câncer de próstata; para quem solicita, ampla discussão de riscos e benefícios; não fazer campanhas convocando assintomáticos; investigar prontamente sintomas urinários e homens de alto risco (norma).", f: "F", url: "https://antigo.inca.gov.br/sites/ufu.sti.inca.local/files//media/document//notatecnica_rastreio_cancer_de_prostata_2023.pdf"},
  uspstf_psa: {s: "USPSTF 2018 – próstata", t: "USPSTF. Prostate Cancer: Screening (2018) – 55 a 69 anos: decisão individual (C); ≥ 70 anos: não rastrear (D) (diretriz).", f: "C", url: ""},
  eau_psa: {s: "EAU – próstata", t: "European Association of Urology. Guidelines on Prostate Cancer (2024/2025) – detecção precoce adaptada ao risco, com ressonância multiparamétrica antes da biópsia (diretriz).", f: "C", url: ""},
  sbu_psa: {s: "SBU – próstata", t: "Sociedade Brasileira de Urologia – avaliação individualizada a partir dos 50 anos; a partir dos 45 em negros e com parente de 1º grau com câncer de próstata (posicionamento, conforme Portal Afya; não conferido no documento original).", f: "C", url: "https://portal.afya.com.br/urologia/novembro-azul-o-que-as-diretrizes-recomendam-sobre-o-rastreio-de-cancer-de-prostata"},
  eau_luts: {s: "EAU – LUTS masculino", t: "European Association of Urology. Guidelines on Management of Non-neurogenic Male LUTS (2024/2025) (diretriz).", f: "C", url: ""},
  ipss_escala: {s: "IPSS", t: "International Prostate Symptom Score (AUA-SI/IPSS) – 7 itens de 0 a 5 + qualidade de vida (escala validada em português).", f: "C", url: ""},
  iief5_escala: {s: "IIEF-5", t: "Rosen RC et al. International Index of Erectile Function – versão de 5 itens (IIEF-5/SHIM), 1999 (escala).", f: "C", url: ""},
  aua_de: {s: "AUA 2018 – disfunção erétil", t: "American Urological Association. Erectile Dysfunction Guideline (2018, emendas posteriores) (diretriz).", f: "C", url: ""},
  aua_testo: {s: "AUA/Endocrine Society – testosterona", t: "AUA Testosterone Deficiency Guideline (2018, emenda 2024) e Endocrine Society Clinical Practice Guideline on Testosterone Therapy (2018) (diretrizes).", f: "C", url: ""},
  uspstf_aaa: {s: "USPSTF 2019 – AAA", t: "USPSTF. Abdominal Aortic Aneurysm: Screening (2019) – USG única em homens de 65 a 75 anos que já fumaram (B) (diretriz).", f: "C", url: ""},
  pnaish: {s: "PNAISH / pré-natal do parceiro", t: "Ministério da Saúde. Política Nacional de Atenção Integral à Saúde do Homem (Portaria GM/MS nº 1.944/2009) e Guia do Pré-Natal do Parceiro para Profissionais de Saúde (política e guia; não conferidos nesta revisão).", f: "C", url: ""},
  suicidio_br: {s: "Suicídio – Brasil", t: "Ministério da Saúde. Boletins epidemiológicos de suicídio e lesão autoprovocada: taxas cerca de 3 a 4 vezes maiores em homens (boletim; não conferido nesta revisão).", f: "C", url: ""}
});

CONDICOES.push(
{
  id: "ho-rotina", modulo: "ho", nome: "Consulta do homem e pré-natal do parceiro", sistema: "Consulta do homem", risco: "baixo",
  ciap: "A98", cid: "Z00.0 · Z13.6",
  tags: "saúde do homem consulta de rotina pré-natal do parceiro testes rápidos vacinas risco cardiovascular álcool tabaco aneurisma de aorta PSA violência paternidade",
  S: "Paciente, ___ anos, para consulta ___ (rotina / pré-natal do parceiro – parceira com ___ semanas). Queixas ___ (urinárias, sexuais, humor, sono). Tabaco ___ (maços-ano ___) | álcool (AUDIT-C ___) | outras substâncias ___. Atividade física ___. Doenças e medicamentos ___. Antecedentes familiares (DCV precoce, DM, câncer de próstata/intestino) ___. Vacinas ___. Trabalho/acidentes ___. Violência (como vítima ou autor) ___.",
  O: "PA ___ | IMC ___ | cintura ___ cm. Testes rápidos: HIV ___, sífilis ___, hepatite B ___, hepatite C ___.",
  A: "Consulta preventiva do homem ___. Fatores de risco: ___.",
  P: "- Rastreios: PA; PREVENT ___; DM2 ___; FIT (50–75) ___; testes rápidos ___; AAA (65–75 ex/fumante) ___.\n- PSA: ___ (decisão compartilhada / não rastrear).\n- Vacinas: ___.\n- Intervenção breve: ___.\n- Pré-natal do parceiro: tratar parceria se sífilis; orientar sobre gestação, parto e cuidado do bebê.",
  orient: "Homens procuram menos a UBS e por isso descobrem doenças mais tarde. Uma consulta por ano vale a pena.\nAcompanhar o pré-natal da parceira protege a saúde do bebê: faça os testes rápidos e atualize as vacinas.\nO exame de PSA não é obrigatório: converse com a equipe sobre benefícios e riscos antes de decidir.",
  alarme: ["Dor no peito ao esforço", "Sangue na urina ou nas fezes", "Dificuldade para urinar com febre ou retenção", "Pensamentos de se machucar"],
  encaminhar: "Conforme achados.",
  sus: {nacional: "PNAISH; pré-natal do parceiro na APS (testes rápidos, vacinas, consulta); FIT, perfil lipídico, glicemia e testes rápidos no SUS.", betim: "Horários estendidos/terceiro turno para homens trabalhadores em Betim: confirmar."},
  evid: {resumo: "Os maiores ganhos em homens vêm de PA, risco cardiovascular, cessação de tabaco, redução de álcool, rastreio colorretal e testagem de IST. PSA é decisão compartilhada (MS não recomenda rastreio populacional). USG única para aneurisma de aorta em homens de 65–75 anos que já fumaram reduz mortalidade por AAA.", certeza: "Moderada a alta", fontes: ["nt_psa2023", "conitec_ccr2026", "uspstf_aaa", "pcdt_hcv2026", "pnaish", "prevent_aha"]},
  mudancas: ["Item novo. A rotina da página original pedia PSA, TSH, EAS e escore de Framingham: PSA virou decisão compartilhada, TSH/EAS saíram e o risco CV usa o PREVENT (SBC 2025)."],
  nv: ["Fluxo do pré-natal do parceiro em Betim."],
  guia: {
    resumo: "O homem chega pouco à UBS – **cada contato é oportunidade**: PA, PREVENT, tabaco, álcool, FIT, testes rápidos e vacinas. O pré-natal do parceiro é a porta de entrada mais subutilizada, e tratar a parceria na sífilis evita sífilis congênita.",
    calcs: ["prevent", "sc:auditc", "macos"],
    secoes: [
     {t: "Pacote preventivo", b: [
       {tab: {h: ["Item", "Quando"], r: [
         ["PA, IMC, cintura", "Toda consulta [C]"], ["PREVENT + perfil lipídico", "30–79 anos [C]"], ["Glicemia/HbA1c", "≥ 35 anos ou fatores de risco [F]"],
         ["FIT", "50–75 anos, bienal [F]"], ["Testes rápidos (HIV, sífilis, hepatites B e C)", "Ao menos uma vez; hepatite C em todos ≥ 18 [F]"],
         ["USG de aorta abdominal", "65–75 anos, já fumou: 1 vez [C]"], ["PSA", "Só após decisão compartilhada (ver guia) [F]"],
         ["Vacinas", "Hepatite B, dT, febre amarela, tríplice viral conforme idade [F]"]]}},
       {ref: ["sbd_rastreio2025", "conitec_ccr2026", "pcdt_hcv2026", "uspstf_aaa", "nt_psa2023", "pni_adulto2026"]}
     ]},
     {t: "Pré-natal do parceiro", b: [
       {ul: ["Testes rápidos de HIV, sífilis e hepatites; tratar sífilis do parceiro junto com a gestante [C].", "Atualizar vacinas (hepatite B, dT, febre amarela, tríplice viral) [F].", "Avaliar PA, glicemia, tabaco e álcool [C].", "Conversar sobre paternidade, licença, participação no parto e na amamentação, e prevenção de violência [C]."]},
       {perola: {t: "Sífilis congênita se previne no parceiro", x: "Gestante tratada que volta a ter relação com parceiro não tratado se reinfecta. Convidar e tratar o parceiro no pré-natal é medida de alto impacto.", d: "menos sífilis congênita.", l: "C"}},
       {ref: ["pnaish", "pni_adulto2026"]}
     ]}
    ]}
},
{
  id: "ho-psa", modulo: "ho", nome: "Câncer de próstata: PSA e decisão compartilhada", sistema: "Próstata e trato urinário", risco: "moderado",
  ciap: "Y77 · A98", cid: "Z12.5 · R97.2",
  tags: "PSA rastreamento câncer de próstata toque retal decisão compartilhada sobrediagnóstico ressonância biópsia novembro azul negros história familiar finasterida",
  orient: "O PSA pode achar câncer de próstata cedo, mas também acha cânceres que nunca causariam problema – e o tratamento pode deixar impotência e perda de urina.\nPor isso o Ministério da Saúde não recomenda o exame para todos os homens: a decisão é sua, depois de conversar com a equipe.\nDificuldade para urinar, jato fraco, levantar muito à noite para urinar ou sangue na urina: procure a UBS.",
  alarme: ["Sangue na urina", "Retenção urinária", "Dor óssea persistente com perda de peso"],
  encaminhar: "PSA persistentemente elevado (após repetir), toque retal alterado ou sintomas suspeitos → urologia (ressonância multiparamétrica antes de biópsia, quando disponível).",
  sus: {nacional: "PSA e toque retal disponíveis; MS não recomenda rastreio populacional nem campanhas para assintomáticos (NT 9/2023).", betim: "Fluxo de encaminhamento à urologia e acesso à ressonância em Betim: confirmar."},
  evid: {resumo: "No ERSPC, o rastreio com PSA reduziu a mortalidade específica com seguimento longo, à custa de sobrediagnóstico e sobretratamento; revisões sistemáticas não mostram redução de mortalidade total. O MS (NT 9/2023) não recomenda rastreio populacional e orienta decisão compartilhada; a USPSTF (2018) recomenda decisão individual de 55 a 69 anos e não rastrear ≥ 70; a SBU propõe avaliação a partir dos 50 (45 em alto risco).", certeza: "Moderada", fontes: ["nt_psa2023", "uspstf_psa", "eau_psa", "sbu_psa"]},
  mudancas: ["Item novo. A página original indicava PSA 'conforme idade' na rotina; agora é decisão compartilhada, conforme a NT 9/2023."],
  nv: ["Acesso à ressonância multiparamétrica de próstata pela regulação."],
  guia: {
    resumo: "A decisão que muda desfecho é **conversar antes de pedir**: PSA traz pequena redução de morte por câncer de próstata e muito sobrediagnóstico. Quem mais pode se beneficiar: 55–69 anos (ou 45–50 em negros e com história familiar), com expectativa de vida > 10–15 anos.",
    calcs: ["psa"],
    secoes: [
     {t: "O que dizem as fontes", b: [
       {tab: {h: ["Fonte", "Recomendação"], r: [
         ["MS – NT 9/2023", "Não recomenda rastreio populacional; quem solicitar: discussão ampla de riscos e benefícios; sem campanhas; investigar sintomáticos e alto risco [F]"],
         ["USPSTF 2018", "55–69 anos: decisão individual (C); ≥ 70: não rastrear (D) [C]"],
         ["SBU", "Avaliação individual a partir dos 50; a partir dos 45 em negros ou com parente de 1º grau [C]"],
         ["EAU", "Detecção precoce adaptada ao risco, com RM antes da biópsia [C]"]]}},
       {p: "**Para a conversa:** de cada 1.000 homens de 55–69 anos rastreados por cerca de 13 anos, aproximadamente 1 morte por câncer de próstata é evitada, enquanto dezenas terão falso-positivo/biópsia e vários terão câncer que não causaria dano, com risco de incontinência e impotência se tratados [C]."},
       {ref: ["nt_psa2023", "uspstf_psa", "sbu_psa", "eau_psa"]}
     ]},
     {t: "Se o PSA foi pedido", b: [
       {calc: "psa"},
       {ul: ["PSA elevado: **repetir** em 6–8 semanas, sem ejaculação/ciclismo nas 48 h e após tratar ITU/prostatite, antes de encaminhar [C].", "**Finasterida** reduz o PSA em ~50% após 6–12 meses: multiplicar por 2 [C].", "Toque retal alterado (nódulo, endurecimento): encaminhar independentemente do PSA [C].", "Vigilância ativa é a conduta para muitos cânceres de baixo risco – evite 'pressa' no encaminhamento sem contexto [C]."]},
       {trio: {ideal: "Decisão compartilhada; PSA a cada 2 anos se escolhido; RM multiparamétrica antes da biópsia; vigilância ativa para baixo risco.", sus: "PSA e toque retal na APS; urologia e RM pela regulação, com espera variável.", ponte: "Peça PSA só após decisão informada e registre a conversa no prontuário. Encaminhe PSA persistentemente alterado com o valor repetido e o contexto clínico."}},
       {ref: ["eau_psa", "nt_psa2023"]}
     ]}
    ]}
},
{
  id: "ho-hpb", modulo: "ho", nome: "Sintomas urinários e hiperplasia prostática benigna", sistema: "Próstata e trato urinário", risco: "moderado",
  ciap: "U13 · Y85", cid: "N40 · R39.1",
  tags: "HPB hiperplasia prostática benigna LUTS jato fraco noctúria IPSS doxazosina tansulosina finasterida terapia combinada retenção urinária oxibutinina",
  S: "Paciente, ___ anos, com ___ (jato fraco / hesitação / esforço / gotejamento / esvaziamento incompleto / frequência / urgência / noctúria ___x) há ___. IPSS ___ (QV ___). Hematúria ___. ITU ___. Retenção prévia ___. Medicamentos (anticolinérgicos, descongestionantes, diuréticos) ___. Ingestão hídrica noturna/cafeína/álcool ___.",
  O: "Abdome: bexiga palpável ___. Toque retal (se indicado): próstata ___ (volume ___, consistência ___, nódulos ___). EAS ___. Creatinina ___. PSA ___ (se decisão compartilhada ou suspeita).",
  A: "LUTS ___ (leve/moderado/grave) sugestivo de HPB ___.",
  P: "- Medidas comportamentais: reduzir líquidos à noite, cafeína e álcool; micção dupla.\n- ___ (doxazosina / finasterida / combinação) conforme guia.\n- Reavaliar em 4–6 semanas (α-bloqueador) e 3–6 meses (finasterida).\n- Orientado sobre sinais de alerta.",
  rx: [
    {trilha: "ambos", titulo: "Doxazosina (REMUME 2 mg)", texto: "USO ORAL\n1. Doxazosina 2 mg ______ 30 comprimidos\n   Tomar 1/2 comprimido (1 mg) à noite por 1 semana e depois 1 comprimido (2 mg) à noite. Levantar-se devagar.", dose: "NV", nota: "Titular até 4–8 mg conforme resposta e tolerância (conferir bula). Hipotensão postural, sobretudo em idosos e com anti-hipertensivos. Avisar antes de cirurgia de catarata (íris flácida)."},
    {trilha: "ambos", titulo: "Finasterida (REMUME 5 mg) – próstata aumentada", texto: "USO ORAL\n1. Finasterida 5 mg ______ 30 comprimidos\n   Tomar 1 comprimido ao dia, uso contínuo.", dose: "NV", nota: "Efeito em 3–6 meses; reduz risco de retenção e cirurgia quando a próstata é > 30–40 mL. Reduz o PSA em ~50%. Pode reduzir libido e causar disfunção erétil."},
    {trilha: "evidencia", titulo: "Tansulosina (comprar) – menos hipotensão", texto: "USO ORAL\n1. Tansulosina 0,4 mg ______ 30 cápsulas\n   Tomar 1 cápsula ao dia, após a mesma refeição.", dose: "NV", nota: "α1A-seletiva, menos hipotensão postural; ejaculação retrógrada é comum. Não localizada na RENAME/REMUME."}
  ],
  idealsus: {ideal: "α-bloqueador uroseletivo (tansulosina) para sintomas; associar inibidor da 5α-redutase se próstata > 40 mL ou PSA > 1,5; anticolinérgico/β3 se sintomas de armazenamento.", sus: "Doxazosina 2 mg e finasterida 5 mg na REMUME; oxibutinina 5 mg na REMUME.", ponte: "Doxazosina com titulação lenta à noite funciona bem; se hipotensão limitante, tansulosina comprada. Combine com finasterida da REMUME na próstata aumentada."},
  orient: "Diminua líquidos 2 horas antes de dormir e reduza café e álcool.\nTome a doxazosina à noite e levante-se devagar.\nA finasterida demora 3 a 6 meses para fazer efeito e reduz o valor do PSA pela metade – avise em exames futuros.\nSe não conseguir urinar, procure atendimento imediatamente.",
  alarme: ["Não conseguir urinar (retenção)", "Sangue na urina", "Febre com dor ao urinar", "Desmaio ao levantar"],
  encaminhar: "Retenção urinária, hematúria, ITU de repetição, cálculo vesical, insuficiência renal por obstrução, toque retal suspeito, PSA alterado persistente, falha do tratamento clínico, IPSS grave com impacto → urologia.",
  sus: {nacional: "RENAME 2024 (Básico): doxazosina 2 e 4 mg; finasterida 5 mg; oxibutinina.", betim: "REMUME Betim: doxazosina 2 mg, finasterida 5 mg, oxibutinina 5 mg."},
  evid: {resumo: "α-bloqueadores melhoram sintomas em dias a semanas; inibidores da 5α-redutase reduzem o volume prostático, o risco de retenção aguda e de cirurgia em próstatas aumentadas; a combinação é superior na progressão (MTOPS, CombAT).", certeza: "Alta", fontes: ["eau_luts", "ipss_escala", "rename", "remume"]},
  mudancas: ["Item novo, a partir do fluxograma de HPB da página original. Tansulosina (citada lá) não está na REMUME; doxazosina e finasterida estão."],
  nv: ["Doses de titulação da doxazosina e da finasterida: conferir bula."],
  guia: {
    resumo: "Muda desfecho: **medir o incômodo (IPSS)**, **afastar sinais de alarme** (retenção, hematúria, IRA) e usar o que a REMUME tem bem – **doxazosina** para sintomas e **finasterida** para próstata aumentada (reduz retenção e cirurgia).",
    calcs: ["sc:ipss", "psa"],
    secoes: [
     {t: "Avaliação", b: [
       {calc: "sc:ipss"},
       {ul: ["EAS (ITU, hematúria) e creatinina; PSA se decisão compartilhada, suspeita clínica ou para estimar volume prostático [C].", "Diário miccional se noctúria predominante (poliúria noturna: apneia do sono, IC, diurético, líquidos à noite) [C].", "Rever medicamentos: anticolinérgicos, anti-histamínicos, descongestionantes, opioides [C]."]},
       {ref: ["eau_luts", "ipss_escala"]}
     ]},
     {t: "Tratamento", b: [
       {fluxo: [
         {t: "IPSS e incômodo", ramos: [
           {r: "Leve (0–7)", n: [{t: "Orientações comportamentais e vigilância", k: "ok"}]},
           {r: "Moderado (8–19)", n: [{t: "α-bloqueador (doxazosina REMUME)", k: "warn"}, {t: "Próstata > 30–40 mL ou PSA > 1,5: + finasterida"}]},
           {r: "Grave (20–35) ou complicação", n: [{t: "Tratamento clínico + urologia", k: "stop"}]}
         ]}
       ], nota: "Faixas do IPSS e escolha de fármacos: EAU [C]."},
       {perola: {t: "Finasterida muda a história natural, o α-bloqueador não", x: "O α-bloqueador alivia, mas não reduz o risco de retenção ou cirurgia. Em próstata aumentada, a finasterida (REMUME) reduz ambos ao longo dos anos – lembre de dobrar o PSA de quem a usa.", d: "menos retenção urinária aguda e cirurgia.", l: "C"}},
       {ref: ["eau_luts", "remume"]}
     ]}
    ]}
},
{
  id: "ho-de", modulo: "ho", nome: "Disfunção erétil", sistema: "Saúde sexual", risco: "moderado",
  ciap: "Y07 · P08", cid: "N48.4 · F52.2",
  tags: "disfunção erétil impotência IIEF-5 sildenafila tadalafila nitrato risco cardiovascular testosterona libido diabetes antidepressivo betabloqueador tabagismo",
  S: "Paciente, ___ anos, com dificuldade de ___ (obter / manter) ereção há ___. Início ___ (súbito / gradual). Ereções matinais ___. Libido ___. Ejaculação ___. Relação/contexto ___. Humor ___. Comorbidades (HAS, DM, dislipidemia, DCV, depressão) ___. Medicamentos ___ (tiazídico, betabloqueador, ISRS, antipsicótico, finasterida, nitratos). Tabaco/álcool/drogas ___. IIEF-5 ___.",
  O: "PA ___ | IMC ___ | cintura ___. Genitais ___ (placas de Peyronie, testículos ___). Pulsos ___. Glicemia/HbA1c ___ | perfil lipídico ___ | testosterona total matinal ___ (se baixa libido).",
  A: "Disfunção erétil ___ (leve/moderada/grave), provavelmente ___ (vascular / psicogênica / medicamentosa / mista).",
  P: "- Avaliação de risco cardiovascular (PREVENT) e controle de fatores.\n- Revisão de medicamentos ___.\n- Inibidor de PDE5 ___ (se sem nitrato).\n- Abordagem psicossexual ___.\n- Retorno em ___.",
  rx: [
    {trilha: "evidencia", titulo: "Sildenafila sob demanda (comprar)", texto: "USO ORAL\n1. Sildenafila 50 mg ______ 4 comprimidos\n   Tomar 1 comprimido cerca de 1 hora antes da relação sexual, no máximo 1 vez ao dia.", dose: "NV", nota: "Ajustar 25–100 mg. Contraindicada com nitratos (dinitrato/mononitrato de isossorbida) e riociguate. Cautela com α-bloqueador (doxazosina): iniciar com dose baixa. No SUS, sildenafila só no CEAF para hipertensão pulmonar/esclerose sistêmica."},
    {trilha: "evidencia", titulo: "Tadalafila (comprar) – uso diário ou sob demanda", texto: "USO ORAL\n1. Tadalafila 5 mg ______ 30 comprimidos\n   Tomar 1 comprimido ao dia (uso contínuo).", dose: "NV", nota: "Alternativa: 10–20 mg sob demanda. Útil se HPB associada. Mesmas contraindicações."}
  ],
  idealsus: {ideal: "Inibidor de PDE5 + controle de fatores de risco cardiovasculares + abordagem psicossexual; testosterona apenas se hipogonadismo confirmado.", sus: "Inibidores de PDE5 não são dispensados para disfunção erétil no SUS (sildenafila só CEAF para HAP/esclerose sistêmica). Controle de fatores de risco e psicologia na rede.", ponte: "Sildenafila genérica tem custo baixo na farmácia; oriente compra e uso correto. Aproveite a queixa para tratar HAS, DM, dislipidemia e tabagismo."},
  orient: "A disfunção erétil é comum e tem tratamento. Muitas vezes é um sinal precoce de problema nas artérias – vale checar pressão, glicose e colesterol.\nO remédio funciona com estímulo sexual e precisa de cerca de 1 hora para agir.\nNUNCA use junto com remédios de nitrato para o coração (isossorbida).\nParar de fumar, emagrecer e fazer exercícios melhoram a ereção.",
  alarme: ["Ereção dolorosa que dura mais de 4 horas", "Dor no peito durante a relação", "Perda súbita da visão ou audição após o remédio"],
  encaminhar: "Doença de Peyronie, trauma pélvico, hipogonadismo confirmado, falha de PDE5 bem usado, DE com DCV instável → urologia/cardiologia/endocrinologia conforme o caso.",
  sus: {nacional: "Sildenafila na RENAME somente no Componente Especializado (HAP, esclerose sistêmica).", betim: "Não há inibidor de PDE5 na REMUME."},
  evid: {resumo: "A disfunção erétil compartilha fisiopatologia com a doença arterial e costuma precedê-la em alguns anos – é marcador de risco cardiovascular. Inibidores de PDE5 são eficazes em ~60–70% dos casos; mudança de estilo de vida e perda de peso melhoram a função erétil.", certeza: "Alta", fontes: ["aua_de", "iief5_escala", "prevent_aha", "rename", "remume"]},
  mudancas: ["Item novo."],
  nv: ["Doses de sildenafila/tadalafila: conferir bula."],
  guia: {
    resumo: "A DE é, muitas vezes, a **primeira manifestação de doença arterial**. O que muda desfecho é usar a queixa para **calcular o risco cardiovascular e tratar fatores**, revisar medicamentos culpados e tratar com PDE5 com segurança (nunca com nitrato).",
    calcs: ["sc:iief5", "prevent"],
    secoes: [
     {t: "Avaliação", b: [
       {calc: "sc:iief5"},
       {ul: ["Glicemia/HbA1c, perfil lipídico, PA, PREVENT [C].", "Testosterona total matinal **se** baixa libido ou outros sinais de hipogonadismo – não de rotina [C].", "Ereções matinais preservadas e início súbito situacional sugerem componente psicogênico [C].", "Medicamentos: tiazídicos, betabloqueadores não vasodilatadores, ISRS, antipsicóticos, finasterida, opioides [C]."]},
       {perola: {t: "Pergunte sobre ereção no hipertenso e no diabético", x: "Muitos homens não contam e abandonam o anti-hipertensivo achando que ele é a causa. Perguntar ativamente permite trocar a classe (ex.: de tiazídico/betabloqueador para BRA/BCC) e manter a adesão.", d: "melhor adesão ao tratamento da HAS e menos eventos.", l: "I"}},
       {ref: ["aua_de", "iief5_escala", "prevent_aha"]}
     ]}
    ]}
},
{
  id: "ho-testosterona", modulo: "ho", nome: "Testosterona baixa (hipogonadismo masculino)", sistema: "Saúde sexual", risco: "moderado",
  ciap: "T99 · Y07", cid: "E29.1",
  tags: "hipogonadismo testosterona baixa reposição libido fadiga obesidade opioide anabolizante fertilidade LH FSH prolactina hematócrito",
  orient: "A testosterona baixa só deve ser tratada quando há sintomas e duas dosagens de manhã confirmam o valor baixo.\nEmagrecer, dormir bem e tratar o diabetes podem normalizar a testosterona.\nReposição de testosterona reduz a produção de espermatozoides – não use se deseja ter filhos.\nAnabolizantes trazem riscos graves ao coração, ao fígado e à fertilidade.",
  alarme: ["Dor de cabeça com alteração da visão (tumor de hipófise)", "Sangue muito 'grosso' (hematócrito alto) em uso de testosterona", "Dor e inchaço na perna"],
  encaminhar: "Hipogonadismo confirmado (diagnóstico etiológico e tratamento), prolactina elevada, LH/FSH baixos (hipogonadismo central), desejo de fertilidade → endocrinologia/urologia.",
  sus: {nacional: "Testosterona: não localizada na RENAME 2024 [NV].", betim: "Não consta da REMUME."},
  evid: {resumo: "Diagnóstico exige sintomas compatíveis e testosterona total matinal baixa em 2 ocasiões (corte usual ~300 ng/dL). Obesidade, DM2, opioides e doença aguda reduzem a testosterona de forma reversível. A reposição melhora libido e função sexual em hipogonádicos, não está indicada para 'baixa energia' isolada nem para envelhecimento normal, e suprime a espermatogênese.", certeza: "Moderada", fontes: ["aua_testo"]},
  mudancas: ["Item novo."],
  nv: ["Presença de testosterona na RENAME/CEAF e critérios de acesso em MG."],
  guia: {
    resumo: "O erro mais comum é **dosar sem sintomas** e **repor sem confirmar** – ou repor em quem quer ter filhos. Em obesos, perda de peso costuma recuperar a testosterona.",
    secoes: [
     {t: "Quando investigar e como", b: [
       {ul: ["Investigar se **baixa libido, DE, perda de ereções matinais**, ginecomastia, redução de pelos, osteoporose/fratura de baixo impacto, infertilidade [C].", "Testosterona total **entre 7 e 10 h**, em jejum, repetida; se baixa: LH, FSH, prolactina [C].", "Não dosar em doença aguda nem como rastreio [C].", "Causas reversíveis: obesidade, DM2, apneia, opioides, glicocorticoides, álcool, anabolizantes [C]."]},
       {perola: {t: "Testosterona é contraceptivo masculino", x: "A reposição suprime LH/FSH e a produção de espermatozoides. Em homem que deseja filhos, encaminhe para alternativas que preservam a fertilidade.", d: "evita infertilidade iatrogênica.", l: "C"}},
       {ref: ["aua_testo"]}
     ]}
    ]}
},
{
  id: "ho-mental", modulo: "ho", nome: "Saúde mental masculina: depressão, álcool e suicídio", sistema: "Saúde mental", risco: "alto",
  ciap: "P76 · P15 · P77", cid: "F32 · F10 · X84",
  tags: "saúde mental homem depressão masculina irritabilidade álcool suicídio armas de fogo meios letais PHQ-9 AUDIT CAPS vergonha estigma",
  alerta: "Ideação suicida com plano, acesso a meio letal (arma, veneno) ou tentativa recente: não deixar sozinho, restringir meios e acionar CAPS/urgência no mesmo dia.",
  orient: "Sentir tristeza, irritação, cansaço ou perder o interesse por semanas não é fraqueza: é uma condição de saúde que tem tratamento.\nBeber mais para aliviar costuma piorar o humor.\nSe pensar em se machucar, procure ajuda imediatamente: CVV 188 (24 h, gratuito) ou SAMU 192.",
  alarme: ["Pensamentos de morte ou de se machucar", "Plano ou acesso a arma ou veneno", "Uso de álcool para dormir ou aliviar", "Isolamento e despedidas"],
  encaminhar: "Risco de suicídio moderado/alto, depressão grave, psicose, dependência de álcool/drogas → CAPS/CAPS AD; risco iminente → urgência.",
  sus: {nacional: "APS, eMulti, CAPS e CAPS AD; antidepressivos na RENAME.", betim: "REMUME Betim: fluoxetina, sertralina, amitriptilina, nortriptilina; naltrexona. CAPS e CAPS AD: ver 'Rede de Betim'."},
  evid: {resumo: "Homens têm taxas de suicídio cerca de 3–4 vezes maiores que mulheres no Brasil e procuram menos ajuda; a depressão pode se manifestar por irritabilidade, raiva, uso de álcool e comportamento de risco. Perguntar diretamente sobre suicídio não aumenta o risco; restringir o acesso a meios letais reduz mortes.", certeza: "Moderada", fontes: ["suicidio_br", "audit_c", "remume"]},
  mudancas: ["Item novo, a partir do bloco 'Saúde Mental e Comportamental' da página original."],
  nv: ["Taxas atualizadas de suicídio por sexo em MG/Betim."],
  guia: {
    resumo: "No homem, a depressão costuma vir **mascarada** (irritabilidade, álcool, trabalho excessivo) e ele raramente pede ajuda. O que muda desfecho: **perguntar diretamente** sobre suicídio, **perguntar sobre armas e meios letais**, rastrear álcool e oferecer tratamento sem estigma.",
    calcs: ["sc:phq9", "sc:auditc"],
    secoes: [
     {t: "Rastrear e avaliar", b: [
       {calc: "sc:phq9"},
       {ul: ["Pergunte: 'Você tem pensado que seria melhor estar morto ou em se machucar?' – não induz ideação [C].", "Se sim: plano, meios (arma de fogo em casa, venenos, medicamentos), tentativas prévias, álcool, fatores de proteção [C].", "**Restrição de meios:** combinar com família a retirada de armas e o controle de medicamentos [C].", "AUDIT-C em todo homem com sintomas depressivos [C]."]},
       {perola: {t: "Arma em casa muda o risco", x: "A letalidade do meio determina quem morre após uma crise suicida. Perguntar sobre arma de fogo e pactuar sua retirada temporária é uma das intervenções mais eficazes.", d: "menos mortes por suicídio.", l: "C"}},
       {ref: ["suicidio_br", "audit_c"]}
     ]}
    ]}
},
{
  id: "ho-escroto", modulo: "ho", nome: "Nódulo testicular e alterações escrotais (não agudas)", sistema: "Próstata e trato urinário", risco: "moderado",
  ciap: "Y04 · Y99", cid: "N43 · I86.1 · N50.8",
  tags: "nódulo testicular câncer de testículo varicocele hidrocele cisto de epidídimo espermatocele massa escrotal USG marcadores AFP beta-hCG LDH",
  orient: "Caroço endurecido no testículo precisa ser avaliado logo com ultrassonografia – o câncer de testículo atinge homens jovens e tem cura alta quando tratado cedo.\nVaricocele e hidrocele são comuns e geralmente benignas.\nDor forte e súbita no testículo é urgência: procure atendimento imediatamente.",
  alarme: ["Dor súbita e intensa no testículo (torção)", "Caroço endurecido no testículo", "Aumento rápido do escroto", "Febre com escroto vermelho e inchado"],
  encaminhar: "Massa testicular sólida → USG e urologia com prioridade (marcadores antes da cirurgia); escroto agudo → urgência; varicocele com dor, atrofia ou infertilidade → urologia.",
  sus: {nacional: "USG de bolsa escrotal e urologia pela regulação.", betim: "Prioridade para USG escrotal em suspeita de tumor em Betim: confirmar."},
  evid: {resumo: "Câncer de testículo é o tumor sólido mais comum em homens jovens e tem cura > 95% quando localizado. Rastreio populacional (autoexame ou exame clínico) não é recomendado (USPSTF D), mas toda massa testicular palpável exige USG.", certeza: "Moderada", fontes: ["uspstf_naorastrear"]},
  mudancas: ["Item novo."],
  nv: ["Fluxo de prioridade para USG escrotal em Betim."],
  guia: {
    resumo: "**Massa dentro do testículo = câncer até prova em contrário** → USG e urologia com prioridade. Massas fora do testículo (cisto de epidídimo, hidrocele, varicocele) costumam ser benignas.",
    secoes: [
     {t: "Diferenciar pelo exame", b: [
       {tab: {h: ["Achado", "Provável", "Conduta"], r: [
         ["Nódulo endurecido no testículo, indolor", "Tumor testicular", "USG + AFP, β-hCG, LDH → urologia com prioridade [C]"],
         ["Massa cística acima/atrás do testículo", "Cisto de epidídimo / espermatocele", "USG se dúvida; conduta expectante [C]"],
         ["Aumento difuso que transilumina", "Hidrocele", "USG em adulto para excluir tumor; cirurgia se incômodo [C]"],
         ["'Saco de vermes' que aumenta em pé/Valsalva, à esquerda", "Varicocele", "Urologia se dor, atrofia ou infertilidade; varicocele isolada à direita ou que não esvazia deitado: investigar massa retroperitoneal [C]"],
         ["Dor súbita, testículo alto/horizontal", "Torção", "Urgência imediata (janela de 6 h) [C]"]]}},
       {ref: ["uspstf_naorastrear"]}
     ]}
    ]}
}
);
