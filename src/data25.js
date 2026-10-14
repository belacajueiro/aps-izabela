// ── data25.js – revisão ampliada (10/10/2026): fontes atualizadas, fluxogramas, figuras, calculadoras da usuária e guias para queixas frequentes
Object.assign(FONTES, {
  tb_pmsp2026: {s: "TB – SMS-SP NI 10/2026", t: "SMS São Paulo. Nota Informativa PMCT 10/2026 – Tratamento e acompanhamento da tuberculose em adultos e adolescentes (03/06/2026): mantém a tabela RHZE/RH por peso com 'dose plena'; TB óssea e do SNC 12 meses; critérios de cura; esquema encurtado de 4 meses (2RHZE/2RH) para TB não grave em crianças e adolescentes, citando a Nota Informativa nº 5/2024-CGTM/DATHI/SVSA/MS (nota técnica municipal; a nota federal não foi aberta).", f: "F", url: "https://prefeitura.sp.gov.br/documents/d/saude/nota-informativa-10_2026-tratamento-e-acompanhamento-tb-1-pdf"},
  itu_bh2022: {s: "SUS-BH – ITU adulto e gestante (2022)", t: "SMSA Belo Horizonte. Protocolo colaborativo: manejo da infecção do trato urinário no adulto e na gestante, 2022 (GRADE): diagnóstico clínico da cistite sem exame; nitrofurantoína 100 mg 6/6 h por 5 dias ou fosfomicina 3 g; pielonefrite não complicada com ciprofloxacino 500 mg 12/12 h por 7 dias; cistite complicada com amoxicilina+clavulanato 7 dias; gestante: Quadro 2 e quimioprofilaxia; ITU de repetição (PDF no Drive da usuária) (protocolo municipal de MG).", f: "F", url: ""},
  oma_bh2021: {s: "SUS-BH – OMA (2021)", t: "SMSA Belo Horizonte. Protocolo de Otite Média Aguda, 2021 (GRADE): fluxograma por idade, gravidade e lateralidade; observação vigilante e prescrição de backup; amoxicilina 90 mg/kg/dia 12/12 h ou 50 mg/kg/dia 8/8 h; < 2 anos 10 dias, ≥ 2 anos 5–7 dias; amoxicilina+clavulanato na síndrome otite-conjuntivite ou antibiótico nos últimos 30 dias (PDF no Drive da usuária) (protocolo municipal de MG).", f: "F", url: ""},
  sinus_bh2021: {s: "SUS-BH – sinusite aguda em crianças (2021)", t: "SMSA Belo Horizonte. Protocolo colaborativo: manejo da sinusite aguda em crianças < 12 anos, 2021: diagnóstico clínico (persistente > 10 dias, início grave com febre ≥ 39 °C e secreção purulenta ≥ 3 dias, piora bifásica), sem RX; amoxicilina ou amoxicilina+clavulanato 80–90 mg/kg/dia 12/12 h ou 50 mg/kg/dia 8/8 h por 7–10 dias; sinais de complicação (PDF no Drive da usuária; baseado em IDSA, AAP e sumários) (protocolo municipal de MG).", f: "F", url: ""},
  idsa_cuti2025: {s: "IDSA 2025 – ITU complicada", t: "IDSA. Guideline on the management of complicated urinary tract infections (inclui pielonefrite), julho de 2025: 5–7 dias de fluoroquinolona ou 7 dias de outro antibiótico eficaz em quem melhora; troca precoce para via oral; homens com suspeita de prostatite podem precisar de 10–14 dias (diretriz; conferida por resumo secundário – emDocs, 28/07/2025).", f: "C", url: "https://www.idsociety.org/practice-guideline/complicated-urinary-tract-infections/"},
  doxipep_conitec: {s: "CONITEC – doxi-PEP (Rel. 1.089/2026)", t: "CONITEC. Relatório de Recomendação nº 1.089 – ampliação de uso da doxiciclina 100 mg para profilaxia pós-exposição de clamídia e sífilis (148ª reunião, 12/02/2026; deliberação nº 1.090/2026): 200 mg (2 cp) em dose única até 72 h após sexo sem preservativo, no máximo 1 dose/dia; população conforme PCDT – plano de implementação para HSH e mulheres trans, com ou sem HIV, com ≥ 1 IST bacteriana nos últimos 12 meses, começando pela rede especializada (relatório oficial).", f: "F", url: "https://www.gov.br/conitec/pt-br/midias/relatorios/2026/relatorio-de-recomendacao-no-1089-ampliacao-de-uso-da-doxiciclina-de-100-mg/@@display-file/file"}
});

const R25 = {
  sec: (c, re) => c.guia && c.guia.secoes.find(s => re.test(s.t)),
  add: (c, re, blocks, pos) => { const s = R25.sec(c, re); if (!s) { console.warn("R25: seção não encontrada", c.id, re); return; } if (pos === "start") s.b.unshift(...blocks); else if (typeof pos === "number") s.b.splice(pos, 0, ...blocks); else { const i = s.b.findIndex(b => b.ref); if (i >= 0) s.b.splice(i, 0, ...blocks); else s.b.push(...blocks); } },
  calc: (c, id) => { c.guia.calcs = c.guia.calcs || []; if (!c.guia.calcs.includes(id)) c.guia.calcs.push(id); },
  fonte: (c, ...ks) => { c.evid.fontes = c.evid.fontes || []; ks.forEach(k => { if (!c.evid.fontes.includes(k)) c.evid.fontes.push(k); }); },
  muda: (c, t) => { c.mudancas = c.mudancas || []; c.mudancas.push("Revisão 10/10/2026: " + t); },
  ul: (c, re, from, to) => { const s = R25.sec(c, re); if (!s) return; s.b.forEach(b => { const L = b.ul || b.ol; if (L) L.forEach((x, i) => { if (x.includes(from)) L[i] = to; }); }); }
};

