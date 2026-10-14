// ── data27.js – camada de acesso real (10/10/2026): Farmácia Popular e preço de mercado, além de RENAME/REMUME
Object.assign(FONTES, {
  sbd_dispensacao: {s: "SBD – dispensação no SUS (Farmácia Popular)", t: "Sociedade Brasileira de Diabetes. Diretriz: Dispensação de medicamentos e insumos para o tratamento do diabetes mellitus no SUS – Farmácia Popular: metformina 500/850 mg e 500 mg XR, glibenclamida 5 mg, insulinas NPH e regular e dapagliflozina 10 mg para DM2 com doença cardiovascular a partir de 65 anos (Portaria GM/MS nº 3.677/2022); gratuidade de 100% do elenco desde 14/02/2025; receita do SUS ou particular válida por 180 dias, retirada mensal (diretriz de sociedade).", f: "F", url: "https://diretriz.diabetes.org.br/dispensacao-de-medicamentos-e-insumos-para-o-tratamento-do-diabetes-mellitus-no-sus/"}
});
const FP_DAPA = " Farmácia Popular: dapagliflozina 10 mg gratuita para DM2 com doença cardiovascular a partir de 65 anos, com receita comum (sem LME) [F].";
CONDICOES.forEach(c => {
  if (["cr-dm2", "hiperglicemia", "cr-dac"].includes(c.id)) {
    if (c.idealsus && !/Farmácia Popular: dapagliflozina/.test(c.idealsus.sus)) c.idealsus.sus += FP_DAPA;
    if (c.idealsus) c.idealsus.ponte = "Antes de abrir a LME, veja se a pessoa tem DM2 + doença cardiovascular e ≥ 65 anos: nesse caso a dapagliflozina sai de graça na Farmácia Popular. " + c.idealsus.ponte;
    c.evid.fontes = c.evid.fontes || []; ["sbd_dispensacao", "fp_elenco2026"].forEach(k => { if (!c.evid.fontes.includes(k)) c.evid.fontes.push(k); });
    c.mudancas = c.mudancas || []; c.mudancas.push("Revisão 10/10/2026: acesso pela Farmácia Popular (dapagliflozina para DM2 + DCV ≥ 65 anos) acrescentado.");
  }
});
