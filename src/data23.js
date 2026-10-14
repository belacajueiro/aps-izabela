// ───────────── CRÔNICOS – lote 2 (revisão 10/10/2026): FA e anticoagulação, DAC, pé diabético, gota, MASLD, demência, B12, polifarmácia, hipertireoidismo, LES.
Object.assign(FONTES, {
  sbc_fa2025: {s: "SBC – Diretriz de FA 2025", t: "Sociedade Brasileira de Cardiologia. Diretriz Brasileira de Fibrilação Atrial 2025 (Arq Bras Cardiol; DOI 10.36660/abc.20250618), conforme resumo publicado em 22/09/2025: CHA2DS2-VA (0 sem anticoagulação; 1 considerar; ≥ 2 indicada), DOAC preferidos, varfarina na estenose mitral reumática moderada/grave e prótese mecânica, HAS-BLED ≥ 3 não contraindica (diretriz de sociedade; texto integral não aberto).", f: "F", url: "https://portal.afya.com.br/cardiologia/sbc-2025-nova-diretriz-brasileira-de-fibrilacao-atrial"},
  esc_fa_acc: {s: "ESC 2024 FA – pontos-chave (ACC)", t: "ACC. 2024 ESC Guidelines for the management of AF – key points (17/09/2024): via AF-CARE; anticoagular com CHA2DS2-VA ≥ 2 e considerar com 1; DOAC preferido à varfarina (exceto prótese mecânica e estenose mitral); não associar antiagregante para prevenir AVC; controle de frequência com betabloqueador, digoxina ou diltiazem/verapamil (FEVE > 40%); perda de peso ≥ 10%, álcool ≤ 3 doses/semana (resumo de diretriz).", f: "F", url: "https://www.acc.org/Latest-in-Cardiology/ten-points-to-remember/2024/09/17/04/05/2024-esc-guidelines-for-af-esc-2024"},
  port11_2016: {s: "Portaria SCTIE 11/2016 – DOAC", t: "Ministério da Saúde. Portaria SCTIE/MS nº 11, de 04/02/2016: não incorporação de apixabana, rivaroxabana e dabigatrana para prevenção de AVC na fibrilação atrial não valvar (Relatório CONITEC nº 156) (norma).", f: "F", url: "https://saude.campinas.sp.gov.br/saude/lista_legislacoes/legis_2016/U_PT-MS-SCTIE-11_040216.pdf"},
  tele_varf_ini: {s: "TelessaúdeRS – iniciar varfarina", t: "TelessaúdeRS-UFRGS. Como iniciar anticoagulação com varfarina na APS? (2019; atualizado 28/03/2022): dose inicial por sensibilidade (2,5/5/7,5 mg), alvos de RNI por indicação, ajuste por % da dose total semanal, RNI semanal até o alvo (protocolo de telessaúde).", f: "F", url: "https://www.ufrgs.br/telessauders/perguntas/ps-anticoagulacao-varfarina/"},
  tele_varf_rni: {s: "TelessaúdeRS – RNI acima do alvo", t: "TelessaúdeRS-UFRGS. Como abordar um paciente em uso de varfarina com RNI acima do alvo terapêutico? (2021; atualizado 28/03/2022): condutas por faixa de RNI, vitamina K oral, causas e intervalos de monitorização (protocolo de telessaúde).", f: "F", url: "https://www.ufrgs.br/telessauders/?p=27579"},
  bb_pos_iam2025: {s: "Betabloqueador pós-IAM (ESC 2025)", t: "ACC. Beta-blocker therapy following MI (26/08/2025): REBOOT (~8.000, FEVE > 40%, sem benefício), BETAMI-DANBLOCK (~5.500, FEVE ≥ 40%, 14,2% × 16,3%) e metanálise na FEVE 40–49% (10,7% × 14,4%; redução relativa de 25%) (notícia de congresso sobre ECR).", f: "F", url: "https://www.acc.org/Latest-in-Cardiology/Articles/2025/08/26/11/47/sat-520am-bb-esc-2025"},
  esc_ccs2024: {s: "ESC 2024 – síndromes coronarianas crônicas", t: "Vrints C et al. 2024 ESC Guidelines for the management of chronic coronary syndromes (Eur Heart J; doi 10.1093/eurheartj/ehae177), conforme resumo: estatina de alta intensidade para todos, LDL < 55 mg/dL e redução ≥ 50% (IA), ezetimiba se fora da meta (IB), iSGLT2 no DM2 (IA), semaglutida se IMC > 27 sem DM (IIaB) (resumo secundário de diretriz).", f: "F", url: "https://www.campus.sanofi/se/artiklar/kardiologi/dyslipidemi/ar/esc-guidelines-management-chronic-coronary-syndromes-2024"},
  sbd_pe: {s: "SBD – prevenção do pé diabético", t: "Sacco ICN et al. Diagnóstico e prevenção de úlceras no pé diabético. Diretriz SBD (revisão 13/10/2022; DOI 10.29327/5412848.2024-11), lido no Drive: exame anual com monofilamento 10 g (IB); rastreio por categoria (1: 6–12 meses; 2: 3–6; 3: 1–3); educação, calçado terapêutico e cuidado integrado (diretriz de sociedade).", f: "F", url: "https://doi.org/10.29327/5412848.2024-11"},
  iwgdf2023: {s: "IWGDF 2023", t: "International Working Group on the Diabetic Foot. Practical guidelines on the prevention and management of diabetes-related foot disease, 2023 – sistema de estratificação de risco 0–3 (diretriz).", f: "C", url: "https://iwgdfguidelines.org/"},
  acr_gota: {s: "ACR 2020 – gota (resumo)", t: "FitzGerald JD et al. 2020 ACR Guideline for the Management of Gout, conforme resumo publicado em 01/07/2020: indicações de hipouricemiante (≥ 2 crises/ano, tofo, dano radiográfico), alopurinol 1ª linha iniciando ≤ 100 mg/dia, alvo de ácido úrico < 6 mg/dL, profilaxia por 3–6 meses, manter indefinidamente, não tratar hiperuricemia assintomática (diretriz; resumo secundário).", f: "F", url: "https://portal.afya.com.br/reumatologia/novos-guidelines-acr-para-o-manejo-da-gota"},
  masld2025: {s: "Consenso MASLD/MASH 2025", t: "AGA – GI & Hepatology News (23/09/2025): consenso multinacional sobre MASLD/MASH – rastrear DM2 e obesidade com ≥ 1 fator cardiometabólico; FIB-4 < 1,3 (< 2 se ≥ 65 anos) baixo risco, repetir em 1–3 anos; acima → elastografia; ≥ 8 kPa → especialista; perda de peso ≥ 5% (esteatose), 7–10% (inflamação), ≥ 10% (fibrose) (resumo de consenso).", f: "F", url: "https://news.gastro.org/issues/2025/september/global-consensus-streamlines-masldmash-care/"},
  pcdt_alz2025: {s: "PCDT Doença de Alzheimer 2025", t: "Ministério da Saúde/CONITEC. Relatório de Recomendação nº 1.051 – PCDT da Doença de Alzheimer; Portaria Conjunta SAES/SCTIE nº 27, de 27/11/2025 (revoga a de 2017): critérios por MEEM (por escolaridade) e CDR para donepezila, galantamina, rivastigmina e memantina (norma).", f: "F", url: "https://www.gov.br/conitec/pt-br/midias/relatorios/2025/relatorio-de-recomendacao-no-1-051-pcdt-da-doenca-de-alzheimer/@@display-file/file"},
  ms_demencia2024: {s: "MS – Identificação da demência na APS (2024)", t: "Ministério da Saúde/SAPS. Identificação da Demência na Atenção Primária, 1ª ed., 2024: 10-CS, QMC8, BBRC (fluência verbal e relógio), investigação de causas reversíveis e seguimento (guia oficial).", f: "F", url: "https://saude.rs.gov.br/upload/arquivos/202410/07100606-identificacao-demencia-atencao-primaria.pdf"},
  tele_hiper: {s: "TelessaúdeRS – hipertireoidismo", t: "TelessaúdeRS-UFRGS. TeleCondutas: Hipertireoidismo (2017): diagnóstico, tiamazol por faixa de T4L, PTU (crise e 1º trimestre), propranolol, subclínico, gestação e encaminhamento (protocolo de telessaúde).", f: "F", url: "https://ares.unasus.gov.br/acervo/bitstream/ARES/10276/1/TelessaudeUFRGS_hipertireoidismo.pdf"},
  beers2023: {s: "Beers 2023", t: "American Geriatrics Society 2023 Updated Beers Criteria, conforme resumo da UIC (set/2023): evitar iniciar AAS em prevenção primária; DOAC em vez de varfarina para início; evitar rivaroxabana no uso prolongado; evitar sulfonilureias (todas); riscos de IBP, benzodiazepínicos, anticolinérgicos, AINE e antipsicóticos na demência (critérios; resumo secundário).", f: "F", url: "https://dig.pharmacy.uic.edu/faqs/2023-2/september-2023-faqs/a-summary-of-the-2023-american-geriatrics-society-updated-beers-criteria-for-potentially-inappropriate-medication-use-in-the-elderly"},
  reduce_ami: {s: "REDUCE-AMI", t: "Yndigegn T et al. Beta-blockers after myocardial infarction and preserved ejection fraction. N Engl J Med 2024 (ECR; FEVE ≥ 50%, sem redução de morte ou reinfarto).", f: "C", url: ""},
  stopp3: {s: "STOPP/START v3", t: "O'Mahony D et al. STOPP/START criteria for potentially inappropriate prescribing in older people: version 3. Eur Geriatr Med 2023 (critérios).", f: "C", url: ""},
  desprescr_ibp: {s: "Desprescrição de IBP", t: "Farrell B et al. Deprescribing proton pump inhibitors: evidence-based clinical practice guideline. Can Fam Physician 2017 (diretriz).", f: "C", url: ""},
  eular_les2023: {s: "EULAR 2023 – LES", t: "Fanouriakis A et al. EULAR recommendations for the management of systemic lupus erythematosus: 2023 update. Ann Rheum Dis 2024;83:15 (diretriz; conferida por resumo).", f: "F", url: "https://rheumnow.com/news/2023-eular-lupus-management-recommendations"},
  pcdt_les2022: {s: "PCDT LES 2022 (fluxo CEAF)", t: "Ministério da Saúde. PCDT Lúpus Eritematoso Sistêmico – Portaria Conjunta nº 21, de 01/11/2022; documentos exigidos no CEAF (FAN, hemograma, EAS, β-hCG, avaliação oftalmológica com validade de 12 meses), conforme fluxo de acesso SESAB 2026 (norma/fluxo estadual).", f: "F", url: "https://www.ba.gov.br/saude/sites/site-sesab/files/2026-07/Fluxo%20de%20Acesso%20-%20L%C3%BApus%20Eritematoso%20Sist%C3%AAmico_1.pdf"}
});

