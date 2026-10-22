// ───────────── data58.js – v47: dermatologia na Demanda espontânea (grupo Pele) – 11 itens novos com fotos e um atlas de diagnóstico diferencial.
// Conteúdo conferido em 22/10/2026 no protocolo de Dermatologia do TelessaúdeRS-UFRGS (2023, Drive da usuária), em An Bras Dermatol 2008 (pitiríase rósea),
// no MSD Manual (pitiríase rósea, nov/2025), nas diretrizes britânicas de SJS/NET (BJD 2016), na RENAME 2024 e na REMUME Betim.
// Fotos: Wikimedia Commons (licenças livres ou domínio público), redimensionadas; autor e licença na legenda de cada figura.
Object.assign(FONTES, {
  tsrs_derm2023: {s: "TelessaúdeRS-UFRGS – Protocolo de Dermatologia (2023)", t: "TelessaúdeRS-UFRGS / SES-RS. Protocolos de encaminhamento – Dermatologia, versão digital 2023 (revisão 05/05/2023; cópia no Drive da usuária): critérios de encaminhamento e 'tratamento clínico otimizado' na APS para acne, melanoma (Quadro 3 – ABCDE e 'patinho feio'; Quadro 4 – alto risco), câncer não melanoma, ceratose actínica (Quadro 8 – 5-FU 5%), eczemas (Quadro 13 – seborreico, contato, disidrótico, estase), micoses (Quadros 15–18 – candidíase, tineas, pitiríase versicolor, onicomicose), alopecias (Quadro 24), urticária crônica (Quadro 25), rosácea (Quadro 30), melasma (Quadro 31), vitiligo (Quadro 32), queloide; potência dos corticoides tópicos (Quadro 12) (protocolo de regulação estadual com a SBD e o HCPA).", f: "F", url: "https://www.ufrgs.br/telessauders/regulasus/#regulasus-protocolos"},
  abd_pr2008: {s: "An Bras Dermatol 2008 – Pitiríase rósea (revisão)", t: "Miranda SMB, Delmaestro D, Miranda PB, Filgueira AL, Pontes LFS. Pitiríase rósea. An Bras Dermatol. 2008;83(5):461-9 (revisão): placa-mãe em 50–94%, 2–10 cm, 7–14 dias antes da erupção; lesões de 0,5–1,5 cm nas linhas de clivagem ('árvore de Natal'); evolução média de 8 semanas (até 12); formas atípicas em ~20% (inversa, papulosa, vesiculosa, sem placa-mãe); diferencial obrigatório com sífilis secundária (VDRL/RPR), dermatofitose, eczema numular, farmacodermia, psoríase gutata; anti-HIV em formas atípicas/generalizadas; tratamento sintomático (corticoide tópico, anti-histamínico); aciclovir 800 mg 5x/dia por 7 dias e eritromicina com estudos pequenos (revisão narrativa).", f: "F", url: "https://www.scielo.br/j/abd/a/Y8BVHW77CHDRzpFxPzhxmvS/?lang=pt"},
  msd_pr2025: {s: "MSD Manual – Pitiríase rósea (nov/2025)", t: "Das S. Pityriasis rosea. MSD Manual Professional Version, revisão completa nov/2025: placa-mãe 2–10 cm e erupção em 7–14 dias, resolução espontânea em ~5 semanas, mais comum de 10 a 35 anos; sorologia para sífilis se palmas/plantas acometidas, sem placa-mãe ou distribuição/sequência incomum; tratamento sintomático; aciclovir curto pode ajudar em doença precoce e extensa; na gestação, sobretudo nas primeiras 15 semanas, associação com parto prematuro e morte fetal – oferecer aciclovir, sem prova de que reduza as complicações (compêndio clínico).", f: "F", url: "https://www.msdmanuals.com/professional/dermatologic-disorders/psoriasis-and-other-papulosquamous-disorders/pityriasis-rosea"},
  bad_sjs2016: {s: "Diretriz britânica SJS/NET em adultos (BJD 2016)", t: "Creamer D, Walsh SA, Dziewulski P, et al. UK guidelines for the management of Stevens-Johnson syndrome/toxic epidermal necrolysis in adults 2016. Br J Dermatol. 2016;174(6):1194-227: pródromo de febre e mal-estar dias antes; dor na pele precoce; alvos atípicos e máculas purpúricas; mucosas (olhos, boca, genitais) acometidas cedo; Nikolsky; SJS < 10% de descolamento, sobreposição 10–30%, NET > 30%; droga culpada em ~85%, sobretudo alopurinol, carbamazepina, lamotrigina, nevirapina, AINE oxicam, fenobarbital, fenitoína, sulfonamidas e sulfassalazina, entre 5 e 28 dias do início; suspender a droga suspeita reduz a mortalidade; > 10% de descolamento → centro de queimados ou UTI sem demora (diretriz internacional).", f: "F", url: "https://academic.oup.com/bjd/article/174/6/1194/6617016"},
  wm_commons_pele: {s: "Wikimedia Commons – fotos dermatológicas", t: "Fotos clínicas da Wikimedia Commons sob licenças livres (CC BY, CC BY-SA) ou domínio público (CDC, NCI, VA), redimensionadas para o app; autor e licença na legenda de cada figura. Algumas imagens vêm de pacientes de outros países e fototipos – o aspecto varia com a cor da pele (acervo de imagens).", f: "F", url: "https://commons.wikimedia.org/"}
});

// Fotos – autor e licença (Wikimedia Commons)
const FOTO = {
  "onicomicose": ["Onicomicose das unhas dos pés: unha amarelada, espessa, com descolamento distal", "James Heilman, MD · Wikimedia Commons · CC BY-SA 3.0"],
  "candidiase-pele": ["Candidíase cutânea: placa vermelho-viva, úmida, com pápulas e pústulas satélites", "U.S. Department of Veterans Affairs · Wikimedia Commons · domínio público"],
  "queilite-angular": ["Queilite angular bilateral em idoso com prótese dentária", "Matthew Ferguson · Wikimedia Commons · CC BY-SA 3.0"],
  "pr-medalhao": ["Pitiríase rósea: placa-mãe (medalhão) oval com colarete de escamas", "James Heilman, MD · Wikimedia Commons · CC BY-SA 3.0"],
  "pr-arvore": ["Pitiríase rósea: lesões ovais no tronco seguindo as linhas de clivagem", "James Heilman, MD · Wikimedia Commons · CC BY-SA 3.0"],
  "rosacea": ["Rosácea: eritema e telangiectasias centrofaciais, pápulas e pústulas no nariz, sem comedões", "Sand M et al. · Wikimedia Commons · CC BY 2.5"],
  "dermatite-perioral": ["Dermatite perioral leve: pápulas eritematosas ao redor da boca, poupando a borda do lábio", "Johannes Köhler · Wikimedia Commons · CC BY-SA 4.0"],
  "melasma": ["Melasma: manchas acastanhadas simétricas na face (círculos do autor)", "Elord (WikiDoc) · Wikimedia Commons · CC BY-SA 3.0"],
  "vitiligo": ["Vitiligo: manchas acrômicas (brancas como giz), bem delimitadas, nas mãos", "James Heilman, MD · Wikimedia Commons · CC BY-SA 3.0"],
  "pitiriase-versicolor": ["Pitiríase versicolor: máculas hipocrômicas com descamação fina no tronco", "Sarahrosenau (Flickr) · Wikimedia Commons · CC BY-SA 2.0"],
  "hanseniase-manchas": ["Hanseníase multibacilar: placas infiltradas eritematoacastanhadas no tronco", "Marcos LA, Conerly S, Walker S (Am J Trop Med Hyg) · Wikimedia Commons · CC BY 4.0"],
  "abcd": ["Regra ABCD: melanomas (esquerda) × nevos comuns (direita) – assimetria, borda, cor, diâmetro", "National Cancer Institute · Wikimedia Commons · domínio público"],
  "melanoma": ["Melanoma: lesão assimétrica, borda irregular e várias tonalidades de marrom", "National Cancer Institute · Wikimedia Commons · domínio público"],
  "cbc": ["Carcinoma basocelular: pápula/placa perolada com telangiectasias", "John Hendrix · Wikimedia Commons · domínio público"],
  "cec": ["Carcinoma espinocelular ulcerado e crostoso em área fotoexposta", "National Cancer Institute · Wikimedia Commons · domínio público"],
  "ceratose-actinica": ["Ceratoses actínicas: lesões ásperas, eritematosas e descamativas na fronte calva", "Future FamDoc · Wikimedia Commons · CC BY-SA 4.0"],
  "ceratose-seborreica": ["Ceratose seborreica: lesão marrom, 'colada' na pele, de superfície verrucosa", "Assafn · Wikimedia Commons · CC BY-SA 4.0"],
  "alopecia-areata": ["Alopecia areata: placa redonda sem pelos, pele lisa, sem inflamação", "Abbassyma · Wikimedia Commons · domínio público"],
  "alopecia-androgenetica": ["Alopecia androgenética masculina: rarefação no vértex", "BlaiserPascal · Wikimedia Commons · CC BY-SA 4.0"],
  "urticaria": ["Urticária: placas edematosas (urticas) que mudam de lugar em horas", "James Heilman, MD · Wikimedia Commons · CC BY-SA 3.0"],
  "sjs-mucosa": ["Síndrome de Stevens-Johnson: descamação e crostas hemorrágicas em lábios e língua", "James Heilman, MD · Wikimedia Commons · CC BY-SA 3.0"],
  "eczema-estase": ["Eczema de estase: placas eritematoacastanhadas e descamativas na face medial das pernas", "Cardiologist61 · Wikimedia Commons · domínio público"],
  "sifilis-palmas": ["Sífilis secundária: lesões palmares acobreadas, ceratósicas – faz diferencial com pitiríase rósea", "CDC / Robert Sumpter · Wikimedia Commons · domínio público"],
  "tinea-corporis": ["Tinea corporis: lesão anular com borda ativa descamativa e centro mais claro", "CDC / Lucille K. Georg · Wikimedia Commons · domínio público"],
  "psoriase": ["Psoríase: placa eritematosa bem delimitada com escamas prateadas espessas", "James Heilman, MD · Wikimedia Commons · CC BY-SA 3.0"],
  "impetigo": ["Impetigo: crostas melicéricas (cor de mel) no queixo", "James Heilman, MD · Wikimedia Commons · CC BY-SA 4.0"],
  "leishmaniose": ["Leishmaniose cutânea (Guiana Francesa): úlcera com bordas elevadas e fundo granuloso", "Jean Fortunet · Wikimedia Commons · CC BY-SA 3.0"]
};
const FIG = (k, extra) => ({fig: {foto: true, src: "img/pele-" + k + ".webp", leg: FOTO[k][0] + (extra ? " – " + extra : ""), alt: FOTO[k][0], fonte: FOTO[k][1]}});
const PELE_LINKS = [["pele-atlas", "Atlas de diagnóstico diferencial"], ["tinea", "Dermatofitose"], ["pitiriase-versicolor", "Pitiríase versicolor"], ["dermatite-atopica", "Dermatite atópica"], ["seborreica", "Dermatite seborreica"], ["cr-psoriase", "Psoríase"], ["urticaria", "Urticária aguda"], ["exantema", "Exantema agudo"]];

