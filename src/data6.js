// ───────────── LOTE 6 – revisão 09/10/2026
Object.assign(FONTES, {
  nt_sarampo: {t: "Ministério da Saúde. Nota Técnica Conjunta CGVDI/DPNI/SVSA/MS, 2026 – alerta para identificação, notificação em 24 h e coleta oportuna em casos suspeitos de sarampo (norma).", f: "F", url: "https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/notas-tecnicas/2026/nota-tecnica-conjunta-no-324-2026-cgvdi-dpni-svsa-ms.pdf"},
  vita_sarampo: {t: "SMS São Paulo. Nota técnica vitamina A no sarampo, 2026 (baseada na NT Conjunta nº 02/2025-SCTIE/SAPS/SVSA/MS) (norma municipal).", f: "F", url: "https://prefeitura.sp.gov.br/documents/d/saude/nota_tecnica_vitamina_a_2026-pdf"},
  hanseniase: {t: "Ministério da Saúde – Hanseníase: tratamento (PQT-U, 6 meses PB e 12 meses MB); SESA-PR, Guia rápido de hanseníase, 2022 (doses PQT-U).", f: "F", url: "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/h/hanseniase/tratamento"},
  fa_mg: {t: "SES-MG. Alerta Epidemiológico nº 01/2025 – Febre amarela (09/01/2025) (norma estadual).", f: "F", url: "https://www.saude.mg.gov.br/wp-content/uploads/2025/07/7-ALERTA_EPIDEMIOLOGICO_012025__FEBRE_AMARELA.pdf"},
  malaria_bh: {t: "SMS Belo Horizonte – Malária: notificação imediata na região extra-amazônica, teste rápido/gota espessa e serviços de referência em BH (página oficial).", f: "F", url: "https://prefeitura.pbh.gov.br/saude/informacoes/vigilancia/vigilancia-epidemiologica/doencas-transmissiveis/malaria"},
  esc_ic: {t: "McDonagh TA et al. ESC Guidelines for heart failure, 2021, e Focused Update 2023 (diretriz).", f: "C", url: ""},
  ilae_crise: {t: "Krumholz A et al. AAN/AES Guideline – Management of an unprovoked first seizure in adults, 2015 (diretriz).", f: "C", url: ""},
  tremor: {t: "Bhatia KP et al. Consensus statement on the classification of tremors (MDS), 2018; Zesiewicz TA et al. AAN Evidence-based guideline update: treatment of essential tremor, 2011 (consenso; diretriz).", f: "C", url: ""},
  aua_hematuria: {t: "Barocas DA et al. AUA/SUFU Guideline – Microhematuria, 2020 (atualizada 2025) (diretriz).", f: "C", url: ""},
  aua_hpb: {t: "Sandhu JS et al. AUA Guideline – Management of lower urinary tract symptoms attributed to BPH, 2023 (diretriz).", f: "C", url: ""},
  nice_toc: {t: "NICE CG31. Obsessive-compulsive disorder and body dysmorphic disorder, 2005 (revisão de vigilância posterior) (diretriz).", f: "C", url: ""},
  caimbras: {t: "El-Tawil S et al. Quinine for muscle cramps, Cochrane 2015; Garrison SR et al. Magnesium for skeletal muscle cramps, Cochrane 2020 (revisões sistemáticas).", f: "C", url: ""},
  tunel_carpo: {t: "AAOS Clinical Practice Guideline – Management of Carpal Tunnel Syndrome, 2016 (atualização 2024) (diretriz).", f: "C", url: ""},
  monoartrite: {t: "Revisões de monoartrite aguda na APS (artrocentese como exame-chave; artrite séptica como diagnóstico que não pode passar) e EULAR 2016 – gota (diretriz e revisões).", f: "C", url: ""},
  oradss: {t: "Levine D et al. SRU Consensus – Management of asymptomatic ovarian and other adnexal cysts, 2019; ACR O-RADS US, 2022 (consensos).", f: "C", url: ""},
  eshre_endo: {t: "ESHRE Guideline: Endometriosis, 2022 (diretriz).", f: "C", url: ""},
  amenorreia: {t: "Practice Committee of the ASRM – Current evaluation of amenorrhea (diretriz); ESHRE/ASRM – POI 2024 (diretriz).", f: "C", url: ""},
  ms_zika: {t: "Ministério da Saúde – Orientações integradas de vigilância e atenção à saúde no âmbito da emergência de saúde pública (Zika, microcefalia e outras alterações), 2017 (norma).", f: "C", url: ""}
});

