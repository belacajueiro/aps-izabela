// ───────────── data92.js – v81 (05/11/2026): tontura crônica no idoso (item novo) + ligação com "Tontura" e "Quedas".
// Origem: pedido da usuária ("tontura crônica no idoso, HINTS negativo, sem resposta a betaistina/flunarizina/cinarizina;
// quando pedir teste vestibular e audiometria?"). Pendência registrada em app-aps/pendencias-do-app.md.
// Fontes abertas nesta revisão (só o RESUMO no PubMed, salvo onde indicado):
//  - Agrawal 2019 (Bárány, presbivestibulopatia) – PMID 31306146; Staab 2017 (Bárány, PPPD) – PMID 29036855;
//    Murdin 2016 (Cochrane, betaistina) – PMID 27327415; Adrion 2016 (BEMED, BMJ) – PMID 26797774;
//    McDonnell & Hillier 2015 (Cochrane, reabilitação vestibular) – PMID 25581507.
//  - SMS Betim, Protocolo de Regulação de Exames Eletivos (2026), arquivo do Projeto: teste vestibular (02.11.07.035-1),
//    audiometria tonal (02.11.07.004-1), logoaudiometria (02.11.07.021-1), RM do ouvido (02.07.01.006-4): critérios P0–P3,
//    pré-requisitos e solicitantes (texto lido nesta revisão; solicitantes do teste vestibular NÃO constam no trecho lido).
//  - REMUME Betim (arquivo do Projeto): propranolol 40 mg, sertralina 50 mg, prometazina 25 mg, metoclopramida 10 mg, clonazepam 2 mg.
//    Betaistina, flunarizina, cinarizina, dimenidrinato e meclizina não aparecem na lista lida.
// Não aberto [NV]: GRACE-3 (texto integral), bulas ANVISA de flunarizina/cinarizina/betaistina, RENAME 2024 para esses fármacos,
// fluxo de reabilitação vestibular/eMulti em Betim.

