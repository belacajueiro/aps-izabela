// ───────────── CRÔNICOS – deficiências (vitamina D, ferro), outras condições, escalas e aplicação dos guias
Object.assign(FONTES, {
  frax: {s: "FRAX", t: "FRAX – Fracture Risk Assessment Tool (Universidade de Sheffield), com modelo calibrado para o Brasil (ferramenta).", f: "C", url: "https://frax.shef.ac.uk/FRAX/"},
  sbc_calc: {s: "Calculadora SBC", t: "SBC – Calculadora de estratificação de risco cardiovascular (Departamento de Aterosclerose) – ferramenta online.", f: "C", url: "http://departamentos.cardiol.br/sbc-da/2015/CALCULADORAER2020/index.html"},
  hearts: {s: "HEARTS (OPAS)", t: "OPAS/OMS – HEARTS: calculadora de risco cardiovascular – ferramenta online.", f: "C", url: "https://www.paho.org/cardioapp/web/#/cvrisk"},
  guia_alimentar: {s: "Guia Alimentar (MS)", t: "Ministério da Saúde. Guia Alimentar para a População Brasileira, 2ª ed., 2014 (documento oficial do MS).", f: "C", url: ""},
  dpp2002: {s: "DPP 2002", t: "Knowler WC et al. Reduction in the incidence of type 2 diabetes with lifestyle intervention or metformin (Diabetes Prevention Program). N Engl J Med 2002 (ECR).", f: "C", url: ""},
  oms_af2020: {s: "OMS 2020 – atividade física", t: "OMS. Diretrizes sobre atividade física e comportamento sedentário, 2020 (diretriz).", f: "C", url: ""},
  bsg_ferro2021: {s: "BSG 2021", t: "Snook J et al. British Society of Gastroenterology guidelines for the management of iron deficiency anaemia in adults. Gut 2021 (diretriz).", f: "C", url: ""}
});

CR_PATCH["cr-vitd"] = {sistema: "Deficiências nutricionais", nome: "Deficiência de vitamina D", guia: {
  resumo: "A maior parte das dosagens de vitamina D não muda conduta: **não dose sem indicação**. Em quem tem risco e 25(OH)D < 20 ng/mL, reponha com doses **diárias ou semanais** – **megadoses mensais ou anuais aumentaram quedas e fraturas** em ECR.",
  calcs: ["calcio"],
  secoes: [
   {t: "Quando dosar", b: [
     {ul: ["Osteoporose ou fratura por fragilidade", "Má absorção (doença celíaca, DII), cirurgia bariátrica", "DRC avançada, hepatopatia", "Anticonvulsivantes, glicocorticoides crônicos, antirretrovirais", "Idoso institucionalizado ou sem exposição solar; pele muito pigmentada com pouca exposição", "Hipocalcemia, hiperparatireoidismo, raquitismo/osteomalácia"]},
     {perola: {t: "Dosar sem indicação gera cascata", x: "USPSTF (evidência insuficiente para rastrear) e Endocrine Society 2024 (não dosar rotineiramente) concordam. VITAL e D-Health não mostraram redução de câncer, DCV ou fraturas com suplementação em pessoas sem deficiência [C].", d: "prevenção quaternária: menos exames, suplementos e consultas sem benefício.", l: "C"}},
     {ref: ["vitd_guias"]}
   ]},
   {t: "Interpretação e reposição", b: [
     {tab: {h: ["25(OH)D", "Interpretação"], r: [["< 20 ng/mL", "Deficiência: repor em grupo de risco"], ["20–30 ng/mL", "Adequado para a população geral; meta 30–60 em grupos de risco (osteoporose, DRC, bariátrica)"], ["> 100 ng/mL", "Risco de toxicidade (hipercalcemia)"]]}, nota: "Faixas do posicionamento brasileiro SBPC/SBEM [C]."},
     {tab: {h: ["Esquema usual", "Dose"], r: [["Ataque se < 20 ng/mL", "50.000 UI/semana ou 7.000 UI/dia por 6–8 semanas [NV]"], ["Se 20–30 em grupo de risco", "Cerca de 2.000–5.000 UI/dia [NV]"], ["Manutenção", "1.000–3.000 UI/dia ou 7.000–10.000 UI/semana [NV]"]]}, nota: "Esquemas usuais na literatura (Endocrine Society 2011; posicionamento SBEM/SBPC) [NV]: conferir na bula e no consenso vigente. Tomar com refeição. Reavaliar 25(OH)D em 8–12 semanas."},
     {perola: {t: "Megadose faz mal", x: "Dose única anual de 500.000 UI e doses mensais de 60.000 UI aumentaram quedas e/ou fraturas em ECR com idosos [C]. Prefira doses diárias ou semanais.", d: "evita quedas e fraturas iatrogênicas.", l: "C"}},
     {perola: {t: "Polivitamínico do SUS não serve para repor vitamina D em adulto", x: "O polivitamínico em gotas da REMUME tem 900 UI de D2 e 3.000 UI de vitamina A por mL [F]: o volume necessário para tratar deficiência levaria a excesso de vitamina A.", d: "evita hipervitaminose A.", l: "I"}},
     {calc: "calcio"},
     {trio: {ideal: "Dosar só em grupos de risco e repor quando < 20 ng/mL com doses diárias ou semanais.", sus: "Colecalciferol isolado não está na REMUME; RENAME tem carbonato de cálcio + colecalciferol 200–400 UI (dose de manutenção).", ponte: "Na maioria, não dosar evita compra desnecessária; no grupo de risco com deficiência, o colecalciferol genérico tem baixo custo."}},
     {ref: ["vitd_guias", "rename", "remume"]}
   ]}
  ]}};

