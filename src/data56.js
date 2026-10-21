// ───────────── data56.js – v45: agonistas de GLP-1 e tirzepatida (item cr-glp1) + ajustes em cr-obesidade, cr-dm2, cr-masld e cr-icfep.
// Conteúdo conferido em 21/10/2026 nas bulas brasileiras (Wegovy 2026, Ozempic 2026, Rybelsus 2026, Victoza 2024, Saxenda 2021,
// Trulicity 2019, Mounjaro 2024/2026), na Diretriz ABESO 2026, na RDC 973/2025 (ANVISA), no PCDT DM2 2026, na lista CMED de 09/10/2026 e nos ECR.
Object.assign(FONTES, {
  abeso2026: {s: "ABESO 2026 – Diretriz de tratamento farmacológico da obesidade", t: "Associação Brasileira para o Estudo da Obesidade e da Síndrome Metabólica. Diretriz Brasileira de Tratamento Farmacológico da Obesidade 2026, 5ª ed. (ISBN 978-65-995414-1-4; 32 recomendações com classe e nível de evidência, metodologia AGREE II): R4 farmacoterapia com IMC ≥ 30 ou ≥ 27 com complicação (I/A); R7 meta ≥ 10% (IIa/B); R9 preferir alta potência – semaglutida e tirzepatida (IIa/C); R12 tratamento contínuo para manutenção, com o mesmo fármaco (I/A); R13 semaglutida na DCV aterosclerótica com IMC ≥ 27 sem DM (I/B); R16 semaglutida ou tirzepatida na ICFEP (I/B); R17 pré-diabetes (I/A); R19 semaglutida na MASH com fibrose (I/B); R20 osteoartrite de joelho (IIa/B); R26 tirzepatida na apneia moderada a grave (IIa/B); R28–R29 sarcopenia, treino de força e proteína 1–1,2 g/kg/dia; R32 não usar manipulados (III/C). Avaliação em 12 semanas de dose plena com perda ≥ 5% (regra não universal); reganho após suspensão (STEP 1, STEP 4, SURMOUNT 4); suspender na gestação e na lactação (diretriz).", f: "F", url: "https://abeso.org.br/wp-content/uploads/2026/03/Diretrizes-ABESO_completo_20260320.pdf"},
  bula_wegovy2026: {s: "Bula Wegovy (semaglutida 0,25–2,4 e 7,2 mg) – 2026", t: "Novo Nordisk. Wegovy – bula do profissional de saúde (v. EU-PI 12/2025 + FDA 19/03/2026): indicações no Brasil (controle de peso em adultos com IMC ≥ 30 ou ≥ 27 com comorbidade; adolescentes ≥ 12 anos com obesidade e > 60 kg; MASH não cirrótica F2–F3; redução de MACE em DCV estabelecida com IMC ≥ 27); escalonamento 0,25 → 0,5 → 1 → 1,7 → 2,4 mg a cada 4 semanas, 7,2 mg excepcional (IMC ≥ 30, ≥ 4 semanas em 2,4 mg, três injeções de 2,4 mg); adiar aumento se sintomas GI; dose esquecida até 5 dias; troca de dia com intervalo > 72 h; contraindicação só hipersensibilidade; cautela com CMT/NEM2; pancreatite (suspender; não reiniciar se confirmada); NOIA; retinopatia; aspiração na anestesia; gastroparesia grave não recomendada; TFGe < 30 e Child-Pugh C não recomendados; suspender ≥ 2 meses antes de gestação planejada; não usar na amamentação; em uso: 6 semanas abaixo de 30 °C (bula).", f: "F", url: "https://www.novonordisk.com.br/content/dam/nncorp/br/pt/pdfs/bulas/hcp/Wegovy_Bula_Profissional.pdf"},
  bula_ozempic2026: {s: "Bula Ozempic (semaglutida, DM2) – 2026", t: "Novo Nordisk. Ozempic – bula do profissional de saúde (PDF de 22/04/2026): DM2 em monoterapia (intolerância à metformina) ou associação; redução do declínio da TFGe, DRC terminal e morte CV no DM2 com DRC; 0,25 mg/semana por 4 semanas → 0,5 mg; após ≥ 4 semanas, 1 mg se necessário; doses > 1 mg não recomendadas; 0,25 mg não é dose de manutenção; reduzir sulfonilureia/insulina; dose esquecida até 5 dias; contraindicação só hipersensibilidade; cautela com CMT/NEM2; retinopatia com insulina; IC classe IV não recomendada; suspender ≥ 2 meses antes da gestação (bula).", f: "F", url: "https://www.novonordisk.com.br/content/dam/nncorp/br/pt/pdfs/bulas/hcp/Ozempic_3mL_1mg_Bula_Profissional.pdf"},
  bula_rybelsus2026: {s: "Bula Rybelsus (semaglutida oral) – 2026", t: "Novo Nordisk. Rybelsus – bula do profissional de saúde (PDF de 16/09/2026): DM2 e redução de MACE no DM2 de alto risco; 3 mg/dia por 1 mês → 7 mg; após ≥ 1 mês, 14 mg (máximo; 1 comprimido por dia); em jejum de ≥ 8 h, com até 120 mL de água, esperar ≥ 30 min para comer, beber ou tomar outros remédios; não partir; dose esquecida: pular; não recomendado na DRC terminal (bula).", f: "F", url: "https://www.novonordisk.com.br/content/dam/nncorp/br/pt/pdfs/bulas/hcp/Rybelsus_Bula_PROFISSIONAL.pdf"},
  bula_victoza2024: {s: "Bula Victoza (liraglutida, DM2) – 2024", t: "Novo Nordisk. Victoza – bula do profissional (EU-PI 22/11/2024): DM2 em adultos e > 10 anos; 0,6 mg/dia por ≥ 1 semana → 1,2 mg; após ≥ 1 semana, 1,8 mg se necessário (máximo); dose esquecida até 12 h; sem ajuste na DRC leve a grave, não recomendado na DRC terminal e na hepatopatia grave; em uso, 1 mês entre 15 e 30 °C (bula).", f: "F", url: "https://www.novonordisk.com.br/content/dam/nncorp/br/pt/pdfs/bulas/hcp/Victoza_Bula_Profissional-05-01.pdf"},
  bula_saxenda2021: {s: "Bula Saxenda (liraglutida 3 mg, obesidade) – 2021", t: "Novo Nordisk. Saxenda – bula do profissional (PDF de 18/11/2021): controle de peso em adultos com IMC ≥ 30 ou ≥ 27 com comorbidade e em adolescentes ≥ 12 anos > 60 kg; 0,6 mg/dia com aumentos de 0,6 mg a cada ≥ 1 semana até 3,0 mg; considerar parar se o aumento não for tolerado por 2 semanas; suspender se perda < 5% após 12 semanas em 3,0 mg; contraindicado na gravidez; dose esquecida até 12 h; não recomendado com ClCr < 30 (bula).", f: "F", url: "https://www.novonordisk.com.br/content/dam/nncorp/br/pt/pdfs/bulas/hcp/Saxenda_Bula_Profissional.pdf"},
  bula_trulicity2019: {s: "Bula Trulicity (dulaglutida) – 2019", t: "Eli Lilly. Trulicity – bula do paciente (CDS 26/03/2019; cópia do bulário de rede de farmácias): 0,75 mg/semana na monoterapia ou em populações vulneráveis; 1,5 mg/semana na associação; máximo 1,5 mg; redução de MACE no DM2 com ou sem DCV estabelecida; dose esquecida se faltarem ≥ 3 dias para a próxima; troca de dia se a última dose foi há ≥ 3 dias; não recomendado na DRC terminal (bula; versão antiga, conferir a vigente).", f: "F", url: "https://img.drogasil.com.br/raiadrogasil_bula/Trulicity.pdf"},
  bula_mounjaro: {s: "Bula Mounjaro (tirzepatida) – 2024/2026", t: "Eli Lilly. Mounjaro – bula do paciente (CDS 28/10/2024): 2,5 mg/semana por 4 semanas → 5 mg; aumentos de 2,5 mg após ≥ 4 semanas; máximo 15 mg; sem ajuste por idade, DRC (inclusive terminal) ou hepatopatia; dose esquecida até 4 dias (96 h); troca de dia com intervalo ≥ 72 h; não indicado com história pessoal/familiar de CMT ou NEM2; pancreatite; vesícula; retinopatia grave não estudada; aspiração na anestesia; desnutrição; ideação suicida; fora da geladeira até 21 dias abaixo de 30 °C. Indicações na bula do profissional atualizada em 06/04/2026 (BulasMed): DM2; controle crônico do peso com IMC ≥ 30 ou ≥ 27 com comorbidade; apneia obstrutiva do sono moderada a grave em adultos com obesidade (bula).", f: "F", url: "https://www.bulas.med.br/p/substancias/bula/1502615/Mounjaro.html"},
  ema_mounjaro: {s: "EMA – Mounjaro (RCM em português)", t: "European Medicines Agency. Mounjaro – resumo das características do medicamento: contraceptivo oral sem ajuste após dose única; mulheres em idade fértil devem usar contracepção; tirzepatida não recomendada na gravidez; suspender ≥ 1 mês antes de gravidez planeada (regulatória).", f: "F", url: "https://www.ema.europa.eu/pt/documents/product-information/mounjaro-epar-product-information_pt.pdf"},
  lilly_contracep: {s: "Lilly EUA – tirzepatida e contraceptivo oral", t: "Lilly Medical (EUA). Resposta sobre Zepbound e contraceptivos orais, citando a bula americana: trocar para método não oral ou acrescentar método de barreira por 4 semanas após o início e por 4 semanas após cada aumento de dose (regulatória, EUA).", f: "F", url: "https://medical.lilly.com/us/products/answers/can-adults-with-obesity-or-overweight-taking-zepbound-tirzepatide-also-take-oral-contraceptives-211019"},
  anvisa_glp1_2025: {s: "ANVISA – RDC 973/2025 (retenção de receita de GLP-1)", t: "ANVISA. Perguntas e respostas: mudanças na comercialização e escrituração dos medicamentos agonistas de GLP-1. RDC nº 471/2021 alterada pela RDC nº 973, de 23/04/2025 (vigência 23/06/2025), e IN nº 360/2025: semaglutida, liraglutida, dulaglutida, tirzepatida (e lixisenatida) vendidas com retenção de receita; receituário comum do prescritor ou do serviço, em 2 vias, legível; nome completo, idade e sexo do paciente; DCB, concentração, forma, posologia e quantidade; validade de 90 dias; uso prolongado: quantidade por 30 dias, compras sucessivas dentro dos 90 dias; receita eletrônica com assinatura avançada (norma).", f: "F", url: "https://www.gov.br/anvisa/pt-br/centraisdeconteudo/publicacoes/monitoramento/farmacovigilancia/perguntas-e-respostas/perguntas-respostas-mudancas-na-comercializacao-e-escrituracao-dos-medicamentos-inibidores-glp-1"},
  ms_conitec_glp1_2026: {s: "MS pede à CONITEC avaliação de semaglutida e liraglutida (24/09/2026)", t: "Agência Gov. Ministério da Saúde protocola na CONITEC pedido de análise para incorporação de semaglutida e liraglutida (princípios ativos sem patente) no SUS para obesidade, em 24/09/2026; critérios de acesso ainda a definir; 25 canetas registradas no país, 14 delas em 2026, incluindo versões nacionais e genéricos (notícia oficial).", f: "F", url: "https://agenciagov.ebc.com.br/noticias/202609/ministerio-da-saude-protocola-na-conitec-pedido-de-analise-para-incorporacao-de-canetas-emagrecedoras-no-sus"},
  liraglutida_generico2026: {s: "Liraglutida genérica (EMS) – 2026", t: "Mercado&Consumo (10/09/2026): DOU de 08/09/2026 publica registro de liraglutida 6 mg/mL genérica da EMS; a empresa já comercializa Olire (controle de peso) e Lirux (controle glicêmico) (notícia; fonte secundária).", f: "F", url: "https://mercadoeconsumo.com.br/10/09/2026/economia/anvisa-aprova-genericos-de-medicamentos-contra-diabetes-e-obesidade/"},
  select2023: {s: "SELECT 2023", t: "Lincoff AM et al. Semaglutide and Cardiovascular Outcomes in Obesity without Diabetes. N Engl J Med 2023;389:2221-2232. DOI 10.1056/NEJMoa2307563 (ECR, n = 17.604, ≥ 45 anos, DCV e IMC ≥ 27 sem DM; semaglutida 2,4 mg: MACE 6,5% × 8,0%, HR 0,80 (IC95% 0,72–0,90) em 39,8 meses; suspensão por evento adverso 16,6% × 8,2%; financiado pela Novo Nordisk).", f: "F", url: "https://doi.org/10.1056/NEJMoa2307563"},
  flow2024: {s: "FLOW 2024", t: "Perkovic V et al. Effects of Semaglutide on Chronic Kidney Disease in Patients with Type 2 Diabetes. N Engl J Med 2024. DOI 10.1056/NEJMoa2403347 (ECR, n = 3.533, DM2 com DRC; semaglutida 1 mg: desfecho renal maior 331 × 410 eventos, HR 0,76 (0,66–0,88); morte CV HR 0,71; morte por qualquer causa HR 0,80; mediana 3,4 anos; interrompido precocemente por eficácia).", f: "F", url: "https://doi.org/10.1056/NEJMoa2403347"},
  soul2025: {s: "SOUL 2025", t: "McGuire DK et al. Oral Semaglutide and Cardiovascular Outcomes in High-Risk Type 2 Diabetes. N Engl J Med 2025. DOI 10.1056/NEJMoa2501006 (ECR, n = 9.650, DM2 com DCV aterosclerótica e/ou DRC; semaglutida oral até 14 mg: MACE 12,0% × 13,8%, HR 0,86 (0,77–0,96); desfechos renais confirmatórios sem diferença; mediana 49,5 meses).", f: "F", url: "https://doi.org/10.1056/NEJMoa2501006"},
  step1_2021: {s: "STEP 1 2021", t: "Wilding JPH et al. Once-Weekly Semaglutide in Adults with Overweight or Obesity. N Engl J Med 2021. DOI 10.1056/NEJMoa2032183 (ECR, n = 1.961 sem DM; semaglutida 2,4 mg por 68 semanas: −14,9% × −2,4%; ≥ 10% de perda em 69,1% × 12,0%; suspensão por evento GI 4,5% × 0,8%).", f: "F", url: "https://doi.org/10.1056/NEJMoa2032183"},
  step1ext2022: {s: "STEP 1 – extensão sem tratamento (2022)", t: "Wilding JPH et al. Weight regain and cardiometabolic effects after withdrawal of semaglutide: The STEP 1 trial extension. Diabetes Obes Metab 2022. DOI 10.1111/dom.14725 (extensão exploratória, n = 327: perda de 17,3% até a semana 68; 1 ano após suspender semaglutida e intervenção de estilo de vida, reganho de 11,6 pontos percentuais – dois terços do perdido –, perda líquida de 5,6%; fatores cardiometabólicos voltaram ao basal).", f: "F", url: "https://doi.org/10.1111/dom.14725"},
  surmount1_2022: {s: "SURMOUNT-1 2022", t: "Jastreboff AM et al. Tirzepatide Once Weekly for the Treatment of Obesity. N Engl J Med 2022. DOI 10.1056/NEJMoa2206038 (ECR, n = 2.539 sem DM, 72 semanas: −15,0% (5 mg), −19,5% (10 mg), −20,9% (15 mg) × −3,1% placebo; suspensão por evento adverso 4,3–7,1% × 2,6%).", f: "F", url: "https://doi.org/10.1056/NEJMoa2206038"},
  surmount4_2024: {s: "SURMOUNT-4 2024", t: "Aronne LJ et al. Continued Treatment With Tirzepatide for Maintenance of Weight Reduction in Adults With Obesity: The SURMOUNT-4 Randomized Clinical Trial. JAMA 2024. DOI 10.1001/jama.2023.24945 (ECR de retirada, n = 670: −20,9% nas 36 semanas abertas; da semana 36 à 88, −5,5% mantendo × +14,0% com placebo; mantiveram ≥ 80% da perda 89,5% × 16,6%).", f: "F", url: "https://doi.org/10.1001/jama.2023.24945"},
  surmount5_2025: {s: "SURMOUNT-5 2025", t: "Aronne LJ et al. Tirzepatide as Compared with Semaglutide for the Treatment of Obesity. N Engl J Med 2025. DOI 10.1056/NEJMoa2416394 (ECR aberto, n = 751 sem DM, 72 semanas: tirzepatida 10–15 mg −20,2% × semaglutida 1,7–2,4 mg −13,7%; cintura −18,4 × −13,0 cm; financiado pela Lilly).", f: "F", url: "https://doi.org/10.1056/NEJMoa2416394"},
  stephfpef2023: {s: "STEP-HFpEF 2023", t: "Kosiborod MN et al. Semaglutide in Patients with Heart Failure with Preserved Ejection Fraction and Obesity. N Engl J Med 2023. DOI 10.1056/NEJMoa2306963 (ECR, n = 529, IMC ≥ 30: KCCQ-CSS +16,6 × +8,7 (diferença 7,8); peso −13,3% × −2,6%; caminhada de 6 min +20,3 m; 52 semanas).", f: "F", url: "https://doi.org/10.1056/NEJMoa2306963"},
  summit2024: {s: "SUMMIT 2024", t: "Packer M et al. Tirzepatide for Heart Failure with Preserved Ejection Fraction and Obesity. N Engl J Med 2024. DOI 10.1056/NEJMoa2410027 (ECR, n = 731, FE ≥ 50% e IMC ≥ 30; tirzepatida até 15 mg: morte CV ou piora da IC 9,9% × 15,3%, HR 0,62 (0,41–0,95), mediana 104 semanas; morte CV isolada sem diferença (2,2% × 1,4%); KCCQ-CSS +6,9).", f: "F", url: "https://doi.org/10.1056/NEJMoa2410027"},
  essence2025: {s: "ESSENCE 2025", t: "Sanyal AJ et al. Phase 3 Trial of Semaglutide in Metabolic Dysfunction-Associated Steatohepatitis. N Engl J Med 2025. DOI 10.1056/NEJMoa2413258 (ECR, MASH F2–F3 por biópsia, análise interina de 72 semanas, n = 800: resolução da esteato-hepatite 62,9% × 34,3%; redução da fibrose 36,8% × 22,4%; peso −10,5% × −2,0%).", f: "F", url: "https://doi.org/10.1056/NEJMoa2413258"},
  surmountosa2024: {s: "SURMOUNT-OSA 2024", t: "Malhotra A et al. Tirzepatide for the Treatment of Obstructive Sleep Apnea and Obesity. N Engl J Med 2024. DOI 10.1056/NEJMoa2404881 (2 ECR, apneia moderada a grave e obesidade, dose máxima tolerada 10 ou 15 mg por 52 semanas: IAH −20,0 eventos/h sem CPAP e −23,8 eventos/h com CPAP em relação ao placebo; IAH basal ~50/h).", f: "F", url: "https://doi.org/10.1056/NEJMoa2404881"},
  west_bmj2026: {s: "West 2026 (BMJ) – reganho após suspender remédios para obesidade", t: "West S et al. Weight regain after cessation of medication for weight management: systematic review and meta-analysis. BMJ 2026. DOI 10.1136/bmj-2025-085304 (RS/MA, 37 estudos, 9.341 participantes: reganho médio de 0,4 kg/mês após parar; marcadores cardiometabólicos projetados de volta ao basal em ~1,4 ano; reganho mais rápido que após programas comportamentais, em 0,3 kg/mês).", f: "F", url: "https://doi.org/10.1136/bmj-2025-085304"},
  periop_bja2025: {s: "BJAN 2025 – GLP-1 no perioperatório (síntese de consensos)", t: "Carta ao editor. The role of GLP-1 agonists in perioperative care: a suspension dilemma. Braz J Anesthesiol 2025. DOI 10.1016/j.bjane.2025.844668 (PMID 40754201): orientação multissocietária americana (inclui ASA) – decisão compartilhada e individualizada; se suspender, formulações diárias no dia e semanais 1 semana antes; dieta líquida por ≥ 24 h se suspeita de esvaziamento lento; avaliar sintomas no dia; ultrassom gástrico. SBD: suspender semaglutida 21 dias e tirzepatida 15 dias antes (três meias-vidas). Consenso britânico 2025: manter. Australianos/neozelandeses: manter e dieta líquida 24 h antes de endoscopia (síntese; carta).", f: "F", url: "https://doi.org/10.1016/j.bjane.2025.844668"},
  periop_multi2024: {s: "Orientação multissocietária 2024 – GLP-1 no perioperatório", t: "Kindel TL et al. Multisociety clinical practice guidance for the safe use of glucagon-like peptide-1 receptor agonists in the perioperative period. Surg Obes Relat Dis 2024;20(12):1183-1186. DOI 10.1016/j.soard.2024.08.033 (orientação de sociedades americanas; conteúdo conhecido apenas pela síntese do BJAN 2025, sem acesso ao texto integral).", f: "C", url: "https://doi.org/10.1016/j.soard.2024.08.033"}
});

