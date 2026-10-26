// ───────────── data73.js – v60: Guia Clínico – lote 10 (Digestivo, cardiovascular, anemia e queda: 12 itens sem guia).
// Conferido em 26/10/2026: CAB 28 vol. II (2.5 diarreia e vômito – Quadros 14–21, amebíase e giardíase; 2.14 HAS – alterações agudas,
// Quadro 47), Protocolo de Acesso e Regulação – Gastroenterologia e Hepatologia Adulto SES-SC (mar/2022), TelessaúdeRS Cardiologia 2022
// (Protocolo 3 – arritmias, Quadro 6), Circular DUE-DIOP 003/2024 SMS Betim (ferro EV na UBS), World Guidelines for Falls Prevention 2022
// (Age Ageing, PMC9523684), REMUME Betim.
// Correção: anemia-ferropriva dizia que o sacarato férrico da REMUME é usado no serviço; pela Circular 003/2024 ele não é dispensado nas UBS
// (o paciente adquire e a UBS administra).

Object.assign(FONTES, {
  cab28_dv: {s: "CAB 28 vol. II – diarreia e vômito", t: "Ministério da Saúde. Cadernos de Atenção Básica nº 28, vol. II, 2013, cap. 2.5: Quadro 14 (diarreia aguda < 14 dias, persistente ≥ 14 dias, crônica > 30 dias); Quadro 15 (etiologias; crônica: cólon irritável, tuberculose, parasitoses, enteropatia por glúten); Quadros 16–18 (desidratação e planos A, B e C); Quadro 20 (giardíase: secnidazol ou tinidazol 2 g dose única no adulto, 30 mg/kg em crianças, máx. 2 g; metronidazol 250 mg por dose 2×/dia por 5 dias, criança 15 mg/kg/dia); amebíase intestinal (secnidazol 2 g dose única; metronidazol 500 mg 3×/dia 5 dias; formas graves 750 mg 3×/dia 10 dias; teclozana nas formas leves); antidiarreicos não devem ser usados; Quadro 21 (pistas da anamnese no vômito: medicamentos, gravidez, relação com refeições, conteúdo e odor, vômito em jato) (manual MS).", f: "F", url: "https://bvsms.saude.gov.br/bvs/publicacoes/acolhimento_demanda_espontanea_queixas_comuns_cab28v2.pdf"},
  cab28_has: {s: "CAB 28 vol. II – HAS: alterações agudas", t: "Ministério da Saúde. Cadernos de Atenção Básica nº 28, vol. II, 2013, cap. 2.14: emergência hipertensiva (lesão aguda progressiva de órgão-alvo – encaminhar via SAMU), urgência hipertensiva (elevação importante, em geral PAD > 120, sem lesão aguda – controle em 24–48 h com medicação oral), pseudocrise (elevação desencadeada por dor, desconforto ou ansiedade – tratar com sintomáticos, não com anti-hipertensivos) e elevação eventual (achado de rotina – iniciar ou ajustar tratamento); manifestações das emergências (edema agudo de pulmão, SCA, dissecção, encefalopatia, hipertensão maligna, AVC, eclâmpsia); Quadro 47 (conduta na APS) (manual MS).", f: "F", url: "https://bvsms.saude.gov.br/bvs/publicacoes/acolhimento_demanda_espontanea_queixas_comuns_cab28v2.pdf"},
  sc_gastro2022: {s: "SES-SC – Protocolo Gastroenterologia adulto (2022)", t: "Secretaria de Estado da Saúde de Santa Catarina (SUR/GERAM). Protocolo de Acesso e Regulação – Consulta em Gastroenterologia e Hepatologia – Adulto, atualização mar/2022: DRGE – encaminhar se refratária a medidas comportamentais e IBP em dose plena por 2 meses (vermelho se disfagia, hemorragia, anemia ferropriva ou emagrecimento); dispepsia – refratária a IBP por 8 semanas e à erradicação do H. pylori; constipação e SII refratárias; diarreia > 3 semanas após investigação inicial na UBS; suspeita de DII – todos os casos com dúvida diagnóstica; sangramento baixo ou hemorroidário – proctologia, com resultado do exame proctológico; hemorragia digestiva baixa e anemia importante com sangramento – emergência (protocolo estadual de outro estado).", f: "F", url: "https://saude.sc.gov.br/index.php/pt/regulacao/protocolo-de-acesso-e-classificacao-de-risco/gastroenterologia-e-hepatologia-adulto/download"},
  tsrs_card2022: {s: "TelessaúdeRS – Cardiologia adulto (2022)", t: "TelessaúdeRS-UFRGS. Protocolos de encaminhamento – Cardiologia adulto, 2022 (cópia na base clínica), Protocolo 3 (arritmias): urgência se hipoperfusão, síncope, dispneia, suspeita de SCA ou ECG de risco (Quadro 6: TV, TSV paroxística, FA/flutter de alta resposta, QT curto ou longo, Brugada, BAV 2º grau Mobitz II/3º grau, bradicardia < 40, pausas > 3 s); cardiologia para palpitação recorrente de origem indeterminada após investigação inicial na APS (anamnese, exame físico, ECG, hemograma, função tireoidiana, eletrólitos, afastar causas psicogênicas e exógenas), TSV recorrente sem resposta, flutter, FA selecionada (referência técnica de outro estado).", f: "F", url: "https://www.ufrgs.br/telessauders/regulasus/#regulasus-protocolos"},
  betim_ferro2024: {s: "Circular DUE-DIOP 003/2024 – ferro EV (Betim)", t: "SMS Betim, Diretoria de Urgência e Emergência/Diretoria Operacional da Saúde. Circular DUE-DIOP 003/2024, de 29/11/2024: sacarato de hidróxido férrico 20 mg/mL injetável não é padronizado na REMUME para dispensação nas UBS (nas UPAs, só para pacientes em observação); o medicamento adquirido pelo paciente é administrado na UBS de referência, com médico e enfermeiro presentes; hipertensão descompensada, asma moderada a grave, DPOC e uso de betabloqueador → administrar na UPA; aos sábados, domingos e feriados ou sem médico/enfermeiro → UPA; tempo mínimo de infusão por dose (100 mg 15 min; 200 mg 30 min; 300 mg 1,5 h; 400 mg 2,5 h; 500 mg 3,5 h), dose única máxima 7 mg/kg em ≥ 3,5 h (documento anexado ao Projeto).", f: "F", url: ""},
  wfg2022: {s: "World Guidelines for Falls Prevention 2022", t: "Montero-Odasso M et al. World guidelines for falls prevention and management for older adults: a global initiative. Age Ageing 2022;51(9):afac205. DOI 10.1093/ageing/afac205 (PMC9523684): estratificação – alto risco se queda com lesão que exigiu tratamento, ≥ 2 quedas em 12 meses, fragilidade, ficar no chão sem conseguir levantar por ≥ 1 h ou suspeita de perda transitória de consciência; risco intermediário se queda única não grave com alteração de marcha/equilíbrio (velocidade de marcha < 0,8 m/s ou TUG > 15 s); 'três perguntas-chave'; avaliação multifatorial e intervenção multidomínio no alto risco; exercício de equilíbrio, funcional e força ≥ 3×/semana, progressivo, por ≥ 12 semanas; revisão e desprescrição de fármacos que aumentam o risco de queda (STOPPFall) (diretriz internacional).", f: "F", url: "https://doi.org/10.1093/ageing/afac205"}
});

