// ───────────── data69.js – v56: Guia Clínico – lote 6 (Geniturinário e saúde sexual: 13 itens sem guia).
// Conferido em 25/10/2026 no texto integral do PCDT IST 2022 (Quadros 15, 29–31, 33–35, 37–39, 51; Figuras 11–14 e 16; seção 5.7),
// NT 14/2023-DATHI/SVSA/MS (intervalo de 9 dias na gestante, via Agência Gov 19/07/2023), TelessaúdeRS Urologia 2023 (Protocolos 1, 5 e 8;
// Quadros 2, 5 e 11), Portaria GM/MS 11.211/2026 (Anexo I) e REMUME Betim.
Object.assign(FONTES, {
  pcdt_ist2022: {s: "PCDT IST 2022 (texto integral)", t: "Ministério da Saúde. Protocolo Clínico e Diretrizes Terapêuticas para Atenção Integral às Pessoas com IST, 2022 (cópia na base clínica): Quadro 15 (sífilis: recente 2,4 milhões UI dose única; tardia 2,4 milhões UI/semana por 3 semanas; alternativa doxiciclina 15/30 dias, exceto gestantes; intervalo máximo de 14 dias fora da gestação); seção 5.7 (resposta adequada: queda de 2 diluições em 6 meses na recente e 12 meses na tardia; retratamento se não cair, se subir 2 diluições ou se sintomas); Quadros 31 e 37 (ceftriaxona 500 mg IM + azitromicina 1 g; 2ª opção ceftriaxona + doxiciclina 7 dias; retratamento gonocócico com azitromicina 2 g ou gentamicina 240 mg IM + azitromicina 2 g); Quadro 33 (candidíase: miconazol 7 noites ou nistatina 100.000 UI 14 noites; fluconazol 150 mg ou itraconazol 200 mg 2×/dia por 1 dia; recorrente: indução e manutenção 6 meses; gestante só via vaginal); Quadro 34 (vaginose: metronidazol 500 mg 2×/dia 7 dias ou gel 5 noites; clindamicina 300 mg 2×/dia 7 dias; recorrente 10–14 dias + supressão); Quadro 35 (tricomoníase: metronidazol 2 g dose única ou 500 mg 2×/dia 7 dias; tratar parcerias; evitar álcool); Quadro 38 (herpes genital: 1º episódio aciclovir 400 mg 3×/dia ou 200 mg 5×/dia 7–10 dias; recidiva 400 mg 3×/dia ou 800 mg 2×/dia 5 dias; supressão 400 mg 2×/dia até 6 meses–2 anos; gestante: supressão a partir de 36 semanas com 400 mg 3×/dia); Quadro 39 (cancroide: azitromicina 1 g); Quadro 51 (levonorgestrel 1,5 mg ou 0,75 mg 12/12 h até 5 dias); Figuras 11–14 e 16 (fluxogramas de corrimento vaginal, cervicite, corrimento uretral, úlcera genital e verrugas anogenitais); verrugas: ATA 80–90% e crioterapia podem ser usados na gestação, podofilina e imiquimode não; testes de HPV não indicados (protocolo; cópia na base clínica).", f: "F", url: "https://www.gov.br/aids/pt-br/central-de-conteudo/pcdts/2022/ist/pcdt-ist-2022_isbn-1.pdf"},
  nt14_2023: {s: "NT 14/2023-DATHI/SVSA/MS – intervalo de penicilina na gestante", t: "Ministério da Saúde. Nota Técnica nº 14/2023-DATHI/SVSA/MS: atualização do intervalo entre doses de benzilpenicilina benzatina para sífilis em gestantes – ideal 7 dias, máximo 9 dias; se uma dose for perdida ou o intervalo passar de 9 dias, reiniciar o esquema (conferido pela notícia da Agência Gov de 19/07/2023 e pelo título no Portal de Boas Práticas/Fiocruz; texto da NT não aberto).", f: "F", url: "https://agenciagov.ebc.com.br/noticias/202307/ministerio-da-saude-atualiza-recomendacao-sobre-o-intervalo-entre-doses-de-penicilina-para-tratamento-de-sifilis-em-gestantes"}
});

