// ───────────── data54.js – v44: puericultura, lote 2 (introdução alimentar ampliada, dentição e saúde bucal,
// reações às vacinas, prevenção de acidentes por idade). Conteúdo conferido em 20/10/2026.
Object.assign(FONTES, {
  esavi2020: {s: "MS 2020 – Manual de eventos adversos pós-vacinação (4ª ed.)", t: "Ministério da Saúde/SVS. Manual de Vigilância Epidemiológica de Eventos Adversos Pós-Vacinação, 4ª edição, 2020: evolução da lesão da BCG (6 a 12 semanas; linfonodo axilar até 3 cm sem supuração em até 10%); úlcera > 1 cm sem cicatrização, abscesso frio, granuloma e linfonodo supurado → notificar e isoniazida 10 mg/kg/dia (máx. 400 mg) até regressão; linfonodo > 3 cm sem supuração → não puncionar e sem isoniazida; abscesso quente → antibiótico; Quadro 4 (penta): reações locais 24–48 h, febre nas primeiras 24 h, choro persistente, EHH nas primeiras 48 h (continuar com DTP acelular), convulsão até 72 h (continuar com DTP acelular), encefalopatia em 7 dias (contraindica DTP/DTPa, completar com DT), anafilaxia (contraindica); rotavírus: invaginação 1–2/100.000 após as primeiras doses; SCR: febre e exantema entre o 5º e o 14º dia, púrpura trombocitopênica 2–3 semanas; varicela/tetraviral: febre e exantema 5–12 dias, convulsão febril com a tetraviral; febre amarela: eventos neurológicos e viscerotrópicos (notificação imediata); Capítulo 26: compressas frias 24–48 h, antitérmico não profilático (considerar se febre alta prévia ou convulsão febril), doses de paracetamol, dipirona e ibuprofeno; eventos graves ou inusitados: notificação imediata em até 24 h; UBS e salas de vacina são unidades notificadoras (manual MS; cópia SBIm).", f: "F", url: "https://sbim.org.br/images/files/manual-vigilancia-epidemiologica-eventos-vacinacao-4ed.pdf"},
  sbp_transito2021: {s: "SBP 2021 – transporte de crianças no carro (CTB art. 64)", t: "Sociedade Brasileira de Pediatria (26/04/2021). Manifesto em defesa da segurança das crianças no trânsito: o art. 64 do CTB, alterado pela Lei 14.071/2020, exige dispositivo de retenção para crianças de até 10 anos que não atingiram 1,45 m; a SBP recomenda assento de elevação até 1,45 m e aponta conflito com a Resolução CONTRAN 819/2021 (página SBP).", f: "F", url: "https://www.sbp.com.br/?p=17645"},
  fda_denticao2018: {s: "FDA 2018 – produtos para dentição", t: "FDA (EUA), 2018: alertas contra géis e pomadas com benzocaína para dentição (risco de metemoglobinemia) e contra colares e pulseiras de dentição (âmbar, madeira, silicone), pelo risco de estrangulamento e engasgo (comunicados de segurança; citado sem conferência nesta sessão).", f: "C", url: ""}
});