Object.assign(FONTES, {
  agrawal2019_pvp: {s: "Bárány 2019 – presbivestibulopatia (critérios)", t: "Agrawal Y, Van de Berg R, Wuyts F, et al. Presbyvestibulopathy: diagnostic criteria. Consensus document of the Classification Committee of the Bárány Society. J Vestib Res 2019;29(4):161-170. doi:10.3233/VES-190672. PMID 31306146 (consenso; avaliado pelo resumo): síndrome vestibular crônica com instabilidade, distúrbio de marcha e/ou quedas recorrentes, com déficit vestibular bilateral leve; exige VOR reduzido dos dois lados (vHIT, cadeira rotatória ou prova calórica); coexiste com déficits de visão, propriocepção e função cortical/cerebelar/extrapiramidal.", f: "F", url: "https://doi.org/10.3233/VES-190672"},
  staab2017_pppd: {s: "Bárány 2017 – PPPD (critérios)", t: "Staab JP, Eckhardt-Henn A, Horii A, et al. Diagnostic criteria for persistent postural-perceptual dizziness (PPPD). Consensus document of the Bárány Society. J Vestib Res 2017;27(4):191-208. doi:10.3233/VES-170622. PMID 29036855 (consenso; avaliado pelo resumo): tontura, instabilidade ou vertigem não rotatória na maioria dos dias por ≥ 3 meses, piora em pé, com movimento e com estímulo visual complexo; pode ser desencadeada por doença vestibular, outras doenças ou sofrimento psíquico; transtorno funcional, não estrutural nem psiquiátrico.", f: "F", url: "https://doi.org/10.3233/VES-170622"},
  murdin2016_betaistina: {s: "Cochrane 2016 – betaistina na vertigem", t: "Murdin L, Hussain K, Schilder AGM. Betahistine for symptoms of vertigo. Cochrane Database Syst Rev 2016;(6):CD010696. doi:10.1002/14651858.CD010696.pub2. PMID 27327415 (RS; avaliada pelo resumo): 17 ECR, 1.025 participantes; todos os estudos com dados analisáveis duravam ≤ 3 meses; melhora global mais frequente com betaistina (RR 1,30; IC95% 1,05–1,60; 11 estudos, 606 participantes) com heterogeneidade alta; eventos adversos sem diferença (16% × 15%); certeza baixa; nenhum estudo avaliou quedas nem qualidade de vida.", f: "F", url: "https://doi.org/10.1002/14651858.CD010696.pub2"},
  adrion2016_bemed: {s: "BEMED 2016 – betaistina na doença de Ménière", t: "Adrion C, Fischer CS, Wagner J, et al. Efficacy and safety of betahistine treatment in patients with Meniere's disease (BEMED). BMJ 2016;352:h6816. doi:10.1136/bmj.h6816. PMID 26797774 (ECR fase III, n = 221, 9 meses; avaliado pelo resumo): sem diferença nas crises entre placebo e betaistina 48 mg/dia ou 144 mg/dia (RR de crises 1,036 e 1,012).", f: "F", url: "https://doi.org/10.1136/bmj.h6816"},
  mcdonnell2015_rv: {s: "Cochrane 2015 – reabilitação vestibular", t: "McDonnell MN, Hillier SL. Vestibular rehabilitation for unilateral peripheral vestibular dysfunction. Cochrane Database Syst Rev 2015;(1):CD005397. doi:10.1002/14651858.CD005397.pub4. PMID 25581507 (RS; avaliada pelo resumo): 39 estudos, 2.441 adultos da comunidade com disfunção vestibular periférica UNILATERAL; frequência de tontura menor com reabilitação (OR 2,67; IC95% 1,85–3,86; 4 estudos, 565 participantes); sem eventos adversos; no VPPB a manobra de reposicionamento é superior ao exercício isolado. Extrapolação: não estudado diretamente em idosos com tontura crônica multifatorial.", f: "F", url: "https://doi.org/10.1002/14651858.CD005397.pub4"},
  betim_exames2026_vest: {s: "Betim 2026 – teste vestibular, audiometria e RM de ouvido (critérios)", t: "SMS Betim, Diretoria de Regulação, Controle e Avaliação – Central de Exames. Protocolo de Regulação de Exames Eletivos (2026), arquivo do Projeto. TESTE VESTIBULAR (prova calórica/eletronistagmografia, SIA 02.11.07.035-1): P0 trauma craniano, exposição a ototóxicos, infecções, vertigem incapacitante diária com dúvida central × periférica; P1 enxaqueca vestibular, diagnóstico diferencial central × periférico, investigação neurológica; P2 'diagnóstico de vertigem e tontura', labirintite, distúrbios do equilíbrio; pré-requisitos: história detalhada, medicamentos que afetam o vestíbulo, exames auditivos/vestibulares prévios 'se disponíveis' (solicitantes não constam no trecho lido). AUDIOMETRIA TONAL (02.11.07.004-1): P0 perda súbita ou piora rápida/zumbido intenso e recente; P1 tipo e grau da perda, AASI, ruído, doença neurológica; P2 perda de longa data, monitorar progressão/zumbido, ototóxicos; P3 ocupacional; solicitantes: otorrino, fonoaudiólogo, pediatra, neurologista, clínico geral; item no MV 'EXAMES BÁSICOS DE AUDIÇÃO'. LOGOAUDIOMETRIA (02.11.07.021-1): obrigatório pedir junto com a tonal. RM DO OUVIDO (02.07.01.006-4): P0 tumor do ângulo pontocerebelar, perda neurossensorial/vertigem de progressão rápida; P1 Ménière, zumbido persistente inexplicável ou tontura crônica, perda neurossensorial, distúrbios do equilíbrio incapacitantes; P2 sintomas leves e crônicos já avaliados por exames menos complexos (audiometria), equilíbrio/labirintite crônicos; solicitantes incluem clínico geral; pré-requisito: exames auditivos prévios 'se disponíveis'.", f: "F", url: ""}
});

