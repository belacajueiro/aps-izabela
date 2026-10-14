// Conteúdo-base revisado em 2026-10-08. Edições da usuária ficam no banco do artefato e sobrepõem estes modelos.
const REVISAO = "13/10/2026";
const VITAIS = "PA ___ mmHg | FC ___ bpm | FR ___ irpm | Tax ___ °C | SpO₂ ___% (AA)";

const FONTES = {
  ms_dengue: {t: "Ministério da Saúde. Dengue: diagnóstico e manejo clínico – adulto e criança. 6ª ed. 2024 (diretriz/manual MS).", f: "F", url: "https://portaldeboaspraticas.iff.fiocruz.br/wp-content/uploads/2024/02/dengue-manejo-clinico.pdf"},
  nt_raiva: {t: "Ministério da Saúde. Nota Técnica nº 8/2022-CGZV/DEIDT/SVS/MS – atualização do protocolo de profilaxia pré, pós e reexposição da raiva humana (norma).", f: "F", url: "https://familia.sbim.org.br/images/files/notas-tecnicas/cgzv-deidt-svs-ms-protocoloraiva-100322.pdf"},
  rename: {t: "Ministério da Saúde. RENAME 2024 – Portaria GM/MS nº 6.324, de 26/12/2024 (norma).", f: "F", url: "https://saude.sp.gov.br/resources/ses/perfil/gestor/assistencia-farmaceutica/medicamentos-dos-componentes-da-assistencia-farmaceutica/medicamentos-do-componente-basico-da-assistencia-farnaceutica/relacao_nacional_medicamentos_2024.pdf"},
  remume: {t: "SMS Betim. REMUME SUS/Betim – arquivo 'REMUME BETIM – para site PMB' anexado ao Projeto (data não identificada no documento).", f: "F", url: ""},
  pcdt_ist: {t: "Ministério da Saúde. PCDT para Atenção Integral às Pessoas com IST – capítulo corrimento vaginal (RESS 2021; PCDT 2020, mantido na versão 2022). Tabela conferida pelo resumo publicado na SciELO.", f: "F", url: "https://www.scielo.br/j/ress/a/X9WkLLZRBbcW3mFwbRYBHXD/abstract/?lang=en"},
  guia_influenza: {t: "Ministério da Saúde. Guia de Manejo e Tratamento de Influenza 2023 (manual MS). Indicação e grupos de risco conferidos em notas técnicas estaduais que o reproduzem; posologia não conferida no original.", f: "F", url: "https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/svsa/influenza/guia-de-manejo-e-tratamento-de-influenza-2023"},
  sbp_oma: {t: "Sociedade Brasileira de Pediatria. Otite média – Pediatria para Famílias, atualizado out/2023 (material de sociedade).", f: "F", url: "https://www.sbp.com.br/pediatria-para-familias/doencas/otite-media/"},
  aap_oma: {t: "Lieberthal AS et al. AAP Clinical Practice Guideline: The Diagnosis and Management of Acute Otitis Media. Pediatrics, 2013 (diretriz).", f: "C", url: ""},
  gina: {t: "Global Initiative for Asthma (GINA). Global Strategy for Asthma Management and Prevention – atualizações 2025/2026 (diretriz internacional).", f: "C", url: ""},
  pcdt_asma: {t: "Ministério da Saúde/CONITEC. PCDT Asma (critérios de acesso ao CEAF para budesonida+formoterol). Versão vigente não aberta nesta revisão.", f: "C", url: ""},
  idsa_faringite: {t: "Shulman ST et al. IDSA Clinical Practice Guideline for Group A Streptococcal Pharyngitis, 2012 (diretriz).", f: "C", url: ""},
  idsa_sinusite: {t: "Chow AW et al. IDSA Clinical Practice Guideline for Acute Bacterial Rhinosinusitis, 2012 (diretriz).", f: "C", url: ""},
  epos: {t: "Fokkens WJ et al. European Position Paper on Rhinosinusitis and Nasal Polyps (EPOS), 2020 (diretriz).", f: "C", url: ""},
  idsa_itu: {t: "Gupta K et al. IDSA/ESCMID Guideline – Acute Uncomplicated Cystitis and Pyelonephritis in Women, 2010 (diretriz).", f: "C", url: ""},
  cdc_ist: {t: "CDC. Sexually Transmitted Infections Treatment Guidelines, 2021 (diretriz).", f: "C", url: ""},
  nice_lombar: {t: "NICE NG59. Low back pain and sciatica in over 16s, 2016, atualizada 2020 (diretriz).", f: "C", url: ""},
  aaohns_vppb: {t: "Bhattacharyya N et al. AAO-HNS Clinical Practice Guideline: Benign Paroxysmal Positional Vertigo (update), 2017 (diretriz).", f: "C", url: ""},
  aaohns_oe: {t: "Rosenfeld RM et al. AAO-HNS Clinical Practice Guideline: Acute Otitis Externa, 2014 (diretriz).", f: "C", url: ""},
  cochrane_conj: {t: "Cochrane. Antibiotics versus placebo for acute bacterial conjunctivitis (revisão sistemática; atualização 2023).", f: "C", url: ""},
  idsa_pele: {t: "Stevens DL et al. IDSA Practice Guidelines for Skin and Soft Tissue Infections, 2014 (diretriz).", f: "C", url: ""},
  cab28: {t: "Ministério da Saúde. Cadernos de Atenção Básica nº 28, vol. II – Acolhimento à demanda espontânea: queixas mais comuns na Atenção Básica, 2012 (manual MS).", f: "C", url: ""},
  ahs_migranea: {t: "Ailani J et al. American Headache Society Consensus Statement: update on integrating new migraine treatments, 2021 (consenso).", f: "C", url: ""},
  acg_dispepsia: {t: "Moayyedi P et al. ACG and CAG Clinical Guideline: Management of Dyspepsia, 2017 (diretriz).", f: "C", url: ""},
  hp_consenso: {t: "Coelho LGV et al. IV Consenso Brasileiro sobre Helicobacter pylori, 2018 (consenso de sociedade).", f: "C", url: ""},
  cochrane_resfriado: {t: "Cochrane. Antibiotics for the common cold; Antihistamines for the common cold (revisões sistemáticas).", f: "C", url: ""},
  ulip_bula: {t: "Bula de Ulip (acetato de ulipristal 30 mg), Exeltis, Reg. MS 1.3564.0003.001-2 – consultada em bula.com.br (bula).", f: "F", url: "https://bula.com.br/ulip"},
};

