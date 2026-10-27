# Monta index.html (artefato) e site/ (GitHub Pages) a partir das fontes desta pasta.
import os, re, glob, subprocess, sys
D = os.path.dirname(os.path.abspath(__file__)); os.chdir(D); os.makedirs('site', exist_ok=True)
# Ferramentas usadas pelas tarefas agendadas (sentinela semanal e monitor mensal): o build falha se alguma sumir,
# para que um commit não as apague sem ninguém perceber (aconteceu com resumo_projeto.js no v39.2).
_falta = [f for f in ['tools/resumo_projeto.js', 'tools/sentinelas.py', 'tools/sync_repo.py', 'monitor/vigiar.json', 'monitor/resumo_projeto.json'] if not os.path.exists(os.path.join(D, f))]
if _falta: sys.exit('ERRO: ferramenta das tarefas agendadas ausente: ' + ', '.join(_falta) + ' (restaurar do histórico do git)')
def n(f):
    m = re.match(r'data(\d*)\.js$', os.path.basename(f)); return int(m.group(1) or 1)
files = sorted(glob.glob('data*.js'), key=n)
d = ''.join(open(f).read() for f in files)
open('check.js', 'w').write(d)
a = open('app.html').read()
w = ''.join(open(f).read() for f in ['pnwiz.js', 'puwiz.js', 'ppwiz.js', 'anwiz.js'])
open('index.html', 'w').write(a.replace('/*DATA*/', d, 1).replace('/*PNWIZ*/', w, 1))
subprocess.run([sys.executable, '-I', os.path.join(D, 'build_site.py')], check=True)
subprocess.run(['node', os.path.join(D, 'tools', 'manifest.js'), os.path.join(D, 'check.js'), os.path.join(D, 'site', 'fontes.json')], check=True)
print(len(files), 'arquivos de dados ·', os.path.getsize('index.html'), 'bytes')
