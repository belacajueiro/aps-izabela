// ───────────── data85.js – v72: decisões da usuária (26/10/2026) sobre duas pendências "a decidir".
// 1) Queimadura: alerta e encaminhamento passam a usar os cortes do CAB 28 vol. II, 2.17 [F]; a UBS mantém o manejo do 2º grau
//    superficial pequeno sem critério de gravidade [I], com a divergência explícita.
// 2) PA elevada na gestante: a receita traz o esquema de Pritchard completo do Manual de Gestação de Alto Risco 2022 (Quadro 7) [F]
//    e os critérios de manutenção do manual (diurese ≥ 25 mL/h, reflexo patelar presente, FR ≥ 12) [F].

(() => {
  const get = id => CONDICOES.find(x => x.id === id);
  const MUD = "v72 (26/10/2026): ";

  // 1) Queimadura
  {
    const c = get("queimadura");
    if (c) {
      c.alerta = "Espessura parcial > 20% SCQ no adulto, > 10% na criança ou > 5% abaixo de 2 anos; 3º grau (remoção imediata se > 10% no adulto ou > 2% na criança; qualquer 3º grau vai ao serviço de referência); face, mãos, pés, genitais, períneo ou grandes articulações; circunferencial; elétrica (inclui raio), química ou inalação; trauma associado, doença de base, necessidade social ou suspeita de maus-tratos: referência à urgência/unidade de queimados (CAB 28).";
      c.encaminhar = "Critérios de remoção do CAB 28 (ver alerta) → urgência/centro de queimados. O CAB 28 encaminha todo 2º grau ao pronto-atendimento no 1º atendimento; o app admite manejar na UBS o 2º grau superficial pequeno, sem critério de gravidade, com curativo e retorno em 48 h garantidos [I]. Sem epitelização em 14 dias, infecção ou área funcional → referência.";
      c.P = c.P.replace("- Limpeza com SF/água e sabão neutro;",
        "- 2º grau superficial pequeno, sem critério de gravidade: manejo na UBS com retorno em 48 h [I] (o CAB 28 prefere encaminhar todo 2º grau ao pronto-atendimento no 1º atendimento).\n- Limpeza com SF/água e sabão neutro;");
      (c.mudancas = c.mudancas || []).push(MUD + "alerta e encaminhamento com os cortes do CAB 28 (espessura parcial > 20% adulto, > 10% criança, > 5% < 2 anos), decisão da usuária; manejo do 2º grau pequeno na UBS mantido com a divergência explícita.");
    }
  }

  // 2) PA elevada na gestante – sulfato de magnésio
  {
    const c = get("pa-gestante");
    if (c) {
      const i = (c.rx || []).findIndex(r => /Sulfato de magnésio/.test(r.titulo));
      const rx = {
        trilha: "ambos",
        titulo: "Sulfato de magnésio – Pritchard (ataque completo, MS 2022)",
        texto: "USO INTRAVENOSO E INTRAMUSCULAR – dose de ataque\n1. Sulfato de magnésio 50% – 8 mL (4 g) + 12 mL de água destilada, IV lento em 5 a 10 minutos.\n2. Em seguida: sulfato de magnésio 50% – 10 mL (5 g) IM profundo em cada glúteo (total 10 g IM).\n   Sem acesso venoso: fazer o item 2 e manter a remoção.\n\nMANUTENÇÃO (no serviço de destino; na UBS só se a remoção atrasar além de 4 h)\n3. Sulfato de magnésio 50% – 10 mL (5 g) IM profundo a cada 4 horas, alternando os glúteos.\n   Antes de cada dose: diurese ≥ 25 mL/h, reflexo patelar presente e FR ≥ 12 irpm. Se faltar algum, não aplicar.\n\nANTÍDOTO (intoxicação por magnésio)\n4. Gluconato de cálcio 10% – 10 mL (1 g) IV lento.",
        dose: "F",
        nota: "Manual de Gestação de Alto Risco, MS 2022 (Quadro 7) [F]. Ataque completo = 28 mL de MgSO₄ 50% (3 ampolas de 10 mL). IM: maior risco de abscesso/hematoma; evitar na HELLP com plaquetopenia [F]. Manutenção IM na UBS se a remoção atrasar: inferência do app [I]. REMUME Betim: MgSO₄ 50% (ampola 10 mL) e gluconato de cálcio 10% [F]."
      };
      if (i >= 0) c.rx[i] = rx; else (c.rx = c.rx || []).unshift(rx);
      c.P = c.P.replace("- PA ≥ 160/110 ou sintomas de gravidade: sulfato de magnésio (dose de ataque) + anti-hipertensivo de ação rápida + remoção urgente.\n- Monitorar FR, reflexos e diurese durante o sulfato; ter gluconato de cálcio 10% disponível.",
        "- PA ≥ 160/110 ou sintomas de gravidade: sulfato de magnésio – ataque de Pritchard (4 g IV + 10 g IM; sem acesso venoso, só os 10 g IM) + anti-hipertensivo de ação rápida + remoção urgente.\n- Manter o sulfato só se diurese ≥ 25 mL/h, reflexo patelar presente e FR ≥ 12 irpm; ter gluconato de cálcio 10% disponível.");
      // Nota do guia: a divergência deixa de existir.
      const g = c.guia = JSON.parse(JSON.stringify(c.guia));
      const walk = o => {
        if (Array.isArray(o)) { o.forEach(walk); return; }
        if (o && typeof o === "object") {
          if (typeof o.nota === "string" && /Divergência: a receita do app traz só a parte IM/.test(o.nota))
            o.nota = o.nota.replace(/Divergência: a receita do app traz só a parte IM[^]*$/, "A receita do app segue o Pritchard completo do manual; sem acesso venoso, só a parte IM (10 g) antes da remoção.");
          for (const k in o) walk(o[k]);
        }
      };
      walk(g);
      (c.mudancas = c.mudancas || []).push(MUD + "receita do sulfato de magnésio passa ao Pritchard completo do Manual de Gestação de Alto Risco 2022 (4 g IV + 10 g IM; manutenção 5 g IM 4/4 h com diurese ≥ 25 mL/h, reflexo presente e FR ≥ 12), decisão da usuária.");
    }
  }
})();
