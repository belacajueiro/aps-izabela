// ───────────── data40.js – v36: asma – acesso a inaladores (UBS, Farmácia Popular, CEAF, compra), PCDT Asma 2026 e GINA 2026 (14/10/2026)
Object.assign(FONTES, {
  gina2026: {s: "GINA 2026 (Summary Guide)", t: "Global Initiative for Asthma. Summary Guide for Asthma Management and Prevention 2026: Tabela 3 (tratamento inicial; trilha 2 etapa 1 = CI em baixa dose logo após cada SABA, em inaladores combinados ou separados), Tabela 5 (ICS-formoterol como alívio reduz idas à emergência/internação em 65% vs SABA isolado e em 37% vs CI diário + SABA), Tabela 7 (AIR só com budesonida-formoterol 200/6 nas etapas 1–2; beclometasona-formoterol 100/6 apenas em MART nas etapas 3–5 – 'não há estudos de beclometasona-formoterol só como alívio'), Figura 9 (crise na APS: salbutamol 4 jatos ou budesonida-formoterol 2 inalações na crise leve; 4–6 jatos até 3 vezes na moderada; prednisolona 40–50 mg por 5–7 dias; alta com MART etapa 4 ou CI-LABA dose média; retorno em 2–7 dias) (diretriz internacional).", f: "F", url: "https://ginasthma.org/wp-content/uploads/2026/07/GINA-Summary-Guide-2026-WEB-WMS.pdf"},
  bula_fostair: {s: "Bula Fostair (Chiesi)", t: "Bula brasileira de Fostair (dipropionato de beclometasona 100 mcg + fumarato de formoterol 6 mcg, aerossol 120 doses): tratamento regular ou de manutenção e alívio; MART 1 inalação de 12/12 h + inalações extras, máximo 8 por dia; contraindicado para menores de 18 anos; conservar em geladeira até a dispensação e depois até 2 meses em temperatura ambiente (bula, consultada na página da Droga Raia).", f: "F", url: "https://www.drogaraia.com.br/bulas/fostair"}
});

// texto conferido no PCDT integral nesta revisão (atualiza a entrada de data11.js)
FONTES["pcdt_asma2026"] = {s: "PCDT Asma 2026", t: "Ministério da Saúde. PCDT da Asma – Portaria Conjunta SAES/SECTICS nº 43, de 24/03/2026: inclui todos os pacientes com diagnóstico de asma (critérios extras só para imunobiológicos); Quadro 7 (regime 1 preferencial com CI-formoterol; regime 2 com CI + SABA, inclusive 'CI de baixa dose sempre que o SABA for usado' na etapa 1 e 'CI de média dose + SABA' na etapa 3); Quadro 10 (doses de CI; beclometasona isolada de partícula extrafina ainda não disponível no Brasil); Quadro 11 (formoterol + budesonida 6/200: etapas 1–2 1 inalação sob demanda; etapa 3 1 inalação 1–2 vezes/dia + 1 sob demanda; etapas 4–5 2 inalações 2 vezes/dia + 1 sob demanda; máximo 12 inalações/dia); crise: salbutamol 4–10 jatos a cada 20 min na 1ª hora, prednisolona 40–50 mg/dia por 5–7 dias; na alta, iniciar etapa 3 ou 4 e retorno em 2–7 dias; Farmácia Popular: beclometasona 50, 200 e 250 mcg e salbutamol 100 mcg e 5 mg/mL (norma).", f: "F", url: "https://www.gov.br/conitec/pt-br/midias/protocolos/2026/asma-portaria-conjunta-saes-sctie-no-43.pdf/@@display-file/file"};