CR_PATCH["cr-ic"] = {sistema: "Outras condições crônicas", guia: {
  resumo: "Na IC com FE reduzida, **quatro classes juntas** (IECA/BRA ou sacubitril-valsartana, betabloqueador, espironolactona e iSGLT2) reduzem a mortalidade de forma aditiva; o erro mais comum na APS é **parar na dose baixa**. Diurético alivia sintoma, mas não muda sobrevida.",
  calcs: ["ckd", "ferro"],
  secoes: [
   {t: "Classificação", b: [
     {tab: {h: ["Fração de ejeção", "Tipo", "O que reduz eventos"], r: [["≤ 40%", "IC com FE reduzida", "4 pilares (ver abaixo)"], ["41–49%", "Levemente reduzida", "iSGLT2; considerar os demais pilares"], ["≥ 50%", "Preservada", "iSGLT2 reduz internação (fora do SUS para FE > 40%); controlar PA, FA, congestão"]]}, nota: "ESC 2021/2023 [C]. Dapagliflozina para FE > 40%: não incorporada (CONITEC, dez/2025) [F]."},
     {ref: ["esc_ic", "dapa_ic"]}
   ]},
   {t: "Os 4 pilares", b: [
     {fluxo: [
       {t: "ICFEr sintomática, euvolêmica"},
       {t: "Iniciar os 4 pilares em dose baixa nas primeiras semanas", s: "IECA/BRA · betabloqueador · espironolactona · dapagliflozina"},
       {t: "Titular 1 classe a cada 2–4 semanas até a dose-alvo ou máxima tolerada", k: "warn", s: "K e creatinina 1–2 semanas após cada ajuste"},
       {t: "Sintomático com FEVE ≤ 35% apesar disso?", ramos: [
         {r: "Sim", n: [{t: "Cardiologia: sacubitril-valsartana (CEAF), dispositivos", k: "stop"}]},
         {r: "Não", n: [{t: "Manter; peso diário; retorno 3–6 meses", k: "ok"}]}
       ]}
     ], nota: "PCDT ICFEr 2024 e ESC [F/C]."},
     {tab: {h: ["Classe", "REMUME Betim", "Dose-alvo"], r: [["IECA", "Enalapril 10/20 mg", "10–20 mg 2x/dia [NV]"], ["BRA (se tosse com IECA)", "Losartana 50 mg", "Até 150 mg/dia [NV]"], ["Betabloqueador", "Carvedilol 3,125/12,5 mg", "25 mg 2x/dia (50 mg 2x se > 85 kg) [NV]"], ["Antagonista mineralocorticoide", "Espironolactona 25 mg", "25–50 mg/dia [NV]"], ["iSGLT2", "Dapagliflozina (CEAF)", "10 mg/dia [F]"]]}, nota: "Doses-alvo dos ECR [C]; conferir bula."},
     {perola: {t: "Titular rápido salva vidas", x: "No STRONG-HF, a titulação intensiva dos pilares após internação por IC (consultas a cada 1–2 semanas) reduziu morte ou reinternação em 180 dias [C].", d: "menos morte e reinternação; não deixe o paciente meses na dose inicial.", l: "C"}},
     {perola: {t: "Não suspenda o betabloqueador na piora leve", x: "Na congestão leve, ajuste o diurético e, se necessário, reduza o betabloqueador; suspender aumenta eventos [C]. Choque, bradicardia sintomática ou bloqueio são exceções.", d: "preserva o benefício de longo prazo.", l: "C"}},
     {ref: ["pcdt_ic", "esc_ic", "remume"]}
   ]},
   {t: "Cuidados que evitam internação", b: [
     {ul: ["**Peso diário:** ganho > 2 kg em 3 dias → contato com a equipe; ajustar diurético.", "**Evitar:** AINE, glitazonas, diltiazem/verapamil, excesso de sal; restrição hídrica só com hiponatremia ou congestão.", "**Ferropenia:** ferritina < 100, ou 100–299 com saturação < 20% – ferro EV melhora sintomas e reduz internações [C].", "**Vacinas:** influenza e pneumocócica.", "**Atividade física/reabilitação** conforme tolerância."]},
     {calc: "ferro"},
     {ref: ["esc_ic", "pcdt_ic"]}
   ]}
  ]}};

