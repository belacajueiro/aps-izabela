// ───────────── data55.js – v44: puericultura, lote 3 (umbigo e olhos, "não come", sono, telas, desfralde,
// nariz entupido, sol e repelente). Conteúdo conferido em 20/10/2026.
Object.assign(FONTES, {
  sbp_sono2021: {s: "SBP 2021 – higiene do sono", t: "Sociedade Brasileira de Pediatria, Departamento Científico do Sono. Higiene do sono – atualização 2021: duração do sono em 24 h (AASM 2016) 4–12 meses 12–16 h, 1–2 anos 11–14 h, 3–5 anos 10–13 h (cochilos incluídos), 6–12 anos 9–12 h, 13–18 anos 8–10 h; entre 6 e 9 meses a maioria dorme a noite inteira com 2–3 cochilos; cochilo desaparece até 5 anos; despertares breves são normais; medidas: rotina diurna, horários regulares inclusive nos fins de semana, ritual breve (até 30 min), ambiente adequado, sem telas 1 h antes de dormir, mesma estratégia entre os pais, adormecer na própria cama, objeto de transição, evitar chocolate, café e refrigerante à noite (documento SBP).", f: "F", url: "https://www.sbp.com.br/fileadmin/user_upload/23196c-DC_Higiene_do_Sono_-_Atualizacao_2021.pdf"},
  sbp_desfralde2019: {s: "SBP/SBU 2019 – treinamento esfincteriano", t: "Sociedade Brasileira de Pediatria e Sociedade Brasileira de Urologia. Manual de orientação – Treinamento esfincteriano (set/2019): no Brasil, início médio aos 22 meses e conclusão aos 27,4 meses; prontidão geralmente entre 24 e 36 meses; 21 sinais de prontidão; abordagem orientada para a criança (AAP); penico preferível no início, com pés apoiados; elogios sem guloseimas e sem punição; recusa → pausa de 1 a 3 meses; investigar se ≥ 36 meses sem sinais de prontidão ou ≥ 48 meses sem controle diurno (deficiência intelectual, TEA, TDAH, disrafismo, bexiga/intestino neurogênicos, constipação, abuso sexual etc.); tratar a constipação antes ou durante (manual SBP/SBU).", f: "F", url: "https://www.sbp.com.br/fileadmin/user_upload/22076c-MO_-_Treinamento_Esfincteriano.pdf"},
  bula_nafazolina: {s: "Bula – nafazolina nasal (Narix adulto)", t: "Bula do paciente – Narix (cloridrato de nafazolina 0,5 mg/mL, solução nasal; Cimed): uso adulto; contraindicado para menores de 12 anos; não usar por longos períodos (bula).", f: "F", url: "https://cimedremedios.com.br/wp-content/uploads/2020/03/Medicamento_Bula_Paciente-NARIX-GOTAS.pdf"},
  sbp_repel2015: {s: "SBP 2015 – uso de repelentes em crianças", t: "Sociedade Brasileira de Pediatria. Uso do repelente de insetos em crianças (2015): proteção mecânica; abaixo de 6 meses sem estudos de segurança; IR3535 acima de 6 meses; DEET e icaridina acima de 2 anos; aplicar com a mão do adulto, longe de olhos e boca, não dormir com repelente; protetor solar e, 20–40 min depois, o repelente; loção preferível a spray; pulseiras de citronela e aparelhos ultrassônicos sem eficácia (documento SBP).", f: "F", url: "https://www.sbp.com.br/fileadmin/user_upload/2012/12/Repelentes-2015.pdf"},
  guia_telas2025: {s: "Governo Federal 2025 – guia de telas", t: "Secretaria de Comunicação Social da Presidência (Secom). Crianças, Adolescentes e Telas: Guia sobre Uso de Dispositivos Digitais (11/03/2025): telas só a partir de 2 anos, exceto videochamadas com a família; sem smartphone próprio antes de 12 anos (conferido por reportagem da CNN Brasil; documento original não aberto).", f: "C", url: "https://www.cnnbrasil.com.br/educacao/governo-lanca-guia-sobre-uso-de-telas-por-criancas-e-adolescentes-confira/"}
});

