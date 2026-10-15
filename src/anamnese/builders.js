// ─── STATE ───────────────────────────────────────────
const S = {};
const activeQPs  = new Set();
const activeProgs = new Set();
let currentDorSub = null;

function getSet(k) { if(!S[k]) S[k]=new Set(); return S[k]; }
function getFirst(k) { const s=S[k]; return s&&s.size?[...s][0]:null; }
function getAll(k) { return S[k]?[...S[k]]:[]; }
function freeVal(id) { const el=document.getElementById('an-'+id); return el?el.value.trim():''; }
function pv(id) { const el=document.getElementById('an-'+id); return el?el.value.trim():''; }
function joinList(a) {
  if(!a.length) return '';
  if(a.length===1) return a[0];
  return a.slice(0,-1).join(', ')+' e '+a[a.length-1];
}

// ─── PATIENT IDENTITY ────────────────────────────────
function buildIdent() { return ''; } // identificação removida: a evolução não leva nome, idade ou sexo

function lead() {
  const id=buildIdent();
  return id?id+' comparece':'Paciente comparece';
}

// ─── OPENING SENTENCE HELPERS ────────────────────────
function qpOpen(isFirst, acao) {
  if(isFirst) return lead()+' à consulta '+acao;
  return 'Refere também '+acao.replace(/^referindo\s*/,'');
}
function progOpen(isFirst, acao) {
  if(isFirst) return lead()+' '+acao;
  return 'Comparece adicionalmente '+acao;
}

// ─── APP / HÁBITOS SUFFIX ────────────────────────────
// v4: inclui o texto livre de APP de todos os painéis (antes só o do painel Dor entrava no S)
const APP_FREE_IDS=['free-app','free-febre-app','free-disp-app','free-pp-app','free-nv-app','free-ton-app','free-ede-app','free-pal-app','free-tos-app','free-uri-app','free-evac-app','free-derm-app','free-dm-app','free-has-app'];
function buildAPP_hab_suffix() {
  const comoList=getAll('app-como'), alergia=getFirst('app-alergia'), med=getFirst('app-med');
  const hfList=getAll('app-hf'), hfNeg=getFirst('app-hf-neg');
  const tab=getFirst('hab-tab'), etil=getFirst('hab-etil'), af=getFirst('hab-af');
  const freeApp=[...new Set(APP_FREE_IDS.map(freeVal).filter(Boolean))].join('\n'), freeHab=freeVal('free-hab');
  let s='';
  if(comoList.length) s+=`\n\nAntecedentes: ${joinList(comoList)}.`;
  if(alergia) s+=' '+(alergia==='nega alergias medicamentosas'?'Nega alergias medicamentosas.':`Alergia: ${alergia.replace('alergia a ','')}.`);
  if(med) s+=` ${med.charAt(0).toUpperCase()+med.slice(1)}.`;
  if(hfList.length&&!hfList.includes('nega antecedentes familiares relevantes')) s+=` HF: ${joinList(hfList)}.`;
  else if(hfNeg) s+=` HF: nega antecedentes familiares relevantes.`;
  if(freeApp) s+=(s?'\n':'\n\n')+freeApp;
  const habP=[];
  if(tab) habP.push(tab);
  if(etil) habP.push(etil);
  if(af) habP.push(af);
  if(habP.length) s+=`\n\nHábitos: ${joinList(habP)}.`;
  if(freeHab) s+=(habP.length?' ':'\n\nHábitos: ')+freeHab;
  return s;
}

