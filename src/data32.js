// ───────────── data32.js – Urgências na UBS: fluxograma "agir agora" antes do SOAP, doses adulto × criança separadas, PCR, engasgo e abordagem ABCDE (11/10/2026)
Object.assign(FONTES, {
  hcufmg_pcr: {s: "HC-UFMG – PCR no adulto (2023)", t: "HC-UFMG/Ebserh. Protocolo nº 006 – PCR no adulto, versão 03 (atualizado em jan/2023; base AHA 2020): compressões 100–120/min, 5 cm (6 cm excessivo), retorno total, troca a cada 2 min; 30:2 sem via aérea avançada, 1 ventilação a cada 6 s com via aérea avançada; choque bifásico 120–200 J (máximo se desconhecido), monofásico 360 J; adrenalina 1 mg a cada 3–5 min, o mais precoce possível em ritmo não chocável; amiodarona 300 mg e depois 150 mg; lidocaína 1–1,5 mg/kg e depois 0,5–0,75 mg/kg; 5H/5T; pós-RCE: SpO₂ 92–98%, PAS ≥ 90 e PAM ≥ 65 mmHg, evitar hipertermia (< 37,7 °C), ECG de 12 derivações (protocolo de hospital universitário de MG).", f: "F", url: "https://www.gov.br/hubrasil/pt-br/hospitais-universitarios/regiao-sudeste/hc-ufmg/saude/protocolos-assistenciais-hc-ufmg-ebserh/PR_006_PCR_paciente_adulto_V03.pdf"},
  aha2025_pals: {s: "AHA 2025 – PCR pediátrica (algoritmo)", t: "American Heart Association. Algoritmo de PCR pediátrica, diretrizes 2025: compressões 100–120/min, ≥ 1/3 do diâmetro anteroposterior; 15:2 com 2 socorristas (antes da puberdade), 30:2 com 1 socorrista; via aérea avançada: 1 ventilação a cada 2–3 s; choque 2 J/kg, depois 4 J/kg, depois ≥ 4 J/kg (máx. 10 J/kg ou dose de adulto); adrenalina IV/IO 0,01 mg/kg (0,1 mg/mL), máx. 1 mg, a cada 3–5 min; amiodarona 5 mg/kg (máx. 300 mg), até 3 doses, as seguintes até 150 mg; lidocaína 1 mg/kg; causas reversíveis incluem hipoglicemia (diretriz internacional).", f: "F", url: "https://cpr.heart.org/-/media/CPR-Files/CPR-Guidelines-Files/2025-Algorithms/Algorithm-PALS-CA-250123.pdf?sc_lang=en"},
  aha2025_bls: {s: "AHA 2025 – mudanças no SBV", t: "American Heart Association. 2025 Interim Training Materials – BLS Provider Manual Changes: engasgo grave em adulto e criança – ciclos de 5 golpes nas costas seguidos de 5 compressões abdominais; lactente – 5 golpes nas costas alternados com 5 compressões torácicas; lactente em RCP – região hipotênar de uma mão ou dois polegares (técnica de 2 dedos não é mais recomendada); pausas < 10 s; naloxona pode ser dada em PCR por suspeita de opioide sem atrapalhar a RCP (diretriz internacional).", f: "F", url: "https://www.heart.org/-/media/BB8FBA8700164F5EA8C9A0A68847AE92.pdf"},
  curitiba_anaf: {s: "SMS Curitiba – anafilaxia na UBS (adulto, 2024)", t: "SMS Curitiba, Departamento de Atenção Primária. Fluxo assistencial – Atendimento da anafilaxia (adultos), v.2, 20/05/2024: acionar SAMU; decúbito com membros inferiores elevados; adrenalina 0,5 mg (0,5 mL da solução 1 mg/mL) IM no vasto lateral, repetir a cada 5 min se não melhorar; 2 acessos calibrosos; choque: O₂ por máscara com reservatório e SF 0,9% 500–1.000 mL em bolus; O₂ se SpO₂ < 92% (protocolo municipal de APS).", f: "F", url: "https://saude.curitiba.pr.gov.br/images/APS/Enfermagem/Anafilaxia%20UMS%20-%20Adulto%2007.03.2023%20-%20V1_Template%20novo.pdf"},
  aes_eme: {s: "AES 2016 – estado de mal (resumo)", t: "American Epilepsy Society 2016 – tratamento do estado de mal convulsivo, conforme resumo publicado (MDedge): estabilização 0–5 min (via aérea, O₂, glicemia; tiamina no adulto); aos 5 min benzodiazepínico – midazolam IM 10 mg se > 40 kg e 5 mg se 13–40 kg, ou diazepam IV 0,15–0,2 mg/kg; uma repetição permitida; segunda linha aos 20 min (fosfenitoína, valproato ou levetiracetam; fenobarbital se nenhum) (resumo de diretriz).", f: "F", url: "https://mdedge.com/neurology/epilepsyresourcecenter/article/106211/epilepsy-seizures/aes-publishes-guideline"},
  sca_sorocaba: {s: "SMS Sorocaba – fluxo de SCA (2022)", t: "SMS Sorocaba. Fluxo de atendimento da síndrome coronariana aguda (21/12/2022): ECG em no máximo 10 min; O₂ 3 L/min se SpO₂ < 90% ou durante a dor; AAS 200 mg macerado; dinitrato de isossorbida 5 mg SL, repetir em 5–10 min, máximo 15 mg, se sem contraindicação; unidades sem regulação de leitos acionam SAMU 192 (protocolo municipal).", f: "F", url: "https://saude.sorocaba.sp.gov.br/wp-content/uploads/2024/01/Fluxograma-de-Atendimento-de-Sindrome-Coronariana-Aguda.pdf"},
  sca_hcrp: {s: "HCFMRP-USP – SCA sem supra (2017)", t: "Galliano FT, Miranda CH. Protocolo de SCA sem supradesnivelamento de ST. Revista QualidadeHC, HCFMRP-USP, 2017: AAS 300 mg mastigado; nitrato 5 mg SL a cada 10–15 min, máximo 15 mg; contraindicações do nitrato – hipotensão, IAM de VD (supra em V3R/V4R), sildenafila nas últimas 24 h; O₂ se SpO₂ < 90%; ECG em 10 min (protocolo institucional; validade vencida em 2019).", f: "F", url: "https://www.hcrp.usp.br/revistaqualidade/uploads/Artigos/202/202.pdf"},
  hipo_cbmfc: {s: "Hipoglicemia na APS (CBMFC 2025)", t: "Resumo da apresentação 'Abordagem da hipoglicemia e da hiperglicemia na APS' (18º CBMFC, 2025; Portal Afya): níveis da SBD – nível 1 ≤ 70 mg/dL, nível 2 < 54 mg/dL, nível 3 = grave (precisa de ajuda); regra dos 15 – 15 g de carboidrato (1 colher de sopa de açúcar, 150 mL de refrigerante comum) e reavaliar em 15 min, até 3 vezes; nível 2: 30 g; glucagon IM se disponível (resumo secundário de evento científico).", f: "F", url: "https://portal.afya.com.br/medicina-de-familia/cbmfc-2025-abordagem-da-hipoglicemia-e-da-hiperglicemia-na-aps"}
});

const SAMU = "Ligue 192 (SAMU) cedo e deixe a regulação na linha. Informe idade, peso, o que aconteceu e a hora, sinais vitais e o que já foi feito, com horário de cada dose.";
const UG = o => ({
  rotulo: "Agir agora",
  urg: o.urg,
  resumo: o.resumo,
  calcs: o.calcs,
  secoes: [
    {t: "Agir agora", b: [{fluxo: o.fluxo, nota: o.fluxoNota}, ...(o.depoisFluxo || []), {ref: o.ref}]},
    {t: "Doses: adulto × criança", b: [{doses: {r: o.doses, nota: o.dosesNota}}, ...(o.extraDoses || []), {ref: o.refDoses || o.ref}]},
    {t: "Depois de estabilizar", b: [{ul: o.depois}, {p: "Com o paciente estável ou entregue ao SAMU, registre no SOAP (aba ao lado): horários, sinais vitais, doses e resposta."}, ...(o.extraDepois || [])]}
  ]
});
const R32 = {
  muda: (c, t) => { c.mudancas = c.mudancas || []; c.mudancas.push("Revisão 11/10/2026: " + t); },
  fonte: (c, ...ks) => { ks.forEach(k => { if (!c.evid.fontes.includes(k)) c.evid.fontes.push(k); }); }
};
const URG_LINKS = [["pcr", "PCR"], ["ovace", "Engasgo"], ["anafilaxia", "Anafilaxia"], ["hipoglicemia", "Hipoglicemia"], ["convulsao-ativa", "Convulsão"], ["asma-crise", "Crise de asma (adulto)"], ["asma-crianca", "Crise de asma (criança)"], ["dor-toracica", "Dor torácica / SCA"], ["avc-ait", "AVC"], ["sepse", "Sepse"], ["intoxicacao", "Intoxicação"], ["agitacao", "Agitação"], ["sincope", "Síncope"], ["febre-menor-3m", "Febre < 3 meses"], ["diarreia-crianca", "Desidratação na criança"], ["dengue-a", "Dengue"]];