const ORI_GLP1 = `## Como esse remédio funciona
Ele imita hormônios do intestino que dão saciedade, deixam o estômago esvaziar mais devagar e ajudam o açúcar do sangue. A fome diminui e você se satisfaz com menos comida.
É um tratamento de longo prazo, como o da pressão alta. Ele funciona enquanto é usado: quando para, a fome volta e o peso costuma voltar também.
## Como aplicar
- Aplique na barriga, na coxa ou na parte de cima do braço, sempre no mesmo dia da semana (ou no mesmo horário, se o seu é de uso diário).
- Troque o local a cada aplicação.
- Se a sua caneta usa agulha separada, use uma nova em cada aplicação e guarde a caneta sem agulha, tampada. Canetas de dose única já vêm com agulha e são descartadas inteiras.
- Guarde na geladeira (2 a 8 °C), longe do congelador. Se congelar, não use.
- O tempo que a caneta pode ficar fora da geladeira, abaixo de 30 °C, está na bula do seu remédio.
- Em viagem de avião, leve na bagagem de mão.
- Agulhas usadas vão em uma garrafa plástica dura, fechada, entregue na UBS ou na farmácia.
- Não empreste nem divida a caneta com ninguém.
## Se esquecer uma dose
- Semaglutida injetável (Ozempic, Wegovy e outras marcas): aplique se tiverem passado até 5 dias. Mais que isso, pule e aplique no dia de costume.
- Tirzepatida (Mounjaro): até 4 dias. Mais que isso, pule.
- Dulaglutida (Trulicity): aplique se faltarem 3 dias ou mais para a próxima. Se faltarem menos, pule.
- Liraglutida (uso diário): aplique se tiverem passado até 12 horas. Mais que isso, espere a próxima.
- Comprimido de semaglutida (Rybelsus): pule e tome no dia seguinte.
- Nunca aplique dose dobrada. Se ficar 2 semanas ou mais sem usar, fale com a equipe antes de voltar: pode ser preciso recomeçar com dose menor.
## Para comer bem e passar mal menos
- Coma devagar, em pratos menores, e pare assim que sentir que está satisfeito.
- Faça refeições menores e mais vezes ao dia.
- Evite frituras, comidas muito gordurosas e refeições grandes, principalmente nas semanas em que a dose aumenta.
- Não se deite nem faça exercício forte logo depois de comer.
- Beba água ao longo do dia.
- Comece as refeições pela proteína: feijão, ovo, frango, peixe, carne magra, leite ou iogurte.
- Coma frutas, verduras e legumes todos os dias.
- Faça exercício de força (musculação, elástico, peso do corpo) 2 a 3 vezes por semana, além das caminhadas. Isso protege os músculos enquanto o peso cai.
## Efeitos mais comuns
- Enjoo, vômito, diarreia, intestino preso, arroto e azia aparecem mais no começo e quando a dose sobe. Em geral melhoram em alguns dias ou semanas.
- Se o enjoo estiver forte, não aumente a dose: avise a equipe. Dá para ficar mais tempo na dose atual ou voltar para a anterior.
- Se usa insulina, glibenclamida ou gliclazida, meça a glicemia com mais frequência no começo. Tremor, suor frio ou confusão podem ser açúcar baixo: tome 1 colher de sopa de açúcar e meça de novo em 15 minutos.
- Se tiver vômito ou diarreia que não passa, beba líquidos aos poucos. Se você toma metformina ou dapagliflozina, pare de tomar até melhorar e procure a unidade. Se toma remédio de pressão (losartana, enalapril, hidroclorotiazida, furosemida), pergunte à equipe se deve parar nesses dias.
## Avise a equipe ou procure atendimento
- Dor forte na barriga que não passa, às vezes indo para as costas, com ou sem vômitos: pare o remédio e procure atendimento no mesmo dia.
- Dor do lado direito da barriga, febre ou olhos amarelados.
- Vômitos o dia todo, sem conseguir beber água, ou urina muito escura e pouca.
- Perda ou embaçamento súbito da visão, mesmo que de um olho só: procure atendimento no mesmo dia.
- Inchaço da boca, da língua ou falta de ar depois da aplicação: urgência.
- Tristeza forte, pensamentos de se machucar ou mudança grande de humor.
## Gravidez, cirurgia e exames
- Use um método para não engravidar enquanto estiver em tratamento. Se quiser engravidar, converse antes: a semaglutida deve ser parada pelo menos 2 meses antes, e a tirzepatida pelo menos 1 mês antes.
- Se usa tirzepatida e pílula anticoncepcional, use também camisinha nas 4 semanas depois de começar e depois de cada aumento de dose, ou troque por um método que não seja pílula.
- Se engravidar, pare o remédio e procure a unidade.
- Não use durante a amamentação, a não ser com orientação médica.
- Antes de qualquer cirurgia, endoscopia ou exame com sedação, avise que usa esse remédio. Siga a orientação do serviço que vai fazer o procedimento sobre quando parar e sobre a dieta líquida no dia anterior.
## Compra segura
- A farmácia fica com uma via da receita. A receita vale por 90 dias.
- Compre só em farmácia, produto com registro na ANVISA, na caixa lacrada.
- Não use remédio manipulado, "caneta paraguaia", produto vendido pela internet ou sem nota: há risco de dose errada e de contaminação.
## Se precisar parar
- Combine com a equipe antes de parar. Se você tem diabetes, o açúcar pode subir e outro remédio pode ser necessário.
- Mantenha a alimentação, o exercício de força e as caminhadas. Pese-se 1 vez por semana e volte à consulta em 1 a 2 meses.`;

