// ───────────── data65.js – v52: Guia Clínico nos itens da Demanda espontânea – lote 2 (infecciosas e vigilância, 13 itens sem guia).
// Mesmo padrão do lote 1 (data64.js). Conferido em 25/10/2026 na base clínica do Drive: Guia de Vigilância em Saúde 6ª ed. rev. 2024
// (vol. 1: coqueluche, sarampo; vol. 2: HIV, hepatites, tuberculose, arboviroses, malária; vol. 3: leptospirose, raiva, acidentes por
// animais peçonhentos), NT 8/2022 (raiva), NT Conjunta 165/2025 (coqueluche), NT Conjunta 324/2026 (sarampo), Guia prático de arboviroses
// urbanas (MS 2024), PCDT HIV adultos 2024 (módulo 1), PCDT PEP 2023 (resumido), PCDT Acidentes escorpiônicos 2025 (resumido), Manual de TB 2019;
// e na Portaria GM/MS nº 11.211, de 13/05/2026 (lista nacional de notificação compulsória vigente; DOU de 14/05/2026, cópia de secretaria estadual).
Object.assign(FONTES, {
  port11211: {s: "Portaria GM/MS 11.211/2026 – lista de notificação compulsória", t: "Ministério da Saúde. Portaria GM/MS nº 11.211, de 13/05/2026 (DOU 14/05/2026), que altera o Anexo 1 do Anexo V da Portaria de Consolidação nº 4/2017: inclui caxumba (notificação imediata, art. 2º) e febre do oropouche; retira a covid-19 como item próprio. Tabela do anexo – imediata (até 24 h) à SMS: acidente por animal peçonhento, acidente por animal potencialmente transmissor da raiva, leptospirose, violência sexual e tentativa de suicídio; imediata à SES e à SMS: coqueluche, Zika em gestante; imediata ao MS, à SES e à SMS: sarampo, raiva humana, malária na região extra-amazônica, óbito suspeito por dengue, chikungunya ou Zika, chikungunya em área sem transmissão, febre amarela, febre maculosa; semanal: dengue, chikungunya e Zika (casos), hepatites virais, HIV/aids, tuberculose, violência doméstica (norma; cópia do DOU publicada por secretaria estadual, conferida em 25/10/2026).", f: "F", url: "https://www.in.gov.br/"},
  gvs1_coq: {s: "GVS 6ª ed. (2024) vol. 1 – coqueluche", t: "Ministério da Saúde. Guia de Vigilância em Saúde, 6ª ed. rev., 2024, vol. 1 – Coqueluche: fases catarral (1–2 semanas), paroxística (2–6 semanas, 5–10 tossidas numa expiração, guincho, vômito, cianose, apneia) e convalescença (2–6 semanas, até 3 meses); formas atípicas em vacinados há > 5 anos e adultos; caso suspeito < 6 meses = tosse ≥ 10 dias + paroxismo, guincho, vômito pós-tosse, cianose, apneia ou engasgo; ≥ 6 meses = tosse ≥ 14 dias + paroxismo, guincho ou vômito pós-tosse; ou tosse com contato de caso confirmado; cultura/PCR de nasofaringe antes ou até 3 dias do antibiótico; leucocitose com linfocitose; diferencial com B. parapertussis, Mycoplasma, Chlamydia, adenovírus (manual MS).", f: "F", url: "https://bvsms.saude.gov.br/bvs/publicacoes/guia_vigilancia_saude_6edrev_v1.pdf"},
  gvs1_sarampo: {s: "GVS 6ª ed. (2024) vol. 1 – sarampo", t: "Ministério da Saúde. Guia de Vigilância em Saúde, 6ª ed. rev., 2024, vol. 1 – Sarampo: caso suspeito = febre + exantema maculopapular morbiliforme de direção cefalocaudal + tosse e/ou coriza e/ou conjuntivite, independentemente da idade e da vacinação; transmissão de 6 dias antes até 4 dias após o exantema; manchas de Koplik antes do exantema; complicações (otite, diarreia, pneumonia, laringotraqueobronquite; encefalite 1–4/1.000) mais frequentes < 5 anos, gestantes, imunossuprimidos, > 20 anos e desnutridos; febre > 3 dias após o exantema = alerta; sorologia IgM até 30 dias do exantema; sangue, swab naso/orofaríngeo e urina no 1º atendimento; diferencial com rubéola, exantema súbito, dengue, parvovírus B19, chikungunya, Zika, enteroviroses e riquetsioses (manual MS).", f: "F", url: "https://bvsms.saude.gov.br/bvs/publicacoes/guia_vigilancia_saude_6edrev_v1.pdf"},
  nt324_sarampo: {s: "NT Conjunta 324/2026 – sarampo", t: "Ministério da Saúde. Nota Técnica Conjunta nº 324/2026-SVSA/MS: notificação imediata (até 24 h) de todo caso suspeito, sem aguardar confirmação; precaução por aerossóis desde o 1º contato; coleta oportuna; vitamina A para crianças com suspeita; isolamento domiciliar; bloqueio vacinal oportuno; 15 casos confirmados no Brasil até a SE 28/2026 em 4 surtos (norma; cópia na base clínica).", f: "F", url: ""},
  gvs2_arbo: {s: "GVS 6ª ed. (2024) vol. 2 – dengue, chikungunya e Zika", t: "Ministério da Saúde. Guia de Vigilância em Saúde, 6ª ed. rev., 2024, vol. 2, cap. 7: chikungunya – caso suspeito = febre > 38,5 °C de início súbito + artralgia ou artrite intensa aguda, com residência ou visita a área de transmissão até 2 semanas antes; fase aguda de 5 a 14 dias, pós-aguda até 3 meses, crônica > 3 meses (artralgia crônica em > 50%); Zika – caso suspeito = exantema maculopapular pruriginoso + febre (≤ 38,5 °C), hiperemia conjuntival não purulenta, artralgia ou edema periarticular; descarte em gestantes, crianças, idosos e graves só com 2 sorologias não reagentes ou PRNT (manual MS).", f: "F", url: "https://bvsms.saude.gov.br/bvs/publicacoes/guia_vigilancia_saude_v2_6edrev.pdf"},
  ms_arbo_aps2024: {s: "MS 2024 – Guia prático de arboviroses urbanas (APS)", t: "Ministério da Saúde. Guia prático de arboviroses urbanas – Atenção Primária à Saúde, 2024 (cópia na base clínica): Quadro 13 – diferencial entre dengue, Zika, chikungunya, oropouche, febre amarela e covid-19 (febre, artralgia, edema articular, exantema – Zika 1º–2º dia, chikungunya 2º–5º, dengue 3º–6º –, conjuntivite 50–90% na Zika, dor retro-orbital); chikungunya: poliartralgia em > 90%, simétrica, pequenas e grandes articulações, com edema e tenossinovite; exantema também palmoplantar; transmissão vertical intraparto ~49%, RN de mãe virêmica internado até 7 dias; AINE e corticoide proibidos na fase aguda; IgM a partir do 6º dia (manual MS).", f: "F", url: ""},
  gvs2_hiv: {s: "GVS 6ª ed. (2024) vol. 2 – HIV e hepatites virais", t: "Ministério da Saúde. Guia de Vigilância em Saúde, 6ª ed. rev., 2024, vol. 2, cap. 4: HIV – janela imunológica média de 30 dias (maior em uso de PEP/PrEP); fluxograma com 2 testes (o 1º mais sensível, o 2º mais específico); não reagente com suspeita → nova amostra em 30 dias; coletar CV e CD4 antes da TARV, sem atrasá-la. Hepatites – HBsAg detectável 30–45 dias após a infecção, > 6 meses = crônica; Quadro 3 (HBsAg + anti-HBc total → anti-HBc IgM; HBsAg isolado → HBV-DNA); anti-HCV reagente indica contato prévio (8–12 semanas para positivar), confirmar com HCV-RNA (manual MS).", f: "F", url: "https://bvsms.saude.gov.br/bvs/publicacoes/guia_vigilancia_saude_v2_6edrev.pdf"},
  pcdt_hiv2024: {s: "PCDT HIV em adultos 2024 – módulo 1 (tratamento)", t: "Ministério da Saúde. PCDT para Manejo da Infecção pelo HIV em Adultos – Módulo 1: Tratamento, 2024 (cópia na base clínica): TARV no mesmo dia ou em até 7 dias após o diagnóstico, mesmo antes de CD4 e carga viral; esquema preferencial tenofovir/lamivudina + dolutegravir; tenofovir contraindicado com doença renal prévia, lesão renal aguda ou TFGe < 60 mL/min (substituir por abacavir com HLA-B*5701 negativo ou zidovudina); TB-HIV: TARV em até 7 dias se CD4 ≤ 50, e em 4–6 semanas na meningite tuberculosa (norma).", f: "F", url: ""},
  pcdt_pep2023: {s: "PCDT PEP 2023 (resumido)", t: "Ministério da Saúde. PCDT de Profilaxia Pós-Exposição de risco à infecção pelo HIV, IST e hepatites virais, versão resumida 2023 (cópia na base clínica): 4 perguntas (material de risco; exposição percutânea, mucosa ou pele não íntegra; até 72 h; exposto não reagente) → PEP por 28 dias com TDF/3TC + DTG; fonte com TR não reagente: PEP só se exposição de risco da fonte nos últimos 30 dias; repetir HIV 30 dias após a exposição; profilaxia de IST só na violência sexual – penicilina benzatina 2,4 milhões UI IM dose única, ceftriaxona 500 mg IM + azitromicina 1 g VO dose única, metronidazol 2 g VO dose única (adiar se contracepção de emergência ou ARV; não no 1º trimestre); hepatite B: vacinar suscetíveis; IGHAHB + vacina na violência sexual ou exposição a hepatite B aguda (norma).", f: "F", url: ""},
  ms_tb2019: {s: "MS – Manual de recomendações para o controle da TB (2019)", t: "Ministério da Saúde. Manual de Recomendações para o Controle da Tuberculose no Brasil, 2ª ed. atualizada, 2019 (cópia na base clínica): Quadro de busca de sintomáticos respiratórios – população geral na busca ativa do território: tosse ≥ 3 semanas; população geral que procura o serviço de saúde: tosse ≥ 2 semanas; contatos de TB pulmonar, PVHIV, privados de liberdade, pessoas em situação de rua, instituições, indígenas, profissionais de saúde e imigrantes: tosse de qualquer duração (manual MS).", f: "F", url: ""},
  gvs3_lepto: {s: "GVS 6ª ed. (2024) vol. 3 – leptospirose", t: "Ministério da Saúde. Guia de Vigilância em Saúde, 6ª ed. rev., 2024, vol. 3 – Leptospirose: fase precoce (85–90%, febre, cefaleia, mialgia, sufusão conjuntival em ~30%, dor em panturrilhas) e fase tardia (~15%, síndrome de Weil – icterícia rubínica, insuficiência renal não oligúrica com hipocalemia, hemorragia; hemorragia pulmonar com letalidade > 50%); Figura 1: sinais de alerta (dispneia/tosse/taquipneia, oligúria, hemorragia incluindo escarro hemoptoico, hipotensão, alteração de consciência, vômitos frequentes, arritmia, icterícia) → hospital; sem alerta → leucograma de urgência e tratamento ambulatorial com doxiciclina 100 mg 12/12 h ou amoxicilina 500 mg 8/8 h (criança 50 mg/kg/dia) por 5–7 dias, retorno em 24–72 h; antibiótico desde a suspeita; ELISA-IgM a partir do 7º dia; diferencial com dengue, influenza, malária, riquetsioses, hepatites, hantavirose, febre amarela (manual MS).", f: "F", url: ""},
  gvs3_raiva: {s: "GVS 6ª ed. (2024) vol. 3 – raiva", t: "Ministério da Saúde. Guia de Vigilância em Saúde, 6ª ed. rev., 2024, vol. 3 – Raiva: lavar com água e sabão; antisséptico (PVP-I, clorexidina) só no 1º atendimento; não suturar (se necessário, pontos isolados e soro infiltrado 1 h antes); acidente leve (superficial em tronco ou membros, exceto mãos e pés; lambedura de lesão superficial) × grave (mucosas, cabeça, mãos, pés; múltiplo, extenso ou profundo; lambedura de lesão profunda ou mucosa; mamífero silvestre); contato indireto não é acidente de risco; Quadro 2 e Figura 3 – cão/gato observável sem sinais: observar 10 dias sem profilaxia; não observável ou com sinais e animais de produção: leve → vacina 0-3-7-14, grave → vacina + soro; silvestres: vacina + soro; morcego: vacina + soro em qualquer exposição, inclusive contato indireto; SAR 40 UI/kg ou IGHAR 20 UI/kg infiltrados no dia 0 ou até 7 dias após a 1ª dose; faltoso não reinicia (manual MS).", f: "F", url: ""},
  gvs3_pecon: {s: "GVS 6ª ed. (2024) vol. 3 – acidentes por animais peçonhentos", t: "Ministério da Saúde. Guia de Vigilância em Saúde, 6ª ed. rev., 2024, vol. 3, cap. 11 – Ofidismo: botrópico (dor, edema, equimose, bolhas, sangramentos; necrose, síndrome compartimental, IRA), laquético (+ manifestações vagais), crotálico (pouco local; fácies miastênica, ptose, turvação visual, mialgia, urina escura; IRA nas primeiras 48 h), elapídico (paralisia, risco respiratório); tempo de coagulação para diagnóstico e controle; Quadro 1 – ampolas: botrópico leve 2–4, moderado 4–8, grave 12; crotálico 5/10/20; elapídico 10; laquético 10/20; não fazer torniquete, cortar, sugar ou aplicar substâncias. Escorpionismo: Tityus serrulatus (amarelo); crianças até 9 anos (sobretudo < 7) com maior risco; leve = dor e parestesia local (sem soro); moderado e grave com soro (GVS: 2–3 ampolas no moderado) (manual MS).", f: "F", url: ""},
  gvs2_malaria: {s: "GVS 6ª ed. (2024) vol. 2 – malária", t: "Ministério da Saúde. Guia de Vigilância em Saúde, 6ª ed. rev., 2024, vol. 2 – Malária: caso suspeito = residência ou deslocamento para área com possibilidade de transmissão 8 a 30 dias antes dos sintomas + febre (± cefaleia, calafrios, sudorese, cansaço, mialgia); casos após 30 dias são possíveis; Quadro 1 – malária grave (dor abdominal intensa, icterícia, palidez intensa, diurese < 400 mL/24 h, vômitos persistentes, sangramento, dispneia, cianose, taquicardia, convulsão ou desorientação, prostração em crianças, comorbidade descompensada); notificação imediata (24 h) na região extra-amazônica; primaquina contraindicada em gestantes, puérperas até 1 mês e < 6 meses (manual MS).", f: "F", url: ""},
  wm_inf: {s: "Wikimedia Commons – fotos de infecciosas e peçonhentos", t: "Fotos da Wikimedia Commons sob licenças livres (CC BY, CC BY-SA) ou domínio público (CDC/PHIL), redimensionadas para o app; autor e licença na legenda de cada figura (acervo de imagens).", f: "F", url: "https://commons.wikimedia.org/"}
});
// Fotos (Wikimedia Commons; autor e licença conferidos na página de cada arquivo em 25/10/2026; arquivos em img/inf-*.webp)
const FOTO_INF = {
  "koplik": ["Manchas de Koplik: pontos brancos na mucosa jugal, que aparecem antes do exantema do sarampo", "CDC · Wikimedia Commons · domínio público"],
  "sarampo": ["Exantema maculopapular do sarampo no 3º dia, confluente", "CDC/NCIRD · Wikimedia Commons · domínio público"],
  "escorpiao-amarelo": ["Escorpião-amarelo (Tityus serrulatus), o de maior importância médica em Minas Gerais", "Rsismoreira · Wikimedia Commons · CC BY-SA 4.0"],
  "cascavel": ["Cascavel (Crotalus durissus) fotografada em Patrocínio-MG – chocalho na ponta da cauda", "Renato Augusto Martins · Wikimedia Commons · CC BY-SA 4.0"],
  "sufusao": ["Sufusão conjuntival (hiperemia sem secreção) na leptospirose, aqui com icterícia", "Daniel Ostermayer · Wikimedia Commons · CC BY 4.0"],
  "zika": ["Exantema maculopapular da Zika no braço", "FRED · Wikimedia Commons · CC BY-SA 3.0"]
};