CONDICOES.push(
// ───────────────────────── GENITURINÁRIO
{
id: "incontinencia", nome: "Incontinência urinária feminina", sistema: "Geniturinário e saúde sexual", risco: "baixo",
ciap: "U04", cid: "N39.3 · N39.4", tags: "perda de urina esforço urgência bexiga hiperativa assoalho pélvico",
alerta: "Retenção urinária, hematúria, dor pélvica, ITU de repetição, déficit neurológico ou prolapso além do hímen: investigação/encaminhamento.",
S: `Paciente, ___ anos, com perda urinária há ___, ___ (aos esforços: tosse, espirro, exercício / com urgência / mista). Episódios por dia ___, uso de absorventes ___. Noctúria ___. Ingestão de líquidos, cafeína ___.
Paridade ___, partos ___. Menopausa ___. Constipação ___. Tosse crônica ___. DM ___, doença neurológica ___. Medicamentos (diuréticos, sedativos) ___. Impacto ___.`,
O: `BEG.  IMC ___
ABD: globo vesical ___. Exame ginecológico: atrofia ___, prolapso ___, teste de esforço (tosse com bexiga cheia) ___. Neuro sumário ___.
EAS: ___. Diário miccional de 3 dias: ___.`,
A: `Incontinência urinária ___ (de esforço / de urgência / mista), sem sinais de alarme.`,
P: `- EAS/urocultura para afastar ITU; diário miccional de 3 dias.
- Esforço ou mista: treinamento da musculatura do assoalho pélvico supervisionado por pelo menos 3 meses (1ª linha).
- Urgência: treinamento vesical (micção programada, aumento progressivo dos intervalos), reduzir cafeína; antimuscarínico se insuficiente.
- Perda de peso se IMC ≥ 30; tratar constipação; estrogênio vaginal se atrofia.
- Encaminhar se falha do conservador ou indicação cirúrgica.`,
rx: [
 {trilha: "ambos", titulo: "Treinamento do assoalho pélvico e da bexiga", texto: `ORIENTAÇÕES
1. Exercícios de contração do assoalho pélvico: 8–12 contrações de 6–8 s, 3 vezes ao dia, por pelo menos 3 meses.
2. Urgência: urinar em horários marcados, aumentando 15 minutos a cada semana; reduzir café, chá preto e refrigerante.`, dose: "NV"},
 {trilha: "ambos", titulo: "Bexiga hiperativa refratária ao treinamento", texto: `USO ORAL
1. Oxibutinina 5 mg ______ 60 comprimidos
   Tomar 1 comprimido de 12/12h (iniciar com ½ a 1 comprimido à noite).`, dose: "NV", nota: "Anticolinérgico: boca seca, constipação, piora cognitiva em idosos (evitar em idosos frágeis – Beers). Contraindicado em glaucoma de ângulo fechado e retenção urinária."},
 {trilha: "evidencia", titulo: "Bexiga hiperativa em idosa (sem carga anticolinérgica)", texto: `USO ORAL
1. Mirabegrona 25 mg ______ 30 comprimidos
   Tomar 1 comprimido por dia (pode aumentar para 50 mg após 4–8 semanas).`, dose: "NV", nota: "Monitorar PA. Não consta na RENAME nem na REMUME."}
],
orient: `A perda de urina tem tratamento e não é "normal da idade". Os exercícios do assoalho pélvico resolvem ou melhoram muito a maioria dos casos, mas precisam ser feitos todos os dias por alguns meses.
Evite excesso de café e refrigerante. Não diminua a água para "segurar" a urina.`,
alarme: ["Sangue na urina", "Dificuldade para urinar ou sensação de bexiga cheia", "Dor ou ardência ao urinar com febre", "Fraqueza ou dormência nas pernas"],
encaminhar: "Falha do tratamento conservador, prolapso sintomático, hematúria, retenção → ginecologia/urologia (fisioterapia pélvica se disponível).",
idealsus: {ideal: "Treinamento do assoalho pélvico e da bexiga é 1ª linha. Na bexiga hiperativa de idosas, mirabegrona evita a carga anticolinérgica.", sus: "Betim tem oxibutinina 5 mg (incluída pelo município; não consta na RENAME). Mirabegrona não consta.", ponte: "Treinamento para todas; oxibutinina do SUS em adultas sem risco cognitivo; mirabegrona por compra em idosas ou com intolerância."},
sus: {nacional: "RENAME 2024: estrogênios conjugados e estriol creme vaginal (Básico). Oxibutinina não consta.", betim: "REMUME Betim: oxibutinina 5 mg disponível; estrogênio vaginal não consta. Fisioterapia pélvica na rede: não verificada."},
evid: {resumo: "NICE NG123: treinamento do assoalho pélvico supervisionado ≥ 3 meses para incontinência de esforço ou mista; treinamento vesical por ≥ 6 semanas na urgência. Antimuscarínicos têm benefício modesto e efeitos anticolinérgicos cumulativos; mirabegrona tem eficácia semelhante sem essa carga.", certeza: "Moderada (estimada)", fontes: ["prolapso", "rename", "remume"]},
mudancas: ["Migrado do Notion ('Incontinência urinária feminina')."],
nv: ["Doses: conferir bula."]
},
{
id: "hematuria", nome: "Hematúria – avaliação inicial", sistema: "Geniturinário e saúde sexual", risco: "moderado",
ciap: "U06", cid: "R31", tags: "sangue na urina hematúria EAS câncer de bexiga",
alerta: "Hematúria macroscópica com coágulos e retenção, instabilidade, ou com edema/HAS/proteinúria e queda de função renal (glomerulonefrite rapidamente progressiva): urgência.",
S: `Paciente, ___ anos, com ___ (hematúria macroscópica / microscópica em EAS) desde ___. Coágulos ___. Disúria/febre ___ (ITU?). Cólica ___ (litíase?). Exercício intenso, trauma, menstruação ___ (causas transitórias).
Tabagismo ___ (maços-ano), exposição ocupacional (corantes, borracha) ___. Uso de anticoagulante ___. Edema, espuma na urina, HAS ___. Esquistossomose (procedência) ___.`,
O: `BEG.
${VITAIS}
ABD/flancos ___. Giordano ___. Edema ___. Próstata (homem, se indicado) ___.
EAS: hemácias ___/campo, dismorfismo ___, cilindros ___, proteína ___.`,
A: `Hematúria ___ (macroscópica / microscópica ≥ 3 hemácias/campo confirmada), provável origem ___ (urológica / glomerular), risco ___ para neoplasia.`,
P: `- Confirmar hematúria microscópica em EAS repetido (fora de menstruação, exercício, ITU).
- Tratar ITU e repetir EAS após tratamento.
- Creatinina, proteinúria (relação proteína/creatinina), PA.
- Sinais glomerulares (dismorfismo, cilindros hemáticos, proteinúria, piora renal): nefrologia.
- Hematúria macroscópica sem causa benigna clara: investigação urológica (imagem + cistoscopia) – risco de neoplasia ~10%.
- Microscópica: estratificar risco (idade, sexo, tabagismo, grau) para USG ± cistoscopia.
- Anticoagulação não explica hematúria por si: investigar igualmente.`,
rx: [
 {trilha: "ambos", titulo: "Sem tratamento específico", texto: `CONDUTA
1. Solicitar EAS de controle, urocultura, creatinina, relação proteína/creatinina urinária.
2. USG de rins e vias urinárias.
3. Encaminhamento à urologia para cistoscopia conforme risco.`, dose: "NV"}
],
orient: `Sangue na urina precisa ser investigado, mesmo que tenha aparecido uma vez só e passado.
Vamos repetir o exame de urina e pedir outros exames. Se for fumante, parar de fumar é importante para a saúde da bexiga.`,
alarme: ["Coágulos ou não conseguir urinar", "Febre com dor nas costas", "Inchaço no corpo ou urina espumosa", "Tontura ou fraqueza"],
encaminhar: "Hematúria macroscópica inexplicada ou microscópica de risco intermediário/alto → urologia. Padrão glomerular → nefrologia.",
sus: {nacional: "Exames na APS: EAS, urocultura, creatinina; USG e cistoscopia por regulação.", betim: "Acesso a USG e cistoscopia em Betim: não verificado."},
evid: {resumo: "Hematúria macroscópica associa-se a neoplasia urológica em cerca de 10% dos adultos; microscópica, em menos de 1–3%, variando com idade, sexo e tabagismo. AUA/SUFU estratifica a microhematúria em baixo, intermediário e alto risco para definir imagem e cistoscopia.", certeza: "Moderada (estimada; coortes)", fontes: ["aua_hematuria"]},
mudancas: ["Migrado do Notion.", "Incluída a estratificação de risco e a distinção entre origem glomerular e urológica."],
nv: []
},
{
id: "retencao-urinaria", nome: "Retenção urinária aguda", sistema: "Geniturinário e saúde sexual", risco: "alto",
ciap: "U08", cid: "R33", tags: "não consegue urinar bexigoma retenção sonda próstata",
alerta: "Retenção com déficit neurológico, dor lombar intensa ou anestesia em sela (compressão medular/cauda equina): urgência imediata. Febre ou hematúria com coágulos: urgência.",
S: `Paciente, ___ anos, sem conseguir urinar há ___ h, com dor suprapúbica ___. Sintomas prostáticos prévios (jato fraco, hesitação, noctúria) ___.
Medicamentos novos: anticolinérgicos, anti-histamínicos, descongestionantes, opioides, antidepressivos tricíclicos ___. Constipação/fecaloma ___. Cirurgia/anestesia recente ___. Febre ___. Lombalgia, alteração de sensibilidade ou força ___.`,
O: `___ estado geral, ___ (com dor).
${VITAIS}
ABD: globo vesical palpável ___ (até ___ cm acima da sínfise). Toque retal: próstata ___, fecaloma ___. Neuro: força e sensibilidade de MMII ___, sensibilidade perineal ___.`,
A: `Retenção urinária aguda, provável causa ___ (HPB / medicamentosa / fecaloma / pós-operatória).`,
P: `- Cateterismo vesical de alívio ou de demora (drenar e registrar volume).
- Suspender medicamento desencadeante; tratar constipação.
- HPB: iniciar alfabloqueador e programar tentativa de retirada da sonda em 2–3 dias.
- Creatinina; EAS/urocultura.
- Encaminhar à urologia; urgência se sinais neurológicos, infecção ou impossibilidade de cateterismo.`,
rx: [
 {trilha: "ambos", titulo: "Alfabloqueador (HPB) – SUS Betim", texto: `USO ORAL
1. Doxazosina 2 mg ______ 30 comprimidos
   Tomar 1 comprimido à noite (iniciar ½ comprimido; risco de hipotensão postural).`, dose: "NV"},
 {trilha: "evidencia", titulo: "Alfabloqueador uroseletivo", texto: `USO ORAL
1. Tansulosina 0,4 mg ______ 30 cápsulas
   Tomar 1 cápsula por dia, após a mesma refeição.`, dose: "NV", nota: "Aumenta a chance de sucesso na retirada da sonda; menos hipotensão que doxazosina. Não consta na RENAME nem na REMUME."}
],
orient: `A sonda alivia a bexiga cheia. O remédio ajuda a próstata a relaxar para tentar retirar a sonda em alguns dias.
Levante-se devagar (o remédio pode baixar a pressão). Beba água normalmente e mantenha o intestino funcionando.`,
alarme: ["Febre ou calafrios", "Sangue na urina com coágulos", "Sonda sem drenar urina", "Fraqueza nas pernas ou dormência na região genital"],
encaminhar: "Urologia com prioridade. Sinais neurológicos, sepse ou falha de cateterismo → urgência.",
idealsus: {ideal: "Alfabloqueador uroseletivo (tansulosina) aumenta o sucesso da retirada da sonda com menos hipotensão.", sus: "Betim tem doxazosina 2 mg (RENAME Básico), também eficaz, porém com mais hipotensão postural.", ponte: "Doxazosina do SUS com titulação lenta; tansulosina por compra em idosos com risco de queda ou hipotensão."},
sus: {nacional: "RENAME 2024: doxazosina 2 e 4 mg, finasterida 5 mg (Básico).", betim: "REMUME Betim: doxazosina 2 mg e finasterida 5 mg disponíveis. Sondas e material de cateterismo na UBS: não verificado."},
evid: {resumo: "Na retenção por HPB, alfabloqueadores antes da retirada da sonda aumentam a taxa de micção espontânea (revisões e ECRs com tansulosina e alfuzosina). AUA 2023: alfabloqueadores são 1ª linha para sintomas de HPB.", certeza: "Moderada (estimada)", fontes: ["aua_hpb", "rename", "remume"]},
mudancas: ["Entrada nova (estava marcada 'será incluído em breve' no Notion)."],
nv: ["Doses: conferir bula."]
},
// ───────────────────────── SAÚDE MENTAL
{
id: "toc", nome: "Transtorno obsessivo-compulsivo (TOC)", sistema: "Saúde mental", risco: "baixo",
ciap: "P79", cid: "F42", tags: "TOC obsessão compulsão mania de limpeza checagem",
S: `Paciente, ___ anos, com pensamentos intrusivos ___ (contaminação, dúvida, agressivos, simetria) e rituais ___ (lavar, checar, contar, organizar), ___ h/dia, há ___. Reconhece como excessivos ___. Impacto ___.
Depressão (PHQ-9 ___), ideação suicida ___, tiques ___, transtorno alimentar ___. Uso de substâncias ___. Início pós-infecção em criança (PANDAS) ___.`,
O: `Vigil, orientado, ___, crítica ___, sem sintomas psicóticos.
${VITAIS}`,
A: `Transtorno obsessivo-compulsivo ___ (leve / moderado / grave), ___ (com / sem) comorbidade depressiva.`,
P: `- Psicoeducação; TCC com exposição e prevenção de resposta (EPR) como 1ª linha.
- ISRS em dose mais alta e por mais tempo que na depressão (resposta em 8–12 semanas).
- Manter ≥ 12 meses após resposta.
- Grave, refratário ou com risco: CAPS/psiquiatria (clomipramina, potencialização).`,
rx: [
 {trilha: "ambos", titulo: "ISRS", texto: `USO ORAL
1. Fluoxetina 20 mg ______ 30 cápsulas
   Tomar 1 cápsula pela manhã; aumentar a cada 4 semanas até 40–60 mg/dia conforme resposta e tolerância.
   OU
2. Sertralina 50 mg – iniciar 50 mg/dia e aumentar até 150–200 mg/dia.`, dose: "NV", nota: "Avaliar resposta só após 8–12 semanas na dose adequada."},
 {trilha: "ambos", titulo: "Refratário a 2 ISRS (com especialista)", texto: `USO ORAL
1. Clomipramina 25 mg – iniciar 25 mg à noite e aumentar gradualmente até 100–250 mg/dia.
   (ECG prévio se > 40 anos ou cardiopatia; tóxica em superdosagem.)`, dose: "NV"}
],
orient: `O TOC tem tratamento. A terapia com exposição (enfrentar aos poucos o medo sem fazer o ritual) é o tratamento mais eficaz.
O remédio demora mais para agir no TOC do que na depressão: são 2 a 3 meses. Não pare por conta própria.`,
alarme: ["Pensamentos de morte ou de se machucar", "Rituais que impedem comer, dormir ou sair de casa", "Ideias estranhas ou ouvir vozes"],
encaminhar: "Moderado a grave, refratário ou com comorbidade → CAPS/psiquiatria (matriciamento).",
sus: {nacional: "RENAME 2024: fluoxetina, clomipramina (Básico). Sertralina não consta.", betim: "REMUME Betim: fluoxetina 20 mg, sertralina 50 mg, clomipramina 25 e 75 mg disponíveis."},
evid: {resumo: "NICE: TCC com EPR é 1ª linha; ISRS (qualquer) ou clomipramina têm eficácia semelhante, com melhor tolerabilidade dos ISRS. Doses mais altas e tratamento prolongado melhoram a resposta.", certeza: "Moderada (estimada)", fontes: ["nice_toc", "rename", "remume"]},
mudancas: ["Migrado do Notion.", "Mantida a fluoxetina; acrescentados tempo de resposta (8–12 semanas), sertralina e clomipramina para refratários."],
nv: ["Doses: conferir bula. Oferta de TCC/EPR na rede: não verificada."]
},
// ───────────────────────── NEUROLÓGICO E MUSCULOESQUELÉTICO
{
id: "crise-convulsiva", nome: "Primeira crise convulsiva (após recuperação)", sistema: "Musculoesquelético e neurológico", risco: "alto",
ciap: "N88 · N07", cid: "R56.8 · G40", tags: "convulsão crise epiléptica primeira crise epilepsia direção",
alerta: "Crise > 5 min ou crises repetidas sem recuperação (estado de mal), déficit focal, rebaixamento persistente, febre com rigidez de nuca, TCE, gestante (eclâmpsia), glicemia alterada ou alcoolismo em abstinência: urgência.",
S: `Paciente, ___ anos, com episódio de ___ (perda de consciência com abalos tônico-clônicos / outro) em ___, duração ___ min, testemunhado por ___. Liberação esfincteriana ___, mordedura lateral de língua ___, confusão pós-ictal ___ min.
Desencadeantes: privação de sono ___, álcool/abstinência ___, drogas ___, medicamentos (bupropiona, tramadol) ___, febre ___, TCE ___, hipoglicemia ___. Episódios prévios (mioclonias, ausências, auras) ___. História familiar ___. Dirige? ___. Profissão de risco ___. Gestação ___.`,
O: `BEG, consciente e orientado.
${VITAIS}  Glicemia capilar ___
Neuro: sem déficits focais ___, sinais meníngeos ___. Língua ___. Escoriações ___.`,
A: `Primeira crise convulsiva ___ (provocada / não provocada), recuperada, sem sinais de alarme no momento. Diagnóstico diferencial com síncope ___.`,
P: `- Diferenciar de síncope (pródromo, palidez, recuperação rápida).
- Exames: glicemia, eletrólitos (Na, Ca, Mg), hemograma, função renal e hepática; toxicológico se indicado.
- EEG e neuroimagem (RM preferencial; TC se não houver) – idealmente com prioridade.
- Em geral não iniciar antiepiléptico após crise única não provocada sem fatores de risco; decisão com neurologia (risco de recorrência ~21–45% em 2 anos).
- Orientar: não dirigir até liberação, evitar nadar sozinho, alturas e privação de sono.
- Plano de primeiros socorros para familiares.`,
rx: [
 {trilha: "ambos", titulo: "Sem antiepiléptico de rotina após crise única", texto: `CONDUTA
1. Solicitar EEG e RM de crânio (ou TC) e encaminhar à neurologia.
2. Se EEG epileptiforme, lesão estrutural ou crise prévia, discutir início de antiepiléptico (Betim: carbamazepina, ácido valproico, fenitoína; valproato contraindicado em mulher em idade fértil sem contracepção eficaz).`, dose: "NV"}
],
orient: `Uma crise isolada nem sempre significa epilepsia. Vamos investigar com exames.
Até a avaliação do neurologista: não dirija, não nade sozinho, evite alturas e durma bem.
Se acontecer outra crise: deite a pessoa de lado, proteja a cabeça, não coloque nada na boca e chame o SAMU (192) se durar mais de 5 minutos.`,
alarme: ["Crise que dura mais de 5 minutos ou se repete sem acordar", "Dor de cabeça forte, febre ou rigidez na nuca", "Fraqueza de um lado do corpo ou fala alterada", "Confusão que não melhora"],
encaminhar: "Todos → neurologia (prioridade). Sinais de alarme → urgência.",
sus: {nacional: "RENAME 2024: carbamazepina, ácido valproico, fenitoína, fenobarbital (Básico); lamotrigina, levetiracetam, topiramato (Especializado – PCDT Epilepsia).", betim: "REMUME Betim: carbamazepina 200 mg e suspensão, ácido valproico, fenitoína disponíveis. Acesso a EEG e RM: não verificado."},
evid: {resumo: "AAN/AES 2015: após primeira crise não provocada, risco de recorrência maior nos 2 primeiros anos (21–45%); aumenta com lesão cerebral, EEG epileptiforme, alteração de imagem e crise noturna. Antiepiléptico imediato reduz recorrência precoce em ~35%, sem melhorar a remissão a longo prazo.", certeza: "Moderada (estimada)", fontes: ["ilae_crise", "rename", "remume"]},
mudancas: ["Migrado do Notion ('Avaliação inicial de crise convulsiva isolada').", "Incluídas orientações de direção e segurança e a decisão compartilhada sobre antiepiléptico."],
nv: ["Regras de direção (CONTRAN/DETRAN) para pessoa com crise: conferir norma vigente."]
},
{
id: "tremor", nome: "Tremor essencial – avaliação inicial", sistema: "Musculoesquelético e neurológico", risco: "baixo",
ciap: "N08", cid: "G25.0", tags: "tremor mãos tremor essencial parkinson propranolol",
S: `Paciente, ___ anos, com tremor em ___ (mãos, cabeça, voz) há ___, ___ (ao segurar objetos, escrever – postural/cinético / em repouso). Melhora com álcool ___. História familiar ___. Impacto ___ (escrever, comer, beber).
Rigidez, lentidão, alteração de marcha ___ (Parkinson?). Café, ansiedade, sintomas de tireoide ___. Medicamentos (salbutamol, valproato, lítio, ISRS, levotiroxina, metoclopramida) ___.`,
O: `BEG.
${VITAIS}
Tremor ___ (postural/cinético bilateral / repouso unilateral), espiral de Arquimedes ___. Rigidez ___, bradicinesia ___, marcha ___. Tireoide ___.`,
A: `Tremor essencial provável (postural/cinético bilateral, sem sinais parkinsonianos).`,
P: `- TSH; revisar medicamentos e cafeína.
- Tratar apenas se houver impacto funcional.
- 1ª linha: propranolol (ou primidona).
- Sinais parkinsonianos, assimetria marcada ou início súbito: neurologia.`,
rx: [
 {trilha: "ambos", titulo: "Propranolol", texto: `USO ORAL
1. Propranolol 40 mg ______ 60 comprimidos
   Tomar ½ comprimido (20 mg) de 12/12h; aumentar conforme resposta até 60–120 mg/dia.`, dose: "NV", nota: "Evitar em asma, bloqueio AV e bradicardia; cautela em DM (mascara hipoglicemia)."},
 {trilha: "fora", titulo: "Primidona (alternativa de 1ª linha; RENAME Especializado – PCDT Epilepsia)", texto: `USO ORAL
1. Primidona 100 mg – iniciar 12,5–25 mg à noite e aumentar lentamente até 100–250 mg/dia.`, dose: "NV", nota: "Sonolência e náusea no início. No SUS, vinculada ao PCDT de Epilepsia (CEAF); não consta na REMUME."}
],
orient: `O tremor essencial é comum e não é Parkinson. Ele tende a piorar com café, ansiedade e cansaço.
O remédio é usado se o tremor atrapalhar atividades do dia a dia. Pesos nos punhos e copos com tampa ajudam.`,
alarme: ["Tremor em repouso, lentidão ou rigidez", "Tremor que começou de repente", "Desequilíbrio ou quedas", "Tremor com perda de peso e palpitações"],
encaminhar: "Dúvida diagnóstica, refratário ou incapacitante → neurologia.",
sus: {nacional: "RENAME 2024: propranolol 10 e 40 mg (Básico); primidona 100 e 250 mg (Especializado).", betim: "REMUME Betim: propranolol 40 mg disponível; primidona não consta."},
evid: {resumo: "AAN 2011: propranolol e primidona são as opções com nível A de evidência para tremor essencial, reduzindo a amplitude em cerca de 50% em parte dos pacientes. O diagnóstico é clínico (consenso MDS 2018).", certeza: "Moderada (estimada)", fontes: ["tremor", "rename", "remume"]},
mudancas: ["Preenche a entrada 'Tremores essenciais' do Notion (estava vazia)."],
nv: ["Doses: conferir bula."]
},
{
id: "artrite-aguda", nome: "Monoartrite / artralgia aguda", sistema: "Musculoesquelético e neurológico", risco: "alto",
ciap: "L20 · L91", cid: "M13.1 · M25.5", tags: "artrite aguda joelho inchado articulação quente séptica gota",
alerta: "Monoartrite aguda com febre, articulação quente e muito dolorosa, imunossupressão, prótese ou uso de drogas injetáveis: artrite séptica até prova em contrário → punção e urgência.",
S: `Paciente, ___ anos, com dor articular em ___ (uma / poucas / muitas articulações) há ___ dias, com edema ___, calor ___, rubor ___, limitação ___. Febre ___. Trauma ___.
Crises prévias ___ (gota?). IST/uretrite ou diarreia recentes ___ (artrite reativa/gonocócica). Febre com exantema ___ (chikungunya/dengue). Lesões de pele/psoríase ___. Diuréticos, álcool ___. Prótese ___. Imunossupressão ___.`,
O: `___ estado geral.
${VITAIS}
Articulação ___: derrame ___, calor ___, rubor ___, dor à mobilização passiva ___. Outras articulações ___. Pele/mucosas ___. Tofos ___.`,
A: `___ (monoartrite / oligoartrite / poliartralgia) aguda em ___, hipóteses: ___ (gota / artrite séptica / reativa / viral / trauma).`,
P: `- Monoartrite aguda: artrocentese com análise do líquido (celularidade, Gram/cultura, cristais) é o exame-chave; se não disponível na UBS, encaminhar no mesmo dia.
- Hemograma, PCR/VHS, ácido úrico (pode ser normal na crise), creatinina.
- Febre, sinais sistêmicos ou suspeita de séptica: urgência (antibiótico após coleta).
- Gota provável sem sinais de infecção: ver modelo de gota.
- Poliartralgia com febre e exantema: considerar arboviroses (modelos de dengue/chikungunya).`,
rx: [
 {trilha: "ambos", titulo: "Analgesia (sem suspeita de infecção)", texto: `USO ORAL
1. Ibuprofeno 600 mg ______ 15 comprimidos
   Tomar 1 comprimido de 8/8h após refeições por até 5 dias (evitar se suspeita de dengue, DRC, úlcera).
   OU
2. Dipirona 500 mg – 1 a 2 comprimidos de 6/6h se dor.

CUIDADOS
3. Repouso relativo da articulação e gelo 15–20 minutos, 3–4 vezes ao dia.`, dose: "NV"}
],
orient: `Articulação inchada e quente precisa de avaliação rápida para afastar infecção.
Procure atendimento imediatamente se surgir febre, calafrio ou se a dor piorar muito.`,
alarme: ["Febre ou calafrios", "Articulação muito quente, vermelha e com dor ao menor movimento", "Várias articulações inchadas com manchas na pele", "Corrimento ou ardência ao urinar junto com a dor articular"],
encaminhar: "Suspeita de artrite séptica → urgência no mesmo dia. Monoartrite sem diagnóstico, artrite persistente > 6 semanas → reumatologia.",
sus: {nacional: "RENAME 2024: ibuprofeno, dipirona, prednisona (Básico).", betim: "REMUME Betim: ibuprofeno 600 mg, dipirona e prednisona disponíveis. Artrocentese na rede: não verificada."},
evid: {resumo: "Na monoartrite aguda, nenhum achado clínico ou laboratorial isolado exclui artrite séptica; a análise do líquido sinovial (celularidade, Gram, cultura e cristais) é decisiva. Ácido úrico sérico normal não exclui gota.", certeza: "Moderada (estimada)", fontes: ["monoartrite", "gota_ecr", "rename", "remume"]},
mudancas: ["Preenche a entrada 'Artralgia / Artrite aguda' do Notion (estava vazia)."],
nv: ["Doses: conferir bula."]
},
{
id: "caimbras", nome: "Câimbras musculares recorrentes", sistema: "Musculoesquelético e neurológico", risco: "baixo",
ciap: "L18", cid: "R25.2", tags: "câimbra cãibra panturrilha noturna magnésio",
S: `Paciente, ___ anos, com câimbras em ___ (panturrilhas, pés) ___ vezes por semana, ___ (noturnas / após exercício), há ___. Gestação ___.
Medicamentos (diuréticos, estatinas, agonistas beta, IECA) ___. DM ___, DRC ___, hepatopatia ___, hipotireoidismo ___. Insuficiência venosa ___, neuropatia ___. Hidratação e álcool ___. Fraqueza/fasciculações ___.`,
O: `BEG.
${VITAIS}
MMII: pulsos ___, varizes ___, edema ___. Neuro: força ___, reflexos ___, fasciculações ___.`,
A: `Câimbras musculares recorrentes ___ (idiopáticas / associadas a ___).`,
P: `- Alongamento de panturrilha antes de dormir; hidratação.
- Revisar medicamentos; dosar K, Mg, Ca, creatinina, glicemia, TSH, CPK se mialgia com estatina.
- Quinina não recomendada (riscos graves).
- Magnésio: sem benefício em idosos; possível benefício pequeno na gestação (evidência fraca).
- Fraqueza, atrofia ou fasciculações: neurologia.`,
rx: [
 {trilha: "ambos", titulo: "Alongamento", texto: `ORIENTAÇÕES
1. Alongar a panturrilha (em pé, apoiado na parede, perna de trás esticada) por 30 s, 3 vezes, antes de dormir.
2. Durante a câimbra: puxar a ponta do pé em direção ao corpo e massagear.`, dose: "NV"}
],
orient: `Câimbras são comuns e geralmente benignas. Alongar as panturrilhas antes de dormir ajuda a prevenir.
Beba água ao longo do dia. Não use remédio com quinina.`,
alarme: ["Fraqueza muscular ou tremores na pele (fasciculações)", "Dor muscular intensa com urina escura", "Câimbras com inchaço ou dor em uma perna"],
encaminhar: "Sinais neurológicos ou miopatia → neurologia.",
sus: {nacional: "Sem medicamento específico na RENAME.", betim: "Não se aplica."},
evid: {resumo: "Cochrane 2015: quinina reduz modestamente as câimbras, mas com efeitos adversos graves (hematológicos, arritmias) – não recomendada. Cochrane 2020: magnésio provavelmente não ajuda câimbras idiopáticas em idosos. Alongamento tem evidência limitada, porém baixo risco.", certeza: "Baixa (estimada)", fontes: ["caimbras"]},
mudancas: ["Migrado do Notion ('Cãibras recorrentes').", "Retirada a reposição de rotina; magnésio sem benefício em idosos."],
nv: []
},
{
id: "distensao", nome: "Distensão muscular aguda", sistema: "Musculoesquelético e neurológico", risco: "baixo",
ciap: "L19 · L81", cid: "S76.1 · T14.3", tags: "distensão muscular estiramento posterior de coxa panturrilha esforço",
alerta: "Gap palpável, incapacidade de contrair o músculo, hematoma volumoso ou dor desproporcional com tensão do compartimento (síndrome compartimental): avaliação urgente.",
S: `Paciente, ___ anos, com dor súbita em ___ (posterior de coxa, panturrilha, adutores) durante ___ (corrida, esforço) há ___ dias. Estalo ___. Equimose ___. Capacidade de caminhar/apoiar ___. Uso de anticoagulante ___. Lesões prévias ___.`,
O: `BEG.
Músculo ___: dor à palpação ___, defeito palpável ___, equimose ___, dor à contração resistida ___, ao alongamento ___. Compartimento ___.`,
A: `Distensão muscular grau ___ (I / II) em ___, sem sinais de ruptura completa ou síndrome compartimental.`,
P: `- Fase aguda (2–3 dias): proteção, gelo, elevação, compressão; evitar repouso absoluto.
- Mobilização e carga progressivas guiadas pela dor; fortalecimento excêntrico na reabilitação.
- Analgesia curta.
- Retorno ao esporte quando força e amplitude estiverem simétricas.`,
rx: [
 {trilha: "ambos", titulo: "Analgesia", texto: `USO ORAL
1. Paracetamol 500 mg ou dipirona 500 mg – 1 a 2 comprimidos de 6/6h se dor.
   OU
2. Ibuprofeno 600 mg – 1 comprimido de 8/8h por até 5 dias.

CUIDADOS
3. Gelo 15–20 minutos a cada 2–3 horas nas primeiras 48 h; elevar o membro.`, dose: "NV"}
],
orient: `Nos primeiros 2 a 3 dias, proteja o músculo, use gelo e eleve a perna. Depois, volte a movimentar aos poucos, respeitando a dor.
Volte à atividade física de forma progressiva, com alongamento e fortalecimento.`,
alarme: ["Não consegue mexer ou contrair o músculo", "Inchaço muito grande e endurecido", "Dor que piora muito mesmo em repouso", "Dormência ou pé frio"],
encaminhar: "Suspeita de ruptura completa ou síndrome compartimental → ortopedia/urgência.",
sus: {nacional: "RENAME 2024: paracetamol, dipirona, ibuprofeno (Básico).", betim: "REMUME Betim: paracetamol, dipirona, ibuprofeno 600 mg disponíveis."},
evid: {resumo: "Mobilização precoce e reabilitação progressiva aceleram o retorno à atividade; exercícios excêntricos reduzem recidiva em lesões de posteriores de coxa. Analgésicos aliviam a dor sem alterar a cicatrização de forma clinicamente relevante.", certeza: "Baixa (estimada)", fontes: ["entorse", "rename", "remume"]},
mudancas: ["Preenche a entrada 'Distensão muscular' do Notion (estava vazia)."],
nv: ["Doses: conferir bula."]
},
{
id: "tunel-carpo", nome: "Síndrome do túnel do carpo", sistema: "Musculoesquelético e neurológico", risco: "baixo",
ciap: "N93", cid: "G56.0", tags: "túnel do carpo formigamento mão noite mediano órtese",
S: `Paciente, ___ anos, com parestesias em ___ (polegar, indicador, médio) da mão ___, pior à noite/ao acordar ___, alivia ao sacudir a mão ___, há ___ meses. Fraqueza/queda de objetos ___. Trabalho manual repetitivo ___.
Gestação ___, DM ___, hipotireoidismo ___, artrite reumatoide ___, obesidade ___.`,
O: `BEG.
Mão ___: Tinel ___, Phalen ___, sensibilidade no território do mediano ___, força de abdução do polegar ___, atrofia tenar ___. Cervical ___.`,
A: `Síndrome do túnel do carpo ___ (leve / moderada / grave), ___ (sem / com) déficit motor.`,
P: `- TSH, glicemia (fatores associados).
- Leve a moderada: órtese noturna com punho em posição neutra por 6–8 semanas; ajustar atividade.
- Corticoide: infiltração local (alívio de curto prazo) ou prednisona oral curta.
- Atrofia tenar, déficit motor ou falha em 3–6 meses: ENMG e cirurgia.
- Gestante: costuma melhorar após o parto.`,
rx: [
 {trilha: "ambos", titulo: "Órtese e corticoide oral curto", texto: `ORIENTAÇÕES
1. Órtese de punho (tala) em posição neutra para dormir, por 6 a 8 semanas.

USO ORAL (opcional, sintomas intensos)
2. Prednisona 20 mg ______ 10 comprimidos
   Tomar 1 comprimido por dia por 10 dias (ou 20 mg por 7 dias e 10 mg por 7 dias).`, dose: "NV", nota: "Benefício de curto prazo; não usar repetidamente."}
],
orient: `Usar a tala à noite com o punho reto alivia o formigamento na maioria das pessoas.
Faça pausas em trabalhos repetitivos com as mãos. Se houver fraqueza ou o polegar ficar fino, avise: pode precisar de cirurgia.`,
alarme: ["Fraqueza para segurar objetos", "Afinamento do músculo da base do polegar", "Dormência constante, não só à noite"],
encaminhar: "Déficit motor, atrofia tenar, falha em 3–6 meses → ENMG e ortopedia/cirurgia de mão.",
sus: {nacional: "RENAME 2024: prednisona, dexametasona injetável (Básico). Órteses: não consta.", betim: "REMUME Betim: prednisona disponível. Acesso a órtese e ENMG: não verificado."},
evid: {resumo: "AAOS: órtese, corticoide oral e infiltração de corticoide têm evidência para alívio de curto prazo; a cirurgia é mais eficaz que o tratamento conservador em casos moderados/graves a longo prazo.", certeza: "Moderada (estimada)", fontes: ["tunel_carpo", "cochrane_b12", "rename", "remume"]},
mudancas: ["Migrado do Notion ('Síndrome do túnel do carpo – inicial')."],
nv: ["Doses: conferir bula."]
},
// ───────────────────────── INFECCIOSAS E VIGILÂNCIA
{
id: "febre-amarela", nome: "Febre amarela – suspeita", sistema: "Infecciosas e vigilância", risco: "alto",
ciap: "A78", cid: "A95.9", tags: "febre amarela icterícia mata macaco vacina notificação imediata",
alerta: "Caso suspeito deve ser notificado em até 24 h (CIEVS-Minas) e regulado para hospital de referência com suporte de UTI. Icterícia, sangramentos, oligúria ou alteração de consciência indicam forma grave.",
S: `Paciente, ___ anos, com febre de início súbito há ___ dias, cefaleia ___, mialgia/lombalgia ___, náuseas/vômitos ___, icterícia ___, sangramentos ___.
Vacina contra febre amarela: ___ (vacinado em ___ / não vacinado / ignorado). Exposição nos últimos 15 dias: ___ (área rural/mata, ecoturismo, local com morte de macacos).`,
O: `___ estado geral.
${VITAIS}
Icterícia ___. Sinal de Faget (febre com bradicardia relativa) ___. Sangramentos ___. Fígado ___. Diurese ___.`,
A: `Caso suspeito de febre amarela.`,
P: `- Notificar imediatamente (até 24 h) à vigilância/CIEVS-Minas e preencher ficha SINAN.
- Solicitar TGO/TGP, bilirrubinas, hemograma, coagulograma, creatinina; coleta para diagnóstico específico conforme vigilância.
- Regular para hospital de referência (com UTI) – não manejar ambulatorialmente.
- Analgesia/antitérmico com paracetamol ou dipirona; evitar AAS e AINE.
- Vacinação de contatos/comunidade não vacinados conforme vigilância.`,
rx: [
 {trilha: "ambos", titulo: "Até a remoção", texto: `USO ORAL
1. Dipirona 500 mg – 1 comprimido se febre ou dor.
   Não usar AAS nem anti-inflamatórios.

HIDRATAÇÃO
2. Hidratação oral se tolerada.`, dose: "NV", nota: "Paracetamol: preferir doses baixas pela lesão hepática."}
],
orient: `A suspeita de febre amarela precisa de avaliação no hospital. Não tome AAS nem anti-inflamatórios.
A vacina é a melhor proteção para você e sua família: confira a caderneta de todos da casa.`,
alarme: ["Pele ou olhos amarelos", "Sangramentos (gengiva, nariz, vômito, urina)", "Urinar pouco", "Confusão ou sonolência"],
encaminhar: "Todo caso suspeito → hospital de referência regulado.",
sus: {nacional: "Vacina febre amarela: PNI (dose única para a maioria; conferir calendário vigente).", betim: "Hospital de referência e fluxo de regulação para Betim: confirmar com a vigilância municipal."},
evid: {resumo: "Não há antiviral específico; o tratamento é de suporte, idealmente em centro com UTI. A vacina é altamente eficaz. SES-MG (Alerta 01/2025) define caso suspeito e notificação imediata.", certeza: "Recomendação normativa", fontes: ["fa_mg"]},
mudancas: ["Preenche a entrada 'Febre-amarela' do Notion (estava vazia)."],
nv: ["Hospital de referência e fluxo para Betim: confirmar."]
},
{
id: "hanseniase", nome: "Hanseníase – suspeita e início de tratamento", sistema: "Infecciosas e vigilância", risco: "moderado",
ciap: "A78", cid: "A30.9", tags: "hanseníase mancha dormente nervo espessado PQT-U lepra",
alerta: "Reação hansênica (lesões que inflamam de repente, dor em nervo, perda súbita de força ou sensibilidade, nódulos dolorosos com febre) ou neurite: avaliação no mesmo dia (corticoide/talidomida conforme protocolo).",
S: `Paciente, ___ anos, com mancha(s)/placa(s) ___ em ___ há ___, com ___ (diminuição de sensibilidade, queda de pelos, ausência de suor). Dormência/formigamento em mãos e pés ___, fraqueza ___, dor em trajeto de nervo ___. Feridas que não doem ___.
Contatos com hanseníase ___. Lesões em familiares ___. BCG ___.`,
O: `BEG.
Pele: ___ lesões (número ___), tipo ___, em ___. Sensibilidade térmica/dolorosa/tátil nas lesões ___.
Nervos: ulnar ___, mediano ___, fibular ___, tibial ___, auricular ___ (espessamento/dor). Avaliação neurológica simplificada (força, sensibilidade com monofilamento): ___. Grau de incapacidade física ___.`,
A: `Hanseníase ___ (paucibacilar / multibacilar), grau de incapacidade ___.`,
P: `- Diagnóstico clínico com ≥ 1 sinal cardinal: lesão com alteração de sensibilidade; espessamento de nervo com alteração sensitiva/motora/autonômica; baciloscopia/biópsia positiva.
- Baciloscopia de raspado intradérmico se disponível (positiva = MB).
- Classificar: PB (doença localizada, baciloscopia negativa) ou MB (disseminada, > 1 tronco nervoso ou baciloscopia positiva).
- Iniciar PQT-U; notificar; avaliar contatos (exame anual por 10 anos) e BCG para contatos conforme protocolo.
- Avaliação neurológica no início, durante e na alta.`,
rx: [
 {trilha: "ambos", titulo: "PQT-U adulto (> 50 kg)", texto: `USO ORAL – cartela mensal
DOSE MENSAL SUPERVISIONADA (na unidade):
   Rifampicina 600 mg + clofazimina 300 mg + dapsona 100 mg.
DOSES DIÁRIAS AUTOADMINISTRADAS (em casa):
   Clofazimina 50 mg + dapsona 100 mg, 1 vez ao dia.
DURAÇÃO: PB – 6 cartelas (em até 9 meses); MB – 12 cartelas (em até 18 meses).`, dose: "F", nota: "Criança 30–50 kg: cartela infantil (rifampicina 450 mg, clofazimina 150 mg mensal + 50 mg em dias alternados, dapsona 50 mg). < 30 kg: ajuste por mg/kg. Dapsona: anemia hemolítica (G6PD), síndrome da dapsona; clofazimina escurece a pele (reversível)."}
],
orient: `A hanseníase tem cura e o tratamento é gratuito. Depois da primeira dose, a pessoa praticamente deixa de transmitir.
Venha todo mês à unidade para tomar a dose supervisionada e pegar a próxima cartela. A pele pode ficar mais escura durante o tratamento; isso melhora depois.
Pessoas que moram com você precisam ser examinadas.`,
alarme: ["Manchas que ficam vermelhas e inchadas de repente", "Dor forte em cotovelo, punho ou joelho (nervos)", "Perda de força nas mãos ou pés", "Caroços dolorosos na pele com febre", "Pele ou olhos amarelados, urina escura (efeito da dapsona)"],
encaminhar: "Reações hansênicas graves, dúvida diagnóstica, intolerância à PQT → referência em hanseníase.",
sus: {nacional: "RENAME 2024: PQT-U (rifampicina, clofazimina, dapsona – Estratégico, blíster). Vacina BCG: PNI.", betim: "REMUME Betim: PQT Único adulto e infantil disponíveis."},
evid: {resumo: "A PQT-U (rifampicina, dapsona e clofazimina) é o esquema do MS para PB (6 meses) e MB (12 meses). Diagnóstico precoce e exame de contatos são as principais medidas para interromper a transmissão e prevenir incapacidades.", certeza: "Recomendação normativa do MS", fontes: ["hanseniase", "rename", "remume"]},
mudancas: ["Preenche a entrada 'Hanseníase' do Notion (estava vazia)."],
nv: ["Tabela de doses por mg/kg para < 30 kg e conduta de BCG por cicatriz: conferir no protocolo vigente."]
},
{
id: "malaria", nome: "Malária – suspeita em viajante", sistema: "Infecciosas e vigilância", risco: "alto",
ciap: "A73", cid: "B54", tags: "malária viajante Amazônia África febre calafrio gota espessa",
alerta: "Toda febre em quem esteve em área de transmissão nos últimos 30 dias (até meses, para P. vivax) exige teste no mesmo dia. Sinais de gravidade (confusão, convulsão, icterícia, sangramento, dispneia, oligúria, hipotensão, vômitos persistentes, hiperparasitemia): urgência.",
S: `Paciente, ___ anos, com febre ___ (padrão: ___), calafrios ___, sudorese ___, cefaleia ___, mialgia ___ há ___ dias.
Viagem para ___ (Amazônia legal, África, outro) entre ___ e ___. Malária prévia ___. Quimioprofilaxia ___. Gestação ___.`,
O: `___ estado geral.
${VITAIS}
Palidez ___, icterícia ___, esplenomegalia ___, hepatomegalia ___. Nível de consciência ___.`,
A: `Caso suspeito de malária (febre + viagem a área de transmissão).`,
P: `- Teste rápido e/ou gota espessa no mesmo dia (referência municipal/UPA).
- Notificação imediata (região extra-amazônica) no SINAN e à vigilância.
- Tratamento conforme espécie e parasitemia, feito pela referência (medicamentos do Componente Estratégico).
- Gravidade ou gestante: urgência/hospital.`,
rx: [
 {trilha: "ambos", titulo: "Sem tratamento empírico na UBS", texto: `CONDUTA
1. Encaminhar no mesmo dia para teste rápido/gota espessa e tratamento na referência.
2. Antitérmico até o atendimento: dipirona 500 mg ou paracetamol 500 mg se febre.`, dose: "NV"}
],
orient: `Febre depois de viagem para área de malária precisa de exame no mesmo dia. O diagnóstico e o tratamento são gratuitos.
Malária tem cura, mas pode ficar grave rapidamente se o tratamento atrasar.`,
alarme: ["Confusão, sonolência ou convulsão", "Pele ou olhos amarelos", "Falta de ar", "Urinar pouco", "Vômitos que não param", "Sangramentos"],
encaminhar: "Todo caso suspeito → referência para diagnóstico e tratamento no mesmo dia; grave → urgência.",
sus: {nacional: "RENAME 2024: artemeter+lumefantrina, artesunato+mefloquina, cloroquina, primaquina, tafenoquina (Estratégico).", betim: "Referência para teste e tratamento de malária em Betim: não verificada (em BH: Serviço de Saúde do Viajante, UPAs e hospitais de referência)."},
evid: {resumo: "Na região extra-amazônica, a letalidade da malária é maior pelo atraso no diagnóstico. A suspeita baseia-se em febre + deslocamento para área de transmissão; o teste deve ser feito no mesmo dia e o caso notificado imediatamente.", certeza: "Recomendação normativa", fontes: ["malaria_bh", "rename"]},
mudancas: ["Preenche a entrada 'Malária' do Notion (estava vazia)."],
nv: ["Serviço de referência para malária em Betim/região: confirmar com a vigilância."]
},
{
id: "sarampo", nome: "Sarampo – suspeita", sistema: "Infecciosas e vigilância", risco: "alto",
ciap: "A71", cid: "B05.9", tags: "sarampo exantema febre tosse conjuntivite vitamina A notificação 24 h bloqueio vacinal",
alerta: "Notificar em até 24 h. Isolamento respiratório imediato (máscara cirúrgica no paciente, sala separada). Dispneia, desidratação, convulsão ou alteração de consciência (pneumonia, encefalite): urgência.",
S: `Paciente, ___ anos, com febre há ___ dias e exantema maculopapular iniciado em ___ (face/retroauricular) com progressão cefalocaudal, acompanhado de ___ (tosse, coriza, conjuntivite).
Viagem nos últimos 30 dias ou contato com viajante ___. Contato com caso suspeito ___. Vacinação (tríplice/tetra viral): ___ doses. Gestação ___. Imunossupressão ___.`,
O: `___ estado geral, ___ (com máscara).
${VITAIS}
Pele: exantema maculopapular morbiliforme em ___. Manchas de Koplik ___. Conjuntivite ___. AR ___. Hidratação ___.`,
A: `Caso suspeito de sarampo.`,
P: `- Notificar em até 24 h (não aguardar confirmação).
- Coletar no 1º atendimento: sangue (sorologia) e swab naso/orofaríngeo + urina (RT-PCR), conforme vigilância.
- Isolamento domiciliar até 4 dias após o início do exantema.
- Vitamina A para crianças (dose por idade, D1 e D2).
- Bloqueio vacinal dos contatos suscetíveis (oportunamente) e busca ativa.
- Sintomáticos; tratar complicações (OMA, pneumonia).`,
rx: [
 {trilha: "fora", titulo: "Vitamina A – crianças (palmitato de retinol; via vigilância)", texto: `USO ORAL – 2 doses: dia da suspeita (D1) e dia seguinte (D2)
< 6 meses: 50.000 UI por dose.
6 a 11 meses: 100.000 UI por dose.
12 a 59 meses: 200.000 UI por dose.`, dose: "F", nota: "Não está indicada de rotina para adultos. Avaliar dose adicional em 4–6 semanas se sinais de deficiência. Fornecimento via vigilância/estratégia de suplementação (não consta na REMUME)."},
 {trilha: "ambos", titulo: "Sintomáticos", texto: `USO ORAL
1. Paracetamol 500 mg (adulto) ou 200 mg/mL (criança, 10–15 mg/kg) até de 6/6h se febre.
2. Hidratação oral.`, dose: "NV"}
],
orient: `O sarampo é muito contagioso. Fique em casa, longe de outras pessoas, até 4 dias depois do início das manchas.
Pessoas da casa e contatos devem conferir a vacinação: a vacina dada logo após o contato ainda pode proteger.`,
alarme: ["Falta de ar ou respiração rápida", "Convulsão, sonolência ou confusão", "Não consegue beber líquidos", "Dor de ouvido com secreção", "Febre que volta depois de melhorar"],
encaminhar: "Complicações ou grupos de risco (lactente, gestante, imunossuprimido, desnutrido) → avaliação hospitalar.",
sus: {nacional: "Vitamina A (palmitato de retinol) para sarampo: estratégia do MS; RENAME 2024 lista palmitato de retinol 150.000 UI/mL (Básico) e cápsulas 100.000/200.000 UI (Estratégico). Tríplice e tetra viral: PNI.", betim: "Fluxo de vitamina A e bloqueio vacinal em Betim: confirmar com a vigilância."},
evid: {resumo: "Vitamina A reduz mortalidade e complicações em crianças com sarampo (OMS). Não há antiviral; o controle depende de notificação rápida, isolamento e bloqueio vacinal. NT Conjunta 2026 reforça notificação em 24 h e coleta no 1º atendimento.", certeza: "Recomendação normativa do MS", fontes: ["nt_sarampo", "vita_sarampo", "rename"]},
mudancas: ["Migrado do Notion.", "Corrigido: o Notion prescrevia vitamina A 100.000 UI por 2 dias sem distinção de idade; a indicação é para crianças, com dose por faixa etária (50.000/100.000/200.000 UI), não para adultos de rotina."],
nv: ["Prazos de coleta e fluxo laboratorial: conferir notas técnicas vigentes."]
},
{
id: "zika", nome: "Zika – suspeita", sistema: "Infecciosas e vigilância", risco: "moderado",
ciap: "A77", cid: "A92.5", tags: "zika exantema pruriginoso conjuntivite gestante microcefalia",
alerta: "Gestante com exantema: investigação obrigatória e acompanhamento pré-natal com USG. Fraqueza ascendente (Guillain-Barré): urgência.",
S: `Paciente, ___ anos, com exantema maculopapular pruriginoso há ___ dias, febre baixa ou ausente ___, conjuntivite não purulenta ___, artralgia leve ___, edema periarticular ___.
Gestação ___ (IG ___). Viagem/área com transmissão ___. Parceria com sintomas ___. Fraqueza ou formigamento ___.`,
O: `BEG.
${VITAIS}  Prova do laço ___
Pele: exantema ___. Conjuntivas ___. Articulações ___. Neuro ___.`,
A: `Caso suspeito de zika (diferencial com dengue e chikungunya).`,
P: `- Manejar como dengue até exclusão (hidratação, sem AAS/AINE) – ver modelo de dengue.
- Notificar.
- Gestante: coleta para RT-PCR/sorologia conforme vigilância, USG seriada e seguimento do RN.
- Preservativo: transmissão sexual possível.
- Sintomáticos: antitérmico e anti-histamínico.`,
rx: [
 {trilha: "ambos", titulo: "Sintomáticos", texto: `USO ORAL
1. Dipirona 500 mg ou paracetamol 500 mg – 1 a 2 comprimidos até de 6/6h se febre ou dor.
2. Loratadina 10 mg – 1 comprimido por dia se prurido.
   Evitar AAS e anti-inflamatórios até afastar dengue.`, dose: "NV"}
],
orient: `A zika costuma ser leve e passa em até uma semana. Beba bastante líquido e não use AAS nem anti-inflamatórios.
Use preservativo: o vírus pode ser transmitido pelo sexo. Se estiver grávida ou puder estar, avise: há acompanhamento especial.`,
alarme: ["Fraqueza nas pernas que sobe", "Formigamento ou dificuldade para andar", "Sinais de alarme da dengue (dor abdominal, vômitos, sangramento)"],
encaminhar: "Gestante → pré-natal com seguimento especializado conforme protocolo. Guillain-Barré → urgência.",
sus: {nacional: "RENAME 2024: dipirona, paracetamol, loratadina (Básico).", betim: "REMUME Betim: dipirona, paracetamol e loratadina disponíveis."},
evid: {resumo: "A infecção na gestação associa-se à síndrome congênita do Zika. O manejo é sintomático; a principal tarefa na APS é diferenciar de dengue e acompanhar gestantes.", certeza: "Recomendação normativa", fontes: ["ms_zika", "ms_dengue", "rename", "remume"]},
mudancas: ["Preenche a entrada 'Zika vírus' do Notion (estava vazia)."],
nv: ["Fluxo de coleta para gestante em Betim: confirmar com a vigilância."]
},
// ───────────────────────── PELE
{
id: "exantema", nome: "Exantema agudo – avaliação inicial", sistema: "Pele", risco: "moderado",
ciap: "S07", cid: "R21", tags: "manchas vermelhas pelo corpo exantema febre virose farmacodermia",
alerta: "Petéquias/púrpura com febre (meningococcemia), lesões em mucosas com bolhas ou descolamento (Stevens-Johnson/NET), exantema com hipotensão ou com novo medicamento nas últimas 8 semanas com febre e eosinofilia (DRESS): urgência.",
S: `Paciente, ___ anos, com manchas ___ (maculopapulares / vesiculares / petequiais / urticariformes) iniciadas em ___ há ___ dias, com progressão ___. Prurido ___. Febre ___ (antes ou com o exantema).
Sintomas: tosse/coriza/conjuntivite ___ (sarampo?), artralgia ___ (chikungunya/zika), linfonodos retroauriculares ___ (rubéola), dor de garganta ___ (escarlatina).
Medicamentos novos nas últimas 8 semanas ___. Vacinação (tríplice viral) ___. Viagem/contatos ___. Gestação ___. Exposição sexual ___ (sífilis secundária?).`,
O: `___ estado geral.
${VITAIS}  Prova do laço ___
Pele: ___ (tipo, distribuição, palmas e plantas ___). Mucosas ___. Linfonodos ___. Orofaringe ___.`,
A: `Exantema agudo ___ (maculopapular / vesicular / urticariforme), hipóteses: ___.`,
P: `- Toda febre + exantema maculopapular: notificar como suspeita de sarampo/rubéola (doença exantemática) e coletar.
- Afastar dengue (prova do laço, hemograma) e manejar conforme modelo.
- Exantema em palmas/plantas: teste rápido de sífilis.
- Suspeita de farmacodermia: suspender o medicamento suspeito.
- Gestante com exantema: investigar sarampo, rubéola, zika, sífilis e parvovírus.`,
rx: [
 {trilha: "ambos", titulo: "Sintomáticos", texto: `USO ORAL
1. Paracetamol 500 mg ou dipirona 500 mg se febre.
2. Loratadina 10 mg – 1 comprimido por dia se prurido.
   Evitar AAS e anti-inflamatórios até afastar dengue.`, dose: "NV"}
],
orient: `As manchas pelo corpo têm muitas causas, a maioria por vírus. Algumas doenças precisam de notificação e exames para proteger outras pessoas.
Evite contato com gestantes e bebês até o diagnóstico. Não tome AAS nem anti-inflamatórios.`,
alarme: ["Manchas roxas que não somem ao apertar", "Bolhas ou feridas na boca e nos olhos", "Pele descolando", "Falta de ar, tontura ou desmaio", "Sonolência ou rigidez na nuca"],
encaminhar: "Sinais de gravidade → urgência. Dúvida diagnóstica persistente → dermatologia/infectologia.",
sus: {nacional: "RENAME 2024: paracetamol, dipirona, loratadina (Básico). Testes rápidos de sífilis: insumo estratégico.", betim: "REMUME Betim: paracetamol, dipirona e loratadina disponíveis."},
evid: {resumo: "A abordagem do exantema agudo combina morfologia, febre, sinais associados, vacinação e epidemiologia. A vigilância de doenças exantemáticas exige notificação de todo caso de febre com exantema maculopapular para manter a eliminação do sarampo e da rubéola.", certeza: "Recomendação normativa", fontes: ["nt_sarampo", "ms_dengue", "rename", "remume"]},
mudancas: ["Migrado do Notion ('Exantemas agudos').", "Incluídos critérios de gravidade (meningococcemia, SJS/NET, DRESS) e notificação de doença exantemática."],
nv: []
},
// ───────────────────────── SAÚDE DA MULHER
{
id: "cisto-ovariano", nome: "Cisto ovariano – achado em USG", sistema: "Saúde da mulher", risco: "moderado",
ciap: "X99", cid: "N83.2", tags: "cisto de ovário USG achado incidental O-RADS",
alerta: "Dor pélvica súbita intensa com náuseas (torção ou ruptura) ou instabilidade: urgência. Ascite, massa sólida ou pós-menopausa com cisto complexo: avaliação oncológica prioritária.",
S: `Paciente, ___ anos, ___ (pré / pós-menopausa), com USG de ___ mostrando ___ (cisto simples / hemorrágico / endometrioma / dermoide / complexo) de ___ cm em ovário ___.
Sintomas: dor pélvica ___, dispareunia ___, irregularidade menstrual ___, distensão/saciedade precoce ___. DUM ___. História familiar de câncer de ovário/mama ___.`,
O: `BEG.
${VITAIS}
ABD: ___. Toque: massa anexial ___, dor ___. Ascite ___.`,
A: `___ (cisto simples / outro) ovariano de ___ cm, ___ (pré / pós-menopausa), O-RADS ___.`,
P: `- Cisto simples ≤ 3 cm na pré-menopausa: fisiológico, sem seguimento.
- Simples 3–5 cm na pré-menopausa: em geral sem seguimento (repetir USG se sintomático ou conforme laudo).
- Simples > 5–7 cm, ou hemorrágico/endometrioma/dermoide: USG em 8–12 semanas (preferir fase folicular).
- Pós-menopausa: simples ≤ 1 cm sem seguimento; maiores ou complexos → USG de controle/encaminhamento.
- Componente sólido, septos espessos, fluxo, ascite: ginecologia oncológica (CA-125 conforme orientação).`,
rx: [
 {trilha: "ambos", titulo: "Conduta", texto: `CONDUTA
1. Seguimento por USG transvaginal conforme categoria (ver plano).
2. Dor: ibuprofeno 600 mg de 8/8h se necessário.
3. ACO não faz regredir cistos já existentes.`, dose: "NV"}
],
orient: `A maioria dos cistos de ovário é funcional e desaparece sozinha. Vamos repetir a ultrassonografia se for necessário.
Procure atendimento imediatamente se tiver dor forte e súbita na barriga.`,
alarme: ["Dor forte e súbita no baixo ventre", "Febre com dor pélvica", "Barriga crescendo ou sensação de estufamento constante", "Tontura ou desmaio"],
encaminhar: "Cisto complexo, sólido, pós-menopausa com critérios ou persistente sintomático → ginecologia.",
sus: {nacional: "USG transvaginal por regulação.", betim: "Acesso a USG transvaginal em Betim: não verificado."},
evid: {resumo: "Consenso SRU 2019 e O-RADS US: cistos simples pequenos na pré-menopausa são fisiológicos e não precisam de seguimento; a categorização por características ultrassonográficas orienta a probabilidade de malignidade. ACO não acelera a resolução de cistos funcionais (Cochrane).", certeza: "Moderada (estimada)", fontes: ["oradss"]},
mudancas: ["Preenche a entrada 'Cisto ovariano' do Notion (estava vazia)."],
nv: ["Limiares de tamanho: conferir no laudo O-RADS do serviço."]
},
{
id: "endometriose", nome: "Endometriose – suspeita e manejo inicial", sistema: "Saúde da mulher", risco: "baixo",
ciap: "X99", cid: "N80.9", tags: "endometriose cólica forte dispareunia infertilidade dienogeste DIU",
S: `Paciente, ___ anos, com dismenorreia progressiva ___, dor pélvica crônica ___, dispareunia profunda ___, disquezia/disúria cíclicas ___, há ___. Infertilidade ___. Resposta a AINE/ACO ___. Desejo de gestar ___.`,
O: `BEG.
Toque: dor em fundo de saco ___, nódulos ___, útero fixo ___, massa anexial ___.
USG transvaginal: ___ (endometrioma? sinais de endometriose profunda?).`,
A: `Suspeita clínica de endometriose ___ (sem / com endometrioma), sem desejo reprodutivo imediato.`,
P: `- Diagnóstico clínico + imagem; laparoscopia não é necessária para iniciar tratamento empírico.
- AINE + hormonal contínuo (progestagênio ou ACO contínuo) como 1ª linha.
- Infertilidade, endometrioma volumoso, endometriose profunda com sintomas refratários → ginecologia.
- Reavaliar em 3 meses.`,
rx: [
 {trilha: "ambos", titulo: "SUS Betim", texto: `USO ORAL
1. Ibuprofeno 600 mg – 1 comprimido de 8/8h nos dias de dor.
2. Levonorgestrel 0,15 mg + etinilestradiol 0,03 mg – 1 drágea por dia em uso contínuo (sem pausa).
   OU
3. Noretisterona 0,35 mg – 1 comprimido por dia, contínuo.

USO INTRAMUSCULAR (alternativa)
4. Medroxiprogesterona 150 mg/mL – 1 ampola a cada 3 meses.`, dose: "NV", nota: "Noretisterona 0,35 mg é dose contraceptiva; o efeito na dor é menos estudado que o de progestagênios em dose terapêutica."},
 {trilha: "evidencia", titulo: "Progestagênio com melhor evidência", texto: `USO ORAL
1. Dienogeste 2 mg ______ 28 comprimidos
   Tomar 1 comprimido por dia, contínuo.
   OU
2. Desogestrel 75 mcg – 1 comprimido por dia, contínuo.
   OU
PROCEDIMENTO
3. DIU liberador de levonorgestrel 52 mg.`, dose: "NV", nota: "DIU-LNG e desogestrel foram incorporados ao SUS para endometriose em 2025 (notícia; depende de atualização do PCDT e da oferta local)."}
],
orient: `Cólica que atrapalha a vida não é normal e tem tratamento. O hormônio em uso contínuo (sem pausa) reduz a dor na maioria das mulheres.
Anote os dias e a intensidade da dor. Se quiser engravidar, vamos planejar o encaminhamento.`,
alarme: ["Dor que não melhora com o tratamento", "Sangue nas fezes ou urina no período menstrual", "Dor súbita e intensa no baixo ventre", "Dificuldade para engravidar"],
encaminhar: "Refratária a 3–6 meses, endometrioma > 4–5 cm, endometriose profunda, infertilidade → ginecologia (PCDT Endometriose para análogos de GnRH/danazol).",
idealsus: {ideal: "ESHRE 2022: progestagênios (dienogeste, desogestrel, DIU-LNG) ou ACO contínuo com AINE como 1ª linha.", sus: "Betim tem ACO, noretisterona 0,35 mg, medroxiprogesterona trimestral e ibuprofeno. DIU-LNG e desogestrel: incorporação para endometriose noticiada em 2025, sem confirmação de oferta em Betim. Análogos de GnRH e danazol só via PCDT (CEAF).", ponte: "ACO contínuo ou medroxiprogesterona do SUS; dienogeste por compra se falha ou preferência; perguntar à coordenação sobre a oferta de DIU-LNG/desogestrel."},
sus: {nacional: "RENAME 2024: etinilestradiol+levonorgestrel, noretisterona 0,35 mg, medroxiprogesterona 150 mg/mL (Básico); gosserrelina, leuprorrelina, triptorrelina, danazol (Especializado – PCDT Endometriose).", betim: "REMUME Betim: levonorgestrel+etinilestradiol, noretisterona 0,35 mg, medroxiprogesterona 150 mg/mL e ibuprofeno 600 mg disponíveis."},
evid: {resumo: "ESHRE 2022 recomenda tratamento hormonal empírico (progestagênios ou ACO) sem necessidade de laparoscopia diagnóstica. Dienogeste e DIU-LNG têm ECRs com redução de dor; os análogos de GnRH são 2ª linha pelos efeitos adversos.", certeza: "Moderada (estimada)", fontes: ["eshre_endo", "endometriose_news", "rename", "remume"]},
mudancas: ["Preenche a entrada 'Endometriose' do Notion (estava vazia)."],
nv: ["Oferta de DIU-LNG e desogestrel para endometriose em Betim e atualização do PCDT: confirmar.", "Doses: conferir bula."]
},
{
id: "amenorreia", nome: "Amenorreia secundária – avaliação inicial", sistema: "Saúde da mulher", risco: "baixo",
ciap: "X05", cid: "N91.1", tags: "atraso menstrual amenorreia sem menstruar prolactina TSH",
S: `Paciente, ___ anos, sem menstruar há ___ meses (ciclos prévios ___). Possibilidade de gestação ___. Método contraceptivo ___ (DIU hormonal, injetável trimestral?).
Perda de peso, exercício intenso, estresse ___. Galactorreia ___, cefaleia/alteração visual ___. Hirsutismo/acne ___ (SOP). Fogachos ___ (insuficiência ovariana). Sintomas de tireoide ___. Curetagem prévia ___ (Asherman). Medicamentos (antipsicóticos, metoclopramida) ___.`,
O: `BEG.
${VITAIS}  IMC ___
Hirsutismo ___. Galactorreia ___. Tireoide ___. Campos visuais ___.`,
A: `Amenorreia secundária há ___ meses, provável ___ (SOP / hipotalâmica / hiperprolactinemia / insuficiência ovariana / gestação a excluir).`,
P: `- β-hCG em toda paciente.
- TSH, prolactina, FSH (e estradiol); testosterona se hiperandrogenismo.
- Teste do progestagênio é opcional e pouco acurado; avaliar estrogenização pela clínica/USG.
- FSH elevado em < 40 anos (repetido): insuficiência ovariana prematura → reposição hormonal e encaminhamento.
- Prolactina elevada: repetir, excluir medicamentos e hipotireoidismo; RM de sela se persistente.
- Hipotalâmica: abordar peso, exercício, alimentação; atenção à saúde óssea.`,
rx: [
 {trilha: "ambos", titulo: "Conforme a causa", texto: `CONDUTA
1. Solicitar β-hCG, TSH, prolactina, FSH, estradiol.
2. SOP: ver modelo próprio.
3. Proteção endometrial em anovulação crônica (se não usa ACO): medroxiprogesterona 10 mg por dia por 10–12 dias a cada 1–2 meses.`, dose: "NV"}
],
orient: `Ficar sem menstruar tem várias causas, e a maioria é tratável. Vamos fazer exames de sangue para descobrir a causa.
Mesmo sem menstruar, pode haver gravidez: use método contraceptivo se não quiser engravidar.`,
alarme: ["Dor de cabeça forte ou alteração na visão", "Saída de leite pelos mamilos", "Perda de peso importante ou restrição alimentar", "Dor pélvica intensa"],
encaminhar: "Insuficiência ovariana prematura, hiperprolactinemia persistente/tumor, Asherman, causa não esclarecida → ginecologia/endocrinologia.",
sus: {nacional: "RENAME 2024: medroxiprogesterona 10 mg, etinilestradiol+levonorgestrel (Básico); cabergolina e bromocriptina (Especializado – PCDT Hiperprolactinemia).", betim: "REMUME Betim: medroxiprogesterona 10 mg e levonorgestrel+etinilestradiol disponíveis."},
evid: {resumo: "As causas mais frequentes de amenorreia secundária são gestação, SOP, amenorreia hipotalâmica, hiperprolactinemia e insuficiência ovariana prematura; a investigação inicial com β-hCG, TSH, prolactina e FSH esclarece a maioria (ASRM).", certeza: "Moderada (estimada)", fontes: ["amenorreia", "sop_2023", "rename", "remume"]},
mudancas: ["Preenche parte da entrada 'Alterações menstruais' do Notion (estava vazia); sangramento aumentado está no modelo de SUA."],
nv: ["Doses: conferir bula."]
},
// ───────────────────────── CARDIOVASCULAR
{
id: "ic-descompensada", nome: "Insuficiência cardíaca – piora leve (sem congestão grave)", sistema: "Cardiovascular", risco: "alto",
ciap: "K77", cid: "I50.0", tags: "insuficiência cardíaca ICC falta de ar inchaço furosemida dapagliflozina",
alerta: "Dispneia em repouso, SpO₂ < 90%, FR > 25, PAS < 90, confusão, dor torácica, arritmia nova, piora de função renal ou K alterado: urgência.",
S: `Paciente, ___ anos, com IC ___ (FEVE ___% em ___), com piora de dispneia ___ (classe NYHA ___), ortopneia ___, DPN ___, edema ___, ganho de ___ kg em ___ dias.
Gatilhos: adesão a medicamentos ___, sal/líquidos ___, infecção ___, AINE ___, arritmia/palpitação ___, HAS descontrolada ___, isquemia ___.
Medicamentos em uso: ___.`,
O: `___ estado geral, ___ (dispneia ao falar?).
${VITAIS}  Peso ___ kg (seco ___ kg)
Turgência jugular ___. AR: crepitações ___. ACV: ritmo ___, B3 ___. Edema MMII ___. Hepatomegalia ___. Perfusão ___.
ECG: ___.`,
A: `Insuficiência cardíaca ___ (FEVE reduzida / preservada) com congestão leve, sem critérios de internação, desencadeante ___.`,
P: `- Ajustar diurético de alça pelo peso e sintomas; restrição moderada de sal.
- Tratar o desencadeante.
- Exames: creatinina, Na, K, hemograma; ECG.
- ICFEr: otimizar os 4 pilares (IECA/BRA ou sacubitril-valsartana, betabloqueador, espironolactona, iSGLT2) quando estável.
- Reavaliar em 3–7 dias (peso, PA, função renal, K).
- Vacinas: influenza e pneumocócica.`,
rx: [
 {trilha: "ambos", titulo: "Descongestão e terapia de base (SUS Betim)", texto: `USO ORAL
1. Furosemida 40 mg ______ 30 comprimidos
   Tomar 1 comprimido pela manhã (ajustar: dobrar a dose por 3–5 dias se congestão, depois retornar).
2. Enalapril: se ainda não usa IECA, iniciar 2,5–5 mg de 12/12h (½ comprimido de 10 mg) e titular a cada 2 semanas até 10 mg de 12/12h (ou losartana: iniciar 25 mg/dia e titular até 50–100 mg/dia, se tosse por IECA).
3. Carvedilol 3,125 mg – 1 comprimido de 12/12h, dobrando a cada 2 semanas até 25 mg 12/12h (não iniciar/aumentar durante congestão importante).
4. Espironolactona 25 mg – 1 comprimido por dia (K < 5,0 e TFG > 30).`, dose: "NV", nota: "Checar K e creatinina em 1–2 semanas após mudanças."},
 {trilha: "fora", titulo: "iSGLT2 na ICFEr (via CEAF – PCDT ICFEr; não consta na REMUME)", texto: `USO ORAL
1. Dapagliflozina 10 mg ______ 30 comprimidos
   Tomar 1 comprimido por dia.`, dose: "NV", nota: "RENAME: Componente Especializado (PCDT Insuficiência Cardíaca com FE reduzida) para FEVE ≤ 40%, NYHA II–IV, sintomáticos apesar de IECA/BRA, betabloqueador, diurético e espironolactona. Fora desses critérios, por compra."}
],
orient: `Pese-se todos os dias pela manhã, depois de urinar. Se aumentar mais de 2 kg em 3 dias, avise a unidade.
Reduza o sal. Não use anti-inflamatórios. Tome os remédios todos os dias, mesmo se estiver bem.`,
alarme: ["Falta de ar em repouso ou ao deitar", "Precisar dormir sentado", "Ganho de mais de 2 kg em 3 dias", "Desmaio, palpitação ou dor no peito", "Urinar muito pouco ou tontura ao levantar"],
encaminhar: "Sinais de alarme → urgência. ICFEr para otimização/PCDT, IC sem diagnóstico etiológico → cardiologia.",
sus: {nacional: "RENAME 2024: furosemida, enalapril, losartana, carvedilol, espironolactona, digoxina, hidralazina, isossorbida (Básico); dapagliflozina e sacubitril-valsartana (Especializado – PCDT ICFEr).", betim: "REMUME Betim: furosemida 40 mg, enalapril 10 e 20 mg, losartana 50 mg, carvedilol 3,125 e 12,5 mg, espironolactona 25 e 100 mg, digoxina, hidralazina disponíveis."},
evid: {resumo: "Na ICFEr, a combinação dos 4 pilares (IECA/BRA/INRA, betabloqueador, antagonista mineralocorticoide e iSGLT2) reduz mortalidade e hospitalização (ESC 2021/2023). Diuréticos aliviam congestão sem efeito em mortalidade. iSGLT2 também reduz hospitalização na FE preservada.", certeza: "Alta para os 4 pilares na ICFEr (estimada)", fontes: ["esc_ic", "rename", "remume"]},
mudancas: ["Migrado e fundido a partir de 'Dispneia leve em paciente crônico' e 'Exacerbação leve de IC' do Notion.", "Incluída a dapagliflozina via PCDT de ICFEr (Componente Especializado)."],
nv: ["Critérios exatos e documentação do PCDT ICFEr para dapagliflozina: conferir.", "Doses: conferir bula."]
}
);