CONDICOES.push(
{
  id: "cr-glp1", modulo: "cr", nome: "Agonistas de GLP-1 e tirzepatida: indicação, esquemas, efeitos e suspensão", sistema: "Obesidade", risco: "moderado",
  ciap: "T82 · T90", cid: "E66 · E11 · Z79.8",
  tags: "GLP-1 GIP agonista semaglutida Ozempic Wegovy Rybelsus Ozivy Poviztra Semaclique liraglutida Victoza Saxenda Olire Lirux dulaglutida Trulicity tirzepatida Mounjaro caneta emagrecedora obesidade sobrepeso DM2 diabetes SELECT FLOW ICFEP MASH esteatose apneia náusea vômito constipação pancreatite vesícula suspender parar reganho efeito sanfona manutenção receita retida RDC 973 cirurgia anestesia endoscopia jejum gestação contraceptivo",
  alerta: "Dor abdominal forte e persistente (às vezes irradiada para o dorso), com ou sem vômitos: suspender e investigar pancreatite no mesmo dia; não reiniciar se confirmada. Perda súbita de visão: oftalmologia no mesmo dia (NOIA). Vômitos/diarreia com desidratação: risco de lesão renal aguda. Com insulina ou sulfonilureia: considerar reduzir a dose ao iniciar e aumentar a automonitorização (hipoglicemia).",
  guia: {
    resumo: "Semaglutida, liraglutida e dulaglutida (agonistas de GLP-1) e tirzepatida (GIP/GLP-1) tratam **DM2 e obesidade** e têm desfechos duros: **MACE** (SELECT, SOUL, LEADER, REWIND), **rim** no DM2 com DRC (FLOW), **sintomas e eventos na ICFEP** (STEP-HFpEF, SUMMIT), **MASH** (ESSENCE) e **apneia** (SURMOUNT-OSA). **Não estão no SUS** (CONITEC 2025; PCDT DM2 2026): a compra exige **receita em 2 vias retida, válida por 90 dias** (RDC 973/2025). **O peso volta quando o remédio para**: é tratamento contínuo, e isso entra na decisão antes de começar.",
    secoes: [
      {t: "Quando indicar", b: [
        {tab: {h: ["Situação", "Fármaco com evidência", "Resultado principal (ECR)", "Bula no Brasil / diretriz"], r: [
          ["Obesidade: IMC ≥ 30, ou ≥ 27 com complicação", "Tirzepatida > semaglutida 2,4 mg > liraglutida 3 mg", "72 sem: tirzepatida −15% a −21% (placebo −3%); 68 sem: semaglutida 2,4 −14,9% (placebo −2,4%); frente a frente: −20,2% × −13,7% [F]", "Wegovy, Mounjaro, Saxenda/Olire [F]; ABESO R4 (I/A) e R9: preferir alta potência (IIa/C) [F]"],
          ["DCV aterosclerótica + IMC ≥ 27, **sem** DM", "Semaglutida 2,4 mg", "SELECT: MACE 6,5% × 8,0% em 3,3 anos (HR 0,80; **NNT ≈ 67**) [F]", "Wegovy (indicação de bula) [F]; ABESO R13 (I/B) [F]"],
          ["DM2 + DCV aterosclerótica ou alto risco CV", "Semaglutida SC ou oral, dulaglutida, liraglutida", "SOUL (oral): MACE 12,0% × 13,8% em ~4 anos (HR 0,86; NNT ≈ 56) [F]; SUSTAIN-6, REWIND e LEADER [C]", "Rybelsus e Trulicity com indicação de redução de MACE [F]"],
          ["DM2 + DRC (albuminúria)", "Semaglutida 1 mg", "FLOW: desfecho renal maior 18,7% × 23,2% em 3,4 anos (HR 0,76; NNT ≈ 22); morte CV HR 0,71 [F]", "Ozempic (indicação renal na bula) [F]"],
          ["ICFEP + IMC ≥ 30", "Tirzepatida ou semaglutida 2,4 mg", "SUMMIT: morte CV ou piora da IC 9,9% × 15,3% (HR 0,62) [F]; STEP-HFpEF: KCCQ +7,8 pontos [F]", "ABESO R16 (I/B) [F]; ver item ICFEP"],
          ["MASH com fibrose F2–F3", "Semaglutida 2,4 mg", "ESSENCE: resolução da MASH 62,9% × 34,3%; menos fibrose 36,8% × 22,4% [F]", "Wegovy (indicação de bula) [F]; ABESO R19 (I/B) [F]"],
          ["Apneia do sono moderada a grave + obesidade", "Tirzepatida 10–15 mg", "SURMOUNT-OSA: IAH −20 a −24 eventos/h além do placebo [F]", "Mounjaro (indicação de bula) [F]; ABESO R26 (IIa/B) [F]"],
          ["Pré-diabetes + obesidade; osteoartrite de joelho com IMC ≥ 30", "Pré-diabetes: farmacoterapia para obesidade; joelho: semaglutida", "Prevenir ou retardar DM2; dor e função no joelho", "ABESO R17 (I/A); R20 semaglutida (IIa/B) e R21 outros se ela não for viável (IIb/C) [F]"]
        ]}, nota: "NNT calculados a partir das taxas dos ECR [I]. Adolescentes ≥ 12 anos com obesidade e > 60 kg têm indicação de bula para Wegovy e Saxenda [F]: conduzir com a pediatria/endocrinologia [I]."},
        {perola: {t: "No DM2 do SUS, o iSGLT2 vem antes", x: "A dapagliflozina sai grátis pela Farmácia Popular (DM2 com DCV a partir de 65 anos) ou pelo CEAF nos critérios do PCDT DM2 2026 [F] e protege coração e rim (ver item DM2). O agonista de GLP-1 entra quando há **DCV aterosclerótica, obesidade ou DRC albuminúrica** e a pessoa pode comprar, de preferência associado [I].", d: "maior benefício cardiorrenal pelo menor custo para o paciente.", l: "F"}},
        {ir: [["cr-dm2", "DM2 – escolha do tratamento"], ["cr-obesidade", "Obesidade"], ["cr-icfep", "ICFEP"], ["cr-masld", "Esteatose (MASLD)"]]},
        {ref: ["abeso2026", "select2023", "soul2025", "flow2024", "summit2024", "stephfpef2023", "essence2025", "surmountosa2024", "surmount1_2022", "step1_2021", "surmount5_2025", "bula_wegovy2026", "bula_ozempic2026", "bula_rybelsus2026", "bula_mounjaro"]}
      ]},
      {t: "Antes de começar: contraindicações e exames", b: [
        {h: "Perguntar e examinar"},
        {ul: [
          "**Carcinoma medular de tireoide (CMT) pessoal ou familiar, ou NEM 2:** as bulas do Mounjaro (\"não é indicado\") e do Trulicity (\"não utilize\") excluem o uso; as de semaglutida (Wegovy, Ozempic, Rybelsus) pedem cautela; as de liraglutida (Victoza 2024, Saxenda 2021) não citam CMT/NEM2, só cautela com doença tireoidiana [F]. Na prática, **não iniciar nenhum fármaco da classe** [I]. Examinar o pescoço; nódulo palpável → investigar antes [I].",
          "**Pancreatite prévia:** cautela (bula) [F]. Pancreatite durante o uso → suspender e não reiniciar [F].",
          "**Gastroparesia:** grave – semaglutida e tirzepatida não recomendadas; qualquer gastroparesia diabética ou doença inflamatória intestinal – liraglutida não recomendada (bulas) [F]. **Colelitíase sintomática:** tratar antes ou decidir com o paciente [I].",
          "**Retinopatia diabética:** com semaglutida, mais complicações da retinopatia (sobretudo com insulina e queda rápida da HbA1c); não usar se instável ou não controlada [F]. Fundo de olho recente antes de iniciar [I].",
          "**Gestação, desejo de gestar ou amamentação:** não usar (ver seção própria) [F]. Combinar contracepção [F].",
          "**Insulina ou sulfonilureia:** planejar a redução da dose (ver escalonamento) [F].",
          "**Transtorno alimentar** (compulsão com purgação, anorexia) ou baixo peso: não iniciar [I]. **Idade > 60 anos ou risco de sarcopenia:** avaliar força e massa muscular antes (ABESO R28, I/C) [F].",
          "**DRC:** semaglutida e liraglutida sem ajuste, mas Wegovy e Saxenda não são recomendados com TFGe/ClCr < 30, e Rybelsus, Victoza e Trulicity não na DRC terminal; tirzepatida sem ajuste, inclusive na terminal (bulas) [F]. **IC NYHA IV:** semaglutida e liraglutida não recomendadas. **Hepatopatia grave:** Wegovy, Victoza e Saxenda não recomendados (bulas) [F].",
          "**Interações:** varfarina ou acenocumarol – controlar a RNI com mais frequência ao iniciar (bulas de semaglutida e liraglutida; para tirzepatida, a EMA pede monitorar também após cada aumento, e a bula brasileira do Mounjaro não exige ajuste) [F]. **Levotiroxina com semaglutida oral:** a exposição à tiroxina sobe 33% – considerar TSH em 6–8 semanas (bula) [F]; como os dois são em jejum, tomar o Rybelsus primeiro e a levotiroxina 30 minutos depois [I]. Remédios orais de janela estreita (digoxina, antiepilépticos, lítio): monitorar no início e após aumentos de dose (EMA) [F].",
          "Peso, altura, IMC, cintura, PA e FC na 1ª consulta e em todo retorno [I]."
        ]},
        {h: "Exames basais"},
        {tab: {h: ["Exame", "Por quê"], r: [
          ["Glicemia de jejum e HbA1c", "Diagnosticar DM2/pré-diabetes e planejar redução de insulina ou sulfonilureia [F]"],
          ["Creatinina com TFGe; EAS e RAC", "Função renal de base (risco de lesão renal com vômitos) e DRC [F]"],
          ["TGO, TGP, GGT (TP e albumina se suspeita de hepatopatia); FIB-4 se esteatose", "MASLD/MASH muda a escolha (semaglutida) [F]"],
          ["Perfil lipídico (Lp(a) ao menos 1 vez, se possível)", "Risco cardiovascular [F]"],
          ["β-hCG, se houver chance de gestação", "Não iniciar na gestação [I]"],
          ["Fundo de olho / retinografia no DM2", "Retinopatia instável é contraindicação prática [I]"]
        ]}, nota: "Lista de monitoramento da ABESO 2026 (glicemia, função renal, EAS e albuminúria, provas hepáticas, lipídios) [F]. **Não pedir de rotina:** calcitonina [C] e amilase/lipase – a elevação isolada das enzimas não prediz pancreatite (bula) [F]; TSH só se houver clínica [I]."},
        {ref: ["bula_mounjaro", "bula_wegovy2026", "bula_ozempic2026", "bula_saxenda2021", "bula_victoza2024", "bula_trulicity2019", "abeso2026"]}
      ]},
      {t: "Esquemas completos por fármaco", b: [
        {tab: {h: ["Fármaco (marcas no Brasil)", "Indicação na bula", "Início e aumento", "Manutenção / máximo", "Dose esquecida"], r: [
          ["**Semaglutida SC 1×/semana** – Ozempic e Extensior (Novo Nordisk); cópias: Ozivy, Semaclique, Orsema, Owozy, Seemasun, Zempneo, Semavy", "DM2; rim no DM2 com DRC (Ozempic)", "0,25 mg por 4 semanas → 0,5 mg; após ≥ 4 semanas, 1 mg se precisar", "0,5 ou 1 mg; **máx. 1 mg** na bula brasileira (0,25 mg não é dose de manutenção)", "Até 5 dias: aplicar; depois, pular"],
          ["**Semaglutida SC 1×/semana** – Wegovy, Poviztra", "Obesidade; MASH F2–F3; MACE na DCV com IMC ≥ 27", "0,25 → 0,5 → 1 → 1,7 → 2,4 mg, cada degrau por 4 semanas (16 semanas)", "2,4 mg (na MASH, 1,7 mg se não tolerar – bula; na obesidade, ficar em 1,7 mg é decisão individual [I]); **7,2 mg** excepcional: IMC ≥ 30, ≥ 4 semanas em 2,4 mg e resposta insuficiente (3 injeções de 2,4 mg); sem ganho adicional, voltar para 2,4 mg", "Até 5 dias; várias doses perdidas: considerar reiniciar o escalonamento"],
          ["**Semaglutida oral 1×/dia** – Rybelsus 3, 7, 14 mg", "DM2; MACE no DM2 de alto risco", "3 mg por 30 dias → 7 mg; após ≥ 30 dias, 14 mg se precisar", "7 ou 14 mg; **1 comprimido por dia**, nunca 2", "Pular e tomar no dia seguinte"],
          ["**Liraglutida 1×/dia** – Victoza, Lirux", "DM2 (adultos e > 10 anos)", "0,6 mg por ≥ 1 semana → 1,2 mg; após ≥ 1 semana, 1,8 mg se precisar", "1,2 ou 1,8 mg; máx. 1,8 mg", "Até 12 h: aplicar; depois, esperar o dia seguinte"],
          ["**Liraglutida 1×/dia** – Saxenda, Olire", "Obesidade (adultos e ≥ 12 anos > 60 kg)", "0,6 mg/dia e +0,6 mg a cada ≥ 1 semana (0,6 → 1,2 → 1,8 → 2,4 → 3,0)", "3,0 mg; **suspender se perda < 5% após 12 semanas em 3,0 mg**", "Até 12 h"],
          ["**Dulaglutida 1×/semana** – Trulicity 0,75 e 1,5 mg", "DM2; MACE no DM2 com ou sem DCV", "0,75 mg (monoterapia ou frágeis) ou 1,5 mg (associação)", "1,5 mg na bula consultada (2019); doses de 3 e 4,5 mg não constam da lista CMED", "Aplicar se faltarem ≥ 3 dias para a próxima; senão, pular"],
          ["**Tirzepatida 1×/semana** – Mounjaro (caneta de dose única, frasco-ampola ou caneta multidose de 4 doses)", "DM2; obesidade; apneia moderada a grave com obesidade", "2,5 mg por 4 semanas → 5 mg; depois +2,5 mg a cada ≥ 4 semanas se precisar", "5, 10 ou 15 mg; **máx. 15 mg**; na apneia, 10 ou 15 mg (SURMOUNT-OSA); 2,5 mg não é dose de manutenção", "Até 4 dias (96 h); depois, pular"]
        ]}, nota: "Bulas brasileiras de Ozempic, Wegovy, Rybelsus, Victoza, Saxenda, Trulicity e Mounjaro; apresentações e marcas da lista CMED de 09/10/2026 [F]. Lirux e Olire: indicação pela notícia do registro (fonte secundária) [F]; nas cópias de semaglutida, conferir a indicação na bula de cada marca [NV]. Semanais: dá para mudar o dia, com intervalo ≥ 3 dias (72 h) entre as doses [F]."},
        {alerta: "Não associar dois agonistas de GLP-1 (ou GLP-1 + tirzepatida): sem estudo e com risco de efeitos somados (bulas; ABESO) [F]. Ao trocar de um para outro, suspenda o anterior."},
        {h: "Como escalonar na prática"},
        {ul: [
          "Só subir se a dose atual foi bem tolerada. Com náusea ou vômitos importantes, **adiar o aumento** até melhorar; se persistir, voltar à dose anterior (bula Wegovy) [F].",
          "Não é obrigatório chegar à dose máxima: a dose de manutenção pode ser a definida em decisão compartilhada (ABESO) [F]. Manter a menor dose que atinge a meta e é tolerada [I].",
          "Retorno pelo menos **mensal nos 3 primeiros meses** (ABESO) [F]. Meta para a maioria: **perder ≥ 10%** (R7, IIa/B) [F].",
          "**Após 12 semanas na dose plena**, perda < 5% sugere trocar ou associar (ABESO); a regra não é universal: na DCV (SELECT), parte do benefício independe do peso [F].",
          "**Insulina e sulfonilureia:** considerar reduzir ao iniciar; reduzir a insulina aos poucos, com automonitorização (bulas) [F]. Como ponto de partida, se a HbA1c estiver ≤ 8%: sulfonilureia pela metade (ou suspensa) e insulina basal −10 a 20% [I].",
          "Não substitui a insulina e não se usa no DM1: houve cetoacidose com retirada ou redução rápida da insulina ao iniciar (bulas) [F]. Magro, com perda de peso e hiperglicemia: pensar em LADA/DM1 [I].",
          "Metformina e iSGLT2 podem ser mantidos sem ajuste (bulas) [F].",
          "Interrupção de ≥ 2 semanas: em geral, reiniciar 1 ou 2 degraus abaixo [I] (bula do Wegovy: considerar reduzir a dose) [F]."
        ]},
        {ref: ["bula_ozempic2026", "bula_wegovy2026", "bula_rybelsus2026", "bula_victoza2024", "bula_saxenda2021", "bula_trulicity2019", "bula_mounjaro", "liraglutida_generico2026", "cmed_pmc2026", "abeso2026", "surmountosa2024"]}
      ]},
      {t: "Efeitos adversos: o que fazer", b: [
        {tab: {h: ["Efeito", "Quando e quanto", "Conduta"], r: [
          ["Náusea, vômito", "Muito comuns, sobretudo no escalonamento; costumam melhorar em dias a semanas [F]", "Porções menores e mais vezes, comer devagar, parar ao se sentir satisfeito, evitar gordura e não deitar após comer (ABESO) [F]; adiar o aumento ou voltar à dose anterior [F]; antiemético pontual, como ondansetrona (compra) [I]; vômitos persistentes → avaliar hidratação, creatinina e pancreatite [I]"],
          ["Constipação", "Comum [F]", "Água, fibra ajustada e atividade física (ABESO) [F]; lactulose (REMUME) ou PEG se necessário [I]"],
          ["Diarreia", "Comum [F]", "Hidratação e SRO; ajustar fibras (ABESO) [F]; loperamida pontual sem febre ou sangue [I]"],
          ["Azia, arroto, distensão", "Comuns [F]", "Refeições menores, sem deitar após comer; omeprazol se persistir [I]"],
          ["Desidratação e lesão renal aguda", "Rara, após vômitos/diarreia [F]", "Líquidos; creatinina; suspender metformina e iSGLT2 até voltar a comer e beber (regras de dia de doença) [I]"],
          ["Hipoglicemia", "Com insulina ou sulfonilureia [F]", "Reduzir insulina/sulfonilureia [F]; regra dos 15 g [I]"],
          ["Pancreatite aguda", "Rara [F]", "Dor abdominal intensa e persistente: suspender, lipase e urgência; **não reiniciar** se confirmada [F]"],
          ["Colelitíase / colecistite", "Comum com tirzepatida (bula) [F]; mais frequente com perda de peso rápida [C]", "Dor em hipocôndrio direito, febre, icterícia → ultrassom e avaliação no mesmo dia [I]"],
          ["Perda súbita de visão (NOIA)", "Risco aumentado em estudos epidemiológicos com semaglutida (bula) [F]; muito rara (EMA, 2025) [C]", "Oftalmologia no mesmo dia; suspender se confirmada [F]"],
          ["Piora da retinopatia diabética", "Com semaglutida, sobretudo com insulina e queda rápida da HbA1c [F]", "Fundo de olho de seguimento; descida mais lenta da HbA1c [I]"],
          ["Reação no local, urticária; anafilaxia ou angioedema", "Raras [F]", "Graves: suspender e tratar como anafilaxia [F]"],
          ["Perda de massa muscular", "Tirzepatida: ~26% do peso perdido é massa magra, semelhante ao placebo (SURMOUNT-1, post hoc); semaglutida: ~40% (subestudo do STEP 1) – citados na ABESO [F]; relevância funcional incerta [I]", "Treino resistido 2–3×/semana e proteína 1–1,2 g/kg/dia em idosos ou sarcopênicos; > 1,4 g/kg só com cautela renal (ABESO) [F]"],
          ["Ingestão muito baixa, desnutrição", "Relatada (bula do Mounjaro) [F]", "Revisar a dieta; polivitamínico se necessário (ABESO) [F]; reduzir a dose [I]"],
          ["Humor, ideação suicida", "Relatos com produtos para perda de peso (bula do Mounjaro) [F]; avaliação da EMA de 2024 não confirmou relação causal [C]", "Perguntar ativamente; reavaliar continuidade [F]"],
          ["Queda de cabelo", "Associada à perda de peso rápida [C]", "Tranquilizar; dieta com proteína suficiente [I]"],
          ["Aumento da frequência cardíaca", "Pequeno aumento da FC de repouso é esperado na classe [C]", "Com liraglutida 3 mg, suspender se a FC de repouso ficar aumentada de forma relevante e sustentada (bula do Saxenda) [F]"]
        ]}},
        {ref: ["bula_wegovy2026", "bula_ozempic2026", "bula_mounjaro", "abeso2026", "surmount1_2022", "remume"]}
      ]},
      {t: "Cirurgia, endoscopia e sedação", b: [
        {p: "O esvaziamento gástrico lento aumenta o risco de resíduo gástrico e broncoaspiração na anestesia geral ou na sedação profunda (bulas) [F]. As orientações divergem:"},
        {tab: {h: ["Fonte", "Conduta"], r: [
          ["Orientação multissocietária dos EUA, com a ASA (2024)", "Decisão compartilhada e individualizada (considerar escalonamento, doses semanais ou altas, sintomas GI); se suspender: diários no dia do procedimento e semanais 1 semana antes; **dieta líquida por ≥ 24 h** se houver suspeita de esvaziamento lento; avaliar sintomas GI no dia; ultrassom gástrico se dúvida [F]"],
          ["SBD (posição citada no BJAN 2025)", "Suspender semaglutida 21 dias e tirzepatida 15 dias antes (três meias-vidas) [F]; existe atualização da SBD de 2025 citada em portal secundário, não conferida no original [NV]"],
          ["Sociedades britânicas (2025)", "Manter, com decisão compartilhada sobre o risco [F]"],
          ["Sociedades da Austrália e da Nova Zelândia", "Manter; dieta líquida 24 h antes de endoscopia; considerar todos como não estando em jejum [F]"]
        ]}, nota: "Síntese publicada no Brazilian Journal of Anesthesiology (2025) [F]."},
        {ul: [
          "Na APS: registrar o fármaco, a dose, o dia da aplicação e se está em escalonamento na guia de encaminhamento ou no pedido de exame [I].",
          "Orientar o paciente a informar o uso ao anestesista ou ao endoscopista e a seguir o protocolo **do serviço que fará o procedimento** [I].",
          "No DM2, não suspender sem plano de controle glicêmico no período [I]."
        ]},
        {ref: ["periop_bja2025", "periop_multi2024", "bula_wegovy2026", "bula_mounjaro"]}
      ]},
      {t: "Gestação, contracepção e amamentação", b: [
        {ul: [
          "**Semaglutida:** não usar na gestação; suspender **≥ 2 meses antes** de gestação planejada (meia-vida longa); não usar na amamentação (bulas brasileiras) [F].",
          "**Tirzepatida:** a bula brasileira (2024) permite o uso na gestação e na lactação só se o benefício justificar o risco; a EMA não recomenda na gestação e manda suspender **≥ 1 mês antes** da gravidez planejada [F]. Seguir a EMA [I].",
          "**Tirzepatida e pílula:** a bula americana orienta trocar por método não oral ou associar barreira por **4 semanas após o início e após cada aumento de dose** [F]; a bula brasileira (2024) e a EMA não exigem ajuste [F]. Seguir a orientação mais conservadora e preferir DIU ou implante [I].",
          "**Liraglutida (Saxenda):** contraindicada na gestação e na amamentação; suspender se desejar engravidar [F].",
          "Gestação durante o uso: suspender e iniciar o pré-natal; dados em humanos limitados [F]. ABESO: interromper na gestação planejada ou confirmada e na lactação [F].",
          "Com semaglutida, a eficácia do contraceptivo oral não é reduzida (bula) [F]. Vômitos intensos podem reduzir a absorção da pílula: usar barreira nesses dias [I]."
        ]},
        {ir: [["mu-preconcepcional", "Pré-concepção"], ["pp-contracepcao", "Contracepção"]]},
        {ref: ["bula_wegovy2026", "bula_ozempic2026", "bula_saxenda2021", "bula_mounjaro", "ema_mounjaro", "lilly_contracep", "abeso2026"]}
      ]},
      {t: "Suspensão e manutenção do peso", b: [
        {tab: {h: ["Estudo", "O que aconteceu ao parar"], r: [
          ["STEP 1 – extensão (semaglutida)", "1 ano após parar: reganho de 2/3 do peso perdido (perda líquida de 5,6%); a maioria dos fatores cardiometabólicos voltou ao basal [F]"],
          ["SURMOUNT-4 (tirzepatida)", "Após −20,9% em 36 semanas: quem trocou para placebo reganhou 14% em 1 ano; quem manteve perdeu mais 5,5%. Mantiveram ≥ 80% da perda: 89,5% × 16,6% [F]"],
          ["STEP 4 (semaglutida)", "Após −10,6% em 20 semanas: placebo reganhou 6,9%; semaglutida perdeu mais 7,9% (citado na ABESO) [F]"],
          ["Metanálise BMJ 2026 (37 estudos)", "Reganho médio de 0,4 kg/mês; marcadores cardiometabólicos de volta ao basal em ~1,4 ano; mais rápido que após programas comportamentais [F]"]
        ]}},
        {perola: {t: "É tratamento contínuo", x: "A ABESO recomenda manter o fármaco para manutenção do peso, em geral o mesmo que funcionou (R12, I/A). Duração, dose e esquema ideais de manutenção **são desconhecidos**, e na impossibilidade de uso contínuo **não há estudos sólidos de outra estratégia** que mantenha o peso [F].", d: "decisão realista antes de começar evita gasto sem benefício sustentado.", l: "F"}},
        {h: "Se for preciso parar (custo, efeito adverso, gestação)"},
        {ol: [
          "Não há síndrome de abstinência: pode parar sem desmame; reduzir a dose aos poucos não tem ECR mostrando menos reganho [I].",
          "Antes de parar, intensificar o cuidado: treino de força e aeróbio, proteína em todas as refeições, plano alimentar com nutrição/eMulti (ABESO; exercício melhorou a manutenção com liraglutida) [F].",
          "No DM2: planejar a substituição (metformina, iSGLT2, insulina) e repetir a HbA1c em 3 meses [I].",
          "Pesar-se 1 vez por semana e retornar em 4–8 semanas; reganho ≥ 5% → rediscutir reinício ou outra opção [I].",
          "Para reiniciar após ≥ 2 semanas sem uso: recomeçar mais baixo e escalonar de novo [I]."
        ]},
        {alerta: "Espaçar aplicações (a cada 10–14 dias) ou fracionar doses para economizar não tem estudo e altera a exposição ao fármaco: não recomendar [I]."},
        {ref: ["step1ext2022", "surmount4_2024", "west_bmj2026", "abeso2026"]}
      ]},
      {t: "Receita, compra e custo", b: [
        {ul: [
          "**RDC 973/2025 (vigente desde 23/06/2025):** semaglutida, liraglutida, dulaglutida, tirzepatida e lixisenatida só com **retenção de receita** [F].",
          "Receituário comum, **2 vias**, legível; **nome completo, idade e sexo** do paciente; nome genérico (DCB), concentração, forma, posologia e quantidade; identificação, endereço e assinatura do prescritor; data [F].",
          "**Validade de 90 dias.** No uso contínuo, informar a quantidade para cada 30 dias; a receita serve para compras sucessivas dentro dos 90 dias [F].",
          "Receita eletrônica com assinatura eletrônica avançada é aceita [F].",
          "**Não prescrever manipulados** nem produtos sem registro (ABESO R32, classe III) [F]."
        ]},
        {tab: {h: ["Opção", "Apresentação (CMED)", "Teto (PMC) por mês de tratamento"], r: [
          ["Semaglutida SC 0,25–0,5 mg (DM2)", "Ozivy 1,5 mL · Semaclique · Ozempic", "R$ 664 (Ozivy) · R$ 1.152 (Semaclique) · R$ 1.314 (Ozempic)"],
          ["Semaglutida SC 1 mg (DM2)", "Caneta 3 mL (4 doses)", "R$ 1.152 (Semaclique) · R$ 1.314 (Ozempic, Ozivy e outras)"],
          ["Semaglutida oral 3, 7 ou 14 mg", "Rybelsus 30 comprimidos", "R$ 1.408"],
          ["Liraglutida 1,2 mg/dia (DM2)", "2 canetas de 3 mL (18 mg cada)", "R$ 709–713 (Liraclick, Lirux, Victoza)"],
          ["Liraglutida 3 mg/dia (obesidade)", "5 canetas de 3 mL", "R$ 1.772 (Liraclick) · R$ 1.783 (Olire, Saxenda); Lirux, de bula para DM2, R$ 1.738"],
          ["Dulaglutida 1,5 mg/semana", "Trulicity 2 canetas (2 semanas)", "R$ 813"],
          ["Semaglutida 2,4 mg (obesidade)", "Wegovy/Poviztra – 1 caneta de 4 doses por degrau", "R$ 1.314 até 1 mg · R$ 1.969 (1,7 mg) · R$ 2.532 (2,4 mg)"],
          ["Tirzepatida", "Caneta multidose (4 doses)", "R$ 1.682 (2,5 mg) · R$ 2.276 (5 mg) · R$ 3.224 (7,5 e 10 mg) · R$ 4.173 (12,5 e 15 mg)"]
        ]}, nota: "Preço-teto (PMC) da lista CMED de 09/10/2026 com ICMS de MG (18% marca/similar/novo) [F]; mês = 4 doses semanais, 30 comprimidos ou a quantidade de canetas para ~30 dias [I]. Na CMED, a caixa com 2 canetas de 1,5 mL da Ozivy custa R$ 2.629 (R$ 1.314 por caneta): o teto de R$ 664 da caixa com 1 caneta pode ser inconsistência da lista – conferir no balcão [NV]. No balcão o preço costuma ser menor. Tirzepatida em frasco-ampola ou caneta de dose única sai mais caro por mês que a multidose (CMED) [F]."},
        {ref: ["anvisa_glp1_2025", "abeso2026", "cmed_pmc2026", "icms_mg_med"]}
      ]},
      {t: "No SUS e em Betim", b: [
        {trio: {
          ideal: "Agonista de GLP-1 ou tirzepatida contínuo para obesidade com complicação, DCV com IMC ≥ 27, ICFEP, MASH com fibrose e apneia; no DM2 com DCV, DRC ou obesidade, associado à metformina e ao iSGLT2.",
          sus: "**Nenhum agonista de GLP-1 está incorporado:** obesidade – liraglutida e semaglutida 2,4 mg não incorporadas (CONITEC, ago/2025) [F]; DM2 – não incorporados (PCDT DM2 2026) [F]. Não constam da REMUME de Betim [F]. Em 24/09/2026 o Ministério da Saúde pediu à CONITEC nova avaliação de semaglutida e liraglutida para obesidade [F].",
          ponte: "No DM2 com DCV/IC/DRC, garantir antes a **dapagliflozina** (Farmácia Popular ≥ 65 anos com DCV, ou CEAF). Se a pessoa pode comprar, as opções de menor custo mensal são a **liraglutida 1,2 mg** (~R$ 710 de teto) e a **semaglutida 0,5 mg nacional** (teto de R$ 664 a R$ 1.314 conforme a embalagem; conferir no balcão). Na obesidade sem acesso: cuidado comportamental intensivo com a eMulti e critérios de cirurgia bariátrica."
        }},
        {ref: ["conitec_obes", "pcdt_dm2", "ms_conitec_glp1_2026", "remume", "cmed_pmc2026"]}
      ]}
    ]
  },
  S: "Paciente, ___ anos, em ___ (avaliação para início / uso) de ___ (semaglutida / tirzepatida / liraglutida / dulaglutida) ___ mg ___ (por semana / ao dia) desde ___. Indicação: ___ (obesidade / DM2 / DCV / ICFEP / MASH / apneia). Peso máximo na vida ___ kg. Tolerância: náuseas ___, vômitos ___, constipação ___, diarreia ___, azia ___. Dor abdominal ___. Alimentação e proteína ___; exercício aeróbio ___ e de força ___. Hipoglicemias ___ (insulina/sulfonilureia ___). CMT/NEM2 pessoal ou familiar ___; pancreatite prévia ___; retinopatia ___. Contracepção ___ / desejo de gestar ___ / amamentação ___. Procedimento com sedação programado ___. Custo e acesso ___.",
  O: "Peso ___ kg (inicial ___ kg; variação ___%) | IMC ___ kg/m² | Cintura ___ cm | PA ___ mmHg | FC ___ bpm\nPescoço/tireoide ___ | Exames: HbA1c ___ | Cr ___ / TFGe ___ | RAC ___ | TGO/TGP ___ | lipídios ___ | β-hCG ___.",
  A: "___ (obesidade grau ___ / DM2 / DCV / ICFEP / MASH / apneia) em uso de ___ ___ mg, perda de ___% em ___ semanas, ___ (boa tolerância / efeitos GI leves / intolerância a ___).",
  P: "- ___ (iniciar / manter / escalonar para ___ mg em ___ / voltar para ___ mg): só subir se tolerou a dose atual.\n- ___ (reduzir sulfonilureia / reduzir insulina basal em ___%) e automonitorização da glicemia.\n- Proteína em todas as refeições (~1–1,2 g/kg/dia) e treino de força 2–3×/semana.\n- Contracepção: ___.\n- Receita em 2 vias (retenção na farmácia; validade de 90 dias).\n- Retorno em ___ semanas (mensal nos 3 primeiros meses); reavaliar a resposta após 12 semanas na dose plena.\n- Orientados sinais de alarme (dor abdominal forte, vômitos persistentes, perda súbita de visão) e o reganho de peso se parar.",
  rx: [
    {trilha: "evidencia", titulo: "Semaglutida SC – DM2 (comprar)", texto: "USO SUBCUTÂNEO\n1. Semaglutida 0,25/0,5 mg por dose (solução injetável 1,34 mg/mL, caneta de 1,5 mL) ______ 1 caneta\n   Aplicar 0,25 mg por via subcutânea 1 vez por semana, sempre no mesmo dia, por 4 semanas.\n   Depois, aplicar 0,5 mg 1 vez por semana. Para 1 mg, nova receita com a caneta de 3 mL.\n   (Receita em 2 vias: a farmácia retém uma.)", dose: "F", nota: "Bula do Ozempic: 0,25 mg por 4 semanas → 0,5 mg; após ≥ 4 semanas, 1 mg (caneta de 3 mL) se precisar; máximo 1 mg. Reduzir sulfonilureia/insulina ao iniciar. A caneta de 1,5 mL (2 mg) rende 4 doses de 0,25 mg + 2 de 0,5 mg no início e 4 doses de 0,5 mg na manutenção [I]. Marcas nacionais de semaglutida 1,34 mg/mL na lista CMED (ex.: Ozivy); conferir a indicação na bula de cada uma."},
    {trilha: "evidencia", titulo: "Semaglutida 2,4 mg – obesidade (comprar)", texto: "USO SUBCUTÂNEO\n1. Semaglutida (apresentação para obesidade) 0,25 mg por dose (solução injetável, sistema de aplicação com 4 doses) ______ 1 unidade\n   Aplicar 0,25 mg por via subcutânea 1 vez por semana, sempre no mesmo dia, por 4 semanas.\n   Próximas etapas, 4 semanas cada, só se bem tolerado: 0,5 mg → 1 mg → 1,7 mg → 2,4 mg (manutenção).\n   Cada dose é uma apresentação diferente: fazer nova receita a cada mudança de dose.\n   (Receita em 2 vias: a farmácia retém uma.)", dose: "F", nota: "Bula do Wegovy: escalonamento em 16 semanas até 2,4 mg; com sintomas GI, adiar o aumento; 1,7 mg se não tolerar 2,4 mg na MASH (na obesidade, decisão individual); 7,2 mg só em IMC ≥ 30 com resposta insuficiente após ≥ 4 semanas em 2,4 mg. Cada etapa usa uma caneta da dose correspondente. SELECT: MACE −20% relativo na DCV com IMC ≥ 27."},
    {trilha: "evidencia", titulo: "Tirzepatida – obesidade, DM2 ou apneia (comprar)", texto: "USO SUBCUTÂNEO\n1. Tirzepatida 2,5 mg por dose (solução injetável, caneta multidose com 4 doses) ______ 1 caneta\n   Aplicar 2,5 mg por via subcutânea 1 vez por semana, sempre no mesmo dia, por 4 semanas.\n   Depois, 5 mg 1 vez por semana. Aumentos de 2,5 mg a cada 4 semanas ou mais, só se necessário e bem tolerado, até no máximo 15 mg.\n   Cada dose é uma apresentação diferente: fazer nova receita a cada mudança de dose.\n   (Receita em 2 vias: a farmácia retém uma.)", dose: "F", nota: "Bula do Mounjaro: 2,5 mg × 4 semanas → 5 mg; +2,5 mg a cada ≥ 4 semanas; máximo 15 mg; manutenção 5, 10 ou 15 mg (apneia: 10 ou 15 mg). Com pílula: barreira por 4 semanas após o início e após cada aumento (bula americana). Suspender ≥ 1 mês antes de gestação planejada (EMA)."},
    {trilha: "evidencia", titulo: "Liraglutida – DM2 (comprar)", texto: "USO SUBCUTÂNEO\n1. Liraglutida 6 mg/mL (solução injetável, caneta de 3 mL) ______ 2 canetas\n   Aplicar 0,6 mg por via subcutânea 1 vez ao dia por 1 semana.\n   Depois, 1,2 mg 1 vez ao dia, no mesmo horário.\n   (Receita em 2 vias: a farmácia retém uma.)", dose: "F", nota: "Bula do Victoza: 0,6 mg ≥ 1 semana → 1,2 mg; após ≥ 1 semana, 1,8 mg se precisar (máximo). A caneta de 18 mg dura 15 dias com 1,2 mg e 10 dias com 1,8 mg. Marcas: Victoza, Lirux, Liraclick (lista CMED)."},
    {trilha: "evidencia", titulo: "Liraglutida 3 mg – obesidade (comprar)", texto: "USO SUBCUTÂNEO\n1. Liraglutida 6 mg/mL (solução injetável, caneta de 3 mL, apresentação para controle de peso) ______ 3 canetas no 1º mês; depois 5 canetas por mês\n   Aplicar 1 vez ao dia: 0,6 mg na 1ª semana, 1,2 mg na 2ª, 1,8 mg na 3ª, 2,4 mg na 4ª e 3,0 mg a partir da 5ª semana.\n   (Receita em 2 vias: a farmácia retém uma.)", dose: "F", nota: "Bula do Saxenda: aumentos de 0,6 mg a cada ≥ 1 semana até 3,0 mg; considerar parar se o aumento não for tolerado por 2 semanas; suspender se perda < 5% após 12 semanas em 3,0 mg. Marcas: Saxenda, Olire."},
    {trilha: "evidencia", titulo: "Semaglutida oral – DM2 (comprar)", texto: "USO ORAL\n1. Semaglutida oral 3 mg ______ 30 comprimidos\n   Tomar 1 comprimido em jejum, ao acordar, com até meio copo de água (120 mL). Esperar 30 minutos para comer, beber ou tomar outros remédios. Não partir nem mastigar.\n   Após 30 dias, passar para semaglutida oral 7 mg, 1 comprimido ao dia, do mesmo modo (nova receita: cada dose é um comprimido diferente).\n   (Receita em 2 vias: a farmácia retém uma.)", dose: "F", nota: "Bula do Rybelsus: 3 mg por 1 mês → 7 mg; após ≥ 1 mês, 14 mg (máximo). Nunca 2 comprimidos para somar dose. SOUL: MACE −14% relativo no DM2 com DCV/DRC."},
    {trilha: "evidencia", titulo: "Dulaglutida – DM2 (comprar)", texto: "USO SUBCUTÂNEO\n1. Dulaglutida 1,5 mg/0,5 mL (solução injetável, caneta de dose única) ______ 4 canetas\n   Aplicar 1 caneta por via subcutânea 1 vez por semana, sempre no mesmo dia.\n   (Receita em 2 vias: a farmácia retém uma.)", dose: "F", nota: "Bula do Trulicity (2019): 1,5 mg/semana na associação; 0,75 mg na monoterapia ou em pessoas frágeis; máximo 1,5 mg. REWIND: redução de MACE com ou sem DCV estabelecida."}
  ],
  orient: ORI_GLP1,
  alarme: ["Dor forte na barriga que não passa, com ou sem vômitos", "Vômitos o dia todo, sem conseguir beber, ou urina escura e pouca", "Dor do lado direito da barriga, febre ou olhos amarelos", "Perda ou embaçamento súbito da visão", "Inchaço da boca ou da língua, ou falta de ar após a aplicação", "Glicemia abaixo de 70 que não melhora (se usa insulina, glibenclamida ou gliclazida)", "Pensamentos de se machucar ou tristeza intensa"],
  encaminhar: "Pancreatite suspeita, colecistite ou desidratação grave → urgência. Perda súbita de visão → oftalmologia no mesmo dia. Nódulo de tireoide ou história familiar de CMT/NEM2 → investigar antes de iniciar. Retinopatia instável → oftalmologia antes de iniciar. Adolescente com obesidade grave, gestação em uso ou critérios de cirurgia bariátrica → serviço de referência conforme a regulação municipal [NV].",
  sus: {nacional: "Não incorporados: obesidade (CONITEC, ago/2025: liraglutida e semaglutida 2,4 mg) e DM2 (PCDT DM2 2026). Ministério da Saúde pediu nova avaliação para obesidade em 24/09/2026. Venda com retenção de receita em 2 vias, validade de 90 dias (RDC 973/2025).", betim: "Nenhum agonista de GLP-1 na REMUME de Betim; compra em farmácia. Nutrição, psicologia e educação física pela eMulti conforme a organização local [NV]."},
  evid: {resumo: "ECR de grande porte mostram perda de 15–21% com semaglutida 2,4 mg e tirzepatida (tirzepatida superior no SURMOUNT-5), redução de MACE (SELECT sem DM; SOUL, SUSTAIN-6, LEADER e REWIND no DM2), de desfechos renais no DM2 com DRC (FLOW), de piora da IC na ICFEP (SUMMIT), resolução de MASH (ESSENCE) e melhora da apneia (SURMOUNT-OSA). Ao suspender, o peso e os fatores de risco voltam em 1 a 2 anos (STEP 1, SURMOUNT-4, BMJ 2026). A ABESO 2026 recomenda tratamento contínuo e fármacos de alta potência. Efeitos GI são frequentes e transitórios; eventos graves são raros.", certeza: "Alta para peso e MACE (ECR); moderada a alta para rim no DM2 com DRC (FLOW, ECR único interrompido precocemente); moderada para ICFEP e apneia; baixa para estratégias de suspensão e dose de manutenção", fontes: ["abeso2026", "select2023", "soul2025", "flow2024", "summit2024", "stephfpef2023", "essence2025", "surmountosa2024", "step1_2021", "step1ext2022", "surmount1_2022", "surmount4_2024", "surmount5_2025", "west_bmj2026", "periop_bja2025", "bula_wegovy2026", "bula_ozempic2026", "bula_rybelsus2026", "bula_victoza2024", "bula_saxenda2021", "bula_trulicity2019", "bula_mounjaro", "ema_mounjaro", "lilly_contracep", "anvisa_glp1_2025", "conitec_obes", "pcdt_dm2", "ms_conitec_glp1_2026", "cmed_pmc2026", "remume"]},
  mudancas: ["v45: item novo – indicações com desfecho, contraindicações, exames basais, esquemas completos de 7 apresentações pelas bulas brasileiras, efeitos adversos e conduta, perioperatório, gestação e contracepção, suspensão e manutenção do peso, RDC 973/2025 e custo mensal pela CMED."],
  nv: ["Indicação na bula de cada cópia nacional de semaglutida (Ozivy, Semaclique, Orsema e outras).", "Bula vigente do Trulicity (consultada a de 2019) e da tirzepatida para obesidade e apneia (posologia conferida na bula do paciente de 2024).", "Atualização de 2025 da SBD sobre GLP-1 no perioperatório (vista só em portal secundário).", "Indicação na bula do Liraclick (DM2 e/ou controle de peso).", "Teto CMED da Ozivy 1,5 mL com 1 caneta (R$ 664) × caixa com 2 (R$ 2.629).", "Fluxos de Betim para eMulti, bariátrica e endocrinologia."]
}
);

