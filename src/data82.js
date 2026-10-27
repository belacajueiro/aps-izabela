// ───────────── data82.js – v69: Guia Clínico – fase 2, lote 6: infectologia, prevenção e populações.
// "Ver também" nos 27 guias; diferenciais [C] em hanseníase e em ILTB × TB ativa. Nenhuma conduta ou dose nova.

(() => {
  const get = id => CONDICOES.find(x => x.id === id);
  const MUD = "v69 (26/10/2026): Guia Clínico completado (fase 2) – ";
  const AUG = (id, o) => {
    const c = get(id); if (!c || !c.guia) return;
    c.guia = {...c.guia, secoes: [...(c.guia.secoes || [])]};
    const g = c.guia;
    if (o.dif) g.secoes.splice(Math.min(o.pos ?? 1, g.secoes.length), 0, {t: o.difT || "Diferenciais", b: [o.dif]});
    if (o.ir) g.secoes.push({t: "Ver também", b: [{ir: o.ir}]});
    if (o.calcs) g.calcs = [...new Set([...(g.calcs || []), ...o.calcs])];
    (c.mudancas = c.mudancas || []).push(MUD + (o.mud || (o.dif ? "diferenciais e links relacionados" : "links relacionados")) + ".");
  };
  const T = (rows, nota) => ({tab: {h: ["Hipótese", "Pistas"], r: rows}, nota: nota || "Conhecimento consolidado [C]."});

  // Infectologia
  AUG("in-ist", {ir: [["uretrite", "Uretrite"], ["cervicite", "Cervicite"], ["dip", "DIP"], ["in-sifilis", "Sífilis"], ["in-prep", "PrEP/PEP"], ["herpes-genital", "Herpes genital"], ["condiloma", "Condiloma"]]});
  AUG("in-prep", {ir: [["pep", "PEP (demanda)"], ["in-hiv", "HIV"], ["in-ist", "IST"], ["hepatites-tr", "Testes rápidos"], ["po-lgbt", "Saúde LGBTQIAPN+"]]});
  AUG("in-hepatites", {ir: [["hepatites-tr", "Teste rápido reagente"], ["cr-masld", "Esteatose (MASLD)"], ["pv-infecciosas", "Quem testar"], ["pv-vacinas", "Vacina hepatite B"], ["pn-vacinas", "Gestante"]]});
  AUG("in-iltb", {
    dif: T([
      ["TB ativa (pulmonar)", "Tosse, febre, sudorese, emagrecimento ou RX alterado – investigar antes de tratar ILTB [C]"],
      ["TB extrapulmonar", "Linfonodomegalia, derrame, sintomas localizados [C]"],
      ["Prova tuberculínica falso-positiva", "BCG recente (efeito pequeno após 1 ano), micobactérias não tuberculosas [C]"],
      ["Prova falso-negativa", "Imunossupressão, HIV avançado, desnutrição, < 6 meses, infecção recente (janela de 8 semanas) [C]"]
    ], "Conhecimento consolidado [C]. Regra prática: só tratar ILTB após excluir TB ativa."),
    difT: "Antes de tratar: excluir TB ativa",
    ir: [["in-tb", "Tuberculose"], ["tb-sr", "Sintomático respiratório"], ["in-hiv", "HIV"], ["cr-ar", "Imunobiológicos (artrite)"]]
  });
  AUG("in-hansen", {
    dif: T([
      ["Pitiríase versicolor", "Descamação fina ao estiramento, sensibilidade preservada [C]"],
      ["Vitiligo", "Acrômica (não hipocrômica), sensibilidade normal [C]"],
      ["Pitiríase alba", "Criança, face, bordas mal definidas, sensibilidade normal [C]"],
      ["Tinea corporis", "Borda ativa descamativa, prurido, exame micológico [C]"],
      ["Dermatite seborreica / psoríase / granuloma anular", "Sem alteração de sensibilidade [C]"],
      ["Neuropatia diabética, alcoólica ou por B12", "Distribuição em bota/luva simétrica, sem nervo espessado nem lesão de pele [C]"]
    ], "Conhecimento consolidado [C]. A chave é testar a sensibilidade (térmica, dolorosa, tátil) na lesão."),
    ir: [["hanseniase", "Hanseníase (demanda)"], ["pele-vitiligo", "Vitiligo"], ["pitiriase-versicolor", "Pitiríase versicolor"], ["parestesias", "Parestesias"], ["cr-pe-diabetico", "Pé diabético (neuropatia)"]]
  });
  AUG("in-chagas", {ir: [["cr-ic", "Insuficiência cardíaca"], ["palpitacoes", "Palpitações"], ["cr-fa", "Fibrilação atrial"], ["constipacao", "Constipação (megacólon)"], ["pn-1consulta", "Pré-natal"]]});
  AUG("in-esporotricose", {ir: [["celulite", "Celulite"], ["in-lt", "Leishmaniose tegumentar"], ["ferida", "Feridas"], ["pele-atlas", "Atlas de pele"]]});
  AUG("in-lt", {ir: [["in-esporotricose", "Esporotricose"], ["ferida", "Feridas"], ["pele-cancer", "Câncer de pele"], ["in-lv", "Leishmaniose visceral"]]});
  AUG("in-lv", {ir: [["febre-adulto", "Febre no adulto"], ["perda-peso", "Perda de peso"], ["in-hiv", "HIV (coinfecção)"], ["in-lt", "Leishmaniose tegumentar"], ["malaria", "Malária"]]});

  // Prevenção
  AUG("pv-checkup", {ir: [["pv-vacinas", "Vacinas"], ["pv-infecciosas", "HIV/sífilis/hepatites"], ["pv-nao-rastrear", "O que não rastrear"], ["cr-prediabetes", "Pré-diabetes"], ["cr-dislipidemia", "Dislipidemia"]]});
  AUG("pv-colorretal", {ir: [["dii-suspeita", "Suspeita de DII"], ["anemia-ferropriva", "Anemia ferropriva"], ["hemorroida", "Hemorroidas (sangramento)"], ["constipacao", "Mudança do hábito"], ["pv-checkup", "Check-up"]]});
  AUG("pv-pulmao", {ir: [["tabagismo", "Tabagismo"], ["cr-dpoc", "DPOC"], ["tosse-subaguda", "Tosse"], ["pv-checkup", "Check-up"]]});
  AUG("pv-nao-rastrear", {ir: [["pv-checkup", "Check-up do adulto"], ["ho-psa", "PSA"], ["pele-cancer", "Câncer de pele"], ["ho-escroto", "Nódulo testicular"]]});
  AUG("pv-infecciosas", {ir: [["hepatites-tr", "Teste rápido reagente"], ["hiv-diagnostico", "HIV reagente"], ["in-sifilis", "Sífilis"], ["in-hepatites", "Hepatites B e C"], ["in-prep", "PrEP"]]});
  AUG("pv-vacinas", {ir: [["pn-vacinas", "Gestante"], ["pu-vacinas", "Criança"], ["pv-checkup-idoso", "Idoso"], ["raiva", "Raiva"], ["febre-amarela", "Febre amarela"], ["sarampo", "Sarampo"]]});
  AUG("pv-alcool", {ir: [["cr-alcool", "Transtorno por uso de álcool"], ["abstinencia-alcool", "Abstinência"], ["po-substancias", "Álcool e outras drogas"], ["cr-masld", "Fígado"], ["cr-has", "HAS"]]});
  AUG("pv-checkup-idoso", {ir: [["cr-quedas", "Quedas"], ["cr-fragilidade", "Fragilidade"], ["cr-polifarmacia", "Polifarmácia"], ["cr-demencia", "Demência"], ["cr-osteoporose", "Osteoporose"]]});

  // Populações
  AUG("po-lgbt", {ir: [["po-trans", "Pessoas trans"], ["in-prep", "PrEP/PEP"], ["in-ist", "IST"], ["mu-colo", "Rastreio do colo"], ["ho-mental", "Saúde mental"]]});
  AUG("po-trans", {ir: [["po-lgbt", "Saúde LGBTQIAPN+"], ["cr-osteoporose", "Osteoporose"], ["tvp", "TVP (estrogênio)"], ["cr-dislipidemia", "Dislipidemia"], ["risco-suicida", "Risco de suicídio"]]});
  AUG("po-rua", {ir: [["tb-sr", "Sintomático respiratório"], ["in-tb", "Tuberculose"], ["escabiose", "Escabiose"], ["pediculose", "Pediculose"], ["po-substancias", "Álcool e drogas"], ["ferida", "Feridas"]]});
  AUG("po-substancias", {ir: [["cr-alcool", "Transtorno por uso de álcool"], ["cr-drogas", "Outras drogas"], ["abstinencia-alcool", "Abstinência alcoólica"], ["intoxicacao", "Intoxicação"], ["tabagismo", "Tabagismo"]]});
  AUG("po-pcd", {ir: [["cr-tea", "TEA"], ["cr-pos-avc", "Pós-AVC"], ["po-acamado", "Pessoa acamada"], ["po-violencia-vulneraveis", "Violência"]]});
  AUG("po-pobreza", {ir: [["pu-crescimento", "Crescimento infantil"], ["pu-alimentacao", "Alimentação"], ["po-vd", "Visita domiciliar"], ["pn-risco", "Gestante de risco"]]});
  AUG("po-migrantes", {ir: [["in-chagas", "Chagas"], ["malaria", "Malária"], ["in-tb", "Tuberculose"], ["pv-vacinas", "Vacinas"], ["pv-infecciosas", "Testagem"]]});
  AUG("po-idoso-vulneravel", {ir: [["cr-fragilidade", "Fragilidade"], ["cr-quedas", "Quedas"], ["po-violencia-vulneraveis", "Violência"], ["pv-checkup-idoso", "Check-up do idoso"], ["po-vd", "Visita domiciliar"]]});
  AUG("po-vd", {ir: [["po-acamado", "Pessoa acamada"], ["po-paliativos", "Cuidados paliativos"], ["po-idoso-vulneravel", "Idoso vulnerável"], ["pp-1semana", "Puérpera e RN"]]});
  AUG("po-acamado", {ir: [["ferida", "Feridas"], ["po-paliativos", "Cuidados paliativos"], ["cr-inapetencia", "Inapetência"], ["po-vd", "Visita domiciliar"], ["delirium", "Delirium"]]});
})();
