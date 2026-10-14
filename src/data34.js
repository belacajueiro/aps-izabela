// ───────────── data34.js – Protocolo Pré-Natal e Puerpério de Betim (2024, versão retificada) incorporado ao módulo de pré-natal e puerpério (13/10/2026)
Object.assign(FONTES, {
  betim_pn2024: {s: "SMS Betim – Protocolo Pré-Natal e Puerpério (2024)", t: "SMS Betim, Diretoria Operacional da Saúde. Protocolo Pré-Natal e Puerpério, 2024 (arquivo de retificação de 22/05/2025, enviado pela usuária; texto lido por OCR). Fluxos municipais: 1ª consulta até 7 dias do diagnóstico; ≥ 6 consultas alternando médico e enfermeiro; alto risco → PNAR sem alta da APS; urgências → Centro Materno Infantil (CMI), referência para parto de risco habitual e alto risco; HIV, HBV e HCV → SEPADI + PNAR; DMG → PNAR, com glicosímetro emprestado e fitas para toda gestante com DMG ou DM; crise em saúde mental → CERSAM/CERSAMI; Banco de Leite no CMI; Quadros de conduta por exame, síndromes hipertensivas (bundle Einstein/TMI 2023), DMG, anemia, toxoplasmose, sífilis, tireoide e puerpério. O item de cálcio (3.7.1.1.1 e Quadro 17) foi retificado pelo Memorando 0109698/2026 (norma municipal).", f: "F", url: ""}
});

const R34 = {
  rx: (c, i, p) => { if (c.rx && c.rx[i]) Object.assign(c.rx[i], p); },
  muda: (c, t) => { c.mudancas = c.mudancas || []; c.mudancas.push("Revisão 13/10/2026 (protocolo de Betim): " + t); },
  fonte: (c, ...ks) => { ks.forEach(k => { if (!c.evid.fontes.includes(k)) c.evid.fontes.push(k); }); },
  drop: (c, re) => { c.nv = (c.nv || []).filter(x => !re.test(x)); },
  nv: (c, t) => { c.nv = c.nv || []; if (!c.nv.includes(t)) c.nv.push(t); },
  betim: (c, t) => { c.sus = c.sus || {}; const b = c.sus.betim || ""; c.sus.betim = (b && b !== "—" ? t + " " + b : t); },
  rot: (c, g, i) => { c.roteiro = c.roteiro || []; c.roteiro.push({g, i}); }
};

