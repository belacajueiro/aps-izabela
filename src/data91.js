// ───────────── data91.js – v80 (03/11/2026): implante de etonogestrel – uso ampliado de 3 para 5 anos (ANVISA, out/2026).
// Origem: alerta da sentinela semanal de 02/11/2026; aplicado a pedido da usuária ("aplica a atualização do Implanon").
// Fontes abertas nesta revisão:
//  - ANVISA, notícia de 26/10/2026 "Anvisa aprova ampliação do uso do Implanon para cinco anos" (RE nº 4.184, de 22/10/2026):
//    eficácia aprovada de 3 para 5 anos de uso contínuo do mesmo implante; quem já usa pode estender até o novo limite, com
//    orientação médica; aprovada também a inserção imediatamente após o parto e após o aborto (1º e 2º trimestres).
//  - Organon, comunicado da aprovação do FDA (16/01/2026): estudo NCT04626596 (braço único, aberto, EUA, n = 399), Pearl Index
//    0,0 nos anos 4 e 5 (IC95% 0,00–0,69); IMC 17,2–64,3 (38,1% ≥ 30; 10,0% ≥ 40).
//  - NT Conjunta nº 51/2026 (MS, 05/03/2026): não fixa prazo de uso, troca ou reposição do implante (sem divergência com a norma do SUS).
//  - Bula do Implanon NXT transcrita em bula.com.br (página de 08/09/2026): ainda diz 3 anos e troca antecipada no sobrepeso
//    (texto anterior à RE 4.184/2026). A bula nova no Bulário ANVISA não foi aberta [NV].

Object.assign(FONTES, {
  anvisa_implanon5a: {s: "ANVISA 2026 – Implanon por 5 anos (RE 4.184/2026)", t: "Agência Nacional de Vigilância Sanitária. Anvisa aprova ampliação do uso do Implanon para cinco anos (notícia, 26/10/2026; Resolução RE nº 4.184, de 22/10/2026, DOU): período de eficácia contraceptiva do Implanon NXT (etonogestrel 68 mg) ampliado de três para cinco anos de uso contínuo do mesmo implante, com base em dados clínicos do 4º e 5º anos (sem gestações no estudo principal); quem já usa pode estender até o novo limite, com orientação médica; aprovada também a inserção imediatamente após o parto e após o aborto, inclusive de 1º e 2º trimestres (regulatória).", f: "F", url: "https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2026/anvisa-aprova-ampliacao-do-uso-do-implanon-para-cinco-anos"},
  nexplanon_5a_2026: {s: "Organon/FDA 2026 – etonogestrel por 5 anos (NCT04626596)", t: "Organon. Organon announces US FDA approval of supplemental NDA extending duration of use of NEXPLANON (etonogestrel implant 68 mg) – comunicado de 16/01/2026: uso por até 5 anos; estudo NCT04626596 multicêntrico, braço único, aberto, EUA, 399 mulheres (idade média 27 anos); Pearl Index nos anos 4 e 5 = 0,0 por 100 mulheres-ano (IC95% 0,00–0,69); IMC 17,2–64,3 kg/m² (média 29,4; 38,1% ≥ 30 e 10,0% ≥ 40). Comunicado do fabricante sobre estudo de braço único (sem comparador).", f: "F", url: "https://www.businesswire.com/news/home/20260116204496/en/Organon-Announces-US-Food-and-Drug-Administration-Approval-of-Supplemental-New-Drug-Application-Extending-Duration-of-Use-of-NEXPLANON-etonogestrel-implant-68-mg-Radiopaque"}
});

