// ───────────── data31.js – Demanda, rodada 2 (11/10/2026): guias (gripe, PAC, bronquiolite, tontura, olho vermelho, dispepsia, cefaleia tensional) + doses de risco alto conferidas
Object.assign(FONTES, {
  fhemig_pac: {s: "FHEMIG/HIJPII – PAC em crianças (2019)", t: "Hospital Infantil João Paulo II (FHEMIG). Pneumonia adquirida na comunidade: crianças e adolescentes (estabelecido em 03/04/2019; GRADE): taquipneia OMS (< 2 m > 60; 2–12 m > 50; 1–5 anos > 40 irpm); critérios de internação; amoxicilina 50 mg/kg/dia de 8/8 h ou 80–90 mg/kg/dia de 12/12 h como 1ª escolha (forte, moderada); ambulatorial por 3 a 5 dias (fraca, alta); > 5 anos com quadro de micoplasma: azitromicina 10 mg/kg/dia 1×/dia como alternativa; reavaliação garantida em 48–72 h (protocolo estadual de MG; PDF no Drive da usuária).", f: "F", url: ""},
  fhemig_bronq: {s: "FHEMIG/HIJPII – bronquiolite", t: "Hospital Infantil João Paulo II (FHEMIG). Protocolo de bronquiolite (fluxograma; base NICE NG9 2015 e AAP 2014): < 2 anos, 1º episódio; não fazer de rotina RX, exames de sangue, fisioterapia [1B], salbutamol, ipratrópio, antibiótico, montelucaste, adrenalina inalatória, salina hipertônica [1B] e corticoide [1A]; lavagem nasal com SF 0,9%; internar se desidratação, dificuldade para mamar, SatO₂ < 90% persistente, esforço moderado/grave ou FR > 70 irpm, FC > 180, apneia, cianose, letargia; fatores de risco: prematuridade (≤ 32 sem), < 3 meses, cardiopatia, doença pulmonar crônica, imunodeficiência, doença neuromuscular (protocolo estadual de MG; PDF no Drive da usuária).", f: "F", url: ""},
  vsr_sbim2026: {s: "SBIm/SBP/Febrasgo – guia rápido VSR (04/2026)", t: "Nota Técnica Conjunta SBIm/SBP/Febrasgo – guia rápido de imunização contra o VSR (04/03/2026, atualizada em 24/04/2026): vacina materna (Abrysvo) no PNI a partir da 28ª semana, sem limite superior, em qualquer época do ano, 1 dose por gestação; nirsevimabe no SUS para prematuros < 37 semanas com < 6 meses em qualquer época e para < 24 meses com comorbidades na sazonalidade (Sudeste: março a julho); 50 mg se < 5 kg e 100 mg se ≥ 5 kg; filhos de mães vacinadas em geral não precisam de nirsevimabe, salvo exceções (documento de sociedades, reproduz critérios do PNI).", f: "F", url: "https://sbim.org.br/images/nt-guiarapido-imunizacao-vsr-sbimsbpfebrasgo-260304-at260423b.pdf_2026-04-27.pdf"},
  ats_pac_aafp: {s: "ATS/IDSA 2019 – PAC (resumo AAFP 2020)", t: "Resumo das recomendações ATS/IDSA 2019 para PAC em adultos (Am Fam Physician 2020;102(2):121-4): sem comorbidade – amoxicilina 1 g 3×/dia ou doxiciclina 100 mg 2×/dia (macrolídeo só se resistência pneumocócica local < 25%: azitromicina 500 mg no D1 e 250 mg/dia); com comorbidade – amoxicilina-clavulanato 500/125 mg 8/8 h ou 875/125 mg 12/12 h (ou cefalosporina) + azitromicina, claritromicina ou doxiciclina, ou fluoroquinolona respiratória; mínimo de 5 dias e estabilidade clínica; corticoide não de rotina (resumo de diretriz).", f: "F", url: "https://www.aafp.org/afp/2020/0715/p121"},
  tele_dip: {s: "TelessaúdeRS – DIP (2023)", t: "TelessaúdeRS-UFRGS. Qual é o tratamento para doença inflamatória pélvica? (atualizado em 19/06/2023), adaptado do PCDT IST 2022 (MS) e do CDC 2021: ceftriaxona 500 mg IM dose única + doxiciclina 100 mg 12/12 h por 14 dias + metronidazol 500 mg 12/12 h por 14 dias (400 mg se não houver 500 mg); parcerias dos últimos 60 dias: ceftriaxona 500 mg IM + azitromicina 1 g dose única, ou + doxiciclina 100 mg 12/12 h por 7 dias; DIU: considerar retirar só se não melhorar em 48–72 h; reavaliar em 3 dias (teleconsultoria nacional).", f: "F", url: "https://www.ufrgs.br/telessauders/?p=24824"},
  tele_hp: {s: "TelessaúdeRS – erradicação de H. pylori", t: "TelessaúdeRS-UFRGS. Quais são as opções de tratamento para erradicação de Helicobacter pylori? (atualizado em 28/06/2023): 1ª linha por 14 dias – amoxicilina 1 g + claritromicina 500 mg + IBP (omeprazol 20 mg, pantoprazol 40 mg, lansoprazol 30 mg), todos de 12/12 h; alternativas com levofloxacino, metronidazol, bismuto, tetraciclina, doxiciclina ou furazolidona; com úlcera, manter IBP por 4–8 semanas (teleconsultoria nacional; referências IV Consenso Brasileiro 2018 e Maastricht V).", f: "F", url: "https://www.ufrgs.br/telessauders/?p=20355"},
  hp_consenso5: {s: "V Consenso Brasileiro de H. pylori (2026)", t: "Coelho LGV, Sanches BSF et al. VTH Brazilian Consensus Conference on Helicobacter pylori infection. Arq Gastroenterol 2026;63:e26043 (DOI 10.1590/S0004-2803.24612026-043): testar e tratar em ≤ 45 anos com dispepsia não investigada sem alarme (1A); endoscopia com biópsias em ≥ 40 anos com dispepsia, alarme ou falha (2B); confirmação da erradicação por teste respiratório com ureia-13C ou antígeno fecal monoclonal (1A), suspendendo IBP/P-CAB 14 dias e antibiótico/bismuto 4 semanas antes (1A); tratamentos de 14 dias com ênfase na quádrupla com bismuto e em P-CAB (vonoprazana). Seção de esquemas lida apenas em resumo secundário (Portal Afya, 03/07/2026): quádrupla = IBP (omeprazol 40 mg) ou vonoprazana 20 mg 12/12 h + subcitrato de bismuto 240 mg 12/12 h + metronidazol 400–500 mg 6/6 h + tetraciclina 500 mg 6/6 h (consenso de sociedade).", f: "F", url: "https://www.scielo.br/j/ag/a/G9BpZdBB8tHTKdF9b5nmSbp/?lang=en"},
  glucagon_bula: {s: "Glucagon – bula (Lilly, registro antigo)", t: "Bula do glucagon 1 mg (Eli Lilly; versão de 2014 em bulário eletrônico): 1 mg SC, IM ou IV em adultos e crianças > 20 kg; 0,5 mg (ou 20–30 mcg/kg) se < 20 kg; despertar em geral em 15 min; sem resposta, glicose IV; após despertar, carboidrato oral (bula de registro antigo – conferir a vigente).", f: "F", url: "https://www.bulas.med.br/p/bula/2790/glucagon.htm"}
});
Object.assign(FONTES.guia_influenza, {s: "MS – Guia de Influenza 2023", t: "Ministério da Saúde. Guia de Manejo e Tratamento de Influenza 2023, 1ª ed. eletrônica (SVSA/DPNI): definições de SG e SRAG; oseltamivir 75 mg 12/12 h por 5 dias no adulto; criança > 1 ano ≤ 15 kg 30 mg, 15–23 kg 45 mg, 23–40 kg 60 mg, > 40 kg 75 mg, 12/12 h; 0–8 meses 3 mg/kg e 9–11 meses 3,5 mg/kg 12/12 h; ClCr 30–60 mL/min 30 mg 12/12 h, 10–30 mL/min 30 mg 1×/dia, hemodiálise 30 mg após cada sessão; quimioprofilaxia 1×/dia por 10 dias; condições de risco; SG sem fator de risco: oseltamivir por julgamento clínico, de preferência em até 48 h (manual MS; conferido no PDF integral reproduzido pela SES-GO).", url: "https://goias.gov.br/saude/wp-content/uploads/sites/34/2012/06/guia_tratamento-influenza-2023-d45.pdf"});
Object.assign(FONTES.pcdt_dpoc, {s: "PCDT DPOC 2021", t: "Ministério da Saúde. PCDT da Doença Pulmonar Obstrutiva Crônica – Portaria Conjunta SAES/SCTIE nº 19/2021: exacerbação – salbutamol 200–400 mcg (2–4 jatos) a cada 4–6 h até melhora; prednisona ou prednisolona 40 mg/dia por 5 dias (estender a 10–14 dias se não melhorar); ipratrópio 40 mcg (2 jatos) 3–4×/dia, máximo 240 mcg/dia; critérios de internação; manutenção por grupos A–D com LABA, LAMA/LABA (tiotrópio+olodaterol, umeclidínio+vilanterol) e CI pelos critérios do protocolo; antibiótico na exacerbação sem esquema especificado (norma).", f: "F", url: "https://www.gov.br/saude/pt-br/assuntos/pcdt/arquivos/2022/portal-portaria-conjunta_no-19_2021_pcdt_dpoc__.pdf"});

