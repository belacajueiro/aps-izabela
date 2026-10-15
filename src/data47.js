// ───────────── data47.js – v39.5: puericultura revisada a partir das evoluções do OpenEvidence (conferidas e corrigidas para o Brasil)
FONTES["cdc_marcos2022"] = {s: "CDC/AAP 2022 – marcos do desenvolvimento", t: "Zubler JM et al. Evidence-informed milestones for developmental surveillance tools. Pediatrics 2022;149(3):e2021052138. DOI 10.1542/peds.2021-052138 – marcos que ≥ 75% das crianças atingem, com listas de 15 e 30 meses (programa Learn the Signs. Act Early.) (revisão/consenso).", f: "F", url: "https://doi.org/10.1542/peds.2021-052138"};
FONTES["oms_telas2019"] = {s: "OMS 2019 – telas (via SBP)", t: "OMS. Diretriz de atividade física, comportamento sedentário e sono para menores de 5 anos (2019), divulgada pela SBP: menores de 2 anos sem contato com telas; 2 a 5 anos até 1 hora por dia (notícia institucional).", f: "F", url: "https://www.sbp.com.br/?p=13811"};

(function(){
  const get = id => CONDICOES.find(x => x.id === id);
  const MESES = {"pu-1m": 1, "pu-2m": 2, "pu-4m": 4, "pu-6m": 6, "pu-9m": 9, "pu-12m": 12, "pu-18m": 18, "pu-24m": 24, "pu-3a5a": 36};
  const exame = m => [
    "Estado geral: bom estado geral, ativo e reativo, hidratado, corado, acianótico, anictérico, afebril.",
    m <= 18 ? "Cabeça: normocefálica; fontanela anterior ___ (aberta, normotensa / fechada)." : "Cabeça: normocefálica, fontanela fechada.",
    `Olhos: pupilas isocóricas e fotorreagentes; reflexo vermelho ___ bilateral; ${m < 4 ? "fixa o olhar ___" : "acompanha objetos; estrabismo ___"}.`,
    "Orelhas e nariz: condutos e narinas pérvios, sem secreções.",
    m < 6 ? "Boca: mucosas coradas e hidratadas, palato íntegro, freio lingual ___." : "Boca: dentição ___ (nº de dentes); cáries ___; higiene bucal ___.",
    "AR: murmúrio vesicular presente bilateralmente, sem ruídos adventícios.",
    `ACV: bulhas rítmicas, normofonéticas, em 2 tempos, sem sopros${m <= 12 ? "; pulsos femorais palpáveis e simétricos" : ""}.`,
    `Abdome: plano, flácido, indolor, sem visceromegalias ou hérnias${m < 2 ? "; cicatriz umbilical ___" : ""}.`,
    "Genitália: ___ (feminina sem alterações / masculina com testículos tópicos bilateralmente).",
    m < 4 ? "Quadril: Ortolani ___ / Barlow ___." : m < 12 ? "Quadris: abdução simétrica, sem limitação ___." : "Marcha: ___ (sem claudicação).",
    "Pele: ___ (sem lesões / dermatite / manchas).",
    m < 4 ? "Neurológico: reflexos primitivos presentes e simétricos (Moro, sucção, preensão palmar e plantar); tônus ___." : m < 7 ? "Neurológico: tônus adequado; reflexo de Moro em extinção ___." : "Neurológico: tônus e força adequados."
  ].join("\n");
  const EXTRA_P = {
    "pu-1m": ["Investigo saúde mental materna (tristeza, ansiedade, sinais de depressão pós-parto) e rede de apoio."],
    "pu-2m": ["Se cólica: tranquilizo a família; colo, massagem abdominal e ambiente calmo."],
    "pu-4m": ["Oriento que a introdução alimentar começa aos 6 meses, não antes.", "Fase oral: objetos pequenos fora do alcance; não deixar sozinho em superfícies altas (já rola)."],
    "pu-6m": ["Dentição: massagem gengival com gaze ou dedeira e mordedor resfriado; evitar géis e medicamentos tópicos.", "Comida amassada com garfo, sem liquidificar ou peneirar; água em copo nos intervalos."],
    "pu-9m": ["Progredir para pedaços pequenos e macios; deixar a criança comer com as mãos.", "Escovação com escova macia e creme dental com flúor (≥ 1.000 ppm), quantidade de grão de arroz cru."],
    "pu-12m": ["Agendo a primeira consulta odontológica, se ainda não feita.", "Oriento limites com afeto (disciplina positiva) e prevenção de afogamento (baldes, piscinas) e intoxicações."],
    "pu-18m": ["Seletividade alimentar: horários regulares, sem telas nas refeições, oferecer de novo o que recusou sem forçar e sem trocar a refeição por leite.", "Birras: calma, limites claros e consistentes, elogiar o comportamento desejado.", "Desfralde: aguardar sinais de prontidão (avisa, fica seco por cerca de 2 horas, interesse pelo vaso)."],
    "pu-24m": ["Desfralde gradual se houver sinais de prontidão, sem pressão e com reforço positivo.", "Telas: até 1 hora por dia, com supervisão (2 a 5 anos, OMS).", "Cadeirinha no carro em todos os trajetos."],
    "pu-3a5a": ["Telas: até 1 hora por dia até os 5 anos, com supervisão (OMS)."]
  };
  Object.entries(MESES).forEach(([id, m]) => {
    const c = get(id); if (!c) return;
    // S: higiene, telas e saúde do cuidador (estrutura das evoluções do OpenEvidence)
    c.S = c.S.replace(/\nContexto: rede de apoio ___ \| creche\/escola ___ \| exposição a tabaco ___ \| violência ___\./,
      m < 12 ? "\nHigiene: banho ___ | assaduras ___.\nCuidador(a): humor ___ (tristeza, ansiedade, sinais de depressão pós-parto) | rede de apoio ___.\nContexto: creche ___ | fumaça de cigarro no domicílio ___ | violência ___."
             : `\nHigiene bucal: escovação ___ vezes/dia, creme dental com flúor ___ | consulta odontológica ___.${m >= 18 && m < 48 ? "\nControle esfincteriano: ___ (fralda / desfralde em curso / completo)." : ""}\nContexto: rede de apoio ___ | creche/escola ___ | telas ___ h/dia | fumaça de cigarro no domicílio ___ | violência ___.`);
    // O: exame por sistemas no lugar da linha curta
    const lin = c.O.split("\n");
    const iEst = lin.findIndex(x => /^Estado geral/.test(x));
    if (iEst >= 0){
      const resto = lin[iEst].split(/\.\s+/).map(x => x.replace(/\.$/, "").trim()).filter(x => x && !/^Estado geral|Dentiç|Fontanela|Quadril|Pele|Reflexo|Estrabismo|Coto|umbigo|^Fixa/i.test(x));
      lin.splice(iEst, 1, exame(m) + (resto.length ? "\nObservação: " + resto.join(". ") + "." : ""));
    }
    c.O = lin.join("\n");
    // P: orientações antecipatórias antes do alarme
    const add = EXTRA_P[id];
    if (add && c.P.includes("- Oriento sinais de alarme")) c.P = c.P.replace("- Oriento sinais de alarme", add.map(x => "- " + x).join("\n") + "\n- Oriento sinais de alarme");
    else if (add) c.P += "\n" + add.map(x => "- " + x).join("\n");
    if (c.evid) c.evid.fontes = [...new Set([...(c.evid.fontes || []), ...(m >= 18 ? ["oms_telas2019"] : []), "cdc_marcos2022"])];
    c.mudancas = (c.mudancas || []).concat(["Revisão 14/10/2026 (v39.5): exame físico por sistemas, higiene/saúde bucal, telas e saúde do cuidador no S, e orientações antecipatórias por idade, a partir das evoluções do OpenEvidence revisadas (vacinas, ferro, vitamina D, flúor e CID corrigidos para as normas brasileiras)."]);
  });
})();
