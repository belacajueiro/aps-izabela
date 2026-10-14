// ───────────── INFECTOLOGIA NA APS: IST, HIV, hepatites, TB e hanseníase (revisão 10/10/2026). Temas guiados pelo Notion (não usado como fonte).
Object.assign(FONTES, {
  ress_sifilis: {s: "PCDT IST – sífilis (RESS 2021)", t: "Freitas FLS et al. Protocolo Brasileiro para Infecções Sexualmente Transmissíveis 2020: sífilis adquirida. Epidemiol Serv Saúde 2021;30(esp1):e2020616 – tratamento por estágio, intervalo máximo de 14 dias entre doses, seguimento trimestral até 12 meses, resposta e retratamento, parcerias (capítulo oficial do PCDT IST).", f: "F", url: "https://scielosp.org/pdf/ress/2021.v30nspe1/e2020616/pt"},
  ress_uretral: {s: "PCDT IST – corrimento uretral (RESS 2021)", t: "Protocolo Brasileiro para IST 2020: infecções que causam corrimento uretral. Epidemiol Serv Saúde 2021;30(esp1):e2020633 – ceftriaxona 500 mg IM + azitromicina 1 g; clamídia; uretrite persistente; parcerias de 8 semanas/6 meses (capítulo oficial do PCDT IST).", f: "F", url: "https://scielosp.org/pdf/ress/2021.v30nspe1/e2020633/pt"},
  doxipep2026: {s: "Doxi-PEP no SUS (mar/2026)", t: "Portal Afya: portaria publicada em 11/03/2026 incorpora doxiciclina como profilaxia pós-exposição para IST bacterianas, com prazo de 180 dias para oferta no SUS (notícia; dose, janela e população a conferir na portaria/PCDT).", f: "F", url: "https://portal.afya.com.br/infectologia/doxiciclina-e-incluida-na-profilaxia-pos-exposicao-para-prevencao-de-ists"},
  cabotegravir2026: {s: "CONITEC – cabotegravir (ago/2026)", t: "CFF, 11/08/2026: CONITEC recomendou inicialmente a incorporação do cabotegravir injetável para PrEP (2 doses com 4 semanas de intervalo e depois a cada 8 semanas); consulta pública nº 76/2026 (notícia; sem decisão final).", f: "F", url: "https://site.cff.org.br/noticia/Noticias-gerais/11/08/2026/conitec-recomenda-incorporacao-de-cabotegravir-injetavel-ao-sus-para-prevencao-do-hiv"},
  pcdt_prep: {s: "PCDT PrEP 2022", t: "Ministério da Saúde. PCDT Profilaxia Pré-Exposição (PrEP) de Risco à Infecção pelo HIV (2022) – a partir de 15 anos e ≥ 35 kg; contraindicada com ClCr < 60 mL/min (critérios conforme protocolo de agendamento SUS-BH, out/2024) (norma).", f: "F", url: "https://fluxosusbh.pbh.gov.br/anexos/7bbbc1aaead2d85d10971157118e91f24ab325f3.pdf"},
  nt_dfc2024: {s: "NT 208/2024 – DFC 3TC/DTG", t: "Ministério da Saúde. Nota Técnica nº 208/2024 (06/09/2024): dose fixa combinada lamivudina 300 mg + dolutegravir 50 mg para troca em pessoas já em terapia dupla, com critérios (sem TB, não gestante, HBsAg não reagente, carga viral indetectável) (norma).", f: "F", url: "https://infectologia.org.br/wp-content/uploads/2024/09/DFC-expansao-setembro-de-2024-SEI_0043002749_Nota_Tecnica_208.pdf"},
  hcv_aps2026: {s: "PCDT Hepatite C 2026 – tratamento", t: "Portal Afya: PCDT Hepatite C 2026 – APRI < 1 sem cirrose e sem comorbidades graves pode ser tratado e acompanhado na APS; sofosbuvir + daclatasvir 12 semanas (APRI < 1), sofosbuvir/velpatasvir 12 semanas (APRI ≥ 1 ou Child A) ou 24 semanas (Child B/C); sem genotipagem; RVS com HCV-RNA ≥ 12 semanas após o fim (notícia que resume o PCDT).", f: "F", url: "https://portal.afya.com.br/infectologia/pcdt-de-hepatite-c-amplia-rastreio-e-simplifica-cuidado"},
  pcdt_hbv: {s: "PCDT Hepatite B", t: "Ministério da Saúde. PCDT Hepatite B e Coinfecções (norma; não aberta nesta revisão).", f: "C", url: ""},
  tb_manual2019: {s: "Manual de TB 2019", t: "Ministério da Saúde. Manual de Recomendações para o Controle da Tuberculose no Brasil, 2ª ed., 2019 (PDF no Drive da usuária; texto extraído até a p. 79) (manual normativo).", f: "C", url: "http://bvsms.saude.gov.br/bvs/publicacoes/manual_recomendacoes_controle_tuberculose_brasil_2_ed.pdf"},
  tb_doseplena: {s: "TB – dose plena (SMS-SP 07/23)", t: "SMS São Paulo. Nota Informativa PMCT 07/23 – Quadro 1 do esquema básico (≥ 10 anos): RHZE 150/75/400/275 2–3–4–5 comprimidos por faixa de peso; manutenção com RH 300/150 ('dose plena') para todos os casos; baseada no Manual MS 2019 (nota técnica municipal).", f: "F", url: "https://drive.prefeitura.sp.gov.br/cidade/secretarias/upload/saude/Nota%20Informativa%20PMCT%2007_23%20Dose%20Plena.pdf"},
  ses_iltb2023: {s: "SES-MG NT 1/2023 – ILTB", t: "SES-MG. Nota Técnica Conjunta nº 1/2023 – esquemas de ILTB (3HP preferencial; 4R; 6H/9H), doses por peso e idade, critérios de abandono e fluxo de pedido/dispensação em MG (norma estadual).", f: "F", url: "https://www.saude.mg.gov.br/wp-content/uploads/2025/01/Nota-Tecnica-no-1-SES-SUBPAS-SAF-DMEST-2023.pdf"},
  tb_linha2021: {s: "Linha de cuidado TB 2021", t: "Ministério da Saúde. Linha de Cuidado da Tuberculose: orientações para gestores e profissionais, 2021 – notificação no Sinan; ILTB no IL-TB; tratamentos especiais no SITE-TB (PDF no Drive da usuária).", f: "F", url: ""},
  pqtu_pr: {s: "Guia rápido hanseníase (SESA-PR 2022)", t: "SESA-PR. Novo guia rápido de hanseníase (2022): PQT-U adulto – rifampicina 600 mg, clofazimina 300 mg e dapsona 100 mg mensais supervisionadas + clofazimina 50 mg e dapsona 100 mg diárias; PB 6 cartelas em até 9 meses, MB 12 em até 18 meses; reações: prednisona 1 mg/kg/dia, talidomida 100–400 mg/dia (guia estadual baseado no MS).", f: "F", url: "https://www.saude.pr.gov.br/sites/default/arquivos_restritos/files/documento/2022-03/d-novo-guia_rapido_hanseniase_0.pdf"},
  pcdt_hansen2022: {s: "PCDT Hanseníase 2022", t: "Ministério da Saúde. PCDT Hanseníase (2022) – classificação operacional: PB 1–5 lesões com baciloscopia negativa; MB > 5 lesões e/ou baciloscopia positiva; na dúvida, tratar como MB; reação tipo 2 com talidomida ou pentoxifilina (Quadro 1 de doses adulto e infantil conferido em 10/10/2026 no PDF do Drive da usuária; seção de contatos não extraída) (norma).", f: "F", url: "https://www.gov.br/conitec/pt-br/midias/protocolos/publicacoes_ms/copy_of_20230131_PCDT_Hanseniase_2022_eletronica_ISBN.pdf/@@display-file/file"},
  hansen_contatos: {s: "NT Porto Velho 4/2025 – contatos", t: "SEMUSA Porto Velho. Nota Técnica Conjunta nº 4/2025: contato = quem reside ou residiu com o caso nos 5 anos anteriores ao diagnóstico (PCDT 2022); exame dermatoneurológico, BCG conforme histórico, teste rápido IgM anti-M. leprae só para contatos e não diagnóstico isolado; Lei 14.289/2022 (sigilo) (nota técnica municipal).", f: "F", url: "https://dvs.portovelho.ro.gov.br/uploads/arquivos/2025/09/20976/1758715243nota-tecnica-hanseniase-2025.pdf"},
  conitec_sdr: {s: "CONITEC – rifampicina profilática", t: "CONITEC. Relatório para a Sociedade nº 197 (2020): 'Exclusão da rifampicina para quimioprofilaxia de contatos de pacientes com hanseníase' (título conferido; conteúdo não aberto).", f: "F", url: "https://www.gov.br/conitec/pt-br/midias/consultas/relatorios/2020/sociedade/resoc197_rifampicina_hanseniase.pdf"}
});

