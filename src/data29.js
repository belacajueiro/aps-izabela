// ───────────── data29.js – Pré-diabetes (11/10/2026): rastreio, confirmação, MEV × metformina, reavaliação, regressão e transição para DM2
Object.assign(FONTES, {
  sbd_diag2025: {s: "SBD 2025 – diagnóstico e rastreio do DM2", t: "Sociedade Brasileira de Diabetes – diretriz de diagnóstico do DM2 (mar/2025), conforme resumo do Portal Afya: normal / pré-DM / DM – jejum < 100 / 100–125 / ≥ 126; HbA1c < 5,7 / 5,7–6,4 / ≥ 6,5%; TOTG 1 h < 155 / 155–208 / ≥ 209; TOTG 2 h < 140 / 140–199 / ≥ 200 mg/dL; glicemia casual ≥ 200 + sintomas; confirmação com 2 exames alterados (podem ser na mesma amostra); rastreio universal ≥ 35 anos e em 18–34 com IMC ≥ 25 + fator de risco; FINDRISC define intervalos (< 15: 3 anos; 15–20: anual; > 20: exame imediato); pré-DM: TOTG 1 h e repetição pelo menos anual (diretriz; conferida por resumo secundário).", f: "F", url: "https://portal.afya.com.br/endocrinologia/sbd-atualiza-diretriz-de-diagnostico-do-diabetes-tipo-2"},
  sbd_prediab: {s: "SBD – tratamento farmacológico do pré-diabetes", t: "Giacaglia LR et al. Tratamento farmacológico do pré-diabetes. Diretriz SBD (DOI 10.29327/557753.2022-9; revisão 04/01/2022, página da edição 2026): R1 – mudança de estilo de vida para todos (I-A); R2 – metformina deve ser considerada em adultos com pré-DM, sobretudo < 60 anos, IMC > 35, DMG prévia, síndrome metabólica, HAS ou jejum > 110 mg/dL (IIa-B), com dosagem periódica de B12; R3 – outros fármacos (acarbose, pioglitazona, liraglutida, orlistate) podem ser considerados conforme risco e custo (IIb-B); iSGLT2 e iDPP-4 não usados para prevenção (diretriz de sociedade).", f: "F", url: "https://diretriz.diabetes.org.br/tratamento-farmacologico-do-pre-diabetes/"},
  perreault2012: {s: "DPPOS – regressão à normoglicemia (Perreault 2012)", t: "Perreault L et al. Effect of regression from prediabetes to normal glucose regulation on long-term reduction in diabetes risk: results from the Diabetes Prevention Program Outcomes Study. Lancet 2012. DOI 10.1016/S0140-6736(12)60525-X – atingir regulação glicêmica normal ao menos uma vez no DPP reduziu o risco de DM em 56% no seguimento (HR 0,44; IC95% 0,37–0,55), independentemente do braço (coorte de ECR; conferido por resumo).", f: "F", url: "https://pace-cme.org/2012/06/11/normal-glucose-regulation-in-prediabetes-associated-with-reduced-risk-for-disease-progression"},
  ada2026_s3: {s: "ADA 2026 – seção 3 (prevenção)", t: "American Diabetes Association. Standards of Care in Diabetes—2026, Section 3: Prevention or Delay of Diabetes. Diabetes Care 2026;49(Suppl 1):S50–S60 (doi 10.2337/dc26-S003) – metformina para alto risco (25–59 anos com IMC ≥ 35, jejum ≥ 110, HbA1c ≥ 6,0% ou DMG prévia); testagem pelo menos anual no pré-DM; nenhum outro fármaco com evidência de longo prazo só para prevenção (diretriz; conferida por resumo secundário – GlobalRPH, jul/2026).", f: "C", url: "https://globalrph.com/2026/07/prediabetes-in-2026-evidence-thresholds-for-lifestyle-intervention-metformin-and-anti-obesity-pharmacotherapy/"},
  findrisc: {s: "FINDRISC (Lindström 2003)", t: "Lindström J, Tuomilehto J. The Diabetes Risk Score: a practical tool to predict type 2 diabetes risk. Diabetes Care 2003;26:725-31 – 8 itens, 0–26 pontos: < 7 baixo, 7–11 levemente elevado, 12–14 moderado, 15–20 alto, > 20 muito alto (instrumento; itens citados de memória, faixas confirmadas no resumo da SBD).", f: "C", url: ""}
});

