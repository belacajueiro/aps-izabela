// ── Receita de Controle Especial (2 vias, A4 paisagem) ───────────────────────────────────────────
// Gera o papel para impressão e assinatura manual (Portaria SVS/MS 344/98, listas C1 e C5; RDC 1.000/2025).
// NÃO emite receita eletrônica (exige plataforma integrada ao SNCR e assinatura ICP-Brasil).
// Privacidade: pacientes, receitas e seus dados de emitente ficam SÓ no IndexedDB deste navegador.
// Não usam o banco "window.claude" do app nem vão a servidor algum; o arquivo de backup é manual.
// Origem: app belacajueiro/receituario-especial (mesma lógica e mesmo layout), adaptado a este app.
// Regras e catálogo ainda com itens [NV] (ver app-aps/pendencias-do-app.md): conferir antes de usar.
const RCE = (() => {
  // ═════════════════════════ núcleo (funções puras; testadas em tests/rce.test.js) ═════════════════════════
  const uuid = () => (globalThis.crypto && crypto.randomUUID) ? crypto.randomUUID()
    : 'id-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 10);
  const nowISO = () => new Date().toISOString();
  function todayISO(d = new Date()) {
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }
  function formatDateBR(iso) { if (!iso) return ''; const [y, m, d] = iso.split('-'); return `${d}/${m}/${y}`; }
  function addDaysISO(iso, n) { const [y, m, d] = iso.split('-').map(Number); return new Date(Date.UTC(y, m - 1, d + n)).toISOString().slice(0, 10); }
  function diffDaysISO(a, b) {
    const [y1, m1, d1] = a.split('-').map(Number); const [y2, m2, d2] = b.split('-').map(Number);
    return Math.round((Date.UTC(y2, m2 - 1, d2) - Date.UTC(y1, m1 - 1, d1)) / 86400000);
  }
  const onlyDigits = s => (s || '').replace(/\D/g, '');
  function formatCPF(s) {
    const d = onlyDigits(s).slice(0, 11);
    if (d.length <= 3) return d;
    if (d.length <= 6) return `${d.slice(0, 3)}.${d.slice(3)}`;
    if (d.length <= 9) return `${d.slice(0, 3)}.${d.slice(3, 6)}.${d.slice(6)}`;
    return `${d.slice(0, 3)}.${d.slice(3, 6)}.${d.slice(6, 9)}-${d.slice(9)}`;
  }
  function validCPF(s) {
    const d = onlyDigits(s);
    if (d.length !== 11 || /^(\d)\1{10}$/.test(d)) return false;
    const calc = len => { let sum = 0; for (let i = 0; i < len; i++) sum += Number(d[i]) * (len + 1 - i); const r = (sum * 10) % 11; return r === 10 ? 0 : r; };
    return calc(9) === Number(d[9]) && calc(10) === Number(d[10]);
  }
  const normalize = s => (s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/\s+/g, ' ').trim();
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]));
  const slug = s => normalize(s).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

  // número por extenso (pt-BR)
  const UN_M = ['zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'];
  const UN_F = [...UN_M]; UN_F[1] = 'uma'; UN_F[2] = 'duas';
  const DEZ = ['', '', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'];
  const CEN_M = ['', 'cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos'];
  const CEN_F = ['', 'cento', 'duzentas', 'trezentas', 'quatrocentas', 'quinhentas', 'seiscentas', 'setecentas', 'oitocentas', 'novecentas'];
  function ate999(n, fem) {
    if (n === 0) return '';
    if (n === 100) return 'cem';
    const c = Math.floor(n / 100), r = n % 100, parts = [];
    if (c) parts.push((fem ? CEN_F : CEN_M)[c]);
    if (r) {
      if (r < 20) parts.push((fem ? UN_F : UN_M)[r]);
      else { const d = Math.floor(r / 10), u = r % 10; parts.push(DEZ[d] + (u ? ' e ' + (fem ? UN_F : UN_M)[u] : '')); }
    }
    return parts.join(' e ');
  }
  function extenso(n, fem = false) {
    n = Math.trunc(Number(n));
    if (!Number.isFinite(n) || n < 0 || n > 999999) return '';
    if (n === 0) return 'zero';
    const mil = Math.floor(n / 1000), resto = n % 1000;
    let out = '';
    if (mil) out = mil === 1 ? 'mil' : ate999(mil, fem) + ' mil';
    if (resto) { const r = ate999(resto, fem); if (out) out += (resto < 100 || resto % 100 === 0) ? ' e ' + r : ' ' + r; else out = r; }
    return out;
  }

  // unidades, vias e posologia
  const UNIDADES = {
    'comprimido': {s: 'comprimido', p: 'comprimidos', fem: false, contavel: true},
    'cápsula': {s: 'cápsula', p: 'cápsulas', fem: true, contavel: true},
    'adesivo': {s: 'adesivo', p: 'adesivos', fem: false, contavel: true},
    'ampola': {s: 'ampola', p: 'ampolas', fem: true, contavel: true},
    'gota': {s: 'gota', p: 'gotas', fem: true, contavel: false},
    'mL': {s: 'mL', p: 'mL', fem: false, contavel: false},
    'frasco': {s: 'frasco', p: 'frascos', fem: false, contavel: false},
    'caixa': {s: 'caixa', p: 'caixas', fem: true, contavel: false},
  };
  const unidadeInfo = u => UNIDADES[u] || {s: u || 'unidade', p: u || 'unidades', fem: false, contavel: false};
  const VIAS = {
    'oral': {verbo: 'Tomar', frase: 'por via oral'}, 'sublingual': {verbo: 'Tomar', frase: 'por via sublingual'},
    'intramuscular': {verbo: 'Aplicar', frase: 'por via intramuscular'}, 'subcutânea': {verbo: 'Aplicar', frase: 'por via subcutânea'},
    'intravenosa': {verbo: 'Administrar', frase: 'por via intravenosa'}, 'tópica': {verbo: 'Aplicar', frase: 'por via tópica'},
    'transdérmica': {verbo: 'Aplicar', frase: 'por via transdérmica'}, 'retal': {verbo: 'Usar', frase: 'por via retal'},
    'inalatória': {verbo: 'Inalar', frase: 'por via inalatória'}, 'nasal': {verbo: 'Usar', frase: 'por via nasal'},
    'oftálmica': {verbo: 'Usar', frase: 'por via oftálmica'}, 'vaginal': {verbo: 'Usar', frase: 'por via vaginal'},
  };
  function formatDose(d) {
    d = Number(d);
    if (!d || d < 0) return '';
    const int = Math.floor(d), frac = Math.round((d - int) * 100) / 100, map = {0.25: '1/4', 0.5: '1/2', 0.75: '3/4'};
    if (frac === 0) return String(int);
    if (map[frac]) return int ? `${int} e ${map[frac]}` : map[frac];
    return String(d).replace('.', ',');
  }
  function posologiaAuto(item) {
    const d = Number(item.dose) || 0, vz = Number(item.vezes) || 0;
    if (!d || !vz) return '';
    const v = VIAS[item.via] || {verbo: 'Usar', frase: `por via ${item.via || ''}`.trim()};
    const un = unidadeInfo(item.unidade);
    const doseTxt = `${formatDose(d)} ${d > 1 ? un.p : un.s}`;
    const freq = vz === 1 ? '1 vez ao dia' : `${vz} vezes ao dia`;
    const obs = (item.obs || '').trim().replace(/[.\s]+$/, '');
    return `${v.verbo} ${doseTxt}, ${v.frase}, ${freq}${obs ? ', ' + obs : ''}.`;
  }
  function quantidadeTexto(n, unidade) {
    n = Math.trunc(Number(n));
    if (!Number.isFinite(n) || n <= 0) return '';
    const un = unidadeInfo(unidade);
    return `${n} (${extenso(n, un.fem)}) ${n === 1 ? un.s : un.p}`;
  }

  // limites da Receita de Controle Especial (RDC 1.000/2025 — conferir a norma vigente)
  const LIMITE_DIAS = 60, LIMITE_DIAS_LONGO = 180, LIMITE_DIAS_A2 = 30, LIMITE_MG_A2 = 100, LIMITE_AMPOLAS = 5, VALIDADE_DIAS = 30, MAX_ITENS = 3;
  function analyzeItem(item) {
    const max = item.lista === 'A2' ? LIMITE_DIAS_A2 : item.longoPrazo ? LIMITE_DIAS_LONGO : LIMITE_DIAS;
    const q = Number(item.quantidade), manual = Number(item.diasManual), un = unidadeInfo(item.unidade);
    let dias = null, origem = null;
    if (Number.isFinite(manual) && manual > 0) { dias = Math.ceil(manual); origem = 'manual'; }
    else if (un.contavel && q > 0 && Number(item.dose) > 0 && Number(item.vezes) > 0) { dias = Math.ceil(q / (Number(item.dose) * Number(item.vezes))); origem = 'auto'; }
    let excede = false;
    if (item.unidade === 'ampola') excede = q > LIMITE_AMPOLAS;
    else if (dias != null) excede = dias > max;
    return {dias, origem, max, excede, semCalculo: dias == null && q > 0 && item.unidade !== 'ampola'};
  }
  const emitenteCompleto = s => !!(s && s.profNome && s.crm && s.crmUF);
  function validateReceita(rx, hoje) {
    const errors = [], warnings = [], p = rx.patient || {};
    if (!p.nome || !p.nome.trim()) errors.push('Informe o nome completo do paciente.');
    if (!p.endereco || !p.endereco.trim()) errors.push('Informe o endereço completo do paciente.');
    if (!p.semCpf) {
      if (!onlyDigits(p.cpf)) errors.push('Informe o CPF do paciente (ou marque “paciente sem CPF”).');
      else if (!validCPF(p.cpf)) warnings.push('O CPF informado não passa na verificação dos dígitos. Confira antes de imprimir.');
    }
    if (rx.emitente && !(rx.emitente.cnes || '').trim()) warnings.push('Informe o CNES (ou CNPJ) da unidade em Configurações: o modelo da Anvisa pede CNPJ ou CNES do emitente institucional.');
    if (!emitenteCompleto(rx.emitente)) errors.push('Complete seus dados na aba Configurações (nome, CRM e UF).');
    const items = rx.items || [];
    if (!items.length) errors.push('Adicione ao menos um medicamento.');
    if (items.length > MAX_ITENS) errors.push(`A Receita de Controle Especial aceita até ${MAX_ITENS} substâncias.`);
    let precisaJustificativa = false;
    items.forEach((it, i) => {
      const n = i + 1;
      if (!it.catalogId) { errors.push(`Medicamento ${n}: escolha o medicamento e a apresentação no catálogo.`); return; }
      if (!(Number(it.quantidade) > 0)) errors.push(`Medicamento ${n}: informe a quantidade.`);
      if (!it.posologia || !it.posologia.trim()) errors.push(`Medicamento ${n}: a posologia está vazia.`);
      if (it.lista === 'A2') {
        const mg = (Number(it.dose) || 0) * (Number(it.mgUnidade) || 0);
        if (!it.mgUnidade) warnings.push(`Medicamento ${n}: confirme que a dose por tomada não passa de ${LIMITE_MG_A2} mg do opioide; acima disso a norma exige Notificação de Receita A (amarela).`);
        else if (mg > LIMITE_MG_A2) errors.push(`Medicamento ${n}: a dose por tomada (${String(mg).replace('.', ',')} mg do opioide) passa de ${LIMITE_MG_A2} mg. Nesse caso a norma exige Notificação de Receita A (amarela), que este gerador não emite.`);
      }
      const a = analyzeItem(it);
      if (a.excede) {
        precisaJustificativa = true;
        warnings.push(it.unidade === 'ampola'
          ? `Medicamento ${n}: mais de ${LIMITE_AMPOLAS} ampolas. Acima do limite, a norma exige justificativa com CID/diagnóstico.`
          : `Medicamento ${n}: a quantidade cobre cerca de ${a.dias} dias; o limite é ${a.max} dias${it.lista === 'A2' ? ' (valor conservador para tramadol/codeína; confira a norma)' : ''}. Acima do limite, a norma exige justificativa com CID/diagnóstico, posologia, data e assinatura.`);
      } else if (a.semCalculo) warnings.push(`Medicamento ${n}: informe a duração em dias para conferir o limite de ${a.max} dias.`);
    });
    if (precisaJustificativa && !(rx.justificativa || '').trim()) errors.push('Preencha a justificativa com CID ou diagnóstico (quantidade acima do limite).');
    if (rx.issuedAt && hoje) {
      const diff = diffDaysISO(rx.issuedAt, hoje);
      if (diff > VALIDADE_DIAS) warnings.push(`A data de emissão tem mais de ${VALIDADE_DIAS} dias: a receita já estaria vencida.`);
      if (diff < 0) warnings.push('A data de emissão é futura.');
    }
    return {errors, warnings, precisaJustificativa};
  }
  function mergeRecords(local, incoming) {
    const map = new Map(local.map(r => [r.id, r]));
    let added = 0, updated = 0; const toWrite = [];
    for (const r of incoming) {
      if (!r || !r.id) continue;
      const cur = map.get(r.id);
      if (!cur) { map.set(r.id, r); toWrite.push(r); added++; }
      else if ((r.updatedAt || '') > (cur.updatedAt || '')) { map.set(r.id, r); toWrite.push(r); updated++; }
    }
    return {records: [...map.values()], toWrite, added, updated};
  }

  // ═════════════════════════ catálogo base (Lista C1) ═════════════════════════
  // Fonte da lista de substâncias: Anexo I da Portaria 344/98, Lista C1 (consulta de 04/11/2026; RDC 1.011 e 1.023/2026 só incluíram o adendo de Cannabis na C1).
  // As apresentações são as mais comuns no mercado: CONFERIR [NV] e ajustar na aba Medicamentos.
  // NÃO entram (Notificação de Receita B, azul): clonazepam, diazepam, bromazepam, alprazolam, fenobarbital, zolpidem, etc. (Lista B1).
  // Também não há anabolizantes (C5), líquidos nem injetáveis: cadastre em Medicamentos se precisar. Tramadol/codeína (adendos A2) estão em DEF_A2.
  // longoPrazo = anticonvulsivantes e antiparkinsonianos (a norma permite até 6 meses).
  const DEFINICOES = [
    ['Amitriptilina', 'antidepressivo', 'comprimido', ['10 mg', '25 mg', '75 mg']],
    ['Nortriptilina', 'antidepressivo', 'cápsula', ['10 mg', '25 mg', '50 mg', '75 mg']],
    ['Imipramina', 'antidepressivo', 'comprimido', ['25 mg']],
    ['Clomipramina', 'antidepressivo', 'comprimido', ['10 mg', '25 mg', '75 mg']],
    ['Fluoxetina', 'antidepressivo', 'cápsula', ['20 mg']],
    ['Fluoxetina', 'antidepressivo', 'comprimido', ['20 mg']],
    ['Sertralina', 'antidepressivo', 'comprimido', ['25 mg', '50 mg', '100 mg']],
    ['Paroxetina', 'antidepressivo', 'comprimido', ['20 mg']],
    ['Citalopram', 'antidepressivo', 'comprimido', ['20 mg']],
    ['Escitalopram', 'antidepressivo', 'comprimido', ['10 mg', '15 mg', '20 mg']],
    ['Fluvoxamina', 'antidepressivo', 'comprimido', ['50 mg', '100 mg']],
    ['Venlafaxina', 'antidepressivo', 'cápsula', ['37,5 mg', '75 mg', '150 mg']],
    ['Desvenlafaxina', 'antidepressivo', 'comprimido', ['50 mg', '100 mg']],
    ['Duloxetina', 'antidepressivo', 'cápsula', ['30 mg', '60 mg']],
    ['Bupropiona', 'antidepressivo', 'comprimido', ['150 mg']],
    ['Mirtazapina', 'antidepressivo', 'comprimido', ['15 mg', '30 mg', '45 mg']],
    ['Trazodona', 'antidepressivo', 'comprimido', ['50 mg', '100 mg']],
    ['Carbamazepina', 'anticonvulsivante', 'comprimido', ['200 mg', '400 mg'], true],
    ['Oxcarbazepina', 'anticonvulsivante', 'comprimido', ['300 mg', '600 mg'], true],
    ['Ácido valproico', 'anticonvulsivante', 'cápsula', ['250 mg'], true],
    ['Divalproato de sódio', 'anticonvulsivante', 'comprimido', ['250 mg', '500 mg'], true],
    ['Lamotrigina', 'anticonvulsivante', 'comprimido', ['25 mg', '50 mg', '100 mg'], true],
    ['Topiramato', 'anticonvulsivante', 'comprimido', ['25 mg', '50 mg', '100 mg'], true],
    ['Fenitoína', 'anticonvulsivante', 'comprimido', ['100 mg'], true],
    ['Primidona', 'anticonvulsivante', 'comprimido', ['100 mg', '250 mg'], true],
    ['Levetiracetam', 'anticonvulsivante', 'comprimido', ['250 mg', '500 mg', '750 mg'], true],
    // Gabapentinoides: limite geral de 60 dias (conservador; confirme se vai usar como anticonvulsivante)
    ['Gabapentina', 'gabapentinoide', 'cápsula', ['300 mg', '400 mg']],
    ['Gabapentina', 'gabapentinoide', 'comprimido', ['600 mg']],
    ['Pregabalina', 'gabapentinoide', 'cápsula', ['50 mg', '75 mg', '150 mg']],
    ['Biperideno', 'antiparkinsoniano', 'comprimido', ['2 mg'], true],
    ['Amantadina', 'antiparkinsoniano', 'comprimido', ['100 mg'], true],
    ['Pramipexol', 'antiparkinsoniano', 'comprimido', ['0,125 mg', '0,25 mg', '1 mg'], true],
    ['Haloperidol', 'antipsicótico', 'comprimido', ['1 mg', '5 mg']],
    ['Risperidona', 'antipsicótico', 'comprimido', ['1 mg', '2 mg', '3 mg']],
    ['Quetiapina', 'antipsicótico', 'comprimido', ['25 mg', '50 mg', '100 mg', '200 mg', '300 mg']],
    ['Olanzapina', 'antipsicótico', 'comprimido', ['5 mg', '10 mg']],
    ['Clorpromazina', 'antipsicótico', 'comprimido', ['25 mg', '100 mg']],
    ['Levomepromazina', 'antipsicótico', 'comprimido', ['25 mg', '100 mg']],
    ['Clozapina', 'antipsicótico', 'comprimido', ['25 mg', '100 mg']],
    ['Aripiprazol', 'antipsicótico', 'comprimido', ['5 mg', '10 mg', '15 mg', '20 mg', '30 mg']],
    ['Carbonato de lítio', 'estabilizador de humor', 'comprimido', ['300 mg']],
    ['Buspirona', 'ansiolítico', 'comprimido', ['5 mg', '10 mg']],
    ['Donepezila', 'demência', 'comprimido', ['5 mg', '10 mg']],
    ['Memantina', 'demência', 'comprimido', ['10 mg']],
    ['Dissulfiram', 'dependência', 'comprimido', ['250 mg']],
    ['Naltrexona', 'dependência', 'comprimido', ['50 mg']],
  ];
  // Adendos da Lista A2 (Portaria 344/98, RDC 999/2025): tramadol e codeína só entram em Receita de Controle Especial quando a dose (unidade posológica)
  // não passa de 100 mg do opioide; acima disso é Notificação de Receita A (amarela). mgUnidade = mg do opioide por comprimido/cápsula.
  // Apresentações: CONFERIR [NV]. Limite de dias: o app usa 30 (conservador) até conferir a norma.
  const DEF_A2 = [
    ['Tramadol', 'opioide', 'cápsula', [['50 mg', 50]]],
    ['Tramadol', 'opioide', 'comprimido', [['100 mg (liberação prolongada)', 100]]],
    ['Tramadol + paracetamol', 'opioide', 'comprimido', [['37,5 mg + 325 mg', 37.5]]],
    ['Codeína (fosfato)', 'opioide', 'comprimido', [['30 mg', 30], ['60 mg', 60]]],
    ['Paracetamol + codeína', 'opioide', 'comprimido', [['500 mg + 30 mg', 30], ['500 mg + 7,5 mg', 7.5], ['300 mg + 30 mg', 30]]],
  ];
  const BASE_CATALOG_A2 = DEF_A2.flatMap(([dcb, classe, unidade, pres]) => pres.map(([conc, mg]) => ({
    id: `base:${slug(dcb)}:${slug(conc)}:${slug(unidade)}`, dcb, concentracao: conc, forma: unidade, unidade,
    via: 'oral', lista: 'A2', classe, longoPrazo: false, base: true, mgUnidade: mg,
  })));
  const BASE_CATALOG = DEFINICOES.flatMap(([dcb, classe, unidade, concs, longo]) => concs.map(conc => ({
    id: `base:${slug(dcb)}:${slug(conc)}:${slug(unidade)}`, dcb, concentracao: conc, forma: unidade, unidade,
    via: 'oral', lista: 'C1', classe, longoPrazo: !!longo, base: true,
  }))).concat(BASE_CATALOG_A2);

  // ═════════════════════════ folha da receita (A4 paisagem, 2 vias lado a lado) ═════════════════════════
  const VIAS_TXT = ['1ª VIA – RETENÇÃO PELA FARMÁCIA', '2ª VIA – PACIENTE'];
  const LOGOS = (typeof RCE_LOGOS !== 'undefined') ? RCE_LOGOS : {sus: '', betim: ''};

  function itemHTML(it, n) {
    return `<div class="rce-rx-item"><div class="rce-rx-line"><span class="rce-rx-name">${n}) ${esc(it.dcb.toUpperCase())} ${esc(it.concentracao)}</span><span class="rce-rx-fill"></span><span class="rce-rx-qtd">${esc(quantidadeTexto(it.quantidade, it.unidade))}</span></div><div class="rce-rx-poso">${esc(it.posologia)}</div></div>`;
  }
  function corpoHTML(items) { // agrupa por via de administração (USO ORAL, USO SUBLINGUAL…) com numeração contínua
    let n = 0, viaAtual = null;
    return items.map(it => {
      n += 1; let h = '';
      if (it.via !== viaAtual) { viaAtual = it.via; h = `<div class="rce-rx-uso">USO ${esc((it.via || '').toUpperCase())}</div>`; }
      return h + itemHTML(it, n);
    }).join('');
  }
  function viaHTML(label, rx, showLogo) {
    const em = rx.emitente || {}, p = rx.patient || {};
    const cpf = p.semCpf ? 'NÃO POSSUI' : formatCPF(onlyDigits(p.cpf));
    const just = (rx.justificativa || '').trim() ? `<div class="rce-rx-just"><b>Justificativa/CID:</b> ${esc(rx.justificativa.trim())}</div>` : '';
    const logo = showLogo ? `<div class="rce-logos"><img class="rce-logo" src="${LOGOS.sus}" alt="SUS"><img class="rce-logo" src="${LOGOS.betim}" alt="Prefeitura de Betim"></div>` : '';
    const sm = (l) => `<div class="rce-sm-line"><span class="rce-sm-l">${l}</span><span class="rce-sm-v"></span></div>`;
    return `<section class="rce-via">
      <header class="rce-via-head"><div><div class="rce-org">${esc(em.orgName || '')}</div><div class="rce-unit">${esc(em.unitName || '')}</div><div class="rce-title">RECEITA DE CONTROLE ESPECIAL</div></div>${logo}</header>
      <div class="rce-via-strip">${label}</div>
      <div class="rce-box"><div class="rce-box-title">IDENTIFICAÇÃO DO EMITENTE</div>
        <div class="rce-ln"><span>Profissional: <b>${esc((em.profNome || '').toUpperCase())}</b></span><span>CRM-${esc(em.crmUF || '')}: <b>${esc(em.crm || '')}</b></span></div>
        <div class="rce-ln"><span>Unidade: <b>${esc(em.unitName || '')}</b></span><span>CNES: <b>${esc(em.cnes || '')}</b></span></div>
        <div class="rce-ln"><span>Endereço completo: <b>${esc(em.endereco || '')}</b></span></div>
        <div class="rce-ln"><span>CEP: <b>${esc(em.cep || '')}</b></span><span>Telefone: <b>${esc(em.telefone || '')}</b></span></div></div>
      <div class="rce-box"><div class="rce-box-title">IDENTIFICAÇÃO DO PACIENTE</div>
        <div class="rce-fl"><span class="rce-fl-l">Nome completo:</span><span class="rce-fl-v">${esc(p.nome || '')}</span></div>
        <div class="rce-fl"><span class="rce-fl-l">Endereço completo:</span><span class="rce-fl-v">${esc(p.endereco || '')}</span></div>
        <div class="rce-fl"><span class="rce-fl-l">CPF ou, se estrangeiro, passaporte nº:</span><span class="rce-fl-v rce-short">${esc(cpf)}</span></div></div>
      <div class="rce-box rce-grow"><div class="rce-box-title">PRESCRIÇÃO</div>
        <div class="rce-rx-body">${corpoHTML(rx.items || [])}${just}</div>
        <div class="rce-sign-row">
          <div class="rce-date-cell"><span class="rce-fl-l">Data de emissão:</span><span class="rce-fl-v rce-short"><b>${esc(formatDateBR(rx.issuedAt))}</b></span></div>
          <div class="rce-sign-cell"><div class="rce-sign-cap">Identificação e assinatura do prescritor</div><div class="rce-sign-name">${esc((em.profNome || '').toUpperCase())}</div><div class="rce-sign-reg">CRM-${esc(em.crmUF || '')} ${esc(em.crm || '')}${em.cns ? ' <span class="rce-nw">| CNS ' + esc(em.cns) + '</span>' : ''}</div></div>
        </div></div>
      <div class="rce-box rce-smbox"><div class="rce-sm-head"><span>IDENTIFICAÇÃO DO COMPRADOR</span><span>ESTABELECIMENTO DISPENSADOR</span></div>
        <div class="rce-sm-grid"><div class="rce-sm-col">${['Nome completo:', 'CPF ou passaporte nº:', 'Endereço completo:', 'Cidade/UF:', 'Telefone:'].map(sm).join('')}</div>
        <div class="rce-sm-col">${['Nome completo:', 'CNPJ ou CNES:', 'Responsável pela dispensação:', 'Assinatura:', 'Data:'].map(sm).join('')}</div></div>
        <div class="rce-sm-note">Preenchimento opcional na impressão: a farmácia pode apor estes dados por carimbo (Portaria 6/99, art. 85, c). Lote e quantidade dispensada: anotar no verso.</div></div>
      <div class="rce-printdate">Data de impressão deste receituário: ${rx.printedAt ? esc(formatDateBR(rx.printedAt)) : '____ / ____ / ______'} (recomendável)</div>
    </section>`;
  }
  const renderSheet = (rx, showLogo = true) => `<div class="rce-sheet">${VIAS_TXT.map(v => viaHTML(v, rx, showLogo)).join('')}</div>`;

  // ═════════════════════════ armazenamento local (IndexedDB) ═════════════════════════
  const DB_NAME = 'aps-receita-controle-especial', STORES = ['patients', 'prescriptions', 'catalog', 'meta'];
  let dbPromise;
  function openDB() {
    if (!dbPromise) dbPromise = new Promise((resolve, reject) => {
      if (typeof indexedDB === 'undefined') return reject(new Error('IndexedDB indisponível'));
      let req; try { req = indexedDB.open(DB_NAME, 1); } catch (e) { return reject(e); }
      req.onupgradeneeded = () => { const d = req.result; for (const s of STORES) if (!d.objectStoreNames.contains(s)) d.createObjectStore(s, {keyPath: 'id'}); };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
      req.onblocked = () => reject(new Error('banco bloqueado por outra aba'));
    });
    return dbPromise;
  }
  const wrapReq = r => new Promise((res, rej) => { r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); });
  const doneTx = t => new Promise((res, rej) => { t.oncomplete = () => res(); t.onerror = () => rej(t.error); t.onabort = () => rej(t.error); });
  const dbGetAll = async s => wrapReq((await openDB()).transaction(s).objectStore(s).getAll());
  async function dbPutMany(store, recs) {
    if (!recs.length) return;
    const d = await openDB(), t = d.transaction(store, 'readwrite'), o = t.objectStore(store);
    for (const r of recs) o.put(r);
    await doneTx(t);
  }
  const dbPut = (store, rec) => dbPutMany(store, [rec]).then(() => rec);
  async function dbClearAll() { const d = await openDB(), t = d.transaction(STORES, 'readwrite'); for (const s of STORES) t.objectStore(s).clear(); await doneTx(t); }
  async function requestPersistence() { try { if (navigator.storage && navigator.storage.persist) return await navigator.storage.persist(); } catch (e) {} return false; }

  // ═════════════════════════ interface ═════════════════════════
  const DEFAULT_SETTINGS = {
    id: 'settings', orgName: 'PREFEITURA MUNICIPAL DE BETIM', unitName: 'UBS BUENO FRANCO MARIA OLIVEIRA E SILVA',
    cnes: '2125935', endereco: 'Rua Paulo Marckson Resende, 220 – Bueno Franco – Betim/MG', cep: '32671-788', telefone: '(31) 3594-7076',
    profNome: '', crm: '', crmUF: 'MG', cns: '', showLogo: true, hiddenBase: [], updatedAt: '',
  };
  const S = {view: 'nova', prevView: 'nova', patients: [], prescriptions: [], custom: [], settings: {...DEFAULT_SETTINGS}, draft: null,
    openPatientId: null, ptFilter: '', catFilter: '', catForm: null, preview: null, labelToId: new Map(), loaded: false, loadError: null};
  let root = null, viewEl = null;
  const $ = (s, el = root) => el.querySelector(s);
  const $$ = (s, el = root) => [...el.querySelectorAll(s)];

  const CSS = `
.rce-dlg{width:min(1000px,calc(100% - 16px));height:calc(100% - 16px);max-height:calc(100% - 16px);padding:0;overflow:hidden}
.rce-dlg[open]{display:flex;flex-direction:column}
.rce-dlg *{box-sizing:border-box}
.rce-top{flex:0 0 auto;border-bottom:1px solid var(--line);background:var(--surface)}
.rce-top .ed-h{position:static;border:0;padding-bottom:6px}
.rce-nav{display:flex;flex-wrap:wrap;gap:6px;padding:0 18px 10px}
.rce-nav .chip{padding:5px 12px}
.rce-main{flex:1 1 auto;min-height:0;overflow:auto;padding:14px 18px 24px;-webkit-overflow-scrolling:touch}
.rce-card{border:1px solid var(--line);border-radius:10px;padding:14px;margin-bottom:12px;background:var(--surface)}
.rce-card h2{margin:0 0 10px;font:700 1rem var(--f-display)}.rce-card h3{margin:0 0 8px;font-size:.95rem}
.rce-muted{color:var(--muted)}.rce-small{font-size:.8rem}
.rce-g2{display:grid;grid-template-columns:1fr 1fr;gap:0 12px}.rce-g3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:0 12px}
@media (max-width:680px){.rce-g2,.rce-g3{grid-template-columns:1fr}}
.rce-dlg label.f{margin-bottom:10px}
.rce-dlg label.rce-check{display:flex;flex-direction:row;gap:8px;align-items:center;font-size:.88rem;font-weight:500;color:var(--ink)}
.rce-dlg label.rce-check input{width:auto;margin:0}
.rce-dlg textarea{resize:vertical;min-height:60px}
.rce-actions{display:flex;flex-wrap:wrap;gap:8px;margin:12px 0}
.rce-dlg button:disabled{opacity:.5;cursor:not-allowed}
.rce-link{border:0;background:none;color:var(--accent);text-decoration:underline;cursor:pointer;padding:4px 6px;font-size:inherit}
.btn.rce-danger{color:var(--crit);border-color:var(--crit)}
.rce-item{border:1px solid var(--line);border-radius:8px;padding:12px;margin-bottom:12px;background:var(--sunk)}
.rce-item-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px}
.rce-derived{font-size:.85rem;background:var(--accent-soft);border-radius:8px;padding:8px 10px;min-height:36px}
.rce-alert{border-radius:8px;padding:8px 12px;margin:6px 0;font-size:.88rem}
.rce-alert.err{background:var(--crit-soft);color:var(--crit)}.rce-alert.warn{background:var(--warn-soft);color:var(--warn)}.rce-alert.ok{background:var(--ok-soft);color:var(--ok)}
.rce-list{list-style:none;margin:0;padding:0}
.rce-list li{display:flex;justify-content:space-between;align-items:center;gap:10px;border-bottom:1px solid var(--line);padding:10px 2px;flex-wrap:wrap}
.rce-list li:last-child{border:0}.rce-list .m{min-width:0;flex:1 1 220px}.rce-list .m b{display:block}
.rce-list .bt{display:flex;flex-wrap:wrap;gap:4px}
.rce-badge{display:inline-block;font-size:.7rem;border:1px solid var(--line);border-radius:999px;padding:1px 8px;color:var(--muted);margin-left:6px}
.rce-badge.long{color:var(--ok);border-color:var(--ok)}
table.rce-cat{width:100%;border-collapse:collapse;font-size:.85rem}
table.rce-cat th,table.rce-cat td{text-align:left;padding:6px 8px;border-bottom:1px solid var(--line)}
table.rce-cat tr.off{opacity:.5}
.rce-toast{position:fixed;left:50%;bottom:calc(20px + env(safe-area-inset-bottom,0px));transform:translateX(-50%);background:var(--ink);color:var(--bg);padding:9px 14px;border-radius:8px;font-size:.85rem;font-weight:600;z-index:50;max-width:90vw}
.rce-pv-bar{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-bottom:10px}
.rce-sheet-wrap{overflow:auto;background:#cfd6dd;padding:12px;border-radius:8px}
@media (max-width:700px){.rce-dlg{width:100%;max-width:100%;height:100%;max-height:100%;border-radius:0;border:0}.rce-main{padding:12px 12px 24px}.rce-nav{padding:0 12px 10px}.rce-top .ed-h{padding:12px}}

/* folha da receita: sempre preto sobre branco, em milímetros (A4 paisagem, 2 vias) */
.rce-sheet{width:285mm;height:196mm;display:grid;grid-template-columns:1fr 1fr;column-gap:6mm;background:#fff;color:#000;font-family:Arial,Helvetica,sans-serif;font-size:8.5pt;line-height:1.25}
.rce-sheet *{box-sizing:border-box}
.rce-via{border:.35mm solid #000;padding:2.5mm 3.5mm;display:flex;flex-direction:column;gap:1.8mm;height:196mm;min-height:0}
.rce-via-head{display:flex;justify-content:space-between;align-items:center;gap:4mm}
.rce-org{font-weight:700;font-size:11pt}.rce-unit{font-size:9pt}.rce-title{font-weight:700;font-size:14pt;margin-top:1.5mm}
.rce-logos{display:flex;align-items:center;gap:3mm;flex-shrink:0}.rce-logo{height:10mm;width:auto}
.rce-via-strip{background:#e7e6e6;border:.4mm solid #000;text-align:center;font-weight:700;font-size:9.5pt;padding:1mm 0}
.rce-box{border:.3mm solid #000}.rce-box-title{background:#d9d9d9;font-weight:700;font-size:7.5pt;padding:.6mm 1.5mm}
.rce-ln{display:grid;grid-template-columns:1fr 42mm;padding:.55mm 1.5mm}.rce-ln>span:only-child{grid-column:1/-1}
.rce-fl{display:flex;align-items:flex-end;padding:.8mm 1.5mm;min-height:6.2mm}.rce-fl-l{white-space:nowrap;margin-right:1.5mm}
.rce-fl-v{flex:1;border-bottom:.2mm solid #7f7f7f;min-height:4.2mm;font-weight:700;padding-left:1mm}.rce-fl-v.rce-short{flex:0 0 55mm}
.rce-box.rce-grow{flex:1;display:flex;flex-direction:column;min-height:0}
.rce-rx-body{flex:1;padding:2mm;overflow:hidden;font-size:9pt;line-height:1.35;min-height:0}
.rce-rx-uso{font-weight:700;margin:1mm 0}.rce-rx-item{margin-bottom:2.5mm}
.rce-rx-line{display:flex;align-items:flex-end;font-weight:700}.rce-rx-name,.rce-rx-qtd{white-space:nowrap}
.rce-rx-fill{flex:1;border-bottom:.3mm solid #000;margin:0 .5mm 1mm;min-width:4mm}.rce-rx-poso{margin-top:.5mm}.rce-rx-just{margin-top:1mm}
.rce-nw{white-space:nowrap}
.rce-sign-row{display:grid;grid-template-columns:.8fr 1.2fr;align-items:end;gap:5mm;padding:0 1.5mm 1.5mm;min-height:15mm}
.rce-date-cell{display:flex;align-items:flex-end;min-width:0}.rce-date-cell .rce-fl-v.rce-short{flex:1}
.rce-sign-cell{border-top:.3mm solid #000;text-align:center;padding-top:.5mm}.rce-sign-name{font-weight:700}.rce-sign-reg{font-size:7.5pt;white-space:nowrap}
.rce-box.rce-smbox{font-size:6.5pt}
.rce-sm-head{display:grid;grid-template-columns:1fr 1fr;background:#d9d9d9;font-weight:700}.rce-sm-head span{padding:.5mm 1.5mm}
.rce-sm-head span:last-child,.rce-sm-col:last-child{border-left:.3mm solid #000}
.rce-sm-grid{display:grid;grid-template-columns:1fr 1fr}
.rce-sign-cap{font-size:6pt;letter-spacing:.2px;color:#444}.rce-sm-note{font-size:5.8pt;font-style:italic;padding:.4mm 1.5mm .6mm;border-top:.15mm solid #7f7f7f;color:#333}.rce-printdate{font-size:6.2pt;font-style:italic;text-align:right;color:#333}
.rce-sm-line{display:flex;align-items:flex-end;padding:.3mm 1.5mm;height:4.5mm}.rce-sm-l{white-space:nowrap;margin-right:1mm}.rce-sm-v{flex:1;border-bottom:.15mm solid #7f7f7f;height:3mm}

/* impressão: só a folha (a página A4 paisagem é definida na hora de imprimir, para não afetar as outras impressões do app) */
#rce-print{display:none}
@media print{
  body.rce-printing > *:not(#rce-print){display:none!important}
  body.rce-printing #rce-print{display:block!important;background:#fff}
  html,body.rce-printing{background:#fff!important}
  body.rce-printing .rce-sheet{break-inside:avoid}
}`;

  function ensureUI() {
    if (root) return;
    const st = document.createElement('style'); st.id = 'rce-css'; st.textContent = CSS; document.head.appendChild(st);
    root = document.createElement('dialog');
    root.id = 'dlg-rce'; root.className = 'rce-dlg'; root.setAttribute('aria-labelledby', 'rce-t');
    root.innerHTML = `<div class="rce-top">
        <div class="ed-h"><h3 id="rce-t">Receita de Controle Especial</h3><button type="button" class="btn ghost sm" data-close>Fechar</button></div>
        <div class="rce-nav" role="group" aria-label="Seções">
          ${[['nova', 'Nova receita'], ['pacientes', 'Pacientes'], ['meds', 'Medicamentos'], ['config', 'Configurações e backup']].map(([k, l]) => `<button type="button" class="chip" data-rce-view="${k}" aria-pressed="false">${l}</button>`).join('')}
        </div></div>
      <div class="rce-main" id="rce-view"></div>`;
    document.body.appendChild(root);
    const pa = document.createElement('div'); pa.id = 'rce-print'; pa.setAttribute('aria-hidden', 'true'); document.body.appendChild(pa);
    viewEl = $('#rce-view');
    $$('[data-rce-view]').forEach(b => b.addEventListener('click', () => { if (b.dataset.rceView === 'pacientes') S.openPatientId = null; go(b.dataset.rceView); }));
    root.addEventListener('close', () => { removePageStyle(); document.body.classList.remove('rce-printing'); });
    window.addEventListener('resize', () => { if (root.open && S.view === 'preview') fitSheet(); });
  }

  let toastTimer;
  function toast(msg) {
    let t = $('.rce-toast');
    if (!t) { t = document.createElement('div'); t.className = 'rce-toast'; t.setAttribute('role', 'status'); root.appendChild(t); }
    t.textContent = msg; t.hidden = false;
    clearTimeout(toastTimer); toastTimer = setTimeout(() => { t.hidden = true; }, 4500);
  }

  async function load() {
    const [patients, prescriptions, custom, meta] = await Promise.all([dbGetAll('patients'), dbGetAll('prescriptions'), dbGetAll('catalog'), dbGetAll('meta')]);
    S.patients = patients; S.prescriptions = prescriptions; S.custom = custom;
    S.settings = {...DEFAULT_SETTINGS, ...(meta.find(m => m.id === 'settings') || {})};
    if (!Array.isArray(S.settings.hiddenBase)) S.settings.hiddenBase = [];
    S.loaded = true;
  }
  const byName = (a, b) => a.nome.localeCompare(b.nome, 'pt-BR');
  const activePatients = () => S.patients.filter(p => !p.deleted);
  const patientRx = pid => S.prescriptions.filter(r => r.patientId === pid && !r.deleted).sort((a, b) => (b.createdAt || '').localeCompare(a.createdAt || ''));
  const upsert = (arr, rec) => { const i = arr.findIndex(x => x.id === rec.id); if (i >= 0) arr[i] = rec; else arr.push(rec); };
  const catalog = () => [...BASE_CATALOG.filter(m => !S.settings.hiddenBase.includes(m.id)), ...S.custom.filter(m => !m.deleted)]
    .sort((a, b) => a.dcb.localeCompare(b.dcb, 'pt-BR') || a.concentracao.localeCompare(b.concentracao, 'pt-BR', {numeric: true}));
  const catalogById = id => BASE_CATALOG.find(m => m.id === id) || S.custom.find(m => m.id === id);
  const emitenteSnapshot = () => { const s = S.settings; return {orgName: s.orgName, unitName: s.unitName, cnes: s.cnes, endereco: s.endereco, cep: s.cep, telefone: s.telefone, profNome: s.profNome, crm: s.crm, crmUF: s.crmUF, cns: s.cns}; };

  function go(v, opts = {}) {
    S.view = v; render();
    if (!opts.keepScroll) viewEl.scrollTop = 0;
  }
  const blankItem = () => ({catalogId: '', dcb: '', concentracao: '', forma: '', unidade: 'comprimido', via: 'oral', lista: 'C1', longoPrazo: false, dose: 1, vezes: 1, obs: '', posologia: '', posoEdited: false, quantidade: '', diasManual: ''});
  const newDraft = () => ({id: null, patientId: null, patient: {nome: '', cpf: '', semCpf: false, endereco: ''}, issuedAt: todayISO(), items: [blankItem()], justificativa: ''});
  const buildRx = () => ({patient: S.draft.patient, emitente: emitenteSnapshot(), items: S.draft.items, justificativa: S.draft.justificativa, issuedAt: S.draft.issuedAt});

  function render() {
    $$('[data-rce-view]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.rceView === S.view || (S.view === 'preview' && b.dataset.rceView === S.prevView))));
    ({nova: renderNova, pacientes: renderPacientes, meds: renderMeds, config: renderConfig, preview: renderPreview})[S.view]();
  }

  // ───────── Nova receita ─────────
  const maskCpf = cpf => { const d = onlyDigits(cpf); return d.length === 11 ? `${d.slice(0, 3)}.***.***-${d.slice(9)}` : ''; };
  function patientOptions() {
    S.labelToId = new Map();
    return activePatients().sort(byName).map(p => {
      const label = p.semCpf || !maskCpf(p.cpf) ? p.nome : `${p.nome} · ${maskCpf(p.cpf)}`;
      S.labelToId.set(label, p.id); return `<option value="${esc(label)}"></option>`;
    }).join('');
  }
  const dcbOptions = () => [...new Set(catalog().map(m => m.dcb))].map(d => `<option value="${esc(d)}"></option>`).join('');

  function renderNova() {
    if (!S.draft) S.draft = newDraft();
    const d = S.draft;
    const aviso = emitenteCompleto(S.settings) ? '' : `<div class="rce-alert warn">Antes da primeira receita, preencha seus dados (nome, CRM e UF) em <button type="button" class="rce-link" id="rce-go-config">Configurações e backup</button>.</div>`;
    viewEl.innerHTML = `${aviso}
      <section class="rce-card"><h2>Paciente</h2>
        <label class="f">Nome completo<input id="rce-p-nome" list="rce-pt-list" autocomplete="off" value="${esc(d.patient.nome)}" placeholder="Digite para buscar um paciente salvo ou cadastrar um novo"></label>
        <datalist id="rce-pt-list">${patientOptions()}</datalist>
        <div class="rce-g2"><label class="f">CPF<input id="rce-p-cpf" inputmode="numeric" autocomplete="off" value="${esc(formatCPF(d.patient.cpf))}" ${d.patient.semCpf ? 'disabled' : ''}></label>
          <label class="rce-check" style="align-self:end;padding-bottom:12px"><input type="checkbox" id="rce-p-semcpf" ${d.patient.semCpf ? 'checked' : ''}> Paciente sem CPF</label></div>
        <label class="f">Endereço completo<input id="rce-p-end" autocomplete="off" value="${esc(d.patient.endereco)}" placeholder="Rua, número, bairro, cidade/UF"></label>
        <div id="rce-repeat"></div></section>
      <section class="rce-card"><h2>Prescrição</h2>
        <datalist id="rce-dcb-list">${dcbOptions()}</datalist>
        <div id="rce-items"></div>
        <button type="button" class="btn" id="rce-add-item">+ Adicionar medicamento</button>
        <div id="rce-just-box" hidden><label class="f" style="margin-top:12px">Justificativa com CID ou diagnóstico (obrigatória quando a quantidade passa do limite)<textarea id="rce-just" placeholder="Ex.: F32.1 – episódio depressivo moderado, uso contínuo">${esc(d.justificativa)}</textarea></label></div>
        <div class="rce-g2" style="margin-top:12px"><label class="f">Data de emissão<input type="date" id="rce-issued" value="${esc(d.issuedAt)}"></label>
          <div class="rce-muted rce-small" id="rce-validade" style="align-self:end;padding-bottom:12px"></div></div></section>
      <section id="rce-alerts"></section>
      <div class="rce-actions"><button type="button" class="btn pri" id="rce-save-print">Salvar e ver para imprimir</button>
        <button type="button" class="btn" id="rce-save-only">Salvar sem imprimir</button><button type="button" class="btn ghost" id="rce-clear">Limpar formulário</button></div>
      <p class="hint">Só gera o papel para assinatura manual. Receita eletrônica de controlados exige plataforma integrada ao SNCR e assinatura ICP-Brasil. Confira sempre a norma vigente (Portaria SVS/MS 344/98; RDC 1.000/2025). Benzodiazepínicos e zolpidem usam Notificação de Receita B (azul), fora deste modelo.</p>`;
    bindNova(); renderItems(); renderRepeat(); refreshAlerts();
  }
  function selectPatient(id) {
    const p = S.patients.find(x => x.id === id); if (!p) return;
    const d = S.draft; d.patientId = id;
    d.patient = {nome: p.nome, cpf: p.cpf || '', semCpf: !!p.semCpf, endereco: p.endereco || ''};
    $('#rce-p-nome').value = p.nome; $('#rce-p-cpf').value = formatCPF(p.cpf); $('#rce-p-cpf').disabled = !!p.semCpf;
    $('#rce-p-semcpf').checked = !!p.semCpf; $('#rce-p-end').value = p.endereco || '';
    renderRepeat(); refreshAlerts();
  }
  function renderRepeat() {
    const box = $('#rce-repeat'); if (!box) return;
    const d = S.draft, list = d.patientId ? patientRx(d.patientId) : [];
    if (!list.length) { box.innerHTML = d.patientId ? '<p class="rce-muted rce-small">Paciente salvo, ainda sem receitas no histórico.</p>' : ''; return; }
    const last = list[0];
    box.innerHTML = `<div class="rce-alert ok">Última receita em ${formatDateBR(last.issuedAt)}: ${esc(last.items.map(it => `${it.dcb} ${it.concentracao} × ${it.quantidade}`).join('; '))}. <button type="button" class="rce-link" id="rce-repeat-last">Repetir última receita</button></div>`;
    $('#rce-repeat-last').addEventListener('click', () => repeatRx(last));
  }
  function repeatRx(rx) {
    const p = S.patients.find(x => x.id === rx.patientId);
    S.draft = newDraft(); S.draft.patientId = rx.patientId;
    S.draft.patient = p ? {nome: p.nome, cpf: p.cpf || '', semCpf: !!p.semCpf, endereco: p.endereco || ''} : {...rx.patient};
    S.draft.items = JSON.parse(JSON.stringify(rx.items)); S.draft.justificativa = rx.justificativa || '';
    go('nova'); toast('Receita anterior copiada. Confira a data e a quantidade.');
  }
  function newRxForPatient(pid) { S.draft = newDraft(); go('nova'); selectPatient(pid); }

  function bindNova() {
    const d = S.draft, nome = $('#rce-p-nome');
    nome.addEventListener('input', () => {
      const id = S.labelToId.get(nome.value);
      if (id) { selectPatient(id); return; }
      d.patient.nome = nome.value;
      const cur = d.patientId && S.patients.find(p => p.id === d.patientId);
      if (cur && normalize(cur.nome) !== normalize(nome.value)) { d.patientId = null; renderRepeat(); }
      refreshAlerts();
    });
    nome.addEventListener('change', () => {
      if (d.patientId) return;
      const m = activePatients().filter(p => normalize(p.nome) === normalize(nome.value));
      if (m.length === 1) selectPatient(m[0].id);
    });
    const cpf = $('#rce-p-cpf');
    cpf.addEventListener('input', () => { d.patient.cpf = onlyDigits(cpf.value).slice(0, 11); cpf.value = formatCPF(d.patient.cpf); refreshAlerts(); });
    $('#rce-p-semcpf').addEventListener('change', e => { d.patient.semCpf = e.target.checked; cpf.disabled = e.target.checked; if (e.target.checked) { d.patient.cpf = ''; cpf.value = ''; } refreshAlerts(); });
    $('#rce-p-end').addEventListener('input', e => { d.patient.endereco = e.target.value; refreshAlerts(); });
    $('#rce-issued').addEventListener('input', e => { d.issuedAt = e.target.value || todayISO(); refreshAlerts(); });
    $('#rce-just').addEventListener('input', e => { d.justificativa = e.target.value; refreshAlerts(); });
    $('#rce-add-item').addEventListener('click', () => {
      if (d.items.length >= MAX_ITENS) return toast(`Máximo de ${MAX_ITENS} medicamentos por receita.`);
      d.items.push(blankItem()); renderItems(); refreshAlerts();
    });
    $('#rce-save-print').addEventListener('click', async () => { const rx = await saveDraft(); if (rx) { S.preview = rx; S.prevView = 'nova'; go('preview'); } });
    $('#rce-save-only').addEventListener('click', async () => { const rx = await saveDraft(); if (rx) { toast('Receita salva no histórico do paciente.'); renderRepeat(); } });
    $('#rce-clear').addEventListener('click', () => { if (confirm('Limpar todo o formulário?')) { S.draft = newDraft(); render(); } });
    const gc = $('#rce-go-config'); if (gc) gc.addEventListener('click', () => go('config'));
    const items = $('#rce-items');
    items.addEventListener('input', onItemInput); items.addEventListener('change', onItemChange); items.addEventListener('click', onItemClick);
  }
  const itemIndex = el => Number(el.closest('.rce-item').dataset.i);
  function onItemInput(e) {
    const t = e.target; if (!t.closest('.rce-item')) return;
    const i = itemIndex(t), it = S.draft.items[i];
    const num = v => { const n = parseFloat(String(v).replace(',', '.')); return Number.isFinite(n) ? n : ''; };
    if (t.classList.contains('f-dose')) it.dose = num(t.value);
    else if (t.classList.contains('f-vezes')) it.vezes = num(t.value);
    else if (t.classList.contains('f-obs')) it.obs = t.value;
    else if (t.classList.contains('f-qtd')) it.quantidade = num(t.value);
    else if (t.classList.contains('f-dias')) it.diasManual = num(t.value);
    else if (t.classList.contains('f-poso')) { it.posologia = t.value; it.posoEdited = true; }
    else return;
    refreshDerived(i);
  }
  function onItemChange(e) { const t = e.target; if (!t.closest('.rce-item')) return; setTimeout(() => handleItemChange(t), 0); }
  function handleItemChange(t) {
    if (!t.isConnected) return;
    const i = itemIndex(t), it = S.draft.items[i];
    if (t.classList.contains('f-dcb')) {
      const matches = catalog().filter(m => normalize(m.dcb) === normalize(t.value));
      const keep = {quantidade: it.quantidade, diasManual: it.diasManual};
      if (!matches.length) { S.draft.items[i] = {...blankItem(), ...keep, dcb: t.value.trim()}; renderItems(); refreshAlerts(); return; }
      if (it.catalogId && normalize(it.dcb) === normalize(matches[0].dcb)) return;
      S.draft.items[i] = {...blankItem(), ...keep, dcb: matches[0].dcb};
      if (matches.length === 1) selectPres(i, matches[0].id); else { renderItems(); refreshAlerts(); }
    } else if (t.classList.contains('f-pres')) {
      if (t.value) selectPres(i, t.value);
      else { S.draft.items[i] = {...blankItem(), dcb: it.dcb, quantidade: it.quantidade, diasManual: it.diasManual}; renderItems(); refreshAlerts(); }
    } else if (t.classList.contains('f-via')) { it.via = t.value; refreshDerived(i); }
  }
  function onItemClick(e) {
    const t = e.target.closest('button'); if (!t) return;
    const i = itemIndex(t), d = S.draft;
    if (t.classList.contains('remove')) { d.items.splice(i, 1); if (!d.items.length) d.items.push(blankItem()); renderItems(); refreshAlerts(); }
    else if (t.classList.contains('restore')) { d.items[i].posoEdited = false; refreshDerived(i); }
  }
  function selectPres(i, id) {
    const m = catalogById(id); if (!m) return;
    const old = S.draft.items[i];
    S.draft.items[i] = {...blankItem(), catalogId: m.id, dcb: m.dcb, concentracao: m.concentracao, forma: m.forma, unidade: m.unidade, via: m.via, lista: m.lista, mgUnidade: m.mgUnidade || 0, longoPrazo: !!m.longoPrazo,
      dose: m.dose || 1, vezes: m.vezes || 1, obs: m.obs || '', quantidade: old.quantidade, diasManual: old.diasManual};
    S.draft.items[i].posologia = posologiaAuto(S.draft.items[i]);
    renderItems(); refreshAlerts();
  }
  function itemFormHTML(it, i) {
    const pres = it.dcb ? catalog().filter(m => normalize(m.dcb) === normalize(it.dcb)) : [];
    const presOpts = pres.map(m => `<option value="${esc(m.id)}" ${it.catalogId === m.id ? 'selected' : ''}>${esc(m.concentracao)} — ${esc(m.forma)}</option>`).join('');
    const viaOpts = Object.keys(VIAS).map(v => `<option value="${esc(v)}" ${it.via === v ? 'selected' : ''}>${esc(v)}</option>`).join('');
    const nao = it.dcb && !pres.length ? `<div class="rce-alert warn">“${esc(it.dcb)}” não está no catálogo. Cadastre na aba <b>Medicamentos</b> ou escolha outro nome. Se for da Lista B1 (azul), não use este modelo.</div>` : '';
    return `<div class="rce-item" data-i="${i}"><div class="rce-item-head"><b>Medicamento ${i + 1}</b><button type="button" class="rce-link remove">Remover</button></div>
      <div class="rce-g2"><label class="f">Medicamento (DCB)<input class="f-dcb" list="rce-dcb-list" autocomplete="off" value="${esc(it.dcb)}" placeholder="Digite e escolha da lista"></label>
        <label class="f">Concentração e apresentação<select class="f-pres" ${pres.length ? '' : 'disabled'}><option value="">${pres.length ? 'Selecione…' : '—'}</option>${presOpts}</select></label></div>
      ${nao}
      ${it.catalogId ? `<div class="rce-g3"><label class="f">Via de administração<select class="f-via">${viaOpts}</select></label>
        <label class="f">Dose (${esc(it.unidade)}s por tomada)<input class="f-dose" type="number" min="0.25" step="0.25" value="${esc(it.dose)}"></label>
        <label class="f">Vezes ao dia<input class="f-vezes" type="number" min="1" max="12" step="1" value="${esc(it.vezes)}"></label></div>
      <label class="f">Observação da posologia (opcional)<input class="f-obs" value="${esc(it.obs)}" placeholder="Ex.: pela manhã, à noite, após o almoço"></label>
      <label class="f">Posologia (texto que vai na receita)<textarea class="f-poso">${esc(it.posologia)}</textarea></label>
      <button type="button" class="rce-link restore" ${it.posoEdited ? '' : 'hidden'}>Restaurar texto automático</button>
      <div class="rce-g3"><label class="f">Quantidade (${esc(it.unidade)}${it.unidade === 'mL' ? '' : 's'})<input class="f-qtd" type="number" min="1" step="1" value="${esc(it.quantidade)}"></label>
        <label class="f">Duração do tratamento (dias)<input class="f-dias" type="number" min="1" step="1" value="${esc(it.diasManual)}" placeholder="calculada"></label>
        <div><div class="rce-small rce-muted" style="margin-bottom:4px;font-weight:600">Na receita</div><div class="rce-derived rce-qtd-ext"></div></div></div>
      <div class="rce-item-alert"></div>` : ''}</div>`;
  }
  function renderItems() {
    $('#rce-items').innerHTML = S.draft.items.map(itemFormHTML).join('');
    S.draft.items.forEach((_, i) => { if (S.draft.items[i].catalogId) refreshDerived(i, true); });
    $('#rce-add-item').disabled = S.draft.items.length >= MAX_ITENS;
  }
  function refreshDerived(i, skipAlerts = false) {
    const it = S.draft.items[i], card = $(`.rce-item[data-i="${i}"]`);
    if (!card || !it.catalogId) return;
    if (!it.posoEdited) { it.posologia = posologiaAuto(it); const ta = $('.f-poso', card); if (ta && ta !== document.activeElement) ta.value = it.posologia; }
    const restore = $('.restore', card); if (restore) restore.hidden = !it.posoEdited;
    const a = analyzeItem(it), q = quantidadeTexto(it.quantidade, it.unidade);
    const dias = a.dias != null ? ` · cerca de ${a.dias} dia${a.dias === 1 ? '' : 's'}${a.origem === 'manual' ? ' (informado)' : ''}` : '';
    $('.rce-qtd-ext', card).textContent = q ? q + dias : 'Informe a quantidade.';
    const al = $('.rce-item-alert', card);
    if (a.excede) {
      const lim = it.unidade === 'ampola' ? '5 ampolas' : `${a.max} dias${it.longoPrazo ? ' (6 meses)' : ''}`;
      al.innerHTML = `<div class="rce-alert warn">Acima do limite (${lim}). Preencha a justificativa com CID/diagnóstico.</div>`;
    } else if (a.semCalculo) al.innerHTML = `<div class="rce-alert warn">Informe a duração em dias para conferir o limite de ${a.max} dias.</div>`;
    else al.innerHTML = '';
    if (!skipAlerts) refreshAlerts();
  }
  function refreshAlerts() {
    const box = $('#rce-alerts'); if (!box || !S.draft) return;
    const d = S.draft, v = validateReceita(buildRx(), todayISO());
    $('#rce-just-box').hidden = !(v.precisaJustificativa || (d.justificativa || '').trim());
    $('#rce-validade').textContent = d.issuedAt ? `Válida por ${VALIDADE_DIAS} dias: até ${formatDateBR(addDaysISO(d.issuedAt, VALIDADE_DIAS))}.` : '';
    const errs = v.errors.map(m => `<div class="rce-alert err">${esc(m)}</div>`).join(''), warns = v.warnings.map(m => `<div class="rce-alert warn">${esc(m)}</div>`).join('');
    box.innerHTML = (errs || warns) ? `<div class="rce-card"><h3>${v.errors.length ? 'Falta resolver' : 'Atenção'}</h3>${errs}${warns}</div>` : '';
    $('#rce-save-print').disabled = v.errors.length > 0; $('#rce-save-only').disabled = v.errors.length > 0;
  }
  async function saveDraft() {
    const d = S.draft, v = validateReceita(buildRx(), todayISO());
    if (v.errors.length) { toast('Resolva as pendências antes de salvar.'); return null; }
    const now = nowISO();
    const pdata = {nome: d.patient.nome.trim().replace(/\s+/g, ' '), cpf: d.patient.semCpf ? '' : onlyDigits(d.patient.cpf), semCpf: !!d.patient.semCpf, endereco: d.patient.endereco.trim()};
    let pat = d.patientId ? S.patients.find(p => p.id === d.patientId) : null;
    pat = pat ? {...pat, ...pdata, updatedAt: now, deleted: false} : {id: uuid(), ...pdata, createdAt: now, updatedAt: now, deleted: false};
    try {
      await dbPut('patients', pat); upsert(S.patients, pat);
      const prev = d.id ? S.prescriptions.find(r => r.id === d.id) : null;
      const rx = {id: d.id || uuid(), patientId: pat.id, patient: pdata, emitente: emitenteSnapshot(), issuedAt: d.issuedAt, items: JSON.parse(JSON.stringify(d.items)),
        justificativa: (d.justificativa || '').trim(), createdAt: prev ? prev.createdAt : now, updatedAt: now, deleted: false};
      await dbPut('prescriptions', rx); upsert(S.prescriptions, rx);
      d.id = rx.id; d.patientId = pat.id;
      return rx;
    } catch (err) { toast('Não foi possível salvar neste navegador: ' + (err && err.message)); return null; }
  }

  // ───────── Pré-visualização e impressão ─────────
  function renderPreview() {
    const rx = S.preview;
    viewEl.innerHTML = `<div class="rce-pv-bar"><button type="button" class="btn pri" id="rce-do-print">Imprimir / salvar em PDF</button><button type="button" class="btn" id="rce-back">← Voltar</button><button type="button" class="btn" id="rce-new-after">Nova receita</button></div>
      <p class="hint">Imprima em A4 <b>paisagem</b>, escala 100%, sem cabeçalhos/rodapés do navegador. Para gerar arquivo, escolha “Salvar como PDF”. Depois de impressa, assine e carimbe cada via.</p>
      <div id="rce-overflow"></div><div class="rce-sheet-wrap" id="rce-sheet-wrap"><div id="rce-sheet-holder">${renderSheet({...rx, printedAt: todayISO()}, S.settings.showLogo)}</div></div>`;
    fitSheet();
    $('#rce-do-print').addEventListener('click', () => printRx(rx));
    $('#rce-back').addEventListener('click', () => go(S.prevView, {keepScroll: true}));
    $('#rce-new-after').addEventListener('click', () => { S.draft = newDraft(); go('nova'); });
  }
  function fitSheet() {
    const holder = $('#rce-sheet-holder'), wrap = $('#rce-sheet-wrap'); if (!holder || !wrap) return;
    holder.style.zoom = String(Math.min(1, (wrap.clientWidth - 24) / ((285 * 96) / 25.4)));
    const over = $$('.rce-rx-body', holder).some(el => el.scrollHeight > el.clientHeight + 2);
    $('#rce-overflow').innerHTML = over ? '<div class="rce-alert err">O texto da prescrição não cabe na caixa e seria cortado na impressão. Volte e reduza o texto da posologia ou o número de medicamentos.</div>' : '';
    $('#rce-do-print').disabled = over;
  }
  function addPageStyle() {
    if (document.getElementById('rce-page-style')) return;
    const s = document.createElement('style'); s.id = 'rce-page-style'; s.textContent = '@page{size:A4 landscape;margin:6mm}'; document.head.appendChild(s);
  }
  function removePageStyle() { const s = document.getElementById('rce-page-style'); if (s) s.remove(); }
  async function printRx(rx) {
    const pa = document.getElementById('rce-print');
    pa.innerHTML = renderSheet({...rx, printedAt: todayISO()}, S.settings.showLogo);
    try { await Promise.all([...pa.querySelectorAll('img')].map(i => (i.decode ? i.decode().catch(() => {}) : null))); } catch (e) {}
    addPageStyle(); document.body.classList.add('rce-printing');
    const old = document.title; document.title = `Receita - ${rx.patient.nome} - ${formatDateBR(rx.issuedAt)}`;
    const end = () => { window.removeEventListener('afterprint', end); document.body.classList.remove('rce-printing'); document.title = old; pa.innerHTML = ''; removePageStyle(); };
    window.addEventListener('afterprint', end);
    setTimeout(() => { try { window.print(); } catch (e) { end(); toast('Use o comando de impressão do navegador (Ctrl+P).'); } }, 50);
  }

  // ───────── Pacientes ─────────
  function renderPacientes() {
    if (S.openPatientId) return renderPaciente();
    const q = normalize(S.ptFilter), qd = onlyDigits(S.ptFilter);
    const list = activePatients().filter(p => !q || normalize(p.nome).includes(q) || (qd && onlyDigits(p.cpf).includes(qd))).sort(byName);
    viewEl.innerHTML = `<section class="rce-card"><h2>Pacientes <span class="rce-muted rce-small">(${activePatients().length})</span></h2>
      <label class="f">Buscar por nome ou CPF<input id="rce-pt-q" value="${esc(S.ptFilter)}" autocomplete="off"></label>
      ${list.length ? `<ul class="rce-list">${list.map(p => {
        const rxs = patientRx(p.id), ult = rxs[0] ? ` · última receita ${formatDateBR(rxs[0].issuedAt)}` : '';
        return `<li><div class="m"><b>${esc(p.nome)}</b><span class="rce-muted rce-small">${p.semCpf ? 'sem CPF' : esc(formatCPF(p.cpf) || 'CPF não informado')} · ${rxs.length} receita${rxs.length === 1 ? '' : 's'}${ult}</span></div>
          <div class="bt"><button type="button" class="btn sm" data-open="${esc(p.id)}">Abrir</button><button type="button" class="btn sm pri" data-new="${esc(p.id)}">Nova receita</button></div></li>`;
      }).join('')}</ul>` : '<p class="rce-muted">Nenhum paciente encontrado. Os pacientes são salvos automaticamente quando você salva uma receita.</p>'}</section>`;
    $('#rce-pt-q').addEventListener('input', e => { S.ptFilter = e.target.value; const pos = e.target.selectionStart; renderPacientes(); const el = $('#rce-pt-q'); el.focus(); el.setSelectionRange(pos, pos); });
    $$('[data-open]').forEach(b => b.addEventListener('click', () => { S.openPatientId = b.dataset.open; go('pacientes'); }));
    $$('[data-new]').forEach(b => b.addEventListener('click', () => newRxForPatient(b.dataset.new)));
  }
  function renderPaciente() {
    const p = S.patients.find(x => x.id === S.openPatientId);
    if (!p || p.deleted) { S.openPatientId = null; return renderPacientes(); }
    const rxs = patientRx(p.id);
    viewEl.innerHTML = `<p><button type="button" class="rce-link" id="rce-back-list">← Todos os pacientes</button></p>
      <section class="rce-card"><h2>${esc(p.nome)}</h2>
        <label class="f">Nome completo<input id="rce-e-nome" value="${esc(p.nome)}"></label>
        <div class="rce-g2"><label class="f">CPF<input id="rce-e-cpf" inputmode="numeric" value="${esc(formatCPF(p.cpf))}" ${p.semCpf ? 'disabled' : ''}></label>
          <label class="rce-check" style="align-self:end;padding-bottom:12px"><input type="checkbox" id="rce-e-semcpf" ${p.semCpf ? 'checked' : ''}> Paciente sem CPF</label></div>
        <label class="f">Endereço completo<input id="rce-e-end" value="${esc(p.endereco)}"></label>
        <div class="rce-actions"><button type="button" class="btn pri" id="rce-e-save">Salvar alterações</button><button type="button" class="btn pri" id="rce-e-new">Nova receita</button><button type="button" class="btn rce-danger" id="rce-e-del">Excluir paciente</button></div></section>
      <section class="rce-card"><h2>Histórico de receitas <span class="rce-muted rce-small">(${rxs.length})</span></h2>
        ${rxs.length ? `<ul class="rce-list">${rxs.map(r => `<li><div class="m"><b>${formatDateBR(r.issuedAt)}</b><span class="rce-muted rce-small">${esc(r.items.map(it => `${it.dcb} ${it.concentracao} × ${it.quantidade}`).join('; '))}</span></div>
          <div class="bt"><button type="button" class="btn sm" data-view-rx="${esc(r.id)}">Ver / reimprimir</button><button type="button" class="btn sm" data-repeat="${esc(r.id)}">Repetir</button><button type="button" class="btn sm rce-danger" data-del-rx="${esc(r.id)}">Excluir</button></div></li>`).join('')}</ul>`
        : '<p class="rce-muted">Nenhuma receita salva para este paciente.</p>'}</section>`;
    $('#rce-back-list').addEventListener('click', () => { S.openPatientId = null; go('pacientes'); });
    $('#rce-e-cpf').addEventListener('input', e => { e.target.value = formatCPF(e.target.value); });
    $('#rce-e-semcpf').addEventListener('change', e => { $('#rce-e-cpf').disabled = e.target.checked; if (e.target.checked) $('#rce-e-cpf').value = ''; });
    $('#rce-e-save').addEventListener('click', async () => {
      const nome = $('#rce-e-nome').value.trim().replace(/\s+/g, ' ');
      if (!nome) return toast('O nome não pode ficar vazio.');
      const np = {...p, nome, cpf: $('#rce-e-semcpf').checked ? '' : onlyDigits($('#rce-e-cpf').value), semCpf: $('#rce-e-semcpf').checked, endereco: $('#rce-e-end').value.trim(), updatedAt: nowISO()};
      await dbPut('patients', np); upsert(S.patients, np); toast('Paciente atualizado. Receitas já emitidas não mudam.'); renderPaciente();
    });
    $('#rce-e-new').addEventListener('click', () => newRxForPatient(p.id));
    $('#rce-e-del').addEventListener('click', async () => {
      if (!confirm(`Excluir ${p.nome} e todas as receitas dele deste aparelho?`)) return;
      const now = nowISO();
      for (const r of rxs) { const nr = {...r, deleted: true, updatedAt: now}; await dbPut('prescriptions', nr); upsert(S.prescriptions, nr); }
      const np = {...p, deleted: true, updatedAt: now}; await dbPut('patients', np); upsert(S.patients, np);
      S.openPatientId = null; go('pacientes'); toast('Paciente excluído.');
    });
    $$('[data-view-rx]').forEach(b => b.addEventListener('click', () => { S.preview = S.prescriptions.find(r => r.id === b.dataset.viewRx); S.prevView = 'pacientes'; go('preview'); }));
    $$('[data-repeat]').forEach(b => b.addEventListener('click', () => repeatRx(S.prescriptions.find(r => r.id === b.dataset.repeat))));
    $$('[data-del-rx]').forEach(b => b.addEventListener('click', async () => {
      if (!confirm('Excluir esta receita do histórico?')) return;
      const r = S.prescriptions.find(x => x.id === b.dataset.delRx), nr = {...r, deleted: true, updatedAt: nowISO()};
      await dbPut('prescriptions', nr); upsert(S.prescriptions, nr); renderPaciente();
    }));
  }

  // ───────── Medicamentos (catálogo) ─────────
  const LISTAS = {C1: 'C1', C5: 'C5', A2: 'A2 (tramadol/codeína, adendo)', RCE: 'Outra (RCE por adendo)'};
  function renderMeds() {
    const q = normalize(S.catFilter);
    const rows = [...BASE_CATALOG.map(m => ({...m, hidden: S.settings.hiddenBase.includes(m.id)})), ...S.custom.filter(m => !m.deleted).map(m => ({...m, base: false, hidden: false}))]
      .filter(m => !q || normalize(`${m.dcb} ${m.concentracao} ${m.forma} ${m.classe || ''}`).includes(q))
      .sort((a, b) => a.dcb.localeCompare(b.dcb, 'pt-BR') || a.concentracao.localeCompare(b.concentracao, 'pt-BR', {numeric: true}));
    viewEl.innerHTML = `<section class="rce-card"><h2>Medicamentos</h2>
      <p class="hint">Lista base: Lista C1 da Portaria 344/98 mais usada na atenção primária, para <b>Receita de Controle Especial</b>. <b>As apresentações ainda precisam de conferência [NV]</b> (bula/mercado). Medicamentos de Notificação de Receita (azul/amarela), como clonazepam, diazepam e zolpidem, <b>não</b> usam este modelo. Você pode ocultar itens da lista base ou cadastrar os seus.</p>
      <div class="rce-actions"><button type="button" class="btn pri" id="rce-cat-new">+ Novo medicamento</button></div>
      ${S.catForm ? catFormHTML() : ''}
      <label class="f">Filtrar<input id="rce-cat-q" value="${esc(S.catFilter)}" autocomplete="off" placeholder="Nome, classe ou apresentação"></label>
      <div style="overflow:auto"><table class="rce-cat"><thead><tr><th>Medicamento</th><th>Apresentação</th><th>Via</th><th>Lista</th><th></th></tr></thead><tbody>
      ${rows.map(m => `<tr class="${m.hidden ? 'off' : ''}"><td>${esc(m.dcb)}${m.longoPrazo ? '<span class="rce-badge long">até 6 meses</span>' : ''}${m.base ? '' : '<span class="rce-badge">seu</span>'}</td><td>${esc(m.concentracao)} — ${esc(m.forma)}</td><td>${esc(m.via)}</td><td>${esc(m.lista)}</td>
        <td style="white-space:nowrap">${m.base ? `<button type="button" class="rce-link" data-dup="${esc(m.id)}">Duplicar</button><button type="button" class="rce-link" data-hide="${esc(m.id)}">${m.hidden ? 'Mostrar' : 'Ocultar'}</button>`
          : `<button type="button" class="rce-link" data-edit="${esc(m.id)}">Editar</button><button type="button" class="rce-link" data-del="${esc(m.id)}">Excluir</button>`}</td></tr>`).join('')}
      </tbody></table></div></section>`;
    $('#rce-cat-q').addEventListener('input', e => { S.catFilter = e.target.value; const pos = e.target.selectionStart; renderMeds(); const el = $('#rce-cat-q'); el.focus(); el.setSelectionRange(pos, pos); });
    $('#rce-cat-new').addEventListener('click', () => { S.catForm = {id: null, dcb: '', concentracao: '', forma: 'comprimido', unidade: 'comprimido', via: 'oral', lista: 'C1', longoPrazo: false, dose: 1, vezes: 1, obs: ''}; renderMeds(); });
    $$('[data-dup]').forEach(b => b.addEventListener('click', () => { S.catForm = {...BASE_CATALOG.find(x => x.id === b.dataset.dup), id: null, base: false}; renderMeds(); }));
    $$('[data-edit]').forEach(b => b.addEventListener('click', () => { S.catForm = {...S.custom.find(x => x.id === b.dataset.edit)}; renderMeds(); }));
    $$('[data-del]').forEach(b => b.addEventListener('click', async () => {
      if (!confirm('Excluir este medicamento do seu catálogo? As receitas já emitidas não mudam.')) return;
      const m = S.custom.find(x => x.id === b.dataset.del), nm = {...m, deleted: true, updatedAt: nowISO()};
      await dbPut('catalog', nm); upsert(S.custom, nm); renderMeds();
    }));
    $$('[data-hide]').forEach(b => b.addEventListener('click', async () => {
      const set = new Set(S.settings.hiddenBase); if (set.has(b.dataset.hide)) set.delete(b.dataset.hide); else set.add(b.dataset.hide);
      await saveSettings({hiddenBase: [...set]}); renderMeds();
    }));
    if (S.catForm) bindCatForm();
  }
  function catFormHTML() {
    const f = S.catForm;
    return `<div class="rce-item"><h3>${f.id ? 'Editar' : 'Novo'} medicamento</h3>
      <div class="rce-g2"><label class="f">Medicamento (DCB)<input id="rce-c-dcb" value="${esc(f.dcb)}"></label><label class="f">Concentração<input id="rce-c-conc" value="${esc(f.concentracao)}" placeholder="Ex.: 50 mg"></label></div>
      <div class="rce-g3"><label class="f">Forma farmacêutica<input id="rce-c-forma" value="${esc(f.forma)}" list="rce-formas"></label>
        <label class="f">Unidade de contagem<select id="rce-c-un">${Object.keys(UNIDADES).map(u => `<option ${f.unidade === u ? 'selected' : ''}>${esc(u)}</option>`).join('')}</select></label>
        <label class="f">Via padrão<select id="rce-c-via">${Object.keys(VIAS).map(v => `<option ${f.via === v ? 'selected' : ''}>${esc(v)}</option>`).join('')}</select></label></div>
      <datalist id="rce-formas"><option value="comprimido"><option value="cápsula"><option value="solução oral"><option value="gotas"><option value="suspensão oral"><option value="solução injetável"><option value="adesivo transdérmico"></datalist>
      <div class="rce-g3"><label class="f">Lista<select id="rce-c-lista">${Object.entries(LISTAS).map(([k, v]) => `<option value="${k}" ${f.lista === k ? 'selected' : ''}>${esc(v)}</option>`).join('')}</select></label>
        <label class="f">Dose padrão<input id="rce-c-dose" type="number" min="0.25" step="0.25" value="${esc(f.dose || 1)}"></label>
        <label class="f">Vezes ao dia padrão<input id="rce-c-vezes" type="number" min="1" max="12" value="${esc(f.vezes || 1)}"></label></div>
      <label class="rce-check"><input type="checkbox" id="rce-c-long" ${f.longoPrazo ? 'checked' : ''}> Anticonvulsivante ou antiparkinsoniano (permite até 6 meses de tratamento)</label>
      <div class="rce-actions"><button type="button" class="btn pri" id="rce-c-save">Salvar</button><button type="button" class="btn" id="rce-c-cancel">Cancelar</button></div></div>`;
  }
  function bindCatForm() {
    $('#rce-c-cancel').addEventListener('click', () => { S.catForm = null; renderMeds(); });
    $('#rce-c-save').addEventListener('click', async () => {
      const f = S.catForm, dcb = $('#rce-c-dcb').value.trim(), conc = $('#rce-c-conc').value.trim(), forma = $('#rce-c-forma').value.trim();
      if (!dcb || !conc || !forma) return toast('Preencha medicamento, concentração e forma farmacêutica.');
      const rec = {id: f.id || uuid(), dcb, concentracao: conc, forma, unidade: $('#rce-c-un').value, via: $('#rce-c-via').value, lista: $('#rce-c-lista').value, mgUnidade: f.mgUnidade || 0, classe: f.classe || '',
        longoPrazo: $('#rce-c-long').checked, dose: Number($('#rce-c-dose').value) || 1, vezes: Number($('#rce-c-vezes').value) || 1, obs: f.obs || '', custom: true, deleted: false, updatedAt: nowISO()};
      await dbPut('catalog', rec); upsert(S.custom, rec); S.catForm = null; renderMeds(); toast('Medicamento salvo.');
    });
  }

  // ───────── Configurações e backup ─────────
  async function saveSettings(patch) { S.settings = {...S.settings, ...patch, id: 'settings', updatedAt: nowISO()}; await dbPut('meta', S.settings); }
  async function renderConfig() {
    const s = S.settings;
    const persisted = navigator.storage && navigator.storage.persisted ? await navigator.storage.persisted().catch(() => false) : false;
    viewEl.innerHTML = `<section class="rce-card"><h2>Seus dados (emitente)</h2>
      <p class="hint">Ficam salvos só neste navegador (não vão ao GitHub nem a servidor). Aparecem em todas as receitas.</p>
      <div class="rce-g2"><label class="f">Nome completo<input id="rce-s-nome" value="${esc(s.profNome)}"></label><label class="f">CNS<input id="rce-s-cns" value="${esc(s.cns)}" inputmode="numeric"></label></div>
      <div class="rce-g2"><label class="f">CRM (número)<input id="rce-s-crm" value="${esc(s.crm)}" inputmode="numeric"></label><label class="f">UF do CRM<input id="rce-s-uf" value="${esc(s.crmUF)}" maxlength="2"></label></div>
      <h3 style="margin-top:6px">Unidade</h3>
      <label class="f">Órgão<input id="rce-s-org" value="${esc(s.orgName)}"></label><label class="f">Unidade<input id="rce-s-unit" value="${esc(s.unitName)}"></label>
      <div class="rce-g3"><label class="f">CNES<input id="rce-s-cnes" value="${esc(s.cnes)}"></label><label class="f">CEP<input id="rce-s-cep" value="${esc(s.cep)}"></label><label class="f">Telefone<input id="rce-s-tel" value="${esc(s.telefone)}"></label></div>
      <label class="f">Endereço completo (com cidade e UF)<input id="rce-s-end" value="${esc(s.endereco)}"></label>
      <label class="rce-check"><input type="checkbox" id="rce-s-logo" ${s.showLogo ? 'checked' : ''}> Mostrar os logos do SUS e da Prefeitura de Betim no cabeçalho</label>
      <div class="rce-actions"><button type="button" class="btn pri" id="rce-s-save">Salvar dados</button></div></section>
      <section class="rce-card"><h2>Backup e outros aparelhos</h2>
        <p class="hint">Os dados dos pacientes ficam <b>somente neste navegador</b> (nada vai para a internet). Para usar em outro computador, exporte um arquivo aqui e importe lá: os dois lados são mesclados (vale o registro mais recente). <b>O arquivo contém dados de pacientes: guarde com cuidado (LGPD) e nunca o envie ao GitHub.</b></p>
        <div class="rce-actions"><button type="button" class="btn pri" id="rce-b-export">Exportar backup</button><button type="button" class="btn" id="rce-b-import-btn">Importar backup…</button><input id="rce-b-import" type="file" accept="application/json,.json" hidden></div>
        <p class="rce-small ${persisted ? '' : 'rce-muted'}">Armazenamento protegido contra limpeza automática do navegador: <b>${persisted ? 'sim' : 'não confirmado'}</b>. Evite limpar os dados do site e use o mesmo navegador. Exporte um backup de vez em quando.</p></section>
      <section class="rce-card"><h2>Apagar tudo deste aparelho</h2><p class="hint">Remove pacientes, receitas, medicamentos cadastrados e seus dados deste navegador (só desta ferramenta). Exporte um backup antes.</p>
        <button type="button" class="btn rce-danger" id="rce-wipe">Apagar todos os dados da receita</button></section>
      <p class="hint">Este módulo apenas gera a receita para <b>impressão e assinatura manual</b>. Você é responsável pelo conteúdo prescrito e pela conferência com a norma vigente (Portaria SVS/MS 344/98 e RDC 1.000/2025).</p>`;
    $('#rce-s-save').addEventListener('click', async () => {
      await saveSettings({profNome: $('#rce-s-nome').value.trim(), cns: onlyDigits($('#rce-s-cns').value), crm: onlyDigits($('#rce-s-crm').value), crmUF: $('#rce-s-uf').value.trim().toUpperCase(),
        orgName: $('#rce-s-org').value.trim(), unitName: $('#rce-s-unit').value.trim(), cnes: $('#rce-s-cnes').value.trim(), cep: $('#rce-s-cep').value.trim(),
        telefone: $('#rce-s-tel').value.trim(), endereco: $('#rce-s-end').value.trim(), showLogo: $('#rce-s-logo').checked});
      toast('Dados salvos.');
    });
    $('#rce-b-export').addEventListener('click', exportBackup);
    $('#rce-b-import-btn').addEventListener('click', () => $('#rce-b-import').click());
    $('#rce-b-import').addEventListener('change', e => { if (e.target.files[0]) importBackup(e.target.files[0]); e.target.value = ''; });
    $('#rce-wipe').addEventListener('click', async () => {
      if (!confirm('Apagar TODOS os dados da receita deste aparelho? Isso não pode ser desfeito.')) return;
      await dbClearAll(); await load(); S.draft = null; S.openPatientId = null; go('config'); toast('Dados apagados.');
    });
  }
  function exportBackup() {
    const data = {app: 'receituario-controle-especial', version: 1, exportedAt: nowISO(), patients: S.patients, prescriptions: S.prescriptions, catalog: S.custom, settings: S.settings};
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], {type: 'application/json'}));
    a.download = `receituario-backup-${todayISO()}.json`; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000); toast('Backup exportado. Guarde o arquivo em local seguro.');
  }
  async function importBackup(file) {
    let data; try { data = JSON.parse(await file.text()); } catch (e) { return toast('Arquivo inválido.'); }
    if (!data || data.app !== 'receituario-controle-especial') return toast('Este arquivo não é um backup do receituário.');
    const stats = [];
    for (const [store, local, nome] of [['patients', S.patients, 'pacientes'], ['prescriptions', S.prescriptions, 'receitas'], ['catalog', S.custom, 'medicamentos']]) {
      const incoming = Array.isArray(data[store]) ? data[store].filter(r => r && typeof r.id === 'string') : [];
      const m = mergeRecords(local, incoming); await dbPutMany(store, m.toWrite);
      stats.push(`${nome}: +${m.added} novos, ${m.updated} atualizados`);
    }
    if (data.settings && (data.settings.updatedAt || '') > (S.settings.updatedAt || '')) { await dbPut('meta', {...DEFAULT_SETTINGS, ...data.settings, id: 'settings'}); stats.push('configurações atualizadas'); }
    await load(); render(); toast('Importado — ' + stats.join(' · '));
  }

  // ───────── abertura ─────────
  async function open(opts = {}) {
    ensureUI();
    if (!root.open) root.showModal();
    if (!S.loaded) {
      viewEl.innerHTML = '<p class="rce-muted">Abrindo o armazenamento local…</p>';
      try { await load(); requestPersistence(); }
      catch (err) {
        viewEl.innerHTML = `<div class="rce-alert err">Não foi possível abrir o armazenamento local do navegador (${esc(err && err.message)}). Use o app publicado no navegador (fora de uma janela anônima/privada ou de pré-visualização) e tente de novo.</div>`;
        return;
      }
      if (!emitenteCompleto(S.settings)) S.view = 'config';
    }
    if (opts.view) S.view = opts.view;
    render();
  }

  const core = {uuid, todayISO, formatDateBR, addDaysISO, diffDaysISO, onlyDigits, formatCPF, validCPF, normalize, slug, extenso, formatDose, posologiaAuto, quantidadeTexto,
    analyzeItem, emitenteCompleto, validateReceita, mergeRecords, renderSheet, UNIDADES, VIAS, LIMITE_DIAS, LIMITE_DIAS_LONGO, LIMITE_DIAS_A2, LIMITE_MG_A2, LIMITE_AMPOLAS, VALIDADE_DIAS, MAX_ITENS};
  return {open, core, BASE_CATALOG};
})();
if (typeof module !== 'undefined' && module.exports) module.exports = RCE;
