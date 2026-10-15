// ───────────── data42.js – v38: DPOC de manutenção revisada pelo texto final do PCDT DPOC 2025 (Portaria Conjunta SAES/SCTIE nº 29, de 27/11/2025)
(function(){
  const c = CONDICOES.find(x => x.id === "cr-dpoc");
  if (!c) return;
  c.P = "- Cessação do tabagismo em toda consulta (TRN e bupropiona na REMUME; Fagerström).\n- Grupo A: SAMA ou SABA para alívio; LABA (formoterol) se sintomas frequentes. Grupo B: LAMA + LABA contínuo (umeclidínio + vilanterol – CEAF). Grupo E: LAMA + LABA (umeclidínio + vilanterol; tiotrópio + olodaterol se VEF1 < 50%).\n- Corticoide inalado só como tripla: eosinófilos ≥ 300, ou exacerbações frequentes com eosinófilos 100–299 (individualizar), ou exacerbações persistentes com LAMA + LABA. Evitar se eosinófilos < 100 ou pneumonia.\n- Técnica inalatória e adesão, plano escrito para exacerbação, atividade física/reabilitação, vacinas.\n- SpO₂ em repouso (toda consulta se VEF1 < 50%); ≤ 92% → gasometria.";
  c.roteiro = [{g: "Consulta de DPOC", i: [
    "Espirometria pós-BD (VEF1/CVF < 0,7) ou, sem espirometria, pico de fluxo + questionário validado",
    "mMRC (calculadora) e/ou CAT",
    "Exacerbações no último ano (moderadas e com internação)",
    "Tabagismo: abordagem e Fagerström",
    "Técnica inalatória demonstrada",
    "Eosinófilos (decisão de corticoide inalado)",
    "SpO₂ em repouso (e no esforço se DPOC grave)",
    "Vacinas: influenza, pneumocócicas 13 e 23, COVID-19",
    "Risco cardiovascular (HEARTS, 40–74 anos) e estado nutricional (IMC < 21)",
    "LME do CEAF para LAMA + LABA conferida"]}];
  c.rx = [
    {trilha: "ambos", titulo: "Grupos B e E · LAMA + LABA (CEAF)",
     texto: "USO INALATÓRIO\n1. Umeclidínio + vilanterol 62,5/25 mcg (pó inalatório) ______ 1 inalador\n   Inalar 1 dose 1 vez ao dia, sempre no mesmo horário.\n   (VEF1 < 50% com perfil exacerbador, sobretudo se não consegue usar pó: tiotrópio + olodaterol 2,5/2,5 mcg névoa suave – 2 jatos 1 vez ao dia.)",
     dose: "F", nota: "PCDT DPOC 2025 (critérios de inclusão e Quadro 6): umeclidínio + vilanterol para sintomáticos dos grupos B ou E, qualquer grau de obstrução; tiotrópio + olodaterol só para GOLD 3–4 (VEF1 < 50%) exacerbador [F]. LME no CEAF com espirometria – ou, sem espirometria, a estratégia alternativa registrada (o PCDT aceita) [F]."},
    {trilha: "ambos", titulo: "Grupo A · LABA se sintomas frequentes",
     texto: "USO INALATÓRIO\n1. Formoterol 12 mcg (cápsula para inalação) ______ 60 cápsulas\n   Inalar o conteúdo de 1 cápsula de 12/12 horas.",
     dose: "F", nota: "PCDT 2025: grupo A – SAMA ou SABA para alívio; considerar LABA se sintomas frequentes; formoterol 12–24 mcg 2 vezes/dia, máximo 48 mcg/dia; único LABA isolado do SUS (CEAF) [F]. Também vale para o grupo B quando a combinação não for possível ou tolerada [F]."},
    {trilha: "ambos", titulo: "Tripla em inalador único (CEAF – GOLD 3–4 exacerbador)",
     texto: "USO INALATÓRIO\n1. Furoato de fluticasona + umeclidínio + vilanterol 100/62,5/25 mcg ______ 1 inalador\n   Inalar 1 dose 1 vez ao dia.\n   (Alternativa: beclometasona + formoterol + glicopirrônio 100/6/12,5 mcg aerossol – 2 jatos de 12/12 horas, com espaçador.)",
     dose: "F", nota: "PCDT 2025: triplas de dose fixa pelo CEAF só para GOLD 3–4 com perfil exacerbador [F]. Indicar corticoide se eosinófilos ≥ 300, ou exacerbações frequentes com eosinófilos 100–299 (individualizar), ou exacerbações persistentes com LAMA + LABA; evitar se eosinófilos < 100 ou história de pneumonia [F]."},
    {trilha: "ambos", titulo: "Tripla aberta (LAMA + LABA do CEAF + beclometasona da UBS)",
     texto: "USO INALATÓRIO\n1. Umeclidínio + vilanterol 62,5/25 mcg (pó inalatório) ______ 1 inalador\n   Inalar 1 dose 1 vez ao dia.\n2. Beclometasona 200 mcg/dose aerossol ______ 2 frascos\n   Inalar 2 jatos de 12/12 horas com espaçador (800 mcg/dia); enxaguar a boca depois.",
     dose: "F", nota: "PCDT 2025 (Quadro 6): tripla aberta = LAMA + LABA + budesonida 400–800 mcg 1 vez ao dia ou beclometasona 400 mcg 2 vezes ao dia; considerar 400 mcg/dia de budesonida se risco de pneumonia [F]. Útil para quem tem indicação de corticoide mas não preenche o critério GOLD 3–4 da tripla fixa [I]. Beclometasona: REMUME e grátis na Farmácia Popular."},
    {trilha: "sus", titulo: "REMUME · ipratrópio + salbutamol (grupo A ou enquanto aguarda o CEAF)",
     texto: "USO INALATÓRIO\n1. Ipratrópio 20 mcg/dose aerossol ______ 1 frasco\n   Inalar 2 jatos 3 a 4 vezes ao dia com espaçador (máximo 12 jatos por dia).\n2. Salbutamol 100 mcg/dose aerossol ______ 1 frasco\n   Inalar 2 a 4 jatos com espaçador se falta de ar, até de 4/4 horas.",
     dose: "F", nota: "PCDT 2025 (Quadro 6): ipratrópio 40 mcg 3–4 vezes/dia, máximo 240 mcg/dia; salbutamol 200–400 mcg a cada 4–6 h conforme necessidade [F]. Os dois também grátis na Farmácia Popular."},
    (c.rx || []).find(b => /tabagismo/i.test(b.titulo)) || null
  ].filter(Boolean);
  c.idealsus = {
    ideal: "LAMA + LABA para grupos B e E; corticoide inalado só na tripla, guiado por eosinófilos e exacerbações; cessação do tabagismo, reabilitação, vacinas e oxigênio na hipoxemia grave.",
    sus: "PCDT DPOC 2025 (CEAF): umeclidínio + vilanterol para B e E; tiotrópio + olodaterol e triplas de dose fixa para GOLD 3–4 exacerbador; formoterol isolado. Na UBS e Farmácia Popular: ipratrópio, salbutamol e beclometasona; TRN e bupropiona.",
    ponte: "Abra a LME com espirometria – sem espirometria, o PCDT aceita pico de fluxo + questionário validado registrados. Enquanto o CEAF não sai: ipratrópio regular + salbutamol. Indicação de corticoide fora do GOLD 3–4: tripla aberta com beclometasona da UBS."
  };
  c.sus = {
    nacional: "PCDT DPOC 2025 (Portaria Conjunta 29/2025; CEAF): umeclidínio + vilanterol; tiotrópio + olodaterol; fluticasona + umeclidínio + vilanterol; beclometasona + formoterol + glicopirrônio; formoterol; formoterol + budesonida; budesonida. Básico e Farmácia Popular: ipratrópio, salbutamol, beclometasona. Tabagismo: nicotina (adesivo, goma, pastilha) e bupropiona.",
    betim: "REMUME Betim: ipratrópio (aerossol e solução), salbutamol (aerossol e solução), beclometasona, prednisona, nicotina (adesivos 7/14/21 mg, goma 2 mg, pastilha 4 mg) e bupropiona 150 mg."
  };
  c.encaminhar = "Grupo E (o PCDT recomenda acompanhamento em pneumologia), hipoxemia em repouso ou no esforço confirmada, suspeita de deficiência de alfa-1-antitripsina, GOLD 3–4 muito sintomático após 4–6 meses de tratamento otimizado e reabilitação (avaliar cirurgia), dúvida diagnóstica. Grupo B: considerar pneumologia. Exacerbação → modelo 'Exacerbação de DPOC'.";
  c.evid = {
    resumo: "LAMA + LABA melhoram sintomas e qualidade de vida em relação a um broncodilatador isolado; a tripla reduz exacerbações e mortalidade no exacerbador com eosinófilos elevados (PCDT 2025, a partir da GOLD 2025) [F]. Cessação do tabagismo e oxigênio por > 15 h/dia na hipoxemia grave são as intervenções que mudam a sobrevida [F]; reabilitação reduz hospitalização [F].",
    certeza: "Alta (broncodilatadores, tripla, oxigenoterapia); moderada (azitromicina, reabilitação a longo prazo)",
    fontes: ["pcdt_dpoc2025", "gold", "nott", "rename", "remume"]
  };
  c.nv = ["Fluxo do CEAF (LME) e do programa de tabagismo em Betim.", "Dose de azitromicina de uso prolongado: o PCDT não fixa."];
  (c.mudancas = c.mudancas || []).push("Revisão 14/10/2026 pelo texto final do PCDT DPOC 2025: grupo A com LABA (formoterol); critérios de corticoide com faixa 100–299; tripla aberta com beclometasona da UBS; o CEAF aceita diagnóstico sem espirometria por estratégia alternativa; oxigenoterapia e oximetria (≤ 92% → gasometria); vacinas pneumocócicas; seguimento após exacerbação em 1–4 e 12–16 semanas; risco cardiovascular e IMC.");

  const g = c.guia;
  g.resumo = "Na DPOC, o que muda **sobrevida** é **parar de fumar** e **oxigênio por mais de 15 h/dia na hipoxemia grave**. **LAMA + LABA** é a base nos grupos B e E (umeclidínio + vilanterol pelo CEAF); o **corticoide inalado** entra só como tripla, guiado por eosinófilos e exacerbações. O PCDT 2025 aceita diagnóstico por estratégia alternativa quando não há espirometria.";
  const S = t => g.secoes.find(s => s.t === t);
  const dx = S("Diagnóstico");
  if (dx) dx.b = [
    {ul: [
      "**Suspeitar:** > 40 anos, tabagista ou ex-tabagista, ou exposição a **fogão a lenha**, biomassa, carvão, sílica ou poeira ocupacional, com tosse, chiado, dispneia ao esforço ou expectoração crônicos (PCDT 2025) [F].",
      "**Espirometria pós-BD:** VEF1/CVF < 0,70 confirma; se entre 0,60 e 0,80, repetir em outra ocasião [F].",
      "**Sem espirometria** (indisponível, idoso, déficit cognitivo, fragilidade): pico de fluxo (valores de Nunn & Gregg) + questionário validado e história clínica; o PCDT inclui esses pacientes, inclusive para o CEAF [F]. Tele-espirometria é uma opção quando houver.",
      "**Gravidade da obstrução:** GOLD 1 ≥ 80%; GOLD 2 50–79%; GOLD 3 30–49%; GOLD 4 < 30% do VEF1 previsto (Quadro 2) [F].",
      "**Na 1ª consulta:** hemograma (anemia, policitemia), eosinófilos, SpO₂ em repouso [F].",
      "**Alfa-1-antitripsina:** suspeita → pneumologia [F]."]},
    {ref: ["pcdt_dpoc2025", "gold"]}];
  const cl = S("Classificação A/B/E (PCDT 2025)");
  if (cl){ const t = cl.b.find(x => x.tab); if (t) t.nota = "Quadro 3 do PCDT DPOC 2025 [F]. Exacerbação moderada = tratada no ambulatório com antibiótico ou corticoide; grave = com internação."; }
  const tr = S("Tratamento farmacológico");
  if (tr) tr.b = [
    {fluxo: [
      {t: "Grupo", ramos: [
        {r: "A", n: [{t: "SAMA ou SABA para alívio", k: "ok"}, {t: "LABA (formoterol) se sintomas frequentes", s: "CEAF"}]},
        {r: "B", n: [{t: "LAMA + LABA contínuo", k: "ok", s: "umeclidínio + vilanterol (CEAF); LAMA ou LABA isolado se a combinação não for possível"}]},
        {r: "E", n: [
          {t: "LAMA + LABA contínuo", k: "warn", s: "umeclidínio + vilanterol; tiotrópio + olodaterol se VEF1 < 50%"},
          {t: "Corticoide inalado?", ramos: [
            {r: "Eos ≥ 300 ou exacerba com LAMA + LABA", n: [{t: "Tripla (fixa no GOLD 3–4; aberta com beclometasona nos demais)", k: "stop"}]},
            {r: "Eos 100–299 e exacerbações frequentes", n: [{t: "Individualizar a tripla"}]},
            {r: "Eos < 100 ou pneumonia", n: [{t: "Evitar corticoide; sem tabagismo ativo, considerar azitromicina por até 1 ano"}]}]}]}]},
      {t: "Todos: SAMA ou SABA para alívio; técnica inalatória e adesão em toda consulta", k: "ok"},
      {t: "Asma junto com DPOC: seguir o PCDT da Asma", k: "warn"}
    ], nota: "Quadro 5, critérios de inclusão e Figura 1 do PCDT DPOC 2025 [F]."},
    {tab: {h: ["Esquema", "Dose (PCDT 2025)", "Acesso"], r: [
      ["Umeclidínio + vilanterol 62,5/25 mcg (pó)", "1 inalação 1x/dia", "CEAF – grupos B ou E, qualquer obstrução"],
      ["Tiotrópio + olodaterol 2,5/2,5 mcg (névoa suave)", "2 jatos 1x/dia", "CEAF – GOLD 3–4 exacerbador; VEF1 < 50% com dificuldade no pó"],
      ["Formoterol 12 mcg (cápsula)", "12–24 mcg 2x/dia; máx. 48 mcg/dia", "CEAF"],
      ["Fluticasona + umeclidínio + vilanterol 100/62,5/25", "1 inalação 1x/dia", "CEAF – GOLD 3–4 exacerbador"],
      ["Beclometasona + formoterol + glicopirrônio 100/6/12,5", "2 jatos 2x/dia", "CEAF – GOLD 3–4 exacerbador"],
      ["Tripla aberta: LAMA + LABA + beclometasona", "beclometasona 400 mcg 2x/dia (ou budesonida 400–800 mcg 1x/dia)", "LAMA + LABA pelo CEAF; beclometasona na UBS/Farmácia Popular"],
      ["Ipratrópio 20 mcg; salbutamol 100 mcg", "2 jatos 3–4x/dia (máx. 240 mcg/dia); 2–4 jatos se necessário", "UBS e Farmácia Popular"]]},
      nota: "Quadro 6 do PCDT DPOC 2025 [F]. Aerossóis sempre com espaçador; pó seco funciona mal com VEF1 < 30–40% – prefira aerossol com espaçador ou névoa suave [F]."},
    {perola: {t: "Corticoide inalado não é para todo DPOC",
      x: "O PCDT 2025 não recomenda corticoide isolado nem LABA + corticoide de rotina; se o corticoide for indicado, use a tripla. Eosinófilos ≥ 300 favorecem; < 100 ou pneumonia prévia contraindicam na prática. Quem já usa LABA + corticoide do PCDT 2021 e está bem pode manter, com reavaliação [F].",
      d: "evita pneumonias sem ganho em exacerbação.", l: "F"}},
    {perola: {t: "A névoa suave ajuda quem não consegue inalar o pó",
      x: "Para VEF1 < 50% com dificuldade no inalador de pó seco, o PCDT recomenda tiotrópio + olodaterol em névoa suave [F]. Peça para o paciente mostrar como usa.",
      d: "o broncodilatador só funciona se chegar ao pulmão.", l: "F"}},
    {ref: ["pcdt_dpoc2025", "gold", "remume"]}];
  const sv = S("O que muda sobrevida");
  if (sv) sv.b = [
    {perola: {t: "Parar de fumar é o tratamento mais eficaz da DPOC",
      x: "A cessação é a intervenção que mais reduz a progressão e deve ser reforçada em toda consulta; o tabagismo ativo também reduz o efeito do corticoide inalado (PCDT 2025) [F]. TRN e bupropiona na REMUME, pelo PCDT do Tabagismo [F].",
      d: "menor declínio funcional e menor mortalidade.", l: "F"}},
    {calc: "sc:fagerstrom"},
    {perola: {t: "Oxigênio por mais de 15 h/dia na hipoxemia grave",
      x: "Indicado com PaO₂ < 55 mmHg ou SpO₂ < 88%, confirmados duas vezes em 3 semanas; ou PaO₂ 55–60 / SpO₂ 88% com hipertensão pulmonar, edema de insuficiência cardíaca ou hematócrito > 55%. Ajustar o fluxo para SpO₂ ≥ 90%. SpO₂ ≤ 92% em repouso pede gasometria (PCDT 2025) [F].",
      d: "redução de mortalidade; medir SpO₂ em toda consulta se VEF1 < 50%.", l: "F"}},
    {ul: [
      "**Reabilitação pulmonar** (prioridade com mMRC > 2): reduz exacerbações e hospitalização; sem serviço, orientar caminhada, escada, sentar-levantar, pesos leves; telerreabilitação pelo Telessaúde [F].",
      "**Vacinas:** influenza anual para todos; pneumocócicas 13 e 23 para sintomáticos, exacerbadores ou com comorbidade de risco – começar pela 13, intervalo de 6 meses, reforço da 23 em 5 anos (PCDT 2025) [F]. COVID-19 conforme o calendário.",
      "**Risco cardiovascular:** calculadora HEARTS anual de 40 a 74 anos; risco de IAM e AVC alto nos 90 dias após exacerbação – considerar ECG e ecocardiograma [F].",
      "**Nutrição:** IMC < 21 piora o prognóstico; rastrear sarcopenia e considerar suplemento calórico-proteico se perda de peso [F].",
      "**Idosos:** cuidado com antimuscarínicos na HPB e retenção urinária; corticoide piora glicemia e osso [F]."]},
    {ref: ["pcdt_dpoc2025", "nott", "remume"]}];
  const ex = S("Exacerbação e seguimento");
  if (ex){
    ex.b = [
      {ul: [
        "**Plano escrito:** aumentar o broncodilatador de curta ação; prednisona 40 mg por 5 dias nas exacerbações moderadas; antibiótico criterioso se infecciosa (PCDT 2025) [F].",
        "**Internação:** resposta ruim ao tratamento ambulatorial, piora importante da dispneia, prejuízo do sono ou da alimentação, PaO₂ < 50, pH < 7,3, alteração mental, falta de suporte em casa, dúvida diagnóstica, comorbidade relevante [F].",
        "**Após exacerbação:** rever em 1–4 semanas e de novo em 12–16 semanas; checar técnica, tabagismo, vacinas e escalonar [F].",
        "**Espirometria no seguimento** acompanha o declínio, mas não é obrigatória para manter o tratamento [F].",
        "**Encaminhar:** grupo E (pneumologia), hipoxemia confirmada, alfa-1, GOLD 3–4 muito sintomático após 4–6 meses otimizado (cirurgia redutora/transplante) [F]."]},
      {trio: {...c.idealsus}},
      {ref: ["pcdt_dpoc2025", "gold"]}];
  }
})();