const BETIM_INF = "REMUME Betim: benzilpenicilina benzatina 1.200.000 e 600.000 UI; doxiciclina 100 mg; azitromicina 500 mg; ceftriaxona 1 g IM; metronidazol 250 mg; aciclovir 200 mg; RHZE; RH 150/75 e 300/150; isoniazida 100 e 300 mg; rifapentina 150 mg; rifampicina; PQT Único adulto e infantil; prednisona; talidomida 100 mg.";

CONDICOES.push(
{
  id: "in-ist", modulo: "in", nome: "IST: abordagem, parcerias e prevenção combinada", sistema: "IST e sífilis", risco: "moderado",
  ciap: "Y70 · X70 · A98", cid: "A64 · Z20.2",
  tags: "IST infecção sexualmente transmissível corrimento uretral cervicite úlcera genital abordagem sindrômica parcerias prevenção combinada preservativo testagem gonorreia clamídia ceftriaxona azitromicina",
  orient: "Infecções sexualmente transmissíveis são comuns e têm tratamento. Use preservativo até você e suas parcerias terminarem o tratamento.\nSuas parcerias sexuais precisam ser avisadas, testadas e tratadas – a equipe pode ajudar com isso, mantendo seu sigilo.\nFaça os testes de HIV, sífilis e hepatites sempre que tiver uma IST.",
  alarme: ["Dor pélvica com febre", "Dor e inchaço no testículo", "Feridas que não cicatrizam", "Manchas no corpo, nas palmas das mãos ou nas plantas dos pés"],
  encaminhar: "Uretrite persistente após retratamento, DIP com critério de internação, úlceras atípicas/persistentes, suspeita de neurossífilis → referência/infectologia.",
  sus: {nacional: "Testes rápidos, preservativos, gel lubrificante, antibióticos do PCDT IST, PEP e PrEP no SUS.", betim: BETIM_INF},
  evid: {resumo: "O tratamento no mesmo dia (abordagem sindrômica com dupla terapia ceftriaxona + azitromicina para uretrite) e o tratamento das parcerias reduzem complicações e reinfecção. Toda pessoa com IST deve testar HIV, sífilis e hepatites B e C.", certeza: "Moderada", fontes: ["ress_uretral", "ress_sifilis", "pcdt_ist22", "doxipep2026", "remume"]},
  mudancas: ["Item novo de decisão. A página original listava ciprofloxacino como 1ª linha para gonorreia – retirado (resistência; não consta no PCDT vigente)."],
  nv: ["Dose de ceftriaxona com o frasco de 1 g da REMUME: aplicar 500 mg conforme PCDT (conferir diluição e descarte).", "Implantação da doxi-PEP em Betim (prazo de 180 dias a partir de 11/03/2026)."],
  guia: {
    resumo: "O que mais muda desfecho em IST é **tratar no mesmo dia**, **tratar as parcerias** e **testar o resto** (HIV, sífilis, hepatites). Ciprofloxacino não trata gonorreia hoje – use ceftriaxona + azitromicina.",
    secoes: [
     {t: "Corrimento uretral e cervicite", b: [
       {tab: {h: ["Situação", "Tratamento (PCDT IST)"], r: [
         ["Sem identificação do agente (gonorreia + clamídia)", "Ceftriaxona 500 mg IM dose única + azitromicina 1 g (2 cp de 500 mg) VO dose única [F]"],
         ["Clamídia isolada / uretrite não gonocócica", "Azitromicina 1 g VO dose única; alternativa: doxiciclina 100 mg 12/12 h por 7 dias [F]"],
         ["Alergia grave a cefalosporina (gonorreia)", "Azitromicina 2 g (4 cp de 500 mg) dose única [F]"],
         ["Uretrite persistente", "Rever reinfecção/adesão; metronidazol 250 mg, 2 cp 12/12 h por 7 dias (tricomonas); falha de gonorreia: ceftriaxona 500 mg + azitromicina 2 g [F]"]]}, nota: "Capítulo de corrimento uretral do PCDT IST 2020 (RESS 2021) [F]. Retorno em 7 dias; a remissão dos sintomas caracteriza cura [F]. SOAP e receita: atalhos 'Uretrite' e 'Cervicite'."},
       {ref: ["ress_uretral"]}
     ]},
     {t: "Parcerias e prevenção", b: [
       {ul: ["**Parcerias:** sintomáticos – parcerias das últimas 8 semanas; assintomáticos – dos últimos 6 meses; sem relação desprotegida até 7 dias após o tratamento de ambos [F].", "**Sífilis:** parcerias expostas nos últimos 90 dias recebem benzatina 2,4 milhões UI mesmo com teste não reagente [F].", "**Prevenção combinada:** preservativo, PrEP, PEP, vacinas (hepatite B, HPV), testagem regular, tratamento de IST e TARV (indetectável = intransmissível) [C].", "**Doxi-PEP:** doxiciclina pós-exposição incorporada ao SUS em 03/2026 para IST bacterianas, com 180 dias para oferta – conferir população e dose na portaria [F]."]},
       {perola: {t: "Tratar a parceria é tratar o paciente", x: "Sem tratar a parceria, a reinfecção é a regra. Ofereça notificação por cartão/comunicação assistida e, quando o protocolo permitir, tratamento presuntivo das parcerias.", d: "menos reinfecção, DIP, infertilidade e sífilis congênita.", l: "C"}},
       {ref: ["ress_uretral", "ress_sifilis", "doxipep2026"]}
     ]}
    ]}
},
{
  id: "in-sifilis", modulo: "in", nome: "Sífilis: estadiamento, tratamento e seguimento sorológico", sistema: "IST e sífilis", risco: "alto",
  ciap: "Y70 · X70", cid: "A51 · A52 · A53",
  tags: "sífilis VDRL teste não treponêmico treponêmico titulação diluições cicatriz sorológica reinfecção falha retratamento benzatina estadiamento latente parcerias neurossífilis notificação",
  alerta: "Gestante: penicilina benzatina é o único tratamento que trata o feto; intervalo entre doses semanais conforme PCDT da gestante. Sinais neurológicos, oculares ou auditivos: neurossífilis → referência.",
  orient: "A sífilis tem cura com a penicilina. Venha em todas as datas de aplicação.\nO exame VDRL será repetido a cada 3 meses por 1 ano para confirmar a cura. O teste rápido pode continuar positivo a vida toda – isso não significa doença ativa.\nSuas parcerias precisam ser testadas e tratadas.",
  alarme: ["Alteração de visão ou audição", "Dor de cabeça intensa, confusão ou fraqueza", "Feridas ou manchas que voltam"],
  encaminhar: "Neurossífilis, sífilis ocular/otológica, falha terapêutica em PVHIV, alergia grave à penicilina em gestante (dessensibilização) → infectologia/referência.",
  sus: {nacional: "Testes rápidos treponêmicos, VDRL, benzilpenicilina benzatina e doxiciclina no SUS; sífilis adquirida de notificação compulsória.", betim: "REMUME Betim: benzilpenicilina benzatina 1.200.000 e 600.000 UI; doxiciclina 100 mg."},
  evid: {resumo: "Benzilpenicilina benzatina é o tratamento de escolha em todos os estágios. Resposta adequada: queda de ≥ 2 diluições em até 6 meses (sífilis recente) ou 12 meses (tardia); aumento de ≥ 2 diluições indica reinfecção/falha; títulos baixos persistentes após queda adequada (cicatriz sorológica) não são falha.", certeza: "Alta para penicilina; recomendação normativa", fontes: ["ress_sifilis", "sp_sifilis", "remume"]},
  mudancas: ["Item novo de seguimento; a prescrição por estágio segue em 'Sífilis adquirida' (demanda)."],
  nv: ["Intervalo máximo entre doses semanais em gestantes no PCDT vigente."],
  guia: {
    resumo: "Muda desfecho: **estadiar certo** (na dúvida, tardia = 3 doses), **não deixar passar mais de 14 dias entre doses** (fora da gestação), **seguir o VDRL trimestral** e **tratar parcerias**. Teste treponêmico reagente para sempre não é doença ativa.",
    calcs: ["vdrl"],
    secoes: [
     {t: "Estadiamento e tratamento", b: [
       {tab: {h: ["Estágio", "Benzilpenicilina benzatina", "Alternativa (não gestante)"], r: [
         ["Recente: primária, secundária, latente ≤ 1 ano", "2,4 milhões UI IM, dose única [F]", "Doxiciclina 100 mg 12/12 h por 15 dias [F]"],
         ["Tardia: latente > 1 ano ou duração ignorada, terciária", "2,4 milhões UI IM semanal por 3 semanas (7,2 milhões UI) [F]", "Doxiciclina 100 mg 12/12 h por 30 dias [F]"],
         ["Neurossífilis", "Penicilina cristalina 18–24 milhões UI/dia EV por 14 dias (hospital) [F]", "Ceftriaxona 2 g EV/dia por 10–14 dias [F]"]]}, nota: "PCDT IST 2020 (RESS 2021) [F]. Intervalo entre doses semanais não deve passar de 14 dias; se passar, reiniciar [F]."},
       {ref: ["ress_sifilis", "sp_sifilis"]}
     ]},
     {t: "Seguimento e interpretação", b: [
       {calc: "vdrl"},
       {ul: ["VDRL/RPR a cada **3 meses até 12 meses**, preferindo o mesmo método; gestante: mensal na gestação e trimestral até 12 meses pós-parto [F].", "Variação de 1 diluição não tem significado clínico [F].", "**Retratar** se: não cair 2 diluições em 6 meses (recente) / 12 meses (tardia), subir ≥ 2 diluições, ou sinais clínicos persistentes/recorrentes [F].", "**Reinfecção sem nova exposição de risco:** investigar neurossífilis (punção lombar); em PVHIV, em todo retratamento [F].", "**Cicatriz sorológica:** títulos baixos persistentes após queda adequada, sem nova exposição – não é falha [F]."]},
       {perola: {t: "Peça o VDRL antes da 1ª dose", x: "Sem o título do dia do tratamento, não há como avaliar a resposta depois – e a pessoa acaba retratada sem necessidade ou com falha não percebida.", d: "seguimento confiável, menos retratamento desnecessário.", l: "C"}},
       {ref: ["ress_sifilis"]}
     ]}
    ]}
},
{
  id: "in-prep", modulo: "in", nome: "PrEP, PEP e doxi-PEP: prevenção do HIV e de IST", sistema: "HIV e PrEP", risco: "moderado",
  ciap: "A98 · B25", cid: "Z20.6 · Z29.8",
  tags: "PrEP profilaxia pré-exposição tenofovir entricitabina sob demanda 2+1+1 cabotegravir injetável PEP profilaxia pós-exposição 72 horas doxi-PEP doxiciclina prevenção combinada HSH trans profissionais do sexo",
  orient: "A PrEP é um remédio que, tomado corretamente, previne o HIV com eficácia muito alta. É gratuita no SUS.\nA PEP deve começar o quanto antes, em até 72 horas depois da exposição, e dura 28 dias.\nPrEP e PEP não previnem outras IST: mantenha o preservativo e os testes regulares.",
  alarme: ["Exposição de risco nas últimas 72 horas", "Febre, manchas e dor de garganta semanas após exposição (infecção aguda)"],
  encaminhar: "PrEP em adolescentes 15–17 anos, gestantes, DRC, hepatites B/C → SAE (conforme fluxo local, ex.: SUS-BH).",
  sus: {nacional: "PrEP oral (TDF/FTC) e PEP no SUS; doxi-PEP incorporada em 03/2026; cabotegravir injetável em consulta pública (2026).", betim: "Pontos de PrEP/PEP em Betim e dispensação (SICLOM): ver 'Rede de Betim'."},
  evid: {resumo: "A PrEP oral com TDF/FTC reduz a infecção por HIV em mais de 90% com boa adesão. A PEP iniciada em até 72 h, por 28 dias, reduz a transmissão. Doxiciclina pós-exposição reduziu clamídia e sífilis em ~77–79% em populações de alto risco.", certeza: "Alta (PrEP e PEP)", fontes: ["pcdt_prep", "pcdt_pep", "pep_2024", "doxipep2026", "cabotegravir2026"]},
  mudancas: ["Item novo, a partir do bloco HIV/PrEP/PEP da página original (formulários SICLOM)."],
  nv: ["Dose, janela e população da doxi-PEP na portaria de 11/03/2026.", "Decisão final sobre cabotegravir após a consulta pública 76/2026.", "Oferta de PrEP na APS de Betim."],
  guia: {
    resumo: "Muda desfecho: **oferecer PrEP ativamente** a quem tem risco (não esperar pedir), **PEP sem atraso** (até 72 h) e **converter PEP em PrEP** quando a exposição é recorrente.",
    secoes: [
     {t: "PrEP oral", b: [
       {ul: ["**Elegibilidade:** ≥ 15 anos e ≥ 35 kg, HIV não reagente, sexualmente ativo com risco aumentado (populações-chave, parcerias múltiplas, uso inconsistente de preservativo, IST recente, uso repetido de PEP) [F].", "**Contraindicação:** ClCr < 60 mL/min [F].", "Regime diário (TDF/FTC 1 cp/dia) ou sob demanda (2+1+1) para quem pratica sexo anal e não tem hepatite B [C].", "Seguimento: teste de HIV a cada consulta, creatinina, testes de IST e hepatites periodicamente [C].", "**Cabotegravir injetável** (a cada 8 semanas): recomendado pela CONITEC em 2026, ainda em consulta pública [F]."]},
       {ref: ["pcdt_prep", "cabotegravir2026"]}
     ]},
     {t: "PEP e doxi-PEP", b: [
       {ul: ["PEP: iniciar **em até 72 h** (idealmente nas primeiras 2 h), por 28 dias; testar HIV antes; ver item 'Exposição de risco ao HIV – PEP' [C].", "Ao fim da PEP, avaliar PrEP se o risco continua [C].", "Doxi-PEP: incorporada em 11/03/2026 para prevenção de IST bacterianas; oferta até setembro/2026 [F]."]},
       {trio: {ideal: "PrEP oral ou injetável oferecida na APS, inclusive sob demanda; doxi-PEP para populações de alto risco.", sus: "PrEP oral e PEP disponíveis; cabotegravir em avaliação; doxi-PEP em implantação.", ponte: "Ofereça PrEP oral sem esperar o injetável; para quem tem IST bacteriana de repetição, verifique a implantação local da doxi-PEP."}},
       {ref: ["pcdt_pep", "doxipep2026"]}
     ]}
    ]}
},
{
  id: "in-hiv", modulo: "in", nome: "Pessoa vivendo com HIV na APS: diagnóstico, vinculação e cuidado compartilhado", sistema: "HIV e PrEP", risco: "alto",
  ciap: "B90", cid: "B24 · Z21",
  tags: "HIV diagnóstico teste rápido fluxograma vinculação SAE TARV dolutegravir tenofovir lamivudina carga viral CD4 indetectável intransmissível adesão infecções oportunistas tuberculose ILTB notificação",
  orient: "O HIV tem tratamento gratuito e eficaz. Com o remédio todos os dias, o vírus fica indetectável – você vive bem e não transmite por via sexual.\nO tratamento é para a vida toda; não pare por conta própria.\nA UBS continua cuidando de você junto com o serviço especializado.",
  alarme: ["Febre persistente, perda de peso ou tosse > 2 semanas", "Dor de cabeça forte, confusão ou convulsão", "Falta de ar progressiva", "Placas brancas na boca que dificultam engolir"],
  encaminhar: "Todo diagnóstico novo → vinculação ao SAE com rapidez (início de TARV idealmente em até 7 dias); sinais de infecção oportunista → urgência/SAE.",
  sus: {nacional: "Testes rápidos (fluxograma com dois testes diferentes), TARV pelo SICLOM, carga viral/CD4 (SISCEL).", betim: "SAE de referência e fluxo de vinculação em Betim: ver 'Rede de Betim'."},
  evid: {resumo: "Início rápido da TARV reduz mortalidade e transmissão; carga viral indetectável sustentada não transmite HIV por via sexual (I=I). Toda PVHIV deve ser rastreada para TB e tratar ILTB quando indicado.", certeza: "Alta", fontes: ["pcdt_hiv", "nt_dfc2024", "ses_iltb2023"]},
  mudancas: ["Item novo, a partir das três situações da página original (diagnóstico prévio, novo diagnóstico, início de TARV)."],
  nv: ["Esquema inicial e apresentações vigentes (PCDT HIV adultos) e se a APS de Betim prescreve TARV."],
  guia: {
    resumo: "Na APS, o que mais muda desfecho é **diagnosticar cedo**, **vincular rápido** ao serviço (TARV em até 7 dias), **rastrear TB em toda consulta** e **sustentar a adesão** – a UBS é quem percebe o abandono primeiro.",
    secoes: [
     {t: "Do teste à vinculação", b: [
       {ol: ["Teste rápido reagente → 2º teste rápido de fabricante diferente (fluxograma do MS) [C].", "Dois reagentes = diagnóstico; notificar e vincular ao SAE com prioridade [C].", "Coletar/solicitar: carga viral, CD4, hemograma, creatinina, transaminases, sífilis, hepatites, toxoplasmose, PT/IGRA, RX de tórax se sintomas [C].", "**Rastrear TB** (tosse, febre, sudorese, perda de peso) em toda consulta; ILTB tratada com 3HP quando indicada [F]."]},
       {ref: ["pcdt_hiv", "ses_iltb2023"]}
     ]},
     {t: "TARV e acompanhamento compartilhado", b: [
       {ul: ["Esquema inicial preferencial: tenofovir + lamivudina + dolutegravir [C].", "Dose fixa combinada lamivudina 300 + dolutegravir 50 mg: para **troca** em quem já está em terapia dupla e preenche critérios (sem TB, não gestante, HBsAg não reagente, CV indetectável) – não para início [F].", "Interações: rifampicina reduz dolutegravir (ajuste no SAE); antiácidos/ferro/cálcio – tomar DTG 2 h antes ou 6 h depois [C].", "Na APS: vacinas (hepatite B, HPV 9–45 anos em 3 doses, pneumocócica conforme CRIE), rastreios, saúde mental, PA, risco CV, citologia anual/DNA-HPV a cada 3 anos [F]."]},
       {perola: {t: "Indetectável = intransmissível", x: "Explicar I=I reduz estigma, melhora adesão e alivia o medo de transmitir à parceria – é intervenção clínica, não só informação.", d: "maior adesão e supressão viral.", l: "C"}},
       {ref: ["nt_dfc2024", "hpv_vac2026", "inca_colo2025"]}
     ]}
    ]}
},
{
  id: "in-hepatites", modulo: "in", nome: "Hepatites B e C na APS (tratamento da C na unidade)", sistema: "Hepatites", risco: "moderado",
  ciap: "D72", cid: "B18.1 · B18.2",
  tags: "hepatite B HBsAg anti-HBc anti-HBs hepatite C anti-HCV HCV-RNA carga viral APRI FIB-4 sofosbuvir daclatasvir velpatasvir tratamento na APS cirrose resposta virológica sustentada vacina hepatite A B",
  orient: "A hepatite C tem cura com comprimidos por 12 semanas, muitas vezes tratada na própria UBS.\nA hepatite B crônica não tem cura, mas tem controle e acompanhamento; vacine as pessoas da sua casa.\nEvite álcool e remédios por conta própria; conte à equipe todos os remédios que usa.",
  alarme: ["Pele ou olhos amarelos", "Barriga inchada (ascite)", "Vômito com sangue ou fezes pretas", "Sonolência ou confusão"],
  encaminhar: "Hepatite B: todos os HBsAg reagentes para avaliação de tratamento (infectologia/hepatologia). Hepatite C: APRI ≥ 1/cirrose, coinfecção HIV ou HBV, gestação, < 18 anos, DRC grave, transplante, neoplasia, uso de anticonvulsivante indutor/amiodarona, falha prévia → especialista.",
  sus: {nacional: "Testes rápidos e confirmação (HCV-RNA, HBV-DNA); antivirais de ação direta para hepatite C conforme PCDT 2026; vacinas hepatite A (grupos) e B.", betim: "Fluxo de HCV-RNA, solicitação de DAA e referência em Betim: confirmar."},
  evid: {resumo: "O PCDT Hepatite C (2026) permite tratar na APS quem tem APRI < 1, sem cirrose e sem comorbidades graves, com sofosbuvir + daclatasvir por 12 semanas, sem genotipagem; cura confirmada por HCV-RNA indetectável ≥ 12 semanas após o fim.", certeza: "Alta (eficácia dos DAA)", fontes: ["hcv_aps2026", "pcdt_hcv2026", "pcdt_hbv"]},
  mudancas: ["Item novo. A página original encaminhava todos os casos de hepatite C à infectologia; o PCDT 2026 permite tratar casos sem cirrose na APS."],
  nv: ["Nota técnica com as opções concretas de DAA no SUS (critério de minimização de custos).", "Fluxo de solicitação de DAA a partir da APS em MG."],
  guia: {
    resumo: "A mudança que mais muda desfecho: **hepatite C sem cirrose pode ser curada na UBS**. Teste rápido → HCV-RNA → APRI/FIB-4 → revisar interações → DAA 12 semanas → HCV-RNA 12 semanas depois.",
    calcs: ["apri", "fib4"],
    secoes: [
     {t: "Hepatite C: fluxo na APS", b: [
       {fluxo: [
         {t: "Anti-HCV reagente → HCV-RNA"},
         {t: "HCV-RNA detectável: estadiar (APRI e FIB-4) e revisar medicamentos", ramos: [
           {r: "APRI < 1, sem cirrose nem critério de especialista", n: [{t: "Tratar na APS: sofosbuvir + daclatasvir 12 semanas", k: "ok"}]},
           {r: "APRI ≥ 1 ou cirrose compensada", n: [{t: "Sofosbuvir/velpatasvir 12 semanas (especialista)", k: "warn"}]},
           {r: "Cirrose descompensada", n: [{t: "Sofosbuvir/velpatasvir 24 semanas – hepatologia", k: "stop"}]}
         ]},
         {t: "HCV-RNA ≥ 12 semanas após o fim: indetectável = cura", k: "ok"}
       ], nota: "PCDT Hepatite C 2026, conforme resumo publicado [F]. Sem genotipagem [F]. Não usar DAA com rifampicina, rifabutina, rifapentina, carbamazepina, oxcarbazepina, fenitoína, fenobarbital [F]."},
       {calc: "apri"},
       {ref: ["hcv_aps2026"]}
     ]},
     {t: "Hepatite B", b: [
       {tab: {h: ["Marcadores", "Interpretação"], r: [["HBsAg +", "Infecção (aguda ou crônica > 6 meses) → avaliação especializada [C]"], ["Anti-HBc + e anti-HBs +", "Infecção passada resolvida [C]"], ["Anti-HBs + isolado", "Vacinado [C]"], ["Todos negativos", "Suscetível → vacinar (3 doses) [F]"]]}},
       {ul: ["Todo HBsAg reagente: vacinar contactantes domiciliares e parcerias, testar familiares [C].", "Antes de imunossupressão/quimioterapia: pedir HBsAg e anti-HBc (risco de reativação) [C]."]},
       {ref: ["pcdt_hbv", "pni_adulto2026"]}
     ]}
    ]}
},
{
  id: "in-tb", modulo: "in", nome: "Tuberculose: diagnóstico e tratamento na APS", sistema: "Tuberculose", risco: "alto",
  ciap: "A70", cid: "A15 · A16",
  tags: "tuberculose sintomático respiratório tosse 3 semanas TRM-TB baciloscopia cultura RHZE esquema básico dose por peso TDO tratamento diretamente observado hepatotoxicidade contatos notificação abandono",
  alerta: "Hemoptise volumosa, dispneia, rebaixamento ou TB com HIV grave: urgência. Suspeita de TB resistente (retratamento, contato de TB-DR, falha): referência para TRM e cultura com teste de sensibilidade.",
  S: "Paciente, ___ anos, com tosse há ___ semanas, ___ (febre vespertina / sudorese noturna / perda de ___ kg / hemoptise). Contato com TB ___. Tratamento prévio de TB ___. HIV ___. DM ___. Álcool/tabaco/drogas ___. Situação de rua/privação de liberdade ___. Gestação ___. Medicamentos (contraceptivo hormonal, anticoagulante, antirretroviral, hipoglicemiante) ___.",
  O: "Peso ___ kg | FR ___ | SpO2 ___. Ausculta ___. TRM-TB ___ (rifampicina ___). Baciloscopia ___. Cultura/TS ___. RX de tórax ___. Teste rápido HIV ___. Glicemia ___. TGO/TGP ___.",
  A: "Tuberculose ___ (pulmonar / extrapulmonar), caso ___ (novo / retratamento), sensível à rifampicina ___.",
  P: "- Notificação no Sinan.\n- Esquema básico: RHZE ___ comprimidos/dia (peso ___ kg) por 2 meses, depois RH ___ por 4 meses.\n- Tratamento diretamente observado (TDO).\n- Avaliação de contatos.\n- Retorno em 15 dias e mensal; baciloscopia de controle mensal (pulmonar).",
  orient: "A tuberculose tem cura com o tratamento completo de 6 meses, mesmo que você melhore antes.\nTome os comprimidos todos juntos, uma vez ao dia, de preferência em jejum.\nA urina e o suor podem ficar alaranjados – é normal.\nA rifampicina corta o efeito da pílula anticoncepcional: use preservativo ou outro método.\nDepois de 15 dias de tratamento, o risco de transmitir cai muito; mantenha a casa ventilada.",
  alarme: ["Pele ou olhos amarelos, vômitos ou dor na barriga (fígado)", "Manchas na pele com coceira intensa ou bolhas", "Alteração da visão (etambutol)", "Tosse com sangue em grande quantidade", "Falta de ar"],
  encaminhar: "TB resistente, falha, hepatotoxicidade grave, intolerância que exige esquema especial, TB em PVHIV grave, gestante com intercorrência, TB extrapulmonar complexa → referência secundária/terciária.",
  sus: {nacional: "TRM-TB, baciloscopia, cultura, RX; medicamentos do Componente Estratégico; notificação no Sinan; tratamentos especiais no SITE-TB.", betim: BETIM_INF},
  evid: {resumo: "Esquema básico 2RHZE/4RH cura > 85% dos casos sensíveis com adesão. TDO e acompanhamento próximo reduzem abandono. Toda pessoa com TB deve ser testada para HIV e ter seus contatos avaliados.", certeza: "Alta", fontes: ["tb_doseplena", "tb_manual2019", "tb_linha2021", "remume"]},
  mudancas: ["Item novo. A página original indicava cultura ao final do tratamento como critério de cura e não trazia a 'dose plena' de RH 300/150 na manutenção."],
  nv: ["Conduta detalhada da hepatotoxicidade (limiares de transaminases): conferir Manual de TB.", "Laboratório de TRM-TB de referência para Betim."],
  guia: {
    resumo: "O que mais muda desfecho na TB é **achar cedo** (todo sintomático respiratório ≥ 3 semanas → TRM-TB), **dose certa por peso**, **TDO** e **não perder o paciente** – abandono gera resistência e transmissão. E todo caso: HIV, glicemia e contatos.",
    calcs: ["rhze"],
    secoes: [
     {t: "Diagnóstico", b: [
       {ul: ["Sintomático respiratório: tosse ≥ 3 semanas (em populações vulneráveis – PVHIV, situação de rua, privados de liberdade, indígenas – qualquer duração) [C].", "**TRM-TB** (teste rápido molecular) como exame inicial onde disponível – detecta também resistência à rifampicina [C].", "Baciloscopia de escarro (2 amostras) se não houver TRM; cultura com teste de sensibilidade em retratamento, falha, contatos de TB resistente e populações vulneráveis [C].", "RX de tórax apoia, mas não confirma [C].", "Testar HIV em todos [C]."]},
       {ref: ["tb_manual2019"]}
     ]},
     {t: "Esquema básico (≥ 10 anos)", b: [
       {calc: "rhze"},
       {tab: {h: ["Peso", "Ataque – RHZE 150/75/400/275 (2 meses)", "Manutenção – RH (4 meses)"], r: [
         ["20–35 kg", "2 comprimidos", "1 cp de 300/150"], ["36–50 kg", "3 comprimidos", "1 cp de 300/150 + 1 cp de 150/75"],
         ["51–70 kg", "4 comprimidos", "2 cp de 300/150"], ["> 70 kg", "5 comprimidos", "2 cp de 300/150 + 1 cp de 150/75"]]}, nota: "Quadro 1 da Nota Informativa SMS-SP 07/23, baseada no Manual MS 2019 [F]. RH 300/150 ('dose plena') para todos na manutenção [F]. REMUME Betim tem RHZE, RH 150/75 e RH 300/150 [F]."},
       {ref: ["tb_doseplena", "remume"]}
     ]},
     {t: "Acompanhamento", b: [
       {ul: ["Notificar no Sinan; registrar no livro de acompanhamento [F].", "Retorno em 15 dias e depois mensal; **baciloscopia de controle mensal** na TB pulmonar; baciloscopia positiva no 2º mês → cultura e teste de sensibilidade [C].", "**TDO** (pela equipe, idealmente na UBS ou domicílio) [C].", "Reações: náusea leve, urina laranja e artralgia são comuns e manejáveis; icterícia, exantema grave ou alteração visual exigem suspensão e avaliação [C].", "Interações: rifampicina reduz contraceptivos hormonais, anticoagulantes, antirretrovirais (dolutegravir), hipoglicemiantes e outros [C]."]},
       {perola: {t: "Faltou 1 dose? Busque no mesmo dia", x: "A busca ativa precoce (telefone, ACS, visita) do faltoso é a intervenção que mais evita abandono. Combine com o paciente o melhor horário e local para o TDO.", d: "menos abandono, resistência e transmissão.", l: "C"}},
       {ref: ["tb_linha2021", "tb_manual2019"]}
     ]}
    ]}
},
{
  id: "in-iltb", modulo: "in", nome: "Contatos de TB e infecção latente (ILTB)", sistema: "Tuberculose", risco: "moderado",
  ciap: "A70 · A98", cid: "R76.1 · Z20.1",
  tags: "ILTB infecção latente tuberculose contatos prova tuberculínica PT IGRA 3HP rifapentina isoniazida 4R 6H 9H piridoxina PVHIV crianças notificação IL-TB",
  orient: "A infecção latente não transmite, mas pode virar tuberculose doença no futuro. O tratamento preventivo reduz muito esse risco.\nO esquema 3HP é tomado 1 vez por semana, por 12 semanas, com acompanhamento da equipe.\nSe aparecer tosse, febre ou perda de peso, avise a equipe.",
  alarme: ["Pele ou olhos amarelos, vômitos, dor na barriga", "Febre, tosse ou perda de peso durante o tratamento preventivo"],
  encaminhar: "Contato de TB resistente, gestante, hepatopatia, interações complexas (antirretrovirais) → referência.",
  sus: {nacional: "PT/IGRA, RX, esquemas de ILTB (3HP preferencial) com notificação no IL-TB.", betim: "REMUME Betim: rifapentina 150 mg, isoniazida 100 e 300 mg, rifampicina. Em MG, pedido pela referência municipal à SES (NT 1/2023)."},
  evid: {resumo: "Tratar ILTB em contatos e pessoas de alto risco reduz o adoecimento por TB em 60–90%. O 3HP (12 doses semanais) tem maior adesão e menos hepatotoxicidade que 6–9H e é o esquema preferencial no Brasil desde 2022.", certeza: "Alta", fontes: ["ses_iltb2023", "tb_manual2019", "tb_linha2021"]},
  mudancas: ["Item novo."],
  nv: ["Pontos de corte de PT por grupo: conferir Manual de TB/protocolo de ILTB vigente."],
  guia: {
    resumo: "Muda desfecho: **avaliar todos os contatos** (sobretudo crianças < 5 anos e PVHIV) e **tratar a ILTB com 3HP** – 12 doses, maior adesão. Antes de tratar, **excluir TB ativa** (sintomas + RX).",
    calcs: ["iltb"],
    secoes: [
     {t: "Avaliação de contatos", b: [
       {ol: ["Listar contatos (domicílio, trabalho, escola) e priorizar < 5 anos, PVHIV e imunossuprimidos [C].", "Sintomático → investigar TB ativa [C].", "Assintomático → PT ou IGRA e RX de tórax [C].", "ILTB confirmada (ou indicação sem teste, como RN coabitante de caso bacilífero e PVHIV com CD4 ≤ 350) → tratar e notificar no IL-TB [C]."]},
       {ref: ["tb_manual2019", "tb_linha2021"]}
     ]},
     {t: "Esquemas (SES-MG NT 1/2023)", b: [
       {calc: "iltb"},
       {tab: {h: ["Esquema", "Doses", "Adulto"], r: [
         ["3HP (preferencial)", "12 doses semanais em 12–15 semanas", "Isoniazida 900 mg + rifapentina 900 mg/semana (> 14 anos e ≥ 30 kg) [F]"],
         ["4R", "120 doses diárias em 4–6 meses", "Rifampicina 10 mg/kg/dia, até 600 mg [F]"],
         ["6H / 9H", "180 / 270 doses em 6–9 / 9–12 meses", "Isoniazida 5–10 mg/kg/dia, até 300 mg [F]"]]}, nota: "Abandono: 3HP perda de 3 doses; 6H/9H 3 meses sem medicação; 4R 2 meses sem medicação [F]. 3HP tomado sob supervisão [C]."},
       {ref: ["ses_iltb2023"]}
     ]}
    ]}
},
{
  id: "in-hansen", modulo: "in", nome: "Hanseníase: diagnóstico, PQT-U, reações e contatos", sistema: "Hanseníase", risco: "alto",
  ciap: "A78", cid: "A30",
  tags: "hanseníase mancha com alteração de sensibilidade nervo espessado paucibacilar multibacilar PQT-U rifampicina clofazimina dapsona reação hansênica tipo 1 tipo 2 eritema nodoso talidomida prednisona neurite avaliação neurológica simplificada contatos BCG",
  alerta: "Neurite aguda (dor no nervo, perda súbita de força/sensibilidade) ou reação com olho/testículo: corticoide no mesmo dia e referência – risco de incapacidade permanente. Talidomida: proibida em gestantes; exige contracepção eficaz em mulheres em idade fértil.",
  S: "Paciente, ___ anos, com ___ (manchas / placas / nódulos) há ___, com ___ (alteração de sensibilidade térmica/dolorosa/tátil). Dormência ou fraqueza em mãos/pés ___. Dor em trajeto de nervo ___. Contato com hanseníase ___. Gestação ___.",
  O: "Lesões: ___ (número ___, localização ___). Sensibilidade nas lesões ___. Nervos espessados/dolorosos ___. Avaliação neurológica simplificada: grau de incapacidade ___. Baciloscopia ___.",
  A: "Hanseníase ___ (PB / MB), grau de incapacidade ___. Reação ___.",
  P: "- Notificação no Sinan.\n- PQT-U ___ cartelas (PB 6 / MB 12), dose mensal supervisionada.\n- Avaliação neurológica simplificada no início, a cada 3 meses e na alta.\n- Exame de contatos e BCG conforme histórico.\n- Orientações de autocuidado.",
  orient: "A hanseníase tem cura com o tratamento completo, que é gratuito. Depois da primeira dose, você não transmite a doença.\nVenha todo mês para a dose supervisionada.\nA clofazimina deixa a pele mais escura temporariamente – volta ao normal após o tratamento.\nDor ou dormência nos nervos, perda de força nas mãos ou pés, ou manchas que inflamam: procure a UBS no mesmo dia.\nSuas informações são sigilosas.",
  alarme: ["Dor forte em nervo do braço, perna ou rosto", "Perda súbita de força ou sensibilidade nas mãos ou pés", "Olho vermelho e dolorido ou dificuldade para fechar o olho", "Nódulos dolorosos na pele com febre"],
  encaminhar: "Dúvida diagnóstica, reações graves ou recorrentes, neurite sem resposta, incapacidade grau 2, reação adversa grave à PQT → referência em hanseníase.",
  sus: {nacional: "PQT-U, prednisona e talidomida no SUS; notificação compulsória; teste rápido para contatos.", betim: "REMUME Betim: PQT Único adulto e infantil, prednisona 5 e 20 mg, talidomida 100 mg."},
  evid: {resumo: "PQT-U (rifampicina, clofazimina e dapsona) por 6 meses (PB) ou 12 meses (MB) cura a infecção; o maior dano evitável é a incapacidade por neurite não tratada. Exame de contatos é a principal estratégia de detecção precoce.", certeza: "Alta", fontes: ["pcdt_hansen2022", "pqtu_pr", "hansen_contatos", "conitec_sdr", "remume"]},
  mudancas: ["Item novo."],
  nv: ["Doses de PQT-U para < 50 kg e crianças: conferir PCDT 2022 (Quadro 1).", "Esquema de BCG para contatos por número de cicatrizes: conferir PCDT."],
  guia: {
    resumo: "O diagnóstico é **clínico**: lesão com alteração de sensibilidade e/ou nervo espessado. O que mais muda desfecho é **tratar neurite no mesmo dia** (incapacidade é permanente), **completar a PQT-U** e **examinar os contatos** dos últimos 5 anos.",
    secoes: [
     {t: "Diagnóstico e classificação", b: [
       {ul: ["Sinais cardinais: lesão de pele com alteração de sensibilidade; espessamento de nervo periférico com alteração sensitiva/motora/autonômica; baciloscopia positiva [C].", "**PB:** 1–5 lesões e baciloscopia obrigatoriamente negativa [F].", "**MB:** > 5 lesões e/ou baciloscopia positiva; **na dúvida, tratar como MB** [F].", "Avaliação neurológica simplificada no diagnóstico, a cada 3 meses e na alta [C]."]},
       {ref: ["pcdt_hansen2022"]}
     ]},
     {t: "PQT-U (adulto)", b: [
       {tab: {h: ["Componente", "Dose mensal supervisionada", "Dose diária autoadministrada"], r: [
         ["Rifampicina", "600 mg [F]", "—"], ["Clofazimina", "300 mg [F]", "50 mg [F]"], ["Dapsona", "100 mg [F]", "100 mg [F]"]]}, nota: "PB: 6 cartelas em até 9 meses; MB: 12 cartelas em até 18 meses [F]. Crianças < 50 kg: dose ajustada – conferir PCDT [NV]. Guia SESA-PR 2022 [F]."},
       {ref: ["pqtu_pr"]}
     ]},
     {t: "Reações hansênicas e neurite", b: [
       {tab: {h: ["Reação", "Tratamento"], r: [
         ["Tipo 1 (reversa) / neurite", "Prednisona 1 mg/kg/dia com redução gradual; imobilizar membro na neurite [F]"],
         ["Tipo 2 (eritema nodoso hansênico)", "Talidomida 100–400 mg/dia conforme gravidade; ou pentoxifilina; olho/testículo: corticoide [F]"]]}},
       {ul: ["Talidomida: teratogênica – proibida na gestação; mulheres em idade fértil só com contracepção eficaz e termo de responsabilidade [C].", "Corticoide prolongado: profilaxia de estrongiloidíase e cuidado com osso/glicemia [F]."]},
       {ref: ["pqtu_pr", "pcdt_hansen2022"]}
     ]},
     {t: "Contatos", b: [
       {ul: ["Contato: quem reside ou residiu com o caso nos **5 anos** anteriores ao diagnóstico [F].", "Exame dermatoneurológico de todos; BCG conforme histórico vacinal; reavaliação anual por 5 anos [F].", "Teste rápido (IgM anti-M. leprae): só para contatos, nunca diagnostica isoladamente [F]."]},
       {trio: {ideal: "Exame de contatos + profilaxia pós-exposição com rifampicina em dose única (recomendação da OMS desde 2018).", sus: "Exame de contatos, BCG e teste rápido; rifampicina profilática não incorporada como rotina (CONITEC 2020 – exclusão).", ponte: "Priorize o exame anual dos contatos e a BCG; profilaxia com rifampicina só em projetos/protocolos locais autorizados."}},
       {ref: ["hansen_contatos", "conitec_sdr"]}
     ]}
    ]}
}
);
