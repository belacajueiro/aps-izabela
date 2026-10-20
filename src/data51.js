// ───────────── data51.js – v42 (20/10/2026): puericultura com fonte única de conteúdo
// As consultas por idade (Consultas por idade) e a "Consulta de puericultura guiada pela idade" usam o MESMO
// conteúdo e o MESMO gerador de evolução (PU.evo). Os modelos mês a mês são a evolução gerada sem dados (campos ___);
// a consulta guiada é a mesma evolução preenchida. Pedido da usuária (20/10/2026), 13 pontos + unificação.
Object.assign(FONTES, {
  guia_menor2_cons: {s: "Guia Alimentar < 2 anos – esquemas por idade", t: "Ministério da Saúde. Guia Alimentar para Crianças Brasileiras Menores de 2 Anos – versão resumida (2021), p. 48–54: esquemas de refeições aos 6 meses, 7–8, 9–11 meses e 1–2 anos (quantidades de referência, consistência, sinais de fome e saciedade); açúcar, mel e ultraprocessados não devem ser oferecidos antes de 2 anos; leite de vaca antes de 9 meses não recomendado (PDF da base da usuária).", f: "F", url: "https://bvsms.saude.gov.br/bvs/publicacoes/guia_alimentar_crianca_brasileira_versao_resumida.pdf"},
  bliss_cresc2017: {s: "BLISS 2017 – crescimento", t: "Taylor RW et al. Effect of a Baby-Led Approach to Complementary Feeding on Infant Growth and Overweight: A Randomized Clinical Trial. JAMA Pediatr 2017;171(9):838-46. DOI 10.1001/jamapediatrics.2017.1284 (ECR, n = 206, Nova Zelândia): IMC escore-z sem diferença aos 12 e 24 meses; menos seletividade alimentar aos 12 meses.", f: "F", url: "https://doi.org/10.1001/jamapediatrics.2017.1284"},
  bliss_engasgo2016: {s: "BLISS 2016 – engasgo", t: "Fangupo LJ et al. A Baby-Led Approach to Eating Solids and Risk of Choking. Pediatrics 2016;138(4):e20160772. DOI 10.1542/peds.2016-0772 (ECR, n = 206): 35% engasgaram ao menos uma vez entre 6 e 8 meses, sem diferença entre BLISS e controle; oferta de alimentos de risco frequente nos dois grupos.", f: "F", url: "https://doi.org/10.1542/peds.2016-0772"},
  sbp_blw2017: {s: "SBP 2017 – BLW", t: "SBP, notícia de 27/06/2017 sobre o guia do Departamento de Nutrologia: não recomenda o BLW como método único; recomenda alimentação mista (a criança explora alimentos e texturas e o cuidador garante a ingestão), sempre sentada (notícia institucional; guia original não aberto).", f: "F", url: "https://www.sbp.com.br/imprensa/detalhe/nid/blw-sociedade-brasileira-de-pediatria-lanca-guia-sobre-alimentacao-complementar/"},
  sbp_sono2023: {s: "SBP NA 56/2023 – sono seguro", t: "SBP. Nota de Alerta nº 56 (mar/2023) – Sono seguro: de barriga para cima; berço com superfície firme e não inclinada; sem travesseiros, protetores, ninhos ou objetos fofos; berço no quarto dos pais ao menos até 6 meses (de preferência até 12); cama de adulto e sofá contraindicados; ambiente sem tabaco; tempo de barriguinha supervisionado desde a chegada em casa, progressivo até 15–30 min com sete semanas de vida (diretriz de sociedade; PDF da base da usuária).", f: "F", url: ""}
});

