// ───────────── data90.js – v79 (30/10/2026): módulo DM1 e LADA (Crônicos › DM).
// Fontes abertas nesta revisão: PCDT DM1 (Portaria Conjunta SAES/SCTIE nº 17/2019, texto integral); orientações da Farmácia de Minas
// para análogos de insulina no DM1 (SES-MG, atualizado em 08/07/2025); SBD – Classificação do diabetes (2023), Tratamento do DM1 no SUS
// (2023), Manejo dos dias de doença no DM1 (2023), Rastreamento de comorbidades autoimunes no DM1 (2023), Imunização no diabetes (2025,
// Drive da usuária); Buzzetti 2020 (consenso LADA, texto integral no PMC); Lundholm & Zhou 2025 (CCJM); Hoogwerf 2025 (CCJM, editorial);
// ADA/EASD 2026 (resumo no PubMed + resumo secundário Afya); ADA Standards 2026 (factsheet); SBD 2025 rastreamento do DM1 (resumo secundário);
// teplizumabe na ANVISA (notícia CFF, 16/03/2026); RENAME 2024, REMUME Betim e Memo 047/2026 (arquivos do Projeto e data88.js).

Object.assign(FONTES, {
  pcdt_dm1_2019: {s: "PCDT DM1 2019 (Portaria Conjunta 17/2019)", t: "Ministério da Saúde. Protocolo Clínico e Diretrizes Terapêuticas do Diabete Melito Tipo 1 – Portaria Conjunta SAES/SCTIE nº 17, de 12/11/2019 (revoga a Portaria Conjunta 8/2018): diagnóstico (GJ ≥ 126 em 2 ocasiões, glicemia ao acaso > 200 com sintomas, HbA1c ≥ 6,5% em 2 ocasiões); suspeita de LADA com peptídeo C + ao menos 1 marcador (ICA ou IAA); metas (HbA1c < 7,5% criança/adolescente, < 7,0% adulto, 7,5–8,5% idoso, < 6,0% gestante); doses (0,5–1 UI/kg/dia no início; lua de mel < 0,5; basal 40–60%); critérios de análogo de ação rápida e prolongada (uso prévio ≥ 3 meses, hipoglicemia grave, ≥ 2 não graves/semana, > 1 noturna/semana ou mau controle persistente em 12 meses, AMG ≥ 3×/dia, seguimento ≥ 2×/ano), manutenção e suspensão; rastreio anual de complicações a partir do 5º ano ou na puberdade (norma; texto integral lido). Em 2026 a CONITEC informa o PCDT 'em atualização' (parecer técnico NAT-Jus, jan/2026).", f: "F", url: "https://www.gov.br/saude/pt-br/assuntos/pcdt/arquivos/2021/portaria-conjunta-17_2019_pcdt_diabete-melito-1.pdf"},
  ceaf_mg_dm1_2025: {s: "Farmácia de Minas – análogos de insulina no DM1 (jul/2025)", t: "SES-MG, Farmácia de Minas. Orientações para solicitação de insulina análoga de ação rápida e de ação prolongada (DM1), atualizado em 08/07/2025: asparte (idade 1 a 3 anos, conforme o documento), lispro (≥ 3 anos), glargina (≥ 2 anos); abertura com documentos pessoais, LME, prescrição pela DCB, formulário específico do DM1 e termo; glicemia (2 HbA1c ou 2 glicemias de jejum nos últimos 6 meses, ou 1 glicemia ao acaso ou de 2 h); só para LADA: peptídeo C e ao menos 1 marcador de autoimunidade (anti-ICA ou anti-IAA); critérios de hipoglicemia ou mau controle (HbA1c dos últimos 12 meses), uso prévio de NPH/regular > 3 meses, AMG ≥ 3×/dia, seguimento ≥ 2×/ano; renovação a cada 6 meses com HbA1c de até 3 meses; sem retirada por 6 meses = inativação; pedido na farmácia do município, análise em ~30 dias (norma estadual; documento lido).", f: "F", url: "https://www.saude.mg.gov.br/wp-content/uploads/2025/07/DIABETES-MELLITUS-TIPO-1.pdf"},
  sbd_classif2023: {s: "SBD – Classificação do diabetes (2023)", t: "Sociedade Brasileira de Diabetes. Classificação do diabetes. Diretriz Oficial (revisão 14/12/2023; DOI 10.29327/557753.2022-1): R1 diferenciar DM1 × DM2 primeiro pela clínica (IIa, B); R2 autoanticorpos na suspeita de DM1 no adulto – positivos confirmam (I, B); R3 peptídeo C ao acaso se anticorpos negativos e dúvida persistir – < 0,6 ng/mL após ≥ 5 anos sugere DM1B, > 0,6 sugere DM2 ou monogênico (I, C); R4 LADA = adulto com anticorpo positivo sem necessidade de insulina por ≥ 6 meses (I, C); critérios de Fourlanos (idade < 50, sintomas agudos, IMC < 25, autoimunidade pessoal ou familiar; ≥ 2 = sensibilidade 90%, especificidade 71%); anti-insulina pouco confiável após o início da insulina; R5 MODY (início < 25 anos, 2–3 gerações, anticorpos negativos, peptídeo C > 0,6 após 5 anos) (diretriz de sociedade; página lida).", f: "F", url: "https://diretriz.diabetes.org.br/classificacao-do-diabetes/"},
  sbd_dm1sus2023: {s: "SBD – Tratamento do DM1 no SUS (2023)", t: "Melo KFS, Almeida-Pititto B, Pedrosa HC. Tratamento do diabetes mellitus tipo 1 no SUS. Diretriz Oficial da SBD (revisão 12/04/2023; DOI 10.29327/5238993.2023-12): basal-bolus com NPH em 2–3 (às vezes 4) doses – antes do café, antes do almoço e ao deitar (~22 h, ~8 h antes de acordar; NPH antes do jantar causa hipoglicemia noturna) – e regular 30 min antes das refeições principais; basal < 50% da dose total; doses por fase (Tabela 3); escalonamento NPH + análogo rápido → análogo prolongado + rápido → ultralongo → tecnologias; AMG 3–4×/dia, registro de 15–30 dias se não houver download; HbA1c a cada 3 meses (6 se ótimo); tiras conforme regra local; agulhas ≥ 1/dia para cada insulina; APS como ordenadora do cuidado, endocrinologista ≥ 2×/ano quando possível; rastreio de complicações anual a partir de 5 anos ou na puberdade (diretriz de sociedade; página lida).", f: "F", url: "https://diretriz.diabetes.org.br/tratamento-do-diabetes-mellitus-tipo-1-no-sus/"},
  sbd_diasdoenca2023: {s: "SBD – Manejo dos dias de doença no DM1 (2023)", t: "Rodrigues MLD, Calliari LE, Rodacki M. Manejo dos dias de doença no DM1. Diretriz Oficial da SBD (revisão 17/08/2023; DOI 10.29327/5238993.2023-1): glicemia a cada 1–4 h; cetonas se glicemia > 300 mg/dL em 2 medidas com 1–2 h de intervalo após correção (cetonemia preferível à cetonúria; repetir a cada 1–2 h até < 0,6 mmol/L); doses extras por cetonemia (0,7–1,4: +5% da dose total diária por bolus; 1,5–2,9: +10%; > 3,0: +20–50%, com glicemia 180–250; maiores se > 250); não suspender a basal (I, C); hidratação com sais; procurar emergência se vômitos > 2 h, desidratação, alteração de consciência, dor abdominal importante, Kussmaul, hálito cetônico, cetonemia > 1,5 ou cetonúria alta apesar das medidas, glicemia subindo ou < 70 que não se mantém, criança < 5 anos ou família sem condição de acompanhar (diretriz de sociedade; página lida).", f: "F", url: "https://diretriz.diabetes.org.br/manejo-dos-dias-de-doenca-no-dm1/"},
  sbd_autoimunes2023: {s: "SBD – Comorbidades autoimunes no DM1 (2023)", t: "Sociedade Brasileira de Diabetes. Rastreamento de comorbidades autoimunes no DM1. Diretriz Oficial (revisão 13/04/2023; DOI 10.29327/557753.2022-7): TSH e anticorpos antitireoidianos (anti-TPO) ao diagnóstico e a cada 1–2 anos (I, B); doença celíaca na criança ao diagnóstico e no 2º e 5º ano (anti-tTG IgA ou antiendomísio IgA, sem deficiência de IgA) (I, B); no adulto, investigar se sintomas gastrointestinais, perda de peso, mau controle ou hipoglicemia sem explicação (I, B); insuficiência adrenal e gastrite autoimune só com suspeita clínica (III, C) (diretriz de sociedade; página lida).", f: "F", url: "https://diretriz.diabetes.org.br/rastreamento-de-comorbidades-autoimunes-no-dm1/"},
  sbd_imun2025: {s: "SBD 2025 – Imunização no diabetes", t: "Sáfadi MAP et al. Imunização no diabetes. Diretriz SBD 2025 (DOI 10.29327/5660187.2025-8; PDF no Drive da usuária): influenza anual a partir de 6 meses para todas as pessoas com DM; covid-19 a partir de 6 meses; pneumocócica conjugada (VPC20 preferencial; alternativas VPC15/VPC13 + VPP23); hepatite B para todas as idades; VSR ≥ 60 anos e zóster recombinante ≥ 50 anos (rede privada); vacinas especiais do SUS pelos CRIE, com encaminhamento médico (diretriz de sociedade; texto lido).", f: "F", url: "https://diretriz.diabetes.org.br/imunizacao-no-diabetes/"},
  sbd_rastreio_dm1_2025: {s: "SBD 2025 – Rastreamento do DM1 (resumo)", t: "Rodacki M et al. Rastreamento no diabetes mellitus tipo 1. Diretriz SBD 2025, conferida por resumo secundário (Portal Afya): rastrear parentes de 1º grau com anti-GAD, anti-IA2, anti-insulina e anti-ZnT8 (anticorpos pouco disponíveis no Brasil para a população geral); estágio 1 = ≥ 2 anticorpos e normoglicemia; estágio 2 = ≥ 2 anticorpos e disglicemia (GJ 100–125, TOTG 140–199, HbA1c 5,7–6,4% ou aumento de 10% em 3–12 meses); estágio 3 = critério de diabetes (resumo secundário; diretriz original não aberta).", f: "F", url: "https://portal.afya.com.br/endocrinologia/nova-diretriz-da-sbd-sobre-rastreamento-do-dm-tipo-1"},
  ada_easd_dm1_2026: {s: "ADA/EASD 2026 – DM1 no adulto (consenso)", t: "Holt RIG et al. The management of type 1 diabetes in adults. The updated 2026 consensus report by the ADA and the EASD. Diabetes Care 2026 (doi 10.2337/dci26-0122) e Diabetologia 2026 (doi 10.1007/s00125-026-06833-z; errata doi 10.1007/s00125-026-06893-1). Detalhes conferidos por resumo secundário (Portal Afya, 29/09/2026): pistas de DM1 no adulto (< 35 anos, IMC < 25, perda de peso, CAD, glicemia > 360, insulina em até 3 anos); anti-GAD primeiro, depois IA-2/ZnT8; peptídeo C ao acaso com glicemia pareada, até 5 h após refeição: < 200 pmol/L = deficiência de insulina, > 600 sugere DM2; CGM como padrão, cetonas para todos; HbA1c < 7%, TIR > 70%; iSGLT2 aumenta CAD 2,6–6×; estatina após 40 anos ou 20–39 se risco > 10% (consenso; texto integral não acessado).", f: "F", url: "https://doi.org/10.2337/dci26-0122"},
  ada2026_dm1: {s: "ADA Standards of Care 2026 (DM1 – factsheet)", t: "American Diabetes Association. Standards of Care in Diabetes – 2026, resumo das mudanças (factsheet Diabetes on the Net): rastreio de autoanticorpos em quem tem história familiar ou alto risco genético; ≥ 2 anticorpos sem diabetes manifesto → especialista para estadiamento e possível teplizumabe; CGM desde o diagnóstico; bomba/AID sem exigir peptídeo C (resumo secundário).", f: "F", url: "https://diabetesonthenet.com/wp-content/uploads/4.-Factsheet_ADA-standards-2026.pdf"},
  buzzetti2020: {s: "Buzzetti 2020 – consenso internacional de LADA", t: "Buzzetti R, Tuomi T, Mauricio D, et al. Management of latent autoimmune diabetes in adults: a consensus statement from an international expert panel. Diabetes 2020;69(10):2037-47. doi 10.2337/dbi20-0017 (texto integral no PMC): critérios > 30 anos, anticorpo positivo, sem insulina por ≥ 6 meses; anti-GAD o marcador mais sensível (~90%); propõe anti-GAD em todo DM2 recém-diagnosticado ou, com restrição de custo, se história familiar de DM1/autoimunidade, IMC < 27, início < 60 anos ou mau controle; peptídeo C com glicemia 80–180 mg/dL; < 0,3 nmol/L = múltiplas doses de insulina; 0,3–0,7 = 'zona cinzenta', algoritmo do DM2 modificado, considerar insulina; > 0,7 = algoritmo do DM2 modificado com monitorização do peptídeo C; sulfonilureias não recomendadas; iSGLT2 com atenção à CAD (IMC ≤ 27); metformina, iDPP-4 e aGLP-1 aceitáveis (consenso de especialistas; ECR pequenos).", f: "F", url: "https://doi.org/10.2337/dbi20-0017"},
  lundholm2025_lada: {s: "Lundholm & Zhou 2025 – LADA (revisão, CCJM)", t: "Lundholm MD, Zhou K. Latent autoimmune diabetes in adults: not type 1, not type 2, a little of both. Cleve Clin J Med 2025;92(12):757-63. doi 10.3949/ccjm.92a.25069: 4–14% dos 'DM2' podem ser LADA; pistas IMC ≤ 27, diagnóstico < 50 anos, autoimunidade pessoal/familiar, piora rápida com orais; anti-GAD positivo em ~90% (ELISA > 5,0 U/mL na maioria dos ensaios); peptídeo C > 0,7 nmol/L: anual; 0,3–0,7: a cada 6 meses; < 0,3: insulina, sem repetir; evitar sulfonilureia; iSGLT2 com cautela; HbA1c a cada 3 meses; TSH e anti-TPO de rotina; celíaca e B12 conforme sintomas (revisão narrativa).", f: "F", url: "https://www.ccjm.org/content/92/12/757"},
  hoogwerf2025_lada: {s: "Hoogwerf 2025 – insulina já no diagnóstico do LADA (editorial)", t: "Hoogwerf BJ. LADA: a case for starting insulin therapy at diagnosis. Cleve Clin J Med 2025 (editorial à revisão de Lundholm & Zhou): defende insulina desde o diagnóstico (DM1 lento, menos CAD com iSGLT2, insulina barata, evita peptídeo C seriado); reconhece dados insuficientes para recomendação universal (opinião).", f: "F", url: "https://www.ccjm.org/content/92/12/764"},
  anvisa_teplizumabe2026: {s: "ANVISA 2026 – teplizumabe (notícia)", t: "Conselho Federal de Farmácia. Anvisa aprova o primeiro medicamento para diabetes tipo 1 do Brasil (16/03/2026): teplizumabe para retardar a progressão para o estágio 3 em pessoas a partir de 8 anos com sinais iniciais de DM1 (notícia; registro e bula não abertos; não incorporado ao SUS até onde verificado)."},
  glucagen_bula: {s: "GlucaGen HypoKit – bula (Novo Nordisk, Brasil)", t: "GlucaGen HypoKit (glucagon 1 mg; Novo Nordisk), bula transcrita em bula.com.br (página atualizada em 08/09/2026; não é o arquivo da ANVISA): hipoglicemia grave – adultos e crianças com mais de 25 kg (ou maiores de 6 a 8 anos): 1 mL da solução reconstituída (1 mg); crianças abaixo de 25 kg (ou menores de 6 a 8 anos): 1/2 mL (0,5 mg); via subcutânea ou intramuscular; sem resposta em 10 minutos, procurar assistência médica. Conferida em 01/11/2026.", f: "F", url: "https://bula.com.br/glucagen-hypokit"},
});
FONTES.anvisa_teplizumabe2026.f = "F"; FONTES.anvisa_teplizumabe2026.url = "https://site.cff.org.br/noticia/Noticias-gerais/16/03/2026/anvisa-aprova-o-primeiro-medicamento-para-diabetes-tipo-1-do-brasil";

