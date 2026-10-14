// ───────────── LOTE 3 – revisão 08/10/2026
Object.assign(FONTES, {
  pcdt_escorpiao: {t: "Ministério da Saúde. PCDT Acidentes Escorpiônicos – Portaria SECTICS/MS nº 59, de 01/08/2025 (versão resumida, CONITEC 2026) (norma).", f: "F", url: "https://www.gov.br/conitec/pt-br/midias/protocolos/2026/pcdt-resumido/pcdt_acidentes-escopionicos_f.pdf/@@display-file/file"},
  gvs_tetano: {t: "Ministério da Saúde. Guia de Vigilância em Saúde, 2021 – quadro de profilaxia do tétano após ferimento (reproduzido pela SMS Rio) (norma).", f: "F", url: "https://saude.prefeitura.rio/wp-content/uploads/sites/47/2023/06/Quadro_tetano_profilaxia_raiva.pdf"},
  ms_diarreia: {t: "Ministério da Saúde. Cartaz Manejo do paciente com diarreia – planos A, B e C (versão hospedada pela SES-GO; edição não identificada no documento) (norma/manual MS).", f: "F", url: "https://goias.gov.br/saude/wp-content/uploads/sites/34/2013/08/cartaz-do-manejo-de-paciente-com-diarreia-aguda-fb3.pdf"},
  nice_febre: {t: "NICE NG143. Fever in under 5s: assessment and initial management, 2019 (atualizada 2021) (diretriz).", f: "C", url: ""},
  aap_itu: {t: "AAP. Urinary Tract Infection: Clinical Practice Guideline (febrile infants 2–24 months), 2011, reafirmada 2016 (diretriz).", f: "C", url: ""},
  aap_bronq: {t: "Ralston SL et al. AAP Clinical Practice Guideline: Diagnosis, Management, and Prevention of Bronchiolitis, 2014 (diretriz).", f: "C", url: ""},
  cochrane_ondans: {t: "Cochrane. Antiemetics for reducing vomiting related to acute gastroenteritis in children and adolescents, 2011 (revisão sistemática).", f: "C", url: ""},
  aap_varicela: {t: "AAP Red Book – Varicella-Zoster Infections (referência de pediatria infecciosa).", f: "C", url: ""},
  pediculose: {t: "Cochrane/revisões sobre tratamento da pediculose (dimeticona, permetrina, ivermectina) e AAP Clinical Report Head Lice, 2022.", f: "C", url: ""},
  cochrane_dismen: {t: "Marjoribanks J et al. Nonsteroidal anti-inflammatory drugs for dysmenorrhoea. Cochrane, 2015 (revisão sistemática).", f: "C", url: ""},
  abm_mastite: {t: "Academy of Breastfeeding Medicine. Clinical Protocol #36: The Mastitis Spectrum, 2022 (protocolo).", f: "C", url: ""},
  acog_nvg: {t: "ACOG Practice Bulletin 189: Nausea and Vomiting of Pregnancy, 2018 (diretriz).", f: "C", url: ""},
  itu_gestante: {t: "IDSA 2019 – Asymptomatic Bacteriuria (rastrear e tratar na gestação) e protocolos de pré-natal do MS (Caderno de Atenção Básica 32) (diretriz/manual).", f: "C", url: ""},
  eau_litiase: {t: "EAU Guidelines on Urolithiasis, 2024 (diretriz).", f: "C", url: ""},
  epistaxe: {t: "Tunkel DE et al. AAO-HNS Clinical Practice Guideline: Nosebleed (Epistaxis), 2020 (diretriz).", f: "C", url: ""},
  queimadura: {t: "Wasiak J et al. Dressings for superficial and partial thickness burns. Cochrane, 2013; Ministério da Saúde – Cartilha para tratamento de emergência das queimaduras, 2012.", f: "C", url: ""},
  ada_dente: {t: "ADA/University of Pittsburgh. Evidence-based clinical practice guideline for the management of acute dental pain, 2023/2024; ADA guideline on antibiotics for dental pain, 2019.", f: "C", url: ""},
  sbd: {t: "Sociedade Brasileira de Diabetes. Diretriz da SBD, edição 2024/2025 (diretriz de sociedade).", f: "C", url: ""},
  ada_hipo: {t: "ADA Standards of Care in Diabetes – seção 6 (hipoglicemia), 2025 (diretriz).", f: "C", url: ""}
});