const BETIM_CR2 = "REMUME Betim: varfarina 5 mg; AAS 100 mg; clopidogrel 75 mg; sinvastatina 20 mg; atenolol 50, carvedilol 3,125 e 12,5, propranolol 40 mg; isossorbida dinitrato 5 mg SL e mononitrato 20 mg; digoxina 0,25; amiodarona 200; verapamil 80 mg; fitomenadiona 10 mg/mL injetável.";

CONDICOES.forEach(c => {
  if (c.id === "cr-ic") c.sistema = "Doença cardiovascular";
  if (c.id === "cr-hipotireoidismo") c.sistema = "Tireoide";
  if (c.id === "cr-osteoporose") c.sistema = "Reumatologia e osso";
});

CONDICOES.push(
{
  id: "cr-fa", modulo: "cr", nome: "Fibrilação atrial: anticoagulação e controle de frequência", sistema: "Doença cardiovascular", risco: "alto",
  ciap: "K78", cid: "I48",
  tags: "fibrilação atrial flutter CHA2DS2-VA HAS-BLED anticoagulação varfarina DOAC apixabana rivaroxabana dabigatrana controle de frequência betabloqueador digoxina AAS AF-CARE",
  alerta: "FA com instabilidade (hipotensão, dor torácica, dispneia, síncope, FC > 150 sintomática) ou início < 24–48 h com sintomas: urgência. FA + déficit neurológico súbito: AVC – SAMU.",
  S: "Paciente, ___ anos, com FA ___ (paroxística/persistente/permanente) desde ___. Palpitações ___, dispneia ___, tontura/síncope ___. AVC/AIT prévio ___. IC ___. HAS ___. DM ___. Doença vascular (IAM, DAP, placa) ___. Sangramento prévio ___. Álcool ___. Uso de AAS/AINE ___. Anticoagulante atual ___ (RNI recentes ___).",
  O: "PA ___ | FC ___ (irregular) | Peso ___\nECG ___ | Eco ___ (FEVE ___, valva mitral ___) | Creatinina/TFG ___ | Hb/plaquetas ___ | TSH ___ | TGO/TGP ___.\nCHA2DS2-VA ___ | HAS-BLED ___.",
  A: "Fibrilação atrial ___ não valvar, CHA2DS2-VA ___, HAS-BLED ___, controle de frequência ___.",
  P: "- Anticoagular se CHA2DS2-VA ≥ 2 (considerar se 1): varfarina com alvo de RNI 2–3 no SUS.\n- Não usar AAS para prevenir AVC na FA.\n- Controle de frequência: betabloqueador ___.\n- Corrigir fatores de sangramento modificáveis (PA, AINE, álcool).\n- Tratar fatores de risco: PA, peso, apneia, álcool, DM.\n- Encaminhar à cardiologia para avaliar controle de ritmo.",
  rx: [
    {trilha: "sus", titulo: "Varfarina (REMUME)", texto: "USO ORAL\n1. Varfarina sódica 5 mg ______ 30 comprimidos\n   Tomar ___ comprimido(s) 1 vez ao dia, sempre no mesmo horário, conforme a tabela de doses.", dose: "F", nota: "Dose inicial (TelessaúdeRS): 2,5 mg/dia se alta sensibilidade (> 65 anos, RNI basal > 1,5, hepatopatia, IC descompensada, desnutrição, câncer); 5 mg/dia se 50–65 anos ou RNI basal 1,2–1,5; 7,5 mg/dia se < 50 anos e RNI basal < 1,2. RNI em 1 semana. REMUME só tem 5 mg (RENAME também lista 1 mg): avaliar partir o comprimido."},
    {trilha: "evidencia", titulo: "Apixabana (comprar – não incorporada)", texto: "USO ORAL\n1. Apixabana 5 mg ______ 60 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas.", dose: "NV", nota: "Reduzir para 2,5 mg 12/12 h se ≥ 2 de: idade ≥ 80 anos, peso ≤ 60 kg, creatinina ≥ 1,5 mg/dL (conferir bula). DOAC não incorporados ao SUS para FA (Portaria SCTIE 11/2016). Não usar em prótese mecânica nem estenose mitral moderada/grave."},
    {trilha: "ambos", titulo: "Controle de frequência – betabloqueador (REMUME)", texto: "USO ORAL\n1. Atenolol 50 mg ______ 30 comprimidos\n   Tomar ___ comprimido 1 vez ao dia.\n   (ou carvedilol se IC com FEVE reduzida)", dose: "NV", nota: "Betabloqueador serve em qualquer FEVE; diltiazem/verapamil só se FEVE > 40%; digoxina como adjuvante (ESC 2024). Ajustar pela FC e sintomas."}
  ],
  idealsus: {ideal: "DOAC (apixabana, rivaroxabana, dabigatrana, edoxabana) para FA não valvar com CHA2DS2-VA ≥ 2 – menos AVC hemorrágico e sangramento intracraniano que a varfarina, sem necessidade de RNI.", sus: "Varfarina 5 mg na REMUME (1 e 5 mg na RENAME); DOAC não incorporados (Portaria SCTIE 11/2016).", ponte: "Varfarina bem controlada (tempo na faixa ≥ 65–70%) é eficaz: organize a rotina de RNI na UBS. Se RNI instável apesar de adesão e revisão de interações, discutir DOAC comprado pelo paciente (custo) ou na Farmácia Popular se disponível – confirmar."},
  orient: "A fibrilação atrial deixa o coração irregular e aumenta o risco de derrame. O anticoagulante reduz muito esse risco.\nTome a varfarina todo dia no mesmo horário e faça o exame de RNI nas datas marcadas.\nNão tome anti-inflamatórios nem AAS sem falar com a equipe. Avise sempre que começar ou parar qualquer remédio, inclusive chás e antibióticos.\nMantenha a alimentação parecida no dia a dia (não precisa cortar verduras, mas evite mudanças bruscas).",
  alarme: ["Fraqueza, formigamento ou boca torta de repente (AVC)", "Sangramento que não para, urina vermelha, fezes pretas, vômito com sangue", "Dor de cabeça forte e súbita", "Coração muito acelerado com falta de ar, dor no peito ou desmaio"],
  encaminhar: "Todo diagnóstico novo: eco e avaliação de ritmo pela cardiologia (controle de ritmo melhora desfechos em selecionados). Urgência se instável. Hematologia/cardiologia se sangramento maior em anticoagulado.",
  sus: {nacional: "RENAME 2024: varfarina 1 e 5 mg, AAS, atenolol, carvedilol, metoprolol, digoxina, amiodarona, propafenona, verapamil (Básico). DOAC não incorporados.", betim: BETIM_CR2},
  evid: {resumo: "Anticoagulação oral reduz AVC em cerca de 2/3 na FA; DOAC reduzem AVC/embolia e sangramento intracraniano em relação à varfarina (metanálise de ECR). ESC 2024 e SBC 2025 usam o CHA2DS2-VA (sem o ponto do sexo feminino): anticoagular se ≥ 2, considerar se 1. HAS-BLED alto não contraindica: indica corrigir fatores de sangramento.", certeza: "Alta (anticoagulação); recomendação forte", fontes: ["esc_fa_acc", "esc_fa2024", "sbc_fa2025", "doac_ma", "port11_2016", "tele_varf_ini", "rename", "remume"]},
  mudancas: ["Item novo. Usa CHA2DS2-VA (ESC 2024/SBC 2025) no lugar do CHA2DS2-VASc."],
  nv: ["Disponibilidade de DOAC na Farmácia Popular ou programas estaduais em MG.", "Fluxo de RNI na UBS (coleta capilar ou laboratório) em Betim."],
  guia: {
    resumo: "O que mais muda desfecho na FA é **anticoagular quem tem indicação** (CHA2DS2-VA ≥ 2) e **não usar AAS no lugar do anticoagulante**. No SUS, isso significa **varfarina bem controlada** – o tempo na faixa terapêutica é o que define o benefício.",
    calcs: ["sc:cha2ds2va", "sc:hasbled", "inr"],
    secoes: [
     {t: "Avaliar e decidir (AF-CARE)", b: [
       {fluxo: [
         {t: "FA confirmada no ECG (≥ 30 s)"},
         {t: "Instável ou início recente com sintomas?", ramos: [
           {r: "Sim", n: [{t: "Urgência", k: "stop"}]},
           {r: "Não", n: [{t: "CHA2DS2-VA + HAS-BLED + exames (TSH, creatinina, Hb, eco)"}]}
         ]},
         {t: "CHA2DS2-VA", ramos: [
           {r: "0", n: [{t: "Sem anticoagulação; reavaliar anualmente", k: "ok"}]},
           {r: "1", n: [{t: "Considerar anticoagulação (decisão compartilhada)", k: "warn"}]},
           {r: "≥ 2", n: [{t: "Anticoagular (varfarina no SUS; DOAC se acessível)", k: "stop"}]}
         ]},
         {t: "Controle de frequência + fatores de risco; cardiologia para ritmo"}
       ], nota: "ESC 2024 (ACC) e SBC 2025 [F]. CHA2DS2-VA: IC, HAS, DM, doença vascular, 65–74 anos = 1 ponto cada; ≥ 75 anos e AVC/AIT = 2 pontos [F]."},
       {perola: {t: "AAS não protege da FA", x: "AAS não substitui anticoagulante na prevenção de AVC na FA e ainda causa sangramento. Ao anticoagular, suspenda o AAS se ele foi prescrito só pela FA (sem evento coronariano recente) [F].", d: "menos sangramento sem perder proteção.", l: "F"}},
       {perola: {t: "HAS-BLED alto é para corrigir, não para negar", x: "HAS-BLED ≥ 3 sinaliza revisar PA, AINE, álcool e RNI lábil – não contraindica a anticoagulação [F]. Idosos com quedas também se beneficiam: o risco de AVC supera o de hematoma por queda [C].", d: "mais idosos protegidos de AVC.", l: "F"}},
       {ref: ["esc_fa_acc", "sbc_fa2025"]}
     ]},
     {t: "Varfarina na UBS", b: [
       {calc: "inr"},
       {tab: {h: ["Situação", "Conduta (TelessaúdeRS)"], r: [
         ["Início", "2,5 / 5 / 7,5 mg/dia conforme sensibilidade; RNI basal e em 1 semana [F]"],
         ["Alvo", "RNI 2–3 (FA, TEV); 2,5–3,5 em prótese mitral mecânica [F]"],
         ["RNI 1,51–1,99", "Aumentar a dose total semanal em 10%; RNI em 1–2 semanas [F]"],
         ["RNI ≤ 1,5", "Aumentar 15% da dose total semanal [F]"],
         ["RNI 3,01–3,99", "Reduzir 10–15% da dose semanal [F]"],
         ["RNI 4–4,99", "Suspender a dose do dia e reduzir a dose semanal em 10%; RNI em 1 semana [F]"],
         ["RNI 5–8,9 sem sangramento", "Omitir 1–2 doses; vitamina K oral 2,5 mg se fatores de risco de sangramento; reduzir 10–15% ao voltar ao alvo [F]"],
         ["RNI ≥ 9 sem sangramento", "Suspender 2 doses; vitamina K oral 2,5–5 mg se alto risco; reduzir 15–20% [F]"],
         ["Sangramento ativo", "Emergência [F]"]]}, nota: "RNI semanal até o alvo, 15 dias após atingir e depois a cada 4 semanas; estável > 3 meses: até 12 semanas [F]. Se RNI previamente estável e entre 1,7 e 3,3, não mudar e repetir em 1–2 semanas [F]."},
       {ul: ["Interações frequentes: aumentam o RNI – ciprofloxacino, metronidazol, amiodarona, omeprazol [F]; também SMX-TMP e fluconazol [C]; reduzem – rifampicina, carbamazepina [F].", "Esqueceu a dose: tomar assim que lembrar no mesmo dia; não dobrar no dia seguinte [F].", "Preferir a mesma dose todos os dias a doses alternadas [F]."]},
       {ref: ["tele_varf_ini", "tele_varf_rni"]}
     ]},
     {t: "Controle de frequência e fatores de risco", b: [
       {ul: ["Betabloqueador (qualquer FEVE), digoxina (qualquer FEVE) ou diltiazem/verapamil (FEVE > 40%) [F].", "Meta inicial branda: FC de repouso < 110 bpm, mais estrita se sintomas persistem [C].", "Fatores de risco: perda de peso ≥ 10% se obesidade, álcool ≤ 3 doses/semana, controle da PA, apneia do sono, atividade física [F].", "iSGLT2 na IC com FA, qualquer FEVE [F] (dapagliflozina no CEAF conforme PCDT IC)."]},
       {trio: {ideal: "DOAC + controle de ritmo precoce em selecionados (ablação/antiarrítmico) + manejo agressivo de fatores de risco.", sus: "Varfarina, betabloqueador, digoxina e amiodarona na REMUME; ablação e eco via regulação; DOAC não incorporados.", ponte: "Garanta RNI regular e revisão de interações; encaminhe à cardiologia quem é sintomático ou jovem para discutir ritmo."}},
       {ref: ["esc_fa_acc", "pcdt_ic"]}
     ]}
    ]}
},
{
  id: "cr-dac", modulo: "cr", nome: "Doença coronariana crônica e prevenção secundária pós-IAM", sistema: "Doença cardiovascular", risco: "alto",
  ciap: "K74 · K76", cid: "I25",
  tags: "doença arterial coronariana angina estável pós-infarto IAM prevenção secundária AAS estatina alta intensidade LDL betabloqueador nitrato clopidogrel reabilitação cardíaca",
  alerta: "Dor torácica em repouso, prolongada (> 20 min), em crescendo ou com sintomas autonômicos: síndrome coronariana aguda – SAMU, ECG imediato e AAS 300 mg mastigado se sem contraindicação.",
  S: "Paciente, ___ anos, com DAC ___ (IAM em ___ / angioplastia em ___ / revascularização em ___ / angina estável). Angina: frequência ___, esforço ___, uso de nitrato ___. Dispneia ___. Tabaco ___. Adesão ___. Medicamentos: AAS ___, estatina ___ (dose ___), betabloqueador ___, IECA/BRA ___, clopidogrel (até ___).",
  O: "PA ___ | FC ___ | IMC ___ | Cintura ___\nLDL ___ (meta < 50–55) | HbA1c ___ | Creatinina/TFG ___ | ECG ___ | Eco (FEVE ___).",
  A: "Doença coronariana crônica ___ (pós-IAM há ___ / angina estável CCS ___), LDL ___, FEVE ___.",
  P: "- AAS 100 mg/dia indefinidamente.\n- Estatina de alta intensidade; meta de LDL conforme diretriz.\n- Betabloqueador se FEVE < 50% ou angina; reavaliar no pós-IAM com FEVE preservada.\n- IECA/BRA se HAS, DM, DRC ou FEVE reduzida.\n- Nitrato SL para crise.\n- Cessação do tabagismo, atividade física/reabilitação, vacina influenza.",
  rx: [
    {trilha: "ambos", titulo: "Prevenção secundária básica (REMUME)", texto: "USO ORAL\n1. Ácido acetilsalicílico 100 mg ______ 30 comprimidos\n   Tomar 1 comprimido ao dia, após o almoço.\n2. Sinvastatina 20 mg ______ 60 comprimidos\n   Tomar 2 comprimidos à noite.\n3. Isossorbida dinitrato 5 mg (sublingual) ______ 10 comprimidos\n   Em caso de dor no peito, colocar 1 comprimido embaixo da língua; pode repetir após 5 minutos até 3 vezes. Se a dor não passar, procurar urgência.", dose: "NV", nota: "Sinvastatina 40 mg é intensidade moderada; atorvastatina 40–80 mg (alta intensidade) pelo CEAF conforme PCDT Dislipidemia. Nitrato contraindicado com sildenafila/tadalafila nas últimas 24–48 h."},
    {trilha: "evidencia", titulo: "Estatina de alta intensidade (CEAF ou comprar)", texto: "USO ORAL\n1. Atorvastatina 40 mg ______ 30 comprimidos\n   Tomar 1 comprimido ao dia.\n   (ou rosuvastatina 20 mg)", dose: "NV", nota: "Meta ESC 2024: LDL < 55 mg/dL e redução ≥ 50%; SBC 2025: muito alto risco < 50 mg/dL. Ezetimiba se fora da meta."}
  ],
  idealsus: {ideal: "Estatina de alta intensidade ± ezetimiba até LDL < 50–55 mg/dL; AAS; iSGLT2 no DM2; reabilitação cardíaca; betabloqueador na FEVE < 50%.", sus: "AAS e sinvastatina na REMUME; atorvastatina e ezetimiba via CEAF (PCDT Dislipidemia); dapagliflozina via CEAF para DM2 de alto risco.", ponte: "Comece com sinvastatina 40 mg e abra o CEAF para atorvastatina em todo coronariopata (alto/muito alto risco). Atividade física supervisionada pela eMulti quando não houver reabilitação."},
  orient: "Os remédios do coração protegem contra um novo infarto mesmo quando você está bem: não pare por conta própria.\nNunca fique sem o AAS e a estatina.\nO comprimido embaixo da língua é para a dor no peito: se não passar em 15 minutos (3 comprimidos), chame o SAMU (192).\nParar de fumar é o tratamento que mais reduz o risco de novo infarto.",
  alarme: ["Dor no peito que dura mais de 15–20 minutos ou não passa com o comprimido", "Dor no peito em repouso ou cada vez mais frequente", "Falta de ar, suor frio, desmaio", "Inchaço nas pernas e cansaço progressivo"],
  encaminhar: "Angina que limita apesar de tratamento, FEVE reduzida, isquemia em teste, pós-IAM sem acompanhamento cardiológico → cardiologia. SCA → SAMU.",
  sus: {nacional: "RENAME 2024: AAS 100 (Básico), sinvastatina 10–40, isossorbida mono e dinitrato, atenolol, metoprolol, carvedilol (Básico); atorvastatina (CEAF, PCDT Dislipidemia); clopidogrel (CEAF, Protocolo SCA).", betim: BETIM_CR2},
  evid: {resumo: "Estatina de alta intensidade e LDL mais baixo reduzem eventos (ESC 2024: LDL < 55 mg/dL e redução ≥ 50%, IA). Betabloqueador pós-IAM: benefício claro com FEVE reduzida; na FEVE 40–49%, metanálise de 2025 mostrou redução de 25% de morte/IAM/IC; com FEVE preservada (> 50%), REBOOT e REDUCE-AMI não mostraram benefício e BETAMI-DANBLOCK mostrou benefício modesto – evidência conflitante.", certeza: "Alta (estatina, AAS); moderada e conflitante (betabloqueador com FEVE preservada)", fontes: ["esc_ccs2024", "dbdisl2025", "bb_pos_iam2025", "reduce_ami", "pcdt_disl", "rename", "remume"]},
  mudancas: ["Item novo."],
  nv: ["Fluxo de reabilitação cardíaca em Betim/MG.", "Teste ergométrico e eco pela regulação municipal (prazos)."],
  guia: {
    resumo: "Na DAC crônica, o que muda desfecho na APS é **LDL baixo de verdade** (estatina de alta intensidade, não 'qualquer estatina'), **AAS sem interrupção**, **parar de fumar** e **atividade física**. Betabloqueador pós-IAM depende da FEVE.",
    calcs: ["lipides"],
    secoes: [
     {t: "Os quatro pilares", b: [
       {tab: {h: ["Medida", "Detalhe"], r: [
         ["Antiagregação", "AAS 100 mg indefinidamente [C]; DAPT (AAS + clopidogrel) pelo tempo definido pela cardiologia após SCA/stent [C]"],
         ["Lipídios", "Estatina de alta intensidade para todos; LDL < 55 mg/dL e redução ≥ 50% (ESC, IA); ezetimiba se fora da meta (IB) [F]"],
         ["Glicose/peso", "iSGLT2 no DM2 independentemente da HbA1c (IA); semaglutida se IMC > 27 sem DM (IIa) [F]"],
         ["Estilo de vida", "Cessar tabagismo, atividade física regular, vacina influenza anual [C]"]]}},
       {ref: ["esc_ccs2024", "dbdisl2025"]}
     ]},
     {t: "Betabloqueador depois do infarto", b: [
       {fluxo: [
         {t: "IAM prévio – qual a FEVE?", ramos: [
           {r: "< 40% ou IC", n: [{t: "Betabloqueador indicado (carvedilol/metoprolol succinato/bisoprolol)", k: "stop"}]},
           {r: "40–49%", n: [{t: "Manter betabloqueador (metanálise 2025: −25% morte/IAM/IC)", k: "warn"}]},
           {r: "≥ 50% sem angina/arritmia", n: [{t: "Benefício incerto: decisão compartilhada; pode-se não iniciar ou retirar após 1 ano se efeitos adversos", k: "ok"}]}
         ]}
       ], nota: "REBOOT (FEVE > 40%) neutro; BETAMI-DANBLOCK (FEVE ≥ 40%) 14,2% × 16,3%; sinais de dano em mulheres no REBOOT a confirmar [F]. Angina ou arritmia continuam indicações próprias [C]."},
       {perola: {t: "Não desprescreva no automático", x: "A evidência nova autoriza discutir a retirada do betabloqueador em quem tem FEVE ≥ 50%, sem angina, sem arritmia e com efeitos adversos – não a suspensão em massa. Na FEVE 40–49%, ele parece proteger.", d: "menos efeitos adversos sem perder proteção onde ela existe.", l: "F"}},
       {ref: ["bb_pos_iam2025"]}
     ]},
     {t: "Angina estável na APS", b: [
       {ul: ["Crise: nitrato SL (dinitrato 5 mg) – não usar com inibidor de PDE5 nas últimas 24–48 h [C].", "Anti-anginoso de base: betabloqueador ou bloqueador de canal de cálcio; nitrato de ação longa (mononitrato) como adição [C].", "Angina nova, em crescendo ou em repouso = instável → urgência [C].", "Encaminhar se sintomas limitantes apesar de 2 antianginosos, para estratificação e possível revascularização [C]."]},
       {trio: {ideal: "Estatina alta intensidade + ezetimiba; reabilitação cardíaca formal; iSGLT2/GLP-1 conforme perfil.", sus: "Sinvastatina na REMUME; atorvastatina/ezetimiba via CEAF; reabilitação raramente disponível.", ponte: "Abra o CEAF para atorvastatina; use eMulti e grupos de caminhada como reabilitação possível."}},
       {ref: ["pcdt_disl", "remume"]}
     ]}
    ]}
},
{
  id: "cr-pe-diabetico", modulo: "cr", nome: "Pé diabético: rastreio, estratificação e prevenção de úlcera", sistema: "DM", risco: "moderado",
  ciap: "T89 · T90", cid: "E11.5 · E14.4",
  tags: "pé diabético monofilamento 10 g neuropatia doença arterial periférica pulsos índice tornozelo-braquial úlcera amputação calçado IWGDF categoria de risco",
  alerta: "Úlcera com sinais de infecção extensa, crepitação, necrose, isquemia crítica (dor em repouso, pé frio e pálido) ou sinais sistêmicos: urgência/cirurgia vascular no mesmo dia.",
  S: "Paciente com DM há ___ anos. Úlcera prévia ___. Amputação ___. Dor/queimação/dormência nos pés ___. Claudicação ___. Dor em repouso ___. Tabagismo ___. Calçados ___. Autocuidado (olha os pés todo dia?) ___. Diálise ___.",
  O: "Inspeção: pele ___, calosidades ___, unhas ___, fissuras/micoses ___, deformidades (hálux valgo, dedos em garra, Charcot) ___.\nMonofilamento 10 g: D ___/__ pontos, E ___/__. Vibração (diapasão 128 Hz) ___. Pulsos pediosos/tibiais posteriores ___. ITB ___.\nCategoria de risco IWGDF: ___.",
  A: "Pé diabético categoria de risco ___ (0 a 3): ___ (sem PSP/DAP; PSP; DAP; deformidade; úlcera/amputação prévia).",
  P: "- Categoria de risco e intervalo de reavaliação: ___.\n- Educação em autocuidado e calçado adequado.\n- Tratar calosidades, unhas e micoses (podologia/enfermagem).\n- Controle glicêmico, PA, lipídios e cessação do tabagismo.\n- Encaminhar conforme categoria (vascular se DAP; ambulatório de pé diabético se risco 3).",
  orient: "Olhe seus pés todos os dias, inclusive entre os dedos e a sola (use um espelho ou peça ajuda).\nLave e seque bem entre os dedos. Hidrate a pele, mas não entre os dedos.\nNunca ande descalço. Use sapatos fechados, macios e largos; olhe dentro do sapato antes de calçar.\nNão corte calos nem use calicida. Corte as unhas retas.\nQualquer ferida, bolha, mudança de cor ou inchaço: procure a UBS no mesmo dia.",
  alarme: ["Ferida, bolha ou rachadura que não melhora", "Pé vermelho, quente, inchado ou com pus", "Pé frio, pálido ou arroxeado, dor em repouso", "Febre com ferida no pé"],
  encaminhar: "DAP sintomática ou ITB alterado → cirurgia vascular. Úlcera ativa → curativo na UBS + ambulatório de pé diabético; urgência se infecção moderada/grave ou isquemia. Deformidade grave/Charcot → ortopedia.",
  sus: {nacional: "Monofilamento, curativos e acompanhamento na APS; calçado terapêutico com avaliação de efetividade ainda não disponível no SUS (SBD); órteses via reabilitação.", betim: "Fluxo para cirurgia vascular, podologia e ambulatório de pé diabético em Betim: confirmar."},
  evid: {resumo: "A perda da sensibilidade protetora pelo monofilamento de 10 g prediz úlcera (OR ≈ 3,2 em metanálise de dados individuais). A SBD recomenda exame anual na categoria 0 (IB) e reavaliações a cada 6–12, 3–6 e 1–3 meses nas categorias 1, 2 e 3; educação estruturada, calçado terapêutico e cuidado integrado reduzem úlcera e recorrência.", certeza: "Moderada", fontes: ["sbd_pe", "iwgdf2023", "sbd_sus"]},
  mudancas: ["Item novo."],
  nv: ["Disponibilidade de doppler/ITB e ambulatório de pé diabético em Betim."],
  guia: {
    resumo: "Um minuto com o **monofilamento** e a **palpação dos pulsos** define a categoria de risco – e a categoria define o intervalo de revisão e o encaminhamento. Úlcera prévia é o maior preditor de nova úlcera: esse paciente precisa de **cuidado integrado a cada 1–3 meses**.",
    calcs: ["pe"],
    secoes: [
     {t: "Estratificar o risco", b: [
       {calc: "pe"},
       {tab: {h: ["Categoria", "Achados", "Reavaliar"], r: [
         ["0 – muito baixo", "Sem PSP e sem DAP", "Anual [F]"],
         ["1 – baixo", "PSP ou DAP", "6–12 meses [F]"],
         ["2 – moderado", "PSP + DAP, ou PSP + deformidade, ou DAP + deformidade", "3–6 meses [F]"],
         ["3 – alto", "PSP ou DAP + úlcera prévia, amputação ou DRC terminal", "1–3 meses [F]"]]}, nota: "Definições da estratificação IWGDF [C]; intervalos da SBD [F]. PSP = perda da sensibilidade protetora (monofilamento 10 g ou Ipswich Touch Test); DAP = doença arterial periférica."},
       {ref: ["sbd_pe", "iwgdf2023"]}
     ]},
     {t: "Prevenir a úlcera", b: [
       {ul: ["Educação estruturada em autocuidado para categorias 1–3 (I-C) [F].", "Tratar lesões pré-ulcerativas: calosidades, unhas encravadas/espessadas, bolhas e micoses (podologia/enfermagem) [F].", "Calçado que acomode o pé na categoria 2; calçado terapêutico que reduza pressão plantar após úlcera plantar cicatrizada [F].", "Exercícios de mobilidade e fortalecimento dos pés e aumento seguro da caminhada nas categorias 1–2 [F].", "Não se recomenda descompressão de nervo para prevenção [F]."]},
       {perola: {t: "A úlcera curada é uma úlcera em remissão", x: "Após uma úlcera, cerca de 40% recidivam no primeiro ano em coortes; por isso a categoria 3 exige revisão a cada 1–3 meses, calçado que alivie pressão e cuidado podiátrico [C].", d: "menos recidiva e amputação.", l: "C"}},
       {trio: {ideal: "Calçado terapêutico com aferição de pressão plantar, termometria domiciliar e equipe multiprofissional de pé diabético.", sus: "Calçado terapêutico com avaliação de efetividade não disponível no SUS (SBD); órteses dependem da rede de reabilitação.", ponte: "Oriente calçado adequado comprado, peça órteses via reabilitação e mantenha revisões frequentes na UBS para quem é categoria 3."}},
       {ref: ["sbd_pe"]}
     ]}
    ]}
},
{
  id: "cr-gota", modulo: "cr", nome: "Gota crônica: tratamento hipouricemiante até a meta", sistema: "Reumatologia e osso", risco: "moderado",
  ciap: "T92", cid: "M10 · M1A",
  tags: "gota ácido úrico hiperuricemia alopurinol tratar até a meta urato < 6 tofo profilaxia colchicina prednisona crises recorrentes DRC losartana",
  S: "Paciente, ___ anos, com gota há ___. Crises no último ano: ___. Tofos ___. Litíase renal ___. DRC (TFG ___). Uso de diuréticos ___. Álcool/bebidas açucaradas ___. Alopurinol atual ___ mg (desde ___). Reação cutânea prévia ___.",
  O: "PA ___ | IMC ___ | Tofos ___ | Articulações ___\nÁcido úrico ___ (data ___) | Creatinina/TFG ___ | TGO/TGP ___ | Hemograma ___ | Glicemia/lipídios ___.",
  A: "Gota ___ (crises frequentes / tofácea), ácido úrico ___ (meta < 6 mg/dL), TFG ___.",
  P: "- Alopurinol iniciando ___ mg/dia, aumentar a cada 2–4 semanas até ácido úrico < 6 mg/dL.\n- Profilaxia de crise por 3–6 meses (prednisona baixa dose ou AINE baixa dose; colchicina se disponível).\n- Ácido úrico a cada 2–4 semanas na titulação, depois a cada 6–12 meses.\n- Não suspender o alopurinol durante crises.\n- Rever diuréticos; losartana se precisar de anti-hipertensivo.",
  rx: [
    {trilha: "ambos", titulo: "Alopurinol (REMUME)", texto: "USO ORAL\n1. Alopurinol 100 mg ______ 30 comprimidos\n   Tomar 1 comprimido ao dia após uma refeição. Retorno com ácido úrico em 2–4 semanas para aumentar a dose.", dose: "F", nota: "ACR 2020: iniciar com ≤ 100 mg/dia (menos na DRC avançada) e titular até ácido úrico < 6 mg/dL. Aumentos de 100 mg a cada 2–4 semanas [C]. Suspender e avaliar se houver erupção cutânea. Alopurinol 300 mg também na REMUME."},
    {trilha: "sus", titulo: "Profilaxia de crise sem colchicina (REMUME)", texto: "USO ORAL\n1. Prednisona 5 mg ______ ___ comprimidos\n   Tomar ___ comprimido ao dia pela manhã durante os primeiros 3 a 6 meses do alopurinol.", dose: "NV", nota: "ACR 2020 aceita colchicina, AINE ou prednisona em dose baixa como profilaxia [F]. Colchicina não está na RENAME/REMUME. Atenção a DM, osteoporose e glicemia com corticoide prolongado."},
    {trilha: "evidencia", titulo: "Colchicina profilática (comprar)", texto: "USO ORAL\n1. Colchicina 0,5 mg ______ 30 comprimidos\n   Tomar 1 comprimido 1 a 2 vezes ao dia por 3 a 6 meses.", dose: "NV", nota: "Reduzir na DRC; interações graves com claritromicina, ciclosporina, verapamil/diltiazem. Não está na RENAME."}
  ],
  idealsus: {ideal: "Alopurinol titulado até urato < 6 mg/dL (< 5 com tofos) com profilaxia por colchicina em dose baixa por 3–6 meses; febuxostate se falha/intolerância.", sus: "Alopurinol 100 e 300 mg na REMUME; colchicina e febuxostate fora da RENAME; prednisona e ibuprofeno disponíveis.", ponte: "O alopurinol titulado da REMUME resolve a maioria; para profilaxia, prednisona ou AINE em dose baixa (avaliar comorbidades) ou colchicina comprada."},
  orient: "O alopurinol é para prevenir as crises e dissolver os cristais: tome todos os dias, mesmo sem dor, e não pare durante uma crise.\nNos primeiros meses as crises podem até aumentar um pouco – por isso usamos um remédio de proteção.\nReduza cerveja, destilados, refrigerantes e sucos adoçados. Beba bastante água.\nManchas na pele, coceira forte ou febre depois de começar o alopurinol: pare e procure a UBS.",
  alarme: ["Manchas ou bolhas na pele, feridas na boca, febre (reação grave ao alopurinol)", "Articulação muito quente com febre (artrite séptica)", "Dor lombar forte com sangue na urina (cálculo)"],
  encaminhar: "Falha em atingir a meta com dose máxima tolerada, intolerância ao alopurinol, gota tofácea extensa, DRC avançada ou dúvida diagnóstica (punção articular) → reumatologia.",
  sus: {nacional: "RENAME 2024: alopurinol 100 e 300 mg, ibuprofeno, prednisona (Básico); naproxeno (CEAF). Colchicina e febuxostate não constam.", betim: "REMUME Betim: alopurinol 100 e 300 mg, prednisona 5 e 20 mg, ibuprofeno 600 mg."},
  evid: {resumo: "A estratégia de tratar até a meta (urato < 6 mg/dL) com alopurinol titulado reduz crises e tofos (ACR 2020, recomendação forte). Hipouricemiante é fortemente indicado com ≥ 2 crises/ano, tofo ou dano radiográfico; não se trata hiperuricemia assintomática. Profilaxia por 3–6 meses reduz crises no início do tratamento.", certeza: "Moderada a alta", fontes: ["acr_gota", "gota_ecr", "rename", "remume"]},
  mudancas: ["Item novo; a crise aguda segue no item 'Crise de gota' (demanda)."],
  nv: ["Alopurinol na DRC: dose inicial por TFG – conferir bula."],
  guia: {
    resumo: "O erro mais comum é dar alopurinol **100 mg para sempre** sem medir o ácido úrico. O que muda desfecho é **titular até < 6 mg/dL**, **proteger as primeiras semanas** e **não suspender na crise**.",
    secoes: [
     {t: "Quem tratar", b: [
       {tab: {h: ["Situação", "Hipouricemiante (ACR 2020)"], r: [
         ["≥ 2 crises/ano, tofo ou dano radiográfico", "Indicado (forte) [F]"],
         ["Crises infrequentes com urato > 9, idade < 40, DCV ou DRC", "Considerar (condicional) [F]"],
         ["Primeira crise", "Em geral não; considerar se DRC ≥ 3, urato > 9 ou litíase [F]"],
         ["Hiperuricemia assintomática", "Não tratar [F]"]]}},
       {ref: ["acr_gota"]}
     ]},
     {t: "Tratar até a meta", b: [
       {fluxo: [
         {t: "Alopurinol ≤ 100 mg/dia (menos na DRC avançada)", k: "ok"},
         {t: "Ácido úrico a cada 2–4 semanas; subir 100 mg por vez"},
         {t: "Meta < 6 mg/dL", ramos: [
           {r: "Atingiu", n: [{t: "Manter indefinidamente; urato a cada 6–12 meses", k: "ok"}]},
           {r: "Dose máxima tolerada sem meta", n: [{t: "Adesão? Diuréticos? → reumatologia", k: "warn"}]}
         ]}
       ], nota: "ACR 2020 [F]; incrementos de 100 mg a cada 2–4 semanas [C]. Iniciar durante a crise é aceitável com anti-inflamatório associado [F]."},
       {perola: {t: "Não pare o alopurinol na crise", x: "Suspender o alopurinol durante uma crise faz o urato oscilar e prolonga o problema. Trate a crise por cima e mantenha a dose [F].", d: "menos crises e menos tempo até a dissolução dos cristais.", l: "F"}},
       {perola: {t: "Revise o diurético", x: "Tiazídico e diurético de alça elevam o urato [C]. Se precisar de anti-hipertensivo, a losartana é preferida [F] – tem leve efeito uricosúrico [C].", d: "controle mais fácil do urato.", l: "F"}},
       {ref: ["acr_gota", "remume"]}
     ]}
    ]}
},
{
  id: "cr-masld", modulo: "cr", nome: "Esteatose hepática metabólica (MASLD): estratificar fibrose", sistema: "Fígado", risco: "moderado",
  ciap: "D97", cid: "K76.0",
  tags: "esteatose hepática gordura no fígado MASLD NAFLD MASH FIB-4 elastografia fibrose cirrose perda de peso GLP-1 semaglutida resmetirom ultrassom",
  S: "Paciente, ___ anos, com esteatose em USG de ___. DM2 ___. Obesidade ___. HAS/dislipidemia ___. Álcool: ___ doses/semana. Medicamentos hepatotóxicos ___. Hepatites B/C testadas ___.",
  O: "Peso ___ | IMC ___ | Cintura ___ | PA ___\nTGO ___ | TGP ___ | Plaquetas ___ | Albumina ___ | GGT ___ | HbA1c ___ | Lipídios ___ | HBsAg/anti-HCV ___ | FIB-4 ___.",
  A: "Esteatose hepática associada à disfunção metabólica, FIB-4 ___ (baixo / indeterminado / alto risco de fibrose avançada).",
  P: "- FIB-4: < 1,3 (ou < 2 se ≥ 65 anos) → manejo na APS e repetir em 1–3 anos; acima → elastografia/hepatologia.\n- Meta de perda de peso ≥ 5–10%; dieta mediterrânea; atividade física 150–300 min/semana.\n- Reduzir/evitar álcool; testar hepatites B e C.\n- Tratar DM2 (preferir GLP-1/iSGLT2 quando disponíveis), dislipidemia (estatina é segura) e HAS.",
  orient: "Gordura no fígado é comum e, na maioria das pessoas, não evolui para cirrose – mas o risco aumenta com diabetes, obesidade e álcool.\nPerder 5 a 10% do peso melhora muito o fígado. Caminhe pelo menos 30 minutos na maior parte dos dias.\nEvite bebida alcoólica, refrigerantes e ultraprocessados.\nA estatina para colesterol é segura para o fígado – não pare por conta própria.",
  alarme: ["Pele ou olhos amarelos", "Barriga inchada", "Vômito com sangue ou fezes pretas", "Confusão ou sonolência"],
  encaminhar: "FIB-4 ≥ 1,3 (≥ 2 se ≥ 65 anos) sem elastografia disponível, sinais de cirrose, plaquetas baixas ou elastografia ≥ 8 kPa → hepatologia/gastroenterologia.",
  sus: {nacional: "Exames básicos (TGO, TGP, plaquetas) na APS; elastografia hepática geralmente via especialidade. Sem medicamento específico para MASH incorporado.", betim: "Acesso à elastografia em Betim: confirmar."},
  evid: {resumo: "A fibrose é o principal determinante de desfechos hepáticos na MASLD. Consenso multinacional (2025): rastrear DM2 e obesidade com fator cardiometabólico; FIB-4 < 1,3 (< 2 se ≥ 65 anos) define baixo risco; acima, teste de segunda linha (elastografia); ≥ 8 kPa sugere fibrose avançada. Perda de peso de 7–10% reduz inflamação e ≥ 10% melhora a fibrose.", certeza: "Moderada", fontes: ["masld2025"]},
  mudancas: ["Item novo."],
  nv: ["Registro na ANVISA e disponibilidade de resmetirom e da indicação de semaglutida para MASH no Brasil.", "Elastografia pelo SUS em Betim."],
  guia: {
    resumo: "Esteatose no ultrassom é comum e quase sempre benigna; o que importa é **quem tem fibrose**. Calcule o **FIB-4** em todo paciente com DM2 ou obesidade metabólica: baixo risco fica na APS, o resto vai para elastografia. A doença que mais mata esses pacientes é a **cardiovascular**.",
    calcs: ["fib4"],
    secoes: [
     {t: "Estratificar", b: [
       {calc: "fib4"},
       {fluxo: [
         {t: "DM2, obesidade + fator metabólico ou TGO/TGP elevadas ≥ 6 meses"},
         {t: "Excluir álcool significativo, hepatites B/C e medicamentos"},
         {t: "FIB-4", ramos: [
           {r: "< 1,3 (< 2 se ≥ 65 anos)", n: [{t: "Baixo risco: APS, repetir em 1–3 anos", k: "ok"}]},
           {r: "Acima do corte", n: [{t: "Elastografia (ou hepatologia)", k: "warn"}, {t: "≥ 8 kPa → especialista", k: "stop"}]}
         ]}
       ], nota: "Consenso MASLD/MASH 2025 [F]. O corte superior clássico de 2,67 para alto risco consta em diretrizes anteriores [C]."},
       {ref: ["masld2025"]}
     ]},
     {t: "Tratar", b: [
       {ul: ["Perda de peso: ≥ 5% (esteatose), 7–10% (inflamação), ≥ 10% (fibrose) [F].", "Dieta mediterrânea, menos ultraprocessados e bebidas açucaradas; atividade física 150–300 min/semana moderada [F].", "DM2/obesidade: priorizar GLP-1 quando acessível; iSGLT2 trata o DM mas não é específico para MASH [F].", "Estatina é segura e indicada pelo risco cardiovascular [C]. Vitamina E não é rotina [F]."]},
       {perola: {t: "O fígado gorduroso morre do coração", x: "Na MASLD, a principal causa de morte é cardiovascular, não hepática. Controle PA, lipídios (estatina), glicose e tabagismo com o mesmo empenho [C].", d: "menos eventos cardiovasculares.", l: "C"}},
       {trio: {ideal: "Elastografia para estratificação; GLP-1 (semaglutida) ou resmetirom para MASH com fibrose F2–F3; programa estruturado de perda de peso.", sus: "FIB-4 na APS; elastografia restrita; nenhum fármaco específico para MASH incorporado; GLP-1 não incorporado para obesidade.", ponte: "Use o FIB-4 para filtrar quem realmente precisa de especialista; perda de peso com eMulti; encaminhe com prioridade os de alto risco."}},
       {ref: ["masld2025"]}
     ]}
    ]}
},
{
  id: "cr-demencia", modulo: "cr", nome: "Declínio cognitivo e demência na APS", sistema: "Idoso: cognição e medicamentos", risco: "moderado",
  ciap: "P70 · P20", cid: "F00 · F03 · G30",
  tags: "demência Alzheimer declínio cognitivo esquecimento MEEM 10-CS QMC8 BBRC fluência verbal teste do relógio causas reversíveis B12 TSH sífilis donepezila galantamina rivastigmina memantina CDR cuidador PCDT",
  S: "Paciente, ___ anos, escolaridade ___ anos, com esquecimento há ___ (relatado por ___). Progressão ___. Perda de função (dinheiro, remédios, telefone, se perder) ___. Humor ___. Alucinações/agitação ___. Sono ___. Quedas ___. Medicamentos (benzodiazepínicos, anticolinérgicos) ___. Álcool ___. Audição/visão ___.",
  O: "PA ___ | Exame neurológico ___\nTestes: 10-CS ___ | QMC8 ___ | MEEM ___ | Fluência verbal ___ | Relógio ___ | CDR ___.\nExames: hemograma ___ | creatinina ___ | eletrólitos ___ | TSH ___ | B12 ___ | albumina ___ | TGO/TGP ___ | sífilis ___ | HIV ___ | TC/RM ___.",
  A: "___ (comprometimento cognitivo leve / síndrome demencial provável ___ – estágio CDR ___).",
  P: "- Investigar causas reversíveis e delirium.\n- Rever medicamentos (benzodiazepínicos, anticolinérgicos).\n- Rastrear depressão e déficits sensoriais.\n- Neuroimagem.\n- Se critérios do PCDT: encaminhar/abrir processo no CEAF.\n- Plano de cuidado com família: segurança, direção, finanças, cuidador.",
  orient: "A memória pode piorar por várias causas, algumas tratáveis (tireoide, vitamina B12, depressão, remédios). Por isso pedimos exames.\nRotina, atividade física, contato social e boa audição e visão ajudam a preservar a memória.\nA família pode procurar apoio na UBS: cuidar também exige ser cuidado.",
  alarme: ["Confusão que começa de repente ou piora em horas/dias (delirium)", "Quedas repetidas", "Agressividade ou risco para si ou para outros", "Perda de peso e recusa alimentar"],
  encaminhar: "Início antes dos 65 anos, progressão rápida, sinais neurológicos focais, dúvida diagnóstica ou para iniciar anticolinesterásico → neurologia/geriatria. Delirium → avaliação no mesmo dia.",
  sus: {nacional: "PCDT Doença de Alzheimer 2025: donepezila, galantamina, rivastigmina e memantina pelo CEAF (critérios por MEEM e CDR); exames de investigação na APS; neuroimagem via regulação.", betim: "Fluxo do CEAF (Farmácia de Minas) e neurologia/geriatria em Betim: confirmar."},
  evid: {resumo: "O MS (2024) orienta identificar demência na APS com instrumentos breves (10-CS, QMC8, BBRC) e investigar causas reversíveis (hemograma, creatinina, eletrólitos, TSH, B12, albumina, enzimas hepáticas, sífilis, HIV e neuroimagem). O PCDT 2025 define o acesso a anticolinesterásicos e memantina por MEEM (ajustado à escolaridade) e CDR; os benefícios são modestos e sintomáticos.", certeza: "Moderada", fontes: ["ms_demencia2024", "pcdt_alz2025", "beers2023"]},
  mudancas: ["Item novo, alinhado ao PCDT de Alzheimer de 2025."],
  nv: ["Pontos de corte do 10-CS e ajuste por escolaridade: conferir no guia do MS 2024.", "Doses de titulação dos anticolinesterásicos: conferir PCDT/bula."],
  guia: {
    resumo: "Antes de rotular demência, **procure o que é tratável**: delirium, depressão, hipotireoidismo, B12, sífilis e, sobretudo, **remédios** (benzodiazepínicos e anticolinérgicos). Diagnóstico feito, o que mais muda a vida é o **plano de cuidado com a família**.",
    calcs: ["alz"],
    secoes: [
     {t: "Rastrear e investigar", b: [
       {ol: ["Queixa de memória (paciente ou família) ou perda funcional → teste breve: 10-CS (≤ 7 sugere avaliação) ou QMC8 (≥ 4) [F].", "Avaliação cognitiva: BBRC – fluência verbal (animais) ≤ 8 em analfabetos, ≤ 11 com 1–7 anos, ≤ 12 com ≥ 8 anos de estudo; teste do relógio [F].", "Excluir delirium, depressão, déficit auditivo/visual e medicamentos [F].", "Exames: hemograma, creatinina, eletrólitos, TSH, B12, albumina, enzimas hepáticas, sífilis, HIV; neuroimagem se disponível [F].", "Teste negativo com queixa: reavaliar pelo menos a cada 6 meses [F]."]},
       {perola: {t: "O remédio pode ser a doença", x: "Benzodiazepínicos, anticolinérgicos (amitriptilina, prometazina, oxibutinina) e opioides pioram a cognição e causam quedas no idoso. Desprescrever pode melhorar o quadro mais que qualquer anticolinesterásico [F].", d: "melhora cognitiva e menos quedas.", l: "F"}},
       {ref: ["ms_demencia2024", "beers2023"]}
     ]},
     {t: "Tratamento farmacológico no SUS (PCDT 2025)", b: [
       {calc: "alz"},
       {tab: {h: ["Medicamento", "Critério MEEM (> 4 anos / ≤ 4 anos de estudo) e CDR"], r: [
         ["Donepezila, galantamina ou rivastigmina", "MEEM 12–24 / 8–21 com CDR 1–2 (donepezila também MEEM 5–11 / 3–7 com CDR 3) [F]"],
         ["Memantina + anticolinesterásico", "MEEM 12–19 / 8–15 com CDR 2 (com donepezila também CDR 3, MEEM 5–11 / 3–7) [F]"],
         ["Memantina isolada", "Só CDR 3 com MEEM 5–11 / 3–7 [F]"]]}, nota: "Excluir no anticolinesterásico: bradicardia sintomática, BAV de 2º/3º grau, doença do nó sinusal, asma/DPOC grave descompensada; galantamina contraindicada em insuficiência hepática ou renal grave [F]. Medicamentos para sintomas comportamentais não foram incorporados [F]."},
       {ref: ["pcdt_alz2025"]}
     ]},
     {t: "Cuidado contínuo", b: [
       {ul: ["Estimulação cognitiva, psicoeducação, apoio ao cuidador e cuidados paliativos desde o diagnóstico (PCDT 2025) [F].", "Sintomas comportamentais: primeiro causas (dor, constipação, infecção, ambiente) e medidas não farmacológicas; antipsicóticos aumentam mortalidade na demência [F].", "Planejar: direção de veículos, finanças, segurança em casa, diretivas antecipadas [C].", "Rastrear sobrecarga e depressão do cuidador [C]."]},
       {trio: {ideal: "Diagnóstico precoce com biomarcadores quando muda conduta; equipe multiprofissional; apoio estruturado ao cuidador.", sus: "Diagnóstico clínico com testes breves e neuroimagem; biomarcadores não disponíveis; fármacos via CEAF conforme PCDT.", ponte: "A APS identifica, investiga causas reversíveis e organiza o cuidado; encaminhe para confirmar e abrir o CEAF quando os critérios forem atendidos."}},
       {ref: ["pcdt_alz2025", "beers2023"]}
     ]}
    ]}
},
{
  id: "cr-b12", modulo: "cr", nome: "Deficiência de vitamina B12", sistema: "Deficiências nutricionais", risco: "baixo",
  ciap: "B81 · T91", cid: "E53.8 · D51",
  tags: "vitamina B12 cobalamina metformina IBP omeprazol vegetariano gastrectomia bariátrica anemia megaloblástica neuropatia cianocobalamina oral intramuscular",
  S: "Paciente, ___ anos, com ___ (fadiga, parestesias, alteração de memória, glossite). Metformina há ___ anos ___. IBP há ___ ___. Dieta vegetariana/vegana ___. Bariátrica/gastrectomia ___. Álcool ___.",
  O: "Hb ___ | VCM ___ | B12 ___ | (homocisteína/ácido metilmalônico se disponível ___) | Exame neurológico: vibração ___, propriocepção ___.",
  A: "Deficiência de vitamina B12 ___ (com / sem anemia; com / sem neuropatia), provável causa ___.",
  P: "- Tratar: cianocobalamina oral 1.000–2.000 mcg/dia ou IM.\n- Sintomas neurológicos ou má absorção grave: preferir IM no início.\n- Usuário de metformina: dosar B12 anualmente.\n- Reavaliar a necessidade de IBP.\n- Repetir B12/hemograma em 2–3 meses.",
  rx: [
    {trilha: "evidencia", titulo: "Cianocobalamina oral (comprar)", texto: "USO ORAL\n1. Cianocobalamina 1.000 mcg ______ 30 comprimidos\n   Tomar 1 comprimido ao dia.", dose: "F", nota: "Cochrane 2018: oral 1.000–2.000 mcg/dia normaliza a B12 de forma semelhante à IM (certeza baixa), com menor custo. Funciona inclusive na anemia perniciosa pela absorção passiva [C]."},
    {trilha: "sus", titulo: "Cianocobalamina IM (RENAME – não consta na REMUME)", texto: "USO INTRAMUSCULAR\n1. Cianocobalamina 500 mcg/mL ______ ___ ampolas\n   Aplicar ___ mcg IM conforme esquema de ataque e manutenção.", dose: "NV", nota: "RENAME 2024 (Básico): cianocobalamina 500 mcg/mL injetável. Não localizada na REMUME Betim – confirmar com a farmácia. Esquemas de ataque/manutenção: conferir bula."}
  ],
  idealsus: {ideal: "Cianocobalamina oral em dose alta (1.000–2.000 mcg/dia) para a maioria; IM se sintomas neurológicos graves ou adesão incerta.", sus: "Cianocobalamina 500 mcg/mL injetável na RENAME (Básico); não consta na REMUME Betim; oral em dose alta não está na RENAME.", ponte: "Se a farmácia municipal não tiver a injetável, a oral de 1.000 mcg comprada é barata e equivalente na maioria; reserve a IM para casos neurológicos e pergunte à coordenação sobre aquisição."},
  orient: "A vitamina B12 é importante para o sangue e os nervos. Ela pode ficar baixa com metformina, remédios para o estômago, dieta sem carne ou cirurgia no estômago.\nTome o comprimido todos os dias. Se usa metformina, faça o exame de B12 uma vez por ano.",
  alarme: ["Formigamento que piora, perda de equilíbrio ou fraqueza nas pernas", "Confusão ou alteração de memória rápida", "Cansaço intenso com palidez e falta de ar"],
  encaminhar: "Anemia grave, pancitopenia, sintomas neurológicos graves ou sem resposta ao tratamento → hematologia/neurologia.",
  sus: {nacional: "RENAME 2024: cianocobalamina 500 mcg/mL injetável (Básico).", betim: "Não localizada na REMUME Betim (consultada no Projeto): confirmar."},
  evid: {resumo: "Revisão Cochrane (2018, 3 ECR) mostrou que B12 oral 1.000–2.000 mcg/dia normaliza os níveis séricos de forma semelhante à via IM, com menor custo (certeza baixa). A SBD/PCDT DM2 recomenda dosar B12 anualmente em usuários de metformina.", certeza: "Baixa a moderada", fontes: ["cochrane_b12", "sbd_sus", "rename", "remume"]},
  mudancas: ["Item novo."],
  nv: ["Esquema IM (doses de ataque e manutenção): conferir bula.", "Disponibilidade de cianocobalamina injetável na farmácia municipal de Betim."],
  guia: {
    resumo: "Pense em B12 em quem usa **metformina** ou **IBP** por anos, vegetarianos, bariátricos e idosos com parestesia ou declínio cognitivo. **A via oral em dose alta funciona** para a maioria – não é preciso injeção por anos.",
    secoes: [
     {t: "Quem dosar e como tratar", b: [
       {ul: ["Metformina: B12 anual [F].", "IBP prolongado, gastrectomia/bariátrica, dieta vegana, doença celíaca/Crohn, idosos com neuropatia ou demência [C].", "Oral 1.000–2.000 mcg/dia equivale à IM na normalização sérica (Cochrane, certeza baixa) [F].", "Sintomas neurológicos graves: iniciar IM e depois manter oral ou IM [C]."]},
       {perola: {t: "Metformina + parestesia = dose a B12", x: "Neuropatia em diabético não é sempre diabética: a deficiência de B12 pela metformina é comum e reversível se tratada cedo [C].", d: "menos neuropatia irreversível e quedas.", l: "C"}},
       {trio: {ideal: "Oral 1.000 mcg/dia ou IM conforme quadro; reavaliar IBP.", sus: "Injetável na RENAME, ausente na REMUME Betim; oral alta dose fora da RENAME.", ponte: "Oral comprada para a maioria; IM para casos neurológicos com articulação junto à farmácia municipal."}},
       {ref: ["cochrane_b12", "sbd_sus"]}
     ]}
    ]}
},
{
  id: "cr-polifarmacia", modulo: "cr", nome: "Polifarmácia e desprescrição no idoso", sistema: "Idoso: cognição e medicamentos", risco: "moderado",
  ciap: "A85 · A13", cid: "Z91.1 · Y57.9",
  tags: "polifarmácia desprescrição idoso Beers STOPP START benzodiazepínico IBP omeprazol sulfonilureia glibenclamida AAS prevenção primária anticolinérgico quedas cascata de prescrição",
  S: "Paciente, ___ anos, usa ___ medicamentos (lista com doses ___). Quedas ___. Tontura/hipotensão postural ___. Confusão ___. Hipoglicemias ___. Quem organiza os remédios ___. Automedicação/chás ___.",
  O: "PA deitado ___ / em pé ___ | Peso ___ | TFG ___ | HbA1c ___ | Na/K ___.",
  A: "Polifarmácia (___ medicamentos) com ___ potencialmente inapropriados (Beers/STOPP).",
  P: "- Revisão estruturada de cada medicamento: indicação, benefício, risco, meta.\n- Desprescrever 1 de cada vez, com plano e retorno.\n- Prioridades: ___.\n- Lista atualizada e caixa organizadora para o paciente/cuidador.",
  orient: "Vamos revisar seus remédios para tirar os que não ajudam mais ou podem fazer mal. Vamos fazer isso aos poucos, um de cada vez.\nNão pare nenhum remédio sozinho – alguns precisam ser reduzidos devagar.\nTraga todas as caixas (inclusive vitaminas, chás e remédios comprados) nas consultas.",
  alarme: ["Quedas ou tonturas ao levantar", "Confusão nova", "Hipoglicemia (suor frio, tremor, confusão)", "Sangramento"],
  encaminhar: "Casos complexos: discussão com farmacêutico clínico, eMulti ou geriatria (teleconsultoria).",
  sus: {nacional: "Revisão de medicamentos é ação da APS; apoio de farmacêutico do NASF/eMulti quando disponível.", betim: "Farmácia clínica/eMulti em Betim: confirmar."},
  evid: {resumo: "Os Critérios de Beers 2023 recomendam evitar iniciar AAS em prevenção primária, evitar sulfonilureias no idoso (todas da classe), preferir DOAC à varfarina para início, evitar rivaroxabana no uso prolongado e reforçam riscos de IBP, benzodiazepínicos, anticolinérgicos, AINE e antipsicóticos na demência. Desprescrição gradual e planejada é segura e reduz eventos adversos em estudos observacionais e alguns ECR.", certeza: "Moderada", fontes: ["beers2023", "stopp3", "desprescr_ibp"]},
  mudancas: ["Item novo."],
  nv: [],
  guia: {
    resumo: "Em idoso com 5 ou mais medicamentos, a pergunta não é 'o que acrescentar', mas **o que tirar**. Os campeões de dano evitável: **benzodiazepínicos, sulfonilureias, anticolinérgicos, AINE e IBP sem indicação**.",
    secoes: [
     {t: "Alvos prioritários", b: [
       {tab: {h: ["Medicamento", "Problema", "Conduta"], r: [
         ["Benzodiazepínicos", "Quedas, fratura, delirium, dependência", "Reduzir 10–25% a cada 2–4 semanas; TCC-I para insônia [C]"],
         ["Sulfonilureias (glibenclamida)", "Hipoglicemia grave, eventos CV (Beers 2023: evitar toda a classe)", "Trocar/reduzir; meta de HbA1c individualizada (< 7,5–8%) [F]"],
         ["IBP prolongado", "Pneumonia, fratura, C. difficile, B12", "Reduzir dose ou usar sob demanda se sem indicação de longo prazo [F] [C]"],
         ["AAS em prevenção primária", "Sangramento sem benefício líquido", "Não iniciar; considerar retirar (Beers 2023) [F]"],
         ["Anticolinérgicos (amitriptilina, prometazina, oxibutinina)", "Confusão, constipação, retenção, quedas", "Substituir ou retirar [F]"],
         ["AINE crônico", "Sangramento, DRC, IC, HAS", "Evitar; paracetamol/tópicos [F]"],
         ["Antipsicóticos na demência", "Mortalidade, AVC", "Tentar retirada; manejo não farmacológico [F]"]]}},
       {ref: ["beers2023", "stopp3", "desprescr_ibp", "sbd_sus"]}
     ]},
     {t: "Como desprescrever", b: [
       {ol: ["Lista completa (inclusive comprados e chás) – 'saco de remédios' [C].", "Para cada um: indicação atual, meta, tempo até benefício × expectativa de vida [C].", "Priorizar os de maior dano e menor benefício [C].", "Um de cada vez, com redução gradual quando houver efeito rebote (benzodiazepínico, betabloqueador, IBP, antidepressivo) [C].", "Combinar retorno e sinais de retorno dos sintomas [C]."]},
       {perola: {t: "Desconfie da cascata", x: "Edema por anlodipino tratado com furosemida; tremor por metoclopramida tratado com biperideno; tosse do IECA tratada com xarope. Antes de acrescentar, pergunte se o sintoma é efeito adverso [C].", d: "menos medicamentos e menos eventos adversos.", l: "C"}},
       {ref: ["stopp3"]}
     ]}
    ]}
},
{
  id: "cr-hipertireoidismo", modulo: "cr", nome: "Hipertireoidismo e TSH baixo", sistema: "Tireoide", risco: "moderado",
  ciap: "T85", cid: "E05",
  tags: "hipertireoidismo TSH baixo T4 livre T3 Graves bócio tóxico nodular tiamazol metimazol propiltiouracil PTU propranolol agranulocitose subclínico iodo radioativo gestação",
  alerta: "Febre alta, taquicardia intensa, agitação/confusão, vômitos ou IC em paciente com hipertireoidismo: crise tireotóxica – urgência. Febre ou dor de garganta em uso de tiamazol/PTU: hemograma no mesmo dia (agranulocitose).",
  S: "Paciente, ___ anos, com ___ (palpitação, tremor, perda de peso, intolerância ao calor, diarreia, insônia, ansiedade). Olhos ___ (proptose, irritação). Bócio ___. Uso de amiodarona/lítio/levotiroxina ___. Gestação ___. Cardiopatia ___. Osteoporose ___.",
  O: "PA ___ | FC ___ (ritmo ___) | Peso ___ | Tremor ___ | Tireoide ___ | Olhos ___\nTSH ___ | T4L ___ | T3 ___ | TRAb ___ | Hemograma ___ | TGO/TGP ___ | ECG ___.",
  A: "Hipertireoidismo ___ (franco / subclínico) provavelmente por ___ (Graves / BMNT / adenoma tóxico / tireoidite / medicamento).",
  P: "- Betabloqueador para sintomas adrenérgicos.\n- Tiamazol por faixa de T4L (PTU no 1º trimestre ou crise).\n- Hemograma e TGO/TGP basais; orientar sinais de agranulocitose.\n- T4L/T3 a cada 1–3 meses (TSH pode ficar suprimido meses).\n- Encaminhar à endocrinologia.",
  rx: [
    {trilha: "evidencia", titulo: "Tiamazol (RENAME – não consta na REMUME)", texto: "USO ORAL\n1. Tiamazol 10 mg ______ ___ comprimidos\n   Tomar ___ comprimido(s) ao dia (dose conforme T4 livre).", dose: "F", nota: "TelessaúdeRS: T4L 1–1,5× o limite superior: 5–10 mg/dia; 1,5–2×: 10–20 mg/dia; 2–3×: 20–40 mg/dia em 1–2 tomadas; manutenção 5–10 mg/dia. Escolha por menor hepatotoxicidade. RENAME (Básico) tem 5 e 10 mg; REMUME Betim não lista."},
    {trilha: "sus", titulo: "Propiltiouracila (REMUME)", texto: "USO ORAL\n1. Propiltiouracila 100 mg ______ ___ comprimidos\n   Tomar 1 comprimido de 8 em 8 horas (300 mg/dia).", dose: "F", nota: "TelessaúdeRS: indicada na crise tireotóxica e no 1º trimestre da gestação; 300 mg/dia em 2–3 tomadas (até 600–900 mg/dia). Fora dessas situações, maior risco de hepatotoxicidade grave que o tiamazol."},
    {trilha: "ambos", titulo: "Propranolol para sintomas (REMUME)", texto: "USO ORAL\n1. Propranolol 40 mg ______ 60 comprimidos\n   Tomar ½ a 1 comprimido de 12 em 12 horas.", dose: "F", nota: "TelessaúdeRS: 20–40 mg 2×/dia, ajustar por sintomas, FC e PA; reduzir após controle. Evitar na asma."}
  ],
  idealsus: {ideal: "Tiamazol como antitireoidiano de escolha (exceto 1º trimestre/crise), com betabloqueador; iodo radioativo ou cirurgia como definitivos.", sus: "Tiamazol 5 e 10 mg na RENAME (Básico), mas a REMUME Betim lista apenas propiltiouracila 100 mg e propranolol 40 mg.", ponte: "Confirme com a farmácia municipal a aquisição de tiamazol; se não houver, PTU com vigilância hepática enquanto aguarda endocrinologia, ou tiamazol comprado (baixo custo)."},
  orient: "Tome o remédio da tireoide todos os dias. O controle leva algumas semanas.\nSe tiver febre, dor de garganta ou feridas na boca, pare o remédio e procure a UBS no mesmo dia para um exame de sangue.\nPele ou olhos amarelos, urina escura: procure a UBS.\nNão fume – piora os problemas nos olhos.",
  alarme: ["Febre ou dor de garganta em uso do remédio", "Pele ou olhos amarelos", "Coração muito acelerado, falta de ar ou confusão", "Olho vermelho, dor ou visão dupla"],
  encaminhar: "Hipertireoidismo franco ou subclínico → endocrinologia (iniciar antitireoidiano e betabloqueador enquanto aguarda). Oftalmopatia moderada/grave → oftalmologia. Gestante → pré-natal de alto risco e endocrinologia.",
  sus: {nacional: "RENAME 2024: tiamazol 5 e 10 mg, propiltiouracila 100 mg, propranolol (Básico).", betim: "REMUME Betim: propiltiouracila 100 mg e propranolol 40 mg; tiamazol não listado."},
  evid: {resumo: "Tiamazol é o antitireoidiano de escolha pelo menor risco de hepatotoxicidade grave; PTU fica para crise tireotóxica e 1º trimestre. Em Graves, tratamento por 12–18 meses e, sem remissão, terapia definitiva. Subclínico com TSH < 0,1: tratar se sintomas, ≥ 65 anos, cardiopatia ou osteoporose.", certeza: "Moderada", fontes: ["tele_hiper", "rename", "remume"]},
  mudancas: ["Item novo."],
  nv: ["Disponibilidade de tiamazol em Betim.", "Periodicidade de hemograma/TGO-TGP durante o tratamento: conferir bula."],
  guia: {
    resumo: "TSH baixo: confirme com **T4 livre (e T3)**, controle os sintomas com **betabloqueador** e inicie **tiamazol** enquanto aguarda o especialista. Ensine a regra de ouro: **febre ou dor de garganta = parar e fazer hemograma no mesmo dia**.",
    secoes: [
     {t: "Interpretar", b: [
       {tab: {h: ["TSH", "T4L / T3", "Interpretação"], r: [
         ["Baixo", "T4L alto", "Hipertireoidismo franco [F]"],
         ["Baixo", "T4L normal, T3 alto", "T3-toxicose (hipertireoidismo) [F]"],
         ["Baixo", "Normais", "Subclínico – repetir TSH para confirmar [F]"],
         ["Normal/alto", "T4L alto com clínica", "Suspeitar de causa central → endocrinologia [F]"]]}, nota: "TRAb e cintilografia ajudam a definir a causa, mas não são necessários para iniciar tratamento ou encaminhar [F]."},
       {ref: ["tele_hiper"]}
     ]},
     {t: "Tratar e acompanhar", b: [
       {ul: ["Tiamazol por faixa de T4L (5–40 mg/dia); manutenção 5–10 mg/dia [F].", "Propranolol 20–40 mg 2×/dia para sintomas adrenérgicos [F].", "Controle em 6–12 semanas; acompanhar por T4L/T3, pois o TSH pode ficar suprimido 6–12 meses [F].", "Graves: 12–18 meses de antitireoidiano; sem remissão, iodo radioativo (1ª linha definitiva) ou cirurgia [F].", "Gestação: PTU no 1º trimestre, tiamazol a partir do 2º; tiamazol na amamentação [F]."]},
       {tab: {h: ["Subclínico", "Tratar?"], r: [
         ["TSH < 0,1 persistente", "Sim se sintomas, ≥ 65 anos, cardiopatia, osteoporose ou pós-menopausa sem proteção óssea; sugerido nos demais [F]"],
         ["TSH 0,1 até o limite inferior", "Considerar se ≥ 65 anos, osteoporose, cardiopatia ou sintomas [F]"]]}},
       {perola: {t: "Idoso com FA nova: peça TSH", x: "Hipertireoidismo, inclusive subclínico, aumenta o risco de FA e perda óssea no idoso. TSH é exame obrigatório na FA de início recente [C].", d: "tratar a causa e reduzir FA e fraturas.", l: "C"}},
       {ref: ["tele_hiper"]}
     ]}
    ]}
},
{
  id: "cr-les", modulo: "cr", nome: "Lúpus eritematoso sistêmico: suspeita e seguimento compartilhado", sistema: "Reumatologia e osso", risco: "alto",
  ciap: "L99", cid: "M32",
  tags: "lúpus LES FAN anti-DNA complemento hidroxicloroquina nefrite lúpica proteinúria síndrome antifosfolípide prednisona CEAF retinopatia",
  alerta: "LES com proteinúria nova, creatinina em ascensão, plaquetas < 30 mil, anemia hemolítica, serosite importante, manifestação neurológica ou febre em imunossuprimido: avaliação urgente.",
  S: "Paciente, ___ anos, com ___ (artrite, fotossensibilidade, eritema malar, úlceras orais, alopecia, Raynaud, serosite, febre, perda de peso). LES diagnosticado em ___. Medicamentos: hidroxicloroquina ___, prednisona ___ mg, imunossupressor ___. Gestação/desejo ___. Contracepção ___. Trombose prévia ___.",
  O: "PA ___ | Edema ___ | Pele/mucosas ___ | Articulações ___\nHemograma ___ | Creatinina ___ | EAS ___ | Proteína/creatinina urinária ___ | C3/C4 ___ | Anti-DNA ___ | aPL ___ | FAN ___ (padrão ___).",
  A: "LES ___ (ativo/inativo), acometimento ___; ou suspeita de LES com FAN ___.",
  P: "- Suspeita: FAN apenas com clínica sugestiva; exames mínimos e reumatologia.\n- LES: manter hidroxicloroquina; prednisona na menor dose (≤ 5 mg/dia na manutenção).\n- EAS + proteína/creatinina urinária a cada 3–6 meses.\n- Avaliação oftalmológica conforme CEAF/tempo de uso.\n- Vacinas, risco CV, osso, contracepção.",
  orient: "O lúpus tem tratamento e controle. A hidroxicloroquina protege contra crises e problemas nos rins mesmo quando você está bem – não pare.\nUse protetor solar todos os dias.\nPlaneje a gravidez com a equipe: alguns remédios precisam ser trocados antes.\nUrina com espuma, inchaço nas pernas, febre ou manchas roxas: procure a UBS.",
  alarme: ["Urina com espuma, inchaço ou pressão alta nova", "Manchas roxas, sangramento", "Febre em uso de imunossupressor", "Dor no peito ao respirar, falta de ar", "Convulsão, confusão ou alteração de comportamento"],
  encaminhar: "Toda suspeita → reumatologia (prioridade). Nefrite, citopenia grave, serosite com repercussão, neurolúpus, vasculite → urgência.",
  sus: {nacional: "PCDT LES 2022: hidroxicloroquina 400 mg e cloroquina 150 mg (CEAF), imunossupressores no CEAF; prednisona Básico; belimumabe não incorporado (2023).", betim: "Prednisona na REMUME Betim; hidroxicloroquina via CEAF (Farmácia de Minas)."},
  evid: {resumo: "EULAR 2023: hidroxicloroquina para todos (dose ≤ 5 mg/kg/dia), glicocorticoide na menor dose (manutenção ≤ 5 mg/dia de prednisona) e poupador precoce, rastreio regular de nefrite e manejo de risco CV, infeccioso e ósseo. O CEAF exige FAN, hemograma, EAS, β-hCG em idade fértil e avaliação oftalmológica válida por 12 meses.", certeza: "Moderada", fontes: ["eular_les2023", "pcdt_les2022", "rename", "remume"]},
  mudancas: ["Item novo."],
  nv: ["Fluxo de reumatologia e CEAF em Betim/MG."],
  guia: {
    resumo: "Na APS, o LES exige duas habilidades: **não pedir FAN sem clínica** (FAN baixo título é comum em saudáveis) e, no paciente diagnosticado, **não deixar a nefrite passar** (EAS + proteína/creatinina a cada 3–6 meses) e **não deixar a hidroxicloroquina parar**.",
    secoes: [
     {t: "Suspeita", b: [
       {ul: ["Pedir FAN só com suspeita clínica (≥ 2 sistemas); 1:80 isolado sem clínica não deve gerar cascata [C].", "FAN negativo torna LES muito improvável; padrão pontilhado fino denso isolado reduz a chance de doença sistêmica [C].", "Com FAN positivo e clínica: hemograma, creatinina, EAS, proteína/creatinina urinária, C3/C4, anti-DNA, anti-Sm, antifosfolípides – e reumatologia [F].", "Lúpus induzido por fármaco (hidralazina, isoniazida, minociclina, anti-TNF): revisar a lista [C]."]},
       {ref: ["eular_les2023"]}
     ]},
     {t: "Seguimento compartilhado", b: [
       {tab: {h: ["Pilar", "Na APS"], r: [
         ["Hidroxicloroquina", "Para todos salvo contraindicação, ≤ 5 mg/kg/dia; adesão é a principal causa de crise evitável [F]"],
         ["Glicocorticoide", "Menor dose possível; manutenção ≤ 5 mg/dia de prednisona [F]"],
         ["Rim", "EAS + proteína/creatinina urinária a cada 3–6 meses; proteinúria > 0,5 g/dia ou sedimento ativo → urgente [F]"],
         ["Olhos", "Avaliação oftalmológica (exigida no CEAF, validade 12 meses) [F]"],
         ["Gestação", "Planejar com doença inativa ≥ 6 meses; suspender metotrexato/micofenolato antes; evitar estrogênio se aPL+ [C]"],
         ["Risco CV, osso, vacinas", "PA, lipídios, tabaco; proteção óssea com corticoide; influenza e pneumocócica; evitar vivas se imunossuprimido [F]"]]}},
       {trio: {ideal: "Hidroxicloroquina + poupadores de corticoide; belimumabe/anifrolumabe se resposta insuficiente.", sus: "Hidroxicloroquina, cloroquina e imunossupressores via CEAF; belimumabe não incorporado (2023).", ponte: "Garanta a renovação semestral da LME e a avaliação oftalmológica; monitore os imunossupressores (hemograma, TGO/TGP) junto com a reumatologia."}},
       {ref: ["eular_les2023", "pcdt_les2022"]}
     ]}
    ]}
}
);
