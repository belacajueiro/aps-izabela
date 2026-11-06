// Testes do módulo da Receita de Controle Especial (src/rce.js). Rodar: node --test src/tests/rce.test.js
const test = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const RCE = require(path.join(__dirname, '..', 'rce.js'));
const { extenso, validCPF, formatCPF, posologiaAuto, quantidadeTexto, analyzeItem, validateReceita, mergeRecords, addDaysISO, diffDaysISO, formatDose, normalize, renderSheet } = RCE.core;
const { BASE_CATALOG } = RCE;

test('extenso masculino', () => {
  assert.equal(extenso(1), 'um');
  assert.equal(extenso(21), 'vinte e um');
  assert.equal(extenso(60), 'sessenta');
  assert.equal(extenso(100), 'cem');
  assert.equal(extenso(101), 'cento e um');
  assert.equal(extenso(120), 'cento e vinte');
  assert.equal(extenso(180), 'cento e oitenta');
  assert.equal(extenso(200), 'duzentos');
  assert.equal(extenso(1000), 'mil');
  assert.equal(extenso(1001), 'mil e um');
  assert.equal(extenso(1100), 'mil e cem');
  assert.equal(extenso(1200), 'mil e duzentos');
  assert.equal(extenso(1230), 'mil duzentos e trinta');
  assert.equal(extenso(2001), 'dois mil e um');
});

test('extenso feminino', () => {
  assert.equal(extenso(1, true), 'uma');
  assert.equal(extenso(2, true), 'duas');
  assert.equal(extenso(22, true), 'vinte e duas');
  assert.equal(extenso(200, true), 'duzentas');
  assert.equal(extenso(2000, true), 'duas mil');
});

test('quantidadeTexto concorda gênero e número', () => {
  assert.equal(quantidadeTexto(180, 'comprimido'), '180 (cento e oitenta) comprimidos');
  assert.equal(quantidadeTexto(60, 'cápsula'), '60 (sessenta) cápsulas');
  assert.equal(quantidadeTexto(2, 'cápsula'), '2 (duas) cápsulas');
  assert.equal(quantidadeTexto(1, 'frasco'), '1 (um) frasco');
  assert.equal(quantidadeTexto(0, 'comprimido'), '');
});

test('CPF', () => {
  assert.equal(validCPF('529.982.247-25'), true);
  assert.equal(validCPF('52998224725'), true);
  assert.equal(validCPF('111.111.111-11'), false);
  assert.equal(validCPF('529.982.247-24'), false);
  assert.equal(validCPF(''), false);
  assert.equal(formatCPF('52998224725'), '529.982.247-25');
  assert.equal(formatCPF('5299'), '529.9');
});

test('formatDose', () => {
  assert.equal(formatDose(1), '1');
  assert.equal(formatDose(0.5), '1/2');
  assert.equal(formatDose(1.5), '1 e 1/2');
  assert.equal(formatDose(2), '2');
});

test('posologiaAuto', () => {
  const base = { dose: 1, vezes: 1, via: 'oral', unidade: 'comprimido', obs: 'pela manhã' };
  assert.equal(posologiaAuto(base), 'Tomar 1 comprimido, por via oral, 1 vez ao dia, pela manhã.');
  assert.equal(posologiaAuto({ ...base, dose: 2, vezes: 3, obs: '' }), 'Tomar 2 comprimidos, por via oral, 3 vezes ao dia.');
  assert.equal(posologiaAuto({ ...base, dose: 0.5, unidade: 'comprimido', obs: 'à noite.' }), 'Tomar 1/2 comprimido, por via oral, 1 vez ao dia, à noite.');
  assert.equal(posologiaAuto({ ...base, dose: 0 }), '');
});