CONDICOES.push(
{
id: "urg-abordagem", nome: "Abordagem inicial da urgência na UBS (ABCDE)", sistema: "Urgências na UBS", risco: "alto",
ciap: "A99", cid: "R69", tags: "urgência emergência ABCDE carrinho de parada SAMU 192 rebaixamento grave instável",
alerta: "Paciente grave: peça ajuda, o carrinho e o oxímetro; ligue 192. Não há laboratório na UBS: decida pela clínica, oxímetro, glicemia capilar e ECG (se houver).",
S: `Paciente, ___ anos, peso ___ kg (estimado ___), trazido por ___ às ___ h com ___.
Início: ___. Comorbidades/medicações: ___. Alergias: ___.`,
O: `A: via aérea ___ | B: FR ___ irpm, SpO₂ ___%, esforço ___, ausculta ___
C: FC ___ bpm, PA ___ mmHg, enchimento capilar ___ s, sangramento ___
D: consciência (AVDN/Glasgow) ___, pupilas ___, glicemia capilar ___ mg/dL, déficit focal ___
E: Tax ___ °C, pele (petéquias, urticária, cianose) ___, trauma ___`,
A: `Paciente instável por ___ (hipótese principal ___).`,
P: `- Ajuda, carrinho e monitorização (oxímetro, PA, glicemia capilar).
- Conduta por prioridade ABCDE: ___.
- SAMU 192 acionado às ___ h; orientações da regulação: ___.
- Doses administradas (fármaco, dose, via, horário): ___.
- Entregue à equipe do SAMU às ___ h, com estado ___.`,
rx: [{trilha: "ambos", titulo: "Registro de doses (modelo)", texto: "HORÁRIO | FÁRMACO | DOSE | VIA | RESPOSTA\n__:__ | ________ | ____ | ____ | ________\n__:__ | ________ | ____ | ____ | ________", dose: "NV", nota: "Use a aba 'Agir agora' de cada urgência para as doses de adulto e de criança."}],
orient: "Você está sendo atendido em situação de urgência. A equipe vai estabilizar e, se necessário, transferir com o SAMU. Um acompanhante deve ficar com os documentos e a lista de remédios.",
alarme: ["Não responde ou respira mal", "Saturação < 92% apesar de O₂", "PAS < 90 mmHg ou má perfusão", "Convulsão, déficit focal ou glicemia < 70 mg/dL"],
encaminhar: "Todo paciente instável → SAMU 192. Mantenha a regulação informada a cada mudança.",
sus: {nacional: "Rede de Urgência e Emergência: a APS faz o primeiro atendimento e estabilização e aciona o SAMU 192.", betim: "Fluxo SAMU/UPA de referência da UBS: confirmar com a coordenação e registrar na aba 'Rede de Betim'."},
evid: {resumo: "A abordagem sistemática ABCDE prioriza o que mata primeiro e é a base dos protocolos de suporte de vida; o acionamento precoce do serviço móvel e a RCP de qualidade são os elos da cadeia de sobrevivência.", certeza: "Consenso (boa prática)", fontes: ["aha2025_bls", "hcufmg_pcr", "fhemig_pac"]},
mudancas: ["Entrada nova: abordagem geral da urgência na UBS, com atalhos para cada protocolo."],
nv: ["Conteúdo real do carrinho de emergência e presença de DEA/desfibrilador na UBS: conferir com a enfermagem.", "Disponibilidade de ECG na UBS: confirmar."],
guia: {
  rotulo: "Agir agora",
  urg: "Peça ajuda, o carrinho e o oxímetro · " + SAMU + " · Glicemia capilar em todo rebaixamento, convulsão ou confusão.",
  resumo: "Na UBS não há laboratório na hora: o que decide é **ABCDE**, **oxímetro**, **PA**, **glicemia capilar** e, se houver, **ECG**. Trate o que mata primeiro, **acione o SAMU cedo** e anote o horário de tudo.",
  secoes: [
    {t: "Agir agora", b: [
      {fluxo: [
        {t: "Paciente grave ou que piora"},
        {t: "Responde? Respira normalmente?", ramos: [
          {r: "Não responde e não respira (ou só gasping)", n: [{t: "Checar pulso ≤ 10 s → sem pulso: RCP já (ver PCR)", k: "stop"}]},
          {r: "Responde ou respira", n: [{t: "Monitorizar: oxímetro, PA, FC, glicemia capilar; acionar SAMU se instável"}]}]},
        {t: "A – Via aérea: engasgo, estridor, edema de lábios/língua?", ramos: [
          {r: "Sim", n: [{t: "Engasgo → manobras; edema/urticária → adrenalina IM (anafilaxia)", k: "stop"}]},
          {r: "Não", n: [{t: "Seguir"}]}]},
        {t: "B – SpO₂ < 92%, esforço, sibilos?", ramos: [
          {r: "Sim", n: [{t: "O₂ (cateter até 6 L/min; máscara com reservatório se não atingir); sibilos → salbutamol", k: "warn"}]},
          {r: "Não", n: [{t: "Seguir"}]}]},
        {t: "C – PAS < 90, pulso fino, enchimento > 3 s, sangramento?", ramos: [
          {r: "Sim", n: [{t: "Deitar com pernas elevadas, 2 acessos, SF 0,9% em bolus (ver doses), comprimir sangramento", k: "warn"}]},
          {r: "Não", n: [{t: "Seguir"}]}]},
        {t: "D – Consciência, pupilas, glicemia, convulsão, déficit focal", ramos: [
          {r: "Glicemia < 70", n: [{t: "Hipoglicemia", k: "stop"}]},
          {r: "Convulsão > 5 min", n: [{t: "Benzodiazepínico", k: "stop"}]},
          {r: "Déficit súbito", n: [{t: "AVC: SAMU e hora do início", k: "stop"}]}]},
        {t: "E – Temperatura, petéquias, urticária, trauma; peso (ou estimar)", k: "ok"}
      ], nota: "Sequência ABCDE de boa prática [C]; alvos de O₂ conforme protocolo de APS de Curitiba [F]."},
      {h: "Ir direto para"},
      {ir: URG_LINKS},
      {ref: ["aha2025_bls", "curitiba_anaf"]}]},
    {t: "Doses: adulto × criança", b: [
      {doses: {r: [
        ["Peso", "Pesar ou perguntar", "Pesar; sem balança, estimar 1–10 anos: (idade + 4) × 2 kg [C]"],
        ["Taquipneia", "FR ≥ 20 irpm é sinal de piora na gripe [F]", "< 2 m > 60; 2–12 m > 50; 1–5 anos > 40 irpm [F]"],
        ["O₂", "Cateter até 6 L/min; máscara com reservatório se SpO₂ seguir < 92% [F]", "Cateter ou máscara; posição de conforto no colo [C]"],
        ["Soro em choque", "SF 0,9% 500–1.000 mL em bolus (anafilaxia) [F]; sepse: 500 mL e reavaliar [NV]", "20–30 mL/kg em 1 h no choque anafilático [F]; sepse: 10–20 mL/kg só se hipotensão [NV]"],
        ["Glicemia < 70", "Ver Hipoglicemia", "Glicose 10% 2–4 mL/kg IV se < 60 mg/dL [F]"]],
       nota: "Doses específicas em cada protocolo. Seringas de 1 mL para doses pediátricas de adrenalina."}},
      {ref: ["guia_influenza", "fhemig_pac", "curitiba_anaf", "fhemig_anafilaxia", "fhemig_eme"]}]},
    {t: "Carrinho e chamada", b: [
      {h: "O que deve estar à mão"},
      {ul: ["Ambu adulto e pediátrico com máscaras de vários tamanhos; O₂ com cateter e máscara com reservatório; cânulas orofaríngeas [C].", "Oxímetro, esfigmomanômetro com manguitos infantis, glicosímetro e fitas [C].", "DEA ou desfibrilador; ECG se houver [C].", "Adrenalina 1 mg/mL, glicose 50%, SF 0,9%, diazepam/midazolam, salbutamol com espaçador, hidrocortisona, prometazina, AAS, dinitrato SL [C].", "Cateteres venosos de vários calibres, seringas de 1, 5, 10 e 20 mL, equipos [C]."]},
      {nota: "Lista de boa prática; confira com a enfermagem o que o carrinho da sua UBS realmente tem e a data de validade."},
      {h: "O que dizer ao SAMU"},
      {passos: ["Quem: idade, sexo, peso.", "O quê e quando: queixa principal e horário de início (ou última vez visto bem).", "Como está: consciência, FR, SpO₂, FC, PA, glicemia.", "O que foi feito: fármacos, doses, vias e horários; resposta.", "Comorbidades, alergias e medicações (anticoagulante, insulina)."]}]}
  ]}
},
{
id: "pcr", nome: "Parada cardiorrespiratória (PCR) – adulto e criança", sistema: "Urgências na UBS", risco: "alto",
ciap: "K80", cid: "I46.9", tags: "PCR parada cardíaca RCP reanimação DEA desfibrilador adrenalina amiodarona compressões massagem cardíaca",
alerta: "Não responde e não respira normalmente: chame ajuda, peça o DEA/carrinho, ligue 192 e COMECE COMPRESSÕES. Pausas < 10 s.",
S: `Paciente, ___ anos, peso ___ kg, presenciado(a) em PCR às ___ h por ___ (ou encontrado às ___ h; último visto bem às ___).
Contexto: ___ (dor torácica, dispneia, engasgo, intoxicação, trauma, convulsão).`,
O: `Sem resposta, sem respiração normal e sem pulso central às ___ h.
Ritmo inicial (DEA/monitor): ___. Glicemia capilar: ___ mg/dL.`,
A: `PCR em ritmo ___; causa provável ___.`,
P: `- RCP iniciada às ___ h (relação ___), troca de compressor a cada 2 min.
- Choques: ___ (horários e energia).
- Adrenalina: ___ (doses e horários). Antiarrítmico: ___.
- Via aérea: ___. Acesso: ___.
- SAMU acionado às ___ h; chegada às ___ h.
- RCE às ___ h / RCP mantida até ___ / óbito constatado às ___ h.
- Família informada às ___ h.`,
rx: [
 {trilha: "ambos", titulo: "ADULTO – PCR", texto: "USO INTRAVENOSO/INTRAÓSSEO\n1. Adrenalina 1 mg/mL – 1 mL (1 mg) a cada 3–5 min, seguido de 20 mL de SF e elevação do membro.\n   Ritmo não chocável: o mais cedo possível. Ritmo chocável: após falha dos primeiros choques.\n2. Amiodarona 50 mg/mL (FV/TV sem pulso refratária) – 300 mg (6 mL) em bolus; 2ª dose 150 mg (3 mL).\n   Alternativa: lidocaína 1–1,5 mg/kg; 2ª dose 0,5–0,75 mg/kg.\n\nCHOQUE\n3. Bifásico 120–200 J (máximo se não souber); monofásico 360 J.", dose: "F", nota: "HC-UFMG 2023, base AHA 2020; o algoritmo de 2025 não mudou as intervenções [F]. Amiodarona injetável no carrinho da UBS: conferir."},
 {trilha: "ambos", titulo: "CRIANÇA – PCR", texto: "USO INTRAVENOSO/INTRAÓSSEO\n1. Adrenalina 0,01 mg/kg = 0,1 mL/kg da solução 0,1 mg/mL (diluir 1 mL de adrenalina 1 mg/mL + 9 mL de SF), máximo 1 mg (10 mL), a cada 3–5 min.\n   Peso ___ kg = ___ mL da solução diluída.\n2. Amiodarona (FV/TV sem pulso) – 5 mg/kg (máx. 300 mg) em bolus; pode repetir até 3 doses (seguintes até 150 mg).\n   Alternativa: lidocaína 1 mg/kg.\n\nCHOQUE\n3. 2 J/kg → 4 J/kg → ≥ 4 J/kg (máximo 10 J/kg ou dose de adulto).", dose: "F", nota: "AHA 2025, algoritmo pediátrico [F]. A diluição 1 + 9 é a forma de obter 0,1 mg/mL [I]."}
],
orient: "Converse com a família em local reservado, com linguagem simples, sobre o que foi feito e o próximo passo (transferência ou óbito).",
alarme: [],
encaminhar: "Toda PCR → SAMU 192. Após RCE: transferência com o SAMU para unidade com terapia intensiva.",
sus: {nacional: "Rede de Urgência e Emergência; SAMU 192.", betim: "Presença de DEA/desfibrilador e de amiodarona no carrinho da UBS: conferir com a enfermagem."},
evid: {resumo: "Compressões de qualidade e desfibrilação precoce são as intervenções que mais aumentam sobrevida; adrenalina aumenta o retorno da circulação, com maior efeito em ritmos não chocáveis quando dada cedo. Antiarrítmico na FV/TV refratária melhora a sobrevida até a admissão.", certeza: "Moderada (diretriz internacional)", fontes: ["hcufmg_pcr", "aha2025_pals", "aha2025_bls"]},
mudancas: ["Entrada nova: PCR adulto e criança com doses separadas (AHA 2025 pediátrico; HC-UFMG adulto)."],
nv: ["Pás pediátricas/atenuador do DEA da UBS: conferir."],
guia: UG({
  urg: "Chame ajuda e peça o DEA/carrinho · ligue 192 · comece compressões já: forte, rápido (100–120/min), deixando o tórax voltar · pausas < 10 s.",
  resumo: "O que salva na PCR é **compressão de qualidade sem parar** e **choque precoce** se o ritmo for chocável. Adrenalina **cedo** no ritmo não chocável. Pense nas **causas reversíveis** – na UBS, a glicemia capilar e a história (engasgo, opioide, anafilaxia) são o que você tem.",
  fluxo: [
    {t: "Não responde + não respira ou só gasping"},
    {t: "Pulso central em ≤ 10 s?", ramos: [
      {r: "Sem pulso", n: [{t: "RCP: adulto 30:2; criança 15:2 (2 socorristas) ou 30:2 (1 socorrista)", k: "stop"}]},
      {r: "Com pulso", n: [{t: "Ventilar; criança com FC < 60 e má perfusão apesar de ventilação → compressões", k: "warn"}]}]},
    {t: "DEA/monitor chegou: ritmo chocável (FV/TV sem pulso)?", ramos: [
      {r: "Sim", n: [{t: "Choque → RCP 2 min imediatamente → checar ritmo; adrenalina após falha dos primeiros choques; amiodarona na FV/TV refratária", k: "stop"}]},
      {r: "Não (assistolia/AESP)", n: [{t: "Adrenalina o mais cedo possível → RCP 2 min → checar ritmo; repetir adrenalina a cada 3–5 min", k: "stop"}]}]},
    {t: "A cada 2 min: trocar compressor, checar ritmo, tratar causas reversíveis (5H/5T)", k: "warn"},
    {t: "Retorno da circulação → cuidados pós-PCR e transferência com o SAMU", k: "ok"}
  ],
  fluxoNota: "HC-UFMG 2023 (base AHA 2020) para o adulto [F]; AHA 2025 para a criança [F]. Frequência de compressão com bradicardia na criança [C].",
  depoisFluxo: [
    {h: "Causas reversíveis (5H/5T)"},
    {tab: {h: ["H", "T"], r: [["Hipovolemia", "Tensão (pneumotórax hipertensivo)"], ["Hipóxia (engasgo, asma, opioide)", "Tamponamento cardíaco"], ["H⁺ – acidose", "Toxinas (opioide → naloxona)"], ["Hipo/hipercalemia; hipoglicemia (glicemia capilar)", "Trombose pulmonar"], ["Hipotermia", "Trombose coronária"]]}, nota: "HC-UFMG e AHA 2025 (inclui hipoglicemia na criança) [F]. Naloxona em suspeita de opioide sem atrapalhar a RCP (AHA 2025) [F]."}
  ],
  ref: ["hcufmg_pcr", "aha2025_pals", "aha2025_bls"],
  doses: [
    ["Compressões", "100–120/min; 5 cm (não > 6 cm); retorno total [F]", "100–120/min; ≥ 1/3 do diâmetro anteroposterior [F]; lactente: região hipotênar de 1 mão ou 2 polegares – não usar 2 dedos [F]"],
    ["Relação", "30:2 sem via aérea avançada; com via aérea: 1 ventilação a cada 6 s [F]", "15:2 com 2 socorristas, 30:2 com 1; com via aérea: 1 ventilação a cada 2–3 s [F]"],
    ["Choque", "Bifásico 120–200 J (máximo se desconhecido); monofásico 360 J [F]", "2 J/kg → 4 J/kg → ≥ 4 J/kg (máx. 10 J/kg ou dose de adulto) [F]"],
    ["Adrenalina", "1 mg IV/IO a cada 3–5 min [F]", "0,01 mg/kg (0,1 mL/kg da solução 0,1 mg/mL), máx. 1 mg, a cada 3–5 min [F]"],
    ["Amiodarona", "300 mg, depois 150 mg [F]", "5 mg/kg (máx. 300 mg), até 3 doses (seguintes até 150 mg) [F]"],
    ["Lidocaína (alternativa)", "1–1,5 mg/kg, depois 0,5–0,75 mg/kg [F]", "1 mg/kg [F]"]],
  dosesNota: "Diluição pediátrica: 1 mL de adrenalina 1 mg/mL + 9 mL de SF = 0,1 mg/mL [I]. Use pás pediátricas/atenuador no DEA se houver [C].",
  depois: ["Pós-RCE (adulto): SpO₂ 92–98%, PAS ≥ 90 e PAM ≥ 65 mmHg, evitar febre (< 37,7 °C), ECG de 12 derivações se houver [F].", "Glicemia capilar e correção de hipoglicemia [I].", "Registrar horários de PCR, RCP, choques e doses; comunicar a família.", "Sem RCE após esforço prolongado: decisão de encerrar compartilhada com a regulação do SAMU [C]."]
})
},
{
id: "ovace", nome: "Engasgo – obstrução de via aérea por corpo estranho", sistema: "Urgências na UBS", risco: "alto",
ciap: "R87", cid: "T17.9", tags: "engasgo engasgamento OVACE corpo estranho Heimlich manobra golpes nas costas sufocação bebê engasgado",
alerta: "Não fala, não tosse de forma eficaz ou cianose: obstrução grave → golpes nas costas + compressões (abdominais; no lactente, torácicas). Perdeu a consciência → RCP.",
S: `Paciente, ___ anos, engasgou às ___ h com ___ (alimento, objeto). Tosse eficaz ___, fala ___.`,
O: `Consciência ___, cianose ___, estridor ___, SpO₂ ___%. ${VITAIS}`,
A: `Obstrução de via aérea por corpo estranho, ___ (leve/grave).`,
P: `- Manobras realizadas: ___ (número de ciclos), às ___ h.
- Objeto expelido ___ / persistiu.
- Perda de consciência → RCP às ___ h.
- SAMU ___; encaminhamento para avaliação (pode haver lesão ou fragmento residual).`,
rx: [
 {trilha: "ambos", titulo: "ADULTO e CRIANÇA ≥ 1 ano – obstrução grave", texto: "MANOBRAS\n1. Ciclos de 5 golpes firmes nas costas (entre as escápulas, com a base da mão) seguidos de 5 compressões abdominais (punho acima do umbigo, para dentro e para cima).\n2. Repetir até expelir o objeto ou a pessoa perder a consciência.\n3. Inconsciente: deitar, ligar 192 e iniciar RCP; olhar a boca antes das ventilações e retirar objeto visível.", dose: "F", nota: "AHA 2025 [F]. Gestante avançada ou obeso: compressões torácicas no lugar das abdominais [C]."},
 {trilha: "ambos", titulo: "LACTENTE < 1 ano – obstrução grave", texto: "MANOBRAS\n1. Bebê de bruços sobre o antebraço, cabeça mais baixa que o tronco: 5 golpes nas costas.\n2. Virar de barriga para cima, cabeça mais baixa: 5 compressões torácicas com a base de uma mão no meio do peito (cerca de 1 por segundo).\n3. Alternar até expelir ou perder a consciência → RCP. Não fazer compressão abdominal no lactente; não varrer a boca às cegas.", dose: "F", nota: "AHA 2025 [F]; não varrer às cegas [C]."}
],
orient: "Depois de um engasgo forte, é preciso avaliação médica, mesmo que a pessoa esteja bem: pode ter ficado fragmento ou lesão. Ensine a família a fazer as manobras.",
alarme: ["Tosse persistente, chiado ou falta de ar depois do engasgo", "Dor ao engolir ou voz alterada", "Febre nos dias seguintes (pneumonia aspirativa)"],
encaminhar: "Após manobras eficazes com sintomas persistentes, ou se houve compressões abdominais → avaliação em urgência. Suspeita de corpo estranho residual → broncoscopia (urgência).",
sus: {nacional: "SAMU 192; urgência hospitalar para broncoscopia.", betim: "Referência pediátrica de urgência: confirmar."},
evid: {resumo: "As diretrizes de 2025 da AHA passaram a recomendar, no adulto e na criança, ciclos de golpes nas costas seguidos de compressões abdominais, e no lactente golpes nas costas alternados com compressões torácicas.", certeza: "Baixa a moderada (diretriz; evidência observacional)", fontes: ["aha2025_bls"]},
mudancas: ["Entrada nova: engasgo com manobras de adulto/criança e de lactente separadas (AHA 2025)."],
nv: [],
guia: UG({
  urg: "Tosse eficaz: incentive a tossir e observe · Não fala/não tosse/cianose: 5 golpes nas costas + 5 compressões, em ciclos · Inconsciente: 192 e RCP.",
  resumo: "Se a pessoa **tosse e fala**, deixe tossir. Se **não consegue**, alterne **5 golpes nas costas** com **5 compressões** – abdominais a partir de 1 ano, **torácicas no lactente**. Perdeu a consciência: **RCP**.",
  fluxo: [
    {t: "Engasgo súbito"},
    {t: "Consegue tossir com força e falar/chorar?", ramos: [
      {r: "Sim (leve)", n: [{t: "Incentivar a tossir; não fazer manobras; observar", k: "ok"}]},
      {r: "Não (grave)", n: [{t: "Idade?"}]}]},
    {t: "Manobra", ramos: [
      {r: "≥ 1 ano e adulto", n: [{t: "5 golpes nas costas → 5 compressões abdominais, em ciclos", k: "stop"}]},
      {r: "< 1 ano", n: [{t: "5 golpes nas costas → 5 compressões torácicas, cabeça baixa", k: "stop"}]}]},
    {t: "Ficou inconsciente → 192 + RCP; olhar a boca antes de ventilar", k: "stop"}
  ],
  fluxoNota: "AHA 2025 [F].",
  ref: ["aha2025_bls"],
  doses: [
    ["Golpes nas costas", "5, com a base da mão entre as escápulas, pessoa inclinada para frente [F]", "Lactente: 5, de bruços no antebraço, cabeça mais baixa [F]; criança ≥ 1 ano: igual ao adulto [F]"],
    ["Compressões", "5 abdominais (punho acima do umbigo, para dentro e para cima) [F]; gestante/obeso: torácicas [C]", "Lactente: 5 torácicas com a base de uma mão no meio do peito, ~1/s [F]; ≥ 1 ano: abdominais [F]"],
    ["Inconsciente", "RCP 30:2 [F]", "RCP 15:2 (2 socorristas) [F]"]],
  dosesNota: "Não há fármaco no engasgo; a 'dose' aqui é a técnica.",
  depois: ["Avaliação em urgência se fez compressões abdominais, tosse persistente, sibilo ou dispneia [C].", "Orientar a família: alimentos de risco em < 4 anos (uva inteira, salsicha em rodela, pipoca, amendoim) e brinquedos pequenos [C]."]
})
}
);