// ── 1. Introdução alimentar: amplia o item existente (data12.js) com guia clínico e orientação completa
(() => { const c = CONDICOES.find(x => x.id === "pu-alimentacao"); if (!c) return;
  c.nome = "Alimentação até 2 anos e introdução alimentar (tradicional, BLISS ou mista)";
  c.tags += " BLW BLISS papinha engasgo ânsia ovo amendoim glúten vegetariano quantidade colheres prato";
  c.alerta = "Engasgos frequentes, tosse ou cansaço para comer, recusa com perda de peso, vômitos persistentes, sangue nas fezes ou reação (urticária, inchaço, vômitos) logo após um alimento novo: avaliar. Reação com falta de ar ou inchaço de lábios e língua: urgência (anafilaxia).";
  c.guia = {rotulo: "Guia clínico",
    resumo: "Leite materno exclusivo até 6 meses; a partir de 6 meses, comida de verdade amassada (não liquidificada), com todos os grupos, progredindo até a comida da família aos 12 meses, sem açúcar até 2 anos e sem ultraprocessados (Guia Alimentar 2019) [F]. A SBP (2017) recomenda a abordagem mista (colher e pedaços para a criança pegar) e não recomenda o BLW como método único [F]; o BLISS é uma opção com cuidados contra engasgo [C].",
    secoes: [
      {t: "Quando começar", b: [
        {ul: ["Aos 6 meses, mantendo o leite materno em livre demanda até 2 anos ou mais [F]", "Sinais de prontidão: senta com pouco ou nenhum apoio, menos protrusão da língua, interesse pela comida [F]", "Criança em fórmula: outros alimentos e água também a partir de 6 meses [F]; em leite de vaca antes de 6 meses, o CAB 23 prevê comida a partir de 4 meses [F]", "Prematuro: usar a idade corrigida e a prontidão motora (Caderneta 2025) [C]"]}
      ]},
      {t: "Refeições e quantidades por idade", b: [
        {tab: {h: ["Idade", "Refeições", "Quantidade aproximada (almoço/jantar)", "Consistência"], r: [
          ["6 meses", "Leite materno + fruta nos lanches da manhã e da tarde + almoço", "2 a 3 colheres de sopa no total", "Amassada com garfo, alimentos separados no prato; carnes desfiadas ou bem picadas"],
          ["7 a 8 meses", "Leite materno + frutas + almoço e jantar", "3 a 4 colheres de sopa", "Menos amassada; pedaços pequenos e macios"],
          ["9 a 11 meses", "Leite materno + frutas + almoço e jantar", "4 a 5 colheres de sopa", "Picada, já próxima da comida da família"],
          ["12 a 24 meses", "Café da manhã, lanches, almoço e jantar com a família + leite materno", "5 a 6 colheres de sopa", "Comida da família"]]}, nota: "Guia Alimentar < 2 anos (2019) [F]. As quantidades são referência, não meta: respeitar fome e saciedade [F]."},
        {p: "Prato do almoço e do jantar: 1 cereal ou raiz/tubérculo + 1 feijão (ou outra leguminosa) + 1 ou mais legumes e verduras + 1 carne, vísceras ou ovo; pode acompanhar um pedaço de fruta [F]. Óleo vegetal e temperos naturais em pouca quantidade; pouco sal [F]."}
      ]},
      {t: "Tradicional, BLISS ou mista", b: [
        {tab: {h: ["Método", "Como é", "Cuidados"], r: [
          ["Tradicional (Guia Alimentar)", "Comida amassada com garfo, oferecida na colher, progredindo a pedaços", "Não liquidificar nem peneirar; deixar a criança tocar e pegar os alimentos [F]"],
          ["BLISS (BLW modificado)", "A criança se alimenta com pedaços macios que consegue segurar; em cada refeição um alimento fonte de ferro e um energético", "Sentada, com adulto atento; evitar alimentos de risco de engasgo; ECR na Nova Zelândia (BLISS, 2016) sem aumento de engasgo em relação ao tradicional [C]"],
          ["Mista (recomendada pela SBP)", "Parte na colher, parte em pedaços para a criança pegar", "A SBP (2017) não recomenda o BLW como método único e sugere a abordagem mista [F]"]]}},
        {ir: [["pu-6m", "Consulta de 6 meses (roteiro detalhado)"], ["pu-suplementacao", "Ferro e vitamina D"]]}
      ]},
      {t: "O que evitar e o que não precisa evitar", b: [
        {ul: ["**Açúcar de qualquer tipo, mel, melado, rapadura e adoçantes** antes de 2 anos; mel também pelo risco de botulismo antes de 1 ano [F/C]", "**Ultraprocessados:** biscoitos, bolachas, iogurtes com açúcar, petit suisse, salgadinhos, embutidos, macarrão instantâneo, achocolatados, refrigerantes, sucos de caixa [F]", "**Suco:** não antes de 1 ano, mesmo natural; de 1 a 3 anos, se oferecido, até cerca de 120 mL por dia, natural e sem açúcar, de preferência ao fim de uma refeição [F]", "**Engasgo:** sem pipoca antes de 2 anos; amendoim, castanhas e nozes só moídos ou em pasta; uva e acerola sem semente e cortadas em 2 a 4 pedaços [F]; alimentos duros crus (cenoura, maçã em pedaços) só ralados ou cozidos, sobretudo no BLISS; salsicha não (ultraprocessado) [C]", "**Não precisa evitar:** glúten (só se doença celíaca) [F]; ovo, peixe, amendoim em pasta e outros alergênicos podem entrar a partir de 6 meses, sem atrasar [C]", "**Leite:** a criança amamentada não precisa de outro leite; leite de vaca integral só a partir de 9 meses para quem usa fórmula (Guia 2019) [F]; a SBP 2026 orienta evitar no 1º ano [F]", "Telas durante a refeição: evitar; comer junto com a família [F]"]},
        {alerta: "Diferenciar o reflexo de ânsia (tosse, careta, a criança devolve o alimento – comum e protetor) do engasgo verdadeiro (silenciosa, sem conseguir tossir ou chorar, arroxeada). Orientar a manobra de desengasgo do lactente para toda família [C]."},
        {ir: [["ovace", "Engasgo – manobras"], ["pu-formula", "Fórmula e leite de vaca"], ["pu-nao-come", "\"Meu filho não come\""]]}
      ]},
      {t: "Situações especiais", b: [
        {ul: ["Família vegetariana: possível com planejamento; fonte de ferro e combinação de cereais e leguminosas em todas as refeições; vegana estrita exige B12 e acompanhamento com nutrição [C]", "Baixo ganho de peso ou recusa persistente: rever a técnica, o ambiente e a curva; eMulti (nutrição) [I]", "Suspeita de alergia (urticária, vômitos, sangue nas fezes ligados a um alimento): retirar o alimento e avaliar; anafilaxia → urgência [C]"]}
      ]},
      {t: "Fontes", b: [{ref: ["guia_menor2_2019", "guia_menor2", "sbp_blw2017", "cab23_2015", "caderneta_crianca"]}]}
    ]};
  c.orient = `## A partir dos 6 meses
O leite do peito continua sendo muito importante até 2 anos ou mais. A partir dos 6 meses, a criança começa a comer a comida da família, feita em casa, com pouco sal e sem açúcar.
A criança está pronta quando senta com pouco apoio, mostra interesse pela comida e não empurra tudo para fora com a língua.
## Como montar o prato do almoço e do jantar
- 1 cereal ou raiz: arroz, macarrão, batata, mandioca, inhame, cará ou milho.
- 1 feijão: feijão, lentilha, grão-de-bico ou ervilha.
- 1 ou mais legumes e verduras: abóbora, cenoura, chuchu, beterraba, couve, espinafre, brócolis…
- 1 carne ou ovo: boi, frango, peixe, fígado ou ovo bem cozido.
- Use óleo e temperos naturais (alho, cebola, cheiro-verde) e pouco sal.
## Como oferecer
- **Aos 6 meses:** amasse com o garfo, sem bater no liquidificador e sem peneirar. Deixe cada alimento separado no prato para a criança conhecer os sabores. Carnes desfiadas ou bem picadas.
- **De 7 a 11 meses:** amasse cada vez menos e ofereça pedaços pequenos e macios.
- **A partir de 1 ano:** a criança come a mesma comida da família.
- Deixe a criança pegar a comida com as mãos e brincar com ela: assim ela aprende. Pedaços macios que ela consiga segurar (legumes cozidos em palitos, frutas macias) podem ser oferecidos junto com a comida na colher.
- Sempre sentada, nunca deitada, andando ou no carro, e sempre com um adulto olhando.
## Quantidade
- 6 meses: começa com 2 a 3 colheres de sopa no almoço; fruta nos lanches.
- 7 a 8 meses: almoço e jantar, 3 a 4 colheres de sopa.
- 9 a 11 meses: 4 a 5 colheres de sopa.
- 1 a 2 anos: 5 a 6 colheres de sopa, mais café da manhã e lanches.
São só referências. A criança mostra quando quer mais (abre a boca, se inclina) e quando está satisfeita (vira o rosto, fecha a boca, empurra a colher). Não force, não troque a comida por leite ou doce e não faça "aviãozinho" para enganar.
## Água e sucos
- Ofereça água filtrada ou fervida várias vezes ao dia, no copo.
- Não dê suco antes de 1 ano, nem natural. Prefira a fruta inteira, amassada ou em pedaços.
## Não dê antes dos 2 anos
- Açúcar de qualquer tipo, mel (proibido antes de 1 ano), rapadura e adoçante.
- Biscoitos, bolachas, bolos prontos, iogurtes com açúcar, "danoninho", gelatina, achocolatado, refrigerante, suco de caixa ou em pó.
- Salgadinhos, embutidos (salsicha, presunto, mortadela), macarrão instantâneo e temperos prontos.
## Cuidado com engasgo
- Não ofereça pipoca, amendoim ou castanhas inteiros, bala ou uva inteira. Corte uva e tomate-cereja em pedaços e tire as sementes. Cenoura e maçã cruas, só raladas ou cozidas.
- É normal a criança fazer careta, tossir e devolver a comida no começo: isso protege contra o engasgo. Engasgo de verdade é quando ela não consegue tossir, chorar ou respirar: aprenda a manobra de desengasgo com a equipe.
## Recusa
É comum a criança recusar um alimento novo. Ofereça de novo em outros dias, de outro jeito, junto com o que ela já gosta. Às vezes são precisas 8 a 10 tentativas.
## Na hora da refeição
- Coma junto com a criança. Ela aprende vendo a família comer.
- Desligue a TV e guarde o celular.
- Lave as mãos (as suas e as da criança) antes de preparar e de comer.`;
  c.alarme = ["Falta de ar, inchaço nos lábios ou língua, manchas pelo corpo ou vômitos logo depois de comer", "Engasgo em que a criança não consegue tossir, chorar ou respirar", "Tosse, cansaço ou engasgos em quase todas as refeições", "Recusa de quase tudo com perda de peso", "Sangue no cocô ou vômitos que não param"];
  c.evid.fontes = ["guia_menor2_2019", "guia_menor2", "sbp_blw2017", "cab23_2015"];
  c.mudancas = (c.mudancas || []).concat(["v44: guia clínico com quantidades e consistência por idade, métodos tradicional, BLISS e misto, alimentos de risco de engasgo e orientação completa aos responsáveis."]);
  c.nv = (c.nv || []).concat(["Introdução precoce de alergênicos (ovo, amendoim em pasta) citada de memória: conferir no Consenso SBP/ASBAI de alergia alimentar vigente."]);
})();