const REV25 = {
  // ── calculadoras da usuária + fluxos (crônicos)
  "cr-vitd": c => {
    R25.calc(c, "vitd_full");
    R25.add(c, /Quando dosar/, [{fluxo: [
      {t: "Pedido de 25(OH)D", ramos: [
        {r: "Sem grupo de risco", n: [{t: "Não dosar: o resultado não muda conduta", k: "ok"}]},
        {r: "Grupo de risco (lista abaixo)", n: [{t: "Dosar 25(OH)D"}]}]},
      {t: "Resultado", ramos: [
        {r: "< 20 ng/mL", n: [{t: "Repor com dose diária ou semanal; nova dosagem em 8–12 semanas", k: "warn"}]},
        {r: "20–30 ng/mL", n: [{t: "Grupo de risco: manutenção (meta 30–60)", k: "warn"}]},
        {r: "> 100 ng/mL", n: [{t: "Suspender: risco de hipercalcemia", k: "stop"}]}]}
    ], nota: "Síntese das faixas e indicações deste guia (USPSTF 2021, Endocrine Society 2024, SBPC/SBEM) [C]. Megadoses mensais ou anuais: evitar [C]."}], "start");
    c.guia.secoes.push({t: "Calculadora completa de reposição (sua)", b: [
      {nota: "Sua calculadora de hipovitaminose D, integrada sem alterar o desenho original. Revisão de 10/10/2026: a RENAME 2024 tem só carbonato de cálcio + colecalciferol 200 ou 400 UI (Básico) [F]; a REMUME de Betim tem carbonato de cálcio 1.250 mg, sem colecalciferol [F]."},
      {calc: "vitd_full"},
      {ref: ["vitd_guias", "rename", "remume"]}]});
    R25.muda(c, "fluxograma de indicação e interpretação; sua calculadora completa de vitamina D integrada.");
  },
  "cr-b12": c => {
    R25.calc(c, "b12_full");
    R25.add(c, /Quem dosar/, [{fluxo: [
      {t: "Risco: metformina, IBP prolongado, bariátrica/gastrectomia, dieta vegana, celíaca/Crohn, idoso com neuropatia ou declínio cognitivo"},
      {t: "Dosar B12 (com hemograma)"},
      {t: "Deficiência confirmada", ramos: [
        {r: "Sintomas neurológicos graves", n: [{t: "Iniciar IM; depois manter oral ou IM", k: "stop"}]},
        {r: "Sem déficit neurológico grave", n: [{t: "Oral 1.000–2.000 mcg/dia", k: "ok"}]}]},
      {t: "Rever a causa: manter a metformina se indicada (B12 anual); reavaliar a indicação do IBP"}
    ], nota: "Oral × IM: Cochrane 2018, certeza baixa [F]; demais passos [C]. Detalhe de doses e apresentações na sua calculadora abaixo."}], "start");
    c.guia.secoes.push({t: "Calculadora completa de reposição (sua)", b: [
      {nota: "Sua calculadora de hipovitaminose B12, integrada sem alterar o desenho original. Revisão de 10/10/2026: a RENAME 2024 tem cianocobalamina 500 mcg/mL injetável (Básico) [F]; o item não consta da REMUME de Betim [F]; B12 oral em dose alta não está na RENAME [F]."},
      {calc: "b12_full"},
      {ref: ["cochrane_b12", "rename", "remume"]}]});
    R25.fonte(c, "rename", "remume");
    R25.muda(c, "fluxograma e sua calculadora completa de B12 integrada.");
  },
  "cr-ferro": c => {
    R25.calc(c, "ferro_full");
    R25.add(c, /Investigar a causa/, [{fluxo: [
      {t: "Ferritina < 30 ng/mL (< 100 com inflamação, DRC ou IC) e/ou saturação de transferrina < 20%"},
      {t: "Quem é?", ramos: [
        {r: "Homem ou mulher pós-menopausa", n: [{t: "Investigar perda digestiva (endoscopia e colonoscopia); não tratar só com ferro", k: "stop"}]},
        {r: "Mulher em idade fértil", n: [{t: "Perda menstrual, gestação, dieta; investigar o trato digestivo se sintomas, sem causa aparente ou sem resposta", k: "warn"}]}]},
      {t: "Ferro oral 1×/dia ou em dias alternados; Hb deve subir ≥ 1 g/dL em 2–4 semanas"},
      {t: "Sem resposta ou intolerância?", ramos: [
        {r: "Sim", n: [{t: "Rever adesão, perda contínua, má absorção (celíaca, H. pylori) e diagnóstico; considerar sacarato EV", k: "warn"}]}]}
    ], nota: "BSG 2021 [C] e conteúdo deste guia. Sacarato de hidróxido férrico EV consta da REMUME de Betim [F]."}], "start");
    const i = c.guia.secoes.findIndex(s => /Tratamento/.test(s.t));
    c.guia.secoes.splice(i + 1, 0, {t: "Calculadora completa de reposição (sua)", b: [
      {nota: "Sua calculadora de estadiamento e reposição de ferro (oral e EV), integrada sem alterar o desenho original. Revisão de 10/10/2026: o PCDT de Anemia por Deficiência de Ferro de 2014 ainda é o listado pelo MS; carboximaltose (Portaria SECTICS 20/2023) e derisomaltose (Portaria SECTICS 49/2024) foram incorporadas, com acesso conforme PCDT; o sacarato EV está na REMUME de Betim [F]."},
      {calc: "ferro_full"},
      {ref: ["rename", "remume"]}]});
    R25.muda(c, "fluxograma de investigação e sua calculadora completa de ferro integrada.");
  },
  "cr-has": c => {
    R25.add(c, /Escalonamento/, [
      {fig: {src: "img/has-fluxo-tratamento.webp", leg: "Figura 7.4 – Fluxograma do tratamento medicamentoso da hipertensão arterial", fonte: "Diretriz Brasileira de Hipertensão Arterial 2025 (SBC/SBH/SBN)"}},
      {nota: "Na REMUME de Betim: enalapril 10 e 20 mg, losartana 50 mg, anlodipino 5 mg, hidroclorotiazida 25 mg, espironolactona 25 e 100 mg, atenolol, carvedilol e propranolol [F]. Associações em dose fixa (comprimido único) não aparecem na lista consultada [F]: use os componentes separados."}]);
    R25.add(c, /Seguimento e encaminhamento/, [
      {fig: {src: "img/has-encaminhamento.webp", leg: "Quadro 14.9 – Condições clínicas que justificam o encaminhamento ao especialista", fonte: "Diretriz Brasileira de Hipertensão Arterial 2025 (SBC/SBH/SBN)"}}]);
    R25.fonte(c, "dbha2025");
    R25.muda(c, "Figura 7.4 (escalonamento) e Quadro 14.9 (encaminhamento) da Diretriz 2025.");
  },
  "cr-has-resistente": c => {
    R25.add(c, /4º fármaco/, [
      {fig: {src: "img/has-har-fluxo.webp", leg: "Figura 12.5 – Fluxograma do tratamento da hipertensão resistente", fonte: "Diretriz Brasileira de Hipertensão Arterial 2025 (SBC/SBH/SBN)"}},
      {nota: "Implementação em Betim: a REMUME tem hidroclorotiazida 25 mg e espironolactona 25/100 mg; clortalidona e indapamida não constam da lista consultada [F]. Com TFG ≤ 30, o diurético de alça disponível é a furosemida 40 mg [F]."}], "start");
    R25.fonte(c, "dbha2025", "remume");
    R25.muda(c, "Figura 12.5 da Diretriz 2025 com nota de disponibilidade em Betim.");
  },
  "cr-drc": c => {
    R25.add(c, /Freando a progressão/, [
      {fig: {src: "img/drc-pcdt-fluxo.webp", leg: "Figura 1 – Fluxograma para diagnóstico e tratamento de pacientes com fatores de risco ou diagnóstico de DRC", fonte: "Ministério da Saúde. PCDT Estratégias para atenuar a progressão da DRC (Portaria Conjunta SAES/SECTICS nº 11/2024)"}},
      {nota: "Pelo PCDT: seguimento na APS nos estágios 1, 2 e 3A (exceto A3); IECA ou BRA se diabético com RAC > 30 mg/g ou não diabético com RAC > 300 mg/g; associar dapagliflozina se TFG 25–75 mL/min e DM2 ou RAC > 300 mg/g [F]."}], "start");
    R25.fonte(c, "pcdt_drc");
    R25.muda(c, "Figura 1 do PCDT DRC 2024.");
  },
  "cr-demencia": c => {
    R25.add(c, /Rastrear e investigar/, [{fluxo: [
      {t: "Queixa de memória (paciente ou família) ou perda funcional"},
      {t: "Teste breve: 10-CS ≤ 7 ou QMC8 ≥ 4?", ramos: [
        {r: "Não", n: [{t: "Reavaliar em até 6 meses se a queixa persistir", k: "ok"}]},
        {r: "Sim", n: [{t: "Avaliação cognitiva (fluência verbal, relógio) e excluir delirium, depressão, déficit sensorial e medicamentos"}]}]},
      {t: "Exames: hemograma, creatinina, eletrólitos, TSH, B12, albumina, enzimas hepáticas, sífilis, HIV; neuroimagem se disponível"},
      {t: "Causa reversível?", ramos: [
        {r: "Sim", n: [{t: "Tratar e reavaliar a cognição", k: "ok"}]},
        {r: "Não", n: [{t: "Demência provável: plano de cuidado com a família; critérios do PCDT 2025 na calculadora", k: "warn"}]}]}
    ], nota: "MS 2024 (demência na APS) e PCDT Alzheimer 2025 [F]."}], "start");
    R25.muda(c, "fluxograma de investigação.");
  },
  "cr-pe-diabetico": c => {
    R25.add(c, /Estratificar o risco/, [{fluxo: [
      {t: "Pessoa com DM: exame dos pés ao menos anual (monofilamento 10 g, pulsos, inspeção)"},
      {t: "Achados", ramos: [
        {r: "Sem PSP e sem DAP", n: [{t: "Categoria 0: anual", k: "ok"}]},
        {r: "PSP ou DAP", n: [{t: "Categoria 1: 6–12 meses + educação", k: "warn"}]},
        {r: "PSP/DAP combinadas ou com deformidade", n: [{t: "Categoria 2: 3–6 meses + calçado adequado", k: "warn"}]},
        {r: "PSP ou DAP + úlcera prévia, amputação ou diálise", n: [{t: "Categoria 3: 1–3 meses, cuidado integrado", k: "stop"}]}]},
      {t: "Úlcera ativa, infecção ou isquemia: avaliação no mesmo dia e encaminhamento com prioridade", k: "stop"}
    ], nota: "Categorias IWGDF [C] e intervalos da SBD [F]; último passo [C]."}], 1);
    R25.muda(c, "fluxograma de estratificação.");
  },
  "cr-hipertireoidismo": c => {
    R25.add(c, /Interpretar/, [{fluxo: [
      {t: "TSH baixo"},
      {t: "T4 livre (e T3)", ramos: [
        {r: "T4L alto", n: [{t: "Hipertireoidismo franco: betabloqueador + tiamazol e encaminhar à endocrinologia", k: "stop"}]},
        {r: "T4L normal, T3 alto", n: [{t: "T3-toxicose: conduzir como hipertireoidismo", k: "stop"}]},
        {r: "T4L e T3 normais", n: [{t: "Subclínico: repetir TSH; tratar conforme TSH, idade, coração e osso", k: "warn"}]}]},
      {t: "Em uso de tiamazol: febre ou dor de garganta → parar e hemograma no mesmo dia", k: "stop"}
    ], nota: "TelessaúdeRS – TeleCondutas Hipertireoidismo [F]."}], "start");
    R25.muda(c, "fluxograma de interpretação do TSH baixo.");
  },
  "cr-polifarmacia": c => {
    R25.add(c, /Como desprescrever/, [{fluxo: [
      {t: "Idoso com ≥ 5 medicamentos: revisar o 'saco de remédios' (inclui chás e comprados)"},
      {t: "Para cada um: há indicação atual e benefício no tempo de vida esperado?", ramos: [
        {r: "Não, ou dano > benefício", n: [{t: "Desprescrever um de cada vez; reduzir aos poucos se houver rebote", k: "warn"}]},
        {r: "Sim", n: [{t: "Manter; conferir dose pela função renal e interações", k: "ok"}]}]},
      {t: "Sintoma novo? Antes de acrescentar, pensar em efeito adverso (cascata)", k: "warn"},
      {t: "Retorno combinado para checar retorno dos sintomas"}
    ], nota: "Beers 2023 e STOPP/START v3 [C]."}], "start");
    R25.muda(c, "fluxograma de desprescrição.");
  },

  // ── infectologia
  "in-ist": c => {
    R25.add(c, /Corrimento uretral/, [{fluxo: [
      {t: "Corrimento uretral ou cervicite"},
      {t: "Tratar no mesmo dia: ceftriaxona 500 mg IM + azitromicina 1 g VO", k: "warn"},
      {t: "Testar HIV, sífilis e hepatites; tratar parcerias (8 semanas se sintomático; 6 meses se assintomático)"},
      {t: "Retorno em 7 dias", ramos: [
        {r: "Remissão", n: [{t: "Cura", k: "ok"}]},
        {r: "Persistência", n: [{t: "Rever reinfecção e adesão; tricomonas (metronidazol); falha de gonorreia: ceftriaxona 500 mg + azitromicina 2 g", k: "stop"}]}]}
    ], nota: "PCDT IST 2020, capítulo de corrimento uretral (RESS 2021) [F]."}], "start");
    R25.ul(c, /Parcerias e prevenção/, "Doxi-PEP", "**Doxi-PEP:** ampliação de uso da doxiciclina 100 mg aprovada pela CONITEC (Relatório nº 1.089/2026): 200 mg em dose única até 72 h após sexo sem preservativo, no máximo 1 dose/dia; plano de implementação para HSH e mulheres trans com ≥ 1 IST bacteriana nos últimos 12 meses, começando pela rede especializada; efeito pequeno sobre gonorreia [F].");
    R25.add(c, /Parcerias e prevenção/, [{ref: ["doxipep_conitec"]}]);
    R25.fonte(c, "doxipep_conitec");
    R25.muda(c, "fluxograma do corrimento uretral; doxi-PEP atualizada pelo Relatório CONITEC nº 1.089/2026.");
  },
  "in-sifilis": c => {
    R25.add(c, /Seguimento e interpretação/, [{fluxo: [
      {t: "Tratado, com VDRL do dia da 1ª dose"},
      {t: "VDRL trimestral até 12 meses (gestante: mensal)"},
      {t: "Queda ≥ 2 diluições em 6 meses (recente) ou 12 meses (tardia)?", ramos: [
        {r: "Sim", n: [{t: "Resposta adequada; títulos baixos persistentes sem nova exposição = cicatriz sorológica", k: "ok"}]},
        {r: "Não, subiu ≥ 2 diluições ou clínica persiste", n: [{t: "Retratar; sem nova exposição, investigar neurossífilis (PVHIV: em todo retratamento)", k: "stop"}]}]}
    ], nota: "PCDT IST 2020 – sífilis adquirida (RESS 2021) [F]."}], 1);
    R25.muda(c, "fluxograma do seguimento sorológico.");
  },
  "in-prep": c => {
    R25.add(c, /PrEP oral/, [{fluxo: [
      {t: "Exposição sexual de risco"},
      {t: "Há quanto tempo?", ramos: [
        {r: "≤ 72 h", n: [{t: "PEP por 28 dias (teste de HIV antes), idealmente nas primeiras 2 h", k: "stop"}]},
        {r: "> 72 h", n: [{t: "Sem PEP: testar HIV e IST, repetir na janela e oferecer PrEP", k: "warn"}]}]},
      {t: "Risco recorrente?", ramos: [
        {r: "Sim", n: [{t: "PrEP (≥ 15 anos, ≥ 35 kg, HIV não reagente, ClCr ≥ 60): converter PEP em PrEP", k: "ok"}]}]}
    ], nota: "PCDT PrEP [F]; PEP [C]."}], "start");
    R25.ul(c, /PrEP oral/, "Cabotegravir", "**Cabotegravir injetável** (2 doses com 4 semanas de intervalo e depois a cada 8 semanas): recomendação preliminar favorável da CONITEC em agosto de 2026 (consulta pública nº 76/2026); decisão final e portaria de incorporação não localizadas até 10/10/2026 [F].");
    R25.ul(c, /PEP e doxi-PEP/, "Doxi-PEP", "Doxi-PEP: doxiciclina 200 mg em dose única até 72 h após sexo sem preservativo (máx. 1 dose/dia), para HSH e mulheres trans com ≥ 1 IST bacteriana nos últimos 12 meses, conforme plano de implementação da CONITEC (Relatório nº 1.089/2026); oferta começando pela rede especializada [F].");
    R25.add(c, /PEP e doxi-PEP/, [{ref: ["doxipep_conitec"]}]);
    R25.fonte(c, "doxipep_conitec");
    R25.muda(c, "fluxograma PEP→PrEP; situação do cabotegravir e da doxi-PEP atualizada.");
  },
  "in-iltb": c => {
    R25.add(c, /Avaliação de contatos/, [{fluxo: [
      {t: "Contato de TB (domicílio, trabalho, escola) – priorizar < 5 anos, PVHIV e imunossuprimidos"},
      {t: "Sintomático?", ramos: [
        {r: "Sim", n: [{t: "Investigar TB ativa (TRM-TB, RX)", k: "stop"}]},
        {r: "Não", n: [{t: "PT ou IGRA + RX de tórax"}]}]},
      {t: "ILTB confirmada ou indicação sem teste (RN coabitante de bacilífero; PVHIV com CD4 ≤ 350)?", ramos: [
        {r: "Sim", n: [{t: "Tratar (3HP preferencial) e notificar no IL-TB", k: "warn"}]},
        {r: "Não", n: [{t: "Orientar sinais de TB e reavaliar se surgirem", k: "ok"}]}]}
    ], nota: "Manual de TB 2019 e SES-MG NT 1/2023 [C/F]."}], "start");
    R25.muda(c, "fluxograma de avaliação de contatos.");
  },
  "in-tb": c => {
    R25.add(c, /Diagnóstico/, [{fluxo: [
      {t: "Sintomático respiratório: tosse ≥ 3 semanas (populações vulneráveis: qualquer duração)"},
      {t: "TRM-TB (ou baciloscopia em 2 amostras) + teste de HIV", ramos: [
        {r: "MTB detectado, sensível à rifampicina", n: [{t: "Notificar; esquema básico com TDO; avaliar contatos", k: "warn"}]},
        {r: "Resistência à rifampicina", n: [{t: "Referência: cultura com teste de sensibilidade e esquema especial", k: "stop"}]},
        {r: "Não detectado e suspeita mantida", n: [{t: "Cultura, RX e reavaliação; considerar outros diagnósticos", k: "warn"}]}]}
    ], nota: "Manual de TB 2019 [C]; último ramo: inferência clínica [I]."}], "start");
    const s = R25.sec(c, /Esquema básico/);
    if (s) s.b.forEach(b => { if (b.tab && b.nota) b.nota = b.nota.replace("Quadro 1 da Nota Informativa SMS-SP 07/23, baseada no Manual MS 2019 [F].", "Quadro 1 da Nota Informativa SMS-SP 07/23, mantido na NI PMCT 10/2026 (03/06/2026) [F]."); });
    R25.add(c, /Esquema básico/, [{ref: ["tb_pmsp2026"]}]);
    const iA = c.guia.secoes.findIndex(x => /Acompanhamento/.test(x.t));
    c.guia.secoes.splice(iA + 1, 0, {t: "Crianças, formas especiais e alta por cura", b: [
      {ul: [
        "**TB não grave em crianças e adolescentes** (a nota cita 3 meses a 16 anos), sensível: esquema encurtado de **4 meses – 2RHZE/2RH**; prolongar para ≥ 6 meses se a evolução for insatisfatória ou se os critérios mudarem [F].",
        "Critérios de 'não grave': sintomas leves sem internação; linfonodo periférico isolado; baciloscopia negativa; RX sem cavitação, restrito a 1 lobo, sem padrão miliar e sem obstrução de via aérea; pleural não complicada [F].",
        "**TB óssea e do SNC:** 12 meses (2 meses de RHZE + 10 de RH) [F].",
        "**Alta por cura (pulmonar):** 2 baciloscopias ou culturas negativas – uma em qualquer mês do acompanhamento e outra no final (5º ou 6º mês); sem bacteriologia possível, ≥ 180 doses sem sinais de falha permitem alta por critério clínico-radiológico [F].",
        "Função hepática no início e em 15 dias [F]."]},
      {alerta: "Inferência clínica: o esquema pediátrico encurtado e a TB em menores de 10 anos devem ser conduzidos junto à referência de TB/pediatria do município [I]."},
      {ref: ["tb_pmsp2026"]}]});
    R25.fonte(c, "tb_pmsp2026");
    R25.muda(c, "fluxograma diagnóstico; NI SMS-SP 10/2026 (esquema encurtado pediátrico, TB óssea/SNC, alta por cura).");
  },
  "in-hansen": c => {
    R25.add(c, /Diagnóstico e classificação/, [{fluxo: [
      {t: "Lesão de pele com alteração de sensibilidade e/ou nervo periférico espessado com alteração"},
      {t: "Classificação operacional", ramos: [
        {r: "1–5 lesões e baciloscopia negativa", n: [{t: "PB: PQT-U 6 doses em até 9 meses", k: "warn"}]},
        {r: "> 5 lesões e/ou baciloscopia positiva – ou dúvida", n: [{t: "MB: PQT-U 12 doses em até 18 meses", k: "warn"}]}]},
      {t: "Notificar; avaliação neurológica simplificada (início, a cada 3 meses e na alta); examinar contatos dos últimos 5 anos"},
      {t: "Neurite aguda ou reação com olho/testículo: corticoide no mesmo dia + referência", k: "stop"}
    ], nota: "PCDT Hanseníase 2022 [F]."}], "start");
    const s = R25.sec(c, /PQT-U/);
    if (s) {
      s.t = "PQT-U (adulto e criança)";
      s.b.forEach(b => { if (b.tab && b.nota) b.nota = b.nota.replace(" Crianças < 50 kg: dose ajustada – conferir PCDT [NV].", ""); });
      R25.add(c, /PQT-U/, [
        {h: "Abaixo de 50 kg (PCDT 2022, Quadro 1)"},
        {tab: {h: ["Peso", "Dose mensal supervisionada", "Dose diária autoadministrada", "Apresentação"], r: [
          ["30–50 kg (criança ou adulto)", "Rifampicina 450 mg + clofazimina 150 mg + dapsona 50 mg [F]", "Clofazimina 50 mg em dias alternados + dapsona 50 mg/dia [F]", "PQT-U infantil [F]"],
          ["< 30 kg", "Rifampicina 10 mg/kg + clofazimina 6 mg/kg + dapsona 2 mg/kg [F]", "Clofazimina 1 mg/kg/dia + dapsona 2 mg/kg/dia [F]", "Adaptação da PQT-U infantil; rifampicina suspensão 20 mg/mL [F]"]]},
          nota: "Duração igual à do adulto: PB 6 doses em até 9 meses; MB 12 em até 18 meses [F]. Clofazimina < 30 kg: só há cápsulas de 50 e 100 mg – calcular a dose semanal e dividir em 2–3 tomadas (ex.: 15 kg → 105 mg/semana ≈ 1 cápsula de 50 mg 2×/semana) [F]."},
        {ref: ["pcdt_hansen2022"]}]);
    }
    c.nv = (c.nv || []).filter(x => !/Doses de PQT-U/.test(x));
    R25.muda(c, "fluxograma diagnóstico; doses pediátricas e < 50 kg conferidas no Quadro 1 do PCDT 2022 (antes [NV]).");
  },

  // ── mulher, rastreios e homem
  "mu-mama": c => {
    R25.add(c, /Sinais de suspeita/, [{fluxo: [
      {t: "Queixa mamária ou achado no exame"},
      {t: "Sinal de suspeita (lista abaixo)?", ramos: [
        {r: "Sim", n: [{t: "Encaminhar com urgência à mastologia, mesmo com mamografia recente normal", k: "stop"}]},
        {r: "Não", n: [{t: "Exame conforme idade: jovem (< 30–35 anos) → USG; demais → mamografia ± USG"}]}]},
      {t: "BI-RADS", ramos: [
        {r: "0", n: [{t: "Completar a imagem"}]},
        {r: "1–2", n: [{t: "Rotina", k: "ok"}]},
        {r: "3", n: [{t: "Controle em 6 meses", k: "warn"}]},
        {r: "4–5", n: [{t: "Biópsia: mastologia", k: "stop"}]}]}
    ], nota: "MS NT 626/2025 [F]; BI-RADS e escolha do exame por idade [C]."}], "start");
    R25.muda(c, "fluxograma de queixa mamária.");
  },
  "pv-colorretal": c => {
    R25.add(c, /Diretriz brasileira/, [{fluxo: [
      {t: "50–75 anos, risco padrão"},
      {t: "Sangramento retal, mudança de hábito, anemia ferropriva ou perda de peso?", ramos: [
        {r: "Sim", n: [{t: "Não é rastreio: investigação diagnóstica", k: "stop"}]},
        {r: "Não", n: [{t: "Avaliar risco familiar, Lynch, polipose, DII"}]}]},
      {t: "Alto risco?", ramos: [
        {r: "Sim", n: [{t: "Colonoscopia/seguimento especializado", k: "warn"}]},
        {r: "Não", n: [{t: "FIT bienal (corte 50 ng/mL)", k: "ok"}]}]},
      {t: "FIT positivo → colonoscopia diagnóstica, com busca ativa de quem não fez", k: "stop"}
    ], nota: "Relatório preliminar CONITEC CP 20/2026 [F]; alto risco [C]."}], "start");
    R25.muda(c, "fluxograma do rastreio com FIT.");
  },
  "ho-psa": c => {
    R25.add(c, /Se o PSA foi pedido/, [{fluxo: [
      {t: "Homem pede PSA ou tem 55–69 anos (45+ se negro ou com parente de 1º grau)"},
      {t: "Toque retal alterado ou sintomas suspeitos?", ramos: [
        {r: "Sim", n: [{t: "Investigação diagnóstica, não rastreio; toque alterado → urologia", k: "stop"}]},
        {r: "Não", n: [{t: "Decisão compartilhada: benefício pequeno × sobrediagnóstico"}]}]},
      {t: "Optou por dosar e o PSA veio elevado?", ramos: [
        {r: "Sim", n: [{t: "Repetir em 6–8 semanas (sem ejaculação ou ciclismo 48 h; tratar ITU/prostatite); em uso de finasterida, multiplicar por 2", k: "warn"}]}]},
      {t: "Persistentemente elevado → urologia", k: "warn"}
    ], nota: "MS NT 9/2023 [F]; demais passos [C]."}], "start");
    R25.muda(c, "fluxograma do PSA.");
  },

  // ── demanda: tabagismo (PCDT 2020)
  "tabagismo": c => {
    c.rx[0] = {trilha: "ambos", titulo: "TRN – PCDT 2020 (adesivo pelo nº de cigarros/dia + goma ou pastilha)",
      texto: "USO TRANSDÉRMICO\n1. Nicotina adesivo ___ mg ______ ___ adesivos\n   Aplicar 1 adesivo por dia a partir da data de parada (não fumar com o adesivo).\n   Dose inicial: 6–10 cig/dia → 7 mg; 11–19 → 14 mg; ≥ 20 → 21 mg.\n   > 20 cig/dia com dificuldade de reduzir: 21 + 7 mg (21–30 cig), 21 + 14 mg (31–40), 21 + 21 mg (> 40); máximo 42 mg/dia.\n   Associação de adesivos: retirar 7 mg por semana, conforme os sintomas de abstinência.\n\nUSO ORAL (fissura)\n2. Nicotina goma 2 mg (ou pastilha) ______ ___ unidades\n   Usar 1 unidade quando houver fissura.\n   Até 5 cig/dia: só goma ou pastilha, sem adesivo (até 5 de 2 mg ou 3 de 4 mg por dia).",
      dose: "F", nota: "PCDT Tabagismo 2020 (Portaria Conjunta nº 10, 16/04/2020) [F]: 1 mg de nicotina por cigarro; TRN combinada (adesivo + goma/pastilha) é a opção preferencial; começar só no dia da parada. Betim tem pastilha de 4 mg. Duração e desmame do adesivo isolado: conferir PCDT completo [NV]."};
    if (c.rx[1]) { c.rx[1].texto = "USO ORAL\n1. Bupropiona 150 mg ______ ___ comprimidos\n   Do 1º ao 3º dia: 1 comprimido pela manhã.\n   Do 4º ao 84º dia: 1 comprimido pela manhã e outro 8 horas depois."; c.rx[1].titulo = "Bupropiona – PCDT 2020"; c.rx[1].nota = "Contraindicada se convulsão prévia, transtorno alimentar, abstinência alcoólica, gestação/amamentação, IMAO. Receituário de controle especial (Portaria SVS 344/98, conforme o PCDT) [F]. Data de parada habitualmente na 2ª semana de uso [C]."; }
    if (c.rx[2]) c.rx[2].nota = "Não consta na RENAME nem no PCDT 2020 (que prevê só TRN e bupropiona). Disponibilidade comercial no Brasil: não verificada.";
    c.idealsus.sus = "Betim tem adesivos de 7, 14 e 21 mg, goma 2 mg, pastilha 4 mg e bupropiona 150 mg. O PCDT 2020 prevê TRN e bupropiona; vareniclina não consta.";
    c.nv = ["Duração do adesivo em monoterapia e desmame: conferir o PCDT 2020 completo (aberta a versão resumida oficial).", "Vareniclina: disponibilidade no Brasil e posologia não verificadas."];
    c.guia = {
      resumo: "O PCDT 2020 tornou a **TRN combinada** (adesivo + goma/pastilha) a opção **preferencial**, com dose pelo **número de cigarros/dia** (1 mg de nicotina por cigarro, máximo 42 mg). Aconselhamento sem remédio basta para quem fuma pouco e tem baixa dependência. Recaída faz parte – tente de novo.",
      calcs: ["trn"],
      secoes: [
        {t: "Quem precisa de remédio", b: [
          {fluxo: [
            {t: "Fumante motivado: abordagem breve (PAAPA) + aconselhamento estruturado (4 sessões, de preferência semanais)"},
            {t: "Gestante, nutriz ou < 18 anos?", ramos: [
              {r: "Sim", n: [{t: "Aconselhamento estruturado sem medicamento", k: "warn"}]},
              {r: "Não", n: [{t: "Avaliar dependência"}]}]},
            {t: "≤ 5 cig/dia, 1º cigarro > 1 h após acordar, Fagerström ≤ 4 ou sem abstinência?", ramos: [
              {r: "Sim (≥ 1 critério)", n: [{t: "Aconselhamento isolado é o preconizado", k: "ok"}]},
              {r: "Não", n: [{t: "Aconselhamento + farmacoterapia: TRN combinada (preferencial) ou bupropiona", k: "warn"}]}]}
          ], nota: "PCDT Tabagismo 2020 – versão resumida oficial [F]."},
          {calc: "trn"},
          {ref: ["pcdt_tabaco"]}]},
        {t: "Esquemas do PCDT 2020", b: [
          {tab: {h: ["Cigarros/dia", "Adesivo inicial", "Forma rápida"], r: [
            ["≤ 5", "Não usar adesivo [F]", "Goma ou pastilha: até 5 de 2 mg ou 3 de 4 mg/dia [F]"],
            ["6–10", "7 mg/dia [F]", "Para fissura [F]"],
            ["11–19", "14 mg/dia [F]", "Para fissura [F]"],
            ["≥ 20", "21 mg/dia [F]", "Para fissura [F]"],
            ["> 20–30 (dificuldade de reduzir)", "21 + 7 mg/dia [F]", "Para fissura [F]"],
            ["> 30–40", "21 + 14 mg/dia [F]", "Para fissura [F]"],
            ["> 40", "21 + 21 mg/dia (máximo 42 mg) [F]", "Para fissura [F]"]]},
           nota: "Associação de adesivos: retirar 7 mg por semana conforme a abstinência [F]. Opções à TRN combinada: bupropiona isolada, TRN isolada ou bupropiona + uma forma de TRN [F]. Bupropiona 150 mg: 1×/dia do 1º ao 3º dia e 2×/dia (8 h de intervalo) até o 84º dia [F]."},
          {perola: {t: "Adesivo só no dia D", x: "A TRN começa na data em que a pessoa para de fumar e não deve ser usada junto com o cigarro. Já a bupropiona começa antes da data de parada.", d: "menos efeito adverso e mais adesão.", l: "F"}},
          {ref: ["pcdt_tabaco", "remume"]}]},
        {t: "Situações especiais e seguimento", b: [
          {ul: [
            "Transtorno psiquiátrico (inclusive em tratamento de álcool e outras drogas): oferecer cessação, com farmacoterapia, em paralelo ao cuidado em saúde mental [F].",
            "Tuberculose em qualquer fase e câncer: tratar o tabagismo com as mesmas medidas, o mais cedo possível [F].",
            "Idosos: mesmo protocolo, salvo contraindicação [F].",
            "Tratamento total de 12 meses (avaliação, intervenção, manutenção); retornos frequentes no início, quando a recaída é mais provável [F].",
            "ACS: busca ativa de quem abandonou e sensibilização de fumantes [F]."]},
          {trio: {ideal: "Vareniclina e TRN combinada são as farmacoterapias mais eficazes (Cochrane 2023).", sus: "PCDT 2020: TRN (adesivo, goma, pastilha) e bupropiona; vareniclina não consta.", ponte: "TRN combinada pelo número de cigarros, com grupo ou aconselhamento estruturado, é o melhor disponível e tem eficácia próxima à da vareniclina."}},
          {ref: ["pcdt_tabaco", "cochrane_tabaco"]}]}
      ]};
    R25.muda(c, "PCDT Tabagismo 2020 (substitui o de 2016): TRN pelo nº de cigarros/dia, TRN combinada preferencial, critérios de aconselhamento isolado; guia com fluxograma e calculadora.");
  },

  // ── demanda: OMA, sinusite e ITU (protocolos colaborativos SUS-BH)
  "oma": c => {
    c.guia = {
      resumo: "Analgesia para todos. Antibiótico logo em **< 6 meses**, **otorreia**, **sintoma grave** ou **6–24 meses com OMA bilateral**; nos demais, **observação vigilante** de 48 h (ou receita de reserva) se a reavaliação for garantida.",
      secoes: [
        {t: "Quem recebe antibiótico (SUS-BH 2021)", b: [
          {fluxo: [
            {t: "Otalgia, irritabilidade ou perda auditiva + otoscopia compatível com OMA"},
            {t: "< 6 meses, otorreia ou sintoma grave (toxemia, otalgia > 48 h, T ≥ 39 °C nas últimas 48 h, acesso incerto)?", ramos: [
              {r: "Sim", n: [{t: "Antibiótico imediato", k: "stop"}]},
              {r: "Não", n: [{t: "Idade e lateralidade"}]}]},
            {t: "Idade", ramos: [
              {r: "6–24 meses, bilateral", n: [{t: "Antibiótico", k: "warn"}]},
              {r: "6–24 meses, unilateral", n: [{t: "Observação vigilante ou receita de reserva, se reavaliação garantida", k: "ok"}]},
              {r: "> 2 anos", n: [{t: "Observação vigilante ou receita de reserva, se reavaliação garantida", k: "ok"}]}]},
            {t: "Sem reavaliação garantida → antibiótico", k: "warn"}
          ], nota: "Protocolo de OMA SUS-BH 2021 [F]. Observação vigilante: aguardar 48 h com analgesia; receita de reserva só se não melhorar em 2–3 dias [F]. Febril < 60 dias com OMA pode exigir avaliação adicional antes do antibiótico [F]."},
          {ref: ["oma_bh2021"]}]},
        {t: "Antibióticos e analgesia", b: [
          {tab: {h: ["Situação", "Esquema", "Duração"], r: [
            ["1ª escolha", "Amoxicilina 90 mg/kg/dia 12/12 h ou 50 mg/kg/dia 8/8 h (decisão compartilhada) [F]", "< 2 anos: 10 dias; ≥ 2 anos: 5–7 dias [F]"],
            ["Síndrome otite-conjuntivite ou antibiótico nos últimos 30 dias", "Amoxicilina + clavulanato: amoxicilina 90 mg/kg/dia + clavulanato 6,4 mg/kg/dia, 12/12 h [F]", "< 2 anos: 10 dias; ≥ 2 anos: 5–7 dias [F]"],
            ["Alergia à penicilina", "Ceftriaxona 50 mg/kg IM 1×/dia (1–3 dias) [F]; azitromicina 10 mg/kg no 1º dia e 5 mg/kg do 2º ao 5º (não preferencial) [F]", "—"]]},
           nota: "Dose alta com pouco clavulanato: 30 mg/kg/dia de amoxicilina+clavulanato + 60 mg/kg/dia de amoxicilina [F]. Analgesia com dipirona, paracetamol ou ibuprofeno é recomendação forte [F]. Anti-histamínico e descongestionante: não recomendados [F]."},
          {perola: {t: "A dor é o sintoma – trate a dor", x: "A maioria das OMA melhora em 2–3 dias. Analgesia regular e retorno combinado evitam antibiótico desnecessário sem aumentar complicações.", d: "menos diarreia e resistência; pais mais seguros.", l: "F"}},
          {ref: ["oma_bh2021", "remume"]}]}
      ]};
    R25.fonte(c, "oma_bh2021");
    R25.muda(c, "guia de decisão com fluxograma e doses do protocolo de OMA SUS-BH 2021.");
  },
  "sinusite": c => {
    c.guia = {
      resumo: "Rinossinusite é **viral** na grande maioria: antibiótico só nos padrões bacterianos – **> 10 dias sem melhora**, **início grave** (febre ≥ 39 °C + secreção purulenta ≥ 3 dias) ou **piora após melhora**. **RX não ajuda** no diagnóstico.",
      secoes: [
        {t: "Viral ou bacteriana?", b: [
          {fluxo: [
            {t: "Sintomas nasais, tosse diurna, dor facial"},
            {t: "Padrão bacteriano?", ramos: [
              {r: "< 10 dias, melhorando", n: [{t: "Provável viral: lavagem nasal, analgesia, observação", k: "ok"}]},
              {r: "> 10 dias sem melhora, início grave ou piora bifásica", n: [{t: "Provável bacteriana"}]}]},
            {t: "Complicação (edema/dor orbitária, diplopia, cefaleia intensa, rigidez de nuca, déficit neurológico, vômitos persistentes)?", ramos: [
              {r: "Sim", n: [{t: "Urgência: imagem (TC) e avaliação especializada", k: "stop"}]},
              {r: "Não", n: [{t: "Antibiótico ou observação de 3 dias (decisão compartilhada) nos quadros não graves", k: "warn"}]}]}
          ], nota: "Critérios IDSA [C]; criança: protocolo SUS-BH 2021 – RX e hemograma não recomendados para o diagnóstico; observação de 3 dias admitida no quadro não complicado (AAP) [F]."},
          {ref: ["idsa_sinusite", "sinus_bh2021"]}]},
        {t: "Tratamento", b: [
          {tab: {h: ["Quem", "Escolha", "Duração"], r: [
            ["Adulto", "Amoxicilina 500 mg 8/8 h; falha em 72 h ou antibiótico recente: amoxicilina+clavulanato 500/125 mg 8/8 h; alergia: doxiciclina [C]", "5–7 dias [C]"],
            ["Criança ≥ 2 anos, não complicada", "Amoxicilina 50 mg/kg/dia 8/8 h ou 80–90 mg/kg/dia 12/12 h [F]", "7–10 dias [F]"],
            ["< 2 anos, creche, antibiótico nas últimas 4 semanas ou doença moderada/grave", "Amoxicilina+clavulanato (dose pela amoxicilina, como acima) [F]", "< 2 anos: 10 dias; ≥ 2 anos: 7–10 dias [F]"],
            ["Vômitos que impedem a via oral", "Ceftriaxona 50 mg/kg/dia IM/EV por 1–3 dias [F]", "—"]]},
           nota: "Medidas gerais: lavagem com soro fisiológico, analgésicos; corticoide nasal se rinite alérgica (recomendação fraca) [F]. Mucolíticos e anti-histamínicos sem evidência em crianças [F]."},
          {ref: ["sinus_bh2021", "idsa_sinusite", "remume"]}]}
      ]};
    R25.fonte(c, "sinus_bh2021");
    R25.muda(c, "guia com fluxograma e doses pediátricas do protocolo SUS-BH 2021.");
  },
  "cistite": c => {
    c.rx[0].dose = "F";
    c.rx[0].nota = "Protocolo SUS-BH 2022 (1ª linha, recomendação forte) [F]. Evitar se ClCr < 30 mL/min e no termo da gestação.";
    if (c.rx[2]) c.rx[2] = {trilha: "sus", titulo: "Alternativa no SUS Betim (protocolo SUS-BH 2022)", texto: "USO ORAL\n1. Amoxicilina 500 mg + clavulanato 125 mg ______ 21 comprimidos\n   Tomar 1 comprimido de 8/8h por 7 dias.", dose: "F", nota: "Alternativa do protocolo SUS-BH 2022 [F]; disponível na REMUME de Betim [F]. Cefalexina não é opção do protocolo para não gestantes. Sulfametoxazol+trimetoprima por 3 dias não recomendado (resistência de E. coli > 20% no Brasil) [F]."};
    c.nv = (c.nv || []).filter(x => !/Posologia da nitrofurantoína/.test(x));
    c.guia = {
      resumo: "Mulher não gestante com disúria/polaciúria **sem corrimento**: diagnóstico **clínico**, sem EAS nem urocultura. **Nitrofurantoína 5 dias** é a 1ª linha no SUS. Febre, dor lombar, homem, gestante ou alteração urológica = **ITU complicada** (outro caminho).",
      secoes: [
        {t: "Diagnóstico e classificação", b: [
          {fluxo: [
            {t: "Disúria, polaciúria, urgência ± dor suprapúbica"},
            {t: "Corrimento vaginal/uretral?", ramos: [
              {r: "Sim", n: [{t: "Investigar vaginite/IST", k: "warn"}]},
              {r: "Não", n: [{t: "ITU provável"}]}]},
            {t: "Febre, dor lombar, sinais sistêmicos, gestante, homem, anomalia urológica, cateter, DRC ou imunossupressão?", ramos: [
              {r: "Não", n: [{t: "Cistite não complicada: tratar sem exame", k: "ok"}]},
              {r: "Sim", n: [{t: "ITU complicada: urocultura e conduta própria (ver Pielonefrite / ITU na gestante)", k: "stop"}]}]},
            {t: "Sem melhora em 48–72 h, recorrência ou dúvida → EAS e urocultura", k: "warn"}
          ], nota: "Protocolo colaborativo SUS-BH 2022 (GRADE) [F]. Idoso frágil com delirium: não pedir exame de urina de rotina – bacteriúria assintomática é comum [F]."},
          {ref: ["itu_bh2022"]}]},
        {t: "Tratamento", b: [
          {tab: {h: ["Opção", "Esquema", "SUS/Betim"], r: [
            ["1ª linha", "Nitrofurantoína 100 mg 6/6 h por 5 dias [F]", "REMUME [F]"],
            ["1ª linha", "Fosfomicina 3 g dose única [F]", "Não consta da RENAME nem da REMUME [F]"],
            ["Alternativa", "Amoxicilina+clavulanato 500/125 mg 8/8 h por 7 dias [F]", "REMUME [F]"],
            ["Não usar de rotina", "Fluoroquinolonas e aminopenicilinas (resistência e ESBL); SMX-TMP 3 dias (resistência > 20%) [F]", "—"]]}},
          {ref: ["itu_bh2022", "rename", "remume"]}]},
        {t: "ITU de repetição", b: [
          {ul: [
            "Medidas: 2–3 L de líquidos/dia, micção pós-coito, evitar espermicidas [F].",
            "Pós-menopausa: estrogênio vaginal (estriol 1 mg/g ou estrogênios conjugados creme constam da RENAME) [F].",
            "Profilaxia antibiótica não é 1ª linha; considerar se recorrências frequentes e limitantes, após aconselhamento; reavaliar em 3 meses e manter até 1 ano [F].",
            "Relacionada ao coito: nitrofurantoína 100 mg ou SMX-TMP 400/80 mg (½–1 cp) em dose única pós-coito [F].",
            "Contínua: nitrofurantoína 100 mg/noite ou SMX-TMP 400/80 mg diário ou 3×/semana por 3–6 meses [F].",
            "Bacteriúria assintomática fora da gestação: não tratar (inclusive em ITU recorrente, diabéticos, idosos) [F]."]},
          {ref: ["itu_bh2022"]}]}
      ]};
    R25.fonte(c, "itu_bh2022");
    R25.muda(c, "protocolo SUS-BH 2022: doses conferidas; alternativa do SUS trocada de cefalexina para amoxicilina+clavulanato; guia com fluxograma e ITU de repetição.");
  },
  "pielonefrite": c => {
    if (c.rx[1]) { c.rx[1].dose = "F"; c.rx[1].nota = "Protocolo SUS-BH 2022 (1ª linha, 7 dias) [F]; IDSA 2025: 5–7 dias de fluoroquinolona em quem melhora [C]. Alternativa (SUS-BH 2022): amoxicilina+clavulanato 500/125 mg 8/8 h por 7 dias [F]. Resistência local de E. coli em Betim: não verificada."; }
    if (c.rx[0]) c.rx[0].nota = "O protocolo SUS-BH 2022 descreve a dose inicial EV (ceftriaxona 1–2 g, ciprofloxacino 400 mg ou gentamicina 5 mg/kg) [F]; a via IM é a disponível na UBS (ceftriaxona 1 g IM na REMUME) [F].";
    c.nv = (c.nv || []).filter(x => !/^Doses: conferir bula/.test(x));
    c.guia = {
      resumo: "Pielonefrite **não complicada** e estável: tratamento **ambulatorial** com dose inicial parenteral e **ciprofloxacino 7 dias**. Rastreie **sepse** (NEWS 2) e reconheça a **complicada** (gestante, homem, anomalia urológica, DRC, imunossupressão), que vai para internação.",
      secoes: [
        {t: "Onde tratar", b: [
          {fluxo: [
            {t: "Febre, dor lombar/flanco, Giordano + sintomas urinários"},
            {t: "Sepse (NEWS 2 ≥ 5 ou 1 parâmetro vermelho) ou disfunção orgânica?", ramos: [
              {r: "Sim", n: [{t: "Protocolo de sepse na 1ª hora e transferência", k: "stop"}]},
              {r: "Não", n: [{t: "Classificar"}]}]},
            {t: "Complicada (gestante, homem, anomalia/obstrução, cateter, DRC, imunossupressão) ou vômitos?", ramos: [
              {r: "Sim", n: [{t: "Internação com antibiótico EV após urocultura", k: "stop"}]},
              {r: "Não", n: [{t: "Urocultura; dose inicial parenteral; ciprofloxacino VO 7 dias; reavaliar em 48–72 h", k: "warn"}]}]},
            {t: "Sem melhora em 48–72 h → imagem (TC preferível) e reavaliação", k: "stop"}
          ], nota: "Protocolo SUS-BH 2022 [F]; IDSA 2025 para ITU complicada [C]."},
          {ref: ["itu_bh2022", "idsa_cuti2025"]}]},
        {t: "Duração e situações especiais", b: [
          {ul: [
            "Fluoroquinolona: 5–7 dias; outro antibiótico eficaz: 7 dias, se houver melhora (IDSA 2025) [C].",
            "Cistite complicada: amoxicilina+clavulanato 7 dias, urocultura no início, reavaliação em 72 h [F].",
            "Homem com ITU febril e suspeita de prostatite: pode precisar de 10–14 dias [C].",
            "Nitrofurantoína e fosfomicina não servem para pielonefrite [C]."]},
          {ref: ["itu_bh2022", "idsa_cuti2025"]}]}
      ]};
    R25.fonte(c, "itu_bh2022", "idsa_cuti2025");
    R25.muda(c, "protocolo SUS-BH 2022 e IDSA 2025 (ITU complicada); guia com fluxograma de local de tratamento.");
  },
  "itu-gestante": c => {
    c.guia = {
      resumo: "Na gestação, **toda bacteriúria é tratada** (guiada pelo antibiograma) e toda ITU é complicada. Urocultura de controle **7–10 dias após** o tratamento. **Pielonefrite = urgência obstétrica** → maternidade.",
      secoes: [
        {t: "Fluxo na UBS", b: [
          {fluxo: [
            {t: "Gestante: urocultura de rotina ou sintomas urinários"},
            {t: "Febre, dor lombar, vômitos?", ramos: [
              {r: "Sim", n: [{t: "Pielonefrite: maternidade de referência (antibiótico EV)", k: "stop"}]},
              {r: "Não", n: [{t: "Cistite ou bacteriúria"}]}]},
            {t: "Tratar: cistite empírica já com urocultura colhida; bacteriúria pelo antibiograma", k: "warn"},
            {t: "Urocultura 7–10 dias após o fim do tratamento"},
            {t: "2º episódio de cistite ou após pielonefrite?", ramos: [
              {r: "Sim", n: [{t: "Quimioprofilaxia até o fim da gestação + urocultura no 3º trimestre", k: "warn"}]}]}
          ], nota: "Protocolo SUS-BH 2022, parte III [F]. Coleta: jato médio, primeira urina da manhã ou ≥ 2 h de retenção, sem forçar ingestão de água [F]."},
          {ref: ["itu_bh2022"]}]},
        {t: "Antibióticos (Quadro 2)", b: [
          {tab: {h: ["Antibiótico", "Dose", "Duração", "Cuidado"], r: [
            ["Cefalexina", "500 mg VO 6/6 h [F]", "7–10 dias [F]", "—"],
            ["Nitrofurantoína", "100 mg VO 6/6 h [F]", "7–10 dias [F]", "Evitar no fim da gestação se houver outra opção (hemólise neonatal) [F]"],
            ["Amoxicilina", "500 mg VO 8/8 h [F]", "7–10 dias [F]", "Só se sensível [C]"],
            ["Amoxicilina+clavulanato", "500/125 mg VO 8/8 h [F]", "7–10 dias [F]", "Evitar no 3º trimestre [F]"]]},
           nota: "Quimioprofilaxia: cefalexina 500 mg ou nitrofurantoína 100 mg, 1 cp à noite até o fim da gestação [F]. Germe resistente com indicação de ceftriaxona ou gentamicina: podem ser aplicadas na UBS [F]."},
          {ref: ["itu_bh2022", "remume"]}]}
      ]};
    R25.fonte(c, "itu_bh2022");
    R25.muda(c, "guia com fluxograma e Quadro 2 do protocolo SUS-BH 2022 (parte III).");
  }
};

CONDICOES.forEach(c => { const f = REV25[c.id]; if (f) f(c); });
