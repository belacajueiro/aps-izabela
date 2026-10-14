# Sentinelas do monitor de atualizações.
# 1) Visita as páginas de monitor/vigiar.json e acusa documentos novos (links) ou conteúdo alterado.
# 2) Confere se as URLs das fontes do app (site/fontes.json) ainda respondem e se mudaram (ETag/Last-Modified/tamanho).
# Compara com monitor/estado.json (estado do mês anterior), grava o novo estado e escreve monitor/sentinelas.md.
# Uso: python3 tools/sentinelas.py  [--sem-fontes]
import json, os, re, sys, hashlib, html, urllib.request, urllib.parse, datetime, concurrent.futures as cf
D = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
M = os.path.join(D, 'monitor')
UA = {'User-Agent': 'Mozilla/5.0 (monitor APS Betim)'}

def get(url, limite=6_000_000, cab_so=False):
    req = urllib.request.Request(url, headers=UA, method='HEAD' if cab_so else 'GET')
    try:
        with urllib.request.urlopen(req, timeout=40) as r:
            corpo = b'' if cab_so else r.read(limite)
            return {'st': r.status, 'final': r.geturl(), 'etag': r.headers.get('ETag', ''), 'lm': r.headers.get('Last-Modified', ''), 'tam': r.headers.get('Content-Length', ''), 'tipo': r.headers.get('Content-Type', ''), 'corpo': corpo}
    except urllib.error.HTTPError as e:
        return {'st': e.code, 'erro': str(e)}
    except Exception as e:
        return {'st': 0, 'erro': type(e).__name__ + ': ' + str(e)[:120]}

def texto(b):
    s = b.decode('utf-8', 'ignore')
    s = re.sub(r'(?is)<(script|style|noscript|header|footer|nav)[^>]*>.*?</\1>', ' ', s)
    s = re.sub(r'(?s)<[^>]+>', ' ', s); s = html.unescape(s)
    s = re.sub(r'\d{1,2}h\d{2}|\d{2}/\d{2}/\d{4} \d{2}h\d{2}', '', s)  # horários de "atualizado em"
    return re.sub(r'\s+', ' ', s).strip()

def links(b, base, padrao):
    s = b.decode('utf-8', 'ignore'); out = set()
    for h in re.findall(r'href="([^"#]+)"', s):
        u = urllib.parse.urljoin(base, html.unescape(h))
        if not padrao or re.search(padrao, u, re.I): out.add(u)
    return sorted(out)

