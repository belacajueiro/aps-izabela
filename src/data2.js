// ───────────── LOTE 2 – revisão 08/10/2026
Object.assign(FONTES, {
  sp_sifilis: {t: "SMS São Paulo. Nota Técnica nº 02/2025 – uso de benzilpenicilina benzatina no tratamento da sífilis (reproduz esquemas do PCDT IST 2022, MS) (norma municipal).", f: "F", url: "https://prefeitura.sp.gov.br/documents/d/saude/nota-tecnica-n-02-2025-orientacoes-sobre-o-uso-e-registro-de-dispensacao-de-benzilpenicilina-benzatina-1-200-000-ui-no-tratamento-da-sifilis-pdf"},
  bvs_herpes: {t: "BVS APS – Segunda Opinião Formativa sofs-43645 (2021): conduta no herpes genital na gestação, com base no PCDT IST (MS).", f: "F", url: "https://aps-repo.bvs.br/aps/qual-a-conduta-para-lesoes-herpeticas-genitais-na-gestacao-no-caso-de-primoinfeccao-ou-recidivante/"},
  pcdt_ist22: {t: "Ministério da Saúde. PCDT para Atenção Integral às Pessoas com IST, 2022 (terapia dupla ceftriaxona + azitromicina para uretrite). Quadros de dose não abertos no original nesta sessão.", f: "C", url: "https://portaldeboaspraticas.iff.fiocruz.br/biblioteca/pcdt-para-atencao-as-pessoas-com-ist/"},
  ses_chik: {t: "SES-MG. Fluxograma de manejo da dor musculoesquelética na chikungunya – adulto (publicado em jan/2025; sem data no documento; baseado nas diretrizes do MS).", f: "F", url: "https://www.saude.mg.gov.br/wp-content/uploads/2025/01/Fluxograma-manejo-chikungunya-no-adulto.pdf"},
  ats_pac: {t: "Metlay JP et al. ATS/IDSA Guideline – Community-acquired Pneumonia in Adults, 2019 (diretriz).", f: "C", url: ""},
  sbpt_pac: {t: "Corrêa RA et al. Recomendações para o manejo da pneumonia adquirida na comunidade – SBPT, 2018 (diretriz de sociedade).", f: "C", url: ""},
  gold: {t: "GOLD – Global Strategy for the Diagnosis, Management and Prevention of COPD, relatório 2025 (diretriz internacional).", f: "C", url: ""},
  pcdt_dpoc: {t: "Ministério da Saúde/CONITEC. PCDT Doença Pulmonar Obstrutiva Crônica (versão vigente não aberta nesta sessão).", f: "C", url: ""},
  cochrane_bronq: {t: "Cochrane. Antibiotics for acute bronchitis, 2017 (revisão sistemática).", f: "C", url: ""},
  aria: {t: "Bousquet J et al. ARIA – Allergic Rhinitis and its Impact on Asthma, atualizações 2019/2020 (diretriz).", f: "C", url: ""},
  zoster_ecr: {t: "Beutner KR et al. Valaciclovir compared with acyclovir for improved therapy for herpes zoster in immunocompetent adults. Antimicrob Agents Chemother, 1995 (ECR).", f: "C", url: ""},
  cochrane_tinea: {t: "Cochrane. Topical treatments for fungal infections of the skin and nails of the foot, 2007; e revisões sobre tinea corporis/cruris, 2014 (revisões sistemáticas).", f: "C", url: ""},
  eaaci_urt: {t: "Zuberbier T et al. EAACI/GA²LEN/EuroGuiDerm/APAAACI Guideline for Urticaria, 2022 (diretriz).", f: "C", url: ""},
  cochrane_constip: {t: "Lee-Robichaud H et al. Lactulose versus polyethylene glycol for chronic constipation. Cochrane, 2010 (revisão sistemática).", f: "C", url: ""},
  hemor: {t: "Alonso-Coello P et al. Fiber for the treatment of hemorrhoids complications (metanálise, 2006); metanálise de flavonoides (2006).", f: "C", url: ""},
  gota_ecr: {t: "Janssens HJ et al. Lancet, 2008; Rainer TH et al. Ann Intern Med, 2016 (ECR prednisolona × AINE na gota aguda); FitzGerald JD et al. ACR Guideline for Gout, 2020.", f: "C", url: ""},
  entorse: {t: "Stiell IG et al. Regras de Ottawa para tornozelo (estudos de validação); Derry S et al. Topical NSAIDs for acute musculoskeletal pain in adults. Cochrane, 2015.", f: "C", url: ""},
  nice_ansiedade: {t: "NICE CG113. Generalised anxiety disorder and panic disorder in adults, 2011 (atualizada 2020) (diretriz).", f: "C", url: ""},
  acp_insonia: {t: "Qaseem A et al. ACP Clinical Guideline – Management of Chronic Insomnia Disorder in Adults, 2016 (diretriz).", f: "C", url: ""},
  stoffel: {t: "Stoffel NU et al. Iron absorption from supplements is greater with alternate day than with consecutive day dosing in iron-deficient anemic women. Haematologica/Lancet Haematol, 2020 (ECR).", f: "C", url: ""}
});