// ─── HMA SECTION BUILDERS ────────────────────────────
function buildHMA_dor(isFirst) {
  const loc=getFirst('dor-loc'),irr=getFirst('dor-irr');
  const carList=getAll('dor-car'),eva=getFirst('dor-eva');
  const melhoraList=getAll('dor-melhora'),pioraList=getAll('dor-piora');
  const assocList=getAll('dor-assoc'),dur=getFirst('dor-dur'),tempo=getFirst('dor-tempo');
  const free=freeVal('free-dor-hma');
  const subLabel=currentDorSub?({toracica:'dor torácica',abdominal:'dor abdominal',cefaleia:'cefaleia',lombar:'dor lombar',mmii:'dor em membros inferiores',generica:'dor'}[currentDorSub]||'dor'):'dor';
  let s=qpOpen(isFirst,`referindo ${subLabel}`);
  if(loc) s+=` de localização ${loc}`;
  if(irr) s+=`, ${irr}`;
  if(carList.length) s+=`, de caráter ${carList.join(' e ')}`;
  if(eva) s+=`, de intensidade ${eva}`;
  if(dur) s+=`, de ${dur}`;
  if(tempo) s+=`, ${tempo}`;
  s+='.';
  if(melhoraList.length||pioraList.length){
    const pts=[];
    if(melhoraList.length) pts.push(`melhora com ${joinList(melhoraList)}`);
    if(pioraList.length) pts.push(`piora com ${joinList(pioraList)}`);
    s+=' Relata '+pts.join('; ')+'.';
  }
  const assocFilt=assocList.filter(v=>v!=='sem sintomas associados');
  if(assocFilt.length) s+=` Associa-se a ${joinList(assocFilt)}.`;
  else if(assocList.includes('sem sintomas associados')) s+=' Nega sintomas associados.';
  if(free) s+=' '+free;
  return s;
}

function buildHMA_febre(isFirst) {
  const temp=getFirst('feb-temp'),padrao=getFirst('feb-padrao');
  const calafrio=getFirst('feb-calafrio'),tempo=getFirst('feb-tempo');
  const assocList=getAll('feb-assoc');
  const free=freeVal('free-febre-hma');
  let s=qpOpen(isFirst,'referindo febre');
  if(temp) s+=` ${temp}`;
  if(padrao) s+=`, de padrão ${padrao}`;
  if(tempo) s+=`, ${tempo}`;
  s+='.';
  if(calafrio) s+=calafrio==='sem calafrios'?' Nega calafrios.':` Refere ${calafrio}.`;
  const assocFilt=assocList.filter(v=>v!=='sem sintomas associados');
  if(assocFilt.length) s+=` Associa-se a ${joinList(assocFilt)}.`;
  else if(assocList.includes('sem sintomas associados')) s+=' Nega outros sintomas associados.';
  if(free) s+=' '+free;
  return s;
}

function buildHMA_dispneia(isFirst) {
  const nyha=getFirst('disp-nyha'),ort=getFirst('disp-ort'),dpn=getFirst('disp-dPN');
  const ini=getFirst('disp-ini'),tempo=getFirst('disp-tempo');
  const assocList=getAll('disp-assoc');
  const free=freeVal('free-disp-hma');
  let s=qpOpen(isFirst,'referindo dispneia');
  if(nyha) s+=` ${nyha}`;
  if(ini) s+=`, de ${ini}`;
  if(tempo) s+=`, ${tempo}`;
  s+='.';
  if(ort&&ort!=='sem ortopneia') s+=` Refere ${ort}.`; else if(ort) s+=' Nega ortopneia.';
  if(dpn&&dpn.includes('com')) s+=' Refere DPN.'; else if(dpn) s+=' Nega DPN.';
  const assocFilt=assocList.filter(v=>v!=='sem sintomas associados');
  if(assocFilt.length) s+=` Sintomas associados: ${joinList(assocFilt)}.`;
  if(free) s+=' '+free;
  return s;
}

function buildHMA_perdaPeso(isFirst) {
  const mag=getFirst('pp-mag'),intent=getFirst('pp-int'),apet=getFirst('pp-apet'),tempo=getFirst('pp-tempo');
  const assocList=getAll('pp-assoc');
  const free=freeVal('free-pp-hma');
  let s=qpOpen(isFirst,'referindo perda de peso');
  if(mag) s+=` (${mag})`;
  if(intent) s+=`, ${intent}`;
  if(tempo) s+=`, ${tempo}`;
  s+='.';
  if(apet) s+=apet==='com apetite preservado'?' Refere apetite preservado.':` Refere ${apet}.`;
  const assocFilt=assocList.filter(v=>v!=='sem sintomas associados');
  if(assocFilt.length) s+=` Associa-se a ${joinList(assocFilt)}.`;
  if(free) s+=' '+free;
  return s;
}