// ── ajustes nos itens relacionados (v45)
(function(){
  const get = id => CONDICOES.find(c => c.id === id);
  const link = {ir: [["cr-glp1", "Agonistas de GLP-1 e tirzepatida: guia de uso"]]};
  const addLink = (c, idx) => { if (!c || !c.guia || !c.guia.secoes) return; const s = c.guia.secoes[Math.min(idx, c.guia.secoes.length - 1)]; const r = s.b.findIndex(b => b && b.ref); if (r >= 0) s.b.splice(r, 0, link); else s.b.push(link); };
  const ob = get("cr-obesidade");
  if (ob) {
    const sec = ob.guia.secoes.find(s => /Farmacoterapia/.test(s.t));
    if (sec) {
      sec.b.forEach(b => {
        if (b.tab && b.tab.r) b.tab.r.forEach(r => { if (/Semaglutida 2,4/.test(r[0])) r[2] = "SELECT: MACE 6,5% × 8,0% em DCV sem DM (HR 0,80) [F]"; if (/Tirzepatida/.test(r[0])) { r[1] = "~15–21% (SURMOUNT-1)"; r[2] = "Maior efeito (SURMOUNT-5: −20,2% × −13,7% da semaglutida) [F]; custo alto"; } });
        if (b.nota && /Indicação: IMC/.test(b.nota)) b.nota = "Indicação: IMC ≥ 30, ou ≥ 27 com complicação, junto com mudança de estilo de vida (ABESO 2026 R4, I/A); preferir os de alta potência (R9) [F]. CONITEC (ago/2025): liraglutida e semaglutida **não incorporadas** [F].";
        if (b.perola && /peso volta/.test(b.perola.t)) { b.perola.x = "Na extensão do STEP 1, quem suspendeu a semaglutida recuperou 2/3 do peso perdido em 1 ano; no SURMOUNT-4, quem trocou a tirzepatida por placebo reganhou 14% [F]. Discuta antes de começar: é tratamento contínuo, com custo mensal."; b.perola.l = "F"; }
        if (b.perola && /manipuladas/.test(b.perola.t)) { b.perola.x = "Não usar fórmulas manipuladas nem produtos sem registro na ANVISA (ABESO 2026 R32, classe III) [F]. Risco de contaminação e de dose errada [C]."; b.perola.l = "F"; }
        if (b.ref) { ["abeso2026", "surmount4_2024", "surmount5_2025"].forEach(k => { if (!b.ref.includes(k)) b.ref.push(k); }); }
      });
      const r = sec.b.findIndex(b => b && b.ref); sec.b.splice(r >= 0 ? r : sec.b.length, 0, link);
    }
    (ob.rx || []).forEach(x => {
      if (/Semaglutida 2,4/.test(x.titulo)) { x.dose = "F"; x.texto = "USO SUBCUTÂNEO\n1. Semaglutida (apresentação para obesidade) 0,25 mg por dose (solução injetável, sistema de aplicação com 4 doses) ______ 1 unidade\n   Aplicar 0,25 mg 1 vez por semana por 4 semanas; depois, a cada 4 semanas, se bem tolerado: 0,5 → 1 → 1,7 → 2,4 mg.\n   Cada dose é uma apresentação diferente: fazer nova receita a cada mudança de dose.\n   (Receita em 2 vias: a farmácia retém uma.)"; x.nota = "Bula do Wegovy: 0,25 → 0,5 → 1 → 1,7 → 2,4 mg, a cada 4 semanas. STEP 1: −14,9% em 68 semanas (placebo −2,4%). SELECT: menos eventos cardiovasculares em DCV sem DM. Não incorporada (CONITEC, ago/2025). Náuseas são comuns. Evitar com CMT/NEM2 (cautela na bula). Detalhes no item 'Agonistas de GLP-1'."; }
      if (/Tirzepatida/.test(x.titulo)) { x.dose = "F"; x.texto = "USO SUBCUTÂNEO\n1. Tirzepatida 2,5 mg por dose (solução injetável, caneta multidose com 4 doses) ______ 1 caneta\n   Aplicar 2,5 mg 1 vez por semana por 4 semanas; depois 5 mg; aumentos de 2,5 mg a cada 4 semanas ou mais, se necessário e bem tolerado (máximo 15 mg).\n   Cada dose é uma apresentação diferente: fazer nova receita a cada mudança de dose.\n   (Receita em 2 vias: a farmácia retém uma.)"; x.nota = "Bula do Mounjaro: 2,5 mg × 4 semanas → 5 mg; +2,5 mg a cada ≥ 4 semanas; máximo 15 mg. SURMOUNT-1: −15% a −21% em 72 semanas. Não indicado com CMT/NEM2. Não incorporada ao SUS. Detalhes no item 'Agonistas de GLP-1'."; }
    });
    if (ob.nv) ob.nv = ob.nv.filter(x => !/Retenção de receita/.test(x)).map(x => x === "Doses: conferir bula." ? "Dose do orlistate: conferir bula." : x);
    if (ob.sus) ob.sus.nacional = ob.sus.nacional.replace(/\.?$/, ". Venda com retenção de receita em 2 vias (RDC 973/2025). MS pediu nova avaliação de semaglutida e liraglutida à CONITEC em 24/09/2026.");
    if (ob.evid && ob.evid.fontes) ["abeso2026", "anvisa_glp1_2025", "ms_conitec_glp1_2026"].forEach(k => { if (!ob.evid.fontes.includes(k)) ob.evid.fontes.push(k); });
    ob.mudancas = (ob.mudancas || []).concat(["v45: retenção de receita (RDC 973/2025), ABESO 2026, SURMOUNT-4/5 e link para o item de agonistas de GLP-1."]);
  }
  const dm = get("cr-dm2");
  if (dm) {
    (dm.rx || []).forEach(x => { if (/Agonista de GLP-1/.test(x.titulo)) { x.dose = "F"; x.texto = x.texto.replace("ajustar até 1 mg conforme resposta.", "após ≥ 4 semanas, 1 mg se necessário (máximo 1 mg).\n   (Receita em 2 vias: a farmácia retém uma.)"); x.nota = "Bula do Ozempic: 0,25 mg × 4 semanas → 0,5 mg → 1 mg (máximo). Indicado sobretudo com DCV aterosclerótica, DRC albuminúrica (FLOW) ou obesidade. Reduzir sulfonilureia/insulina ao iniciar. Não incorporado ao SUS. Evitar com CMT/NEM2 (cautela na bula). Detalhes no item 'Agonistas de GLP-1'."; } });
    addLink(dm, 2);
  }
  const ma = get("cr-masld");
  if (ma) {
    if (ma.nv) ma.nv = ma.nv.map(x => x.replace(" e da indicação de semaglutida para MASH no Brasil", "")) ;
    if (ma.guia && ma.guia.secoes[1]) { const u = ma.guia.secoes[1].b.find(x => x && x.ul); if (u) u.ul.push("Semaglutida 2,4 mg (Wegovy) tem indicação de bula no Brasil para MASH não cirrótica F2–F3 (ESSENCE: resolução da MASH 62,9% × 34,3%) [F]; não incorporada ao SUS [F]."); }
    addLink(ma, 1);
    ma.mudancas = (ma.mudancas || []).concat(["v45: semaglutida 2,4 mg tem indicação de bula no Brasil para MASH F2–F3 (Wegovy 2026; ESSENCE)."]);
    if (ma.evid && ma.evid.fontes) ["essence2025", "bula_wegovy2026"].forEach(k => { if (!ma.evid.fontes.includes(k)) ma.evid.fontes.push(k); });
  }
  const ic = get("cr-icfep");
  if (ic) {
    (ic.rx || []).forEach(x => { if (/GLP-1/.test(x.titulo)) { x.dose = "F"; x.texto = "USO SUBCUTÂNEO\n1. Tirzepatida 2,5 mg por dose (solução injetável, caneta multidose com 4 doses) ______ 1 caneta\n   Aplicar 2,5 mg 1 vez por semana por 4 semanas; depois 5 mg; aumentos de 2,5 mg a cada 4 semanas ou mais, se necessário e bem tolerado (máximo 15 mg).\n   Cada dose é uma apresentação diferente: fazer nova receita a cada mudança de dose.\n   (Alternativa: semaglutida 2,4 mg semanal, com escalonamento a partir de 0,25 mg.)\n   (Receita em 2 vias: a farmácia retém uma.)"; x.nota = x.nota.replace(" Escalonamento: conferir bula.", " Escalonamento pela bula do Mounjaro (máximo 15 mg) e do Wegovy (até 2,4 mg) – ver item 'Agonistas de GLP-1'."); } });
    addLink(ic, 2);
  }
})();