CONDICOES.push({
  id: "cr-tontura-idoso", modulo: "cr", sistema: "Saúde da pessoa idosa", risco: "moderado",
  nome: "Tontura crônica no idoso (HINTS negativo): causas, o que evitar e quando pedir teste vestibular e audiometria",
  ciap: "N17", cid: "R42",
  tags: "tontura crônica idoso vertigem desequilíbrio instabilidade labirintite presbivestibulopatia PPPD migrânea vestibular hipotensão ortostática quedas betaistina flunarizina cinarizina antivertiginoso reabilitação vestibular teste vestibular prova calórica eletronistagmografia audiometria logoaudiometria RM ouvido HINTS",
  alerta: "Esta página é para tontura que dura há semanas ou meses e sem sinais de alarme. Tontura nova, contínua há horas ou dias, com nistagmo, déficit neurológico, cefaleia súbita ou incapacidade de andar = ver 'Tontura – avaliação inicial' (urgência se houver dúvida). HINTS só vale para tontura AGUDA contínua com nistagmo, feito por examinador treinado; em tontura crônica ele não se aplica.",
  S: `Tontura há ___ (meses/anos). Como é: ___ (rotatória / instabilidade / cabeça vazia / pré-síncope). Constante ou em crises: ___. Piora com: ___ (levantar, virar a cabeça, deitar/virar na cama, andar, multidão, supermercado, tela, escuro).
Audição: perda ___, zumbido ___, plenitude no ouvido ___. Cefaleia/enxaqueca ___, fotofobia ___. Quedas (nº/ano) ___; medo de cair ___.
Medicamentos (anti-hipertensivos, diuréticos, benzodiazepínicos, antidepressivos, anticolinérgicos, aminoglicosídeo/cisplatina no passado): ___. Já tentou: betaistina ___ / flunarizina ___ / cinarizina ___ (resposta ___).
Humor/ansiedade ___. Sono ___. Visão ___ (última avaliação ___). Diabetes (neuropatia) ___.`,
  O: `PA deitado ___ / em pé 1 min ___ / 3 min ___ | FC ___ | Glicemia ___ | Peso ___
Nistagmo espontâneo ___. Dix-Hallpike D ___ / E ___. Teste de rolamento (supine roll) ___. Impulso cefálico ___ (se treinada).
Marcha ___ (velocidade 4 m ___ s; TUG ___ s). Romberg ___ (olhos abertos/fechados). Sensibilidade vibratória/propriocepção dos pés ___. Acuidade visual ___. Otoscopia ___ (cerume, otite). Cognição ___. Rastreio de humor ___.`,
  A: `Tontura crônica no idoso, ___ (multifatorial / hipotensão ortostática / efeito de medicamento / VPPB residual / déficit vestibular periférico / PPPD / migrânea vestibular / déficit sensorial), sem sinal de causa central. Risco de queda ___.`,
  P: `- Primeiro: confirmar que não é aguda nem central (padrão temporal, sinais neurológicos, marcha).
- Procurar o que tem tratamento: VPPB (Dix-Hallpike + rolamento), hipotensão ortostática, medicamentos, visão, neuropatia dos pés, audição, humor.
- Exames que mudam a conduta (se não feitos): glicemia, hemograma, creatinina, sódio, TSH, B12; ECG se palpitação ou pré-síncope.
- Parar o ciclo de antivertiginosos: sem benefício demonstrado nesta situação e com risco no idoso.
- Reabilitação vestibular / exercícios é a intervenção com melhor respaldo para tontura crônica por déficit vestibular.
- Teste vestibular e audiometria só quando a resposta vai mudar a conduta (critérios no guia).`,
  orient: `Tontura que dura meses costuma ter mais de uma causa ao mesmo tempo (ouvido, visão, pés, pressão, remédios, ansiedade). Por isso o tratamento é uma combinação, e não um comprimido.
Os exercícios de equilíbrio e de movimentação da cabeça e dos olhos são a parte mais importante: no começo dão um pouco de tontura, e isso faz parte.
Levante-se devagar. Use calçado firme. Deixe luz acesa à noite no caminho do banheiro.
Não tome por conta própria remédio para labirintite todos os dias: pode piorar o equilíbrio e aumentar o risco de queda.
Volte antes da data marcada se surgir fraqueza, fala enrolada, visão dupla, dor de cabeça súbita e forte ou dificuldade para andar.`,
  alarme: ["Fraqueza, dormência, boca torta, fala enrolada ou visão dupla", "Dor de cabeça súbita e forte ou tontura nova e contínua com dificuldade para andar", "Perda de audição súbita (horas a dias) ou que piora rápido", "Desmaio, palpitação ou dor no peito", "Queda com lesão ou quedas cada vez mais frequentes", "Perda auditiva em um só ouvido com zumbido e tontura (investigar nervo/ângulo pontocerebelar)"],
  encaminhar: "Urgência: sinais do quadro de alarme. Otorrinolaringologia: perda auditiva súbita ou assimétrica, suspeita de Ménière, vertigem recorrente com perda auditiva, suspeita de ototoxicidade. Neurologia: suspeita central persistente, migrânea vestibular de difícil controle. Fisioterapia/eMulti: reabilitação vestibular e treino de equilíbrio (fluxo em Betim: confirmar). Geriatria: polifarmácia e fragilidade.",
  sus: {
    nacional: "Antivertiginosos: RENAME 2024 tem prometazina e metoclopramida (Básico); dimenidrinato não consta [F, ver item 'Tontura']. Betaistina, flunarizina e cinarizina na RENAME: não conferi [NV]. Propranolol e sertralina são do Componente Básico [C]. Reabilitação: fisioterapia/eMulti [C].",
    betim: "REMUME Betim: propranolol 40 mg, sertralina 50 mg, prometazina 25 mg, metoclopramida 10 mg e clonazepam 2 mg constam; betaistina, flunarizina, cinarizina, dimenidrinato e meclizina não aparecem na lista lida [F]. Exames pela regulação (Protocolo de Exames Eletivos 2026): teste vestibular (prova calórica) P0–P2, audiometria tonal + logoaudiometria (item 'EXAMES BÁSICOS DE AUDIÇÃO'), RM do ouvido P1 inclui tontura crônica [F]. Fluxo de reabilitação vestibular/eMulti em Betim: confirmar."
  },
  evid: {
    resumo: "Na tontura crônica do idoso a causa costuma ser múltipla (déficit vestibular leve, visão, propriocepção, pressão ortostática, medicamentos, humor), e a presbivestibulopatia (Bárány 2019) e a PPPD (Bárány 2017) são diagnósticos formais que explicam boa parte dos casos sem VPPB nem causa central. Betaistina tem benefício de baixa certeza em vertigem de causas variadas (Cochrane 2016: RR 1,30; ensaios de até 3 meses; sem dados de quedas) e não superou placebo em Ménière no ensaio BEMED. A reabilitação vestibular reduz a frequência de tontura em adultos com disfunção periférica unilateral (Cochrane 2015: OR 2,67), mas a extrapolação para idosos com tontura crônica multifatorial não foi testada diretamente. Não há ECR mostrando que pedir teste vestibular em todo idoso com tontura crônica melhora desfechos; o teste vale quando esclarece hipofunção vestibular bilateral/unilateral ou ototoxicidade e orienta a reabilitação [I].",
    certeza: "Baixa a moderada (estimada)",
    fontes: ["tontura", "aaohns_vppb", "agrawal2019_pvp", "staab2017_pppd", "murdin2016_betaistina", "adrion2016_bemed", "mcdonnell2015_rv", "betim_exames2026_vest", "wfg2022", "beers2023", "ho_consenso", "remume"]
  },
  mudancas: ["Item novo (v81, 05/11/2026): tontura crônica no idoso, com 'por que não' para betaistina/flunarizina/cinarizina e critérios de teste vestibular, audiometria e RM de ouvido segundo o Protocolo de Exames de Betim 2026."],
  nv: [
    "Doses e tempos dos exercícios vestibulares (Brandt-Daroff, adaptação, habituação): ficam em orientação do fisioterapeuta; não conferi protocolo.",
    "Dose de propranolol (migrânea vestibular) e de sertralina (PPPD) no idoso: sertralina para PPPD é uso fora da bula; conferir bula e dose antes de prescrever.",
    "Risco de parkinsonismo e depressão com flunarizina/cinarizina no idoso: conhecimento consolidado [C], bula ANVISA não aberta.",
    "Betaistina, flunarizina e cinarizina na RENAME 2024: não conferi.",
    "Quem pode solicitar teste vestibular em Betim: o trecho lido do protocolo não traz os solicitantes; confirmar com a regulação.",
    "Fluxo de reabilitação vestibular/eMulti e de otorrino em Betim: confirmar com a coordenação da APS."
  ],
  guia: {
    resumo: "Antes de chamar de 'tontura inespecífica', procure o que tem tratamento: **VPPB residual** (Dix-Hallpike + rolamento), **hipotensão ortostática**, **medicamentos**, **visão, pés e audição**, **ansiedade/depressão**. O resto costuma ser **déficit vestibular leve do envelhecimento** ou **PPPD**, e o que mais ajuda é **reabilitação vestibular**, não antivertiginoso. **Teste vestibular e audiometria**: só quando o resultado muda a conduta.",
    calcs: ["ho"],
    secoes: [
      {t: "1. Confirmar que é crônica e sem alarme", b: [
        {fluxo: [
          {t: "Tontura há semanas/meses"},
          {t: "Déficit neurológico novo, cefaleia súbita, perda auditiva súbita, síncope, dificuldade nova para andar?", ramos: [
            {r: "Sim", n: [{t: "Urgência / reavaliar como tontura aguda (item 'Tontura')", k: "stop"}]},
            {r: "Não", n: [{t: "Procurar causas tratáveis (seção 2)"}]}]}
        ], nota: "HINTS não se aplica à tontura crônica: só à síndrome vestibular aguda contínua com nistagmo, por examinador treinado (GRACE-3) [C]. HINTS 'negativo' em tontura crônica não exclui nada."},
        {ref: ["tontura"]}]},
      {t: "2. Causas tratáveis (checar todas)", b: [
        {calc: "ho"},
        {tab: {h: ["Causa", "Como achar", "O que fazer"], r: [
          ["VPPB residual ou recorrente", "Dix-Hallpike e rolamento (supine roll) dos dois lados; subdiagnosticado no idoso [C]", "Epley (canal posterior) ou manobra do canal lateral; ver 'Tontura' [F: aaohns_vppb]"],
          ["Hipotensão ortostática", "PA deitado e em pé 1 e 3 min; queda ≥ 20/10 mmHg [F: ho_consenso]", "Rever anti-hipertensivos/diuréticos, hidratação, levantar em etapas"],
          ["Medicamentos", "Benzodiazepínicos, anticolinérgicos, antidepressivos sedativos, anti-hipertensivos, sulfonilureia [C]; aminoglicosídeo/cisplatina no passado [C]", "Reduzir ou retirar; ver Beers 2023 e 'Quedas'"],
          ["Visão, pés e propriocepção", "Acuidade, catarata, lentes multifocais; neuropatia (diabetes, B12); calçado [C]", "Corrigir; mais de um déficit sensorial piora o equilíbrio"],
          ["Humor, ansiedade, sono", "Rastreio de depressão e ansiedade [C]", "Tratar; ansiedade pode desencadear ou perpetuar PPPD [F: staab2017_pppd]"],
          ["Metabólico/cardíaco", "Glicemia, hemograma, creatinina, sódio, TSH, B12; ECG se palpitação ou pré-síncope [I]", "Só pedir o que mudaria a conduta"]]}},
        {ref: ["ho_consenso", "aaohns_vppb", "beers2023", "wfg2022"]}]},
      {t: "3. Diagnósticos de síndrome crônica", b: [
        {tab: {h: ["Síndrome", "Quadro", "Observação"], r: [
          ["Presbivestibulopatia", "Instabilidade, marcha alterada e/ou quedas recorrentes com déficit vestibular bilateral leve; só se confirma com VOR reduzido dos dois lados (vHIT, cadeira rotatória ou prova calórica); coexiste com déficit de visão, propriocepção e função cerebelar/extrapiramidal [F: agrawal2019_pvp]", "Diagnóstico de laboratório: a prova calórica entra aqui (critério: soma das velocidades máximas de fase lenta entre 6 e 25°/s) [F]"],
          ["PPPD", "Tontura, instabilidade ou vertigem não rotatória na maioria dos dias por ≥ 3 meses; piora em pé, com movimento e com estímulos visuais complexos (supermercado, telas); pode surgir após doença vestibular, outra doença ou sofrimento psíquico [F: staab2017_pppd]", "Transtorno funcional, não estrutural nem psiquiátrico; o diagnóstico é clínico"],
          ["Migrânea vestibular", "Episódios de minutos a dias com história de enxaqueca, fotofobia ou aura [C]", "Profilaxia como a da enxaqueca; propranolol consta na REMUME [F]; dose no idoso [NV]"],
          ["Ménière", "Crises de vertigem com perda auditiva flutuante, zumbido e plenitude [C]", "Otorrino; audiometria é obrigatória no diagnóstico [C]"]]}},
        {perola: {t: "Tontura crônica no idoso quase nunca é 'labirintite'", x: "A palavra 'labirintite' sugere infecção do ouvido interno, que é rara e aguda. A tontura crônica do idoso é, na maioria das vezes, uma soma de pequenos déficits (vestibular, visual, proprioceptivo, pressórico, medicamentoso, emocional). Explicar isso ao paciente já muda a expectativa de 'um remédio que cura'.", d: "menos antivertiginoso e mais reabilitação.", l: "I"}},
        {ref: ["agrawal2019_pvp", "staab2017_pppd"]}]},
      {t: "4. Antivertiginosos: por que não", b: [
        {tab: {h: ["Fármaco", "O que se sabe", "No SUS/Betim"], r: [
          ["Betaistina", "Cochrane 2016 (vertigem de causas variadas): melhora global RR 1,30 (IC95% 1,05–1,60), alta heterogeneidade, certeza baixa, ensaios ≤ 3 meses, sem dados de quedas [F]. BEMED (Ménière, 9 meses): sem diferença em relação ao placebo [F]. Extrapolação: não estudado diretamente em idosos com tontura crônica.", "Não consta na REMUME lida [F]; RENAME [NV]"],
          ["Flunarizina, cinarizina", "Podem causar sonolência, parkinsonismo e depressão, sobretudo em idosos [C]; não localizei ECR que sustente benefício na tontura crônica do idoso. Bula [NV].", "Não constam na REMUME lida [F]; RENAME [NV]"],
          ["Dimenidrinato, meclizina, prometazina", "Sedativos vestibulares: aliviam enjoo em crise aguda, mas, usados por semanas, atrasam a compensação vestibular e aumentam quedas [C]", "Prometazina 25 mg na REMUME [F]; só em crise, poucos dias"],
          ["Benzodiazepínicos", "Mesmo problema, mais risco de queda, quebra de quadril e declínio cognitivo no idoso [C; ver Beers 2023]", "Clonazepam na REMUME [F]; evitar para tontura"]]}},
        {perola: {t: "Falhou com betaistina, flunarizina e cinarizina: o que isso diz", x: "Pouca resposta a esses fármacos é o esperado: o benefício deles é pequeno ou incerto e a tontura crônica do idoso raramente é uma causa só. Não é razão para trocar de antivertiginoso. É razão para rever a lista de causas tratáveis e iniciar reabilitação.", d: "evita a troca de comprimido a cada consulta.", l: "I"}},
        {ref: ["murdin2016_betaistina", "adrion2016_bemed", "beers2023", "remume"]}]},
      {t: "5. Tratar: reabilitação, medicamentos dirigidos, quedas", b: [
        {ol: [
          "Reabilitação vestibular: exercícios de estabilização do olhar, habituação e treino de equilíbrio, de preferência orientados por fisioterapeuta (eMulti) e continuados em casa por semanas. Cochrane 2015: menos tontura (OR 2,67; IC95% 1,85–3,86) em adultos com disfunção vestibular periférica unilateral [F]; Extrapolação: não estudado diretamente em idosos com tontura crônica multifatorial. Sem fisioterapia disponível, orientar exercícios de equilíbrio e de marcha como em 'Quedas' [C].",
          "Quedas: aplicar a avaliação multifatorial do item 'Prevenção de quedas' (marcha, medicamentos, visão, pés, casa) [F: wfg2022].",
          "Migrânea vestibular provável: profilaxia da enxaqueca (propranolol 40 mg consta na REMUME [F]); contraindicações no idoso (bradicardia, asma, hipotensão) e dose [NV].",
          "PPPD provável: educação do paciente + reabilitação vestibular; um ISRS (sertralina 50 mg consta na REMUME [F]) é opção quando a ansiedade/depressão coexiste, uso fora da bula para PPPD e com risco de hiponatremia e queda no idoso; dose [NV].",
          "Reavaliar em 4 a 6 semanas: a tontura mudou? as quedas? Se piora ou sinal novo, rever a causa."]},
        {ref: ["mcdonnell2015_rv", "wfg2022", "staab2017_pppd"]}]},
      {t: "6. Quando pedir teste vestibular, audiometria e RM de ouvido", b: [
        {perola: {t: "Peça o exame quando a resposta mudar o que você faz", x: "Não há ECR mostrando que o teste vestibular em todo idoso com tontura crônica melhora desfechos [I]. Ele é útil para confirmar hipofunção vestibular (bilateral ou unilateral), identificar ototoxicidade e orientar a reabilitação. Se o plano já é 'tratar causas e fazer exercícios', o resultado raramente muda a conduta.", d: "menos exames de baixo rendimento e fila mais curta para quem precisa.", l: "I"}},
        {tab: {h: ["Exame (SIA)", "Pedir quando [I]", "Prioridade em Betim 2026 [F]"], r: [
          ["Teste vestibular – prova calórica/ENG (02.11.07.035-1)", "Tontura crônica com instabilidade/oscilopsia e suspeita de hipofunção vestibular (piora no escuro ou ao caminhar, quedas) que mudaria a reabilitação; dúvida persistente entre central e periférico; exposição a ototóxico no passado; migrânea vestibular em investigação; trauma craniano", "P0: trauma, ototóxicos, infecção, vertigem incapacitante diária com dúvida central × periférica. P1: enxaqueca vestibular, diagnóstico diferencial central × periférico. P2: 'diagnóstico de vertigem e tontura' e distúrbios do equilíbrio. Pré-requisito: história, medicamentos e exames auditivos/vestibulares prévios 'se disponíveis'. Solicitantes: não constam no trecho lido [NV]"],
          ["Audiometria tonal (02.11.07.004-1) + logoaudiometria (02.11.07.021-1)", "Queixa de perda auditiva, zumbido ou plenitude; vertigem recorrente com perda (Ménière); suspeita de ototoxicidade; antes de pedir RM de ouvido; também razoável em idoso com quedas/tontura crônica sem queixa auditiva, porque a perda auditiva é frequente e coexiste [I]", "P0: perda súbita ou piora rápida/zumbido intenso e recente. P1: tipo e grau da perda, AASI. P2: perda de longa data, monitorar, zumbido, ototóxicos. Solicitar 'EXAMES BÁSICOS DE AUDIÇÃO' no MV; logoaudiometria só junto com a tonal. Clínico geral pode solicitar"],
          ["RM de ouvido/ângulo pontocerebelar (02.07.01.006-4)", "Perda auditiva assimétrica ou súbita com tontura; zumbido unilateral persistente; vertigem de progressão rápida; tontura crônica que persiste depois da audiometria e do exame neurológico, sem causa clara (decidir com o otorrino quando possível)", "P0: tumor do ângulo pontocerebelar, perda/vertigem de progressão rápida. P1: Ménière, zumbido persistente inexplicável ou tontura crônica, perda neurossensorial. P2: sintomas leves e crônicos já avaliados por exames menos complexos. Clínico geral pode solicitar"]]}},
        {ol: [
          "Perda auditiva súbita (horas a dias) não é para audiometria eletiva: é P0 e deve ir ao otorrino / urgência o quanto antes [C; P0 no protocolo de Betim, F].",
          "Prova calórica avalia só o canal horizontal em baixa frequência; vHIT não consta no trecho lido do protocolo de Betim [NV].",
          "Teste vestibular normal não afasta PPPD nem VPPB; resultado alterado simétrico leve é compatível com presbivestibulopatia [F: agrawal2019_pvp].",
          "Na guia, escrever o diagnóstico clínico, a medicação em uso, as quedas e a pergunta que o exame responde (ex.: 'hipofunção vestibular bilateral? definir reabilitação') [I]."]},
        {ref: ["betim_exames2026_vest", "agrawal2019_pvp"]}]},
      {t: "Ver também", b: [{ir: [["tontura", "Tontura – avaliação inicial"], ["vppb", "VPPB"], ["cr-quedas", "Prevenção de quedas"], ["cr-aga", "Avaliação geriátrica"]]}]}
    ]
  }
});