function buildHMA_nausea(isFirst) {
  const pres=getFirst('nv-pres'),carList=getAll('nv-car'),rel=getFirst('nv-rel'),tempo=getFirst('nv-tempo');
  const assocList=getAll('nv-assoc');
  const free=freeVal('free-nv-hma');
  let s=qpOpen(isFirst,`referindo ${pres||'náuseas e/ou vômitos'}`);
  if(carList.length) s+=`, de conteúdo ${joinList(carList)}`;
  if(rel) s+=`, ${rel}`;
  if(tempo) s+=`, de ${tempo}`;
  s+='.';
  const assocFilt=assocList.filter(v=>v!=='sem sintomas associados');
  if(assocFilt.length) s+=` Associa-se a ${joinList(assocFilt)}.`;
  if(free) s+=' '+free;
  return s;
}

function buildHMA_tontura(isFirst) {
  const tipo=getFirst('ton-tipo'),gatilhoList=getAll('ton-gatilho');
  const assocList=getAll('ton-assoc'),tempo=getFirst('ton-tempo');
  const free=freeVal('free-ton-hma');
  let s=qpOpen(isFirst,`referindo ${tipo||'tontura'}`);
  const gFilt=gatilhoList.filter(v=>v!=='sem fator desencadeante identificado');
  if(gFilt.length) s+=`, desencadeada por ${joinList(gFilt)}`;
  if(tempo) s+=`, ${tempo}`;
  s+='.';
  const assocFilt=assocList.filter(v=>v!=='sem sintomas associados');
  if(assocFilt.length) s+=` Associa-se a ${joinList(assocFilt)}.`;
  if(free) s+=' '+free;
  return s;
}

function buildHMA_edema(isFirst) {
  const loc=getFirst('ede-loc'),car=getFirst('ede-car'),variac=getFirst('ede-var'),tempo=getFirst('ede-tempo');
  const assocList=getAll('ede-assoc');
  const free=freeVal('free-ede-hma');
  let s=qpOpen(isFirst,'referindo edema');
  if(loc) s+=` ${loc}`;
  if(car) s+=`, ${car}`;
  if(variac) s+=`, ${variac}`;
  if(tempo) s+=`, ${tempo}`;
  s+='.';
  const assocFilt=assocList.filter(v=>v!=='sem sintomas associados');
  if(assocFilt.length) s+=` Associa-se a ${joinList(assocFilt)}.`;
  if(free) s+=' '+free;
  return s;
}

function buildHMA_palpitacoes(isFirst) {
  const car=getFirst('pal-car'),dur=getFirst('pal-dur');
  const gatilhoList=getAll('pal-gatilho'),assocList=getAll('pal-assoc'),tempo=getFirst('pal-tempo');
  const free=freeVal('free-pal-hma');
  let s=qpOpen(isFirst,'referindo palpitações');
  if(car) s+=` ${car}`;
  if(dur) s+=`, com duração de ${dur}`;
  const gFilt=gatilhoList.filter(v=>v!=='sem fator identificado');
  if(gFilt.length) s+=`, desencadeadas por ${joinList(gFilt)}`;
  if(tempo) s+=`, ${tempo}`;
  s+='.';
  const assocFilt=assocList.filter(v=>v!=='sem sintomas associados');
  if(assocFilt.length) s+=` Associa-se a ${joinList(assocFilt)}.`;
  if(free) s+=' '+free;
  return s;
}

function buildHMA_tosse(isFirst) {
  const car=getFirst('tos-car'),exp=getFirst('tos-exp'),per=getFirst('tos-per'),tempo=getFirst('tos-tempo');
  const assocList=getAll('tos-assoc');
  const free=freeVal('free-tos-hma');
  let s=qpOpen(isFirst,'referindo tosse');
  if(car) s+=` ${car}`;
  if(exp&&exp!=='sem expectoração') s+=` com expectoração ${exp.replace('com expectoração ','')}`; else if(exp==='sem expectoração') s+=', sem expectoração';
  if(per) s+=`, predominantemente ${per}`;
  if(tempo) s+=`, ${tempo}`;
  s+='.';
  const assocFilt=assocList.filter(v=>v!=='sem sintomas associados');
  if(assocFilt.length) s+=` Associa-se a ${joinList(assocFilt)}.`;
  if(free) s+=' '+free;
  return s;
}

