// ───────────── LOTE 5 – revisão 09/10/2026
Object.assign(FONTES, {
  nt_nmvr: {t: "Ministério da Saúde. Nota Técnica Conjunta nº 23/2024 (SVSA/SECTICS/SAPS) – nirmatrelvir/ritonavir; conferida via SMS Belo Horizonte, Nota Técnica nº 013/2026 (norma municipal MG).", f: "F", url: "https://prefeitura.pbh.gov.br/sites/default/files/estrutura-de-governo/saude/2026/29-04-26-smsa-nt-013-2026-nirma-riton.pdf"},
  nt_coqueluche: {t: "Ministério da Saúde. Nota Técnica Conjunta nº 165/2025-DPNI/SVSA/MS – tratamento e quimioprofilaxia da coqueluche (norma).", f: "F", url: "https://prefeitura.sp.gov.br/documents/d/saude/sei_ms-0047243281-nota-tecnica-conjunta-n-165-2025-dpni-svsa-ms-pdf"},
  lepto: {t: "CVE/SES-SP. Informe técnico leptospirose, revisão out/2023, baseado em MS – Leptospirose: Diagnóstico e Manejo Clínico, 2014.", f: "F", url: "https://www.saude.sp.gov.br/resources/cve-centro-de-vigilancia-epidemiologica/areas-de-vigilancia/doencas-de-transmissao-por-vetores-e-zoonoses/doc/lepto/infteclepto20232024.pdf"},
  cdc_dip: {t: "CDC. Sexually Transmitted Infections Treatment Guidelines, 2021 – DIP (conferido apenas em fonte secundária: tabela do MSD Manuals). Esquema do PCDT IST 2022 não aberto nesta sessão.", f: "C", url: "https://www.msdmanuals.com/pt/profissional/multimedia/table/esquemas-de-tratamento-para-doença-inflamatória-pélvica"},
  acg_drge: {t: "Katz PO et al. ACG Clinical Guideline for the Diagnosis and Management of GERD, 2022 (diretriz).", f: "C", url: ""},
  cochrane_laringite: {t: "Reveiz L, Cardona AF. Antibiotics for acute laryngitis in adults. Cochrane, 2015 (revisão sistemática).", f: "C", url: ""},
  chest_tosse: {t: "CHEST Expert Panel – diretrizes de tosse aguda/subaguda (2006, atualizações 2017–2020) (diretriz).", f: "C", url: ""},
  abscesso_ecr: {t: "Talan DA et al. NEJM 2016 (SMX-TMP × placebo após drenagem) e Daum RS et al. NEJM 2017 (abscessos ≤ 5 cm) (ECRs).", f: "C", url: ""},
  malassezia: {t: "Hald M et al. Evidence-based Danish guidelines for the treatment of Malassezia-related skin diseases (pitiríase versicolor, dermatite seborreica). Acta Derm Venereol, 2015 (diretriz).", f: "C", url: ""},
  ectoparasitoses: {t: "CDC – Zoonotic hookworm / cutaneous larva migrans; revisões de Heukelbach J e Feldmeier H sobre tungíase e miíase no Brasil (revisões).", f: "C", url: ""},
  cochrane_verruga: {t: "Kwok CS et al. Topical treatments for cutaneous warts. Cochrane, 2012 (revisão sistemática).", f: "C", url: ""},
  aftas: {t: "Revisões sistemáticas sobre estomatite aftosa recorrente (corticoide tópico como 1ª linha; investigação de causas sistêmicas) (revisões).", f: "C", url: ""},
  palpitacoes: {t: "Raviele A et al. EHRA position paper – Management of patients with palpitations, Europace 2011 (consenso).", f: "C", url: ""},
  dor_toracica: {t: "Gulati M et al. AHA/ACC Guideline for the Evaluation and Diagnosis of Chest Pain, 2021; Bösner S et al. Marburg Heart Score, CMAJ 2010 (diretriz; estudo de validação na APS).", f: "C", url: ""},
  ivc: {t: "ESVS 2022 Clinical Practice Guidelines on Chronic Venous Disease; Martinez-Zapata MJ et al. Phlebotonics for venous insufficiency, Cochrane 2020 (diretriz; revisão sistemática).", f: "C", url: ""},
  fascite: {t: "Koc TA et al. Heel Pain – Plantar Fasciitis: Revision 2023. JOSPT Clinical Practice Guideline (diretriz).", f: "C", url: ""},
  menopausa: {t: "The 2022 Hormone Therapy Position Statement of The North American Menopause Society; The 2023 Nonhormone Therapy Position Statement (NAMS) (consensos).", f: "C", url: ""},
  bartholin: {t: "Revisões sobre cisto e abscesso da glândula de Bartholin (Am Fam Physician; revisões sistemáticas de cateter de Word × marsupialização) (revisões).", f: "C", url: ""},
  nausea: {t: "Revisões sistemáticas de antieméticos em adultos no pronto atendimento (metoclopramida, ondansetrona e placebo com eficácia semelhante em muitos casos) (revisões).", f: "C", url: ""}
});