const R31 = {
  rx: (c, i, p) => { if (c.rx && c.rx[i]) Object.assign(c.rx[i], p); },
  muda: (c, t) => { c.mudancas = c.mudancas || []; c.mudancas.push("Revisão 11/10/2026: " + t); },
  fonte: (c, ...ks) => { ks.forEach(k => { if (!c.evid.fontes.includes(k)) c.evid.fontes.push(k); }); },
  drop: (c, re) => { c.nv = (c.nv || []).filter(x => !re.test(x)); }
};

// ── guias reutilizados por mais de um item
const G_TONTURA = {
  resumo: "Classifique a tontura pelo **tempo e gatilho**, não pela palavra que o paciente usa. **Segundos, ao deitar ou virar na cama** = VPPB: Dix-Hallpike e **Epley na hora**. **Contínua há horas/dias com nistagmo** = síndrome vestibular aguda: a pergunta é **AVC de fossa posterior** – na dúvida, urgência. Supressor vestibular só por poucos dias.",
  secoes: [
    {t: "Classificar (tempo e gatilho)", b: [
      {fluxo: [
        {t: "Tontura/vertigem"},
        {t: "Déficit neurológico, cefaleia súbita, disartria, diplopia, incapacidade de andar sem apoio?", ramos: [
          {r: "Sim", n: [{t: "AVC até prova em contrário: urgência (SAMU)", k: "stop"}]},
          {r: "Não", n: [{t: "Padrão temporal"}]}]},
        {t: "Como é?", ramos: [
          {r: "Episódios de segundos com mudança de posição", n: [{t: "Dix-Hallpike → VPPB → manobra de Epley do lado positivo", k: "ok"}]},
          {r: "Contínua há horas/dias, com náusea e nistagmo", n: [{t: "Síndrome vestibular aguda: HINTS por examinador treinado; HINTS central, dúvida ou fator de risco vascular → urgência", k: "stop"}]},
          {r: "Episódios espontâneos de minutos a horas", n: [{t: "Pensar em AIT, migrânea vestibular, Ménière, arritmia", k: "warn"}]},
          {r: "Ao levantar (pré-síncope)", n: [{t: "Hipotensão ortostática: medir PA deitado/em pé, revisar fármacos", k: "warn"}]}]}
      ], nota: "Abordagem por tempo e gatilho (TiTrATE) e HINTS conforme diretriz GRACE-3 (ACEP 2023) [C]; Epley no VPPB de canal posterior (AAO-HNS 2017) [C]."},
      {calc: "ho"},
      {ref: ["tontura", "aaohns_vppb"]}]},
    {t: "VPPB: diagnóstico e Epley", b: [
      {ol: [
        "Dix-Hallpike: sentado na maca, cabeça girada 45° para o lado testado; deitar rápido com a cabeça 20–30° abaixo do plano da maca. Positivo: vertigem com nistagmo torcional para cima, após latência de segundos, durando < 1 min [C].",
        "Epley (lado positivo): manter a posição do Dix-Hallpike por 30–60 s → girar a cabeça 90° para o outro lado (30–60 s) → girar corpo e cabeça mais 90°, olhando para o chão (30–60 s) → sentar [C].",
        "Repetir na mesma consulta se ainda positivo; restrição de posição depois da manobra não é necessária [C].",
        "Sem melhora após 2–3 sessões, nistagmo atípico (vertical para baixo, sem latência, sem fadiga) ou sintomas neurológicos → reavaliar diagnóstico / neurologia [C]."]},
      {perola: {t: "Remédio para labirintite não trata VPPB", x: "Betaistina, cinarizina, dimenidrinato e prometazina não reposicionam o otólito. A manobra resolve a maioria dos casos em 1–2 sessões; o remédio só seda e aumenta o risco de queda, sobretudo no idoso.", d: "melhora mais rápida e menos quedas.", l: "C"}},
      {ref: ["aaohns_vppb"]}]}
  ]};

