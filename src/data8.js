// ───────────── LOTE 8 – urgências, gestação e TVP – revisão 09/10/2026
Object.assign(FONTES, {
  sbp_anafilaxia: {t: "Solé D et al. Consenso Brasileiro sobre Alergia Alimentar 2018 – Parte 2 (ASBAI/SBP), Arq Asma Alerg Imunol 2018 – tratamento da anafilaxia (consenso).", f: "F", url: "https://www.sbp.com.br/flip/consenso-alergia-alimentar-parte-02/14/"},
  iff_eclampsia: {t: "IFF/Fiocruz – Portal de Boas Práticas. Prevenção da eclâmpsia: o uso do sulfato de magnésio, 26/10/2023 (baseado em RBEHG 2023 e MS Gestação de Alto Risco) (material técnico).", f: "F", url: "https://portaldeboaspraticas.iff.fiocruz.br/wp-content/uploads/2018/07/PREVENCAO_ECLAMPSIA_v2023.pdf"},
  toxicologia_mg: {t: "Governo de MG – Serviço de Toxicologia do Hospital João XXIII (Fhemig): orientação em intoxicações e acidentes por animais peçonhentos, telefone 0800-722-6001 (página atualizada em 2022).", f: "F", url: "https://www.mg.gov.br/servico/solicitar-atendimento-vitimas-de-intoxicacao-quimica-auto-exterminio-envenenamento-ou"},
  aha_avc: {t: "Powers WJ et al. AHA/ASA Guidelines for the Early Management of Acute Ischemic Stroke, 2019 (diretriz).", f: "C", url: ""},
  esc_sincope: {t: "Brignole M et al. ESC Guidelines for the diagnosis and management of syncope, 2018 (diretriz).", f: "C", url: ""},
  aes_estado: {t: "Glauser T et al. AES Guideline: Treatment of convulsive status epilepticus in children and adults, 2016; ECR RAMPART (midazolam IM), NEJM 2012 (diretriz; ECR).", f: "C", url: ""},
  trec: {t: "TREC Collaborative Group (Rio de Janeiro). Haloperidol + prometazina × midazolam na agitação, BMJ 2003; Huf G et al. Cochrane 2016 – haloperidol + prometazina (ECR brasileiro; revisão sistemática).", f: "C", url: ""},
  ssc_sepse: {t: "Evans L et al. Surviving Sepsis Campaign Guidelines, 2021; Ministério da Saúde – Guia de Vigilância (doença meningocócica: antibiótico antes da remoção) (diretriz; norma).", f: "C", url: ""},
  sangramento_1tri: {t: "NICE NG126. Ectopic pregnancy and miscarriage: diagnosis and initial management, 2019 (atualizada 2023); Ministério da Saúde – Gestação de Alto Risco, 2022 (diretriz; manual).", f: "C", url: ""},
  prenatal: {t: "Ministério da Saúde – Cadernos de Atenção Básica nº 32 (Atenção ao pré-natal de baixo risco); OMS – Recommendations on antenatal care, 2016; USPSTF – folic acid 2023 (manual; diretrizes).", f: "C", url: ""},
  chest_tev: {t: "Stevens SM et al. Antithrombotic therapy for VTE disease: CHEST Guideline, 2021; escore de Wells (diretriz).", f: "C", url: ""}
});

