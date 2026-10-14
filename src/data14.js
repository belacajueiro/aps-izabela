// ───────────── CRÔNICOS – DM, Dislipidemias, Obesidade e DRC
CR_PATCH["cr-dm2"] = {sistema: "DM", nome: "DM2 – diagnóstico, metas e escalonamento", guia: {
  resumo: "No DM2, o que mais muda desfecho não é só a HbA1c: é **tratar o risco cardiorrenal** (iSGLT2 ou agonista de GLP-1 quando há DCV, IC ou DRC; estatina; PA), **evitar hipoglicemia** (sobretudo no idoso e com glibenclamida) e **rastrear pés, olhos e rins todo ano**.",
  calcs: ["glic", "ckd", "prevent", "antropo"],
  secoes: [
   {t: "Diagnóstico e rastreamento", b: [
     {tab: {h: ["Exame", "Diabetes", "Pré-diabetes"], r: [["HbA1c", "≥ 6,5%", "5,7–6,4%"], ["Glicemia de jejum (8 h)", "≥ 126 mg/dL", "100–125 mg/dL"], ["TOTG 2 h (75 g)", "≥ 200 mg/dL", "140–199 mg/dL"], ["Glicemia ao acaso + sintomas clássicos", "≥ 200 mg/dL", "—"]]}, nota: "Dois exames alterados (na mesma amostra ou em amostras diferentes), ou um com sintomas clássicos (SBD/ADA) [C]."},
     {ul: ["**Rastreamento:** todos a partir de **35 anos**; antes, se sobrepeso/obesidade + 1 fator de risco (sedentarismo, parente de 1º grau com DM, HAS, HDL < 35 ou TG > 250, SOP, acantose, DCV, DMG prévia) [F].", "**Pré-diabetes:** mudança de estilo de vida intensiva reduz a incidência de DM2 em cerca de 58% em 3 anos (DPP) [C]."]},
     {perola: {t: "Suspeite de LADA no 'DM2 que falha rápido'", x: "Adulto de 30–50 anos, IMC normal ou baixo, que em 6–12 meses perde a resposta aos orais e emagrece não é 'mau aderente': pode ser diabetes autoimune. Anti-GAD e peptídeo C ajudam (conforme acesso); encaminhar à endocrinologia e não atrasar a insulina.", d: "evita cetoacidose e meses de hiperglicemia.", l: "C"}},
     {perola: {t: "Quando a HbA1c engana", x: "Anemia, hemólise, hemoglobinopatias, DRC, gestação e uso de eritropoetina alteram a HbA1c sem refletir a glicemia média. Nessas situações, use glicemias capilares/plasmáticas (SBD) [F].", d: "evita sub ou sobretratamento.", l: "F"}},
     {ref: ["sbd_rastreio2025", "sbd_metas"]}
   ]},
   {t: "Metas individualizadas", b: [
     {tab: {h: ["Perfil (SBD)", "HbA1c", "Jejum/pré-prandial", "2 h pós", "Ao deitar", "Tempo no alvo (CGM)"], r: [["Adulto", "< 7,0%", "80–130", "< 180", "90–150", "> 70%"], ["Idoso saudável", "< 7,5%", "80–130", "< 180", "90–150", "> 70%"], ["Idoso comprometido (frágil)", "< 8,0%", "90–150", "< 180", "100–180", "> 50%"], ["Idoso muito comprometido", "evitar sintomas", "100–180", "—", "110–200", "—"]]}, nota: "Tabela 1 do capítulo de metas da SBD (lido no Drive) [F]. HbA1c 7% ≈ glicemia média 154 mg/dL."},
     {calc: "glic"},
     {perola: {t: "No idoso, HbA1c baixa demais também mata", x: "No ACCORD, a meta intensiva (HbA1c média 6,4%) em DM2 de longa data com DCV aumentou a mortalidade em 22%; ADVANCE e VADT não mostraram benefício cardiovascular (SBD) [F]. Idoso frágil com HbA1c < 7% usando sulfonilureia ou insulina é candidato a **desintensificar**.", d: "menos hipoglicemia grave, quedas, fraturas e internações.", l: "F"}},
     {ref: ["sbd_metas"]}
   ]},
   {t: "Escolha do tratamento", b: [
     {fluxo: [
       {t: "HbA1c no diagnóstico", ramos: [
         {r: "< 7,5%", n: [{t: "Metformina + estilo de vida", k: "ok"}]},
         {r: "7,5–9%", n: [{t: "Metformina + 2º agente"}]},
         {r: "> 9% sem sintomas", n: [{t: "Metformina + sulfonilureia (PCDT)", k: "warn"}]},
         {r: "Sintomas, catabolismo ou glicemia ≥ 300", n: [{t: "Insulina (pode ser transitória)", k: "stop"}]}
       ]},
       {t: "Fora da meta em 3 meses: há DCV aterosclerótica, IC ou DRC?", ramos: [
         {r: "Sim", n: [{t: "iSGLT2 independentemente da HbA1c", k: "ok", s: "dapagliflozina pelo CEAF se critério; GLP-1 com benefício CV se DCV/obesidade (compra)"}]},
         {r: "Não", n: [{t: "Sulfonilureia", s: "gliclazida MR preferível (compra); glibenclamida da REMUME com cautela"}]}
       ]},
       {t: "Fora da meta com 2–3 orais → NPH ao deitar", k: "warn", s: "ver 'Insulinização'"}
     ], nota: "Limiares de HbA1c de 7,5% e 9% para intensificar a terapia inicial: algoritmo da SBD [C], não conferido no documento nesta revisão; > 9% sem sintomas: metformina + sulfonilureia e insulina se sintomas ou catabolismo (PCDT DM2 2024, via SBD) [F]; iSGLT2 na DCV/IC/DRC (diretriz luso-brasileira 2023; SBD) [F]."},
     {tab: {h: ["Classe", "No SUS", "Efeito que importa", "Atenção"], r: [
       ["Metformina", "REMUME 850 mg; RENAME 500/850 mg (e XR 500 mg segundo a SBD)", "1ª linha; não causa hipoglicemia", "TGI (iniciar baixo, com refeição); B12 anual; TFG < 30 suspender"],
       ["iSGLT2 (dapagliflozina)", "CEAF – PCDT DM2, DRC e ICFEr", "↓ internação por IC e progressão renal", "Higiene genital; suspender em doença aguda (cetoacidose euglicêmica)"],
       ["Sulfonilureia", "Glibenclamida 5 mg (REMUME); gliclazida (RENAME, não localizada na REMUME)", "Potente e barata", "Hipoglicemia (glibenclamida > gliclazida); ganho de peso"],
       ["Agonista de GLP-1", "Não incorporado", "↓ eventos CV (semaglutida, liraglutida, dulaglutida); peso", "Náuseas; contraindicado com CMT/NEM2"],
       ["iDPP-4, pioglitazona, acarbose", "Não localizados na RENAME 2024", "Neutros em desfecho CV (iDPP-4)", "Pioglitazona: edema, IC, fraturas"],
       ["Insulina NPH/regular", "REMUME (frasco e caneta); glargina na lista municipal", "Sem teto de dose", "Hipoglicemia; educação obrigatória"]]}, nota: "Disponibilidade: RENAME 2024 e REMUME Betim [F]. Pioglitazona, iDPP-4 e acarbose: busca negativa na RENAME 2024 (não localizados) [F]."},
     {perola: {t: "DCV, IC ou DRC: o iSGLT2 entra pelo órgão, não pela glicemia", x: "Em ECR e metanálises, iSGLT2 reduziram internação por IC em cerca de 30% e progressão renal em cerca de 40%, com ou sem HbA1c alta; agonistas de GLP-1 reduziram eventos cardiovasculares maiores em cerca de 14% [C]. A SBD recomenda iSGLT2 associado à metformina, independentemente da HbA1c, em DM2 de alto risco [F].", d: "menos internações por IC, diálise e morte cardiovascular.", l: "F"}},
     {tab: {h: ["Dapagliflozina no CEAF (PCDT DM2 2024)", "Critério"], r: [["DCV estabelecida", "≥ 40 anos com IAM, revascularização, angina, AVC isquêmico, AIT ou IC com FE < 40%"], ["Alto risco sem DCV", "Homem ≥ 55 / mulher ≥ 60 anos com HAS, dislipidemia ou tabagismo"], ["Outros PCDT", "DRC (PCDT DRC 2024) e ICFEr (PCDT ICFEr 2024)"]]}, nota: "Critérios transcritos pela SBD a partir do PCDT DM2 2024 [F]. Solicitar com LME e relatório."},
     {perola: {t: "A armadilha do idoso emagrecido", x: "Idoso magro, perdendo peso, com HbA1c > 9%: metformina piora o TGI e o emagrecimento. Esse pâncreas precisa de **insulina** (efeito anabólico) – ou, no mínimo, gliclazida.", d: "evita sarcopenia, quedas e hipoglicemia por subnutrição.", l: "I"}},
     {perola: {t: "A 'falsa IRA' do iSGLT2", x: "Ao iniciar dapagliflozina, a TFG pode cair até ~30% nas primeiras semanas por efeito hemodinâmico – é o mecanismo de proteção renal. Não suspenda se a queda for < 30% (KDIGO 2024) [C].", d: "mantém a nefroproteção de longo prazo.", l: "C"}},
     {ref: ["pcdt_dm2", "sbd_sus", "sbd_luso2023", "cardiorrenal", "kdigo2024", "rename", "remume"]}
   ]},
   {t: "Rastreio anual de complicações", b: [
     {tab: {h: ["O quê", "Como", "Frequência"], r: [["Retinopatia", "Fundoscopia/retinografia (oftalmologia)", "Anual a partir do diagnóstico [F]"], ["Doença renal", "Creatinina/TFG + RAC", "Anual [F]"], ["Pés", "Inspeção, monofilamento 10 g, diapasão 128 Hz, pulsos", "No diagnóstico e anual; mais vezes se risco [F]"], ["Lipídios", "Perfil lipídico", "Anual ou conforme tratamento [F]"], ["B12", "Se metformina", "Anual [F]"], ["Coração", "ECG; sintomas de IC/angina", "Anual ou conforme risco"]]}, nota: "Periodicidade do PCDT DM2 (via SBD) [F]."},
     {tab: {h: ["Risco do pé (IWGDF)", "Achado", "Reavaliar"], r: [["0", "Sensibilidade e pulsos normais", "Anual"], ["1", "Perda de sensibilidade ou DAP", "6–12 meses"], ["2", "Perda de sensibilidade + DAP ou deformidade", "3–6 meses"], ["3", "Úlcera ou amputação prévia, DRC dialítica", "1–3 meses"]]}, nota: "Classificação do IWGDF [C]."},
     {perola: {t: "O pé diabético começa no olho", x: "Retinopatia avançada (não enxerga para cortar a unha) + obesidade (não alcança o pé) = risco altíssimo de amputação, mesmo com sensibilidade parcial. Envolva o cuidador e a enfermagem.", d: "a educação e o calçado adequado reduzem úlcera e amputação [C].", l: "I"}},
     {ref: ["sbd_sus"]}
   ]},
   {t: "Proteção cardiovascular e renal", b: [
     {tab: {h: ["Categoria (SBC 2025)", "DM2 com…", "Meta LDL"], r: [["Intermediário", "< 50 anos (homem) ou < 56 (mulher), sem estratificadores", "< 100 mg/dL"], ["Alto", "≥ 50 (H) ou ≥ 56 (M), ou 1–2 estratificadores de alto risco (EAR)", "< 70 mg/dL"], ["Muito alto", "≥ 3 EAR ou ≥ 1 estratificador de muito alto risco (EMAR)", "< 50 mg/dL"]]}, nota: "EAR: DM > 10 anos, história familiar de DAC precoce, síndrome metabólica, HAS, tabagismo, DRC de risco alto, placa < 50% ou CAC 10–300, aneurisma de aorta, neuropatia autonômica incipiente, retinopatia não proliferativa leve. EMAR: SCA/IAM, AVC/AIT, DAP, estenose > 50%, revascularização, DM1 > 20 anos, ≥ 3 EAR, LDL > 190, neuropatia autonômica instalada, retinopatia moderada-grave (Figura 5.1, SBC 2025) [F]."},
     {ul: ["PA < 130/80; IECA/BRA se albuminúria.", "Estatina conforme a categoria acima (ver 'Dislipidemias').", "AAS só em prevenção secundária [C].", "Cessar tabagismo; vacinas (influenza, hepatite B, pneumocócica pelo CRIE)."]},
     {ref: ["dbdisl2025", "dbha2025"]}
   ]},
   {t: "Dias de doença e segurança", b: [
     {ul: ["**Desidratação, vômitos, diarreia, febre alta, sem conseguir comer:** suspender metformina e iSGLT2 até voltar a comer e beber (acidose lática e cetoacidose euglicêmica) [C].", "**Hipoglicemia:** 15 g de carboidrato (1 colher de sopa de açúcar), medir em 15 min, repetir se < 70; depois lanche.", "**Cetoacidose euglicêmica com iSGLT2:** náuseas, dor abdominal, mal-estar com glicemia 'normal' – urgência.", "**Metformina e contraste iodado:** suspender no dia se TFG < 30 ou IRA; reavaliar em 48 h [C]."]},
     {trio: {ideal: "Metformina + iSGLT2 ou agonista de GLP-1 com benefício comprovado quando há DCV, IC ou DRC; gliclazida MR se for usar sulfonilureia.", sus: "Metformina e glibenclamida na REMUME; dapagliflozina pelo CEAF se critério; insulina NPH/regular.", ponte: "Com DCV/IC/DRC fora do critério do CEAF, a dapagliflozina genérica é a compra de maior impacto. Sem possibilidade de compra: glibenclamida em dose baixa com educação sobre hipoglicemia, ou insulina."}},
     {ref: ["sbd_sus"]}
   ]}
  ]}};

