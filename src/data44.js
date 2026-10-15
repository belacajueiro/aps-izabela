// ───────────── data44.js – v38: B12 (mecobalamina), otite externa (Oto-Betnovate e opções de menor custo), conjuntivite na criança (adenovírus × bacteriana), ezetimiba com LDL já na meta
FONTES["obeid2015_b12"] = {s: "Obeid 2015 – formas de cobalamina", t: "Obeid R, Fedosov SN, Nexo E. Cobalamin coenzyme forms are not likely to be superior to cyano- and hydroxyl-cobalamin in prevention or treatment of cobalamin deficiency. Mol Nutr Food Res 2015;59(7):1364-72. DOI 10.1002/mnfr.201500019 (revisão narrativa).", f: "F", url: "https://doi.org/10.1002/mnfr.201500019"};
FONTES["bula_mecobe"] = {s: "Bula Mecobe (mecobalamina)", t: "Mecobe (mecobalamina 500 e 1.000 mcg comprimido sublingual), bula do paciente: indicado para deficiência de B12 em uso de metformina e hiper-homocisteinemia; 1.000 mcg 1×/dia por até 3 meses, sublingual (bula registrada).", f: "F", url: "https://www.araujo.com.br/bula/Mecobe-1000mcg-com-30-Comprimidos-Sublinguais"};
FONTES["cochrane_oe2010"] = {s: "Cochrane 2010 – otite externa aguda", t: "Kaushik V, Malik T, Saeed SR. Interventions for acute otitis externa. Cochrane Database Syst Rev 2010;CD004740. DOI 10.1002/14651858.CD004740.pub2 (RS: 19 ECR, 3.382 participantes; qualidade geral baixa).", f: "F", url: "https://doi.org/10.1002/14651858.CD004740.pub2"};
FONTES["bula_otobetnovate"] = {s: "Bula Oto-Betnovate", t: "Oto-Betnovate (betametasona 1 mg/mL + clorfenesina 10 mg/mL + cloridrato de tetracaína 5 mg/mL, solução otológica), bula do paciente: otites externas agudas ou crônicas por bactérias ou fungos, otite do nadador, otites por dermatite seborreica, eczema e psoríase; adultos 3–4 gotas 3–4×/dia, crianças 2–3 gotas 3–4×/dia, por 7–14 dias (bula registrada).", f: "F", url: "https://img.drogasil.com.br/raiadrogasil_bula/OTOBETNOVATE.pdf"};
FONTES["patel2007_conj"] = {s: "Patel 2007 – conjuntivite bacteriana na criança", t: "Patel PB, Diaz MC, Bennett JE, Attia MW. Clinical features of bacterial conjunctivitis in children. Acad Emerg Med 2007;14(1):1-5. DOI 10.1197/j.aem.2006.08.006 (coorte prospectiva em PS pediátrico, n = 111).", f: "F", url: "https://doi.org/10.1197/j.aem.2006.08.006"};
FONTES["azari2013_conj"] = {s: "Azari 2013 – conjuntivite (JAMA)", t: "Azari AA, Barney NP. Conjunctivitis: a systematic review of diagnosis and treatment. JAMA 2013;310(16):1721-9. DOI 10.1001/jama.2013.280318 (revisão sistemática).", f: "F", url: "https://doi.org/10.1001/jama.2013.280318"};
FONTES["hu2021_conj"] = {s: "Hu 2021 – conjuntivite-otite", t: "Hu YL et al. Predominant role of Haemophilus influenzae in the association of conjunctivitis, acute otitis media and acute bacterial paranasal sinusitis in children. Sci Rep 2021;11:11. DOI 10.1038/s41598-020-79680-6 (série de casos, Taiwan).", f: "F", url: "https://doi.org/10.1038/s41598-020-79680-6"};
FONTES["improve_it"] = {s: "IMPROVE-IT (NEJM 2015)", t: "Cannon CP et al. Ezetimibe added to statin therapy after acute coronary syndromes. N Engl J Med 2015;372:2387-97. DOI 10.1056/NEJMoa1410489 (ECR duplo-cego, n = 18.144; financiado pela Merck).", f: "F", url: "https://doi.org/10.1056/NEJMoa1410489"};
FONTES["racing2022"] = {s: "RACING (Lancet 2022)", t: "Kim BK et al. Moderate-intensity statin with ezetimibe versus high-intensity statin monotherapy in ASCVD (RACING): randomised, open-label, non-inferiority trial. Lancet 2022;400:380-90. DOI 10.1016/S0140-6736(22)00916-3 (ECR aberto, n = 3.780, Coreia do Sul).", f: "F", url: "https://doi.org/10.1016/S0140-6736(22)00916-3"};
FONTES["ctt2010"] = {s: "CTT 2010 (Lancet)", t: "Cholesterol Treatment Trialists' Collaboration. Efficacy and safety of more intensive lowering of LDL cholesterol: meta-analysis of 170,000 participants in 26 randomised trials. Lancet 2010;376:1670-81. DOI 10.1016/S0140-6736(10)61350-5 (MA de dados individuais).", f: "F", url: "https://doi.org/10.1016/S0140-6736(10)61350-5"};