CONDICOES.push(
// ════════════════ 1. ONICOMICOSE
{
  id: "pele-onicomicose", nome: "Onicomicose (micose de unha)", sistema: "Pele", risco: "baixo",
  ciap: "S74", cid: "B35.1", tags: "onicomicose micose de unha tinea unguium unha grossa amarela descolamento terbinafina itraconazol pulso amorolfina ciclopirox esmalte paroníquia crônica cândida",
  S: `Paciente, ___ anos, com alteração em ___ unha(s) de ___ (pés/mãos) há ___ meses: espessamento ___, cor ___, descolamento ___, dor/desconforto ___.
Micose nos pés/entre os dedos ___. Contato frequente com água (mãos) ___. DM ___, doença vascular ___, imunossupressão ___. Erisipela/celulite prévia na perna do mesmo lado ___.
Doença hepática, álcool ___. Insuficiência cardíaca ___. Medicamentos (sinvastatina, varfarina, antiácidos/omeprazol) ___. Gestação ___. Tratamentos prévios ___.`,
  O: `Unhas acometidas: ___. Acometimento < 50% da lâmina e sem matriz/lúnula ___ (leve-moderada) / > 50%, matriz/lúnula, subungueal proximal ou distrófica total ___ (grave).
Tinea pedis interdigital ___. Paroníquia ___. Pulsos pediosos ___.`,
  A: `Onicomicose ___ (pés / mãos), ___ (leve-moderada / grave), provável ___ (dermatófito / cândida).`,
  P: `- Explicado que a cura é lenta (a unha leva meses para crescer) e que recidiva é comum.
- Tratamento: ___ (itraconazol em pulsos / terbinafina por compra / esmalte por compra).
- Tratar tinea pedis associada; calçados ventilados, secar entre os dedos, não compartilhar alicates.
- Transaminases ___ (antes, se uso diário > 3–4 semanas ou doença hepática).
- Retorno em ___ meses para avaliar crescimento de unha sadia.`,
  rx: [
    {trilha: "sus", titulo: "Itraconazol em pulsos (REMUME) – unhas dos pés", texto: "USO ORAL\n1. Itraconazol 100 mg ______ 84 cápsulas\n   Tomar 2 cápsulas de 12 em 12 horas, logo após as refeições, durante 7 dias seguidos por mês.\n   Repetir 1 semana por mês, por 3 meses (pés) – nas mãos, 2 meses.\n   Não usar com sinvastatina; evitar omeprazol e antiácidos no período.", dose: "F", nota: "TelessaúdeRS 2023, Quadro 18: itraconazol 100 mg, 2 cápsulas 2x/dia, 1 semana por mês – 3 meses nos pés e 2 nas mãos; alternativa 200 mg/dia contínuo por 12 (pés) ou 6 (mãos) semanas [F]. Pulso sem doença hepática, hepatite medicamentosa prévia ou outra droga hepatotóxica dispensa transaminases; uso diário > 3–4 semanas pede TGO/TGP antes e a cada 4–6 semanas [F]. Contraindicado com sinvastatina e na insuficiência cardíaca [F]. Itraconazol 100 mg na REMUME Betim [F]."},
    {trilha: "evidencia", titulo: "Terbinafina (1ª escolha para dermatófito) – compra", texto: "USO ORAL\n1. Terbinafina 250 mg ______ 84 comprimidos\n   Tomar 1 comprimido por dia por 12 semanas (unhas dos pés) ou 6 semanas (mãos).", dose: "F", nota: "TelessaúdeRS 2023, Quadro 18: terbinafina 250 mg/dia 3 meses (pés) e 6 semanas (mãos, dermatófito) é a 1ª escolha; itraconazol é 2ª linha [F]. Transaminases antes se uso > 3–4 semanas; repetir em 4–6 semanas só se doença hepática, álcool, hepatite medicamentosa prévia ou sintomas [F]. Terbinafina não consta na RENAME nem na REMUME Betim [F]."},
    {trilha: "fora", titulo: "Leve a moderada nos pés – esmalte (compra)", texto: "USO TÓPICO\n1. Amorolfina 5% esmalte ______ 1 frasco\n   Lixar a superfície e aplicar na unha 1 vez por semana, por 9 a 12 meses.\n   Remover a camada anterior com álcool antes de cada aplicação.\n   OU\n1. Ciclopirox 8% esmalte ______ 1 frasco\n   Aplicar 1 vez ao dia até a unha sadia crescer (até 12 meses); remover com álcool 1 vez por semana.", dose: "F", nota: "TelessaúdeRS 2023, Quadro 18: só para leve-moderada nos pés (< 50% da unha, sem matriz/lúnula) [F]. Fora da RENAME [F]."}
  ],
  orient: `A micose de unha tem tratamento, mas é lento: a unha sadia precisa crescer, o que leva meses (nos pés, quase um ano). Volte nas consultas marcadas mesmo que a unha ainda pareça doente.
Seque bem os pés e entre os dedos, use meias de algodão e calçados ventilados, não ande descalço em vestiários e não divida alicate ou lixa.
Se usar itraconazol: tome logo depois da refeição e avise se usa remédio para colesterol, para o coração ou para o estômago.
Avise se ficar com a pele ou os olhos amarelados, urina escura ou enjoo forte.`,
  alarme: ["Vermelhidão, calor e inchaço na perna (erisipela)", "Pele ou olhos amarelados, urina escura", "Dor ou pus ao redor da unha", "Mancha escura na unha que não sai com o crescimento"],
  encaminhar: "Dermatologia (TelessaúdeRS 2023): onicomicose refratária ao tratamento otimizado E (erisipela/celulite no membro do mesmo lado, dor/desconforto ou suspeita de alteração não fúngica). Faixa escura longitudinal na unha ou lesão pigmentada que se estende à pele (sinal de Hutchinson) → avaliação para melanoma ungueal.",
  sus: {nacional: "RENAME 2024: itraconazol 100 mg (Básico e Estratégico); terbinafina, amorolfina e ciclopirox não constam [F].", betim: "REMUME Betim: itraconazol 100 mg cápsula e cetoconazol 2% creme [F]. Exame micológico direto/cultura de unha na rede de Betim: confirmar [NV]."},
  evid: {resumo: "Terbinafina oral tem maior cura micológica que itraconazol na onicomicose por dermatófito e é a 1ª escolha do protocolo do TelessaúdeRS; itraconazol em pulsos é a alternativa e é o que o SUS de Betim oferece. Esmaltes têm eficácia menor e ficam para formas leves. Recidiva é frequente.", certeza: "Moderada (estimada; protocolo de regulação e ECR de antifúngicos)", fontes: ["tsrs_derm2023", "rename", "remume", "wm_commons_pele"]},
  mudancas: ["Item novo (v47) com foto."],
  nv: ["Exame micológico de unha na rede de Betim.", "Bula brasileira do itraconazol (posologia em pulso)."],
  guia: {
    resumo: "Confirme que é fungo antes de 3 meses de antifúngico oral quando possível (psoríase, trauma e envelhecimento imitam). **Leve-moderada nos pés:** esmalte ou oral. **Grave (> 50%, matriz/lúnula):** oral – terbinafina (compra) ou **itraconazol em pulsos (REMUME)**. Trate o pé de atleta junto.",
    secoes: [
      {t: "Reconhecer", b: [
        FIG("onicomicose"),
        {tab: {h: ["Pista", "Pensar em"], r: [
          ["Unhas dos pés espessas, amarelas, descolando na ponta, com pé de atleta", "Dermatófito [F]"],
          ["Unhas das mãos com paroníquia crônica e onicólise, contato com água", "Cândida [F]"],
          ["Pequenas depressões (pitting), mancha de óleo, placas no corpo", "Psoríase ungueal [C]"],
          ["Faixa escura longitudinal, pigmento na pele ao redor", "Melanoma ungueal – não tratar como micose [C]"]]}},
        {ref: ["tsrs_derm2023", "wm_commons_pele"]}
      ]},
      {t: "Tratar", b: [
        {tab: {h: ["Situação", "Opção (TelessaúdeRS 2023, Quadro 18)"], r: [
          ["Pés, leve-moderada (< 50%, sem matriz)", "Amorolfina 5% esmalte 1x/semana 9–12 meses, ou ciclopirox 8% diário até 12 meses; ou terbinafina 250 mg/dia 3 meses [F]"],
          ["Pés, grave", "Terbinafina 250 mg/dia 3 meses; 2ª linha: itraconazol 200 mg 2x/dia 1 semana/mês por 3 meses ou 200 mg/dia 12 semanas [F]"],
          ["Mãos, dermatófito", "Terbinafina 250 mg/dia 6 semanas; 2ª linha: itraconazol em pulso 2 meses ou 200 mg/dia 6 semanas [F]"],
          ["Mãos, cândida", "Itraconazol em pulso 2 meses ou 200 mg/dia 6 semanas; luvas para atividades com água [F]"]]},
         nota: "Cetoconazol oral não deve ser usado em dermatofitoses (risco-benefício desfavorável) [F]."},
        {trio: {ideal: "Terbinafina oral (maior cura no dermatófito).", sus: "Itraconazol 100 mg da REMUME em pulsos; terbinafina e esmaltes não estão no SUS.", ponte: "Ofereça o itraconazol em pulsos; se o paciente puder comprar e não houver contraindicação, terbinafina genérica."}},
        {ir: PELE_LINKS},
        {ref: ["tsrs_derm2023", "remume"]}
      ]}
    ]}
},
// ════════════════ 2. CANDIDÍASE CUTÂNEA E INTERTRIGO
{
  id: "pele-candidiase", nome: "Candidíase cutânea, intertrigo e queilite angular", sistema: "Pele", risco: "baixo",
  ciap: "S75", cid: "B37.2", tags: "candidíase cutânea intertrigo dobras virilha axila mama prega abdominal assadura adulto lesões satélites queilite angular boqueira miconazol cetoconazol fluconazol nistatina obesidade diabetes",
  S: `Paciente, ___ anos, com lesão vermelha, úmida e pruriginosa/ardente em ___ (dobra inframamária, virilha, axila, abdome, entre dedos, cantos da boca) há ___.
DM ___ (última HbA1c ___), obesidade ___, suor excessivo ___, incontinência/fralda ___, corticoide tópico ou oral ___, antibiótico recente ___, imunossupressão ___. Prótese dentária ___.`,
  O: `Placa eritematosa brilhante ___, bordas ___, lesões satélites (pápulas/pústulas) ___, maceração ___, odor ___. Cantos da boca ___.`,
  A: `Intertrigo candidiásico ___ / queilite angular ___.`,
  P: `- Antifúngico tópico 2 vezes ao dia até melhora completa (2–4 semanas).
- Manter a dobra seca: secar bem após o banho, tecido de algodão entre as dobras, roupas leves.
- Corrigir fatores: glicemia ___, peso, incontinência, revisar corticoide.
- Retorno se não melhorar em 2–4 semanas.`,
  rx: [
    {trilha: "sus", titulo: "Antifúngico tópico (REMUME)", texto: "USO TÓPICO\n1. Cetoconazol 2% creme ______ 1 bisnaga\n   Lavar e secar bem a área; aplicar camada fina 2 vezes ao dia até a pele ficar normal (cerca de 2 a 4 semanas).", dose: "F", nota: "TelessaúdeRS 2023, Quadro 15: miconazol 2% creme 2x/dia por ~2–4 semanas; nistatina, ciclopirox ou outros azólicos são opções [F]. RENAME 2024 tem miconazol 2% creme no Básico, mas a REMUME Betim tem cetoconazol 2% creme (miconazol só vaginal) [F]."},
    {trilha: "ambos", titulo: "Extenso ou sem resposta – fluconazol (REMUME)", texto: "USO ORAL\n1. Fluconazol 150 mg ______ ___ cápsulas\n   Tomar 1 cápsula 1 vez por semana, por 2 a 6 semanas (conforme a melhora).", dose: "F", nota: "TelessaúdeRS 2023: adulto fluconazol 150 mg/semana ou itraconazol 200 mg 2x/dia por 2–6 semanas; criança fluconazol 6 mg/kg no 1º dia e 3 mg/kg/dia por 2–6 semanas, ou itraconazol 5–10 mg/kg/dia em 2 doses [F]. Fluconazol 150 mg na REMUME [F]."}
  ],
  orient: `A irritação nas dobras é causada por um fungo que cresce com calor e umidade.
Lave com sabonete neutro, seque muito bem (pode usar secador no frio) e coloque um pano de algodão limpo entre as dobras. Prefira roupas leves e de algodão.
Passe o creme 2 vezes ao dia até a pele ficar normal. Se tiver diabetes, controlar o açúcar ajuda a não voltar.
Nos cantos da boca: se usa dentadura, tire à noite, escove e deixe de molho conforme orientado; avise se a dentadura está folgada.`,
  alarme: ["Ferida que abre, dor forte, pus ou mau cheiro", "Vermelhidão que se espalha com febre", "Placas brancas na boca que não deixam engolir"],
  encaminhar: "Dermatologia: quadro extenso em imunocomprometido ou refratário ao tratamento otimizado (TelessaúdeRS 2023).",
  sus: {nacional: "RENAME 2024 (Básico): miconazol 2% creme, loção e pó; nistatina; fluconazol 150 mg [F].", betim: "REMUME Betim: cetoconazol 2% creme, fluconazol 150 mg, itraconazol 100 mg, nistatina suspensão oral [F]."},
  evid: {resumo: "Azólicos tópicos resolvem a maioria dos intertrigos por Candida; o que mais evita recidiva é corrigir umidade, obesidade, glicemia e incontinência. Antifúngico oral fica para doença extensa ou refratária.", certeza: "Baixa a moderada (estimada; protocolo de regulação)", fontes: ["tsrs_derm2023", "rename", "remume", "wm_commons_pele"]},
  mudancas: ["Item novo (v47) com fotos."],
  nv: ["Queilite angular: o protocolo do TelessaúdeRS não traz esquema próprio – o app aplica o tratamento da candidíase cutânea (inferência)."],
  guia: {
    resumo: "Placa **vermelho-viva, úmida, com lesões satélites** numa dobra = cândida até prova em contrário. Azólico tópico 2x/dia e **dobra seca**. Se a borda é descamativa e o centro clareia, pense em **tinea cruris**; se é placa vermelha brilhante sem satélites, considere **psoríase invertida** ou intertrigo irritativo.",
    secoes: [
      {t: "Reconhecer", b: [
        FIG("candidiase-pele"),
        {tab: {h: ["Achado", "Cândida", "Tinea cruris", "Psoríase invertida"], r: [
          ["Cor e superfície", "Vermelho-vivo, úmida, macerada [C]", "Borda ativa descamativa, centro mais claro [C]", "Vermelha brilhante, bem delimitada, sem escama [C]"],
          ["Satélites", "Pápulas/pústulas satélites [C]", "Não [C]", "Não [C]"],
          ["Escroto", "Acomete com frequência [C]", "Costuma poupar [C]", "Variável [C]"]]}},
        FIG("queilite-angular", "fissuras e eritema nos cantos da boca; pense em prótese mal adaptada, saliva no canto e ferropenia"),
        {ul: ["Queilite angular: geralmente cândida e/ou estafilococo, favorecida por prótese, perda de dimensão vertical da face e deficiências nutricionais [C]; tratar com azólico tópico [I] e corrigir a causa.", "Estomatite por dentadura: tratar o paciente e a prótese (retirar à noite, escovar e imergir em clorexidina ou água sanitária – 10 gotas num copo de água) [F]."]},
        {ref: ["tsrs_derm2023", "wm_commons_pele"]}
      ]},
      {t: "Tratar", b: [
        {ul: ["Leve a moderada: azólico tópico 2x/dia até melhora completa (2–4 semanas) [F].", "Falha ou extensa: fluconazol 150 mg/semana ou itraconazol 200 mg 2x/dia por 2–6 semanas [F]; itraconazol contraindicado com sinvastatina e na IC [F].", "Tratar fatores predisponentes: DM2, hiperidrose, incontinência, corticoide tópico, imunossupressores [F]."]},
        {ir: [["tinea", "Dermatofitose"], ["moniliase-oral", "Candidíase oral"], ["candidiase", "Candidíase vulvovaginal"], ["dermatite-fraldas", "Dermatite das fraldas"]]},
        {ref: ["tsrs_derm2023", "remume"]}
      ]}
    ]}
},
// ════════════════ 3. PITIRÍASE RÓSEA
{
  id: "pele-pitiriase-rosea", nome: "Pitiríase rósea", sistema: "Pele", risco: "baixo",
  ciap: "S90", cid: "L42", tags: "pitiríase rósea placa-mãe medalhão árvore de natal manchas ovais descamativas tronco colarete sífilis secundária VDRL gestação aciclovir",
  alerta: "Lesões em palmas e plantas, ausência de placa-mãe ou distribuição atípica: teste de sífilis antes de chamar de pitiríase rósea. Gestante, sobretudo antes de 15 semanas: há associação com parto prematuro e perda fetal – discutir com o pré-natal no mesmo dia.",
  S: `Paciente, ___ anos, com mancha maior em ___ surgida há ___ dias, seguida de várias manchas menores no tronco/raiz dos membros há ___ dias. Prurido ___ (leve/intenso). Pródromo (mal-estar, cefaleia, febre baixa) ___.
Lesões em palmas/plantas, boca ou genitais ___. Relação sexual desprotegida/parceria com IST ___. Medicamentos novos nas últimas semanas ___. Gestação ___ (IG ___).`,
  O: `Placa-mãe ___ cm em ___, oval, com colarete de escamas ___. Lesões ovais de 0,5–1,5 cm no tronco seguindo linhas de clivagem ___. Palmas/plantas ___. Mucosas ___. Linfonodos ___.
Teste rápido de sífilis ___ / VDRL ___.`,
  A: `Pitiríase rósea ___ (típica / atípica), sífilis ___ (afastada / em investigação).`,
  P: `- Explicado o caráter autolimitado (some sozinha em semanas, sem cicatriz; pode deixar manchas claras ou escuras temporárias).
- Teste rápido de sífilis ___ (indicado se atípica, palmas/plantas ou sem placa-mãe).
- Prurido: hidratante, corticoide tópico de baixa potência e/ou anti-histamínico.
- Retorno se não regredir em 8–12 semanas ou se surgirem lesões em palmas, plantas ou mucosas.`,
  rx: [
    {trilha: "ambos", titulo: "Prurido (REMUME)", texto: "USO TÓPICO\n1. Dexametasona 0,1% creme ______ 1 bisnaga\n   Aplicar fina camada nas manchas que coçam 1 a 2 vezes ao dia por até 2 semanas.\n\nUSO ORAL\n2. Loratadina 10 mg ______ 14 comprimidos\n   Tomar 1 comprimido por dia se coceira.", dose: "F", nota: "Tratamento sintomático com corticoide tópico e anti-histamínico, que não alteram a evolução (An Bras Dermatol 2008; MSD 2025) [F]. Dexametasona 0,1% creme e loratadina 10 mg na REMUME [F]; posologia do corticoide de baixa potência [I]."},
    {trilha: "evidencia", titulo: "Gestante ou doença precoce e extensa – aciclovir (decisão compartilhada)", texto: "USO ORAL\n1. Aciclovir 200 mg ______ 140 comprimidos\n   Tomar 4 comprimidos (800 mg) 5 vezes ao dia por 7 dias.", dose: "NV", nota: "MSD 2025: oferecer aciclovir à gestante, sem prova de que reduza as complicações obstétricas; curso curto pode ajudar quem começa cedo com doença extensa [F]. Dose de 800 mg 5x/dia por 7 dias vem de um estudo citado na revisão de 2008 [F] – esquema não padronizado [NV]. Aciclovir 200 mg na REMUME [F]."}
  ],
  orient: `A pitiríase rósea não é alergia nem micose e não deixa cicatriz. Começa com uma mancha maior e depois aparecem várias menores. Ela some sozinha, em geral em 1 a 2 meses (às vezes até 3).
Para a coceira: banho morno, sabonete suave, hidratante e o creme receitado.
As manchas podem deixar a pele mais clara ou mais escura por um tempo; isso também melhora.
Volte se aparecerem manchas nas palmas das mãos, solas dos pés, boca ou genitais, ou se não melhorar em 3 meses.`,
  alarme: ["Manchas nas palmas das mãos ou solas dos pés", "Feridas na boca ou nos genitais", "Febre alta, bolhas ou pele descolando", "Gestante com as manchas"],
  encaminhar: "Gestante: discutir com o pré-natal/obstetrícia. Duração > 12 semanas, dúvida diagnóstica (psoríase gutata, parapsoríase, micose fungoide) ou forma vesiculosa extensa → dermatologia.",
  sus: {nacional: "Teste rápido de sífilis e VDRL no SUS [C].", betim: "REMUME Betim: dexametasona 0,1% creme, loratadina 10 mg, aciclovir 200 mg [F]."},
  evid: {resumo: "Doença autolimitada de provável causa viral (HHV-6/7), mais comum dos 10 aos 35 anos. O tratamento é sintomático; aciclovir e eritromicina têm estudos pequenos. O diagnóstico diferencial que não pode passar é a sífilis secundária. Na gestação inicial há associação com parto prematuro e perda fetal.", certeza: "Baixa (estudos pequenos; revisões narrativas)", fontes: ["abd_pr2008", "msd_pr2025", "remume", "wm_commons_pele"]},
  mudancas: ["Item novo (v47) com fotos e diferencial com sífilis secundária."],
  nv: ["Esquema de aciclovir (não padronizado em diretriz).", "Conduta obstétrica na gestante com pitiríase rósea."],
  guia: {
    resumo: "**Placa-mãe** oval com colarete de escamas e, 1–2 semanas depois, **lesões ovais no tronco em 'árvore de Natal'**. Some sozinha (média de 8 semanas). Antes de tranquilizar: **teste de sífilis** se palmas/plantas, sem placa-mãe ou atípica, e cuidado redobrado na **gestante**.",
    secoes: [
      {t: "Reconhecer", b: [
        FIG("pr-medalhao"),
        FIG("pr-arvore"),
        {ul: ["Placa-mãe em 50–94%, 2–10 cm, precede a erupção em 7–14 dias [F].", "Lesões de 0,5–1,5 cm em tronco, pescoço e raiz dos membros, seguindo as linhas de clivagem [F].", "Formas atípicas em ~20%: inversa (axilas, virilhas, face – mais em crianças e pele negra), papulosa, vesiculosa, sem placa-mãe [F].", "Evolução média de 8 semanas (até 12); recidiva rara [F]."]},
        {ref: ["abd_pr2008", "msd_pr2025", "wm_commons_pele"]}
      ]},
      {t: "Não pode passar: sífilis secundária", b: [
        FIG("sifilis-palmas"),
        {tab: {h: ["Achado", "Pitiríase rósea", "Sífilis secundária"], r: [
          ["Placa-mãe", "Presente na maioria [F]", "Ausente [C]"],
          ["Palmas e plantas", "Raro (7% e 2%) [F]", "Frequente, lesões acobreadas [C]"],
          ["Mucosas e linfonodos", "Lesões orais pouco comuns [F]", "Placas mucosas, condiloma plano, linfadenopatia [C]"],
          ["Exame", "Teste negativo", "Teste rápido/VDRL reagente [C]"]]},
         nota: "Teste de sífilis se palmas/plantas, sem placa-mãe ou sequência/distribuição incomum (MSD 2025); a revisão brasileira considera o diferencial obrigatório (VDRL/RPR) e anti-HIV em formas atípicas ou generalizadas [F]."},
        {ir: [["in-sifilis", "Sífilis: estadiamento e tratamento"], ["sifilis", "Sífilis adquirida (DE)"], ["exantema", "Exantema agudo"]]},
        {ref: ["msd_pr2025", "abd_pr2008"]}
      ]},
      {t: "Outros diferenciais", b: [
        {ul: ["Tinea corporis: placa-mãe parece 'micose' – micológico direto se dúvida; não usar corticoide às cegas [F].", "Farmacodermia 'pitiríase-rósea-símile': revisar remédios novos (ex.: omeprazol, terbinafina, captopril, isotretinoína, metronidazol) [F].", "Psoríase gutata, parapsoríase, micose fungoide: quando a evolução se prolonga além de 12 semanas [F]."]},
        {ir: [["pele-atlas", "Atlas de diagnóstico diferencial"], ["tinea", "Dermatofitose"], ["cr-psoriase", "Psoríase"]]},
        {ref: ["abd_pr2008"]}
      ]}
    ]}
},
// ════════════════ 4. ROSÁCEA
{
  id: "pele-rosacea", nome: "Rosácea", sistema: "Pele", risco: "baixo",
  ciap: "S99", cid: "L71", tags: "rosácea vermelhidão no rosto flushing telangiectasia pápulas pústulas sem cravos rinofima rosácea ocular blefarite metronidazol gel ácido azelaico ivermectina doxiciclina dermatite perioral",
  S: `Paciente, ___ anos, com vermelhidão central na face há ___, episódios de rubor (flushing) ___, ardor/pinicação ___, pápulas e pústulas ___.
Gatilhos: sol ___, calor/frio ___, bebidas quentes ___, álcool ___, pimenta ___, exercício ___, emoções ___. Uso de corticoide na face ___. Olhos irritados, terçol de repetição ___.`,
  O: `Eritema centrofacial ___, telangiectasias ___, pápulas/pústulas ___, comedões ___ (ausentes na rosácea), fima ___. Pálpebras: blefarite/crostas nos cílios ___, hiperemia ___.`,
  A: `Rosácea ___ (eritemato-telangiectásica / pápulo-pustulosa / fimatosa / ocular).`,
  P: `- Evitar gatilhos; sabonete suave; sem tônicos, adstringentes ou esfoliantes; hidratante 2x/dia; filtro solar FPS ≥ 30 diário.
- Tópico: ___ (metronidazol 0,75% gel / ácido azelaico / ivermectina 1% – por compra).
- Moderada a grave: doxiciclina 100 mg/dia por 4–12 semanas, depois manter o tópico.
- Olhos: higiene das pálpebras e compressas mornas; lubrificante.
- Retorno em 8–12 semanas.`,
  rx: [
    {trilha: "sus", titulo: "Moderada a grave – doxiciclina (REMUME)", texto: "USO ORAL\n1. Doxiciclina 100 mg ______ ___ comprimidos\n   Tomar 1 comprimido por dia (até 2 por dia) por 4 a 12 semanas, com um copo cheio de água, sentado ou em pé.\n   Proteger-se do sol durante o uso.", dose: "F", nota: "TelessaúdeRS 2023, Quadro 30: doxiciclina 100 mg, 1 a 2 comprimidos/dia por 4–12 semanas (ou tetraciclina 250–500 mg 2x/dia), no máximo 12 semanas, e depois manter tópico [F]. Não usar na gestação nem em < 8 anos [C]. Doxiciclina 100 mg na REMUME [F]."},
    {trilha: "fora", titulo: "Leve a moderada – tópico (compra)", texto: "USO TÓPICO\n1. Metronidazol 0,75% gel ______ 1 bisnaga\n   Aplicar no rosto 2 vezes ao dia por 8 a 12 semanas.\n   OU\n1. Ácido azelaico 15% gel ______ 1 bisnaga\n   Aplicar no rosto 2 vezes ao dia por até 15 semanas (ardor leve no início é esperado).\n   OU\n1. Ivermectina 1% creme (manipulado) ______ 30 g\n   Aplicar no rosto 1 vez ao dia por até 12 semanas.", dose: "F", nota: "TelessaúdeRS 2023, Quadro 30 [F]. Nenhum dos três na RENAME [F]; a REMUME tem metronidazol só em gel vaginal (não usar no rosto) [F]."}
  ],
  orient: `A rosácea é uma doença crônica da pele do rosto: tem controle, mas volta em crises.
Descubra o que piora a sua (sol, calor, bebida quente, álcool, pimenta, exercício, nervoso) e evite.
Lave o rosto com sabonete suave, não use esfoliante, tônico ou adstringente, passe hidratante 2 vezes ao dia e filtro solar todos os dias.
Não use pomadas de corticoide no rosto: pioram a rosácea.
As veinhas finas não somem com remédio. Se os olhos arderem ou os cílios ficarem com crostas, lave as pálpebras com xampu infantil diluído e use compressa morna.`,
  alarme: ["Dor no olho, visão embaçada ou sensibilidade à luz", "Nódulos grandes e dolorosos que surgem de repente no rosto", "Nariz aumentando de volume"],
  encaminhar: "Dermatologia: rosácea fimatosa, rosácea granulomatosa/pioderma facial, refratária a 3 meses de tratamento otimizado. Oftalmologia: rosácea ocular refratária a 8–12 semanas (higiene, lubrificante, antibiótico oral); dor ocular ou baixa visual → no mesmo dia (TelessaúdeRS 2023).",
  sus: {nacional: "Doxiciclina 100 mg no SUS; metronidazol gel facial, ácido azelaico e ivermectina creme fora da RENAME [F].", betim: "REMUME Betim: doxiciclina 100 mg [F]."},
  evid: {resumo: "Metronidazol, ácido azelaico e ivermectina tópicos reduzem pápulas e pústulas; tetraciclinas orais são usadas nas formas moderadas a graves por até 12 semanas, seguidas de manutenção tópica. Fotoproteção e cuidados com a pele fazem parte de todos os esquemas; as telangiectasias não respondem a remédio.", certeza: "Moderada (estimada; protocolo de regulação)", fontes: ["tsrs_derm2023", "remume", "wm_commons_pele"]},
  mudancas: ["Item novo (v47) com fotos e diferencial com dermatite perioral e acne."],
  nv: ["Dose de doxiciclina de liberação modificada 40 mg (não disponível no SUS)."],
  guia: {
    resumo: "Vermelhidão **centrofacial** com rubor, telangiectasias e, às vezes, pápulas/pústulas **sem cravos** = rosácea. Base de tudo: **gatilhos, pele suave e filtro solar**. Tópico na leve; **doxiciclina (REMUME)** na moderada-grave por até 12 semanas. Pergunte pelos **olhos**.",
    secoes: [
      {t: "Reconhecer e diferenciar", b: [
        FIG("rosacea"),
        FIG("dermatite-perioral", "diferencial: costuma surgir após corticoide tópico ou cremes oclusivos na face"),
        {tab: {h: ["Achado", "Rosácea", "Acne", "Dermatite perioral"], r: [
          ["Comedões (cravos)", "Ausentes [F]", "Presentes [C]", "Ausentes [C]"],
          ["Eritema", "Difuso centrofacial, além das lesões [F]", "Só ao redor das lesões [F]", "Ao redor da boca, poupa a borda do lábio [C]"],
          ["Rubor e ardor", "Frequentes [F]", "Não [C]", "Ardor [C]"],
          ["Idade típica", "Adulto [C]", "Adolescente [C]", "Mulher jovem; após corticoide tópico [C]"]]},
         nota: "Lúpus (eritema malar que poupa o sulco nasogeniano, fotossensibilidade, sintomas sistêmicos) e dermatite seborreica também entram no diferencial [C]."},
        {ref: ["tsrs_derm2023", "wm_commons_pele"]}
      ]},
      {t: "Tratar por tipo", b: [
        {tab: {h: ["Tipo", "Conduta (TelessaúdeRS 2023, Quadro 30)"], r: [
          ["Eritemato-telangiectásica", "Evitar gatilhos, pele suave, filtro solar, hidratante; metronidazol ou ácido azelaico (benefício discutível); telangiectasias não regridem [F]"],
          ["Pápulo-pustulosa leve-moderada", "Metronidazol 0,75% gel 2x/dia 8–12 semanas, ácido azelaico 15–20% 2x/dia até 15 semanas ou ivermectina 1% 1x/dia até 12 semanas [F]"],
          ["Pápulo-pustulosa moderada-grave", "Doxiciclina 100 mg 1–2 cp/dia 4–12 semanas (máx. 12), depois tópico de manutenção [F]"],
          ["Fimatosa", "Isotretinoína ou cirurgia – dermatologia [F]"],
          ["Ocular", "Higiene dos cílios com xampu infantil diluído, compressas mornas, lubrificante; antibiótico oral nos graves [F]"]]}},
        {ir: [["acne", "Acne"], ["blefarite", "Blefarite"], ["hordeolo", "Hordéolo"], ["seborreica", "Dermatite seborreica"]]},
        {ref: ["tsrs_derm2023"]}
      ]}
    ]}
},
// ════════════════ 5. MELASMA
{
  id: "pele-melasma", nome: "Melasma (manchas escuras no rosto)", sistema: "Pele", risco: "baixo",
  ciap: "S99", cid: "L81.1", tags: "melasma cloasma manchas escuras rosto gestação anticoncepcional fotoproteção filtro solar com cor hidroquinona fórmula tripla ácido azelaico",
  S: `Paciente, ___ anos, com manchas acastanhadas em ___ (malar, fronte, lábio superior, mento) há ___. Piora com sol ___. Gestação/pós-parto ___, anticoncepcional hormonal ___. Uso diário de filtro solar ___ (FPS ___, reaplica? ___). Tratamentos prévios ___. Impacto emocional ___.`,
  O: `Máculas castanhas simétricas, bordas irregulares, em ___. Sem inflamação, descamação ou alteração de sensibilidade.`,
  A: `Melasma ___ (centrofacial / malar / mandibular).`,
  P: `- Explicado que é crônico e recidivante; a base do tratamento é a fotoproteção diária.
- Filtro solar FPS ≥ 50, de amplo espectro, preferir com cor, reaplicar a cada 2 h se exposição; chapéu.
- Com fotoproteção adequada: despigmentante por 3 meses ___ (por compra).
- Retorno em 3 meses.`,
  rx: [
    {trilha: "fora", titulo: "Fotoproteção + despigmentante (compra)", texto: "USO TÓPICO\n1. Protetor solar FPS 50 ou mais, com cor ______ 1 frasco\n   Aplicar no rosto todas as manhãs e reaplicar a cada 2 horas se exposição ao sol.\n2. Hidroquinona 4% + tretinoína 0,05% + fluocinolona acetonida 0,01% creme ______ 1 bisnaga\n   Aplicar nas manchas à noite por 8 a 12 semanas. Suspender se irritar muito.\n   (Não usar na gestação nem na amamentação – opção: ácido azelaico 20% creme de manhã e à noite.)", dose: "F", nota: "TelessaúdeRS 2023, Quadro 31: FPS ≥ 50 com cor, proteção física; despigmentante por 3 meses – fórmula tripla 8–12 semanas, hidroquinona 4% até 12 semanas (ambas contraindicadas na gestação/lactação) ou ácido azelaico 20% [F]. Nenhum na RENAME [F]."}
  ],
  orient: `O melasma é uma mancha causada principalmente pelo sol e pelos hormônios. Não é perigoso, mas tende a voltar.
O mais importante é o filtro solar todos os dias, mesmo em casa e em dias nublados: FPS 50 ou mais, de preferência com cor, reaplicado a cada 2 horas quando estiver no sol. Use chapéu ou boné.
O creme clareador só funciona se você usar o filtro direitinho. Ele pode irritar; se arder muito, pare por alguns dias.
Gestantes e mães que amamentam não devem usar hidroquinona.`,
  alarme: ["Mancha escura única que cresce, muda de cor ou sangra", "Mancha com perda de sensibilidade"],
  encaminhar: "Dermatologia: importante prejuízo psicológico ou funcional, refratário a 3 meses de tratamento otimizado com boa adesão à fotoproteção (TelessaúdeRS 2023).",
  sus: {nacional: "Filtro solar e despigmentantes fora da RENAME [F].", betim: "Não localizei filtro solar ou despigmentante na REMUME Betim [F]."},
  evid: {resumo: "A fotoproteção diária com filtro com cor (óxido de ferro, que bloqueia luz visível) é a base; a fórmula tripla de Kligman e a hidroquinona são os despigmentantes de maior efeito, com irritação e recidiva frequentes. Ácido azelaico é alternativa, inclusive para quem não pode usar hidroquinona.", certeza: "Baixa a moderada (estimada; protocolo de regulação)", fontes: ["tsrs_derm2023", "remume", "wm_commons_pele"]},
  mudancas: ["Item novo (v47) com foto."],
  nv: ["Uso de ácido azelaico na gestação: conferir bula."],
  guia: {
    resumo: "Manchas **castanhas simétricas** na face, piores com sol, em mulher jovem (gestação, anticoncepcional). **Fotoproteção diária com filtro com cor** é o tratamento; despigmentante só funciona com ela. Lesão pigmentada **única**, assimétrica ou que muda: pense em lesão melanocítica.",
    secoes: [
      {t: "Reconhecer e tratar", b: [
        FIG("melasma"),
        {ul: ["Doença crônica e recidivante [F].", "Filtro solar de amplo espectro FPS ≥ 50, diário, reaplicado a cada 2 h no sol; preferir com cor; chapéu/boné [F].", "Com fotoproteção adequada, despigmentante por 3 meses: fórmula tripla à noite 8–12 semanas, hidroquinona 4% até 12 semanas (contraindicadas na gestação/lactação) ou ácido azelaico 20% [F].", "Diferenciais: hiperpigmentação pós-inflamatória, efélides, lentigos solares, ocronose exógena por hidroquinona prolongada [C]."]},
        {ir: [["pele-cancer", "Lesão de pele suspeita de câncer"], ["pele-atlas", "Atlas de diagnóstico diferencial"]]},
        {ref: ["tsrs_derm2023", "wm_commons_pele"]}
      ]}
    ]}
},
// ════════════════ 6. VITILIGO
{
  id: "pele-vitiligo", nome: "Vitiligo", sistema: "Pele", risco: "baixo",
  ciap: "S99", cid: "L80", tags: "vitiligo manchas brancas acrômicas despigmentação TSH tireoide tacrolimo pimecrolimo mometasona corticoide tópico hanseníase pitiríase versicolor pitiríase alba",
  S: `Paciente, ___ anos, com manchas brancas em ___ há ___. Aumentando rapidamente / novas lesões nas últimas semanas ___. Sensibilidade nas manchas ___ (preservada?). Coceira/descamação ___. História familiar de vitiligo ou tireoidopatia ___. Incômodo estético ___.`,
  O: `Máculas acrômicas (branco-giz), bem delimitadas, em ___. Superfície corporal estimada ___% (palma da mão do paciente = 1%). Segmentar ___. Pelos brancos na lesão ___. Sensibilidade térmica/dolorosa nas manchas ___ (normal no vitiligo). Descamação ___.`,
  A: `Vitiligo ___ (não segmentar / segmentar), ___% da superfície, ___ (estável / rapidamente progressivo).`,
  P: `- TSH.
- Proteção solar (roupas, chapéu, filtro FPS ≥ 30).
- Tratamento ___ (expectante / tópico por compra / prednisona se rapidamente progressivo + encaminhamento).
- Retorno em ___ meses com foto para comparar.`,
  rx: [
    {trilha: "fora", titulo: "Tópico (compra)", texto: "USO TÓPICO\nFace, genitais e dobras:\n1. Tacrolimo 0,1% pomada ______ 1 bisnaga\n   Aplicar nas manchas 2 vezes ao dia por 6 meses.\nCorpo (outras áreas):\n2. Furoato de mometasona 0,1% creme ______ 1 bisnaga\n   Aplicar nas manchas 2 vezes ao dia por 2 meses, pausar 1 mês e repetir por mais 2 meses.", dose: "F", nota: "TelessaúdeRS 2023, Quadro 32: inibidor de calcineurina (tacrolimo 0,1% ou pimecrolimo 1%) 2x/dia por 6 meses na face, genitais e dobras; corticoide tópico no corpo (mometasona 2x/dia 2 meses, pausa de 1 mês, mais 2 meses, ou 1x/dia 15 dias/mês por 6 meses); manutenção 2x/semana [F]. Nenhum na RENAME [F]; dexametasona 0,1% creme da REMUME é de baixa potência [F]."},
    {trilha: "sus", titulo: "Rapidamente progressivo – prednisona (REMUME) e encaminhar", texto: "USO ORAL\n1. Prednisona 5 mg ______ ___ comprimidos\n   Adulto: tomar 10 a 20 mg por dia (2 a 4 comprimidos) pela manhã, por até 2 semanas.\n   Criança: 5 a 10 mg por dia por até 2 semanas.", dose: "F", nota: "TelessaúdeRS 2023: prednisona em dose baixa por até 2 semanas (adulto 10–20 mg; criança 5–10 mg), repetir após 4–6 semanas se necessário, e encaminhar [F]. Prednisona 5 e 20 mg na REMUME [F]."}
  ],
  orient: `O vitiligo não é contagioso e não é causado por falta de higiene. As manchas brancas acontecem porque a pele parou de produzir o pigmento naquele lugar.
O tratamento é longo (meses) e a resposta varia. Não tratar também é uma opção, se as manchas não incomodam.
As manchas queimam fácil no sol: use roupas, chapéu e filtro solar.
Vamos pedir um exame da tireoide, porque às vezes vem junto.`,
  alarme: ["Manchas novas surgindo rapidamente em poucas semanas", "Mancha clara com dormência ou sem sensibilidade (pensar em hanseníase)"],
  encaminhar: "Dermatologia: vitiligo extenso (> 10% da superfície corporal), rapidamente progressivo (iniciar tratamento e encaminhar) ou resposta insatisfatória a 6 meses de tratamento tópico otimizado (TelessaúdeRS 2023).",
  sus: {nacional: "Tacrolimo, pimecrolimo e mometasona fora da RENAME [F].", betim: "REMUME Betim: prednisona 5 e 20 mg; dexametasona 0,1% creme (baixa potência) [F]. Fototerapia na rede: confirmar [NV]."},
  evid: {resumo: "Inibidores de calcineurina e corticoides tópicos repigmentam parte dos pacientes com doença limitada e estável; fototerapia e outras terapias ficam para a dermatologia. O vitiligo associa-se a doenças autoimunes da tireoide, por isso o TSH.", certeza: "Baixa a moderada (estimada; protocolo de regulação)", fontes: ["tsrs_derm2023", "remume", "wm_commons_pele"]},
  mudancas: ["Item novo (v47) com fotos e diferencial de manchas claras (hanseníase, pitiríase versicolor)."],
  nv: ["Oferta de fototerapia em Betim."],
  guia: {
    resumo: "Mancha **branco-giz, bem delimitada, com sensibilidade normal** = vitiligo. Mancha **hipocrômica com sensibilidade alterada** = hanseníase até prova em contrário. Peça **TSH**, oriente proteção solar e trate (ou não) conforme o incômodo; **progressão rápida** → prednisona curta e encaminhar.",
    secoes: [
      {t: "Reconhecer e diferenciar manchas claras", b: [
        FIG("vitiligo"),
        FIG("pitiriase-versicolor", "diferencial: hipocromia com descamação fina ao raspar, tronco, verão"),
        {tab: {h: ["Mancha clara", "Como é", "Teste na consulta"], r: [
          ["Vitiligo", "Acrômica (branco-giz), bordas nítidas, pelos podem ficar brancos [C]", "Sensibilidade normal [C]"],
          ["Hanseníase", "Hipocrômica (não branca), bordas imprecisas ou elevadas, pode ter queda de pelos e menos suor [C]", "Sensibilidade térmica/dolorosa diminuída – examinar nervos [F]"],
          ["Pitiríase versicolor", "Hipocrômica ou rósea, descamação fina, tronco e ombros [C]", "Raspar: descamação furfurácea (sinal da unhada) [C]"],
          ["Pitiríase alba", "Hipocrômica mal delimitada, face de criança atópica [C]", "Pele seca; melhora com hidratante [C]"],
          ["Hipocromia pós-inflamatória", "No local de lesão prévia [C]", "História da lesão anterior [C]"]]}},
        {ir: [["in-hansen", "Hanseníase"], ["pitiriase-versicolor", "Pitiríase versicolor"], ["dermatite-atopica", "Dermatite atópica"]]},
        {ref: ["tsrs_derm2023", "gvs2_hansen", "wm_commons_pele"]}
      ]},
      {t: "Tratar (TelessaúdeRS 2023, Quadro 32)", b: [
        {ul: ["Fototipos I e II ou sem incômodo: pode-se não tratar [F].", "Sempre: proteção solar física e filtro FPS ≥ 30; TSH [F].", "Não segmentar < 10% da superfície ou segmentar localizado, estável: face/genitais/dobras – tacrolimo 0,1% ou pimecrolimo 1% 2x/dia por 6 meses; corpo – corticoide tópico em ciclos [F]. Vigiar atrofia, estrias, telangiectasias [F].", "Manutenção: tópico 2x/semana para evitar recidiva [F].", "Rapidamente progressivo: prednisona 10–20 mg/dia (criança 5–10 mg) por até 2 semanas, repetir após 4–6 semanas se preciso, e encaminhar [F]."]},
        {ref: ["tsrs_derm2023"]}
      ]}
    ]}
},
// ════════════════ 7. LESÃO SUSPEITA DE CÂNCER DE PELE
{
  id: "pele-cancer", nome: "Lesão de pele suspeita de câncer (melanoma, basocelular, espinocelular) e ceratose actínica", sistema: "Pele", risco: "moderado",
  ciap: "S77", cid: "C43 / C44 / L57.0", tags: "câncer de pele melanoma ABCDE patinho feio nevo pinta carcinoma basocelular espinocelular ceratose actínica ceratose seborreica fotoproteção biópsia 5-fluoruracila encaminhamento oncologia",
  alerta: "Suspeita de melanoma (ABCDE ou 'patinho feio'): avaliação na referência com brevidade – fotografe, meça e encaminhe com prioridade. Ferida que não cicatriza em área de sol por mais de 4 semanas, lesão que sangra fácil ou cresce rápido: investigar.",
  S: `Paciente, ___ anos, fototipo ___, com lesão em ___ há ___, que ___ (cresceu, mudou de cor/forma, sangra, coça, não cicatriza).
Exposição solar ocupacional/lazer ___, queimaduras com bolhas antes dos 20 anos ___, bronzeamento artificial ___. Câncer de pele prévio ___. Familiar de 1º grau com melanoma ___. Muitas pintas (> 50) ___. Imunossupressão/transplante ___.`,
  O: `Lesão: ___ cm em ___; A (assimetria) ___ B (bordas) ___ C (cores: ___) D (diâmetro ___ mm) E (evolução) ___. 'Patinho feio' ___. Ulceração ___, sangramento ___, aspecto perolado/telangiectasias ___, crosta ceratósica ___.
Linfonodos regionais ___. Outras lesões: ___. Foto registrada ___ (com régua).`,
  A: `Lesão ___ suspeita de ___ (melanoma / carcinoma basocelular / carcinoma espinocelular) / ceratose actínica / lesão benigna (___).`,
  P: `- Fotografia com régua anexada; descrição de localização, tamanho, cores, ulceração e tempo de evolução.
- Encaminhamento para ___ (dermatologia / oncologia cirúrgica de pele / cabeça e pescoço / oftalmologia), prioridade ___.
- Fotoproteção: filtro FPS ≥ 30, reaplicar a cada 2 h no sol, chapéu, evitar sol das 10 às 16 h.
- Ceratose actínica: ___ (5-fluoruracila 5% por compra / encaminhamento se refratária, hiperceratótica ou imunossuprimido).
- Autoexame da pele e retorno ___.`,
  rx: [
    {trilha: "fora", titulo: "Ceratose actínica – 5-fluoruracila 5% (compra)", texto: "USO TÓPICO\n1. Fluoruracila 5% creme ______ 1 bisnaga\n   Aplicar na lesão ou na área das lesões 1 a 2 vezes ao dia por 2 a 4 semanas.\n   É esperado ficar vermelho e inflamado; não suspender por isso – melhora sozinho após terminar.\n2. Protetor solar FPS 30 ou mais: aplicar todas as manhãs e reaplicar a cada 2 horas no sol.", dose: "F", nota: "TelessaúdeRS 2023, Quadro 8; reavaliar 1 mês após o término [F]. Fluoruracila creme não está na RENAME e os serviços especializados também não fornecem [F]."}
  ],
  orient: `Algumas manchas e feridas na pele precisam ser vistas pelo especialista para saber se são câncer de pele. Quanto antes, melhor o resultado.
Leve na consulta o encaminhamento, as fotos e o resultado da biópsia, se tiver.
Proteja-se do sol: filtro solar todos os dias nas áreas expostas, reaplicando a cada 2 horas no sol, chapéu de aba larga, roupas e evitar o sol das 10 às 16 horas. Não faça bronzeamento artificial.
Olhe sua pele uma vez por mês (use espelho ou peça ajuda): procure pinta nova, que mudou, que sangra ou ferida que não fecha em 4 semanas.`,
  alarme: ["Pinta que cresce, muda de forma ou de cor", "Lesão que sangra sozinha ou não cicatriza em 4 semanas", "Caroço novo na axila, virilha ou pescoço perto da lesão"],
  encaminhar: "TelessaúdeRS 2023: suspeita clínica de melanoma → oncologia cirúrgica de pele (ou referência com brevidade); lesão bucal → cabeça e pescoço. Lesões suspeitas pequenas (até 2 cm em tronco/membros, até 1 cm em face/pescoço) com indicação cirúrgica ou que precisam de biópsia → dermatologia; maiores ou em face, orelhas e articulações → oncologia cirúrgica de pele (ou cirurgia plástica se retalho/enxerto); pálpebras → oftalmologia. Ceratose actínica refratária, hiperceratótica ou em imunossuprimido → dermatologia. Alto risco para melanoma (Quadro 4), nevo congênito > 20 cm ou 2 ou mais > 1,5 cm, seguimento de melanoma → dermatologia. CBC ou CEC in situ operados com margens livres (mesmo exíguas): seguimento na APS.",
  sus: {nacional: "Biópsia e exérese pela atenção especializada; 5-fluoruracila tópica fora da RENAME [F]. Rastreamento populacional de câncer de pele não é recomendado – ver 'quando não rastrear' [C].", betim: "Fluxo de biópsia/cirurgia ambulatorial, dermatologia e oncologia cutânea em Betim: confirmar com a regulação (CMCE) [NV]. A Dermatologia da Colônia Santa Izabel atende feridas crônicas venosas/arteriais pelo CMCE (Memorando 0002892/2026) – o fluxo para tumores não foi confirmado [F]."},
  evid: {resumo: "A regra ABCDE e o sinal do 'patinho feio' ajudam a decidir quais lesões pigmentadas encaminhar; nenhuma substitui a dermatoscopia e a histologia. Carcinoma basocelular e espinocelular in situ excisados com margens livres podem seguir na APS. Fotoproteção reduz ceratoses actínicas e carcinoma espinocelular.", certeza: "Moderada (estimada; protocolo de regulação e diretrizes)", fontes: ["tsrs_derm2023", "betim_feridas2026", "wm_commons_pele"]},
  mudancas: ["Item novo (v47) com fotos (ABCD, melanoma, basocelular, espinocelular, ceratose actínica e seborreica) e critérios de encaminhamento por tamanho e local."],
  nv: ["Fluxo de biópsia e cirurgia de pele em Betim (CMCE) e se a APS faz biópsia/exérese."],
  guia: {
    resumo: "Na APS o essencial é **separar o que precisa sair rápido**: lesão pigmentada com **ABCDE** ou que é o **'patinho feio'**, ferida que **não cicatriza** em área de sol, nódulo **perolado** ou **crostoso que cresce**. Fotografe com régua, descreva tamanho e local e encaminhe pelo critério certo. Ceratose seborreica é benigna – não confunda.",
    secoes: [
      {t: "Melanoma: ABCDE e patinho feio", b: [
        FIG("abcd"),
        FIG("melanoma"),
        {ul: ["Suspeita de melanoma: lesão melanocítica com 'patinho feio' (diferente das outras) **ou** ≥ 1 critério ABCDE – Assimetria, Bordas irregulares, Cores variadas (≥ 2), Diâmetro > 6 mm, Evolução (mudança recente) [F].", "Alto risco (Quadro 4): ≥ 3 entre fototipo I–II, efélides, queimadura com bolhas antes dos 20 anos, bronzeamento artificial antes dos 35, > 50 nevos ou nevo atípico, familiar de 1º grau com melanoma – ou os dois últimos juntos [F].", "Unha: faixa pigmentada que alarga ou pigmento que passa para a pele (sinal de Hutchinson) [C]."]},
        {ref: ["tsrs_derm2023", "wm_commons_pele"]}
      ]},
      {t: "Não melanoma e pré-câncer", b: [
        FIG("cbc"),
        FIG("cec"),
        FIG("ceratose-actinica"),
        {tab: {h: ["Lesão", "Aspecto típico", "Conduta"], r: [
          ["Carcinoma basocelular", "Pápula/placa perolada, telangiectasias, pode ulcerar no centro; cresce devagar; face e tronco [C]", "Encaminhar conforme tamanho e local [F]"],
          ["Carcinoma espinocelular", "Placa ou nódulo ceratósico, crostoso ou ulcerado, cresce em semanas a meses; área de sol, lábio, cicatriz antiga [C]", "Encaminhar conforme tamanho e local; lábio/boca → cabeça e pescoço [F]"],
          ["Ceratose actínica", "Lesão áspera (melhor sentida que vista), eritematosa e descamativa, em pele fotolesada [C]", "5-FU 5% na APS; refratária, hiperceratótica ou imunossuprimido → dermatologia [F]"]]}},
        {ref: ["tsrs_derm2023", "wm_commons_pele"]}
      ]},
      {t: "Benigna que assusta: ceratose seborreica", b: [
        FIG("ceratose-seborreica"),
        {ul: ["Lesão marrom a preta, 'colada' na pele, superfície verrucosa e opaca, múltipla, em adultos e idosos [C].", "Não precisa de tratamento; encaminhar só se dúvida diagnóstica ou se mudar rápido [C].", "Erupção súbita de muitas ceratoses seborreicas (sinal de Leser-Trélat) pode indicar câncer interno [C]."]},
        {ir: [["pv-nao-rastrear", "Quando não rastrear (pele)"], ["pele-atlas", "Atlas de diagnóstico diferencial"], ["pele-melasma", "Melasma"]]},
        {ref: ["wm_commons_pele"]}
      ]},
      {t: "Para onde encaminhar (TelessaúdeRS 2023, Quadro 7)", b: [
        {tab: {h: ["Situação", "Destino"], r: [
          ["Suspeita de melanoma", "Oncologia cirúrgica de pele (referência com brevidade); lesão bucal → cabeça e pescoço [F]"],
          ["Suspeita ou maligna ≤ 2 cm (tronco/membros) ou ≤ 1 cm (face/pescoço)", "Dermatologia [F]"],
          ["Suspeita ou maligna > 2 cm / > 1 cm, ou em face, orelhas, articulações", "Oncologia cirúrgica de pele; se precisar de retalho/enxerto e não abordada lá, cirurgia plástica [F]"],
          ["Pálpebra", "Oftalmologia (melanoma → oncologia cirúrgica) [F]"],
          ["Lábio ou boca suspeito", "Oncologia cabeça e pescoço; lesão pequena para biópsia → estomatologia [F]"],
          ["Lipoma/cisto ≤ 5 cm com desejo de retirada", "Cirurgia ambulatorial; > 5 cm → cirurgia geral [F]"]]},
         nota: "Encaminhamento deve ter: local, tamanho em cm, características, ulceração, tempo de evolução, **fotos**, laudo de biópsia se houver e fatores de risco [F]."},
        {ref: ["tsrs_derm2023"]}
      ]}
    ]}
},
// ════════════════ 8. ALOPECIAS
{
  id: "pele-alopecia", nome: "Queda de cabelo e alopecias (areata, androgenética, eflúvio telógeno)", sistema: "Pele", risco: "baixo",
  ciap: "S23", cid: "L63 / L64 / L65.0", tags: "queda de cabelo alopecia areata androgenética calvície eflúvio telógeno pós-parto teste de tração ferritina TSH sífilis minoxidil clobetasol alopecia cicatricial",
  S: `Paciente, ___ anos, com queda de cabelo ___ (em placas / difusa / entradas e vértex) há ___. Gatilhos nos 3–4 meses anteriores: parto ___, cirurgia/doença grave ___, febre/COVID ___, dieta/perda de peso rápida ___, estresse ___, suspensão/troca de anticoncepcional ___, medicamentos novos ___.
Coceira, dor, descamação, pus no couro cabeludo ___. Unhas ___. Menstruação/hirsutismo/acne ___. História familiar de calvície ___.`,
  O: `Padrão: ___ (placa redonda lisa / rarefação fronto-temporal e vértex / difusa). Óstios foliculares ___ (preservados / ausentes – cicatricial). Eritema, escamas, pústulas ___. Teste de tração ___ (positivo: 3–5 fios fáceis numa mecha ou 15 em 3 mechas).
Exames: hemograma ___, ferritina ___, TSH ___, teste de sífilis ___.`,
  A: `___ (alopecia areata, < / > 30% do couro cabeludo; alopecia androgenética; eflúvio telógeno por ___; alopecia cicatricial a esclarecer).`,
  P: `- Areata: TSH e teste rápido de sífilis; ___ (expectante / corticoide tópico potente por 90 dias).
- Eflúvio telógeno: identificar e corrigir a causa; hemograma, ferritina e TSH se indicado; ferro se ferritina < 40.
- Androgenética: minoxidil 5% contínuo (por compra); resultado só após 4–6 meses.
- Retorno em 3 meses.`,
  rx: [
    {trilha: "evidencia", titulo: "Alopecia areata (< 30%) – corticoide tópico potente", texto: "USO TÓPICO\n1. Propionato de clobetasol 0,05% solução capilar ______ 1 frasco\n   Aplicar na placa e 1 cm ao redor 1 vez ao dia por 90 dias. Se melhorar, ir espaçando até parar entre 3 e 6 meses.", dose: "F", nota: "TelessaúdeRS 2023, Quadro 24: dipropionato de betametasona 0,05% ou clobetasol 0,05% 1x/dia por 90 dias; criança – clobetasol creme 2x/dia 6 semanas, pausa de 6 e mais 6; barba/sobrancelha – mometasona 0,1% creme 2x/dia 6 semanas [F]. Clobetasol está na RENAME só no CEAF (Especializado) e não na REMUME [F] – na prática, compra [I]."},
    {trilha: "fora", titulo: "Alopecia androgenética – minoxidil (compra)", texto: "USO TÓPICO\n1. Minoxidil 5% solução capilar ______ 1 frasco\n   Aplicar 20 gotas no couro cabeludo seco ___ (homem: 2 vezes ao dia; mulher: 1 vez ao dia), uso contínuo.\n   Pode aumentar a queda nos 2 primeiros meses; resultado em 4 a 6 meses.", dose: "F", nota: "TelessaúdeRS 2023, Quadro 24 [F]. Fora da RENAME [F]."}
  ],
  orient: `A queda de cabelo tem várias causas e a maioria tem tratamento ou melhora sozinha.
Queda difusa 3 a 4 meses depois de parto, cirurgia, doença, dieta ou estresse (eflúvio) melhora quando a causa passa: o cabelo volta a crescer em 6 a 12 meses.
Na alopecia areata (placas redondas), o cabelo pode voltar sozinho; o remédio ajuda a acelerar.
Na calvície (entradas e topo da cabeça), o minoxidil precisa ser usado todo dia e para sempre; parar faz o cabelo cair de novo.`,
  alarme: ["Couro cabeludo vermelho, com cascas, pus ou dor", "Placas sem cabelo com pele lisa e brilhante, sem 'poros' (cicatriz)", "Queda com excesso de pelos no corpo, acne e menstruação irregular"],
  encaminhar: "Dermatologia (TelessaúdeRS 2023): alopecia cicatricial; areata > 30% do couro cabeludo, ofiásica ou refratária a 3 meses; androgenética refratária a 12 meses; queda há ≥ 6 meses com tração positiva sem fator desencadeante. Encaminhar com fotos, hemograma, ferritina, VDRL e TSH.",
  sus: {nacional: "Clobetasol no CEAF; minoxidil fora da RENAME [F].", betim: "Não localizei clobetasol, betametasona tópica ou minoxidil na REMUME Betim [F]."},
  evid: {resumo: "Alopecia areata pode repilar espontaneamente; corticoide tópico potente é o tratamento inicial na doença limitada. Minoxidil tópico tem eficácia comprovada na alopecia androgenética, com uso contínuo. O eflúvio telógeno é autolimitado após remover o gatilho; reposição de ferro parece beneficiar quem tem ferritina baixa.", certeza: "Moderada para minoxidil; baixa para as demais (estimada; protocolo de regulação)", fontes: ["tsrs_derm2023", "rename", "remume", "wm_commons_pele"]},
  mudancas: ["Item novo (v47) com fotos."],
  nv: ["Ferritina < 40: o protocolo escreve 'ng/dL' – a unidade usual é ng/mL; conferir.", "Tinea capitis em criança com placa descamativa: ver dermatofitose (tratamento oral)."],
  guia: {
    resumo: "Três perguntas resolvem a maioria: **placa ou difusa?** **há inflamação/cicatriz?** **houve gatilho 3–4 meses antes?** Placa lisa = **areata** (TSH e sífilis); rarefação fronto-temporal/vértex = **androgenética** (minoxidil contínuo); queda difusa após gatilho = **eflúvio** (tratar a causa, ferritina). Sem óstios = **cicatricial** → dermatologia.",
    secoes: [
      {t: "Reconhecer", b: [
        FIG("alopecia-areata"),
        FIG("alopecia-androgenetica"),
        {tab: {h: ["Tipo", "Pistas", "Exames"], r: [
          ["Areata", "Placas redondas/ovais, pele lisa, óstios preservados, sem inflamação [F]", "TSH e teste de sífilis [F]"],
          ["Androgenética", "Afinamento progressivo; fronto-temporal ou vértex; sem inflamação [F]", "Mulher com hiperandrogenismo: investigar [C]"],
          ["Eflúvio telógeno", "Queda difusa 3–4 meses após gatilho; tração positiva [F]", "Hemograma, ferritina, TSH conforme suspeita [F]"],
          ["Cicatricial", "Placas sem óstios foliculares (lúpus discoide, líquen plano pilar) [F]", "Encaminhar [F]"],
          ["Tinea capitis", "Criança, placas com descamação, pelos quebrados [C]", "Tratamento oral – ver dermatofitose [F]"]]}},
        {ref: ["tsrs_derm2023", "wm_commons_pele"]}
      ]},
      {t: "Tratar", b: [
        {ul: ["Areata < 30%: expectante se não incomoda; ou corticoide potente 1x/dia por 90 dias na placa e 1 cm ao redor [F].", "Eflúvio: causas – pós-parto, parar anticoncepcional, cirurgia, dieta, perda de peso rápida, estresse, tireoide, doença grave, COVID-19, fármacos (captopril, anticoagulantes, lítio, ISRS, anabolizantes) [F]; crescimento volta em 6–12 meses [F]; ferro se ferritina < 40 [F].", "Androgenética: minoxidil 5% 20 gotas 2x/dia (homem) ou 1x/dia (mulher), contínuo [F]."]},
        {ir: [["tinea", "Dermatofitose (tinea capitis)"], ["cr-hipotireoidismo", "Hipotireoidismo"], ["cr-ferro", "Deficiência de ferro"], ["sop", "SOP"]]},
        {ref: ["tsrs_derm2023"]}
      ]}
    ]}
},
// ════════════════ 9. URTICÁRIA CRÔNICA
{
  id: "pele-urticaria-cronica", nome: "Urticária crônica (> 6 semanas) e angioedema recorrente", sistema: "Pele", risco: "baixo",
  ciap: "S98", cid: "L50.8", tags: "urticária crônica espontânea urticas recorrentes mais de 6 semanas angioedema anti-histamínico dose quádrupla loratadina cetirizina fexofenadina IECA AINE",
  alerta: "Angioedema de língua/glote, rouquidão, falta de ar, chiado ou hipotensão = urgência (anafilaxia). Angioedema recorrente SEM urticas: suspender IECA e pensar em angioedema hereditário/adquirido – imunologia.",
  S: `Paciente, ___ anos, com placas que coçam e somem em < 24 h, ≥ 2 vezes por semana, há ___ semanas (> 6). Angioedema ___ (local ___). Gatilhos físicos (pressão, frio, calor, exercício, sol) ___.
Medicamentos: AINE ___, IECA ___, outros ___. Febre, artralgia, perda de peso ___. Tireoide ___. Relação com alimentos/menstruação/estresse ___. Tratamentos prévios (droga, dose, tempo) ___.`,
  O: `Urticas ___ (sem lesão residual/púrpura). Dermografismo ___. Angioedema ___. Exames: hemograma ___, PCR ___, VHS ___, TSH ___.`,
  A: `Urticária crônica ___ (espontânea / induzível), ___ (com / sem) angioedema.`,
  P: `- Evitar AINE e revisar IECA.
- Anti-histamínico de 2ª geração em uso diário fixo (não só quando coça).
- Hemograma, PCR e VHS (TSH se suspeita).
- Reavaliar em 2 semanas: se não controlar, aumentar até 4 vezes a dose.
- 4 semanas na dose máxima sem resposta → dermatologia.`,
  rx: [
    {trilha: "sus", titulo: "Anti-histamínico em uso fixo (REMUME)", texto: "USO ORAL\n1. Loratadina 10 mg ______ 30 comprimidos\n   Tomar 1 comprimido por dia, todos os dias, mesmo sem placas.\n   Se em 2 semanas não controlar: aumentar para 1 comprimido 2 vezes ao dia e, se preciso, até 2 comprimidos 2 vezes ao dia (4 por dia).", dose: "F", nota: "TelessaúdeRS 2023, Quadro 25: anti-histamínico de 2ª geração em dose padrão fixa; após 2 semanas, até 4 vezes a dose padrão; após 4 semanas na dose máxima sem resposta, encaminhar [F]. Doses acima da bula são uso fora de bula (diretriz internacional citada pelo protocolo) [F]. Gestantes e lactantes: loratadina/desloratadina ou cetirizina/levocetirizina; hepatopatia: fexofenadina, desloratadina ou bilastina [F]. Loratadina 10 mg e 1 mg/mL na REMUME [F]."},
    {trilha: "ambos", titulo: "Crise intensa sem resposta ao anti-histamínico – curso curto de corticoide", texto: "USO ORAL\n1. Prednisona 20 mg ______ ___ comprimidos\n   Tomar ___ (20 a 50 mg) pela manhã por 7 a 10 dias.", dose: "F", nota: "TelessaúdeRS 2023: cursos infrequentes de prednisolona 20–50 mg/dia por 7–10 dias em exacerbações graves [F]; o app usa prednisona da REMUME (equivalência 1:1 com prednisolona [C])."}
  ],
  orient: `A urticária crônica raramente é alergia a um alimento específico e quase nunca se descobre uma causa. Ela costuma melhorar com o tempo.
O antialérgico deve ser tomado todos os dias, no mesmo horário, mesmo sem placas: é assim que ele controla.
Evite anti-inflamatórios (ibuprofeno, diclofenaco, nimesulida, AAS), que pioram a urticária.
Inchaço da língua ou da garganta, rouquidão ou falta de ar: procure urgência imediatamente.`,
  alarme: ["Inchaço da língua, lábios ou garganta", "Falta de ar, chiado ou rouquidão", "Tontura ou desmaio", "Placas que duram mais de 24 h, doem ou deixam mancha roxa"],
  encaminhar: "Urgência: angioedema/urticária com obstrução de via aérea, broncoespasmo ou hipotensão. Dermatologia: urticária crônica refratária a ≥ 4 semanas de tratamento otimizado. Imunologia: angioedema recorrente sem urticas e sem causa, ou após episódio grave (TelessaúdeRS 2023). Placas que duram > 24 h, dolorosas ou com púrpura: pensar em vasculite urticariforme.",
  sus: {nacional: "RENAME: loratadina [C].", betim: "REMUME Betim: loratadina 10 mg e 1 mg/mL, prometazina 25 mg, prednisona 5 e 20 mg [F]; cetirizina e fexofenadina não constam [F]."},
  evid: {resumo: "Anti-histamínicos de 2ª geração em uso contínuo controlam a maioria dos casos; doses até 4 vezes a padrão, recomendadas pela diretriz internacional, aumentam a resposta. Omalizumabe e ciclosporina ficam para a especialidade. Investigação extensa sem pista clínica não é recomendada.", certeza: "Moderada (estimada; protocolo de regulação baseado em diretriz internacional)", fontes: ["tsrs_derm2023", "remume", "wm_commons_pele"]},
  mudancas: ["Item novo (v47) com foto."],
  nv: ["Omalizumabe para urticária crônica no SUS: não verificado."],
  guia: {
    resumo: "Urticas recorrentes **≥ 2x/semana por > 6 semanas** = crônica. **Anti-histamínico fixo** (loratadina da REMUME), subir até **4x** em 2 semanas, **hemograma, PCR e VHS**, sem AINE/IECA. Sem resposta em 4 semanas na dose máxima → dermatologia. Angioedema sem urticas → **IECA? imunologia**.",
    secoes: [
      {t: "Reconhecer e investigar", b: [
        FIG("urticaria"),
        {ul: ["Cada urtica some em < 24 h sem marca; se dura mais, dói ou deixa púrpura → vasculite urticariforme [C].", "Anamnese dirigida (Quadro 25): agentes físicos, AINE, IECA, infecções, ciclo menstrual, tireoide, sintomas sistêmicos [F].", "Exames de rotina: hemograma, PCR e VHS; TSH se suspeita [F]."]},
        {ir: [["urticaria", "Urticária aguda"], ["anafilaxia", "Anafilaxia"]]},
        {ref: ["tsrs_derm2023", "wm_commons_pele"]}
      ]},
      {t: "Escada de tratamento", b: [
        {ol: ["Anti-histamínico de 2ª geração, dose padrão, uso fixo (loratadina 10 mg/dia na REMUME) [F].", "Após 2 semanas sem controle: até 4 vezes a dose padrão [F].", "Considerar montelucaste, anti-H2 (evidência baixa) ou anti-histamínico sedativo à noite [F].", "Exacerbação grave: prednisolona 20–50 mg/dia por 7–10 dias, raramente [F].", "4 semanas na dose máxima sem resposta → dermatologia [F]."]},
        {ref: ["tsrs_derm2023"]}
      ]}
    ]}
},
// ════════════════ 10. FARMACODERMIA GRAVE
{
  id: "pele-farmacodermia", nome: "Reação cutânea grave a medicamento (Stevens-Johnson / NET) – reconhecer e referenciar", sistema: "Pele", risco: "alto",
  ciap: "A85", cid: "L51.1 / L51.2", tags: "farmacodermia reação a medicamento Stevens-Johnson necrólise epidérmica tóxica NET bolhas pele descolando mucosas olhos boca alopurinol carbamazepina lamotrigina fenitoína sulfa nevirapina DRESS exantema",
  alerta: "Pele dolorosa, bolhas ou descolamento, lesões em alvo atípicas ou purpúricas e acometimento de olhos, boca ou genitais após medicamento novo = SJS/NET até prova em contrário: SUSPENDER o medicamento suspeito e transferir para hospital (SAMU 192). Não esperar exames.",
  S: `Paciente, ___ anos, com febre/mal-estar há ___ dias seguidos de lesões de pele há ___ dias. Dor/ardor na pele ___. Olhos (vermelhos, secreção, dor) ___. Boca (feridas, não consegue comer) ___. Genitais ___.
Medicamentos iniciados nas últimas 8 semanas (nome, data de início): ___. Alopurinol, carbamazepina, lamotrigina, fenitoína, fenobarbital, sulfametoxazol-trimetoprima, nevirapina, AINE ___.`,
  O: `${VITAIS}
Pele: máculas purpúricas / alvos atípicos ___, bolhas ___, descolamento ___% da superfície, Nikolsky ___. Mucosas: conjuntivas ___, oral ___, genital ___. Linfonodos ___, edema facial ___.`,
  A: `Suspeita de ___ (SJS / NET / DRESS / exantema medicamentoso simples), droga provável ___.`,
  P: `- Medicamento suspeito suspenso às ___ h (e outros não essenciais).
- SAMU acionado / transferência para hospital de referência às ___ h.
- Registro da reação no prontuário e orientação para nunca mais usar ___ (e drogas da mesma classe).
- Notificação de evento adverso (farmacovigilância).`,
  orient: `Você teve uma reação grave a um remédio e precisa de cuidado no hospital.
Nunca mais tome ___. Anote o nome, guarde na carteira e avise em toda consulta, farmácia e internação.
Familiares de primeiro grau devem contar isso ao médico antes de usar o mesmo remédio.`,
  alarme: ["Bolhas ou pele descolando", "Feridas na boca, olhos vermelhos e doloridos ou feridas nos genitais", "Febre com manchas pelo corpo depois de remédio novo", "Pele que dói ao toque"],
  encaminhar: "SJS/NET suspeita: hospital de referência via SAMU; descolamento > 10% da superfície → centro de queimados ou UTI sem demora (diretriz britânica 2016). Exantema com febre, edema facial, linfonodos e alteração hepática semanas após o início da droga (suspeita de DRESS): hospital no mesmo dia.",
  sus: {nacional: "Notificação de evento adverso a medicamento ao sistema de farmacovigilância (VigiMed/ANVISA) [C].", betim: "Hospital de referência para queimados/UTI na regulação de Betim: confirmar [NV]."},
  evid: {resumo: "Uma droga é identificada em cerca de 85% dos casos de SJS/NET, geralmente 5 a 28 dias após o início; suspender cedo o fármaco suspeito reduz a mortalidade. O descolamento epidérmico define SJS (< 10%), sobreposição (10–30%) e NET (> 30%). O tratamento é de suporte em centro especializado; terapias imunomoduladoras não têm benefício estabelecido na APS.", certeza: "Moderada (diretriz baseada em séries e coortes)", fontes: ["bad_sjs2016", "wm_commons_pele"]},
  mudancas: ["Item novo (v47) com foto."],
  nv: ["Hospital de referência e fluxo de transferência em Betim.", "DRESS: critérios RegiSCAR não conferidos nesta revisão."],
  guia: UG({
    urg: "Bolhas/descolamento, pele dolorosa ou mucosas (olhos, boca, genitais) após remédio novo = SJS/NET: SUSPENDER a droga suspeita e chamar o SAMU · não esperar exames · registrar a droga.",
    resumo: "O que mata na SJS/NET é **manter a droga** e **atrasar a transferência**. Pródromo febril, **dor na pele**, **alvos atípicos/púrpura** e **mucosas** acometidas cedo. Pergunte por toda droga nova nas últimas **8 semanas**.",
    fluxo: [
      {t: "Erupção após medicamento novo (5–28 dias, até 8 semanas)"},
      {t: "Bolhas, descolamento, Nikolsky, pele dolorosa ou mucosas (olhos, boca, genitais)?", ramos: [
        {r: "Sim", n: [{t: "Suspender a droga suspeita + SAMU 192: hospital (> 10% descolamento → queimados/UTI)", k: "stop"}]},
        {r: "Não", n: [{t: "Febre alta, edema facial, linfonodos ou icterícia? (DRESS)", k: "warn"}]}]},
      {t: "DRESS possível → hospital no mesmo dia; exantema simples sem sinais de alarme → suspender a droga, anti-histamínico e reavaliar em 24–48 h", k: "warn"}
    ],
    fluxoNota: "Sinais precoces, limiares de descolamento, drogas e conduta: diretriz britânica de SJS/NET 2016 [F]. Conduta no exantema simples e no DRESS [C].",
    ref: ["bad_sjs2016"],
    doses: [
      ["Medicamento suspeito", "Suspender já (e outros não essenciais) [F]", "Suspender já [F]"],
      ["Dor e prurido até a remoção", "Paracetamol; evitar AINE (podem ser culpados) [I]", "Paracetamol por peso [I]"],
      ["Corticoide sistêmico", "Não iniciar na UBS – decisão hospitalar [I]", "Idem [I]"]],
    dosesNota: "Na APS, a única 'dose' decisiva é parar a droga e transferir [F].",
    refDoses: ["bad_sjs2016"],
    depois: [
      "Drogas mais associadas: alopurinol, carbamazepina, lamotrigina, nevirapina, AINE oxicam, fenobarbital, fenitoína, sulfonamidas e sulfassalazina [F].",
      "Registrar em destaque no prontuário e na carteira do paciente; notificar como evento adverso [C].",
      "Seguimento após alta: olhos (sequelas), boca, genitais e saúde mental [C]."
    ],
    extraDepois: [FIG("sjs-mucosa"), {ir: [["anafilaxia", "Anafilaxia"], ["exantema", "Exantema agudo"], ["pele-atlas", "Atlas de diagnóstico diferencial"]]}]
  })
},
// ════════════════ 11. ECZEMA DISIDRÓTICO E DE ESTASE
{
  id: "pele-eczemas", nome: "Eczema disidrótico (mãos e pés) e eczema de estase (pernas)", sistema: "Pele", risco: "baixo",
  ciap: "S88", cid: "L30.1 / I83.1", tags: "eczema disidrótico disidrose bolhinhas nas mãos vesículas palmas eczema de estase dermatite ocre insuficiência venosa pernas permanganato meia elástica corticoide tópico úlcera venosa",
  S: `Paciente, ___ anos, com ___ (bolhinhas que coçam nas palmas/laterais dos dedos/plantas / pele vermelha, escura e descamando nas pernas) há ___. Contato com água, detergentes, luvas ___. Varizes, inchaço nas pernas ___, trombose prévia ___. Feridas ___. Tratamentos usados (cremes, pomadas caseiras) ___.`,
  O: `Mãos/pés: vesículas profundas ___, descamação ___, fissuras ___, sinais de infecção ___.
Pernas: edema ___, hiperpigmentação ocre ___, eritema/descamação ___, exsudação/crostas ___, varizes ___, úlcera ___ (local ___, tamanho ___ cm), pulsos pediosos ___.`,
  A: `Eczema ___ (disidrótico / de estase) ___ (com / sem) infecção secundária.`,
  P: `- Disidrótico: corticoide tópico de alta potência 2x/dia 2–4 semanas; sabonete suave, hidratante após lavar, luvas para água e irritantes.
- Estase: corticoide tópico em pomada 1–2 semanas; compressas úmidas se exsudação; elevar as pernas 30 min 3x/dia; meia de média compressão (se pulsos presentes); hidratante oleoso; caminhar.
- Retorno em 2–4 semanas.`,
  rx: [
    {trilha: "evidencia", titulo: "Corticoide tópico de potência adequada (compra)", texto: "USO TÓPICO\nMãos/pés (disidrótico):\n1. Propionato de clobetasol 0,05% creme ______ 1 bisnaga\n   Aplicar nas lesões 2 vezes ao dia por 2 a 4 semanas.\nPernas (estase):\n1. Valerato de betametasona 0,1% pomada ______ 1 bisnaga\n   Aplicar nas placas 1 a 2 vezes ao dia por 1 a 2 semanas.", dose: "F", nota: "TelessaúdeRS 2023, Quadro 13: disidrótico – alta ou muito alta potência (clobetasol 0,05% ou dipropionato de betametasona 0,05%) 2x/dia 2–4 semanas; estase – média ou alta potência em pomada (mometasona 0,1% ou valerato de betametasona 0,1%) 1–2x/dia 1–2 semanas [F]. Clobetasol só no CEAF; não localizei na REMUME corticoide tópico de média/alta potência – a dexametasona 0,1% creme da REMUME é de baixa potência (Quadro 12) [F]."},
    {trilha: "ambos", titulo: "Exsudação/crostas – compressa de permanganato", texto: "USO TÓPICO\n1. Permanganato de potássio 100 mg ______ ___ comprimidos\n   Dissolver 1 comprimido em 1 a 4 litros de água até ficar rosa-claro. Molhar pano limpo ou gaze, aplicar nas áreas e cobrir com atadura seca; usar enquanto houver secreção.", dose: "F", nota: "TelessaúdeRS 2023, Quadro 13 [F]. Permanganato 100 mg comprimido para uso tópico na RENAME (Básico) [F]; não localizei na REMUME Betim [F]."}
  ],
  orient: `Mãos: use sabonete suave, passe hidratante ou vaselina sempre que lavar as mãos e use luvas para lavar louça, roupa ou mexer com produtos de limpeza.
Pernas: deite com as pernas acima do coração por 30 minutos, 3 vezes ao dia; caminhe e mexa os pés quando estiver sentado; use a meia elástica de manhã à noite (se indicada); passe hidratante oleoso sem perfume depois do banho.
Não passe pomadas caseiras, álcool ou sabão em pó nas lesões.`,
  alarme: ["Ferida aberta na perna", "Vermelhidão quente que se espalha com febre", "Perna inchada e dolorosa de um lado só", "Pus ou crostas amarelas nas bolhinhas"],
  encaminhar: "Úlcera venosa ou arterial de difícil cicatrização: Betim oferece pelo CMCE a 'Consulta de Avaliação de Feridas FHEMIG' (Dermatologia da Colônia Santa Izabel), com regulação (Memorando 0002892/2026). Eczemas refratários ao tratamento otimizado → dermatologia. Perna inchada e dolorosa de um lado → afastar TVP.",
  sus: {nacional: "RENAME 2024: permanganato de potássio 100 mg (Básico); clobetasol no CEAF [F].", betim: "REMUME Betim: dexametasona 0,1% creme (baixa potência) e sulfadiazina de prata 1% [F]. Meias de compressão e curativos especiais: confirmar na rede [NV]. Feridas crônicas venosas/arteriais: Consulta de Avaliação de Feridas FHEMIG via CMCE [F]."},
  evid: {resumo: "Corticoide tópico de potência adequada ao local, por tempo curto, controla os dois eczemas; no de estase, compressão, elevação e cuidado com a pele tratam a causa (hipertensão venosa) e previnem úlcera.", certeza: "Moderada (estimada; protocolo de regulação)", fontes: ["tsrs_derm2023", "betim_feridas2026", "rename", "remume", "wm_commons_pele"]},
  mudancas: ["Item novo (v47) com foto e o fluxo de feridas crônicas de Betim (FHEMIG/Colônia Santa Izabel)."],
  nv: ["Meias de compressão na rede de Betim.", "Pomada de corticoide de média/alta potência acessível em Betim."],
  guia: {
    resumo: "**Disidrótico:** vesículas profundas e pruriginosas nas palmas e laterais dos dedos – corticoide potente + proteção das mãos. **Estase:** placas eritematoacastanhadas na face medial das pernas em quem tem insuficiência venosa – corticoide em pomada curto, **compressão, elevação e hidratante**; vigiar úlcera.",
    secoes: [
      {t: "Eczema de estase", b: [
        FIG("eczema-estase"),
        {ul: ["Higiene com sabonete neutro; corticoide de média/alta potência em pomada 1–2x/dia por 1–2 semanas [F].", "Crostas ou exsudação: compressas úmidas com soro, água limpa ou permanganato diluído [F].", "Perda de peso, elevação dos membros 30 min 3x/dia, caminhada, dorsiflexão, meias de 20–30 mmHg, hidratante oleoso sem perfume [F].", "Antes de comprimir: palpar pulsos (doença arterial contraindica compressão) [C]."]},
        {ir: [["ivc", "Insuficiência venosa crônica"], ["celulite", "Celulite e erisipela"], ["tvp", "Suspeita de TVP"], ["po-acamado", "Pessoa acamada e feridas"]]},
        {ref: ["tsrs_derm2023", "betim_feridas2026", "wm_commons_pele"]}
      ]},
      {t: "Eczema disidrótico", b: [
        {ul: ["Vesículas profundas ('sagu') em palmas, laterais dos dedos e plantas, muito pruriginosas, em surtos [C].", "Corticoide de alta ou muito alta potência, creme ou pomada, 2x/dia por 2–4 semanas [F].", "Sabonete suave, hidratante/vaselina após lavar, luvas para água e irritantes [F].", "Diferenciais: tinea pedis/manuum (micológico), dermatite de contato, escabiose (sulcos, prurido noturno, contactantes) [C]."]},
        {ir: [["dermatite-contato", "Dermatite de contato"], ["tinea", "Dermatofitose"], ["escabiose", "Escabiose"]]},
        {ref: ["tsrs_derm2023"]}
      ]}
    ]}
},
// ════════════════ 12. ATLAS DE DIAGNÓSTICO DIFERENCIAL
{
  id: "pele-atlas", nome: "Atlas de diagnóstico diferencial da pele (fotos)", sistema: "Pele", risco: "baixo",
  ciap: "S29", cid: "L98.9", tags: "atlas fotos imagens diagnóstico diferencial lesões de pele placa descamativa mancha branca mancha clara lesão pigmentada pinta ferida úlcera crosta exantema tronco dobras",
  S: `Paciente, ___ anos, com lesão ___ em ___ há ___. Sintomas (coceira, dor, dormência) ___. Evolução ___. Contatos com quadro semelhante ___. Medicamentos novos ___. Exposição (sol, animais, mata, viagens, relação sexual desprotegida) ___.`,
  O: `Lesão elementar: ___ (mácula, pápula, placa, vesícula, bolha, pústula, nódulo, úlcera, crosta, escama). Cor ___, tamanho ___, limites ___, distribuição ___. Sensibilidade na lesão ___. Mucosas, palmas/plantas, unhas, couro cabeludo ___.`,
  A: `Hipótese principal: ___; diferenciais: ___.`,
  P: `- Conduta conforme a hipótese (ver o item específico).
- Foto registrada para comparar no retorno.`,
  orient: `Fotografe a lesão no dia da consulta e a cada semana, com boa luz e uma régua ou moeda ao lado: ajuda a saber se está melhorando.`,
  alarme: ["Bolhas ou pele descolando", "Mancha com dormência", "Pinta que muda", "Ferida que não fecha em 4 semanas"],
  encaminhar: "Conforme o diagnóstico; dúvida diagnóstica persistente → teleconsultoria (Telessaúde UFMG) ou dermatologia, com fotos.",
  sus: {nacional: "—", betim: "Teleconsultoria do Telessaúde UFMG disponível para a APS [C]."},
  evid: {resumo: "Atlas de apoio visual: fotos de lesões comuns e de seus principais diferenciais, com as pistas que mais ajudam a separá-los na consulta. As fotos não substituem o exame: a aparência varia com o fototipo, o tempo de evolução e tratamentos prévios.", certeza: "—", fontes: ["wm_commons_pele", "tsrs_derm2023", "abd_pr2008", "gvs2_hansen", "gvs2_lt"]},
  mudancas: ["Item novo (v47)."],
  nv: ["Muitas fotos são de peles claras; o eritema é menos visível em pele negra (procure violáceo/acastanhado e palpe)."],
  guia: {
    resumo: "Use pelo **tipo de lesão**: placa descamativa, mancha clara, lesão pigmentada, ferida/crosta, erupção no tronco, dobras. Cada bloco traz fotos e a **pista que separa**. Clique no nome para abrir o item completo.",
    secoes: [
      {t: "Placa vermelha descamativa", b: [
        FIG("tinea-corporis"), FIG("psoriase"), FIG("pr-medalhao"),
        {tab: {h: ["Diagnóstico", "Pista que separa"], r: [
          ["Tinea corporis", "Anel com borda ativa descamativa e centro claro; cresce para fora; prurido; micológico positivo [C]"],
          ["Psoríase", "Placa espessa, bem delimitada, escamas prateadas; cotovelos, joelhos, couro cabeludo, unhas [C]"],
          ["Pitiríase rósea (placa-mãe)", "Oval, colarete de escamas por dentro da borda; dias depois, várias lesões no tronco [F]"],
          ["Eczema numular", "Placa em moeda, vesículas/crostas, muito pruriginosa, pele seca [C]"],
          ["Hanseníase", "Placa com borda infiltrada e sensibilidade diminuída [F]"]]}},
        {ir: [["tinea", "Dermatofitose"], ["cr-psoriase", "Psoríase"], ["pele-pitiriase-rosea", "Pitiríase rósea"], ["in-hansen", "Hanseníase"]]},
        {ref: ["wm_commons_pele", "abd_pr2008"]}
      ]},
      {t: "Mancha clara ou branca", b: [
        FIG("vitiligo"), FIG("pitiriase-versicolor"),
        {tab: {h: ["Diagnóstico", "Pista que separa"], r: [
          ["Vitiligo", "Branco-giz, nítida, sensibilidade normal [C]"],
          ["Hanseníase", "Hipocrômica, sensibilidade térmica/dolorosa alterada, nervo espessado [F]"],
          ["Pitiríase versicolor", "Descamação fina ao raspar, tronco, calor [C]"],
          ["Pitiríase alba", "Criança atópica, face, mal delimitada, pele seca [C]"]]}},
        {ir: [["pele-vitiligo", "Vitiligo"], ["pitiriase-versicolor", "Pitiríase versicolor"], ["in-hansen", "Hanseníase"]]},
        {ref: ["wm_commons_pele", "gvs2_hansen"]}
      ]},
      {t: "Lesão pigmentada (pinta)", b: [
        FIG("abcd"), FIG("ceratose-seborreica"), FIG("melasma"),
        {tab: {h: ["Diagnóstico", "Pista que separa"], r: [
          ["Melanoma", "ABCDE, 'patinho feio', mudança recente [F]"],
          ["Nevo comum", "Simétrico, uma cor, borda regular, estável [F]"],
          ["Ceratose seborreica", "'Colada', verrucosa, opaca, múltipla, idoso [C]"],
          ["Melasma", "Manchas simétricas na face, sem relevo, piora com sol [F]"]]}},
        {ir: [["pele-cancer", "Lesão suspeita de câncer"], ["pele-melasma", "Melasma"]]},
        {ref: ["wm_commons_pele", "tsrs_derm2023"]}
      ]},
      {t: "Ferida, crosta ou úlcera", b: [
        FIG("impetigo"), FIG("leishmaniose"), FIG("cec"), FIG("cbc"),
        {tab: {h: ["Diagnóstico", "Pista que separa"], r: [
          ["Impetigo", "Crostas cor de mel, criança, dias de evolução, contágio [C]"],
          ["Leishmaniose tegumentar", "Úlcera indolor, bordas elevadas, fundo granuloso, ≥ 3 semanas, exposição a área de transmissão [F]"],
          ["Esporotricose", "Nódulos/úlceras em cadeia linfática após arranhadura de gato [F]"],
          ["Carcinoma espinocelular", "Lesão crostosa/ulcerada que cresce em área de sol, idoso [C]"],
          ["Carcinoma basocelular", "Borda perolada com telangiectasias, úlcera central que não fecha [C]"],
          ["Úlcera venosa", "Perna, perimaléolo medial, edema, dermatite ocre [C]"]]}},
        {ir: [["impetigo", "Impetigo"], ["in-lt", "Leishmaniose tegumentar"], ["in-esporotricose", "Esporotricose"], ["pele-cancer", "Câncer de pele"], ["pele-eczemas", "Eczema de estase"]]},
        {ref: ["wm_commons_pele", "gvs2_lt", "gvs2_esporo"]}
      ]},
      {t: "Erupção no tronco", b: [
        FIG("pr-arvore"), FIG("sifilis-palmas"), FIG("urticaria"), FIG("hanseniase-manchas"),
        {tab: {h: ["Diagnóstico", "Pista que separa"], r: [
          ["Pitiríase rósea", "Placa-mãe prévia, lesões ovais em 'árvore de Natal', poupa palmas [F]"],
          ["Sífilis secundária", "Palmas/plantas, mucosas, linfonodos, sem placa-mãe; teste reagente [F]"],
          ["Urticária", "Urticas que mudam de lugar em horas, sem descamação [C]"],
          ["Farmacodermia", "Droga nova há 1–8 semanas; mucosas, bolhas ou febre = grave [F]"],
          ["Exantema viral", "Febre, contato, pródromo; ver exantema agudo [C]"],
          ["Hanseníase MB", "Placas/infiltração difusa, lóbulos de orelha, anestesia, nervos [F]"]]}},
        {ir: [["pele-pitiriase-rosea", "Pitiríase rósea"], ["in-sifilis", "Sífilis"], ["pele-farmacodermia", "Reação grave a medicamento"], ["exantema", "Exantema agudo"]]},
        {ref: ["wm_commons_pele", "abd_pr2008", "bad_sjs2016"]}
      ]},
      {t: "Dobras e face", b: [
        FIG("candidiase-pele"), FIG("rosacea"), FIG("dermatite-perioral"),
        {tab: {h: ["Diagnóstico", "Pista que separa"], r: [
          ["Candidíase intertriginosa", "Vermelho-vivo, úmido, satélites [C]"],
          ["Tinea cruris", "Borda ativa descamativa, centro claro, poupa escroto [C]"],
          ["Rosácea", "Eritema centrofacial, rubor, sem cravos [F]"],
          ["Dermatite perioral", "Pápulas ao redor da boca poupando a borda do lábio; corticoide tópico prévio [C]"],
          ["Dermatite seborreica", "Sulcos nasogenianos, sobrancelhas, couro cabeludo, escamas oleosas [C]"]]}},
        {ir: [["pele-candidiase", "Candidíase cutânea"], ["pele-rosacea", "Rosácea"], ["seborreica", "Dermatite seborreica"], ["acne", "Acne"]]},
        {ref: ["wm_commons_pele"]}
      ]}
    ]}
}
);

// atalho do atlas e das novas condições nos itens existentes de pele
(() => {
  const add = (id, links) => { const c = CONDICOES.find(x => x.id === id); if (!c) return; if (c.guia && c.guia.secoes && c.guia.secoes.length) { c.guia.secoes[c.guia.secoes.length - 1].b.push({ir: links}); } };
  ["tinea", "pitiriase-versicolor", "impetigo", "urticaria", "exantema", "dermatite-contato", "seborreica", "acne", "dermatite-atopica"].forEach(id => add(id, [["pele-atlas", "Atlas de diagnóstico diferencial (fotos)"]]));
})();
