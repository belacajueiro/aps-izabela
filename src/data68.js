// ───────────── data68.js – v55: Guia Clínico – lote 5 (Pele, parte 2: 11 itens sem guia).
// Conferido em 25/10/2026: TelessaúdeRS Dermatologia 2023 (Protocolos 1 e 11; Quadros 1, 2, 13, 17, 28 e 29), CAB 28 vol. II (herpes simples,
// doenças exantemáticas, anafilaxia), GVS 6ª ed. rev. 2024 vol. 3 (acidentes por himenópteros, Quadro 1), Portaria GM/MS 11.211/2026 (Anexo I),
// REMUME Betim (arquivo do Projeto).
Object.assign(FONTES, {
  gvs3_himenop: {s: "GVS 6ª ed. (2024) vol. 3 – acidentes por himenópteros", t: "Ministério da Saúde. Guia de Vigilância em Saúde, 6ª ed. rev., 2024, vol. 3 – Acidente por himenópteros (abelhas, vespas e formigas): reação tóxica local (dor, eritema, edema por horas); reação tóxica sistêmica por múltiplas picadas (em geral > 100 em adultos e algumas dezenas em crianças) com hemólise, rabdomiólise e injúria renal; síndrome de envenenamento em geral com > 500 picadas; reação alérgica local extensa (edema por até alguns dias); Quadro 1 – graus I a IV das reações alérgicas sistêmicas (III e IV com risco de vida); após reação só local, risco de reação sistêmica grave em nova picada < 10% e de anafilaxia grave < 3%; tratamento: gelo, analgésico, anti-histamínico; antibiótico só se infecção; anafilaxia: adrenalina 1 mg/mL 0,01 mg/kg IM na coxa (máx. 0,5 mg adulto, 0,3 mg criança), repetir a cada 5–15 min; não há soro antiapílico disponível (em fase de testes) (manual MS).", f: "F", url: "https://bvsms.saude.gov.br/bvs/publicacoes/guia_vigilancia_saude_6edrev_v3.pdf"}
});

const FOTO_PELE3 = {
  seborreica: ["Dermatite seborreica no couro cabeludo: placas eritematosas com descamação fina", "Rusty.t.miller · Wikimedia Commons · CC BY 3.0"],
  "larva-migrans": ["Larva migrans cutânea: trajeto serpiginoso elevado no dorso do pé", "CDC (cortesia Vince Conte, MD) · Wikimedia Commons · domínio público"],
  tungiase: ["Tungíase maciça nos dedos dos pés, com lesões escurecidas (campanha no Quênia)", "R. Schuster · Wikimedia Commons · CC BY-SA 3.0"],
  verruga: ["Verrugas vulgares: pápulas ásperas e queratósicas que interrompem as linhas da pele", "Abbassyma · Wikimedia Commons · domínio público"],
  acne: ["Acne inflamatória: pápulas, pústulas e nódulos na face", "Sedef94 · Wikimedia Commons · CC BY-SA 4.0"],
  "herpes-labial": ["Herpes labial: vesículas agrupadas no lábio inferior", "Metju12 · Wikimedia Commons · domínio público"],
  "unha-encravada": ["Unha encravada no hálux: inflamação e tecido de granulação nas bordas laterais", "Julan Shirwod Nueva · Wikimedia Commons · CC BY-SA 4.0"]
};

