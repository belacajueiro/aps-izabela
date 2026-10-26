// ───────────── data77.js – v64: Guia Clínico – fase 2 (completar os guias antigos), lote 1.
// (1) Alerta do item passa a aparecer no topo ("Agir agora") de todo guia antigo que ainda não tinha – texto já conferido em cada item.
// (2) Urgências de risco alto: tabela de diferenciais e links "Ver também" (anafilaxia, crise de asma adulto e criança, AVC/AIT, bronquiolite,
//     crise convulsiva, dor torácica, hipoglicemia, intoxicação, engasgo, sepse, síncope, agitação, PAC, ITU na gestante).
// Diferenciais: conhecimento consolidado [C] (apresentação e diferenciais podem ser [C] pelo padrão do projeto); condutas já estavam conferidas nos guias.

(() => {
  const get = id => CONDICOES.find(x => x.id === id);
  const MUD = "v64 (26/10/2026): Guia Clínico completado (fase 2) – ";
  const novo = c => (c.mudancas || []).some(m => /Guia Clínico novo/.test(m));

  // (1) Alerta no topo dos guias antigos
  CONDICOES.forEach(c => {
    if (!c.guia || novo(c) || c.guia.urg) return;
    const a = (c.alerta || "").trim();
    if (!a) return;
    c.guia = {...c.guia, urg: a}; // cópia: não propagar o alerta a itens que compartilham o guia
    (c.mudancas = c.mudancas || []).push(MUD + "alerta do item exibido no topo do guia.");
  });

  // (2) Acréscimos por item
  const AUG = (id, o) => {
    const c = get(id); if (!c || !c.guia) return;
    c.guia = {...c.guia, secoes: [...(c.guia.secoes || [])]}; // cópia: alguns itens compartilham o mesmo objeto de guia
    const g = c.guia;
    if (o.dif) g.secoes.splice(Math.min(o.pos ?? 1, g.secoes.length), 0, {t: o.difT || "Diferenciais", b: [o.dif]});
    if (o.secoes) g.secoes.push(...o.secoes);
    if (o.ir) g.secoes.push({t: "Ver também", b: [{ir: o.ir}]});
    if (o.calcs) g.calcs = [...new Set([...(g.calcs || []), ...o.calcs])];
    (c.mudancas = c.mudancas || []).push(MUD + (o.mud || "diferenciais e links relacionados") + ".");
  };
  const T = (rows, nota) => ({tab: {h: ["Hipótese", "Pistas"], r: rows}, nota: nota || "Conhecimento consolidado [C]."});

  AUG("anafilaxia", {
    dif: T([
      ["Síncope vasovagal", "Palidez, bradicardia, sem urticária/broncoespasmo, melhora deitado [C]"],
      ["Crise de asma", "Sibilância sem urticária, hipotensão ou sintomas digestivos [C]"],
      ["Angioedema por IECA ou hereditário", "Edema sem urticária e sem prurido; não responde bem à adrenalina [C]"],
      ["Urticária aguda isolada", "Só pele, sem comprometimento respiratório, hemodinâmico ou digestivo [C]"],
      ["Crise de pânico", "Hiperventilação, parestesias, sem hipotensão nem urticária [C]"],
      ["Choque séptico/cardiogênico", "Febre ou dor torácica, sem gatilho alérgico [C]"]
    ]),
    ir: [["urticaria", "Urticária"], ["pu-reacoes-vacinas", "Reações às vacinas"], ["pele-farmacodermia", "Farmacodermia"], ["urg-abordagem", "Abordagem da urgência"]]
  });
  AUG("asma-crise", {
    dif: T([
      ["Exacerbação de DPOC", "Tabagista > 40 anos, dispneia crônica, escarro [C]"],
      ["IC descompensada ('asma cardíaca')", "Ortopneia, edema, crepitações, cardiopatia [C]"],
      ["TEP", "Dispneia súbita sem sibilância relevante, taquicardia, fatores de risco [C]"],
      ["Anafilaxia", "Sibilância + urticária/hipotensão após gatilho → adrenalina IM [C]"],
      ["Pneumotórax", "Dor súbita, MV abolido unilateral [C]"],
      ["Disfunção de cordas vocais", "Estridor inspiratório, voz alterada, sem resposta a broncodilatador [C]"]
    ]),
    ir: [["cr-asma", "Asma – manutenção"], ["dpoc-exac", "Exacerbação de DPOC"], ["anafilaxia", "Anafilaxia"], ["pac", "Pneumonia"]]
  });
  AUG("asma-crianca", {
    dif: T([
      ["Bronquiolite", "< 2 anos, 1º episódio de sibilância com IVAS – sem corticoide de rotina [C]"],
      ["Pneumonia", "Febre persistente, taquipneia, crepitações focais [C]"],
      ["Corpo estranho aspirado", "Engasgo prévio, sibilo unilateral, início súbito [C]"],
      ["Crupe", "Estridor inspiratório e tosse ladrante, sem sibilância difusa [C]"],
      ["Anafilaxia", "Sibilância + urticária, vômitos ou hipotensão após gatilho [C]"],
      ["Sibilância recorrente do lactente", "Episódios só com viroses, sem atopia – pode não ser asma [C]"]
    ]),
    ir: [["bronquiolite", "Bronquiolite"], ["crupe", "Crupe"], ["ovace", "Engasgo"], ["anafilaxia", "Anafilaxia"]]
  });
  AUG("avc-ait", {
    dif: T([
      ["Hipoglicemia", "Glicemia capilar < 70 – corrige com glicose [C]"],
      ["Crise epiléptica com paralisia de Todd", "Crise testemunhada, déficit que melhora em horas [C]"],
      ["Migrânea com aura", "Sintomas positivos que 'marcham' em minutos, cefaleia, história prévia [C]"],
      ["Paralisia de Bell", "Paralisia facial periférica (testa acometida), sem outros déficits [C]"],
      ["Tumor/hematoma subdural", "Instalação gradual, idoso, anticoagulado, queda prévia [C]"],
      ["Vertigem periférica", "Vertigem sem déficit focal, nistagmo horizontal, HINTS periférico [C]"],
      ["Sepse/delirium no idoso", "Confusão global sem déficit focal, febre [C]"]
    ]),
    ir: [["hipoglicemia", "Hipoglicemia"], ["tontura", "Tontura"], ["cr-pos-avc", "Pós-AVC"], ["cr-fa", "Fibrilação atrial"]]
  });
  AUG("bronquiolite", {
    dif: T([
      ["Asma / sibilância recorrente", "> 12–24 meses, episódios repetidos, atopia, resposta ao broncodilatador [C]"],
      ["Pneumonia", "Febre alta persistente, crepitações focais, toxemia [C]"],
      ["Coqueluche", "Tosse paroxística, apneia, cianose, pouca febre, contato com tossidor [C]"],
      ["Cardiopatia congênita / IC", "Sopro, hepatomegalia, cansaço às mamadas, baixo ganho [C]"],
      ["Corpo estranho", "Início súbito após engasgo, sibilo unilateral [C]"],
      ["Refluxo com aspiração", "Tosse/engasgo ligados às mamadas [C]"]
    ]),
    ir: [["asma-crianca", "Sibilância na criança"], ["coqueluche", "Coqueluche"], ["pu-nariz", "Nariz entupido"], ["pu-vacinas", "Vacinas e nirsevimabe"]]
  });
  AUG("convulsao-ativa", {
    dif: T([
      ["Síncope convulsiva", "Abalos breves (< 30 s) após pródromo vasovagal, recuperação rápida, sem confusão prolongada [C]"],
      ["Crise não epiléptica psicogênica", "Olhos fechados com resistência, movimentos assíncronos, longa duração sem cianose [C]"],
      ["Hipoglicemia", "Glicemia capilar baixa – corrigir antes de tudo [C]"],
      ["Crise febril", "6 meses–5 anos, febre, crise generalizada breve [C]"],
      ["Meningite/encefalite", "Febre, rigidez de nuca, rebaixamento, petéquias [C]"],
      ["Eclâmpsia", "Gestante > 20 semanas ou puérpera com PA elevada → sulfato de magnésio [C]"],
      ["Abstinência alcoólica", "Etilista, 6–48 h sem beber, tremor [C]"]
    ]),
    ir: [["crise-convulsiva", "1ª crise / epilepsia"], ["hipoglicemia", "Hipoglicemia"], ["pa-gestante", "Eclâmpsia"], ["abstinencia-alcool", "Abstinência alcoólica"], ["sincope", "Síncope"]]
  });
  AUG("dor-toracica", {
    dif: T([
      ["Síndrome coronariana aguda", "Aperto/peso, esforço ou repouso, irradiação, sudorese, fatores de risco [C]"],
      ["Dissecção de aorta", "Dor lancinante para o dorso, assimetria de pulsos/PA, HAS [C]"],
      ["TEP", "Dispneia, taquicardia, dor pleurítica, hemoptise, fatores de risco [C]"],
      ["Pneumotórax", "Dor súbita pleurítica, MV abolido, jovem longilíneo ou DPOC [C]"],
      ["Pericardite", "Dor que piora deitado e melhora inclinado para frente, atrito [C]"],
      ["DRGE/espasmo esofágico", "Queimação, relação com refeições, melhora com antiácido – só após afastar SCA [C]"],
      ["Musculoesquelética", "Reprodutível à palpação, ligada a movimento (Marburg) [C]"],
      ["Herpes-zóster", "Dor em faixa unilateral antes das vesículas [C]"],
      ["Ansiedade/pânico", "Diagnóstico de exclusão, com hiperventilação [C]"]
    ]),
    ir: [["cr-dac", "Doença coronariana"], ["panico", "Crise de ansiedade"], ["drge", "DRGE"], ["zoster", "Herpes-zóster"]]
  });
  AUG("hipoglicemia", {
    dif: T([
      ["AVC", "Déficit focal persiste com glicemia normal [C]"],
      ["Intoxicação alcoólica", "Hálito etílico – mas álcool também causa hipoglicemia: medir sempre [C]"],
      ["Crise epiléptica", "Pós-ictal, glicemia normal [C]"],
      ["Sepse/insuficiência adrenal", "Hipoglicemia recorrente sem causa medicamentosa, hipotensão [C]"],
      ["Ataque de pânico", "Tremor, sudorese e palpitação com glicemia normal [C]"]
    ], "Conhecimento consolidado [C]. Causas a revisar após o episódio: sulfonilureia/insulina, refeição perdida, álcool, exercício, DRC (menor depuração), perda de peso, gastroparesia [C]."),
    ir: [["cr-dm2-insulina", "Insulinoterapia"], ["cr-dm2", "DM2"], ["avc-ait", "Suspeita de AVC"], ["convulsao-ativa", "Crise convulsiva"]]
  });
  AUG("intoxicacao", {
    dif: T([
      ["Hipoglicemia", "Rebaixamento ou agitação – glicemia capilar sempre [C]"],
      ["TCE", "Queda, sinais de trauma, anisocoria [C]"],
      ["AVC/hemorragia", "Déficit focal, cefaleia súbita [C]"],
      ["Sepse/meningite", "Febre, rigidez de nuca, petéquias [C]"],
      ["Distúrbio metabólico", "Uremia, hiponatremia, encefalopatia hepática [C]"]
    ], "Conhecimento consolidado [C]. Síndromes: opioide (miose, bradipneia), anticolinérgica (midríase, pele seca, retenção), colinérgica/organofosforado (miose, sialorreia, broncorreia), simpaticomimética (midríase, taquicardia, sudorese) [C]."),
    ir: [["risco-suicida", "Ideação suicida"], ["escorpiao", "Acidente escorpiônico"], ["acidente-ofidico", "Acidente ofídico"], ["pu-acidentes", "Prevenção de acidentes"]]
  });
  AUG("ovace", {
    dif: T([
      ["Anafilaxia/angioedema", "Edema de lábios/língua, urticária, exposição a alérgeno [C]"],
      ["Crupe/epiglotite", "Febre, estridor, voz abafada, sialorreia – sem engasgo testemunhado [C]"],
      ["Crise de asma", "Sibilância difusa, sem início súbito durante a refeição [C]"]
    ], "Conhecimento consolidado [C]. Engasgo resolvido com tosse persistente, sibilo unilateral ou pneumonia de repetição: suspeitar de corpo estranho retido → avaliação (RX/broncoscopia) [C]."),
    ir: [["pcr", "Parada cardiorrespiratória"], ["pu-acidentes", "Prevenção de acidentes"], ["asma-crianca", "Sibilância na criança"]]
  });
  AUG("sepse", {
    dif: T([
      ["Choque cardiogênico", "Dor torácica, congestão, ECG alterado [C]"],
      ["Choque hipovolêmico", "Diarreia/vômitos, sangramento, sem febre [C]"],
      ["Anafilaxia", "Urticária, broncoespasmo após gatilho [C]"],
      ["Dengue com sinais de alarme / grave", "Febre em defervescência, dor abdominal, sangramento, hemoconcentração [C]"],
      ["Insuficiência adrenal", "Uso crônico de corticoide suspenso, hipotensão refratária [C]"],
      ["Intoxicação", "Exposição conhecida, síndrome tóxica [C]"]
    ]),
    ir: [["febre-adulto", "Febre sem foco"], ["febre-crianca", "Febre na criança"], ["dengue-a", "Dengue"], ["pielonefrite", "Pielonefrite"], ["pac", "Pneumonia"]]
  });
  AUG("sincope", {
    dif: T([
      ["Crise epiléptica", "Confusão pós-ictal prolongada, mordedura lateral da língua, movimentos > 30 s [C]"],
      ["Hipoglicemia", "Recuperação só após glicose [C]"],
      ["AIT vertebrobasilar", "Sintomas neurológicos associados (diplopia, ataxia) – raramente causa perda de consciência isolada [C]"],
      ["Queda mecânica", "Sem perda de consciência real [C]"],
      ["Crise psicogênica", "Olhos fechados, episódios longos, sem lesão [C]"]
    ], "Conhecimento consolidado [C]. Causas de síncope: reflexa (vasovagal, situacional), ortostática (fármacos, volume, disautonomia) e cardíaca (arritmia, obstrução – estenose aórtica, CMH) [C]."),
    calcs: ["ho"],
    ir: [["palpitacoes", "Palpitações"], ["convulsao-ativa", "Crise convulsiva"], ["queda-idoso", "Queda no idoso"], ["cr-valvopatias", "Valvopatias"]]
  });
  AUG("agitacao", {
    dif: T([
      ["Delirium", "Início agudo, flutuação, desatenção, idoso, infecção/fármaco – tratar a causa [C]"],
      ["Intoxicação/abstinência", "Álcool, cocaína, BZD; tremor, midríase, sudorese [C]"],
      ["Hipoglicemia/hipóxia", "Glicemia capilar e oximetria antes de sedar [C]"],
      ["TCE/AVC", "Trauma, déficit focal, cefaleia [C]"],
      ["Psicose/mania", "Delírios, alucinações, história psiquiátrica [C]"]
    ]),
    calcs: ["sc:q4at"],
    ir: [["delirium", "Delirium"], ["abstinencia-alcool", "Abstinência alcoólica"], ["cr-esquizofrenia", "Esquizofrenia"], ["cr-bipolar", "Transtorno bipolar"]]
  });
  AUG("pac", {
    dif: T([
      ["Bronquite aguda", "Sem taquipneia, taquicardia, febre alta ou ausculta focal [C]"],
      ["Tuberculose", "Tosse ≥ 3 semanas, perda de peso, sudorese noturna, sem resposta ao antibiótico [C]"],
      ["IC descompensada", "Crepitações bibasais, edema, ortopneia [C]"],
      ["TEP", "Dor pleurítica, dispneia desproporcional, hemoptise [C]"],
      ["COVID-19/influenza", "Quadro viral, sazonalidade; teste se muda conduta [C]"],
      ["Câncer de pulmão", "Tabagista, pneumonia no mesmo lobo, sem resolução radiológica em 6–8 semanas [C]"]
    ]),
    ir: [["bronquite", "Bronquite aguda"], ["tb-sr", "Investigação de TB"], ["covid", "COVID-19"], ["sepse", "Sepse"]]
  });
  AUG("itu-gestante", {
    dif: T([
      ["Pielonefrite", "Febre, dor lombar, Giordano, vômitos → maternidade [C]"],
      ["Vulvovaginite", "Disúria externa, corrimento, prurido [C]"],
      ["Trabalho de parto prematuro", "Contrações, dor lombar rítmica [C]"],
      ["Litíase urinária", "Cólica intensa, hematúria [C]"],
      ["Descolamento/corioamnionite", "Dor abdominal, febre, sangramento ou líquido alterado [C]"]
    ]),
    ir: [["pielonefrite", "Pielonefrite"], ["candidiase", "Candidíase"], ["pn-risco", "Estratificação de risco"]]
  });
})();