CONDICOES.push(
{
  id: "pu-dentes", modulo: "pu", nome: "Dentição e saúde bucal: nascimento dos dentes, escovação, flúor, cárie e trauma", sistema: "Queixas comuns do bebê", risco: "baixo",
  ciap: "D19 · D82", cid: "K00.7 · K02.9",
  tags: "dentição dente nascendo erupção dentária baba gengiva coçando mordedor gel dentição colar de âmbar escovação creme dental flúor 1000 ppm grão de arroz cárie mamadeira noturna chupeta dedo trauma dentário dente caiu avulsão dentista",
  alerta: "Febre alta, diarreia importante, recusa alimentar ou irritabilidade intensa não devem ser atribuídas à dentição: investigar outra causa. Dente permanente que saiu da boca: levar ao dentista o mais rápido possível, conservado em leite.",
  guia: {rotulo: "Guia clínico",
    resumo: "Os dentes de leite começam a nascer por volta de 6 meses, com sintomas leves. A escovação com creme dental com flúor (≥ 1.000 ppm) começa no primeiro dente, 2 vezes ao dia, com quantidade de um grão de arroz até 3 anos e 11 meses e de um grão de ervilha a partir de 4 anos (Caderneta 2025) [F].",
    secoes: [
      {t: "Nascimento dos dentes", b: [
        {ul: ["Início por volta de 6 meses; 20 dentes de leite por volta de 3 anos; 1º molar permanente por volta de 6 anos; troca dos 6 aos 14 anos (Caderneta) [F]", "Sintomas esperados: alteração do sono, perda de apetite, pequeno aumento de temperatura, salivação, coceira na gengiva e irritabilidade [F]", "Febre alta, diarreia, vômitos ou prostração não são explicados pela dentição: examinar e procurar outra causa [C]"]},
        {h: "Alívio"},
        {ul: ["Massagem na gengiva com o dedo limpo; mordedor resfriado na geladeira (não congelado) [C]", "Paracetamol pela dose do peso se o desconforto for importante [I]", "**Não usar:** géis e pomadas anestésicos (benzocaína: risco de metemoglobinemia) nem colares e pulseiras de âmbar ou similares (estrangulamento e engasgo) – alertas da FDA 2018 [C]"]}
      ]},
      {t: "Higiene e flúor", b: [
        {tab: {h: ["Idade", "Como escovar", "Creme dental"], r: [
          ["Do 1º dente a 3 anos e 11 meses", "Escova pequena de cerdas macias, 2 vezes ao dia ou mais; o adulto escova", "Com flúor ≥ 1.000 ppm, quantidade de um grão de arroz cru [F]"],
          ["A partir de 4 anos", "O adulto escova ou supervisiona até a criança conseguir sozinha (por volta de 8 anos)", "Com flúor ≥ 1.000 ppm, quantidade de um grão de ervilha [F]"],
          ["Dentes encostados", "Fio dental 1 vez ao dia [F]", "—"]]}, nota: "Caderneta da Criança 2025 [F]. Cuidar para a criança não engolir a espuma; guardar o creme dental fora do alcance [F]. Cuspir o excesso sem enxaguar muito mantém o flúor na boca [C]."},
        {p: "A Caderneta exige pelo menos 1.000 ppm de flúor [F]; cremes \"sem flúor\" ou com menos de 1.000 ppm não têm eficácia comprovada contra cárie [C]: conferir a concentração no tubo."}
      ]},
      {t: "Cárie", b: [
        {ul: ["Causa: bactérias que usam o açúcar da dieta [F]", "Cárie precoce e rápida: mamadeira frequente e prolongada à noite sem limpeza dos dentes; não adoçar a mamadeira nem acrescentar achocolatado [F]", "Prevenção: dieta sem açúcar até 2 anos e com açúcar controlado depois, escovação com flúor e fio dental [F]", "Manchas brancas opacas perto da gengiva são o 1º sinal de cárie: encaminhar à saúde bucal [C]"]}
      ]},
      {t: "Chupeta e sucção de dedo", b: [
        {ul: ["A chupeta atrapalha a amamentação e pode deformar a arcada, desalinhar os dentes e prejudicar fala, mastigação e respiração, mesmo as ortodônticas (Guia 2019) [F]", "Se a família usar: nunca adoçar, não prender no pescoço com cordão, ferver regularmente e planejar a retirada gradual [C]"]}
      ]},
      {t: "Trauma dentário", b: [
        {ul: ["Qualquer trauma: dentista o quanto antes; o tempo muda o prognóstico [F]", "Dente permanente quebrado: guardar o fragmento e levar ao dentista [F]", "Dente permanente que saiu da boca: lavar em água corrente e guardar em leite (de preferência), saliva ou soro fisiológico; dentista imediatamente [F]; segurar pela coroa, sem tocar a raiz [C]", "Dente de leite que saiu: não reimplantar; avaliar com o dentista [C]", "Trauma com outros sinais (vômitos, sonolência, perda de consciência) → avaliar trauma craniano [I]"]},
        {ir: [["odontalgia", "Dor de dente e abscesso"], ["pu-acidentes", "Prevenção de acidentes"]]}
      ]},
      {t: "SUS", b: [
        {trio: {ideal: "Avaliação com a equipe de saúde bucal desde o 1º ano de vida, escovação com flúor desde o 1º dente e dieta sem açúcar.", sus: "Equipe de saúde bucal da APS (Brasil Sorridente). Idade da 1ª consulta odontológica e fluxo de agendamento em Betim: conferir [NV].", ponte: "Encaminhar à saúde bucal da UBS na consulta de puericultura em que nascer o 1º dente, ou antes se houver mancha branca ou cárie [I]."}}
      ]},
      {t: "Fontes", b: [{ref: ["caderneta_crianca", "guia_menor2_2019", "fda_denticao2018"]}]}
    ]},
  S: `Criança de ___ meses/anos. Dentes ___ (nascendo / nº ___). Sintomas ___ (baba, irritabilidade, sono alterado). Febre ___, diarreia ___. Escovação ___ (vezes/dia, quem escova). Creme dental ___ (com flúor ___ ppm / sem flúor). Mamadeira noturna ___, açúcar ___. Chupeta ___. Trauma ___.`,
  O: `Dentes: ___. Manchas brancas ou cavidades ___. Gengivas ___. Mucosas ___.`,
  A: `Erupção dentária fisiológica ___ / higiene bucal ___ (adequada / a orientar) / risco de cárie ___.`,
  P: `- Oriento escovação com creme dental com flúor ≥ 1.000 ppm, quantidade adequada para a idade.
- Oriento dieta sem açúcar e retirada da mamadeira noturna.
- Encaminho à equipe de saúde bucal ___.`,
  orient: `## Quando os dentes nascem
Os primeiros dentes costumam nascer por volta dos 6 meses. Nesse período o bebê pode babar mais, morder tudo, dormir pior, comer menos e ficar irritado. Pode ter uma febre baixinha.
Febre alta, diarreia, vômitos ou bebê muito abatido **não** são da dentição: procure a unidade.
## O que alivia
- Massagem na gengiva com o dedo limpo.
- Mordedor gelado (da geladeira, não do congelador).
- Se a criança estiver muito incomodada, a equipe pode indicar um remédio para dor na dose do peso.
## O que não usar
- Pomadas e géis para dentição: alguns têm anestésico que pode fazer mal ao sangue do bebê.
- Colares e pulseiras de âmbar, madeira ou bolinhas: podem enforcar ou causar engasgo.
## Escovar desde o primeiro dente
- Escove 2 vezes por dia (de manhã e antes de dormir), com escova pequena e macia.
- Use creme dental **com flúor**, de pelo menos 1.000 ppm (o número está no tubo).
- Até 3 anos e 11 meses: só um grão de arroz de creme dental. A partir de 4 anos: um grão de ervilha.
- Um adulto escova os dentes da criança até ela conseguir sozinha, lá pelos 8 anos.
- Use fio dental quando os dentes estiverem encostados.
- Guarde o creme dental longe da criança.
## Evite a cárie
- Não dê açúcar antes dos 2 anos e não adoce a mamadeira.
- Não deixe a criança dormir mamando na mamadeira. Se mamar à noite, limpe os dentes depois.
- Manchas brancas perto da gengiva podem ser o começo da cárie: mostre para a equipe.
## Chupeta
A chupeta atrapalha a amamentação e pode entortar os dentes e prejudicar a fala. Se usar, nunca passe açúcar ou mel, não prenda no pescoço com cordão e combine com a equipe como tirar aos poucos.
## Se o dente bater ou cair
- Procure o dentista o quanto antes.
- Se um dente permanente quebrar, guarde o pedaço.
- Se um dente permanente sair inteiro: segure pela parte branca (não pela raiz), lave rapidinho em água corrente, coloque num copo de leite (ou na saliva, ou em soro) e vá ao dentista imediatamente.
- Dente de leite que saiu não deve ser recolocado.`,
  alarme: ["Febre alta, diarreia ou vômitos (não são da dentição)", "Inchaço no rosto ou na gengiva com febre", "Dente permanente que saiu da boca", "Batida na boca com vômitos, sonolência ou desmaio"],
  encaminhar: "Cárie, manchas brancas, trauma dentário, abscesso → equipe de saúde bucal da UBS (dente permanente avulsionado: atendimento imediato). Trauma com sinais neurológicos → urgência.",
  sus: {nacional: "Saúde bucal na APS (Brasil Sorridente).", betim: "Equipe de saúde bucal da UBS; fluxo de 1ª consulta odontológica do bebê e urgência odontológica em Betim: conferir [NV]."},
  evid: {resumo: "Caderneta da Criança 2025 (MS): creme dental com flúor ≥ 1.000 ppm desde o 1º dente, grão de arroz até 3a11m e de ervilha a partir de 4 anos; mamadeira noturna e açúcar como causa de cárie precoce; manejo inicial do trauma. Guia Alimentar 2019: chupeta prejudica amamentação e arcada. FDA (2018): não usar benzocaína nem colares de dentição.", certeza: "Moderada para flúor; baixa para medidas de alívio da dentição (estimada)", fontes: ["caderneta_crianca", "guia_menor2_2019", "fda_denticao2018"]},
  mudancas: ["Entrada nova (v44)."],
  nv: ["Idade e fluxo da 1ª consulta odontológica do bebê em Betim.", "Alertas da FDA sobre produtos de dentição citados de memória."]
},
{
  id: "pu-reacoes-vacinas", modulo: "pu", nome: "Reações às vacinas (ESAVI): o que é esperado, o que fazer e quando notificar", sistema: "Vacinas e triagens", risco: "moderado",
  ciap: "A87", cid: "T88.1 · Y58 · Y59",
  tags: "reação vacinal evento adverso pós-vacinação ESAVI EAPV febre após vacina dor local BCG ferida gânglio penta choro persistente episódio hipotônico-hiporresponsivo convulsão rotavírus invaginação tríplice viral exantema febre amarela antitérmico profilático notificação falsa contraindicação",
  alerta: "Anafilaxia (minutos a horas): urgência. Episódio hipotônico-hiporresponsivo, convulsão, choro inconsolável ≥ 3 h, vômitos, crises de choro, prostração ou sangue nas fezes após rotavírus (invaginação), sinais neurológicos ou icterícia após febre amarela: avaliar no mesmo dia e notificar (graves: em até 24 h).",
  guia: {rotulo: "Guia clínico",
    resumo: "A maioria das reações é local ou febre leve nas primeiras 24–48 h, sem contraindicar as próximas doses. Compressa fria e antitérmico ou analgésico se necessário; antitérmico profilático não é recomendado (MS 2020) [F]. Eventos graves ou inusitados: notificação imediata em até 24 h; a UBS é unidade notificadora [F].",
    secoes: [
      {t: "O que esperar de cada vacina", b: [
        {tab: {h: ["Vacina", "Esperado (não contraindica)", "Avaliar e notificar"], r: [
          ["BCG", "Mancha avermelhada e endurecida (1ª–2ª semana) → pústula e crosta (3ª–4ª) → úlcera de 4–10 mm (4ª–5ª) → cicatriz de 4–7 mm (6ª–12ª semana; às vezes até 24). Linfonodo axilar do mesmo lado, frio e indolor, até 3 cm, sem pus (até 10%). Sem cicatriz não significa sem proteção nem indica revacinar [F]", "Úlcera > 1 cm que não cicatriza em 12 semanas, abscesso frio, granuloma ou linfonodo com pus: notificar e isoniazida 10 mg/kg/dia (máx. 400 mg) até regressão, com seguimento por 3 meses após suspender [F]. Linfonodo > 3 cm sem pus: notificar, não puncionar e não dar isoniazida; retorno se amolecer ou drenar [F]. Abscesso quente: antibiótico [F]"],
          ["Penta e DTP", "Dor, vermelhidão e endurecimento em 24–48 h; febre nas primeiras 24 h; sonolência, irritabilidade, perda de apetite [F]", "Febre alta e choro persistente (2–8 h após, até 48 h): notificar e manter penta/DTP [F]. Episódio hipotônico-hiporresponsivo (até 48 h) ou convulsão (até 72 h): notificar e continuar o esquema com DTP acelular (CRIE) [F]. Encefalopatia em 7 dias: contraindica DTP/DTPa, completar com DT. Anafilaxia: contraindica [F]"],
          ["Rotavírus", "Febre, diarreia e vômitos com frequência semelhante ao placebo [F]", "Invaginação intestinal (1–2 casos/100.000 após as primeiras doses, sobretudo na 1ª semana): vômitos, crises de choro, palidez ou prostração, sangue nas fezes (sinal tardio) – qualquer um → urgência e notificar (até 14 dias) [F]. Estrias de sangue isoladas são comuns e não contraindicam as próximas doses [F]"],
          ["Tríplice viral", "Febre entre o 5º e o 12º dia; manchas no corpo entre o 7º e o 14º dia (cerca de 2 dias); íngua [F]", "Febre ≥ 39,5 °C com manchas, púrpura plaquetopênica (2–3 semanas), meningite ou encefalite: notificar [F]"],
          ["Varicela e tetraviral", "Dor local; febre e manchas ou bolhinhas entre 5 e 26 dias [F]", "Convulsão febril (5–10 dias, mais com a tetraviral na 1ª dose); lesões extensas: notificar [F]"],
          ["Febre amarela", "Dor local em 1–2 dias; febre, dor no corpo e de cabeça a partir do 3º dia, leves [F]", "Sinais neurológicos (1–30 dias) ou icterícia e sangramento (3–4 dias): notificação e investigação imediatas [F]. Mãe que amamenta bebê < 6 meses: adiar a vacina ou suspender a amamentação por 10 dias (CRIE 2023) [F]"],
          ["Pneumocócica, meningocócica, VIP, hepatite B, influenza, COVID-19", "Reações locais e febre baixa nos primeiros dias [C]", "Reações graves ou inusitadas: notificar [F]"]]}, nota: "Manual de Vigilância de Eventos Adversos Pós-Vacinação, 4ª ed. (MS, 2020) [F]. Frequências e definições de caso no manual."}
      ]},
      {t: "Conduta", b: [
        {ol: ["Reação local: compressa fria nas primeiras 24–48 h; analgésico se necessário [F]. Abscesso: avaliação médica (antibiótico ou drenagem) [F]", "Febre: repouso, líquidos e leite materno; antitérmico se desconforto [F]. Antitérmico profilático não é recomendado; pode ser considerado se houve febre alta em dose anterior ou há história de convulsão febril [F]", "Antitérmicos (manual MS): paracetamol 10–15 mg/kg por dose a cada 4–6 h, até 5 doses ao dia; dipirona 20–25 mg/kg por dose a cada 6 h, máx. 500 mg por dose; ibuprofeno 5–10 mg/kg a cada 6–8 h (máx. 40 mg/kg/dia) [F]. O manual cita dose neonatal de dipirona, mas o app segue a bula: dipirona não antes de 3 meses ou 5 kg [F]. Ibuprofeno a partir de 6 meses (bula) [NV]; a REMUME só tem comprimido de 600 mg [F]", "Febre em bebê menor de 3 meses: examinar no mesmo dia, mesmo após vacina [I]", "Atentar para infecção intercorrente [F]: investigar febre que dure mais de 24–48 h ou apareça fora da janela esperada [I]", "Anafilaxia: adrenalina IM e urgência; contraindica a vacina envolvida [F]"]},
        {ir: [["anafilaxia", "Anafilaxia"], ["febre-menor-3m", "Febre no lactente < 3 meses"], ["pu-vacinas", "Calendário vacinal"]]}
      ]},
      {t: "Notificação", b: [
        {ul: ["Eventos graves ou inusitados: notificação imediata, em até 24 h, ao nível superior (telefone, e-mail ou outro meio rápido), com investigação iniciada em até 48 h [F]", "Unidades notificadoras: UBS e salas de vacina, UPA, prontos-socorros e hospitais; qualquer serviço público ou privado deve notificar [F]", "Também notificar: reações locais muito intensas ou em surto, febre alta, choro persistente, EHH, convulsão, BCG com complicação [F]", "Sistema de registro vigente (e-SUS Notifica ou SIPNI) e fluxo em Betim: conferir [NV]"]}
      ]},
      {t: "O que não contraindica a vacina", b: [
        {ul: ["Reação local ou febre baixa após dose anterior [F]", "Doença leve, resfriado, diarreia leve ou convalescença de doença aguda [C]", "Uso de antibiótico, prematuridade (vacinar pela idade cronológica), amamentação, história familiar de reação ou de convulsão [C]", "Contraindicações verdadeiras: anafilaxia a dose anterior ou componente; encefalopatia em 7 dias após DTP (para pertússis); imunodeficiência ou imunossupressão para vacinas vivas (conferir CRIE); história de invaginação para rotavírus; prematuro internado não recebe rotavírus enquanto hospitalizado [F]; tríplice viral do Serum Institute contraindicada na alergia grave à proteína do leite de vaca (PNI 2026) [F/C]"]}
      ]},
      {t: "Fontes", b: [{ref: ["esavi2020", "crie2023", "pni2026", "bula_dipirona", "bula_paracetamol"]}]}
    ]},
  S: `Criança de ___ meses/anos, vacinada em ___ com ___. Há ___ h/dias: ___ (dor/vermelhidão local / febre ___ °C / choro persistente ___ h / sonolência / vômitos / manchas / lesão da BCG ___). Medicações usadas ___. Reações em doses anteriores ___.`,
  O: `Estado geral ___. Tax ___. Local da aplicação: ___ (eritema ___ cm, enduração, flutuação). Lesão da BCG ___ (fase, diâmetro). Linfonodos ___. Pele ___. Exame neurológico ___.`,
  A: `Evento supostamente atribuível à vacinação ___ (local / sistêmico leve / grave), ___ (esperado para a vacina / a investigar).`,
  P: `- Oriento compressas frias e sintomáticos; sem antitérmico profilático.
- Notificação ___ (realizada / não indicada).
- Próximas doses: ___ (manter esquema / encaminhar ao CRIE).
- Retorno se sinais de alarme.`,
  rx: [
    {trilha: "ambos", titulo: "Febre ou dor após vacina (REMUME)", texto: "USO ORAL\n1. Paracetamol 200 mg/mL gotas ______ 1 frasco\n   Dar ___ gotas (1 gota por kg; máximo 35 gotas) a cada 4 a 6 horas, se febre ou dor. No máximo 5 vezes em 24 horas.\n\nCompressa fria no local da vacina nas primeiras 24 a 48 horas.", dose: "F", nota: "Bula do paracetamol 200 mg/mL (1 gota/kg, máx. 35 gotas, até 5 vezes/dia) e manual MS 2020 (10–15 mg/kg/dose). Não usar de forma preventiva. Menor de 3 meses com febre: examinar antes."}
  ],
  orient: `## O que é normal depois da vacina
É comum, nos primeiros 1 a 2 dias, a criança ter dor, vermelhidão ou um caroço no lugar da injeção, febre baixa, ficar mais sonolenta, mais chorosa ou comer menos. Isso passa sozinho e não impede as próximas doses.
- **Compressa fria** (pano limpo com água gelada) no local, nas primeiras 24 a 48 horas.
- Ofereça o peito ou líquidos com mais frequência e deixe a criança descansar.
- Se tiver febre ou muita dor, dê o remédio receitado, na dose do peso. Não dê remédio antes, "para prevenir".
## Reações que aparecem dias depois
- **Tríplice viral, varicela e tetraviral:** entre 5 e 14 dias depois, pode aparecer febre e manchinhas no corpo por 1 ou 2 dias.
- **Febre amarela:** a partir do 3º dia pode haver febre baixa e dor no corpo, por 1 ou 2 dias.
## A ferida da BCG
- No braço direito surge uma mancha vermelha que vira uma bolinha com pus, depois uma feridinha com casca e, entre 6 e 12 semanas, uma cicatriz. Isso é o esperado.
- Não coloque pomada, curativo, remédio ou nada em cima. Lave só com água e sabão no banho.
- Uma íngua pequena na axila do mesmo lado pode aparecer e some sozinha.
- Mostre para a equipe se a ferida ficar maior que 1 cm, não cicatrizar depois de 3 meses, ou se a íngua crescer, ficar mole ou soltar pus.
- Se não ficar cicatriz, não precisa vacinar de novo.
## Procure atendimento no mesmo dia se
- Bebê com menos de 3 meses tiver febre.
- Febre acima de 39,5 °C ou que dure mais de 2 dias.
- Choro sem parar por 3 horas ou mais.
- A criança ficar molinha, pálida, sem reagir, ou tiver convulsão.
- Na primeira semana após a vacina de rotavírus: vômitos repetidos, crises de choro forte com as pernas encolhidas, bebê molinho ou pálido, ou sangue no cocô (qualquer um desses sinais).
- Após a vacina de febre amarela: pele ou olhos amarelos, sangramentos, dor de cabeça forte, confusão ou fraqueza.
## Procure urgência imediatamente se
Falta de ar, chiado, inchaço no rosto, lábios ou língua, manchas vermelhas pelo corpo todo ou desmaio, principalmente na primeira hora depois da vacina.
## Continue vacinando
Reações leves não são motivo para atrasar as próximas vacinas. Leve sempre a Caderneta e conte à equipe o que aconteceu na dose anterior.`,
  alarme: ["Falta de ar, inchaço no rosto ou lábios, manchas pelo corpo ou desmaio", "Bebê menor de 3 meses com febre", "Criança molinha, pálida e sem reagir, ou convulsão", "Choro sem parar por 3 horas ou mais", "Vômitos, crises de choro, bebê molinho ou sangue no cocô na semana após a vacina de rotavírus", "Pele amarela, sangramentos ou confusão após a vacina de febre amarela", "Ferida da BCG maior que 1 cm ou íngua com pus"],
  encaminhar: "Anafilaxia → urgência (SAMU 192). Invaginação → urgência cirúrgica. EHH, convulsão, encefalopatia → avaliação no mesmo dia, notificar e definir o esquema (CRIE). Complicações da BCG → notificar e tratar conforme o manual.",
  sus: {nacional: "Notificação de ESAVI pela UBS/sala de vacina; CRIE para vacinas especiais (DTP acelular após EHH ou convulsão).", betim: "Coordenação de imunizações/vigilância de Betim recebe as notificações; fluxo e telefone: conferir [NV]."},
  evid: {resumo: "Manual de Vigilância Epidemiológica de Eventos Adversos Pós-Vacinação (MS, 4ª ed., 2020): eventos esperados por vacina, condutas e critérios de notificação; antitérmico profilático não recomendado de rotina.", certeza: "Alta para a segurança das vacinas do calendário; condutas baseadas em norma (estimada)", fontes: ["esavi2020", "crie2023", "pni2026", "bula_paracetamol", "bula_dipirona"]},
  mudancas: ["Entrada nova (v44)."],
  nv: ["Sistema de notificação de ESAVI vigente (e-SUS Notifica/SIPNI) e fluxo de Betim.", "Possível edição mais recente do manual de ESAVI (a 4ª edição é de 2020)."]
},
{
  id: "pu-acidentes", modulo: "pu", nome: "Prevenção de acidentes por idade: sono, quedas, engasgo, afogamento, queimaduras, intoxicação e transporte", sistema: "Desenvolvimento e condições", risco: "moderado",
  ciap: "A98", cid: "Z00.1",
  tags: "prevenção de acidentes segurança infantil cadeirinha bebê conforto assento de elevação booster cinto carro CTB queda janela grade escada afogamento balde piscina queimadura fogão panela intoxicação medicamento produto de limpeza CIATox engasgo bateria botão ímã arma de fogo cachorro bicicleta capacete sono seguro",
  alerta: "Bateria de botão ou ímãs engolidos, produto cáustico ingerido, afogamento (mesmo recuperado), queimadura extensa, na face, mãos, genitais ou por eletricidade, queda com perda de consciência, vômitos ou sonolência: urgência (SAMU 192). Intoxicação: CIATox 0800-722-6001.",
  guia: {rotulo: "Guia clínico",
    resumo: "Acidentes são causa importante de morte e sequela na infância e são, em grande parte, preveníveis com supervisão contínua e mudanças simples no ambiente. Orientar a cada consulta, conforme a fase do desenvolvimento (Caderneta 2025) [F].",
    secoes: [
      {t: "Por idade", b: [
        {tab: {h: ["Idade", "Principais riscos", "Orientações-chave"], r: [
          ["0 a 6 meses", "Sufocação no sono, quedas de móveis, queimadura no banho ou com líquidos quentes, transporte", "Sono de barriga para cima, berço sem travesseiro, protetores ou bichos de pelúcia; grades com no máximo 6 cm de vão; nunca deixar sozinho em cima de móveis ou com outra criança; água do banho a 37 °C; não segurar líquidos quentes nem fumar com o bebê no colo; sem talco; bebê-conforto voltado para trás, no banco traseiro [F]"],
          ["6 meses a 2 anos", "Quedas (escadas, janelas), engasgo, intoxicação, queimaduras na cozinha, choque elétrico, afogamento", "Portões nas escadas e redes ou grades nas janelas; tanque e pia bem fixos; produtos de limpeza e remédios no alto e trancados, nunca em garrafa de bebida; sem acesso à cozinha; bocas de trás do fogão e cabos das panelas para dentro; protetor de tomada; nunca sozinho perto de baldes, bacias, tanques e piscinas [F]"],
          ["2 a 4 anos", "Atropelamento, afogamento, animais, fogo, intoxicação, armas", "Segurar pelo pulso na rua; não brincar em garagens; adulto atento o tempo todo perto da água, mesmo se souber nadar; longe de cães desconhecidos ou comendo; fogo, fósforos e álcool fora do alcance; cadeirinha no banco traseiro; armas de fogo longe da criança [F]"],
          ["4 a 6 anos", "Quedas de bicicleta, patins e skate, lajes, trânsito", "Capacete e proteção; lugares seguros para brincar; criança do lado de dentro da calçada; lajes e varandas só com grade; assento de elevação com cinto de 3 pontos [F]"],
          ["6 a 10 anos", "Trânsito, pipa e choque elétrico", "Não soltar pipa perto de fios nem usar linha com cerol; banco traseiro até 10 anos [F]"]]}, nota: "Caderneta da Criança 2025 [F]."}
      ]},
      {t: "Transporte no carro", b: [
        {ul: ["Lei: crianças de até 10 anos que não atingiram 1,45 m devem usar dispositivo de retenção adequado, no banco traseiro (CTB art. 64, alterado pela Lei 14.071/2020) [F]", "Sequência: bebê-conforto ou cadeira conversível voltada para trás → cadeirinha com cinto próprio → assento de elevação com cinto de 3 pontos, conforme peso e altura do fabricante [F]", "A SBP recomenda manter o assento de elevação até 1,45 m de altura, mesmo depois de 7 anos e meio [F]; a Resolução CONTRAN 819/2021 e a própria Caderneta 2025 admitem o cinto de 3 pontos a partir de 7,5 anos – divergência entre a SBP e as normas [F]. O app orienta como a SBP, apresentado como recomendação e não como lei [I]. O texto da lei fala em crianças com idade inferior a 10 anos [C]", "Nunca transportar no colo; nunca no banco da frente com airbag ligado [C]"]}
      ]},
      {t: "Riscos que merecem destaque", b: [
        {ul: ["**Baterias de botão e ímãs:** ingestão é emergência (lesão de esôfago em horas); guardar controles, brinquedos e aparelhos com bateria fora do alcance [C]", "**Sono seguro:** de barriga para cima, no berço, no quarto dos pais; cama de adulto contraindicada antes de 1 ano (risco maior se o adulto fuma, bebeu ou usa sedativos); sofá e poltrona são os locais mais perigosos [F]", "**Afogamento:** pode ocorrer em pouca água (balde, bacia, vaso) [F] e em segundos [C]", "**Intoxicação:** de 1 a 3 anos é a idade de maior risco; nunca dizer que remédio é doce; descartar remédios vencidos [C]", "**Queimaduras:** água corrente em temperatura ambiente por cerca de 20 minutos; não usar pasta de dente, manteiga, gelo ou pó de café; não estourar bolhas; queimadura extensa: cobrir com pano limpo e evitar hipotermia [C]", "**Armas de fogo:** se houver em casa, descarregadas e trancadas, com munição separada [C]", "**Violência:** sacudir o bebê causa trauma craniano grave; orientar pausa segura no choro [C]"]},
        {ir: [["ovace", "Engasgo – manobras"], ["pcr", "Parada cardiorrespiratória (RCP)"], ["intoxicacao", "Intoxicação exógena"], ["queimadura", "Queimadura pequena"], ["pu-choro-colica", "Choro e pausa segura"]]}
      ]},
      {t: "Fontes", b: [{ref: ["caderneta_crianca", "sbp_transito2021", "sbp_sono2023"]}]}
    ]},
  P: `- Oriento prevenção de acidentes para a idade: ___.
- Entrego orientações por escrito.`,
  orient: `## Do nascimento aos 6 meses
- **Sono:** sempre de barriga para cima, no berço, sem travesseiro, protetor de berço, cobertor solto ou bichinhos de pelúcia. O lençol bem preso no colchão. Não durma com o bebê no sofá ou na poltrona (é o mais perigoso), e a cama dos pais também não é recomendada.
- **Quedas:** nunca deixe o bebê sozinho em cima da cama, sofá ou trocador, nem aos cuidados de outra criança. As grades do berço devem ter no máximo 6 cm de vão.
- **Sufocação:** não use talco; sem cordões, correntinhas ou prendedor de chupeta no pescoço; longe de sacos plásticos e peças pequenas.
- **Banho:** água morna (teste com o cotovelo); nunca deixe o bebê sozinho na banheira, nem por um segundo.
- **Queimaduras:** não beba café ou chá quente nem fume com o bebê no colo.
- **Remédios:** só os receitados, na dose certa.
- **Carro:** bebê-conforto virado para trás, no banco de trás, preso conforme o manual. Nunca no colo.
## Dos 6 meses aos 2 anos
A criança começa a rolar, engatinhar, andar e colocar tudo na boca.
- Portão nas escadas, rede ou grade nas janelas e varandas. Não deixe móveis perto da janela.
- Produtos de limpeza, venenos e remédios no alto e trancados. Nunca guarde produto em garrafa de refrigerante ou de água.
- Protetores nas tomadas; fios elétricos longe do alcance.
- Na cozinha: criança fora; use as bocas de trás do fogão e vire o cabo das panelas para dentro. Cuidado com ferro de passar e garrafa térmica.
- Baldes, bacias e tanques vazios e virados; tampa no vaso sanitário; piscina com cerca.
- Peças pequenas, moedas, baterias redondas (de controle, relógio, brinquedo) e ímãs longe da criança: **se engolir, é urgência.**
## Dos 2 aos 4 anos
- Na rua, segure a criança pelo pulso. Não deixe brincar na garagem ou perto de carros.
- Perto de água (piscina, rio, mar, balde), um adulto olhando o tempo todo, mesmo que ela saiba nadar.
- Fósforos, isqueiros, álcool e fogos de artifício fora do alcance.
- Não deixe a criança se aproximar de cachorros desconhecidos, comendo ou com filhotes.
- Arma de fogo: o ideal é não ter em casa. Se tiver, descarregada e trancada, com a munição separada.
- Carro: cadeirinha no banco de trás.
## Dos 4 aos 6 anos e depois
- Capacete e proteção para bicicleta, patins e skate.
- Na calçada, a criança anda do lado de dentro.
- Lajes e varandas só com grade.
- Pipa longe de fios elétricos e sem cerol.
- Carro: assento de elevação com cinto de 3 pontos. A Sociedade de Pediatria recomenda manter o assento até a criança ter 1,45 m de altura, mesmo depois dos 7 anos e meio. Até os 10 anos, sempre no banco de trás (lei).
## Se acontecer
- **Engasgo:** se a criança tosse, deixe tossir. Se não consegue tossir, chorar ou respirar, faça a manobra de desengasgo e chame o SAMU (192). Peça para a equipe ensinar a manobra.
- **Queimadura:** água corrente (não gelada) por cerca de 20 minutos. Se for grande, cubra com pano limpo e mantenha a criança aquecida. Não passe pasta de dente, manteiga, pó de café ou gelo, e não estoure as bolhas. Procure atendimento.
- **Engoliu remédio, produto de limpeza ou veneno:** não provoque vômito. Ligue para o Disque-Intoxicação (0800-722-6001) ou SAMU (192) e leve a embalagem.
- **Queda ou batida na cabeça:** procure atendimento se a criança desmaiar, vomitar, ficar sonolenta, irritada demais ou diferente do normal.
- **Afogamento:** tire a criança da água. Se ela não respira, chame o SAMU (192) e comece as respirações e a massagem no peito, se souber. Mesmo que pareça bem depois, leve para avaliação.`,
  alarme: ["Engasgo em que a criança não tosse, não chora ou não respira", "Engoliu bateria redonda, ímã, remédio ou produto de limpeza", "Batida na cabeça com desmaio, vômitos, sonolência ou comportamento diferente", "Queimadura grande, no rosto, mãos ou partes íntimas, ou por choque elétrico", "Afogamento, mesmo que pareça recuperada"],
  encaminhar: "Ingestão de bateria de botão, ímãs ou cáusticos, afogamento, queimaduras graves, TCE com sinais de alarme → urgência/SAMU 192. Intoxicação → CIATox (0800-722-6001) e urgência. Suspeita de negligência ou violência → notificar e acionar a rede de proteção.",
  sus: {nacional: "SAMU 192; Disque-Intoxicação 0800-722-6001 (citado na Caderneta).", betim: "Rede de urgência pediátrica de referência em Betim: conferir [NV]."},
  evid: {resumo: "Caderneta da Criança 2025 (MS): orientações de prevenção por faixa etária. CTB art. 64 (Lei 14.071/2020): dispositivo de retenção até 10 anos ou 1,45 m. SBP (2021): assento de elevação até 1,45 m. Primeiros socorros (queimadura, bateria de botão) baseados em consenso.", certeza: "Moderada (normativa e observacional, estimada)", fontes: ["caderneta_crianca", "sbp_transito2021", "sbp_sono2023"]},
  mudancas: ["Entrada nova (v44), com o transporte no carro atualizado pelo CTB art. 64."],
  nv: ["Faixas de peso e idade de cada dispositivo na Resolução CONTRAN 819/2021 (texto não aberto nesta sessão).", "Rede de urgência pediátrica de Betim."]
}
);