const REV32 = {
  "anafilaxia": c => {
    c.rx = [
      {trilha: "ambos", titulo: "ADULTO – adrenalina IM (1ª linha)", texto: "USO INTRAMUSCULAR – vasto lateral da coxa\n1. Adrenalina 1 mg/mL – 0,5 mL (0,5 mg), sem diluir.\n   Repetir a cada 5 minutos se não houver melhora.", dose: "F", nota: "Protocolo de APS de Curitiba 2024 [F]. Não há contraindicação absoluta à adrenalina na anafilaxia."},
      {trilha: "ambos", titulo: "CRIANÇA – adrenalina IM (1ª linha)", texto: "USO INTRAMUSCULAR – vasto lateral da coxa\n1. Adrenalina 1 mg/mL – 0,01 mL/kg, sem diluir (= ___ mL para ___ kg).\n   Máximo 0,5 mL por dose (0,3 mL em pré-púberes pelo consenso ASBAI/SBP).\n   Repetir a cada 5–15 minutos conforme sintomas e PA.", dose: "F", nota: "FHEMIG 2019 (forte) [F]; teto de 0,3 mL em pré-púberes: ASBAI/SBP 2018 [C]. Seringa de 1 mL."},
      {trilha: "ambos", titulo: "ADULTO – suporte e adjuvantes", texto: "1. Deitar com pernas elevadas (dispneia: sentado; gestante: decúbito lateral esquerdo).\n2. O₂: cateter até 6 L/min; máscara com reservatório se SpO₂ seguir < 92%.\n3. Choque: SF 0,9% 500 a 1.000 mL em bolus, 2 acessos calibrosos.\n4. Broncoespasmo: salbutamol 100 mcg 4 a 8 jatos com espaçador.\n5. Só após adrenalina: prometazina 25 mg IM profunda; hidrocortisona 100–500 mg IV.", dose: "NV", nota: "Itens 1–3: Curitiba 2024 [F]. Salbutamol, prometazina e hidrocortisona: conferir bula. Anti-histamínico só trata sintomas de pele."},
      {trilha: "ambos", titulo: "CRIANÇA – suporte e adjuvantes", texto: "1. Posição: instável → deitada com pernas elevadas; dispneia → sentada; criança pequena → posição de conforto (colo).\n2. Choque sem melhora após adrenalina IM: SF 0,9% 20 a 30 mL/kg em 1 hora (= ___ mL).\n3. Broncoespasmo: salbutamol com espaçador.\n4. Só após adrenalina: anti-histamínico (preferir 2ª geração; prometazina contraindicada < 2 anos); hidrocortisona 4–5 mg/kg IV.", dose: "NV", nota: "Itens 1–2: FHEMIG 2019 [F]. Doses de salbutamol, anti-histamínico e corticoide: conferir bula."}
    ];
    c.guia = UG({
      urg: "ADRENALINA IM NA COXA JÁ – adulto 0,5 mg; criança 0,01 mL/kg (máx. 0,5 mL) · deitar com pernas elevadas · ligar 192 · repetir a adrenalina em 5–15 min se não melhorar.",
      resumo: "Anafilaxia = pele/mucosa **+** respiração ou PA ou intestino, minutos após exposição (ou só queda de PA após alérgeno conhecido). O único fármaco que reduz mortalidade é a **adrenalina IM precoce**. Antialérgico e corticoide são adjuvantes e **nunca vêm antes**.",
      fluxo: [
        {t: "Início súbito após alimento, remédio, picada ou látex"},
        {t: "Urticária/angioedema + (dispneia, sibilo, estridor, PA baixa/síncope ou vômitos/cólica)? Ou queda de PA após alérgeno conhecido?", ramos: [
          {r: "Sim", n: [{t: "ANAFILAXIA: adrenalina IM na coxa agora; remover o agente; 192", k: "stop"}]},
          {r: "Só pele, sem outro sistema", n: [{t: "Urticária/angioedema isolado: anti-histamínico e observar (pode evoluir)", k: "warn"}]}]},
        {t: "Posição: instável → deitado, pernas elevadas; dispneia → sentado; gestante → lateral esquerdo", k: "warn"},
        {t: "Sem melhora em 5–15 min?", ramos: [
          {r: "Sim", n: [{t: "Repetir adrenalina IM; O₂; SF em bolus se choque", k: "stop"}]},
          {r: "Melhorou", n: [{t: "Observar 4–6 h (12–24 h se fator de risco) – transferir com o SAMU", k: "ok"}]}]}
      ],
      fluxoNota: "Critérios e conduta: FHEMIG 2019 [F] e protocolo de APS de Curitiba 2024 [F].",
      ref: ["fhemig_anafilaxia", "curitiba_anaf"],
      doses: [
        ["Adrenalina IM (1 mg/mL)", "0,5 mL (0,5 mg) no vasto lateral; repetir a cada 5 min [F]", "0,01 mL/kg, máx. 0,5 mL (0,3 mL em pré-púbere – ASBAI [C]); repetir a cada 5–15 min [F]"],
        ["Soro no choque", "SF 0,9% 500–1.000 mL em bolus [F]", "Cristaloide 20–30 mL/kg em 1 h se choque sem melhora com adrenalina IM [F]"],
        ["O₂", "Cateter até 6 L/min; máscara com reservatório se SpO₂ < 92% [F]", "Máscara/cateter; posição de conforto [F]"],
        ["Broncoespasmo", "Salbutamol com espaçador (adjuvante) [NV]", "Salbutamol com espaçador (adjuvante) [NV]"],
        ["Anti-H1 / corticoide", "Só após adrenalina; só para pele / prevenção de reação bifásica (fraca) [F]", "Idem; prometazina contraindicada < 2 anos [C]"],
        ["Observação", "4–6 h; 12–24 h se sibilância, choque, > 1 dose, > 90 min até chegar ou gatilho desconhecido [F]", "Idem (FHEMIG) [F]"]],
      depois: ["Transferir para observação com o SAMU [F].", "Na alta: plano escrito, evitar o desencadeante, encaminhar à alergologia; adrenalina autoinjetável e treinamento (compra; disponibilidade não verificada) [F].", "Uso de betabloqueador ou IECA pode tornar a reação mais grave ou refratária [C]."]
    });
    R32.fonte(c, "curitiba_anaf"); R32.muda(c, "aba 'Agir agora' com fluxograma e doses de adulto e criança separadas.");
  },
  "hipoglicemia": c => {
    c.sistema = "Urgências na UBS";
    c.rx = [
      {trilha: "ambos", titulo: "ADULTO consciente – regra dos 15", texto: "USO ORAL\n1. 15 g de carboidrato simples: 1 colher de sopa de açúcar em água, ou 150 mL de refrigerante comum/suco.\n   Glicemia < 54 mg/dL: 30 g.\n2. Repetir a glicemia em 15 min; repetir até 3 vezes se < 70.\n3. Depois: lanche com carboidrato complexo ou a próxima refeição.", dose: "F", nota: "SBD, conforme resumo do CBMFC 2025 [F]."},
      {trilha: "ambos", titulo: "ADULTO inconsciente ou sem conseguir engolir", texto: "USO INTRAVENOSO\n1. Glicose 50% – 25 a 50 mL (12,5–25 g) IV em veia calibrosa, com SF após (é irritante).\n2. Glicemia em 15 min; repetir se < 70. Manter SG 10% se necessário (500 mL de SG 5% + 50 mL de glicose 50% ≈ 9,5%).\n   Etilista/desnutrido: tiamina 100 mg IV antes da glicose.\n\nSEM ACESSO VENOSO\n2. Glucagon 1 mg IM/SC (se houver).", dose: "NV", nota: "Glucagon: bula [F]. Volume de glicose 50% e tiamina: conferir protocolo/bula. Nada pela boca enquanto não acordar."},
      {trilha: "ambos", titulo: "CRIANÇA – hipoglicemia", texto: "CONSCIENTE\n1. Carboidrato simples VO e glicemia em 15 min.\n\nINCONSCIENTE / NÃO ENGOLE (glicemia < 60 mg/dL)\n2. Glicose 10% – 2 a 4 mL/kg IV (= ___ mL). Preparar: 1 mL de glicose 50% + 4 mL de SF 0,9% (a REMUME não tem glicose 10%).\n\nSEM ACESSO VENOSO\n3. Glucagon IM/SC: 0,5 mg se < 20 kg; 1 mg se > 20 kg (se houver).", dose: "F", nota: "Glicose 10%: FHEMIG [F]; glucagon: bula [F]. A diluição 1 + 4 dá glicose 10% [I]. Quantidade de carboidrato oral por peso: não conferida."}
    ];
    c.guia = UG({
      urg: "Glicemia capilar < 70 mg/dL com sintomas · consciente: 15 g de açúcar VO e repetir em 15 min · inconsciente: glicose IV (ou glucagon IM) e nada pela boca.",
      resumo: "Todo rebaixamento, convulsão, confusão ou 'AVC' começa com **glicemia capilar**. Consciente: **regra dos 15**. Inconsciente: **glicose IV** (adulto glicose 50%; criança glicose 10%) ou **glucagon IM**. Hipoglicemia por **sulfonilureia volta** por 24–72 h: não liberar.",
      fluxo: [
        {t: "Sintomas (tremor, suor, confusão, convulsão, coma) → glicemia capilar"},
        {t: "Glicemia < 70 mg/dL?", ramos: [
          {r: "Não", n: [{t: "Procurar outra causa (ABCDE)", k: "warn"}]},
          {r: "Sim", n: [{t: "Consegue engolir com segurança?"}]}]},
        {t: "Engole?", ramos: [
          {r: "Sim", n: [{t: "15 g de carboidrato (30 g se < 54) → glicemia em 15 min → repetir até 3 vezes → lanche", k: "ok"}]},
          {r: "Não", n: [{t: "Glicose IV (adulto 50%; criança 10% 2–4 mL/kg); sem acesso → glucagon IM; 192 se não acordar", k: "stop"}]}]},
        {t: "Sulfonilureia, insulina de ação longa, DRC, etilismo ou sem causa clara → observação/internação", k: "warn"}
      ],
      fluxoNota: "Regra dos 15 (SBD) [F]; glicose 10% na criança (FHEMIG) [F]; glucagon (bula) [F]; recorrência com sulfonilureia [C].",
      ref: ["hipo_cbmfc", "fhemig_eme", "glucagon_bula"],
      doses: [
        ["Oral (consciente)", "15 g (1 colher de sopa de açúcar ou 150 mL de refrigerante comum); 30 g se < 54 mg/dL [F]", "Carboidrato simples VO [C]; quantidade por peso não conferida [NV]"],
        ["IV (inconsciente)", "Glicose 50% 25–50 mL [NV]", "Glicose 10% 2–4 mL/kg se < 60 mg/dL [F] (1 mL de glicose 50% + 4 mL de SF)"],
        ["Glucagon IM/SC", "1 mg [F]", "0,5 mg se < 20 kg; 1 mg se > 20 kg [F]"],
        ["Reavaliar", "Glicemia em 15 min [F]", "Glicemia em 15 min [C]"]],
      dosesNota: "Glucagon não consta na RENAME/REMUME (compra).",
      depois: ["Descobrir a causa: dose de insulina, refeição perdida, exercício, álcool, DRC, sulfonilureia (glibenclamida) [C].", "Revisar o tratamento: trocar glibenclamida, reduzir insulina; orientar família e prescrever glucagon se episódios graves [C].", "Hipoglicemia em criança sem diabetes: investigar (intoxicação, doença metabólica) em serviço de urgência [C]."]
    });
    R32.fonte(c, "hipo_cbmfc", "fhemig_eme"); R32.muda(c, "movido para 'Urgências na UBS', com aba 'Agir agora' e doses de adulto e criança separadas.");
  },
  "convulsao-ativa": c => {
    c.rx = [
      {trilha: "ambos", titulo: "ADULTO – crise > 5 min", texto: "SEM ACESSO VENOSO\n1. Midazolam 5 mg/mL – 10 mg (2 mL) IM se > 40 kg.\n\nCOM ACESSO VENOSO\n2. Diazepam 5 mg/mL – 0,15 a 0,2 mg/kg IV lento (≈ 10 mg no adulto).\n\nSe persistir em 5–10 min: repetir o benzodiazepínico UMA vez. Depois: 2ª linha no serviço de urgência.", dose: "F", nota: "AES 2016 [F]. Monitorar respiração; ambu e O₂ prontos. Glicemia capilar sempre."},
      {trilha: "ambos", titulo: "CRIANÇA – crise > 5 min", texto: "SEM ACESSO VENOSO\n1. Midazolam 5 mg/mL – 0,2 mg/kg IM, intranasal ou bucal, máximo 5 mg (= ___ mg = ___ mL para ___ kg).\n\nCOM ACESSO VENOSO\n2. Midazolam 0,2 mg/kg IV (máx. 5 mg).\n\nSe persistir: repetir; depois fenitoína 15 mg/kg IV (máx. 750 mg) no serviço de urgência.\nGlicemia < 60 mg/dL: glicose 10% 2–4 mL/kg IV.", dose: "F", nota: "FHEMIG [F]. A AES (2016) usa 5 mg IM para 13–40 kg [F]. Diazepam retal é alternativa [NV]."}
    ];
    c.guia = UG({
      urg: "Proteger (lateralizar, nada na boca) · O₂ e glicemia capilar · crise > 5 min: benzodiazepínico – adulto midazolam 10 mg IM; criança midazolam 0,2 mg/kg (máx. 5 mg) · 192.",
      resumo: "Crise que dura **> 5 minutos** (ou crises sem recuperar a consciência) é estado de mal: trate **já**. Sem acesso venoso, **midazolam IM** é tão bom quanto venoso. Sempre **glicemia capilar**. No máximo **2 doses** de benzodiazepínico na UBS.",
      fluxo: [
        {t: "Crise convulsiva"},
        {t: "Proteger de trauma, lateralizar, não colocar nada na boca; O₂; cronometrar; glicemia capilar", k: "warn"},
        {t: "Glicemia < 60–70?", ramos: [
          {r: "Sim", n: [{t: "Glicose IV (ver Hipoglicemia)", k: "stop"}]},
          {r: "Não", n: [{t: "Dura > 5 min?"}]}]},
        {t: "Duração", ramos: [
          {r: "> 5 min", n: [{t: "Benzodiazepínico (IM se sem acesso) → 192", k: "stop"}]},
          {r: "Parou", n: [{t: "Posição lateral, observar recuperação; investigar causa", k: "ok"}]}]},
        {t: "Persiste 5–10 min após a 1ª dose → repetir 1 vez; depois 2ª linha no hospital", k: "stop"}
      ],
      fluxoNota: "AES 2016 [F]; doses pediátricas FHEMIG [F].",
      ref: ["aes_eme", "fhemig_eme"],
      doses: [
        ["Midazolam IM", "10 mg se > 40 kg [F]", "0,2 mg/kg, máx. 5 mg (FHEMIG) [F]; AES: 5 mg se 13–40 kg [F]"],
        ["Midazolam IN/bucal", "—", "0,2 mg/kg, máx. 5 mg [F]"],
        ["Diazepam IV", "0,15–0,2 mg/kg IV lento (≈ 10 mg) [F]", "Preferir midazolam (FHEMIG) [F]"],
        ["Repetição", "1 vez, se persistir [F]", "Repetir se persistir; depois fenitoína 15 mg/kg (máx. 750 mg) no hospital [F]"],
        ["Hipoglicemia", "Ver Hipoglicemia [NV]", "Glicose 10% 2–4 mL/kg se < 60 mg/dL [F]"],
        ["Febre (criança)", "—", "Crise febril simples dura < 15 min; febre + rigidez de nuca/petéquias → sepse/meningite [C]"]],
      dosesNota: "Midazolam 5 mg/mL na REMUME de Betim [F].",
      depois: ["Primeira crise, crise focal, déficit, cefaleia intensa, febre com sinais meníngeos, trauma ou gestação → urgência [C].", "Epiléptico conhecido com crise isolada e recuperação completa: revisar adesão e níveis, orientar [C].", "Orientar sobre direção de veículos e atividades de risco [C]."]
    });
    R32.fonte(c, "aes_eme"); c.nv = ["Diazepam retal pediátrico: dose não conferida."];
    R32.muda(c, "aba 'Agir agora'; doses de adulto (AES 2016) e criança (FHEMIG) em blocos separados.");
  },
  "dor-toracica": c => {
    c.sistema = "Urgências na UBS";
    c.nome = "Dor torácica – suspeita de SCA e baixa probabilidade";
    c.rx[0] = {trilha: "ambos", titulo: "ADULTO – suspeita de SCA, antes da remoção", texto: "USO ORAL\n1. Ácido acetilsalicílico 100 mg – 2 a 3 comprimidos (200–300 mg) mastigados agora, se sem alergia ou sangramento ativo.\n\nUSO SUBLINGUAL (dor persistente, PAS > 90 mmHg, sem sildenafila/tadalafila recente, sem suspeita de IAM de VD)\n2. Dinitrato de isossorbida 5 mg – 1 comprimido SL; repetir em 5–10 min se a dor persistir, até 15 mg.\n\n3. O₂ só se SpO₂ < 90%.", dose: "F", nota: "SMS Sorocaba 2022 (AAS 200 mg) e HCFMRP-USP (AAS 300 mg; nitrato e contraindicações) [F]. Tadalafila: evitar nitrato por 48 h [C]. Não atrasar o SAMU."};
    c.guia = UG({
      urg: "Dor em aperto/peso, em repouso, > 10–20 min, com sudorese, dispneia ou síncope · ECG em até 10 min (se houver) · AAS 200–300 mg mastigado · 192.",
      resumo: "Na UBS a pergunta é **'isso pode ser SCA, dissecção ou TEP?'**. Suspeita de SCA: **AAS mastigado**, **nitrato SL** se PA permitir, **ECG em 10 min** se houver e **SAMU** – não espere exame. Dor reprodutível à palpação, jovem, sem fatores de risco: use o **Marburg**.",
      calcs: ["sc:marburg"],
      fluxo: [
        {t: "Dor torácica"},
        {t: "Instável (PAS < 90, dispneia, síncope, sudorese fria) ou dor típica em repouso > 10–20 min?", ramos: [
          {r: "Sim", n: [{t: "Suspeita de SCA: AAS 200–300 mg mastigado + nitrato SL se PAS > 90 + ECG (se houver) + 192", k: "stop"}]},
          {r: "Não", n: [{t: "Dor súbita lancinante para o dorso / assimetria de pulsos?"}]}]},
        {t: "Dissecção ou TEP?", ramos: [
          {r: "Suspeita de dissecção", n: [{t: "NÃO dar AAS; 192", k: "stop"}]},
          {r: "Dispneia + taquicardia + fator de risco de TEP", n: [{t: "192 / urgência", k: "stop"}]},
          {r: "Nenhum", n: [{t: "Marburg 0–2 e exame benigno → tratar causa provável e reavaliar em 24–72 h", k: "ok"}]}]}
      ],
      fluxoNota: "Conduta inicial na SCA: SMS Sorocaba 2022 e HCFMRP-USP [F]; dissecção/TEP e Marburg [C].",
      ref: ["sca_sorocaba", "sca_hcrp", "dor_toracica"],
      doses: [
        ["AAS", "200–300 mg mastigado (2–3 cp de 100 mg) [F]", "Não se aplica: dor torácica na criança raramente é coronariana [C]"],
        ["Nitrato SL", "Dinitrato de isossorbida 5 mg, repetir em 5–10 min, máx. 15 mg; não usar se PAS < 90, IAM de VD ou inibidor de PDE-5 recente [F]", "Não se aplica [C]"],
        ["O₂", "Se SpO₂ < 90% [F]", "Se SpO₂ < 92% [C]"],
        ["Quando se preocupar", "Ver fluxograma", "Dor ao esforço, síncope ao esforço, palpitação, febre com dor (miocardite/pericardite), trauma, cardiopatia ou falciforme (síndrome torácica aguda) → urgência [C]"]],
      extraDepois: [{calc: "sc:marburg"}],
      depois: ["Registrar horário de início da dor, ECG e doses dadas.", "Baixa probabilidade: retorno em 24–72 h com orientação escrita de sinais de alarme [C].", "Dor crônica estável sugestiva de angina: estratificação ambulatorial [C]."]
    });
    c.nv = ["Disponibilidade de ECG na UBS e fluxo SAMU/UPA de Betim: confirmar."];
    R32.fonte(c, "sca_sorocaba", "sca_hcrp"); R32.muda(c, "movido para 'Urgências na UBS'; AAS e nitrato conferidos; aba 'Agir agora'.");
  },
  "sepse": c => {
    c.rx = [
      {trilha: "ambos", titulo: "ADULTO – antes da remoção", texto: "USO INTRAVENOSO/INTRAMUSCULAR\n1. Ceftriaxona 1 g – 2 g IV (ou IM, dividido em 2 locais), se a remoção vai demorar ou suspeita de meningococcemia/meningite.\n\nUSO INTRAVENOSO\n2. Soro fisiológico 0,9% – 500 mL em bolus se hipotensão/má perfusão; reavaliar após cada bolus (até 30 mL/kg).\n3. O₂ se SpO₂ < 92%.", dose: "NV", nota: "SSC 2021 [C]. Não atrasar a remoção pelo antibiótico; não atrasar o antibiótico na suspeita de meningococcemia."},
      {trilha: "ambos", titulo: "CRIANÇA – antes da remoção", texto: "USO INTRAVENOSO/INTRAMUSCULAR\n1. Ceftriaxona – 100 mg/kg (máx. 2 g) = ___ mg, se remoção demorada ou suspeita de doença meningocócica.\n   Neonato (≤ 28 dias): discutir com a regulação (ceftriaxona contraindicada com icterícia ou cálcio IV).\n\nUSO INTRAVENOSO\n2. SF 0,9% 10–20 mL/kg SOMENTE se hipotensão/choque, reavaliando hepatomegalia e crepitações; sem hipotensão, apenas manutenção.", dose: "NV", nota: "Doses: conferir protocolo do SAMU e Guia de Vigilância. Use a dose pediátrica 'Ceftriaxona' do app."}
    ];
    c.guia = UG({
      urg: "Infecção + sinal de gravidade (FR ≥ 22, confusão, PAS ≤ 100, SpO₂ < 92%, má perfusão, petéquias com febre) · O₂, acesso, glicemia · 192 · antibiótico antes da remoção se demorar ou houver petéquias.",
      resumo: "Sem lactato na UBS, a sepse é **clínica**: infecção + **disfunção** (respiração, consciência, PA, perfusão, diurese). **Febre com petéquias** é doença meningocócica até prova em contrário: **ceftriaxona antes da remoção** e notificação imediata.",
      calcs: ["sc:qsofa"],
      fluxo: [
        {t: "Suspeita de infecção"},
        {t: "FR ≥ 22, confusão, PAS ≤ 100, SpO₂ < 92%, enchimento lento, oligúria, pele moteada?", ramos: [
          {r: "Sim", n: [{t: "Sepse provável: O₂, acesso, SF se hipoperfusão, glicemia; 192", k: "stop"}]},
          {r: "Não", n: [{t: "Tratar o foco; reavaliar em 24–48 h com sinais de alarme por escrito", k: "ok"}]}]},
        {t: "Febre + petéquias/púrpura ou sinais meníngeos?", ramos: [
          {r: "Sim", n: [{t: "Ceftriaxona AGORA, antes da remoção; notificação imediata", k: "stop"}]},
          {r: "Não", n: [{t: "Antibiótico antes da remoção se o transporte for demorar", k: "warn"}]}]}
      ],
      fluxoNota: "SSC 2021 e Guia de Vigilância (doença meningocócica) [C].",
      ref: ["ssc_sepse"],
      doses: [
        ["Ceftriaxona", "2 g IV ou IM [NV]", "100 mg/kg (máx. 2 g) [NV]; neonato: discutir com a regulação [C]"],
        ["Soro", "500 mL em bolus, reavaliar, até 30 mL/kg [NV]", "10–20 mL/kg só se hipotensão/choque [NV]"],
        ["O₂", "Se SpO₂ < 92% [C]", "Se SpO₂ < 92% [C]"],
        ["Sinais de gravidade", "qSOFA ≥ 2 sugere maior risco; qSOFA negativo não exclui [C]", "Taquicardia/taquipneia desproporcionais à febre, enchimento > 3 s, letargia, petéquias [C]"]],
      depois: ["Doença meningocócica: notificação imediata e quimioprofilaxia dos contatos pela vigilância [C].", "Registrar horários: reconhecimento, antibiótico, soro, acionamento do SAMU."]
    });
    R32.muda(c, "aba 'Agir agora'; prescrição separada em adulto e criança.");
  },
  "avc-ait": c => {
    c.guia = UG({
      urg: "Déficit súbito (face, braço, fala) · 192 já · anote a hora em que foi visto bem pela última vez · glicemia capilar · nada pela boca · não baixar PA e não dar AAS.",
      resumo: "Tempo é cérebro: **trombólise até 4,5 h** e trombectomia em casos selecionados. A UBS faz **reconhecimento, hora, glicemia e SAMU**. Hipoglicemia simula AVC.",
      fluxo: [
        {t: "Déficit neurológico súbito (face caída, fraqueza de braço, fala alterada, perda visual, ataxia)"},
        {t: "Glicemia capilar < 60?", ramos: [
          {r: "Sim", n: [{t: "Corrigir (ver Hipoglicemia) e reavaliar", k: "warn"}]},
          {r: "Não", n: [{t: "AVC até prova em contrário: 192, hora de início, cabeceira 0–30°, O₂ se SpO₂ < 94%, nada VO", k: "stop"}]}]},
        {t: "Sintomas já resolvidos (AIT)? → avaliação no mesmo dia em serviço com imagem", k: "stop"}
      ],
      fluxoNota: "AHA/ASA [C].",
      ref: ["aha_avc"],
      doses: [
        ["Medicação na UBS", "Nenhuma (não AAS, não anti-hipertensivo, não sedativo) [C]", "Nenhuma [C]"],
        ["Glicemia < 60", "Ver Hipoglicemia", "Glicose 10% 2–4 mL/kg IV [F]"],
        ["Pensar em", "Hipoglicemia, crise com paralisia pós-ictal, enxaqueca com aura [C]", "AVC existe na criança: anemia falciforme, cardiopatia; também hipoglicemia, crise pós-ictal [C]"]],
      refDoses: ["aha_avc", "fhemig_eme"],
      depois: ["Registrar hora de início, uso de anticoagulante e contato de familiar para a equipe de destino [C].", "AIT: alto risco de AVC nos primeiros dias – não liberar para investigação ambulatorial lenta [C]."]
    });
    R32.fonte(c, "fhemig_eme"); R32.muda(c, "aba 'Agir agora' com fluxograma e coluna pediátrica.");
  },
  "intoxicacao": c => {
    c.rx = [
      {trilha: "ambos", titulo: "ADULTO – antídotos e descontaminação", texto: "USO ORAL\n1. Carvão ativado – 50 g diluído em água, dose única, se ingestão potencialmente tóxica há ≤ 1 h, via aérea protegida e substância adsorvível.\n\nUSO INTRAVENOSO/INTRAMUSCULAR\n2. Naloxona 0,4 mg/mL – 0,4 mg IV/IM; repetir a cada 2–3 min conforme a respiração (opioide).\n3. Atropina 0,5 mg/mL – 1–2 mg IV na síndrome colinérgica (organofosforado/carbamato – 'chumbinho'); dobrar a cada 5 min até secar secreções brônquicas.", dose: "NV", nota: "Conferir conduta e doses com o CIATox (0800-722-6001)."},
      {trilha: "ambos", titulo: "CRIANÇA – antídotos e descontaminação", texto: "USO ORAL\n1. Carvão ativado – 1 g/kg (máx. 50 g), mesmas condições do adulto.\n\nUSO INTRAVENOSO/INTRAMUSCULAR\n2. Naloxona – 0,1 mg/kg (máx. 2 mg), repetir conforme resposta.\n3. Atropina – 0,02–0,05 mg/kg IV (mínimo 0,1 mg) na síndrome colinérgica.", dose: "NV", nota: "Conferir com o CIATox. Não induzir vômito."}
    ];
    c.guia = UG({
      urg: "ABCDE + glicemia capilar · ligar para o CIATox/Toxicologia MG 0800-722-6001 · rebaixamento, convulsão, arritmia, depressão respiratória ou tentativa de suicídio → 192.",
      resumo: "Quase sempre o melhor 'antídoto' é **suporte + telefone do CIATox**. Opioide com respiração lenta: **naloxona**. Carvão só **até 1 h**, com via aérea protegida e substância que adsorve. **Não induzir vômito.** Tentativa de suicídio: **notificação imediata**.",
      fluxo: [
        {t: "Exposição/ingestão (o quê, quanto, quando)"},
        {t: "Instável (respiração, consciência, PA, convulsão)?", ramos: [
          {r: "Sim", n: [{t: "ABCDE, O₂, glicemia; 192; naloxona se miose + FR baixa", k: "stop"}]},
          {r: "Não", n: [{t: "Ligar CIATox com nome do produto, dose, peso e hora"}]}]},
        {t: "Orientação do CIATox", ramos: [
          {r: "Potencialmente grave", n: [{t: "Carvão se ≤ 1 h e indicado; transferir para observação", k: "warn"}]},
          {r: "Baixo risco", n: [{t: "Observar/orientar conforme CIATox", k: "ok"}]}]},
        {t: "Intencional → avaliação de risco suicida + notificação imediata (24 h)", k: "stop"}
      ],
      fluxoNota: "Serviço de Toxicologia de MG [F]; condutas [C].",
      ref: ["toxicologia_mg"],
      doses: [
        ["Naloxona", "0,4 mg IV/IM, repetir a cada 2–3 min [NV]", "0,1 mg/kg (máx. 2 mg) [NV]"],
        ["Carvão ativado", "50 g se ≤ 1 h e indicado [NV]", "1 g/kg (máx. 50 g) [NV]"],
        ["Atropina (colinérgico)", "1–2 mg IV, dobrar a cada 5 min [NV]", "0,02–0,05 mg/kg (mín. 0,1 mg) [NV]"],
        ["Não usar", "Indução de vômito; flumazenil de rotina [C]", "Idem [C]"]],
      depois: ["Notificação compulsória de intoxicação exógena; tentativa de suicídio: imediata (até 24 h) [C].", "Criança: avaliar acidente × negligência; orientar armazenamento seguro [C]."]
    });
    R32.muda(c, "aba 'Agir agora'; antídotos separados em adulto e criança.");
  },
  "agitacao": c => {
    c.rx[0].titulo = "ADULTO – tranquilização rápida IM";
    c.rx[1].titulo = "ADULTO – via oral (se aceitar)";
    c.rx.push({trilha: "ambos", titulo: "CRIANÇA/ADOLESCENTE – agitação", texto: "CONDUTA\n1. Procurar causa orgânica (hipoglicemia, hipóxia, intoxicação, dor, infecção) e abordagem verbal com o responsável presente.\n2. Evitar sedação na UBS; se risco iminente, discutir com a regulação do SAMU antes de qualquer fármaco.", dose: "NV", nota: "Doses pediátricas não incluídas nesta revisão [NV]."});
    c.guia = UG({
      urg: "Segurança primeiro: não atender sozinho, saída livre · glicemia e oxímetro assim que possível · abordagem verbal · risco iminente → 192 (e polícia se violência).",
      resumo: "Antes de sedar, pense **orgânico**: hipoglicemia, hipóxia, intoxicação/abstinência, delirium, TCE. A ordem é **verbal → oral → IM**; contenção mecânica só como último recurso, com equipe e monitorização.",
      fluxo: [
        {t: "Paciente agitado"},
        {t: "Glicemia, SpO₂, sinais vitais, sinais de intoxicação/abstinência, febre, trauma", k: "warn"},
        {t: "Causa orgânica provável?", ramos: [
          {r: "Sim", n: [{t: "Tratar a causa; delirium: evitar benzodiazepínico (exceto abstinência); 192", k: "stop"}]},
          {r: "Não", n: [{t: "Desescalada verbal"}]}]},
        {t: "Funcionou?", ramos: [
          {r: "Sim", n: [{t: "Avaliação psiquiátrica (CAPS/urgência)", k: "ok"}]},
          {r: "Não, com risco", n: [{t: "Oferecer VO; se recusar e risco → IM; monitorizar; 192", k: "stop"}]}]}
      ],
      fluxoNota: "Abordagem escalonada [C]; ECRs TREC no Brasil [C].",
      ref: ["trec"],
      doses: [
        ["IM", "Haloperidol 5 mg + prometazina 50 mg; ou midazolam 5–10 mg (idoso 2,5–5 mg) [NV]", "Evitar na UBS; discutir com a regulação [C]"],
        ["VO", "Haloperidol 5 mg ou diazepam 10 mg (abstinência/ansiedade) [NV]", "Discutir com a regulação [C]"],
        ["Cuidado", "Idoso/demência com corpos de Lewy/Parkinson: evitar haloperidol; álcool/depressores: evitar midazolam [C]", "Causa orgânica é mais provável [C]"]],
      depois: ["Registrar a desescalada tentada, fármacos, horários e monitorização.", "Encaminhar: urgência clínica (causa orgânica) ou psiquiátrica; CAPS de referência [C]."]
    });
    R32.muda(c, "aba 'Agir agora'; prescrição separada por faixa etária.");
  },
  "sincope": c => {
    c.guia = UG({
      urg: "Deitar e elevar as pernas · pulso, PA, glicemia, SpO₂ · ECG (se houver) · alto risco → 192.",
      resumo: "A maioria é **reflexa** e benigna, mas a síncope **ao esforço, deitado, com palpitação, dor torácica, cardiopatia ou ECG alterado** é cardíaca até prova em contrário.",
      fluxo: [
        {t: "Perda transitória de consciência com recuperação espontânea"},
        {t: "Ainda inconsciente ou sem pulso?", ramos: [
          {r: "Sim", n: [{t: "Não é síncope: ABCDE / PCR", k: "stop"}]},
          {r: "Não", n: [{t: "Sinais de alto risco?"}]}]},
        {t: "Esforço, deitado, palpitação prévia, dor torácica, dispneia, cardiopatia, morte súbita familiar < 40 anos, ECG alterado, hipotensão persistente, trauma importante", ramos: [
          {r: "Algum", n: [{t: "Urgência/192 com monitorização", k: "stop"}]},
          {r: "Nenhum, quadro típico de reflexa", n: [{t: "Orientar contrapressão, hidratação, gatilhos; reavaliar", k: "ok"}]}]}
      ],
      fluxoNota: "ESC 2018 [C].",
      ref: ["esc_sincope"],
      doses: [
        ["Medicação", "Nenhuma de rotina [C]", "Nenhuma [C]"],
        ["Alarme", "Ver fluxograma [C]", "Síncope ao esforço ou no exercício (ex.: educação física), com palpitação, história familiar de morte súbita ou surdez congênita → cardiopediatria/urgência [C]"],
        ["Ortostática", "Medir PA deitado e em pé; revisar anti-hipertensivos e diuréticos [C]", "Desidratação; adolescente com POTS [C]"]],
      extraDoses: [{calc: "ho"}],
      depois: ["Diferenciar de crise epiléptica (cianose, mordedura lateral de língua, confusão prolongada) e de queda mecânica [C].", "Idoso: avaliar fármacos e risco de queda [C]."]
    });
    R32.muda(c, "aba 'Agir agora' com fluxograma e coluna pediátrica.");
  }
};