const PU = (() => {
  const DI = 86400000;
  const addM = (t, m) => { const d = new Date(t); const y = d.getUTCFullYear(), mo = d.getUTCMonth() + m; const last = new Date(Date.UTC(y, mo + 1, 0)).getUTCDate(); return Date.UTC(y, mo, Math.min(d.getUTCDate(), last)); };
  const pl = (n, s, p) => `${n} ${n === 1 ? s : p}`;
  // ── calendário: Caderneta da Criança 2025 (1ª semana, 1, 2, 4, 6, 9, 12, 18, 24 meses e anual) + 15 e 30 meses (consultas extras do modelo da usuária)
  const L = [
    {k: "rn", id: "pu-rn", nome: "1ª semana (RN)"}, {k: 1, id: "pu-1m", nome: "1 mês"}, {k: 2, id: "pu-2m", nome: "2 meses"}, {k: 4, id: "pu-4m", nome: "4 meses"},
    {k: 6, id: "pu-6m", nome: "6 meses"}, {k: 9, id: "pu-9m", nome: "9 meses"}, {k: 12, id: "pu-12m", nome: "12 meses"}, {k: 15, id: "pu-15m", nome: "15 meses", extra: true},
    {k: 18, id: "pu-18m", nome: "18 meses"}, {k: 24, id: "pu-24m", nome: "24 meses"}, {k: 30, id: "pu-30m", nome: "30 meses", extra: true},
    {k: 36, id: "pu-3a5a", nome: "3 anos"}, {k: 48, id: "pu-4a", nome: "4 anos"}, {k: 60, id: "pu-5a", nome: "5 anos"}];
  const X = {}; L.forEach(x => { X[x.k] = x; });
  const PROX = {rn: 1, 1: 2, 2: 4, 4: 6, 6: 9, 9: 12, 12: 18, 15: 18, 18: 24, 24: 36, 30: 36, 36: 48, 48: 60};
  const mesesDe = k => k === "rn" ? 0 : k;
  const alvo = (dn, x) => x.k === "rn" ? dn + 5 * DI : addM(dn, x.k);
  function janela(dn, x){ // [início, fim] em ms
    if (x.k === "rn") return [dn, dn + 14 * DI];
    if (x.k === 1) return [dn + 15 * DI, addM(dn, 1) + 15 * DI];
    if (x.k < 12) return [alvo(dn, x) - 15 * DI, alvo(dn, x) + 15 * DI];
    if (x.k <= 30) return [addM(dn, x.k - 1), addM(dn, x.k + 1)];
    return {36: [addM(dn, 35), addM(dn, 45) - DI], 48: [addM(dn, 45), addM(dn, 57) - DI], 60: [addM(dn, 57), addM(dn, 72) - DI]}[x.k];
  }
  // consulta da idade: dentro da janela ou, se não houver, a mais próxima (empate → a seguinte)
  function qual(dn, ref){
    for (const x of L){ const [a, b] = janela(dn, x); if (ref >= a && ref <= b) return {x, dentro: true}; }
    const ds = L.map(x => ({x, d: Math.abs(alvo(dn, x) - ref), fut: alvo(dn, x) > ref})).sort((u, v) => u.d - v.d);
    // empate (diferença ≤ 3 dias, por causa do tamanho dos meses) → a consulta seguinte
    const best = ds[1] && !ds[0].fut && ds[1].fut && ds[1].d - ds[0].d <= 3 * DI ? ds[1] : ds[0];
    return {x: best.x, dentro: false};
  }
  function idade(dn, ref){
    const a = new Date(dn), b = new Date(ref);
    let m = (b.getUTCFullYear() - a.getUTCFullYear()) * 12 + (b.getUTCMonth() - a.getUTCMonth()); if (addM(dn, m) > ref) m--;
    const d = Math.round((ref - addM(dn, m)) / DI);
    if (m < 1) return pl(Math.round((ref - dn) / DI), "dia", "dias");
    if (m < 24) return pl(m, "mês", "meses") + (d ? " e " + pl(d, "dia", "dias") : "");
    const an = Math.floor(m / 12), mm = m % 12; return pl(an, "ano", "anos") + (mm ? " e " + pl(mm, "mês", "meses") : "");
  }
  const SONO = ["De barriga para cima em todos os sonos, inclusive com refluxo fisiológico [F]", "Berço com colchão firme e não inclinado, sem travesseiros, protetores, ninhos, rolinhos, cobertas soltas ou bichos de pelúcia; preferir roupa em camadas ou saco de dormir [F]", "Berço no quarto dos pais, ao alcance das mãos, ao menos até 6 meses e de preferência até 12; cama de adulto contraindicada antes de 1 ano; sofá e poltrona são os locais mais perigosos [F]", "Casa e carro sem fumaça de cigarro; não cobrir a cabeça nem agasalhar demais [F]", "Cueiro: sem evidência de proteção; se usado, retirar antes de o bebê começar a dar sinais de rolar [F]"];
  const TUMMY = ["Tempo de barriguinha (tummy time): bebê acordado, de bruços e sempre supervisionado, desde a chegada em casa, em tempos progressivos até 15–30 minutos por dia por volta de 7 semanas; favorece o desenvolvimento motor e previne a plagiocefalia posicional [F]"];
  const IA = {
    tradicional: ["Início aos 6 meses, mantendo o leite materno em livre demanda até 2 anos ou mais [F]", "Prontidão: senta com pouco ou nenhum apoio, menos protrusão da língua, interesse pela comida [F]", "6 meses: café da manhã – leite materno; lanche da manhã – fruta + leite materno; almoço; lanche da tarde – fruta + leite materno; jantar e antes de dormir – leite materno [F]", "Prato do almoço: 1 cereal ou raiz/tubérculo + 1 feijão + 1 ou mais legumes/verduras + 1 carne ou ovo; ~2–3 colheres de sopa no total (referência, não meta) [F]", "Começar com ~1 colher de sobremesa de cada grupo; alimentos separados e amassados com garfo – não liquidificar nem peneirar; carnes bem cozidas, picadas ou desfiadas; frutas raspadas ou amassadas [F]", "Recusa: oferecer de novo em outros dias junto com alimentos que a criança aceita; mudar a forma de preparo (ex.: pedaços maiores para pegar com a mão); umedecer com caldo do cozimento [F]", "Deixar a criança usar as mãos ou uma colher pequena; contato visual; respeitar sinais de fome (inclina-se, abre a boca) e de saciedade (vira o rosto, fecha a boca, empurra a mão) [F]", "Água própria para consumo ao longo do dia; frutas em vez de sucos [F]", "Sem açúcar, mel, melado ou rapadura e sem ultraprocessados antes de 2 anos; mesma comida da família, com pouco sal [F]", "Engasgo: retirar sementes e cortar uva e acerola em 2–4 pedaços; não oferecer pipoca, amendoim ou castanhas inteiros [F]", "Glúten: não retirar sem diagnóstico de doença celíaca ou outra doença relacionada [F]"],
    participativa: ["BLW (baby-led weaning): a criança se alimenta sozinha desde o início, com alimentos em pedaços que consegue segurar, sem papa na colher [C]", "BLISS (Baby-Led Introduction to SolidS): BLW modificado para reduzir riscos – em toda refeição um alimento fonte de ferro e um alimento energético, preparo em formato e textura que a criança consiga pegar e amassar com a gengiva, e lista de alimentos de risco de engasgo a evitar [C]", "ECR BLISS (Nova Zelândia, n = 206; BLW modificado com orientação sobre alimentos de risco – o resultado não se aplica ao BLW sem modificação): IMC sem diferença aos 12 e 24 meses e menos seletividade aos 12 meses [F]; engasgo sem diferença em relação ao método tradicional – 35% engasgaram ao menos uma vez entre 6 e 8 meses em ambos os grupos [F]", "SBP (2017): não recomenda o BLW como método único; recomenda abordagem mista – a criança explora os alimentos com as mãos e o cuidador garante a ingestão [F]", "Requisitos para pedaços: sentar sem apoio ou com pouco apoio, refeição sempre sentada e com adulto atento, nunca deitada ou andando [F]; prematuro ou atraso motor: avaliar caso a caso [I]", "O próprio Guia Alimentar admite oferecer em pedaços maiores para a criança pegar com a mão – a abordagem mista cabe no SUS sem custo [F]", "Diferenciar o reflexo de ânsia (gag, comum e protetor) do engasgo verdadeiro; orientar a manobra de desengasgo do lactente [C]"],
    m7: ["7–8 meses: almoço e jantar (mesma composição do prato), lanches de fruta + leite materno; ~3–4 colheres de sopa; alimentos menos amassados ou bem picados [F]"],
    m9: ["9–11 meses: ~4–5 colheres de sopa; alimentos picados, na consistência da família; carnes desfiadas; pode comer de forma independente, ainda com ajuda [F]"],
    m12: ["1–2 anos: café da manhã e lanches com fruta, cereal (pão, aveia, cuscuz) ou raiz (aipim, batata-doce, inhame) + leite materno; almoço e jantar com o prato completo; ~5–6 colheres de sopa; pedaços maiores, na consistência da família [F]", "Sem açúcar e ultraprocessados até 2 anos; desnatado e semidesnatado não indicados antes de 2 anos; café com leite não recomendado [F]"]
  };
  // ── conteúdo por idade (texto do S e do exame: modelo da usuária; vacinas, suplementos e marcos: regras do app)
  const C = {
    rn: {suj: "Recém-nascido",
      s: e => `${e.al === "ame" && !e.st.bico ? e.resp + " refere aleitamento materno exclusivo em livre demanda, com boa sucção, sem dor mamilar. Nega uso de mamadeira, chupeta ou complementos." : e.alimF} Sono regular, em posição supina. Coto umbilical com higiene adequada, sem secreções. Eliminações fisiológicas presentes: diurese e evacuações frequentes, de coloração e consistência esperadas.`,
      o: ["RN ativo e reativo, corado, hidratado, em BEG, choro vigoroso.", "Pele: normocorada, anictérica (se icterícia: zona de Kramer ___).", "Cabeça: crânio simétrico, fontanela anterior com @F polpas digitais, normotensa; fontanela posterior fechada.", "Olhos: reflexo vermelho presente bilateralmente, pupilas isocóricas e fotorreagentes, sem secreções.", "Ouvidos: condutos auditivos pérvios.", "Nariz e boca: narinas pérvias, mucosa oral íntegra, palato normal, frênulo lingual sem alterações, sucção vigorosa.", "Pescoço: sem massas, mobilidade preservada; clavículas íntegras.", "AR: murmúrio vesicular fisiológico presente bilateralmente, sem ruídos adventícios.", "ACV: RCR em 2T, bulhas normofonéticas, sem sopros; pulsos femorais palpáveis e simétricos.", "ABD: globoso, flácido, RHA+, indolor, sem visceromegalias; coto umbilical sem sinais flogísticos.", "@GEN", "Ânus: pérvio, em posição anatômica.", "@QUAD", "Locomotor: simetria de membros, boa mobilidade, coluna íntegra.", "Neurológico: tônus em semiflexão, reflexos primitivos presentes (Moro, sucção, preensão, marcha reflexa)."],
      fazer: ["Registrar peso, comprimento e PC nas curvas da Caderneta (escore-z)", "Calcular a variação de peso desde o nascimento (perda normal até ~10%; recuperar até 10–14 dias)", "Conferir coleta (ideal do 3º ao 5º dia) e resultado do teste do pezinho e as demais triagens neonatais", "Conferir BCG e hepatite B", "Avaliar icterícia (início, extensão – zonas de Kramer)", "Triagens: orelhinha que falhou → reteste em até 30 dias; reflexo vermelho ausente/duvidoso → oftalmologia; coraçãozinho normal se SpO₂ ≥ 95% e diferença ≤ 3% (90–94% ou diferença ≥ 4% repetir; ≤ 89% → ecocardiograma); linguinha pelo protocolo da maternidade (Bristol)", "Observar uma mamada (pega e posição)", "Conferir sorologias maternas e tipagem", "Agendar a consulta puerperal da mãe"],
      alim: ["Aleitamento exclusivo em livre demanda; sem água, chá ou outro leite até 6 meses [F]", "Pega e posição: corrigir na consulta; dor mamilar e fissuras pedem avaliação da mamada [C]", "Se não amamentado: fórmula infantil, preparada conforme o rótulo [F]"],
      est: ["Contato pele a pele, voz e olhar durante as mamadas"],
      acid: ["Verificar a temperatura da água do banho", "Nunca deixar sozinho em trocador, cama ou sofá", "Transporte em bebê-conforto voltado para trás, no banco traseiro"],
      p: ["Oriento aleitamento materno exclusivo em livre demanda, com pega e posição adequadas", "Oriento cuidados com o coto umbilical (limpo e seco; álcool 70% se orientado) e banho", "Desestimulo mamadeira, chupeta e talco", "@SONO", "@TUMMY", "Oriento prevenção de acidentes domésticos"]},
    1: {suj: "Lactente",
      s: e => `${e.alimF} Refere evacuações e diurese presentes em todas as trocas de fralda. Nega regurgitações excessivas ou cólicas intensas. ${e.resp} relata que o bebê apresenta períodos de alerta, abre os olhos quando ouve vozes familiares e acalma-se ao colo; emite sons curtos quando está acordado e confortável. Sono em berço no quarto dos pais, sempre em decúbito dorsal.`,
      o: ["Estado geral: lactente alerta, normocorado, hidratado, com tônus adequado e reativo aos estímulos.", "Cabeça e pescoço: crânio simétrico, fontanela anterior aberta e normotensa com @F polpas digitais; fontanela posterior fechada. Sem linfonodomegalias.", "Olhos: acompanha a luz brevemente, sem secreções; reflexo vermelho presente.", "Orelhas: pavilhões de implantação normal, condutos auditivos externos pérvios. Reage a sons súbitos.", "Nariz: narinas pérvias, sem secreções.", "Orofaringe: mucosas coradas e hidratadas, palato íntegro, freio lingual sem alterações.", "AR: murmúrio vesicular fisiológico, sem ruídos adventícios.", "ACV: bulhas rítmicas, normofonéticas, em 2 tempos, sem sopros; pulsos femorais palpáveis e simétricos.", "Abdome: plano, flácido, indolor, sem visceromegalias; cicatriz umbilical bem formada, sem sinais flogísticos.", "@GEN", "Ânus sem fissuras.", "@QUAD", "Extremidades: simétricas, boa movimentação espontânea, bem perfundidas.", "Neurológico: reflexos primitivos presentes e simétricos (Moro, preensão palmar, marcha reflexa, tônico-cervical, sucção, busca); tônus adequado."],
      fazer: ["Registrar peso, comprimento e PC nas curvas da Caderneta (escore-z)", "Ganho de peso esperado ≈ 20–30 g/dia no 1º trimestre", "Conferir o resultado do teste do pezinho e das demais triagens", "Icterícia prolongada (> 2 semanas no termo) → investigar", "Perguntar sobre o humor da mãe e a rede de apoio (depressão pós-parto; EPDS se indicado) – não vai para a evolução"],
      alim: ["Aleitamento exclusivo em livre demanda até 6 meses [F]", "Cólica e regurgitação fisiológicas: orientar, sem medicação de rotina; colo, massagem abdominal e ambiente calmo [C]"],
      est: ["Conversar com o bebê, contato visual frequente", "Sons suaves, canções e brinquedos visuais contrastantes", "Estimular o vínculo com toques, olhares e voz suave"],
      acid: ["Verificar a temperatura da água do banho", "Não deixar o bebê sozinho em locais elevados ou na banheira", "Evitar objetos pequenos ou cortantes por perto", "Proteger o ambiente de fumaça de cigarro"],
      p: ["Reforço aleitamento materno exclusivo até os 6 meses", "Oriento higiene e banho; explico cólica e regurgitação fisiológicas", "@SONO", "@TUMMY", "Oriento prevenção de acidentes domésticos"]},
    2: {suj: "Lactente",
      s: e => `${e.alimF} O padrão de sono e vigília é variável, com despertares noturnos habituais para a idade. Evacuações e diurese normais. O bebê reage a sons, fixa o olhar em objetos próximos e demonstra interesse pelo rosto das pessoas, com contato visual e vocalizações iniciais.`,
      o: ["Estado geral: lactente alerta, ativo, bem hidratado e nutrido, com coloração e perfusão periférica preservadas; boa interação durante o atendimento.", "Pele e mucosas: normocorado, anictérico, sem lesões.", "Cabeça: crânio simétrico, fontanela anterior aberta de @F polpas digitais, normotensa; fontanela posterior fechada.", "Olhos: reflexo vermelho presente; acompanha objetos com os olhos.", "Ouvidos: condutos auditivos pérvios, sem secreções.", "Nariz e boca: narinas pérvias, mucosa oral úmida, palato íntegro, sucção eficaz.", "Pescoço: mobilidade preservada, sem adenomegalias.", "AR: murmúrio vesicular fisiológico, sem ruídos adventícios.", "ACV: ritmo regular, bulhas normofonéticas em 2T, sem sopros; pulsos femorais palpáveis.", "Abdome: flácido, indolor, RHA+, sem massas ou visceromegalias; cicatriz umbilical bem formada.", "@GEN", "@QUAD", "Extremidades: simétricas, movimentação ativa dos quatro membros.", "Neurológico: reflexos arcaicos presentes e simétricos; tônus adequado para a idade."],
      fazer: ["Registrar peso, comprimento e PC nas curvas da Caderneta (escore-z)", "Vacinas dos 2 meses", "Retorno da mãe ao trabalho: orientar ordenha e armazenamento do leite", "Perguntar sobre o humor da mãe (depressão pós-parto) – não vai para a evolução"],
      alim: ["Aleitamento exclusivo; ordenha e armazenamento do leite se a mãe voltar ao trabalho [C]"],
      est: ["Conversar com o bebê e nomear objetos do ambiente", "Estimular contato visual e responsividade com sons e expressões faciais", "Músicas suaves e brinquedos coloridos simples"],
      acid: ["Temperatura da água do banho; nunca deixar sozinho na banheira", "Chocalhos resistentes, sem peças pequenas; brinquedos com selo do INMETRO", "Proteger de fumaça de cigarro"],
      p: ["Reforço aleitamento materno exclusivo até os 6 meses; oriento ordenha e armazenamento do leite, se necessário", "Oriento reações vacinais comuns (febre baixa, dor local, irritabilidade)", "@SONO", "@TUMMY", "Oriento prevenção de acidentes domésticos"]},
    4: {suj: "Lactente",
      s: e => `Os responsáveis relatam bom estado geral. ${e.alimF} Sono mais estruturado, com períodos diurnos mais ativos e noites com despertares previsíveis. Evacuações e diurese normais, sem queixas de cólicas ou refluxo. A criança demonstra maior interesse pelo ambiente, sorri de forma espontânea, vocaliza com frequência, acompanha objetos em movimento, sustenta a cabeça com firmeza e tenta rolar.`,
      o: ["Estado geral: lactente alerta, responsivo, bem hidratado, normocorado, com bom tônus e perfusão adequada.", "Pele: sem lesões, anictérico.", "Cabeça: crânio simétrico, fontanela anterior aberta e normotensa com @F polpas digitais; fontanela posterior fechada.", "Olhos: reflexo vermelho presente; acompanha objetos horizontal e verticalmente; sem estrabismo.", "Ouvidos: sem secreções; vira a cabeça em direção ao som.", "Nariz e boca: vias aéreas superiores pérvias, mucosa oral hidratada, gengivas íntegras.", "Pescoço: bom controle cervical.", "AR: murmúrio vesicular presente, sem ruídos adventícios.", "ACV: RCR em 2T, sem sopros; pulsos femorais palpáveis.", "Abdome: flácido, indolor, RHA+, sem visceromegalias.", "@GEN", "@QUAD", "Extremidades: movimentação ativa dos quatro membros, boa perfusão.", "Neurológico: reflexos primitivos em regressão; tônus adequado."],
      fazer: ["Registrar peso, comprimento e PC nas curvas da Caderneta (escore-z)", "Vacinas dos 4 meses", "Recebe leite de vaca? → ferro a partir de 4 meses (fórmula infantil já contém ferro)"],
      alim: ["Aleitamento exclusivo até 6 meses, sem água, chá ou suco [F]", "Se não amamentado: fórmula infantil; leite de vaca antes de 9 meses não é recomendado – se já em uso, avaliar e orientar preparo e diluição [F]"],
      est: ["Brincar com sons, músicas e expressões faciais", "Brinquedos seguros que estimulem tato e visão", "Responder ao balbucio"],
      acid: ["Não deixar sozinho em lugares altos (pode rolar)", "Lados do berço/cercado levantados", "Pequenos objetos fora do alcance", "Nunca deixar sozinho no banho"],
      p: ["Reforço aleitamento materno exclusivo até os 6 meses, sem água, chá ou suco", "Oriento que a introdução alimentar começa aos 6 meses", "Estimulo o vínculo afetivo, visual e verbal com o bebê", "@SONO", "@TUMMY", "Oriento prevenção de acidentes: não deixar sozinho em superfícies altas e manter objetos pequenos fora do alcance"]},
    6: {suj: "Lactente",
      s: e => `Os responsáveis relatam que a criança se encontra em bom estado geral, ativa. ${e.alimF} Relatam sinais de prontidão para a alimentação complementar (interesse pelos alimentos à mesa, sustentação cefálica firme, movimentos de alcance). A criança está mais expressiva, com vocalizações frequentes e sorrisos sociais; rola e mantém-se sentada com apoio. Sono mais consolidado, com períodos noturnos mais longos e sonecas diurnas. Evacuações regulares e diurese preservada.`,
      o: ["Estado geral: lactente alerta, reativo, hidratado, corado, bem nutrido, postura simétrica, sem sinais de sofrimento respiratório ou neurológico.", "Cabeça: crânio simétrico, fontanela anterior aberta (@F polpas digitais), normotensa.", "Olhos: movimentação conjugada, fixação e seguimento visual completos; reflexo vermelho presente; sem estrabismo.", "Ouvidos: sem secreções; reage ao chamado e a sons ambientais.", "Nariz e boca: vias aéreas pérvias, gengivas íntegras, dentição ___.", "Pescoço: sustentação cefálica firme.", "AR: MVF, sem ruídos adventícios.", "ACV: RCR em 2T, sem sopros, perfusão periférica adequada.", "Abdome: flácido, indolor, RHA+, sem massas ou visceromegalias.", "@GEN", "@QUAD", "Extremidades: boa mobilidade e força muscular preservadas.", "Neurológico: reflexos primitivos praticamente extintos; tônus adequado."],
      fazer: ["Registrar peso, comprimento e PC nas curvas da Caderneta (escore-z)", "Sinais de prontidão para a introdução alimentar", "Combinar com a família o método da introdução alimentar (tradicional, BLISS ou mista)", "Iniciar o ferro (1º ciclo: 6 aos 9 meses)", "Vacinas dos 6 meses; influenza (1ª vez: 2 doses com 30 dias)"],
      alim: ["Introdução alimentar a partir de hoje, mantendo o leite materno até 2 anos ou mais [F]", "Ver os quadros de introdução alimentar abaixo (tradicional × participativa)"], ia: ["tradicional", "participativa", "m7"],
      est: ["Incentivar uso de copo, colher e manipulação dos alimentos", "Objetos de diferentes texturas e sons", "Estimular rolar, sentar com apoio, balbucio e 'diálogo'", "Rotina previsível de sono e atividades"],
      acid: ["Não deixar sozinha em lugares altos", "Pequenos objetos fora do alcance (engasgo)", "Nunca deixar sozinha no banho ou perto de água", "Produtos de limpeza e remédios trancados"],
      p: ["Oriento introdução alimentar @IA; sem açúcar, mel ou ultraprocessados; água em copo nos intervalos", "Reforço manutenção do aleitamento materno até 2 anos ou mais", "Oriento cuidados com a dentição: massagem gengival e mordedor resfriado, sem géis ou medicamentos tópicos; escovação com creme dental com flúor desde o 1º dente", "@SONO", "Oriento prevenção de acidentes (engasgo, quedas e afogamento)"]},
    9: {suj: "Lactente",
      s: e => `Os responsáveis relatam bom estado geral e alimentação diversificada, com boa aceitação. ${e.alimF} A criança manipula alimentos com as mãos e demonstra interesse pela refeição familiar. Está mais ativa, engatinha, tenta se levantar com apoio e balbucia sílabas; é sociável, responde ao nome, reconhece pessoas familiares e apresenta estranhamento. Sono noturno mais contínuo, com sonecas diurnas regulares. Evacuações normais.`,
      o: ["Estado geral: lactente em bom estado nutricional, alerta, ativo, interativo, com boa perfusão e hidratação.", "Pele: íntegra, sem lesões.", "Cabeça: fontanela anterior aberta (@F polpas digitais) e normotensa.", "Olhos: segue objetos e pessoas; reflexo vermelho presente; sem estrabismo.", "Ouvidos: sem secreções; responde a sons e ao próprio nome.", "Nariz e boca: mucosas úmidas, dentição ___.", "AR: MV presente, sem ruídos adventícios.", "ACV: RCR em 2T, sem sopros.", "Abdome: flácido, RHA+, sem massas, indolor.", "@GEN", "@QUAD", "Extremidades: movimentação ativa, simétrica, boa coordenação.", "Neurológico: reflexos primitivos extintos; tônus e força adequados."],
      fazer: ["Registrar peso, comprimento e PC nas curvas da Caderneta (escore-z)", "Encerrar o 1º ciclo de ferro (2º ciclo dos 12 aos 15 meses)", "Vacinas dos 9 meses (febre amarela)", "Reflexo vermelho (2–3 vezes ao ano até 3 anos)"],
      alim: ["Boa aceitação da alimentação complementar, com consistências progressivas [F]", "Alimentação responsiva e autônoma; aleitamento mantido [F]", "Sem açúcar, mel, refrigerantes, sucos e ultraprocessados [F]"], ia: ["m9"],
      est: ["Conversar, cantar, apontar objetos", "Brincadeiras de repetição, esconder e aparecer", "Incentivar engatinhar e movimentar-se livremente", "Evitar telas"],
      acid: ["Objetos perigosos e pequenos fora do alcance (tudo vai à boca)", "Toalhas de mesa, alimentos e líquidos quentes fora do alcance", "Protetores de tomada; grades em escadas e janelas"],
      p: ["Oriento progressão da consistência: alimentos picados, na consistência da família; deixar a criança comer com as mãos", "Oriento alimentação responsiva, respeitando fome e saciedade, sem açúcar e com pouco sal", "Oriento escovação com creme dental com flúor (≥ 1.000 ppm), quantidade de grão de arroz cru", "@SONO", "Oriento prevenção de acidentes na fase de maior mobilidade"]},
    12: {suj: "Criança",
      s: e => `Os cuidadores relatam bom estado geral, desenvolvimento motor e de linguagem crescente e ganho de peso adequado. Alimentação complementar bem estabelecida, com variedade de alimentos e texturas; tenta usar colher. ${e.alimF} Engatinha bem ou fica em pé com apoio, segura objetos com destreza e vocaliza sílabas; interage socialmente e responde ao nome. Sono mais regular, com sonecas diurnas. `,
      o: ["Estado geral: ativa, reativa, alerta, coloração e hidratação normais, perfusão periférica preservada.", "Pele e mucosas: íntegras.", "Cabeça: fontanela anterior @FF; crânio simétrico.", "Olhos: fixação e seguimento visual completos; reflexo vermelho presente; sem estrabismo.", "Ouvidos: responde ao som, sem secreções.", "Nariz e boca: mucosa hidratada, dentição ___, sem lesões orais.", "AR: murmúrio vesicular fisiológico, sem ruídos adventícios.", "ACV: bulhas normofonéticas, sem sopros; pulsos palpáveis.", "Abdome: flácido, sem visceromegalias.", "@GEN", "@QUAD", "Neurológico: tônus e força adequados."],
      fazer: ["Registrar peso, comprimento e PC nas curvas da Caderneta (escore-z)", "Iniciar o 2º ciclo de ferro (12 aos 15 meses); vitamina D passa a 600 UI/dia", "Vacinas dos 12 meses", "Saúde bucal e 1ª consulta odontológica"],
      alim: ["Alimentação da família, diversificada; autonomia com colher e copo [F]", "Manter aleitamento até 2 anos ou mais [F]", "Frutas em vez de sucos; sem açúcar até 2 anos [F]"], ia: ["m12"],
      est: ["Cantar, ler, nomear objetos", "Empilhar, encaixar e manipular", "Andar com apoio", "Evitar telas"],
      acid: ["Grades em escadas e janelas; protetores de tomada", "Cabos de panela para dentro; criança longe do fogão", "Afogamento: baldes, bacias e piscinas", "Atenção redobrada com o início da marcha"],
      p: ["Oriento alimentação da família, sem açúcar, sal em excesso e ultraprocessados", "Oriento estímulo à marcha, à linguagem e à autonomia com segurança", "Oriento limites com afeto (disciplina positiva)", "Oriento primeira consulta odontológica, se ainda não feita", "Oriento prevenção de afogamento e intoxicações"]},
    15: {suj: "Criança",
      cdc: ["Imita outras crianças nas brincadeiras", "Mostra um objeto de que gosta", "Bate palmas quando animado", "Abraça boneca ou bicho de pelúcia", "Demonstra afeto (abraça, beija)", "Tenta dizer uma ou duas palavras além de mamã/papá", "Olha para um objeto conhecido quando ele é nomeado", "Segue ordens dadas com gesto e palavras", "Aponta para pedir algo ou ajuda", "Tenta usar objetos do dia a dia corretamente (copo, telefone, livro)", "Empilha pelo menos dois objetos pequenos", "Dá alguns passos sozinho", "Usa os dedos para comer sozinho"],
      s: e => `Os responsáveis relatam bom estado geral, ganho de peso adequado e desenvolvimento dentro do esperado. Anda com apoio ou de forma independente, vocaliza algumas palavras e compreende comandos simples. Alimentação diversificada; participa das refeições da família e tenta usar colher e copo. ${e.alimF} Sono noturno consolidado, com uma ou duas sonecas.`,
      o: ["Estado geral: criança ativa, alerta, hidratada, perfundida, interagindo adequadamente.", "Cabeça: fontanela anterior @FF; crânio normoformado.", "Olhos e ouvidos: seguimento visual normal, sem estrabismo; responde a estímulos sonoros.", "Nariz e boca: erupção dentária em evolução, mucosas íntegras.", "AR: murmúrio vesicular bilateral, sem ruídos adventícios.", "ACV: ritmo regular, bulhas normofonéticas, sem sopros.", "Abdome: flácido, indolor, sem massas, RHA+.", "@GEN", "@QUAD", "Neurológico: reflexos primitivos ausentes, tônus adequado."],
      fazer: ["Consulta extra: não consta no calendário da Caderneta (próxima prevista: 18 meses)", "Registrar peso, comprimento e PC nas curvas da Caderneta (escore-z)", "Encerrar o 2º ciclo de ferro", "Vacinas dos 15 meses (DTP e VIP reforço, tríplice viral 2/varicela, hepatite A)"],
      alim: ["Refeições em família e uso de utensílios [F]", "Variedade e introdução gradual de novos alimentos; seletividade: oferecer de novo o que recusou, sem forçar e sem trocar a refeição por leite [C]", "Sem ultraprocessados e doces; frutas em vez de sucos [F]"],
      est: ["Leitura, canções, nomear objetos", "Blocos, encaixes, empilhamentos", "Autonomia nas atividades da rotina", "Evitar telas; contato com outras crianças"],
      acid: ["Supervisão constante ao caminhar", "Bloqueios em escadas e áreas perigosas", "Produtos tóxicos e cortantes guardados", "Calçados adequados para a marcha"],
      p: ["Reforço alimentação variada com alimentos da rotina familiar; oriento manejo da seletividade alimentar", "Oriento estímulo contínuo da linguagem, da socialização e da marcha, com segurança", "Oriento manejo de birras: calma, limites claros e consistentes, elogio ao comportamento desejado", "Oriento que infecções respiratórias são mais frequentes nos primeiros meses de creche", "Oriento prevenção de acidentes (quedas e intoxicações)"]},
    18: {suj: "Criança",
      s: e => `Os responsáveis relatam desenvolvimento satisfatório. Marcha estável e autônoma, maior interação com o ambiente e os cuidadores; imita comportamentos e expressa vontades por gestos e algumas palavras. Alimentação diversificada, participa das refeições com a família. ${e.alimF} Sono regular, com uma ou duas sonecas diurnas.`,
      o: ["Estado geral: criança alerta, interativa, ativa, bem nutrida e hidratada.", "Cabeça: fontanela anterior @FF.", "Olhos e ouvidos: visão e audição funcionais; sem estrabismo.", "Boca: erupção dentária em curso; higiene bucal ___.", "AR: murmúrio vesicular presente, sem ruídos adventícios.", "ACV: RCR em 2T, sem sopros; pulsos palpáveis.", "Abdome: flácido, indolor, sem massas.", "@GEN", "@QUAD", "Neurológico: reflexos primitivos ausentes, tônus adequado, coordenação motora fina e grossa compatível com a idade."],
      fazer: ["Registrar peso, comprimento e PC nas curvas da Caderneta (escore-z)", "Aplicar M-CHAT-R/F (protocolo de risco psíquico até 18 meses – Lei 13.438/2017)", "Conferir as vacinas dos 15 meses", "Tempo de tela (evitar antes de 2 anos)"],
      alim: ["Padrão alimentar da família; talheres e copo [F]", "Horários regulares, sem telas nas refeições [C]", "Sem ultraprocessados, açúcar e bebidas adoçadas [F]"],
      est: ["Histórias, músicas, partes do corpo", "Nomear objetos e incentivar resposta verbal", "Empilhar, encaixar, desenhar, dançar", "Evitar telas; limites com afeto e consistência"],
      acid: ["Supervisão contínua (maior mobilidade)", "Prevenção de quedas, queimaduras e intoxicações", "Produtos de limpeza e medicamentos fora do alcance"],
      p: ["Reforço alimentação saudável, com horários regulares e sem telas nas refeições", "Oriento estímulo da linguagem e da autonomia com segurança; manejo de birras com afeto e limites claros", "Oriento sinais de prontidão para o desfralde (avisa, fica seco por cerca de 2 horas, interesse pelo vaso)", "Oriento evitar telas antes dos 2 anos", "Oriento prevenção de acidentes (quedas, queimaduras e intoxicações)"]},
    24: {suj: "Criança",
      s: e => `Os responsáveis relatam bom estado geral, desenvolvimento motor e de linguagem crescente e alimentação adequada. Anda com segurança, corre, sobe e desce degraus com apoio; fala frases curtas e reconhece objetos e partes do corpo. Participa das refeições e usa talheres com supervisão. ${e.alimF} Sono noturno regular, com uma soneca diurna.`,
      o: ["Estado geral: ativa, interativa, coloração e hidratação normais, perfusão preservada.", "Pele e mucosas: íntegras.", "Cabeça: simétrica, sem fontanelas palpáveis.", "Olhos e ouvidos: seguimento visual bom, sem estrabismo; responde a ordens simples.", "Boca: dentição temporária ___; higiene bucal ___.", "AR e ACV: ausculta normal, sem ruídos adventícios ou sopros.", "Abdome: flácido, indolor, sem massas.", "@GEN", "@QUAD", "Neurológico: tônus e força adequados."],
      fazer: ["Registrar peso, estatura e IMC/idade nas curvas da Caderneta (escore-z)", "Aplicar M-CHAT-R/F", "Telas (até 1 h/dia de 2 a 5 anos, com adulto junto)", "Desfralde quando a criança der sinais", "Consulta odontológica"],
      alim: ["Participação nas refeições da família; talheres e copo [F]", "Respeitar fome e saciedade [F]", "Evitar açúcar, sal em excesso e ultraprocessados [F]"],
      est: ["Histórias, empilhar, quebra-cabeças simples, música", "Contar as ações do dia, nomear objetos", "Jogos simbólicos e atividades manuais", "Socialização com outras crianças"],
      acid: ["Proteção em escadas, varandas, tomadas e objetos pontiagudos", "Atenção a engasgo, produtos tóxicos e objetos pequenos", "Cadeirinha no carro em todos os trajetos"],
      p: ["Reforço alimentação saudável, sono adequado e rotina estável", "Estimulo leitura, brincadeiras motoras e tempo ao ar livre", "Oriento desfralde gradual, se houver sinais de prontidão, sem pressão e com reforço positivo", "Oriento telas no máximo 1 hora por dia, com supervisão", "Oriento cadeirinha no carro em todos os trajetos"]},
    30: {suj: "Criança",
      cdc: ["Brinca ao lado de outras crianças e às vezes com elas", "Mostra o que sabe fazer (\"olha o que eu faço\")", "Segue rotinas simples quando pedido (ex.: guardar os brinquedos)", "Fala cerca de 50 palavras", "Junta duas ou mais palavras, incluindo uma de ação", "Nomeia objetos de um livro quando perguntado", "Usa pronomes (eu, mim, nós)", "Brinca de faz de conta (bloco como comida para a boneca)", "Resolve problemas simples (sobe num banquinho para alcançar algo)", "Segue instruções de duas etapas", "Identifica pelo menos uma cor", "Gira objetos com as mãos (maçanetas, tampas)", "Tira algumas roupas sozinho", "Pula com os dois pés", "Vira as páginas do livro uma de cada vez"],
      s: e => `Os responsáveis relatam bom estado geral e desenvolvimento progressivo: corre, pula com os dois pés, junta palavras em frases curtas e brinca de faz de conta. Participa das refeições da família e come sozinha com colher. ${e.alimF} Sono noturno regular, com uma soneca diurna.`,
      o: ["Estado geral: ativa, interativa, coloração e hidratação normais, perfusão preservada.", "Pele e mucosas: íntegras.", "Cabeça: normocefálica, fontanela fechada.", "Olhos: pupilas isocóricas e fotorreagentes, sem estrabismo.", "Ouvidos: responde a ordens simples, sem secreções.", "Boca: dentição decídua ___ (até 20 dentes); cáries ___; higiene bucal ___.", "AR e ACV: ausculta normal, sem ruídos adventícios ou sopros.", "Abdome: flácido, indolor, sem massas.", "@GEN", "@QUAD", "Neurológico: tônus e força adequados."],
      fazer: ["Consulta extra: não consta no calendário da Caderneta (próxima prevista: 3 anos)", "Registrar peso, estatura e IMC/idade nas curvas da Caderneta (escore-z)", "Desfralde e telas"],
      alim: ["Refeições com a família, talheres e copo [F]", "Seletividade é comum: oferecer de novo sem forçar [C]", "Evitar açúcar, bebidas adoçadas e ultraprocessados [F]"],
      est: ["Leitura diária, conversa, perguntas abertas; expandir as frases da criança", "Faz de conta, encaixes, massinha, desenho", "Brincadeiras ao ar livre e com outras crianças", "Autonomia: vestir-se, lavar as mãos, comer sozinha"],
      acid: ["Afogamento: piscinas, baldes e banheiras", "Produtos de limpeza e remédios trancados", "Queimaduras: cabos de panela para dentro, criança longe do fogão", "Cadeirinha no carro; janelas e varandas com proteção"],
      p: ["Oriento desfralde sem pressão; retirar a fralda noturna após várias manhãs seguidas secas", "Oriento telas no máximo 1 hora por dia, com supervisão", "Estimulo linguagem, autonomia e convivência social", "Oriento prevenção de afogamento, queimaduras e intoxicações"]},
    36: {suj: "Criança",
      s: e => `Os cuidadores relatam que a criança está bem, ativa, com fala mais clara, melhor mobilidade e autonomia crescente nas atividades diárias. Usa copo e talheres e participa das refeições familiares. ${e.alimF} Sono razoavelmente regular, com ou sem soneca diurna.`,
      o: ["Estado geral: criança alerta, responsiva, em bom estado de hidratação e nutrição; interagindo com o examinador.", "Pele e mucosas: íntegras.", "Olhos: fixação e seguimento ocular adequados, sem estrabismo.", "Acuidade visual (tabela de figuras ou letras): OD ___ OE ___.", "Ouvidos: resposta sonora adequada.", "Boca e dentes: dentição decídua ___; higiene bucal ___.", "AR: murmúrio vesicular, sem ruídos adventícios.", "ACV: bulhas normofonéticas, sem sopros; pulsos palpáveis.", "Abdome: flácido, indolor, sem massas ou visceromegalias.", "@GEN", "@QUAD"],
      fazer: ["Registrar peso, estatura e IMC/idade nas curvas da Caderneta (escore-z): < 5 anos risco de sobrepeso > +1, sobrepeso > +2, obesidade > +3; ≥ 5 anos sobrepeso > +1, obesidade > +2 (SISVAN)", "Brincadeira ativa ≥ 3 h/dia (OMS)", "PA anual a partir de 3 anos (classificação pediátrica – ver 'Check-up da criança')", "Acuidade visual a partir de 3 anos (CAB 33: 3–5 anos < 20/40 ou diferença de 2 linhas → oftalmologia)", "Saúde bucal"],
      alim: ["Participação plena nas refeições da família; variedade de alimentos e texturas [F]", "Evitar açúcar, bebidas adoçadas e ultraprocessados [F]"],
      est: ["Leitura, música e conversas", "Jogos de encaixe e de combinar", "Autonomia para vestir-se e comer", "Brincadeiras ao ar livre"],
      acid: ["Supervisão constante; proteção de quinas, janelas e grades", "Objetos pequenos e produtos tóxicos fora do alcance", "Prevenção de queimaduras", "Na água, sempre ao alcance do braço de um adulto"],
      p: ["Reforço alimentação saudável, rotina estável e sono adequado", "Estimulo linguagem, autonomia e convivência social", "Oriento telas no máximo 1 hora por dia, com supervisão", "Oriento prevenção de acidentes (água, janelas e cadeirinha no carro)"]},
    48: {suj: "Criança",
      s: e => `Os responsáveis relatam que está ativa, comunicativa e autônoma em diversas tarefas (veste-se com ajuda leve, usa talheres, escova os dentes sob supervisão, brinca com outras crianças). Alimentação satisfatória, participa das refeições da família. ${e.alimF} Sono regular; soneca breve ou ausente.`,
      o: ["Estado geral: criança alerta, ativa, interativa, bem hidratada, coloração e perfusão adequadas.", "Pele e mucosas: íntegras.", "Olhos: alinhamento ocular normal, sem estrabismo.", "Acuidade visual (tabela de figuras ou letras): OD ___ OE ___.", "Ouvidos: responde a comandos verbais e estímulos sonoros.", "Boca e dentes: dentição decídua completa ou quase completa; higiene bucal ___.", "AR e ACV: exame normal, sem ruídos adventícios ou sopros.", "Abdome: flácido, indolor, sem massas.", "@GEN", "@QUAD"],
      fazer: ["Registrar peso, estatura e IMC/idade nas curvas da Caderneta (escore-z)", "PA anual (classificação pediátrica)", "Acuidade visual", "Vacinas dos 4 anos", "Saúde bucal"],
      alim: ["Participação plena nas refeições familiares; consumo variado com autonomia [F]", "Evitar ultraprocessados, doces e bebidas adoçadas [F]"],
      est: ["Leitura e contação de histórias", "Faz de conta, quebra-cabeças, pintura, massinha", "Jogos motores: correr, pular, equilíbrio", "Socialização na pré-escola; limitar telas"],
      acid: ["Proteção em escadas, quinas, portas e janelas", "Bicicleta e patinete com capacete", "Riscos em parques, piscinas e trânsito"],
      p: ["Reforço rotina alimentar, sono e controle esfincteriano", "Estimulo brincadeiras educativas e interação com outras crianças; oriento regras sociais e limites", "Oriento telas no máximo 1 hora por dia, com supervisão", "Oriento capacete na bicicleta e cadeirinha ou assento de elevação no carro"]},
    60: {suj: "Criança",
      s: e => `Anda com segurança, corre, salta e participa de brincadeiras coletivas; fala frases completas, conta histórias simples, reconhece letras e números básicos e interage bem. Alimentação variada; participa das refeições familiares e tem autonomia em tarefas como vestir-se. ${e.alimF} Sem dificuldades de aprendizado referidas. Sono regular, com bom repouso noturno.`,
      o: ["Estado geral: criança alerta, ativa, bem hidratada, coloração e perfusão adequadas; interage com o examinador.", "Pele e mucosas: íntegras.", "Olhos: alinhamento ocular normal, sem estrabismo.", "Acuidade visual (tabela de letras): OD ___ OE ___.", "Ouvidos: responde a comandos verbais e ruídos.", "Boca e dentes: dentes decíduos, higiene ___, sem cáries visíveis.", "AR e ACV: ausculta normal, sem ruídos adventícios ou sopros.", "Abdome: flácido, indolor, sem massas.", "@GEN", "@QUAD"],
      fazer: ["Registrar peso, estatura e IMC/idade nas curvas da Caderneta (escore-z)", "PA anual (classificação pediátrica)", "Acuidade visual (repetir na entrada da escola)", "Saúde bucal"],
      alim: ["Dieta diversificada com todos os grupos alimentares; autoalimentação com supervisão [F]", "Evitar açúcar em excesso e ultraprocessados [F]"],
      est: ["Leitura, diálogo e perguntas", "Jogos educativos, atividades manuais e artísticas", "Brincadeiras motoras e coletivas", "Limitar telas"],
      acid: ["Supervisão nas brincadeiras e deslocamentos", "Capacete, cinto e cadeirinha ou assento de elevação", "Prevenção de quedas, queimaduras e intoxicações"],
      p: ["Reforço hábitos de vida saudáveis (alimentação, sono, rotina e atividade física)", "Estimulo aprendizado e participação escolar; oriento autonomia e limites com afeto", "Oriento segurança no trânsito e na água"]}
  };
  // marcos da Caderneta da Criança 2025 (quartetos na ordem do instrumento; a idade exata de cada quarteto está no gráfico – [NV])
  const MK = {1: ["Postura: pernas e braços fletidos, cabeça lateralizada", "Observa um rosto", "Reage ao som", "Eleva a cabeça"], 2: ["Sorri quando estimulada", "Abre as mãos", "Emite sons", "Movimenta os membros"], 4: ["Responde ativamente ao contato social", "Segura objetos", "Emite sons, ri alto", "Levanta a cabeça e apoia-se nos antebraços, de bruços"], 6: ["Busca ativa de objetos", "Leva objetos à boca", "Localiza o som", "Muda de posição (rola)"], 9: ["Brinca de esconde-achou", "Transfere objetos de uma mão para outra", "Duplica sílabas", "Senta-se sem apoio"], 12: ["Imita gestos", "Faz pinça", "Produz jargão", "Anda com apoio"], 15: ["Mostra o que quer", "Coloca blocos na caneca", "Diz uma palavra", "Anda sem apoio"], 18: ["Usa colher ou garfo", "Constrói torre de 2 cubos", "Fala 3 palavras", "Anda para trás"], 24: ["Tira roupa", "Constrói torre de 3 cubos", "Aponta 2 figuras", "Chuta bola"], 30: ["Veste-se com supervisão", "Constrói torre de 6 cubos", "Frases com 2 palavras", "Pula com ambos os pés"], 36: ["Brinca com outras crianças", "Imita o desenho de uma linha", "Reconhece 2 ações", "Arremessa bola"], 48: ["Emparelha cores", "Copia círculos", "Fala clara e compreensível", "Pula em um pé só"], 60: ["Escova dentes sem ajuda", "Aponta a linha mais comprida", "Define 5 palavras", "Equilibra-se em um pé 5 segundos"]};
  const marcos = k => MK[k] || [];
  const VACT = {rn: "BCG e hepatite B (conferir na Caderneta)", 1: "Conferir BCG e hepatite B; próximas aos 2 meses (Penta, VIP, rotavírus, pneumocócica)", 2: "Penta 1 · VIP 1 · Rotavírus 1 · Pneumocócica 1ª dose; meningocócica C aos 3 meses na sala de vacina", 4: "Penta 2 · VIP 2 · Rotavírus 2 · Pneumocócica 2ª dose; meningocócica C aos 5 meses", 6: "Penta 3 · VIP 3 · COVID-19 1ª dose · Influenza anual (1ª vez: 2 doses com 30 dias)", 9: "Febre amarela · COVID-19 (conforme esquema)", 12: "Pneumocócica (reforço) · Meningocócica ACWY · Tríplice viral 1", 15: "DTP e VIP (reforço) · Tríplice viral 2 / varicela · Hepatite A", 18: "Conferir as dos 15 meses (DTP e VIP reforço, tríplice viral 2, varicela, hepatite A)", 24: "Conferir o esquema; próximos reforços aos 4 anos", 30: "Conferir o esquema; próximos reforços aos 4 anos", 36: "Conferir o esquema; influenza anual; reforços aos 4 anos", 48: "DTP (2º reforço) · VIP (2º reforço, NT 64/2026) · Varicela 2 · Febre amarela (reforço); influenza anual", 60: "Conferir o esquema; influenza anual"};
  const VACHOJE = {2: 1, 4: 1, 6: 1, 9: 1, 12: 1, 15: 1, 48: 1};
  const supTxt = k => {
    const m = mesesDe(k), L2 = [];
    L2.push(m < 12 ? "Vitamina D 400 UI/dia de 0 a 12 meses (SBP 2024) [F]" : m < 24 ? "Vitamina D 600 UI/dia a partir de 1 ano (SBP 2024) [F]" : "A SBP sugere 600 UI/dia de vitamina D de 1 a 18 anos, por dieta e/ou suplemento; sem programa do MS – decisão individual com a família [F]");
    if (m < 6) L2.push("Ferro no termo com peso adequado: só a partir de 6 meses; prematuro/baixo peso: a partir de 30 dias, 2–4 mg/kg/dia conforme o peso ao nascer [F]; quem recebe leite de vaca pode precisar de ferro a partir de 4 meses (SBP 2026) [F]");
    else if (m < 9) L2.push("Ferro – 1º ciclo (6 aos 9 meses): sulfato ferroso 25 mg/mL, 10–12,5 mg/dia de ferro elementar (0,4–0,5 mL), em 2 ciclos de 3 meses com pausa de 3 meses (SBP 2026; PNSF) [F]");
    else if (m < 12) L2.push("Ferro: encerrar o 1º ciclo ao completar 3 meses de uso; 2º ciclo dos 12 aos 15 meses [F]");
    else if (m < 15) L2.push("Ferro – 2º ciclo (12 aos 15 meses): 10–12,5 mg/dia [F]");
    else if (m < 24) L2.push("Ferro: encerrar o 2º ciclo ao completar 3 meses de uso; prematuro/baixo peso: 1 mg/kg/dia até 24 meses [F]");
    else L2.push("Ferro: sem profilaxia de rotina; investigar anemia só com fator de risco (ver 'Check-up da criança') [F]");
    if (m >= 6 && m < 24) L2.push("Dar o ferro 30 minutos antes de uma refeição: orientação do modelo de receita, não conferida no texto da SBP 2026 [NV]");
    L2.push("REMUME Betim: não há vitamina D isolada; o polivitamínico gotas tem vitaminas A (3.000 UI/mL), complexo B, C, D2 (900 UI/mL) e E [F]");
    L2.push("Gotas por mL do sulfato ferroso e UI por gota da vitamina D variam por fabricante: conferir no frasco [NV]");
    return L2;
  };
  const ALIM_A = {x: "Alimentação adequada", ame: "Amamentação exclusiva mantida", misto: "Aleitamento materno com fórmula", formula: "Em uso de fórmula infantil", lv: "Em uso de leite de vaca", amc: "Aleitamento materno mantido com alimentação complementar", amf: "Aleitamento materno mantido com alimentação da família", comp: "Alimentação complementar sem aleitamento", fam: "Alimentação adequada"};
  const alimDef = k => { const m = mesesDe(k); return m <= 6 ? "ame" : m < 12 ? "amc" : m < 30 ? "x" : "fam"; };
  function alimFrase(a, st, k){
    const m = mesesDe(k), mot = st.motfor ? " (" + st.motfor + ")" : "", comp = m >= 9 ? ", associado(a) à alimentação complementar" : "";
    if (a === "ame" && k === 6) return "Em aleitamento materno exclusivo até o momento; ainda não iniciou a alimentação complementar.";
    if (a === "ame" && m >= 9) a = "amc";
    if (a === "ame") return "Em aleitamento materno exclusivo em livre demanda, com boa pega e sucção efetiva. Nega dificuldades na amamentação.";
    if (a === "misto") return `Em aleitamento materno complementado com fórmula infantil${mot}${comp}.`;
    if (a === "formula") return `Em uso de fórmula infantil${mot}${comp}.`;
    if (a === "lv") return `Recebe leite de vaca${mot}${comp}.`;
    if (a === "amc") return "Aleitamento materno mantido, associado à alimentação complementar.";
    if (a === "amf") return "Aleitamento materno mantido, associado à alimentação da família.";
    if (a === "comp") return `Em alimentação complementar, sem aleitamento materno${mot}.`;
    if (a === "x") return "Aleitamento materno: ___ (mantido / suspenso).";
    return "Alimentação da família, com participação nas refeições.";
  }
  const ALARM = [["a_febre", "febre"], ["a_recusa", "recusa alimentar"], ["a_vom", "vômitos persistentes"], ["a_letar", "hipoatividade ou letargia"], ["a_resp", "desconforto respiratório"], ["a_conv", "convulsão ou espasmos"], ["a_cian", "cianose"], ["a_ict", "icterícia"], ["a_diar", "diarreia com desidratação"], ["a_peso", "perda de peso"]];
  const TRI = [["t_pez", "teste do pezinho"], ["t_ore", "teste da orelhinha"], ["t_olh", "teste do olhinho (reflexo vermelho)"], ["t_cor", "teste do coraçãozinho"], ["t_lin", "teste da linguinha"]];
  const TRIV = {ok: "realizado – normal", ag: "realizado – aguarda resultado", alt: "ALTERADO", nao: "não realizado"};
  const N = v => { const s = String(v ?? "").replace(",", "."); return s === "" ? NaN : parseFloat(s); };
  const ok = x => typeof x === "number" && isFinite(x);
  const up = s => s[0].toUpperCase() + s.slice(1);
  // ── lógica clínica. O CONTEÚDO segue a consulta (k); a idade exata (ctx.m, ctx.dias) só entra em segurança:
  // febre < 3 meses, variação de peso, ferro do prematuro a partir de 30 dias e idade corrigida.
  function plano(k, st, ctx){
    const mk0 = mesesDe(k), tpl = !!ctx.tpl;
    const ma = ctx.mc != null ? ctx.mc : ctx.m != null ? ctx.m : mk0; const dias = ctx.dias != null ? ctx.dias : Math.round(mk0 * 30.4375);
    const out = {urg: [], fazer: [], cond: [], achados: [], rx: [], ret: null};
    const C2 = a => !!st[a];
    const ign = N(st.ign), pn = N(st.pn), peso = N(st.peso), pant = N(st.pant), tax = N(st.tax);
    const prem = ok(ign) && ign < 37, baixo = ok(pn) && pn < 2500;
    const febreT = ok(tax) && tax >= 37.8;
    ALARM.forEach(([a, l]) => { const on = C2(a) || (a === "a_febre" && febreT); if (on) { const f3 = a === "a_febre" && ma < 3; out.urg.push({t: up(l) + (a === "a_febre" && febreT ? ` (Tax ${st.tax} °C)` : "") + (f3 ? " em menor de 3 meses: avaliação no mesmo dia/urgência pediátrica" : ": avaliar hoje; sinais de gravidade → urgência pediátrica"), src: "Caderneta", link: f3 ? "febre-menor-3m" : null}); out.cond.push(f3 ? "Febre em menor de 3 meses: encaminho para avaliação na urgência pediátrica" : `Avalio ${l} e oriento sinais de gravidade`); } });
    if (ok(peso) && ok(pn) && dias <= 21){ const v = (peso - pn) / pn * 100; out.achados.push(`variação de peso desde o nascimento ${v.toFixed(1).replace(".", ",")}%`); if (v <= -10){ out.urg.push({t: `Perda de ${Math.abs(v).toFixed(1).replace(".", ",")}% do peso de nascimento (≥ 10%): avaliar mamada e hidratação hoje; retorno em 48 h`, src: "C"}); out.cond.push("Perda de peso ≥ 10% do nascimento: avalio mamada e hidratação"); out.ret = "em 48 horas"; } else if (dias >= 14 && peso < pn){ out.fazer.push({t: "Não recuperou o peso de nascimento até 14 dias: avaliar mamada e retorno em 1 semana", src: "C"}); out.cond.push("Peso de nascimento ainda não recuperado: oriento técnica de amamentação"); out.ret = out.ret || "em 1 semana"; } }
    if (ok(peso) && ok(pant) && st.dant && ctx.ref){ const d = Math.round((ctx.ref - ctx.pdant) / DI); if (d > 0){ const g = (peso - pant) / d; out.achados.push(`ganho de ${Math.round(g)} g/dia desde a última consulta`); if (ma < 4 && g < 20) out.fazer.push({t: `Ganho de ${Math.round(g)} g/dia (< 20 g/dia no 1º trimestre): reavaliar alimentação e curva`, src: "C"}); } }
    if (st.orto === "alt" && mk0 < 4){ out.fazer.push({t: "Ortolani/Barlow alterado: USG de quadril e ortopedia com prioridade", src: "C"}); out.cond.push("Manobras de Ortolani/Barlow alteradas: solicito USG de quadril e encaminho à ortopedia com prioridade"); }
    if (mk0 < 6){ TRI.forEach(([kk, l]) => { if (st[kk] === "alt"){ out.fazer.push({t: `${up(l)} alterado: seguir o fluxo do serviço de referência`, src: "Caderneta", link: "pu-triagens"}); out.cond.push(`${up(l)} alterado: encaminho conforme o fluxo do serviço de referência`); } if (st[kk] === "nao"){ const tard = kk === "t_pez" && dias > 30; out.fazer.push({t: tard ? "Pezinho não coletado e > 30 dias: biotinidase + teste do suor no Nupad e triagem tardia pela Direg (Memorando 1098/2026)" : `${up(l)} não realizado: providenciar`, src: "Betim", link: "pu-triagens"}); out.cond.push(tard ? "Teste do pezinho não coletado (> 30 dias): solicito triagem tardia conforme o fluxo municipal" : `${up(l)} não realizado: solicito`); } });
      if (!tpl && !st.t_pez && dias > 5) out.fazer.push({t: "Conferir coleta e resultado do teste do pezinho na Caderneta", src: "Betim", link: "pu-triagens"}); }
    const mk = marcos(k); const aus = mk.filter((x, i) => C2("mk_" + i));
    let dnpm = "DNPM compatível com a idade";
    if (C2("m_ant") || C2("m_feno")){ dnpm = "Provável atraso do desenvolvimento"; out.fazer.push({t: "Provável atraso: encaminhar para avaliação (pediatria/neuropediatria e reabilitação) e estimular", src: "Caderneta", link: "pu-dnpm"}); out.cond.push("Provável atraso do desenvolvimento: encaminho para avaliação especializada e oriento estímulos"); }
    else if (aus.length){ dnpm = "Alerta para o desenvolvimento (marco ausente: " + aus.join("; ") + ")"; out.fazer.push({t: "Alerta para o desenvolvimento: orientar estímulos e reavaliar em 30 dias", src: "Caderneta", link: "pu-dnpm"}); out.cond.push("Alerta para o desenvolvimento: oriento estímulos"); out.ret = out.ret || "em 30 dias para reavaliar o desenvolvimento"; }
    const mc = N(st.mchat);
    if (ok(mc) && (k === 18 || k === 24)){ if (mc >= 8){ out.fazer.push({t: `M-CHAT-R ${mc}: alto risco – encaminhar direto para avaliação diagnóstica e intervenção`, src: "SBP", link: "pu-dnpm"}); out.cond.push("M-CHAT-R/F de alto risco: encaminho para avaliação diagnóstica e intervenção precoce"); } else if (mc >= 3){ out.fazer.push({t: `M-CHAT-R ${mc}: aplicar a entrevista de seguimento (≥ 2 itens = positivo)`, src: "SBP", link: "pu-dnpm"}); out.cond.push("M-CHAT-R/F de risco moderado: aplico a entrevista de seguimento"); } }
    // suplementos (pela consulta)
    const vitd = ma < 12 ? 400 : 600;
    const usaD = tpl ? mk0 < 24 : C2("u_vitd") || C2("u_poli");
    const usaFe = tpl ? (k === 9 || k === 15) : C2("u_fe");
    const doseD = !tpl && st.u_vitd && st.d_vitd && +st.d_vitd !== vitd;
    let fer = null, ferCond = null, ferNec = false;
    const gfe = st.g_fe ? st.g_fe : "___";
    if (prem || baixo){ const mg = !ok(pn) ? "2–4" : pn < 1000 ? "4" : pn < 1500 ? "3" : "2";
      if (dias >= 30 && ma < 12){ fer = `Sulfato ferroso ${mg} mg/kg/dia de ferro elementar (prematuro/baixo peso) até 12 meses; depois 1 mg/kg/dia até 24 meses`; ferCond = `sulfato ferroso ${mg} mg/kg/dia de ferro elementar (prematuro/baixo peso), calculado pelo peso atual`; ferNec = true; }
      else if (ma >= 12 && ma < 24){ fer = "Sulfato ferroso 1 mg/kg/dia de ferro elementar até 24 meses (prematuro/baixo peso)"; ferCond = "sulfato ferroso 1 mg/kg/dia de ferro elementar até 24 meses (prematuro/baixo peso)"; ferNec = true; }
      else if (dias < 30) fer = `Ferro a partir de 30 dias: ${mg} mg/kg/dia (prematuro/baixo peso)`; }
    else if ((k === 6 || k === 12) && ma < k - 0.5) out.fazer.push({t: `Ainda não está na idade do ${k === 6 ? "1º" : "2º"} ciclo de ferro: iniciar ao completar ${k} meses`, src: "SBP 2026"});
    else if (k === 6 || k === 12){ const c1 = k === 6; fer = `Sulfato ferroso 25 mg/mL: 0,4–0,5 mL/dia (10–12,5 mg de ferro elementar), ${c1 ? "1º ciclo (6 aos 9 meses)" : "2º ciclo (12 aos 15 meses)"}`; ferCond = `sulfato ferroso 25 mg/mL, ${gfe} gotas/dia (10–12,5 mg/dia de ferro elementar), por 3 meses – ${c1 ? "1º ciclo (6 aos 9 meses)" : "2º ciclo (12 aos 15 meses)"}`; ferNec = true; }
    else if (k === 4 && st.alim === "lv"){ fer = "Recebe leite de vaca: pode precisar de ferro a partir de 4 meses (SBP 2026) – 10–12,5 mg/dia; fórmula infantil já contém ferro"; ferCond = `sulfato ferroso 25 mg/mL, ${gfe} gotas/dia, por receber leite de vaca`; ferNec = true; }
    if (ctx.fora) out.fazer.unshift({t: "Idade fora da consulta: conferir o que depende da idade exata (ferro, dose de vitamina D, vacinas) antes de copiar a evolução", src: "I"});
    if (mk0 < 24) out.rx.push({t: `Vitamina D ${vitd} UI/dia${usaD && !tpl ? " – em uso" : ""}`, src: "SBP 2024"});
    if (fer) out.rx.push({t: fer + (usaFe ? " – em uso" : ""), src: "PNSF/SBP 2026", link: "pu-suplementacao"});
    else if (!tpl && usaFe && !(k === 9 || k === 15)) out.rx.push({t: "Sulfato ferroso em uso fora da janela de profilaxia: conferir indicação (tratamento?)", src: "I", link: "pu-suplementacao"});
    if (mk0 < 24) out.cond.push(doseD ? `Ajusto vitamina D para ${vitd} UI/dia` : usaD ? `Mantenho vitamina D ${vitd} UI/dia` : `Prescrevo vitamina D ${vitd} UI/dia`);
    if (ferCond) out.cond.push((usaFe ? "Mantenho " : "Prescrevo ") + ferCond);
    if (k === 9 && !prem && !baixo) out.cond.push("Encerro o 1º ciclo de sulfato ferroso ao completar 3 meses de uso; 2º ciclo dos 12 aos 15 meses");
    if (k === 15 && !prem && !baixo) out.cond.push("Encerro o 2º ciclo de sulfato ferroso ao completar 3 meses de uso");
    if (!tpl && k === 6 && ma < 6 && ctx.dn) out.fazer.push({t: `Ainda não completou 6 meses: introdução alimentar, ferro e vacinas dos 6 meses a partir de ${new Date(addM(ctx.dn, 6)).toISOString().slice(0, 10).split("-").reverse().join("/")}`, src: "Caderneta"});
    if (!tpl && mk0 < 6 && st.alim && st.alim !== "ame") out.fazer.push({t: "Apoiar a relactação/aumento do aleitamento se a mãe desejar; se precisar de outro leite, fórmula infantil adequada à idade", src: "Guia Alimentar", link: "pu-alimentacao"});
    if (mk0 < 12 && st.alim === "lv") out.fazer.push({t: "Leite de vaca: o Guia Alimentar não recomenda antes de 9 meses e a SBP 2026 orienta evitar no 1º ano (fórmula até ~12 meses); se for a única opção, orientar preparo e diluição corretos", src: "Guia/SBP", link: "pu-alimentacao"});
    if (C2("bico") && k !== "rn") out.cond.push("Desestimulo mamadeira e chupeta");
    const alim = st.alim || alimDef(k);
    const cres = tpl ? "Crescimento ___ (adequado / desvio: ___) nas curvas da Caderneta" : st.cres === "alt" ? "Desvio do crescimento" + (st.cres_t ? ": " + st.cres_t : " – ver plano") : "Crescimento adequado nas curvas da Caderneta";
    const suplOk = usaD && !doseD && (!ferNec || usaFe);
    const A = [out.urg.length ? "Criança com sinal de alerta – ver plano" : "Criança em bom estado geral", cres, dnpm, ALIM_A[alim] || "Alimentação adequada", tpl ? "Esquema vacinal ___ (atualizado / pendências: ___)" : C2("v_ok") ? "Esquema vacinal atualizado" : (st.v_pend ? "Vacinas pendentes: " + st.v_pend : "Situação vacinal a conferir")];
    if (mk0 < 24) A.push(tpl ? "Suplementação ___ (adequada / a ajustar)" : suplOk ? "Suplementação adequada" : "Suplementação a ajustar");
    if (!out.urg.length) A.push("Sem intercorrências clínicas");
    return {out, A, prem, pb: prem || baixo, mk, aus, alim, vitd, fer};
  }
  // ── evolução SOAP (mesma função para o modelo e para a consulta guiada)
  function evo(k, st = {}, ctx = {}){
    const x = X[k], c = C[k], mk0 = mesesDe(k), tpl = !!ctx.tpl;
    const R = plano(k, st, ctx);
    const AC = {mae: "da mãe", pai: "do pai", maes: "da mãe e do pai", avo: "da avó", outro: "do(a) responsável"};
    const ac = tpl ? "de ___" : (st.acomp === "outro" && st.acompt ? "de " + st.acompt : (AC[st.acomp] || "da mãe"));
    const RESP = {mae: "Mãe", maes: "Mãe", pai: "Pai", avo: "Avó"};
    const resp = tpl ? "Mãe/responsável" : (RESP[st.acomp || "mae"] || "Responsável");
    const fem = c.suj === "Criança" || (!tpl && st.sexo === "f"), masc = c.suj !== "Criança" && !tpl && st.sexo === "m";
    const acomp = fem ? "acompanhada" : masc ? "acompanhado" : "acompanhado(a)";
    const prim = k === "rn" || (!tpl && !!st.prim);
    const id = tpl ? "___" : ctx.idade;
    const tit = `PUERICULTURA – ${x.nome.toUpperCase()}`;
    const p1 = [`${c.suj} de ${id} comparece à consulta de puericultura ${k === "rn" ? "da 1ª semana" : "de " + x.nome}, ${acomp} ${ac}.`];
    if (R.prem && ctx.m != null && ctx.m < 24) p1.push(`Prematuro(a) de ${st.ign} semanas (avaliar crescimento e desenvolvimento pela idade corrigida).`);
    const alimF = R.alim === "fam" && !st.alim ? "" : alimFrase(R.alim, st, k);
    p1.push(c.s({st, al: R.alim, resp, alimF}).replace(/\s{2,}/g, " ").trim());
    const alarmes = ALARM.filter(([kk]) => st[kk] || (kk === "a_febre" && N(st.tax) >= 37.8)).map(([, l]) => l);
    p1.push(alarmes.length ? `Refere ${alarmes.join(", ")}.` : "Nega febre, tosse, coriza, diarreia ou outras queixas.");
    if (st.bico) p1.push("Faz uso de mamadeira/chupeta.");
    let usos = [];
    if (tpl){ if (mk0 < 24) usos.push(`vitamina D ${R.vitd} UI/dia`); if (k === 9 || k === 15) usos.push("sulfato ferroso ___ gotas/dia"); }
    else {
      if (st.u_vitd) usos.push(`vitamina D ${st.d_vitd || R.vitd} UI/dia`);
      if (st.u_poli) usos.push(`polivitamínico gotas (REMUME) ${st.d_poli || "___"} mL/dia`);
      if (st.u_fe) usos.push(`sulfato ferroso ${st.g_fe || "___"} gotas/dia`);
      if (st.u_vita) usos.push("vitamina A (megadose do PNSVA)");
    }
    p1.push(usos.length ? `Em uso de: ${usos.join("; ")}.` : "Sem suplementos em uso.");
    if (mk0 >= 12) p1.push(`Frequenta creche/escola: ${tpl || !st.creche ? "___" : st.creche}. Tempo de telas: ${tpl || !st.telas ? "___" : st.telas} h/dia. Escova os dentes ${tpl || !st.escova ? "___" : st.escova} vez(es) ao dia, com creme dental com flúor.${mk0 >= 18 && mk0 < 48 ? ` Controle esfincteriano: ${tpl || !st.esfin ? "___" : st.esfin}.` : ""}`);
    if (prim){
      if (tpl){
        p1.push("Nascido(a) de parto ___, com IG ___ semanas, peso ___ g, comprimento ___ cm, PC ___ cm e Apgar ___. Intercorrências neonatais: ___ (UTI, fototerapia, infecção).");
        p1.push("Sorologias maternas: sífilis ___, HIV ___, hepatite B ___, toxoplasmose ___; tipagem materna ___.");
        p1.push("Triagens neonatais: teste do pezinho ___, orelhinha ___, olhinho ___, coraçãozinho ___ e linguinha ___.");
        p1.push("Mãe/cuidador(a) com humor ___ e rede de apoio ___; fumaça de cigarro no domicílio ___.");
      } else {
        const nb = [];
        if (st.parto) nb.push("de parto " + st.parto); if (st.dparto) nb.push("em " + st.dparto); if (st.ign) nb.push(`com IG de ${st.ign} semanas`);
        const med = []; if (st.pn) med.push(`peso ${st.pn} g`); if (st.cn) med.push(`comprimento ${st.cn} cm`); if (st.pcn) med.push(`PC ${st.pcn} cm`); if (st.apgar) med.push(`Apgar ${st.apgar}`);
        if (nb.length || med.length) p1.push(`Nascido(a) ${nb.join(", ")}${med.length ? (nb.length ? "; " : "") + med.join(", ") : ""}.`);
        if (st.alta) p1.push(`Alta: ${st.alta}.`);
        if (st.sor) p1.push(`Sorologias maternas: ${st.sor}.`);
        const tri = TRI.filter(([kk]) => st[kk]).map(([kk, l]) => `${l} ${TRIV[st[kk]]}`);
        if (tri.length) p1.push(`Triagens neonatais: ${tri.join("; ")}.`);
        const cu = []; if (st.c_humor) cu.push("humor " + st.c_humor); if (st.c_rede) cu.push("rede de apoio " + st.c_rede); if (st.c_fumo) cu.push(st.c_fumo === "sim" ? "há fumantes no domicílio" : "sem fumaça de cigarro no domicílio");
        if (cu.length) p1.push(`Cuidador(a): ${cu.join("; ")}.`);
      }
    }
    const S = tit + "\n" + p1.join(" ");
    // O – exame (antropometria e sinais vitais ficam fora: vão para o campo próprio do SIGSS)
    const fn = N(st.font);
    const F = tpl || !ok(fn) ? "___" : String(st.font);
    const FF = tpl || !ok(fn) ? "___ (aberta, com ___ polpas digitais / fechada)" : fn > 0 ? `aberta, com ${st.font} polpas digitais` : "fechada";
    const sexo = tpl ? "" : st.sexo;
    const GEN = sexo === "m" ? `Genitália masculina: testículos tópicos bilateralmente${mk0 < 12 ? ", sem hérnias inguinais" : ""}.` : sexo === "f" ? "Genitália feminina sem alterações." : "Genitália: ___ (feminina sem alterações / masculina com testículos tópicos bilateralmente).";
    const QUAD = mk0 < 4 ? (tpl || !st.orto ? "Quadril: manobras de Ortolani e Barlow ___ (negativas)." : st.orto === "alt" ? "Quadril: manobras de Ortolani e Barlow ALTERADAS." : "Quadril: manobras de Ortolani e Barlow negativas.") : mk0 < 12 ? "Quadris: abdução simétrica, sem limitação; pregas simétricas." : "Marcha: sem claudicação.";
    const O = [];
    c.o.forEach(l => { if (l === "@GEN") O.push(GEN); else if (l === "@QUAD") O.push(QUAD); else O.push(l.replace("@FF", FF).replace("@F", F)); });
    if (R.mk.length){ if (tpl) O.push(`Desenvolvimento neuropsicomotor (Caderneta): marcos da faixa ___ (presentes / ausentes: ___) – ${R.mk.join("; ")}.`); else O.push(`Desenvolvimento neuropsicomotor (Caderneta): ${R.aus.length ? "ausente(s): " + R.aus.join("; ") + ". Presentes: " + R.mk.filter((x2, i) => !st["mk_" + i]).join("; ") : "marcos da faixa presentes – " + R.mk.join("; ")}.`); }
    if (k === 18 || k === 24) O.push(`M-CHAT-R/F: ${tpl || !st.mchat ? "___" : st.mchat} pontos.`);
    const A = R.A.map(a => "- " + a);
    const IAM = {trad: "pelo método tradicional (Guia Alimentar): comida da família amassada com garfo, alimentos separados", bliss: "pelo método participativo (BLISS): alimentos em pedaços macios que a criança consiga pegar, com um alimento fonte de ferro e um energético em cada refeição, criança sempre sentada e com adulto atento, evitando alimentos de risco de engasgo", mista: "pela abordagem mista: parte amassada na colher e parte em pedaços para a criança pegar"};
    const subst = l => l === "@SONO" ? (mk0 < 12 ? "Reforço sono seguro: de barriga para cima, no berço próprio no quarto dos pais, sem travesseiros, protetores ou objetos fofos" : null)
      : l === "@TUMMY" ? (mk0 < 6 ? "Estimulo tempo de barriguinha (tummy time) supervisionado, com o bebê acordado, aumentando o tempo ao longo do dia" : null)
      : l.replace("@IA", tpl || !st.ia ? "___ (tradicional: comida amassada com garfo / participativa – BLISS: pedaços para a criança pegar / mista)" : IAM[st.ia]);
    const P = ["- Atualizo caderneta da criança", "- Esclareço dúvidas dos responsáveis"];
    R.out.cond.forEach(l => P.push("- " + l));
    c.p.map(subst).filter(Boolean).forEach(l => P.push("- " + l));
    const V = ctx.vac;
    if (tpl){ if (VACHOJE[k]) P.push(`- Encaminho para vacinação conforme o calendário (vacinas de ${x.nome})`); }
    else if (V && V.agora.length && !st.v_ok) P.push(`- Encaminho para vacinação: ${V.agora.join("; ")}`);
    else if (st.v_pend) P.push(`- Encaminho para atualização vacinal: ${st.v_pend}`);
    else if (V && !V.agora.length && V.prox) P.push(`- Oriento retorno à sala de vacina em ${V.prox.data} para as vacinas de ${V.prox.r}`);
    P.push("- Oriento sinais de alarme: febre, recusa alimentar, vômitos, letargia, desconforto respiratório");
    const nx = PROX[k]; const nxt = nx != null ? `puericultura de ${X[nx].nome}` : "consulta de rotina anual (6 anos)";
    P.push(R.out.ret ? `- Retorno ${R.out.ret}; próxima ${nxt}.` : `- Retorno agendado para ${nxt}.`);
    return {titulo: tit, S, O: O.join("\n"), A: A.join("\n"), P: P.join("\n"), R};
  }
  // ── informação para o médico (não vai para a evolução)
  function info(k){
    const c = C[k], m = mesesDe(k);
    const ia = [];
    (c.ia || []).forEach(t => { if (t === "tradicional") ia.push({g: "Introdução alimentar – método tradicional (Guia Alimentar < 2 anos)", i: IA.tradicional}); else if (t === "participativa") ia.push({g: "Introdução alimentar participativa – BLW, BLISS e abordagem mista", i: IA.participativa}); else ia.push({g: "Progressão da alimentação (Guia Alimentar < 2 anos)", i: IA[t]}); });
    return {fazer: c.fazer, marcos: marcos(k), cdc: c.cdc || [], alim: c.alim, ia, sup: supTxt(k), vac: VACT[k], est: c.est, sono: m < 12 ? SONO.concat(m < 6 ? TUMMY : []) : [], acid: c.acid};
  }
  function roteiro(k){
    const I = info(k); const g = [];
    g.push({g: "Fazer nesta consulta", i: I.fazer});
    if (I.marcos.length) g.push({g: "Marcos esperados nesta faixa (Caderneta da Criança 2025)", nota: "Ausência de marcos da faixa anterior = provável atraso; ausência de marcos da faixa atual = alerta: orientar estímulo e reavaliar em 30 dias.", i: I.marcos});
    if (I.cdc.length) g.push({g: "Lista complementar – marcos CDC/AAP 2022 (≥ 75% das crianças)", i: I.cdc});
    g.push({g: "Alimentação", i: I.alim}); I.ia.forEach(x2 => g.push(x2));
    g.push({g: "Suplementação", i: I.sup}, {g: "Vacinas (PNI 2026)", i: [I.vac]}, {g: "Estímulos recomendados", i: I.est});
    if (I.sono.length) g.push({g: "Sono seguro" + (mesesDe(k) < 6 ? " e tempo de barriguinha (SBP 2023)" : " (SBP 2023)"), i: I.sono});
    g.push({g: "Prevenção de acidentes", i: I.acid});
    return g;
  }
  const mesesCal = (dn, ref) => { const a = new Date(dn), b = new Date(ref); let m = (b.getUTCFullYear() - a.getUTCFullYear()) * 12 + (b.getUTCMonth() - a.getUTCMonth()); if (addM(dn, m) > ref) m--; return m + (ref - addM(dn, m)) / DI / 30.4375; };
  return {mesesCal, L, X, C, qual, idade, evo, info, roteiro, plano, marcos, alvo, janela, PROX, mesesDe, VACHOJE};
})();