// ── DM2: diagnóstico com TOTG 1 h, fluxo do rastreio e ligação com o pré-diabetes
CONDICOES.forEach(c => {
  if (c.id !== "cr-dm2") return;
  const s = c.guia.secoes.find(x => /Diagnóstico e rastreamento/.test(x.t)); if (!s) return;
  s.b.forEach(b => {
    if (b.tab && b.tab.h[0] === "Exame") {
      b.tab = {h: ["Exame", "Normal", "Pré-diabetes", "Diabetes"], r: [
        ["Glicemia de jejum (8 h)", "< 100 [F]", "100–125 mg/dL [F]", "≥ 126 mg/dL [F]"],
        ["HbA1c", "< 5,7% [F]", "5,7–6,4% [F]", "≥ 6,5% [F]"],
        ["TOTG 1 h (75 g) – SBD 2025", "< 155 [F]", "155–208 mg/dL [F]", "≥ 209 mg/dL [F]"],
        ["TOTG 2 h (75 g)", "< 140 [F]", "140–199 mg/dL [F]", "≥ 200 mg/dL [F]"],
        ["Glicemia casual + sintomas clássicos", "—", "—", "≥ 200 mg/dL [F]"]]};
      b.nota = "SBD 2025 [F]: confirmar com 2 exames alterados – podem ser na mesma amostra (ex.: jejum + HbA1c colhidos juntos); sintomas clássicos + glicemia casual ≥ 200 dispensam confirmação. A glicemia de 1 h do TOTG é critério da SBD (não da ADA nem do PCDT de 2024).";
    }
    if (b.ul) b.ul = b.ul.map(x => x.startsWith("**Pré-diabetes:**") ? "**Pré-diabetes:** é risco, não doença – mudança de estilo de vida para todos, metformina para subgrupos e reavaliação anual. Ver o item 'Pré-diabetes' [F]." : x.startsWith("**Rastreamento:**") ? x.replace(" [F].", "; intervalo pelo FINDRISC: < 15 a cada 3 anos, 15–20 anual, > 20 exame já [F].") : x);
  });
  s.b.unshift({fluxo: [
    {t: "Rastrear: ≥ 35 anos; 18–34 com IMC ≥ 25 + fator de risco; DMG prévia; corticoide crônico; FINDRISC alto"},
    {t: "Glicemia de jejum + HbA1c na mesma coleta", ramos: [
      {r: "Ambos normais", n: [{t: "Repetir em 3 anos (anual se FINDRISC ≥ 15 ou ≥ 3 fatores de risco)", k: "ok"}]},
      {r: "Faixa de pré-diabetes", n: [{t: "Pré-diabetes: MEV, TOTG 1 h se disponível, reavaliar ao menos anualmente", k: "warn"}]},
      {r: "Os dois na faixa de DM", n: [{t: "DM2 confirmado", k: "stop"}]},
      {r: "Só um na faixa de DM", n: [{t: "Não rotular: repetir o exame alterado em nova amostra para confirmar", k: "warn"}]}]}
  ], nota: "Critérios e intervalos SBD 2025 [F]; conduta no exame discordante: confirmação com nova amostra [C]."});
  R25.calc(c, "sc:findrisc");
  R25.fonte(c, "sbd_diag2025", "sbd_prediab");
  c.mudancas.push("Revisão 11/10/2026: critérios SBD 2025 com TOTG de 1 h, fluxograma do rastreio ao diagnóstico, FINDRISC e ligação com o novo item de pré-diabetes.");
});