CONDICOES.push(
// ───────────────────────── RESPIRATÓRIO
{
id: "pac", nome: "Pneumonia adquirida na comunidade (adulto, ambulatorial)", sistema: "Respiratório e ORL", risco: "alto",
ciap: "R81", cid: "J18.9", tags: "pneumonia febre tosse crepitação CRB-65 amoxicilina antibiótico raio x",
alerta: "CRB-65 ≥ 2, SpO₂ < 92%, FR ≥ 30, PAS < 90, confusão ou incapacidade de tomar medicação oral: encaminhar à urgência.",
S: `Paciente, ___ anos, com tosse ___ (produtiva/seca), febre ___ °C e dispneia ___ há ___ dias. Dor torácica pleurítica: ___.
Comorbidades: ___ (DPOC, ICC, DRC, DM, hepatopatia, alcoolismo, neoplasia, imunossupressão / nenhuma). Antibiótico nos últimos 3 meses: ___. Internação recente: ___.
Tabagismo: ___. Medicações: ___. Alergias: ___.`,
O: `___ estado geral, ___ (orientado / confuso).
${VITAIS}
AR: ___ (estertores crepitantes / MV diminuído / sopro tubário) em ___. Uso de musculatura acessória: ___.
CRB-65: ___ (Confusão; FR ≥ 30; PAS < 90 ou PAD ≤ 60; idade ≥ 65).
RX de tórax: ___ (solicitado / consolidação em ___ / não disponível).`,
A: `Pneumonia adquirida na comunidade, CRB-65 ___, ___ (sem / com) comorbidade, sem critérios de internação.`,
P: `- CRB-65 0 (e 1 com avaliação clínica favorável): tratamento ambulatorial.
- Antibiótico conforme presença de comorbidade.
- RX de tórax para confirmação se disponível, sem atrasar o antibiótico.
- Hidratação, antitérmico.
- Reavaliação em 48–72 h obrigatória (telefone ou presencial).
- Oriento sinais de piora e retorno imediato.`,
rx: [
 {trilha: "ambos", titulo: "Sem comorbidade", texto: `USO ORAL
1. Amoxicilina 500 mg ______ 42 cápsulas
   Tomar 2 cápsulas (1 g) de 8/8h por 5 a 7 dias.`, dose: "NV", nota: "Alternativa (alergia à penicilina): doxiciclina 100 mg 12/12h por 5 a 7 dias."},
 {trilha: "ambos", titulo: "Com comorbidade", texto: `USO ORAL
1. Amoxicilina 500 mg + clavulanato 125 mg ______ 21 comprimidos
   Tomar 1 comprimido de 8/8h por 5 a 7 dias.
   +
2. Azitromicina 500 mg ______ 3 comprimidos
   Tomar 1 comprimido 1 vez ao dia por 3 dias.
   (ou doxiciclina 100 mg 12/12h por 5 a 7 dias no lugar da azitromicina)`, dose: "NV", nota: "ATS/IDSA usa amoxicilina-clavulanato 875/125 mg 12/12h; com o comprimido de 500/125 mg disponível em Betim, 1 comprimido de 8/8h dá dose total semelhante de amoxicilina."},
 {trilha: "ambos", titulo: "Sintomáticos", texto: `USO ORAL
1. Dipirona 500 mg ______ 1 caixa
   Tomar 1 a 2 comprimidos de 6/6h se febre ou dor.`, dose: "NV"}
],
orient: `Você está com pneumonia. Tome o antibiótico nos horários e até o fim.
Beba bastante líquido e descanse.
É obrigatório reavaliar em 2 a 3 dias. Volte antes se piorar.`,
alarme: ["Falta de ar piorando ou lábios arroxeados", "Confusão ou sonolência", "Febre que não melhora após 72 h de antibiótico", "Não consegue tomar os remédios ou beber líquidos", "Dor no peito forte", "Pressão baixa, tontura ao levantar"],
encaminhar: "CRB-65 ≥ 2, hipoxemia, sepse, derrame pleural, falha em 72 h → urgência/internação.",
sus: {nacional: "RENAME 2024: amoxicilina 500 mg, amoxicilina+clavulanato 500/125 mg, azitromicina 500 mg, claritromicina 500 mg (Básico); doxiciclina 100 mg (Estratégico).", betim: "REMUME Betim: amoxicilina 500 mg, amoxicilina+clavulanato 500/125 mg, azitromicina 500 mg, claritromicina 500 mg e doxiciclina 100 mg disponíveis."},
evid: {resumo: "ATS/IDSA 2019 recomenda amoxicilina 1 g 8/8h (ou doxiciclina) para adulto sem comorbidade, e betalactâmico + macrolídeo (ou doxiciclina) para quem tem comorbidade. A SBPT 2018 tem orientação semelhante. Cursos de 5 dias com melhora clínica são suficientes. CRB-65 orienta o local de tratamento.", certeza: "Moderada (estimada)", fontes: ["ats_pac", "sbpt_pac", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Doses: conferir bula.", "Acesso a RX de tórax na rede de Betim: não verificado."]
},
{
id: "bronquite", nome: "Bronquite aguda / tosse aguda", sistema: "Respiratório e ORL", risco: "baixo",
ciap: "R78", cid: "J20.9", tags: "tosse catarro bronquite viral xarope antibiótico",
S: `Paciente, ___ anos, com tosse ___ (seca/produtiva) há ___ dias, após quadro de IVAS. Febre: ___. Dispneia: ___. Chiado: ___.
Tabagismo: ___. Asma/DPOC: ___. Comorbidades: ___.`,
O: `BEG, eupneico.
${VITAIS}
AR: MV+ bilateral, ___ (roncos esparsos / sem ruídos adventícios), sem crepitações localizadas, sem sinais de consolidação.`,
A: `Bronquite aguda de provável etiologia viral, sem sinais de pneumonia.`,
P: `- Explico que a tosse pode durar até 3 semanas.
- Antibiótico não indicado.
- Medidas de conforto: hidratação, mel (se > 1 ano de idade), evitar fumo.
- Retorno se febre persistente, dispneia ou tosse > 3 semanas.`,
rx: [
 {trilha: "ambos", titulo: "Sintomáticos", texto: `USO ORAL
1. Mel – 1 colher de chá até 3 vezes ao dia para alívio da tosse (não usar em < 1 ano).
2. Paracetamol 500 mg ______ 1 caixa
   Tomar 1 a 2 comprimidos de 6/6h se dor ou febre.`, dose: "NV", nota: "Xaropes antitussígenos e expectorantes têm pouco ou nenhum benefício demonstrado."}
],
orient: `A tosse da bronquite costuma durar 2 a 3 semanas, mesmo melhorando aos poucos. Antibiótico não acelera a melhora.
Mel e líquidos mornos aliviam. Evite cigarro e fumaça.`,
alarme: ["Falta de ar", "Febre por mais de 3 dias", "Escarro com sangue", "Dor no peito ao respirar", "Tosse por mais de 3 semanas"],
encaminhar: "Suspeita de pneumonia → ver modelo de PAC. Tosse > 3 semanas → investigar tuberculose (sintomático respiratório: baciloscopia/TRM-TB).",
sus: {nacional: "Paracetamol: RENAME 2024 (Básico).", betim: "REMUME Betim: paracetamol 500 mg disponível."},
evid: {resumo: "Antibiótico reduz a duração da tosse em menos de 1 dia e aumenta eventos adversos (Cochrane 2017). Mel tem evidência de baixa certeza de alívio da tosse; antitussígenos de venda livre não têm benefício consistente.", certeza: "Moderada para ausência de benefício do antibiótico (estimada)", fontes: ["cochrane_bronq", "cab28"]},
mudancas: ["Entrada nova."],
nv: []
},
{
id: "dpoc-exac", nome: "Exacerbação de DPOC (leve a moderada)", sistema: "Respiratório e ORL", risco: "alto",
ciap: "R95", cid: "J44.1", tags: "dpoc enfisema bronquite crônica falta de ar catarro piorou exacerbação",
alerta: "Confusão, sonolência, SpO₂ < 88% apesar de O₂, FR > 30, uso de musculatura acessória ou instabilidade: urgência.",
S: `Paciente, ___ anos, com DPOC (GOLD ___), refere piora da dispneia, aumento do volume ___ e da purulência ___ do escarro há ___ dias.
Febre: ___. Desencadeante: ___. Medicação de manutenção: ___ (adesão ___). Exacerbações no último ano: ___. Oxigenoterapia domiciliar: ___.
Tabagismo atual: ___ maços/dia.`,
O: `___ estado geral, fala ___.
${VITAIS}  SpO₂ basal habitual: ___%
AR: sibilos ___, MV ___, uso de musculatura acessória ___. Edema de MMII: ___.`,
A: `Exacerbação de DPOC ___ (leve/moderada), ___ (com / sem) escarro purulento, sem critérios de internação.`,
P: `- Broncodilatador de curta ação (salbutamol ± ipratrópio) com espaçador.
- Prednisona 40 mg por 5 dias.
- Antibiótico se escarro purulento.
- O₂ se SpO₂ < 88% (alvo 88–92%).
- Revisar técnica inalatória, adesão e tabagismo.
- Reavaliação em 48–72 h e revisão do tratamento de manutenção após a crise.`,
rx: [
 {trilha: "ambos", titulo: "Crise", texto: `USO INALATÓRIO
1. Salbutamol 100 mcg/dose aerossol ______ 1 frasco
   Fazer 2 a 4 jatos com espaçador até de 4/4h se falta de ar.
2. Ipratrópio 20 mcg/dose aerossol ______ 1 frasco
   Fazer 2 a 4 jatos com espaçador de 6/6h.

USO ORAL
3. Prednisona 20 mg ______ 10 comprimidos
   Tomar 2 comprimidos (40 mg) pela manhã por 5 dias.`, dose: "NV"},
 {trilha: "ambos", titulo: "Se escarro purulento", texto: `USO ORAL
1. Amoxicilina 500 mg + clavulanato 125 mg ______ 15 comprimidos
   Tomar 1 comprimido de 8/8h por 5 dias.
   OU
2. Doxiciclina 100 mg ______ 10 comprimidos
   Tomar 1 comprimido de 12/12h por 5 dias.`, dose: "NV"},
 {trilha: "evidencia", titulo: "Manutenção após a crise – broncodilatador de longa ação", texto: `USO INALATÓRIO
1. LAMA + LABA (ex.: tiotrópio + olodaterol 2,5 + 2,5 mcg, ou umeclidínio + vilanterol 62,5 + 25 mcg) ______ 1 dispositivo
   Inalar 1 vez ao dia, todos os dias.`, dose: "NV", nota: "GOLD recomenda LAMA+LABA para quem exacerba. No SUS, só pelo CEAF (PCDT DPOC); fora disso, compra."}
],
orient: `Use a bombinha com espaçador. Tome o corticoide pelos 5 dias e o antibiótico até o fim, se receitado.
Parar de fumar é o tratamento que mais muda a evolução da DPOC: a unidade oferece apoio.
Vacinas contra gripe e pneumonia reduzem crises.`,
alarme: ["Falta de ar em repouso ou que impede falar", "Confusão ou sonolência", "Lábios arroxeados", "Inchaço nas pernas piorando", "Febre alta"],
encaminhar: "Critérios de gravidade → urgência. ≥ 2 exacerbações/ano ou 1 internação → avaliar critérios do PCDT DPOC para broncodilatador de longa ação (CEAF) e pneumologia.",
idealsus: {ideal: "Após uma exacerbação, a GOLD recomenda manutenção com broncodilatador de longa ação (LAMA+LABA; ICS associado se eosinófilos altos), que reduz novas exacerbações.", sus: "Na APS de Betim há apenas broncodilatadores de curta ação (salbutamol, ipratrópio) e beclometasona. LAMA/LABA estão na RENAME só no Componente Especializado.", ponte: "Para quem cumpre critérios do PCDT DPOC, abrir processo no CEAF (LME + espirometria). Até lá, ou se não cumprir, ipratrópio regular + salbutamol de resgate, ou compra do LAMA+LABA."},
sus: {nacional: "RENAME 2024: salbutamol, ipratrópio, prednisona, amoxicilina+clavulanato (Básico); doxiciclina (Estratégico); tiotrópio+olodaterol, umeclidínio+vilanterol, formoterol, budesonida+formoterol (Especializado).", betim: "REMUME Betim: salbutamol aerossol e nebulização, ipratrópio aerossol e solução, prednisona 20 mg, amoxicilina+clavulanato 500/125 mg, doxiciclina 100 mg disponíveis."},
evid: {resumo: "Corticoide sistêmico por 5 dias equivale a 14 dias (ECR REDUCE) e reduz falha de tratamento. Antibiótico beneficia sobretudo quem tem escarro purulento. LAMA+LABA reduz exacerbações em relação a monoterapia.", certeza: "Moderada a alta (estimada)", fontes: ["gold", "pcdt_dpoc", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Doses: conferir bula.", "Critérios do PCDT DPOC: conferir versão vigente."]
},
{
id: "rinite", nome: "Rinite alérgica", sistema: "Respiratório e ORL", risco: "baixo",
ciap: "R97", cid: "J30.4", tags: "alergia espirro coriza coceira nariz entupido corticoide nasal",
S: `Paciente, ___ anos, com espirros em salva, coriza hialina, prurido nasal e obstrução há ___ (dias/meses), ___ (intermitente/persistente). Desencadeantes: ___.
Impacto no sono, trabalho ou escola: ___. Asma associada: ___. Medicações já usadas: ___.`,
O: `BEG.
Rinoscopia: mucosa pálida e edemaciada, secreção hialina. Prega nasal transversa ___. Olheiras alérgicas ___.
AR: MV+ bilateral, sem sibilos.`,
A: `Rinite alérgica ___ (intermitente/persistente), ___ (leve / moderada a grave).`,
P: `- Controle ambiental (ácaros, fumaça, mofo).
- Corticoide nasal como 1ª linha para sintomas persistentes ou moderados.
- Anti-histamínico oral de 2ª geração se sintomas leves ou intermitentes, ou associado.
- Lavagem nasal com SF.
- Rastrear asma. Reavaliar em 4–8 semanas.`,
rx: [
 {trilha: "ambos", titulo: "Corticoide nasal (1ª linha)", texto: `USO NASAL
1. Budesonida 32 mcg spray nasal ______ 1 frasco
   Aplicar 2 jatos em cada narina 1 vez ao dia, uso contínuo enquanto houver sintomas. Direcionar o jato para fora (em direção à orelha).`, dose: "NV"},
 {trilha: "ambos", titulo: "Anti-histamínico", texto: `USO ORAL
1. Loratadina 10 mg ______ 30 comprimidos
   Tomar 1 comprimido 1 vez ao dia.

USO NASAL
2. Soro fisiológico 0,9% – lavar cada narina 2 a 3 vezes ao dia.`, dose: "NV"}
],
orient: `O spray de corticoide funciona com uso diário e regular; o efeito completo aparece em 1 a 2 semanas.
Diminua ácaros: lave roupas de cama semanalmente em água quente, evite tapetes e bichos de pelúcia no quarto, não fume dentro de casa.`,
alarme: ["Chiado ou falta de ar", "Dor facial com febre", "Sangramento nasal frequente"],
encaminhar: "Refratária ao tratamento otimizado, suspeita de pólipos ou desvio septal → otorrino.",
sus: {nacional: "RENAME 2024: budesonida nasal 32, 50 e 64 mcg, beclometasona nasal 50 mcg, loratadina, cloreto de sódio 0,9% nasal (Básico).", betim: "REMUME Betim: budesonida 32 mcg aerossol nasal e loratadina 10 mg disponíveis."},
evid: {resumo: "Corticoide nasal é mais eficaz que anti-histamínico oral para obstrução e sintomas totais (ARIA). Anti-histamínicos de 2ª geração são equivalentes entre si e preferíveis aos de 1ª geração, que sedam.", certeza: "Alta a moderada (estimada)", fontes: ["aria", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Posologia: conferir bula."]
},
// ───────────────────────── GENITURINÁRIO E IST
{
id: "pielonefrite", nome: "Pielonefrite aguda não complicada", sistema: "Geniturinário e saúde sexual", risco: "alto",
ciap: "U70", cid: "N10", tags: "infecção urinária febre dor lombar giordano rim ciprofloxacino ceftriaxona",
alerta: "Gestante, vômitos que impedem via oral, sepse, obstrução, DRC ou imunossupressão: urgência/internação.",
S: `Paciente, ___ anos, com febre ___ °C, calafrios, dor lombar ___ (D/E) e sintomas urinários há ___ dias. Náuseas/vômitos: ___ (tolera via oral?).
Gestação: ___. Comorbidades: ___ (DM, litíase, DRC). Antibiótico recente: ___. Alergias: ___.`,
O: `___ estado geral, ___ (hidratado/desidratado).
${VITAIS}
Giordano ___ (positivo à D/E). ABD: dor à palpação de flanco ___, sem irritação peritoneal.`,
A: `Pielonefrite aguda não complicada, estável, tolerando via oral.`,
P: `- Urocultura com antibiograma antes do antibiótico.
- Dose inicial parenteral de ceftriaxona na unidade (se disponível) e antibiótico oral.
- Analgesia, antitérmico e hidratação.
- Reavaliação em 48–72 h e ajuste pela urocultura.`,
rx: [
 {trilha: "ambos", titulo: "Na unidade (dose inicial)", texto: `USO INTRAMUSCULAR
1. Ceftriaxona 1 g – aplicar 1 g IM, dose única, antes de iniciar o oral.`, dose: "NV"},
 {trilha: "ambos", titulo: "Oral", texto: `USO ORAL
1. Ciprofloxacino 500 mg ______ 14 comprimidos
   Tomar 1 comprimido de 12/12h por 7 dias.`, dose: "NV", nota: "Se resistência local a quinolonas > 10% (dado de Betim não verificado), a dose de ceftriaxona é recomendada. Alternativa pelo antibiograma: sulfametoxazol+trimetoprima 800/160 mg 12/12h por 14 dias."},
 {trilha: "ambos", titulo: "Sintomáticos", texto: `USO ORAL
1. Dipirona 500 mg ______ 1 caixa
   Tomar 1 a 2 comprimidos de 6/6h se febre ou dor.`, dose: "NV"}
],
orient: `É uma infecção no rim. Tome o antibiótico nos horários e até o fim.
Beba bastante água. Volte em 2 a 3 dias para reavaliar e ver o resultado da cultura de urina.`,
alarme: ["Vômitos que impedem tomar o remédio", "Febre persistente após 72 h", "Tontura, pressão baixa ou confusão", "Pouca urina", "Dor muito forte"],
encaminhar: "Sepse, gestante, vômitos, obstrução ou falha em 72 h → urgência.",
sus: {nacional: "RENAME 2024: ciprofloxacino 250 e 500 mg, ceftriaxona 250 mg, 500 mg e 1 g, sulfametoxazol+trimetoprima (Básico).", betim: "REMUME Betim: ciprofloxacino 500 mg, ceftriaxona 1 g IM e sulfametoxazol+trimetoprima 400/80 mg disponíveis."},
evid: {resumo: "IDSA 2010: ciprofloxacino 500 mg 12/12h por 7 dias, com dose inicial de ceftriaxona onde a resistência a quinolonas supera 10%. Betalactâmicos orais são menos eficazes e exigem 10–14 dias.", certeza: "Moderada (estimada)", fontes: ["idsa_itu", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Resistência local de E. coli a quinolonas em Betim: não verificada.", "Doses: conferir bula."]
},
{
id: "uretrite", nome: "Corrimento uretral (uretrite)", sistema: "Geniturinário e saúde sexual", risco: "moderado",
ciap: "Y71 · Y99", cid: "N34.1 · A54.0 · A56.0", tags: "IST gonorreia clamídia secreção pênis ardência ceftriaxona azitromicina",
S: `Paciente, ___ anos, com corrimento uretral ___ (purulento/mucoide) e disúria há ___ dias. Prurido uretral: ___. Lesões genitais: ___.
Parcerias nos últimos 60 dias: ___. Uso de preservativo: ___. ISTs prévias: ___. PrEP: ___. Alergias: ___.`,
O: `BEG.
Genitália: secreção uretral ___ à expressão, sem úlceras. Linfonodos inguinais ___.
Testes rápidos: HIV ___, sífilis ___, hepatite B ___, hepatite C ___.`,
A: `Síndrome de corrimento uretral (cobertura para gonococo e clamídia).`,
P: `- Tratamento sindrômico imediato para gonococo + clamídia.
- Testes rápidos para HIV, sífilis, hepatites B e C; avaliar PrEP.
- Convocar e tratar parcerias dos últimos 60 dias.
- Abstinência sexual por 7 dias após o tratamento e até tratamento das parcerias.
- Retorno se sintomas persistirem após 7 dias.`,
rx: [
 {trilha: "ambos", titulo: "PCDT IST (MS) – terapia dupla", texto: `USO INTRAMUSCULAR
1. Ceftriaxona 500 mg – aplicar 500 mg IM, dose única.

USO ORAL
2. Azitromicina 500 mg ______ 2 comprimidos
   Tomar 2 comprimidos (1 g) juntos, dose única.`, dose: "NV", nota: "Em Betim a ceftriaxona IM é de 1 g: usar meia ampola (500 mg) conforme diluição da bula."},
 {trilha: "ambos", titulo: "Esquema preferido pelo CDC 2021 (melhor cura de clamídia)", texto: `USO INTRAMUSCULAR
1. Ceftriaxona 500 mg IM, dose única.

USO ORAL
2. Doxiciclina 100 mg ______ 14 comprimidos
   Tomar 1 comprimido de 12/12h por 7 dias.`, dose: "NV", nota: "Doxiciclina tem maior cura de clamídia retal que azitromicina; exige 7 dias de adesão. Disponível em Betim."}
],
orient: `É uma infecção sexualmente transmissível. Sua(s) parceria(s) dos últimos 2 meses precisam ser avaliadas e tratadas.
Não tenha relações sexuais por 7 dias após o tratamento e até que as parcerias tenham tratado.
Use preservativo. Retire preservativos gratuitamente na unidade.`,
alarme: ["Dor ou inchaço nos testículos", "Febre", "Dor nas articulações ou lesões de pele", "Persistência do corrimento após 7 dias"],
encaminhar: "Orquiepididimite com febre, falha terapêutica → reavaliar com cultura/biologia molecular se disponível.",
idealsus: {ideal: "CDC 2021: ceftriaxona 500 mg IM + doxiciclina 7 dias (melhor cura de clamídia, sobretudo retal).", sus: "PCDT IST: ceftriaxona 500 mg IM + azitromicina 1 g dose única. Ambos os esquemas usam medicamentos disponíveis em Betim.", ponte: "Azitromicina em dose única quando a adesão por 7 dias for duvidosa; doxiciclina quando houver exposição anal receptiva ou boa adesão."},
sus: {nacional: "RENAME 2024: ceftriaxona 250 mg, 500 mg e 1 g, azitromicina 500 mg (Básico), doxiciclina 100 mg (Estratégico).", betim: "REMUME Betim: ceftriaxona 1 g IM, azitromicina 500 mg e doxiciclina 100 mg disponíveis."},
evid: {resumo: "O PCDT IST manteve a terapia dupla com azitromicina; o CDC 2021 passou a preferir doxiciclina para clamídia após ECR mostrar maior cura retal. A resistência do gonococo à azitromicina cresce, por isso a ceftriaxona em dose de 500 mg é a base do esquema.", certeza: "Moderada (estimada)", fontes: ["pcdt_ist22", "cdc_ist", "rename", "remume"]},
divergencia: "PCDT IST (MS): ceftriaxona + azitromicina 1 g. CDC 2021: ceftriaxona + doxiciclina 7 dias. Diferença por data e por evidência posterior sobre clamídia retal. Ambos aceitáveis; escolher por adesão e sítio de exposição.",
mudancas: ["Entrada nova."],
nv: ["Quadro de doses do PCDT IST 2022 não aberto no original nesta sessão.", "Diluição de ceftriaxona IM 1 g para dose de 500 mg: conferir bula."]
},
{
id: "sifilis", nome: "Sífilis adquirida", sistema: "Geniturinário e saúde sexual", risco: "alto",
ciap: "Y70 · X70", cid: "A51 · A52 · A53.9", tags: "IST cancro duro VDRL teste rápido treponêmico penicilina benzetacil notificação",
alerta: "Gestante: conferir esquema e intervalo no PCDT IST vigente; intervalo máximo de 9 dias entre doses semanais (MS, 2023) – se ultrapassar ou perder dose, reiniciar o esquema. Notificação compulsória (sífilis adquirida ou em gestante).",
S: `Paciente, ___ anos, com ___ (teste rápido treponêmico reagente / lesão genital / exantema / assintomático). Lesão: ___ (úlcera indolor, base limpa, há ___ dias). Exantema palmoplantar: ___.
Tratamento prévio para sífilis: ___ (quando, esquema, VDRL de controle). Parcerias: ___. Gestação: ___. Alergia à penicilina: ___.`,
O: `BEG.
Genitália/pele/mucosas: ___. Linfonodos: ___.
Teste rápido treponêmico: ___. VDRL: ___ (titulação 1:___).
Testes rápidos HIV ___, hepatite B ___, hepatite C ___.`,
A: `Sífilis ___ (primária / secundária / latente recente < 1 ano / latente tardia ou de duração ignorada / terciária).`,
P: `- Tratamento com benzilpenicilina benzatina conforme estágio, iniciado no mesmo dia.
- Coletar VDRL (não treponêmico) antes da 1ª dose para seguimento.
- Testar e tratar parcerias dos últimos 3 meses (ou mais conforme estágio).
- Notificação no SINAN.
- Controle de cura com VDRL trimestral no 1º ano.`,
rx: [
 {trilha: "ambos", titulo: "Recente (primária, secundária, latente < 1 ano)", texto: `USO INTRAMUSCULAR
1. Benzilpenicilina benzatina 1.200.000 UI ______ 2 frascos-ampola
   Aplicar 2.400.000 UI IM, dose única (1.200.000 UI em cada glúteo).`, dose: "F"},
 {trilha: "ambos", titulo: "Tardia (latente > 1 ano, duração ignorada, terciária)", texto: `USO INTRAMUSCULAR
1. Benzilpenicilina benzatina 1.200.000 UI ______ 6 frascos-ampola
   Aplicar 2.400.000 UI IM (1.200.000 UI em cada glúteo) 1 vez por semana por 3 semanas (total 7.200.000 UI).
   Datas: ___/___  ___/___  ___/___`, dose: "F", nota: "Intervalo entre doses: em gestantes, até 9 dias (MS, 2023); se ultrapassar ou perder dose, reiniciar. Fora da gestação, conferir a tolerância no PCDT vigente. Gestante com sífilis recente: no protocolo de SP, 2 doses semanais de 2,4 milhões (4,8 milhões UI); conferir PCDT."},
 {trilha: "sus", titulo: "Alergia à penicilina (não gestante)", texto: `USO ORAL
1. Doxiciclina 100 mg ______ 30 comprimidos (recente) / 60 comprimidos (tardia)
   Tomar 1 comprimido de 12/12h por 15 dias (recente) ou 30 dias (tardia).`, dose: "NV", nota: "Gestante alérgica: dessensibilização em referência; penicilina é o único tratamento que trata o feto."}
],
orient: `A sífilis tem cura com a penicilina. Venha em todas as datas de aplicação.
Suas parcerias sexuais precisam ser testadas e tratadas.
Use preservativo. Faremos exame de sangue (VDRL) a cada 3 meses para confirmar a cura.`,
alarme: ["Alteração de visão ou audição", "Dor de cabeça intensa, confusão ou fraqueza", "Reação forte após a injeção (febre alta, falta de ar, inchaço)"],
encaminhar: "Neurossífilis ou sífilis ocular/otológica → urgência/infectologia. Reação anafilática prévia à penicilina → referência para dessensibilização.",
sus: {nacional: "RENAME 2024: benzilpenicilina benzatina 600.000 e 1.200.000 UI (Básico e Estratégico), doxiciclina (Estratégico).", betim: "REMUME Betim: benzilpenicilina benzatina 1.200.000 UI e 600.000 UI, doxiciclina 100 mg disponíveis."},
evid: {resumo: "Benzilpenicilina benzatina é o tratamento de escolha em todos os estágios e o único eficaz para prevenir sífilis congênita. Os esquemas por estágio acima são os do PCDT IST 2022, conforme reproduzidos em nota técnica municipal.", certeza: "Alta para penicilina (estimada); recomendação normativa", fontes: ["sp_sifilis", "pcdt_ist22", "rename", "remume"]},
mudancas: ["Entrada nova (o Notion tinha só benzatina 2,4 milhões no bloco de pós-exposição sexual)."],
nv: ["Esquema de gestantes: conferir no PCDT vigente e na linha de cuidado municipal.", "Doxiciclina para alérgicos: conferir PCDT."]
},
{
id: "herpes-genital", nome: "Herpes genital", sistema: "Geniturinário e saúde sexual", risco: "moderado",
ciap: "X90 · Y72", cid: "A60.0", tags: "IST vesículas úlcera genital dolorosa aciclovir valaciclovir HSV",
S: `Paciente, ___ anos, com lesões genitais dolorosas (vesículas que evoluíram para úlceras) há ___ dias. ___ (primeiro episódio / recorrência; ___ episódios/ano). Disúria: ___. Febre, mal-estar: ___.
Gestação: ___ (IG ___). Parcerias: ___. Imunossupressão: ___.`,
O: `BEG.
Genitália: vesículas agrupadas sobre base eritematosa / úlceras rasas dolorosas em ___. Linfonodos inguinais dolorosos ___.
Testes rápidos: HIV ___, sífilis ___, hepatites ___.`,
A: `Herpes genital ___ (primeiro episódio / recorrência).`,
P: `- Antiviral oral iniciado o quanto antes.
- Analgesia, higiene local com água e sabão, compressas.
- Testes rápidos para outras IST (úlcera genital: sempre testar sífilis).
- Orientar sobre transmissão, recorrências e supressão se ≥ 6 episódios/ano.`,
rx: [
 {trilha: "sus", titulo: "Aciclovir (SUS Betim)", texto: `USO ORAL
1. Aciclovir 200 mg ______ ___ comprimidos
   Primeiro episódio: tomar 2 comprimidos (400 mg) de 8/8h por 7 a 10 dias (ou 1 comprimido de 200 mg 5 vezes ao dia).
   Recorrência: tomar 2 comprimidos (400 mg) de 8/8h por 5 dias.`, dose: "F", nota: "Esquemas reproduzidos de SOF da BVS APS baseada no PCDT IST."},
 {trilha: "evidencia", titulo: "Valaciclovir (posologia mais simples)", texto: `USO ORAL
1. Valaciclovir 500 mg ______ ___ comprimidos
   Primeiro episódio: tomar 2 comprimidos (1 g) de 12/12h por 7 a 10 dias.
   Recorrência: tomar 1 comprimido (500 mg) de 12/12h por 3 dias.`, dose: "NV", nota: "Mesma eficácia do aciclovir, com 2 tomadas ao dia. Não consta na RENAME nem na REMUME."}
],
orient: `O herpes é causado por um vírus que fica no corpo e pode voltar em crises. O remédio encurta a crise.
Evite relações sexuais enquanto houver lesões. Use preservativo sempre: o vírus pode passar mesmo sem lesões.
Lave a região com água e sabão e mantenha seca.`,
alarme: ["Dificuldade para urinar", "Dor de cabeça forte com rigidez na nuca", "Lesões espalhadas pelo corpo", "Gestante no fim da gestação com lesão"],
encaminhar: "Retenção urinária, meningite, doença disseminada, imunossuprimido grave → urgência. Gestante: avisar o pré-natal (supressão a partir de 36 semanas).",
idealsus: {ideal: "Aciclovir e valaciclovir têm eficácia equivalente; valaciclovir permite 2 tomadas ao dia, o que melhora adesão.", sus: "Só aciclovir 200 mg na REMUME Betim (aciclovir creme consta na RENAME, mas tem benefício mínimo).", ponte: "Aciclovir para a maioria. Valaciclovir se a paciente prefere menos comprimidos e pode comprar."},
sus: {nacional: "RENAME 2024: aciclovir 200 mg comprimido e creme 5% (Básico). Valaciclovir não consta.", betim: "REMUME Betim: aciclovir 200 mg disponível."},
evid: {resumo: "Antivirais orais reduzem duração e dor no primeiro episódio e encurtam recorrências quando iniciados cedo. Terapia supressiva reduz recorrências e transmissão. Aciclovir tópico tem benefício clínico mínimo.", certeza: "Alta a moderada (estimada)", fontes: ["bvs_herpes", "cdc_ist", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Esquema de valaciclovir: conferir bula.", "Esquema para não gestantes conferido em fonte voltada a gestantes; as doses costumam ser as mesmas no PCDT, mas conferir."]
},
// ───────────────────────── PELE
{
id: "zoster", nome: "Herpes zoster", sistema: "Pele", risco: "moderado",
ciap: "S70", cid: "B02.9", tags: "cobreiro vesículas dermátomo dor queimação aciclovir valaciclovir neuralgia",
alerta: "Zoster oftálmico (ponta do nariz, olho), imunossupressão grave ou doença disseminada: encaminhar no mesmo dia.",
S: `Paciente, ___ anos, com dor/queimação em ___ seguida de vesículas agrupadas em faixa há ___ dias (< 72 h do início das lesões? ___).
Lesão em face/olho, alteração visual: ___. Imunossupressão: ___. Comorbidades: ___. Função renal: ___.`,
O: `BEG.
Pele: vesículas agrupadas sobre base eritematosa em distribuição dermatomérica ___ (unilateral, não cruza linha média). Sinal de Hutchinson (ponta do nariz): ___.
Olhos: ___.`,
A: `Herpes zoster em dermátomo ___, ___ (até / após) 72 h do início, sem acometimento oftálmico.`,
P: `- Antiviral oral se até 72 h do início das lesões, ou após se ainda surgem lesões novas, > 50 anos, dor intensa ou imunossupressão.
- Analgesia adequada (dor aguda prediz neuralgia).
- Cuidados locais; lesões são contagiosas para quem não teve varicela.
- Retorno em 7 dias ou antes se piora ou dor intratável.`,
rx: [
 {trilha: "sus", titulo: "Aciclovir (SUS Betim)", texto: `USO ORAL
1. Aciclovir 200 mg ______ 140 comprimidos
   Tomar 4 comprimidos (800 mg) 5 vezes ao dia (7h, 11h, 15h, 19h, 23h) por 7 dias.`, dose: "NV", nota: "Ajustar se ClCr < 25 mL/min. São 20 comprimidos por dia: adesão é o ponto fraco."},
 {trilha: "evidencia", titulo: "Valaciclovir", texto: `USO ORAL
1. Valaciclovir 500 mg ______ 42 comprimidos
   Tomar 2 comprimidos (1 g) de 8/8h por 7 dias.`, dose: "NV", nota: "Ajustar na DRC."},
 {trilha: "ambos", titulo: "Dor", texto: `USO ORAL
1. Dipirona 500 mg ______ 1 caixa
   Tomar 2 comprimidos (1 g) de 6/6h.
   Se dor neuropática intensa, associar:
2. Amitriptilina 25 mg ______ 30 comprimidos
   Tomar ½ a 1 comprimido à noite. (Evitar em idosos e cardiopatas.)`, dose: "NV"}
],
orient: `As bolhas podem passar catapora para quem nunca teve, principalmente gestantes e bebês: mantenha-as cobertas.
Tome o antiviral nos horários, pelos 7 dias. Use o analgésico regularmente para controlar a dor.
Pessoas com 50 anos ou mais podem se beneficiar da vacina contra herpes zoster depois da recuperação.`,
alarme: ["Lesões no olho, na ponta do nariz ou alteração da visão", "Lesões espalhadas pelo corpo", "Febre alta, confusão ou dor de cabeça forte", "Fraqueza no rosto (paralisia facial)"],
encaminhar: "Zoster oftálmico → oftalmologia no mesmo dia. Disseminado ou imunossuprimido grave → urgência.",
idealsus: {ideal: "Valaciclovir 1 g 8/8h: em ECR, resolveu a dor associada ao zoster mais rápido que aciclovir e tem posologia muito mais simples.", sus: "REMUME Betim tem apenas aciclovir 200 mg, o que exige 4 comprimidos 5 vezes ao dia.", ponte: "Se a paciente pode comprar, valaciclovir melhora adesão e possivelmente a dor. Se não, aciclovir do SUS com tabela de horários escrita."},
sus: {nacional: "RENAME 2024: aciclovir 200 mg (Básico). Valaciclovir não consta. Amitriptilina 25 mg (Básico).", betim: "REMUME Betim: aciclovir 200 mg, dipirona, amitriptilina 25 mg disponíveis."},
evid: {resumo: "Antiviral iniciado em até 72 h reduz duração das lesões e da dor aguda; o efeito sobre neuralgia pós-herpética é incerto. Valaciclovir foi superior ao aciclovir na resolução da dor em ECR de 1995. Vacina recombinante reduz incidência e neuralgia (não disponível na rotina do SUS para a maioria dos adultos, a conferir).", certeza: "Moderada (estimada)", fontes: ["zoster_ecr", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Doses e ajuste renal: conferir bula.", "Disponibilidade da vacina recombinante contra zoster no SUS/CRIE: não verificada."]
},
{
id: "celulite", nome: "Celulite e erisipela", sistema: "Pele", risco: "moderado",
ciap: "S76", cid: "L03.1 · A46", tags: "pele vermelha quente inchada perna infecção cefalexina erisipela",
alerta: "Sinais sistêmicos (hipotensão, confusão), dor desproporcional, bolhas hemorrágicas, crepitação ou progressão rápida: urgência (fasciíte necrotizante).",
S: `Paciente, ___ anos, com área de eritema, calor, edema e dor em ___ há ___ dias, com progressão ___. Febre: ___.
Porta de entrada: ___ (frieira, ferida, picada). Episódios prévios: ___. Comorbidades: ___ (DM, linfedema, insuficiência venosa, obesidade). Alergias: ___.`,
O: `___ estado geral.
${VITAIS}
Lesão: eritema ___ (bem delimitado e elevado – erisipela / difuso – celulite) em ___, ___ cm, quente, doloroso. Bolhas ___. Flutuação ___ (abscesso?). Linfangite ___.
Demarcada a borda com caneta: ___.
Interdigitais: ___ (intertrigo/tinea como porta de entrada).`,
A: `___ (Erisipela / celulite) não purulenta em ___, sem sinais de gravidade.`,
P: `- Antibiótico oral com cobertura para estreptococo.
- Elevação do membro, demarcação da borda e reavaliação em 48–72 h.
- Tratar a porta de entrada (tinea interdigital, fissuras).
- Abscesso: drenagem é o tratamento principal.
- Recorrente: tratar fatores predisponentes.`,
rx: [
 {trilha: "ambos", titulo: "1ª escolha", texto: `USO ORAL
1. Cefalexina 500 mg ______ 28 comprimidos
   Tomar 1 comprimido de 6/6h por 7 dias (5 dias se melhora clara).`, dose: "NV"},
 {trilha: "ambos", titulo: "Alergia à penicilina", texto: `USO ORAL
1. Clindamicina 300 mg ______ 28 cápsulas
   Tomar 1 cápsula de 6/6h por 7 dias.`, dose: "NV"}
],
orient: `Mantenha a perna elevada sempre que possível. A vermelhidão pode aumentar um pouco nos primeiros 1 a 2 dias, mesmo com o antibiótico.
Marcamos a borda da mancha: se ela passar muito da marca, volte antes.
Trate frieiras e rachaduras nos pés para evitar novos episódios.`,
alarme: ["Febre alta ou calafrios", "Dor muito forte, desproporcional ao que se vê", "Bolhas escuras ou pele arroxeada", "Mancha crescendo rápido após 48 h de antibiótico", "Tontura, confusão ou pressão baixa"],
encaminhar: "Sinais de gravidade ou fasciíte → urgência. Abscesso grande → drenagem.",
sus: {nacional: "RENAME 2024: cefalexina 500 mg e suspensão, clindamicina 150 e 300 mg, amoxicilina (Básico).", betim: "REMUME Betim: cefalexina 500 mg e suspensão, clindamicina 300 mg disponíveis."},
evid: {resumo: "IDSA 2014: celulite não purulenta é estreptocócica na maioria; cefalexina cobre o necessário. Cobertura adicional para MRSA não melhora desfechos na celulite não purulenta (ECR). Cinco dias são suficientes quando há melhora.", certeza: "Moderada (estimada)", fontes: ["idsa_pele", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Doses: conferir bula."]
},
{
id: "tinea", nome: "Dermatofitose (tinea corporis, cruris, pedis)", sistema: "Pele", risco: "baixo",
ciap: "S74", cid: "B35.4 · B35.6 · B35.3", tags: "micose frieira impinge coceira virilha pé de atleta antifúngico creme",
S: `Paciente, ___ anos, com lesão ___ (anular descamativa com borda ativa / entre os dedos / virilha) em ___ há ___ semanas, pruriginosa.
Uso prévio de corticoide tópico: ___. Animais domésticos: ___. DM, imunossupressão: ___.`,
O: `BEG.
Pele: placa(s) eritematodescamativa(s) anular(es) com borda ativa e centro mais claro em ___ / maceração e fissuras interdigitais ___. Unhas: ___.`,
A: `Dermatofitose ___ (corporis/cruris/pedis), sem onicomicose.`,
P: `- Antifúngico tópico, mantido 1–2 semanas após o desaparecimento das lesões.
- Manter a área seca, trocar meias/roupas íntimas, secar entre os dedos.
- Não usar creme com corticoide.
- Oral se extenso, couro cabeludo, falha do tópico ou imunossupressão.`,
rx: [
 {trilha: "sus", titulo: "Azol tópico (SUS Betim)", texto: `USO TÓPICO
1. Cetoconazol 2% creme ______ 1 bisnaga
   Aplicar na lesão e 2 cm ao redor 1 vez ao dia por 2 a 4 semanas (mantendo 1 a 2 semanas após melhora).`, dose: "NV"},
 {trilha: "evidencia", titulo: "Terbinafina tópica (curso mais curto)", texto: `USO TÓPICO
1. Terbinafina 1% creme ______ 1 bisnaga
   Aplicar 1 vez ao dia por 1 semana (pedis interdigital) a 2 semanas (corporis/cruris).`, dose: "NV", nota: "Alilaminas curam um pouco mais e em menos tempo que os azóis em revisões Cochrane. Não consta na RENAME nem na REMUME."}
],
orient: `Seque bem a pele, principalmente entre os dedos e nas dobras. Use meias de algodão e troque diariamente.
Continue o creme por 1 a 2 semanas depois que a mancha sumir, para não voltar.
Não use pomadas com corticoide na micose.`,
alarme: ["Vermelhidão quente e dolorosa que se espalha (celulite)", "Lesões no couro cabeludo com queda de cabelo", "Pus ou febre"],
encaminhar: "Tinea capitis (necessita oral) e onicomicose extensa → avaliar tratamento sistêmico.",
idealsus: {ideal: "Terbinafina tópica: cura um pouco maior e curso mais curto que os azóis.", sus: "REMUME Betim: cetoconazol 2% creme. RENAME: miconazol 2% creme/loção/pó. Ambos eficazes, com uso mais longo.", ponte: "Cetoconazol do SUS resolve a maioria. Terbinafina se a pessoa prefere curso curto e pode comprar."},
sus: {nacional: "RENAME 2024: miconazol 2% creme, loção e pó; cetoconazol 2% xampu (Básico). Terbinafina não consta.", betim: "REMUME Betim: cetoconazol 2% creme disponível (miconazol só na forma vaginal)."},
evid: {resumo: "Azóis e alilaminas tópicos são eficazes na tinea corporis, cruris e pedis; alilaminas têm cura levemente maior em menos tempo. Associações com corticoide aumentam recidiva e efeitos adversos.", certeza: "Moderada (estimada)", fontes: ["cochrane_tinea", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Posologias: conferir bula."]
},
{
id: "urticaria", nome: "Urticária aguda", sistema: "Pele", risco: "moderado",
ciap: "S98", cid: "L50.9", tags: "alergia placas vermelhas coceira vergões anti-histamínico angioedema",
alerta: "Urticária com dispneia, estridor, hipotensão, síncope ou vômitos = anafilaxia: adrenalina 0,5 mg IM (1 mg/mL) na face anterolateral da coxa e acionar urgência.",
S: `Paciente, ___ anos, com placas eritematoedematosas pruriginosas e migratórias há ___ h/dias (cada lesão dura < 24 h). Angioedema (lábios, pálpebras): ___.
Dispneia, rouquidão, dor abdominal, tontura: ___ (ausentes).
Possíveis desencadeantes: ___ (infecção recente, medicamento – AINE, antibiótico –, alimento, picada). Uso de IECA: ___.`,
O: `BEG.
${VITAIS}
Pele: urticas disseminadas ___. Angioedema ___. Orofaringe sem edema. AR: MV+, sem sibilos ou estridor.`,
A: `Urticária aguda ___ (sem / com) angioedema, sem sinais de anafilaxia. Provável desencadeante: ___.`,
P: `- Anti-histamínico de 2ª geração em uso regular; pode aumentar até 4 vezes a dose se não controlar.
- Corticoide oral curto apenas se sintomas intensos.
- Suspender desencadeante suspeito (ex.: AINE).
- Retorno se > 6 semanas (urticária crônica) ou sinais de anafilaxia.`,
rx: [
 {trilha: "ambos", titulo: "Anti-histamínico", texto: `USO ORAL
1. Loratadina 10 mg ______ 30 comprimidos
   Tomar 1 comprimido 1 vez ao dia por 1 a 2 semanas. Se não controlar, até 1 comprimido de 12/12h ou mais conforme orientação.`, dose: "NV", nota: "EAACI: dose até 4x a habitual é aceita (fora de bula)."},
 {trilha: "ambos", titulo: "Se sintomas intensos", texto: `USO ORAL
1. Prednisona 20 mg ______ 6 comprimidos
   Tomar 2 comprimidos (40 mg) pela manhã por 3 dias.`, dose: "NV"},
 {trilha: "ambos", titulo: "Anafilaxia (na unidade)", texto: `USO INTRAMUSCULAR
1. Epinefrina 1 mg/mL – 0,5 mg (0,5 mL) IM na face anterolateral da coxa; repetir em 5–15 min se necessário.
   Criança: 0,01 mg/kg (máximo 0,3 mg).`, dose: "NV"}
],
orient: `As placas costumam desaparecer em alguns dias. Tome o antialérgico todos os dias, mesmo sem placas, enquanto durar o quadro.
Evite anti-inflamatórios (ibuprofeno, diclofenaco, AAS) até melhorar: podem piorar.
Anote o que comeu ou usou antes de começar.`,
alarme: ["Falta de ar, chiado ou rouquidão", "Inchaço na língua ou garganta", "Tontura, desmaio ou pressão baixa", "Vômitos ou dor abdominal forte junto com as placas"],
encaminhar: "Anafilaxia → epinefrina IM e urgência. Urticária > 6 semanas → investigação de urticária crônica.",
sus: {nacional: "RENAME 2024: loratadina, dexclorfeniramina, prometazina, prednisona, epinefrina 1 mg/mL (Básico).", betim: "REMUME Betim: loratadina 10 mg e 1 mg/mL, prednisona 20 mg, prometazina 25 mg, epinefrina 1 mg/mL disponíveis."},
evid: {resumo: "Anti-histamínicos de 2ª geração são a 1ª linha (EAACI 2022); doses até 4x a habitual são aceitas se necessário. Corticoide oral curto pode acelerar a resolução em casos intensos, com evidência limitada. Anti-histamínicos de 1ª geração sedam e não são preferidos.", certeza: "Moderada (estimada)", fontes: ["eaaci_urt", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Doses: conferir bula.", "Dose de loratadina acima da bula: uso fora de bula."]
},
{
id: "dermatite-contato", nome: "Dermatite de contato", sistema: "Pele", risco: "baixo",
ciap: "S88", cid: "L25.9", tags: "eczema alergia de contato irritação pele coceira bijuteria corticoide creme",
S: `Paciente, ___ anos, com lesões pruriginosas em ___ há ___ dias, após contato com ___ (bijuteria/níquel, cosmético, produto de limpeza, planta, luva, cimento).
Ocupação: ___. Episódios prévios: ___.`,
O: `BEG.
Pele: placas eritematosas com ___ (vesículas, exsudação / descamação, liquenificação) restritas à área de contato em ___. Infecção secundária: ___.`,
A: `Dermatite de contato ___ (alérgica/irritativa) aguda em ___.`,
P: `- Identificar e evitar o agente.
- Corticoide tópico de potência adequada ao local por 1–2 semanas.
- Hidratante e sabonete neutro.
- Compressas frias se fase exsudativa.
- Retorno se não melhorar em 2 semanas (considerar teste de contato).`,
rx: [
 {trilha: "sus", titulo: "Corticoide tópico disponível (face, dobras, áreas finas)", texto: `USO TÓPICO
1. Dexametasona 0,1% creme ______ 1 bisnaga
   Aplicar fina camada 2 vezes ao dia por até 2 semanas.`, dose: "NV", nota: "Potência baixa: adequada para face e dobras, pode ser insuficiente em mãos e áreas espessas."},
 {trilha: "evidencia", titulo: "Corticoide de média/alta potência (mãos, corpo, pele espessa)", texto: `USO TÓPICO
1. Mometasona 0,1% creme ______ 1 bisnaga
   Aplicar fina camada 1 vez ao dia por até 2 semanas. Não usar na face.
   OU
2. Betametasona (valerato) 0,1% creme ______ 1 bisnaga
   Aplicar fina camada 1 a 2 vezes ao dia por até 2 semanas.`, dose: "NV"},
 {trilha: "ambos", titulo: "Prurido", texto: `USO ORAL
1. Loratadina 10 mg ______ 10 comprimidos
   Tomar 1 comprimido 1 vez ao dia se prurido.`, dose: "NV"}
],
orient: `Evite o que causou a reação. Use o creme em camada fina só sobre as lesões e pelo tempo indicado.
Use sabonete neutro, água morna e hidratante sem perfume várias vezes ao dia.`,
alarme: ["Lesões com pus, crostas amareladas ou febre", "Espalhamento para todo o corpo", "Inchaço no rosto ou dificuldade para respirar"],
encaminhar: "Recorrente ou ocupacional sem agente identificado → dermatologia (teste de contato). Dermatose ocupacional: notificação no SINAN.",
idealsus: {ideal: "Em mãos e áreas de pele espessa, corticoide de média ou alta potência controla mais rápido.", sus: "REMUME Betim tem só dexametasona 0,1% creme (baixa potência). RENAME: hidrocortisona 1% e dexametasona 0,1%; clobetasol só no Componente Especializado.", ponte: "Dexametasona para face, dobras e casos leves. Média/alta potência (compra) para mãos e lesões espessas."},
sus: {nacional: "RENAME 2024: hidrocortisona 1% creme, dexametasona 0,1% creme (Básico); clobetasol (Especializado).", betim: "REMUME Betim: dexametasona 0,1% creme e loratadina 10 mg disponíveis."},
evid: {resumo: "Afastar o agente é a medida principal. A potência do corticoide tópico deve combinar com o local e a gravidade; potência insuficiente prolonga o quadro. Antihistamínico oral tem pouco efeito na dermatite, mas pode ajudar o sono.", certeza: "Baixa a moderada (estimada)", fontes: ["rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Posologias e classificação de potência: conferir bula."]
},
// ───────────────────────── DIGESTIVO
{
id: "constipacao", nome: "Constipação intestinal", sistema: "Digestivo", risco: "baixo",
ciap: "D12", cid: "K59.0", tags: "intestino preso prisão de ventre laxante lactulose macrogol",
S: `Paciente, ___ anos, com evacuações ___ vezes/semana, fezes endurecidas, esforço evacuatório, há ___ semanas/meses.
Sinais de alarme: sangue nas fezes ___, perda de peso ___, anemia ___, início após 50 anos ___, história familiar de câncer colorretal ___, mudança recente do hábito ___.
Ingesta de fibras e água: ___. Atividade física: ___. Medicações constipantes (opioide, ferro, anticolinérgico, bloqueador de canal de cálcio): ___.`,
O: `BEG.
ABD: flácido, ___ (fezes palpáveis em FIE), indolor, sem massas.
Toque retal (se indicado): ___.`,
A: `Constipação funcional, sem sinais de alarme.`,
P: `- Aumentar fibras (25–30 g/dia), água e atividade física.
- Rever medicações constipantes.
- Laxante osmótico se não houver resposta às medidas.
- Reavaliar em 4 semanas.`,
rx: [
 {trilha: "evidencia", titulo: "Laxante osmótico de 1ª escolha", texto: `USO ORAL
1. Macrogol 3350 (polietilenoglicol) ______ 1 frasco/caixa de sachês
   Diluir 17 g (1 sachê ou 1 medida) em 1 copo de água 1 vez ao dia; ajustar a dose conforme as fezes.`, dose: "NV", nota: "Mais eficaz e com menos flatulência que lactulose. Não consta na RENAME nem na REMUME."},
 {trilha: "sus", titulo: "Lactulose (SUS Betim)", texto: `USO ORAL
1. Lactulose 667 mg/mL xarope ______ 1 frasco
   Tomar 15 a 30 mL 1 vez ao dia; ajustar conforme as fezes.`, dose: "NV", nota: "Pode causar gases e cólica."},
 {trilha: "ambos", titulo: "Resgate", texto: `USO ORAL
1. Bisacodil 5 mg ______ 1 caixa
   Tomar 1 a 2 drágeas à noite, se 3 dias sem evacuar (uso eventual).`, dose: "NV"}
],
orient: `Aumente frutas, verduras, feijão e cereais integrais, e beba água ao longo do dia.
Caminhe ou faça atividade física. Não segure a vontade de evacuar; um banquinho sob os pés ajuda.
O laxante pode levar 1 a 3 dias para fazer efeito.`,
alarme: ["Sangue nas fezes", "Perda de peso sem explicação", "Barriga muito distendida com vômitos ou sem eliminar gases", "Dor abdominal forte"],
encaminhar: "Sinais de alarme ou ≥ 45–50 anos com mudança de hábito → colonoscopia. Suspeita de obstrução → urgência.",
idealsus: {ideal: "Polietilenoglicol (macrogol): revisão Cochrane mostrou mais evacuações e menos necessidade de laxante adicional que lactulose.", sus: "REMUME Betim: lactulose, bisacodil, óleo mineral. Macrogol não consta na RENAME nem na REMUME. Plantago (fibra) está na RENAME.", ponte: "Medidas gerais + lactulose para a maioria. Macrogol se lactulose causa gases ou falha e a pessoa pode comprar."},
sus: {nacional: "RENAME 2024: lactulose 667 mg/mL, óleo mineral, glicerol supositório/solução retal (Básico), plantago (fitoterápico, Básico).", betim: "REMUME Betim: lactulose 667 mg/mL, bisacodil 5 mg, óleo mineral e glicerina 12% (enema) disponíveis."},
evid: {resumo: "Na constipação crônica, polietilenoglicol foi superior à lactulose em frequência de evacuações, consistência das fezes e dor abdominal (Cochrane 2010). Fibras solúveis ajudam a constipação leve.", certeza: "Moderada (estimada)", fontes: ["cochrane_constip", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Posologias: conferir bula.", "Óleo mineral: evitar em idosos acamados e disfagia (risco de pneumonia lipoídica)."]
},
{
id: "hemorroida", nome: "Doença hemorroidária sintomática", sistema: "Digestivo", risco: "baixo",
ciap: "K96", cid: "K64.9", tags: "hemorroida sangramento ânus dor anal prolapso pomada",
S: `Paciente, ___ anos, com ___ (sangramento vermelho vivo ao evacuar / prolapso / prurido / dor anal) há ___ dias. Dor súbita intensa com nódulo endurecido: ___ (trombose?).
Constipação: ___. Sinais de alarme: perda de peso ___, mudança de hábito ___, anemia ___, ≥ 45 anos sem rastreio ___, história familiar de câncer colorretal ___.`,
O: `BEG.
Inspeção anal: ___ (mamilos hemorroidários externos / prolapso grau ___ / trombose / fissura). Toque retal: ___.`,
A: `Doença hemorroidária ___ (interna grau ___ / externa / trombosada), sem sinais de alarme.`,
P: `- Fibras e água; tratar a constipação.
- Banho de assento morno 2–3 vezes ao dia.
- Analgésico e anestésico tópico por poucos dias.
- Trombose externa < 72 h com dor intensa: considerar excisão (referência).
- Sangramento com sinais de alarme ou ≥ 45 anos: investigar.`,
rx: [
 {trilha: "ambos", titulo: "Medidas e analgesia", texto: `USO TÓPICO
1. Lidocaína 2% geleia ______ 1 bisnaga
   Aplicar na região anal até 3 vezes ao dia por até 7 dias.

USO ORAL
2. Paracetamol 500 mg ______ 1 caixa
   Tomar 1 a 2 comprimidos de 6/6h se dor.
3. Lactulose 667 mg/mL ______ 1 frasco
   Tomar 15 mL 1 vez ao dia se fezes endurecidas.`, dose: "NV"},
 {trilha: "evidencia", titulo: "Flebotônico (crise sintomática)", texto: `USO ORAL
1. Diosmina 450 mg + hesperidina 50 mg ______ 1 caixa
   Tomar 3 comprimidos de 12/12h por 4 dias, depois 2 comprimidos de 12/12h por 3 dias.`, dose: "NV", nota: "Metanálise mostrou redução de sangramento, dor e prurido, com estudos de qualidade limitada. Não consta na RENAME nem na REMUME."}
],
orient: `Coma mais fibras e beba água para evitar fezes duras. Não fique muito tempo sentado no vaso.
Banhos de assento com água morna por 10 a 15 minutos aliviam a dor.
Sangramento pelo ânus deve sempre ser avaliado, principalmente depois dos 45 anos.`,
alarme: ["Sangramento intenso ou com coágulos", "Dor muito forte com caroço endurecido", "Febre com dor anal", "Perda de peso ou mudança no hábito intestinal"],
encaminhar: "Trombose hemorroidária com dor intensa em < 72 h, prolapso grau III–IV ou sangramento persistente → coloproctologia. Sinais de alarme → colonoscopia.",
idealsus: {ideal: "Fibras são a base. Flavonoides (diosmina/hesperidina) aliviam a crise com evidência de qualidade limitada.", sus: "REMUME Betim tem lidocaína geleia, lactulose e analgésicos; não tem flebotônico nem pomadas específicas.", ponte: "Medidas gerais + lidocaína para a maioria. Flebotônico por compra na crise, se a pessoa quiser."},
sus: {nacional: "RENAME 2024: lidocaína 2% gel, lactulose, plantago (fitoterápico) (Básico). Flebotônicos não constam.", betim: "REMUME Betim: lidocaína 2% geleia, lactulose e paracetamol disponíveis."},
evid: {resumo: "Fibras reduzem sangramento e sintomas persistentes em cerca de metade (metanálise). Flavonoides têm benefício em sangramento e dor com heterogeneidade e viés de publicação possível. Pomadas com corticoide/anestésico aliviam sintomas a curto prazo.", certeza: "Baixa a moderada (estimada)", fontes: ["hemor", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Posologia da diosmina: conferir bula."]
},
{
id: "parasitoses", nome: "Enteroparasitoses", sistema: "Digestivo", risco: "baixo",
ciap: "D96", cid: "B82.9", tags: "verme lombriga giárdia oxiúros ameba albendazol ivermectina estrongiloides",
S: `Paciente, ___ anos, com ___ (eliminação de vermes / prurido anal noturno / dor abdominal / diarreia crônica / EPF positivo para ___).
Saneamento básico: ___. Contactantes com sintomas: ___. Gestação: ___. Peso: ___ kg. Uso de corticoide ou imunossupressão: ___.`,
O: `BEG, ___ (corado/hipocorado).
ABD: ___. Região perianal: ___.
EPF: ___.`,
A: `Enteroparasitose: ___ (ascaridíase / oxiuríase / giardíase / estrongiloidíase / amebíase / ancilostomíase / teníase).`,
P: `- Tratamento conforme parasita identificado ou suspeito.
- Oxiúros: tratar todos os contactantes e repetir em 2 semanas.
- Orientar higiene das mãos, unhas curtas, água tratada, lavagem de alimentos.
- Antes de corticoide/imunossupressão: tratar empiricamente estrongiloidíase em quem tem exposição.`,
rx: [
 {trilha: "ambos", titulo: "Ascaris, ancilostomídeos, oxiúros, Trichuris", texto: `USO ORAL
1. Albendazol 400 mg ______ 1 comprimido (2 se oxiúros)
   Tomar 1 comprimido em dose única. Oxiúros: repetir em 2 semanas.
   Criança 1–2 anos: 200 mg (5 mL da suspensão 40 mg/mL).`, dose: "NV", nota: "Evitar no 1º trimestre da gestação."},
 {trilha: "ambos", titulo: "Estrongiloidíase", texto: `USO ORAL
1. Ivermectina 6 mg ______ ___ comprimidos
   Tomar 200 mcg/kg 1 vez ao dia por 2 dias.`, dose: "NV"},
 {trilha: "ambos", titulo: "Giardíase / amebíase intestinal", texto: `USO ORAL
1. Secnidazol 1 g ______ 2 comprimidos
   Tomar 2 comprimidos (2 g) em dose única (giardíase).
   OU
2. Metronidazol 250 mg ______ 21 comprimidos
   Tomar 1 comprimido de 8/8h por 7 dias (giardíase) – amebíase: dose maior, conferir.`, dose: "NV"},
 {trilha: "ambos", titulo: "Teníase", texto: `USO ORAL
1. Praziquantel 600 mg ______ 1 comprimido
   Tomar 5 a 10 mg/kg em dose única (adulto: 1 comprimido).`, dose: "NV"}
],
orient: `Lave as mãos com água e sabão depois de ir ao banheiro e antes de comer ou preparar alimentos.
Mantenha as unhas curtas. Lave bem frutas e verduras e beba água filtrada ou fervida.
Em caso de oxiúros, todos da casa tratam juntos e repetem em 2 semanas; troque roupas de cama.`,
alarme: ["Diarreia com sangue e febre", "Dor abdominal forte com vômitos", "Palidez e cansaço importantes", "Emagrecimento"],
encaminhar: "Estrongiloidíase em imunossuprimido (hiperinfecção) → urgência.",
sus: {nacional: "RENAME 2024: albendazol 400 mg e suspensão, ivermectina 6 mg, metronidazol, teclozana (Básico); praziquantel (Estratégico).", betim: "REMUME Betim: albendazol 400 mg e 40 mg/mL, ivermectina 6 mg, metronidazol 250 mg e suspensão, secnidazol 1 g, praziquantel 600 mg disponíveis."},
evid: {resumo: "Albendazol em dose única tem alta cura para Ascaris e boa para ancilostomídeos; Trichuris pode exigir 3 dias. Ivermectina é superior ao albendazol na estrongiloidíase. Nitroimidazólicos tratam giardíase.", certeza: "Moderada (estimada)", fontes: ["cab28", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Doses de metronidazol para amebíase e de ivermectina para estrongiloidíase: conferir bula/Guia de Vigilância."]
},
// ───────────────────────── MUSCULOESQUELÉTICO
{
id: "gota", nome: "Crise de gota", sistema: "Musculoesquelético e neurológico", risco: "moderado",
ciap: "T92", cid: "M10.9", tags: "ácido úrico dedão podagra articulação inchada vermelha colchicina",
S: `Paciente, ___ anos, com dor intensa, edema e rubor em ___ (1ª MTF / tornozelo / joelho) de início súbito há ___ h. Crises prévias: ___.
Febre: ___. Desencadeante: ___ (álcool, carne, diurético, desidratação). Comorbidades: ___ (DRC, HAS, DM, úlcera, ICC). Uso de alopurinol: ___. Função renal: ___.`,
O: `BEG.
${VITAIS}
Articulação ___: edema, calor, rubor e dor intensa à mobilização. Tofos: ___. Demais articulações: ___.`,
A: `Crise de gota em ___ (provável), sem sinais de artrite séptica.`,
P: `- Tratar a crise com AINE, corticoide ou colchicina, iniciado o quanto antes; escolher pela comorbidade.
- Manter alopurinol se já em uso; não iniciar durante a crise sem profilaxia.
- Gelo local, repouso da articulação.
- Ácido úrico, creatinina após a crise; avaliar indicação de terapia hipouricemiante.
- Febre ou monoartrite atípica: afastar artrite séptica.`,
rx: [
 {trilha: "ambos", titulo: "Corticoide (seguro na DRC e úlcera; cuidado no DM)", texto: `USO ORAL
1. Prednisona 20 mg ______ 8 comprimidos
   Tomar 2 comprimidos (40 mg) pela manhã por 3 dias, depois 1 comprimido (20 mg) por 2 dias.`, dose: "NV", nota: "Prednisolona 35 mg/dia por 5 dias foi equivalente ao naproxeno em ECR."},
 {trilha: "ambos", titulo: "AINE (sem DRC, úlcera, ICC ou anticoagulação)", texto: `USO ORAL
1. Ibuprofeno 600 mg ______ 15 comprimidos
   Tomar 1 comprimido de 8/8h, após as refeições, por 5 dias.`, dose: "NV"},
 {trilha: "evidencia", titulo: "Colchicina em dose baixa", texto: `USO ORAL
1. Colchicina 0,5 mg ______ 1 caixa
   Tomar 2 comprimidos (1 mg) logo no início, mais 1 comprimido (0,5 mg) 1 hora depois; a partir do dia seguinte, 1 comprimido de 12/12h até a crise passar.`, dose: "NV", nota: "Mais eficaz se iniciada nas primeiras 12–36 h. Ajustar na DRC; interage com claritromicina, verapamil e outros inibidores do CYP3A4. Não consta na RENAME nem na REMUME."}
],
orient: `Repouse a articulação e use gelo envolvido em pano por 15 minutos algumas vezes ao dia.
Beba bastante água. Evite álcool (principalmente cerveja), carnes vermelhas e vísceras em excesso, e bebidas adoçadas.
Depois da crise, faremos exames para decidir se precisa de remédio contínuo para baixar o ácido úrico.`,
alarme: ["Febre ou calafrios", "Vermelhidão que se espalha pela pele", "Várias articulações ao mesmo tempo", "Sem melhora em 3 a 5 dias"],
encaminhar: "Suspeita de artrite séptica → urgência (artrocentese). Gota tofácea ou refratária → reumatologia.",
idealsus: {ideal: "AINE, corticoide e colchicina em dose baixa têm eficácia semelhante; a colchicina é uma opção útil quando AINE e corticoide são arriscados (ex.: diabético descompensado com DRC).", sus: "REMUME Betim tem prednisona e ibuprofeno; colchicina não consta na RENAME nem na REMUME.", ponte: "Prednisona ou ibuprofeno do SUS conforme comorbidade. Colchicina por compra quando ambos forem desaconselháveis."},
sus: {nacional: "RENAME 2024: ibuprofeno, prednisona, alopurinol (Básico); naproxeno (Especializado). Colchicina não consta.", betim: "REMUME Betim: ibuprofeno 600 mg, prednisona 5 e 20 mg, alopurinol 100 e 300 mg disponíveis."},
evid: {resumo: "ECR mostraram prednisolona oral equivalente a naproxeno e a indometacina na crise de gota. Colchicina em dose baixa (1,8 mg em 1 h) teve eficácia igual à dose alta com menos diarreia (AGREE). ACR 2020 recomenda qualquer um dos três conforme o paciente.", certeza: "Moderada (estimada)", fontes: ["gota_ecr", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Doses de colchicina disponíveis no Brasil (0,5 e 1 mg): conferir bula.", "Doses de prednisona e ibuprofeno: conferir bula."]
},
{
id: "entorse", nome: "Entorse de tornozelo", sistema: "Musculoesquelético e neurológico", risco: "baixo",
ciap: "L77", cid: "S93.4", tags: "torceu o pé tornozelo inchado ottawa raio x gelo",
S: `Paciente, ___ anos, com entorse de tornozelo ___ (D/E) há ___ h, mecanismo ___ (inversão). Conseguiu apoiar e dar 4 passos logo após e na consulta: ___.
Estalido, entorses prévias: ___. Medicações, alergias: ___.`,
O: `BEG.
Tornozelo ___: edema ___ em região ___, equimose ___.
Regras de Ottawa: dor à palpação da borda posterior/ponta do maléolo lateral ___, maléolo medial ___, base do 5º metatarso ___, navicular ___; incapacidade de apoiar 4 passos ___.`,
A: `Entorse de tornozelo ___ (grau ___), Ottawa ___ (negativo: sem indicação de RX).`,
P: `- RX apenas se Ottawa positivo.
- Proteção, gelo, compressão, elevação nas primeiras 48–72 h.
- Suporte funcional (tornozeleira/órtese) e mobilização precoce conforme dor.
- AINE por poucos dias.
- Exercícios de propriocepção após a fase aguda; retorno se sem melhora em 1–2 semanas.`,
rx: [
 {trilha: "evidencia", titulo: "AINE tópico (1ª linha para dor musculoesquelética)", texto: `USO TÓPICO
1. Diclofenaco gel 1% ______ 1 bisnaga
   Aplicar no tornozelo 3 a 4 vezes ao dia por até 7 dias.`, dose: "NV", nota: "Eficácia semelhante ao AINE oral com menos efeitos sistêmicos. Não consta na RENAME nem na REMUME."},
 {trilha: "sus", titulo: "AINE oral (SUS Betim)", texto: `USO ORAL
1. Ibuprofeno 600 mg ______ 15 comprimidos
   Tomar 1 comprimido de 8/8h, após as refeições, por até 5 dias.`, dose: "NV"},
 {trilha: "ambos", titulo: "Analgesia adicional", texto: `USO ORAL
1. Paracetamol 500 mg ______ 1 caixa
   Tomar 1 a 2 comprimidos de 6/6h se dor.`, dose: "NV"}
],
orient: `Nos primeiros 2 a 3 dias: gelo envolvido em pano por 15 a 20 minutos várias vezes ao dia, perna elevada e faixa elástica sem apertar.
Comece a apoiar e mexer o pé assim que a dor permitir: isso acelera a recuperação.
Depois que a dor baixar, faça os exercícios de equilíbrio para evitar novas torções.`,
alarme: ["Não consegue apoiar o pé", "Dedos frios, roxos ou dormentes", "Dor que piora muito após 3 dias", "Deformidade"],
encaminhar: "Ottawa positivo → RX. Fratura, instabilidade importante ou lesão grau III → ortopedia.",
idealsus: {ideal: "AINE tópico (diclofenaco gel) alivia a dor de entorses de forma semelhante ao oral, com menos efeitos adversos gastrointestinais e renais (Cochrane).", sus: "REMUME Betim tem ibuprofeno oral; AINE tópico não consta na RENAME nem na REMUME.", ponte: "Ibuprofeno oral curto para a maioria. Gel tópico se houver risco com AINE oral (idoso, DRC, úlcera) e a pessoa puder comprar."},
sus: {nacional: "RENAME 2024: ibuprofeno, paracetamol (Básico). AINE tópico não consta.", betim: "REMUME Betim: ibuprofeno 600 mg e paracetamol 500 mg disponíveis. Acesso a RX e órteses: não verificado."},
evid: {resumo: "As regras de Ottawa têm sensibilidade próxima de 100% para fratura e reduzem RX desnecessário. Suporte funcional e mobilização precoce são superiores à imobilização rígida. AINE tópico tem NNT baixo para alívio da dor aguda (Cochrane 2015).", certeza: "Alta para Ottawa; moderada para o restante (estimada)", fontes: ["entorse", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Posologias: conferir bula."]
},
{
id: "chikungunya", nome: "Chikungunya (fase aguda)", sistema: "Infecciosas e vigilância", risco: "alto",
ciap: "A77", cid: "A92.0", tags: "arbovirose febre dor nas juntas artralgia artrite aedes notificação",
alerta: "Na fase aguda, até excluir dengue: não usar AINE, AAS nem corticoide. Pesquisar sinais de alarme de dengue. Notificação compulsória.",
S: `Paciente, ___ anos, com febre de início súbito há ___ dias e artralgia intensa ___ (simétrica, mãos/punhos/tornozelos), com/sem edema articular. Exantema: ___. Cefaleia, mialgia: ___.
Dor (EVA): ___/10. Sinais de alarme de dengue: ___ (ausentes). Gestação: ___. Comorbidades/idade ≥ 65: ___.
Casos na vizinhança: ___.`,
O: `BEG, ___.
${VITAIS}
Articulações: edema ___, dor à palpação ___ em ___. Pele: exantema ___.
ABD: sem dor, sem hepatomegalia. Mucosas sem sangramento.`,
A: `Caso suspeito de chikungunya, fase aguda (___º dia), dor ___ (leve/moderada/intensa), sem sinais de gravidade; dengue não excluída.`,
P: `- Analgesia em horários fixos, escalonada pela intensidade da dor.
- Sem AINE, AAS ou corticoide na fase aguda.
- Hidratação oral; manejar como dengue se houver dúvida diagnóstica.
- Compressas frias nas articulações; repouso relativo.
- Notificação do caso suspeito.
- Reavaliação em 7 dias (dor persistente > 14 dias: tratamento da fase pós-aguda).`,
rx: [
 {trilha: "ambos", titulo: "Dor leve (EVA 1–3)", texto: `USO ORAL
1. Dipirona 500 mg ______ 1 caixa
   Tomar 2 comprimidos (1 g) de 6/6h, em horário fixo.
   E/OU
2. Paracetamol 500 mg ______ 1 caixa
   Tomar 2 comprimidos (1 g) de 6/6h, intercalando com a dipirona a cada 3 h.`, dose: "F"},
 {trilha: "ambos", titulo: "Dor moderada a intensa (EVA ≥ 4)", texto: `USO ORAL
1. Dipirona e/ou paracetamol como acima
   +
2. Codeína 30 mg ______ 1 caixa
   Tomar 1 comprimido de 6/6h.`, dose: "F", nota: "Fluxograma SES-MG também cita tramadol 50–100 mg 6/6h (não consta na REMUME Betim). Codeína exige receita de controle especial. Contraindicada em < 12 anos e na amamentação (metabolizadores ultrarrápidos do CYP2D6); cautela em idosos e DRC."},
 {trilha: "ambos", titulo: "Fase pós-aguda (> 14 dias, artrite/tenossinovite)", texto: `USO ORAL
1. Prednisona 20 mg ______ ___ comprimidos
   Tomar 0,5 mg/kg/dia (máximo 40 mg) pela manhã até melhora, no máximo 3 semanas; depois reduzir ¼ da dose a cada 7 dias.
   OU
2. Ibuprofeno 600 mg – 1 comprimido de 8/8h por até 4 semanas (avaliar função renal).`, dose: "F"}
],
orient: `A dor nas juntas pode ser forte e durar semanas. Tome o analgésico em horários fixos, não só quando doer.
Não tome anti-inflamatórios, AAS ou corticoide nos primeiros 14 dias, até ter certeza de que não é dengue.
Beba bastante líquido. Compressas frias aliviam o inchaço das juntas.
Use repelente para não transmitir a doença.`,
alarme: ["Dor forte e contínua na barriga", "Vômitos persistentes", "Sangramento", "Tontura ou desmaio", "Sonolência ou confusão", "Pouca urina"],
encaminhar: "Sinais de alarme ou gravidade → manejo como dengue grupo C/D. Gestante perto do parto, recém-nascido, idoso com comorbidade descompensada → avaliação prioritária. Artrite > 3 meses → reumatologia.",
sus: {nacional: "RENAME 2024: dipirona, paracetamol, prednisona, ibuprofeno (Básico); codeína (Especializado).", betim: "REMUME Betim: dipirona 500 mg, paracetamol 500 mg, codeína 30 mg, prednisona 20 mg, ibuprofeno 600 mg disponíveis."},
evid: {resumo: "Não há antiviral. O manejo é sintomático, com analgesia escalonada e restrição de AINE e corticoide na fase aguda pelo risco de dengue concomitante e de complicações. Na fase pós-aguda, corticoide em dose moderada ou AINE controlam artrite.", certeza: "Baixa (recomendação de consenso)", fontes: ["ses_chik", "ms_dengue", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Fluxograma SES-MG sem data no documento e com diagramação ambígua na faixa de dor intensa: conferir no original.", "Codeína: receituário de controle especial (Portaria 344/98), não verificado nesta sessão."]
},
// ───────────────────────── SAÚDE MENTAL
{
id: "panico", nome: "Crise de ansiedade / ataque de pânico", sistema: "Saúde mental", risco: "moderado",
ciap: "P74", cid: "F41.0 · F41.9", tags: "ansiedade pânico falta de ar palpitação medo de morrer crise nervosa",
alerta: "Antes de atribuir à ansiedade: excluir síndrome coronariana, arritmia, TEP, hipoglicemia, hipertireoidismo e intoxicação conforme risco. Perguntar sempre sobre ideação suicida.",
S: `Paciente, ___ anos, com episódio súbito de ___ (palpitação, falta de ar, aperto no peito, tremor, sudorese, formigamento, medo de morrer/perder o controle) com pico em ~10 min, há ___.
Episódios prévios: ___ (frequência). Evita lugares por medo de crise: ___. Desencadeantes: ___.
Uso de cafeína, álcool, estimulantes, abstinência de benzodiazepínico: ___. Comorbidades: ___. Ideação suicida: ___ (negada).`,
O: `___ (ansioso, colaborativo).
${VITAIS}  Glicemia capilar: ___
ACV: RCR 2T, BNF. AR: MV+ bilateral. ECG (se dor torácica ou fator de risco): ___.`,
A: `Ataque de pânico ___ (isolado / recorrente, provável transtorno de pânico), sem sinais de causa orgânica no momento.`,
P: `- Acolhimento, explicação dos sintomas, respiração lenta e técnicas de aterramento.
- Benzodiazepínico não é necessário na maioria das crises; evitar prescrição contínua.
- Transtorno de pânico/ansiedade recorrente: ISRS + TCC (ou intervenção psicológica disponível na APS/NASF-eMulti).
- Retorno em 2–4 semanas para seguimento.`,
rx: [
 {trilha: "ambos", titulo: "Tratamento de manutenção (transtorno de pânico/TAG)", texto: `USO ORAL
1. Sertralina 50 mg ______ 30 comprimidos
   Tomar ½ comprimido (25 mg) pela manhã por 7 dias, depois 1 comprimido (50 mg). Ajustar após 4–6 semanas.
   OU
2. Fluoxetina 20 mg ______ 30 cápsulas
   Tomar 1 cápsula pela manhã (começar com 10 mg se muito ansioso).`, dose: "NV", nota: "Efeito em 4–6 semanas; pode haver piora transitória da ansiedade na 1ª semana."},
 {trilha: "ambos", titulo: "Crise intensa (uso pontual, se necessário)", texto: `USO ORAL
1. Diazepam 10 mg – ½ comprimido (5 mg), dose única na unidade.`, dose: "NV", nota: "Benzodiazepínico contínuo não é recomendado (dependência, quedas, piora cognitiva). Receita de controle especial."}
],
orient: `O que você sentiu foi uma crise de pânico. É muito desconfortável, mas não causa dano ao coração.
Na crise: respire devagar, contando 4 segundos para puxar o ar e 6 para soltar, e lembre que passa em minutos.
Diminua café, energéticos e álcool. Atividade física regular ajuda.
O remédio contínuo leva algumas semanas para fazer efeito; não pare por conta própria.`,
alarme: ["Dor no peito diferente das crises habituais ou com esforço", "Desmaio", "Pensamentos de se machucar ou de morrer", "Crises diárias que impedem sair de casa"],
encaminhar: "Ideação suicida com plano → avaliação imediata (CAPS/urgência). Dor torácica suspeita → urgência. Refratário ou comorbidade grave → matriciamento/CAPS.",
idealsus: {ideal: "TCC (terapia cognitivo-comportamental) e ISRS têm eficácia comparável no transtorno de pânico; a combinação é útil nos moderados a graves.", sus: "ISRS (sertralina, fluoxetina) disponíveis em Betim. Acesso a TCC estruturada no SUS é limitado e depende de equipe multiprofissional/CAPS.", ponte: "ISRS na APS + intervenção psicológica possível na rede (grupos, eMulti). Indicar TCC privada ou programas online se a pessoa puder."},
sus: {nacional: "RENAME 2024: fluoxetina 20 mg, diazepam, clonazepam solução (Básico). Sertralina não consta.", betim: "REMUME Betim: sertralina 50 mg, fluoxetina 20 mg, diazepam 10 mg, clonazepam 2 mg, propranolol 40 mg disponíveis."},
evid: {resumo: "NICE recomenda TCC ou ISRS como 1ª linha no transtorno de pânico e desaconselha benzodiazepínicos pelo pior desfecho a longo prazo. Na crise isolada, acolhimento e técnicas respiratórias costumam bastar.", certeza: "Moderada (estimada)", fontes: ["nice_ansiedade", "rename", "remume"]},
mudancas: ["Entrada nova."],
nv: ["Doses: conferir bula.", "Diazepam: Betim lista 10 mg comprimido (prescrição ajustada para ½ comprimido)."]
},
{
id: "insonia", nome: "Insônia", sistema: "Saúde mental", risco: "baixo",
ciap: "P06", cid: "G47.0 · F51.0", tags: "não consigo dormir sono remédio para dormir higiene do sono TCC-I",
S: `Paciente, ___ anos, com dificuldade de ___ (iniciar / manter o sono / despertar precoce) ≥ 3 noites/semana há ___ meses, com prejuízo diurno ___.
Horários de deitar e levantar: ___. Telas, cafeína, álcool, cochilos: ___. Ronco/apneia testemunhada: ___. Pernas inquietas: ___.
Sintomas depressivos/ansiosos: ___. Dor, noctúria, refluxo: ___. Uso de hipnóticos/benzodiazepínicos: ___ (há quanto tempo).`,
O: `BEG.
${VITAIS}
PHQ-2/GAD-2: ___. Circunferência cervical/IMC (risco de apneia): ___.`,
A: `Insônia ___ (aguda / crônica), ___ (sem / com) comorbidade associada: ___.`,
P: `- Tratar causas e comorbidades (dor, depressão, ansiedade, apneia).
- TCC-I como 1ª linha: restrição de tempo na cama, controle de estímulos, higiene do sono, reestruturação de crenças.
- Diário do sono por 2 semanas.
- Evitar benzodiazepínicos e "drogas Z"; se já usa há longo prazo, planejar desmame gradual.
- Retorno em 4 semanas.`,
rx: [
 {trilha: "ambos", titulo: "TCC-I – prescrição comportamental", texto: `ORIENTAÇÕES
1. Horário fixo para levantar todos os dias, inclusive fins de semana: ___h.
2. Só deitar quando estiver com sono; se não dormir em ~20 minutos, levantar e fazer algo calmo, com pouca luz, e voltar quando tiver sono.
3. Cama só para dormir e sexo (sem tela, TV, celular).
4. Evitar cochilos durante o dia.
5. Sem café, chá preto, refrigerante de cola ou energético após as 14h; evitar álcool à noite.
6. Diário do sono por 2 semanas.`, dose: "NV"},
 {trilha: "fora", titulo: "Se hipnótico for inevitável (curto prazo)", texto: `Avaliar caso a caso, por no máximo 2 a 4 semanas, com plano de suspensão.
Benzodiazepínicos disponíveis em Betim (nitrazepam, lorazepam, diazepam) aumentam risco de quedas, dependência e prejuízo cognitivo, especialmente em idosos (critérios de Beers).`, dose: "NV"}
],
orient: `O tratamento mais eficaz para insônia é mudar hábitos ligados ao sono, e o efeito dura mais do que o de remédios.
Levante sempre no mesmo horário, mesmo depois de uma noite ruim. Não fique na cama acordado por muito tempo.
Remédios para dormir causam dependência e quedas e perdem efeito com o tempo.`,
alarme: ["Ronco alto com pausas na respiração ou sonolência ao dirigir", "Tristeza persistente ou pensamentos de morte", "Pernas inquietas que impedem dormir"],
encaminhar: "Suspeita de apneia obstrutiva → polissonografia via regulação. Depressão moderada/grave ou risco de suicídio → plano específico.",
idealsus: {ideal: "TCC-I é a 1ª linha (ACP 2016): melhora sustentada do sono, sem os riscos dos hipnóticos.", sus: "Não há TCC-I estruturada amplamente disponível na APS de Betim (não verificado). A REMUME tem benzodiazepínicos, que não são recomendados como tratamento da insônia crônica.", ponte: "Aplicar os componentes da TCC-I na própria consulta (instruções acima, diário do sono) e em grupos da eMulti, se houver. TCC-I com psicólogo ou programa digital se a pessoa puder."},
sus: {nacional: "RENAME 2024: diazepam, clonazepam solução, amitriptilina (Básico). Não há medicamento específico para insônia.", betim: "REMUME Betim: nitrazepam 5 mg, lorazepam 2 mg, diazepam 10 mg, midazolam 15 mg comprimido constam."},
evid: {resumo: "ACP 2016 recomenda TCC-I como tratamento inicial (recomendação forte, evidência moderada) e uso de fármacos apenas como adjuvante, por curto prazo. Benzodiazepínicos aumentam quedas e fraturas em idosos.", certeza: "Moderada (estimada)", fontes: ["acp_insonia", "rename", "remume"]},
mudancas: ["Entrada nova (estava vazia no Notion)."],
nv: ["Oferta de grupos de sono ou TCC na rede de Betim: não verificada."]
},
// ───────────────────────── SANGUE
{
id: "anemia-ferropriva", nome: "Anemia por deficiência de ferro", sistema: "Sangue e metabolismo", risco: "moderado",
ciap: "B80", cid: "D50.9", tags: "anemia ferro sulfato ferroso ferritina cansaço palidez",
alerta: "Homem ou mulher pós-menopausa com anemia ferropriva: investigar perda gastrointestinal (EDA e colonoscopia).",
S: `Paciente, ___ anos, com ___ (cansaço, dispneia aos esforços, palidez, queda de cabelo, pica) há ___.
Perdas: fluxo menstrual ___ (dias, absorventes/dia, coágulos), sangramento digestivo ___, doação de sangue ___. Dieta: ___. Gestação: ___.
Cirurgia bariátrica, doença celíaca, uso de IBP: ___. Perda de peso, alteração do hábito intestinal: ___.`,
O: `___ (hipocorado ___/4+).
${VITAIS}
ACV: RCR, sopro sistólico ___. ABD: ___.
Hb ___ g/dL | VCM ___ | ferritina ___ ng/mL | (data ___)`,
A: `Anemia ferropriva ___ (leve/moderada), provável causa: ___.`,
P: `- Ferro oral e investigação da causa (sempre).
- Ferro em dose única diária ou em dias alternados (melhor absorção e tolerância).
- Hemograma em 4 semanas (esperado aumento de Hb ≥ 1 g/dL); manter 3 meses após normalizar para repor estoques.
- Sangramento menstrual intenso: tratar a causa.
- Investigação digestiva conforme idade e sexo.`,
rx: [
 {trilha: "ambos", titulo: "Ferro oral", texto: `USO ORAL
1. Sulfato ferroso 40 mg de ferro elementar ______ ___ comprimidos
   Tomar 1 a 2 comprimidos (40–80 mg de ferro) 1 vez ao dia, em jejum ou 1 hora antes de uma refeição, OU 2 a 3 comprimidos em dias alternados.
   Evitar tomar junto com leite, café, chá ou antiácidos.`, dose: "NV", nota: "Se intolerância gastrointestinal: tomar com alimento ou passar para dias alternados em vez de suspender."}
],
orient: `O ferro pode escurecer as fezes; isso é esperado. Pode dar enjoo ou intestino preso.
Tome longe de leite, café e chá. Se der muito enjoo, pode tomar em dias alternados ou junto com comida.
O tratamento dura alguns meses. Faremos exame de sangue em 1 mês.`,
alarme: ["Fezes pretas ou com sangue", "Falta de ar em repouso ou dor no peito", "Desmaio", "Sangramento menstrual muito intenso"],
encaminhar: "Hb < 7 g/dL ou sintomas importantes → avaliação urgente. Intolerância ou falha ao ferro oral, má absorção → ferro EV (sacarato de óxido férrico consta na REMUME, uso em serviço). Investigação digestiva → EDA/colonoscopia.",
sus: {nacional: "RENAME 2024: sulfato ferroso 40 mg comprimido, 25 mg/mL solução, 5 mg/mL xarope; ferripolimaltose (Básico); sacarato de óxido férrico injetável (Especializado).", betim: "REMUME Betim: sulfato ferroso 40 mg comprimido e 25 mg/mL solução, hidróxido férrico sacarato 20 mg/mL injetável disponíveis."},
evid: {resumo: "Doses diárias altas e fracionadas elevam a hepcidina e reduzem a absorção; ECR mostraram absorção total maior com dose única em dias alternados e menos efeitos gastrointestinais. ECR de 2020 não mostrou benefício adicional da vitamina C na resposta ao ferro oral.", certeza: "Moderada (estimada)", fontes: ["stoffel", "rename", "remume"]},
mudancas: ["Notion orientava sulfato ferroso 1 a 3 vezes ao dia: trocado por dose única diária ou dias alternados.", "Retirada a obrigatoriedade de vitamina C/suco de laranja (sem benefício adicional em ECR).", "Tabela de ferro EV do Notion não migrada: uso hospitalar/ambulatorial especializado; marcas e doses não verificadas."],
nv: ["Doses: conferir bula.", "Referência do ECR sobre vitamina C citada de memória."]
}
);
