// ───────────── data89.js – monitor 2026-11 (01/11/2026): correção mecânica de links (só o campo url; sem texto clínico).
// pcdt_sop2019: o PDF saiu de /midias/protocolos/pcdt_sop.pdf; o mesmo documento (Portaria Conjunta nº 6, de 02/07/2019) está no novo endereço da CONITEC.
// ms_dengue_enf2026: o endereço antigo (.pdf) dá 404; o endereço sem .pdf no gov.br redireciona para a BVS-MS, mesma obra (Dengue: manual de enfermagem, 3ª ed. revisada, 2026).
if (FONTES["pcdt_sop2019"]) FONTES["pcdt_sop2019"].url = "https://www.gov.br/conitec/pt-br/midias/protocolos/pcdt-sindrome-dos-ovrios-policsticos.pdf"; // 01/11/2026
if (FONTES["ms_dengue_enf2026"]) FONTES["ms_dengue_enf2026"].url = "https://bvsms.saude.gov.br/bvs/publicacoes/dengue_manual_enfermagem_3ed_rev.pdf"; // 01/11/2026