// ── aplica o conteúdo único aos itens "Consultas por idade" (o modelo = evolução da consulta guiada sem dados)
(function(){
  const get = id => CONDICOES.find(c => c.id === id);
  const base = get("pu-3a5a") || {};
  const NOVOS = {
    "pu-15m": {tags: "15 meses consulta extra marcos CDC hepatite A tríplice viral varicela", orient: "Converse, leia e cante com a criança todos os dias. Ofereça de novo os alimentos que ela recusou, sem forçar e sem trocar a refeição por leite.\nBirras são comuns nesta idade: mantenha a calma e limites claros.\nVolte à sala de vacina para as vacinas dos 15 meses, se ainda não tomou."},
    "pu-30m": {tags: "30 meses 2 anos e meio consulta extra marcos CDC desfralde telas", orient: "Leia e converse todos os dias, fazendo perguntas e ampliando as frases da criança.\nO desfralde acontece quando a criança está pronta: sem pressão e sem castigo.\nTelas no máximo 1 hora por dia, com um adulto junto."},
    "pu-4a": {tags: "4 anos pré-escolar anual reforço DTP VIP varicela febre amarela acuidade visual PA", orient: base.orient},
    "pu-5a": {tags: "5 anos pré-escolar anual acuidade visual PA escola", orient: base.orient}
  };
  PU.L.forEach(x => {
    const ev = PU.evo(x.k, {}, {tpl: true});
    let c = get(x.id);
    if (!c){
      c = {id: x.id, modulo: "pu", risco: "baixo", ciap: "A98", cid: "Z00.1", tags: "puericultura consulta de rotina " + (NOVOS[x.id] || {}).tags, rx: [], orient: (NOVOS[x.id] || {}).orient || "",
        alarme: typeof PU_ALARME_CRIANCA !== "undefined" ? PU_ALARME_CRIANCA : [], encaminhar: base.encaminhar, sus: base.sus,
        evid: {resumo: base.evid ? base.evid.resumo : "", certeza: base.evid ? base.evid.certeza : "Recomendação normativa/consenso", fontes: ["caderneta_crianca", "pni2026", "sisvan", ...(x.extra ? ["cdc_marcos2022"] : [])]}, mudancas: [], nv: []};
      const iAnt = CONDICOES.findIndex(cc => cc.id === PU.L[PU.L.indexOf(x) - 1].id);
      CONDICOES.splice(iAnt + 1, 0, c);
    }
    c.nome = x.k === "rn" ? "Primeira consulta do recém-nascido (1ª semana)" : `Consulta de ${x.nome}${x.k === 6 ? " e introdução alimentar" : x.k === 18 || x.k === 24 ? " (com M-CHAT-R)" : x.extra ? " (consulta extra)" : ""}`;
    c.sistema = "Consultas por idade";
    c.S = ev.S; c.O = ev.O; c.A = ev.A; c.P = ev.P;
    c.roteiro = PU.roteiro(x.k);
    if (x.k === 36 && c.tags) c.tags = c.tags.replace(/4 anos 5 anos /, "");
    const fx = ["sbp_sono2023", ...(x.k === 6 ? ["guia_menor2_cons", "bliss_cresc2017", "bliss_engasgo2016", "sbp_blw2017"] : x.k === 9 || x.k === 12 ? ["guia_menor2_cons"] : [])];
    if (c.evid){ c.evid.fontes = [...new Set([...(c.evid.fontes || []), ...fx])]; }
    c.nv = [...new Set([...(c.nv || []).filter(t => !/Marcos do desenvolvimento: conferir/.test(t)), "Marcos do desenvolvimento: conferir o texto exato do instrumento da Caderneta 2025.", "Gotas por mL do sulfato ferroso da REMUME e UI por gota da vitamina D (conferir no frasco)."])];
    if (x.extra) c.nv.push("Consulta não prevista no calendário da Caderneta 2025: confirmar se a agenda da unidade a oferece.");
    c.mudancas = (c.mudancas || []).concat(["Revisão 20/10/2026 (v42): modelo igual ao da consulta guiada pela idade (mesma fonte e mesmo gerador). S em texto corrido com o título da consulta e a idade exata; antropometria e sinais vitais fora da evolução; dados do cuidador, do nascimento e das triagens só na primeira consulta; suplementos em 'Em uso de: ...'; lembretes ao médico e orientações de alimentação, vacinas, estímulos, sono seguro e acidentes no Roteiro; Plano começa por 'Atualizo caderneta da criança' e termina com o retorno."]);
  });
  // a antiga consulta anual de 3 a 5 anos vira a de 3 anos (o id foi mantido para não perder favoritos)
  const c3 = get("pu-3a5a"); if (c3 && c3.evid) c3.evid.fontes = [...new Set(c3.evid.fontes)];
  const g = get("pu-guiada");
  if (g){ g.evid.fontes = [...new Set([...g.evid.fontes, "sbp_sono2023", "guia_menor2_cons", "bliss_cresc2017", "bliss_engasgo2016", "sbp_blw2017", "cdc_marcos2022"])];
    g.mudancas = g.mudancas.concat(["Revisão 20/10/2026 (v42): usa o mesmo conteúdo das consultas por idade; idade sem consulta prevista mostra o aviso e usa a consulta mais próxima; evolução separada em S, O, A e P; o que é lembrete ou orientação ao médico fica fora da evolução."]); }
})();
