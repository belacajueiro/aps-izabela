// ───────────── data70.js – v57: Guia Clínico – lote 7 (Saúde da mulher: 18 itens sem guia).
// Conferido em 26/10/2026 no texto integral de: Protocolos da Atenção Básica – Saúde das Mulheres (MS/IEP-HSL 2016), TelessaúdeRS Ginecologia 2023,
// PCDT SOP 2019, PCDT Endometriose (Relatório CONITEC 1050, set/2025), Manual de Gestação de Alto Risco (MS 2022), PCDT IST 2022 (DIP),
// Protocolo Pré-natal e Puerpério de Betim 2024 (retificado 05/2025; páginas 72–76 e 134 lidas como imagem) e REMUME Betim.
Object.assign(FONTES, {
  pab_mulher2016: {s: "Protocolos da Atenção Básica – Saúde das Mulheres (MS, 2016)", t: "Ministério da Saúde/Instituto Sírio-Libanês. Protocolos da Atenção Básica: Saúde das Mulheres, 2016 (cópia na base clínica): Fluxograma 1 e Quadros 1–5 (sangramento uterino anormal: aumentado, irregular e intermenstrual; manejo agudo – estrogênio, ACO 6/6 h, AINE, ácido tranexâmico 500 mg 8/8 h até 7 dias; crônico – AINE reduz ~49%, tranexâmico ~58%, ACO ~43%, medroxiprogesterona 10 mg do 5º ao 26º dia ~83%, DIU-LNG ~95%); Fluxogramas 2–4 e Quadro 6 (atraso menstrual e amenorreia; teste da progesterona com medroxiprogesterona 5–10 mg por 5–10 dias); Fluxograma 5 (sintomas pré-menstruais; ISRS contínuo ou na fase lútea; espironolactona 100 mg na fase lútea para edema); Fluxograma 10 e Quadros 8–9 (dor pélvica: dismenorreia com AINE, endometriose com ACO contínuo, progestágeno injetável ou noretisterona 10 mg/dia); Fluxograma 11 (imagens anexais: cisto funcional < 5 cm sem seguimento; ≥ 5 cm repetir USG em até 12 semanas; complexo → ginecologia; ascite/bilateral/septações grosseiras → oncologia com urgência); Fluxograma 12 (miomas); Parte 2, Fluxogramas 2, 9 e 12 (náusea e vômitos com metoclopramida ou dimenidrinato + piridoxina; síndromes hemorrágicas; síndromes hipertensivas); Quadro 15 (intercorrências do aleitamento: ingurgitamento, fissuras, candidíase, mastite com cefalexina/amoxicilina/amoxicilina-clavulanato/eritromicina 10 dias, abscesso); Parte 6, Quadros 4–5 (climatério: não hormonal e TH, contraindicações, seguimento) (protocolo MS).", f: "F", url: "https://bvsms.saude.gov.br/bvs/publicacoes/protocolos_atencao_basica_saude_mulheres.pdf"},
  tsrs_gin2023: {s: "TelessaúdeRS – Ginecologia (2023)", t: "TelessaúdeRS-UFRGS. Protocolos de encaminhamento – Ginecologia, versão digital 2023 (cópia na base clínica): Protocolo 1 (SUA: urgência se anemia sintomática/instabilidade; ginecologia se refratário a 3 meses de tratamento otimizado, mioma submucoso, pólipo ou endométrio ≥ 12 mm, ≥ 45 anos ou fator de risco para câncer de endométrio; pós-menopausa → oncologia ginecológica); Protocolo 3 (massa anexial com critérios por tamanho e aspecto na menacme e na menopausa; sólida, complexa, sintomática ou com ascite → oncologia ginecológica); Protocolo 4 (miomatose); Protocolo 5 (prolapso: fisioterapia pélvica para todas; ginecologia se sintomático com desejo cirúrgico); Protocolo 7 (dor pélvica crônica, endometriose); Protocolo 8 e Quadro 5 (climatério); Protocolo 11 e Quadros 7–8 (amenorreia: 3 ciclos ou 6 meses; teste do progestágeno; hiperprolactinemia) (referência técnica de outro estado).", f: "F", url: "https://www.ufrgs.br/telessauders/regulasus/#regulasus-protocolos"},
  pcdt_sop2019: {s: "PCDT Síndrome dos Ovários Policísticos (MS, 2019)", t: "Ministério da Saúde. PCDT da Síndrome dos Ovários Policísticos, 2019 (cópia na base clínica): Rotterdam – 2 de 3 (≤ 9 ciclos/ano; hiperandrogenismo clínico ou laboratorial; > 12 folículos de 2–9 mm ou volume ≥ 10 cm³, com a observação de que aparelhos de maior resolução elevam o corte para > 25); adolescentes: os 3 critérios; excluir com 17-OHP, TSH, prolactina e FSH; TOTG em obesas ou com história familiar; ACO 21/7; medroxiprogesterona 10 mg por 10–12 dias/mês; ciproterona 12,5–50 mg associada ao ACO; metformina 500 mg até 2.550 mg/dia; espironolactona com potássio monitorado; endocrinologia se virilização ou testosterona > 2 DP (protocolo).", f: "F", url: "https://www.gov.br/conitec/pt-br/midias/protocolos/pcdt_sop.pdf"},
  pcdt_endo2025: {s: "PCDT Endometriose (Relatório CONITEC 1050, set/2025)", t: "Ministério da Saúde/CONITEC. Protocolo Clínico e Diretrizes Terapêuticas – Endometriose, Relatório de Recomendação nº 1050, setembro de 2025 (cópia na base clínica): CA-125 deve ser abandonado no diagnóstico; tratamento empírico com ACO, desogestrel, medroxiprogesterona ou DIU-LNG se dismenorreia/dispareunia progressivas > 6 meses sem resposta a AINE ou dor pélvica crônica com imagem/exame compatível; DIU-LNG para quem tem contraindicação ou não adere ao ACO (Portaria SECTICS 41/2025); 1ª linha: etinilestradiol 0,03 + levonorgestrel 0,15 mg (21/7), medroxiprogesterona 10 mg VO 3×/dia contínuo ou 150 mg IM a cada 12–13 semanas, desogestrel 75 mcg contínuo, DIU-LNG 52 mg; 2ª linha (confirmação laparoscópica): análogos de GnRH com add-back e danazol (protocolo; versão do relatório, publicação final não conferida).", f: "F", url: ""},
  mgar2022: {s: "Manual de Gestação de Alto Risco (MS, 2022)", t: "Ministério da Saúde. Manual de Gestação de Alto Risco, 2022 (cópia na base clínica): pré-eclâmpsia com sinais de gravidade – PA ≥ 160/110 confirmada em 15 min, HELLP, iminência de eclâmpsia, eclâmpsia, edema agudo de pulmão, dor torácica, creatinina ≥ 1,2; PA ≥ 160/110 mesmo sem sintomas indica sulfato de magnésio; Quadro 2 – hidralazina 5 mg IV a cada 20 min (máx. 30 mg) ou nifedipino 10 mg VO a cada 20–30 min (máx. 30 mg), meta de reduzir 15–25% na 1ª hora; Quadro 7 – sulfato de magnésio: Zuspan 4 g IV em 5–10 min + 1–2 g/h, ou Pritchard 4 g IV + 10 g IM (5 g em cada glúteo) e 5 g IM a cada 4 h; IM não usar na HELLP com plaquetopenia; Quadro 8 – manter se diurese ≥ 25 mL/h, reflexos presentes, FR ≥ 12; gluconato de cálcio 10% 1 g IV como antídoto (manual MS).", f: "F", url: "https://bvsms.saude.gov.br/bvs/publicacoes/manual_gestacao_alto_risco.pdf"}
});