(() => {
  const get = id => { const c = CONDICOES.find(x => x.id === id); if (!c) throw new Error("v80: item ausente " + id); return c; };
  const MUD = "v80 (03/11/2026): ";
  const NOTA5 = "Implante de etonogestrel: uso de até 5 anos do mesmo implante (ANVISA, RE 4.184/2026, out/2026) [F]; quem já usa pode estender até 5 anos, com orientação médica [F]. Base: estudo de braço único sem gestações no 4º e 5º anos, com 38% das participantes com IMC ≥ 30 e 10% com IMC ≥ 40 [F]. A bula antiga (3 anos) mandava trocar antes no sobrepeso; a bula nova no Bulário ANVISA ainda não foi conferida [NV]. A NT 51/2026 do MS não fixa prazo de troca [F]; fluxo de troca em Betim [NV].";
  const addFontes = c => { c.evid = c.evid || {}; c.evid.fontes = [...new Set([...(c.evid.fontes || []), "anvisa_implanon5a", "nexplanon_5a_2026"])]; };

  // 1) Contracepção pós-parto – receita do implante
  {
    const c = get("pp-contracepcao");
    const r = (c.rx || []).find(x => /Implante de etonogestrel/.test(x.titulo));
    if (!r || !/validade de 3 anos/.test(r.texto)) throw new Error("v80: receita do implante em pp-contracepcao não encontrada");
    r.texto = r.texto
      .replace("validade de 3 anos.", "uso de até 5 anos (ANVISA, out/2026).")
      .replace("Pode ser inserido a qualquer momento no pós-parto, inclusive amamentando.", "Pode ser inserido a qualquer momento no pós-parto (inclusive logo após o parto), amamentando ou não, e logo após o aborto.");
    r.nota = r.nota + " " + NOTA5;
    if (c.guia && typeof c.guia.resumo === "string") {
      c.guia = JSON.parse(JSON.stringify(c.guia));
      c.guia.resumo = c.guia.resumo.replace("**Implante de etonogestrel** pode ser inserido **a qualquer momento**,", "**Implante de etonogestrel** (uso de **até 5 anos**, ANVISA 2026) pode ser inserido **a qualquer momento**, inclusive logo após o parto,");
    }
    addFontes(c);
    (c.mudancas = c.mudancas || []).push(MUD + "implante de etonogestrel com uso de até 5 anos e inserção imediata após parto e aborto (ANVISA, RE 4.184/2026); antes 'validade de 3 anos'.");
  }

  // 2) DIU e implante na APS (mu-larc) – orientação ao paciente, guia e nota
  {
    const c = get("mu-larc");
    if (!/\*\*Implante:\*\* até 3 anos\./.test(c.orient || "")) throw new Error("v80: orientação de mu-larc sem '3 anos'");
    c.orient = c.orient.replace("**Implante:** até 3 anos. Anote a data de validade.",
      "**Implante:** até 5 anos (desde outubro de 2026). Se você já tem implante, ele também pode ficar até 5 anos; converse com a equipe antes de trocar. Anote a data de colocação.");
    c.guia = JSON.parse(JSON.stringify(c.guia));
    const secoes = c.guia.secoes || [];
    const i = secoes.findIndex(s => /Antes da inserção/.test(s.t));
    const sec = {t: "Quanto tempo dura o implante (ANVISA, out/2026)", b: [
      {tab: {h: ["Situação", "Conduta"], r: [
        ["Implante novo", "Uso de até **5 anos** do mesmo implante [F]. Registrar a data de inserção e a data-limite (inserção + 5 anos)."],
        ["Já usa e completou 3 anos", "Pode manter até 5 anos, com orientação médica [F]. Trocar antes se a mulher preferir ou por intercorrência."],
        ["IMC ≥ 30", "O estudo dos anos 4 e 5 incluiu 38% com IMC ≥ 30 e 10% ≥ 40, sem gestações [F]. A bula antiga mandava trocar antes no sobrepeso; conferir o texto da bula nova [NV]."],
        ["Pós-parto e pós-aborto", "Inserção imediata aprovada pela ANVISA (após o parto e após aborto de 1º ou 2º trimestre) [F]."],
        ["Indutor enzimático (carbamazepina, fenitoína, rifampicina, efavirenz)", "A eficácia cai com indutores, independentemente do tempo de uso; método adicional ou troca de método [C]."]
      ]}, nota: "ANVISA, notícia de 26/10/2026 (RE 4.184/2026) [F]; estudo NCT04626596 (braço único, n = 399; Pearl Index 0,0 nos anos 4–5, IC95% 0–0,69) [F]. A NT 51/2026 do MS não fixa prazo de troca [F]. Fluxo de troca e retirada em Betim [NV]."},
      {ref: ["anvisa_implanon5a", "nexplanon_5a_2026", "implante_sus"]}
    ]};
    if (i >= 0) secoes.splice(i + 1, 0, sec); else secoes.push(sec);
    c.guia.secoes = secoes;
    c.P = (c.P || "").replace("validade (até ___)", "validade (até ___; implante: até 5 anos – ANVISA 2026)");
    addFontes(c);
    c.nv = [...(c.nv || []), "Bula nova do Implanon NXT no Bulário ANVISA (texto sobre IMC e troca); fluxo de troca do implante em Betim."];
    (c.mudancas = c.mudancas || []).push(MUD + "implante com uso de até 5 anos (ANVISA, RE 4.184/2026), inclusive para quem já usa; orientação ao paciente e guia atualizados (antes 3 anos).");
  }
})();