const M047_DM = "Memo 047/2026 (a UBS autoriza: peptídeo C, anti-ilhota/ICA, anti-insulina/IAA, insulina, HbA1c, TSH, anti-TPO, anti-transglutaminase IgA, IgA, microalbuminúria, B12; anti-GAD não consta → guia com justificativa à DIREG)";

// ───────────────────────── DM1
CONDICOES.push({
  id: "cr-dm1", modulo: "cr", nome: "DM1 (criança, adolescente e adulto): diagnóstico, insulina no SUS, CEAF e cuidado na APS", sistema: "DM", risco: "alto",
  ciap: "T89", cid: "E10.0–E10.9",
  tags: "DM1 diabetes tipo 1 diabetes mellitus tipo 1 insulinodependente juvenil criança adolescente basal-bolus NPH regular análogo glargina lispro asparte CEAF Farmácia de Minas LME cetoacidose CAD cetonas cetonúria cetonemia dias de doença hipoglicemia glucagon lua de mel peptídeo C anti-GAD anticorpos tireoide celíaca retinografia teplizumabe rastreio familiares tiras glicosímetro",
  alerta: "Suspeita de DM1 recém-diagnosticado na criança ou no adolescente (sede, xixi demais, perda de peso, glicemia alta) = encaminhar à urgência NO MESMO DIA. Em qualquer idade, glicemia alta com vômitos, dor abdominal, respiração rápida e profunda, hálito cetônico ou sonolência = suspeita de cetoacidose → urgência. A pessoa com DM1 nunca fica sem a insulina basal, mesmo sem comer.",
  S: `DM1 há ___ anos (diagnóstico aos ___ anos; ___ CAD ao diagnóstico). Acompanha com endocrinologista: ___ (última consulta ___).
Esquema atual: NPH ___ UI café / ___ UI almoço / ___ UI 22 h; regular ___ / ___ / ___ UI 30 min antes de café, almoço e jantar (ou análogos pelo CEAF: ___). Dose total ___ UI/dia (___ UI/kg).
Automonitorização: ___ vezes/dia; glicemias de jejum ___, pré-almoço ___, pré-jantar ___, ao deitar ___.
Hipoglicemias: ___/semana; noturnas ___; graves (precisou de ajuda) nos últimos 6 meses ___. Reconhece os sintomas: ___. Tem glucagon em casa: ___.
Dias de doença e cetonas: sabe o que fazer ___. Locais de aplicação e rodízio ___. Insumos (tiras, lancetas, agulhas/seringas) suficientes: ___.
Alimentação, atividade física, escola/trabalho: ___. Humor, sofrimento com o diabetes, omissão de doses: ___. Planejamento reprodutivo/contracepção: ___.`,
  O: `HbA1c ___% (___) | anteriores ___.
Glicemia capilar agora ___ mg/dL | cetonúria/cetonemia ___ (se glicemia > 250–300 ou doente).
Locais de aplicação: lipo-hipertrofia ___ (ausente). Pés (≥ 5 anos de doença ou puberdade): ___.
Exames do ano: TSH ___, anti-TPO ___ | creatinina/TFG ___ | albuminúria (RAC) ___ | lipídios ___ | anti-tTG IgA (criança: diagnóstico, 2º e 5º ano) ___ | retinografia ___.`,
  A: "DM1 em insulinoterapia basal-bolus, HbA1c ___% (meta < ___%), ___ hipoglicemias; ___ complicações; cuidado compartilhado com a endocrinologia ___.",
  P: `- Insulina mantida/ajustada: ___ (nunca suspender a basal; ajuste pelo padrão de 3–7 dias de glicemias).
- Revisados técnica, rodízio, conservação e descarte; hipoglicemia (regra dos 15) e glucagon com a família; plano escrito de dias de doença (cetonas, quando procurar a urgência).
- Automonitorização: ___ vezes/dia (mínimo 3–4); tiras, lancetas e agulhas/seringas prescritas para ___ dias.
- Exames: HbA1c a cada 3 meses (6 se estável na meta); anual TSH + anti-TPO (a cada 1–2 anos), creatinina, RAC, lipídios; anti-tTG IgA conforme idade/sintomas; retinografia ___.
- CEAF (análogos): ___ (LME e formulário de monitoramento a cada 6 meses, com HbA1c de até 3 meses).
- Vacinas revistas (influenza anual, covid, pneumocócica, hepatite B) – CRIE: ___.
- Saúde mental / eMulti / nutrição: ___. Contracepção eficaz até gestação planejada: ___.
- Retorno em ___ (consulta ao menos a cada 3 meses na fase de ajuste); endocrinologia ≥ 2×/ano (compartilhado).`,
  calcPac: {
    titulo: "Dose inicial de insulina no DM1 (NPH + regular)",
    campos: [["peso", "Peso (kg)"], ["uikg", "Dose total (UI/kg/dia) – início 0,5 (lua de mel 0,3–0,4)"]],
    nota: "PCDT DM1 2019 e SBD (DM1 no SUS): início 0,5–1 UI/kg/dia; lua de mel < 0,5 UI/kg/dia (basal < 0,25); basal < 50% da dose total e bolus ≥ 50%; NPH em 3 doses (antes do café, antes do almoço e às 22 h) e regular 30 min antes de café, almoço e jantar [F]. Dividir a NPH e a regular em partes iguais é só ponto de partida para o 1º ajuste [I]. Criança e adolescente: dose e esquema com a atenção especializada.",
    f: ({peso, uikg}) => {
      const total = Math.round(peso * uikg);
      const nph = Math.round(total * 0.5), reg = total - nph;
      const n3 = Math.max(1, Math.round(nph / 3)), r3 = Math.max(1, Math.round(reg / 3));
      return {
        total: String(total), nph: String(nph), reg: String(reg), n3: String(n3), r3: String(r3),
        _resumo: `${String(peso).replace(".", ",")} kg × ${String(uikg).replace(".", ",")} UI/kg = ${total} UI/dia. Basal (NPH, 50%): ${nph} UI ≈ ${n3} UI antes do café + ${n3} UI antes do almoço + ${n3} UI às 22 h. Bolus (regular, 50%): ${reg} UI ≈ ${r3} UI 30 min antes de café, almoço e jantar. Ponto de partida; ajustar pelas glicemias de 3 dias.${uikg > 1 ? " Atenção: acima de 1 UI/kg/dia – fora da faixa de início do PCDT." : ""}`
      };
    }
  },
  rx: [{
    trilha: "sus",
    titulo: "DM1 – NPH + regular (SUS Betim) com insumos",
    texto: `USO SUBCUTÂNEO
1. Insulina humana NPH 100 UI/mL (frasco 10 mL ou caneta 3 mL) ______ ___ frascos/canetas
   Aplicar {{n3}} UI antes do café, {{n3}} UI antes do almoço e {{n3}} UI às 22 horas.
2. Insulina humana regular 100 UI/mL (frasco 10 mL ou caneta 3 mL) ______ ___ frascos/canetas
   Aplicar {{r3}} UI 30 minutos antes do café, do almoço e do jantar.
   Se a refeição for muito menor que o habitual ou a glicose estiver abaixo de 70: não aplicar a regular daquela refeição e avisar a equipe.
3. Seringa para insulina 100 UI com agulha acoplada (ou agulha para caneta) ______ ___ unidades (uma por aplicação ou conforme orientação)
4. Tiras reagentes para glicemia capilar ______ ___ unidades (medir antes das refeições e ao deitar)
5. Lancetas ______ ___ unidades

Nunca suspender a insulina NPH, mesmo sem comer ou doente: seguir o plano de dias de doença.`,
    dose: "F",
    nota: "Doses iniciais, NPH em 3 tomadas (café, almoço e 22 h) e regular 30 min antes das refeições: PCDT DM1 2019 e SBD – DM1 no SUS [F]. Divisão igual entre as tomadas e omitir a regular se a refeição não acontecer: [I]. REMUME Betim: NPH e regular em frasco 10 mL e caneta 3 mL [F]. Quantidade de tiras para DM1 em Betim: [NV] – confirmar o protocolo municipal. Use o campo 'Dose inicial de insulina no DM1' para preencher."
  }, {
    trilha: "evidencia",
    titulo: "Glucagon para casa (compra)",
    texto: `USO INTRAMUSCULAR OU SUBCUTÂNEO
1. Glucagon 1 mg, kit com seringa ______ 1 kit
   Em caso de hipoglicemia com desmaio, convulsão ou se não conseguir engolir: aplicar 1 mg (criança com menos de 25 kg ou menos de 6 a 8 anos: 0,5 mg) no músculo da coxa ou do braço, ou sob a pele. Virar de lado. Chamar o SAMU 192. Quando acordar e conseguir engolir, dar açúcar e um lanche.`,
    dose: "C",
    nota: "Dose da bula do GlucaGen HypoKit (Novo Nordisk): 1 mg; 0,5 mg se < 25 kg ou < 6–8 anos; SC ou IM [F: bula transcrita em bula.com.br, 01/11/2026 – a bula antiga da Lilly usava 20 kg]. Se não acordar em 10 min, SAMU 192. Glucagon não consta na RENAME 2024 nem na REMUME Betim (compra) [F]. Na UBS, a hipoglicemia grave com acesso venoso usa glicose 50% (REMUME) – ver item Hipoglicemia."
  }],
  idealsus: {
    ideal: "Análogo de insulina de ação prolongada + análogo de ação rápida (ou bomba/sistema automatizado), com sensor contínuo de glicose (CGM), cetonemia capilar e glucagon em casa; contagem de carboidratos com equipe multiprofissional (ADA/EASD 2026).",
    sus: "APS/REMUME: NPH e regular (frasco e caneta), seringas/agulhas, tiras e lancetas. Glargina na APS de Betim só na fase 1 (DM1 de 2 a < 18 anos fora do CEAF; ≥ 80 anos). Adulto de 18 a 69 anos: análogos pelo CEAF (Farmácia de Minas: glargina ≥ 2 anos, lispro ≥ 3 anos, asparte) com critérios do PCDT. Sem CGM, bomba nem glucagon no SUS de Betim.",
    ponte: "Otimize NPH (3 doses, a última às 22 h) + regular 30 min antes das refeições. Se hipoglicemia grave, ≥ 2 não graves/semana, > 1 noturna/semana ou HbA1c fora da meta por 12 meses apesar de AMG ≥ 3×/dia e ≥ 3 meses de NPH/regular: abra a LME do CEAF (rápido primeiro; prolongado depois de ≥ 3 meses de NPH + rápido). Glucagon e sensor: compra pela família."
  },
  orient: `## O que é o diabetes tipo 1
- No diabetes tipo 1, o corpo **deixou de fabricar insulina**. Por isso a insulina é **para sempre** e não pode faltar nenhum dia.
- Comprimidos para diabetes não substituem a insulina no tipo 1.

## Suas insulinas
- **Insulina NPH** (leitosa, de ação longa): {{n3}} unidades antes do café, {{n3}} antes do almoço e {{n3}} às 22 horas. **Nunca pule a NPH**, mesmo sem fome ou doente.
- **Insulina regular** (transparente, para as refeições): {{r3}} unidades **30 minutos antes** do café, do almoço e do jantar.
- Se for comer muito menos que o normal, ou se a glicose estiver abaixo de 70, não aplique a regular daquela refeição e fale com a equipe.
- Troque o local de aplicação (barriga, coxa, braço). Caroços na pele no local da aplicação atrapalham a insulina: mostre à equipe.

## Medir a glicose
- Meça **antes das refeições e ao deitar** e anote (ou leve o aparelho na consulta).
- Leve as anotações de pelo menos 2 semanas a cada consulta.

## Glicose baixa (abaixo de 70)
- Sinais: tremor, suor frio, fome, coração acelerado, confusão, sonolência, pesadelos à noite.
- **Regra dos 15:** tome 1 colher de sopa de açúcar em meio copo de água (ou 150 mL de refrigerante comum), espere **15 minutos** e meça de novo. Se continuar abaixo de 70, repita. Depois, faça um lanche.
- Se a pessoa **desmaiar, tiver convulsão ou não conseguir engolir**: não dê nada pela boca, aplique o **glucagon** se tiver, vire de lado e ligue **192**.
- Ensine a família, a escola e o trabalho a reconhecer e tratar.

## Quando estiver doente (gripe, vômito, diarreia, febre)
- **Continue a insulina NPH.** A doença costuma aumentar a glicose.
- Meça a glicose **a cada 2 a 4 horas**, inclusive à noite.
- Se a glicose passar de **300** duas vezes seguidas, pesquise **cetona** (fita de urina ou aparelho) se tiver.
- Beba bastante líquido com sal: soro caseiro, caldos, sopa, água de coco. Se a glicose estiver baixa e não conseguir comer, tome líquidos com açúcar.
- Procure a urgência se: vomitar por mais de 2 horas, respiração rápida, hálito de fruta, dor de barriga forte, sonolência ou confusão, cetona moderada ou alta, glicose que não baixa ou que não sobe de 70.

## Como guardar a insulina
- Frascos e canetas fechados: **na geladeira**, na prateleira da metade de baixo, longe da parede do fundo. **Não guarde na porta. Nunca congele.**
- O frasco ou a caneta em uso pode ficar fora da geladeira, em lugar fresco, sem sol, pelo tempo que a farmácia orientar. Anote a data em que abriu.

## Consultas e exames
- Volte na UBS pelo menos **a cada 3 meses** com as anotações. A equipe da UBS e a endocrinologia cuidam juntas.
- Todo ano: exames de sangue e urina, exame dos olhos (retinografia) e dos pés, conforme a equipe pedir.
- Vacinas em dia: gripe todo ano, covid, hepatite B e pneumonia.
- **Mulher:** use método para não engravidar até planejar a gravidez com a equipe. Gravidez com glicose alta aumenta o risco para o bebê.
- Ande com um cartão ou pulseira dizendo que você tem diabetes tipo 1 e usa insulina.`,
  alarme: ["Vômitos que não param ou por mais de 2 horas", "Respiração rápida e funda, hálito de fruta, dor de barriga forte", "Sonolência, confusão, desmaio ou convulsão", "Glicose acima de 300 que não baixa com a insulina, ou cetona moderada/alta", "Glicose abaixo de 70 que não melhora depois de 2 tentativas com açúcar", "Criança com muita sede, muito xixi (ou voltou a fazer xixi na cama) e perda de peso"],
  encaminhar: "Suspeita de DM1 recém-diagnosticado na criança/adolescente → urgência no mesmo dia [C]. CAD suspeita (glicemia alta + vômitos, dor abdominal, Kussmaul, hálito cetônico, sonolência, cetonemia > 1,5 mmol/L ou cetonúria alta apesar de hidratação e insulina extra) → urgência (SAMU 192), com soro fisiológico enquanto aguarda [F]. Hipoglicemia grave sem resposta → urgência. Todo DM1: cuidado compartilhado com endocrinologia (≥ 2 consultas/ano; pediátrica para < 18 anos) – teleconsultoria (Telessaúde UFMG) enquanto aguarda. Gestante com DM1 → pré-natal de alto risco (NT SES-MG 2024) mantendo a APS. Retinopatia, albuminúria persistente ou TFG em queda → oftalmologia/nefrologia conforme protocolo.",
  sus: {
    nacional: "RENAME 2024: insulina humana NPH e regular 100 UI/mL (Básico); insulina análoga de ação rápida 100 UI/mL e de ação prolongada 100 e 300 UI/mL (Especializado, grupo 1A, PCDT DM1). NTC 169/2026: glargina no Componente Básico para DM1 de 2 a < 18 anos e pessoas ≥ 70 anos. Glucagon não consta na RENAME 2024 (texto integral conferido). Tiras, lancetas e seringas/agulhas: insumos para quem usa insulina (Componente Básico).",
    betim: "REMUME Betim: insulina NPH e regular em frasco 10 mL e caneta 3 mL; glargina refil 3 mL e frasco 10 mL (APS por fases – NT DAPS 14/2026: hoje DM1 de 2 a < 18 anos fora do CEAF e ≥ 80 anos); glicose 50% ampola; sem glucagon. DM1 adulto < 70 anos não é público da glargina da APS – vai pelo CEAF (Farmácia de Minas: LME, formulário DM1, renovação a cada 6 meses). Exames: " + M047_DM + ". Retinografia: NT 08/2025 – DM1 adulto anual após 5 anos de doença; a partir de 11 anos com 2–5 anos de doença."
  },
  divergencia: "Metas: PCDT DM1 2019 e SBD usam HbA1c < 7,5% em criança/adolescente e < 7,0% no adulto; o ADA/EASD 2026 propõe < 7% com tempo no alvo > 70% pelo CGM, que o SUS não fornece. Monitorização: o PCDT pede AMG ≥ 3×/dia como condição para análogos, mas a quantidade de tiras é definida localmente (no DM2 com só basal, Betim usa 100 tiras/90 dias) – conferir a regra de Betim para DM1. Análogos: o consenso internacional os prefere para todos; no SUS são de 2ª linha, condicionados a hipoglicemia ou mau controle documentados.",
  evid: {
    resumo: "No DM1 a insulina é obrigatória e o esquema basal-bolus é o padrão. O PCDT DM1 (2019) define metas (HbA1c < 7,0% no adulto, < 7,5% na criança), doses (0,5–1 UI/kg/dia no início) e libera análogos pelo CEAF quando há hipoglicemia relevante ou mau controle com NPH/regular; análogos reduzem hipoglicemia, sobretudo noturna. O consenso ADA/EASD 2026 coloca o CGM e a infusão automatizada como padrão e trata cetonas, hipoglicemia e dias de doença como educação obrigatória; a SBD detalha o plano de dias de doença e o rastreio anual de tireoide (e de celíaca na criança). Teplizumabe (ANVISA 2026) retarda o estágio 3 em pessoas com ≥ 2 anticorpos e disglicemia; não está no SUS.",
    certeza: "Normativa para metas, doses e acesso (PCDT 2019; Farmácia de Minas 2025). Recomendações de consenso/diretriz (ADA/EASD 2026, SBD), em boa parte de baixa certeza ou opinião de especialistas; teplizumabe: ECR de fase 3 em população jovem (não avaliado nesta revisão).",
    fontes: ["pcdt_dm1_2019", "ceaf_mg_dm1_2025", "sbd_dm1sus2023", "sbd_classif2023", "sbd_diasdoenca2023", "sbd_autoimunes2023", "sbd_imun2025", "sbd_rastreio_dm1_2025", "ada_easd_dm1_2026", "ada2026_dm1", "anvisa_teplizumabe2026", "ntc169_2026", "betim_nt14_2026", "betim_memo047_2026", "betim_retino2025", "betim_dm2026", "sesmg_risco", "glucagen_bula", "rename", "remume"]
  },
  mudancas: ["Item novo (v79, 30/10/2026): DM1 na APS – diagnóstico, primeira conduta, NPH + regular com cálculo da dose inicial, metas, hipoglicemia e glucagon, dias de doença (SBD), seguimento anual, CEAF/Farmácia de Minas, gestação, rastreio em familiares e teplizumabe."],
  nv: [
    "Quantidade de tiras, lancetas e glicosímetro para DM1 em Betim e se a UBS fornece fita de cetonúria ou cetonemia capilar.",
    "Fluxo e prazo da endocrinologia adulta e pediátrica em Betim (CMCE) e serviço de referência para DM1 recém-diagnosticado na criança.",
    "Anti-GAD em Betim: não consta na tabela do Memo 047/2026 (guia à DIREG com justificativa); laboratório e prazo. Método do anti-ilhota (ICA) do laboratório contratado.",
    "Vacinas especiais para DM pelo CRIE (Manual dos CRIE 2023): lista exata e CRIE de referência de Betim – a SBD 2025 recomenda influenza, covid, pneumocócica e hepatite B.",
    "ADA/EASD 2026: texto integral não acessado (detalhes por resumo secundário).",
    "PCDT DM1: CONITEC informa atualização em curso – conferir se saiu versão nova antes de abrir LME.",
    "Teplizumabe: registro, bula e preço não abertos (notícia de 16/03/2026); sem incorporação ao SUS localizada.",
    "Bula do glucagon: conferida a do GlucaGen HypoKit (Novo Nordisk, via bula.com.br); o arquivo da ANVISA não foi aberto e outras marcas podem diferir.",
    "Asparte de 1 a 3 anos: é o que consta no documento da Farmácia de Minas (08/07/2025, reaberto em 01/11/2026); confirmar com a farmácia regional se a restrição vale na prática."
  ],
  guia: {
    urg: "Criança ou adolescente com suspeita de DM1 nova (poliúria, polidipsia, perda de peso, enurese nova, glicemia alta) → **urgência no mesmo dia** [C]. Em qualquer idade: glicemia alta com **vômitos, dor abdominal, Kussmaul, hálito cetônico, sonolência**, ou cetonemia > 1,5 mmol/L / cetonúria alta apesar de insulina extra e hidratação → **CAD: SAMU 192**, soro fisiológico enquanto aguarda [F]. **Nunca suspender a insulina basal** [F].",
    resumo: "O DM1 é **deficiência absoluta de insulina**: insulina basal-bolus para sempre. A APS é a **ordenadora do cuidado** (SBD) e divide o acompanhamento com a endocrinologia (≥ 2×/ano). No SUS de Betim: **NPH em 3 doses (café, almoço, 22 h) + regular 30 min antes das refeições**; análogos pelo **CEAF** quando há hipoglicemia relevante ou mau controle documentados; glargina na APS só na fase 1 (DM1 de 2 a < 18 anos fora do CEAF). Metas: HbA1c **< 7,0% adulto, < 7,5% criança** (PCDT). Toda família precisa de plano escrito de **hipoglicemia** e **dias de doença**.",
    secoes: [
      {t: "Reconhecer e confirmar", b: [
        {ul: [
          "**Diagnóstico de diabetes (PCDT DM1):** glicemia ao acaso > 200 mg/dL com sintomas; ou jejum ≥ 126 em 2 ocasiões; ou HbA1c ≥ 6,5% em 2 ocasiões. Com sintomas de insulinopenia, não é preciso repetir [F].",
          "**Pistas de DM1 no adulto:** < 35 anos, IMC < 25, perda de peso não intencional, CAD, glicemia > 360 mg/dL ou necessidade de insulina nos primeiros 3 anos (ADA/EASD 2026) [F, resumo secundário]. Autoimunidade pessoal/familiar também aponta para DM autoimune (SBD) [F].",
          "**Diferenciar primeiro pela clínica**; exames só se houver dúvida (SBD R1, IIa B) [F].",
          "**Anticorpos** na suspeita de DM1 no adulto: positivos confirmam (SBD R2, I B). Ordem: anti-GAD; se negativo, anti-IA-2/ZnT8 (ADA/EASD 2026) [F]. Anti-insulina (IAA) perde valor depois de ~5–7 dias de insulina [F].",
          "**Peptídeo C** (ao acaso, com glicemia pareada > 100 mg/dL, sem hipoglicemia) quando anticorpos negativos e dúvida persiste: < 0,6 ng/mL (≈ 0,2 nmol/L; 200 pmol/L) após ≥ 5 anos sugere DM1; > 0,6 sugere DM2 ou monogênico (SBD R3, I C) [F]. No início do DM1 o peptídeo C pode ainda ser normal (lua de mel) [F].",
          "**Pensar em MODY:** início < 25 anos, diabetes em 2–3 gerações, anticorpos negativos, peptídeo C > 0,6 ng/mL após 5 anos (SBD R5) [F]."
        ]},
        {tab: {h: ["Exame", "Na tabela do Memo 047/2026 (UBS autoriza)?", "Uso"], r: [
          ["Peptídeo C", "Sim [F]", "Reserva de insulina; LADA (CEAF exige)"],
          ["Anti-ilhota (ICA)", "Sim [F]", "Marcador aceito pelo PCDT e pelo CEAF/MG [F]"],
          ["Anti-insulina (IAA)", "Sim [F]", "Só antes de iniciar insulina [F]"],
          ["Anti-GAD", "Não localizado [F]", "Marcador mais sensível no adulto; guia com justificativa à DIREG [F]"],
          ["HbA1c, TSH, anti-TPO, anti-tTG IgA, IgA, RAC, B12", "Sim [F]", "Seguimento e comorbidades autoimunes"]
        ]}, nota: "Memo 047/2026 (DIREG/DAPS Betim), tabela anexa conferida na v78 [F]. Constar na tabela não é indicação."},
        {ref: ["pcdt_dm1_2019", "sbd_classif2023", "ada_easd_dm1_2026", "betim_memo047_2026"]}
      ]},
      {t: "Primeiro atendimento (diagnóstico novo)", b: [
        {fluxo: [
          {t: "Hiperglicemia com suspeita de DM1 (sintomas, perda de peso, pistas clínicas)"},
          {t: "Glicemia capilar + cetonúria/cetonemia (se disponível) e sinais de CAD", ramos: [
            {r: "Criança/adolescente, ou sinais de CAD em qualquer idade", n: [{t: "Urgência no mesmo dia (SAMU 192 se CAD): soro fisiológico enquanto aguarda; não iniciar esquema em casa", k: "stop"}]},
            {r: "Adulto estável, sem cetose relevante, que come e bebe", n: [{t: "Iniciar insulina no mesmo dia (não só oral): 0,5 UI/kg/dia (lua de mel 0,3–0,4) – 50% NPH em 3 doses + 50% regular antes das refeições; ou ao menos NPH basal enquanto aguarda", k: "warn"}, {t: "Educação de sobrevivência (aplicação, hipoglicemia, dias de doença), glicemias 4×/dia, contato em 24–72 h, endocrinologia/teleconsultoria e anticorpos/peptídeo C se dúvida", k: "ok"}]}
          ]}
        ], nota: "Hiperglicemia com sintomas de insulinopenia pede insulina já (SBD 2025, R16) [F]. Doses: PCDT DM1 2019 [F]. Criança à urgência no mesmo dia e contato em 24–72 h: [C]/[I]."},
        {perola: {t: "O 'DM2 magro que emagrece' é DM1 até prova em contrário", x: "Perda de peso com glicemia alta indica falta de insulina. Insistir em metformina e glibenclamida atrasa a insulina e abre caminho para a CAD. Na dúvida, insulina primeiro e investigação depois.", l: "I"}},
        {ref: ["pcdt_dm1_2019", "sbd_trat2025", "sbd_dm1sus2023"]}
      ]},
      {t: "Insulina no SUS: esquemas e doses", b: [
        {tab: {h: ["Fase", "Dose total (UI/kg/dia)", "Basal (UI/kg/dia)"], r: [
          ["Início ou após CAD", "0,5–1 [F]", "≈ 50% da total [F]"],
          ["Lua de mel (remissão parcial)", "< 0,5 [F]", "< 0,25 [F]"],
          ["Adulto após a remissão", "0,7–1,0 [F]", "0,3–0,5 [F]"],
          ["Lactente", "0,2–0,4 [F]", "0,1–0,2 [F]"],
          ["Pré-púbere", "0,5–0,8 [F]", "0,2–0,4 [F]"],
          ["Púbere", "0,8–2,0 [F]", "0,4–1,0 [F]"]
        ]}, nota: "PCDT DM1 2019 (Quadro 2) e SBD – DM1 no SUS (Tabela 3) [F]. Estresse e puberdade podem chegar a 1,2–1,5 UI/kg/dia [F]. Gestante: basal < 50% e prandial > 50% [F]."},
        {ul: [
          "**NPH:** 2–3 doses (às vezes 4); a maioria precisa de 3 – **antes do café, antes do almoço e ao deitar (~22 h)**, cerca de 8 h antes de acordar. NPH antes do jantar favorece hipoglicemia de madrugada e hiperglicemia ao acordar [F].",
          "**Regular:** **30 min antes** de café, almoço e jantar, em dose fixa com quantidade de carboidrato regular; cerca de metade da dose total vai para as refeições [F].",
          "**Basal < 50% da dose total**; se a basal passa disso, o problema costuma estar nas refeições – rever a prandial em vez de subir a NPH [F].",
          "**Ajuste:** pelo padrão de 3–7 dias. Jejum alto → NPH das 22 h; pré-almoço alto → regular do café (ou NPH da manhã); pré-jantar alto → NPH do almoço/regular do almoço; ao deitar alto → regular do jantar [C].",
          "**Agulhas:** ao menos 1 por dia para cada insulina (SBD) [F]. Rodízio e inspeção de lipo-hipertrofia a cada consulta [C].",
          "**Glargina na APS (Betim):** só fase 1 – DM1 de 2 a < 18 anos que não recebe pelo CEAF e ≥ 80 anos; DM1 adulto < 70 anos **não** é público da APS, mesmo sem CEAF [F]. Conversão no item 'Troca da insulina NPH pela glargina'."
        ]},
        {trio: {ideal: "Análogos (prolongado + rápido) ou infusão automatizada, com CGM e contagem de carboidratos (ADA/EASD 2026).", sus: "NPH + regular na UBS; análogos pelo CEAF com critérios; glargina na APS só na fase 1; sem CGM/bomba.", ponte: "NPH em 3 doses + regular bem ajustadas resolvem boa parte dos casos. Documente hipoglicemias e HbA1c desde já: são o que libera o análogo no CEAF."}},
        {ref: ["pcdt_dm1_2019", "sbd_dm1sus2023", "ntc169_2026", "betim_nt14_2026", "betim_dm2026", "ada_easd_dm1_2026"]}
      ]},
      {t: "Metas e automonitorização", b: [
        {tab: {h: ["", "Criança/adolescente", "Adulto", "Idoso", "Gestante"], r: [
          ["HbA1c", "< 7,5% [F]", "< 7,0% [F]", "7,5–8,5% (saudável < 7,5%) [F]", "< 6,0% [F]"],
          ["Pré-prandial (mg/dL)", "70–145 [F]", "70–130 [F]", "individualizar", "< 90 [F]"],
          ["Pós-prandial (mg/dL)", "90–180 [F]", "< 180 [F]", "individualizar", "< 140 (1 h) / < 120 (2 h) [F]"],
          ["Ao deitar / madrugada (criança)", "120–180 / 80–162 [F]", "—", "—", "—"]
        ]}, nota: "PCDT DM1 2019 (Quadro 1, Tabela 1) e SBD [F]. Metas individualizadas pela capacidade de reconhecer e tratar hipoglicemia [F]. ADA/EASD 2026 (com CGM): tempo no alvo > 70%, < 4% abaixo de 70 e < 1% abaixo de 54 [F, resumo secundário]."},
        {ul: [
          "**AMG** para todos: no mínimo 3–4 vezes/dia (antes das refeições e ao deitar); mais ao ajustar doses; gestante antes e depois das refeições [F].",
          "Sem download do glicosímetro: **registro de 15–30 dias** para levar à consulta [F].",
          "**HbA1c** a cada 3 meses (6 meses se na meta e estável) [F]."
        ]},
        {ref: ["pcdt_dm1_2019", "sbd_dm1sus2023", "ada_easd_dm1_2026"]}
      ]},
      {t: "Hipoglicemia e glucagon", b: [
        {ul: [
          "**Nível 1** ≤ 70 mg/dL; **nível 2** < 54; **nível 3** = grave, precisa de ajuda [F].",
          "**Regra dos 15:** 15 g de carboidrato (1 colher de sopa de açúcar ou 150 mL de refrigerante comum), medir em 15 min, repetir até 3 vezes; nível 2: 30 g [F].",
          "**Glucagon** 1 mg IM/SC (0,5 mg se < 25 kg ou < 6–8 anos) para hipoglicemia grave fora do serviço [F: bula do GlucaGen HypoKit, 01/11/2026]. Não consta na RENAME/REMUME: **receita para compra** e treinar a família [F].",
          "Na UBS: com acesso venoso, glicose 50% (REMUME); sem acesso, glucagon se houver – conduta completa no item Hipoglicemia [F].",
          "**Hipoglicemia repetida:** procurar a causa (NPH antes do jantar, refeição pulada, exercício, álcool, lipo-hipertrofia, dose excessiva, doença celíaca ou insuficiência adrenal) antes de culpar o paciente; documentar para o CEAF [F/C]."
        ]},
        {ref: ["hipo_cbmfc", "glucagen_bula", "pcdt_dm1_2019", "sbd_autoimunes2023"]}
      ]},
      {t: "Dias de doença e cetonas (plano escrito)", b: [
        {ul: [
          "**Nunca suspender a basal**, mesmo em jejum (SBD R4, I C) [F].",
          "Glicemia **a cada 1–4 h**; correção a cada 4 h com regular, inclusive à noite [F].",
          "**Cetonas** se glicemia > 300 mg/dL em 2 medidas com 1–2 h de intervalo após correção; cetonemia capilar é preferível à cetonúria (que demora a negativar) [F].",
          "Hidratação com sais (soro caseiro, caldos, sopa, água de coco); glicemia < 250 sem apetite → líquidos com carboidrato e insulina adequada; > 250 → líquidos sem açúcar [F]."
        ]},
        {tab: {h: ["Cetonemia (mmol/L)", "Cetonúria", "Insulina extra (glicemia 180–250)", "Conduta"], r: [
          ["< 0,6", "Negativa", "Manter a dose total diária (DTD) [F]", "Casa"],
          ["0,7–1,4", "Traços/leve", "+5% da DTD (≈ 0,05 UI/kg) em cada correção [F]", "Casa, hidratar, reavaliar em 1–2 h"],
          ["1,5–2,9", "Moderada", "+10% da DTD (≈ 0,1 UI/kg) [F]", "Risco de CAD; se não cai com insulina e hidratação → urgência [F]"],
          ["≥ 3,0", "Alta", "+20–50% da DTD (≈ 0,2 UI/kg) [F]", "Urgência [F]"]
        ]}, nota: "SBD – Manejo dos dias de doença no DM1, Tabelas 1 e 2 [F]. Com glicemia > 250, as doses extras são maiores (10–20% e 20–50% da DTD) [F]. A SBD descreve doses extras com análogo rápido ou regular; no SUS, a correção usa a regular (a cada 4 h) [F]."},
        {alerta: "Procurar urgência: vômitos > 2 h, desidratação, sonolência/confusão, dor abdominal importante, Kussmaul, hálito cetônico, cetonemia > 1,5 ou cetonúria alta apesar das medidas, glicemia subindo apesar das correções ou que não se mantém > 70, criança < 5 anos, família sem condição de acompanhar [F]."},
        {ref: ["sbd_diasdoenca2023", "ada_crises2024"]}
      ]},
      {t: "Seguimento na APS (agenda)", b: [
        {tab: {h: ["Quando", "O quê"], r: [
          ["Toda consulta", "Glicemias e hipoglicemias, locais de aplicação, técnica e conservação, insumos, sofrimento com o diabetes/omissão de doses, peso e PA [F/C]"],
          ["A cada 3 meses", "HbA1c (6 meses se estável na meta) [F]"],
          ["≥ 2×/ano", "PA; endocrinologia (compartilhado) [F]"],
          ["Ao diagnóstico e a cada 1–2 anos", "TSH + anti-TPO [F]"],
          ["Criança: diagnóstico, 2º e 5º ano", "Anti-tTG IgA (sem deficiência de IgA) para doença celíaca; adulto só com sintomas, perda de peso, mau controle ou hipoglicemia sem explicação [F]"],
          ["Anual", "Lipídios, creatinina/TFG [F]"],
          ["Anual a partir de 5 anos de doença ou da puberdade", "Albuminúria (RAC), exame dos pés (monofilamento, vibração) [F]"],
          ["Retinografia (Betim)", "DM1 adulto: anual após 5 anos de doença; a partir de 11 anos com 2–5 anos de doença (NT 08/2025) [F]"],
          ["Vacinas", "Influenza anual (≥ 6 meses), covid, pneumocócica, hepatite B (SBD 2025); vacinas especiais pelo CRIE com encaminhamento médico [F]"]
        ]}, nota: "PCDT DM1 2019, SBD (DM1 no SUS; comorbidades autoimunes; imunização 2025), NT Betim 08/2025 [F]."},
        {ul: [
          "**Cardiovascular:** PA < 130/80; estatina a partir de 40 anos, ou de 20 a 39 se risco em 10 anos > 10% (ADA/EASD 2026) [F, resumo secundário].",
          "**Saúde mental:** rastrear sofrimento com o diabetes, depressão e omissão de insulina (inclusive para perder peso) – causa de CAD de repetição (SBD) [F]; acionar eMulti/psicologia.",
          "**Adolescência:** transferir a responsabilidade aos poucos, com a família participando (PCDT) [F]; atenção à transição para o serviço de adultos [C].",
          "**Atividade física:** criança 60 min/dia; adulto 150 min/semana em ≥ 3 dias (PCDT), com glicemia antes e plano para hipoglicemia [F]."
        ]},
        {ref: ["pcdt_dm1_2019", "sbd_dm1sus2023", "sbd_autoimunes2023", "sbd_imun2025", "betim_retino2025", "ada_easd_dm1_2026"]}
      ]},
      {t: "CEAF: análogos pela Farmácia de Minas", b: [
        {ul: [
          "**O que há:** asparte (1 a 3 anos, conforme o documento), lispro (≥ 3 anos) e glargina (≥ 2 anos) [F].",
          "**Critério do análogo rápido:** NPH + regular por ≥ 3 meses e, nos últimos 6 meses, hipoglicemia grave, ≥ 2 não graves/semana, > 1 noturna/semana ou mau controle persistente (HbA1c dos últimos 12 meses); AMG ≥ 3×/dia; seguimento ≥ 2×/ano [F].",
          "**Critério do análogo prolongado:** NPH + análogo rápido por ≥ 3 meses, com os mesmos critérios [F].",
          "**Documentos:** identidade, CPF, CNS, comprovante de residência; LME; receita pela DCB; formulário específico do DM1 (inicial e de monitoramento); termo, se houver; glicemia – 2 HbA1c ou 2 glicemias de jejum nos últimos 6 meses (ou 1 glicemia ao acaso/2 h); relatório de urgência ou registros do glicosímetro para hipoglicemia grave [F].",
          "**Renovação** a cada 6 meses: nova LME, receita e formulário de monitoramento com HbA1c de até 3 meses; mantém se atingiu a meta, reduziu HbA1c ≥ 0,5 ponto ou melhorou as hipoglicemias [F]. Sem retirada por 6 meses = pedido inativado [F].",
          "**Onde:** farmácia do município (Farmácia de Minas); análise em ~30 dias; acompanhamento pelo MG App [F]. O documento não exige especialista para assinar [F]."
        ]},
        {ref: ["ceaf_mg_dm1_2025", "pcdt_dm1_2019"]}
      ]},
      {t: "Gestação e contracepção", b: [
        {ul: [
          "**Gestante com DM1 = alto risco** (NT SES-MG 2024): pré-natal de alto risco, mantendo a APS [F].",
          "**Planejar a gravidez:** contracepção eficaz até HbA1c próxima da meta da gestação (< 6,0% no PCDT, se sem hipoglicemia), ácido fólico pré-concepcional e revisão de medicamentos (IECA/BRA, estatina) [F/C].",
          "Na gestação as necessidades mudam rápido (queda no 1º trimestre, alta no 2º–3º) e o risco de hipoglicemia aumenta: contato frequente com o alto risco [C]. Retinografia a cada trimestre e no 1º ano pós-parto (NT Betim 08/2025) [F]."
        ]},
        {ref: ["sesmg_risco", "pcdt_dm1_2019", "betim_retino2025"]}
      ]},
      {t: "Familiares, estágios e teplizumabe", b: [
        {tab: {h: ["Estágio (SBD 2025)", "Definição"], r: [
          ["1", "≥ 2 anticorpos, normoglicemia, sem sintomas [F]"],
          ["2", "≥ 2 anticorpos com disglicemia: jejum 100–125, TOTG 140–199, HbA1c 5,7–6,4% ou aumento de 10% em 3–12 meses [F]"],
          ["3", "Critério de diabetes (3A sem sintomas; 3B com sintomas, insulina imediata) [F]"]
        ]}, nota: "SBD 2025 (resumo secundário) [F]. Rastreio proposto para parentes de 1º grau; anticorpos pouco disponíveis no Brasil [F]."},
        {ul: [
          "**Teplizumabe:** aprovado pela ANVISA em março/2026 para retardar o estágio 3 a partir de 8 anos [F, notícia]; no consenso ADA/EASD 2026, 14 dias de infusão no estágio 2 atrasaram o diagnóstico clínico em mediana de 2–3 anos [F, resumo secundário]. **Não está no SUS** [F, até onde verificado].",
          "Na APS de Betim: sem rastreio populacional de anticorpos; para irmão ou filho de pessoa com DM1, orientar os sintomas e dosar glicemia/HbA1c se houver queixa [I]. Quem já tem ≥ 2 anticorpos (exame particular ou pesquisa) → endocrinologia [F: ADA 2026]."
        ]},
        {ref: ["sbd_rastreio_dm1_2025", "ada2026_dm1", "ada_easd_dm1_2026", "anvisa_teplizumabe2026"]}
      ]},
      {t: "Ver também", b: [{ir: [["cr-lada", "LADA"], ["cr-glargina", "Glargina na APS"], ["hipoglicemia", "Hipoglicemia"], ["hiperglicemia", "Hiperglicemia / CAD"], ["cr-pe-diabetico", "Pé diabético"], ["cr-exames-ubs", "Exames pela UBS"], ["pv-vacinas", "Vacinas"], ["mu-preconcepcional", "Pré-concepcional"], ["pn-risco", "Alto risco na gestação"]]}]}
    ]
  }
});

