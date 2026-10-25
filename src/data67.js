// ───────────── data67.js – v54: Guia Clínico – lote 4 (Pele, parte 1: 11 itens sem guia).
// Conferido em 25/10/2026: CAB 28 vol. II (impetigo, erisipela, herpes, escabiose, anafilaxia/urticária, queimaduras), GVS 6ª ed. rev. 2024 vol. 1
// (tétano acidental – Quadro 4; herpes-zóster), TelessaúdeRS Dermatologia 2023 (Protocolos 5, 6 e 9; Quadros 12, 13 e 16), REMUME Betim
// (arquivo do Projeto), decisão de não incorporar a vacina recombinante contra zóster (notícia do CFF, 15/01/2026).
Object.assign(FONTES, {
  gvs1_tetano: {s: "GVS 6ª ed. (2024) vol. 1 – tétano acidental, Quadro 4", t: "Ministério da Saúde. Guia de Vigilância em Saúde, 6ª ed. rev., 2024, vol. 1 – Tétano acidental, Quadro 4 (esquema de condutas profiláticas conforme o ferimento e a situação vacinal): risco mínimo = superficial, limpo, sem corpo estranho ou tecido desvitalizado; alto risco = profundo ou superficial sujo, com corpo estranho ou tecido desvitalizado, queimaduras, feridas puntiformes ou por arma branca e de fogo, mordeduras, politraumatismo e fraturas expostas. Incerta ou < 3 doses: vacinar (e SAT/IGHAT no alto risco); ≥ 3 doses com última < 5 anos: nada; 5–10 anos: reforço só no alto risco; ≥ 10 anos: reforço em ambos; SAT/IGHAT adicional no imunodeprimido, desnutrido grave ou idoso, ou se os cuidados posteriores com a ferida não forem adequados; vacina e soro em locais diferentes (norma).", f: "F", url: "https://bvsms.saude.gov.br/bvs/publicacoes/guia_vigilancia_saude_6edrev_v1.pdf"},
  gvs1_zoster: {s: "GVS 6ª ed. (2024) vol. 1 – herpes-zóster", t: "Ministério da Saúde. Guia de Vigilância em Saúde, 6ª ed. rev., 2024, vol. 1 – Herpes-zóster: dor neurálgica, parestesia e ardor antecedendo vesículas sobre base eritematosa, unilaterais, em dermátomo; cura em 2–4 semanas; torácica 53%, cervical 20%, trigêmeo 15%, lombossacra 11%; lesões na ponta e asa do nariz sugerem ramo oftálmico; VII par = síndrome de Ramsay Hunt; disseminado ou recidivante: sorologia para HIV e pesquisa de neoplasia; antiviral em até 72 h reduz a neuralgia pós-herpética; corticoide na fase aguda reduz a neurite aguda, sem alterar a NPH; NPH: capsaicina, lidocaína 5%, amitriptilina 25–75 mg, carbamazepina 100–400 mg; zóster disseminado: hospitalizar com precaução de aerossóis e contato; não é doença de notificação compulsória (norma).", f: "F", url: "https://bvsms.saude.gov.br/bvs/publicacoes/guia_vigilancia_saude_6edrev_v1.pdf"},
  cff_zoster2026: {s: "MS/CONITEC – vacina recombinante contra zóster não incorporada (jan/2026)", t: "Conselho Federal de Farmácia. Ministério da Saúde mantém vacina contra herpes-zóster fora do SUS, 15/01/2026: portaria publicada no DOU em janeiro de 2026 decide não incorporar a vacina recombinante adjuvada (avaliada para ≥ 80 anos e imunocomprometidos ≥ 18 anos) por custo-efetividade desfavorável e impacto orçamentário (cerca de R$ 1,2 bilhão/ano); prevê reavaliação (notícia; portaria não aberta).", f: "F", url: "https://site.cff.org.br/noticia/Noticias-gerais/15/01/2026/ministerio-da-saude-mantem-vacina-contra-herpes-zoster-fora-do-sus"}
});

const FOTO_PELE2 = {
  escabiose: ["Escabiose: sulco do ácaro visto de perto (a área descamativa à esquerda é escoriação)", "Michael Geary · Wikimedia Commons · domínio público"],
  zoster: ["Herpes-zóster: vesículas agrupadas sobre base eritematosa num dermátomo torácico, sem cruzar a linha média", "Fisle · Wikimedia Commons · CC BY-SA 3.0"],
  erisipela: ["Erisipela: placa eritematosa e edemaciada, unilateral, na perna", "Grook Da Oger · Wikimedia Commons · CC BY-SA 3.0"],
  paroniquia: ["Paroníquia aguda: eritema e edema da prega ungueal após cutícula arrancada", "Chris Craig · Wikimedia Commons · domínio público"],
  queimadura: ["Queimadura de 2º grau superficial por escaldadura, 2 dias depois: bolha de parede fina e eritema", "Themidget17 · Wikimedia Commons · CC BY-SA 4.0"],
  contato: ["Dermatite de contato na palma 1 dia após manusear entulho de obra úmido sem luva", "Rleffmann · Wikimedia Commons · CC BY-SA 4.0"]
};

