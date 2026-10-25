// ───────────── data64.js – v51: Guia Clínico nos itens da Demanda espontânea – lote 1 (12 itens de alto risco sem guia).
// Padrão clínico-decisório: Agir agora → Reconhecer (apresentação + fisiopatologia recolhida) → Critérios → Diferenciais → Fluxograma → Tratar → Encaminhar → Fontes.
// Rótulos: apresentação, fisiopatologia e diferenciais como [C] (conhecimento consolidado); critérios, condutas, doses e SUS/Betim [F] ou [NV].
// Conferido em 25/10/2026: NICE NG158 (TEV), NICE NG143 (febre < 5 anos, Tabela 2), NICE NG224 (ITU < 16 anos), SBC IC 2026 (cap. 7 e 8, base clínica),
// CAB 28 vol. II (dor abdominal, base clínica), SBD 2025 (SHHNC; manejo da terapia no DM2 – R16; diagnóstico), consenso ADA/EASD 2024 de crises
// hiperglicêmicas (pela revisão do CCJM 2025), TelessaúdeRS Urologia 2023 (base clínica), Barbosa 2013 (TWIST, PubMed), CDC STI 2021 (epididimite),
// ASAM 2020 (abstinência alcoólica), Portaria GM/MS 6.734/2025 (base clínica), NICE CG103 (atualização 2023: 4AT), PCDT IST 2022 (sem esquema de epididimite).
Object.assign(FONTES, {
  nice_ng158: {s: "NICE NG158 – TEV: diagnóstico e tratamento", t: "NICE. Venous thromboembolic diseases: diagnosis, management and thrombophilia testing (NG158, 2020; emendas até 2023). Wells TVP em 2 níveis (≥ 2 provável): doppler proximal com resultado em até 4 h; se não for possível, D-dímero + anticoagulação interina e doppler em até 24 h; doppler negativo com D-dímero positivo → repetir em 6–8 dias. TVP improvável: D-dímero em até 4 h. Wells TEP em 2 níveis (> 4 provável); PERC quando a suspeita é baixa; D-dímero ajustado à idade > 50 anos. Tratamento: apixabana ou rivaroxabana de 1ª linha; HBPM ≥ 5 dias seguida de dabigatrana/edoxabana ou de AVK até INR ≥ 2,0 em 2 leituras; ClCr < 15: HBPM/HNF ± AVK; câncer ativo: DOAC ou HBPM; duração mínima de 3 meses (3–6 no câncer); provocada: parar em 3 meses se o fator resolveu; não provocada: considerar estender, pesando sangramento (HAS-BLED) (diretriz; conferida em 25/10/2026).", f: "F", url: "https://www.nice.org.uk/guidance/NG158/chapter/Recommendations"},
  nice_ng224: {s: "NICE NG224 – ITU em < 16 anos (2022)", t: "NICE. Urinary tract infection in under 16s: diagnosis and management (NG224, jul/2022; última alteração nov/2025). Colher urina antes do antibiótico (jato limpo; coletor tipo almofada se não der; sondagem ou punção suprapúbica se necessário); < 3 meses: encaminhar ao pediatra/especialista para microscopia, cultura e antibiótico parenteral; 3 meses a < 3 anos: fita com LE e nitrito negativos → sem antibiótico; qualquer positivo → cultura e antibiótico; ≥ 3 anos: tabela de fita; ITU alta = bacteriúria + febre ≥ 38 °C (ou < 38 °C com dor lombar); PCR não diferencia; ITU atípica (grave, jato fraco, massa, creatinina elevada, septicemia, sem resposta em 48 h, não E. coli) e recorrente (≥ 2 altas; 1 alta + ≥ 1 baixa; ≥ 3 baixas); imagem por idade (< 6 meses: USG em 6 semanas se boa resposta; 6 meses–3 anos e ≥ 3 anos: sem imagem de rotina se boa resposta); sem profilaxia de rotina após a 1ª ITU; bacteriúria assintomática não se trata (diretriz; conferida em 25/10/2026).", f: "F", url: "https://www.nice.org.uk/guidance/ng224"},
  ada_crises2024: {s: "Consenso ADA/EASD 2024 – crises hiperglicêmicas", t: "Umpierrez GE et al. Hyperglycemic crises in adults with diabetes: a consensus report. Diabetes Care 2024 (ADA, EASD, JBDS, AACE, DTS), conferido pela revisão de Rodriguez Alvarez P et al., Cleve Clin J Med 2025;92(3):152-8, doi 10.3949/ccjm.92a.24089: CAD = glicemia ≥ 200 mg/dL ou DM conhecido + β-hidroxibutirato ≥ 3,0 mmol/L (ou cetonúria ≥ 2+) + pH < 7,3 e/ou bicarbonato < 18; EHH = glicemia ≥ 600 + osmolalidade efetiva > 300 (ou total > 320) + β-OHB < 3,0 + pH ≥ 7,3 e bicarbonato ≥ 15; DM conhecido como critério permite incluir a CAD euglicêmica (iSGLT2); gravidade leve/moderada/grave por β-OHB, pH, bicarbonato e consciência (consenso; conferido em revisão secundária).", f: "F", url: "https://www.ccjm.org/content/92/3/152"},
  sbd_shh2025: {s: "SBD 2025 – síndrome hiperglicêmica hiperosmolar", t: "Santomauro Jr AC et al. Manejo da síndrome hiperglicêmica hiperosmolar não cetótica (SHHNC). Diretriz da SBD 2025, doi 10.29327/5660187.2025-5 (cópia na base clínica). Quadro 1: glicemia > 600 mg/dL, osmolaridade plasmática efetiva > 320 mOsmol/L, cetonemia < 3 mmol/L, pH > 7,30 e bicarbonato > 15 mmol/L; resolução: osmolalidade < 315 e glicemia < 250–300 (diretriz de sociedade).", f: "F", url: ""},
  sbd_trat2025: {s: "SBD 2025 – manejo da terapia antidiabética no DM2", t: "Sociedade Brasileira de Diabetes. Manejo da terapia antidiabética no DM2, Diretriz 2025 (cópia na base clínica): R16 – DM2 sem tratamento com sinais de insulinopenia (poliúria, polidipsia, perda de peso): terapia baseada em insulina, independentemente do risco (classe I, nível C); R17 – após a fase sintomática, terapia dupla ou tripla pode substituir a insulina (IIb, C); insulina preferencial em sintomáticos, situações agudas e internação (diretriz de sociedade).", f: "F", url: ""},
  tsrs_uro2023: {s: "TelessaúdeRS – Urologia adulto (2023)", t: "TelessaúdeRS-UFRGS. Protocolos de encaminhamento – Urologia adulto, versão digital 2023 (cópia na base clínica): STUI com retenção urinária aguda → urgência/emergência; retenção crônica = resíduo pós-miccional > 300 mL em 2 ocasiões e por ≥ 6 meses; tratamento otimizado para HPB = alfabloqueador ≥ 30 dias (doxazosina 2–8 mg/dia) + finasterida 5 mg/dia ≥ 6 meses se próstata > 40 g ou PSA > 1,4 ng/mL; encaminhar à urologia retenção aguda na vigência de tratamento otimizado (após a emergência), retenção crônica, ITU recorrente, litíase vesical, doença neurológica ou cirurgia/radioterapia pélvica; suspeita de torção testicular → urgência (referência técnica de outro estado; em Betim a teleconsultoria é a do Telessaúde UFMG).", f: "F", url: "https://www.ufrgs.br/telessauders/regulacao/protocolos-de-encaminhamento/"},
  twist2013: {s: "Barbosa 2013 – escore TWIST (J Urol)", t: "Barbosa JA, Tiseo BC, Barayan GA, et al. Development and initial validation of a scoring system to diagnose testicular torsion in children. J Urol 2013;189(5):1859-64, doi 10.1016/j.juro.2012.10.056: edema testicular (2), testículo endurecido (2), reflexo cremastérico ausente (1), náuseas/vômitos (1), testículo alto (1); cortes de baixo e alto risco em 2 e 5 pontos, com VPN e VPP de 100% na coorte prospectiva de 338 pacientes (51 torções); validação prospectiva ainda necessária (estudo de derivação; conferido no PubMed).", f: "F", url: "https://doi.org/10.1016/j.juro.2012.10.056"},
  cdc_epid2021: {s: "CDC 2021 – epididimite", t: "CDC. STI Treatment Guidelines 2021 – Epididymitis: risco de clamídia/gonococo → ceftriaxona 500 mg IM dose única + doxiciclina 100 mg VO 12/12 h por 10 dias; prática anal insertiva (IST + enterobactérias) → ceftriaxona 500 mg IM + levofloxacino 500 mg/dia por 10 dias; só enterobactérias → levofloxacino 500 mg/dia por 10 dias; ceftriaxona 1 g se ≥ 150 kg (diretriz; conferida em 25/10/2026).", f: "F", url: "https://www.cdc.gov/stiapp/epididymitis.html"},
  bgs_4at: {s: "NICE CG103 (atualização 2023) – 4AT", t: "NICE CG103 – Delirium: prevention, diagnosis and management in hospital and long-term care; atualização de jan/2023 com novas recomendações de avaliação e diagnóstico (o 4AT passou a ser a ferramenta recomendada fora da UTI, conforme material da British Geriatrics Society); emenda de abr/2022 alertando para riscos do haloperidol no delirium em idosos (diretriz; conferida pela página de atualização da NICE e pelo pôster da BGS em 25/10/2026; itens do 4AT citados de memória).", f: "F", url: "https://www.nice.org.uk/guidance/cg103"},
  alvarado1986: {s: "Alvarado 1986 – escore de apendicite", t: "Alvarado A. A practical score for the early diagnosis of acute appendicitis. Ann Emerg Med 1986;15(5):557-64 (estudo de derivação; itens e cortes citados de memória).", f: "C", url: ""},
  cssrs: {s: "C-SSRS – triagem (Columbia)", t: "Posner K et al. Columbia–Suicide Severity Rating Scale (C-SSRS), versão de triagem; Am J Psychiatry 2011;168(12):1266-77 (instrumento; itens citados de memória, não conferidos nesta sessão).", f: "C", url: ""},
  mckee1971: {s: "Critérios de Framingham (McKee 1971)", t: "McKee PA, Castelli WP, McNamara PM, Kannel WB. The natural history of congestive heart failure: the Framingham study. N Engl J Med 1971;285:1441-6 (critérios maiores e menores; citados de memória).", f: "C", url: ""}
});
// O CAB 28 vol. II foi aberto nesta revisão (base clínica): Quadros 30–33 da dor abdominal.
FONTES.cab28 = {s: "CAB 28 vol. II – Queixas comuns (MS)", t: "Ministério da Saúde. Cadernos de Atenção Básica nº 28, vol. II – Acolhimento à demanda espontânea: queixas mais comuns na Atenção Básica (2013; cópia na base clínica, conferida em 25/10/2026). Dor abdominal: Quadro 30 – classificação do abdome agudo (inflamatório, perfurante, obstrutivo, hemorrágico, vascular); Quadro 31 – causas abdominais e extra-abdominais; Quadro 32 – fatores de alto risco (> 60 anos, imunossupressão, álcool, doença cardiovascular, cirurgia prévia, gravidez recente; dor súbita e intensa, dor seguida de vômito, dor constante < 2 dias; choque, defesa, rigidez, Cullen/Grey-Turner, Blumberg, Rovsing, psoas, obturador, Murphy); Quadro 33 – causas por localização; na suspeita de abdome cirúrgico, não oferecer água ou comida e encaminhar ao pronto-socorro com cirurgia (manual MS).", f: "F", url: ""};
FONTES.asam_abst = {s: "ASAM 2020 – abstinência alcoólica", t: "ASAM Clinical Practice Guideline on Alcohol Withdrawal Management, 2020: CIWA-Ar leve < 10, moderada 10–18, grave ≥ 19; convulsão ou delirium = complicada; fatores de risco de abstinência complicada (delirium ou convulsão prévios, muitas abstinências, comorbidade grave/TCE, > 65 anos, uso pesado prolongado, convulsão no episódio atual, hiperatividade autonômica marcada, dependência de GABAérgicos); benzodiazepínico de 1ª linha (carbamazepina ou gabapentina como alternativas); ambulatorial com contato diário por até 5 dias; dose por sintomas só se o paciente ou cuidador monitorar com confiança, senão dose fixa com resgate; tiamina 100 mg VO/dia por 3–5 dias no ambulatorial (IM/IV se desnutrição ou complicação) (diretriz; conferida em 25/10/2026).", f: "F", url: "https://www.asam.org/quality-care/clinical-guidelines/alcohol-withdrawal-management-guideline"};
FONTES.nice_febre = {s: "NICE NG143 – febre em < 5 anos", t: "NICE NG143. Fever in under 5s: assessment and initial management (2019; atualizada em 26/11/2021, ajustes menores em 2024): semáforo (Tabela 2); < 3 meses com ≥ 38 °C = vermelho; 3–6 meses com ≥ 39 °C = pelo menos âmbar; > 6 meses: temperatura isolada não define gravidade; temperatura axilar com termômetro eletrônico em < 4 semanas; profissional não pediatra: vermelho → pediatra com urgência; âmbar sem diagnóstico → rede de segurança ou encaminhar; verde → casa com orientação; não dar antibiótico oral para febre sem foco; antitérmico só se a criança estiver desconfortável, não para prevenir convulsão, sem dar os dois juntos; febre ≥ 5 dias: avaliar Kawasaki (diretriz; conferida em 25/10/2026).", f: "F", url: "https://www.nice.org.uk/guidance/ng143"};

