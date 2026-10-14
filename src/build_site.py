# Gera a versão independente do Claude: site/index.html (+ manifest, sw.js, ícones)
import json, re, os
D = os.path.dirname(os.path.abspath(__file__))
src = open(os.path.join(D,'index.html')).read()
i = src.index('</style>') + len('</style>')
head, body = src[:i], src[i:]
head = head.replace('<title>APS Betim – SOAP</title>', '<title>APS Betim – SOAP</title>\n<meta name="robots" content="noindex, nofollow">\n<meta name="theme-color" content="#0b6b5d">\n<link rel="manifest" href="manifest.webmanifest">\n<link rel="icon" href="icon-192.png">\n<link rel="apple-touch-icon" href="icon-192.png">\n<meta name="apple-mobile-web-app-capable" content="yes">', 1)
# banco local: mesmo formato do banco do artefato, guardado neste navegador
shim = r'''<script>
(function(){
  if (window.claude) return;
  var K = "aps.db.";
  function rd(c){ try { return JSON.parse(localStorage.getItem(K + c) || "{}"); } catch(e){ return {}; } }
  var subs = {};
  function snap(c){ var o = rd(c); return {docs: Object.keys(o).map(function(id){ return {id: id, exists: true, data: function(){ return o[id]; }}; })}; }
  function emit(c){ (subs[c] || []).forEach(function(f){ try { f(snap(c)); } catch(e){} }); }
  function wr(c, o){ localStorage.setItem(K + c, JSON.stringify(o)); emit(c); }
  var db = {collection: function(c){ return {
    onSnapshot: function(cb){ (subs[c] = subs[c] || []).push(cb); setTimeout(function(){ cb(snap(c)); }, 0); return function(){}; },
    doc: function(id){ return {
      set: function(v){ var o = rd(c); o[id] = v; wr(c, o); return Promise.resolve(); },
      delete: function(){ var o = rd(c); delete o[id]; wr(c, o); return Promise.resolve(); }
    }; }
  }; }};
  try { localStorage.setItem(K + "t", "1"); localStorage.removeItem(K + "t"); window.claude = {use: function(n){ return Promise.resolve(n === "db" ? db : null); }, local: true}; } catch(e){}
  if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) window.addEventListener("load", function(){ navigator.serviceWorker.register("sw.js").catch(function(){}); });
})();
</script>'''
body = body.replace('$("#dbstate").textContent = "Suas edições ficam salvas nesta página.";', '$("#dbstate").textContent = window.claude.local ? "Suas edições ficam salvas neste navegador (não sincronizam entre aparelhos)." : "Suas edições ficam salvas nesta página.";', 1)
out = '<!doctype html>\n<html lang="pt-BR">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n' + head + '\n' + shim + '\n</head>\n<body>\n' + body + '\n</body>\n</html>\n'
assert out.count('window.claude.local') == 1
open(os.path.join(D,'site','index.html'), 'w').write(out)
ver = re.search(r'revisão (\d\d/\d\d/\d{4})', src)
open(os.path.join(D,'site','manifest.webmanifest'), 'w').write(json.dumps({"name": "APS Betim – SOAP", "short_name": "APS Betim", "start_url": "./", "scope": "./", "display": "standalone", "background_color": "#ffffff", "theme_color": "#0b6b5d", "lang": "pt-BR", "icons": [{"src": "icon-192.png", "sizes": "192x192", "type": "image/png"}, {"src": "icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any maskable"}]}, ensure_ascii=False, indent=1))
import hashlib
h = hashlib.sha1(out.encode()).hexdigest()[:10]
open(os.path.join(D,'site','sw.js'), 'w').write('''// cache para funcionar sem internet; a versão muda a cada publicação
const V = "aps-%s";
const F = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png"];
self.addEventListener("install", e => { self.skipWaiting(); e.waitUntil(caches.open(V).then(c => c.addAll(F))); });
self.addEventListener("activate", e => e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== V).map(x => caches.delete(x)))).then(() => self.clients.claim())));
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const u = new URL(e.request.url);
  if (u.origin === location.origin) e.respondWith(fetch(e.request).then(r => { const c = r.clone(); caches.open(V).then(x => x.put(e.request, c)); return r; }).catch(() => caches.match(e.request).then(r => r || caches.match("index.html"))));
});
''' % h)
from PIL import Image, ImageDraw, ImageFont
for s in (192, 512):
    im = Image.new('RGB', (s, s), '#0b6b5d'); d = ImageDraw.Draw(im)
    w = s * 0.14; c = s / 2; L = s * 0.27
    d.rounded_rectangle([c - w, c - L, c + w, c + L], radius=w * 0.35, fill='white')
    d.rounded_rectangle([c - L, c - w, c + L, c + w], radius=w * 0.35, fill='white')
    im.save(os.path.join(D,'site','icon-%d.png' % s))
open(os.path.join(D,'site','robots.txt'), 'w').write('User-agent: *\nDisallow: /\n')
print('ok', len(out), h)