test('limites de dias (60 geral, 180 anticonvulsivante/antiparkinsoniano)', () => {
  const sert = { unidade: 'comprimido', dose: 1, vezes: 1, quantidade: 180, longoPrazo: false };
  const a = analyzeItem(sert);
  assert.equal(a.dias, 180);
  assert.equal(a.max, 60);
  assert.equal(a.excede, true);
  assert.equal(analyzeItem({ ...sert, quantidade: 60 }).excede, false);
  assert.equal(analyzeItem({ ...sert, quantidade: 61 }).excede, true);
  assert.equal(analyzeItem({ ...sert, quantidade: 180, longoPrazo: true }).excede, false);
  assert.equal(analyzeItem({ ...sert, quantidade: 181, longoPrazo: true }).excede, true);
  assert.equal(analyzeItem({ ...sert, quantidade: 120, vezes: 2 }).dias, 60);
  assert.equal(analyzeItem({ ...sert, quantidade: 90, dose: 0.5, vezes: 1 }).dias, 180);
  // líquido sem duração: não calcula
  assert.equal(analyzeItem({ unidade: 'frasco', dose: 20, vezes: 2, quantidade: 1 }).semCalculo, true);
  assert.equal(analyzeItem({ unidade: 'frasco', quantidade: 1, diasManual: 90 }).excede, true);
  // ampolas
  assert.equal(analyzeItem({ unidade: 'ampola', quantidade: 6 }).excede, true);
  assert.equal(analyzeItem({ unidade: 'ampola', quantidade: 5 }).excede, false);
});

const okRx = () => ({
  patient: { nome: 'Fulano de Tal', cpf: '529.982.247-25', endereco: 'Rua A, 1' },
  emitente: { profNome: 'Fulana', crm: '123', crmUF: 'MG', cnes: '2125935' },
  issuedAt: '2026-11-04',
  justificativa: '',
  items: [{ catalogId: 'x', unidade: 'comprimido', dose: 1, vezes: 1, quantidade: 60, posologia: 'Tomar 1 comprimido.', longoPrazo: false }],
});

test('validateReceita: receita completa não tem erros', () => {
  const v = validateReceita(okRx(), '2026-11-04');
  assert.deepEqual(v.errors, []);
  assert.deepEqual(v.warnings, []);
});

test('validateReceita: excesso exige justificativa', () => {
  const rx = okRx();
  rx.items[0].quantidade = 180;
  let v = validateReceita(rx, '2026-11-04');
  assert.equal(v.errors.length, 1);
  assert.match(v.errors[0], /justificativa/i);
  assert.equal(v.warnings.length, 1);
  rx.justificativa = 'F32.1';
  v = validateReceita(rx, '2026-11-04');
  assert.deepEqual(v.errors, []);
});

test('validateReceita: campos obrigatórios e limite de 3 itens', () => {
  const rx = okRx();
  rx.patient = { nome: '', cpf: '', endereco: '' };
  rx.emitente = {};
  rx.items = [];
  const v = validateReceita(rx, '2026-11-04');
  assert.ok(v.errors.length >= 4);
  const rx2 = okRx();
  rx2.items = [rx2.items[0], rx2.items[0], rx2.items[0], rx2.items[0]];
  assert.ok(validateReceita(rx2, '2026-11-04').errors.some((e) => /até 3/.test(e)));
  const rx3 = okRx();
  rx3.patient = { nome: 'X', semCpf: true, endereco: 'Y' };
  assert.deepEqual(validateReceita(rx3, '2026-11-04').errors, []);
});

test('validateReceita: data antiga ou futura gera aviso', () => {
  const rx = okRx();
  rx.issuedAt = '2026-09-01';
  assert.ok(validateReceita(rx, '2026-11-04').warnings.some((w) => /vencida/.test(w)));
  rx.issuedAt = '2026-12-01';
  assert.ok(validateReceita(rx, '2026-11-04').warnings.some((w) => /futura/.test(w)));
});

test('datas', () => {
  assert.equal(addDaysISO('2026-11-04', 30), '2026-12-04');
  assert.equal(addDaysISO('2026-12-20', 30), '2027-01-19');
  assert.equal(diffDaysISO('2026-11-04', '2026-11-10'), 6);
});

test('mergeRecords: novo, mais recente e mais antigo', () => {
  const local = [{ id: 'a', updatedAt: '2026-01-02', v: 1 }, { id: 'b', updatedAt: '2026-01-05', v: 1 }];
  const incoming = [
    { id: 'a', updatedAt: '2026-01-03', v: 2 },   // mais novo -> atualiza
    { id: 'b', updatedAt: '2026-01-01', v: 0 },   // mais antigo -> ignora
    { id: 'c', updatedAt: '2026-01-04', v: 1 },   // novo -> adiciona
  ];
  const r = mergeRecords(local, incoming);
  assert.equal(r.added, 1);
  assert.equal(r.updated, 1);
  assert.equal(r.records.find((x) => x.id === 'a').v, 2);
  assert.equal(r.records.find((x) => x.id === 'b').v, 1);
  assert.equal(r.toWrite.length, 2);
});

