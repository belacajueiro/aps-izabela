// ───────────── LOTE 7 – revisão 09/10/2026
Object.assign(FONTES, {
  pep_2024: {t: "Poder360, 08/09/2024: Ministério da Saúde atualiza PCDT de PEP (agosto/2024) – DTG para gestantes em qualquer IG, DTG 5 mg pediátrico, darunavir+ritonavir na 2ª linha; início em até 72 h, 28 dias (notícia; PCDT completo não aberto).", f: "C", url: "https://www.poder360.com.br/poder-saude/ministerio-da-saude-atualiza-recomendacoes-sobre-a-profilaxia-pep/"},
  pcdt_pep: {t: "Ministério da Saúde. PCDT para Profilaxia Pós-Exposição (PEP) de risco à infecção pelo HIV, IST e hepatites virais (versão resumida 2023; atualização 2024) (norma).", f: "C", url: "https://www.gov.br/conitec/pt-br/midias/protocolos/resumidos/20230208_PCDT_Resumido_PEP_final.pdf"},
  ofidico: {t: "SMS Rio de Janeiro. Orientações para conduta em caso de acidentes ofídicos, 2019 (baseado no Manual de Diagnóstico e Tratamento de Acidentes por Animais Peçonhentos do MS) (norma municipal).", f: "F", url: "https://saude.prefeitura.rio/wp-content/uploads/sites/47/2022/07/FolderOfideos.pdf"},
  cochrane_crupe: {t: "Gates A et al. Glucocorticoids for croup in children. Cochrane, 2018; Parker CM et al. Dexamethasone 0,15 × 0,6 mg/kg × prednisolona (ECR, 2019) (revisão sistemática; ECR).", f: "C", url: ""},
  colica: {t: "Sung V et al. Lactobacillus reuteri to treat infant colic: meta-analysis. Pediatrics, 2018; revisões sobre cólica do lactente (simeticona sem benefício) (metanálise).", f: "C", url: ""},
  candida_idsa: {t: "Pappas PG et al. IDSA Clinical Practice Guideline for the Management of Candidiasis, 2016 (diretriz).", f: "C", url: ""},
  gengivo: {t: "Amir J et al. Treatment of herpes simplex gingivostomatitis with aciclovir in children: randomised double blind placebo controlled study. BMJ, 1997 (ECR).", f: "C", url: ""},
  espghan_constip: {t: "Tabbers MM et al. ESPGHAN/NASPGHAN – Evaluation and treatment of functional constipation in infants and children, 2014 (diretriz).", f: "C", url: ""},
  bashh_balano: {t: "BASHH. UK national guideline on the management of balanoposthitis, 2015 (diretriz).", f: "C", url: ""},
  suicidio: {t: "NICE NG225. Self-harm: assessment, management and preventing recurrence, 2022; Ministério da Saúde – Prevenção do suicídio na APS (diretriz; material MS).", f: "C", url: ""},
  asam_abst: {t: "ASAM Clinical Practice Guideline on Alcohol Withdrawal Management, 2020 (diretriz).", f: "C", url: ""},
  aad_acne: {t: "Reynolds RV et al. AAD Guidelines of care for the management of acne vulgaris, 2024 (diretriz).", f: "C", url: ""},
  herpes_labial: {t: "Spruance SL et al. High-dose, short-duration valacyclovir for herpes labialis (2 ECRs), 2003; revisões sobre herpes labial (ECR; revisões).", f: "C", url: ""},
  cochrane_unha: {t: "Eekhof JA et al. Interventions for ingrowing toenails. Cochrane, 2012 (revisão sistemática).", f: "C", url: ""},
  aao_blef: {t: "American Academy of Ophthalmology. Blepharitis Preferred Practice Pattern, 2023; revisões sobre corpo estranho corneano e hemorragia subconjuntival na APS (diretriz; revisões).", f: "C", url: ""},
  nice_cerume: {t: "NICE NG98. Hearing loss in adults: assessment and management, 2018 – remoção de cerume (diretriz).", f: "C", url: ""}
});