// Ligações: "Tontura – avaliação inicial" e "Prevenção de quedas" passam a apontar para o item novo
(() => {
  const get = id => { const c = CONDICOES.find(x => x.id === id); if (!c) throw new Error("v81: item ausente " + id); return c; };
  const MUD = "v81 (05/11/2026): ligação com o item novo 'Tontura crônica no idoso'.";
  const liga = (id, pares) => {
    const c = get(id); if (!c.guia) throw new Error("v81: item sem guia: " + id);
    let v = c.guia.secoes.find(s => s.t === "Ver também");
    if (!v) { v = {t: "Ver também", b: [{ir: []}]}; c.guia.secoes.push(v); }
    let b = v.b.find(x => x.ir); if (!b) { b = {ir: []}; v.b.push(b); }
    for (const p of pares) if (!b.ir.some(x => x[0] === p[0])) b.ir.unshift(p);
    c.mudancas = [...(c.mudancas || []), MUD];
  };
  liga("tontura", [["cr-tontura-idoso", "Tontura crônica no idoso"]]);
  liga("cr-quedas", [["cr-tontura-idoso", "Tontura crônica no idoso"]]);

  const t = get("tontura");
  if (!/Tontura crônica no idoso/.test(t.P)) t.P += "\n- Tontura crônica no idoso, sem melhora com betaistina/flunarizina/cinarizina: ver o item 'Tontura crônica no idoso' (causas tratáveis, reabilitação e critérios de teste vestibular/audiometria).";
})();
