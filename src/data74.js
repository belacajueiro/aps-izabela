// ───────────── data74.js – v61: Guia Clínico – lote 11 (Saúde mental, sintomas gerais e pré-natal: 12 itens sem guia)
// + oferta local informada pela usuária em 26/10/2026 (Betim oferece Holter e ecocardiograma; não fornece meias de compressão).
// Conferido em 26/10/2026: CAB 28 vol. II cap. 2.23 (risco de suicídio em três níveis, triagem de depressão, crise de ansiedade, Quadros 65–66,
// clonazepam SOS), CAB 34 (classificação CIAP P74/P79/P78; antidepressivos em ansiedade, pânico e TOC; antidepressivo em pequenas quantidades
// se risco de suicídio), Portaria GM/MS 11.211/2026 (toxoplasmose gestacional e congênita: notificação semanal), REMUME Betim.

Object.assign(FONTES, {
  cab28_sm: {s: "CAB 28 vol. II – saúde mental na demanda espontânea", t: "Ministério da Saúde. Cadernos de Atenção Básica nº 28, vol. II, 2013, cap. 2.23: risco de suicídio (fatores maiores: transtorno mental e tentativa prévia; perguntas sobre plano, meios e data; risco baixo = pensamentos sem plano, médio = pensamentos e plano sem intenção imediata, alto = plano, meios e intenção – não deixar só, acionar CAPS/hospital e transporte); triagem de depressão (2 perguntas + 7; 3–4 positivas leve, 5–7 moderada, 8–9 grave); latência de 2–6 semanas, meta de remissão em 2 meses; Quadro 65 (amitriptilina 10–25 → 100–300 mg; nortriptilina 10–25 → 50–100 mg; fluoxetina 10–20 → 20–80 mg); crise de ansiedade: sintomas por sistema, diferenciais orgânicos (hiper/hipotireoidismo, hiperparatireoidismo, asma, cardiovascular, hipoglicemia) e medicamentosos (anfetaminas, cafeína, corticoides, levotiroxina); antidepressivo é 1ª linha (Quadro 66: fluoxetina 20–80 mg em pânico, TAG, TOC, TEPT); clonazepam 0,25–0,5 mg SL como SOS na UBS; uso contínuo de benzodiazepínico com cautela (manual MS).", f: "F", url: "https://bvsms.saude.gov.br/bvs/publicacoes/acolhimento_demanda_espontanea_queixas_comuns_cab28v2.pdf"},
  betim_info2026: {s: "Oferta local informada pela médica da UBS (Betim)", t: "Informação direta da médica da UBS Bueno Franco, Betim, em 26/10/2026: a rede de Betim oferece Holter e ecocardiograma; não fornece meias de compressão (informação da usuária, não é documento oficial).", f: "F", url: ""}
});