CR_PATCH["cr-hipotireoidismo"] = {sistema: "Outras condições crônicas", guia: {
  resumo: "No hipotireoidismo, a decisão que mais muda desfecho é **não tratar o subclínico leve (TSH < 10)** na maioria – sem melhora de sintomas e com risco de supertratamento (FA, perda óssea) – e **ajustar a dose pelo TSH a cada 6–8 semanas**.",
  secoes: [
   {t: "Diagnóstico", b: [
     {ul: ["**Franco:** TSH alto com T4 livre baixo. **Subclínico:** TSH alto com T4 livre normal.", "Repetir TSH e T4L em 2–3 meses antes de decidir (oscila e normaliza em parte dos casos) [F].", "Não dosar TSH em doença aguda; **biotina** interfere no exame (suspender 2–3 dias antes) [C].", "TSH baixo/normal com T4L baixo = hipotireoidismo central → endocrinologia."]},
     {ref: ["sbem_tsh"]}
   ]},
   {t: "Quem tratar", b: [
     {fluxo: [
       {t: "TSH alto confirmado"},
       {t: "Gestante ou deseja gestar?", ramos: [
         {r: "Sim", n: [{t: "Tratar (ver módulo pré-natal)", k: "warn"}]},
         {r: "Não", n: [{t: "TSH", ramos: [
           {r: "≥ 10 ou franco", n: [{t: "Tratar", k: "warn"}]},
           {r: "4,5–9,9", n: [{t: "Em geral não tratar", k: "ok", s: "considerar < 65 anos com anti-TPO+ e TSH subindo, ou DCV/alto risco com TSH > 7 (SBEM)"}]}
         ]}]}
       ]}
     ], nota: "SBEM 2013 e BMJ 2019 [F]."},
     {perola: {t: "Subclínico leve não melhora com levotiroxina", x: "ECR, incluindo o TRUST em idosos, não mostraram melhora de cansaço, humor ou qualidade de vida; a diretriz BMJ 2019 recomenda não tratar a maioria [F].", d: "evita tratamento por toda a vida sem benefício e o risco de supertratamento.", l: "F"}},
     {ref: ["sbem_tsh", "bmj_tsh"]}
   ]},
   {t: "Dose e seguimento", b: [
     {ul: ["Dose plena estimada ~1,6 mcg/kg/dia em adulto jovem; iniciar 25–50 mcg/dia em idosos ou coronariopatas [C].", "Em jejum, só com água, 30–60 min antes do café; separar 4 h de ferro, cálcio e antiácidos; IBP pode reduzir a absorção.", "TSH 6–8 semanas após cada mudança de dose; depois anual.", "**Supertratamento** (TSH suprimido): risco de FA e perda óssea, sobretudo em idosos – reduzir a dose [C].", "REMUME Betim: levotiroxina 25, 50, 75 e 100 mcg [F]."]},
     {perola: {t: "TSH um pouco acima do normal no idoso tratado pode estar bom", x: "Em idosos, o TSH sobe fisiologicamente; metas um pouco mais altas evitam supertratamento [C].", d: "menos FA e fratura.", l: "C"}},
     {ref: ["ata_hipo", "remume"]}
   ]}
  ]}};

