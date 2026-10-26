// ───────────── data72.js – v59: Guia Clínico – lote 9 (Respiratório/ORL e olhos: 14 itens sem guia).
// Conferido em 26/10/2026: CAB 28 vol. II (2.18 rinossinusites/síndrome gripal, 2.20 testes de Weber e Rinne, 2.21 urgências odontológicas,
// 2.22 olho vermelho), Guia de Manejo e Tratamento de Influenza 2023 (definições de SG/SRAG, fatores de risco, Tabela 4), PCDT DPOC 2025
// (critérios de hospitalização e corticoide), GOLD 2026 (cap. 4: definição, classificação de Roma, antibiótico), V Consenso Brasileiro
// sobre Rinites 2024 (ABORL-CCF/ASBAI/SBP), TelessaúdeRS Oftalmologia 2023 (Protocolos 5 e 7) e Pneumologia 2023 (Protocolo 4),
// Manual de TB 2019 (definição de sintomático respiratório e Quadro 51), NT SMSA-BH 13/2026 (nirmatrelvir/ritonavir, reproduz o Guia MS 2025), REMUME Betim.
// Calculadora nova no app.html: gravidade da exacerbação de DPOC (classificação de Roma, GOLD 2026).
const FOTO_OLHO = {
  hordeolo: ["Hordéolo externo (terçol) na pálpebra superior, cerca de 5 dias de evolução", "Andre Riemann · Wikimedia Commons · domínio público"],
  calazio: ["Calázio inicial: nódulo indolor na pálpebra, afastado da borda", "jd · Wikimedia Commons · domínio público"],
  hemorragia: ["Hemorragia subconjuntival: mancha vermelha homogênea, bem delimitada, sem secreção", "FiP · Wikimedia Commons · CC BY-SA 3.0"]
};

Object.assign(FONTES, {
  cab28_rs: {s: "CAB 28 vol. II – rinossinusites e síndrome gripal", t: "Ministério da Saúde. Cadernos de Atenção Básica nº 28, vol. II, 2013, cap. 2.18: resfriado com pico até o 3º dia e regressão do 7º ao 10º dia; secreção espessa e esverdeada após os primeiros dias não indica bactéria; suspeitar de bacteriana se sintomas > 10–14 dias ou piora após o 5º dia; analgésicos/antitérmicos, hidratação, solução salina; não se recomenda AINE nem corticoide; descongestionante tópico por no máximo 3 dias e nunca em lactentes; anti-histamínico sem eficácia em não atópicos; mucolíticos sem vantagem sobre hidratação; vitamina C sem benefício; sinais de alerta de complicação (edema periorbitário, cefaleia intensa, alteração visual, toxemia, irritação meníngea); critérios de encaminhamento hospitalar na síndrome gripal (adulto: alteração de consciência, FR > 30, PAS < 90 ou PAD < 60) (manual MS). Cap. 2.20: interpretação dos testes de Weber e Rinne.", f: "F", url: "https://bvsms.saude.gov.br/bvs/publicacoes/acolhimento_demanda_espontanea_queixas_comuns_cab28v2.pdf"},
  cab28_odonto: {s: "CAB 28 vol. II – urgências odontológicas", t: "Ministério da Saúde. Cadernos de Atenção Básica nº 28, vol. II, 2013, cap. 2.21: dores dentinopulpares (cárie – dor sempre provocada; pulpite reversível – dor provocada que persiste após o estímulo; pulpite irreversível – dor intensa, contínua, espontânea, pior em decúbito), periapicais (pericementite – sensível à percussão, testes térmicos negativos; abscesso periapical – dor pulsátil, dente 'crescido', tumefação; antibiótico quando houver edema associado), periodontais (abscesso periodontal, GUN/PUN, pericoronarite), alveolite; Quadro 61 (paracetamol 3–4 g/dia; amoxicilina 250–500 mg 8/8h; ibuprofeno 200–400 mg 4–6h; nistatina) (manual MS).", f: "F", url: "https://bvsms.saude.gov.br/bvs/publicacoes/acolhimento_demanda_espontanea_queixas_comuns_cab28v2.pdf"},
  cab28_olho: {s: "CAB 28 vol. II – olho vermelho", t: "Ministério da Saúde. Cadernos de Atenção Básica nº 28, vol. II, 2013, cap. 2.22: exame em 7 passos (acuidade visual com Snellen, padrão da hiperemia, fluoresceína, câmara anterior, pupila, tensão ocular digital, secreção); as quatro grandes ameaças à visão (ceratite, iridociclite, glaucoma agudo, trauma); hemorragia subconjuntival após esforço ou pico hipertensivo, com resolução espontânea; blefarite como inflamação crônica das bordas palpebrais por estafilococos; corpo estranho: colírio anestésico, irrigação com SF 0,9%, everter a pálpebra superior, uma única tentativa com cotonete, pomada antibiótica, oclusão e oftalmologia; lesão corneana sem melhora em 24 h – pensar em úlcera, oftalmologia urgente; queimadura química – irrigação imediata e abundante (manual MS).", f: "F", url: "https://bvsms.saude.gov.br/bvs/publicacoes/acolhimento_demanda_espontanea_queixas_comuns_cab28v2.pdf"},
  gold2026: {s: "GOLD 2026", t: "Global Initiative for Chronic Obstructive Lung Disease. Global Strategy for Prevention, Diagnosis and Management of COPD, relatório 2026 (cópia na base clínica), cap. 4: exacerbação como piora em até 14 dias de dispneia e/ou tosse e escarro; diferenciais (pneumonia, TEP, IC aguda, pneumotórax); classificação de gravidade de Roma (Figura 4.2); SABA ± SAMA; corticoide sistêmico por até 5 dias; antibiótico se ≥ 2 de aumento de dispneia, volume ou purulência do escarro (sendo a purulência um deles), cultura prévia positiva ou ventilação mecânica; aminopenicilina com clavulanato, macrolídeo ou tetraciclina; duração ≤ 5 dias no ambulatório (diretriz internacional).", f: "F", url: "https://goldcopd.org/2026-gold-report/"},
  aborl_rinite2024: {s: "V Consenso Brasileiro sobre Rinites 2024", t: "ABORL-CCF, ASBAI e SBP. V Consenso Brasileiro sobre Rinites – 2024 (cópia na base clínica): classificação (alérgica, infecciosa, não alérgica – Tabela 1); intermitente (< 4 dias/semana ou < 4 semanas/ano) × persistente; corticosteroide intranasal como medicamento mais eficaz e primeira linha na rinite alérgica persistente e/ou moderada a grave, por no mínimo 60–90 dias para suprimir a inflamação; anti-H1 de nova geração preferidos aos clássicos em todas as idades; descongestionantes sem indicação na rinite alérgica; montelucaste com risco de eventos psiquiátricos; Tabela 8 (posologias dos corticoides intranasais no Brasil) (consenso de sociedades).", f: "F", url: "https://aborlccf.org.br/"},
  tsrs_oft2023: {s: "TelessaúdeRS – Oftalmologia adulto (2023)", t: "TelessaúdeRS-UFRGS. Protocolos de encaminhamento – Oftalmologia adulto, 2023 (cópia na base clínica): Protocolo 5 (pálpebras, vias lacrimais e órbita – hordéolo recorrente ou calázio sem resposta ao tratamento clínico; calor local 5–10 min 3–5×/dia com leve compressão e pomada antibiótica se necessário; hordéolos recorrentes e blefarite crônica em idosos: considerar neoplasia palpebral; emergência se laceração palpebral, suspeita de corpo estranho intraorbitário, dacriocistite aguda); Protocolo 6 (glaucoma agudo); Protocolo 7 (córnea e superfície ocular – emergência: queimadura química, trauma por radiação sem melhora ou corpo estranho não removido na APS, olho vermelho com hiperemia perilímbica ou setorial, conjuntivite hiperaguda, qualquer sintoma agudo em usuário de lente de contato) (referência técnica de outro estado).", f: "F", url: "https://www.ufrgs.br/telessauders/regulasus/#regulasus-protocolos"},
  tsrs_pneumo2023: {s: "TelessaúdeRS – Pneumologia adulto (2023)", t: "TelessaúdeRS-UFRGS. Protocolos de encaminhamento – Pneumologia adulto, 2023 (cópia na base clínica), Protocolo 4 (tosse crônica e dispneia): encaminhar após investigação inconclusiva na APS e falha do tratamento empírico das causas comuns (IECA, síndrome da tosse de vias aéreas superiores, asma, DRGE, DPOC, tuberculose); trocar o IECA e encaminhar se a tosse persistir > 4 semanas após a suspensão; guia com imagem de tórax, espirometria e duas baciloscopias ou TRM-TB (referência técnica de outro estado).", f: "F", url: "https://www.ufrgs.br/telessauders/regulasus/#regulasus-protocolos"},
  tb_sr2019: {s: "Manual de TB 2019 – sintomático respiratório", t: "Ministério da Saúde. Manual de Recomendações para o Controle da Tuberculose no Brasil, 2ª ed. atualizada, 2019: sintomático respiratório é quem tem tosse por 3 semanas ou mais (população geral); Quadro 51 – privados de liberdade, profissionais de saúde, pessoas vivendo com HIV, pessoas em situação de rua e indígenas: investigar com tosse de qualquer duração (manual MS).", f: "F", url: "http://bvsms.saude.gov.br/bvs/publicacoes/manual_recomendacoes_controle_tuberculose_brasil_2_ed.pdf"},
  bh_nt13_2026: {s: "NT SMSA-BH 13/2026 – nirmatrelvir/ritonavir", t: "Secretaria Municipal de Saúde de Belo Horizonte. Nota Técnica nº 013/2026 (27/04/2026), com base no Guia do MS para uso de nirmatrelvir/ritonavir em pacientes de alto risco (2025): ≥ 65 anos (independente da vacinação) ou ≥ 18 anos imunossuprimido; 1º ao 5º dia de sintomas; quadro leve a moderado sem O₂; teste de antígeno ou RT-PCR de serviço (autoteste não vale); contraindicações: > 5 dias, peso < 40 kg, ClCr < 30 ou diálise, hepatopatia grave; TFG 30–59: 1 comprimido de nirmatrelvir + 1 de ritonavir 12/12h (norma municipal de outro município da RMBH).", f: "F", url: "https://prefeitura.pbh.gov.br/sites/default/files/estrutura-de-governo/saude/2026/29-04-26-smsa-nt-013-2026-nirma-riton.pdf"}
});