CONDICOES.push(
// ───────────────────────── RESPIRATÓRIO E ORL
{
id: "covid", nome: "COVID-19 leve", sistema: "Respiratório e ORL", risco: "moderado",
ciap: "R80 · A77", cid: "U07.1", tags: "covid coronavírus teste antígeno paxlovid nirmatrelvir isolamento",
alerta: "SpO₂ < 94%, dispneia, FR ≥ 24, confusão, hipotensão ou piora após o 5º–7º dia: avaliar SRAG → urgência.",
S: `Paciente, ___ anos, com ___ (febre, tosse, odinofagia, coriza, mialgia, anosmia, cefaleia) há ___ dias (dia 1 = início dos sintomas). Dispneia ___.
Teste: ___ (antígeno / RT-PCR) em ___ – resultado ___. Vacinação: ___ doses, última em ___.
Fatores de risco: idade ≥ 65 ___; imunossupressão ___ (transplante, HIV, quimioterapia, prednisona ≥ 20 mg/dia ≥ 14 dias, imunobiológico); DRC (TFG ___); gestação ___. Medicamentos em uso (interações com ritonavir): ___.`,
O: `BEG, eupneico.
${VITAIS}
Orofaringe ___. AR: ___.`,
A: `COVID-19 leve, ___º dia de sintomas, sem sinais de SRAG. ___ (com / sem) critério para nirmatrelvir/ritonavir.`,
P: `- Sintomáticos, hidratação.
- Nirmatrelvir/ritonavir se: teste confirmatório (antígeno de serviço de saúde ou RT-PCR; autoteste não vale) + até o 5º dia + ≥ 65 anos ou imunossuprimido ≥ 18 anos, sem necessidade de O₂.
- Revisar interações (ritonavir inibe CYP3A4) e função renal antes de prescrever.
- Isolamento e máscara conforme orientação vigente.
- Notificar conforme fluxo local (SRAG e óbitos sempre).`,
rx: [
 {trilha: "ambos", titulo: "Sintomáticos", texto: `USO ORAL
1. Dipirona 500 mg ______ 1 caixa
   Tomar 1 a 2 comprimidos até de 6/6h se febre ou dor.
   OU
2. Paracetamol 500 mg – 1 a 2 comprimidos até de 6/6h (máximo 4 g/dia).`, dose: "NV"},
 {trilha: "ambos", titulo: "Antiviral – grupos elegíveis (NT 23/2024)", texto: `USO ORAL
1. Nirmatrelvir 150 mg + ritonavir 100 mg ______ 1 kit (30 comprimidos)
   Tomar 2 comprimidos de nirmatrelvir + 1 comprimido de ritonavir juntos, de 12/12h, por 5 dias.
   TFG 30–59: 1 comprimido de nirmatrelvir + 1 de ritonavir de 12/12h por 5 dias.`, dose: "F", nota: "Contraindicado: > 5 dias de sintomas, peso < 40 kg, TFG < 30 ou diálise, hepatopatia grave (Child C). Gestação: não recomendado; amamentação: suspender durante e até 7 dias após. Checar interações (ex.: estatinas, anticoagulantes, amiodarona, alguns anticonvulsivantes)."}
],
orient: `A maioria das pessoas melhora em 7 a 10 dias. Beba bastante líquido e descanse.
Use máscara e evite contato com idosos e pessoas com imunidade baixa enquanto tiver sintomas.
Se recebeu o antiviral, tome todos os comprimidos por 5 dias e avise sobre qualquer outro remédio que use.`,
alarme: ["Falta de ar ou cansaço ao falar", "Saturação abaixo de 94% (se tiver oxímetro)", "Dor ou pressão no peito", "Confusão ou sonolência excessiva", "Lábios arroxeados", "Febre que volta ou piora depois do 5º dia"],
encaminhar: "SRAG, hipoxemia ou descompensação de comorbidade → urgência.",
sus: {nacional: "RENAME 2024: nirmatrelvir+ritonavir (Estratégico); NT Conjunta 23/2024 define critérios.", betim: "REMUME Betim: nirmatrelvir 150 mg + ritonavir 100 mg consta; dipirona e paracetamol disponíveis. Fluxo de dispensação em Betim: não verificado."},
evid: {resumo: "Nirmatrelvir/ritonavir reduziu hospitalização e morte em não vacinados de alto risco (EPIC-HR); o benefício absoluto é menor em vacinados e em quem tem baixo risco. O MS restringe o uso a ≥ 65 anos e imunossuprimidos ≥ 18 anos, até o 5º dia, com teste confirmatório.", certeza: "Moderada (estimada) para alto risco não vacinado", fontes: ["nt_nmvr", "rename", "remume"]},
mudancas: ["Migrado do Notion ('COVID-19 formas leves a moderadas').", "Incluídos os critérios atuais do MS para nirmatrelvir/ritonavir, ajuste renal e interações."],
nv: ["Prazo de isolamento e regras de notificação vigentes: conferir orientação do MS/SES-MG."]
},
{
id: "laringite", nome: "Laringite aguda (rouquidão)", sistema: "Respiratório e ORL", risco: "baixo",
ciap: "R77", cid: "J04.0", tags: "rouquidão afonia voz laringite",
alerta: "Estridor, dispneia, sialorreia ou disfagia intensa (epiglotite/abscesso): urgência. Rouquidão > 3–4 semanas, sobretudo em tabagista: laringoscopia.",
S: `Paciente, ___ anos, com rouquidão há ___ dias, após ___ (IVAS / uso excessivo da voz). Tosse ___, odinofagia ___, febre ___.
Dispneia/estridor ___. Disfagia ___. Tabagismo ___. Uso profissional da voz ___. Refluxo ___.`,
O: `BEG, sem estridor.
${VITAIS}
Orofaringe ___. Linfonodos ___. AR ___.`,
A: `Laringite aguda provavelmente viral, sem sinais de obstrução de via aérea.`,
P: `- Repouso vocal relativo (não sussurrar), hidratação, umidificação.
- Antibiótico não indicado.
- Reavaliar se persistir > 3 semanas.`,
rx: [
 {trilha: "ambos", titulo: "Sintomáticos", texto: `USO ORAL
1. Paracetamol 500 mg ______ 1 caixa
   Tomar 1 a 2 comprimidos até de 6/6h se dor.

ORIENTAÇÕES
2. Repouso vocal; inalação de vapor (banho morno); beber água ao longo do dia.`, dose: "NV"}
],
orient: `A rouquidão costuma melhorar sozinha em 1 a 2 semanas. Antibiótico não ajuda.
Fale pouco e em tom normal; cochichar força mais as cordas vocais. Beba bastante água e evite cigarro e álcool.`,
alarme: ["Barulho ao respirar ou falta de ar", "Dificuldade para engolir a saliva", "Rouquidão por mais de 3 semanas", "Sangue na tosse"],
encaminhar: "Rouquidão > 3–4 semanas → otorrinolaringologia (laringoscopia).",
sus: {nacional: "RENAME 2024: paracetamol, dipirona (Básico).", betim: "REMUME Betim: paracetamol e dipirona disponíveis."},
evid: {resumo: "Revisão Cochrane: antibióticos não mostraram benefício clinicamente relevante na laringite aguda do adulto. Rouquidão persistente exige laringoscopia para afastar lesão estrutural.", certeza: "Baixa (estimada)", fontes: ["cochrane_laringite", "rename", "remume"]},
mudancas: ["Migrado do Notion ('Laringite aguda viral').", "Reforçado o critério de 3–4 semanas para laringoscopia."],
nv: []
},
{
id: "tosse-subaguda", nome: "Tosse subaguda pós-infecciosa (3–8 semanas)", sistema: "Respiratório e ORL", risco: "baixo",
ciap: "R05", cid: "R05", tags: "tosse persistente pós-viral tosse depois de gripe",
alerta: "Tosse ≥ 3 semanas: investigar tuberculose (modelo próprio). Hemoptise, perda de peso, febre persistente ou dispneia progressiva: investigação ampliada.",
S: `Paciente, ___ anos, com tosse ___ (seca/produtiva) há ___ semanas, iniciada após quadro de ___ (IVAS). Paroxismos/guincho/vômito pós-tosse ___ (coqueluche?).
Sibilância ___, pirose/refluxo ___, gotejamento pós-nasal ___. Uso de IECA ___. Tabagismo ___. Febre, perda de peso, hemoptise ___.`,
O: `BEG.
${VITAIS}
Orofaringe/rinoscopia ___. AR: ___ (sibilos?).`,
A: `Tosse subaguda pós-infecciosa provável, sem sinais de pneumonia ou alarme.`,
P: `- Explicar evolução autolimitada (resolve em até 8 semanas).
- Pesquisar e tratar causas: coqueluche, rinossinusite/gotejamento, asma/hiper-reatividade, DRGE, IECA.
- Sintomático respiratório (≥ 3 semanas): baciloscopia/TRM-TB.
- Antibiótico não indicado (exceto coqueluche suspeita).
- RX se sinais clínicos ou > 8 semanas.`,
rx: [
 {trilha: "ambos", titulo: "Sintomáticos", texto: `USO ORAL
1. Mel: 1 colher de chá antes de dormir (adultos e crianças > 1 ano).

USO INALATÓRIO (se tosse incômoda e persistente)
2. Brometo de ipratrópio 20 mcg/dose ______ 1 frasco
   Inalar 2 jatos de 6/6h por até 2–3 semanas.`, dose: "NV", nota: "Ipratrópio: sugerido pela diretriz CHEST para tosse pós-infecciosa; evidência limitada."}
],
orient: `Tosse depois de um resfriado pode durar várias semanas e melhora sozinha. Antibiótico e xarope para tosse não aceleram a melhora.
Mel antes de dormir ajuda a acalmar. Evite cigarro e ambientes com fumaça.`,
alarme: ["Sangue no escarro", "Falta de ar ou chiado", "Febre ou perda de peso", "Tosse em crises com guincho ou vômito", "Tosse por mais de 8 semanas"],
encaminhar: "Tosse > 8 semanas sem causa → investigação de tosse crônica (RX, espirometria; pneumologia se necessário).",
sus: {nacional: "RENAME 2024: brometo de ipratrópio aerossol 20 mcg/dose (Básico).", betim: "REMUME Betim: ipratrópio aerossol 20 mcg/dose e solução inalatória disponíveis."},
evid: {resumo: "A tosse pós-infecciosa é autolimitada. Antitussígenos e antibióticos não têm benefício consistente; mel tem evidência de baixa certeza em crianças. A CHEST sugere ipratrópio inalado e corticoide inalatório em casos selecionados.", certeza: "Baixa (estimada)", fontes: ["chest_tosse", "cochrane_resfriado", "rename", "remume"]},
mudancas: ["Migrado do Notion ('Tosse aguda ou subaguda pós-infecciosa').", "Incluídas a investigação de TB a partir de 3 semanas e a busca de coqueluche."],
nv: ["Doses: conferir bula."]
},
// ───────────────────────── INFECCIOSAS E VIGILÂNCIA
{
id: "coqueluche", nome: "Coqueluche – suspeita", sistema: "Infecciosas e vigilância", risco: "alto",
ciap: "R71", cid: "A37.9", tags: "coqueluche pertussis tosse comprida guincho tosse paroxística azitromicina quimioprofilaxia",
alerta: "Lactente < 6 meses, apneia, cianose, convulsão ou desidratação: urgência. Comunicar a vigilância epidemiológica.",
S: `Paciente, ___ anos, com tosse há ___ dias, em ___ (paroxismos / guincho inspiratório / vômito pós-tosse / apneia). Febre ___ (geralmente baixa ou ausente).
Contato com caso suspeito/confirmado ___. Vacinação (penta/DTP/dTpa): ___. Gestação ___ semanas. Contatos domiciliares: ___ (lactentes < 1 ano? gestantes? profissionais de saúde?).`,
O: `___ estado geral; entre as crises, ___.
${VITAIS}
AR: ___ (geralmente sem alterações entre paroxismos). Hemorragia subconjuntival ___.`,
A: `Caso suspeito de coqueluche.`,
P: `- Coletar swab de nasofaringe para cultura/PCR, preferencialmente antes do antibiótico e até 3 semanas do início da tosse.
- Iniciar macrolídeo sem aguardar resultado.
- Notificar à vigilância epidemiológica; investigar contatos.
- Quimioprofilaxia (mesmo esquema) para contatos próximos prioritários: < 1 ano, imunocomprometidos ou com doença pulmonar, contatos domiciliares de vulneráveis, gestantes ≥ 32 semanas não vacinadas na gestação, profissionais de saúde e de creches.
- Afastamento até completar 5 dias de antibiótico.
- Atualizar vacinação (dTpa em toda gestação a partir de 20 semanas).`,
rx: [
 {trilha: "ambos", titulo: "Azitromicina (1ª escolha) – adulto e ≥ 12 anos/≥ 45 kg", texto: `USO ORAL
1. Azitromicina 500 mg ______ 5 comprimidos
   Tomar 1 comprimido 1 vez ao dia por 5 dias.
   (Esquema da NT 165/2025 quando não há 250 mg: 500 mg/dia por 5 dias. Esquema-padrão: 500 mg no 1º dia e 250 mg do 2º ao 5º.)`, dose: "F", nota: "Criança 6 meses a < 12 anos: 10 mg/kg no 1º dia e 5 mg/kg/dia do 2º ao 5º (suspensão 200 mg/5 mL). < 6 meses: 10 mg/kg/dia por 5 dias."},
 {trilha: "ambos", titulo: "Alternativas", texto: `USO ORAL
1. Claritromicina 500 mg ______ 14 comprimidos
   Tomar 1 comprimido de 12/12h por 7 dias.
   OU (alergia a macrolídeo)
2. Sulfametoxazol 400 mg + trimetoprima 80 mg ______ 56 comprimidos
   Tomar 2 comprimidos de 12/12h por 14 dias.`, dose: "F", nota: "Penicilinas e cefalosporinas não são eficazes contra B. pertussis. SMX-TMP contraindicado < 2 meses."}
],
orient: `A coqueluche é transmitida pela tosse. O antibiótico reduz a transmissão; a tosse pode continuar por semanas mesmo com tratamento.
Fique afastado de escola, trabalho e, principalmente, de bebês até completar 5 dias de antibiótico.
Pessoas da casa podem precisar tomar o mesmo remédio para prevenção: a equipe vai orientar.`,
alarme: ["Bebê que fica roxo, para de respirar ou tem convulsão", "Dificuldade para mamar ou beber líquidos", "Falta de ar entre as crises de tosse", "Febre alta"],
encaminhar: "Lactente < 6 meses ou com complicações → urgência/internação.",
sus: {nacional: "RENAME 2024: azitromicina 500 mg e 40 mg/mL (Básico e Estratégico) e 250 mg (Estratégico), claritromicina, SMX-TMP (Básico). Vacinas penta, DTP e dTpa: PNI.", betim: "REMUME Betim: azitromicina 500 mg e suspensão 200 mg/5 mL, claritromicina 500 mg, SMX-TMP comprimido e suspensão disponíveis (sem azitromicina 250 mg)."},
evid: {resumo: "O antibiótico precoce reduz a transmissão; benefício clínico na tosse é pequeno se iniciado após a fase catarral. Vacinação da gestante com dTpa reduz coqueluche grave no lactente. Esquemas conforme NT Conjunta 165/2025.", certeza: "Recomendação normativa do MS", fontes: ["nt_coqueluche", "rename", "remume"]},
mudancas: ["Migrado do Notion.", "Esquemas atualizados pela NT Conjunta 165/2025, incluindo a alternativa de 500 mg/dia por 5 dias quando falta azitromicina 250 mg (caso de Betim)."],
nv: ["Prazo de notificação (imediata ou semanal) e definição de caso por faixa etária: conferir no Guia de Vigilância vigente."]
},
{
id: "leptospirose", nome: "Leptospirose – suspeita (fase precoce)", sistema: "Infecciosas e vigilância", risco: "alto",
ciap: "A78", cid: "A27.9", tags: "leptospirose enchente rato lama febre mialgia panturrilha icterícia doxiciclina",
alerta: "Dispneia/tosse/hemoptise, oligúria, hipotensão, icterícia, sangramentos, arritmia, vômitos frequentes ou alteração de consciência: internação (forma grave, síndrome de Weil ou hemorragia pulmonar).",
S: `Paciente, ___ anos, com febre, cefaleia e mialgia (panturrilhas ___) há ___ dias.
Exposição nos 30 dias anteriores: ___ (enchente, lama, esgoto, lixo, roedores, limpeza de córrego, área de risco, trabalho com animais).
Sufusão conjuntival ___, icterícia ___, alteração urinária ___, tosse/hemoptise ___, sangramentos ___. Diagnóstico diferencial com dengue: ___.`,
O: `___ estado geral.
${VITAIS}
Conjuntivas: sufusão ___. Icterícia ___. Panturrilhas dolorosas ___. AR ___. Hepatomegalia ___. Diurese ___.`,
A: `Caso suspeito de leptospirose, fase precoce, sem sinais de alerta.`,
P: `- Iniciar antibiótico já na suspeita (não aguardar exame).
- Exames: hemograma, creatinina, ureia, K, TGO/TGP, bilirrubinas, CPK, EAS; sorologia (ELISA-IgM) pela vigilância.
- Notificar no SINAN.
- Reavaliar em 24–72 h; orientar sinais de alerta.`,
rx: [
 {trilha: "ambos", titulo: "Fase precoce – adulto", texto: `USO ORAL
1. Doxiciclina 100 mg ______ 14 comprimidos
   Tomar 1 comprimido de 12/12h por 5 a 7 dias.
   OU
2. Amoxicilina 500 mg ______ 21 cápsulas
   Tomar 1 cápsula de 8/8h por 5 a 7 dias.`, dose: "F", nota: "Doxiciclina contraindicada em < 9 anos, gestantes, doença renal ou hepática. Criança: amoxicilina 50 mg/kg/dia de 8/8h por 5–7 dias."},
 {trilha: "ambos", titulo: "Sintomáticos", texto: `USO ORAL
1. Dipirona 500 mg ou paracetamol 500 mg se febre/dor.
   Evitar AAS e anti-inflamatórios.`, dose: "NV"}
],
orient: `A leptospirose é transmitida pela urina de ratos na água de enchente e na lama. O tratamento é feito com antibiótico.
Tome o remédio até o fim e beba bastante líquido. Não use AAS nem anti-inflamatório.
Volte em 1 a 3 dias para reavaliação, ou antes se surgir qualquer sinal de alerta.`,
alarme: ["Falta de ar, tosse ou escarro com sangue", "Urinar pouco", "Pele ou olhos amarelos", "Sangramentos", "Tontura ou desmaio", "Vômitos frequentes", "Confusão"],
encaminhar: "Qualquer sinal de alerta → internação (antibiótico IV).",
sus: {nacional: "RENAME 2024: doxiciclina 100 mg (Estratégico), amoxicilina 500 mg (Básico).", betim: "REMUME Betim: doxiciclina 100 mg e amoxicilina 500 mg disponíveis."},
evid: {resumo: "O MS recomenda antibiótico já na suspeita, em qualquer fase. Na fase precoce, doxiciclina ou amoxicilina por 5–7 dias. A evidência de ECR sobre impacto em mortalidade é limitada, mas o tratamento precoce é consenso.", certeza: "Baixa (estimada); recomendação normativa", fontes: ["lepto", "rename", "remume"]},
mudancas: ["Migrado do Notion.", "Esquemas e sinais de alerta conferidos com o informe técnico baseado no manual do MS."],
nv: []
},
// ───────────────────────── PELE
{
id: "abscesso", nome: "Abscesso cutâneo / furúnculo", sistema: "Pele", risco: "baixo",
ciap: "S10 · S11", cid: "L02.9", tags: "abscesso furúnculo carbúnculo drenagem pus",
alerta: "Febre, taquicardia, celulite extensa, imunossupressão, abscesso em face central, mão ou períneo, ou crepitação: avaliação urgente.",
S: `Paciente, ___ anos, com lesão dolorosa em ___ há ___ dias, com ___ (calor, rubor, saída de pus). Febre ___. Episódios prévios ___ (recorrência?). Contatos com lesões semelhantes ___.
DM ___, imunossupressão ___, uso de drogas injetáveis ___.`,
O: `BEG.
${VITAIS}
Lesão em ___: nódulo ___ cm, flutuação ___, celulite perilesional ___ cm, linfangite ___.`,
A: `Abscesso cutâneo / furúnculo em ___, ___ (com / sem) celulite associada, sem sinais sistêmicos.`,
P: `- Incisão e drenagem se flutuante (tratamento principal); compressas mornas se pequeno/não flutuante.
- Antibiótico após drenagem se: abscesso > 2 cm, múltiplos, celulite extensa, sinais sistêmicos, imunossupressão, extremos de idade ou local de difícil drenagem.
- Recorrência: investigar DM, descolonização em casos selecionados.`,
rx: [
 {trilha: "ambos", titulo: "Antibiótico (se indicado após drenagem)", texto: `USO ORAL
1. Sulfametoxazol 400 mg + trimetoprima 80 mg ______ 28 comprimidos
   Tomar 2 comprimidos de 12/12h por 5 a 7 dias.
   OU
2. Cefalexina 500 mg ______ 28 comprimidos
   Tomar 1 comprimido de 6/6h por 5 a 7 dias.`, dose: "NV", nota: "SMX-TMP cobre MRSA comunitário; cefalexina não. Clindamicina 300 mg 8/8h é alternativa (alergia)."},
 {trilha: "ambos", titulo: "Analgesia e curativo", texto: `USO ORAL
1. Dipirona 500 mg – 1 a 2 comprimidos até de 6/6h se dor.

CUIDADOS LOCAIS
2. Compressas mornas 3–4 vezes ao dia; curativo limpo e seco após drenagem.`, dose: "NV"}
],
orient: `O tratamento principal é drenar o pus. Faça compressas mornas e mantenha o curativo limpo.
Lave as mãos e não compartilhe toalhas, lâminas ou roupas.
Volte em 48 horas para revisão do curativo.`,
alarme: ["Febre ou calafrios", "Vermelhidão que se espalha ou riscos vermelhos na pele", "Dor intensa que piora", "Lesão no rosto perto do nariz e olhos"],
encaminhar: "Abscesso extenso/profundo, em mão, face central ou períneo, ou sinais sistêmicos → cirurgia/urgência.",
sus: {nacional: "RENAME 2024: SMX-TMP, cefalexina, clindamicina 300 mg (Básico).", betim: "REMUME Betim: SMX-TMP 400/80 mg, cefalexina 500 mg, clindamicina 300 mg, lidocaína 2% disponíveis."},
evid: {resumo: "Drenagem é o tratamento principal. ECRs (Talan 2016; Daum 2017) mostraram que antibiótico após drenagem aumenta a cura em cerca de 5–10 pontos percentuais em abscessos não complicados, com mais efeitos adversos; decisão individualizada.", certeza: "Moderada (estimada)", fontes: ["abscesso_ecr", "idsa_pele", "rename", "remume"]},
mudancas: ["Migrado e fundido a partir de 'Abscesso cutâneo' e 'Furúnculo/Carbúnculo' do Notion.", "Antibiótico condicionado a critérios, não de rotina."],
nv: ["Doses: conferir bula (SMX-TMP 800/160 mg 12/12h é o esquema usual)."]
},
{
id: "seborreica", nome: "Dermatite seborreica", sistema: "Pele", risco: "baixo",
ciap: "S86", cid: "L21.9", tags: "caspa seborreia descamação couro cabeludo sobrancelha",
S: `Paciente, ___ anos, com descamação e eritema em ___ (couro cabeludo, sobrancelhas, sulcos nasogenianos, região retroauricular, tórax) há ___, com prurido ___. Episódios prévios ___. Piora com estresse/frio ___.
Doença neurológica (Parkinson) ou HIV ___.`,
O: `BEG.
Pele: placas eritematosas com escamas amareladas/gordurosas em ___.`,
A: `Dermatite seborreica ___ (couro cabeludo / face / tronco).`,
P: `- Antifúngico tópico como base (cetoconazol).
- Corticoide de baixa potência por curto período nas crises inflamatórias.
- Doença crônica e recorrente: manutenção com antifúngico 1–2 vezes/semana.
- Quadro extenso ou súbito em adulto jovem: testar HIV.`,
rx: [
 {trilha: "ambos", titulo: "Face e corpo", texto: `USO TÓPICO
1. Cetoconazol 2% creme ______ 1 bisnaga
   Aplicar fina camada 1 a 2 vezes ao dia por 2 a 4 semanas; depois 1–2 vezes por semana para manutenção.
2. Dexametasona 0,1% creme ______ 1 bisnaga
   Aplicar 1 vez ao dia nas áreas inflamadas por até 5–7 dias (evitar uso prolongado na face).`, dose: "NV"},
 {trilha: "fora", titulo: "Couro cabeludo (RENAME, não consta na REMUME Betim)", texto: `USO TÓPICO
1. Cetoconazol 2% xampu ______ 1 frasco
   Aplicar no couro cabeludo, deixar agir 3–5 minutos e enxaguar, 2–3 vezes por semana por 4 semanas; depois 1 vez por semana.`, dose: "NV"}
],
orient: `A dermatite seborreica é crônica e volta de tempos em tempos, mas tem controle.
Use o creme ou xampu nas crises e mantenha o uso 1 a 2 vezes por semana para evitar novas crises.
Não use corticoide por muitos dias seguidos no rosto.`,
alarme: ["Lesões que se espalham rapidamente pelo corpo", "Lesões com pus ou crostas amareladas", "Sem melhora após 4 semanas de tratamento"],
encaminhar: "Refratária ou extensa → dermatologia.",
sus: {nacional: "RENAME 2024: cetoconazol 2% xampu, hidrocortisona 1% creme, dexametasona 0,1% creme (Básico).", betim: "REMUME Betim: cetoconazol 2% creme e dexametasona 0,1% creme disponíveis; xampu de cetoconazol e hidrocortisona creme não constam."},
evid: {resumo: "Antifúngicos tópicos (cetoconazol) têm a melhor evidência para indução e manutenção; corticoides de baixa potência são eficazes a curto prazo, mas com risco de efeitos adversos no uso prolongado.", certeza: "Moderada (estimada)", fontes: ["malassezia", "rename", "remume"]},
mudancas: ["Migrado do Notion."],
nv: ["Doses: conferir bula."]
},
{
id: "pitiriase-versicolor", nome: "Pitiríase versicolor (pano branco)", sistema: "Pele", risco: "baixo",
ciap: "S76", cid: "B36.0", tags: "pano branco manchas brancas micose malassezia",
S: `Paciente, ___ anos, com manchas ___ (hipocrômicas / acastanhadas) em ___ (tronco, pescoço, ombros) há ___, com prurido leve ___. Episódios prévios ___. Sudorese/calor ___.`,
O: `BEG.
Pele: máculas ___ com descamação fina (sinal de Zileri ___) em ___. Extensão ___.`,
A: `Pitiríase versicolor ___ (localizada / extensa / recorrente).`,
P: `- Localizada: antifúngico tópico.
- Extensa ou recorrente: antifúngico oral.
- Explicar que a cor da pele demora semanas a meses para normalizar após a cura.
- Recorrência frequente: profilaxia tópica mensal nos meses quentes.`,
rx: [
 {trilha: "ambos", titulo: "Localizada", texto: `USO TÓPICO
1. Cetoconazol 2% creme ______ 1 bisnaga
   Aplicar 1 vez ao dia nas manchas por 2 a 3 semanas.`, dose: "NV"},
 {trilha: "ambos", titulo: "Extensa ou recorrente", texto: `USO ORAL
1. Fluconazol 150 mg ______ 4 cápsulas
   Tomar 2 cápsulas (300 mg) 1 vez por semana por 2 semanas.
   OU
2. Itraconazol 100 mg ______ 10 cápsulas
   Tomar 2 cápsulas (200 mg) 1 vez ao dia por 5 dias, após refeição.`, dose: "NV", nota: "Cetoconazol oral não deve ser usado (hepatotoxicidade). Itraconazol: interações por CYP3A4; evitar em ICC."}
],
orient: `É uma micose superficial, não contagiosa. As manchas podem demorar meses para voltar à cor normal mesmo depois de curadas.
Evite excesso de suor e roupas abafadas. Se voltar todo verão, podemos fazer prevenção.`,
alarme: ["Sem melhora da descamação após o tratamento", "Lesões que coçam muito ou crescem com borda elevada (pode ser outra micose)"],
encaminhar: "Dúvida diagnóstica (vitiligo, hanseníase: testar sensibilidade nas manchas hipocrômicas) → avaliação/dermatologia.",
sus: {nacional: "RENAME 2024: cetoconazol 2% xampu, fluconazol 150 mg, itraconazol 100 mg (Básico).", betim: "REMUME Betim: cetoconazol 2% creme, fluconazol 150 mg, itraconazol 100 mg disponíveis."},
evid: {resumo: "Antifúngicos azólicos tópicos e orais têm altas taxas de cura micológica; a recorrência é frequente. Diretriz dinamarquesa (2015) recomenda tópico na doença limitada e oral na extensa.", certeza: "Moderada (estimada)", fontes: ["malassezia", "rename", "remume"]},
mudancas: ["Migrado do Notion.", "Incluída a pesquisa de sensibilidade em manchas hipocrômicas (diagnóstico diferencial com hanseníase)."],
nv: ["Doses: conferir bula."]
},
{
id: "larva-migrans", nome: "Larva migrans cutânea (bicho geográfico)", sistema: "Pele", risco: "baixo",
ciap: "S99", cid: "B76.9", tags: "bicho geográfico larva migrans areia praia coceira em trilha",
S: `Paciente, ___ anos, com lesão pruriginosa serpiginosa em ___ (pés, nádegas, mãos) há ___ dias, após contato com areia/terra ___. Infecção secundária ___.`,
O: `BEG.
Pele: trajeto eritematoso serpiginoso, elevado, de ___ cm em ___. Escoriações ___. Sinais de infecção secundária ___.`,
A: `Larva migrans cutânea em ___.`,
P: `- Tratamento oral (dose única de ivermectina ou albendazol por 3 dias).
- Anti-histamínico para prurido.
- Tratar infecção secundária se presente.`,
rx: [
 {trilha: "ambos", titulo: "Antiparasitário", texto: `USO ORAL
1. Ivermectina 6 mg ______ ___ comprimidos
   Tomar dose única de 200 mcg/kg (ex.: 15–24 kg: ½ cp; 25–35 kg: 1 cp; 36–50 kg: 1½ cp; 51–65 kg: 2 cp; 66–79 kg: 2½ cp; ≥ 80 kg: 3 cp), em jejum.
   OU
2. Albendazol 400 mg ______ 3 comprimidos
   Tomar 1 comprimido por dia por 3 dias.`, dose: "NV", nota: "Ivermectina: não usar em < 15 kg, gestantes e lactantes na 1ª semana. Albendazol: evitar na gestação."},
 {trilha: "ambos", titulo: "Prurido", texto: `USO ORAL
1. Loratadina 10 mg ______ 10 comprimidos
   Tomar 1 comprimido por dia enquanto houver coceira.`, dose: "NV"}
],
orient: `O bicho geográfico é uma larva de verme de cães e gatos que entra pela pele em areia ou terra contaminada. O remédio mata a larva e a coceira melhora em poucos dias.
Use calçados e evite deitar diretamente na areia em locais com animais.`,
alarme: ["Vermelhidão, calor ou pus na lesão", "Febre", "Coceira que não melhora após 1 semana do tratamento"],
encaminhar: "Raramente necessário.",
sus: {nacional: "RENAME 2024: ivermectina 6 mg, albendazol 400 mg (Básico).", betim: "REMUME Betim: ivermectina 6 mg, albendazol 400 mg e suspensão, loratadina disponíveis."},
evid: {resumo: "Ivermectina em dose única e albendazol por 3 dias têm altas taxas de cura em séries de casos e pequenos ensaios; tratamento tópico é alternativa em gestantes.", certeza: "Baixa (estimada)", fontes: ["ectoparasitoses", "rename", "remume"]},
mudancas: ["Migrado do Notion."],
nv: ["Tabela de ivermectina por peso e doses: conferir bula."]
},
{
id: "tungiase", nome: "Tungíase (bicho-de-pé)", sistema: "Pele", risco: "baixo",
ciap: "S99", cid: "B88.1", tags: "bicho de pé tunga pulga pé",
S: `Paciente, ___ anos, com lesão(ões) dolorosa(s)/pruriginosa(s) em ___ (pés, periungueal, plantar) há ___ dias. Número de lesões ___. Andar descalço/terra ___. Vacinação antitetânica ___.`,
O: `BEG.
Pés: ___ pápula(s) esbranquiçada(s) com ponto escuro central em ___. Sinais de infecção secundária ___.`,
A: `Tungíase ___ (lesão única / múltiplas), ___ (com / sem) infecção secundária.`,
P: `- Retirada da pulga com agulha estéril, sem romper, seguida de antissepsia.
- Atualizar vacina antitetânica.
- Antibiótico só se infecção secundária.
- Abordagem domiciliar/peridomiciliar (animais, calçados).`,
rx: [
 {trilha: "ambos", titulo: "Cuidados após retirada", texto: `CUIDADOS LOCAIS
1. Lavar com água e sabão 2 vezes ao dia e manter limpo e seco.
2. Uso de calçados fechados.

PREVENÇÃO
3. Vacina dT conforme situação vacinal.`, dose: "NV"},
 {trilha: "evidencia", titulo: "Infestação múltipla (dimeticona tópica)", texto: `USO TÓPICO
1. Dimeticona de baixa viscosidade (óleo de silicone) – aplicar sobre as lesões, conforme orientação do produto, para matar as pulgas antes da retirada.`, dose: "NV", nota: "ECR em área endêmica no Brasil e no Quênia; produto de venda livre, não consta na RENAME nem na REMUME."}
],
orient: `O bicho-de-pé é uma pulga que vive em terra e areia. Depois da retirada, mantenha o local limpo e seco.
Use calçados, inclusive em casa e no quintal. Animais da casa também podem precisar de tratamento.`,
alarme: ["Vermelhidão, inchaço ou pus no pé", "Febre", "Dificuldade para andar"],
encaminhar: "Infestação maciça com infecção → avaliação para antibiótico/curativos frequentes.",
idealsus: {ideal: "Retirada cirúrgica estéril e, em infestação múltipla, dimeticona tópica (ECR) para matar as pulgas in situ.", sus: "Retirada com agulha estéril na UBS e vacina antitetânica. Dimeticona não consta nas listas.", ponte: "Retirada na UBS para todos; dimeticona por compra em infestações com muitas lesões."},
sus: {nacional: "Vacina dT: PNI.", betim: "Material para retirada e curativo na UBS: não verificado."},
evid: {resumo: "Extração estéril é o tratamento-padrão. Em infestações maciças, dimeticona tópica teve alta eficácia em ECR. A tungíase é doença negligenciada associada a pobreza e moradia precária.", certeza: "Baixa (estimada)", fontes: ["ectoparasitoses", "gvs_tetano"]},
mudancas: ["Migrado do Notion."],
nv: []
},
{
id: "miiase", nome: "Miíase furunculoide (berne)", sistema: "Pele", risco: "baixo",
ciap: "S99", cid: "B87.0", tags: "berne miíase larva mosca dermatobia",
alerta: "Miíase em cavidades (nariz, orelha, olho), em feridas extensas ou em pessoa acamada/com demência: encaminhar.",
S: `Paciente, ___ anos, com nódulo doloroso em ___ há ___ dias, com sensação de movimento/ferroada ___ e orifício central com secreção ___. Vacina antitetânica ___.`,
O: `BEG.
Pele: nódulo furunculoide em ___ com orifício central ___, saída de secreção serosa ___. Celulite ___.`,
A: `Miíase furunculoide (Dermatobia hominis) em ___.`,
P: `- Oclusão do orifício (vaselina ou esparadrapo) por algumas horas para forçar a larva a emergir, seguida de extração com pinça; ou extração cirúrgica sob anestesia local.
- Remover a larva inteira.
- Atualizar vacina antitetânica.
- Antibiótico só se infecção secundária.`,
rx: [
 {trilha: "ambos", titulo: "Procedimento e cuidados", texto: `PROCEDIMENTO
1. Oclusão com vaselina sólida ou esparadrapo por 3–24 h; retirada com pinça por pressão lateral.
   OU anestesia local com lidocaína 2% e pequena incisão para extração.

CUIDADOS LOCAIS
2. Lavar com água e sabão 2 vezes ao dia.
3. Vacina dT conforme situação vacinal.`, dose: "NV"}
],
orient: `O berne é uma larva de mosca que se desenvolve sob a pele. Depois da retirada, mantenha o local limpo.
Não esprema: pode romper a larva e causar inflamação.`,
alarme: ["Vermelhidão que se espalha ou pus", "Febre", "Dor intensa"],
encaminhar: "Miíase cavitária ou extensa → urgência/especialista.",
sus: {nacional: "Vacina dT: PNI.", betim: "REMUME Betim: lidocaína 2% injetável disponível."},
evid: {resumo: "Séries de casos sustentam oclusão seguida de extração ou extração cirúrgica; não há ECR comparando métodos. Ivermectina oral foi relatada em casos de miíase extensa.", certeza: "Muito baixa (estimada)", fontes: ["ectoparasitoses", "gvs_tetano"]},
mudancas: ["Migrado do Notion."],
nv: []
},
{
id: "picada-inseto", nome: "Picada de inseto – reação local", sistema: "Pele", risco: "baixo",
ciap: "S12", cid: "T63.4 · W57", tags: "picada inseto mosquito abelha marimbondo estrófulo reação local",
alerta: "Urticária generalizada, angioedema, dispneia, sibilância, hipotensão ou vômitos após picada (anafilaxia): adrenalina IM 0,01 mg/kg (máx. 0,5 mg) e urgência. Múltiplas picadas de abelha: risco de envenenamento.",
S: `Paciente, ___ anos, com lesão(ões) em ___ após picada de ___ há ___ h/dias. Dor, prurido, edema ___ cm. Sintomas sistêmicos ___ (urticária fora do local, falta de ar, tontura). Reações prévias ___.`,
O: `BEG.
${VITAIS}
Pele: pápula/placa eritematoedematosa de ___ cm em ___. Ferrão retido ___. Infecção secundária ___. Sem lesões à distância.`,
A: `Reação local ___ (simples / extensa) a picada de inseto, sem sinais de anafilaxia.`,
P: `- Remover ferrão (raspar, sem apertar).
- Compressa fria; corticoide tópico; anti-histamínico se prurido.
- Reação local extensa (> 10 cm): corticoide oral curto pode ser considerado.
- Antibiótico só se sinais claros de infecção (raro nas primeiras 48 h).
- Anafilaxia prévia: encaminhar para alergologia (imunoterapia com veneno) e orientar plano de emergência.`,
rx: [
 {trilha: "ambos", titulo: "Reação local", texto: `USO TÓPICO
1. Dexametasona 0,1% creme ______ 1 bisnaga
   Aplicar 2 vezes ao dia por 3 a 5 dias.

USO ORAL
2. Loratadina 10 mg ______ 10 comprimidos
   Tomar 1 comprimido por dia se coceira.`, dose: "NV"},
 {trilha: "ambos", titulo: "Reação local extensa (opcional)", texto: `USO ORAL
1. Prednisona 20 mg ______ 10 comprimidos
   Tomar 2 comprimidos (40 mg) pela manhã por 3 a 5 dias.`, dose: "NV"}
],
orient: `Faça compressas frias e evite coçar. O inchaço pode aumentar por 1 a 2 dias e depois diminui.
Procure atendimento imediatamente se surgir falta de ar, inchaço na boca ou olhos, manchas pelo corpo ou tontura.`,
alarme: ["Falta de ar ou chiado", "Inchaço dos lábios, língua ou olhos", "Placas vermelhas pelo corpo", "Tontura ou desmaio", "Vermelhidão quente que aumenta após 2–3 dias, com febre"],
encaminhar: "Anafilaxia → urgência. Reação sistêmica prévia → alergologia.",
sus: {nacional: "RENAME 2024: dexametasona creme, loratadina, prednisona, epinefrina 1 mg/mL (Básico).", betim: "REMUME Betim: dexametasona 0,1% creme, loratadina, prednisona e epinefrina disponíveis."},
evid: {resumo: "Reações locais são autolimitadas; o tratamento é sintomático. Reação local extensa não aumenta muito o risco de anafilaxia futura. Edema nas primeiras 48 h raramente é infecção.", certeza: "Baixa (estimada)", fontes: ["eaaci_urt", "rename", "remume"]},
mudancas: ["Migrado do Notion."],
nv: ["Doses: conferir bula."]
},
{
id: "verrugas", nome: "Verrugas virais e molusco contagioso", sistema: "Pele", risco: "baixo",
ciap: "S03 · S95", cid: "B07 · B08.1", tags: "verruga molusco contagioso HPV cutâneo",
S: `Paciente, ___ anos, com ___ (verrugas / pápulas umbilicadas) em ___ há ___ meses. Número ___. Dor ___. Imunossupressão ___. Tratamentos prévios ___.`,
O: `BEG.
Pele: ___ lesões ___ (pápulas ceratósicas / pápulas peroladas umbilicadas) em ___. Dermatite perilesional ___.`,
A: `___ (verrugas vulgares / plantares / molusco contagioso), ___ lesões.`,
P: `- Verrugas: muitas regridem em 1–2 anos; tratar se incômodo, dor ou desejo do paciente.
- Ácido salicílico tópico ou crioterapia como 1ª linha.
- Molusco: conduta expectante na maioria (regressão em 6–18 meses); curetagem se desejo/indicação.
- Lesões numerosas em adulto ou na face: testar HIV.
- Lesões genitais: seguir modelo de IST.`,
rx: [
 {trilha: "evidencia", titulo: "Verrugas – ácido salicílico", texto: `USO TÓPICO
1. Ácido salicílico 16,7% + ácido láctico 16,7% em colódio ______ 1 frasco
   Lixar a superfície após o banho e aplicar 1 vez ao dia, protegendo a pele ao redor, por até 12 semanas.`, dose: "NV", nota: "Cochrane: ácido salicílico aumenta a cura em relação ao placebo. RENAME tem apenas ácido salicílico 5% pomada (Básico, não consta na REMUME)."},
 {trilha: "sus", titulo: "Crioterapia (se disponível na rede)", texto: `PROCEDIMENTO
1. Crioterapia com nitrogênio líquido a cada 2–3 semanas, até 3–4 sessões.`, dose: "NV"}
],
orient: `Verrugas e molusco são causados por vírus e muitas vezes somem sozinhos com o tempo.
Não arranque nem coce as lesões, para não espalhar. Não compartilhe toalhas e lâminas.`,
alarme: ["Lesões que sangram, crescem rápido ou mudam de cor", "Muitas lesões em pouco tempo", "Lesões na região genital"],
encaminhar: "Lesões numerosas, faciais, refratárias ou dúvida diagnóstica → dermatologia.",
idealsus: {ideal: "Ácido salicílico tópico (Cochrane) ou crioterapia, com eficácia semelhante.", sus: "Ácido salicílico em concentração eficaz para verrugas não consta nas listas; crioterapia depende da rede.", ponte: "Ácido salicílico por compra (baixo custo) ou encaminhar para crioterapia se disponível."},
sus: {nacional: "RENAME 2024: ácido salicílico 5% pomada (Básico).", betim: "REMUME Betim: ácido salicílico tópico não consta. Crioterapia na rede: não verificada."},
evid: {resumo: "Revisão Cochrane (2012): ácido salicílico tópico tem benefício modesto sobre placebo; crioterapia tem eficácia semelhante. Há alta taxa de regressão espontânea. Molusco regride espontaneamente na maioria.", certeza: "Moderada (estimada)", fontes: ["cochrane_verruga", "rename", "remume"]},
mudancas: ["Migrado do Notion ('Verrugas virais cutâneas, molusco contagioso')."],
nv: []
},
// ───────────────────────── DIGESTIVO
{
id: "drge", nome: "Doença do refluxo gastroesofágico (DRGE)", sistema: "Digestivo", risco: "baixo",
ciap: "D84", cid: "K21.9", tags: "refluxo azia pirose regurgitação omeprazol",
alerta: "Disfagia, odinofagia, perda de peso, sangramento (hematêmese/melena), anemia, vômitos persistentes, massa ou início após 60 anos: EDA prioritária.",
S: `Paciente, ___ anos, com pirose/regurgitação há ___ semanas, ___ vezes por semana, pior ___ (deitado, após refeições). Tosse crônica/rouquidão ___. Dor torácica ___ (afastar causa cardíaca).
Sinais de alarme: ___. Uso de AINE ___, tabagismo ___, álcool ___. Refeições tardias ___. IMC ___.`,
O: `BEG.
${VITAIS}  IMC ___
ABD: ___.`,
A: `DRGE típica, sem sinais de alarme.`,
P: `- Medidas: perda de peso se sobrepeso, elevar a cabeceira, evitar refeições 2–3 h antes de deitar, cessar tabagismo.
- IBP por 8 semanas, 30–60 min antes do café.
- Resposta: tentar reduzir à menor dose ou uso sob demanda.
- Sem resposta ou alarme: EDA.`,
rx: [
 {trilha: "ambos", titulo: "IBP", texto: `USO ORAL
1. Omeprazol 20 mg ______ 56 cápsulas
   Tomar 1 cápsula em jejum, 30 minutos antes do café da manhã, por 8 semanas.
   (Sintomas noturnos ou resposta parcial: 20 mg 2 vezes ao dia, antes do café e do jantar.)`, dose: "NV", nota: "Reavaliar após 8 semanas e tentar desmame; uso prolongado só com indicação."}
],
orient: `Evite deitar até 2 a 3 horas depois de comer. Eleve a cabeceira da cama com calços.
Perder peso, parar de fumar e evitar refeições grandes à noite ajudam bastante.
Tome o omeprazol em jejum, meia hora antes do café.`,
alarme: ["Dificuldade ou dor para engolir", "Vômito com sangue ou fezes pretas", "Perda de peso sem explicação", "Dor no peito com esforço ou falta de ar"],
encaminhar: "Sinais de alarme, refratário a 8 semanas de IBP dose dobrada → EDA/gastroenterologia.",
sus: {nacional: "RENAME 2024: omeprazol 10 e 20 mg (Básico).", betim: "REMUME Betim: omeprazol 20 mg disponível."},
evid: {resumo: "IBP é o tratamento mais eficaz para DRGE erosiva e sintomática. Perda de peso e elevação da cabeceira têm evidência para redução de sintomas. ACG 2022 recomenda prova terapêutica de 8 semanas na ausência de alarme.", certeza: "Alta para IBP (estimada)", fontes: ["acg_drge", "acg_dispepsia", "rename", "remume"]},
mudancas: ["Migrado do Notion."],
nv: ["Doses: conferir bula."]
},
{
id: "nauseas", nome: "Náuseas e vômitos agudos (adulto)", sistema: "Digestivo", risco: "moderado",
ciap: "D09 · D10", cid: "R11", tags: "enjoo vômito náusea antiemético metoclopramida",
alerta: "Desidratação grave, hematêmese, dor abdominal intensa, distensão (obstrução), cefaleia súbita/rigidez de nuca, sinais neurológicos, dor torácica ou gestação: avaliação urgente.",
S: `Paciente, ___ anos, com náuseas e ___ episódios de vômito em ___ h. Conteúdo ___ (alimentar, bilioso, sangue). Diarreia ___, dor abdominal ___, febre ___, cefaleia ___.
Diurese ___. Ingesta hídrica ___. DUM/gestação ___. Medicamentos novos ___. Álcool/cannabis ___. DM ___ (cetoacidose?).`,
O: `___ estado geral, mucosas ___, turgor ___.
${VITAIS}  Glicemia capilar ___
ABD: ___, RHA ___, dor ___, sinais de peritonite ___.`,
A: `Náuseas e vômitos agudos, provável ___ (gastroenterite / outra), ___ (sem / com desidratação leve).`,
P: `- Teste de gravidez em mulher em idade fértil.
- Reidratação oral fracionada; antiemético se necessário.
- Investigar causa se sinais de alarme ou persistência > 48–72 h.`,
rx: [
 {trilha: "ambos", titulo: "Antiemético (SUS Betim)", texto: `USO ORAL
1. Metoclopramida 10 mg ______ 9 comprimidos
   Tomar 1 comprimido até de 8/8h se náusea, por no máximo 3–5 dias.

2. Sais para reidratação oral – 1 envelope em 1 litro de água; beber em pequenos goles ao longo do dia.`, dose: "NV", nota: "Risco de reações extrapiramidais (jovens). Evitar se suspeita de obstrução."},
 {trilha: "fora", titulo: "Ondansetrona oral (RENAME Básico, não consta na REMUME Betim)", texto: `USO ORAL
1. Ondansetrona 4 mg comprimido ______ 10 comprimidos
   Tomar 1 a 2 comprimidos (4–8 mg) até de 8/8h se náusea.`, dose: "NV", nota: "Sem efeito extrapiramidal; cautela com QT longo."}
],
orient: `Beba líquidos em pequenas quantidades e com frequência (soro caseiro ou da farmácia). Volte a comer aos poucos alimentos leves.
Procure atendimento se não conseguir beber nada, se urinar pouco ou se surgir algum sinal de alerta.`,
alarme: ["Não consegue beber líquidos", "Urina pouca ou escura", "Vômito com sangue ou parecido com borra de café", "Dor abdominal forte ou barriga inchada", "Dor de cabeça forte ou rigidez na nuca", "Sonolência ou confusão"],
encaminhar: "Desidratação moderada/grave, alarme ou suspeita de causa cirúrgica → urgência.",
sus: {nacional: "RENAME 2024: metoclopramida, ondansetrona 4 e 8 mg comprimido (Básico), SRO.", betim: "REMUME Betim: metoclopramida 10 mg e injetável, ondansetrona apenas injetável, SRO disponíveis."},
evid: {resumo: "Em adultos no pronto atendimento, metoclopramida e ondansetrona têm eficácia semelhante; a ondansetrona tem menos efeitos extrapiramidais. A causa deve orientar a conduta.", certeza: "Moderada (estimada)", fontes: ["nausea", "cochrane_ondans", "rename", "remume"]},
mudancas: ["Migrado do Notion ('Náuseas/Vômitos')."],
nv: ["Doses: conferir bula."]
},
{
id: "aftas", nome: "Aftas orais (estomatite aftosa)", sistema: "Digestivo", risco: "baixo",
ciap: "D83", cid: "K12.0", tags: "afta boca úlcera oral estomatite",
alerta: "Úlcera única > 2–3 semanas sem cicatrizar (sobretudo em tabagista/etilista): biópsia. Aftas com úlceras genitais, uveíte, diarreia, perda de peso ou anemia: investigar Behçet, doença inflamatória intestinal, celíaca, HIV.",
S: `Paciente, ___ anos, com úlcera(s) dolorosa(s) na boca há ___ dias. Número ___, tamanho ___. Episódios recorrentes ___ (frequência). Febre ___. Úlceras genitais ___, diarreia ___, perda de peso ___, olho vermelho ___.
Medicamentos (AINE, metotrexato) ___. Trauma local/prótese ___.`,
O: `BEG.
Boca: ___ úlcera(s) ___ mm, base amarelada e halo eritematoso em ___. Linfonodos ___.`,
A: `Estomatite aftosa ___ (episódio isolado / recorrente menor), sem sinais de doença sistêmica.`,
P: `- Analgesia local e evitar alimentos ácidos/condimentados.
- Corticoide tópico como 1ª linha para encurtar a duração.
- Recorrência frequente: hemograma, ferritina, B12, folato; considerar celíaca.`,
rx: [
 {trilha: "evidencia", titulo: "Corticoide tópico", texto: `USO TÓPICO ORAL
1. Triancinolona acetonida 0,1% em orabase ______ 1 bisnaga
   Secar a lesão e aplicar pequena quantidade 2 a 3 vezes ao dia, após as refeições e ao deitar, por até 5–7 dias.`, dose: "NV", nota: "Não consta na RENAME nem na REMUME."},
 {trilha: "sus", titulo: "Alívio da dor (SUS Betim)", texto: `USO TÓPICO ORAL
1. Lidocaína 2% geleia ______ 1 bisnaga
   Aplicar pequena quantidade sobre a afta antes das refeições, até 4 vezes ao dia.

USO ORAL
2. Paracetamol 500 mg – 1 a 2 comprimidos até de 6/6h se dor.`, dose: "NV", nota: "Evitar anestésico tópico em crianças pequenas (risco de aspiração e metemoglobinemia)."}
],
orient: `As aftas cicatrizam sozinhas em 7 a 14 dias. Evite alimentos ácidos, salgados e crocantes enquanto doer.
Use escova macia. Se as aftas voltarem com frequência, vamos investigar com exames de sangue.`,
alarme: ["Ferida que não cicatriza em 3 semanas", "Feridas também na região genital", "Olho vermelho e doloroso", "Febre ou dificuldade para beber líquidos"],
encaminhar: "Úlcera persistente → estomatologia/biópsia. Suspeita de doença sistêmica → especialista conforme quadro.",
idealsus: {ideal: "Corticoide tópico em orabase reduz dor e duração das aftas.", sus: "Betim tem lidocaína geleia (analgesia) e paracetamol. Corticoide em orabase e clorexidina não constam na REMUME.", ponte: "Lidocaína do SUS para alívio; triancinolona em orabase por compra se o paciente quiser encurtar o episódio."},
sus: {nacional: "RENAME 2024: lidocaína 2% gel, clorexidina 0,12% solução bucal (Básico).", betim: "REMUME Betim: lidocaína 2% geleia e paracetamol disponíveis; clorexidina bucal não consta."},
evid: {resumo: "Corticoides tópicos são 1ª linha para estomatite aftosa recorrente, com redução de dor e duração em ensaios pequenos. Deficiências de ferro, B12 e folato e doenças sistêmicas devem ser investigadas na forma recorrente.", certeza: "Baixa (estimada)", fontes: ["aftas", "rename", "remume"]},
mudancas: ["Migrado do Notion."],
nv: ["Doses: conferir bula."]
},
// ───────────────────────── CARDIOVASCULAR
{
id: "dor-toracica", nome: "Dor torácica – baixa probabilidade de SCA", sistema: "Cardiovascular", risco: "alto",
ciap: "A11 · K01", cid: "R07.4", tags: "dor no peito precordialgia infarto SCA ECG musculoesquelética",
alerta: "Dor em aperto/peso, em repouso ou > 10–20 min, irradiação, sudorese, dispneia, síncope, instabilidade ou ECG alterado: tratar como SCA → SAMU/urgência (AAS se sem contraindicação). Dor súbita lancinante (dissecção) ou dispneia com taquicardia (TEP): urgência.",
S: `Paciente, ___ anos, sexo ___, com dor torácica há ___, localização ___, tipo ___ (pontada, queimação, aperto), duração ___, relação com esforço ___, com movimento/palpação ___, com respiração ___, com alimentação ___.
Irradiação ___, sudorese ___, dispneia ___, síncope ___, palpitação ___.
Fatores de risco CV: HAS ___, DM ___, dislipidemia ___, tabagismo ___, DAC prévia ___, história familiar ___. Cocaína ___. Imobilização/viagem/TVP ___.`,
O: `___ estado geral.
${VITAIS}  PA em ambos os braços ___ / ___
ACV ___. AR ___. Dor reproduzível à palpação ___. Pulsos ___. MMII: edema/empastamento ___.
ECG (até 10 min): ___.`,
A: `Dor torácica de baixa probabilidade de SCA (escore de Marburg ___), provável ___ (musculoesquelética / DRGE / ansiedade / outra), ECG ___.`,
P: `- ECG em até 10 min na UBS; se alterado ou indisponível com dor sugestiva → urgência.
- Escore de Marburg (APS): idade/sexo (H ≥ 55, M ≥ 65), doença vascular conhecida, dor piora com esforço, dor não reproduzível à palpação, paciente supõe origem cardíaca. 0–2 pontos: baixa probabilidade.
- Tratar a causa provável; reavaliar em 24–72 h.
- Estratificação ambulatorial (teste de esforço) se dor crônica estável com suspeita de angina.`,
rx: [
 {trilha: "ambos", titulo: "Se suspeita de SCA, antes da remoção", texto: `USO ORAL
1. Ácido acetilsalicílico 100 mg – mastigar 3 comprimidos (300 mg) imediatamente, se não houver alergia ou sangramento ativo.

USO SUBLINGUAL (se dor persistente e PAS > 90 mmHg, sem uso de inibidor de PDE-5)
2. Dinitrato de isossorbida 5 mg – 1 comprimido sublingual; pode repetir a cada 5 min até 3 doses.`, dose: "NV", nota: "Não atrasar a remoção pelo SAMU."},
 {trilha: "ambos", titulo: "Dor musculoesquelética (parede torácica)", texto: `USO ORAL
1. Ibuprofeno 600 mg – 1 comprimido de 8/8h por até 5 dias.
   OU
2. Dipirona 500 mg – 1 a 2 comprimidos de 6/6h se dor.`, dose: "NV"}
],
orient: `A avaliação de hoje não mostrou sinais de problema no coração, mas a dor no peito deve ser reavaliada se mudar.
Ligue 192 (SAMU) se a dor ficar em aperto, durar mais de 15 minutos, vier com falta de ar, suor frio, enjoo ou desmaio.`,
alarme: ["Dor em aperto ou peso que dura mais de 15 minutos", "Dor com falta de ar, suor frio ou desmaio", "Dor que aparece ao esforço e melhora com repouso", "Dor súbita muito forte nas costas", "Falta de ar súbita"],
encaminhar: "Suspeita de SCA, TEP, dissecção ou pneumotórax → SAMU/urgência. Angina estável provável → cardiologia/teste de esforço.",
sus: {nacional: "RENAME 2024: ácido acetilsalicílico 100 mg, dinitrato de isossorbida 5 mg sublingual, ibuprofeno, dipirona (Básico).", betim: "REMUME Betim: AAS 100 mg, isossorbida dinitrato 5 mg SL, ibuprofeno e dipirona disponíveis. Disponibilidade de ECG na UBS: não verificada."},
evid: {resumo: "O escore de Marburg foi validado na APS para excluir doença coronariana como causa da dor torácica (alto valor preditivo negativo com 0–2 pontos). A diretriz AHA/ACC 2021 recomenda ECG em até 10 minutos e encaminhamento imediato se suspeita de SCA.", certeza: "Moderada (estimada)", fontes: ["dor_toracica", "rename", "remume"]},
mudancas: ["Migrado do Notion ('Dor torácica atípica').", "Incluído o escore de Marburg, validado em atenção primária."],
nv: ["Doses: conferir bula. Fluxo SAMU/UPA de Betim: confirmar."]
},
{
id: "palpitacoes", nome: "Palpitações / extrassístoles", sistema: "Cardiovascular", risco: "moderado",
ciap: "K04 · K80", cid: "R00.2 · I49.4", tags: "palpitação batedeira extrassístole arritmia coração disparado",
alerta: "Palpitação com síncope, dor torácica, dispneia, instabilidade, FC > 150 sustentada, ou história familiar de morte súbita: ECG imediato e urgência.",
S: `Paciente, ___ anos, com palpitações há ___, tipo ___ (falhas/batida forte / taquicardia regular ou irregular), início e fim ___ (súbitos?), duração ___, frequência ___.
Gatilhos: café ___, álcool ___, energéticos ___, estresse ___, exercício ___, descongestionantes/estimulantes ___.
Síncope/pré-síncope ___, dor torácica ___, dispneia ___. Cardiopatia ___. Morte súbita familiar ___. Ansiedade ___. Sintomas de tireoide ___.`,
O: `BEG.
${VITAIS}
ACV: ritmo ___, sopros ___. Tireoide ___.
ECG: ___ (ritmo, PR, QRS, QTc, pré-excitação, extrassístoles).`,
A: `Palpitações ___ (provável extrassistolia benigna / a esclarecer), ECG ___, sem sinais de alarme.`,
P: `- ECG de 12 derivações (idealmente durante sintomas).
- Exames: hemograma, TSH, eletrólitos (K, Mg), glicemia.
- Reduzir gatilhos (cafeína, álcool, energéticos, privação de sono).
- Holter 24 h se sintomas diários; monitor de eventos se esporádicos.
- Extrassístoles benignas sintomáticas: betabloqueador se incômodo persistente.
- Ecocardiograma se sopro, cardiopatia ou extrassístoles muito frequentes.`,
rx: [
 {trilha: "ambos", titulo: "Extrassístoles sintomáticas (coração estruturalmente normal)", texto: `USO ORAL
1. Propranolol 40 mg ______ 30 comprimidos
   Tomar ½ a 1 comprimido de 12/12h. Evitar em asma.
   OU
2. Atenolol 50 mg – ½ a 1 comprimido 1 vez ao dia.`, dose: "NV"}
],
orient: `Palpitações isoladas costumam ser benignas, especialmente com exame do coração normal.
Reduza café, energéticos e álcool e tente dormir bem.
Anote quando as palpitações acontecem e quanto tempo duram. Se possível, procure fazer um eletro durante a crise.`,
alarme: ["Desmaio ou quase desmaio", "Dor no peito ou falta de ar", "Coração muito rápido que não para", "Palpitação durante exercício"],
encaminhar: "Taquiarritmia documentada, pré-excitação, QT longo, cardiopatia estrutural, síncope → cardiologia (urgente se instável).",
sus: {nacional: "RENAME 2024: propranolol 10 e 40 mg, atenolol 50 e 100 mg (Básico).", betim: "REMUME Betim: propranolol 40 mg e atenolol 50 mg disponíveis. Acesso a Holter e ecocardiograma: não verificado."},
evid: {resumo: "Consenso EHRA (2011): a maioria das palpitações na APS é benigna (extrassístoles, taquicardia sinusal, ansiedade); a avaliação inicial é história, exame e ECG. Betabloqueador alivia sintomas de extrassístoles benignas.", certeza: "Baixa (estimada)", fontes: ["palpitacoes", "rename", "remume"]},
mudancas: ["Migrado e fundido a partir de 'Arritmias benignas' e 'Palpitações ocasionais' do Notion."],
nv: ["Doses: conferir bula."]
},
{
id: "ivc", nome: "Insuficiência venosa crônica / varizes", sistema: "Cardiovascular", risco: "baixo",
ciap: "K95", cid: "I87.2 · I83.9", tags: "varizes pernas pesadas edema meia de compressão úlcera venosa",
alerta: "Edema unilateral súbito, dor e empastamento de panturrilha (TVP): investigar com urgência. Úlcera com sinais de infecção: avaliar.",
S: `Paciente, ___ anos, com ___ (peso, dor, cansaço, edema, câimbras, prurido) em membros inferiores há ___, pior ao fim do dia/ortostatismo ___. Varizes ___. Úlcera prévia ___. TVP prévia ___.
Ocupação em pé ___, gestações ___, obesidade ___. ICC, DRC, hipotireoidismo, uso de anlodipino ___ (outras causas de edema).`,
O: `BEG.
${VITAIS}
MMII: varizes ___, edema ___ (cacifo), hiperpigmentação ___, eczema ___, lipodermatoesclerose ___, úlcera ___. Pulsos pediosos ___. Panturrilhas ___.
CEAP clínico: C___.`,
A: `Insuficiência venosa crônica CEAP C___, sem sinais de TVP.`,
P: `- Afastar outras causas de edema e verificar pulsos (doença arterial contraindica compressão forte).
- Terapia compressiva (meia elástica 20–30 mmHg) e elevação dos membros, caminhada, perda de peso.
- Venoativos podem aliviar edema e sintomas (evidência moderada para edema).
- Úlcera venosa: curativo + compressão; encaminhar se não cicatrizar.
- Encaminhar à cirurgia vascular se sintomas refratários, complicações ou úlcera.`,
rx: [
 {trilha: "evidencia", titulo: "Venoativo (alívio sintomático)", texto: `USO ORAL
1. Diosmina 900 mg + hesperidina 100 mg (fração flavonoica purificada micronizada) ______ 1 caixa
   Tomar 1 comprimido por dia por 2–3 meses e reavaliar.`, dose: "NV", nota: "Cochrane 2020: provável redução de edema e sintomas (certeza moderada); sem efeito em cicatrização de úlcera."},
 {trilha: "ambos", titulo: "Compressão e medidas gerais", texto: `ORIENTAÇÕES
1. Meia elástica de compressão média (20–30 mmHg), até o joelho, colocar ao acordar e retirar ao deitar.
2. Elevar as pernas 30 minutos 3 vezes ao dia; caminhar diariamente.`, dose: "NV", nota: "Checar pulsos/ITB antes de compressão forte."}
],
orient: `Caminhar todos os dias e elevar as pernas ajudam a circulação. A meia elástica alivia o inchaço e o peso nas pernas.
Evite ficar muito tempo parado em pé ou sentado. Hidrate a pele das pernas.`,
alarme: ["Inchaço súbito e doloroso em uma perna", "Ferida que não cicatriza", "Vermelhidão quente com febre", "Sangramento de variz"],
encaminhar: "Úlcera, varizes sintomáticas refratárias, complicações (varicotrombose, sangramento) → cirurgia vascular.",
idealsus: {ideal: "Compressão é a base. Venoativos (diosmina/hesperidina) têm evidência moderada para edema e sintomas.", sus: "Venoativos e meias de compressão não constam na RENAME/REMUME.", ponte: "Medidas gerais para todos; meia e venoativo por compra conforme sintomas e possibilidade do paciente."},
sus: {nacional: "Venoativos e meias de compressão: não constam na RENAME 2024.", betim: "REMUME Betim: não constam. Fornecimento de meias por programas locais: não verificado."},
evid: {resumo: "ESVS 2022 recomenda compressão para sintomas e úlcera venosa. Revisão Cochrane 2020: flebotônicos provavelmente reduzem edema e alguns sintomas (certeza moderada), sem efeito na cicatrização de úlceras.", certeza: "Moderada (estimada)", fontes: ["ivc"]},
mudancas: ["Migrado do Notion."],
nv: []
},
// ───────────────────────── SAÚDE MENTAL
{
id: "tag", nome: "Transtorno de ansiedade generalizada (TAG)", sistema: "Saúde mental", risco: "baixo",
ciap: "P74", cid: "F41.1", tags: "ansiedade preocupação nervoso GAD-7 sertralina",
S: `Paciente, ___ anos, com preocupação excessiva e difícil de controlar sobre ___ há ___ meses, com ___ (inquietação, fadiga, dificuldade de concentração, irritabilidade, tensão muscular, insônia). Impacto ___.
GAD-7: ___. PHQ-9: ___. Ataques de pânico ___. Ideação suicida ___. Álcool/benzodiazepínicos ___. Cafeína/estimulantes ___. Sintomas de tireoide ___.`,
O: `Vigil, orientado, ___ (ansioso), sem sintomas psicóticos.
${VITAIS}`,
A: `Transtorno de ansiedade generalizada, GAD-7 ___, ___ (sem / com) depressão associada, sem risco suicida.`,
P: `- Psicoeducação; atividade física; higiene do sono; reduzir cafeína/álcool.
- TCC (individual, grupo ou guiada) como 1ª linha.
- ISRS se sintomas moderados/graves ou preferência.
- Evitar benzodiazepínicos (no máximo uso curto em crise).
- Reavaliar em 2–4 semanas; manter ISRS ≥ 12 meses após resposta.`,
rx: [
 {trilha: "ambos", titulo: "ISRS (1ª linha farmacológica)", texto: `USO ORAL
1. Sertralina 50 mg ______ 30 comprimidos
   Tomar ½ comprimido (25 mg) pela manhã por 7 dias; depois 1 comprimido (50 mg). Ajustar em 4–6 semanas (até 200 mg).
   OU
2. Fluoxetina 20 mg – iniciar 10 mg (abrir/meia dose se possível) ou 20 mg pela manhã.`, dose: "NV", nota: "Ansiedade pode piorar nas primeiras 1–2 semanas; iniciar com dose baixa."}
],
orient: `A ansiedade tem tratamento. Terapia e atividade física ajudam muito; o remédio, quando indicado, leva 2 a 6 semanas para fazer efeito e não vicia.
Reduza café e energéticos. Evite álcool e calmantes por conta própria.`,
alarme: ["Pensamentos de morte ou de se machucar", "Crises de pânico frequentes", "Uso crescente de álcool ou calmantes", "Incapacidade de trabalhar ou sair de casa"],
encaminhar: "Refratário a 2 tratamentos, comorbidade grave, risco → CAPS/psiquiatria (matriciamento).",
sus: {nacional: "RENAME 2024: fluoxetina (Básico). Sertralina e escitalopram não constam.", betim: "REMUME Betim: sertralina 50 mg e fluoxetina 20 mg disponíveis."},
evid: {resumo: "NICE recomenda abordagem escalonada: psicoeducação e autoajuda guiada, depois TCC ou ISRS (sertralina como 1ª escolha por custo-efetividade). Benzodiazepínicos não são recomendados além do curto prazo.", certeza: "Moderada (estimada)", fontes: ["nice_ansiedade", "rename", "remume"]},
mudancas: ["Migrado do Notion."],
nv: ["Oferta de TCC/psicoterapia na rede de Betim: não verificada.", "Doses: conferir bula."]
},
// ───────────────────────── MUSCULOESQUELÉTICO
{
id: "fascite", nome: "Fascite plantar", sistema: "Musculoesquelético e neurológico", risco: "baixo",
ciap: "L98", cid: "M72.2", tags: "dor no calcanhar esporão fascite plantar primeiro passo",
S: `Paciente, ___ anos, com dor em calcanhar ___ há ___ semanas, pior nos primeiros passos pela manhã ou após repouso ___. Aumento recente de atividade/calçado inadequado ___. Peso ___. Ocupação em pé ___. Trauma ___. Parestesias ___.`,
O: `BEG.  IMC ___
Pé: dor à palpação da inserção medial da fáscia no calcâneo ___. Dorsiflexão do tornozelo ___ (encurtamento de panturrilha?). Windlass ___. Edema/calor ___.`,
A: `Fascite plantar ___ (direita/esquerda), sem sinais de fratura de estresse ou neuropatia.`,
P: `- Alongamento específico da fáscia plantar e da panturrilha diariamente.
- Palmilha/calcanheira e calçado com amortecimento; evitar andar descalço.
- Órtese noturna se sintomas > 6 meses.
- Analgesia curta.
- Infiltração de corticoide: alívio a curto prazo, risco de ruptura da fáscia.
- RX não é necessário para o diagnóstico.`,
rx: [
 {trilha: "ambos", titulo: "Alongamento e analgesia", texto: `ORIENTAÇÕES
1. Alongamento da fáscia: sentado, puxar os dedos do pé para cima por 10 s, 10 vezes, 3 vezes ao dia (principalmente antes dos primeiros passos).
2. Alongamento da panturrilha na parede: 30 s, 3 vezes, 2–3 vezes ao dia.
3. Rolar o pé sobre uma garrafa gelada por 10 minutos à noite.

USO ORAL
4. Ibuprofeno 600 mg – 1 comprimido de 8/8h por até 7 dias, se dor.`, dose: "NV"}
],
orient: `A fascite melhora na maioria das pessoas em alguns meses com alongamento diário e calçado adequado.
Faça o alongamento antes de levantar da cama. Evite andar descalço e use calçado com bom amortecimento.`,
alarme: ["Dor que começou após trauma ou com inchaço importante", "Dormência ou formigamento no pé", "Dor noturna intensa"],
encaminhar: "Refratária a 6–12 meses de tratamento conservador → ortopedia/fisioterapia.",
sus: {nacional: "RENAME 2024: ibuprofeno (Básico).", betim: "REMUME Betim: ibuprofeno 600 mg disponível."},
evid: {resumo: "Diretriz JOSPT 2023: alongamento de fáscia e panturrilha, órteses, terapia manual e educação sobre calçados com recomendação forte a moderada. Infiltração de corticoide tem benefício apenas de curto prazo.", certeza: "Moderada (estimada)", fontes: ["fascite", "rename", "remume"]},
mudancas: ["Migrado do Notion."],
nv: ["Doses: conferir bula."]
},
// ───────────────────────── SAÚDE DA MULHER
{
id: "climaterio", nome: "Climatério – sintomas vasomotores", sistema: "Saúde da mulher", risco: "moderado",
ciap: "X11", cid: "N95.1", tags: "menopausa fogacho calorão climatério terapia hormonal",
alerta: "Sangramento pós-menopausa (≥ 12 meses de amenorreia): investigar endométrio antes de qualquer hormônio.",
S: `Paciente, ___ anos, DUM ___ (amenorreia há ___ meses), com fogachos ___ vezes/dia, sudorese noturna ___, insônia ___, alteração de humor ___, secura vaginal/dispareunia ___, sintomas urinários ___. Impacto ___.
Contraindicações à TH: câncer de mama/endométrio ___, TEV/AVC/IAM prévio ___, doença hepática ativa ___, sangramento não investigado ___. Tabagismo ___. Histerectomia ___. Preferências ___.`,
O: `BEG.
${VITAIS}  IMC ___
Mamas ___. Exame ginecológico (atrofia) ___.`,
A: `Síndrome do climatério com sintomas vasomotores ___ (leves / moderados / graves), ___ (sem / com) contraindicação à TH.`,
P: `- Rastreamentos em dia (mama, colo, risco CV, osteoporose conforme idade).
- TH é o tratamento mais eficaz para fogachos em < 60 anos ou < 10 anos de menopausa sem contraindicações.
- Com útero: estrogênio + progestagênio; sem útero: estrogênio isolado.
- Contraindicação/preferência: não hormonal (ISRS/IRSN em baixa dose, gabapentina) e TCC.
- Atrofia vaginal: estrogênio vaginal em baixa dose (seguro inclusive em muitas contraindicações à TH sistêmica).
- Reavaliar anualmente.`,
rx: [
 {trilha: "evidencia", titulo: "TH transdérmica (menor risco de TEV)", texto: `USO TRANSDÉRMICO
1. Estradiol gel 0,06% (ou adesivo 50 mcg) ______ 1 frasco
   Aplicar 1 a 2 doses (0,75–1,5 mg de estradiol) 1 vez ao dia na pele.

USO ORAL (se tem útero)
2. Progesterona micronizada 100 mg ______ 30 cápsulas
   Tomar 1 cápsula à noite, uso contínuo (ou 200 mg do 1º ao 12º dia do mês).`, dose: "NV", nota: "Via transdérmica preferível com obesidade, HAS, enxaqueca, risco de TEV. Não constam na RENAME nem na REMUME."},
 {trilha: "fora", titulo: "TH oral (RENAME, não consta na REMUME Betim)", texto: `USO ORAL
1. Estrogênios conjugados 0,3 ou 0,625 mg ______ 28 comprimidos
   Tomar 1 comprimido por dia.
   + (se tem útero, REMUME Betim)
2. Medroxiprogesterona 10 mg – 1 comprimido por dia do 1º ao 12º dia de cada mês (ou 2,5–5 mg contínuo).`, dose: "NV"},
 {trilha: "evidencia", titulo: "Não hormonal (contraindicação à TH)", texto: `USO ORAL
1. Escitalopram 10 mg ______ 30 comprimidos
   Tomar 1 comprimido por dia.
   OU venlafaxina 37,5–75 mg/dia ou paroxetina 7,5 mg/dia.`, dose: "NV", nota: "Paroxetina e fluoxetina inibem CYP2D6: evitar com tamoxifeno. Fluoxetina e sertralina (Betim) têm evidência mais fraca para fogachos."}
],
orient: `Os calorões são comuns e costumam diminuir com os anos. Há tratamentos eficazes, com e sem hormônio; vamos escolher juntas conforme seus riscos e preferências.
Roupas em camadas, ambiente fresco, atividade física e evitar álcool e cigarro ajudam.
Qualquer sangramento depois de 1 ano sem menstruar precisa ser avaliado.`,
alarme: ["Sangramento vaginal após 1 ano sem menstruar", "Dor ou inchaço em uma perna", "Nódulo na mama", "Dor no peito ou falta de ar"],
encaminhar: "Sangramento pós-menopausa, contraindicações complexas, menopausa precoce (< 40 anos) → ginecologia.",
idealsus: {ideal: "TH (preferencialmente estradiol transdérmico + progesterona micronizada) é o tratamento mais eficaz para fogachos em mulheres elegíveis.", sus: "A RENAME tem estrogênios conjugados orais e creme vaginal (Básico), mas não aparecem na REMUME de Betim; Betim tem medroxiprogesterona 10 mg. Opções não hormonais com melhor evidência não constam.", ponte: "Confirmar com a farmácia municipal o acesso a estrogênio conjugado; senão, TH por compra (transdérmica se fatores de risco) com medroxiprogesterona do SUS, ou não hormonal por compra."},
sus: {nacional: "RENAME 2024: estrogênios conjugados 0,3 e 0,625 mg comprimido e 0,625 mg/g creme vaginal, estriol 1 mg/g creme vaginal, medroxiprogesterona 10 mg (Básico).", betim: "REMUME Betim: medroxiprogesterona 10 mg disponível; estrogênios não constam."},
evid: {resumo: "TH reduz fogachos em cerca de 75% e, iniciada antes dos 60 anos ou até 10 anos da menopausa, tem perfil benefício-risco favorável (NAMS 2022). Estrogênio transdérmico tem menor risco de TEV que o oral (observacional). ISRS/IRSN e gabapentina têm eficácia moderada (NAMS 2023).", certeza: "Alta para eficácia da TH (estimada)", fontes: ["menopausa", "rename", "remume"]},
mudancas: ["Migrado do Notion ('Climatério')."],
nv: ["Disponibilidade de estradiol transdérmico e progesterona micronizada e preços: não verificados.", "Doses: conferir bula."]
},
{
id: "dip", nome: "Doença inflamatória pélvica (DIP) leve a moderada", sistema: "Saúde da mulher", risco: "alto",
ciap: "X74", cid: "N73.9", tags: "DIP dor pélvica cervicite anexite IST ceftriaxona doxiciclina",
alerta: "Abdome agudo, abscesso tubo-ovariano, gestação, febre alta/toxemia, vômitos que impedem VO, falha após 72 h ou dúvida com apendicite/ectópica: internação.",
S: `Paciente, ___ anos, com dor pélvica/abdominal baixa há ___ dias, ___ (dispareunia, corrimento, sangramento intermenstrual/pós-coito, disúria, febre).
DUM ___. Possibilidade de gestação ___. DIU ___ (inserção recente?). Parcerias ___ (novas/múltiplas), uso de preservativo ___. IST prévias ___.`,
O: `___ estado geral.
${VITAIS}
ABD: dor em hipogástrio/FIs ___, sinais de peritonite ___.
Especular: colo ___ (friável, secreção mucopurulenta). Toque: dor à mobilização do colo ___, dor anexial ___, massa ___.
β-hCG: ___.`,
A: `Doença inflamatória pélvica leve a moderada, sem critérios de internação.`,
P: `- Diagnóstico clínico: dor à mobilização do colo, dor uterina ou anexial em mulher sexualmente ativa com dor pélvica, sem outra causa.
- Tratar empiricamente sem aguardar exames.
- Coletar NAAT para clamídia/gonococo se disponível; testes rápidos de HIV, sífilis e hepatites.
- DIU: pode ser mantido; retirar se não houver melhora em 48–72 h.
- Tratar parcerias dos últimos 60 dias; abstinência até término do tratamento.
- Reavaliar em 72 h; notificar conforme fluxo de IST.`,
rx: [
 {trilha: "ambos", titulo: "Tratamento ambulatorial", texto: `USO INTRAMUSCULAR
1. Ceftriaxona 500 mg IM, dose única.

USO ORAL
2. Doxiciclina 100 mg ______ 28 comprimidos
   Tomar 1 comprimido de 12/12h por 14 dias.
3. Metronidazol 250 mg ______ 56 comprimidos
   Tomar 2 comprimidos (500 mg) de 12/12h por 14 dias.`, dose: "NV", nota: "Esquema CDC 2021 (conferido em fonte secundária; confirmar no PCDT IST). Ceftriaxona 1 g IM (Betim): usar metade da dose. Evitar álcool com metronidazol. Doxiciclina contraindicada na gestação (gestante: internar)."},
 {trilha: "ambos", titulo: "Parcerias sexuais", texto: `USO INTRAMUSCULAR
1. Ceftriaxona 500 mg IM, dose única.
USO ORAL
2. Doxiciclina 100 mg – 1 comprimido de 12/12h por 7 dias (ou azitromicina 1 g dose única).`, dose: "NV", nota: "Conferir esquema de parceria no PCDT IST vigente."}
],
orient: `A DIP é uma infecção do útero e das trompas, geralmente transmitida pelo sexo. O tratamento evita infertilidade e dor crônica.
Tome todos os comprimidos por 14 dias, mesmo melhorando. Não beba álcool durante o uso do metronidazol.
Suas parcerias precisam ser tratadas. Evite relações até terminar o tratamento de todos.
Volte em 3 dias para reavaliação.`,
alarme: ["Febre alta ou calafrios", "Dor que piora ou barriga dura", "Vômitos que impedem tomar os remédios", "Desmaio ou tontura", "Sem melhora em 3 dias"],
encaminhar: "Critérios de internação ou falha em 72 h → urgência/ginecologia.",
sus: {nacional: "RENAME 2024: ceftriaxona 500 mg e 1 g, doxiciclina 100 mg, metronidazol 250 e 400 mg (Básico/Estratégico).", betim: "REMUME Betim: ceftriaxona 1 g IM, doxiciclina 100 mg e metronidazol 250 mg disponíveis."},
evid: {resumo: "O esquema ceftriaxona + doxiciclina + metronidazol por 14 dias (CDC 2021) melhora a cura clínica e reduz endometrite persistente e clamídia em relação ao esquema sem metronidazol (ECR). Tratamento ambulatorial tem desfechos semelhantes à internação em DIP leve a moderada (ECR PEACH).", certeza: "Moderada (estimada)", fontes: ["cdc_dip", "pcdt_ist22", "rename", "remume"]},
mudancas: ["Migrado do Notion ('DIP').", "Incluídos metronidazol por 14 dias, manejo do DIU e tratamento de parcerias."],
nv: ["Esquema do PCDT IST 2022 para DIP e para parcerias: confirmar no documento."]
},
{
id: "bartholinite", nome: "Bartholinite / abscesso de Bartholin", sistema: "Saúde da mulher", risco: "baixo",
ciap: "X99", cid: "N75.1 · N75.0", tags: "bartholin bartolinite abscesso vulvar cisto",
alerta: "Celulite extensa, febre alta, imunossupressão, ou massa em mulher > 40 anos (afastar neoplasia): avaliação especializada.",
S: `Paciente, ___ anos, com aumento de volume doloroso em ___ (lado) do introito vulvar há ___ dias. Dor ao sentar/andar ___. Febre ___. Episódios prévios ___. Corrimento ___. Parcerias/IST ___. DM ___.`,
O: `BEG.
${VITAIS}
Vulva: nódulo de ___ cm em topografia de glândula de Bartholin ___, flutuação ___, celulite ___.`,
A: `___ (cisto / abscesso) de glândula de Bartholin ___, ___ (com / sem) celulite.`,
P: `- Cisto assintomático pequeno: expectante.
- Abscesso flutuante: drenagem com cateter de Word ou marsupialização (preferíveis à incisão simples, que recidiva).
- Banhos de assento mornos 2–3 vezes ao dia.
- Antibiótico se celulite, sinais sistêmicos ou recorrência; testar IST.`,
rx: [
 {trilha: "ambos", titulo: "Analgesia e cuidados", texto: `USO ORAL
1. Ibuprofeno 600 mg – 1 comprimido de 8/8h por até 5 dias.

ORIENTAÇÕES
2. Banho de assento com água morna por 10–15 minutos, 2 a 3 vezes ao dia.`, dose: "NV"},
 {trilha: "ambos", titulo: "Se celulite ou sinais sistêmicos", texto: `USO ORAL
1. Amoxicilina 500 mg + clavulanato 125 mg ______ 21 comprimidos
   Tomar 1 comprimido de 8/8h por 7 dias.
   OU (alergia)
2. Sulfametoxazol 400 mg + trimetoprima 80 mg – 2 comprimidos de 12/12h + metronidazol 250 mg 2 comprimidos de 12/12h, por 7 dias.`, dose: "NV"}
],
orient: `Banhos de assento mornos ajudam a drenar e aliviam a dor. Se houver pus, a drenagem é o tratamento mais eficaz.
Volte se a dor, o inchaço ou a febre aumentarem.`,
alarme: ["Febre", "Vermelhidão que se espalha", "Dor muito intensa que impede sentar ou andar", "Caroço que volta várias vezes"],
encaminhar: "Abscesso para drenagem (se não realizada na UBS), recorrência (marsupialização), > 40 anos com massa → ginecologia.",
sus: {nacional: "RENAME 2024: amoxicilina+clavulanato, SMX-TMP, metronidazol, ibuprofeno (Básico).", betim: "REMUME Betim: amoxicilina+clavulanato 500/125 mg, SMX-TMP, metronidazol 250 mg, ibuprofeno disponíveis."},
evid: {resumo: "Cateter de Word e marsupialização têm taxas de recorrência menores que incisão e drenagem simples. A maioria dos abscessos é polimicrobiana; antibiótico é adjuvante, não substitui a drenagem.", certeza: "Baixa (estimada)", fontes: ["bartholin", "rename", "remume"]},
mudancas: ["Migrado do Notion ('Bartolinite fase inicial')."],
nv: ["Doses: conferir bula. Disponibilidade de cateter de Word na rede: não verificada."]
}
);
