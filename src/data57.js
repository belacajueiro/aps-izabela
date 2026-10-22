// ───────────── data57.js – v46: endemias regionais no módulo Infectologia – doença de Chagas, esporotricose humana,
// leishmaniose tegumentar e leishmaniose visceral (itens novos) + revisão de febre amarela e hanseníase (itens existentes).
// Conteúdo conferido em 22/10/2026 no Guia de Vigilância em Saúde 6ª ed. rev. (2024), vol. 2, nos PCDT de Chagas (2018) e
// Hanseníase (2022), nas NT 240/2025 (Chagas) e 20/2025 (esporotricose), na Portaria GM/MS 6.734/2025, na RENAME 2024,
// na REMUME Betim, no Manual de LTA do MS (2ª ed., reimpr. 2013), nas Diretrizes OPAS de leishmanioses (2022) e no Alerta SES-MG 01/2025.
Object.assign(FONTES, {
  gvs2_chagas: {s: "Guia de Vigilância em Saúde 6ª ed. (2024) – doença de Chagas", t: "Ministério da Saúde. Guia de Vigilância em Saúde, 6ª ed. revisada, 2024, vol. 2, cap. 8 – Doença de Chagas (cópia na base clínica): fases aguda e crônica (indeterminada, cardíaca ~30%, digestiva ~10%); diagnóstico agudo parasitológico (a fresco, Strout, micro-hematócrito) + sorologia; crônico por 2 sorologias IgG de princípios distintos; forma indeterminada com ECG anual; benznidazol 1ª escolha (Componente Estratégico), nifurtimox alternativa; tratamento de casos leves e forma indeterminada na UBS; álcool proibido durante o benznidazol (efeito antabuse); RN de mãe infectada: parasitológico nos primeiros 10 dias e 2 sorologias IgG após 9 meses; transmissão pelo leite só na fase aguda (na crônica, por sangramento de fissura); DCA: notificação imediata (24 h) no Sinan; DCC: notificação após confirmação no e-SUS Notifica, com sorologia de pais, irmãos e filhos (norma).", f: "F", url: "https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/svsa/vigilancia/guia-de-vigilancia-em-saude-volume-2-6a-edicao/view"},
  pcdt_chagas2018: {s: "PCDT Doença de Chagas (2018)", t: "Ministério da Saúde/CONITEC. Protocolo Clínico e Diretrizes Terapêuticas Doença de Chagas, relatório nº 397, out/2018 (GRADE; cópia no Drive da usuária): Tabela 2 – aguda: tratar todos; crônica indeterminada/digestiva: crianças, adolescentes e adultos < 50 anos – benznidazol; ≥ 50 anos – não tratar de rotina (decisão compartilhada); cardiopatia inicial (ECG alterado, FE > 40%, sem IC ou arritmia grave) – tratar ou não são alternativas válidas; cardiopatia avançada – não tratar; benznidazol adulto 5 mg/kg/dia em 1–3 tomadas por 60 dias, ou 300 mg/dia pelo número de dias igual ao peso (máx. 80 dias); criança 5–10 mg/kg/dia em 2 tomadas por 60 dias (comprimido 12,5 mg); nifurtimox 10 (adulto) e 15 (criança) mg/kg/dia em 3 tomadas por 60 dias, só em serviço especializado; eventos adversos com benznidazol ~53% (dermatite 30–44%, parestesias, intolerância GI); hemograma 3 semanas após o início; gestante na fase crônica: não tratar; aguda grave: tratar em qualquer IG; megaesôfago: nifedipina 10 mg SL 30 min ou isossorbida 5 mg SL 15 min antes das refeições; amiodarona por indicação; rastrear quem tem fator de risco e gestantes com fator de risco; Tabela 9 – APS × serviço especializado (norma).", f: "F", url: "https://www.gov.br/conitec/pt-br/midias/protocolos/pcdt_doenca_de_chagas.pdf"},
  nt240_2025: {s: "NT Conjunta 240/2025 – vigilância e diagnóstico da doença de Chagas", t: "Ministério da Saúde. Nota Técnica Conjunta nº 240/2025-CGZV/DEDT/SVSA/MS (assinada em jun/2025): rastreamento de crônicos a partir da APS em municípios prioritários; pessoas com fator de risco e gestantes no pré-natal – o PCDT recomenda só gestantes com fator de risco, mas a triagem universal pode ser estratégica em territórios vulneráveis; teste rápido só para descartar a fase crônica (positivo/inconclusivo → sorologias) e não é distribuído pelo MS; PCR não confirma nem descarta isoladamente; IgM só para fase aguda (IFI no laboratório de referência); amostras da fase crônica vão ao Lacen sem ficha de notificação; busca ativa de familiares, sobretudo RN e filhos de mães infectadas; GVS em revisão para a 7ª ed. (norma).", f: "F", url: "https://lacen.saude.pr.gov.br/sites/lacen/arquivos_restritos/files/documento/2026-02/nota_tecnica_conjunta_no_2402025-cgzvdedtsvsams-doencas_de_chagas.pdf"},
  bula_benz: {s: "Bula benznidazol LAFEPE (transcrição)", t: "LAFEPE. Benznidazol 100 mg e 12,5 mg – bula (transcrição em bula.com.br, consultada em 22/10/2026): adulto 5–7 mg/kg/dia em 2 tomadas por 30–60 dias; criança < 12 anos 5–10 mg/kg/dia em 2 tomadas por 60 dias (2,5–< 5 kg: 1 comprimido de 12,5 mg 2x/dia; 5–< 10 kg: 2 comprimidos 2x/dia; 10–< 15 kg: 3 comprimidos 2x/dia); gestação categoria C; passa ao leite; evitar álcool; exames de sangue durante o tratamento; contracepção em idade fértil; interação com varfarina e AAS (bula; conferir no Bulário ANVISA).", f: "F", url: "https://bula.com.br/benznidazol-lafepe"},
  gvs2_esporo: {s: "Guia de Vigilância em Saúde 6ª ed. (2024) – esporotricose", t: "Ministério da Saúde. Guia de Vigilância em Saúde, 6ª ed. revisada, 2024, vol. 2, cap. 6 – Esporotricose: transmissão felina por S. brasiliensis (arranhadura, mordedura, secreções), sem transmissão inter-humana; incubação de 1–2 semanas na zoonótica; formas linfocutânea (60–70%), cutânea fixa (~25%), disseminada (< 5%), extracutâneas (< 2%; ocular, osteoarticular, pulmonar, SNC); cultura é o padrão-ouro; fluxograma da APS – coletar swab/biópsia, exames de rotina (hemograma, hepatograma, função renal), iniciar com critério clínico-epidemiológico, consultas mensais até a cura (3–6 meses) e revisão 1–2 meses após suspender; Quadro 3 – itraconazol 200 mg/dia (criança 5–10 mg/kg/dia) após refeição, até 1 mês após a cura clínica; terbinafina 500 mg/dia (criança < 20 kg 62,5 mg; 20–40 kg 125 mg; > 40 kg 250 mg); iodeto de potássio saturado manipulado; anfotericina lipídica nos graves; Quadro 4 – interações do itraconazol; gestante: calor local ou criocirurgia; prednisona 0,5 mg/kg/dia nas reações de hipersensibilidade (norma).", f: "F", url: "https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/svsa/vigilancia/guia-de-vigilancia-em-saude-volume-2-6a-edicao/view"},
  nt20_2025_esporo: {s: "NT 20/2025 – vigilância e notificação da esporotricose humana", t: "Ministério da Saúde. Nota Técnica nº 20/2025-CGTM/DATHI/SVSA/MS (assinada em dez/2025–jan/2026): esporotricose humana na Lista Nacional (Portaria 6.734/2025), notificação semanal no e-SUS Sinan (B42) do caso confirmado – critério clínico-epidemiológico (lesão compatível + contato com gato, trauma com material orgânico) ou laboratorial (cultura ou PCR); itraconazol também no Componente Básico; Quadro 1 – adulto itraconazol 100–200 mg 1x/dia ou terbinafina 250–500 mg/dia; criança itraconazol 5–10 mg/kg/dia ou terbinafina 125 mg (> 40 kg 250 mg); gestante: calor local, criocirurgia e/ou terbinafina 250–500 mg em decisão compartilhada, anfotericina lipídica se grave; tempo médio de 4 meses, até 1 mês após a cicatrização; disseminada: anfotericina lipídica ~14 dias e itraconazol 200 mg 12/12 h por 3 meses a 1 ano; esporotricose animal não é de notificação nacional e o tratamento do animal não é oferecido pelo SUS (norma).", f: "F", url: "https://www.gov.br/aids/pt-br/central-de-conteudo/notas-tecnicas/2026/nota-tecnica-no-20_2025-cgtm_dathi_svsa_ms.pdf"},
  fda_itra: {s: "Bula FDA – itraconazol cápsulas (2024)", t: "Janssen. SPORANOX (itraconazole) capsules – prescribing information, FDA, 2024: advertência em caixa – insuficiência cardíaca e interações; contraindicada com vários substratos do CYP3A4 (ex.: sinvastatina, lovastatina, metadona, dronedarona, ticagrelor); cápsula absorvida melhor logo após refeição completa; antiácidos 2 h antes ou depois; absorção reduzida com acidez gástrica baixa (bula estrangeira; a bula brasileira não foi aberta).", f: "F", url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/020083s070lbl.pdf"},
  gvs2_lt: {s: "Guia de Vigilância em Saúde 6ª ed. (2024) – leishmaniose tegumentar", t: "Ministério da Saúde. Guia de Vigilância em Saúde, 6ª ed. revisada, 2024, vol. 2, cap. 8 – Leishmaniose tegumentar: úlcera indolor, bordas elevadas, fundo granuloso; incubação média 2–3 meses; caso suspeito – lesão de pele com ≥ 3 semanas em residente/exposto a área de transmissão, ou lesão de mucosa nasal; confirmar por método parasitológico antes de tratar, sobretudo casos atípicos; oferecer sorologia para HIV a todos; antimoniato de meglumina sistêmico ou intralesional na forma localizada (Manual 2017); miltefosina oral incorporada (proibida na gestação; contracepção dupla de 30 dias antes a 4 meses depois); mucosa: antimoniato + pentoxifilina em centro de referência; > 50 anos, insuficiência renal/cardíaca/hepática, transplantados e gestantes: anfotericina B lipossomal; cura: epitelização até 90 dias e sem crosta/infiltração até 180 dias; retorno mensal por 3 meses e depois a cada 2 meses até 12 meses; notificar caso confirmado (norma).", f: "F", url: "https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/svsa/vigilancia/guia-de-vigilancia-em-saude-volume-2-6a-edicao/view"},
  mlt2013: {s: "MS – Manual de Vigilância da LTA (2ª ed., reimpr. 2013)", t: "Ministério da Saúde. Manual de Vigilância da Leishmaniose Tegumentar Americana, 2ª ed. atualizada, 3ª reimpressão, 2013 (cópia hospedada pela SMS-Rio): antimoniato de meglumina 81 mg Sb⁵⁺/mL, ampola de 5 mL; forma cutânea 10–20 mg Sb⁵⁺/kg/dia (sugere 15) por 20 dias; difusa 20 mg/kg/dia por 20 dias; mucosa 20 mg/kg/dia por 30 dias; máximo 3 ampolas/dia (1.215 mg Sb⁵⁺) no adulto e metade na criança até 12 anos; IM ou EV lenta; contraindicado na gestação; restrições > 50 anos, cardiopatia, nefropatia, hepatopatia e doença de Chagas (ECG 2x/semana e exames semanais); ECG semanal nos demais; pode ser usado na amamentação (manual do MS, substituído pela edição de 2017, não aberta nesta revisão).", f: "F", url: "https://saude.prefeitura.rio/wp-content/uploads/sites/47/2023/04/manual_vigilancia_leishmaniose_tegumentar_americana_2edicao.pdf"},
  paho_leish2022: {s: "OPAS 2022 – Diretrizes de tratamento das leishmanioses nas Américas", t: "Organização Pan-Americana da Saúde. Diretrizes para o tratamento das leishmanioses na Região das Américas, 2ª ed., 2022 (GRADE): LC por L. braziliensis/amazonensis – antimonial intralesional (forte, baixa) para 1–3 lesões de até 3 cm, fora de cabeça e regiões periarticulares, sem imunossupressão: 3–5 infiltrações de 1–5 mL por lesão a cada 3–7 dias, máx. 15 mL/dia; miltefosina 2,5 mg/kg/dia (máx. 150 mg) por 28 dias (forte, baixa); antimonial sistêmico 20 mg Sb⁵⁺/kg/dia por 20 dias, máx. 3 ampolas (condicional); gestante: termoterapia ou anfotericina B lipossomal – antimonial, miltefosina e pentamidina contraindicados; lactante: intralesional, termoterapia ou anfotericina; ECG alterado: evitar antimonial sistêmico; > 50 anos: evitar antimonial; mucosa: antimonial ± pentoxifilina (diretriz internacional).", f: "F", url: "https://www.paho.org/pt/documentos/diretrizes-para-tratamento-das-leishmanioses-na-regiao-das-americas-segunda-edicao"},
  gvs2_lv: {s: "Guia de Vigilância em Saúde 6ª ed. (2024) – leishmaniose visceral", t: "Ministério da Saúde. Guia de Vigilância em Saúde, 6ª ed. revisada, 2024, vol. 2, cap. 8 – Leishmaniose visceral: sem tratamento, letalidade > 90%; cão é a principal fonte de infecção urbana; caso suspeito – febre e esplenomegalia em quem vem de área com transmissão; teste rápido imunocromatográfico (rK39) reagente confirma, RIFI ≥ 1:80, parasitológico de medula; sorologia positiva sem clínica não se trata nem se notifica; antimoniato 20 mg Sb⁵⁺/kg/dia EV/IM por 20–40 dias (máx. 3 ampolas), ECG semanal se > 40 anos ou história familiar de cardiopatia; anfotericina B lipossomal 3 mg/kg/dia por 7 dias ou 4 mg/kg/dia por 5 dias – indicações (< 1 ano, > 50 anos, insuficiência renal/hepática/cardíaca, QTc > 450 ms, drogas que alargam o QT, HIV, imunossupressão, gestação, falha, escores de gravidade); hemorragia digestiva e icterícia indicam gravidade; casos graves no hospital, leves e intermediários no ambulatório; seguimento aos 3, 6 e 12 meses; todo caso suspeito é notificado (norma).", f: "F", url: "https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/svsa/vigilancia/guia-de-vigilancia-em-saude-volume-2-6a-edicao/view"},
  gvs2_fa: {s: "Guia de Vigilância em Saúde 6ª ed. (2024) – febre amarela", t: "Ministério da Saúde. Guia de Vigilância em Saúde, 6ª ed. revisada, 2024, vol. 2, cap. 7 – Febre amarela: incubação 3–6 dias (até 15); formas graves 20–40% com letalidade de 20–50%; curso bifásico (remissão de horas a 2 dias entre o 3º e o 5º dia, depois icterícia, insuficiência renal e sangramento); caso suspeito – não vacinado/ignorado, febre aguda com icterícia e/ou hemorragia e exposição em 15 dias; forma leve só ambulatorial com transaminases, creatinina, RNI e hemograma a cada 24 h até 48 h sem febre – sem essa monitorização, manejar como moderada (internar); paracetamol até 3 g/dia, sem AAS/AINE; vacinar após a alta se não confirmado; notificação imediata; vacina: 9 meses + reforço aos 4 anos; ≥ 5 anos com 1 dose antes dos 5 → reforço; 5–59 anos não vacinados → dose única; ≥ 60 anos, gestantes e lactantes de < 6 meses: avaliar risco-benefício (lactante: suspender amamentação por 10 dias se não puder adiar); ≥ 10 dias antes de área de risco; intervalo de 30 dias (mín. 15) com tríplice/tetraviral em < 2 anos; contraindicações (< 6 meses, imunossupressão, HIV com CD4 < 200, doenças do timo, anafilaxia a ovo/gelatina, hidroxiureia com neutrófilos < 1.500) (norma).", f: "F", url: "https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/svsa/vigilancia/guia-de-vigilancia-em-saude-volume-2-6a-edicao/view"},
  gvs2_hansen: {s: "Guia de Vigilância em Saúde 6ª ed. (2024) – hanseníase", t: "Ministério da Saúde. Guia de Vigilância em Saúde, 6ª ed. revisada, 2024, vol. 2, cap. 5 – Hanseníase: Quadro 1 (OMS 2018) – PQT-U adulto > 50 kg; infantil 30–50 kg (rifampicina 450 mg, clofazimina 150 mg e dapsona 50 mg mensais; clofazimina 50 mg em dias alternados e dapsona 50 mg diárias); < 30 kg por peso (rifampicina 10 mg/kg, clofazimina 6 mg/kg e dapsona 2 mg/kg mensais; clofazimina 1 mg/kg/dia e dapsona 2 mg/kg/dia); MB 12 e PB 6 meses; um único nervo acometido: OMS classifica como MB, a literatura brasileira como PB; teste rápido e qPCR só na investigação de contatos; ANS no diagnóstico, a cada 3 meses e na alta; faltoso: visita em até 30 dias; abandono: PB > 3 meses e MB > 6 meses sem comparecer; recidiva: atividade após 5 anos de tratamento regular; notificação semanal do caso confirmado (norma).", f: "F", url: "https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/svsa/vigilancia/guia-de-vigilancia-em-saude-volume-2-6a-edicao/view"},
  betim_feridas2026: {s: "SMS Betim – Memorando 0002892/2026 (Dermatologia da Colônia Santa Izabel)", t: "SMS Betim, Diretoria de Regulação. Memorando nº 0002892, de 02/06/2026: criação no CMCE do item 'Consulta de Avaliação de Feridas FHEMIG' para lesões crônicas venosas ou arteriais de difícil manejo na APS, atendidas pelo serviço de Dermatologia da Colônia Santa Izabel, com regulação (documento municipal anexado ao Projeto).", f: "F", url: ""}
});
if (FONTES.pcdt_hansen2022) FONTES.pcdt_hansen2022.t += " Revisão 22/10/2026 (texto integral do PCDT, item 13): contato = quem reside ou residiu, conviva ou conviveu no domicílio nos 5 anos anteriores ao diagnóstico; BCG para contatos > 1 ano não vacinados ou com só 1 dose (cartão ou cicatriz), contraindicada em imunodeficiência, neoplasia, corticoide em dose alta > 2 semanas e gestação; contato com anti-PGL1 positivo sem doença → avaliação anual na UBS; reação tipo 1: prednisona 1 mg/kg/dia, reduzir ~10 mg a cada 15 dias até 20 mg, depois 5 mg a cada 15 dias, mínimo ~6 meses; profilaxia de estrongiloidíase (albendazol 400 mg/dia por 3 dias ou ivermectina 200 mcg/kg dose única); reação tipo 2: talidomida 100–400 mg/dia (não autorizada < 18 anos; AAS 100 mg se associada a corticoide) ou pentoxifilina; criança com reação tipo 2: clofazimina 1,5–2 mg/kg 3x/dia no 1º mês, 2x no 2º, 1x no 3º (máx. 300 mg/dia).";

const END_LINKS = [["in-chagas", "Doença de Chagas"], ["in-esporotricose", "Esporotricose"], ["in-lt", "Leishmaniose tegumentar"], ["in-lv", "Leishmaniose visceral"], ["febre-amarela", "Febre amarela"], ["febre-maculosa", "Febre maculosa"], ["in-hansen", "Hanseníase"]];

CONDICOES.push(
// ════════════════════════════════════════ 1. DOENÇA DE CHAGAS
{
  id: "in-chagas", modulo: "in", nome: "Doença de Chagas: rastreio, diagnóstico, benznidazol e seguimento", sistema: "Endemias e zoonoses", risco: "moderado",
  ciap: "A78", cid: "B57", tags: "doença de Chagas tripanossomíase Trypanosoma cruzi barbeiro triatomíneo casa de pau a pique taipa transfusão antes de 1992 forma indeterminada cardiopatia chagásica megaesôfago megacólon benznidazol nifurtimox sorologia ELISA HAI IFI CMIA gestante transmissão vertical recém-nascido Romaña chagoma",
  alerta: "Suspeita de fase AGUDA (febre > 7 dias com Romaña/chagoma, edema, hepatoesplenomegalia, sinais de miocardite ou sangramento, após barbeiro, alimento suspeito, transfusão/transplante; ou RN de mãe infectada): notificação imediata (até 24 h) e coleta de parasitológico + sorologia no mesmo dia. Miocardite, meningoencefalite ou sangramento → hospital. Na fase crônica, gestante NÃO recebe benznidazol.",
  S: `Paciente, ___ anos, encaminhado(a) por ___ (rastreio / familiar com Chagas / sorologia reagente em ___ / doação de sangue).
Fatores de risco: morou em casa de ___ (pau a pique, taipa, sapê) em ___ (local) até ___ anos; contato com barbeiro ___; transfusão antes de 1992 ___; mãe ou irmãos com Chagas ___.
Sintomas: palpitações ___ | síncope/tontura ___ | dispneia/edema ___ | disfagia/regurgitação ___ | constipação crônica (dias sem evacuar ___) ___.
Gestação / desejo de engravidar ___. Método contraceptivo ___. Álcool ___. HIV/imunossupressão ___. Medicações em uso ___.`,
  O: `${VITAIS}
Ritmo cardíaco ___ | B3/sopros ___ | sinais de congestão ___ | edema ___.
Sorologias anti-T. cruzi (IgG): ___ (método 1, data, resultado) e ___ (método 2, data, resultado).
ECG (data ___): ___ (BRD, BDAS, BAV, extrassístoles, área inativa) | RX de tórax: ___ | Eco (se feito): FEVE ___%.`,
  A: `Doença de Chagas crônica, forma ___ (indeterminada / cardíaca inicial / cardíaca avançada / digestiva / mista), confirmada por 2 sorologias de princípios distintos.`,
  P: `- Notificação da doença de Chagas crônica (e-SUS Notifica) após a confirmação.
- Avaliação inicial: ECG, RX de tórax; eco ___ (se ECG alterado); esofagograma/enema opaco ___ (se sintomas digestivos).
- Tratamento etiológico: ___ (benznidazol ___ mg/dia por ___ dias / não indicado / decisão compartilhada: ___). Sem álcool durante o tratamento e até ___. Contracepção ___.
- Hemograma em 3 semanas do início; retorno em ___ para eventos adversos (pele, formigamento, febre, dor de garganta).
- Sorologia de pais, irmãos e filhos ___ (solicitada).
- Seguimento: ECG anual (forma indeterminada) / cardiologia ___.`,
  rx: [
    {trilha: "ambos", titulo: "ADULTO – benznidazol (PCDT 2018)", texto: "USO ORAL\n1. Benznidazol 100 mg ______ ___ comprimidos\n   Tomar ___ mg por dia (5 mg/kg/dia = ___ mg para ___ kg), divididos em 2 tomadas, após o café da manhã e o jantar, por 60 dias.\n   OU (peso > 60 kg): 300 mg por dia (1 comprimido de manhã, 1 à tarde, 1 à noite) por ___ dias (número de dias = peso em kg; máximo 80 dias).\n   Não beber álcool durante o tratamento.", dose: "F", nota: "Quatro fontes: PCDT 2018 – 5 mg/kg/dia em 1–3 tomadas por 60 dias, ou 300 mg/dia pelo número de dias igual ao peso (máx. 80) [F]; bula LAFEPE – 5–7 mg/kg/dia em 2 tomadas por 30–60 dias [F]; o SUS segue o PCDT. Hemograma 3 semanas após o início (neutropenia) [F]. Componente Estratégico: retirada pelo fluxo da SES-MG/vigilância – não consta da REMUME Betim [F]."},
    {trilha: "ambos", titulo: "CRIANÇA – benznidazol 12,5 mg (comprimido dispersível)", texto: "USO ORAL\n1. Benznidazol 12,5 mg ______ ___ comprimidos\n   Dar ___ comprimido(s) de 12 em 12 horas, dissolvidos em pouca água, suco de laranja ou leite, por 60 dias.\n   (5–10 mg/kg/dia; peso ___ kg)", dose: "F", nota: "PCDT: 5–10 mg/kg/dia em 2 tomadas por 60 dias; 2,5–5 kg: 1 comprimido 2x/dia; 5–10 kg: 2 comprimidos 2x/dia [F]. Para 10–15 kg o PCDT escreve '3 comprimidos 3x/dia' e a bula '3 comprimidos 2x/dia' (75 mg/dia) [F] – o esquema 2x/dia da bula fica dentro de 5–10 mg/kg; confirmar com a referência [NV]. Acima de 15 kg, calcular por peso com comprimidos de 12,5 e 100 mg [I]."},
    {trilha: "ambos", titulo: "Megaesôfago chagásico – alívio sintomático", texto: "USO SUBLINGUAL\n1. Isossorbida (dinitrato) 5 mg ______ 1 caixa\n   Colocar 1 comprimido debaixo da língua 15 minutos antes das principais refeições.\n   (Suspender se dor de cabeça forte, tontura ou queda de pressão.)", dose: "F", nota: "PCDT Tabela 7: dinitrato de isossorbida 5 mg SL 15 min antes da refeição (cefaleia, hipotensão) ou nifedipina 10 mg SL 30 min antes (não usar na cardiopatia grave) [F]. Isossorbida 5 mg SL na REMUME Betim; nifedipina não localizada na REMUME [F]. Efeito só sintomático; casos intensos → gastroenterologia (dilatação, toxina, cirurgia) [F]."}
  ],
  orient: `A doença de Chagas tem tratamento e acompanhamento pelo SUS. Muitas pessoas vivem a vida toda sem problemas no coração ou no intestino, mas o acompanhamento com eletrocardiograma é importante.
Se você for tratar com benznidazol: tome por 60 dias, sem parar por conta própria, e não beba nenhuma bebida alcoólica durante o tratamento.
Manchas vermelhas ou coceira na pele, formigamento nas mãos e pés, febre, dor de garganta ou feridas na boca: avise a equipe – pode ser preciso ajustar ou parar o remédio. Vamos colher sangue em 3 semanas.
Mulheres: use método para não engravidar durante o tratamento. Gestantes com Chagas fazem pré-natal normalmente; o bebê será examinado ao nascer.
Seus pais, irmãos e filhos devem fazer o exame de sangue para Chagas.
Se encontrar um barbeiro em casa, não esmague com a mão: capture com saco plástico e leve ao posto de saúde.`,
  alarme: ["Desmaio, palpitação forte ou falta de ar", "Inchaço nas pernas que piora", "Engasgos frequentes ou perda de peso por não conseguir engolir", "Mais de 7 dias sem evacuar com barriga inchada", "Manchas na pele com bolhas, feridas na boca, febre ou dor de garganta durante o benznidazol"],
  encaminhar: "APS: fase aguda não grave, crônica indeterminada, cardíaca/digestiva estável e não grave, gestante crônica sem comorbidade. Serviço especializado: fase aguda grave (miocardite, encefalite), gestante com cardiopatia ou na fase aguda, cardiopatia com arritmia grave, TVNS de alto risco, IC ou candidatos a CDI/ablação/transplante, doença digestiva para tratamento específico, HIV/transplante, intolerância grave ao benznidazol e uso de nifurtimox (PCDT, Tabela 9). Fase aguda: notificar imediatamente e acionar a vigilância.",
  sus: {nacional: "Benznidazol 100 mg e 12,5 mg e nifurtimox 120 mg no Componente Estratégico (RENAME 2024) [F]; distribuição trimestral às SES, que definem o fluxo de dispensação [F]. Sorologias pelo laboratório da rede/Lacen; teste rápido não distribuído pelo MS [F]. Notificação: fase aguda imediata (Sinan); crônica semanal, após confirmação (e-SUS Notifica) (Portaria 6.734/2025; GVS 2024) [F].", betim: "REMUME Betim: benznidazol e nifurtimox não constam (Componente Estratégico) [F]; isossorbida 5 mg SL, amiodarona 200 mg, enalapril, carvedilol e espironolactona constam [F]. Fluxo de retirada do benznidazol, laboratório das sorologias e referência em cardiologia em Betim: confirmar com a vigilância/assistência farmacêutica [NV]."},
  evid: {resumo: "O tratamento etiológico é indicado em toda fase aguda, na reativação e em crianças e adolescentes na fase crônica (negativação sorológica alta). Em adultos com a forma indeterminada, o benefício clínico é incerto: o PCDT considera o tratamento até 50 anos (decisão compartilhada) e não trata de rotina a partir dos 50. Na cardiopatia já estabelecida, o benznidazol não reduziu desfechos clínicos (BENEFIT) e o PCDT não recomenda tratar a cardiopatia avançada. Cerca de metade dos tratados tem eventos adversos, sobretudo dermatite.", certeza: "Moderada em crianças; baixa em adultos na forma indeterminada (PCDT, GRADE)", fontes: ["pcdt_chagas2018", "gvs2_chagas", "nt240_2025", "bula_benz", "port6734", "rename", "remume"]},
  mudancas: ["Item novo (v46): rastreio, confirmação, decisão de tratar por idade e forma, benznidazol com as quatro fontes de dose, gestação e transmissão vertical, notificação e coordenação do cuidado."],
  nv: ["Benznidazol 12,5 mg para 10–15 kg: PCDT (3 comprimidos 3x/dia) × bula (3 comprimidos 2x/dia) – confirmar com a referência.", "Bula do benznidazol no Bulário ANVISA (a consultada é transcrição).", "Fluxo de dispensação do benznidazol em Betim/SES-MG e laboratório das sorologias.", "Se o protocolo de pré-natal de Betim inclui sorologia para Chagas (o PDF do Projeto é só imagem)."],
  guia: {
    resumo: "Na APS o trabalho é **achar** (rastrear quem tem fator de risco), **confirmar** (2 sorologias IgG de princípios distintos), **definir a forma** (ECG e RX de tórax) e **decidir o benznidazol pela idade e pela forma** – criança e adolescente: tratar; adulto < 50 anos na forma indeterminada: tratar após conversa; ≥ 50 anos ou cardiopatia avançada: em geral não. Gestante na fase crônica: **não trata**, mas o **bebê é testado**.",
    secoes: [
      {t: "Quem testar", b: [
        {ul: ["Morou na infância ou mora em área com barbeiro ou em casa de estuque, taipa, sapê, pau a pique [F].", "Transfusão de sangue ou hemoderivados **antes de 1992** [F].", "Familiar ou pessoa do convívio com Chagas – sobretudo **filho(a) de mãe infectada** [F].", "Pessoa com HIV ou imunossupressão com história epidemiológica compatível (risco de reativação) – em qualquer idade [F].", "Sem fator de risco: **não** rastrear (baixa prevalência) [F]."]},
        {trio: {ideal: "OPAS e a NT 240/2025 apontam a triagem pré-natal como estratégia para eliminar a transmissão vertical; a NT admite triagem universal de gestantes em territórios vulneráveis.", sus: "O PCDT (2018) e o GVS (2024) recomendam testar só gestantes com fator de risco e sem sorologia prévia. Não consegui confirmar se o protocolo de pré-natal de Betim inclui Chagas.", ponte: "Pergunte a toda gestante sobre os fatores de risco e peça a sorologia quando houver ao menos um – com os exames do 1º trimestre."}},
        {ref: ["pcdt_chagas2018", "gvs2_chagas", "nt240_2025"]}
      ]},
      {t: "Confirmar o diagnóstico (fase crônica)", b: [
        {fluxo: [
          {t: "Suspeita de fase crônica (fator de risco, ECG sugestivo, familiar)"},
          {t: "2 sorologias IgG de princípios distintos (ELISA, HAI, IFI ou CMIA)", ramos: [
            {r: "2 reagentes", n: [{t: "Confirmado: notificar (e-SUS Notifica) e definir a forma clínica", k: "warn"}]},
            {r: "1 reagente e 1 não", n: [{t: "Repetir as duas; persistindo, 3º teste de princípio distinto em nova amostra", k: "warn"}]},
            {r: "2 não reagentes", n: [{t: "Descartado", k: "ok"}]}]}
        ], nota: "GVS 2024, Figura 4, e NT 240/2025 [F]. Teste rápido: só serve para **descartar** (negativo descarta; positivo ou inconclusivo → sorologias) e não é distribuído pelo MS [F]. PCR não confirma nem descarta isoladamente [F]. Imunossuprimido pode ter sorologia falsamente negativa [F]."},
        {ref: ["gvs2_chagas", "nt240_2025"]}
      ]},
      {t: "Forma clínica e exames", b: [
        {tab: {h: ["Forma", "Como se define", "O que fazer"], r: [
          ["Indeterminada", "Sem sintomas; ECG e RX de tórax normais (e esôfago/cólon normais se investigados) [F]", "ECG **anual** [F]; discutir benznidazol pela idade"],
          ["Cardíaca inicial", "ECG alterado, FE > 40%, sem IC e sem arritmia grave [F]", "Eco (e Holter se possível) [F]; tratar ou não são alternativas válidas – decisão compartilhada [F]"],
          ["Cardíaca avançada", "IC, FE ≤ 40%, arritmia grave [I]", "Não fazer benznidazol [F]; tratar a IC/arritmia; cardiologia"],
          ["Digestiva", "Megaesôfago (disfagia, regurgitação) ou megacólon (constipação grave) [F]", "Esofagograma / enema opaco [F]; benznidazol segue a regra da forma indeterminada [F]"]]},
         nota: "Exame inicial na fase crônica: ECG e RX de tórax; ECG alterado → eco e, se possível, Holter (GVS 2024) [F]. Mais de 50% dos infectados terão alteração de ECG ao longo da vida; a morte súbita é a principal causa de óbito na cardiopatia (PCDT) [F]."},
        {ref: ["gvs2_chagas", "pcdt_chagas2018"]}
      ]},
      {t: "Tratar ou não (benznidazol)", b: [
        {tab: {h: ["Situação", "PCDT 2018"], r: [
          ["Fase aguda (qualquer idade) e reativação", "Tratar sempre; benznidazol 1ª linha, nifurtimox 2ª [F]"],
          ["Crônica indeterminada/digestiva – criança e adolescente", "Tratar [F]"],
          ["Crônica indeterminada/digestiva – adulto < 50 anos", "Tratar após decisão compartilhada (benefício provável, eventos adversos em ~50%) [F]"],
          ["Crônica indeterminada/digestiva – ≥ 50 anos", "Não tratar de rotina; considerar se infecção na vida adulta, boa expectativa de vida e sem comorbidade [F]"],
          ["Cardiopatia inicial", "Tratar ou não – decisão compartilhada [F]"],
          ["Cardiopatia avançada", "Não tratar [F]"],
          ["Mulher em idade fértil", "Tratar pode reduzir o risco de transmissão congênita (benefício adicional); contracepção durante o tratamento [F]"],
          ["Gestante na fase crônica", "Não tratar na gestação [F]"],
          ["HIV sem tratamento prévio", "Tratar, preferencialmente com benznidazol [F]"]]},
         nota: "Na cardiopatia estabelecida, o ECR BENEFIT (NEJM 2015) não mostrou redução de desfechos clínicos com benznidazol [C]. Controle sorológico pós-tratamento: não recomendado na fase crônica [F]."},
        {perola: {t: "Ninguém 'cura' a fibrose", x: "O tratamento não reverte lesões já instaladas; o objetivo é reduzir a progressão e a transmissão – por isso o benefício é maior quanto mais jovem e mais inicial a doença [F].", d: "menos progressão para cardiopatia e menos transmissão vertical.", l: "F"}},
        {ref: ["pcdt_chagas2018", "gvs2_chagas"]}
      ]},
      {t: "Benznidazol na prática", b: [
        {doses: {r: [
          ["Dose", "5 mg/kg/dia em 1–3 tomadas por 60 dias; ou 300 mg/dia pelo nº de dias = peso (máx. 80 dias) [F]", "5–10 mg/kg/dia em 2 tomadas por 60 dias (comprimido de 12,5 mg) [F]"],
          ["Exame", "Hemograma em 3 semanas [F]", "Hemograma em 3 semanas [F]"],
          ["Álcool", "Proibido durante o tratamento (efeito antabuse) [F]", "—"]], nota: "PCDT 2018 e GVS 2024 [F]. Bula LAFEPE: adulto 5–7 mg/kg/dia por 30–60 dias [F]."}},
        {ul: ["Eventos adversos (~53%): dermatite/rash (30–44%, geralmente sem suspender), intolerância GI, parestesia (pode persistir meses), artralgia; raros e graves: depressão medular com neutropenia [F].", "Referenciar: dermopatia grave, lesões de mucosa, neuropatia, hipoplasia medular [F]; suspender o benznidazol nesses casos até a avaliação [I].", "Nifurtimox (intolerância ou falha): só em serviço especializado [F].", "Contracepção durante o tratamento [F]."]},
        {ref: ["pcdt_chagas2018", "gvs2_chagas", "bula_benz"]}
      ]},
      {t: "Gestação, bebê e amamentação", b: [
        {ul: ["Gestante na fase crônica sem cardiopatia: pré-natal na APS; com cardiopatia ou na fase aguda: alto risco [F].", "Benznidazol na gestação: só na fase aguda (grave, em qualquer IG; não grave, preferir o 2º trimestre) [F].", "RN de mãe infectada: notificar como suspeito de transmissão vertical; parasitológico prioritariamente até o **10º dia** [F].", "Parasitológico negativo e sem sintomas: **2 sorologias IgG após os 9 meses**; ambas negativas descartam [F].", "Testar os **outros filhos** da mãe infectada [F].", "Amamentação: na fase crônica, só há risco se a fissura sangrar [F]."]},
        {ref: ["gvs2_chagas", "pcdt_chagas2018", "nt240_2025"]}
      ]},
      {t: "Complicações na APS", b: [
        {ul: ["IC: tratar como nas demais etiologias, com cautela com betabloqueador (bradicardia e bloqueios são comuns) [F].", "Amiodarona: de rotina após PCR ou TV sustentada; considerar na TVNS de alto risco (disfunção de VE, escore de Rassi alto); **não** usar em extrassístoles simples ou TVNS de baixo risco; consultas a cada 3 meses no 1º ano [F].", "Anticoagulação: considerar se disfunção sistólica, aneurisma apical, alteração de repolarização ou idade avançada (maior risco embólico) [F].", "Megacólon: fibras, líquidos, laxativo osmótico, evitar constipantes; fecaloma ou volvo → urgência [F]."]},
        {ir: [["cr-ic", "IC com FE reduzida"], ["cr-fa", "Fibrilação atrial"], ["constipacao", "Constipação"]]},
        {ref: ["pcdt_chagas2018"]}
      ]},
      {t: "Fase aguda e vigilância", b: [
        {ul: ["Suspeito de fase aguda: febre > 7 dias com edema de face/membros, exantema, adenomegalia, hepatoesplenomegalia, cardiopatia aguda, sangramento ou icterícia + barbeiro, alimento suspeito (açaí, caldo de cana, carne de caça), transfusão/transplante em 120 dias; ou Romaña/chagoma [F].", "Coletar **ao mesmo tempo** parasitológico (a fresco/Strout) e sorologia; notificar em até 24 h [F].", "Fase crônica: notificar só após a confirmação; pedir sorologia de pais, irmãos e filhos [F].", "Barbeiro encontrado em casa: entregar no posto de identificação (PIT) sem esmagar com a mão [F]."]},
        {ir: END_LINKS},
        {ref: ["gvs2_chagas", "port6734"]}
      ]}
    ]}
},
// ════════════════════════════════════════ 2. ESPOROTRICOSE
{
  id: "in-esporotricose", modulo: "in", nome: "Esporotricose humana: suspeita, itraconazol e notificação", sistema: "Endemias e zoonoses", risco: "moderado",
  ciap: "S76", cid: "B42", tags: "esporotricose Sporothrix brasiliensis doença do gato doença do jardineiro arranhadura de gato ferida que não cicatriza nódulos em cadeia linfocutânea conjuntivite granulomatosa itraconazol terbinafina iodeto de potássio notificação e-SUS Sinan zoonose",
  alerta: "Lesão ocular (conjuntivite granulomatosa, olho vermelho com secreção após contato com gato doente), forma disseminada, febre/comprometimento geral, HIV/imunossupressão ou suspeita de osso/articulação, pulmão ou SNC → referência no mesmo dia. Gestante: iodeto é contraindicado e o MS não inclui itraconazol entre as opções – decisão individualizada (calor local, criocirurgia, terbinafina; anfotericina se grave).",
  S: `Paciente, ___ anos, com lesão(ões) em ___ há ___ semanas: pápula/nódulo que ulcerou ___, secreção ___, nódulos subindo pelo braço/perna ___, dor ___.
Exposição: gato doente/arranhadura/mordedura em ___ (há ___ dias); gato com feridas no focinho/orelhas ___; trauma com espinho/madeira/terra ___; ocupação ___ (jardinagem, veterinária, banho e tosa, construção).
Olho vermelho/secreção ___ | febre ___ | dor articular ___ | tosse ___. HIV/diabetes/etilismo/corticoide ___. Gestação/amamentação ___.
Medicações em uso (sinvastatina, varfarina, omeprazol, antiácidos, amitriptilina, carbamazepina, antirretrovirais) ___.`,
  O: `${VITAIS}
Lesão(ões): ___ (número ___, tamanho ___ cm, local ___), padrão ___ (fixa / linfocutânea em cadeia / disseminada). Linfonodos ___.
Olhos ___ | articulações ___.`,
  A: `Esporotricose ___ (cutânea fixa / linfocutânea / disseminada), critério ___ (clínico-epidemiológico / laboratorial).`,
  P: `- Coleta de swab/biópsia da lesão para micológico direto e cultura (Lacen): ___.
- Hemograma, TGO/TGP e creatinina basais: ___.
- Itraconazol 200 mg/dia após o almoço com suco cítrico, até 1 mês após a cicatrização completa.
- Revisadas interações: ___.
- Notificação no e-SUS Sinan (B42) do caso confirmado; comunicar a vigilância/zoonoses se transmissão felina.
- Orientado manejo do gato (veterinário, isolamento, luvas) e limpeza com hipoclorito.
- Retorno mensal até a cura; reavaliar 1–2 meses após suspender.`,
  rx: [
    {trilha: "ambos", titulo: "ADULTO – itraconazol (1ª escolha)", texto: "USO ORAL\n1. Itraconazol 100 mg ______ 60 cápsulas\n   Tomar 2 cápsulas juntas 1 vez ao dia, logo após o almoço, com suco de laranja ou limão.\n   Não tomar junto com leite/derivados, antiácidos ou omeprazol.\n   Uso contínuo até 1 mês depois que as feridas cicatrizarem (reavaliação mensal).", dose: "F", nota: "GVS 2024: 200 mg/dia em tomada única após o almoço, com suco cítrico; NT 20/2025: 100–200 mg/dia [F]. Duração média 3–4 meses, até 1 mês após a cura clínica [F]. Interações (GVS Quadro 4): evitar varfarina e amitriptilina (QT); estatinas – sinvastatina contraindicada (bula FDA), atorvastatina com risco de rabdomiólise; antiácidos, IBP e anti-H2 reduzem a absorção; carbamazepina e fenitoína reduzem o itraconazol; antirretrovirais (efavirenz, ritonavir, darunavir) [F]. Insuficiência cardíaca: advertência da bula FDA [F]. Itraconazol 100 mg na REMUME Betim [F]."},
    {trilha: "ambos", titulo: "CRIANÇA – itraconazol 5–10 mg/kg/dia", texto: "USO ORAL\n1. Itraconazol 100 mg ______ ___ cápsulas\n   Dar ___ mg (5–10 mg/kg/dia; peso ___ kg) 1 vez ao dia, logo após uma refeição.\n   Se não conseguir engolir: abrir a cápsula e misturar em suco cítrico.", dose: "F", nota: "GVS 2024 e NT 20/2025: 5–10 mg/kg/dia 1x/dia [F]; abrir a cápsula só quando não for possível deglutir (GVS) [F]. Solução oral 10 mg/mL está na RENAME (Básico), mas não na REMUME Betim [F]."},
    {trilha: "fora", titulo: "Alternativa – terbinafina (intolerância/interação com itraconazol)", texto: "USO ORAL\n1. Terbinafina 250 mg ______ ___ comprimidos\n   Tomar 1 a 2 comprimidos (250–500 mg) 1 vez ao dia até 1 mês após a cicatrização.\n   Criança: < 20 kg 62,5 mg; 20–40 kg 125 mg; > 40 kg 250 mg, 1 vez ao dia.", dose: "F", nota: "NT 20/2025: adulto 250–500 mg/dia; criança 125 mg (> 40 kg 250 mg) [F]; GVS 2024: adulto 500 mg/dia; < 20 kg 62,5, 20–40 kg 125, > 40 kg 250 mg [F]. Menos interações (não usa o CYP450); efeitos: cefaleia, alteração do paladar, GI, neutropenia, rash [F]. Não localizei terbinafina na RENAME 2024 nem na REMUME Betim [NV] – compra."}
  ],
  orient: `A esporotricose é causada por um fungo e tem cura com o remédio tomado todos os dias. Não passa de pessoa para pessoa.
Tome o itraconazol logo depois do almoço, com suco de laranja ou limão. Evite leite e derivados perto do horário e não use omeprazol ou antiácido sem falar com a equipe.
O tratamento dura alguns meses e continua por 1 mês depois que as feridas fecharem. Venha todo mês.
O gato doente precisa de veterinário (o tratamento do animal não é feito pelo SUS). Não abandone o gato: isso espalha a doença. Mantenha-o isolado durante o tratamento, use luvas ao cuidar dele e lave as mãos e os braços depois.
Limpe com água sanitária os lugares onde o gato doente fica. Se o gato morrer, não enterre: procure o serviço de zoonoses.`,
  alarme: ["Olho vermelho, com secreção ou dor", "Feridas espalhando pelo corpo", "Febre, falta de ar ou dor nas juntas", "Pele ou olhos amarelados, urina escura (efeito do remédio)", "Inchaço nas pernas ou falta de ar ao deitar (efeito raro do itraconazol)"],
  encaminhar: "Forma ocular → oftalmologia com urgência; disseminada, extracutânea, imunossuprimido (HIV), gestante com forma grave, falha ou dúvida diagnóstica → infectologia/dermatologia de referência (casos atípicos via regulação). Anfotericina lipídica e posaconazol: só em referência (MS).",
  sus: {nacional: "Itraconazol 100 mg cápsula no Componente Básico e no Estratégico; solução oral 10 mg/mL no Básico (RENAME 2024) [F]. Anfotericina lipídica pelo MS (formulário de antifúngicos/Micosis) [F]. Notificação semanal no e-SUS Sinan (Portaria 6.734/2025; NT 20/2025) [F]. Animais: diagnóstico e tratamento fora do SUS; casos felinos devem disparar a busca de casos humanos [F].", betim: "REMUME Betim: itraconazol 100 mg cápsula [F]; terbinafina não consta [F]. Laboratório que recebe swab/biópsia (Lacen/FUNED), fluxo da vigilância de zoonoses e referência para formas atípicas em Betim: confirmar [NV]."},
  evid: {resumo: "Itraconazol é o tratamento de escolha das formas cutâneas, com boa resposta clínica apesar de relatos de menor sensibilidade in vitro do S. brasiliensis; terbinafina é alternativa nas formas leves a moderadas e na intolerância. A transmissão por gato (S. brasiliensis) mudou a epidemiologia brasileira e tornou a doença de notificação nacional em 2025. As recomendações vêm de séries de casos e opinião de especialistas (não há ECR comparativos).", certeza: "Baixa (séries de casos); recomendação normativa do MS", fontes: ["gvs2_esporo", "nt20_2025_esporo", "fda_itra", "port6734", "rename", "remume"]},
  mudancas: ["Item novo (v46): suspeita, critérios de caso, itraconazol com interações, alternativas, gestação, notificação semanal (Portaria 6.734/2025) e manejo do gato."],
  nv: ["Bula brasileira do itraconazol (a consultada foi a bula FDA).", "Terbinafina na RENAME/REMUME (não localizada).", "Laboratório da cultura e fluxo da vigilância de zoonoses de Betim.", "Se a esporotricose animal é de notificação em MG/Betim."],
  guia: {
    resumo: "Pense em esporotricose em **ferida ou nódulo que não cicatriza com antibiótico** em quem tem **gato** (ou mexe com terra e plantas). **Colha swab/biópsia, mas não espere a cultura**: com quadro e epidemiologia compatíveis, comece **itraconazol 200 mg/dia** e mantenha até **1 mês após a cicatrização**. Confira as **interações**, notifique (semanal) e oriente o **cuidado com o gato**.",
    secoes: [
      {t: "Reconhecer", b: [
        {tab: {h: ["Forma", "Como aparece"], r: [
          ["Linfocutânea (60–70%)", "Lesão no local do trauma (mão, braço, perna, face) e nódulos/úlceras subindo pelo trajeto linfático [F]"],
          ["Cutânea fixa (~25%)", "Lesão única no ponto de inoculação, sem cadeia [F]"],
          ["Disseminada (< 5%)", "Lesões em vários locais – múltiplas arranhaduras ou imunossupressão (HIV, álcool, corticoide) [F]"],
          ["Ocular", "Conjuntivite granulomatosa após contato com secreção de gato; pode haver linfonodo pré-auricular (Parinaud) [F]"],
          ["Hipersensibilidade (até 13,5%)", "Eritema nodoso, eritema multiforme, artrite reativa, febre [F]"]]},
         nota: "GVS 2024 [F]. Incubação de 1–2 semanas na transmissão felina [F]. Diferenciais: leishmaniose, tuberculose cutânea, micobactérias, piodermite, outras micoses, carcinoma [F]."},
        {ref: ["gvs2_esporo"]}
      ]},
      {t: "Confirmar e notificar", b: [
        {fluxo: [
          {t: "Lesão cutânea/mucosa papular → nodular ou ulcerada, com ou sem cadeia linfática"},
          {t: "Contato com gato, trauma com material orgânico ou acidente laboratorial?", ramos: [
            {r: "Sim", n: [{t: "Coletar swab/biópsia (cultura) + exames basais; iniciar itraconazol", k: "warn"}, {t: "Confirmado por critério clínico-epidemiológico ou laboratorial → notificar no e-SUS Sinan (B42)", k: "warn"}]},
            {r: "Não", n: [{t: "Investigar diferenciais; cultura/biópsia antes de tratar", k: "ok"}]}]}
        ], nota: "Definição de caso: NT 20/2025 [F]. Fluxo da APS: GVS 2024, Figura 1 [F]. A NT 20/2025 prefere confirmar (de preferência por laboratório) antes de notificar e tratar; o GVS admite iniciar pelo critério clínico-epidemiológico – na APS de Betim, sem resultado rápido de cultura, colher e iniciar é a conduta prática [I]. Cultura negativa isolada não descarta [F]. O GVS 2024 ainda dizia que as micoses não eram de notificação nacional – superado pela Portaria 6.734/2025 [F]."},
        {ref: ["nt20_2025_esporo", "gvs2_esporo", "port6734"]}
      ]},
      {t: "Tratar", b: [
        {doses: {r: [
          ["1ª escolha", "Itraconazol 200 mg 1x/dia após o almoço (NT: 100–200 mg) [F]", "Itraconazol 5–10 mg/kg/dia 1x/dia [F]"],
          ["Alternativa", "Terbinafina 250–500 mg/dia [F]", "Terbinafina: < 20 kg 62,5 mg; 20–40 kg 125 mg; > 40 kg 250 mg [F]"],
          ["Iodeto de potássio saturado (manipulado)", "5 gotas 2x/dia, +1 gota/dia até 20–25 gotas 2x/dia, diluído [F]", "< 20 kg 10 gotas; 20–40 kg 15; > 40 kg 20–25 gotas 2x/dia [F]"],
          ["Duração", "Até 1 mês após a cura clínica (média 3–4 meses) [F]", "Igual [F]"],
          ["Disseminada/grave", "Anfotericina lipídica 5 mg/kg/dia ~14 dias → itraconazol 200 mg 12/12 h, na referência [F]", "Referência [F]"]], nota: "GVS 2024 (Quadro 3) e NT 20/2025 (Quadro 1) [F]. Cura = reepitelização sem crosta, eritema ou infiltração [F]. Iodeto: contraindicado na gestação e lactação, doença tireoidiana, alergia a iodo, DRC e com diurético poupador de potássio [F]."}},
        {ul: ["Itraconazol: cápsula inteira, após refeição, com suco cítrico; evitar laticínios, antiácidos, IBP e anti-H2 [F]. Preparações manipuladas de itraconazol não são recomendadas [F].", "Interações (GVS Quadro 4): varfarina e amitriptilina – evitar; bloqueador de canal de cálcio – aumenta; sinvastatina/atorvastatina – rabdomiólise; carbamazepina e fenitoína – reduzem o itraconazol; efavirenz, ritonavir, darunavir [F]. Sinvastatina e lovastatina são contraindicadas na bula FDA [F].", "Efeitos comuns: cefaleia, epigastralgia, diarreia, geralmente autolimitados [F].", "Gestante: calor local ou criocirurgia; terbinafina 250–500 mg em decisão compartilhada; anfotericina lipídica se grave [F].", "Reação de hipersensibilidade intensa: prednisona 0,5 mg/kg/dia com redução a cada 5–7 dias (retirada em 20–30 dias); artrite reativa: AINE por 5–10 dias [F]."]},
        {ref: ["gvs2_esporo", "nt20_2025_esporo", "fda_itra"]}
      ]},
      {t: "Gato, casa e trabalho", b: [
        {ul: ["Gato com lesão: veterinário (tratamento animal não é do SUS); isolar durante o tratamento; não abandonar [F].", "Cuidar do gato com luvas, avental de manga longa; lavar mãos e antebraços; hipoclorito nas superfícies [F].", "Cadáver: não enterrar – saco branco leitoso, refrigeração e incineração pelo serviço de zoonoses [F].", "Castração, telas e restrição de acesso à rua reduzem a transmissão [F].", "Caso ligado ao trabalho (veterinária, banho e tosa, jardinagem, agricultura): registrar no campo de agravo relacionado ao trabalho, CAT e Cerest [F].", "Caso animal deve disparar a busca de casos humanos no domicílio em até 1 semana [F]."]},
        {ir: END_LINKS},
        {ref: ["nt20_2025_esporo", "gvs2_esporo"]}
      ]}
    ]}
},
// ════════════════════════════════════════ 3. LEISHMANIOSE TEGUMENTAR
{
  id: "in-lt", modulo: "in", nome: "Leishmaniose tegumentar: suspeita, confirmação e tratamento compartilhado", sistema: "Endemias e zoonoses", risco: "moderado",
  ciap: "A78", cid: "B55.1", tags: "leishmaniose tegumentar cutânea mucosa LTA úlcera indolor bordas elevadas ferida brava mosquito-palha flebotomíneo antimoniato de meglumina Glucantime miltefosina anfotericina lipossomal pentamidina intralesional Montenegro notificação",
  alerta: "Lesão de mucosa nasal/oral (obstrução, sangramento, perfuração de septo), forma disseminada ou difusa, HIV, gestante, > 50 anos ou doença cardíaca/renal/hepática → centro de referência. Antimoniato: contraindicado na gestação; ECG antes e durante. Miltefosina: proibida na gestação.",
  S: `Paciente, ___ anos, com lesão em ___ há ___ semanas (≥ 3 semanas?), indolor ___, que começou como pápula ___ e ulcerou ___. Número de lesões ___.
Sintomas nasais (obstrução, crostas, sangramento) ___ | rouquidão ___ | lesões antigas/cicatrizes ___.
Exposição: moradia/trabalho/lazer em área de mata ou com casos ___ (local ___, nos últimos 6 meses). Viagens ___.
Comorbidades (cardiopatia, Chagas, nefropatia, hepatopatia) ___ | HIV ___ | gestação/amamentação ___ | idade ___.`,
  O: `${VITAIS}
Lesão: úlcera ___ cm, bordas ___ (elevadas, em moldura), fundo ___ (granuloso), local ___ | linfonodos ___ | cicatrizes antigas ___.
Mucosa nasal/oral (rinoscopia simples) ___.`,
  A: `Leishmaniose tegumentar ___ (cutânea localizada / disseminada / mucosa), suspeita (aguarda confirmação) / confirmada por ___.`,
  P: `- Coleta/encaminhamento para confirmação parasitológica (escarificação, biópsia ou aspirado da borda) ou PCR: ___.
- Sorologia/teste rápido para HIV: ___.
- ECG, creatinina, TGO/TGP, amilase/lipase, hemograma basais (se tratamento sistêmico): ___.
- Tratamento ___ (antimoniato ___ mg Sb⁵⁺/kg/dia por ___ dias / intralesional / miltefosina / referência para anfotericina).
- Notificação do caso confirmado no Sinan.
- Retorno mensal por 3 meses após o fim do tratamento, depois a cada 2 meses até 12 meses.`,
  rx: [
    {trilha: "ambos", titulo: "Antimoniato de meglumina – forma cutânea (adulto e criança)", texto: "USO INTRAMUSCULAR OU ENDOVENOSO\n1. Antimoniato de meglumina 300 mg/mL (81 mg Sb⁵⁺/mL), ampola 5 mL ______ ___ ampolas\n   Aplicar ___ mL (15 mg Sb⁵⁺/kg/dia = ___ mg Sb⁵⁺ para ___ kg ÷ 81) 1 vez ao dia por 20 dias seguidos,\n   EV lento (≥ 5 min) ou IM profundo, preferencialmente no fim do dia, com repouso.\n   Máximo 3 ampolas (15 mL) por dia no adulto; criança até 12 anos: máximo 1,5 ampola.\n   ECG antes e semanal; exames semanais se > 50 anos ou comorbidade.", dose: "F", nota: "Manual de LTA do MS (2ª ed., 2013): cutânea 10–20 mg Sb⁵⁺/kg/dia, sugerido 15, por 20 dias; mucosa 20 mg/kg/dia por 30 dias (em referência); máx. 3 ampolas/dia [F]. OPAS 2022: 20 mg/kg/dia por 20 dias, máx. 3 ampolas [F]. A edição de 2017 do manual (que introduziu o esquema intralesional no Brasil) não foi aberta nesta revisão [NV]. Antimoniato na REMUME Betim [F]; aplicação e monitorização na UBS dependem do fluxo local [NV]."},
    {trilha: "ambos", titulo: "Miltefosina – forma cutânea (referência)", texto: "USO ORAL\n1. Miltefosina 50 mg / 10 mg ______ ___ cápsulas\n   Tomar ___ mg por dia (2,5 mg/kg/dia; máximo 150 mg/dia), divididos após as refeições, por 28 dias.\n   (Teste de gravidez negativo e 2 métodos contraceptivos, um de barreira, de 30 dias antes até 4 meses após o fim.)", dose: "F", nota: "OPAS 2022: 2,5 mg/kg/dia, máx. 150 mg, 28 dias, fracionado após as refeições (forte, certeza baixa) [F]. GVS 2024: incorporada ao SUS para as formas cutâneas, sobretudo L. braziliensis; proibida na gestação; contracepção de 30 dias antes a 4 meses depois; na coinfecção HIV, só após falha do padrão [F]. RENAME 2024: miltefosina 10 e 50 mg (Estratégico) [F]. Dispensação pela referência/vigilância [NV]."}
  ],
  orient: `A leishmaniose tegumentar é transmitida pela picada do mosquito-palha e tem tratamento gratuito pelo SUS. Não passa de pessoa para pessoa.
Antes de tratar, a ferida precisa ser examinada (raspado ou biópsia) e é feito o teste de HIV, porque muda o tratamento.
Durante o tratamento com injeção: faça os eletrocardiogramas e exames pedidos, descanse depois da aplicação e não beba álcool.
Avise se tiver palpitação, desmaio, dor forte nas juntas, dor de barriga forte, vômitos ou se a pele ficar amarela.
Mulheres: não podem engravidar durante o tratamento (miltefosina exige dois métodos e teste de gravidez).
A ferida deve fechar em até 3 meses após o tratamento; volte todo mês. Para prevenir: repelente, roupas compridas no fim da tarde e à noite perto de mata, telas e quintal limpo.`,
  alarme: ["Nariz entupido, sangrando ou com crostas que não melhoram", "Rouquidão ou dificuldade para engolir", "Palpitação, desmaio ou falta de ar durante a injeção", "Dor de barriga forte com vômitos (pancreatite)", "Ferida que piora ou novas feridas"],
  encaminhar: "Centro de referência: forma mucosa (avaliação otorrinolaringológica), disseminada, difusa, coinfecção HIV, gestante, > 50 anos, cardiopatia/doença de Chagas, nefropatia ou hepatopatia, falha (sem epitelização até 90 dias) ou recidiva, e indicação de miltefosina, pentamidina ou anfotericina.",
  sus: {nacional: "Antimoniato de meglumina, isetionato de pentamidina, anfotericina B (desoxicolato e lipossomal) e miltefosina no Componente Estratégico (RENAME 2024) [F]. Notificação semanal do caso confirmado no Sinan (Portaria 6.734/2025) [F].", betim: "REMUME Betim: antimoniato de meglumina 300 mg/mL (81 mg Sb⁵⁺/mL), ampola 5 mL [F]. Laboratório da confirmação, local de aplicação/monitorização e centro de referência em leishmanioses para Betim: confirmar com a vigilância [NV]."},
  evid: {resumo: "Antimoniais sistêmicos curam a maioria das formas cutâneas por L. braziliensis, com toxicidade cardíaca, pancreática, renal e hepática dose-dependente. A OPAS (2022) passou a recomendar com força o antimonial intralesional para lesões pequenas e a miltefosina oral, com certeza baixa; o Brasil adotou o intralesional (Manual 2017) e incorporou a miltefosina. Gestação, idade > 50 anos e comorbidades orientam para anfotericina lipossomal ou tratamento local.", certeza: "Moderada a baixa (OPAS 2022, GRADE)", fontes: ["gvs2_lt", "mlt2013", "paho_leish2022", "port6734", "rename", "remume"]},
  mudancas: ["Item novo (v46): suspeita, confirmação, HIV, escolha do tratamento por situação, antimoniato com cálculo e monitorização, miltefosina, critérios de cura e seguimento."],
  nv: ["Manual de Vigilância da LT 2017 (MS) – critérios e técnica do intralesional no Brasil: não aberto nesta revisão.", "Disponibilidade da intradermorreação de Montenegro na rede.", "Fluxo de confirmação, aplicação e referência em Betim."],
  guia: {
    resumo: "Úlcera **indolor**, de **bordas elevadas** e fundo granuloso, com **≥ 3 semanas**, em quem esteve em área de transmissão = suspeita. **Confirme** (parasitológico/PCR) antes de tratar, **ofereça HIV**, examine o **nariz** (forma mucosa vai à referência) e escolha o tratamento pela **situação do paciente** – o antimoniato exige **ECG**.",
    secoes: [
      {t: "Suspeitar e confirmar", b: [
        {ul: ["Cutânea: lesão ulcerada ou não, com ≥ 3 semanas, em residente/exposto a área de transmissão [F].", "Mucosa: lesão de vias aéreas superiores, sobretudo nasal; cicatriz cutânea antiga ajuda [F].", "Confirmação: parasitológico (escarificação, biópsia com imprint, aspirado da borda), cultura, PCR, histopatologia; a IDRM entra no critério, mas a disponibilidade atual não foi confirmada [F].", "Sorologia para HIV em todos, independentemente da idade [F].", "Diferenciais: esporotricose, tuberculose/micobactérias, paracoccidioidomicose, úlcera venosa ou falciforme, carcinoma, piodermite [F]."]},
        {ir: [["in-esporotricose", "Esporotricose"], ["ivc", "Úlcera venosa (IVC)"]]},
        {ref: ["gvs2_lt"]}
      ]},
      {t: "Escolher o tratamento", b: [
        {tab: {h: ["Situação", "Opção"], r: [
          ["Cutânea localizada, adulto sem comorbidade", "Antimoniato 10–20 mg Sb⁵⁺/kg/dia (sugerido 15) por 20 dias [F]; ou intralesional se 1–3 lesões ≤ 3 cm, fora de cabeça e articulações (OPAS: 3–5 infiltrações de 1–5 mL a cada 3–7 dias) [F]; ou miltefosina [F]"],
          ["Mucosa", "Antimoniato 20 mg/kg/dia por 30 dias + pentoxifilina (> 12 anos), em referência [F]"],
          ["Gestante", "Antimoniato, miltefosina e pentamidina contraindicados; adiar ou anfotericina B lipossomal / termoterapia (referência) [F]"],
          ["Amamentando", "Antimoniato pode ser usado (pouco no leite) [F]; OPAS: intralesional, termoterapia ou anfotericina [F]"],
          ["> 50 anos, cardiopatia, Chagas, nefro ou hepatopatia, ECG alterado", "Evitar antimonial sistêmico: anfotericina lipossomal, miltefosina ou tratamento local (referência) [F]"],
          ["HIV", "Anfotericina em referência; miltefosina só após falha [F]"],
          ["L. guyanensis", "Pentamidina (OPAS: 4–7 mg/kg/dia, 3 doses a cada 72 h) [F]"]]},
         nota: "GVS 2024, Manual de LTA do MS (2013) e OPAS 2022 [F]. A escolha considera a espécie predominante na região (em MG predomina L. braziliensis [C])."},
        {ref: ["gvs2_lt", "mlt2013", "paho_leish2022"]}
      ]},
      {t: "Antimoniato: cálculo e segurança", b: [
        {doses: {r: [
          ["Dose", "15 mg Sb⁵⁺/kg/dia (10–20) por 20 dias; mucosa 20 por 30 dias [F]", "Mesmo esquema por kg [F]"],
          ["Cálculo", "mg Sb⁵⁺/dia ÷ 81 = mL (60 kg × 15 = 900 mg ≈ 11 mL ≈ 2 ampolas) [F]", "10 kg × 15 = 150 mg ≈ 1,8 mL [F]"],
          ["Máximo/dia", "3 ampolas (15 mL; 1.215 mg Sb⁵⁺) [F]", "Até 12 anos: 1,5 ampola [F]"]], nota: "Manual de LTA do MS (2013), Quadro 4 [F]. Via EV lenta (≥ 5 min, agulha fina, sem diluir) ou IM; EV preferível em desnutridos e plaquetopênicos [F]."}},
        {ul: ["ECG semanal e ausculta antes de cada dose; > 50 anos ou cardiopatia, nefropatia, hepatopatia, Chagas: ECG 2x/semana e hemograma, ureia/creatinina, amilase/lipase e enzimas hepáticas semanais [F].", "Suspender e reavaliar: alargamento do QT, arritmia, aumento de creatinina, pancreatite, icterícia [F].", "Efeitos comuns: artralgia, mialgia, anorexia, náusea, dor abdominal [F]; perda auditiva neurossensorial pode ocorrer [F].", "Álcool: evitar durante o tratamento [F].", "Reação adversa grave: notificar (farmacovigilância) [F]."]},
        {ref: ["mlt2013", "gvs2_lt"]}
      ]},
      {t: "Cura e seguimento", b: [
        {ul: ["Cutânea: epitelização completa até o **90º dia** após o fim; crosta, descamação, infiltração e eritema até o **180º dia** [F].", "Sem epitelização em 90 dias, piora ou lesões novas: 2º esquema (referência) [F].", "Mucosa: regressão comprovada por otorrino até 6 meses [F].", "Retorno mensal por 3 meses (HIV: 6 meses), depois a cada 2 meses até completar 12 meses [F].", "Notificar o caso confirmado; encerramento em até 180 dias [F]."]},
        {ir: END_LINKS},
        {ref: ["gvs2_lt", "port6734"]}
      ]}
    ]}
},
// ════════════════════════════════════════ 4. LEISHMANIOSE VISCERAL
{
  id: "in-lv", modulo: "in", nome: "Leishmaniose visceral (calazar): febre + esplenomegalia, notificação e referência", sistema: "Endemias e zoonoses", risco: "alto",
  ciap: "A78", cid: "B55.0", tags: "leishmaniose visceral calazar febre prolongada esplenomegalia hepatoesplenomegalia pancitopenia emagrecimento cão mosquito-palha Lutzomyia longipalpis teste rápido rK39 antimoniato anfotericina lipossomal HIV",
  alerta: "Em área com transmissão, FEBRE + ESPLENOMEGALIA = caso suspeito: notificar e investigar no mesmo dia. Sem tratamento, a letalidade passa de 90%. Sangramento digestivo, icterícia, infecção bacteriana, desnutrição grave, < 1 ano ou > 50 anos, gestação ou HIV → hospital de referência.",
  S: `Paciente, ___ anos, com febre há ___ dias/semanas, emagrecimento ___ kg, fraqueza ___, barriga aumentada ___, palidez ___.
Sangramentos (nariz, gengiva, fezes escuras) ___ | icterícia ___ | diarreia/vômitos ___ | tosse/infecções ___.
Exposição: mora em ___ (bairro), cães doentes na vizinhança ___ (emagrecidos, feridas, unhas grandes), viagens a área endêmica em 6 meses ___.
HIV/imunossupressão ___ | gestação ___ | tratamento prévio de calazar ___.`,
  O: `${VITAIS} | Peso ___ kg
Palidez ___ | icterícia ___ | edema ___ | sangramento ___.
Baço: ___ cm do rebordo costal esquerdo | fígado: ___ cm do rebordo costal direito.
Exames (se disponíveis): Hb ___ | leucócitos ___ | plaquetas ___ | teste rápido rK39 ___.`,
  A: `Caso suspeito de leishmaniose visceral, ___ (sem / com) sinais de gravidade.`,
  P: `- Notificação do caso suspeito no Sinan e contato com a vigilância epidemiológica.
- Teste rápido (rK39) ___ / sorologia RIFI ___ / referência para mielograma ___.
- Teste rápido de HIV: ___.
- Encaminhamento ao serviço de referência ___ (hoje / com prioridade) para confirmação e tratamento.
- Antitérmico com paracetamol ou dipirona; evitar AAS e AINE (plaquetopenia).`,
  orient: `A leishmaniose visceral (calazar) é transmitida pela picada do mosquito-palha, que se infecta em cães doentes. Tem tratamento gratuito, mas precisa começar rápido.
Faça os exames pedidos e vá ao serviço de referência no dia marcado. Não use AAS nem anti-inflamatórios.
Depois do tratamento, venha às consultas de 3, 6 e 12 meses.
Para proteger a casa: quintal limpo, sem folhas e fezes de animais, telas, repelente ao entardecer. Cães doentes devem ser avaliados por veterinário e pela vigilância de zoonoses.`,
  alarme: ["Sangramento (gengiva, fezes pretas, vômito com sangue)", "Pele ou olhos amarelados", "Falta de ar, tosse com febre alta ou sinais de infecção", "Inchaço no corpo", "Sonolência, confusão ou muita fraqueza"],
  encaminhar: "Todo suspeito: serviço de referência para confirmação e tratamento no mesmo dia ou em até poucos dias, conforme gravidade. Sangramento, icterícia, infecção, edema, desnutrição grave, < 1 ano, > 50 anos, gestante, HIV ou comorbidade → internação.",
  sus: {nacional: "Antimoniato de meglumina e anfotericina B lipossomal no Componente Estratégico (RENAME 2024) [F]. Teste rápido rK39 e RIFI na rede pública; ELISA não disponível na rede pública (GVS 2024) [F]. Notificação do caso suspeito no Sinan, semanal (Portaria 6.734/2025) [F].", betim: "REMUME Betim: antimoniato de meglumina [F]. Teste rápido de LV na UBS, laboratório da RIFI, hospital de referência e situação de transmissão em Betim: confirmar com a vigilância [NV]."},
  evid: {resumo: "O antimoniato de meglumina é a 1ª escolha do MS, com anfotericina B lipossomal (3 mg/kg/dia por 7 dias ou 4 mg/kg/dia por 5 dias) para os grupos de maior risco de óbito ou toxicidade. A letalidade cai com diagnóstico e tratamento precoces; o atraso na suspeita na APS é o principal problema operacional.", certeza: "Recomendação normativa do MS", fontes: ["gvs2_lv", "port6734", "rename", "remume"]},
  mudancas: ["Item novo (v46): suspeita, confirmação, indicações da anfotericina lipossomal, gravidade, seguimento e notificação."],
  nv: ["Escores de gravidade clínico (≥ 4) e clínico-laboratorial (≥ 6) do manual 'LV: recomendações clínicas para redução da letalidade' (2011) – não aberto.", "Teste rápido rK39 nas UBS de Betim e hospital de referência.", "Situação atual de transmissão humana e canina em Betim."],
  guia: {
    urg: "Morador de área com transmissão + FEBRE + ESPLENOMEGALIA = suspeito de calazar: notificar, testar (rK39/HIV) e garantir a referência sem demora · sangramento, icterícia, infecção, < 1 ano, > 50 anos, gestante ou HIV → internação.",
    resumo: "O que mata no calazar é o **diagnóstico tardio** e as **complicações** (infecção bacteriana e sangramento). Na APS: **palpar o baço em toda febre prolongada**, notificar o suspeito, fazer **teste rápido** (reagente confirma), oferecer **HIV** e referenciar. Sorologia positiva **sem** clínica não é doença: não tratar nem notificar.",
    secoes: [
      {t: "Suspeitar e confirmar", b: [
        {fluxo: [
          {t: "Febre (geralmente > 7 dias) + esplenomegalia, com palidez, emagrecimento, hepatomegalia"},
          {t: "Mora/veio de área com transmissão?", ramos: [
            {r: "Sim", n: [{t: "CASO SUSPEITO: notificar; teste rápido rK39 / RIFI; HIV", k: "stop"}]},
            {r: "Não", n: [{t: "Suspeito só após descartar os diferenciais mais frequentes da região", k: "warn"}]}]},
          {t: "Sinal de gravidade (sangramento, icterícia, infecção, edema, desnutrição grave; < 1 ano, > 50 anos, gestante, HIV)?", ramos: [
            {r: "Sim", n: [{t: "Referência hospitalar (gravidade ou indicação de anfotericina lipossomal EV)", k: "stop"}]},
            {r: "Não", n: [{t: "Referência para confirmar e tratar; antitérmico sem AAS/AINE", k: "warn"}]}]}
        ], nota: "Definição de caso e confirmação: GVS 2024 [F]. Teste rápido reagente confirma sem outro exame; RIFI ≥ 1:80 confirma se excluídos diferenciais; padrão-ouro é o parasitológico de medula óssea [F]. Hemorragia digestiva e icterícia indicam gravidade [F]. Internar os grupos com indicação de anfotericina lipossomal (droga EV) é inferência operacional [I]."},
        {ul: ["Diferenciais: enterobacteriose prolongada com esquistossomose, malária, febre tifoide, esquistossomose hepatoesplênica, Chagas agudo, linfoma, leucemia, anemia falciforme [F].", "Infecção (sorologia/parasitológico positivo sem clínica): não tratar e não notificar [F]."]},
        {ref: ["gvs2_lv"]}
      ]},
      {t: "Tratamento (referência)", b: [
        {tab: {h: ["Medicamento", "Esquema", "Para quem"], r: [
          ["Antimoniato de meglumina", "20 mg Sb⁵⁺/kg/dia EV/IM 1x/dia por 20–40 dias, máx. 3 ampolas/dia; pode ser ambulatorial com monitorização [F]", "1ª escolha, exceto nas indicações de anfotericina [F]"],
          ["Anfotericina B lipossomal", "3 mg/kg/dia por 7 dias ou 4 mg/kg/dia por 5 dias, EV [F]", "< 1 ano, > 50 anos, insuficiência renal/hepática/cardíaca, QTc > 450 ms ou drogas que alargam o QT, hipersensibilidade, HIV, imunossupressão, falha, gestantes, escores de gravidade [F]"]]},
         nota: "GVS 2024, Quadros 1 e 2 [F]. Antimoniato: ECG no início, semanal e no fim se > 40 anos ou história familiar de cardiopatia; monitorar enzimas hepáticas, função renal, amilase e lipase [F]. Lipossomal: creatinina, K⁺ e Mg²⁺ [F]."},
        {ref: ["gvs2_lv"]}
      ]},
      {t: "Depois do tratamento", b: [
        {ul: ["Melhora esperada: febre cede por volta do 5º dia; baço reduz ≥ 40% ao fim; hemoglobina e leucócitos melhoram a partir da 2ª semana [F].", "Seguimento aos **3, 6 e 12 meses**; estável na última = curado; sorologia não serve para seguimento [F].", "Recidiva: volta dos sintomas em até 12 meses após a cura [F].", "Abandono: < 20 doses de antimoniato ou ausência > 30 dias; retorno em < 7 dias: completar; depois, conforme doses e clínica (reiniciar se < 10 doses ou doente) [F]."]},
        {ir: END_LINKS},
        {ref: ["gvs2_lv"]}
      ]}
    ]}
}
);

// ── Revisões: febre amarela (DE) e hanseníase (DE e Infectologia); atalhos do módulo
(() => {
  const muda = (c, t) => { c.mudancas = c.mudancas || []; c.mudancas.push("Revisão 22/10/2026 (v46): " + t); };
  const fonte = (c, ...ks) => { c.evid = c.evid || {fontes: []}; c.evid.fontes = c.evid.fontes || []; ks.forEach(k => { if (!c.evid.fontes.includes(k)) c.evid.fontes.push(k); }); };

  const fa = CONDICOES.find(c => c.id === "febre-amarela");
  if (fa) {
    fa.tags += " vacina febre amarela VFA reforço 4 anos dose única 59 anos gestante lactante idoso epizootia macaco CIEVS Faget icterícia hemorragia";
    fa.alerta = "Febre aguda com icterícia e/ou sangramento em não vacinado (ou vacinação ignorada) com exposição em 15 dias a área de risco ou epizootia: notificação IMEDIATA (até 24 h) ao CIEVS-Minas e regulação para hospital com UTI. A UBS não tem como repetir exames a cada 24 h – não manejar em casa. Sem AAS/AINE; paracetamol no máximo 3 g/dia.";
    fa.S = `Paciente, ___ anos, com febre de início súbito há ___ dias, cefaleia ___, mialgia/lombalgia ___, náuseas/vômitos ___, icterícia ___, sangramentos ___, urina ___ (volume/cor).
Melhora transitória entre o 3º e o 5º dia seguida de piora ___.
Vacina contra febre amarela: ___ (data ___ / não vacinado / ignorado). Exposição nos últimos 15 dias: ___ (área rural/mata, ecoturismo, local com morte de macacos).
Gestação/amamentação ___. Medicações (AAS, AINE, paracetamol – dose) ___.`;
    fa.P = `- Notificação imediata (até 24 h) à vigilância municipal e ao CIEVS-Minas (telefone/e-mail) às ___ h; ficha no Sinan.
- Regulação para hospital de referência com UTI (lista SES-MG) às ___ h.
- Paracetamol (máx. 3 g/dia) ou medidas físicas para febre; NÃO usar AAS nem anti-inflamatórios.
- Hidratação oral se tolerar até a remoção.
- Proteger do mosquito no período de viremia (tela/repelente).
- Contatos e vizinhos: conferir vacinação e encaminhar à sala de vacina conforme orientação da vigilância.`;
    fa.rx = [
      {trilha: "ambos", titulo: "Até a remoção", texto: "USO ORAL\n1. Paracetamol 500 mg ______ 1 comprimido se febre ou dor (máximo 3 g por dia).\n   Não usar AAS nem anti-inflamatórios.\n\nHIDRATAÇÃO\n2. Hidratação oral se tolerada (adulto: cerca de 60 mL/kg/dia).", dose: "F", nota: "GVS 2024: sem AAS/AINE; paracetamol até 3 g/dia; hidratação oral 60 mL/kg/dia na forma leve [F]. Dipirona não é citada no GVS [NV]."}
    ];
    fa.orient = `A suspeita de febre amarela precisa de avaliação e exames no hospital, que serão repetidos várias vezes. Não tome AAS nem anti-inflamatórios.
Se o diagnóstico não for confirmado, tome a vacina depois da alta.
A vacina é a melhor proteção: confira a caderneta de todos da casa. Quem tem de 5 a 59 anos e nunca tomou precisa de 1 dose; crianças tomam aos 9 meses e reforço aos 4 anos.`;
    fa.encaminhar = "Todo caso suspeito → hospital de referência com UTI, por regulação (SES-MG). Forma leve só pode ficar fora do hospital se houver transaminases, creatinina, RNI e hemograma a cada 24 h – a UBS não tem.";
    fa.sus = {nacional: "Vacina febre amarela (atenuada) no PNI: 9 meses + reforço aos 4 anos; dose única de 5 a 59 anos (GVS 2024; PNI 2026) [F]. Notificação imediata de todo caso suspeito (Portaria 6.734/2025) [F].", betim: "CIEVS-Minas: notifica.se@saude.mg.gov.br, plantão 24 h (31) 99744-6983 (Alerta SES-MG 01/2025 – conferir se vigente) [F]. Lista de hospitais de referência em saude.mg.gov.br/febreamarela [F]. Fluxo municipal de Betim: confirmar com a vigilância [NV]."};
    fa.evid.resumo = "Não há antiviral; o tratamento é de suporte, idealmente com UTI, e a forma grave tem letalidade de 20–50%. A vacina atenuada protege 90–98% a partir do 7º–10º dia e 1 dose vale para a vida na maioria das pessoas. O MS define caso suspeito, notificação imediata e manejo por gravidade; a SES-MG orienta regular os suspeitos para hospitais com UTI.";
    fonte(fa, "gvs2_fa", "port6734", "pni_adulto2026");
    fa.nv = ["Telefone do CIEVS-Minas (alerta de jan/2025) e fluxo municipal de Betim.", "Uso de dipirona na suspeita (não citado no GVS).", "Situação atual de epizootias/casos em MG em 2026."];
    muda(fa, "conferido no GVS 6ª ed. vol. 2 (definição, manejo por gravidade, paracetamol ≤ 3 g, forma leve só com exames a cada 24 h) e no Alerta SES-MG 01/2025 (CIEVS-Minas, hospitais com UTI); guia com 'Agir agora' e vacinação.");
    fa.guia = {
      urg: "Febre súbita + icterícia e/ou sangramento em não vacinado com exposição em 15 dias (mata, área rural, morte de macacos) = SUSPEITO: notificar AGORA (CIEVS-Minas) e regular para hospital com UTI · sem AAS/AINE.",
      resumo: "A febre amarela é **bifásica**: melhora entre o 3º e o 5º dia e depois pode vir **icterícia, insuficiência renal e sangramento** em horas. Na UBS: **suspeitar** (vacinação + exposição), **notificar em até 24 h**, **regular para hospital com UTI** e **vacinar** quem não tem a dose – é a medida mais eficaz.",
      secoes: [
        {t: "Agir agora", b: [
          {fluxo: [
            {t: "Febre aguda (até 7 dias), de início súbito"},
            {t: "Não vacinado ou vacinação ignorada + exposição em 15 dias (área de risco, epizootia em macacos, área recém-afetada)?", ramos: [
              {r: "Sim, com icterícia e/ou sangramento", n: [{t: "CASO SUSPEITO: notificar imediatamente + regular para hospital com UTI", k: "stop"}]},
              {r: "Sim, sem icterícia/sangramento", n: [{t: "Em surto, a definição fica mais sensível: discutir com a vigilância; sem exames a cada 24 h, manejar como moderada (internar)", k: "warn"}]},
              {r: "Não", n: [{t: "Outros diagnósticos (dengue, leptospirose, malária, hepatites, febre maculosa)", k: "ok"}]}]}
          ], nota: "Definição de caso, manejo por gravidade e notificação: GVS 2024 [F]; regulação para hospital com UTI: SES-MG 01/2025 [F]."},
          {ref: ["gvs2_fa", "fa_mg", "port6734"]}
        ]},
        {t: "Vacina: quem, quando e cuidados", b: [
          {tab: {h: ["Situação", "Conduta (GVS 2024)"], r: [
            ["9 meses a 4 anos", "1 dose aos 9 meses + reforço aos 4 anos [F]"],
            ["≥ 5 anos com só 1 dose antes dos 5", "1 reforço, em qualquer idade [F]"],
            ["5 a 59 anos não vacinados ou sem comprovante", "1 dose, válida para a vida [F]"],
            ["≥ 60 anos nunca vacinados", "Avaliar risco-benefício (circulação viral × eventos adversos e comorbidades) [F]"],
            ["Gestante", "Só após avaliar risco-benefício e cenário epidemiológico [F]"],
            ["Amamentando bebê < 6 meses", "Adiar até 6 meses; se não der, suspender a amamentação por 10 dias [F]"],
            ["< 2 anos e tríplice/tetraviral", "Intervalo de 30 dias (mínimo 15); em risco simultâneo de sarampo e FA, vacinar no mesmo dia [F]"],
            ["Viagem para área de risco", "Pelo menos 10 dias antes [F]"],
            ["Doação de sangue", "Aguardar 4 semanas após a vacina [F]"]]},
           nota: "Contraindicações: < 6 meses; imunossupressão ou imunossupressores (inclusive corticoide em dose imunossupressora, quimio e biológicos); HIV com CD4 < 200 (adulto) ou alteração grave (< 13 anos); doença do timo; transplante, imunodeficiência primária, neoplasia; anafilaxia a ovo ou gelatina; doença falciforme com hidroxiureia e neutrófilos < 1.500 [F]. Precauções: 6–8 meses, LES/autoimunes, doença desmielinizante, TMO (≥ 24 meses), ESAVI grave em familiar [F]. Quem recebeu dose fracionada é considerado vacinado [F]."},
          {ir: [["pv-vacinas", "Vacinas do adulto"], ["pu-vacinas", "Vacinas da criança"], ["pn-vacinas", "Vacinas da gestante"]]},
          {ref: ["gvs2_fa", "pni_adulto2026"]}
        ]},
        {t: "Clínica e evolução", b: [
          {ul: ["Incubação 3–6 dias (até 15) [F].", "40–60% assintomáticos/leves; formas graves 20–40%, com letalidade de 20–50% [F].", "Bifásica: infecção (~3 dias) → remissão (horas a 2 dias) → toxêmica (icterícia, oligúria, hematêmese/melena, sangramentos, confusão); sinal de Faget (febre com pulso lento) [F].", "Óbito em 7–14 dias, sobretudo por insuficiência hepática [F].", "ESAVI da vacina: doença neurológica (1–30 dias) ou viscerotrópica (icterícia, sangramento) – notificação imediata [F]."]},
          {ir: END_LINKS},
          {ref: ["gvs2_fa"]}
        ]}
      ]
    };
  }

  const h = CONDICOES.find(c => c.id === "hanseniase");
  if (h) {
    h.P = `- Diagnóstico clínico com ≥ 1 sinal cardinal: lesão com alteração de sensibilidade térmica/dolorosa/tátil; espessamento de nervo com alteração sensitiva, motora ou autonômica; baciloscopia/biópsia positiva.
- Baciloscopia de raspado intradérmico se dúvida diagnóstica ou de classificação.
- Classificar: PB (1–5 lesões e baciloscopia negativa) ou MB (> 5 lesões e/ou baciloscopia positiva; na dúvida, MB).
- Iniciar PQT-U ___ cartelas (PB 6 / MB 12), 1ª dose supervisionada hoje; notificar no Sinan.
- Avaliação neurológica simplificada hoje, a cada 3 meses e na alta.
- Examinar todos os contatos domiciliares dos últimos 5 anos; BCG para contatos > 1 ano sem vacina ou com 1 dose (cartão ou cicatriz); teste rápido só para contatos.`;
    h.rx = [
      {trilha: "ambos", titulo: "PQT-U adulto (> 50 kg)", texto: "USO ORAL – cartela mensal\nDOSE MENSAL SUPERVISIONADA (na unidade):\n   Rifampicina 600 mg + clofazimina 300 mg + dapsona 100 mg.\nDOSES DIÁRIAS AUTOADMINISTRADAS (em casa):\n   Clofazimina 50 mg + dapsona 100 mg, 1 vez ao dia.\nDURAÇÃO: PB – 6 cartelas (em até 9 meses); MB – 12 cartelas (em até 18 meses).", dose: "F", nota: "GVS 2024 (Quadro 1, OMS 2018) e PCDT 2022 [F]."},
      {trilha: "ambos", titulo: "PQT-U infantil (30–50 kg) e < 30 kg", texto: "USO ORAL – cartela mensal (PQT-U infantil)\n30 a 50 kg:\n   Mensal supervisionada: rifampicina 450 mg + clofazimina 150 mg + dapsona 50 mg.\n   Em casa: clofazimina 50 mg em dias alternados + dapsona 50 mg por dia.\nMenos de 30 kg (por peso ___ kg):\n   Mensal supervisionada: rifampicina 10 mg/kg + clofazimina 6 mg/kg + dapsona 2 mg/kg.\n   Em casa: clofazimina 1 mg/kg/dia + dapsona 2 mg/kg/dia.\nDURAÇÃO: PB 6 meses; MB 12 meses.", dose: "F", nota: "GVS 2024, Quadro 1 (OMS 2018) [F]. Dapsona: anemia hemolítica (G6PD), síndrome da dapsona; clofazimina escurece a pele (reversível) [C]."}
    ];
    h.orient = h.orient.replace("Pessoas que moram com você precisam ser examinadas.", "Todas as pessoas que moram ou moraram com você nos últimos 5 anos precisam ser examinadas e, se for o caso, tomar a BCG.");
    h.nv = ["Fluxo e serviço de referência em hanseníase para Betim (reações graves, dúvida diagnóstica, recidiva)."];
    fonte(h, "gvs2_hansen", "pcdt_hansen2022");
    muda(h, "corrigido o seguimento de contatos (antes 'exame anual por 10 anos'): contato = convívio domiciliar nos 5 anos anteriores; BCG > 1 ano com 0–1 dose; reavaliação anual só para contato com anti-PGL1 positivo (PCDT 2022, item 13); doses infantis conferidas no GVS 2024.");
    h.guia = {resumo: "Ver o guia completo em **Infectologia → Hanseníase** (diagnóstico, PQT-U por peso, reações e contatos).", secoes: [{t: "Guia completo", b: [{ir: [["in-hansen", "Hanseníase: guia completo"]]}]}]};
  }

  const ih = CONDICOES.find(c => c.id === "in-hansen");
  if (ih) {
    ih.sistema = "Hanseníase";
    ih.P = "- Notificação no Sinan.\n- PQT-U ___ cartelas (PB 6 / MB 12), dose mensal supervisionada; faltoso: visita em até 30 dias.\n- Avaliação neurológica simplificada no início, a cada 3 meses e na alta.\n- Exame dos contatos domiciliares dos últimos 5 anos; BCG para > 1 ano com 0 ou 1 dose; anti-PGL1 positivo sem doença → reavaliação anual.\n- Orientações de autocuidado.";
    ih.nv = ["Fluxo e serviço de referência em hanseníase para Betim (a Colônia Santa Izabel/FHEMIG, em Betim, tem Dermatologia, mas o fluxo para hanseníase não foi confirmado)."];
    fonte(ih, "gvs2_hansen");
    muda(ih, "doses de PQT-U para 30–50 kg e < 30 kg (GVS 2024, Quadro 1), BCG e seguimento de contatos (PCDT 2022, item 13), esquema de redução da prednisona, profilaxia de estrongiloidíase, AAS com talidomida + corticoide e reação tipo 2 na criança.");
    const sx = t => ih.guia.secoes.find(s => s.t === t);
    const dg = sx("Diagnóstico e classificação");
    if (dg && dg.b[0] && dg.b[0].ul) dg.b[0].ul.push("Um único nervo acometido: a OMS classifica como MB; a literatura brasileira descreve a forma tuberculoide (PB) – documentar a perda de sensibilidade no território do nervo [F].", "Baciloscopia: na dúvida diagnóstica ou de classificação e na suspeita de recidiva; teste rápido anti-PGL1 não diagnostica isoladamente [F].", "Recidiva: sinais de atividade após 5 anos de tratamento regular – ficha de suspeita de recidiva e referência [F].");
    const pq = sx("PQT-U (adulto)");
    if (pq) {
      pq.t = "PQT-U (adulto e criança)";
      pq.b = [
        {tab: {h: ["Peso", "Dose mensal supervisionada", "Dose em casa"], r: [
          ["> 50 kg (PQT-U adulto)", "Rifampicina 600 mg + clofazimina 300 mg + dapsona 100 mg [F]", "Clofazimina 50 mg/dia + dapsona 100 mg/dia [F]"],
          ["30–50 kg (PQT-U infantil)", "Rifampicina 450 mg + clofazimina 150 mg + dapsona 50 mg [F]", "Clofazimina 50 mg em dias alternados + dapsona 50 mg/dia [F]"],
          ["< 30 kg (infantil adaptada)", "Rifampicina 10 mg/kg + clofazimina 6 mg/kg + dapsona 2 mg/kg [F]", "Clofazimina 1 mg/kg/dia + dapsona 2 mg/kg/dia [F]"]]},
         nota: "GVS 2024, Quadro 1 (OMS 2018) [F]. PB: 6 cartelas em até 9 meses; MB: 12 cartelas em até 18 meses [F]. Não estender a PQT-U além de 12 meses; persistência de atividade → investigar resistência (PCDT) [F]. Abandono: PB > 3 meses e MB > 6 meses sem comparecer [F]."},
        {ref: ["gvs2_hansen", "pcdt_hansen2022", "pqtu_pr"]}
      ];
    }
    const re = sx("Reações hansênicas e neurite");
    if (re) {
      re.b = [
        {tab: {h: ["Reação", "Tratamento (PCDT 2022)"], r: [
          ["Tipo 1 (reversa) / neurite", "Prednisona 1 mg/kg/dia; reduzir ~10 mg a cada 15 dias até 20 mg, depois 5 mg a cada 15 dias; 5 mg/dia por 15 dias e 5 mg em dias alternados por mais 15; mínimo ~6 meses; imobilizar o membro na neurite [F]"],
          ["Tipo 2 (eritema nodoso hansênico)", "Talidomida 100–400 mg/dia conforme intensidade, com redução gradual; orquite, episclerite ou neurite → corticoide como no tipo 1 [F]"],
          ["Tipo 2 sem poder usar talidomida", "Pentoxifilina 400 mg (mulher em idade fértil sem neurite, por exemplo); ajustar na insuficiência renal [F]"],
          ["Tipo 2 na criança", "Clofazimina 1,5–2 mg/kg 3x/dia no 1º mês, 2x no 2º, 1x no 3º (máx. 300 mg/dia) – avaliação experiente [F]"]]},
         nota: "Manter a PQT-U durante a reação se ainda não houve alta; não reintroduzir após a alta (exceto recidiva) [F]."},
        {ul: ["Início do corticoide: albendazol 400 mg/dia por 3 dias ou ivermectina 200 mcg/kg dose única (estrongiloidíase disseminada) [F].", "Talidomida + corticoide: AAS 100 mg/dia (profilaxia de tromboembolismo) [F].", "Talidomida: não autorizada em < 18 anos pelo PCDT; teratogênica – contracepção eficaz e termo de responsabilidade [F].", "Criança com corticoide > 3 meses ou > 1 mg/kg: orientação pediátrica [F]."]},
        {ref: ["pcdt_hansen2022"]}
      ];
    }
    const ct = sx("Contatos");
    if (ct) {
      ct.b = [
        {ul: ["Contato: quem reside ou residiu, conviva ou conviveu no domicílio com o caso nos **5 anos** anteriores ao diagnóstico, familiar ou não [F].", "Exame dermatoneurológico de todos os contatos [F].", "BCG para contatos **> 1 ano** não vacinados ou com **só 1 dose** (cartão ou cicatriz) [F]; contraindicada em imunodeficiência, neoplasia, corticoide em dose alta por > 2 semanas e gestação [F].", "Teste rápido anti-PGL1 e qPCR: só na investigação de contatos; positivo sem critério de doença → **reavaliação anual** na UBS e orientação de automonitoramento [F].", "Contato diagnosticado → iniciar PQT-U [F]."]},
        {trio: {ideal: "Exame de contatos + profilaxia pós-exposição com rifampicina em dose única (recomendação da OMS desde 2018).", sus: "Exame de contatos, BCG e teste rápido; rifampicina profilática não incorporada (CONITEC 2020).", ponte: "Priorize o exame dos contatos e a BCG; profilaxia com rifampicina só em projetos/protocolos autorizados."}},
        {ref: ["pcdt_hansen2022", "hansen_contatos", "conitec_sdr"]}
      ];
    }
  }

})();
