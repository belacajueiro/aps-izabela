// Gera site/fontes.json: inventário das fontes (FONTES) e de onde cada uma é usada – lido pelo monitor de atualizações.
const fs = require('fs'), vm = require('vm');
const [, , src, out] = process.argv;
const ctx = {}; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(src, 'utf8') + ';this.C=CONDICOES;this.F=FONTES;' + (/(^|\n)const BALCAO_INFO/.test(fs.readFileSync(src,'utf8')) ? 'this.BI=BALCAO_INFO;' : ''), ctx);
const uso = {};
const walk = (o, id) => { if (!o || typeof o !== 'object') return;
  if (Array.isArray(o.fontes)) o.fontes.forEach(k => (uso[k] = uso[k] || new Set()).add(id));
  if (Array.isArray(o.ref)) o.ref.forEach(k => (uso[k] = uso[k] || new Set()).add(id));
  for (const k in o) if (k !== 'fontes' && k !== 'ref') walk(o[k], id); };
ctx.C.forEach(c => walk(c, c.id));
const ano = t => { const m = String(t || '').match(/\b(19|20)\d{2}\b/g); return m ? Math.max(...m.map(Number)) : null; };
const fontes = Object.entries(ctx.F).map(([k, f]) => ({k, s: f.s || '', t: f.t || '', f: f.f || '', url: f.url || '', ano: ano((f.s || '') + ' ' + (f.t || '')), usado_em: [...(uso[k] || [])].sort()}));
const itens = ctx.C.map(c => ({id: c.id, nome: c.nome, modulo: c.modulo || 'de', nv: (c.nv || []).length, fontes: [...new Set((c.evid && c.evid.fontes) || [])]}));
const res = {gerado: new Date().toISOString(), cmed: ctx.BI || null, n_fontes: fontes.length, n_itens: itens.length,
  sem_url: fontes.filter(f => !f.url).map(f => f.k), nao_conferidas: fontes.filter(f => f.f !== 'F').map(f => f.k), fontes, itens};
fs.writeFileSync(out, JSON.stringify(res, null, 1));
console.log('fontes.json:', fontes.length, 'fontes,', itens.length, 'itens,', res.sem_url.length, 'sem URL,', res.nao_conferidas.length, 'não conferidas');