CONDICOES.push({
  id: "cr-prediabetes", modulo: "cr", nome: "Pré-diabetes: rastreio, confirmação, MEV, metformina e reavaliação", sistema: "DM", risco: "moderado",
  ciap: "T99 · A23", cid: "R73.0 · R73.9",
  tags: "pré-diabetes glicemia de jejum alterada intolerância à glicose HbA1c 5,7 6,4 TOTG 1 hora 155 FINDRISC prevenção do diabetes mudança de estilo de vida perda de peso 7% atividade física 150 minutos metformina DPP regressão normoglicemia",
  S: "Achado de ___ (jejum ___ / HbA1c ___ / TOTG ___) em ___ | Exames anteriores ___ | Sintomas (poliúria, polidipsia, perda de peso) ___ | Peso há 1 ano ___ | Atividade física (min/semana) ___ | Alimentação (ultraprocessados, bebidas açucaradas) ___ | Sono, álcool, tabaco ___ | DM em parente de 1º grau ___ | DMG prévia ___ | HAS, dislipidemia, SOP, esteatose ___ | Corticoide/antipsicótico ___.",
  O: "Peso ___ | Altura ___ | IMC ___ | Cintura ___ cm | PA ___ | Acantose ___ | FINDRISC ___.\nExames: jejum ___ | HbA1c ___ | TOTG 1 h ___ / 2 h ___ | perfil lipídico ___ | creatinina ___ | TGO/TGP ___.",
  A: "Pré-diabetes por ___ (glicemia de jejum alterada / HbA1c 5,7–6,4% / intolerância à glicose); risco adicional: ___.",
  P: "- Explicar: é risco, não doença; pode voltar ao normal.\n- MEV com metas: perder 5–7% do peso, ≥ 150 min/semana de atividade, reduzir ultraprocessados e bebidas açucaradas.\n- [Se < 60 anos com IMC > 35, DMG prévia, síndrome metabólica, HAS ou jejum > 110] Metformina, decisão compartilhada.\n- Tratar PA, lipídios e tabagismo (risco CV).\n- Reavaliar jejum + HbA1c em 12 meses (antes se sintomas); peso e MEV em 3 meses.",
  rx: [
    {trilha: "ambos", titulo: "Metformina (pré-diabetes de alto risco, junto com MEV)", texto: "USO ORAL\n1. Metformina 850 mg ______ 60 comprimidos\n   Tomar 1 comprimido após o jantar por 1 a 2 semanas;\n   depois, 1 comprimido após o café e 1 após o jantar.", dose: "F", nota: "Dose do DPP: 850 mg 2×/dia [F]; início gradual para tolerância gastrointestinal [C]. Não usar com TFG < 30 [C]. Dosar B12 periodicamente [F]. Metformina 850 mg na REMUME de Betim [F]; a Farmácia Popular dispensa metformina para diabetes – uso no pré-diabetes pelo programa não conferido [NV]. Indicação em bula para pré-diabetes no Brasil: não conferida [NV]."}
  ],
  orient: "Pré-diabetes quer dizer que o açúcar no sangue está um pouco acima do normal. Ainda não é diabetes – e muitas pessoas voltam ao normal.\nO que mais funciona: perder de 5 a 7% do peso (por exemplo, 4 a 5 kg em quem pesa 70 kg) e caminhar pelo menos 30 minutos, 5 dias por semana.\nTroque refrigerante e suco de caixinha por água; reduza pães, bolos, biscoitos e salgadinhos industrializados.\nRefaça os exames em 1 ano, ou antes se tiver muita sede, urinar muito ou perder peso sem querer.",
  alarme: ["Muita sede, urinar muito e perder peso sem querer", "Glicemia capilar ≥ 300 mg/dL", "Vômitos, dor abdominal e fraqueza com glicemia alta"],
  encaminhar: "Sem encaminhamento de rotina: manejo na APS com eMulti (nutrição, educação física). Obesidade grave com indicação cirúrgica → fluxo de obesidade.",
  sus: {nacional: "Rastreio e acompanhamento na APS; eMulti e Academia da Saúde para MEV [C]; metformina no Componente Básico (RENAME) [F].", betim: "REMUME Betim: metformina 850 mg [F]. Grupos de MEV, nutrição e Academia da Saúde em Betim: confirmar."},
  evid: {resumo: "No DPP, a MEV intensiva (meta de 7% de perda de peso e ≥ 150 min/semana) reduziu a incidência de DM2 em 58% e a metformina em 31% em cerca de 3 anos; o efeito persiste, menor, por 15 anos (DPPOS). Quem volta à normoglicemia ao menos uma vez tem 56% menos risco de DM no seguimento. A SBD recomenda MEV para todos (I-A) e considerar metformina em subgrupos de maior risco (IIa-B); iSGLT2 e iDPP-4 não são usados para prevenção.", certeza: "Alta para MEV; moderada para metformina", fontes: ["sbd_diag2025", "sbd_prediab", "dpp2002", "perreault2012", "ada2026_s3", "findrisc", "remume", "rename"]},
  mudancas: ["Item novo (DM): rastreio, confirmação, decisão MEV × metformina, reavaliação, regressão e transição para DM2."],
  nv: ["Uso da metformina para pré-diabetes pela Farmácia Popular e indicação em bula no Brasil.", "Grupos de MEV e Academia da Saúde em Betim.", "Itens do FINDRISC citados de memória (faixas de risco conferidas)."],
  guia: {
    resumo: "Pré-diabetes é **risco, não doença**. **MEV para todos** (perder 5–7% do peso, ≥ 150 min/semana); **metformina só em subgrupos** (< 60 anos com IMC > 35, DMG prévia, síndrome metabólica, HAS, jejum > 110). **Reavalie ao menos uma vez por ano**: voltar ao normal reduz o risco de DM em cerca de 56%. Vira DM2 só com **dois exames na faixa de diabetes**.",
    calcs: ["sc:findrisc", "antropo", "prevent"],
    secoes: [
      {t: "Rastrear e confirmar", b: [
        {calc: "sc:findrisc"},
        {fluxo: [
          {t: "Quem rastrear: ≥ 35 anos; 18–34 com IMC ≥ 25 + fator de risco; DMG prévia; corticoide crônico; FINDRISC alto"},
          {t: "Glicemia de jejum + HbA1c na mesma coleta", ramos: [
            {r: "Normais", n: [{t: "FINDRISC < 15 e < 3 fatores: repetir em 3 anos; senão, anual (com TOTG 1 h se disponível)", k: "ok"}]},
            {r: "Jejum 100–125 e/ou HbA1c 5,7–6,4%", n: [{t: "Pré-diabetes", k: "warn"}]},
            {r: "Um exame na faixa de DM", n: [{t: "Repetir o exame alterado (nova amostra) antes de rotular", k: "warn"}]},
            {r: "Dois exames na faixa de DM (ou sintomas + casual ≥ 200)", n: [{t: "DM2 → item 'DM2'", k: "stop"}]}]},
          {t: "Pré-diabetes: TOTG 1 h, se disponível, refina o risco (≥ 155 pré-DM; ≥ 209 já é DM)"}
        ], nota: "Critérios e intervalos SBD 2025 [F]; confirmação do exame discordante em nova amostra [C]."},
        {tab: {h: ["Exame", "Normal", "Pré-diabetes", "Diabetes"], r: [
          ["Glicemia de jejum", "< 100", "100–125", "≥ 126"],
          ["HbA1c", "< 5,7%", "5,7–6,4%", "≥ 6,5%"],
          ["TOTG 1 h (SBD)", "< 155", "155–208", "≥ 209"],
          ["TOTG 2 h", "< 140", "140–199", "≥ 200"]]},
         nota: "Valores em mg/dL, SBD 2025 [F]. HbA1c engana em anemia, hemoglobinopatias, DRC avançada, gestação e transfusão recente: prefira glicemias [F]."},
        {ul: [
          "Ao diagnosticar pré-DM, avaliar o resto do risco cardiometabólico: PA, perfil lipídico, cintura, tabagismo, esteatose (TGO/TGP), SOP; risco CV pelo PREVENT [C].",
          "Pré-DM após DMG: manter rastreio periódico por toda a vida (ver 'Seguimento após DMG') [C]."]},
        {ref: ["sbd_diag2025", "sbd_metas"]}]},
      {t: "MEV ou metformina?", b: [
        {fluxo: [
          {t: "Pré-diabetes confirmado"},
          {t: "MEV estruturada para todos: perda de 5–7% do peso, ≥ 150 min/semana de atividade moderada, menos ultraprocessados e bebidas açucaradas", k: "ok"},
          {t: "Algum critério de maior risco: < 60 anos com IMC > 35, DMG prévia, síndrome metabólica, HAS ou jejum > 110 mg/dL?", ramos: [
            {r: "Sim", n: [{t: "Considerar metformina junto com a MEV (decisão compartilhada)", k: "warn"}]},
            {r: "Não", n: [{t: "Só MEV; reavaliar em 12 meses", k: "ok"}]}]},
          {t: "Obesidade com indicação própria (IMC ≥ 30, ou ≥ 27 com comorbidade)? Tratar a obesidade pelo item 'Obesidade'"}
        ], nota: "SBD [F]: MEV I-A; metformina IIa-B; outros fármacos IIb-B; iSGLT2 e iDPP-4 não indicados para prevenção. ADA 2026: metformina em 25–59 anos com IMC ≥ 35, jejum ≥ 110, HbA1c ≥ 6,0% ou DMG prévia [C]."},
        {tab: {h: ["Intervenção", "Efeito em DM2 (ECR)", "Observação"], r: [
          ["MEV intensiva (DPP)", "−58% em ~3 anos; −27% em 15 anos (DPPOS) [C]", "Maior benefício em ≥ 60 anos [C]"],
          ["Metformina 850 mg 2×/dia (DPP)", "−31% em ~3 anos; −18% em 15 anos [C]", "Mais eficaz com IMC ≥ 35, < 60 anos e DMG prévia [C]"],
          ["Liraglutida 3 mg (SCALE)", "Regressão à normoglicemia em ~66% [F]", "Indicação por obesidade; custo alto (compra) [F/C]"],
          ["Acarbose, pioglitazona, orlistate", "Reduzem incidência em ECR [F]", "Efeitos adversos e custo limitam (IIb) [F]"]]}},
        {perola: {t: "No idoso, o pré-diabetes raramente progride", x: "Em pessoas mais velhas, sobretudo com HbA1c próxima de 5,7% ou jejum 100–110, a progressão para DM é baixa e muitos voltam ao normal. Foque em atividade física, força e prevenção de quedas; metformina não está entre os critérios da SBD após os 60 anos.", d: "menos medicalização e menos efeitos adversos.", l: "C"}},
        {ref: ["sbd_prediab", "dpp2002", "ada2026_s3"]}]},
      {t: "Reavaliar, regredir, retirar e quando vira DM2", b: [
        {fluxo: [
          {t: "Retorno em 3 meses: peso, atividade física, adesão (sem novos exames se não houver sintomas)"},
          {t: "12 meses: glicemia de jejum + HbA1c (TOTG 1 h se disponível)", ramos: [
            {r: "Voltou ao normal", n: [{t: "Regressão: risco de DM cai ~56%; manter MEV e repetir anualmente", k: "ok"}]},
            {r: "Segue pré-DM", n: [{t: "Intensificar MEV; reavaliar critérios de metformina; repetir em 12 meses", k: "warn"}]},
            {r: "Dois exames na faixa de DM", n: [{t: "DM2: iniciar tratamento e rastreio de complicações", k: "stop"}]}]}
        ], nota: "Repetição pelo menos anual (SBD 2025) [F]; regressão (Perreault 2012) [F]; retorno de 3 meses: inferência clínica [I]."},
        {ul: [
          "**Quando suspender a metformina:** não há ECR sobre retirada. Considerar suspender (com decisão compartilhada e rastreio anual mantido) se houver normoglicemia sustentada com perda de peso mantida, efeitos adversos, B12 baixa ou se a pessoa não tiver mais critério de alto risco – inferência clínica [I].",
          "Parte do efeito da metformina some quando ela é suspensa (estudo de washout do DPP); por isso, a MEV é o que sustenta o benefício [C].",
          "**Quando vira DM2:** dois exames na faixa de diabetes (jejum ≥ 126, HbA1c ≥ 6,5%, TOTG 1 h ≥ 209 ou 2 h ≥ 200), na mesma amostra ou em amostras diferentes, ou sintomas clássicos + casual ≥ 200 [F].",
          "B12 periódica em quem usa metformina [F]."]},
        {perola: {t: "Voltar ao normal uma vez já conta", x: "No DPPOS, quem atingiu glicemia normal pelo menos uma vez teve 56% menos risco de diabetes nos anos seguintes, qualquer que fosse o tratamento. Use isso como meta concreta com o paciente: 'vamos tentar trazer o exame de volta ao normal'.", d: "meta motivadora e mensurável.", l: "F"}},
        {trio: {ideal: "Programa estruturado de MEV (estilo DPP) com acompanhamento frequente; metformina em subgrupos; tratamento da obesidade quando indicado.", sus: "Metformina na UBS; MEV depende de eMulti, grupos e Academia da Saúde, com oferta variável; fármacos para obesidade só por compra.", ponte: "Grupo de MEV na UBS (nutrição + educação física) e metas simples (5–7% do peso, 150 min/semana) entregam a maior parte do benefício com custo baixo."}},
        {ref: ["sbd_diag2025", "perreault2012", "dpp2002", "sbd_prediab"]}]}
    ]}
});