(function(){
  const get = id => CONDICOES.find(x => x.id === id);
  const sec = (c, re) => c && c.guia && c.guia.secoes.find(s => re.test(s.t));

  // ── B12 ─────────────────────────────────────────────────
  const b = get("cr-b12");
  if (b) {
    const rc = b.rx.find(r => /Cianocobalamina oral/.test(r.titulo));
    if (rc) rc.nota = "Cochrane 2018: oral 1.000–2.000 mcg/dia normaliza a B12 de forma semelhante à IM (certeza baixa). É a forma estudada nos ECR. Não há cianocobalamina oral isolada na lista de preços da CMED: no Brasil sai como suplemento ou manipulada – pode faltar ou custar mais que a mecobalamina.";
    b.rx.splice(1, 0, {trilha: "evidencia", titulo: "Mecobalamina sublingual (comprar)", texto: "USO SUBLINGUAL\n1. Mecobalamina 1.000 mcg ______ 30 comprimidos\n   Colocar 1 comprimido embaixo da língua 1 vez ao dia e deixar dissolver (não engolir nem mastigar).", dose: "F", nota: "Bula (Mecobe): 1.000 mcg 1×/dia por até 3 meses; indicação registrada só para deficiência em uso de metformina – nas outras causas é uso fora da bula [F]. Sem evidência de superioridade sobre a cianocobalamina (Obeid 2015) [F]; equivalência clínica é extrapolação dos ECR com cianocobalamina [I]. Vantagem prática: é medicamento registrado, com várias marcas e fácil de achar."});
    b.idealsus.ponte = "Se a farmácia municipal não tiver a injetável, a via oral comprada resolve a maioria. Na prática, a mecobalamina 1.000 mcg sublingual é a forma registrada mais fácil de achar (várias marcas, ~R$ 1/comprimido no balcão); a cianocobalamina oral sai como suplemento ou manipulada. Reserve a IM para casos neurológicos e pergunte à coordenação sobre aquisição.";
    const s = b.guia.secoes[0];
    const u = s && s.b.find(x => x.ul);
    if (u) u.ul.splice(3, 0, "**Ciano × mecobalamina:** os ECR da via oral usaram cianocobalamina; não há evidência de que a mecobalamina seja superior – as duas viram as mesmas coenzimas dentro da célula (Obeid 2015) [F]. A mecobalamina 1.000 mcg sublingual é registrada como medicamento (teto CMED ~R$ 2,90–3,30/comprimido; no balcão, ofertas de ~R$ 23–34 a caixa com 30 em comparador on-line, sem data) [F]; a cianocobalamina oral isolada não consta da CMED (suplemento ou manipulado) [F]. Use a que o paciente achar mais barata e confira a resposta em 2–3 meses [I].");
    const r = s && s.b.find(x => x.ref); if (r) r.ref.push("obeid2015_b12", "bula_mecobe", "cmed_pmc2026");
    b.evid.fontes.push("obeid2015_b12", "bula_mecobe");
    b.nv = (b.nv || []).concat(["Preço de balcão da mecobalamina (comparadores on-line sem data) e da cianocobalamina oral manipulada: conferir na farmácia."]);
    b.mudancas.push("Revisão 14/10/2026 (v38): mecobalamina sublingual como alternativa de compra, com preço CMED e comparação com a cianocobalamina oral.");
  }

  // ── Otite externa ───────────────────────────────────────
  const o = get("otite-externa");
  if (o) {
    o.P = "- Prescrevo gotas otológicas com antimicrobiano e/ou corticoide (a classe não muda o resultado; escolher pelo custo, pela membrana timpânica e pela posologia).\n- Oriento manter o ouvido seco (algodão com vaselina no banho) e não usar cotonete.\n- Analgesia oral.\n- Antibiótico oral não indicado, salvo celulite periauricular, diabetes, imunossupressão ou falha do tratamento tópico.\n- Usar as gotas por pelo menos 7 dias; se ainda houver sintomas, continuar até melhorar (máx. 14 dias).\n- Retorno se não melhorar em 48–72 h.";
    const rf = o.rx.find(r => /RENAME/.test(r.titulo));
    if (rf) { rf.trilha = "ambos"; rf.titulo = "Membrana íntegra: polimixina + neomicina + fluocinolona + lidocaína (RENAME; mais barata)"; }
    o.rx.splice(2, 0,
      {trilha: "ambos", titulo: "Membrana íntegra: betametasona + clorfenesina + tetracaína (Oto-Betnovate)", texto: "USO OTOLÓGICO\n1. Betametasona + clorfenesina + tetracaína solução otológica (Oto-Betnovate) ______ 1 frasco\n   Pingar 3 a 4 gotas no ouvido ___ de 8/8h ou de 6/6h por 7 dias (até 14 dias se ainda houver sintomas), deitado de lado por 3 a 5 minutos.", dose: "F", nota: "Bula: otite externa aguda ou crônica por bactérias ou fungos e otite do nadador; adultos 3–4 gotas 3–4×/dia, crianças 2–3 gotas, por 7–14 dias [F]. Sem aminoglicosídeo e cobre fungos (útil se suspeita de otomicose) [F]. A bula não trata de membrana perfurada e não há dado de segurança no ouvido médio – usar só com membrana visualizada íntegra [I]. Não localizei ECR com clorfenesina; a escolha se apoia em que as gotas têm eficácia semelhante (Cochrane 2010) [I]."},
      {trilha: "ambos", titulo: "Membrana íntegra: neomicina + polimixina B + hidrocortisona (Otosporin)", texto: "USO OTOLÓGICO\n1. Neomicina + polimixina B + hidrocortisona suspensão otológica ______ 1 frasco\n   Pingar ___ gotas no ouvido ___ de ___/___h por 7 dias.", dose: "NV", nota: "Neomicina: ototóxica e causa dermatite de contato – não usar se a membrana não for visualizada. Posologia: conferir bula."});
    const rq = o.rx.find(r => /quinolona/.test(r.titulo));
    if (rq) { rq.titulo = "Membrana não vista, perfurada ou tubo: quinolona"; rq.nota = "Única classe sem ototoxicidade: escolha obrigatória quando a membrana não pode ser vista. Ciprofloxacino + hidrocortisona (Otociriax) é a única apresentação na lista CMED e a mais cara. Posologia varia por produto."; }
    o.idealsus.ideal = "Qualquer gota antimicrobiana com ou sem corticoide tem eficácia semelhante; com membrana íntegra, a mais barata. Com membrana não visualizada, perfurada ou tubo de ventilação: quinolona (não ototóxica).";
    o.idealsus.ponte = "Em Betim, o tratamento tópico depende de compra. Membrana íntegra: genérico de polimixina + neomicina + fluocinolona + lidocaína ou Otosporin (tetos CMED de ~R$ 10–19) ou Oto-Betnovate (~R$ 38; sem neomicina, cobre fungos). Membrana não vista: ciprofloxacino otológico (Otociriax, ~R$ 53).";
    o.evid = {resumo: "Tratamento tópico é a 1ª linha; antibiótico oral não acrescenta benefício na otite externa não complicada. Gotas com antimicrobiano e corticoide são muito superiores a placebo, e não há diferença clinicamente relevante entre as classes; ácido acético perde para antibiótico + corticoide após a 1ª semana. A escolha deve considerar ototoxicidade, sensibilização, custo e posologia (Cochrane 2010).", certeza: "Baixa (Cochrane 2010: estudos pequenos, poucos na APS)", fontes: ["cochrane_oe2010", "aaohns_oe", "bula_otobetnovate", "cmed_pmc2026", "rename", "remume"]};
    o.mudancas.push("Revisão 14/10/2026 (v38): Oto-Betnovate volta como opção (composição e indicação conferidas na bula) e Otosporin entra como alternativa barata; escolha da gota pela membrana timpânica e pelo custo (Cochrane 2010).");
    o.nv = ["Posologia do ciprofloxacino otológico e do Otosporin varia por produto: conferir bula.", "Segurança do Oto-Betnovate com membrana perfurada: não abordada na bula."];
    o.guia = {resumo: "Na otite externa aguda, **as gotas resolvem e a classe quase não importa** (Cochrane 2010). O que decide: **a membrana timpânica foi vista e está íntegra?** Se não, só quinolona. Se sim, a mais barata.",
      secoes: [{t: "Qual gota", b: [
        {fluxo: [{t: "Otite externa difusa (dor ao tracionar o pavilhão, conduto edemaciado)"},
          {t: "Membrana timpânica visualizada e íntegra?", ramos: [
            {r: "Sim", n: [{t: "Gota mais barata: genérico polimixina + neomicina + fluocinolona + lidocaína, Otosporin ou Oto-Betnovate", k: "ok", s: "Oto-Betnovate se suspeita de fungo ou alergia a neomicina"}]},
            {r: "Não vista, perfurada ou tubo", n: [{t: "Quinolona otológica (ciprofloxacino)", k: "warn", s: "aminoglicosídeo e anestésico tópico: evitar"}]}]},
          {t: "Edema fecha o conduto? Mecha de algodão/gaze embebida na gota (a bula do Oto-Betnovate prevê)"},
          {t: "Pelo menos 7 dias; continuar até melhorar, máx. 14"}],
         nota: "Eficácia semelhante entre gotas, duração e falha após 2 semanas: Cochrane 2010 [F]. Quinolona com membrana não íntegra: AAO-HNS 2014 [C]. Indicação, doses e mecha: bula do Oto-Betnovate [F]."},
        {tab: {h: ["Gota (membrana íntegra)", "Teto CMED", "Atenção"], r: [
          ["Genérico, Otosylase, Otomixyn (polimixina + neomicina + fluocinolona + lidocaína)", "R$ 10–15", "neomicina: ototóxica, dermatite de contato"],
          ["Otosporin (neomicina + polimixina B + hidrocortisona)", "R$ 18,55", "neomicina"],
          ["Oto-Betnovate (betametasona + clorfenesina + tetracaína)", "R$ 38,43", "sem aminoglicosídeo; cobre fungos; tem anestésico"],
          ["Otociriax (ciprofloxacino + hidrocortisona)", "R$ 53,34", "a única segura com membrana não íntegra"]]},
         nota: "Tetos PMC da CMED (09/10/2026, ICMS de MG) [F]; no balcão costumam sair abaixo. Ver também 'Nomes no balcão' na receita."},
        {perola: {t: "Dor que não fecha com a gota = olhe de novo", x: "Sem melhora em 48–72 h: conduto obstruído (limpeza ou mecha), fungo (prurido, debris brancos ou pretos), dermatite de contato à neomicina (piora com o tratamento) ou diagnóstico errado (otite média com perfuração, furúnculo). Diabético ou idoso com dor desproporcional: pensar em otite externa necrotizante [C].", d: "evita trocar de gota sem motivo e pega a necrotizante cedo.", l: "C"}},
        {ref: ["cochrane_oe2010", "aaohns_oe", "bula_otobetnovate", "cmed_pmc2026"]}]}]};
  }

  // ── Conjuntivite: adenovírus × bacteriana na criança ─────
  const conjTab = {ul: [
    "**Viral (adenovírus):** secreção aquosa ou mucoide que **também pode colar as pálpebras de manhã**; começa num olho e passa ao outro em dias; folículos na pálpebra inferior, linfonodo pré-auricular, febre + dor de garganta (febre faringoconjuntival), surto na escola ou em casa. → Sem antibiótico; compressa fria, lubrificante, lavar as mãos; dura 1–3 semanas e transmite enquanto houver olho vermelho com secreção. Fotofobia ou baixa visual na 2ª semana = ceratite → oftalmologia.",
    "**Bacteriana:** pus que volta logo depois de limpar, pálpebras coladas, sem prurido e sem febre faringoconjuntival; na criança pequena, muitas vezes com otite média (H. influenzae). → Melhora sozinha na maioria; colírio antibiótico encurta um pouco (pode ser receita de reserva). Com otite média junto: tratar a otite por via oral, que cobre a conjuntivite.",
    "**Alérgica:** prurido intenso, bilateral, sazonal, atopia. → Evitar o gatilho, compressa fria, anti-histamínico; colírio antialérgico (compra).",
    "**Hiperaguda ou recém-nascido:** secreção purulenta abundante e rápida; RN nas primeiras semanas. → Pensar em gonococo/clamídia: avaliação no mesmo dia."]};
  const conjNota = "Pálpebras coladas, ausência de prurido e sem história prévia são os achados mais associados a bacteriana (Azari 2013) [F]. Em PS pediátrico, 78% das culturas foram positivas (H. influenzae não tipável 82%) e 'pálpebras coladas + secreção mucopurulenta' teve probabilidade pós-teste de 96% (Patel 2007) [F] – amostra hospitalar, sem pesquisa de adenovírus: na APS, com quadro gripal ou surto, a viral é mais provável [I]. Síndrome conjuntivite-otite: H. influenzae em 70% (Hu 2021) [F]. Pistas do adenovírus [C]. Cochrane: antibiótico aumenta a remissão entre os dias 2 e 5, com efeito modesto [C].";
  const crianca = {perola: {t: "Criança com olho colado de manhã: olhe a garganta, o ouvido e o pré-auricular", x: "Secreção que cola as pálpebras acontece também no adenovírus. Febre + faringite + conjuntivite + linfonodo pré-auricular, ou vários casos na creche, = adenovírus: sem antibiótico, higiene e afastamento enquanto houver secreção. Pus que volta logo após limpar, sem febre faringoconjuntival = bacteriana. Otite média junto = H. influenzae: o antibiótico oral da otite trata os dois [I].", d: "evita colírio antibiótico inútil no adenovírus e não deixa passar a otite.", l: "I"}};
  ["conj-viral", "conj-bact"].forEach(id => {
    const c = get(id); if (!c) return;
    const s = sec(c, /Qual conjuntivite/);
    if (s) {
      const i = s.b.findIndex(x => x.tab); if (i >= 0) s.b[i] = Object.assign(JSON.parse(JSON.stringify(conjTab)), {}), s.b.splice(i + 1, 0, {nota: conjNota});
      if (!s.b.some(x => x.perola)) s.b.splice(1, 0, JSON.parse(JSON.stringify(crianca)));
      const r = s.b.find(x => x.ref); if (r) r.ref = ["azari2013_conj", "patel2007_conj", "hu2021_conj", "cochrane_conj", "cab28"];
    }
    c.mudancas = (c.mudancas || []).concat(["Revisão 14/10/2026 (v38): diferenciação adenovírus × bacteriana na criança (pálpebras coladas ocorrem nos dois; febre faringoconjuntival, folículos e linfonodo pré-auricular; síndrome conjuntivite-otite)."]);
  });
  const cv = get("conj-viral");
  if (cv) {
    cv.S = "Paciente com hiperemia ocular, lacrimejamento e sensação de areia há ___ dias, iniciada em um olho e passando ao outro ___. Secreção aquosa/mucoide ___; pálpebras coladas ao acordar ___.\nFebre ___ | dor de garganta ___ | quadro gripal recente ou casos na escola/creche/casa: ___.\nNega dor intensa, fotofobia, baixa visual. Lente de contato: ___.";
    cv.O = "BEG.\nAcuidade visual preservada.\nHiperemia conjuntival difusa com secreção serosa/mucoide ___ (OD/OE/AO). Folículos na conjuntiva tarsal inferior ___. Linfonodo pré-auricular ___ (palpável/não palpável). Orofaringe ___. Otoscopia (criança) ___. Córnea transparente. Pupilas isocóricas e fotorreagentes.";
    cv.evid.fontes = ["azari2013_conj", "cab28", "rename", "remume"];
    cv.encaminhar = "Baixa visual, fotofobia, dor, membranas/pseudomembranas ou opacidades na córnea → oftalmologia.";
  }
  const cb = get("conj-bact");
  if (cb) {
    cb.P = cb.P + "\n- Criança: examinar ouvidos; se otite média aguda, tratar a otite por via oral (cobre a conjuntivite) em vez de só colírio.";
    cb.evid.fontes = ["cochrane_conj", "azari2013_conj", "patel2007_conj", "rename", "remume"];
  }

  // ── Dislipidemia: ezetimiba com LDL já na meta ──────────
  const d = get("cr-dislipidemia");
  if (d) {
    const s = sec(d, /Escolha da estatina/);
    if (s) {
      const p = s.b.find(x => x.perola && /Ezetimiba/.test(x.perola.t));
      if (p) p.perola.x = "No IMPROVE-IT (pós-SCA, LDL de entrada 50–100 já em tratamento), ezetimiba + sinvastatina 40 levou o LDL de 70 para 54 mg/dL e reduziu o desfecho composto de 34,7% para 32,7% em 7 anos (diferença absoluta 2,0 pontos; NNT ≈ 50; HR 0,94), sem mais eventos adversos [F]. Não é incorporada ao SUS (dez/2025) [F].";
      s.b.splice(s.b.findIndex(x => x.ref), 0,
        {perola: {t: "Já na meta e pode pagar: ezetimiba vale a pena?", x: "Depende do risco, não da meta. O benefício segue a queda absoluta do LDL, sem limiar: cerca de 22% menos eventos maiores por 1 mmol/L (39 mg/dL), mesmo com LDL < 77 mg/dL (CTT 2010) [F]. Ezetimiba baixa ~20–25% a mais; com LDL 70 isso dá ~15–17 mg/dL e ~10% menos eventos [I]. **Muito alto risco (DCV aterosclerótica, pós-SCA):** benefício comprovado em ECR (IMPROVE-IT) – razoável oferecer mesmo na meta, se o custo couber [F]. **Prevenção primária na meta:** ganho absoluto pequeno (ex.: risco de 10% em 10 anos → ~1 evento a menos por 100 tratados em 10 anos) [I]; não é rotina. **Intolerância a dose alta:** estatina moderada + ezetimiba foi não inferior à alta intensidade, com mais pacientes < 70 e menos abandono (RACING) [F].", d: "decidir pelo risco absoluto e pelo custo, com o paciente.", l: "F"}});
      const r = s.b.find(x => x.ref); if (r) r.ref.push("improve_it", "racing2022", "ctt2010");
    }
    d.evid.fontes = (d.evid.fontes || []).concat(["improve_it", "racing2022", "ctt2010"]);
    d.mudancas.push("Revisão 14/10/2026 (v38): ezetimiba com LDL já na meta – IMPROVE-IT com números absolutos, CTT (sem limiar) e RACING (estatina moderada + ezetimiba na intolerância).");
  }
})();