const G_OLHO = {
  resumo: "Olho vermelho **sem dor, sem baixa visual e sem fotofobia** quase sempre é conjuntivite e fica na APS. **Dor, baixa visual, fotofobia, pupila alterada, lente de contato ou trauma** = oftalmologia no mesmo dia. **Queimadura química: irrigar antes de tudo.** Nunca prescrever colírio de corticoide sem oftalmologista.",
  secoes: [
    {t: "Triagem", b: [
      {fluxo: [
        {t: "Olho vermelho"},
        {t: "Produto químico no olho?", ramos: [
          {r: "Sim", n: [{t: "Irrigar 15–30 min com SF ou água corrente AGORA → oftalmologia urgente", k: "stop"}]},
          {r: "Não", n: [{t: "Medir acuidade visual em todos"}]}]},
        {t: "Dor moderada/intensa, baixa visual, fotofobia, injeção perilímbica, pupila irregular/médio-fixa, opacidade de córnea, lente de contato ou trauma?", ramos: [
          {r: "Sim", n: [{t: "Glaucoma agudo, uveíte, ceratite, úlcera, corpo estranho: oftalmologia no mesmo dia", k: "stop"}]},
          {r: "Não", n: [{t: "Conjuntivite ou causa benigna: tratar na APS", k: "ok"}]}]}
      ], nota: "Sinais de alarme do olho vermelho na APS [C]."},
      {ref: ["olho_vermelho", "cab28"]}]},
    {t: "Qual conjuntivite?", b: [
      {tab: {h: ["Tipo", "Pistas", "Conduta"], r: [
        ["Viral", "Secreção aquosa, início em um olho e passa para o outro, linfonodo pré-auricular, resfriado", "Compressa fria, lubrificante, higiene das mãos; 7–14 dias; sem antibiótico"],
        ["Bacteriana", "Secreção purulenta, pálpebras coladas ao acordar", "Melhora sozinha na maioria; colírio antibiótico encurta um pouco – pode ser receita de reserva"],
        ["Alérgica", "Prurido intenso, bilateral, sazonal, atopia", "Evitar gatilho, compressa fria, anti-histamínico; colírio antialérgico (compra)"],
        ["Hiperaguda / recém-nascido", "Secreção purulenta abundante e rápida; RN nas primeiras semanas", "Pensar em gonococo/clamídia: avaliação no mesmo dia"]]},
       nota: "Quadro clínico e conduta [C]; Cochrane: antibiótico aumenta a remissão entre os dias 2 e 5, com efeito modesto [C]."},
      {ref: ["cochrane_conj", "cab28"]}]}
  ]};