function buildHMA_urinario(isFirst) {
  const sintList=getAll('uri-sint'),car=getFirst('uri-car');
  const loc=getFirst('uri-loc'),assocList=getAll('uri-assoc'),tempo=getFirst('uri-tempo');
  const free=freeVal('free-uri-hma');
  let s=qpOpen(isFirst,'referindo');
  s+=sintList.length?` ${joinList(sintList)}`:' queixas urinárias';
  if(car) s+=`, ${car}`;
  if(loc&&loc!=='sem dor associada') s+=`, com dor ${loc}`;
  if(tempo) s+=`, ${tempo}`;
  s+='.';
  const assocFilt=assocList.filter(v=>v!=='sem sintomas sistêmicos');
  if(assocFilt.length) s+=` Associa-se a ${joinList(assocFilt)}.`;
  else if(assocList.includes('sem sintomas sistêmicos')) s+=' Nega sintomas sistêmicos.';
  if(free) s+=' '+free;
  return s;
}

function buildHMA_evacuacao(isFirst) {
  const tipo=getFirst('evac-tipo');
  const freq=getFirst('evac-freq'),cons=getFirst('evac-cons');
  const constDet=getAll('const-det'),sangCar=getFirst('sang-car');
  const tempo=getFirst('evac-tempo'),assocList=getAll('evac-assoc');
  const free=freeVal('free-evac-hma');
  let acao='referindo ';
  if(tipo==='diarreia'){
    acao+='diarreia';
    const dets=[];
    if(freq) dets.push(freq);
    if(cons) dets.push(`consistência ${cons}`);
    if(dets.length) acao+=` (${dets.join(', ')})`;
  } else if(tipo==='constipação intestinal'){
    acao+='constipação intestinal';
    if(constDet.length) acao+=`, com ${joinList(constDet)}`;
  } else if(tipo==='hematoquezia (sangramento retal)'){
    acao+='hematoquezia';
    if(sangCar) acao+=` (${sangCar})`;
  } else if(tipo){ acao+=tipo; } else { acao+='queixas evacuatórias'; }
  if(tempo) acao+=`, ${tempo}`;
  let s=qpOpen(isFirst,acao)+'.';
  const assocFilt=assocList.filter(v=>v!=='sem sintomas associados');
  if(assocFilt.length) s+=` Associa-se a ${joinList(assocFilt)}.`;
  if(free) s+=' '+free;
  return s;
}

function buildHMA_dermatologia(isFirst) {
  const tipoList=getAll('derm-tipo'),dist=getFirst('derm-dist'),reg=getFirst('derm-reg');
  const carList=getAll('derm-car'),inicio=getFirst('derm-inicio'),tempo=getFirst('derm-tempo');
  const fatorList=getAll('derm-fator'),assocList=getAll('derm-assoc');
  const free=freeVal('free-derm-hma');
  let acao='referindo ';
  acao+=tipoList.length>1?`lesões do tipo ${joinList(tipoList)}`:tipoList.length?`lesão do tipo ${tipoList[0]}`:'lesão dermatológica';
  if(dist) acao+=`, ${dist}`;
  if(reg) acao+=`, ${reg}`;
  if(carList.length) acao+=`, ${joinList(carList)}`;
  if(inicio) acao+=`, de ${inicio}`;
  if(tempo) acao+=`, há ${tempo}`;
  let s=qpOpen(isFirst,acao)+'.';
  const fFilt=fatorList.filter(v=>v!=='sem fator desencadeante identificado');
  if(fFilt.length) s+=` Fator desencadeante: ${joinList(fFilt)}.`;
  const assocFilt=assocList.filter(v=>v!=='sem sintomas sistêmicos');
  if(assocFilt.length) s+=` Sintomas sistêmicos: ${joinList(assocFilt)}.`;
  else if(assocList.includes('sem sintomas sistêmicos')) s+=' Nega sintomas sistêmicos.';
  if(free) s+=' '+free;
  return s;
}