(() => {
  const get = id => CONDICOES.find(x => x.id === id);

  // ── 0. Oferta local informada pela usuária (26/10/2026)
  const ECO = /(holter|ecocardiograma)/i, MEIA = /meias? de compressão|fornecimento de meias/i;
  CONDICOES.forEach(c => {
    if (!Array.isArray(c.nv)) return;
    const antes = c.nv.length;
    c.nv = c.nv.map(s => {
      if (typeof s !== "string" || !/Betim|rede/i.test(s)) return s;
      if (ECO.test(s) && /BNP/.test(s)) return s.replace(/ e ecocardiograma/i, "").replace(/, nível sérico de digoxina e ecocardiograma/i, " e nível sérico de digoxina");
      if (ECO.test(s) || MEIA.test(s)) return null;
      return s;
    }).filter(Boolean);
    if (c.nv.length !== antes || c.nv.some(s => false)) (c.mudancas = c.mudancas || []).push("v61 (26/10/2026): oferta local atualizada pela médica da UBS (Holter e ecocardiograma disponíveis em Betim; meias de compressão não fornecidas).");
  });
  const pal = get("palpitacoes");
  if (pal && pal.sus) pal.sus.betim = "REMUME Betim: propranolol 40 mg e atenolol 50 mg disponíveis. Holter e ecocardiograma: ofertados pela rede de Betim (informado pela médica da UBS em 26/10/2026).";
  const ivc = get("ivc");
  if (ivc && ivc.sus) ivc.sus.betim = "REMUME Betim: venoativos não constam. Meias de compressão: não fornecidas pela rede de Betim (informado pela médica da UBS em 26/10/2026) – compra pelo paciente. Úlcera venosa de difícil cicatrização: 'Consulta de Avaliação de Feridas FHEMIG' no CMCE (regulada; Memorando 0002892/2026).";
  const ecz = get("pele-eczemas");
  if (ecz && ecz.sus && typeof ecz.sus.betim === "string") ecz.sus.betim = ecz.sus.betim.replace("Meias de compressão e curativos especiais: confirmar na rede [NV].", "Meias de compressão: não fornecidas pela rede de Betim (informado pela médica da UBS, 26/10/2026). Curativos especiais: confirmar na rede [NV].");
  if (ivc && ivc.idealsus) ivc.idealsus.sus = "Venoativos e meias de compressão não constam na RENAME/REMUME, e Betim não fornece meias (informado pela médica da UBS).";

  // ── 0b. Toxoplasmose: notificação pela Portaria 11.211/2026
  const tx = get("pn-toxo");
  if (tx) {
    if (typeof tx.encaminhar === "string") tx.encaminhar = tx.encaminhar.replace(/Portaria GM\/MS 6\.734\/2025/, "Portaria GM/MS 11.211/2026");
    if (tx.evid && tx.evid.fontes) tx.evid.fontes = [...new Set(tx.evid.fontes.map(f => f === "notif2025" ? "port11211" : f))];
    (tx.mudancas = tx.mudancas || []).push("v61 (26/10/2026): notificação semanal conferida na Portaria GM/MS 11.211/2026 (substitui a 6.734/2025).");
  }

  const G = (id, guia, o = {}) => {
    const c = get(id); if (!c) return;
    c.guia = guia;
    if (c.evid && o.fontes) c.evid.fontes = [...new Set([...(c.evid.fontes || []), ...o.fontes])];
    (c.mudancas = c.mudancas || []).push("v61 (26/10/2026): Guia Clínico novo – " + (o.mud || "reconhecer, diferenciais, fluxograma e fontes") + ".");
    if (o.nv) c.nv = [...(c.nv || []), ...o.nv];
  };
  const RISCO_SUIC = {tab: {h: ["Risco (CAB 28)", "Critério", "Conduta"], r: [
    ["Baixo", "Pensamentos suicidas **sem plano**", "Apoio e vínculo, trabalhar a ambivalência, avaliar transtorno mental, combinar retorno e referências na equipe [F]"],
    ["Médio", "Pensamentos e **plano**, sem intenção de executar agora", "Idem + discutir com eMulti/CAPS com prioridade, acionar rede de apoio (com consentimento), **afastar meios** [F]"],
    ["Alto", "Plano, **meios e intenção** de executar logo, ou já tomou providências", "**Não deixar sozinho**, acionar CAPS/hospital de referência e transporte [F]"]
  ]}, nota: "CAB 28, cap. 2.23 [F]. Perguntar diretamente não induz o suicídio [F]."};

  // ── 1. Depressão
  G("depressao", {
    urg: "**Ideação com plano, meios e intenção**, tentativa recente, **sintomas psicóticos**, incapacidade de autocuidado ou de se alimentar: **não deixar sozinho**, acionar CAPS/urgência [F]. Perguntar sempre sobre ideação suicida [F].",
    resumo: "Humor deprimido e/ou **perda de interesse** por ≥ 2 semanas, com alterações de apetite, sono, energia, concentração, psicomotricidade, culpa e ideias de morte [F]. A triagem do CAB 28 classifica em **leve (3–4), moderada (5–7) e grave (8–9)** respostas positivas; PHQ-9 é alternativa [F]. Na **leve**, intervenção psicossocial e atividade física; na **moderada/grave**, antidepressivo + psicoterapia [F/C]. Latência de **2–6 semanas**; o erro mais comum é **subdose ou tempo curto** [F]. Excluir **hipotireoidismo, anemia, desnutrição**, álcool e medicamentos [F]. Perguntar por **episódios de mania** antes de iniciar antidepressivo [C].",
    calcs: ["sc:phq9"],
    secoes: [
      {t: "Avaliar risco de suicídio", b: [RISCO_SUIC,
        "Com risco: fornecer antidepressivo **em pequenas quantidades** ou com um cuidador, sobretudo tricíclicos (CAB 34) [F]."]},
      {t: "Diferenciais", b: [
        {tab: {h: ["Hipótese", "Pistas"], r: [
          ["Transtorno bipolar", "Episódio prévio de euforia/irritabilidade, pouca necessidade de sono, gastos; antidepressivo isolado pode virar mania [C]"],
          ["Luto / reação de ajustamento", "Relação clara com perda ou estressor, sintomas proporcionais [C]"],
          ["Hipotireoidismo, anemia, B12, desnutrição", "Fadiga, ganho/perda de peso; exames [F]"],
          ["Álcool e outras drogas", "AUDIT-C; sintomas melhoram com abstinência [C]"],
          ["Medicamentos", "Corticoide, betabloqueador (controverso), isotretinoína, interferona, anticoncepcional em algumas [C]"],
          ["Demência inicial (idoso)", "Déficit cognitivo progressivo; depressão pode coexistir [C]"]
        ]}}
      ]},
      {t: "Decidir e tratar", b: [
        {fluxo: [
          {t: "Suspeita de depressão: 2 perguntas (tristeza e perda de interesse)"},
          {t: "Risco alto de suicídio ou psicose?", ramos: [
            {r: "Sim", n: [{t: "Não deixar só; CAPS/urgência", k: "stop"}]},
            {r: "Não", n: [{t: "Gravidade (CAB 28 ou PHQ-9)"}]}
          ]},
          {t: "Gravidade", ramos: [
            {r: "Leve", n: [{t: "Psicoeducação, atividade física, grupos/eMulti; reavaliar em 2–4 semanas", k: "ok"}]},
            {r: "Moderada/grave", n: [{t: "Antidepressivo (ISRS) + psicoterapia; projeto terapêutico com a equipe", k: "warn"}]}
          ]},
          {t: "Reavaliar em 2–4 semanas; sem resposta em 4–6 semanas na dose adequada → aumentar ou trocar", k: "q"},
          {t: "Manter 6–12 meses após remissão; refratária a 2 tratamentos ou bipolaridade → matriciamento/CAPS", k: "warn"}
        ], nota: "CAB 28 cap. 2.23 [F]; CAB 34 [F]; NICE NG222 [F]."},
        {tab: {h: ["Fármaco (REMUME)", "Início", "Faixa terapêutica"], r: [
          ["Fluoxetina 20 mg", "10–20 mg", "20–80 mg [F]"],
          ["Sertralina 50 mg", "25–50 mg", "50–200 mg [NV]"],
          ["Amitriptilina 25 mg", "10–25 mg", "100–300 mg (efeito antidepressivo > 100 mg) [F]"],
          ["Nortriptilina 25/50 mg", "10–25 mg", "50–100 mg [F]"]
        ]}, nota: "CAB 28, Quadro 65, e CAB 34 [F]; sertralina: bula [NV]. Tricíclicos: cautela em idosos, cardiopatas e risco de suicídio (letais em superdose) [F/C]."},
        {ir: [["risco-suicida", "Ideação suicida"], ["cr-depressao", "Depressão – seguimento"], ["pp-depressao", "Depressão pós-parto"], ["pv-alcool", "Álcool"]]},
        {ref: ["cab28_sm", "cab34", "nice_depressao", "cipriani", "remume"]}
      ]}
    ]
  }, {fontes: ["cab28_sm", "cab34"]});

  // ── 2. Insônia
  G("insonia", {
    resumo: "Dificuldade para iniciar ou manter o sono, ou despertar precoce, com **prejuízo diurno**, ≥ 3 noites/semana por ≥ 3 meses (crônica) [C]. Antes de tratar: **dor, depressão, ansiedade, apneia do sono, pernas inquietas, noctúria, álcool, cafeína, medicamentos** (corticoide, β-agonista, ISRS ativadores, descongestionante) e trabalho em turnos [C]. **TCC-I é a 1ª linha** [C]. Benzodiazepínico só por curto período e com plano de retirada; em idosos, evitar (quedas, cognição) [F/C].",
    secoes: [
      {t: "Diferenciais", b: [
        {tab: {h: ["Hipótese", "Pistas"], r: [
          ["Apneia obstrutiva do sono", "Ronco, pausas testemunhadas, sonolência diurna, obesidade, HAS resistente [C]"],
          ["Síndrome das pernas inquietas", "Desconforto nas pernas ao deitar que alivia ao mover; ferritina [C]"],
          ["Depressão / ansiedade", "Despertar precoce, ruminação; triagem [F]"],
          ["Atraso de fase (adolescente/jovem)", "Dorme e acorda tarde, sono normal quando livre [C]"],
          ["Uso de substâncias", "Cafeína, álcool, nicotina, estimulantes; abstinência de benzodiazepínico [C]"]
        ]}}
      ]},
      {t: "Decidir e tratar", b: [
        {fluxo: [
          {t: "Queixa de insônia: diário do sono por 2 semanas"},
          {t: "Ronco com pausas ou sonolência diurna importante?", ramos: [
            {r: "Sim", n: [{t: "Suspeita de apneia: polissonografia (regulação)", k: "warn"}]},
            {r: "Não", n: [{t: "Tratar dor, humor, ansiedade, noctúria; revisar substâncias"}]}
          ]},
          {t: "TCC-I: horário fixo para levantar, restrição do tempo na cama, controle de estímulos, higiene do sono", k: "ok"},
          {t: "Comorbidade depressiva com insônia: antidepressivo de perfil sedativo (CAB 34)", k: "q"},
          {t: "Hipnótico só por 2–4 semanas com data de retirada; usuário crônico de BZD → desprescrição gradual", k: "warn"}
        ], nota: "ACP 2016 [C]; CAB 34 (benzodiazepínicos e antidepressivos) [F]."},
        {det: {t: "Por que a restrição do tempo na cama funciona", b: ["Ficar acordado na cama associa a cama a vigília e frustração (condicionamento). Restringir o tempo na cama ao tempo real de sono aumenta a **pressão homeostática de sono** e consolida o sono; depois amplia-se em 15–30 min por semana enquanto a eficiência do sono for > 85% [C]."]}},
        {ir: [["cr-bzd", "Desprescrição de benzodiazepínico"], ["depressao", "Depressão"], ["tag", "Ansiedade generalizada"]]},
        {ref: ["acp_insonia", "cab34", "remume"]}
      ]}
    ]
  }, {fontes: ["cab34"]});

  // ── 3. Crise de ansiedade / pânico
  G("panico", {
    urg: "**Antes de rotular como ansiedade**: dor torácica com fatores de risco, dispneia com SpO₂ baixa, arritmia, hipoglicemia, intoxicação ou abstinência → avaliar no mesmo atendimento (ECG, glicemia capilar, oximetria) [F/C]. Perguntar sempre sobre **ideação suicida** [F].",
    resumo: "Ataque de pânico: **início súbito**, pico em minutos, com palpitação, falta de ar, dor no peito, tremor, sudorese, parestesias, tontura, **medo de morrer ou enlouquecer**, despersonalização [F/C]. **Transtorno de pânico** = ataques recorrentes inesperados + preocupação persistente ou evitação [C]. Diferenciais orgânicos (CAB 28): **hipertireoidismo, hiperparatireoidismo, asma, doença cardiovascular, hipoglicemia** e drogas (**cafeína, anfetaminas, corticoide, levotiroxina**) [F]. Na crise: acolher, explicar, respiração lenta; **clonazepam 0,25–0,5 mg SL** como SOS se não ceder (CAB 28) [F]. Manutenção: **antidepressivo** (1ª linha) + psicoterapia; benzodiazepínico contínuo é iatrogênico [F].",
    calcs: ["sc:gad7"],
    secoes: [
      {t: "Diferenciais", b: [
        {tab: {h: ["Hipótese", "Pistas"], r: [
          ["Síndrome coronariana", "Dor em esforço, fatores de risco, > 35–40 anos; ECG [C]"],
          ["Arritmia (TSV, FA)", "Início/fim súbitos, FC muito alta, irregular; ECG na crise [C]"],
          ["Hipertireoidismo", "Perda de peso, tremor, taquicardia persistente [F]"],
          ["Hipoglicemia", "DM em uso de insulina/sulfonilureia, melhora com glicose [F]"],
          ["Asma / TEP", "Sibilos, SpO₂ baixa, fatores de risco para TEP [F/C]"],
          ["Substâncias", "Cafeína, energéticos, cocaína, abstinência de álcool/BZD [F/C]"]
        ]}}
      ]},
      {t: "Decidir e tratar", b: [
        {fluxo: [
          {t: "Crise de ansiedade na UBS"},
          {t: "Sinal de causa orgânica (dor típica, SpO₂ baixa, glicemia baixa, ECG alterado)?", ramos: [
            {r: "Sim", n: [{t: "Manejar a causa / urgência", k: "stop"}]},
            {r: "Não", n: [{t: "Acolher, explicar os sintomas, respiração lenta, aterramento", k: "ok"}]}
          ]},
          {t: "Não cede?", ramos: [
            {r: "Sim", n: [{t: "Clonazepam 0,25–0,5 mg SL (SOS, na UBS)", k: "warn"}]},
            {r: "Não", n: [{t: "Orientar e agendar retorno breve", k: "ok"}]}
          ]},
          {t: "Ataques recorrentes ou evitação → antidepressivo + psicoterapia; discutir com eMulti", k: "q"},
          {t: "Ideação suicida → estratificar risco (CAB 28)", k: "warn"}
        ], nota: "CAB 28 cap. 2.23 [F]; CAB 34 [F]; NICE CG113 [F]."},
        "Perguntas úteis (CAB 28): já teve ataques de pânico? Há lugares ou situações que evita? Como a ansiedade ou a evitação afetam sua vida? [F]",
        {ir: [["tag", "Ansiedade generalizada"], ["cr-ansiedade", "Ansiedade – longo prazo"], ["palpitacoes", "Palpitações"], ["risco-suicida", "Ideação suicida"]]},
        {ref: ["cab28_sm", "cab34", "nice_ansiedade", "remume"]}
      ]}
    ]
  }, {fontes: ["cab28_sm", "cab34"], nv: ["Clonazepam: a REMUME tem comprimido de 2 mg e solução oral 2,5 mg/mL (1 gota ≈ 0,1 mg – conferir bula) para obter 0,25–0,5 mg."]});

  // ── 4. TAG
  G("tag", {
    resumo: "Preocupação **excessiva e difícil de controlar** sobre vários temas, na maioria dos dias por **≥ 6 meses**, com tensão muscular, inquietação, fadiga, irritabilidade, dificuldade de concentração e insônia [C]. Muitas vezes chega como **queixas somáticas múltiplas** e retornos frequentes (CAB 28) [F]. Tratamento base: **psicoeducação e psicoterapia**, e **antidepressivo** quando os sintomas são intensos – ansiolítico só sintomático e de curto prazo (CAB 34: benzodiazepínico isolado para ansiedade crônica é iatrogênico) [F].",
    calcs: ["sc:gad7"],
    secoes: [
      {t: "Diferenciais", b: [
        {tab: {h: ["Hipótese", "Pistas"], r: [
          ["Depressão", "Humor deprimido e anedonia predominam; frequentemente coexistem [F]"],
          ["Transtorno de pânico", "Crises súbitas e intensas em vez de preocupação contínua [F]"],
          ["Hipertireoidismo", "Perda de peso, tremor, taquicardia; TSH [F]"],
          ["Uso de substâncias / medicamentos", "Cafeína, álcool, corticoide, levotiroxina em excesso [F]"],
          ["TEPT", "Trauma, revivescências, evitação, hipervigilância [C]"]
        ]}}
      ]},
      {t: "Decidir e tratar", b: [
        {fluxo: [
          {t: "Ansiedade persistente com prejuízo (GAD-7)"},
          {t: "Causa orgânica ou substância?", ramos: [
            {r: "Sim", n: [{t: "Tratar a causa", k: "warn"}]},
            {r: "Não", n: [{t: "Psicoeducação, atividade física, sono, reduzir cafeína/álcool; grupos/eMulti", k: "ok"}]}
          ]},
          {t: "Sintomas intensos ou sem resposta?", ramos: [
            {r: "Sim", n: [{t: "ISRS (fluoxetina 20 mg ou sertralina) + psicoterapia", k: "warn"}]},
            {r: "Não", n: [{t: "Manter abordagem não farmacológica; retorno em 4 semanas", k: "ok"}]}
          ]},
          {t: "Manter ≥ 12 meses após resposta; refratário a 2 tratamentos → matriciamento/CAPS", k: "q"}
        ], nota: "CAB 28 cap. 2.23 e CAB 34 [F]; NICE CG113 [F]."},
        {ir: [["panico", "Crise de ansiedade / pânico"], ["cr-ansiedade", "Ansiedade – longo prazo"], ["cr-bzd", "Desprescrição de benzodiazepínico"]]},
        {ref: ["cab28_sm", "cab34", "nice_ansiedade", "remume"]}
      ]}
    ]
  }, {fontes: ["cab28_sm", "cab34"]});

  // ── 5. TOC
  G("toc", {
    resumo: "**Obsessões** (pensamentos, imagens ou impulsos intrusivos e angustiantes – contaminação, dúvida, simetria, agressão) e/ou **compulsões** (rituais repetitivos – lavar, checar, contar) reconhecidos como seus e excessivos, que consomem tempo (> 1 h/dia) ou causam prejuízo (CIAP P79) [F/C]. Responde a **ISRS em doses mais altas** (ex.: fluoxetina 60–80 mg/dia, CAB 34) e por mais tempo (8–12 semanas para avaliar) [F]; a psicoterapia com **exposição e prevenção de resposta** é 1ª linha [C].",
    secoes: [
      {t: "Diferenciais", b: [
        {tab: {h: ["Hipótese", "Pistas"], r: [
          ["TAG", "Preocupações com problemas reais do dia a dia, sem rituais [C]"],
          ["Personalidade obsessivo-compulsiva", "Perfeccionismo e rigidez vividos como corretos (egossintônicos), sem obsessões intrusivas [C]"],
          ["Psicose", "Crença sem crítica (delírio) em vez de pensamento reconhecido como absurdo [C]"],
          ["Tiques / Tourette", "Movimentos ou sons breves sem obsessão prévia [C]"],
          ["Início súbito em criança após infecção", "Pensar em PANDAS/PANS – avaliação especializada [C]"]
        ]}}
      ]},
      {t: "Decidir e tratar", b: [
        {fluxo: [
          {t: "Obsessões e/ou compulsões com sofrimento ou prejuízo"},
          {t: "Grave, com risco, depressão grave ou psicose?", ramos: [
            {r: "Sim", n: [{t: "Matriciamento/CAPS", k: "warn"}]},
            {r: "Não", n: [{t: "Psicoeducação + psicoterapia (EPR) se disponível + ISRS", k: "ok"}]}
          ]},
          {t: "Titular o ISRS até dose alta (fluoxetina 40–80 mg) e esperar 8–12 semanas", k: "q"},
          {t: "Sem resposta a 2 ISRS → clomipramina ou potencialização com especialista", k: "warn"}
        ], nota: "CAB 34 [F]; NICE CG31 [C]."},
        {ir: [["tag", "Ansiedade generalizada"], ["depressao", "Depressão"]]},
        {ref: ["cab34", "nice_toc", "remume"]}
      ]}
    ]
  }, {fontes: ["cab34"]});

  // ── 6. Fadiga persistente
  G("fadiga", {
    urg: "Fadiga com **perda de peso, febre, sudorese noturna, sangramento, dispneia, dor torácica** ou déficit neurológico: investigação dirigida e prioritária [C].",
    resumo: "Queixa muito comum; na APS a maioria tem causa **psicossocial, de sono ou de estilo de vida**, e exames amplos rendem pouco [C]. História guiada: **sono** (apneia, insônia), **humor** (depressão, ansiedade), **medicamentos e álcool**, **carga de trabalho/cuidado**, perda de peso e sintomas específicos [C]. Exames iniciais enxutos: hemograma, ferritina, TSH, glicemia, creatinina, função hepática, e o que a história sugerir [C]. A CIAP descreve a **neurastenia** (P78): fadiga crescente após esforço mental ou físico mínimo, com dificuldade de concentração e incapacidade de relaxar [F].",
    secoes: [
      {t: "Diferenciais", b: [
        {tab: {h: ["Grupo", "Exemplos"], r: [
          ["Psíquicos e sono", "Depressão, ansiedade, burnout, insônia, apneia do sono [C]"],
          ["Endócrino-metabólicos", "Hipotireoidismo, DM, insuficiência adrenal, hipercalcemia [C]"],
          ["Hematológicos e nutricionais", "Anemia, ferropenia sem anemia, B12, desnutrição [C]"],
          ["Infecciosos", "Pós-viral, HIV, hepatites, TB, mononucleose [C]"],
          ["Órgãos", "IC, DPOC, DRC, hepatopatia [C]"],
          ["Medicamentos/substâncias", "Betabloqueador, anti-histamínico, BZD, opioide, álcool [C]"],
          ["Neoplasia", "Perda de peso, idade, sintomas B [C]"]
        ]}}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Fadiga > 1 mês"},
          {t: "Sinal de alarme?", ramos: [
            {r: "Sim", n: [{t: "Investigação dirigida/prioritária", k: "warn"}]},
            {r: "Não", n: [{t: "Sono, humor, medicamentos, álcool, sobrecarga; exames enxutos"}]}
          ]},
          {t: "Causa encontrada?", ramos: [
            {r: "Sim", n: [{t: "Tratar e reavaliar", k: "ok"}]},
            {r: "Não", n: [{t: "Atividade física gradual, sono regular, retorno em 4–6 semanas; evitar cascata de exames", k: "ok"}]}
          ]},
          {t: "Fadiga ≥ 6 meses com mal-estar pós-esforço e sono não reparador → considerar EM/SFC", k: "q"}
        ], nota: "Conhecimento consolidado [C]; CAB 34 (CIAP P78) [F]."},
        {ir: [["depressao", "Depressão"], ["insonia", "Insônia"], ["anemia-ferropriva", "Anemia ferropriva"], ["cr-hipotireoidismo", "Hipotireoidismo"], ["perda-peso", "Perda de peso"]]},
        {ref: ["cab34", "cab28"]}
      ]}
    ]
  }, {fontes: ["cab34"]});

  // ── 7. Febre sem foco (adulto)
  G("febre-adulto", {
    urg: "**qSOFA ≥ 2** (FR ≥ 22, PAS ≤ 100, confusão), **petéquias/púrpura**, rigidez de nuca, imunossupressão/neutropenia, esplenectomia ou **sinais de alarme de dengue**: urgência [C/F].",
    resumo: "No Brasil, febre aguda sem foco em adulto estável é, até prova em contrário, **arbovirose** (dengue, chikungunya, zika) em época de transmissão – classificar e hidratar pelo manual do MS [F]. Outras causas a lembrar: **ITU/pielonefrite** (pode não ter disúria em idoso), **leptospirose** (enchente, mialgia de panturrilha, sufusão conjuntival), **febre maculosa** (carrapato), **malária** (procedência), **HIV agudo**, **TB** [C]. **Sem foco e estável: não iniciar antibiótico empírico**; reavaliar em 48–72 h [C]. Evitar AAS e AINE até afastar dengue [F].",
    calcs: ["sc:qsofa"],
    secoes: [
      {t: "Pistas epidemiológicas", b: [
        {tab: {h: ["Exposição", "Pensar em"], r: [
          ["Época de chuva/casos no território", "Dengue, chikungunya, zika [F]"],
          ["Enchente, esgoto, roedores", "Leptospirose [C]"],
          ["Carrapato, mata, capivaras, cavalos", "Febre maculosa – iniciar doxiciclina precoce se suspeita [C]"],
          ["Viagem à Amazônia ou exterior endêmico", "Malária – gota espessa no mesmo dia [C]"],
          ["Exposição sexual de risco recente", "HIV agudo, sífilis secundária [C]"],
          ["Tosse ≥ 3 semanas, perda de peso", "Tuberculose [F]"],
          ["Não vacinado, contato com exantema", "Sarampo, rubéola – notificação imediata [F]"]
        ]}}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Febre sem foco aparente"},
          {t: "qSOFA ≥ 2, petéquias, rigidez de nuca ou imunossupressão?", ramos: [
            {r: "Sim", n: [{t: "Urgência", k: "stop"}]},
            {r: "Não", n: [{t: "Suspeita de arbovirose?"}]}
          ]},
          {t: "Arbovirose", ramos: [
            {r: "Sim", n: [{t: "Classificar (grupos A–D), prova do laço, hemograma, hidratação, notificar", k: "warn"}]},
            {r: "Não", n: [{t: "EAS ± urocultura, hemograma; testes rápidos HIV/sífilis; exames pela epidemiologia", k: "q"}]}
          ]},
          {t: "Estável sem foco: sintomático (dipirona/paracetamol), sem antibiótico; reavaliar em 48–72 h", k: "ok"},
          {t: "Febre ≥ 3 semanas sem diagnóstico após avaliação inicial → investigação ampliada (FOI)", k: "warn"}
        ], nota: "Manual MS de dengue 2024 [F]; demais conhecimento consolidado [C]."},
        {ir: [["dengue-a", "Dengue"], ["leptospirose", "Leptospirose"], ["sepse", "Sepse"], ["tb-sr", "Investigação de TB"]]},
        {ref: ["ms_dengue", "remume"]}
      ]}
    ]
  });

  // ── 8. Perda de peso não intencional
  G("perda-peso", {
    urg: "Perda de peso com **disfagia, sangramento digestivo, massa, icterícia, hemoptise, febre persistente** ou desnutrição grave: investigação prioritária [C].",
    resumo: "**> 5% do peso em 6–12 meses** sem intenção é significativa [C]. Causas principais: **neoplasia**, **doenças gastrointestinais** (úlcera, má absorção, celíaca), **depressão/demência**, **endócrinas** (DM descompensado, hipertireoidismo, insuficiência adrenal), **infecções** (TB, HIV), **medicamentos**, problemas dentários/disfagia e **insegurança alimentar ou isolamento** [C]. Exames simples alterados (anemia, plaquetose, PCR, albumina baixa) aumentam a chance de câncer; **marcadores tumorais não servem para rastreio** [C].",
    secoes: [
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Perda de peso não intencional (confirmar com registro de peso)"},
          {t: "Sinal de alarme?", ramos: [
            {r: "Sim", n: [{t: "Exame dirigido com prioridade (EDA, colonoscopia, imagem)", k: "warn"}]},
            {r: "Não", n: [{t: "História (apetite, humor, deglutição, dentes, renda, álcool, medicamentos) + exame físico completo"}]}
          ]},
          {t: "Exames iniciais: hemograma, PCR/VHS, glicemia/HbA1c, TSH, creatinina, eletrólitos, função hepática, albumina, EAS, testes rápidos HIV/sífilis/hepatites, RX de tórax; FIT/rastreios pela idade", k: "q"},
          {t: "Achado → investigação dirigida", k: "warn"},
          {t: "Tudo normal → pesar em 1–3 meses; ~1/4 fica sem causa e tem bom prognóstico", k: "ok"}
        ], nota: "Revisões de APS (Wong 2014; Nicholson 2018), citadas de memória [C]."},
        {tab: {h: ["Não esquecer", "Por quê"], r: [
          ["Depressão e demência", "Causas não orgânicas mais comuns em idosos [C]"],
          ["Insegurança alimentar", "Perguntar sobre renda e acesso a comida; acionar assistência social [C]"],
          ["Saúde bucal e disfagia", "Prótese mal adaptada, dor dentária, AVC prévio [C]"],
          ["Medicamentos", "Metformina, GLP-1, digoxina, ISRS, levotiroxina em excesso, polifarmácia [C]"]
        ]}},
        {ir: [["tb-sr", "Investigação de TB"], ["hiv-diagnostico", "HIV"], ["cr-hipertireoidismo", "Hipertireoidismo"], ["depressao", "Depressão"], ["pv-colorretal", "Rastreio colorretal"]]},
        {ref: ["perda_peso"]}
      ]}
    ]
  });

  // ── 9. Prurido generalizado
  G("prurido", {
    resumo: "Sem lesões primárias, a causa mais comum é **xerose** (pele seca), sobretudo em idosos e no inverno [C]. **Escabiose** antes de tudo se há **contactantes com prurido** ou piora noturna (procurar túneis em dedos, punhos, genitais) [F/C]. Prurido crônico (> 6 semanas) sem causa cutânea: pensar em **DRC, colestase, ferropenia, tireoide, DM, policitemia vera** (prurido após banho), **linfoma** (sintomas B), **HIV**, medicamentos (opioides, IECA, estatinas) e **gestação** (colestase) [C].",
    secoes: [
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Prurido generalizado"},
          {t: "Contactantes com prurido ou lesões em dedos/punhos/genitais?", ramos: [
            {r: "Sim", n: [{t: "Tratar escabiose (paciente + contactantes)", k: "warn"}]},
            {r: "Não", n: [{t: "Pele seca? Banhos quentes e longos?"}]}
          ]},
          {t: "Xerose", ramos: [
            {r: "Sim", n: [{t: "Hidratante 2×/dia, banho morno e curto, sabonete neutro; reavaliar em 2 semanas", k: "ok"}]},
            {r: "Não/persiste", n: [{t: "Hemograma, ferritina, TSH, glicemia, creatinina, função hepática (bilirrubinas, FA), HIV/hepatites conforme risco", k: "q"}]}
          ]},
          {t: "Gestante com prurido em palmas e plantas → ácidos biliares/transaminases (colestase gestacional)", k: "warn"},
          {t: "Sintomas B, adenomegalia ou hepatoesplenomegalia → investigar linfoma", k: "warn"}
        ], nota: "Diretriz europeia S2k de prurido crônico 2019 [C]."},
        "Anti-histamínico tem efeito limitado fora da urticária; os sedativos à noite podem ajudar o sono, com cautela em idosos [C].",
        {ir: [["escabiose", "Escabiose"], ["urticaria", "Urticária"], ["dermatite-contato", "Dermatite de contato"]]},
        {ref: ["prurido", "remume"]}
      ]}
    ]
  });

  // ── 10. Gestante Rh negativo
  G("pn-rh", {
    resumo: "Gestante **Rh negativo** com parceiro Rh positivo ou desconhecido: **Coombs indireto** no 1º trimestre e repetição ao longo da gestação [F]. A **Caderneta 2026** pede um por trimestre; o **protocolo de Betim 2024** pede **mensal a partir de 24 semanas** [F]. **Coombs positivo** = aloimunização → PNAR/medicina fetal (critério de alto risco na NT SES-MG) [F]. **Imunoglobulina anti-D 300 µg** até **72 h** após parto de RN Rh+, abortamento, ectópica, sangramento ou procedimento invasivo; anteparto **28–34 semanas** se disponível (FEBRASGO) [F].",
    secoes: [
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Tipagem: gestante Rh negativo"},
          {t: "Coombs indireto", ramos: [
            {r: "Positivo", n: [{t: "Aloimunização: PNAR/medicina fetal, mantendo a APS", k: "stop"}]},
            {r: "Negativo", n: [{t: "Repetir: Betim mensal a partir de 24 semanas (Caderneta: 2º e 3º trimestres)", k: "ok"}]}
          ]},
          {t: "Evento sensibilizante (sangramento, trauma abdominal, abortamento, ectópica, procedimento)?", ramos: [
            {r: "Sim", n: [{t: "Anti-D até 72 h (maternidade/serviço)", k: "warn"}]},
            {r: "Não", n: [{t: "Anti-D anteparto 28–34 semanas se disponível", k: "q"}]}
          ]},
          {t: "Pós-parto: RN Rh+ → anti-D até 72 h (em geral na maternidade); registrar no cartão", k: "ok"}
        ], nota: "Caderneta da Gestante 2026 [F]; Protocolo Pré-natal Betim 2024 [F]; FEBRASGO 2023 [F]; NT SES-MG 2024 [F]."},
        "Coombs positivo logo após anti-D costuma ser **passivo** (título baixo): confirmar com o serviço antes de concluir aloimunização [F].",
        {ir: [["pn-1consulta", "Primeira consulta de pré-natal"], ["pn-risco", "Estratificação de risco"], ["sangramento-1tri", "Sangramento no 1º trimestre"]]},
        {ref: ["caderneta2026", "betim_pn2024", "febrasgo_rh", "sesmg_risco"]}
      ]}
    ]
  });

  // ── 11. Toxoplasmose na gestação
  G("pn-toxo", {
    urg: "**IgM reagente na gestação**: iniciar **espiramicina** sem esperar a avidez, encaminhar ao PNAR/infectologia e **notificar** (toxoplasmose gestacional: notificação **semanal**, Portaria GM/MS 11.211/2026) [F].",
    resumo: "Sorologia (IgG e IgM) na 1ª consulta; **suscetível** (IgG−/IgM−) repete **a cada trimestre e no parto** e recebe orientação de prevenção (protocolo Betim) [F]. **IgG+/IgM− no 1º trimestre** = imunidade prévia, não repetir [F]. **Avidez de IgG** só ajuda **até 16 semanas**: alta avidez → infecção anterior à gestação [F]. A partir de 16 semanas, infecção fetal confirmada ou não excluída → **esquema tríplice** (pirimetamina + sulfadiazina + ácido folínico) no PNAR [F]. RN de mãe com toxoplasmose na gestação → SERENAR e SEPADI (Betim) [F].",
    secoes: [
      {t: "Interpretar a sorologia", b: [
        {tab: {h: ["IgG", "IgM", "Interpretação", "Conduta"], r: [
          ["−", "−", "Suscetível", "Prevenção; repetir a cada trimestre e no parto [F]"],
          ["+", "− (1º tri)", "Imune (infecção prévia)", "Não repetir [F]"],
          ["+", "+ (≤ 16 sem)", "Possível infecção aguda", "Espiramicina já + avidez de IgG + PNAR + notificar [F]"],
          ["+", "+ (> 16 sem)", "Infecção aguda não excluída", "Espiramicina já + PNAR (investigação fetal; tríplice se indicado) + notificar [F]"],
          ["−", "+", "Infecção muito recente ou IgM falso-positiva", "Tratar já, notificar e repetir em 3 semanas (soroconversão confirma) [F]"]
        ]}, nota: "Protocolo Pré-natal Betim 2024 (Fluxograma 3) e Rede Brasileira de Pesquisa em Toxoplasmose 2020 [F]."}
      ]},
      {t: "Decidir e tratar", b: [
        {fluxo: [
          {t: "Sorologia para toxoplasmose no pré-natal"},
          {t: "IgM reagente?", ramos: [
            {r: "Sim", n: [{t: "Espiramicina 1 g 8/8h; avidez se ≤ 16 sem; PNAR; notificar", k: "stop"}]},
            {r: "Não", n: [{t: "IgG+ → imune; IgG− → suscetível: repetir por trimestre", k: "ok"}]}
          ]},
          {t: "Avidez alta (≤ 16 sem) → infecção prévia: suspender espiramicina conforme referência", k: "q"},
          {t: "Avidez baixa ou > 16 sem → investigação fetal; tríplice a partir de 16 semanas se indicado (PNAR)", k: "warn"}
        ], nota: "Protocolo Betim 2024 [F]; Rede Brasileira de Pesquisa em Toxoplasmose 2020 [F]; Portaria 11.211/2026 [F]."},
        "**Prevenção (suscetível):** carne bem passada, lavar frutas e verduras, água filtrada/fervida, luvas para jardinagem e caixa de areia de gatos, lavar as mãos após manipular carne crua [F/C].",
        {ir: [["pn-1consulta", "Primeira consulta"], ["pn-risco", "Estratificação de risco"]]},
        {ref: ["betim_pn2024", "toxo_rede", "port11211", "sesmg_risco", "remume"]}
      ]}
    ]
  }, {fontes: ["port11211"]});

  // ── 12. Tireoide na gestação
  G("pn-tireoide", {
    resumo: "**Não há rastreio universal**: dosar TSH com fator de risco (disfunção tireoidiana prévia, cirurgia/radiação de tireoide, bócio, DM1 ou autoimunidade, anti-TPO+) [F]. **Hipotireoidismo prévio**: ao confirmar a gravidez, **aumentar a levotiroxina 25–30%** e dosar TSH em 4 semanas [F]. Faixas de TSH quando o laboratório não fornece: **1º tri 0,1–4,0; 2º e 3º 0,5–4,5 mU/L** [F]. Hipotireoidismo diagnosticado na gestação: **1,6 mcg/kg/dia** (protocolo Betim) [F]. Hipotireoidismo **em uso de medicação** ou **hipertireoidismo** → PNAR, mantendo a APS (NT SES-MG/Betim) [F].",
    secoes: [
      {t: "Classificar", b: [
        {tab: {h: ["Achado", "Interpretação", "Conduta"], r: [
          ["TSH acima da faixa + T4 livre baixo", "Hipotireoidismo franco", "Levotiroxina 1,6 mcg/kg/dia; PNAR [F]"],
          ["TSH acima da faixa + T4 livre normal", "Hipotireoidismo subclínico", "Tratar se anti-TPO+ ou TSH > 10 (ATA 2017) [C]; pode seguir na APS com apoio (NT SES-MG) [F]"],
          ["TSH baixo no 1º trimestre", "Fisiológico (hCG) ou hipertireoidismo", "T4 livre; sintomas, bócio, oftalmopatia → hipertireoidismo → PNAR [F/C]"],
          ["Hipotireoidismo prévio", "Necessidade aumenta", "+25–30% da dose ao confirmar a gestação; TSH em 4 semanas [F]"]
        ]}}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Gestante com fator de risco ou hipotireoidismo prévio"},
          {t: "Já usa levotiroxina?", ramos: [
            {r: "Sim", n: [{t: "Aumentar 25–30% (ex.: 2 comprimidos extras/semana); TSH em 4 semanas; PNAR", k: "warn"}]},
            {r: "Não", n: [{t: "TSH (+ T4 livre e anti-TPO se alterado)"}]}
          ]},
          {t: "Meta: TSH na metade inferior da faixa do trimestre ou < 2,5 mU/L", k: "q"},
          {t: "TSH a cada 4 semanas até a metade da gestação, depois ao menos 1 por trimestre", k: "ok"},
          {t: "Pós-parto: voltar à dose pré-gestacional e TSH em 6 semanas", k: "q"}
        ], nota: "Protocolo Pré-natal Betim 2024 (item 3.7.9) [F]; NT SES-MG 2024 [F]; ATA 2017 [C]. Pós-parto: ATA [C]."},
        "Tomar a levotiroxina em jejum, 30–60 min antes do café, **4 horas longe do sulfato ferroso e do cálcio** [F].",
        {ir: [["cr-hipotireoidismo", "Hipotireoidismo"], ["cr-hipertireoidismo", "Hipertireoidismo"], ["pn-risco", "Estratificação de risco"]]},
        {ref: ["betim_pn2024", "sesmg_risco", "caderneta2026", "ata_gest", "remume"]}
      ]}
    ]
  });
})();
