// ───────────── data87.js – v76: monoartrite e poliartrite agudas separadas (pedido da usuária, 28/10/2026).
// "artrite-aguda" (antes "Monoartrite / artralgia aguda") passa a tratar só da articulação quente e inchada (mono/oligoartrite), e
// "poliartrite-aguda" é item novo (poliartralgia/poliartrite < 6 semanas).
// Conferido nesta revisão: Margaretten 2007 (JAMA, RS de acurácia – fatores de risco e razões de verossimilhança do líquido sinovial);
// SANJO 2023 (diretriz EBJIS de artrite séptica em articulação nativa – PDF integral do repositório da Univ. de Berna); Kocher 1999
// (JBJS, quadril irritável na criança – resumo no PubMed); PCDT IST 2022, Quadro 31 (infecção gonocócica disseminada); TelessaúdeRS
// Reumatologia 2022, Protocolo 1 e Quadro 2 (suspeita de artrite reumatoide); AHA 2015 (revisão dos critérios de Jones – resumo).
// Arboviroses: fontes já conferidas no app (MS 2024 APS, GVS 2024, NT Betim 2025, fluxograma SES-MG).

Object.assign(FONTES, {
  margaretten2007: {s: "Margaretten 2007 – Does this adult patient have septic arthritis? (JAMA)", t: "Margaretten ME, Kohlwes J, Moore D, Bent S. Does this adult patient have septic arthritis? JAMA 2007;297(13):1478-88, doi 10.1001/jama.297.13.1478 (RS de acurácia; 14 estudos, 6.242 pacientes, 653 com artrite séptica não gonocócica): aumentam a probabilidade idade, diabetes, artrite reumatoide, cirurgia articular, prótese de quadril ou joelho, infecção de pele e HIV; dor articular (sensibilidade 85%), história de edema (78%) e febre (57%) são os únicos achados em mais da metade; calafrios 19%; leucócitos no líquido sinovial < 25.000/µL RV 0,32; ≥ 25.000 RV 2,9; > 50.000 RV 7,7; > 100.000 RV 28; polimorfonucleares ≥ 90% RV 3,4 e < 90% RV 0,34 (conferido no PubMed em 28/10/2026).", f: "F", url: "https://doi.org/10.1001/jama.297.13.1478"},
  sanjo2023: {s: "EBJIS 2023 – diretriz de artrite séptica em articulação nativa (SANJO)", t: "Ravn C, Neyt J, Benito N, et al. Guideline for management of septic arthritis in native joints (SANJO). J Bone Jt Infect 2023;8(1):29-37, doi 10.5194/jbji-8-29-2023 (diretriz, recomendações graduadas): Rec. 1 – identificar sepse ou choque séptico (atenção imediata); considerar TB na artrite subaguda ou crônica em quem tem ligação com área endêmica; Rec. 2 – nenhum exame de sangue confirma ou exclui; PCR para apoiar o diagnóstico e acompanhar a resposta; Rec. 3 – puncionar o mais rápido possível; Rec. 4 – prioridade do líquido: identificação bacteriana, depois leucócitos e cristais; Rec. 5 – leucócitos > 50.000/µL sugerem, mas sozinhos não bastam; < 25.000 reduzem a probabilidade sem excluir; cortes podem não valer em imunossuprimidos; cristais não excluem infecção; Rec. 6 – radiografia para doença prévia; USG, TC ou RM para derrame e abscesso; Rec. 7 – ao menos 2 pares de hemoculturas se febre, suspeita de bacteremia ou sepse; Rec. 9 – ≥ 1 mL em tubo estéril para cultura; Gram mesmo com sensibilidade limitada; Rec. 12 – antibiótico após a punção, exceto na sepse, em que começa o quanto antes (PDF integral, conferido em 28/10/2026).", f: "F", url: "https://boris.unibe.ch/178599/1/jbji-8-29-2023.pdf"},
  kocher1999: {s: "Kocher 1999 – artrite séptica × sinovite transitória do quadril na criança (JBJS)", t: "Kocher MS, Zurakowski D, Kasser JR. Differentiating between septic arthritis and transient synovitis of the hip in children: an evidence-based clinical prediction algorithm. J Bone Joint Surg Am 1999;81(12):1662-70, doi 10.2106/00004623-199912000-00002 (estudo retrospectivo de derivação, hospital pediátrico terciário): 4 preditores – febre referida, não apoiar o membro, VHS ≥ 40 mm/h e leucócitos > 12.000/mm³; probabilidade de artrite séptica < 0,2% com 0, 3% com 1, 40% com 2, 93,1% com 3 e 99,6% com 4 preditores (resumo conferido no PubMed em 28/10/2026). Validações posteriores em outros serviços mostraram desempenho menor [C].", f: "F", url: "https://doi.org/10.2106/00004623-199912000-00002"},
  jones2015: {s: "AHA 2015 – revisão dos critérios de Jones (febre reumática)", t: "Gewitz MH et al. Revision of the Jones Criteria for the diagnosis of acute rheumatic fever in the era of Doppler echocardiography: a scientific statement from the American Heart Association. Circulation 2015;131(20):1806-18, doi 10.1161/CIR.0000000000000205 (declaração científica): define populações de baixo e de moderado/alto risco, com critérios diferentes, e inclui a ecocardiografia com Doppler para cardite subclínica (resumo conferido no PubMed em 28/10/2026; os critérios por população vêm do texto integral, não aberto – citados de memória [C]).", f: "C", url: "https://doi.org/10.1161/CIR.0000000000000205"}
});