// ── guia de exames do pré-natal: resultado → conduta → para onde (Quadros 14 e 15)
const G_PN_EXAMES = {rotulo: "Exames: resultado → conduta", resumo: "Em Betim, **alto risco vai ao PNAR sem perder o vínculo com a UBS** (consultas alternadas médico/enfermeiro até o parto). **Urgência obstétrica vai ao CMI.** HIV, hepatite B ou C vão também ao **SEPADI**. Sífilis: **tratar com o primeiro teste reagente**, sem esperar o segundo.", secoes: [
  {t: "Rotina por trimestre (Betim 2024)", b: [
    {tab: {h: ["Quando", "Exames"], r: [
      ["1º trimestre / 1ª consulta", "Hemograma; eletroforese de Hb; ABO/Rh (Coombs se Rh−); glicemia de jejum; TR sífilis (ou VDRL), HIV, hepatites B e C; toxoplasmose IgG/IgM; EAS + urocultura; citopatológico se indicado; USG obstétrica idealmente 11–13s6d (se início > 14 semanas: o quanto antes)"],
      ["2º trimestre", "TOTG 75 g entre 24 e 28 semanas (qualquer IG se a 1ª consulta for após 28); toxoplasmose se suscetível; Coombs se Rh−; TR sífilis e HIV"],
      ["3º trimestre", "Hemograma; glicemia de jejum; TR sífilis, HIV e hepatites B e C; toxoplasmose se suscetível; EAS + urocultura"],
      ["Parceria", "ABO/Rh (se gestante Rh−), HBsAg, sífilis, HIV, anti-HCV, hemograma, lipidograma, glicemia, eletroforese de Hb; atualizar vacinas"]]},
     nota: "Quadro 14 e item 3.12 do protocolo municipal [F]. Sorologia de rubéola não é rotina (MS) [F]. Comparar com a Caderneta 2026 nos itens de cada consulta."},
    {ref: ["betim_pn2024", "caderneta2026"]}]},
  {t: "Resultado alterado: o que fazer", b: [
    {tab: {h: ["Exame", "Resultado", "Conduta em Betim"], r: [
      ["Coombs indireto (Rh−)", "Negativo / positivo", "Negativo: repetir **mensalmente a partir de 24 semanas**; anti-D até 72 h do desfecho. Positivo: PNAR, mantendo a APS [F]"],
      ["Hemoglobina", "8–10,9 / < 8 g/dL", "8–10,9: parasitológico, ferro em dose de tratamento, Hb em 30 dias (piora ou estável → PNAR). < 8: PNAR [F]"],
      ["Eletroforese de Hb", "HbAS / HbSS, SC, Sβ, SD", "Traço (AS): sem encaminhamento. Doença falciforme: PNAR [F]"],
      ["Glicemia de jejum (1ª)", "< 92 / 92–125 / ≥ 126", "< 92: TOTG 24–28 s. 92–125: DMG. ≥ 126: DM diagnosticado na gestação. Ambos → PNAR [F]"],
      ["TOTG 75 g", "J ≥ 92, 1 h ≥ 180 ou 2 h ≥ 153", "DMG → PNAR. J ≥ 126 ou 2 h ≥ 200 → DM diagnosticado na gestação → PNAR [F]"],
      ["TR sífilis", "Reagente", "1ª dose de penicilina benzatina **no mesmo dia**, pedir VDRL ('diagnóstico de sífilis após TR reagente'), notificar, tratar parceria [F]"],
      ["VDRL reagente com TR não reagente", "Título ≤ 1:4 / > 1:4", "≤ 1:4: provável falso-reagente. > 1:4: tratar e pedir outro teste treponêmico de metodologia diferente [F]"],
      ["TR HIV", "Reagente (confirmado)", "PNAR + SEPADI, mantendo a APS; carga viral logo após o 2º teste [F]"],
      ["TR hepatite B / anti-HCV", "Reagente", "PNAR + SEPADI; imunoglobulina e vacina ao RN (HBV) [F]"],
      ["Toxoplasmose", "IgM +", "Ver o guia de toxoplasmose: espiramicina, avidez < 16 s, notificação, PNAR [F]"],
      ["EAS", "Proteinúria em traços", "Repetir em 15 dias; persistindo → PNAR. Traços + hipertensão/edema → emergência obstétrica (CMI) [F]"],
      ["Urocultura / ITU", "Pielonefrite / ≥ 2 pielonefrites ou ≥ 3 ITU", "Pielonefrite: emergência obstétrica. ≥ 2 pielonefrites ou ITU de repetição: PNAR [F]"],
      ["BCF", "< 110 ou > 160 bpm persistente / ausente ≥ 24 s", "CMI com urgência [F]"]]},
     nota: "Quadros 12 e 15 do protocolo municipal [F]."},
    {ref: ["betim_pn2024"]}]}
]};

