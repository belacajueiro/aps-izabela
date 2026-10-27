// ───────────── data84.js – v71: resolução de pendências abertas.
// 1) Lista de notificação: itens que ainda citavam a Portaria 6.734/2025 passam a citar a 11.211/2026; periodicidades conferidas no
//    Anexo da 11.211 (febre amarela e febre maculosa imediatas a MS/SES/SMS; Chagas aguda imediata a SES/SMS e crônica semanal;
//    esporotricose, LT e LV semanais) [F].
// 2) Caxumba: art. 2º (imediata) × Anexo (semanal); o MS respondeu, via Lei de Acesso à Informação (relatado pela Estratégia MED em ago/2026),
//    que vale o Anexo (semanal) e que um novo ato corrigirá a portaria – nenhum ato publicado localizado em 26/10/2026.
// 3) tb-sr: texto do resumo de evidência e da orientação ao paciente alinhado ao Manual de TB 2019 (≥ 2 semanas em quem procura o serviço).
// 4) pu-constipacao: doses pela ESPGHAN/NASPGHAN 2026 (lactulose por faixa etária; PEG 0,4–0,8 g/kg/dia).

(() => {
  const get = id => CONDICOES.find(x => x.id === id);
  const MUD = "v71 (26/10/2026): ";
  let falhas = [];
  // Substituição profunda em todos os campos de texto do item, exceto o histórico de mudanças.
  const deep = (o, f) => {
    if (typeof o === "string") return f(o);
    if (Array.isArray(o)) return o.map(x => deep(x, f));
    if (o && typeof o === "object") { const r = {}; for (const k in o) r[k] = deep(o[k], f); return r; }
    return o;
  };
  const REP = (id, pares, mud) => {
    const c = get(id); if (!c) { falhas.push(id + ": item ausente"); return; }
    for (const [a, b] of pares) {
      let achou = false;
      for (const k of Object.keys(c)) {
        if (k === "mudancas" || k === "id") continue;
        const antes = JSON.stringify(c[k]);
        c[k] = deep(c[k], s => s.split(a).join(b));
        if (JSON.stringify(c[k]) !== antes) achou = true;
      }
      if (!achou) falhas.push(id + ": não achou «" + a.slice(0, 50) + "»");
    }
    if (mud) (c.mudancas = c.mudancas || []).push(MUD + mud);
  };
  // Troca a chave de fonte nos arrays (evid.fontes e blocos ref), sem duplicar.
  const FONTE = (id, de, para) => {
    const c = get(id); if (!c) return;
    const fix = arr => { const r = arr.map(x => x === de ? para : x); return [...new Set(r)]; };
    if (c.evid && c.evid.fontes) c.evid.fontes = fix(c.evid.fontes);
    const walk = o => {
      if (Array.isArray(o)) { o.forEach(walk); return; }
      if (o && typeof o === "object") { for (const k in o) { if (k === "ref" && Array.isArray(o[k])) o[k] = fix(o[k]); else walk(o[k]); } }
    };
    if (c.guia) { c.guia = JSON.parse(JSON.stringify(c.guia)); walk(c.guia); }
  };

  // 1) Portaria 6.734/2025 → 11.211/2026
  const P = "Portaria GM/MS 11.211/2026";
  const NOTIF = [
    ["febre-amarela", [["(Portaria 6.734/2025)", "(" + P + ")"]]],
    ["febre-maculosa", [["(Lista Nacional – Portaria GM/MS nº 6.734/2025)", "(Lista Nacional – " + P + ")"], ["Portaria GM/MS 6.734/2025 [F]", P + " [F]"]]],
    ["in-chagas", [["(Portaria 6.734/2025; GVS 2024)", "(" + P + "; GVS 2024)"]]],
    ["in-esporotricose", [["(Portaria 6.734/2025; NT 20/2025)", "(" + P + "; NT 20/2025)"], ["superado pela Portaria 6.734/2025 [F]", "superado pela Portaria 6.734/2025, que incluiu a esporotricose humana na lista, mantida na " + P + " [F]"]]],
    ["in-lt", [["(Portaria 6.734/2025)", "(" + P + ")"]]],
    ["in-lv", [["semanal (Portaria 6.734/2025)", "semanal (" + P + ")"]]]
  ];
  for (const [id, pares] of NOTIF) {
    REP(id, pares, "notificação passa a citar a Portaria GM/MS 11.211/2026 (lista vigente); periodicidade conferida no Anexo.");
    FONTE(id, "port6734", "port11211");
  }
  FONTE("risco-suicida", "port6734", "port11211");

  // 2) Caxumba
  const CAX = "caxumba entrou na lista nacional em 2026. A Portaria GM/MS 11.211/2026 se contradiz: o art. 2º diz notificação imediata (MS, SES, SMS) e o Anexo marca semanal; o MS informou, em resposta pela Lei de Acesso à Informação (ago/2026), que vale o Anexo – semanal – e que publicará ato corrigindo (não localizado em 26/10/2026) [F para a portaria; esclarecimento relatado por fonte secundária]. Notificar; seguir a orientação da vigilância de Betim";
  REP("escroto-agudo", [["caxumba entrou na lista nacional em 2026 – notificação imediata (Portaria GM/MS 11.211/2026, art. 2º) [F]", CAX]],
    "caxumba: divergência entre art. 2º (imediata) e Anexo (semanal) da Portaria 11.211/2026 e esclarecimento do MS (semanal).");
  if (FONTES.port11211) FONTES.port11211.t = FONTES.port11211.t.replace("inclui caxumba (notificação imediata, art. 2º)",
    "inclui caxumba (art. 2º: imediata; Anexo: semanal – o MS informou em ago/2026, via LAI, que vale o Anexo e que corrigirá o texto)");
  FONTES.estrategia_caxumba2026 = {
    s: "Estratégia MED 2026 – MS confirma erro na portaria da caxumba",
    t: "Estratégia MED. Ministério da Saúde confirma erro em portaria sobre notificação de caxumba. Notícia, ago/2026: resposta do MS (Fala.BR) – inconsistência entre o art. 2º, I (imediata) e o Anexo I (semanal) da Portaria GM/MS 11.211/2026; correto: notificação semanal; novo ato normativo previsto, sem data (fonte secundária; conferida em 26/10/2026).",
    f: "F", url: "https://med.estrategia.com/portal/noticias/ministerio-da-saude-reconhece-erro-em-portaria-sobre-notificacao-de-caxumba/"
  };
  { const c = get("escroto-agudo"); if (c && c.evid && c.evid.fontes && !c.evid.fontes.includes("estrategia_caxumba2026")) c.evid.fontes.push("estrategia_caxumba2026"); }

  // 3) Tuberculose – sintomático respiratório
  REP("tb-sr", [
    ["O MS define sintomático respiratório na população geral como tosse ≥ 3 semanas", "O Manual de TB do MS (2019) considera sintomático respiratório quem procura o serviço com tosse ≥ 2 semanas (≥ 3 semanas na busca ativa no território; qualquer duração em populações vulneráveis, como PVHIV, pessoas em situação de rua ou privadas de liberdade, indígenas e contatos)"],
    ["- Tosse por 3 semanas ou mais precisa do exame de escarro para descartar tuberculose.", "- Tosse por 2 semanas ou mais precisa do exame de escarro para descartar tuberculose (em algumas pessoas, como quem vive com HIV ou em situação de rua, qualquer tempo de tosse)."]
  ], "resumo de evidência e orientação ao paciente alinhados ao Manual de TB 2019 (tosse ≥ 2 semanas em quem procura o serviço).");
  { const c = get("tb-sr"); if (c) c.A = "Sintomático respiratório (tosse ≥ 2 semanas; qualquer duração se população vulnerável) – investigação de tuberculose pulmonar."; }

  // 4) Constipação no lactente e na criança – ESPGHAN/NASPGHAN 2026
  REP("pu-constipacao", [
    ["Fecaloma: desimpactação oral com PEG 1–1,5 g/kg/dia por 3–6 dias (até cerca de 100 g/dia [NV]) [C]",
     "Fecaloma: desimpactação oral com PEG 1–1,5 g/kg/dia por 3–6 dias (ESPGHAN/NASPGHAN 2026) [F]; teto de cerca de 100 g/dia [NV]"],
    ["Manutenção: PEG 0,4 g/kg/dia (faixa 0,2–0,8; até cerca de 17 g/dia [NV]) ou lactulose 1–2 g/kg/dia = 1,5–3 mL/kg/dia do xarope 667 mg/mL (preferida no lactente e disponível na REMUME), sem passar da dose adulta da bula, ajustando até fezes pastosas diárias [C]",
     "Manutenção: PEG 0,4–0,8 g/kg/dia [F] (teto de cerca de 17 g/dia [NV]) ou lactulose – < 7 meses: 350–700 mg/kg/dia (≈ 0,5–1 mL/kg/dia do xarope 667 mg/mL); 7 meses a 18 anos: 0,6–2 g/kg/dia (≈ 0,9–3 mL/kg/dia) [F]. Lactulose é a opção da REMUME e a mais usada no lactente; não passar da dose adulta da bula; ajustar até fezes pastosas diárias. ESPGHAN/NASPGHAN 2026: PEG teve mais sucesso que lactulose (72% × 51%; NNT 5; certeza baixa) [F]"],
    ["Dar ___ mL por dia (1,5 a 3 mL por kg por dia), em 1 ou 2 vezes, ajustando até cocô pastoso todos os dias.",
     "Dar ___ mL por dia, em 1 ou 2 vezes, ajustando até cocô pastoso todos os dias.\n   Menor de 7 meses: 0,5 a 1 mL por kg por dia. De 7 meses em diante: 0,9 a 3 mL por kg por dia."],
    ["ESPGHAN/NASPGHAN 2014: lactulose 1–2 g/kg/dia (667 mg/mL → 1,5–3 mL/kg/dia) [C]; não ultrapassar a dose do adulto da bula; conferir.",
     "ESPGHAN/NASPGHAN 2026 (Tabela 10): lactulose 350–700 mg/kg/dia até 7 meses e 0,6–2 g/kg/dia de 7 meses a 18 anos [F]; conversão para o xarope 667 mg/mL feita pelo app; não ultrapassar a dose do adulto da bula."],
    ["Manutenção: ___ g por dia (0,4 g por kg; faixa 0,2–0,8; até cerca de 17 g por dia)", "Manutenção: ___ g por dia (0,4 a 0,8 g por kg; até cerca de 17 g por dia)"],
    ["1ª linha da ESPGHAN/NASPGHAN 2014 na criança;", "Opção preferencial de manutenção na ESPGHAN/NASPGHAN 2026 (0,4–0,8 g/kg/dia; desimpactação 1–1,5 g/kg/dia por até 6 dias) [F];"],
    ["ESPGHAN/NASPGHAN 2014: PEG é a 1ª linha para desimpactação e manutenção; lactulose é alternativa; manter por pelo menos 2 meses. Roma IV define disquezia e constipação funcional. Detalhes de doses citados de memória: conferir.",
     "ESPGHAN/NASPGHAN 2026 (GRADE, 102 ECR): desimpactação por 3–6 dias; PEG na manutenção com mais sucesso que placebo (NNT 4; certeza moderada) e que lactulose (NNT 5; baixa); lactulose com faixas por idade; óleo mineral não rotineiro. Roma IV define disquezia e constipação funcional. Tetos de dose e duração mínima de 2 meses vêm de fontes anteriores [C]."]
  ], "doses e evidência atualizadas para a ESPGHAN/NASPGHAN 2026 (lactulose por faixa etária; PEG 0,4–0,8 g/kg/dia).");
  {
    const c = get("pu-constipacao");
    if (c) {
      if (c.evid) { c.evid.fontes = [...new Set(["espghan_constip2026", ...(c.evid.fontes || [])])]; c.evid.certeza = "Moderada para PEG × placebo; baixa para PEG × lactulose (ESPGHAN/NASPGHAN 2026, GRADE)"; }
      c.nv = ["Tetos de dose (PEG cerca de 17 g/dia na manutenção e 100 g/dia na desimpactação): conferir na bula do produto.", "Critérios de Roma IV e sinais de alarme citados de memória (diretriz 2014)."];
      const lac = (c.rx || []).find(r => /Lactulose/.test(r.titulo)); if (lac) lac.dose = "F";
    }
  }

  if (falhas.length) console.warn("data84: " + falhas.join(" | "));
  globalThis.__falhas84 = falhas;
})();
