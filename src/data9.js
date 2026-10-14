// ───────────── LOTE 9 – revisão 09/10/2026
Object.assign(FONTES, {
  gina: FONTES.gina || {t: "Global Initiative for Asthma (GINA), 2024 (diretriz).", f: "C", url: ""},
  aap_febre_lactente: {t: "Pantell RH et al. AAP Clinical Practice Guideline: Evaluation and Management of Well-Appearing Febrile Infants 8 to 60 Days Old, 2021 (diretriz).", f: "C", url: ""},
  da_guias: {t: "AAD Guidelines of care for atopic dermatitis (topical therapies), 2023; EuroGuiDerm Atopic Eczema Guideline, 2022; PCDT Dermatite Atópica (ciclosporina – CEAF) (diretrizes; norma).", f: "C", url: ""},
  nice_delirium: {t: "NICE CG103. Delirium: prevention, diagnosis and management, 2010 (atualizada 2023); Confusion Assessment Method (CAM) (diretriz).", f: "C", url: ""},
  quedas_2022: {t: "Montero-Odasso M et al. World guidelines for falls prevention and management for older adults, 2022; USPSTF – Falls prevention 2024 (diretrizes).", f: "C", url: ""},
  lei_13931: {t: "Lei nº 13.931/2019 (altera a Lei nº 10.778/2003): casos com indícios ou confirmação de violência contra a mulher devem ser comunicados à autoridade policial em até 24 h (lei; texto conferido via Dizer o Direito).", f: "F", url: "https://www.dizerodireito.com.br/2019/12/lei-139312019-profissionais-de-saude.html"},
  olho_vermelho: {t: "Revisões sobre olho vermelho na APS (sinais de alarme: dor, baixa visual, fotofobia, pupila alterada, trauma químico) e AAO Preferred Practice Patterns (revisões; diretriz).", f: "C", url: ""},
  dii: {t: "Revisões e diretrizes (ECCO/ACG) sobre suspeita de doença inflamatória intestinal na atenção primária: sinais de alarme, calprotectina fecal e encaminhamento (diretrizes).", f: "C", url: ""}
});