function buildHMA_dm_descomp(isFirst) {
  const sintList=getAll('dm-sint'),glic=getFirst('dm-glic');
  const ades=getFirst('dm-ades'),causaList=getAll('dm-causa'),hba1c=getFirst('dm-hba1c');
  const free=freeVal('free-dm-hma');
  const semSint=sintList.includes('sem sintomas no momento');
  const sints=sintList.filter(v=>v!=='sem sintomas no momento');
  let s;
  if(isFirst){
    const id=buildIdent();
    s=(id?id:'Paciente')+', portador(a) de DM2, comparece à consulta';
    if(semSint) s+=' para acompanhamento, sem sintomas de descompensação';
    else if(sints.length) s+=` referindo ${joinList(sints)}, sugestivos de descompensação glicêmica`;
    else s+=' com quadro de descompensação glicêmica';
  } else {
    s='Portador(a) de DM2';
    if(semSint) s+=': sem sintomas de descompensação';
    else if(sints.length) s+=`: refere ${joinList(sints)}, sugestivos de descompensação glicêmica`;
    else s+=': descompensação glicêmica';
  }
  s+='.';
  if(glic&&glic!=='não verificou a glicemia') s+=` Glicemia: ${glic}.`;
  if(ades) s+=` Refere ${ades}.`;
  const cFilt=causaList.filter(v=>v!=='sem fator desencadeante identificado');
  if(cFilt.length) s+=` Fator desencadeante: ${joinList(cFilt)}.`;
  if(hba1c) s+=` ${hba1c}.`;
  if(free) s+=' '+free;
  return s;
}

function buildHMA_has_descomp(isFirst) {
  const sintList=getAll('has-sint'),pa=getFirst('has-pa');
  const ades=getFirst('has-ades'),causaList=getAll('has-causa'),lotList=getAll('has-lot');
  const free=freeVal('free-has-hma');
  const semSint=sintList.includes('assintomático(a) — PA elevada em aferição de rotina');
  const sints=sintList.filter(v=>!v.includes('assintomático'));
  let s;
  if(isFirst){
    const id=buildIdent();
    s=(id?id:'Paciente')+', portador(a) de HAS, comparece à consulta';
    if(semSint) s+=' assintomático(a), com PA elevada em aferição de rotina';
    else if(sints.length) s+=` referindo ${joinList(sints)}`;
    else s+=' com descompensação hipertensiva';
  } else {
    s='Portador(a) de HAS';
    if(semSint) s+=': PA elevada em aferição de rotina';
    else if(sints.length) s+=`: refere ${joinList(sints)}`;
    else s+=': descompensação hipertensiva';
  }
  s+='.';
  if(pa&&pa!=='não verificou a PA') s+=` PA: ${pa}.`;
  if(ades) s+=` Refere ${ades}.`;
  const cFilt=causaList.filter(v=>v!=='sem causa identificada');
  if(cFilt.length) s+=` Causa provável: ${joinList(cFilt)}.`;
  const lotFilt=lotList.filter(v=>v!=='sem sinais de lesão de órgão-alvo');
  if(lotFilt.length) s+=` Sinais de LOA: ${joinList(lotFilt)}.`;
  else if(lotList.includes('sem sinais de lesão de órgão-alvo')) s+=' Sem LOA.';
  if(free) s+=' '+free;
  return s;
}

// ─── PROG SECTION BUILDERS ───────────────────────────
function buildProg_renovacao(isFirst) {
  const medList=getAll('ren-med'),status=getFirst('ren-status');
  const tol=getFirst('ren-tol'),queixas=getFirst('ren-queixas'),ultima=getFirst('ren-ultima');
  const free=freeVal('free-ren');
  let s=progOpen(isFirst,'à UBS para renovação de receita.');
  if(medList.length) s+=` Em uso de ${joinList(medList)}.`;
  if(status) s+=` Refere ${status}.`;
  if(tol==='boa tolerância, sem efeitos adversos relatados') s+=' Boa tolerância, sem efeitos adversos.';
  else if(tol==='relata efeitos adversos') s+=' Relata efeitos adversos.';
  if(queixas==='sem novas queixas no período') s+=' Nega novas queixas.';
  else if(queixas) s+=` Refere ${queixas}.`;
  if(ultima) s+=` Última consulta ${ultima}.`;
  if(free) s+='\n'+free;
  return s;
}