def main():
    hoje = datetime.date.today().isoformat()
    est_p = os.path.join(M, 'estado.json')
    ant = json.load(open(est_p)) if os.path.exists(est_p) else {'paginas': {}, 'fontes': {}, 'data': None}
    vig = json.load(open(os.path.join(M, 'vigiar.json')))['paginas']
    novo = {'data': hoje, 'paginas': {}, 'fontes': {}}
    rel = [f'# Sentinelas – {hoje}', '', f'Estado anterior: {ant.get("data") or "nenhum (primeira execução: só cria a linha de base)"}', '', '## Páginas vigiadas', '']
    for p in vig:
        r = get(p['url'])
        a = ant['paginas'].get(p['id'], {})
        if r['st'] == 200 and p.get('paginar'):
            extra = b''; n = p['paginar']
            for k in range(1, 20):
                g = get(p['url'] + ('&' if '?' in p['url'] else '?') + 'b_start:int=%d' % (k * n))
                if g['st'] != 200 or not links(g['corpo'], g['final'], p.get('docs')): break
                extra += g['corpo']
            r['corpo'] += extra
        if r['st'] != 200:
            rel.append(f"- ⚠ **{p['nome']}** – não abriu ({r['st']} {r.get('erro','')}). {p['url']}"); novo['paginas'][p['id']] = a; continue
        b = r['corpo']; pdf = r['tipo'].startswith('application/pdf') or p['url'].lower().endswith('.pdf')
        h = hashlib.sha1(b if pdf else texto(b).encode()).hexdigest()[:16]
        lk = [] if pdf else links(b, r['final'], p.get('docs'))
        novo['paginas'][p['id']] = {'hash': h, 'links': lk, 'tam': len(b)}
        if not a:
            rel.append(f"- {p['nome']}: linha de base criada ({len(lk)} links)."); continue
        add = [u for u in lk if u not in set(a.get('links', []))]; rem = [u for u in a.get('links', []) if u not in set(lk)]
        if add or rem or h != a.get('hash'):
            rel.append(f"- 🔔 **{p['nome']}** mudou" + (f" – {p['acao']}" if p.get('acao') else '') + f". {p['url']}")
            rel += [f"  - novo: {u}" for u in add[:25]] + [f"  - saiu: {u}" for u in rem[:10]]
            if not add and not rem: rel.append('  - (texto da página mudou; nenhum link novo de documento)')
        else:
            rel.append(f"- {p['nome']}: sem mudança.")
    if '--sem-fontes' not in sys.argv:
        man = json.load(open(os.path.join(D, 'site', 'fontes.json')))
        alvo = {f['k']: f['url'] for f in man['fontes'] if f['url'].startswith('http')}
        def ver(item):
            k, u = item; r = get(u, cab_so=True)
            if r['st'] in (403, 405, 0) or (r['st'] == 200 and not (r.get('etag') or r.get('lm') or r.get('tam'))):
                g = get(u, limite=3_000_000)
                if g['st'] == 200: return k, {'st': 200, 'h': hashlib.sha1(g['corpo']).hexdigest()[:16], 'url': u}
                return k, {'st': g['st'], 'url': u}
            return k, {'st': r['st'], 'etag': r.get('etag', ''), 'lm': r.get('lm', ''), 'tam': r.get('tam', ''), 'url': u}
        with cf.ThreadPoolExecutor(12) as ex:
            res = dict(ex.map(ver, alvo.items()))
        novo['fontes'] = res
        quebr = [k for k, v in res.items() if v['st'] in (404, 410)]
        bloq = [k for k, v in res.items() if v['st'] not in (200, 404, 410)]
        mud = [k for k, v in res.items() if k in ant['fontes'] and v['st'] == 200 and ant['fontes'][k].get('st') == 200 and k not in bloq and
               any(v.get(x) and ant['fontes'][k].get(x) and v[x] != ant['fontes'][k][x] for x in ('etag', 'lm', 'tam', 'h'))]
        uso = {f['k']: f['usado_em'] for f in man['fontes']}
        rel += ['', f'## Fontes do app ({len(res)} com URL; {len(man["sem_url"])} sem URL; {len(man["nao_conferidas"])} não conferidas)', '']
        rel += [f"- ⚠ **{k}** link quebrado ({res[k]['st']}) – documento mudou de endereço ou foi retirado; usada em {', '.join(uso.get(k, [])[:6]) or '—'}: {res[k]['url']}" for k in sorted(quebr)] or ['- Nenhum link quebrado (404).']
        if bloq: rel.append(f"- Não verificáveis daqui (bloqueio do site, limite ou tempo esgotado – conferir pela busca web se necessário): {', '.join(sorted(bloq))}.")
        rel += [f"- 🔔 **{k}** mudou desde {ant['data']} – usada em {', '.join(uso.get(k, [])[:6])}: {res[k]['url']}" for k in sorted(mud)]
        if ant['fontes'] and not mud: rel.append('- Nenhuma fonte com sinal de nova versão (ETag/data/tamanho).')
    else:
        novo['fontes'] = ant.get('fontes', {})
    json.dump(novo, open(est_p, 'w'), ensure_ascii=False, indent=0)
    open(os.path.join(M, 'sentinelas.md'), 'w').write('\n'.join(rel) + '\n')
    print('\n'.join(rel))

if __name__ == '__main__':
    main()