test('catálogo base: ids únicos, campos válidos e nada de B1 por engano', () => {
  const ids = new Set();
  for (const m of BASE_CATALOG) {
    assert.ok(!ids.has(m.id), 'id duplicado ' + m.id);
    ids.add(m.id);
    assert.ok(m.dcb && m.concentracao && m.forma && m.unidade && m.via);
    assert.equal(m.via, 'oral');
    assert.ok(['C1', 'C5', 'A2'].includes(m.lista));
  }
  const nomes = new Set(BASE_CATALOG.map((m) => normalize(m.dcb)));
  for (const proibido of ['clonazepam', 'diazepam', 'bromazepam', 'alprazolam', 'fenobarbital', 'zolpidem', 'metilfenidato']) {
    assert.ok(!nomes.has(proibido), proibido + ' exige Notificação de Receita B/A, não RCE');
  }
  for (const esperado of ['sertralina', 'fluoxetina', 'amitriptilina', 'carbamazepina', 'haloperidol', 'risperidona', 'carbonato de litio']) {
    assert.ok(nomes.has(esperado), 'falta ' + esperado);
  }
  const longos = BASE_CATALOG.filter((m) => m.longoPrazo).map((m) => normalize(m.dcb));
  assert.ok(longos.includes('carbamazepina') && longos.includes('biperideno'));
  assert.ok(!longos.includes('sertralina'));
});

test('folha: 2 vias, itens numerados, via agrupada, sem "undefined"', () => {
  const rx = {
    patient: { nome: 'Maria Teste', cpf: '52998224725', endereco: 'Rua A, 1' },
    emitente: { orgName: 'PREFEITURA', unitName: 'UBS', profNome: 'Fulana', crm: '123', crmUF: 'MG', cns: '700', cnes: '1', endereco: 'X', cep: '3', telefone: '4' },
    issuedAt: '2026-11-05', justificativa: '',
    items: [
      { dcb: 'Sertralina', concentracao: '50 mg', unidade: 'comprimido', via: 'oral', quantidade: 30, posologia: 'Tomar 1 comprimido pela manhã.' },
      { dcb: 'Amitriptilina', concentracao: '25 mg', unidade: 'comprimido', via: 'oral', quantidade: 30, posologia: 'Tomar 1 comprimido à noite.' },
    ],
  };
  const h = renderSheet(rx, false);
  assert.equal((h.match(/RECEITA DE CONTROLE ESPECIAL/g) || []).length, 2);
  assert.match(h, /1ª VIA – RETENÇÃO PELA FARMÁCIA/);
  assert.match(h, /2ª VIA – PACIENTE/);
  assert.equal((h.match(/USO ORAL/g) || []).length, 2); // uma vez por via, não por item
  assert.match(h, /1\) SERTRALINA 50 mg/);
  assert.match(h, /2\) AMITRIPTILINA 25 mg/);
  assert.match(h, /30 \(trinta\) comprimidos/);
  assert.match(h, /529\.982\.247-25/);
  assert.ok(!/undefined|null|NaN/.test(h));
  assert.ok(!h.includes('<img'), 'sem logos quando showLogo=false');
  // "sem CPF" e HTML escapado
  rx.patient = { nome: '<i>ZZ</i>', semCpf: true, endereco: 'Y' };
  const h2 = renderSheet(rx, false);
  assert.match(h2, /NÃO POSSUI/);
  assert.ok(!h2.includes('<i>ZZ</i>') && h2.includes('&lt;i&gt;ZZ&lt;/i&gt;'));
});