CR_PATCH["cr-dm2-insulina"] = {sistema: "DM", nome: "Insulinização no DM2", guia: {
  resumo: "Insulina não é fracasso: atrasar a insulinização mantém o paciente meses em hiperglicemia. Comece com **NPH ao deitar (10 UI ou 0,1–0,2 UI/kg)**, ensine a **autotitulação pela glicemia de jejum** e mantenha a metformina.",
  calcs: ["glic"],
  secoes: [
   {t: "Quando iniciar", b: [
     {ul: ["HbA1c fora da meta com 2–3 orais em dose plena.", "Sintomas de hiperglicemia (poliúria, polidipsia, perda de peso), catabolismo, glicemia ≥ 300 com sintomas, intercorrência ou internação por DM2 (PCDT) [F].", "Gestação, DRC avançada ou hepatopatia em que os orais são limitados."]},
     {ref: ["pcdt_dm2", "sbd_sus"]}
   ]},
   {t: "Início e titulação", b: [
     {fluxo: [
       {t: "NPH ao deitar: 10 UI ou 0,1–0,2 UI/kg", s: "manter metformina (e iSGLT2)"},
       {t: "Glicemia capilar em jejum diária"},
       {t: "Média do jejum nos últimos 3 dias", ramos: [
         {r: "> 130 mg/dL", n: [{t: "+2 UI a cada 3 dias", k: "warn"}]},
         {r: "80–130", n: [{t: "Manter", k: "ok"}]},
         {r: "< 70 ou hipoglicemia", n: [{t: "−4 UI ou −10% (o maior)", k: "stop"}]}
       ]},
       {t: "Jejum na meta e HbA1c alta?", ramos: [
         {r: "Sim", n: [{t: "Insulina regular antes da maior refeição: 2–4 UI, ajustar pela glicemia 2 h após", k: "warn"}]},
         {r: "Não", n: [{t: "Seguir titulação; NPH em 2 doses (manhã e noite) se necessário"}]}
       ]}
     ], nota: "PCDT DM2 2024 e SBD (lidos no Drive): início 10 UI ou 0,2 UI/kg; +2 UI se jejum > 130; −4 UI ou 10% se < 70; dose total no DM2 geralmente 0,5–1,5 UI/kg/dia [F]."},
     {calc: "glic"},
     {perola: {t: "Jejum normal com HbA1c alta: não suba a NPH", x: "Glicemia de jejum ~100 com HbA1c 9% = picos pós-prandiais. Aumentar a basal só causa hipoglicemia de madrugada. Cubra a refeição (dieta, regular antes do almoço).", d: "evita hipoglicemia noturna e chega na meta.", l: "C"}},
     {perola: {t: "Basal acima de 0,5 UI/kg é sinal de alerta", x: "Doses altas de NPH sem atingir a meta sugerem hiperglicemia pós-prandial, má adesão ou técnica errada (lipodistrofia no local de aplicação) [C].", d: "corrige a causa em vez de escalar a dose.", l: "C"}},
     {ref: ["pcdt_dm2", "sbd_sus"]}
   ]},
   {t: "Intensificação", b: [
     {ul: ["Insulina regular 30 min antes da maior refeição: iniciar 2–4 UI; ajustar 1–2 UI ou 10–15% duas vezes por semana pela glicemia 2 h após [F].", "Ao iniciar esquema basal-bolus, **suspender a sulfonilureia** (SBD) [F]; manter metformina.", "Para ajustar prandiais: 6 glicemias por dia (antes e 2 h após as 3 refeições) por 3 dias antes da consulta (SBD) [F].", "Esquema basal-bolus pleno, hipoglicemias graves ou DM1/LADA → endocrinologia."]},
     {ref: ["sbd_sus"]}
   ]},
   {t: "Técnica, insumos e automonitorização", b: [
     {ul: ["Aplicação subcutânea em abdome, coxas, braços e nádegas; prega leve e agulha a 90°; **rodízio** com ≥ 1,5 cm entre aplicações (lipodistrofia descontrola a glicemia) [F].", "Não precisa de álcool no local; lavar as mãos. NPH: homogeneizar rolando o frasco entre as mãos [F].", "Reuso: a SBD aceita 1 seringa/agulha por dia por insulina, com higiene e uso individual [F].", "Automonitorização: não é rotina para quem usa só orais (PCDT); para insulina, frequência conforme o esquema [F].", "Conservação: geladeira (não congelar); frasco em uso até 4 semanas fora [C]."]},
     {ref: ["sbd_sus", "pcdt_dm2"]}
   ]},
   {t: "Hipoglicemia", b: [
     {ul: ["**Regra dos 15:** 15 g de carboidrato rápido, medir em 15 min, repetir se < 70; depois refeição/lanche.", "Hipoglicemia noturna (pesadelos, sudorese, cefaleia ao acordar): reduzir a NPH noturna.", "Paciente inconsciente: não dar nada pela boca; glucagon se disponível ou SAMU.", "Revisar dose, horário das refeições, álcool, função renal e atividade física."]},
     {ref: ["sbd_sus"]}
   ]}
  ]}};

