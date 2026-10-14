// ───────────── data36.js – Consultas guiadas de puericultura e puerpério (13/10/2026)
CONDICOES.unshift({
  id: "pu-guiada", modulo: "pu", nome: "Consulta de puericultura guiada pela idade", sistema: "Consulta guiada", risco: "moderado",
  ciap: "A98", cid: "Z00.1",
  tags: "puericultura consulta guiada idade criança lactente recém-nascido RN evolução SOAP crescimento peso PC desenvolvimento marcos caderneta vacinas suplementação ferro vitamina D triagens M-CHAT retorno",
  guia: {rotulo: "Consulta guiada", semLegenda: true, secoes: [{t: "Consulta de puericultura guiada pela idade", b: [{puwiz: 1}]}]},
  evid: {resumo: "Ferramenta de apoio que monta o plano e a evolução da consulta de puericultura a partir da data de nascimento, da antropometria, da alimentação, das triagens, dos marcos da Caderneta e dos sinais de alerta. O texto da evolução segue o modelo da usuária (Notion e Google Docs); vacinas, suplementos e marcos vêm das regras já verificadas do app (Calendário Nacional de Vacinação 2026, PNSF 2022, SBP 2026 e 2024, Caderneta da Criança 2025, M-CHAT-R/F, Memorando DAPS 1098/2026), não do texto antigo do modelo.", certeza: "Ferramenta de organização; ver a certeza em cada item vinculado", fontes: ["caderneta_crianca", "pni2026", "pnsf2022", "sbp_ferro2026", "sbp_vitd2024", "mchat", "guia_menor2", "betim_triagem2026", "remume"]},
  nv: ["Vitamina D: gotas por dose dependem da apresentação (conferir UI/gota)", "Polivitamínico da REMUME: dose a conferir na bula"],
  mudancas: ["Criado em 13/10/2026 a pedido da usuária: evolução de puericultura no modelo dela, montada pela idade.", "Vacinas do modelo do Notion (VPC10, meningo C aos 12 meses, esquemas antigos de COVID) e ferro 1 mg/kg dos 6 aos 24 meses foram substituídos pelo calendário 2026 e pelos ciclos do PNSF/SBP."]
});
CONDICOES.splice(CONDICOES.findIndex(c => c.id === "pn-guiada") + 1, 0, {
  id: "pp-guiada", modulo: "pn", nome: "Consulta de puerpério guiada", sistema: "Consulta guiada", risco: "moderado",
  ciap: "W18", cid: "Z39.2",
  tags: "puerpério puérpera consulta guiada pós-parto evolução SOAP puerpério tardio amamentação EPDS contracepção TOTG pré-eclâmpsia ferro lóquios",
  guia: {rotulo: "Consulta guiada", semLegenda: true, secoes: [{t: "Consulta de puerpério guiada", b: [{ppwiz: 1}]}]},
  evid: {resumo: "Ferramenta de apoio que monta o plano e a evolução da consulta puerperal a partir da data do parto e das alterações marcadas. A evolução segue o modelo 'Consulta de puerpério tardio' da usuária. Regras: Protocolo Pré-Natal e Puerpério de Betim 2024 (consulta entre 30 e 40 dias, TOTG 6–8 semanas após DMG ou RN ≥ 4.000 g, seguimento da pré-eclâmpsia, testes rápidos, CERSAM), PNSF 2022 (ferro até 3 meses), Caderneta da Gestante 2026 (sinais de alerta), EPDS (corte ≥ 10) e OMS MEC 2025 (contracepção na amamentação).", certeza: "Ferramenta de organização; ver a certeza em cada item vinculado", fontes: ["betim_pn2024", "pnsf2022", "caderneta2026", "epds_br", "mec_who2025", "consenso_dmg"]},
  nv: ["Noretisterona e medroxiprogesterona: doses a conferir na bula"],
  mudancas: ["Criado em 13/10/2026 a pedido da usuária, com o modelo de puerpério tardio dela."]
});
