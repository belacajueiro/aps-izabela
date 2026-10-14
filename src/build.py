# Monta index.html (artefato) e site/ (GitHub Pages) a partir das fontes desta pasta.
import os, re, glob, subprocess, sys
D = os.path.dirname(os.path.abspath(__file__)); os.chdir(D); os.makedirs('site', exist_ok=True)
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