(() => {
  const get = id => CONDICOES.find(x => x.id === id);
  const G = (id, guia, o = {}) => {
    const c = get(id); if (!c) return;
    c.guia = guia;
    if (c.evid && o.fontes) c.evid.fontes = [...new Set([...(c.evid.fontes || []), ...o.fontes])];
    (c.mudancas = c.mudancas || []).push("v56 (25/10/2026): Guia Clínico novo – " + (o.mud || "reconhecer, diferenciais, fluxograma e fontes") + ".");
    if (o.nv) c.nv = [...(c.nv || []), ...o.nv];
  };
  const IST_GERAL = {ul: [
    "Oferecer testes rápidos de HIV, sífilis e hepatites B e C; vacinação de hepatite B e HPV quando indicada; prevenção combinada (preservativo, PrEP, PEP) [F].",
    "Tratar e orientar as parcerias; notificar quando indicado [F]."
  ]};

  // Fluxograma de corrimento vaginal (Figura 11 do PCDT), usado em 3 itens
  const FLUXO_CORRIMENTO = {fluxo: [
    {t: "Queixa de corrimento vaginal: anamnese + exame especular"},
    {t: "Dor à mobilização do colo, muco purulento no orifício, edema ou sangramento cervical ao toque?", ramos: [
      {r: "Sim", n: [{t: "Cervicite/DIP: tratar clamídia e gonorreia", k: "stop"}]},
      {r: "Não", n: [{t: "Microscopia a fresco na consulta?"}]}
    ]},
    {t: "Recursos", ramos: [
      {r: "Microscopia", n: [{t: "Clue cells → vaginose; Trichomonas → tricomoníase; hifas → candidíase", k: "ok"}]},
      {r: "Só pH/KOH", n: [{t: "pH > 4,5 e/ou KOH (+) → vaginose e/ou tricomoníase; pH < 4,5 + grumos/eritema → candidíase", k: "ok"}]},
      {r: "Nenhum", n: [{t: "Tratar pela clínica: grumoso/prurido → candidíase; homogêneo com odor → vaginose ± tricomoníase", k: "warn"}]}
    ]},
    {t: "Oferecer testagem para HIV, sífilis, hepatites; checar o preventivo", k: "ok"}
  ], nota: "PCDT IST 2022, Figura 11 [F]."};

  const TAB_CORRIMENTO = {tab: {h: ["", "Candidíase", "Vaginose", "Tricomoníase"], r: [
    ["Corrimento", "Branco, grumoso, aderido [C]", "Branco-acinzentado, homogêneo, fino, odor de peixe [C]", "Amarelo-esverdeado, bolhoso, abundante [C]"],
    ["Sintomas", "Prurido, ardor, disúria externa, dispareunia [C]", "Odor pior após o coito e a menstruação; pouco prurido [C]", "Prurido, disúria, colo em framboesa [C]"],
    ["pH vaginal", "< 4,5 [F]", "> 4,5 [F]", "> 4,5 [F]"],
    ["Teste das aminas (KOH)", "Negativo [C]", "Positivo [F/C]", "Pode ser positivo [C]"],
    ["Microscopia", "Hifas/pseudo-hifas [F]", "Clue cells [F]", "Protozoário móvel [F]"],
    ["Parceria", "Só se sintomática [F]", "Não tratar [F]", "Tratar sempre [F]"]
  ]}};

  // ── 1. Anticoncepção de emergência
  G("ae", {
    urg: "Relação **não consentida**: além da AE, seguir o fluxo de violência sexual – PEP em até 72 h, profilaxia de IST (Quadro 50 do PCDT IST), notificação e rede de proteção [F].",
    resumo: "**Quanto mais cedo, mais eficaz** [F]. Levonorgestrel **1,5 mg dose única** (ou 0,75 mg 12/12 h) **até 5 dias** após a relação [F]. O **DIU de cobre** em até 5 dias é o método mais eficaz e já fica como contracepção [C]. AE atrasa ou impede a ovulação; **não interrompe gravidez já implantada** [C]. Uso repetido diminui a eficácia: aproveitar a consulta para um método regular [F].",
    calcs: ["ae"],
    secoes: [
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Relação desprotegida ou falha do método"},
          {t: "Violência sexual?", ramos: [
            {r: "Sim", n: [{t: "Fluxo de violência: PEP, IST, notificação, rede", k: "stop"}]},
            {r: "Não", n: [{t: "Tempo desde a relação?"}]}
          ]},
          {t: "Opções", ramos: [
            {r: "≤ 5 dias e deseja DIU", n: [{t: "DIU de cobre (mais eficaz)", k: "ok"}]},
            {r: "≤ 72 h", n: [{t: "Levonorgestrel 1,5 mg (REMUME: 2 × 0,75 mg juntos)", k: "ok"}]},
            {r: "72–120 h, IMC ≥ 30 ou indutor enzimático", n: [{t: "Preferir DIU; ulipristal (compra) é mais eficaz que levonorgestrel nesse cenário", k: "warn"}]}
          ]},
          {t: "Testes rápidos; iniciar método regular (quick start) + preservativo 7 dias (14 dias após ulipristal para hormonal)", k: "ok"},
          {t: "Menstruação atrasou > 7 dias → teste de gravidez", k: "warn"}
        ], nota: "PCDT IST 2022, Quadro 51 [F]; DIU, ulipristal e IMC: evidência consolidada [C]; ulipristal registrado no Brasil (bula) [F]."},
        {ul: ["Sem contraindicação médica ao levonorgestrel de emergência; pode ser dado a adolescentes [C].", "Vômito em até 3 h do comprimido: repetir a dose [C]."]},
        {ir: [["pep", "PEP – violência sexual"], ["mu-metodos", "Escolha do método contraceptivo"]]},
        {ref: ["pcdt_ist2022", "ulip_bula", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["pcdt_ist2022"]});

  // ── 2. Balanopostite
  G("balanopostite", {
    urg: "**Parafimose** (prepúcio retraído preso atrás da glande, com edema): redução manual imediata ou urgência [C].",
    resumo: "Inflamação da glande e do prepúcio, quase sempre em **não circuncidados**: candidíase (eritema com pápulas e pústulas satélites, após o coito ou com diabetes), irritativa (sabonete, higiene excessiva ou insuficiente), bacteriana e dermatoses [C]. **Glicemia** em todo caso de candidíase; testes rápidos de IST [C]. **Lesão que persiste > 4–6 semanas** ou placa branca esclerótica: biópsia (**líquen escleroso**, neoplasia) [C].",
    secoes: [
      {t: "Diferenciais", b: [
        {tab: {h: ["Hipótese", "Pistas"], r: [
          ["Candidíase", "Eritema brilhante, pápulas/pústulas satélites, prurido; DM, antibiótico, parceria com candidíase [C]"],
          ["Irritativa", "Ardor após sabonete, antisséptico, lubrificante; sem satélites [C]"],
          ["Bacteriana (estreptococo, anaeróbios)", "Secreção fétida, edema intenso [C]"],
          ["Líquen escleroso", "Placa branca, atrófica, fimose adquirida, estenose de meato – risco de CEC [C]"],
          ["Balanite de Zoon", "Placa vermelho-alaranjada brilhante em idoso não circuncidado [C]"],
          ["Eritroplasia de Queyrat (CEC in situ)", "Placa vermelha aveludada persistente – biópsia [C]"],
          ["Herpes, sífilis, erupção fixa por droga", "Vesículas/úlceras; cancro indolor; lesão que volta com o mesmo fármaco [C]"],
          ["Psoríase", "Placa bem delimitada sem escama na glande; lesões em outros locais [C]"]
        ]}}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Glande e prepúcio inflamados"},
          {t: "Parafimose?", ramos: [
            {r: "Sim", n: [{t: "Reduzir / urgência", k: "stop"}]},
            {r: "Não", n: [{t: "Higiene com água morna e secagem; suspender irritantes; glicemia e testes rápidos"}]}
          ]},
          {t: "Aspecto", ramos: [
            {r: "Satélites / candidíase", n: [{t: "Azol tópico 2×/dia 7–14 dias (± corticoide de baixa potência 3–5 dias)", k: "ok"}]},
            {r: "Úlcera ou vesícula", n: [{t: "Fluxo de úlcera genital (sífilis, herpes)", k: "warn"}]}
          ]},
          {t: "Persistente > 4–6 semanas, placa branca ou recorrente com fimose → urologia (biópsia, postectomia)", k: "warn"}
        ], nota: "BASHH 2015 [C]; azóis e dexametasona creme na REMUME [F]."},
        {ref: ["bashh_balano", "rename", "remume"]}
      ]}
    ]
  });

  // ── 3. Candidíase vulvovaginal
  G("candidiase", {
    resumo: "Prurido, ardor, corrimento **branco grumoso**, eritema e edema vulvar, **pH < 4,5** [F/C]. Não é IST: **parceria só trata se tiver sintomas** [F]. Tópico vaginal 7 noites ou fluconazol 150 mg dose única [F]. **Gestante e lactante: só via vaginal** [F]. **Recorrente** (≥ 4 episódios/ano): indução + manutenção por 6 meses, glicemia e revisão de fatores [F/C].",
    secoes: [
      {t: "Diferenciar", b: [TAB_CORRIMENTO, FLUXO_CORRIMENTO,
        {ul: ["Fatores predisponentes (Quadro 29): gestação, DM descompensado, obesidade, antibiótico, corticoide, imunossupressão, hábitos de higiene e vestuário que aumentam umidade e calor local [F].", "Diferenciais de prurido vulvar sem corrimento: dermatite de contato, líquen escleroso (placas brancas, idosas), líquen simples, psoríase [C]."]}
      ]},
      {t: "Tratar", b: [
        {tab: {h: ["Situação", "Esquema (Quadro 33)"], r: [
          ["1ª opção", "Miconazol 2% creme vaginal 7 noites ou nistatina 100.000 UI vaginal 14 noites [F]"],
          ["2ª opção", "Fluconazol 150 mg dose única ou itraconazol 200 mg 2×/dia por 1 dia [F]"],
          ["Complicada / recorrente – indução", "Fluconazol 150 mg dias 1, 4 e 7, ou itraconazol 200 mg 2×/dia 1 dia, ou miconazol vaginal 10–14 dias [F]"],
          ["Recorrente – manutenção", "Fluconazol 150 mg/semana por 6 meses, ou miconazol vaginal 2×/semana, ou óvulo 1×/semana por 6 meses [F]"],
          ["Gestante / lactante", "Só via vaginal; oral contraindicado [F]"]
        ]}, nota: "REMUME: miconazol creme vaginal, nistatina creme vaginal 25.000 UI/g (um aplicador de ~4 g ≈ 100.000 UI [I]), fluconazol 150 mg e itraconazol 100 mg [F]. Recorrente sem resposta: pensar em espécie não albicans (cultura) → ginecologia [C]."},
        IST_GERAL,
        {ref: ["pcdt_ist2022", "pcdt_ist", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["pcdt_ist2022"]});

  // ── 4. Cervicite
  G("cervicite", {
    urg: "Dor pélvica com **dor à mobilização do colo**, anexos dolorosos ou febre: **DIP** – tratar e avaliar critérios de internação [F].",
    resumo: "Geralmente **assintomática**; quando há sintomas: corrimento, sangramento intermenstrual ou pós-coito, dispareunia, disúria [F]. Ao exame: **muco cervical turvo ou amarelado, friabilidade, edema e sangramento ao toque da espátula** [F]. Tratar **clamídia e gonorreia** no mesmo dia, sem esperar exame: **ceftriaxona 500 mg IM + azitromicina 1 g** [F]. Parcerias tratadas [F].",
    secoes: [
      {t: "Decidir e tratar", b: [
        {fluxo: [
          {t: "Corrimento, sangramento pós-coito/intermenstrual, dispareunia ou fator de risco"},
          {t: "Exame especular: muco turvo, friabilidade, edema, sangramento ao toque?", ramos: [
            {r: "Sim", n: [{t: "Tratar clamídia + gonorreia; coletar biologia molecular se houver", k: "warn"}]},
            {r: "Não", n: [{t: "Seguir fluxo de corrimento vaginal", k: "ok"}]}
          ]},
          {t: "Dor à mobilização do colo/anexos → DIP", k: "stop"},
          {t: "Parcerias, abstinência até o fim do tratamento de todos, testes rápidos", k: "ok"}
        ], nota: "PCDT IST 2022, Figura 12 [F]. Fatores de risco: < 30 anos, parcerias novas ou múltiplas, parceria com IST, IST prévia, preservativo irregular [F]."},
        {tab: {h: ["Infecção", "Tratamento (Quadro 31)"], r: [
          ["Gonococo não complicado (colo, uretra, reto, faringe)", "Ceftriaxona 500 mg IM dose única + azitromicina 1 g VO dose única [F]"],
          ["Clamídia", "Azitromicina 1 g dose única ou doxiciclina 100 mg 2×/dia por 7 dias (exceto gestantes) [F]"],
          ["Gonococo disseminado", "Ceftriaxona 1 g IM/IV por ≥ 7 dias + azitromicina 1 g – hospital [F]"]
        ]}, nota: "REMUME: ceftriaxona 1 g IM (usar 500 mg), azitromicina 500 mg e doxiciclina 100 mg [F]. Clamídia e gonorreia não constam da lista nacional de notificação; sífilis, HIV e hepatites sim [F]."},
        IST_GERAL,
        {ir: [["dip", "DIP"], ["uretrite", "Corrimento uretral (parceria)"]]},
        {ref: ["pcdt_ist2022", "cdc_ist", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["pcdt_ist2022"]});

  // ── 5. Cólica renal
  G("colica-renal", {
    urg: "**Febre** com cólica renal (obstrução infectada – urgência urológica), anúria, rim único ou transplantado, gestante, dor que não cede com o tratamento otimizado: **urgência** [F/C]. **> 60 anos com 'primeira cólica renal'**, hipotensão ou massa pulsátil: pensar em **aneurisma de aorta** [C].",
    resumo: "Dor lombar em cólica, intensa, que irradia para o flanco, a virilha ou o genital, com inquietação, náuseas e hematúria [C]. **AINE é a 1ª escolha** na analgesia [C]. Tratamento otimizado na APS: **analgesia + alfabloqueador** (doxazosina 4 mg ou tansulosina 0,4 mg/dia) se cálculo ureteral **≤ 10 mm** [F]. Encaminhar se **> 10 mm** ou **não eliminado em 4 semanas** [F].",
    secoes: [
      {t: "Diferenciais", b: [
        {tab: {h: ["Hipótese", "Pistas"], r: [
          ["Aneurisma de aorta roto", "Idoso, hipotensão, massa pulsátil, dor contínua – urgência [C]"],
          ["Pielonefrite", "Febre, disúria, Giordano + com dor contínua [C]"],
          ["Apendicite / diverticulite", "Dor que migra, febre, peritonismo [C]"],
          ["Gravidez ectópica / torção ovariana", "Atraso menstrual, β-hCG; dor pélvica súbita [C]"],
          ["Torção testicular", "Dor escrotal, testículo alto [C]"],
          ["Cólica biliar / pancreatite", "Hipocôndrio direito/epigástrio, pós-prandial [C]"],
          ["Herpes-zóster pré-eruptivo, lombalgia mecânica", "Dor em faixa ou que muda com o movimento [C]"]
        ]}}
      ]},
      {t: "Decidir e tratar", b: [
        {fluxo: [
          {t: "Cólica lombar com irradiação"},
          {t: "Febre, anúria, rim único, gestante, sinais de AAA?", ramos: [
            {r: "Sim", n: [{t: "Urgência", k: "stop"}]},
            {r: "Não", n: [{t: "AINE IV/IM ± dipirona; antiemético; EAS e β-hCG se aplicável"}]}
          ]},
          {t: "Dor controlada?", ramos: [
            {r: "Não", n: [{t: "Urgência (dor refratária)", k: "stop"}]},
            {r: "Sim", n: [{t: "Imagem (TC sem contraste ou USG) pela regulação; analgesia em casa"}]}
          ]},
          {t: "Cálculo ureteral ≤ 10 mm → alfabloqueador até 4 semanas; repetir imagem", k: "ok"},
          {t: "> 10 mm, não eliminado em 4 semanas, renal sintomático, coraliforme ou vesical → urologia", k: "warn"},
          {t: "≥ 2 episódios, múltiplos cálculos ou história familiar forte → avaliação metabólica (Quadro 5)", k: "q"}
        ], nota: "TelessaúdeRS Urologia 2023, Protocolo 5 e Quadro 5 [F]; analgesia: Cochrane/EAU [C]."},
        {trio: {ideal: "Tansulosina 0,4 mg/dia para cálculo ureteral distal de 5–10 mm (maior eliminação).", sus: "REMUME: doxazosina 2 mg; o protocolo do TelessaúdeRS aceita doxazosina 4 mg/dia como alfabloqueador da terapia expulsiva.", ponte: "Doxazosina 4 mg (2 comprimidos de 2 mg) à noite, com orientação sobre hipotensão postural; tansulosina por compra se houver tontura."}},
        {ul: ["Hidratação habitual, sem forçar volume na crise [C].", "Avaliação metabólica (Quadro 5): composição do cálculo, EAS, eletrólitos, creatinina, cálcio, albumina, fósforo, ácido úrico, 25-OH-vitamina D, TSH (PTH se cálcio alto/limítrofe) e urina de 24 h em 2 ocasiões [F]."]},
        {ref: ["tsrs_uro2023", "eau_litiase", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["tsrs_uro2023"]});
  const cr = get("colica-renal");
  if (cr && cr.idealsus) cr.idealsus.sus = "Analgesia (AINE IV/oral, dipirona) disponível em Betim. Tansulosina não consta na RENAME nem na REMUME; doxazosina 2 mg consta, e o TelessaúdeRS (2023) aceita doxazosina 4 mg/dia como alternativa na terapia expulsiva.";

  // ── 6. Condiloma
  G("condiloma", {
    urg: "Lesão **pigmentada, ulcerada, endurecida, que sangra** ou que não responde: **biópsia** [C]. Verruga anogenital em **criança**: considerar **abuso sexual** e acionar a rede de proteção [F].",
    resumo: "Pápulas ou vegetações em **couve-flor**, únicas ou múltiplas, achatadas ou papulosas, na região anogenital (HPV 6 e 11) [F/C]. Tratamento ambulatorial (**ATA 80–90%**, podofilina, crioterapia, eletrocauterização, exérese) ou domiciliar (**imiquimode, podofilotoxina**) [F]. **Gestante: só ATA, crioterapia ou exérese** [F]. Recorrência é comum; **testes de HPV não são indicados** [F]. Examinar parcerias e testar outras IST [F].",
    secoes: [
      {t: "Diferenciais", b: [
        {tab: {h: ["Hipótese", "Pistas"], r: [
          ["Pápulas perladas do pênis", "Fileiras regulares na coroa da glande – normais [C]"],
          ["Papilomatose vestibular", "Projeções simétricas, finas, no vestíbulo – normal [C]"],
          ["Molusco contagioso", "Pápulas umbilicadas peroladas [C]"],
          ["Condiloma plano (sífilis secundária)", "Placas úmidas, lisas, perianais – VDRL/teste rápido [C]"],
          ["Neoplasia intraepitelial / CEC", "Pigmentada, ulcerada, endurecida – biópsia [C]"]
        ]}}
      ]},
      {t: "Decidir e tratar", b: [
        {fluxo: [
          {t: "Verruga anogenital sugestiva de HPV"},
          {t: "Caso especial: gestante, criança, imunossuprimido, grande volume, disseminada?", ramos: [
            {r: "Sim", n: [{t: "Referenciar (gestante pode fazer ATA/crioterapia)", k: "warn"}]},
            {r: "Não", n: [{t: "Escolher com a pessoa"}]}
          ]},
          {t: "Tratamento", ramos: [
            {r: "Na unidade", n: [{t: "ATA 80–90% semanal; podofilina 10–25%; crioterapia; eletrocauterização; exérese", k: "ok"}]},
            {r: "Em casa", n: [{t: "Imiquimode 5% 3×/semana até 16 semanas ou podofilotoxina 2×/dia 3 dias + 4 de pausa, até 4 ciclos", k: "ok"}]}
          ]},
          {t: "Novas lesões ou sem melhora → mudar a terapia e manter seguimento", k: "warn"}
        ], nota: "PCDT IST 2022, Figura 16 e seção 11.5 [F]."},
        {tab: {h: ["Método", "Observações (PCDT IST 2022)"], r: [
          ["ATA 80–90%", "Pequena quantidade só na lesão até branquear; semanal; pode na gestação; nunca para uso domiciliar [F]"],
          ["Podofilina 10–25%", "Semanal; máx. 0,5 mL e 10 cm² por sessão; contraindicada na gestação [F]"],
          ["Crioterapia", "Atóxica, pode na gestação; boa para lesões isoladas e queratinizadas [F]"],
          ["Imiquimode 5%", "Menos irritação que a podofilotoxina, porém tratamento mais longo; não usar na gestação [F]"],
          ["Exérese tangencial", "Lesões volumosas/pedunculadas; permite histologia [F]"]
        ]}, nota: "REMUME: nenhum desses produtos consta; a RENAME tem podofilotoxina, imiquimode e podofilina [F]. ATA e crioterapia em Betim: [NV]."},
        IST_GERAL,
        {ref: ["pcdt_ist2022", "tsrs_derm2023", "cdc_ist", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["pcdt_ist2022", "tsrs_derm2023"]});

  // ── 7. Hematúria
  G("hematuria", {
    urg: "Hematúria macroscópica com **retenção por coágulos**, instabilidade, sepse urinária ou dor de difícil controle: **urgência** [F]. Hematúria com **edema, HAS, oligúria e creatinina subindo** (glomerulonefrite rapidamente progressiva): urgência [C].",
    resumo: "Primeiro **descartar causas benignas**: ITU, febre, exercício intenso, trauma, menstruação [F]. Microscópica = **≥ 3 hemácias/campo**, **confirmada em 2 EAS com 6 semanas** de intervalo [F]. Separar **glomerular** (dismorfismo, acantócitos, proteinúria, cilindros hemáticos, creatinina alta) → nefrologia de **não glomerular** → urologia conforme **fatores de risco para neoplasia urotelial** [F]. Anticoagulante não explica hematúria: investigar igual [C].",
    secoes: [
      {t: "Classificar", b: [
        {tab: {h: ["Achado glomerular (Quadro 11)", "Fatores de risco para neoplasia urotelial"], r: [
          ["Hemácias dismórficas (> 70% = glomerular; < 30% = não glomerular; 30–70% = indeterminado) [F]", "Mulher ≥ 50 anos ou homem ≥ 40 anos [F]"],
          ["Acantócitos [F]", "Tabagismo atual ou prévio [F]"],
          ["Proteinúria [F]", "Sintomas irritativos sem ITU, cistite crônica [F]"],
          ["Cilindros hemáticos [F]", "Radioterapia pélvica; sonda vesical [F]"],
          ["Creatinina/ureia elevadas [F]", "Exposição a corantes, borracha, couro, tintas; pintores, mecânicos, cabeleireiros, caminhoneiros [F]"],
          ["História familiar de nefrite hereditária ou rins policísticos [F]", "—"]
        ]}, nota: "TelessaúdeRS Urologia 2023, Protocolo 8 e Quadro 11 [F]."}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Hematúria"},
          {t: "Coágulos com retenção, instabilidade, sepse, dor intratável?", ramos: [
            {r: "Sim", n: [{t: "Urgência", k: "stop"}]},
            {r: "Não", n: [{t: "Afastar ITU, exercício, menstruação, trauma; tratar e repetir EAS"}]}
          ]},
          {t: "Tipo", ramos: [
            {r: "Macroscópica com coágulos", n: [{t: "Urologia", k: "warn"}]},
            {r: "Macroscópica sem coágulos", n: [{t: "Achado glomerular? Sim → nefrologia; não → urologia", k: "warn"}]},
            {r: "Microscópica (2 EAS / 6 semanas)", n: [{t: "Dismorfismo, creatinina, proteinúria/creatininúria, USG"}]}
          ]},
          {t: "Microscópica não glomerular: com fator de risco → urologia; sem fator de risco → repetir em 6–12 meses e encaminhar se persistir", k: "q"}
        ], nota: "TelessaúdeRS Urologia 2023, Protocolo 8 [F]."},
        {ref: ["tsrs_uro2023", "aua_hematuria"]}
      ]}
    ]
  }, {fontes: ["tsrs_uro2023"]});

  // ── 8. Herpes genital
  G("herpes-genital", {
    urg: "Retenção urinária, sinais de meningite, lesões disseminadas, imunossuprimido com lesões extensas (aciclovir IV) ou gestante no fim da gestação com lesão ativa: **urgência/obstetrícia** [F/C].",
    resumo: "**Vesículas agrupadas e dolorosas** que viram **úlceras rasas**, com ardor ou formigamento antes (pródromo), adenopatia inguinal dolorosa; o 1º episódio tem febre e mal-estar [C/F]. Toda úlcera genital: **teste de sífilis** [F]. **Aciclovir** o mais cedo possível; recidiva de preferência no pródromo [F]. **≥ 6 episódios/ano**: supressão [F]. Não há associação entre herpes genital e câncer [F].",
    secoes: [
      {t: "Úlcera genital (Figura 14)", b: [
        {fluxo: [
          {t: "Úlcera genital: anamnese e exame"},
          {t: "IST como causa provável?", ramos: [
            {r: "Não", n: [{t: "Investigar outras causas (trauma, Behçet, farmacodermia, neoplasia)", k: "q"}]},
            {r: "Sim", n: [{t: "Laboratório disponível?"}]}
          ]},
          {t: "Sem laboratório", ramos: [
            {r: "Vesículas ativas", n: [{t: "Tratar herpes genital", k: "ok"}]},
            {r: "Sem vesículas", n: [{t: "Tratar sífilis primária e cancroide (penicilina benzatina 2,4 milhões + azitromicina 1 g)", k: "warn"}]},
            {r: "> 4 semanas", n: [{t: "Pensar em donovanose, LGV, neoplasia – biópsia/referência", k: "warn"}]}
          ]},
          {t: "Persiste após 14 dias → referenciar", k: "warn"}
        ], nota: "PCDT IST 2022, Figura 14 e Quadro 39 [F]."}
      ]},
      {t: "Tratar", b: [
        {tab: {h: ["Situação", "Aciclovir (Quadro 38)"], r: [
          ["1º episódio", "400 mg 3×/dia ou 200 mg 5×/dia por 7–10 dias (prolongar se não cicatrizou) [F]"],
          ["Recidiva", "400 mg 3×/dia ou 800 mg 2×/dia por 5 dias, iniciando no pródromo [F]"],
          ["Supressão (≥ 6 episódios/ano)", "400 mg 2×/dia por até 6 meses, podendo chegar a 2 anos; função renal e hepática periódicas [F]"],
          ["Imunossuprimido com lesões extensas", "5–10 mg/kg IV 8/8 h [F]"],
          ["Gestante", "Tratar o 1º episódio em qualquer trimestre; supressão a partir de 36 semanas com 400 mg 3×/dia se primoinfecção na gestação ou recidivas frequentes [F]"]
        ]}, nota: "Compressas de soro ou degermante para higiene; analgésico; retorno em 1 semana [F]. Valaciclovir não consta no PCDT nem na REMUME (opção de compra com 2 tomadas ao dia) [F/C]."},
        IST_GERAL,
        {ref: ["pcdt_ist2022", "bvs_herpes", "cdc_ist", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["pcdt_ist2022"], mud: "fluxograma de úlcera genital (Figura 14 do PCDT IST 2022) e doses do Quadro 38 conferidas no texto integral"});
  const hg = get("herpes-genital");
  if (hg) hg.nv = (hg.nv || []).filter(x => !/conferido em fonte voltada a gestantes/.test(x));

  // ── 9. Incontinência urinária
  G("incontinencia", {
    urg: "Retenção urinária aguda, déficit neurológico novo (cauda equina, medula), hematúria ou perda de função renal com resíduo alto: **urgência/encaminhamento** [F/C].",
    resumo: "Classificar pela história: **esforço** (tosse, espirro, exercício), **urgência** (vontade súbita, não dá tempo), **mista**, **transbordamento** (gotejamento, jato fraco, bexiga palpável) e **funcional** (mobilidade, cognição) [C]. **Tratamento clínico** para todas: estilo de vida, **exercícios do assoalho pélvico** e **treinamento vesical** [F]. Sem resposta em **3 meses** ou incontinência complicada → urologia/ginecologia [F].",
    secoes: [
      {t: "Avaliar", b: [
        {ul: [
          "EAS/urocultura; diário miccional; glicemia; revisar medicamentos (diuréticos, alfabloqueador em mulher, sedativos, anticolinérgicos que causam retenção, IECA pela tosse) [C].",
          "Exame: prolapso, atrofia genital, toque retal (fecaloma, próstata), sensibilidade perineal, resíduo pós-miccional se houver suspeita de retenção [C].",
          "Retenção crônica = resíduo > 300 mL em 2 ocasiões por ≥ 6 meses [F]."
        ]}
      ]},
      {t: "Tratar (Quadro 2)", b: [
        {tab: {h: ["Medida", "Como"], r: [
          ["Estilo de vida", "Perder peso, reduzir cafeína e álcool, parar de fumar, tratar constipação [F]"],
          ["Exercícios de Kegel", "Contrações de 6–10 s, 8–12 repetições, 3×/dia, pelo menos 3–4 dias/semana (ideal todo dia); aprender interrompendo o jato, mas não praticar ao urinar [F]"],
          ["Treinamento vesical (urgência)", "Diário de 24 h → urinar 'pelo relógio' no menor intervalo (geralmente 1 h) → controlar a urgência (distração, respiração, contrações rápidas) → aumentar 15–30 min a cada 2–7 dias bons, até 2–4 h; melhora em até 6 semanas [F]"]
        ]}, nota: "TelessaúdeRS Urologia 2023, Quadro 2 [F]."},
        {fluxo: [
          {t: "Incontinência urinária"},
          {t: "Sinal de alarme (retenção, hematúria, neuro, ITU recorrente, dor pélvica, cirurgia/radioterapia pélvica)?", ramos: [
            {r: "Sim", n: [{t: "Incontinência complicada → urologia/ginecologia", k: "warn"}]},
            {r: "Não", n: [{t: "Tipo pela história + tratamento clínico por 3 meses"}]}
          ]},
          {t: "Urgência sem melhora → antimuscarínico (oxibutinina na REMUME; evitar em idoso frágil) ou mirabegrona (compra)", k: "q"},
          {t: "Sem resposta em 3 meses → urologia/ginecologia; fisioterapia pélvica se houver", k: "warn"}
        ], nota: "TelessaúdeRS Urologia 2023, Protocolo 1 [F]; fármacos: NICE NG123 [C]."},
        {ref: ["tsrs_uro2023", "prolapso", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["tsrs_uro2023"]});

  // ── 10. Sífilis adquirida
  G("sifilis", {
    urg: "Sintomas **neurológicos, oculares ou auditivos** (cefaleia, alteração visual, uveíte, zumbido, perda auditiva, paralisia de nervo craniano) em pessoa com sífilis: **neurossífilis** – urgência/infectologia [F]. **Gestante**: tratar no mesmo dia do teste rápido reagente [F].",
    resumo: "Benzilpenicilina benzatina é o tratamento de todas as fases e **o único que trata o feto** [F]. **Recente** (até 1 ano): 2,4 milhões UI dose única; **tardia ou duração ignorada**: 2,4 milhões UI/semana por 3 semanas [F]. Coletar o **teste não treponêmico no dia do tratamento** e repetir a cada 3 meses (mensal na gestante) [F]. Resposta adequada: **queda de 2 diluições** em 6 meses (recente) ou 12 meses (tardia) [F]. Notificação **semanal** (adquirida, gestante e congênita) [F].",
    secoes: [
      {t: "Reconhecer as fases", b: [
        {tab: {h: ["Fase", "Achados"], r: [
          ["Primária", "Cancro duro: úlcera única, indolor, base limpa e endurecida, 10–90 dias após o contato; adenopatia [C]"],
          ["Secundária", "6 semanas a 6 meses: exantema (roséola), lesões palmoplantares acobreadas, condiloma plano, alopecia em clareira, febre, linfonodos [C]"],
          ["Latente", "Sem sinais; recente se < 1 ano, tardia se > 1 ano ou duração ignorada [F/C]"],
          ["Terciária", "Gomas, aortite, tabes, demência – anos depois [C]"]
        ]}},
        {tab: {h: ["Treponêmico (TR)", "Não treponêmico (VDRL)", "Interpretação (Quadro 14)"], r: [
          ["Reagente", "Reagente", "Sífilis (estadiar e tratar) ou cicatriz sorológica se tratamento prévio documentado com queda ≥ 2 diluições [F]"],
          ["Reagente", "Não reagente", "Sífilis recente/latente ou cicatriz, ou falso reagente – 3º teste treponêmico de outra metodologia; sem ele, decidir por exposição, sintomas e tratamento prévio [F]"]
        ]}, nota: "Na gestante, o TR reagente basta para tratar no mesmo dia, sem esperar o VDRL [F/C]."}
      ]},
      {t: "Tratar e seguir", b: [
        {tab: {h: ["Estágio (Quadro 15)", "Esquema", "Alternativa (exceto gestante)"], r: [
          ["Recente: primária, secundária, latente ≤ 1 ano", "Benzatina 2,4 milhões UI IM dose única (1,2 milhão em cada glúteo) [F]", "Doxiciclina 100 mg 12/12 h por 15 dias [F]"],
          ["Tardia: latente > 1 ano, duração ignorada, terciária", "Benzatina 2,4 milhões UI IM 1×/semana por 3 semanas (7,2 milhões) [F]", "Doxiciclina 100 mg 12/12 h por 30 dias [F]"],
          ["Neurossífilis", "Penicilina cristalina 18–24 milhões UI/dia IV por 14 dias – hospital [F]", "Ceftriaxona 2 g IV/dia por 10–14 dias [F]"]
        ]}, nota: "**Intervalo entre doses:** fora da gestação, até 14 dias (PCDT 2022) [F]; na gestante, até **9 dias** (NT 14/2023, que ampliou os 7 dias do PCDT 2022) – passou disso ou perdeu dose, reiniciar [F]. Na sífilis recente da gestante, alguns especialistas dão uma 2ª dose de 2,4 milhões após 1 semana (PCDT) [F]."},
        {tab: {h: ["Seguimento (seção 5.7)", ""], r: [
          ["Teste não treponêmico", "No 1º dia do tratamento e depois a cada 3 meses (mensal na gestante), sempre pelo mesmo método (VDRL com VDRL) [F]"],
          ["Resposta adequada", "Não reagente ou queda de 2 diluições (ex.: 1:64 → 1:16) em até 6 meses (recente) ou 12 meses (tardia) [F]"],
          ["Retratar", "Sem queda de 2 diluições no prazo, aumento de 2 diluições ou mais, ou sinais/sintomas que persistem ou voltam – investigar reinfecção e neurossífilis [F]"],
          ["Cicatriz sorológica", "Títulos baixos estáveis após tratamento adequado com queda prévia ≥ 2 diluições, sem nova exposição – não é falha [F]"]
        ]}},
        {fluxo: [
          {t: "Teste rápido reagente"},
          {t: "Gestante?", ramos: [
            {r: "Sim", n: [{t: "1ª dose de benzatina hoje + VDRL; parceria tratada", k: "warn"}]},
            {r: "Não", n: [{t: "VDRL; estadiar pela história (último teste não reagente, lesões)"}]}
          ]},
          {t: "Sintoma neurológico, ocular ou auditivo?", ramos: [
            {r: "Sim", n: [{t: "Neurossífilis: referência", k: "stop"}]},
            {r: "Não", n: [{t: "Tratar pelo estágio; notificar; testar HIV e hepatites; parcerias", k: "ok"}]}
          ]}
        ], nota: "PCDT IST 2022, Figura 6 [F]."},
        {ir: [["in-sifilis", "Sífilis: estadiamento e seguimento (Infectologia)"], ["herpes-genital", "Úlcera genital"]]},
        {ref: ["pcdt_ist2022", "nt14_2023", "port11211", "sp_sifilis", "betim_pn2024", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["pcdt_ist2022", "nt14_2023", "port11211"], mud: "fases, interpretação de testes (Quadro 14), esquemas do Quadro 15, critérios de resposta e retratamento (seção 5.7) e intervalo de 9 dias na gestante (NT 14/2023)"});
  const sf = get("sifilis");
  if (sf) {
    sf.nv = (sf.nv || []).filter(x => !/Doxiciclina para alérgicos/.test(x));
    if (sf.alerta) sf.alerta = sf.alerta.replace("conferir esquema e intervalo no PCDT IST vigente; intervalo máximo de 9 dias entre doses semanais (MS, 2023)", "intervalo máximo de 9 dias entre doses semanais (NT 14/2023-DATHI/SVSA/MS)");
  }

  // ── 11. Tricomoníase
  G("tricomoniase", {
    resumo: "Corrimento **amarelo-esverdeado, bolhoso**, com prurido, disúria e **colo em framboesa**; pH > 4,5 [C/F]. É IST: **tratar sempre as parcerias** e testar HIV, sífilis e hepatites [F]. **Metronidazol 2 g dose única ou 500 mg 2×/dia por 7 dias**, inclusive na gestação e lactação [F]. Pode alterar a citologia: tratar e **repetir o preventivo em 3 meses** se houver alteração [F].",
    secoes: [
      {t: "Diferenciar", b: [TAB_CORRIMENTO, FLUXO_CORRIMENTO]},
      {t: "Tratar", b: [
        {tab: {h: ["Esquema (Quadro 35)", "Observação"], r: [
          ["Metronidazol 2 g VO dose única", "PCDT: 5 comprimidos de 400 mg; em Betim só há 250 mg (8 comprimidos) [F]"],
          ["Metronidazol 500 mg 2×/dia por 7 dias", "2 comprimidos de 250 mg; nas mulheres, o esquema de 7 dias curou mais que a dose única em ECR (CDC 2021 prefere) [F/C]"],
          ["Parcerias", "Mesmo esquema, de preferência presencial [F]"]
        ]}, nota: "PVHIV em uso de ritonavir: 2 h de intervalo entre metronidazol e ritonavir [F]. Álcool: o PCDT manda evitar (efeito antabuse) [F]; o CDC 2021 deixou de exigir abstinência por falta de evidência [C]. Manter o tratamento na menstruação e suspender relações durante o tratamento [F]."},
        IST_GERAL,
        {ref: ["pcdt_ist2022", "pcdt_ist", "cdc_ist", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["pcdt_ist2022"]});

  // ── 12. Corrimento uretral
  G("uretrite", {
    urg: "Uretrite com **dor e edema escrotal** e febre (orquiepididimite com sinais de gravidade), artrite séptica ou lesões cutâneas (gonococcemia): **urgência** [C/F].",
    resumo: "Corrimento **mucopurulento**, disúria, prurido uretral [F]. Sem laboratório: tratar **gonococo + clamídia** no mesmo dia – **ceftriaxona 500 mg IM + azitromicina 1 g** (1ª opção) ou **+ doxiciclina 7 dias** (2ª opção do PCDT; preferida pelo CDC) [F]. Parcerias dos últimos 60 dias, abstinência por 7 dias e testes rápidos [F/C]. Os sintomas podem levar até 7 dias para passar [F].",
    secoes: [
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Corrimento uretral: anamnese e exame"},
          {t: "Laboratório disponível na consulta?", ramos: [
            {r: "Não", n: [{t: "Tratar clamídia e gonorreia", k: "warn"}]},
            {r: "Sim", n: [{t: "Gram: diplococos gram-negativos intracelulares → gonococo + clamídia; ausentes → clamídia (± M. genitalium/Trichomonas)", k: "ok"}]}
          ]},
          {t: "Persiste após 7 dias do fim do tratamento → reexposição? adesão? M. genitalium, Trichomonas, resistência", k: "q"}
        ], nota: "PCDT IST 2022, Figura 13 [F]."},
        {tab: {h: ["Condição (Quadro 37)", "1ª opção", "2ª opção"], r: [
          ["Sem agente identificado", "Ceftriaxona 500 mg IM + azitromicina 1 g VO [F]", "Ceftriaxona 500 mg IM + doxiciclina 100 mg 2×/dia 7 dias [F]"],
          ["Não gonocócica / clamídia", "Azitromicina 1 g dose única [F]", "Doxiciclina 100 mg 2×/dia 7 dias [F]"],
          ["Retratamento gonocócico (falha)", "Ceftriaxona 500 mg IM + azitromicina 2 g [F]", "Gentamicina 240 mg IM + azitromicina 2 g [F]"],
          ["Mycoplasma genitalium", "Azitromicina 1 g [F]", "—"],
          ["Trichomonas", "Metronidazol 500 mg 2×/dia 7 dias [F]", "Clindamicina 300 mg 2×/dia 7 dias [F]"]
        ]}, nota: "Reinfecção trata com as doses habituais; o retratamento é para falha [F]. REMUME: ceftriaxona 1 g IM, azitromicina 500 mg, doxiciclina 100 mg, gentamicina 80 mg/2 mL (3 ampolas = 240 mg), metronidazol 250 mg e clindamicina 300 mg [F]."},
        IST_GERAL,
        {ir: [["cervicite", "Cervicite (parceria)"], ["escroto-agudo", "Escroto agudo / epididimite"]]},
        {ref: ["pcdt_ist2022", "cdc_ist", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["pcdt_ist2022"], mud: "fluxograma de corrimento uretral (Figura 13) e Quadro 37 do PCDT IST 2022 conferidos no texto integral – a doxiciclina é a 2ª opção oficial"});
  const ur = get("uretrite");
  if (ur) {
    ur.nv = (ur.nv || []).filter(x => !/Quadro de doses do PCDT IST 2022 não aberto/.test(x));
    if (ur.idealsus) ur.idealsus.sus = "PCDT IST 2022 (Quadro 37): 1ª opção ceftriaxona 500 mg IM + azitromicina 1 g dose única; 2ª opção ceftriaxona + doxiciclina 7 dias. Todos disponíveis em Betim.";
  }

  // ── 13. Vaginose bacteriana
  G("vaginose", {
    resumo: "Corrimento **branco-acinzentado, fino e homogêneo**, com **odor de peixe** que piora após a relação e a menstruação; pouco prurido; **pH > 4,5** [C/F]. Não é IST clássica: **parceria não é tratada** [F]. **Metronidazol 500 mg 2×/dia por 7 dias** ou **gel vaginal 5 noites**, inclusive na gestação e lactação [F]. Recorrente: 10–14 dias e supressão [F].",
    secoes: [
      {t: "Diferenciar", b: [TAB_CORRIMENTO,
        {tab: {h: ["Critérios de Amsel (3 de 4)", ""], r: [
          ["Corrimento homogêneo, fino, branco-acinzentado", "[C]"], ["pH vaginal > 4,5", "[C]"], ["Teste das aminas positivo (odor com KOH 10%)", "[C]"], ["Clue cells na microscopia", "[C]"]
        ]}, nota: "Critérios de Amsel citados de memória [C]; o PCDT traz o escore de Nugent (Gram, Quadro 30) para laboratório [F]."},
        FLUXO_CORRIMENTO
      ]},
      {t: "Tratar", b: [
        {tab: {h: ["Situação (Quadro 34)", "Esquema"], r: [
          ["1ª opção (inclusive gestantes e lactantes)", "Metronidazol 250 mg, 2 comprimidos 2×/dia por 7 dias, ou gel vaginal 100 mg/g, 1 aplicador à noite por 5 noites [F]"],
          ["2ª opção", "Clindamicina 300 mg 2×/dia por 7 dias [F]"],
          ["Recorrente", "Metronidazol oral 10–14 dias, ou gel 10 dias seguido de ácido bórico vaginal 600 mg/dia por 21 dias e gel 2×/semana por 4–6 meses (o PCDT diz que esse regime ainda requer validação) [F]"],
          ["Puérpera", "Mesmo tratamento da gestante [F]"]
        ]}, nota: "REMUME: metronidazol 250 mg, gel vaginal 100 mg/g e clindamicina 300 mg; ácido bórico não consta (manipulado) [F/C]."},
        IST_GERAL,
        {ref: ["pcdt_ist2022", "pcdt_ist", "cdc_ist", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["pcdt_ist2022"]});
  const vb = get("vaginose");
  if (vb) vb.nv = (vb.nv || []).filter(x => !/Esquema para gestantes: conferir/.test(x));
})();
