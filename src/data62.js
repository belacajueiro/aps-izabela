// ───────────── data62.js – v49: dengue atualizada com os documentos de Betim e do MS da pasta DIA A DIA (22/10/2026).
// Fontes lidas na íntegra nesta sessão (Drive da usuária):
//  • SMS Betim – Nota Técnica do Manejo das Arboviroses na Rede SUS Betim-MG, 11/02/2025 (substitui a NT de 24/01/2024, também lida);
//  • SMS Betim – Fluxograma assistencial para casos suspeitos/confirmados de arboviroses (Anexo III da NT);
//  • Prefeitura de Betim – Receituário do Plano de Contingência da Dengue 2024 (sugestão de prescrição padrão; Anexo VI da NT);
//  • Prefeitura de Betim – Apresentação "Manejo clínico das arboviroses", 22/01/2024;
//  • MS – Dengue: diagnóstico e manejo clínico, adulto e criança, 6ª ed. 2024 (o PDF da pasta é idêntico ao já usado no app – segue como a versão vigente);
//  • MS – Dengue: manual de enfermagem, 3ª ed. 2026 (gov.br; confirma que a referência clínica continua sendo a 6ª ed. 2024).
Object.assign(FONTES, {
  betim_nt_arbo2025: {s: "SMS Betim – NT do manejo das arboviroses (11/02/2025)", t: "Secretaria Municipal de Saúde de Betim. Nota Técnica do manejo das arboviroses na rede SUS Betim-MG, 11/02/2025: definição de caso, sinais de alarme e de gravidade, estadiamento A–D, hidratação imediata (SRO ou, na falta, água filtrada), antiagregantes/anticoagulantes (reprodução do MS 2024), exames (hemograma a critério no grupo A e obrigatório em B, C e D; RT-PCR para arbovírus de 24 h ao 5º dia e sorologia IgM do 6º ao 45º dia para todo caso suspeito, coleta na UAPS e envio ao laboratório do HPRB; TR-NS1 na UAPS para grupos B e C conforme estoque), notificação no SIGSS em 2 vias, cartão de acompanhamento, retorno, gestante (mínimo grupo B, avaliação diária na APS; C/D → PA do HPRB), fins de semana (UPA de referência com relatório), grade de referência UBS → UPA (Anexo XI) e contatos. Documento normativo municipal (Drive da usuária, pasta DIA A DIA).", f: "F", url: ""},
  betim_fluxo_arbo: {s: "SMS Betim – Fluxograma assistencial das arboviroses (Anexo III)", t: "SMS Betim. Fluxograma assistencial para casos suspeitos/confirmados de arboviroses (sem data no documento; Anexo III da NT de 11/02/2025): notificar todo caso suspeito; grupos A–D com conduta por grupo; condições clínicas especiais; grupo B com hematócrito alterado → UPA de forma responsável; gestante → PA do HPRB. Drive da usuária, pasta DIA A DIA.", f: "F", url: ""},
  betim_rx_dengue2024: {s: "Prefeitura de Betim – Receituário padrão da dengue (Plano de Contingência 2024)", t: "Prefeitura de Betim. Receituário – Plano de Contingência da Dengue/2024 (sugestão de prescrição padrão; Anexo VI da NT de 11/02/2025): paracetamol 500 mg 1 cp 6/6 h se febre ou dor; dipirona 500 mg 1 cp 6/6 h se febre ou dor, intercalada com o paracetamol; SRO com volume diário total, de sais e de outros líquidos; solução reconstituída válida por 24 h; prova do laço; sinais para procurar a UPA. A NT diz que o modelo não exime de avaliar indicações e contraindicações. Drive da usuária.", f: "F", url: ""},
  betim_arbo_apres2024: {s: "Prefeitura de Betim – Apresentação Manejo clínico das arboviroses (22/01/2024)", t: "Prefeitura de Betim (Diretorias Operacional da Saúde, de Vigilância à Saúde e de Urgência e Emergência). Manejo clínico das arboviroses, 22/01/2024 (slides): toda gestante no mínimo grupo B, avaliação diária na APS; nos dias em que a UBS estiver fechada (fins de semana, feriados, noite), reavaliação no PA do HPRB. Drive da usuária.", f: "F", url: ""},
  ms_dengue_enf2026: {s: "MS – Dengue: manual de enfermagem, 3ª ed. 2026", t: "Ministério da Saúde. Dengue: manual de enfermagem. 3ª ed. Brasília: MS, 2026 (cita a 6ª ed. 2024 de 'Dengue: diagnóstico e manejo clínico' como referência; grupo B com retorno diário até 48 h após a queda da febre).", f: "F", url: "https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/guias-e-manuais/2026/dengue-manual-de-enfermagem.pdf"}
});