CONDICOES.push(
// ───────────────────────── URGÊNCIAS NA UBS
{
id: "anafilaxia", nome: "Anafilaxia", sistema: "Urgências na UBS", risco: "alto",
ciap: "A92", cid: "T78.2", tags: "anafilaxia choque anafilático alergia grave adrenalina edema de glote",
alerta: "ADRENALINA IM IMEDIATA no vasto lateral da coxa: 0,01 mg/kg (0,01 mL/kg da solução 1 mg/mL), máx. 0,3 mg em pré-púberes e 0,5 mg em adolescentes/adultos; repetir a cada 5–15 min. Acionar SAMU (192). Anti-histamínico e corticoide NÃO substituem a adrenalina.",
S: `Paciente, ___ anos, com início há ___ min de ___ (urticária/angioedema, prurido, dispneia, sibilância, rouquidão, estridor, tontura/síncope, dor abdominal, vômitos) após exposição a ___ (alimento, medicamento, picada, látex, desconhecido).
Episódios prévios ___. Asma ___. Uso de betabloqueador/IECA ___. Peso ___ kg.`,
O: `___ estado geral, consciência ___.
${VITAIS}
Pele: urticária ___, angioedema ___. Via aérea: estridor ___, rouquidão ___. AR: sibilos ___. Perfusão ___.`,
A: `Anafilaxia (critérios clínicos), desencadeante provável ___.`,
P: `- Adrenalina IM imediata; repetir a cada 5–15 min se necessário.
- Decúbito dorsal com pernas elevadas (gestante: decúbito lateral esquerdo); se dispneia, sentado. Não levantar bruscamente.
- O₂, acesso venoso, SF 0,9% em bolus se hipotensão.
- Broncoespasmo: salbutamol inalatório (adjuvante).
- Anti-histamínico e corticoide apenas como adjuvantes.
- SAMU/remoção para observação (mínimo 4–6 h; mais se respiratório ou choque).
- Na alta: plano por escrito, encaminhar à alergologia, prescrição de adrenalina autoinjetável se disponível.`,
rx: [
 {trilha: "ambos", titulo: "Adrenalina IM (1ª linha)", texto: `USO INTRAMUSCULAR – face anterolateral da coxa
1. Epinefrina 1 mg/mL – 0,01 mL/kg (= ___ mL para ___ kg).
   Máximo por dose: 0,3 mL (pré-púbere) / 0,5 mL (adolescente e adulto).
   Repetir a cada 5–15 minutos se não houver melhora.`, dose: "F", nota: "Consenso ASBAI/SBP 2018. Não há contraindicação absoluta à adrenalina na anafilaxia."},
 {trilha: "ambos", titulo: "Adjuvantes", texto: `USO INTRAVENOSO
1. Soro fisiológico 0,9%: adulto 1–2 L rápido se hipotensão; criança 5–10 mL/kg nos primeiros 5 min (até 30 mL/kg na 1ª hora).

USO INALATÓRIO (se broncoespasmo)
2. Salbutamol 100 mcg/dose – 4 a 8 jatos com espaçador, repetir conforme resposta.

USO INTRAMUSCULAR/INTRAVENOSO (após adrenalina)
3. Prometazina 25 mg/mL – 0,5 mg/kg IM profunda (máx. 25 mg), só após adrenalina e com PA estável; não fazer IV em bolus. CONTRAINDICADA em < 2 anos.
4. Hidrocortisona 100–500 mg IV (adulto) ou 4–5 mg/kg (criança).`, dose: "NV", nota: "Corticoide e anti-histamínico não tratam obstrução de via aérea nem choque."}
],
orient: `Você teve uma reação alérgica grave. Evite totalmente o que causou a reação.
Leve sempre com você a orientação por escrito e procure a alergologia.
Se acontecer de novo: procure atendimento imediato ou ligue 192.`,
alarme: ["Falta de ar, chiado ou voz rouca", "Inchaço na boca, língua ou garganta", "Tontura, desmaio ou fraqueza", "Volta dos sintomas nas horas seguintes"],
encaminhar: "Todos → observação em urgência (SAMU). Alta com encaminhamento à alergologia.",
sus: {nacional: "RENAME 2024: epinefrina 1 mg/mL, prometazina 25 mg/mL, hidrocortisona 100 e 500 mg, salbutamol aerossol (Básico).", betim: "REMUME Betim: epinefrina 1 mg/mL, prometazina 25 mg/mL injetável, hidrocortisona 100 e 500 mg, salbutamol aerossol e SF 0,9% disponíveis. Adrenalina autoinjetável não consta."},
evid: {resumo: "A adrenalina IM precoce é o único tratamento de 1ª linha; atraso na adrenalina associa-se a desfechos fatais. Anti-histamínicos e corticoides não revertem obstrução de via aérea nem choque.", certeza: "Recomendação consensual (evidência observacional)", fontes: ["sbp_anafilaxia", "rename", "remume"]},
mudancas: ["Entrada nova (antes só aparecia no alerta de urticária e picada de inseto)."],
nv: ["Adrenalina autoinjetável: disponibilidade e custo não verificados."]
},
{
id: "avc-ait", nome: "Suspeita de AVC / AIT", sistema: "Urgências na UBS", risco: "alto",
ciap: "K89 · K90", cid: "I64 · G45.9", tags: "AVC derrame AIT boca torta fraqueza fala enrolada FAST trombólise",
alerta: "Déficit neurológico súbito (face, braço, fala – SAMU/FAST): ligar 192 IMEDIATAMENTE e registrar a hora em que foi visto bem pela última vez. Trombólise até 4,5 h; trombectomia até 24 h em casos selecionados. AIT também é urgência.",
S: `Paciente, ___ anos, com ___ (desvio de rima, fraqueza/dormência em ___, alteração de fala, perda visual, desequilíbrio, cefaleia súbita) iniciado às ___ (última vez visto bem: ___). Sintomas ___ (persistentes / resolvidos em ___ min).
HAS ___, DM ___, FA ___, AVC prévio ___, anticoagulante ___ (último uso ___). Trauma ___. Convulsão no início ___.`,
O: `___ estado geral, Glasgow ___.
${VITAIS}  Glicemia capilar ___ (obrigatória)
SAMU/FAST: face ___, braço ___, fala ___. Pupilas ___. Força ___. Marcha ___.`,
A: `Suspeita de ___ (AVC agudo / AIT), início ___ (última vez bem às ___).`,
P: `- Acionar SAMU imediatamente; não aguardar exames.
- Glicemia capilar (hipoglicemia simula AVC: corrigir se < 60 mg/dL).
- Cabeceira 0–30°, O₂ se SpO₂ < 94%, nada por via oral (risco de aspiração).
- Não reduzir PA na UBS (salvo orientação da regulação); não dar AAS antes da imagem.
- Registrar horário, medicamentos (anticoagulantes) e contato de familiar para a equipe de destino.
- AIT recente: avaliação no mesmo dia em serviço com imagem (alto risco de AVC nos primeiros dias).`,
rx: [
 {trilha: "ambos", titulo: "Sem medicação na UBS", texto: `CONDUTA
1. Acionar SAMU 192 – informar horário de início/última vez visto bem.
2. Glicemia capilar; se < 60 mg/dL: glicose 50% 20–50 mL IV (ver modelo de hipoglicemia).
3. Não administrar AAS, anti-hipertensivo ou sedativo antes da avaliação hospitalar.`, dose: "NV"}
],
orient: `Os sinais de AVC são: boca torta, fraqueza em um braço ou perna e fala enrolada. Diante deles, ligue 192 imediatamente: cada minuto conta.
Mesmo que os sintomas passem, é preciso avaliação no mesmo dia.`,
alarme: ["Boca torta", "Fraqueza ou dormência de um lado do corpo", "Fala enrolada ou dificuldade de entender", "Perda súbita da visão", "Dor de cabeça súbita e muito forte"],
encaminhar: "Todos → SAMU / hospital com protocolo de AVC.",
sus: {nacional: "Linha de cuidado do AVC (rede de urgência e emergência).", betim: "Hospital de referência para AVC na região de Betim: confirmar com a regulação."},
evid: {resumo: "Trombólise em até 4,5 h e trombectomia em até 24 h em casos selecionados reduzem incapacidade; o benefício depende do tempo. Após AIT, o risco de AVC é maior nos primeiros dias, justificando avaliação imediata.", certeza: "Alta (estimada)", fontes: ["aha_avc"]},
mudancas: ["Entrada nova."],
nv: ["Hospital de referência para AVC: confirmar."]
},
{
id: "sincope", nome: "Síncope (perda transitória de consciência)", sistema: "Urgências na UBS", risco: "alto",
ciap: "A06", cid: "R55", tags: "desmaio síncope perda de consciência vasovagal arritmia",
alerta: "Síncope ao esforço ou deitado, precedida de palpitação, com dor torácica/dispneia, ECG alterado, cardiopatia estrutural, história familiar de morte súbita < 40 anos, trauma grave ou hipotensão persistente: alto risco → urgência.",
S: `Paciente, ___ anos, com perda de consciência em ___, duração ___, em ___ (pé / sentado / deitado / esforço). Pródromo: ___ (calor, náusea, visão escura / palpitação / nenhum). Gatilho: ___ (dor, calor, ficar em pé muito tempo, micção, tosse). Recuperação ___ (rápida e completa / confusão prolongada).
Testemunha: movimentos ___, liberação esfincteriana ___. Dor torácica/dispneia ___. Cardiopatia ___. Medicamentos (anti-hipertensivos, QT longo) ___. Morte súbita familiar ___. Gestação ___.`,
O: `BEG, orientado.
PA deitado ___ / em pé (3 min) ___ | FC ___ | SpO₂ ___ | Glicemia ___
ACV: sopro ___ (estenose aórtica?), ritmo ___. Neuro ___. Trauma ___.
ECG: ___ (ritmo, PR, QRS, QTc, bloqueios, pré-excitação, Brugada, sinais de isquemia).`,
A: `Síncope provavelmente ___ (reflexa / ortostática / cardíaca a afastar), ___ (baixo / alto) risco.`,
P: `- ECG em todos.
- Baixo risco (reflexa típica, ECG normal, sem cardiopatia): alta com orientação (manobras de contrapressão, hidratação, evitar gatilhos).
- Ortostática: revisar medicamentos, hidratação.
- Alto risco: urgência/monitorização.
- Diferenciar de crise epiléptica e de queda mecânica.`,
rx: [
 {trilha: "ambos", titulo: "Síncope reflexa – medidas", texto: `ORIENTAÇÕES
1. Ao sentir os sintomas: deitar ou sentar e cruzar as pernas/apertar as mãos (manobras de contrapressão).
2. Hidratação adequada (2–3 L/dia, se sem contraindicação) e evitar ficar muito tempo em pé, calor e jejum.`, dose: "NV"}
],
orient: `O desmaio mais comum é benigno e acontece por queda rápida da pressão. Ao sentir que vai desmaiar, deite ou sente imediatamente e cruze as pernas apertando os músculos.
Beba bastante água e evite ficar muito tempo em pé em lugares quentes.`,
alarme: ["Desmaio durante esforço ou deitado", "Palpitação antes de desmaiar", "Dor no peito ou falta de ar", "Desmaio com ferimento grave", "Desmaios repetidos"],
encaminhar: "Alto risco → urgência. Recorrente sem diagnóstico → cardiologia (Holter, ecocardiograma).",
sus: {nacional: "ECG na APS conforme disponibilidade.", betim: "Disponibilidade de ECG na UBS: confirmar."},
evid: {resumo: "ESC 2018: história, exame com PA ortostática e ECG definem o risco; síncope reflexa de baixo risco pode ter alta com orientação. Achados de alto risco exigem avaliação em urgência.", certeza: "Moderada (estimada)", fontes: ["esc_sincope"]},
mudancas: ["Entrada nova."],
nv: []
},
{
id: "convulsao-ativa", nome: "Crise convulsiva em curso", sistema: "Urgências na UBS", risco: "alto",
ciap: "N88 · N07", cid: "R56.8 · G41", tags: "convulsão agora crise epiléptica estado de mal diazepam midazolam",
alerta: "Crise > 5 minutos = tratar como estado de mal: benzodiazepínico imediato, glicemia, SAMU 192.",
S: `Paciente, ___ anos, em crise ___ (tônico-clônica generalizada / focal) iniciada às ___. Epilepsia conhecida ___ (medicamentos, adesão). Febre ___. Trauma ___. Álcool/drogas ___. DM (hipoglicemia) ___. Gestação ___ (eclâmpsia?). Peso ___ kg.`,
O: `Em crise ___ / pós-ictal. Tempo de crise: ___ min.
FC ___ | SpO₂ ___ | Glicemia capilar ___ | PA ___
Via aérea ___. Sinais de trauma ___. Rigidez de nuca ___.`,
A: `Crise convulsiva ___ (> 5 min – estado de mal / autolimitada), causa provável ___.`,
P: `- Proteger de trauma; decúbito lateral; não colocar nada na boca; aspirar secreções; O₂.
- Glicemia capilar: se < 60 mg/dL, glicose IV.
- Se > 5 minutos: benzodiazepínico (IV se acesso; senão IM/intranasal/retal); repetir 1 vez após 5–10 min.
- Acionar SAMU.
- Gestante ≥ 20 semanas ou puérpera: sulfato de magnésio (ver modelo de pré-eclâmpsia).
- Febre em criança: avaliar meningite.`,
rx: [
 {trilha: "ambos", titulo: "Benzodiazepínico (crise > 5 min)", texto: `SEM ACESSO VENOSO
1. Midazolam 5 mg/mL IM: 10 mg (> 40 kg) ou 5 mg (13–40 kg); ou intranasal 0,2 mg/kg (máx. 10 mg; dividir entre as narinas, ≤ 1 mL por narina) ou bucal 0,3–0,5 mg/kg (máx. 10 mg).
   OU
2. Diazepam 5 mg/mL via retal: 0,5 mg/kg (máx. 10–20 mg).

COM ACESSO VENOSO
3. Diazepam 5 mg/mL IV lento: 0,2–0,3 mg/kg (máx. 10 mg por dose); repetir 1 vez em 5–10 min se persistir.`, dose: "NV", nota: "Monitorar respiração (depressão respiratória). Após 2 doses sem controle: fenitoína/fenobarbital IV no serviço de urgência."},
 {trilha: "ambos", titulo: "Hipoglicemia", texto: `USO INTRAVENOSO
1. Glicose 50%: adulto 50 mL IV; criança: glicose 10% 2–5 mL/kg (preparar: 1 mL de glicose 50% + 4 mL de SF 0,9%; a REMUME não tem glicose 10%).
   Etilista/desnutrido: tiamina 100 mg IV antes da glicose.`, dose: "NV"}
],
orient: `Durante uma crise: deite a pessoa de lado, proteja a cabeça, afaste objetos e não coloque nada na boca.
Ligue 192 se a crise durar mais de 5 minutos, se houver outra crise sem recuperação ou se for a primeira crise.`,
alarme: ["Crise que dura mais de 5 minutos", "Crises repetidas sem acordar entre elas", "Dificuldade para respirar ou lábios roxos", "Febre com rigidez na nuca", "Fraqueza de um lado após a crise"],
encaminhar: "Crise > 5 min, primeira crise, trauma, gestante, febre com sinais meníngeos → SAMU/urgência.",
sus: {nacional: "RENAME 2024: diazepam 5 mg/mL, midazolam (solução oral Básico), fenitoína e fenobarbital injetáveis, glicose 50% (Básico).", betim: "REMUME Betim: diazepam 5 mg/mL injetável, midazolam 5 mg/mL injetável (3 mL e 10 mL), fenobarbital e fenitoína injetáveis, glicose 50%, tiamina injetável disponíveis."},
evid: {resumo: "AES 2016: benzodiazepínico é a 1ª linha após 5 minutos de crise. Midazolam IM foi pelo menos tão eficaz quanto lorazepam IV no pré-hospitalar (RAMPART). Tratar a hipoglicemia e as causas reversíveis.", certeza: "Alta (estimada)", fontes: ["aes_estado", "rename", "remume"]},
mudancas: ["Entrada nova (complementa 'Primeira crise convulsiva')."],
nv: ["Doses: conferir bula e protocolo do SAMU."]
},
{
id: "agitacao", nome: "Agitação psicomotora", sistema: "Urgências na UBS", risco: "alto",
ciap: "P04 · P29", cid: "R45.1", tags: "agitação surto agressividade contenção haloperidol prometazina",
alerta: "Avaliar primeiro causas clínicas: hipoglicemia, hipóxia, intoxicação/abstinência, delirium, TCE, infecção. Segurança da equipe: não atender sozinho; manter saída livre; acionar SAMU/polícia se risco iminente.",
S: `Paciente, ___ anos, trazido por ___ por ___ (agitação, agressividade, discurso desorganizado) há ___. Transtorno mental conhecido ___ (medicamentos, adesão). Uso de álcool/drogas ___ (última dose ___). Sintomas clínicos (febre, cefaleia, dor) ___. Doenças ___. Gestação ___.`,
O: `___ (agitado / ameaçador / confuso), orientação ___, discurso ___, alucinações ___.
${VITAIS}  Glicemia capilar ___
Sinais de intoxicação/abstinência ___. Sinais focais ___. Trauma ___.`,
A: `Agitação psicomotora, provável causa ___ (psiquiátrica / intoxicação / abstinência / orgânica – delirium).`,
P: `- Abordagem verbal (desescalada): tom calmo, espaço, oferecer escolhas, reduzir estímulos.
- Glicemia e sinais vitais assim que possível.
- Se falha da abordagem verbal e risco: tranquilização rápida (preferir via oral se o paciente aceitar; IM se necessário).
- Contenção mecânica só como último recurso, com equipe treinada, monitorização e registro.
- Encaminhar: SAMU/urgência psiquiátrica (causa psiquiátrica) ou clínica (orgânica).`,
rx: [
 {trilha: "ambos", titulo: "Tranquilização rápida IM (adulto)", texto: `USO INTRAMUSCULAR
1. Haloperidol 5 mg/mL – 1 ampola (5 mg)
   +
2. Prometazina 25 mg/mL – 2 mL (50 mg)
   Mesma seringa ou separados; reavaliar em 30–60 min.
   OU
3. Midazolam 5 mg/mL – 5–10 mg IM (idoso/baixo peso 2,5–5 mg), com oxímetro, ambu e O₂ disponíveis; evitar se intoxicação por álcool ou outros depressores.`, dose: "NV", nota: "ECRs TREC (Rio de Janeiro, em ambiente hospitalar): haloperidol + prometazina e midazolam IM eficazes; midazolam age mais rápido, com risco de depressão respiratória. Haloperidol: evitar em Parkinson/demência com corpos de Lewy; risco de QT longo. Idoso/delirium: doses menores; evitar benzodiazepínico em delirium (exceto abstinência). Biperideno se distonia."},
 {trilha: "ambos", titulo: "Via oral (se aceitar)", texto: `USO ORAL
1. Haloperidol 5 mg – 1 comprimido
   OU
2. Diazepam 10 mg – 1 comprimido (abstinência alcoólica / ansiedade intensa).`, dose: "NV"}
],
orient: `A pessoa precisa de avaliação em serviço especializado. A família deve acompanhar e levar a lista de medicamentos em uso.`,
alarme: ["Sonolência excessiva ou dificuldade para respirar após a medicação", "Rigidez muscular com febre (síndrome neuroléptica maligna)", "Torção do pescoço ou olhos (distonia)"],
encaminhar: "Urgência psiquiátrica/CAPS III (causa psiquiátrica) ou pronto-socorro clínico (causa orgânica) via SAMU.",
sus: {nacional: "RENAME 2024: haloperidol 5 mg/mL injetável e comprimido, prometazina 25 mg/mL, diazepam, biperideno injetável (Básico); midazolam apenas 2 mg/mL solução oral (injetável não consta).", betim: "REMUME Betim: haloperidol 5 mg/mL injetável e comprimidos, prometazina 25 mg/mL, midazolam 5 mg/mL, diazepam e biperideno 5 mg/mL disponíveis."},
evid: {resumo: "ECRs brasileiros (TREC-Rio) mostraram que haloperidol + prometazina IM é eficaz e seguro para tranquilização rápida; midazolam IM tem início mais rápido. Revisão Cochrane apoia a combinação. A abordagem verbal é a primeira etapa.", certeza: "Moderada (estimada)", fontes: ["trec", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Fluxo SAMU/urgência psiquiátrica em Betim: confirmar.", "Doses: conferir bula."]
},
{
id: "intoxicacao", nome: "Intoxicação exógena (medicamentos e produtos)", sistema: "Urgências na UBS", risco: "alto",
ciap: "A84 · A86", cid: "T50.9 · X49", tags: "intoxicação envenenamento overdose ingestão de remédios chumbinho carvão ativado CIATox",
alerta: "Ligar para a Toxicologia/CIATox (MG: 0800-722-6001) para orientação específica. Rebaixamento de consciência, convulsão, arritmia, insuficiência respiratória ou tentativa de suicídio: SAMU 192.",
S: `Paciente, ___ anos, com exposição a ___ (substância, apresentação, quantidade estimada ___) por via ___ às ___ (há ___ h). Intencional ___ (tentativa de suicídio?). Sintomas ___. Outras substâncias/álcool ___. Embalagens trazidas ___. Peso ___ kg.`,
O: `___ estado geral, Glasgow ___.
${VITAIS}  Glicemia capilar ___
Pupilas ___ (miose/midríase). Pele ___ (sudorese/seca). Secreções ___. Ruídos intestinais ___. Tremor/clônus ___. Odor ___.
Síndrome tóxica provável: ___ (colinérgica, anticolinérgica, simpaticomimética, opioide, sedativo-hipnótica).`,
A: `Intoxicação exógena por ___, ___ h, ___ (sintomática / assintomática).`,
P: `- ABC; glicemia; monitorizar.
- Contato com CIATox/Toxicologia para conduta específica (antídoto, tempo de observação).
- Descontaminação: carvão ativado só se ingestão potencialmente tóxica há ≤ 1 h, via aérea protegida e substância adsorvível (não para álcool, ferro, lítio, cáusticos, hidrocarbonetos).
- Não induzir vômito.
- Opioide com depressão respiratória: naloxona.
- Tentativa de suicídio: avaliação de risco e segurança (ver modelo).
- Notificação compulsória de intoxicação exógena; tentativa de suicídio: notificação IMEDIATA (até 24 h) à vigilância municipal.`,
rx: [
 {trilha: "ambos", titulo: "Antídotos e descontaminação disponíveis em Betim", texto: `USO ORAL
1. Carvão ativado – 1 g/kg (máx. 50 g) diluído em água, dose única, se indicado (≤ 1 h).

USO INTRAVENOSO/INTRAMUSCULAR
2. Naloxona 0,4 mg/mL – 0,4 mg IV/IM (criança 0,1 mg/kg, máx. 2 mg); repetir a cada 2–3 min conforme resposta respiratória.
3. Atropina 0,5 mg/mL – na síndrome colinérgica (organofosforado/carbamato – "chumbinho"): adulto 1–2 mg IV; criança 0,02–0,05 mg/kg IV (mín. 0,1 mg); dobrar a cada 5 min até secar secreções brônquicas.`, dose: "NV", nota: "Flumazenil não é recomendado de rotina (risco de convulsão em usuários crônicos ou com ingestão de tricíclicos). Conferir conduta com o CIATox."}
],
orient: `Guarde as embalagens e informe tudo o que foi tomado. Não provoque vômito e não dê leite ou outros líquidos sem orientação.
Medicamentos e produtos de limpeza devem ficar trancados e longe do alcance de crianças.`,
alarme: ["Sonolência, confusão ou convulsão", "Respiração lenta ou difícil", "Vômitos persistentes", "Palpitação ou dor no peito"],
encaminhar: "Intoxicação potencialmente grave, sintomática ou intencional → urgência (SAMU).",
sus: {nacional: "RENAME 2024: carvão vegetal ativado, naloxona, flumazenil, atropina (Básico).", betim: "REMUME Betim: carvão ativado, naloxona 0,4 mg/mL, flumazenil 0,1 mg/mL e atropina 0,5 mg/mL disponíveis."},
evid: {resumo: "A conduta depende do agente; centros de informação toxicológica reduzem internações desnecessárias e orientam antídotos. Carvão ativado tem benefício provável só nas primeiras horas e com via aérea protegida.", certeza: "Baixa a moderada (estimada)", fontes: ["toxicologia_mg", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Telefone e funcionamento 24 h do serviço de toxicologia: conferir (página de 2022).", "Doses de antídotos: confirmar com o CIATox."]
},
{
id: "sepse", nome: "Suspeita de sepse / infecção grave", sistema: "Urgências na UBS", risco: "alto",
ciap: "A78", cid: "A41.9", tags: "sepse infecção grave choque séptico meningococcemia petéquias qSOFA",
alerta: "Infecção + qualquer de: FR ≥ 22, alteração de consciência, PAS ≤ 100 mmHg (qSOFA ≥ 2), SpO₂ < 92%, enchimento capilar lento, oligúria ou petéquias com febre: SAMU. Suspeita de meningococcemia/meningite: antibiótico antes da remoção.",
S: `Paciente, ___ anos, com febre ___ e ___ (foco suspeito: pulmonar, urinário, abdominal, pele, meníngeo) há ___ dias. Piora: ___ (confusão, prostração, falta de ar, diminuição da urina, manchas na pele).
Imunossupressão ___, DM ___, idade extrema ___, gestação/puerpério ___, procedimento recente ___.`,
O: `___ estado geral, consciência ___.
${VITAIS}  Enchimento capilar ___ s | Glicemia ___ | Diurese ___
Pele: petéquias/púrpura ___, livedo ___. Sinais meníngeos ___. Foco: ___.
qSOFA: ___ / 3.`,
A: `Suspeita de sepse de foco ___, qSOFA ___.`,
P: `- Acionar SAMU; O₂ se SpO₂ < 92%; acesso venoso; SF 0,9% em bolus se hipotensão/má perfusão (reavaliar após cada bolus).
- Antibiótico precoce: se a remoção for demorar ou houver suspeita de doença meningocócica, administrar ceftriaxona antes da transferência (colher hemocultura antes, se possível, sem atrasar).
- Glicemia capilar.
- Comunicar a regulação; registrar horários.
- Doença meningocócica: notificação imediata e quimioprofilaxia de contatos (vigilância).`,
rx: [
 {trilha: "ambos", titulo: "Antibiótico antes da remoção (se indicado)", texto: `USO INTRAVENOSO/INTRAMUSCULAR
1. Ceftriaxona 1 g – adulto: 2 g IV (ou IM, dividido em 2 locais).
   Criança: 100 mg/kg (máx. 2 g) = ___ mg.

USO INTRAVENOSO
2. Soro fisiológico 0,9% – adulto 500 mL em bolus (até 30 mL/kg), reavaliando perfusão e ausculta.
   Criança: 10–20 mL/kg SOMENTE se hipotensão/choque, reavaliando hepatomegalia e crepitações; sem hipotensão, apenas manutenção.
   Neonato (≤ 28 dias): discutir com a regulação (ceftriaxona contraindicada se icterícia ou cálcio IV).`, dose: "NV", nota: "Não atrasar a remoção pelo antibiótico; não atrasar o antibiótico em suspeita de meningococcemia."}
],
orient: `A suspeita é de infecção grave e o tratamento precisa continuar no hospital.`,
alarme: ["Confusão ou sonolência", "Falta de ar", "Manchas roxas na pele", "Urina muito pouca", "Pele fria e pegajosa"],
encaminhar: "Todos → urgência/hospital via SAMU.",
sus: {nacional: "RENAME 2024: ceftriaxona 250 mg, 500 mg e 1 g; SF 0,9%; Ringer lactato (Básico).", betim: "REMUME Betim: ceftriaxona 1 g IV e IM, SF 0,9% e Ringer lactato disponíveis."},
evid: {resumo: "Surviving Sepsis 2021: antibiótico em até 1 h quando choque ou sepse provável; atraso aumenta mortalidade. qSOFA tem baixa sensibilidade isoladamente: julgamento clínico e sinais de hipoperfusão são decisivos. Na doença meningocócica, o MS orienta antibiótico antes da remoção.", certeza: "Moderada (estimada)", fontes: ["ssc_sepse", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Doses: conferir bula/protocolo do SAMU."]
},
// ───────────────────────── SAÚDE DA MULHER – GESTAÇÃO
{
id: "sangramento-1tri", nome: "Sangramento na gestação inicial (1º trimestre)", sistema: "Saúde da mulher", risco: "alto",
ciap: "W03", cid: "O20.0 · O00.9", tags: "sangramento gravidez ameaça de aborto ectópica perda gestacional",
alerta: "Dor abdominal intensa, dor no ombro, síncope, instabilidade ou abdome com irritação peritoneal: gravidez ectópica rota até prova em contrário → SAMU/maternidade imediatamente.",
S: `Paciente, ___ anos, G___P___A___, DUM ___ (IG ___ semanas), com sangramento vaginal ___ (quantidade: ___ absorventes/h; coágulos ___; eliminação de tecido ___) há ___. Dor pélvica ___ (lado ___). Tontura/síncope ___. Dor no ombro ___.
USG prévia ___ (gestação intrauterina confirmada?). DIU ___. Ectópica prévia ___. Tipagem sanguínea/Rh ___.`,
O: `___ estado geral, mucosas ___.
${VITAIS}
ABD: dor ___, defesa ___. Especular: sangramento ___, colo ___ (aberto/fechado), restos ___.
β-hCG/teste rápido: ___.`,
A: `Sangramento no 1º trimestre: ___ (ameaça de abortamento / abortamento em curso ou incompleto / suspeita de ectópica / gestação de localização desconhecida), hemodinamicamente ___.`,
P: `- Instabilidade ou dor importante: SAMU/maternidade.
- Estável: USG transvaginal com prioridade (mesmo dia/serviço de referência) e β-hCG quantitativo.
- Tipagem/Rh: Rh negativo não sensibilizada → imunoglobulina anti-D conforme protocolo da maternidade.
- Ameaça de abortamento com gestação intrauterina viável: conduta expectante; repouso não altera desfecho.
- Acolhimento do luto em caso de perda; orientar sinais de alarme.`,
rx: [
 {trilha: "ambos", titulo: "Analgesia (estável)", texto: `USO ORAL
1. Paracetamol 500 mg – 1 a 2 comprimidos até de 6/6h se dor.
   Evitar AINE até definir a localização da gestação.`, dose: "NV"}
],
orient: `Sangramento no início da gravidez é comum e nem sempre significa perda. Precisamos confirmar pela ultrassonografia onde está a gestação.
Procure atendimento imediatamente se a dor aumentar, se tiver tontura, desmaio ou sangramento intenso.`,
alarme: ["Dor forte na barriga ou no ombro", "Tontura ou desmaio", "Sangramento que encharca mais de 1 absorvente por hora", "Febre ou secreção com mau cheiro"],
encaminhar: "Instável ou suspeita de ectópica → maternidade urgente. Estável → USG e seguimento conforme fluxo da maternidade de referência.",
sus: {nacional: "Imunoglobulina anti-D e USG pela rede de atenção materna.", betim: "Maternidade de referência e acesso à USG obstétrica em Betim: confirmar."},
evid: {resumo: "NICE NG126: USG transvaginal é o exame de escolha; β-hCG seriado nas gestações de localização desconhecida. Repouso não reduz perda gestacional. Ectópica rota é causa importante de morte materna no 1º trimestre.", certeza: "Moderada (estimada)", fontes: ["sangramento_1tri"]},
mudancas: ["Entrada nova."],
nv: ["Protocolo de imunoglobulina anti-D e fluxo da maternidade: confirmar."]
},
{
id: "pa-gestante", nome: "PA elevada na gestante (≥ 20 semanas) / pré-eclâmpsia", sistema: "Saúde da mulher", risco: "alto",
ciap: "W81", cid: "O14.9 · O13", tags: "pré-eclâmpsia pressão alta gravidez eclâmpsia sulfato de magnésio",
alerta: "PA ≥ 160/110 ou sinais de iminência de eclâmpsia (cefaleia persistente, alterações visuais, dor epigástrica/HD, náuseas/vômitos) ou convulsão: sulfato de magnésio e SAMU/maternidade IMEDIATAMENTE.",
S: `Gestante, ___ anos, IG ___ semanas, com PA ___ (aferição ___). Sintomas: cefaleia ___, escotomas/visão turva ___, dor epigástrica/HD ___, náuseas/vômitos ___, edema súbito ___, ganho de peso rápido ___. Movimentação fetal ___. Perda de líquido/sangramento ___.
HAS crônica ___. Uso de AAS profilático ___. Pré-eclâmpsia prévia ___.`,
O: `___ estado geral, consciência ___.
PA (sentada, repouso, manguito adequado) ___ e repetida em 15 min ___ | FC ___ | FR ___ | Reflexos patelares ___
Edema ___. BCF ___. Altura uterina ___.
Proteinúria (fita) ___.`,
A: `___ (hipertensão gestacional / pré-eclâmpsia ___ sem ou com sinais de gravidade / iminência de eclâmpsia), IG ___ semanas.`,
P: `- Confirmar PA com técnica adequada (2 aferições).
- PA ≥ 140/90 sem sinais de gravidade: encaminhar no mesmo dia para avaliação na maternidade/pré-natal de alto risco (exames: hemograma, plaquetas, creatinina, TGO/TGP, LDH, proteinúria).
- PA ≥ 160/110 ou sintomas de gravidade: sulfato de magnésio (dose de ataque) + anti-hipertensivo de ação rápida + remoção urgente.
- Monitorar FR, reflexos e diurese durante o sulfato; ter gluconato de cálcio 10% disponível.`,
rx: [
 {trilha: "ambos", titulo: "Sulfato de magnésio – ataque IM (sem bomba de infusão)", texto: `USO INTRAMUSCULAR
1. Sulfato de magnésio 50% – 10 mL (5 g) IM profundo em cada nádega (total 10 g).
   (Esquema IV, se acesso e possibilidade: 4 g = 8 mL de MgSO4 50% + 12 mL de água destilada ou SF 0,9%, IV lento em ~15 min.)
   Suspender se FR < 16 irpm, reflexo patelar abolido ou diurese < 100 mL em 4 h.
   Antídoto: gluconato de cálcio 10% 10 mL IV lento.`, dose: "F", nota: "Esquema conforme material IFF/Fiocruz 2023 (RBEHG 2023/MS). Manutenção (5 g IM 4/4h ou 1–2 g/h IV) na maternidade."},
 {trilha: "fora", titulo: "Anti-hipertensivo para PA ≥ 160/110 (nifedipino: RENAME, não consta na REMUME; hidralazina IV: no serviço de destino)", texto: `USO ORAL
1. Nifedipino 10 mg – 1 comprimido VO; repetir a cada 20–30 min se PA ≥ 160/110 (máx. 3 doses).
   OU (no serviço de destino)
2. Hidralazina 20 mg/mL – 5 mg IV, repetir a cada 20 min.`, dose: "NV", nota: "Não usar nifedipino sublingual. Meta: reduzir para 140–150/90–100, sem quedas bruscas. Betim tem hidralazina apenas oral (25 mg) e metildopa (manutenção, não para crise)."}
],
orient: `A pressão alta na gravidez pode ser grave para você e para o bebê. Siga para a maternidade agora, como orientado.
Procure atendimento imediatamente se tiver dor de cabeça forte, visão embaçada ou com pontos brilhantes, dor no estômago ou falta de ar.`,
alarme: ["Dor de cabeça forte que não passa", "Visão embaçada ou pontos brilhantes", "Dor no estômago ou do lado direito da barriga", "Falta de ar", "Bebê mexendo menos", "Convulsão"],
encaminhar: "PA ≥ 140/90 → maternidade/alto risco no mesmo dia; sinais de gravidade → SAMU após sulfato de magnésio.",
sus: {nacional: "RENAME 2024: sulfato de magnésio 10% e 50%, nifedipino 10 mg, hidralazina 25 e 50 mg, metildopa 250 mg (Básico).", betim: "REMUME Betim: sulfato de magnésio 50% (ampola 10 mL), gluconato de cálcio 10%, metildopa 250 e 500 mg e hidralazina 25 mg comprimido disponíveis; nifedipino não consta."},
evid: {resumo: "Sulfato de magnésio reduz pela metade o risco de eclâmpsia na pré-eclâmpsia grave (MAGPIE). Tratar hipertensão grave (≥ 160/110) em até 30–60 min reduz AVC materno. O esquema IM permite iniciar o tratamento na APS antes da remoção.", certeza: "Alta para sulfato de magnésio", fontes: ["iff_eclampsia", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Maternidade de referência e fluxo de remoção: confirmar.", "Doses de anti-hipertensivos: conferir protocolo da maternidade."]
},
{
id: "teste-gravidez-positivo", nome: "Teste de gravidez positivo – primeiro atendimento", sistema: "Saúde da mulher", risco: "baixo",
ciap: "W01 · W78", cid: "Z32.1 · Z34.9", tags: "gravidez positivo beta HCG pré-natal início ácido fólico",
alerta: "Dor pélvica, sangramento ou atraso com teste positivo e sem USG: considerar ectópica (ver modelo de sangramento no 1º trimestre). Gestação não desejada ou situação de violência: acolhimento e encaminhamento à rede (inclusive aborto legal, quando previsto em lei).",
S: `Paciente, ___ anos, com teste de gravidez ___ (urina/sangue) positivo em ___. DUM ___ (IG ___). Gestação ___ (planejada / desejada / não desejada). G___P___A___. Sintomas ___. Sangramento/dor ___.
Doenças crônicas ___. Medicamentos em uso ___ (teratogênicos?). Tabagismo/álcool/drogas ___. Vacinação ___. Situação de violência ___. Rede de apoio ___.`,
O: `BEG.
${VITAIS}  Peso ___ | Altura ___ | IMC ___
Testes rápidos: HIV ___, sífilis ___, hepatite B ___, hepatite C ___.`,
A: `Gestação de ___ semanas pela DUM, ___ (desejada / ambivalente / não desejada), sem sinais de alarme.`,
P: `- Acolher e explorar sentimentos sobre a gestação.
- Iniciar o pré-natal na mesma consulta: cadastro, cartão da gestante, testes rápidos, exames de 1º trimestre, USG.
- Revisar medicamentos teratogênicos (ex.: valproato, isotretinoína, varfarina, IECA/BRA, metotrexato).
- Ácido fólico e ferro.
- Vacinas conforme calendário (hepatite B, dT/dTpa a partir de 20 semanas, influenza, COVID-19).
- Agendar consulta de pré-natal e grupo de gestantes.`,
rx: [
 {trilha: "ambos", titulo: "Suplementação (SUS Betim)", texto: `USO ORAL
1. Ácido fólico 0,2 mg/mL solução ______ 1 frasco
   Tomar 2 mL (0,4 mg) por dia até o fim do 1º trimestre.
   (Alternativa disponível: ácido fólico 5 mg – 1 comprimido por dia, dose indicada para alto risco de defeito do tubo neural.)
2. Sulfato ferroso 40 mg de ferro elementar ______ 30 comprimidos
   Tomar 1 comprimido por dia, longe das refeições, durante a gestação.`, dose: "NV", nota: "OMS/USPSTF: 0,4–0,8 mg/dia de ácido fólico; 5 mg/dia para quem teve filho com defeito do tubo neural, uso de anticonvulsivante, DM ou obesidade (conforme diretriz)."}
],
orient: `Parabéns pela confirmação. Comece o pré-natal agora: as consultas e exames protegem você e o bebê.
Tome o ácido fólico todos os dias até o fim do 3º mês. Não use remédios sem orientação, não fume e não beba álcool.
Procure atendimento se tiver sangramento, dor forte na barriga ou febre.`,
alarme: ["Sangramento vaginal", "Dor forte na barriga", "Febre", "Vômitos que impedem comer e beber"],
encaminhar: "Gestação de alto risco (doença crônica, idade, intercorrências) → pré-natal de alto risco conforme estratificação.",
sus: {nacional: "RENAME 2024: ácido fólico 5 mg e 0,2 mg/mL, sulfato ferroso 40 mg (Básico). Testes rápidos e vacinas: Estratégico/PNI.", betim: "REMUME Betim: ácido fólico 0,2 mg/mL solução e 5 mg comprimido, sulfato ferroso 40 mg disponíveis."},
evid: {resumo: "Ácido fólico periconcepcional reduz defeitos do tubo neural (ECR MRC 1991 e metanálises); a dose habitual é 0,4 mg/dia. Captação precoce no pré-natal permite identificar riscos e tratar sífilis e HIV a tempo.", certeza: "Alta para ácido fólico (estimada)", fontes: ["prenatal", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Protocolo municipal de pré-natal e dose de ácido fólico adotada em Betim: confirmar."]
},
// ───────────────────────── CARDIOVASCULAR
{
id: "tvp", nome: "Edema de perna – suspeita de TVP", sistema: "Cardiovascular", risco: "alto",
ciap: "K94", cid: "I80.2", tags: "trombose venosa profunda TVP perna inchada empastamento Wells doppler anticoagulação",
alerta: "Dispneia súbita, dor torácica pleurítica, taquicardia, hemoptise ou síncope (TEP): SAMU. Edema maciço com cianose ou membro frio (phlegmasia): urgência vascular.",
S: `Paciente, ___ anos, com edema/dor em perna ___ há ___ dias. Fatores de risco: imobilização/viagem longa ___, cirurgia/fratura recente ___, câncer ativo ___, TVP/TEP prévia ___, gestação/puerpério ___, contraceptivo/TH ___, trombofilia ___. Dispneia/dor torácica ___. Trauma ___.`,
O: `BEG.
${VITAIS}
MMII: circunferência da panturrilha (10 cm abaixo da tuberosidade tibial) D ___ cm / E ___ cm. Edema com cacifo ___, empastamento ___, dor no trajeto venoso ___, veias colaterais ___. Pulsos ___. Sinais de celulite ___.
Wells: ___ pontos.`,
A: `Suspeita de TVP de membro ___, Wells ___ (TVP ___ provável / improvável), sem sinais de TEP.`,
P: `- Escore de Wells: câncer ativo (1), paralisia/imobilização gessada (1), acamado > 3 dias ou cirurgia < 12 semanas (1), dor no trajeto venoso (1), edema de toda a perna (1), panturrilha ≥ 3 cm maior (1), cacifo só na perna sintomática (1), veias colaterais (1), TVP prévia (1), diagnóstico alternativo tão provável quanto (−2). ≥ 2: provável.
- TVP improvável: D-dímero; normal exclui; elevado → USG doppler.
- TVP provável: USG doppler com prioridade (mesmo dia ou em até 24 h).
- Se doppler demorar > 4 h e alta probabilidade, sem risco de sangramento: anticoagulação empírica (via serviço de urgência/referência).
- TVP confirmada: anticoagular por ≥ 3 meses; avaliar causa.`,
rx: [
 {trilha: "evidencia", titulo: "Anticoagulante oral direto (TVP confirmada)", texto: `USO ORAL
1. Rivaroxabana 15 mg – 1 comprimido de 12/12h com alimento por 21 dias;
   depois rivaroxabana 20 mg – 1 comprimido por dia, por pelo menos 3 meses.`, dose: "NV", nota: "CHEST 2021: DOAC preferido à varfarina. Ajustar/evitar se ClCr < 30, gestação, câncer selecionado. Não consta na RENAME nem na REMUME."},
 {trilha: "sus", titulo: "Heparina + varfarina (SUS Betim)", texto: `USO SUBCUTÂNEO/INTRAVENOSO + ORAL
1. Heparina não fracionada (5.000 UI/mL) conforme protocolo do serviço, sobreposta à
2. Varfarina 5 mg – iniciar 5 mg/dia e ajustar pelo INR (alvo 2–3); manter heparina por ≥ 5 dias e até INR ≥ 2 por 24 h.`, dose: "NV", nota: "Início geralmente em serviço de urgência/referência; exige controle de INR na APS. Gestante: heparina (varfarina contraindicada)."}
],
orient: `A suspeita é de um coágulo na veia da perna. Precisamos fazer um ultrassom rapidamente.
Procure atendimento imediatamente se surgir falta de ar, dor no peito ou tosse com sangue.`,
alarme: ["Falta de ar súbita", "Dor no peito ao respirar", "Tosse com sangue", "Desmaio", "Perna fria, roxa ou muito inchada"],
encaminhar: "TVP provável → doppler/urgência com prioridade. TEP suspeito → SAMU.",
idealsus: {ideal: "Anticoagulante oral direto (rivaroxabana/apixabana) é preferido para TVP confirmada (CHEST 2021): sem controle de INR e com menos sangramento maior.", sus: "Betim tem heparina não fracionada e varfarina 5 mg; DOAC e enoxaparina não constam na REMUME (enoxaparina na RENAME só para trombofilia na gestação).", ponte: "Varfarina do SUS com controle de INR na UBS; DOAC por compra quando possível (custo mensal relevante); gestante pela linha de cuidado obstétrica."},
sus: {nacional: "RENAME 2024: varfarina 1 e 5 mg, heparina sódica (Básico); enoxaparina (Especializado – PCDT trombofilia na gestação).", betim: "REMUME Betim: varfarina 5 mg e heparina sódica 5.000 UI/mL disponíveis. Acesso a doppler e D-dímero: confirmar."},
evid: {resumo: "Wells + D-dímero + doppler é a estratégia validada para excluir TVP. CHEST 2021 recomenda DOAC sobre varfarina para TVP sem câncer ou gestação, por ≥ 3 meses.", certeza: "Alta (estimada)", fontes: ["chest_tev", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Acesso a D-dímero e doppler em Betim: confirmar.", "Doses: conferir bula/protocolo."]
}
);