// ───────────────────────── LADA
CONDICOES.push({
  id: "cr-lada", modulo: "cr", nome: "LADA (diabetes autoimune latente do adulto): quando suspeitar, anticorpos, peptídeo C e tratamento", sistema: "DM", risco: "moderado",
  ciap: "T89 · T90", cid: "E10 (CEAF pelo PCDT DM1) · E11 enquanto não confirmado",
  tags: "LADA diabetes autoimune latente do adulto tipo 1,5 DM1 lento DM2 que falha magro perda de peso anti-GAD anticorpo ICA IAA peptídeo C sulfonilureia glibenclamida metformina insulina iDPP-4 sitagliptina GLP-1 iSGLT2 cetoacidose Fourlanos tireoide anti-TPO",
  alerta: "LADA não é \"DM2 mal aderente\": adulto com perda de peso, cetose ou glicemia subindo rápido apesar dos orais precisa de insulina. Evitar sulfonilureia (glibenclamida) – pode acelerar a perda das células beta. Cuidado com iSGLT2 (dapagliflozina) sem insulina: risco de cetoacidose.",
  S: `Diabetes diagnosticado aos ___ anos (há ___ anos), tratado como DM2 com ___. Insulina iniciada ___ meses após o diagnóstico (ou ainda sem insulina).
Pistas: IMC ao diagnóstico ___; perda de peso ___; sintomas agudos ao diagnóstico ___; piora rápida apesar dos orais ___; autoimunidade pessoal (tireoide, vitiligo, celíaca, anemia perniciosa) ___; familiar com DM1/autoimunidade ___.
Hipoglicemias ___. Episódio de cetose/CAD ___. Uso de glibenclamida ___ / dapagliflozina ___.`,
  O: `Peso ___ kg | IMC ___ kg/m² | PA ___ mmHg.
HbA1c ___% (___) e anteriores ___ | glicemia ___.
Anticorpos: anti-GAD ___ | ICA ___ | IAA ___ (antes da insulina?) | Peptídeo C ___ ng/mL com glicemia ___ mg/dL (___ nmol/L).
TSH ___ | anti-TPO ___.`,
  A: "Diabetes autoimune do adulto (LADA) – anticorpo ___ positivo, sem insulina nos primeiros ___ meses; peptídeo C ___ nmol/L (faixa ___); HbA1c ___%.",
  P: `- Tratamento pela faixa do peptídeo C: ___ (< 0,3 nmol/L: basal-bolus como DM1; 0,3–0,7: algoritmo do DM2 modificado + considerar insulina; > 0,7: algoritmo do DM2 modificado).
- Sulfonilureia suspensa/não iniciada. iSGLT2 só com insulina e orientação de cetose: ___.
- Metformina ___ | insulina NPH ___ UI às 22 h (titular 2 UI a cada 3 dias pela glicemia de jejum) | ___.
- Peptídeo C de controle em ___ (anual se > 0,7; a cada 6 meses se 0,3–0,7; não repetir se < 0,3) ou antes se a glicemia piorar.
- HbA1c a cada 3 meses; TSH + anti-TPO; anti-tTG IgA e B12 se sintomas; rastreio de complicações como em todo diabetes.
- Orientados sinais de falta de insulina (perda de peso, sede, vômitos) e de hipoglicemia.
- CEAF (análogos) se indicado: LME pelo PCDT DM1 com peptídeo C + ICA ou IAA.
- Endocrinologia/teleconsultoria: ___. Retorno em ___.`,
  calcPac: {
    titulo: "Peptídeo C: converter e classificar",
    campos: [["pc", "Peptídeo C (ng/mL)"], ["gli", "Glicemia na mesma coleta (mg/dL)"]],
    nota: "1 ng/mL de peptídeo C ≈ 0,331 nmol/L (massa molar ~3.020 g/mol) [C]. Faixas do consenso de LADA (Buzzetti 2020): < 0,3 nmol/L; 0,3–0,7; > 0,7 [F]. Interpretar só com glicemia de 80–180 mg/dL na coleta e sem hipoglicemia recente [F]. Antidiabéticos podem elevar o peptídeo C; glicemia piorando com peptídeo C > 0,3 também sugere queda da reserva [F].",
    f: ({pc, gli}) => {
      const nmol = pc * 0.331, n = nmol.toFixed(2).replace(".", ",");
      const faixa = nmol < 0.3 ? "< 0,3 nmol/L – reserva baixa: múltiplas doses de insulina (como DM1); não precisa repetir o peptídeo C" : nmol <= 0.7 ? "0,3–0,7 nmol/L – zona cinzenta: algoritmo do DM2 modificado (sem sulfonilureia), considerar insulina; repetir em 6 meses" : "> 0,7 nmol/L – reserva preservada: algoritmo do DM2 modificado (sem sulfonilureia); repetir anualmente ou se piorar";
      const val = (gli < 80 || gli > 180) ? ` Atenção: glicemia de ${gli} mg/dL fora de 80–180 – resultado pouco confiável, repetir.` : "";
      return {nmol: n, faixa: faixa, _resumo: `Peptídeo C ${String(pc).replace(".", ",")} ng/mL ≈ ${n} nmol/L (${Math.round(nmol * 1000)} pmol/L): ${faixa}.${val}`};
    }
  },
  rx: [{
    trilha: "ambos",
    titulo: "LADA com peptídeo C > 0,3 – metformina (SUS Betim)",
    texto: `USO ORAL
1. Metformina 850 mg ______ 60 comprimidos
   Tomar 1 comprimido após o jantar por 1 semana; depois, 1 comprimido após o café e 1 após o jantar.`,
    dose: "C",
    nota: "Metformina aceita no LADA (sem evidência de que preserve a célula beta) – Buzzetti 2020, Lundholm 2025 [F]. Posologia gradual como no DM2 [C]. Não associar glibenclamida: sulfonilureia não recomendada no LADA [F]. Com perda de peso, sintomas ou HbA1c alta, associar insulina já."
  }, {
    trilha: "ambos",
    titulo: "LADA – insulina NPH basal (SUS Betim)",
    texto: `USO SUBCUTÂNEO
1. Insulina humana NPH 100 UI/mL (frasco 10 mL ou caneta 3 mL) ______ ___ frasco(s)/caneta(s)
   Aplicar 10 UI às 22 horas. Aumentar 2 UI a cada 3 dias se a glicose de jejum estiver acima de ___; diminuir 2 a 4 UI se ficar abaixo de 70.
2. Seringa para insulina com agulha acoplada (ou agulha para caneta) ______ 30 unidades
3. Tiras reagentes e lancetas ______ conforme protocolo municipal`,
    dose: "F",
    nota: "Início e titulação da NPH: PCDT DM2 2026 (10 UI ou 0,1–0,2 UI/kg às 22 h; +2 UI/3 dias) [F]; uso no LADA com peptídeo C 0,3–0,7 ou controle inadequado: Buzzetti 2020 [F] – extrapolação do esquema do DM2 [I]. Peptídeo C < 0,3 nmol/L: basal-bolus como DM1 (item DM1, cálculo da dose) [F]."
  }, {
    trilha: "evidencia",
    titulo: "LADA com peptídeo C > 0,3 – sitagliptina (compra)",
    texto: `USO ORAL
1. Sitagliptina 100 mg ______ 30 comprimidos
   Tomar 1 comprimido ao dia.`,
    dose: "C",
    nota: "iDPP-4: melhora glicêmica com boa segurança e possível preservação do peptídeo C em ECR pequenos (Buzzetti 2020) [F]. Ajuste renal da bula: TFG 30–44 → 50 mg; < 30 → 25 mg [C]. Não consta na RENAME/REMUME (compra) [F]. aGLP-1 é alternativa (útil com obesidade/DCV; pouca resposta se peptídeo C muito baixo) – ver item GLP-1."
  }],
  idealsus: {
    ideal: "Anti-GAD para confirmar e peptídeo C para decidir; sem sulfonilureia; com reserva preservada, metformina ± iDPP-4 ou aGLP-1 (iSGLT2 só com cautela e, de preferência, com insulina); reserva baixa → basal-bolus com análogos (Buzzetti 2020).",
    sus: "Betim: metformina e insulinas NPH/regular na REMUME; a outra opção oral é a glibenclamida (sulfonilureia, a evitar); iDPP-4 e aGLP-1 fora do SUS; dapagliflozina da Farmácia Popular é para DM2 com DCV ≥ 65 anos. Peptídeo C, ICA e IAA a UBS autoriza (Memo 047/2026); anti-GAD não consta – guia à DIREG. Análogos pelo CEAF (PCDT DM1 aceita LADA com peptídeo C + ICA ou IAA).",
    ponte: "No SUS, o caminho seguro é metformina e **insulina precoce** (NPH), sem glibenclamida. Peça ICA (e IAA antes da insulina) + peptídeo C na própria UBS; anti-GAD pela DIREG se negativo e a suspeita for forte. A iDPP-4 fica como compra opcional para quem tem reserva preservada."
  },
  orient: `## O que é o LADA
- É um **diabetes autoimune** que começa no adulto e progride devagar: o próprio corpo vai destruindo as células que fabricam insulina.
- No começo parece o diabetes tipo 2 e pode ser controlado com comprimidos, mas **com o tempo a maioria das pessoas precisa de insulina**. Isso não é culpa sua nem falta de cuidado.

## Seu tratamento
- A equipe escolhe o remédio pelo exame **peptídeo C**, que mostra quanta insulina o seu corpo ainda produz. Esse exame será repetido de tempos em tempos.
- Alguns comprimidos usados no diabetes tipo 2 (como a **glibenclamida**) não são indicados para você.
- Se a equipe indicar **insulina**, ela protege o seu corpo e não significa que o diabetes "piorou por sua causa".

## Avise a equipe ou procure atendimento se
- Emagrecer sem querer, sentir muita sede, fazer muito xixi ou a glicose subir mesmo tomando os remédios.
- Tiver vômitos, dor de barriga forte, respiração rápida ou muita sonolência: procure a urgência.

## Glicose baixa (abaixo de 70), se usar insulina
- Tome 1 colher de sopa de açúcar em meio copo de água, espere 15 minutos e meça de novo. Se continuar abaixo de 70, repita.

## Exames e consultas
- Hemoglobina glicada a cada 3 meses; exames da tireoide; exames anuais de rins, olhos e pés, como em todo diabetes.
- Mulher: planeje a gravidez com a equipe.`,
  alarme: ["Vômitos, dor de barriga forte, respiração rápida e funda ou hálito de fruta", "Sonolência ou confusão", "Perda de peso sem querer com muita sede e muito xixi", "Glicose acima de 300 que não baixa", "Glicose abaixo de 70 que não melhora com açúcar"],
  encaminhar: "Sinais de CAD → urgência (SAMU 192). Peptídeo C < 0,3 nmol/L, falha da insulina basal, hipoglicemias ou dúvida diagnóstica (anticorpo negativo com forte suspeita, suspeita de MODY ou diabetes pancreático) → endocrinologia (compartilhar; teleconsultoria enquanto aguarda). Gestante → pré-natal de alto risco.",
  sus: {
    nacional: "RENAME 2024: metformina 500/850 mg, glibenclamida 5 mg, gliclazida 30/60/80 mg, insulina NPH e regular (Básico); insulina análoga rápida e prolongada (Especializado, PCDT DM1 – o PCDT prevê suspeita de LADA com peptídeo C + ICA ou IAA); dapagliflozina (Especializado, PCDT DM2). iDPP-4 e aGLP-1 não constam.",
    betim: "REMUME Betim: metformina 850 mg, glibenclamida 5 mg, insulina NPH e regular (frasco e caneta), glargina (APS por fases). Exames: " + M047_DM + ". CEAF/Farmácia de Minas: LADA pode pedir análogo com peptídeo C e ao menos 1 marcador (anti-ICA ou anti-IAA) além dos critérios do PCDT DM1."
  },
  divergencia: "Rastreio: o consenso internacional (Buzzetti 2020) propõe anti-GAD em todo DM2 recém-diagnosticado (ou nos com pistas clínicas, se houver restrição de custo); a SBD (R1, IIa B) manda diferenciar pela clínica e testar só na dúvida. Marcador: o consenso e a SBD preferem anti-GAD; o PCDT DM1 2019 e a Farmácia de Minas pedem ICA ou IAA – e o IAA perde valor depois de iniciada a insulina. Insulina: a revisão de Lundholm & Zhou (2025) começa pelos antidiabéticos do DM2 e adia a insulina até o peptídeo C cair; o editorial de Hoogwerf (2025) defende insulina desde o diagnóstico; o consenso de 2020 deixa em aberto. No SUS de Betim, com só metformina e glibenclamida como orais, a insulina precoce é a saída prática [I].",
  evid: {
    resumo: "LADA corresponde a 2–12% dos adultos com diabetes (Buzzetti 2020) e a 4–14% dos diagnosticados como DM2 (Lundholm 2025). Anti-GAD é o marcador mais sensível (~90%). Não há ECR grandes: o consenso internacional usa o peptídeo C para escolher o tratamento (< 0,3 nmol/L insulina como DM1; 0,3–0,7 zona cinzenta; > 0,7 algoritmo do DM2 modificado) e não recomenda sulfonilureia (ECR japonês com glibenclamida × insulina: queda mais rápida do peptídeo C). iDPP-4 e aGLP-1 têm dados pequenos favoráveis; iSGLT2 aumentam o risco de cetoacidose, sobretudo com IMC ≤ 27 e sem insulina. A vantagem inicial em complicações microvasculares em relação ao DM2 some em cerca de 10 anos.",
    certeza: "Baixa a muito baixa (consenso de especialistas; ECR pequenos e análises post hoc; Cochrane citada pelo consenso aponta falta de ensaios de boa qualidade). Critérios de acesso: normativos (PCDT DM1; Farmácia de Minas).",
    fontes: ["buzzetti2020", "lundholm2025_lada", "hoogwerf2025_lada", "sbd_classif2023", "pcdt_dm1_2019", "ceaf_mg_dm1_2025", "ada_easd_dm1_2026", "pcdt_dm2", "betim_memo047_2026", "rename", "remume"]
  },
  mudancas: ["Item novo (v79, 30/10/2026): LADA – suspeita (Fourlanos/consenso), anticorpos e peptídeo C com o que a UBS de Betim autoriza (Memo 047/2026), tratamento pela faixa do peptídeo C com conversor ng/mL → nmol/L, fármacos a usar e evitar, Ideal × SUS, CEAF e divergências."],
  nv: [
    "Anti-GAD em Betim: fora da tabela do Memo 047/2026 – laboratório, prazo e aceitação pela DIREG.",
    "Método e ponto de corte do ICA e do anti-GAD do laboratório contratado (ensaios semiquantitativos; não usar o título para decidir o tratamento).",
    "Unidade do peptídeo C no laudo do laboratório de Betim (ng/mL × nmol/L × pmol/L).",
    "Se a dapagliflozina da Farmácia Popular pode ser dispensada a quem tem LADA (o critério fala em DM2): não usar sem insulina [I].",
    "Ajuste renal da sitagliptina: conferir na bula vigente."
  ],
  guia: {
    urg: "Adulto com 'DM2' que **emagrece, tem cetose ou vômitos**, ou glicemia subindo rápido apesar dos orais: falta de insulina – **iniciar insulina**; com sinais de CAD → **urgência** [F/I].",
    resumo: "**LADA** = adulto com diabetes, **anticorpo positivo** (anti-GAD na maioria) e **sem necessidade de insulina por ≥ 6 meses** (SBD; consenso 2020). Suspeite no 'DM2' **magro, < 50 anos, com autoimunidade ou que falha rápido**. Quem decide o tratamento é o **peptídeo C**: < 0,3 nmol/L → insulina como DM1; 0,3–0,7 → DM2 modificado + considerar insulina; > 0,7 → DM2 modificado. **Sem sulfonilureia**; iSGLT2 com cautela. Em Betim a UBS autoriza **peptídeo C, ICA e IAA**; o anti-GAD vai à DIREG.",
    secoes: [
      {t: "Quando suspeitar", b: [
        {tab: {h: ["Pista", "Fonte"], r: [
          ["Idade < 50 anos ao diagnóstico", "Fourlanos (SBD); Lundholm 2025 [F]"],
          ["IMC < 25 (consenso: < 27; Sia: < 23 o melhor preditor)", "SBD; Buzzetti 2020 [F]"],
          ["Sintomas agudos ao diagnóstico (sede, poliúria, perda de peso)", "Fourlanos (SBD) [F]"],
          ["Autoimunidade pessoal (tireoide, vitiligo, celíaca, anemia perniciosa)", "Fourlanos (SBD) [F]"],
          ["Autoimunidade ou DM1 na família", "Fourlanos (SBD) [F]"],
          ["Mau controle/piora rápida com orais, menos síndrome metabólica", "Buzzetti 2020; Lundholm 2025 [F]"]
        ]}, nota: "Critérios de Fourlanos: ≥ 2 de 5 (idade < 50, sintomas agudos, IMC < 25, autoimunidade pessoal, autoimunidade familiar) → sensibilidade 90%, especificidade 71% para LADA (SBD) [F]."},
        {ul: [
          "**Critérios de LADA:** início no adulto (em geral > 30 anos), autoanticorpo positivo e ausência de necessidade de insulina por ≥ 6 meses – nenhum é categórico (SBD R4, I C; Buzzetti 2020) [F].",
          "Frequência: 2–12% dos adultos com diabetes; 4–14% dos 'DM2' [F]."
        ]},
        {ref: ["sbd_classif2023", "buzzetti2020", "lundholm2025_lada"]}
      ]},
      {t: "Confirmar: anticorpos e peptídeo C", b: [
        {fluxo: [
          {t: "Adulto com 'DM2' e ≥ 1 pista (ou ≥ 2 critérios de Fourlanos)"},
          {t: "Ainda sem insulina? Pedir ICA + IAA + peptídeo C com glicemia (UBS autoriza – Memo 047/2026)", k: "q"},
          {t: "Algum anticorpo positivo?", ramos: [
            {r: "Sim", n: [{t: "Autoimune: LADA (se ≥ 6 meses sem insulina) ou DM1 do adulto. Tratar pela faixa do peptídeo C", k: "ok"}]},
            {r: "Não, mas a suspeita é forte", n: [{t: "Anti-GAD (guia com justificativa à DIREG) e/ou IA-2/ZnT8; peptídeo C decide enquanto isso", k: "warn"}]},
            {r: "Não e pistas fracas", n: [{t: "Provável DM2; pensar em MODY (< 25 anos, 3 gerações) ou diabetes pancreático", k: "ok"}]}
          ]}
        ], nota: "Ordem dos anticorpos: anti-GAD é o mais sensível (ADA/EASD 2026, Buzzetti) [F]; o fluxo começa pelos que a UBS autoriza em Betim e que o PCDT/CEAF aceitam (ICA, IAA) [I]. IAA só vale antes da insulina (SBD) [F]. Repetir anti-GAD negativo não é recomendado; com suspeita alta, testar outros anticorpos (Lundholm 2025) [F]."},
        {ul: [
          "**Peptídeo C:** jejum, ao acaso ou pós-prandial, sempre com **glicemia de 80–180 mg/dL** na mesma amostra (Buzzetti) [F]; a SBD aceita glicemia > 100 e sem hipoglicemia [F]. Converter: 1 ng/mL ≈ 0,33 nmol/L [C] (campo de cálculo nas abas Prescrição e Paciente).",
          "**Títulos de anti-GAD** não servem para escolher o tratamento (ensaios semiquantitativos, variação entre laboratórios) [F]."
        ]},
        {ref: ["buzzetti2020", "lundholm2025_lada", "sbd_classif2023", "betim_memo047_2026", "pcdt_dm1_2019"]}
      ]},
      {t: "Tratar pela faixa do peptídeo C", b: [
        {tab: {h: ["Peptídeo C", "Conduta (Buzzetti 2020)", "Repetir peptídeo C (Lundholm 2025)"], r: [
          ["< 0,3 nmol/L (< ~0,9 ng/mL)", "**Múltiplas doses de insulina**, como DM1 (basal-bolus) [F]", "Não precisa [F]"],
          ["0,3–0,7 nmol/L (~0,9–2,1 ng/mL)", "**Zona cinzenta:** algoritmo do DM2 modificado; considerar insulina com outros fármacos [F]", "A cada 6 meses [F]"],
          ["> 0,7 nmol/L (> ~2,1 ng/mL)", "Algoritmo do DM2 modificado, monitorando a progressão [F]", "Anual, ou antes se piorar [F]"]
        ]}, nota: "Equivalências em ng/mL calculadas (×0,331) [C]. Falha do tratamento em qualquer faixa → repetir o peptídeo C (Buzzetti) [F]."},
        {tab: {h: ["Fármaco", "No LADA", "SUS Betim"], r: [
          ["Metformina", "Pode usar; sem efeito sobre a célula beta [F]", "REMUME [F]"],
          ["Sulfonilureia (glibenclamida, gliclazida)", "**Não recomendada** – pode acelerar a queda do peptídeo C [F]", "Glibenclamida na REMUME – evitar [F/I]"],
          ["Insulina", "Eficaz e segura em qualquer faixa; obrigatória se < 0,3 [F]", "NPH e regular; análogos pelo CEAF [F]"],
          ["iDPP-4", "Boa segurança; possível preservação do peptídeo C (ECR pequenos) [F]", "Compra [F]"],
          ["aGLP-1", "Melhora o controle, salvo peptídeo C muito baixo (≤ 0,25 nmol/L); benefício cardiorrenal [F]", "Compra [F]"],
          ["iSGLT2", "Sem estudos no LADA; **risco de CAD**, sobretudo IMC ≤ 27 e sem insulina – orientar cetonas e suspender antes de cirurgia/doença aguda [F]", "Farmácia Popular só DM2 + DCV ≥ 65 anos [F]"],
          ["Pioglitazona", "Dados pequenos; edema, fratura, ganho de peso; evitar na IC [F]", "Não consta [C]"]
        ]}, nota: "Buzzetti 2020; Lundholm 2025 [F]. Mudanças de estilo de vida como no DM2 (peso, atividade física, parar de fumar) [F]."},
        {trio: {ideal: "Peptídeo C guiando: metformina + iDPP-4/aGLP-1 com reserva preservada; insulina cedo na zona cinzenta; análogos basal-bolus se < 0,3.", sus: "Metformina e insulina humana; a outra opção oral do SUS (glibenclamida) é justamente a que deve ser evitada.", ponte: "Na prática do SUS: metformina + **NPH precoce** quando a HbA1c não está na meta, sem glibenclamida; iDPP-4 como compra opcional; CEAF se precisar de análogo."}},
        {ref: ["buzzetti2020", "lundholm2025_lada", "hoogwerf2025_lada", "pcdt_dm2", "remume"]}
      ]},
      {t: "Seguimento", b: [
        {ul: [
          "**HbA1c** a cada 3 meses; meta < 7% na maioria, < 6,5% em jovens com longa expectativa de vida, < 8% em idosos ou com risco de hipoglicemia (Lundholm 2025) [F] – no SUS, metas do PCDT DM2/DM1 [F].",
          "**Tireoide:** TSH + anti-TPO de rotina (anti-GAD prediz autoimunidade tireoidiana) [F]. **Celíaca** (anti-tTG IgA) e **B12** conforme sintomas; FAN e fator reumatoide sem indicação específica não [F].",
          "**Complicações:** rastrear como em todo diabetes desde o diagnóstico; a vantagem microvascular inicial em relação ao DM2 some em ~10 anos; risco cardiovascular igual ao do DM2 após ajuste [F].",
          "**Educar para a progressão:** perda de peso, poliúria e polidipsia = falta de insulina; plano de dias de doença quando estiver em insulina (item DM1) [F/I]."
        ]},
        {ref: ["lundholm2025_lada", "buzzetti2020", "sbd_autoimunes2023"]}
      ]},
      {t: "CEAF para LADA", b: [
        {ul: [
          "O PCDT DM1 inclui a suspeita de LADA: **peptídeo C + ao menos 1 marcador (ICA ou IAA)** [F]. A Farmácia de Minas pede esses dois exames (o último) na abertura, além de todos os critérios do DM1 (hipoglicemias ou mau controle, ≥ 3 meses de NPH/regular, AMG ≥ 3×/dia) [F].",
          "Os dois exames a UBS de Betim autoriza (Memo 047/2026) [F]. Peça o IAA **antes** de iniciar a insulina [F].",
          "Documentos e renovação semestral: ver item DM1, seção CEAF [F]."
        ]},
        {ref: ["pcdt_dm1_2019", "ceaf_mg_dm1_2025", "betim_memo047_2026"]}
      ]},
      {t: "Ver também", b: [{ir: [["cr-dm1", "DM1"], ["cr-dm2", "DM2"], ["cr-dm2-insulina", "Insulinização"], ["cr-glp1", "GLP-1"], ["hiperglicemia", "Hiperglicemia / CAD"], ["cr-exames-ubs", "Exames pela UBS"], ["cr-hipotireoidismo", "Hipotireoidismo"], ["cr-b12", "Vitamina B12"]]}]}
    ]
  }
});

