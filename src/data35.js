// ───────────── data35.js – Consulta de pré-natal guiada pela IG (13/10/2026)
CONDICOES.unshift({
  id: "pn-guiada", modulo: "pn", nome: "Consulta de pré-natal guiada pela IG", sistema: "Consulta guiada", risco: "moderado",
  ciap: "W78", cid: "Z34.9 / Z35.9",
  tags: "pré-natal consulta guiada idade gestacional IG DUM DPP evolução SOAP exames por trimestre vacinas AAS TOTG retorno plano gestante seguimento",
  guia: {rotulo: "Consulta guiada", semLegenda: true, secoes: [{t: "Consulta guiada pela IG", b: [{pnwiz: 1}]}]},
  evid: {resumo: "Ferramenta de apoio que monta o plano e a evolução da consulta de pré-natal a partir da IG, dos achados do dia, das condições marcadas e dos resultados de exames. As regras vêm do Protocolo Pré-Natal e Puerpério de Betim 2024 (com a retificação do cálcio de 30/09/2026), da Caderneta da Gestante 2026, da NT SES-MG 2024 de estratificação de risco, do Relatório CONITEC 1.126 (AAS), do PNSF 2022 e do PACK Brasil 2025. Detalhes, doses e evidência de cada tema estão nos itens específicos do módulo.", certeza: "Ferramenta de organização; ver a certeza em cada item vinculado", fontes: ["betim_pn2024", "betim_calcio2026", "caderneta2026", "sesmg_risco", "conitec_aas", "pnsf2022", "pack2025", "betim_cesarea2025"]},
  nv: [],
  mudancas: ["Criado em 13/10/2026 a pedido da usuária: consulta montada pela IG em vez de uma ficha por trimestre."]
});
