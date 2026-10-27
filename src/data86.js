// ───────────── data86.js – v73: módulo Fitoterapia – Farmácia Viva de Betim (por queixa) e opção fitoterápica nos itens existentes.
// Base local: Memento Terapêutico Fitoterápico do SUS/Betim, 1ª ed., 2022 (27 plantas, ~50 formulações; lido na íntegra em 27/10/2026) e
// Protocolo de Prescrição Farmacêutica de Fitoterápicos no SUS/Betim, 2ª ed., 2022 (posologias iguais ao Memento). Não localizei edição
// posterior do Memento. A REMUME de Betim não lista fitoterápicos: a oferta vem da Farmácia Viva (receita em 2 vias).
// Evidência conferida no PubMed em 27/10/2026: Cochrane (hipérico 2008, equinácea 2014, castanha-da-índia 2012, tanaceto 2015, ginkgo/zumbido
// 2013 e 2022, fitoterapia na lombalgia 2014, alcachofra/colesterol 2013, passiflora 2007), Leach & Page 2015 (insônia), Leite 1986 (capim-limão),
// Holtmann 2003 (alcachofra/dispepsia), Tabach 2017 (espinheira-santa, fase I), Carneiro 2014 e 2022 (cavalinha), AGA-ACG 2023 (constipação),
// Widrig 2007 (arnica), ECR de calêndula na dermatite de fraldas, Salehi 2020 (enzimas desbridantes). RENAME 2024 (12 fitoterápicos) no Projeto.
// Doses e restrições: sempre as do Memento de Betim [F]. As tinturas da Farmácia Viva não declaram teor de marcador; os ECR usaram extratos
// padronizados → aplicar à tintura é extrapolação, dita em cada item.
// v74 (27/10/2026): conferência no Formulário de Fitoterápicos da Farmacopeia Brasileira, 3ª ed. (ANVISA, RDC 1.024/2026), lido na íntegra:
// doses oficiais em mL, faixas etárias e contraindicações ao lado das do Memento; plantas sem monografia sinalizadas.

Object.assign(FONTES, {
  memento_fito_betim2022: {s: "Memento Terapêutico Fitoterápico do SUS/Betim, 1ª ed., 2022", t: "SMS Betim / Diretoria de Assistência Farmacêutica e Insumos. Memento Terapêutico Fitoterápico do SUS/Betim, 1ª edição, 2022 (documento municipal): 27 plantas padronizadas na Farmácia Viva SUS-Betim, formulações, indicações, posologia, contraindicações, interações, reações adversas, prescritores por categoria (dentista, enfermeiro, farmacêutico, médico, nutricionista) e regras da receita em 2 vias (1ª via para a Farmácia Viva manipular; 2ª via com o usuário para retirada na farmácia da unidade). Arquivo no Drive da usuária, lido na íntegra em 27/10/2026. Não localizei edição posterior em busca na web.", f: "F", url: ""},
  protocolo_fito_farm_betim2022: {s: "Protocolo de Prescrição Farmacêutica de Fitoterápicos no SUS/Betim, 2ª ed., 2022", t: "SMS Betim. Protocolo de Prescrição Farmacêutica de Fitoterápicos no SUS/Betim, 2ª ed., 2022 (Portaria Municipal GAPR nº 159/18 e Resolução CFF nº 586/13): 21 plantas prescritíveis pelo farmacêutico do SUS-Betim após o curso municipal; posologias conferidas iguais às do Memento 2022, com diferenças só de redação. Arquivo no Drive da usuária, lido em 27/10/2026.", f: "F", url: ""},
  formulario_fito_anvisa2026: {s: "ANVISA – Formulário de Fitoterápicos da Farmacopeia Brasileira, 3ª ed., 2026 (FFFB3)", t: "Agência Nacional de Vigilância Sanitária. Formulário de Fitoterápicos da Farmacopeia Brasileira, 3ª edição. Brasília: Anvisa; 2026. Aprovado pela RDC nº 1.024, de 14/05/2026. 85 monografias com formulações oficinais (preparação extemporânea, tintura, extrato fluido, cápsula, gel, pomada, creme, xarope), advertências, indicações e modo de usar; formulações para farmácias de manipulação e Farmácias Vivas, isentas de prescrição médica, e base da notificação de fitoterápicos. Doses de tintura em mL (nenhuma em gotas); tintura definida como 1:5 ou 1:10 droga:solvente, sem teor de marcador. Texto integral lido em 27/10/2026 (mesmo arquivo do Drive da usuária).", f: "F", url: "https://bibliotecadigital.anvisa.gov.br/jspui/handle/anvisa/21045"},
  memento_fb2016: {s: "ANVISA – Memento Fitoterápico da Farmacopeia Brasileira, 2016", t: "ANVISA. Memento Fitoterápico da Farmacopeia Brasileira, 1ª ed., 2016 (monografias com evidência e posologia). Arquivo no Drive da usuária; não aberto nesta revisão.", f: "C", url: ""},
  cochrane_hiperico2008: {s: "Linde K et al. Cochrane 2008 – hipérico na depressão maior", t: "Linde K, Berner MM, Kriston L. St John's wort for major depression. Cochrane Database Syst Rev 2008;(4):CD000448 (RS, 29 ECR, 5.489 pacientes): extratos de hipérico > placebo (RR de resposta 1,28 nos 9 ECR maiores; 1,87 nos menores), semelhantes a tricíclicos (RR 1,02) e ISRS (RR 1,00), com menos abandono por efeito adverso que ISRS (OR 0,53); heterogeneidade e efeito maior em ECR de países de língua alemã.", f: "F", url: "https://doi.org/10.1002/14651858.CD000448.pub3"},
  cochrane_equinacea2014: {s: "Karsch-Völk M et al. Cochrane 2014 – equinácea no resfriado", t: "Karsch-Völk M et al. Echinacea for preventing and treating the common cold. Cochrane Database Syst Rev 2014;(2):CD000530 (RS, 24 ECR duplo-cegos, 4.631 participantes): nenhum dos 12 ensaios de prevenção foi significativo (agrupamento post hoc sugere redução relativa de 10–20%); dos 7 ensaios de tratamento, só 1 encurtou o resfriado. Conclusão: não demonstrou benefício no tratamento.", f: "F", url: "https://doi.org/10.1002/14651858.CD000530.pub3"},
  cochrane_castanha2012: {s: "Pittler MH, Ernst E. Cochrane 2012 – castanha-da-índia na IVC", t: "Pittler MH, Ernst E. Horse chestnut seed extract for chronic venous insufficiency. Cochrane Database Syst Rev 2012;11:CD003230 (RS): extrato oral padronizado reduziu dor nas pernas (6 de 7 ECR; DMP 42,4 mm em escala de 100 mm num ECR) e volume da perna (6 ECR, n = 502; −32,1 mL) vs placebo; um ECR sugeriu efeito semelhante à meia de compressão; eventos adversos leves. Tratamento eficaz e seguro a curto prazo, com ressalvas.", f: "F", url: "https://doi.org/10.1002/14651858.CD003230.pub4"},
  cochrane_tanaceto2015: {s: "Wider B et al. Cochrane 2015 – tanaceto na prevenção da enxaqueca", t: "Wider B, Pittler MH, Ernst E. Feverfew for preventing migraine. Cochrane Database Syst Rev 2015;(4):CD002286 (RS, 6 ECR, 561 pacientes): o maior ECR (n = 218, extrato estável) mostrou 0,6 crise/mês a menos que o placebo (4,8 → 2,9 × 4,8 → 3,5); os demais, pequenos ou negativos. Evidência de baixa qualidade; eventos leves (gastrointestinais, aftas).", f: "F", url: "https://doi.org/10.1002/14651858.CD002286.pub3"},
  cochrane_ginkgo_zumbido2022: {s: "Sereda M et al. Cochrane 2022 – ginkgo no zumbido", t: "Sereda M et al. Ginkgo biloba for tinnitus. Cochrane Database Syst Rev 2022;11:CD013514 (RS, 12 ECR, 1.915 participantes): pode ter pouco ou nenhum efeito sobre a gravidade do zumbido em 3–6 meses (THI −1,35; IC95% −8,26 a 5,55; certeza muito baixa); sem diferença em sangramento ou convulsão (certeza baixa).", f: "F", url: "https://doi.org/10.1002/14651858.CD013514.pub2"},
  cochrane_ginkgo_zumbido2013: {s: "Hilton MP et al. Cochrane 2013 – ginkgo no zumbido", t: "Hilton MP, Zimmermann EF, Hunt WT. Ginkgo biloba for tinnitus. Cochrane Database Syst Rev 2013;(3):CD003852 (4 ECR, 1.543 participantes, baixo risco de viés): sem evidência de eficácia quando o zumbido é a queixa principal.", f: "F", url: "https://doi.org/10.1002/14651858.CD003852.pub3"},
  cochrane_herbal_lombalgia2014: {s: "Oltean H et al. Cochrane 2014 – fitoterapia na lombalgia", t: "Oltean H et al. Herbal medicine for low-back pain. Cochrane Database Syst Rev 2014;(12):CD004504 (RS, 14 ECR, 2.050 participantes): Harpagophytum procumbens padronizado em 50 ou 100 mg de harpagosídeo/dia pode ser melhor que placebo para dor a curto prazo e uso de resgate (2 ECR, 315 pacientes, qualidade baixa); equivalência à rofecoxibe em 1 ECR de qualidade muito baixa.", f: "F", url: "https://doi.org/10.1002/14651858.CD004504.pub4"},
  cochrane_alcachofra2013: {s: "Wider B et al. Cochrane 2013 – alcachofra na hipercolesterolemia", t: "Wider B et al. Artichoke leaf extract for treating hypercholesterolaemia. Cochrane Database Syst Rev 2013;(3):CD003335 (3 ECR, 262 participantes): indício de redução do colesterol total (4,2% a 18,5%), mas evidência ainda não convincente.", f: "F", url: "https://doi.org/10.1002/14651858.CD003335.pub3"},
  holtmann2003_alcachofra: {s: "Holtmann G et al. 2003 – alcachofra na dispepsia funcional (ECR)", t: "Holtmann G et al. Efficacy of artichoke leaf extract in the treatment of patients with functional dyspepsia: a six-week placebo-controlled, double-blind, multicentre trial. Aliment Pharmacol Ther 2003;18:1099-105 (ECR, n = 247; extrato 640 mg 3×/dia): melhora global de sintomas e qualidade de vida (Nepean) maiores que placebo.", f: "F", url: "https://doi.org/10.1046/j.1365-2036.2003.01767.x"},
  cochrane_passiflora2007: {s: "Miyasaka LS et al. Cochrane 2007 – passiflora no transtorno de ansiedade", t: "Miyasaka LS, Atallah AN, Soares BGO. Passiflora for anxiety disorder. Cochrane Database Syst Rev 2007;(1):CD004518 (2 ECR, 198 participantes): ensaios poucos e pequenos para qualquer conclusão; num deles, sem diferença em relação a benzodiazepínico.", f: "F", url: "https://doi.org/10.1002/14651858.CD004518.pub2"},
  janda2020_passiflora: {s: "Janda K et al. 2020 – passiflora em transtornos neuropsiquiátricos (RS)", t: "Janda K et al. Passiflora incarnata in Neuropsychiatric Disorders – A Systematic Review. Nutrients 2020;12:3894 (9 ECR de 1 a 30 dias): a maioria relatou menos ansiedade, com efeito menos evidente na ansiedade leve; sem eventos adversos relevantes.", f: "F", url: "https://doi.org/10.3390/nu12123894"},
  leach2015_insonia: {s: "Leach MJ, Page AT. 2015 – fitoterapia na insônia (RS/MA)", t: "Leach MJ, Page AT. Herbal medicine for insomnia: a systematic review and meta-analysis. Sleep Med Rev 2015;24:1-12 (14 ECR, 1.602 participantes; valeriana, camomila, kava, wuling): nenhuma diferença estatística em relação ao placebo ou ao controle ativo em 13 desfechos de eficácia.", f: "F", url: "https://doi.org/10.1016/j.smrv.2014.12.003"},
  leite1986_capimlimao: {s: "Leite JR et al. 1986 – capim-limão em humanos (ECR duplo-cego)", t: "Leite JR et al. Pharmacology of lemongrass (Cymbopogon citratus Stapf). III. Assessment of eventual toxic, hypnotic and anxiolytic effects on humans. J Ethnopharmacol 1986;17:75-83: chá de capim-limão não tóxico em 2 semanas; sem efeito hipnótico em 50 voluntários nem ansiolítico em 18 com ansiedade-traço alta (duplo-cego, vs placebo). Estudo brasileiro (CEBRID/UNIFESP).", f: "F", url: "https://doi.org/10.1016/0378-8741(86)90074-7"},
  tabach2017_espinheira: {s: "Tabach R et al. 2017 – espinheira-santa, fase I", t: "Tabach R, Duarte-Almeida JM, Carlini EA. Pharmacological and Toxicological Study of Maytenus ilicifolia Leaf Extract Part II – Clinical Study (Phase I). Phytother Res 2017;31:921-6 (24 voluntários sadios, até 2.000 mg/dia): bem tolerado; xerostomia (16,7%) e poliúria (20,8%) reversíveis. Estudo de segurança, não de eficácia.", f: "F", url: "https://doi.org/10.1002/ptr.5816"},
  carneiro2014_cavalinha: {s: "Carneiro DM et al. 2014 – cavalinha, efeito diurético (ECR)", t: "Carneiro DM et al. Randomized, double-blind clinical trial to assess the acute diuretic effect of Equisetum arvense in healthy volunteers. Evid Based Complement Alternat Med 2014;2014:760683 (36 homens sadios, cruzado, 4 dias): extrato seco padronizado 900 mg/dia teve efeito diurético maior que placebo e equivalente à hidroclorotiazida 25 mg, sem alteração relevante de eletrólitos.", f: "F", url: "https://doi.org/10.1155/2014/760683"},
  carneiro2022_cavalinha: {s: "Carneiro DM et al. 2022 – cavalinha na HAS estágio 1 (ECR)", t: "Carneiro DM et al. Antihypertensive effect of Equisetum arvense L.: a double-blind, randomized efficacy and safety clinical trial. Phytomedicine 2022;99:153955 (58 pacientes, HAS estágio 1, 3 meses): extrato seco 900 mg/dia reduziu PAS/PAD 12,6/8,1 mmHg, sem diferença da hidroclorotiazida 25 mg.", f: "F", url: "https://doi.org/10.1016/j.phymed.2022.153955"},
  aga_acg2023_constipacao: {s: "AGA-ACG 2023 – tratamento farmacológico da constipação crônica", t: "Chang L et al. American Gastroenterological Association–American College of Gastroenterology Clinical Practice Guideline: Pharmacological Management of Chronic Idiopathic Constipation. Gastroenterology 2023;164:1086-106 (GRADE): recomendação forte para PEG, picossulfato, linaclotida, plecanatida e prucaloprida; condicional para fibra, lactulose, sene, óxido de magnésio e lubiprostona.", f: "F", url: "https://doi.org/10.1053/j.gastro.2023.03.214"},
  widrig2007_arnica: {s: "Widrig R et al. 2007 – arnica gel × ibuprofeno gel na artrose de mãos (ECR)", t: "Widrig R et al. Choosing between NSAID and arnica for topical treatment of hand osteoarthritis in a randomised, double-blind study. Rheumatol Int 2007;27:585-91 (n = 204, 21 dias): gel de arnica (tintura 50 g/100 g) não inferior ao ibuprofeno gel 5% em dor e função; eventos adversos 4,8% × 6,1%.", f: "F", url: "https://doi.org/10.1007/s00296-007-0304-y"},
  calendula_fraldas_ecr: {s: "ECR de calêndula na dermatite de fraldas (Panahi 2012; Adib-Hajbaghery 2014)", t: "Panahi Y et al. ScientificWorldJournal 2012;2012:810234 (n = 66, < 3 anos): pomada de calêndula com menos lesões que creme de aloe. Adib-Hajbaghery M et al. J Res Med Sci 2014;19:314-8 (n = 60): cura completa em 3 dias 36,7% com calêndula × 90% com bentonita. Ensaios pequenos, de um só país, com comparadores pouco usados no Brasil.", f: "F", url: "https://doi.org/10.1100/2012/810234"},
  salehi2020_enzimas: {s: "Salehi SH et al. 2020 – enzimas desbridantes em queimaduras (RS)", t: "Salehi SH et al. Clinical value of debriding enzymes as an adjunct to standard early surgical excision in human burns: a systematic review. J Burn Care Res 2020;41:1224-30 (16 ensaios): evidência insuficiente para papaína; colagenase e bromelaína com algum respaldo.", f: "F", url: "https://doi.org/10.1093/jbcr/iraa074"},
  rosamosqueta_ecr2019: {s: "Aguirre-Romero AB et al. 2019 – óleo de rosa-mosqueta (ECR)", t: "Aguirre-Romero AB et al. Efficacy and safety of a rosehip seed oil extract in the prevention and treatment of skin lesions in the hands of patients with type 1 diabetes caused by finger prick. Endocrinol Diabetes Nutr 2019;67:186-93 (ECR aberto, 68 crianças/136 mãos): seguro, mas sem melhora das lesões.", f: "F", url: "https://doi.org/10.1016/j.endinu.2019.04.008"},
  alecrim_dismen2019: {s: "Tahoonian-Golkhatmy F et al. 2019 – alecrim × ácido mefenâmico na dismenorreia (ECR)", t: "Tahoonian-Golkhatmy F et al. Comparison of rosemary and mefenamic acid capsules on menstrual bleeding and primary dysmenorrhea: a clinical trial. Iran J Nurs Midwifery Res 2019;24:301-5 (n = 82 estudantes; cápsula 250 mg nos 3 primeiros dias): redução de dor semelhante nos dois grupos. ECR pequeno, com cápsula, não com tintura.", f: "F", url: "https://doi.org/10.4103/ijnmr.IJNMR_99_18"}
});

