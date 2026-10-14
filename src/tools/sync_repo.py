# Copia o site montado (raiz) e as fontes editáveis (src/) para o clone do repositório. Uso: python3 tools/sync_repo.py <pasta_do_repo>
import os, shutil, sys, re
D = os.path.dirname(os.path.dirname(os.path.abspath(__file__))); R = os.path.abspath(sys.argv[1])
for f in ['index.html', 'manifest.webmanifest', 'sw.js', 'icon-192.png', 'icon-512.png', 'robots.txt', 'fontes.json']:
    shutil.copy2(os.path.join(D, 'site', f), os.path.join(R, f))
if os.path.isdir(os.path.join(D, 'img')):
    if os.path.isdir(os.path.join(R, 'img')): shutil.rmtree(os.path.join(R, 'img'))
    shutil.copytree(os.path.join(D, 'img'), os.path.join(R, 'img'))
S = os.path.join(R, 'src')
# o estado do monitor é gravado pelas tarefas agendadas direto no repositório: o repositório manda nesses arquivos
RM = os.path.join(S, 'monitor')
if os.path.isdir(RM):
    for a in os.listdir(RM):
        if re.match(r'(estado.*\.json|sentinelas.*\.md)$', a): shutil.copy2(os.path.join(RM, a), os.path.join(D, 'monitor', a))
if os.path.isdir(S): shutil.rmtree(S)
fora = re.compile(r'(\.bak|\.v\d+.*\.bak.*|^check\.js$|^index\.html$|^guia\.(js|css)$|^anamnesepro_v4\.html$|__pycache__)')
for raiz, dirs, arqs in os.walk(D):
    rel = os.path.relpath(raiz, D)
    dirs[:] = [d for d in dirs if d not in ('site', 'bak13', 'img', '.git', '__pycache__')]
    for a in arqs:
        if fora.search(a) or 'bak' in a: continue
        dst = os.path.join(S, rel, a); os.makedirs(os.path.dirname(dst), exist_ok=True); shutil.copy2(os.path.join(raiz, a), dst)
print('src/ sincronizado')