// ── Ligações dos itens de diabetes já existentes com DM1 e LADA
(() => {
  const get = id => CONDICOES.find(x => x.id === id);
  const MUD = "v79 (30/10/2026): ligação com os itens novos DM1 e LADA.";
  const liga = (id, pares) => {
    const c = get(id); if (!c || !c.guia) throw new Error("v79: item ausente ou sem guia: " + id);
    let v = c.guia.secoes.find(s => s.t === "Ver também");
    if (!v){ v = {t: "Ver também", b: [{ir: []}]}; c.guia.secoes.push(v); }
    let b = v.b.find(x => x.ir); if (!b){ b = {ir: []}; v.b.push(b); }
    for (const p of pares) if (!b.ir.some(x => x[0] === p[0])) b.ir.unshift(p);
    c.mudancas = [...(c.mudancas || []), MUD];
  };
  liga("cr-dm2", [["cr-lada", "LADA"], ["cr-dm1", "DM1"]]);
  liga("cr-dm2-insulina", [["cr-lada", "LADA"], ["cr-dm1", "DM1"]]);
  liga("cr-glargina", [["cr-dm1", "DM1"]]);
  liga("hipoglicemia", [["cr-dm1", "DM1"]]);
  liga("hiperglicemia", [["cr-lada", "LADA"], ["cr-dm1", "DM1"]]);
  liga("cr-glp1", [["cr-lada", "LADA"]]);

  // tabela "Que diabetes é este?" do item hiperglicemia: apontar para os itens novos
  const h = get("hiperglicemia");
  const sec = h.guia.secoes.find(s => s.t === "Que diabetes é este?");
  const tb = sec && sec.b.find(b => b.tab);
  const row = tb && tb.tab.r.find(r => r[0] === "DM1 ou LADA");
  if (!row) throw new Error("v79: linha 'DM1 ou LADA' não encontrada em hiperglicemia");
  row[2] = "Insulina (sem sulfonilureia); anticorpos (ICA/IAA antes da insulina) + peptídeo C pela UBS; criança ou cetose → urgência; ver itens DM1 e LADA [F]";

  // encaminhamento do DM2: a suspeita de DM1/LADA agora tem conduta própria
  const d = get("cr-dm2");
  if (!/Suspeita de DM1\/LADA/.test(d.encaminhar)) throw new Error("v79: encaminhar de cr-dm2 mudou");
  d.encaminhar = d.encaminhar.replace(/Suspeita de DM1\/LADA \(magro, perda de peso, falha rápida dos orais\) → endocrinologia\./, "Suspeita de DM1/LADA (magro, perda de peso, falha rápida dos orais) → insulina, anticorpos e peptídeo C pela UBS e endocrinologia (itens DM1 e LADA).");
})();