(() => {
  const get = id => CONDICOES.find(x => x.id === id);
  const G = (id, guia, o = {}) => {
    const c = get(id); if (!c) return;
    c.guia = guia;
    if (c.evid && o.fontes) c.evid.fontes = [...new Set([...(c.evid.fontes || []), ...o.fontes])];
    (c.mudancas = c.mudancas || []).push("v60 (26/10/2026): Guia Clínico novo – " + (o.mud || "reconhecer, diferenciais, fluxograma e fontes") + ".");
    if (o.nv) c.nv = [...(c.nv || []), ...o.nv];
  };

  // ── 1. Aftas
  G("aftas", {
    urg: "**Úlcera única que não cicatriza em 2–3 semanas**, endurecida, indolor ou em tabagista/etilista: **biópsia** (afastar carcinoma) [C].",
    resumo: "Úlceras rasas, redondas, **dolorosas**, com fundo amarelo-acinzentado e halo vermelho, em mucosa não queratinizada (lábios, bochechas, língua), que cicatrizam em **7–14 dias** [C]. Na forma **recorrente** frequente ou grave: hemograma, **ferritina, B12, folato** e pensar em **doença celíaca, DII, Behçet e HIV** [C].",
    secoes: [
      {t: "Diferenciais", b: [
        {tab: {h: ["Hipótese", "Pistas"], r: [
          ["Herpes labial/intraoral recorrente", "Vesículas agrupadas em mucosa queratinizada (gengiva, palato duro, lábio) [C]"],
          ["Gengivoestomatite herpética", "Criança, febre, gengiva inflamada, muitas lesões [C]"],
          ["Mão-pé-boca / herpangina", "Criança, febre, lesões em palato mole e mãos/pés [C]"],
          ["Sífilis", "Úlcera indolor (cancro) ou placas mucosas; teste rápido [C]"],
          ["Carcinoma espinocelular", "Úlcera única, endurecida, > 3 semanas, tabagismo/etilismo [C]"],
          ["Trauma (prótese, mordida)", "Relação com aresta cortante, cicatriza ao remover a causa [C]"],
          ["Behçet", "Aftas + úlceras genitais + uveíte/lesões cutâneas [C]"]
        ]}}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Úlcera oral dolorosa"},
          {t: "Única, > 2–3 semanas, endurecida ou fator de risco?", ramos: [
            {r: "Sim", n: [{t: "Biópsia (estomatologia / CEO)", k: "stop"}]},
            {r: "Não", n: [{t: "Afta típica: analgesia local, evitar ácidos; corticoide tópico se disponível", k: "ok"}]}
          ]},
          {t: "Recorrente (várias crises/ano) ou grave?", ramos: [
            {r: "Sim", n: [{t: "Hemograma, ferritina, B12, folato; antitransglutaminase; HIV", k: "warn"}]},
            {r: "Não", n: [{t: "Sem investigação", k: "ok"}]}
          ]},
          {t: "Úlceras genitais, uveíte, diarreia ou perda de peso → investigação sistêmica", k: "warn"}
        ], nota: "Conhecimento consolidado [C]."},
        {ir: [["herpes-labial", "Herpes labial"], ["gengivoestomatite", "Gengivoestomatite herpética"], ["cr-b12", "Deficiência de B12"]]},
        {ref: ["aftas", "remume"]}
      ]}
    ]
  });

  // ── 2. Constipação
  G("constipacao", {
    urg: "**Parada de eliminação de gases e fezes com distensão, dor em cólica e vômitos**: suboclusão/obstrução → urgência [C]. Fecaloma em idoso acamado com confusão ou retenção urinária: remoção e avaliação no mesmo dia [C].",
    resumo: "Evacuações infrequentes, esforço, fezes endurecidas, sensação de evacuação incompleta ou manobras manuais (critérios de Roma IV para crônica funcional: ≥ 2 itens por ≥ 3 meses) [C]. Antes de rotular como funcional: **medicamentos** (opioide, anticolinérgico, ferro, cálcio, bloqueador de canal de cálcio, antidepressivo tricíclico), **hipotireoidismo, hipercalcemia, DM, gestação, imobilidade** e **sinais de alarme** [C]. Tratamento em degraus: fibras e água → **osmótico** → estimulante de resgate [C].",
    secoes: [
      {t: "Sinais de alarme", b: [
        {ul: [
          "Início recente após os **45–50 anos**, sangue nas fezes, **anemia ferropriva**, perda de peso, história familiar de câncer colorretal ou DII [C].",
          "Massa abdominal ou retal, afilamento progressivo das fezes [C].",
          "Com alarme: colonoscopia/proctologia; com sangramento baixo, levar o resultado do exame proctológico (protocolo SES-SC) [F]."
        ]}
      ]},
      {t: "Decidir e tratar", b: [
        {fluxo: [
          {t: "Constipação"},
          {t: "Distensão, vômitos, parada de gases?", ramos: [
            {r: "Sim", n: [{t: "Urgência", k: "stop"}]},
            {r: "Não", n: [{t: "Sinais de alarme?"}]}
          ]},
          {t: "Alarme", ramos: [
            {r: "Sim", n: [{t: "Colonoscopia (rastreio/diagnóstico); hemograma", k: "warn"}]},
            {r: "Não", n: [{t: "Rever medicamentos; TSH, glicemia, cálcio se clínica sugerir", k: "q"}]}
          ]},
          {t: "Fibras (dieta ou psyllium), água, atividade física, horário após refeição com apoio para os pés", k: "ok"},
          {t: "Sem resposta em 2–4 semanas → osmótico (lactulose na REMUME; macrogol se comprar)", k: "ok"},
          {t: "Bisacodil como resgate; refratária ao tratamento inicial → gastroenterologia", k: "warn"}
        ], nota: "Conhecimento consolidado [C]; encaminhamento: protocolo SES-SC 2022 [F]."},
        {det: {t: "Fisiopatologia", b: ["Três mecanismos se sobrepõem: **trânsito lento** (dieta pobre em fibra, sedentarismo, medicamentos, hipotireoidismo), **dissinergia evacuatória** (contração paradoxal do assoalho pélvico – esforço intenso e sensação de bloqueio, mesmo com fezes moles) e **causas estruturais**. A dissinergia não melhora com laxantes e responde a biofeedback/fisioterapia pélvica [C]."]}},
        {ir: [["pv-colorretal", "Rastreio colorretal"], ["hemorroida", "Doença hemorroidária"], ["constipacao-infantil", "Constipação na criança"]]},
        {ref: ["cochrane_constip", "sc_gastro2022", "remume"]}
      ]}
    ]
  }, {fontes: ["sc_gastro2022"]});

  // ── 3. Diarreia crônica / suspeita de DII
  G("dii-suspeita", {
    urg: "**Diarreia com sangue e febre, taquicardia, desidratação, distensão** ou **≥ 6 evacuações com sangue por dia**: colite grave → urgência [C]. Anemia importante com sangramento digestivo → emergência (protocolo SES-SC) [F].",
    resumo: "Diarreia **> 30 dias** é crônica (CAB 28; ≥ 14 dias, persistente) [F]. Causas comuns na APS: **síndrome do intestino irritável, parasitoses, doença celíaca, intolerância à lactose, medicamentos** (metformina, IBP, AINE, antibiótico, magnésio), **hipertireoidismo** e **tuberculose intestinal** [F/C]. Sangue, perda de peso, anemia, febre, sintomas **noturnos**, início > 50 anos ou história familiar sugerem **doença orgânica** (DII, câncer) [C].",
    secoes: [
      {t: "Diferenciais", b: [
        {tab: {h: ["Hipótese", "Pistas"], r: [
          ["Síndrome do intestino irritável", "Dor que melhora com evacuação, sem alarme, sem sintomas noturnos [C]"],
          ["Doença de Crohn", "Jovem, dor em FID, perda de peso, lesões perianais (fístula, abscesso), aftas [C]"],
          ["Retocolite ulcerativa", "Diarreia com sangue e muco, tenesmo, urgência [C]"],
          ["Doença celíaca", "Anemia ferropriva, distensão, perda de peso; antitransglutaminase IgA [C]"],
          ["Giardíase / outras parasitoses", "Diarreia prolongada, gases, má absorção; parasitológico seriado [F]"],
          ["Medicamentos", "Metformina, IBP, AINE, antibiótico (C. difficile), laxantes [C]"],
          ["Câncer colorretal", "> 50 anos, sangue, anemia, mudança de hábito [C]"],
          ["Hipertireoidismo", "Perda de peso com apetite preservado, taquicardia, tremor [C]"]
        ]}}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Diarreia > 4 semanas"},
          {t: "Sinais de colite grave?", ramos: [
            {r: "Sim", n: [{t: "Urgência", k: "stop"}]},
            {r: "Não", n: [{t: "Hemograma, PCR/VHS, ferritina, albumina, TSH, creatinina e eletrólitos, parasitológico, antitransglutaminase IgA"}]}
          ]},
          {t: "Sangue, perda de peso, anemia, noturna, > 50 anos ou exames inflamatórios alterados?", ramos: [
            {r: "Sim", n: [{t: "Colonoscopia / gastroenterologia com prioridade", k: "warn"}]},
            {r: "Não", n: [{t: "Tratar a causa encontrada; sem causa e critérios de SII → manejar na APS", k: "ok"}]}
          ]},
          {t: "Calprotectina fecal normal torna DII muito improvável (se disponível)", k: "q"}
        ], nota: "CAB 28 [F]; protocolo SES-SC 2022 (diarreia > 3 semanas e suspeita de DII) [F]; calprotectina e alarme: ECCO/ACG [C]."},
        "Não usar antidiarreico se houver sangue ou febre (CAB 28: medicamentos para 'cortar' a diarreia não ajudam e podem complicar) [F].",
        {ir: [["parasitoses", "Enteroparasitoses"], ["diarreia", "Diarreia aguda"], ["pv-colorretal", "Câncer colorretal"], ["cr-hipertireoidismo", "Hipertireoidismo"]]},
        {ref: ["cab28_dv", "sc_gastro2022", "dii"]}
      ]}
    ]
  }, {fontes: ["cab28_dv", "sc_gastro2022"]});

  // ── 4. DRGE
  G("drge", {
    urg: "**Disfagia, odinofagia, hematêmese/melena, anemia, perda de peso, vômitos persistentes ou massa**: endoscopia com prioridade [C/F]. **Dor 'em queimação' no peito com esforço, sudorese ou fatores de risco cardiovascular**: afastar síndrome coronariana antes [C].",
    resumo: "**Pirose e regurgitação** típicas permitem diagnóstico clínico e **prova terapêutica com IBP por 8 semanas**, sem endoscopia, quando não há sinais de alarme [C]. Medidas com melhor evidência: **perda de peso**, **elevar a cabeceira** (sintomas noturnos) e **não deitar 2–3 h após comer** [C]. Após resposta, **desmame** para menor dose ou uso sob demanda [C]. Refratária a medidas + **IBP em dose plena por 2 meses** → gastroenterologia (protocolo SES-SC) [F].",
    secoes: [
      {t: "Diferenciais", b: [
        {tab: {h: ["Hipótese", "Pistas"], r: [
          ["Dispepsia funcional / úlcera", "Dor ou desconforto epigástrico, plenitude; H. pylori [C]"],
          ["Doença coronariana", "Desconforto com esforço, irradiação, fatores de risco [C]"],
          ["Esofagite eosinofílica", "Jovem atópico com disfagia e impactação alimentar [C]"],
          ["Esofagite medicamentosa", "Doxiciclina, AINE, bisfosfonato, KCl tomados com pouca água [C]"],
          ["Acalasia / câncer de esôfago", "Disfagia progressiva, perda de peso, regurgitação de alimento não digerido [C/F]"],
          ["Manifestações extraesofágicas", "Tosse crônica, rouquidão, pigarro, asma de difícil controle [C]"]
        ]}}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Pirose e/ou regurgitação"},
          {t: "Sinal de alarme ou início > 60 anos?", ramos: [
            {r: "Sim", n: [{t: "EDA com prioridade", k: "warn"}]},
            {r: "Não", n: [{t: "Medidas + omeprazol 20 mg/dia antes do café por 8 semanas", k: "ok"}]}
          ]},
          {t: "Resposta?", ramos: [
            {r: "Sim", n: [{t: "Desmame: menor dose ou sob demanda", k: "ok"}]},
            {r: "Parcial/não", n: [{t: "Checar adesão e horário (30–60 min antes da refeição); dose dobrada por mais 8 semanas", k: "q"}]}
          ]},
          {t: "Refratária após IBP em dose plena por 2 meses → EDA / gastroenterologia", k: "warn"}
        ], nota: "ACG 2022 [C]; encaminhamento: protocolo SES-SC 2022 [F]."},
        {det: {t: "Fisiopatologia", b: ["Relaxamentos transitórios do esfíncter esofágico inferior, hérnia hiatal e aumento da pressão abdominal (obesidade, gestação) levam ácido ao esôfago. O IBP bloqueia a bomba de prótons da célula parietal ativada – por isso funciona melhor tomado **antes** da primeira refeição [C]."]}},
        {ir: [["dispepsia", "Dispepsia"], ["tosse-subaguda", "Tosse subaguda/crônica"], ["laringite", "Rouquidão"]]},
        {ref: ["acg_drge", "sc_gastro2022", "remume"]}
      ]}
    ]
  }, {fontes: ["sc_gastro2022"]});

  // ── 5. Doença hemorroidária
  G("hemorroida", {
    urg: "**Sangramento volumoso, instabilidade, anemia importante** → emergência (protocolo SES-SC) [F]. **Dor anal intensa com febre, retenção urinária ou área endurecida e quente**: abscesso perianal → cirurgia no mesmo dia [C].",
    resumo: "Sangue **vermelho-vivo, no papel ou gotejando após evacuar**, indolor, ou prolapso que reduz [C]. **Dor intensa** sugere **trombose externa** (nódulo azulado, < 72 h: excisão alivia) ou **fissura anal** (dor ao evacuar que dura horas) [C]. **Nunca atribuir sangramento a hemorroida sem examinar** (inspeção, toque, anuscopia se possível) e, se idade ≥ 45 anos, anemia ou mudança de hábito, **investigar o cólon** [C]. O protocolo SES-SC pede o resultado do exame proctológico no encaminhamento [F].",
    secoes: [
      {t: "Classificar (internas)", b: [
        {tab: {h: ["Grau", "Prolapso", "Manejo habitual"], r: [
          ["I", "Não prolapsa (só sangra)", "Fibras, água, tratar constipação [C]"],
          ["II", "Prolapsa e reduz sozinha", "Clínico; ligadura elástica se persistir [C]"],
          ["III", "Prolapsa e reduz manualmente", "Ligadura ou cirurgia (proctologia) [C]"],
          ["IV", "Prolapso irredutível", "Cirurgia (proctologia) [C]"]
        ]}, nota: "Classificação de Goligher, citada de memória [C]."}
      ]},
      {t: "Diferenciais", b: [
        {tab: {h: ["Hipótese", "Pistas"], r: [
          ["Fissura anal", "Dor lancinante ao evacuar, ferida linear posterior, plicoma sentinela [C]"],
          ["Trombose hemorroidária externa", "Nódulo azulado, doloroso, súbito [C]"],
          ["Abscesso / fístula perianal", "Dor contínua, febre, secreção, endurecimento [C]"],
          ["Câncer colorretal / anal", "Sangue misturado às fezes, anemia, mudança de hábito, idade [C]"],
          ["DII", "Diarreia com sangue, lesões perianais múltiplas [C]"],
          ["Condiloma / prolapso retal", "Lesões verrucosas; prolapso circunferencial da mucosa [C]"]
        ]}}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Sangramento anal ou nódulo/prolapso"},
          {t: "Instável, anemia importante ou abscesso?", ramos: [
            {r: "Sim", n: [{t: "Emergência / cirurgia", k: "stop"}]},
            {r: "Não", n: [{t: "Inspeção + toque retal (± anuscopia)"}]}
          ]},
          {t: "≥ 45 anos, anemia, sangue misturado às fezes ou mudança de hábito?", ramos: [
            {r: "Sim", n: [{t: "Colonoscopia", k: "warn"}]},
            {r: "Não", n: [{t: "Fibras, água, banho de assento, analgesia; lidocaína tópica por poucos dias", k: "ok"}]}
          ]},
          {t: "Trombose externa < 72 h com dor intensa → excisão (proctologia/cirurgia)", k: "q"},
          {t: "Grau III–IV ou sangramento persistente → proctologia", k: "warn"}
        ], nota: "Conhecimento consolidado [C]; protocolo SES-SC 2022 (proctologia e emergência) [F]."},
        {ir: [["constipacao", "Constipação"], ["pv-colorretal", "Rastreio colorretal"], ["condiloma", "Condiloma"]]},
        {ref: ["hemor", "sc_gastro2022", "remume"]}
      ]}
    ]
  }, {fontes: ["sc_gastro2022"]});

  // ── 6. Náuseas e vômitos
  G("nauseas", {
    urg: "**Hematêmese, vômito fecaloide, distensão com parada de eliminação, dor abdominal intensa com defesa, cefaleia súbita/rigidez de nuca, sinais neurológicos, dor torácica ou desidratação grave**: urgência [F/C]. Contraindicações à reidratação oral (vômitos persistentes, alteração de consciência, íleo, choque) → plano C [F].",
    resumo: "Primeiro a **causa**, depois o antiemético [F]. Pistas do CAB 28: **medicamentos** (causa frequente), **gravidez** (descartar sempre), vômito logo após comer (psicogênico), ~1 h depois (gastroparesia), > 12 h depois (obstrução); **bilioso** exclui obstrução gástrica; **alimento não digerido** sugere divertículo/acalasia; **fecaloide** sugere obstrução distal; **em jato** com mudança de posição sugere hipertensão intracraniana [F]. A maioria se resolve com **hidratação oral** fracionada (planos A/B) [F].",
    secoes: [
      {t: "Diferenciais que não podem passar", b: [
        {ul: [
          "**Gestação** (inclusive ectópica) – teste em toda mulher em idade fértil [F].",
          "**Cetoacidose diabética** – glicemia capilar em diabético ou com poliúria/polidipsia [C].",
          "**IAM inferior** – idoso, diabético, mulher: náusea pode ser o sintoma principal [C].",
          "**Abdome agudo** (apendicite, colecistite, pancreatite, obstrução) – dor localizada, febre, defesa [F/C].",
          "**Hipertensão intracraniana / meningite / AVC de fossa posterior** – cefaleia, vertigem com sinais centrais [F/C].",
          "**Intoxicação** (medicamentos, álcool, digoxina, lítio, teofilina) [C]."
        ]}
      ]},
      {t: "Decidir e tratar", b: [
        {fluxo: [
          {t: "Náusea/vômito agudo"},
          {t: "Sinal de alarme ou desidratação grave?", ramos: [
            {r: "Sim", n: [{t: "Urgência (plano C enquanto aguarda)", k: "stop"}]},
            {r: "Não", n: [{t: "Teste de gravidez; revisar medicamentos; glicemia se DM"}]}
          ]},
          {t: "Desidratação leve/moderada?", ramos: [
            {r: "Sim", n: [{t: "Plano B: SRO na unidade em pequenos volumes", k: "warn"}]},
            {r: "Não", n: [{t: "Plano A: SRO e dieta fracionada em casa", k: "ok"}]}
          ]},
          {t: "Antiemético por curto período se atrapalha a hidratação (metoclopramida; ondansetrona se jovem ou risco extrapiramidal)", k: "q"},
          {t: "> 48–72 h ou recorrente → investigar a causa", k: "warn"}
        ], nota: "CAB 28, cap. 2.5, Quadros 17, 18 e 21 [F]."},
        {ir: [["diarreia", "Diarreia aguda"], ["nvg", "Náuseas e vômitos na gestação"], ["teste-gravidez-positivo", "Teste de gravidez positivo"]]},
        {ref: ["cab28_dv", "nausea", "remume"]}
      ]}
    ]
  }, {fontes: ["cab28_dv"]});

  // ── 7. Enteroparasitoses
  G("parasitoses", {
    urg: "**Imunossuprimido (corticoide, transplante, HTLV-1, quimioterapia) com diarreia, dor abdominal, sintomas respiratórios ou sepse por gram-negativo**: **hiperinfecção por Strongyloides** → urgência [C].",
    resumo: "Suspeita clínica (prurido anal noturno, eliminação de vermes, diarreia prolongada, anemia ferropriva, eosinofilia) ou **parasitológico** positivo [C]. Albendazol trata a maioria dos helmintos; **ivermectina** para estrongiloidíase; **nitroimidazólicos** para giárdia e ameba (CAB 28) [F/C]. Antes de **corticoide prolongado ou imunossupressão**, tratar empiricamente estrongiloidíase em quem tem exposição [C].",
    secoes: [
      {t: "Por parasita", b: [
        {tab: {h: ["Parasita", "Pistas", "Tratamento"], r: [
          ["Oxiúros (Enterobius)", "Prurido anal noturno, criança, familiares", "Albendazol 400 mg DU, repetir em 2 semanas; tratar contactantes [C]"],
          ["Ascaris, ancilostomídeo", "Eliminação de verme; anemia ferropriva (ancilostomídeo)", "Albendazol 400 mg DU [C]"],
          ["Trichuris", "Diarreia, prolapso retal em criança", "Albendazol 400 mg por 3 dias [C]"],
          ["Strongyloides", "Eosinofilia, dermatite serpiginosa, sintomas pulmonares", "Ivermectina 200 mcg/kg 1×/dia por 1–2 dias [NV]"],
          ["Giárdia", "Diarreia prolongada, gases, má absorção", "Secnidazol ou tinidazol 2 g DU (criança 30 mg/kg, máx. 2 g) ou metronidazol 250 mg 2×/dia 5 dias [F]"],
          ["Ameba (intestinal)", "Disenteria", "Secnidazol 2 g DU; ou metronidazol 500 mg 3×/dia 5 dias; graves 750 mg 3×/dia 10 dias [F]"],
          ["Tênia", "Proglotes nas fezes", "Praziquantel 5–10 mg/kg DU [NV]"]
        ]}, nota: "CAB 28, cap. 2.5 (giárdia e ameba) [F]; demais esquemas citados de memória – conferir bula [C/NV]. Secnidazol: evitar no 1º trimestre e na amamentação (CAB 28) [F]."}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Suspeita de parasitose"},
          {t: "Imunossuprimido ou vai iniciar corticoide/imunossupressor?", ramos: [
            {r: "Sim", n: [{t: "Ivermectina empírica (exposição); sinais de hiperinfecção → urgência", k: "warn"}]},
            {r: "Não", n: [{t: "Quadro típico (oxiúros, eliminação de verme)?"}]}
          ]},
          {t: "Típico", ramos: [
            {r: "Sim", n: [{t: "Tratar sem exame; contactantes se oxiúros", k: "ok"}]},
            {r: "Não", n: [{t: "Parasitológico seriado (3 amostras) e hemograma (eosinofilia)", k: "q"}]}
          ]},
          {t: "Diarreia > 30 dias sem parasita → investigar diarreia crônica", k: "warn"}
        ], nota: "CAB 28 [F]; conhecimento consolidado [C]."},
        "Orientar lavagem das mãos, unhas curtas, água tratada/fervida, higiene dos alimentos e calçados [C].",
        {ir: [["dii-suspeita", "Diarreia crônica"], ["anemia-ferropriva", "Anemia ferropriva"], ["larva-migrans", "Larva migrans"]]},
        {ref: ["cab28_dv", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["cab28_dv"], nv: ["Doses de ivermectina (estrongiloidíase) e praziquantel (teníase): conferir bula."]});

  // ── 8. Insuficiência venosa crônica
  G("ivc", {
    urg: "**Edema unilateral súbito com dor na panturrilha**: TVP → investigar com urgência [C]. **Varicorragia** (sangramento de variz): elevar a perna e comprimir; urgência se volumoso [C]. Úlcera com celulite ou dor desproporcional: avaliar infecção e **doença arterial** [C].",
    resumo: "Peso, dor, cansaço e edema que **pioram ao fim do dia e melhoram com elevação**; telangiectasias, varizes, **hiperpigmentação ocre, eczema, lipodermatoesclerose** e **úlcera maleolar medial** (classificação CEAP) [C]. Base: **compressão, elevação, caminhada e perda de peso** [C]. Antes de compressão forte, **palpar pulsos** (ou ITB) – doença arterial contraindica [C]. Úlcera venosa sem cicatrização apesar de compressão e curativo adequados: **Consulta de Avaliação de Feridas FHEMIG** no CMCE (Betim) [F].",
    secoes: [
      {t: "Classificar (CEAP clínico)", b: [
        {tab: {h: ["Classe", "Achado"], r: [
          ["C0", "Sem sinais visíveis"], ["C1", "Telangiectasias ou veias reticulares"], ["C2", "Varizes (≥ 3 mm)"],
          ["C3", "Edema"], ["C4", "Alterações de pele (pigmentação, eczema, lipodermatoesclerose)"],
          ["C5", "Úlcera cicatrizada"], ["C6", "Úlcera ativa"]
        ]}, nota: "CEAP, citada de memória [C]."}
      ]},
      {t: "Diferenciais do edema de perna", b: [
        {tab: {h: ["Hipótese", "Pistas"], r: [
          ["TVP", "Unilateral, súbito, dor, empastamento, fatores de risco [C]"],
          ["IC, DRC, hepatopatia, hipoalbuminemia", "Bilateral, sintomas sistêmicos [C]"],
          ["Medicamentos", "**Anlodipino/nifedipino**, pioglitazona, AINE, corticoide, pregabalina [C]"],
          ["Linfedema", "Não depressível, dorso do pé, sinal de Stemmer [C]"],
          ["Lipedema", "Bilateral simétrico, poupa os pés, mulher, dor ao toque [C]"],
          ["Doença arterial (úlcera)", "Úlcera em dedos/face lateral, dor em repouso, pulsos ausentes [C]"]
        ]}}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Varizes / edema / alteração de pele"},
          {t: "Edema unilateral agudo ou dor na panturrilha?", ramos: [
            {r: "Sim", n: [{t: "Investigar TVP", k: "stop"}]},
            {r: "Não", n: [{t: "Pulsos pediosos e tibiais posteriores presentes?"}]}
          ]},
          {t: "Pulsos", ramos: [
            {r: "Presentes", n: [{t: "Compressão 20–30 mmHg, elevação, caminhada, perda de peso", k: "ok"}]},
            {r: "Ausentes/dúvida", n: [{t: "ITB antes de compressão; suspeita de DAOP → vascular", k: "warn"}]}
          ]},
          {t: "Úlcera (C6) → curativo + compressão; sem cicatrização → Avaliação de Feridas FHEMIG (CMCE)", k: "warn"},
          {t: "Varizes sintomáticas refratárias, varicorragia, tromboflebite de repetição → cirurgia vascular", k: "warn"}
        ], nota: "ESVS 2022 [C]; Memorando SMS Betim 0002892/2026 [F]."},
        {ir: [["tvp", "Suspeita de TVP"], ["ferida", "Ferimentos"], ["celulite", "Celulite"]]},
        {ref: ["ivc", "betim_feridas2026"]}
      ]}
    ]
  }, {nv: ["Fornecimento de meias de compressão por programa local em Betim."]});

  // ── 9. PA elevada sem lesão de órgão-alvo
  G("pa-elevada", {
    urg: "PA elevada com **dor torácica, dispneia/estertores, déficit neurológico, confusão, convulsão, alteração visual, dor lancinante nas costas, oligúria** ou gestante ≥ 20 semanas: **emergência hipertensiva/pré-eclâmpsia** → SAMU [F].",
    resumo: "O CAB 28 separa quatro situações: **emergência** (lesão aguda progressiva de órgão-alvo – SAMU), **urgência** (elevação importante sem lesão aguda – reduzir em 24–48 h por via oral), **pseudocrise** (elevação causada por **dor, tontura ou ansiedade** – tratar o sintoma, **não** dar anti-hipertensivo) e **elevação eventual** (achado de rotina – iniciar/ajustar tratamento) [F]. A Diretriz Brasileira 2025 trocou 'urgência hipertensiva' por **elevação importante da PA (≥ 180/110) sem lesão aguda**, com manejo ambulatorial e reavaliação em até 7 dias [F]. **Não usar nifedipino sublingual** [F].",
    secoes: [
      {t: "Classificar (CAB 28, Quadro 47)", b: [
        {tab: {h: ["Situação", "O que é", "Conduta"], r: [
          ["Emergência hipertensiva", "Edema agudo de pulmão, SCA, dissecção de aorta, encefalopatia, AVC, hipertensão maligna, eclâmpsia", "Estabilizar e encaminhar (SAMU) [F]"],
          ["Urgência / elevação importante sem LOA", "PA muito elevada, estável, sem lesão aguda", "Medicação oral, redução em 24–48 h, seguimento [F]"],
          ["Pseudocrise", "Elevação por dor, cefaleia, tontura, ansiedade", "Analgésico, antivertiginoso ou ansiolítico; não anti-hipertensivo [F]"],
          ["Elevação eventual", "Achado sem queixa", "Confirmar HAS, iniciar ou ajustar tratamento, checar adesão [F]"]
        ]}, nota: "CAB 28, cap. 2.14 [F]. O CAB 28 cita PAD > 120 como referência da urgência; a Diretriz 2025 usa ≥ 180/110 [F]."}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "PA elevada na UBS: repetir após 5–10 min sentado, manguito adequado"},
          {t: "Sintoma ou sinal de lesão aguda de órgão-alvo?", ramos: [
            {r: "Sim", n: [{t: "Emergência: SAMU, ECG, acesso venoso", k: "stop"}]},
            {r: "Não", n: [{t: "Dor, ansiedade ou tontura explicam?"}]}
          ]},
          {t: "Pseudocrise", ramos: [
            {r: "Sim", n: [{t: "Tratar o sintoma e reaferir", k: "ok"}]},
            {r: "Não", n: [{t: "Iniciar/ajustar anti-hipertensivo oral contínuo; checar adesão", k: "ok"}]}
          ]},
          {t: "Reavaliar em até 7 dias; meta inicial < 160/100; ECG, creatinina, K, EAS, glicemia se não houver recentes", k: "q"}
        ], nota: "CAB 28 [F]; Diretriz Brasileira de Hipertensão 2025 [F]."},
        {ir: [["cr-crise-has", "Crise hipertensiva na UBS"], ["cr-has", "HAS – diagnóstico e metas"], ["pa-gestante", "PA elevada na gestante"]]},
        {ref: ["cab28_has", "dbha2025", "remume"]}
      ]}
    ]
  }, {fontes: ["cab28_has"], mud: "classificação do CAB 28 (emergência, urgência, pseudocrise, elevação eventual), fluxograma e nomenclatura da Diretriz 2025"});

  // ── 10. Palpitações
  G("palpitacoes", {
    urg: "Palpitação com **síncope, hipoperfusão, dispneia, dor torácica (suspeita de SCA)** ou ECG de risco – **TV, TSV paroxística, FA/flutter de alta resposta, QT longo ou curto, Brugada, BAV 2º grau Mobitz II/3º grau, bradicardia < 40, pausas > 3 s** → urgência (TelessaúdeRS) [F]. História familiar de **morte súbita** em jovem: prioridade [F/C].",
    resumo: "A maioria das palpitações na APS é benigna (extrassístoles, taquicardia sinusal, ansiedade) [C]. Investigação inicial na APS (TelessaúdeRS): **anamnese e exame físico, ECG, hemograma, função tireoidiana e eletrólitos**, e afastar causas **psicogênicas e exógenas** (cafeína, energéticos, álcool, cocaína, descongestionantes, salbutamol, levotiroxina em excesso) [F]. Palpitação recorrente de origem indeterminada após essa investigação → cardiologia [F].",
    secoes: [
      {t: "Reconhecer pelo padrão", b: [
        {tab: {h: ["Descrição", "Sugere"], r: [
          ["'Falha' ou 'soco' isolado, pausa", "Extrassístole [C]"],
          ["Início e fim **súbitos**, regular e rápida, termina com manobra vagal", "TSV paroxística [C]"],
          ["Irregular e rápida", "Fibrilação atrial [C]"],
          ["Início e fim graduais, com esforço/ansiedade", "Taquicardia sinusal [C]"],
          ["Com síncope ou durante exercício", "Arritmia ventricular / cardiopatia estrutural – urgência [C]"],
          ["Pulsação no pescoço ('sinal do sapo')", "Reentrada nodal (TRN) [C]"]
        ]}}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Palpitações"},
          {t: "Síncope, instabilidade, dor torácica, dispneia ou ECG de risco?", ramos: [
            {r: "Sim", n: [{t: "Urgência", k: "stop"}]},
            {r: "Não", n: [{t: "ECG, hemograma, TSH, eletrólitos; revisar estimulantes e medicamentos"}]}
          ]},
          {t: "Causa encontrada (anemia, tireoide, cafeína, ansiedade, extrassístoles benignas)?", ramos: [
            {r: "Sim", n: [{t: "Tratar a causa; betabloqueador se extrassístoles muito sintomáticas", k: "ok"}]},
            {r: "Não", n: [{t: "Holter (sintomas diários) ou monitor de eventos; eco se sopro/cardiopatia", k: "q"}]}
          ]},
          {t: "Recorrente sem causa, TSV recorrente sem resposta, flutter → cardiologia", k: "warn"}
        ], nota: "TelessaúdeRS Cardiologia 2022, Protocolo 3 e Quadro 6 [F]; EHRA 2011 [C]."},
        "Guia de encaminhamento: sintomas, frequência, relação com esforço e consequências hemodinâmicas; tipo de arritmia; medicações; ECG e outros exames com data; **história familiar de morte súbita** (idade e parentesco) [F].",
        {ir: [["cr-fa", "Fibrilação atrial"], ["sincope", "Síncope"], ["cr-hipertireoidismo", "Hipertireoidismo"], ["panico", "Ataque de pânico"]]},
        {ref: ["tsrs_card2022", "palpitacoes", "remume"]}
      ]}
    ]
  }, {fontes: ["tsrs_card2022"], nv: ["Acesso a Holter e ecocardiograma em Betim."]});

  // ── 11. Anemia ferropriva
  const af = get("anemia-ferropriva");
  if (af) {
    af.encaminhar = "Hb < 7 g/dL ou sintomas importantes → avaliação urgente. Intolerância ou falha ao ferro oral, má absorção → ferro EV: o sacarato de hidróxido férrico não é dispensado nas UBS de Betim (Circular DUE-DIOP 003/2024) – o paciente adquire e a UBS administra; hipertensão descompensada, asma moderada a grave, DPOC ou uso de betabloqueador → administrar na UPA. Investigação digestiva → EDA/colonoscopia.";
    if (af.sus) af.sus.betim = "REMUME Betim: sulfato ferroso 40 mg comprimido e 25 mg/mL solução. O sacarato de hidróxido férrico 20 mg/mL consta da REMUME, mas pela Circular DUE-DIOP 003/2024 não é dispensado nas UBS (nas UPAs, só para pacientes em observação): o paciente adquire e a UBS administra.";
    (af.mudancas = af.mudancas || []).push("v60 (26/10/2026): ferro EV corrigido conforme Circular DUE-DIOP 003/2024 de Betim (não dispensado na UBS; o paciente adquire e a UBS administra).");
  }
  G("anemia-ferropriva", {
    urg: "**Hb < 7 g/dL, dispneia, dor torácica, síncope ou sangramento ativo** → avaliação urgente [C]. Anemia importante com sangramento digestivo → emergência (protocolo SES-SC) [F].",
    resumo: "Anemia **microcítica** com **ferritina baixa** (< 30 ng/mL é o corte mais usado; com inflamação, ferritina até ~100 com saturação de transferrina < 20% ainda sugere deficiência) [C]. **Toda ferropenia tem causa**: em homem e mulher pós-menopausa, **investigar perda gastrointestinal** (EDA + colonoscopia) e **doença celíaca** [C]; na mulher em idade fértil, **sangramento menstrual** e gestação [C]. Ferro oral **1×/dia ou em dias alternados** (melhor absorção e tolerância) [C]; esperar aumento de **Hb ≥ 1 g/dL em 4 semanas** [C].",
    secoes: [
      {t: "Diferenciais da microcitose", b: [
        {tab: {h: ["Hipótese", "Ferritina", "Outras pistas"], r: [
          ["Deficiência de ferro", "Baixa", "RDW alto, plaquetas altas [C]"],
          ["Anemia de doença crônica / inflamação", "Normal ou alta", "Saturação de transferrina baixa, PCR alta [C]"],
          ["Traço talassêmico", "Normal", "VCM muito baixo para o grau de anemia, hemácias normais ou altas (índice de Mentzer < 13) [C]"],
          ["Anemia sideroblástica / intoxicação por chumbo", "Normal/alta", "Raras; exposição ocupacional [C]"]
        ]}}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Hb baixa com VCM baixo"},
          {t: "Ferritina baixa?", ramos: [
            {r: "Sim", n: [{t: "Deficiência de ferro: buscar a causa"}]},
            {r: "Não", n: [{t: "Inflamação? talassemia? (eletroforese de Hb)", k: "q"}]}
          ]},
          {t: "Quem é", ramos: [
            {r: "Homem / pós-menopausa", n: [{t: "EDA + colonoscopia; antitransglutaminase", k: "warn"}]},
            {r: "Mulher em idade fértil", n: [{t: "Avaliar fluxo menstrual e dieta; investigar TGI se sintomas ou falha", k: "ok"}]}
          ]},
          {t: "Ferro oral 1×/dia ou dias alternados; Hb em 4 semanas; manter 3 meses após normalizar", k: "ok"},
          {t: "Sem resposta: adesão, perda contínua, má absorção (celíaca, H. pylori, bariátrica) → ferro EV", k: "warn"}
        ], nota: "Conhecimento consolidado [C]; protocolo SES-SC 2022 (classificação de risco) [F]."},
        {trio: {ideal: "Ferro EV (dose total em 1–2 infusões) para intolerância, falha ou má absorção.", sus: "Em Betim, o sacarato de hidróxido férrico não é dispensado nas UBS; o paciente adquire e a UBS administra, com médico e enfermeiro presentes; HAS descompensada, asma moderada/grave, DPOC ou betabloqueador → UPA (Circular DUE-DIOP 003/2024).", ponte: "Esgotar o ferro oral (dias alternados, com alimento se intolerância). Se precisar de EV: receita para compra e agendamento na UBS, conferindo os tempos mínimos de infusão da circular (100 mg em 15 min a 500 mg em 3,5 h)."}},
        {ir: [["pn-anemia", "Anemia na gestação"], ["cr-b12", "Deficiência de B12"], ["sua", "Sangramento uterino anormal"], ["pv-colorretal", "Câncer colorretal"]]},
        {ref: ["betim_ferro2024", "stoffel", "sc_gastro2022", "remume"]}
      ]}
    ]
  }, {fontes: ["betim_ferro2024", "sc_gastro2022"], mud: "diferenciais da microcitose, fluxograma de investigação e regras de Betim para ferro EV"});

  // ── 12. Queda no idoso
  G("queda-idoso", {
    urg: "**TCE em uso de anticoagulante**, perda de consciência, cefaleia ou vômitos após a queda, **dor no quadril com incapacidade de apoiar**, déficit neurológico novo ou queda por **síncope** → urgência [C]. **Ficou no chão ≥ 1 h sem conseguir levantar**: risco de rabdomiólise, hipotermia e úlcera – avaliar no mesmo dia [C].",
    resumo: "Estratificar (World Guidelines 2022): **alto risco** se a queda causou **lesão que exigiu tratamento**, **≥ 2 quedas em 12 meses**, **fragilidade**, ficou no chão **≥ 1 h sem levantar** ou houve suspeita de **perda transitória de consciência** → **avaliação multifatorial e intervenção multidomínio** [F]. Queda única não grave **com alteração de marcha/equilíbrio** (velocidade de marcha **< 0,8 m/s** ou TUG > 15 s) = risco **intermediário** → **exercício de equilíbrio e força** [F]. Exercício **≥ 3×/semana, progressivo, por ≥ 12 semanas** e **desprescrição de fármacos que aumentam o risco de queda** são as intervenções centrais [F].",
    secoes: [
      {t: "Estratificar", b: [
        "**Três perguntas-chave:** caiu no último ano? Sente-se instável ao ficar em pé ou andar? Tem medo/preocupação de cair? Qualquer 'sim' → avaliar marcha e equilíbrio [F].",
        {tab: {h: ["Risco", "Critério", "Conduta"], r: [
          ["Baixo", "Sem queda ou queda única não grave, marcha e equilíbrio normais", "Orientação, atividade física 150–300 min/semana; reavaliar anualmente [F]"],
          ["Intermediário", "Queda única não grave + marcha lenta (< 0,8 m/s) ou TUG > 15 s", "Exercício de equilíbrio e força (≥ 3×/semana, ≥ 12 semanas) [F]"],
          ["Alto", "Lesão, ≥ 2 quedas/ano, fragilidade, ≥ 1 h no chão, suspeita de síncope", "Avaliação multifatorial + intervenções multidomínio [F]"]
        ]}, nota: "World Guidelines for Falls Prevention 2022 [F]."}
      ]},
      {t: "Avaliação multifatorial (alto risco)", b: [
        {ul: [
          "Marcha e equilíbrio, força (sentar-levantar), uso de dispositivos [F].",
          "**Medicamentos**: benzodiazepínicos, hipnóticos, antidepressivos, antipsicóticos, anti-hipertensivos/diuréticos, hipoglicemiantes, opioides – usar STOPPFall/STOPP-START [F].",
          "**Hipotensão ortostática** (queda ≥ 20/10 mmHg em 1–3 min), arritmia, síncope [F/C].",
          "Visão, audição, pés e calçados, incontinência/noctúria [F].",
          "Cognição, delirium, **depressão** e **medo de cair** [F].",
          "Ambiente da casa (visita domiciliar da equipe/eMulti) e **risco de fratura** (osteoporose) [F/C]."
        ]}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Idoso que caiu"},
          {t: "Lesão grave, TCE com anticoagulante, síncope ou incapaz de apoiar?", ramos: [
            {r: "Sim", n: [{t: "Urgência", k: "stop"}]},
            {r: "Não", n: [{t: "Estratificar (três perguntas, velocidade de marcha/TUG)"}]}
          ]},
          {t: "Risco", ramos: [
            {r: "Alto", n: [{t: "Avaliação multifatorial + desprescrição + exercício + casa + osteoporose", k: "warn"}]},
            {r: "Intermediário", n: [{t: "Exercício de equilíbrio e força supervisionado", k: "ok"}]},
            {r: "Baixo", n: [{t: "Orientação e atividade física; reavaliar em 1 ano", k: "ok"}]}
          ]},
          {t: "Ensinar a levantar do chão e ter como pedir ajuda (evitar 'long-lie')", k: "q"}
        ], nota: "World Guidelines for Falls Prevention 2022 [F]."},
        {ir: [["cr-polifarmacia", "Polifarmácia e desprescrição"], ["cr-osteoporose", "Osteoporose"], ["sincope", "Síncope"], ["po-idoso-vulneravel", "IVCF-20"], ["cr-fragilidade", "Fragilidade"]]},
        {ref: ["wfg2022", "quedas_2022", "remume"]}
      ]}
    ]
  }, {fontes: ["wfg2022"], mud: "estratificação de risco da World Guidelines 2022, avaliação multifatorial e fluxograma"});
})();