test('folha segue os campos do modelo Anvisa v2 (rev. 13/03/2026)', () => {
  const rx = {patient: {nome: 'Maria', cpf: '52998224725', semCpf: false, endereco: 'Rua A, 1'}, emitente: {profNome: 'Dra X', crm: '1', crmUF: 'MG', cnes: '2125935', endereco: 'Rua B, 2 – Betim/MG'},
    issuedAt: '2026-11-05', items: [{catalogId: 'x', dcb: 'Sertralina', concentracao: '50 mg', unidade: 'comprimido', via: 'oral', quantidade: 30, posologia: 'Tomar 1 comprimido por dia.'}]};
  const h = RCE.core.renderSheet(rx, false);
  for (const t of ['IDENTIFICAÇÃO DO EMITENTE', 'IDENTIFICAÇÃO DO PACIENTE', 'CPF:', '529.982.247-25',
    'IDENTIFICAÇÃO DO COMPRADOR', 'CPF ou passaporte nº', 'ESTABELECIMENTO DISPENSADOR', 'CNPJ ou CNES', '05/11/2026'])
    assert.ok(h.includes(t), 'falta: ' + t);
  assert.ok(!h.includes('Órgão emissor') && !h.includes('RG:'), 'campos do modelo antigo não devem aparecer');
  for (const t of ['se estrangeiro', 'Identificação e assinatura do prescritor', 'Preenchimento opcional', 'Data de impressão', 'Lote e quantidade dispensada'])
    assert.ok(!h.includes(t), 'não deve aparecer: ' + t);
});

test('paciente estrangeiro: exige passaporte e a folha troca CPF por Passaporte nº', () => {
  const ok = okRx();
  ok.patient = {nome: 'John Smith', cpf: '', estrangeiro: true, passaporte: '', endereco: 'Rua A, 1'};
  assert.ok(RCE.core.validateReceita(ok).errors.some(e => /passaporte/i.test(e)));
  ok.patient.passaporte = 'ab 123-456';
  const v = RCE.core.validateReceita(ok);
  assert.ok(!v.errors.some(e => /passaporte|CPF/i.test(e)), v.errors.join(' | '));
  assert.equal(RCE.core.normPassaporte('ab 123-456'), 'AB123456');
  const h = RCE.core.renderSheet({...ok, items: [{catalogId: 'x', dcb: 'Sertralina', concentracao: '50 mg', unidade: 'comprimido', via: 'oral', quantidade: 30, posologia: 'Tomar 1 comprimido por dia.'}]}, false);
  assert.ok(h.includes('Passaporte nº:') && h.includes('AB123456'));
  assert.ok(!h.includes('NÃO POSSUI') && !/>CPF:</.test(h));
  // estrangeiro prevalece sobre "sem CPF"
  const w = {...okRx(), patient: {nome: 'X', semCpf: true, endereco: 'R', estrangeiro: true, passaporte: 'Z9'}};
  assert.ok(!RCE.core.validateReceita(w).errors.some(e => /CPF/i.test(e)));
});

test('data de emissão personalizada aparece na folha', () => {
  const rx = {...okRx(), issuedAt: '2026-12-24', items: [{catalogId: 'x', dcb: 'Sertralina', concentracao: '50 mg', unidade: 'comprimido', via: 'oral', quantidade: 30, posologia: 'Tomar 1 comprimido por dia.'}]};
  assert.ok(RCE.core.renderSheet(rx, false).includes('24/12/2026'));
});

test('tramadol/codeína (adendo A2): até 100 mg por dose; acima disso exige Notificação A', () => {
  const cat = RCE.BASE_CATALOG.filter(m => m.lista === 'A2');
  assert.ok(cat.length >= 6);
  const cod = cat.find(m => m.dcb === 'Codeína (fosfato)' && m.concentracao === '30 mg');
  const base = {patient: {nome: 'Maria', cpf: '52998224725', semCpf: false, endereco: 'Rua A'}, emitente: {profNome: 'X', crm: '1', crmUF: 'MG', cnes: '1'}, issuedAt: '2026-11-05'};
  const item = (dose, q) => ({catalogId: cod.id, dcb: cod.dcb, concentracao: cod.concentracao, unidade: 'comprimido', via: 'oral', lista: 'A2', mgUnidade: 30, dose, vezes: 3, quantidade: q, posologia: 'Tomar'});
  const ok = RCE.core.validateReceita({...base, items: [item(3, 270)]}, '2026-11-05');   // 90 mg/dose, 30 dias
  assert.equal(ok.errors.filter(e => /100 mg/.test(e)).length, 0);
  const ruim = RCE.core.validateReceita({...base, items: [item(4, 360)]}, '2026-11-05'); // 120 mg/dose
  assert.ok(ruim.errors.some(e => /Notificação de Receita A/.test(e)));
  const longo = RCE.core.validateReceita({...base, items: [item(1, 180)]}, '2026-11-05'); // 60 dias > 30
  assert.ok(longo.errors.some(e => /justificativa/i.test(e)));
});