(() => {
  const get = id => CONDICOES.find(x => x.id === id);
  const G = (id, guia, o = {}) => {
    const c = get(id); if (!c) return;
    c.guia = guia;
    if (c.evid && o.fontes) c.evid.fontes = [...new Set([...(c.evid.fontes || []), ...o.fontes])];
    (c.mudancas = c.mudancas || []).push("v57 (26/10/2026): Guia Clínico novo – " + (o.mud || "reconhecer, diferenciais, fluxograma e fontes") + ".");
    if (o.nv) c.nv = [...(c.nv || []), ...o.nv];
  };

  // ── 1. Dor ao amamentar
  G("amamentacao", {
    urg: "Bebê com **baixo ganho de peso, poucas fraldas molhadas, icterícia que piora ou letargia**: avaliação do bebê no mesmo dia [C]. Mama vermelha, dolorosa, com febre: mastite; área flutuante: abscesso [F].",
    resumo: "A causa mais comum de dor e fissura é **pega e posição inadequadas**; corrigir a pega é o tratamento [F]. **Ingurgitamento**: mamadas frequentes sem horário, ordenha de alívio antes da mamada, compressas frias de no máximo 20 min entre as mamadas, sutiã firme, analgésico [F]. **Fissura**: leite do fim da mamada nas lesões, mamilos secos, **sem pomadas, sabão ou álcool** [F]. Dor em agulhada com mamilo brilhante e sapinho no bebê: **candidíase – tratar os dois** [F].",
    secoes: [
      {t: "Diferenciar a causa da dor", b: [
        {tab: {h: ["Problema", "Pistas", "Conduta (PAB 2016, Quadro 15)"], r: [
          ["Pega/posição", "Dor no início da mamada, mamilo achatado ou 'em batom' depois [C]", "Barriga com barriga, boca bem aberta, lábio inferior evertido, mais aréola embaixo; interromper a sucção com o dedo mínimo antes de tirar o bebê [F]"],
          ["Ingurgitamento", "Mamas cheias, duras, brilhantes, nos primeiros dias; aréola tensa dificulta a pega [F/C]", "Ordenha antes da mamada, massagem circular, mamadas frequentes, frio entre mamadas, dipirona/paracetamol [F]"],
          ["Fissura", "Lesão no mamilo, dor intensa [F]", "Corrigir a pega; leite nas lesões; secar; sem pomadas [F]"],
          ["Candidíase", "Ardor e dor em agulhada que continua depois da mamada; mamilo vermelho brilhante; placas brancas na boca do bebê [F]", "Mãe: nistatina, miconazol ou cetoconazol tópico após cada mamada por 14 dias; bebê: nistatina oral; ferver chupetas e bicos [F]"],
          ["Vasoespasmo / Raynaud do mamilo", "Mamilo fica branco e depois roxo, dor em queimação com o frio [C]", "Calor local, corrigir a pega [C]"],
          ["Freio lingual curto", "Dor persistente apesar da pega correta, bebê não estende a língua [C]", "Avaliar frenotomia (teste da linguinha) [C]"]
        ]}},
        {fluxo: [
          {t: "Dor ao amamentar"},
          {t: "Febre, área vermelha e dolorosa?", ramos: [
            {r: "Sim", n: [{t: "Mastite (ver item)", k: "warn"}]},
            {r: "Não", n: [{t: "Observar uma mamada inteira"}]}
          ]},
          {t: "Causa", ramos: [
            {r: "Pega/ingurgitamento/fissura", n: [{t: "Corrigir a pega, ordenha de alívio, leite nas lesões, analgésico", k: "ok"}]},
            {r: "Dor em agulhada + sapinho", n: [{t: "Tratar mãe e bebê", k: "ok"}]}
          ]},
          {t: "Retorno em 48–72 h; banco de leite/consultoria se persistir", k: "ok"}
        ], nota: "PAB Saúde das Mulheres 2016, Quadro 15 [F]."},
        {ir: [["mastite", "Mastite"], ["moniliase-oral", "Sapinho do bebê"], ["pu-amamentacao", "Amamentação (puericultura)"]]},
        {ref: ["pab_mulher2016", "abm_mastite", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["pab_mulher2016"]});

  // ── 2. Amenorreia secundária
  G("amenorreia", {
    resumo: "Amenorreia secundária = **sem menstruar por 3 ciclos** (ciclos regulares) **ou 6 meses** (irregulares) [F]. **Primeiro, gravidez** [F]. Depois a história orienta: hormônio de depósito, sinais androgênicos (SOP), fogachos (insuficiência ovariana), galactorreia (prolactina), sintomas de tireoide, estresse/peso/exercício (hipotalâmica), curetagem ou infecção pós-aborto (Asherman) [F]. Exames iniciais: **β-hCG, TSH e prolactina**; FSH se houver suspeita de falência ovariana [F].",
    secoes: [
      {t: "Decidir (Fluxogramas 2–4)", b: [
        {fluxo: [
          {t: "Sem menstruação"},
          {t: "Teste de gravidez", k: "q"},
          {t: "Positivo?", ramos: [
            {r: "Sim", n: [{t: "Pré-natal (ou acolhimento se não desejada)", k: "ok"}]},
            {r: "Não", n: [{t: "Hormonal de depósito ou ACO recente?"}]}
          ]},
          {t: "Uso hormonal", ramos: [
            {r: "Sim", n: [{t: "Observar até 6 meses após suspender; método não hormonal", k: "ok"}]},
            {r: "Não", n: [{t: "TSH e prolactina"}]}
          ]},
          {t: "Resultado", ramos: [
            {r: "TSH alterado", n: [{t: "Tratar tireoide", k: "ok"}]},
            {r: "Prolactina alta", n: [{t: "Repetir; afastar fármacos, gestação, hipotireoidismo, DRC; endocrinologia se persistir", k: "warn"}]},
            {r: "Normais", n: [{t: "Teste da progesterona"}]}
          ]},
          {t: "Sangrou?", ramos: [
            {r: "Sim", n: [{t: "Anovulação: SOP (se androgênico) ou hipotalâmica", k: "ok"}]},
            {r: "Não", n: [{t: "Estrogênio + progesterona: sem sangramento = fator uterino; com sangramento = FSH (alto: falência ovariana; normal/baixo: imagem do SNC)", k: "warn"}]}
          ]}
        ], nota: "PAB Saúde das Mulheres 2016, Fluxogramas 2–4 [F]; TelessaúdeRS Ginecologia 2023, Protocolo 11 [F]."},
        {tab: {h: ["Exame / teste", "Como"], r: [
          ["Teste do progestágeno", "Medroxiprogesterona 10 mg/dia por 5–10 dias; positivo se sangrar 3–10 dias após o fim [F]"],
          ["Teste do estrogênio + progesterona", "Etinilestradiol 30 mcg + levonorgestrel por 21 dias; sem sangramento sugere obstrução do trato genital [F]"],
          ["Prolactina", "Normal até 30 ng/mL na mulher não grávida; < 25 costuma excluir; estresse da punção eleva até ~40 – repetir se limítrofe; > 200–250 sugere prolactinoma; fármacos: antipsicóticos, metoclopramida, domperidona, metildopa, ISRS, tricíclicos [F]"],
          ["FSH", "Dois resultados com ≥ 30 dias de intervalo para falência ovariana < 40 anos [F]"]
        ]}, nota: "TelessaúdeRS Ginecologia 2023, Quadros 7 e 8 [F]."},
        {ul: ["Encaminhar: amenorreia primária (> 13 anos sem caracteres sexuais ou > 15 anos com caracteres); teste do progestágeno negativo; insuficiência ovariana < 40 anos; radio/quimioterapia prévia → ginecologia; hiperprolactinemia confirmada sem causa medicamentosa, hipertireoidismo ou doença hipofisária → endocrinologia [F].", "Hipotalâmica: abordar peso, exercício, alimentação e estresse; transtorno alimentar → equipe especializada; saúde óssea [F/C]."]},
        {ir: [["sop", "SOP"], ["mu-sop", "SOP (Saúde da mulher)"], ["climaterio", "Climatério"]]},
        {ref: ["pab_mulher2016", "tsrs_gin2023", "amenorreia", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["pab_mulher2016", "tsrs_gin2023"]});

  // ── 3. Bartholinite
  G("bartholinite", {
    urg: "Celulite que se estende, febre alta, toxemia, imunossupressão ou necrose: urgência. **Massa de Bartholin em mulher > 40 anos**: avaliar neoplasia (biópsia) [C].",
    resumo: "Nódulo **doloroso, unilateral, na parte posterior do lábio maior** (posição de 5 ou 7 horas), por obstrução do ducto da glândula [C]. Cisto pequeno e sem dor: observar. **Abscesso flutuante: drenar** – cateter de Word ou marsupialização recorrem menos que a incisão simples [C]. Antibiótico é adjuvante (celulite, sinais sistêmicos), e testar IST [C].",
    secoes: [
      {t: "Diferenciais e decisão", b: [
        {tab: {h: ["Hipótese", "Pistas"], r: [
          ["Cisto de Bartholin", "Indolor, flutuante, sem eritema [C]"],
          ["Abscesso de Bartholin", "Dor intensa, eritema, calor, flutuação, dificuldade para sentar/andar [C]"],
          ["Furúnculo / foliculite vulvar", "Centrado em pelo, mais anterior [C]"],
          ["Cisto do ducto de Skene / de inclusão", "Localização periuretral ou em cicatriz de episiotomia [C]"],
          ["Carcinoma da glândula de Bartholin", "Massa sólida, endurecida, em mulher > 40 anos ou pós-menopausa [C]"]
        ]}},
        {fluxo: [
          {t: "Nódulo vulvar posterior"},
          {t: "Doloroso e flutuante?", ramos: [
            {r: "Não (cisto)", n: [{t: "Observar; banho de assento; drenar só se crescer ou incomodar", k: "ok"}]},
            {r: "Sim (abscesso)", n: [{t: "Drenagem com cateter de Word ou marsupialização (unidade ou ginecologia)", k: "warn"}]}
          ]},
          {t: "Celulite, febre ou imunossupressão → antibiótico (amoxicilina-clavulanato)", k: "q"},
          {t: "Testes rápidos; NAAT para clamídia/gonococo se houver", k: "ok"},
          {t: "Recorrência → marsupialização; > 40 anos → biópsia", k: "warn"}
        ], nota: "Revisões [C]; amoxicilina-clavulanato, SMX-TMP e metronidazol na REMUME [F]."},
        {ref: ["bartholin", "rename", "remume"]}
      ]}
    ]
  }, {nv: ["Drenagem com cateter de Word ou marsupialização na rede de Betim (UBS ou ginecologia)."]});

  // ── 4. Cisto ovariano – achado em USG
  G("cisto-ovariano", {
    urg: "Dor pélvica **súbita e intensa**, náuseas e vômitos (**torção**), dor com sinais de irritação peritoneal ou instabilidade (**ruptura/hemorragia**), ou teste de gravidez positivo com massa anexial (**ectópica**): urgência [F].",
    resumo: "**USG transvaginal não é exame de rastreamento** [F]. Na menacme, a maioria é **funcional** (folicular ou de corpo lúteo, inclusive hemorrágico) e some em semanas [F]. Decidir pelo **aspecto** (simples × complexo × sólido), **tamanho** e **fase da vida** [F]. **Sólido, complexo** (multilocular, septo espesso, projeções papilares), **sintomático** ou com **ascite** → **oncologia ginecológica** [F]. ACO não faz regredir cisto já existente [C].",
    secoes: [
      {t: "Decidir pelo laudo", b: [
        {tab: {h: ["Achado", "Menacme", "Pós-menopausa"], r: [
          ["Cisto simples < 5 cm", "Funcional: tranquilizar, sem seguimento [F]", "Simples ≤ 3 cm: sem seguimento [C]"],
          ["Simples ou hemorrágico 5–10 cm", "Repetir USG em ~12 semanas (2 exames com 3 meses); ginecologia se crescer ou não regredir [F]", "Simples > 3 e < 10 cm: USG anual; ginecologia se crescer ou não regredir [F]"],
          ["Unilocular ≥ 10 cm", "Ginecologia [F]", "Ginecologia [F]"],
          ["Unilocular não simples com margem lisa", "> 3 cm: 2 USG com 3 meses; ginecologia se persistir [F]", "Ginecologia (inclui cisto hemorrágico) [F]"],
          ["Endometrioma; dermoide sem risco", "Ginecologia [F]", "Ginecologia [F]"],
          ["Sólido, complexo, com ascite, bilateral com septações, sintomas (distensão, saciedade, perda de peso)", "Oncologia ginecológica (CA-125 se disponível) [F]", "Oncologia ginecológica [F]"]
        ]}, nota: "TelessaúdeRS Ginecologia 2023, Protocolo 3 [F]; PAB Saúde das Mulheres 2016, Fluxograma 11 [F]. Ovários 'policísticos' isolados no laudo não fazem diagnóstico de SOP [F]. Se o laudo trouxer O-RADS, seguir a categoria [F]."},
        {fluxo: [
          {t: "Massa anexial na USG"},
          {t: "Dor aguda intensa, peritonismo ou β-hCG positivo?", ramos: [
            {r: "Sim", n: [{t: "Urgência", k: "stop"}]},
            {r: "Não", n: [{t: "Aspecto"}]}
          ]},
          {t: "Aspecto", ramos: [
            {r: "Simples / funcional", n: [{t: "Conforme tamanho e idade (tabela)", k: "ok"}]},
            {r: "Complexo / sólido / ascite", n: [{t: "Oncologia ginecológica", k: "stop"}]}
          ]}
        ], nota: "PAB 2016 e TelessaúdeRS 2023 [F]."},
        {ref: ["tsrs_gin2023", "pab_mulher2016", "oradss"]}
      ]}
    ]
  }, {fontes: ["tsrs_gin2023", "pab_mulher2016"]});

  // ── 5. Climatério
  G("climaterio", {
    urg: "**Sangramento após 12 meses sem menstruar** = investigar endométrio (USG; espessura ≥ 5 mm ou sangramento → ginecologia/oncologia) antes de qualquer hormônio [F].",
    resumo: "Fogachos, suores noturnos, alteração do sono, secura vaginal, dispareunia, sintomas urinários e de humor na transição menopausal [F/C]. Estilo de vida para todas [F]. **TH é o tratamento mais eficaz** para sintomas vasomotores em mulheres **< 60 anos ou < 10 anos de menopausa** sem contraindicação [C]; com útero, sempre associar progestágeno [F/C]. Contraindicações absolutas: **câncer de mama ou de endométrio, doença hepática grave, sangramento não esclarecido, tromboembolismo, porfiria** [F]. Secura vaginal isolada: estrogênio vaginal ou lubrificante [F].",
    secoes: [
      {t: "Tratar pelos sintomas", b: [
        {tab: {h: ["Sintoma", "Opções"], r: [
          ["Vasomotores", "Roupas leves, ambiente fresco, sem fumo, álcool e cafeína, perda de peso [F]; TH sistêmica [F]; não hormonal: ISRS/IRSN (paroxetina, fluoxetina, venlafaxina), clonidina, gabapentina [F]"],
          ["Urogenitais", "Estrogênio vaginal (estriol ou promestrieno têm absorção desprezível) ou lubrificantes/hidratantes à base de água ou silicone [F]"],
          ["Sono", "Tratar os fogachos; higiene do sono [F]"],
          ["Humor", "Rastrear depressão e ansiedade; atividade social e física [F]"],
          ["Ciclos irregulares antes da menopausa", "Métodos hormonais (respeitando a elegibilidade) [F]"]
        ]}, nota: "TelessaúdeRS Ginecologia 2023, Quadro 5; PAB Saúde das Mulheres 2016, Parte 6 [F]."},
        {tab: {h: ["TH – pontos práticos (PAB 2016, Quadro 5)", ""], r: [
          ["Início", "Evitar começar após 10 anos de menopausa ou > 59 anos (risco cardiovascular) [F]"],
          ["Via", "Oral ou transdérmica conforme preferência e comorbidades; transdérmica com obesidade, HAS, enxaqueca ou risco de TEV [F/C]"],
          ["Avaliação inicial", "Clínica, PA, mama; mamografia se a última tem > 1 ano; USG transvaginal se sangramento anormal; citologia em dia [F]"],
          ["Seguimento", "2–3 meses, 6 meses e anual (sangramento, PA, peso, mama, mamografia anual em uso de TH) [F]"],
          ["Contraindicação relativa", "HAS e DM não controlados, endometriose, miomatose [F]"]
        ]}, nota: "Divergência: o PAB 2016 reserva a TH para quando as medidas não hormonais falham; o posicionamento da NAMS 2022 trata a TH como 1ª linha nas mulheres elegíveis < 60 anos ou < 10 anos de menopausa [C]. O PAB 2016 sugere em geral até 5 anos; a NAMS individualiza a duração [F/C]."},
        {fluxo: [
          {t: "Sintomas do climatério"},
          {t: "Sangramento pós-menopausa?", ramos: [
            {r: "Sim", n: [{t: "Investigar endométrio antes de tratar", k: "stop"}]},
            {r: "Não", n: [{t: "Contraindicação à TH?"}]}
          ]},
          {t: "Escolha", ramos: [
            {r: "Sem contraindicação, < 60 anos/< 10 anos", n: [{t: "TH (com útero: + progestágeno) – decisão compartilhada", k: "ok"}]},
            {r: "Contraindicação ou preferência", n: [{t: "ISRS/IRSN, clonidina ou gabapentina", k: "ok"}]}
          ]},
          {t: "Persistência após 6 meses de tratamento otimizado → ginecologia", k: "warn"}
        ], nota: "TelessaúdeRS Ginecologia 2023, Protocolo 8 [F]."},
        {ir: [["mu-climaterio", "Climatério (Saúde da mulher)"], ["sua", "Sangramento uterino anormal"]]},
        {ref: ["pab_mulher2016", "tsrs_gin2023", "menopausa", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["pab_mulher2016", "tsrs_gin2023"]});

  // ── 6. DIP
  G("dip", {
    urg: "**Internar** (Quadro 43): abscesso tubo-ovariano, gravidez, sem resposta em 72 h, intolerância ao antibiótico oral ou dificuldade de seguimento, estado geral grave com náuseas, vômitos e febre, ou dúvida com emergência cirúrgica (apendicite, ectópica) [F].",
    resumo: "Pensar em DIP em mulher sexualmente ativa com **dor pélvica**, dispareunia, corrimento, spotting ou febre [F]. **Tratar ao menor sinal**, sem esperar exames [F]: **ceftriaxona 500 mg IM + doxiciclina 100 mg 2×/dia 14 dias + metronidazol 500 mg 2×/dia 14 dias** [F]. Melhora esperada em **72 h** [F]. Parcerias tratadas [F].",
    secoes: [
      {t: "Critérios (Quadro 42)", b: [
        {tab: {h: ["Tipo", "Critérios"], r: [
          ["Maiores", "Dor no hipogástrio; dor à palpação dos anexos; dor à mobilização do colo [F]"],
          ["Menores", "Temperatura axilar > 37,5 °C; secreção vaginal/endocervical anormal; massa pélvica; > 10 leucócitos/campo na endocérvice; leucocitose; PCR ou VHS elevados; gonococo, clamídia ou micoplasma comprovados [F]"],
          ["Elaborados", "Endometrite na histologia; abscesso tubo-ovariano ou no fundo de saco na imagem; laparoscopia [F]"]
        ]}, nota: "Diagnóstico = **3 maiores + 1 menor**, ou **1 elaborado** (PCDT IST 2022) [F]. O CDC 2021 trata com um único achado mínimo (dor à mobilização do colo, uterina ou anexial) para não perder casos – limiar mais baixo [C]."},
        {tab: {h: ["Diferenciais", ""], r: [["Gravidez ectópica, apendicite, ITU/pielonefrite, litíase ureteral, torção de cisto ou de mioma, ruptura de cisto, endometrioma roto, diverticulite [F]", "β-hCG em toda mulher em idade fértil [C]"]]}}
      ]},
      {t: "Tratar", b: [
        {tab: {h: ["Regime (Quadro 44)", "Esquema"], r: [
          ["Ambulatorial – 1ª opção", "Ceftriaxona 500 mg IM dose única + doxiciclina 100 mg 2×/dia 14 dias + metronidazol 250 mg 2 comprimidos 2×/dia 14 dias [F]"],
          ["Ambulatorial – 2ª opção", "Cefotaxima 500 mg IM + doxiciclina + metronidazol [F]"],
          ["Hospitalar", "Ceftriaxona 1 g IV/dia + doxiciclina + metronidazol 400 mg IV 12/12 h; ou clindamicina + gentamicina; ou ampicilina-sulbactam + doxiciclina – total 14 dias [F]"]
        ]}, nota: "Doxiciclina contraindicada na gravidez (gestante com DIP é internada) [F]. Evitar álcool durante e até 24 h após o metronidazol (PCDT) [F]. Monoterapia não é recomendada [F]."},
        {fluxo: [
          {t: "Dor pélvica em mulher sexualmente ativa"},
          {t: "β-hCG positivo ou critério de internação?", ramos: [
            {r: "Sim", n: [{t: "Urgência/internação", k: "stop"}]},
            {r: "Não", n: [{t: "Esquema ambulatorial hoje; testes rápidos; NAAT se houver", k: "warn"}]}
          ]},
          {t: "Reavaliar em 72 h: sem melhora → internação", k: "warn"},
          {t: "DIU pode ser mantido; retirar se não melhorar em 48–72 h", k: "q"},
          {t: "Parcerias dos últimos 60 dias tratadas; abstinência até a cura", k: "ok"}
        ], nota: "PCDT IST 2022, Quadros 42–44 e seção 10.4 [F]; DIU e parcerias: TelessaúdeRS/PCDT [F]."},
        {ref: ["pcdt_ist2022", "tele_dip", "cdc_dip", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["pcdt_ist2022"], mud: "critérios diagnósticos (3 maiores + 1 menor), critérios de internação e esquemas do PCDT IST 2022 conferidos no texto integral, com a divergência do limiar do CDC"});

  // ── 7. Dismenorreia primária
  G("dismenorreia", {
    resumo: "Cólica em baixo ventre que começa **com a menstruação ou pouco antes**, dura 1–3 dias, pode irradiar para lombar e coxas, com náuseas e cefaleia; começa 6–12 meses após a menarca, com ciclos ovulatórios [C]. **AINE em horário fixo**, começando na véspera ou no 1º dia [F/C]. Se não bastar ou se quiser contracepção: **ACO** (contínuo funciona melhor) [C]. Sinais de **dismenorreia secundária** → investigar [F].",
    secoes: [
      {t: "Primária × secundária", b: [
        {tab: {h: ["Pista de causa secundária", "Pensar em"], r: [
          ["Começou após anos de menstruação sem dor, piora progressiva [C]", "Endometriose, adenomiose [F/C]"],
          ["Dispareunia profunda, dor que irradia para o ânus, alteração intestinal cíclica [F]", "Endometriose [F]"],
          ["Fluxo aumentado, útero aumentado [F]", "Mioma, adenomiose [F]"],
          ["Febre, corrimento, dor à mobilização do colo [F]", "DIP [F]"],
          ["Dor desde a menarca com obstrução do fluxo", "Malformação mülleriana [C]"],
          ["Usuária de DIU de cobre", "Dismenorreia esperada nos primeiros 3 meses; AINE [F]"]
        ]}}
      ]},
      {t: "Tratar", b: [
        {tab: {h: ["Opção", "Dose (PAB 2016)"], r: [
          ["Ibuprofeno", "600 mg 8/8 h [F]"],
          ["Diclofenaco", "50 mg 8/8 h [F]"],
          ["Antiespasmódico/analgésico", "Escopolamina 10 mg 6/6 h; dipirona ou paracetamol 500 mg 6/6 h [F]"],
          ["ACO / progestágeno", "Reduz a dor, sobretudo contínuo ou estendido; checar elegibilidade [C]"]
        ]}, nota: "REMUME: ibuprofeno 600 mg, butilescopolamina 10 mg, dipirona, paracetamol, ACO levonorgestrel + etinilestradiol, noretisterona 0,35 mg e medroxiprogesterona [F]."},
        {fluxo: [
          {t: "Cólica menstrual"},
          {t: "Sinal de causa secundária?", ramos: [
            {r: "Sim", n: [{t: "Exame ginecológico, USG; ver endometriose/mioma/DIP", k: "warn"}]},
            {r: "Não", n: [{t: "AINE desde a véspera, horário fixo, 2–3 dias; calor local, exercício", k: "ok"}]}
          ]},
          {t: "Sem resposta em 3 ciclos ou deseja contracepção → ACO (contínuo) ou progestágeno", k: "ok"},
          {t: "Falha de AINE + hormonal por > 6 meses → tratar como endometriose provável", k: "warn"}
        ], nota: "PAB 2016 [F]; Cochrane 2015 [C]; PCDT Endometriose (tratamento empírico) [F]."},
        {ir: [["endometriose", "Endometriose"], ["miomas", "Miomas"]]},
        {ref: ["pab_mulher2016", "cochrane_dismen", "pcdt_endo2025", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["pab_mulher2016"]});

  // ── 8. Endometriose
  G("endometriose", {
    resumo: "Dismenorreia **progressiva**, dor pélvica crônica, **dispareunia de profundidade**, alterações intestinais ou urinárias cíclicas, infertilidade [F]. **Não precisa de laparoscopia para começar a tratar** [F]. 1ª linha no SUS: **ACO, desogestrel, medroxiprogesterona ou DIU-LNG** (este se contraindicação ou não adesão ao ACO), com AINE [F]. **CA-125 não serve** para diagnóstico [F]. Análogos de GnRH são 2ª linha, após confirmação laparoscópica [F].",
    secoes: [
      {t: "Reconhecer", b: [
        {ul: [
          "Exame: dor focal no fundo de saco, nódulos no fórnice posterior, massa anexial (endometrioma), útero fixo ou desviado [F].",
          "História familiar; sangramento cíclico nas fezes ou urina; dor irradiada para lombossacra ou ânus [F].",
          "USG transvaginal (com preparo intestinal se suspeita de doença profunda); não descarta se normal [F/C]."
        ]},
        {det: {t: "Fisiopatologia", b: ["Tecido semelhante ao endométrio fora do útero (peritônio, ovários, septo retovaginal), estrogênio-dependente, que sangra e inflama a cada ciclo, causando dor, aderências e fibrose. A supressão hormonal da ovulação e da menstruação reduz a atividade das lesões [F/C]."]}}
      ]},
      {t: "Tratar (PCDT, Quadro 1)", b: [
        {tab: {h: ["1ª linha", "Esquema"], r: [
          ["Etinilestradiol 0,03 + levonorgestrel 0,15 mg", "1 comprimido/dia por 21 dias com pausa de 7 (PCDT) [F]; uso contínuo também é prática usual [C]"],
          ["Medroxiprogesterona oral", "10 mg VO 3×/dia, contínuo [F]"],
          ["Medroxiprogesterona IM", "150 mg a cada 12–13 semanas (máx. 91 dias) [F]"],
          ["Desogestrel", "75 mcg/dia contínuo [F]"],
          ["DIU-LNG 52 mg", "Se contraindicação ou não adesão ao ACO; 3 ou 5 anos conforme o dispositivo [F]"]
        ]}, nota: "Critério para tratamento empírico: dismenorreia ou dispareunia progressivas > 6 meses sem resposta a AINE, ou dor pélvica crônica com imagem/exame compatível [F]. Progestágenos isolados servem para lactantes, obesas, tabagistas, hipertensas e com risco de trombose [F]. O PAB 2016 cita noretisterona 10 mg/dia contínua; na REMUME só há noretisterona 0,35 mg (dose contraceptiva) [F]."},
        {trio: {ideal: "ACO, progestágenos (dienogeste, desogestrel) ou DIU-LNG com AINE; eficácias semelhantes entre si.", sus: "PCDT 2025: ACO, medroxiprogesterona, desogestrel e DIU-LNG. REMUME Betim: ACO, medroxiprogesterona oral e IM, noretisterona 0,35 mg; desogestrel e DIU-LNG para endometriose não confirmados na rede local.", ponte: "Começar com ACO ou medroxiprogesterona da REMUME; perguntar à coordenação/farmácia sobre desogestrel e DIU-LNG pelo PCDT; dienogeste por compra se necessário."}},
        {fluxo: [
          {t: "Dor sugestiva de endometriose"},
          {t: "Desejo de gestar agora ou infertilidade?", ramos: [
            {r: "Sim", n: [{t: "Ginecologia/reprodução", k: "warn"}]},
            {r: "Não", n: [{t: "AINE + hormonal de 1ª linha; reavaliar em 3–6 meses", k: "ok"}]}
          ]},
          {t: "Sem resposta após 6 meses, endometrioma, doença profunda ou imagem alterada → ginecologia (análogos de GnRH só com confirmação)", k: "warn"}
        ], nota: "PCDT Endometriose (Relatório 1050) [F]; TelessaúdeRS Ginecologia 2023, Protocolo 7 [F]."},
        {ir: [["mu-endometriose", "Endometriose (Saúde da mulher)"], ["dismenorreia", "Dismenorreia"]]},
        {ref: ["pcdt_endo2025", "tsrs_gin2023", "pab_mulher2016", "eshre_endo", "conitec_diulng", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["pcdt_endo2025", "tsrs_gin2023"], mud: "critérios de tratamento empírico e esquemas do PCDT Endometriose (Relatório CONITEC 1050, 2025)", nv: ["Oferta de desogestrel e DIU-LNG pelo PCDT Endometriose em Betim; publicação final do PCDT (o app usa o Relatório 1050)."]});
  const en = get("endometriose");
  if (en) {
    en.nv = (en.nv || []).filter(x => !/atualização do PCDT: confirmar/.test(x));
    (en.rx || []).forEach(r => { if (r && typeof r === "object" && r.nota) r.nota = r.nota.replace("DIU-LNG e desogestrel foram incorporados ao SUS para endometriose em 2025 (notícia; depende de atualização do PCDT e da oferta local).", "DIU-LNG (Portaria SECTICS 41/2025) e desogestrel constam do PCDT Endometriose (Relatório CONITEC 1050, set/2025); oferta local a confirmar."); });
  }

  // ── 9. Mastite
  G("mastite", {
    urg: "Área **flutuante** (abscesso: USG e drenagem), sinais de **sepse**, necrose de pele, ou mastite **bilateral** ou em quem não amamenta (pensar em mastite inflamatória/câncer): avaliação no mesmo dia [F/C].",
    resumo: "Área da mama **dolorosa, vermelha, quente e edemaciada**, com ou sem febre; é um espectro que vai da inflamação à infecção bacteriana [F/C]. **Não suspender a amamentação** [F]. Repouso, líquidos, analgésico/AINE, gelo, começar pela mama não afetada [F/C]. Antibiótico se febre ou sintomas que **não melhoram em 24–48 h**, fissura infectada ou piora [C]: **cefalexina 500 mg 6/6 h por 10 dias** [F]. Sem regressão em 48 h: pensar em **abscesso** [F].",
    secoes: [
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Mama dolorosa, vermelha, quente, ± febre"},
          {t: "Flutuação ou sepse?", ramos: [
            {r: "Sim", n: [{t: "Abscesso: USG, drenagem, antibiótico; suspender só na mama afetada até drenar", k: "stop"}]},
            {r: "Não", n: [{t: "Manter amamentação, analgésico/AINE, frio, corrigir pega"}]}
          ]},
          {t: "Febre ou sem melhora em 24–48 h?", ramos: [
            {r: "Sim", n: [{t: "Antibiótico 10 dias", k: "warn"}]},
            {r: "Não", n: [{t: "Medidas de suporte; retorno em 48 h", k: "ok"}]}
          ]},
          {t: "Sem regressão em 48 h de antibiótico → abscesso? USG", k: "warn"}
        ], nota: "PAB Saúde das Mulheres 2016, Quadro 15 [F]; espectro e suporte: ABM 2022 [C]."},
        {tab: {h: ["Antibiótico (PAB 2016)", "Dose"], r: [
          ["Cefalexina", "500 mg 6/6 h por 10 dias [F]"],
          ["Amoxicilina", "500 mg 8/8 h por 10 dias [F]"],
          ["Amoxicilina + clavulanato", "500/125 mg 8/8 h por 10 dias [F]"],
          ["Eritromicina (alergia)", "500 mg 6/6 h por 10 dias [F]"]
        ]}, nota: "Divergência: o PAB 2016 orienta 'esvaziar adequadamente as mamas' com ordenha; o protocolo da ABM (2022) desaconselha esvaziar além da demanda do bebê ou usar bomba em excesso, porque piora a inflamação [C]. O app segue a ABM: amamentar em livre demanda, sem ordenha extra além do alívio. Clindamicina 300 mg está na REMUME para alergia; eritromicina não [F]."},
        {ref: ["pab_mulher2016", "abm_mastite", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["pab_mulher2016"]});

  // ── 10. Miomas
  G("miomas", {
    urg: "Sangramento com **anemia sintomática** (dispneia, taquicardia, hipotensão) ou instabilidade: urgência [F]. **Crescimento após a menopausa**: avaliar sarcoma [C].",
    resumo: "**Mais de 50% são assintomáticos** e não precisam de tratamento nem de USG seriada [F]. Sangramento costuma vir de mioma **submucoso** (ou intramural com componente intracavitário) [F]. Miomas raramente causam dor pélvica ou infertilidade – procurar outras causas [F]. Tratar o sangramento como SUA por 3 meses; encaminhar se refratário, submucoso, compressivo ou se deseja gestar [F].",
    secoes: [
      {t: "Decidir (Fluxograma 12 e Protocolo 4)", b: [
        {fluxo: [
          {t: "USG com miomas: tamanho, número, volume uterino, localização"},
          {t: "Sintomática?", ramos: [
            {r: "Não", n: [{t: "Tranquilizar ('não é câncer'); sem USG de controle; orientar sintomas", k: "ok"}]},
            {r: "Sim", n: [{t: "Qual sintoma?"}]}
          ]},
          {t: "Sintoma", ramos: [
            {r: "Sangramento aumentado", n: [{t: "Manejo clínico de SUA por 3 meses + corrigir anemia", k: "ok"}]},
            {r: "Compressão (urina, intestino)", n: [{t: "Ginecologia", k: "warn"}]},
            {r: "Dor ou infertilidade", n: [{t: "Investigar outras causas (endometriose, anovulação, aderências)", k: "q"}]}
          ]},
          {t: "Ginecologia: submucoso com sangramento; intramural/subseroso refratário a 3 meses; deseja gestar; compressivo", k: "warn"}
        ], nota: "PAB Saúde das Mulheres 2016, Fluxograma 12 [F]; TelessaúdeRS Ginecologia 2023, Protocolo 4 [F]."},
        {ul: ["Na decisão cirúrgica, considerar o tempo até a menopausa, quando os sintomas regridem [F].", "DIU com mioma submucoso que deforma a cavidade: maior risco de expulsão [C]."]},
        {ir: [["sua", "Sangramento uterino anormal"], ["mu-sua", "SUA (Saúde da mulher)"]]},
        {ref: ["pab_mulher2016", "tsrs_gin2023", "nice_hmb", "conitec_diulng"]}
      ]}
    ]
  }, {fontes: ["pab_mulher2016", "tsrs_gin2023"]});

  // ── 11. Náuseas e vômitos da gestação
  G("nvg", {
    urg: "**Hiperêmese**: vômitos persistentes com **perda > 5% do peso, desidratação, cetonúria ou distúrbio eletrolítico**, ou que não respondem ao tratamento: maternidade de referência (hidratação venosa e **tiamina** antes da glicose) [F/C].",
    resumo: "Comum no 1º trimestre (até 90%), começa por volta da 5ª–9ª semana e costuma melhorar **após a 16ª semana** [F]. Orientação alimentar e apoio resolvem a maioria [F]: comer pouco e várias vezes, ao acordar, alimentos secos, evitar gordura, cheiros fortes e jejum [F]. Se persistir: **metoclopramida**, **dimenidrinato + piridoxina** ou **ondansetrona** [F]. Vômitos que **começam após 10 semanas** ou com dor/febre: procurar outra causa [C].",
    secoes: [
      {t: "Diferenciais", b: [
        {tab: {h: ["Hipótese", "Pistas"], r: [
          ["ITU / pielonefrite", "Disúria, febre, dor lombar [C]"],
          ["Gastroenterite, hepatite, pancreatite, colecistite", "Diarreia, icterícia, dor abdominal, febre [C]"],
          ["Gestação molar ou múltipla", "β-hCG muito alto, útero maior que a IG, sangramento – USG [C]"],
          ["Hipertireoidismo", "Taquicardia, tremor, bócio (hiperêmese pode dar TSH baixo transitório) [C]"],
          ["Pré-eclâmpsia/HELLP", "Náuseas e epigastralgia na 2ª metade com PA alta [F]"],
          ["Cetoacidose, uso de cannabis (hiperêmese canabinoide)", "Glicemia; banhos quentes aliviam [C]"]
        ]}}
      ]},
      {t: "Tratar", b: [
        {fluxo: [
          {t: "Gestante com náuseas e vômitos"},
          {t: "Sinais de alerta (queda do estado geral, desidratação, distúrbio metabólico)?", ramos: [
            {r: "Sim", n: [{t: "Hiperêmese: hospital", k: "stop"}]},
            {r: "Não", n: [{t: "Orientação alimentar e apoio"}]}
          ]},
          {t: "Persistem?", ramos: [
            {r: "Sim", n: [{t: "Antiemético oral; reavaliar em 1 semana", k: "warn"}]},
            {r: "Não", n: [{t: "Manter orientação", k: "ok"}]}
          ]}
        ], nota: "PAB Saúde das Mulheres 2016, Fluxograma 2 (Parte 2) [F]; Protocolo Pré-natal de Betim 2024, item 3.10.1 [F]."},
        {tab: {h: ["Medicamento", "Dose", "Observação"], r: [
          ["Metoclopramida", "10 mg 8/8 h VO (ou IM/IV na unidade) [F]", "REMUME (oral e injetável) [F]"],
          ["Dimenidrinato 50 mg + piridoxina 10 mg", "6/6 h, máx. 400 mg/dia de dimenidrinato [F]", "Não consta na REMUME [F]"],
          ["Ondansetrona", "Citada pelo protocolo de Betim [F]", "REMUME só injetável (4 mg/2 mL) [F]; dose oral e risco no 1º trimestre: [NV]/[C]"],
          ["Piridoxina ± doxilamina", "1ª linha no ACOG [C]", "Não consta na REMUME [F]"]
        ]}},
        {ref: ["pab_mulher2016", "betim_pn2024", "acog_nvg", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["pab_mulher2016", "betim_pn2024"]});

  // ── 12. PA elevada na gestante / pré-eclâmpsia
  G("pa-gestante", {
    urg: "**PA ≥ 160/110** (confirmada em 15 min) **ou** sinais de iminência de eclâmpsia (cefaleia, escotomas, epigastralgia/dor em hipocôndrio direito, náuseas e vômitos, hiper-reflexia), dor torácica, dispneia ou convulsão: **sulfato de magnésio + anti-hipertensivo de ação rápida + SAMU para a maternidade** [F].",
    resumo: "Após 20 semanas, **PA ≥ 140/90** em gestante antes normotensa = hipertensão gestacional ou **pré-eclâmpsia** (com proteinúria ou lesão de órgão-alvo, mesmo sem proteinúria) [F]. Em Betim, **pré-eclâmpsia vai à maternidade de referência** para avaliação; hipertensão gestacional com sinal de alarme vai ao **CMI** [F]. A meta na crise é **reduzir 15–25% na 1ª hora**, sem quedas bruscas [F].",
    secoes: [
      {t: "Classificar (Betim 2024, Quadro 18; MS 2022)", b: [
        {tab: {h: ["Condição", "Critério", "Conduta na APS"], r: [
          ["Hipertensão crônica", "Antes de 20 semanas ou persiste > 12 semanas pós-parto [F]", "Ajustar anti-hipertensivo (trocar fetotóxicos já), aguardar PNAR mantendo vínculo, PA 2–3×/semana [F]"],
          ["Hipertensão gestacional", "≥ 20 semanas, sem sinais de pré-eclâmpsia, sem proteinúria [F]", "Tratar se indicado, PA diária, consultas a cada ≤ 7 dias, proteinúria em fita semanal, sinais de alarme → CMI [F]"],
          ["Pré-eclâmpsia", "≥ 20 semanas com proteinúria e/ou lesão de órgão-alvo [F]", "Maternidade de referência para avaliação; depois PNAR + eSF; com sinais de gravidade, internada até o parto [F]"],
          ["Pré-eclâmpsia com sinais de gravidade", "PA ≥ 160/110; HELLP; iminência de eclâmpsia; eclâmpsia; edema agudo de pulmão; dor torácica; creatinina ≥ 1,2 [F]", "Sulfato de magnésio, anti-hipertensivo rápido, remoção [F]"],
          ["Eclâmpsia", "Convulsão sem outra causa [F]", "SAMU; via aérea, O₂, acesso venoso; sulfato de magnésio [F]"]
        ]}, nota: "Protocolo Pré-natal e Puerpério de Betim 2024, Quadro 18 [F]; Manual de Gestação de Alto Risco 2022, item 11.5 [F]."}
      ]},
      {t: "Agir na crise", b: [
        {tab: {h: ["Sulfato de magnésio (MS 2022, Quadro 7)", "Como"], r: [
          ["Pritchard (sem bomba / transporte)", "Ataque: 4 g IV (8 mL de MgSO₄ 50% + 12 mL de água destilada em 5–10 min) **+** 10 g IM (10 mL de MgSO₄ 50% em cada glúteo); manutenção 5 g IM 4/4 h [F]"],
          ["Zuspan", "4 g IV em 5–10 min + 1–2 g/h em bomba (10 mL de MgSO₄ 50% em 240 mL de SF: 50 mL/h = 1 g/h) [F]"],
          ["Manter se", "Diurese ≥ 25 mL/h, reflexo patelar presente, FR ≥ 12 [F]"],
          ["Antídoto", "Gluconato de cálcio 10% 10 mL (1 g) IV lento [F]"]
        ]}, nota: "IM: maior risco de abscesso/hematoma; não usar na HELLP com plaquetopenia [F]. Divergência: a receita do app traz só a parte IM (10 g) quando não há acesso venoso; o esquema de Pritchard completo inclui 4 g IV [F]. O critério de suspensão do app (FR < 16) é mais conservador que o do manual (FR ≥ 12) [F]."},
        {tab: {h: ["Anti-hipertensivo rápido (MS 2022, Quadro 2)", "Dose"], r: [
          ["Nifedipino 10 mg VO", "10 mg; repetir a cada 20–30 min; máx. 30 mg; nunca sublingual [F/C]"],
          ["Hidralazina 20 mg/mL IV", "Diluir 1 mL em 19 mL (1 mg/mL); 5 mg IV a cada 20 min; máx. 30 mg [F]"]
        ]}, nota: "REMUME Betim: sulfato de magnésio 50% (10 mL), gluconato de cálcio 10%, hidralazina 25 mg oral e metildopa 250/500 mg; **nifedipino e hidralazina IV não constam** [F]."},
        {fluxo: [
          {t: "Gestante ≥ 20 semanas com PA ≥ 140/90 (2 medidas)"},
          {t: "PA ≥ 160/110 ou sintomas de gravidade?", ramos: [
            {r: "Sim", n: [{t: "Sulfato de magnésio + anti-hipertensivo rápido se disponível + SAMU", k: "stop"}]},
            {r: "Não", n: [{t: "Proteinúria (fita), sintomas, exames (hemograma, plaquetas, creatinina, TGO, LDH)"}]}
          ]},
          {t: "Pré-eclâmpsia?", ramos: [
            {r: "Sim", n: [{t: "Maternidade de referência no mesmo dia", k: "warn"}]},
            {r: "Não (gestacional)", n: [{t: "PA diária, consulta ≤ 7 dias, PNAR; alarme → CMI", k: "ok"}]}
          ]}
        ], nota: "Betim 2024 e MS 2022 [F]."},
        {ir: [["pn-has", "Hipertensão no pré-natal (prevenção com AAS e cálcio)"]]},
        {ref: ["mgar2022", "betim_pn2024", "iff_eclampsia", "pab_mulher2016", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["mgar2022", "betim_pn2024"], mud: "classificação e condutas do Protocolo de Betim 2024 (Quadro 18, CMI e maternidade) e esquemas de sulfato de magnésio e anti-hipertensivos do Manual de Gestação de Alto Risco 2022", nv: ["Telefone/fluxo do CMI e da maternidade de referência de Betim; disponibilidade de nifedipino e hidralazina IV nas UBS."]});
  const pg = get("pa-gestante");
  if (pg) pg.nv = (pg.nv || []).filter(x => !/Doses de anti-hipertensivos: conferir protocolo da maternidade/.test(x));

  // ── 13. Prolapso genital
  G("prolapso", {
    resumo: "Sensação de **'bola' na vagina**, peso que piora no fim do dia, dificuldade para urinar ou evacuar (precisa reduzir com o dedo) [C]. **A maioria não precisa de tratamento** [F]. Para todas: tratar constipação e tosse, parar de fumar, perder peso, evitar carregar peso, **fisioterapia pélvica** [F]. **Pessário** é alternativa à cirurgia [C]. Encaminhar se **sintomático com desejo cirúrgico**, ulceração, retenção urinária [F].",
    secoes: [
      {t: "Avaliar e decidir", b: [
        {ul: [
          "Exame em repouso e com esforço (Valsalva), deitada e de pé: parede anterior (cistocele), posterior (retocele), apical (útero/cúpula); se ultrapassa o hímen; erosão ou sangramento; se é redutível [F/C].",
          "Associação com incontinência urinária e com atrofia genital [F]."
        ]},
        {fluxo: [
          {t: "Prolapso genital"},
          {t: "Úlcera, sangramento, retenção urinária ou hidronefrose?", ramos: [
            {r: "Sim", n: [{t: "Ginecologia/urologia com prioridade", k: "warn"}]},
            {r: "Não", n: [{t: "Sintomático?"}]}
          ]},
          {t: "Sintomas", ramos: [
            {r: "Não", n: [{t: "Orientar; sem tratamento", k: "ok"}]},
            {r: "Sim", n: [{t: "Fisioterapia pélvica (16 semanas), medidas de estilo de vida, estrogênio vaginal se atrofia; pessário", k: "ok"}]}
          ]},
          {t: "Sintomático com desejo de cirurgia → ginecologia", k: "warn"}
        ], nota: "TelessaúdeRS Ginecologia 2023, Protocolo 5 [F]; NICE NG123 [C]."},
        {ir: [["incontinencia", "Incontinência urinária"]]},
        {ref: ["tsrs_gin2023", "prolapso", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["tsrs_gin2023"], nv: ["Protocolo de fisioterapia em uroginecologia de Betim (Circular DIOP 41/2022, na base clínica): fluxo de encaminhamento a conferir."]});

  // ── 14. Sangramento no 1º trimestre
  G("sangramento-1tri", {
    urg: "**Instabilidade**, sangramento intenso, dor abdominal forte, dor no ombro, síncope ou abdome com irritação peritoneal: **ectópica rota até prova em contrário** – acesso venoso, SAMU, maternidade [F/C].",
    resumo: "Na 1ª metade da gestação, **todo sangramento é referenciado à urgência obstétrica** (Fluxograma 9) para afastar **abortamento, gravidez ectópica** e outras causas [F]. Fazer **exame especular** (não toque) para ver colo, pólipo, cervicite, lesão [F]. Saber o **Rh**: Rh negativo não sensibilizada precisa de imunoglobulina anti-D conforme a maternidade [C]. Repouso não muda o desfecho [C]. Acolher o luto se houver perda [C].",
    secoes: [
      {t: "Diferenciais", b: [
        {tab: {h: ["Hipótese", "Pistas"], r: [
          ["Ameaça de abortamento", "Sangramento leve, colo fechado, embrião vivo na USG [C]"],
          ["Abortamento inevitável/incompleto/completo", "Colo aberto, cólicas, eliminação de tecido [C]"],
          ["Gravidez ectópica", "Dor unilateral, sangramento escasso, útero vazio com β-hCG acima da zona discriminatória, massa anexial; fatores: DIP, ectópica prévia, cirurgia tubária, DIU, reprodução assistida [C]"],
          ["Doença trofoblástica", "Sangramento, útero maior que a IG, hiperêmese, β-hCG muito alto [C]"],
          ["Causas cervicais/vaginais", "Pólipo, ectopia, cervicite, trauma – especular [F]"],
          ["Sangramento de implantação", "Pequeno, por volta da data esperada da menstruação [C]"]
        ]}}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Gestante com sangramento"},
          {t: "Sangramento intenso ou instabilidade?", ramos: [
            {r: "Sim", n: [{t: "Suporte (hidratação venosa) e emergência obstétrica", k: "stop"}]},
            {r: "Não", n: [{t: "1ª metade da gestação?"}]}
          ]},
          {t: "Idade gestacional", ramos: [
            {r: "1ª metade", n: [{t: "Referenciar à emergência obstétrica: abortamento, ectópica, outras causas", k: "warn"}]},
            {r: "2ª metade", n: [{t: "Com dor: DPP; sem dor: placenta prévia (USG, alto risco)", k: "warn"}]}
          ]}
        ], nota: "PAB Saúde das Mulheres 2016, Fluxograma 9 (Parte 2) [F]."},
        {ul: ["Paracetamol para dor; evitar AINE até definir a localização [C].", "Após perda: acolhimento, sinais de alarme (febre, sangramento intenso, dor), contracepção ou planejamento [F/C]."]},
        {ir: [["teste-gravidez-positivo", "Teste de gravidez positivo"], ["pn-rh", "Rh negativo no pré-natal"]]},
        {ref: ["pab_mulher2016", "sangramento_1tri", "betim_pn2024"]}
      ]}
    ]
  }, {fontes: ["pab_mulher2016"]});

  // ── 15. SOP
  G("sop", {
    resumo: "Diagnóstico pelos **critérios de Rotterdam**: 2 de 3 – **ciclos ≤ 9/ano**, **hiperandrogenismo** clínico (acne, hirsutismo, alopecia) ou laboratorial, **morfologia policística** na USG – **depois de excluir** outras causas (TSH, prolactina, 17-OH-progesterona, FSH) [F]. Em **adolescentes**, exigir os **3 critérios** (ou adiar o diagnóstico e tratar os sintomas) [F]. Rastrear risco metabólico [F]. Tratamento: estilo de vida, **ACO** (ciclos e androgenismo), **metformina** (metabólico), antiandrogênico se hirsutismo persistir [F].",
    secoes: [
      {t: "Critérios e exclusões", b: [
        {tab: {h: ["Critério (PCDT 2019)", "Detalhe"], r: [
          ["Ciclos", "9 ou menos por ano [F]"],
          ["Hiperandrogenismo", "Acne, hirsutismo, alopecia androgênica ou testosterona total/androstenediona/SDHEA elevados [F]"],
          ["Ovários policísticos", "> 12 folículos de 2–9 mm em um ovário ou volume ≥ 10 cm³; com aparelhos de alta resolução o corte sobe para > 25 folículos [F] (a diretriz internacional de 2023 usa ≥ 20 [C])"]
        ]}, nota: "Ovário 'policístico' isolado no laudo não é SOP [F]. Endocrinologia se virilização, testosterona > 2 DP do valor de referência, hirsutismo grave ou dúvida diagnóstica [F]."},
        {tab: {h: ["Exames (Quadro 2)", "Para quê"], r: [
          ["Testosterona total, 17-OH-progesterona, prolactina, TSH (FSH se suspeita de falência)", "Excluir hiperplasia adrenal, hiperprolactinemia, tireoide, insuficiência ovariana [F]"],
          ["Glicemia de jejum; TOTG 75 g (obesas ou com história familiar de DM)", "Risco metabólico [F]"],
          ["Perfil lipídico", "Síndrome metabólica [F]"],
          ["SDHEA", "Suspeita de tumor adrenal [F]"]
        ]}}
      ]},
      {t: "Tratar", b: [
        {tab: {h: ["Objetivo", "Opção (PCDT 2019)"], r: [
          ["Ciclos e proteção endometrial", "ACO etinilestradiol + levonorgestrel 21/7; ou medroxiprogesterona 10 mg por 10–12 dias/mês [F]"],
          ["Hirsutismo/acne", "ACO; se insuficiente após 6 meses: ciproterona 12,5–50 mg/dia (21/7, com o ACO) ou espironolactona (com contracepção; monitorar potássio) [F/C]"],
          ["Metabólico/peso", "Estilo de vida (perda de 5–10%); metformina 500 mg após o jantar, subir 500 mg/semana até 2.550 mg/dia [F]"],
          ["Desejo reprodutivo", "Suspender os medicamentos; ginecologia (letrozol é 1ª linha na diretriz de 2023) [F/C]"]
        ]}, nota: "Recorrência de hirsutismo em 80% em 6 meses após suspender [F]. Seguimento a cada 6 meses com ACO e avaliação cardiometabólica anual [F]. REMUME: ACO, medroxiprogesterona, metformina 850 mg e espironolactona 25/100 mg; ciproterona não consta [F]."},
        {ir: [["mu-sop", "SOP (Saúde da mulher)"], ["amenorreia", "Amenorreia"], ["acne", "Acne"]]},
        {ref: ["pcdt_sop2019", "sop_2023", "pab_mulher2016", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["pcdt_sop2019"], mud: "critérios de Rotterdam com o detalhamento do PCDT SOP 2019 (adolescentes com 3 critérios; exames de exclusão; doses) e a diferença no corte de folículos da diretriz de 2023"});

  // ── 16. SUA
  G("sua", {
    urg: "**Anemia sintomática** (dispneia, taquicardia, hipotensão) ou instabilidade: urgência [F]. **Sangramento pós-menopausa** → oncologia ginecológica (ou ginecologia) [F]. Gestante com sangramento: ver sangramento na gestação [F].",
    resumo: "Primeiro **excluir gravidez** e **causa cervical** (especular) [F]. Classificar o padrão: **aumentado com ciclos regulares** (geralmente funcional; mioma submucoso, adenomiose, DIU de cobre, coagulopatia), **irregular** (anovulação: adolescência, perimenopausa, SOP, tireoide, prolactina) ou **intermenstrual/pós-coito** (escape por hormônio, colo, pólipo, endométrio, DIP) [F]. Tratamento clínico por **3 meses**; encaminhar se refratário ou com critério [F].",
    secoes: [
      {t: "Tratar (Quadros 4 e 5)", b: [
        {tab: {h: ["Opção", "Esquema", "Redução do sangramento"], r: [
          ["AINE", "Ibuprofeno 600 mg ou diclofenaco 50 mg 8/8 h por 4 dias desde o 1º dia [F]", "~49% [F]"],
          ["Ácido tranexâmico", "250 mg–1 g 6/6 a 12/12 h por 4 dias desde o 1º dia [F]", "~58% [F]"],
          ["ACO (30–50 mcg EE)", "1/dia por 21 dias [F]", "~43% [F]"],
          ["Medroxiprogesterona oral", "10 mg/dia do 5º ao 26º dia [F]", "~83% [F]"],
          ["Medroxiprogesterona de depósito", "150 mg a cada 3 meses [F]", "Amenorreia [F]"],
          ["DIU-LNG", "Intrauterino [F]", "~95% [F]"]
        ]}, nota: "Sangramento agudo intenso (Quadro 4): ACO 1 comprimido 6/6 h até parar, depois 1/dia; estrogênio conjugado 0,625 mg 4–8/dia; ácido tranexâmico 500 mg 8/8 h até parar (máx. 7 dias); opções podem ser associadas [F]. Contraindicações: tromboembolismo (estrogênio, tranexâmico), úlcera/anticoagulante/DRC (AINE), migrânea com aura (ACO) [F]. REMUME: ibuprofeno, ACO e medroxiprogesterona; tranexâmico não consta [F]."}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Sangramento uterino anormal"},
          {t: "Instável ou anemia sintomática?", ramos: [
            {r: "Sim", n: [{t: "Urgência", k: "stop"}]},
            {r: "Não", n: [{t: "β-hCG, especular, hemograma (± ferritina, TSH, prolactina conforme o padrão)"}]}
          ]},
          {t: "Pós-menopausa?", ramos: [
            {r: "Sim", n: [{t: "Oncologia ginecológica/ginecologia", k: "stop"}]},
            {r: "Não", n: [{t: "Padrão: aumentado, irregular ou intermenstrual"}]}
          ]},
          {t: "Tratamento clínico 3 meses + ferro se ferropenia", k: "ok"},
          {t: "Ginecologia: refratário a 3 meses (após excluir tireoide, prolactina, escape hormonal, DIP); mioma submucoso; pólipo ou endométrio ≥ 12 mm na 1ª fase; adenomiose refratária; ≥ 45 anos; fator de risco para câncer de endométrio", k: "warn"},
          {t: "Desde a menarca, história familiar ou múltiplos sangramentos → coagulopatia (hemograma, plaquetas, TP, TTPa) → ginecologia/hematologia", k: "q"}
        ], nota: "PAB Saúde das Mulheres 2016, Fluxograma 1 e Quadros 1–5 [F]; TelessaúdeRS Ginecologia 2023, Protocolo 1 [F]. Fatores de risco para câncer de endométrio: obesidade, nuliparidade, DM, anovulação crônica, tamoxifeno, síndrome de Lynch, história familiar [F]."},
        {ir: [["mu-sua", "SUA (Saúde da mulher)"], ["miomas", "Miomas"], ["anemia-ferropriva", "Anemia ferropriva"]]},
        {ref: ["pab_mulher2016", "tsrs_gin2023", "nice_hmb", "figo_sua", "conitec_diulng", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["pab_mulher2016", "tsrs_gin2023"]});

  // ── 17. Teste de gravidez positivo
  G("teste-gravidez-positivo", {
    urg: "Dor pélvica, sangramento ou síncope com teste positivo e **sem USG que mostre gestação intrauterina**: pensar em **ectópica** [F/C].",
    resumo: "Acolher e perguntar **se a gravidez é desejada**, em ambiente privativo e sem julgamento [F]. **Desejada**: iniciar o pré-natal **na mesma consulta** – testes rápidos de HIV e sífilis (e hepatites), exames do 1º trimestre, USG, ácido fólico, revisão de medicamentos teratogênicos [F/C]. **Não desejada**: escuta, mediação de conflitos, informação sobre as situações em que o **aborto é permitido por lei** e sobre adoção, riscos do aborto inseguro, retorno e planejamento reprodutivo [F].",
    secoes: [
      {t: "Decidir (Fluxograma 2)", b: [
        {fluxo: [
          {t: "Teste de gravidez positivo"},
          {t: "Dor, sangramento ou instabilidade?", ramos: [
            {r: "Sim", n: [{t: "Ver sangramento no 1º trimestre / urgência", k: "stop"}]},
            {r: "Não", n: [{t: "Gravidez desejada?"}]}
          ]},
          {t: "Desejo", ramos: [
            {r: "Sim", n: [{t: "Pré-natal hoje: cadastro, testes rápidos, exames, USG, ácido fólico, vacinas, estratificação de risco", k: "ok"}]},
            {r: "Não", n: [{t: "Acolher; perguntar sobre intenção de abortar; informar aborto legal e adoção; riscos do aborto inseguro; retorno", k: "warn"}]}
          ]},
          {t: "Violência sexual? → aborto legal e rede de proteção", k: "q"}
        ], nota: "PAB Saúde das Mulheres 2016, Fluxograma 2 [F]."},
        {ul: ["Medicamentos a rever já: valproato, isotretinoína, varfarina, IECA/BRA, metotrexato, estatinas, misoprostol [C].", "Doenças crônicas, idade, intercorrências → estratificação de risco e pré-natal de alto risco [F/C]."]},
        {ir: [["pn-1consulta", "Primeira consulta de pré-natal"], ["pn-risco", "Estratificação de risco"], ["mu-aborto-legal", "Aborto legal"], ["sangramento-1tri", "Sangramento no 1º trimestre"]]},
        {ref: ["pab_mulher2016", "prenatal", "betim_pn2024", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["pab_mulher2016"]});

  // ── 18. TPM / TDPM
  G("tpm", {
    resumo: "Sintomas **afetivos** (irritabilidade, raiva, depressão, isolamento) e **somáticos** (mastalgia, distensão, cefaleia, edema) que aparecem **na fase lútea** e somem com a menstruação [F]. Confirmar com **registro diário por 2 ciclos** [C]. Se os sintomas não seguem o ciclo, pensar em transtorno do humor, ansiedade, tireoide ou violência [F]. Tratamento: exercício, manejo do estresse e **ISRS** (contínuo ou só na fase lútea) [F]; ACO contínuo se o sintoma está ligado à menstruação [F].",
    secoes: [
      {t: "Decidir (Fluxograma 5)", b: [
        {fluxo: [
          {t: "Queixa de sintomas pré-menstruais"},
          {t: "Ocorrem consistentemente na fase lútea?", ramos: [
            {r: "Não", n: [{t: "Investigar outras causas físicas ou psiquiátricas; contexto e estressores", k: "q"}]},
            {r: "Sim", n: [{t: "Identificar estressores, violência, trauma, transtorno do humor; modelo do limiar"}]}
          ]},
          {t: "Para todas: exercício, práticas corporais e de relaxamento, manejo do estresse", k: "ok"},
          {t: "Aceita ACO?", ramos: [
            {r: "Sim", n: [{t: "ACO contínuo ou com pausa curta", k: "ok"}]},
            {r: "Não, sintomas intensos", n: [{t: "Por sintoma (abaixo)", k: "warn"}]}
          ]}
        ], nota: "PAB Saúde das Mulheres 2016, Fluxograma 5 [F]."},
        {tab: {h: ["Sintoma-alvo", "Opção (PAB 2016)"], r: [
          ["Depressivos/irritabilidade (TDPM)", "ISRS contínuo ou só na fase lútea – a fase lútea tem menor eficácia e melhor tolerância [F]"],
          ["Cefaleia menstrual (migrânea sem aura)", "AINE ou triptano de 3 dias antes a 3 dias depois da menstruação; considerar profilaxia [F]"],
          ["Edema importante e refratário", "Espironolactona 100 mg/dia na fase lútea [F]"]
        ]}, nota: "REMUME: fluoxetina 20 mg, sertralina 50 mg, espironolactona 100 mg e ACO [F]. Ideação suicida ou depressão fora da fase lútea: conduzir como depressão [C]."},
        {ir: [["depressao", "Depressão"]]},
        {ref: ["pab_mulher2016", "cochrane_tpm", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["pab_mulher2016"]});
})();
