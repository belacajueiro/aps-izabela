// ───────────── data66.js – v53: Guia Clínico nos itens da Demanda espontânea – lote 3 (pediatria, 9 itens sem guia).
// Conferido em 25/10/2026: GVS 6ª ed. rev. 2024 vol. 1 (varicela), Manual dos CRIE 6ª ed. 2023 (IGHAVZ e vacina pós-exposição),
// Portaria GM/MS 11.211/2026 (varicela passou a "Varicela", notificação imediata à SES e à SMS), Cochrane 2023 (corticoide no crupe, PubMed),
// ESPGHAN/NASPGHAN 2026 (tratamento da constipação funcional, texto integral no PMC), AAP 2022 (pediculose, resumo no PubMed).
Object.assign(FONTES, {
  gvs1_varicela: {s: "GVS 6ª ed. (2024) vol. 1 – varicela/herpes-zóster", t: "Ministério da Saúde. Guia de Vigilância em Saúde, 6ª ed. rev., 2024, vol. 1 – Varicela: transmissão de 1–2 dias antes do exantema até todas as lesões em crosta; complicações (infecção bacteriana de pele, pneumonia, ataxia cerebelar, encefalite, trombocitopenia, varicela hemorrágica no imunodeprimido, síndrome de Reye com AAS – AAS contraindicado); síndrome da varicela congênita (1,2% no 1º trimestre; 2% entre 13–20 semanas); RN cuja mãe teve varicela de 5 dias antes a 2 dias após o parto: risco de varicela grave; aciclovir para quem tem risco de agravamento – criança sem imunodepressão 20 mg/kg/dose VO 5×/dia, 'dose máxima de 800 mg/dia', 5 dias; adulto 800 mg VO 5×/dia por 7 dias, mais efetivo nas primeiras 24 h; imunodeprimido ou grave: aciclovir IV; não recomendado na gestação, salvo complicação (manual MS).", f: "F", url: "https://bvsms.saude.gov.br/bvs/publicacoes/guia_vigilancia_saude_6edrev_v1.pdf"},
  crie2023_vz: {s: "Manual dos CRIE 2023 – varicela (VZ e IGHAVZ)", t: "Ministério da Saúde. Manual dos Centros de Referência para Imunobiológicos Especiais, 6ª ed., 2023, cap. 18: vacina pós-exposição para controle de surto em hospital, creches e escolas com crianças < 7 anos – suscetíveis imunocompetentes a partir de 9 meses, até 120 h (5 dias) do contato; IGHAVZ 125 UI/10 kg (mín. 125, máx. 625 UI) até 96 h do contato se: suscetível + contato significativo (domiciliar contínuo ou ≥ 1 h em ambiente fechado/mesmo quarto hospitalar) + risco especial (imunodeprimidos, < 9 meses em contato hospitalar, gestantes, RN de mãe com varicela de 5 dias antes a 48 h após o parto, prematuros ≥ 28 semanas de mãe sem varicela, prematuros < 28 semanas ou < 1.000 g); IGHAVZ sem uso terapêutico; AAS proibido por 6 semanas após a vacina (manual MS).", f: "F", url: ""},
  cochrane_crupe2023: {s: "Cochrane 2023 – corticoide no crupe", t: "Aregbesola A et al. Glucocorticoids for croup in children. Cochrane Database Syst Rev 2023;1:CD001955, doi 10.1002/14651858.CD001955.pub5 (45 ECR, 5.888 crianças): corticoide reduz o escore em 2, 6 e 12 h (certeza baixa), o tempo de permanência e os retornos; prednisolona × dexametasona sem diferença no escore em 2 h (alta), mas dexametasona provavelmente reduz retornos/readmissões (RR 0,55; moderada); dexametasona 0,15 × 0,60 mg/kg sem diferença em retornos (alta) – a dose menor pode ser tão eficaz (revisão sistemática; conferida no PubMed).", f: "F", url: "https://doi.org/10.1002/14651858.CD001955.pub5"},
  espghan_constip2026: {s: "ESPGHAN/NASPGHAN 2026 – constipação funcional (0–18 anos)", t: "Gordon M, de Geus A, et al. ESPGHAN/NASPGHAN guidelines for treatment of functional constipation in children aged 0–18 years. J Pediatr Gastroenterol Nutr 2026;83(2):335-66, doi 10.1002/jpn3.70447 (GRADE; 102 ECR; texto integral no PMC): diagnóstico pelos critérios de Roma IV; desimpactação por 3–6 dias (VO ou retal); PEG com ou sem eletrólitos como opção de manutenção – mais sucesso que placebo (65% × 36%; NNT 4; certeza moderada) e que lactulose (72% × 51%; NNT 5; baixa); Tabela 10: PEG desimpactação 1–1,5 g/kg/dia (máx. 6 dias), manutenção 0,4–0,8 g/kg/dia; lactulose 350–700 mg/kg/dia até 7 meses e 0,6–2 g/kg/dia de 7 meses a 18 anos; óleo mineral 1–3 mL/kg/dia de 3 a 18 anos (máx. 90 mL/dia), uso rotineiro não sugerido; senna, picossulfato e bisacodil como substitutos ou adjuvantes se o PEG não bastar; probiótico/simbiótico específico como opção condicional (baixa certeza) (diretriz; conferida em 25/10/2026).", f: "F", url: "https://doi.org/10.1002/jpn3.70447"},
  aap_piolho2022: {s: "AAP 2022 – pediculose (Nolt et al.)", t: "Nolt D, Moore S, Yan AC, Melnick L; AAP. Head Lice. Pediatrics 2022;150(4):e2022059282, doi 10.1542/peds.2022-059282: relatório clínico revisado com novos medicamentos aprovados e algoritmo de manejo (conferido apenas pelo resumo no PubMed; detalhes do tratamento citados de memória).", f: "C", url: "https://doi.org/10.1542/peds.2022-059282"}
});

