// ── Consulta de puericultura guiada pela idade ───────────────────────────────
// Evolução no modelo da usuária (Notion/Google Docs): S narrativo, triagens, nascimento, O por sistemas,
// alimentação, imunização (PNI 2026 do app), suplementação (regras do app), estímulos, acidentes, A e P.
// Nada é salvo.
const PUW = (() => {
  let S = {};
  const N = v => { const s = String(v ?? "").replace(",", "."); return s === "" ? NaN : parseFloat(s); };
  const ok = x => typeof x === "number" && isFinite(x);
  const hoje = () => pd(isoHoje());
  const it = (t, src, link) => ({t, src, link});
  const AC = {mae: "da mãe", pai: "do pai", maes: "da mãe e do pai", avo: "da avó", outro: "do(a) responsável"};
  const acomp = () => S.acomp === "outro" && S.acompt ? "de " + S.acompt : (AC[S.acomp] || "da mãe");
  // ── modelos por idade (texto da usuária; vacinas e suplementos são gerados pelas regras do app)
  const T = {
    rn: {nome: "PRIMEIRA CONSULTA DO RN", item: "pu-rn",
      s: () => `Recém-nascido comparece à primeira consulta acompanhado ${acomp()} para avaliação.\n${S.alim === "ame" || !S.alim ? "Mãe refere aleitamento materno exclusivo em livre demanda, com boa sucção, sem dor mamilar. Nega uso de mamadeira, chupeta ou complementos." : alimFrase()} Sono regular, em posição supina. Higiene do coto umbilical, sem secreções. Eliminações fisiológicas presentes: diurese e evacuações frequentes, de coloração e consistência esperadas.`,
      o: ["RN ativo e reativo, corado, hidratado, em BEG, choro vigoroso;", "Pele: normocorada, anictérica;", "Cabeça: crânio simétrico, fontanela anterior __ polpas digitais normotensa, fontanela posterior fechada;", "Olhos: reflexo vermelho presente bilateralmente, pupilas isocóricas e fotorreagentes, sem secreções;", "Ouvidos: condutos auditivos pérvios;", "Nariz/Boca: narinas pérvias, mucosa oral íntegra, palato normal, sucção vigorosa;", "Pescoço: sem massas, mobilidade preservada;", "AR: murmúrio vesicular fisiológico presente bilateralmente, sem ruídos adventícios;", "ACV: RCR em 2T, bulhas normofonéticas, sem sopros, pulsos periféricos simétricos;", "ABD: globoso, flácido, RHA+, indolor, sem visceromegalias; coto umbilical sem sinais flogísticos;", "AGU: genitália sem alterações, eliminações normais;", "Ânus: pérvio, em posição anatômica;", "Locomotor: simetria de membros, boa mobilidade, coluna íntegra;", "Neuro: tônus em semiflexão, reflexos primitivos presentes (Moro, sucção, preensão, marcha reflexa)."],
      est: ["Contato pele a pele, voz e olhar durante as mamadas"], acid: ["Sono seguro: de barriga para cima, berço próprio, colchão firme, sem travesseiro ou bichos de pelúcia", "Verificar a temperatura da água do banho", "Ambiente livre de fumaça de cigarro"],
      p: ["Registro completo na Caderneta da Criança", "Orientações sobre aleitamento materno exclusivo até os 6 meses", "Orientações sobre pega e técnica de amamentação", "Higiene do coto umbilical (limpo e seco; álcool 70% se orientado)", "Não uso de mamadeiras, chupetas, talcos", "Posição para dormir (decúbito dorsal)", "Orientações sobre prevenção de acidentes domésticos", "Esclarecimento de dúvidas e acolhimento dos pais"]},
    1: {nome: "1 MÊS", item: "pu-1m",
      s: () => `Lactente de 1 mês de idade comparece à consulta de puericultura acompanhado ${acomp()}.\n${alimFrase(true)} Refere evacuações e diurese presentes em todas as trocas de fralda. Nega vômitos, regurgitações excessivas ou cólicas intensas.\nMãe relata que o bebê apresenta períodos de alerta, abre os olhos quando ouve vozes familiares e acalma-se ao colo. Refere que o bebê emite sons curtos quando está acordado e confortável.\nSono em berço no quarto dos pais, sempre em decúbito dorsal.`,
      o: ["Estado geral: lactente alerta, normocorado, hidratado, com tônus adequado e reativo aos estímulos.", "Cabeça e pescoço: crânio simétrico, fontanela anterior aberta e normotensa com __ polpas digitais; fontanela posterior fechada. Sem linfonodomegalias.", "Olhos: acompanha luz brevemente, sem secreções; reflexo vermelho presente.", "Orelhas: pavilhões auriculares de implantação normal. Condutos auditivos externos pérvios. Reage a sons súbitos.", "Nariz: narinas pérvias, sem secreções.", "Orofaringe: mucosas coradas e hidratadas. Palato íntegro. Freio lingual sem alterações.", "Aparelho respiratório: murmúrio vesicular fisiológico, sem ruídos adventícios.", "Aparelho cardiovascular: bulhas rítmicas, normofonéticas, em 2 tempos, sem sopros. Pulsos femorais palpáveis e simétricos.", "Abdome: plano, flácido, indolor, sem visceromegalias. Cicatriz umbilical bem formada, sem sinais flogísticos.", "Geniturinário: genitália externa íntegra e sem alterações. Ânus sem fissuras.", "Extremidades: simétricas, boa movimentação espontânea, bem perfundidas.", "Neurológico: reflexos primitivos presentes e simétricos (Moro, preensão palmar, marcha reflexa, tônico-cervical, sucção, busca). Tônus muscular adequado."],
      est: ["Conversar com o bebê, fazer contato visual frequente", "Usar sons suaves, canções e brinquedos visuais contrastantes", "Tummy time supervisionado por curtos períodos", "Estimular o vínculo com toques, olhares e voz suave"],
      acid: ["Verificar temperatura da água do banho", "Não deixar o bebê sozinho em locais elevados ou banheira", "Evitar objetos pequenos ou cortantes", "Colchão firme e roupas leves", "Proteger o ambiente de fumaça de cigarro"],
      p: ["Reforço o aleitamento materno exclusivo até os 6 meses", "Oriento sobre cicatriz umbilical, banho e higiene", "Reforço sono seguro (decúbito dorsal, berço sem objetos)", "Estimulo tummy time supervisionado quando acordado", "Reforço orientações sobre segurança domiciliar e prevenção de acidentes", "Atualizo a caderneta da criança"]},
    2: {nome: "2 MESES", item: "pu-2m",
      s: () => `Lactente comparece acompanhado ${acomp()} para consulta de puericultura aos 2 meses.\n${alimFrase(true)} O padrão de sono e vigília é variável, com despertares noturnos habituais para a idade. Evacuações e diurese normais.\nO bebê reage a sons, fixa o olhar em objetos próximos e demonstra interesse pelo rosto das pessoas. Contato visual e vocalizações iniciais observadas.`,
      o: ["Estado geral: lactente alerta, ativo, bem hidratado e nutrido, com coloração e perfusão periférica preservadas. Boa interação durante o atendimento.", "Cabeça: crânio simétrico, fontanela anterior aberta de __ polpas digitais, normotensa; fontanela posterior fechada.", "Olhos: reflexo vermelho presente, acompanha objetos com os olhos.", "Ouvidos: condutos auditivos pérvios, sem secreções; responde a sons.", "Nariz e boca: narinas pérvias, mucosa oral úmida, palato íntegro, sucção eficaz.", "Pescoço: mobilidade preservada. Linfonodos: sem adenomegalias.", "Aparelho respiratório: murmúrio vesicular fisiológico, sem ruídos adventícios.", "Cardiovascular: ritmo regular, bulhas normofonéticas em 2T, sem sopros, pulsos palpáveis.", "Abdome: flácido, indolor, RHA+, sem massas ou visceromegalias; cicatriz umbilical bem formada.", "Geniturinário: genitália externa íntegra; ânus pérvio.", "Extremidades: simétricas, movimentação ativa dos quatro membros.", "Neurológico: reflexos arcaicos presentes e simétricos; tônus adequado para a idade.", "Pele e mucosas: normocorado, anictérico, sem lesões."],
      est: ["Conversar com o bebê e nomear objetos do ambiente", "Estimular contato visual e responsividade com sons e expressões faciais", "Músicas suaves e brinquedos coloridos simples", "Tummy time diário supervisionado"],
      acid: ["Temperatura da água do banho; torneiras fora do alcance", "Não deixar o bebê sozinho na banheira", "Chocalhos resistentes, sem peças pequenas; brinquedos com selo do INMETRO", "Colchão firme e cobertas leves", "Proteger de fumaça de cigarro"],
      p: ["Reforço aleitamento materno exclusivo até os 6 meses", "Encaminho para vacinação conforme PNI; oriento reações vacinais comuns (febre, dor local, irritabilidade)", "Registro na caderneta da criança"]},
    4: {nome: "4 MESES", item: "pu-4m",
      s: () => `Lactente é trazido à unidade de saúde para a consulta de puericultura aos 4 meses, acompanhado ${acomp()}. Relatam bom estado geral da criança.\n${alimFrase(true)} Sono mais estruturado, com períodos diurnos mais ativos e noites com despertares previsíveis. Evacuações e diurese normais. Sem queixas de cólicas ou refluxo.\nA criança demonstra maior interesse pelo ambiente, sorri de forma espontânea, vocaliza com frequência, acompanha objetos em movimento e sustenta a cabeça com firmeza. Há tentativas de rolar.`,
      o: ["Estado geral: lactente alerta, responsivo, bem hidratado, normocorado, com bom tônus e perfusão adequada.", "Cabeça: crânio simétrico, fontanela anterior aberta e normotensa com __ polpas digitais, fontanela posterior fechada.", "Olhos: reflexo vermelho presente, acompanha objetos horizontal e verticalmente, fixa e sorri responsivamente.", "Ouvidos: responde a sons com movimento da cabeça, sem secreções.", "Nariz e boca: vias aéreas superiores pérvias, mucosa oral hidratada, gengivas íntegras.", "Pescoço: bom controle cervical, sustenta bem a cabeça.", "Aparelho respiratório: murmúrio vesicular presente, sem ruídos adventícios.", "Cardiovascular: RCR em 2T, sem sopros, pulsos palpáveis.", "Abdome: flácido, indolor, RHA+, sem visceromegalias.", "Geniturinário: genitália externa íntegra, ânus pérvio.", "Extremidades: movimentação ativa dos quatro membros, boa perfusão.", "Neurológico: reflexos primitivos em regressão; vocalizações espontâneas, sustentação cefálica firme, inicia tentativa de rolar.", "Pele: sem lesões, normocorado, anictérico."],
      est: ["Tummy time supervisionado mais prolongado", "Brincar com sons, músicas e expressões faciais", "Brinquedos seguros que estimulem tato e visão", "Responder ao balbucio"],
      acid: ["Não deixar sozinho em lugares altos (pode rolar)", "Lados do cercado levantados", "Pequenos objetos fora do alcance", "Nunca deixar sozinho no banho", "Evitar tinta com chumbo em móveis e brinquedos"],
      p: ["Reforço o aleitamento materno exclusivo até os 6 meses", "Estimulo o vínculo afetivo, visual e verbal com o bebê", "Reforço orientações sobre segurança domiciliar e prevenção de acidentes", "Atualizo a caderneta da criança"]},
    6: {nome: "6 MESES", item: "pu-6m",
      s: () => `Lactente comparece à consulta de rotina aos 6 meses de vida, acompanhado ${acomp()}. Os responsáveis relatam que a criança encontra-se em BEG, ativa. ${alimFrase()}\nRelatam sinais de prontidão para a alimentação complementar (interesse pelos alimentos à mesa, sustentação cefálica firme, movimentos de alcance). A criança está mais expressiva, com vocalizações frequentes, sorrisos sociais, rola e mantém-se sentada com apoio.\nSono mais consolidado, com períodos noturnos mais longos e sonecas diurnas. Evacuações regulares e diurese preservada.`,
      o: ["Lactente alerta, reativo, hidratado, corado, bem nutrido, postura simétrica, sem sinais de sofrimento respiratório ou neurológico.", "Cabeça: crânio simétrico, fontanela anterior aberta (__ polpas digitais), normotensa.", "Olhos: movimentação conjugada, fixação e seguimento visual completos; reflexo vermelho presente.", "Ouvidos: sem secreções, reage ao chamado e a sons ambientais.", "Nariz e boca: vias aéreas pérvias, gengivas íntegras.", "Pescoço: sustentação cefálica firme.", "Aparelho respiratório: MVF, sem ruídos adventícios.", "Cardiovascular: RCR em 2T, sem sopros, perfusão periférica adequada.", "Abdome: flácido, indolor, RHA+, sem massas ou visceromegalias.", "Geniturinário: genitália externa íntegra.", "Extremidades: boa mobilidade e força muscular preservadas.", "Neurológico: reflexos primitivos praticamente extintos; senta com apoio, pega voluntária de objetos, vocalizações variadas, responde ao próprio nome."],
      alim: ["Verificada prontidão para início da alimentação complementar", "Alimentação variada, segura, com introdução lenta e progressiva; comida da família amassada", "Priorizar alimentos in natura e minimizar ultraprocessados", "Evitar açúcar, sal em excesso, mel, leite de vaca e sucos", "Manter aleitamento materno até 2 anos ou mais"],
      est: ["Incentivar uso de copo, colher e manipulação dos alimentos", "Objetos de diferentes texturas e sons", "Estimular rolar, sentar com apoio, balbucio e 'diálogo'", "Rotina previsível de sono e atividades"],
      acid: ["Não deixar sozinha em lugares altos", "Pequenos objetos fora do alcance (engasgo)", "Nunca deixar sozinha no banho ou perto de água", "Produtos de limpeza e remédios trancados"],
      p: ["Reforço manutenção do aleitamento materno até 2 anos ou mais, com a introdução alimentar", "Estimulo práticas seguras de introdução alimentar e desenvolvimento", "Atualizo a caderneta da criança"]},
    9: {nome: "9 MESES", item: "pu-9m",
      s: () => `Lactente comparece à consulta de acompanhamento de rotina aos 9 meses, acompanhado ${acomp()}.\nOs responsáveis relatam BEG, alimentação diversificada com boa aceitação. ${alimFrase()} A criança manipula alimentos com as mãos e demonstra interesse pela refeição familiar.\nMais ativa, engatinha, tenta se levantar com apoio e balbucia sílabas. Sociável, responde ao nome, reconhece pessoas familiares e apresenta estranhamento.\nSono noturno mais contínuo, com sonecas diurnas regulares. Evacuações normais.`,
      o: ["Lactente em bom estado nutricional, alerta, ativo, interativo, com boa perfusão e hidratação.", "Cabeça: fontanela anterior aberta (__ polpas digitais) e normotensa.", "Olhos: segue objetos e pessoas, reflexo vermelho presente, sem estrabismo.", "Ouvidos: sem secreções, responde a sons e ao próprio nome.", "Nariz e boca: mucosas úmidas, erupção dentária __.", "Aparelho respiratório: MV presente, sem ruídos adventícios.", "Cardiovascular: RCR em 2T, sem sopros.", "Abdome: flácido, RHA+, sem massas, indolor.", "Geniturinário: genitália externa íntegra.", "Extremidades: movimentação ativa, simétrica, boa coordenação.", "Neurológico: senta sem apoio, engatinha, pega com pinça, vocalizações claras, início de imitação. Reflexos primitivos extintos.", "Pele: íntegra, sem lesões."],
      alim: ["Boa aceitação da alimentação complementar, com diferentes consistências (amassados, picados)", "Alimentação responsiva e autônoma", "Aleitamento materno mantido, se possível", "Evitar açúcar, mel, refrigerantes, sucos, leite de vaca integral e ultraprocessados"],
      est: ["Conversar, cantar, apontar objetos", "Brincadeiras de repetição, esconder e aparecer", "Incentivar engatinhar e movimentar-se livremente", "Evitar telas"],
      acid: ["Objetos perigosos e pequenos fora do alcance (tudo vai à boca)", "Toalhas de mesa, alimentos e líquidos quentes fora do alcance", "Protetores de tomada; grades em escadas e janelas"],
      p: ["Reforço a importância de alimentação variada, sem açúcar e com pouco sal", "Oriento introdução alimentar responsiva, respeitando fome e saciedade", "Reforço prevenção de acidentes na fase de maior mobilidade", "Atualizo a caderneta da criança"]},
    12: {nome: "12 MESES", item: "pu-12m",
      s: () => `Responsáveis comparecem com a criança para avaliação de rotina ao completar 1 ano. Cuidadores relatam BEG, desenvolvimento motor e de linguagem crescente, e alimentação e ganho de peso adequados.\nAlimentação complementar bem estabelecida, com variedade de alimentos e texturas gradativas; tenta usar colher. ${alimFrase()}\nEngatinha bem ou fica em pé com apoio, segura objetos com destreza e vocaliza sílabas. Interage socialmente e responde ao nome.\nSono mais regular, com sonecas diurnas. Sem febre, diarreia, vômitos ou intercorrências recentes.`,
      o: ["Estado geral: ativa, reativa, alerta, coloração e hidratação normais, perfusão periférica preservada.", "Cabeça: fontanela anterior __ (fechada / em fechamento), crânio simétrico.", "Olhos: fixação e seguimento visual completos, sem estrabismo.", "Ouvidos: responde ao som, sem secreções.", "Nariz e boca: mucosa hidratada, dentição __, sem lesões orais.", "Aparelho respiratório: murmúrio vesicular fisiológico, sem ruídos adventícios.", "Cardiovascular: bulhas normofonéticas, sem sopros, pulsos palpáveis.", "Abdome: flácido, sem visceromegalias.", "Geniturinário: sem alterações.", "Extremidades: coordenação motora progressiva, equilíbrio ao ficar em pé com apoio.", "Neurológico/desenvolvimento: pinça fina, vocalizações variadas, possíveis primeiras palavras, imitação de gestos simples.", "Pele e mucosas: íntegras."],
      alim: ["Alimentação da família, diversificada", "Autonomia no uso de colher e copo", "Manter aleitamento materno até 2 anos ou mais, se possível", "Evitar ultraprocessados, excesso de sal, açúcar e mel; suco no máximo 120 mL/dia (ou nenhum)"],
      est: ["Cantar, ler, nomear objetos", "Empilhar, encaixar e manipular", "Andar com apoio", "Evitar telas"],
      acid: ["Objetos perigosos fora do alcance", "Grades em escadas e janelas; protetores de tomada", "Cabos de panela para dentro; criança longe do fogão", "Atenção redobrada com o início da marcha"],
      p: ["Reforço alimentação saudável com consistência adequada", "Oriento estímulo à marcha, linguagem e autonomia com segurança", "Estimulo vínculo familiar, rotina estável e interação verbal", "Atualizo a caderneta da criança"]},
    15: {nome: "15 MESES", item: null,
      s: () => `Criança comparece à consulta de acompanhamento com seus responsáveis (${acomp().replace(/^d[aoe] /, "")}), que relatam bom estado geral, ganho de peso adequado e desenvolvimento dentro do esperado. Anda com apoio ou de forma independente, vocaliza algumas palavras e compreende comandos simples.\nAlimentação diversificada, participa das refeições da família, tenta usar colher e copo. ${alimFrase()}\nSono noturno consolidado, com uma ou duas sonecas. Sem intercorrências recentes.`,
      o: ["Estado geral: criança ativa, alerta, hidratada, perfundida, interagindo adequadamente.", "Cabeça e face: fontanela anterior __; crânio normoformado.", "Olhos e ouvidos: seguimento visual normal, responde a estímulos sonoros.", "Nariz e boca: erupção dentária em evolução, mucosas íntegras.", "Respiratório: murmúrio vesicular bilateral, sem ruídos adventícios.", "Cardíaco: ritmo regular, bulhas normofonéticas, sem sopros.", "Abdome: flácido, indolor, sem massas, RHA+.", "Geniturinário: sem alterações, eliminações normais.", "Extremidades: deambulação independente ou com apoio, boa coordenação.", "Neurológico: reflexos primitivos ausentes, tônus adequado, linguagem em evolução."],
      alim: ["Refeições em família e uso de utensílios", "Evitar ultraprocessados, doces e sucos", "Variedade e introdução gradual de novos alimentos"],
      est: ["Leitura, canções, nomear objetos", "Blocos, encaixes, empilhamentos", "Autonomia nas atividades da rotina", "Evitar telas; contato com outras crianças"],
      acid: ["Supervisão constante ao caminhar", "Bloqueios em escadas e áreas perigosas", "Produtos tóxicos e cortantes guardados", "Calçados adequados para a marcha"],
      p: ["Reforço alimentação variada com alimentos da rotina familiar", "Oriento estímulo contínuo da linguagem, socialização e marcha", "Estimulo autonomia com segurança", "Atualizo a caderneta da criança"]},
    18: {nome: "18 MESES", item: "pu-18m",
      s: () => `Criança comparece acompanhada ${acomp()}, que relata desenvolvimento satisfatório. Marcha estável e autônoma, maior interação com ambiente e cuidadores, imita comportamentos, expressa vontades por gestos e algumas palavras.\nAlimentação diversificada, participa das refeições com a família. ${alimFrase()}\nSono regular, com uma ou duas sonecas diurnas. Higiene oral realizada regularmente.`,
      o: ["Estado geral: criança alerta, interativa, ativa, bem nutrida e hidratada.", "Cabeça: fontanelas __ (usualmente fechadas).", "Olhos/ouvidos: visão e audição funcionais.", "Oral: erupção dentária em curso.", "Aparelho respiratório: murmúrio vesicular presente, sem ruídos adventícios.", "Cardiovascular: RCR em 2T, sem sopros, pulsos palpáveis.", "Abdome: flácido, indolor, sem massas.", "Geniturinário: genitália externa sem alterações.", "Neurológico: reflexos primitivos ausentes, tônus adequado, coordenação motora fina e grossa compatível com a idade.", "Marcha: firme, corre ou sobe degraus com apoio."],
      alim: ["Padrão alimentar familiar; uso de talheres e copo incentivado", "Evitar ultraprocessados, açúcar e bebidas adoçadas"],
      est: ["Histórias, músicas, partes do corpo", "Nomear objetos e incentivar resposta verbal", "Empilhar, encaixar, desenhar, dançar", "Evitar telas; limites com afeto e consistência"],
      acid: ["Supervisão contínua (maior mobilidade)", "Prevenção de quedas, queimaduras e intoxicações", "Produtos de limpeza e medicamentos fora do alcance"],
      p: ["Reforço alimentação saudável", "Oriento estímulo da linguagem e autonomia com segurança", "Estimulo interações positivas, com afeto e limites claros", "Atualizo a caderneta da criança"]},
    24: {nome: "24 MESES (2 ANOS)", item: "pu-24m",
      s: () => `Responsáveis comparecem com a criança para avaliação de rotina aos 2 anos. Relatam BEG, desenvolvimento motor e de linguagem crescente e alimentação adequada.\nAnda com segurança, corre, sobe e desce degraus com apoio. Vocaliza frases curtas, reconhece objetos e partes do corpo.\nParticipa das refeições, usa talheres com supervisão. ${alimFrase()}\nSono noturno regular, com uma soneca diurna. Sem doenças significativas recentes.`,
      o: ["Estado geral: ativa, interativa, coloração e hidratação normais, perfusão preservada.", "Cabeça: simétrica, sem fontanelas palpáveis.", "Olhos/audição: seguimento visual bom, responde a ordens simples.", "Boca: dentição temporária presente, higiene oral __.", "Respiratório/cardíaco: ausculta normal, sem ruídos adventícios ou sopros.", "Abdome: flácido, indolor, sem massas.", "Geniturinário: sem alterações.", "Locomoção: marcha estável, corre, sobe/desce degraus com apoio, manipula objetos finos.", "Neurológico/desenvolvimento: frases simples, boa imitação, autonomia crescente.", "Pele/mucosas: íntegras."],
      alim: ["Participação nas refeições da família; talheres e copo", "Respeitar fome e saciedade", "Evitar açúcar, sal em excesso e ultraprocessados"],
      est: ["Histórias, empilhar, quebra-cabeças simples, música", "Contar as ações do dia, nomear objetos", "Jogos simbólicos e atividades manuais", "Socialização com outras crianças"],
      acid: ["Proteção em escadas, varandas, tomadas e objetos pontiagudos", "Atenção a engasgo, produtos tóxicos e objetos pequenos", "Brinquedos adequados à idade"],
      p: ["Reforço alimentação saudável, sono adequado e rotina estável", "Oriento estímulo à linguagem, autonomia, socialização e limites", "Estimulo leitura, brincadeiras motoras e tempo ao ar livre", "Atualizo a caderneta da criança"]},
    36: {nome: "3 ANOS", item: "pu-3a5a", faixa: "3 anos",
      s: () => `A criança vem acompanhada ${acomp()} para avaliação de rotina aos 3 anos de idade.\nOs cuidadores relatam que ela está bem, ativa, com fala mais clara, melhor mobilidade e autonomia crescente nas atividades diárias. Usa copo e talheres e participa das refeições familiares.\nSono razoavelmente regular, com ou sem soneca diurna. Sem queixas significativas de doenças recentes.`,
      o: ["Estado geral: criança alerta, responsiva, em bom estado de hidratação e nutrição; interagindo com o examinador.", "Olhos/audição: fixação e seguimento ocular, resposta sonora adequados.", "Boca/dentes: dentição decídua __; higiene bucal __.", "Respiratório: murmúrio vesicular, sem ruídos adventícios.", "Cardiovascular: bulhas normofonéticas, sem sopros, pulsos palpáveis.", "Abdome: flácido, indolor, sem massas ou visceromegalias.", "Geniturinário: genitália externa íntegra.", "Motricidade grossa: corre, pula com os dois pés, sobe escadas.", "Motricidade fina: manipula objetos pequenos, empilha blocos.", "Linguagem e cognição: frases simples, nomeia objetos comuns, responde a comandos.", "Pele/mucosas: íntegras."],
      alim: ["Participação plena nas refeições da família", "Variedade de alimentos e texturas", "Evitar açúcar, bebidas adoçadas e ultraprocessados"],
      est: ["Leitura, música e conversas", "Jogos de encaixe e de combinar", "Autonomia para vestir-se e comer", "Limitar telas; brincadeiras ao ar livre"],
      acid: ["Supervisão constante; proteção de quinas, janelas e grades", "Objetos pequenos e produtos tóxicos fora do alcance", "Prevenção de queimaduras"],
      p: ["Reforço alimentação saudável, rotina estável e sono adequado", "Oriento estímulo da linguagem, autonomia e convivência social", "Mantenho acompanhamento do crescimento e do comportamento", "Atualizo a caderneta da criança"]},
    48: {nome: "4 ANOS", item: "pu-3a5a", faixa: "4 anos",
      s: () => `A criança comparece acompanhada ${acomp()} para avaliação de rotina aos 4 anos. Relatam que está ativa, comunicativa e autônoma em diversas tarefas (vestir-se com ajuda leve, usar talheres, escovar os dentes sob supervisão, brincar com outras crianças).\nAlimentação satisfatória, participa das refeições da família.\nSono regular; soneca breve ou ausente. Sem doenças recentes com impacto no desenvolvimento.`,
      o: ["Estado geral: criança alerta, ativa, interativa, bem hidratada, coloração e perfusão adequadas.", "Olhos/visão: acompanhamento visual normal; acuidade visual __.", "Ouvidos/audição: responde a comandos verbais e estímulos sonoros.", "Boca/dentes: dentição decídua completa ou quase completa, higiene __.", "Nariz/vias aéreas: permeáveis.", "Respiratório/cardíaco: exame normal, sem ruídos adventícios ou sopros.", "Abdome: flácido, indolor, sem massas.", "Geniturinário: sem alterações.", "Mobilidade: marcha firme, corre, pula, sobe e desce degraus.", "Motricidade fina: desenha formas simples (círculo, cruz).", "Linguagem/cognição/comportamento: frases completas, reconhece cores, contagem simples.", "Pele/mucosas: íntegras."],
      alim: ["Participação plena nas refeições familiares", "Consumo variado; autonomia com supervisão", "Evitar ultraprocessados, doces e bebidas adoçadas"],
      est: ["Leitura e contação de histórias", "Faz de conta, quebra-cabeças, pintura, massinha", "Jogos motores: correr, pular, equilíbrio", "Socialização na pré-escola; limitar telas"],
      acid: ["Proteção em escadas, quinas, portas e janelas", "Bicicleta e patinete com capacete", "Riscos em parques, piscinas e trânsito"],
      p: ["Reforço orientações sobre rotina alimentar, sono e controle esfincteriano", "Estimulo brincadeiras educativas e interação com outras crianças", "Oriento sobre linguagem, regras sociais e limites", "Atualizo a caderneta da criança"]},
    60: {nome: "5 ANOS", item: "pu-3a5a", faixa: "5 anos",
      s: () => `A criança vem acompanhada ${acomp()} para avaliação de rotina aos 5 anos. Anda com segurança, corre, salta, participa de brincadeiras coletivas, fala frases completas, conta histórias simples, reconhece letras e números básicos e interage bem.\nAlimentação variada; participa das refeições familiares e tem autonomia em tarefas como vestir-se. Sem queixas de doenças recentes ou dificuldades de aprendizado.\nSono regular, com bom repouso noturno.`,
      o: ["Estado geral: criança alerta, ativa, bem hidratada, coloração e perfusão adequadas; interage com o examinador.", "Olhos/visão: sem estrabismo, alinhamento ocular normal; acuidade visual __.", "Ouvidos/audição: responde a comandos verbais e ruídos.", "Boca/dentes: dentes decíduos, higiene __, sem cáries visíveis.", "Respiratório/cardíaco: ausculta normal, sem ruídos adventícios ou sopros.", "Abdome: flácido, indolor, sem massas.", "Geniturinário: genitália externa íntegra.", "Motricidade grossa: corre, salta em um pé, sobe e desce escadas alternando os pés.", "Motricidade fina: recorta com tesoura sem ponta, desenha formas simples.", "Linguagem/cognição: frases completas, conta pequenas histórias, noções de tempo, cores, formas e números.", "Pele/mucosas: íntegras."],
      alim: ["Dieta diversificada com todos os grupos alimentares", "Autoalimentação com supervisão", "Evitar açúcar em excesso e ultraprocessados"],
      est: ["Leitura, diálogo e perguntas", "Jogos educativos, atividades manuais e artísticas", "Brincadeiras motoras e coletivas", "Limitar telas"],
      acid: ["Supervisão nas brincadeiras e deslocamentos", "Capacete, cinto e cadeirinha/assento de elevação", "Prevenção de quedas, queimaduras e intoxicações"],
      p: ["Reforço hábitos de vida saudáveis (alimentação, sono, rotina)", "Oriento estímulo ao aprendizado e participação escolar", "Estimulo autonomia e autoestima; oriento limites com afeto", "Atualizo a caderneta da criança"]}
  };
  const ALIM = [["ame", "Aleitamento materno exclusivo"], ["misto", "Aleitamento materno + fórmula"], ["formula", "Fórmula infantil"], ["lv", "Leite de vaca (com ou sem peito)"], ["amc", "Aleitamento materno + alimentação complementar"], ["comp", "Alimentação complementar, sem aleitamento"], ["fam", "Alimentação da família"]];
  function alimFrase(curta){
    const a = S.alim || "ame";
    const mama = "com boa pega e sucção efetiva";
    if (a === "ame") return `Em aleitamento materno exclusivo em livre demanda, ${mama}. Nega dificuldades na amamentação.`;
    if (a === "misto") return `Em aleitamento materno complementado com fórmula infantil${S.motfor ? " (" + S.motfor + ")" : ""}.`;
    if (a === "formula") return `Em uso exclusivo de fórmula infantil${S.motfor ? " (" + S.motfor + ")" : ""}.`;
    if (a === "lv") return `Recebe leite de vaca${S.motfor ? " (" + S.motfor + ")" : ""}.`;
    if (a === "amc") return "Aleitamento materno mantido, associado à alimentação complementar.";
    if (a === "comp") return `Em alimentação complementar, sem aleitamento materno${S.motfor ? " (" + S.motfor + ")" : ""}.`;
    return "Alimentação da família, com participação nas refeições.";
  }
  const ALARM = [["a_febre", "Febre"], ["a_recusa", "Recusa alimentar"], ["a_vom", "Vômitos persistentes"], ["a_letar", "Hipoatividade ou letargia"], ["a_resp", "Desconforto respiratório"], ["a_conv", "Convulsão ou espasmos"], ["a_cian", "Cianose"], ["a_ict", "Icterícia"], ["a_diar", "Diarreia com desidratação"], ["a_peso", "Perda de peso"]];
  const TRI = [["t_pez", "Teste do pezinho"], ["t_ore", "Teste da orelhinha"], ["t_olh", "Teste do olhinho (reflexo vermelho)"], ["t_cor", "Teste do coraçãozinho"], ["t_lin", "Teste da linguinha"]];
  const TRIOPT = [["", "não informado"], ["ok", "realizado – normal"], ["ag", "realizado – aguarda resultado"], ["alt", "alterado"], ["nao", "não realizado"]];
  const USO = [["u_vitd", "Vitamina D"], ["u_fe", "Sulfato ferroso"], ["u_vita", "Vitamina A"]];

  const sel = (k, l, o) => `<label class="f">${esc(l)}<select data-w="${k}">${o.map(([v, t]) => `<option value="${v}">${esc(t)}</option>`).join("")}</select></label>`;
  const num = (k, l, o = {}) => `<label class="f">${esc(l)}<input data-w="${k}" type="number" inputmode="decimal" step="${o.step || "any"}" placeholder="${esc(o.ph || "")}"></label>`;
  const txt = (k, l, ph = "") => `<label class="f">${esc(l)}<input data-w="${k}" type="text" placeholder="${esc(ph)}"></label>`;
  const box = (k, l) => `<label class="pw-ck"><input type="checkbox" data-w="${k}"><span>${esc(l)}</span></label>`;

  function html(){
    return `<div class="pnw" id="puw">
  <div class="pw-form">
    <p class="hint" style="margin:0 0 10px">Comece pela data de nascimento. Os campos aparecem conforme a idade e a evolução sai no seu modelo. <b>Nada é salvo</b>.</p>
    <fieldset class="pw-sec"><legend>1. Criança</legend>
      <div class="pw-row">
        <label class="f">Data de nascimento<input data-w="dn" type="date"></label>
        ${sel("sexo", "Sexo", [["", "—"], ["m", "masculino"], ["f", "feminino"]])}
        ${sel("acomp", "Acompanhante", [["mae", "mãe"], ["pai", "pai"], ["maes", "mãe e pai"], ["avo", "avó"], ["outro", "outro"]])}
        <div data-vis="acompt">${txt("acompt", "Quem acompanha")}</div>
        ${num("ign", "IG ao nascer (sem)", {step: 1, ph: "ex.: 39"})}
        ${num("pn", "Peso ao nascer (g)", {step: 10})}
      </div>
      <p class="pw-ig" id="pu-idade"></p>
      <div data-vis="rn" class="pw-row" style="margin-top:6px">
        ${txt("parto", "Tipo de parto", "vaginal / cesárea / induzido")}${txt("dparto", "Data do parto")}${txt("apgar", "APGAR", "9/10")}
        ${num("cn", "Comprimento ao nascer (cm)", {step: "0.5"})}${num("pcn", "PC ao nascer (cm)", {step: "0.5"})}${txt("alta", "Alta / intercorrências", "sem intercorrências")}
      </div>
    </fieldset>
    <div data-vis="ok">
    <fieldset class="pw-sec"><legend>2. Hoje</legend>
      <div class="pw-row">
        ${num("peso", "Peso (g)", {step: 5})}${num("comp", "Comprimento/estatura (cm)", {step: "0.1"})}${num("pc", "PC (cm)", {step: "0.1"})}${num("pt", "PT (cm)", {step: "0.1"})}
        ${num("tax", "Temperatura (°C)", {step: "0.1"})}${num("fc", "FC (bpm)", {step: 1})}${num("fr", "FR (irpm)", {step: 1})}
        <div data-vis="font">${num("font", "Fontanela anterior (polpas)", {step: "0.5"})}</div>
        <div data-vis="m4">${sel("orto", "Ortolani/Barlow", [["", "não informado"], ["n", "negativos"], ["alt", "alterado"]])}</div>
        <div data-vis="m36">${txt("pa", "PA (a partir de 3 anos)", "100x60")}</div>
      </div>
      <div class="pw-row" style="margin-top:6px">${num("pant", "Peso na última consulta (g)", {step: 5})}<label class="f">Data da última consulta<input data-w="dant" type="date"></label></div>
      <details class="pw-det"><summary>Sinais de alerta referidos ou observados</summary><div class="pw-grid">${ALARM.map(([k, l]) => box(k, l)).join("")}</div></details>
    </fieldset>
    <fieldset class="pw-sec"><legend>3. Alimentação e suplementos</legend>
      <div class="pw-row">${sel("alim", "Alimentação", ALIM)}${txt("motfor", "Motivo (se não exclusivo)")}</div>
      <div class="pw-grid" style="margin-top:6px">${box("bico", "Usa mamadeira ou chupeta")}${USO.map(([k, l]) => box(k, l)).join("")}</div>
    </fieldset>
    <div data-vis="m6t"><fieldset class="pw-sec"><legend>4. Triagens neonatais</legend><div class="pw-row pw-ex">${TRI.map(([k, l]) => sel(k, l, TRIOPT)).join("")}</div></fieldset></div>
    <fieldset class="pw-sec"><legend>5. Desenvolvimento (Caderneta)</legend>
      <p class="hint" style="margin:0 0 6px">Marque só o que está <b>ausente</b>.</p>
      <div class="pw-grid" id="pu-marcos"></div>
      <div class="pw-grid" style="margin-top:6px">${box("m_ant", "Ausência de marco da faixa anterior")}${box("m_feno", "PC alterado ou 3+ alterações fenotípicas")}</div>
      <div data-vis="mchat" class="pw-row" style="margin-top:6px">${num("mchat", "M-CHAT-R (pontos)", {step: 1})}</div>
    </fieldset>
    <fieldset class="pw-sec"><legend>6. Vacinas</legend>
      <div class="pw-grid">${box("v_ok", "Caderneta de vacinação em dia (incluindo as desta idade)")}</div>
      <div class="pw-row" style="margin-top:6px">${txt("v_pend", "Pendências", "ex.: rotavírus 2")}</div>
    </fieldset>
    </div>
    <div class="actions" style="margin-top:6px"><button type="button" class="btn ghost sm" id="pu-reset">Limpar tudo</button></div>
    <div class="pw-jump" data-vis="ok"><button type="button" class="btn pri" id="pu-jump">Ver plano e evolução ↓</button></div>
  </div>
  <div class="pw-out" id="pu-out" aria-live="polite"></div>
</div>`;
  }

  const rd = root => { const o = {}; root.querySelectorAll("[data-w]").forEach(el => { o[el.dataset.w] = el.type === "checkbox" ? el.checked : el.value.trim(); }); return o; };
  function chave(dias){
    const m = dias / 30.4375;
    if (dias < 28) return "rn"; if (m < 1.5) return 1; if (m < 3) return 2; if (m < 5) return 4; if (m < 7.5) return 6; if (m < 10.5) return 9; if (m < 13.5) return 12; if (m < 16.5) return 15; if (m < 21) return 18; if (m < 30) return 24; if (m < 42) return 36; if (m < 54) return 48; return 60;
  }
  function marcos(k){
    const t = T[k]; if (!t || !t.item || k === "rn") return [];
    const c = (typeof get === "function") ? get(t.item) : null; if (!c || !c.roteiro) return [];
    const g = c.roteiro.find(x => /Marcos esperados/.test(x.g)); if (!g) return [];
    if (t.faixa){ const lin = g.i.find(x => x.startsWith(t.faixa)); return lin ? lin.replace(/^[^:]+:\s*/, "").split(/,\s*/) : []; }
    return g.i;
  }
  function vacinasIdade(dn, ref){
    if (typeof VAC === "undefined") return {agora: [], prox: null};
    const cdt = m => typeof m === "object" ? dn + m.d * DIA : addMeses(dn, m);
    const cd = typeof CONS === "undefined" ? [] : CONS.map(([m]) => cdt(m));
    let i = 0; cd.forEach((d, j) => { if (Math.abs(d - ref) < Math.abs(cd[i] - ref)) i = j; });
    const desde = i > 0 ? cd[i - 1] : dn - DIA;
    const agora = VAC.filter(([m]) => addMeses(dn, m) > desde && addMeses(dn, m) <= ref + 14 * DIA).map(([, r, v]) => `${r}: ${v}`);
    const prox = VAC.find(([m]) => addMeses(dn, m) > ref);
    return {agora, prox: prox ? `${prox[1]} (${fd(addMeses(dn, prox[0]))}): ${prox[2]}` : null};
  }
  function proxConsulta(dn, ref){
    if (typeof CONS === "undefined") return "";
    const cdt = m => typeof m === "object" ? dn + m.d * DIA : addMeses(dn, m);
    const p = CONS.find(([m]) => cdt(m) > ref + 7 * DIA);
    return p ? `${p[1]} (${fd(cdt(p[0]))})` : "anual";
  }
  function plano(){
    const dn = pd(S.dn); const ref = hoje(); const dias = Math.round((ref - dn) / DIA); const m = dias / 30.4375;
    const k = chave(dias); const t = T[k];
    const ign = N(S.ign), pn = N(S.pn), peso = N(S.peso), pant = N(S.pant);
    const prem = ok(ign) && ign < 37, baixo = ok(pn) && pn < 2500;
    const out = {urg: [], fazer: [], rx: [], orient: [], achados: [], A: [], P: []};
    const C = k2 => !!S[k2];
    // alarmes
    ALARM.forEach(([a, l]) => { if (C(a)) out.urg.push(it(l + (a === "a_febre" && m < 3 ? " em menor de 3 meses: avaliação no mesmo dia/urgência pediátrica" : ": avaliar hoje; sinais de gravidade → urgência pediátrica"), "Caderneta", a === "a_febre" && m < 3 ? "febre-menor-3m" : null)); });
    // crescimento
    if (ok(peso) && ok(pn) && dias <= 21){ const v = (peso - pn) / pn * 100; out.achados.push(`variação de peso desde o nascimento ${v.toFixed(1).replace(".", ",")}%`); if (v <= -10) out.urg.push(it(`Perda de ${Math.abs(v).toFixed(1).replace(".", ",")}% do peso de nascimento (≥ 10%): avaliar mamada e hidratação hoje; retorno em 48 h`, "C")); else if (dias >= 14 && peso < pn) out.fazer.push(it("Não recuperou o peso de nascimento até 14 dias: avaliar mamada e retorno em 1 semana", "C")); }
    if (ok(peso) && ok(pant) && S.dant){ const d = Math.round((ref - pd(S.dant)) / DIA); if (d > 0){ const g = (peso - pant) / d; out.achados.push(`ganho de ${Math.round(g)} g/dia desde a última consulta`); if (m < 4 && g < 20) out.fazer.push(it(`Ganho de ${Math.round(g)} g/dia (< 20 g/dia no 1º trimestre): reavaliar alimentação e curva`, "C")); } }
    out.fazer.push(it("Registrar peso, comprimento e PC nas curvas da Caderneta (escore-z)", "Caderneta"));
    if (S.orto === "alt") out.fazer.push(it("Ortolani/Barlow alterado: USG de quadril e ortopedia com prioridade", "C"));
    // triagens
    if (m < 6){ TRI.forEach(([kk, l]) => { if (S[kk] === "alt") out.fazer.push(it(`${l} alterado: seguir o fluxo do serviço de referência`, "Caderneta", "pu-triagens")); if (S[kk] === "nao") out.fazer.push(it(kk === "t_pez" && dias > 30 ? "Pezinho não coletado e > 30 dias: biotinidase + teste do suor no Nupad e triagem tardia pela Direg (Memorando 1098/2026)" : `${l} não realizado: providenciar`, "Betim", "pu-triagens")); }); if (!S.t_pez && dias > 5) out.fazer.push(it("Conferir coleta e resultado do teste do pezinho na Caderneta", "Betim", "pu-triagens")); }
    // desenvolvimento
    const mk = marcos(k); const aus = mk.filter((x, i) => C("mk_" + i));
    let dnpm = "DNPM compatível com a idade";
    if (C("m_ant") || C("m_feno")){ dnpm = "Provável atraso do desenvolvimento"; out.fazer.push(it("Provável atraso: encaminhar para avaliação (pediatria/neuropediatria e reabilitação) e estimular", "Caderneta", "pu-dnpm")); }
    else if (aus.length){ dnpm = "Alerta para o desenvolvimento (marco ausente: " + aus.join("; ") + ")"; out.fazer.push(it("Alerta para o desenvolvimento: orientar estímulos e reavaliar em 30 dias", "Caderneta", "pu-dnpm")); }
    const mc = N(S.mchat);
    if ((k === 18 || k === 24) && !ok(mc)) out.fazer.push(it("Aplicar M-CHAT-R/F (18 e 24 meses)", "SBP", "pu-dnpm"));
    if (ok(mc)){ if (mc >= 8) out.fazer.push(it(`M-CHAT-R ${mc}: alto risco – encaminhar direto para avaliação diagnóstica e intervenção`, "SBP", "pu-dnpm")); else if (mc >= 3) out.fazer.push(it(`M-CHAT-R ${mc}: aplicar a entrevista de seguimento (≥ 2 itens = positivo)`, "SBP", "pu-dnpm")); }
    // vacinas
    const V = vacinasIdade(dn, ref);
    // suplementos
    const vitd = m < 12 ? "Vitamina D 400 UI/dia até 12 meses" : m < 24 ? "Vitamina D 600 UI/dia (12–24 meses)" : null;
    let fer = null;
    if (prem || baixo){ const mg = !ok(pn) ? "2–4" : pn < 1000 ? "4" : pn < 1500 ? "3" : "2"; if (dias >= 30 && m < 12) fer = `Sulfato ferroso ${mg} mg/kg/dia de ferro elementar (prematuro/baixo peso) até 12 meses; depois 1 mg/kg/dia até 24 meses`; else if (m >= 12 && m < 24) fer = "Sulfato ferroso 1 mg/kg/dia de ferro elementar até 24 meses (prematuro/baixo peso)"; else if (dias < 30) fer = `Ferro a partir de 30 dias: ${mg} mg/kg/dia (prematuro/baixo peso)`; }
    else if ((m >= 6 && m < 9) || (m >= 12 && m < 15)) fer = `Sulfato ferroso 25 mg/mL: 0,4–0,5 mL/dia (10–12,5 mg de ferro elementar), ${m < 9 ? "1º ciclo (6 aos 9 meses)" : "2º ciclo (12 aos 15 meses)"}`;
    else if (m >= 4 && m < 6 && S.alim === "lv") fer = "Sulfato ferroso 25 mg/mL: 0,4–0,5 mL/dia (10–12,5 mg) a partir de 4 meses, por receber leite de vaca (fórmula infantil já contém ferro)";
    if (vitd) out.rx.push(it(vitd + (C("u_vitd") ? " – mantida" : m < 12 ? " – prescrever (D3 isolada é comprada; a REMUME tem polivitamínico A+D)" : " – prescrever (D3, comprada)"), "SBP 2024"));
    if (fer) out.rx.push(it(fer + (C("u_fe") ? " – em uso" : ""), "PNSF/SBP 2026", "pu-suplementacao"));
    else if (C("u_fe")) out.rx.push(it("Sulfato ferroso em uso fora da janela de profilaxia: conferir indicação (tratamento?)", "I", "pu-suplementacao"));
    // alimentação
    if (m < 6 && S.alim && S.alim !== "ame") out.orient.push(it("Apoiar a relactação/aumento do aleitamento se a mãe desejar; se precisar de outro leite, fórmula infantil adequada à idade", "Guia Alimentar", "pu-alimentacao"));
    if (m < 12 && S.alim === "lv") out.orient.push(it("Leite de vaca integral não é recomendado antes de 12 meses (anemia, sobrecarga renal): orientar fórmula infantil ou diluição e preparo corretos se for a única opção", "Guia Alimentar", "pu-alimentacao"));
    if (m >= 5.5 && m < 7.5) out.orient.push(it("Introdução alimentar: comida da família amassada, sem açúcar ou mel, pouco sal; água entre as refeições", "Guia Alimentar", "pu-alimentacao"));
    if (C("bico")) out.orient.push(it("Desestimular mamadeira e chupeta (interferem no aleitamento e na fala)", "Caderneta"));
    if (m >= 6) out.orient.push(it("Escovação desde o 1º dente com creme dental com flúor (≥ 1.000 ppm), quantidade de grão de arroz cru até 3 anos", "C"));
    if (m >= 36) out.fazer.push(it("PA anual e acuidade visual a partir de 3 anos; IMC/idade nas curvas", "Caderneta"));
    // A
    const alimA = {ame: "Amamentação exclusiva mantida", misto: "Aleitamento materno com fórmula", formula: "Em uso de fórmula", amc: "Aleitamento materno mantido com alimentação complementar", comp: "Alimentação complementar sem aleitamento", fam: "Alimentação adequada"}[S.alim || (m < 6 ? "ame" : "fam")];
    out.A.push(out.urg.length ? "Criança com sinal de alerta – ver plano" : "Criança em bom estado geral", dnpm, alimA, C("v_ok") ? "Esquema vacinal atualizado" : (S.v_pend ? "Vacinas pendentes: " + S.v_pend : "Situação vacinal a conferir"));
    if (m < 24) out.A.push(C("u_vitd") || !vitd ? "Suplementação adequada" : "Suplementação a ajustar");
    if (!out.urg.length) out.A.push("Sem intercorrências clínicas");
    return {k, t, m, dias, prem, pb: prem || baixo, out, V, prox: proxConsulta(dn, ref), mk};
  }

  const li = x => `<li>${esc(x.t)}${x.src ? ` <span class="pw-src">${esc(x.src)}</span>` : ""}${x.link ? ` <button type="button" class="golink pw-go" data-id="${esc(x.link)}">ver →</button>` : ""}</li>`;
  const bloco = (t, arr, cls) => arr.length ? `<div class="pw-b ${cls || ""}"><h4>${esc(t)}</h4><ul>${arr.map(li).join("")}</ul></div>` : "";
  const v = (x, u) => S[x] ? S[x] + (u ? " " + u : "") : "______" + (u ? " " + u : "");

  function evolucao(R){
    const {k, t, m, out, V, prox} = R;
    const L = [];
    L.push(`## PUERICULTURA – ${t.nome} ##`, ...(R.prem && m < 24 ? [`Prematuro de ${S.ign} semanas – usar idade corrigida até 2 anos`] : []), "");
    L.push("Subjetivo (S)", t.s());
    const usos = USO.filter(([kk]) => S[kk]).map(([, l]) => l.toLowerCase());
    const alarmes = ALARM.filter(([kk]) => S[kk]).map(([, l]) => l.toLowerCase());
    L.push(alarmes.length ? `Refere: ${alarmes.join(", ")}.` : "Nega febre, tosse, coriza, diarreia ou outras queixas.");
    if (S.bico) L.push("Faz uso de mamadeira/chupeta.");
    L.push(usos.length ? `Em uso de: ${usos.join(", ")}.` : "Sem suplementos em uso.", "-----");
    if (m < 6){
      const st = kk => ({ok: "realizado – normal", ag: "realizado – aguarda resultado", alt: "ALTERADO", nao: "não realizado"}[S[kk]] || "( ) Realizado – Resultado: ______");
      L.push("Triagens Neonatais", ...TRI.map(([kk, l]) => `- ${l}: ${st(kk)}`), "-----");
    }
    if (k === "rn"){
      L.push("# INFORMAÇÕES DO NASCIMENTO:", `Data do parto: ${S.dparto || ""}`, `IG ao parto: ${S.ign ? S.ign + " semanas" : ""}`, `Tipo de parto: ${S.parto || ""}`, `APGAR: ${S.apgar || ""}`,
        `Peso ao nascer: ${S.pn || "____"} g | Altura ao nascer: ${S.cn || "____"} cm | PC ao nascer: ${S.pcn || "____"} cm`, `${S.alta || "Alta sem intercorrências"}`, "-----");
    }
    L.push("Objetivo (O)", "Antropometria e sinais vitais", `Peso: ${v("peso", "g")} Comprimento: ${v("comp", "cm")} PC: ${v("pc", "cm")} PT: ${v("pt", "cm")}`, `Temperatura: ${v("tax", "ºC")} FC: ${v("fc", "bpm")} FR: ${v("fr", "irpm")}${S.pa ? " PA: " + S.pa + " mmHg" : ""}`);
    if (out.achados.length) L.push(out.achados.join("; ") + ".");
    L.push(".");
    const font = S.font ? S.font : "__";
    t.o.forEach(x => L.push(x.replace("__ polpas", font + " polpas").replace("(__ polpas", "(" + font + " polpas")));
    if (m < 4) L.push(`Manobras de Ortolani e Barlow: ${S.orto === "alt" ? "ALTERADAS" : S.orto === "n" ? "negativas" : "( ) Normal ( ) Alterado"}`);
    if (R.mk.length){ const aus = R.mk.filter((x, i) => S["mk_" + i]); L.push(`Desenvolvimento neuropsicomotor (Caderneta): ${aus.length ? "ausente(s): " + aus.join("; ") + ". Presentes: " + R.mk.filter((x, i) => !S["mk_" + i]).join("; ") : "marcos da faixa presentes – " + R.mk.join("; ")}.`); }
    if (ok(N(S.mchat))) L.push(`M-CHAT-R: ${S.mchat} pontos.`);
    L.push("-----");
    if (t.alim){ L.push("Alimentação", ...t.alim.map(x => "- " + x), "-----"); }
    L.push("Imunização", ...(V.agora.length ? V.agora.map(x => "- " + x + " (PNI 2026)") : ["- Sem vacina prevista para esta idade: conferir a caderneta"]), `- Caderneta: ${S.v_ok ? "em dia" : S.v_pend ? "pendências – " + S.v_pend : "conferir"}`, ...(V.prox ? ["- Próximas: " + V.prox] : []), "-----");
    const sup = out.rx.map(x => "- " + x.t);
    L.push("Suplementações", ...(sup.length ? sup : ["- Sem suplementação de rotina nesta idade; avaliar conforme dieta e exposição solar"]), "-----");
    L.push("Estímulos recomendados", ...t.est.map(x => "- " + x), "-----", "Prevenção de acidentes", ...t.acid.map(x => "- " + x), "-----");
    L.push("Avaliação (A)", ...out.A.map(x => "- " + x), "-----");
    L.push("Plano (P)");
    [...out.urg, ...out.fazer].forEach(x => L.push("- " + x.t));
    t.p.forEach(x => L.push("- " + x));
    if (V.agora.length && !S.v_ok) L.push("- Encaminho para vacinação conforme PNI; oriento reações vacinais comuns");
    out.rx.forEach(x => L.push("- " + x.t));
    out.orient.forEach(x => L.push("- " + x.t));
    L.push("- Oriento sinais de alarme: febre, recusa alimentar, vômitos, letargia, desconforto respiratório", "- Dúvidas dos responsáveis esclarecidas.", "", `- Agendo a próxima consulta de puericultura: ${prox}`);
    return L.join("\n");
  }
  function receita(R){
    const {m, out} = R; const L = ["USO ORAL"]; let n = 0;
    const fe = out.rx.find(x => /^Sulfato ferroso|^Ferro/.test(x.t));
    if (fe && R.pb) L.push(`${++n}. Sulfato ferroso 25 mg/mL de ferro elementar ______ 1 frasco`, `   Dar ___ mL (___ mg/kg/dia) 1 vez ao dia${m < 12 ? " até 12 meses; depois 1 mg/kg/dia até 24 meses" : " até 24 meses"}. Calcular pelo peso atual.`);
    else if (fe) L.push(`${++n}. Sulfato ferroso 25 mg/mL de ferro elementar ______ 1 frasco`, "   Dar 0,5 mL (12,5 mg) 1 vez ao dia, 30 minutos antes de uma refeição (não precisa suspender o peito), por 3 meses.");
    if (m < 24) L.push(`${++n}. Colecalciferol (vitamina D3) gotas ______ 1 frasco`, `   Dar ___ gota(s) (= ${m < 12 ? "400" : "600"} UI) 1 vez ao dia. Conferir as UI por gota da apresentação.`);
    if (m < 12) L.push("", "Opção da REMUME (não precisa comprar):", `${n + 1}. Polivitamínico gotas (vitamina A 3.000 UI + vitamina D2 900 UI por mL) ______ 1 frasco`, "   Dar 0,45 mL 1 vez ao dia (≈ 400 UI de vitamina D2). [dose: conferir na bula]");
    return n ? L.join("\n") : "Sem prescrição de rotina para esta idade.";
  }
  function render(root){
    S = rd(root);
    const dn = pd(S.dn); const ref = hoje(); const okDn = dn != null && ref >= dn && ref - dn < 6 * 366 * DIA;
    const dias = okDn ? Math.round((ref - dn) / DIA) : NaN; const m = dias / 30.4375;
    const vis = {ok: okDn, rn: okDn && dias < 28, acompt: S.acomp === "outro", font: m < 24, m4: m < 4, m36: m >= 36, m6t: m < 6, mchat: m >= 16 && m <= 30};
    root.querySelectorAll("[data-vis]").forEach(el => { el.hidden = !vis[el.dataset.vis]; });
    const id = root.querySelector("#pu-idade"), O = root.querySelector("#pu-out");
    if (!okDn){ id.textContent = ""; O.innerHTML = `<div class="pw-empty"><b>Informe a data de nascimento</b> para montar a consulta.</div>`; return; }
    const k = chave(dias);
    const mkBox = root.querySelector("#pu-marcos");
    if (mkBox.dataset.k !== String(k)){ const mk = marcos(k); mkBox.dataset.k = String(k); mkBox.innerHTML = mk.length ? mk.map((x, i) => box("mk_" + i, x)).join("") : `<p class="hint" style="margin:0">${k === "rn" ? "No RN, avalie reflexos primitivos e tônus no exame." : "Use os marcos desta idade na Caderneta da Criança."}</p>`; root.querySelectorAll('[data-w^="mk_"]').forEach(el => { el.checked = !!S[el.dataset.w]; }); S = rd(root); }
    id.innerHTML = `<b>${idadeCal(dn, ref)}</b> · modelo: ${T[k].nome.toLowerCase()}`;
    const R = plano();
    O.innerHTML = `<div class="pw-head"><span>Consulta de <b>${esc(T[k].nome.toLowerCase())}</b></span><span>Próxima: <b>${esc(R.prox)}</b></span></div>
      ${R.out.urg.length ? `<div class="pw-b urg"><h4>Agora</h4><ul>${R.out.urg.map(li).join("")}</ul></div>` : ""}
      ${bloco("Fazer nesta consulta", R.out.fazer)}
      ${bloco("Vacinas para conferir (PNI 2026)", R.V.agora.map(x => it(x, "PNI")).concat(R.V.prox ? [it("Próximas: " + R.V.prox)] : []))}
      ${bloco("Suplementação", R.out.rx)}
      ${bloco("Orientar", R.out.orient)}
      <div class="pw-b"><h4>Evolução</h4><textarea class="fill mono pw-ta" id="pu-evo" aria-label="Evolução gerada">${esc(evolucao(R))}</textarea>
      <div class="actions" style="margin-top:8px"><button type="button" class="btn pri sm" id="pu-cp">Copiar evolução</button></div>
      <p class="hint" style="margin:6px 0 0">No seu modelo do Notion. Exame físico vem como padrão normal: corrija o que estiver diferente antes de copiar.</p></div>
      <div class="pw-b"><h4>Receita</h4><textarea class="fill mono pw-ta" id="pu-rec" aria-label="Receita gerada">${esc(receita(R))}</textarea>
      <div class="actions" style="margin-top:8px"><button type="button" class="btn sm" id="pu-cprec">Copiar receita</button></div></div>
      <p class="hint">Fontes: Caderneta da Criança 2025 (consultas e marcos), Calendário Nacional de Vacinação 2026, PNSF 2022 e SBP 2026 (ferro), SBP 2024 (vitamina D), Memorando DAPS 1098/2026 (triagem tardia). Vacinas e suplementos vêm das regras do app, não do texto antigo do modelo.</p>`;
    O.querySelectorAll(".pw-ta").forEach(grow);
  }
  function init(root){
    const box = root.querySelector("#puw"); if (!box) return;
    box.querySelectorAll("[data-w]").forEach(el => { const val = S[el.dataset.w]; if (val === undefined) return; if (el.type === "checkbox") el.checked = !!val; else el.value = val; });
    box.addEventListener("input", ev => { if (!ev.target.classList.contains("pw-ta")) render(box); });
    box.addEventListener("change", ev => { if (!ev.target.classList.contains("pw-ta")) render(box); });
    box.addEventListener("click", ev => { const t = ev.target.closest("button"); if (!t) return;
      if (t.id === "pu-cp") copy(box.querySelector("#pu-evo").value, "Evolução");
      if (t.id === "pu-cprec") copy(box.querySelector("#pu-rec").value, "Receita");
      if (t.id === "pu-jump"){ const o = box.querySelector("#pu-out"); if (o && o.scrollIntoView) o.scrollIntoView({behavior: "smooth", block: "start"}); }
      if (t.id === "pu-reset"){ S = {}; box.querySelectorAll("[data-w]").forEach(el => { if (el.type === "checkbox") el.checked = false; else el.value = el.tagName === "SELECT" ? el.options[0].value : ""; }); box.querySelector("#pu-marcos").dataset.k = ""; render(box); } });
    render(box);
  }
  return {html, init};
})();