CONDICOES.push(
{
  id: "pu-umbigo-olhos", modulo: "pu", nome: "Umbigo e olhos do bebê: coto, granuloma, hérnia umbilical, lacrimejamento e secreção ocular", sistema: "Queixas comuns do bebê", risco: "baixo",
  ciap: "A94 · F80", cid: "P83.6 · K42.9 · Q10.5 · P39.1",
  tags: "coto umbilical umbigo granuloma umbilical sal hérnia umbilical moeda faixa onfalite obstrução do ducto lacrimal lacrimejamento olho com remela massagem de Crigler dacriocistite conjuntivite neonatal oftalmia glaucoma congênito",
  alerta: "Vermelhidão que se espalha ao redor do umbigo, pus com mau cheiro ou febre (onfalite); hérnia endurecida, dolorosa ou que não volta (encarceramento); conjuntivite com muita secreção nas primeiras 4 semanas (oftalmia neonatal); olho que lacrimeja com fotofobia ou córnea opaca ou aumentada (glaucoma congênito): avaliação no mesmo dia.",
  guia: {rotulo: "Guia clínico",
    resumo: "Coto limpo e seco cai até o fim da 2ª semana; granuloma que persiste após 4 semanas responde ao sal de cozinha (SBP 2024) [F]. A hérnia umbilical costuma fechar sozinha nos primeiros anos [C]. Lacrimejamento com remela sem olho vermelho, desde as primeiras semanas, é obstrução do ducto lacrimal: massagem e espera; a maioria resolve até 1 ano [C].",
    secoes: [
      {t: "Coto e granuloma", b: [
        {ul: ["Coto: manter limpo e seco; cai até o fim da 2ª semana; sem faixas, moedas ou substâncias (Caderneta) [F]. Álcool 70% (Caderneta) ou só limpo e seco (SBP 2024) [F]", "Sangramento discreto na queda do coto é comum; sangramento que persiste ou encharca a fralda (vitamina K, coagulopatia) ou coto que não caiu até cerca de 3 semanas: avaliar [C]; pus, mau cheiro ou vermelhidão ao redor = onfalite → avaliação imediata (Caderneta) [F]", "Granuloma: lesão vermelha, úmida e friável no centro do umbigo; tratar se não resolver até 4 semanas de vida; sal de cozinha como 1ª linha [F]; nitrato de prata não é 1ª linha (queimadura química) [F]", "Secreção clara intermitente com cheiro de urina (úraco persistente) ou secreção mucoide/fecal (persistência do ducto onfalomesentérico): USG e cirurgia pediátrica [F/C]"]}
      ]},
      {t: "Hérnia umbilical", b: [
        {ul: ["Comum, mais em prematuros e em crianças negras; aumenta com o choro sem causar dor [C]", "A maioria fecha espontaneamente até 4–5 anos [C]", "Não usar faixas, moedas ou esparadrapo: não ajudam e irritam a pele [C]", "Encaminhar à cirurgia pediátrica: persistência após 4–5 anos, anel grande (cerca de 1,5–2 cm ou mais) que não diminui, ou qualquer episódio de encarceramento [C]", "Hérnia dura, dolorosa, arroxeada ou com vômitos = encarceramento → urgência [C]"]}
      ]},
      {t: "Olhos: lacrimejamento e secreção", b: [
        {tab: {h: ["Quadro", "Como é", "Conduta"], r: [
          ["Obstrução congênita do ducto lacrimal", "Lacrimejamento e remela desde as primeiras semanas, olho branco, sem fotofobia; piora com resfriado", "Limpar com água fervida ou soro; massagem de Crigler (pressão suave descendente no canto interno, várias vezes ao dia); a maioria resolve até 12 meses; persistência após 12 meses → oftalmologia (sondagem) [C]"],
          ["Dacriocistite", "Inchaço vermelho e doloroso no canto interno do olho, às vezes febre", "Avaliação no mesmo dia; antibiótico sistêmico e oftalmologia [C]"],
          ["Conjuntivite neonatal (< 28 dias)", "Olho vermelho com muita secreção purulenta, edema de pálpebras", "Secreção purulenta abundante nos primeiros 2–5 dias = suspeita de gonococo: referenciar no mesmo dia para tratamento sistêmico (risco de perfuração da córnea), não tratar só com colírio; clamídia (5–14 dias): tratamento sistêmico; investigar e tratar mãe e parceria (PCDT IST) [C]; doses [NV]"],
          ["Dacriocistocele", "Inchaço azulado no canto interno do olho ao nascer", "Oftalmologia precoce [C]"],
          ["Glaucoma congênito", "Lacrimejamento com fotofobia, blefaroespasmo, córnea opaca ou olho grande", "Oftalmologia com urgência [C]"],
          ["Reflexo vermelho alterado", "Ausente, assimétrico ou branco (leucocoria)", "Oftalmologia com urgência (catarata, retinoblastoma) – ver triagens [C]"]]}},
        {ir: [["pu-triagens", "Triagens neonatais (teste do olhinho)"], ["conj-bact", "Conjuntivite bacteriana"], ["in-ist", "IST (PCDT)"], ["pu-pele", "Pele do bebê (granuloma e lesões)"]]}
      ]},
      {t: "Fontes", b: [{ref: ["sbp_pele2024", "caderneta_crianca"]}]}
    ]},
  S: `Lactente de ___ dias/meses. Umbigo: ___ (coto caiu com ___ dias / secreção ___ / lesão úmida ___ / "umbigo saltado" ___). Olhos: ___ (lacrimejamento desde ___, remela ___, olho vermelho ___, fotofobia ___). Febre ___. Mamando ___.`,
  O: `Umbigo: ___ (cicatrizado / granuloma ___ mm / hérnia com anel de ___ cm, redutível ___). Pele periumbilical ___. Olhos: ___ (conjuntiva clara / hiperemia), secreção ___, refluxo à compressão do saco lacrimal ___, córneas ___, reflexo vermelho ___.`,
  A: `___ (granuloma umbilical / hérnia umbilical / obstrução congênita do ducto lacrimal), sem sinais de complicação.`,
  P: `- Oriento cuidados e evolução esperada.
- Granuloma: sal de cozinha ___ (técnica orientada).
- Ducto lacrimal: limpeza e massagem; reavaliar aos 12 meses.
- Retorno se sinais de alarme.`,
  rx: [
    {trilha: "ambos", titulo: "Granuloma umbilical – sal de cozinha (sem custo)", texto: "USO TÓPICO\n1. Sal de cozinha (cloreto de sódio)\n   Limpar e secar o umbigo; proteger a pele ao redor com um pouco de vaselina ou creme de barreira; colocar uma pitada de sal sobre o granuloma e cobrir com gaze por 10 a 30 minutos; depois limpar com água. Fazer 2 vezes ao dia por 2 a 3 dias e retornar para reavaliação.", dose: "NV", nota: "SBP 2024: sal de cozinha como 1ª linha para granuloma umbilical (indolor e seguro). Técnica (tempo, frequência e duração) varia entre os estudos citados: conferir [NV]."}
  ],
  orient: `## O umbigo
- Mantenha o coto limpo e seco, com a fralda dobrada abaixo dele. Ele cai até o fim da 2ª semana.
- Não coloque faixa, moeda, esparadrapo, pó, pomada ou qualquer outra coisa.
- Um pouco de sangue quando o coto cai é comum. Se o sangramento não parar ou encharcar a fralda, ou se o coto não cair até 3 semanas, procure a unidade.
- **Procure atendimento imediatamente** se a pele em volta ficar vermelha e inchada, se sair pus com mau cheiro ou se o bebê tiver febre.
## Bolinha úmida no umbigo (granuloma)
Depois que o coto cai, pode ficar uma bolinha vermelha e úmida no fundo do umbigo. Se ela não secar até o bebê completar 4 semanas de vida, a equipe pode orientar o tratamento com sal de cozinha, que não dói.
## Umbigo saltado (hérnia umbilical)
- É comum e aumenta quando o bebê chora ou faz força. Não dói.
- Na maioria das crianças fecha sozinha até os 4 ou 5 anos. Moeda, faixa ou esparadrapo não ajudam e machucam a pele.
- **Procure urgência** se a hérnia ficar dura, roxa, dolorida, não voltar para dentro, ou se o bebê vomitar.
## Olho lacrimejando com remela
Muitos bebês nascem com o canal da lágrima ainda fechado: o olho lacrimeja e junta remela, mas fica branco, sem vermelhidão.
- Limpe com algodão e água fervida (fria) ou soro, de dentro para fora, um algodão para cada olho.
- Faça a massagem ensinada pela equipe: com o dedo limpo, aperte de leve o cantinho do olho, perto do nariz, e deslize para baixo. Várias vezes ao dia.
- Quase sempre melhora até 1 ano. Se não melhorar, a equipe encaminha ao oftalmologista.
## Procure atendimento no mesmo dia se
- O olho ficar vermelho, com muito pus, ou as pálpebras incharem, principalmente no primeiro mês.
- Aparecer inchaço vermelho e dolorido no canto do olho.
- O bebê não aguentar a luz, apertar muito os olhos, ou um olho parecer maior ou embaçado.
- Aparecer um brilho branco na pupila em fotos com flash.`,
  alarme: ["Vermelhidão e inchaço ao redor do umbigo, pus com mau cheiro ou febre", "Hérnia dura, dolorida, roxa ou que não volta, ou vômitos", "Olho muito vermelho, com pus ou pálpebras inchadas no 1º mês", "Inchaço vermelho e dolorido no canto do olho", "Bebê que não suporta a luz ou olho embaçado ou maior", "Brilho branco na pupila"],
  encaminhar: "Onfalite, encarceramento, conjuntivite neonatal, dacriocistite, suspeita de glaucoma congênito ou leucocoria → urgência/mesmo dia. Hérnia que persiste após 4–5 anos ou grande → cirurgia pediátrica. Obstrução do ducto lacrimal após 12 meses → oftalmologia.",
  sus: {nacional: "Cirurgia pediátrica e oftalmologia pela regulação.", betim: "Fluxo de cirurgia pediátrica e oftalmologia pediátrica em Betim: conferir [NV]."},
  evid: {resumo: "SBP 2024 (granuloma umbilical: sal comum como 1ª linha; coto limpo e seco) e Caderneta 2025 (coto). Hérnia umbilical e obstrução congênita do ducto lacrimal: história natural favorável descrita em coortes e consensos, citados sem conferência nesta sessão.", certeza: "Baixa a moderada (estimada)", fontes: ["sbp_pele2024", "caderneta_crianca"]},
  mudancas: ["Entrada nova (v44)."],
  nv: ["Técnica do sal no granuloma (tempo e número de aplicações).", "Critérios de cirurgia na hérnia umbilical e de sondagem do ducto lacrimal citados de memória.", "Fluxos de Betim para cirurgia e oftalmologia pediátricas."]
},
{
  id: "pu-nao-come", modulo: "pu", nome: "\"Meu filho não come\": apetite, seletividade alimentar e quando investigar", sistema: "Nutrição e crescimento", risco: "baixo",
  ciap: "T04", cid: "R63.3 · F98.2",
  tags: "não come falta de apetite inapetência seletividade alimentar neofobia criança enjoada para comer recusa alimentar fome vitamina para abrir o apetite estimulante de apetite TARE ARFID",
  alerta: "Perda ou parada de ganho de peso, engasgos ou tosse para comer, vômitos frequentes, dor para engolir, aceitação de pouquíssimos alimentos com repercussão nutricional, ou sinais de autismo: investigar.",
  guia: {rotulo: "Guia clínico",
    resumo: "A partir de 1 ano o apetite diminui porque o crescimento desacelera, e a recusa de alimentos novos (neofobia) é comum, sobretudo no 2º ano [C]. Se a criança cresce bem na curva, a quantidade é adequada (Guia 2019) [F]. O tratamento é orientação: sem forçar, sem chantagem, sem recompensa e sem trocar a refeição por lanche [F]. O Guia trata de menores de 2 anos; para crianças maiores – extrapolação: não estudado diretamente nesta população [I].",
    secoes: [
      {t: "Avaliar", b: [
        {ol: ["Curva de peso, comprimento e IMC na Caderneta: crescendo bem = quantidade adequada [F]", "Recordatório de um dia: leite (volume), sucos, lanches e beliscos entre as refeições, guloseimas [I]", "Como é a refeição: telas, pressão, castigo, \"aviãozinho\", porção servida, horários [F]", "Seletividade com repercussão: menos de 15–20 alimentos aceitos, exclusão de grupos inteiros, sofrimento intenso ou crescimento prejudicado → pensar em transtorno alimentar restritivo/evitativo (TARE) ou dificuldade sensorial [C]", "Sinais de alarme orgânico: disfagia, engasgos, vômitos, dor abdominal, diarreia crônica, sinais de alergia, anemia, sinais de autismo [C]"]},
        {ir: [["pu-crescimento", "Desvios do crescimento"], ["pu-dnpm", "Sinais de autismo"], ["pu-alimentacao", "Alimentação até 2 anos"]]}
      ]},
      {t: "Orientar", b: [
        {ul: ["Respeitar fome e saciedade; servir porções pequenas e repetir se a criança quiser [F]", "Não forçar, não ameaçar, não castigar, não premiar com doces ou presentes [F]", "Não substituir a refeição recusada por lanche ou leite [F]", "Oferecer de novo o alimento recusado em outros dias e de outras formas; podem ser necessárias 8 a 10 exposições ou mais [F]", "Recusar um alimento e aceitar outro do mesmo grupo não é motivo de preocupação [F]", "Comer junto com a família, sem TV ou celular [F]", "Horários regulares; evitar beliscos, sucos e excesso de leite entre as refeições [F/I]", "Envolver a criança no preparo e deixar escolher entre opções saudáveis [F]", "Não suspender a amamentação para a criança comer mais [F]"]},
        {alerta: "\"Vitaminas para abrir o apetite\", estimulantes de apetite (ciproeptadina e similares) e polivitamínicos não tratam a recusa alimentar e não são recomendados [C]. Suplementar só deficiências documentadas ou as previstas no programa (ferro, vitamina D) [I]."}
      ]},
      {t: "Fontes", b: [{ref: ["guia_menor2_2019", "caderneta_crianca"]}]}
    ]},
  S: `Criança de ___ anos/meses. Família refere que "não come" desde ___. Aceita ___ alimentos (quais ___). Leite ___ mL/dia, sucos ___, lanches ___. Refeições ___ (com telas / à mesa com a família / com pressão ou castigo). Engasgos ___, vômitos ___, dor para engolir ___. Evacuações ___. Desenvolvimento ___.`,
  O: `Peso ___ (P/I ___), comprimento/estatura ___ (C/I ___), IMC/I ___. Curva ___ (ascendente / estável / descendente). Palidez ___. Exame ___.`,
  A: `___ (apetite fisiológico da idade / seletividade alimentar), crescimento ___ (adequado / a investigar).`,
  P: `- Mostro a curva de crescimento à família.
- Oriento alimentação responsiva: sem pressão, sem recompensa, sem trocar a refeição.
- Retorno em ___ para reavaliar a curva.`,
  orient: `## Por que a criança passa a comer menos
Depois de 1 ano a criança cresce mais devagar e, por isso, precisa de menos comida do que a família imagina. Também é normal ela recusar alimentos novos ou que antes aceitava, principalmente por volta dos 2 anos. Isso costuma passar.
Se ela está crescendo bem na curva da Caderneta, está comendo o suficiente.
## O que ajuda
- Sirva pouca comida no prato. Se ela comer tudo e quiser mais, repita.
- Coma junto com a criança, à mesa, com a TV desligada e sem celular.
- Ofereça de novo, em outros dias, o alimento que ela recusou, preparado de outro jeito (cozido, assado, cru, em purê). Às vezes são necessárias 8 a 10 tentativas.
- Coloque legumes e verduras no prato todos os dias, mesmo que ela não coma. Deixe a criança escolher entre duas opções saudáveis.
- Deixe a criança ajudar a lavar, montar e servir a comida.
- Mantenha horários. Evite beliscos, suco, biscoito e muito leite entre as refeições: a criança chega sem fome.
## O que atrapalha
- Forçar, brigar, ameaçar, castigar ou não deixar sair da mesa.
- Prometer doce, presente ou celular para ela comer.
- Trocar o almoço ou o jantar recusado por lanche, mingau ou mamadeira: a criança aprende que, se recusar, ganha outra coisa.
- Distrair com TV ou celular para ela comer sem perceber.
- Parar de amamentar para ela comer mais.
## Vitaminas para abrir o apetite
Não são necessárias e não resolvem. A criança só precisa das vitaminas indicadas pela equipe (como ferro e vitamina D na idade certa).
## Procure a equipe se
- A criança perder peso ou parar de crescer na curva.
- Engasgar, tossir ou vomitar com frequência ao comer, ou sentir dor para engolir.
- Aceitar pouquíssimos alimentos e ficar muito angustiada diante de comidas novas.
- Você notar atraso na fala, pouco contato visual ou comportamentos repetitivos.`,
  alarme: ["Perda de peso ou criança que parou de crescer", "Engasgos, tosse ou vômitos frequentes ao comer", "Dor para engolir ou recusa até de líquidos", "Diarreia que não passa ou sangue no cocô", "Criança muito abatida ou pálida"],
  encaminhar: "Curva descendente ou baixo peso → investigação (ver desvios do crescimento). Disfagia, engasgos recorrentes → avaliação pediátrica e fonoaudiologia. Seletividade grave (TARE) ou sinais de TEA → eMulti, saúde mental infantil ou neuropediatria conforme o fluxo.",
  sus: {nacional: "Nutrição, fonoaudiologia e psicologia pela eMulti; CAPSi para casos graves.", betim: "Fluxo de eMulti e saúde mental infantil em Betim: conferir [NV]."},
  evid: {resumo: "Guia Alimentar para Crianças Menores de 2 Anos (MS, 2019): apetite menor após 1 ano, neofobia, exposição repetida (8 a 10 vezes), alimentação responsiva sem pressão nem recompensa e uso da curva como critério. TARE e estimulantes de apetite citados sem conferência nesta sessão.", certeza: "Baixa a moderada (estimada)", fontes: ["guia_menor2_2019", "caderneta_crianca"]},
  mudancas: ["Entrada nova (v44)."],
  nv: ["Critérios de TARE (ARFID) e posição sobre estimulantes de apetite citados de memória.", "Fluxo de eMulti e saúde mental infantil em Betim."]
},
{
  id: "pu-sono", modulo: "pu", nome: "Sono do bebê e da criança: quanto dormir, rotina, despertares e sono seguro", sistema: "Desenvolvimento e condições", risco: "baixo",
  ciap: "P06", cid: "G47.9 · F51.9",
  tags: "sono bebê criança dorme pouco acorda à noite despertares noturnos rotina higiene do sono cochilo soneca cama compartilhada berço sono seguro morte súbita ronco apneia terror noturno pesadelo melatonina telas antes de dormir",
  alerta: "Ronco frequente com pausas respiratórias, respiração pela boca e sonolência ou agitação durante o dia (apneia obstrutiva); sono que piorou de repente com dor, febre ou choro inconsolável; movimentos rítmicos ou crises durante o sono: avaliar.",
  guia: {rotulo: "Guia clínico",
    resumo: "Despertares noturnos breves são normais. A higiene do sono (horários regulares, ritual curto, ambiente adequado, sem telas 1 h antes de dormir) é a base da prevenção e do tratamento (SBP 2021) [F]. Até 1 ano, sono seguro: de barriga para cima, no berço, no quarto dos pais (SBP 2023) [F].",
    secoes: [
      {t: "Quanto dormir", b: [
        {tab: {h: ["Idade", "Sono em 24 horas (com cochilos)"], r: [
          ["4 a 12 meses", "12 a 16 horas"],
          ["1 a 2 anos", "11 a 14 horas"],
          ["3 a 5 anos", "10 a 13 horas"],
          ["6 a 12 anos", "9 a 12 horas"],
          ["13 a 18 anos", "8 a 10 horas"]]}, nota: "SBP 2021 (consenso AASM 2016) [F]. Entre 6 e 9 meses a maioria dorme a noite inteira e faz 2–3 cochilos; o cochilo diurno desaparece até 5 anos – sonolência diurna depois disso sugere privação de sono noturno [F]."}
      ]},
      {t: "Higiene do sono", b: [
        {ul: ["Rotina diurna ativa e horários regulares para dormir e acordar, também nos fins de semana [F]", "Ritual breve (até 30 minutos) e prazeroso: banho, massagem, história, luzes apagadas [F]", "Ambiente: temperatura agradável, escuro e silencioso [F]", "Sem telas pelo menos 1 hora antes de dormir [F]; sem TV ou computador no quarto até 10 anos (Caderneta) [F]", "Os pais usam a mesma estratégia [F]", "Estimular a criança a adormecer na própria cama ou berço [F]; objeto de transição (paninho, boneco) a partir de 12 meses [F/C]", "Evitar chocolate, café e refrigerante perto da hora de dormir [F]; também chá preto e mate [C]"]},
        {p: "Despertares breves entre os ciclos de sono são normais e a criança volta a dormir sem intervenção [F]; aprender a adormecer sozinha facilita isso [C]. Técnicas de extinção gradual (esperar intervalos crescentes antes de intervir) são opções para famílias que desejam, a partir de 6 meses [C]."}
      ]},
      {t: "Sono seguro (até 1 ano)", b: [
        {ul: ["De barriga para cima, em todo sono [F]", "Berço com colchão firme e plano, sem travesseiro, protetor, ninho, cobertor solto ou pelúcia [F]", "No quarto dos pais pelo menos até 6 meses, de preferência até 12 [F]", "Sofá e poltrona: os locais mais perigosos; cama de adulto: contraindicada, com risco muito maior se o adulto fuma, bebeu, usa sedativos ou está exausto [F]", "Sem elevação da cabeceira, mesmo com refluxo; bebê-conforto não é local de sono de rotina; parar de enrolar quando começar a tentar rolar (por volta de 3 meses) [F]", "Ambiente sem fumaça de cigarro; não agasalhar demais; amamentar protege [F]"]},
        {ir: [["pu-choro-colica", "Choro e cólica"], ["pu-telas", "Telas"]]}
      ]},
      {t: "Quando investigar", b: [
        {ul: ["Ronco habitual (3 ou mais noites por semana) com pausas, respiração pela boca, sono agitado, sudorese, enurese ou sonolência, agitação e dificuldade escolar: suspeita de apneia obstrutiva (hipertrofia de amígdalas e adenoides) → otorrinolaringologia [C]", "Terror noturno e sonambulismo: comuns e benignos em pré-escolares; garantir segurança e não acordar a criança; investigar se frequentes ou com movimentos estereotipados [C]", "Insônia persistente apesar da higiene do sono, ou associada a TEA ou TDAH: avaliação especializada [C]", "Melatonina: não é a primeira medida; em crianças é uso fora da bula, restrito a casos selecionados (ex.: TEA, TDAH) com especialista [C]; a autorização da ANVISA para suplementos é para adultos (2021) [NV]"]}
      ]},
      {t: "Fontes", b: [{ref: ["sbp_sono2021", "sbp_sono2023"]}]}
    ]},
  S: `Criança de ___. Dorme ___ h/noite, cochilos ___. Hora de dormir ___, de acordar ___. Rotina ___. Onde dorme ___ (berço/cama própria/cama dos pais). Despertares ___ vezes/noite, como volta a dormir ___. Telas antes de dormir ___. Ronco ___, pausas ___, respiração oral ___. Sonolência ou agitação diurna ___.`,
  O: `Estado geral ___. Crescimento ___. Amígdalas ___, respiração ___. Desenvolvimento ___.`,
  A: `Sono ___ (adequado para a idade / higiene do sono inadequada / suspeita de distúrbio respiratório do sono).`,
  P: `- Oriento higiene do sono e sono seguro.
- Retorno em ___.`,
  orient: `**Ligue 192 ou vá à urgência** se o bebê ficar roxo, mole ou parar de respirar, mesmo que depois volte ao normal.
## Quanto a criança precisa dormir (somando a noite e os cochilos)
- 4 a 12 meses: 12 a 16 horas.
- 1 a 2 anos: 11 a 14 horas.
- 3 a 5 anos: 10 a 13 horas.
- 6 a 12 anos: 9 a 12 horas.
Cada criança é um pouco diferente. Acordar rapidinho durante a noite é normal em qualquer idade.
## Bebê com menos de 1 ano: sono seguro
- Sempre de barriga para cima, inclusive nos cochilos.
- No berço, com colchão firme, sem travesseiro, protetor de berço, ninho, cobertor solto ou bichinhos.
- O berço fica no quarto dos pais pelo menos até 6 meses.
- O lugar mais seguro é o berço. Nunca durma com o bebê no sofá ou na poltrona: é o mais perigoso.
- A cama dos pais também não é recomendada, e o risco é muito maior se alguém fuma, bebeu, usou remédio ou droga, ou está exausto. Se for amamentar à noite deitada e puder cochilar, faça isso na cama (nunca no sofá) e depois volte o bebê para o berço.
- Não eleve a cabeceira do berço, nem por refluxo. Bebê-conforto e cadeirinha não são lugar para dormir: ao chegar, passe o bebê para o berço.
- Se o bebê for enrolado num pano, pare quando ele começar a tentar rolar.
- Ninguém fuma perto do bebê. Não agasalhe demais.
## Rotina que ajuda a dormir
- Horários parecidos para dormir e acordar todos os dias, inclusive no fim de semana.
- Durante o dia: luz, brincadeiras e passeios. À noite: casa mais calma e luz baixa.
- Um ritual curto e sempre igual antes de dormir (banho, pijama, escovar os dentes, história, luz apagada), de no máximo 30 minutos.
- Desligue TV, celular e tablet pelo menos 1 hora antes de dormir. Sem TV no quarto.
- Nada de café, chá preto, chocolate ou refrigerante à noite.
- Coloque a criança na cama sonolenta, mas ainda acordada, para ela aprender a adormecer sozinha.
- Um paninho ou bichinho preferido pode ajudar depois de 1 ano.
- Não dê melatonina, chás calmantes ou remédios para dormir sem orientação médica.
- Os adultos da casa combinam e fazem do mesmo jeito.
## Quando a criança acorda à noite
Fale baixo, com pouca luz, sem brincadeira e sem tela. Dê tempo para ela voltar a dormir. Se for preciso, conforte rapidamente e coloque de volta na cama.
## Procure a equipe se
- A criança ronca quase todas as noites, parece parar de respirar por instantes ou dorme de boca aberta.
- Fica muito sonolenta, irritada ou agitada durante o dia.
- O sono piorou de repente, com dor, febre ou choro diferente.
- Tem sustos, movimentos ou crises repetidas durante o sono.`,
  alarme: ["Bebê roxo, mole ou que parou de respirar, mesmo que tenha voltado (urgência)", "Ronco forte quase todas as noites, com pausas", "Sonolência ou agitação importantes durante o dia", "Choro diferente, com dor ou febre, que atrapalha o sono", "Movimentos repetidos ou crises durante o sono"],
  encaminhar: "Suspeita de apneia obstrutiva → otorrinolaringologia. Parassonias frequentes ou movimentos estereotipados no sono → neuropediatria. Insônia persistente com TEA/TDAH → avaliação especializada.",
  sus: {nacional: "Orientação na APS; otorrino e neuropediatria pela regulação.", betim: "Fluxo de otorrinolaringologia e neuropediatria em Betim: conferir [NV]."},
  evid: {resumo: "SBP 2021 (higiene do sono, durações AASM 2016) e SBP 2023 (sono seguro, recomendações da AAP). Técnicas de extinção, apneia e parassonias citadas sem conferência nesta sessão.", certeza: "Moderada para sono seguro; baixa a moderada para higiene do sono (estimada)", fontes: ["sbp_sono2021", "sbp_sono2023"]},
  mudancas: ["Entrada nova (v44)."],
  nv: ["Técnicas comportamentais (extinção gradual) e uso de melatonina citados de memória.", "Fluxos de otorrino e neuropediatria em Betim."]
},
{
  id: "pu-telas", modulo: "pu", nome: "Telas: TV, celular e tablet por idade", sistema: "Desenvolvimento e condições", risco: "baixo",
  ciap: "Z29", cid: "Z72.8",
  tags: "telas tempo de tela celular tablet televisão videogame criança menor de 2 anos desenvolvimento fala atraso linguagem sono obesidade redes sociais smartphone",
  alerta: "Atraso de fala ou de interação social em criança com muita exposição a telas: avaliar o desenvolvimento (inclusive sinais de autismo), não atribuir só às telas.",
  guia: {rotulo: "Guia clínico",
    resumo: "Menores de 2 anos: sem telas (exceto videochamada com a família); 2 a 5 anos: no máximo 1 hora por dia, com conteúdo adequado e um adulto junto; sem TV ou computador no quarto até 10 anos e sem celular próprio antes de 12 (Caderneta 2025) [F].",
    secoes: [
      {t: "Recomendações por idade", b: [
        {tab: {h: ["Idade", "Recomendação"], r: [
          ["Menos de 2 anos", "Não expor a telas; videochamada com a família é exceção [F/C]"],
          ["2 a 5 anos", "No máximo 1 hora por dia, com conteúdo adequado à idade [F], de preferência com um adulto junto [C]"],
          ["Até 10 anos", "Sem TV ou computador no próprio quarto [F]"],
          ["Antes de 12 anos", "Sem celular ou smartphone próprio [F]"],
          ["Todas as idades", "Sem telas nas refeições e 1 hora antes de dormir; adultos dão o exemplo [F]"]]}, nota: "Caderneta da Criança 2025 [F]; SBP 2021 (telas antes de dormir) [F]; guia do Governo Federal de 2025 (telas só a partir de 2 anos, exceto videochamadas; smartphone próprio não antes de 12) [C]."}
      ]},
      {t: "Na consulta", b: [
        {ul: ["Perguntar quanto tempo, quais conteúdos, em que horários e se há telas no quarto e nas refeições [I]", "Excesso de telas associa-se a menos brincadeira, interação e atividade física e a obesidade (Caderneta) [F]; telas antes de dormir pioram o sono (SBP 2021) [F]", "Atraso de linguagem ou de interação: aplicar a vigilância do desenvolvimento e o M-CHAT-R quando indicado; reduzir telas e aumentar a interação, sem atrasar a investigação [I]", "Ajudar a família a montar um plano realista (horários sem tela, alternativas de brincadeira) [I]"]},
        {ir: [["pu-dnpm", "Atraso do desenvolvimento e autismo"], ["pu-sono", "Sono"]]}
      ]},
      {t: "Fontes", b: [{ref: ["caderneta_crianca", "sbp_sono2021", "guia_telas2025", "oms_telas2019"]}]}
    ]},
  orient: `## Por que limitar as telas
As crianças aprendem brincando, conversando e convivendo com as pessoas. O tempo na frente de TV, celular, tablet e videogame tira esse tempo, pode atrasar a fala, piorar o sono e favorecer o ganho de peso.
## Por idade
- **Menos de 2 anos:** sem telas. Videochamada com a família pode.
- **2 a 5 anos:** no máximo 1 hora por dia, com desenhos e programas para a idade, e de preferência com um adulto junto, conversando sobre o que estão vendo.
- **Até 10 anos:** sem TV, computador ou videogame no quarto da criança.
- **Antes de 12 anos:** a criança não deve ter celular próprio.
## Combinados para a família
- Nada de tela durante as refeições.
- Desligue tudo pelo menos 1 hora antes de dormir.
- Não use o celular para a criança comer, se acalmar ou ficar quieta. Converse, cante, leia, ofereça brinquedos simples.
- Os adultos também guardam o celular quando estão com a criança: ela aprende pelo exemplo.
- Prefira brincadeiras ao ar livre, livros, massinha, desenho, blocos e música.
## Procure a equipe se
A criança fala pouco para a idade, não olha nos olhos, não atende pelo nome ou só se acalma com a tela. Isso precisa ser avaliado.`,
  alarme: ["Criança que não fala ou fala bem menos que outras da mesma idade", "Pouco contato visual ou não atende quando chamada", "Crises intensas quando a tela é retirada"],
  encaminhar: "Atraso de desenvolvimento ou sinais de autismo → ver item de desenvolvimento e o fluxo de avaliação.",
  sus: {nacional: "Orientação na APS; Caderneta da Criança 2025.", betim: "—"},
  evid: {resumo: "Caderneta da Criança 2025 (MS): sem telas antes de 2 anos; até 1 h/dia de 2 a 5 anos; sem TV ou computador no quarto até 10 anos; sem celular antes de 12. SBP 2021: sem telas 1 h antes de dormir. OMS 2019 e guia federal de 2025 na mesma direção. Evidência majoritariamente observacional.", certeza: "Baixa (observacional, estimada)", fontes: ["caderneta_crianca", "sbp_sono2021", "guia_telas2025", "oms_telas2019"]},
  mudancas: ["Entrada nova (v44)."],
  nv: ["Texto original do guia federal de 2025 (conferido só por reportagem)."]
},
{
  id: "pu-desfralde", modulo: "pu", nome: "Desfralde: quando começar, como fazer e quando investigar", sistema: "Desenvolvimento e condições", risco: "baixo",
  ciap: "P22 · U04", cid: "Z00.1 · F98.0",
  tags: "desfralde tirar a fralda treinamento esfincteriano penico redutor de assento xixi na cama enurese noturna escape regressão criança segura cocô",
  alerta: "Perda de urina constante (gotejamento), jato fraco, infecções urinárias de repetição, constipação importante, alterações na região lombossacra ou perda de controle já adquirido com sinais de sofrimento: investigar (incluindo violência).",
  guia: {rotulo: "Guia clínico",
    resumo: "O momento é dado pelos sinais de prontidão, em geral entre 24 e 36 meses; no Brasil, o desfralde começa em média aos 22 meses e termina aos 27 meses. Abordagem orientada para a criança, com penico, elogios e sem punição; recusa → pausa de 1 a 3 meses (SBP/SBU 2019) [F].",
    secoes: [
      {t: "Sinais de prontidão (principais)", b: [
        {ul: ["Imita os adultos, quer agradar e quer fazer sozinha [F]", "Anda, senta com estabilidade, abaixa e sobe a roupa [F]", "Entende e segue comandos simples; tem palavras para xixi e cocô [F]", "Avisa ou mostra que vai fazer ou que fez; incomoda-se com a fralda molhada [F]", "Fica seca por 2 horas ou mais durante o dia; consegue ficar sentada no penico 3 a 5 minutos [F]"]}
      ]},
      {t: "Como fazer", b: [
        {ol: ["Apresentar o penico antes, como objeto da criança, sem cobrança [F]", "Sentar no penico vestida e depois sem fralda, em horários do dia (ao acordar, após refeições, antes do banho e de dormir) por poucos minutos – nunca por muito tempo [F]", "Penico é preferível no início (pés apoiados, melhor posição); no vaso, redutor de assento e apoio para os pés [F]", "Roupas fáceis de tirar; após sucessos repetidos, calcinha ou cueca [F]", "Meninos começam sentados; meninas limpam da frente para trás [F]", "Elogiar sem guloseimas; nunca punir os escapes [F]", "Começar ao mesmo tempo em casa e na creche [F]", "Tratar a constipação antes ou durante: ela atrapalha o desfralde [F]"]},
        {p: "Recusa: pausa de 1 a 3 meses e recomeçar [F]. O controle noturno vem depois do diurno; xixi na cama é comum até 5 anos [C]."}
      ]},
      {t: "Quando investigar", b: [
        {ul: ["36 meses ou mais sem sinais de prontidão, ou 48 meses ou mais sem controle diurno [F]", "Considerar: deficiência intelectual, TEA, TDAH, transtornos de comportamento, espinha bífida oculta ou estigma sacral, bexiga ou intestino neurogênicos, hipotonia, estresse tóxico, abuso sexual, constipação [F]", "Enurese noturna após 5 anos, ou perda de controle depois de adquirido: avaliar (ITU, constipação, diabetes, estresse) [C]; polidipsia, poliúria ou emagrecimento → glicemia no mesmo dia [C]"]},
        {ir: [["pu-constipacao", "Constipação"], ["pu-dnpm", "Desenvolvimento e autismo"], ["po-violencia-vulneraveis", "Violência contra criança"]]}
      ]},
      {t: "Fontes", b: [{ref: ["sbp_desfralde2019"]}]}
    ]},
  orient: `## Quando começar
Não existe uma idade certa: a criança mostra quando está pronta, geralmente entre 2 e 3 anos. Sinais de que está pronta:
- Avisa ou mostra que vai fazer ou que fez xixi ou cocô, e se incomoda com a fralda suja.
- Fica com a fralda seca por 2 horas ou mais.
- Consegue sentar no penico por alguns minutos, abaixar e subir a roupa.
- Entende pedidos simples e quer fazer as coisas sozinha.
Começar antes da hora costuma demorar mais e gerar briga.
## Como fazer
- Deixe a criança conhecer o penico antes: sentar de roupa, brincar perto, ver os adultos usando o banheiro.
- Coloque no penico em alguns horários (ao acordar, depois das refeições, antes do banho e de dormir), por poucos minutos. Não deixe sentada muito tempo.
- Se usar o vaso, coloque um redutor de assento e um banquinho para os pés.
- Use roupas fáceis de tirar. Depois de vários acertos, passe para calcinha ou cueca.
- Meninos podem começar fazendo xixi sentados. Ensine as meninas a se limparem da frente para trás.
- Elogie cada tentativa, sem dar doces como prêmio.
- **Escapes vão acontecer. Não brigue e não castigue.** Limpe com calma.
- Combine com a creche ou escola para todos fazerem do mesmo jeito.
- Se a criança faz cocô duro ou com dor, trate o intestino preso: isso atrapalha muito.
## Se a criança recusar
Pare por 1 a 3 meses e tente de novo. Isso é comum e não é falha de ninguém.
## À noite
Ficar seco à noite costuma vir depois. Fazer xixi na cama é comum até os 5 anos. Mantenha a fralda à noite enquanto for preciso.
## Procure a equipe se
- A criança tem 3 anos e não mostra nenhum sinal de estar pronta, ou tem 4 anos e ainda não controla o xixi durante o dia.
- Tem mancha, tufo de pelos ou covinha nas costas, perto do bumbum, ou fraqueza nas pernas.
- Tem muita sede, faz muito xixi ou emagreceu: procure no mesmo dia.
- Vive molhada, pinga xixi o tempo todo ou o jato é fraco.
- Tem dor para fazer xixi, febre ou infecções urinárias.
- Voltou a fazer xixi ou cocô na roupa depois de já ter aprendido, ou mudou de comportamento.`,
  alarme: ["Muita sede, muito xixi, voltou a molhar a cama ou emagreceu (pode ser diabetes: procurar no mesmo dia)", "Dor ou ardência para urinar, febre ou xixi com cheiro forte", "Criança que vive molhada ou pinga xixi o tempo todo", "Perda de controle depois de já ter aprendido", "Fraqueza nas pernas ou alteração nas costas (mancha, tufo de pelos, covinha)"],
  encaminhar: "≥ 48 meses sem controle diurno, sinais neurológicos ou sacrais, ITU de repetição → pediatria/urologia pediátrica. Suspeita de violência → notificar e acionar a rede de proteção.",
  sus: {nacional: "Orientação na APS; urologia pediátrica pela regulação.", betim: "—"},
  evid: {resumo: "Manual SBP/SBU (2019): sinais de prontidão, abordagem orientada para a criança, penico, elogio sem recompensa, pausa na recusa e critérios para investigar. Enurese noturna até 5 anos como normal citada sem conferência nesta sessão.", certeza: "Baixa (consenso, estimada)", fontes: ["sbp_desfralde2019"]},
  mudancas: ["Entrada nova (v44)."],
  nv: ["Definição de enurese (≥ 5 anos) citada de memória."]
},
{
  id: "pu-nariz", modulo: "pu", nome: "Nariz entupido no bebê e na criança: lavagem nasal e o que não usar", sistema: "Queixas comuns do bebê", risco: "baixo",
  ciap: "R07 · R74", cid: "J00 · R09.8",
  tags: "nariz entupido obstrução nasal congestão nasal bebê lavagem nasal soro fisiológico seringa aspirador nasal coriza resfriado descongestionante nafazolina Neosoro Sorine vasoconstritor ronco bebê",
  alerta: "Esforço para respirar (tiragem, batimento de asa do nariz, gemência), respiração rápida, recusa de mamadas, febre em menor de 3 meses ou cianose: avaliação no mesmo dia. Secreção de um lado só, com mau cheiro: pensar em corpo estranho.",
  guia: {rotulo: "Guia clínico",
    resumo: "Obstrução nasal leve é comum no lactente (narinas estreitas, resfriados). Lavagem com soro fisiológico 0,9% e aspiração suave antes das mamadas e do sono são as medidas de conforto; a evidência de benefício é limitada, mas o risco é baixo [C]. Vasoconstritores nasais de uso adulto são contraindicados abaixo de 12 anos (bula da nafazolina) [F]; em qualquer criança, só com prescrição [C].",
    secoes: [
      {t: "Avaliar", b: [
        {ul: ["Bebê bem, mamando, sem esforço respiratório: medidas de conforto [I]", "Sinais de gravidade: taquipneia, tiragem, gemência, batimento de asa nasal, apneia, cianose, recusa alimentar, febre em < 3 meses → avaliação no mesmo dia [C]", "Obstrução desde o nascimento, unilateral ou que impede mamar: atresia de coanas, estenose de abertura piriforme → otorrino [C]", "Secreção unilateral fétida: corpo estranho [C]; pilha ou bateria de botão no nariz = urgência imediata [C]", "Obstrução crônica com ronco: rinite alérgica, hipertrofia de adenoides [C]"]},
        {ir: [["resfriado", "Resfriado comum"], ["bronquiolite", "Bronquiolite"], ["rinite", "Rinite alérgica"], ["pu-sono", "Sono e ronco"]]}
      ]},
      {t: "Lavagem nasal", b: [
        {ul: ["Soro fisiológico 0,9% de farmácia (cloreto de sódio 0,9%, sem outros componentes), em temperatura ambiente [C]", "Bebê: algumas gotas a cerca de 1 mL em cada narina, com a criança de lado ou sentada, com conta-gotas ou seringa sem agulha, sem pressão forte [NV]", "Criança maior: 2 a 5 mL em cada narina, ou mais, conforme tolerância [NV]", "Antes das mamadas, das refeições e do sono, quantas vezes for necessário [I]", "Aspirador nasal manual com cuidado; evitar hastes e cotonetes dentro do nariz [C]"]},
        {alerta: "Não usar descongestionantes vasoconstritores (nafazolina, oximetazolina, fenilefrina e similares, inclusive associados ao soro) em crianças: apresentações de uso adulto são contraindicadas abaixo de 12 anos e podem causar intoxicação com sonolência, queda da temperatura e bradicardia (bula da nafazolina) [F]. Apresentações pediátricas não foram conferidas nesta revisão [NV]. Também não usar antigripais, anti-histamínicos sedativos ou antitussígenos em menores de 2 anos [C]."}
      ]},
      {t: "Fontes", b: [{ref: ["bula_nafazolina"]}]}
    ]},
  rx: [
    {trilha: "ambos", titulo: "Lavagem nasal com soro fisiológico", texto: "USO NASAL\n1. Cloreto de sódio 0,9% (soro fisiológico) – ampola de 10 mL ______ ___ ampolas\n   Pingar ___ mL em cada narina (bebê: algumas gotas a 1 mL; criança maior: 2 a 5 mL), com a criança de lado ou sentada, antes das mamadas e do sono, quantas vezes for necessário.", dose: "NV", nota: "Volumes por consenso [NV]; evidência de benefício limitada e risco baixo. A REMUME Betim tem cloreto de sódio 0,9% só como solução injetável (ampola de 10 mL e frascos), sem apresentação nasal [F]; a ampola, de uso único, pode ser usada para a lavagem [I]."}
  ],
  orient: `## Por que o nariz do bebê entope
O nariz do bebê é pequeno, e qualquer secreção ou resfriado já atrapalha a respiração e a mamada. Barulho de nariz entupido e espirros são comuns e, se o bebê está bem e mamando, não são sinal de doença grave.
## Lavagem com soro
- Use soro fisiológico 0,9% de farmácia, em temperatura ambiente.
- Deite o bebê de lado (ou deixe a criança maior sentada, com a cabeça um pouco para a frente).
- Pingue o soro em cada narina: no bebê, algumas gotas até 1 mL; na criança maior, 2 a 5 mL. Use conta-gotas ou seringa sem agulha, devagar, sem força.
- Limpe o que sair com um paninho. Se precisar, use um aspirador nasal com cuidado.
- Faça antes de mamar, antes das refeições e antes de dormir, quantas vezes for preciso.
- Não coloque haste, cotonete ou outros objetos dentro do nariz.
## Não use
- **Descongestionantes nasais** (nafazolina, oximetazolina e outros "que desentopem o nariz"), mesmo os misturados com soro: podem causar intoxicação grave em crianças, com sonolência, coração lento e queda da temperatura. Nunca antes dos 12 anos sem receita. Confira no rótulo do soro que ele tem só cloreto de sódio 0,9%.
- Xaropes para tosse, antigripais e antialérgicos sem receita, principalmente antes dos 2 anos.
- Vapor de água quente ou panela no fogo para inalar: risco de queimadura.
## O que mais ajuda
- Ofereça o peito com mais frequência. Bebê com menos de 6 meses em aleitamento exclusivo: só o peito, sem água ou chá. Maiores: peito e água.
- Mantenha o ambiente arejado e sem fumaça de cigarro.
## Procure atendimento no mesmo dia se
- A criança respirar rápido, com esforço, com a barriga afundando ou as costelas aparecendo, ou fazendo barulho (gemido, chiado).
- Ficar roxa, fizer pausas na respiração ou recusar o peito.
- For bebê com menos de 3 meses com febre.
- Sair secreção com mau cheiro por uma narina só (pode ser objeto no nariz). Se você sabe que a criança colocou pilha ou bateria no nariz, vá à urgência imediatamente.`,
  alarme: ["Respiração rápida, com esforço ou com gemido", "Lábios roxos ou pausas na respiração", "Bebê que recusa o peito ou mama muito pouco", "Febre em bebê menor de 3 meses", "Secreção com mau cheiro saindo de uma narina só"],
  encaminhar: "Desconforto respiratório → urgência. Obstrução nasal desde o nascimento ou que impede a mamada, ou crônica com ronco → otorrinolaringologia. Corpo estranho nasal → otorrino/urgência.",
  sus: {nacional: "Cloreto de sódio 0,9% (RENAME); apresentação nasal na RENAME: conferir [NV].", betim: "REMUME Betim: cloreto de sódio 0,9% solução injetável (ampola de 10 mL e frascos), sem apresentação nasal [F]."},
  evid: {resumo: "Lavagem nasal com soro fisiológico: medida de conforto de baixo risco e evidência limitada (citado de memória). Vasoconstritores tópicos: risco de intoxicação em crianças; a bula do produto adulto de nafazolina contraindica abaixo de 12 anos.", certeza: "Baixa (estimada)", fontes: ["bula_nafazolina", "rename"]},
  mudancas: ["Entrada nova (v44)."],
  nv: ["Volumes de soro por idade (consenso).", "Apresentações pediátricas de vasoconstritores nasais e suas idades na bula.", "Apresentação nasal de cloreto de sódio na RENAME."]
},
{
  id: "pu-sol-repelente", modulo: "pu", nome: "Proteção solar e repelente por idade", sistema: "Queixas comuns do bebê", risco: "baixo",
  ciap: "S80 · A98", cid: "Z29.8",
  tags: "protetor solar filtro solar bebê sol exposição solar vitamina D banho de sol repelente icaridina IR3535 DEET citronela mosquito dengue picada idade mínima",
  alerta: "Queimadura solar com bolhas extensas, febre ou prostração, ou sinais de insolação (vômitos, sonolência, pele quente e seca): avaliação no mesmo dia.",
  guia: {rotulo: "Guia clínico",
    resumo: "Antes de 6 meses: sem sol direto e sem filtro solar – proteção com sombra, roupas e chapéu; de 6 meses a 2 anos, filtro mineral (SBP 2024) [F]. Banho de sol não é indicado para vitamina D nem para icterícia [F]. Repelentes conforme a idade (SBP 2025) e o rótulo [F].",
    secoes: [
      {t: "Sol", b: [
        {tab: {h: ["Idade", "Orientação"], r: [
          ["Menos de 6 meses", "Evitar sol direto; sombra, guarda-sol, roupas leves de manga comprida e chapéu; filtro solar não recomendado por falta de estudos de segurança [F]"],
          ["6 meses a 2 anos", "Filtro solar mineral (óxido de zinco, dióxido de titânio) nas áreas expostas, além das barreiras [F]"],
          ["Todas as idades", "Evitar o sol entre 10 e 16 horas [C]"],
          ["A partir de 6 meses", "Filtro com FPS 30 ou mais, aplicado 15–30 min antes, reaplicado a cada 2 horas e após água ou suor [C]"]]}, nota: "SBP 2024 [F]. A vitamina D do lactente é suplementada em gotas; exposição solar intencional para vitamina D não é recomendada [F]."}
      ]},
      {t: "Repelente", b: [
        {tab: {h: ["Idade", "Repelente (SBP 2025)"], r: [
          ["Menos de 3 meses", "Só barreiras físicas (mosquiteiro, roupas) [F]"],
          ["3 a 6 meses", "Icaridina, só se a exposição for inevitável [F]"],
          ["6 meses a 2 anos", "Icaridina ou IR3535, 1 vez ao dia [F]"],
          ["2 a 7 anos", "Repelente infantil, uso ocasional, até 2 vezes ao dia [F]"],
          ["7 a 12 anos", "Repelente infantil, até 3 vezes ao dia [F]"],
          ["Mais de 12 anos", "Repelentes de adulto, até 3 vezes ao dia [F]"]]}, nota: "Sempre respeitar também a idade mínima do rótulo [I]. O rótulo e a SBP podem divergir (a SBP 2015 liberava icaridina só acima de 2 anos): não usar produto cujo rótulo não inclua a idade da criança; abaixo de 6 meses, barreiras físicas primeiro [I]; idades nos rótulos atuais [NV]. Aplicar com a mão do adulto, longe de olhos, boca e mãos da criança; não dormir com repelente; protetor solar primeiro e repelente 20–40 min depois; preferir loção a spray; evitar produtos combinados filtro + repelente; pulseiras de citronela e aparelhos ultrassônicos não funcionam (SBP 2015) [F]."},
        {ir: [["pu-pele", "Pele do bebê e estrófulo"], ["pu-ictericia", "Icterícia (sem banho de sol)"]]}
      ]},
      {t: "Fontes", b: [{ref: ["sbp_pele2024", "sbp_picadas2025", "sbp_repel2015"]}]}
    ]},
  orient: `## Sol
- **Bebê com menos de 6 meses:** não deve ficar no sol direto. Use sombra, guarda-sol, roupas leves de manga comprida e chapéu. Protetor solar não é indicado nessa idade.
- **Banho de sol não é necessário:** a vitamina D do bebê é dada em gotas, e o sol não trata o amarelão.
- **De 6 meses a 2 anos:** além da sombra e das roupas, use protetor solar próprio para bebês, de preferência mineral (com óxido de zinco ou dióxido de titânio no rótulo).
- **Em todas as idades:** evite o sol forte entre 10 e 16 horas.
- **A partir de 6 meses:** use protetor com FPS 30 ou mais, passe 15 a 30 minutos antes de sair e reaplique a cada 2 horas e depois de entrar na água ou suar.
- Nos dias quentes, ofereça o peito mais vezes. Bebê com menos de 6 meses em aleitamento exclusivo: só o peito, sem água ou chá. Maiores: peito e água.
## Repelente
- **Menos de 3 meses:** não use. Proteja com mosquiteiro no berço e no carrinho, telas nas janelas e roupas compridas.
- **3 a 6 meses:** só com orientação da equipe, quando não houver outro jeito.
- **6 meses a 2 anos:** repelente com icaridina ou IR3535 (o nome vem no rótulo), 1 vez ao dia.
- **2 a 7 anos:** repelente infantil, até 2 vezes ao dia. **7 a 12 anos:** até 3 vezes ao dia.
- Sempre respeite a idade mínima escrita no rótulo. Se o rótulo não indicar a idade do seu filho, não use.
## Como passar o repelente
- Passe com a sua mão, nunca deixe a criança passar sozinha. Longe dos olhos, da boca e das mãos dela, e nunca em machucados.
- Prefira loção em vez de spray.
- Se usar protetor solar, passe o protetor primeiro e o repelente 20 a 40 minutos depois. Evite produtos que misturam os dois.
- Dê banho para tirar o repelente quando não for mais preciso. A criança não deve dormir com repelente.
- Pulseiras de citronela e aparelhos de ultrassom não protegem.
## Contra a dengue
Elimine água parada em casa e no quintal, use telas nas janelas e mosquiteiros.`,
  alarme: ["Queimadura de sol com bolhas grandes, febre ou criança abatida", "Vômitos, sonolência ou pele muito quente e seca depois de muito sol", "Reação na pele, falta de ar ou sonolência depois de usar repelente"],
  encaminhar: "Queimadura solar extensa ou com bolhas, insolação → avaliação no mesmo dia. Reação ao repelente com sintomas sistêmicos → urgência.",
  sus: {nacional: "Protetor solar e repelente: compra pela família (não constam na RENAME para uso pediátrico de rotina) [NV].", betim: "—"},
  evid: {resumo: "SBP 2024 (sem sol direto e sem filtro antes de 6 meses; filtro mineral de 6 meses a 2 anos; sem banho de sol para vitamina D ou icterícia); SBP 2025 (repelentes por idade); SBP 2015 (cuidados na aplicação). FPS e horários citados sem conferência nesta sessão.", certeza: "Baixa a moderada (consenso, estimada)", fontes: ["sbp_pele2024", "sbp_picadas2025", "sbp_repel2015"]},
  mudancas: ["Entrada nova (v44)."],
  nv: ["Idade mínima nos rótulos de repelentes vendidos hoje.", "FPS mínimo e intervalo de reaplicação citados de memória.", "Presença de protetor solar e repelente na RENAME/programas para crianças."]
}
);