CONDICOES.push(
// ───────────────────────── PEDIATRIA
{
id: "asma-crianca", nome: "Crise de asma / sibilância na criança", sistema: "Pediatria", risco: "alto",
ciap: "R96 · R03", cid: "J45.9", tags: "asma criança chiado sibilância broncoespasmo bombinha espaçador prednisolona",
alerta: "< 2 anos com 1º episódio de sibilância + IVAS: provável bronquiolite – usar o modelo próprio (sem corticoide de rotina). SpO₂ < 92%, fala entrecortada ou incapacidade de mamar, tiragem importante, cianose, sonolência/agitação, tórax silencioso ou sem resposta após 1 h de broncodilatador: urgência (O₂ e remoção).",
S: `Criança de ___ anos, com tosse ___, chiado ___, cansaço ___ há ___ h/dias. Desencadeante ___ (IVAS, alérgeno, exercício). Uso de broncodilatador antes da consulta ___ (quantos jatos, resposta). Crises prévias ___, internações/UTI ___, uso de corticoide oral no último ano ___. Tratamento de manutenção ___ (adesão, técnica com espaçador). Peso ___ kg.`,
O: `___ estado geral, consciência ___, fala ___.
FC ___ | FR ___ | SpO₂ ___% (AA) | Tax ___
AR: sibilos ___, MV ___, tiragem ___, uso de musculatura acessória ___.
Gravidade: ___ (leve / moderada / grave).`,
A: `Crise de asma ___ (leve / moderada) em criança de ___ anos, ___ (boa / parcial) resposta ao broncodilatador.`,
P: `- Salbutamol com espaçador a cada 20 min na 1ª hora (calculadora pediátrica).
- O₂ para manter SpO₂ 94–98%.
- Corticoide oral precoce na crise moderada ou sem resposta completa.
- Ipratrópio associado nas crises moderadas/graves (na 1ª hora).
- Reavaliar após 1 h: boa resposta → alta com plano; parcial/má → urgência.
- Na alta: revisar técnica do espaçador, iniciar/ajustar corticoide inalatório, retorno em 2–7 dias.`,
rx: [
 {trilha: "ambos", titulo: "Crise – SUS Betim", texto: `USO INALATÓRIO (com espaçador; máscara se < 4 anos)
1. Salbutamol 100 mcg/jato – 1 jato a cada 2–3 kg (mín. 2, máx. 10) a cada 20 min na 1ª hora; depois de 4/4h conforme necessidade.
2. Brometo de ipratrópio 20 mcg/jato – 2 a 4 jatos junto às 3 primeiras doses de salbutamol (crise moderada/grave).

USO ORAL
3. Prednisolona 3 mg/mL – 1–2 mg/kg 1 vez ao dia por 3–5 dias (máx. 20 mg < 2 anos; 30 mg 2–5 anos; 40 mg 6–11 anos).`, dose: "NV", nota: "Use a calculadora pediátrica para volumes. Nebulização com salbutamol 5 mg/mL é alternativa se não houver espaçador."},
 {trilha: "ambos", titulo: "Manutenção após a crise", texto: `USO INALATÓRIO (com espaçador)
1. Beclometasona 50 mcg/jato – ≤ 5 anos: 1 jato de 12/12h (100 mcg/dia); 6–11 anos: 1–2 jatos de 12/12h (dose baixa). Reavaliar em 4–8 semanas.`, dose: "NV", nota: "Indicar se crises frequentes, sintomas > 2x/semana ou crise grave. Enxaguar a boca após uso."}
],
orient: `Use a bombinha sempre com o espaçador (com máscara se a criança for pequena): 1 jato, 5 a 10 respirações, depois o próximo jato.
Se a falta de ar voltar antes de 4 horas ou piorar, procure atendimento.
Dê o corticoide pela manhã por todos os dias indicados.`,
alarme: ["Falta de ar que não melhora com a bombinha", "Dificuldade para falar, mamar ou comer", "Afundamento entre as costelas ou no pescoço", "Lábios arroxeados", "Criança muito sonolenta ou agitada"],
encaminhar: "Crise grave, sem resposta em 1 h, SpO₂ < 92% → urgência. Asma não controlada ou crises frequentes → pneumopediatria.",
sus: {nacional: "RENAME 2024: salbutamol aerossol e solução para inalação, ipratrópio, beclometasona 50 e 250 mcg, prednisolona 1 e 3 mg/mL (Básico); budesonida/formoterol (Especializado – PCDT Asma).", betim: "REMUME Betim: salbutamol aerossol e 5 mg/mL nebulização, ipratrópio aerossol e solução, beclometasona 50 e 200 mcg, prednisolona 3 mg/mL disponíveis."},
evid: {resumo: "GINA: broncodilatador de curta ação com espaçador é tão eficaz quanto nebulização; corticoide oral precoce reduz internação; ipratrópio associado reduz internação em crises moderadas/graves. Corticoide inalatório de manutenção reduz crises.", certeza: "Alta (estimada)", fontes: ["gina", "pcdt_asma", "rename", "remume"]},
mudancas: ["Entrada nova (o modelo existente era só de adulto)."],
nv: ["Doses: conferir bula e GINA vigente."]
},
{
id: "febre-menor-3m", nome: "Febre no lactente < 3 meses", sistema: "Pediatria", risco: "alto",
ciap: "A03", cid: "R50.9 · P81.9", tags: "febre recém-nascido bebê pequeno lactente jovem infecção bacteriana grave",
alerta: "Febre documentada em casa (≥ 38 °C) nas últimas 24 h conta como febre, mesmo afebril na consulta; antitérmico recente não exclui. Todo lactente ≤ 28 dias com temperatura ≥ 38 °C: encaminhar ao hospital para avaliação completa (exames e, em geral, antibiótico parenteral). 29–90 dias: avaliação no mesmo dia em serviço com laboratório. Aparência toxêmica em qualquer idade: SAMU.",
S: `Lactente de ___ dias, com temperatura de ___ °C (aferida ___) há ___ h. Aceitação das mamadas ___. Irritabilidade/sonolência ___. Vômitos ___. Diurese ___. Prematuridade ___. Intercorrências neonatais ___ (internação, antibiótico, icterícia). Contatos com febre ___. Vacinação recente ___.`,
O: `___ estado geral (aparência ___), tônus ___, choro ___.
FC ___ | FR ___ | Tax ___ | SpO₂ ___ | Peso ___ g
Fontanela ___. Perfusão/enchimento capilar ___. Pele (petéquias, icterícia) ___. Foco: ___.`,
A: `Febre em lactente de ___ dias, ___ (com / sem) sinais de gravidade.`,
P: `- Não prescrever antitérmico para "observar em casa".
- ≤ 28 dias: encaminhamento hospitalar imediato.
- 29–90 dias: avaliação no mesmo dia em serviço com hemograma, PCR/procalcitonina, urina (cateterismo) e urocultura; conduta conforme estratificação de risco.
- Toxemia, hipotermia, apneia, petéquias: SAMU.
- Comunicar o serviço de destino e registrar dados.`,
rx: [
 {trilha: "ambos", titulo: "Sem prescrição domiciliar", texto: `CONDUTA
1. Encaminhar ao serviço de urgência pediátrica com relatório (idade em dias, temperatura, horário, aceitação, diurese).
2. Manter aleitamento; não dar antitérmico antes da avaliação, salvo orientação do serviço de destino.`, dose: "NV"}
],
orient: `Febre em bebês com menos de 3 meses precisa de avaliação no hospital hoje, mesmo que o bebê pareça bem.
Continue amamentando durante o trajeto.`,
alarme: ["Bebê mole ou difícil de acordar", "Recusa para mamar", "Respiração rápida ou gemência", "Manchas roxas na pele", "Temperatura baixa (< 36 °C)"],
encaminhar: "Todos → urgência pediátrica (≤ 28 dias: hospital).",
sus: {nacional: "Rede de urgência pediátrica.", betim: "Serviço de urgência pediátrica de referência em Betim: confirmar."},
evid: {resumo: "A febre no lactente jovem associa-se a infecção bacteriana grave (ITU, bacteremia, meningite) em proporção relevante, maior no 1º mês. A diretriz AAP 2021 estratifica 8–60 dias com exames laboratoriais; neonatos ≤ 21–28 dias são avaliados em hospital.", certeza: "Moderada (estimada)", fontes: ["aap_febre_lactente", "nice_febre"]},
mudancas: ["Entrada nova (o modelo de febre existente vale para 3–36 meses)."],
nv: ["Referência de urgência pediátrica: confirmar."]
},
{
id: "dermatite-atopica", nome: "Dermatite atópica (eczema)", sistema: "Pele", risco: "baixo",
ciap: "S87", cid: "L20.9", tags: "dermatite atópica eczema pele seca coceira criança corticoide tópico hidratante",
alerta: "Crostas melicéricas e piora súbita (infecção bacteriana) ou vesículas umbilicadas dolorosas com febre (eczema herpeticum – urgência).",
S: `Paciente de ___ anos, com lesões pruriginosas em ___ (face, dobras, extensores) há ___, com períodos de piora ___. Sono prejudicado pelo prurido ___. Asma/rinite ___. História familiar ___. Desencadeantes (sabonetes, calor, tecidos sintéticos, banhos quentes) ___. Tratamentos usados ___.`,
O: `BEG.
Pele: xerose ___, placas eritematodescamativas/liquenificadas em ___, escoriações ___, exsudação/crostas ___. Extensão aproximada ___%. Infecção secundária ___.`,
A: `Dermatite atópica ___ (leve / moderada / grave), em ___ (crise / controle).`,
P: `- Hidratação da pele diária (base do tratamento), inclusive fora das crises.
- Banhos mornos e curtos, sabonete suave só nas áreas necessárias.
- Crise: corticoide tópico na menor potência eficaz por 5–7 dias, depois manutenção intermitente (2x/semana) nas áreas de recorrência.
- Face e dobras: corticoide de baixa potência por poucos dias ou inibidor de calcineurina.
- Infecção secundária: tratar (ver impetigo).
- Moderada/grave refratária: dermatologia (PCDT – ciclosporina via CEAF).`,
rx: [
 {trilha: "sus", titulo: "Crise – SUS Betim", texto: `USO TÓPICO
1. Dexametasona 0,1% creme ______ 1 bisnaga
   Aplicar fina camada 1 vez ao dia nas lesões do corpo por 5–7 dias; depois 2 vezes por semana nas áreas que costumam voltar.
   Evitar uso prolongado em face, dobras e genitais.`, dose: "NV"},
 {trilha: "evidencia", titulo: "Hidratante e anti-inflamatório para face/dobras", texto: `USO TÓPICO
1. Hidratante sem fragrância (ex.: vaselina, base com ureia 5% em > 2 anos) – aplicar em todo o corpo 2 vezes ao dia, logo após o banho.
2. Tacrolimo 0,03% (2–15 anos) ou 0,1% (adultos) pomada – aplicar 2 vezes ao dia em face e dobras durante a crise; depois 2 vezes por semana.`, dose: "NV", nota: "Hidratante reduz crises e uso de corticoide (Cochrane). Tacrolimo não causa atrofia (útil em face). Não constam na RENAME (Básico) nem na REMUME."},
 {trilha: "fora", titulo: "Hidrocortisona 1% (RENAME Básico, não consta na REMUME Betim)", texto: `USO TÓPICO
1. Hidrocortisona 1% creme – aplicar 1–2 vezes ao dia em face e dobras por até 7 dias.`, dose: "NV"}
],
orient: `A pele com dermatite precisa de hidratante todos os dias, mesmo quando está boa.
Banhos mornos e rápidos, sabonete suave e roupas de algodão ajudam. Mantenha as unhas curtas.
Use o corticoide na quantidade e pelo tempo indicados; ele é seguro assim.`,
alarme: ["Bolhas ou feridas com dor e febre", "Crostas amareladas que se espalham", "Coceira que impede dormir apesar do tratamento"],
encaminhar: "Moderada/grave refratária, suspeita de alergia alimentar relevante → dermatologia/alergologia.",
idealsus: {ideal: "Hidratação diária + corticoide tópico nas crises; inibidor de calcineurina para face e dobras (AAD 2023).", sus: "Betim tem dexametasona 0,1% creme (média potência). Hidratantes, hidrocortisona 1% e tacrolimo não constam na REMUME.", ponte: "Dexametasona do SUS para o corpo; hidratante por compra (vaselina é a opção mais barata); tacrolimo por compra para face/dobras."},
sus: {nacional: "RENAME 2024: hidrocortisona 1% creme, dexametasona 0,1% creme (Básico); ciclosporina oral (Especializado – PCDT Dermatite Atópica).", betim: "REMUME Betim: dexametasona 0,1% creme e loratadina disponíveis."},
evid: {resumo: "Emolientes reduzem crises e necessidade de corticoide; corticoides tópicos são a base do tratamento das crises; manutenção intermitente (2x/semana) reduz recaídas. Tacrolimo é eficaz e não atrofia a pele.", certeza: "Moderada a alta (estimada)", fontes: ["da_guias", "rename", "remume"]},
mudancas: ["Preenche a entrada 'Eczema leve e localizado' do Notion (ampliada para dermatite atópica)."],
nv: ["Doses: conferir bula."]
},
// ───────────────────────── SAÚDE DO IDOSO
{
id: "delirium", nome: "Confusão aguda no idoso (delirium)", sistema: "Saúde do idoso", risco: "alto",
ciap: "P71", cid: "F05.9", tags: "delirium confusão mental idoso agitado desorientado infecção medicamento",
alerta: "Delirium é emergência médica: buscar a causa (infecção, hipóxia, hipoglicemia, AVC, retenção urinária, fecaloma, desidratação, medicamentos, abstinência). Sinais vitais alterados, déficit focal, queda com trauma craniano ou incapacidade de cuidado em casa: urgência.",
S: `Paciente, ___ anos, com mudança aguda (horas a dias) do comportamento: ___ (desatenção, desorientação, sonolência ou agitação, alucinações), flutuante ___. Estado prévio (cognição, funcionalidade): ___.
Sintomas de infecção ___, dor ___, constipação ___, diurese ___, quedas ___. Medicamentos novos ou alterados ___ (benzodiazepínicos, anticolinérgicos, opioides, antidepressivos). Álcool ___.`,
O: `___ estado geral, hidratação ___.
${VITAIS}  Glicemia capilar ___
CAM: início agudo/flutuação ___, desatenção ___, pensamento desorganizado ___, alteração de consciência ___.
Exame: foco infeccioso ___, globo vesical ___, fecaloma ___, déficit focal ___.`,
A: `Delirium (CAM positivo), causa provável ___.`,
P: `- Identificar e tratar a causa; revisar e suspender medicamentos desencadeantes.
- Exames conforme suspeita: hemograma, eletrólitos, função renal, glicemia, EAS/urocultura, RX de tórax, ECG.
- Medidas não farmacológicas: acompanhante, óculos/aparelho auditivo, orientação, hidratação, sono, mobilização.
- Antipsicótico em dose baixa só se sofrimento intenso ou risco; evitar benzodiazepínico (exceto abstinência alcoólica).
- Sem condições de cuidado seguro em casa ou causa grave: urgência.`,
rx: [
 {trilha: "ambos", titulo: "Se agitação com risco (curto prazo)", texto: `USO ORAL
1. Haloperidol 2 mg/mL solução oral – 0,25 a 0,5 mg (≈ 3 a 5 gotas; 1 gota ≈ 0,1 mg, conferir bula) até de 12/12h, por no máximo poucos dias.`, dose: "NV", nota: "Antipsicótico não encurta o delirium; usar a menor dose e pelo menor tempo. Evitar em Parkinson/demência com corpos de Lewy; ECG se possível (QT)."}
],
orient: `A confusão aguda costuma ter uma causa tratável, como infecção, desidratação ou remédio. Fique junto, fale com calma, deixe a luz acesa durante o dia e o ambiente tranquilo à noite.
Use os óculos e o aparelho auditivo da pessoa. Traga todos os remédios que ela usa.`,
alarme: ["Sonolência excessiva ou difícil de acordar", "Febre ou falta de ar", "Queda ou batida na cabeça", "Fraqueza de um lado do corpo", "Não consegue beber ou urinar"],
encaminhar: "Causa grave, instabilidade ou impossibilidade de cuidado domiciliar → urgência. Delirium recorrente ou demência subjacente → geriatria.",
sus: {nacional: "RENAME 2024: haloperidol 1 e 5 mg comprimido, 2 mg/mL solução oral (Básico).", betim: "REMUME Betim: haloperidol 1 mg, 5 mg e 2 mg/mL solução oral disponíveis."},
evid: {resumo: "NICE: delirium aumenta mortalidade e institucionalização; tratamento da causa e medidas não farmacológicas são a base. Antipsicóticos não reduzem duração ou mortalidade e devem ser reservados para sofrimento ou risco.", certeza: "Moderada (estimada)", fontes: ["nice_delirium", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Doses: conferir bula (gotas por mL do haloperidol)."]
},
{
id: "queda-idoso", nome: "Queda no idoso", sistema: "Saúde do idoso", risco: "moderado",
ciap: "A80 · N17", cid: "W19 · R29.6", tags: "queda idoso caiu fratura equilíbrio osteoporose benzodiazepínico",
alerta: "Trauma craniano em uso de anticoagulante, perda de consciência, dor de quadril com incapacidade de apoiar, déficit neurológico ou queda por síncope: urgência.",
S: `Paciente, ___ anos, com queda em ___ (local, circunstância: tropeço / tontura / perda de consciência / sem motivo aparente). Quedas no último ano ___. Ficou no chão ___ min. Lesões/dor ___. Bateu a cabeça ___. Anticoagulante ___.
Medicamentos (benzodiazepínicos, antidepressivos, anti-hipertensivos, hipoglicemiantes, sedativos) ___ (total ___ medicamentos). Visão ___, audição ___, incontinência/noctúria ___, medo de cair ___, calçados/casa ___ (tapetes, iluminação, banheiro).`,
O: `BEG.
PA deitado ___ / em pé ___ | FC ___ | Glicemia ___
Lesões ___. Quadril: rotação/encurtamento ___. Neuro ___. Marcha ___. Teste Timed Up and Go: ___ s (> 12 s: risco). Força de membros inferiores (levantar da cadeira 5x) ___. Pés ___. Visão ___.`,
A: `Queda em idoso, ___ (sem / com) lesão, risco de novas quedas ___ (baixo / intermediário / alto), fatores: ___.`,
P: `- Afastar lesões e síncope (ver modelo de síncope).
- Avaliação multifatorial: medicamentos (desprescrever psicoativos), hipotensão ortostática, visão, pés/calçados, casa, cognição, incontinência.
- Exercícios de equilíbrio e fortalecimento (maior evidência de prevenção).
- Avaliar osteoporose (risco de fratura) e tratar se indicado.
- Vitamina D isolada não previne quedas em idosos da comunidade sem deficiência.
- Visita domiciliar da equipe/eMulti para adaptação do ambiente.`,
rx: [
 {trilha: "ambos", titulo: "Prevenção de quedas", texto: `ORIENTAÇÕES
1. Exercícios de equilíbrio e força 3 vezes por semana (programa supervisionado, grupo da UBS/academia da saúde ou fisioterapia).
2. Retirar tapetes soltos, iluminar o caminho noturno ao banheiro, barras de apoio no banheiro, calçados fechados com solado firme.
3. Levantar-se devagar (sentar na cama antes de ficar em pé).`, dose: "NV"},
 {trilha: "ambos", titulo: "Osteoporose confirmada / fratura por fragilidade (SUS Betim)", texto: `USO ORAL
1. Alendronato 70 mg – 1 comprimido 1 vez por semana, em jejum, com 1 copo de água, permanecendo em pé por 30 min.
2. Carbonato de cálcio 1.250 mg (REMUME) conforme ingestão alimentar; vitamina D não consta na REMUME (compra, se deficiência).`, dose: "NV", nota: "Corrigir vitamina D e cálcio antes; avaliar função renal (ClCr < 35: evitar)."}
],
orient: `Quedas podem ser prevenidas. Exercícios de equilíbrio e força são o que mais ajuda.
Deixe a casa mais segura: tire tapetes, ilumine o caminho do banheiro à noite e use calçados firmes.
Traga todos os remédios para revisarmos: alguns aumentam o risco de cair.`,
alarme: ["Dor no quadril ou não conseguir andar", "Dor de cabeça, vômitos ou sonolência após bater a cabeça", "Desmaio ou palpitação antes da queda", "Confusão nova"],
encaminhar: "Fratura ou TCE com risco → urgência. Quedas recorrentes sem causa → geriatria/fisioterapia.",
sus: {nacional: "RENAME 2024: alendronato 10 e 70 mg, carbonato de cálcio + colecalciferol (Básico).", betim: "REMUME Betim: alendronato 70 mg e carbonato de cálcio 1.250 mg disponíveis."},
evid: {resumo: "Diretrizes mundiais de 2022: exercício de equilíbrio e força reduz quedas em cerca de 23%; intervenções multifatoriais para alto risco; revisão de medicamentos psicoativos. USPSTF 2024: vitamina D não previne quedas em idosos da comunidade.", certeza: "Moderada a alta (estimada)", fontes: ["quedas_2022", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Grupos de exercício/fisioterapia na rede de Betim: confirmar.", "Doses: conferir bula."]
},
// ───────────────────────── GENITURINÁRIO
{
id: "condiloma", nome: "Verrugas anogenitais (condiloma)", sistema: "Geniturinário e saúde sexual", risco: "baixo",
ciap: "X91 · Y76", cid: "A63.0", tags: "condiloma HPV verruga genital crista de galo podofilina imiquimode ATA",
alerta: "Lesão pigmentada, ulcerada, endurecida ou que sangra: biópsia. Gestante: não usar podofilina, podofilotoxina nem imiquimode.",
S: `Paciente, ___ anos, com lesões verrucosas em ___ (vulva, vagina, colo, pênis, região perianal) há ___. Número ___. Prurido/sangramento ___. Parcerias ___. Gestação ___. HIV/imunossupressão ___. Vacina HPV ___. Preventivo em dia ___.`,
O: `BEG.
Genitália/região perianal: ___ lesões papulosas/vegetantes em ___, tamanho ___. Outras lesões ___.
Testes rápidos: HIV ___, sífilis ___, hepatites ___.`,
A: `Verrugas anogenitais (HPV) em ___, ___ lesões.`,
P: `- Diagnóstico clínico; biópsia se atípica, refratária ou imunossupressão.
- Tratamento conforme número, local e disponibilidade: químico (ATA), autoaplicado (podofilotoxina/imiquimode) ou físico (crioterapia, exérese).
- Testar outras IST; rastreamento de câncer de colo conforme protocolo.
- Vacina HPV conforme faixa etária e grupos especiais (inclui pessoas vivendo com HIV).
- Parcerias: avaliação; preservativo reduz transmissão.`,
rx: [
 {trilha: "sus", titulo: "Ácido tricloroacético 80–90% (aplicado na unidade)", texto: `PROCEDIMENTO
1. ATA 80–90% – aplicar pequena quantidade só sobre as lesões, semanalmente, protegendo a pele ao redor (vaselina); neutralizar excesso com bicarbonato ou talco.
   Pode ser usado na gestação.`, dose: "NV", nota: "Disponibilidade de ATA e crioterapia na rede de Betim: não verificada."},
 {trilha: "fora", titulo: "Autoaplicados (RENAME Básico, não constam na REMUME Betim)", texto: `USO TÓPICO
1. Podofilotoxina 0,15% creme – 2 vezes ao dia por 3 dias, pausa de 4 dias; repetir até 4 ciclos.
   OU
2. Imiquimode 5% creme – 3 vezes por semana à noite, lavar após 6–10 h, até 16 semanas.`, dose: "NV", nota: "Contraindicados na gestação."}
],
orient: `As verrugas genitais são causadas pelo HPV. O tratamento remove as lesões, mas elas podem voltar; volte para reaplicar até sumirem.
Use preservativo e faça o preventivo conforme orientado. A vacina contra HPV previne novas infecções.`,
alarme: ["Lesão que sangra, cresce rápido ou endurece", "Ferida que não cicatriza", "Dor intensa após aplicação"],
encaminhar: "Lesões extensas, intra-anais, refratárias, gestante com lesões volumosas ou imunossupressão → ginecologia/proctologia/IST.",
sus: {nacional: "RENAME 2024: podofilotoxina 1,5 mg/g creme, imiquimode 50 mg/g creme, podofilina 10–25% (Básico). Vacina HPV: PNI.", betim: "REMUME Betim: podofilotoxina, imiquimode e podofilina não constam."},
evid: {resumo: "Nenhum tratamento é claramente superior; taxas de recidiva são altas com todos. ATA e crioterapia podem ser usados na gestação. A vacina HPV quadrivalente previne verrugas genitais.", certeza: "Moderada (estimada)", fontes: ["pcdt_ist22", "cdc_ist", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Oferta de ATA/crioterapia em Betim e esquema exato do PCDT IST: conferir."]
},
{
id: "cervicite", nome: "Cervicite / corrimento cervical", sistema: "Geniturinário e saúde sexual", risco: "moderado",
ciap: "X85 · X71", cid: "N72 · A54.0 · A56.0", tags: "cervicite colo friável corrimento mucopurulento clamídia gonorreia sinusorragia",
alerta: "Dor pélvica, dor à mobilização do colo ou febre: tratar como DIP (ver modelo).",
S: `Paciente, ___ anos, com ___ (corrimento / sangramento pós-coito / sangramento intermenstrual / assintomática com parceria com uretrite). Dor pélvica ___. Disúria ___. Parcerias novas/múltiplas ___. Preservativo ___. Gestação ___.`,
O: `BEG.
Especular: colo ___ (friável, mucopus endocervical ___). Toque: dor à mobilização ___, anexos ___.
Testes rápidos: HIV ___, sífilis ___, hepatites ___. β-hCG ___.`,
A: `Cervicite mucopurulenta, sem sinais de DIP.`,
P: `- Tratamento empírico para gonococo e clamídia (abordagem sindrômica) sem aguardar exames; coletar NAAT se disponível.
- Tratar parcerias dos últimos 60 dias; abstinência por 7 dias após o tratamento de todos.
- Testes de HIV, sífilis e hepatites; preventivo conforme rastreamento.
- Gestante: teste de cura 4 semanas após o tratamento e retestagem em 3 meses (CDC 2021; conferir PCDT IST).
- Alergia grave a cefalosporina: discutir com a referência.
- Gonorreia/clamídia não são de notificação compulsória nacional; sífilis, HIV e hepatites, se diagnosticadas, sim.`,
rx: [
 {trilha: "ambos", titulo: "PCDT IST (MS) – terapia dupla", texto: `USO INTRAMUSCULAR
1. Ceftriaxona 500 mg IM, dose única (metade da ampola de 1 g IM).

USO ORAL
2. Azitromicina 500 mg ______ 2 comprimidos
   Tomar 2 comprimidos (1 g) em dose única.`, dose: "NV", nota: "Mesmo esquema do modelo de uretrite. Gestante: azitromicina (doxiciclina contraindicada)."},
 {trilha: "ambos", titulo: "Alternativa para clamídia (CDC 2021)", texto: `USO ORAL
1. Doxiciclina 100 mg ______ 14 comprimidos
   Tomar 1 comprimido de 12/12h por 7 dias (no lugar da azitromicina, fora da gestação).`, dose: "NV"}
],
orient: `A infecção no colo do útero é transmitida pelo sexo e tem cura. Suas parcerias precisam ser tratadas também.
Evite relações por 7 dias após o tratamento de todos e use preservativo.`,
alarme: ["Dor no baixo ventre", "Febre", "Sangramento intenso"],
encaminhar: "DIP com critérios de internação → urgência.",
sus: {nacional: "RENAME 2024: ceftriaxona, azitromicina 500 mg (Básico), doxiciclina (Estratégico).", betim: "REMUME Betim: ceftriaxona 1 g IM, azitromicina 500 mg e doxiciclina 100 mg disponíveis."},
evid: {resumo: "Cervicite mucopurulenta associa-se a clamídia e gonococo; o tratamento sindrômico reduz complicações (DIP, infertilidade). PCDT IST: ceftriaxona + azitromicina; CDC 2021: doxiciclina preferida para clamídia.", certeza: "Moderada (estimada)", fontes: ["pcdt_ist22", "cdc_ist", "rename", "remume"]},
divergencia: "PCDT IST (MS): ceftriaxona + azitromicina 1 g. CDC 2021: ceftriaxona + doxiciclina 7 dias. Escolher por adesão e gestação.",
mudancas: ["Entrada nova (o Notion tinha 'ISTs variadas')."],
nv: ["Esquema do PCDT IST vigente: conferir."]
},
// ───────────────────────── OLHOS
{
id: "olho-vermelho-alarme", nome: "Olho vermelho com dor ou baixa visual (sinais de alarme)", sistema: "Olhos", risco: "alto",
ciap: "F02 · F13", cid: "H40.2 · H20.0 · H16.0", tags: "olho vermelho dor visão embaçada glaucoma agudo uveíte ceratite queimadura química",
alerta: "QUEIMADURA QUÍMICA: irrigar IMEDIATAMENTE com SF 0,9% ou água corrente por 15–30 min antes de qualquer avaliação, depois oftalmologia urgente. Dor intensa + visão turva + halos + pupila médio-fixa + náuseas: glaucoma agudo → oftalmologia urgente.",
S: `Paciente, ___ anos, com olho ___ vermelho há ___, com ___ (dor intensa, baixa visual, fotofobia, halos coloridos, cefaleia, náuseas/vômitos). Trauma/produto químico ___. Lentes de contato ___. Episódios prévios ___. Doença reumatológica ___. Herpes ocular prévio ___.`,
O: `___ estado geral.
Acuidade visual: OD ___ / OE ___.
Olho ___: hiperemia ___ (difusa / perilímbica – ciliar), córnea ___ (transparente / opaca / úlcera com fluoresceína), pupila ___ (fotorreagente / médio-fixa / miótica), secreção ___. Palpação digital do globo ___ (endurecido?).`,
A: `Olho vermelho com sinal de alarme, suspeita de ___ (glaucoma agudo / uveíte / ceratite / úlcera de córnea / queimadura química).`,
P: `- Medir acuidade visual em todos.
- Sinais de alarme: dor moderada/intensa, baixa visual, fotofobia, injeção ciliar, pupila alterada, opacidade corneana, usuário de lente de contato, trauma químico.
- Encaminhar à oftalmologia no mesmo dia/urgência.
- Não prescrever corticoide tópico sem avaliação oftalmológica (piora ceratite herpética e úlcera).
- Analgesia; antiemético se glaucoma agudo; deitar em decúbito dorsal.
- Não instilar midriático (tropicamida/ciclopentolato) se suspeita de glaucoma agudo. Usuário de lente de contato: não ocluir o olho.`,
rx: [
 {trilha: "ambos", titulo: "Queimadura química", texto: `PROCEDIMENTO
1. Irrigação contínua com soro fisiológico 0,9% (ou água corrente) por 15–30 minutos, com pálpebras abertas e evertidas; remover partículas.
2. Encaminhar à oftalmologia urgente.`, dose: "NV"},
 {trilha: "ambos", titulo: "Glaucoma agudo – até a avaliação", texto: `USO OFTÁLMICO
1. Pilocarpina 2% colírio – 1 gota no olho afetado, repetir em 15 min (somente se orientado pela regulação/oftalmologia).

USO ORAL
2. Analgésico (dipirona 1 g) e antiemético (metoclopramida 10 mg) se necessário.`, dose: "NV", nota: "Acetazolamida oral não consta na REMUME Betim. Não atrasar a remoção."}
],
orient: `Olho vermelho com dor forte ou visão embaçada precisa de avaliação do oftalmologista hoje.
Não use colírios por conta própria, principalmente os que contêm corticoide.`,
alarme: ["Dor forte no olho", "Visão que piora", "Sensibilidade à luz", "Mancha branca na córnea", "Náuseas com dor no olho"],
encaminhar: "Todos → oftalmologia urgente.",
sus: {nacional: "RENAME 2024: pilocarpina 2% colírio, acetazolamida 250 mg (Básico e Especializado), timolol (Básico).", betim: "REMUME Betim: pilocarpina 2% colírio, fluoresceína 1% e SF 0,9% disponíveis; acetazolamida e timolol não constam. Oftalmologia de urgência de referência: confirmar."},
evid: {resumo: "Dor, baixa visual, fotofobia e alteração pupilar distinguem causas graves (glaucoma agudo, uveíte, ceratite) da conjuntivite. A irrigação imediata e prolongada é o fator mais importante no prognóstico da queimadura química.", certeza: "Moderada (estimada)", fontes: ["olho_vermelho", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Oftalmologia de urgência de referência: confirmar."]
},
// ───────────────────────── DIGESTIVO
{
id: "dii-suspeita", nome: "Diarreia crônica / suspeita de doença inflamatória intestinal", sistema: "Digestivo", risco: "moderado",
ciap: "D11 · D94", cid: "K52.9 · K50.9 · K51.9", tags: "diarreia crônica sangue nas fezes doença de Crohn retocolite calprotectina",
alerta: "Diarreia sanguinolenta com febre, taquicardia, desidratação, distensão abdominal ou > 6 evacuações com sangue/dia (colite grave): urgência.",
S: `Paciente, ___ anos, com diarreia há ___ semanas (> 4 semanas = crônica), ___ evacuações/dia, sangue ___, muco ___, noturna ___, urgência ___. Dor abdominal ___. Perda de peso ___. Febre ___.
Manifestações extraintestinais: artralgia ___, lesões de pele ___, olho vermelho ___, aftas ___, lesões perianais (fístula/abscesso) ___. Viagem/água ___. Antibiótico recente ___. Medicamentos (metformina, IBP, AINE, laxativos) ___. História familiar de DII ou câncer colorretal ___. Tabagismo ___.`,
O: `___ estado geral, hidratação ___.
${VITAIS}  Peso ___ (variação ___)
ABD: dor ___, massa ___. Região perianal ___. Pele/articulações/olhos ___.`,
A: `Diarreia crônica ___ (com / sem) sinais de alarme, suspeita de ___ (DII / celíaca / infecção / outra).`,
P: `- Exames: hemograma, PCR/VHS, ferritina, albumina, TSH, função renal e eletrólitos; parasitológico e coprocultura (e C. difficile se antibiótico recente); antitransglutaminase IgA (celíaca); calprotectina fecal se disponível.
- Sinais de alarme (sangue, perda de peso, anemia, > 50 anos, história familiar, sintomas noturnos): colonoscopia/gastroenterologia com prioridade.
- Afastar medicamentos causadores.
- Não iniciar antidiarreico se sangue ou febre.`,
rx: [
 {trilha: "ambos", titulo: "Sem tratamento empírico", texto: `CONDUTA
1. Solicitar exames iniciais (ver plano).
2. Hidratação oral; reposição de ferro se ferropenia.
3. Encaminhar à gastroenterologia/colonoscopia conforme sinais de alarme.`, dose: "NV"}
],
orient: `Diarreia por mais de 4 semanas precisa de investigação. Vamos pedir exames de sangue e de fezes.
Procure atendimento se surgir febre, muito sangue nas fezes, tontura ou dor forte na barriga.`,
alarme: ["Muito sangue nas fezes", "Febre", "Tontura ou desmaio", "Barriga inchada e dolorida", "Perda de peso rápida"],
encaminhar: "Colite grave → urgência. Suspeita de DII ou sinais de alarme → gastroenterologia/colonoscopia prioritária.",
sus: {nacional: "Mesalazina, azatioprina e biológicos para DII: Componente Especializado (PCDT Doença de Crohn / Retocolite Ulcerativa).", betim: "Acesso a colonoscopia e calprotectina em Betim: confirmar."},
evid: {resumo: "Calprotectina fecal normal reduz muito a probabilidade de DII em adultos com sintomas intestinais e ajuda a priorizar colonoscopia. Sangramento, perda de peso, anemia e sintomas noturnos aumentam a probabilidade de doença orgânica.", certeza: "Moderada (estimada)", fontes: ["dii", "rename"]},
mudancas: ["Preenche a entrada 'Doença inflamatória intestinal leve' do Notion (estava marcada 'será incluído em breve')."],
nv: ["Acesso a calprotectina e colonoscopia: confirmar."]
},
// ───────────────────────── URGÊNCIAS NA UBS
{
id: "violencia", nome: "Violência doméstica ou sexual – atendimento inicial", sistema: "Urgências na UBS", risco: "alto",
ciap: "Z25 · A98", cid: "T74.1 · T74.2 · Y05", tags: "violência doméstica violência sexual estupro agressão mulher criança idoso notificação 180",
alerta: "Violência sexual: PEP-HIV até 72 h; contracepção de emergência até 120 h (DIU de cobre até 5 dias); profilaxia de IST e hepatite B mesmo após 72 h. O atendimento não depende de boletim de ocorrência (Lei 12.845/2013). Risco iminente de morte: 190 e rede de proteção.",
S: `Paciente, ___ anos, relata ___ (violência física / psicológica / sexual / negligência / patrimonial) por ___ (vínculo com o agressor), em ___ (data/hora; para violência sexual, horas desde o ocorrido: ___). Episódios anteriores ___. Ameaças, armas em casa, escalada ___. Filhos/dependentes expostos ___. Rede de apoio ___. Deseja registrar ocorrência ___.
(Registrar as palavras da pessoa, sem julgamento.)`,
O: `___ estado geral, ___ (estado emocional).
${VITAIS}
Lesões: ___ (tipo, local, tamanho – descrever sem interpretar). Exame genital (se violência sexual e consentido): ___.
Testes rápidos: HIV ___, sífilis ___, hepatite B ___, hepatite C ___. β-hCG ___.`,
A: `Pessoa em situação de violência ___ (tipo), risco ___ (baixo / moderado / alto).`,
P: `- Acolher em local reservado, sem a presença do possível agressor; acreditar e não culpabilizar.
- Tratar lesões; avaliar risco (ameaça de morte, arma, escalada, gestação).
- Violência sexual: PEP-HIV (≤ 72 h), contracepção de emergência (≤ 120 h), profilaxia de IST, vacina/imunoglobulina hepatite B conforme situação; oferecer coleta de vestígios conforme fluxo local.
- Gestação decorrente de estupro: informar o direito ao aborto legal (art. 128, II, Código Penal) e encaminhar ao serviço de referência.
- Notificação compulsória no SINAN (violência sexual e tentativa de suicídio: imediata, até 24 h).
- Mulher: a unidade comunica à autoridade policial em até 24 h, de forma consolidada e sem identificar a mulher nem o profissional (Lei 10.778/2003, redação da Lei 13.931/2019; Portaria GM/MS 78/2021). Identificação só em caráter excepcional, com conhecimento prévio da mulher.
- Criança/adolescente: comunicar o Conselho Tutelar. Idoso: comunicar os órgãos de proteção.
- Plano de segurança; encaminhar à rede (CRAS/CREAS, Centro de Referência da Mulher, Delegacia, Defensoria); seguimento próximo pela equipe.`,
rx: [
 {trilha: "ambos", titulo: "Violência sexual – profilaxias (PEP ≤ 72 h; AE ≤ 120 h; conferir PCDT)", texto: `1. PEP para HIV: ver modelo "Exposição de risco ao HIV – PEP" (28 dias).
2. Contracepção de emergência: ver modelo "Anticoncepção de emergência".
3. Profilaxia de IST (adulto, conforme PCDT IST/PEP):
   Ceftriaxona 500 mg IM dose única + azitromicina 1 g VO dose única
   + benzilpenicilina benzatina 2.400.000 UI IM dose única
   + metronidazol 2 g VO dose única (pode ser adiado por intolerância).
4. Hepatite B: vacinar se não imune; imunoglobulina conforme protocolo.`, dose: "NV", nota: "Esquema a conferir no PCDT vigente."}
],
orient: `O que aconteceu não é culpa sua. Você tem direito a atendimento, proteção e sigilo.
Central de Atendimento à Mulher: ligue 180 (24 h, gratuito). Em risco imediato: 190.
Os remédios de prevenção precisam ser tomados por todos os dias indicados.`,
alarme: ["Ameaça de morte ou agressor com arma", "Sangramento ou dor intensa", "Pensamentos de se machucar", "Falta dos remédios de prevenção"],
encaminhar: "Rede de atenção às pessoas em situação de violência; serviço de referência para violência sexual; urgência se lesões graves.",
sus: {nacional: "Notificação de violência (SINAN); antirretrovirais, penicilina, ceftriaxona, azitromicina, metronidazol, levonorgestrel (RENAME).", betim: "Serviço de referência para violência sexual em Betim e fluxo de coleta de vestígios: confirmar (preencher em 'Rede de Betim')."},
evid: {resumo: "Abordagem centrada na pessoa, avaliação de risco e encaminhamento à rede reduzem revitimização. A Lei 13.931/2019 tornou obrigatória a comunicação à autoridade policial, em 24 h, dos casos com indícios de violência contra a mulher atendidos em serviços de saúde.", certeza: "Recomendação normativa", fontes: ["lei_13931", "lei_10778", "port78_2021", "notif_viol", "pcdt_pep", "rename"]},
mudancas: ["Entrada nova."],
nv: ["Esquema de profilaxia de IST pós-violência sexual: conferir PCDT vigente.", "Serviço de referência e fluxo de vestígios em Betim: confirmar."]
}
);
