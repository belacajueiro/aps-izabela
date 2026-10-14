// ───────────── data41.js – v37: links quebrados das fontes corrigidos (checagem de 14/10/2026)
// Só endereços e notas de versão; conteúdo clínico alterado apenas na DPOC (PCDT 2025 final conferido: mesmas doses na exacerbação).
(function(){
  const F = FONTES, nota = (k, x) => { if (F[k]) F[k].t = F[k].t + " " + x; };
  const url = (k, u) => { if (F[k]) F[k].url = u; };

  url("caderneta2026", "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/saude-da-mulher/publicacoes/caderneta-brasileira-da-gestante.pdf");
  url("coelho_savassi", "https://rbmfc.org.br/rbmfc/article/view/104");
  url("mg_brca", "https://www.agenciaminas.mg.gov.br/noticia/governo-de-minas-passa-a-oferecer-teste-genetico-gratuito-para-deteccao-de-cancer-de-mama-e-de-ovario");
  url("ms_dengue", "https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/svsa/dengue/dengue-diagnostico-e-manejo-clinico-adulto-e-crianca");
  url("nt_raiva", "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/r/raiva/notas-tecnicas-e-informativas/nota-tecnica-no-8-2022-cgzv-deidt-svs-ms");
  url("pcdt_disl", "https://www.gov.br/saude/pt-br/assuntos/pcdt/d/dislipidemia");
  url("pcdt_tabaco", "https://www.gov.br/saude/pt-br/assuntos/pcdt/t/tabagismo");
  url("pni2026", "https://www.gov.br/saude/pt-br/composicao/svsa/pni/calendario-tecnico/calendario-tecnico-nacional-de-vacinacao-crianca");
  url("sbce_profilaxia2022", "https://doi.org/10.1055/s-0042-1756441");

  // PCDT Asma 2023: o texto integral está no Relatório de Recomendação nº 785 (a portaria isolada não traz o anexo)
  url("pcdt_asma2023", "https://www.gov.br/conitec/pt-br/midias/relatorios/2023/20230524_relatorio_pcdtasma_785_final.pdf/@@download/file");
  nota("pcdt_asma2023", "Texto do PCDT conferido no Relatório de Recomendação CONITEC nº 785 (2023). Substituído pelo PCDT 2026 no adulto; usado aqui só para a dose pediátrica de salbutamol, que o PCDT 2026 não detalha.");

  // Documentos retirados do ar e não localizados em outro endereço oficial
  url("febrasgo_rh", ""); nota("febrasgo_rh", "O link do fluxograma foi retirado do site da FEBRASGO e não foi localizado em outro endereço em 14/10/2026.");
  url("mg_hpv", ""); nota("mg_hpv", "O PDF da Agência Minas foi retirado do ar e não foi localizado em outro endereço em 14/10/2026.");

  // SBD: capítulos de 2022/2024 saíram do ar; a diretriz publicou versões 2026 – conteúdo do app ainda não reconferido
  url("sbd_metas", "https://diretriz.diabetes.org.br/metas-de-controle-glicemico/");
  if (F.sbd_metas){ F.sbd_metas.f = "NV"; nota("sbd_metas", "Capítulo substituído pela versão 2026 'Metas de controle glicêmico' (DOI 10.29327/5881296.2026-1); conferir se as metas do app mudaram."); }
  url("sbd_sus", "https://diretriz.diabetes.org.br/tratamento-do-dm2-no-sistema-unico-de-saude-sus/");
  if (F.sbd_sus){ F.sbd_sus.f = "NV"; nota("sbd_sus", "Capítulo substituído pela versão 2026 'Tratamento do DM2 no SUS' (DOI 10.29327/5937204.2026-1); conferir o conteúdo do app."); }

  // DPOC: PCDT final publicado (Portaria Conjunta SAES/SCTIE nº 29, de 27/11/2025)
  if (F.pcdt_dpoc2025){
    F.pcdt_dpoc2025.t = "Ministério da Saúde. PCDT da Doença Pulmonar Obstrutiva Crônica – Portaria Conjunta SAES/SCTIE nº 29, de 27/11/2025 (texto final conferido em 14/10/2026): classificação ABE; LAMA+LABA (tiotrópio+olodaterol 2,5+2,5 mcg; umeclidínio+vilanterol 62,5+25 mcg) e terapias triplas pelo CEAF; exacerbação: salbutamol 200–400 mcg (2–4 jatos) a cada 4–6 h até melhora, nebulização com salbutamol 2,5 mg (a cada 20 min nas primeiras horas, sob monitoramento), ipratrópio 40 mcg 3–4 vezes/dia (máx. 240 mcg/dia), prednisona ou prednisolona 40 mg/dia por 5 dias, estendendo a 10–14 dias se não melhorar no 5º dia (norma).";
    F.pcdt_dpoc2025.url = "https://www.gov.br/saude/pt-br/assuntos/pcdt/d/doenca-pulmonar-obstrutiva-cronica";
  }
  url("pcdt_dpoc", ""); nota("pcdt_dpoc", "Substituído pelo PCDT DPOC 2025 (Portaria Conjunta nº 29/2025).");
  const d = CONDICOES.find(c => c.id === "dpoc-exac");
  if (d){
    (d.rx || []).forEach(b => { if (b.nota && /PCDT DPOC 2021/.test(b.nota)) b.nota = "PCDT DPOC 2025 (Portaria Conjunta 29/2025, Quadro 6) [F]. Sem melhora no 5º dia, o PCDT admite estender a 10–14 dias [F]. Nebulização: salbutamol 2,5 mg a cada 4–6 h; na exacerbação, pode repetir a cada 20 min nas primeiras horas, sob monitoramento [F]."; });
    if (d.evid && d.evid.fontes) d.evid.fontes = d.evid.fontes.map(k => k === "pcdt_dpoc" ? "pcdt_dpoc2025" : k);
    (d.mudancas = d.mudancas || []).push("Revisão 14/10/2026: fonte atualizada para o PCDT DPOC 2025 final (Portaria Conjunta 29/2025); doses da exacerbação conferidas e mantidas; nebulização com salbutamol 2,5 mg.");
  }
})();