CR_PATCH["cr-dislipidemia"] = {sistema: "Dislipidemias", nome: "Dislipidemias e risco cardiovascular (PREVENT)", nv: ["Critérios de acesso à atorvastatina no PCDT Dislipidemia 2019.", "Doses: conferir bula."], guia: {
  resumo: "A decisão-chave é **a categoria de risco**, que define a meta de LDL; o benefício da estatina é proporcional à queda absoluta do LDL (≈ 22% menos eventos maiores a cada 39 mg/dL) [C]. Em Betim, a sinvastatina não alcança metas de alto risco: saiba quando **comprar atorvastatina** ou **abrir o CEAF**.",
  calcs: ["prevent", "lipides"],
  secoes: [
   {t: "Estratificação de risco (SBC 2025)", b: [
     {fluxo: [
       {t: "DCV aterosclerótica clínica (IAM, angina, revascularização, AVC/AIT, DAP)?", ramos: [
         {r: "Sim", n: [{t: "Muito alto ou extremo", k: "stop", s: "extremo: ≥ 2 eventos maiores, ou 1 evento + ≥ 2 condições de alto risco"}]},
         {r: "Não", n: [{t: "LDL ≥ 190, Lp(a) > 180 mg/dL ou aterosclerose subclínica?", ramos: [
           {r: "Sim", n: [{t: "Alto (no mínimo)", k: "warn"}]},
           {r: "Não", n: [{t: "DM2?", ramos: [
             {r: "Sim", n: [{t: "Usar estratificadores do DM (idade, EAR, EMAR)"}]},
             {r: "Não", n: [{t: "PREVENT (DCVA em 10 anos), 30–79 anos"}, {t: "< 5% baixo · 5–< 20% intermediário · ≥ 20% alto", s: "agravante sobe uma categoria; ≥ 80 anos = alto"}]}
           ]}]}
         ]}]}
       ]}
     ], nota: "Tabela de estratificação e Figura 5.1 da Diretriz SBC 2025 (PDF lido no Drive) [F]."},
     {calc: "prevent"},
     {perola: {t: "A SBC 2025 adotou o PREVENT – e usa o risco aterosclerótico", x: "A diretriz recomenda o risco de evento cardiovascular aterosclerótico em 10 anos pelo PREVENT (30–79 anos, sem DCV) para indicar terapia hipolipemiante; ≥ 80 anos já são subgrupo de alto risco (SCORE2-OP ≥ 20%) [F]. A calculadora do app usa os coeficientes oficiais e foi conferida com o exemplo de referência [F].", d: "a categoria certa define a meta de LDL e a intensidade da estatina.", l: "F"}},
     {fig: {src: "img/disl-agravantes.webp", leg: "Tabela 4.3 – Fatores agravantes do risco cardiovascular", fonte: "Diretriz Brasileira de Dislipidemias 2025 (SBC)"}},
     {det: {t: "Gradiente de risco (Figura 4.2)", b: [{fig: {src: "img/disl-gradiente.webp", leg: "Figura 4.2 – Uso de fatores agravantes no contínuo do risco cardiovascular", fonte: "Diretriz Brasileira de Dislipidemias 2025 (SBC)"}}, {p: "Quanto maior o número e a intensidade dos agravantes, maior a reclassificação para cima. O estrato que mais se beneficia é o intermediário [F]."}]}},
     {perola: {t: "Lp(a) uma vez na vida", x: "A SBC 2025 recomenda dosar a lipoproteína(a) uma vez na vida em todos os adultos, quando disponível (recomendação forte); ≥ 50 mg/dL é agravante e > 180 mg/dL coloca em alto risco [F].", d: "reclassifica o risco e antecipa a intensificação dos demais fatores.", l: "F"}},
     {ref: ["dbdisl2025", "prevent_aha"]}
   ]},
   {t: "Metas de LDL e não-HDL", b: [
     {fig: {src: "img/disl-metas.webp", leg: "Figura 5.1 – Metas de tratamento por categoria de risco cardiovascular", fonte: "Diretriz Brasileira de Dislipidemias 2025 (SBC)"}},
     {tab: {h: ["Categoria", "LDL", "Não-HDL", "Redução mínima"], r: [["Baixo", "< 115", "< 145", "≥ 30%"], ["Intermediário", "< 100", "< 130", "≥ 30%"], ["Alto", "< 70", "< 100", "≥ 50%"], ["Muito alto", "< 50", "< 80", "≥ 50%"], ["Extremo", "< 40", "< 70", "≥ 50%"]]}, nota: "SBC 2025 [F]. Não-HDL = colesterol total − HDL; meta = LDL + 30."},
     {perola: {t: "Trate frações, não o colesterol total", x: "CT 260 numa mulher jovem pode ser HDL 90 com LDL 110. E HDL baixo não se trata com remédio: niacina e outros que sobem o HDL não reduziram eventos. Foque em LDL e não-HDL [C].", d: "evita tratar quem não precisa e não deixar de tratar quem precisa.", l: "C"}},
     {ref: ["dbdisl2025"]}
   ]},
   {t: "Escolha da estatina e escalonamento", b: [
     {calc: "lipides"},
     {fluxo: [
       {t: "Categoria → meta → redução necessária (%)"},
       {t: "Redução necessária", ramos: [
         {r: "≤ 30%", n: [{t: "Sinvastatina 20 mg (REMUME)", k: "ok"}]},
         {r: "30–42%", n: [{t: "Sinvastatina 40 mg (2 × 20 mg à noite)", s: "máx. 20 mg se anlodipino/amiodarona"}]},
         {r: "> 42%", n: [{t: "Atorvastatina 40–80 mg", k: "warn", s: "comprar (genérico) ou CEAF"}]}
       ]},
       {t: "Reavaliar lipidograma em 4–12 semanas"},
       {t: "Fora da meta com estatina máxima tolerada?", ramos: [
         {r: "Sim", n: [{t: "+ Ezetimiba 10 mg (compra)", k: "warn"}, {t: "Ainda fora (muito alto/extremo) → especialista: anti-PCSK9 ou ácido bempedoico", k: "stop"}]},
         {r: "Não", n: [{t: "Manter; lipidograma a cada 6–12 meses", k: "ok"}]}
       ]}
     ], nota: "Metas e escalonamento da Diretriz SBC 2025 [F]; divisão em cenários de acesso (compra × SUS) é organização própria para a APS [I]."},
     {tab: {h: ["Intensidade", "Esquemas", "Redução média do LDL"], r: [["Moderada", "Sinvastatina 20–40; atorvastatina 10–20; rosuvastatina 5–10", "30–50%"], ["Alta", "Atorvastatina 40–80; rosuvastatina 20–40", "≥ 50%"], ["Alta + ezetimiba", "—", "~65%"], ["+ anti-PCSK9", "—", "~85%"]]}, nota: "SBC 2025 [F]. Dobrar a dose da estatina reduz só ~6% a mais [C]."},
     {perola: {t: "Ezetimiba: pequena no LDL, real no desfecho", x: "No IMPROVE-IT, ezetimiba somada à sinvastatina 40 mg reduziu o LDL em mais 24% e os eventos vasculares maiores em 7,2% em 7 anos (SBC 2025) [F]. Não é incorporada ao SUS (dez/2025) [F].", d: "segunda opção para quem já usa estatina máxima tolerada e está fora da meta.", l: "F"}},
     {perola: {t: "Alto risco em Betim: comprar atorvastatina costuma valer mais do que esperar", x: "A REMUME tem só sinvastatina 20 mg; 40 mg reduz ~40% do LDL e não leva um paciente de LDL 140 a < 70. Atorvastatina genérica tem baixo custo; o CEAF é alternativa para quem não pode comprar (LME + relatório).", d: "chegar à meta mais cedo reduz eventos na prevenção secundária.", l: "I"}},
     {ref: ["dbdisl2025", "conitec_eze", "fda_sinva", "ctt", "remume"]}
   ]},
   {t: "Efeitos adversos e intolerância", b: [
     {ul: ["**Dor muscular:** principal causa de abandono e muitas vezes efeito nocebo. Suspender 2–4 semanas: se a dor persistir, não era a estatina; se melhorar, reintroduzir em dose menor, em dias alternados ou trocar de estatina [C].", "**CK:** pedir se dor com fraqueza; > 10× o limite com sintomas = suspender (rabdomiólise) [C].", "**Transaminases:** dosar antes; se > 3× o limite, suspender e investigar; elevações menores são comuns e transitórias [C].", "**Diabetes:** pequeno aumento de incidência em quem já tem pré-diabetes; o benefício cardiovascular supera esse risco [C]."]},
     {perola: {t: "Nocebo é real – e tratável com conversa", x: "No SAMSON (n-de-1), cerca de 90% dos sintomas relatados com estatina também apareceram com placebo; metade dos participantes voltou a usar a estatina após ver o próprio resultado [C].", d: "manter a estatina em quem a abandonaria reduz IAM e AVC.", l: "C"}},
     {ref: ["samson", "dbdisl2025"]}
   ]},
   {t: "Hipertrigliceridemia", b: [
     {ul: ["**TG ≥ 500 mg/dL:** risco de pancreatite. Fibrato (fenofibrato preferido se associar estatina), zero álcool, dieta pobre em gordura e açúcar, controlar o DM (causa mais comum na UBS). Meta TG < 500 (SBC 2025) [F].", "**TG 150–499:** o foco é o não-HDL; estatina de alta intensidade e ezetimiba conforme a meta. Fibratos não reduziram eventos em quem já usa estatina (PROMINENT) [F].", "**Genfibrozila + estatina:** proscrita (miopatia grave) [F].", "**Causas secundárias:** DM descompensado, álcool, obesidade, hipotireoidismo, DRC, gestação; estrogênio oral, tiazídico, betabloqueador, antipsicóticos atípicos, isotretinoína, inibidores de protease [C]."]},
     {ref: ["dbdisl2025"]}
   ]},
   {t: "Situações especiais", b: [
     {ul: ["**Idoso > 75 em prevenção primária:** decisão compartilhada (benefício incerto, interações). Em prevenção secundária, **não suspender por idade** [C].", "**LDL ≥ 190 ou xantomas/arco corneano < 45 anos:** pensar em hipercolesterolemia familiar; rastrear parentes de 1º grau [C].", "**Colesterol resistente:** pedir TSH (hipotireoidismo reduz receptores de LDL e aumenta miopatia) [C].", "**Gestação e amamentação:** suspender estatina [C].", "**DRC:** estatina para ≥ 50 anos com DRC (KDIGO) [C]."]},
     {trio: {ideal: "Estatina de alta intensidade (atorvastatina 40–80) para risco alto ou acima, com ezetimiba se fora da meta (SBC 2025).", sus: "REMUME Betim: só sinvastatina 20 mg (até 40 mg); atorvastatina e fibratos pelo CEAF; ezetimiba e rosuvastatina não incorporadas.", ponte: "Muito alto risco: atorvastatina genérica comprada costuma ser melhor que esperar o CEAF; enquanto isso, sinvastatina 40 mg (20 mg se usa anlodipino)."}},
     {ref: ["dbdisl2025", "pcdt_disl", "kdigo2024"]}
   ]}
  ]}};