(() => {
  const get = id => CONDICOES.find(x => x.id === id);
  const G = (id, guia, o = {}) => {
    const c = get(id); if (!c) return;
    c.guia = guia;
    if (c.evid && o.fontes) c.evid.fontes = [...new Set([...(c.evid.fontes || []), ...o.fontes])];
    (c.mudancas = c.mudancas || []).push("v51 (25/10/2026): Guia Clínico novo – " + (o.mud || "reconhecer, critérios, diferenciais, fluxograma e calculadoras") + ".");
    if (o.nv) c.nv = [...(c.nv || []), ...o.nv];
  };

  // ── 1. TVP
  G("tvp", {
    urg: "Dispneia súbita, dor pleurítica, taquicardia, hemoptise, síncope ou SpO₂ baixa: suspeita de **TEP → SAMU**. Perna fria, cianótica ou com edema maciço (phlegmasia): urgência vascular.",
    resumo: "A pergunta da UBS é **TVP provável ou improvável** (Wells em 2 níveis). Improvável + **D-dímero negativo** afasta. Provável → **doppler proximal com resultado em até 4 h**; sem isso, D-dímero + anticoagulação interina e doppler em até 24 h (NICE NG158) [F]. Pense sempre em **TEP**.",
    calcs: ["sc:wells", "sc:wellstep", "sc:perc", "sc:hasbled"],
    secoes: [
      {t: "Reconhecer", b: [
        "Edema unilateral da panturrilha ou da perna inteira, dor ou empastamento, calor e eritema discretos; parte das TVP tem poucos sintomas [C]. Meça as **duas panturrilhas 10 cm abaixo da tuberosidade tibial**: diferença ≥ 3 cm pontua no Wells [F].",
        {ul: ["**Fatores transitórios maiores:** cirurgia, internação, imobilização gessada, trauma de membro inferior [C].", "**Transitórios menores:** estrogênio (contraceptivo, TH), gestação e puerpério, viagem longa, imobilidade, obesidade [C].", "**Persistentes:** câncer ativo, TEV prévio, trombofilia, doença inflamatória intestinal, síndrome antifosfolípide [C]."]},
        {det: {t: "Fisiopatologia", b: ["Tríade de Virchow: **estase**, **lesão endotelial** e **hipercoagulabilidade** [C]. O trombo costuma começar nas veias da panturrilha e pode crescer para poplítea e femoral (TVP proximal), que é a que mais emboliza para o pulmão [C]. A síndrome pós-trombótica (dor, edema, hiperpigmentação, úlcera) é complicação tardia frequente [C]."]}}
      ]},
      {t: "Diferenciais", b: [
        {tab: {h: ["Hipótese", "O que separa", "Conduta"], r: [
          ["Celulite/erisipela", "Eritema e calor bem delimitados, febre, porta de entrada; **pode coexistir** com TVP", "Antibiótico; Wells se houver dúvida [C]"],
          ["Cisto de Baker roto", "Dor súbita na fossa poplítea, às vezes equimose no tornozelo; artrose do joelho", "USG (o doppler costuma mostrar) [C]"],
          ["Estiramento/ruptura muscular", "Esforço ou trauma, dor focal, equimose", "Analgesia; doppler se Wells ≥ 2 [C]"],
          ["Tromboflebite superficial", "Cordão palpável e doloroso em veia superficial", "Doppler se perto da junção safeno-femoral ou extensa (pode haver TVP associada) [C]"],
          ["Insuficiência venosa crônica", "Crônica, geralmente bilateral, varizes, dermatite ocre", "Ver item de IVC [C]"],
          ["Linfedema", "Crônico, pouco depressível, sinal de Stemmer", "Sem urgência [C]"],
          ["Edema sistêmico ou por fármaco", "Bilateral: IC, DRC, hepatopatia, hipoalbuminemia, anlodipino", "Tratar a causa [C]"]
        ]}},
        {alerta: "Não pode passar: **TEP** (dispneia, taquicardia, dor pleurítica), **phlegmasia** (membro frio e cianótico) e **fasciíte necrotizante** (dor desproporcional, bolhas, crepitação)."}
      ]},
      {t: "Decidir", b: [
        {calc: "sc:wells"},
        {fluxo: [
          {t: "Edema ou dor unilateral de perna com suspeita de TVP"},
          {t: "Sinais de TEP?", ramos: [
            {r: "Sim", n: [{t: "SAMU (Wells TEP abaixo)", k: "stop"}]},
            {r: "Não", n: [{t: "Wells TVP em 2 níveis"}]}
          ]},
          {t: "Pontuação", ramos: [
            {r: "≤ 1 – improvável", n: [{t: "D-dímero em até 4 h (corte ajustado à idade se > 50 anos)"}, {t: "Resultado", ramos: [
              {r: "Negativo", n: [{t: "TVP afastada: outro diagnóstico; orientar retorno", k: "ok"}]},
              {r: "Positivo", n: [{t: "Doppler proximal (≤ 4 h, ou anticoagulação interina + doppler em 24 h)", k: "warn"}]}
            ]}]},
            {r: "≥ 2 – provável", n: [{t: "Doppler proximal com resultado em até 4 h", k: "warn"}, {t: "Sem doppler em 4 h: D-dímero + anticoagulação interina e doppler em 24 h", k: "warn"}, {t: "Doppler negativo com D-dímero positivo: repetir em 6–8 dias", k: "warn"}]}
          ]},
          {t: "Doppler positivo: anticoagular por ≥ 3 meses e classificar como provocada ou não", k: "ok"}
        ], nota: "NICE NG158 [F]. Em Betim, D-dímero e doppler no mesmo dia dependem da urgência [NV]: sem acesso, TVP provável = encaminhar à UPA com relatório e o Wells [I]."}
      ]},
      {t: "Pensar em TEP", b: [
        "Use o **PERC** só quando a suspeita clínica de TEP já é baixa: todos os 8 critérios negativos dispensam o D-dímero [C]. Com Wells TEP > 4, o caminho é a urgência para imagem [F].",
        {calc: "sc:wellstep"}, {calc: "sc:perc"}
      ]},
      {t: "Tratar", b: [
        {tab: {h: ["Situação", "Opção", "Observação"], r: [
          ["TVP proximal ou TEP, sem câncer, ClCr > 30", "Apixabana ou rivaroxabana (1ª linha) [F]", "Doses e ajuste renal pela bula [NV]; não estão na RENAME nem na REMUME (compra) [F]"],
          ["SUS em Betim", "Heparina + varfarina, sobrepostas ≥ 5 dias e até INR ≥ 2,0 em 2 leituras seguidas [F]", "Varfarina 5 mg e heparina 5.000 UI/mL na REMUME [F]; início em geral na urgência; INR na UBS [C]"],
          ["Câncer ativo", "DOAC ou HBPM [F]", "Com o oncologista [C]"],
          ["ClCr < 15 mL/min", "HBPM ou HNF, com ou sem AVK [F]", "Nefrologia [C]"],
          ["Gestação", "HBPM; varfarina e DOAC contraindicados [C]", "Linha de cuidado obstétrica [C]"]
        ]}, nota: "Duração: mínimo de 3 meses. Provocada com fator resolvido: parar em 3 meses; não provocada: considerar estender, pesando sangramento (HAS-BLED) [F]. Se a pessoa recusar anticoagulação, AAS 75–150 mg pode ser considerado [F] (menos eficaz [C])."},
        {trio: {ideal: "DOAC (apixabana ou rivaroxabana) é 1ª linha: sem INR e com menos sangramento maior (NICE NG158; CHEST 2021).", sus: "REMUME Betim: heparina não fracionada e varfarina 5 mg; DOAC e enoxaparina fora da lista municipal.", ponte: "Varfarina com controle de INR na UBS; DOAC por compra quando possível; gestante pela linha obstétrica."}},
        {calc: "sc:hasbled"}
      ]},
      {t: "Seguimento", b: [
        {ul: ["Varfarina: INR semanal até 2 valores estáveis na faixa 2–3, depois espaçar [C].", "Procurar câncer oculto só por história, exame físico e exames básicos; rastreio extenso de rotina não é indicado [C].", "Reavaliar em 3 meses: parar ou estender a anticoagulação [F].", "Orientar sinais de TEP e de sangramento (lista de alarme)."]},
        {ref: ["nice_ng158", "chest_tev", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["nice_ng158"], nv: ["Doses de apixabana/rivaroxabana e ajuste renal: conferir bula.", "D-dímero e doppler no mesmo dia em Betim (UPA/regulação): confirmar."]});

  // ── 2. IC descompensada
  G("ic-descompensada", {
    urg: "Dispneia em repouso, SpO₂ < 90%, FR > 25, PAS < 90, extremidades frias, sonolência, dor torácica, arritmia nova, síncope, piora renal ou potássio alterado: **urgência**.",
    resumo: "Piora da IC é diagnóstico clínico em quem já tem IC. Defina o **perfil hemodinâmico em 2 minutos** (tem congestão? a perfusão está boa?) e procure o **gatilho** – a falta de adesão responde por cerca de 25% das descompensações no Brasil [F]. Só o perfil **quente e úmido, leve e sem sinais de gravidade** fica na UBS, com diurético ajustado e retorno em poucos dias.",
    calcs: ["sc:framingham", "ckd"],
    secoes: [
      {t: "Reconhecer", b: [
        "A SBC 2026 define a IC descompensada como surgimento rápido (IC nova) ou piora abrupta dos sinais e sintomas da IC crônica, a ponto de exigir atendimento urgente [F]. Apresentações: IC crônica descompensada (cerca de 60%), IC nova/edema agudo de pulmão (30%), disfunção isolada de VD e choque cardiogênico (3–5% cada) [F].",
        {tab: {h: ["Congestão (úmido)", "Baixa perfusão (frio)"], r: [["Ortopneia, estertores, turgência jugular, refluxo hepatojugular, ascite, edema, ganho de peso", "Pressão de pulso reduzida, sonolência/obnubilação, extremidades frias, baixa diurese"]]}, nota: "SBC 2026, Figura 7.3 (Stevenson) [F]."},
        "FEVE pela SBC 2026: **< 50% = reduzida**, ≥ 50% = preservada (a faixa 41–49% deixou de existir) [F].",
        {det: {t: "Fisiopatologia", b: ["Na descompensação da IC crônica há acentuação da ativação neuro-hormonal (sistema renina-angiotensina-aldosterona e simpático): vasoconstrição com aumento da pós-carga, piora da contratilidade e das insuficiências valvares funcionais, aumento das pressões de enchimento e **retenção de sal e água** – a congestão é o eixo central [F]."]}}
      ]},
      {t: "Perfil e gatilho", b: [
        {tab: {h: ["", "Sem congestão (seco)", "Com congestão (úmido)"], r: [
          ["**Perfusão boa (quente)**", "**A** – compensado: otimizar a terapia de base; a dispneia pode ter outra causa [F]", "**B** – o mais comum: diurético (± vasodilatador) [F]; UBS só se leve e sem sinais de gravidade [I]"],
          ["**Perfusão baixa (frio)**", "**L** – incomum; pensar em hipovolemia/excesso de diurético → urgência [C]", "**C** – urgência/UTI [C]"]
        ]}, nota: "SBC 2026, Figuras 7.3 e 7.4 [F]."},
        {ul: ["**Não adesão** (remédio, sal, líquidos) – cerca de 25% dos casos no Brasil [F].", "**Infecção**, **arritmia** (sobretudo FA), **síndrome coronariana aguda**, **hipertensão** descontrolada, miocardite [F].", "Fármacos que retêm sódio ou pioram a função: **AINE**, glitazona, verapamil/diltiazem na FE reduzida, corticoide [C].", "Piora renal, anemia, disfunção tireoidiana, álcool [C]."]}
      ]},
      {t: "Diferenciais", b: [
        {tab: {h: ["Hipótese", "O que separa"], r: [
          ["DPOC/asma exacerbada", "Sibilos, história de tabagismo, sem turgência jugular nem B3 [C]"],
          ["Pneumonia", "Febre, crepitação localizada, tosse produtiva – e pode **descompensar** a IC [C]"],
          ["TEP", "Dispneia súbita, taquicardia, fator de risco de TEV – Wells TEP [C]"],
          ["Síndrome coronariana", "Dor ou equivalente anginoso, ECG – é também gatilho [C]"],
          ["Edema não cardíaco", "Síndrome nefrótica, cirrose, hipoalbuminemia, anlodipino, insuficiência venosa [C]"],
          ["Anemia, hipertireoidismo, obesidade/descondicionamento", "Hemograma, TSH, exame físico [C]"]
        ]}},
        "IC **nova** (sem diagnóstico prévio): use os critérios de Framingham e peça peptídeo natriurético e eco. No contexto agudo, NT-proBNP < 300 pg/mL ou BNP < 100 pg/mL afastam IC descompensada [F].",
        {calc: "sc:framingham"}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "IC conhecida com piora de dispneia, edema ou peso"},
          {t: "Algum sinal de gravidade (ver Agir agora)?", ramos: [
            {r: "Sim", n: [{t: "Urgência/SAMU", k: "stop"}]},
            {r: "Não", n: [{t: "Classificar o perfil (A, B, L, C)"}]}
          ]},
          {t: "Perfil", ramos: [
            {r: "A", n: [{t: "Otimizar a terapia; investigar outra causa da dispneia", k: "ok"}]},
            {r: "B leve", n: [{t: "Aumentar a furosemida por 3–5 dias + tratar o gatilho + creatinina e K; retorno em 3–7 dias", k: "warn"}]},
            {r: "L ou C", n: [{t: "Urgência", k: "stop"}]}
          ]},
          {t: "Sem melhora em 48–72 h, piora renal, K alterado ou nova descompensação → urgência ou cardiologia", k: "warn"}
        ], nota: "Perfis pela SBC 2026 [F]; ajuste ambulatorial do diurético é prática consolidada [C]. Acesso a BNP/NT-proBNP em Betim: [NV]."}
      ]},
      {t: "Tratar", b: [
        {tab: {h: ["Medicamento", "Na piora leve", "Cuidado"], r: [
          ["Furosemida", "Dobrar a dose diária por 3–5 dias até o peso seco e depois voltar [C]", "Creatinina e K em 3–7 dias; hipotensão postural [C]"],
          ["IECA/BRA/sacubitril-valsartana, betabloqueador", "Manter; não iniciar nem aumentar o betabloqueador durante congestão importante [C]", "Reduzir só se hipotensão sintomática ou baixo débito → nesse caso, urgência [C]"],
          ["Espironolactona", "Manter se K < 5,0 e função renal estável [C]", "Suspender se K > 5,5 ou piora renal importante [C]"],
          ["iSGLT2 (dapagliflozina)", "Manter [C]", "Pausar em vômitos, desidratação ou jejum [C]"],
          ["AINE", "Suspender [C]", "—"]
        ]}},
        {perola: {t: "I NEED HELP: quando o paciente precisa do especialista", x: "Intolerância à terapia otimizada; NYHA III/IV persistente; FE < 20%; edema refratário a doses crescentes de diurético; choques do desfibrilador; hospitalizações ou idas à emergência repetidas nos últimos 12 meses; peptídeo natriurético persistentemente elevado; lesão de órgão-alvo (renal, hepática).", d: "encaminhar à cardiologia/IC avançada.", l: "F"}},
        {ir: [["cr-ic", "IC com FE reduzida (seguimento)"], ["cr-icfep", "IC com FE preservada"]]},
        {ref: ["sbc_ic2026", "esc_ic", "pcdt_ic", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["sbc_ic2026", "mckee1971"], nv: ["BNP/NT-proBNP e prazo do eco em Betim: confirmar."]});

  // ── 3. Dor abdominal aguda
  G("dor-abdominal", {
    urg: "Peritonite (defesa, descompressão dolorosa), instabilidade, dor desproporcional ao exame (isquemia), distensão com parada de gases e fezes, idoso, gestante ou atraso menstrual com dor/sangramento (ectópica), dor epigástrica com fator de risco cardiovascular (SCA): **urgência**, em jejum.",
    resumo: "Na UBS o objetivo é **reconhecer o abdome agudo cirúrgico e as causas graves extra-abdominais**, e acompanhar o restante. **Teste de gravidez** em toda mulher em idade fértil; **analgesia não mascara o diagnóstico**; alta só com **reavaliação garantida** (CAB 28) [F].",
    calcs: ["sc:alvarado"],
    secoes: [
      {t: "Reconhecer", b: [
        {tab: {h: ["Tipo de abdome agudo", "Exemplos"], r: [
          ["Inflamatório", "Apendicite, colecistite, pancreatite, diverticulite, DIP, abscessos"],
          ["Perfurante", "Úlcera péptica, perfuração de divertículo, apêndice ou vesícula"],
          ["Obstrutivo", "Bridas, hérnia estrangulada, volvo, intussuscepção, áscaris, cálculo biliar"],
          ["Hemorrágico", "Gravidez ectópica, aneurisma de aorta roto, cisto ovariano hemorrágico, rotura de baço"],
          ["Vascular", "Isquemia mesentérica, torção de cisto ovariano, infarto esplênico"]
        ]}, nota: "CAB 28 vol. II, Quadro 30 [F]."},
        "Crianças, idosos, gestantes, diabéticos, renais crônicos e imunossuprimidos têm apresentação atípica: menos dor e menos sinais peritoneais para a mesma gravidade [F].",
        {det: {t: "Fisiopatologia da dor", b: ["**Visceral**: distensão ou isquemia de víscera oca, mal localizada, na linha média, com náuseas e sudorese. **Parietal (somática)**: irritação do peritônio, bem localizada, piora com movimento e tosse. **Referida**: no dermátomo do mesmo segmento medular (ombro na irritação diafragmática; dorso na pancreatite). Na apendicite, a dor começa periumbilical (visceral) e migra para a fossa ilíaca direita (parietal) [C]."]}}
      ]},
      {t: "Sinais de alto risco", b: [
        {ul: ["**História:** > 60 anos; imunossupressão; álcool; doença cardiovascular (FA, coronariopatia, vasculopatia); câncer, diverticulite, pancreatite ou DRC; cirurgia ou manipulação abdominal recente; gravidez recente [F].", "**Dor:** início súbito e intenso; dor seguida de vômito; dor constante com menos de 2 dias [F].", "**Exame:** choque; abdome tenso ou rígido; defesa; posição antálgica; Cullen ou Grey-Turner; distensão; Blumberg, Rovsing, psoas, obturador, Murphy; toque retal ou vaginal doloroso [F]."]},
        {nota: "CAB 28 vol. II, Quadro 32 [F]."}
      ]},
      {t: "Onde dói", b: [
        {tab: {h: ["Local", "Pensar em"], r: [
          ["Quadrante superior direito", "Colecistite, colangite, hepatite, pneumonia de base, abscesso subfrênico"],
          ["Epigástrio", "Úlcera, gastrite, DRGE, pancreatite, **IAM**, pericardite, aneurisma de aorta"],
          ["Quadrante superior esquerdo", "Gastrite/úlcera, pancreatite, infarto ou abscesso esplênico"],
          ["Periumbilical", "Início da apendicite, gastroenterite, obstrução, aneurisma de aorta"],
          ["Fossa ilíaca direita", "Apendicite, ectópica, DIP/salpingite, cisto/torção ovariana, cálculo ureteral, hérnia, adenite mesentérica"],
          ["Fossa ilíaca esquerda", "Diverticulite, ectópica, salpingite, cálculo ureteral, hérnia, DII"],
          ["Difusa", "Gastroenterite, isquemia mesentérica, obstrução, peritonite, metabólica (CAD), malária"]
        ]}, nota: "CAB 28 vol. II, Quadro 33 [F]."},
        "Causas **extra-abdominais** que não podem passar: IAM, pneumonia, TEP, cetoacidose diabética, herpes-zóster (antes das vesículas), crise falciforme, insuficiência adrenal, porfiria [F]."
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Dor abdominal aguda"},
          {t: "Instável, peritonite, dor desproporcional ou distensão com parada de gases e fezes?", ramos: [
            {r: "Sim", n: [{t: "Urgência com suporte cirúrgico, em jejum (nada por via oral)", k: "stop"}]},
            {r: "Não", n: [{t: "Teste de gravidez se mulher em idade fértil"}]}
          ]},
          {t: "Teste positivo com dor ou sangramento → ectópica até prova em contrário → urgência", k: "stop"},
          {t: "Epigástrica em idoso, diabético ou com fator de risco cardiovascular → ECG", k: "warn"},
          {t: "Glicemia capilar e fita urinária; Alvarado se dor em fossa ilíaca direita"},
          {t: "Sem sinal de alto risco: analgesia, hipótese provável e reavaliação em 6–24 h com orientação escrita", k: "ok"}
        ], nota: "CAB 28 vol. II [F]; analgesia precoce não atrasa diagnóstico nem cirurgia (Cochrane 2011) [F]."},
        {calc: "sc:alvarado"}
      ]},
      {t: "Tratar", b: [
        {ul: ["Analgesia em dose adequada: dipirona; butilescopolamina na cólica; AINE se não houver suspeita de sangramento, úlcera ou lesão renal (doses na aba Prescrição) [NV].", "Náuseas: metoclopramida ou ondansetrona conforme disponibilidade [NV].", "Exames **dirigidos pela hipótese** (hemograma/PCR, EAS, USG de vias biliares ou pélvica), nunca um pacote fixo [C].", "Retorno combinado e sinais de alarme por escrito; a dor que **localiza, piora ou vem com febre e vômitos** muda a conduta [C]."]},
        {ref: ["cab28", "cochrane_dorabd", "alvarado1986", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["cab28", "alvarado1986"]});

  // ── 4. Hiperglicemia
  G("hiperglicemia", {
    urg: "Glicemia alta com **vômitos, dor abdominal, respiração rápida e profunda, hálito cetônico, desidratação ou sonolência**, ou glicemia ≥ 600 mg/dL: suspeita de **CAD/EHH → urgência** (acesso venoso e soro fisiológico enquanto aguarda) [C].",
    resumo: "Antes de intensificar o tratamento, **afaste a crise hiperglicêmica**. Hiperglicemia com **sintomas de insulinopenia** (poliúria, polidipsia, perda de peso) pede **insulina já** (SBD 2025, R16) [F]. Quem usa **iSGLT2** pode ter **CAD com glicemia quase normal** [F]. Procure sempre o gatilho.",
    calcs: ["glic"],
    secoes: [
      {t: "Reconhecer", b: [
        {ul: ["**Hiperglicemia sintomática:** poliúria, polidipsia, noctúria, visão turva, perda de peso, candidíase de repetição [C].", "**CAD:** horas a 1–2 dias; náuseas, vômitos, dor abdominal, respiração de Kussmaul, hálito cetônico; mais comum no DM1, mas ocorre no DM2 [C].", "**EHH:** dias a semanas; desidratação grave e rebaixamento, típico do idoso com DM2 e infecção [C]."]},
        {det: {t: "Fisiopatologia", b: ["Na **CAD**, a falta absoluta ou relativa de insulina com excesso de hormônios contrarreguladores (glucagon, cortisol, catecolaminas) libera ácidos graxos que o fígado transforma em corpos cetônicos → acidose metabólica com ânion gap aumentado. No **EHH**, a insulina residual basta para frear a cetogênese, mas não a glicosúria: diurese osmótica prolongada → desidratação e hiperosmolaridade [C]. O iSGLT2 baixa a glicemia por glicosúria e, com pouca insulina, permite cetose com glicemia < 250 mg/dL (CAD euglicêmica) [C]."]}}
      ]},
      {t: "Critérios", b: [
        {tab: {h: ["", "CAD (ADA/EASD 2024)", "EHH (ADA/EASD 2024)", "EHH (SBD 2025)"], r: [
          ["Glicemia", "≥ 200 mg/dL **ou DM conhecido**", "≥ 600 mg/dL", "> 600 mg/dL"],
          ["Cetonas", "β-OHB ≥ 3,0 mmol/L ou cetonúria ≥ 2+", "β-OHB < 3,0 ou cetonúria < 2+", "Cetonemia < 3 mmol/L"],
          ["Ácido-base", "pH < 7,3 e/ou bicarbonato < 18", "pH ≥ 7,3 e bicarbonato ≥ 15", "pH > 7,30 e bicarbonato > 15"],
          ["Osmolalidade", "—", "Efetiva > 300 (ou total > 320) mOsm/kg", "Efetiva > 320 mOsm/L"]
        ]}, nota: "ADA/EASD 2024 (pela revisão CCJM 2025) [F]; SBD 2025 [F]. Os cortes de osmolalidade divergem entre os documentos. Osmolalidade efetiva = 2 × Na + glicose/18 [C]."},
        {det: {t: "Diagnóstico de DM (caso novo)", b: [{tab: {h: ["Exame", "DM"], r: [["Glicemia de jejum", "≥ 126 mg/dL"], ["HbA1c", "≥ 6,5%"], ["TOTG 1 h", "≥ 209 mg/dL"], ["TOTG 2 h", "≥ 200 mg/dL"], ["Glicemia casual + sintomas", "≥ 200 mg/dL"]]}, nota: "SBD 2025: confirmar com 2 exames alterados (podem ser da mesma amostra), salvo glicemia casual com sintomas [F]."}]}}
      ]},
      {t: "Que diabetes é este?", b: [
        {tab: {h: ["Hipótese", "Pistas", "Conduta"], r: [
          ["DM2 descompensado", "Sobrepeso, história familiar, perda de adesão, infecção", "Intensificar; insulina se sintomático [F]"],
          ["DM1 ou LADA", "Magro, perda de peso rápida, cetose, < 35 anos, outra autoimunidade, falha precoce dos orais", "Insulina e encaminhar à endocrinologia [C]"],
          ["Induzida por corticoide", "Glicemia da tarde e da noite muito mais alta que a de jejum", "NPH pela manhã, proporcional à dose do corticoide [C]"],
          ["Pancreatogênica", "Pancreatite crônica, álcool, esteatorreia", "Insulina; enzimas pancreáticas [C]"],
          ["Por fármaco", "Tiazídico em dose alta, antipsicótico atípico, inibidor de protease, tacrolimo", "Rever o fármaco [C]"],
          ["Gestação", "β-hCG positivo", "Linha do pré-natal [C]"]
        ]}},
        "Infecção oculta como gatilho: pé, pele, ITU, dente, pneumonia, tuberculose [C]."
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Glicemia elevada"},
          {t: "Vômitos, dor abdominal, Kussmaul, desidratação, sonolência ou glicemia ≥ 600?", ramos: [
            {r: "Sim", n: [{t: "Suspeita de CAD/EHH → urgência", k: "stop"}]},
            {r: "Não", n: [{t: "Cetonúria na fita (se disponível)"}]}
          ]},
          {t: "Usa iSGLT2 e está nauseado, vomitando ou com mal-estar?", ramos: [
            {r: "Sim", n: [{t: "Pensar em CAD euglicêmica: suspender o iSGLT2; cetose → urgência", k: "stop"}]},
            {r: "Não", n: [{t: "Sintomas de insulinopenia?"}]}
          ]},
          {t: "Conduta", ramos: [
            {r: "Sintomático", n: [{t: "Insulina basal já (SBD 2025, R16) + metformina se tolerada; retorno em 1 semana", k: "warn"}]},
            {r: "Assintomático", n: [{t: "Intensificar a terapia oral pelo perfil (DCV, IC ou DRC → iSGLT2/aGLP-1)", k: "ok"}]}
          ]},
          {t: "Tratar o gatilho: infecção, adesão, corticoide, dieta"}
        ], nota: "SBD 2025 [F]; ADA/EASD 2024 [F]."}
      ]},
      {t: "Tratar", b: [
        {ul: ["Insulina NPH ao deitar: início com 10 UI ou 0,1–0,2 UI/kg e ajuste de 2 UI a cada 3 dias até jejum de 80–130 mg/dL (aba Prescrição) [NV].", "Glargina em Betim só pela fase vigente da NT DAPS 14/2026 [F].", "**Dias de doença:** manter a insulina basal, hidratar, medir a glicemia mais vezes; pausar metformina e iSGLT2 se houver vômitos ou desidratação [C].", "Após a fase sintomática, a insulina pode ser substituída por terapia dupla ou tripla (SBD 2025, R17) [F]."]},
        {ir: [["cr-dm2", "DM2 (seguimento)"], ["cr-dm2-insulina", "Insulinização no DM2"], ["cr-glargina", "Troca da NPH pela glargina"], ["hipoglicemia", "Hipoglicemia"]]},
        {ref: ["ada_crises2024", "sbd_shh2025", "sbd_trat2025", "sbd_diag2025", "betim_nt14_2026", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["ada_crises2024", "sbd_shh2025", "sbd_trat2025", "sbd_diag2025"]});

  // ── 5. Retenção urinária aguda
  G("retencao-urinaria", {
    urg: "Retenção com **déficit neurológico, anestesia em sela ou lombalgia intensa** (cauda equina/compressão medular): urgência imediata. Febre, sepse ou hematúria com coágulos: urgência.",
    resumo: "Retenção aguda é dolorosa e precisa de **alívio vesical no mesmo dia**. Confirme o globo vesical, procure **causa reversível** (anticolinérgico, descongestionante, opioide, fecaloma, ITU) e **sinais neurológicos**. O TelessaúdeRS indica **urgência** para todo episódio de retenção aguda com sintomas do trato urinário inferior [F].",
    secoes: [
      {t: "Reconhecer", b: [
        {tab: {h: ["", "Aguda", "Crônica"], r: [
          ["Dor", "Intensa, suprapúbica", "Pouca ou nenhuma"],
          ["Achados", "Globo vesical palpável, incapacidade de urinar", "Jato fraco, gotejamento, incontinência por transbordamento, noctúria"],
          ["Definição", "Clínica", "Resíduo pós-miccional > 300 mL em 2 ocasiões, por ≥ 6 meses [F]"],
          ["Risco", "Dor, ITU", "Hidronefrose e DRC [F]"]
        ]}},
        {det: {t: "Fisiopatologia", b: ["**Obstrutiva** (HPB, estenose de uretra, coágulo, fecaloma, prolapso, massa pélvica), **neurogênica** (lesão medular, cauda equina, neuropatia diabética, esclerose múltipla, pós-anestesia), **miogênica** (hiperdistensão do detrusor após retenção prolongada) e **farmacológica** – anticolinérgicos, anti-histamínicos, antidepressivos tricíclicos, opioides e descongestionantes alfa-agonistas aumentam o tônus do colo vesical ou reduzem a contração do detrusor [C]."]}}
      ]},
      {t: "Causas", b: [
        {tab: {h: ["Quem", "Causas mais prováveis"], r: [
          ["Homem > 50 anos", "HPB, muitas vezes com gatilho: descongestionante, antigripal, anti-histamínico, álcool, frio, imobilização, cirurgia [C]"],
          ["Mulher", "Prolapso, pós-parto, massa pélvica, vulvovaginite ou herpes genital grave [C]"],
          ["Qualquer pessoa", "Fecaloma, fármacos, ITU/prostatite, coágulo (hematúria), estenose, pós-operatório, causa neurológica [C]"]
        ]}},
        {alerta: "Bexiga vazia sem urina (sem globo) é **anúria** – lesão renal aguda ou obstrução alta, outra emergência [C]."}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Não consegue urinar + dor suprapúbica ou globo vesical"},
          {t: "Déficit neurológico, anestesia em sela ou lombalgia intensa?", ramos: [
            {r: "Sim", n: [{t: "Urgência imediata", k: "stop"}]},
            {r: "Não", n: [{t: "Febre, sepse ou hematúria com coágulos?"}]}
          ]},
          {t: "Infecção grave ou coágulo → urgência", k: "stop"},
          {t: "A UBS tem sonda e técnica asséptica?", ramos: [
            {r: "Sim", n: [{t: "Cateterismo de alívio: drenar e registrar o volume; sonda de demora se a causa não se resolve; encaminhar", k: "warn"}]},
            {r: "Não", n: [{t: "Urgência para cateterismo", k: "stop"}]}
          ]},
          {t: "Depois: suspender o fármaco causal, tratar fecaloma ou ITU; HPB → alfabloqueador e tentativa de retirar a sonda em 2–3 dias", k: "ok"}
        ], nota: "TelessaúdeRS 2023: retenção aguda com STUI → urgência/emergência [F]; alfabloqueador antes da retirada da sonda aumenta a chance de urinar sozinho [C]. Sondas e material na UBS em Betim: [NV]."}
      ]},
      {t: "Tratar e encaminhar", b: [
        {ul: ["Doxazosina 2 mg à noite (dose usual 2–8 mg/dia) [F]; começar com meio comprimido em idoso pelo risco de hipotensão postural [C].", "Finasterida 5 mg/dia por ≥ 6 meses se próstata > 40 g ou PSA > 1,4 ng/mL [F].", "Creatinina e EAS/urocultura após o alívio [C].", "**Urologia:** retenção aguda apesar de tratamento otimizado para HPB (após a emergência), retenção crônica, ITU recorrente, litíase vesical, doença neurológica, cirurgia ou radioterapia pélvica, sintomas refratários [F].", "Retenção crônica com TFG < 60 mL/min/1,73 m², hidronefrose ou sepse → urgência [F]."]},
        {ref: ["tsrs_uro2023", "aua_hpb", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["tsrs_uro2023"], nv: ["Sondas vesicais e material de cateterismo nas UBS de Betim: confirmar."]});

  // ── 6. Escroto agudo
  G("escroto-agudo", {
    urg: "Dor testicular **súbita e intensa**, sobretudo em < 25 anos, com náuseas/vômitos, testículo alto ou horizontal e reflexo cremastérico ausente: **torção até prova em contrário → urgência urológica imediata**, sem esperar USG. A viabilidade cai após 6 h.",
    resumo: "O exame clínico decide. **TWIST ≥ 5** = cirurgia sem USG; **3–4** = doppler de urgência; **0–2** = torção improvável (pensar em epididimite ou torção de apêndice) [F]. Epididimite com risco de IST: ceftriaxona + doxiciclina por 10 dias (CDC 2021) [F].",
    calcs: ["sc:twist"],
    secoes: [
      {t: "Reconhecer", b: [
        {tab: {h: ["", "Torção testicular", "Torção de apêndice", "Epididimite"], r: [
          ["Idade", "Neonatal e puberdade; até ~25 anos", "7–12 anos", "Adolescente com vida sexual e adulto"],
          ["Início", "Súbito, muitas vezes noturno ou após esforço", "Subagudo", "Gradual, em dias"],
          ["Sintomas", "Dor intensa, náuseas e vômitos", "Dor no polo superior", "Febre, disúria, corrimento uretral"],
          ["Exame", "Testículo alto e horizontal, cremastérico ausente", "Nódulo doloroso no polo superior ('ponto azul')", "Epidídimo posterior doloroso, testículo em posição normal"]
        ]}, nota: "Conhecimento consolidado [C]. O sinal de Prehn é pouco confiável para separar torção de epididimite [C]."},
        {det: {t: "Fisiopatologia", b: ["Na deformidade em 'badalo de sino', o testículo fica solto na túnica vaginal e pode girar sobre o cordão: primeiro há obstrução venosa e edema, depois obstrução arterial e isquemia. Quanto mais voltas e mais tempo, menor a chance de salvar o testículo [C]."]}}
      ]},
      {t: "Diferenciais", b: [
        {tab: {h: ["Hipótese", "O que separa", "Conduta"], r: [
          ["Orquite por caxumba", "Parotidite dias antes; pós-púbere", "Sintomáticos [C]; caxumba não consta da lista nacional (Portaria 6.734/2025) – surtos seguem a vigilância local [NV]"],
          ["Hérnia inguinal encarcerada", "Massa que não se separa do anel inguinal; vômitos, distensão", "Urgência cirúrgica [C]"],
          ["Trauma/hematoma", "História de trauma", "USG; urgência se ruptura [C]"],
          ["Tumor testicular", "Massa endurecida, em geral indolor (dor se hemorragia)", "USG e urologia com prioridade [C]"],
          ["Púrpura de Henoch-Schönlein", "Criança com púrpura palpável em pernas e nádegas, artralgia, dor abdominal", "Avaliação pediátrica [C]"],
          ["Gangrena de Fournier", "Diabético ou imunossuprimido; dor perineal, crepitação, necrose", "Urgência [C]"],
          ["Dor referida", "Cólica ureteral, aneurisma de aorta, hérnia", "Exame do flanco e abdome [C]"]
        ]}}
      ]},
      {t: "Decidir", b: [
        {calc: "sc:twist"},
        {fluxo: [
          {t: "Dor escrotal aguda"},
          {t: "Início súbito em < 25 anos, náuseas/vômitos ou testículo alto/horizontal?", ramos: [
            {r: "Sim", n: [{t: "Torção provável → urgência urológica já", k: "stop"}]},
            {r: "Não", n: [{t: "Calcular o TWIST"}]}
          ]},
          {t: "TWIST", ramos: [
            {r: "≥ 5", n: [{t: "Urgência cirúrgica", k: "stop"}]},
            {r: "3–4", n: [{t: "USG doppler de urgência (encaminhar)", k: "warn"}]},
            {r: "0–2", n: [{t: "Torção improvável: epididimite ou torção de apêndice", k: "ok"}]}
          ]},
          {t: "Epididimite: antibiótico pelo risco, exames de IST e reavaliação em 72 h", k: "ok"}
        ], nota: "TWIST: Barbosa 2013 [F] – derivado em crianças e adolescentes; uso em adultos é extrapolação. TelessaúdeRS 2023: suspeita de torção → urgência [F]."}
      ]},
      {t: "Tratar a epididimite", b: [
        {tab: {h: ["Provável causa", "Esquema (CDC 2021)"], r: [
          ["Clamídia/gonococo (em geral < 35 anos, vida sexual ativa)", "Ceftriaxona 500 mg IM dose única + doxiciclina 100 mg VO 12/12 h por 10 dias [F]"],
          ["IST + enterobactérias (prática anal insertiva)", "Ceftriaxona 500 mg IM dose única + levofloxacino 500 mg/dia por 10 dias [F]"],
          ["Só enterobactérias (≥ 35 anos sem risco de IST, após procedimento urinário)", "Levofloxacino 500 mg/dia por 10 dias [F]; em Betim, ciprofloxacino 500 mg 12/12 h guiado por urocultura [NV]"]
        ]}, nota: "Ceftriaxona 1 g se ≥ 150 kg [F]. O PCDT IST 2022 não traz esquema próprio de epididimite [F]. REMUME: ceftriaxona, doxiciclina e ciprofloxacino; levofloxacino não [F]."},
        {ul: ["EAS/urocultura; teste para clamídia/gonococo se disponível; testes rápidos de HIV, sífilis e hepatites [C].", "Tratar parcerias sexuais dos últimos 60 dias quando a causa for IST [C].", "Escroto elevado, gelo e analgesia; reavaliar em 72 h – sem melhora: abscesso, outro diagnóstico ou urologia [C]."]},
        {ref: ["twist2013", "cdc_epid2021", "tsrs_uro2023", "pcdt_ist22", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["twist2013", "cdc_epid2021", "tsrs_uro2023"]});

  // ── 7. Delirium
  G("delirium", {
    urg: "Delirium é emergência médica. Instabilidade, hipóxia, hipoglicemia, déficit focal, queda com trauma craniano (sobretudo anticoagulado), febre com toxemia ou falta de cuidado seguro em casa: **urgência**.",
    resumo: "Delirium = **mudança aguda e flutuante da atenção e da consciência**. A pergunta não é 'é demência?', e sim **'o que causou?'**. A NICE (2023) recomenda o **4AT** para avaliar [F]. A forma **hipoativa** (quieto, sonolento) é a mais comum e a mais esquecida [C].",
    calcs: ["sc:q4at", "sc:cam"],
    secoes: [
      {t: "Reconhecer", b: [
        {ul: ["**Hiperativo:** agitação, alucinações, recusa de cuidados [C].", "**Hipoativo:** sonolência, lentidão, retração – parece 'depressão' ou 'cansaço' [C].", "**Misto:** alterna entre os dois [C].", "Sinais que a família traz: 'está diferente', confuso à noite, não reconhece a casa, piorou de repente [C]."]},
        "Fatores de risco: ≥ 65 anos, demência ou declínio cognitivo prévio, doença grave, fratura de quadril, déficit visual ou auditivo, polifarmácia [C].",
        {det: {t: "Fisiopatologia", b: ["Disfunção difusa e aguda de redes cerebrais por um insulto sistêmico num cérebro vulnerável: déficit colinérgico, excesso dopaminérgico, inflamação sistêmica e alterações metabólicas. Quanto menor a reserva cognitiva, menor o insulto necessário [C]."]}}
      ]},
      {t: "Critérios", b: [
        {ol: ["Distúrbio da **atenção** e da **consciência** [C].", "Instala-se em **horas a dias** e **flutua** ao longo do dia [C].", "Outra alteração cognitiva (memória, orientação, linguagem, percepção) [C].", "Não explicado por transtorno neurocognitivo prévio nem por coma [C].", "Evidência de **causa orgânica** (doença, fármaco, intoxicação ou abstinência) [C]."]},
        {nota: "DSM-5, resumido [C]. Na prática: 4AT ≥ 4 ou CAM positivo (1 + 2 + [3 ou 4])."},
        {calc: "sc:q4at"}, {calc: "sc:cam"}
      ]},
      {t: "Diferenciais", b: [
        {tab: {h: ["Hipótese", "O que separa"], r: [
          ["Demência", "Instalação insidiosa; atenção preservada no início; sem flutuação marcada (exceto corpos de Lewy) [C]"],
          ["Depressão", "Humor e anedonia em primeiro plano; atenção relativamente preservada [C]"],
          ["Psicose primária", "Consciência clara, mais jovem, história psiquiátrica [C]"],
          ["AVC (afasia)", "Déficit focal, afasia de Wernicke confundida com 'confusão' [C]"],
          ["Estado de mal não convulsivo", "Flutuação, automatismos, epilepsia prévia [C]"],
          ["Encefalopatia de Wernicke", "Etilista ou desnutrido; ataxia e oftalmoplegia → tiamina parenteral [C]"]
        ]}}
      ]},
      {t: "Causas a procurar", b: [
        {ul: ["**Fármacos:** benzodiazepínicos, anticolinérgicos (antialérgicos, tricíclicos, oxibutinina), opioides, corticoide; **abstinência** de álcool ou benzodiazepínico [C].", "**Metabólicas:** hipo ou hiperglicemia, sódio, cálcio, ureia, hepatopatia, tireoide, desidratação [C].", "**Infecções:** urinária, pulmonar, pele/úlcera por pressão [C].", "**Retenção urinária e fecaloma**, dor não tratada [C].", "**Hipóxia/hipercapnia**, IAM, AVC, hematoma subdural (queda) [C].", "**Ambiente:** internação, privação de sono, sem óculos ou aparelho auditivo [C]."]}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Mudança aguda de comportamento ou consciência"},
          {t: "4AT ≥ 4 ou CAM positivo → delirium provável"},
          {t: "Instável, SpO₂ baixa, glicemia alterada, déficit focal, trauma craniano, toxemia ou sem cuidador seguro?", ramos: [
            {r: "Sim", n: [{t: "Urgência", k: "stop"}]},
            {r: "Não", n: [{t: "Busca da causa na UBS: glicemia, SpO₂, globo vesical, fecaloma, revisão de remédios; hemograma, Na, K, Ca, creatinina, EAS/urocultura, ECG; RX se sintomas respiratórios", k: "warn"}]}
          ]},
          {t: "Tratar a causa + medidas não farmacológicas; reavaliar em 24–48 h", k: "ok"}
        ], nota: "NICE CG103 [C]; 4AT pela atualização de 2023 [F]."}
      ]},
      {t: "Tratar", b: [
        {ul: ["**Não farmacológico (base):** acompanhante conhecido, óculos e aparelho auditivo, relógio e calendário, luz de dia e escuro à noite, hidratação, mobilização precoce, sono sem interrupções, evitar contenção e sonda desnecessária [C].", "**Antipsicótico** só se houver sofrimento intenso ou risco para a pessoa ou outros: haloperidol em dose baixa e pelo menor tempo, em geral ≤ 1 semana [C]; a NICE (2022) destacou os riscos do haloperidol no idoso [F]. Evitar em Parkinson e demência com corpos de Lewy [C].", "**Benzodiazepínico** só na abstinência de álcool ou de benzodiazepínico [C].", "Explicar à família que o delirium costuma melhorar com a causa tratada, mas pode deixar declínio [C]."]},
        {ir: [["cr-demencia", "Demência"], ["cr-polifarmacia", "Polifarmácia"], ["abstinencia-alcool", "Abstinência alcoólica"]]},
        {ref: ["nice_delirium", "bgs_4at", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["bgs_4at"]});

  // ── 8. Risco de suicídio
  G("risco-suicida", {
    urg: "Plano estruturado, intenção, acesso a meio letal, tentativa recente, preparativos, psicose, intoxicação ou incapacidade de garantir a própria segurança: **não deixar a pessoa sozinha** → SAMU/urgência psiquiátrica; envolver a família.",
    resumo: "**Perguntar diretamente não aumenta o risco** [C]. Escalas organizam a conversa, mas **não preveem suicídio** nem decidem a conduta (NICE NG225) [C]. A decisão vem da avaliação clínica – ideação, plano, intenção, meios, tentativa prévia e proteção – e do **plano de segurança** com restrição de meios e retorno próximo. Tentativa de suicídio é de **notificação imediata (até 24 h) à SMS** [F].",
    calcs: ["sc:cssrs", "sc:phq9"],
    secoes: [
      {t: "Reconhecer", b: [
        {ul: ["**Maior preditor:** tentativa prévia [C].", "**Risco:** depressão, bipolar, psicose, uso de álcool e drogas, homem, idoso, pessoa LGBTQIA+, dor ou doença crônica, perdas recentes, desemprego, dívidas, isolamento, violência sofrida, acesso a meios letais (armas, pesticidas, estoque de remédios) [C].", "**Sinais de alerta:** falar em morte, despedir-se, doar objetos, organizar pendências, comprar meios, **melhora súbita sem explicação** depois de período grave [C].", "**Proteção:** filhos, vínculo com a equipe, religiosidade, planos futuros, rede de apoio [C]."]},
        {det: {t: "Mitos que atrapalham", b: [{ul: ["'Perguntar dá a ideia' – falso [C].", "'Quem fala não faz' – a maioria avisou alguém antes [C].", "'Melhorou de repente, já passou o risco' – pode ser decisão tomada [C]."]}]}}
      ]},
      {t: "Avaliar", b: [
        {ol: ["\"Você tem sentido que não vale a pena viver?\"", "\"Já pensou em se matar?\"", "\"Pensou em como faria?\"", "\"Tem intenção de fazer? Já decidiu quando?\"", "\"Tem acesso a esse meio? Já fez algo para se preparar?\"", "\"Já tentou antes? Como foi?\""]},
        {nota: "Perguntas em escada, da mais geral à mais específica [C]."},
        {calc: "sc:cssrs"}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Ideação suicida"},
          {t: "Plano + intenção, tentativa recente, preparativos, psicose, intoxicação ou não consegue se comprometer com a segurança?", ramos: [
            {r: "Sim", n: [{t: "Risco alto: não deixar só, retirar meios, SAMU/urgência psiquiátrica, envolver a família", k: "stop"}]},
            {r: "Não", n: [{t: "Avaliar o nível"}]}
          ]},
          {t: "Nível", ramos: [
            {r: "Método sem intenção, ou tentativa há > 3 meses", n: [{t: "Plano de segurança + restrição de meios + retorno em 24–72 h + matriciamento/CAPS", k: "warn"}]},
            {r: "Ideação passiva", n: [{t: "Plano de segurança, tratar a condição de base, retorno em até 1–2 semanas", k: "ok"}]}
          ]},
          {t: "Qualquer tentativa: notificação imediata à SMS (até 24 h) + ficha de violência interpessoal/autoprovocada", k: "stop"}
        ], nota: "Portaria GM/MS 6.734/2025 – violência sexual e tentativa de suicídio: notificação imediata à SMS [F]. Intervalos de retorno: inferência clínica [I]."}
      ]},
      {t: "Cuidar", b: [
        {ul: ["**Plano de segurança** escrito com a pessoa (modelo na aba Prescrição) [C].", "**Restrição de meios:** familiar guarda os remédios, armas fora de casa, pesticidas trancados – é a medida com melhor evidência populacional [C].", "**Antidepressivo:** ISRS, em quantidades pequenas e com um familiar responsável; evitar tricíclicos pela letalidade na superdosagem [C].", "**< 25 anos:** monitorar ideação nas primeiras semanas de antidepressivo [C].", "**Contato de seguimento** (ligação, visita do ACS) depois da consulta e se faltar ao retorno [C].", "CVV 188 (24 h, gratuito) [C]."]},
        {ir: [["depressao", "Depressão"], ["cr-depressao", "Depressão (seguimento)"], ["pp-depressao", "Depressão perinatal"], ["po-violencia-vulneraveis", "Violência"]]},
        {ref: ["suicidio", "port6734", "cab34", "nice_depressao", "cssrs"]}
      ]}
    ]
  }, {fontes: ["port6734", "cab34", "cssrs"], mud: "avaliação em escada, triagem C-SSRS, fluxograma por nível de risco, notificação imediata (Portaria 6.734/2025) e cuidado"});

  // ── 9. Abstinência alcoólica
  G("abstinencia-alcool", {
    urg: "Convulsão, alucinações, confusão, febre, CIWA-Ar ≥ 10 com fator de risco, delirium tremens prévio ou sem acompanhante: **tratamento hospitalar**. Confusão + ataxia + alteração da movimentação ocular: **Wernicke → tiamina parenteral e urgência**.",
    resumo: "Sintomas começam **6–24 h** após a última dose; convulsões em **12–48 h**; **delirium tremens em 48–96 h** [C]. Ambulatorial só na **abstinência leve (CIWA-Ar < 10)**, sem fator de risco de complicação, com acompanhante e **contato diário com a equipe por até 5 dias** (ASAM 2020) [F]. Tiamina sempre.",
    calcs: ["sc:ciwa"],
    secoes: [
      {t: "Reconhecer", b: [
        {tab: {h: ["Tempo após a última dose", "O que aparece"], r: [
          ["6–24 h", "Tremor, ansiedade, sudorese, náuseas, insônia, taquicardia, hipertensão"],
          ["12–48 h", "Alucinose alcoólica (alucinações com consciência clara) e convulsões"],
          ["48–96 h", "Delirium tremens: confusão, agitação, febre, instabilidade autonômica – risco de morte"]
        ]}, nota: "Conhecimento consolidado [C]."},
        {det: {t: "Fisiopatologia", b: ["O álcool potencializa o GABA-A e inibe o receptor NMDA. No uso crônico, o cérebro compensa reduzindo GABA e aumentando NMDA; quando o álcool sai, sobra excitação: hiperatividade autonômica, convulsões e delirium. Cada abstinência sensibiliza a próxima (kindling) [C]."]}}
      ]},
      {t: "Critérios e risco", b: [
        {tab: {h: ["CIWA-Ar", "Gravidade (ASAM 2020)"], r: [["< 10", "Leve"], ["10–18", "Moderada"], ["≥ 19", "Grave"], ["Convulsão ou delirium", "Complicada, em qualquer pontuação"]]}, nota: "ASAM 2020 [F]."},
        {ul: ["**Fatores de risco de abstinência complicada (ASAM):** delirium ou convulsão em abstinências prévias; muitas abstinências; comorbidade clínica ou cirúrgica grave, sobretudo TCE; > 65 anos; uso pesado e prolongado; convulsão no episódio atual; hiperatividade autonômica marcada; dependência de benzodiazepínico [F]."]},
        {calc: "sc:ciwa"}
      ]},
      {t: "Diferenciais", b: [
        {tab: {h: ["Hipótese", "Pista"], r: [
          ["Hipoglicemia", "Glicemia capilar sempre [C]"],
          ["Encefalopatia de Wernicke", "Ataxia, oftalmoplegia/nistagmo, confusão [C]"],
          ["Encefalopatia hepática", "Estigmas de hepatopatia, flapping [C]"],
          ["TCE/hematoma subdural", "Queda, sinal focal, anticoagulado [C]"],
          ["Infecção (meningite, pneumonia, PBE)", "Febre desproporcional, foco [C]"],
          ["Outras substâncias", "Abstinência de benzodiazepínico, intoxicação por estimulantes [C]"],
          ["Tireotoxicose, sepse", "Exame e exames dirigidos [C]"]
        ]}}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Pessoa com dependência que parou ou reduziu o álcool"},
          {t: "Sinais de Wernicke?", ramos: [
            {r: "Sim", n: [{t: "Tiamina parenteral e urgência", k: "stop"}]},
            {r: "Não", n: [{t: "Aplicar CIWA-Ar e fatores de risco"}]}
          ]},
          {t: "Onde tratar", ramos: [
            {r: "CIWA ≥ 10, fator de risco ou sem acompanhante", n: [{t: "Urgência/internação (ambulatorial só com equipe experiente e monitoramento diário)", k: "stop"}]},
            {r: "CIWA < 10, sem fator de risco, com acompanhante", n: [{t: "Ambulatorial: benzodiazepínico + tiamina + contato diário por até 5 dias", k: "ok"}]}
          ]},
          {t: "Depois da desintoxicação: tratamento do transtorno por uso de álcool (CAPS AD)", k: "ok"}
        ], nota: "ASAM 2020 [F]."}
      ]},
      {t: "Tratar", b: [
        {ul: ["**Benzodiazepínico** de 1ª linha [F]: dose fixa com redução em 4–5 dias e resgate, ou por sintomas só se o paciente ou o cuidador monitorar com confiança [F] (esquema de diazepam na aba Prescrição [NV]).", "Hepatopatia grave ou idoso: lorazepam (meia-vida curta, sem metabólito ativo) [C].", "Alternativas ou adjuvantes: carbamazepina ou gabapentina (a gabapentina também serve para o tratamento do uso depois) [F].", "**Tiamina:** ASAM sugere 100 mg VO/dia por 3–5 dias no ambulatório e IM/IV se desnutrição ou complicação [F]; a apresentação da REMUME é 300 mg comprimido e 100 mg/mL injetável [F].", "Benzodiazepínico com receita de controle especial e dispensação ao acompanhante [C]."]},
        {ir: [["cr-alcool", "Transtorno por uso de álcool (seguimento)"], ["po-substancias", "Álcool e outras drogas"], ["delirium", "Delirium"]]},
        {ref: ["asam_abst", "cab34", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["cab34"], mud: "linha do tempo, CIWA-Ar com os cortes da ASAM 2020 (leve < 10, moderada 10–18, grave ≥ 19; antes 10–15 e > 15), fatores de risco, diferenciais e fluxograma"});

  // ── 10. Febre < 3 meses
  G("febre-menor-3m", {
    urg: "Toxemia, hipotermia (< 36 °C), apneia, gemência, petéquias ou má perfusão: **SAMU**. Todo lactente ≤ 28 dias com ≥ 38 °C: **hospital**. 29–90 dias em bom estado: **mesmo dia** em serviço com laboratório.",
    resumo: "Febre ≥ 38 °C em < 3 meses – medida ou **referida em casa nas últimas 24 h** – é **vermelho** no semáforo do NICE [F]. A AAP (2021) estratifica 8–60 dias com urina, hemocultura e marcadores inflamatórios; **8–21 dias: punção lombar, antibiótico e internação para todos** [C]. Na UBS, isso se traduz em encaminhar no mesmo dia, sem antitérmico para 'observar' [I].",
    calcs: ["sc:semaforo"],
    secoes: [
      {t: "Reconhecer", b: [
        {ul: ["Infecção bacteriana grave nessa idade: **ITU** (a mais comum), bacteremia e meningite; o risco é maior no 1º mês [C].", "Sinais podem ser discretos: recusa da mamada, sonolência, irritabilidade, vômitos, icterícia, hipotermia [C].", "**Herpes simples neonatal:** vesículas, convulsão, mãe com herpes genital, alteração de transaminases – aciclovir no hospital [C].", "Temperatura em < 4 semanas: axilar, com termômetro eletrônico [F]."]},
        {det: {t: "Por que o lactente jovem é diferente", b: ["Imunidade inata imatura (menos neutrófilos de reserva, opsonização e complemento menores), transmissão vertical de patógenos (estreptococo do grupo B, E. coli, Listeria, HSV) e exame físico pouco sensível: a aparência boa não exclui bacteremia [C]."]}}
      ]},
      {t: "Estratificação (AAP 2021)", b: [
        {tab: {h: ["Idade", "Exames", "Conduta"], r: [
          ["8–21 dias", "Urina, hemocultura e líquor", "Antibiótico parenteral e internação para todos"],
          ["22–28 dias", "Urina, hemocultura e marcadores inflamatórios (MI)", "MI alterados → líquor; alta só com líquor normal, 1 dose de antibiótico e revisão em 24 h; sem líquor → internar"],
          ["29–60 dias", "Urina, hemocultura e MI", "MI normais + urina negativa → casa, revisão em 24–36 h; urina positiva → antibiótico oral e revisão em 12–24 h; MI alterados → líquor pode ser feito"]
        ]}, nota: "MI: procalcitonina > 0,5 ng/mL, PCR > 20 mg/L, neutrófilos > 4.000–5.200/mm³, temperatura > 38,5 °C. Exclui prematuros (< 37 semanas), suspeita de HSV, foco bacteriano, bronquiolite clínica, imunossupressão e vacina nas últimas 48 h. Conferido por resumo secundário da diretriz [C] – conferir na publicação original."},
        "Para a UBS, o que importa: **nenhum < 3 meses febril é conduzido só com observação domiciliar sem exames** [I]."
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "< 3 meses com ≥ 38 °C (medida ou referida nas últimas 24 h)"},
          {t: "Toxemia, hipotermia, apneia, gemência, petéquias ou má perfusão?", ramos: [
            {r: "Sim", n: [{t: "SAMU", k: "stop"}]},
            {r: "Não", n: [{t: "Idade em dias"}]}
          ]},
          {t: "Destino", ramos: [
            {r: "≤ 28 dias", n: [{t: "Hospital: avaliação completa", k: "stop"}]},
            {r: "29–90 dias, bom estado", n: [{t: "Mesmo dia em serviço com laboratório (urina por sonda, hemocultura, PCR/procalcitonina)", k: "warn"}]}
          ]},
          {t: "Relatório com idade em dias, temperatura e horário, mamadas, diurese e antitérmico dado", k: "ok"}
        ], nota: "NICE NG143 [F]; AAP 2021 [C]. Vacina recente pode dar febre, mas não libera a avaliação [C]."}
      ]},
      {t: "Diferenciais e armadilhas", b: [
        {ul: ["**Excesso de roupa/calor ambiente:** tirar a roupa e remedir em 15–30 min; se persistir, é febre [C].", "**Bronquiolite:** reduz o risco de bacteremia, mas não exclui ITU [C].", "Onfalite, celulite, artrite séptica ou osteomielite (não mexe um membro), mastite neonatal [C].", "**Antitérmico** não diferencia doença grave de leve; não dar antes da avaliação, salvo orientação do serviço de destino [F]."]},
        {ir: [["febre-crianca", "Febre de 3 a 36 meses"], ["itu-crianca", "ITU na criança"], ["bronquiolite", "Bronquiolite"]]},
        {ref: ["nice_febre", "aap_febre_lactente"]}
      ]}
    ]
  }, {fontes: ["nice_febre"], nv: ["Limiares dos marcadores inflamatórios da AAP 2021: conferidos só em resumo secundário – conferir na diretriz original.", "Referência de urgência pediátrica de Betim (UPA/HPRB): confirmar."]});

  // ── 11. Febre 3–36 meses
  G("febre-crianca", {
    urg: "Qualquer sinal **vermelho** do semáforo (pálida/mosqueada, não acorda, choro fraco ou agudo, gemência, FR > 60, tiragem, petéquias, fontanela abaulada, rigidez de nuca, convulsão focal): **encaminhar com urgência**. Petéquias com criança doente: antibiótico parenteral o quanto antes.",
    resumo: "Use o **semáforo do NICE**: vermelho → urgência; âmbar sem diagnóstico → rede de segurança ou encaminhar; verde → casa com orientação [F]. Na febre sem foco, a **ITU** é a infecção bacteriana mais comum: teste a urina [C]. Antitérmico é para **conforto**, não para prevenir convulsão [F]. Febre há **5 dias ou mais**: pensar em **Kawasaki** (e dengue) [F].",
    calcs: ["sc:semaforo"],
    secoes: [
      {t: "Reconhecer", b: [
        "Acima de 6 meses, **a temperatura sozinha não define gravidade** – o que pesa é a aparência, a respiração, a hidratação e os sinais neurológicos [F]. Entre 3 e 6 meses, ≥ 39 °C já é pelo menos âmbar [F].",
        {det: {t: "Fisiopatologia da febre", b: ["Pirógenos (IL-1, IL-6, TNF) estimulam a prostaglandina E2 no hipotálamo e elevam o ponto de ajuste da temperatura. A febre em si não lesa o cérebro e o antitérmico não muda o curso da infecção; ele melhora o conforto [C]."]}}
      ]},
      {t: "Semáforo", b: [
        {tab: {h: ["", "Verde", "Âmbar", "Vermelho"], r: [
          ["Cor", "Normal", "Palidez relatada pelos pais", "Pálida, mosqueada, acinzentada ou cianótica"],
          ["Atividade", "Responde, sorri, acorda fácil, choro forte ou não chora", "Responde menos, não sorri, só acorda com estímulo prolongado, menos ativa", "Não responde, parece grave, não acorda ou não se mantém acordada, choro fraco, agudo ou contínuo"],
          ["Respiração", "—", "Asa nasal; FR > 50 (6–12 meses) ou > 40 (> 12 meses); SpO₂ ≤ 95%; crepitações", "Gemência; FR > 60; tiragem moderada ou grave"],
          ["Circulação e hidratação", "Pele e olhos normais, mucosas úmidas", "FC > 160 (< 12 m), > 150 (12–24 m), > 140 (2–5 anos); TEC ≥ 3 s; mucosas secas; aceita pouco; urina pouco", "Turgor diminuído"],
          ["Outros", "Nenhum âmbar ou vermelho", "3–6 meses com ≥ 39 °C; febre ≥ 5 dias; calafrios; edema de membro ou articulação; não apoia o membro", "< 3 meses com ≥ 38 °C; manchas que não somem à pressão; fontanela abaulada; rigidez de nuca; estado de mal; sinal ou convulsão focal"]
        ]}, nota: "NICE NG143, Tabela 2 [F]."},
        {calc: "sc:semaforo"}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Criança de 3 a 36 meses com febre sem foco"},
          {t: "Algum sinal vermelho?", ramos: [
            {r: "Sim", n: [{t: "Encaminhar com urgência (SAMU se risco imediato)", k: "stop"}]},
            {r: "Não", n: [{t: "Algum âmbar?"}]}
          ]},
          {t: "Conduta", ramos: [
            {r: "Âmbar", n: [{t: "Sem diagnóstico: urina + rede de segurança com retorno em 24 h, ou encaminhar", k: "warn"}]},
            {r: "Só verde", n: [{t: "Casa, com orientação escrita de quando voltar", k: "ok"}]}
          ]},
          {t: "Febre ≥ 5 dias → critérios de Kawasaki; dengue em período de transmissão", k: "warn"}
        ], nota: "NICE NG143 [F]: não prescrever antibiótico oral para febre sem foco. Urina na febre sem foco: NICE NG224 [F]."}
      ]},
      {t: "O foco que passa despercebido", b: [
        {tab: {h: ["Hipótese", "Pista"], r: [
          ["ITU", "Febre sem foco, choro ao urinar, urina com odor, vômitos [C]"],
          ["Otite média", "Otoscopia: membrana abaulada [C]"],
          ["Pneumonia", "Taquipneia, tiragem, SpO₂ ≤ 95% [C]"],
          ["Meningite", "Irritabilidade paradoxal, fontanela abaulada, petéquias [C]"],
          ["Artrite séptica/osteomielite", "Não apoia ou não mexe o membro [F]"],
          ["Exantema súbito (roséola)", "6 meses–2 anos, febre alta por 3 dias, exantema quando a febre some [C]"],
          ["Dengue e outras arboviroses", "Período de transmissão, exantema, plaquetas – ver dengue [C]"],
          ["Kawasaki", "Febre ≥ 5 dias + conjuntivite sem secreção, lábios e mucosa oral alterados, mãos e pés edemaciados ou vermelhos, exantema, linfonodo cervical [F]; lactente < 1 ano pode ter poucos sinais e mais risco coronariano [F]"]
        ]}}
      ]},
      {t: "Antitérmico", b: [
        {ul: ["Só se a criança estiver **desconfortável**; não para baixar a temperatura nem para prevenir convulsão febril [F].", "Paracetamol ou ibuprofeno (≥ 6 meses); dipirona conforme bula (não em < 3 meses ou < 5 kg) – doses na aba Prescrição [NV].", "Não dar os dois juntos; alternar só se o desconforto persistir ou voltar antes da próxima dose [F].", "Banho ou compressas para baixar a febre: não recomendados [F]; álcool na pele, nunca [C]."]},
        {ir: [["febre-menor-3m", "Febre em < 3 meses"], ["itu-crianca", "ITU na criança"], ["dengue-a", "Dengue"], ["oma", "Otite média aguda"]]},
        {ref: ["nice_febre", "nice_ng224", "aap_itu", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["nice_ng224"]});

  // ── 12. ITU febril na criança
  G("itu-crianca", {
    urg: "< 3 meses, toxemia, sinal vermelho do semáforo, vômitos que impedem a via oral, desidratação, imunossupressão ou falha após 48 h de antibiótico: **urgência/antibiótico parenteral**.",
    resumo: "O diagnóstico depende de **urina colhida do jeito certo antes do antibiótico** (jato médio; coletor tipo almofada; sondagem ou punção se preciso) e de **urocultura** [F]. Com ≥ 3 meses e sem toxemia, **antibiótico oral** pela resistência local. As diretrizes **divergem na imagem**: NICE pede USG de rotina só em < 6 meses; AAP, após a 1ª ITU febril de 2 a 24 meses [F].",
    secoes: [
      {t: "Reconhecer", b: [
        {ul: ["**Lactente:** febre, irritabilidade, vômitos, recusa alimentar, baixo ganho de peso, icterícia prolongada [C].", "**Criança maior:** disúria, urgência, aumento da frequência, dor lombar ou abdominal, perda de controle urinário recente [C].", "**Fatores de risco:** menino não circuncidado no 1º ano, menina, constipação, disfunção miccional, malformação urinária, ITU prévia [C]."]},
        "**ITU alta (pielonefrite):** bacteriúria com febre ≥ 38 °C, ou < 38 °C com dor ou sensibilidade lombar. **ITU baixa (cistite):** bacteriúria sem sinais sistêmicos. PCR sozinha não separa uma da outra [F].",
        {det: {t: "Fisiopatologia", b: ["Infecção ascendente por bactérias intestinais (E. coli na grande maioria) que colonizam a região periuretral. Refluxo vesicoureteral, obstrução, constipação e esvaziamento incompleto facilitam a subida até o rim; a pielonefrite repetida pode deixar cicatriz renal [C]."]}}
      ]},
      {t: "Critérios", b: [
        {tab: {h: ["Idade", "Interpretação (NICE NG224)"], r: [
          ["< 3 meses", "Encaminhar ao pediatra/especialista: microscopia e cultura urgentes; antibiótico parenteral [F]"],
          ["3 meses a < 3 anos", "Fita: leucócito-esterase e nitrito negativos → sem antibiótico e sem cultura (salvo critério); qualquer positivo → cultura e antibiótico [F]"],
          ["≥ 3 anos", "LE e nitrito positivos → tratar (cultura se risco ou ITU prévia); nitrito + isolado → tratar se amostra fresca e cultivar; LE + isolado → cultura, tratar só com clínica clara; ambos negativos → procurar outra causa [F]"]
        ]}},
        {ul: ["**Cultivar sempre** se: suspeita de ITU alta, risco intermediário ou alto, < 3 meses, fita positiva, ITU recorrente, sem resposta em 24–48 h ou clínica que não bate com a fita [F].", "**ITU atípica:** criança grave, jato fraco, massa abdominal ou vesical, creatinina elevada, septicemia, sem resposta em 48 h, germe que não é E. coli [F].", "**ITU recorrente:** ≥ 2 altas; 1 alta + ≥ 1 baixa; ou ≥ 3 baixas [F]."]}
      ]},
      {t: "Decidir", b: [
        {fluxo: [
          {t: "Febre sem foco ou sintomas urinários"},
          {t: "< 3 meses ou alto risco (sinal vermelho, toxemia, vômitos que impedem a via oral)?", ramos: [
            {r: "Sim", n: [{t: "Pediatra/urgência: antibiótico parenteral", k: "stop"}]},
            {r: "Não", n: [{t: "Colher urina (jato médio, coletor tipo almofada ou sondagem) ANTES do antibiótico"}]}
          ]},
          {t: "Fita + cultura conforme a idade (tabela acima)"},
          {t: "ITU febril: antibiótico oral, reavaliar em 48 h; sem melhora = atípica → urgência e USG", k: "warn"},
          {t: "Imagem pela idade e pelo tipo de ITU", k: "ok"}
        ], nota: "NICE NG224 [F]. Coletor adesivo (saco) só para triagem: positivo precisa de confirmação por amostra adequada [C]."}
      ]},
      {t: "Imagem", b: [
        {tab: {h: ["Idade", "Boa resposta", "Atípica", "Recorrente"], r: [
          ["< 6 meses", "USG em até 6 semanas", "USG na fase aguda + DMSA em 4–6 meses + uretrocistografia", "USG na fase aguda + DMSA + uretrocistografia"],
          ["6 meses a < 3 anos", "Sem imagem de rotina", "USG na fase aguda + DMSA", "USG em 6 semanas + DMSA"],
          ["≥ 3 anos", "Sem imagem de rotina", "USG na fase aguda", "USG em 6 semanas + DMSA"]
        ]}, nota: "NICE NG224 [F]. A AAP (2011, reafirmada 2016) indica USG de rins e vias urinárias após a 1ª ITU febril de 2 a 24 meses [C]. O item segue a AAP (mais sensível); a NICE poupa exames em quem responde bem a partir de 6 meses."}
      ]},
      {t: "Tratar", b: [
        {ul: ["Antibiótico oral por 7–10 dias na ITU febril; escolha pela resistência local e ajuste pelo antibiograma (opções da REMUME na aba Prescrição) [NV].", "Nitrofurantoína não serve para ITU febril (não atinge o parênquima renal) [C].", "**Sem profilaxia de rotina** após a 1ª ITU; **bacteriúria assintomática não se trata** [F].", "Tratar constipação e disfunção miccional; orientar urocultura precoce em nova febre [C]."]},
        {ir: [["febre-crianca", "Febre de 3 a 36 meses"], ["febre-menor-3m", "Febre em < 3 meses"], ["constipacao-infantil", "Constipação na criança"], ["pu-fimose", "Fimose"]]},
        {ref: ["nice_ng224", "aap_itu", "rename", "remume"]}
      ]}
    ]
  }, {fontes: ["nice_ng224"], mud: "critérios de interpretação da urina por idade (NICE NG224), ITU atípica e recorrente, fluxograma e tabela de imagem com a divergência NICE × AAP"});
})();
