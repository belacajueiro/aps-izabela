// ───────────── CRÔNICOS – guias de decisão (revisão 10/10/2026). Divisão temática inspirada no Notion (não usado como fonte): HAS, DM, Asma/DPOC, Dislipidemias, Obesidade, DRC, AVC, deficiências e escalas.
Object.assign(FONTES, {
  prevent_aha: {s: "PREVENT (AHA 2024)", t: "Khan SS et al. Development and validation of the AHA PREVENT equations. Circulation 2024; coeficientes do pacote preventr, conferidos com o exemplo de referência (mulher 50 anos: DCV 14,6%, DCVA 9,2%, IC 8,1%) (escore validado).", f: "F", url: "https://professional.heart.org/en/guidelines-and-statements/prevent-calculator"},
  kfre: {s: "KFRE (Tangri 2016)", t: "Tangri N et al. Kidney Failure Risk Equation, 4 variáveis. JAMA 2016; fórmula e sobrevida basal (0,9750 em 2 anos; 0,9240 em 5 anos) conferidas no painel LOINC 85626-0 (escore validado).", f: "F", url: "https://loinc.org/85626-0"},
  endo_pa2025: {s: "Endocrine Society 2025 (hiperaldosteronismo)", t: "Adler GK et al. Primary Aldosteronism: An Endocrine Society Clinical Practice Guideline. J Clin Endocrinol Metab, julho de 2025 (diretriz): sugere rastrear todos os hipertensos com aldosterona e renina.", f: "F", url: "https://www.endocrine.org/clinical-practice-guidelines/primary-aldosteronism-2"},
  esc_fa2024: {s: "ESC 2024 (FA)", t: "Van Gelder IC et al. 2024 ESC Guidelines for the management of atrial fibrillation (diretriz): CHA2DS2-VA ≥ 2 anticoagulação recomendada (I), 1 considerar (IIa). Conferido em artigo de revisão (PMC11574616).", f: "F", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11574616"},
  pcdt_dpoc2025: {s: "PCDT DPOC 2025", t: "Ministério da Saúde/CONITEC. PCDT Doença Pulmonar Obstrutiva Crônica – Relatório de Recomendação nº 1.046 (nov/2025) (norma). Conteúdo conferido na versão de consulta pública nº 35 (mai/2025), arquivada no Drive; conferir a versão final publicada.", f: "F", url: "https://www.gov.br/conitec/pt-br/midias/relatorios/2025/relatorio-de-recomendacao-no-1-046-pcdt-da-doenca-pulmonar-obstrutiva-cronica"},
  pcdt_osteo2025: {s: "PCDT Osteoporose 2025", t: "Ministério da Saúde/CONITEC. PCDT Osteoporose – Relatório nº 1.012, Registro de Deliberação nº 1.009/2025 (jun/2025) (norma): estratificação alto/muito alto risco, bisfosfonatos e romosozumabe.", f: "F", url: "https://www.gov.br/conitec/pt-br/midias/relatorios/2025/pcdt-osteoporose.pdf"},
  sbd_metas: {s: "SBD – Metas", t: "Sociedade Brasileira de Diabetes. Metas no tratamento do diabetes (Diretriz SBD; DOI 10.29327/557753.2022-3), lido no Drive (diretriz de sociedade).", f: "F", url: "https://doi.org/10.29327/557753.2022-3"},
  sbd_sus: {s: "SBD – DM2 no SUS", t: "Sociedade Brasileira de Diabetes. Tratamento do DM2 no SUS (revisão 25/06/2024; DOI 10.29327/5412848.2024-3), lido no Drive (diretriz de sociedade, resume o PCDT DM2 2024).", f: "F", url: "https://doi.org/10.29327/5412848.2024-3"},
  conitec_fine: {s: "CONITEC finerenona", t: "CONITEC. Finerenona para DRC estágios 3–4 com albuminúria associada ao DM2: recomendação final de não incorporar (146ª reunião, 04/12/2025; Registro de Deliberação nº 1.058/2025) (decisão).", f: "F", url: "https://www.gov.br/conitec/pt-br/midias/relatorios/2025/relatorio-de-recomendacao-no-finerenona/@@display-file/file"},
  tdc_drc: {s: "Tá de Clinicagem – DRC", t: "Tá de Clinicagem. Doença Renal Crônica: KDIGO 2024 (jun/2025), arquivado no Drive (revisão secundária).", f: "C", url: ""},
  tdc_osteo: {s: "Tá de Clinicagem – Osteoporose", t: "Tá de Clinicagem. Osteoporose: diagnóstico e manejo (jan/2026), arquivado no Drive (revisão secundária).", f: "C", url: ""},
  ettehad: {s: "Ettehad 2016", t: "Ettehad D et al. Blood pressure lowering for prevention of cardiovascular disease and death. Lancet 2016 (RS/MA de 123 ECR).", f: "C", url: ""},
  ssass: {s: "SSaSS 2021", t: "Neal B et al. Effect of Salt Substitution on Cardiovascular Events and Death (SSaSS). N Engl J Med 2021 (ECR por conglomerados).", f: "C", url: ""},
  time_trial: {s: "TIME 2022", t: "Mackenzie IS et al. Cardiovascular outcomes in adults with hypertension with evening versus morning dosing (TIME). Lancet 2022 (ECR pragmático).", f: "C", url: ""},
  dcp: {s: "DCP 2022", t: "Ishani A et al. Chlorthalidone vs. Hydrochlorothiazide for Hypertension–Cardiovascular Events (Diuretic Comparison Project). N Engl J Med 2022 (ECR pragmático).", f: "C", url: ""},
  step_bp: {s: "STEP 2021", t: "Zhang W et al. Trial of Intensive Blood-Pressure Control in Older Patients with Hypertension (STEP). N Engl J Med 2021 (ECR).", f: "C", url: ""},
  ontarget: {s: "ONTARGET 2008", t: "ONTARGET Investigators. Telmisartan, ramipril, or both in patients at high risk for vascular events. N Engl J Med 2008 (ECR).", f: "C", url: ""},
  sygma: {s: "SYGMA/Novel START", t: "O'Byrne 2018 (SYGMA 1), Bateman 2018 (SYGMA 2), Beasley 2019 (Novel START): budesonida-formoterol conforme necessidade na asma leve (ECR).", f: "C", url: ""},
  samson: {s: "SAMSON 2020", t: "Wood FA et al. N-of-1 Trial of a Statin, Placebo, or No Treatment to Assess Side Effects (SAMSON). N Engl J Med 2020 (ECR n-de-1).", f: "C", url: ""},
  avc_flx: {s: "FOCUS/AFFINITY/EFFECTS", t: "FOCUS (Lancet 2019), AFFINITY e EFFECTS (Lancet Neurol 2020): fluoxetina não melhorou a recuperação funcional após AVC e aumentou fraturas (ECR).", f: "C", url: ""},
  dapt_avc: {s: "CHANCE/POINT", t: "CHANCE (N Engl J Med 2013) e POINT (N Engl J Med 2018): dupla antiagregação por 21–90 dias após AVC isquêmico menor ou AIT de alto risco (ECR).", f: "C", url: ""},
  horizon: {s: "HORIZON-RFT 2007", t: "Lyles KW et al. Zoledronic acid and clinical fractures and mortality after hip fracture. N Engl J Med 2007 (ECR).", f: "C", url: ""},
  nott: {s: "NOTT/MRC", t: "NOTT (Ann Intern Med 1980) e MRC (Lancet 1981): oxigenoterapia domiciliar prolongada reduz mortalidade na DPOC com hipoxemia grave (ECR).", f: "C", url: ""},
  flow: {s: "FLOW 2024", t: "Perkovic V et al. Effects of Semaglutide on Chronic Kidney Disease in Patients with Type 2 Diabetes (FLOW). N Engl J Med 2024 (ECR).", f: "C", url: ""},
  gds_br: {s: "GDS-15 (Almeida 1999)", t: "Almeida OP, Almeida SA. Confiabilidade da versão brasileira da Escala de Depressão em Geriatria (GDS) versão reduzida. Arq Neuropsiquiatr 1999 (validação).", f: "C", url: ""}
});
const CR_PATCH = {};
const BETIM_HAS = "REMUME Betim: losartana 50; enalapril 10 e 20; captopril 25; anlodipino 5; hidroclorotiazida 25; espironolactona 25 e 100; atenolol 50; carvedilol 3,125 e 12,5; propranolol 40; hidralazina 25; metildopa 250 e 500; furosemida 40.";

CR_PATCH["cr-has"] = {sistema: "HAS", nome: "HAS primária – diagnóstico, metas e escalonamento", guia: {
  resumo: "Três decisões mudam desfecho na HAS: **confirmar o diagnóstico fora do consultório**, **começar com 2 classes** na maioria e **manter a PA < 130/80 com adesão**. Cada 10 mmHg a menos de PAS reduz cerca de 20% dos eventos cardiovasculares maiores, 27% dos AVC e 13% da mortalidade [C].",
  calcs: ["pa", "prevent", "ckd"],
  secoes: [
   {t: "Medida e diagnóstico", b: [
     {p: "Técnica: 5 min de repouso, sentado, costas apoiadas, braço na altura do coração, bexiga vazia, sem fumar ou tomar café 30 min antes; manguito com bolsa cobrindo 80% do braço. Duas a três medidas com 1 min de intervalo; usar a média. Na 1ª consulta, medir nos dois braços e seguir pelo de maior valor."},
     {tab: {h: ["Medida", "Limiar de HAS"], r: [["Consultório (média)", "≥ 140 e/ou 90 mmHg"], ["MRPA (média de 7 dias, descartar o 1º)", "≥ 130 e/ou 80 mmHg [F]"], ["MAPA vigília", "≥ 130 e/ou 80 mmHg [F]"], ["MAPA 24 h", "≥ 125 e/ou 75 mmHg [F]"], ["MAPA sono", "≥ 110 e/ou 65 mmHg [C]"]]}, nota: "Classificação do consultório (SBC 2025): normal < 120/80; pré-hipertensão 120–139/80–89; estágios 1 (140–159/90–99), 2 (160–179/100–109) e 3 (≥ 180/110) [C]."},
     {calc: "pa"},
     {perola: {t: "Confirme fora do consultório antes de rotular e antes de escalonar", x: "Hipertensão do avental branco leva a tratamento desnecessário; a mascarada (consultório normal, MRPA alta) tem risco cardiovascular próximo ao da hipertensão sustentada e passa despercebida. Use MRPA com aparelho validado (protocolo de 7 dias) quando a MAPA não estiver disponível.", d: "evita sobretratamento (hipotensão, quedas no idoso) e encontra quem precisa tratar; também é a 1ª etapa diante de 'HAS resistente'.", l: "C"}},
     {det: {t: "Crianças e adolescentes (Tabela 9.1 da Diretriz 2025)", b: [{fig: {src: "img/has-pediatria.webp", leg: "Tabela 9.1 – Definição atualizada da PA de acordo com a faixa etária", fonte: "Diretriz Brasileira de Hipertensão Arterial 2025 (SBC)"}}]}},
     {ref: ["dbha2025", "pcdt_has2025"]}
   ]},
   {t: "Avaliação inicial e risco cardiovascular", b: [
     {ul: ["**Exames para todos:** creatinina e TFG (CKD-EPI), potássio, glicemia de jejum e/ou HbA1c, perfil lipídico, ácido úrico, EAS, relação albumina/creatinina urinária (RAC) e ECG [F].", "**Ecocardiograma:** se ECG com HVE ou suspeita de IC. **USG de carótidas:** sopro ou doença aterosclerótica em outro território [C].", "**Lesão de órgão-alvo (LOA):** HVE no ECG (Sokolow-Lyon ≥ 35 mm; Cornell > 28 mm em homens, > 20 mm em mulheres), RAC 30–300 mg/g, TFG < 60, ITB < 0,9, retinopatia avançada [C]."]},
     {p: "Estratificação: DCV aterosclerótica, DM, DRC (TFG < 60 ou albuminúria) ou LOA = **alto risco** sem precisar de escore. Nos demais, PREVENT (30–79 anos); a SBC 2025 usa o risco aterosclerótico em 10 anos para a categoria."},
     {det: {t: "Calcular o PREVENT", b: [{calc: "prevent"}]}},
     {h: "Quando pensar em HAS secundária"},
     {ul: ["Início < 30 anos sem história familiar, ou piora súbita de HAS antes controlada", "HAS resistente ou estágio 3", "**Hipocalemia** espontânea ou desproporcional ao diurético (hiperaldosteronismo)", "Ronco, pausas, sonolência diurna (apneia obstrutiva)", "Creatinina sobe > 30% com IECA/BRA, sopro abdominal, edema agudo de pulmão súbito (renovascular)", "Crises de cefaleia, sudorese e palpitações (feocromocitoma); estigmas de Cushing; hipertireoidismo"]},
     {perola: {t: "Hiperaldosteronismo é mais comum do que se procura", x: "A Endocrine Society (jul/2025) passou a sugerir rastrear **todos** os hipertensos com aldosterona e renina pela manhã, sem restringir sal; positivo se renina suprimida com aldosterona ≥ 10 ng/dL e relação aldosterona/renina > 20 (ng/dL por ng/mL/h). IECA, BRA e diuréticos podem dar falso-negativo; betabloqueador e clonidina, falso-positivo [F]. Na prática da APS, priorize: HAS resistente, hipocalemia, apneia, incidentaloma adrenal, FA sem causa e HAS de início precoce.", d: "o tratamento específico (espironolactona ou adrenalectomia) reduz complicações cardiovasculares e renais que persistem mesmo com a PA controlada por outros fármacos [C].", l: "F"}},
     {ref: ["dbha2025", "endo_pa2025", "prevent_aha"]}
   ]},
   {t: "Início do tratamento e metas", b: [
     {fig: {src: "img/has-inicio-metas.webp", leg: "Figura 5.1 – Início de tratamento e metas de pressão arterial", fonte: "Diretriz Brasileira de Hipertensão Arterial 2025 (SBC)"}},
     {fluxo: [
       {t: "PA de consultório confirmada (MRPA/MAPA quando possível)"},
       {t: "Qual a faixa?", ramos: [
         {r: "≥ 140/90", n: [{t: "Medidas não medicamentosas + fármaco", k: "warn"}, {t: "Combinação de 2 classes na maioria", s: "monoterapia: estágio 1 de baixo risco, frágeis, ≥ 80 anos"}]},
         {r: "130–139/80–89 + alto risco", n: [{t: "Medidas não medicamentosas por 3 meses"}, {t: "Persistiu ≥ 130/80? → fármaco", k: "warn"}]},
         {r: "120–139/80–89 sem alto risco", n: [{t: "Medidas não medicamentosas", k: "ok"}, {t: "Reavaliar PA e risco periodicamente"}]}
       ]},
       {t: "Meta: < 130/80 mmHg se tolerada", k: "ok", s: "redução do risco cardiovascular e renal"}
     ], nota: "Baseado na Figura 5.1 da Diretriz SBC 2025 [F]."},
     {tab: {h: ["Ponto", "SBC 2025 (sociedade)", "PCDT HAS 2025 (norma SUS)"], r: [["Meta geral", "< 130/80 se tolerada [F]", "< 140/90 inicialmente; < 130/80 se tolerado em < 65 anos [F]"], ["65–79 anos", "< 130/80 se tolerada", "PAS 130–140 e PAD < 80, sem baixar de 120/70 [F]"], ["Início", "Combinação de 2 classes para a maioria, de preferência em comprimido único [F]", "Conferir no PCDT (seção de tratamento não conferida) [NV]"]]}, nota: "A diferença vem de metodologia e do foco no idoso frágil. Em pessoa robusta que tolera, perseguir < 130/80; no idoso frágil, priorizar ausência de ortostatismo e quedas [I]."},
     {perola: {t: "Meta intensiva vale também para o idoso robusto", x: "No SPRINT (PAS < 120 vs < 140, risco alto sem DM), houve menos eventos cardiovasculares e morte (NNT ≈ 60 em 3,3 anos), inclusive em ≥ 75 anos. No STEP (60–80 anos, China), PAS 110–130 reduziu em 26% o desfecho cardiovascular composto em relação a 130–150 [C].", d: "maior redução de AVC, IC e morte, com mais hipotensão e alteração de creatinina – medir PA ortostática no idoso.", l: "C"}},
     {ref: ["dbha2025", "pcdt_has2025", "sprint", "step_bp", "ettehad"]}
   ]},
   {t: "Escalonamento do tratamento", b: [
     {fluxo: [
       {t: "Passo 1: IECA ou BRA + BCC (anlodipino) ou tiazídico", s: "REMUME: losartana 50 ou enalapril 10 + anlodipino 5 ou hidroclorotiazida 25"},
       {t: "Fora da meta em 4 semanas? Checar adesão, técnica e sal antes de subir", k: "q"},
       {t: "Passo 2: doses plenas", s: "losartana 50 mg 12/12 h; enalapril 20 mg 12/12 h; anlodipino 10 mg; HCTZ 25 mg"},
       {t: "Passo 3: tripla – IECA/BRA + BCC + tiazídico", k: "warn"},
       {t: "Fora da meta com 3 classes em dose plena → HAS resistente", k: "stop", s: "confirmar com MRPA/MAPA; 4º fármaco: espironolactona"}
     ], nota: "Betabloqueador entra antes quando há indicação própria: IC com FE reduzida, pós-IAM, angina, controle de FC na FA, enxaqueca, tremor [C]."},
     {tab: {h: ["Classe", "Opção REMUME Betim", "Dose usual", "Atenção"], r: [
       ["BRA", "Losartana 50 mg", "50–100 mg/dia (1–2 tomadas) [F]", "K e creatinina em 1–4 semanas; contraindicado na gestação"],
       ["IECA", "Enalapril 10/20 mg; captopril 25 mg", "Enalapril 5–40 mg/dia (1–2 tomadas); captopril 25–150 mg/dia (2–3 tomadas) [F]", "Tosse seca (trocar por BRA); angioedema; nunca com BRA"],
       ["BCC di-hidropiridínico", "Anlodipino 5 mg", "2,5–10 mg 1x/dia [F]", "Edema maleolar dose-dependente (menor quando associado a IECA/BRA)"],
       ["Tiazídico", "Hidroclorotiazida 25 mg", "Usual 12,5–25 mg 1x/dia [NV]; teto da Diretriz: 50 mg/dia [F]", "Hipocalemia, hiponatremia, gota; menos eficaz com TFG < 30"],
       ["Antagonista mineralocorticoide", "Espironolactona 25 mg", "25–100 mg/dia (1–2 tomadas) [F]", "K e creatinina em 1–2 semanas; ginecomastia"],
       ["Betabloqueador", "Carvedilol 3,125/12,5; atenolol 50; propranolol 40", "Carvedilol 6,25–50 mg (1–2 tomadas); atenolol 50–100 mg (1–2); propranolol 80–320 mg (2–3) [F]", "Não é 1ª linha sem indicação específica; cuidado em asma e bradicardia"]
     ]}, nota: "Doses diárias habituais dos Quadros 7.2–7.7 da Diretriz SBC 2025, conferidas no texto da Diretriz [F]; conferir também a bula. Lista completa em 'Anti-hipertensivos: classes, doses e aleitamento'."},
     {perola: {t: "Não associe IECA com BRA", x: "No ONTARGET, a combinação não reduziu eventos e aumentou hipotensão, hipercalemia e insuficiência renal aguda [C].", d: "evita dano renal e hipercalemia sem ganho cardiovascular.", l: "C"}},
     {perola: {t: "O horário da tomada não muda o desfecho", x: "No TIME (21 mil pacientes), tomar à noite ou de manhã teve a mesma taxa de IAM, AVC e morte vascular [C].", d: "escolha o horário em que o paciente não esquece; a adesão importa mais que o relógio.", l: "C"}},
     {perola: {t: "Hidroclorotiazida é tão boa quanto clortalidona", x: "No Diuretic Comparison Project, a troca para clortalidona não reduziu eventos cardiovasculares e causou mais hipocalemia [C]. A clortalidona não está na REMUME.", d: "não há perda clínica em manter a HCTZ do SUS.", l: "C"}},
     {ref: ["dbha2025", "pcdt_has2025", "ontarget", "time_trial", "dcp", "remume"]}
   ]},
   {t: "Estilo de vida que muda desfecho", b: [
     {ul: ["**Sal < 5 g/dia** (≈ 2 g de sódio): pão, embutidos, temperos prontos e comida de rua concentram a maior parte.", "**Padrão DASH** (frutas, verduras, laticínios magros, leguminosas): reduz a PA em cerca de 11 mmHg em hipertensos [C].", "**Atividade física** ≥ 150 min/semana de aeróbico moderado + resistido 2x/semana.", "**Perda de peso:** cerca de 1 mmHg a menos por kg perdido [C].", "**Álcool:** reduzir; **tabaco:** cessar (não baixa a PA, mas é o maior fator de risco modificável associado)."]},
     {perola: {t: "Substituto de sal com potássio", x: "No SSaSS (idosos chineses com AVC prévio ou ≥ 60 anos com HAS), trocar o sal comum por sal com 25% de cloreto de potássio reduziu AVC em 14%, eventos cardiovasculares em 13% e morte em 12% em ~5 anos [C].", d: "intervenção barata de alto impacto populacional – **não** usar com DRC avançada, hipercalemia, espironolactona ou IECA/BRA em dose alta sem monitorar K.", l: "C"}},
     {ref: ["dbha2025", "ssass"]}
   ]},
   {t: "Situações especiais", b: [
     {ul: ["**DM ou DRC com albuminúria:** IECA ou BRA na combinação; na DRC, KDIGO sugere PAS < 120 se tolerada [F].", "**Mulher em idade fértil:** IECA/BRA são teratogênicos – garantir contracepção ou preferir BCC; na gestação, ver o módulo de pré-natal.", "**Amamentação:** enalapril, captopril, nifedipino, metildopa, hidralazina, espironolactona e propranolol são compatíveis (Quadro 10.3) [F].", "**Idoso frágil:** medir PA em pé (1 e 3 min); iniciar com monoterapia em dose baixa; evitar quedas.", "**Adolescentes ≥ 13 anos:** mesmos limiares do adulto; < 13 anos: percentis (Tabela 9.1)."]},
     {ref: ["dbha2025", "kdigo2024"]}
   ]},
   {t: "Seguimento e encaminhamento", b: [
     {ul: ["Retorno em 4 semanas após iniciar ou ajustar; a cada 3–6 meses quando controlada.", "Creatinina e K 1–4 semanas após IECA, BRA ou espironolactona; exames de rotina anuais.", "**Encaminhar:** HAS resistente após otimização, suspeita de causa secundária, LOA grave, HAS na gestação (pré-natal de alto risco conforme critérios).", "**Urgência:** PA ≥ 180/110 com sintomas de LOA aguda (ver 'Crise hipertensiva')."]},
     {trio: {ideal: "Combinação de 2 classes em comprimido único, meta < 130/80 mmHg (SBC 2025).", sus: "As mesmas classes estão na REMUME, em comprimidos separados; doses plenas possíveis.", ponte: "A eficácia é igual; o comprimido único ajuda quem esquece doses. Se a adesão com 2 comprimidos for boa, manter o SUS."}},
     {ref: ["dbha2025", "pcdt_has2025", "remume"]}
   ]}
  ]}};

CR_PATCH["cr-has-resistente"] = {sistema: "HAS", nome: "HAS resistente / refratária", guia: {
  resumo: "Antes de somar o 4º remédio, descarte a **pseudorresistência** (técnica, adesão, avental branco, interferentes), que responde por boa parte dos casos. Confirmada a resistência, **espironolactona** é o 4º fármaco com melhor evidência e o rastreio de **hiperaldosteronismo** e **apneia** muda o tratamento.",
  calcs: ["pa", "ckd"],
  secoes: [
   {t: "Definições", b: [
     {tab: {h: ["Termo", "Definição"], r: [["Não controlada", "PA acima da meta; pode ser má adesão ou doses insuficientes"], ["Resistente", "PA acima da meta com ≥ 3 classes em dose otimizada, incluindo diurético, ou controlada só com ≥ 4 classes"], ["Refratária", "Não controlada mesmo com ≥ 5 classes, incluindo diurético e espironolactona"], ["Pseudorresistente", "Parece resistente por erro de medida, avental branco, má adesão ou interferentes"]]}, nota: "Definições da Diretriz SBC 2025 (cap. 12) [C]: o texto do capítulo não foi conferido nesta revisão; a recomendação de MAPA/MRPA e a meta < 130/80 na HAR foram conferidas no resumo de recomendações [F]."},
     {ref: ["dbha2025"]}
   ]},
   {t: "Checklist antes de escalonar", b: [
     {ol: ["**Medida:** técnica e manguito corretos; repetir.", "**MRPA ou MAPA:** excluir avental branco (até 1/3 dos 'resistentes' estão controlados fora do consultório) [C].", "**Adesão:** perguntar sem julgar, contar comprimidos, conferir retirada na farmácia.", "**Doses:** todas em dose plena? Diurético adequado à TFG (furosemida se TFG < 30).", "**Interferentes:** AINE, corticoide, descongestionante, anticoncepcional combinado, antidepressivo (venlafaxina), ciclosporina, álcool, cocaína/anfetamina, alcaçuz.", "**Sal:** sódio da dieta (comida pronta e embutidos)."]},
     {perola: {t: "A adesão é o 1º suspeito", x: "Em estudos com dosagem de fármacos na urina, uma parte grande dos pacientes encaminhados como 'resistentes' não tomava todos os remédios [C]. A conversa sem julgamento e o comprimido único resolvem mais que o 5º fármaco.", d: "evita escalonar até a hipotensão quando o paciente voltar a tomar tudo.", l: "C"}},
     {ref: ["dbha2025"]}
   ]},
   {t: "Investigar causas", b: [
     {fluxo: [
       {t: "Resistência confirmada (MRPA/MAPA + adesão)"},
       {t: "Exames dirigidos", ramos: [
         {r: "K baixo ou qualquer resistente", n: [{t: "Aldosterona + renina", s: "manhã, sentado, sem restringir sal"}, {t: "Positivo → endocrinologia", k: "warn"}]},
         {r: "Ronco, pausas, sonolência", n: [{t: "Avaliar apneia (polissonografia/questionário)"}, {t: "CPAP se moderada a grave"}]},
         {r: "TFG baixa ou RAC alta", n: [{t: "DRC: diurético de alça se TFG < 30"}, {t: "Nefrologia se critérios", k: "warn"}]},
         {r: "Sopro abdominal, Cr ↑ > 30% com IECA", n: [{t: "Doppler de artérias renais (regulação)"}]}
       ]}
     ]},
     {perola: {t: "Hipocalemia num hipertenso = rastrear hiperaldosteronismo", x: "Não normalize o K com reposição e siga em frente. A relação aldosterona/renina é o rastreio; IECA, BRA e diuréticos podem dar falso-negativo, betabloqueador e clonidina, falso-positivo (Endocrine Society 2025) [F].", d: "é causa tratável e às vezes curável de HAS, com redução de FA, AVC e dano renal em relação à HAS essencial de mesma PA [C].", l: "F"}},
     {ref: ["endo_pa2025", "dbha2025"]}
   ]},
   {t: "4º fármaco e além", b: [
     {fluxo: [
       {t: "IECA/BRA + anlodipino + HCTZ em dose plena"},
       {t: "+ Espironolactona 25 mg", k: "ok", s: "se K < 4,5–5,0 e TFG ≥ 45; K e creatinina em 1–2 semanas; pode ir a 50 mg"},
       {t: "Contraindicação ou intolerância?", ramos: [
         {r: "Sim", n: [{t: "Betabloqueador (carvedilol), hidralazina ou doxazosina (RENAME)"}]},
         {r: "Não, mas não controlou", n: [{t: "5º fármaco e encaminhar (cardiologia/nefrologia)", k: "stop"}]}
       ]}
     ], nota: "Sequência da Diretriz SBC 2025 [C] (espironolactona como 4º fármaco na HAR [F], Quadro 7.2; troca de hidroclorotiazida por clortalidona ou indapamida se não houver controle [F]) e ECR PATHWAY-2 [C]."},
     {perola: {t: "Espironolactona venceu como 4º fármaco", x: "No PATHWAY-2, espironolactona (25–50 mg) reduziu a PAS domiciliar cerca de 8,7 mmHg a mais que placebo e mais que bisoprolol ou doxazosina; a maioria atingiu controle [C].", d: "controle pressórico na HAS resistente com fármaco barato da REMUME.", l: "C"}},
     {ref: ["pathway2", "dbha2025", "remume"]}
   ]},
   {t: "Lesão de órgão-alvo e encaminhamento", b: [
     {tab: {h: ["Órgão", "Critério de LOA"], r: [["Coração", "HVE no ECG (Sokolow-Lyon > 35 mm; R de aVL ≥ 11 mm; Cornell > 28 mm H / > 20 mm M) ou eco (IMVE ≥ 116 g/m² H / ≥ 96 g/m² M, indexado por superfície corporal)"], ["Rim", "TFGe < 60 (DRC a partir de G3a) ou albuminúria ≥ 30 mg/24 h / RAC ≥ 30 mg/g"], ["Grandes vasos", "ITB < 0,9; placa em USG de carótidas; VOP carotídeo-femoral ≥ 10 m/s"], ["Retina", "Retinopatia hipertensiva ao fundo de olho (Keith–Wagener–Barker)"]]}, nota: "Quadro 4.4 da Diretriz SBC 2025, conferido no texto da Diretriz [F]. Na APS, ECG, creatinina e RAC já estratificam a maioria."},
     {ul: ["Encaminhar: persistência com 4 fármacos, suspeita de causa secundária, hipocalemia espontânea, LOA progressiva, intolerância a múltiplas classes.", "Na guia: PA de consultório e MRPA/MAPA, fármacos e doses, adesão, K, creatinina/TFG, RAC, ECG."]},
     {ref: ["dbha2025"]}
   ]}
  ]}};

CONDICOES.push(
{
  id: "cr-crise-has", modulo: "cr", nome: "Crise hipertensiva na UBS", sistema: "HAS", risco: "alto",
  ciap: "K86 / K87", cid: "I10",
  tags: "crise hipertensiva urgência emergência pseudocrise PA 180/110 captopril clonidina nifedipino sublingual LOA",
  alerta: "PA ≥ 180/110 com dor torácica, dispneia, déficit neurológico, confusão, alteração visual ou convulsão = emergência hipertensiva: SAMU 192.",
  S: "Paciente com PA elevada (___/___ mmHg) em ___. Sintomas: cefaleia ___ | dor torácica ___ | dispneia ___ | déficit neurológico ___ | alteração visual ___ | náuseas/vômitos ___.\nHAS conhecida ___; medicações e adesão ___; suspensão recente ___. Dor, ansiedade, uso de cocaína/simpaticomiméticos ___.",
  O: "PA ___/___ mmHg (2 medidas; repetida após 30 min de repouso: ___/___) | FC ___ | SpO₂ ___\nAusculta cardíaca e pulmonar ___ | Exame neurológico sumário ___ | Fundo de olho ___ (se disponível).",
  A: "___ (elevação importante da PA sem LOA aguda / pseudocrise / emergência hipertensiva com ___).",
  P: "- Sem LOA aguda: repouso 30 min, tratar dor/ansiedade; se persistir, ajustar o anti-hipertensivo oral de uso contínuo. Não usar nifedipino sublingual.\n- Retorno em até 7 dias (meta inicial PAS < 160 e PAD < 100).\n- Com LOA aguda: SAMU 192, acesso venoso, monitorização, ECG.",
  rx: [{trilha: "ambos", titulo: "Ajuste do tratamento oral (exemplo)", texto: "USO ORAL\n1. Losartana 50 mg ______ 60 comprimidos\n   Tomar 1 comprimido de 12/12 horas.\n2. Anlodipino 5 mg ______ 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia.", dose: "NV", nota: "Exemplo para quem não usava ou usava monoterapia; adaptar ao esquema atual. Captopril 25 mg VO é opção de curta ação após 30 min de observação sem queda (SBC 2025), mas o essencial é o tratamento contínuo."}],
  orient: "Sua pressão está alta, mas sem sinais de que esteja lesando órgãos agora. Baixar a pressão de forma rápida demais pode ser perigoso.\nTome os remédios todos os dias como combinado e volte em até 7 dias para medir de novo.\nProcure atendimento imediato se tiver dor no peito, falta de ar, fraqueza ou formigamento de um lado do corpo, fala enrolada, confusão ou perda de visão.",
  alarme: ["Dor ou aperto no peito", "Falta de ar", "Fraqueza, boca torta ou fala enrolada", "Confusão, sonolência ou convulsão", "Perda ou embaçamento súbito da visão", "Dor nas costas súbita e intensa"],
  encaminhar: "Emergência hipertensiva (LOA aguda) → SAMU 192 / UPA. Gestante com PA ≥ 160/110 → maternidade (ver pré-natal).",
  sus: {nacional: "RENAME 2024 (Básico): captopril 25 mg, losartana, enalapril, anlodipino, hidroclorotiazida. Nitroprussiato e nitroglicerina injetáveis em serviços de urgência.", betim: "REMUME Betim: captopril 25 mg; nitroprussiato e nitroglicerina injetáveis constam da lista (uso em urgência)."},
  evid: {resumo: "A Diretriz 2025 substitui 'urgência hipertensiva' por 'elevação importante da PA sem LOA aguda' e recomenda manejo ambulatorial, sem redução rápida. Na emergência, a meta e o fármaco dependem do órgão acometido. Não há evidência de benefício em tratar no pronto-socorro a elevação sem LOA.", certeza: "Moderada (consenso e estudos observacionais)", fontes: ["dbha2025", "aha_avc", "remume", "rename"]},
  mudancas: ["Item novo, a partir da seção 'Crise hipertensiva' do Notion e da Figura 11.1 da Diretriz 2025."],
  nv: ["Doses de captopril e clonidina para elevação sem LOA: conferir na Diretriz 2025 e na bula.", "Fluxo local de urgência (UPA de referência)."],
  guia: {
    resumo: "Na UBS, a pergunta que decide tudo é: **há lesão de órgão-alvo aguda?** Sem LOA, o risco está em **baixar rápido demais**; o tratamento é ajustar o remédio oral e rever em até 7 dias. Com LOA, é emergência: SAMU.",
    calcs: ["pa"],
    secoes: [
     {t: "Definições", b: [
       {tab: {h: ["Situação", "Critério", "Risco imediato"], r: [["Elevação importante da PA sem LOA aguda (antiga urgência)", "PAS ≥ 180 e/ou PAD ≥ 110, sem LOA nova ou progressiva", "Não"], ["Emergência hipertensiva", "PAS ≥ 180 e/ou PAD ≥ 110 com LOA nova, progressiva ou em piora", "Sim"], ["Pseudocrise", "PA alta por dor, ansiedade, desconforto; oligo ou assintomático", "Não"]]}, nota: "Limiar e divisão por LOA: Figura 11.1 da Diretriz SBC 2025 [F]. Pseudocrise: conceito consolidado [C], não conferido no texto do capítulo 11."},
       {fig: {src: "img/has-crise.webp", leg: "Figura 11.1 – Fluxograma de atendimento da crise hipertensiva", fonte: "Diretriz Brasileira de Hipertensão Arterial 2025 (SBC)"}},
       {ref: ["dbha2025"]}
     ]},
     {t: "Conduta na UBS", b: [
       {fluxo: [
         {t: "PA ≥ 180/110 (2 medidas)"},
         {t: "Sintomas de LOA aguda?", s: "dor torácica, dispneia, déficit neurológico, confusão, convulsão, perda visual, dor dorsal súbita", ramos: [
           {r: "Sim", n: [{t: "Emergência: SAMU 192", k: "stop"}, {t: "Monitorizar, acesso venoso, ECG, O₂ se SpO₂ < 94%", s: "não baixar a PA com fármaco oral 'para transportar'"}]},
           {r: "Não", n: [{t: "Repouso 30 min em ambiente calmo; tratar dor/ansiedade"}, {t: "Persistiu ≥ 180/110?", ramos: [
             {r: "Sim", n: [{t: "Ajustar/introduzir anti-hipertensivo oral contínuo", k: "warn", s: "curta ação (captopril) só se necessário"}]},
             {r: "Não", n: [{t: "Pseudocrise ou reação aguda", k: "ok"}]}
           ]}, {t: "Retorno em 1–7 dias; meta inicial PAS < 160 e PAD < 100", k: "ok"}]}
         ]}
       ], nota: "Adaptado para a APS da Figura 11.1 e das recomendações do capítulo 11 da Diretriz SBC 2025 [F] (reavaliação em 1–7 dias com alvo < 160/100: recomendação fraca, certeza baixa)."},
       {perola: {t: "Não use nifedipino sublingual – nunca", x: "A queda abrupta e imprevisível da PA causa isquemia cerebral, miocárdica e renal. A redução de mais de 25–30% nas primeiras 2–4 horas é proscrita na elevação sem LOA [F].", d: "evita AVC e IAM iatrogênicos.", l: "F"}},
       {perola: {t: "A causa mais comum é parar o remédio", x: "Pergunte como e quando está tomando, se faltou na farmácia e se parou algo recentemente (clonidina e betabloqueador têm rebote).", d: "resolver a adesão previne a próxima 'crise'.", l: "C"}},
       {det: {t: "Perguntas-chave na anamnese [I]", b: [{ul: ["Sente dor no peito ou falta de ar? (IAM, dissecção, edema agudo de pulmão)", "Usou medicamento, droga ou erva? (cocaína, simpaticomiméticos, síndrome serotoninérgica)", "Parou algum remédio? (rebote de clonidina, abstinência alcoólica)", "Notou fraqueza, dormência ou fala arrastada? (AVC/AIT)", "Ronca ou acorda cansado? (apneia)", "Estresse, luto, dor? (pseudocrise – diagnóstico de exclusão)"]}]}},
       {ref: ["dbha2025"]}
     ]},
     {t: "Emergências específicas (referência)", b: [
       {tab: {h: ["Situação", "Meta", "Fármacos preferidos"], r: [["Geral", "Reduzir ~25% na 1ª hora; 160/100–110 em 2–6 h; valores normais em 24–48 h [F]", "Parenteral conforme a causa, em UTI (recomendação forte) [F]"], ["Dissecção aguda de aorta", "PAS < 120 na 1ª hora [F]; FC < 60 [C]", "Betabloqueador EV antes do vasodilatador [C]"], ["Edema agudo de pulmão / crise catecolaminérgica", "PAS < 140 na 1ª hora [F]", "Nitroglicerina/nitroprussiato; alfa-bloqueio antes de beta na crise adrenérgica [C]"], ["AVC isquêmico", "Tratar se ≥ 220/120 (sem trombólise) ou > 185/110 (candidato à trombólise) [C]", "Reduzir cerca de 15% nas primeiras 24 h [C]"], ["Pré-eclâmpsia grave", "Sulfato de magnésio + controle da PA [C]", "Hidralazina EV ou nifedipino oral (não sublingual) [C]"]]}, nota: "Metas gerais, de dissecção e de EAP/crise catecolaminérgica: Figura 11.1 da Diretriz SBC 2025 [F]. AVC: diretriz AHA/ASA de AVC agudo [C]; pré-eclâmpsia: ver módulo Pré-natal. Conduta hospitalar; na UBS, estabilizar e transferir."},
       {ref: ["dbha2025"]}
     ]}
    ]}
},
{
  id: "cr-has-meds", modulo: "cr", nome: "Anti-hipertensivos: classes, doses e aleitamento", sistema: "HAS", risco: "baixo",
  ciap: "K86", cid: "I10",
  tags: "anti-hipertensivos classes doses IECA BRA BCC tiazídico betabloqueador amamentação aleitamento gestação interações efeitos adversos REMUME",
  sus: {nacional: "RENAME 2024 (Básico): losartana 50; enalapril 5/10/20; captopril 25; anlodipino 5/10; hidroclorotiazida 12,5/25; espironolactona 25/100; atenolol 50/100; carvedilol 3,125/6,25/12,5/25; metoprolol succinato 25/50/100; propranolol 40; hidralazina 25/50; metildopa 250/500; doxazosina; furosemida 40.", betim: BETIM_HAS},
  alarme: ["Inchaço de lábios, língua ou garganta (angioedema por IECA)", "Fraqueza muscular ou palpitações (potássio alterado)", "Desmaio ou tontura ao levantar"],
  encaminhar: "Intolerância a múltiplas classes ou necessidade de fármacos fora da REMUME → cardiologia/nefrologia.",
  evid: {resumo: "IECA, BRA, BCC di-hidropiridínico e tiazídico reduzem eventos cardiovasculares de forma semelhante por mmHg reduzido; betabloqueador tem indicação preferencial em condições específicas. Na amamentação, enalapril, captopril, nifedipino, metildopa e propranolol são compatíveis (Quadro 10.3).", certeza: "Alta para classes de 1ª linha", fontes: ["dbha2025", "ettehad", "rename", "remume"]},
  mudancas: ["Item novo, conferido nos Quadros 7.2–7.7 e 10.3 da Diretriz SBC 2025. Corrigidas faixas de anlodipino (2,5–10), nifedipino (10–60, 1–3x), espironolactona (25–100), carvedilol (6,25–50) e frequência da metildopa (2x/dia)."],
  nv: ["Limite inferior da dose de hidroclorotiazida no Quadro 7.2 (ilegível no texto extraído).", "Lista vigente da Farmácia Popular para anti-hipertensivos."],
  guia: {
    resumo: "Para a maioria, 4 classes bastam (IECA/BRA, BCC e tiazídico) e todas estão na REMUME. O que mais muda desfecho aqui é **escolher pela comorbidade, prevenir o efeito adverso que faz o paciente parar e não errar na gestação e na amamentação**.",
    secoes: [
     {t: "Escolha pela comorbidade", b: [
       {tab: {h: ["Situação", "Preferir", "Evitar"], r: [["DM ou DRC com albuminúria", "IECA ou BRA", "IECA + BRA juntos"], ["IC com FE reduzida", "IECA/BRA (ou sacubitril-valsartana), betabloqueador (carvedilol), espironolactona", "BCC não di-hidropiridínico (diltiazem, verapamil)"], ["Pós-IAM / angina", "Betabloqueador + IECA/BRA", "—"], ["FA (controle de FC)", "Betabloqueador", "—"], ["Gota", "Losartana (efeito uricosúrico) [C]", "Tiazídico em dose alta"], ["Mulher em idade fértil sem contracepção", "BCC; metildopa se planeja gestar", "IECA, BRA, espironolactona"], ["Asma", "BCC, IECA/BRA, tiazídico", "Betabloqueador não seletivo (propranolol)"], ["Idoso com ortostatismo/quedas", "Dose baixa, titulação lenta", "Alfa-bloqueador, clonidina"]]}},
       {ref: ["dbha2025"]}
     ]},
     {t: "Doses e apresentações", b: [
       {tab: {h: ["Fármaco", "Dose diária usual", "Tomadas", "Na REMUME Betim?"], r: [
         ["Losartana", "50–100 mg", "1–2", "Sim (50 mg)"], ["Enalapril", "5–40 mg", "1–2", "Sim (10 e 20 mg)"], ["Captopril", "25–150 mg", "2–3", "Sim (25 mg)"],
         ["Anlodipino", "2,5–10 mg", "1", "Sim (5 mg)"], ["Nifedipino", "10–60 mg", "1–3", "Não (RENAME: 10 mg)"], ["Hidroclorotiazida", "até 50 mg (usual 12,5–25)", "1", "Sim (25 mg)"],
         ["Clortalidona", "12,5–25 mg", "1", "Não"], ["Espironolactona", "25–100 mg", "1–2", "Sim (25 e 100 mg)"], ["Furosemida", "20–240 mg", "1–3", "Sim (40 mg)"],
         ["Atenolol", "50–100 mg", "1–2", "Sim (50 mg)"], ["Carvedilol", "6,25–50 mg", "1–2", "Sim (3,125 e 12,5 mg)"], ["Propranolol", "80–320 mg", "2–3", "Sim (40 mg)"],
         ["Metildopa", "500–2.000 mg", "2", "Sim (250 e 500 mg)"], ["Hidralazina", "50–200 mg", "2–3", "Sim (25 mg)"], ["Doxazosina", "1–16 mg", "1", "Não localizada (RENAME: sim)"]]}, nota: "Doses diárias habituais dos Quadros 7.2–7.7 da Diretriz SBC 2025, conferidas no texto da Diretriz [F]. O limite inferior da hidroclorotiazida não ficou legível no texto extraído; a Diretriz observa que doses maiores de tiazídico aumentam efeitos metabólicos sem acrescentar efeito anti-hipertensivo [F]. Conferir a bula antes de prescrever."},
       {ref: ["dbha2025", "rename", "remume"]}
     ]},
     {t: "Efeitos adversos que fazem o paciente parar", b: [
       {ul: ["**Tosse seca com IECA** (até 1 em 10): trocar por BRA, não insistir com antitussígeno [C].", "**Edema de tornozelo com anlodipino:** dose-dependente; associar IECA/BRA reduz o edema mais do que baixar a dose [C].", "**Hipocalemia/hiponatremia com tiazídico:** K e Na após 2–4 semanas; cuidado no idoso.", "**Hipercalemia com IECA/BRA/espironolactona:** K 1–2 semanas após início; suspender AINE e suplementos de K.", "**Disfunção erétil e fadiga com betabloqueador:** perguntar ativamente; trocar se não houver indicação específica."]},
       {perola: {t: "Pergunte pelo efeito adverso antes que o paciente pare sozinho", x: "A descontinuação silenciosa é a principal causa de HAS não controlada. Ofereça a troca (há alternativa equivalente na REMUME para quase todos).", d: "mantém o controle pressórico e a redução de eventos.", l: "I"}},
       {ref: ["dbha2025"]}
     ]},
     {t: "Gestação e amamentação", b: [
       {fig: {src: "img/has-aleitamento.webp", leg: "Quadro 10.3 – Medicamentos anti-hipertensivos e aleitamento materno", fonte: "Diretriz Brasileira de Hipertensão Arterial 2025 (SBC)"}},
       {ul: ["**Gestação:** metildopa, nifedipino e hidralazina; IECA, BRA e espironolactona contraindicados (ver 'HAS na gestação' no módulo Pré-natal).", "**Amamentação na REMUME:** enalapril, captopril, metildopa, hidralazina, espironolactona e propranolol permitidos; evitar atenolol e clonidina [F]."]},
       {ref: ["dbha2025"]}
     ]},
     {t: "Interações que importam na APS", b: [
       {ul: ["**Sinvastatina + anlodipino:** máximo 20 mg de sinvastatina (os dois estão na REMUME) [F].", "**IECA/BRA + espironolactona + AINE** (\"triple whammy\" com diurético): risco de lesão renal aguda e hipercalemia [C].", "**Betabloqueador + diltiazem/verapamil:** bradicardia e bloqueio.", "**Lítio + tiazídico ou IECA:** aumento do lítio sérico."]},
       {ref: ["fda_sinva", "dbha2025"]}
     ]}
    ]}
}
);