(() => {
  const c = CONDICOES.find(x => x.id === "dengue-a"); if (!c) return;

  // mL com separador de milhar (para o receituário de Betim, que pede os volumes em mL)
  const MLN = ml => String(Math.max(0, Math.round(ml / 50) * 50)).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  if (c.calcPac && typeof c.calcPac.f === "function"){
    const f0 = c.calcPac.f;
    c.calcPac.f = v => {
      const r = f0(v); if (!r) return r;
      const crianca = v.anos < 13, kg = v.kg;
      const taxa = crianca ? (kg <= 10 ? 130 : kg <= 20 ? 100 : 80) : 60;
      const total = Math.round(kg * taxa / 50) * 50, sro = Math.round(total / 3 / 50) * 50;
      return Object.assign(r, {total_ml: MLN(total), sro_ml: MLN(sro), outros_ml: MLN(total - sro)});
    };
  }

  c.alerta = "Doença dinâmica: pesquisar sinais de alarme a cada contato. Qualquer sinal de alarme = grupo C: iniciar SF 0,9% 10 mL/kg na 1ª hora na própria UBS e transferir por contato telefônico, com SAMU ou transporte sanitário (UBS Bueno Franco → UPA Norte). Gestante = no mínimo grupo B. Notificação compulsória.";

  c.S = c.S.replace("Uso de AAS, anticoagulante: ___.", "Uso de AAS, clopidogrel, varfarina ou anticoagulante oral direto: ___ (indicação: ___).");

  c.P = `- Hidratação oral conforme peso, mantida durante a febre e até 24–48 h após a defervescência; iniciada na unidade enquanto aguarda (SRO ou, na falta, água filtrada).
- Paracetamol e/ou dipirona; não usar AAS, AINE ou corticoide como sintomáticos (antiagregante/anticoagulante de uso contínuo: conduta pelas plaquetas – ver guia).
- Hemograma: ___ (a critério clínico no grupo A; obrigatório nos grupos B, C e D).
- Exame específico (Betim: todo caso suspeito): ___ (RT-PCR para arbovírus de 24 h ao 5º dia de sintomas / sorologia IgM do 6º ao 45º dia), pedido escrito no cabeçalho da notificação; coleta na UBS, de preferência entre 7 h e 8 h, com envio ao laboratório do HPRB.
- Notificação do caso suspeito no SIGSS (questionário SINAN impresso em 2 vias: uma com a amostra, outra para a Vigilância Epidemiológica).
- Cartão de acompanhamento da dengue preenchido e entregue.
- Retorno no dia da melhora da febre (início possível da fase crítica) ou em 24 h para avaliar o hemograma, se colhido; no 5º dia se a febre persistir; imediato se sinal de alarme ou sangramento. Fim de semana/feriado: UPA de referência com relatório.
- Orientados repelente e eliminação de criadouros; orientações de hidratação entregues por escrito, com volumes pelo peso.`;

  // receita padrão do município (Plano de Contingência 2024), com os volumes do campo de cálculo
  c.rx = (c.rx || []).filter(r => !/Receituário padrão Betim/.test(r.titulo));
  c.rx.push({
    trilha: "sus",
    titulo: "Receituário padrão Betim (Plano de Contingência 2024) – adulto",
    texto: `USO ORAL
1. Paracetamol 500 mg ______ 20 comprimidos
   Tomar 1 comprimido de 6 em 6 horas, se tiver febre ou dor.
2. Dipirona 500 mg ______ 10 comprimidos
   Tomar 1 comprimido de 6 em 6 horas, se tiver febre ou dor, intercalando com o paracetamol.
3. Sais para reidratação oral ______ ___ envelopes
   Hidratação: tomar {{total_ml}} mL de líquido por dia, sendo {{sro_ml}} mL em forma de sais de reidratação oral e {{outros_ml}} mL em forma de água ou outro líquido.
   Após dissolver o pó, usar a solução em até 24 horas; o que sobrar deve ser jogado fora e nova solução preparada.`,
    dose: "F",
    nota: "Modelo do receituário do Plano de Contingência da Dengue 2024 – Prefeitura de Betim (Anexo VI da NT de 11/02/2025) [F]. A própria NT diz que é sugestão e não dispensa avaliar indicação e contraindicação. Intercalar = um remédio a cada 3 horas; doses dentro do Apêndice H do MS 2024 (paracetamol até 4 g/dia) [F]. Volumes pelo campo 'Calcular a hidratação pelo peso'. O formulário impresso de Betim também tem campos para prova do laço, notificação feita na UPA e resultado do hemograma. Criança: não usar este modelo (dose por peso)."
  });
  const s = c.rx.find(r => /Sintom/i.test(r.titulo));
  if (s && !/3 meses/.test(s.texto)) s.texto = s.texto.replace("Criança: dipirona ou paracetamol 10 mg/kg/dose até de 6/6h.", "Criança: dipirona ou paracetamol 10 mg/kg/dose até de 6/6h (respeitar a dose máxima por peso e idade). Dipirona: não usar em menores de 3 meses ou com menos de 5 kg.");

  c.orient = c.orient
    .replace("- Se estiver enjoado, beba aos poucos, em pequenos goles, sem parar.",
      "- Se ainda não tiver o soro em casa, comece com água filtrada enquanto busca o soro na farmácia da unidade.\n- Se estiver enjoado, beba aos poucos, em pequenos goles, sem parar.")
    .replace("- Não tome nenhum outro remédio por conta própria.",
      "- Se você já usa AAS (aspirina), clopidogrel, varfarina ou outro remédio para \"afinar o sangue\" por problema no coração, derrame ou trombose, **não pare por conta própria e não deixe de avisar a equipe**: a decisão depende do exame de plaquetas.\n- Não tome nenhum outro remédio por conta própria.")
    .replace("- Nesses dias, preste atenção aos sinais de alarme listados abaixo. Se aparecer qualquer um deles, **vá imediatamente à UPA ou ao pronto-socorro**, de dia ou de noite, sem esperar o retorno marcado.",
      "- Nesses dias, preste atenção aos sinais de alarme listados abaixo. Se aparecer qualquer um deles, **vá imediatamente à UPA**, de dia ou de noite, sem esperar o retorno marcado. Para quem é atendido na UBS Bueno Franco, a UPA de referência é a **UPA Norte**.")
    .replace("- Leve o cartão de acompanhamento da dengue em todas as consultas.",
      `- Se colheu exame de sangue (hemograma), **volte em 24 horas** para ver o resultado.
- **Grávidas:** volte à unidade **todos os dias** para ser examinada e ouvir o coração do bebê, até 2 dias depois que a febre acabar.
- Se o dia do retorno cair em fim de semana ou feriado, vá à UPA de referência levando o relatório e o cartão.
- Leve o cartão de acompanhamento da dengue e os resultados de exames em todas as consultas.

## Exames
- O exame que confirma a dengue é colhido na unidade, de preferência de manhã cedo. Ele serve para a vigilância saber qual vírus está circulando.
- **O resultado não muda o tratamento:** continue bebendo os líquidos e observando os sinais de alarme enquanto espera.`)
    .replace("- Receba os agentes comunitários de saúde e de combate às endemias.",
      "- Receba os agentes comunitários de saúde e de combate às endemias.\n- Para denunciar foco do mosquito em Betim: **Disque Denúncia Dengue 3512-4924**. Lote vago com lixo ou água parada: **3512-3166**.");

  if (!c.alarme.some(a => /manchas/i.test(a))) c.alarme.splice(3, 0, "Manchas vermelhas ou roxas na pele");

  c.encaminhar = "Sinal de alarme ou aumento progressivo do hematócrito → grupo C: SF 0,9% 10 mL/kg na 1ª hora na própria UBS e transferência responsável para a UPA de referência (UBS Bueno Franco → UPA Norte), com contato telefônico e SAMU ou transporte sanitário. Choque → grupo D: SF 20 mL/kg em até 20 min e SAMU. Gestante com sinal de alarme ou choque → PA do HPRB. Grupo B com indicação clínica → UPA de referência com relatório escrito.";

  c.sus = {
    nacional: "SRO, dipirona e paracetamol: RENAME 2024 (Básico). Hemograma, RT-PCR para arbovírus e sorologia IgM pela rede de vigilância (Lacen/FUNED em MG).",
    betim: "NT SMS Betim de 11/02/2025: hemograma colhido na UBS (pedido do médico ou do enfermeiro), enviado ao laboratório do HPRB pela rota de transporte de 2ª a 6ª (coleta de preferência entre 7 h e 8 h; se não seguir no dia, guardar entre 2 e 8 °C por até 24 h); resultado no sistema MV. RT-PCR para arbovírus (24 h ao 5º dia) ou sorologia IgM (6º ao 45º dia) para todo caso suspeito, pedido no cabeçalho da notificação, resultado no GAL/FUNED. TR-NS1 na UBS para grupos B e C, conforme estoque (2º ao 5º dia). Notificação no SIGSS (Atendimento > Vigilância em Saúde > Vigilância Epidemiológica > Not. Doenças), questionário impresso em 2 vias. Enfermeiro pode prescrever e pedir exames (protocolo municipal de 2015). Referência da UBS Bueno Franco: UPA Norte (clínica médica, pediatria e cirurgia). Gestante: avaliação diária na APS; C/D → PA do HPRB. Suspeita de óbito por dengue: comunicar imediatamente a Epidemiologia municipal (3512-3300 ou 3512-3301, 2ª a 6ª, 7 h–18 h; e-mail epidemiobetim@gmail.com; fins de semana e feriados: e-mail e CIEVS Minas (31) 99744-6983). REMUME: SRO, dipirona 500 mg e 500 mg/mL, paracetamol 500 mg e 200 mg/mL."
  };

  // guia: lista completa de condições especiais (MS 2024), gestante e Ht alterado no fluxo
  const fl = (((c.guia || {}).secoes || [])[0] || {}).b || [];
  const fb = fl.find(b => b.fluxo);
  if (fb){
    const walk = ns => ns.forEach(n => { if (n.t && /^Grupo B: hemograma obrigatório/.test(n.t)) n.t = "Grupo B: hemograma obrigatório (resultado em até 2–4 h), observação com hidratação oral; Ht normal → domicílio com reavaliação clínica e laboratorial diária até 48 h sem febre; Ht em elevação → conduzir como grupo C. Gestante = no mínimo grupo B (avaliação diária na UBS com BCF)"; (n.ramos || []).forEach(r => walk(r.n || [])); });
    walk(fb.fluxo);
    fb.nota = "MS – Dengue: diagnóstico e manejo clínico, 6ª ed. 2024 [F]; grupo D e pediatria conforme protocolo FHEMIG 2024 [F]. Condições clínicas especiais, risco social ou comorbidades (MS 2024) [F]: lactentes (< 24 meses), gestantes, adultos > 65 anos, hipertensão ou outra doença cardiovascular grave, diabetes, DPOC, asma, obesidade, doenças hematológicas crônicas (sobretudo anemia falciforme), doença renal crônica, doença ácido-péptica, hepatopatias e doenças autoimunes. A NT de Betim 2025 usa a mesma lista [F].";
  }

  c.guia.secoes = c.guia.secoes.filter(x => !/^Betim|^Antiagregante/.test(x.t));
  c.guia.secoes.push({t: "Antiagregante ou anticoagulante", b: [
    {p: "Não suspenda por rotina: a conduta depende das plaquetas. Só reverter anticoagulação se houver sangramento; sangramento moderado ou grave → suspender antiagregante e anticoagulante [F]."},
    {tab: {h: ["Uso", "Plaquetas > 50 mil", "30 a 50 mil", "< 30 mil"], r: [
      ["AAS + clopidogrel (stent farmacológico < 6 meses ou convencional < 1 mês)", "Manter ambos; plaquetas diárias (como grupo B) [F]", "Manter; leito de observação com plaquetas diárias [F]", "Suspender ambos; observação até > 50 mil [F]"],
      ["AAS isolado (stent mais antigo, prevenção secundária coronária ou cerebrovascular)", "Manter; plaquetas diárias [F]", "Manter; leito de observação [F]", "Suspender; observação até > 50 mil [F]"],
      ["Varfarina (prótese metálica, FA de alto risco, TEP, trombofilia)", "Manter; TAP/INR e plaquetas ambulatoriais [F]", "Internar; trocar por heparina não fracionada quando INR < 2 [F]", "Suspender; internar com TAP e plaquetas diários [F]"],
      ["Dabigatrana, rivaroxabana, apixabana, edoxabana", "Manter, se suspender não for opção [F]", "< 50 mil: internar e trocar por heparina não fracionada 24 h após a última dose [F]", "Idem [F]"]
    ]}, nota: "MS 2024, cap. 11 (adulto), reproduzido na NT de Betim 2025 [F]. Na UBS isso significa: hemograma no mesmo dia e, abaixo de 50 mil, encaminhar à UPA de referência [I]."},
    {ref: ["ms_dengue", "betim_nt_arbo2025"]}
  ]});
  c.guia.secoes.push({t: "Betim: exames, notificação e referência", b: [
    {tab: {h: ["O quê", "Como em Betim"], r: [
      ["Hemograma", "Grupo A a critério; obrigatório em B, C e D. Coleta na UBS (de preferência 7–8 h), rota de transporte ao laboratório do HPRB de 2ª a 6ª; sem envio no dia, guardar entre 2 e 8 °C por até 24 h. Resultado no MV [F]"],
      ["Confirmação", "Todo caso suspeito: RT-PCR para arbovírus de 24 h ao 5º dia; sorologia IgM do 6º ao 45º dia. Pedido no cabeçalho da notificação; resultado no GAL (FUNED) [F]"],
      ["TR-NS1", "Na UBS para grupos B e C, conforme estoque, do 2º ao 5º dia; não dispensa RT-PCR/sorologia [F]"],
      ["Notificação", "SIGSS → Atendimento > Vigilância em Saúde > Vigilância Epidemiológica > Not. Doenças (SINAN); CID A90; marcar 'caso investigado'; corrigir a data dos primeiros sintomas; imprimir o questionário em 2 vias (amostra + Vigilância), assinado e carimbado [F]"],
      ["Retorno", "Grupo A: dia da melhora da febre ou 24 h para ver hemograma; 5º dia se febre persistir. Grupo B com Ht normal: diário até 48 h sem febre. Fim de semana/feriado: UPA de referência com relatório; a UPA contrarreferencia [F]"],
      ["Gestante", "No mínimo grupo B: exame clínico-obstétrico diário na UBS (BCF, bem-estar fetal); C/D → PA do HPRB [F]. UBS fechada (noite, fim de semana): PA do HPRB (apresentação SMS jan/2024) [F]"],
      ["Grupo C/D", "Hidratação EV já na UBS e durante o transporte; contato telefônico com a UPA; SAMU ou transporte sanitário. UBS Bueno Franco → UPA Norte; a UPA faz AIH/SUSfácil se internação [F]"],
      ["Óbito suspeito", "Comunicar imediatamente: Epidemiologia 3512-3300 / 3512-3301 (2ª a 6ª, 7–18 h), epidemiobetim@gmail.com; fins de semana e feriados: e-mail e CIEVS Minas (31) 99744-6983 [F]"],
      ["Outros", "Cartão de acompanhamento (modelo do MS) em todo atendimento; enfermeiro prescreve e pede exames (protocolo municipal 2015); atestado só após atendimento [F]"]
    ]}, nota: "NT SMS Betim 11/02/2025, Anexos III, VI, VIII e XI [F]. Telefones e grade de referência como estão na NT: conferir se mudaram [NV]."},
    {alerta: "Divergência: o fluxograma de Betim (Anexo III, sem data) manda o grupo B com hematócrito alterado para a UPA 'em observação com hidratação 25 mL/kg em 4 horas (criança 40 mL/kg)'; o MS 2024 manda conduzir a hemoconcentração como grupo C (SF 10 mL/kg na 1ª hora). O app segue o MS; nos dois casos o destino é a UPA [F]."},
    {ref: ["betim_nt_arbo2025", "betim_fluxo_arbo", "betim_rx_dengue2024", "betim_arbo_apres2024"]}
  ]});

  c.evid.resumo = "O manejo segue o estadiamento A–D do MS (6ª edição, 2024, ainda a versão vigente – o manual de enfermagem do MS de 2026 a mantém como referência), baseado na classificação da OMS. A 6ª edição ampliou os grupos de risco (destaque para idosos), que passam a ser conduzidos como grupo B, e trouxe a conduta para antiagregantes e anticoagulantes. A NT de Betim (11/02/2025) segue o MS e define o fluxo local de exames, notificação e referência. A hidratação precoce e o reconhecimento dos sinais de alarme são as medidas que reduzem óbito.";
  c.evid.fontes = [...new Set([...(c.evid.fontes || []), "betim_nt_arbo2025", "betim_fluxo_arbo", "betim_rx_dengue2024", "betim_arbo_apres2024", "ms_dengue_enf2026"])];
  c.mudancas = [...(c.mudancas || []), "v49 (22/10/2026): atualização com a NT de Betim de 11/02/2025, o fluxograma e o receituário padrão do município – exames (hemograma, RT-PCR/sorologia para todo suspeito, TR-NS1 na UBS para B e C), notificação no SIGSS, gestante no mínimo grupo B com avaliação diária, referência UBS Bueno Franco → UPA Norte, comunicação de óbito; receita padrão de Betim com volumes em mL; tabela de antiagregantes/anticoagulantes (MS 2024); lista completa de condições especiais; orientação ao paciente: água filtrada se faltar SRO, não suspender AAS/anticoagulante por conta própria, retorno em 24 h para hemograma, gestante diário, manchas na pele como sinal de alarme, Disque Denúncia Dengue."];
  c.nv = [...(c.nv || []).filter(x => !/^Fluxo de referência e de hemograma em Betim/.test(x)),
    "TR-NS1 na UBS depende do estoque (NT Betim 2025): confirmar disponibilidade na unidade.",
    "Telefones, grade de referência UBS → UPA e reavaliação da gestante no PA do HPRB à noite e nos fins de semana (este último só na apresentação de jan/2024): conferir se continuam válidos.",
    "Fluxograma de Betim sem data e divergente do MS 2024 no grupo B com hematócrito alterado (ver guia): o app segue o MS.",
    "A NT de Betim lista no sumário uma seção sobre homeopatia (2.5) que não aparece no corpo do documento: não foi incluída."];
})();

