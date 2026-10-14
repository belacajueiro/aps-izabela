// ───────────── data38.js – Consulta guiada (AnamnesePro integrado) e evoluções sem idade (14/10/2026)
CONDICOES.unshift({
  id: "co-consulta", modulo: "co", nome: "Consulta guiada: anamnese, exame e conduta", sistema: "Consulta", risco: "baixo",
  ciap: "", cid: "",
  tags: "consulta anamnese AnamnesePro queixa principal HMA exame físico SOAP evolução renovação de receita apresentação de exames rotina comorbidades conduta receita",
  guia: {rotulo: "Consulta", semLegenda: true, secoes: [{t: "Consulta guiada", b: [{anwiz: 1}]}]},
  evid: {resumo: "Ferramenta de registro: o AnamnesePro v4 (painéis por queixa e por consulta programada, exame físico, exames e condutas) integrado ao APS Betim. A avaliação, o plano e a receita vêm da condição do APS que você marcar, com as fontes e rótulos de procedência daquela condição. A evolução não traz nome, idade nem sexo.", certeza: "Ferramenta de organização; ver a certeza em cada condição vinculada", fontes: []},
  nv: [],
  mudancas: ["Criado em 14/10/2026: AnamnesePro integrado como módulo Consulta, sem ditado e sem identificação do paciente."]
});
// Idade fora das evoluções: a usuária tem o prontuário completo; a idade só entra como dado de decisão (ex.: risco), nunca no cabeçalho do SOAP.
(function(){
  const re = /^(Paciente|Gestante|Puérpera|Lactente|Criança|Adolescente)(?:, | de )___ (?:anos\/meses|anos|meses),? ?(com |relata |vítima |picad[oa] |comparece )?/;
  CONDICOES.forEach(c => { if (typeof c.S !== "string") return; c.S = c.S.replace(/^Criança de ___ anos \(3 a 5\), /, "Criança (3 a 5 anos) "); const m = c.S.match(re); if (!m) return; c.S = c.S.replace(re, m[2] ? m[1] + " " + m[2] : m[1] + ", "); });
})();
(function(){
  const fix = s => s
    .replace(/^Puérpera\/gestante, ___ anos, /, "Puérpera/gestante, ")
    .replace(/Criança de ___ anos \(3 a 5\)/, "Criança (3 a 5 anos)")
    .replace(/\b(criança|mulher|Menino|Menina) de ___ (?:anos|meses)/g, "$1")
    .replace(/de mulher\b/, "da mulher")
    .replace(/^Idade ___(?: \| |\. )/, "");
  CONDICOES.forEach(c => ["S","O","A","P"].forEach(k => { if (typeof c[k] === "string") c[k] = fix(c[k]); }));
})();