const REV31 = {
  // ── doses
  "gripal": c => {
    R31.rx(c, 0, {texto: "USO ORAL\n1. Oseltamivir 75 mg ______ 10 cápsulas\n   Tomar 1 cápsula de 12/12h por 5 dias.\n\nCriança > 1 ano (12/12h por 5 dias): ≤ 15 kg 30 mg | 15–23 kg 45 mg | 23–40 kg 60 mg | > 40 kg 75 mg.\nLactente (12/12h): 0–8 meses 3 mg/kg | 9–11 meses 3,5 mg/kg.\nClCr 30–60 mL/min: 30 mg de 12/12h | ClCr 10–30: 30 mg 1 vez ao dia.", dose: "F", nota: "Guia de Influenza MS 2023 [F]. Grupo de risco: iniciar mesmo após 48 h e independentemente de vacina ou exame [F]. Na suspensão oral manipulada/diluída, seguir a orientação da farmácia."});
    c.nv = ["Diluição das cápsulas para lactentes na farmácia de Betim: confirmar."];
    R31.muda(c, "doses por peso, lactente e ajuste renal do oseltamivir conferidos no Guia de Influenza 2023.");
  },
  "pac": c => {
    R31.rx(c, 0, {dose: "F", nota: "ATS/IDSA 2019 [F]. Alternativa (alergia à penicilina): doxiciclina 100 mg 12/12h. Mínimo de 5 dias e estabilidade clínica antes de parar [F]."});
    R31.rx(c, 1, {texto: "USO ORAL\n1. Amoxicilina 500 mg + clavulanato 125 mg ______ 21 comprimidos\n   Tomar 1 comprimido de 8/8h por 5 a 7 dias.\n   +\n2. Doxiciclina 100 mg ______ 14 comprimidos\n   Tomar 1 comprimido de 12/12h por 5 a 7 dias.\n   (ou azitromicina 500 mg no 1º dia e 250 mg 1 vez ao dia do 2º ao 5º dia)", dose: "F", nota: "ATS/IDSA 2019 [F]: amoxicilina-clavulanato 500/125 mg 8/8h (a apresentação da REMUME) + doxiciclina ou macrolídeo. O esquema de azitromicina 500 mg por 3 dias é usado na prática, mas não é o da diretriz."});
    R31.drop(c, /^Doses/); R31.fonte(c, "ats_pac_aafp", "fhemig_pac");
    R31.muda(c, "doses adultas conferidas no resumo ATS/IDSA 2019; pediatria pelo protocolo FHEMIG no guia.");
  },
  "bronquiolite": c => {
    c.nv = ["Dose de paracetamol: conferir bula.", "Fluxo de aplicação do nirsevimabe para crianças de Betim (maternidade/CRIE): confirmar com a sala de vacina."];
    c.sus.nacional = "RENAME 2024: cloreto de sódio 0,9% nasal, paracetamol 200 mg/mL (Básico). Prevenção: vacina VSR para gestantes a partir de 28 semanas (PNI) e nirsevimabe para prematuros < 37 semanas e crianças < 24 meses com comorbidades (NT 109/2025; Protocolo de Uso CONITEC 2026); palivizumabe mantido para quem já o usava.";
    R31.fonte(c, "fhemig_bronq", "vsr_sbim2026", "nirsevimabe");
    R31.muda(c, "prevenção com vacina materna e nirsevimabe (SUS 2026) e fluxograma FHEMIG.");
  },
  "hipoglicemia": c => {
    R31.rx(c, 1, {nota: "Bula do glucagon (registro antigo) [F]: 1 mg se > 20 kg; 0,5 mg se < 20 kg; sem resposta em 15 min, glicose IV. Não consta na RENAME nem na REMUME – compra. Conferir a bula vigente."});
    R31.fonte(c, "glucagon_bula");
  },
  "tb-sr": c => {
    R31.rx(c, 1, {texto: "USO ORAL – fase intensiva (2 meses)\n1. RHZE (rifampicina 150 + isoniazida 75 + pirazinamida 400 + etambutol 275 mg) comprimido\n   Peso 20–35 kg: 2 cp | 36–50 kg: 3 cp | 51–70 kg: 4 cp | > 70 kg: 5 cp – 1 vez ao dia, em jejum.\n\nUSO ORAL – fase de manutenção (4 meses), RH 'dose plena'\n2. RH 300/150 mg: 20–35 kg 1 cp | 36–50 kg 1 cp + 1 cp de RH 150/75 | 51–70 kg 2 cp | > 70 kg 2 cp + 1 cp de RH 150/75 – 1 vez ao dia.", dose: "F", nota: "Quadro do esquema básico (≥ 10 anos) da SMS-SP, baseado no Manual MS 2019 [F]. REMUME Betim tem RHZE, RH 150/75 e RH 300/150. Use a calculadora 'Tuberculose: esquema básico por peso'."});
    R31.drop(c, /Tabela de doses/); R31.fonte(c, "tb_doseplena");
    R31.muda(c, "tabela RHZE/RH por peso conferida.");
  },
  "dpoc-exac": c => {
    R31.rx(c, 0, {texto: "USO INALATÓRIO\n1. Salbutamol 100 mcg/dose aerossol ______ 1 frasco\n   Fazer 2 a 4 jatos com espaçador a cada 4 a 6 horas até melhorar.\n2. Ipratrópio 20 mcg/dose aerossol ______ 1 frasco\n   Fazer 2 jatos com espaçador 3 a 4 vezes ao dia (máximo 12 jatos/dia).\n\nUSO ORAL\n3. Prednisona 20 mg ______ 10 comprimidos\n   Tomar 2 comprimidos (40 mg) pela manhã por 5 dias.", dose: "F", nota: "PCDT DPOC 2021 [F]. Sem melhora no 5º dia, o PCDT admite estender a 10–14 dias [F]. Nebulização: salbutamol 2,5–5 mg a cada 4–6 h [F]."});
    R31.rx(c, 1, {nota: "O PCDT não especifica o antibiótico; esquema conforme GOLD [C]. Indicar sobretudo se escarro purulento."});
    c.nv = ["Antibiótico na exacerbação: doses conferir bula (o PCDT não especifica esquema)."];
    R31.muda(c, "doses de broncodilatador e corticoide conferidas no PCDT DPOC 2021.");
  },
  "dip": c => {
    R31.rx(c, 0, {texto: "USO INTRAMUSCULAR\n1. Ceftriaxona 500 mg IM, dose única (Betim: frasco de 1 g – usar metade).\n\nUSO ORAL\n2. Doxiciclina 100 mg ______ 28 comprimidos\n   Tomar 1 comprimido de 12/12h por 14 dias.\n3. Metronidazol 250 mg ______ 112 comprimidos\n   Tomar 2 comprimidos (500 mg) de 12/12h por 14 dias.", dose: "F", nota: "PCDT IST 2022 / CDC 2021, conforme TelessaúdeRS [F]. Metronidazol 400 mg 12/12h se for a apresentação disponível [F]. Evitar álcool com metronidazol. Gestante com suspeita de DIP: internar."});
    R31.rx(c, 1, {dose: "F", nota: "Parcerias dos últimos 60 dias, mesmo assintomáticas (TelessaúdeRS, a partir do PCDT IST 2022) [F]."});
    c.nv = [];
    R31.fonte(c, "tele_dip"); R31.muda(c, "esquema da paciente e das parcerias conferido (TelessaúdeRS, base PCDT IST 2022).");
  },
  "dispepsia": c => {
    R31.rx(c, 1, {dose: "F", nota: "Tripla de 14 dias com amoxicilina 1 g + claritromicina 500 mg + IBP, todos 12/12h (TelessaúdeRS) [F]; o V Consenso Brasileiro (2026) usa IBP em dose padrão de omeprazol 40 mg 12/12h e prioriza a quádrupla com bismuto [F]. Todos os 3 fármacos estão na REMUME. Controle de erradicação: teste respiratório ou antígeno fecal ≥ 4 semanas após antibiótico e 14 dias sem IBP [F]."});
    c.idealsus = {ideal: "V Consenso Brasileiro (2026): tratamentos de 14 dias, com ênfase na quádrupla com bismuto (IBP + bismuto + metronidazol + tetraciclina) ou esquemas com vonoprazana.", sus: "A REMUME tem omeprazol, amoxicilina, claritromicina e metronidazol; bismuto, tetraciclina e vonoprazana não constam na RENAME/REMUME.", ponte: "Tripla de 14 dias com os fármacos da REMUME é a opção acessível; se falhar, confirmar erradicação e discutir esquema de resgate (compra de bismuto) – preços não verificados."};
    c.nv = ["Acesso a teste de H. pylori (respiratório, antígeno fecal) em Betim: não verificado.", "Preço do subcitrato de bismuto e da tetraciclina no varejo: não verificado."];
    R31.fonte(c, "tele_hp", "hp_consenso5");
    c.evid.resumo = "O V Consenso Brasileiro (2026) recomenda testar e tratar H. pylori em ≤ 45 anos com dispepsia não investigada sem sinais de alarme (forte, alta) e endoscopia a partir de 40 anos ou com alarme (fraca); a ACG/CAG usa 60 anos como corte. Erradicar melhora os sintomas em parte dos pacientes e reduz úlcera e câncer gástrico.";
    R31.muda(c, "V Consenso Brasileiro de H. pylori (2026): idade do testar-e-tratar, confirmação e ênfase na quádrupla com bismuto.");
  }
};