const REV34 = {
  "pn-1consulta": c => {
    c.guia = G_PN_EXAMES;
    c.P += "\n- 1ª consulta até 7 dias do diagnóstico; caderneta entregue; ficha de acompanhamento da gestante para o ACS; exames e testes rápidos da parceria pedidos.\n- Repelente (icaridina, DEET ou IR3535) prescrito na 1ª consulta, conforme o fluxo municipal.";
    R34.rx(c, 4, {nota: c.rx[4].nota + " Betim (Quadro 17, mantido pelo Memorando 0109698/2026): AAS 100 mg à noite, iniciar antes de 16 semanas e manter até 36; a triagem e a prescrição podem ser feitas por médico ou enfermeiro. O texto do protocolo admite iniciar até 28 semanas; o benefício demonstrado é maior com início precoce [I]."});
    R34.betim(c, "Protocolo Betim 2024: ≥ 6 consultas alternando médico e enfermeiro, ≥ 1 consulta odontológica; códigos 03.01.01.011-0 (pré-natal) e 03.01.01.012-9 (puerperal); alto risco → PNAR sem alta da APS; urgência → CMI.");
    c.nv = (c.nv || []).map(x => /Fluxo e contato do pré-natal de alto risco/.test(x) ? "Endereço e forma de agendamento do ambulatório de PNAR de Betim (o protocolo descreve o fluxo, não o contato)." : x);
    R34.fonte(c, "betim_pn2024");
    R34.muda(c, "guia 'Exames: resultado → conduta' com os destinos de Betim (PNAR, SEPADI, CMI); AAS conforme o Quadro 17.");
  },
  "pn-2tri": c => {
    c.P += "\n- PA, peso (gráfico da caderneta), AU, BCF e fita urinária se risco de pré-eclâmpsia.";
    R34.betim(c, "TOTG 75 g entre 24 e 28 semanas (qualquer IG se a 1ª consulta for após 28); dextrosol gelado ou antiemético se intolerância (Protocolo Betim 2024).");
    R34.fonte(c, "betim_pn2024");
  },
  "pn-3tri": c => {
    c.P += "\n- A partir de 34 semanas: registro diário de movimentos fetais (≥ 6 movimentos em 1 h após comer; se não, repetir; persistindo < 6 → maternidade).\n- 41 semanas: encaminhar ao CMI.";
    if (c.roteiro && c.roteiro[1]) c.roteiro[1].i = c.roteiro[1].i.map(x => /^41 semanas/.test(x) ? "41 semanas: encaminhar ao CMI (Protocolo Betim 2024)" : x);
    R34.betim(c, "CMI: referência para parto de risco habitual e de alto risco e para urgências obstétricas; encaminhar no início do trabalho de parto ou com 41 semanas (Protocolo Betim 2024).");
    R34.drop(c, /Fluxo de 41 semanas/);
    R34.nv(c, "Rastreio de estreptococo do grupo B: não consta no protocolo municipal; conferir conduta da maternidade.");
    R34.fonte(c, "betim_pn2024");
    R34.muda(c, "41 semanas → CMI; registro diário de movimentos fetais a partir de 34 semanas.");
  },
  "pn-risco": c => {
    R34.rot(c, "Betim 2024 – regras do fluxo", [
      "Estratificar em todas as consultas (médico ou enfermeiro) e nas visitas do ACS",
      "Alto risco: PNAR + consultas alternadas médico/enfermeiro na UBS até o parto + visita mensal do ACS – a gestante nunca recebe alta da APS",
      "Risco intermediário inclui também: mulher negra; situação de rua, indígena ou quilombola; trabalho com esforço ou exposição nociva; situação conjugal insegura; < 5 anos de estudo; teratogênico em uso; DMG ou síndrome hipertensiva sem gravidade em gestação anterior; dengue/chikungunya na gestação atual",
      "Malformação fetal, arritmia fetal ou isoimunização Rh: alto risco com fluxo de medicina fetal",
      "Urgências obstétricas (sangramento, pré-eclâmpsia com sinais, febre, RPM, 41 semanas, Hb < 7, redução de movimentos > 12 h após 26 s): CMI"]);
    R34.betim(c, "Protocolo Betim 2024 (Quadro 32, com base na Deliberação CIB-SUS/MG 3.993/2022): alto risco → PNAR mantendo a APS; urgências → CMI; situações especiais fetais → medicina fetal.");
    c.sus.betim = c.sus.betim.replace("Fluxo de encaminhamento ao PNAR de Betim não verificado em fonte oficial nesta revisão: conferir com a coordenação da APS e registrar em Rede de Betim. ", "");
    c.nv = (c.nv || []).map(x => /Fluxo, guia de referência e serviço de PNAR/.test(x) ? "Contato e agendamento do ambulatório de PNAR de Betim." : x);
    R34.fonte(c, "betim_pn2024");
    R34.muda(c, "regras municipais do PNAR (sem alta da APS) e do CMI.");
  },
  "pn-has": c => {
    c.P = c.P.replace("- Meta de PA < 140/90 mmHg (CHAP).", "- Alvo: PAS ~130 e PAD ~85 mmHg (bundle adotado por Betim); tratar se média da curva domiciliar acima do alvo ou de imediato se ≥ 150/100 (CHAP: tratar ≥ 140/90 com meta < 140/90).\n- Curva de PA domiciliar 2–3 vezes por semana; fita urinária em todo retorno; retorno em até 14 dias (hipertensão gestacional: até 7 dias).");
    R34.rx(c, 0, {texto: "USO ORAL\n1. Metildopa 250 mg ______ ___ comprimidos\n   Iniciar 1 comprimido de 8/8 horas. Ajustar pela curva de PA: 250 mg 6/6 h → 500 mg 8/8 h → 500 mg 6/6 h (máximo 2 g/dia).", dose: "F", nota: "Protocolo Betim 2024 (Quadro 19 e bundle) [F]; máximo de 2 g/dia também no PACK Brasil 2025 [F]. Sonolência e depressão são efeitos comuns; evitar no pós-parto se risco de depressão."});
    R34.rx(c, 1, {texto: "USO ORAL\n1. Nifedipino retard 20 mg ______ ___ comprimidos\n   Tomar 1 comprimido de 12/12 horas; se necessário 20 mg de 8/8 h e depois 40 mg de 12/12 h.", dose: "F", nota: "Protocolo Betim 2024 (Quadro 19) [F]. Comprar: não está na REMUME. Nunca usar nifedipino sublingual."});
    R34.rx(c, 2, {nota: "O Quadro 19 do protocolo municipal lista anlodipino 2,5 a 10 mg de 12/12 h; isso pode passar da dose máxima diária da bula (10 mg/dia) [NV]: conferir a bula e decidir com o PNAR."});
    c.idealsus = {ideal: "Controle ambulatorial com metildopa ou bloqueador de canal de cálcio. CHAP: tratar a partir de 140/90 reduz desfechos graves sem prejudicar o crescimento fetal.", sus: "Betim adota o bundle Einstein/TMI 2023: alvo ~130/85, metildopa 250 mg 8/8 h como início, PNAR para toda síndrome hipertensiva e CMI se sinais de alarme. REMUME: metildopa e anlodipino; nifedipino só por compra.", ponte: "Comece pela metildopa (REMUME) enquanto a vaga no PNAR não sai; nifedipino retard se intolerância ou PA não controlada e a paciente puder comprar; anlodipino com dose total revisada pela bula."};
    R34.betim(c, "Protocolo Betim 2024: iniciar ou ajustar o anti-hipertensivo na UBS enquanto aguarda o PNAR; qualquer síndrome hipertensiva → PNAR mantendo a APS; sinais de alarme → CMI; pós-parto: retornos na 1ª semana, ~40 dias e 12 semanas.");
    R34.drop(c, /Doses de metildopa, nifedipino retard e anlodipino/);
    R34.nv(c, "Anlodipino na gestação: dose máxima diária na bula vs. 10 mg de 12/12 h no Quadro 19 de Betim.");
    R34.fonte(c, "betim_pn2024", "pack2025");
    R34.muda(c, "doses de metildopa e nifedipino do protocolo municipal; alvo, curva domiciliar e fluxo PNAR/CMI.");
  },
  "pn-dmg": c => {
    c.P = c.P.replace("- Se ≥ 30% das glicemias fora da meta após 1–2 semanas de MEV: iniciar insulina e encaminhar ao PNAR.", "- Se ≥ 2 glicemias acima da meta após 7–14 dias de dieta e exercício (Betim) – ou ≥ 30% fora da meta (SBD): iniciar insulina.")
      .replace("- Encaminhamento ao PNAR (DMG é critério de alto risco na NT SES-MG 2024), mantendo seguimento na APS.", "- Encaminhamento ao PNAR (toda DMG em Betim e na NT SES-MG 2024), mantendo seguimento na APS.\n- Glicosímetro emprestado e fitas pela assistência farmacêutica (preconizado pelo protocolo de Betim para toda gestante com DMG ou DM).");
    R34.rot(c, "Automonitorização (Betim 2024)", [
      "Só dieta: 4 pontos (jejum, pós-café, pós-almoço, pós-jantar) diário – ou 3 vezes por semana se o acesso a fitas for limitado",
      "Com medicação: 6 pontos diários (jejum, pós-café, antes e depois do almoço, antes e depois do jantar) – ou 4 pontos 3 vezes por semana",
      "Pós-prandial medido 2 h após o início da refeição",
      "Hematócrito < 30% superestima e > 55% subestima a glicemia capilar",
      "Pós-parto: suspender antidiabéticos; TOTG 75 g em 6–8 semanas (também se RN ≥ 4.000 g); depois rastreio anual"]);
    R34.rx(c, 1, {texto: "USO ORAL\n1. Metformina 850 mg ______ ___ comprimidos\n   Tomar 1 comprimido 1 vez ao dia junto a uma refeição; aumentar a cada 1–2 semanas conforme as glicemias, até no máximo 2.500 mg/dia (3 comprimidos/dia).", dose: "F", nota: "Protocolo Betim 2024 (Quadro 25): iniciar 500 mg 1–2 vezes ao dia, titular a cada 1–2 semanas, máximo 2.500 mg/dia [F]; a REMUME tem só 850 mg. Indicações: alternativa à insulina (adesão, acesso, dificuldade de aplicação) ou associada se > 2 UI/kg/dia sem controle ou ganho de peso materno/fetal excessivo. Não usar se feto < p50, CIUR ou DRC [F]."});
    R34.betim(c, "Protocolo Betim 2024: toda gestante com DMG ou DM → PNAR, mantendo a APS; empréstimo de glicosímetro e fitas reagentes pela assistência farmacêutica, conforme o fluxo da unidade.");
    R34.drop(c, /Protocolo municipal de insumos de automonitorização/);
    R34.fonte(c, "betim_pn2024");
    R34.muda(c, "glicosímetro e fitas em Betim, frequência de automonitorização e metformina do Quadro 25.");
  },
  "pn-anemia": c => {
    R34.rx(c, 0, {texto: "USO ORAL\n1. Sulfato ferroso 40 mg de ferro elementar ______ 90 comprimidos\n   Tomar 1 comprimido 3 vezes ao dia (120 mg/dia), 30 minutos antes das refeições, com suco cítrico, longe do leite, café, chá e cálcio.\n   Hemograma em 30 dias: se Hb subindo, manter até Hb > 11 e depois voltar a 1 comprimido/dia até 3 meses pós-parto.", dose: "F", nota: "120 mg/dia, com escalonamento para 240 mg/dia se a Hb não subir: PACK Brasil 2025 [F]. O protocolo de Betim prevê 5 comprimidos/dia (200 mg) em 3 tomadas [F]; doses maiores aumentam efeitos gastrointestinais e a adesão costuma cair [C]. Dias alternados é opção se intolerância."});
    c.idealsus = {ideal: "60–120 mg/dia de ferro elementar (OMS, PACK 2025), aumentando só se não houver resposta; menos efeitos gastrointestinais e melhor adesão.", sus: "O protocolo de Betim 2024 prevê 200 mg/dia (5 comprimidos de 40 mg) para Hb 8–10,9, hemograma em 30 dias, PNAR se Hb estável ou piorando e para Hb < 8. Sulfato ferroso 40 mg na REMUME.", ponte: "Comece com 120 mg/dia; se a Hb não subir em 30 dias, confira adesão, parasitose e eletroforese, aumente a dose (até 200–240 mg/dia) e siga o fluxo municipal para o PNAR."};
    R34.betim(c, "Protocolo Betim 2024: Hb 8–10,9 → parasitológico, ferro de tratamento e Hb em 30 dias (melhora: manter 3 meses e repetir em 60 dias; estável ou piora: PNAR); Hb < 8 → PNAR; Hb < 7 ou sintomas → CMI.");
    R34.drop(c, /Dose de tratamento de ferro na gestação/);
    R34.fonte(c, "betim_pn2024", "pack2025");
    R34.muda(c, "dose de tratamento conferida (PACK 2025) e divergência com os 200 mg/dia do protocolo municipal explicitada.");
  },
  "pn-toxo": c => {
    c.P += "\n- IgM+ com IgG−: tratar já, notificar e repetir sorologia em 3 semanas (soroconversão confirma).\n- Avidez só até 16 semanas; alta avidez → suspender espiramicina; baixa avidez → esquema tríplice a partir de 16 semanas + PNAR.\n- RN de mãe com toxoplasmose na gestação: SERENAR + SEPADI.";
    R34.betim(c, "Protocolo Betim 2024 (Fluxograma 3): toxoplasmose adquirida na gestação → PNAR mantendo a APS; suscetível repete sorologia a cada trimestre e no parto; notificação semanal (CID O98.6); RN → SERENAR e SEPADI.");
    R34.fonte(c, "betim_pn2024");
    R34.muda(c, "fluxo municipal de sorologia, avidez, notificação e destino do RN.");
  },
  "pn-tireoide": c => {
    c.P += "\n- TSH só com fator de risco (irradiação ou cirurgia de tireoide, DM1 ou autoimunidade, bócio, disfunção tireoidiana prévia) – não há rastreio universal.\n- Meta: TSH na metade inferior da faixa do trimestre ou < 2,5 mU/L; TSH a cada 4 semanas na 1ª metade, depois ao menos 1 vez por trimestre.";
    R34.rx(c, 0, {texto: "USO ORAL\n1. Levotiroxina ___ mcg ______ 30 comprimidos\n   Tomar 1 comprimido em jejum, 30 a 60 minutos antes do café, longe do ferro e do cálcio (4 horas).\n   Diagnóstico na gestação: 1,6 mcg/kg/dia (em geral 100–150 mcg). Hipotireoidismo prévio: aumentar 25–30% ao confirmar a gravidez. Ajustes de 12,5–50 mcg pelo TSH.", dose: "F", nota: "Protocolo Betim 2024 (item 3.7.9) [F]. Hipotireoidismo subclínico tem dose menor (ATA 2017) – decidir pelo TSH e anti-TPO. Faixas sem referência do laboratório: 1º tri 0,1–4,0; 2º e 3º 0,5–4,5 mU/L [F]."});
    R34.betim(c, "Protocolo Betim 2024: hipotireoidismo em tratamento ou hipertireoidismo → PNAR, mantendo a APS.");
    c.nv = (c.nv || []).filter(x => !/Doses de levotiroxina/.test(x));
    R34.fonte(c, "betim_pn2024");
    R34.muda(c, "dose de levotiroxina, metas de TSH e quem rastrear (protocolo municipal).");
  },
  "pn-rh": c => {
    c.P += "\n- Betim 2024: Coombs indireto mensal a partir de 24 semanas (a Caderneta 2026 pede 1 por trimestre).";
    R34.betim(c, "Protocolo Betim 2024: Rh− → Coombs mensal a partir de 24 semanas; Coombs positivo → PNAR mantendo a APS; isoimunização → fluxo de medicina fetal; anti-D até 72 h após o desfecho.");
    R34.fonte(c, "betim_pn2024");
  },
  "pn-queixas": c => {
    R34.rot(c, "Náuseas e vômitos (Betim 2024)", ["Orientação alimentar e apoio; antieméticos: metoclopramida, dimenidrinato ou ondansetrona", "Perda > 5% do peso, desidratação, cetonúria ou sem resposta ao tratamento oral → maternidade (CMI)", "Vômitos que começam após 20 semanas → maternidade"]);
    R34.fonte(c, "betim_pn2024");
  },
  "pn-plano-parto": c => {
    c.P += "\n- Plano impresso e entregue na admissão no CMI.\n- Entrega legal para adoção (Lei 13.509/2017; Programa Entrega Legal do TJMG via Vara da Infância e Juventude) explicada, se houver dúvida em ficar com o bebê.";
    R34.betim(c, "Maternidade de referência: Centro Materno Infantil (CMI) de Betim – parto de risco habitual e alto risco e urgências obstétricas. Banco de Leite Humano no CMI (Av. Edméia Mattos Lazzarotti, 3.800, Jardim Brasília; seg. a sex., 7–18 h) (Protocolo Betim 2024).");
    c.sus.betim = c.sus.betim.replace(" Maternidade de referência e agenda de visitas: conferir com a coordenação da APS.", "");
    R34.nv(c, "Agenda de visita prévia ao CMI.");
    R34.fonte(c, "betim_pn2024");
    R34.muda(c, "CMI como maternidade de referência, Banco de Leite e entrega legal.");
  },
  "pp-1semana": c => {
    c.P += "\n- Betim: visita domiciliar na 1ª semana (ACS ou equipe) e 'Primeira Semana de Saúde Integral' (5º dia) na UBS entre 3 e 10 dias (até 3 dias se RN de risco), mãe e bebê no mesmo dia.";
    R34.betim(c, "Protocolo Betim 2024: VD na 1ª semana + PSSI (5º dia) com médico ou enfermeiro entre 3 e 10 dias (RN de risco: até 3 dias) – teste do pezinho, agendamento da triagem auditiva, BCG e hepatite B, amamentação; ≥ 2 consultas puerperais (até o 5º dia e até o 40º dia).");
    R34.drop(c, /Organização local da visita domiciliar puerperal/);
    R34.fonte(c, "betim_pn2024");
    R34.muda(c, "Primeira Semana de Saúde Integral e calendário puerperal de Betim.");
  },
  "pp-consulta": c => {
    c.P += "\n- Consulta puerperal entre 30 e 40 dias (código 03.01.01.012-9); testagem rápida de HIV, sífilis e hepatites; VDRL trimestral até 12 meses se sífilis na gestação.";
    R34.betim(c, "Protocolo Betim 2024: consulta puerperal e do RN entre 30 e 40 dias; DIU pós-placentário → revisão em 30–45 dias; depressão grave ou psicose puerperal → CERSAM (urgência em saúde mental).");
    R34.fonte(c, "betim_pn2024");
  },
  "pp-pos-gestacao-risco": c => {
    c.P += "\n- Betim: pré-eclâmpsia/hipertensão – avaliar até o 5º–7º dia, ~40 dias e 12 semanas; suspender anti-hipertensivo quando PA < 140/90 sustentada; pré-eclâmpsia grave segue no PNAR (puerpério patológico); depois, avaliação clínica anual.\n- DMG: TOTG em 6–8 semanas também para quem teve RN ≥ 4.000 g.";
    R34.betim(c, "Protocolo Betim 2024: contrarreferência da maternidade para a UBS; pré-eclâmpsia com sinais de gravidade acompanhada no PNAR até a involução; IECA pode ser usado no pós-parto.");
    R34.fonte(c, "betim_pn2024");
  },
  "pp-depressao": c => {
    R34.betim(c, "Protocolo Betim 2024: crise com risco para a mãe ou o bebê (ideação suicida com plano, psicose, agitação grave, insônia < 4 h por várias noites, sem resposta em 6 semanas) → CERSAM (adultos) ou CERSAMI (adolescentes), mantendo o vínculo com a APS; casos leves a moderados com eMulti.");
    c.nv = (c.nv || []).map(x => /Fluxo do CAPS de referência/.test(x) ? "Endereço e forma de acesso do CERSAM/CERSAMI de Betim." : x);
    R34.fonte(c, "betim_pn2024");
  },
  "in-sifilis": c => {
    R34.betim(c, "Gestante (Protocolo Betim 2024): tratar com o 1º teste reagente; VDRL é o não treponêmico da rede – pedir com a finalidade escrita ('diagnóstico após TR reagente' ou 'monitoramento'); VDRL mensal até o parto e trimestral até 12 meses; registrar no cartão de checagem da penicilina; intervalo máximo de 9 dias entre doses (passou → reiniciar); alergia → dessensibilização hospitalar (CMI).");
    R34.drop(c, /Intervalo máximo entre doses semanais/);
    R34.fonte(c, "betim_pn2024");
  },
  "sifilis": c => {
    R34.betim(c, "Gestante em Betim: tratar no mesmo dia do TR reagente, VDRL mensal, cartão de checagem da penicilina, parceria tratada presuntivamente com 2,4 milhões UI (Protocolo Betim 2024).");
    R34.fonte(c, "betim_pn2024");
  },
  "in-hiv": c => {
    R34.betim(c, "SEPADI (Serviço de Prevenção e Assistência a Doenças Infecciosas) é a referência municipal para pessoas vivendo com HIV e hepatites; gestante vai ao SEPADI e ao PNAR, mantendo a UBS (Protocolo Betim 2024).");
    R34.fonte(c, "betim_pn2024");
  },
  "hiv-diagnostico": c => {
    R34.betim(c, "Referência municipal: SEPADI (Protocolo Betim 2024).");
    R34.fonte(c, "betim_pn2024");
  },
  "in-hepatites": c => {
    R34.betim(c, "Referência municipal para hepatites B e C: SEPADI; gestante HBsAg ou anti-HCV reagente → SEPADI + PNAR; exposição ao HBV na gestação → SEPADI para vacina + imunoglobulina (Protocolo Betim 2024).");
    R34.fonte(c, "betim_pn2024");
  }
};
CONDICOES.forEach(c => { const f = REV34[c.id]; if (f) f(c); });