(function(){
  const get = id => CONDICOES.find(c => c.id === id);
  const rxAr = (titulo, trilha, texto, dose, nota) => ({titulo, trilha, texto, dose, nota});

  // ── Asma – manutenção
  const a = get("cr-asma");
  if (a){
    a.P = "- Revisar técnica inalatória (demonstração e devolução) e adesão.\n- Etapa ___ / trilha ___: ___ (ver Prescrição).\n- Evitar SABA isolado sem corticoide inalado.\n- Plano de ação escrito.\n- Tratar rinite; cessar tabaco; vacinas.\n- Reavaliar em 4–8 semanas após mudança; reduzir etapa após 3 meses controlado.";
    a.rx = [
      rxAr("Etapas 1–2 · budesonida-formoterol só quando precisar (AIR)", "evidencia",
        "USO INALATÓRIO\n1. Formoterol + budesonida 6/200 mcg (pó inalante) ______ 1 inalador\n   Inalar 1 dose quando tiver falta de ar, chiado, aperto no peito ou tosse, e antes de exercício se precisar. Pode repetir; máximo 12 inalações por dia. Não precisa usar salbutamol.",
        "F", "Preferido na GINA 2026 e no PCDT Asma 2026 (Quadro 11: 1 inalação sob demanda nas etapas 1–2, ≥ 12 anos) [F]. Acesso: CEAF (o PCDT inclui todo paciente com asma; confirmar na Farmácia de Minas se a LME é aceita nessas etapas [NV]) ou compra – como é só por demanda, um inalador de 60 doses costuma durar meses. Mais de 12 inalações no dia: procurar atendimento."),
      rxAr("Etapa 1 · REMUME: beclometasona logo após cada salbutamol", "sus",
        "USO INALATÓRIO\n1. Salbutamol 100 mcg/dose aerossol ______ 1 frasco\n   Se falta de ar ou chiado: 2 jatos com espaçador.\n2. Beclometasona 200 mcg/dose aerossol ______ 1 frasco\n   Logo depois de cada uso do salbutamol, fazer 1 jato com espaçador. Enxaguar a boca depois.",
        "NV", "Para sintomas em até 2 dias por semana, sobretudo se a adesão ao corticoide diário for improvável: 'CI em baixa dose sempre que usar o SABA, em inaladores combinados ou separados' (GINA 2026, trilha 2, etapa 1; PCDT 2026, Quadro 7) [F]. As diretrizes não fixam a dose por uso; 1 jato de 200 mcg é dose baixa [I]. Os dois são grátis na Farmácia Popular."),
      rxAr("Etapa 2 · REMUME: beclometasona diária + salbutamol", "sus",
        "USO INALATÓRIO\n1. Beclometasona 200 mcg/dose aerossol ______ 1 frasco\n   Inalar 1 jato de 12/12 horas com espaçador, todos os dias, mesmo sem sintomas; enxaguar a boca depois.\n2. Salbutamol 100 mcg/dose aerossol ______ 1 frasco\n   Inalar 2 a 4 jatos com espaçador se falta de ar, até de 4/4 horas.",
        "NV", "Trilha 2 (GINA 2026 e PCDT 2026): funciona se o corticoide for usado todo dia – CI diário reduz crises graves, internação e morte em relação ao SABA isolado [F]. Mesmo assim, a budesonida-formoterol só quando precisar reduz em 37% as idas à emergência e internações em relação a este esquema (GINA 2026, Tabela 5) [F]. 400 mcg/dia = dose baixa (PCDT 2026, Quadro 10) [F]."),
      rxAr("Etapas 3–4 · MART com budesonida-formoterol (CEAF)", "ambos",
        "USO INALATÓRIO\n1. Formoterol + budesonida 6/200 mcg (pó inalante) ______ 1 inalador\n   Etapa 3: inalar 1 dose de 12/12 horas (ou 1 vez ao dia) e 1 dose extra sempre que tiver sintomas.\n   Etapa 4: inalar 2 doses de 12/12 horas e 1 dose extra sempre que tiver sintomas.\n   Máximo 12 inalações por dia (somando manutenção e extras).",
        "F", "PCDT Asma 2026, Quadro 11 [F]; acesso pelo CEAF com LME. Não associar salbutamol de rotina. Preferido também logo após uma crise (GINA 2026: MART etapa 4) [F]."),
      rxAr("Etapa 3 · MART com beclometasona-formoterol 100/6 (comprar; ≥ 18 anos)", "evidencia",
        "USO INALATÓRIO\n1. Beclometasona 100 mcg + formoterol 6 mcg aerossol ______ 1 frasco\n   Inalar 1 jato de 12/12 horas e 1 jato extra quando tiver sintomas. Máximo 8 jatos por dia.",
        "F", "Alternativa de compra à budesonida-formoterol na MART (GINA 2026, etapas 3–5) [F]. Bula brasileira: ≥ 18 anos e máximo de 8 inalações/dia na MART (a GINA aceita até 12 temporariamente) [F]. Não usar como 'só quando precisar': não há estudos de beclometasona-formoterol nesse uso (GINA 2026) e a bula não prevê [F]. Conservação: geladeira até a dispensação; depois, até 2 meses em temperatura ambiente [F]."),
      rxAr("Etapa 3 · REMUME: beclometasona em dose média + salbutamol", "sus",
        "USO INALATÓRIO\n1. Beclometasona 200 mcg/dose aerossol ______ 1 frasco\n   Inalar 2 jatos de 12/12 horas com espaçador, todos os dias (800 mcg/dia); enxaguar a boca depois.\n2. Salbutamol 100 mcg/dose aerossol ______ 1 frasco\n   Inalar 2 a 4 jatos com espaçador se falta de ar, até de 4/4 horas.",
        "F", "PCDT 2026, Quadro 7 (regime 2, etapa 3): 'CI de média dose (controle) + SABA' quando não há CI-LABA; 800 mcg/dia de beclometasona = dose média (Quadro 10) [F]. Protege menos contra crises que a MART: usar enquanto o CEAF não sai ou se não houver como comprar [I]. O frasco de 200 jatos dura cerca de 50 dias nessa dose.")
    ];
    a.idealsus = {
      ideal: "Trilha 1 (GINA 2026; preferencial no PCDT 2026): budesonida-formoterol só quando precisar nas etapas 1–2 e MART nas etapas 3–4. Beclometasona-formoterol 100/6 serve para MART (etapa 3 em diante), não para alívio isolado.",
      sus: "O PCDT 2026 prevê budesonida-formoterol 6/200 pelo CEAF tanto em AIR (etapas 1–2) quanto em MART; na UBS e grátis na Farmácia Popular há beclometasona (50, 200 e 250 mcg) e salbutamol – trilha 2.",
      ponte: "Etapa 1 sem CEAF nem compra: beclometasona logo após cada salbutamol. Etapa 2: beclometasona diária se houver adesão; se não, budesonida-formoterol só quando precisar (LME ou compra – por demanda, 60 doses duram meses). Etapas 3–4: LME para MART; enquanto não sai, beclometasona em dose média ou compra (budesonida-formoterol ou, se ≥ 18 anos, beclometasona-formoterol)."
    };
    a.sus = {
      nacional: "PCDT Asma 2026 (Portaria Conjunta 43): formoterol + budesonida 6/200 e 12/400 (CEAF) em AIR nas etapas 1–2 e MART nas etapas 3–5; inclui todo paciente com asma (critérios extras só para imunobiológicos). Farmácia Popular (grátis): beclometasona 50, 200 e 250 mcg e salbutamol 100 mcg e 5 mg/mL. RENAME 2024: beclometasona e salbutamol (Básico); budesonida, formoterol, formoterol+budesonida, imunobiológicos (Especializado).",
      betim: "REMUME Betim: beclometasona 50 e 200 mcg aerossol, salbutamol 100 mcg aerossol e 5 mg/mL, ipratrópio, prednisona e prednisolona. Beclometasona-formoterol e budesonida-formoterol: não constam (compra ou CEAF)."
    };
    a.evid = {
      resumo: "Budesonida-formoterol como alívio reduz as idas à emergência e internações em 65% em relação ao SABA isolado e em 37% em relação ao CI diário + SABA, com controle de sintomas semelhante (GINA 2026, a partir de ECR e metanálises) [F]. MART reduz crises graves em relação a regimes com SABA como alívio [F]. Beclometasona-formoterol tem evidência para MART, mas não há estudos dela só como alívio [F]. Técnica inalatória e adesão explicam grande parte da falta de controle [C].",
      certeza: "Alta para budesonida-formoterol como alívio e MART (vários ECR grandes); não há evidência para beclometasona-formoterol só como alívio",
      fontes: ["pcdt_asma2026", "gina2026", "bula_fostair", "cmed_pmc2026", "rename", "remume"]
    };
    a.nv = [
      "Se a Farmácia de Minas (CEAF) aceita LME de budesonida-formoterol para AIR nas etapas 1–2, como prevê o PCDT 2026.",
      "Dose de beclometasona por uso na estratégia 'CI logo após cada SABA' (as diretrizes não fixam)."
    ];
    (a.mudancas = a.mudancas || []).push("Revisão 14/10/2026: PCDT 2026 conferido no texto integral – AIR com budesonida-formoterol nas etapas 1–2 está previsto (Quadro 11); GINA 2026 conferida (beclometasona-formoterol só em MART). Novas prescrições por etapa e tabela de inaladores com marcas e preço-teto CMED.");

    const g = a.guia;
    g.resumo = "Na asma, o que reduz crise grave e morte é **nunca tratar só com SABA**: todo paciente precisa de corticoide inalado. O preferido é **budesonida-formoterol** – só quando precisar nas etapas 1–2 e como manutenção e alívio (MART) nas etapas 3–4 –, previsto no **PCDT 2026 pelo CEAF**. Com a UBS (beclometasona + salbutamol, também grátis na Farmácia Popular) dá para fazer a trilha 2 bem feita. Antes de subir a etapa, confira **técnica inalatória e adesão**.";
    const iEt = g.secoes.findIndex(s => s.t === "Tratamento por etapas");
    const etapas = {t: "Tratamento por etapas", b: [
      {fluxo: [
        {t: "Etapa 1 (sintomas ≤ 2 dias/semana)", ramos: [
          {r: "Trilha 1 (preferida)", n: [{t: "Budesonida-formoterol só quando precisar", k: "ok", s: "CEAF pelo PCDT 2026 ou compra"}]},
          {r: "Trilha 2 (UBS/Farmácia Popular)", n: [{t: "Beclometasona logo após cada salbutamol", s: "bom para quem não usaria corticoide todo dia"}]}]},
        {t: "Etapa 2 (sintomas < 3–5 dias/semana)", ramos: [
          {r: "Trilha 1 (preferida)", n: [{t: "Budesonida-formoterol só quando precisar", k: "ok", s: "mesma prescrição da etapa 1"}]},
          {r: "Trilha 2 (UBS/Farmácia Popular)", n: [{t: "Beclometasona dose baixa diária + salbutamol", s: "exige adesão diária ao corticoide"}]}]},
        {t: "Etapa 3 (sintomas na maioria dos dias ou despertar ≥ 1x/semana)", ramos: [
          {r: "Trilha 1", n: [{t: "MART dose baixa", k: "ok", s: "budesonida-formoterol 6/200 (CEAF) ou beclometasona-formoterol 100/6 (compra, ≥ 18 anos)"}]},
          {r: "Trilha 2", n: [{t: "Beclometasona dose média + salbutamol", k: "warn", s: "REMUME, enquanto não há MART"}]}]},
        {t: "Etapa 4: MART dose média", k: "warn", s: "CEAF; também o preferido logo após uma crise (GINA 2026). Revisar técnica, adesão e comorbidades antes"},
        {t: "Etapa 5: encaminhar", k: "stop", s: "LAMA, fenotipagem, imunobiológicos (CEAF)"}
      ], nota: "GINA 2026 (Tabelas 3 e 7) e PCDT Asma 2026 (Quadros 7 e 11) [F]."},
      {tab: {h: ["Corticoide inalado (≥ 12 anos, mcg/dia)", "Dose baixa", "Média", "Alta"], r: [
        ["Beclometasona aerossol, partícula padrão (REMUME, Farmácia Popular)", "200–500", "> 500–1.000", "> 1.000"],
        ["Beclometasona partícula extrafina (só na combinação com formoterol)", "100–200", "> 200–400", "> 400"],
        ["Budesonida (pó ou aerossol)", "200–400", "> 400–800", "> 800"]]},
        nota: "PCDT Asma 2026, Quadro 10, adaptado da GINA [F]. O PCDT registra que a beclometasona isolada de partícula extrafina ainda não está disponível no Brasil – a da UBS entra na linha de partícula padrão [F]."},
      {perola: {t: "Beclometasona-formoterol na etapa 2? Não é a troca certa",
        x: "Na etapa 2, o ganho vem de trocar o salbutamol por um alívio com corticoide: a evidência é da **budesonida-formoterol** só quando precisar. Para beclometasona-formoterol **não há estudos de uso só como alívio** (GINA 2026), a bula brasileira só prevê manutenção ou MART, é para ≥ 18 anos e o frasco aberto dura 2 meses. Ela entra bem na **etapa 3, como MART**.",
        d: "escolher o inalador certo para a etapa evita gastar com algo sem evidência.", l: "F"}},
      {perola: {t: "Budesonida-formoterol só quando precisar bate o SABA isolado e o CI diário",
        x: "Em ECR (SYGMA 1 e 2, Novel START, PRACTICAL) e metanálises, o alívio com budesonida-formoterol reduziu idas à emergência e internações em 65% vs SABA isolado e em 37% vs CI diário + SABA, com menos corticoide total (GINA 2026) [F].",
        d: "menos crises graves, pronto-socorro e corticoide oral.", l: "F"}},
      {perola: {t: "Fenoterol: evitar",
        x: "O fenoterol esteve associado a excesso de mortalidade por asma em séries históricas (Nova Zelândia, anos 1970–80). Prefira salbutamol ou formoterol [C].",
        d: "segurança.", l: "C"}},
      {ref: ["pcdt_asma2026", "gina2026", "sygma", "rename", "remume"]}
    ]};
    const inal = {t: "Inaladores: acesso, marcas e preço", b: [
      {p: "O que o paciente consegue define a trilha. Primeiro veja o que sai de graça (UBS, Farmácia Popular, CEAF); depois, o que vale a pena comprar."},
      {h: "De graça"},
      {ul: [
        "**Beclometasona aerossol 50, 200 ou 250 mcg/jato** – UBS (50 e 200) e **grátis na Farmácia Popular** (50, 200 e 250). Marcas: genérico, Clenil HFA, Ailuk (200 jatos). Teto 200 mcg: R$ 57,24 (genérico) a R$ 82,57 (Clenil HFA). Sempre com espaçador; enxaguar a boca.",
        "**Salbutamol aerossol 100 mcg/jato** – UBS e **grátis na Farmácia Popular**. Marcas: Aerolin, Aerofrin, Aerodini (200 jatos). Teto R$ 51,72 a R$ 57,74. Nunca sozinho, sem corticoide.",
        "**Budesonida + formoterol 6/200** – **CEAF** com LME: o PCDT 2026 prevê AIR (etapas 1–2) e MART (etapas 3–5)."
      ]},
      {h: "Para comprar"},
      {ul: [
        "**Budesonida + formoterol 6/200, cápsulas de pó – Alenia (60 cápsulas):** teto R$ 121,31; R$ 180,60 com o inalador (≈ R$ 2,02/dose). Na 1ª compra, levar a caixa com inalador. Precisa de boa inspiração.",
        "**Budesonida + formoterol 6/200, pó – Symbicort Turbuhaler (60 doses):** teto R$ 200,58 (≈ R$ 3,34/dose). Precisa de boa inspiração.",
        "**Budesonida + formoterol 6/200, aerossol – Vannair ou Symbicort aerossol (120 jatos):** teto R$ 223,18 (≈ R$ 1,86/jato). Conferir na bula quantos jatos fazem 1 dose [NV].",
        "**Beclometasona + formoterol 100/6, aerossol ou pó – Fostair (120 doses):** teto R$ 215,36 (≈ R$ 1,79/dose). Só MART ou manutenção; ≥ 18 anos; máximo 8 inalações/dia; depois de aberto dura 2 meses."
      ]},
      {p: "Teto = preço máximo ao consumidor (PMC) da lista CMED de 09/10/2026, ICMS de MG; no balcão costuma sair mais barato [F]. O genérico de budesonida-formoterol em cápsulas e o de salbutamol constam da lista sem venda informada em 2025. Número de doses de cada inalador conferido na apresentação registrada na CMED."},
      {ul: [
        "**Quanto custa por mês (teto):** na etapa 1–2 só quando precisar, 2 a 4 inalações por semana gastam cerca de 10–20 doses por mês – 60 cápsulas duram 3 a 6 meses (≈ R$ 20–40/mês de teto). Na MART da etapa 3, 60–90 inalações por mês ficam em ≈ R$ 110–180/mês de teto com qualquer das combinações [I, cálculo a partir do teto CMED].",
        "**Quem não consegue aspirar o pó** (idoso frágil, crise, criança pequena): prefira aerossol com espaçador.",
        "**Trocar de inalador** sempre exige treinar a técnica de novo; evite misturar dispositivos diferentes sem necessidade (GINA 2026) [F].",
        "Os nomes comerciais e o preço de cada um também aparecem em **No balcão**, embaixo de cada prescrição e na Consulta guiada."
      ]},
      {ref: ["pcdt_asma2026", "gina2026", "bula_fostair", "cmed_pmc2026", "fp_elenco2026"]}
    ]};
    if (iEt >= 0) g.secoes.splice(iEt, 1, etapas, inal); else g.secoes.push(etapas, inal);
    const iCom = g.secoes.findIndex(s => s.t === "Comorbidades, redução de etapa e encaminhamento");
    if (iCom >= 0){ const tr = g.secoes[iCom].b.find(x => x.trio); if (tr) tr.trio = {...a.idealsus}; }
    const iTec = g.secoes.findIndex(s => s.t === "Técnica inalatória, plano de ação e crise");
    if (iTec >= 0){ const ul = g.secoes[iTec].b.find(x => x.ul); if (ul) ul.ul = ul.ul.map(x => x.startsWith("**MART:**") ? "**MART:** 1 inalação extra quando tiver sintomas; máximo de 12 inalações/dia de budesonida-formoterol 6/200 (PCDT 2026) ou 8/dia de beclometasona-formoterol 100/6 (bula); se precisar mais que isso no dia, procurar atendimento [F]." : x); }
  }

  // ── Crise de asma (adulto): PCDT 2026 + GINA 2026
  const k = get("asma-crise");
  if (k){
    k.P = "- Salbutamol spray com espaçador conforme gravidade (leve: 4 jatos; moderada: 4–6 jatos até 3 vezes com 20–30 min de intervalo).\n- O₂ se SpO₂ < 92% (alvo 92–95%).\n- Corticoide oral (prednisona 40–50 mg) por 5 a 7 dias na crise moderada.\n- Reavaliação em 1 h: boa resposta → alta com plano escrito; resposta parcial ou ruim → urgência.\n- Na alta: corticoide inalatório de manutenção em etapa 3–4 (não deixar só broncodilatador), reviso técnica inalatória e adesão.\n- Retorno em 2 a 7 dias.";
    k.rx = [
      {titulo: "ADULTO – na unidade",
       texto: "USO INALATÓRIO\n1. Salbutamol 100 mcg/dose aerossol com espaçador\n   Leve: 4 jatos; reavaliar e, se precisar, repetir 1 vez após 30–60 minutos.\n   Moderada: 4 a 6 jatos, até 3 vezes, com 20 a 30 minutos de intervalo.\n   Grave (enquanto aguarda transferência): 6 a 10 jatos a cada 20–30 minutos + ipratrópio 4 jatos junto de cada dose de salbutamol, até 3 vezes.\n\nUSO ORAL\n2. Prednisona 20 mg – 2 comprimidos (40 mg) agora, na crise moderada ou grave (dose de 40 a 50 mg).",
       dose: "F",
       nota: "GINA 2026 (Figura 9, crise na APS) e PCDT Asma 2026 (salbutamol 4–10 jatos a cada 20 min na 1ª hora; prednisolona 40–50 mg) [F]. Na crise leve, a GINA 2026 aceita budesonida-formoterol 200/6, 2 inalações, no lugar do salbutamol [F]. Sem espaçador: nebulização 2,5 mg (moderada) ou 5 mg (grave) [F]."},
      {trilha: "sus", titulo: "ADULTO – alta (SUS Betim)",
       texto: "USO ORAL\n1. Prednisona 20 mg ______ 14 comprimidos\n   Tomar 2 comprimidos (40 mg) pela manhã por 5 a 7 dias (não precisa desmame).\n\nUSO INALATÓRIO\n2. Beclometasona 200 mcg/dose aerossol ______ 1 frasco\n   Fazer 2 jatos de 12/12h com espaçador (800 mcg/dia, dose média), todos os dias. Enxaguar a boca após. Reavaliar a dose no retorno.\n3. Salbutamol 100 mcg/dose aerossol ______ 1 frasco\n   Fazer 2 a 4 jatos com espaçador se falta de ar ou chiado, até de 4/4h.",
       dose: "F",
       nota: "PCDT 2026: na alta, iniciar etapa 3 ou 4; com a REMUME, a opção é beclometasona em dose média + salbutamol (Quadros 7 e 10); o CI pode voltar ao nível anterior após 2–4 semanas, se a crise não veio de mau controle crônico [F]. Salbutamol e beclometasona: REMUME e grátis na Farmácia Popular [F]."},
      {trilha: "evidencia", titulo: "ADULTO – alta (trilha 1: MART etapa 4 com budesonida-formoterol)",
       texto: "USO ORAL\n1. Prednisona 20 mg ______ 14 comprimidos\n   Tomar 2 comprimidos (40 mg) pela manhã por 5 a 7 dias.\n\nUSO INALATÓRIO\n2. Formoterol + budesonida 6/200 mcg (pó inalante) ______ 1 inalador\n   Inalar 2 doses de 12/12 horas e 1 dose extra sempre que tiver falta de ar ou chiado. Máximo 12 inalações por dia.",
       dose: "F",
       nota: "GINA 2026: o tratamento preferido durante e depois da crise é a MART da etapa 4 [F]; dose do PCDT 2026, Quadro 11 [F]. Acesso: CEAF com LME ou compra (ver No balcão). Não associar salbutamol de rotina."}
    ];
    k.idealsus = {
      ideal: "GINA 2026: na crise leve, salbutamol 4 jatos ou budesonida-formoterol 2 inalações; na alta, MART da etapa 4 com budesonida-formoterol, por reduzir novas crises graves.",
      sus: "Na UBS: salbutamol, ipratrópio, beclometasona e prednisona (REMUME; salbutamol e beclometasona também grátis na Farmácia Popular). Budesonida-formoterol pelo CEAF (PCDT 2026).",
      ponte: "Sem MART à mão: alta com beclometasona em dose média + salbutamol e retorno em 2–7 dias; no retorno, abrir LME para budesonida-formoterol ou orientar a compra."
    };
    const gd = k.guia;
    const ag = gd.secoes.find(s => s.t === "Agir agora");
    if (ag){ const fl = ag.b.find(x => x.fluxo); if (fl){
      fl.fluxo = [
        {t: "Dispneia, sibilos, tosse – asma conhecida ou provável"},
        {t: "Sinais de risco de vida: sonolência/confusão, tórax silencioso, cianose, SpO₂ < 92% em ar ambiente?", ramos: [
          {r: "Sim", n: [{t: "192; O₂ (alvo 92–95%); salbutamol 6–10 jatos + ipratrópio; corticoide", k: "stop"}]},
          {r: "Não", n: [{t: "Leve: salbutamol 4 jatos (ou budesonida-formoterol 2 inalações). Moderada: 4–6 jatos até 3 vezes + prednisona 40–50 mg"}]}]},
        {t: "Após 1 hora", ramos: [
          {r: "Melhorou (fala bem, SpO₂ ≥ 94%)", n: [{t: "Alta com corticoide oral 5–7 dias + CI em etapa 3–4 + plano escrito; retorno em 2–7 dias", k: "ok"}]},
          {r: "Parcial/sem melhora", n: [{t: "Continuar e transferir (192)", k: "stop"}]}]}];
      fl.nota = "GINA 2026, Figura 9 (crise na APS) e PCDT Asma 2026 [F]."; }
      const rf = ag.b.find(x => x.ref); if (rf) rf.ref = ["pcdt_asma2026", "gina2026"]; }
    const ds = gd.secoes.find(s => s.t === "Doses: adulto × criança");
    if (ds){ const d = ds.b.find(x => x.doses); if (d){
      d.doses.r = [
        ["Salbutamol 100 mcg (espaçador)", "Leve: 4 jatos (repetir 1 vez se precisar). Moderada: 4–6 jatos até 3 vezes, a cada 20–30 min. Grave: 6–10 jatos a cada 20–30 min (GINA 2026) [F]", "22,5–30 mcg/kg por dose (≈ 1 jato a cada 3–4 kg; máx. 9 jatos) a cada 20 min (PCDT 2023) [F]"],
        ["Budesonida-formoterol 200/6 (crise leve)", "2 inalações, no lugar do salbutamol (GINA 2026) [F]", "–"],
        ["Nebulização (sem espaçador)", "Salbutamol 2,5 mg (moderada) ou 5 mg (grave) [F]", "0,15 mg/kg (máx. 5 mg) (PCDT 2023) [F]"],
        ["Corticoide oral", "Prednisona/prednisolona 40–50 mg/dia por 5–7 dias, sem desmame (PCDT 2026) [F]", "Prednisolona 1–2 mg/kg/dia, máx. 40 mg, por 3–5 dias (PCDT 2026) [F]"],
        ["Ipratrópio (grave)", "4 jatos junto de cada dose de salbutamol, até 3 vezes (GINA 2026) [F]", "Junto às primeiras doses de salbutamol [NV]"],
        ["Alta", "CI em etapa 3–4: MART com budesonida-formoterol ou beclometasona em dose média (800 mcg/dia) + salbutamol [F]", "CI em dose por idade [NV]"]];
      d.doses.nota = "Salbutamol, beclometasona, ipratrópio e prednisona/prednisolona: REMUME; salbutamol e beclometasona também grátis na Farmácia Popular [F]. Coluna da criança: PCDT 2023 onde indicado (dose pediátrica de salbutamol não reconferida no PCDT 2026)."; }
      const rf = ds.b.find(x => x.ref); if (rf) rf.ref = ["pcdt_asma2026", "gina2026", "pcdt_asma2023"]; }
    k.evid = Object.assign({}, k.evid, {fontes: ["gina2026", "pcdt_asma2026", "pcdt_asma2023", "rename", "remume"]});
    k.nv = ["Dose pediátrica de salbutamol na crise: reconferir no PCDT 2026.", "Ipratrópio na criança."];
    (k.mudancas = k.mudancas || []).push("Revisão 14/10/2026: doses da crise e da alta atualizadas para GINA 2026 (Figura 9) e PCDT Asma 2026 (substitui PCDT 2023 no adulto); O₂ alvo 92–95%; alta em etapa 3–4.");
  }
  // ── Crise de asma na criança: teto de prednisolona do PCDT 2026
  const cc = get("asma-crianca");
  if (cc && cc.rx && cc.rx[0]){
    cc.rx[0].texto = cc.rx[0].texto.replace(/\(≥ 40 kg: dose de adulto, 40[–-]60 mg\)/, "(máximo 40 mg/dia – PCDT 2026, 6 a 11 anos)");
    cc.rx[0].nota = (cc.rx[0].nota || "") + " Prednisolona: 1–2 mg/kg/dia, máx. 40 mg, por 3–5 dias (PCDT Asma 2026) [F].";
    (cc.mudancas = cc.mudancas || []).push("Revisão 14/10/2026: teto de prednisolona (40 mg/dia) conforme PCDT Asma 2026.");
  }
})();