// chikungunya e zika: fluxo de Betim (mesma NT)
(() => {
  const k = CONDICOES.find(x => x.id === "chikungunya");
  if (k){
    k.P = k.P.replace("- Notificação do caso suspeito.", "- Notificação do caso suspeito (SIGSS, 2 vias); RT-PCR para arbovírus de 24 h ao 5º dia ou sorologia IgM do 6º ao 45º dia (Betim: todo caso suspeito).\n- Hemograma obrigatório se grupo de risco; a critério nos demais. Antes de AINE ou corticoide na fase pós-aguda: ureia, creatinina, AST, ALT, glicemia e hemograma.\n- Equipe multiprofissional (fisioterapia) desde a fase aguda; cartão de acompanhamento.");
    k.sus.betim = (k.sus.betim || "") + " NT SMS Betim 11/02/2025: RT-PCR/sorologia para todo caso suspeito (coleta na UBS → laboratório do HPRB); gestante com suspeita até 7 dias antes do parto → Centro Materno Infantil; RN de mãe suspeita fica internado em observação por no mínimo 7 dias; equipe multiprofissional da APS na fase aguda e encaminhamento para reabilitação na fase subaguda/crônica; ibuprofeno não nos primeiros 14 dias; prednisona 0,5 mg/kg/dia (máx. 40 mg) por até 3 semanas.";
    k.evid.fontes = [...new Set([...(k.evid.fontes || []), "betim_nt_arbo2025"])];
    k.mudancas = [...(k.mudancas || []), "v49 (22/10/2026): fluxo de Betim (NT 11/02/2025) – exames, notificação, gestante perto do parto → CMI, equipe multiprofissional; doses da tabela municipal conferidas e concordantes com o app."];
  }
  const z = CONDICOES.find(x => x.id === "zika");
  if (z){
    z.sus.betim = (z.sus.betim || "") + " NT SMS Betim 11/02/2025: gestante com suspeita de Zika → PA do HPRB; RT-PCR de 24 h ao 5º dia ou sorologia do 6º ao 45º dia (coleta na UBS → laboratório do HPRB); notificação no SIGSS (ficha de Zika, CID A92.8); bebê de mãe com Zika na gestação: acompanhamento até pelo menos 3 anos.";
    z.nv = (z.nv || []).filter(x => !/Fluxo de coleta para gestante em Betim/.test(x));
    z.evid.fontes = [...new Set([...(z.evid.fontes || []), "betim_nt_arbo2025"])];
    z.mudancas = [...(z.mudancas || []), "v49 (22/10/2026): fluxo de Betim para gestante (PA do HPRB) e coleta (NT 11/02/2025)."];
  }
})();
