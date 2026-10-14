import json,sys
DT = sys.argv[3] if len(sys.argv) > 3 else '09/10/2026'
B=json.load(open(sys.argv[1]))
for e in B:
    if e['u']=='np': e['u']='emb'
info={"data":DT,"fonte":"cmed_pmc2026","icms":"PMC com ICMS de Minas Gerais: 12% para genéricos e 18% para os demais"}
head=("""// v35 – Nomes no balcão: marcas, genéricos e preço-teto (PMC) da lista oficial CMED/ANVISA publicada em 09/10/2026.
// Gerado automaticamente da planilha lista_pmc__20261009 (gov.br/anvisa). Não editar à mão (tools/cmed_update.sh).
Object.assign(FONTES, {
  cmed_pmc2026: {s: "CMED – Lista de preços PMC (09/10/2026)", t: "Câmara de Regulação do Mercado de Medicamentos (CMED/ANVISA). Lista de Preços de Medicamentos – Preço Máximo ao Consumidor (PMC), publicada em 09/10/2026: substância, laboratório, nome do produto, apresentação, tipo (novo, genérico, similar, específico, biológico) e comercialização informada em 2025 (norma/regulatória).", f: "F", url: "https://www.gov.br/anvisa/pt-br/assuntos/medicamentos/cmed/precos"},
  icms_mg_med: {s: "Alíquota de ICMS de medicamentos em MG", t: "Simtax. Alíquotas de ICMS para medicamentos por estado (2025): Minas Gerais 18% (referência, similar e outros) e 12% (genéricos). Fonte secundária, usada só para escolher a coluna de PMC da lista CMED.", f: "F", url: "https://simtax.com.br/?p=56709"}
});
""").replace("09/10/2026", DT)
js=head+"const BALCAO_INFO = "+json.dumps(info,ensure_ascii=False)+";\nconst BALCAO = "+json.dumps(B,ensure_ascii=False,separators=(',',':'))+";\n"
open(sys.argv[2],'w').write(js); print(len(js), len(B))