CR_PATCH["cr-obesidade"] = {sistema: "Obesidade", nome: "Obesidade", nv: ["Critérios de IMC da Portaria GM/MS 424/2013 para bariátrica no SUS (não aberta).", "Retenção de receita de agonistas de GLP-1 (norma ANVISA de 2025): conferir o ato vigente.", "Doses: conferir bula."], guia: {
  resumo: "Obesidade é doença crônica e recidivante: **perder 5–10% já reduz DM2, PA, esteatose e dor articular**. O SUS não oferece fármacos para obesidade (CONITEC, 2025); a decisão compartilhada é sobre **custo, duração** (o peso volta ao parar) e **critérios de cirurgia**.",
  calcs: ["antropo", "fib4"],
  secoes: [
   {t: "Avaliação", b: [
     {calc: "antropo"},
     {tab: {h: ["Classificação (adulto)", "IMC (kg/m²)"], r: [["Sobrepeso", "25,0–29,9"], ["Obesidade grau I", "30,0–34,9"], ["Obesidade grau II", "35,0–39,9"], ["Obesidade grau III", "≥ 40"]]}, nota: "Classificação da OMS [C]. Cintura elevada: > 88 cm (mulheres) e > 102 cm (homens) = risco muito aumentado [C]."},
     {ul: ["**Comorbidades a rastrear:** HbA1c/glicemia, perfil lipídico, PA, TGO/TGP e FIB-4 (MASLD), apneia (ronco, sonolência), artrose, depressão e **compulsão alimentar**, SOP.", "**Medicamentos que engordam:** antipsicóticos, corticoide, alguns antidepressivos (mirtazapina, paroxetina, amitriptilina), valproato, insulina e sulfonilureia, betabloqueadores [C].", "**Abordagem sem estigma:** pedir permissão para falar do peso e focar em saúde, não em aparência [C]."]},
     {calc: "fib4"},
     {perola: {t: "Rastreie fibrose hepática em quem tem obesidade e DM2", x: "A esteatose associada à disfunção metabólica (MASLD) é comum; o que muda desfecho é achar fibrose avançada. FIB-4 < 1,3 (< 2,0 se ≥ 65 anos) praticamente exclui; > 2,67 indica encaminhamento [C].", d: "detecção precoce de fibrose e cirrose, com perda de peso e controle metabólico.", l: "C"}},
     {ref: ["dbdisl2025"]}
   ]},
   {t: "Tratamento comportamental (base de tudo)", b: [
     {ul: ["Plano alimentar pelo Guia Alimentar para a População Brasileira; déficit de 500–1.000 kcal/dia; reduzir ultraprocessados e bebidas açucaradas [C].", "Atividade física ≥ 150 min/semana + resistido; aumentar gasto no dia a dia.", "Sono e saúde mental; tratar compulsão (psicologia; considerar ISRS se depressão).", "eMulti (nutrição, psicologia, educação física) e grupos na UBS.", "Metas SMART: 'caminhar 20 min, 4×/semana' em vez de 'fazer exercício'."]},
     {perola: {t: "Pouco peso, muito desfecho", x: "No Diabetes Prevention Program, a intervenção de estilo de vida (~7% de perda de peso) reduziu a incidência de DM2 em 58% em 3 anos em pessoas com pré-diabetes [C].", d: "prevenção de DM2 com custo baixo.", l: "C"}},
     {ref: ["guia_alimentar", "oms_af2020", "dpp2002"]}
   ]},
   {t: "Farmacoterapia (fora do SUS)", b: [
     {tab: {h: ["Fármaco", "Perda média em ECR", "Observações"], r: [["Semaglutida 2,4 mg/semana", "~15% (STEP-1)", "SELECT: ↓ 20% eventos CV em DCV sem DM [C]"], ["Tirzepatida até 15 mg/semana", "~20% (SURMOUNT-1)", "Maior efeito; custo alto"], ["Liraglutida 3,0 mg/dia", "~8%", "Diária; genéricos em produção nacional"], ["Orlistate 120 mg 3x/dia", "~3%", "Esteatorreia; vitaminas lipossolúveis"]]}, nota: "Indicação: IMC ≥ 30, ou ≥ 27 com comorbidade, após intervenção comportamental [C]. CONITEC (ago/2025): liraglutida e semaglutida **não incorporadas** [F]."},
     {perola: {t: "O peso volta quando o remédio para", x: "Na extensão do STEP-1, quem suspendeu a semaglutida recuperou cerca de 2/3 do peso perdido em 1 ano [C]. Discuta antes de começar: é tratamento contínuo, com custo mensal.", d: "decisão realista evita gasto sem benefício sustentado.", l: "C"}},
     {perola: {t: "Canetas manipuladas ou sem registro", x: "Oriente a não usar produtos manipulados, importados irregularmente ou 'genéricos' sem registro da ANVISA (risco de contaminação e dose errada) [C].", d: "evita eventos adversos graves.", l: "C"}},
     {ref: ["obes_ecr", "conitec_obes"]}
   ]},
   {t: "Cirurgia bariátrica e metabólica", b: [
     {ul: ["**CFM 2.429/2025:** IMC ≥ 40; IMC ≥ 35 com ≥ 1 comorbidade; IMC 30–34,9 com DM2 e condições específicas [F].", "No SUS, pela linha de cuidado de obesidade (Portarias GM/MS 424 e 425/2013), com avaliação multiprofissional prévia [F].", "Tem o maior efeito sustentado sobre peso, DM2 e mortalidade em estudos de coorte [C]."]},
     {fluxo: [
       {t: "IMC ≥ 30, ou ≥ 27 com comorbidade"},
       {t: "Intervenção comportamental intensiva 3–6 meses"},
       {t: "Perdeu ≥ 5%?", ramos: [
         {r: "Sim", n: [{t: "Manter e acompanhar a cada 1–3 meses", k: "ok"}]},
         {r: "Não", n: [{t: "Discutir farmacoterapia (compra)", k: "warn"}, {t: "Critério CFM/SUS? → serviço de cirurgia", s: "IMC ≥ 40; ≥ 35 + comorbidade; 30–35 + DM2"}]}
       ]}
     ], nota: "Critérios cirúrgicos da Resolução CFM 2.429/2025 e decisões da CONITEC de 2025 [F]."},
     {trio: {ideal: "Intervenção comportamental intensiva + agonista de GLP-1/GIP para IMC ≥ 30 (ou ≥ 27 com comorbidade); cirurgia nos critérios.", sus: "Cuidado multiprofissional e cirurgia pela linha de cuidado; nenhum fármaco para obesidade incorporado.", ponte: "Discutir custo e duração. Sem possibilidade de compra: intensificar o cuidado comportamental e avaliar critérios de cirurgia."}},
     {ref: ["cfm_bariatrica", "ms_bariatrica", "conitec_obes"]}
   ]}
  ]}};