const FOTO_PED = {
  varicela: ["Varicela em criança: lesões em fases diferentes (pápulas, vesículas e crostas) no rosto", "Moheen Reeyad · Wikimedia Commons · CC BY-SA 4.0"],
  maopeboca: ["Mão-pé-boca: vesículas ovais de base eritematosa nas mãos", "James Heilman, MD · Wikimedia Commons · CC BY-SA 3.0"],
  piolho: ["Pediculose: piolhos e lêndeas presas aos fios, perto do couro cabeludo", "Aditya Suseno · Wikimedia Commons · CC0"],
  "fraldas-candida": ["Dermatite das fraldas com candidíase: eritema vivo que pega as dobras, com lesões satélites", "Siegfried EC, Hebert AA · Wikimedia Commons · CC BY 4.0"],
  sapinho: ["Candidíase oral (sapinho): placas brancas aderidas na língua", "James Heilman, MD · Wikimedia Commons · CC BY-SA 3.0"],
  gengivo: ["Gengivoestomatite herpética: úlceras na gengiva abaixo dos incisivos inferiores (círculo)", "James Heilman, MD · Wikimedia Commons · CC BY-SA 3.0"]
};

(() => {
  const get = id => CONDICOES.find(x => x.id === id);
  const G = (id, guia, o = {}) => {
    const c = get(id); if (!c) return;
    c.guia = guia;
    if (c.evid && o.fontes) c.evid.fontes = [...new Set([...(c.evid.fontes || []), ...o.fontes])];
    (c.mudancas = c.mudancas || []).push("v53 (25/10/2026): Guia Clínico novo – " + (o.mud || "reconhecer, critérios, diferenciais, fluxograma e fontes") + ".");
    if (o.nv) c.nv = [...(c.nv || []), ...o.nv];
  };
  const FT = (typeof FOTO_PED !== "undefined") ? FOTO_PED : {};
  const fotos = (...ks) => ks.filter(k => FT[k]).map(k => ({fig: {foto: true, src: "img/ped-" + k + ".webp", leg: FT[k][0], alt: FT[k][0], fonte: FT[k][1]}}));

  // ── 1. Varicela
  G("varicela", {
    urg: "Pneumonia (taquipneia, tosse, hipoxemia), alteração neurológica (ataxia, sonolência, convulsão), lesões hemorrágicas, celulite ou fasciíte, imunossuprimido ou recém-nascido doente: **urgência** [F]. **Nunca AAS** (síndrome de Reye) [F].",
    resumo: "Exantema **pruriginoso** que passa por **mácula → pápula → vesícula → crosta** em 2–3 dias, com **lesões em fases diferentes ao mesmo tempo** e início no couro cabeludo, face e tronco [F/C]. Transmite de **1–2 dias antes** do exantema até **todas as lesões virarem crosta** [F]. Pela Portaria 11.211/2026, **todo caso de varicela** passou a ser de **notificação imediata à SES e à SMS** [F]. Exposição de gestante, imunodeprimido ou recém-nascido: **IGHAVZ em até 96 h** (CRIE) [F].",
    secoes: [
      {t: "Reconhecer", b: [
        {ul: ["Pródromo leve (febre moderada por 2–3 dias, mal-estar, anorexia) e exantema que surge em surtos; também em mucosas [F/C].", "Polimorfismo regional: máculas, pápulas, vesículas e crostas lado a lado – o que diferencia de varíola e mpox [C].", "Adolescente e adulto: quadro mais intenso e mais complicações [F]."]},
        {det: {t: "Fisiopatologia", b: ["O vírus varicela-zóster entra pela via respiratória, replica em linfonodos, faz viremia e chega à pele, formando vesículas intraepidérmicas. Depois fica latente nos gânglios sensitivos e pode reativar décadas depois como herpes-zóster [C]."]}}
      ]},
      {t: "Diferenciais", b: [
        {tab: {h: ["Hipótese", "O que separa"], r: [
          ["Mpox", "Lesões na mesma fase, umbilicadas, dolorosas, linfadenopatia; contato sexual ou próximo [C]"],
          ["Mão-pé-boca", "Vesículas ovais em mãos, pés, boca e região das fraldas; pouco prurido [C]"],
          ["Impetigo bolhoso", "Bolhas que viram crostas melicéricas, sem pródromo viral [C]"],
          ["Estrófulo (picadas de inseto)", "Pápulas com vesícula central em áreas expostas, surtos recorrentes, sem febre [C]"],
          ["Herpes simples disseminado / eczema herpético", "Sobre dermatite atópica, vesículas agrupadas e erosões – urgência [C]"]
        ]}}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Exantema vesicular polimorfo com prurido"},
          {t: "Complicação (pulmonar, neurológica, hemorrágica, bacteriana grave) ou imunodeprimido?", ramos: [
            {r: "Sim", n: [{t: "Urgência (aciclovir IV)", k: "stop"}]},
            {r: "Não", n: [{t: "Tem indicação de aciclovir oral?"}]}
          ]},
          {t: "Indicação", ramos: [
            {r: "Sim", n: [{t: "Aciclovir oral nas primeiras 24 h do exantema", k: "warn"}]},
            {r: "Não", n: [{t: "Sintomáticos, unhas curtas, banho; sem AAS", k: "ok"}]}
          ]},
          {t: "Afastar até todas as lesões em crosta; notificar (imediata à SES e à SMS); avaliar contatos de risco", k: "ok"}
        ], nota: "GVS 2024 [F]; Portaria 11.211/2026 [F]."},
        {tab: {h: ["Quem recebe aciclovir oral"], r: [
          ["≥ 13 anos e adultos [F/C]"],
          ["Doença crônica de pele ou de pulmão [F]"],
          ["Uso prolongado de AAS; corticoide oral, inalatório ou IV [F]"],
          ["Caso secundário no domicílio (costuma ser mais intenso) [C]"]
        ]}, nota: "Dose: criança 20 mg/kg/dose; adulto 800 mg 5×/dia por 7 dias [F]. Divergência: o GVS 2024 escreve '5 vezes ao dia, dose máxima de 800 mg/dia' para crianças, o que não fecha com 20 mg/kg/dose; a referência pediátrica usual (Red Book/AAP) é 20 mg/kg/dose 4×/dia, máx. 800 mg por dose, por 5 dias [C]. O texto do GVS também lista 'idade inferior a 12 anos' entre as indicações, provável erro de redação [I]."}
      ]},
      {t: "Contatos", b: [
        {tab: {h: ["Situação", "Conduta (Manual dos CRIE 2023)"], r: [
          ["Surto em hospital, creche ou escola com crianças < 7 anos", "Vacina para suscetíveis imunocompetentes ≥ 9 meses, até 120 h (5 dias) do contato [F]"],
          ["Suscetível + contato significativo + risco especial", "IGHAVZ 125 UI/10 kg (mín. 125, máx. 625 UI) até 96 h do contato [F]"],
          ["Risco especial", "Imunodeprimidos; menores de 9 meses em contato hospitalar; gestantes; RN de mãe com varicela de 5 dias antes a 48 h após o parto; prematuros ≥ 28 semanas de mãe sem varicela; prematuros < 28 semanas ou < 1.000 g [F]"],
          ["Contato significativo", "Domiciliar contínuo ou ≥ 1 h em ambiente fechado; mesmo quarto no hospital [F]"]
        ]}, nota: "A IGHAVZ não trata a doença; é só profilaxia [F]. Fluxo do CRIE de referência para Betim: [NV]."},
        ...fotos("varicela"),
        {ref: ["gvs1_varicela", "crie2023_vz", "port11211", "aap_varicela", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["gvs1_varicela", "crie2023_vz", "port11211"], mud: "fases e diferenciais, indicações de aciclovir (com a divergência de dose do GVS 2024), conduta com contatos (vacina até 5 dias, IGHAVZ até 96 h) e notificação imediata de todo caso (Portaria 11.211/2026)"});

  // ── 2. Mão-pé-boca
  G("maopeboca", {
    urg: "Recusa de líquidos com desidratação, ou sinais neurológicos – **mioclonias (sobressaltos no sono), ataxia, tremor, sonolência, vômitos, fraqueza** – ou taquicardia e taquipneia sem febre: **urgência** (encefalite ou miocardite, sobretudo por enterovírus 71) [C].",
    resumo: "Febre baixa, **úlceras dolorosas na boca** e **vesículas ovais** em palmas, plantas, nádegas e região das fraldas, em criança pequena [C]. É autolimitada (7–10 dias): o foco é **hidratação e analgesia** e reconhecer as raras complicações neurológicas [C]. Unhas podem descolar semanas depois (onicomadese) – benigno [C].",
    secoes: [
      {t: "Reconhecer", b: [
        {ul: ["Enterovírus (coxsackie A16, A6, enterovírus 71); mais comum < 5 anos, em creches [C].", "Úlceras orais na língua, gengiva e mucosa jugal → dor e recusa alimentar [C].", "Coxsackie A6: lesões mais extensas, perioral e em áreas de eczema, e onicomadese 1–2 meses depois [C].", "Vírus nas fezes por semanas – higiene das mãos e da troca de fraldas [C]."]},
        {det: {t: "Fisiopatologia", b: ["Transmissão fecal-oral e respiratória; replicação na orofaringe e no intestino, viremia e lesão de queratinócitos (vesículas). O EV71 tem neurotropismo para o tronco cerebral – daí as mioclonias e, raramente, edema pulmonar neurogênico [C]."]}}
      ]},
      {t: "Diferenciais", b: [
        {tab: {h: ["Hipótese", "O que separa"], r: [
          ["Herpangina", "Mesmo grupo de vírus; úlceras só no palato posterior e pilares, sem lesões em mãos e pés [C]"],
          ["Gengivoestomatite herpética", "Gengiva edemaciada e sangrante, lesões peribucais, febre alta [C]"],
          ["Varicela", "Polimorfismo, prurido, tronco e couro cabeludo [C]"],
          ["Aftas", "Sem febre e sem lesões cutâneas [C]"],
          ["Síndrome de Stevens-Johnson, Kawasaki", "Criança grave, mucosite extensa, conjuntivite, febre ≥ 5 dias [C]"]
        ]}}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Úlceras orais + vesículas em mãos, pés ou nádegas"},
          {t: "Desidratação ou sinal neurológico/cardiorrespiratório?", ramos: [
            {r: "Sim", n: [{t: "Urgência", k: "stop"}]},
            {r: "Não", n: [{t: "Analgesia em horário fixo antes das refeições; líquidos frios em pequenos volumes; alimentos pastosos", k: "ok"}]}
          ]},
          {t: "Creche: afastar enquanto houver febre ou lesões abertas, conforme a regra local; lavar as mãos", k: "ok"},
          {t: "Retorno se recusar líquidos, urinar pouco ou surgir sinal neurológico", k: "warn"}
        ], nota: "Conhecimento consolidado [C]; não é doença de notificação individual – surtos seguem a vigilância local [NV]."},
        ...fotos("maopeboca"),
        {ref: ["cab28", "rename", "remume"]}
      ]}
    ]
  }, {nv: ["Regra de afastamento de creche e notificação de surtos em Betim: confirmar com a vigilância."]});

  // ── 3. Pediculose
  G("pediculose", {
    resumo: "O diagnóstico é **ver o piolho vivo** (pente fino no cabelo úmido é o método mais sensível); lêndea sozinha, sobretudo a mais de 1 cm do couro cabeludo, não confirma infestação ativa [C]. Tratar quem tem piolho vivo e examinar a família; **repetir o tratamento em 7–10 dias** para pegar os que eclodiram [C]. Criança **não precisa ser afastada** da escola [C].",
    secoes: [
      {t: "Reconhecer", b: [
        {ul: ["Prurido no couro cabeludo e na nuca (reação à saliva do piolho; pode demorar semanas na 1ª infestação) [C].", "Lêndeas firmemente presas ao fio, perto do couro cabeludo, sobretudo atrás das orelhas e na nuca – não saem como a caspa [C].", "Escoriações e impetigo secundário; linfonodos cervicais [C]."]},
        {det: {t: "Biologia que orienta o tratamento", b: ["O Pediculus humanus capitis vive só no couro cabeludo e morre em 1–2 dias fora dele; transmite-se pelo contato cabeça com cabeça. O ovo eclode em 7–10 dias e a ninfa vira adulto em mais 9–12 dias – por isso a 2ª aplicação em 7–10 dias. Pediculicidas neurotóxicos (permetrina) enfrentam resistência ampla; a dimeticona age por mecanismo físico (asfixia) [C]."]}}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Prurido no couro cabeludo ou lêndeas"},
          {t: "Piolho vivo no pente fino?", ramos: [
            {r: "Não", n: [{t: "Não tratar; reexaminar se persistir", k: "ok"}]},
            {r: "Sim", n: [{t: "Tratar e examinar quem mora junto"}]}
          ]},
          {t: "Opção", ramos: [
            {r: "Ideal", n: [{t: "Dimeticona 4% (sem resistência), 2 aplicações com 7 dias", k: "ok"}]},
            {r: "SUS Betim", n: [{t: "Ivermectina 200 mcg/kg, 2 doses com 7–10 dias (≥ 15 kg, fora da gestação e lactação)", k: "warn"}]}
          ]},
          {t: "Pente fino em cabelo úmido com condicionador a cada 3–4 dias por 2 semanas", k: "ok"},
          {t: "Falha após 2 tratamentos corretos → trocar de classe; checar reinfestação na família/escola", k: "warn"}
        ], nota: "AAP 2022 [C]; disponibilidade na REMUME/RENAME na aba SUS [F]."},
        {trio: {ideal: "Dimeticona 4%: mecanismo físico, sem resistência, cura igual ou superior à permetrina.", sus: "REMUME Betim: ivermectina 6 mg (≥ 15 kg); permetrina 1% está na RENAME, mas não na REMUME; dimeticona não está em nenhuma.", ponte: "Ivermectina oral em 2 doses para ≥ 15 kg; dimeticona por compra para < 15 kg, gestantes e lactantes; pente fino para todos."}},
        {ul: ["Lavar com água quente roupas de cama e bonés usados nos últimos 2 dias; dedetizar a casa é desnecessário [C].", "Não usar querosene, inseticida de uso veterinário ou agrícola [C]."]},
        ...fotos("piolho"),
        {ref: ["aap_piolho2022", "pediculose", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["aap_piolho2022"]});

  // ── 4. Dermatite das fraldas
  G("dermatite-fraldas", {
    resumo: "A dermatite **irritativa** poupa as dobras; a **candidíase** pega as dobras, é vermelho-viva e tem **lesões satélites** (pápulas e pústulas fora da placa) [C]. A base de tudo é **barreira (óxido de zinco) a cada troca**, trocas frequentes e tempo sem fralda; antifúngico só na candidíase [C]. Lesão que não melhora em 1–2 semanas exige repensar o diagnóstico [C].",
    secoes: [
      {t: "Reconhecer e diferenciar", b: [
        {tab: {h: ["Tipo", "Como é", "Conduta"], r: [
          ["Irritativa (de contato)", "Eritema brilhante nas convexidades (nádegas, genitais), **poupa as dobras** [C]", "Barreira, trocas, limpeza com água [C]"],
          ["Candidíase", "Vermelho-vivo, **pega as dobras**, bordas nítidas, **lesões satélites**; frequente após antibiótico [C]", "Azol tópico 2×/dia por 7–14 dias + barreira; ver a boca (sapinho) [C]"],
          ["Dermatite seborreica", "Placas salmão, pouco pruriginosas, também em couro cabeludo, face e dobras [C]", "Emolientes; corticoide de baixa potência por poucos dias [C]"],
          ["Impetigo / estafilococo", "Bolhas, pústulas, crostas melicéricas [C]", "Antibiótico tópico ou oral [C]"],
          ["Psoríase", "Placas bem delimitadas, refratárias [C]", "Dermatologia [C]"],
          ["Deficiência de zinco (acrodermatite)", "Lesões periorificiais (boca, ânus), diarreia, alopecia [C]", "Investigar [C]"],
          ["Lesões vesiculosas, ulceradas ou hemorrágicas", "Herpes, sífilis congênita, histiocitose, abuso [C]", "Avaliação no mesmo dia [C]"]
        ]}}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Eritema na área das fraldas"},
          {t: "Dobras acometidas ou lesões satélites?", ramos: [
            {r: "Sim", n: [{t: "Candidíase: azol tópico + barreira", k: "warn"}]},
            {r: "Não", n: [{t: "Irritativa: barreira a cada troca + tempo sem fralda", k: "ok"}]}
          ]},
          {t: "Sem melhora em 7–14 dias, lesões atípicas ou em outras áreas → rever diagnóstico", k: "warn"}
        ], nota: "Conhecimento consolidado [C]. Evitar corticoide de média/alta potência sob a fralda (oclusão aumenta a absorção) [C]."},
        {ul: ["Limpar com água morna e algodão; lenço umedecido sem perfume e sem álcool se for preciso [C].", "Não retirar toda a pasta a cada troca: limpar só a sujeira e reaplicar por cima [C].", "Óxido de zinco não está na REMUME (compra barata); cetoconazol 2% creme está [F]."]},
        ...fotos("fraldas-candida"),
        {ref: ["rename", "remume"]}
      ]}
    ]
  });

  // ── 5. Crupe
  G("crupe", {
    urg: "Estridor em repouso com tiragem importante, agitação ou sonolência, cianose, SpO₂ < 92%, ou **criança toxemiada, babando, em tripé e sem tosse rouca** (epiglotite, traqueíte bacteriana): **urgência** – não examinar a orofaringe com espátula [C].",
    resumo: "Tosse **ladrante**, rouquidão e **estridor inspiratório**, piores à noite, após pródromo viral, em criança de 6 meses a 3 anos [C]. **Corticoide em dose única para todos os graus**, inclusive os leves (Cochrane 2023) [F]: dexametasona 0,15 a 0,6 mg/kg VO – a dose menor parece tão eficaz [F]. Classifique pelo **Westley**.",
    calcs: ["sc:westley"],
    secoes: [
      {t: "Reconhecer", b: [
        {ul: ["Parainfluenza é o agente mais comum; também influenza, VSR, adenovírus, SARS-CoV-2 [C].", "Febre baixa ou ausente; a criança costuma estar bem entre as crises [C].", "Crupe espasmódico: episódios noturnos súbitos e recorrentes, sem pródromo, em criança atópica [C]."]},
        {det: {t: "Fisiopatologia", b: ["Inflamação e edema da região subglótica, a parte mais estreita da via aérea da criança: uma pequena redução de calibre aumenta muito a resistência (lei de Poiseuille), daí o estridor. O corticoide reduz o edema em poucas horas; a adrenalina nebulizada contrai a mucosa por 1–2 h [C]."]}},
        {calc: "sc:westley"}
      ]},
      {t: "Diferenciais", b: [
        {tab: {h: ["Hipótese", "O que separa"], r: [
          ["Epiglotite", "Início abrupto, febre alta, toxemia, sialorreia, voz abafada, posição em tripé, sem tosse ladrante; rara com vacina Hib [C]"],
          ["Traqueíte bacteriana", "Crupe que piora após dias, febre alta, toxemia, secreção purulenta [C]"],
          ["Corpo estranho", "Início súbito, engasgo, sem pródromo viral [C]"],
          ["Abscesso retrofaríngeo/periamigdaliano", "Febre, dor ao engolir, torcicolo ou trismo [C]"],
          ["Anafilaxia/angioedema", "Urticária, exposição a alérgeno, sem febre [C]"],
          ["Estridor crônico (laringomalácia, estenose)", "Desde o nascimento ou recorrente sem infecção [C]"]
        ]}}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Tosse ladrante + estridor"},
          {t: "Sinais de epiglotite, traqueíte ou corpo estranho?", ramos: [
            {r: "Sim", n: [{t: "Urgência; manter a criança calma no colo", k: "stop"}]},
            {r: "Não", n: [{t: "Westley"}]}
          ]},
          {t: "Gravidade", ramos: [
            {r: "Leve (≤ 2)", n: [{t: "Dexametasona dose única e alta com orientação", k: "ok"}]},
            {r: "Moderado (3–5)", n: [{t: "Dexametasona + observação; adrenalina nebulizada se estridor em repouso (encaminhar se não houver)", k: "warn"}]},
            {r: "Grave (≥ 6)", n: [{t: "Urgência: adrenalina nebulizada, O₂, dexametasona", k: "stop"}]}
          ]},
          {t: "Após adrenalina, observar 2–4 h antes de liberar (efeito rebote) [C]", k: "warn"}
        ], nota: "Cochrane 2023 [F]; demais passos consolidados [C]. Umidificação/nebulização com soro não têm benefício [C]."}
      ]},
      {t: "Tratar", b: [
        {tab: {h: ["Opção", "Dose", "Observação"], r: [
          ["Dexametasona VO", "0,15–0,6 mg/kg, dose única [F]", "Dose menor provavelmente tão eficaz; reduz retornos mais que a prednisolona [F]. Em Betim, ampola de 4 mg/mL por via oral (fora da bula) [F]"],
          ["Prednisolona VO", "1–2 mg/kg, dose única [C]", "Escore semelhante à dexametasona em 2 h [F]"]
        ]}, nota: "Máximos de dose na aba Prescrição [NV]."},
        {ref: ["cochrane_crupe2023", "cochrane_crupe", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["cochrane_crupe2023"]});

  // ── 6. Cólica do lactente
  G("colica-lactente", {
    urg: "Febre, vômitos em jato ou biliosos, sangue nas fezes, recusa alimentar, baixo ganho de peso, choro súbito em bebê antes calmo, letargia, fontanela abaulada ou qualquer lesão suspeita: **avaliar causa orgânica ou trauma** no mesmo dia. **Cuidador no limite = risco de trauma craniano abusivo** [C].",
    resumo: "Diagnóstico de **exclusão em bebê que cresce bem**: choro inconsolável e prolongado, sem causa, no fim da tarde e à noite, começando nas primeiras semanas, com **pico em torno de 6 semanas** e melhora até 3–4 meses [C]. O tratamento principal é **acolher e proteger a família** – técnicas de acalmar e a regra 'nunca sacudir' [C]. Simeticona não funciona; L. reuteri ajuda só no bebê amamentado [C].",
    secoes: [
      {t: "Critérios", b: [
        {ul: ["Início e fim antes dos 5 meses [C].", "Períodos recorrentes e prolongados de choro, agitação ou irritabilidade sem causa aparente e que o cuidador não consegue evitar nem resolver [C].", "Sem déficit de crescimento, febre ou doença [C]."]},
        {nota: "Critérios de Roma IV para cólica do lactente, resumidos (citados de memória) [C]."},
        {det: {t: "Por que o bebê chora", b: ["A causa é provavelmente multifatorial: imaturidade do sistema nervoso e da regulação do sono, microbiota intestinal em formação, sensibilidade visceral e fatores do ambiente. O padrão de choro com pico em 6 semanas aparece em culturas diferentes, o que sugere um fenômeno do desenvolvimento normal [C]."]}}
      ]},
      {t: "Diferenciais", b: [
        {tab: {h: ["Hipótese", "Pista"], r: [
          ["Fome / técnica de amamentação", "Pouco ganho de peso, mamadas curtas, pega ruim [C]"],
          ["Alergia à proteína do leite de vaca", "Sangue nas fezes, eczema, vômitos, história familiar [C]"],
          ["DRGE com esofagite", "Recusa alimentar, arqueamento, baixo ganho [C]"],
          ["ITU, otite, outras infecções", "Febre, irritabilidade persistente [C]"],
          ["Hérnia encarcerada, torção testicular, invaginação", "Choro súbito com massa, vômitos ou sangue [C]"],
          ["Fratura, hematoma, trauma abusivo", "Equimoses em bebê que não engatinha, inchaço de membro, fontanela tensa [C]"],
          ["Fio de cabelo enrolado em dedo ou pênis (torniquete)", "Examinar todos os dedos e o pênis [C]"]
        ]}}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Choro excessivo em bebê < 5 meses"},
          {t: "Sinal de alarme ou exame alterado?", ramos: [
            {r: "Sim", n: [{t: "Investigar causa orgânica / proteção", k: "stop"}]},
            {r: "Não", n: [{t: "Cólica provável: acolher, explicar a evolução, ensinar técnicas de acalmar"}]}
          ]},
          {t: "Cuidador exausto?", ramos: [
            {r: "Sim", n: [{t: "Plano de pausa segura (berço, sair do quarto alguns minutos); rede de apoio; retorno breve; avaliar depressão pós-parto (EPDS)", k: "warn"}]},
            {r: "Não", n: [{t: "Retorno em 1–2 semanas", k: "ok"}]}
          ]},
          {t: "Amamentado: L. reuteri pode reduzir o choro; simeticona e chás: sem benefício", k: "ok"}
        ], nota: "Sung 2018 (metanálise de dados individuais) [C]; condutas consolidadas [C]."},
        {ir: [["pu-choro-colica", "Choro e cólica (puericultura)"], ["pp-depressao", "Depressão pós-parto"]]},
        {ref: ["colica", "remume"]}
      ]}
    ]
  });

  // ── 7. Candidíase oral
  G("moniliase-oral", {
    resumo: "Placas brancas que **não saem** ao raspar (ou saem deixando base vermelha) em língua, mucosa jugal e palato; o resto de leite **sai** fácil [C]. Em lactente é comum e benigna. Em **criança maior ou adulto sem fator de risco** (antibiótico, corticoide inalatório, prótese), **investigar imunossupressão** (HIV, diabetes) [C].",
    secoes: [
      {t: "Reconhecer", b: [
        {ul: ["Pseudomembranosa (placas brancas), eritematosa (atrofia vermelha, sobretudo com prótese ou corticoide) e queilite angular [C].", "Lactente: pode recusar mamar por dor; olhar a área das fraldas (candidíase associada) e os mamilos da mãe (dor em agulhada, fissuras que não cicatrizam) [C].", "Dor ao engolir ou disfagia sugere esofagite → avaliação [C]."]},
        {det: {t: "Fisiopatologia", b: ["A Candida albicans é comensal da boca; vira doença quando a microbiota ou a imunidade local se desequilibram – antibiótico, corticoide inalatório, xerostomia, prótese mal adaptada, diabetes, imunidade celular reduzida (HIV com CD4 baixo) [C]."]}}
      ]},
      {t: "Diferenciais", b: [
        {tab: {h: ["Hipótese", "O que separa"], r: [
          ["Resto de leite", "Sai fácil com gaze, sem base vermelha [C]"],
          ["Língua geográfica", "Áreas lisas e vermelhas com borda branca que mudam de lugar, sem placas [C]"],
          ["Leucoplasia pilosa", "Placas brancas verticais na borda lateral da língua que não saem – sugere HIV/EBV [C]"],
          ["Líquen plano oral", "Estrias brancas rendilhadas (Wickham), adulto [C]"],
          ["Gengivoestomatite herpética / aftas", "Úlceras dolorosas, não placas [C]"]
        ]}}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Placas brancas na boca que não saem ao raspar"},
          {t: "Fator de risco claro (lactente, antibiótico, corticoide inalatório, prótese)?", ramos: [
            {r: "Sim", n: [{t: "Tratar: nistatina (SUS) ou miconazol gel; corrigir o fator", k: "ok"}]},
            {r: "Não", n: [{t: "Tratar + teste rápido de HIV, glicemia; investigar imunossupressão", k: "warn"}]}
          ]},
          {t: "Lactente amamentado: tratar mamilos da mãe se houver sintomas; ferver bicos e chupetas", k: "ok"},
          {t: "Disfagia/odinofagia, recorrência ou falha → avaliar esofagite e imunidade", k: "warn"}
        ], nota: "IDSA 2016 [C]; disponibilidade na REMUME/RENAME na aba SUS [F]."},
        {trio: {ideal: "Miconazol gel oral (ou clotrimazol) tem maior taxa de cura que nistatina em lactentes (ECR).", sus: "REMUME Betim: nistatina 100.000 UI/mL; miconazol gel oral está na RENAME, mas não na REMUME.", ponte: "Nistatina bem aplicada (após as mamadas, por 7–14 dias, até 48 h depois das lesões sumirem); miconazol gel por compra se falhar (só ≥ 4 meses, risco de engasgo)."}},
        ...fotos("sapinho"),
        {ref: ["candida_idsa", "rename", "remume"]}
      ]}
    ]
  });

  // ── 8. Gengivoestomatite herpética
  G("gengivoestomatite", {
    urg: "Desidratação (recusa de líquidos, pouca urina), lesões no olho ou na pálpebra (ceratite), lesões herpéticas sobre eczema (eczema herpético), recém-nascido ou imunossuprimido: **urgência** [C].",
    resumo: "Primoinfecção pelo **herpes simples** em criança de 6 meses a 5 anos: **febre alta**, **gengiva edemaciada, vermelha e sangrante** e **vesículas/úlceras** em toda a boca e ao redor dos lábios, com salivação e recusa alimentar [C]. Dura 7–14 dias. **Hidratação e analgesia** são a base; aciclovir oral ajuda se começar **nas primeiras 72 h** [C].",
    secoes: [
      {t: "Reconhecer", b: [
        {ul: ["Pródromo com febre e irritabilidade; depois vesículas que se rompem em úlceras amareladas com halo vermelho [C].", "Gengivite marginal intensa – o achado que separa de herpangina e mão-pé-boca [C].", "Linfonodos submandibulares dolorosos, halitose [C].", "Autoinoculação: dedo (panarício herpético) e olhos [C]."]},
        {det: {t: "Fisiopatologia", b: ["O HSV-1 infecta o epitélio oral e causa vesículas intraepiteliais; depois fica latente no gânglio trigeminal e pode reativar como herpes labial ao longo da vida [C]."]}}
      ]},
      {t: "Diferenciais", b: [
        {tab: {h: ["Hipótese", "O que separa"], r: [
          ["Herpangina", "Úlceras só na faringe posterior e palato mole, sem gengivite [C]"],
          ["Mão-pé-boca", "Lesões em mãos, pés e nádegas; gengiva poupada [C]"],
          ["Aftas", "Sem febre, poucas úlceras, sem gengivite [C]"],
          ["Stevens-Johnson", "Lesões em lábios com crostas hemorrágicas, olhos e genitais, criança grave, medicamento recente [C]"],
          ["Leucemia (gengivite com hipertrofia)", "Palidez, petéquias, hepatoesplenomegalia [C]"]
        ]}}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Febre + gengivite + úlceras orais e periorais"},
          {t: "Desidratação, olho acometido, eczema herpético, RN ou imunossupressão?", ramos: [
            {r: "Sim", n: [{t: "Urgência", k: "stop"}]},
            {r: "Não", n: [{t: "Até 72 h do início?"}]}
          ]},
          {t: "Conduta", ramos: [
            {r: "Sim", n: [{t: "Aciclovir oral 7 dias + analgesia + hidratação", k: "warn"}]},
            {r: "Não", n: [{t: "Analgesia em horário fixo + líquidos frios + alimentos pastosos", k: "ok"}]}
          ]},
          {t: "Retorno em 24–48 h ou antes se urinar pouco", k: "ok"}
        ], nota: "Amir 1997 (ECR) [C]; manejo de suporte consolidado [C]."},
        ...fotos("gengivo"),
        {ref: ["gengivo", "rename", "remume"]}
      ]}
    ]
  });

  // ── 9. Constipação na criança
  G("constipacao-infantil", {
    urg: "Mecônio após 48 h, início nas primeiras semanas, distensão importante, vômitos biliosos, sangue nas fezes sem fissura, baixo ganho, alteração neurológica de membros inferiores ou da coluna lombossacra (tufo de pelos, fosseta), ânus anteriorizado ou ampola vazia com fezes explosivas: **investigar causa orgânica** (Hirschsprung, hipotireoidismo, medular, anatômica) [C].",
    resumo: "A grande maioria é **funcional** (Roma IV). Primeiro **desimpactar** (3–6 dias), depois **manutenção** com laxativo osmótico até fezes pastosas diárias, por **pelo menos 2 meses** e até 1 mês sem sintomas, com desmame gradual [C]. **PEG** é a 1ª opção (sucesso 72% × 51% da lactulose; NNT 5) (ESPGHAN/NASPGHAN 2026) [F]. Em Betim, a disponível é a **lactulose** [F].",
    secoes: [
      {t: "Critérios (Roma IV)", b: [
        {tab: {h: ["Até 4 anos (≥ 1 mês, 2 ou mais)", "≥ 4 anos (≥ 1 mês, 2 ou mais, sem critério de intestino irritável)"], r: [
          ["≤ 2 evacuações por semana", "≤ 2 evacuações por semana no vaso"],
          ["Retenção excessiva de fezes", "≥ 1 episódio de incontinência fecal por semana"],
          ["Evacuação dolorosa ou fezes endurecidas", "Postura de retenção ou retenção voluntária excessiva"],
          ["Fezes de grande diâmetro", "Evacuação dolorosa ou fezes endurecidas"],
          ["Grande massa fecal no reto", "Grande massa fecal no reto"],
          ["(Criança com controle esfincteriano: incontinência ≥ 1×/semana; fezes que entopem o vaso)", "Fezes de grande diâmetro que podem entupir o vaso"]
        ]}, nota: "Roma IV, resumido (citado de memória) [C]. A ESPGHAN/NASPGHAN 2026 usa os critérios de Roma IV [F]."},
        {det: {t: "Fisiopatologia (o ciclo da retenção)", b: ["Uma evacuação dolorosa (introdução alimentar, desfralde, entrada na escola, fissura) leva a criança a segurar. As fezes ficam no reto, perdem água, endurecem e alargam a ampola, que perde sensibilidade; a próxima evacuação dói mais, e o ciclo se fecha. Fezes líquidas escapam ao redor do fecaloma (escape fecal), confundidas com diarreia [C]."]}}
      ]},
      {t: "Diferenciais", b: [
        {tab: {h: ["Causa orgânica", "Pista"], r: [
          ["Doença de Hirschsprung", "Mecônio tardio, distensão, crescimento ruim, ampola vazia, fezes explosivas ao toque [C]"],
          ["Hipotireoidismo", "Triagem neonatal, ganho de peso, fadiga [C]"],
          ["Doença celíaca", "Distensão, baixo ganho, anemia [C]"],
          ["Alergia à proteína do leite de vaca", "Lactente refratário, eczema, história familiar [C]"],
          ["Disrafismo / medular", "Alteração de marcha, reflexos, bexiga; sinais cutâneos lombossacros [C]"],
          ["Malformação anorretal", "Ânus anteriorizado ou estenótico [C]"],
          ["Medicamentos, chumbo, hipercalcemia", "História [C]"]
        ]}},
        {nota: "Disquezia do lactente (< 9 meses, esforço e choro por ≥ 10 min antes de fezes moles) não é constipação e não precisa de laxativo [C]."}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Evacuações raras, duras ou dolorosas, retenção ou escape"},
          {t: "Sinal de alarme?", ramos: [
            {r: "Sim", n: [{t: "Investigar / pediatria", k: "stop"}]},
            {r: "Não", n: [{t: "Fecaloma (massa abdominal, escape, ampola cheia)?"}]}
          ]},
          {t: "Fecaloma", ramos: [
            {r: "Sim", n: [{t: "Desimpactação VO por 3–6 dias (PEG 1–1,5 g/kg/dia; alternativa: lactulose em dose alta, senna, bisacodil)", k: "warn"}]},
            {r: "Não", n: [{t: "Manutenção direto"}]}
          ]},
          {t: "Manutenção: PEG 0,4–0,8 g/kg/dia (ou lactulose) até fezes pastosas diárias, ≥ 2 meses; desmame gradual", k: "ok"},
          {t: "Treino de toalete (5 min após as refeições, apoio para os pés), diário de evacuações, reforço positivo", k: "ok"},
          {t: "Sem resposta após 3 meses de tratamento bem feito → gastropediatria", k: "warn"}
        ], nota: "ESPGHAN/NASPGHAN 2026, Tabela 10 [F]; treino de toalete e tempo de manutenção: prática consolidada [C]."}
      ]},
      {t: "Tratar", b: [
        {tab: {h: ["Medicamento", "Dose (ESPGHAN/NASPGHAN 2026)", "Comentário"], r: [
          ["PEG 3350/4000", "Desimpactação 1–1,5 g/kg/dia (máx. 6 dias); manutenção 0,4–0,8 g/kg/dia [F]", "1ª opção; não está na RENAME nem na REMUME [F]"],
          ["Lactulose", "350–700 mg/kg/dia até 7 meses; 0,6–2 g/kg/dia de 7 meses a 18 anos [F]", "REMUME 667 mg/mL (1 mL ≈ 0,67 g); mais gases e cólica [F/C]"],
          ["Senna, picossulfato, bisacodil", "Ver a tabela da diretriz [F]", "Se o PEG não bastar, como substituto ou adjuvante [F]; bisacodil 5 mg na REMUME [F]"],
          ["Óleo mineral", "1–3 mL/kg/dia (≥ 3 anos; máx. 90 mL/dia) [F]", "Uso rotineiro não sugerido; evitar < 3 anos e com risco de aspiração (pneumonia lipoide) [F]"]
        ]}, nota: "A dose de lactulose do item (1–2 g/kg/dia = 1,5–3 mL/kg/dia) cabe na faixa da diretriz de 2026 para ≥ 7 meses; abaixo de 7 meses a diretriz usa 350–700 mg/kg/dia [F]."},
        {ul: ["Fibras e líquidos pela dieta normal; suplementar fibra isolada tem evidência fraca [F/C].", "Probiótico/simbiótico específico é opção condicional de baixa certeza [F]."]},
        {ir: [["pu-constipacao", "Constipação do bebê (puericultura)"], ["pu-desfralde", "Desfralde"]]},
        {ref: ["espghan_constip2026", "espghan_constip", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["espghan_constip2026"], mud: "Roma IV, diferenciais orgânicos, fluxograma de desimpactação e manutenção e doses pela diretriz ESPGHAN/NASPGHAN 2026 (substitui a de 2014)"});

  // Correções no texto dos itens (pendências v53)
  const v = get("varicela");
  if (v) {
    v.P = v.P.replace("- Notificação: casos graves, óbitos e surtos.", "- Notificação: todo caso de varicela, imediata à SES e à SMS (Portaria GM/MS 11.211/2026).");
    v.nv = (v.nv || []).filter(x => !/notificação vigentes/.test(x)).concat(["Regras de vacinação de bloqueio: conferir com a vigilância municipal."]);
  }
  const k = get("constipacao-infantil");
  if (k) {
    k.rx.forEach(r => {
      if (typeof r !== "object") return;
      r.texto = r.texto.replace("Manutenção: 0,4 g/kg/dia (faixa 0,2–0,8; até cerca de 17 g/dia)", "Manutenção: 0,4–0,8 g/kg/dia (até cerca de 17 g/dia)")
        .replace("   1,5 a 3 mL/kg/dia (1–2 g/kg/dia) em 1–2 tomadas", "   ≥ 7 meses: 1,5 a 3 mL/kg/dia (1–2 g/kg/dia) em 1–2 tomadas");
      r.nota = (r.nota || "").replace("ESPGHAN/NASPGHAN 2014: 1ª linha para desimpactação e manutenção.", "ESPGHAN/NASPGHAN 2026: opção de manutenção com mais sucesso que a lactulose (NNT 5); desimpactação 1–1,5 g/kg/dia por até 6 dias.")
        .replace("ESPGHAN/NASPGHAN 2014: 1–2 g/kg/dia (667 mg/mL → 1,5–3 mL/kg/dia).", "ESPGHAN/NASPGHAN 2026: 0,6–2 g/kg/dia de 7 meses a 18 anos (667 mg/mL → 0,9–3 mL/kg/dia); até 7 meses, 350–700 mg/kg/dia (0,5–1 mL/kg/dia).");
    });
    if (k.idealsus) k.idealsus.ideal = "PEG com ou sem eletrólitos: mais sucesso que a lactulose (72% × 51%; NNT 5; certeza baixa) e que placebo (NNT 4; moderada) – ESPGHAN/NASPGHAN 2026.";
    if (k.evid && !k.evid.fontes.includes("espghan_constip2026")) k.evid.fontes.unshift("espghan_constip2026");
    if (k.evid) k.evid.resumo = "ESPGHAN/NASPGHAN 2026 (GRADE, 102 ECR): PEG teve mais sucesso que placebo (65% × 36%; NNT 4; certeza moderada) e que lactulose (72% × 51%; NNT 5; baixa); lactulose é alternativa segura do nascimento aos 18 anos quando há problema de acesso, idade, custo ou tolerância. Manutenção por ≥ 2 meses reduz recaídas (prática consolidada). Fibras e líquidos adicionais isolados têm pouca evidência.";
  }
})();