// ── Hipoglicemia: corte de peso do glucagon pela bula do GlucaGen HypoKit (o item citava a bula antiga da Lilly, com corte de 20 kg;
// a bula atual do GlucaGen usa 25 kg ou 6–8 anos, como já estava em data3.js). Conferido em 01/11/2026.
(() => {
  const c = CONDICOES.find(x => x.id === "hipoglicemia"); if (!c) throw new Error("v79: hipoglicemia ausente");
  let n = 0;
  const troca = o => {
    for (const k of Object.keys(o)) {
      const v = o[k];
      if (typeof v === "string") {
        const w = v
          .replace(/0,5 mg se < 20 kg; 1 mg se > 20 kg \[F\]/g, "0,5 mg se < 25 kg (ou < 6–8 anos); 1 mg se ≥ 25 kg [F: bula do GlucaGen HypoKit]")
          .replace(/0,5 mg se < 20 kg; 1 mg se > 20 kg \(se houver\)/g, "0,5 mg se < 25 kg (ou < 6–8 anos); 1 mg se ≥ 25 kg (se houver)")
          .replace(/Bula do glucagon \(registro antigo\) \[F\]: 1 mg se > 20 kg; 0,5 mg se < 20 kg; sem resposta em 15 min, glicose IV\. Não consta na RENAME nem na REMUME – compra\. Conferir a bula vigente\./g,
            "Bula do GlucaGen HypoKit (Novo Nordisk) [F]: 1 mg se ≥ 25 kg (ou > 6–8 anos); 0,5 mg se < 25 kg; SC ou IM; sem resposta em 10 min, procurar assistência (SAMU 192) e glicose IV. Não consta na RENAME nem na REMUME – compra.");
        if (w !== v) { o[k] = w; n++; }
      } else if (v && typeof v === "object") troca(v);
    }
  };
  troca(c);
  if (n < 2) throw new Error("v79: textos do glucagon em hipoglicemia não encontrados (" + n + ")");
  c.evid = c.evid || {}; c.evid.fontes = [...(c.evid.fontes || []), "glucagen_bula"];
  c.mudancas = [...(c.mudancas || []), "v79 (01/11/2026): corte de peso do glucagon pela bula do GlucaGen HypoKit (0,5 mg se < 25 kg ou < 6–8 anos; antes 20 kg, da bula antiga da Lilly)."];
})();