const REV31G = {
  "gripal": c => {
    c.guia = {
      resumo: "O que muda desfecho na gripe é **reconhecer SRAG** e **dar oseltamivir cedo a quem tem fator de risco** – sem esperar exame, mesmo após 48 h. Para quem não tem risco, o antiviral é decisão clínica nas primeiras 48 h. Vacina anual para os grupos prioritários.",
      secoes: [
        {t: "Decidir", b: [
          {fluxo: [
            {t: "Síndrome gripal: febre de início súbito + tosse ou dor de garganta + cefaleia, mialgia ou artralgia (< 2 anos: febre + sintoma respiratório)"},
            {t: "Dispneia, SpO₂ ≤ 94%, desconforto respiratório, hipotensão ou piora de doença de base?", ramos: [
              {r: "Sim", n: [{t: "SRAG: oseltamivir já e urgência; notificar", k: "stop"}]},
              {r: "Não", n: [{t: "Fator de risco para complicação?"}]}]},
            {t: "Fator de risco", ramos: [
              {r: "Sim", n: [{t: "Oseltamivir já, mesmo após 48 h, sem esperar exame; sintomáticos; reavaliar", k: "warn"}]},
              {r: "Não", n: [{t: "Sintomáticos e hidratação; oseltamivir por julgamento clínico, de preferência em até 48 h; orientar sinais de piora", k: "ok"}]}]}
          ], nota: "Guia de Manejo e Tratamento de Influenza, MS 2023 [F]."},
          {ul: [
            "**Fatores de risco** [F]: gestante em qualquer idade gestacional e puérpera até 2 semanas; ≥ 60 anos; < 5 anos (maior risco < 2 anos e < 6 meses); indígena aldeado; < 19 anos em uso prolongado de AAS; pneumopatia (inclui asma), tuberculose, cardiopatia (exceto HAS isolada), nefropatia, hepatopatia, doença hematológica (inclui falciforme), DM e outras metabólicas; doença neurológica que comprometa respiração; imunossupressão, câncer, HIV; obesidade (sobretudo IMC ≥ 40).",
            "**Sinais de piora** [F]: dispneia, FR ≥ 20 irpm no adulto, SpO₂ ≤ 94%; febre > 3 dias ou que volta após 48 h sem febre; confusão; PAS < 90 ou PAD < 60; diurese < 400 mL/24 h; desidratação ou piora gastrointestinal na criança; piora da doença de base."]},
          {ref: ["guia_influenza"]}]},
        {t: "Oseltamivir (tratamento: 12/12 h por 5 dias)", b: [
          {tab: {h: ["Quem", "Dose por tomada"], r: [
            ["Adulto", "75 mg [F]"],
            ["Criança > 1 ano ≤ 15 kg", "30 mg [F]"],
            ["15–23 kg", "45 mg [F]"],
            ["23–40 kg", "60 mg [F]"],
            ["> 40 kg", "75 mg [F]"],
            ["0–8 meses", "3 mg/kg [F]"],
            ["9–11 meses", "3,5 mg/kg [F]"],
            ["ClCr 30–60 mL/min", "30 mg 12/12 h [F]"],
            ["ClCr 10–30 mL/min", "30 mg 1×/dia [F]"],
            ["Hemodiálise", "30 mg após cada sessão (3 doses em 5 dias) [F]"]]},
           nota: "Quimioprofilaxia: mesma dose 1×/dia por 10 dias, em situações selecionadas [F]. Oseltamivir 30, 45 e 75 mg: RENAME (Estratégico) e REMUME de Betim; dispensação sem exame [F]."},
          {ref: ["guia_influenza", "rename", "remume"]}]}
      ]};
    R31.muda(c, "guia com fluxograma SG/SRAG e tabela de oseltamivir (MS 2023).");
  },
  "pac": c => {
    c.guia = {
      resumo: "Decida **onde tratar** (CRB-65, SpO₂, capacidade de tomar VO) e trate **sem esperar RX**. Adulto sem comorbidade: **amoxicilina 1 g 8/8 h** (ou doxiciclina); com comorbidade: **amoxicilina-clavulanato + doxiciclina ou macrolídeo**. Criança: **amoxicilina** e reavaliação **garantida em 48–72 h**.",
      calcs: ["sc:curb65"],
      secoes: [
        {t: "Adulto: onde tratar", b: [
          {calc: "sc:curb65"},
          {fluxo: [
            {t: "Tosse, febre, dispneia ou dor pleurítica + achados focais (ou RX com consolidação)"},
            {t: "SpO₂ < 92%, FR ≥ 30, PAS < 90, confusão ou incapaz de tomar VO?", ramos: [
              {r: "Sim", n: [{t: "Urgência / internação", k: "stop"}]},
              {r: "Não", n: [{t: "CRB-65"}]}]},
            {t: "CRB-65", ramos: [
              {r: "0", n: [{t: "Ambulatorial", k: "ok"}]},
              {r: "1–2", n: [{t: "Avaliar internação (ambulatorial só com bom suporte e retorno garantido)", k: "warn"}]},
              {r: "≥ 3", n: [{t: "Internação urgente", k: "stop"}]}]},
            {t: "Ambulatorial: reavaliar em 48–72 h; sem melhora → RX/urgência", k: "warn"}
          ], nota: "Critérios de gravidade e CRB-65 [C]; esquemas pela ATS/IDSA 2019 [F]."},
          {tab: {h: ["Situação", "Esquema (mínimo 5 dias)"], r: [
            ["Sem comorbidade", "Amoxicilina 1 g 8/8 h ou doxiciclina 100 mg 12/12 h [F]"],
            ["Com comorbidade (DPOC, IC, DM, DRC, hepatopatia, alcoolismo, câncer, asplenia)", "Amoxicilina-clavulanato 500/125 mg 8/8 h + doxiciclina 100 mg 12/12 h ou azitromicina 500 mg no D1 e 250 mg D2–D5 [F]"],
            ["Alergia grave a betalactâmico com comorbidade", "Fluoroquinolona respiratória (levofloxacino 750 mg/dia) – compra/RENAME estratégico [F]"]]},
           nota: "Corticoide não de rotina [F]. Todos os fármacos acima, exceto levofloxacino, estão na REMUME [F]."},
          {ref: ["ats_pac_aafp", "sbpt_pac", "remume"]}]},
        {t: "Criança (FHEMIG)", b: [
          {ul: [
            "Diagnóstico clínico: tosse ou dificuldade para respirar + taquipneia para a idade: < 2 meses > 60; 2–12 meses > 50; 1–5 anos > 40 irpm [F]. Hipoxemia e esforço respiratório pesam mais que a ausculta [F].",
            "Internar: < 3–6 meses com pneumonia bacteriana, hipoxemia (< 90–92%), impossibilidade de VO, sem seguimento possível ou falha do tratamento ambulatorial [F].",
            "Amoxicilina 50 mg/kg/dia de 8/8 h ou 80–90 mg/kg/dia de 12/12 h; ambulatorial por 3 a 5 dias, individualizando pela resposta [F].",
            "> 5 anos com quadro de micoplasma: azitromicina 10 mg/kg/dia 1×/dia é alternativa; trocar uma pela outra se não responder [F].",
            "Amoxicilina-clavulanato se vacinação incompleta para Hib, falha ou suspeita de estafilococo [F].",
            "Reavaliação garantida em 48–72 h: adesão, curva térmica, sinais de piora [F]. Lembrar que muitos casos < 5 anos são virais [F]."]},
          {ref: ["fhemig_pac"]}]}
      ]};
  },
  "bronquiolite": c => {
    c.guia = {
      resumo: "Bronquiolite é **clínica** e o tratamento é **suporte**: lavagem nasal, hidratação e O₂ se SatO₂ < 90%. **Não** usar salbutamol, corticoide, antibiótico, nebulização ou fisioterapia de rotina. O que mais muda o desfecho agora é a **prevenção**: vacina VSR na gestante e nirsevimabe para os bebês elegíveis.",
      secoes: [
        {t: "Avaliar e decidir", b: [
          {fluxo: [
            {t: "< 2 anos, 1º episódio: coriza → tosse, taquipneia/dispneia, sibilos ou crepitações"},
            {t: "Apneia, cianose, letargia, SatO₂ < 90% persistente, esforço moderado/grave, FR > 70, FC > 180, desidratação ou não consegue mamar?", ramos: [
              {r: "Sim", n: [{t: "Internação (urgência)", k: "stop"}]},
              {r: "Não", n: [{t: "Fator de risco: < 3 meses, prematuro ≤ 32 sem, cardiopatia, doença pulmonar crônica, imunodeficiência, doença neuromuscular?"}]}]},
            {t: "Fator de risco", ramos: [
              {r: "Sim", n: [{t: "Considerar observação/internação; reavaliação frequente", k: "warn"}]},
              {r: "Não", n: [{t: "Domicílio: lavagem nasal, mamadas menores e frequentes, sinais de alerta por escrito; reavaliar em 24–48 h", k: "ok"}]}]}
          ], nota: "Protocolo FHEMIG/HIJPII [F]. Pico de gravidade entre o 3º e o 5º dia [C]."},
          {tab: {h: ["Não fazer de rotina", "Força"], r: [
            ["RX de tórax, exames de sangue, fisioterapia respiratória", "Forte, moderada (1B) [F]"],
            ["Salbutamol, ipratrópio, adrenalina inalatória, salina hipertônica", "Forte, moderada (1B) [F]"],
            ["Corticoide inalatório ou sistêmico", "Forte, alta (1A) [F]"],
            ["Antibiótico (só se suspeita forte de infecção bacteriana)", "Forte, moderada (1B) [F]"]]},
           nota: "FHEMIG, com base em NICE NG9 e AAP 2014 [F]."},
          {ref: ["fhemig_bronq", "aap_bronq"]}]},
        {t: "Prevenção (SUS 2026)", b: [
          {tab: {h: ["Estratégia", "Para quem", "Como"], r: [
            ["Vacina VSR materna", "Toda gestante a partir de 28 semanas, sem limite superior, em qualquer época do ano [F]", "1 dose por gestação, IM, na sala de vacina [F]"],
            ["Nirsevimabe", "Prematuro < 37 semanas com < 6 meses (qualquer época); < 24 meses com cardiopatia, displasia broncopulmonar, imunocomprometimento, Down, fibrose cística, doença neuromuscular ou anomalia de via aérea (sazonalidade; Sudeste março a julho) [F]", "Dose única: 50 mg se < 5 kg; 100 mg se ≥ 5 kg [F]; aplicada preferencialmente na maternidade/CRIE"]]},
           nota: "Filho de mãe vacinada em geral não precisa de nirsevimabe; exceções (mãe imunossuprimida, parto < 14 dias após a vacina) vêm das sociedades, não do PNI [F]."},
          {ref: ["vsr_sbim2026", "nirsevimabe", "nirse_conitec", "vsr_sus"]}]}
      ]};
  },
  "tontura": c => { c.guia = G_TONTURA; R31.muda(c, "guia com fluxograma por tempo e gatilho e passo a passo de Dix-Hallpike/Epley."); },
  "vppb": c => { c.guia = G_TONTURA; },
  "olho-vermelho-alarme": c => { c.guia = G_OLHO; R31.muda(c, "guia com fluxograma de sinais de alarme e quadro das conjuntivites."); },
  "conj-bact": c => { c.guia = G_OLHO; },
  "conj-viral": c => { c.guia = G_OLHO; },
  "conj-alergica": c => { c.guia = G_OLHO; },
  "dispepsia": c => {
    c.guia = {
      resumo: "Primeiro, **sinais de alarme** → endoscopia. Sem alarme e jovem: **testar e tratar H. pylori** (V Consenso Brasileiro: até 45 anos); a partir dos 40 anos a endoscopia ganha espaço. Suspender **AINE**. Confirmar a erradicação com teste respiratório ou antígeno fecal.",
      secoes: [
        {t: "Decidir", b: [
          {fluxo: [
            {t: "Dispepsia (dor/queimação epigástrica, plenitude, saciedade precoce)"},
            {t: "Perda de peso, disfagia, vômitos persistentes, sangramento/anemia, massa, história familiar de câncer gástrico?", ramos: [
              {r: "Sim", n: [{t: "Endoscopia com biópsias (prioridade)", k: "stop"}]},
              {r: "Não", n: [{t: "Revisar AINE, AAS, álcool, tabaco"}]}]},
            {t: "Idade", ramos: [
              {r: "≤ 45 anos", n: [{t: "Testar e tratar H. pylori (forte); IBP 4–8 semanas se teste negativo ou inacessível", k: "ok"}]},
              {r: "≥ 40 anos", n: [{t: "Considerar endoscopia com biópsias (fraca) – sobretudo se sintomas novos ou persistentes", k: "warn"}]}]},
            {t: "H. pylori positivo → erradicar 14 dias → confirmar erradicação", k: "ok"}
          ], nota: "V Consenso Brasileiro de H. pylori 2026 [F]; ACG/CAG 2017 usa 60 anos como corte para endoscopia [C]."},
          {ref: ["hp_consenso5", "acg_dispepsia"]}]},
        {t: "Erradicação e acesso", b: [
          {tab: {h: ["Esquema (14 dias)", "Fármacos", "Acesso"], r: [
            ["Tripla (TelessaúdeRS)", "Amoxicilina 1 g + claritromicina 500 mg + IBP, todos 12/12 h [F]", "Todos na REMUME [F]"],
            ["Quádrupla com bismuto (ênfase do V Consenso)", "IBP (omeprazol 40 mg) ou vonoprazana 20 mg 12/12 h + bismuto 240 mg 12/12 h + metronidazol 400–500 mg 6/6 h + tetraciclina 500 mg 6/6 h [F – esquema lido em resumo secundário]", "Bismuto, tetraciclina e vonoprazana: compra; preço não verificado"]]},
           nota: "Confirmar erradicação com teste respiratório com ureia-13C ou antígeno fecal monoclonal; suspender IBP 14 dias e antibiótico/bismuto 4 semanas antes; teste da urease não serve para controle (V Consenso) [F]. Úlcera: manter IBP 4–8 semanas após o esquema [F]."},
          {perola: {t: "IBP por tempo indeterminado é desprescrição pendente", x: "Dispepsia funcional que respondeu ao IBP: tentar reduzir para a menor dose ou uso sob demanda após 4–8 semanas. IBP contínuo sem indicação acumula riscos (fraturas, B12, infecções) sem benefício.", d: "menos polifarmácia.", l: "C"}},
          {ref: ["tele_hp", "hp_consenso5", "remume"]}]}
      ]};
  },
  "tensional": c => {
    c.guia = {
      resumo: "Cefaleia **em pressão, bilateral, leve a moderada, sem piora com atividade e sem náusea importante**. Afaste sinais de alarme, trate a crise com analgésico simples ou AINE e **limite os analgésicos** (< 15 dias/mês). Forma crônica (≥ 15 dias/mês): **amitriptilina** e manejo de sono, estresse e postura.",
      secoes: [
        {t: "Diferenciar e tratar", b: [
          {tab: {h: ["Característica", "Tensional", "Migrânea"], r: [
            ["Localização", "Bilateral, 'em capacete'", "Geralmente unilateral"],
            ["Qualidade", "Pressão/aperto", "Pulsátil"],
            ["Intensidade", "Leve a moderada", "Moderada a forte"],
            ["Atividade física", "Não piora", "Piora"],
            ["Náusea, foto/fonofobia", "Ausente (no máximo uma de foto/fonofobia)", "Presentes"]]},
           nota: "Critérios da ICHD-3 [C]."},
          {fluxo: [
            {t: "Cefaleia com padrão tensional"},
            {t: "Sinal de alarme (súbita, déficit, febre com rigidez, > 50 anos de início, mudança de padrão, imunossupressão)?", ramos: [
              {r: "Sim", n: [{t: "Urgência / investigação", k: "stop"}]},
              {r: "Não", n: [{t: "Frequência"}]}]},
            {t: "Dias de dor por mês", ramos: [
              {r: "< 15", n: [{t: "Crise: paracetamol 1 g ou AINE; limitar analgésico", k: "ok"}]},
              {r: "≥ 15 (crônica)", n: [{t: "Amitriptilina à noite + sono, atividade física, manejo do estresse; checar uso excessivo de analgésico", k: "warn"}]}]}
          ], nota: "Conduta [C]; doses no modelo de prescrição [NV]."},
          {ref: ["ichd3", "cab28", "remume"]}]}
      ]};
  }
};

CONDICOES.forEach(c => { [REV31, REV31G].forEach(m => { const f = m[c.id]; if (f) f(c); }); });