(() => {
  const get = id => CONDICOES.find(x => x.id === id);
  const MUD = "v76 (28/10/2026): ";
  const T = (h, rows, nota) => ({tab: {h, r: rows}, nota});

  // ───────── 1) Monoartrite aguda
  const m = get("artrite-aguda");
  if (m) {
    Object.assign(m, {
      nome: "Monoartrite aguda (articulação quente e inchada)",
      cid: "M13.1 · M00.9 · M25.4",
      tags: "monoartrite oligoartrite artrite aguda articulação quente joelho inchado derrame articular artrite séptica artrocentese punção líquido sinovial gota pseudogota gonocócica hemartrose criança mancando quadril sinovite transitória",
      alerta: "Monoartrite aguda com febre, dor intensa a qualquer movimento, imunossupressão, diabetes, artrite reumatoide, prótese ou cirurgia articular, infecção de pele ou uso de drogas injetáveis: artrite séptica até prova em contrário → punção antes do antibiótico, no mesmo dia (urgência). Sinais de sepse: antibiótico imediato após hemoculturas. Criança que não apoia o membro e tem febre: urgência pediátrica.",
      S: "Dor e inchaço em ___ (articulação) há ___ horas/dias; início ___ (súbito, pico em < 24 h / progressivo). Calor ___, rubor ___. Consegue apoiar/mover ___.\nFebre ___, calafrios ___. Trauma ___. Crises prévias ___ (gota/pseudogota?). Prótese ou cirurgia nesta articulação ___. Infiltração recente ___.\nDM ___, artrite reumatoide ___, HIV/imunossupressão ___, DRC ___, infecção de pele ___, drogas injetáveis ___. Anticoagulante ___.\nRelação sexual de risco/corrimento ___, lesões de pele (pústulas) ___, dor em tendões ___. Diarreia ou uretrite nas últimas 4 semanas ___. Diuréticos, álcool ___.\nCriança: mancando/não apoia ___, infecção recente ___.",
      O: "___ estado geral.\nPA ___ mmHg | FC ___ bpm | FR ___ irpm | Tax ___ °C | SpO₂ ___% (AA)\nArticulação ___: derrame ___, calor ___, rubor ___, dor à mobilização passiva em todo o arco ___ (artrite) × dor localizada só num ponto/em um movimento ___ (bursite, tendinite, celulite).\nOutras articulações ___. Tenossinovite ___. Pele: pústulas ___, porta de entrada ___, celulite ___. Tofos ___. Uretra/colo ___ (se indicado).",
      A: "Monoartrite (ou oligoartrite) aguda em ___ – hipótese principal ___ (artrite séptica / gota / pseudogota / gonocócica / reativa / hemartrose / periarticular); probabilidade de artrite séptica ___ (baixa / não excluída).",
      P: "- Artrite séptica não excluída: artrocentese ANTES do antibiótico, no mesmo dia (na UBS, se houver técnica e material; senão, urgência/ortopedia). Enviar: cultura (≥ 1 mL em tubo estéril), Gram, leucócitos com diferencial e pesquisa de cristais.\n- Sinais de sepse: hemoculturas (2 pares) e antibiótico imediato – não esperar a punção; SAMU/urgência.\n- Hemograma, PCR (ou VHS), creatinina, ácido úrico (pode ser normal na crise). Nenhum exame de sangue confirma ou exclui infecção; cristais no líquido também não excluem.\n- Gota típica (1ª metatarsofalangeana, pico em < 24 h, crises prévias) sem nenhum sinal de infecção: tratar a crise (modelo de gota) e reavaliar em 48–72 h.\n- Relação de risco + tenossinovite/pústulas/poliartralgia migratória: infecção gonocócica disseminada – coletar (urina 1º jato/swabs, hemocultura) e iniciar o esquema do PCDT IST na urgência; tratar parcerias; testes rápidos de HIV, sífilis, hepatites.\n- Trauma ou anticoagulante com derrame: hemartrose – RNI se varfarina; ortopedia/urgência.\n- Criança que não apoia o membro: ver escore de Kocher; febre ou não apoio = urgência pediátrica no mesmo dia.\n- Poliartralgia (várias articulações) com febre/exantema: ver item Poliartralgia/poliartrite aguda.",
      encaminhar: "Suspeita de artrite séptica, gonocócica disseminada, sepse, prótese articular dolorosa ou criança que não apoia o membro → urgência no mesmo dia (punção antes do antibiótico, salvo sepse). Hemartrose → ortopedia/urgência. Monoartrite sem diagnóstico após a fase aguda ou persistente > 6 semanas → reumatologia (com resultado do líquido sinovial, RX, PCR/VHS).",
      alarme: ["Febre ou calafrios", "Junta muito quente, vermelha e com dor ao menor movimento", "Dor que piora em vez de melhorar em 2 a 3 dias", "Pus na pele, corrimento ou ardência ao urinar junto com a dor na junta", "Criança que para de andar ou não apoia a perna"],
      orient: "## Atenção\n- **Junta inchada, quente e muito dolorida precisa de avaliação no mesmo dia**: pode ser infecção dentro da junta, que estraga a articulação em poucos dias se não for tratada.\n- Se for indicado tirar um pouco do líquido da junta (punção), esse exame é o que mais ajuda a descobrir a causa.\n\n## Cuidados\n- Repouso relativo da junta e gelo envolvido em pano por 15 a 20 minutos, 3 a 4 vezes ao dia.\n- Para dor: dipirona, 1 a 2 comprimidos de 6 em 6 horas; ou, se receitado, ibuprofeno, 1 comprimido de 8 em 8 horas, depois das refeições, por até 5 dias.\n- Não tome antibiótico por conta própria: ele pode atrapalhar o exame do líquido.\n\n## Quando voltar à unidade\n- Em 2 a 3 dias, ou antes se aparecer algum sinal de alarme."
    });
    m.rx = [
      {trilha: "ambos", titulo: "Analgesia (sem suspeita de infecção)", texto: "USO ORAL\n1. Ibuprofeno 600 mg ______ 15 comprimidos\n   Tomar 1 comprimido de 8/8h após refeições por até 5 dias (evitar se suspeita de dengue, DRC, úlcera, anticoagulante).\n   OU\n2. Dipirona 500 mg – 1 a 2 comprimidos de 6/6h se dor.\n\nCUIDADOS\n3. Repouso relativo da articulação e gelo 15–20 minutos, 3–4 vezes ao dia.", dose: "NV"},
      {trilha: "ambos", titulo: "Infecção gonocócica disseminada (PCDT IST 2022) – iniciar na urgência, após coletas", texto: "USO INTRAMUSCULAR OU INTRAVENOSO\n1. Ceftriaxona 1 g – IM ou IV 1 vez ao dia, completando ao menos 7 dias.\n\nUSO ORAL\n2. Azitromicina 500 mg ______ 2 comprimidos\n   Tomar 2 comprimidos (1 g) em dose única.", dose: "F", nota: "PCDT IST 2022, Quadro 31 (exceto meningite e endocardite) [F]. Artrite purulenta: punção/drenagem conforme ortopedia. Tratar parcerias e testar HIV, sífilis e hepatites. REMUME Betim: ceftriaxona 1 g IM e azitromicina 500 mg [F]."}
    ];
    m.sus = {nacional: "RENAME 2024: ibuprofeno, dipirona, prednisona, ceftriaxona, azitromicina (Básico).", betim: "REMUME Betim: ibuprofeno 600 mg, dipirona, prednisona, ceftriaxona 1 g IM e azitromicina 500 mg. Onde puncionar e analisar o líquido sinovial (UPA, ortopedia, laboratório do hospital): não verificado."};
    m.evid = {
      resumo: "Na monoartrite aguda, nenhum achado clínico ou exame de sangue isolado confirma ou exclui artrite séptica; a análise do líquido sinovial decide (Margaretten 2007; SANJO 2023). Leucócitos sinoviais > 50.000/µL têm RV 7,7 e > 100.000/µL RV 28; < 25.000 RV 0,32, sem excluir. Cristais não excluem infecção. Antibiótico após a punção, exceto na sepse. Na criança com quadril irritável, febre, não apoio, VHS ≥ 40 e leucócitos > 12.000 combinados estimam o risco (Kocher 1999, derivação). Gonocócica disseminada: ceftriaxona 1 g/dia ≥ 7 dias + azitromicina (PCDT IST 2022).",
      certeza: "Moderada para a acurácia do líquido sinovial (RS de estudos diagnósticos); recomendações da SANJO majoritariamente B–D (opinião de especialistas para a sequência punção → antibiótico)",
      fontes: ["margaretten2007", "sanjo2023", "kocher1999", "pcdt_ist2022", "gota_ecr", "tsrs_reum2022", "rename", "remume"]
    };
    m.nv = ["Dose do ibuprofeno: conferir bula.", "Onde fazer artrocentese com análise do líquido em Betim (UPA/ortopedia/laboratório).", "Escore de Kocher: validações externas com desempenho menor; não substitui a punção."];
    m.guia = {
      urg: "**Monoartrite quente e dolorosa** com febre, dor a qualquer movimento, imunossupressão, DM, artrite reumatoide, prótese, infecção de pele ou droga injetável: **artrite séptica até prova em contrário** – punção **antes** do antibiótico, no mesmo dia [F]. **Sepse:** hemoculturas e antibiótico imediato, sem esperar a punção [F]. **Criança que não apoia o membro com febre:** urgência pediátrica [C].",
      resumo: "O exame que decide é o **líquido sinovial** (cultura, Gram, leucócitos, cristais) [F]. **Nenhum exame de sangue exclui** infecção e **cristais não excluem** infecção [F]. Leucócitos sinoviais > 50.000/µL aumentam muito a probabilidade (RV 7,7; > 100.000: RV 28); < 25.000 reduzem, sem excluir [F]. Gota típica sem sinal de infecção pode ser tratada e reavaliada em 48–72 h [C]. Várias articulações com febre e exantema: ver **Poliartralgia/poliartrite aguda**.",
      calcs: ["sc:gota2015", "sc:kocher"],
      secoes: [
        {t: "Reconhecer", b: [
          T(["Achado", "Sugere"], [
            ["Dor à mobilização passiva em todo o arco, derrame, calor difuso", "Artrite verdadeira (intra-articular) [C]"],
            ["Dor num ponto, só em um movimento ou à palpação de bursa/tendão; arco passivo preservado", "Periartrite: bursite, tendinite, entesite [C]"],
            ["Eritema que passa além da articulação, porta de entrada, sem derrame", "Celulite – não puncionar através da pele infectada [C]"]
          ], "Conhecimento consolidado [C]."),
          {ul: [
            "Aumentam a probabilidade de artrite séptica: idade avançada, diabetes, artrite reumatoide, cirurgia articular, prótese de quadril ou joelho, infecção de pele e HIV [F].",
            "Só dor articular (85%), história de edema (78%) e febre (57%) aparecem em mais da metade dos casos: **ausência de febre não exclui** [F].",
            "Artrite subaguda ou crônica em quem tem ligação com área endêmica: pensar em tuberculose articular [F]."
          ]},
          {ref: ["margaretten2007", "sanjo2023"]}
        ]},
        {t: "Diferenciais", b: [
          T(["Hipótese", "Pistas"], [
            ["Artrite séptica", "Joelho > quadril > ombro; dor intensa a qualquer movimento; fatores de risco; leucócitos sinoviais em geral > 50.000/µL [F/C]"],
            ["Gota", "1ª MTF, tornozelo, joelho; pico em < 24 h; eritema; crises prévias; diurético, álcool, DRC [C]"],
            ["Pseudogota (pirofosfato de cálcio)", "Idoso; joelho, punho; condrocalcinose no RX; pode vir com febre [C]"],
            ["Gonocócica disseminada", "Adulto jovem sexualmente ativo; poliartralgia migratória que se fixa em 1–2 articulações; tenossinovite; pústulas [F/C]"],
            ["Reativa", "Diarreia ou uretrite 1–4 semanas antes; joelho/tornozelo assimétrico; entesite, conjuntivite [C]"],
            ["Hemartrose", "Trauma, anticoagulante, hemofilia; derrame rápido [C]"],
            ["Bursite/celulite pré-patelar ou olecraniana", "Edema superficial, arco passivo preservado [C]"],
            ["Criança: sinovite transitória do quadril", "3–10 anos, após IVAS, afebril ou febre baixa, apoia com dor; Kocher baixo [C/F]"],
            ["Criança: osteomielite adjacente", "Dor óssea localizada, febre; RX normal no início [C]"]
          ], "Conhecimento consolidado [C]; pistas de risco: Margaretten 2007 [F].")
        ]},
        {t: "Líquido sinovial: o que muda a conduta", b: [
          T(["Resultado", "Interpretação"], [
            ["Leucócitos < 25.000/µL", "Reduz a probabilidade (RV 0,32), mas **não exclui** [F]"],
            ["Leucócitos ≥ 25.000/µL", "RV 2,9 [F]"],
            ["Leucócitos > 50.000/µL", "Sugere séptica (RV 7,7), mas sozinho não basta [F]"],
            ["Leucócitos > 100.000/µL", "RV 28 – tratar como séptica [F]"],
            ["Polimorfonucleares ≥ 90%", "RV 3,4; < 90%: RV 0,34 [F]"],
            ["Cristais de urato ou pirofosfato", "Confirmam artrite por cristais, **sem excluir** infecção concomitante [F]"],
            ["Gram positivo ou cultura positiva", "Artrite séptica [C]"]
          ], "Margaretten 2007 (RS de acurácia) e SANJO 2023, Rec. 4–5 e 9 [F]. Os cortes podem não valer em imunossuprimidos [F]. Mandar ≥ 1 mL em tubo estéril para cultura; se pouco líquido, priorizar cultura e Gram, depois leucócitos e cristais [F].")
        ]},
        {t: "Criança que manca ou não apoia (quadril irritável)", b: [
          {calc: "sc:kocher"},
          {ul: [
            "Kocher: febre referida, não apoiar o membro, VHS ≥ 40 mm/h e leucócitos > 12.000/mm³ – probabilidade de séptica < 0,2% (0), 3% (1), 40% (2), 93% (3) e 99,6% (4) na série original [F].",
            "Estudo retrospectivo de derivação num hospital terciário; em outros serviços o desempenho foi menor [C]. **Não substitui** a avaliação no mesmo dia: febre ou não apoio = urgência pediátrica [C].",
            "Lactente com pseudoparalisia (não mexe o membro, chora ao trocar a fralda) é emergência [C]."
          ]},
          {ref: ["kocher1999"]}
        ]},
        {t: "Decidir", b: [
          {fluxo: [
            {t: "Monoartrite (ou oligoartrite) aguda – artrite verdadeira, não periartrite"},
            {t: "Sinais de sepse (hipotensão, confusão, FR ≥ 22, toxemia)?", ramos: [
              {r: "Sim", n: [{t: "Hemoculturas + antibiótico imediato + SAMU/urgência", k: "stop"}]},
              {r: "Não", n: [{t: "Fatores de risco, febre, prótese ou dor a qualquer movimento?"}]}
            ]},
            {t: "Séptica não excluída", ramos: [
              {r: "Sim", n: [{t: "Punção antes do antibiótico no mesmo dia (UBS se possível; senão urgência/ortopedia)", k: "stop"}]},
              {r: "Não – gota típica", n: [{t: "Tratar a crise e reavaliar em 48–72 h", k: "ok"}]},
              {r: "Não – sem diagnóstico", n: [{t: "Punção eletiva rápida; hemograma, PCR/VHS, creatinina, ácido úrico; RX", k: "warn"}]}
            ]},
            {t: "IST de risco, tenossinovite ou pústulas → gonocócica disseminada (urgência; PCDT IST)", k: "q"},
            {t: "Sem melhora em 48–72 h ou febre surgindo → rever séptica e puncionar", k: "stop"},
            {t: "Persistente > 6 semanas → reumatologia", k: "warn"}
          ], nota: "SANJO 2023 (punção → antibiótico; sepse → antibiótico imediato) [F]; demais passos: conhecimento consolidado [C]. Gota: calculadora ACR/EULAR 2015 [F]."},
          {calc: "sc:gota2015"},
          {ref: ["sanjo2023", "pcdt_ist2022", "tsrs_reum2022", "rename", "remume"]}
        ]},
        {t: "Ver também", b: [{ir: [["poliartrite-aguda", "Poliartralgia/poliartrite aguda"], ["gota", "Crise de gota"], ["cr-gota", "Gota crônica"], ["uretrite", "Uretrite"], ["celulite", "Celulite"], ["febre-crianca", "Febre na criança"], ["sepse", "Sepse"]]}]}
      ]
    };
    (m.mudancas = m.mudancas || []).push(MUD + "item separado da poliartralgia (agora só monoartrite/oligoartrite aguda); acurácia do líquido sinovial (Margaretten 2007), sequência punção → antibiótico da SANJO 2023, escore de Kocher para a criança, infecção gonocócica disseminada pelo PCDT IST 2022 e novo fluxograma.");
  }

  // ───────── 2) Poliartralgia / poliartrite aguda (item novo)
  const p = {
    id: "poliartrite-aguda",
    nome: "Poliartralgia / poliartrite aguda (< 6 semanas)",
    sistema: "Musculoesquelético e neurológico",
    risco: "moderado",
    ciap: "L20 · L88",
    cid: "M13.0 · M25.5",
    tags: "poliartralgia poliartrite artralgia várias articulações dor nas juntas aguda febre exantema chikungunya dengue zika parvovírus rubéola hepatite HIV febre reumática artrite reativa gonocócica artrite reumatoide lúpus",
    alerta: "Febre com sinais de alarme de dengue, púrpura ou petéquias, prostração importante, dispneia, dor torácica ou sopro novo (cardite), rigidez de nuca, ou uma articulação muito quente no meio do quadro (séptica/gonocócica): avaliação no mesmo dia ou urgência.",
    S: "Dor em várias articulações há ___ dias: ___ (quais; simétrica? pequenas articulações de mãos/pés? grandes?). Padrão ___ (todas juntas / migratória / aditiva). Edema ___. Rigidez matinal ___ min.\nFebre ___ (início súbito?), exantema ___ (dia do início ___, prurido ___), conjuntivite ___, cefaleia ___, mialgia ___.\nCasos de dengue/chikungunya/Zika na casa ou no bairro ___; viagem ___.\nDor de garganta 2–3 semanas antes ___ (criança/adolescente). Diarreia ou uretrite 1–4 semanas antes ___. Relação de risco ___, lesões de pele (pústulas) ___.\nContato com criança com 'bochecha esbofeteada' ___. Vacina recente ___. Medicamento novo ___.\nPsoríase ___, aftas, fotossensibilidade, queda de cabelo ___. Gestação ___.",
    O: "___ estado geral. Hidratação ___.\nPA ___ mmHg | FC ___ bpm | FR ___ irpm | Tax ___ °C | SpO₂ ___% (AA)\nProva do laço ___ (se suspeita de dengue).\nArticulações com sinovite (edema, calor, dor à mobilização) ___; só dor sem sinovite ___. Teste do aperto de MCF/MTF ___.\nTenossinovite ___. Pele: exantema ___, petéquias ___, pústulas ___. Ausculta cardíaca ___ (sopro?). Linfonodos ___. Baço/fígado ___.",
    A: "Poliartralgia / poliartrite aguda (< 6 semanas), hipótese principal ___ (arbovirose / outra viral / reativa / febre reumática / gonocócica / início de doença reumática inflamatória).",
    P: "- Febre + artralgia em época/área de transmissão: tratar como arbovirose suspeita – estadiar dengue, notificar, colher conforme o fluxo de Betim; sem AINE e sem corticoide na fase aguda (ver itens Chikungunya e Dengue).\n- Analgesia com dipirona e/ou paracetamol em horário fixo.\n- Exames dirigidos (só os que mudam a conduta): hemograma, PCR ou VHS, creatinina, TGO/TGP; testes rápidos de HIV, sífilis e hepatites B e C se houver exposição de risco ou quadro sem explicação; ASLO e ecocardiograma se suspeita de febre reumática.\n- Não pedir FR, anti-CCP ou FAN na 1ª semana de quadro viral típico; pedir se houver sinovite persistente ou pequenas articulações acometidas (com RX de mãos e pés).\n- Suspeita de febre reumática (5–15 anos, faringite prévia, poliartrite migratória de grandes articulações, sopro): avaliação pediátrica/cardiológica com prioridade.\n- Pústulas, tenossinovite e IST de risco: gonocócica disseminada (ver Monoartrite aguda).\n- Reavaliar em 1–2 semanas; sinovite > 6 semanas ou suspeita de artrite reumatoide → reumatologia.",
    rx: [
      {trilha: "ambos", titulo: "Analgesia (sem AINE até afastar dengue)", texto: "USO ORAL\n1. Dipirona 500 mg ______ 1 caixa\n   Tomar 2 comprimidos (1 g) de 6/6h, em horário fixo.\n   E/OU\n2. Paracetamol 500 mg ______ 1 caixa\n   Tomar 2 comprimidos (1 g) de 6/6h, intercalando com a dipirona a cada 3 h.\n\nCUIDADOS\n3. Hidratação oral; compressas frias nas articulações; repouso relativo.", dose: "F", nota: "Doses do fluxograma SES-MG da dor na chikungunya (adulto) [F]; para outras causas virais é extrapolação. AINE e corticoide são proibidos na fase aguda da chikungunya e desaconselhados enquanto dengue não for afastada (MS 2024) [F]. Fase pós-aguda da chikungunya: ver o item Chikungunya."}
    ],
    orient: "## O que pode ser\n- Dor em várias juntas que começou há poucos dias quase sempre vem de **infecção por vírus** (como chikungunya, dengue, Zika ou outros) e melhora com o tempo.\n- Em alguns casos é preciso investigar outras causas – por isso o retorno é importante.\n\n## Cuidados\n- Beba bastante líquido.\n- Para dor: dipirona e/ou paracetamol nos horários da receita.\n- **Não tome anti-inflamatório (ibuprofeno, diclofenaco, nimesulida) nem corticoide** por conta própria enquanto a dengue não for afastada.\n- Compressas frias nas juntas e repouso relativo ajudam.\n\n## Quando voltar à unidade\n- No retorno marcado (1 a 2 semanas), ou antes se aparecer sinal de alarme.\n- Se as juntas continuarem inchadas depois de 6 semanas.",
    alarme: ["Dor forte na barriga, vômitos que não param, sangramento ou manchas roxas na pele", "Tontura ao levantar, desmaio ou muita fraqueza", "Falta de ar, dor no peito ou coração disparado", "Uma junta que fica muito quente, vermelha e com dor ao menor movimento", "Pus na pele ou corrimento junto com a dor nas juntas"],
    encaminhar: "Sinais de alarme de dengue → conforme estadiamento (grupos B–D). Suspeita de febre reumática (cardite, coreia, poliartrite migratória com faringite prévia) → pediatria/cardiologia com prioridade (urgência se cardite com insuficiência cardíaca). Gonocócica disseminada ou monoartrite muito quente → urgência. Suspeita de artrite reumatoide (sinovite de pequenas articulações de mãos ou pés, ou ≥ 3 articulações com rigidez matinal > 30 min ou teste do aperto positivo) → reumatologia (TelessaúdeRS, Protocolo 1), com FR, PCR/VHS e RX; artrite reumatoide de início recente tem prioridade. Sinovite > 6 semanas sem diagnóstico → reumatologia.",
    sus: {nacional: "RENAME 2024: dipirona, paracetamol (Básico). Sorologia/RT-PCR para arbovírus pela rede de vigilância.", betim: "REMUME Betim: dipirona e paracetamol. Arboviroses: notificar todo caso suspeito; RT-PCR do 1º ao 5º dia e sorologia IgM do 6º ao 45º dia coletados na unidade (NT SMS Betim 11/02/2025) [F]. Sorologia para parvovírus B19 e ASLO na rede municipal: não verificado."},
    evid: {
      resumo: "Poliartralgia aguda febril no Brasil é, na maioria das vezes, arbovirose: na chikungunya a poliartralgia aparece em > 90%, simétrica, com edema e tenossinovite; AINE e corticoide são proibidos na fase aguda (MS 2024) [F]. Outras causas a lembrar: parvovírus B19, rubéola, hepatites B e C, HIV agudo, reativa, gonocócica disseminada, febre reumática (critérios de Jones revisados pela AHA em 2015, com regras próprias para populações de risco moderado/alto) e início de artrite reumatoide ou lúpus [C]. A TelessaúdeRS define a suspeita de artrite reumatoide para encaminhamento pela sinovite de pequenas articulações ou de ≥ 3 articulações com rigidez matinal > 30 min ou teste do aperto positivo [F].",
      certeza: "Baixa a moderada (estimada) – diagnóstico diferencial baseado em séries e consensos; conduta nas arboviroses é recomendação normativa do MS",
      fontes: ["ms_arbo_aps2024", "gvs2_arbo", "betim_nt_arbo2025", "ses_chik", "tsrs_reum2022", "jones2015", "pcdt_ist2022", "rename", "remume"]
    },
    nv: ["Critérios de Jones por população (AHA 2015) citados de memória: conferir no texto integral.", "Parvovírus B19 IgM e ASLO na rede de Betim.", "Doses de analgesia fora da chikungunya: extrapolação do fluxograma SES-MG."],
    mudancas: ["Entrada nova (v76, 28/10/2026): separada do antigo item 'Monoartrite / artralgia aguda' a pedido da usuária."],
    guia: {
      urg: "Febre com **sinais de alarme de dengue**, petéquias/púrpura, prostração, **sopro novo, dispneia ou dor torácica** (cardite), rigidez de nuca ou **uma articulação muito quente** no meio do quadro: avaliação no mesmo dia/urgência [C/F]. **Sem AINE e sem corticoide** enquanto arbovirose não for afastada [F].",
      resumo: "Em Minas, **poliartralgia aguda com febre** é arbovirose até prova em contrário (chikungunya: > 90% com poliartralgia simétrica, edema e tenossinovite) [F]. Classifique pela **duração** (< 6 semanas = aguda), pelo **padrão** (simétrica, migratória, aditiva) e pela presença de **sinovite objetiva** [C]. Peça só exames que mudam a conduta; **FR/anti-CCP/FAN não entram na 1ª semana** de quadro viral típico [I]. Sinovite de pequenas articulações ou > 6 semanas → pensar em artrite reumatoide [F].",
      secoes: [
        {t: "Classificar", b: [
          T(["Padrão", "Pensar em"], [
            ["Simétrica, pequenas e grandes articulações, febre alta súbita, exantema", "Chikungunya (e outras arboviroses) [F]"],
            ["Migratória (melhora numa e vai para outra)", "Febre reumática, gonocócica disseminada [C]"],
            ["Aditiva (vai somando articulações), pequenas articulações, rigidez matinal longa", "Início de artrite reumatoide, lúpus, artrite psoriásica [C]"],
            ["Oligoartrite assimétrica de membros inferiores com entesite", "Reativa, espondiloartrite [C]"],
            ["Só dor, sem sinovite, com mialgia difusa", "Viral inespecífica, polimialgia (> 50 anos), fibromialgia (crônica) [C]"]
          ], "Conhecimento consolidado [C]; chikungunya: MS 2024 [F]."),
          {ref: ["ms_arbo_aps2024", "gvs2_arbo"]}
        ]},
        {t: "Diferenciais", b: [
          T(["Hipótese", "Pistas"], [
            ["Chikungunya", "Febre > 38,5 °C súbita + artralgia/artrite intensa, área de transmissão; exantema do 2º ao 5º dia, também palmoplantar [F]"],
            ["Dengue", "Febre, mialgia e cefaleia retro-orbital > artralgia; plaquetopenia; sinais de alarme [F]"],
            ["Zika", "Exantema pruriginoso precoce, febre baixa, conjuntivite não purulenta, edema periarticular [F]"],
            ["Parvovírus B19", "Adulto (mais mulheres) em contato com criança com eritema infeccioso; artrite simétrica de mãos que imita AR e regride em semanas [C]"],
            ["Rubéola (ou vacina)", "Exantema, linfonodos retroauriculares; artralgia em mulheres [C]"],
            ["Hepatite B ou C, HIV agudo", "Exposição de risco; pródromo com artralgia (hepatite B), exantema e linfonodos (HIV) [C]"],
            ["Febre reumática", "5–15 anos, faringite 2–3 semanas antes, poliartrite migratória de grandes articulações, resposta rápida ao AINE, sopro, coreia, eritema marginado [C]"],
            ["Artrite reativa", "Diarreia ou uretrite 1–4 semanas antes; joelho/tornozelo; conjuntivite, entesite [C]"],
            ["Gonocócica disseminada", "Poliartralgia migratória + tenossinovite + pústulas; febre [F/C]"],
            ["Início de AR, lúpus, artrite psoriásica", "Sinovite que persiste; pequenas articulações; rigidez > 30 min; fotossensibilidade, aftas, psoríase [F/C]"],
            ["Doença do soro / reação a medicamento", "Antibiótico ou vacina 1–2 semanas antes, urticária, febre [C]"]
          ], "Arboviroses: MS 2024 e GVS 2024 [F]; gonocócica: PCDT IST 2022 [F]; demais: conhecimento consolidado [C].")
        ]},
        {t: "Exames que mudam a conduta", b: [
          T(["Exame", "Quando", "O que decide"], [
            ["Hemograma, prova do laço", "Febre na área de transmissão", "Estadiamento da dengue (grupos A–D) [F]"],
            ["RT-PCR (1º–5º dia) ou IgM (6º–45º dia) para arbovírus", "Todo caso suspeito, conforme o fluxo de Betim", "Confirmação e vigilância [F]"],
            ["PCR ou VHS, creatinina, TGO/TGP", "Quadro não típico de arbovirose ou > 2 semanas", "Inflamação sistêmica; segurança de AINE/corticoide na fase pós-aguda [C]"],
            ["Testes rápidos HIV, sífilis, hepatites B e C", "Exposição de risco ou quadro sem explicação", "Diagnóstico e vinculação [C]"],
            ["ASLO e ecocardiograma", "Suspeita de febre reumática", "Critérios de Jones; cardite subclínica [C]"],
            ["FR, anti-CCP, RX de mãos e pés", "Sinovite de pequenas articulações ou > 6 semanas", "Encaminhamento à reumatologia (TelessaúdeRS) [F]"],
            ["FAN", "Sinais sistêmicos de lúpus", "Não pedir só por artralgia: muitos falso-positivos [C]"]
          ], "Fontes nas linhas; conhecimento consolidado [C] onde indicado.")
        ]},
        {t: "Decidir", b: [
          {fluxo: [
            {t: "Dor em várias articulações há < 6 semanas"},
            {t: "Sinais de alarme (dengue, cardite, púrpura, prostração) ou uma articulação muito quente?", ramos: [
              {r: "Sim", n: [{t: "Urgência / estadiamento da dengue; monoartrite quente → item Monoartrite", k: "stop"}]},
              {r: "Não", n: [{t: "Febre + área de transmissão?"}]}
            ]},
            {t: "Arbovirose provável", ramos: [
              {r: "Sim", n: [{t: "Notificar, coletar pelo fluxo de Betim, dipirona/paracetamol, sem AINE/corticoide; seguir Chikungunya/Dengue", k: "ok"}]},
              {r: "Não", n: [{t: "Procurar pistas: faringite prévia, diarreia/uretrite, IST, contato com criança, exposição de risco; exames dirigidos", k: "warn"}]}
            ]},
            {t: "Reavaliar em 1–2 semanas", k: "q"},
            {t: "Sinovite de pequenas articulações, ≥ 3 articulações com rigidez > 30 min/aperto positivo ou > 6 semanas → reumatologia (FR, PCR/VHS, RX)", k: "warn"}
          ], nota: "Arboviroses: MS 2024 e NT Betim 2025 [F]; suspeita de AR: TelessaúdeRS Reumatologia 2022, Quadro 2 [F]; demais passos [C]."},
          {ref: ["ms_arbo_aps2024", "betim_nt_arbo2025", "ses_chik", "tsrs_reum2022", "jones2015"]}
        ]},
        {t: "Ver também", b: [{ir: [["artrite-aguda", "Monoartrite aguda"], ["chikungunya", "Chikungunya"], ["dengue-a", "Dengue"], ["zika", "Zika"], ["exantema", "Exantema agudo"], ["cr-artralgia", "Dor articular crônica"], ["cr-ar", "Artrite reumatoide"], ["cr-les", "Lúpus"]]}]}
      ]
    }
  };
  const i = CONDICOES.findIndex(x => x.id === "artrite-aguda");
  if (!get(p.id)) CONDICOES.splice(i >= 0 ? i + 1 : CONDICOES.length, 0, p);

  // ───────── 3) Links nos itens relacionados
  const LINK = (id, par) => {
    const c = get(id); if (!c || !c.guia) return;
    c.guia = JSON.parse(JSON.stringify(c.guia));
    const s = c.guia.secoes || (c.guia.secoes = []);
    const vt = s.find(x => x.t === "Ver também");
    if (vt) { const b = vt.b.find(x => x.ir); if (b && !b.ir.some(r => r[0] === par[0])) b.ir.push(par); }
    else s.push({t: "Ver também", b: [{ir: [par]}]});
  };
  LINK("chikungunya", ["poliartrite-aguda", "Poliartralgia/poliartrite aguda"]);
  LINK("cr-artralgia", ["poliartrite-aguda", "Poliartralgia/poliartrite aguda"]);
  LINK("exantema", ["poliartrite-aguda", "Poliartralgia/poliartrite aguda"]);
  LINK("gota", ["artrite-aguda", "Monoartrite aguda (séptica?)"]);
})();