CR_PATCH["cr-drc"] = {sistema: "DRC", nome: "Doença renal crônica (KDIGO 2024)", guia: {
  resumo: "Na DRC, **quatro decisões** freiam a progressão e reduzem eventos: classificar por **TFG e albuminúria** (RAC), **IECA/BRA** se há albuminúria, **iSGLT2** para a maioria (DAPA-CKD, EMPA-KIDNEY) e **estatina**. O **KFRE** diz quem encaminhar à nefrologia.",
  calcs: ["ckd", "pa"],
  secoes: [
   {t: "Diagnóstico e classificação (CGA)", b: [
     {p: "DRC = alteração da função ou da estrutura renal por **mais de 3 meses**. Classificar pela **Causa**, pela TFG (**G**, CKD-EPI 2021) e pela **A**lbuminúria (RAC em amostra, de preferência 1ª urina da manhã) [F]."},
     {calc: "ckd"},
     {tab: {h: ["G", "TFG (mL/min/1,73 m²)", "A", "RAC (mg/g)"], r: [["G1", "≥ 90", "A1", "< 30"], ["G2", "60–89", "A2", "30–300"], ["G3a", "45–59", "A3", "> 300"], ["G3b", "30–44", "", ""], ["G4", "15–29", "", ""], ["G5", "< 15", "", ""]]}, nota: "KDIGO 2024 [F]. Ex.: 'DRC por DM2 – G3b A2'."},
     {perola: {t: "Peça RAC, não fita de urina", x: "A fita detecta proteinúria só em níveis altos; a albuminúria moderada (A2), que já indica risco e tratamento, passa despercebida. Em DM e HAS, creatinina + RAC anuais [C]. Cistatina C ajuda em extremos de massa muscular, amputados e dieta hiperproteica (KDIGO) [C].", d: "detecta cedo quem se beneficia de IECA/BRA e iSGLT2.", l: "C"}},
     {ul: ["**IRA × DRC:** exames anteriores são o melhor critério; rins < 10 cm, córtex fino e hiperecogenicidade sugerem cronicidade [C].", "**Pensar em outra causa no DM:** hematúria dismórfica, ausência de retinopatia, DM < 5–10 anos, albuminúria que sobe rápido, queda > 5–10 mL/min/ano [C]."]},
     {ref: ["kdigo2024", "tdc_drc"]}
   ]},
   {t: "Freando a progressão", b: [
     {fluxo: [
       {t: "DRC confirmada (> 3 meses)"},
       {t: "Pilar 1: IECA ou BRA em dose máxima tolerada", s: "se albuminúria (A2–A3), com ou sem DM", k: "ok"},
       {t: "Pilar 2: iSGLT2 (TFG ≥ 20)", s: "DM2, IC ou RAC ≥ 200 (1A); TFG 20–45 mesmo com RAC < 200 (2B)", k: "ok"},
       {t: "Pilar 3: estatina (≥ 50 anos ou risco alto)", k: "ok"},
       {t: "DM2 com albuminúria persistente?", ramos: [
         {r: "Sim", n: [{t: "Finerenona (não incorporada) e agonista de GLP-1 (FLOW)", k: "warn"}]},
         {r: "Não", n: [{t: "PA < 120 sistólica se tolerada; sódio < 2 g/dia"}]}
       ]}
     ], nota: "KDIGO 2024 [F]; finerenona: não incorporada (CONITEC, dez/2025) [F]."},
     {tab: {h: ["Dapagliflozina no SUS (PCDT DRC 2024)", "Critério"], r: [["Com DM", "TFG 25–75, em uso de IECA/BRA"], ["Sem DM", "TFG 25–75 com RAC > 300 mg/g, em uso de IECA/BRA"], ["Manutenção", "Até diálise ou transplante"]]}, nota: "CEAF com LME e relatório [F]."},
     {perola: {t: "Creatinina sobe um pouco: é o remédio funcionando", x: "Após iniciar IECA, BRA ou iSGLT2, aumento de creatinina de até 30% é esperado (efeito hemodinâmico) e não justifica suspender. Investigar se > 30% ou K > 5,5 (KDIGO) [C].", d: "mantém a nefroproteção que reduz diálise e morte.", l: "C"}},
     {perola: {t: "iSGLT2 também sem diabetes", x: "No DAPA-CKD e no EMPA-KIDNEY, os iSGLT2 reduziram progressão renal e morte em DRC com e sem DM [C].", d: "menos falência renal; incluir quem tem albuminúria ou TFG 20–45.", l: "C"}},
     {ul: ["**Dieta:** sódio < 2 g/dia; alimentação baseada em vegetais; proteína < 0,8 g/kg/dia em G3–G5, com cautela em idosos, frágeis e sarcopênicos (KDIGO) [C].", "**Evitar:** AINE, contraste sem preparo, IBP crônico sem indicação, fitoterápicos de procedência duvidosa [C]."]},
     {ref: ["kdigo2024", "pcdt_drc", "conitec_fine", "flow", "cardiorrenal", "tdc_drc"]}
   ]},
   {t: "Complicações (a partir de G3b)", b: [
     {tab: {h: ["Complicação", "Avaliar", "Conduta na APS"], r: [["Anemia", "Hb, ferritina, saturação de transferrina", "Repor ferro primeiro; eritropoetina pelo CEAF (PCDT anemia na DRC), alvo Hb até 11,5 [C]"], ["Distúrbio mineral e ósseo", "Ca, P, PTH, 25(OH)D, fosfatase alcalina", "Restringir fósforo; calcitriol/quelantes pelo especialista/CEAF [C]"], ["Acidose", "Bicarbonato sérico", "Bicarbonato oral se < 18 (não está na REMUME oral) [C]"], ["Hipercalemia", "K", "Revisar dieta, AINE, diurético; não suspender IECA/BRA cedo; quelantes de K (ciclossilicato incorporado para G4–G5 em 2025 [NV])"], ["Volume", "Edema, PA", "Furosemida (REMUME 40 mg)"]]}, nota: "KDIGO 2024 e revisão Tá de Clinicagem (Drive) [C]."},
     {ref: ["kdigo2024", "tdc_drc", "remume"]}
   ]},
   {t: "Medicamentos e doses", b: [
     {ul: ["**Metformina:** reduzir com TFG 30–44 (não iniciar); suspender < 30 [C].", "**iSGLT2:** iniciar com TFG ≥ 20–25; manter abaixo disso se já em uso, até diálise [F].", "**Ajustar à TFG:** antibióticos, gabapentina/pregabalina, alopurinol, enoxaparina, DOAC, sulfonilureias (evitar glibenclamida) [C].", "**Vacinas:** hepatite B (anti-HBs), influenza, pneumocócica (CRIE)."]},
     {ref: ["kdigo2024"]}
   ]},
   {t: "Encaminhamento e seguimento", b: [
     {tab: {h: ["Critério", "Fonte"], r: [["KFRE > 3–5% em 5 anos", "KDIGO 2024 [F]"], ["TFG < 30", "Protocolo MS de encaminhamento [F]"], ["G3b, G4–G5 ou A3", "PCDT DRC 2024 [F]"], ["Queda > 25% com mudança de estágio, ou > 5 mL/min/ano", "KDIGO [C]"], ["Hematúria com albuminúria, K > 5,5 persistente, HAS refratária", "KDIGO [C]"], ["KFRE > 40% em 2 anos ou TFG 15–20: preparo para terapia renal substitutiva", "KDIGO 2024 [C]"]]}},
     {tab: {h: ["Monitorar TFG e RAC (vezes/ano)", "A1", "A2", "A3"], r: [["G1–G2", "1", "1", "2"], ["G3a", "1", "2", "3"], ["G3b", "2", "3", "3"], ["G4", "3", "3", "4+"], ["G5", "4+", "4+", "4+"]]}, nota: "Mapa de calor KDIGO 2024 [C]."},
     {trio: {ideal: "IECA/BRA + iSGLT2 para a maioria com albuminúria ou TFG reduzida; finerenona no DM2 com albuminúria persistente (KDIGO 2024).", sus: "IECA/BRA na REMUME; dapagliflozina pelo CEAF com critérios do PCDT DRC; finerenona não incorporada.", ponte: "Priorizar o acesso à dapagliflozina (LME). Fora do critério do PCDT mas com indicação KDIGO (ex.: TFG 20–45 com RAC < 200), discutir a compra do genérico."}},
     {ref: ["kdigo2024", "kfre", "pcdt_drc", "ms_drc_enc"]}
   ]}
  ]}};