(() => {
  const get = id => CONDICOES.find(x => x.id === id);
  const G = (id, guia, o = {}) => {
    const c = get(id); if (!c) return;
    c.guia = guia;
    if (c.evid && o.fontes) c.evid.fontes = [...new Set([...(c.evid.fontes || []), ...o.fontes])];
    (c.mudancas = c.mudancas || []).push("v52 (25/10/2026): Guia Clínico novo – " + (o.mud || "reconhecer, critérios, diferenciais, fluxograma, notificação e fontes") + ".");
    if (o.nv) c.nv = [...(c.nv || []), ...o.nv];
  };
  // Fotos (preenchidas só se o arquivo existir na pasta img/; autor e licença conferidos na página de cada arquivo)
  const FT = (typeof FOTO_INF !== "undefined") ? FOTO_INF : {};
  const F = k => FT[k] ? {fig: {foto: true, src: "img/inf-" + k + ".webp", leg: FT[k][0], alt: FT[k][0], fonte: FT[k][1]}} : null;
  const fotos = (...ks) => ks.map(F).filter(Boolean);

  // ── 1. Raiva (mordedura animal)
  G("raiva", {
    urg: "**Morcego ou mamífero silvestre** (mesmo domiciliado): acidente sempre grave → soro (SAR ou IGHAR) + vacina nos dias 0, 3, 7 e 14 [F]. O soro vai o quanto antes – no máximo até o 7º dia após a 1ª dose da vacina; depois, é contraindicado [F].",
    resumo: "Toda agressão por mamífero é avaliada no mesmo dia: **lavar com água e sabão** reduz comprovadamente o risco [F]. A decisão depende do **animal**, da **possibilidade de observá-lo por 10 dias** e da **gravidade**. Cão ou gato observável e sem sinais de raiva: **observar 10 dias, sem profilaxia**, mesmo em acidente grave. **Morcego: vacina + soro em qualquer exposição**, inclusive contato indireto (GVS 2024) [F].",
    secoes: [
      {t: "Reconhecer", b: [
        {tab: {h: ["Tipo", "O que é"], r: [
          ["**Leve**", "Mordedura ou arranhadura superficial no tronco ou nos membros (exceto mãos e pés); lambedura de lesão superficial [F]"],
          ["**Grave**", "Mucosas, cabeça, mãos ou pés; mordedura múltipla, extensa ou profunda (mesmo puntiforme); lambedura de lesão profunda ou de mucosa; qualquer agressão por mamífero silvestre [F]"],
          ["**Contato indireto**", "Tocar ou alimentar o animal, lambedura em pele íntegra, contato com secreções em pele íntegra – não é acidente de risco, **exceto com morcego** [F]"]
        ]}},
        "**Sinais de raiva no cão ou gato:** recusa ou dificuldade para beber água, engasgos, salivação excessiva, paralisia de cabeça, pescoço ou membros, arrastar as pernas, esconder-se, inquietação ou quietude anormal [F].",
        {det: {t: "Por que 10 dias de observação", b: ["No cão e no gato, o vírus aparece na saliva só de 2 a 5 dias antes dos sinais clínicos, e o animal morre em até 5 dias depois que adoece. Se ficar vivo e saudável por 10 dias, a raiva está descartada [F]. O vírus é neurotrópico: sobe pelos nervos periféricos até o sistema nervoso central; lesões em face, mãos e áreas muito inervadas encurtam a incubação. Com sintomas, a raiva é praticamente sempre fatal – a prevenção é a única arma [C]."]}}
      ]},
      {t: "Decidir", b: [
        {tab: {h: ["Exposição", "Cão/gato observável, sem sinais", "Cão/gato não observável ou com sinais; animal de produção", "Silvestre (exceto morcego)", "Morcego"], r: [
          ["Contato indireto", "Não indicar", "Não indicar", "Não indicar", "**Vacina + soro**"],
          ["Leve", "Observar 10 dias; se morrer, sumir ou adoecer → vacina", "**Vacina** (0-3-7-14)", "**Vacina + soro**", "**Vacina + soro**"],
          ["Grave", "Observar 10 dias; se morrer, sumir ou adoecer → vacina + soro", "**Vacina + soro**", "**Vacina + soro**", "**Vacina + soro**"]
        ]}, nota: "GVS 2024, Quadro 2 e Figura 3; NT 8/2022 [F]. Animais de produção (bovinos, equinos, caprinos, ovinos, suínos) seguem a coluna do 'não observável', avaliando o tipo de contato [F]."},
        {fluxo: [
          {t: "Agressão por mamífero"},
          {t: "Lavar com água e sabão (no domicílio e de novo na unidade) + antisséptico uma vez", k: "ok"},
          {t: "Qual animal?", ramos: [
            {r: "Morcego ou silvestre", n: [{t: "Vacina + soro, qualquer exposição", k: "stop"}]},
            {r: "Cão ou gato", n: [{t: "Observável por 10 dias e sem sinais?", ramos: [
              {r: "Sim", n: [{t: "Não iniciar; observar 10 dias", k: "ok"}]},
              {r: "Não", n: [{t: "Leve → vacina; grave → vacina + soro", k: "warn"}]}
            ]}]}
          ]},
          {t: "Tétano conforme a vacinação; antibiótico se indicado; notificar", k: "ok"}
        ], nota: "Se o animal observado morrer, sumir ou adoecer, iniciar a profilaxia no mesmo dia [F]."}
      ]},
      {t: "Cuidar da ferida", b: [
        {ul: ["Antisséptico (PVP-I, clorexidina, álcool iodado) só no 1º atendimento; depois, soro fisiológico [F].", "**Não suturar.** Se for indispensável, aproximar com pontos isolados; havendo soro indicado, infiltrá-lo 1 h antes [F].", "Profilaxia do tétano conforme a situação vacinal [F].", "Antibiótico profilático em mordedura de gato, mão ou face, ferida profunda ou puntiforme, imunossupressão (amoxicilina-clavulanato na aba Prescrição) [C]."]}
      ]},
      {t: "Reexposição e faltosos", b: [
        {tab: {h: ["Situação", "Conduta"], r: [
          ["Pré-exposição completa", "Vacina nos dias 0 e 3; sem soro [F]"],
          ["PEP anterior completa há ≤ 90 dias", "Não indicar profilaxia [F]"],
          ["PEP anterior incompleta há ≤ 90 dias", "Completar as doses que faltaram [F]"],
          ["PEP anterior há > 90 dias com ≥ 2 doses", "Vacina nos dias 0 e 3 [F]"],
          ["Só 1 dose anterior (PrEP ou PEP)", "Desconsiderar e iniciar o esquema indicado [F]"],
          ["Faltou a uma dose", "Não reiniciar: aplicar no dia em que voltar e manter os intervalos [F]"]
        ]}, nota: "NT 8/2022 e GVS 2024 [F]. A unidade faz busca ativa de faltosos [F]."},
        {ul: ["**Notificação:** acidente por animal potencialmente transmissor da raiva – imediata (até 24 h) à SMS; raiva humana – imediata ao MS, à SES e à SMS (Portaria GM/MS 11.211/2026) [F].", "Ponto de aplicação do soro em Betim: [NV]."]},
        {ref: ["gvs3_raiva", "nt_raiva", "port11211", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["gvs3_raiva", "port11211"], mud: "tabela de decisão pelo animal e pela gravidade (GVS 2024), morcego com vacina + soro em qualquer exposição, cuidado da ferida, reexposição e faltosos"});

  // ── 2. Chikungunya
  G("chikungunya", {
    urg: "Na fase aguda, **até excluir dengue**, sem AINE, AAS nem corticoide [F]. Sinais de alarme de dengue, gestante perto do parto, recém-nascido, idoso com comorbidade descompensada ou dor incontrolável: avaliação prioritária.",
    resumo: "Febre alta súbita com **poliartralgia intensa e simétrica** (> 90% dos casos), muitas vezes com edema e tenossinovite [F]. Diferente da dengue, a queda da febre **não** marca piora [F]. Evolui em **fase aguda (5–14 dias), pós-aguda (até 3 meses) e crônica (> 3 meses)** – mais da metade fica com artralgia crônica [F]. Analgesia em horário fixo e escalonada; corticoide ou AINE só depois do 14º dia.",
    calcs: [],
    secoes: [
      {t: "Reconhecer", b: [
        "**Caso suspeito:** febre > 38,5 °C de início súbito + artralgia ou artrite intensa aguda, sem outra explicação, em quem mora ou esteve em área com transmissão até 2 semanas antes [F].",
        {ul: ["**Articulações:** poliarticular, simétrica (pode ser assimétrica), pequenas e grandes articulações, edema frequente com tenossinovite, dor ligamentar [F].", "**Pele (2º ao 5º dia):** exantema macular ou maculopapular, inclusive palmas, plantas e face; prurido palmoplantar; em crianças, lesões vesiculobolhosas; hiperpigmentação [F].", "**Fase crônica:** mais comum após os 45 anos, com doença articular prévia e fase aguda intensa; dor, edema, rigidez, tenossinovite, dor neuropática, fadiga, depressão [F]."]},
        {det: {t: "Fisiopatologia", b: ["Alfavírus transmitido pelo Aedes, com tropismo por fibroblastos articulares, músculo e pele. A replicação local e a resposta inflamatória (interferons, IL-6, macrófagos com vírus persistente na sinóvia) explicam a artrite aguda e a artralgia que pode durar anos [C]."]}}
      ]},
      {t: "Diferenciais", b: [
        {tab: {h: ["", "Dengue", "Zika", "Chikungunya", "Oropouche"], r: [
          ["Febre", "2–7 dias", "Ausente ou baixa, 1–2 dias", "Alta (> 38,5 °C), 2–3 dias", "Alta, 5–7 dias"],
          ["Artralgia", "Leve", "Leve a moderada", "**Moderada a intensa, frequente**", "Leve"],
          ["Edema articular", "Raro", "Frequente, leve", "**Frequente, moderado a intenso**", "Raro"],
          ["Exantema", "3º–6º dia", "1º–2º dia", "2º–5º dia", "3º–6º dia"],
          ["Conjuntivite", "Rara", "50–90%", "30%", "Ausente"]
        ]}, nota: "Guia prático de arboviroses urbanas, MS 2024, Quadro 13 [F]."},
        "Outros diferenciais: leptospirose, malária, febre maculosa, sífilis, artrite reativa ou séptica, artrite reumatoide de início agudo [F/C]."
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Febre alta súbita + poliartralgia"},
          {t: "Sinais de alarme ou gravidade de dengue?", ramos: [
            {r: "Sim", n: [{t: "Conduzir como dengue grupo C/D", k: "stop"}]},
            {r: "Não", n: [{t: "Grupo de risco? (gestante, < 2 anos, > 65, comorbidade)"}]}
          ]},
          {t: "Grupo de risco → hemograma e reavaliação próxima; gestante perto do parto → maternidade de referência", k: "warn"},
          {t: "Analgesia escalonada em horário fixo, sem AINE/corticoide; notificar; RT-PCR (24 h–5º dia) ou IgM (6º–45º dia)", k: "ok"},
          {t: "Dor > 14 dias → fase pós-aguda: prednisona ou AINE (com exames prévios); > 3 meses → crônica, reumatologia se artrite", k: "ok"}
        ], nota: "MS 2024 [F]; NT SMS Betim 11/02/2025 (exame para todo suspeito, fluxo de gestante e RN) [F]."}
      ]},
      {t: "Tratar a dor", b: [
        {tab: {h: ["Fase", "Conduta"], r: [
          ["Aguda (até ~14 dias)", "Dipirona e/ou paracetamol em horário fixo; dor intensa: + codeína (ou tramadol); compressa fria; repouso relativo; **sem AINE nem corticoide** [F]"],
          ["Pós-aguda (> 14 dias até 3 meses)", "Prednisona 0,5 mg/kg/dia (máx. 40 mg) até melhora, no máximo 3 semanas, com redução gradual; ou AINE por até 4 semanas – antes, ureia, creatinina, AST, ALT, glicemia e hemograma [F]"],
          ["Crônica (> 3 meses)", "Reumatologia se artrite persistente; fisioterapia; manejo da dor neuropática e da depressão [F/C]"]
        ]}, nota: "Doses e escalonamento na aba Prescrição (SES-MG 2025; NT Betim 2025) [F]. Codeína: receita de controle especial; contraindicada em < 12 anos e na amamentação [F]."},
        {ul: ["**Notificação:** casos – semanal; óbito suspeito ou caso em área sem transmissão – imediata (Portaria 11.211/2026) [F].", "Transmissão vertical intraparto em cerca de 49%; recém-nascido de mãe virêmica fica internado em observação por até 7 dias; o vírus não passa pelo leite [F]."]},
        {ref: ["gvs2_arbo", "ms_arbo_aps2024", "ses_chik", "betim_nt_arbo2025", "port11211", "remume"]}
      ]}
    ]
  }, {fontes: ["gvs2_arbo", "ms_arbo_aps2024", "port11211"]});

  // ── 3. Acidente escorpiônico
  G("escorpiao", {
    urg: "**Criança ≤ 10 anos** (sobretudo < 7) ou qualquer sinal sistêmico – vômitos (o principal indicador de gravidade), sudorese profusa, sialorreia, agitação ou sonolência, taquicardia, hipertensão ou hipotensão, taquidispneia: **hospital de referência para soro**, observação ≥ 24 h [F].",
    resumo: "Em Minas, o escorpião de importância é o **amarelo (Tityus serrulatus)** [F]. O adulto costuma ter só **dor local intensa e parestesia** (leve: analgesia, sem soro). A criança pode evoluir em **poucas horas** para choque e edema pulmonar. O soro é para **moderado (3 frascos) e grave (6 frascos)**, em qualquer idade (PCDT 2025) [F].",
    secoes: [
      {t: "Reconhecer", b: [
        {tab: {h: ["Gravidade", "Quadro", "Conduta (PCDT 2025)"], r: [
          ["**Leve**", "Dor e parestesia local", "Analgesia; observação de 6 a 12 h [F]"],
          ["**Moderado**", "Dor local intensa + 1 ou mais: náuseas, alguns vômitos, sudorese, sialorreia, agitação, taquipneia, taquicardia", "Soro: 3 frascos-ampolas; observação 24 h [F]"],
          ["**Grave**", "Além disso: vômitos profusos e incoercíveis, sudorese profusa, prostração, bradicardia, insuficiência cardíaca, edema pulmonar, choque, convulsão, coma", "Soro: 6 frascos-ampolas (máximo); UTI [F]"],
          ["Sem manifestações", "—", "Observar 4 h [F]"]
        ]}, nota: "O GVS 2024 indica 2–3 ampolas no moderado; o PCDT 2025, mais recente, padroniza 3 – o app segue o PCDT [F]."},
        {det: {t: "Fisiopatologia", b: ["A toxina do Tityus abre canais de sódio de nervos autonômicos e provoca descarga maciça de acetilcolina e catecolaminas: sudorese, sialorreia, vômitos, alternância de bradi/taquicardia e de hipo/hipertensão. O excesso adrenérgico causa disfunção miocárdica, choque cardiogênico e edema pulmonar – a principal causa de morte em crianças [F/C]."]}}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Picada de escorpião"},
          {t: "Criança ≤ 10 anos ou qualquer sinal sistêmico?", ramos: [
            {r: "Sim", n: [{t: "Hospital de referência com soro (SAMU); observação ≥ 24 h", k: "stop"}]},
            {r: "Não", n: [{t: "Adulto só com dor e parestesia = leve"}]}
          ]},
          {t: "Analgesia: dipirona VO (leve), IV (moderada), lidocaína sem vasoconstritor no local (intensa); compressa morna", k: "ok"},
          {t: "Observar 6–12 h; vômitos, sudorese ou agitação → reclassificar e encaminhar", k: "warn"},
          {t: "Notificar (imediata à SMS)", k: "ok"}
        ], nota: "PCDT Acidentes escorpiônicos 2025 [F]; dexametasona não é recomendada [F]."}
      ]},
      {t: "Prevenir e notificar", b: [
        {ul: ["Sacudir roupas, calçados e toalhas; afastar camas e berços da parede; vedar frestas e ralos; não acumular entulho; combater baratas (alimento do escorpião) [F].", "**Notificação:** acidente por animal peçonhento – imediata (até 24 h) à SMS (Portaria 11.211/2026) [F].", "Hospital de referência para soro na região de Betim e telefone do CIATox: [NV]."]},
        {ref: ["pcdt_escorpiao", "gvs3_pecon", "port11211", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["gvs3_pecon", "port11211"], mud: "classificação por gravidade com observação e número de frascos (PCDT 2025 × GVS 2024), fluxograma, prevenção e notificação"});

  // ── 4. HIV – teste rápido reagente
  G("hiv-diagnostico", {
    urg: "Sinais de doença avançada – emagrecimento importante, candidíase oral, febre prolongada, tosse, cefaleia ou alteração neurológica, dispneia: avaliação no **mesmo dia** e investigação de tuberculose, criptococose e pneumocistose antes da TARV.",
    resumo: "O diagnóstico na UBS se faz com **2 testes rápidos de fabricantes diferentes, ambos reagentes** [F]. TR1 reagente e TR2 não reagente: repetir o fluxograma; persistindo, amostra para laboratório [F]. **TARV no mesmo dia ou em até 7 dias**, mesmo antes de CD4 e carga viral, com **tenofovir/lamivudina + dolutegravir** (PCDT 2024) [F].",
    secoes: [
      {t: "Reconhecer", b: [
        {ul: ["**Infecção aguda (2–4 semanas após a exposição):** febre, faringite, linfonodos, exantema, mialgia, úlceras orais – parece mononucleose; o teste pode ainda ser não reagente [C].", "**Pistas na APS:** sífilis, outras IST, tuberculose, herpes-zóster em jovem, candidíase oral ou vaginal de repetição, dermatite seborreica extensa, perda de peso, diarreia crônica, plaquetopenia ou linfopenia sem explicação [C].", "**Janela imunológica:** média de 30 dias; maior em quem usou PEP ou PrEP. Não reagente com suspeita → repetir em 30 dias [F]."]},
        {det: {t: "Fisiopatologia", b: ["O HIV infecta linfócitos T CD4+, que caem progressivamente; sem tratamento, a mediana até a aids é de cerca de 8–10 anos. Com CD4 < 200 surgem pneumocistose, toxoplasmose, criptococose; com CD4 < 50, CMV e micobactérias atípicas. A TARV suprime a carga viral, recupera o CD4 e, com carga indetectável, a transmissão sexual não ocorre (I = I) [C]."]}}
      ]},
      {t: "Critérios", b: [
        {tab: {h: ["Resultado", "Conduta"], r: [
          ["TR1 não reagente", "Amostra não reagente; repetir em 30 dias se houver suspeita (janela) [F]"],
          ["TR1 e TR2 reagentes", "**Amostra reagente para HIV** – comunicar, notificar e iniciar o cuidado [F]"],
          ["TR1 reagente e TR2 não reagente", "Repetir o fluxograma; se persistir, coletar por punção venosa para o fluxo laboratorial [F]"]
        ]}, nota: "GVS 2024 e PCDT PEP 2023 (fluxo de testes rápidos) [F]; Manual Técnico de Diagnóstico do HIV (2018) [C]."}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "TR1 e TR2 reagentes"},
          {t: "Comunicar com acolhimento e sigilo; avaliar rede de apoio e risco de violência", k: "ok"},
          {t: "Sinais de TB ou de meningite (cefaleia, febre, alteração mental)?", ramos: [
            {r: "Sim", n: [{t: "Investigar antes de iniciar; TB: TARV em até 7 dias se CD4 ≤ 50; meningite tuberculosa: 4–6 semanas", k: "stop"}]},
            {r: "Não", n: [{t: "Coletar CD4, carga viral e exames basais sem atrasar a TARV"}]}
          ]},
          {t: "TARV no mesmo dia ou em até 7 dias: TDF/3TC + DTG (TFGe < 60: não usar tenofovir)", k: "ok"},
          {t: "Notificar (semanal), testar parcerias, sífilis e hepatites; seguimento com o SAE", k: "ok"}
        ], nota: "PCDT HIV adultos 2024 [F]. Onde a TARV é iniciada em Betim (UBS ou SAE): [NV]."}
      ]},
      {t: "Tratar e cuidar", b: [
        {ul: ["Esquema preferencial: tenofovir/lamivudina 300/300 mg + dolutegravir 50 mg, 1 vez ao dia [F].", "Tenofovir contraindicado com doença renal prévia, lesão renal aguda ou TFGe < 60 mL/min: abacavir (HLA-B*5701 negativo) ou zidovudina [F].", "Dolutegravir: tomar 2 h antes ou 6 h depois de antiácidos, ferro e cálcio; limitar a dose de metformina; com rifampicina, DTG 12/12 h [C].", "Gestante e pessoa que pode engravidar: TDF/3TC + DTG também é o preferencial [F].", "Exames basais: CD4, carga viral, hemograma, creatinina, transaminases, glicemia, lipídios, sífilis, hepatites A/B/C, toxoplasmose, prova para TB latente, RX de tórax [C]."]},
        {ref: ["pcdt_hiv2024", "gvs2_hiv", "pcdt_pep2023", "port11211", "rename", "betim_pn2024"]}
      ]}
    ]
  }, {fontes: ["pcdt_hiv2024", "gvs2_hiv", "port11211"]});

  // ── 5. Hepatites B e C – teste rápido reagente
  G("hepatites-tr", {
    urg: "Icterícia com sonolência ou confusão, sangramento, ascite tensa ou hemorragia digestiva: **urgência** (hepatite fulminante ou cirrose descompensada).",
    resumo: "Teste rápido reagente **não define a fase**. **Anti-HCV** indica contato prévio (ativo, curado ou tratado): confirmar com **HCV-RNA** [F]. **HBsAg** reagente indica infecção atual; **> 6 meses = crônica**; completar com anti-HBc total/IgM, HBeAg e HBV-DNA [F]. Hepatite C tem cura com antivirais de ação direta; o papel da APS é confirmar, estadiar, vacinar e encaminhar ao tratamento [C].",
    secoes: [
      {t: "Hepatite B", b: [
        {tab: {h: ["HBsAg", "Anti-HBc total", "Interpretação e conduta"], r: [
          ["+", "−", "Início de fase aguda → HBV-DNA [F]"],
          ["+", "+", "Hepatite aguda ou crônica → anti-HBc IgM (+ = aguda) [F]"],
          ["−", "+", "Provável cura → anti-HBs [F]"],
          ["−", "−", "Suscetível → vacinar (anti-HBs após esquema completo, quando indicado) [F]"]
        ]}, nota: "GVS 2024, Quadro 3 [F]. HBsAg aparece 30–45 dias após a infecção; persistindo > 6 meses, é crônica [F]."},
        {ul: ["Estadiar: ALT, AST, plaquetas, albumina, INR, bilirrubinas, USG de abdome; anti-HDV (hepatite Delta) conforme região [F/C].", "**Contatos domiciliares e parcerias:** testar e vacinar os suscetíveis [C].", "Gestante HBsAg+: linha do pré-natal (prevenção da transmissão vertical) [C]."]}
      ]},
      {t: "Hepatite C", b: [
        {ul: ["**Anti-HCV:** positiva 8–12 semanas após a infecção e fica reagente para sempre – não diferencia infecção atual de curada [F].", "**HCV-RNA detectável = infecção ativa** → tratamento. Não detectável → cura espontânea ou tratamento prévio; repetir em 3–6 meses se exposição recente [F].", "Estadiar fibrose (APRI/FIB-4, plaquetas, USG) e rastrear HIV e hepatite B [C]."]},
        {calc: "fib4"}
      ]},
      {t: "Diferenciais e armadilhas", b: [
        {tab: {h: ["Situação", "O que fazer"], r: [
          ["Transaminases altas com HBsAg e anti-HCV negativos", "Hepatite A (anti-HAV IgM), E, medicamentosa, alcoólica, esteatose, autoimune [C]"],
          ["Anti-HCV reagente em quem já tratou", "Pedir HCV-RNA: reinfecção é possível [C]"],
          ["HBsAg + com transaminases normais", "Pode ser infecção crônica de baixa replicação – HBV-DNA decide [C]"]
        ]}}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Teste rápido reagente (HBsAg ou anti-HCV)"},
          {t: "Sinais de descompensação ou insuficiência hepática?", ramos: [
            {r: "Sim", n: [{t: "Urgência", k: "stop"}]},
            {r: "Não", n: [{t: "Exame confirmatório: HCV-RNA ou painel da hepatite B"}]}
          ]},
          {t: "Estadiamento + HIV e sífilis + vacinas (hepatite A; hepatite B no HCV)", k: "ok"},
          {t: "Infecção ativa confirmada → tratamento pelo PCDT (APS capacitada ou referência)", k: "ok"},
          {t: "Notificar (semanal); testar contatos", k: "ok"}
        ], nota: "GVS 2024 [F]; Portaria 11.211/2026: hepatites virais – notificação semanal [F]. Fluxo de tratamento em Betim: [NV]."},
        {ref: ["gvs2_hiv", "pcdt_hep", "port11211", "rename"]}
      ]}
    ]
  }, {fontes: ["gvs2_hiv", "port11211"]});

  // ── 6. Tuberculose (sintomático respiratório)
  G("tb-sr", {
    urg: "Hemoptise volumosa, dispneia importante ou instabilidade: **urgência**. PVHIV, pessoa em situação de rua, privada de liberdade, indígena, contato de TB e profissional de saúde: investigar com **tosse de qualquer duração** [F].",
    resumo: "**Quem procura a UBS com tosse ≥ 2 semanas** é sintomático respiratório e deve fazer exame de escarro; o corte de **3 semanas** é para a **busca ativa no território** (Manual de TB 2019) [F]. Em Betim, o padrão é **BAAR em 2 amostras**, com TRM-TB para grupos específicos e cultura em todo caso confirmado [F]. TB sensível começa na própria APS com RHZE.",
    secoes: [
      {t: "Reconhecer", b: [
        {ul: ["Tosse persistente (seca ou produtiva), febre vespertina, sudorese noturna, emagrecimento, hemoptise, dor torácica [C].", "Em PVHIV, diabéticos, idosos e crianças o quadro é menos típico; na PVHIV, investigar também febre, emagrecimento ou sudorese noturna, mesmo sem tosse [F].", "Extrapulmonar: linfonodo cervical, pleura, meninges, ossos, rins [C]."]},
        {det: {t: "Fisiopatologia", b: ["O Mycobacterium tuberculosis é inalado em aerossóis; a maioria contém a infecção (TB latente). A doença ativa surge quando a imunidade celular falha – HIV, diabetes, desnutrição, corticoide, imunobiológicos, álcool, tabagismo. As cavidades pulmonares concentram bacilos e tornam o caso muito transmissível; após cerca de 2 semanas de tratamento efetivo, a transmissibilidade cai muito [F/C]."]}}
      ]},
      {t: "Quem investigar", b: [
        {tab: {h: ["População", "Tempo de tosse"], r: [
          ["Geral, na busca ativa do território (ACS)", "≥ 3 semanas"],
          ["Geral, que procura o serviço de saúde", "**≥ 2 semanas**"],
          ["Contatos de TB pulmonar, PVHIV, privados de liberdade, situação de rua, instituições e comunidades terapêuticas, indígenas, profissionais de saúde, imigrantes", "Qualquer duração"]
        ]}, nota: "Manual de Recomendações para o Controle da TB, MS 2019 [F]. O título antigo do item ('tosse ≥ 3 semanas') foi corrigido."}
      ]},
      {t: "Diferenciais", b: [
        {tab: {h: ["Hipótese", "O que separa"], r: [
          ["Tosse pós-viral / pós-infecciosa", "Começou com resfriado, melhora gradual, sem febre ou perda de peso [C]"],
          ["Asma, DRGE, rinossinusite (gotejamento), IECA", "Padrão de sintomas e resposta ao tratamento [C]"],
          ["Pneumonia bacteriana", "Quadro agudo, febre alta, resposta ao antibiótico [C]"],
          ["Câncer de pulmão", "Tabagista > 50 anos, hemoptise, perda de peso – RX/TC [C]"],
          ["Coqueluche", "Paroxismos, guincho, vômito pós-tosse [F]"],
          ["Micoses (paracoccidioidomicose, histoplasmose)", "Trabalhador rural, lesões orais, BAAR negativo [C]"]
        ]}}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Sintomático respiratório (tempo conforme a população)"},
          {t: "Escarro: BAAR em 2 amostras (1 no atendimento, 1 ao acordar) + RX de tórax + teste rápido de HIV + glicemia", k: "ok"},
          {t: "PVHIV, situação de rua, recidiva/abandono, pouco secretivo, BAAR negativo com suspeita ou diabetes?", ramos: [
            {r: "Sim", n: [{t: "TRM-TB (Betim)", k: "warn"}]},
            {r: "Não", n: [{t: "Seguir com BAAR"}]}
          ]},
          {t: "Confirmado: cultura com teste de sensibilidade; RHZE na APS se sensível; notificar; avaliar contatos", k: "ok"},
          {t: "Resistência à rifampicina, retratamento ou TB complexa → referência", k: "stop"}
        ], nota: "Fluxo da Vigilância de Betim 2026 [F]; Manual MS 2019 [F]."},
        {ref: ["ms_tb2019", "betim_tb2026", "tb_doseplena", "port11211", "remume"]}
      ]}
    ]
  }, {fontes: ["ms_tb2019", "port11211"], mud: "tempo de tosse por população (2 semanas para quem procura o serviço; 3 semanas na busca ativa), diferenciais e fluxograma; título corrigido"});
  { const t = get("tb-sr"); if (t){ t.nome = "Tosse ≥ 2 semanas – investigação de tuberculose"; t.tags = (t.tags || "") + " tosse 2 semanas sintomático respiratório busca ativa"; } }

  // ── 7. Coqueluche
  G("coqueluche", {
    urg: "Lactente < 6 meses, apneia, cianose, convulsão ou desidratação: **urgência/internação** [F]. Comunicar a vigilância: notificação **imediata (até 24 h) à SES e à SMS** [F].",
    resumo: "Pense em coqueluche diante de **tosse em paroxismos** (5–10 tossidas numa só expiração), **guincho**, **vômito pós-tosse** – no lactente, também **apneia, cianose e engasgo** [F]. Adolescente e adulto vacinados têm **formas atípicas**, só com tosse persistente [F]. **Azitromicina por 5 dias** para o caso e para os contatos próximos prioritários (NT 165/2025) [F].",
    secoes: [
      {t: "Reconhecer", b: [
        {tab: {h: ["Fase", "Duração", "Como é"], r: [
          ["Catarral", "1–2 semanas", "Febre baixa, coriza, tosse seca que se intensifica – fase de maior transmissão"],
          ["Paroxística", "2–6 semanas", "Afebril ou febre baixa; paroxismos, guincho, protrusão da língua, congestão facial, cianose, apneia, vômitos; pior à noite"],
          ["Convalescença", "2–6 semanas (até 3 meses)", "Tosse comum; paroxismos podem voltar com novas viroses"]
        ]}, nota: "GVS 2024, vol. 1 [F]."},
        {det: {t: "Fisiopatologia", b: ["A Bordetella pertussis adere ao epitélio ciliado de traqueia e brônquios e libera toxinas (toxina pertussis, citotoxina traqueal) que paralisam os cílios e causam inflamação; a toxina pertussis também provoca a linfocitose característica. A imunidade, natural ou vacinal, cai após 5 a 10 anos – por isso adolescentes e adultos transmitem para lactentes [F/C]."]}}
      ]},
      {t: "Critérios", b: [
        {tab: {h: ["Idade", "Caso suspeito"], r: [
          ["< 6 meses", "Tosse de qualquer tipo há ≥ 10 dias + 1 ou mais: paroxismos, guincho, vômito pós-tosse, cianose, apneia, engasgo [F]"],
          ["≥ 6 meses", "Tosse de qualquer tipo há ≥ 14 dias + 1 ou mais: paroxismos, guincho, vômito pós-tosse [F]"],
          ["Qualquer idade", "Tosse em qualquer período + contato próximo com caso confirmado por laboratório [F]"]
        ]}, nota: "GVS 2024 [F]. Com forte suspeita clínica, coletar e tratar mesmo fora da definição [F]."},
        {ul: ["Swab de nasofaringe (cultura/PCR) antes do antibiótico ou até 3 dias depois do início [F].", "Hemograma: leucocitose com linfocitose (> 10.000 linfócitos) apoia, mas a ausência não exclui – lactentes e vacinados podem não ter [F].", "RX de tórax em < 4 anos para diferencial e complicações ('coração borrado') [F]."]}
      ]},
      {t: "Diferenciais", b: [
        {ul: ["Síndrome coqueluchoide: B. parapertussis, Mycoplasma pneumoniae, Chlamydia trachomatis (lactente) e pneumoniae, adenovírus [F].", "Bronquiolite, traqueobronquite, laringite; corpo estranho; asma; tuberculose [F/C]."]}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Tosse com paroxismos, guincho, vômito pós-tosse (ou apneia/cianose no lactente)"},
          {t: "< 6 meses, apneia, cianose, convulsão ou desidratação?", ramos: [
            {r: "Sim", n: [{t: "Urgência/internação", k: "stop"}]},
            {r: "Não", n: [{t: "Swab de nasofaringe + azitromicina 5 dias (sem esperar resultado)"}]}
          ]},
          {t: "Notificar (imediata à SES e SMS); afastar por 5 dias de antibiótico (ou 21 dias da tosse sem antibiótico)", k: "warn"},
          {t: "Quimioprofilaxia dos contatos próximos prioritários em até 21 dias da exposição; monitorar todos os contatos por 21 dias", k: "ok"}
        ], nota: "NT Conjunta 165/2025 e GVS 2024 [F]."},
        {tab: {h: ["Contatos prioritários para quimioprofilaxia (NT 165/2025)"], r: [
          ["Grupo 1 – vulneráveis: < 1 ano, imunocomprometidos, doença pulmonar crônica (contatos de caso suspeito ou confirmado)"],
          ["Grupo 2 – contatos domiciliares (convivem com o caso)"],
          ["Grupo 3 – quem transmite para vulneráveis: gestantes ≥ 32 semanas não vacinadas na gestação, profissionais de saúde e de creche, cuidadores de lactentes"]
        ]}, nota: "Resumo do Quadro 2 da NT 165/2025 [F]; detalhes de cada grupo na nota [NV]."},
        {ul: ["Gestante no último mês ou puérpera com tosse ≥ 5 dias após contato: tratar a mãe e o recém-nascido [F].", "Vacinar contatos elegíveis só 15 dias depois do fim do antibiótico ou da quimioprofilaxia [F].", "**dTpa em toda gestação a partir de 20 semanas** [F]."]},
        {ref: ["nt_coqueluche", "gvs1_coq", "port11211", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["gvs1_coq", "port11211"], nv: [], mud: "fases, definição de caso por idade (GVS 2024), exames, diferenciais, fluxograma, contatos prioritários e notificação imediata à SES/SMS (Portaria 11.211/2026)"});
  { const c = get("coqueluche"); if (c && c.nv) c.nv = c.nv.filter(x => !/Prazo de notificação/.test(x)); }

  // ── 8. Leptospirose
  G("leptospirose", {
    urg: "Sinais de alerta – **dispneia, tosse ou taquipneia; oligúria; sangramento (inclusive escarro com sangue); hipotensão; alteração de consciência; vômitos frequentes; arritmia; icterícia**: hospital de referência, antibiótico IV [F]. A hemorragia pulmonar tem letalidade > 50% e pode ocorrer **sem icterícia** [F].",
    resumo: "Febre, cefaleia e mialgia (sobretudo **panturrilhas**) até **30 dias após contato com enchente, lama, esgoto ou área de risco** [F]. **Sufusão conjuntival** (~30%) é o sinal mais característico [F]. **Antibiótico já na suspeita**, sem esperar exame: doxiciclina ou amoxicilina por 5–7 dias, com leucograma e retorno em 24–72 h [F].",
    secoes: [
      {t: "Reconhecer", b: [
        {tab: {h: ["Fase", "Quadro"], r: [
          ["**Precoce (leptospirêmica)** – 85–90%", "Febre de início abrupto, cefaleia, mialgia (panturrilhas, lombar), anorexia, náuseas, vômitos; sufusão conjuntival no fim da fase; regride em 3–7 dias [F]"],
          ["**Tardia (imune)** – ~15%", "Após a 1ª semana: síndrome de Weil (icterícia rubínica + insuficiência renal + hemorragia), hemorragia pulmonar, miocardite, meningite [F]"]
        ]}},
        "A insuficiência renal da leptospirose é peculiar: **não oligúrica e com potássio baixo** no início [F].",
        {det: {t: "Fisiopatologia", b: ["A Leptospira entra por pele com lesão ou mucosas em contato com água ou lama contaminadas pela urina de roedores. Dissemina-se pelo sangue e lesa o endotélio (vasculite difusa): sangramentos, lesão tubular renal, colestase e hemorragia alveolar. A fase tardia tem forte componente imunológico [F/C]."]}}
      ]},
      {t: "Diferenciais", b: [
        {tab: {h: ["Fase", "Pensar em"], r: [
          ["Precoce", "Dengue, influenza, malária, riquetsioses (febre maculosa), Chagas aguda, toxoplasmose, febre tifoide [F]"],
          ["Tardia", "Hepatites virais agudas, hantavirose, febre amarela, malária grave, dengue grave, sepse, pielonefrite, colangite, meningites [F]"]
        ]}},
        "Dengue × leptospirose: leucopenia favorece dengue; leucocitose com neutrofilia, icterícia e creatinina alta favorecem leptospirose [F/C]."
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Febre + cefaleia + mialgia + contato com enchente, lama, esgoto ou área de risco nos 30 dias anteriores"},
          {t: "Algum sinal de alerta?", ramos: [
            {r: "Sim", n: [{t: "Hospital de referência; antibiótico IV (penicilina cristalina, ceftriaxona ou azitromicina)", k: "stop"}]},
            {r: "Não", n: [{t: "Leucograma de urgência + ficha de investigação"}]}
          ]},
          {t: "Leucograma", ramos: [
            {r: "Normal ou leucocitose", n: [{t: "Doxiciclina ou amoxicilina 5–7 dias; sorologia; retorno em 24–72 h", k: "ok"}]},
            {r: "Leucopenia", n: [{t: "Investigar outras doenças (dengue); contatar a vigilância", k: "warn"}]}
          ]}
        ], nota: "GVS 2024, Figura 1 [F]. Sorologia (ELISA-IgM) a partir do 7º dia; amostra negativa precoce não descarta – repetir [F]."}
      ]},
      {t: "Tratar e notificar", b: [
        {tab: {h: ["Fase precoce", "Adulto", "Criança"], r: [
          ["Doxiciclina", "100 mg VO 12/12 h por 5–7 dias [F]", "Não usar < 9 anos; também não em gestantes, nefropatas ou hepatopatas [F]"],
          ["Amoxicilina", "500 mg VO 8/8 h por 5–7 dias [F]", "50 mg/kg/dia VO 8/8 h por 5–7 dias [F]"]
        ]}},
        {ul: ["Sintomáticos sem AAS e sem anti-inflamatório (até afastar dengue) [C].", "**Notificação:** imediata (até 24 h) à SMS (Portaria 11.211/2026) [F].", "Exames inespecíficos: hemograma, ureia, creatinina, potássio, bilirrubinas, transaminases, CPK, EAS [F]."]},
        {ref: ["gvs3_lepto", "lepto", "port11211", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["gvs3_lepto", "port11211"]});

  // ── 9. Malária
  G("malaria", {
    urg: "Toda febre em quem esteve em área de transmissão **8 a 30 dias antes** (às vezes mais, sobretudo P. vivax) exige teste **no mesmo dia** [F]. Sinais de malária grave → urgência. Notificação **imediata (24 h)** na região extra-amazônica [F].",
    resumo: "Fora da Amazônia, a malária mata pelo **atraso no diagnóstico** – a pergunta-chave é **'viajou?'** (Amazônia Legal, África, Ásia, outros países de transmissão) [F]. Não há tratamento empírico na UBS: **gota espessa ou teste rápido no mesmo dia** na referência, que trata pela espécie [C].",
    secoes: [
      {t: "Reconhecer", b: [
        "**Caso suspeito:** quem mora ou se deslocou para área com possibilidade de transmissão nos 8 a 30 dias antes dos sintomas e tem febre, com ou sem cefaleia, calafrios, sudorese, cansaço e mialgia [F]. Casos com mais de 30 dias são possíveis [F].",
        {ul: ["Paroxismo clássico: calafrio → febre alta → sudorese intensa; o padrão em dias alternados (terçã) é inconstante no início [C].", "P. falciparum: maior risco de gravidade e morte; P. vivax: recaídas por hipnozoítos e risco de ruptura de baço [F/C]."]},
        {det: {t: "Fisiopatologia", b: ["O Plasmodium inoculado pelo Anopheles passa pelo fígado e invade hemácias, rompendo-as em ciclos – daí a febre periódica, a anemia hemolítica e a esplenomegalia. No P. falciparum, hemácias parasitadas aderem ao endotélio de pequenos vasos (cérebro, rim, pulmão, placenta), causando malária grave [C]."]}}
      ]},
      {t: "Malária grave", b: [
        {ul: ["Dor abdominal intensa (ruptura de baço, mais em P. vivax) [F].", "Icterícia; palidez intensa (avaliada fora do paroxismo) [F].", "Diurese < 400 mL em 24 h; vômitos que impedem a medicação oral [F].", "Qualquer sangramento; dispneia; cianose; taquicardia fora do acesso [F].", "Convulsão ou desorientação; prostração em crianças; comorbidade descompensada [F]."]},
        {nota: "GVS 2024, Quadro 1 [F]."}
      ]},
      {t: "Diferenciais", b: [
        {ul: ["Dengue e outras arboviroses, febre amarela (mesma área de viagem), leptospirose, febre tifoide, hepatites, riquetsioses, pneumonia, ITU, meningite [F/C].", "Em viajante da África: também febre tifoide, riquetsioses africanas, HIV agudo [C]."]}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Febre + viagem para área de transmissão (8–30 dias antes, ou mais)"},
          {t: "Algum sinal de gravidade?", ramos: [
            {r: "Sim", n: [{t: "Urgência (artesunato IV/IM no hospital)", k: "stop"}]},
            {r: "Não", n: [{t: "Gota espessa ou teste rápido no mesmo dia (referência/UPA)"}]}
          ]},
          {t: "Notificar em até 24 h (telefone + Sinan)", k: "warn"},
          {t: "Tratamento pela espécie na referência; primaquina contraindicada em gestantes, puérperas até 1 mês e < 6 meses", k: "ok"},
          {t: "Exame negativo com forte suspeita: repetir em 24–48 h", k: "warn"}
        ], nota: "GVS 2024 [F]; Portaria 11.211/2026: malária extra-amazônica – imediata ao MS, à SES e à SMS [F]. Serviço de referência em Betim/região: [NV]."},
        {ref: ["gvs2_malaria", "malaria_bh", "port11211", "rename"]}
      ]}
    ]
  }, {fontes: ["gvs2_malaria", "port11211"]});

  // ── 10. Sarampo
  G("sarampo", {
    urg: "**Notificar em até 24 h**, sem aguardar confirmação [F]. **Precaução por aerossóis já na recepção**: máscara cirúrgica no paciente, sala separada e ventilada; profissional com PFF2/N95 [F]. Dispneia, desidratação, convulsão ou alteração de consciência: urgência.",
    resumo: "**Caso suspeito:** febre + exantema maculopapular de direção cefalocaudal + **tosse, coriza ou conjuntivite**, em qualquer idade e mesmo vacinado [F]. Transmite de **6 dias antes a 4 dias depois do exantema** [F]. No 1º atendimento: **sangue, swab naso/orofaríngeo e urina**, **vitamina A** para crianças, isolamento e **bloqueio vacinal** dos contatos [F].",
    secoes: [
      {t: "Reconhecer", b: [
        {ul: ["Pródromo de 2–4 dias: febre alta (> 38,5 °C), tosse seca, coriza, conjuntivite não purulenta [F].", "**Manchas de Koplik:** pontos brancos na mucosa jugal na altura dos molares, antes do exantema [F].", "Exantema maculopapular que começa atrás das orelhas e na face e desce; escurece e descama ('furfurácea') na remissão [F].", "**Febre por mais de 3 dias após o exantema = alerta** de complicação [F]."]},
        {det: {t: "Fisiopatologia", b: ["Paramixovírus transmitido por aerossóis, um dos agentes mais contagiosos que existem. Replica no trato respiratório e em linfócitos, dissemina-se e causa imunossupressão transitória ('amnésia imunológica') que facilita otite, pneumonia e diarreia por semanas. A deficiência de vitamina A aumenta a gravidade – daí a suplementação [F/C]."]}}
      ]},
      {t: "Diferenciais e complicações", b: [
        {tab: {h: ["Hipótese", "O que separa"], r: [
          ["Rubéola", "Febre baixa, linfonodos retroauriculares e occipitais, quadro leve [F/C]"],
          ["Exantema súbito (HHV-6)", "Lactente, febre alta por 3 dias e exantema quando a febre some [C]"],
          ["Dengue, Zika, chikungunya", "Sem coriza e tosse; Zika com prurido e conjuntivite; dengue com dor retro-orbital [F]"],
          ["Eritema infeccioso (parvovírus B19)", "'Face esbofeteada', exantema rendilhado [C]"],
          ["Enteroviroses, riquetsiose, escarlatina, farmacodermia", "Contexto e exame da pele [F/C]"]
        ]}},
        "Complicações: otite, diarreia, pneumonia, laringotraqueobronquite; encefalite (1–4 por mil); mais graves em < 5 anos, gestantes, imunossuprimidos, > 20 anos e desnutridos [F]."
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Febre + exantema + tosse, coriza ou conjuntivite"},
          {t: "Máscara no paciente, sala isolada; notificar em até 24 h", k: "stop"},
          {t: "Coletar no 1º atendimento: sangue (sorologia), swab naso/orofaríngeo e urina (RT-PCR)", k: "warn"},
          {t: "Criança: vitamina A nos dias 1 e 2 (dose pela idade)", k: "ok"},
          {t: "Isolamento domiciliar até 4 dias após o exantema; bloqueio vacinal dos contatos em até 72 h", k: "ok"},
          {t: "Complicação ou grupo de risco → avaliação hospitalar", k: "warn"}
        ], nota: "GVS 2024, NT Conjunta 324/2026 e Guia SES-MG 2026 [F]."}
      ]},
      {t: "Contatos e vigilância", b: [
        {ul: ["Bloqueio vacinal seletivo idealmente em até 72 h (até 5 dias); de 6 a 11 meses, 'dose zero', que não substitui as de 12 e 15 meses [F].", "Gestante e lactente < 6 meses suscetíveis: afastar do caso; gestante não recebe a vacina [F].", "Consultório usado fica sem uso por 2 h [F].", "Notificação: imediata ao MS, à SES e à SMS (Portaria 11.211/2026) [F]; Vigilância de Betim (31) 3512-3300 e CIEVS-Minas [F]."]},
        ...fotos("koplik", "sarampo"),
        {ref: ["gvs1_sarampo", "nt324_sarampo", "nt_sarampo", "sesmg_sarampo2026", "vita_sarampo", "port11211", "wm_inf"]}
      ]}
    ]
  }, {fontes: ["gvs1_sarampo", "nt324_sarampo", "port11211"]});

  // ── 11. Zika
  G("zika", {
    urg: "**Gestante com exantema**: investigação obrigatória e notificação **imediata à SES e à SMS** [F]. Fraqueza ascendente ou formigamento (Guillain-Barré): **urgência**.",
    resumo: "**Exantema maculopapular pruriginoso** que aparece cedo (1º–2º dia), com **febre baixa ou ausente**, **conjuntivite não purulenta** (50–90%), artralgia leve e edema periarticular [F]. Manejar **como dengue até excluí-la** (sem AAS ou AINE). O foco da APS é **diferenciar** e **proteger a gestação** (síndrome congênita) [F].",
    secoes: [
      {t: "Reconhecer", b: [
        "**Caso suspeito:** exantema maculopapular pruriginoso + 1 ou mais: febre (até 38,5 °C), hiperemia conjuntival ou conjuntivite não purulenta, artralgia, edema periarticular [F].",
        {ul: ["Quadro de 3 a 7 dias, geralmente leve; muitos infectados não têm sintomas [C].", "Transmissão também sexual e vertical [F].", "Complicações neurológicas: Guillain-Barré, encefalite, mielite [F]."]},
        {det: {t: "Fisiopatologia", b: ["Flavivírus transmitido pelo Aedes, com tropismo por células progenitoras neurais: na gestação, atravessa a placenta e interrompe o desenvolvimento cerebral fetal (microcefalia, calcificações, artrogripose, alterações oculares e auditivas). A reação imune cruzada pode desencadear Guillain-Barré [C]."]}}
      ]},
      {t: "Diferenciais", b: [
        {tab: {h: ["", "Zika", "Dengue", "Chikungunya"], r: [
          ["Febre", "Ausente ou baixa, 1–2 dias", "2–7 dias", "Alta, 2–3 dias"],
          ["Exantema", "**1º–2º dia, pruriginoso**", "3º–6º dia", "2º–5º dia"],
          ["Conjuntivite", "**50–90%**", "Rara", "30%"],
          ["Artralgia", "Leve a moderada", "Leve", "Intensa"]
        ]}, nota: "MS 2024, Quadro 13 [F]. Também: sarampo e rubéola (notificação imediata), oropouche, enteroviroses, farmacodermia [F/C]."}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Exantema pruriginoso + conjuntivite ou artralgia leve"},
          {t: "Gestante?", ramos: [
            {r: "Sim", n: [{t: "Notificar (imediata à SES/SMS), RT-PCR/sorologia, USG seriada; Betim: PA do HPRB", k: "stop"}]},
            {r: "Não", n: [{t: "Manejar como dengue até excluir; sintomáticos; notificar (semanal)"}]}
          ]},
          {t: "Fraqueza que sobe pelas pernas ou formigamento → urgência", k: "stop"},
          {t: "Preservativo; RN de mãe com Zika na gestação: seguimento até pelo menos 3 anos (Betim)", k: "ok"}
        ], nota: "GVS 2024 [F]; NT SMS Betim 11/02/2025 [F]; Portaria 11.211/2026 [F]."},
        {ref: ["gvs2_arbo", "ms_arbo_aps2024", "betim_nt_arbo2025", "port11211", "remume"]}
      ]}
    ]
  }, {fontes: ["gvs2_arbo", "ms_arbo_aps2024", "port11211"]});

  // ── 12. PEP
  G("pep", {
    urg: "Começar **o mais cedo possível** (idealmente nas primeiras 2 h) e **no máximo até 72 h** [F]. Violência sexual: acolhimento, notificação imediata à SMS, contracepção de emergência e profilaxia de IST – a investigação não atrasa a PEP [F].",
    resumo: "Quatro perguntas decidem: **material de risco? exposição de risco? até 72 h? pessoa exposta com teste não reagente?** Todas sim → **PEP por 28 dias com TDF/3TC + DTG** (PCDT 2023) [F]. Fonte com teste rápido não reagente dispensa a PEP, **salvo** exposição de risco da fonte nos últimos 30 dias [F]. Repetir o teste de HIV **30 dias após a exposição** [F].",
    secoes: [
      {t: "Critérios", b: [
        {tab: {h: ["", "Com risco", "Sem risco"], r: [
          ["Material", "Sangue, sêmen, fluido vaginal [F]; líquidos de serosas, líquor, líquido amniótico e articular [C]", "Suor, lágrima, fezes, urina, vômito, saliva, secreção nasal – se não houver sangue [F/C]"],
          ["Exposição", "Percutânea, mucosas, pele não íntegra, mordedura com sangue [F]", "Pele íntegra; mordedura sem sangue [F]"],
          ["Tempo", "Até 72 h [F]", "> 72 h: sem PEP, mas seguimento e outras profilaxias [F]"]
        ]}, nota: "PCDT PEP 2023 [F]."},
        {tab: {h: ["Teste rápido", "Pessoa exposta", "Pessoa-fonte"], r: [
          ["Não reagente", "Suscetível → PEP indicada [F]", "PEP não indicada, salvo exposição de risco da fonte nos últimos 30 dias [F]"],
          ["TR1 e TR2 reagentes", "Já tem HIV → não iniciar PEP; seguir o diagnóstico [F]", "PEP indicada [F]"],
          ["Discordantes", "Repetir; se persistir, fluxo laboratorial [F]", "—"]
        ]}}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Exposição sexual, violência sexual ou acidente com material biológico"},
          {t: "Material e exposição de risco, até 72 h e exposto não reagente?", ramos: [
            {r: "Não", n: [{t: "Sem PEP; seguimento sorológico e prevenção combinada", k: "ok"}]},
            {r: "Sim", n: [{t: "TDF/3TC 300/300 mg + DTG 50 mg, 1 vez ao dia por 28 dias", k: "warn"}]}
          ]},
          {t: "Sífilis, hepatites B e C (exposto e, se possível, fonte); β-hCG", k: "ok"},
          {t: "Hepatite B: vacinar suscetível; IGHAHB + vacina na violência sexual ou exposição a hepatite B aguda", k: "ok"},
          {t: "Violência sexual: penicilina benzatina 2,4 milhões UI + ceftriaxona 500 mg + azitromicina 1 g (+ metronidazol 2 g, adiável)", k: "warn"},
          {t: "HIV de novo em 30 dias; oferecer PrEP depois se exposições repetidas", k: "ok"}
        ], nota: "PCDT PEP 2023 e PCDT IST 2022, Quadro 50 (azitromicina 1 g = 2 comprimidos de 500 mg; gestante em qualquer IG, exceto metronidazol no 1º trimestre) [F]. Profilaxia de IST só na violência sexual; na exposição consentida, investigar e seguir [F]."}
      ]},
      {t: "Cuidados", b: [
        {ul: ["TFGe < 60 ou lesão renal aguda: não usar tenofovir – AZT/3TC conforme o PCDT [F].", "Gestante: TDF/3TC + DTG também na gestação (atualização 2024) [C]; lactante exposta: suspender a amamentação temporariamente até o exame da 12ª semana [F].", "Metronidazol: não no 1º trimestre; adiar se contracepção de emergência ou ARV [F].", "Sinais de infecção aguda pelo HIV no seguimento (febre, exantema, linfonodos): testar [F].", "**Notificação:** violência sexual – imediata à SMS; acidente de trabalho com material biológico – semanal (Portaria 11.211/2026) [F]."]},
        {ir: [["ae", "Anticoncepção de emergência"], ["violencia", "Violência"], ["in-prep", "PrEP"]]},
        {ref: ["pcdt_pep2023", "pcdt_pep", "pcdt_ist22", "port11211", "rename"]}
      ]}
    ]
  }, {fontes: ["pcdt_pep2023", "port11211"], nv: ["Serviço de PEP 24 h em Betim e testes de seguimento além dos 30 dias (Quadro 13 do PCDT completo): confirmar."]});

  // ── 13. Acidente ofídico
  G("acidente-ofidico", {
    urg: "**Todo acidente ofídico vai ao hospital de referência com soro**, mesmo sem sintomas – o quadro pode aparecer horas depois [C]. **Não** fazer torniquete, cortar, furar, queimar, sugar ou aplicar substâncias no local [F].",
    resumo: "Em Minas predominam **jararaca (botrópico)** – dor, edema, equimose e sangramento – e **cascavel (crotálico)** – pouca coisa no local, mas **ptose, visão turva, mialgia e urina escura** [F]. O soro específico, aplicado o quanto antes, é o único tratamento eficaz; o número de ampolas depende da gravidade [F].",
    secoes: [
      {t: "Reconhecer", b: [
        {tab: {h: ["Acidente", "Local", "Sistêmico", "Complicações"], r: [
          ["**Botrópico** (jararaca, jararacuçu, urutu)", "Dor, edema e equimose que progridem; bolhas; sangramento no ponto da picada [F]", "Gengivorragia, equimoses à distância, hematúria; hipotensão [F]", "Necrose, abscesso, síndrome compartimental, choque, IRA [F]"],
          ["**Crotálico** (cascavel)", "Pouca dor e edema; parestesia [F]", "Fácies miastênica (ptose, turvação visual, oftalmoplegia), mialgia, urina cor de Coca-Cola [F]", "IRA nas primeiras 48 h – principal causa de óbito [F]"],
          ["**Elapídico** (coral-verdadeira)", "Discreto [F]", "Fácies miastênica, paralisia progressiva [F]", "Insuficiência respiratória [F]"],
          ["**Laquético** (surucucu)", "Como o botrópico [F]", "+ manifestações vagais: vômitos, diarreia, cólicas, hipotensão [F]", "Como o botrópico [F]"]
        ]}, nota: "GVS 2024 [F]. Cobras-verdes, falsas-corais e boipevas causam no máximo quadro local leve; jiboia e sucuri não têm veneno [F]."},
        {det: {t: "Fisiopatologia", b: ["O veneno botrópico tem ação proteolítica (necrose, edema), coagulante (consome fibrinogênio – sangue incoagulável) e hemorrágica (lesa vasos). O crotálico é neurotóxico (bloqueio da placa motora), miotóxico (rabdomiólise e mioglobinúria) e nefrotóxico. O tempo de coagulação ajuda a confirmar o acidente e a avaliar a resposta ao soro [F/C]."]}}
      ]},
      {t: "Gravidade e soro", b: [
        {tab: {h: ["Acidente", "Leve", "Moderado", "Grave"], r: [
          ["Botrópico", "2–4 ampolas", "4–8", "12"],
          ["Crotálico", "5", "10", "20"],
          ["Laquético", "—", "10", "20"],
          ["Elapídico", "Todos potencialmente graves: 10", "", ""]
        ]}, nota: "GVS 2024, Quadro 1 – aplicado só no hospital de referência [F]."}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Picada de cobra"},
          {t: "Retirar anéis e objetos apertados; lavar com água e sabão; membro em posição neutra; repouso; não deixar a pessoa andar", k: "ok"},
          {t: "Garrote colocado? Retirar com cuidado", k: "warn"},
          {t: "Acionar SAMU → hospital de referência com soro (todos os casos)", k: "stop"},
          {t: "Até a remoção: acesso venoso e hidratação; analgesia sem AINE; sem injeção IM se houver sangramento", k: "ok"},
          {t: "Notificar (imediata à SMS)", k: "ok"}
        ], nota: "GVS 2024 [F]; Portaria 11.211/2026 – acidente por animal peçonhento: notificação imediata à SMS [F]."},
        ...fotos("jararaca", "cascavel"),
        {ul: ["Hospital de referência para soroterapia na região de Betim e CIATox-MG: [NV].", "Não capturar nem matar a serpente; foto à distância ajuda a identificar [C]."]},
        {ref: ["gvs3_pecon", "ofidico", "gvs_tetano", "port11211", "rename", "wm_inf"]}
      ]}
    ]
  }, {fontes: ["gvs3_pecon", "port11211"]});
  // escorpião: foto do escorpião-amarelo (se disponível)
  { const c = get("escorpiao"); if (c && c.guia) { const f = fotos("escorpiao-amarelo"); if (f.length) c.guia.secoes[0].b.push(...f); } }
  { const c = get("leptospirose"); if (c && c.guia) { const f = fotos("sufusao"); if (f.length) c.guia.secoes[0].b.push(...f); } }
  { const c = get("zika"); if (c && c.guia) { const f = fotos("zika"); if (f.length) c.guia.secoes[0].b.push(...f); } }

  // ── Ajustes no lote 1 pela lista nova (Portaria 11.211/2026)
  { const c = get("risco-suicida"); if (c && c.evid) c.evid.fontes = [...new Set([...c.evid.fontes, "port11211"])]; }
})();