CONDICOES.push(
{
  id: "cr-ferro", modulo: "cr", nome: "Deficiência de ferro e anemia ferropriva", sistema: "Deficiências nutricionais", risco: "moderado",
  ciap: "B80", cid: "D50.9 / E61.1",
  tags: "anemia ferropriva deficiência de ferro ferritina sulfato ferroso sacarato ferro endovenoso Ganzoni colonoscopia sangramento digestivo",
  S: "Paciente, ___ anos, com ___ (cansaço, palidez, queda de cabelo, pica, pernas inquietas). Fluxo menstrual ___. Sangramento digestivo/melena ___. Dieta ___. Uso de AINE/AAS/anticoagulante ___. IBP ___. Bariátrica ___. Doação de sangue ___. Perda de peso ___. História familiar de câncer colorretal ___.",
  O: "PA ___ | FC ___ | Palidez ___ | Glossite/queilite ___\nExames: Hb ___ | VCM ___ | RDW ___ | ferritina ___ | saturação de transferrina ___ | PCR ___ | creatinina ___.",
  A: "Anemia ferropriva ___ (leve/moderada/grave), provável causa ___. / Deficiência de ferro sem anemia.",
  P: "- Investigar a causa (ginecológica; digestiva em homem e mulher pós-menopausa: EDA + colonoscopia; doença celíaca).\n- Sulfato ferroso 40 mg de ferro elementar: 1–2 comprimidos 1 vez ao dia ou em dias alternados, longe das refeições.\n- Hb em 2–4 semanas; ferritina após 3 meses; manter 3 meses após normalizar.\n- Ferro EV se intolerância, falha, má absorção, DRC/IC ou perda contínua.",
  rx: [
    {trilha: "ambos", titulo: "Sulfato ferroso (REMUME)", texto: "USO ORAL\n1. Sulfato ferroso 40 mg de ferro elementar ______ 60 comprimidos\n   Tomar 1 comprimido 1 vez ao dia (ou 2 comprimidos em dias alternados), 1 hora antes de uma refeição, com água ou suco. Não tomar com leite, café ou chá.", dose: "NV", nota: "Dose única diária ou em dias alternados aumenta a absorção fracionada e reduz efeitos gastrointestinais (Stoffel 2017/2020). Fezes escuras são esperadas."},
    {trilha: "sus", titulo: "Ferripolimaltose (intolerância ao sulfato ferroso)", texto: "USO ORAL\n1. Ferripolimaltose 100 mg comprimido mastigável ______ 30 comprimidos\n   Mastigar 1 comprimido 1 vez ao dia, junto ou após a refeição.", dose: "NV", nota: "Incorporada no Componente Básico para intolerância ao sulfato ferroso (Portaria SECTICS 17/2023, RENAME 2024). Não localizada na REMUME Betim: confirmar disponibilidade."},
    {trilha: "ambos", titulo: "Sacarato de hidróxido férrico EV (REMUME)", texto: "USO ENDOVENOSO\n1. Sacarato de hidróxido férrico 20 mg/mL (100 mg/5 mL) ______ ___ ampolas\n   Diluir 100–200 mg em SF 0,9% 100–200 mL e infundir em 15–30 min, até 3 vezes por semana, até completar o déficit calculado (Ganzoni).", dose: "NV", nota: "Indicar se intolerância/falha do oral, má absorção, DRC, IC ou perda contínua. Aplicar em serviço com observação e manejo de reação. Conferir bula e protocolo local."}
  ],
  idealsus: {ideal: "Ferro oral em dose única diária ou em dias alternados; ferro EV (carboximaltose ou sacarato) quando o oral falha ou não é tolerado; investigar a causa sempre.", sus: "Sulfato ferroso 40 mg e sacarato de hidróxido férrico na REMUME; ferripolimaltose na RENAME (Básico) para intolerância.", ponte: "O sulfato ferroso bem orientado resolve a maioria; o sacarato da REMUME cobre quem precisa de EV, desde que aplicado em serviço com observação."},
  orient: "Seu corpo está com pouco ferro. Precisamos repor e descobrir a causa.\nTome o ferro 1 vez ao dia (ou em dias alternados), 1 hora antes de uma refeição, com água ou suco. Evite tomar junto com leite, café, chá ou remédio para estômago.\nAs fezes ficam escuras: é esperado. Se tiver muita prisão de ventre ou enjoo, avise – há outras opções.\nComa feijão, carnes, folhas verde-escuras, com uma fruta cítrica na refeição.",
  alarme: ["Fezes pretas como piche ou sangue nas fezes", "Desmaio, falta de ar ou dor no peito", "Cansaço que piora muito", "Perda de peso sem explicação"],
  encaminhar: "Homem ou mulher pós-menopausa: EDA + colonoscopia (regulação, prioridade se sinais de alarme). Sem resposta ao ferro, anemia grave ou sintomática → avaliação no mesmo dia/hematologia. Menorragia → ginecologia.",
  sus: {nacional: "RENAME 2024: sulfato ferroso 40 mg (comprimido), 25 mg/mL e 5 mg/mL (Básico); ferripolimaltose (Básico, intolerância ao sulfato ferroso); sacarato de hidróxido férrico 20 mg/mL (Especializado – PCDT anemia na DRC).", betim: "REMUME Betim: sulfato ferroso 40 mg e 25 mg/mL; sacarato de hidróxido férrico 20 mg/mL (ampola de 5 mL)."},
  evid: {resumo: "Doses únicas diárias ou em dias alternados aumentam a absorção fracionada (pela hepcidina) e reduzem efeitos adversos em comparação com várias doses ao dia. Na deficiência de ferro em homens e mulheres pós-menopausa, a investigação digestiva identifica lesões relevantes, incluindo câncer colorretal. Ferro EV corrige mais rápido e é preferido na intolerância, má absorção, DRC e IC.", certeza: "Moderada", fontes: ["stoffel", "rename", "remume", "kdigo2024", "esc_ic"]},
  mudancas: ["Item novo (o toggle 'Deficiência de ferro / anemia ferropriva' do Notion estava vazio)."],
  nv: ["Doses e diluição do sacarato EV: conferir bula e protocolo local.", "Onde aplicar ferro EV em Betim (unidade/policlínica).", "Disponibilidade de ferripolimaltose em Betim."],
  guia: {
    resumo: "Deficiência de ferro é um **sinal, não um diagnóstico**: em homem e mulher pós-menopausa, investigar **perda digestiva** (inclusive câncer colorretal) muda desfecho. Trate com ferro oral em **dose única diária ou em dias alternados** – absorve melhor e causa menos efeitos adversos.",
    calcs: ["ferro"],
    secoes: [
     {t: "Diagnóstico", b: [
       {tab: {h: ["Exame", "Sugere deficiência de ferro"], r: [["Ferritina", "< 30 ng/mL (padrão); < 100 se inflamação, DRC ou IC"], ["Saturação de transferrina", "< 20%"], ["Hemograma", "Hb baixa (< 13 g/dL em homens; < 12 em mulheres não gestantes), VCM e HCM baixos, RDW alto"]]}, nota: "Limiares usuais [C]. A ferritina é proteína de fase aguda: com PCR alta, pode estar falsamente normal."},
       {ref: ["kdigo2024", "esc_ic"]}
     ]},
     {t: "Investigar a causa", b: [
       {fluxo: [
         {t: "Deficiência de ferro confirmada"},
         {t: "Quem é o paciente?", ramos: [
           {r: "Mulher que menstrua", n: [{t: "Fluxo menstrual, gestação, dieta, doação de sangue"}, {t: "Sem causa clara ou sintomas digestivos → investigar como abaixo"}]},
           {r: "Homem ou mulher pós-menopausa", n: [{t: "EDA + colonoscopia", k: "stop", s: "prioridade se ≥ 50 anos, perda de peso, sangue nas fezes, história familiar de CCR"}, {t: "Doença celíaca (antitransglutaminase IgA)"}]}
         ]},
         {t: "Rever AINE, AAS, anticoagulante, IBP, bariátrica, parasitoses", k: "warn"}
       ], nota: "Investigação conforme a diretriz da British Society of Gastroenterology (2021) [C]."},
       {perola: {t: "Anemia ferropriva no homem é câncer colorretal até prova em contrário", x: "Em homens e mulheres pós-menopausa, a deficiência de ferro sem causa óbvia tem rendimento importante de lesões digestivas, incluindo neoplasia; tratar só com ferro mascara o diagnóstico [C].", d: "diagnóstico mais precoce de câncer colorretal e gástrico.", l: "C"}},
       {ref: ["bsg_ferro2021"]}
     ]},
     {t: "Tratamento", b: [
       {calc: "ferro"},
       {ul: ["**Oral:** sulfato ferroso 40 mg de ferro elementar, 1–2 comprimidos 1x/dia ou em dias alternados, longe de leite, café, chá, cálcio e antiácidos [C].", "**Vitamina C** não é necessária de rotina; suco cítrico na refeição ajuda [C].", "**Intolerância:** reduzir a dose, tomar à noite ou com pouca comida, ou trocar para ferripolimaltose (RENAME, Básico) [F].", "**EV (sacarato da REMUME):** intolerância ou falha do oral, má absorção (celíaca, bariátrica), DRC, IC, perda contínua, 2º/3º trimestre com anemia importante [C]."]},
       {perola: {t: "Menos é mais no ferro oral", x: "Em ECR de absorção, uma dose ao dia ou em dias alternados aumentou a absorção fracionada em relação a várias doses no mesmo dia, porque a hepcidina sobe por ~24 h após cada dose [C].", d: "mais ferro absorvido, menos náusea e constipação, melhor adesão.", l: "C"}},
       {ref: ["stoffel", "rename", "remume"]}
     ]},
     {t: "Resposta e seguimento", b: [
       {ul: ["Hb deve subir ≥ 1 g/dL em 2–4 semanas; reticulócitos sobem em 7–10 dias.", "Sem resposta: adesão, perda contínua, má absorção (celíaca, H. pylori, IBP), diagnóstico errado (talassemia, anemia de doença crônica).", "Manter o ferro por ~3 meses após normalizar a Hb (repor estoques); ferritina de controle.", "Gestante: ver 'Anemia na gestação' (módulo pré-natal)."]},
       {trio: {ideal: "Ferro oral em dose única diária ou dias alternados; ferro EV quando o oral falha; investigar a causa sempre.", sus: "Sulfato ferroso e sacarato EV na REMUME; ferripolimaltose na RENAME para intolerância.", ponte: "Oriente bem o oral antes de trocar; reserve o EV para quem tem indicação, em serviço com observação."}},
       {ref: ["stoffel"]}
     ]}
    ]}
},
{
  id: "cr-osteoporose", modulo: "cr", nome: "Osteoporose", sistema: "Outras condições crônicas", risco: "moderado",
  ciap: "L95", cid: "M81.0 / M80.0",
  tags: "osteoporose densitometria DXA T-escore FRAX fratura fragilidade alendronato zoledrônico cálcio vitamina D quedas romosozumabe",
  S: "Paciente, ___ anos, com ___ (fratura por fragilidade em ___ / densitometria com T-escore ___ / fatores de risco). Quedas no último ano ___. Corticoide ___. Menopausa precoce ___. Tabaco/álcool ___. Ingestão de cálcio (laticínios/dia) ___. Disfagia/doença esofágica ___.",
  O: "Peso ___ | Altura ___ (perda em relação à adulta ___ cm) | Cifose ___ | Teste de levantar e andar ___.\nExames: DXA ___ (coluna T ___; colo do fêmur T ___) | FRAX (fratura maior ___%; quadril ___%) | Ca ___ | creatinina/TFG ___ | 25(OH)D ___ | TSH ___ | hemograma ___.",
  A: "Osteoporose ___ (pós-menopausa / masculina / secundária a ___), risco de fratura ___ (alto / muito alto – PCDT 2025).",
  P: "- Cálcio pela dieta (700–1.200 mg/dia) e vitamina D adequada; suplementar se insuficiente.\n- Alendronato 70 mg 1 vez por semana (REMUME), em jejum, em pé por 30 min.\n- Exercícios de equilíbrio e força ≥ 2x/semana; prevenção de quedas.\n- Investigar causas secundárias.\n- DXA de controle em 1–2 anos; reavaliar após 5 anos de bisfosfonato oral.",
  rx: [
    {trilha: "ambos", titulo: "Alendronato semanal (REMUME)", texto: "USO ORAL\n1. Alendronato de sódio 70 mg ______ 4 comprimidos\n   Tomar 1 comprimido 1 vez por semana, sempre no mesmo dia, em jejum, com um copo cheio de água. Ficar sentado ou em pé por 30 minutos e só então comer ou tomar outros remédios.", dose: "NV", nota: "1ª linha no PCDT Osteoporose 2025. Contraindicado com hipocalcemia, doença esofágica que atrasa o esvaziamento, incapacidade de ficar ereto 30 min; evitar com TFG < 30–35. Corrigir vitamina D antes."},
    {trilha: "ambos", titulo: "Cálcio (se a dieta não atinge a meta)", texto: "USO ORAL\n1. Carbonato de cálcio 1.250 mg (500 mg de cálcio elementar) ______ 30 comprimidos\n   Tomar 1 comprimido ao dia junto com a refeição (complementar a dieta).", dose: "NV", nota: "Suplementar só a diferença para 1.000–1.200 mg/dia; excesso aumenta cálculo renal. REMUME tem carbonato de cálcio 1.250 mg; cálcio + colecalciferol está na RENAME (Básico)."},
    {trilha: "evidencia", titulo: "Colecalciferol (comprar, se deficiência)", texto: "USO ORAL\n1. Colecalciferol 7.000 UI ______ 8 cápsulas\n   Tomar 1 cápsula por semana (ou 1.000 UI/dia), conforme a dosagem de 25(OH)D.", dose: "NV", nota: "Evitar megadoses (≥ 60.000 UI/mês ou 500.000 UI/ano), associadas a mais quedas e fraturas."},
    {trilha: "ambos", titulo: "Ácido zoledrônico EV (CEAF – intolerância ou dificuldade de deglutição)", texto: "USO ENDOVENOSO\n1. Ácido zoledrônico 5 mg/100 mL ______ 1 frasco\n   Infundir em no mínimo 15 minutos, 1 vez por ano (até 3 anos), com boa hidratação.", dose: "NV", nota: "PCDT 2025: quando o bisfosfonato oral não pode ser usado. Corrigir vitamina D e cálcio antes; reação de fase aguda é comum na 1ª dose; não usar com TFG < 35."}
  ],
  idealsus: {ideal: "Bisfosfonato (alendronato ou zoledrônico) para risco alto; anabólico (romosozumabe, teriparatida) seguido de antirreabsortivo para muito alto risco; prevenção de quedas.", sus: "Alendronato 70 mg na REMUME; risedronato, zoledrônico, raloxifeno e romosozumabe pelo CEAF conforme critérios do PCDT 2025; teriparatida excluída do SUS (2024).", ponte: "A maioria se trata bem com alendronato da REMUME bem tomado. Muito alto risco com falha: abrir o CEAF para romosozumabe (mulheres pós-menopausa)."},
  orient: "A osteoporose deixa os ossos frágeis e aumenta o risco de fraturas, principalmente de quadril e coluna.\nTome o alendronato 1 vez por semana, em jejum, com um copo cheio de água, e fique sentado ou em pé por 30 minutos antes de comer.\nComa alimentos com cálcio (leite, queijo, iogurte, folhas verde-escuras) e tome sol com moderação.\nFaça exercícios de equilíbrio e fortalecimento. Deixe a casa mais segura: tire tapetes soltos, acenda a luz à noite, use calçado firme.",
  alarme: ["Dor forte e súbita nas costas após esforço pequeno", "Queda com dor no quadril ou incapacidade de andar", "Dor ao engolir ou azia forte após o alendronato", "Dor na coxa ou virilha que piora (raro, com uso prolongado)"],
  encaminhar: "Muito alto risco com indicação de anabólico, falha terapêutica (PCDT), osteoporose em homem jovem ou causa secundária complexa, Z-escore ≤ −2 → endocrinologia/reumatologia. Fratura → ortopedia.",
  sus: {nacional: "RENAME 2024: alendronato 10 e 70 mg, carbonato de cálcio, carbonato de cálcio + colecalciferol (Básico); risedronato 35 mg, ácido zoledrônico, pamidronato, raloxifeno, calcitriol e romosozumabe (Especializado – PCDT Osteoporose).", betim: "REMUME Betim: alendronato 70 mg e carbonato de cálcio 1.250 mg."},
  evid: {resumo: "Bisfosfonatos reduzem fraturas vertebrais e de quadril; após fratura de quadril, o ácido zoledrônico anual reduziu novas fraturas e a mortalidade (HORIZON-RFT). Anabólicos são superiores aos bisfosfonatos no muito alto risco. Exercícios de equilíbrio e força reduzem quedas.", certeza: "Alta para bisfosfonatos", fontes: ["pcdt_osteo2025", "horizon", "tdc_osteo", "frax", "rename", "remume"]},
  mudancas: ["Item novo, a partir da revisão de osteoporose e do PCDT arquivados no Drive (set/2026)."],
  nv: ["Doses e contraindicações renais: conferir bula.", "Acesso à DXA e ao FRAX pela regulação de Betim."],
  guia: {
    resumo: "Fratura de quadril ou de vértebra por trauma de baixa energia **já é osteoporose**, qualquer que seja o T-escore – e é a maior oportunidade perdida da APS. O **alendronato semanal** (REMUME) reduz fraturas vertebrais e de quadril; após fratura de quadril, o **ácido zoledrônico** reduziu também a mortalidade.",
    calcs: ["calcio"],
    secoes: [
     {t: "Diagnóstico e quem rastrear", b: [
       {ul: ["**Diagnóstico** (mulher pós-menopausa ou homem ≥ 50): fratura por fragilidade; ou T-escore ≤ −2,5 na coluna, colo do fêmur, fêmur total ou rádio 33%; ou T-escore entre −1,0 e −2,49 com FRAX alto [F].", "**DXA (PCDT 2025):** mulheres ≥ 65 anos, homens ≥ 70 anos e qualquer pessoa com fator de risco (baixo peso, fratura prévia, medicamentos ou doenças que afetam o osso) [F].", "Sem DXA, fratura e FRAX ainda estratificam e orientam tratamento (PCDT) [F]. [[FRAX (escolher Brasil)|https://frax.shef.ac.uk/FRAX/]]", "**Rastrear fratura vertebral silenciosa:** perda de altura > 4 cm ou dor → RX de coluna torácica e lombar em perfil [F]."]},
       {ref: ["pcdt_osteo2025", "frax", "tdc_osteo"]}
     ]},
     {t: "Estratificação de risco (PCDT 2025)", b: [
       {tab: {h: ["Risco", "Critério (qualquer um)"], r: [["Baixo a moderado", "T-escore > −2,5, FRAX baixo e sem fratura"], ["Alto", "T-escore ≤ −2,5; T-escore −1,0 a −2,49 com FRAX alto; fratura prévia"], ["Muito alto", "Fratura nos últimos 12 meses; múltiplas fraturas; fratura em tratamento ou em uso de droga que lesa o osso; T-escore < −3,0; FRAX muito alto; alto risco de quedas"]]}, nota: "Quadro 1 do PCDT Osteoporose 2025 [F]."},
       {ref: ["pcdt_osteo2025"]}
     ]},
     {t: "Tratamento", b: [
       {fluxo: [
         {t: "Todos: cálcio e vitamina D adequados + exercício + prevenção de quedas", k: "ok"},
         {t: "Risco alto?", ramos: [
           {r: "Sim", n: [{t: "Alendronato 70 mg/semana (REMUME) ou risedronato (CEAF)", k: "warn"}, {t: "Não tolera oral ou não deglute → ácido zoledrônico EV anual (CEAF)"}]},
           {r: "Muito alto com falha", n: [{t: "Romosozumabe 12 meses (CEAF, mulher pós-menopausa) → depois bisfosfonato", k: "stop"}]}
         ]},
         {t: "Raloxifeno: só em situações restritas (PCDT); teriparatida excluída do SUS"}
       ], nota: "PCDT Osteoporose 2025 [F]."},
       {perola: {t: "Depois da fratura de quadril, trate antes da alta da ortopedia virar esquecimento", x: "No HORIZON-RFT, ácido zoledrônico anual iniciado após fratura de quadril reduziu novas fraturas clínicas em cerca de 35% e a mortalidade em cerca de 28% [C]. Na APS, todo paciente com fratura por fragilidade deve sair com plano de tratamento.", d: "menos refratura e menos morte.", l: "C"}},
       {perola: {t: "Alendronato só funciona se tomado do jeito certo", x: "Absorção oral é < 1% e cai a quase zero com comida, café ou cálcio junto. Jejum, copo cheio de água, 30 min em pé ou sentado [C].", d: "eficácia real do fármaco e menos esofagite.", l: "C"}},
       {calc: "calcio"},
       {ref: ["pcdt_osteo2025", "horizon", "remume"]}
     ]},
     {t: "Duração, pausa e falha", b: [
       {ul: ["Bisfosfonato oral por 5 anos; EV por 3 anos; alto risco (T < −3,0 ou fraturas) até 10 anos oral ou 6 anos EV, individualizando [F].", "Após 5 anos de oral, considerar pausa de 1–2 anos com reavaliação (FRAX e DXA) [F].", "**Denosumabe** (fora do SUS): nunca suspender sem iniciar bisfosfonato (perda óssea rebote e fraturas vertebrais) [C].", "DXA a cada 1–2 anos até estabilizar, no mesmo equipamento (PCDT) [F].", "**Falha (PCDT):** ≥ 2 fraturas em ≥ 1 ano de tratamento, ou 1 fratura após ≥ 1 ano com perda de DMO > 5%, com boa adesão e sem causa secundária [F]."]},
       {ref: ["pcdt_osteo2025", "tdc_osteo"]}
     ]},
     {t: "Quedas e situações especiais", b: [
       {ul: ["**Exercícios** de equilíbrio e fortalecimento ≥ 2x/semana; ≥ 3 h/semana são mais eficazes [C].", "**Proteína** ≥ 0,75–1 g/kg/dia (mais na sarcopenia); cálcio 700–1.200 mg/dia pela dieta [C].", "**Megadoses de vitamina D** (≥ 60.000 UI/mês ou 500.000 UI/ano) aumentaram quedas e fraturas [C].", "**Corticoide** ≥ 7,5 mg/dia de prednisona por ≥ 3 meses: avaliar e tratar precocemente [C].", "**DM2:** o FRAX subestima o risco (DMO mais alta com mais fraturas) [C].", "**DRC 4–5:** o PCDT não recomenda tratamento medicamentoso – especialista [F].", "**Investigar causas secundárias** em todos: hemograma, Ca, P, creatinina, 25(OH)D, TSH; PTH se Ca alterado; Z-escore ≤ −2 sugere causa secundária [C]."]},
       {trio: {ideal: "Bisfosfonato para risco alto; anabólico seguido de antirreabsortivo no muito alto risco; prevenção de quedas.", sus: "Alendronato na REMUME; zoledrônico, risedronato, raloxifeno e romosozumabe pelo CEAF; teriparatida excluída.", ponte: "A maioria se trata com alendronato bem tomado. Muito alto risco com falha: CEAF para romosozumabe."}},
       {ref: ["pcdt_osteo2025", "tdc_osteo"]}
     ]}
    ]}
},
{
  id: "cr-escalas", modulo: "cr", nome: "Calculadoras e escalas de avaliação", sistema: "Escalas e calculadoras", risco: "baixo",
  ciap: "—", cid: "—",
  tags: "calculadoras escalas escores PREVENT CKD-EPI KFRE IMC peso ideal LDL Friedewald Sampson cálcio corrigido FIB-4 Child-Pugh CHA2DS2-VA HAS-BLED Rankin Barthel GDS Fagerström mMRC GINA PHQ-9 PAM",
  evid: {resumo: "Calculadoras implementadas a partir das fórmulas originais: PREVENT (coeficientes oficiais, conferidos com o exemplo de referência), CKD-EPI 2021, KFRE 4 variáveis, Sampson/NIH e Friedewald, Ganzoni, cálcio corrigido e FIB-4. Escalas de pontuação em paráfrase das versões publicadas. Instrumentos com direitos autorais restritos (CAT, ACT, MEEM, BDI) não foram reproduzidos.", certeza: "—", fontes: ["prevent_aha", "kfre", "kdigo2024", "dbdisl2025", "esc_fa2024", "gds_br", "sbc_calc", "hearts", "frax"]},
  mudancas: ["Reúne as 'Escalas de Avaliação' do Notion como calculadoras embutidas; links externos mantidos para as demais."],
  nv: [],
  guia: {
    resumo: "Todas as calculadoras do módulo num só lugar. Os resultados podem ser copiados para o prontuário. As que dependem de instrumentos com direitos autorais (CAT, ACT, MEEM, BDI, HAM-A) ficam como links externos.",
    secoes: [
     {t: "Cardiovascular", b: [{calc: "pa"}, {calc: "prevent"}, {calc: "lipides"}, {calc: "sc:cha2ds2va"}, {calc: "sc:hasbled"}]},
     {t: "Renal, metabólico e hepático", b: [{calc: "ckd"}, {calc: "antropo"}, {calc: "glic"}, {calc: "ferro"}, {calc: "calcio"}, {calc: "fib4"}, {calc: "sc:childpugh"}]},
     {t: "Respiratório e tabagismo", b: [{calc: "sc:gina"}, {calc: "sc:mmrc"}, {calc: "sc:fagerstrom"}]},
     {t: "Funcionalidade e humor", b: [{calc: "sc:rankin"}, {calc: "sc:barthel"}, {calc: "sc:gds15"}, {calc: "sc:phq9"}, {calc: "sc:gad7"}]},
     {t: "Ferramentas externas", b: [{ul: ["[[Calculadora de risco cardiovascular – SBC|http://departamentos.cardiol.br/sbc-da/2015/CALCULADORAER2020/index.html]]", "[[HEARTS – OPAS/OMS|https://www.paho.org/cardioapp/web/#/cvrisk]]", "[[PREVENT – AHA|https://professional.heart.org/en/guidelines-and-statements/prevent-calculator]]", "[[FRAX|https://frax.shef.ac.uk/FRAX/]]", "[[Escala de Ansiedade de Hamilton|https://calculadorasmedicas.com.br/calculadora/escala-de-ansiedade-hamilton]]", "[[Índice de gordura no fígado (FLI)|https://calculadorasmedicas.com.br/calculadora/fatty-liver-index-mdcalc]]", "[[FeverPAIN|https://calculadorasmedicas.com.br/calculadora/pontuacao-fever-pain]]"]}, {nota: "Escala de Beck (BDI): uso restrito a psicólogos (SATEPSI/CFP)."}]}
    ]}
}
);

// aplicar os guias aos itens existentes do módulo
CONDICOES.forEach(c => { const p = CR_PATCH[c.id]; if (p) Object.assign(c, p); });
