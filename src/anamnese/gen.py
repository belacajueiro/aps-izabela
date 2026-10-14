# Gera anwiz.js: painéis e construtores do AnamnesePro v4 + integração com o APS Betim
import json, os
os.chdir(os.path.dirname(os.path.abspath(__file__)))
panels=open('panels.html').read()
b=open('builders.js').read()
b=b.replace("function freeVal(id) { const el=document.getElementById('an-'+id); return el?el.value.trim():''; }","function freeVal(id) { return String(vals['an-'+id] || '').trim(); }")
b=b.replace("function pv(id) { const el=document.getElementById('an-'+id); return el?el.value.trim():''; }","function pv(id) { return String(vals['an-'+id] || '').trim(); }")
ui=open('anw_ui.js').read()
out="// ── Consulta guiada: AnamnesePro v4 integrado ao APS Betim (sem identificação e sem ditado). Nada é salvo.\nconst ANW = (() => {\nconst PANELS = "+json.dumps(panels,ensure_ascii=False)+";\n"+b+"\n"+ui
open(os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),'anwiz.js'),'w').write(out)
print(len(out))