CONDICOES.push(
// ───────────────────────── PEDIATRIA
{
id: "febre-crianca", nome: "Febre sem sinais localizatórios (3 a 36 meses)", sistema: "Pediatria", risco: "alto",
ciap: "A03", cid: "R50.9", tags: "febre criança bebê sem foco toxemia infecção urinária paracetamol",
alerta: "Menor de 3 meses com febre, criança com aspecto toxêmico, petéquias, rigidez de nuca, fontanela abaulada, desconforto respiratório ou desidratação: urgência.",
S: `Criança de ___ meses, com febre de até ___ °C há ___ h/dias, sem foco aparente. Aceitação de líquidos e alimentos: ___. Diurese: ___. Atividade entre os picos: ___ (ativa / prostrada).
Vômitos, diarreia, tosse, choro ao urinar, urina com odor: ___. Convulsão: ___.
Vacinação: ___ (pneumocócica e Hib em dia?). Contatos doentes: ___. Comorbidades/prematuridade: ___.`,
O: `___ (BEG, ativa e reativa / hipoativa). Peso: ___ kg.
Tax ___ °C | FC ___ bpm | FR ___ irpm | SpO₂ ___% | TEC ___ s
Pele: sem petéquias. Fontanela ___. Sinais meníngeos ___ (ausentes).
Otoscopia: MT ___. Oroscopia: ___. AR: MV+, sem esforço. ABD: ___.
EAS/fita urinária: ___ (coletado por ___).`,
A: `Febre sem sinais localizatórios em criança de ___ meses, em bom estado geral, sem sinais de gravidade.`,
P: `- Classificação de risco (sinais de alerta tipo "semáforo" do NICE).
- Exame de urina (EAS + urocultura) se febre ≥ 39 °C sem foco, sobretudo meninas < 24 meses e meninos < 12 meses; coleta por jato médio/sondagem (saco coletor só para triagem).
- Antitérmico apenas para conforto, não para baixar a temperatura a qualquer custo.
- Hidratação e reavaliação em 24–48 h (ou antes se piora); febre > 5 dias: reavaliar (incluir Kawasaki, dengue).
- Orientar sinais de alarme por escrito.`,
rx: [
 {trilha: "ambos", titulo: "Antitérmico", texto: `USO ORAL
1. Paracetamol 200 mg/mL gotas ______ 1 frasco
   Dar 1 gota/kg (10 mg/kg) até de 6/6h se febre com desconforto. Peso ___ kg = ___ gotas.
   OU
2. Dipirona 500 mg/mL gotas ______ 1 frasco
   Dar ___ gotas (≈ 10–15 mg/kg) até de 6/6h se febre com desconforto.`, dose: "NV", nota: "Não alternar antitérmicos de rotina. Dipirona: evitar em < 3 meses ou < 5 kg (bula). Ibuprofeno suspensão é alternativa (não consta na REMUME Betim)."}
],
orient: `A febre é uma defesa do corpo. O remédio é para a criança ficar mais confortável, não precisa zerar a temperatura.
Ofereça líquidos e o peito com frequência. Vista roupas leves.
Volte em 24 a 48 horas para reavaliar, ou antes se aparecer qualquer sinal de alerta.`,
alarme: ["Manchas vermelhas ou roxas que não somem ao apertar", "Muito sonolenta, difícil de acordar ou mole", "Respiração rápida, gemência ou costelas aparecendo", "Vômitos repetidos, recusa de líquidos ou menos fraldas molhadas", "Convulsão", "Febre por mais de 5 dias", "Moleira estufada ou rigidez no pescoço"],
encaminhar: "< 3 meses com febre, aspecto toxêmico ou sinal vermelho do semáforo → urgência. ITU febril em < 3 meses ou com toxemia → urgência.",
sus: {nacional: "RENAME 2024: paracetamol 200 mg/mL, dipirona 500 mg/mL, ibuprofeno 50 mg/mL suspensão (Básico).", betim: "REMUME Betim: paracetamol 200 mg/mL e dipirona 500 mg/mL gotas disponíveis; ibuprofeno suspensão não consta. Acesso a EAS/urocultura com coleta adequada: não verificado."},
evid: {resumo: "Em crianças de 3 a 36 meses vacinadas para pneumococo e Hib, a bacteremia oculta tornou-se rara e a ITU é a infecção bacteriana grave mais comum na febre sem foco. Antitérmico não previne convulsão febril. A avaliação por sinais de gravidade (NICE) orienta quem precisa de investigação imediata.", certeza: "Moderada (estimada)", fontes: ["nice_febre", "aap_itu", "rename", "remume"]},
mudancas: ["Entrada nova (o Notion tinha 'Febre de origem indeterminada' para adulto)."],
nv: ["Doses pediátricas: conferir bula e peso.", "Critérios de coleta de urina por idade/sexo: conferir protocolo municipal."]
},
{
id: "bronquiolite", nome: "Bronquiolite viral aguda", sistema: "Pediatria", risco: "alto",
ciap: "R78", cid: "J21.9", tags: "bebê chiado sibilância VSR tosse cansaço lactente",
alerta: "SpO₂ < 92%, apneia, desconforto respiratório moderado/grave, recusa alimentar (< 50% da ingestão), desidratação, < 3 meses, prematuro ou cardiopata: urgência/internação.",
S: `Lactente de ___ meses, com coriza há ___ dias evoluindo com tosse, chiado e cansaço. Primeiro episódio de sibilância: ___. Febre: ___.
Aceitação de mamadas: ___ % do habitual. Diurese: ___. Pausas respiratórias: ___.
Prematuridade: ___ (IG ___). Cardiopatia, doença pulmonar, imunodeficiência: ___. Tabagismo domiciliar: ___.`,
O: `___ (BEG/REG), peso ___ kg.
FR ___ irpm | FC ___ bpm | SpO₂ ___% (AA) | Tax ___ °C
Tiragem ___ (ausente / subcostal leve / intercostal / fúrcula), batimento de asa nasal ___, gemência ___.
AR: sibilos ___ e crepitações finas ___ difusos. Hidratação: ___.`,
A: `Bronquiolite viral aguda ___ (leve), sem critérios de internação.`,
P: `- Tratamento de suporte: aspiração/lavagem nasal com SF antes das mamadas, mamadas menores e mais frequentes, cabeceira elevada.
- Não indicados de rotina: salbutamol, corticoide, antibiótico, nebulização com SF, fisioterapia respiratória.
- Antitérmico se febre com desconforto.
- Reavaliação em 24–48 h (pico entre o 3º e o 5º dia).
- Orientar sinais de alarme e evitar fumaça.`,
rx: [
 {trilha: "ambos", titulo: "Suporte", texto: `USO NASAL
1. Soro fisiológico 0,9% ______ 1 frasco
   Pingar 1 a 2 mL em cada narina e aspirar antes das mamadas e quando houver obstrução.

USO ORAL
2. Paracetamol 200 mg/mL gotas ______ 1 frasco
   Dar 1 gota/kg até de 6/6h se febre com desconforto. Peso ___ kg = ___ gotas.`, dose: "NV"}
],
orient: `A bronquiolite é causada por vírus e costuma piorar até o 3º a 5º dia, melhorando depois. A tosse pode durar até 3 semanas.
Limpe o nariz com soro antes das mamadas. Ofereça o peito ou a mamadeira em pequenas quantidades, mais vezes.
Remédios para chiado, xarope e antibiótico não ajudam nesse caso. Não fume perto do bebê.`,
alarme: ["Respiração muito rápida ou costelas afundando", "Pausas na respiração ou lábios arroxeados", "Mamando menos da metade do habitual", "Menos fraldas molhadas", "Muito sonolento ou gemendo"],
encaminhar: "Qualquer critério de gravidade, < 3 meses, prematuro < 35 semanas ou comorbidade → urgência.",
sus: {nacional: "RENAME 2024: cloreto de sódio 0,9% nasal, paracetamol 200 mg/mL (Básico); palivizumabe para grupos específicos (Estratégico).", betim: "REMUME Betim: soro fisiológico 0,9% e paracetamol 200 mg/mL disponíveis."},
evid: {resumo: "A AAP 2014 recomenda não usar broncodilatador, corticoide, epinefrina, antibiótico nem fisioterapia de rotina, por ausência de benefício em desfechos clínicos. O tratamento é de suporte (hidratação e oxigênio se SpO₂ < 90–92%).", certeza: "Moderada a alta para ausência de benefício (estimada)", fontes: ["aap_bronq", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Doses: conferir bula.", "Imunização passiva contra VSR disponível no SUS em 2026 (palivizumabe/nirsevimabe): não verificada."]
},
{
id: "diarreia-crianca", nome: "Diarreia aguda na criança", sistema: "Pediatria", risco: "alto",
ciap: "D73", cid: "A09", tags: "diarreia criança desidratação soro plano A B C zinco vômito",
alerta: "Desidratação grave (letargia, olhos muito fundos, bebe mal, prega > 2 s) = Plano C: hidratação venosa e transferência. Disenteria com comprometimento do estado geral: antibiótico e reavaliação em 48 h.",
S: `Criança de ___ anos/meses, com ___ evacuações líquidas/dia há ___ dias. Sangue nas fezes: ___. Vômitos: ___. Febre: ___.
Aceitação de líquidos: ___. Diurese: ___. Aleitamento materno: ___.
Contatos com quadro semelhante: ___. Vacina rotavírus: ___. Estado nutricional: ___.`,
O: `Peso ___ kg (anterior ___ kg).
Estado geral: ___ (alerta / irritado / letárgico). Olhos: ___. Lágrimas: ___. Sede: ___ (normal / bebe avidamente / bebe mal). Prega cutânea: ___ (desaparece rápido / lentamente / > 2 s). Pulso: ___. TEC ___ s.
ABD: ___.`,
A: `Diarreia aguda ___ (aquosa / com sangue), ___ (sem desidratação – Plano A / com desidratação – Plano B / desidratação grave – Plano C).`,
P: `- Plano A: líquidos após cada evacuação, manter alimentação e aleitamento, zinco por 10 a 14 dias, sinais de alerta.
- Plano B: SRO 50–100 mL/kg em 4–6 h na unidade, reavaliando; reidratada → Plano A.
- Plano C: SF 0,9% 20 mL/kg em 30 min (< 5 anos) e transferência.
- Antibiótico só se disenteria com comprometimento do estado geral.
- Reavaliação em 48 h se não melhorar.`,
rx: [
 {trilha: "ambos", titulo: "Plano A – domicílio (MS)", texto: `USO ORAL
1. Sais para reidratação oral ______ ___ envelopes
   Diluir 1 envelope em 1 litro de água. Oferecer após cada evacuação:
   < 1 ano: 50 a 100 mL | 1 a 10 anos: 100 a 200 mL | > 10 anos: o que aceitar.`, dose: "F"},
 {trilha: "evidencia", titulo: "Zinco (MS) – fora da REMUME Betim", texto: `USO ORAL
1. Sulfato de zinco 4 mg/mL xarope ______ 1 frasco
   Até 6 meses: 10 mg/dia (2,5 mL) 1 vez ao dia por 10 a 14 dias.
   Acima de 6 meses: 20 mg/dia (5 mL) 1 vez ao dia por 10 a 14 dias.`, dose: "F", nota: "Recomendado no cartaz do MS e na RENAME 2024 (Básico), mas não consta na REMUME Betim. Confirmar com a farmácia municipal antes de indicar compra."},
 {trilha: "ambos", titulo: "Plano B – na unidade (MS)", texto: `SRO 50 a 100 mL/kg em 4 a 6 horas = ___ mL (peso ___ kg), oferecido continuamente, conforme a sede.
Reavaliar a cada hora. Sem sinais de desidratação → Plano A. Persistência → gastróclise. Piora → Plano C.`, dose: "F"},
 {trilha: "ambos", titulo: "Disenteria com comprometimento do estado geral (MS)", texto: `USO ORAL
1. Ciprofloxacino – 15 mg/kg/dose de 12/12h por 3 dias (máx. 500 mg/dose) = ___ mg.
   (Comprimido 500 mg em Betim; fracionar ou manipular conforme peso.)
   Alternativa: ceftriaxona 50 a 100 mg/kg IM 1 vez ao dia por 2 a 5 dias.`, dose: "F", nota: "Reavaliar em 48 h; sangue persistente em criança → internar."},
 {trilha: "evidencia", titulo: "Vômitos que impedem a TRO – ondansetrona", texto: `USO ORAL
1. Ondansetrona 4 mg (comprimido orodispersível) – dose única na unidade antes do SRO:
   8–15 kg: 2 mg | 15–30 kg: 4 mg | > 30 kg: 8 mg.`, dose: "NV", nota: "Cochrane: reduz vômitos e necessidade de hidratação venosa. O cartaz do MS desaconselha antieméticos. Betim só tem ondansetrona injetável."}
],
orient: `O mais importante é repor o líquido perdido. Ofereça o soro após cada evacuação, aos poucos, de colher ou copinho.
Continue amamentando e oferecendo a comida habitual, em porções menores.
Dê o zinco por 10 a 14 dias, mesmo se a diarreia passar antes.
Não use remédio para parar a diarreia.`,
alarme: ["Piora da diarreia ou vômitos repetidos", "Muita sede", "Recusa de alimentos e líquidos", "Sangue nas fezes", "Menos xixi ou fralda seca por muitas horas", "Sem melhora em 2 dias", "Criança muito sonolenta ou mole"],
encaminhar: "Plano C, falha do Plano B, desnutrição grave, < 2 meses com desidratação → urgência.",
idealsus: {ideal: "Zinco por 10–14 dias (recomendado pelo próprio MS) reduz duração da diarreia em crianças > 6 meses; ondansetrona em dose única reduz falha da hidratação oral quando há vômitos.", sus: "SRO, ciprofloxacino e ceftriaxona estão na REMUME Betim. Zinco e ondansetrona oral estão na RENAME 2024, mas não na REMUME Betim.", ponte: "Verificar com a farmácia municipal se há zinco por outra via; se não, orientar compra (xarope de baixo custo). Ondansetrona só se vômitos impedem a reidratação."},
sus: {nacional: "RENAME 2024: SRO, sulfato de zinco 4 mg/mL e 10 mg, ondansetrona 4 e 8 mg comprimido e orodispersível, ciprofloxacino, ceftriaxona (Básico).", betim: "REMUME Betim: SRO, ciprofloxacino 500 mg, ceftriaxona 1 g IM e IV disponíveis. Zinco não consta; ondansetrona só injetável."},
evid: {resumo: "Os planos A/B/C do MS seguem a OMS. Zinco reduz duração e gravidade da diarreia em crianças > 6 meses em países de renda baixa e média. Ondansetrona reduz vômitos e hidratação venosa (Cochrane). Antibiótico só tem papel na disenteria.", certeza: "Moderada (estimada)", fontes: ["ms_diarreia", "cochrane_ondans", "rename", "remume"]},
divergencia: "Cartaz do MS: não usar antieméticos. Evidência posterior (Cochrane 2011, ECR): ondansetrona em dose única reduz falha da TRO sem eventos graves. Razoável usar em criança com vômitos que impedem a reidratação oral, onde houver o medicamento.",
mudancas: ["Entrada nova; complementa o modelo de diarreia do adulto."],
nv: ["Dose de ondansetrona por peso: conferir bula.", "Fracionamento do ciprofloxacino 500 mg para crianças: conferir com farmácia."]
},
{
id: "varicela", nome: "Varicela (catapora)", sistema: "Pediatria", risco: "moderado",
ciap: "A72", cid: "B01.9", tags: "catapora vesículas febre coceira aciclovir criança surto",
alerta: "Não usar AAS (síndrome de Reye) nem, de preferência, ibuprofeno (associação com infecção grave de pele). Gestante, recém-nascido e imunossuprimido expostos: avaliar imunoglobulina (CRIE).",
S: `Paciente de ___ anos com febre e lesões pruriginosas há ___ dias, iniciadas em ___ (tronco/face), em surtos. Contato com caso: ___.
Vacina varicela: ___ doses. Comorbidades/imunossupressão/uso de corticoide: ___. Gestantes ou imunossuprimidos no domicílio: ___.`,
O: `BEG, Tax ___ °C.
Pele: lesões em diferentes estágios (máculas, pápulas, vesículas, crostas) em tronco, face, couro cabeludo, mucosa oral. Sinais de infecção secundária ___ (eritema, calor, pus).
AR: ___. Neuro: ___ (marcha e equilíbrio preservados).`,
A: `Varicela ___ (não complicada).`,
P: `- Sintomáticos (paracetamol), cuidados com a pele, unhas curtas.
- Aciclovir se ≥ 13 anos, adulto, doença crônica de pele ou pulmão, uso de corticoide/AAS crônico, ou caso secundário domiciliar, iniciado em até 24 h do exantema.
- Afastamento até todas as lesões estarem em crosta.
- Notificação: casos graves, óbitos e surtos.
- Vacinar contactantes suscetíveis (até 5 dias após exposição) conforme regra do PNI.`,
rx: [
 {trilha: "ambos", titulo: "Sintomáticos", texto: `USO ORAL
1. Paracetamol – 10 a 15 mg/kg/dose até de 6/6h se febre ou dor (gotas 200 mg/mL: 1 gota/kg).
2. Loratadina 1 mg/mL – ≥ 2 anos e ≤ 30 kg: 5 mL 1 vez ao dia; > 30 kg: 10 mL ou 1 comprimido de 10 mg, se prurido.`, dose: "NV"},
 {trilha: "ambos", titulo: "Antiviral (indicações acima)", texto: `USO ORAL
1. Aciclovir 200 mg ______ ___ comprimidos
   Criança: 20 mg/kg/dose (máximo 800 mg) 4 vezes ao dia por 5 dias = ___ mg/dose.
   ≥ 13 anos/adulto: 800 mg (4 comprimidos) 5 vezes ao dia por 7 dias.`, dose: "NV", nota: "Benefício pequeno em criança saudável; iniciar em até 24 h."}
],
orient: `A catapora passa para outras pessoas até todas as bolhas virarem casquinha (cerca de 5 a 7 dias). A criança deve ficar em casa nesse período.
Corte as unhas e dê banho com água morna para aliviar a coceira. Não use AAS.
Afaste a criança de gestantes, recém-nascidos e pessoas com imunidade baixa.`,
alarme: ["Febre que volta ou persiste após 4 dias", "Lesão vermelha, quente, dolorida ou com pus", "Falta de ar ou tosse forte", "Dificuldade para andar, desequilíbrio ou sonolência", "Vômitos repetidos", "Manchas roxas ou sangramento"],
encaminhar: "Pneumonia, encefalite/ataxia, infecção bacteriana grave, varicela hemorrágica, imunossuprimido → urgência. Exposição de gestante, RN ou imunossuprimido → CRIE/vigilância.",
sus: {nacional: "RENAME 2024: aciclovir 200 mg, paracetamol, loratadina (Básico); vacina varicela e imunoglobulina antivaricela-zoster (Estratégico).", betim: "REMUME Betim: aciclovir 200 mg, paracetamol 200 mg/mL e 500 mg, loratadina 10 mg e 1 mg/mL disponíveis. Aciclovir suspensão não consta."},
evid: {resumo: "Aciclovir iniciado em até 24 h reduz cerca de 1 dia de febre e o número de lesões em crianças saudáveis, sem efeito comprovado em complicações; por isso é indicado de rotina em adolescentes, adultos e grupos de risco. AAS associa-se a síndrome de Reye.", certeza: "Moderada (estimada)", fontes: ["aap_varicela", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Doses de aciclovir e loratadina: conferir bula e peso.", "Regras de vacinação de bloqueio e notificação vigentes: conferir com a vigilância municipal."]
},
{
id: "maopeboca", nome: "Doença mão-pé-boca", sistema: "Pediatria", risco: "baixo",
ciap: "A76", cid: "B08.4", tags: "aftas boca bolhas mãos pés coxsackie enterovírus creche",
S: `Criança de ___ anos com febre baixa e lesões dolorosas na boca há ___ dias, seguidas de lesões em mãos, pés e/ou região das fraldas. Aceitação de líquidos: ___. Diurese: ___. Contatos na creche: ___.`,
O: `BEG, hidratada ___.
Orofaringe: vesículas/úlceras rasas em língua, mucosa jugal, palato. Pele: vesículas ovais em palmas, plantas, nádegas.
Neuro: ___ (sem alterações; sem mioclonias, ataxia).`,
A: `Doença mão-pé-boca, sem desidratação ou sinais neurológicos.`,
P: `- Analgesia e hidratação (líquidos frios, alimentos pastosos).
- Afastamento da creche enquanto houver febre e lesões abertas.
- Higiene das mãos e troca de fraldas (vírus nas fezes por semanas).
- Retorno se recusa de líquidos ou sinais neurológicos.`,
rx: [
 {trilha: "ambos", titulo: "Analgesia", texto: `USO ORAL
1. Paracetamol 200 mg/mL gotas ______ 1 frasco
   Dar 1 gota/kg até de 6/6h se dor ou febre. Peso ___ kg = ___ gotas.
   OU
2. Dipirona 500 mg/mL gotas – ___ gotas até de 6/6h.`, dose: "NV"}
],
orient: `É uma virose comum em crianças pequenas e melhora em 7 a 10 dias.
As feridas na boca doem: ofereça líquidos e comidas frios e pastosos (sorvete, iogurte, purê). Evite alimentos ácidos e salgados.
O vírus sai nas fezes por semanas: lave bem as mãos após trocar fraldas.`,
alarme: ["Não aceita líquidos ou faz pouco xixi", "Sonolência, irritabilidade intensa ou tremores", "Dificuldade para andar ou fraqueza", "Respiração rápida", "Febre por mais de 3 dias"],
encaminhar: "Desidratação ou sinais neurológicos (mioclonia, ataxia, letargia) → urgência.",
sus: {nacional: "RENAME 2024: paracetamol e dipirona (Básico).", betim: "REMUME Betim: paracetamol 200 mg/mL e dipirona 500 mg/mL disponíveis."},
evid: {resumo: "Doença autolimitada por enterovírus; não há antiviral. O manejo é de suporte com atenção a desidratação e complicações neurológicas raras (associadas sobretudo ao enterovírus 71).", certeza: "Baixa (sem ECR de tratamento; consenso)", fontes: ["rename", "remume", "cab28"]},
mudancas: ["Entrada nova."],
nv: ["Doses pediátricas: conferir bula."]
},
{
id: "pediculose", nome: "Pediculose da cabeça (piolho)", sistema: "Pediatria", risco: "baixo",
ciap: "S73", cid: "B85.0", tags: "piolho lêndea coceira cabeça escola permetrina ivermectina",
S: `Criança de ___ anos com prurido no couro cabeludo há ___ dias; piolhos/lêndeas vistos por ___. Contactantes com piolho: ___. Tratamentos já feitos: ___ (quais, como).
Peso: ___ kg.`,
O: `BEG.
Couro cabeludo: piolhos vivos ___ e lêndeas a < 1 cm do couro cabeludo ___, principalmente na nuca e atrás das orelhas. Escoriações/infecção secundária: ___. Linfonodos cervicais: ___.`,
A: `Pediculose da cabeça ___ (sem / com) infecção secundária.`,
P: `- Tratar apenas quem tem piolho vivo; examinar contactantes.
- Pediculicida tópico com 2ª aplicação em 7–10 dias.
- Pente fino em cabelo úmido a cada 3–4 dias por 2 semanas.
- Não é necessário afastar da escola.`,
rx: [
 {trilha: "evidencia", titulo: "Dimeticona 4% (sem resistência)", texto: `USO TÓPICO
1. Dimeticona 4% loção ______ 1 frasco
   Aplicar no cabelo seco até saturar, deixar por 8 h (ou conforme bula) e lavar. Repetir em 7 dias.`, dose: "NV", nota: "Mecanismo físico: não há resistência. Não consta na RENAME nem na REMUME."},
 {trilha: "fora", titulo: "Permetrina 1% (RENAME, não consta na REMUME)", texto: `USO TÓPICO
1. Permetrina 1% loção ______ 1 frasco
   Aplicar no cabelo lavado e úmido, deixar 10 minutos, enxaguar. Repetir em 7 a 10 dias.`, dose: "NV", nota: "Resistência dos piolhos à permetrina é frequente."},
 {trilha: "sus", titulo: "Ivermectina oral (SUS Betim, ≥ 15 kg)", texto: `USO ORAL
1. Ivermectina 6 mg ______ ___ comprimidos
   Tomar 200 mcg/kg em dose única; repetir em 7 a 10 dias.
   15–24 kg ½ cp; 25–35 kg 1 cp; 36–50 kg 1½ cp; 51–65 kg 2 cp; 66–79 kg 2½ cp.`, dose: "NV", nota: "Uso fora de bula para pediculose em algumas apresentações; não usar em < 15 kg, gestantes e lactantes."}
],
orient: `Piolho não tem relação com falta de higiene e não precisa afastar a criança da escola.
Passe o pente fino no cabelo molhado com condicionador a cada 3 ou 4 dias por 2 semanas.
Repita o tratamento na data marcada. Examine todos da casa e trate só quem tiver piolho vivo.
Lave pentes, escovas e fronhas em água quente.`,
alarme: ["Feridas com pus ou crostas no couro cabeludo", "Ínguas dolorosas no pescoço", "Piolhos vivos após 2 tratamentos corretos"],
encaminhar: "Falha após 2 tratamentos corretos → trocar classe de pediculicida.",
idealsus: {ideal: "Dimeticona 4% tem cura alta e não sofre resistência; permetrina perdeu eficácia pela resistência; ivermectina oral é eficaz para casos refratários.", sus: "REMUME Betim só tem ivermectina 6 mg. Permetrina 1% está na RENAME, mas não na REMUME. Dimeticona não consta.", ponte: "Ivermectina do SUS para crianças ≥ 15 kg. Dimeticona por compra para < 15 kg, ou para quem prefere tratamento tópico."},
sus: {nacional: "RENAME 2024: permetrina 1% loção e ivermectina 6 mg (Básico). Dimeticona não consta.", betim: "REMUME Betim: ivermectina 6 mg disponível; permetrina não consta."},
evid: {resumo: "Dimeticona 4% teve taxas de cura em ECR iguais ou superiores à permetrina, sem risco de resistência. Ivermectina oral em 2 doses foi superior ao malation tópico em ECR (NEJM 2010). A resistência à permetrina é ampla.", certeza: "Moderada (estimada)", fontes: ["pediculose", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Tempo de aplicação da dimeticona varia por produto: conferir bula.", "Tabela de ivermectina por peso: conferir bula."]
},
{
id: "dermatite-fraldas", nome: "Dermatite da área das fraldas", sistema: "Pediatria", risco: "baixo",
ciap: "S89", cid: "L22", tags: "assadura fralda bebê candidíase monília pomada óxido de zinco",
S: `Lactente de ___ meses com vermelhidão na área das fraldas há ___ dias. Frequência de trocas: ___. Uso de lenço umedecido/produtos: ___. Diarreia ou antibiótico recente: ___. Candidíase oral: ___.`,
O: `BEG.
Área das fraldas: eritema ___ (em áreas de contato, poupando dobras – irritativa / vermelho vivo com lesões satélites e acometendo dobras – candidíase). Erosões ___. Oroscopia: placas brancas ___.`,
A: `Dermatite das fraldas ___ (irritativa / com candidíase associada).`,
P: `- Trocas frequentes, limpeza com água morna, períodos sem fralda.
- Pasta de barreira com óxido de zinco a cada troca.
- Candidíase: antifúngico tópico 2 vezes ao dia por 7–14 dias, sob a barreira.
- Evitar corticoide de média/alta potência e produtos perfumados.
- Retorno se sem melhora em 7 dias.`,
rx: [
 {trilha: "fora", titulo: "Barreira – óxido de zinco (RENAME, não consta na REMUME)", texto: `USO TÓPICO
1. Pasta de óxido de zinco 25% ______ 1 bisnaga
   Aplicar camada generosa a cada troca de fralda.`, dose: "NV", nota: "Opção de baixo custo para compra quando a farmácia municipal não tiver."},
 {trilha: "ambos", titulo: "Se candidíase (SUS Betim)", texto: `USO TÓPICO
1. Cetoconazol 2% creme ______ 1 bisnaga
   Aplicar fina camada 2 vezes ao dia por 7 a 14 dias, antes da pasta de barreira.`, dose: "NV", nota: "Azóis tópicos (miconazol, clotrimazol, cetoconazol) são equivalentes; miconazol dermatológico está na RENAME."}
],
orient: `Troque a fralda assim que estiver molhada ou suja. Limpe com água morna e algodão, sem esfregar.
Deixe o bebê alguns períodos sem fralda. Passe a pasta em camada grossa a cada troca.
Evite lenços com perfume ou álcool.`,
alarme: ["Bolhas, feridas com pus ou crostas amareladas", "Febre", "Lesões que se espalham para fora da área das fraldas", "Sem melhora em 1 semana"],
encaminhar: "Lesões atípicas ou refratárias (psoríase, dermatite seborreica extensa, deficiência de zinco) → reavaliação/dermatologia.",
sus: {nacional: "RENAME 2024: pasta de óxido de zinco 25%, miconazol 2% creme dermatológico, nistatina suspensão oral (Básico).", betim: "REMUME Betim: cetoconazol 2% creme e nistatina suspensão oral disponíveis. Óxido de zinco e miconazol dermatológico não constam."},
evid: {resumo: "Medidas de barreira e trocas frequentes são a base, com evidência de qualidade limitada. Na candidíase, azóis tópicos são eficazes. Corticoides de potência média ou alta na área ocluída aumentam absorção e efeitos adversos.", certeza: "Baixa (estimada)", fontes: ["rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Cetoconazol creme em lactentes: conferir bula (idade mínima)."]
},
// ───────────────────────── SAÚDE DA MULHER
{
id: "dismenorreia", nome: "Dismenorreia primária", sistema: "Saúde da mulher", risco: "baixo",
ciap: "X02", cid: "N94.6", tags: "cólica menstrual dor menstruação anti-inflamatório",
S: `Paciente, ___ anos, com cólica em baixo ventre que começa ___ (horas antes / no 1º dia) da menstruação e dura ___ dias, intensidade ___/10, desde ___ (menarca há ___ anos).
Falta à escola/trabalho: ___. Dispareunia, dor fora da menstruação, sangramento aumentado, infertilidade: ___ (sugerem causa secundária). Atividade sexual/contracepção: ___.`,
O: `BEG.
ABD: flácido, indolor fora da crise. (Exame ginecológico se sinais de causa secundária: ___.)`,
A: `Dismenorreia primária.`,
P: `- AINE iniciado 1–2 dias antes ou no início da menstruação, em horário fixo nos primeiros dias.
- Calor local, atividade física.
- Se deseja contracepção ou AINE insuficiente: anticoncepcional hormonal combinado ou de progestagênio.
- Sinais de causa secundária (endometriose, mioma, DIP): investigar.`,
rx: [
 {trilha: "ambos", titulo: "AINE", texto: `USO ORAL
1. Ibuprofeno 600 mg ______ 1 caixa
   Tomar 1 comprimido de 8/8h, começando no 1º dia (ou na véspera) da menstruação, por 2 a 3 dias.`, dose: "NV"},
 {trilha: "ambos", titulo: "Se desejar contracepção ou AINE insuficiente", texto: `USO ORAL
1. Levonorgestrel 0,15 mg + etinilestradiol 0,03 mg ______ 1 cartela
   Tomar 1 drágea por dia, no mesmo horário, por 21 dias; pausa de 7 dias. Pode ser usado em regime estendido.`, dose: "NV", nota: "Checar critérios de elegibilidade da OMS (enxaqueca com aura, tabagismo ≥ 35 anos, HAS, TVP)."}
],
orient: `O anti-inflamatório funciona melhor se começar logo no início da menstruação, em horário fixo.
Bolsa de água morna e atividade física regular ajudam.
Se a dor mudar, piorar com o tempo ou vier fora da menstruação, volte para avaliar.`,
alarme: ["Dor fora do período menstrual ou durante a relação", "Febre ou corrimento com dor", "Sangramento menstrual muito intenso", "Atraso menstrual com dor (gravidez?)"],
encaminhar: "Suspeita de endometriose ou causa secundária refratária → ginecologia.",
sus: {nacional: "RENAME 2024: ibuprofeno, etinilestradiol + levonorgestrel 0,03/0,15 mg, noretisterona 0,35 mg, medroxiprogesterona (Básico).", betim: "REMUME Betim: ibuprofeno 600 mg, levonorgestrel + etinilestradiol 0,15/0,03 mg, noretisterona 0,35 mg, medroxiprogesterona 150 mg/mL disponíveis."},
evid: {resumo: "AINEs são mais eficazes que placebo e paracetamol na dismenorreia primária (Cochrane 2015), sem diferença clara entre eles. Anticoncepcionais hormonais reduzem a dor, sobretudo em regime estendido.", certeza: "Moderada (estimada)", fontes: ["cochrane_dismen", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Doses: conferir bula."]
},
{
id: "mastite", nome: "Mastite lactacional", sistema: "Saúde da mulher", risco: "moderado",
ciap: "X21", cid: "O91.2", tags: "amamentação mama vermelha dolorida febre ingurgitamento abscesso cefalexina",
S: `Puérpera, ___ anos, ___ semanas pós-parto, com dor, vermelhidão e endurecimento em mama ___ há ___ dias. Febre: ___ °C. Calafrios, mal-estar: ___.
Fissuras, ingurgitamento, mamadas espaçadas, uso de bomba: ___. Pega: ___. Alergias: ___.`,
O: `BEG/REG.
${VITAIS}
Mama ___: área de eritema, calor e dor em quadrante ___, ___ cm. Flutuação ___ (abscesso?). Fissuras ___. Linfonodo axilar ___.
Avaliação da mamada: ___.`,
A: `Mastite lactacional ___ (inflamatória / com sinais de infecção bacteriana), sem abscesso.`,
P: `- Manter amamentação conforme demanda; não esvaziar além do habitual com bomba (piora a inflamação).
- Gelo após mamadas, AINE, apoio à pega.
- Antibiótico se febre/sintomas sistêmicos persistentes > 24–48 h, fissura infectada ou piora.
- Flutuação → USG e drenagem.
- Reavaliação em 48 h.`,
rx: [
 {trilha: "ambos", titulo: "Anti-inflamatório (compatível com amamentação)", texto: `USO ORAL
1. Ibuprofeno 600 mg ______ 15 comprimidos
   Tomar 1 comprimido de 8/8h após as refeições por 5 dias.`, dose: "NV"},
 {trilha: "ambos", titulo: "Antibiótico (se indicado)", texto: `USO ORAL
1. Cefalexina 500 mg ______ 40 comprimidos
   Tomar 1 comprimido de 6/6h por 10 dias.
   Alergia à penicilina: clindamicina 300 mg de 6/6h por 10 dias.`, dose: "NV"}
],
orient: `Continue amamentando, inclusive na mama afetada: o leite não faz mal ao bebê.
Amamente em livre demanda, mas não tire leite extra com bomba além do necessário.
Gelo envolvido em pano após as mamadas alivia. O anti-inflamatório é seguro na amamentação.`,
alarme: ["Febre alta persistente após 48 h de antibiótico", "Caroço mole e dolorido (abscesso)", "Vermelhidão que se espalha rapidamente", "Mal-estar importante, tontura ou confusão"],
encaminhar: "Abscesso → USG e drenagem. Sepse → urgência.",
sus: {nacional: "RENAME 2024: cefalexina, clindamicina, ibuprofeno (Básico).", betim: "REMUME Betim: cefalexina 500 mg, clindamicina 300 mg, ibuprofeno 600 mg disponíveis."},
evid: {resumo: "O protocolo ABM 2022 trata a mastite como espectro inflamatório: reduzir esvaziamento excessivo, gelo e AINE, reservando antibiótico para mastite bacteriana. Cefalexina e dicloxacilina cobrem S. aureus sensível.", certeza: "Baixa (estimada; poucos ECR)", fontes: ["abm_mastite", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Doses: conferir bula."]
},
{
id: "itu-gestante", nome: "ITU na gestante (cistite e bacteriúria)", sistema: "Saúde da mulher", risco: "alto",
ciap: "U71 · W99", cid: "O23.1 · O23.4", tags: "infecção urinária gravidez pré-natal urocultura bacteriúria assintomática cefalexina",
alerta: "Gestante com febre, dor lombar, vômitos ou sinais de sepse: pielonefrite = urgência/internação.",
S: `Gestante, ___ anos, IG ___ semanas, com ___ (disúria, polaciúria, urgência / assintomática com urocultura positiva). Febre: ___. Dor lombar: ___. Contrações/perda de líquido: ___.
Episódios prévios nesta gestação: ___. Alergias: ___.`,
O: `BEG, Tax ___ °C.
${VITAIS}
Giordano ___. AU ___ cm, BCF ___ bpm, dinâmica uterina ___.
Urocultura: ___ (agente ___, ≥ 100.000 UFC/mL, sensível a ___).`,
A: `___ (Cistite aguda / bacteriúria assintomática) na gestação, IG ___ semanas, sem sinais de pielonefrite ou trabalho de parto.`,
P: `- Tratar sempre (inclusive bacteriúria assintomática), guiado pela urocultura quando disponível.
- Cistite sintomática: iniciar empiricamente e ajustar pelo antibiograma.
- Urocultura de controle 1–2 semanas após o fim do tratamento e depois mensal/trimestral conforme protocolo.
- Recorrência (≥ 2 episódios): profilaxia até o fim da gestação.`,
rx: [
 {trilha: "ambos", titulo: "Empírico / conforme antibiograma", texto: `USO ORAL
1. Cefalexina 500 mg ______ 28 comprimidos
   Tomar 1 comprimido de 6/6h por 7 dias.
   OU
2. Amoxicilina 500 mg ______ 21 cápsulas
   Tomar 1 cápsula de 8/8h por 7 dias (somente se sensível no antibiograma).
   OU
3. Nitrofurantoína 100 mg ______ 28 cápsulas
   Tomar 1 cápsula de 6/6h por 7 dias (evitar a partir de 36–38 semanas e no 1º trimestre se houver alternativa).`, dose: "NV", nota: "Evitar quinolonas. Sulfametoxazol+trimetoprima: evitar no 1º trimestre e no termo."}
],
orient: `Na gravidez, mesmo infecção urinária sem sintomas precisa ser tratada, porque pode subir para o rim e causar parto prematuro.
Tome o antibiótico até o fim. Faremos nova cultura de urina depois do tratamento.
Beba bastante água e não segure a urina.`,
alarme: ["Febre ou calafrios", "Dor nas costas ou no lado do corpo", "Vômitos", "Contrações, sangramento ou perda de líquido", "Diminuição dos movimentos do bebê"],
encaminhar: "Pielonefrite, sinais de trabalho de parto prematuro ou sepse → maternidade/urgência.",
sus: {nacional: "RENAME 2024: cefalexina, amoxicilina, nitrofurantoína (Básico).", betim: "REMUME Betim: cefalexina 500 mg, amoxicilina 500 mg, nitrofurantoína 100 mg disponíveis."},
evid: {resumo: "Tratar bacteriúria assintomática na gestação reduz pielonefrite (IDSA 2019, Cochrane), embora a magnitude seja menor em estudos recentes. Betalactâmicos e nitrofurantoína são as opções mais usadas; escolha deve seguir o antibiograma.", certeza: "Moderada (estimada)", fontes: ["itu_gestante", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Doses e restrições por trimestre: conferir bula e protocolo de pré-natal municipal."]
},
{
id: "nvg", nome: "Náuseas e vômitos da gestação", sistema: "Saúde da mulher", risco: "moderado",
ciap: "W05", cid: "O21.0", tags: "enjoo gravidez vômito hiperêmese piridoxina metoclopramida",
alerta: "Perda de peso > 5%, desidratação, cetonúria, incapacidade de manter líquidos ou alteração eletrolítica: hiperêmese gravídica → avaliação hospitalar.",
S: `Gestante, ___ anos, IG ___ semanas, com náuseas ___ e vômitos ___ vezes/dia há ___ semanas. Aceita líquidos: ___. Diurese: ___. Perda de peso: ___ kg.
Dor abdominal, febre, diarreia, cefaleia, sintomas urinários: ___ (afastar outras causas). PUQE: ___.`,
O: `BEG, hidratada ___.
${VITAIS}  Peso: ___ kg (pré-gestacional ___ kg)
ABD: ___. Fita urinária (cetonas): ___.`,
A: `Náuseas e vômitos da gestação ___ (leves/moderados), sem hiperêmese.`,
P: `- Refeições pequenas e frequentes, evitar gatilhos, gengibre.
- Piridoxina isolada ou com doxilamina como 1ª linha farmacológica.
- Persistindo: antiemético (metoclopramida, ondansetrona após 1º trimestre ou após discutir risco).
- Reavaliar em 1 semana.`,
rx: [
 {trilha: "evidencia", titulo: "1ª linha (ACOG): piridoxina ± doxilamina", texto: `USO ORAL
1. Piridoxina (vitamina B6) 25 mg ______ 1 caixa
   Tomar 1 comprimido de 8/8h.
   OU
2. Doxilamina 10 mg + piridoxina 10 mg ______ 1 caixa
   Tomar 2 comprimidos ao deitar; se necessário, +1 pela manhã e +1 à tarde (máximo 4/dia).`, dose: "NV", nota: "Piridoxina está na RENAME (40 mg Básico; 50 mg Estratégico), mas não na REMUME Betim. Disponibilidade de doxilamina+piridoxina no Brasil: não verificada."},
 {trilha: "sus", titulo: "Antiemético disponível (SUS Betim)", texto: `USO ORAL
1. Metoclopramida 10 mg ______ 20 comprimidos
   Tomar 1 comprimido 30 minutos antes das refeições, até de 8/8h.
   OU
2. Prometazina 25 mg ______ 10 comprimidos
   Tomar 1 comprimido à noite ou até de 8/8h (causa sonolência).`, dose: "NV"}
],
orient: `Coma pouco e mais vezes, evite ficar de estômago vazio. Biscoito de água e sal antes de levantar ajuda.
Evite cheiros e alimentos que pioram o enjoo. Gengibre pode aliviar.
Os sintomas costumam melhorar até 16 a 20 semanas.`,
alarme: ["Não consegue manter líquidos por 24 h", "Urina escura ou muito pouca", "Tontura ou desmaio", "Perda de peso", "Dor abdominal, febre ou sangue no vômito"],
encaminhar: "Hiperêmese gravídica → maternidade para hidratação venosa e tiamina.",
idealsus: {ideal: "ACOG: piridoxina isolada ou com doxilamina como 1ª linha (segura e eficaz).", sus: "REMUME Betim não tem piridoxina nem doxilamina; tem metoclopramida 10 mg e prometazina 25 mg, opções de 2ª linha com segurança aceitável.", ponte: "Piridoxina 25 mg é barata e pode ser comprada. Se não for possível, metoclopramida do SUS."},
sus: {nacional: "RENAME 2024: piridoxina 40 mg (Básico) e 50 mg (Estratégico); metoclopramida, prometazina, ondansetrona (Básico).", betim: "REMUME Betim: metoclopramida 10 mg e prometazina 25 mg disponíveis; piridoxina e ondansetrona oral não constam."},
evid: {resumo: "Piridoxina reduz náuseas leves a moderadas e a combinação doxilamina-piridoxina teve benefício modesto em ECR. Metoclopramida, prometazina e ondansetrona são opções de 2ª linha; dados observacionais sobre ondansetrona no 1º trimestre são conflitantes (pequeno aumento possível de fenda oral).", certeza: "Moderada a baixa (estimada)", fontes: ["acog_nvg", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Doses: conferir bula.", "Registro de doxilamina+piridoxina no Brasil: não verificado."]
},
// ───────────────────────── PEQUENAS URGÊNCIAS
{
id: "colica-renal", nome: "Cólica renal", sistema: "Geniturinário e saúde sexual", risco: "moderado",
ciap: "U14 · U95", cid: "N23 · N20.0", tags: "pedra no rim cálculo dor lombar irradiada hematúria",
alerta: "Febre com cólica renal (pionefrose), anúria, rim único, gestante ou dor refratária: urgência.",
S: `Paciente, ___ anos, com dor lombar ___ (D/E) de início súbito há ___ h, em cólica, irradiada para ___ (flanco, fossa ilíaca, genitália), com náuseas ___ e vômitos ___. Hematúria: ___.
Febre: ___. Episódios prévios: ___. Rim único, DRC, gestação: ___. Uso de anticoagulante: ___.`,
O: `___ (agitado, inquieto).
${VITAIS}
Giordano ___. ABD: sem irritação peritoneal. Fita urinária: hematúria ___, nitrito ___, leucócitos ___.
(Idoso com dor lombar súbita: palpar aorta/pulsos – afastar aneurisma.)`,
A: `Provável cólica renal por litíase ___ (D/E), sem sinais de infecção ou obstrução complicada.`,
P: `- Analgesia na unidade com AINE (1ª escolha) ± dipirona.
- Hidratação habitual (não forçar volume).
- Exame de imagem (USG/TC) via regulação.
- Terapia expulsiva com alfabloqueador se cálculo distal 5–10 mm.
- Retorno imediato se febre, anúria ou dor refratária.`,
rx: [
 {trilha: "ambos", titulo: "Na unidade", texto: `USO INTRAVENOSO/INTRAMUSCULAR
1. Cetoprofeno 100 mg IV (diluído) ou tenoxicam 20 mg IV
   + Dipirona 1 g IV/IM.
   (Se náusea: metoclopramida 10 mg IV/IM.)`, dose: "NV", nota: "Evitar AINE em DRC, gestação e uso de anticoagulante."},
 {trilha: "ambos", titulo: "Domicílio", texto: `USO ORAL
1. Ibuprofeno 600 mg ______ 15 comprimidos
   Tomar 1 comprimido de 8/8h por até 5 dias, após refeições.
2. Dipirona 500 mg ______ 1 caixa
   Tomar 2 comprimidos de 6/6h se dor.`, dose: "NV"},
 {trilha: "evidencia", titulo: "Terapia expulsiva (cálculo ureteral distal 5–10 mm)", texto: `USO ORAL
1. Tansulosina 0,4 mg ______ 30 cápsulas
   Tomar 1 cápsula à noite por até 4 semanas ou até eliminar o cálculo.`, dose: "NV", nota: "Benefício principal em cálculos distais > 5 mm. Não consta na RENAME nem na REMUME (doxazosina consta em Betim, com menos evidência para essa indicação)."}
],
orient: `A dor é causada por uma pedra descendo do rim. O anti-inflamatório é o remédio que mais alivia.
Beba água normalmente, sem exagero. Se possível, urine em um coador para recolher a pedra.
Volte imediatamente se tiver febre, calafrios ou parar de urinar.`,
alarme: ["Febre ou calafrios", "Não consegue urinar", "Dor que não melhora com os remédios", "Vômitos que impedem tomar líquidos"],
encaminhar: "Infecção associada, anúria, rim único, dor refratária, cálculo > 10 mm ou sem progressão em 4 semanas → urgência/urologia.",
idealsus: {ideal: "Para cálculo ureteral distal de 5 a 10 mm, tansulosina aumenta a taxa de eliminação espontânea (EAU).", sus: "Analgesia (AINE IV/oral, dipirona) disponível em Betim. Tansulosina não consta na RENAME nem na REMUME.", ponte: "Analgesia do SUS para todos. Tansulosina por compra quando houver cálculo distal 5–10 mm confirmado por imagem."},
sus: {nacional: "RENAME 2024: ibuprofeno, dipirona oral e injetável, metoclopramida (Básico). Tansulosina não consta.", betim: "REMUME Betim: cetoprofeno 100 mg IV, tenoxicam 20 mg IV, dipirona oral e injetável, metoclopramida injetável e oral, ibuprofeno 600 mg disponíveis. Acesso a USG/TC: não verificado."},
evid: {resumo: "AINEs são mais eficazes que opioides e paracetamol na cólica renal, com menos vômitos (Cochrane). Alfabloqueadores aumentam a eliminação de cálculos distais > 5 mm; para cálculos menores o benefício é pequeno.", certeza: "Moderada (estimada)", fontes: ["eau_litiase", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Doses IV: conferir bula e diluição.", "Exames de imagem na rede de Betim: não verificados."]
},
{
id: "epistaxe", nome: "Epistaxe anterior", sistema: "Respiratório e ORL", risco: "moderado",
ciap: "R06", cid: "R04.0", tags: "sangramento nasal nariz sangrando hemorragia nasal",
alerta: "Sangramento intenso por ambas as narinas ou pela boca, instabilidade hemodinâmica ou falha da compressão/tamponamento anterior: urgência (epistaxe posterior).",
S: `Paciente, ___ anos, com sangramento nasal pela narina ___ há ___ min/h, ___ (primeiro episódio / recorrente). Volume estimado: ___.
Trauma, manipulação, ar seco: ___. Uso de anticoagulante/antiagregante: ___. HAS: ___. Sangramentos em outros locais: ___.`,
O: `___ (estável).
${VITAIS}
Rinoscopia anterior: ponto sangrante em área de Kiesselbach ___. Sangramento ativo: ___. Orofaringe: sangue escorrendo posteriormente ___.`,
A: `Epistaxe anterior ___ (D/E), controlada com compressão, hemodinamicamente estável.`,
P: `- Paciente sentado, cabeça levemente inclinada para frente, compressão firme da parte mole do nariz por 10–15 min contínuos.
- Se persistir: algodão com vasoconstritor/anestésico ou ácido tranexâmico tópico e nova compressão; tamponamento anterior se necessário.
- Hidratação da mucosa (vaselina/soro) por 1 semana.
- PA elevada: tratar a dor/ansiedade e reavaliar; não é causa habitual.`,
rx: [
 {trilha: "ambos", titulo: "Pós-controle", texto: `USO NASAL
1. Soro fisiológico 0,9% – aplicar nas narinas 3 vezes ao dia por 7 dias.
2. Vaselina sólida – aplicar fina camada na entrada da narina 2 vezes ao dia por 7 dias.`, dose: "NV"},
 {trilha: "evidencia", titulo: "Se não cessar com compressão (na unidade)", texto: `USO TÓPICO NASAL
1. Ácido tranexâmico 500 mg/5 mL (solução injetável) – embeber algodão/gaze e aplicar na narina por 10–15 min, com compressão.`, dose: "NV", nota: "Metanálises mostram maior controle em 10 min que tamponamento/vasoconstritor. Forma injetável não consta na RENAME nem na REMUME (RENAME tem comprimido 250 mg, Estratégico)."}
],
orient: `Se sangrar de novo: sente-se, incline a cabeça para a frente (não para trás) e aperte a parte mole do nariz por 10 a 15 minutos sem soltar.
Não assoe nem coloque o dedo no nariz por alguns dias. Evite ar seco; use soro e vaselina na entrada da narina.`,
alarme: ["Sangramento que não para após 20 minutos de compressão", "Sangue escorrendo pela garganta em grande quantidade", "Tontura ou desmaio", "Sangramentos frequentes ou em outros locais"],
encaminhar: "Epistaxe posterior, refratária ou recorrente com suspeita de causa local (tumor) → otorrino/urgência.",
idealsus: {ideal: "Ácido tranexâmico tópico na narina controla o sangramento mais rápido que tamponamento ou vasoconstritor em ECR.", sus: "Na REMUME Betim não há ácido tranexâmico; a UBS depende de compressão, tamponamento anterior e vasoconstritor se houver.", ponte: "Compressão bem feita resolve a maioria. Se falhar, tamponamento ou referência à urgência."},
sus: {nacional: "RENAME 2024: ácido tranexâmico 250 mg comprimido (Estratégico), cloreto de sódio 0,9% nasal (Básico).", betim: "REMUME Betim: soro fisiológico 0,9% disponível. Ácido tranexâmico não consta."},
evid: {resumo: "Compressão contínua de 10–15 min controla a maioria das epistaxes anteriores (AAO-HNS 2020). Ácido tranexâmico tópico reduz ressangramento e tempo para hemostasia em metanálises.", certeza: "Moderada (estimada)", fontes: ["epistaxe", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Técnica e disponibilidade de material de tamponamento na UBS: não verificadas."]
},
{
id: "escorpiao", nome: "Acidente escorpiônico", sistema: "Infecciosas e vigilância", risco: "alto",
ciap: "S12", cid: "T63.2 · X22", tags: "escorpião picada ferroada dor intensa criança soro antiescorpiônico notificação",
alerta: "Criança < 10 anos (sobretudo < 7) ou qualquer sinal sistêmico (vômitos repetidos, sudorese profusa, sialorreia, agitação/sonolência, taquicardia, hipertensão, dispneia): encaminhar com urgência ao hospital de referência para soro. Contato CIATox.",
S: `Paciente, ___ anos, picado por escorpião em ___ há ___ min/h. Animal: ___ (trazido / descrição).
Dor local: ___/10. Parestesia: ___. Vômitos: ___ vezes. Sudorese, sialorreia, agitação, sonolência, falta de ar: ___.
Comorbidades (HAS, DM, cardiopatia, nefropatia): ___. Peso: ___ kg.`,
O: `___ estado geral.
${VITAIS}
Local: ponto de picada ___, eritema ___, sudorese local ___.
Sistêmico: vômitos ___, sudorese generalizada ___, sialorreia ___, agitação/sonolência ___, alteração de FC/PA ___, taquidispneia ___.`,
A: `Acidente escorpiônico ___ (leve: apenas manifestações locais / moderado / grave).`,
P: `- Leve: analgesia, compressa morna, observação de 6 a 12 h (crianças: transferir para observação hospitalar conforme fluxo local).
- Moderado/grave: soro antiescorpiônico (3 frascos moderado / 6 grave) em hospital de referência, com observação ≥ 24 h.
- Sem envenenamento clínico: observar 4 h.
- Notificação compulsória no SINAN.
- Contato com CIATox para apoio.`,
rx: [
 {trilha: "ambos", titulo: "Analgesia (PCDT 2025)", texto: `Dor leve: dipirona VO.
Dor moderada: dipirona IV.
Dor intensa: infiltração local de lidocaína 2% sem vasoconstritor no ponto da picada (adulto ___ mL; criança ___ mL), podendo repetir.
Compressa morna no local.
Recidiva da dor: opioide fraco.

USO ORAL (domicílio, caso leve em adulto liberado)
1. Dipirona 500 mg – tomar 2 comprimidos de 6/6h se dor.`, dose: "NV", nota: "O PCDT não especifica as doses de lidocaína e dipirona; usar volume habitual de infiltração conforme bula. Dexametasona não é recomendada."},
 {trilha: "ambos", titulo: "Soroterapia – somente em hospital de referência (PCDT 2025)", texto: `Moderado: 3 frascos-ampolas de soro antiescorpiônico (SAEsc) ou antiaracnídico (SAA).
Grave: 6 frascos-ampolas (máximo 6).
Via IV, diluído em SF 0,9% ou SG 5% (1:2 a 1:5); SAEsc em 10–15 min, SAA em 20–60 min.
Observação mínima de 24 h após o soro.`, dose: "F"}
],
orient: `A dor no local pode durar algumas horas. Compressa morna ajuda.
Se for criança, mesmo com pouca dor, siga para o hospital indicado: crianças pequenas podem piorar rápido.
Para evitar novos acidentes: sacuda roupas e sapatos antes de usar, vede ralos e frestas, mantenha o quintal sem entulho.`,
alarme: ["Vômitos repetidos", "Suor intenso pelo corpo", "Salivação excessiva", "Agitação ou sonolência", "Falta de ar", "Coração muito acelerado"],
encaminhar: "Toda criança < 10 anos picada e qualquer caso moderado/grave → hospital de referência para soro (verificar o ponto de soro em Betim/região).",
sus: {nacional: "RENAME 2024: soro antiescorpiônico e antiaracnídico (Estratégico), dipirona, lidocaína 1% e 2% (Básico).", betim: "REMUME Betim: dipirona oral e injetável, lidocaína 2% sem vasoconstritor disponíveis. Ponto de soroterapia de referência em Betim: não verificado."},
evid: {resumo: "O PCDT de Acidentes Escorpiônicos (2025) define gravidade clínica e indica soro apenas em casos moderados (3 frascos) e graves (6 frascos), independentemente da idade. Crianças até 10 anos, especialmente < 7, concentram os óbitos, por isso exigem observação próxima.", certeza: "Recomendação normativa do MS", fontes: ["pcdt_escorpiao", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Doses de lidocaína para infiltração e de dipirona: não especificadas no PCDT resumido; conferir PCDT completo.", "Hospital de referência para soro na região de Betim: confirmar com a vigilância."]
},
{
id: "ferida", nome: "Ferimento corto-contuso e profilaxia do tétano", sistema: "Pele", risco: "moderado",
ciap: "S18", cid: "T14.1 · Z23.5", tags: "corte machucado sutura ferida vacina antitetânica dT soro antitetânico",
S: `Paciente, ___ anos, com ferimento em ___ por ___ (objeto, mecanismo) há ___ h. Sujidade/corpo estranho: ___. Mordedura: ___ (ver modelo de raiva).
Vacinação antitetânica: ___ (nº de doses; última há ___ anos / desconhecida). Imunossupressão, DM, desnutrição: ___. Uso de anticoagulante: ___. Alergias: ___.`,
O: `BEG.
Ferimento: ___ cm, ___ (linear / irregular), profundidade ___, bordas ___, sujidade ___, tecido desvitalizado ___, corpo estranho ___.
Perfusão, sensibilidade e motricidade distais: ___ (preservadas). Tendões: ___.`,
A: `Ferimento ___ em ___, de ___ (baixo / alto) risco para tétano. Vacinação: ___.`,
P: `- Limpeza abundante com SF, remoção de corpo estranho, desbridamento se necessário.
- Sutura primária se ferimento limpo e recente (geralmente até 6–8 h; face até 24 h).
- Profilaxia do tétano conforme quadro do MS.
- Antibiótico não indicado de rotina; considerar em mordeduras e feridas muito contaminadas.
- Retirada de pontos: face 5 dias, couro cabeludo/tronco 7–10 dias, membros 10–14 dias.`,
rx: [
 {trilha: "ambos", titulo: "Profilaxia do tétano (Guia de Vigilância 2021)", texto: `Ferimento de BAIXO risco (superficial, limpo):
- Vacinação incerta ou < 3 doses: vacinar (dT) e completar esquema. Sem SAT/IGHAT.
- ≥ 3 doses, última há < 10 anos: nada.
- ≥ 3 doses, última há ≥ 10 anos: reforço dT.

Ferimento de ALTO risco (profundo, sujo, corpo estranho, tecido desvitalizado, queimadura, perfuração, mordedura, fratura exposta):
- Vacinação incerta ou < 3 doses: dT + SAT ou IGHAT (locais diferentes).
- ≥ 3 doses, última há < 5 anos: nada.
- ≥ 3 doses, última há 5 a < 10 anos: reforço dT (+ SAT/IGHAT se imunodeprimido, desnutrido grave ou idoso).
- ≥ 3 doses, última há ≥ 10 anos: reforço dT (+ SAT/IGHAT nas mesmas situações ou se cuidado com a ferida for inadequado).`, dose: "F", nota: "Doses de SAT/IGHAT: conferir manual do CRIE/bula."},
 {trilha: "ambos", titulo: "Curativo e analgesia", texto: `USO TÓPICO
1. Lavar com água e sabão ou SF 1 a 2 vezes ao dia; manter coberto e seco nas primeiras 24–48 h.

USO ORAL
2. Paracetamol 500 mg – tomar 1 a 2 comprimidos de 6/6h se dor.`, dose: "NV"}
],
orient: `Mantenha o curativo limpo e seco nas primeiras 24 a 48 horas; depois pode lavar com água e sabão.
Volte para tirar os pontos na data marcada.
Complete as doses da vacina contra o tétano, se foram agendadas.`,
alarme: ["Vermelhidão, calor, inchaço ou pus no corte", "Febre", "Pontos abrindo", "Dormência ou dificuldade de mexer os dedos", "Rigidez na mandíbula ou contrações musculares"],
encaminhar: "Lesão de tendão, nervo, vaso, articulação ou ferimento extenso/de face complexa → cirurgia/urgência.",
sus: {nacional: "RENAME 2024: vacina dT, soro antitetânico e imunoglobulina antitetânica (Estratégico), lidocaína (Básico).", betim: "REMUME Betim: lidocaína 2% com e sem vasoconstritor, paracetamol disponíveis. Imunobiológicos pela rede de imunização."},
evid: {resumo: "O quadro de profilaxia do Guia de Vigilância em Saúde define a conduta por risco do ferimento e história vacinal. Antibiótico profilático em ferimentos simples não reduz infecção de forma relevante.", certeza: "Recomendação normativa do MS", fontes: ["gvs_tetano", "rename", "remume"]},
mudancas: ["Entrada nova; complementa o modelo de mordedura/raiva."],
nv: ["Doses de SAT e IGHAT: conferir manual do CRIE."]
},
{
id: "queimadura", nome: "Queimadura pequena (1º e 2º grau superficial)", sistema: "Pele", risco: "moderado",
ciap: "S14", cid: "T30.0 · T30.2", tags: "queimadura bolha água quente óleo curativo sulfadiazina",
alerta: "> 10% SCQ em adulto (> 5% em criança), 3º grau, face/mãos/pés/genitais/articulações, circunferencial, elétrica, química, inalação ou suspeita de maus-tratos: referência à unidade de queimados/urgência.",
S: `Paciente, ___ anos, com queimadura por ___ (líquido quente, chama, contato) em ___ há ___ h. Medidas tomadas: ___ (água corrente? pasta de dente, manteiga?).
Vacina antitetânica: ___. Comorbidades: ___. Circunstância compatível com o relato: ___.`,
O: `BEG.
${VITAIS}
Queimadura em ___, ___ % SCQ (palma do paciente ≈ 1%). Profundidade: ___ (1º grau: eritema / 2º superficial: bolhas, base rosada, dolorosa, enchimento capilar presente / 2º profundo ou 3º: base esbranquiçada, menos dolorosa).`,
A: `Queimadura de ___ grau em ___, ___% SCQ, sem critérios de transferência.`,
P: `- Resfriar com água corrente fresca por 20 min (se < 3 h).
- Limpeza com SF/água e sabão neutro; bolhas pequenas íntegras podem ser mantidas, grandes ou rotas desbridadas.
- Curativo não aderente; troca a cada 1–3 dias conforme exsudato.
- Analgesia adequada; profilaxia do tétano (queimadura = alto risco).
- Reavaliação em 48 h; sem epitelização em 14 dias → referência.`,
rx: [
 {trilha: "sus", titulo: "Curativo disponível (SUS Betim)", texto: `USO TÓPICO
1. Sulfadiazina de prata 1% creme ______ 1 bisnaga
   Aplicar camada fina na queimadura de 2º grau, cobrir com gaze não aderente; trocar 1 vez ao dia.
   (1º grau: apenas hidratante sem perfume.)`, dose: "NV", nota: "Cochrane: sulfadiazina associou-se a cicatrização mais lenta que curativos modernos em queimaduras superficiais."},
 {trilha: "evidencia", titulo: "Curativo de melhor desempenho (compra ou estoque da unidade)", texto: `USO TÓPICO
1. Curativo não aderente com petrolato, hidrocoloide ou espuma de silicone sobre a queimadura de 2º grau superficial; trocar a cada 2–4 dias conforme exsudato.`, dose: "NV", nota: "Menos dor e cicatrização mais rápida em revisões; disponibilidade de coberturas especiais na UBS de Betim não verificada."},
 {trilha: "ambos", titulo: "Analgesia", texto: `USO ORAL
1. Dipirona 500 mg ______ 1 caixa
   Tomar 2 comprimidos de 6/6h.
2. Ibuprofeno 600 mg – 1 comprimido de 8/8h por até 3 dias, se não houver contraindicação.`, dose: "NV"}
],
orient: `Não coloque pasta de dente, manteiga, pó de café ou gelo direto na queimadura.
Não estoure as bolhas pequenas. Mantenha o curativo limpo e seco e venha trocar na data marcada.
Proteja a área do sol por alguns meses para evitar manchas.`,
alarme: ["Febre", "Vermelhidão que se espalha, pus ou mau cheiro", "Dor que aumenta após 48 h", "Ferida que não fecha em 2 semanas"],
encaminhar: "Critérios de gravidade (ver alerta) → urgência/centro de queimados.",
idealsus: {ideal: "Em queimaduras superficiais de 2º grau, curativos modernos (hidrocoloide, espuma de silicone, petrolato com malha não aderente) reduzem dor e tempo de cicatrização em relação à sulfadiazina de prata.", sus: "REMUME Betim tem sulfadiazina de prata 1%. Coberturas especiais dependem do estoque da unidade (não verificado).", ponte: "Usar cobertura moderna se a unidade tiver; senão, sulfadiazina do SUS com gaze não aderente."},
sus: {nacional: "RENAME 2024: sulfadiazina de prata 1% creme, dipirona, ibuprofeno (Básico).", betim: "REMUME Betim: sulfadiazina de prata 1%, dipirona, ibuprofeno 600 mg disponíveis."},
evid: {resumo: "Resfriar com água corrente por 20 min reduz a profundidade da lesão. Revisões Cochrane mostram cicatrização mais lenta com sulfadiazina de prata do que com curativos com silicone, hidrocoloide ou biossintéticos em queimaduras superficiais e de espessura parcial.", certeza: "Baixa a moderada (estimada)", fontes: ["queimadura", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Disponibilidade de coberturas na UBS: não verificada."]
},
{
id: "odontalgia", nome: "Dor de dente / abscesso dentário", sistema: "Respiratório e ORL", risco: "moderado",
ciap: "D19", cid: "K04.7 · K08.8", tags: "dente dor de dente abscesso inchaço rosto cárie dentista antibiótico",
alerta: "Edema que progride para pescoço ou assoalho da boca, trismo, dificuldade para engolir/respirar ou edema periorbitário: urgência (angina de Ludwig, celulite facial).",
S: `Paciente, ___ anos, com dor em dente ___ há ___ dias, ___ (espontânea / ao frio-quente / à mastigação). Edema facial: ___. Febre: ___. Trismo, disfagia: ___.
Acompanhamento odontológico: ___. Comorbidades/imunossupressão: ___. Alergias: ___.`,
O: `BEG.
${VITAIS}
Cavidade oral: dente ___ com ___ (cárie extensa / fratura), percussão ___, mobilidade ___, edema/flutuação gengival ___. Face: edema ___ (localizado / difuso). Linfonodos: ___. Assoalho da boca: ___.`,
A: `___ (Pulpite / abscesso periapical localizado) em dente ___, sem sinais de disseminação.`,
P: `- O tratamento definitivo é odontológico (drenagem, endodontia ou extração): encaminhar à saúde bucal no mesmo dia ou com prioridade.
- Analgesia com ibuprofeno + paracetamol.
- Antibiótico só se sinais sistêmicos (febre, linfadenopatia, celulite) ou impossibilidade de tratamento odontológico breve.`,
rx: [
 {trilha: "ambos", titulo: "Analgesia (melhor evidência)", texto: `USO ORAL
1. Ibuprofeno 600 mg ______ 15 comprimidos
   Tomar 1 comprimido de 8/8h.
   +
2. Paracetamol 500 mg ______ 1 caixa
   Tomar 2 comprimidos (1 g) de 6/6h.
   (Associação por até 5 dias, até o atendimento odontológico.)`, dose: "NV"},
 {trilha: "ambos", titulo: "Se sinais sistêmicos ou celulite", texto: `USO ORAL
1. Amoxicilina 500 mg ______ 21 cápsulas
   Tomar 1 cápsula de 8/8h por 3 a 7 dias.
   Alergia: clindamicina 300 mg de 6/6h.`, dose: "NV"}
],
orient: `O remédio alivia, mas não resolve o problema do dente. Procure a equipe de saúde bucal o quanto antes.
Tome o ibuprofeno e o paracetamol nos horários, juntos, até a consulta com o dentista.
Antibiótico não tira a dor de dente sem infecção espalhada.`,
alarme: ["Inchaço que desce para o pescoço ou embaixo da língua", "Dificuldade para abrir a boca, engolir ou respirar", "Febre alta", "Inchaço perto do olho"],
encaminhar: "Saúde bucal da UBS/CEO no mesmo dia se possível. Sinais de disseminação → urgência bucomaxilofacial.",
sus: {nacional: "RENAME 2024: ibuprofeno, paracetamol, amoxicilina, clindamicina (Básico).", betim: "REMUME Betim: ibuprofeno 600 mg, paracetamol 500 mg, amoxicilina 500 mg, clindamicina 300 mg disponíveis."},
evid: {resumo: "A associação ibuprofeno + paracetamol é a analgesia mais eficaz para dor dentária aguda, superior a opioides (diretriz ADA 2023/2024). A ADA 2019 recomenda não prescrever antibiótico para pulpite ou abscesso localizado sem sinais sistêmicos.", certeza: "Moderada (estimada)", fontes: ["ada_dente", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Doses: conferir bula.", "Fluxo de urgência odontológica em Betim: não verificado."]
},
{
id: "paroniquia", nome: "Paroníquia aguda", sistema: "Pele", risco: "baixo",
ciap: "S09", cid: "L03.0", tags: "unheiro dedo inflamado unha pus abscesso cutícula",
S: `Paciente, ___ anos, com dor, vermelhidão e edema na prega ungueal do ___ dedo ___ há ___ dias, após ___ (retirar cutícula, roer unha, trauma). Pus: ___. Febre: ___. DM: ___.`,
O: `BEG.
Dedo ___: eritema e edema de prega ungueal ___, ___ (sem / com) coleção purulenta flutuante. Sem extensão para polpa/tendão. Mobilidade ___.`,
A: `Paroníquia aguda ___ (sem / com) abscesso.`,
P: `- Sem abscesso: imersão em água morna 3–4 vezes ao dia por 15 min.
- Com abscesso: drenagem (elevação da prega com lâmina/agulha) – é o tratamento principal.
- Antibiótico se celulite associada, imunossupressão ou falha após drenagem.
- Retorno em 48–72 h.`,
rx: [
 {trilha: "ambos", titulo: "Se celulite ou risco", texto: `USO ORAL
1. Cefalexina 500 mg ______ 28 comprimidos
   Tomar 1 comprimido de 6/6h por 7 dias.`, dose: "NV", nota: "Após drenagem simples, antibiótico geralmente não é necessário."},
 {trilha: "ambos", titulo: "Analgesia", texto: `USO ORAL
1. Ibuprofeno 600 mg – 1 comprimido de 8/8h por até 3 dias, após refeições.`, dose: "NV"}
],
orient: `Deixe o dedo de molho em água morna 3 a 4 vezes ao dia, por 15 minutos.
Não retire a cutícula e evite roer as unhas. Use luvas ao lavar louça ou roupa.`,
alarme: ["Vermelhidão que sobe pelo dedo ou pela mão", "Febre", "Dor forte ao mexer o dedo", "Inchaço na ponta do dedo (polpa)"],
encaminhar: "Panarício (polpa), tenossinovite ou lesão recorrente → cirurgia de mão/dermatologia.",
sus: {nacional: "RENAME 2024: cefalexina, ibuprofeno (Básico).", betim: "REMUME Betim: cefalexina 500 mg e ibuprofeno 600 mg disponíveis."},
evid: {resumo: "Drenagem é o tratamento do abscesso; imersões mornas ajudam na fase sem coleção. Antibiótico adjuvante tem benefício incerto após drenagem adequada.", certeza: "Baixa (estimada)", fontes: ["idsa_pele", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Doses: conferir bula."]
},
{
id: "hordeolo", nome: "Hordéolo (terçol)", sistema: "Olhos", risco: "baixo",
ciap: "F72", cid: "H00.0", tags: "terçol pálpebra caroço olho calázio compressa",
S: `Paciente, ___ anos, com nódulo doloroso em pálpebra ___ há ___ dias. Alteração visual: ___. Edema difuso da pálpebra, febre: ___. Episódios prévios: ___. Blefarite: ___.`,
O: `BEG.
Pálpebra ___: nódulo eritematoso, doloroso, ___ (com ponto de pus). Sem edema periorbitário difuso, sem proptose, movimentação ocular normal e indolor. Acuidade visual preservada.`,
A: `Hordéolo ___ (externo/interno) em pálpebra ___, sem celulite.`,
P: `- Compressas mornas 10–15 min, 3–4 vezes ao dia, com massagem suave.
- Higiene palpebral.
- Não espremer.
- Antibiótico tópico/sistêmico não indicado de rotina.
- Persistência > 3–4 semanas (calázio) ou recorrência → oftalmologia.`,
rx: [
 {trilha: "ambos", titulo: "Medidas locais", texto: `ORIENTAÇÕES
1. Compressa morna (pano limpo com água morna) sobre a pálpebra por 10 a 15 minutos, 3 a 4 vezes ao dia, até resolver.
2. Limpar a borda das pálpebras com água morna e xampu neutro diluído 1 a 2 vezes ao dia.`, dose: "NV"}
],
orient: `O terçol costuma melhorar sozinho em 1 a 2 semanas com compressas mornas.
Não esprema nem fure. Evite maquiagem e lente de contato até melhorar.`,
alarme: ["Inchaço e vermelhidão que tomam toda a pálpebra", "Febre", "Dor ao mexer o olho ou visão alterada", "Olho projetado para fora"],
encaminhar: "Celulite pré-septal/orbitária → urgência. Calázio persistente ou lesão recorrente no mesmo local → oftalmologia.",
sus: {nacional: "Sem medicamento específico necessário.", betim: "Sem medicamento específico necessário."},
evid: {resumo: "Revisões Cochrane não encontraram ECR que comprovem benefício de antibióticos ou outras intervenções além de compressas mornas, que são o tratamento habitual pela fisiopatologia.", certeza: "Muito baixa (ausência de ECR)", fontes: ["cab28"]},
mudancas: ["Entrada nova."],
nv: []
},
// ───────────────────────── METABÓLICO
{
id: "hiperglicemia", nome: "DM2 descompensado (hiperglicemia sem crise)", sistema: "Sangue e metabolismo", risco: "alto",
ciap: "T90", cid: "E11.9 · E11.6", tags: "diabetes glicemia alta açúcar alto insulina metformina descompensado",
alerta: "Glicemia > 250 com cetonúria/cetonemia, vômitos, dor abdominal, taquipneia, rebaixamento ou desidratação, ou glicemia > 600: suspeita de CAD/EHH → urgência.",
S: `Paciente, ___ anos, DM2 há ___ anos, com glicemia capilar ___ mg/dL. Sintomas: poliúria ___, polidipsia ___, perda de peso ___, visão turva ___. Náuseas, vômitos, dor abdominal: ___ (ausentes).
Medicações e adesão: ___. Desencadeante: ___ (infecção, corticoide, abandono, dieta). Última HbA1c: ___ (data ___). DCV estabelecida, IC, DRC: ___.`,
O: `BEG, hidratado ___.
${VITAIS}  Peso: ___ kg | IMC ___
Glicemia capilar ___ mg/dL. Cetonúria (fita): ___.
Pés: ___. Foco infeccioso: ___.`,
A: `DM2 descompensado, sem sinais de CAD ou EHH. Provável fator: ___.`,
P: `- Tratar desencadeante (infecção, adesão, corticoide).
- Intensificar tratamento: otimizar metformina; associar 2º agente conforme perfil (DCV/IC/DRC → iSGLT2 ou aGLP-1); insulina se glicemia muito elevada ou sintomas catabólicos.
- Solicitar HbA1c, creatinina/TFG, potássio, perfil lipídico, EAS/RAC.
- Reavaliação em 1–2 semanas com glicemias capilares.`,
rx: [
 {trilha: "ambos", titulo: "Base (SUS Betim)", texto: `USO ORAL
1. Metformina 850 mg ______ 60 comprimidos
   Tomar 1 comprimido após o café e 1 após o jantar (ajustar até 2.550 mg/dia; reduzir se TFG 30–45; suspender se < 30).`, dose: "NV"},
 {trilha: "sus", titulo: "Insulina basal se sintomático/muito descompensado (SUS Betim)", texto: `USO SUBCUTÂNEO
1. Insulina NPH 100 UI/mL ______ 1 frasco/caneta
   Aplicar 10 UI (ou 0,1–0,2 UI/kg) às 22h; ajustar 2 UI a cada 3 dias até glicemia de jejum 80–130 mg/dL.
   Fornecer glicosímetro/fitas conforme programa.`, dose: "NV", nota: "Glibenclamida 5 mg consta em Betim, mas aumenta hipoglicemia, sobretudo em idosos e DRC."},
 {trilha: "evidencia", titulo: "DCV, IC ou DRC – iSGLT2", texto: `USO ORAL
1. Dapagliflozina 10 mg ______ 30 comprimidos
   Tomar 1 comprimido pela manhã.
   (Alternativa: empagliflozina 10 mg.)`, dose: "NV", nota: "Reduz hospitalização por IC e progressão de DRC. RENAME: Componente Especializado (critérios de PCDT). Acesso via Farmácia Popular: não verificado."}
],
orient: `Tome a metformina junto ou logo após as refeições para reduzir enjoo.
Faça as medidas de glicose combinadas e traga anotadas.
Beba água, evite refrigerante e doces. Se tiver vômitos, dor abdominal ou falta de ar, procure atendimento imediatamente.`,
alarme: ["Vômitos ou dor abdominal", "Respiração rápida ou hálito de fruta", "Sonolência ou confusão", "Muita sede e urina abundante com fraqueza", "Glicemia acima de 300 repetidamente", "Glicemia abaixo de 70"],
encaminhar: "Suspeita de CAD/EHH → urgência. Pé diabético com infecção/isquemia → avaliação prioritária.",
idealsus: {ideal: "Em DM2 com doença cardiovascular, insuficiência cardíaca ou DRC, iSGLT2 (ou aGLP-1) reduzem eventos e progressão renal, independentemente da HbA1c (SBD, ADA).", sus: "REMUME Betim: metformina 850 mg, glibenclamida 5 mg, insulinas NPH, regular e glargina. Dapagliflozina está na RENAME só no Componente Especializado. aGLP-1 não constam.", ponte: "Metformina + insulina do SUS controlam a glicemia. Para quem tem DCV/IC/DRC, buscar dapagliflozina pelo CEAF (se cumprir critérios) ou compra."},
sus: {nacional: "RENAME 2024: metformina 500 e 850 mg, glibenclamida, gliclazida, insulinas NPH e regular (Básico); dapagliflozina e análogos de insulina (Especializado).", betim: "REMUME Betim: metformina 850 mg, glibenclamida 5 mg, insulina NPH e regular (frasco e caneta), insulina glargina disponíveis."},
evid: {resumo: "ECR de desfechos (EMPA-REG, DECLARE, DAPA-HF, DAPA-CKD, CREDENCE) mostraram redução de hospitalização por IC e progressão de DRC com iSGLT2. Sulfonilureias controlam glicemia, mas com mais hipoglicemia (glibenclamida é a pior nesse aspecto).", certeza: "Alta para iSGLT2 em IC/DRC (estimada)", fontes: ["sbd", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Critérios do CEAF/PCDT para dapagliflozina e oferta na Farmácia Popular: não verificados.", "Doses e titulação: conferir diretriz SBD vigente."]
},
{
id: "hipoglicemia", nome: "Hipoglicemia", sistema: "Sangue e metabolismo", risco: "alto",
ciap: "T87", cid: "E16.0 · E16.2", tags: "açúcar baixo glicemia baixa tremor suor desmaio insulina glicose",
alerta: "Rebaixamento de consciência ou incapaz de engolir: glicose 50% IV (ou glucagon IM) e acionar SAMU. Hipoglicemia por sulfonilureia pode recorrer por 24–72 h: observar/internar.",
S: `Paciente, ___ anos, ___ (diabético em uso de ___ / sem diagnóstico de DM), com ___ (tremor, sudorese, palpitação, fome, confusão, desmaio) há ___. Glicemia capilar: ___ mg/dL.
Última refeição: ___. Dose de insulina/sulfonilureia: ___. Álcool: ___. Exercício: ___. DRC: ___. Episódios prévios: ___.`,
O: `___ (consciente/sonolento).
${VITAIS}
Glicemia capilar: ___ mg/dL → após correção ___ mg/dL (15 min).
Neuro: ___.`,
A: `Hipoglicemia ___ (nível 1: 54–69 / nível 2: < 54 / nível 3: necessitou ajuda) relacionada a ___.`,
P: `- Consciente: 15–20 g de carboidrato simples, glicemia em 15 min; repetir se < 70; depois lanche com carboidrato complexo.
- Inconsciente: glicose 50% IV ou glucagon.
- Investigar causa e ajustar o tratamento (reduzir/suspender sulfonilureia, ajustar insulina, revisar função renal).
- Educar paciente e família; considerar glucagon domiciliar se recorrente.`,
rx: [
 {trilha: "ambos", titulo: "Na unidade", texto: `CONSCIENTE:
1. 15–20 g de glicose: 1 colher de sopa de açúcar em meio copo de água, ou 150 mL de suco/refrigerante comum. Repetir glicemia em 15 min.

INCONSCIENTE (adulto):
2. Glicose 50% – 25 a 50 mL IV (12,5–25 g) em veia calibrosa; repetir glicemia em 15 min e manter SG 10% se necessário (Betim tem SG 5% e glicose 50%: preparar SG 10% com 500 mL de SG 5% + 50 mL de glicose 50%, ≈ 9,5%).`, dose: "NV", nota: "Criança: glicose 10% 2–5 mL/kg IV."},
 {trilha: "evidencia", titulo: "Glucagon domiciliar (hipoglicemia grave recorrente)", texto: `USO INTRAMUSCULAR/SUBCUTÂNEO
1. Glucagon 1 mg ______ 1 kit
   Aplicar 1 mg (0,5 mg se < 25 kg) por familiar treinado em caso de desmaio ou incapacidade de engolir.`, dose: "NV", nota: "Não consta na RENAME nem na REMUME. Glucagon nasal também existe; disponibilidade no Brasil não verificada."}
],
orient: `Se sentir tremor, suor frio, fome súbita ou confusão, meça a glicose (se puder) e tome logo um copo de suco ou água com açúcar. Repita em 15 minutos se não melhorar.
Depois, faça um lanche. Ande sempre com uma fonte de açúcar.
Não dirija se a glicose estiver baixa. Avise a família como agir se você desmaiar.`,
alarme: ["Desmaio ou convulsão", "Confusão que não melhora com açúcar", "Episódios repetidos", "Hipoglicemia em quem usa glibenclamida (pode voltar por horas)"],
encaminhar: "Hipoglicemia por sulfonilureia, nível 3, ou sem resposta → urgência/observação.",
idealsus: {ideal: "Glucagon em casa para quem já teve hipoglicemia grave (familiar treinado aplica). Trocar glibenclamida por sulfonilureia de menor risco (gliclazida) ou outra classe.", sus: "REMUME Betim: glicose 50% para uso na unidade; glucagon não consta na RENAME nem na REMUME. Gliclazida está na RENAME, mas não na REMUME Betim.", ponte: "Na UBS, glicose 50%. Em domicílio, açúcar/glicose oral e treino da família; glucagon por compra quando houver episódios graves recorrentes."},
sus: {nacional: "RENAME 2024: glicose 50% injetável (Básico). Glucagon não consta.", betim: "REMUME Betim: glicose 50% ampola 20 mL e glicose 5% disponíveis; glucagon não consta."},
evid: {resumo: "A regra dos 15 (15 g de glicose, reavaliar em 15 min) é a recomendação da ADA. Sulfonilureias de longa ação (glibenclamida) causam hipoglicemia prolongada, especialmente em idosos e DRC, e devem ser revistas após um episódio.", certeza: "Moderada (consenso; estimada)", fontes: ["ada_hipo", "sbd", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Doses: conferir bula."]
}
);