CONDICOES.push(
// ───────────────────────── PEDIATRIA
{
id: "crupe", nome: "Crupe viral (laringotraqueobronquite)", sistema: "Pediatria", risco: "moderado",
ciap: "R77", cid: "J05.0", tags: "crupe tosse de cachorro estridor laringite criança dexametasona",
alerta: "Estridor em repouso com tiragem importante, agitação ou letargia, cianose, sialorreia/posição em tripé (epiglotite) ou SpO₂ < 92%: urgência (nebulização com adrenalina e observação).",
S: `Criança de ___ anos/meses, com tosse ladrante ___, rouquidão ___, estridor ___ (só ao chorar / em repouso), há ___ dias, pior à noite. Pródromo de IVAS ___. Febre ___.
Sialorreia, dificuldade para engolir ___. Episódios prévios ___. Vacinação ___. Corpo estranho possível ___.`,
O: `___ estado geral, ___ (agitada / tranquila).
FC ___ | FR ___ | Tax ___ | SpO₂ ___%
Estridor ___ (repouso / agitação). Tiragem ___. Entrada de ar ___. Cianose ___. Nível de consciência ___.
Escore de Westley: ___ (leve ≤ 2; moderado 3–5; grave ≥ 6).`,
A: `Crupe viral ___ (leve / moderado), sem sinais de obstrução grave.`,
P: `- Corticoide em dose única para todos os graus (reduz retorno e internação).
- Manter a criança calma; não examinar orofaringe com espátula se suspeita de epiglotite.
- Moderado: observação na unidade; adrenalina nebulizada se estridor em repouso (encaminhar se necessário).
- Alta se sem estridor em repouso após observação, com orientação de sinais de alarme.`,
rx: [
 {trilha: "ambos", titulo: "Corticoide dose única (SUS Betim)", texto: `USO ORAL
1. Dexametasona 4 mg/mL (solução injetável) – 0,15 a 0,6 mg/kg VO (máx. 10–16 mg), dose única, misturada a suco.
   Dose = ___ mg = ___ mL.
   OU
2. Prednisolona 3 mg/mL solução oral – 1 a 2 mg/kg (máx. 40–60 mg), dose única.
   Dose = ___ mL.`, dose: "NV", nota: "Uso oral da ampola de dexametasona é prática difundida, porém fora da bula. Dexametasona 0,15 mg/kg foi não inferior a 0,6 mg/kg em ECR."}
],
orient: `O crupe é causado por vírus e costuma melhorar em 2 a 3 dias. O remédio de dose única ajuda a desinchar a garganta.
Mantenha a criança calma, ofereça líquidos e fique atento à respiração durante a noite.
Inalação com vapor não tem benefício comprovado.`,
alarme: ["Barulho ao respirar mesmo em repouso", "Esforço para respirar (afunda a barriga ou as costelas)", "Lábios arroxeados", "Babando ou sem conseguir engolir", "Muito sonolenta ou agitada"],
encaminhar: "Crupe moderado sem melhora ou grave → urgência pediátrica.",
sus: {nacional: "RENAME 2024: dexametasona 4 mg/mL injetável e 0,1 mg/mL elixir, prednisolona 1 e 3 mg/mL (Básico).", betim: "REMUME Betim: dexametasona 4 mg/mL injetável e prednisolona 3 mg/mL disponíveis; elixir de dexametasona não consta."},
evid: {resumo: "Cochrane: glicocorticoide reduz o escore de crupe em 2–6 h, retornos e internações. Dose de dexametasona 0,15 mg/kg teve eficácia semelhante a 0,6 mg/kg; prednisolona é alternativa. Umidificação não tem benefício.", certeza: "Alta para corticoide (estimada)", fontes: ["cochrane_crupe", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Doses e máximos: conferir bula/protocolo pediátrico."]
},
{
id: "colica-lactente", nome: "Cólica do lactente (choro excessivo)", sistema: "Pediatria", risco: "baixo",
ciap: "A16 · D01", cid: "R10.4", tags: "cólica bebê choro excessivo lactente simeticona",
alerta: "Febre, vômitos em jato ou biliosos, recusa alimentar, baixo ganho de peso, sangue nas fezes, letargia, choro de início súbito em criança antes calma ou abaulamento de fontanela: avaliar causa orgânica com urgência. Sinais de cuidador em exaustão: risco de trauma craniano abusivo.",
S: `Lactente de ___ semanas, com choro ___ h/dia, ___ dias/semana, há ___ semanas, mais no fim da tarde/noite. Alimentação: ___ (aleitamento exclusivo / fórmula). Mamadas: ___. Ganho de peso ___. Vômitos ___. Evacuações ___ (sangue?). Febre ___.
Cansaço/ansiedade dos cuidadores ___. Rede de apoio ___.`,
O: `BEG, ativo, ___.
Peso ___ g (variação ___ g/dia). Tax ___.
Fontanela ___. ABD ___. Hérnias ___. Pele (lesões, hematomas) ___. Avaliação da mamada ___.`,
A: `Cólica do lactente (choro excessivo sem causa orgânica), ganho de peso adequado.`,
P: `- Exame completo para afastar causa orgânica; observar mamada.
- Acolher e orientar os cuidadores (pico com 6 semanas e melhora até 3–4 meses).
- Técnicas de acalmar: colo, contato pele a pele, balanço suave, ruído branco, redução de estímulos.
- Orientar pausa segura: colocar o bebê no berço e sair por alguns minutos se o cuidador estiver no limite; nunca sacudir.
- Simeticona e chás não têm benefício; evitar.
- Aleitamento exclusivo: L. reuteri pode reduzir o tempo de choro.
- Retorno em 1–2 semanas.`,
rx: [
 {trilha: "evidencia", titulo: "Probiótico (bebês em aleitamento materno)", texto: `USO ORAL
1. Lactobacillus reuteri DSM 17938 – 5 gotas (10⁸ UFC) 1 vez ao dia por 21 dias.`, dose: "NV", nota: "Metanálise (2018): redução do tempo de choro em bebês amamentados; sem benefício claro em bebês com fórmula. Não consta na RENAME/REMUME."},
 {trilha: "sus", titulo: "Sem medicamento (SUS Betim)", texto: `ORIENTAÇÕES
1. Manter aleitamento; corrigir pega se necessário.
2. Técnicas de acalmar e pausas seguras para os cuidadores.
   (Simeticona está na REMUME Betim, mas não mostrou benefício na cólica.)`, dose: "NV"}
],
orient: `O choro excessivo nos primeiros meses é comum e melhora até os 3–4 meses. Não é culpa de vocês nem do leite.
Colo, contato pele a pele, balanço suave e ambiente calmo ajudam.
Se sentir que vai perder a paciência, coloque o bebê em segurança no berço e saia do quarto por alguns minutos. Nunca sacuda o bebê.`,
alarme: ["Febre", "Vômitos em jato ou esverdeados", "Sangue nas fezes", "Bebê mole, sonolento ou recusando mamar", "Moleira estufada", "Choro muito diferente do habitual"],
encaminhar: "Suspeita de causa orgânica → avaliação pediátrica/urgência conforme sinal. Cuidador em crise → apoio da equipe/rede.",
idealsus: {ideal: "Acolhimento e técnicas de acalmar; L. reuteri em bebês amamentados reduz modestamente o choro.", sus: "Não há probiótico na RENAME/REMUME. Simeticona consta em Betim, mas não tem benefício.", ponte: "Orientação para todos; probiótico por compra se a família quiser tentar, em bebês amamentados."},
sus: {nacional: "Sem medicamento indicado na RENAME.", betim: "REMUME Betim: simeticona 75 mg/mL consta (sem benefício demonstrado na cólica)."},
evid: {resumo: "Simeticona e chás não superaram placebo. L. reuteri DSM 17938 reduziu o tempo de choro em lactentes amamentados (metanálise de dados individuais, 2018), sem efeito claro nos que usam fórmula.", certeza: "Baixa a moderada (estimada)", fontes: ["colica", "remume"]},
mudancas: ["Entrada nova."],
nv: []
},
{
id: "moniliase-oral", nome: "Candidíase oral (sapinho)", sistema: "Pediatria", risco: "baixo",
ciap: "A75 · D83", cid: "B37.0", tags: "sapinho monilíase candidíase oral bebê nistatina",
alerta: "Candidíase oral em criança maior ou adulto sem fator de risco (antibiótico, corticoide inalatório, prótese): investigar imunossupressão (HIV, DM). Odinofagia/disfagia: possível esofagite.",
S: `Paciente de ___ (idade), com placas brancas na boca há ___ dias. Dificuldade para mamar/comer ___. Uso de antibiótico ___, corticoide inalatório ___, prótese dentária ___. Aleitamento ___; mamilos da mãe com dor/fissura ___.`,
O: `BEG.
Boca: placas brancas removíveis com base eritematosa em ___ (língua, mucosa jugal, palato). Área de fraldas ___.`,
A: `Candidíase oral ___ (lactente / adulto com fator ___).`,
P: `- Antifúngico tópico por 7–14 dias (até 48 h após desaparecimento das lesões).
- Lactente amamentado: tratar mamilos da mãe simultaneamente se sintomáticos.
- Higienizar chupetas e bicos; corticoide inalatório: enxaguar a boca após uso.
- Recorrente ou sem fator de risco: investigar.`,
rx: [
 {trilha: "ambos", titulo: "Nistatina suspensão (SUS Betim)", texto: `USO ORAL
1. Nistatina 100.000 UI/mL ______ 1 frasco
   Lactente: 1 mL em cada lado da boca (2 mL), 4 vezes ao dia, após as mamadas, por 7–14 dias.
   Criança maior/adulto: 4–6 mL, bochechar e engolir, 4 vezes ao dia, por 7–14 dias.`, dose: "NV"},
 {trilha: "fora", titulo: "Miconazol gel oral (RENAME Básico, não consta na REMUME Betim)", texto: `USO ORAL
1. Miconazol 2% gel oral – lactente ≥ 4 meses: 1,25 mL 4 vezes ao dia, aplicado nas lesões com o dedo limpo (porções pequenas); adulto: 2,5 mL 4 vezes ao dia, por 7–14 dias.`, dose: "NV", nota: "Mais eficaz que nistatina em ECR; risco de engasgo em < 4 meses; interação com varfarina."},
 {trilha: "ambos", titulo: "Mamilos da mãe (se sintomáticos)", texto: `USO TÓPICO
1. Cetoconazol 2% creme ou miconazol creme – aplicar fina camada após as mamadas por 7–14 dias, removendo excesso antes da próxima mamada.`, dose: "NV"}
],
orient: `O sapinho é comum em bebês. Use o remédio depois das mamadas, por todos os dias indicados.
Ferva chupetas e bicos diariamente. Se a mãe tiver dor ou rachadura no mamilo, as duas precisam tratar ao mesmo tempo.`,
alarme: ["Recusa para mamar ou beber", "Placas que se espalham pela garganta ou dor para engolir", "Febre", "Sapinho que volta várias vezes"],
encaminhar: "Recorrência, esofagite ou suspeita de imunossupressão → avaliação/investigação.",
sus: {nacional: "RENAME 2024: nistatina 100.000 UI/mL suspensão, miconazol 2% gel oral (Básico).", betim: "REMUME Betim: nistatina 100.000 UI/mL suspensão, cetoconazol 2% creme e miconazol creme vaginal disponíveis; miconazol gel oral não consta."},
evid: {resumo: "IDSA 2016: na candidíase orofaríngea leve, miconazol tópico ou clotrimazol; nistatina é alternativa. Em lactentes, miconazol gel teve maior taxa de cura que nistatina em ECR.", certeza: "Moderada (estimada)", fontes: ["candida_idsa", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Doses: conferir bula."]
},
{
id: "gengivoestomatite", nome: "Gengivoestomatite herpética (criança)", sistema: "Pediatria", risco: "moderado",
ciap: "A77 · D83", cid: "B00.2", tags: "herpes boca criança gengiva sangrando vesículas aciclovir",
alerta: "Desidratação (recusa de líquidos, diurese reduzida), lesões oculares (ceratite herpética), eczema herpeticum ou imunossupressão: urgência.",
S: `Criança de ___ anos, com febre ___ e lesões dolorosas na boca há ___ dias (vesículas/úlceras em gengiva, língua, lábios), gengivas edemaciadas e sangrantes ___. Recusa alimentar ___. Ingesta de líquidos ___. Diurese ___. Lesões em olhos/pele ___. Eczema atópico ___.`,
O: `___ estado geral, hidratação ___.
FC ___ | Tax ___ | Peso ___ kg
Boca: gengivite intensa, vesículas e úlceras em ___. Lesões periorais ___. Linfonodos submandibulares ___. Olhos ___.`,
A: `Gengivoestomatite herpética primária, ___ dia de doença, ___ (hidratada / desidratação leve).`,
P: `- Prioridade: hidratação e analgesia (líquidos frios, alimentos pastosos).
- Aciclovir oral se iniciado até 72–96 h do início e quadro moderado/grave (reduz duração das lesões e da recusa alimentar).
- Evitar contato das lesões com olhos; lavar as mãos.
- Retorno em 24–48 h ou antes se recusa de líquidos.`,
rx: [
 {trilha: "ambos", titulo: "Aciclovir (se ≤ 72–96 h do início)", texto: `USO ORAL
1. Aciclovir 200 mg comprimido ______ ___ comprimidos
   15 mg/kg/dose (máx. 200 mg/dose), 5 vezes ao dia, por 7 dias. Dose = ___ mg (comprimido dissolvido em água).`, dose: "NV", nota: "ECR (Amir, 1997): aciclovir 15 mg/kg 5x/dia por 7 dias reduziu duração das lesões, febre e dificuldade alimentar. Betim não tem suspensão."},
 {trilha: "ambos", titulo: "Analgesia e hidratação", texto: `USO ORAL
1. Paracetamol 200 mg/mL – 1 gota/kg (10–15 mg/kg) até de 6/6h.
2. Líquidos frios em pequenos volumes com frequência; alimentos pastosos e frios.`, dose: "NV"}
],
orient: `A doença é causada pelo vírus do herpes e melhora em 7 a 10 dias. O mais importante é a criança beber líquidos.
Ofereça líquidos frios e alimentos pastosos. Dê o remédio para dor antes das refeições.
Lave as mãos e evite que a criança coloque a mão na boca e depois nos olhos.`,
alarme: ["Não aceita líquidos ou urina pouco", "Olho vermelho ou dolorido", "Bolhas espalhadas pela pele", "Muito sonolenta ou febre persistente"],
encaminhar: "Desidratação, acometimento ocular, eczema herpeticum, imunossupressão → urgência/pediatria.",
sus: {nacional: "RENAME 2024: aciclovir 200 mg comprimido (Básico).", betim: "REMUME Betim: aciclovir 200 mg comprimido e paracetamol 200 mg/mL disponíveis; aciclovir suspensão não consta."},
evid: {resumo: "Um ECR pequeno (Amir, 1997) mostrou benefício do aciclovir iniciado nas primeiras 72 h. Revisões apontam evidência limitada, mas favorável quando iniciado cedo. Hidratação e analgesia são a base.", certeza: "Baixa (estimada)", fontes: ["gengivo", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Doses: conferir bula/protocolo pediátrico."]
},
{
id: "constipacao-infantil", nome: "Constipação intestinal na criança", sistema: "Pediatria", risco: "baixo",
ciap: "D12", cid: "K59.0", tags: "intestino preso criança fezes duras escape fecal lactulose macrogol",
alerta: "Início no período neonatal ou eliminação de mecônio após 48 h, distensão importante, vômitos biliosos, sangue nas fezes sem fissura, déficit de crescimento, alterações neurológicas ou da coluna lombossacra: investigar causa orgânica (Hirschsprung, hipotireoidismo, medular).",
S: `Criança de ___ anos, com evacuações ___ vezes/semana, fezes duras/volumosas ___, dor ao evacuar ___, retenção ___, escape fecal ___, sangue por fissura ___, há ___ meses. Desfralde recente ___. Alimentação (fibras, leite de vaca em excesso) ___, líquidos ___. Mecônio ___.`,
O: `BEG.  Peso ___ | Estatura ___
ABD: fecaloma palpável ___. Região perianal: fissura ___, posição do ânus ___. Coluna lombossacra ___. Reflexos MMII ___.`,
A: `Constipação funcional (critérios de Roma IV), ___ (com / sem) impactação fecal.`,
P: `- Educação e desmistificação; diário de evacuação.
- Desimpactação oral se fecaloma (doses altas de laxativo osmótico por 3–6 dias).
- Manutenção com laxativo osmótico por pelo menos 2 meses e até 1 mês sem sintomas; desmame gradual.
- Treino de toalete: sentar 5 minutos após as refeições, apoio para os pés.
- Fibras e líquidos adequados (não substituem o laxativo).`,
rx: [
 {trilha: "evidencia", titulo: "Macrogol (PEG 3350) – 1ª linha", texto: `USO ORAL
1. Polietilenoglicol 3350 sem eletrólitos ______ 1 frasco
   Manutenção: 0,4 g/kg/dia (faixa 0,2–0,8) dissolvido em água ou suco, ajustando até fezes pastosas diárias.
   Desimpactação: 1–1,5 g/kg/dia por 3–6 dias.`, dose: "NV", nota: "ESPGHAN/NASPGHAN 2014: 1ª linha para desimpactação e manutenção. Não consta na RENAME nem na REMUME."},
 {trilha: "sus", titulo: "Lactulose (SUS Betim)", texto: `USO ORAL
1. Lactulose 667 mg/mL ______ 1 frasco
   1 a 2 mL/kg/dia em 1–2 tomadas, ajustando até fezes pastosas diárias.`, dose: "NV", nota: "Alternativa quando PEG não disponível; mais flatulência e cólica."}
],
orient: `O intestino preso na criança melhora com tratamento contínuo por alguns meses. Não pare o remédio quando melhorar: a retirada é gradual.
Coloque a criança no vaso por 5 minutos depois das refeições, com os pés apoiados. Elogie as tentativas, sem punição por escapes.`,
alarme: ["Barriga muito inchada ou vômitos", "Sangue nas fezes sem fissura", "Perda de peso ou criança que não cresce", "Fraqueza nas pernas ou alteração para urinar"],
encaminhar: "Sinais de alarme ou refratária a 3 meses de tratamento bem conduzido → pediatria/gastropediatria.",
idealsus: {ideal: "PEG 3350 é 1ª linha para desimpactação e manutenção (superior à lactulose em ECR).", sus: "Betim tem lactulose (RENAME Básico); PEG não consta.", ponte: "Lactulose do SUS para a maioria; PEG por compra se intolerância, falha ou impactação."},
sus: {nacional: "RENAME 2024: lactulose 667 mg/mL, óleo mineral, glicerol supositório e solução retal (Básico).", betim: "REMUME Betim: lactulose 667 mg/mL, bisacodil 5 mg e glicerina 12% retal disponíveis."},
evid: {resumo: "ESPGHAN/NASPGHAN 2014: PEG é o laxativo de 1ª linha; lactulose é alternativa. Tratamento de manutenção por ≥ 2 meses reduz recaídas. Fibras e líquidos adicionais isolados têm pouca evidência.", certeza: "Moderada (estimada)", fontes: ["espghan_constip", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Doses: conferir bula."]
},
{
id: "itu-crianca", nome: "ITU febril na criança (2 meses a 2 anos)", sistema: "Pediatria", risco: "alto",
ciap: "U71", cid: "N39.0", tags: "infecção urinária criança febre bebê urocultura cefalexina",
alerta: "< 2 meses, toxemia, vômitos que impedem VO, desidratação, imunossupressão ou falha após 48 h: internação/antibiótico parenteral.",
S: `Criança de ___ meses, com febre de ___ °C há ___ dias, sem foco aparente. Irritabilidade ___, vômitos ___, recusa alimentar ___, urina com odor forte ___. ITU prévia ___. Constipação ___. Fimose (menino) ___. Malformação urinária conhecida ___.`,
O: `___ estado geral, hidratação ___.
FC ___ | FR ___ | Tax ___ | Peso ___ kg
ABD ___. Genitália ___. Sem outro foco: ___.
Urina (coleta por sondagem ou jato médio; saco coletor só para triagem): fita ___ (leucócito-esterase ___, nitrito ___).`,
A: `ITU febril (pielonefrite provável) em criança de ___ meses, ___ (sem / com) sinais de gravidade.`,
P: `- Coletar urina por cateterismo (ou jato médio se controle esfincteriano) para urocultura ANTES do antibiótico.
- Antibiótico oral por 7–10 dias se boa aceitação e sem toxemia.
- Ajustar pelo antibiograma; reavaliar em 48 h.
- USG de rins e vias urinárias após 1º episódio febril em < 2 anos.
- Orientar retorno em novos episódios febris (urocultura precoce).`,
rx: [
 {trilha: "ambos", titulo: "Antibiótico oral (SUS Betim)", texto: `USO ORAL
1. Cefalexina 250 mg/5 mL ______ ___ frascos
   50–100 mg/kg/dia divididos de 6/6h por 7–10 dias. Dose = ___ mL de 6/6h.
   OU
2. Amoxicilina + clavulanato 250 + 62,5 mg/5 mL – até 40 mg/kg/dia (amoxicilina) de 8/8h por 7–10 dias (formulação 4:1: clavulanato ≤ 10 mg/kg/dia).
   OU
3. Sulfametoxazol + trimetoprima 200 + 40 mg/5 mL – 8 mg/kg/dia de trimetoprima de 12/12h (≥ 2 meses), se sensibilidade local favorável.`, dose: "NV", nota: "Escolha conforme resistência local; nitrofurantoína não é adequada para ITU febril (não atinge o parênquima renal)."}
],
orient: `Dê o antibiótico em todos os horários e por todos os dias, mesmo que a febre passe.
Ofereça bastante líquido. Volte em 48 horas para reavaliação e para ver o resultado da urocultura.
Nas próximas febres sem causa aparente, procure a unidade para exame de urina.`,
alarme: ["Febre que continua após 48 h de antibiótico", "Vômitos que impedem tomar o remédio", "Bebê muito sonolento ou irritado", "Urina muito pouca"],
encaminhar: "Sinais de gravidade → urgência. Alterações na USG ou ITU febril recorrente → nefropediatria/urologia pediátrica.",
sus: {nacional: "RENAME 2024: cefalexina 50 mg/mL, amoxicilina+clavulanato 50+12,5 mg/mL, SMX-TMP suspensão (Básico).", betim: "REMUME Betim: cefalexina 250 mg/5 mL, amoxicilina+clavulanato 250+62,5 mg/5 mL e SMX-TMP 200+40 mg/5 mL disponíveis."},
evid: {resumo: "AAP: diagnóstico exige urinálise sugestiva + urocultura de amostra adequada; antibiótico oral é tão eficaz quanto o parenteral em crianças sem toxemia; tratar 7–14 dias; USG após o 1º episódio febril. A escolha depende da resistência local.", certeza: "Moderada (estimada)", fontes: ["aap_itu", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Doses e perfil de resistência local: conferir."]
},
// ───────────────────────── SAÚDE DA MULHER
{
id: "amamentacao", nome: "Dor ao amamentar: fissura e ingurgitamento", sistema: "Saúde da mulher", risco: "baixo",
ciap: "X20 · W95", cid: "O92.1 · O92.2", tags: "amamentação fissura mamilo rachado peito empedrado ingurgitamento pega",
alerta: "Área avermelhada e dolorosa com febre e mal-estar: mastite (ver modelo). Nódulo flutuante: abscesso. Recém-nascido com baixo ganho de peso ou desidratação: avaliação no mesmo dia.",
S: `Puérpera com ___ dias/semanas pós-parto, com ___ (dor no mamilo / rachadura / mamas cheias, duras e dolorosas) há ___ dias. Dor durante a mamada ___. Febre ___. Frequência das mamadas ___. Uso de bicos/mamadeira ___. Ganho de peso do bebê ___. Freio lingual ___.`,
O: `BEG.  Tax ___
Mamas: ___ (ingurgitamento difuso / área localizada eritematosa). Mamilos: fissura ___ (local ___). Observação da mamada: posição ___, pega ___ (boca aberta, lábio inferior evertido, aréola mais visível acima), sucção ___.
Bebê: peso ___ (variação ___), freio lingual ___.`,
A: `___ (fissura mamilar / ingurgitamento mamário) por ___ (pega inadequada / outra), sem sinais de mastite.`,
P: `- Observar e corrigir posição e pega (principal intervenção).
- Fissura: iniciar pela mama menos dolorosa; aplicar leite materno no mamilo após mamadas; manter seco; evitar pomadas, sabões e protetores com plástico.
- Ingurgitamento: mamadas frequentes e em livre demanda; ordenha de alívio antes da mamada se aréola tensa; compressas frias entre as mamadas.
- Analgesia compatível com amamentação.
- Avaliar freio lingual se dor persistente.
- Retorno em 48–72 h ou apoio do banco de leite/equipe.`,
rx: [
 {trilha: "ambos", titulo: "Analgesia compatível com amamentação", texto: `USO ORAL
1. Ibuprofeno 600 mg – 1 comprimido de 8/8h se dor, por até 5 dias.
   OU
2. Paracetamol 500 mg – 1 a 2 comprimidos até de 6/6h.`, dose: "NV"}
],
orient: `A dor ao amamentar quase sempre melhora com o ajuste da pega. O bebê deve abocanhar boa parte da aréola, não só o bico.
Amamente com frequência. Se a mama estiver muito dura, retire um pouco de leite antes para amolecer a aréola.
Passe um pouco do próprio leite no mamilo depois da mamada e deixe secar. Use compressas frias entre as mamadas.`,
alarme: ["Febre ou calafrios", "Área vermelha, quente e dolorida na mama", "Caroço que não melhora", "Bebê mamando pouco, urinando pouco ou sonolento"],
encaminhar: "Mastite/abscesso → modelo de mastite. Dificuldade persistente → banco de leite humano/consultoria em amamentação.",
sus: {nacional: "RENAME 2024: ibuprofeno, paracetamol (Básico).", betim: "REMUME Betim: ibuprofeno 600 mg e paracetamol disponíveis. Banco de leite de referência: não verificado."},
evid: {resumo: "A correção da pega e da posição é a intervenção com melhor suporte para dor mamilar. Pomadas (incluindo lanolina) não superaram leite materno ou nenhum tratamento de forma consistente. Compressas frias e mamadas frequentes aliviam o ingurgitamento (ABM).", certeza: "Baixa a moderada (estimada)", fontes: ["abm_mastite", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: []
},
// ───────────────────────── GENITURINÁRIO
{
id: "balanopostite", nome: "Balanopostite", sistema: "Geniturinário e saúde sexual", risco: "baixo",
ciap: "Y75", cid: "N48.1", tags: "balanite glande inflamada prepúcio candida",
alerta: "Parafimose (prepúcio retraído preso com edema da glande): urgência. Lesão persistente > 4–6 semanas: biópsia (líquen escleroso, neoplasia).",
S: `Paciente, ___ anos, com vermelhidão/prurido/ardor na glande e prepúcio há ___ dias, secreção ___, fissuras ___. Higiene ___. DM ___. Parcerias com corrimento ___. Uso de sabonetes/irritantes ___. Fimose ___. Episódios prévios ___.`,
O: `BEG.
Glande/prepúcio: eritema ___, placas esbranquiçadas ___, erosões ___, fissuras prepuciais ___, secreção ___. Retração do prepúcio ___. Linfonodos ___.
Glicemia capilar: ___.`,
A: `Balanopostite ___ (candidiásica provável / irritativa / bacteriana), ___ (sem / com) fimose.`,
P: `- Higiene suave com água morna (sem sabonete agressivo) e secagem; retrair o prepúcio na higiene.
- Candidíase provável: antifúngico tópico; tratar parceria sintomática.
- Glicemia; testes rápidos de IST.
- Recorrente: investigar DM; avaliar postectomia se fimose.`,
rx: [
 {trilha: "ambos", titulo: "Antifúngico tópico (SUS Betim)", texto: `USO TÓPICO
1. Miconazol 2% creme (bisnaga vaginal) ou cetoconazol 2% creme ______ 1 bisnaga
   Aplicar fina camada na glande e prepúcio 2 vezes ao dia por 7–14 dias.`, dose: "NV", nota: "Se muito inflamado, associar dexametasona 0,1% creme 1x/dia por 3–5 dias."}
],
orient: `Lave a região apenas com água morna, puxando a pele do prepúcio, e seque bem. Evite sabonetes perfumados.
Use o creme até 2 dias depois de melhorar. Se tiver parceria com corrimento ou coceira, ela também deve ser tratada.`,
alarme: ["Pele do prepúcio presa atrás da glande com inchaço", "Ferida que não cicatriza", "Dificuldade para urinar", "Febre"],
encaminhar: "Parafimose → urgência. Recorrente com fimose ou lesão persistente → urologia.",
sus: {nacional: "RENAME 2024: nitrato de miconazol 2% creme (Básico).", betim: "REMUME Betim: miconazol 20 mg/g creme vaginal, cetoconazol 2% creme e dexametasona 0,1% creme disponíveis."},
evid: {resumo: "BASHH 2015: higiene com água e emolientes; antifúngico azólico tópico na balanite por Candida; investigar DM na recorrência; biópsia em lesão persistente.", certeza: "Baixa (estimada)", fontes: ["bashh_balano", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Doses: conferir bula."]
},
{
id: "escroto-agudo", nome: "Dor escrotal aguda (torção × epididimite)", sistema: "Geniturinário e saúde sexual", risco: "alto",
ciap: "Y02 · Y74", cid: "N44 · N45.9", tags: "dor no testículo torção epididimite orquite escroto agudo",
alerta: "Dor testicular súbita e intensa, sobretudo em < 25 anos, com náuseas/vômitos, testículo elevado/horizontalizado e reflexo cremastérico ausente: TORÇÃO até prova em contrário → cirurgia/urgência imediata (janela de 6 h). Não aguardar exames.",
S: `Paciente, ___ anos, com dor em testículo ___ há ___ h, início ___ (súbito / gradual), náuseas/vômitos ___. Disúria/corrimento ___. Febre ___. Trauma ___. Episódios prévios de dor transitória ___. Parcerias e práticas sexuais ___. Caxumba ___.`,
O: `___ estado geral.
${VITAIS}
Escroto: edema ___, eritema ___. Testículo: posição ___ (elevado/horizontal?), dor ___. Epidídimo: dor/aumento ___. Reflexo cremastérico ___. Sinal de Prehn ___. Hérnia ___.
Fita urinária: ___.`,
A: `Escroto agudo, provável ___ (epididimite / orquiepididimite), sem sinais de torção. (Se dúvida: torção.)`,
P: `- Qualquer suspeita de torção: encaminhar imediatamente para urgência urológica (não aguardar USG).
- Epididimite: EAS/urocultura; NAAT para clamídia/gonococo; testes rápidos de HIV e sífilis.
- < 35 anos ou risco de IST: cobrir gonococo e clamídia.
- Escroto elevado, repouso, analgesia; tratar parcerias se IST.
- Reavaliar em 72 h.`,
rx: [
 {trilha: "ambos", titulo: "Epididimite – risco de IST (geralmente < 35 anos)", texto: `USO INTRAMUSCULAR
1. Ceftriaxona 500 mg IM, dose única (metade da ampola de 1 g IM).

USO ORAL
2. Doxiciclina 100 mg ______ 20 comprimidos
   Tomar 1 comprimido de 12/12h por 10 dias.`, dose: "NV", nota: "Esquema CDC 2021. Se prática anal insertiva: ceftriaxona 500 mg IM + levofloxacino 500 mg 1x/dia por 10 dias (substitui a doxiciclina)."},
 {trilha: "fora", titulo: "Epididimite por enterobactérias (≥ 35 anos, sem risco de IST, ou após procedimento urinário)", texto: `USO ORAL
1. Levofloxacino 500 mg – 1 comprimido por dia por 10 dias.
   (RENAME: Estratégico; não consta na REMUME Betim. Alternativa disponível: ciprofloxacino 500 mg 12/12h por 10 dias, guiado por urocultura.)`, dose: "NV"}
],
orient: `Use cueca firme para elevar o escroto, faça repouso e compressas frias. Tome o antibiótico até o fim.
Se a causa for infecção sexualmente transmissível, suas parcerias precisam ser tratadas. Evite relações até terminar o tratamento.`,
alarme: ["Dor testicular súbita e muito forte", "Febre alta ou calafrios", "Inchaço que aumenta rapidamente", "Sem melhora em 3 dias"],
encaminhar: "Suspeita de torção → urgência imediata. Abscesso, falha do tratamento, massa → urologia.",
sus: {nacional: "RENAME 2024: ceftriaxona, doxiciclina (Estratégico), ciprofloxacino (Básico), levofloxacino (Estratégico).", betim: "REMUME Betim: ceftriaxona 1 g IM, doxiciclina 100 mg e ciprofloxacino 500 mg disponíveis."},
evid: {resumo: "A torção testicular é emergência cirúrgica; a viabilidade cai após 6 h. Na epididimite aguda, CDC 2021 recomenda ceftriaxona + doxiciclina quando há risco de IST e levofloxacino quando enterobactérias são prováveis.", certeza: "Moderada (estimada)", fontes: ["cdc_ist", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Esquemas: conferir PCDT IST vigente."]
},
// ───────────────────────── INFECCIOSAS E VIGILÂNCIA
{
id: "pep", nome: "Exposição de risco ao HIV – PEP", sistema: "Infecciosas e vigilância", risco: "alto",
ciap: "A98 · Z25", cid: "Z20.6 · Z29.8", tags: "PEP profilaxia pós-exposição HIV relação sem preservativo violência sexual acidente perfurocortante",
alerta: "Iniciar o mais cedo possível, idealmente nas primeiras 2 h e no máximo até 72 h. Violência sexual: acolhimento, notificação, contracepção de emergência e profilaxia de IST; não atrasar a PEP por investigação.",
S: `Paciente, ___ anos, com exposição ___ (sexual consentida / violência sexual / acidente com material biológico) há ___ h (data/hora ___).
Tipo: ___ (anal receptiva/insertiva, vaginal, oral; percutânea, mucosa). Material: ___ (sangue, sêmen, secreção vaginal). Status da pessoa-fonte: ___ (HIV+ com carga viral ___ / desconhecido). Uso de preservativo/rompimento ___.
Vacinação hepatite B ___. Gestação/possibilidade ___. Uso de PrEP ___. Medicamentos e função renal ___.`,
O: `BEG.
${VITAIS}
Lesões (violência/acidente) ___.
Testes rápidos da pessoa exposta: HIV ___, sífilis ___, hepatite B ___, hepatite C ___. β-hCG ___.
Pessoa-fonte (se disponível e consentir): HIV ___.`,
A: `Exposição de risco ao HIV há ___ h, com indicação de PEP. TR-HIV da pessoa exposta não reagente.`,
P: `- PEP indicada se: material de risco + via de risco + até 72 h + pessoa-fonte HIV+ ou desconhecida (não indicada se fonte com TR-HIV não reagente, exceto janela imunológica provável).
- Teste rápido de HIV antes (reagente → não iniciar PEP; seguir diagnóstico).
- Esquema por 28 dias; orientar adesão e efeitos.
- Hepatite B: vacinar se não imune (± imunoglobulina conforme fonte/situação).
- Violência sexual: contracepção de emergência, profilaxia de IST, notificação de violência, rede de proteção.
- Seguimento: TR-HIV em 30 e 90 dias; sífilis e hepatites conforme protocolo.
- Oferecer PrEP após a PEP se exposições recorrentes.`,
rx: [
 {trilha: "ambos", titulo: "PEP – esquema preferencial adulto (28 dias)", texto: `USO ORAL
1. Tenofovir 300 mg + lamivudina 300 mg ______ 28 comprimidos
   Tomar 1 comprimido 1 vez ao dia por 28 dias.
   +
2. Dolutegravir 50 mg ______ 28 comprimidos
   Tomar 1 comprimido 1 vez ao dia por 28 dias.`, dose: "NV", nota: "Atualização 2024: dolutegravir também para gestantes em qualquer IG. TFG < 60: não usar TDF (substituir conforme PCDT). Interações do DTG com antiácidos/ferro/cálcio. Dispensação pela unidade de antirretrovirais/serviço de PEP."}
],
orient: `A PEP reduz muito o risco de infecção pelo HIV se começar rápido e for tomada todos os dias por 28 dias.
Não pare o remédio por conta própria. Use preservativo até o fim do acompanhamento.
Volte para os testes de 30 e 90 dias. Se as exposições se repetirem, existe a PrEP, um remédio para prevenir antes.`,
alarme: ["Febre, manchas no corpo ou ínguas nas semanas seguintes", "Pele ou olhos amarelos", "Vômitos que impedem tomar o remédio", "Reação alérgica"],
encaminhar: "Serviço de referência em PEP/SAE para dispensação e seguimento, conforme fluxo local. Violência sexual: rede de atenção às pessoas em situação de violência.",
sus: {nacional: "RENAME 2024: tenofovir+lamivudina 300/300 mg e dolutegravir 50 mg (Estratégico). Vacina hepatite B e imunoglobulina anti-HBs: PNI/Estratégico.", betim: "Antirretrovirais não constam na REMUME (dispensação por UDM). Fluxo de PEP em Betim (onde iniciar 24 h): não verificado."},
evid: {resumo: "A PEP iniciada em até 72 h reduz a transmissão do HIV (dados observacionais e de modelos animais). O PCDT foi atualizado em 2024 (DTG para gestantes, DTG pediátrico, darunavir+ritonavir na 2ª linha), mantendo 28 dias e janela de 72 h.", certeza: "Recomendação normativa do MS", fontes: ["pep_2024", "pcdt_pep", "rename"]},
mudancas: ["Entrada nova (o Notion tinha só benzatina no bloco de pós-exposição sexual)."],
nv: ["Esquema e seguimento: conferir PCDT PEP 2024 completo.", "Serviço de PEP 24 h em Betim: confirmar."]
},
{
id: "acidente-ofidico", nome: "Acidente ofídico (picada de cobra)", sistema: "Infecciosas e vigilância", risco: "alto",
ciap: "S13 · A86", cid: "T63.0 · X20", tags: "picada de cobra jararaca cascavel soro antiofídico acidente ofídico",
alerta: "Todo acidente ofídico deve ser encaminhado imediatamente a hospital de referência com soro antiveneno, mesmo sem sintomas (manifestações podem surgir horas depois).",
S: `Paciente, ___ anos, picado por serpente em ___ (local) há ___ h, em ___ (ambiente). Descrição da serpente ___ (não capturar). Primeiros socorros realizados ___ (garrote? incisão?).
Sintomas: dor local ___, edema ___, sangramento ___, ptose/visão turva ___ (crotálico), dor muscular/urina escura ___, sintomas sistêmicos ___. Vacina antitetânica ___.`,
O: `___ estado geral.
${VITAIS}
Local: marcas de presas ___, edema ___ (extensão ___), equimose ___, bolhas ___, sangramento ___. Fácies miastênica/ptose ___. Sangramento gengival ___. Diurese/cor da urina ___.`,
A: `Acidente ofídico ___ (provável botrópico / crotálico / indeterminado), ___ h após a picada.`,
P: `- Remover garrote se colocado (com cuidado); retirar anéis e objetos apertados.
- Lavar com água e sabão; manter o membro em posição neutra/elevado; repouso.
- Hidratação; acesso venoso se possível; analgesia sem AINE.
- Encaminhar imediatamente para hospital de referência com soro (SAMU).
- Não fazer incisão, sucção, torniquete ou aplicar substâncias no local.
- Profilaxia do tétano no hospital (evitar IM na UBS se coagulopatia possível).
- Notificação compulsória (SINAN).`,
rx: [
 {trilha: "ambos", titulo: "Até a remoção", texto: `USO ORAL/IV
1. Dipirona 500 mg/mL – 1 g IV ou 2 comprimidos VO se dor (evitar AINE e AAS).
2. Soro fisiológico 0,9% – hidratação conforme estado.

PREVENÇÃO
3. Profilaxia antitetânica no hospital de referência. Não fazer injeções IM se houver sangramento ou suspeita de incoagulabilidade. Não atrasar a remoção.`, dose: "NV"}
],
orient: `A picada de cobra precisa de soro no hospital, mesmo que pareça leve. Não amarre o membro, não corte e não chupe o local.
Mantenha a pessoa calma e deitada até a chegada ao hospital.`,
alarme: ["Inchaço que aumenta", "Sangramento na gengiva, urina ou vômito", "Pálpebras caídas ou visão turva", "Urina escura ou em pouca quantidade", "Falta de ar"],
encaminhar: "Todos → hospital de referência para soroterapia (SAMU 192).",
sus: {nacional: "RENAME 2024: soros antibotrópico, anticrotálico, antibotrópico-crotálico, antilaquético, antielapídico (Estratégico).", betim: "Hospital de referência para soroterapia em Betim: não verificado (confirmar com a vigilância e o CIATox-MG)."},
evid: {resumo: "O soro antiveneno específico, aplicado o mais cedo possível, é o único tratamento eficaz; garrote, incisão e sucção pioram o dano local. Botrópico: dor, edema, equimose e sangramento; crotálico: fácies miastênica, mialgia e urina escura.", certeza: "Recomendação normativa", fontes: ["ofidico", "gvs_tetano", "rename"]},
mudancas: ["Entrada nova."],
nv: ["Hospital de referência e prazo de notificação vigentes: confirmar."]
},
// ───────────────────────── SAÚDE MENTAL
{
id: "risco-suicida", nome: "Ideação suicida – avaliação de risco na UBS", sistema: "Saúde mental", risco: "alto",
ciap: "P77 · P98", cid: "R45.8", tags: "suicídio ideação suicida autolesão plano de segurança CVV CAPS",
alerta: "Plano estruturado, intenção, acesso a meio letal, tentativa recente, psicose, intoxicação ou incapacidade de garantir segurança: não deixar a pessoa sozinha → urgência psiquiátrica/CAPS III/SAMU.",
S: `Paciente, ___ anos, com ideação de morte/suicídio ___ (passiva / ativa), frequência ___, há ___. Plano ___ (método, local, data). Intenção ___. Acesso a meios ___ (medicamentos em casa, armas, venenos). Preparativos/despedidas ___.
Tentativas prévias ___ (quando, método, gravidade). Autolesão ___. Transtorno mental ___ (depressão, bipolar, psicose). Uso de álcool/drogas ___. Perdas, violência, dívidas, isolamento ___.
Fatores de proteção: ___ (família, filhos, religião, vínculo com a equipe, planos futuros). Rede de apoio disponível hoje ___.`,
O: `Vigil, orientado, ___ (humor, afeto), pensamento ___, sem/com sintomas psicóticos ___, crítica ___. Intoxicação ___.
${VITAIS}
Lesões autoprovocadas ___.`,
A: `Ideação suicida com risco ___ (baixo / moderado / alto), fatores de risco ___, fatores de proteção ___.`,
P: `- Perguntar diretamente sobre suicídio (não induz o ato); escuta sem julgamento.
- Risco alto: não deixar só; acionar SAMU/urgência psiquiátrica/CAPS; envolver família.
- Risco baixo a moderado: plano de segurança escrito com a pessoa; restrição de acesso a meios (familiar guarda medicamentos, armas fora de casa); envolver rede de apoio com consentimento.
- Tratar condição de base (ex.: depressão); prescrever quantidades pequenas de medicamentos com risco em superdosagem (preferir ISRS a tricíclicos).
- Retorno em poucos dias; busca ativa se faltar.
- Matriciamento/CAPS. Tentativa de suicídio: notificação IMEDIATA (até 24 h) à vigilância municipal + ficha SINAN de violência interpessoal/autoprovocada.`,
rx: [
 {trilha: "ambos", titulo: "Plano de segurança (preencher com a pessoa)", texto: `PLANO DE SEGURANÇA
1. Sinais de alerta de que uma crise está começando: ___
2. O que eu posso fazer sozinho(a) para me acalmar: ___
3. Pessoas e lugares que me distraem: ___
4. Pessoas a quem posso pedir ajuda (nome e telefone): ___
5. Profissionais/serviços: UBS ___ | CAPS ___ | CVV 188 (24 h, gratuito) | SAMU 192
6. Como deixar meu ambiente mais seguro: ___ (quem guarda os medicamentos? ___)`, dose: "NV", nota: "Medicamentos: dispensar em pequenas quantidades e com um familiar responsável quando possível."}
],
orient: `Obrigado por contar como você está se sentindo. Isso tem tratamento e você não está sozinho(a).
Combinamos um plano para os momentos difíceis. Guarde-o em lugar fácil, como o celular.
Se a vontade de se machucar ficar forte, ligue para o CVV (188, 24 horas, gratuito), para o SAMU (192) ou procure a unidade ou a UPA.`,
alarme: ["Vontade de se machucar que fica mais forte", "Fazer planos ou se despedir de pessoas", "Juntar remédios ou procurar meios", "Uso de álcool ou drogas para aliviar"],
encaminhar: "Risco alto → urgência psiquiátrica/CAPS III/SAMU. Risco moderado → CAPS/matriciamento com retorno breve.",
sus: {nacional: "Rede de Atenção Psicossocial (RAPS): CAPS, urgência; CVV 188 (parceria com o MS).", betim: "CAPS de referência e fluxo de urgência psiquiátrica em Betim: confirmar."},
evid: {resumo: "Perguntar sobre suicídio não aumenta o risco. NICE 2022 desaconselha escalas de risco isoladas para decidir conduta; recomenda avaliação psicossocial, plano de segurança, restrição de meios e seguimento próximo. Intervenções breves com plano de segurança e contato de seguimento reduzem comportamento suicida.", certeza: "Moderada (estimada)", fontes: ["suicidio", "nice_depressao"]},
mudancas: ["Entrada nova."],
nv: ["Telefones e serviços locais (CAPS, urgência) de Betim: preencher no plano."]
},
{
id: "abstinencia-alcool", nome: "Abstinência alcoólica leve (manejo ambulatorial)", sistema: "Saúde mental", risco: "alto",
ciap: "P15 · P16", cid: "F10.3", tags: "abstinência alcoólica tremor parar de beber diazepam tiamina CIWA",
alerta: "CIWA-Ar ≥ 15–20, alucinações, confusão, febre, convulsão (atual ou prévia em abstinência), delirium tremens prévio, comorbidade grave, gestação, uso de outras drogas ou sem acompanhante: tratamento hospitalar. Confusão + ataxia + oftalmoplegia: encefalopatia de Wernicke → tiamina parenteral e urgência.",
S: `Paciente, ___ anos, com consumo de ___ (tipo, doses/dia) há ___ anos, última dose em ___. Sintomas: tremor ___, sudorese ___, náuseas/vômitos ___, ansiedade ___, insônia ___, alucinações ___. Convulsões ou delirium em abstinências prévias ___.
Comorbidades (hepatopatia, cardiopatia) ___. Outras substâncias ___. Ideação suicida ___. Acompanhante/rede de apoio disponível para supervisão ___. Motivação para tratamento ___.`,
O: `___ estado geral, orientado ___.
${VITAIS}  Glicemia ___
Tremor ___. Sudorese ___. Agitação ___. Estigmas de hepatopatia ___. Marcha/ataxia ___. Movimentos oculares ___.
CIWA-Ar: ___.`,
A: `Síndrome de abstinência alcoólica leve (CIWA-Ar ___), sem complicações, com suporte para manejo ambulatorial.`,
P: `- Manejo ambulatorial só se CIWA-Ar < 10–15, sem convulsão/delirium prévio, sem comorbidade grave e com acompanhante.
- Benzodiazepínico por poucos dias, com redução gradual e dispensação controlada (familiar administra).
- Tiamina antes de glicose e por pelo menos alguns dias/semanas.
- Hidratação, alimentação; reavaliação diária ou em 24–48 h.
- Após a desintoxicação: plano de tratamento do uso de álcool (CAPS AD, grupos, farmacoterapia).`,
rx: [
 {trilha: "ambos", titulo: "Benzodiazepínico e tiamina (SUS Betim)", texto: `USO ORAL
1. Diazepam 10 mg ______ 15 comprimidos
   Dia 1: 1 comprimido de 6/6h; dia 2: 1 comprimido de 8/8h; dia 3: 1 comprimido de 12/12h; dias 4–5: 1 comprimido à noite; suspender.
   (Reduzir/omitir doses se sonolência.)
2. Tiamina 300 mg ______ 30 comprimidos
   Tomar 1 comprimido por dia.`, dose: "NV", nota: "Hepatopatia grave ou idoso: preferir lorazepam (Betim tem lorazepam). Receita de controle especial. Dispensar ao acompanhante. Desnutrição/risco de Wernicke: tiamina IM/IV."}
],
orient: `Parar de beber de repente pode causar tremor, suor e ansiedade nos primeiros dias. O remédio controla esses sintomas e é diminuído aos poucos.
Não beba álcool junto com o remédio. Uma pessoa da família deve guardar e dar os comprimidos.
Beba água, alimente-se e volte amanhã para reavaliação.`,
alarme: ["Convulsão", "Confusão, ver ou ouvir coisas que não existem", "Febre ou suor intenso com agitação", "Vômitos que não param", "Desequilíbrio ao andar ou visão dupla"],
encaminhar: "Sinais de abstinência moderada/grave ou complicações → urgência/internação. Tratamento do transtorno por uso de álcool → CAPS AD.",
sus: {nacional: "RENAME 2024: diazepam 5 e 10 mg, tiamina 300 mg (Básico).", betim: "REMUME Betim: diazepam 10 mg, lorazepam, tiamina 300 mg comprimido e 100 mg/mL injetável disponíveis."},
evid: {resumo: "ASAM 2020: benzodiazepínicos são 1ª linha para prevenir convulsões e delirium; manejo ambulatorial é seguro em abstinência leve a moderada com baixo risco de complicações e suporte adequado. Tiamina é recomendada para prevenir encefalopatia de Wernicke.", certeza: "Moderada (estimada)", fontes: ["asam_abst", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Doses: conferir bula e protocolo."]
},
// ───────────────────────── PELE
{
id: "acne", nome: "Acne vulgar", sistema: "Pele", risco: "baixo",
ciap: "S96", cid: "L70.0", tags: "acne espinhas cravos adolescente isotretinoína doxiciclina",
S: `Paciente, ___ anos, com lesões de acne em ___ (face, dorso, tórax) há ___. Tipo predominante ___ (comedões / pápulas e pústulas / nódulos e cistos). Cicatrizes ___. Impacto emocional ___.
Tratamentos prévios ___. Ciclos irregulares/hirsutismo ___ (SOP). Uso de cosméticos oleosos, corticoide, anabolizantes ___. Método contraceptivo ___. Gestação ___.`,
O: `BEG.
Pele: comedões ___, pápulas/pústulas ___ (nº ___), nódulos ___, cicatrizes ___, hiperpigmentação ___. Sinais de hiperandrogenismo ___.`,
A: `Acne vulgar ___ (comedoniana / inflamatória leve / moderada / grave nodular).`,
P: `- Limpeza suave 2x/dia; evitar manipular; cosméticos não comedogênicos.
- Leve: retinoide tópico ± peróxido de benzoíla.
- Moderada: tópicos + doxiciclina por até 3 meses (sempre com peróxido de benzoíla; nunca antibiótico isolado).
- Mulheres: ACO combinado é opção para acne moderada.
- Grave/nodular, cicatrizes ou falha: isotretinoína (via Protocolo de Uso – CEAF; dermatologia).
- Reavaliar em 8–12 semanas.`,
rx: [
 {trilha: "evidencia", titulo: "Tópicos (1ª linha)", texto: `USO TÓPICO
1. Adapaleno 0,1% + peróxido de benzoíla 2,5% gel ______ 1 bisnaga
   Aplicar fina camada em toda a área afetada à noite.
   (Ou adapaleno 0,1% à noite + peróxido de benzoíla 2,5–5% pela manhã.)`, dose: "NV", nota: "Irritação inicial é comum: começar em dias alternados. Adapaleno: evitar na gestação. Não constam na REMUME."},
 {trilha: "ambos", titulo: "Acne inflamatória moderada (SUS Betim)", texto: `USO ORAL
1. Doxiciclina 100 mg ______ 30 comprimidos
   Tomar 1 comprimido por dia após refeição, com água e sem deitar em seguida, por 8–12 semanas (associar tópico com peróxido de benzoíla).`, dose: "NV", nota: "Fotossensibilidade; contraindicada na gestação e < 8 anos. Minociclina (Betim) é alternativa com mais efeitos adversos."},
 {trilha: "ambos", titulo: "Mulheres – ACO combinado", texto: `USO ORAL
1. Levonorgestrel 0,15 mg + etinilestradiol 0,03 mg – 1 drágea por dia (21/7).`, dose: "NV", nota: "Checar critérios de elegibilidade. Efeito em 3–6 meses."}
],
orient: `A acne tem tratamento eficaz, mas o resultado aparece depois de 2 a 3 meses de uso contínuo.
Lave o rosto 2 vezes ao dia com sabonete suave e não esprema as espinhas. Use protetor solar oil-free.
O creme pode ressecar e arder no início: use em dias alternados na primeira semana.`,
alarme: ["Nódulos dolorosos ou cicatrizes", "Tristeza intensa ou isolamento por causa da pele", "Piora súbita com febre ou dor nas articulações"],
encaminhar: "Acne grave, nodular, com cicatrizes ou refratária → dermatologia (isotretinoína pelo Protocolo de Uso).",
idealsus: {ideal: "AAD 2024: retinoide tópico + peróxido de benzoíla como base para todos os graus; antibiótico oral só associado a tópicos e por tempo limitado.", sus: "Betim tem doxiciclina, minociclina e ACO. Peróxido de benzoíla e clindamicina tópica estão na RENAME (Básico), mas não na REMUME; retinoide tópico não consta. Isotretinoína via CEAF.", ponte: "Tópico por compra (baixo custo) como base; doxiciclina do SUS na moderada; isotretinoína via dermatologia/CEAF na grave."},
sus: {nacional: "RENAME 2024: peróxido de benzoíla 2,5% e 5% gel, fosfato de clindamicina 1% gel/solução (Básico); isotretinoína 10 e 20 mg (Especializado – Protocolo de Uso na Acne Grave).", betim: "REMUME Betim: doxiciclina 100 mg, minociclina 100 mg e levonorgestrel+etinilestradiol disponíveis; tópicos para acne não constam."},
evid: {resumo: "AAD 2024 recomenda fortemente peróxido de benzoíla, retinoides tópicos, antibióticos tópicos (com peróxido) e doxiciclina; isotretinoína para acne grave ou refratária. Monoterapia antibiótica aumenta resistência.", certeza: "Moderada a alta (estimada)", fontes: ["aad_acne", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Doses: conferir bula."]
},
{
id: "herpes-labial", nome: "Herpes labial recorrente", sistema: "Pele", risco: "baixo",
ciap: "S71", cid: "B00.1", tags: "herpes labial bolha no lábio aciclovir valaciclovir",
alerta: "Lesões extensas em imunossuprimido, eczema herpeticum ou lesão ocular: avaliação urgente.",
S: `Paciente, ___ anos, com lesões vesiculares em lábio ___ há ___ h/dias, precedidas de ardor/formigamento ___. Episódios por ano ___. Gatilhos: sol ___, febre ___, estresse ___, menstruação ___. Imunossupressão ___. Lesões oculares ___.`,
O: `BEG.
Lábio: vesículas agrupadas sobre base eritematosa ___ / crostas ___ em ___. Olhos ___.`,
A: `Herpes labial recorrente, ___ (fase prodrômica / vesicular / crostosa).`,
P: `- Tratamento episódico é útil se iniciado no pródromo ou nas primeiras horas.
- Recorrências frequentes (≥ 6/ano) ou graves: supressão diária.
- Protetor solar labial; evitar contato com lesões (beijo, compartilhar objetos).`,
rx: [
 {trilha: "evidencia", titulo: "Valaciclovir em dose única de 1 dia", texto: `USO ORAL
1. Valaciclovir 500 mg ______ 8 comprimidos
   Tomar 2 g (4 comprimidos) de 12/12h por 1 dia, iniciando no pródromo.`, dose: "NV", nota: "Ajustar na DRC. Não consta na RENAME nem na REMUME."},
 {trilha: "ambos", titulo: "Aciclovir oral (SUS Betim)", texto: `USO ORAL
1. Aciclovir 200 mg ______ 50 comprimidos
   Tomar 2 comprimidos (400 mg) 5 vezes ao dia por 5 dias, iniciando ao primeiro sinal.`, dose: "NV"},
 {trilha: "fora", titulo: "Aciclovir creme (RENAME Básico, não consta na REMUME Betim)", texto: `USO TÓPICO
1. Aciclovir 5% creme – aplicar 5 vezes ao dia por 4–5 dias.`, dose: "NV", nota: "Benefício pequeno (encurta ~0,5–1 dia)."}
],
orient: `Comece o remédio logo que sentir formigamento ou ardor no lábio: quanto mais cedo, melhor.
Evite beijar e compartilhar copos e talheres enquanto houver bolhas. Use protetor solar labial.`,
alarme: ["Bolhas perto dos olhos ou olho vermelho e dolorido", "Lesões espalhadas pela pele", "Febre alta ou lesões muito extensas"],
encaminhar: "Acometimento ocular → oftalmologia urgente. Imunossuprimido com lesões extensas → avaliação.",
idealsus: {ideal: "Valaciclovir 2 g 12/12h por 1 dia, iniciado no pródromo, reduz a duração do episódio com comodidade (ECR).", sus: "Betim tem aciclovir 200 mg oral, eficaz se iniciado cedo, com 5 tomadas diárias por 5 dias.", ponte: "Aciclovir oral do SUS para a maioria; valaciclovir por compra para quem prefere 1 dia de tratamento."},
sus: {nacional: "RENAME 2024: aciclovir 200 mg comprimido e 5% creme (Básico).", betim: "REMUME Betim: aciclovir 200 mg comprimido disponível; creme não consta."},
evid: {resumo: "Valaciclovir em alta dose por 1 dia reduziu a duração dos episódios em cerca de 1 dia em ECR. Aciclovir oral iniciado cedo tem benefício semelhante; tópicos têm efeito pequeno.", certeza: "Moderada (estimada)", fontes: ["herpes_labial", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Doses: conferir bula."]
},
{
id: "onicocriptose", nome: "Unha encravada (onicocriptose)", sistema: "Pele", risco: "baixo",
ciap: "S94", cid: "L60.0", tags: "unha encravada onicocriptose granuloma hálux cantoplastia fenol",
alerta: "Diabético ou com doença arterial periférica com infecção no pé: avaliação cuidadosa (risco de úlcera e osteomielite).",
S: `Paciente, ___ anos, com dor em borda ___ da unha do ___ há ___ dias/meses. Vermelhidão ___, secreção ___, tecido de granulação ___. Episódios prévios ___. Corte de unha arredondado ___. Calçados apertados ___. DM ___, doença arterial ___.`,
O: `BEG.
Pododáctilo ___: eritema periungueal ___, edema ___, secreção ___, granuloma ___. Estágio ___ (1 inflamatório / 2 infectado / 3 granuloma hipertrófico). Pulsos pediosos ___.`,
A: `Onicocriptose estágio ___ em ___.`,
P: `- Estágio 1: banhos mornos, elevar a borda com algodão ou fio dental, calçados largos, corte reto.
- Estágio 2–3 ou recorrente: cantoplastia parcial (retirada da espícula lateral) com matricectomia química por fenol (menor recidiva).
- Antibiótico oral não acrescenta benefício quando a espícula é removida; considerar se celulite.
- DM/DAP: cuidado redobrado, avaliação vascular.`,
rx: [
 {trilha: "ambos", titulo: "Cuidados e procedimento", texto: `ORIENTAÇÕES
1. Banho morno com água e sabão por 15 minutos, 2–3 vezes ao dia; secar bem.
2. Elevar a borda da unha com pequeno chumaço de algodão.
3. Calçados largos; cortar a unha reta, sem aprofundar os cantos.

PROCEDIMENTO (se indicado)
4. Cantoplastia parcial sob bloqueio digital com lidocaína 2% sem vasoconstritor + fenolização da matriz.`, dose: "NV", nota: "Antibiótico (cefalexina 500 mg 6/6h por 5–7 dias) apenas se celulite associada."}
],
orient: `Corte as unhas retas e não aprofunde os cantos. Use calçados largos.
Faça banhos mornos e coloque um pouco de algodão sob o canto da unha para ela crescer por cima da pele.
Se o problema voltar, uma pequena cirurgia local resolve a maioria dos casos.`,
alarme: ["Vermelhidão subindo pelo pé", "Febre", "Ferida no pé em pessoa com diabetes", "Dor intensa que piora"],
encaminhar: "Recorrência após procedimento, DM/DAP com infecção grave → cirurgia ambulatorial/angiologia.",
sus: {nacional: "RENAME 2024: lidocaína 2% sem vasoconstritor, cefalexina (Básico).", betim: "REMUME Betim: lidocaína 2% sem epinefrina e cefalexina 500 mg disponíveis. Fenol e cantoplastia na UBS: não verificado."},
evid: {resumo: "Cochrane 2012: cirurgia parcial com fenolização da matriz reduz a recorrência em relação à excisão sem fenol; antibióticos orais pré ou pós-operatórios não reduzem infecção nem recorrência.", certeza: "Moderada (estimada)", fontes: ["cochrane_unha", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: []
},
// ───────────────────────── OLHOS
{
id: "hemorragia-subconj", nome: "Hemorragia subconjuntival", sistema: "Olhos", risco: "baixo",
ciap: "F75", cid: "H11.3", tags: "olho vermelho sangue no olho mancha vermelha hiposfagma",
alerta: "Dor ocular, baixa visual, fotofobia, trauma penetrante/alto impacto, hemorragia 360° com quemose após trauma, ou episódios recorrentes/sangramentos em outros locais: avaliação oftalmológica/investigação.",
S: `Paciente, ___ anos, com mancha vermelha no olho ___ percebida em ___, sem dor ___, sem baixa visual ___. Tosse/vômitos/esforço ___. Trauma ___. Lentes de contato ___. HAS ___. Anticoagulante/antiagregante ___ (INR ___). Sangramentos em outros locais ___.`,
O: `BEG.
${VITAIS}
Olho ___: hemorragia subconjuntival ___ (setorial / difusa), acuidade visual ___, córnea ___, pupilas ___, secreção ___.`,
A: `Hemorragia subconjuntival espontânea, sem sinais de alarme.`,
P: `- Tranquilizar: reabsorve em 1–3 semanas, mudando de cor.
- Medir PA; revisar anticoagulação (INR se varfarina).
- Lágrima artificial se desconforto.
- Recorrente: investigar coagulopatia/HAS.`,
rx: [
 {trilha: "ambos", titulo: "Se desconforto", texto: `USO OFTÁLMICO
1. Dextrano 0,1% + hipromelose 0,3% colírio ______ 1 frasco
   Pingar 1 gota no olho afetado até 4 vezes ao dia, se irritação.`, dose: "NV"}
],
orient: `A mancha vermelha é um pequeno sangramento sob a película do olho, como um roxo. Não afeta a visão e some sozinha em 1 a 3 semanas.
Procure atendimento se tiver dor, visão embaçada ou se acontecer de novo.`,
alarme: ["Dor no olho", "Visão embaçada ou diminuída", "Sensibilidade à luz", "Sangramentos em outros locais (gengiva, nariz, manchas roxas)"],
encaminhar: "Trauma significativo, dor, baixa visual → oftalmologia.",
sus: {nacional: "RENAME 2024: hipromelose 0,3% e 0,5% colírio (Básico).", betim: "REMUME Betim: dextrano 0,1% + hipromelose 0,3% colírio disponível."},
evid: {resumo: "A hemorragia subconjuntival espontânea é benigna e autolimitada; associa-se a HAS, manobras de Valsalva e uso de anticoagulantes. Não requer tratamento específico.", certeza: "Baixa (estimada)", fontes: ["aao_blef", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: []
},
{
id: "corpo-estranho-ocular", nome: "Corpo estranho corneano / abrasão de córnea", sistema: "Olhos", risco: "moderado",
ciap: "F76 · F79", cid: "T15.0 · S05.0", tags: "cisco no olho corpo estranho abrasão córnea fluoresceína esmeril",
alerta: "Trabalho com martelo/esmeril/metal em alta velocidade (perfuração), pupila irregular, hifema, baixa visual importante, corpo estranho não removível ou central no eixo visual, anel de ferrugem extenso, lente de contato com infiltrado (úlcera): oftalmologia urgente.",
S: `Paciente, ___ anos, com sensação de corpo estranho no olho ___ há ___ h, após ___ (vento, poeira, esmerilhar, martelar, galho, lente de contato). Dor ___, lacrimejamento ___, fotofobia ___, baixa visual ___. Uso de óculos de proteção ___. Lentes de contato ___.`,
O: `BEG.
Acuidade visual: OD ___ / OE ___.
Olho ___: hiperemia ___, corpo estranho em ___ (córnea / conjuntiva / tarsal superior após eversão da pálpebra), anel de ferrugem ___, pupila ___, câmara anterior ___.
Fluoresceína: ___ (área de captação ___; Seidel ___).`,
A: `___ (corpo estranho corneano superficial / abrasão corneana) em olho ___, sem sinais de perfuração.`,
P: `- Acuidade visual antes de tudo; everter a pálpebra superior.
- Irrigação com soro fisiológico; remoção de corpo estranho superficial com cotonete úmido (ou agulha, se treinado e com magnificação).
- Fluoresceína para avaliar abrasão.
- Antibiótico tópico profilático; analgesia oral; não ocluir.
- Não prescrever colírio anestésico para uso domiciliar.
- Usuário de lente de contato: cobertura antipseudomonas, suspender lente.
- Reavaliar em 24–48 h (abrasão grande ou corpo estranho metálico).`,
rx: [
 {trilha: "ambos", titulo: "Antibiótico tópico (SUS Betim)", texto: `USO OFTÁLMICO
1. Tobramicina 0,3% colírio ______ 1 frasco
   Pingar 1 gota no olho afetado de 6/6h por 5 dias.

USO ORAL
2. Paracetamol 500 mg ou ibuprofeno 600 mg se dor.`, dose: "NV", nota: "Tobramicina cobre Pseudomonas (útil em usuário de lente de contato)."},
 {trilha: "fora", titulo: "Pomada (RENAME Básico, não consta na REMUME Betim)", texto: `USO OFTÁLMICO
1. Tetraciclina 0,5% ou gentamicina 0,5% pomada oftálmica – aplicar 4 vezes ao dia por 3–5 dias (lubrifica e protege).`, dose: "NV"}
],
orient: `Não esfregue o olho. Use o colírio nos horários indicados por 5 dias.
Não use colírio anestésico em casa: ele atrasa a cicatrização e pode causar úlcera.
Use óculos de proteção ao trabalhar com ferramentas, solda ou esmeril.`,
alarme: ["Visão que piora", "Dor que aumenta após 24 h", "Secreção amarelada", "Mancha branca na córnea"],
encaminhar: "Critérios de alerta → oftalmologia no mesmo dia.",
sus: {nacional: "RENAME 2024: tetraciclina 0,5% e gentamicina 0,5% pomada oftálmica, gentamicina colírio (Básico).", betim: "REMUME Betim: tobramicina 3 mg/mL colírio e fluoresceína 1% colírio disponíveis."},
evid: {resumo: "Oclusão não acelera a cicatrização de abrasões e pode atrasar (Cochrane). Antibiótico tópico profilático é prática padrão, com evidência limitada. Colírio anestésico para uso domiciliar é desaconselhado por risco de ceratopatia.", certeza: "Baixa (estimada)", fontes: ["aao_blef", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Doses: conferir bula."]
},
{
id: "blefarite", nome: "Blefarite", sistema: "Olhos", risco: "baixo",
ciap: "F72", cid: "H01.0", tags: "blefarite pálpebra inflamada crostas cílios olho seco meibomite",
S: `Paciente, ___ anos, com ardor/prurido/sensação de areia nos olhos, crostas nos cílios ___, pálpebras vermelhas ___, pior pela manhã ___, há ___. Hordéolos de repetição ___. Rosácea ___, dermatite seborreica ___. Lentes de contato ___.`,
O: `BEG.
Pálpebras: hiperemia da margem ___, crostas/escamas nos cílios ___, glândulas de Meibomius obstruídas ___, telangiectasias ___. Conjuntiva ___. Córnea ___. Acuidade visual ___.`,
A: `Blefarite crônica ___ (anterior / posterior – disfunção de glândulas de Meibomius).`,
P: `- Doença crônica: controle, não cura.
- Compressas mornas 5–10 min + massagem palpebral + limpeza das margens 1–2x/dia (manutenção a longo prazo).
- Lágrima artificial se olho seco.
- Antibiótico tópico por curto período se crostas importantes/estafilocócica.
- Disfunção meibomiana/rosácea refratária: doxiciclina oral em dose baixa por algumas semanas.`,
rx: [
 {trilha: "ambos", titulo: "Higiene palpebral e lubrificação", texto: `ORIENTAÇÕES
1. Compressa morna nos olhos fechados por 5–10 minutos, seguida de massagem suave da pálpebra em direção aos cílios, 1–2 vezes ao dia.
2. Limpar a borda das pálpebras com cotonete e xampu infantil diluído em água morna.

USO OFTÁLMICO
3. Dextrano 0,1% + hipromelose 0,3% colírio – 1 gota até 4 vezes ao dia se olho seco.`, dose: "NV"},
 {trilha: "ambos", titulo: "Refratária / meibomite (SUS Betim)", texto: `USO ORAL
1. Doxiciclina 100 mg – 1 comprimido por dia por 4–6 semanas.`, dose: "NV", nota: "Contraindicada na gestação e < 8 anos."}
],
orient: `A blefarite é crônica e volta se a higiene for interrompida. Faça a compressa morna e a limpeza das pálpebras todos os dias, mesmo quando melhorar.
Evite maquiagem nos olhos durante as crises.`,
alarme: ["Dor ocular ou visão embaçada", "Sensibilidade à luz", "Vermelhidão e inchaço em toda a pálpebra com febre"],
encaminhar: "Refratária, acometimento corneano ou dúvida diagnóstica (lesão palpebral persistente unilateral) → oftalmologia.",
sus: {nacional: "RENAME 2024: hipromelose colírio e tetraciclina pomada oftálmica (Básico); doxiciclina (Estratégico).", betim: "REMUME Betim: dextrano+hipromelose colírio e doxiciclina 100 mg disponíveis."},
evid: {resumo: "AAO 2023: compressas mornas, higiene palpebral e lubrificantes são a base; antibióticos tópicos aliviam sintomas a curto prazo; tetraciclinas orais em baixa dose para disfunção meibomiana e rosácea ocular.", certeza: "Baixa a moderada (estimada)", fontes: ["aao_blef", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: []
},
// ───────────────────────── RESPIRATÓRIO E ORL
{
id: "cerume", nome: "Cerume impactado (rolha de cera)", sistema: "Respiratório e ORL", risco: "baixo",
ciap: "H81", cid: "H61.2", tags: "cera no ouvido rolha de cera ouvido tampado lavagem otológica",
alerta: "Perda auditiva súbita (sem cera que explique) é urgência otológica. Não irrigar se perfuração, cirurgia otológica prévia, otite externa/média ativa, ouvido único funcional ou radioterapia de cabeça e pescoço.",
S: `Paciente, ___ anos, com ouvido ___ tampado/hipoacusia ___ há ___ dias, zumbido ___, tontura ___, otalgia ___, otorreia ___. Uso de cotonetes ___, aparelho auditivo ___. Perfuração ou cirurgia otológica prévia ___. Diabetes/imunossupressão ___.`,
O: `BEG.
Otoscopia: ___ (cerume impactado obstruindo ___% do conduto). Membrana timpânica ___ (visível após remoção?). Teste do sussurro ___.`,
A: `Cerume impactado em ouvido ___, sem contraindicação a irrigação.`,
P: `- Amolecer com gotas por 3–5 dias antes da remoção (água morna, óleo mineral/vegetal ou bicarbonato).
- Irrigação com água morna (37 °C) ou remoção mecânica se treinado.
- Reavaliar audição após remoção.
- Orientar a não usar cotonetes.`,
rx: [
 {trilha: "ambos", titulo: "Amolecimento", texto: `USO OTOLÓGICO
1. Óleo mineral ou vegetal (ou solução de bicarbonato de sódio 5%) – 3 a 5 gotas no ouvido ___, 2 vezes ao dia, por 3–5 dias, deitado de lado por 5 minutos.

PROCEDIMENTO
2. Irrigação com água morna (37 °C) após o amolecimento.`, dose: "NV", nota: "Interromper se dor ou tontura. Não usar em perfuração."}
],
orient: `A cera protege o ouvido e normalmente sai sozinha. Não use cotonete: ele empurra a cera para dentro.
Pingue as gotas como orientado por alguns dias e volte para a lavagem.`,
alarme: ["Dor forte no ouvido", "Saída de secreção ou sangue", "Tontura intensa", "Perda súbita de audição"],
encaminhar: "Falha na remoção, contraindicação à irrigação, perfuração → otorrinolaringologia.",
sus: {nacional: "Não há ceruminolítico na RENAME 2024.", betim: "Material de irrigação na UBS: não verificado."},
evid: {resumo: "NICE NG98: amolecer com gotas e remover por irrigação elétrica ou microssucção em serviços de atenção primária/comunitária; não usar seringa metálica manual. Gotas de água ou óleo têm eficácia semelhante a ceruminolíticos comerciais.", certeza: "Baixa a moderada (estimada)", fontes: ["nice_cerume"]},
mudancas: ["Entrada nova."],
nv: []
}
);