function buildProg_exames(isFirst) {
  const ctxList=getAll('ex-ctx'),tipoList=getAll('ex-tipo');
  const status=getFirst('ex-status'),period=getFirst('ex-period');
  const free=freeVal('free-ex');
  const labText=buildLabText();
  let acao='à consulta trazendo resultado de exame';
  if(tipoList.length>1) acao='à consulta trazendo resultado de exames';
  if(tipoList.length) acao+=` ${joinList(tipoList)}`;
  if(ctxList.length) acao+=`, para acompanhamento de ${joinList(ctxList)}`;
  if(period) acao+=` (${period})`;
  let s=progOpen(isFirst,acao)+'.';
  if(status==='dentro dos parâmetros de normalidade') s+=' Resultados dentro da normalidade.';
  else if(status==='com alterações leves') s+=' Resultados com alterações leves.';
  else if(status==='com alterações significativas a discutir') s+=' Resultados com alterações significativas.';
  else if(status==='sem exames anteriores para comparação') s+=' Sem comparativo anterior.';
  if(labText) s+='\n\n'+labText;
  if(free) s+='\n'+free;
  return s;
}

function buildProg_rotina(isFirst) {
  const comorbList=getAll('rot-comorb'),status=getFirst('rot-status');
  const metaList=getAll('rot-metas'),queixas=getFirst('rot-queixas'),periodo=getFirst('rot-periodo');
  const free=freeVal('free-rot');
  let acao='para consulta de rotina';
  if(comorbList.length) acao+=` e acompanhamento de ${joinList(comorbList)}`;
  if(periodo) acao+=`, sem consulta ${periodo}`;
  let s=progOpen(isFirst,acao)+'.';
  if(status) s+=` Refere ${status}.`;
  if(metaList.length) s+=` Metas atingidas: ${joinList(metaList)}.`;
  if(queixas==='sem queixas no período') s+=' Nega novas queixas.';
  else if(queixas) s+=` Refere ${queixas}.`;
  if(free) s+='\n'+free;
  return s;
}

// ─── QP DISPATCHER ───────────────────────────────────
function getQPSection(qp, isFirst) {
  switch(qp){
    case 'dor':         return buildHMA_dor(isFirst);
    case 'febre':       return buildHMA_febre(isFirst);
    case 'dispneia':    return buildHMA_dispneia(isFirst);
    case 'perda-peso':  return buildHMA_perdaPeso(isFirst);
    case 'nausea':      return buildHMA_nausea(isFirst);
    case 'tontura':     return buildHMA_tontura(isFirst);
    case 'edema':       return buildHMA_edema(isFirst);
    case 'palpitacoes': return buildHMA_palpitacoes(isFirst);
    case 'tosse':       return buildHMA_tosse(isFirst);
    case 'urinario':    return buildHMA_urinario(isFirst);
    case 'evacuacao':   return buildHMA_evacuacao(isFirst);
    case 'dermatologia':return buildHMA_dermatologia(isFirst);
    case 'dm-descomp':  return buildHMA_dm_descomp(isFirst);
    case 'has-descomp': return buildHMA_has_descomp(isFirst);
    default: return '';
  }
}

function getProgSection(prog, isFirst) {
  switch(prog){
    case 'renovacao': return buildProg_renovacao(isFirst);
    case 'exames':    return buildProg_exames(isFirst);
    case 'rotina':    return buildProg_rotina(isFirst);
    default: return '';
  }
}