// asma: um guia de urgência compartilhado pelo adulto e pela criança
const G_ASMA = UG({
  urg: "Sentar, O₂ se SpO₂ < 92% · salbutamol com espaçador já · fala frases incompletas, uso de musculatura, SpO₂ < 92% após tratamento, sonolência ou tórax silencioso → 192.",
  resumo: "Crise de asma: **broncodilatador repetido na 1ª hora** com espaçador + **corticoide oral precoce**. Reavalie a cada 20 min. **Ninguém sai só com salbutamol**: alta com corticoide inalatório.",
  fluxo: [
    {t: "Dispneia, sibilos, tosse – asma conhecida ou provável"},
    {t: "Sinais de risco de vida: sonolência/confusão, tórax silencioso, cianose, bradicardia, SpO₂ < 90%?", ramos: [
      {r: "Sim", n: [{t: "192; O₂; salbutamol contínuo; corticoide", k: "stop"}]},
      {r: "Não", n: [{t: "Salbutamol com espaçador a cada 20 min na 1ª hora + corticoide oral"}]}]},
    {t: "Após 1 hora", ramos: [
      {r: "Melhorou (fala bem, SpO₂ ≥ 94%)", n: [{t: "Alta com corticoide oral 5–7 dias + CI de manutenção + plano escrito; retorno em 2–7 dias", k: "ok"}]},
      {r: "Parcial/sem melhora", n: [{t: "Continuar e transferir (192)", k: "stop"}]}]}
  ],
  fluxoNota: "PCDT Asma 2023 para doses [F]; critérios de gravidade [C].",
  ref: ["pcdt_asma2023", "gina"],
  doses: [
    ["Salbutamol 100 mcg (espaçador)", "Leve: 1–2 jatos a cada 20 min; moderada/grave: 4 jatos a cada 10 min ou 8 a cada 20 min por até 4 h [F]", "22,5–30 mcg/kg por dose (≈ 1 jato a cada 3–4 kg; máx. 9 jatos) a cada 20 min [F]"],
    ["Nebulização (sem espaçador)", "Salbutamol 2,5–5 mg a cada 20 min, 3 doses [F]", "0,15 mg/kg (máx. 5 mg) [F]"],
    ["Corticoide oral", "Prednisona 40–60 mg/dia por 5–7 dias, sem desmame [F]", "Prednisolona 1–2 mg/kg/dia por 3–5 dias; ≥ 40 kg = dose de adulto [F]"],
    ["Ipratrópio (moderada/grave)", "Junto às primeiras doses de salbutamol [NV]", "Junto às primeiras doses de salbutamol [NV]"],
    ["Alta", "CI (beclometasona 200–500 mcg/dia = dose baixa) + resgate [F]", "CI em dose por idade [NV]"]],
  dosesNota: "Salbutamol, beclometasona e prednisona/prednisolona: REMUME; salbutamol e beclometasona também grátis na Farmácia Popular [F].",
  depois: ["Revisar técnica do espaçador, adesão e gatilhos; plano de ação escrito [C].", "Crise grave ou ≥ 2 crises com corticoide no ano: subir a etapa do tratamento [C]."]
});
REV32["asma-crise"] = c => {
  c.sistema = "Urgências na UBS"; c.guia = G_ASMA;
  c.rx[0].titulo = "ADULTO – na unidade"; c.rx[1].titulo = "ADULTO – alta (SUS Betim)"; if (c.rx[2]) c.rx[2].titulo = "ADULTO – alta (trilha GINA: budesonida+formoterol)";
  R32.muda(c, "movido para 'Urgências na UBS'; aba 'Agir agora' com doses de adulto e criança.");
};
REV32["asma-crianca"] = c => {
  c.guia = G_ASMA;
  c.rx[0].titulo = "CRIANÇA – crise (SUS Betim)"; c.rx[1].titulo = "CRIANÇA – manutenção após a crise";
  R32.muda(c, "aba 'Agir agora' compartilhada com a crise do adulto.");
};

const PRIO32 = {"urg-abordagem": 1, "pcr": 2, "ovace": 3, "anafilaxia": 4, "hipoglicemia": 5, "convulsao-ativa": 6, "asma-crise": 7, "dor-toracica": 8, "avc-ait": 9, "sepse": 10};
CONDICOES.forEach(c => { const f = REV32[c.id]; if (f) f(c); if (PRIO32[c.id]) c.prio = PRIO32[c.id]; });