(() => {
  const get = id => CONDICOES.find(x => x.id === id);
  const G = (id, guia, o = {}) => {
    const c = get(id); if (!c) return;
    c.guia = guia;
    if (c.evid && o.fontes) c.evid.fontes = [...new Set([...(c.evid.fontes || []), ...o.fontes])];
    (c.mudancas = c.mudancas || []).push("v54 (25/10/2026): Guia Clínico novo – " + (o.mud || "reconhecer, diferenciais, fluxograma e fontes") + ".");
    if (o.nv) c.nv = [...(c.nv || []), ...o.nv];
  };
  const P2 = (typeof FOTO_PELE2 !== "undefined") ? FOTO_PELE2 : {};
  const F1 = k => (typeof FIG === "function" && typeof FOTO !== "undefined" && FOTO[k]) ? [FIG(k)] : [];
  const F2 = (...ks) => ks.filter(k => P2[k]).map(k => ({fig: {foto: true, src: "img/pele-" + k + ".webp", leg: P2[k][0], alt: P2[k][0], fonte: P2[k][1]}}));

  // ── 1. Escabiose
  G("escabiose", {
    urg: "**Escabiose crostosa** (placas espessas e descamativas, com pouco prurido, em imunossuprimido, idoso institucionalizado ou pessoa com deficiência): carga enorme de ácaros, muito contagiosa – tratamento combinado e investigação de surto [C].",
    resumo: "**Prurido que piora à noite** + lesões em punhos, entre os dedos, cotovelos, axilas, cintura, nádegas, genitais e mamilos + **outras pessoas da casa com coceira** [F]. Diagnóstico clínico [F]. **Tratar todos os contactantes no mesmo dia**, lavar roupas de cama e toalhas, e explicar que **o prurido pode durar semanas** depois do tratamento correto [F].",
    secoes: [
      {t: "Reconhecer", b: [
        {ul: [
          "Adulto: flexuras dos punhos, interdigitais, cotovelos, axilas, cintura, nádegas, pênis e escroto, mamilos [F].",
          "Criança pequena: também face, couro cabeludo, pescoço, palmas e plantas [F].",
          "Lesões: pápulas escoriadas com crostas hemáticas, vesículas, nódulos e o **sulco** (linha de ~1 cm com vesícula na ponta, onde está a fêmea) [F].",
          "Nódulos podem persistir semanas depois da cura (reação aos restos do ácaro), sem significar falha [F]."
        ]},
        {det: {t: "Fisiopatologia", b: ["O Sarcoptes scabiei var. hominis cava túneis na camada córnea. O prurido é uma reação de hipersensibilidade tardia ao ácaro, aos ovos e às fezes e leva 3–6 semanas para surgir na primeira infestação – por isso quem mora junto pode estar infestado sem coçar ainda. Na reinfestação, aparece em 1–3 dias [C]. O ácaro sobrevive pouco fora da pele (até cerca de uma semana segundo o CAB 28) [F]."]}}
      ]},
      {t: "Critérios e diferenciais", b: [
        {tab: {h: ["Nível (IACS 2020)", "O que precisa"], r: [
          ["Confirmada", "Ácaro, ovos ou fezes na microscopia do raspado [C]"],
          ["Clínica", "Sulcos; ou lesões típicas em genitais masculinos; ou lesões típicas em distribuição típica + 2 dados da história (prurido, contato com pessoa com prurido ou lesões típicas) [C]"],
          ["Suspeita", "Lesões típicas em distribuição típica + 1 dado da história; ou lesões atípicas + 2 dados [C]"]
        ]}, nota: "Consenso IACS 2020 (citado de memória) [C]. Na APS, o diagnóstico é clínico (CAB 28) [F]."},
        {tab: {h: ["Hipótese", "O que separa"], r: [
          ["Dermatite atópica", "História pessoal de atopia, flexuras, xerose; poupa a cintura e os genitais [C]"],
          ["Prurigo / estrófulo (picadas)", "Pápulas com vesícula central em áreas expostas, surtos; família sem prurido simultâneo [C]"],
          ["Dermatite de contato", "Lesões no local do contato, sem sulcos [C]"],
          ["Foliculite", "Pústulas centradas em pelo [C]"],
          ["Prurido sem lesão primária", "Colestase, DRC, tireoide, ferropenia, linfoma, fármacos [C]"]
        ]}}
      ]},
      {t: "Decidir e tratar", b: [
        {fluxo: [
          {t: "Prurido noturno + distribuição típica ± contactantes com prurido"},
          {t: "Placas crostosas, imunossupressão ou surto em instituição?", ramos: [
            {r: "Sim", n: [{t: "Escabiose crostosa/surto: discutir com a vigilância e o especialista", k: "stop"}]},
            {r: "Não", n: [{t: "Tratar o caso e **todos os contactantes no mesmo dia**"}]}
          ]},
          {t: "Escolha", ramos: [
            {r: "Gestante, lactante, < 15 kg", n: [{t: "Permetrina 5% (compra)", k: "warn"}]},
            {r: "Demais", n: [{t: "Ivermectina 200 mcg/kg (REMUME) ou permetrina 5%", k: "ok"}]}
          ]},
          {t: "Roupas de cama e toalhas: lavar e passar a ferro; o que não lavar, fechar em saco plástico por 1 semana", k: "ok"},
          {t: "Prurido por semanas é esperado: anti-histamínico e corticoide tópico; lesões novas após 2–4 semanas → retratar e rever contactantes", k: "warn"}
        ], nota: "CAB 28 vol. II [F]."},
        {tab: {h: ["Opção (CAB 28)", "Como usar", "Observação"], r: [
          ["Permetrina 5%", "Pescoço aos pés por 8–12 h, inclusive entre os dedos e sob as unhas [F]", "Droga de escolha no CAB 28 [F]; não está na REMUME [F]"],
          ["Ivermectina", "200 mcg/kg, repetir em 7 dias [F]", "≥ 5 anos ou 15 kg; contraindicada na gestação e lactação [F]; REMUME 6 mg [F]"],
          ["Enxofre 5% em vaselina", "3 noites, remover no banho a cada 24 h [F]", "Opção em < 3 meses e gestantes (manipulado) [F]"],
          ["Benzoato de benzila 25%", "3 dias [F]", "Menos eficaz e irritante [F]"]
        ]}, nota: "Divergência: o CAB 28 diz que a permetrina 5% não precisa ser repetida; a receita do app repete em 7 dias, como fazem diretrizes internacionais, porque o produto não mata todos os ovos [C]. Volta à creche/escola 1 dia após o fim do tratamento [F]."},
        {trio: {ideal: "Permetrina 5% para todos que não podem usar ivermectina (gestantes, lactantes, < 15 kg).", sus: "REMUME Betim: ivermectina 6 mg; a permetrina está na RENAME, mas não na REMUME.", ponte: "Ivermectina para a família quando possível; permetrina por compra (ou enxofre manipulado) para os demais."}},
        ...F2("escabiose"),
        {ref: ["cab28", "rename", "remume"]}
      ]}
    ]
  });

  // ── 2. Impetigo
  G("impetigo", {
    urg: "Recém-nascido, febre com toxemia, celulite, ou bolhas extensas com pele que descola em criança pequena (síndrome da pele escaldada estafilocócica): **urgência** [C]. Edema, urina escura ou HAS 1–3 semanas depois: **glomerulonefrite pós-estreptocócica** [C].",
    resumo: "Infecção superficial por **S. aureus** e **estreptococo do grupo A**, mais comum em crianças, sobre escoriações, picadas e eczema [F]. **Não bolhoso**: vesículas e pústulas que viram **crostas cor de mel**; **bolhoso** (S. aureus): bolhas flácidas [F]. Lesão localizada: limpeza + antibiótico tópico; disseminada ou com comprometimento geral: oral – **cefalexina** se houver suspeita de estafilococo [F].",
    secoes: [
      {t: "Reconhecer e diferenciar", b: [
        {tab: {h: ["Forma", "Como é"], r: [
          ["Não bolhoso (70% dos casos) [C]", "Pápula → vesícula/pústula → crosta melicérica em face e extremidades [F]"],
          ["Bolhoso", "Bolhas flácidas, mais duradouras, com restos de bolha na periferia; S. aureus [F]"],
          ["Ectima", "Úlcera com crosta escura, mais profunda, em pernas; deixa cicatriz – sempre antibiótico oral [C]"]
        ]}},
        {tab: {h: ["Hipótese", "O que separa"], r: [
          ["Herpes simples", "Vesículas agrupadas que recorrem no mesmo lugar, dor/ardor antes [F/C]"],
          ["Eczema impetiginizado", "Placas eczematosas de base com crostas sobrepostas – tratar os dois [C]"],
          ["Tinea", "Borda ativa descamativa, crescimento lento [C]"],
          ["Varicela", "Lesões em fases diferentes, febre, tronco e couro cabeludo [C]"],
          ["Picadas de inseto", "Pápulas pruriginosas em áreas expostas – porta de entrada frequente [C]"]
        ]}},
        ...F1("impetigo")
      ]},
      {t: "Decidir e tratar", b: [
        {fluxo: [
          {t: "Crostas melicéricas ou bolhas flácidas"},
          {t: "RN, toxemia, celulite ou pele escaldada?", ramos: [
            {r: "Sim", n: [{t: "Urgência", k: "stop"}]},
            {r: "Não", n: [{t: "Extensão?"}]}
          ]},
          {t: "Extensão", ramos: [
            {r: "Poucas lesões", n: [{t: "Limpar com água e sabão 2–3×/dia, amolecer crostas com vaselina + antibiótico tópico", k: "ok"}]},
            {r: "Disseminado / comprometimento geral / bolhoso múltiplo / ectima", n: [{t: "Antibiótico oral (cefalexina)", k: "warn"}]}
          ]},
          {t: "Afastar da escola até 24 h de antibiótico; unhas curtas; toalhas separadas", k: "ok"}
        ], nota: "CAB 28 vol. II [F]; afastamento e ectima [C]."},
        {tab: {h: ["Antibiótico (CAB 28)", "Adulto", "Criança"], r: [
          ["Cefalexina (preferir se estafilococo)", "250–500 mg 4×/dia, 7 dias [F]", "25–50 mg/kg/dia, 7 dias [F]"],
          ["Penicilina benzatina", "1.200.000 UI IM dose única [F]", "50.000 UI/kg, máx. 900.000 UI se < 27 kg [F]"],
          ["Eritromicina", "250–500 mg 4×/dia, 7 dias [F]", "30–50 mg/kg/dia, 7 dias [F]"],
          ["Tópicos", "Neomicina, mupirocina ou ácido fusídico após remover as crostas [F]", "Mupirocina 3×/dia teve eficácia semelhante à eritromicina oral nos casos leves a moderados [F]"]
        ]}, nota: "A benzatina e a eritromicina não cobrem bem o estafilococo resistente; o CAB 28 manda preferir a cefalexina [F]. A neomicina é listada pelo CAB 28, mas tem evidência mais fraca e mais dermatite de contato que mupirocina/ácido fusídico (Cochrane) [C]. Nenhum antibiótico tópico está na REMUME [F]."},
        {ref: ["cab28", "idsa_pele", "rename", "remume"]}
      ]}
    ]
  });

  // ── 3. Herpes-zóster
  G("zoster", {
    urg: "Lesões na **ponta ou na asa do nariz** (ramo oftálmico – sinal de Hutchinson), olho vermelho ou dor ocular: oftalmologia **no mesmo dia** [F/C]. Paralisia facial com lesões na orelha (Ramsay Hunt), **zóster disseminado** ou imunossuprimido grave: urgência (o disseminado é internado com precaução de aerossóis e contato) [F].",
    resumo: "Dor, ardor ou parestesia por alguns dias e depois **vesículas agrupadas sobre base eritematosa, unilaterais, num dermátomo**, que não cruzam a linha média [F]. **Antiviral em até 72 h** reduz dor aguda e neuralgia pós-herpética [F]. Zóster **disseminado ou recidivante**: pedir **sorologia para HIV** e pensar em neoplasia [F]. Não é de notificação compulsória [F].",
    secoes: [
      {t: "Reconhecer", b: [
        {ul: [
          "Distribuição: torácica 53%, cervical 20%, trigêmeo 15%, lombossacra 11% [F].",
          "Evolução: vesículas em 2–4 dias, crostas e cura em 2–4 semanas; manchas e cicatrizes podem persistir [F].",
          "Fase pré-eruptiva (dor sem lesão) imita IAM, cólica biliar ou renal, radiculopatia [C].",
          "Contagioso por contato com as vesículas para quem nunca teve varicela (causa varicela, não zóster) – cobrir as lesões [C]."
        ]},
        {det: {t: "Fisiopatologia", b: ["Depois da varicela, o vírus fica latente no gânglio sensitivo. Quando a imunidade celular cai (idade > 50–60 anos, imunossupressão, estresse), ele reativa e desce pelo nervo até a pele do dermátomo correspondente. A inflamação do nervo explica a dor, que pode persistir como neuralgia pós-herpética [F/C]."]}},
        ...F2("zoster")
      ]},
      {t: "Diferenciais", b: [
        {tab: {h: ["Hipótese", "O que separa"], r: [
          ["Herpes simples zosteriforme", "Recorre no mesmo lugar, menos dor, jovem [C]"],
          ["Dermatite de contato", "Lesões lineares/geométricas, prurido em vez de dor, sem dermátomo [C]"],
          ["Impetigo bolhoso", "Crostas melicéricas, sem dor neural [C]"],
          ["Picadas de inseto", "Pápulas pruriginosas dispersas [C]"],
          ["Antes das lesões", "IAM, colecistite, cólica renal, hérnia de disco – examinar e reavaliar [C]"]
        ]}}
      ]},
      {t: "Decidir e tratar", b: [
        {fluxo: [
          {t: "Vesículas agrupadas em dermátomo, com dor"},
          {t: "Oftálmico, Ramsay Hunt, disseminado ou imunossuprimido grave?", ramos: [
            {r: "Sim", n: [{t: "Mesmo dia (oftalmo) / urgência", k: "stop"}]},
            {r: "Não", n: [{t: "≤ 72 h, ou lesões novas surgindo, ou > 50 anos, ou dor intensa?"}]}
          ]},
          {t: "Antiviral", ramos: [
            {r: "Sim", n: [{t: "Aciclovir 800 mg 5×/dia 7–10 dias (REMUME) ou valaciclovir 1 g 3×/dia 7 dias", k: "warn"}]},
            {r: "Não", n: [{t: "Analgesia e cuidados locais", k: "ok"}]}
          ]},
          {t: "Analgesia escalonada; recidivante ou disseminado → HIV e pesquisa de neoplasia", k: "ok"},
          {t: "Dor > 4–6 semanas após as lesões = neuralgia pós-herpética", k: "warn"}
        ], nota: "GVS 2024 [F]; doses: CAB 28 vol. II [F]."},
        {tab: {h: ["Fase", "Opções"], r: [
          ["Dor aguda", "Dipirona/paracetamol; associar opioide fraco (codeína) se moderada [F]; corticoide junto com o antiviral reduz a neurite aguda, sem mudar a NPH, se não houver contraindicação (HAS, DM, úlcera) [F]"],
          ["Neuralgia pós-herpética", "Amitriptilina 25–75 mg, carbamazepina 100–400 mg, lidocaína 5% e capsaicina tópicas [F]; gabapentina é citada pelo CAB 28 [F]"]
        ]}, nota: "Amitriptilina e carbamazepina estão na REMUME; gabapentina, lidocaína adesivo e capsaicina, não [F]. Ajuste renal de aciclovir e valaciclovir na aba Prescrição [NV]."},
        {trio: {ideal: "Vacina recombinante adjuvada contra zóster para ≥ 50 anos e imunocomprometidos (reduz zóster e NPH).", sus: "Não incorporada: portaria de janeiro de 2026 (CONITEC avaliou ≥ 80 anos e imunocomprometidos ≥ 18 anos; custo-efetividade desfavorável).", ponte: "Informar a opção na rede privada a quem tem alto risco e pode pagar; seguir a vacina contra varicela do calendário."}},
        {ref: ["gvs1_zoster", "cab28", "cff_zoster2026", "zoster_ecr", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["gvs1_zoster", "cab28", "cff_zoster2026"], mud: "dermátomos, sinais de urgência (Hutchinson, Ramsay Hunt, disseminado), HIV no recidivante, NPH e vacina recombinante não incorporada (jan/2026)", nv: ["Portaria de não incorporação da vacina recombinante contra zóster (jan/2026): conferir número no DOU."]});
  const z = get("zoster");
  if (z) z.nv = (z.nv || []).filter(x => !/vacina recombinante contra zoster no SUS\/CRIE: não verificada/.test(x));

  // ── 4. Celulite e erisipela
  G("celulite", {
    urg: "**Dor desproporcional ao achado**, bolhas hemorrágicas, necrose, crepitação, anestesia da pele, progressão em horas, hipotensão ou confusão: **fasciíte necrotizante** – urgência cirúrgica [C].",
    resumo: "**Erisipela**: placa vermelha, quente e dolorosa, de **borda nítida e elevada**, aspecto de casca de laranja, de instalação rápida, quase sempre na perna, pelo estreptococo do grupo A [F]. **Celulite**: mais profunda, de bordas imprecisas [C]. É **unilateral**: vermelhidão nas duas pernas costuma ser dermatite de estase [C]. Porta de entrada mais comum: **micose interdigital** [F].",
    secoes: [
      {t: "Reconhecer", b: [
        {ul: [
          "Fatores locais: insuficiência venosa, linfedema, intertrigo; sistêmicos: obesidade, diabetes, HAS, fumo, álcool [F].",
          "Hemocultura raramente positiva; o diagnóstico é clínico [F].",
          "Purulenta (com abscesso ou pus) → pensar em S. aureus e drenar; não purulenta → estreptococo [C]."
        ]},
        {det: {t: "Fisiopatologia", b: ["Bactérias entram por uma fissura (micose entre os dedos, úlcera, picada) e se espalham pela derme (erisipela, com envolvimento linfático) ou pelo subcutâneo (celulite). Edema crônico e linfedema dificultam a defesa local e explicam a recorrência no mesmo lugar [F/C]."]}},
        ...F2("erisipela")
      ]},
      {t: "Diferenciais", b: [
        {tab: {h: ["Hipótese", "O que separa"], r: [
          ["Dermatite de estase", "Bilateral, crônica, prurido, sem febre, pigmentação ocre [C]"],
          ["TVP", "Edema da panturrilha, sem placa bem demarcada (pode coexistir) – Wells [C]"],
          ["Gota / artrite séptica", "Centrada em articulação, dor à mobilização [C]"],
          ["Dermatite de contato", "Prurido, vesículas, local do contato [C]"],
          ["Reação local a picada", "Prurido, ponto central, < 48 h [C]"],
          ["Lipodermatoesclerose", "Endurecimento crônico em 'garrafa invertida' [C]"]
        ]}}
      ]},
      {t: "Decidir e tratar", b: [
        {fluxo: [
          {t: "Placa eritematosa, quente, dolorosa, unilateral"},
          {t: "Sinais de fasciíte ou sepse?", ramos: [
            {r: "Sim", n: [{t: "Urgência", k: "stop"}]},
            {r: "Não", n: [{t: "Coleção flutuante?"}]}
          ]},
          {t: "Pus", ramos: [
            {r: "Sim", n: [{t: "Drenar (ver Abscesso)", k: "warn"}]},
            {r: "Não", n: [{t: "Antibiótico oral para estreptococo; demarcar a borda; elevar o membro", k: "ok"}]}
          ]},
          {t: "Reavaliar em 48–72 h (a borda pode crescer nas primeiras 24 h); sem melhora → rever diagnóstico ou via", k: "warn"},
          {t: "Tratar a porta de entrada e o edema para evitar recorrência", k: "ok"}
        ], nota: "CAB 28 vol. II [F]; IDSA 2014 [C]."},
        {tab: {h: ["Antibiótico (CAB 28)", "Adulto", "Criança"], r: [
          ["Cefalexina (preferir se estafilococo)", "250–500 mg 4×/dia, 7 dias [F]", "25–50 mg/kg/dia [F]"],
          ["Penicilina benzatina", "1.200.000 UI IM [F]", "50.000 UI/kg, máx. 900.000 UI se < 27 kg [F]"],
          ["Penicilina procaína", "400.000 UI IM 2×/dia por 10 dias [F]", "25.000–50.000 UI/kg/dia [F]"],
          ["Eritromicina", "250–500 mg 4×/dia, 10 dias [F]", "30–50 mg/kg/dia [F]"],
          ["Alergia à penicilina", "Clindamicina 300 mg 6/6 h (REMUME) [F/C]", "—"]
        ]}, nota: "Cinco dias bastam se houver melhora clara (IDSA) [C]. Cobertura extra para MRSA não melhora a celulite não purulenta (ECR) [C]."},
        {ul: ["Recorrência: meias de compressão, elevação, tratar macerações interdigitais (CAB 28) [F]; profilaxia com penicilina em quem tem 3–4 episódios/ano apesar disso (IDSA) [C]."]},
        {ir: [["tinea", "Tinea pedis (porta de entrada)"], ["abscesso", "Abscesso"], ["tvp", "TVP"]]},
        {ref: ["cab28", "idsa_pele", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["cab28"]});

  // ── 5. Dermatofitose
  G("tinea", {
    resumo: "Lesão **anular com borda ativa descamativa** e centro mais claro (corporis), na virilha poupando o escroto (cruris), ou descamação e maceração entre os dedos (pedis) [C]. Tópico **2×/dia** por 1–3 semanas ou até a resolução; oral se extenso ou refratário; **couro cabeludo sempre oral** [F]. Corticoide tópico piora e mascara (tinea incógnita) [C]. Mancha com **alteração de sensibilidade** é hanseníase até prova em contrário [C].",
    secoes: [
      {t: "Reconhecer e diferenciar", b: [
        {tab: {h: ["Hipótese", "O que separa"], r: [
          ["Eczema numular", "Placas redondas sem clareamento central, exsudativas, muito pruriginosas [C]"],
          ["Pitiríase rósea", "Medalhão + lesões ovais no tronco em 'árvore de Natal', autolimitada [C]"],
          ["Psoríase", "Placas espessas com escama prateada, cotovelos, joelhos, couro cabeludo [C]"],
          ["Candidíase", "Dobras, vermelho-vivo, úmida, lesões satélites; pega o escroto [C]"],
          ["Hanseníase", "Mancha ou placa com **diminuição da sensibilidade**, sem descamação ativa [C]"],
          ["Granuloma anular", "Anel de pápulas lisas, sem escamas, dorso das mãos [C]"],
          ["Eritrasma", "Mancha marrom nas dobras, fluorescência vermelho-coral à luz de Wood [C]"]
        ]}},
        ...F1("tinea-corporis")
      ]},
      {t: "Decidir e tratar", b: [
        {fluxo: [
          {t: "Lesão anular descamativa, intertrigo ou descamação interdigital"},
          {t: "Couro cabeludo (placas com cotos de cabelo, kerion)?", ramos: [
            {r: "Sim", n: [{t: "Sempre oral (griseofulvina ou terbinafina)", k: "warn"}]},
            {r: "Não", n: [{t: "Antifúngico tópico 2×/dia até a resolução"}]}
          ]},
          {t: "Resposta", ramos: [
            {r: "Resolveu", n: [{t: "Manter 1–2 semanas após", k: "ok"}]},
            {r: "Extensa ou refratária", n: [{t: "Oral: itraconazol (REMUME) ou terbinafina (compra)", k: "warn"}]}
          ]},
          {t: "Imunocomprometido com quadro extenso ou refratário ao otimizado → dermatologia", k: "warn"}
        ], nota: "TelessaúdeRS Dermatologia 2023, Protocolo 6 e Quadro 16 [F]."},
        {tab: {h: ["Local (Quadro 16)", "Tópico", "Oral (se extenso/refratário)"], r: [
          ["Corporis / cruris", "Miconazol 2% (ou outro azol) 2×/dia, 1–3 semanas [F]", "Adulto: terbinafina 250 mg/dia 1–2 semanas ou itraconazol 200 mg/dia 1 semana; criança: terbinafina por peso ou itraconazol 3–5 mg/kg/dia (máx. 200 mg) 1 semana [F]"],
          ["Pedis / manum", "Azol 2×/dia, 1–4 semanas [F]", "Terbinafina 250 mg/dia 2 semanas; itraconazol 200 mg 2×/dia 1 semana; fluconazol 150–200 mg/semana 2–6 semanas [F]"],
          ["Capitis", "—", "Griseofulvina 20–25 mg/kg/dia (máx. 1 g) 6–12 semanas ou terbinafina 4–6 semanas [F]"]
        ]}, nota: "Cetoconazol oral: evitar (risco hepático) [F]. Itraconazol: interações (contraindicado com sinvastatina) e evitar na IC [F]. REMUME: cetoconazol 2% creme, itraconazol 100 mg e fluconazol 150 mg; terbinafina e griseofulvina não constam [F]."},
        {trio: {ideal: "Terbinafina (tópica ou oral) cura um pouco mais e em menos tempo; griseofulvina ou terbinafina na tinea capitis.", sus: "REMUME: cetoconazol creme, itraconazol e fluconazol; sem terbinafina nem griseofulvina.", ponte: "Cetoconazol creme para a maioria; itraconazol oral se extenso; tinea capitis: terbinafina por compra ou griseofulvina manipulada."}},
        {ir: [["pitiriase-versicolor", "Pitiríase versicolor"], ["pele-candidiase", "Candidíase cutânea"], ["hanseniase", "Hanseníase"]]},
        {ref: ["tsrs_derm2023", "cochrane_tinea", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["tsrs_derm2023"]});

  // ── 6. Urticária aguda
  G("urticaria", {
    urg: "Urticária ou angioedema com **dispneia, chiado, estridor, rouquidão, hipotensão, síncope ou vômitos** após exposição = **anafilaxia**: adrenalina 1 mg/mL **IM** já (adulto 0,3–0,5 mL; criança 0,01 mg/kg), repetir a cada 15 min se preciso, acionar o SAMU, deitar com as pernas elevadas e soro se hipotensão [F]. Corticoide e anti-histamínico **não tratam** a fase aguda da anafilaxia [F].",
    resumo: "Urticas (placas edematosas e pruriginosas) que **somem em menos de 24 h** e mudam de lugar; angioedema é o inchaço mais profundo (lábios, pálpebras, mãos, genitais) [F/C]. **Aguda < 6 semanas**, geralmente autolimitada: afastar a causa e usar anti-histamínico; exames não são necessários de início [F]. **Angioedema sem urticas** é outra doença (IECA, hereditário) [C].",
    secoes: [
      {t: "Reconhecer", b: [
        {ul: [
          "Gatilhos: infecções virais (a causa mais comum em crianças), medicamentos (AAS, AINE, antibióticos), alimentos, picadas, látex, frio, exercício [F/C].",
          "Lesão individual que dura **> 24 h**, dói mais do que coça ou deixa mancha arroxeada → pensar em **vasculite urticariforme** [C].",
          "Dermografismo: urtica linear ao riscar a pele [C]."
        ]},
        {det: {t: "Fisiopatologia", b: ["Mastócitos da derme liberam histamina e outros mediadores (por IgE, por ativação direta de AINE/opioides/contrastes ou por infecção). Vasodilatação e extravasamento de plasma formam a urtica; no angioedema o processo ocorre na derme profunda e no subcutâneo. O angioedema por IECA e o hereditário são mediados por **bradicinina** – sem urticas e sem resposta a anti-histamínico [C]."]}},
        ...F1("urticaria")
      ]},
      {t: "Diferenciais", b: [
        {tab: {h: ["Hipótese", "O que separa"], r: [
          ["Anafilaxia", "Pele + respiratório, cardiovascular ou gastrointestinal após exposição [F]"],
          ["Angioedema por IECA / hereditário", "Sem urticas, sem prurido; IECA em uso ou história familiar [C]"],
          ["Vasculite urticariforme", "Lesão > 24 h, dor, púrpura residual [C]"],
          ["Eritema multiforme", "Lesões em alvo fixas, mucosas; herpes ou fármaco [C]"],
          ["Picadas / prurigo", "Pápulas fixas com ponto central [C]"],
          ["Farmacodermia exantemática", "Máculas e pápulas fixas, 4–14 dias após o fármaco [C]"]
        ]}}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Urticas ± angioedema"},
          {t: "Sinal respiratório, cardiovascular ou gastrointestinal?", ramos: [
            {r: "Sim", n: [{t: "Anafilaxia: adrenalina IM agora + SAMU", k: "stop"}]},
            {r: "Não", n: [{t: "Angioedema sem urticas?"}]}
          ]},
          {t: "Angioedema isolado", ramos: [
            {r: "Sim", n: [{t: "Suspender IECA; recorrente sem causa → imunologia; via aérea em risco → urgência", k: "warn"}]},
            {r: "Não", n: [{t: "Afastar o gatilho + anti-histamínico de 2ª geração em uso regular", k: "ok"}]}
          ]},
          {t: "Sem controle → até 4× a dose (fora da bula); corticoide oral curto (3 dias) só se intensa", k: "ok"},
          {t: "> 6 semanas (≥ 2×/semana) = urticária crônica; refratária a 4 semanas de tratamento otimizado → dermatologia", k: "warn"}
        ], nota: "CAB 28 vol. II [F]; TelessaúdeRS 2023, Protocolo 9 [F]; dose quádrupla: EAACI 2022 [C]."},
        {ir: [["pele-urticaria-cronica", "Urticária crônica"], ["anafilaxia", "Anafilaxia"]]},
        {ref: ["cab28", "tsrs_derm2023", "eaaci_urt", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["cab28", "tsrs_derm2023"]});

  // ── 7. Dermatite de contato
  G("dermatite-contato", {
    resumo: "Eczema (eritema, vesículas, descamação, prurido) **no formato e no local do contato** [C]. **Irritativa** (sabão, detergente, água, solventes – mãos de quem trabalha com água) é a mais comum; **alérgica** (níquel, perfumes, borracha, tinta de cabelo, cimento, plantas, medicamentos tópicos) aparece 1–3 dias depois da exposição e pode se espalhar [C]. Afastar o agente + **corticoide tópico 2×/dia por 2–4 semanas**, com potência pelo local [F].",
    secoes: [
      {t: "Reconhecer", b: [
        {tab: {h: ["Pista do local", "Agente provável"], r: [
          ["Lóbulos, punho, umbigo", "Níquel (bijuterias, relógio, fivela) [C]"],
          ["Pálpebras, face, pescoço", "Cosméticos, esmalte (por contato com as mãos), perfume [C]"],
          ["Mãos de quem lava muito", "Irritativa; luvas de borracha (alérgica) [C]"],
          ["Mãos e antebraços de pedreiro", "Cromo do cimento – dermatose ocupacional [C]"],
          ["Pés", "Calçados (borracha, couro curtido) [C]"],
          ["Lesões lineares em áreas expostas", "Plantas; fitofotodermatose (limão + sol) [C]"],
          ["Ao redor de feridas ou úlceras", "Neomicina e outros tópicos [C]"]
        ]}},
        {det: {t: "Fisiopatologia", b: ["Irritativa: dano direto à barreira cutânea, sem memória imunológica – depende da dose e do tempo. Alérgica: hipersensibilidade tipo IV; o hapteno se liga a proteínas da pele, sensibiliza linfócitos T e, numa reexposição, a reação surge em 24–72 h, às vezes à distância [C]."]}},
        ...F2("contato")
      ]},
      {t: "Diferenciais", b: [
        {tab: {h: ["Hipótese", "O que separa"], r: [
          ["Dermatite atópica", "Desde a infância, flexuras, atopia [C]"],
          ["Dermatite seborreica", "Sulcos nasogenianos, sobrancelhas, couro cabeludo, escamas oleosas [C]"],
          ["Tinea (manum, pedis)", "Unilateral nas mãos, borda ativa; exame micológico [C]"],
          ["Psoríase", "Placas espessas, bem delimitadas, unhas [C]"],
          ["Escabiose", "Interdigitais, prurido noturno, contactantes [C]"],
          ["Eczema disidrótico", "Vesículas profundas nas laterais dos dedos e palmas [C]"]
        ]}}
      ]},
      {t: "Decidir e tratar", b: [
        {fluxo: [
          {t: "Eczema no local de contato"},
          {t: "Identificar o agente (casa, trabalho, cosméticos, tópicos)", k: "q"},
          {t: "Afastar o agente; luvas e emolientes; compressas frias se exsudativo", k: "ok"},
          {t: "Corticoide tópico 2×/dia por 2–4 semanas: baixa potência em face e dobras; média nas demais; alta nas mãos espessas", k: "ok"},
          {t: "Refratário ao tratamento otimizado ou DLQI > 10 → dermatologia (teste de contato)", k: "warn"}
        ], nota: "TelessaúdeRS Dermatologia 2023, Protocolo 5 e Quadro 13 [F]."},
        {tab: {h: ["Potência (Quadro 12)", "Exemplos"], r: [
          ["Baixa", "Dexametasona 0,1% creme (REMUME), hidrocortisona 1%, desonida 0,05% [F]"],
          ["Média", "Valerato de betametasona 0,1%, furoato de mometasona 0,1%, dipropionato de betametasona 0,05% creme [F]"],
          ["Alta", "Dipropionato de betametasona 0,05% pomada [F]"],
          ["Muito alta", "Propionato de clobetasol 0,05% [F]"]
        ]}, nota: "Só a dexametasona 0,1% creme está na REMUME [F]. Exposição no trabalho: **dermatose ocupacional é de notificação semanal** (Portaria GM/MS 11.211/2026, Anexo I) [F]; orientar o afastamento do agente e acionar o CEREST da região [NV]."},
        {ref: ["tsrs_derm2023", "port11211", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["tsrs_derm2023", "port11211"], nv: ["Fluxo do CEREST da região de Betim para dermatose ocupacional."]});

  // ── 8. Ferimento e tétano
  G("ferida", {
    urg: "Sangramento pulsátil, déficit de movimento ou de sensibilidade distal, exposição de tendão, osso ou articulação, ferida extensa de face, lábio (vermelhão), pálpebra ou orelha, ou mordedura em mão: **cirurgia/urgência** [C].",
    resumo: "Antes de anestesiar, **testar movimento, sensibilidade e perfusão** distais [C]. Limpar com soro em abundância, remover corpo estranho e tecido desvitalizado; fechar se for limpa e recente [C]. A profilaxia do **tétano** segue o **Quadro 4 do GVS 2024**: depende do **risco do ferimento** e das **doses** e do tempo desde a última [F]. Mordedura: ver também **raiva** e antibiótico [C].",
    secoes: [
      {t: "Tétano (GVS 2024, Quadro 4)", b: [
        {tab: {h: ["Vacinação prévia", "Risco mínimo: vacina", "Risco mínimo: SAT/IGHAT", "Alto risco: vacina", "Alto risco: SAT/IGHAT"], r: [
          ["Incerta ou < 3 doses", "Sim (e completar o esquema) [F]", "Não [F]", "Sim (e completar) [F]", "Sim [F]"],
          ["≥ 3 doses, última < 5 anos", "Não [F]", "Não [F]", "Não [F]", "Não [F]"],
          ["≥ 3 doses, última 5–10 anos", "Não [F]", "Não [F]", "Sim (1 reforço) [F]", "Não* [F]"],
          ["≥ 3 doses, última ≥ 10 anos", "Sim [F]", "Não [F]", "Sim (1 reforço) [F]", "Não* [F]"]
        ]}, nota: "**Risco mínimo:** superficial, limpo, sem corpo estranho ou tecido desvitalizado. **Alto risco:** profundo ou superficial sujo, corpo estranho, tecido desvitalizado, queimaduras, puntiformes, arma branca ou de fogo, mordeduras, politrauma, fratura exposta [F]. *SAT ou IGHAT também no imunodeprimido, desnutrido grave ou idoso, e quando os cuidados posteriores com a ferida não forem adequados [F]. Vacina e soro em locais diferentes [F]. Esquema para ≥ 7 anos não vacinado: 3 doses de dT com 60 dias (mínimo 30) [F]."}
      ]},
      {t: "Decidir o fechamento", b: [
        {fluxo: [
          {t: "Ferimento"},
          {t: "Estrutura nobre, sangramento arterial, face complexa?", ramos: [
            {r: "Sim", n: [{t: "Cirurgia/urgência", k: "stop"}]},
            {r: "Não", n: [{t: "Limpeza abundante + desbridamento + exploração sob anestesia (lidocaína)"}]}
          ]},
          {t: "Fechar?", ramos: [
            {r: "Limpa, recente (até 6–8 h; face até 24 h)", n: [{t: "Sutura primária / adesivo / fita", k: "ok"}]},
            {r: "Contaminada, antiga, mordedura (exceto face), puntiforme", n: [{t: "Deixar aberta ou fechamento tardio; reavaliar em 48–72 h", k: "warn"}]}
          ]},
          {t: "Tétano pelo Quadro 4; mordedura de mamífero → profilaxia da raiva", k: "ok"}
        ], nota: "Prazos de fechamento e antibiótico: prática consolidada [C]; tétano: GVS 2024 [F]."},
        {tab: {h: ["Região", "Retirada dos pontos"], r: [
          ["Face", "5 dias [C]"], ["Couro cabeludo e tronco", "7–10 dias [C]"], ["Membros", "10–14 dias [C]"], ["Sobre articulação / palma / planta", "14 dias [C]"]
        ]}},
        {ul: ["Antibiótico não é rotina; considerar em mordeduras (sobretudo de gato e em mãos), feridas muito contaminadas, fraturas expostas e imunossuprimidos – amoxicilina + clavulanato na REMUME [C/F].", "Sinais de infecção: dor crescente, calor, pus, linfangite, febre [C]."]},
        {ir: [["raiva", "Raiva – profilaxia pós-exposição"], ["queimadura", "Queimadura"]]},
        {ref: ["gvs1_tetano", "gvs_tetano", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["gvs1_tetano"], mud: "quadro de profilaxia do tétano pela 6ª ed. revisada do GVS (2024), fluxograma de fechamento e retirada de pontos"});
  const fe = get("ferida");
  if (fe) {
    (fe.rx || []).forEach(r => { if (r && typeof r === "object" && /Guia de Vigilância 2021/.test(r.titulo || "")) r.titulo = r.titulo.replace("Guia de Vigilância 2021", "GVS 2024, Quadro 4"); });
    if (fe.evid && fe.evid.resumo) fe.evid.resumo = fe.evid.resumo.replace("O quadro de profilaxia do Guia de Vigilância em Saúde", "O Quadro 4 do Guia de Vigilância em Saúde (6ª ed. rev., 2024)");
  }

  // ── 9. Queimadura
  G("queimadura", {
    urg: "Via aérea (queimadura em ambiente fechado, fuligem, rouquidão, estridor): O₂ e remoção imediata [F]. Encaminhar já: espessura parcial > 20% no adulto, > 10% na criança, > 5% abaixo de 2 anos; 3º grau > 10% no adulto ou > 2% na criança; face, mãos, pés, genitais, períneo ou grandes articulações; elétrica (inclui raio), química, inalação, trauma associado, doença de base ou necessidade social [F].",
    resumo: "Classificar **profundidade** (1º grau: só vermelhidão; 2º: bolhas e dor intensa; 3º: pele branca/acinzentada, endurecida e indolor) e **extensão** (regra dos nove; palma da mão do paciente ≈ 1%) [F]. Água fria, cobrir com tecido limpo e analgesia; **tétano**: queimadura é ferimento de alto risco [F]. Antibiótico só se houver infecção [F]. Reepitelização em cerca de 21 dias; sol evitado por 6 meses [F].",
    calcs: ["sc:scq", "sc:scqc"],
    secoes: [
      {t: "Classificar", b: [
        {tab: {h: ["Profundidade", "Aspecto", "Evolução"], r: [
          ["1º grau (superficial)", "Vermelhidão, calor, ardor, sem bolha; sol [F]", "Dias; só hidratante [C]"],
          ["2º grau (espessura parcial)", "Bolhas, edema, **dor intensa**, pode sangrar [F]", "Superficial cicatriza em até 2–3 semanas; profunda demora e pode precisar de enxerto [C]"],
          ["3º grau (espessura total)", "Branca nacarada ou acinzentada, endurecida, **indolor**, não sangra [F]", "Segunda intenção, cicatriz hipertrófica – serviço de queimados [F]"]
        ]}},
        {calc: "sc:scq"},
        {det: {t: "Lund e Browder (criança)", b: [{tab: {h: ["Área", "0–1 ano", "1–4", "5–9", "10–14", "Adulto"], r: [["Cabeça", "19%", "17%", "13%", "11%", "7%"], ["Coxa (cada)", "5,5%", "6,5%", "9%", "8,5%", "9,5%"], ["Perna (cada)", "5%", "5,5%", "–", "6%", "7%"]]}, nota: "CAB 28, Tabela 4 [F]. Demais áreas fixas: pescoço 2, tronco anterior e posterior 13 cada, braço 4, antebraço 3, mão 2,5, nádega 2,5, genitália 1, pé 3,5 [F]."}]}},
        ...F2("queimadura")
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Queimadura"},
          {t: "Critério de remoção imediata (CAB 28)?", ramos: [
            {r: "Sim", n: [{t: "Analgesia, cobrir com tecido limpo, O₂ se inalação → pronto-atendimento/queimados", k: "stop"}]},
            {r: "Não", n: [{t: "Profundidade?"}]}
          ]},
          {t: "Profundidade", ramos: [
            {r: "1º grau", n: [{t: "Água fria, hidratante, analgesia", k: "ok"}]},
            {r: "2º grau pequeno", n: [{t: "Limpar, tratar bolhas, curativo não aderente, tétano, reavaliar em 48 h", k: "warn"}]},
            {r: "3º grau", n: [{t: "Serviço de referência", k: "stop"}]}
          ]},
          {t: "Sem epitelização em 14 dias, infecção ou área funcional → referência", k: "warn"}
        ], nota: "CAB 28 vol. II [F]. Divergência: o CAB 28 manda encaminhar todo 2º grau ao pronto-atendimento no primeiro atendimento, com seguimento pela UBS na contrarreferência; o app admite manejar na UBS a queimadura de 2º grau superficial pequena, sem critério de gravidade, quando a equipe tem curativo e retorno garantidos [I]."}
      ]},
      {t: "Cuidar da ferida", b: [
        {tab: {h: ["Situação", "Conduta (CAB 28)"], r: [
          ["Bolha íntegra, < 1 h da queimadura", "Aspirar com agulha fina estéril e manter a pele como cobertura [F]"],
          ["Bolha íntegra, > 1 h", "Manter íntegra [F]"],
          ["Bolha rota", "Desbridar a pele solta [F]"],
          ["Curativo", "Limpar com clorexidina ou sabão; gaze com AGE (primário), gaze absorvente e atadura; após 48 h, sulfadiazina de prata ou, de preferência, cobertura que fique 5–7 dias; inspecionar a cada 48 h [F]"],
          ["Antibiótico", "Só se pus, celulite ao redor, edema, petéquias ou sinais sistêmicos [F]"],
          ["Após epitelizar", "Hidratante abundante com massagem, sem sol por 6 meses, vigiar cicatriz hipertrófica por 1 ano [F]"]
        ]}, nota: "Não usar pasta de dente, manteiga, café ou gelo direto [C]."},
        {ir: [["ferida", "Profilaxia do tétano"]]},
        {ref: ["cab28", "gvs1_tetano", "queimadura", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["cab28", "gvs1_tetano"], mud: "profundidade, regra dos nove com calculadoras (adulto e criança) e Lund e Browder, critérios de remoção do CAB 28, cuidado das bolhas e curativo"});

  // ── 10. Paroníquia
  G("paroniquia", {
    urg: "Polpa digital tensa e muito dolorosa (**panarício/felon**), dedo em gancho com dor à extensão e edema fusiforme (**tenossinovite flexora** – sinais de Kanavel) ou celulite que sobe pela mão: **cirurgia de mão no mesmo dia** [C].",
    resumo: "**Aguda**: dor, vermelhidão e inchaço da prega ungueal em horas a dias, após trauma (cutícula, roer unha, manicure) – S. aureus e estreptococo [C]. Sem pus: imersão morna; **com pus: drenar** – é o tratamento [C]. **Vesículas** agrupadas na ponta do dedo = **panarício herpético**: **não incisar** [C]. **Crônica** (> 6 semanas, várias unhas, quem vive com as mãos molhadas) é irritativa e tratada com proteção e corticoide tópico, não com antibiótico [C].",
    secoes: [
      {t: "Diferenciais", b: [
        {tab: {h: ["Hipótese", "O que separa"], r: [
          ["Paroníquia aguda", "Uma unha, horas a dias, dor e flutuação na prega [C]"],
          ["Panarício herpético", "Vesículas agrupadas, dor desproporcional, contato com herpes (profissionais de saúde, crianças que chupam o dedo) [C]"],
          ["Panarício (felon)", "Abscesso fechado da polpa – risco de necrose [C]"],
          ["Paroníquia crônica", "> 6 semanas, várias unhas, sem cutícula, unha distrófica [C]"],
          ["Unha encravada", "Hálux, borda lateral, tecido de granulação [C]"],
          ["Tumor subungueal (melanoma, CEC)", "Lesão persistente que não responde, pigmento na prega (Hutchinson) [C]"]
        ]}},
        ...F2("paroniquia")
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Dor e edema periungueal"},
          {t: "Vesículas agrupadas?", ramos: [
            {r: "Sim", n: [{t: "Panarício herpético: não drenar; aciclovir se precoce", k: "warn"}]},
            {r: "Não", n: [{t: "Flutuação/pus?"}]}
          ]},
          {t: "Coleção", ramos: [
            {r: "Não", n: [{t: "Imersão em água morna 3–4×/dia por 15 min", k: "ok"}]},
            {r: "Sim", n: [{t: "Drenar: levantar a prega com lâmina 11 ou agulha (bloqueio digital com lidocaína sem vasoconstritor)", k: "warn"}]}
          ]},
          {t: "Antibiótico só se celulite, imunossupressão ou falha; retorno em 48–72 h", k: "ok"}
        ], nota: "Prática consolidada [C]; lidocaína 2% sem epinefrina na REMUME [F]."},
        {ref: ["idsa_pele", "remume"]}
      ]}
    ]
  }, {nv: ["Fluxo de cirurgia de mão em Betim para panarício e tenossinovite."]});

  // ── 11. Abscesso / furúnculo
  G("abscesso", {
    urg: "Febre com taquicardia, celulite extensa, imunossupressão, abscesso no **triângulo central da face** (risco de trombose do seio cavernoso), na mão, no períneo (Fournier) ou crepitação: **urgência** [C].",
    resumo: "Nódulo doloroso, quente, que fica **flutuante**; furúnculo é o abscesso centrado num folículo, carbúnculo é a confluência de vários [C]. **Drenagem é o tratamento** [C]. Antibiótico após drenar só em situações selecionadas (> 2 cm, múltiplos, celulite, sinais sistêmicos, imunossupressão, extremos de idade) – nos ECR, cura alguns pontos percentuais a mais, com mais efeitos adversos [C].",
    secoes: [
      {t: "Diferenciais", b: [
        {tab: {h: ["Hipótese", "O que separa"], r: [
          ["Cisto epidérmico inflamado", "Nódulo antigo com poro central, conteúdo de queratina; exérese depois que esfriar [C]"],
          ["Hidradenite supurativa", "Nódulos recorrentes em axilas, virilhas e mamas, com trajetos e cicatrizes – não é só drenar [C]"],
          ["Celulite sem coleção", "Sem flutuação; USG à beira-leito ajuda se houver [C]"],
          ["Linfadenite supurada", "Cadeia linfonodal, foco a montante [C]"],
          ["Esporotricose", "Nódulos em fila subindo pelo membro após trauma com planta ou arranhão de gato [C]"],
          ["Miíase furunculoide", "Orifício central com movimento e secreção serosa [C]"]
        ]}}
      ]},
      {t: "Decidir e tratar", b: [
        {fluxo: [
          {t: "Nódulo inflamatório doloroso"},
          {t: "Sinal de gravidade ou local de risco?", ramos: [
            {r: "Sim", n: [{t: "Urgência / cirurgia", k: "stop"}]},
            {r: "Não", n: [{t: "Flutuante?"}]}
          ]},
          {t: "Coleção", ramos: [
            {r: "Não", n: [{t: "Compressas mornas 3–4×/dia e reavaliar em 48 h", k: "ok"}]},
            {r: "Sim", n: [{t: "Incisão e drenagem sob lidocaína; desfazer loculações; lavar", k: "warn"}]}
          ]},
          {t: "Antibiótico se > 2 cm, múltiplos, celulite, sinais sistêmicos, imunossupressão, extremos de idade ou drenagem difícil", k: "q"},
          {t: "Recorrente: glicemia/HbA1c, higiene, investigar hidradenite; descolonização em casos selecionados", k: "ok"}
        ], nota: "IDSA 2014 e ECR (Talan 2016; Daum 2017) [C]."},
        {ul: ["SMX-TMP cobre o S. aureus resistente da comunidade; a cefalexina não. Esquema usual de SMX-TMP: 800/160 mg (2 comprimidos de 400/80 da REMUME) 12/12 h [C/F].", "Tamponamento com gaze após drenagem de abscesso pequeno não melhora a cura e dói mais [C]."]},
        {ir: [["celulite", "Celulite e erisipela"], ["miiase", "Miíase"], ["in-esporotricose", "Esporotricose"]]},
        {ref: ["abscesso_ecr", "idsa_pele", "rename", "remume"]}
      ]}
    ]
  });
})();