(() => {
  const get = id => CONDICOES.find(x => x.id === id);
  const G = (id, guia, o = {}) => {
    const c = get(id); if (!c) return;
    c.guia = guia;
    if (c.evid && o.fontes) c.evid.fontes = [...new Set([...(c.evid.fontes || []), ...o.fontes])];
    (c.mudancas = c.mudancas || []).push("v59 (26/10/2026): Guia Clínico novo – " + (o.mud || "reconhecer, diferenciais, fluxograma e fontes") + ".");
    if (o.nv) c.nv = [...(c.nv || []), ...o.nv];
  };
  const PO = (typeof FOTO_OLHO !== "undefined") ? FOTO_OLHO : {};
  const FO = (...ks) => ks.filter(k => PO[k]).map(k => ({fig: {foto: true, src: "img/olho-" + k + ".webp", leg: PO[k][0], alt: PO[k][0], fonte: PO[k][1]}}));
  const SG_DEF = "**Síndrome gripal (SG):** febre de início súbito, mesmo referida, com tosse ou dor de garganta e pelo menos um de cefaleia, mialgia ou artralgia; em < 2 anos, febre súbita com tosse, coriza ou obstrução nasal [F]. **SRAG:** SG com dispneia, SpO₂ ≤ 94% em ar ambiente, desconforto respiratório ou FR aumentada para a idade, piora da doença de base ou hipotensão [F].";

  // ── 1. Bronquite aguda
  G("bronquite", {
    urg: "Tosse aguda com **FR > 24, FC > 100, temperatura > 38 °C ou ausculta focal** (crepitações, macicez): pensar em **pneumonia** e examinar/radiografar [C]. Dispneia, SpO₂ baixa, hemoptise ou dor torácica pleurítica: avaliar no mesmo dia [C].",
    resumo: "Tosse aguda (< 3 semanas), com ou sem escarro, em adulto sem pneumonia: **quase sempre viral** e autolimitada; a tosse dura em média **2–3 semanas** [C]. **Escarro purulento ou esverdeado não indica bactéria** [C]. **Antibiótico não é indicado**: encurta a tosse em menos de 1 dia e aumenta eventos adversos (Cochrane) [C].",
    secoes: [
      {t: "Reconhecer", b: [
        {ul: [
          "Começa como resfriado; a tosse persiste após os outros sintomas regredirem [C].",
          "Pode haver sibilos e dor torácica pelo esforço da tosse [C].",
          "Exame do tórax sem sinais focais e sinais vitais normais [C]."
        ]},
        {det: {t: "Fisiopatologia", b: ["Inflamação da mucosa traqueobrônquica, em geral viral (rinovírus, influenza, VSR, coronavírus), com descamação epitelial e hiper-reatividade transitória das vias aéreas – por isso a tosse dura semanas e pode haver broncoespasmo leve [C]."]}}
      ]},
      {t: "Diferenciais", b: [
        {tab: {h: ["Hipótese", "Pistas"], r: [
          ["Pneumonia", "Febre, taquipneia, taquicardia, ausculta focal, idoso com confusão [C]"],
          ["Síndrome gripal / covid", "Febre súbita, mialgia, epidemia sazonal; teste se muda a conduta [F]"],
          ["Coqueluche", "Tosse paroxística, guincho, vômito pós-tosse, contato com caso [C]"],
          ["Asma / DPOC exacerbada", "Sibilância recorrente, atopia, tabagismo, dispneia [C]"],
          ["IC descompensada", "Ortopneia, edema, crepitações bibasais, cardiopata [C]"],
          ["Tuberculose", "Tosse ≥ 3 semanas, febre vespertina, perda de peso, sudorese noturna [F]"],
          ["Corpo estranho (criança)", "Início súbito com engasgo, sibilo unilateral [C]"]
        ]}}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Tosse aguda (< 3 semanas)"},
          {t: "FR > 24, FC > 100, T > 38 °C ou ausculta focal?", ramos: [
            {r: "Sim", n: [{t: "Suspeita de pneumonia: radiografia e manejo de PAC", k: "stop"}]},
            {r: "Não", n: [{t: "Sibilância, dispneia ou doença pulmonar de base?"}]}
          ]},
          {t: "Sibilância/doença de base", ramos: [
            {r: "Sim", n: [{t: "Tratar como asma ou exacerbação de DPOC", k: "warn"}]},
            {r: "Não", n: [{t: "Bronquite aguda: sintomáticos, sem antibiótico", k: "ok"}]}
          ]},
          {t: "Paroxismos, guincho ou vômito pós-tosse → suspeita de coqueluche (notificar)", k: "q"},
          {t: "Tosse ≥ 3 semanas → investigar tuberculose", k: "warn"}
        ], nota: "Critérios de suspeita de pneumonia citados de memória (ACCP/NICE) [C]; sintomático respiratório: Manual de TB 2019 [F]."},
        {ir: [["pac", "Pneumonia (PAC)"], ["coqueluche", "Coqueluche"], ["tb-sr", "Investigação de TB"], ["tosse-subaguda", "Tosse subaguda"]]}
      ]},
      {t: "Tratar", b: [
        {ul: [
          "Explicar a duração esperada (2–3 semanas) – principal fator para evitar retorno e antibiótico [C].",
          "Mel para tosse em > 1 ano de idade: alívio pequeno, evidência de baixa certeza [C].",
          "Antitussígenos, expectorantes e mucolíticos: benefício não demonstrado; mucolíticos não superam a hidratação (CAB 28) [F].",
          "Salbutamol só se houver sibilância [C]. Cessar tabagismo [C]."
        ]},
        {ref: ["cochrane_bronq", "cab28_rs", "tb_sr2019"]}
      ]}
    ]
  }, {fontes: ["cab28_rs", "tb_sr2019"]});

  // ── 2. Cerume impactado
  G("cerume", {
    urg: "**Perda auditiva súbita** sem cera que a explique (otoscopia normal, Weber para o lado bom): **perda neurossensorial súbita** – otorrino no mesmo dia; o corticoide tem janela curta [C].",
    resumo: "Cerume é protetor e se elimina sozinho; **só tratar se causa sintomas** (hipoacusia, plenitude, zumbido, dor) **ou impede o exame** [C]. Amolecer com gotas por 3–5 dias e depois irrigar com água morna ou remover sob visão [C]. Após remover, **refazer otoscopia e conferir a audição** [C].",
    secoes: [
      {t: "Reconhecer", b: [
        {ul: [
          "Fatores: uso de cotonete, aparelho auditivo, conduto estreito, idosos, deficiência intelectual [C].",
          "Hipoacusia de condução: Rinne negativo (via óssea > aérea) e Weber para o lado com perda (CAB 28) [F].",
          "Idoso com 'piora da memória' ou isolamento: cerume pode piorar a comunicação – vale olhar o ouvido [C]."
        ]},
        {tab: {h: ["Teste", "Condução (cerume, otite)", "Neurossensorial"], r: [
          ["Rinne (diapasão na mastoide e depois ao lado do ouvido)", "Via óssea > via aérea", "Via aérea > via óssea"],
          ["Weber (diapasão no vértice)", "Lateraliza para o lado com perda", "Lateraliza para o lado bom"]
        ]}, nota: "CAB 28, cap. 2.20 [F]."}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Cerume visível com sintomas ou impedindo a otoscopia"},
          {t: "Perfuração, cirurgia otológica, otite ativa, ouvido único, radioterapia de cabeça e pescoço?", ramos: [
            {r: "Sim", n: [{t: "Não irrigar: remoção sob visão (otorrino)", k: "stop"}]},
            {r: "Não", n: [{t: "Gotas (água morna, óleo ou bicarbonato) 3–5 dias", k: "ok"}]}
          ]},
          {t: "Irrigação com água a 37 °C, jato dirigido à parede posterossuperior; parar se dor ou tontura", k: "ok"},
          {t: "Falhou após 2 tentativas → nova rodada de gotas ou otorrino", k: "warn"},
          {t: "Hipoacusia persiste com conduto limpo → audiometria; súbita → urgência", k: "stop"}
        ], nota: "NICE NG98 (2018): irrigação ou microssucção; não usar seringa metálica manual [C]."},
        {ir: [["otite-externa", "Otite externa"], ["oma", "Otite média aguda"]]},
        {ref: ["nice_cerume", "cab28_rs"]}
      ]}
    ]
  }, {fontes: ["cab28_rs"], nv: ["Material para irrigação otológica (seringa/irrigador) nas UBS de Betim."]});

  // ── 3. COVID-19 leve
  G("covid", {
    urg: "**SpO₂ ≤ 94%, dispneia, desconforto respiratório, hipotensão, confusão ou piora da doença de base**: SRAG → urgência e notificação [F]. Adulto com **FR > 30 ou PAS < 90 / PAD < 60** ou alteração da consciência: encaminhar ao hospital (CAB 28) [F].",
    resumo: "Diagnóstico confirmado por **teste de antígeno de serviço ou RT-PCR** (autoteste não serve para liberar o antiviral) [F]. **Nirmatrelvir/ritonavir** no SUS: **≥ 65 anos** ou **≥ 18 anos imunossuprimido**, **até o 5º dia**, quadro leve a moderado **sem O₂** [F]. Antes de prescrever: **interações** (ritonavir inibe CYP3A4) e **função renal** [F]. **Oseltamivir não trata covid** [F].",
    secoes: [
      {t: "Critérios", b: [
        SG_DEF,
        {tab: {h: ["Nirmatrelvir/ritonavir", "Critério (MS 2025, via NT BH 13/2026)"], r: [
          ["Quem", "≥ 65 anos, independente da vacinação; ou ≥ 18 anos com imunossupressão (imunodeficiência grave, transplante em uso de imunossupressor, HIV, corticoide em dose alta prolongada, quimio/radioterapia nos últimos 6 meses, doença imunomediada em imunomodulador, DRC não dialítica com TFG ≥ 30) [F]"],
          ["Quando", "1º ao 5º dia de sintomas (D1 = início) [F]"],
          ["Teste", "Antígeno ou RT-PCR com laudo de serviço; autoteste não vale [F]"],
          ["Contraindicações", "> 5 dias, peso < 40 kg, ClCr < 30 ou diálise, hepatopatia grave (Child C / ALT > 5×), necessidade de O₂ [F]"],
          ["Dose", "300 mg + 100 mg 12/12h por 5 dias; TFG 30–59: 150 mg + 100 mg 12/12h [F]"]
        ]}}
      ]},
      {t: "Diferenciais", b: [
        {tab: {h: ["Hipótese", "Pistas"], r: [
          ["Influenza", "Sazonal, febre alta súbita, mialgia; oseltamivir se fator de risco, sem esperar teste [F]"],
          ["Dengue e outras arboviroses", "Febre com mialgia e cefaleia retro-orbitária, **sem coriza/tosse**, em época de transmissão – prova do laço, hemograma [F]"],
          ["Resfriado / rinite", "Coriza e espirros sem febre relevante [C]"],
          ["Pneumonia bacteriana", "Febre persistente, escarro purulento, ausculta focal [C]"],
          ["TEP", "Dispneia desproporcional, taquicardia, fatores de risco – a covid aumenta o risco trombótico [C]"]
        ]}}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Síndrome gripal com teste positivo para SARS-CoV-2"},
          {t: "Sinais de SRAG?", ramos: [
            {r: "Sim", n: [{t: "Urgência; notificar SRAG", k: "stop"}]},
            {r: "Não", n: [{t: "≥ 65 anos ou imunossuprimido ≥ 18 anos, até o 5º dia?"}]}
          ]},
          {t: "Elegível ao antiviral", ramos: [
            {r: "Sim", n: [{t: "Checar interações, TFG e peso → nirmatrelvir/ritonavir", k: "ok"}]},
            {r: "Não", n: [{t: "Sintomáticos, hidratação, sinais de alerta por escrito", k: "ok"}]}
          ]},
          {t: "Piora após o 5º–7º dia (fase inflamatória) → reavaliar com oximetria", k: "warn"}
        ], nota: "Guia MS de nirmatrelvir/ritonavir 2025, reproduzido na NT SMSA-BH 13/2026 [F]; definições de SG/SRAG do Guia de Influenza 2023 [F]."},
        {det: {t: "Interações que mais aparecem na APS", b: [
          {ul: [
            "**Sinvastatina e lovastatina:** suspender durante o tratamento e até alguns dias depois; atorvastatina e rosuvastatina: reduzir ou pausar [C].",
            "**Anticoagulantes:** varfarina (monitorar INR), rivaroxabana e apixabana (risco de sangramento) – discutir [C].",
            "**Amiodarona, alguns antiarrítmicos, carbamazepina, fenitoína, fenobarbital, rifampicina, erva-de-são-joão:** contraindicados ou reduzem o efeito [C].",
            "**Sildenafila para HAP, colchicina, alguns benzodiazepínicos e antipsicóticos:** contraindicados ou exigem ajuste [C].",
            "Conferir sempre em uma checagem de interações antes de prescrever [NV]."
          ]}
        ]}},
        {ir: [["gripal", "Síndrome gripal (influenza)"], ["resfriado", "Resfriado comum"], ["dengue-a", "Dengue"]]},
        {ref: ["bh_nt13_2026", "nt_nmvr", "guia_influenza", "cab28_rs", "remume"]}
      ]}
    ]
  }, {fontes: ["bh_nt13_2026", "guia_influenza", "cab28_rs"], nv: ["Lista de interações do nirmatrelvir/ritonavir: conferir na bula ou em checador de interações antes de prescrever.", "Critérios do Guia MS 2025 conferidos via nota técnica de BH; conferir o documento federal e eventual nota da SES-MG/SMS Betim."]});

  // ── 4. Exacerbação de DPOC
  G("dpoc-exac", {
    urg: "**Hospitalizar (PCDT DPOC 2025)** se: resposta insatisfatória ao tratamento ambulatorial, piora significativa da dispneia, sono ou alimentação prejudicados, hipoxemia/hipercapnia agravadas, **alteração do estado mental**, incapacidade de autocuidado ou sem suporte em casa, incerteza diagnóstica ou comorbidade relevante (pneumonia, cardiopatia, DM, DRC) [F].",
    resumo: "Piora aguda, **em até 14 dias**, de dispneia e/ou tosse e escarro, às vezes com taquipneia e taquicardia (GOLD 2026) [F]. Tratar com **SABA ± SAMA**, **prednisona 40 mg por 5 dias** [F] e **antibiótico por ≤ 5 dias** se ≥ 2 de: aumento da dispneia, do volume ou da **purulência do escarro – sendo a purulência um deles** [F]. Sempre afastar **pneumonia, TEP, IC aguda e pneumotórax** [F].",
    calcs: ["sc:roma"],
    secoes: [
      {t: "Classificar (Roma, GOLD 2026)", b: [
        {tab: {h: ["Variável", "Leve", "Moderada (≥ 3 de 5)"], r: [
          ["Dispneia (escala visual 0–10)", "< 5", "≥ 5"],
          ["FR", "< 24 irpm", "≥ 24 irpm"],
          ["FC", "< 95 bpm", "≥ 95 bpm"],
          ["SpO₂ em repouso (ar ambiente ou O₂ habitual)", "≥ 92% e queda ≤ 3%", "< 92% e/ou queda > 3%"],
          ["PCR (se disponível)", "< 10 mg/L", "≥ 10 mg/L"]
        ]}, nota: "GOLD 2026, Figura 4.2 [F]. **Grave** exige gasometria: PaO₂ ≤ 60 mmHg e/ou hipercapnia com acidose – na APS, tratar como grave quem tem critérios de moderada com sinais de falência ou alteração mental [I]."}
      ]},
      {t: "Diferenciais", b: [
        {tab: {h: ["Hipótese", "Pistas"], r: [
          ["Pneumonia", "Febre, crepitações focais, consolidação na radiografia [F]"],
          ["TEP", "Dispneia desproporcional, dor pleurítica, sem aumento de escarro, imobilização [F]"],
          ["IC aguda", "Ortopneia, edema, B3, congestão na radiografia [F]"],
          ["Pneumotórax", "Dor súbita, MV abolido unilateral, enfisema bolhoso [F]"],
          ["Arritmia / IAM", "Palpitação, dor torácica; ECG [F]"]
        ]}, nota: "GOLD 2026, cap. 4 [F]."}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "DPOC com piora da dispneia, tosse ou escarro"},
          {t: "Critério de hospitalização do PCDT ou SpO₂ < 88% apesar de O₂?", ramos: [
            {r: "Sim", n: [{t: "Urgência (O₂ alvo 88–92%, broncodilatador no transporte)", k: "stop"}]},
            {r: "Não", n: [{t: "Afastar pneumonia, TEP, IC e pneumotórax"}]}
          ]},
          {t: "Gravidade (Roma)", ramos: [
            {r: "Leve", n: [{t: "Aumentar SABA ± SAMA; reavaliar em 48 h", k: "ok"}]},
            {r: "Moderada", n: [{t: "SABA ± SAMA + prednisona 40 mg 5 dias", k: "warn"}]}
          ]},
          {t: "≥ 2 entre dispneia, volume e purulência do escarro (purulência entre elas)?", ramos: [
            {r: "Sim", n: [{t: "Antibiótico por 5 dias", k: "warn"}]},
            {r: "Não", n: [{t: "Sem antibiótico", k: "ok"}]}
          ]},
          {t: "Sem melhora no 5º dia → reavaliar; o PCDT admite estender o corticoide a 10–14 dias", k: "q"},
          {t: "Após a crise: revisar técnica, adesão, vacinas, tabagismo e manutenção (perfil exacerbador → LAMA+LABA)", k: "ok"}
        ], nota: "PCDT DPOC 2025 [F]; GOLD 2026, cap. 4 [F]."},
        {ir: [["cr-dpoc", "DPOC – manutenção"], ["pac", "Pneumonia (PAC)"], ["tabagismo", "Tabagismo"]]}
      ]},
      {t: "Tratar", b: [
        {tab: {h: ["Medida", "Esquema", "Fonte"], r: [
          ["Broncodilatador", "Salbutamol 100 mcg 2–4 jatos com espaçador a cada 4–6 h ± ipratrópio 20 mcg 2 jatos 6/6–8/8h", "GOLD 2026 (classe) [F]; doses da prescrição do app [NV]"],
          ["Corticoide", "Prednisona 40 mg/dia VO por 5 dias; se uso > 3 semanas, retirada gradual", "PCDT DPOC 2025 [F]"],
          ["Antibiótico", "Amoxicilina + clavulanato, doxiciclina ou macrolídeo, conforme resistência local; ≤ 5 dias", "GOLD 2026 [F]; doses [NV]"],
          ["O₂", "Alvo SpO₂ 88–92% durante transporte/observação", "GOLD [C]"]
        ]}},
        {trio: {ideal: "Após exacerbação moderada ou grave, manutenção com LAMA+LABA (± ICS se eosinófilos ≥ 300) reduz novas crises.", sus: "Na REMUME de Betim há salbutamol, ipratrópio e beclometasona; LAMA+LABA só pelo CEAF, conforme PCDT DPOC.", ponte: "Perfil exacerbador (≥ 2 moderadas ou ≥ 1 internação em 12 meses) cumpre critério do PCDT: abrir LME com espirometria. Enquanto isso, ipratrópio regular + salbutamol de resgate."}},
        {ref: ["pcdt_dpoc2025", "gold2026", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["gold2026"], mud: "classificação de Roma, critérios de hospitalização do PCDT, critério de antibiótico GOLD 2026 e fluxograma"});

  // ── 5. Epistaxe anterior
  G("epistaxe", {
    urg: "Sangramento pelas duas narinas ou pela orofaringe, **instabilidade hemodinâmica**, falha da compressão de 15 min + tamponamento anterior, ou anticoagulado com sangramento persistente: **urgência** (suspeita de epistaxe posterior) [C].",
    resumo: "Cerca de 90% das epistaxes são **anteriores** (plexo de Kiesselbach) e param com **compressão firme e contínua da parte mole do nariz por 10–15 min**, cabeça inclinada **para frente** [C]. Investigar causa local (manipulação, ressecamento, rinite) e sistêmica (**anticoagulante/antiagregante, coagulopatia, hepatopatia**) [C]. A PA elevada costuma ser reação, não causa – tratar depois [C].",
    secoes: [
      {t: "Reconhecer", b: [
        {ul: [
          "Anterior: sangue saindo por uma narina, ponto visível no septo anterior com rinoscopia [C].",
          "Posterior: idoso, hipertenso, aterosclerótico, sangue escorrendo na orofaringe mesmo com compressão [C].",
          "Recorrente unilateral em **adolescente do sexo masculino** com obstrução nasal: pensar em angiofibroma juvenil [C].",
          "Sangramentos em outros locais (gengiva, equimoses, menorragia): investigar coagulopatia [C]."
        ]}
      ]},
      {t: "Decidir e tratar", b: [
        {fluxo: [
          {t: "Epistaxe ativa: sentado, inclinado para frente; avaliar sinais vitais"},
          {t: "Instável ou sangramento posterior?", ramos: [
            {r: "Sim", n: [{t: "Urgência (acesso venoso, compressão no transporte)", k: "stop"}]},
            {r: "Não", n: [{t: "Assoar para retirar coágulos; compressão contínua 10–15 min (cronometrar)"}]}
          ]},
          {t: "Parou?", ramos: [
            {r: "Sim", n: [{t: "Hidratar a mucosa (vaselina/soro) 7 dias; evitar assoar e esforço 48 h", k: "ok"}]},
            {r: "Não", n: [{t: "Algodão com vasoconstritor/anestésico ou ácido tranexâmico tópico + nova compressão; tamponamento anterior", k: "warn"}]}
          ]},
          {t: "Falha → urgência/otorrino; recorrente → otorrino (cauterização)", k: "warn"}
        ], nota: "AAO-HNS 2020 [C]. Ácido tranexâmico injetável e vasoconstritor nasal não constam na REMUME Betim [F]."},
        {tab: {h: ["Em uso de", "Conduta"], r: [
          ["Varfarina", "INR; não suspender por rotina se o sangramento parou [C]"],
          ["DOAC ou antiagregante", "Não suspender por rotina; discutir se sangramento grave ou recorrente [C]"],
          ["Nenhum, mas recorrente", "Hemograma, plaquetas, TP/TTPa; pesquisar doença de von Willebrand e telangiectasias [C]"]
        ]}},
        {ref: ["epistaxe", "remume"]}
      ]}
    ]
  }, {nv: ["Disponibilidade de material de tamponamento anterior e de vasoconstritor tópico nas UBS de Betim."]});

  // ── 6. Laringite aguda
  G("laringite", {
    urg: "**Estridor, dispneia, sialorreia, voz abafada, incapacidade de engolir** ou toxemia: epiglotite, abscesso retrofaríngeo/periamigdaliano ou angioedema → **urgência** [C].",
    resumo: "Rouquidão aguda, geralmente **viral** e associada a resfriado ou a **esforço vocal**, que regride em **1–2 semanas** [C]. Antibiótico não traz benefício relevante (Cochrane) [C]. **Rouquidão > 4 semanas** – ou antes, se tabagista, etilista, após cirurgia de tireoide/pescoço ou com disfagia, hemoptise, massa cervical – exige **laringoscopia** [C].",
    secoes: [
      {t: "Diferenciais da rouquidão", b: [
        {tab: {h: ["Hipótese", "Pistas"], r: [
          ["Laringite viral", "Resfriado recente, odinofagia, < 2 semanas [C]"],
          ["Abuso vocal / nódulos", "Professores, cantores, piora ao fim do dia [C]"],
          ["Laringite por refluxo", "Pigarro, globus, pirose, piora pela manhã [C]"],
          ["Corticoide inalatório", "Asma/DPOC em uso de ICS sem espaçador ou sem lavar a boca; candidíase [C]"],
          ["Câncer de laringe", "Tabagista/etilista, rouquidão progressiva > 4 semanas, disfagia, otalgia reflexa, linfonodo [C]"],
          ["Paralisia de prega vocal", "Pós-tireoidectomia, cirurgia cardíaca/cervical, voz soprosa; neoplasia de pulmão/mediastino [C]"],
          ["Hipotireoidismo", "Voz grave e lenta, outros sintomas de hipotireoidismo [C]"]
        ]}}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Rouquidão"},
          {t: "Estridor, dispneia ou disfagia intensa?", ramos: [
            {r: "Sim", n: [{t: "Urgência", k: "stop"}]},
            {r: "Não", n: [{t: "Fator de risco (tabagismo, cirurgia cervical, massa, hemoptise)?"}]}
          ]},
          {t: "Risco", ramos: [
            {r: "Sim", n: [{t: "Laringoscopia sem esperar 4 semanas", k: "warn"}]},
            {r: "Não", n: [{t: "Repouso vocal, hidratação, tratar resfriado/refluxo", k: "ok"}]}
          ]},
          {t: "Persistiu > 4 semanas → otorrino (laringoscopia)", k: "warn"}
        ], nota: "AAO-HNS – diretriz de disfonia (2018), citada de memória [C]."},
        {ul: [
          "Repouso vocal relativo: falar pouco e baixo; **sussurrar também força a laringe** [C].",
          "Antibiótico e corticoide de rotina não são indicados [C]."
        ]},
        {ref: ["cochrane_laringite"]}
      ]}
    ]
  });

  // ── 7. Odontalgia
  G("odontalgia", {
    urg: "**Edema que progride para o pescoço ou o assoalho da boca**, trismo, disfagia, voz abafada, dispneia, edema periorbitário ou toxemia: **angina de Ludwig / celulite facial** → urgência (bucomaxilofacial) [C].",
    resumo: "O tratamento é **odontológico** (remoção de cárie, pulpotomia/pulpectomia, drenagem, extração) – o papel do médico é **classificar, aliviar a dor e garantir o acesso à saúde bucal** [F/C]. Analgesia mais eficaz: **ibuprofeno + paracetamol** (ADA) [C]. **Antibiótico só com edema/celulite ou sinais sistêmicos** – não trata pulpite (ADA 2019) [C]; o CAB 28 indica antibiótico no abscesso periapical **quando houver edema associado** [F].",
    secoes: [
      {t: "Reconhecer pela dor (CAB 28)", b: [
        {tab: {h: ["Quadro", "Como é a dor", "Conduta odontológica"], r: [
          ["Cárie / pulpite reversível", "**Provocada** (frio, doce); cessa logo ou pouco depois do estímulo", "Remover cárie e selar; analgésico facultativo [F]"],
          ["Pulpite irreversível", "**Espontânea, intensa, contínua, pior em decúbito**, difusa ou referida", "Pulpotomia/pulpectomia [F]"],
          ["Pericementite apical", "Contínua; **dói à percussão**; dente não responde ao frio", "Tratamento endodôntico; o CAB 28 contraindica AINE na forma simples [F]"],
          ["Abscesso periapical", "Pulsátil, 'dente crescido', mobilidade, tumefação no vestíbulo", "Drenagem; antibiótico se edema [F]"],
          ["Abscesso periodontal / GUN", "Dor localizada na gengiva, pus na bolsa; gengiva necrótica e fétida", "Drenagem, clorexidina; antimicrobiano se sistêmico [F]"],
          ["Pericoronarite", "Siso semi-incluso, dor, trismo, otalgia, febre", "Clorexidina; antibiótico nas fases supurada/crônica [F]"],
          ["Alveolite", "Dor intensa 24–48 h após extração", "Limpeza do alvéolo; analgesia [F]"]
        ]}, nota: "CAB 28, cap. 2.21 [F]."}
      ]},
      {t: "Diferenciais (dor que parece de dente)", b: [
        {ul: [
          "**Rinossinusite maxilar:** dor em vários dentes superiores, pior ao inclinar a cabeça (CAB 28) [F].",
          "**Neuralgia do trigêmeo:** choques de segundos desencadeados por toque/mastigação [C].",
          "**Disfunção temporomandibular:** dor pré-auricular, estalidos, bruxismo [C].",
          "**IAM:** dor em mandíbula com esforço, sudorese, fatores de risco – lembrar sempre [C].",
          "**Herpes-zóster** antes das vesículas [C]."
        ]}
      ]},
      {t: "Decidir e tratar", b: [
        {fluxo: [
          {t: "Dor de dente"},
          {t: "Edema cervical/assoalho, trismo, disfagia, dispneia ou toxemia?", ramos: [
            {r: "Sim", n: [{t: "Urgência", k: "stop"}]},
            {r: "Não", n: [{t: "Edema facial localizado, febre ou linfadenopatia?"}]}
          ]},
          {t: "Sinais de infecção disseminada local", ramos: [
            {r: "Sim", n: [{t: "Antibiótico (amoxicilina) + analgesia + dentista em até 24 h", k: "warn"}]},
            {r: "Não", n: [{t: "Analgesia (ibuprofeno + paracetamol), sem antibiótico; saúde bucal com prioridade", k: "ok"}]}
          ]},
          {t: "Dor que não cede ou edema que aumenta em 48 h → reavaliar no mesmo dia", k: "warn"}
        ], nota: "CAB 28 [F]; ADA 2019 (antibiótico) e ADA 2023/2024 (analgesia), citados de memória [C]."},
        {tab: {h: ["Fonte", "Pulpite / abscesso localizado sem edema"], r: [
          ["CAB 28 (2013)", "Pulpite irreversível: intervenção 'com o uso de antimicrobianos' [F]"],
          ["ADA (2019)", "Não prescrever antibiótico; tratar a causa odontológica [C]"]
        ]}, nota: "Divergência: a recomendação mais recente e a evidência sustentam **não usar antibiótico** quando não há edema nem sinais sistêmicos; seguir a ADA [I]."},
        {ir: [["sinusite", "Rinossinusite aguda"], ["celulite", "Celulite"]]},
        {ref: ["cab28_odonto", "ada_dente", "remume"]}
      ]}
    ]
  }, {fontes: ["cab28_odonto"], mud: "classificação da dor do CAB 28, diferenciais, fluxograma e divergência CAB 28 × ADA sobre antibiótico"});

  // ── 8. Resfriado comum
  G("resfriado", {
    urg: "Dispneia, SpO₂ ≤ 94%, desconforto respiratório ou piora da doença de base: avaliar **SRAG** [F]. **Edema periorbitário, cefaleia intensa, alteração visual, toxemia ou rigidez de nuca**: complicação de rinossinusite → urgência (CAB 28) [F].",
    resumo: "Rinossinusite viral (rinovírus e outros), com coriza, obstrução, espirros e irritação na garganta; **pico até o 3º dia e regressão do 7º ao 10º**, tosse pode durar mais [F]. **Secreção esverdeada após alguns dias não indica bactéria** [F]. Suspeitar de bacteriana se **> 10–14 dias** ou **piora após o 5º dia** [F]. Tratamento de suporte; **sem antibiótico, AINE ou corticoide** (CAB 28) [F].",
    secoes: [
      {t: "Diferenciais", b: [
        {tab: {h: ["Hipótese", "O que separa"], r: [
          ["Síndrome gripal (influenza/covid)", "Febre súbita com mialgia, cefaleia, prostração [F]"],
          ["Rinossinusite bacteriana", "> 10–14 dias, piora após o 5º dia, dor facial, febre alta [F]"],
          ["Rinite alérgica", "Espirros em salva, prurido, atopia, recorrência com gatilhos, sem febre [F]"],
          ["Faringite estreptocócica", "Febre, exsudato, adenomegalia cervical dolorosa, **sem coriza nem tosse** [C]"],
          ["Corpo estranho nasal (criança)", "Rinorreia **unilateral fétida** [C]"]
        ]}},
        {det: {t: "Fisiopatologia", b: ["O vírus infecta o epitélio nasal e desencadeia resposta inflamatória (bradicinina, citocinas) – é a resposta do hospedeiro, mais que o dano viral, que produz a obstrução e a coriza. A secreção espessa e verde dos dias seguintes reflete neutrófilos e células descamadas, não infecção bacteriana [F/C]."]}}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Coriza, obstrução, espirros, dor de garganta"},
          {t: "Febre súbita com mialgia/prostração?", ramos: [
            {r: "Sim", n: [{t: "Síndrome gripal: avaliar fatores de risco e oseltamivir", k: "warn"}]},
            {r: "Não", n: [{t: "Resfriado: suporte e orientação", k: "ok"}]}
          ]},
          {t: "> 10–14 dias ou piora após o 5º dia?", ramos: [
            {r: "Sim", n: [{t: "Rinossinusite bacteriana provável", k: "warn"}]},
            {r: "Não", n: [{t: "Manter suporte", k: "ok"}]}
          ]},
          {t: "Sinais de complicação (órbita, SNC) → urgência", k: "stop"}
        ], nota: "CAB 28, cap. 2.18 [F]."},
        {ir: [["gripal", "Síndrome gripal"], ["sinusite", "Rinossinusite bacteriana"], ["covid", "COVID-19"], ["rinite", "Rinite alérgica"]]}
      ]},
      {t: "Tratar", b: [
        {ul: [
          "Paracetamol ou dipirona para dor e febre; **AINE e corticoide não recomendados** [F].",
          "Hidratação, lavagem nasal com soro fisiológico; inalação de vapor com cuidado em crianças (queimaduras) [F].",
          "Descongestionante tópico só ocasional e **por até 3 dias** (rinite medicamentosa); **nunca em lactentes** (intoxicação) [F].",
          "Descongestionante oral: evitar em hipertensos, HPB, glaucoma e em quem usa antidepressivos/IMAO [F].",
          "Anti-histamínico sem eficácia em não atópicos; mucolíticos sem vantagem; vitamina C sem benefício [F]."
        ]},
        {ref: ["cab28_rs", "cochrane_resfriado", "guia_influenza"]}
      ]}
    ]
  }, {fontes: ["cab28_rs"]});

  // ── 9. Rinite alérgica
  G("rinite", {
    resumo: "Inflamação da mucosa nasal mediada por IgE: **espirros em salva, prurido nasal, coriza aquosa e obstrução**, com gatilhos (ácaros, mofo, pelos, fumaça) [F/C]. Classificar em **intermitente** (< 4 dias/semana ou < 4 semanas/ano) ou **persistente**, e em leve ou moderada/grave [F]. **Corticoide intranasal é o mais eficaz e a 1ª linha** na persistente e/ou moderada/grave, por **pelo menos 60–90 dias** [F]. **Sempre perguntar por asma** [C].",
    secoes: [
      {t: "Reconhecer", b: [
        {ul: [
          "Sinais: prega nasal transversa ('saudação alérgica'), olheiras, cornetos pálidos e edemaciados, respiração oral [C].",
          "Moderada/grave: sono alterado, prejuízo de atividades, escola ou trabalho, ou sintomas incômodos (critério ARIA) [C].",
          "Associações: asma, conjuntivite alérgica, dermatite atópica, rinossinusite, otite média com efusão [C]."
        ]},
        {det: {t: "Fisiopatologia", b: ["Na sensibilização, o alérgeno induz resposta Th2 e IgE específica, que se liga aos mastócitos. Na reexposição, a degranulação libera histamina e leucotrienos (fase imediata: espirros, prurido, coriza) e recruta eosinófilos (fase tardia: obstrução). Por isso o anti-histamínico alivia espirros e prurido, e o corticoide intranasal age também na obstrução [F/C]."]}}
      ]},
      {t: "Diferenciais", b: [
        {tab: {h: ["Rinite", "Pistas"], r: [
          ["Infecciosa (viral)", "Aguda, autolimitada, com febre baixa e odinofagia [F]"],
          ["Medicamentosa", "Descongestionante tópico por > 3–5 dias com rebote; também IECA, betabloqueador, AINE, sildenafila [F/C]"],
          ["Gestacional / hormonal", "Obstrução no 2º–3º trimestre, regride após o parto [F]"],
          ["Ocupacional / irritativa", "Piora no trabalho, fumo, produtos de limpeza [F]"],
          ["Do idoso / vasomotora", "Coriza aquosa com frio, comida quente, álcool, sem prurido [F]"],
          ["Estrutural", "Obstrução **unilateral** fixa: desvio septal, pólipo, corpo estranho, tumor [C]"]
        ]}, nota: "V Consenso Brasileiro sobre Rinites 2024, Tabela 1 [F]."}
      ]},
      {t: "Decidir e tratar", b: [
        {fluxo: [
          {t: "Sintomas nasais com prurido/espirros e gatilhos"},
          {t: "Obstrução unilateral fixa, sangramento ou anosmia?", ramos: [
            {r: "Sim", n: [{t: "Otorrino (pólipo, desvio, tumor)", k: "warn"}]},
            {r: "Não", n: [{t: "Intermitente leve?"}]}
          ]},
          {t: "Intermitente leve", ramos: [
            {r: "Sim", n: [{t: "Anti-H1 de 2ª geração sob demanda + soro nasal + controle ambiental", k: "ok"}]},
            {r: "Não (persistente ou moderada/grave)", n: [{t: "Corticoide intranasal diário (≥ 60–90 dias) ± anti-H1", k: "ok"}]}
          ]},
          {t: "Reavaliar em 4–8 semanas: técnica do spray e adesão antes de escalar", k: "q"},
          {t: "Refratária ao tratamento otimizado → otorrino/alergologia (imunoterapia)", k: "warn"}
        ], nota: "V Consenso Brasileiro sobre Rinites 2024 [F]; ARIA [C]."},
        {tab: {h: ["Corticoide intranasal", "Posologia (Tabela 8 do consenso)"], r: [
          ["Budesonida 32/50/64 mcg (REMUME: 32 mcg)", "Crianças > 6 anos: 1–2 jatos/narina 1×/dia [F]; adultos: conferir bula [NV]"],
          ["Beclometasona 50 mcg", "6–12 anos: 1–2 jatos/narina 12/12h; > 12 anos: 2 jatos/narina 12/12h [F]"],
          ["Mometasona 50 mcg", "2–11 anos: 1 jato/narina 1×/dia; > 12 anos: 2 jatos/narina 1×/dia [F]"]
        ]}, nota: "Dirigir o jato para a parede lateral (para a orelha do mesmo lado), não para o septo [C]."},
        {ul: [
          "Anti-H1 de nova geração (loratadina) sempre preferido aos clássicos (dexclorfeniramina, hidroxizina), em todas as idades – menos sedação [F].",
          "Descongestionantes: **sem indicação** na rinite alérgica [F]. Montelucaste: risco de eventos psiquiátricos [F].",
          "Corticoide oral só em crise grave e refratária, por poucos dias [F]."
        ]},
        {ir: [["conj-alergica", "Conjuntivite alérgica"], ["cr-asma", "Asma – manutenção"]]},
        {ref: ["aborl_rinite2024", "aria", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["aborl_rinite2024"], nv: ["Posologia da budesonida 32 mcg nasal em adultos: conferir bula."]});

  // ── 10. Tosse subaguda
  G("tosse-subaguda", {
    urg: "**Hemoptise, perda de peso, febre persistente, sudorese noturna, dispneia progressiva** ou tabagista > 40 anos com tosse que mudou de padrão: investigação ampliada (radiografia de tórax) [C].",
    resumo: "Tosse de **3 a 8 semanas** [C]. Se começou com infecção respiratória e o exame é normal, a causa mais comum é **pós-infecciosa** (hiper-reatividade transitória, gotejamento pós-nasal), que regride sozinha [C]. Antes de rotular: **coqueluche**, **asma**, **rinossinusite**, **DRGE**, **IECA** e, sempre que tosse ≥ 3 semanas, **tuberculose** [F/C].",
    secoes: [
      {t: "Critérios", b: [
        {tab: {h: ["Duração", "Classificação"], r: [
          ["< 3 semanas", "Aguda [C]"],
          ["3–8 semanas", "Subaguda [C]"],
          ["> 8 semanas", "Crônica [C]"]
        ]}},
        "**Sintomático respiratório:** tosse **≥ 3 semanas** na população geral → baciloscopia/TRM-TB; **qualquer duração** em pessoas privadas de liberdade, profissionais de saúde, pessoas vivendo com HIV, pessoas em situação de rua e indígenas (Manual de TB 2019, Quadro 51) [F]."
      ]},
      {t: "Diferenciais", b: [
        {tab: {h: ["Causa", "Pistas"], r: [
          ["Pós-infecciosa", "Começou com resfriado/bronquite, exame normal, melhora progressiva [C]"],
          ["Coqueluche", "Paroxismos, guincho inspiratório, vômito pós-tosse, sem febre [C]"],
          ["Síndrome da tosse de vias aéreas superiores", "Gotejamento, pigarro, coriza, rinite/sinusite [C]"],
          ["Asma / tosse variante", "Tosse noturna, com exercício ou frio, atopia [C]"],
          ["DRGE", "Pirose, regurgitação, tosse pós-prandial [C]"],
          ["IECA", "Tosse seca em uso de enalapril/captopril (pode começar meses depois) [F]"],
          ["Tuberculose", "≥ 3 semanas, febre vespertina, emagrecimento [F]"]
        ]}}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Tosse há 3–8 semanas"},
          {t: "Sinais de alerta ou exame alterado?", ramos: [
            {r: "Sim", n: [{t: "Radiografia de tórax e investigação dirigida", k: "warn"}]},
            {r: "Não", n: [{t: "Sintomático respiratório: baciloscopia/TRM-TB", k: "warn"}]}
          ]},
          {t: "Paroxismos/guincho → coqueluche (notificar, tratar e contatos)", k: "q"},
          {t: "Usa IECA → trocar por BRA", k: "q"},
          {t: "Sem pistas → pós-infecciosa: explicar, mel, ipratrópio se incômoda", k: "ok"},
          {t: "> 8 semanas → tosse crônica: radiografia, espirometria, tratamento empírico das causas comuns", k: "warn"}
        ], nota: "Manual de TB 2019 [F]; TelessaúdeRS Pneumologia 2023, Protocolo 4 [F]; CHEST [C]."},
        {ul: [
          "Encaminhar à pneumologia só após investigação inconclusiva na APS e falha do tratamento empírico de IECA, vias aéreas superiores, asma, DRGE, DPOC e TB [F].",
          "Se a tosse persistir > 4 semanas após suspender o IECA: encaminhar [F]."
        ]},
        {ir: [["tb-sr", "Investigação de TB"], ["coqueluche", "Coqueluche"], ["drge", "DRGE"], ["cr-asma", "Asma"]]},
        {ref: ["tb_sr2019", "tsrs_pneumo2023", "chest_tosse"]}
      ]}
    ]
  }, {fontes: ["tb_sr2019", "tsrs_pneumo2023"]});

  // ── 11. Blefarite
  G("blefarite", {
    resumo: "Inflamação **crônica e recidivante** das bordas palpebrais, ligada a estafilococos (CAB 28), disfunção das glândulas de Meibômio, dermatite seborreica e rosácea [F/C]. Ardor, prurido, crostas nos cílios, olho vermelho e sensação de areia, **bilateral** e pior pela manhã [C]. Base do tratamento: **calor local, massagem e limpeza diárias, para sempre** [C]. **Blefarite unilateral, refratária ou com perda de cílios em idoso: pensar em neoplasia palpebral** (TelessaúdeRS) [F].",
    secoes: [
      {t: "Diferenciais", b: [
        {tab: {h: ["Hipótese", "Pistas"], r: [
          ["Conjuntivite", "Secreção, hiperemia conjuntival difusa, início agudo [F]"],
          ["Olho seco", "Piora com tela e vento, melhora com lubrificante; muitas vezes coexiste [C]"],
          ["Rosácea ocular", "Eritema facial, telangiectasias, calázios de repetição [C]"],
          ["Demodex", "Crostas cilíndricas na base dos cílios [C]"],
          ["Carcinoma sebáceo / basocelular", "**Unilateral**, madarose, espessamento ou ulceração da borda, idoso [F/C]"],
          ["Herpes / molusco palpebral", "Vesículas ou pápulas umbilicadas na borda [C]"]
        ]}}
      ]},
      {t: "Decidir e tratar", b: [
        {fluxo: [
          {t: "Bordas palpebrais vermelhas, crostas, ardor"},
          {t: "Unilateral, perda de cílios, ulceração ou baixa visual?", ramos: [
            {r: "Sim", n: [{t: "Oftalmologia (biópsia/avaliação)", k: "warn"}]},
            {r: "Não", n: [{t: "Compressa morna 5–10 min + massagem + limpeza 1–2×/dia", k: "ok"}]}
          ]},
          {t: "Crostas importantes → pomada antibiótica curta; olho seco → lágrima artificial", k: "q"},
          {t: "Meibomite/rosácea refratária → doxiciclina em dose baixa por semanas (não em gestantes nem < 8 anos)", k: "q"},
          {t: "Sem resposta após meses de higiene bem feita → oftalmologia", k: "warn"}
        ], nota: "CAB 28 [F]; TelessaúdeRS Oftalmologia 2023, Protocolo 5 [F]; AAO 2023 [C]."},
        {ir: [["hordeolo", "Hordéolo e calázio"], ["seborreica", "Dermatite seborreica"], ["conj-bact", "Conjuntivite bacteriana"]]},
        {ref: ["cab28_olho", "tsrs_oft2023", "aao_blef", "remume"]}
      ]}
    ]
  }, {fontes: ["cab28_olho", "tsrs_oft2023"]});

  // ── 12. Corpo estranho / abrasão de córnea
  G("corpo-estranho-ocular", {
    urg: "**Queimadura química:** irrigar imediata e abundantemente (SF 0,9% ou água corrente) **antes de qualquer outra coisa** e encaminhar com urgência [F]. **Suspeita de perfuração** (martelar metal, esmeril, pupila irregular, câmara rasa, extravasamento): curativo **não compressivo**, não pressionar o olho, urgência [F]. Baixa visual após trauma contuso: urgência (descolamento de retina) [F].",
    resumo: "Sensação de areia, dor, lacrimejamento e fotofobia após partícula ou arranhão [C]. Passo a passo da APS (CAB 28): **acuidade visual**, colírio anestésico (**proximetacaína** na REMUME), **irrigação com SF**, **everter a pálpebra superior**, **uma única tentativa** de remoção com cotonete úmido e **fluoresceína** [F]. Lesão superficial **sem melhora em 24 h**: pensar em **úlcera de córnea** → urgência [F]. **Usuário de lente de contato com sintoma agudo: emergência oftalmológica** [F].",
    secoes: [
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Olho com sensação de corpo estranho"},
          {t: "Química, perfuração, baixa visual importante ou lente de contato?", ramos: [
            {r: "Sim", n: [{t: "Química: irrigar já; demais: proteção sem pressão → urgência", k: "stop"}]},
            {r: "Não", n: [{t: "Acuidade visual; anestésico; irrigar; everter a pálpebra"}]}
          ]},
          {t: "Corpo estranho visível e superficial?", ramos: [
            {r: "Sim", n: [{t: "Uma tentativa com cotonete úmido", k: "ok"}]},
            {r: "Não saiu / central / anel de ferrugem", n: [{t: "Oftalmologia no mesmo dia", k: "warn"}]}
          ]},
          {t: "Fluoresceína: abrasão → antibiótico tópico e analgesia oral", k: "ok"},
          {t: "Sem melhora em 24 h → úlcera de córnea? urgência", k: "stop"}
        ], nota: "CAB 28, cap. 2.22 [F]; TelessaúdeRS Oftalmologia 2023, Protocolo 7 [F]."},
        {tab: {h: ["Ponto", "CAB 28 (2013)", "Evidência posterior"], r: [
          ["Oclusão", "Pomada antibiótica, ocluir e encaminhar [F]", "Oclusão não acelera a cicatrização e pode atrasar; não ocluir (Cochrane) [C]"],
          ["Encaminhamento", "Encaminhar ao serviço de oftalmologia [F]", "TelessaúdeRS: emergência se não foi possível remover na APS ou sem melhora [F]"]
        ]}, nota: "Corpo estranho superficial removido, abrasão pequena e visão normal podem ser acompanhados na APS com reavaliação em 24 h [I]."},
        "**Nunca** prescrever colírio anestésico para casa: retarda a cicatrização e pode causar úlcera [C].",
        {ir: [["olho-vermelho-alarme", "Olho vermelho com sinais de alarme"]]},
        {ref: ["cab28_olho", "tsrs_oft2023", "remume"]}
      ]}
    ]
  }, {fontes: ["cab28_olho", "tsrs_oft2023"], mud: "passo a passo do CAB 28, critérios de emergência TelessaúdeRS, divergência sobre oclusão"});

  // ── 13. Hemorragia subconjuntival
  G("hemorragia-subconj", {
    urg: "Hemorragia **após trauma** com dor, baixa visual, hemorragia em 360° com quemose ou pupila irregular: pode esconder **ruptura do globo** → oftalmologia urgente [C].",
    resumo: "Mancha vermelho-vivo, **homogênea e bem delimitada**, sem dor, sem secreção e **com visão normal** [C]. Em geral surge após **esforço (tosse, vômito, evacuação) ou pico hipertensivo** e **reabsorve sozinha** em 1–3 semanas (CAB 28) [F]. Medir PA e perguntar por **anticoagulante**; recorrente ou com outros sangramentos: investigar coagulopatia [C].",
    secoes: [
      {t: "Reconhecer", b: [
        ...FO("hemorragia"),
        {tab: {h: ["Diferencial", "O que separa"], r: [
          ["Conjuntivite", "Hiperemia difusa de vasos visíveis, secreção, prurido [F]"],
          ["Episclerite", "Hiperemia **localizada** de vasos, sem secreção, desconforto leve [F]"],
          ["Esclerite", "Dor profunda intensa, pior à noite, cor violácea; doença autoimune [C]"],
          ["Hifema", "Sangue **dentro** do olho (nível na câmara anterior) após trauma [F]"]
        ]}}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Mancha vermelha na esclera"},
          {t: "Trauma, dor, baixa visual ou fotofobia?", ramos: [
            {r: "Sim", n: [{t: "Oftalmologia urgente", k: "stop"}]},
            {r: "Não", n: [{t: "Medir PA; revisar anticoagulante (INR se varfarina)"}]}
          ]},
          {t: "Tranquilizar: reabsorve em 1–3 semanas, mudando de cor; lágrima artificial se desconforto", k: "ok"},
          {t: "Recorrente ou com outros sangramentos → hemograma, plaquetas, TP/TTPa", k: "warn"}
        ], nota: "CAB 28, cap. 2.22 [F]; investigação citada de memória [C]."},
        {ir: [["olho-vermelho-alarme", "Olho vermelho com sinais de alarme"], ["cr-fa", "Anticoagulação"]]},
        {ref: ["cab28_olho", "remume"]}
      ]}
    ]
  }, {fontes: ["cab28_olho"], mud: "diferenciais do olho vermelho, fluxograma e foto"});

  // ── 14. Hordéolo e calázio
  G("hordeolo", {
    urg: "**Edema e eritema de toda a pálpebra com febre**: celulite pré-septal; se houver **dor à movimentação ocular, proptose, baixa visual ou diplopia**: celulite orbitária → urgência [C].",
    resumo: "**Hordéolo (terçol):** infecção aguda **dolorosa** de glândula da pálpebra, com ponto de pus na borda [C]. **Calázio:** nódulo **indolor**, crônico, afastado da borda, por obstrução de glândula de Meibômio [C]. Tratamento: **calor local 5–10 min, 3–5 vezes ao dia, com leve compressão** e pomada antibiótica se necessário (TelessaúdeRS) [F]. Não espremer. **Recorrente no mesmo local em idoso: pensar em neoplasia** [F].",
    secoes: [
      {t: "Reconhecer", b: [
        ...FO("hordeolo", "calazio"),
        {tab: {h: ["", "Hordéolo", "Calázio"], r: [
          ["Início", "Agudo (dias)", "Insidioso (semanas)"],
          ["Dor", "Sim, à palpação", "Não (ou leve)"],
          ["Local", "Borda palpebral (externo) ou face conjuntival (interno)", "Dentro do tarso, afastado da borda"],
          ["Evolução", "Drena ou regride em 1–2 semanas", "Pode persistir meses"]
        ]}, nota: "Conhecimento consolidado [C]."}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Nódulo na pálpebra"},
          {t: "Edema difuso com febre, dor à movimentação ocular ou proptose?", ramos: [
            {r: "Sim", n: [{t: "Celulite pré-septal/orbitária → urgência", k: "stop"}]},
            {r: "Não", n: [{t: "Calor local 5–10 min, 3–5×/dia, com leve compressão; higiene palpebral", k: "ok"}]}
          ]},
          {t: "Pomada antibiótica se drenagem ou blefarite associada", k: "q"},
          {t: "Recorrente ou calázio sem resposta ao tratamento clínico → oftalmologia", k: "warn"},
          {t: "Idoso com lesão recorrente no mesmo local, perda de cílios ou ulceração → oftalmologia (afastar neoplasia)", k: "warn"}
        ], nota: "TelessaúdeRS Oftalmologia 2023, Protocolo 5 [F]."},
        "Guia de encaminhamento (TelessaúdeRS): descrição, tempo de evolução e recorrência, **fotografia**, se há obstrução do eixo visual e tratamento já feito [F].",
        {ir: [["blefarite", "Blefarite"], ["celulite", "Celulite"]]},
        {ref: ["tsrs_oft2023", "cab28_olho"]}
      ]}
    ]
  }, {fontes: ["tsrs_oft2023", "cab28_olho"], mud: "hordéolo × calázio, fluxograma, critérios de encaminhamento TelessaúdeRS e fotos"});
})();