// ─── LAB TEXT ────────────────────────────────────────
const LAB_FIELDS=[
  ['lab-hb','Hb'],['lab-ht','Ht'],['lab-gl','GL'],['lab-plaq','Plaq'],
  ['lab-gj','GJ'],['lab-hba1c','HbA1c'],['lab-k','K'],['lab-acur','Ác Úr'],
  ['lab-cr','Cr'],['lab-ur','Ur'],['lab-ct','CT'],['lab-hdl','HDL'],
  ['lab-ldl','LDL'],['lab-trig','Trig'],['lab-tgo','TGO'],['lab-tgp','TGP'],
  ['lab-tsh','TSH'],['lab-t4l','T4L'],['lab-vitd','VitD'],['lab-vitb12','VitB12']
];
const FE_FIELDS=[['lab-fe-ser','Fe sérico'],['lab-ferrit','Ferritina'],['lab-ctlf','CTLF'],['lab-ist','IST']];
function buildLabText() {
  const parts=[];
  const labData=pv('lab-data');
  const labVals=LAB_FIELDS.map(([id,label])=>{const v=pv(id);return v?`${label} ${v}`:null;}).filter(Boolean);
  const labFree=freeVal('free-lab'); if(labFree) labVals.push(labFree);
  if(labVals.length){
    const d=labData?` (${labData})`:'';
    parts.push(`LAB${d}: ${labVals.join(' / ')}`);
  }
  const feData=pv('lab-fe-data');
  const feVals=FE_FIELDS.map(([id,label])=>{const v=pv(id);return v?`${label} ${v}`:null;}).filter(Boolean);
  if(feVals.length){
    const d=feData?` (${feData})`:'';
    parts.push(`Cinética do Ferro${d}: ${feVals.join(' / ')}`);
  }
  const easData=pv('eas-data'),easList=getAll('eas-achados'),easFree=freeVal('free-eas');
  if(easList.length||easFree){
    const d=easData?` (${easData})`:'';
    let t=`EAS${d}:`;
    if(easList.length) t+=` ${easList.join(' / ')}`;
    if(easFree) t+=(easList.length?' / ':' ')+easFree;
    parts.push(t);
  }
  const microData=pv('micro-data'),microVal=pv('micro-val');
  if(microVal){
    const d=microData?` (${microData})`:'';
    parts.push(`Microalbuminúria${d}: ${microVal}`);
  }
  return parts.join('\n');
}

// ─── MAIN S BUILDER ──────────────────────────────────
function buildSText() {
  const allQPs=[...activeQPs], allProgs=[...activeProgs];
  if(!allQPs.length&&!allProgs.length) return '';
  let sections=[], isFirst=true;
  for(const prog of allProgs){
    const t=getProgSection(prog,isFirst);
    if(t){sections.push(t);isFirst=false;}
  }
  for(const qp of allQPs){
    const t=getQPSection(qp,isFirst);
    if(t){sections.push(t);isFirst=false;}
  }
  let s=sections.filter(Boolean).join('\n\n');
  s+=buildAPP_hab_suffix();
  return s;
}

// ─── O / A / P BUILDERS ──────────────────────────────
function buildO() {
  const eg=getFirst('ef-eg'),egDet=getAll('ef-eg-det');
  const ac=getFirst('ef-ac'),ap=getFirst('ef-ap'),abd=getFirst('ef-abd'),mmii=getFirst('ef-mmii');
  const free=freeVal('free-ef');
  let parts=[];
  if(eg){let egStr=eg;if(egDet.length) egStr+='; '+joinList(egDet);parts.push(egStr);}
  if(ac) parts.push(`ACV: ${ac}`);
  if(ap) parts.push(`AR: ${ap}`);
  if(abd) parts.push(`Abdome: ${abd}`);
  if(mmii) parts.push(`MMII: ${mmii}`);
  let s=parts.join('. ');
  if(s&&!s.endsWith('.')) s+='.';
  if(free) s+=(s?'\n':'')+free;
  return s;
}

function buildA() { return freeVal('free-hd'); }

function buildP() {
  const exList=getAll('cond-ex');
  const exFree=freeVal('free-cond-ex'); if(exFree) exFree.split(/\s*[,;\n]\s*/).filter(Boolean).forEach(x=>exList.push(x));
  const condutaList=getAll('cond-conduta');
  const renInstrList=getAll('ren-instr');
  const free=freeVal('free-cond');
  let lines=[];
  if(exList.length) lines.push(`- Exames solicitados: ${joinList(exList)}.`);
  condutaList.forEach(c=>lines.push(`- ${c}`));
  renInstrList.forEach(r=>lines.push(`- ${r}`));
  if(free) lines.push(free);
  return lines.filter(Boolean).join('\n');
}