(() => {
  const get = id => CONDICOES.find(x => x.id === id);
  const G = (id, guia, o = {}) => {
    const c = get(id); if (!c) return;
    c.guia = guia;
    if (c.evid && o.fontes) c.evid.fontes = [...new Set([...(c.evid.fontes || []), ...o.fontes])];
    (c.mudancas = c.mudancas || []).push("v55 (25/10/2026): Guia Clínico novo – " + (o.mud || "reconhecer, diferenciais, fluxograma e fontes") + ".");
    if (o.nv) c.nv = [...(c.nv || []), ...o.nv];
  };
  const P3 = (typeof FOTO_PELE3 !== "undefined") ? FOTO_PELE3 : {};
  const F1 = (...ks) => (typeof FIG === "function" && typeof FOTO !== "undefined") ? ks.filter(k => FOTO[k]).map(k => FIG(k)) : [];
  const F3 = (...ks) => ks.filter(k => P3[k]).map(k => ({fig: {foto: true, src: "img/pele-" + k + ".webp", leg: P3[k][0], alt: P3[k][0], fonte: P3[k][1]}}));

  // ── 1. Dermatite seborreica
  G("seborreica", {
    resumo: "Descamação oleosa e amarelada sobre base eritematosa em **couro cabeludo, sobrancelhas, sulcos nasogenianos, atrás das orelhas, centro do tórax e dobras**, com piora no frio e no estresse [C]. Crônica e recorrente: tratar a crise com **antifúngico** (± corticoide de baixa potência na face) e manter com antifúngico **1–2×/semana** [F]. Quadro **súbito e extenso** em adulto jovem: testar **HIV** [C].",
    secoes: [
      {t: "Reconhecer", b: [
        {ul: [
          "Lactente (crosta láctea): escamas aderentes no couro cabeludo nos primeiros meses, sem prurido, autolimitada [C].",
          "Adulto: caspa com eritema, blefarite, placas na face e no tronco; mais grave na doença de Parkinson e no HIV [C].",
          "Pouco prurido; sem vesículas [C]."
        ]},
        {det: {t: "Fisiopatologia", b: ["Resposta inflamatória à levedura Malassezia, comensal das áreas ricas em glândulas sebáceas. Não é infecção nem falta de higiene; por isso volta quando o antifúngico é suspenso, e a manutenção intermitente é parte do tratamento [C]."]}},
        ...F3("seborreica")
      ]},
      {t: "Diferenciais", b: [
        {tab: {h: ["Hipótese", "O que separa"], r: [
          ["Psoríase", "Placas espessas, escama prateada, cotovelos, joelhos, unhas; pode coexistir (sebopsoríase) [C]"],
          ["Rosácea", "Eritema centrofacial, telangiectasias, pápulas, sem escamas oleosas [C]"],
          ["Dermatite atópica", "Prurido intenso, flexuras, atopia [C]"],
          ["Tinea capitis (criança)", "Placas com queda de cabelo, cotos, linfonodos [C]"],
          ["Lúpus cutâneo", "Eritema malar que **poupa** o sulco nasogeniano, fotossensível [C]"],
          ["Dermatite de contato (tintura, xampu)", "Prurido, limites do contato [C]"]
        ]}}
      ]},
      {t: "Tratar", b: [
        {tab: {h: ["Local", "Crise (Quadro 13)", "Manutenção"], r: [
          ["Couro cabeludo", "Cetoconazol 2% xampu, agir 3–5 min, 2–5×/semana por 2–4 semanas; casos graves: + corticoide em solução (betametasona ou clobetasol) 1–2×/dia por 2–4 semanas [F]", "Xampu 1–2×/semana [F]"],
          ["Face e corpo", "Cetoconazol ou miconazol 2% creme 2×/dia até 4 semanas e/ou corticoide de baixa potência na face e dobras (média nas demais áreas), pelo menor tempo possível [F]", "Xampu de cetoconazol 1–2×/semana nas áreas acometidas [F]"]
        ]}, nota: "TelessaúdeRS Dermatologia 2023, Quadro 13 [F]. REMUME: cetoconazol 2% creme e dexametasona 0,1% creme (baixa potência); o xampu de cetoconazol está na RENAME, mas não na REMUME [F]."},
        {ul: ["Encaminhar: grave/extensa com prejuízo funcional (DLQI > 10) ou refratária ao tratamento otimizado (Protocolo 5) [F]."]},
        {ref: ["tsrs_derm2023", "malassezia", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["tsrs_derm2023"]});

  // ── 2. Pitiríase versicolor
  G("pitiriase-versicolor", {
    resumo: "Manchas **hipo ou hipercrômicas** com **descamação fina** (que aparece ao esticar a pele – sinal de Zileri) no tronco, pescoço e braços de adolescentes e adultos, piores no calor [C]. Tópico na doença localizada; **oral** se extensa, recorrente ou refratária [F]. Avisar que **a cor demora meses** para voltar mesmo depois da cura [F]. Mancha com **alteração de sensibilidade** = pensar em hanseníase [C].",
    secoes: [
      {t: "Reconhecer e diferenciar", b: [
        {tab: {h: ["Hipótese", "O que separa"], r: [
          ["Pitiríase versicolor", "Descamação furfurácea, confluência no tronco superior, fluorescência amarelo-ouro à luz de Wood [C]"],
          ["Vitiligo", "Acromia (branco como giz), sem escamas, bordas nítidas, mãos, face e periorificial [C]"],
          ["Hanseníase", "Mancha hipocrômica com **diminuição da sensibilidade** térmica, dolorosa ou tátil; nervos espessados [C]"],
          ["Pitiríase alba", "Criança atópica, face e braços, bordas imprecisas [C]"],
          ["Hipocromia pós-inflamatória", "Local de lesão prévia [C]"],
          ["Pitiríase rósea", "Medalhão inicial, lesões ovais seguindo as linhas de clivagem, autolimitada [C]"]
        ]}},
        ...F1("pitiriase-versicolor", "vitiligo", "hanseniase-manchas")
      ]},
      {t: "Decidir e tratar", b: [
        {fluxo: [
          {t: "Manchas descamativas no tronco"},
          {t: "Sensibilidade diminuída na mancha?", ramos: [
            {r: "Sim", n: [{t: "Investigar hanseníase", k: "stop"}]},
            {r: "Não", n: [{t: "Extensão?"}]}
          ]},
          {t: "Extensão", ramos: [
            {r: "Localizada", n: [{t: "Azol tópico 1–2×/dia por 1–4 semanas (ou xampu de cetoconazol no corpo)", k: "ok"}]},
            {r: "Extensa, recorrente ou refratária", n: [{t: "Fluconazol 300 mg/semana 2–4 semanas ou itraconazol 200 mg/dia 5–7 dias", k: "warn"}]}
          ]},
          {t: "Recorrente: xampu de cetoconazol no corpo, 10 min, 1×/mês nos meses quentes", k: "ok"}
        ], nota: "TelessaúdeRS Dermatologia 2023, Quadro 17 [F]. Cetoconazol oral: evitar [F]. REMUME: cetoconazol creme, fluconazol 150 mg e itraconazol 100 mg [F]."},
        {ir: [["hanseniase", "Hanseníase"], ["pele-vitiligo", "Vitiligo"], ["tinea", "Dermatofitose"]]},
        {ref: ["tsrs_derm2023", "malassezia", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["tsrs_derm2023"]});

  // ── 3. Larva migrans
  G("larva-migrans", {
    resumo: "**Trajeto serpiginoso, elevado e muito pruriginoso** que avança alguns milímetros a centímetros por dia, em pés, nádegas ou mãos, após contato com **areia ou solo com fezes de cães e gatos** [C]. Diagnóstico clínico. **Ivermectina dose única** ou **albendazol por 3 dias** [C]. Autolimitada em semanas a meses, mas o tratamento encurta o prurido e o risco de infecção secundária [C].",
    secoes: [
      {t: "Reconhecer e diferenciar", b: [
        {det: {t: "Fisiopatologia", b: ["Larvas de ancilóstomos de cães e gatos (Ancylostoma braziliense, A. caninum) penetram a pele, mas o ser humano é hospedeiro acidental: a larva não consegue atravessar a membrana basal e migra na epiderme até morrer. O trajeto é a própria larva; o prurido é a reação inflamatória [C]."]}},
        {tab: {h: ["Hipótese", "O que separa"], r: [
          ["Larva currens (estrongiloidíase)", "Trajeto urticariforme que avança **muito rápido** (cm por hora), perianal, nádegas e tronco; risco de **hiperinfecção** em imunossuprimido e com corticoide [C]"],
          ["Tinea", "Anel com borda descamativa, crescimento lento, sem trajeto linear [C]"],
          ["Escabiose", "Sulcos curtos (~1 cm), punhos e interdigitais, contactantes [C]"],
          ["Fitofotodermatose / dermatite de contato linear", "Linhas de queimadura ou eczema após limão/planta e sol, sem progressão [C]"],
          ["Miíase migratória", "Rara; nódulo que se desloca [C]"]
        ]}},
        ...F3("larva-migrans")
      ]},
      {t: "Decidir e tratar", b: [
        {fluxo: [
          {t: "Trajeto serpiginoso pruriginoso após contato com areia/solo"},
          {t: "Gestante, lactante ou < 15 kg?", ramos: [
            {r: "Sim", n: [{t: "Tiabendazol tópico (manipulado) ou adiar; evitar ivermectina e albendazol", k: "warn"}]},
            {r: "Não", n: [{t: "Ivermectina 200 mcg/kg dose única ou albendazol 400 mg/dia por 3 dias (REMUME)", k: "ok"}]}
          ]},
          {t: "Anti-histamínico para o prurido; tratar infecção secundária se houver", k: "ok"},
          {t: "Prevenção: calçado na areia e no solo, cobrir caixas de areia, vermifugar cães e gatos", k: "ok"}
        ], nota: "Revisões e CDC [C]; ivermectina e albendazol na REMUME [F]."},
        {ref: ["ectoparasitoses", "rename", "remume"]}
      ]}
    ]
  });

  // ── 4. Tungíase
  G("tungiase", {
    resumo: "**Pápula esbranquiçada com ponto escuro central** (o abdome da pulga Tunga penetrans) nos pés – ao redor das unhas, calcanhares e plantas –, com dor e prurido [C]. **Retirar a pulga inteira** com agulha estéril, sem romper, e fazer antissepsia [C]. Lesão puntiforme = **ferimento de alto risco para tétano** [F]. A infestação maciça é marcador de pobreza e moradia com chão de terra: abordar a casa e os animais [C].",
    secoes: [
      {t: "Reconhecer", b: [
        {ul: [
          "Evolução: ponto vermelho → nódulo branco com centro negro → crosta escura quando a pulga morre (em cerca de 4–6 semanas) [C].",
          "Complicações: infecção bacteriana, linfangite, tétano, deformidade e perda de unhas, dificuldade de andar nas infestações maciças [C].",
          "Reservatórios: porcos, cães, gatos e ratos; solo arenoso e seco [C]."
        ]},
        {det: {t: "Fisiopatologia", b: ["A fêmea fecundada penetra a pele, fica com o abdome hipertrofiado cheio de ovos (até ~1 cm) e respira e elimina ovos pelo orifício central. Romper a pulga na retirada deixa restos que inflamam e infectam [C]."]}},
        ...F3("tungiase")
      ]},
      {t: "Decidir e tratar", b: [
        {fluxo: [
          {t: "Nódulo branco com ponto negro nos pés"},
          {t: "Infestação maciça, celulite ou paciente com DM/DAP?", ramos: [
            {r: "Sim", n: [{t: "Retiradas seriadas na UBS, antibiótico se celulite; dimeticona tópica (compra) para matar as pulgas antes", k: "warn"}]},
            {r: "Não", n: [{t: "Retirar com agulha estéril (ampliar o orifício e enuclear inteira); antissepsia", k: "ok"}]}
          ]},
          {t: "Tétano pelo Quadro 4 do GVS (puntiforme = alto risco)", k: "ok"},
          {t: "Casa: calçados, piso cimentado, tratar animais; examinar os outros moradores", k: "ok"}
        ], nota: "Revisões de Heukelbach e Feldmeier [C]; tétano: GVS 2024 [F]."},
        {ir: [["ferida", "Profilaxia do tétano"]]},
        {ref: ["ectoparasitoses", "gvs1_tetano"]}
      ]}
    ]
  }, {fontes: ["gvs1_tetano"]});

  // ── 5. Miíase
  G("miiase", {
    urg: "Miíase em **nariz, orelha, olho, boca ou genitais**, em ferida extensa ou em pessoa acamada, com demência ou deficiência: encaminhar (risco de destruição tecidual) e avaliar **negligência de cuidado** [C].",
    resumo: "**Berne (miíase furunculoide)**: nódulo inflamatório com **orifício central** que drena secreção serosa, com sensação de ferroada ou movimento – larva da Dermatobia hominis [C]. Diferente da **bicheira** (miíase de ferida, dezenas de larvas). Tratamento: **ocluir o orifício** (vaselina ou esparadrapo) para a larva subir e **retirá-la inteira**, ou extrair sob anestesia local [C]. Tétano conforme o GVS [F].",
    secoes: [
      {t: "Reconhecer e diferenciar", b: [
        {tab: {h: ["Tipo", "Como é"], r: [
          ["Furunculoide (berne)", "Um ou poucos nódulos com poro central, em áreas expostas (couro cabeludo, braços, pernas) [C]"],
          ["De ferida (bicheira)", "Larvas visíveis em úlcera, ferida ou cavidade; odor; mosca-varejeira (Cochliomyia) [C]"],
          ["Cavitária", "Nariz, seios da face, orelha, olho – urgência [C]"]
        ]}},
        {tab: {h: ["Hipótese", "O que separa"], r: [
          ["Furúnculo", "Ponto de pus, sem orifício respiratório com bolhas ao aplicar água/vaselina [C]"],
          ["Cisto epidérmico inflamado", "Poro com queratina, nódulo antigo [C]"],
          ["Tungíase", "Pés, ponto negro, pápula branca [C]"],
          ["Corpo estranho", "História de penetração [C]"]
        ]}},
        {det: {t: "Biologia", b: ["A mosca Dermatobia captura um mosquito e deposita ovos nele; quando o mosquito pica, as larvas entram na pele e crescem por 5–10 semanas, respirando pelo orifício. Bloquear o orifício força a larva a subir [C]."]}},
        ...F3("miiase")
      ]},
      {t: "Decidir e tratar", b: [
        {fluxo: [
          {t: "Nódulo com orifício central e secreção"},
          {t: "Cavidade, ferida extensa ou pessoa vulnerável?", ramos: [
            {r: "Sim", n: [{t: "Encaminhar; avaliar cuidado/negligência", k: "stop"}]},
            {r: "Não", n: [{t: "Ocluir com vaselina ou esparadrapo por 3–24 h e retirar com pinça, por pressão lateral"}]}
          ]},
          {t: "Não saiu?", ramos: [
            {r: "Sim", n: [{t: "Lidocaína 2% e pequena incisão para extrair inteira", k: "warn"}]},
            {r: "Saiu inteira", n: [{t: "Lavar 2×/dia; antibiótico só se infecção", k: "ok"}]}
          ]},
          {t: "Tétano pelo Quadro 4 do GVS", k: "ok"}
        ], nota: "Séries de casos [C]; lidocaína 2% na REMUME [F]; tétano: GVS 2024 [F]."},
        {ref: ["ectoparasitoses", "gvs1_tetano", "remume"]}
      ]}
    ]
  }, {fontes: ["gvs1_tetano"]});

  // ── 6. Picada de inseto
  G("picada-inseto", {
    urg: "Após picada: urticária generalizada com **dispneia, chiado, estridor, rouquidão, hipotensão, síncope, vômitos** (graus III–IV) = **anafilaxia** – adrenalina 1 mg/mL **0,01 mg/kg IM** na coxa (máx. 0,5 mg adulto, 0,3 mg criança), repetir em 5–15 min se preciso, e urgência [F]. **Muitas picadas de abelha** (dezenas em criança, > 100 em adulto) = risco de **envenenamento** (hemólise, rabdomiólise, injúria renal): urgência mesmo sem alergia [F]. Picada na boca ou garganta: observação [F].",
    resumo: "A maioria é **reação local** (dor, vermelhidão, edema por horas) e só precisa de gelo, analgésico e anti-histamínico [F]. **Reação local extensa** (edema grande que dura alguns dias) **não é infecção** nem anafilaxia; o risco de reação sistêmica grave numa próxima picada é **< 10%** [F]. Em criança com pápulas pruriginosas recorrentes nas áreas expostas, pensar em **estrófulo** [C]. Retirar o ferrão raspando [C].",
    secoes: [
      {t: "Classificar", b: [
        {tab: {h: ["Reação", "Como é", "Conduta"], r: [
          ["Local", "Dor, eritema, edema por horas [F]", "Gelo, analgésico, anti-histamínico [F]"],
          ["Local extensa", "Edema contíguo grande, até alguns dias; às vezes bolha [F]", "Anti-histamínico, corticoide tópico; corticoide oral curto se muito extensa [C]"],
          ["Sistêmica grau I", "Urticária generalizada, prurido, mal-estar, ansiedade [F]", "Anti-histamínico, observar; orientar risco [F/C]"],
          ["Sistêmica grau II", "+ angioedema (sozinho define grau II), broncoconstrição leve, náuseas, vômitos, dor abdominal, tontura [F]", "Considerar adrenalina; observação prolongada [C]"],
          ["Sistêmica grau III–IV", "Dispneia, sibilos, estridor, disfagia, rouquidão, confusão; queda da PA, colapso, perda de consciência, cianose [F]", "Adrenalina IM e urgência [F]"],
          ["Tóxica (múltiplas picadas)", "Dezenas (criança) ou > 100 (adulto) picadas de abelha [F]", "Urgência: CK, função renal, hemólise [F]"]
        ]}, nota: "GVS 2024 vol. 3, acidentes por himenópteros, Quadro 1 [F]. Não há soro antiapílico disponível (em testes) [F]."},
        {det: {t: "Estrófulo (prurigo por picadas)", b: ["Criança de 1–7 anos com pápulas e seropápulas pruriginosas, às vezes com vesícula central, em surtos nas áreas expostas, em quem convive com pulgas, percevejos ou mosquitos. É hipersensibilidade às picadas; os outros da casa não reagem. Tratar com anti-histamínico, corticoide tópico curto e controle dos insetos (animais, frestas, mosquiteiro) [C]."]}}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Picada de inseto"},
          {t: "Sintomas fora da pele ou múltiplas picadas de abelha?", ramos: [
            {r: "Sim", n: [{t: "Anafilaxia/envenenamento: adrenalina IM se alérgico, urgência", k: "stop"}]},
            {r: "Não", n: [{t: "Retirar ferrão raspando; gelo; anti-histamínico; corticoide tópico", k: "ok"}]}
          ]},
          {t: "Edema crescente com febre e dor após 48 h → pensar em celulite", k: "warn"},
          {t: "Reação sistêmica (grau ≥ II) no passado → alergologia (imunoterapia com veneno) e plano de emergência", k: "warn"}
        ], nota: "GVS 2024 vol. 3 [F]; demais [C]."},
        {ir: [["anafilaxia", "Anafilaxia"], ["urticaria", "Urticária aguda"], ["celulite", "Celulite"]]},
        {ref: ["gvs3_himenop", "cab28", "eaaci_urt", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["gvs3_himenop"]});

  // ── 7. Verrugas e molusco
  G("verrugas", {
    resumo: "**Verruga vulgar**: pápula áspera que interrompe as linhas da pele, com pontos pretos (capilares trombosados) [C]. **Molusco**: pápulas peroladas, umbilicadas, em crianças ou na região genital de adultos [C]. Muitas regridem sozinhas (molusco em **6–12 meses**) [F]. Tratar se incômodo, dor, disseminação, genital no adulto ou imunossupressão [F]. **Muitas lesões ou lesões na face em adulto**: teste rápido de **HIV** [F/C]. Lesões genitais em criança: considerar **abuso sexual** [F].",
    secoes: [
      {t: "Reconhecer e diferenciar", b: [
        {tab: {h: ["Hipótese", "O que separa"], r: [
          ["Verruga plantar × calo", "Verruga interrompe as linhas e tem pontos pretos; dói ao **apertar dos lados**. Calo mantém as linhas e dói à **pressão direta** [C]"],
          ["Verruga plana", "Pápulas lisas, pequenas, na face, mãos e pernas (lâmina de barbear espalha) [F/C]"],
          ["Molusco", "Umbilicação central, conteúdo branco ao espremer [C]"],
          ["Condiloma", "Anogenital, couve-flor – seguir o item de IST [C]"],
          ["Ceratose seborreica", "Adulto, 'colada', marrom [C]"],
          ["CEC / ceratoacantoma", "Idoso, área exposta, crescimento rápido ou ulceração [C]"]
        ]}},
        ...F3("verruga", "molusco")
      ]},
      {t: "Tratar", b: [
        {tab: {h: ["Lesão", "Tratamento (Quadros 28 e 29)"], r: [
          ["Vulgar e palmoplantar", "Ácido salicílico 20% + láctico 15% em colódio: após banho ou imersão, lixar, proteger a pele ao redor, aplicar, ocluir com esparadrapo; trocar a cada 24–48 h por 1–3 meses; **não usar na face nem com neuropatia** [F]. Palmoplantar resistente: salicílico até 40% (manipulado) ou ATA 50–80% na UBS a cada 7–10 dias por até 8 semanas [F]"],
          ["Plana", "Tretinoína tópica à noite, na maior concentração tolerada; imiquimode 5% [F]"],
          ["Filiforme", "Shaving e eletrocoagulação sob anestesia local, se houver material [F]"],
          ["Molusco", "Opcional na criança imunocompetente; tratar adultos com lesões genitais e imunossuprimidos: KOH 5–10% (manipulado) ou tretinoína [F]"]
        ]}, nota: "TelessaúdeRS Dermatologia 2023 [F]. Nenhum desses produtos está na REMUME; a RENAME tem só ácido salicílico 5% pomada [F]. Lesões perioculares: não tratar topicamente – dermatologia [F]."},
        {fluxo: [
          {t: "Verruga ou molusco"},
          {t: "Imunossuprimido, face (exceto verruga plana), periocular, genital em criança com múltiplas lesões ou sintomas?", ramos: [
            {r: "Sim", n: [{t: "Dermatologia (e proteção, se suspeita de abuso)", k: "warn"}]},
            {r: "Não", n: [{t: "Expectante ou tratamento tópico"}]}
          ]},
          {t: "Refratária após 3 meses (1 mês no imunossuprimido) → dermatologia", k: "warn"}
        ], nota: "Protocolo 11 [F]."},
        {ref: ["tsrs_derm2023", "cochrane_verruga", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["tsrs_derm2023"]});

  // ── 8. Exantema agudo
  G("exantema", {
    urg: "**Petéquias ou púrpura com febre** (meningococcemia), bolhas ou descolamento com lesões de mucosa (Stevens-Johnson/NET), exantema com hipotensão, ou febre + exantema + eosinofilia + linfonodos + fígado após medicamento novo nas últimas 8 semanas (DRESS): **urgência** [C]. **Febre + exantema maculopapular** = **caso suspeito de sarampo/rubéola**: notificação **imediata** ao MS, SES e SMS, precaução por aerossóis e coleta no 1º atendimento [F].",
    resumo: "Organize pelo **tipo de lesão** (maculopapular, vesicular, petequial, difuso em lixa), pela **relação com a febre**, pela **vacinação** e pela **epidemiologia** (dengue, Zika, chikungunya, sarampo) [C/F]. Exantema em **palmas e plantas**: sífilis secundária, mão-pé-boca, riquetsiose, eritema multiforme [C]. Evite AAS e AINE até afastar dengue [F].",
    secoes: [
      {t: "Exantemas da infância (CAB 28)", b: [
        {tab: {h: ["Doença", "Pistas", "Atenção"], r: [
          ["Sarampo", "Febre alta, tosse, coriza, conjuntivite por 3–5 dias; **Koplik**; exantema retroauricular → craniocaudal, confluente [F]", "Notificação imediata; vitamina A; transmite até 4 dias após o exantema (GVS) [F]"],
          ["Rubéola", "Febre baixa, **linfonodos retroauriculares e occipitais**, exantema róseo craniocaudal que some em 1 semana [F]", "Notificação imediata; gestante: síndrome da rubéola congênita [F]"],
          ["Varicela", "Polimorfismo: máculas, pápulas, vesículas e crostas juntas; prurido [F]", "Notificação imediata à SES e à SMS [F]"],
          ["Eritema infeccioso (parvovírus B19)", "**Face esbofeteada**, depois rendilhado no tronco e membros que volta com sol e calor; artralgia no adulto [F]", "Gestante: risco de hidropisia fetal [F]"],
          ["Exantema súbito (HHV-6/7)", "3–4 dias de **febre alta** em lactente; o exantema aparece **quando a febre cede** [F]", "Convulsão febril possível [C]"],
          ["Escarlatina", "Febre, faringite, exantema **áspero (em lixa)**, Filatov, Pastia, **língua em framboesa**, descamação [F]", "Antibiótico como na faringite estreptocócica [F]"]
        ]}}
      ]},
      {t: "Outras causas", b: [
        {tab: {h: ["Hipótese", "Pistas"], r: [
          ["Dengue", "Exantema no 3º–6º dia, prurido, prova do laço [F]"],
          ["Zika", "Exantema pruriginoso precoce (1º–2º dia), conjuntivite não purulenta, febre baixa [F]"],
          ["Chikungunya", "Poliartralgia intensa e simétrica; exantema 2º–5º dia, inclusive palmoplantar [F]"],
          ["Sífilis secundária", "Máculas e pápulas acobreadas em **palmas e plantas**, sem prurido, linfonodos – teste rápido [C]"],
          ["Mononucleose (+ amoxicilina)", "Faringite, linfonodos, esplenomegalia; exantema após amoxicilina [C]"],
          ["Farmacodermia", "Medicamento novo 4–14 dias antes; prurido; eosinofilia [C]"],
          ["Doença de Kawasaki", "Criança com febre ≥ 5 dias + conjuntivite, lábios e língua vermelhos, edema de mãos e pés, linfonodo cervical – urgência pediátrica [C]"]
        ]}, nota: "Arboviroses: Guia prático MS 2024, Quadro 13 [F]."},
        ...(typeof FOTO_INF !== "undefined" ? [{fig: {foto: true, src: "img/inf-sarampo.webp", leg: FOTO_INF.sarampo[0], alt: FOTO_INF.sarampo[0], fonte: FOTO_INF.sarampo[1]}}] : [])
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Exantema agudo"},
          {t: "Petéquias com febre, mucosas com bolhas, hipotensão ou DRESS?", ramos: [
            {r: "Sim", n: [{t: "Urgência", k: "stop"}]},
            {r: "Não", n: [{t: "Febre + exantema maculopapular?"}]}
          ]},
          {t: "Maculopapular febril", ramos: [
            {r: "Sim", n: [{t: "Suspeita de sarampo/rubéola: máscara, notificar já, coletar sangue + swab + urina; avaliar dengue/Zika/chikungunya", k: "warn"}]},
            {r: "Não", n: [{t: "Pelo tipo: vesicular (varicela, mão-pé-boca), em lixa (escarlatina), palmoplantar (sífilis)", k: "q"}]}
          ]},
          {t: "Gestante com exantema: sarampo, rubéola, Zika, sífilis e parvovírus", k: "warn"}
        ], nota: "CAB 28 [F]; GVS 2024 e NT 324/2026 (sarampo) [F]; Portaria 11.211/2026 [F]."},
        {ir: [["sarampo", "Sarampo"], ["varicela", "Varicela"], ["maopeboca", "Mão-pé-boca"], ["zika", "Zika"], ["chikungunya", "Chikungunya"], ["dengue-a", "Dengue"]]},
        {ref: ["cab28", "gvs1_sarampo", "nt324_sarampo", "port11211", "ms_arbo_aps2024", "ms_dengue"]}
      ]}
    ]
  }, {fontes: ["cab28", "gvs1_sarampo", "port11211", "ms_arbo_aps2024"], mud: "tabela dos exantemas da infância (CAB 28), arboviroses, sífilis e Kawasaki, notificação imediata de sarampo, rubéola e varicela (Portaria 11.211/2026)"});

  // ── 9. Acne
  G("acne", {
    urg: "**Acne fulminans** (nódulos e placas súbitos, crostas hemorrágicas, febre, artralgia): iniciar **prednisona 0,5–1 mg/kg/dia** na APS e discutir com a dermatologia já [F].",
    resumo: "Classificar pela lesão predominante: **comedoniana** (cravos), **papulopustulosa** e **nodular/conglobata** [F]. Base de todos os graus: **retinoide tópico** e/ou **peróxido de benzoíla** [F]. Antibiótico oral (doxiciclina) **nunca sozinho** e por **3–4 meses no máximo** [F]. Manutenção com retinoide tópico [F]. Isotretinoína pela dermatologia (Protocolo de Uso/CEAF) na grave ou refratária; **não associar tetraciclina** (pseudotumor cerebral) [F].",
    secoes: [
      {t: "Classificar e tratar (Quadro 1)", b: [
        {tab: {h: ["Gravidade", "Acne", "1ª escolha", "Manutenção"], r: [
          ["Leve", "Comedoniana", "Retinoide tópico [F]", "Retinoide tópico [F]"],
          ["Leve", "Mista/papulopustulosa", "Retinoide + antibiótico tópico; ou antibiótico tópico + peróxido; ou retinoide + peróxido [F]", "Retinoide ± peróxido [F]"],
          ["Moderada", "Papulopustulosa / nodular", "Antibiótico oral + retinoide tópico e/ou peróxido [F]", "Retinoide ± peróxido [F]"],
          ["Grave", "Conglobata", "Isotretinoína (± corticoide oral) ou antibiótico oral + retinoide + peróxido [F]", "Retinoide ± peróxido [F]"]
        ]}, nota: "TelessaúdeRS Dermatologia 2023, Quadros 1 e 2 [F]. Gestação: ácido azelaico ou clindamicina tópicos; moderada a grave: azitromicina 500 mg/dia 3 dias por mês, 3–4 ciclos [F]. Mulheres: anticoncepcional com progestógeno antiandrogênico ou espironolactona 100–200 mg/dia [F]."},
        {tab: {h: ["Medicamento", "Uso"], r: [
          ["Tretinoína / adapaleno", "Uma ervilha para toda a face, à noite; irrita no início [F]"],
          ["Peróxido de benzoíla 2,5–5% gel", "1–2×/dia; descolore tecidos [F]"],
          ["Doxiciclina 100 mg", "1–2×/dia após a refeição; contraindicada na gestação e < 8 anos [F]; REMUME [F]"],
          ["Tetraciclina 500 mg", "2×/dia longe das refeições [F]"]
        ]}},
        {trio: {ideal: "Retinoide tópico + peróxido de benzoíla como base; doxiciclina associada na moderada; isotretinoína na grave.", sus: "REMUME: doxiciclina, minociclina e levonorgestrel + etinilestradiol; tópicos não constam (peróxido e clindamicina tópica só na RENAME); isotretinoína no CEAF.", ponte: "Tópicos de baixo custo por compra; doxiciclina do SUS sempre com tópico; dermatologia para isotretinoína."}},
        ...F3("acne")
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Acne"},
          {t: "Fulminans ou conglobata?", ramos: [
            {r: "Sim", n: [{t: "Fulminans: prednisona agora + dermatologia; conglobata: dermatologia", k: "stop"}]},
            {r: "Não", n: [{t: "Tratar pelo Quadro 1 e reavaliar em 8–12 semanas"}]}
          ]},
          {t: "Leve a moderada com prejuízo na qualidade de vida e falha após ≥ 4 meses de tratamento otimizado (antibiótico oral + tópicos) → dermatologia", k: "warn"}
        ], nota: "Protocolo 1 [F]."},
        {ul: ["Diferenciais: rosácea (sem comedões, eritema difuso), dermatite perioral, foliculite, hiperandrogenismo (SOP: irregularidade menstrual, hirsutismo – investigar), acne por corticoide ou anabolizante (lesões monomórficas) [C]."]},
        {ref: ["tsrs_derm2023", "aad_acne", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["tsrs_derm2023"]});

  // ── 10. Herpes labial
  G("herpes-labial", {
    urg: "Lesões perto do olho ou olho vermelho e doloroso (ceratite), **eczema herpético** (vesículas e erosões sobre dermatite atópica, com febre), recém-nascido ou imunossuprimido com lesões extensas: **avaliação urgente** [F/C].",
    resumo: "**Ardor ou formigamento** (pródromo) e depois **vesículas agrupadas sobre base eritematosa** que ulceram e formam crosta em 3–5 dias, **sempre no mesmo lugar** [F]. Gatilhos: sol, febre, estresse, menstruação, imunossupressão [F]. Antiviral oral funciona melhor se iniciado **no pródromo**; o tópico ajuda pouco [F]. Recorrências frequentes: **supressão** [F].",
    secoes: [
      {t: "Reconhecer e diferenciar", b: [
        {tab: {h: ["Hipótese", "O que separa"], r: [
          ["Impetigo", "Crostas melicéricas, sem pródromo de ardor, pode espalhar [C]"],
          ["Afta", "Dentro da boca, mucosa não queratinizada, sem vesículas [C]"],
          ["Queilite angular", "Fissuras nos cantos da boca, prótese, cândida [C]"],
          ["Herpes-zóster (V par)", "Dermátomo, dor mais intensa, unilateral extensa [C]"],
          ["Eritema multiforme", "Lesões em alvo dias após o herpes – recorrente [C]"]
        ]}},
        {det: {t: "Fisiopatologia", b: ["Depois da primoinfecção (muitas vezes gengivoestomatite na infância), o HSV-1 fica latente no gânglio trigeminal e reativa por gatilhos, descendo pelo nervo até o mesmo ponto da pele. Transmite pelo contato com as lesões e, menos, pela saliva sem lesão [F/C]."]}},
        ...F3("herpes-labial")
      ]},
      {t: "Tratar", b: [
        {tab: {h: ["Esquema", "Dose"], r: [
          ["Aciclovir (recorrência) – CAB 28", "200 mg 5×/dia (4/4 h, omitindo a dose da noite) por 5 dias [F]"],
          ["Aciclovir (primoinfecção) – CAB 28", "200 mg 5×/dia por 7–10 dias [F]"],
          ["Valaciclovir (recorrência) – CAB 28", "500 mg 2×/dia por 5 dias [F]"],
          ["Valaciclovir em 1 dia (ECR)", "2 g 12/12 h por 1 dia, iniciado no pródromo [C]"],
          ["Supressão – CAB 28", "Aciclovir 400 mg/dia [F]"],
          ["Penciclovir 1% creme", "5×/dia [F]; tópico tem efeito pequeno [F]"]
        ]}, nota: "Divergência de dose: o CAB 28 usa aciclovir 200 mg 5×/dia na recorrência; a receita do app usa 400 mg 5×/dia por 5 dias, esquema de referências internacionais [C]. Supressão com aciclovir 400 mg/dia no CAB 28 × 400 mg 2×/dia nas referências internacionais [C]. A gestação exige pesar risco e benefício (CAB 28) [F]."},
        {fluxo: [
          {t: "Herpes labial"},
          {t: "Olho, eczema herpético, RN ou imunossuprimido extenso?", ramos: [
            {r: "Sim", n: [{t: "Urgência / oftalmologia", k: "stop"}]},
            {r: "Não", n: [{t: "Pródromo ou < 72 h?"}]}
          ]},
          {t: "Antiviral", ramos: [
            {r: "Sim", n: [{t: "Aciclovir oral (REMUME) ou valaciclovir", k: "ok"}]},
            {r: "Não", n: [{t: "Cuidados locais; protetor labial com filtro solar", k: "ok"}]}
          ]},
          {t: "≥ 6 episódios/ano ou graves → supressão diária", k: "warn"}
        ], nota: "CAB 28 vol. II [F]."},
        {ref: ["cab28", "herpes_labial", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["cab28"]});

  // ── 11. Unha encravada
  G("onicocriptose", {
    urg: "**Diabético ou com doença arterial periférica** com unha encravada infectada: avaliar pulsos e sensibilidade, tratar a infecção cedo e não fazer procedimento sem avaliação do pé (risco de úlcera e osteomielite) [C].",
    resumo: "A borda lateral da unha penetra a prega, quase sempre no **hálux**, por **corte arredondado ou curto demais**, calçado apertado, sudorese ou unha curvada [C]. Estágio 1 (dor e edema): medidas conservadoras. Estágios 2–3 (pus, granuloma) ou recorrência: **cantoplastia parcial com fenolização da matriz**, que reduz a recidiva (Cochrane) [C]. Antibiótico oral **não substitui** a retirada da espícula [C].",
    secoes: [
      {t: "Classificar", b: [
        {tab: {h: ["Estágio", "Achado", "Conduta"], r: [
          ["1 – inflamatório", "Dor, eritema, edema leve da prega [C]", "Banho morno, algodão ou fio dental sob a borda, calçado largo, corte reto [C]"],
          ["2 – infeccioso", "Secreção purulenta, edema maior [C]", "Cantoplastia parcial + fenol; antibiótico só se celulite [C]"],
          ["3 – granuloma", "Tecido de granulação recobrindo a borda [C]", "Cantoplastia parcial + fenol, remover o granuloma [C]"]
        ]}},
        ...F3("unha-encravada")
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Dor na borda da unha do pé"},
          {t: "DM/DAP com infecção ou celulite que sobe?", ramos: [
            {r: "Sim", n: [{t: "Avaliação do pé, antibiótico, cuidado redobrado", k: "stop"}]},
            {r: "Não", n: [{t: "Estágio?"}]}
          ]},
          {t: "Estágio", ramos: [
            {r: "1", n: [{t: "Conservador por 2–4 semanas", k: "ok"}]},
            {r: "2–3 ou recorrente", n: [{t: "Bloqueio digital (lidocaína sem vasoconstritor) + retirada da espícula lateral + fenolização da matriz", k: "warn"}]}
          ]},
          {t: "Ensinar o corte reto, sem aprofundar os cantos", k: "ok"}
        ], nota: "Cochrane 2012 [C]; lidocaína 2% sem vasoconstritor na REMUME [F]."},
        {ul: ["Diferenciais: paroníquia aguda (dedos da mão, sem espícula), exostose subungueal (dor na ponta, RX), onicomicose com unha em telha, tumor subungueal [C]."]},
        {ir: [["paroniquia", "Paroníquia"], ["pele-onicomicose", "Onicomicose"]]},
        {ref: ["cochrane_unha", "rename", "remume"]}
      ]}
    ]
  }, {nv: ["Fenol e material de cantoplastia nas UBS de Betim."]});
})();