const CONDICOES = [
// ───────────────────────── RESPIRATÓRIO / ORL
{
id: "resfriado", nome: "Resfriado comum", sistema: "Respiratório e ORL", risco: "baixo",
ciap: "R74", cid: "J00", tags: "IVAS gripe coriza espirro nariz entupido dor de garganta tosse viral",
S: `Paciente, ___ anos, com coriza, obstrução nasal, espirros, odinofagia leve e tosse seca há ___ dias. Febre: ___ (ausente / baixa, até ___ °C).
Nega dispneia, dor torácica, otalgia, dor facial intensa ou piora após melhora inicial.
Comorbidades: ___. Medicações em uso: ___. Alergias: ___.`,
O: `BEG, corado, hidratado, eupneico, afebril.
${VITAIS}
Oroscopia: hiperemia leve, sem exsudato. Rinoscopia: mucosa edemaciada, secreção hialina.
Otoscopia: membranas timpânicas íntegras, sem abaulamento.
AR: MV+ bilateral, sem ruídos adventícios. ACV: RCR 2T, BNF.`,
A: `Resfriado comum (IVAS de provável etiologia viral), sem sinais de complicação bacteriana ou de gravidade.`,
P: `- Explico o caráter autolimitado (7 a 10 dias; a tosse pode durar até 3 semanas).
- Antibiótico não indicado.
- Oriento hidratação, repouso relativo e lavagem nasal com SF 0,9%.
- Prescrevo sintomáticos.
- Oriento retorno se febre por mais de 3 dias, piora após melhora inicial, dor facial ou de ouvido intensa, ou falta de ar.`,
rx: [
 {titulo: "Sintomáticos", texto: `USO ORAL
1. Paracetamol 500 mg ______ 1 caixa
   Tomar 1 a 2 comprimidos de 6/6h se dor ou febre (máximo 4 g/dia).
   OU
2. Dipirona 500 mg ______ 1 caixa
   Tomar 1 a 2 comprimidos de 6/6h se dor ou febre.

USO NASAL
3. Soro fisiológico 0,9% ______ 1 frasco
   Lavar cada narina com 5 a 10 mL, 3 a 4 vezes ao dia.`, dose: "NV"}
],
orient: `Você está com um resfriado, uma infecção por vírus. Ele melhora sozinho em 7 a 10 dias. A tosse pode durar um pouco mais.
Antibiótico não ajuda contra vírus e pode causar efeitos colaterais.
Beba bastante líquido, descanse e faça lavagem do nariz com soro.
Lave as mãos com frequência e cubra a boca ao tossir.`,
alarme: ["Falta de ar ou respiração rápida", "Febre por mais de 3 dias ou que volta depois de melhorar", "Dor de ouvido ou dor forte no rosto", "Dor no peito", "Prostração intensa ou confusão"],
encaminhar: "Urgência se dispneia, SpO₂ < 95% ou sinais de SRAG (ver Síndrome gripal).",
sus: {nacional: "Paracetamol 500 mg, dipirona 500 mg e cloreto de sódio 0,9% solução nasal constam na RENAME 2024 (Componente Básico).", betim: "REMUME Betim: paracetamol 500 mg, dipirona 500 mg e soro fisiológico 0,9% (ampola 10 mL e frascos) disponíveis."},
evid: {resumo: "Antibióticos não encurtam o resfriado e aumentam eventos adversos. Anti-histamínico isolado tem benefício pequeno e incerto em adultos; mucolíticos não têm benefício clínico relevante demonstrado. Analgésicos aliviam sintomas.", certeza: "Moderada (estimada, a partir de revisões Cochrane citadas de memória)", fontes: ["cochrane_resfriado", "cab28"]},
mudancas: ["CIAP corrigido de R80 para R74 (no CIAP-2, R80 é gripe/influenza).", "Retirados ambroxol e loratadina de rotina (sem benefício clínico relevante demonstrado).", "Ibuprofeno 400–800 mg 6/6h retirado da prescrição padrão; se usar AINE, preferir dose baixa e curta."],
nv: ["Posologias: conferir na bula do produto dispensado."]
},
{
id: "gripal", nome: "Síndrome gripal (influenza)", sistema: "Respiratório e ORL", risco: "moderado",
ciap: "R80", cid: "J11.1", tags: "gripe influenza febre mialgia oseltamivir tamiflu SRAG",
alerta: "Se dispneia, desconforto respiratório, SpO₂ < 95% em ar ambiente ou hipotensão: é SRAG. Iniciar oseltamivir e encaminhar à urgência.",
S: `Paciente, ___ anos, com febre de início súbito (___ °C), tosse e/ou dor de garganta há ___ dias, associadas a cefaleia, mialgia e/ou artralgia.
Fator de risco para complicação: ___ (gestação/puerpério, ≥ 60 anos, < 5 anos, doença crônica, imunossupressão, obesidade grave, outro / nenhum).
Nega dispneia, dor torácica, confusão. Vacina influenza neste ano: ___.
Comorbidades: ___. Medicações em uso: ___. Alergias: ___.`,
O: `BEG/REG, corado, hidratado, eupneico, febril/afebril.
${VITAIS}
Oroscopia: hiperemia de orofaringe. AR: MV+ bilateral, sem ruídos adventícios, sem esforço respiratório. ACV: RCR 2T, BNF.`,
A: `Síndrome gripal ___ (com / sem) fator de risco para complicações, sem sinais de SRAG no momento.`,
P: `- Oriento hidratação, repouso, isolamento domiciliar e etiqueta respiratória durante a fase febril.
- Prescrevo sintomáticos.
- [Se fator de risco] Inicio oseltamivir, independentemente do resultado de exame e da situação vacinal.
- Oriento sinais de agravamento e retorno imediato se ocorrerem.
- Reavaliação em 48 h se fator de risco ou piora.`,
rx: [
 {titulo: "Antiviral (se fator de risco para complicação)", texto: `USO ORAL
1. Oseltamivir 75 mg ______ 10 cápsulas
   Tomar 1 cápsula de 12/12h por 5 dias.`, dose: "NV", nota: "Ajustar se ClCr < 60 mL/min e para crianças pelo peso (apresentações 30 e 45 mg). Conferir tabela do Guia de Influenza 2023."},
 {titulo: "Sintomáticos", texto: `USO ORAL
1. Paracetamol 500 mg ______ 1 caixa
   Tomar 1 a 2 comprimidos de 6/6h se dor ou febre (máximo 4 g/dia).
   OU
2. Dipirona 500 mg ______ 1 caixa
   Tomar 1 a 2 comprimidos de 6/6h se dor ou febre.`, dose: "NV"}
],
orient: `Você está com síndrome gripal. Beba bastante líquido, descanse e evite contato próximo com outras pessoas enquanto tiver febre.
Se recebeu o remédio antiviral, tome todas as doses pelos 5 dias.
Não use AAS (aspirina) se tiver menos de 19 anos.`,
alarme: ["Falta de ar ou cansaço para falar", "Lábios ou dedos arroxeados", "Febre que persiste por mais de 3 dias ou volta após 48 h sem febre", "Dor no peito", "Confusão ou sonolência excessiva", "Diminuição da urina", "Em crianças: respiração rápida, gemência, recusa de líquidos"],
encaminhar: "SRAG → urgência com oseltamivir iniciado. Notificação: SRAG hospitalizada é de notificação compulsória; SG isolada só em unidade sentinela.",
sus: {nacional: "Oseltamivir 30, 45 e 75 mg: RENAME 2024, Componente Estratégico (aquisição pelo MS). Não exige exame para dispensação.", betim: "REMUME Betim: oseltamivir 30, 45 e 75 mg constam. Confirmar estoque na farmácia da unidade."},
evid: {resumo: "O MS indica oseltamivir para toda SRAG e para SG com fator de risco, idealmente nas primeiras 48 h; em grupo de risco, iniciar mesmo após 48 h. O benefício em desfechos duros (hospitalização, óbito) vem de estudos observacionais e é incerto em adultos sem risco; o efeito em ECR é redução de cerca de 1 dia de sintomas.", certeza: "Baixa a moderada para desfechos graves (estimada)", fontes: ["guia_influenza", "rename"]},
mudancas: ["Entrada nova (não havia SOAP de síndrome gripal no Notion)."],
nv: ["Posologia e ajuste renal do oseltamivir: conferir no Guia de Influenza 2023 e na bula.", "Lista completa de fatores de risco: conferir no Guia 2023."]
},
{
id: "sinusite", nome: "Rinossinusite aguda bacteriana", sistema: "Respiratório e ORL", risco: "baixo",
ciap: "R75", cid: "J01.9", tags: "sinusite dor facial secreção purulenta nariz amoxicilina",
S: `Paciente, ___ anos, com congestão nasal, rinorreia purulenta e dor/pressão facial ___ (unilateral/bilateral) há ___ dias.
Critério: ___ (sintomas ≥ 10 dias sem melhora / febre ≥ 39 °C com secreção purulenta por 3–4 dias / piora após melhora inicial de quadro viral).
Nega edema periorbitário, alteração visual, cefaleia intensa, rigidez de nuca.
Uso de antibiótico nos últimos 30 dias: ___. Comorbidades: ___. Alergias: ___.`,
O: `BEG, corado, hidratado, eupneico.
${VITAIS}
Rinoscopia: secreção purulenta em fossas nasais. Dor à digitopressão de seio ___.
Olhos: sem edema ou hiperemia periorbitária, movimentação ocular preservada e indolor.
Oroscopia: secreção em parede posterior. AR: MV+ bilateral, sem RA.`,
A: `Rinossinusite aguda com critério clínico de etiologia bacteriana, sem sinais de complicação orbitária ou intracraniana.`,
P: `- Oriento lavagem nasal com SF 0,9% várias vezes ao dia e hidratação.
- Prescrevo corticoide nasal e analgésico.
- [Quadro leve, decisão compartilhada] Opção de observação por 7 dias com receita de antibiótico para iniciar se não melhorar.
- [Quadro moderado/grave ou febre alta] Inicio antibiótico.
- Retorno em 48–72 h se não houver melhora após início do antibiótico; imediato se sinais de complicação.`,
rx: [
 {titulo: "Antibiótico de 1ª escolha", texto: `USO ORAL
1. Amoxicilina 500 mg ______ 21 cápsulas
   Tomar 1 cápsula de 8/8h por 7 dias.`, dose: "NV", nota: "5 a 7 dias costumam bastar em adulto."},
 {titulo: "Se falha em 72 h ou antibiótico nos últimos 30 dias", texto: `USO ORAL
1. Amoxicilina 500 mg + clavulanato 125 mg ______ 21 comprimidos
   Tomar 1 comprimido de 8/8h por 7 dias.`, dose: "NV"},
 {titulo: "Alergia à penicilina", texto: `USO ORAL
1. Doxiciclina 100 mg ______ 14 comprimidos
   Tomar 1 comprimido de 12/12h por 7 dias, com água, sem deitar logo após.`, dose: "NV", nota: "Não usar em gestantes e crianças < 8 anos."},
 {titulo: "Adjuvantes", texto: `USO NASAL
1. Budesonida 32 mcg spray nasal ______ 1 frasco
   Aplicar 2 jatos em cada narina 1 vez ao dia por 14 dias.
2. Soro fisiológico 0,9% ______ 1 frasco
   Lavar cada narina com 5 a 10 mL, 3 a 4 vezes ao dia.

USO ORAL
3. Paracetamol 500 mg ______ 1 caixa
   Tomar 1 a 2 comprimidos de 6/6h se dor (máximo 4 g/dia).`, dose: "NV"}
],
orient: `A sinusite bacteriana costuma melhorar em poucos dias com o tratamento. Tome o antibiótico até o fim, se ele foi receitado.
Faça a lavagem do nariz com soro várias vezes ao dia.`,
alarme: ["Inchaço ou vermelhidão ao redor do olho", "Visão dupla ou dor ao mexer os olhos", "Dor de cabeça muito forte ou rigidez na nuca", "Febre acima de 39 °C persistente", "Confusão ou sonolência"],
encaminhar: "Complicação orbitária ou intracraniana → urgência. ≥ 4 episódios/ano ou sintomas > 12 semanas → avaliar rinossinusite crônica e encaminhar ao otorrino.",
sus: {nacional: "RENAME 2024: amoxicilina 500 mg, amoxicilina+clavulanato 500/125 mg, doxiciclina 100 mg (Estratégico), budesonida nasal 32/50/64 mcg (Básico). Amoxicilina+clavulanato 875/125 mg não consta.", betim: "REMUME Betim: amoxicilina 500 mg, amoxicilina+clavulanato 500/125 mg, doxiciclina 100 mg e budesonida 32 mcg aerossol nasal disponíveis."},
evid: {resumo: "A maioria das rinossinusites agudas é viral. Antibiótico traz benefício pequeno (cura um pouco mais rápida) e mais eventos adversos; por isso as diretrizes aceitam observação nos casos leves. Os três critérios clínicos de etiologia bacteriana vêm da IDSA. Corticoide nasal tem benefício modesto.", certeza: "Moderada (estimada)", fontes: ["idsa_sinusite", "epos", "rename", "remume"]},
mudancas: ["Amoxicilina+clavulanato 875/125 mg 12/12h trocada por 500/125 mg 8/8h (a apresentação de 875 mg não está na RENAME nem na REMUME Betim).", "Duração ajustada para 7 dias.", "Incluída observação como opção nos casos leves.", "Incluídos corticoide nasal e alternativa para alérgicos.", "Retirada a orientação sobre descongestionante sistêmico (não indicado)."],
nv: ["Posologias e duração: conferir na bula e na diretriz."]
},
{
id: "faringite", nome: "Faringoamigdalite aguda", sistema: "Respiratório e ORL", risco: "baixo",
ciap: "R72 · R74 · R76", cid: "J02.0 · J02.9 · J03.0", tags: "dor de garganta amigdalite placa pus estreptococo centor benzetacil penicilina",
S: `Paciente, ___ anos, com odinofagia há ___ dias. Febre: ___ (presente, ___ °C / ausente). Tosse: ___ (ausente/presente). Coriza: ___.
Contato com caso semelhante: ___. Episódios prévios: ___.
Alergia a penicilina: ___ (tipo de reação: ___). Comorbidades: ___.`,
O: `BEG, corado, hidratado.
${VITAIS}
Orofaringe: tonsilas ___ (hiperemiadas/hipertrofiadas), exsudato ___ (presente/ausente). Úvula centrada, sem abaulamento de palato.
Linfonodos cervicais anteriores: ___ (aumentados e dolorosos / sem alterações).
Pontuação de Centor/McIsaac: ___ (febre > 38 °C +1; ausência de tosse +1; adenomegalia cervical anterior dolorosa +1; exsudato ou edema tonsilar +1; 3–14 anos +1; ≥ 45 anos −1).`,
A: `Faringoamigdalite aguda, ___ (provável etiologia viral / provável estreptocócica, Centor ___), sem sinais de abscesso periamigdaliano.`,
P: `- Centor 0–1: não indico antibiótico; sintomáticos.
- Centor 2–3: teste rápido para estreptococo se disponível; sem teste, decisão compartilhada.
- Centor ≥ 4: tratamento antibiótico.
- Oriento hidratação, analgesia regular e retorno se piora.
- Explico a importância de completar o antibiótico (prevenção de febre reumática).`,
rx: [
 {titulo: "1ª escolha – dose única IM", texto: `USO INTRAMUSCULAR
1. Benzilpenicilina benzatina 1.200.000 UI ______ 1 frasco-ampola
   Aplicar 1.200.000 UI IM, dose única (600.000 UI se peso < 27 kg).`, dose: "NV"},
 {titulo: "1ª escolha – via oral", texto: `USO ORAL
1. Amoxicilina 500 mg ______ 30 cápsulas
   Tomar 1 cápsula de 8/8h por 10 dias.`, dose: "NV", nota: "Criança: 50 mg/kg/dia (máx. 1 g/dia), suspensão 250 mg/5 mL."},
 {titulo: "Alergia à penicilina", texto: `Reação não grave (sem anafilaxia):
USO ORAL
1. Cefalexina 500 mg ______ 20 comprimidos
   Tomar 1 comprimido de 12/12h por 10 dias.

Anafilaxia prévia:
USO ORAL
1. Azitromicina 500 mg ______ 5 comprimidos
   Tomar 1 comprimido 1 vez ao dia por 5 dias.`, dose: "NV", nota: "Resistência do estreptococo a macrolídeos existe; reservar para alérgicos."},
 {titulo: "Sintomáticos", texto: `USO ORAL
1. Ibuprofeno 600 mg ______ 1 caixa
   Tomar 1 comprimido de 8/8h por até 3 dias, após refeições.
   OU
2. Paracetamol 500 mg ______ 1 caixa
   Tomar 1 a 2 comprimidos de 6/6h se dor ou febre (máximo 4 g/dia).`, dose: "NV"}
],
orient: `Se for infecção por vírus, não precisa de antibiótico e melhora em cerca de uma semana.
Se você recebeu antibiótico, tome até o fim, mesmo que melhore antes. Isso evita complicações como a febre reumática.
Beba líquidos frios, alimente-se de comidas macias e use o analgésico nos horários.`,
alarme: ["Dificuldade para abrir a boca ou engolir a saliva", "Voz abafada ou baba", "Inchaço de um lado da garganta ou do pescoço", "Falta de ar", "Febre que persiste após 48–72 h de antibiótico"],
encaminhar: "Trismo, voz abafada, desvio de úvula → urgência (abscesso periamigdaliano). ≥ 7 episódios/ano → otorrino.",
sus: {nacional: "RENAME 2024: benzilpenicilina benzatina 600.000 e 1.200.000 UI, amoxicilina 500 mg e suspensão, cefalexina, azitromicina (Básico). Fenoximetilpenicilina só como pó para solução oral (Estratégico).", betim: "REMUME Betim: benzilpenicilina benzatina 600.000 e 1.200.000 UI, amoxicilina 500 mg e 250 mg/5 mL, cefalexina 500 mg e suspensão, azitromicina 500 mg e suspensão, ibuprofeno 600 mg disponíveis."},
evid: {resumo: "O escore de Centor/McIsaac estima a probabilidade de estreptococo do grupo A; mesmo com 4 pontos ela fica em torno de 50%, por isso diretrizes preferem teste rápido quando há. Antibiótico encurta os sintomas em cerca de 1 dia e reduz complicações supurativas e febre reumática, esta última rara hoje.", certeza: "Moderada (estimada)", fontes: ["idsa_faringite", "rename", "remume"]},
mudancas: ["Notion tinha duas entradas (faringite e amigdalite); unificadas com decisão pelo Centor.", "Penicilina V oral 500 mg 8/8h substituída: não consta em comprimido na RENAME nem na REMUME Betim.", "Amoxicilina 875 mg 12/12h trocada por 500 mg 8/8h (apresentação disponível).", "Azitromicina deixou de ser opção geral e ficou restrita a alérgicos."],
nv: ["Doses e duração: conferir na bula.", "Disponibilidade de teste rápido para estreptococo na UBS: não verificada."]
},
{
id: "oma", nome: "Otite média aguda", sistema: "Respiratório e ORL", risco: "moderado",
ciap: "H71", cid: "H66.9", tags: "dor de ouvido otalgia criança tímpano abaulado amoxicilina",
S: `Paciente, ___ anos, com otalgia ___ (direita/esquerda/bilateral) há ___ h/dias, iniciada após quadro de IVAS. Febre: ___ °C.
[Criança] Irritabilidade, choro noturno, manipulação da orelha: ___. Frequenta creche: ___.
Antibiótico nos últimos 30 dias: ___. Episódios prévios: ___. Alergias: ___.`,
O: `BEG, corado, hidratado.
${VITAIS}  Peso: ___ kg
Otoscopia: membrana timpânica ___ (D/E) com abaulamento ___ (leve/moderado/grave), opaca, hiperemiada; otorreia ___ (ausente/presente).
Conduto auditivo externo sem edema; sem dor à tração do pavilhão ou à pressão do trágus.
Região retroauricular sem edema, hiperemia ou dor. Oroscopia: ___. AR: MV+ bilateral, sem RA.`,
A: `Otite média aguda ___ (unilateral/bilateral), ___ (leve / grave: otalgia moderada a intensa > 48 h ou febre ≥ 39 °C), sem sinais de mastoidite.`,
P: `- Analgesia regular em todos os casos.
- [Observação] Criança ≥ 2 anos, ou 6–23 meses com OMA unilateral não grave: observação por 48–72 h com retorno garantido, decisão compartilhada.
- [Antibiótico] < 6 meses; 6–23 meses bilateral ou grave; ≥ 2 anos grave; otorreia; adulto.
- Reavaliação em 48–72 h se não melhorar; antes se piora.`,
rx: [
 {titulo: "Analgesia", texto: `USO ORAL
1. Paracetamol 500 mg (adulto) ______ 1 caixa
   Tomar 1 a 2 comprimidos de 6/6h se dor (máximo 4 g/dia).
   Criança: paracetamol 200 mg/mL – 10 a 15 mg/kg/dose de 6/6h.
   OU
2. Ibuprofeno 600 mg (adulto) ______ 1 caixa
   Tomar 1 comprimido de 8/8h por até 3 dias, após refeições.`, dose: "NV"},
 {titulo: "Antibiótico – adulto", texto: `USO ORAL
1. Amoxicilina 500 mg ______ 21 cápsulas
   Tomar 1 cápsula de 8/8h por 7 dias.`, dose: "NV"},
 {titulo: "Antibiótico – criança", texto: `USO ORAL
1. Amoxicilina 250 mg/5 mL suspensão ______ ___ frascos
   Dar ___ mL de 8/8h (50 mg/kg/dia) por ___ dias.
   Dose alta (80–90 mg/kg/dia em 2 tomadas) se < 2 anos em creche ou antibiótico nos últimos 30 dias.
   Duração: 10 dias se < 2 anos; 7 dias de 2 a 5 anos; 5–7 dias se ≥ 6 anos.`, dose: "NV", nota: "SBP: amoxicilina 40–50 mg/kg/dia como escolha usual [F]. AAP: 80–90 mg/kg/dia [C]."},
 {titulo: "Falha em 48–72 h ou conjuntivite purulenta associada", texto: `USO ORAL
1. Amoxicilina + clavulanato 250 mg + 62,5 mg/5 mL suspensão ______ ___ frascos
   Dar ___ mL de 8/8h (amoxicilina 40 mg/kg/dia; na formulação 4:1 não ultrapassar 10 mg/kg/dia de clavulanato) por 10 dias.
   Se dose alta de amoxicilina indicada: associar amoxicilina 250 mg/5 mL para completar 80–90 mg/kg/dia de amoxicilina.
   Adulto: amoxicilina 500 mg + clavulanato 125 mg, 1 comprimido de 8/8h por 7 dias.`, dose: "NV"}
],
orient: `A dor de ouvido melhora com o analgésico dado nos horários. Muitas otites saram sozinhas em 2 a 3 dias.
Se foi combinado esperar, volte para reavaliar em 48 a 72 horas, ou antes se piorar.
Se recebeu antibiótico, use até o fim. Não coloque nada dentro do ouvido.`,
alarme: ["Inchaço, vermelhidão ou dor atrás da orelha", "Orelha descolada para frente", "Rosto torto (paralisia facial)", "Dor de cabeça forte, vômitos ou rigidez na nuca", "Sonolência ou irritabilidade extrema", "Febre alta persistente após 48–72 h de antibiótico"],
encaminhar: "Mastoidite, paralisia facial ou sinais meníngeos → urgência. OMA recorrente (≥ 3 em 6 meses ou ≥ 4 em 12 meses) ou efusão > 3 meses → otorrino.",
sus: {nacional: "RENAME 2024: amoxicilina 500 mg e 50 mg/mL, amoxicilina+clavulanato 500/125 mg e suspensão 50+12,5 mg/mL, paracetamol 200 mg/mL, ibuprofeno 50 mg/mL (Básico).", betim: "REMUME Betim: amoxicilina 500 mg e 250 mg/5 mL, amoxicilina+clavulanato 500/125 mg e 250+62,5 mg/5 mL, paracetamol 500 mg e 200 mg/mL, ibuprofeno 600 mg disponíveis. Ibuprofeno suspensão infantil não consta."},
evid: {resumo: "Antibiótico reduz pouco a dor no 2º–3º dia (NNT em torno de 16, a conferir) e aumenta diarreia e exantema; o benefício é maior em < 2 anos com OMA bilateral e em otorreia. A observação com retorno garantido é estratégia aceita pela AAP. A SBP mantém amoxicilina 40–50 mg/kg/dia por falta de dados brasileiros de resistência; a AAP usa 80–90 mg/kg/dia.", certeza: "Moderada (estimada)", fontes: ["sbp_oma", "aap_oma", "rename", "remume"]},
divergencia: "SBP (2023): amoxicilina 40–50 mg/kg/dia na OMA não complicada. AAP (2013): 80–90 mg/kg/dia. A divergência é de contexto (resistência do pneumococo nos EUA versus ausência de dados nacionais), não de método. Para criança com fator de risco para pneumococo resistente, a dose alta é razoável.",
mudancas: ["CIAP corrigido de H72 para H71 (H72 é otite média serosa).", "Exame objetivo corrigido: o modelo do Notion descrevia achados de otite externa (dor no trágus, edema do conduto). OMA se define por abaulamento da membrana timpânica.", "Azitromicina retirada da 1ª linha; sulfametoxazol+trimetoprima retirado (baixa eficácia contra os agentes da OMA).", "Incluídos critérios de observação, doses pediátricas e duração por idade."],
nv: ["Todas as doses: conferir na bula e no peso do paciente.", "NNT citado de memória."]
},
{
id: "otite-externa", nome: "Otite externa aguda", sistema: "Respiratório e ORL", risco: "baixo",
ciap: "H70", cid: "H60.3", tags: "ouvido de nadador dor trágus conduto gotas otológicas",
S: `Paciente, ___ anos, com otalgia ___ (D/E) há ___ dias, com prurido e/ou otorreia. Relaciona com ___ (banho de piscina/mar, uso de cotonete, fones).
Nega febre alta, perda auditiva súbita, vertigem.
Diabetes ou imunossupressão: ___. Perfuração timpânica conhecida ou tubo de ventilação: ___. Alergias: ___.`,
O: `BEG, afebril.
${VITAIS}
Dor à tração do pavilhão e à pressão do trágus ___ (D/E).
Otoscopia: conduto auditivo externo hiperemiado e edemaciado, com secreção ___; membrana timpânica ___ (visualizada íntegra / não visualizada por edema).
Sem celulite periauricular. Sem linfonodomegalia relevante.`,
A: `Otite externa aguda difusa ___ (D/E), sem extensão além do conduto.`,
P: `- Prescrevo gotas otológicas antimicrobianas com ou sem corticoide.
- Oriento manter o ouvido seco (algodão com vaselina no banho) e não usar cotonete.
- Analgesia oral.
- Antibiótico oral não indicado, salvo celulite periauricular, diabetes, imunossupressão ou falha do tratamento tópico.
- Retorno se não melhorar em 48–72 h.`,
rx: [
 {trilha: "evidencia", titulo: "Gotas com quinolona", texto: `USO OTOLÓGICO
1. Ciprofloxacino solução otológica (com ou sem corticoide) ______ 1 frasco
   Pingar ___ gotas no ouvido ___ de ___/___h por 7 dias, deitado de lado por 3 a 5 minutos.`, dose: "NV", nota: "Seguro mesmo com membrana timpânica perfurada ou não visualizada. Posologia varia por produto."},
 {trilha: "fora", titulo: "Alternativa da RENAME (só com membrana íntegra)", texto: `USO OTOLÓGICO
1. Polimixina B + neomicina + fluocinolona + lidocaína solução otológica ______ 1 frasco
   Pingar ___ gotas no ouvido ___ de ___/___h por 7 dias.`, dose: "NV", nota: "Neomicina é ototóxica: não usar se perfuração possível ou membrana não visualizada."},
 {titulo: "Analgesia", texto: `USO ORAL
1. Ibuprofeno 600 mg ______ 1 caixa
   Tomar 1 comprimido de 8/8h por até 5 dias, após refeições.
   OU
2. Dipirona 500 mg ______ 1 caixa
   Tomar 1 a 2 comprimidos de 6/6h se dor.`, dose: "NV"}
],
orient: `É uma inflamação do canal do ouvido. O tratamento é com gotas, aplicadas deitado de lado.
Mantenha o ouvido seco: no banho, use um algodão com vaselina na entrada do ouvido. Não use cotonete.
Evite piscina e mar até melhorar.`,
alarme: ["Febre alta", "Vermelhidão e inchaço que se espalham para a orelha ou o rosto", "Dor muito intensa e que piora, principalmente em diabéticos", "Paralisia do rosto", "Perda de audição importante"],
encaminhar: "Diabético ou imunossuprimido com dor desproporcional, tecido de granulação no conduto ou paralisia facial → urgência (otite externa necrotizante).",
idealsus: {ideal: "Gotas de quinolona (ciprofloxacino ou ofloxacino), com ou sem corticoide: não ototóxicas e utilizáveis mesmo sem ver a membrana timpânica.", sus: "A RENAME 2024 tem apenas polimixina B + neomicina + fluocinolona + lidocaína otológica. A REMUME Betim não tem nenhuma solução otológica.", ponte: "Em Betim, o tratamento tópico depende de compra pelo paciente; prescrever pelo nome genérico e orientar a opção de menor custo. Se a membrana não for visualizada, evitar produtos com aminoglicosídeo."},
sus: {nacional: "RENAME 2024: polimixina B + neomicina + fluocinolona + lidocaína solução otológica (Básico). Ciprofloxacino otológico não consta.", betim: "REMUME Betim: nenhuma solução otológica consta. Ibuprofeno 600 mg e dipirona disponíveis."},
evid: {resumo: "Tratamento tópico é a 1ª linha; antibiótico oral não acrescenta benefício na otite externa não complicada e é usado em excesso. Não há diferença consistente entre as classes de gotas; a escolha considera ototoxicidade, custo e posologia.", certeza: "Moderada (estimada)", fontes: ["aaohns_oe", "rename", "remume"]},
mudancas: ["CIAP corrigido de H74 para H70 (H74 é otite média crônica).", "Retirados cefalexina e claritromicina orais de rotina.", "Retirado 'Oto-Betnovate (betametasona + clorfenesina)': composição e registro não verificados.", "Incluído alerta de ototoxicidade dos aminoglicosídeos e de otite externa necrotizante."],
nv: ["Posologia das gotas varia por produto: conferir bula.", "Registro e composição de marcas comerciais não verificados."]
},
{
id: "conj-bact", nome: "Conjuntivite bacteriana", sistema: "Olhos", risco: "baixo",
ciap: "F70", cid: "H10.0", tags: "olho vermelho secreção purulenta colírio antibiótico remela",
S: `Paciente, ___ anos, com hiperemia ocular ___ (unilateral/bilateral) há ___ dias, com secreção purulenta e pálpebras coladas ao acordar.
Nega dor ocular intensa, fotofobia, baixa de acuidade visual, trauma.
Usa lente de contato: ___. Alergias: ___.`,
O: `BEG.
Acuidade visual: OD ___ / OE ___ (preservada).
Hiperemia conjuntival difusa com secreção mucopurulenta ___ (OD/OE/AO). Córnea transparente. Pupilas isocóricas e fotorreagentes. Sem hiperemia perilímbica.
Sem edema ou hiperemia periorbitária.`,
A: `Conjuntivite aguda de provável etiologia bacteriana, sem sinais de ceratite, uveíte ou glaucoma agudo.`,
P: `- Oriento limpeza das secreções com gaze e SF 0,9%, higiene das mãos e não compartilhar toalhas.
- Explico que a maioria melhora sozinha em até 7 dias e que o colírio acelera um pouco a melhora.
- Prescrevo colírio antibiótico (ou receita para usar se não melhorar em 3 dias, decisão compartilhada).
- Suspender lente de contato até a cura.
- Retorno se não melhorar em 3 dias ou imediato se dor, fotofobia ou piora da visão.`,
rx: [
 {titulo: "Colírio antibiótico", texto: `USO OFTÁLMICO
1. Tobramicina 0,3% colírio ______ 1 frasco
   Pingar 1 a 2 gotas no(s) olho(s) afetado(s) de 4/4h enquanto acordado, por 5 a 7 dias.`, dose: "NV", nota: "Usuário de lente de contato: preferir quinolona (cobertura de Pseudomonas) e encaminhar se não melhorar em 24–48 h."}
],
orient: `A conjuntivite bacteriana passa de uma pessoa para outra. Lave as mãos sempre que tocar nos olhos e não divida toalhas ou fronhas.
Limpe a secreção com gaze e soro. Use o colírio nos horários.
Não use lente de contato até melhorar.`,
alarme: ["Dor forte no olho", "Visão embaçada que não melhora ao piscar", "Incômodo intenso com a luz", "Vermelhidão concentrada em volta da íris", "Inchaço da pálpebra com febre"],
encaminhar: "Dor intensa, fotofobia, baixa visual, usuário de lente com piora, recém-nascido → oftalmologia de urgência.",
sus: {nacional: "RENAME 2024: gentamicina colírio 5 mg/mL e pomada, tetraciclina pomada oftálmica (Básico). Tobramicina e quinolonas oftálmicas não constam.", betim: "REMUME Betim: tobramicina 3 mg/mL colírio disponível (único antibiótico oftálmico da lista)."},
evid: {resumo: "Colírio antibiótico aumenta a chance de remissão clínica nos dias 2 a 5 em relação ao placebo, com efeito modesto; a maioria dos casos resolve sem tratamento. Prescrição postergada é estratégia aceitável.", certeza: "Moderada (Cochrane, citada de memória)", fontes: ["cochrane_conj", "rename", "remume"]},
mudancas: ["Removido esquema de 2 gotas a cada hora (não consta em diretriz conferida).", "Ciprofloxacino colírio deixou de ser alternativa geral e ficou para usuário de lente de contato.", "Retiradas linhas de exame sistêmico sem relação com o quadro.", "Incluídos sinais de alarme oftalmológicos."],
nv: ["Posologia da tobramicina: conferir bula."]
},
{
id: "conj-viral", nome: "Conjuntivite viral", sistema: "Olhos", risco: "baixo",
ciap: "F70", cid: "B30.9", tags: "olho vermelho lacrimejamento adenovírus contagiosa colírio lubrificante",
S: `Paciente, ___ anos, com hiperemia ocular, lacrimejamento e sensação de areia há ___ dias, iniciada em um olho e passando ao outro ___. Secreção aquosa.
Quadro gripal recente ou contato com caso: ___.
Nega dor intensa, fotofobia, baixa visual. Lente de contato: ___.`,
O: `BEG.
Acuidade visual preservada.
Hiperemia conjuntival difusa com secreção serosa ___ (OD/OE/AO). Linfonodo pré-auricular ___ (palpável/não palpável). Córnea transparente. Pupilas isocóricas e fotorreagentes.`,
A: `Conjuntivite aguda de provável etiologia viral, sem sinais de ceratite.`,
P: `- Explico evolução de 7 a 14 dias e alto contágio nos primeiros 10 dias.
- Antibiótico não indicado.
- Oriento compressas frias, lubrificante ocular e higiene rigorosa das mãos.
- Afastamento de escola/trabalho com contato próximo enquanto houver secreção.
- Não usar colírio com corticoide sem avaliação oftalmológica.
- Retorno se dor, fotofobia, baixa visual ou mais de 14 dias.`,
rx: [
 {titulo: "Lubrificante", texto: `USO OFTÁLMICO
1. Lágrima artificial (hipromelose ou dextrano + hipromelose) colírio ______ 1 frasco
   Pingar 1 gota em cada olho até de 4/4h, por 7 a 14 dias.`, dose: "NV"},
 {titulo: "Se prurido importante", texto: `USO ORAL
1. Loratadina 10 mg ______ 5 comprimidos
   Tomar 1 comprimido 1 vez ao dia por até 5 dias.`, dose: "NV"}
],
orient: `A conjuntivite por vírus é muito contagiosa, mas melhora sozinha em 1 a 2 semanas. Antibiótico não ajuda.
Lave as mãos com frequência, não coce os olhos e troque fronhas e toalhas todos os dias.
Compressas frias e o colírio lubrificante aliviam o incômodo.`,
alarme: ["Dor no olho", "Visão embaçada", "Incômodo intenso com a luz", "Duração maior que 2 semanas"],
encaminhar: "Baixa visual, fotofobia ou membranas/pseudomembranas → oftalmologia.",
sus: {nacional: "RENAME 2024: hipromelose 0,3% e 0,5% colírio, loratadina 10 mg (Básico).", betim: "REMUME Betim: dextrano 1 mg/mL + hipromelose 3 mg/mL colírio e loratadina 10 mg disponíveis."},
evid: {resumo: "Não há tratamento antiviral eficaz para conjuntivite por adenovírus na APS; o manejo é sintomático e de controle de transmissão. Corticoide tópico sem acompanhamento oftalmológico pode prolongar a doença e mascarar ceratite herpética.", certeza: "Baixa a moderada (estimada)", fontes: ["cab28", "rename", "remume"]},
mudancas: ["Marcas comerciais retiradas da prescrição; mantida a orientação de lubrificante sem vasoconstritor."],
nv: ["Posologia do lubrificante: conferir bula."]
},
{
id: "conj-alergica", nome: "Conjuntivite alérgica", sistema: "Olhos", risco: "baixo",
ciap: "F71", cid: "H10.1", tags: "olho coçando prurido rinite alérgica sazonal colírio antialérgico",
S: `Paciente, ___ anos, com prurido ocular intenso, lacrimejamento e hiperemia bilateral há ___ dias/semanas, com piora ao contato com ___ (poeira, pólen, animais).
Rinite alérgica associada: ___. Nega secreção purulenta, dor, baixa visual.`,
O: `BEG.
Acuidade visual preservada.
Hiperemia conjuntival bilateral com secreção aquosa/mucoide, edema palpebral leve ___. Papilas em conjuntiva tarsal ___. Córnea transparente.`,
A: `Conjuntivite alérgica ___ (sazonal/perene), sem sinais de ceratite.`,
P: `- Oriento evitar coçar, controle ambiental e compressas frias.
- Prescrevo lubrificante ocular e anti-histamínico oral.
- Colírio anti-histamínico/estabilizador de mastócito, se acessível, é a 1ª linha tópica.
- Não usar corticoide tópico sem oftalmologista.
- Retorno se sem melhora em 2 semanas.`,
rx: [
 {trilha: "sus", titulo: "Lubrificante + anti-histamínico oral", texto: `USO OFTÁLMICO
1. Lágrima artificial colírio ______ 1 frasco
   Pingar 1 gota em cada olho até 4 a 6 vezes ao dia.

USO ORAL
2. Loratadina 10 mg ______ 1 caixa
   Tomar 1 comprimido 1 vez ao dia enquanto houver sintomas.`, dose: "NV"},
 {trilha: "evidencia", titulo: "Colírio antialérgico", texto: `USO OFTÁLMICO
1. Olopatadina 0,1% colírio ______ 1 frasco
   Pingar 1 gota em cada olho de 12/12h.
   OU
2. Cetotifeno 0,025% colírio ______ 1 frasco
   Pingar 1 gota em cada olho de 12/12h.`, dose: "NV"}
],
orient: `Sua conjuntivite é alérgica e não passa para outras pessoas.
Evite coçar os olhos, que piora a inflamação. Compressas frias ajudam.
Diminua o contato com o que desencadeia a alergia: poeira, ácaros, pelos de animais, fumaça.`,
alarme: ["Dor no olho", "Visão embaçada", "Incômodo intenso com a luz"],
encaminhar: "Ceratoconjuntivite (vernal/atópica), uso crônico de corticoide ou sem resposta → oftalmologia.",
idealsus: {ideal: "Colírio com anti-histamínico/estabilizador de mastócito (olopatadina, cetotifeno): alívio mais rápido do prurido que o anti-histamínico oral.", sus: "Não constam na RENAME 2024 nem na REMUME Betim. Disponível: lubrificante e loratadina oral.", ponte: "Oferecer receita do colírio para compra quando sintomas forem intensos; manter o esquema do SUS para os demais."},
sus: {nacional: "RENAME 2024: hipromelose colírio e loratadina (Básico). Colírios antialérgicos não constam.", betim: "REMUME Betim: dextrano + hipromelose colírio e loratadina 10 mg e 1 mg/mL disponíveis."},
evid: {resumo: "Anti-histamínicos tópicos e estabilizadores de mastócito reduzem prurido e hiperemia em ECR de curta duração. O anti-histamínico oral ajuda sobretudo quando há rinite associada e pode ressecar a superfície ocular.", certeza: "Moderada (estimada)", fontes: ["rename", "remume"]},
mudancas: ["Retiradas marcas comerciais estrangeiras; mantidos os princípios ativos.", "Separado o que está disponível no SUS do que depende de compra."],
nv: ["Posologias dos colírios: conferir bula.", "Registro ANVISA e preço das apresentações: não verificados."]
},
{
id: "asma-crise", nome: "Crise de asma leve a moderada (adulto)", sistema: "Respiratório e ORL", risco: "alto",
ciap: "R96", cid: "J45.9", tags: "chiado sibilância falta de ar bombinha salbutamol broncoespasmo exacerbação",
alerta: "Crise grave (fala em palavras, agitação ou sonolência, FR > 30, FC > 120, SpO₂ < 90%, tórax silencioso): iniciar salbutamol + O₂ e acionar transporte para urgência.",
S: `Paciente, ___ anos, asmático, com dispneia, sibilância e tosse há ___ h/dias, desencadeadas por ___ (infecção viral, alérgeno, frio, interrupção do tratamento).
Uso de broncodilatador nas últimas 24 h: ___ jatos. Corticoide inalatório de manutenção: ___ (qual, dose, adesão).
Crises graves prévias, internação ou intubação: ___. Corticoide oral no último ano: ___ vezes.
Comorbidades: ___. Alergias: ___.`,
O: `REG/BEG, fala ___ (frases completas / frases curtas / palavras), ___ (calmo/agitado).
${VITAIS}  PFE: ___ L/min (___ % do previsto/melhor pessoal)
Uso de musculatura acessória: ___. AR: sibilos ___ (difusos/expiratórios), MV ___.
Reavaliação após 1 h: SpO₂ ___%, FR ___, sibilos ___, fala ___.`,
A: `Exacerbação de asma ___ (leve/moderada), com resposta ___ (boa/parcial) ao broncodilatador, sem critérios de gravidade.`,
P: `- Salbutamol spray com espaçador a cada 20 min na 1ª hora.
- O₂ se SpO₂ < 93% (alvo 93–95%).
- Corticoide oral por 5 a 7 dias.
- Reavaliação em 1 h: boa resposta → alta com plano escrito; resposta parcial ou ruim → urgência.
- Na alta: prescrevo/ajusto corticoide inalatório de manutenção (não deixar só broncodilatador), reviso técnica inalatória e adesão.
- Retorno em 2 a 7 dias.`,
rx: [
 {titulo: "Na unidade", texto: `USO INALATÓRIO
1. Salbutamol 100 mcg/dose aerossol com espaçador
   4 a 10 jatos a cada 20 minutos na 1ª hora; depois conforme resposta.

USO ORAL
2. Prednisona 20 mg – 2 comprimidos (40 mg) agora.`, dose: "NV"},
 {trilha: "sus", titulo: "Alta", texto: `USO ORAL
1. Prednisona 20 mg ______ 10 comprimidos
   Tomar 2 comprimidos (40 mg) pela manhã por 5 dias.

USO INALATÓRIO
2. Beclometasona 200 mcg/dose aerossol ______ 1 frasco
   Fazer 1 jato de 12/12h com espaçador, todos os dias (manutenção). Enxaguar a boca após.
3. Salbutamol 100 mcg/dose aerossol ______ 1 frasco
   Fazer 2 a 4 jatos com espaçador se falta de ar ou chiado, até de 4/4h.`, dose: "NV", nota: "Dose de beclometasona conforme etapa de tratamento; conferir PCDT/GINA."},
 {trilha: "evidencia", titulo: "Alta – trilha 1 da GINA (budesonida+formoterol)", texto: `USO ORAL
1. Prednisona 20 mg ______ 10 comprimidos
   Tomar 2 comprimidos (40 mg) pela manhã por 5 dias.

USO INALATÓRIO
2. Budesonida 200 mcg + formoterol 6 mcg (pó inalatório) ______ 1 dispositivo
   Inalar 1 dose sempre que tiver falta de ar ou chiado (máximo 12 inalações/dia).
   [Asma moderada/grave: + 1 a 2 inalações de 12/12h como manutenção.]`, dose: "NV", nota: "Disponível no SUS só pelo CEAF (PCDT Asma). Fora disso, compra pelo paciente. Não associar a salbutamol de rotina."}
],
orient: `Use o corticoide inalatório todos os dias, mesmo sem sintomas: ele previne crises.
A bombinha de alívio (salbutamol) é só para quando tiver falta de ar ou chiado. Use sempre com espaçador.
Termine os comprimidos de corticoide.
Se precisar da bombinha de alívio mais de 2 vezes por semana, a asma não está controlada: volte à unidade.`,
alarme: ["Falta de ar que não melhora com 4 a 6 jatos da bombinha", "Dificuldade para falar frases inteiras", "Lábios ou unhas arroxeados", "Sonolência ou confusão", "Precisar da bombinha a cada 1–2 horas"],
encaminhar: "Crise grave, ausência de melhora após 1 h, SpO₂ < 90% persistente, história de crise quase fatal → urgência. Asma não controlada apesar de tratamento otimizado → pneumologia; avaliar critérios do PCDT para budesonida+formoterol (CEAF).",
idealsus: {ideal: "GINA prefere, em adultos e adolescentes, budesonida+formoterol em baixa dose como alívio (e manutenção nas etapas maiores), por reduzir exacerbações graves em relação ao salbutamol isolado. A atualização de 2026 incluiu ICS-formoterol como opção na crise leve.", sus: "Na APS do SUS: salbutamol, beclometasona, ipratrópio e prednisona (Componente Básico). Budesonida+formoterol só pelo CEAF, com critérios do PCDT.", ponte: "Na APS, usar sempre corticoide inalatório regular junto do salbutamol (trilha 2 da GINA). Para quem cumpre critérios, abrir processo no CEAF com laudo (LME)."},
sus: {nacional: "RENAME 2024: salbutamol 100 mcg/dose e 5 mg/mL, beclometasona 50, 200 e 250 mcg/dose, ipratrópio, prednisona 5 e 20 mg, prednisolona solução oral (Básico). Formoterol+budesonida: Componente Especializado.", betim: "REMUME Betim: salbutamol aerossol e solução para nebulização, beclometasona 50 e 200 mcg/dose, ipratrópio, prednisona 5 e 20 mg, prednisolona 3 mg/mL disponíveis."},
evid: {resumo: "Broncodilatador por espaçador equivale à nebulização na crise leve a moderada. Corticoide sistêmico precoce reduz recaída e internação. Salbutamol sem corticoide inalatório aumenta risco de crises graves; por isso a GINA não recomenda SABA isolado desde 2019.", certeza: "Alta a moderada (estimada)", fontes: ["gina", "pcdt_asma", "rename", "remume"]},
mudancas: ["Entrada nova (o Notion só tinha o gatilho 'Dispneia aguda')."],
nv: ["Doses de prednisona e beclometasona: conferir bula e PCDT Asma vigente.", "Critérios do CEAF para budesonida+formoterol: conferir PCDT."]
},
// ───────────────────────── DIGESTIVO
{
id: "diarreia", nome: "Diarreia aguda (adulto)", sistema: "Digestivo", risco: "moderado",
ciap: "D73", cid: "A09", tags: "gastroenterite vômito desidratação soro caseiro SRO disenteria",
S: `Paciente, ___ anos, com ___ evacuações líquidas/dia há ___ dias. Sangue ou muco nas fezes: ___. Febre: ___. Vômitos: ___ episódios. Dor abdominal: ___.
Diurese: ___ (preservada/reduzida). Aceita líquidos: ___.
Contatos com quadro semelhante, alimento suspeito, viagem, antibiótico recente: ___.
Comorbidades: ___. Medicações: ___ (diuréticos, IECA, metformina?). Alergias: ___.`,
O: `___ estado geral, mucosas ___ (úmidas/secas), turgor ___, enchimento capilar ___ s.
${VITAIS}  Peso: ___ kg
ABD: flácido, RHA aumentados, dor leve difusa à palpação, sem irritação peritoneal, sem massas.`,
A: `Diarreia aguda ___ (aquosa / com sangue), ___ (sem desidratação / com algum grau de desidratação), sem sinais de gravidade.`,
P: `- Reidratação oral com SRO após cada evacuação; manter alimentação habitual.
- Antibiótico não indicado na diarreia aquosa sem sinais de gravidade.
- [Disenteria com febre ou toxemia, imunossupressão] Antibiótico.
- Loperamida pode ser usada em adulto sem febre e sem sangue nas fezes.
- Orientar suspensão temporária de diurético, IECA/BRA e metformina se desidratação.
- Retorno se sinais de desidratação ou piora em 48 h.`,
rx: [
 {titulo: "Reidratação e sintomáticos", texto: `USO ORAL
1. Sais para reidratação oral ______ ___ envelopes
   Diluir 1 envelope em 1 litro de água filtrada ou fervida. Tomar 1 copo após cada evacuação líquida e aos poucos ao longo do dia.
2. Metoclopramida 10 mg ______ 10 comprimidos
   Tomar 1 comprimido até de 8/8h se náuseas ou vômitos, por até 5 dias.
3. Loperamida 2 mg ______ 1 caixa (se sem febre e sem sangue)
   Tomar 2 comprimidos após a 1ª evacuação líquida e 1 após cada evacuação seguinte (máximo 8 comprimidos/dia), por até 2 dias.`, dose: "NV"},
 {titulo: "Disenteria com febre / toxemia", texto: `USO ORAL
1. Azitromicina 500 mg ______ 3 comprimidos
   Tomar 1 comprimido 1 vez ao dia por 3 dias.
   OU
2. Ciprofloxacino 500 mg ______ 6 comprimidos
   Tomar 1 comprimido de 12/12h por 3 dias.`, dose: "NV"}
],
orient: `O mais importante é repor o líquido perdido. Tome o soro de reidratação após cada evacuação e continue comendo normalmente, em pequenas porções.
Lave bem as mãos após ir ao banheiro e antes de preparar alimentos.
Se usa remédio para pressão (diurético) ou metformina e está desidratado, pergunte se deve pausar por alguns dias.`,
alarme: ["Sede intensa, boca muito seca, urina escura ou muito pouca", "Tontura ao levantar ou desmaio", "Vômitos que impedem tomar líquidos", "Sangue nas fezes com febre", "Dor abdominal forte e contínua", "Diarreia por mais de 7 dias"],
encaminhar: "Desidratação grave, vômitos incoercíveis, abdome agudo, idoso frágil com desidratação → urgência. Surto (2 ou mais pessoas após mesmo alimento) → notificar à vigilância.",
sus: {nacional: "RENAME 2024: SRO, metoclopramida 10 mg, ondansetrona 4 e 8 mg comprimido, azitromicina, ciprofloxacino (Básico). Loperamida não consta.", betim: "REMUME Betim: SRO, metoclopramida 10 mg, loperamida 2 mg, azitromicina 500 mg, ciprofloxacino 500 mg disponíveis. Ondansetrona só injetável."},
evid: {resumo: "Reidratação oral é a intervenção que reduz complicações. Antibiótico empírico na diarreia aquosa não encurta o quadro de forma relevante e pode piorar desfechos na infecção por E. coli produtora de Shiga. Loperamida reduz a duração em adulto sem disenteria.", certeza: "Moderada (estimada)", fontes: ["cab28", "rename", "remume"]},
mudancas: ["Entrada nova (o Notion tinha só o gatilho 'Vômitos e diarreia intensa').", "Criança: usar o manejo por planos A/B/C do MS (não incluído neste modelo de adulto)."],
nv: ["Doses: conferir bula.", "Resistência local a ciprofloxacino em Shigella/Campylobacter: não verificada."]
},
{
id: "dispepsia", nome: "Dispepsia", sistema: "Digestivo", risco: "moderado",
ciap: "D07", cid: "K30", tags: "queimação estômago epigastralgia azia gastrite omeprazol h pylori",
S: `Paciente, ___ anos, com dor/queimação epigástrica e/ou plenitude pós-prandial há ___ semanas/meses. Pirose/regurgitação: ___.
Uso de AINE, AAS ou corticoide: ___. Álcool/tabaco: ___.
Sinais de alarme: perda de peso ___, disfagia ___, vômitos persistentes ___, melena/hematêmese ___, história familiar de câncer gástrico ___.
Tratamento prévio para H. pylori ou endoscopia: ___.`,
O: `BEG, corado.
${VITAIS}  Peso: ___ kg
ABD: flácido, dor leve à palpação de epigástrio, sem massas, sem visceromegalias, sem irritação peritoneal.`,
A: `Dispepsia ___ (não investigada / funcional), sem sinais de alarme.`,
P: `- Suspender AINE se possível; orientar redução de álcool e tabaco.
- < 60 anos sem alarme: testar e tratar H. pylori se o teste estiver acessível; senão, IBP por 4–8 semanas.
- ≥ 60 anos com dispepsia nova ou qualquer sinal de alarme: solicitar endoscopia.
- Retorno em 4–8 semanas para reavaliar resposta.`,
rx: [
 {titulo: "IBP empírico", texto: `USO ORAL
1. Omeprazol 20 mg ______ 30 cápsulas
   Tomar 1 cápsula em jejum, 30 minutos antes do café, por 4 a 8 semanas.`, dose: "NV"},
 {titulo: "Erradicação de H. pylori (teste positivo)", texto: `USO ORAL – 14 dias
1. Omeprazol 20 mg ______ 56 cápsulas
   Tomar 2 cápsulas de 12/12h, antes das refeições.
2. Amoxicilina 500 mg ______ 56 cápsulas
   Tomar 2 cápsulas (1 g) de 12/12h.
3. Claritromicina 500 mg ______ 28 comprimidos
   Tomar 1 comprimido de 12/12h.`, dose: "NV", nota: "Doses de IBP no consenso brasileiro variam; conferir antes de prescrever. Controle de erradicação ≥ 4 semanas após o fim."}
],
orient: `Evite anti-inflamatórios (como ibuprofeno e diclofenaco), excesso de álcool e cigarro.
O omeprazol deve ser tomado em jejum, meia hora antes do café da manhã.
Se fizer o tratamento para a bactéria H. pylori, tome todos os remédios pelos 14 dias.`,
alarme: ["Fezes pretas como borra de café ou vômito com sangue", "Dificuldade ou dor para engolir", "Perda de peso sem querer", "Vômitos repetidos", "Palidez e cansaço progressivos"],
encaminhar: "Hemorragia digestiva → urgência. Sinal de alarme ou ≥ 60 anos → endoscopia via regulação.",
idealsus: {ideal: "Em < 60 anos sem alarme, a estratégia 'testar e tratar' H. pylori com teste não invasivo (respiratório da ureia ou antígeno fecal) é preferida ao IBP empírico.", sus: "Testes não invasivos para H. pylori raramente estão disponíveis na APS; a confirmação costuma depender de endoscopia regulada.", ponte: "Se não houver teste, IBP empírico por 4–8 semanas; persistindo, solicitar endoscopia com biópsia para H. pylori."},
sus: {nacional: "RENAME 2024: omeprazol 10 e 20 mg, amoxicilina 500 mg, claritromicina 500 mg (Básico).", betim: "REMUME Betim: omeprazol 20 mg, amoxicilina 500 mg, claritromicina 500 mg disponíveis. Disponibilidade de teste de H. pylori não verificada."},
evid: {resumo: "A ACG/CAG recomenda endoscopia em ≥ 60 anos com dispepsia e testar e tratar H. pylori nos mais jovens. Erradicar H. pylori melhora sintomas em parte dos pacientes (NNT alto) e reduz risco de úlcera e câncer gástrico.", certeza: "Moderada (estimada)", fontes: ["acg_dispepsia", "hp_consenso", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Esquema e doses de erradicação: conferir no consenso brasileiro vigente.", "Acesso a teste de H. pylori em Betim: não verificado."]
},
// ───────────────────────── GENITURINÁRIO / SAÚDE SEXUAL
{
id: "cistite", nome: "Cistite não complicada (mulher)", sistema: "Geniturinário e saúde sexual", risco: "baixo",
ciap: "U71", cid: "N30.0", tags: "infecção urinária ITU disúria ardência para urinar nitrofurantoína",
S: `Paciente, ___ anos, com disúria, polaciúria e urgência miccional há ___ dias. Hematúria: ___.
Nega febre, calafrios, dor lombar, náuseas/vômitos, corrimento vaginal.
Gestação: ___ (DUM ___). Episódios no último ano: ___. Antibiótico recente: ___.
Comorbidades: ___ (DM, DRC). Alergias: ___.`,
O: `BEG, afebril.
${VITAIS}
ABD: dor leve à palpação suprapúbica. Giordano negativo bilateralmente.`,
A: `Cistite aguda não complicada.`,
P: `- Diagnóstico clínico; EAS/urocultura não necessários no quadro típico.
- Urocultura se recorrência, falha de tratamento, sintomas atípicos ou gestação.
- Prescrevo antibiótico de curta duração e analgesia.
- Oriento hidratação.
- Retorno se não melhorar em 48–72 h ou se febre/dor lombar.`,
rx: [
 {titulo: "1ª escolha", texto: `USO ORAL
1. Nitrofurantoína 100 mg ______ 20 cápsulas
   Tomar 1 cápsula de 6/6h por 5 dias, com alimento.`, dose: "NV", nota: "Evitar se ClCr < 30 mL/min e no termo da gestação."},
 {trilha: "evidencia", titulo: "Alternativa de 1ª linha – dose única", texto: `USO ORAL
1. Fosfomicina trometamol 3 g ______ 1 envelope
   Diluir em meio copo de água e tomar em dose única, à noite, após esvaziar a bexiga.`, dose: "NV", nota: "Útil se ClCr < 30 mL/min ou má adesão provável."},
 {trilha: "sus", titulo: "Alternativa no SUS Betim", texto: `USO ORAL
1. Cefalexina 500 mg ______ 28 comprimidos
   Tomar 1 comprimido de 6/6h por 7 dias.`, dose: "NV", nota: "Betalactâmicos são um pouco menos eficazes na cistite. Sulfametoxazol+trimetoprima só se resistência local < 20% (dado de Betim não verificado)."}
],
orient: `Beba bastante água. Tome o antibiótico pelo tempo indicado.
Os sintomas costumam melhorar em 1 a 3 dias.
Se tiver febre, dor nas costas ou vômitos, volte imediatamente.`,
alarme: ["Febre ou calafrios", "Dor nas costas ou no lado do corpo", "Náuseas e vômitos", "Sem melhora em 3 dias", "Gestante com qualquer sintoma urinário"],
encaminhar: "Pielonefrite com vômitos, sepse ou gestante com pielonefrite → urgência.",
idealsus: {ideal: "Nitrofurantoína 5 dias ou fosfomicina 3 g dose única são 1ª linha nas diretrizes, com baixo impacto em resistência.", sus: "Nitrofurantoína está na RENAME e na REMUME Betim. Fosfomicina não consta em nenhuma das duas.", ponte: "Nitrofurantoína cobre a maioria dos casos. Fosfomicina fica para quem tem contraindicação e pode comprar."},
sus: {nacional: "RENAME 2024: nitrofurantoína 100 mg e suspensão, cefalexina, sulfametoxazol+trimetoprima (Básico). Fosfomicina e norfloxacino não constam.", betim: "REMUME Betim: nitrofurantoína 100 mg, cefalexina 500 mg, sulfametoxazol+trimetoprima 400/80 mg disponíveis."},
evid: {resumo: "Em mulheres com disúria e polaciúria sem corrimento, a probabilidade de ITU é alta o bastante para tratar sem exame. Nitrofurantoína e fosfomicina são 1ª linha na IDSA. Quinolonas devem ser poupadas na cistite pelo risco de eventos adversos graves (alerta regulatório da FDA de 2016) e impacto em resistência.", certeza: "Moderada (estimada)", fontes: ["idsa_itu", "rename", "remume"]},
mudancas: ["Ciprofloxacino e norfloxacino 7 dias (lista do Notion) saíram da 1ª linha. Norfloxacino não consta na RENAME 2024."],
nv: ["Posologia da nitrofurantoína: conferir bula da apresentação dispensada.", "Resistência local de E. coli a sulfametoxazol+trimetoprima em Betim: não verificada."]
},
{
id: "vaginose", nome: "Vaginose bacteriana", sistema: "Geniturinário e saúde sexual", risco: "baixo",
ciap: "X84", cid: "N76.0", tags: "corrimento vaginal odor peixe acinzentado gardnerella metronidazol",
S: `Paciente, ___ anos, com corrimento vaginal acinzentado e odor fétido há ___ dias, pior após relação sexual e menstruação. Nega prurido intenso, dor pélvica, febre.
Gestação: ___. Parceria sexual: ___. Uso de preservativo: ___. Episódios prévios: ___. Alergias: ___.`,
O: `BEG, afebril.
Exame especular: corrimento ___ (branco-acinzentado, homogêneo, fino), sem hiperemia de mucosa. Colo ___.
pH vaginal: ___ (> 4,5 sugere). Teste das aminas (KOH 10%): ___.
ABD: flácido, indolor.`,
A: `Vaginose bacteriana (critérios clínicos de Amsel: ___ de 4).`,
P: `- Prescrevo metronidazol.
- Parceria sexual não precisa ser tratada.
- Ofereço testagem para HIV, sífilis e hepatites B e C.
- Oriento evitar duchas vaginais.
- Retorno se recorrência.`,
rx: [
 {titulo: "PCDT IST – 1ª escolha", texto: `USO ORAL
1. Metronidazol 250 mg ______ 28 comprimidos
   Tomar 2 comprimidos (500 mg) de 12/12h por 7 dias.
   OU
USO VAGINAL
2. Metronidazol gel vaginal 100 mg/g ______ 1 bisnaga
   Aplicar 1 aplicador cheio à noite, ao deitar, por 5 noites.`, dose: "F"},
 {titulo: "Recorrência (PCDT)", texto: `USO ORAL
1. Metronidazol 250 mg
   Tomar 2 comprimidos de 12/12h por 10 a 14 dias.
   Seguido de terapia supressiva conforme PCDT.`, dose: "F"}
],
orient: `A vaginose é um desequilíbrio das bactérias da vagina. Não é considerada uma infecção sexualmente transmissível e o parceiro não precisa tratar.
Tome o remédio pelos 7 dias. Evite duchas vaginais e sabonetes íntimos perfumados.`,
alarme: ["Dor na parte baixa da barriga", "Febre", "Dor na relação sexual que aumenta", "Gestante com corrimento ou perda de líquido"],
encaminhar: "Dor pélvica com febre → avaliar DIP. Gestante: tratar quando sintomática e seguir o pré-natal.",
sus: {nacional: "RENAME 2024: metronidazol 250 e 400 mg, metronidazol gel vaginal 100 mg/g (Básico).", betim: "REMUME Betim: metronidazol 250 mg e metronidazol gel vaginal 100 mg/g disponíveis. Metronidazol 400 mg não consta."},
evid: {resumo: "Metronidazol oral 7 dias ou gel vaginal 5 dias têm eficácia semelhante. Tratar a parceria masculina não reduz recorrência. Sobre álcool: a reação tipo dissulfiram com metronidazol é pouco documentada e o CDC 2021 deixou de exigir abstinência; a bula brasileira mantém a advertência.", certeza: "Moderada (estimada)", fontes: ["pcdt_ist", "cdc_ist", "rename", "remume"]},
mudancas: ["CIAP corrigido de B85 para X84 (B85 não corresponde a vaginose no CIAP-2).", "Esquema 'metronidazol 500 mg 12/12h' reescrito como 2 comprimidos de 250 mg, apresentação disponível em Betim.", "Orientação sobre álcool atualizada com a divergência CDC × bula."],
nv: ["Esquema para gestantes: conferir no PCDT IST vigente."]
},
{
id: "candidiase", nome: "Candidíase vulvovaginal", sistema: "Geniturinário e saúde sexual", risco: "baixo",
ciap: "X72", cid: "B37.3", tags: "corrimento branco grumoso coceira vaginal fungo miconazol fluconazol",
S: `Paciente, ___ anos, com prurido vulvar, ardor e corrimento branco grumoso há ___ dias. Dispareunia/disúria externa: ___.
Gestação: ___. DM, imunossupressão, antibiótico recente: ___. Episódios no último ano: ___. Alergias: ___.`,
O: `BEG.
Vulva: hiperemia e edema ___, fissuras ___.
Exame especular: corrimento branco, grumoso, aderido às paredes. pH vaginal: ___ (≤ 4,5).`,
A: `Candidíase vulvovaginal ___ (não complicada / recorrente / complicada).`,
P: `- Prescrevo antifúngico tópico ou oral (gestante: só tópico).
- Parceria só precisa tratar se sintomática.
- Oriento roupas íntimas de algodão e evitar duchas.
- Recorrência (≥ 4 episódios/ano): esquema de indução e manutenção, investigar DM.`,
rx: [
 {titulo: "PCDT IST – 1ª escolha (tópico)", texto: `USO VAGINAL
1. Miconazol creme vaginal 2% ______ 1 bisnaga
   Aplicar 1 aplicador cheio à noite, ao deitar, por 7 noites.
   OU
2. Nistatina creme vaginal 25.000 UI/g ______ 1 bisnaga
   Aplicar 1 aplicador cheio à noite, ao deitar, por 14 noites.`, dose: "F", nota: "Gestantes e lactantes: somente via vaginal."},
 {titulo: "PCDT IST – alternativa oral", texto: `USO ORAL
1. Fluconazol 150 mg ______ 1 cápsula
   Tomar 1 cápsula em dose única.`, dose: "F"},
 {titulo: "Recorrente (PCDT)", texto: `USO ORAL
Indução: Fluconazol 150 mg ______ 3 cápsulas
   Tomar 1 cápsula nos dias 1, 4 e 7.
Manutenção: Fluconazol 150 mg ______ 26 cápsulas
   Tomar 1 cápsula por semana por 6 meses.`, dose: "F"}
],
orient: `A candidíase é causada por um fungo e não é considerada infecção sexualmente transmissível. O parceiro só precisa tratar se tiver sintomas.
Use calcinha de algodão, evite roupas muito justas e duchas vaginais.
O creme deve ser aplicado à noite, ao deitar.`,
alarme: ["Febre ou dor na barriga", "Feridas ou bolhas na vulva", "Mais de 4 episódios por ano"],
encaminhar: "Recorrente sem resposta, suspeita de espécie não-albicans → ginecologia.",
sus: {nacional: "RENAME 2024: miconazol creme vaginal 2% e fluconazol 150 mg (Básico). Nistatina vaginal não consta (só suspensão oral).", betim: "REMUME Betim: miconazol creme vaginal 20 mg/g, nistatina creme vaginal 25.000 UI/g e fluconazol 150 mg disponíveis."},
evid: {resumo: "Azólicos tópicos e fluconazol oral têm eficácia semelhante na candidíase não complicada. Na recorrente, a manutenção semanal com fluconazol reduz recidivas enquanto é usada.", certeza: "Moderada (estimada)", fontes: ["pcdt_ist", "rename", "remume"]},
mudancas: ["Entrada nova (não havia SOAP de candidíase no Notion; havia só fluconazol na lista de prescrições)."],
nv: ["Concentração da nistatina vaginal no PCDT (100.000 UI/aplicação) difere da apresentação de Betim (25.000 UI/g): conferir bula."]
},
{
id: "tricomoniase", nome: "Tricomoníase", sistema: "Geniturinário e saúde sexual", risco: "baixo",
ciap: "X73", cid: "A59.0", tags: "corrimento amarelo esverdeado bolhoso IST trichomonas colo em framboesa",
S: `Paciente, ___ anos, com corrimento vaginal amarelo-esverdeado, abundante, com odor, há ___ dias. Prurido/ardor: ___. Disúria: ___. Dispareunia: ___.
Gestação: ___. Parcerias nos últimos 60 dias: ___. Uso de preservativo: ___. Alergias: ___.`,
O: `BEG.
Exame especular: corrimento ___ (amarelo-esverdeado, bolhoso), hiperemia de mucosa, colo com pontos hemorrágicos ___. pH vaginal: ___ (> 4,5).`,
A: `Tricomoníase (IST).`,
P: `- Prescrevo metronidazol e trato a(s) parceria(s).
- Abstinência sexual até o fim do tratamento de ambos.
- Ofereço testagem para HIV, sífilis e hepatites B e C.
- Disponibilizo preservativos.`,
rx: [
 {titulo: "PCDT IST", texto: `USO ORAL
1. Metronidazol 250 mg ______ 28 comprimidos
   Tomar 2 comprimidos (500 mg) de 12/12h por 7 dias.
   OU
2. Metronidazol 250 mg ______ 8 comprimidos
   Tomar 8 comprimidos (2 g) de uma vez, dose única.

PARCERIA: mesmo esquema.`, dose: "F", nota: "O PCDT prevê 2 g em dose única com comprimidos de 400 mg (5 cp); em Betim só há 250 mg (8 cp)."}
],
orient: `A tricomoníase é uma infecção sexualmente transmissível. Seu parceiro ou parceira também precisa tratar, mesmo sem sintomas.
Não tenha relações até os dois terminarem o tratamento.
Fizemos ou vamos oferecer testes para outras infecções.`,
alarme: ["Dor na parte baixa da barriga", "Febre", "Gestante com corrimento ou contrações"],
encaminhar: "Gestante: tratar e seguir pré-natal (associação com parto prematuro).",
sus: {nacional: "RENAME 2024: metronidazol 250 e 400 mg (Básico).", betim: "REMUME Betim: metronidazol 250 mg disponível; 400 mg não consta. Secnidazol 1 g consta."},
evid: {resumo: "Em mulheres, metronidazol por 7 dias teve maior taxa de cura que a dose única de 2 g em ECR (Kissinger, 2018); por isso o CDC 2021 prefere o esquema de 7 dias para mulheres. O PCDT aceita ambos.", certeza: "Moderada (estimada)", fontes: ["pcdt_ist", "cdc_ist", "rename", "remume"]},
divergencia: "PCDT IST: dose única de 2 g ou 7 dias, sem preferência. CDC 2021: 7 dias preferido para mulheres; dose única para homens. Diferença de data e de evidência (ECR posterior). Para mulheres com boa adesão, o esquema de 7 dias é razoável.",
mudancas: ["Entrada nova (o Notion tinha metronidazol 2 g só no bloco de pós-exposição sexual)."],
nv: ["Referência do ECR de Kissinger citada de memória."]
},
{
id: "ae", nome: "Anticoncepção de emergência", sistema: "Geniturinário e saúde sexual", risco: "moderado",
ciap: "W10", cid: "Z30.0", tags: "pílula do dia seguinte relação desprotegida levonorgestrel camisinha rompeu",
alerta: "Se relação não consentida: seguir o fluxo de violência sexual (PEP para HIV em até 72 h, profilaxia de IST, notificação compulsória).",
S: `Paciente, ___ anos, relata relação sexual desprotegida/falha de método (___) há ___ horas. DUM: ___. Ciclos ___.
Método contraceptivo atual: ___. Relação consentida: ___. Uso de indutores enzimáticos (carbamazepina, fenitoína, rifampicina, efavirenz): ___. Peso: ___ kg.`,
O: `BEG.
${VITAIS}
β-hCG/teste rápido de gravidez: ___ (se atraso menstrual).`,
A: `Indicação de anticoncepção de emergência, ___ h após exposição.`,
P: `- Prescrevo levonorgestrel em dose única o quanto antes.
- Informo que o DIU de cobre até 5 dias é o método de emergência mais eficaz e pode ser mantido.
- Ofereço testes rápidos (HIV, sífilis, hepatites) e avalio PEP se exposição de risco.
- Inicio ou ajusto contracepção regular.
- Teste de gravidez se a menstruação atrasar mais de 7 dias.`,
rx: [
 {trilha: "sus", titulo: "Levonorgestrel", texto: `USO ORAL
1. Levonorgestrel 0,75 mg ______ 2 comprimidos
   Tomar os 2 comprimidos juntos, em dose única, o quanto antes.
   (ou levonorgestrel 1,5 mg, 1 comprimido em dose única)`, dose: "NV", nota: "Eficácia maior quanto mais precoce; uso até 120 h com eficácia decrescente. Indutores enzimáticos e IMC elevado reduzem eficácia: preferir DIU de cobre."},
 {trilha: "evidencia", titulo: "Ulipristal (mais eficaz que levonorgestrel, sobretudo após 72 h)", texto: `USO ORAL
1. Acetato de ulipristal 30 mg ______ 1 comprimido
   Tomar 1 comprimido em dose única, o quanto antes, até 120 h após a relação.`, dose: "NV", nota: "Registrado no Brasil (bula 'Ulip', Reg. MS 1.3564.0003.001-2). Reduz eficácia de anticoncepcional hormonal iniciado nos 5 dias seguintes: usar preservativo nesse período."},
 {trilha: "ambos", titulo: "Método mais eficaz – DIU de cobre", texto: `PROCEDIMENTO
1. Inserção de DIU de cobre TCu 380A em até 5 dias após a relação (ou até 5 dias após a ovulação estimada).
   Mantém-se como método contraceptivo regular.`, dose: "NV"}
],
orient: `Tome os comprimidos o quanto antes. Quanto mais cedo, maior a eficácia.
A pílula de emergência não é abortiva e não protege contra infecções sexualmente transmissíveis.
A menstruação pode adiantar ou atrasar alguns dias. Se atrasar mais de 7 dias, faça teste de gravidez.
Converse com a equipe sobre um método regular.`,
alarme: ["Atraso menstrual maior que 7 dias", "Dor forte na parte baixa da barriga ou sangramento intenso", "Vômito até 3 horas depois de tomar (repetir a dose)"],
encaminhar: "Violência sexual → fluxo específico do município. Desejo de DIU de cobre → inserção na unidade ou referência no mesmo dia, se possível.",
idealsus: {ideal: "DIU de cobre em até 5 dias é o método mais eficaz. Entre os comprimidos, ulipristal 30 mg é mais eficaz que levonorgestrel, principalmente entre 72 e 120 h e com IMC alto.", sus: "DIU de cobre é fornecido pelo MS (RENAME 2024), mas a inserção no prazo depende de agenda. Levonorgestrel 0,75 mg está na REMUME Betim. Ulipristal não consta na RENAME nem na REMUME.", ponte: "Se a UBS insere DIU, oferecer no mesmo atendimento. Senão: até 72 h e IMC < 30, levonorgestrel do SUS é razoável; após 72 h, IMC ≥ 30 ou se a paciente puder comprar, ulipristal."},
sus: {nacional: "RENAME 2024: levonorgestrel 0,75 e 1,5 mg (Básico); DIU fornecido pelo MS.", betim: "REMUME Betim: levonorgestrel 0,75 mg disponível (1,5 mg não consta)."},
evid: {resumo: "Levonorgestrel previne parte das gestações esperadas, com eficácia que cai com o tempo e em IMC alto. Em metanálise de ECR (Glasier, 2010), ulipristal reduziu à metade, aproximadamente, a taxa de gestação em relação ao levonorgestrel nas primeiras 72 h e manteve eficácia até 120 h. O DIU de cobre tem taxa de falha muito baixa.", certeza: "Moderada (estimada)", fontes: ["ulip_bula", "rename", "remume"]},
mudancas: ["Adaptada à apresentação de Betim (2 comprimidos de 0,75 mg juntos).", "Incluído DIU de cobre como opção mais eficaz e o fluxo de violência sexual.", "Método de Yuzpe mantido só como recurso se não houver levonorgestrel (menos eficaz, mais náuseas)."],
nv: ["Posologia e janela de uso: conferir bula e caderno de saúde sexual e reprodutiva do MS.", "Fluxo de violência sexual de Betim: não verificado."]
},
// ───────────────────────── PELE
{
id: "escabiose", nome: "Escabiose", sistema: "Pele", risco: "baixo",
ciap: "S72", cid: "B86", tags: "sarna coceira noturna prurido família permetrina ivermectina",
S: `Paciente, ___ anos, com prurido intenso, pior à noite, há ___ semanas. Lesões em ___ (espaços interdigitais, punhos, axilas, cintura, genitais, mamas).
Contactantes com prurido: ___ (quem). Gestação/lactação: ___. Peso: ___ kg.`,
O: `BEG.
Pele: pápulas eritematosas escoriadas e túneis em ___. Lesões crostosas ___ (ausentes). Sinais de infecção secundária ___.`,
A: `Escabiose ___ (clássica), ___ (sem / com) infecção bacteriana secundária.`,
P: `- Prescrevo tratamento para o paciente e todos os contactantes ao mesmo tempo.
- Roupas de cama e de uso dos últimos 3 dias: lavar em água quente ou guardar em saco fechado por 72 h.
- Explico que o prurido pode durar 2 a 4 semanas após o tratamento.
- Retorno em 2–4 semanas se persistirem lesões novas.`,
rx: [
 {trilha: "sus", titulo: "Ivermectina", texto: `USO ORAL
1. Ivermectina 6 mg ______ ___ comprimidos
   Tomar ___ comprimidos (200 mcg/kg) em dose única, com água. Repetir a mesma dose em 7 a 14 dias.
   Referência (bula, comprimido 6 mg): 15–24 kg ½ cp; 25–35 kg 1 cp; 36–50 kg 1½ cp; 51–65 kg 2 cp; 66–79 kg 2½ cp; ≥ 80 kg 200 mcg/kg.`, dose: "NV", nota: "Não usar em gestantes, lactantes e crianças < 15 kg."},
 {trilha: "evidencia", titulo: "Permetrina 5% (obrigatória em gestantes, lactantes e < 15 kg)", texto: `USO TÓPICO
1. Permetrina 5% loção ______ 1 frasco
   À noite, aplicar do pescoço aos pés (incluir entre os dedos, unhas e genitais). Retirar no banho após 8 a 14 h. Repetir em 7 dias.`, dose: "NV"}
],
orient: `A sarna passa pelo contato com a pele. Todas as pessoas da casa precisam tratar no mesmo dia, mesmo sem coceira.
Lave em água quente as roupas de cama e as roupas usadas nos últimos 3 dias, ou guarde-as em saco plástico fechado por 3 dias.
A coceira pode continuar por algumas semanas depois do tratamento; isso não significa falha.`,
alarme: ["Lesões com pus, crostas amareladas ou febre", "Crostas grossas espalhadas pelo corpo", "Inchaço nas pernas ou urina escura (criança)"],
encaminhar: "Escabiose crostosa, imunossuprimido ou surto institucional → avaliação especializada e vigilância.",
idealsus: {ideal: "Permetrina 5% é a opção para gestantes, lactantes e crianças pequenas, onde ivermectina não é indicada.", sus: "A RENAME 2024 inclui permetrina 1% e 5% loção. A REMUME Betim não inclui permetrina; inclui ivermectina 6 mg.", ponte: "Em Betim, ivermectina para os demais contactantes; permetrina por compra para gestantes, lactantes e < 15 kg. Confirmar com a farmácia municipal se há outra via de acesso."},
sus: {nacional: "RENAME 2024: permetrina 1% e 5% loção e ivermectina 6 mg (Básico).", betim: "REMUME Betim: ivermectina 6 mg disponível; permetrina não consta."},
evid: {resumo: "Permetrina tópica e ivermectina oral têm eficácia semelhante na escabiose clássica, e a segunda dose aumenta a cura. Tratar todos os contactantes ao mesmo tempo é o determinante prático do sucesso.", certeza: "Moderada (estimada)", fontes: ["rename", "remume", "cab28"]},
mudancas: ["Entrada nova."],
nv: ["Tabela de dose de ivermectina por peso e intervalo de repetição: conferir bula.", "Uso de ivermectina em < 15 kg: fora de bula."]
},
{
id: "impetigo", nome: "Impetigo", sistema: "Pele", risco: "baixo",
ciap: "S84", cid: "L01.0", tags: "ferida crosta melicérica criança estafilococo estreptococo pomada antibiótico",
S: `Paciente, ___ anos, com lesões em ___ (face, membros) há ___ dias, iniciadas como bolhas/vesículas que evoluíram para crostas amareladas. Prurido: ___. Febre: ___.
Contactantes com lesões: ___. Peso: ___ kg. Alergias: ___.`,
O: `BEG, afebril.
Pele: ___ lesões com crostas melicéricas em ___, área total ___ (limitada / extensa). Bolhas ___. Linfonodomegalia regional ___.`,
A: `Impetigo ___ (não bolhoso / bolhoso), ___ (localizado / extenso).`,
P: `- Limpeza das lesões com água e sabão 2 a 3 vezes ao dia, retirando as crostas com delicadeza.
- Localizado: antibiótico tópico se acessível.
- Extenso, bolhoso múltiplo ou falha do tópico: antibiótico oral.
- Unhas curtas, não compartilhar toalhas; afastamento da escola até 24 h de antibiótico.
- Retorno se não melhorar em 3 a 5 dias.`,
rx: [
 {trilha: "evidencia", titulo: "Localizado – antibiótico tópico", texto: `USO TÓPICO
1. Mupirocina 2% pomada ______ 1 bisnaga
   Aplicar nas lesões, após limpeza, 3 vezes ao dia por 5 dias.`, dose: "NV"},
 {trilha: "ambos", titulo: "Extenso – antibiótico oral", texto: `USO ORAL
1. Cefalexina 500 mg ______ 28 comprimidos (adulto)
   Tomar 1 comprimido de 6/6h por 7 dias.
   Criança: cefalexina 250 mg/5 mL – 25 a 50 mg/kg/dia divididos de 6/6h por 7 dias.`, dose: "NV"}
],
orient: `Lave as feridas com água e sabão 2 a 3 vezes ao dia e retire as cascas com cuidado.
É contagioso: mantenha as unhas curtas, não coce e não divida toalhas.
A criança pode voltar à escola 24 horas após iniciar o antibiótico.`,
alarme: ["Febre", "Vermelhidão que se espalha", "Inchaço no rosto ou nas pernas e urina escura (semanas depois)"],
encaminhar: "Celulite, febre com toxemia, neonato → urgência. Edema e urina escura → avaliar glomerulonefrite pós-estreptocócica.",
idealsus: {ideal: "No impetigo localizado, antibiótico tópico (mupirocina ou ácido fusídico) é tão eficaz quanto o oral, com menos efeitos adversos.", sus: "Nenhum antibiótico tópico de pele consta na RENAME 2024 nem na REMUME Betim.", ponte: "Receita de mupirocina para compra quando possível; se o paciente não puder comprar e a lesão não for mínima, cefalexina oral. Neomicina+bacitracina não é alternativa equivalente."},
sus: {nacional: "RENAME 2024: cefalexina 500 mg e suspensão (Básico). Mupirocina e ácido fusídico não constam.", betim: "REMUME Betim: cefalexina 500 mg e 250 mg/5 mL disponíveis; sem antibiótico tópico."},
evid: {resumo: "Revisão Cochrane mostrou mupirocina e ácido fusídico superiores ao placebo e ao menos equivalentes a antibióticos orais no impetigo limitado. Para lesões extensas, a IDSA recomenda antibiótico oral com cobertura de estafilococo e estreptococo.", certeza: "Moderada (estimada)", fontes: ["idsa_pele", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Doses: conferir bula.", "Preço e disponibilidade comercial da mupirocina: não verificados."]
},
// ───────────────────────── MUSCULOESQUELÉTICO E NEUROLÓGICO
{
id: "lombalgia", nome: "Lombalgia aguda inespecífica", sistema: "Musculoesquelético e neurológico", risco: "baixo",
ciap: "L03", cid: "M54.5", tags: "dor nas costas lombar travou ciático coluna relaxante muscular",
S: `Paciente, ___ anos, com dor lombar há ___ dias, iniciada ___ (após esforço / espontânea). Irradiação para membro inferior: ___ (abaixo do joelho?).
Bandeiras vermelhas: febre ___, perda de peso ___, câncer prévio ___, trauma importante ___, uso de corticoide/osteoporose ___, retenção urinária ou incontinência ___, anestesia em sela ___, fraqueza progressiva ___, dor noturna em repouso ___.
Impacto funcional: ___. Medicações: ___. Alergias: ___.`,
O: `BEG, deambulando ___.
${VITAIS}
Coluna: contratura paravertebral lombar, dor à palpação de musculatura, sem dor à percussão de processos espinhosos.
Lasègue: ___. Força, sensibilidade e reflexos de MMII: ___ (preservados).`,
A: `Lombalgia aguda inespecífica, sem bandeiras vermelhas.`,
P: `- Exame de imagem não indicado.
- Oriento manter-se ativo, evitar repouso no leito, calor local.
- AINE na menor dose e pelo menor tempo; relaxante muscular opcional por poucos dias.
- Explico bom prognóstico (melhora na maioria em 2 a 6 semanas).
- Retorno em 2–4 semanas ou antes se bandeira vermelha.`,
rx: [
 {titulo: "Analgesia", texto: `USO ORAL
1. Ibuprofeno 600 mg ______ 15 comprimidos
   Tomar 1 comprimido de 8/8h, após as refeições, por até 5 dias.
2. Ciclobenzaprina 5 mg ______ 5 comprimidos (opcional)
   Tomar 1 comprimido à noite por até 5 dias. Pode causar sonolência.`, dose: "NV", nota: "Evitar AINE em DRC, úlcera, anticoagulação, ICC; idosos: avaliar risco (Beers)."}
],
orient: `A maioria das dores lombares melhora em algumas semanas. Ficar em movimento ajuda mais que ficar deitado.
Use calor local (bolsa morna) e faça caminhadas leves.
O anti-inflamatório deve ser tomado depois das refeições e só pelos dias indicados.
O relaxante muscular pode dar sono: não dirija após tomar.`,
alarme: ["Dificuldade para urinar ou perda de controle da urina ou das fezes", "Dormência na região genital ou anal", "Fraqueza que piora nas pernas", "Febre", "Dor que piora à noite em repouso ou perda de peso"],
encaminhar: "Síndrome da cauda equina → urgência imediata. Déficit motor progressivo, suspeita de infecção ou neoplasia → investigação prioritária.",
sus: {nacional: "RENAME 2024: ibuprofeno 200, 300 e 600 mg (Básico). Ciclobenzaprina não consta.", betim: "REMUME Betim: ibuprofeno 600 mg e ciclobenzaprina 5 mg disponíveis. Codeína 30 mg consta, mas opioide não é indicado de rotina."},
evid: {resumo: "Paracetamol isolado não foi melhor que placebo na lombalgia aguda (ECR PACE, 2014) e o NICE deixou de recomendá-lo sozinho. AINE tem efeito pequeno. Relaxantes musculares têm evidência de baixa certeza e causam sedação. Opioides não melhoram desfechos e trazem riscos.", certeza: "Moderada (estimada)", fontes: ["nice_lombar", "rename", "remume"]},
mudancas: ["Entrada nova. Nimesulida, diclofenaco e cetoprofeno da lista de prescrições do Notion não constam na RENAME 2024; mantido ibuprofeno."],
nv: ["Doses: conferir bula.", "Referência do ECR PACE citada de memória."]
},
{
id: "migranea", nome: "Migrânea (crise)", sistema: "Musculoesquelético e neurológico", risco: "moderado",
ciap: "N89", cid: "G43.9", tags: "enxaqueca dor de cabeça latejante fotofobia náusea cefaleia triptano",
S: `Paciente, ___ anos, com cefaleia ___ (unilateral, pulsátil), intensidade ___/10, há ___ h, com náuseas ___, fotofobia ___, fonofobia ___. Aura: ___.
Padrão semelhante a crises prévias: ___. Dias de cefaleia/mês: ___. Dias/mês com analgésico: ___.
Bandeiras vermelhas: início súbito "pior da vida" ___, febre/rigidez de nuca ___, déficit neurológico ___, > 50 anos com cefaleia nova ___, piora com Valsalva ___, gestação/puerpério ___, imunossupressão ___, mudança de padrão ___.`,
O: `BEG, ___ (fotofóbico).
${VITAIS}
Neuro: consciente, orientado, pupilas isocóricas, sem déficit motor ou sensitivo, sem sinais meníngeos, marcha normal. Fundo de olho: ___.`,
A: `Migrânea ___ (sem/com aura), crise ___ (moderada/intensa), sem sinais de alarme para cefaleia secundária.`,
P: `- Tratamento da crise com AINE ou dipirona + antiemético.
- Diário de cefaleia; identificar gatilhos e uso excessivo de analgésicos.
- Profilaxia se ≥ 4 dias de crise/mês, crises incapacitantes ou falha do tratamento agudo.
- Retorno em 4–8 semanas para avaliar frequência.`,
rx: [
 {titulo: "Crise (SUS)", texto: `USO ORAL
1. Ibuprofeno 600 mg ______ 1 caixa
   Tomar 1 comprimido no início da dor; pode repetir após 8 h se necessário.
   OU
2. Dipirona 500 mg ______ 1 caixa
   Tomar 2 comprimidos (1 g) no início da dor; pode repetir após 6 h.
3. Metoclopramida 10 mg ______ 10 comprimidos
   Tomar 1 comprimido junto com o analgésico se náusea.`, dose: "NV", nota: "Limitar analgésico simples a < 15 dias/mês."},
 {titulo: "Profilaxia (se indicada)", texto: `USO ORAL
1. Propranolol 40 mg ______ 60 comprimidos
   Tomar 1 comprimido de 12/12h. (Evitar em asma.)
   OU
2. Amitriptilina 25 mg ______ 30 comprimidos
   Tomar ½ a 1 comprimido à noite.`, dose: "NV"},
 {trilha: "evidencia", titulo: "Triptano", texto: `USO ORAL
1. Sumatriptano 50 mg ______ 1 caixa
   Tomar 1 comprimido no início da dor; pode repetir após 2 h (máximo 200 mg/dia).`, dose: "NV", nota: "Contraindicado em doença coronariana, AVC, HAS não controlada, migrânea hemiplégica."}
],
orient: `Tome o remédio logo no início da dor; ele funciona melhor assim.
Anote no diário os dias de dor e o que pode ter desencadeado (jejum, pouco sono, estresse, alguns alimentos).
Usar analgésico em muitos dias do mês pode piorar a dor de cabeça.`,
alarme: ["Dor de cabeça súbita e muito forte, a pior da vida", "Febre com rigidez na nuca", "Fraqueza, formigamento, fala enrolada ou alteração da visão que não passa", "Confusão ou convulsão", "Dor que piora progressivamente ou acorda à noite"],
encaminhar: "Sinal de alarme → urgência. Migrânea crônica (≥ 15 dias/mês) ou refratária → neurologia.",
idealsus: {ideal: "Triptano é o tratamento específico para crises moderadas a intensas que não respondem a AINE/dipirona.", sus: "Sumatriptano não consta na RENAME 2024 nem na REMUME Betim. Naproxeno consta na RENAME apenas no Componente Especializado.", ponte: "AINE ou dipirona + metoclopramida para a maioria; triptano por compra para crises refratárias, respeitadas as contraindicações."},
sus: {nacional: "RENAME 2024: ibuprofeno, dipirona, paracetamol, metoclopramida, propranolol, amitriptilina (Básico). Triptanos não constam.", betim: "REMUME Betim: ibuprofeno 600 mg, dipirona 500 mg, metoclopramida 10 mg, propranolol 40 mg, amitriptilina 25 mg disponíveis."},
evid: {resumo: "AINE, paracetamol e dipirona têm eficácia demonstrada na crise leve a moderada; associação com metoclopramida ajuda quando há náusea. Triptanos são mais eficazes nas crises intensas. Propranolol e amitriptilina reduzem a frequência na profilaxia.", certeza: "Moderada (estimada)", fontes: ["ahs_migranea", "rename", "remume"]},
mudancas: ["CIAP corrigido de N01 (cefaleia inespecífica) para N89 (enxaqueca).", "Naproxeno 550 mg 12/12h 'por até 5 dias' retirado: uso contínuo não é tratamento de crise e o fármaco não está na Atenção Básica.", "Sumatriptano movido para bloco 'compra pelo paciente'."],
nv: ["Doses: conferir bula."]
},
{
id: "tensional", nome: "Cefaleia do tipo tensional", sistema: "Musculoesquelético e neurológico", risco: "baixo",
ciap: "N95", cid: "G44.2", tags: "dor de cabeça aperto pressão estresse nuca tensão",
S: `Paciente, ___ anos, com cefaleia bilateral em aperto/pressão, intensidade leve a moderada, há ___ h, sem náuseas, sem piora com atividade física. Fotofobia ou fonofobia: ___ (no máximo uma).
Frequência: ___ dias/mês. Uso de analgésicos: ___ dias/mês. Sono, estresse, postura: ___.
Sem sinais de alarme (ver migrânea).`,
O: `BEG.
${VITAIS}
Pericraniano: dor à palpação de trapézio e musculatura cervical ___.
Neuro: sem déficits focais, sem sinais meníngeos.`,
A: `Cefaleia do tipo tensional ___ (episódica / crônica), sem sinais de alarme.`,
P: `- Analgésico simples ou AINE na crise.
- Higiene do sono, atividade física, manejo do estresse.
- Limitar analgésicos a < 15 dias/mês.
- Crônica (≥ 15 dias/mês): profilaxia com amitriptilina.`,
rx: [
 {titulo: "Crise", texto: `USO ORAL
1. Paracetamol 500 mg ______ 1 caixa
   Tomar 2 comprimidos (1 g) se dor, até de 6/6h.
   OU
2. Ibuprofeno 600 mg ______ 1 caixa
   Tomar 1 comprimido se dor, até de 8/8h, após refeições.`, dose: "NV"},
 {titulo: "Profilaxia (crônica)", texto: `USO ORAL
1. Amitriptilina 25 mg ______ 30 comprimidos
   Tomar ½ comprimido à noite por 1 semana; depois 1 comprimido à noite.`, dose: "NV"}
],
orient: `Esse tipo de dor de cabeça está ligado a tensão, cansaço e pouco sono. Atividade física regular e sono adequado ajudam a prevenir.
Evite usar analgésico em muitos dias do mês: isso pode manter a dor.`,
alarme: ["Dor súbita e muito forte", "Febre com rigidez na nuca", "Fraqueza, formigamento ou alteração da fala", "Mudança no padrão da dor"],
encaminhar: "Sinal de alarme → urgência. Refratária → neurologia.",
sus: {nacional: "RENAME 2024: paracetamol, ibuprofeno, dipirona, amitriptilina (Básico).", betim: "REMUME Betim: paracetamol 500 mg, ibuprofeno 600 mg, dipirona 500 mg, amitriptilina 25 mg disponíveis."},
evid: {resumo: "Paracetamol 1 g e AINE são eficazes na crise. Amitriptilina tem a melhor evidência para profilaxia da forma crônica.", certeza: "Moderada (estimada)", fontes: ["rename", "remume", "cab28"]},
mudancas: ["Separada da entrada 'Cefaleia primária' do Notion."],
nv: ["Doses: conferir bula."]
},
{
id: "vppb", nome: "Vertigem posicional paroxística benigna", sistema: "Musculoesquelético e neurológico", risco: "moderado",
ciap: "H82", cid: "H81.1", tags: "tontura labirintite girando ao deitar virar na cama dix-hallpike epley",
S: `Paciente, ___ anos, com episódios de vertigem rotatória de segundos (< 1 min), desencadeados por mudança de posição da cabeça (deitar, virar na cama, olhar para cima), há ___ dias.
Náuseas: ___. Hipoacusia, zumbido: ___. Nega cefaleia intensa, diplopia, disartria, disfagia, fraqueza, alteração de marcha.
Fatores de risco cardiovascular: ___. Medicações: ___.`,
O: `BEG.
${VITAIS}  PA deitado ___ / em pé ___
Neuro: sem déficits focais, sem dismetria, marcha ___ (normal). Nistagmo espontâneo: ___ (ausente).
Dix-Hallpike: ___ (positivo à D/E: nistagmo torsional para cima após latência de alguns segundos, esgotável em < 1 min).`,
A: `VPPB de canal posterior ___ (D/E).`,
P: `- Realizada manobra de Epley do lado ___ na consulta.
- Supressor vestibular não indicado de rotina; antiemético só se náusea intensa, por poucos dias.
- Oriento risco de queda e retorno se persistir após 1 mês.
- Reavaliação em 1 mês ou antes se recorrer (repetir manobra).`,
rx: [
 {titulo: "Só se náusea intensa (curto prazo)", texto: `USO ORAL
1. Prometazina 25 mg ______ 6 comprimidos
   Tomar 1 comprimido até de 8/8h se náusea intensa, por até 2 dias. Causa sonolência.`, dose: "NV", nota: "Evitar em idosos (Beers)."}
],
orient: `A tontura vem de pequenos cristais soltos dentro do ouvido. A manobra feita hoje costuma resolver.
Levante-se devagar e com apoio nos próximos dias para não cair.
Se a tontura voltar, procure a unidade: a manobra pode ser repetida.`,
alarme: ["Tontura contínua por horas, sem relação com a posição", "Visão dupla, fala enrolada, dificuldade para engolir", "Fraqueza ou dormência", "Dificuldade para andar ou ficar em pé", "Dor de cabeça súbita e forte"],
encaminhar: "Vertigem aguda contínua com nistagmo espontâneo: aplicar HINTS; achado central ou sinal neurológico → urgência (AVC de fossa posterior). Dix-Hallpike atípico ou falha após 2–3 manobras → otorrino.",
sus: {nacional: "RENAME 2024: prometazina 25 mg (Básico). Dimenidrinato e meclizina não constam.", betim: "REMUME Betim: prometazina 25 mg disponível; dimenidrinato não consta."},
evid: {resumo: "Manobra de Epley resolve a maioria dos casos de VPPB de canal posterior em uma ou duas sessões (recomendação forte da AAO-HNS). Supressores vestibulares não são recomendados de rotina: não tratam a causa e aumentam risco de queda.", certeza: "Alta para a manobra (estimada)", fontes: ["aaohns_vppb", "rename", "remume"]},
mudancas: ["Entrada do Notion 'Tontura inespecífica' mantida lá; esta é específica para VPPB.", "Dimenidrinato 50 mg 8/8h substituído: não consta na RENAME nem na REMUME Betim, e supressor vestibular de rotina não é recomendado."],
nv: ["Dose de prometazina: conferir bula."]
},
// ───────────────────────── CARDIOVASCULAR
{
id: "pa-elevada", nome: "PA elevada sem lesão de órgão-alvo", sistema: "Cardiovascular", risco: "moderado",
ciap: "K86", cid: "I10", tags: "pressão alta crise hipertensiva urgência hipertensiva captopril nifedipino",
alerta: "Dor torácica, dispneia, déficit neurológico, confusão, alteração visual ou oligúria com PA elevada = emergência hipertensiva: urgência, independentemente do valor da PA.",
S: `Paciente, ___ anos, hipertenso há ___ anos / sem diagnóstico prévio, com PA ___ mmHg aferida ___. Sintomas: ___ (assintomático / cefaleia leve / ansiedade / dor).
Nega dor torácica, dispneia, déficit neurológico, confusão, alteração visual, oligúria.
Medicações anti-hipertensivas: ___. Adesão: ___ (última dose ___). Uso de AINE, descongestionante, álcool, estimulantes: ___.`,
O: `BEG, calmo.
PA 1ª aferição ___ mmHg | após 15–30 min de repouso ___ mmHg (braço ___) | FC ___ bpm | SpO₂ ___%
ACV: RCR 2T, BNF, sem sopros. AR: MV+ bilateral, sem estertores. Sem edema.
Neuro: sem déficits focais. Glicemia capilar: ___.`,
A: `Elevação importante da PA sem lesão progressiva de órgão-alvo (antes chamada urgência hipertensiva), provavelmente relacionada a ___ (má adesão / dor / ansiedade / HAS não diagnosticada).`,
P: `- Repouso e nova aferição; tratar dor e ansiedade se presentes.
- Não reduzir a PA de forma rápida na unidade; nifedipino sublingual contraindicado.
- Retomar ou ajustar anti-hipertensivo oral.
- Reavaliação ambulatorial em 1 a 7 dias.
- Solicitar ECG, creatinina, potássio, EAS e glicemia se não houver recentes.`,
rx: [
 {titulo: "Ajuste oral (exemplos)", texto: `USO ORAL
1. Losartana 50 mg ______ 30 comprimidos
   Tomar 1 comprimido 1 vez ao dia.
   OU
2. Anlodipino 5 mg ______ 30 comprimidos
   Tomar 1 comprimido 1 vez ao dia.
   (Escolha conforme comorbidades, medicações atuais e função renal.)`, dose: "NV"},
 {titulo: "Se for usar dose na unidade", texto: `USO ORAL
1. Captopril 25 mg – 1 comprimido VO agora; reavaliar PA em 1 h.`, dose: "NV", nota: "Uso agudo não é obrigatório e não muda desfecho; evitar queda brusca."}
],
orient: `Sua pressão está alta, mas sem sinais de dano aos órgãos neste momento. Ela deve baixar aos poucos com o remédio de uso diário.
Tome os remédios todos os dias, no mesmo horário. Evite sal em excesso, álcool e anti-inflamatórios.
Volte para medir a pressão na data combinada.`,
alarme: ["Dor ou aperto no peito", "Falta de ar", "Fraqueza, formigamento, fala enrolada ou boca torta", "Confusão ou convulsão", "Visão turva ou perda de visão", "Dor de cabeça muito forte e súbita"],
encaminhar: "Qualquer sinal de lesão aguda de órgão-alvo → urgência (emergência hipertensiva).",
sus: {nacional: "RENAME 2024: losartana 50 mg, enalapril, captopril 25 mg, anlodipino 5 e 10 mg, hidroclorotiazida (Básico).", betim: "REMUME Betim: losartana 50 mg, enalapril 10 e 20 mg, captopril 25 mg, anlodipino 5 mg, hidroclorotiazida 25 mg disponíveis."},
evid: {resumo: "A Diretriz Brasileira de Hipertensão 2025 abandonou o termo 'urgência hipertensiva' e chama de elevação importante da PA sem lesão progressiva de órgão-alvo (PAS ≥ 180 e/ou PAD ≥ 110 mmHg sem LOA). A conduta é ambulatorial: ajuste oral e reavaliação em 1 a 7 dias, com meta inicial em torno de < 160/100 mmHg. Redução rápida não tem benefício demonstrado e pode causar isquemia.", certeza: "Baixa (pouca evidência de ECR; recomendação por consenso)", fontes: ["dbha2025", "rename", "remume"]},
mudancas: ["Entrada nova, com a nomenclatura da diretriz de 2025."],
nv: ["Texto original da Diretriz 2025 não aberto: nomenclatura e meta conferidas em resumos secundários.", "Doses: conferir bula."]
},
// ───────────────────────── INFECCIOSAS / VIGILÂNCIA
{
id: "dengue-a", nome: "Dengue – grupo A", sistema: "Infecciosas e vigilância", risco: "alto",
ciap: "A77", cid: "A90", tags: "arbovirose febre dor no corpo dor atrás dos olhos manchas aedes notificação hidratação",
alerta: "Doença dinâmica: pesquisar sinais de alarme a cada contato. Qualquer sinal de alarme = grupo C: iniciar SF 0,9% 10 mL/kg na 1ª hora e transferir. Notificação compulsória.",
S: `Paciente, ___ anos, com febre de início abrupto há ___ dias (1º dia: ___), associada a ___ (cefaleia, dor retro-orbitária, mialgia, artralgia, exantema, náuseas).
Sinais de alarme: dor abdominal intensa e contínua ___, vômitos persistentes ___, sangramento de mucosa ___, lipotimia ___, letargia/irritabilidade ___ (todos ausentes).
Diurese nas últimas 24 h: ___. Gestação: ___. Comorbidades/condições de risco: ___ (nenhuma). Uso de AAS, anticoagulante: ___.
Casos na família/vizinhança: ___.`,
O: `BEG, hidratado, corado, ___.
${VITAIS}  PA sentado ___ / em pé ___ | Peso: ___ kg | Enchimento capilar ___ s
Pele: exantema ___; petéquias ___ (ausentes). Prova do laço: ___.
ABD: flácido, indolor, sem hepatomegalia. AR: MV+, sem sinais de derrame.`,
A: `Caso suspeito de dengue, grupo A (sem sinais de alarme, sem comorbidades, grupo de risco ou condições clínicas especiais), ___º dia de doença.`,
P: `- Hidratação oral conforme peso, mantida durante a febre e até 24–48 h após a defervescência.
- Paracetamol e/ou dipirona; não usar AAS, AINE ou corticoide.
- Exames a critério médico; exame específico não é necessário para a conduta.
- Preenchido cartão de acompanhamento.
- Retorno no dia da melhora da febre (início possível da fase crítica) ou no 5º dia se a febre persistir; imediato se sinal de alarme ou sangramento.
- Notificação do caso suspeito.
- Orientados repelente e eliminação de criadouros.`,
rx: [
 {titulo: "Hidratação oral (MS 2024)", texto: `USO ORAL
1. Sais para reidratação oral ______ ___ envelopes
   Volume total por dia: 60 mL/kg = ___ litros/dia (peso ___ kg).
   1/3 do volume em soro de reidratação oral e 2/3 em água, sucos, chás, água de coco.
   Tomar 1/3 do total nas primeiras 4 a 6 horas.
   Exemplo 70 kg: 4,2 L/dia, sendo 1,4 L nas primeiras 4 a 6 h.

Criança (< 13 anos): até 10 kg 130 mL/kg/dia; 10–20 kg 100 mL/kg/dia; > 20 kg 80 mL/kg/dia.`, dose: "F"},
 {titulo: "Sintomáticos (MS 2024)", texto: `USO ORAL
1. Dipirona 500 mg ______ 1 caixa
   Tomar 1 comprimido até de 6/6h se dor ou febre.
   OU
2. Paracetamol 500 mg ______ 1 caixa
   Tomar 1 a 2 comprimidos até de 6/6h se dor ou febre (máximo 4 g/dia).

Criança: dipirona ou paracetamol 10 mg/kg/dose até de 6/6h.`, dose: "F"}
],
orient: `Beba muito líquido todos os dias, mesmo sem sede: ___ litros por dia. Um terço deve ser soro de reidratação.
Não tome AAS, ibuprofeno, diclofenaco, nimesulida ou outros anti-inflamatórios, nem corticoide.
O período mais perigoso é quando a febre baixa (entre o 3º e o 7º dia). Volte à unidade no dia em que a febre passar.
Use repelente para não transmitir a doença a outras pessoas da casa.`,
alarme: ["Dor forte e contínua na barriga", "Vômitos que não param", "Sangramento de gengiva, nariz, vômito ou fezes com sangue", "Tontura ou desmaio ao levantar", "Sonolência, irritabilidade ou confusão", "Pouca urina", "Falta de ar"],
encaminhar: "Sinal de alarme ou aumento progressivo do hematócrito → grupo C: SF 0,9% 10 mL/kg na 1ª hora em qualquer ponto de atenção e transferência. Comorbidade, idoso, gestante, lactente ou sangramento de pele → grupo B: hemograma obrigatório com resultado em até 2–4 h.",
sus: {nacional: "SRO, dipirona e paracetamol: RENAME 2024 (Básico). Hemograma e exames específicos conforme rede local.", betim: "REMUME Betim: SRO, dipirona 500 mg e 500 mg/mL, paracetamol 500 mg e 200 mg/mL disponíveis. Fluxo municipal de hemograma rápido e de referência não verificado."},
evid: {resumo: "O manejo segue o estadiamento A–D do MS (6ª edição, 2024), baseado na classificação da OMS. A 6ª edição ampliou os grupos de risco (destaque para idosos), que passam a ser conduzidos como grupo B. A hidratação precoce e o reconhecimento dos sinais de alarme são as medidas que reduzem óbito.", certeza: "Recomendação normativa do MS; certeza da evidência não graduada no documento", fontes: ["ms_dengue", "rename", "remume"]},
mudancas: ["Entrada nova (o Notion tinha apenas o código CID/CIAP na tabela de agudos).", "Dose de dipirona segue o Apêndice H do MS (1 comprimido de 500 mg até 6/6h), menor que a usada em outros modelos."],
nv: ["Fluxo de referência e de hemograma em Betim: confirmar com a coordenação da APS."]
},
{
id: "raiva", nome: "Mordedura animal – profilaxia da raiva", sistema: "Infecciosas e vigilância", risco: "alto",
ciap: "S13", cid: "W54 · Z20.3", tags: "mordida cão gato morcego antirrábico vacina soro atendimento antirrábico tétano",
alerta: "Morcego ou mamífero silvestre (mesmo domiciliado): acidente sempre grave → soro (SAR/IGHAR) + 4 doses de vacina. Notificar no SINAN (atendimento antirrábico).",
S: `Paciente, ___ anos, vítima de ___ (mordedura/arranhadura/lambedura) por ___ (cão/gato/morcego/outro) há ___ horas, em ___ (local anatômico).
Animal: ___ (domiciliado, conhecido / desconhecido / fugiu). Sinais sugestivos de raiva no animal (agressividade, salivação, paralisia, dificuldade para beber): ___. Possibilidade de observação por 10 dias: ___.
Profilaxia antirrábica prévia: ___ (pré-exposição / pós-exposição em ___, quantas doses). Vacina antitetânica: última dose ___.
Lavou a ferida: ___. Imunossupressão: ___. Alergias: ___. Peso: ___ kg.`,
O: `BEG.
${VITAIS}
Ferimento: ___ (único/múltiplo), ___ (superficial/profundo/lacerado), em ___, com/sem sinais flogísticos.
Classificação: acidente ___ (leve: superficial, pouco extenso, em tronco/membros exceto mãos e pés / grave: mucosas, cabeça, face, pescoço, mãos, polpas digitais, pés; múltiplo, extenso ou profundo; lambedura de mucosa ou pele lesada).`,
A: `Exposição ao vírus da raiva por ___, acidente ___ (leve/grave), animal ___ (observável / não observável / silvestre). Conduta conforme NT 8/2022-MS.`,
P: `- Lavagem abundante da ferida com água e sabão; antissepsia.
- Conduta antirrábica:
  · Cão/gato sem sinais de raiva e observável: observar o animal por 10 dias; não iniciar profilaxia.
  · Cão/gato não observável, leve: vacina dias 0, 3, 7 e 14.
  · Cão/gato não observável, grave, ou com sinais de raiva: vacina dias 0, 3, 7 e 14 + soro.
  · Morcego/silvestre: sempre soro + vacina 0, 3, 7, 14.
- Atualizar vacina antitetânica.
- Avaliar antibiótico profilático (mão, ferida profunda, gato, imunossuprimido).
- Notificação no SINAN. Orientar retorno nas datas; faltoso não reinicia esquema.`,
rx: [
 {titulo: "Vacina antirrábica (NT 8/2022)", texto: `USO INTRAMUSCULAR
1. Vacina raiva (inativada) – volume total do frasco (0,5 ou 1,0 mL conforme fabricante)
   Aplicar no deltoide (vasto lateral da coxa em < 2 anos) nos dias 0, 3, 7 e 14. Não aplicar no glúteo.
   D0 ___/___  D3 ___/___  D7 ___/___  D14 ___/___
   (Via intradérmica: 0,2 mL divididos em 2 sítios de 0,1 mL, mesmos dias, onde houver equipe treinada.)`, dose: "F"},
 {titulo: "Soro – quando indicado (NT 8/2022)", texto: `1. Soro antirrábico (SAR) 40 UI/kg = ___ UI   OU   Imunoglobulina humana antirrábica (IGHAR) 20 UI/kg = ___ UI
   Infiltrar o volume total, ou o máximo possível, dentro e ao redor da(s) lesão(ões).
   Se não for possível infiltrar tudo, aplicar o restante IM no grupo muscular mais próximo da lesão, nunca no mesmo grupo da vacina.
   Aplicar o quanto antes; no máximo até 7 dias após a 1ª dose da vacina (depois disso é contraindicado).`, dose: "F", nota: "Em escassez de SAR/IGHAR, a NT orienta infiltrar apenas no local da ferida."},
 {titulo: "Profilaxia antibiótica (se indicada)", texto: `USO ORAL
1. Amoxicilina 500 mg + clavulanato 125 mg ______ 15 comprimidos
   Tomar 1 comprimido de 8/8h por 5 dias.`, dose: "NV", nota: "Indicar em mordedura de gato, mãos/face, ferida profunda ou puntiforme, imunossupressão."}
],
orient: `Volte nas datas marcadas para todas as doses da vacina. Se faltar, venha assim que puder: não é preciso recomeçar.
Se o animal for de casa ou conhecido, observe-o por 10 dias. Se ele adoecer, mudar de comportamento, desaparecer ou morrer, avise a unidade imediatamente.
Mantenha a ferida limpa com água e sabão.`,
alarme: ["Vermelhidão, calor, pus ou inchaço que aumenta na ferida", "Febre", "O animal adoeceu, sumiu ou morreu nos 10 dias", "Formigamento ou dor no local da mordida semanas depois"],
encaminhar: "Soro (SAR/IGHAR) conforme referência municipal. Ferida extensa, de face ou com lesão de estruturas → avaliação cirúrgica.",
sus: {nacional: "Vacina raiva (inativada), soro antirrábico e imunoglobulina humana antirrábica: RENAME 2024, Componente Estratégico (MS). Amoxicilina+clavulanato 500/125 mg: Básico.", betim: "REMUME Betim: amoxicilina+clavulanato 500/125 mg disponível. Imunobiológicos seguem a rede de imunização; ponto de aplicação do soro em Betim não verificado."},
evid: {resumo: "A NT 8/2022 adotou o esquema de 4 doses (dias 0, 3, 7, 14) recomendado pela OMS e dispensou a profilaxia em agressões graves por cão ou gato sem sinais de raiva que possam ser observados por 10 dias. Nas Américas, a transmissão por morcegos e silvestres passou a predominar sobre a canina.", certeza: "Recomendação normativa do MS", fontes: ["nt_raiva", "rename", "remume"]},
mudancas: ["CIAP corrigido de A71 (sarampo no CIAP-2) para S13 (mordedura animal).", "Local de aplicação do restante do soro corrigido: o Notion indicava 'glúteo'; a NT orienta o grupo muscular mais próximo da lesão.", "Incluída a regra de não iniciar profilaxia em cão/gato observável sem sinais de raiva, inclusive em acidente grave.", "Notion tinha 2 cenários (leve/grave) unificados em um modelo com a árvore de decisão."],
nv: ["Quadro 3 da NT (imagem) não foi lido diretamente; a árvore acima vem do texto da NT e de painel municipal que a reproduz.", "Esquema antitetânico: conferir Guia de Vigilância em Saúde.", "Dose do antibiótico: conferir bula."]
}
];