(() => {
  const MUD = "v73 (27/10/2026): ";
  const NOVO = ["Entrada nova (v73, 27/10/2026): módulo Fitoterapia – Farmácia Viva de Betim, a partir do Memento SUS-Betim 2022, com a evidência conferida ao lado."];
  const VIAS = "\n(Receita em 2 vias: a 1ª via vai para a Farmácia Viva manipular; o paciente leva a 2ª via e retira o fitoterápico na farmácia da unidade.)";
  const FV = (titulo, texto, nota, extra) => Object.assign({trilha: "sus", titulo, texto: texto + VIAS, dose: "F", nota}, extra || {});
  const M = "memento_fito_betim2022";
  const SUS_NAC = "RENAME 2024: 12 fitoterápicos no Componente Básico (alcachofra, aroeira, babosa, cáscara-sagrada, espinheira-santa, garra-do-diabo, guaco, hortelã, isoflavona-de-soja, plantago, salgueiro, unha-de-gato), definidos por teor de marcador por dose diária; a RENAME também prevê insumos vegetais para Farmácias Vivas do SUS.";
  const BETIM_FV = "REMUME Betim não lista fitoterápicos. Oferta pela Farmácia Viva SUS-Betim (Memento 2022): receita em 2 vias, 1ª via para manipulação, retirada na farmácia da unidade. Estoque atual de cada formulação: confirmar com a Farmácia Viva.";
  const NV_BASE = ["Estoque e elenco atuais da Farmácia Viva (Memento de 2022; não localizei edição posterior).", "Prazo entre a receita e a retirada na unidade: confirmar com a Farmácia Viva."];
  const TINT_PAC = "- Pingue as gotas em meio copo de água (50 mL) e tome.\n- A tintura tem álcool: não use se estiver grávida ou amamentando, se tiver menos de 18 anos ou se tiver problema com bebida alcoólica.\n- Leve a 2ª via da receita à farmácia da unidade para pegar o remédio quando ficar pronto.";
  const REMEDIO_PLANTA = "- Remédio de planta também é remédio: avise em toda consulta que está usando, porque ele pode mexer com outros remédios.";
  const it = o => Object.assign({modulo: "fi", mudancas: NOVO.slice()}, o);

  CONDICOES.push(

  // ───────── 1. Como prescrever
  it({
    id: "fi-prescrever", nome: "Como prescrever fitoterápicos da Farmácia Viva de Betim (receita, segurança e interações)", sistema: "Como prescrever", risco: "baixo",
    ciap: "A98", cid: "Z71.8",
    tags: "farmácia viva fitoterapia fitoterápico planta medicinal chá tintura receita duas vias 2 vias prescritor memento betim interação varfarina anticoncepcional gestação amamentação criança álcool diabetes cirurgia intoxicação PNPIC",
    S: "Usa ou deseja usar planta medicinal/fitoterápico: ___ (qual planta, de onde vem, como prepara, há quanto tempo, para quê).\nMedicamentos em uso: ___. Gestação/amamentação: ___. Uso de álcool: ___. Diabetes: ___. Cirurgia ou procedimento previsto: ___.",
    O: "BEG. (Exame conforme a queixa.)",
    A: "Uso/indicação de fitoterápico – avaliadas indicação, contraindicações, interações e idade mínima.",
    P: "- Fitoterápico da Farmácia Viva prescrito pelo nome científico ou popular, com concentração, forma farmacêutica, posologia e quantidade, em 2 vias (1ª via para a Farmácia Viva; 2ª via com o paciente para retirada na farmácia da unidade).\n- Conferidas contraindicações, interações e idade mínima (Memento SUS-Betim 2022).\n- Fitoterápico registrado na lista de medicamentos em uso.\n- Orientados modo de uso, tempo máximo de uso e quando suspender.",
    rx: [FV("Modelo de receita da Farmácia Viva", "USO ORAL (ou USO EXTERNO)\n1. Tintura de ______ (nome científico e popular) ______ 1 frasco de 50 mL\n   Diluir ___ gotas em 50 mL de água e tomar ___ vezes ao dia, por ___ dias.", "Memento SUS-Betim 2022, cap. 4: nome científico ou popular sem abreviaturas, concentração, forma farmacêutica, posologia, quantidade suficiente, assinatura e carimbo (ou nome legível e nº do conselho); vinculada ao prontuário. Recomendável incluir data de nascimento e telefone do paciente.")],
    orient: "## Como funciona\n- O remédio de planta da prefeitura é feito na **Farmácia Viva**. A receita tem **2 vias**: uma vai para a Farmácia Viva e a outra fica com você.\n- Quando o remédio ficar pronto, você retira na farmácia da unidade com a sua via da receita.\n\n## Cuidados\n" + REMEDIO_PLANTA + "\n- Use só a planta e a dose da receita. Chá ou garrafada por conta própria pode fazer mal, principalmente na gravidez, na amamentação e em criança.\n- Se for operar ou fazer procedimento no dentista, avise que usa remédio de planta: alguns precisam ser parados dias antes.\n\n## Se passar mal\n- Ligue para o **CIATox de Minas Gerais** (Hospital João XXIII): (31) 3239-9308, (31) 3239-9390 ou (31) 3224-4000. Ou para o **Disque-Intoxicação: 0800 722 6001** (ligação gratuita).\n- Tenha em mãos a planta ou o frasco do remédio.",
    alarme: ["Falta de ar, inchaço no rosto ou na boca, manchas vermelhas pelo corpo depois de usar o remédio", "Sangramento sem motivo, manchas roxas", "Sonolência forte, desmaio ou queda de pressão", "Pele ou olhos amarelados"],
    encaminhar: "Suspeita de intoxicação por planta: CIATox/MG – Hospital João XXIII, (31) 3239-9308, (31) 3239-9390 ou (31) 3224-4000; Disque-Intoxicação 0800 722 6001 (telefones informados pela médica da UBS em 27/10/2026). Reação alérgica grave: urgência.",
    sus: {nacional: SUS_NAC, betim: BETIM_FV},
    evid: {resumo: "A oferta de Betim segue o Memento municipal (2022), que reúne indicações de uso tradicional e monografias oficiais. A evidência clínica varia muito de planta para planta: moderada para extratos padronizados de hipérico e castanha-da-índia, baixa para harpagofito, tanaceto e arnica tópica, e muito baixa ou ausente para a maioria. Para ginkgo no zumbido e equinácea no tratamento do resfriado, as revisões Cochrane não mostram benefício. As tinturas da Farmácia Viva não informam teor de marcador, e os ensaios usaram extratos padronizados, então aplicar os resultados às tinturas é extrapolação.", certeza: "Variável por planta (ver tabela do guia)", fontes: [M, "protocolo_fito_farm_betim2022", "formulario_fito_anvisa2026", "rename", "remume", "cochrane_hiperico2008", "cochrane_castanha2012", "cochrane_equinacea2014", "cochrane_ginkgo_zumbido2022"]},
    nv: NV_BASE.concat(["Telefones do CIATox/MG atualizados pela médica da UBS (27/10/2026): (31) 3239-9308, 3239-9390, 3224-4000 e 0800 722 6001; os números 3239-9223 e 3239-9224 do Memento 2022 saíram. Não conferidos em fonte oficial on-line.", "Volume da gota do conta-gotas da Farmácia Viva: o Memento equipara 90 gotas a 3 mL (cerca de 30 gotas/mL) e o Formulário ANVISA 2026 dá as doses em mL; conferir o conta-gotas em uso."]),
    guia: {
      resumo: "A REMUME de Betim **não lista fitoterápicos**; eles vêm da **Farmácia Viva SUS-Betim**, com **27 plantas** padronizadas no Memento municipal de 2022 [F]. A receita é feita em **2 vias**: a 1ª via vai para a Farmácia Viva manipular e o paciente retira na farmácia da unidade com a 2ª [F]. O médico pode prescrever todas as plantas; **ginkgo, hipérico e tanaceto são exclusivos do médico** [F]. Antes de prescrever, confira três coisas: **idade mínima** (as tinturas têm álcool e são proibidas abaixo de 18 anos), **gestação/lactação** (quase todas contraindicadas) e **interações**, principalmente com anticoagulantes, anticoncepcional, antidepressivos e antirretrovirais [F].",
      secoes: [
        {t: "A receita da Farmácia Viva", b: [
          {passos: [
            "Nome da planta **científico ou popular**, sem abreviatura nem código, legível, sem rasura [F].",
            "Concentração, forma farmacêutica (tintura, xarope, creme, gel, loção, solução, spray, pomada orabase, sachê, óleo), posologia e **quantidade suficiente** para o tratamento [F].",
            "Identificação da unidade (nome, endereço, telefone), data, nome completo do paciente; recomendável data de nascimento e telefone [F].",
            "Assinatura e carimbo; sem carimbo, nome legível e número do conselho [F].",
            "**2 vias**: a 1ª via segue para a Farmácia Viva; a 2ª fica com o paciente, que retira o produto na farmácia da unidade [F]. Registrar no prontuário [F]."
          ]},
          {nota: "Memento SUS-Betim 2022, cap. 4 [F]. O farmacêutico do SUS-Betim também prescreve 21 dessas plantas, pelo Protocolo Farmacêutico municipal, após o curso da SMS (Portaria GAPR 159/18) [F]."}
        ]},
        {t: "Quem prescreve o quê", b: [
          {tab: {h: ["Restrição de prescritor (Memento 2022)", "Plantas"], r: [
            ["Só médico", "Ginkgo, hipérico (erva-de-são-joão), tanaceto [F]"],
            ["Médico e dentista", "Equinácea [F]"],
            ["Médico e enfermeiro", "Papaína [F]"],
            ["Médico e nutricionista", "Alecrim [F]"],
            ["Médico, farmacêutico e nutricionista", "Sene, alcachofra, capim-limão, espinheira-santa [F]"],
            ["Médico, farmacêutico e dentista", "Passiflora, harpagofito [F]"],
            ["Médico, enfermeiro e farmacêutico", "Castanha-da-índia, girassol, rosa-mosqueta [F]"],
            ["Várias categorias (inclui dentista e/ou enfermeiro)", "Arnica, calêndula, camomila, guaçatonga, copaíba, cavalinha, Lippia alba, melissa, guaco, tanchagem, romã, barbatimão [F]"]
          ]}}
        ]},
        {t: "Segurança em um minuto", b: [
          {tab: {h: ["Situação", "Regra do Memento"], r: [
            ["Gestação e lactação", "Contraindicadas para quase todas as plantas, inclusive de uso tópico (arnica, calêndula, barbatimão, guaçatonga) [F]. Exceções descritas: **camomila** tópica é permitida (higienizar o mamilo antes de amamentar) e a **solução de calêndula 5%** é indicada para fissura mamilar, embora a monografia da calêndula contraindique a lactação (divergência interna do Memento) [F]; o Formulário ANVISA 2026 também contraindica a calêndula na lactação, e **o app não a prescreve na amamentação** (decisão da usuária, 27/10/2026). Girassol e copaíba só têm hipersensibilidade como contraindicação; rosa-mosqueta, pele oleosa ou com acne [F]."],
            ["Tinturas de uso oral (têm álcool)", "Uso adulto: contraindicadas abaixo de 18 anos; várias também no alcoolismo e no diabetes (alcachofra, ginkgo, harpagofito, melissa, passiflora, guaco, tanaceto) [F]."],
            ["Xaropes e spray oral", "Contêm açúcar: restrição em diabéticos (xarope de guaco + maracujá, spray de tanchagem + romã) [F]."],
            ["Criança", "Uso oral praticamente só ≥ 12 anos (chá de cavalinha) [F]; os xaropes de guaco, que o Memento libera ≥ 12 anos, são **só para adultos no app** (Formulário ANVISA 2026) [F]. Tópicos: ≥ 6 anos (calêndula, barbatimão, rosa-mosqueta, repelente), ≥ 12 anos (arnica, camomila, castanha-da-índia, copaíba creme, guaco creme); **creme Polawax + girassol a partir de 2 anos** e **óleo de girassol**, descrito como de uso adulto e pediátrico, sem idade mínima definida [F]. Abaixo de 2 anos, o óleo de girassol é o único sem restrição explícita de idade [F]."],
            ["Cirurgia e procedimentos", "Suspender ginkgo ≥ 3 dias antes, guaco ≥ 1 semana e tanaceto 15 dias (inclusive odontológico) [F]."],
            ["Pele aberta", "Arnica e castanha-da-índia tópicas só em pele íntegra [F]."]
          ]}}
        ]},
        {t: "Interações que mais importam na APS", b: [
          {tab: {h: ["Em uso de…", "Plantas que exigem cuidado (Memento 2022)"], r: [
            ["Varfarina, AAS, clopidogrel, heparina, AINE", "**Aumentam sangramento:** castanha-da-índia, ginkgo, guaco (cumarina), passiflora, alecrim, tanaceto; púrpura relatada com harpagofito + varfarina. **Reduzem o efeito da varfarina:** hipérico e alcachofra (indutores) [F]."],
            ["Anticoncepcional oral", "**Hipérico reduz o nível do hormônio: risco de gravidez** [F]. Sene reduz a absorção de fármacos orais [F]. Espinheira-santa: cautela (atividade estrogênica) [F]."],
            ["Antidepressivos (ISRS, tricíclicos, IMAO), trazodona", "Hipérico: síndrome serotoninérgica – não associar [F]. Ginkgo + ISRS: risco serotoninérgico; ginkgo + trazodona: sedação [F]."],
            ["Antirretrovirais", "Hipérico: níveis subterapêuticos e resistência [F]. Guaco: pancitopenia relatada com vários ARV [F]."],
            ["Anticonvulsivantes, lítio", "Hipérico reduz carbamazepina, fenitoína e fenobarbital [F]; ginkgo reduz valproato [F]; alecrim reduz o limiar convulsivo e o nível de lítio [F]."],
            ["Digoxina, diuréticos, corticoide", "Sene e cavalinha: hipocalemia; cavalinha não deve ser associada a diuréticos [F]. Hipérico reduz digoxina [F]."],
            ["Anti-hipertensivos", "Passiflora, Lippia alba, melissa e capim-limão potencializam a queda da PA; alecrim reduz o efeito de IECA e diuréticos [F]."],
            ["Benzodiazepínicos, sedativos, álcool", "Passiflora, melissa, Lippia alba, capim-limão: soma de sedação [F]."],
            ["Levotiroxina", "Melissa interfere com TSH/hormônio tireoidiano – contraindicada no hipotireoidismo [F]."],
            ["Insulina e hipoglicemiantes", "Castanha-da-índia e ginkgo intensificam; harpagofito tem leve efeito hipoglicemiante; alecrim pode elevar a glicemia [F]."],
            ["Polifarmácia", "Espinheira-santa (inibe CYP e P-gp) deve ser evitada; equinácea: cuidado com fármacos de metabolização hepática e hepatotóxicos [F]."],
            ["Acréscimos do Formulário ANVISA 2026", "Guaco: não usar com AINE ou anticoagulante e evitar com antibiótico. Lippia alba: pode aumentar a toxicidade do paracetamol. Espinheira-santa: anabolizantes, metotrexato, amiodarona, cetoconazol, imunossupressores. Alcachofra: reduz o efeito de AAS e varfarina. Cavalinha: inibe CYP1A2 e interage com digitálicos. Guaçatonga: antagonista da vitamina K. Castanha-da-índia: evitar com nefrotóxicos (gentamicina) [F]."]
          ]}, nota: "Ver também o item 'Polifarmácia e desprescrição no idoso'."},
          {perola: {t: "Pergunte sempre pelo chá e pela garrafada", x: "Planta de uso por conta própria raramente aparece na lista de medicamentos. Perguntar ativamente e registrar no prontuário evita interação com varfarina, anticoncepcional e antidepressivo [I].", d: "menos interação não percebida.", l: "I"}}
        ]},
        {t: "Quanta evidência cada planta tem", b: [
          {tab: {h: ["Planta (Farmácia Viva)", "Uso no Memento", "Melhor evidência localizada", "Certeza"], r: [
            ["Hipérico", "Depressão leve a moderada", "Cochrane 2008: extratos padronizados > placebo e ≈ ISRS [F]", "Moderada (extrato); baixa para a tintura (indireta)"],
            ["Castanha-da-índia (oral)", "Insuficiência venosa leve", "Cochrane 2012: menos dor e volume da perna [F]", "Moderada (extrato); baixa para a tintura"],
            ["Harpagofito", "Dor articular leve", "Cochrane 2014: dor lombar a curto prazo [F]", "Baixa"],
            ["Tanaceto", "Prevenção de enxaqueca", "Cochrane 2015: −0,6 crise/mês [F]", "Baixa"],
            ["Arnica (tópica)", "Contusão, dor muscular", "ECR: gel não inferior ao ibuprofeno gel na artrose de mãos [F]", "Baixa (indireta para contusão)"],
            ["Alcachofra", "Dispepsia; dislipidemia leve", "ECR na dispepsia funcional [F]; Cochrane 2013 no colesterol: não convincente [F]", "Baixa / muito baixa"],
            ["Sene", "Constipação ocasional", "AGA-ACG 2023: recomendação condicional [F]", "Baixa"],
            ["Cavalinha", "Diurético em queixas urinárias menores", "ECR pequenos: diurese ≈ HCTZ em sadios [F]", "Baixa"],
            ["Passiflora, melissa, Lippia alba", "Ansiedade e insônia leves", "Cochrane passiflora 2007 inconclusiva [F]; fitoterápicos na insônia ≈ placebo [F]", "Muito baixa"],
            ["Guaco", "Tosse produtiva", "Nenhum ECR localizado no PubMed [F]; consta da RENAME (marcador padronizado) [F]", "Muito baixa (uso tradicional)"],
            ["Espinheira-santa", "Dispepsia", "Só estudo de segurança fase I em humanos [F]", "Muito baixa"],
            ["Calêndula, camomila, barbatimão, copaíba, papaína, girassol, rosa-mosqueta, guaçatonga, tanchagem, romã", "Pele, feridas e boca", "ECR pequenos ou ausentes; papaína sem evidência suficiente em queimaduras (RS 2020) [F]", "Muito baixa"],
            ["**Capim-limão**", "Ansiedade e insônia leves", "**ECR duplo-cego brasileiro sem efeito** hipnótico ou ansiolítico [F]", "Baixa – **contra** o uso"],
            ["**Equinácea**", "Resfriado (tratamento e prevenção)", "**Cochrane 2014: sem benefício no tratamento**; prevenção não significativa [F]", "Moderada – **contra** o uso no tratamento"],
            ["**Ginkgo**", "Zumbido e vertigem", "**Cochrane 2013 e 2022: sem efeito** no zumbido [F]", "Muito baixa a baixa – **contra** o uso rotineiro"]
          ]}, nota: "Certeza estimada pelo app a partir das revisões citadas [I]. 'Contra o uso' significa que a melhor evidência disponível não mostrou benefício, não que a planta seja perigosa."}
        ]},
        {t: "Formulário ANVISA 2026 × Memento de Betim", b: [
          {p: "O **Formulário de Fitoterápicos da Farmacopeia Brasileira, 3ª ed.** (ANVISA, RDC nº 1.024/2026) traz as formulações oficinais para farmácias de manipulação e **Farmácias Vivas**, com advertências, indicações e modo de usar [F]. Ele não avalia eficácia: as certezas da evidência do app não mudam [F]. As fórmulas são isentas de prescrição pela regra sanitária, mas quem prescreve cada planta na Farmácia Viva de Betim continua definido pelo Memento municipal [I]."},
          {h: "Gotas e mililitros"},
          {ul: ["O Formulário dá **todas as doses de tintura em mL**, nenhuma em gotas [F].", "O próprio Memento de Betim equipara **90 gotas a 3 mL** (garra-do-diabo), ou seja, cerca de **30 gotas por mL** [F]. Assim, os 30 a 40 gotas do Memento correspondem a cerca de **1 a 1,3 mL** (cálculo do app) [I].", "O volume real da gota depende do conta-gotas do frasco [C]."]},
          {tab: {h: ["Planta", "Formulário 2026", "Memento 2022", "O que muda"], r: [
            ["Passiflora", "Só P. incarnata; tintura 2 mL até 3×/dia; < 12 anos contraindicado [F]", "P. edulis/alata; 30–40 gotas 1–3×/dia", "Espécie diferente; dose oficial maior"],
            ["Melissa", "Tintura 2–6 mL 1–3×/dia [F]", "30–40 gotas 1–3×/dia", "Dose do Memento abaixo da oficial"],
            ["Lippia alba", "Só chá, **0,4–0,6 g** em 150 mL [F]", "Chá **1–3 g**; tintura", "**App adotou 0,4–0,6 g** (decisão da usuária)"],
            ["Capim-limão", "Só chá, 1–3 g; contraindicado em cardiopatia, nefropatia, hepatopatia e doenças crônicas [F]", "Chá 1–3 g; tintura", "Contraindicações mais amplas"],
            ["Espinheira-santa", "Chá e cápsula; **sem tintura** [F]", "Tintura", "Tintura fora das fórmulas oficiais"],
            ["Alcachofra", "Chá e cápsula; **sem tintura**; ≥ 12 anos [F]", "Tintura; adulto", "Tintura fora das fórmulas oficiais"],
            ["Guaco", "M. glomerata: chá e tintura, **uso adulto**; xarope ≥ 12 anos só para M. laevigata; até 15 dias [F]", "Xarope de M. glomerata ≥ 12 anos", "**App: só adulto** (decisão da usuária)"],
            ["Equinácea", "Tintura da raiz 3 mL 3×/dia; até 8 semanas; não em autoimune, TB, HIV, imunossupressão [F]", "30–40 gotas 3×/dia, 1–2 meses", "Dose oficial maior; mais contraindicações"],
            ["Garra-do-diabo", "Tintura 0,5–1 mL 3×/dia; máx. 3 mL/dia; até 4 semanas [F]", "15–30 gotas 3×/dia; máx. 90 gotas", "Igual"],
            ["Tanaceto", "Tintura 0,25–1 mL 1×/dia; só se refratária à medicação convencional [F]", "30 gotas 1×/dia", "Memento no teto da faixa oficial"],
            ["Castanha-da-índia", "Oral só cápsula de extrato seco; tópico: IVC adulto, contusão ≥ 12 anos [F]", "Tintura oral; creme ≥ 12 anos", "Tintura oral fora das fórmulas oficiais"],
            ["Arnica", "Tópica ≥ 12 anos, pele íntegra; reavaliar em 3–4 dias; sem indicação de IVC [F]", "Creme até 7 dias; gel para IVC", "Prazo menor; gel para IVC sem respaldo"],
            ["Calêndula", "Cutânea ≥ 6 anos; oral/mucosa ≥ 12; **contraindicada na lactação** [F]", "Solução 5% para fissura mamilar", "**App não usa na lactação** (decisão da usuária)"],
            ["Camomila", "Cutânea e oromucosa ≥ 12 anos; permitida na lactação [F]", "Igual", "Igual"],
            ["Cavalinha", "Chá 1–4 g ≥ 12 anos; sem tintura; até 2–4 semanas [F]", "Chá igual; tintura adulto", "Tintura fora das fórmulas oficiais"],
            ["Tanchagem, romã, barbatimão", "Tanchagem e romã adulto (bochecho); romã até 15 dias; barbatimão pomada [F]", "Orabase e spray", "Formas da Farmácia Viva sem fórmula oficial"],
            ["Guaçatonga", "Só chá oral para dispepsia, adulto; antagonista da vitamina K [F]", "Gel para herpes labial", "Indicação do Memento não consta"],
            ["Alecrim", "Só dispepsia e espasmos digestivos; tintura 3–8,5 mL/dia [F]", "Tintura 30 gotas 3×/dia, inclusive depressão leve", "Indicações do Memento além do Formulário"]
          ]}, nota: "**Sem monografia no Formulário 2026:** hipérico, ginkgo, sene, papaína, óleo de girassol, rosa-mosqueta, copaíba e a loção repelente (citronela, andiroba) – para esses, a referência é só o Memento de Betim [F]. O Formulário define a tintura como 1:5 ou 1:10 droga:solvente e não fixa teor de marcador [F]."},
          {ref: ["formulario_fito_anvisa2026", M]}
        ]},
        {t: "Itens por queixa", b: [
          {ir: [["fi-ansiedade-sono", "Ansiedade e insônia leves"], ["fi-depressao", "Depressão leve (hipérico)"], ["fi-dispepsia", "Dispepsia e gases"], ["fi-constipacao", "Constipação ocasional"], ["fi-colicas", "Cólicas"], ["fi-tosse", "Tosse e catarro"], ["fi-resfriado", "Resfriado (equinácea)"], ["fi-boca-garganta", "Boca e garganta"], ["fi-herpes-labial", "Herpes labial"], ["fi-contusao", "Contusão e entorse"], ["fi-dor-articular", "Dor articular e lombar"], ["fi-pernas-pesadas", "Pernas pesadas"], ["fi-enxaqueca", "Prevenção da enxaqueca"], ["fi-zumbido-tontura", "Zumbido e tontura"], ["fi-feridas", "Feridas crônicas"], ["fi-queimadura", "Queimadura leve"], ["fi-pele-seca", "Pele seca e dermatites"], ["fi-acne", "Acne"], ["fi-fralda", "Dermatite de fralda (≥ 6 anos)"], ["fi-picadas", "Picadas e repelente"], ["fi-fissura-mamilo", "Fissura mamilar"], ["fi-urinario", "Queixas urinárias menores"], ["cr-polifarmacia", "Polifarmácia e desprescrição"]]},
          {ref: [M, "protocolo_fito_farm_betim2022", "rename", "remume", "formulario_fito_anvisa2026"]}
        ]}
      ]
    }
  }),

  // ───────── 2. Ansiedade e insônia leves
  it({
    id: "fi-ansiedade-sono", nome: "Ansiedade leve, irritabilidade e insônia leve: passiflora, melissa e erva-cidreira", sistema: "Saúde mental e sono", risco: "baixo",
    ciap: "P01 · P06", cid: "F41.9 · G47.0",
    tags: "passiflora maracujá melissa erva-cidreira cidreira lippia alba capim-limão capim-santo capim-cidreira chá calmante ansiedade nervoso insônia sono irritabilidade fitoterápico farmácia viva",
    S: "Ansiedade/nervosismo/irritabilidade há ___; insônia (dificuldade para iniciar/manter o sono) há ___, ___ noites por semana. Prejuízo funcional: ___. Fatores desencadeantes: ___. Cafeína/álcool/telas à noite: ___.\nIdeação suicida: ___. Uso de benzodiazepínico/sedativo: ___. Medicamentos em uso: ___. Gestação/amamentação: ___. Hipotensão, hipotireoidismo, glaucoma, HPB: ___.",
    O: "BEG, LOTE. PA ___ mmHg. GAD-7 ___ / ISI ___ (se aplicados).",
    A: "Ansiedade leve / insônia leve, sem critério de gravidade – opção fitoterápica da Farmácia Viva discutida.",
    P: "- Psicoeducação e higiene do sono; TCC-I/abordagem psicológica quando disponível.\n- Fitoterápico da Farmácia Viva (opcional, baixa evidência) conforme preferência: ___, em 2 vias.\n- Evitar iniciar benzodiazepínico.\n- Reavaliar em 2 semanas; sem melhora → suspender e rever o diagnóstico.",
    rx: [
      FV("Passiflora (maracujá) – tintura", "USO ORAL\n1. Tintura de Passiflora edulis/alata (maracujá) ______ 1 frasco de 50 mL\n   Diluir 30 a 40 gotas em 50 mL de água e tomar 1 a 3 vezes ao dia (a última dose à noite). Reavaliar em 2 semanas.", "Memento SUS-Betim 2022: ansiedade e insônia leves; adulto. Contraindicada na gestação, lactação, < 18 anos, alcoolismo, diabetes (tintura) e hipotensão. Soma sedação com BZD/álcool; aumenta sangramento com varfarina, AAS, clopidogrel e AINE; potencializa anti-hipertensivos. Não dirigir se sonolento; não usar cronicamente. Certeza muito baixa (Cochrane 2007 inconclusiva)."),
      FV("Melissa + Passiflora – tintura", "USO ORAL\n1. Tintura de Melissa officinalis + Passiflora edulis/alata ______ 1 frasco de 50 mL\n   Diluir 30 a 40 gotas em 50 mL de água e tomar 1 a 3 vezes ao dia. Reavaliar em 2 semanas.", "Memento 2022: insônia, irritabilidade, ansiedade; adulto. Soma as contraindicações das duas plantas: melissa contraindicada no hipotireoidismo (interfere com levotiroxina), glaucoma e HPB. Certeza muito baixa."),
      FV("Erva-cidreira-de-arbusto (Lippia alba) – chá", "USO ORAL\n1. Lippia alba (erva-cidreira) droga vegetal – sachê ______ 1 pacote\n   Preparar o chá: 0,4 a 0,6 g de folhas e flores secas (cerca de meia colher de chá) em 150 mL (1 xícara) de água fervente, abafar por 5 minutos e coar. Tomar 1 xícara até 3 vezes ao dia (acima de 70 anos: meia xícara).", "Memento 2022: sachê sem álcool (alternativa à tintura); adulto. Contraindicada na gestação, lactação, < 18 anos, hipotensão, gastrite/úlcera. Potencializa sedativos e anti-hipertensivos. Certeza muito baixa (sem ECR localizado).")
    ],
    orient: "## O que você tem\n- Ansiedade e dificuldade para dormir **leves** costumam melhorar com mudanças na rotina. O remédio de planta é uma ajuda, não o tratamento principal.\n\n## Remédio de planta (Farmácia Viva)\n" + TINT_PAC + "\n- Pode dar sono: não dirija nem use máquinas se ficar sonolento. Não misture com bebida alcoólica nem com remédio para dormir.\n- Se não melhorar em 2 semanas, volte para reavaliar.\n\n## O que mais ajuda a dormir\n- Deitar e levantar sempre no mesmo horário, inclusive no fim de semana.\n- Sem café, chá preto, chimarrão ou refrigerante de cola depois das 14 h.\n- Desligar celular e TV 1 hora antes de deitar.\n- Se não dormir em uns 20 minutos, levantar, fazer algo calmo com pouca luz e voltar quando tiver sono.\n- Atividade física durante o dia, não perto da hora de dormir.\n\n" + REMEDIO_PLANTA,
    alarme: ["Pensamentos de morte ou de se machucar", "Ansiedade que impede trabalhar, estudar ou sair de casa", "Crises de falta de ar, aperto no peito ou palpitação", "Muito sono durante o dia, tontura ou desmaio"],
    encaminhar: "Ideação suicida, transtorno de ansiedade moderado a grave ou sem resposta: seguir os itens de saúde mental (TAG, pânico, insônia) e eMulti/CAPS conforme o caso.",
    sus: {nacional: "RENAME 2024: nenhuma das plantas deste item (passiflora, melissa, Lippia alba, capim-limão) está entre os fitoterápicos nacionais. Fluoxetina e amitriptilina no Componente Básico; sertralina não consta da RENAME (está na REMUME de Betim).", betim: "Farmácia Viva (Memento 2022): tinturas de passiflora, melissa, melissa + passiflora, Lippia alba e capim-limão; sachês de Lippia alba e capim-limão. REMUME: sertralina 50 mg e fluoxetina 20 mg."},
    evid: {resumo: "A evidência das plantas calmantes é muito baixa. A Cochrane da passiflora (2 ECR) não permitiu conclusão; uma revisão de 2020 (9 ensaios curtos) relatou menos ansiedade, com efeito menor na ansiedade leve. Uma metanálise de fitoterápicos para insônia (14 ECR: valeriana, camomila, kava e outros) não achou diferença do placebo em nenhum desfecho. Para o capim-limão, um ECR duplo-cego brasileiro não mostrou efeito hipnótico nem ansiolítico. Não localizei ECR de melissa ou Lippia alba isoladas nesta revisão. O tratamento de primeira linha segue sendo TCC-I e higiene do sono na insônia, e psicoterapia ± ISRS no transtorno de ansiedade.", certeza: "Muito baixa (contra o capim-limão: baixa)", fontes: [M, "cochrane_passiflora2007", "janda2020_passiflora", "leach2015_insonia", "leite1986_capimlimao", "remume"]},
    nv: NV_BASE.slice(),
    guia: {
      resumo: "Para ansiedade e insônia **leves**, a Farmácia Viva oferece **passiflora**, **melissa**, **melissa + passiflora** e **erva-cidreira-de-arbusto (Lippia alba)** [F]. A evidência é **muito baixa**: Cochrane da passiflora inconclusiva e metanálise de fitoterápicos na insônia sem diferença do placebo [F]. O **capim-limão** consta do Memento para ansiedade e insônia, mas um **ECR duplo-cego brasileiro foi negativo** [F]: o app não o sugere para isso. O papel prático é ser **opção de curto prazo, de baixo risco, para quem prefere planta**, e uma alternativa a iniciar benzodiazepínico [I]. O tratamento de base continua sendo **higiene do sono/TCC-I** e, no transtorno de ansiedade, **psicoterapia ± ISRS** [C].",
      secoes: [
        {t: "Opções da Farmácia Viva", b: [
          {tab: {h: ["Formulação", "Posologia (Memento 2022)", "Não usar / cuidado"], r: [
            ["Tintura de passiflora 50 mL", "30–40 gotas em 50 mL de água, 1–3×/dia [F]", "Hipotensão; varfarina, AAS, clopidogrel, AINE (sangramento); BZD, álcool, anti-histamínicos (sedação); anti-hipertensivos; sem melhora em 2 semanas → reavaliar; não usar cronicamente [F]"],
            ["Tintura de melissa + passiflora 50 mL", "30–40 gotas em 50 mL de água, 1–3×/dia [F]", "Soma das duas plantas [F]"],
            ["Tintura de melissa 50 mL", "30–40 gotas em 50 mL de água, 1–3×/dia [F]", "Hipotireoidismo (interfere com TSH/levotiroxina), glaucoma, HPB, hipotensão; não dirigir [F]"],
            ["Lippia alba: tintura 50 mL ou sachê", "Tintura 30 gotas 1–3×/dia; chá 0,4–0,6 g em 150 mL até 3×/dia pelo Formulário ANVISA 2026 (o Memento traz 1–3 g; > 70 anos: 75 mL) [F]", "Hipotensão, gastrite, úlcera; sedativos, anti-hipertensivos, paracetamol [F]"],
            ["Capim-limão: tintura ou sachê", "Tintura 30–40 gotas 2–3×/dia; chá 1–3 g, 3–4×/dia [F]", "**Não recomendado para ansiedade/insônia** (ECR negativo) [F/I]. Contraindicado em cardiopatia, nefro ou hepatopatia, glaucoma, HPB [F]"]
          ]}, nota: "Todas as tinturas: contraindicadas na gestação, lactação, < 18 anos e alcoolismo; melissa e passiflora também no diabetes, pelo teor alcoólico [F]. Sem álcool: sachê de Lippia alba (chá) [F]."}
        ]},
        {t: "O que a evidência mostra", b: [
          {tab: {h: ["Planta", "Estudo", "Resultado", "Certeza"], r: [
            ["Passiflora", "Cochrane 2007: 2 ECR, 198 pacientes com transtorno de ansiedade", "Poucos dados para concluir; um ECR sem diferença em relação a benzodiazepínico [F]", "Muito baixa"],
            ["Passiflora", "RS 2020: 9 ECR de 1 a 30 dias", "Maioria com menos ansiedade; efeito menor na ansiedade leve [F]", "Muito baixa"],
            ["Fitoterápicos na insônia", "Leach & Page 2015: 14 ECR, 1.602 pacientes", "Nenhuma diferença do placebo em 13 desfechos [F]", "Baixa (indireta para passiflora e melissa)"],
            ["Capim-limão", "Leite 1986: duplo-cego, 50 voluntários (sono) e 18 com ansiedade-traço alta", "Sem efeito hipnótico nem ansiolítico [F]", "Baixa – contra"],
            ["Melissa, Lippia alba", "Busca no PubMed (27/10/2026)", "Nenhum ECR de boa qualidade localizado [F]", "Muito baixa"]
          ]}}
        ]},
        {t: "Como decidir", b: [
          {trio: {ideal: "Insônia: higiene do sono e **TCC-I** (primeira linha). Transtorno de ansiedade: psicoterapia e/ou **ISRS** [C].", sus: "Farmácia Viva: passiflora, melissa e Lippia alba de graça, com evidência muito baixa [F]. REMUME: sertralina 50 mg e fluoxetina 20 mg [F].", ponte: "Fitoterápico como **opção de curto prazo** (2 semanas e reavaliar) para sintomas leves em quem prefere planta, sem atrasar ISRS ou psicoterapia quando indicados e **sem iniciar benzodiazepínico** [I]."}},
          {alerta: "Ideação suicida, crises de pânico frequentes ou prejuízo importante não são 'ansiedade leve': seguir os itens de saúde mental."},
          {ir: [["insonia", "Insônia"], ["tag", "TAG"], ["panico", "Crise de ansiedade"], ["cr-ansiedade", "Ansiedade – tratamento de longo prazo"], ["cr-bzd", "Desprescrição de benzodiazepínico"], ["fi-prescrever", "Como prescrever na Farmácia Viva"]]},
          {ref: [M, "cochrane_passiflora2007", "janda2020_passiflora", "leach2015_insonia", "leite1986_capimlimao", "remume"]}
        ]}
      ]
    }
  }),

  // ───────── 3. Depressão leve (hipérico)
  it({
    id: "fi-depressao", nome: "Depressão leve a moderada: hipérico (erva-de-são-joão) – quando pode e quando não pode", sistema: "Saúde mental e sono", risco: "moderado",
    ciap: "P76", cid: "F32.0 · F32.1",
    tags: "hipérico hiperico erva-de-são-joão erva de são joão hypericum depressão leve moderada antidepressivo natural alecrim anedonia fitoterápico farmácia viva interação anticoncepcional",
    alerta: "Hipérico reduz o anticoncepcional oral (risco de gravidez), a varfarina, a digoxina, anticonvulsivantes, ciclosporina e antirretrovirais; com ISRS, tricíclicos ou IMAO causa síndrome serotoninérgica. Não usar em depressão grave nem com risco de suicídio. Prescrição exclusiva do médico.",
    S: "Humor deprimido/anedonia há ___. PHQ-9 ___. Sintomas: sono ___, apetite ___, energia ___, concentração ___, culpa ___.\nIdeação/plano suicida: ___. Episódio prévio, mania/hipomania: ___. Álcool/drogas: ___.\nMedicamentos em uso (anticoncepcional, varfarina, anticonvulsivante, antidepressivo, antirretroviral, digoxina): ___. Gestação/amamentação: ___. Preferência por tratamento com planta: ___.",
    O: "BEG, LOTE, humor ___, afeto ___, pensamento sem conteúdo suicida.",
    A: "Episódio depressivo leve a moderado, sem risco de suicídio, sem sintomas psicóticos ou bipolares.",
    P: "- Decisão compartilhada: ISRS da REMUME × hipérico da Farmácia Viva (preferência da pessoa) + abordagem psicossocial.\n- Se hipérico: conferidas interações (inclusive anticoncepcional) e orientada fotossensibilidade; receita em 2 vias.\n- Reavaliar em 2–4 semanas (PHQ-9); sem resposta em 4–6 semanas → ISRS.\n- Orientado retorno imediato se ideação suicida.",
    rx: [
      FV("Hipérico – tintura (prescrição médica)", "USO ORAL\n1. Tintura de Hypericum perforatum (hipérico, erva-de-são-joão) ______ 2 frascos de 50 mL\n   Diluir 30 a 40 gotas em 50 mL de água e tomar 3 vezes ao dia, após as refeições.\n   Evitar sol sem proteção durante o uso.", "Memento SUS-Betim 2022: depressão leve a moderada; adulto; só médico. Efeito em 2–4 semanas. O Memento propõe ciclos de 3–6 semanas com intervalos de 10–15 dias – isso diverge do tratamento antidepressivo (manter 6–12 meses após a remissão) e não foi estudado; o app sugere decidir a duração como na depressão tratada com ISRS [I]. Contraindicações: depressão grave, gestação, lactação, < 18 anos (tintura). INTERAÇÕES: anticoncepcional oral, varfarina, digoxina, carbamazepina, fenitoína, fenobarbital, ciclosporina, teofilina, antirretrovirais, ISRS/tricíclicos/IMAO. Evidência: Cochrane 2008 (extratos padronizados) – a tintura não é padronizada (extrapolação).", {trilha: "sus"}),
      {trilha: "ambos", titulo: "ISRS da REMUME (comparador e alternativa)", texto: "USO ORAL\n1. Sertralina 50 mg ______ 1 caixa\n   Tomar 1/2 comprimido (25 mg) ao dia por 7 dias; depois 1 comprimido ao dia.", dose: "C", nota: "Ver o item 'Depressão leve a moderada' para a escolha, doses e seguimento. Hipérico e ISRS não devem ser associados."}
    ],
    orient: "## O que você tem\n- Depressão leve a moderada tem tratamento. Funciona melhor quando junta apoio, rotina e, quando preciso, remédio.\n\n## Se o remédio for o hipérico (Farmácia Viva)\n" + TINT_PAC + "\n- **Se você usa anticoncepcional de comprimido, ele pode falhar**: use camisinha junto ou converse sobre outro método.\n- Não tome junto com outros remédios para depressão, para epilepsia, varfarina, digoxina ou remédio para HIV sem falar com o médico.\n- Evite sol forte sem proteção: a pele pode queimar com mais facilidade.\n- O efeito começa entre 2 e 4 semanas. **Não pare por conta própria.**\n\n## O que mais ajuda\n- Manter horários de sono e refeição, sair de casa todo dia, fazer atividade física e conversar com pessoas de confiança.\n\n" + REMEDIO_PLANTA,
    alarme: ["Pensamentos de morte ou de se machucar: procurar a unidade ou o CAPS no mesmo dia, ou ligar 188 (CVV)", "Agitação, febre, tremores e confusão depois de começar o remédio", "Tristeza piorando apesar do tratamento", "Atraso menstrual (o anticoncepcional pode ter falhado)"],
    encaminhar: "Risco de suicídio, depressão grave, sintomas psicóticos ou bipolares: seguir os itens de depressão e risco de suicídio (eMulti/CAPS).",
    sus: {nacional: "RENAME 2024: hipérico não está entre os 12 fitoterápicos nacionais. Fluoxetina e tricíclicos (amitriptilina, nortriptilina, clomipramina) no Componente Básico; sertralina não consta da RENAME (está na REMUME de Betim).", betim: "Farmácia Viva (Memento 2022): tintura de hipérico (só médico) e tintura de alecrim (coadjuvante na depressão leve com anedonia). REMUME: sertralina 50 mg, fluoxetina 20 mg, amitriptilina 25 mg, nortriptilina 25 e 50 mg."},
    evid: {resumo: "Na Cochrane de 2008 (29 ECR, 5.489 pacientes com depressão maior, maioria leve a moderada), extratos padronizados de hipérico foram superiores ao placebo (RR de resposta 1,28 nos ensaios maiores) e semelhantes aos ISRS (RR 1,00), com menos abandono por efeito adverso (OR 0,53), mas com heterogeneidade e resultados mais favoráveis em ensaios de países de língua alemã. A tintura da Farmácia Viva não tem teor de hipericina/hiperforina informado, então o efeito esperado é incerto. O risco principal são as interações por indução do CYP450 e da P-gp. Para o alecrim (coadjuvante no Memento), não localizei ECR.", certeza: "Moderada para extratos padronizados; baixa para a tintura (evidência indireta)", fontes: [M, "cochrane_hiperico2008", "remume"]},
    nv: NV_BASE.concat(["Teor de hipericina/hiperforina da tintura da Farmácia Viva.", "Duração ideal do tratamento com hipérico (o Memento propõe ciclos; a evidência de antidepressivos pede continuação)."]),
    guia: {
      resumo: "Em **depressão leve a moderada**, extratos padronizados de **hipérico** igualam os ISRS em resposta, com menos abandono por efeito adverso (Cochrane 2008) [F]. A **tintura** da Farmácia Viva não é padronizada: o efeito esperado é **incerto** (evidência indireta) [I]. O que pesa contra são as **interações**: hipérico é indutor do CYP3A4 e da P-gp e **derruba o anticoncepcional oral**, a varfarina, a digoxina, anticonvulsivantes, ciclosporina e antirretrovirais; com ISRS, tricíclicos ou IMAO dá síndrome serotoninérgica [F]. Use só em quem **prefere planta, sem esses fármacos, sem risco de suicídio**, com reavaliação em 2–4 semanas; na dúvida, **ISRS da REMUME** [I].",
      secoes: [
        {t: "Pode usar hipérico?", b: [
          {fluxo: [
            {t: "Depressão com indicação de tratamento"},
            {t: "Grave, risco de suicídio, psicose ou bipolaridade?", ramos: [
              {r: "Sim", n: [{t: "Não usar hipérico: ver itens de depressão e risco de suicídio", k: "warn"}]},
              {r: "Não", n: [{t: "Usa anticoncepcional oral, varfarina, anticonvulsivante, antidepressivo, antirretroviral, digoxina ou ciclosporina?", ramos: [
                {r: "Sim", n: [{t: "Não usar hipérico: ISRS da REMUME", k: "warn"}]},
                {r: "Não", n: [{t: "Gestante, lactante ou < 18 anos?", ramos: [
                  {r: "Sim", n: [{t: "Não usar (contraindicado no Memento)", k: "warn"}]},
                  {r: "Não", n: [{t: "Hipérico é opção se a pessoa preferir; reavaliar em 2–4 semanas", k: "ok"}]}
                ]}]}
              ]}]}
            ]}
          ], nota: "Memento SUS-Betim 2022 [F]; Cochrane 2008 [F]; fluxograma montado pelo app [I]."},
          {tab: {h: ["Interação (Memento 2022)", "Consequência"], r: [
            ["Anticoncepcional oral", "Menor nível hormonal: **gravidez não planejada** [F]"],
            ["Varfarina", "Menor efeito anticoagulante [F]"],
            ["Carbamazepina, fenitoína, fenobarbital", "Menor nível: risco de convulsão [F]"],
            ["Digoxina", "Menor nível: perda do controle do ritmo [F]"],
            ["Ciclosporina", "Rejeição de transplante [F]"],
            ["Antirretrovirais (IP, ITRNN)", "Nível subterapêutico e resistência [F]"],
            ["ISRS, tricíclicos, IMAO", "Síndrome serotoninérgica – não associar [F]"],
            ["Teofilina", "Perda do controle da asma [F]"]
          ]}}
        ]},
        {t: "Evidência e duração", b: [
          {tab: {h: ["Comparação (Cochrane 2008)", "Resultado"], r: [
            ["Hipérico × placebo (9 ECR maiores)", "RR de resposta 1,28 (IC95% 1,10–1,49) [F]"],
            ["Hipérico × ISRS (12 ECR)", "RR 1,00 (0,90–1,11) [F]"],
            ["Abandono por efeito adverso × ISRS", "OR 0,53 (0,34–0,83) [F]"],
            ["Ressalva", "Heterogeneidade; ensaios de países de língua alemã mais favoráveis; extratos padronizados (não tintura) [F]"]
          ]}},
          {perola: {t: "Ciclos de 3–6 semanas × tratamento contínuo", x: "O Memento propõe usar o hipérico em ciclos com pausas de 10–15 dias [F]. Isso não foi testado nos ensaios e diverge do princípio do tratamento antidepressivo (manter 6–12 meses após a remissão) [C]. Se o hipérico funcionar, o app sugere decidir a duração como faria com um ISRS e discutir com a pessoa [I].", d: "menos recaída por interrupção precoce.", l: "I"}},
          {p: "**Alecrim** (tintura, médico e nutricionista) consta do Memento como coadjuvante na depressão leve com anedonia [F]; não localizei ECR que sustente esse uso [F]. Cuidados: hipertensão, diabetes (hiperglicemia), epilepsia, doença biliar/hepática, lítio, IECA e diuréticos, anticoagulantes; nefropatia se usado > 60 dias seguidos [F]."},
          {trio: {ideal: "Depressão leve: abordagem psicossocial/psicoterapia; moderada: ISRS ± psicoterapia [C]. Extrato padronizado de hipérico é alternativa com eficácia semelhante ao ISRS [F].", sus: "REMUME: sertralina e fluoxetina [F]. Farmácia Viva: tintura de hipérico, não padronizada [F].", ponte: "Hipérico para quem prefere planta, sem interações e sem risco; ISRS para os demais e para quem não responder em 4–6 semanas [I]."}},
          {ir: [["depressao", "Depressão leve a moderada"], ["cr-depressao", "Depressão – seguimento"], ["risco-suicida", "Risco de suicídio"], ["mu-metodos", "Método contraceptivo"], ["fi-prescrever", "Como prescrever na Farmácia Viva"]]},
          {ref: [M, "cochrane_hiperico2008", "remume"]}
        ]}
      ]
    }
  }),

  // ───────── 4. Dispepsia
  it({
    id: "fi-dispepsia", nome: "Dispepsia, empachamento e gases: espinheira-santa, alcachofra e melissa", sistema: "Digestivo", risco: "baixo",
    ciap: "D07", cid: "K30",
    tags: "espinheira-santa espinheira santa maytenus alcachofra cynara melissa gases flatulência empachamento estômago queimação azia dispepsia má digestão estufamento alecrim colesterol fitoterápico farmácia viva",
    S: "Desconforto/plenitude epigástrica, empachamento, gases há ___. Relação com alimentação: ___. AINE, álcool, tabagismo: ___.\nSinais de alarme (perda de peso, disfagia, vômitos persistentes, sangramento, anemia, início após 60 anos, história familiar de câncer gástrico): ___.\nCálculo de vesícula/doença hepática: ___. Medicamentos em uso: ___. Gestação/amamentação: ___.",
    O: "BEG. ABD: flácido, ___ (dor à palpação epigástrica ___), sem massas ou visceromegalias.",
    A: "Dispepsia sem sinais de alarme.",
    P: "- Orientações alimentares; suspender AINE se possível.\n- Primeira linha: IBP (omeprazol) por 4–8 semanas e pesquisa/tratamento de H. pylori conforme o item Dispepsia.\n- Fitoterápico da Farmácia Viva (opcional): ___, em 2 vias.\n- Reavaliar em 2–4 semanas; sinais de alarme → endoscopia.",
    rx: [
      FV("Espinheira-santa – tintura (RENAME)", "USO ORAL\n1. Tintura de Maytenus ilicifolia (espinheira-santa) ______ 1 frasco de 50 mL\n   Diluir 30 a 40 gotas em 50 mL de água e tomar 2 vezes ao dia, 1 hora antes do almoço e do jantar.", "Memento SUS-Betim 2022: sintomas dispépticos, antiácido; adulto. Não ultrapassar 6 meses contínuos (pausa de 30 dias). Contraindicada na gestação e lactação (reduz o leite) e < 18 anos (tintura). Evitar em polifarmácia (inibe CYP e P-gp); cautela com anticoncepcional (atividade estrogênica) e imunossupressores; suspender antes de exame de medicina nuclear. Boca seca e alteração do paladar. Certeza muito baixa (só estudo de segurança em humanos)."),
      FV("Alcachofra – tintura (RENAME)", "USO ORAL\n1. Tintura de Cynara scolymus (alcachofra) ______ 1 frasco de 50 mL\n   Diluir 30 a 40 gotas em 50 mL de água e tomar 1 a 3 vezes ao dia.", "Memento 2022: plenitude, distensão, gases; adulto. Contraindicada com cálculo biliar, obstrução biliar, colangite, hepatopatia, gestação, lactação, < 18 anos, alcoolismo e diabetes (tintura); alergia a Asteraceae. Com diuréticos: queda de PA/potássio. Reduz o efeito da varfarina e do AAS; induz CYP3A4, 2B6 e 2D6. ECR na dispepsia funcional com extrato padronizado (Holtmann 2003): certeza baixa para a tintura."),
      FV("Melissa – tintura (gases e distensão)", "USO ORAL\n1. Tintura de Melissa officinalis (melissa) ______ 1 frasco de 50 mL\n   Diluir 30 a 40 gotas em 50 mL de água e tomar 1 a 3 vezes ao dia.", "Memento 2022: queixas gastrintestinais leves (distensão, flatulência); adulto. Contraindicada no hipotireoidismo, glaucoma, HPB, hipotensão, gestação, lactação, < 18 anos, diabetes e alcoolismo (tintura). Pode dar sonolência. Certeza muito baixa.")
    ],
    orient: "## O que você tem\n- Má digestão sem sinal de gravidade. Na maioria das vezes melhora com mudanças na alimentação e, se preciso, remédio para o estômago.\n\n## Remédio de planta (Farmácia Viva)\n" + TINT_PAC + "\n- Espinheira-santa: tome 1 hora antes do almoço e do jantar.\n\n## O que mais ajuda\n- Comer devagar, em porções menores, sem deitar logo depois.\n- Diminuir fritura, gordura, café, álcool e cigarro.\n- Evitar anti-inflamatório (ibuprofeno, diclofenaco) por conta própria.\n\n" + REMEDIO_PLANTA,
    alarme: ["Vômito com sangue ou fezes pretas", "Emagrecer sem querer", "Dificuldade ou dor para engolir", "Vômitos que não param", "Pele ou olhos amarelados", "Dor forte e contínua na barriga"],
    encaminhar: "Sinais de alarme ou idade ≥ 60 anos com sintoma novo: endoscopia (ver item Dispepsia).",
    sus: {nacional: SUS_NAC, betim: "Farmácia Viva (Memento 2022): tinturas de espinheira-santa, alcachofra, melissa, alecrim e Lippia alba. REMUME: omeprazol 20 mg; claritromicina e amoxicilina para H. pylori."},
    evid: {resumo: "Para alcachofra, um ECR alemão (n = 247) com extrato padronizado melhorou sintomas e qualidade de vida na dispepsia funcional em 6 semanas; a Cochrane do colesterol (3 ECR) não foi convincente. Para espinheira-santa, só localizei estudos de segurança (fase I em 24 voluntários, bem tolerada até 2.000 mg/dia) e estudos em animais. Para melissa e alecrim na dispepsia, não localizei ECR. IBP e teste/tratamento de H. pylori são a primeira linha.", certeza: "Baixa (alcachofra) a muito baixa (demais)", fontes: [M, "holtmann2003_alcachofra", "cochrane_alcachofra2013", "tabach2017_espinheira", "rename", "remume", "acg_dispepsia"]},
    nv: NV_BASE.concat(["Teor de marcador das tinturas de alcachofra e espinheira-santa da Farmácia Viva × faixas da RENAME 2024 (ácido clorogênico 24–48 mg/dia; taninos totais 60–90 mg/dia)."]),
    guia: {
      resumo: "Dispepsia **sem sinal de alarme**: a primeira linha é **IBP** e **teste/tratamento de H. pylori** [C]. A Farmácia Viva tem **espinheira-santa** e **alcachofra**, as duas também na **RENAME 2024** [F], além de melissa para gases [F]. A alcachofra tem um **ECR positivo** na dispepsia funcional com extrato padronizado (certeza baixa); a espinheira-santa só tem **estudo de segurança** em humanos (certeza muito baixa) [F]. Boa opção para quem prefere planta ou para sintomas leves residuais, sem atrasar a investigação [I].",
      secoes: [
        {t: "Opções e cuidados", b: [
          {tab: {h: ["Formulação (Memento 2022)", "Posologia", "Não usar / cuidado"], r: [
            ["Espinheira-santa, tintura 50 mL", "30–40 gotas em 50 mL de água, 2×/dia, 1 h antes das refeições; até 6 meses, pausa de 30 dias [F]", "Gestação, lactação (reduz o leite), < 18 anos; polifarmácia; anticoncepcional, imunossupressores; exame de medicina nuclear [F]"],
            ["Alcachofra, tintura 50 mL", "30–40 gotas em 50 mL de água, 1–3×/dia [F]", "Cálculo/obstrução biliar, colangite, hepatopatia; gestação, lactação, < 18 anos, diabetes, alcoolismo; diuréticos; reduz varfarina e AAS [F]"],
            ["Melissa, tintura 50 mL", "30–40 gotas em 50 mL de água, 1–3×/dia [F]", "Hipotireoidismo, glaucoma, HPB, hipotensão [F]"],
            ["Alecrim, tintura 50 mL", "30 gotas em 50 mL de água, 3×/dia [F]", "Doença biliar/hepática, HAS, diabetes, epilepsia, anticoagulantes, lítio; pode alterar o sono à noite [F]"]
          ]}},
          {p: "A alcachofra também aparece no Memento como coadjuvante na **dislipidemia mista leve** [F], mas a Cochrane de 2013 não foi convincente e não há desfecho clínico [F]: não substitui estatina quando indicada [I]."},
          {trio: {ideal: "Dispepsia sem alarme: IBP por 4–8 semanas e teste/tratamento de H. pylori [C].", sus: "REMUME: omeprazol 20 mg [F]. Farmácia Viva: espinheira-santa e alcachofra (também na RENAME) [F].", ponte: "Fitoterápico como opção para sintomas leves ou para quem prefere planta, depois de afastar sinais de alarme [I]."}},
          {ir: [["dispepsia", "Dispepsia"], ["drge", "DRGE"], ["fi-prescrever", "Como prescrever na Farmácia Viva"]]},
          {ref: [M, "holtmann2003_alcachofra", "cochrane_alcachofra2013", "tabach2017_espinheira", "rename", "remume"]}
        ]}
      ]
    }
  }),

  // ───────── 5. Constipação ocasional
  it({
    id: "fi-constipacao", nome: "Constipação ocasional: sene (tintura)", sistema: "Digestivo", risco: "baixo",
    ciap: "D12", cid: "K59.0",
    tags: "sene sena cassia senna laxante intestino preso constipação prisão de ventre fitoterápico farmácia viva",
    S: "Evacuações ___ por semana, fezes ___ (Bristol ___), esforço ___, há ___ (ocasional × crônica). Ingesta de fibras e água: ___. Medicamentos constipantes: ___.\nSinais de alarme (sangue nas fezes, perda de peso, anemia, início após 50 anos, mudança recente do hábito, história familiar de câncer colorretal): ___. Dor abdominal, vômitos, distensão: ___.",
    O: "BEG. ABD: flácido, indolor, RHA presentes, sem massas. (Toque retal se indicado: ___.)",
    A: "Constipação intestinal ocasional, sem sinais de alarme.",
    P: "- Fibras, água e atividade física; horário regular após refeição.\n- Se necessário laxante por poucos dias: sene da Farmácia Viva (≤ 2 semanas) ou lactulose/bisacodil da REMUME.\n- Constipação crônica: seguir o item Constipação (o Memento contraindica sene na constipação crônica).",
    rx: [
      FV("Sene – tintura (uso ocasional, até 2 semanas)", "USO ORAL\n1. Tintura de Cassia angustifolia (sene) ______ 1 frasco de 50 mL\n   Diluir 30 a 40 gotas em 50 mL de água e tomar 1 vez ao dia, à noite. Usar a menor dose que funcione, no máximo por 2 semanas.", "Memento SUS-Betim 2022: constipação ocasional e por inércia intestinal; adulto. CONTRAINDICADO: constipação crônica, < 18 anos, gestação, lactação, obstrução/estenose intestinal, doença inflamatória intestinal, dor abdominal não diagnosticada, apendicite, desidratação, hipocalemia, insuficiência renal, hepática ou cardíaca, náuseas/vômitos, período menstrual, cistite. Interações: digoxina e antiarrítmicos, diuréticos e corticoides (hipocalemia), anticoncepcional e outros fármacos orais (menor absorção). Urina escura sem significado. AGA-ACG 2023: sene com recomendação condicional (certeza baixa).")
    ],
    orient: "## O que você tem\n- Intestino preso de vez em quando, sem sinal de gravidade.\n\n## Remédio de planta (Farmácia Viva)\n" + TINT_PAC + "\n- Tome **à noite**, para o efeito vir de manhã. Use a menor quantidade de gotas que funcionar e **no máximo por 2 semanas**.\n- Pode dar cólica. A urina pode ficar mais escura: é do remédio e passa quando parar.\n- Beba bastante água enquanto usar.\n\n## O que mais ajuda\n- Comer frutas, verduras, feijão e grãos integrais todo dia.\n- Beber água ao longo do dia.\n- Ir ao banheiro sempre no mesmo horário, de preferência depois do café da manhã, com os pés apoiados num banquinho.\n- Caminhar ou fazer outra atividade física.\n\n" + REMEDIO_PLANTA,
    alarme: ["Sangue nas fezes ou fezes pretas", "Barriga inchada e dura, vômitos e parar de soltar gases", "Emagrecer sem querer", "Diarreia forte, fraqueza ou câimbras (perda de potássio)"],
    encaminhar: "Sinais de alarme: investigação (ver item Constipação). Abdome agudo/obstrução: urgência.",
    sus: {nacional: "RENAME 2024: cáscara-sagrada e plantago (fitoterápicos laxantes) no Componente Básico, com lactulose, glicerol e óleo mineral; bisacodil não consta da RENAME (está na REMUME de Betim).", betim: "Farmácia Viva (Memento 2022): tintura de sene. REMUME: lactulose 667 mg/mL, bisacodil 5 mg, óleo mineral, glicerina 12% (enema). PEG não consta."},
    evid: {resumo: "Na diretriz AGA-ACG de 2023 (GRADE), o sene tem recomendação condicional na constipação crônica idiopática; PEG e picossulfato têm recomendação forte. O Memento de Betim contraindica o sene na constipação crônica e limita o uso a 2 semanas; o app segue o Memento para a tintura da Farmácia Viva e mostra a divergência. A tintura não declara teor de senosídeos.", certeza: "Baixa", fontes: [M, "aga_acg2023_constipacao", "rename", "remume"]},
    nv: NV_BASE.concat(["Teor de senosídeos da tintura da Farmácia Viva."]),
    guia: {
      resumo: "Para **constipação ocasional**, a Farmácia Viva oferece **tintura de sene** à noite, **no máximo por 2 semanas** [F]. O Memento **contraindica o sene na constipação crônica** [F], enquanto a diretriz **AGA-ACG 2023** dá ao sene recomendação **condicional** na constipação crônica idiopática [F]: para a tintura de Betim, o app segue o Memento. Na constipação crônica, comece por **fibra e água** e use **lactulose** (REMUME) ou PEG (compra) [F/C].",
      secoes: [
        {t: "Divergência Memento × diretriz", b: [
          {tab: {h: ["Fonte", "Ano", "Sene na constipação crônica", "Contexto"], r: [
            ["Memento SUS-Betim", "2022", "Contraindicado; até 2 semanas [F]", "Tintura magistral não padronizada"],
            ["AGA-ACG (GRADE)", "2023", "Recomendação condicional, certeza baixa [F]", "Senosídeos padronizados; PEG e picossulfato com recomendação forte"]
          ]}, nota: "Conflito aparente: o Memento trata da tintura manipulada (sem teor de senosídeos definido) e do risco de uso contínuo sem supervisão; a diretriz avalia produtos padronizados [I]."},
          {trio: {ideal: "Constipação crônica: fibra/água; PEG (forte); lactulose, sene padronizado ou bisacodil (condicional) [F].", sus: "REMUME: lactulose, bisacodil, óleo mineral; Farmácia Viva: tintura de sene só para uso ocasional [F].", ponte: "Sene da Farmácia Viva só para episódios; na crônica, lactulose da REMUME ou PEG comprado [I]."}},
          {ir: [["constipacao", "Constipação intestinal"], ["fi-prescrever", "Como prescrever na Farmácia Viva"]]},
          {ref: [M, "aga_acg2023_constipacao", "rename", "remume"]}
        ]}
      ]
    }
  }),

  // ───────── 6. Cólicas
  it({
    id: "fi-colicas", nome: "Cólica menstrual e cólica intestinal leve: capim-limão, erva-cidreira e alecrim", sistema: "Digestivo", risco: "baixo",
    ciap: "X02 · D01", cid: "N94.6 · R10.4",
    tags: "cólica menstrual dismenorreia cólica intestinal capim-limão capim-santo capim-cidreira lippia alba erva-cidreira alecrim chá antiespasmódico fitoterápico farmácia viva",
    S: "Cólica ___ (menstrual: início com a menstruação, dura ___ dias / intestinal: relação com alimentação, hábito intestinal ___). Intensidade ___/10. Febre, vômitos, sangramento, dor fora da menstruação, dispareunia: ___. Atraso menstrual: ___.",
    O: "BEG. ABD: flácido, ___ (dor leve difusa/hipogástrica), sem peritonismo.",
    A: "Dismenorreia primária / cólica intestinal leve, sem sinais de gravidade.",
    P: "- Calor local, atividade física.\n- Dismenorreia: AINE em horário fixo desde a véspera/1º dia (primeira linha).\n- Fitoterápico da Farmácia Viva (opcional, evidência muito baixa): ___, em 2 vias.\n- Sinais de causa secundária → ver itens de dismenorreia/dor abdominal.",
    rx: [
      FV("Capim-limão – chá (sachê)", "USO ORAL\n1. Cymbopogon citratus (capim-limão) droga vegetal – sachê ______ 1 pacote\n   Preparar o chá: 1 a 3 g das folhas secas em 150 mL (1 xícara) de água fervente; abafar e coar bem (pano ou coador de papel). Tomar 1 xícara 3 a 4 vezes ao dia nos dias de cólica.", "Memento SUS-Betim 2022: antiespasmódico na dismenorreia e na cólica intestinal; adulto. Contraindicado na gestação, lactação, < 18 anos, cardiopatia, nefropatia, hepatopatia, doença crônica, glaucoma, HPB. Coar bem (fibras podem ulcerar o esôfago). Potencializa sedativos e bloqueadores de canal de cálcio. Certeza muito baixa (sem ECR na cólica localizado)."),
      FV("Erva-cidreira-de-arbusto (Lippia alba) – chá (sachê)", "USO ORAL\n1. Lippia alba (erva-cidreira) droga vegetal – sachê ______ 1 pacote\n   Preparar o chá: 0,4 a 0,6 g de folhas e flores secas (cerca de meia colher de chá) em 150 mL de água fervente, abafar por 5 minutos e coar. Tomar 1 xícara até 3 vezes ao dia nos dias de cólica.", "Memento 2022: antiespasmódico em cólicas uterinas e intestinais; adulto. Contraindicada na gestação, lactação, < 18 anos, hipotensão, gastrite, úlcera. Certeza muito baixa.")
    ],
    orient: "## O que você tem\n- Cólica leve, sem sinal de gravidade.\n\n## Remédio de planta (Farmácia Viva)\n- Prepare o chá com a água fervendo, abafe por 5 minutos e **coe bem**.\n- Leve a 2ª via da receita à farmácia da unidade para pegar o sachê.\n- Na cólica menstrual, o anti-inflamatório começado na véspera ou no primeiro dia costuma funcionar melhor; o chá pode ajudar junto.\n\n## O que mais ajuda\n- Bolsa de água morna na barriga.\n- Atividade física regular.\n\n" + REMEDIO_PLANTA,
    alarme: ["Dor forte que não passa, febre ou vômitos", "Dor fora da menstruação ou na relação sexual", "Atraso menstrual com dor (pode ser gravidez)", "Sangue nas fezes ou diarreia com sangue"],
    encaminhar: "Suspeita de dismenorreia secundária (endometriose, mioma, DIP) ou abdome agudo: seguir os itens específicos.",
    sus: {nacional: "RENAME 2024: nenhum fitoterápico com indicação de cólica; ibuprofeno no Componente Básico; butilescopolamina não consta da RENAME (está na REMUME de Betim).", betim: "Farmácia Viva (Memento 2022): capim-limão (tintura e sachê), Lippia alba (tintura e sachê), alecrim (tintura). REMUME: ibuprofeno 600 mg, butilescopolamina 10 mg, dipirona, paracetamol."},
    evid: {resumo: "Não localizei ECR de capim-limão ou Lippia alba na dismenorreia ou na cólica intestinal. Para alecrim, um ECR iraniano pequeno (n = 82) com cápsula de 250 mg mostrou redução de dor semelhante ao ácido mefenâmico; não com tintura. AINE é a primeira linha na dismenorreia primária (Cochrane 2015).", certeza: "Muito baixa", fontes: [M, "alecrim_dismen2019", "cochrane_dismen", "remume"]},
    nv: NV_BASE.slice(),
    guia: {
      resumo: "Na **dismenorreia primária**, a primeira linha é **AINE em horário fixo** desde a véspera ou o 1º dia (REMUME: ibuprofeno 600 mg) [F/C]. A Farmácia Viva oferece **chá de capim-limão** e de **erva-cidreira-de-arbusto (Lippia alba)** como antiespasmódicos, e **alecrim** para dismenorreia [F], todos com **evidência muito baixa** (só um ECR pequeno de alecrim em cápsula) [F]. Use como **complemento** para quem prefere planta [I]. O Memento também cita alecrim para **amenorreia**: amenorreia se investiga, não se trata com planta [I].",
      secoes: [
        {t: "Opções e cuidados", b: [
          {tab: {h: ["Formulação (Memento 2022)", "Posologia", "Não usar / cuidado"], r: [
            ["Capim-limão: sachê ou tintura 50 mL", "Chá 1–3 g em 150 mL, 3–4×/dia; tintura 30–40 gotas 2–3×/dia [F]", "Gestação, lactação, < 18 anos, cardiopatia, nefro/hepatopatia, glaucoma, HPB; coar bem [F]"],
            ["Lippia alba: sachê ou tintura 50 mL", "Chá 0,4–0,6 g em 150 mL até 3×/dia (Formulário ANVISA 2026; o Memento traz 1–3 g); tintura 30 gotas 1–3×/dia [F]", "Gestação, lactação, < 18 anos, hipotensão, gastrite, úlcera [F]"],
            ["Alecrim: tintura 50 mL", "30 gotas em 50 mL de água, 3×/dia [F]", "HAS, diabetes, epilepsia, doença biliar/hepática, anticoagulantes, lítio [F]"]
          ]}},
          {ir: [["dismenorreia", "Dismenorreia primária"], ["dor-abdominal", "Dor abdominal aguda"], ["endometriose", "Endometriose"], ["fi-prescrever", "Como prescrever na Farmácia Viva"]]},
          {ref: [M, "alecrim_dismen2019", "cochrane_dismen", "remume"]}
        ]}
      ]
    }
  }),

  // ───────── 7. Tosse e catarro
  it({
    id: "fi-tosse", nome: "Tosse e catarro de vias aéreas superiores: xarope de guaco", sistema: "Respiratório e garganta", risco: "baixo",
    ciap: "R05", cid: "R05",
    tags: "guaco mikania xarope tosse catarro tosse seca tosse produtiva expectorante maracujá resfriado gripe fitoterápico farmácia viva RENAME",
    alerta: "Guaco tem cumarina: não usar com varfarina ou outro anticoagulante, distúrbio de coagulação, hepatopatia ou HAS grave; suspender ≥ 1 semana antes de cirurgia. Tosse ≥ 2 semanas: pensar em tuberculose antes do xarope.",
    S: "Tosse ___ (seca/produtiva) há ___ dias, após quadro gripal ___. Febre ___, dispneia ___, sibilância ___, dor torácica ___. Tabagismo ___. Contato com TB ___.\nAnticoagulante/distúrbio de coagulação/hepatopatia/HAS grave: ___. Diabetes: ___. Gestação/amamentação: ___.",
    O: "BEG, eupneico, afebril. FR ___ irpm, SpO₂ ___%. ORL: ___. AR: MV presente bilateralmente, sem ruídos adventícios.",
    A: "Tosse aguda de vias aéreas superiores, sem sinais de gravidade.",
    P: "- Hidratação, mel (≥ 1 ano), lavagem nasal.\n- Xarope de guaco da Farmácia Viva (opcional): ___, por até 15 dias, em 2 vias.\n- Tosse ≥ 2 semanas: investigar TB; sinais de pneumonia/asma → itens específicos.",
    rx: [
      FV("Xarope de guaco 10% (tosse com catarro)", "USO ORAL\n1. Xarope de guaco (Mikania glomerata) 10% ______ 1 frasco de 100 mL\n   Tomar 15 mL de 8 em 8 horas, por até 7 dias (no máximo 15 dias seguidos). Uso adulto.", "Memento SUS-Betim 2022: afecções produtivas das vias aéreas superiores; o Memento libera a partir de 12 anos, mas o app usa **só em adultos** (Formulário ANVISA 2026: M. glomerata é de uso adulto; decisão da usuária, 27/10/2026). Contraindicado na gestação, lactação, hepatopatia, HAS grave, distúrbio de coagulação, anticoagulantes (cumarina), < 12 anos. Contém açúcar (cautela no diabetes). Interage com antirretrovirais (pancitopenia relatada), AINE e ipê-roxo. Pode aumentar o fluxo menstrual. Guaco consta da RENAME 2024. Nenhum ECR localizado: certeza muito baixa (uso tradicional)."),
      FV("Xarope de guaco 7% + maracujá 3% (tosse seca)", "USO ORAL\n1. Xarope de guaco 7% + maracujá 3% ______ 1 frasco de 100 mL\n   Tomar 15 mL 3 vezes ao dia, por até 7 dias (no máximo 15 dias seguidos). Uso adulto.", "Memento 2022: tosse seca e improdutiva; o app usa **só em adultos** (decisão da usuária, 27/10/2026; o Memento libera ≥ 12 anos). Não indicado no diabetes (açúcar). Soma os cuidados do guaco e da passiflora (sonolência, hipotensão, sedativos). Certeza muito baixa.")
    ],
    orient: "## O que você tem\n- Tosse de resfriado ou gripe costuma melhorar sozinha em 1 a 3 semanas. Nenhum xarope cura mais rápido; o objetivo é aliviar.\n\n## Xarope de guaco (Farmácia Viva)\n- É só para adultos.\n- Tome a medida da receita com o copinho dosador ou colher de medida.\n- **No máximo 15 dias seguidos.**\n- Não use se estiver grávida ou amamentando, se tomar remédio para afinar o sangue, se tiver problema de fígado ou sangramento fácil. Tem açúcar: cuidado se tiver diabetes.\n- Leve a 2ª via da receita à farmácia da unidade para pegar o xarope.\n\n## O que mais ajuda\n- Beber bastante água; mel puro (1 colher) ajuda a tosse em quem tem mais de 1 ano.\n- Lavar o nariz com soro.\n- Não fumar e evitar fumaça.\n\n" + REMEDIO_PLANTA,
    alarme: ["Falta de ar, chiado ou respiração rápida", "Febre alta ou que volta depois de melhorar", "Dor no peito", "Tosse há 2 semanas ou mais, com catarro, febre à tarde, suor à noite ou emagrecimento", "Sangue no catarro", "Manchas roxas ou sangramento"],
    encaminhar: "Tosse ≥ 2 semanas: investigar TB (item 'Tosse ≥ 2 semanas'). Pneumonia, asma ou DPOC: itens específicos.",
    sus: {nacional: "RENAME 2024: guaco (Mikania glomerata) em tintura, xarope ou solução oral, com 0,5 a 5 mg de cumarina por dia (Componente Básico).", betim: "Farmácia Viva (Memento 2022): xarope de guaco 10%, xarope de guaco 7% + maracujá 3% e tintura de guaco. REMUME não lista antitussígenos fitoterápicos."},
    evid: {resumo: "Não localizei ensaio clínico de guaco no PubMed. O guaco está na RENAME 2024 com teor de cumarina definido e no Memento de Betim como uso tradicional. A tosse aguda viral é autolimitada e nenhum xarope tem benefício robusto. O principal cuidado é a cumarina (anticoagulantes, coagulopatias, hepatopatia).", certeza: "Muito baixa (uso tradicional)", fontes: [M, "rename", "remume"]},
    nv: NV_BASE.concat(["Teor de cumarina do xarope de guaco da Farmácia Viva × faixa da RENAME (0,5–5 mg/dia)."]),
    guia: {
      resumo: "O **guaco** é o fitoterápico de tosse da Farmácia Viva e também está na **RENAME 2024** [F]: **xarope 10%** para tosse com catarro e **xarope de guaco + maracujá** para tosse seca, por **até 15 dias** [F]. O Memento libera a partir de 12 anos, mas no app o xarope é **só para adultos**: no Formulário ANVISA 2026 a espécie usada (Mikania glomerata) é de uso adulto [F] (decisão da usuária, 27/10/2026). Não localizei ensaio clínico: a indicação é de **uso tradicional** (certeza muito baixa) [F]. O cuidado principal é a **cumarina**: não usar com anticoagulante, coagulopatia, hepatopatia ou HAS grave, nem na gestação [F]. Antes de tratar tosse ≥ 2 semanas, **pensar em tuberculose** [F].",
      secoes: [
        {t: "Opções e cuidados", b: [
          {tab: {h: ["Formulação (Memento 2022)", "Adulto", "12 a 17 anos", "Não usar"], r: [
            ["Xarope de guaco 10%, 100 mL", "15 mL 8/8 h [F]", "Não usar no app (Memento: 5 mL 8/8 h) [F]", "< 12 anos, gestação, lactação, anticoagulantes, coagulopatia, hepatopatia, HAS grave; diabetes (açúcar) [F]"],
            ["Xarope de guaco 7% + maracujá 3%, 100 mL", "15 mL 3×/dia [F]", "Não usar no app (Memento: 5 mL 2–3×/dia) [F]", "Idem + diabetes; sonolência [F]"],
            ["Tintura de guaco 50 mL", "30–40 gotas em 50 mL de água, 3×/dia [F]", "—", "< 18 anos (tintura), alcoolismo, diabetes [F]"]
          ]}, nota: "Máximo de 15 dias seguidos; pode repetir após 5 dias de pausa. Afastar TB e câncer em quadro respiratório crônico não diagnosticado (Memento) [F]. Na monografia do maracujá, o xarope combinado para > 12 anos aparece como 5 mL 2–3×/dia; na do guaco, 5 mL 8/8 h (divergência interna do Memento) [F]."},
          {ir: [["resfriado", "Resfriado comum"], ["bronquite", "Bronquite aguda"], ["tosse-subaguda", "Tosse subaguda"], ["tb-sr", "Tosse ≥ 2 semanas – TB"], ["fi-resfriado", "Resfriado: equinácea"], ["fi-prescrever", "Como prescrever na Farmácia Viva"]]},
          {ref: [M, "rename", "remume"]}
        ]}
      ]
    }
  }),

  // ───────── 8. Resfriado (equinácea)
  it({
    id: "fi-resfriado", nome: "Resfriado comum e infecções respiratórias de repetição: equinácea (evidência contra o uso no tratamento)", sistema: "Respiratório e garganta", risco: "baixo",
    ciap: "R74", cid: "J00",
    tags: "equinácea echinacea resfriado gripe imunidade infecção de repetição herpes labial imunoestimulante fitoterápico farmácia viva",
    S: "Coriza, obstrução nasal, dor de garganta há ___ dias. Febre ___. Episódios no último ano: ___.\nDoença autoimune, HIV, tuberculose, imunossupressão ou imunossupressor (prednisona, azatioprina, ciclosporina, metotrexato): ___. Gestação/amamentação: ___. Alergia a Asteraceae: ___.",
    O: "BEG, afebril. ORL: ___. AR: sem alterações.",
    A: "Resfriado comum.",
    P: "- Sintomáticos e orientações (ver item Resfriado comum).\n- Equinácea: evidência não mostra benefício no tratamento; não prescrita de rotina.",
    rx: [
      FV("Equinácea – tintura (só se a pessoa insistir após explicação)", "USO ORAL\n1. Tintura de Echinacea purpurea (equinácea) ______ 1 frasco de 50 mL\n   Diluir 30 a 40 gotas em 50 mL de água e tomar 3 vezes ao dia. Interromper e reavaliar se os sintomas passarem de 10 dias ou houver febre alta.", "Memento SUS-Betim 2022: prevenção e alívio do resfriado; infecções respiratórias e urinárias de repetição (1–2 meses, depois pausa igual; máximo 8 semanas); médico e dentista. CONTRAINDICADA: doença autoimune, imunodeficiência, HIV/AIDS, tuberculose, esclerose múltipla, imunossupressores, gestação, lactação, < 12 anos (formulação de uso adulto). Hepatotoxicidade com outros hepatotóxicos; leucopenia em uso > 8 semanas; alergia (inclusive SJS e broncoespasmo). Cochrane 2014: sem benefício no tratamento.", {trilha: "fora"})
    ],
    orient: "## O que você tem\n- Resfriado é causado por vírus e melhora sozinho em 7 a 10 dias.\n\n## Sobre a equinácea\n- Os estudos com equinácea não mostraram que ela encurte o resfriado. Por isso ela não é a primeira escolha.\n\n## O que ajuda\n- Repouso, água, lavar o nariz com soro, mel para a tosse (acima de 1 ano), paracetamol ou dipirona para dor ou febre.\n\n" + REMEDIO_PLANTA,
    alarme: ["Falta de ar ou respiração rápida", "Febre alta por mais de 3 dias ou que volta depois de melhorar", "Dor de ouvido ou dor no rosto forte", "Manchas vermelhas, inchaço no rosto ou chiado depois de usar o remédio"],
    encaminhar: "Infecções de repetição incomuns: investigar imunodeficiência em vez de tratar com imunoestimulante [I].",
    sus: {nacional: "RENAME 2024: equinácea não está entre os fitoterápicos nacionais.", betim: "Farmácia Viva (Memento 2022): tintura de equinácea (médico e dentista)."},
    evid: {resumo: "Na Cochrane de 2014 (24 ECR duplo-cegos, 4.631 participantes), só 1 de 7 ensaios de tratamento encurtou o resfriado, e nenhum dos 12 ensaios de prevenção foi significativo (agrupamento post hoc: redução relativa de 10–20%, de relevância clínica questionável). Não houve diferença em abandonos por efeito adverso. Para infecções urinárias de repetição e herpes labial (usos citados no Memento), não localizei evidência.", certeza: "Moderada (contra o uso no tratamento)", fontes: [M, "cochrane_equinacea2014", "cochrane_resfriado"]},
    nv: NV_BASE.slice(),
    guia: {
      resumo: "A equinácea está no Memento para **resfriado** e **infecções de repetição** [F], mas a **Cochrane 2014 não mostrou benefício no tratamento** do resfriado (só 1 de 7 ensaios positivo) e a **prevenção não foi significativa** [F]. Tem contraindicações sérias: **doença autoimune, imunossupressão, HIV, tuberculose** [F]. O app **não sugere a equinácea de rotina**; a receita fica disponível para a pessoa que, informada, ainda queira usar [I].",
      secoes: [
        {t: "Evidência", b: [
          {tab: {h: ["Desfecho (Cochrane 2014)", "Resultado"], r: [
            ["Tratamento: duração do resfriado", "1 de 7 ensaios favorável; sem efeito consistente [F]"],
            ["Prevenção: ≥ 1 resfriado", "Nenhum dos 12 ensaios significativo; post hoc RRR 10–20% [F]"],
            ["Abandono por efeito adverso", "Sem diferença (tendência maior nos ensaios de prevenção) [F]"]
          ]}},
          {ir: [["resfriado", "Resfriado comum"], ["fi-tosse", "Tosse: guaco"], ["fi-prescrever", "Como prescrever na Farmácia Viva"]]},
          {ref: [M, "cochrane_equinacea2014"]}
        ]}
      ]
    }
  }),

  // ───────── 9. Boca e garganta
  it({
    id: "fi-boca-garganta", nome: "Aftas, feridas na boca e dor de garganta: orabase de camomila, tanchagem, romã e barbatimão", sistema: "Respiratório e garganta", risco: "baixo",
    ciap: "D83 · R21", cid: "K12.0 · J02.9",
    tags: "afta aftas úlcera oral estomatite mucosite gengivite dor de garganta faringite amigdalite spray tanchagem romã barbatimão camomila orabase bochecho guaçatonga fitoterápico farmácia viva",
    S: "Lesão em boca ___ (aftas: nº ___, tamanho ___, recorrência ___) / dor de garganta há ___ dias. Febre ___, adenomegalia ___, tosse ___. Lesões genitais, diarreia, perda de peso, uso de quimioterapia: ___. Diabetes: ___. Gestação/amamentação: ___.",
    O: "Oroscopia: ___. Linfonodos: ___. (Centor/McIsaac ___, se dor de garganta.)",
    A: "Estomatite aftosa recorrente menor / faringite viral provável.",
    P: "- Analgesia e higiene oral.\n- Fitoterápico da Farmácia Viva (opcional, alívio local): ___, em 2 vias.\n- Faringite com critérios para estreptococo: ver item Faringoamigdalite (antibiótico).\n- Úlcera oral > 2–3 semanas: biópsia/avaliação odontológica.",
    rx: [
      FV("Pomada orabase de camomila 10% (aftas, mucosite)", "USO NA BOCA\n1. Pomada orabase de camomila (Matricaria chamomilla) 10% ______ 1 bisnaga de 30 g\n   Secar a lesão com gaze e aplicar uma camada fina sobre a afta 3 a 4 vezes ao dia.", "Memento SUS-Betim 2022: úlceras bucais e mucosite; ≥ 12 anos. Contraindicada em alergia a Asteraceae; pode exacerbar asma em suscetíveis; reação alérgica grave rara após contato com mucosa. Uso na gestação e lactação permitido pelo Memento. Certeza muito baixa."),
      FV("Pomada orabase de tanchagem 5% + barbatimão 5% (aftas, úlcera traumática)", "USO NA BOCA\n1. Pomada orabase de tanchagem 5% + barbatimão 5% ______ 1 bisnaga de 30 g\n   Aplicar sobre a lesão 4 a 5 vezes ao dia.", "Memento 2022: úlcera aftosa recorrente, úlceras traumáticas; adulto. Contraindicada na gestação, lactação, < 18 anos (tanchagem). Certeza muito baixa."),
      FV("Spray de tanchagem 10% + romã 10% (dor de garganta, estomatite – adulto)", "USO NA BOCA\n1. Spray de tanchagem 10% + romã 10% ______ 1 frasco de 30 mL\n   Aplicar 3 jatos na boca/garganta 4 a 6 vezes ao dia. No máximo 15 dias seguidos.", "Memento 2022: amigdalite, faringite, laringite, aftas, estomatites, gengivoestomatite herpética; adulto. Contém açúcar (restrição no diabetes). Contraindicado na gestação, lactação, < 18 anos, hipotensão e obstrução intestinal (tanchagem). Não engolir grandes quantidades (romã tem alcaloides). Alívio sintomático: não trata faringite estreptocócica. Certeza muito baixa.")
    ],
    orient: "## O que você tem\n- Afta ou inflamação na boca/garganta, que costuma melhorar em 7 a 14 dias.\n\n## Remédio de planta (Farmácia Viva)\n- **Pomada orabase:** seque a ferida com gaze ou papel antes e passe uma camada fina por cima. Evite comer e beber por 30 minutos depois.\n- **Spray:** aplique os jatos na garganta; **não use por mais de 15 dias seguidos**. Tem açúcar: cuidado se tiver diabetes.\n- Leve a 2ª via da receita à farmácia da unidade para pegar o remédio.\n\n## O que mais ajuda\n- Escovar os dentes com escova macia; evitar comida muito ácida, apimentada ou salgada enquanto doer.\n- Paracetamol ou dipirona para a dor.\n\n" + REMEDIO_PLANTA,
    alarme: ["Ferida na boca que não sara em 3 semanas", "Dificuldade para engolir líquidos, babar ou falta de ar", "Febre alta com placas na garganta", "Feridas também nos olhos, genitais ou na pele", "Inchaço na boca ou falta de ar depois de usar o remédio"],
    encaminhar: "Úlcera oral persistente > 3 semanas, lesões múltiplas recorrentes com sinais sistêmicos: avaliação odontológica/estomatologia. Abscesso dentário: saúde bucal.",
    sus: {nacional: "RENAME 2024: nenhum fitoterápico de uso oral tópico entre os 12 nacionais.", betim: "Farmácia Viva (Memento 2022): orabase de camomila, de tanchagem + barbatimão e de guaçatonga; spray de tanchagem + romã; tinturas de tanchagem, romã, barbatimão e combinações (bochecho; várias de uso odontológico)."},
    evid: {resumo: "Para camomila, tanchagem, romã e barbatimão em aftas, estomatite e faringite, os estudos localizados são pequenos e heterogêneos; não localizei revisão sistemática que sustente o uso. Indicação baseada no Memento (uso tradicional). Na faringite com critério para estreptococo, o tratamento é antibiótico.", certeza: "Muito baixa", fontes: [M, "remume"]},
    nv: NV_BASE.slice(),
    guia: {
      resumo: "A Farmácia Viva tem **pomadas orabase** para aftas e úlceras (camomila ≥ 12 anos; tanchagem + barbatimão e guaçatonga, adulto) e **spray de tanchagem + romã** (adulto, contém açúcar, até 15 dias) para dor de garganta e estomatites [F]. A evidência é **muito baixa** [F]. São opções de **alívio local**; não substituem o antibiótico na faringite estreptocócica nem a investigação de úlcera persistente [I]. Na **gengivoestomatite herpética da criança**, o spray é só para adultos [F].",
      secoes: [
        {t: "Opções e cuidados", b: [
          {tab: {h: ["Formulação (Memento 2022)", "Uso", "Idade / cuidado"], r: [
            ["Orabase de camomila 10%, 30 g", "Aftas, mucosite: 3–4×/dia [F]", "≥ 12 anos; alergia a Asteraceae; permitida na gestação e lactação [F]"],
            ["Orabase de tanchagem 5% + barbatimão 5%, 30 g", "Afta recorrente, úlcera traumática: 4–5×/dia [F]", "Adulto; gestação/lactação contraindicadas [F]"],
            ["Orabase de guaçatonga 10%, 30 g", "Úlcera traumática, afta, herpes intraoral: 4×/dia por 5 dias (6×/dia por 7 dias se grave) [F]", "Adulto; gestação/lactação contraindicadas [F]"],
            ["Spray de tanchagem 10% + romã 10%, 30 mL", "Faringite, amigdalite, laringite, aftas, estomatites: 3 jatos 4–6×/dia, até 15 dias [F]", "Adulto; diabetes (açúcar); gestação/lactação [F]"],
            ["Tinturas para bochecho (tanchagem, tanchagem + romã, tanchagem + barbatimão, barbatimão, romã)", "20 gotas em 50 mL de água, bochecho 3–6×/dia, não engolir [F]", "Adulto; várias com indicação odontológica (gengivite, alveolite, pós-operatório) [F]"]
          ]}},
          {ir: [["aftas", "Aftas orais"], ["faringite", "Faringoamigdalite"], ["gengivoestomatite", "Gengivoestomatite herpética"], ["fi-herpes-labial", "Herpes labial"], ["fi-prescrever", "Como prescrever na Farmácia Viva"]]},
          {ref: [M, "remume"]}
        ]}
      ]
    }
  }),

  // ───────── 10. Herpes labial
  it({
    id: "fi-herpes-labial", nome: "Herpes labial: gel de guaçatonga e hidratante labial", sistema: "Respiratório e garganta", risco: "baixo",
    ciap: "S71", cid: "B00.1",
    tags: "herpes labial bolha no lábio guaçatonga casearia hidratante labial cavalinha calêndula equinácea fitoterápico farmácia viva",
    S: "Vesículas/ardor em lábio há ___ h/dias. Episódios por ano: ___. Pródromo: ___. Imunossupressão: ___. Gestação/amamentação: ___.",
    O: "Vesículas agrupadas sobre base eritematosa em ___, ___ (crostas).",
    A: "Herpes labial recorrente.",
    P: "- Aciclovir se início precoce/episódios intensos (item Herpes labial).\n- Gel de guaçatonga da Farmácia Viva (opcional, adulto) e hidratante labial, em 2 vias.\n- Não manipular as lesões; protetor solar labial.",
    rx: [
      FV("Gel de guaçatonga 10% (adulto)", "USO EXTERNO\n1. Gel de Casearia sylvestris (guaçatonga) 10% ______ 1 bisnaga de 30 g\n   Aplicar sobre a lesão do lábio 2 a 5 vezes ao dia.", "Memento SUS-Betim 2022: herpes labial (lesão externa) e lesões cutâneas, cicatrizante e anti-inflamatório; adulto. Contraindicado na gestação, lactação e < 18 anos. Evidência: só dissertação brasileira (Cury 2005), não localizada no PubMed: certeza muito baixa."),
      FV("Hidratante labial de cavalinha 5% + calêndula 5%", "USO EXTERNO\n1. Hidratante labial de cavalinha 5% + calêndula 5% ______ 1 unidade de 30 mL\n   Aplicar nos lábios 3 a 6 vezes ao dia.", "Memento 2022: ressecamento e fissura labial, coadjuvante no herpes labial, queilite actínica e angular; ≥ 12 anos (na monografia da calêndula aparece ≥ 6 anos – o app usa o limite mais conservador). Alergia a Asteraceae. Certeza muito baixa.")
    ],
    orient: "## O que você tem\n- Herpes no lábio: some sozinho em 7 a 10 dias. Passa para outras pessoas pelo contato enquanto houver bolhas.\n\n## Remédio de planta (Farmácia Viva)\n- Gel de guaçatonga: passe sobre a lesão de 2 a 5 vezes ao dia, com o dedo limpo ou cotonete. Não use se estiver grávida ou amamentando.\n- Hidratante labial: use várias vezes ao dia para não rachar.\n- Leve a 2ª via da receita à farmácia da unidade.\n\n## Cuidados\n- Não fure as bolhas nem tire as casquinhas.\n- Não beije nem compartilhe copo, talher ou toalha enquanto houver bolhas.\n- Lave as mãos depois de mexer no lábio; não coce os olhos.\n- Use protetor solar labial: o sol pode trazer o herpes de volta.\n\n" + REMEDIO_PLANTA,
    alarme: ["Lesões que se espalham pelo rosto ou chegam perto do olho", "Olho vermelho e dolorido", "Febre alta ou mal-estar forte", "Feridas que não saram em 2 semanas"],
    encaminhar: "Herpes perto do olho ou com dor ocular: avaliação no mesmo dia (oftalmologia). Imunossuprimido com doença extensa: ver item Herpes labial.",
    sus: {nacional: "RENAME 2024: aciclovir 200 mg comprimido e creme 5%; nenhum fitoterápico para herpes.", betim: "Farmácia Viva (Memento 2022): gel de guaçatonga 10%, hidratante labial de cavalinha + calêndula; tintura de equinácea como coadjuvante no herpes recorrente intenso. REMUME: aciclovir 200 mg."},
    evid: {resumo: "Não localizei ensaio de guaçatonga no herpes labial no PubMed; o Memento cita uma dissertação brasileira de 2005. Aciclovir oral iniciado cedo tem a melhor evidência. Equinácea (citada como coadjuvante) não mostrou benefício no resfriado (Cochrane 2014) e não localizei evidência no herpes.", certeza: "Muito baixa", fontes: [M, "cochrane_equinacea2014", "remume"]},
    nv: NV_BASE.slice(),
    guia: {
      resumo: "O tratamento com melhor evidência é o **aciclovir** começado no pródromo (REMUME) [C/F]. A Farmácia Viva oferece **gel de guaçatonga** (adulto) e **hidratante labial de cavalinha + calêndula** [F], com evidência **muito baixa** (só uma dissertação, não indexada) [F]. Úteis para conforto e para quem prefere planta [I].",
      secoes: [
        {t: "Opções e cuidados", b: [
          {tab: {h: ["Formulação (Memento 2022)", "Posologia", "Cuidado"], r: [
            ["Gel de guaçatonga 10%, 30 ou 60 g", "2–5×/dia na lesão [F]", "Adulto; gestação/lactação contraindicadas [F]"],
            ["Hidratante labial de cavalinha 5% + calêndula 5%, 30 mL", "3–6×/dia [F]", "≥ 12 anos (limite conservador); alergia a Asteraceae [F/I]"],
            ["Tintura de equinácea", "Coadjuvante no herpes recorrente intenso (Memento) [F]", "Sem evidência localizada; contraindicações imunológicas [F]"]
          ]}},
          {ir: [["herpes-labial", "Herpes labial"], ["fi-boca-garganta", "Aftas e garganta"], ["fi-prescrever", "Como prescrever na Farmácia Viva"]]},
          {ref: [M, "remume", "cochrane_equinacea2014"]}
        ]}
      ]
    }
  }),

  // ───────── 11. Contusão e entorse
  it({
    id: "fi-contusao", nome: "Contusão, entorse, hematoma e dor muscular localizada: arnica e castanha-da-índia tópicas", sistema: "Dor, músculos e circulação", risco: "baixo",
    ciap: "L81", cid: "T14.0",
    tags: "arnica creme gel pancada roxo hematoma equimose contusão entorse torção distensão dor muscular castanha-da-índia fitoterápico farmácia viva",
    S: "Trauma ___ há ___ (mecanismo ___). Dor ___/10, edema ___, equimose ___. Consegue apoiar/andar: ___. Anticoagulante: ___. Gestação/amamentação: ___.",
    O: "Edema ___, equimose ___, dor à palpação de ___. Pele íntegra: ___. Regras de Ottawa (se tornozelo/pé): ___.",
    A: "Contusão / entorse leve / distensão muscular, sem critério de fratura.",
    P: "- Gelo nas primeiras 48 h, compressão, elevação, mobilização precoce conforme dor.\n- Analgésico (paracetamol/dipirona) ou AINE por poucos dias.\n- Creme de arnica da Farmácia Viva em pele íntegra por até 7 dias (opcional), em 2 vias.",
    rx: [
      FV("Creme de arnica 10%", "USO EXTERNO\n1. Creme de arnica (Arnica montana) 10% ______ 1 bisnaga de 60 g\n   Aplicar no local 2 a 4 vezes ao dia, só em pele sem feridas, por no máximo 7 dias.", "Memento SUS-Betim 2022: hematomas, equimoses, traumas musculares, edemas, dores articulares; ≥ 12 anos. Contraindicado na gestação, lactação, < 12 anos, alergia a Asteraceae, pele lesada; nunca por via oral. Uso > 7 dias: dermatite de contato. ECR: gel de arnica não inferior ao ibuprofeno gel na artrose de mãos (indireto para contusão): certeza baixa."),
      FV("Creme de castanha-da-índia 10% (contusão com edema)", "USO EXTERNO\n1. Creme de castanha-da-índia (Aesculus hippocastanum) 10% ______ 1 bisnaga de 60 g\n   Aplicar no local até 3 vezes ao dia, em pele íntegra, massageando de baixo para cima. Reavaliar se não melhorar em 5 dias.", "Memento 2022: auxiliar nos sinais de contusão (edema, hematoma); ≥ 12 anos; não aplicar em feridas, mucosas ou perto dos olhos. Contraindicado na gestação e lactação. Certeza muito baixa para uso tópico.")
    ],
    orient: "## O que você tem\n- Pancada, torção ou distensão leve, sem sinal de fratura.\n\n## Nos primeiros 2 dias\n- Gelo enrolado num pano por 15 a 20 minutos, 3 a 4 vezes ao dia.\n- Deixe a parte machucada elevada quando estiver sentado ou deitado.\n- Volte a mexer aos poucos, conforme a dor deixar.\n\n## Remédio de planta (Farmácia Viva)\n- Creme de arnica: passe no local de 2 a 4 vezes ao dia, **só em pele sem ferida**, por **no máximo 7 dias**. Lave as mãos depois. **Nunca engula.**\n- Pare se a pele ficar vermelha, coçar ou fizer bolhas.\n- Leve a 2ª via da receita à farmácia da unidade.\n\n" + REMEDIO_PLANTA,
    alarme: ["Não consegue apoiar o pé ou mexer a articulação", "Deformidade ou dor muito forte no osso", "Inchaço que aumenta muito, pele fria, pálida ou formigando", "Manchas roxas grandes sem pancada forte ou em quem usa anticoagulante"],
    encaminhar: "Suspeita de fratura (Ottawa positivo), lesão ligamentar grave ou síndrome compartimental: raio X/urgência.",
    sus: {nacional: "RENAME 2024: nenhum fitoterápico tópico para trauma entre os 12 nacionais.", betim: "Farmácia Viva (Memento 2022): creme de arnica 10%, gel de arnica 10%, creme de castanha-da-índia 10%. REMUME: paracetamol, dipirona, ibuprofeno 600 mg (AINE tópico não consta)."},
    evid: {resumo: "Um ECR suíço (n = 204) mostrou gel de arnica não inferior ao ibuprofeno gel 5% na artrose de mãos em 21 dias; para contusão e hematoma, a evidência é indireta. Para castanha-da-índia tópica, não localizei ECR. Gelo, compressão e mobilização precoce são a base.", certeza: "Baixa (arnica) a muito baixa (castanha tópica)", fontes: [M, "widrig2007_arnica", "remume"]},
    nv: NV_BASE.slice(),
    guia: {
      resumo: "A Farmácia Viva oferece **creme de arnica 10%** (≥ 12 anos, pele íntegra, **até 7 dias**) e **creme de castanha-da-índia 10%** para contusão com edema [F]. A arnica tópica tem um **ECR de não inferioridade ao ibuprofeno gel** na artrose de mãos (indireto para trauma) [F]. Como a REMUME **não tem AINE tópico**, a arnica é a opção tópica gratuita [F/I]. **Arnica nunca por via oral** [F].",
      secoes: [
        {t: "Opções e cuidados", b: [
          {tab: {h: ["Formulação (Memento 2022)", "Uso", "Cuidado"], r: [
            ["Creme de arnica 10%, 60 g", "2–4×/dia, até 7 dias; compressa morna antes potencializa [F]", "≥ 12 anos; pele íntegra; gestação/lactação; Asteraceae; dermatite de contato [F]"],
            ["Gel de arnica 10%, 60 g", "Pernas pesadas/edema venoso: 2–3×/dia, até 7 dias [F]", "Adulto [F]"],
            ["Creme de castanha-da-índia 10%, 60 g", "Até 3×/dia, de baixo para cima [F]", "≥ 12 anos; pele íntegra; reavaliar em 5 dias [F]"]
          ]}},
          {ir: [["entorse", "Entorse de tornozelo"], ["distensao", "Distensão muscular"], ["fi-dor-articular", "Dor articular e lombar"], ["fi-prescrever", "Como prescrever na Farmácia Viva"]]},
          {ref: [M, "widrig2007_arnica", "remume"]}
        ]}
      ]
    }
  }),

  // ───────── 12. Dor articular e lombar
  it({
    id: "fi-dor-articular", nome: "Dor articular leve e dor lombar: garra-do-diabo (harpagofito)", sistema: "Dor, músculos e circulação", risco: "baixo",
    ciap: "L20 · L03", cid: "M25.5 · M54.5",
    tags: "harpagofito garra-do-diabo harpagophytum dor nas juntas artrose osteoartrite lombalgia dor nas costas ATM anti-inflamatório natural fitoterápico farmácia viva RENAME",
    S: "Dor em ___ há ___, mecânica/inflamatória ___, rigidez matinal ___ min. Edema, calor, febre: ___. Sinais de alarme lombar: ___.\nÚlcera péptica, doença cardiovascular, cálculo biliar, síndrome do intestino irritável: ___. Varfarina/anti-hipertensivo/antiarrítmico: ___. Diabetes, álcool: ___.",
    O: "Articulação ___: sem sinais flogísticos ___. Coluna: ___. Neurológico: ___.",
    A: "Dor articular mecânica leve / lombalgia inespecífica.",
    P: "- Atividade física/exercício e orientação.\n- Analgesia: paracetamol/dipirona; AINE por curto período se sem contraindicação.\n- Harpagofito da Farmácia Viva (opcional) por até 4 semanas, em 2 vias.",
    rx: [
      FV("Garra-do-diabo (harpagofito) – tintura", "USO ORAL\n1. Tintura de Harpagophytum procumbens (garra-do-diabo) ______ 1 frasco de 50 mL\n   Diluir 15 a 30 gotas em 50 mL de água e tomar 3 vezes ao dia (máximo 90 gotas por dia), por até 4 semanas.", "Memento SUS-Betim 2022: dor articular leve; anti-inflamatório na luxação/subluxação da ATM; adulto. CONTRAINDICADO: úlcera gástrica/duodenal, doença cardiovascular, cálculo biliar, cólon irritável, gestação, lactação, < 18 anos, diabetes e alcoolismo (tintura). Altas doses interferem com anti-hipertensivos e antiarrítmicos; púrpura relatada com varfarina; leve efeito hipoglicemiante. Edema, eritema ou febre na articulação → avaliação médica. Cochrane 2014 (lombalgia): extratos padronizados em harpagosídeo, certeza baixa; garra-do-diabo consta da RENAME 2024.")
    ],
    orient: "## O que você tem\n- Dor de junta ou de coluna leve, sem sinal de gravidade. Movimento e exercício ajudam a melhorar.\n\n## Remédio de planta (Farmácia Viva)\n" + TINT_PAC + "\n- Não passe de 90 gotas por dia e **não use por mais de 4 semanas**.\n- Não use se tiver úlcera no estômago, problema de coração ou pedra na vesícula.\n\n## O que mais ajuda\n- Manter-se ativo; evitar ficar muito tempo deitado.\n- Caminhada, alongamento e fortalecimento, aos poucos.\n- Calor local pode aliviar.\n\n" + REMEDIO_PLANTA,
    alarme: ["Junta inchada, quente e vermelha, ou febre", "Dor nas costas com perda de força, formigamento nas pernas ou alteração para urinar/evacuar", "Dor que piora à noite, emagrecimento ou história de câncer", "Fezes pretas, dor no estômago forte"],
    encaminhar: "Artrite (sinais inflamatórios), sinais de alarme lombar: ver itens Monoartrite e Lombalgia.",
    sus: {nacional: "RENAME 2024: garra-do-diabo (30–100 mg de harpagosídeo/dia; cápsula ou comprimido) e salgueiro (60–240 mg de salicina/dia) no Componente Básico.", betim: "Farmácia Viva (Memento 2022): tintura de harpagofito; creme de arnica 10%. REMUME: paracetamol, dipirona, ibuprofeno 600 mg, ciclobenzaprina 5 mg."},
    evid: {resumo: "Na Cochrane de fitoterapia na lombalgia (2014), extratos de harpagofito padronizados em 50 ou 100 mg de harpagosídeo por dia podem ser melhores que placebo para dor a curto prazo e reduzir o uso de resgate (2 ECR, 315 pacientes, qualidade baixa). A tintura da Farmácia Viva não informa o teor de harpagosídeo: aplicar esse resultado é extrapolação. Para artrose, a base é exercício e analgesia.", certeza: "Baixa (extrato padronizado); muito baixa para a tintura", fontes: [M, "cochrane_herbal_lombalgia2014", "rename", "remume"]},
    nv: NV_BASE.concat(["Teor de harpagosídeo da tintura da Farmácia Viva × faixa da RENAME (30–100 mg/dia)."]),
    guia: {
      resumo: "A **garra-do-diabo (harpagofito)** está no Memento para **dor articular leve** e na **RENAME 2024** [F]. A Cochrane 2014 mostrou benefício **de curto prazo e certeza baixa** na lombalgia com extrato padronizado em harpagosídeo [F]; a tintura de Betim não informa esse teor (extrapolação) [I]. Útil como alternativa ao AINE em quem quer evitá-lo, respeitando as contraindicações: **úlcera péptica, doença cardiovascular e cálculo biliar** [F]. Máximo **4 semanas** [F].",
      secoes: [
        {t: "Opções e cuidados", b: [
          {tab: {h: ["Formulação (Memento 2022)", "Posologia", "Não usar"], r: [
            ["Tintura de harpagofito 50 mL", "15–30 gotas em 50 mL de água, 3×/dia; máx. 90 gotas/dia; até 4 semanas [F]", "Úlcera péptica, DCV, cálculo biliar, SII, gestação, lactação, < 18 anos, diabetes, alcoolismo [F]"],
            ["Creme de arnica 10%", "2–4×/dia, até 7 dias, pele íntegra [F]", "Ver item Contusão [F]"]
          ]}},
          {trio: {ideal: "Exercício, educação e analgesia; AINE por curto período [C]. Harpagofito padronizado com benefício pequeno e de curto prazo na lombalgia [F].", sus: "REMUME: paracetamol, dipirona, ibuprofeno. Farmácia Viva: tintura de harpagofito (não padronizada) [F].", ponte: "Harpagofito para quem quer evitar AINE, sem úlcera, DCV ou cálculo biliar, por até 4 semanas [I]."}},
          {ir: [["lombalgia", "Lombalgia aguda"], ["oa-joelho", "Osteoartrite de joelho"], ["cr-artralgia", "Dor articular crônica"], ["fi-contusao", "Contusão: arnica"], ["fi-prescrever", "Como prescrever na Farmácia Viva"]]},
          {ref: [M, "cochrane_herbal_lombalgia2014", "rename", "remume"]}
        ]}
      ]
    }
  }),

  // ───────── 13. Pernas pesadas (IVC)
  it({
    id: "fi-pernas-pesadas", nome: "Pernas pesadas e insuficiência venosa leve: castanha-da-índia", sistema: "Dor, músculos e circulação", risco: "baixo",
    ciap: "K95", cid: "I87.2",
    tags: "castanha-da-índia castanha da india aesculus escina varizes pernas pesadas inchaço nas pernas insuficiência venosa arnica gel fitoterápico farmácia viva",
    S: "Peso/dor/inchaço nas pernas há ___, piora no fim do dia/em pé ___. Varizes ___. Úlcera prévia ___. Edema unilateral súbito, dor na panturrilha ___.\nInsuficiência renal ou hepática: ___. Anticoagulante/antiagregante, AINE, insulina/hipoglicemiante, digoxina: ___. Gestação/amamentação: ___.",
    O: "MMII: varizes ___, edema ___ (bilateral/simétrico), alterações tróficas ___, pulsos ___. CEAP ___.",
    A: "Insuficiência venosa crônica leve (C1–C3), sem sinais de TVP ou úlcera.",
    P: "- Elevação dos membros, atividade física, controle de peso; meia de compressão (compra – Betim não fornece).\n- Castanha-da-índia da Farmácia Viva (opcional), em 2 vias; reavaliar em 2 semanas.",
    rx: [
      FV("Castanha-da-índia – tintura", "USO ORAL\n1. Tintura de Aesculus hippocastanum (castanha-da-índia) ______ 1 frasco de 50 mL\n   Diluir 30 a 40 gotas em água e tomar 3 vezes ao dia, junto com as refeições. Reavaliar em 2 semanas.", "Memento SUS-Betim 2022: desconforto e peso nas pernas por distúrbio venoso leve; adulto. CONTRAINDICADA: insuficiência renal ou hepática, gestação, lactação, < 18 anos. Interações: anticoagulantes, antiagregantes e AINE (sangramento), hipoglicemiantes e insulina, digoxina, gentamicina, laxantes, antiácidos. Inflamação de pele, tromboflebite, úlcera ou edema súbito → avaliação médica. Cochrane 2012: extratos padronizados em escina reduzem dor e volume da perna a curto prazo; tintura não padronizada (extrapolação)."),
      FV("Creme de castanha-da-índia 10% (tópico)", "USO EXTERNO\n1. Creme de castanha-da-índia 10% ______ 1 bisnaga de 60 g\n   Aplicar nas pernas até 3 vezes ao dia, sempre de baixo para cima, em pele íntegra.", "Memento 2022: desconforto e peso nas pernas; região periferida com comprometimento venoso (não no leito da ferida); ≥ 12 anos. Certeza muito baixa para uso tópico.")
    ],
    orient: "## O que você tem\n- Cansaço e inchaço nas pernas por circulação das veias mais lenta. Melhora com movimento e com as pernas elevadas.\n\n## Remédio de planta (Farmácia Viva)\n" + TINT_PAC + "\n- Tome junto com as refeições. Não use se tiver problema nos rins ou no fígado, ou se tomar remédio para afinar o sangue.\n- Creme: passe sempre **de baixo para cima**, só em pele sem ferida.\n\n## O que mais ajuda\n- Caminhar todos os dias; mexer os pés quando ficar muito tempo sentado ou em pé.\n- Elevar as pernas ao descansar.\n- Meia de compressão, se indicada (a prefeitura não fornece; é comprada).\n- Controlar o peso.\n\n" + REMEDIO_PLANTA,
    alarme: ["Uma perna inchada de repente, dolorida, quente ou vermelha (pode ser trombose)", "Falta de ar ou dor no peito", "Ferida na perna que não fecha", "Veia endurecida, vermelha e dolorida"],
    encaminhar: "Suspeita de TVP: avaliação no mesmo dia. Úlcera venosa ou varizes com complicação: ver item Insuficiência venosa.",
    sus: {nacional: "RENAME 2024: castanha-da-índia não está entre os 12 fitoterápicos nacionais.", betim: "Farmácia Viva (Memento 2022): tintura e creme de castanha-da-índia; gel de arnica 10% para dor nas pernas por insuficiência venosa (até 7 dias). Betim não fornece meias de compressão."},
    evid: {resumo: "Na Cochrane de 2012, extratos orais padronizados de castanha-da-índia reduziram dor nas pernas (6 de 7 ECR) e volume da perna (6 ECR, n = 502; cerca de 32 mL) em relação ao placebo, com eventos adversos leves; um ECR sugeriu efeito semelhante à meia de compressão. A tintura da Farmácia Viva não informa o teor de escina, então o efeito é incerto. Compressão e exercício seguem como base.", certeza: "Moderada (extrato padronizado); baixa para a tintura", fontes: [M, "cochrane_castanha2012", "remume"]},
    nv: NV_BASE.concat(["Teor de escina da tintura da Farmácia Viva (os ECR usaram 50–150 mg de escina/dia)."]),
    guia: {
      resumo: "Para **pernas pesadas e insuficiência venosa leve**, a **castanha-da-índia** tem a evidência mais sólida entre os fitoterápicos da Farmácia Viva: Cochrane 2012 com **menos dor e edema** a curto prazo, com extratos padronizados em escina [F]. A tintura de Betim não informa a escina (extrapolação) [I]. Como **Betim não fornece meia de compressão**, a castanha é uma opção gratuita útil para quem não pode comprar, junto com elevação e exercício [F/I]. Contraindicada na **insuficiência renal ou hepática** e com cuidado com **anticoagulantes** [F].",
      secoes: [
        {t: "Opções e cuidados", b: [
          {tab: {h: ["Formulação (Memento 2022)", "Posologia", "Não usar / cuidado"], r: [
            ["Tintura de castanha-da-índia 50 mL", "30–40 gotas 3×/dia, às refeições [F]", "IR, IH, gestação, lactação, < 18 anos; anticoagulantes, antiagregantes, AINE, hipoglicemiantes, digoxina [F]"],
            ["Creme de castanha-da-índia 10%, 60 g", "Até 3×/dia, de baixo para cima [F]", "≥ 12 anos; pele íntegra; não no leito da ferida [F]"],
            ["Gel de arnica 10%, 60 g", "2–3×/dia, até 7 dias [F]", "Adulto; pele íntegra [F]"]
          ]}},
          {trio: {ideal: "Compressão, exercício, elevação; extrato padronizado de castanha-da-índia reduz dor e edema a curto prazo [F].", sus: "Betim não fornece meia de compressão [F]. Farmácia Viva: tintura e creme de castanha-da-índia (não padronizados) [F].", ponte: "Castanha-da-índia da Farmácia Viva + elevação e exercício para quem não pode comprar a meia; reavaliar em 2 semanas [I]."}},
          {ir: [["ivc", "Insuficiência venosa / varizes"], ["tvp", "Suspeita de TVP"], ["fi-feridas", "Feridas crônicas"], ["fi-prescrever", "Como prescrever na Farmácia Viva"]]},
          {ref: [M, "cochrane_castanha2012", "remume"]}
        ]}
      ]
    }
  }),

  // ───────── 14. Prevenção de enxaqueca (tanaceto)
  it({
    id: "fi-enxaqueca", nome: "Prevenção da enxaqueca: tanaceto (não trata a crise)", sistema: "Dor, músculos e circulação", risco: "baixo",
    ciap: "N89", cid: "G43.9",
    tags: "tanaceto rainha-das-ervas feverfew tanacetum enxaqueca migrânea profilaxia prevenção dor de cabeça fitoterápico farmácia viva",
    S: "Enxaqueca ___ crises/mês, ___ dias de cefaleia/mês, duração ___. Uso de analgésico ___ dias/mês. Profilaxia prévia: ___ (resposta ___).\nSinais de alarme: ___. Anticoagulante/antiagregante, AINE frequente, sangramento: ___. Gestação/amamentação: ___. Alergia a Asteraceae: ___.",
    O: "Exame neurológico sem alterações. PA ___ mmHg.",
    A: "Migrânea com indicação de profilaxia, sem sinais de alarme.",
    P: "- Diário de cefaleia; reduzir gatilhos; limitar analgésico a ≤ 2–3 dias/semana.\n- Profilaxia de primeira linha: propranolol ou amitriptilina (REMUME).\n- Tanaceto da Farmácia Viva se falha/intolerância à profilaxia convencional (Memento), em 2 vias; avaliar em 2 meses.",
    rx: [
      FV("Tanaceto – tintura (prescrição médica)", "USO ORAL\n1. Tintura de Tanacetum parthenium (tanaceto) ______ 1 frasco de 50 mL\n   Diluir 30 gotas em 50 mL de água e tomar 1 vez ao dia, todos os dias, para prevenir as crises. O efeito aparece em 4 a 6 semanas. Não parar de uma vez.", "Memento SUS-Betim 2022: profilaxia da enxaqueca após excluir causas graves e quando não responde à medicação convencional; adulto; só médico. Tratamento de 4–5 meses, reduzindo a dose no último mês; suspensão gradual. CONTRAINDICADO: anticoagulantes/antiagregantes, história de hemorragia ou distúrbio hemostático, gestação, lactação, crianças, alergia a Asteraceae, diabetes e alcoolismo (tintura). Suspender 15 dias antes de cirurgia ou procedimento odontológico. Aftas/inflamação da boca → suspender. Reduz absorção de ferro. Cochrane 2015: −0,6 crise/mês, certeza baixa."),
      {trilha: "ambos", titulo: "Profilaxia de primeira linha (REMUME)", texto: "USO ORAL\n1. Propranolol 40 mg ______ 1 caixa\n   Tomar 1/2 comprimido (20 mg) 2 vezes ao dia; ajustar conforme resposta e frequência cardíaca.", dose: "C", nota: "Alternativa: amitriptilina 25 mg à noite (REMUME). Escolha e doses no item 'Migrânea'."}
    ],
    orient: "## O que você tem\n- Enxaqueca frequente. O remédio de prevenção diminui o número de crises; ele **não** serve para tirar a dor na hora.\n\n## Remédio de planta (Farmácia Viva)\n" + TINT_PAC + "\n- Tome **todos os dias**, mesmo sem dor. O efeito começa em 4 a 6 semanas.\n- **Não pare de repente**: a enxaqueca pode piorar. A retirada é feita aos poucos, com orientação.\n- Pare se aparecerem feridas na boca ou sangramento. Avise antes de cirurgia ou dentista (parar 15 dias antes).\n\n## O que mais ajuda\n- Anotar os dias de dor num diário.\n- Dormir e comer em horários regulares, beber água, reduzir álcool.\n- Não tomar remédio para dor mais de 2 a 3 dias por semana.\n\n" + REMEDIO_PLANTA,
    alarme: ["Dor de cabeça súbita e muito forte, a pior da vida", "Dor de cabeça com febre e rigidez no pescoço", "Fraqueza, dormência, fala enrolada ou alteração da visão que não passa", "Dor de cabeça nova depois dos 50 anos", "Sangramento ou manchas roxas"],
    encaminhar: "Sinais de alarme: urgência. Falha de 2 profilaxias: neurologia (item Migrânea).",
    sus: {nacional: "RENAME 2024: tanaceto não está entre os fitoterápicos nacionais. Propranolol e amitriptilina no Componente Básico.", betim: "Farmácia Viva (Memento 2022): tintura de tanaceto (só médico). REMUME: propranolol 40 mg, amitriptilina 25 mg."},
    evid: {resumo: "Na Cochrane de 2015 (6 ECR, 561 pacientes), o maior e mais rigoroso ensaio (n = 218, extrato estável) mostrou 0,6 crise/mês a menos que o placebo; os demais foram pequenos ou negativos. Certeza baixa, sem problemas maiores de segurança. Propranolol e amitriptilina têm evidência mais robusta.", certeza: "Baixa", fontes: [M, "cochrane_tanaceto2015", "remume"]},
    nv: NV_BASE.slice(),
    guia: {
      resumo: "O **tanaceto** previne crises de enxaqueca com efeito **pequeno**: cerca de **0,6 crise a menos por mês** no melhor ECR, certeza **baixa** (Cochrane 2015) [F]. O Memento o reserva para **falha da profilaxia convencional**, com prescrição **só médica** [F]. Primeira linha na REMUME: **propranolol** e **amitriptilina** [F]. Cuidado com **anticoagulantes e antiagregantes** (sangramento) e suspender **15 dias antes de procedimentos** [F]. Retirada **gradual** [F].",
      secoes: [
        {t: "Evidência e uso", b: [
          {tab: {h: ["Estudo (Cochrane 2015)", "Resultado"], r: [
            ["Maior ECR (n = 218)", "Crises/mês: 4,8 → 2,9 com tanaceto × 4,8 → 3,5 com placebo (diferença 0,6) [F]"],
            ["Demais ECR", "3 pequenos positivos, 2 rigorosos negativos [F]"],
            ["Segurança", "Eventos leves: gastrointestinais e aftas [F]"]
          ]}},
          {ir: [["migranea", "Migrânea (crise e profilaxia)"], ["cefaleia-abuso", "Cefaleia por uso excessivo de analgésicos"], ["fi-prescrever", "Como prescrever na Farmácia Viva"]]},
          {ref: [M, "cochrane_tanaceto2015", "remume"]}
        ]}
      ]
    }
  }),

  // ───────── 15. Zumbido e tontura (ginkgo)
  it({
    id: "fi-zumbido-tontura", nome: "Zumbido, tontura e câimbras: ginkgo (evidência contra o uso rotineiro)", sistema: "Dor, músculos e circulação", risco: "baixo",
    ciap: "H03 · N17", cid: "H93.1 · R42",
    tags: "ginkgo biloba zumbido tinnitus labirintite tontura vertigem câimbra circulação memória fitoterápico farmácia viva",
    S: "Zumbido ___ (uni/bilateral, pulsátil ___) há ___. Perda auditiva ___. Tontura ___ (tipo ___). Câimbras ___.\nAnticoagulante/antiagregante/AINE, anticonvulsivante, ISRS, trazodona, insulina: ___. Crises convulsivas: ___. Cirurgia prevista: ___.",
    O: "Otoscopia ___. Acuidade auditiva grosseira ___. Exame neurológico ___. (Dix-Hallpike ___.)",
    A: "Zumbido subjetivo / tontura – causa em investigação.",
    P: "- Investigar a causa (ver itens Tontura e VPPB); orientar sobre zumbido.\n- Ginkgo: evidência não mostra benefício no zumbido; não prescrito de rotina.",
    rx: [
      FV("Ginkgo – tintura (prescrição médica; evidência desfavorável)", "USO ORAL\n1. Tintura de Ginkgo biloba (ginkgo) ______ 1 frasco de 50 mL\n   Diluir 30 a 40 gotas em 50 mL de água e tomar 2 a 3 vezes ao dia.", "Memento SUS-Betim 2022: vertigem e zumbido de origem circulatória, câimbras; adulto; só médico; tratamento de 6–12 semanas com pausas. CONTRAINDICADO: gestação, lactação, < 12 anos, tintura < 18 anos, diabetes, alcoolismo; cautela em coagulopatia e com anticoagulantes/antiagregantes/AINE. Interações: anticonvulsivantes (reduz efeito), ISRS (serotoninérgica), trazodona, insulina, omeprazol, efavirenz, dabigatrana. Suspender ≥ 3 dias antes de cirurgia; evitar em epilepsia. Cochrane 2013 e 2022: sem efeito no zumbido.", {trilha: "fora"})
    ],
    orient: "## O que você tem\n- Zumbido e tontura têm várias causas. O mais importante é descobrir a causa e tratar o que for possível.\n\n## Sobre o ginkgo\n- Os estudos com ginkgo para zumbido não mostraram melhora em relação ao placebo. Por isso ele não é recomendado de rotina.\n- Ele aumenta o risco de sangramento com remédios para afinar o sangue e pode atrapalhar remédios para epilepsia.\n\n" + REMEDIO_PLANTA,
    alarme: ["Zumbido em um ouvido só, com perda súbita da audição: procurar atendimento em até 3 dias", "Zumbido que pulsa junto com o coração", "Tontura com fraqueza, fala enrolada, visão dupla ou dificuldade para andar", "Sangramento ou manchas roxas"],
    encaminhar: "Perda auditiva súbita: otorrino com urgência. Zumbido unilateral ou pulsátil: investigação (otorrinolaringologia).",
    sus: {nacional: "RENAME 2024: ginkgo não está entre os fitoterápicos nacionais.", betim: "Farmácia Viva (Memento 2022): tintura de ginkgo (só médico)."},
    evid: {resumo: "A Cochrane de 2013 (4 ECR, 1.543 pacientes, baixo risco de viés) não achou evidência de eficácia quando o zumbido é a queixa principal. A atualização de 2022 (12 ECR, 1.915 participantes) concluiu que o ginkgo pode ter pouco ou nenhum efeito sobre a gravidade do zumbido (certeza muito baixa). Para câimbras e vertigem, não localizei evidência de benefício.", certeza: "Muito baixa a baixa (contra o uso no zumbido)", fontes: [M, "cochrane_ginkgo_zumbido2013", "cochrane_ginkgo_zumbido2022"]},
    nv: NV_BASE.slice(),
    guia: {
      resumo: "O Memento lista o **ginkgo** para zumbido, vertigem e câimbras [F], mas **duas revisões Cochrane (2013 e 2022) não mostraram efeito no zumbido** [F], e ele traz **risco de sangramento** com anticoagulantes, antiagregantes e AINE, além de interagir com anticonvulsivantes e ISRS [F]. O app **não sugere ginkgo de rotina**; a prioridade é **investigar a causa** do zumbido e da tontura [I].",
      secoes: [
        {t: "Evidência", b: [
          {tab: {h: ["Revisão", "Resultado"], r: [
            ["Cochrane 2013 (4 ECR, 1.543 pacientes)", "Sem evidência de eficácia com zumbido como queixa principal [F]"],
            ["Cochrane 2022 (12 ECR, 1.915 participantes)", "THI −1,35 (IC95% −8,26 a 5,55): pouco ou nenhum efeito; certeza muito baixa [F]"]
          ]}},
          {ir: [["tontura", "Tontura"], ["vppb", "VPPB"], ["caimbras", "Câimbras"], ["fi-prescrever", "Como prescrever na Farmácia Viva"]]},
          {ref: [M, "cochrane_ginkgo_zumbido2013", "cochrane_ginkgo_zumbido2022"]}
        ]}
      ]
    }
  }),

  // ───────── 16. Feridas crônicas
  it({
    id: "fi-feridas", nome: "Feridas crônicas e curativos: papaína, óleo de girassol, barbatimão e rosa-mosqueta", sistema: "Pele e feridas", risco: "moderado",
    ciap: "S97", cid: "L97 · L89 · I83.0",
    tags: "ferida úlcera venosa pé diabético lesão por pressão escara curativo papaína girassol AGE ácidos graxos barbatimão rosa-mosqueta copaíba guaco creme desbridamento necrose esfacelo granulação cicatriz fitoterápico farmácia viva",
    S: "Ferida em ___ há ___, origem ___ (venosa/arterial/neuropática/pressão/trauma). Dor ___. Exsudato ___, odor ___. Febre ___. DM ___ (HbA1c ___), DAP ___, tabagismo ___. Cuidados atuais: ___.",
    O: "Lesão em ___: ___ × ___ cm, profundidade ___, leito ___% granulação / ___% esfacelo / ___% necrose, exsudato ___, bordas ___, pele perilesional ___. Exposição óssea ou tendínea: ___. Sinais de infecção: ___. Pulsos ___; ITB ___.",
    A: "Ferida crônica ___ (etiologia), fase ___.",
    P: "- Tratar a causa: compressão (venosa, se ITB adequado), alívio de pressão, controle glicêmico, avaliação vascular.\n- Limpeza com SF 0,9%; escolha do produto pela fase do leito.\n- Produto da Farmácia Viva: ___, em 2 vias (papaína: médico ou enfermeiro).\n- Reavaliação da ferida em ___ dias (área, tecido, exsudato).",
    rx: [
      FV("Gel de papaína 6% (esfacelo)", "USO EXTERNO\n1. Gel de papaína 6% ______ 1 bisnaga de 60 g\n   Após limpar com soro fisiológico 0,9%, aplicar no leito da ferida e cobrir; trocar a cada 24 horas. Guardar na geladeira (4 a 8 °C).", "Memento SUS-Betim 2022: necrose de liquefação/esfacelo, infectada ou não; 4% para feridas secas ou com granulação; 10% para necrose de coagulação (após escarotomia, coberta com filme transparente; só se o enfermeiro acompanhar diariamente). CONTRAINDICADO: exposição de tendão ou osso. Inativada por água oxigenada, prata, iodo, ferro, luz e calor. Validade 60 dias (30 dias a 10%). Médico e enfermeiro. Evidência insuficiente para papaína em queimaduras (RS 2020): certeza muito baixa."),
      FV("Óleo de girassol (AGE) – prevenção de LPP e feridas superficiais", "USO EXTERNO\n1. Óleo de girassol (Helianthus annuus) ______ 1 frasco de 100 mL\n   Remover exsudato e tecido desvitalizado; aplicar o óleo no leito ou embeber gaze de contato o suficiente para manter úmido; cobrir com gaze e fixar. Trocar quando o secundário saturar ou a cada 24 horas.", "Memento 2022: prevenção de lesão por pressão e feridas abertas superficiais com ou sem infecção; adulto e pediátrico. Variante com copaíba 7% para lesão infectada sem necrose (verificar tolerância). Certeza muito baixa."),
      FV("Creme de barbatimão 10% + óleo de girassol (granulação)", "USO EXTERNO\n1. Creme de barbatimão (Stryphnodendron adstringens) 10% + óleo de girassol ______ 1 bisnaga de 60 g\n   Aplicar sobre a ferida 1 a 3 vezes ao dia, após limpeza, ou a cada troca de curativo.", "Memento 2022: feridas em granulação, escoriações; ≥ 6 anos. Não usar em lesão com inflamação moderada a intensa, muito exsudativa ou que precise drenar; gestação e lactação contraindicadas; incompatível com sais de prata. Alternativa: creme de calêndula 5% + barbatimão 5%. Certeza muito baixa.")
    ],
    orient: "## Cuidados com a ferida\n- Lave a ferida com soro fisiológico e faça o curativo como foi ensinado. Troque o curativo quando ficar molhado por fora, ou pelo menos 1 vez ao dia.\n- **Gel de papaína: guarde na geladeira** (fora do congelador). Não use água oxigenada nem iodo junto: eles estragam a papaína.\n- Arder um pouco por até 20 minutos depois da papaína é esperado.\n\n## O que ajuda a ferida a fechar\n- Ferida de varizes: perna elevada e compressão, quando indicada.\n- Diabetes: glicose controlada e não apoiar o peso sobre a ferida do pé.\n- Acamado: mudar de posição a cada 2 horas e manter a pele seca.\n- Comer proteína (feijão, ovo, carne, leite) e não fumar.\n\n" + REMEDIO_PLANTA,
    alarme: ["Vermelhidão que se espalha, calor, pus ou mau cheiro forte", "Febre ou calafrios", "Ferida ficando preta ou aumentando rápido", "Dor muito forte, pé frio ou pálido", "Osso ou tendão aparecendo"],
    encaminhar: "Infecção com sinais sistêmicos, isquemia (ITB < 0,5 ou pé frio), osteomielite ou necrose extensa: avaliação no mesmo dia/vascular. Pé diabético: estratificação (item Pé diabético).",
    sus: {nacional: "RENAME 2024: nenhum fitoterápico para feridas entre os 12 nacionais (babosa só como gel/creme tópico de 10–70% para queimaduras/pele).", betim: "Farmácia Viva (Memento 2022): papaína gel 4, 6 e 10% e sachê 5 g; óleo de girassol; girassol + copaíba 7%; creme de barbatimão + girassol; creme de calêndula + barbatimão; creme de rosa-mosqueta; creme de guaco (prevenção de LPP e periferida). REMUME: colagenase 0,6 e 1,2 UI/g pomada, sulfadiazina de prata 1%."},
    evid: {resumo: "Para papaína, a revisão sistemática de enzimas desbridantes em queimaduras (2020) não encontrou evidência suficiente; colagenase e bromelaína tiveram algum respaldo. Para óleo de girassol, barbatimão, calêndula e copaíba em feridas crônicas, os estudos são pequenos e predominantemente brasileiros. Um ECR com óleo de rosa-mosqueta em lesões de pele foi negativo. O que mais muda a cicatrização é tratar a causa: compressão na úlcera venosa, alívio de carga no pé diabético e reposicionamento na lesão por pressão.", certeza: "Muito baixa", fontes: [M, "salehi2020_enzimas", "rosamosqueta_ecr2019", "remume"]},
    nv: NV_BASE.concat(["Fluxo de curativos especiais e de cobertura em Betim (sala de curativo, enfermagem de referência).", "Concordância da escolha da concentração de papaína com o protocolo de feridas da enfermagem de Betim, se houver."]),
    guia: {
      resumo: "Na ferida crônica, o que mais muda o desfecho é **tratar a causa**: **compressão** na úlcera venosa, **alívio de carga** no pé diabético, **reposicionamento** na lesão por pressão, controle glicêmico e avaliação vascular [C]. A Farmácia Viva oferece produtos por **fase do leito**: **papaína** 4/6/10% para desbridar (médico ou enfermeiro), **óleo de girassol** e **barbatimão** na granulação, **rosa-mosqueta** na epitelização e **creme de guaco** na prevenção de LPP [F]. A evidência é **muito baixa** (papaína sem evidência suficiente em RS de queimaduras) [F]. A REMUME tem **colagenase** e **sulfadiazina de prata** como alternativas [F].",
      secoes: [
        {t: "Produto por fase da ferida (Memento 2022)", b: [
          {tab: {h: ["Leito da ferida", "Produto da Farmácia Viva", "Como usar"], r: [
            ["Necrose de coagulação (escara)", "Gel de papaína 10% (após escarotomia) ou sachê 5 g → solução 10%", "Gel coberto com filme transparente por 24 h; solução por 20 min e depois gel; só com acompanhamento diário da enfermagem [F]"],
            ["Esfacelo (necrose de liquefação), infectado ou não", "Gel de papaína 6%", "Após SF 0,9%, deixar 24 h; controlar exsudato [F]"],
            ["Ferida seca ou granulando", "Gel de papaína 4%; creme de barbatimão + girassol; creme de calêndula + barbatimão", "Papaína 24 h; cremes 1–3×/dia [F]"],
            ["Superficial, com ou sem infecção", "Óleo de girassol; girassol + copaíba 7% (infectada sem necrose)", "Manter leito úmido; troca a cada 24 h ou quando saturar [F]"],
            ["Epitelização e cicatriz", "Creme de rosa-mosqueta 10%; loção de calêndula + rosa-mosqueta + girassol", "1–3×/dia [F]"],
            ["Prevenção de LPP e da maceração periferida", "Creme de guaco 10%; óleo de girassol", "Nas proeminências a cada mudança de decúbito; periferida a cada troca [F]"]
          ]}, nota: "Papaína: contraindicada com tendão ou osso exposto; inativada por água oxigenada, prata, iodo e ferro; conservar a 4–8 °C [F]. Barbatimão: não em lesão muito exsudativa, com dreno ou inflamação intensa; incompatível com prata [F]."},
          {trio: {ideal: "Tratar a causa (compressão, offloading, reposicionamento, revascularização), desbridamento e cobertura adequada à umidade do leito [C].", sus: "Farmácia Viva: papaína, girassol, barbatimão, rosa-mosqueta, guaco [F]. REMUME: colagenase, sulfadiazina de prata [F]. Betim não fornece meias de compressão [F].", ponte: "Escolher o produto pela fase do leito e reavaliar a área a cada 2–4 semanas; ferida que não reduz ~40% em 4 semanas → rever causa e conduta [C/I]."}},
          {ir: [["po-acamado", "Pessoa acamada e lesão por pressão"], ["cr-pe-diabetico", "Pé diabético"], ["ivc", "Insuficiência venosa"], ["fi-queimadura", "Queimadura leve"], ["fi-prescrever", "Como prescrever na Farmácia Viva"]]},
          {ref: [M, "salehi2020_enzimas", "rosamosqueta_ecr2019", "remume"]}
        ]}
      ]
    }
  }),

  // ───────── 17. Queimadura leve
  it({
    id: "fi-queimadura", nome: "Queimadura leve e queimadura solar: gel de calêndula e de camomila", sistema: "Pele e feridas", risco: "baixo",
    ciap: "S14", cid: "T30.1 · L55.0",
    tags: "queimadura queimadura de sol solar vermelhidão bolha gel calêndula camomila rosa-mosqueta cicatriz fitoterápico farmácia viva",
    S: "Queimadura por ___ há ___, local ___. Bolhas ___. Dor ___/10. Tétano: ___.",
    O: "Queimadura de ___ grau (superficial/espessura parcial superficial) em ___, SCQ ≈ ___%. Face, mãos, pés, genitais, articulações: ___. Sinais de infecção: ___.",
    A: "Queimadura de 1º grau / 2º grau superficial pequena, sem critério de encaminhamento.",
    P: "- Resfriar com água corrente; curativo (ver item Queimadura); analgesia; profilaxia do tétano se indicada.\n- Gel de calêndula (≥ 6 anos) ou camomila (≥ 12 anos) da Farmácia Viva (opcional), em 2 vias.\n- Após epitelizar: loção com rosa-mosqueta para a cicatriz (opcional).",
    rx: [
      FV("Gel de calêndula 10% (≥ 6 anos)", "USO EXTERNO\n1. Gel de calêndula (Calendula officinalis) 10% ______ 1 bisnaga de 60 g\n   Aplicar sobre a queimadura 2 a 3 vezes ao dia. Se precisar cobrir, usar gaze umedecida com soro fisiológico e óleo de girassol.", "Memento SUS-Betim 2022: queimaduras leves e solares, inflamações leves da pele; ≥ 6 anos. Contraindicado na gestação, lactação e alergia a Asteraceae. Persistência > 1 semana ou sinais de infecção → reavaliar. Certeza muito baixa."),
      FV("Gel de camomila 10% (≥ 12 anos)", "USO EXTERNO\n1. Gel de camomila (Matricaria chamomilla) 10% ______ 1 bisnaga de 60 g\n   Aplicar sobre a queimadura 1 a 3 vezes ao dia.", "Memento 2022: queimaduras leves e solares; ≥ 12 anos; não usar em lesões profundas ou extensas. Uso na gestação e lactação permitido pelo Memento. Certeza muito baixa.")
    ],
    orient: "## O que você tem\n- Queimadura pequena e superficial. Costuma sarar em 1 a 2 semanas.\n\n## Primeiros cuidados\n- Deixe em água corrente fria (não gelada) por 20 minutos logo depois de queimar.\n- **Não fure as bolhas.** Não passe pasta de dente, manteiga, borra de café ou pomada caseira.\n\n## Remédio de planta (Farmácia Viva)\n- Passe o gel de 2 a 3 vezes ao dia. Se precisar cobrir, use gaze molhada com soro.\n- Leve a 2ª via da receita à farmácia da unidade.\n\n## Depois que sarar\n- Proteja do sol por alguns meses para a mancha não escurecer.\n\n" + REMEDIO_PLANTA,
    alarme: ["Queimadura grande, no rosto, mãos, pés, genitais ou em cima de dobras", "Pele branca, dura ou sem dor (queimadura profunda)", "Vermelhidão que se espalha, pus ou febre", "Queimadura por choque elétrico ou produto químico"],
    encaminhar: "Critérios do CAB 28 (espessura parcial > 20% no adulto, > 10% na criança, > 5% < 2 anos; 3º grau; áreas especiais; elétrica/química): ver item Queimadura.",
    sus: {nacional: "RENAME 2024: babosa (gel/creme 10–70% de gel fresco) no Componente Básico; sulfadiazina de prata.", betim: "Farmácia Viva (Memento 2022): gel de calêndula 10%, gel de camomila 10%, loção de calêndula + rosa-mosqueta + girassol, creme de rosa-mosqueta. REMUME: sulfadiazina de prata 1%. Babosa não consta do Memento de Betim."},
    evid: {resumo: "Não localizei revisão sistemática de calêndula ou camomila em queimaduras leves; a indicação é de uso tradicional (Memento). Resfriamento imediato, limpeza e curativo adequados são a base.", certeza: "Muito baixa", fontes: [M, "cab28", "remume"]},
    nv: NV_BASE.slice(),
    guia: {
      resumo: "Para **queimadura leve ou solar**, a Farmácia Viva tem **gel de calêndula** (≥ 6 anos) e **gel de camomila** (≥ 12 anos) [F], com evidência **muito baixa** [F]. O Memento indica a loção com rosa-mosqueta para queimaduras \"extensas\" de 1º e 2º grau [F]: queimadura extensa **se encaminha** pelos critérios do CAB 28; a loção fica para a **fase de epitelização e cicatriz** [I].",
      secoes: [
        {t: "Opções e cuidados", b: [
          {tab: {h: ["Formulação (Memento 2022)", "Uso", "Idade / cuidado"], r: [
            ["Gel de calêndula 10%, 60 g", "2–3×/dia; troca 1–3×/dia [F]", "≥ 6 anos; gestação/lactação; Asteraceae [F]"],
            ["Gel de camomila 10%, 60 g", "1–3×/dia [F]", "≥ 12 anos; não em lesão profunda ou extensa [F]"],
            ["Loção de calêndula 4% + rosa-mosqueta 3% + girassol 3%, 100 mL", "3×/dia, na epitelização, para prevenir cicatriz hipertrófica [F]", "≥ 6 anos [F]"]
          ]}},
          {ir: [["queimadura", "Queimadura (critérios e curativo)"], ["fi-feridas", "Feridas crônicas"], ["fi-prescrever", "Como prescrever na Farmácia Viva"]]},
          {ref: [M, "cab28", "remume"]}
        ]}
      ]
    }
  }),

  // ───────── 18. Pele seca e dermatites
  it({
    id: "fi-pele-seca", nome: "Pele seca, dermatite atópica, dermatite seborreica e coceira: loções e cremes da Farmácia Viva", sistema: "Pele e feridas", risco: "baixo",
    ciap: "S87 · S86 · S02", cid: "L20.9 · L21.9 · L29.9",
    tags: "pele seca ressecamento hidratante emoliente dermatite atópica eczema dermatite seborreica caspa couro cabeludo coceira prurido calcanhar rachado calêndula cavalinha girassol guaco loção creme polawax fitoterápico farmácia viva",
    S: "Pele seca/coceira/lesões em ___ há ___. História de atopia ___. Banhos ___ (quentes/longos). Couro cabeludo/face: descamação oleosa ___. Lesões infectadas ___. Alergia a Asteraceae ___.",
    O: "Xerose ___. Placas eczematosas em ___ / descamação gordurosa em ___. Escoriações ___. Sinais de infecção ___.",
    A: "Xerose / dermatite atópica leve / dermatite seborreica leve.",
    P: "- Banho morno e curto, sabonete suave, hidratante diário após o banho.\n- Hidratante/loção da Farmácia Viva conforme idade: ___, em 2 vias.\n- Crise inflamatória: corticoide tópico conforme o item específico.",
    rx: [
      FV("Creme Polawax + óleo de girassol 10% (≥ 2 anos)", "USO EXTERNO\n1. Creme Polawax + óleo de girassol 10% ______ 1 bisnaga de 60 g\n   Aplicar na pele seca 2 a 3 vezes ao dia, principalmente logo depois do banho.", "Memento SUS-Betim 2022: dermatites, lesões descamativas, ressecamento da pele; a partir de 2 anos (única base hidratante do Memento para 2–6 anos). Hipersensibilidade aos componentes. Certeza muito baixa para o efeito específico; hidratação regular é a base do cuidado da dermatite atópica."),
      FV("Loção de calêndula 3% + cavalinha 3% + óleo de girassol 4% (dermatite atópica)", "USO EXTERNO\n1. Loção de calêndula 3% + cavalinha 3% + óleo de girassol 4% ______ 1 frasco de 100 mL\n   Aplicar 2 a 3 vezes ao dia.", "Memento 2022: dermatite atópica; ≥ 12 anos pela monografia da cavalinha (≥ 6 anos na da calêndula – o app usa o limite conservador). Alergia a Asteraceae. Alternativas: loção de cavalinha 5% + óleo de semente de uva 5% (pele seca e senil, ≥ 12 anos). Certeza muito baixa."),
      FV("Solução de calêndula 10% (couro cabeludo – dermatite seborreica)", "USO EXTERNO\n1. Solução de calêndula 10% ______ 1 frasco de 100 mL\n   Aplicar no couro cabeludo 1 vez ao dia, depois do banho, por 5 a 10 dias seguidos.", "Memento 2022: afecções do couro cabeludo, dermatite seborreica; ≥ 6 anos. Gestação e lactação contraindicadas. Certeza muito baixa; cetoconazol 2% (REMUME, creme) é a opção com evidência.")
    ],
    orient: "## Cuidados com a pele\n- Banho morno e rápido, com pouco sabonete. Seque sem esfregar.\n- Passe o hidratante logo depois do banho, com a pele ainda úmida, **todos os dias**, mesmo quando a pele estiver boa.\n- Unhas curtas; roupas de algodão; evite amaciante e perfume na pele.\n\n## Remédio de planta (Farmácia Viva)\n- Use o creme ou a loção como hidratante, de 2 a 3 vezes ao dia.\n- Pare se a pele arder muito, ficar mais vermelha ou coçar mais (pode ser alergia).\n- Leve a 2ª via da receita à farmácia da unidade.\n\n" + REMEDIO_PLANTA,
    alarme: ["Feridas com pus, crostas amareladas ou febre", "Bolhas dolorosas espalhadas (principalmente em quem tem dermatite atópica)", "Coceira forte no corpo todo sem lesão de pele (pode ser outra doença)", "Piora apesar do tratamento"],
    encaminhar: "Dermatite atópica moderada a grave ou refratária, suspeita de eczema herpético: ver item Dermatite atópica. Prurido generalizado sem lesões: investigar (item Prurido).",
    sus: {nacional: "RENAME 2024: nenhum fitoterápico emoliente entre os 12 nacionais.", betim: "Farmácia Viva (Memento 2022): creme Polawax + girassol 10% (≥ 2 anos); loções de calêndula + cavalinha (± girassol) e de cavalinha + semente de uva; solução de calêndula 10% (couro cabeludo); creme de guaco 10% (prurido, ≥ 12 anos); creme de cavalinha 10% (fissura de calcanhar, ≥ 12 anos). REMUME: dexametasona 0,1% creme, cetoconazol 2% creme. Hidratante comum não consta da REMUME."},
    evid: {resumo: "Hidratação regular com emoliente é a base do cuidado da dermatite atópica e da xerose. Não localizei evidência de que calêndula, cavalinha ou guaco somem efeito ao emoliente. Na dermatite seborreica, antifúngico tópico (cetoconazol) tem a melhor evidência.", certeza: "Muito baixa (para o efeito específico das plantas)", fontes: [M, "remume", "tsrs_derm2023"]},
    nv: NV_BASE.slice(),
    guia: {
      resumo: "Como a **REMUME não tem hidratante**, os cremes e loções da Farmácia Viva funcionam na prática como o **emoliente gratuito** de Betim [F/I]. O **creme Polawax + girassol** é o único liberado **a partir de 2 anos**; as loções com calêndula e cavalinha são para **≥ 12 anos** (limite conservador) [F/I]. O que melhora a pele é o **uso diário**; a planta em si tem evidência muito baixa [I]. Couro cabeludo: **solução de calêndula 10%** (≥ 6 anos) ou cetoconazol da REMUME [F].",
      secoes: [
        {t: "Escolha por idade e queixa", b: [
          {tab: {h: ["Formulação (Memento 2022)", "Queixa", "Idade"], r: [
            ["Creme Polawax + óleo de girassol 10%, 60 g", "Dermatites, descamação, ressecamento [F]", "≥ 2 anos [F]"],
            ["Óleo de girassol, 100 mL", "Pele (prevenção de LPP, feridas superficiais) [F]", "Adulto e pediátrico [F]"],
            ["Loção de calêndula 3% + cavalinha 3% + girassol 4%, 100 mL", "Dermatite atópica [F]", "≥ 12 anos (calêndula ≥ 6; cavalinha ≥ 12) [F/I]"],
            ["Loção de calêndula 5% + cavalinha 5%, 100 mL", "Escoriações, pele senil, dermatite atópica [F]", "≥ 12 anos [F/I]"],
            ["Loção de cavalinha 5% + óleo de semente de uva 5%, 100 g", "Pele seca e senil, dermatite atópica [F]", "≥ 12 anos [F]"],
            ["Solução de calêndula 10%, 100 mL", "Dermatite seborreica do couro cabeludo: 1×/dia por 5–10 dias [F]", "≥ 6 anos [F]"],
            ["Creme de guaco 10%, 60 g", "Reações cutâneas pruriginosas; proteção da pele [F]", "≥ 12 anos [F]"],
            ["Creme de cavalinha 10%, 60 g", "Ressecamento e fissura de calcanhar: 3×/dia, meia à noite [F]", "≥ 12 anos [F]"]
          ]}, nota: "Abaixo de 2 anos, o Memento só não define idade mínima para o óleo de girassol [F]. Na monografia da calêndula as combinações com cavalinha aparecem a partir de 6 anos; na da cavalinha, a partir de 12 [F]."},
          {ir: [["dermatite-atopica", "Dermatite atópica"], ["seborreica", "Dermatite seborreica"], ["prurido", "Prurido generalizado"], ["pele-eczemas", "Eczema disidrótico e de estase"], ["fi-prescrever", "Como prescrever na Farmácia Viva"]]},
          {ref: [M, "remume", "tsrs_derm2023"]}
        ]}
      ]
    }
  }),

  // ───────── 19. Acne
  it({
    id: "fi-acne", nome: "Acne leve: gel de calêndula + barbatimão + copaíba", sistema: "Pele e feridas", risco: "baixo",
    ciap: "S96", cid: "L70.0",
    tags: "acne espinha cravo gel calêndula barbatimão copaíba pele oleosa fitoterápico farmácia viva",
    S: "Lesões de acne há ___, predomínio ___ (comedões/pápulas/pústulas/nódulos). Cicatrizes ___. Uso de cosméticos/anabolizantes/corticoide ___. Ciclos irregulares/hirsutismo ___. Gestação ___.",
    O: "Acne ___ (comedoniana/papulopustulosa leve), em ___. Cicatrizes ___. Nódulos/cistos ___.",
    A: "Acne vulgar leve.",
    P: "- Limpeza 2×/dia com sabonete suave; não espremer.\n- Gel da Farmácia Viva (opcional, evidência muito baixa), em 2 vias; tratamento com evidência conforme o item Acne.",
    rx: [
      FV("Gel de calêndula 4% + barbatimão 3% + copaíba 3%", "USO EXTERNO\n1. Gel de calêndula 4% + barbatimão 3% + copaíba 3% ______ 1 bisnaga de 60 g\n   Lavar o rosto com água e sabonete e aplicar uma camada fina nas lesões 2 a 3 vezes ao dia.", "Memento SUS-Betim 2022: tratamento tópico da acne; ≥ 12 anos (copaíba ≥ 12; calêndula ≥ 6 – o app usa o limite conservador). Contraindicado na gestação e lactação (calêndula e barbatimão), alergia a Asteraceae. Rosa-mosqueta piora a acne (contraindicada em pele oleosa). Certeza muito baixa.")
    ],
    orient: "## O que você tem\n- Acne leve. O tratamento demora de 6 a 12 semanas para mostrar resultado.\n\n## Remédio de planta (Farmácia Viva)\n- Lave o rosto e passe uma camada fina do gel nas espinhas, de 2 a 3 vezes ao dia.\n- Leve a 2ª via da receita à farmácia da unidade.\n\n## Cuidados\n- Lavar o rosto 2 vezes ao dia com sabonete suave; não esfregar.\n- **Não espremer** as espinhas (deixa mancha e cicatriz).\n- Usar protetor solar oil-free; evitar cremes oleosos e óleos no rosto (inclusive rosa-mosqueta).\n\n" + REMEDIO_PLANTA,
    alarme: ["Caroços doloridos e profundos ou cicatrizes", "Acne com menstruação irregular, excesso de pelos ou voz grossa", "Piora muito rápida ou acne depois de começar algum remédio"],
    encaminhar: "Acne nodulocística ou com cicatriz: ver item Acne (dermatologia/isotretinoína).",
    sus: {nacional: "RENAME 2024: nenhum fitoterápico para acne; peróxido de benzoíla e clindamicina tópica no Componente Básico.", betim: "Farmácia Viva (Memento 2022): gel de calêndula + barbatimão + copaíba; gel de calêndula 10%. REMUME: minociclina 100 mg; clindamicina e peróxido de benzoíla tópicos não constam."},
    evid: {resumo: "Não localizei ensaio da combinação calêndula + barbatimão + copaíba na acne. Retinoide tópico, peróxido de benzoíla e antibiótico tópico/oral associado têm a melhor evidência.", certeza: "Muito baixa", fontes: [M, "tsrs_derm2023", "remume"]},
    nv: NV_BASE.slice(),
    guia: {
      resumo: "O gel da Farmácia Viva (**calêndula + barbatimão + copaíba**, ≥ 12 anos) é uma opção gratuita de **evidência muito baixa** [F]. Retinoide tópico e **peróxido de benzoíla** são a base, mas **não estão na REMUME** [F]: o gel serve para acne leve em quem não pode comprar, com reavaliação em 8–12 semanas [I].",
      secoes: [
        {t: "Como decidir", b: [
          {trio: {ideal: "Acne leve: retinoide tópico e/ou peróxido de benzoíla; papulopustulosa moderada: + antibiótico [C].", sus: "REMUME: minociclina 100 mg (moderada) [F]. Farmácia Viva: gel de calêndula + barbatimão + copaíba [F].", ponte: "Acne leve sem condição de comprar: gel da Farmácia Viva por 8–12 semanas; sem melhora ou moderada → item Acne [I]."}},
          {ir: [["acne", "Acne vulgar"], ["fi-prescrever", "Como prescrever na Farmácia Viva"]]},
          {ref: [M, "tsrs_derm2023", "remume"]}
        ]}
      ]
    }
  }),

  // ───────── 20. Dermatite de fralda (≥ 6 anos) e periestoma
  it({
    id: "fi-fralda", nome: "Dermatite de fralda no adulto e na criança ≥ 6 anos, pele periestoma: creme de calêndula + óxido de zinco", sistema: "Pele e feridas", risco: "baixo",
    ciap: "S89", cid: "L22",
    tags: "dermatite de fralda assadura fralda geriátrica incontinência idoso acamado estoma ostomia periestoma calêndula óxido de zinco fitoterápico farmácia viva",
    S: "Vermelhidão/ardor na área da fralda (ou ao redor do estoma) há ___. Incontinência ___. Trocas por dia ___. Diarreia ___. Lesões satélites ___.",
    O: "Eritema em ___, poupa/acomete dobras ___, lesões satélites ___, erosões ___.",
    A: "Dermatite irritativa da área da fralda / periestomal.",
    P: "- Trocas frequentes, limpeza com água, secar bem, barreira a cada troca.\n- Creme de calêndula + óxido de zinco da Farmácia Viva (≥ 6 anos), em 2 vias.\n- Candidíase (dobras e satélites): antifúngico (cetoconazol creme).",
    rx: [
      FV("Creme de calêndula 10% + óxido de zinco (≥ 6 anos)", "USO EXTERNO\n1. Creme de calêndula 10% + óxido de zinco ______ 1 bisnaga de 60 g\n   Após limpar e secar a pele, aplicar uma camada a cada troca de fralda (ou 3 vezes ao dia).", "Memento SUS-Betim 2022: dermatite de fralda ou amoniacal, periestoma e perifístula; adulto e ≥ 6 anos. NÃO é para bebês: calêndula cutânea é contraindicada abaixo de 6 anos no Memento. Gestação/lactação contraindicadas; alergia a Asteraceae. ECR pequenos de calêndula na dermatite de fraldas infantil (Irã): inferior à bentonita e melhor que aloe: certeza muito baixa.")
    ],
    orient: "## Cuidados com a pele\n- Trocar a fralda logo que molhar ou sujar.\n- Limpar com água morna e pano macio ou algodão; **secar bem** sem esfregar.\n- Deixar a pele um tempo sem fralda quando possível.\n\n## Remédio de planta (Farmácia Viva)\n- Passar uma camada do creme a cada troca de fralda, depois de limpar e secar.\n- **Não use em bebês e crianças menores de 6 anos.**\n- Leve a 2ª via da receita à farmácia da unidade.\n\n" + REMEDIO_PLANTA,
    alarme: ["Feridas abertas, sangramento ou pus", "Febre", "Manchas vermelho-vivas nas dobras com pontinhos ao redor (pode ser fungo)", "Ferida em cima de osso (pode ser lesão por pressão)"],
    encaminhar: "Lesão por pressão associada: ver Feridas crônicas e Pessoa acamada. Estoma com complicação: serviço de estomaterapia de referência.",
    sus: {nacional: "RENAME 2024: óxido de zinco (pasta) no Componente Básico; nenhum fitoterápico para dermatite de fralda.", betim: "Farmácia Viva (Memento 2022): creme de calêndula 10% + óxido de zinco (≥ 6 anos); creme de camomila 10% (≥ 12 anos). REMUME: cetoconazol 2% creme; óxido de zinco não consta. Fralda geriátrica: Farmácia Popular (≥ 60 anos ou PcD)."},
    evid: {resumo: "ECR pequenos, iranianos, em lactentes: calêndula melhor que aloe e pior que bentonita. Não localizei estudo em adultos com incontinência. Barreira (óxido de zinco) e trocas frequentes são a base.", certeza: "Muito baixa", fontes: [M, "calendula_fraldas_ecr", "remume"]},
    nv: NV_BASE.slice(),
    guia: {
      resumo: "O **creme de calêndula + óxido de zinco** da Farmácia Viva serve para **adultos com fralda** (incontinência, acamados), **crianças a partir de 6 anos** e **pele periestoma** [F]. **Não é para bebês**: o Memento contraindica calêndula cutânea abaixo de 6 anos [F]; o creme Polawax + girassol só a partir de 2 anos [F]. No bebê, a barreira é a **pasta de óxido de zinco** (RENAME; compra) [F].",
      secoes: [
        {t: "Opções", b: [
          {tab: {h: ["Quem", "Opção"], r: [
            ["Bebê e criança < 6 anos", "Pasta de óxido de zinco (compra); antifúngico se candidíase – ver item Dermatite da área das fraldas [F]"],
            ["Criança ≥ 6 anos e adulto com fralda", "Creme de calêndula + óxido de zinco da Farmácia Viva a cada troca [F]"],
            ["Pele periestoma ou perifístula", "Creme de calêndula + óxido de zinco 3×/dia [F]"]
          ]}},
          {ir: [["dermatite-fraldas", "Dermatite da área das fraldas (bebê)"], ["po-acamado", "Pessoa acamada"], ["incontinencia", "Incontinência urinária"], ["fi-feridas", "Feridas crônicas"], ["fi-prescrever", "Como prescrever na Farmácia Viva"]]},
          {ref: [M, "calendula_fraldas_ecr", "remume"]}
        ]}
      ]
    }
  }),

  // ───────── 21. Picadas e repelente
  it({
    id: "fi-picadas", nome: "Picadas de inseto e repelente da Farmácia Viva", sistema: "Pele e feridas", risco: "baixo",
    ciap: "S12", cid: "T63.4 · W57",
    tags: "picada de inseto pernilongo mosquito muriçoca repelente citronela andiroba copaíba calêndula creme coceira dengue fitoterápico farmácia viva",
    S: "Picadas em ___ há ___. Coceira ___, dor ___, bolhas ___. Reação extensa ou sistêmica ___. Viagem/área com dengue ___.",
    O: "Pápulas eritematosas em ___. Sinais de infecção secundária ___. Reação local extensa ___.",
    A: "Reação local a picada de inseto.",
    P: "- Lavar, compressa fria, unhas curtas; anti-histamínico oral se muito prurido.\n- Creme de copaíba ou calêndula da Farmácia Viva (opcional), em 2 vias.\n- Repelente: preferir produto registrado em área de arbovirose; loção da Farmácia Viva como alternativa (≥ 6 anos).",
    rx: [
      FV("Creme de copaíba 10% (picadas, ≥ 12 anos)", "USO EXTERNO\n1. Creme de copaíba (Copaifera langsdorffii) 10% ______ 1 bisnaga de 60 g\n   Aplicar sobre as picadas 1 a 3 vezes ao dia.", "Memento SUS-Betim 2022: irritação por picada de inseto, cicatrização, coadjuvante em lesões impetiginosas e psoríase; ≥ 12 anos; verificar tolerância. Alternativa ≥ 6 anos: creme de calêndula 10%. Certeza muito baixa."),
      FV("Loção repelente Farmácia Viva (≥ 6 anos)", "USO EXTERNO\n1. Loção repelente Farmácia Viva ______ 1 frasco de 200 mL\n   Antes do primeiro uso, fazer a prova de toque (aplicar um pouco no antebraço e esperar 1 hora). Aplicar na pele exposta 4 a 6 vezes ao dia; aumentar a frequência em locais com muitos insetos.", "Memento 2022: prescrever como 'Loção Repelente Farmácia Viva' (citronela 4% + andiroba 3% + copaíba 3% ou citronela 5% + copaíba 5%, conforme matéria-prima); ≥ 6 anos. Óleo de citronela tem proteção de curta duração [C]; em surto de arbovirose, repelente registrado (icaridina, DEET, IR3535) é preferível [C].")
    ],
    orient: "## Picadas\n- Lave com água e sabão e faça compressa fria. Não coce; mantenha as unhas curtas.\n- Passe o creme da Farmácia Viva de 1 a 3 vezes ao dia.\n\n## Repelente da Farmácia Viva\n- Na primeira vez, passe um pouco no antebraço e espere 1 hora: se não der alergia, pode usar.\n- Passe de 4 a 6 vezes ao dia na pele que fica descoberta. **Ele dura pouco:** reaplique mais vezes onde há muito mosquito.\n- Não é para crianças menores de 6 anos.\n- Em época de dengue, o repelente de farmácia com icaridina ou DEET protege por mais tempo.\n- Leve a 2ª via da receita à farmácia da unidade.\n\n" + REMEDIO_PLANTA,
    alarme: ["Falta de ar, inchaço no rosto, na boca ou no corpo todo depois da picada", "Vermelhidão quente que se espalha, pus ou febre", "Picada de escorpião, aranha ou cobra"],
    encaminhar: "Anafilaxia: urgência. Acidente por animal peçonhento: itens específicos.",
    sus: {nacional: "RENAME 2024: nenhum repelente ou fitoterápico para picadas.", betim: "Farmácia Viva (Memento 2022): loção repelente (citronela + copaíba ± andiroba, ≥ 6 anos), creme de copaíba 10% (≥ 12 anos), creme de calêndula 10% (≥ 6 anos). REMUME: loratadina 10 mg e 1 mg/mL."},
    evid: {resumo: "Não localizei estudo das formulações da Farmácia Viva. Óleos de citronela protegem por pouco tempo em comparação com repelentes registrados (icaridina, DEET, IR3535), que são a escolha em surtos de dengue. Para copaíba e calêndula em picadas, a indicação é tradicional.", certeza: "Muito baixa", fontes: [M, "remume"]},
    nv: NV_BASE.concat(["Tempo de proteção da loção repelente da Farmácia Viva (não informado no Memento)."]),
    guia: {
      resumo: "A Farmácia Viva tem **loção repelente** (citronela + copaíba ± andiroba, **≥ 6 anos**, com prova de toque) e **cremes de copaíba** (≥ 12 anos) e **calêndula** (≥ 6 anos) para picadas [F]. A citronela tem **proteção curta** [C]: em época de **dengue**, oriente repelente **registrado** (icaridina, DEET, IR3535) quando possível e use a loção da Farmácia Viva como alternativa, reaplicando com frequência [C/I].",
      secoes: [
        {t: "Opções", b: [
          {ir: [["picada-inseto", "Picada de inseto"], ["pu-sol-repelente", "Proteção solar e repelente por idade"], ["dengue-a", "Dengue"], ["fi-prescrever", "Como prescrever na Farmácia Viva"]]},
          {ref: [M, "remume"]}
        ]}
      ]
    }
  }),

  // ───────── 22. Fissura mamilar
  it({
    id: "fi-fissura-mamilo", nome: "Fissura mamilar na amamentação: pega e cuidados (calêndula da Farmácia Viva não é usada na lactação)", sistema: "Pele e feridas", risco: "baixo",
    ciap: "W95", cid: "O92.1",
    tags: "fissura mamilar rachadura no bico do peito mamilo dor ao amamentar amamentação calêndula solução fitoterápico farmácia viva",
    S: "Dor e fissura em mamilo ___ há ___ dias. Pega/posição: ___. Febre, área endurecida/vermelha na mama ___. Frênulo do bebê ___.",
    O: "Fissura em mamilo ___, ___ (sangramento/crosta). Mama sem sinais de mastite ___. Observação da mamada: pega ___.",
    A: "Fissura mamilar por pega inadequada, sem mastite.",
    P: "- Correção da pega e da posição (principal medida); leite materno no mamilo após a mamada; secar ao ar.\n- Sem fitoterápico: a solução de calêndula 5% do Memento não é usada na lactação (contraindicada pelo Formulário ANVISA 2026).\n- Retorno em 48–72 h para reavaliar a mamada.",
    rx: [],
    orient: "## O que você tem\n- Rachadura no bico do peito, quase sempre por causa da **pega** do bebê. Corrigindo a pega, a dor melhora em poucos dias.\n\n## Como o bebê deve pegar\n- Boca bem aberta, lábios virados para fora, queixo encostado no peito, pegando boa parte da aréola (a parte escura), não só o bico.\n- Barriga do bebê virada para a sua barriga.\n\n## Cuidados\n- Comece a mamada pelo peito que dói menos.\n- Depois de mamar, passe umas gotas do seu leite no bico e deixe secar ao ar.\n- Não passe pomada, óleo ou chá no bico do peito sem orientação da equipe.\n\n" + REMEDIO_PLANTA,
    alarme: ["Febre, calafrio ou parte do peito vermelha, quente e dura", "Pus saindo do bico", "Dor que não melhora mesmo com a pega corrigida", "Bebê com pouco xixi ou perdendo peso"],
    encaminhar: "Mastite ou abscesso: ver item Mastite. Suspeita de anquiloglossia: avaliação do frênulo.",
    sus: {nacional: "RENAME 2024: nenhum fitoterápico para fissura mamilar.", betim: "Farmácia Viva (Memento 2022): o Memento indica solução de calêndula 5% para fissura, mas o app não a usa na lactação: a calêndula é contraindicada na lactação pelo Formulário ANVISA 2026 e pela própria monografia do Memento (decisão da usuária, 27/10/2026)."},
    evid: {resumo: "Não localizei revisão sistemática de calêndula na fissura mamilar. A correção da pega e da posição é a intervenção com maior efeito; leite materno no mamilo é medida de baixo custo. O Memento indica a solução de calêndula 5%, mas a calêndula é contraindicada na lactação na monografia do próprio Memento e no Formulário ANVISA 2026 (falta de dados de segurança); por isso o app não a prescreve.", certeza: "Muito baixa", fontes: [M, "remume", "pab_mulher2016"]},
    nv: NV_BASE.slice(),
    guia: {
      resumo: "O tratamento da fissura é **corrigir a pega** [C]; leite materno no mamilo após a mamada é medida de baixo custo [C]. O Memento oferece **solução de calêndula 5%**, mas a calêndula é **contraindicada na lactação** na monografia do próprio Memento e no **Formulário ANVISA 2026** [F]. Por decisão da usuária (27/10/2026), o app **não prescreve** fitoterápico na fissura mamilar.",
      secoes: [
        {t: "Como decidir", b: [
          {ir: [["amamentacao", "Dor ao amamentar"], ["pu-amamentacao", "Amamentação: pega e problemas"], ["mastite", "Mastite"], ["fi-prescrever", "Como prescrever na Farmácia Viva"]]},
          {ref: [M, "remume", "pab_mulher2016"]}
        ]}
      ]
    }
  }),

  // ───────── 23. Queixas urinárias menores (cavalinha)
  it({
    id: "fi-urinario", nome: "Queixas urinárias menores e retenção de líquido: cavalinha (não trata infecção urinária)", sistema: "Urinário", risco: "baixo",
    ciap: "U99 · K07", cid: "R39.8 · R60.0",
    tags: "cavalinha equisetum diurético retenção de líquido inchaço urina xixi infecção urinária chá fitoterápico farmácia viva",
    alerta: "Cavalinha não trata infecção urinária: disúria, febre, dor lombar ou hematúria seguem o item específico. Edema precisa de causa investigada (coração, rim, fígado, veias, medicamentos).",
    S: "Queixa urinária ___ / inchaço ___ há ___. Disúria, febre, dor lombar, hematúria ___. Causa do edema avaliada: ___.\nIC, DRC, hepatopatia, obstrução urinária: ___. Diuréticos, digoxina, lítio, outros cardiovasculares: ___. Gastrite/úlcera: ___. HAS em tratamento: ___. Gestação/amamentação: ___.",
    O: "PA ___ mmHg. Edema ___. Punho-percussão lombar ___. EAS/fita: ___.",
    A: "Queixa urinária menor sem infecção / retenção hídrica sem causa grave identificada.",
    P: "- Afastar ITU e causas de edema (ver itens específicos).\n- Cavalinha da Farmácia Viva (opcional), por 2–4 semanas, com ingesta de líquidos adequada, em 2 vias.",
    rx: [
      FV("Cavalinha – chá (sachê) ou tintura", "USO ORAL\n1. Equisetum arvense (cavalinha) droga vegetal – sachê ______ 1 pacote\n   Preparar o chá: 1 a 4 g em 150 mL (1 xícara) de água; deixar em repouso 5 a 15 minutos e coar. Tomar 1 xícara 3 a 4 vezes ao dia, por 2 a 4 semanas.\n   (Alternativa adulto: tintura de cavalinha 50 mL – 35 a 40 gotas em 50 mL de água, 3 vezes ao dia, bebendo bastante líquido.)", "Memento SUS-Betim 2022: adjuvante em queixas menores do trato urinário (após descartar situações graves), edema por retenção hídrica; chá ≥ 12 anos, tintura adulto. CONTRAINDICADA: doença cardíaca ou renal grave, obstrução urinária, DRC com fármacos que alteram potássio, hipertensos em uso de fármacos cardiovasculares (sobretudo diuréticos), gastrite/úlcera, gestação, lactação. Interações: diuréticos, digoxina (hipocalemia); inibe CYP1A2 (teofilina, cafeína, clozapina, haloperidol, propranolol, verapamil, varfarina-R). Uso crônico: hipocalemia, queda de vitamina B1. ECR: efeito diurético ≈ HCTZ em homens sadios (extrato seco padronizado): certeza baixa.")
    ],
    orient: "## Sobre a cavalinha\n- Ela faz urinar mais. **Não trata infecção urinária** e não substitui remédio de pressão.\n- Prepare o chá, deixe descansar de 5 a 15 minutos e coe. Tome de 3 a 4 xícaras por dia, por 2 a 4 semanas.\n- Beba água normalmente enquanto usar.\n- Não use se tiver problema de coração ou de rim, se tomar remédio para urinar (diurético) ou digoxina, ou se tiver gastrite.\n- Leve a 2ª via da receita à farmácia da unidade.\n\n" + REMEDIO_PLANTA,
    alarme: ["Ardência para urinar com febre ou dor nas costas", "Sangue na urina", "Inchaço que aumenta, falta de ar ou cansaço para deitar", "Fraqueza, câimbras ou palpitação (pode ser falta de potássio)", "Urinar muito pouco"],
    encaminhar: "ITU, hematúria, edema com causa a investigar: itens específicos (Cistite, Hematúria, IC, DRC).",
    sus: {nacional: "RENAME 2024: cavalinha não está entre os 12 fitoterápicos nacionais.", betim: "Farmácia Viva (Memento 2022): sachê e tintura de cavalinha."},
    evid: {resumo: "Em um ECR brasileiro cruzado com 36 homens sadios, o extrato seco padronizado de cavalinha (900 mg/dia) teve efeito diurético equivalente à hidroclorotiazida 25 mg. Outro ECR (58 pacientes com HAS estágio 1) mostrou redução de PA semelhante à da HCTZ em 3 meses. O Memento, porém, contraindica a cavalinha em hipertensos sob tratamento cardiovascular; o app não a propõe para HAS. Não há evidência de benefício na infecção urinária.", certeza: "Baixa (efeito diurético, extrato padronizado)", fontes: [M, "carneiro2014_cavalinha", "carneiro2022_cavalinha"]},
    nv: NV_BASE.slice(),
    guia: {
      resumo: "A **cavalinha** é diurética: ECR brasileiros com extrato padronizado mostraram diurese e redução de PA **semelhantes à HCTZ** [F]. O Memento a indica como **adjuvante em queixas urinárias menores**, depois de **afastar causas graves** [F], e a **contraindica em cardiopatas, nefropatas e hipertensos em uso de diurético/fármaco cardiovascular** [F]. Por isso o app **não a sugere para HAS** e lembra que ela **não trata infecção urinária** [I].",
      secoes: [
        {t: "Como decidir", b: [
          {tab: {h: ["Fonte", "Ano", "Cavalinha na HAS", "Contexto"], r: [
            ["Memento SUS-Betim", "2022", "Contraindicada em hipertensos sob fármacos cardiovasculares [F]", "Risco de efeito aditivo e hipocalemia"],
            ["Carneiro et al. (ECR)", "2022", "PA −12,6/−8,1 mmHg ≈ HCTZ em HAS estágio 1, 3 meses [F]", "Extrato seco padronizado; 58 pacientes"]
          ]}, nota: "Conflito aparente: o ECR estudou cavalinha **em vez** de anti-hipertensivo, com extrato padronizado; o Memento proíbe **somar** a planta ao tratamento. Sem desfecho clínico, o app mantém anti-hipertensivo convencional [I]."},
          {ir: [["cistite", "Cistite"], ["hematuria", "Hematúria"], ["cr-has", "HAS"], ["fi-prescrever", "Como prescrever na Farmácia Viva"]]},
          {ref: [M, "carneiro2014_cavalinha", "carneiro2022_cavalinha"]}
        ]}
      ]
    }
  })
  );

  // ───────── v74: conferência no Formulário de Fitoterápicos da Farmacopeia Brasileira, 3ª ed. (ANVISA, 2026)
  // Texto integral lido em 27/10/2026 (RDC nº 1.024/2026; 85 monografias). Para cada item: nota anexada às receitas (as cópias nos itens
  // ligados herdam a nota, porque a ligação é feita depois) + seção "Formulário ANVISA 2026" no guia + fonte + registro de mudança.
  const FF = "formulario_fito_anvisa2026";
  const MUD74 = "v74 (27/10/2026): ";
  const FFB = {
    "fi-ansiedade-sono": {
      nv: ["Peso de folhas por sachê de Lippia alba da Farmácia Viva (para orientar 0,4–0,6 g por xícara)."],
      rx: {
        0: "FFFB3 2026 (FT056): só traz Passiflora incarnata – a Farmácia Viva usa P. edulis/alata (extrapolação de espécie). Tintura 1:8 em álcool 45%: 2 mL em 50 mL de água até 3 vezes ao dia; uso adulto; contraindicada na gestação, lactação e < 12 anos; não usar cronicamente nem com sedativos; procurar o médico se não melhorar em 2 semanas [F].",
        1: "FFFB3 2026: a associação melissa + passiflora não consta. Melissa isolada (FT048): tintura 1:5 em álcool 45–53%, 2 a 6 mL 1 a 3 vezes ao dia (os 30–40 gotas do Memento, cerca de 1–1,3 mL, ficam abaixo); contraindicada no hipotireoidismo, glaucoma e HPB [F].",
        2: "FFFB3 2026 (FT044): chá com 0,4 a 0,6 g de folha e flor em 150 mL, 2 a 3 vezes ao dia – o Memento usa 1 a 3 g (até 5 vezes mais). Uso adulto; evitar na gastrite/úlcera e na hipotensão; potencializa sedativos; pode aumentar a toxicidade do paracetamol; doses altas causam irritação gástrica, bradicardia e hipotensão [F]. O app adotou a dose do Formulário (decisão da usuária, 27/10/2026); meia colher de chá ≈ 0,5 g pela tabela de medidas do Memento (colher de chá = 1 g) [F]."
      },
      tab: [
        ["Passiflora", "Só P. incarnata; tintura 2 mL até 3×/dia; contraindicada < 12 anos, gestação e lactação; não usar cronicamente [F]", "P. edulis/alata; 30–40 gotas 1–3×/dia; adulto", "Espécie diferente (extrapolação); dose oficial maior"],
        ["Melissa", "Tintura 2–6 mL 1–3×/dia; hipotireoidismo, glaucoma e HPB contraindicam [F]", "30–40 gotas 1–3×/dia (só ou com passiflora)", "Dose do Memento abaixo da oficial; associação sem monografia"],
        ["Lippia alba", "Só chá: 0,4–0,6 g em 150 mL, 2–3×/dia; adulto; paracetamol e sedativos [F]", "Chá com 1–3 g; tintura 30 gotas 1–3×/dia", "Chá do Memento até 5× a dose oficial – **app adotou 0,4–0,6 g**; tintura sem monografia"],
        ["Capim-limão", "Só chá: 1–3 g em 150 mL, 3–4×/dia; adulto; contraindicado em cardiopatia, nefropatia, hepatopatia e outras doenças crônicas; não associar a depressores do SNC [F]", "Chá 1–3 g; tintura 30–40 gotas", "Chá igual; tintura sem monografia; contraindicações mais amplas"]
      ],
      nota: "O Formulário define as formulações oficiais das Farmácias Vivas, mas não testa eficácia: a certeza da evidência deste item não muda (muito baixa) [F]."
    },
    "fi-depressao": {
      nota: "O FFFB3 2026 **não tem monografia de hipérico**: para a tintura, a referência continua sendo o Memento de Betim, e a evidência vem de extratos padronizados (extrapolação) [F]. Alecrim (FT068): o Formulário só o indica para dispepsia e espasmos digestivos leves (tintura 3 a 8,5 mL/dia; contraindicado < 12 anos, gestação, lactação; reduz o limiar convulsivo; pode alterar o sono se tomado à noite) – a indicação do Memento na depressão leve não consta [F]."
    },
    "fi-dispepsia": {
      rx: {
        0: "FFFB3 2026 (FT052, versão de 2023): **não há tintura de espinheira-santa** – só chá (1–2 g ou 3 g de folha em 150 mL, 1 hora antes das refeições) e cápsula de extrato seco. Uso adulto; contraindicada < 18 anos, na gestação e na lactação (reduz o leite); até 6 meses seguidos com pausa de 30 dias; evitar em polimedicados (inibe CYP e P-gp); interage com anabolizantes, metotrexato, amiodarona, cetoconazol e imunossupressores [F].",
        1: "FFFB3 2026 (FT023): **não há tintura de alcachofra** – chá (1,5 g 4×/dia ou 3 g até 2×/dia) e cápsula de extrato seco. Uso ≥ 12 anos (tintura: < 18 anos contraindicado); contraindicada com cálculo ou obstrução biliar, colangite e hepatopatia; não usar com anticoagulante; pode reduzir o efeito do AAS e da varfarina; com diurético na HAS ou cardiopatia, só sob supervisão; procurar o médico se passar de 2 semanas [F].",
        2: "FFFB3 2026 (FT048): tintura 2 a 6 mL 1 a 3 vezes ao dia; contraindicada no hipotireoidismo, glaucoma e HPB [F]."
      },
      tab: [
        ["Espinheira-santa", "Chá e cápsula; **sem tintura**; adulto; até 6 meses [F]", "Tintura 30–40 gotas 2×/dia, 1 h antes das refeições", "Tintura fora das formulações oficiais"],
        ["Alcachofra", "Chá e cápsula; **sem tintura**; ≥ 12 anos; não usar com anticoagulante [F]", "Tintura 30–40 gotas 1–3×/dia; adulto", "Tintura fora das formulações oficiais"],
        ["Melissa", "Tintura 2–6 mL 1–3×/dia [F]", "30–40 gotas 1–3×/dia", "Dose do Memento abaixo da oficial"]
      ],
      nota: "As duas plantas da RENAME deste item (espinheira-santa e alcachofra) não têm tintura no Formulário: a RENAME as define por teor de marcador na dose diária, e a tintura da Farmácia Viva não informa esse teor [F]."
    },
    "fi-constipacao": {
      nota: "O FFFB3 2026 **não tem monografia de sene**; a referência da tintura segue sendo o Memento de Betim [F]. A RENAME 2024 traz cáscara-sagrada e plantago como fitoterápicos laxantes (não oferecidos pela Farmácia Viva) [F]."
    },
    "fi-colicas": {
      nv: ["Peso de folhas por sachê de Lippia alba da Farmácia Viva (para orientar 0,4–0,6 g por xícara)."],
      rx: {
        0: "FFFB3 2026 (FT022): mesma dose do Memento (1 a 3 g em 150 mL, 3 a 4 vezes ao dia); uso adulto; contraindicado em cardiopatia, nefropatia, hepatopatia e outras doenças crônicas; não associar a depressores do SNC; doses altas causam síncope e sedação; o uso habitual pode estar relacionado a HPB [F].",
        1: "FFFB3 2026 (FT044): chá com 0,4 a 0,6 g em 150 mL (o Memento usa 1 a 3 g; o app adotou a dose do Formulário); evitar na gastrite/úlcera e na hipotensão; interação com paracetamol e sedativos [F]."
      },
      nota: "Alecrim (FT068): o Formulário indica o chá e o extrato fluido para desordens espasmódicas leves do trato digestivo; não há indicação para cólica menstrual [F]. Capim-limão e Lippia alba: o Formulário só traz chá, sem tintura [F]."
    },
    "fi-tosse": {
      rx: {
        0: "FFFB3 2026: a Farmácia Viva usa Mikania glomerata, cuja monografia (FT050) só traz chá e tintura (1 a 3 mL 3×/dia), ambos de **uso adulto** (contraindicado < 18 anos). Xarope oficial só existe para M. laevigata (FT051: 10 mL de tintura a 20% em 100 mL de xarope; 15 mL 3×/dia; ≥ 12 anos; 7 dias nas afecções agudas). Para as duas espécies: até 15 dias seguidos, com pausa de 5 dias; não usar com AINE nem anticoagulante; evitar com antibiótico (interação potencial) [F].",
        1: "FFFB3 2026: a associação guaco + maracujá não consta. Guaco: ver o xarope de guaco; passiflora (P. incarnata, FT056): contraindicada < 12 anos e com sedativos [F]."
      },
      tab: [
        ["Guaco (M. glomerata)", "Chá e tintura (1–3 mL 3×/dia); **uso adulto** [F]", "Xarope 10%: adulto 15 mL 8/8 h; ≥ 12 anos 5 mL 8/8 h", "**App adotou só adulto** (decisão da usuária, 27/10/2026)"],
        ["Guaco (M. laevigata)", "Xarope 15 mL 3×/dia; ≥ 12 anos; 7 dias no quadro agudo [F]", "—", "Faixa ≥ 12 anos só para esta espécie"],
        ["Ambas", "Até 15 dias seguidos (pausa de 5); não usar com AINE ou anticoagulante; evitar com antibiótico [F]", "Até 15 dias; AINE e anticoagulante", "Acrescenta antibiótico"]
      ],
      nota: "Decisão da usuária (27/10/2026): seguir o Formulário e usar o xarope de guaco só em adultos. Entre 12 e 17 anos: hidratação, mel, lavagem nasal [C]."
    },
    "fi-resfriado": {
      rx: {
        0: "FFFB3 2026 (FT026, raiz de E. purpurea): tintura 1:5 em álcool 55%, 3 mL em 50 mL 3×/dia (os 30–40 gotas do Memento, cerca de 1–1,3 mL, ficam abaixo). Procurar o médico se o resfriado passar de 10 dias ou houver febre alta; até 8 semanas, em ciclos; não usar em doença autoimune, tuberculose, HIV, imunossupressão ou doença hematológica dos leucócitos; pode piorar o controle do diabetes; evitar com hepatotóxicos; tintura contraindicada < 18 anos [F]."
      },
      nota: "O Formulário traz a indicação de prevenção e alívio do resfriado (uso tradicional), mas isso não muda a revisão Cochrane 2014, que não mostrou benefício no tratamento [F]."
    },
    "fi-boca-garganta": {
      rx: {
        0: "FFFB3 2026 (FT047): uso oromucoso só ≥ 12 anos (igual ao Memento); a orabase não consta (há bochecho ou gargarejo com chá de 1 a 5 g em 100 mL, 3×/dia); há relato de reação alérgica grave após contato de mucosa com preparações de camomila [F].",
        1: "FFFB3 2026: a orabase não consta. Tanchagem (Plantago major, FT063): uso adulto; bochecho ou gargarejo com 2 a 4 mL da tintura em 50 mL; não usar na hipotensão; não engolir; dar 3 horas de intervalo de outros remédios. Barbatimão (FT075): pomada e bochecho com decocto; contraindicado na gestação e lactação [F].",
        2: "FFFB3 2026: o spray não consta. Romã (FT067): uso adulto; bochecho ou gargarejo com 15 mL da tintura em 150 mL, 3×/dia; até 15 dias seguidos, com pausa de 7 [F]."
      },
      nota: "As três formulações de boca da Farmácia Viva (orabases e spray) não têm fórmula no Formulário; as plantas têm, como chá ou tintura para bochecho [F]."
    },
    "fi-herpes-labial": {
      rx: {
        0: "FFFB3 2026 (FT016): guaçatonga só tem chá oral para dispepsia (uso adulto); o gel para herpes labial não consta. Antagonista da vitamina K: uso prolongado pode causar sangramento e potencializa anticoagulante [F].",
        1: "FFFB3 2026: a formulação não consta; calêndula cutânea ≥ 6 anos e contraindicada na gestação e lactação (FT015) [F]."
      },
      nota: "Nenhuma das duas formulações da Farmácia Viva para os lábios tem fórmula ou indicação no Formulário [F]."
    },
    "fi-contusao": {
      rx: {
        0: "FFFB3 2026 (FT012): gel ou pomada (tintura 20–25 mL em 100 g) 2 a 3×/dia; ≥ 12 anos; só pele íntegra; nunca por via oral; procurar o médico se passar de 3 a 4 dias (o Memento permite até 7); uso prolongado pode causar eczema [F].",
        1: "FFFB3 2026 (FT004): gel ou pomada com tintura da semente (20 mL em 100 g) até 3×/dia; para contusão, ≥ 12 anos; procurar o médico se não melhorar em 5 dias; não usar em ferida aberta, mucosa ou perto dos olhos [F]."
      },
      nota: "Arnica e castanha-da-índia tópicas têm indicação oficial para contusão, com prazos de reavaliação mais curtos que os do Memento (3–4 dias e 5 dias) [F]."
    },
    "fi-dor-articular": {
      rx: {
        0: "FFFB3 2026 (FT038): tintura 1:5 em álcool 25%, 0,5 a 1 mL em 50 mL 3×/dia, máximo 3 mL/dia – equivalente ao Memento (15–30 gotas; máximo 90 gotas = 3 mL). Uso adulto; até 4 semanas na dor articular; contraindicada na úlcera gástrica ou duodenal, doença cardiovascular, gestação, lactação e < 18 anos; cálculo biliar: só após avaliação médica; dor com edema, vermelhidão ou febre exige exame; púrpura relatada com varfarina [F]."
      },
      nota: "Dose, duração e contraindicações da tintura de garra-do-diabo do Memento coincidem com o Formulário [F]."
    },
    "fi-pernas-pesadas": {
      rx: {
        0: "FFFB3 2026 (FT003 e FT004): **não há tintura oral de castanha-da-índia** – só cápsula de extrato seco da semente (99 mg 2×/dia; 198 mg/dia) ou de casca (275 mg 3 a 6×/dia), uso adulto. Não usar com anticoagulante nem com fármacos nefrotóxicos (gentamicina); procurar o médico se passar de 2 semanas [F].",
        1: "FFFB3 2026 (FT004): gel ou pomada com tintura da semente; para distúrbio venoso leve, **uso adulto** (≥ 12 anos só na contusão); aplicar de baixo para cima; não usar em ferida aberta [F]."
      },
      tab: [
        ["Castanha-da-índia oral", "Só cápsula de extrato seco (semente 198 mg/dia ou casca) [F]", "Tintura 30–40 gotas 3×/dia", "Tintura oral fora das formulações oficiais; os ECR usaram extrato padronizado"],
        ["Castanha-da-índia tópica", "Gel/pomada: IVC só adulto [F]", "Creme 10%: ≥ 12 anos", "Faixa etária mais restrita no Formulário"],
        ["Arnica (gel para IVC)", "Indicação só para contusão, entorse e dor muscular [F]", "Gel 10% para insuficiência venosa", "Indicação do Memento não consta"]
      ],
      nota: "Inferência clínica: na IVC, o produto com evidência é o extrato padronizado oral, que o SUS de Betim não oferece; a tintura e o creme da Farmácia Viva ficam como opção de baixa certeza [I]."
    },
    "fi-enxaqueca": {
      rx: {
        0: "FFFB3 2026 (FT077): tintura 1:5 em álcool 25%, 0,25 a 1 mL em 50 mL 1×/dia (os 30 gotas do Memento, cerca de 1 mL, ficam no teto). Uso adulto; iniciar só quando a enxaqueca não responde à medicação convencional e após excluir causas graves; efeito em 4 a 6 semanas; reavaliar em 2 meses; suspender aos poucos; não associar AAS ou varfarina; pode alterar o ciclo menstrual [F]."
      },
      nota: "O Formulário reforça que o tanaceto é opção de 2ª linha (enxaqueca refratária à medicação convencional) [F]."
    },
    "fi-zumbido-tontura": {
      nota: "O FFFB3 2026 **não tem monografia de ginkgo**; a tintura segue apenas o Memento de Betim [F]."
    },
    "fi-feridas": {
      rx: {
        2: "FFFB3 2026 (FT075): barbatimão tem fórmula oficial de pomada (extrato seco das cascas), 1 a 2×/dia após higienização, como cicatrizante e antisséptico da pele e mucosas; contraindicado na gestação e lactação; não misturar com plantas ricas em alcaloides [F]."
      },
      nota: "Papaína, óleo de girassol, rosa-mosqueta e copaíba **não têm monografia** no FFFB3 2026; para esses produtos a referência é só o Memento de Betim (e o protocolo de feridas da enfermagem, se houver) [F]."
    },
    "fi-queimadura": {
      rx: {
        0: "FFFB3 2026 (FT015): cremes de calêndula para queimadura solar e ferimentos leves, 2 a 4×/dia; ≥ 6 anos; contraindicada na gestação e lactação; procurar o médico se não melhorar em 1 semana ou houver sinal de infecção [F].",
        1: "FFFB3 2026 (FT047): uso cutâneo ≥ 12 anos; não usar em lesões profundas ou extensas; uso na gestação e lactação permitido (higienizar o mamilo antes de amamentar) [F]."
      },
      nota: "Faixas etárias e contraindicações do Memento coincidem com o Formulário para calêndula e camomila tópicas [F]."
    },
    "fi-pele-seca": {
      rx: {
        1: "FFFB3 2026: a loção não consta; calêndula cutânea ≥ 6 anos (FT015); cavalinha tópica (decocto, FT027) só para pequenas lesões superficiais e pode causar rash e edema facial [F].",
        2: "FFFB3 2026 (FT015): calêndula ≥ 6 anos, contraindicada na gestação e lactação; a indicação de dermatite seborreica não consta (só inflamações leves da pele e ferimentos) [F]."
      },
      nota: "Polawax + girassol e óleo de girassol não têm monografia no Formulário [F]."
    },
    "fi-acne": {
      rx: {
        0: "FFFB3 2026: a formulação não consta; calêndula cutânea ≥ 6 anos (FT015) e barbatimão em pomada (FT075); copaíba sem monografia [F]."
      },
      nota: "A única preparação oficinal do Formulário com indicação de acne leve é a cápsula de extrato da raiz de equinácea (FT026), que a Farmácia Viva não oferece [F]."
    },
    "fi-fralda": {
      rx: {
        0: "FFFB3 2026 (FT015): calêndula cutânea contraindicada < 6 anos – confirma que o creme não serve para bebês [F]."
      },
      nota: "O Formulário confirma o limite de 6 anos para a calêndula cutânea [F]."
    },
    "fi-picadas": {
      nota: "Copaíba e a loção repelente (citronela, andiroba) **não têm monografia** no FFFB3 2026 [F]. A arnica tem indicação oficial de compressa com chá (2 g em 100 mL, 2 a 3×/dia) para erupções por picada de inseto, ≥ 12 anos, só em pele íntegra (FT012) [F]."
    },
    "fi-fissura-mamilo": {
      nota: "FFFB3 2026 (FT015): calêndula **contraindicada na gestação e na lactação** por falta de dados de segurança [F]. A camomila tópica (FT047) é a única com uso na lactação permitido, higienizando o mamilo antes da mamada, mas não tem indicação de fissura [F]. Decisão da usuária (27/10/2026): o app retirou a receita de calêndula dos itens de amamentação."
    },
    "fi-urinario": {
      rx: {
        0: "FFFB3 2026 (FT027): chá na mesma dose do Memento (1 a 4 g em 150 mL, 3 a 4×/dia; máximo 3 a 12 g/dia), ≥ 12 anos; não há tintura (só extrato fluido, 1 a 4 mL 3×/dia, adulto). Procurar o médico se passar de 1 semana ou houver febre, disúria, cólica ou hematúria; uso típico de 2 a 4 semanas; não recomendado em doença cardíaca ou renal grave e obstrução urinária; não associar diurético; hipocalemia e falta de tiamina no uso prolongado; interação com digitálicos; inibe CYP1A2 [F]."
      },
      nota: "O Formulário exige teste contra adulteração por Equisetum palustre na matéria-prima – controle de qualidade da Farmácia Viva, não do prescritor [F]."
    }
  };
  const addSecFF = (c, cfg) => {
    const b = [];
    if (cfg.tab) b.push({tab: {h: ["Planta", "Formulário ANVISA 2026 (3ª ed.)", "Memento SUS-Betim 2022", "O que muda"], r: cfg.tab}});
    if (cfg.nota) b.push({nota: cfg.nota});
    b.push({ref: [FF, M]});
    c.guia = {...c.guia, secoes: [...(c.guia.secoes || []), {t: "Conferência no Formulário ANVISA 2026", b}]};
  };
  Object.entries(FFB).forEach(([id, cfg]) => {
    const c = CONDICOES.find(x => x.id === id); if (!c) return;
    if (cfg.rx) c.rx = (c.rx || []).map((r, i) => cfg.rx[i] ? {...r, nota: (r.nota || "").replace(/\s*$/, "") + " " + cfg.rx[i]} : r);
    if (c.guia) addSecFF(c, cfg);
    if (cfg.nv) c.nv = [...(c.nv || []), ...cfg.nv];
    if (c.evid) c.evid = {...c.evid, fontes: [...new Set([...(c.evid.fontes || []), FF])]};
    c.mudancas = [...(c.mudancas || []), MUD74 + "conferido no Formulário de Fitoterápicos da Farmacopeia Brasileira, 3ª ed. (ANVISA, 2026): formulações, doses em mL, faixas etárias e contraindicações ao lado das do Memento."];
  });
  // v75: decisões da usuária (27/10/2026) sobre as divergências Memento × Formulário ANVISA 2026
  const MUD75 = "v75 (27/10/2026): ";
  const DEC75 = {
    "fi-tosse": "xaropes de guaco só para adultos (Formulário ANVISA 2026: Mikania glomerata de uso adulto), por decisão da usuária.",
    "fi-ansiedade-sono": "chá de Lippia alba com 0,4–0,6 g por xícara (dose do Formulário ANVISA 2026), por decisão da usuária.",
    "fi-colicas": "chá de Lippia alba com 0,4–0,6 g por xícara (dose do Formulário ANVISA 2026), por decisão da usuária.",
    "fi-fissura-mamilo": "receita de calêndula 5% retirada (contraindicada na lactação pelo Formulário ANVISA 2026), por decisão da usuária.",
    "fi-prescrever": "decisões sobre guaco (só adulto), Lippia alba (0,4–0,6 g) e calêndula na lactação (não usar); telefones do CIATox/MG atualizados pela médica."
  };
  Object.entries(DEC75).forEach(([id, t]) => { const c = CONDICOES.find(x => x.id === id); if (c) c.mudancas = [...(c.mudancas || []), MUD75 + t]; });
  { const c = CONDICOES.find(x => x.id === "fi-prescrever"); if (c) c.mudancas = [...(c.mudancas || []), MUD74 + "seção 'Formulário ANVISA 2026 × Memento de Betim' (tabela por planta, gotas × mL, plantas sem monografia) e acréscimos de interações do Formulário; Formulário aberto e conferido."]; }

  // ───────── Ligação com os itens existentes: opção da Farmácia Viva (com a certeza) e link para o item do módulo
  const get = id => CONDICOES.find(x => x.id === id);
  const fi = id => get(id);
  const rxDe = (fid, i) => { const r = (fi(fid).rx || [])[i]; return r ? JSON.parse(JSON.stringify(r)) : null; };
  // Certeza por receita quando difere da certeza geral da ligação (fid → índice → certeza)
  const CERT_RX = {
    "fi-dispepsia": ["muito baixa", "baixa", "muito baixa"],
    "fi-pernas-pesadas": ["moderada para extrato padronizado; baixa para a tintura", "muito baixa (uso tópico)"],
    "fi-contusao": ["baixa (indireta)", "muito baixa"],
    "fi-pele-seca": ["muito baixa para a planta; o emoliente diário é o que importa", "muito baixa", "muito baixa"]
  };
  const LIGA = [
    // [item existente, item do módulo, índices das receitas a copiar, certeza, texto da linha Betim]
    ["insonia", "fi-ansiedade-sono", [0, 2], "muito baixa", "passiflora, melissa + passiflora e Lippia alba"],
    ["tag", "fi-ansiedade-sono", [0], "muito baixa", "passiflora, melissa + passiflora e Lippia alba"],
    ["cr-ansiedade", "fi-ansiedade-sono", [0], "muito baixa", "passiflora, melissa + passiflora e Lippia alba"],
    ["depressao", "fi-depressao", [0], "moderada para extrato padronizado; baixa para a tintura", "tintura de hipérico (só médico; muitas interações, inclusive anticoncepcional)"],
    ["cr-depressao", "fi-depressao", [0], "moderada para extrato padronizado; baixa para a tintura", "tintura de hipérico (só médico; muitas interações, inclusive anticoncepcional)"],
    ["dispepsia", "fi-dispepsia", [0, 1], "baixa (alcachofra) a muito baixa (espinheira-santa)", "tinturas de espinheira-santa e alcachofra (ambas na RENAME) e melissa"],
    ["constipacao", "fi-constipacao", [0], "baixa; só uso ocasional (Memento contraindica na constipação crônica)", "tintura de sene"],
    ["dismenorreia", "fi-colicas", [0], "muito baixa", "chás de capim-limão e Lippia alba; tintura de alecrim"],
    ["resfriado", "fi-tosse", [0], "muito baixa (uso tradicional)", "xaropes de guaco (só adultos); equinácea sem benefício no tratamento (Cochrane 2014)"],
    ["bronquite", "fi-tosse", [0, 1], "muito baixa (uso tradicional)", "xaropes de guaco e de guaco + maracujá (só adultos)"],
    ["tosse-subaguda", "fi-tosse", [1], "muito baixa (uso tradicional)", "xarope de guaco + maracujá (só adultos)"],
    ["aftas", "fi-boca-garganta", [0, 1], "muito baixa", "pomadas orabase de camomila (≥ 12 anos), tanchagem + barbatimão e guaçatonga"],
    ["herpes-labial", "fi-herpes-labial", [0], "muito baixa", "gel de guaçatonga e hidratante labial de cavalinha + calêndula"],
    ["entorse", "fi-contusao", [0], "baixa (indireta)", "creme de arnica 10% (≥ 12 anos, pele íntegra, até 7 dias)"],
    ["distensao", "fi-contusao", [0], "baixa (indireta)", "creme de arnica 10% (≥ 12 anos, pele íntegra, até 7 dias)"],
    ["lombalgia", "fi-dor-articular", [0], "baixa (Cochrane 2014, extrato padronizado)", "tintura de garra-do-diabo (harpagofito) por até 4 semanas"],
    ["oa-joelho", "fi-dor-articular", [0], "baixa", "tintura de garra-do-diabo (harpagofito) por até 4 semanas; creme de arnica"],
    ["ivc", "fi-pernas-pesadas", [0, 1], "moderada para extrato padronizado; baixa para a tintura", "tintura e creme de castanha-da-índia; gel de arnica"],
    ["migranea", "fi-enxaqueca", [0], "baixa (Cochrane 2015: −0,6 crise/mês)", "tintura de tanaceto para prevenção (só médico; não trata a crise)"],
    ["queimadura", "fi-queimadura", [0, 1], "muito baixa", "géis de calêndula (≥ 6 anos) e camomila (≥ 12 anos)"],
    ["dermatite-atopica", "fi-pele-seca", [0, 1], "muito baixa para a planta; o emoliente diário é o que importa", "creme Polawax + girassol (≥ 2 anos) e loções de calêndula + cavalinha (≥ 12 anos) como emoliente gratuito"],
    ["seborreica", "fi-pele-seca", [2], "muito baixa", "solução de calêndula 10% para o couro cabeludo (≥ 6 anos)"],
    ["acne", "fi-acne", [0], "muito baixa", "gel de calêndula + barbatimão + copaíba (≥ 12 anos)"],
    ["picada-inseto", "fi-picadas", [0, 1], "muito baixa", "creme de copaíba (≥ 12 anos), creme de calêndula (≥ 6 anos) e loção repelente (≥ 6 anos)"],
    ["po-acamado", "fi-feridas", [1], "muito baixa", "papaína gel, óleo de girassol, barbatimão, creme de guaco para prevenção de LPP"],
    ["cr-pe-diabetico", "fi-feridas", [], "muito baixa", "papaína gel 4/6/10%, óleo de girassol, barbatimão (curativo conforme a fase do leito)"]
  ];
  // Itens que recebem só o link e a linha Betim (sem receita), porque a evidência é contra ou o produto não serve para a faixa etária
  const SO_LINK = [
    ["tontura", "fi-zumbido-tontura", "Farmácia Viva: tintura de ginkgo (só médico) – Cochrane 2013 e 2022 sem efeito no zumbido; não sugerido de rotina."],
    ["vppb", "fi-zumbido-tontura", "Farmácia Viva: tintura de ginkgo – sem evidência de benefício; não sugerido."],
    ["caimbras", "fi-zumbido-tontura", "Farmácia Viva: ginkgo consta para câimbras no Memento, sem evidência localizada; não sugerido."],
    ["dermatite-fraldas", "fi-fralda", "Farmácia Viva: nenhum fitoterápico liberado para bebês e crianças < 6 anos no Memento (calêndula cutânea só ≥ 6 anos; Polawax + girassol ≥ 2 anos como hidratante)."],
    ["gengivoestomatite", "fi-boca-garganta", "Farmácia Viva: spray de tanchagem + romã e orabases são para adultos (camomila ≥ 12 anos); não usar na criança."],
    ["faringite", "fi-boca-garganta", "Farmácia Viva: spray de tanchagem + romã (adulto; contém açúcar) só para alívio local; não trata faringite estreptocócica."],
    ["prurido", "fi-pele-seca", "Farmácia Viva: creme de guaco 10% para reações pruriginosas (≥ 12 anos) e emolientes; investigar a causa do prurido generalizado."],
    ["cistite", "fi-urinario", "Farmácia Viva: cavalinha (diurético) não trata ITU; não substitui antibiótico."],
    ["ferida", "fi-feridas", "Farmácia Viva: creme de barbatimão + girassol e óleo de girassol na fase de granulação (ver Feridas crônicas)."],
    ["amamentacao", "fi-fissura-mamilo", "Farmácia Viva: a solução de calêndula 5% do Memento para fissura não é usada na lactação (contraindicada pelo Formulário ANVISA 2026); tratar com correção da pega."],
    ["pu-amamentacao", "fi-fissura-mamilo", "Farmácia Viva: a solução de calêndula 5% do Memento para fissura não é usada na lactação (contraindicada pelo Formulário ANVISA 2026); tratar com correção da pega."],
    ["pu-sol-repelente", "fi-picadas", "Farmácia Viva: loção repelente de citronela (≥ 6 anos; proteção curta, reaplicar 4–6×/dia)."],
    ["panico", "fi-ansiedade-sono", "Farmácia Viva: passiflora e melissa só para ansiedade leve; não tratam crise de pânico."],
    ["cr-polifarmacia", "fi-prescrever", "Farmácia Viva: perguntar por fitoterápicos e chás; interações principais na tabela do item 'Como prescrever fitoterápicos'."]
  ];
  const addIr = (c, fid, rot) => {
    if (!c.guia || !c.guia.secoes || !c.guia.secoes.length) return;
    c.guia = {...c.guia, secoes: c.guia.secoes.map(s => ({...s, b: [...(s.b || [])]}))};
    const last = c.guia.secoes[c.guia.secoes.length - 1];
    const k = last.b.findIndex(b => b && b.ir);
    const par = [fid, rot];
    if (k >= 0) last.b[k] = {ir: last.b[k].ir.some(x => x[0] === fid) ? last.b[k].ir : [...last.b[k].ir, par]};
    else { const r = last.b.findIndex(b => b && b.ref); last.b.splice(r >= 0 ? r : last.b.length, 0, {ir: [par]}); }
  };
  const addBetim = (c, txt) => { if (!c.sus) c.sus = {}; c.sus = {...c.sus, betim: (c.sus.betim ? c.sus.betim.replace(/\s*$/, "") + " " : "") + txt}; };
  const addFonteFF = c => { if (c.evid) c.evid = {...c.evid, fontes: [...new Set([...(c.evid.fontes || []), FF])]}; };
  const addFonte = c => { if (c.evid) { c.evid = {...c.evid, fontes: [...(c.evid.fontes || [])]}; if (!c.evid.fontes.includes(M)) c.evid.fontes.push(M); } };
  LIGA.forEach(([id, fid, idx, cert, desc]) => {
    const c = get(id), f = fi(fid); if (!c || !f) return;
    const novos = idx.map(i => [i, rxDe(fid, i)]).filter(x => x[1]).map(([i, r]) => ({...r, titulo: "Fitoterápico – Farmácia Viva: " + r.titulo.replace(/\s*\(.*\)\s*$/, "") + " (certeza " + ((CERT_RX[fid] || [])[i] || cert) + ")", nota: (r.nota || "") + " Detalhes no item '" + f.nome + "' (módulo Fitoterapia)."}));
    c.rx = [...(c.rx || []), ...novos];
    addBetim(c, "Farmácia Viva (Memento SUS-Betim 2022): " + desc + "; certeza " + cert + ".");
    addIr(c, fid, "Fitoterapia: " + f.nome.split(":")[0]);
    addFonte(c);
    c.mudancas = [...(c.mudancas || []), MUD + "opção fitoterápica da Farmácia Viva de Betim (" + desc + "), com a certeza da evidência e link para o módulo Fitoterapia."];
    if (FFB[fid] && FFB[fid].rx && idx.some(i => FFB[fid].rx[i])) { c.mudancas.push(MUD74 + "nota da receita fitoterápica conferida no Formulário ANVISA 2026."); addFonteFF(c); }
    if (DEC75[fid] && fid !== "fi-prescrever") c.mudancas.push(MUD75 + DEC75[fid]);
  });
  SO_LINK.forEach(([id, fid, txt]) => {
    const c = get(id), f = fi(fid); if (!c || !f) return;
    addBetim(c, txt);
    addIr(c, fid, "Fitoterapia: " + f.nome.split(":")[0]);
    addFonte(c);
    c.mudancas = [...(c.mudancas || []), MUD + "nota sobre fitoterápico da Farmácia Viva e link para o módulo Fitoterapia."];
    if (id === "amamentacao" || id === "pu-amamentacao") c.mudancas.push(MUD75 + "receita de calêndula 5% da Farmácia Viva não é usada na lactação (Formulário ANVISA 2026), por decisão da usuária.");
  });
})();
