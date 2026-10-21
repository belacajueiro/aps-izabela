# Gera balcao.js a partir da lista CMED (PMC) oficial.
# Cada alvo: chave, rótulo, regex no texto da receita (normalizado), regex substância CMED,
# regex apresentação, unidade ('un' = preço por unidade; 'emb' = por embalagem), excl opcional, nota opcional
import csv, re, json, sys
rows = list(csv.reader(open(sys.argv[1])))[1:]
DATA_LISTA = "09/10/2026"

T = [
 # olhos
 ("olopatadina","Olopatadina 0,1% colírio",r"olopatadina",r"OLOPATADINA",r"^1 MG/ML SOL OFT.*X 5 ML","emb",None,None),
 ("cetotifeno_col","Cetotifeno 0,025% colírio",r"cetotifeno",r"CETOTIFENO",r"OFT","emb",None,None),
 ("lagrima","Lágrima artificial (hipromelose/dextrano ou carmelose)",r"lagrima artificial|dextrano|hipromelose",r"HIPROMELOSE|CARMELOSE",r"OFT","emb",r"GLICEROL",None),
 ("tobramicina_col","Tobramicina 0,3% colírio",r"tobramicina",r"^TOBRAMICINA$",r"3 MG/ML SOL OFT","emb",None,None),
 ("pilocarpina","Pilocarpina 2% colírio",r"pilocarpina",r"PILOCARPINA",r"20 MG/ML.*OFT","emb",None,None),
 ("tetraciclina_oft","Tetraciclina pomada oftálmica",r"tetraciclina.*oftalm",r"^CLORIDRATO DE TETRACICLINA$|^TETRACICLINA$",r"POM OFT","emb",None,None),
 # ouvido / nariz
 ("cipro_oto","Ciprofloxacino otológico",r"ciprofloxacino.*otolog",r"CIPROFLOXACINO",r"OTO","emb",None,None),
 ("poli_oto","Polimixina B + neomicina + fluocinolona + lidocaína otológico",r"fluocinolona",r"FLUOCINOLONA.*POLIMIXINA",r".","emb",r"ELOTIN",None),
 ("budesonida_nasal","Budesonida 32 mcg spray nasal",r"budesonida 32",r"^BUDESONIDA$",r"32 MCG.*NAS.*120","emb",None,None),
 # respiratório
 ("bud_form","Budesonida + formoterol 200/6 mcg",r"budesonida.*formoterol|formoterol.*budesonida",r"BUDESONIDA.*FORMOTEROL|FORMOTEROL.*BUDESONIDA",r"^\(?6 MCG(/INAL)? \+ 200 MCG|^\(6 \+ 200\) MCG","dose",None,None),
 ("bdp_form","Beclometasona + formoterol 100/6 mcg",r"beclometasona.*formoterol|formoterol.*beclometasona",r"BECLOMETASONA.*FORMOTEROL|FORMOTEROL.*BECLOMETASONA",r"^\(?100 ?\+ ?6\)?","dose",r"GLICOPIRR",None),
 ("beclometasona_inal","Beclometasona 200 mcg/jato aerossol",r"beclometasona 200 ?mcg",r"^DIPROPIONATO DE BECLOMETASONA$",r"^200 MCG/DOSE SOL AER","emb",None,None),
 ("salbutamol_aer","Salbutamol 100 mcg/jato aerossol",r"salbutamol 100 ?mcg",r"^SULFATO DE SALBUTAMOL$",r"^100 MCG.*(AER|JATO)","emb",None,None),
 ("lama_laba","LAMA + LABA (tiotrópio + olodaterol / umeclidínio + vilanterol)",r"lama \+ laba|olodaterol|umeclidinio",r"TIOTR.*OLODATEROL|OLODATEROL.*TIOTR|UMECLID.*VILANTEROL|VILANTEROL.*UMECLID",r"^(\(2,5 \+ 2,5\)|62,5 MCG)","dose",r"FUROATO",None),
 ("oto_betnovate","Betametasona + clorfenesina + tetracaína otológico",r"clorfenesina",r"CLORFENESINA",r"OTO","emb",None,None),
 ("otosporin","Neomicina + polimixina B + hidrocortisona otológico",r"hidrocortisona.*polimixina|polimixina.*hidrocortisona|neomicina.*hidrocortisona",r"NEOMICINA.*HIDROCORTISONA|HIDROCORTISONA.*NEOMICINA",r"OTO","emb",None,None),
 # vitaminas
 ("mecobalamina","Mecobalamina 1.000 mcg (sublingual)",r"mecobalamina",r"^MECOBALAMINA$",r"^1000 MCG COM","un",None,None),
 # infecções / pele
 ("fosfomicina","Fosfomicina trometamol 3 g",r"fosfomicina",r"FOSFOMICINA",r"5,631","emb",None,None),
 ("ulipristal","Acetato de ulipristal 30 mg",r"ulipristal",r"ULIPRISTAL",r".","emb",None,None),
 ("permetrina5","Permetrina 5% loção",r"permetrina 5",r"PERMETRINA",r"^(50 MG/(ML|G)|0,05 G/ML)","emb",None,None),
 ("permetrina1","Permetrina 1% loção",r"permetrina 1",r"PERMETRINA",r"^(10 MG/(ML|G)|0,01 G/ML)","emb",None,None),
 ("mupirocina","Mupirocina 2% pomada",r"mupirocina",r"^MUPIROCINA",r"20 MG/G POM","emb",None,None),
 ("valaciclovir","Valaciclovir 500 mg",r"valaciclovir",r"VALACICLOVIR",r"^500 MG COM","un",None,None),
 ("aciclovir_cr","Aciclovir 5% creme",r"(^|[^a-z])aciclovir 5%",r"^ACICLOVIR$",r"50 MG/G CREM","emb",None,None),
 ("terbinafina_cr","Terbinafina 1% creme",r"terbinafina 1",r"TERBINAFINA",r"10 MG/G CREM","emb",None,None),
 ("mometasona_cr","Mometasona 0,1% creme",r"mometasona 0.1",r"^FUROATO DE MOMETASONA$",r"^1 ?MG/G CREM","emb",None,None),
 ("betametasona_val","Valerato de betametasona 0,1% creme",r"betametasona \(valerato\)|valerato de betametasona",r"^VALERATO DE BETAMETASONA$",r"^1 ?MG/G CREM","emb",None,None),
 ("betametasona_dip","Dipropionato de betametasona 0,05% creme",r"dipropionato de betametasona",r"^DIPROPIONATO DE BETAMETASONA$",r"^(0,5|0,64) MG/G CREM","emb",None,None),
 ("hidrocortisona_cr","Hidrocortisona 1% creme",r"hidrocortisona 1%",r"HIDROCORTISONA$",r"10 MG/G CREM","emb",None,None),
 ("clobetasol","Propionato de clobetasol 0,05%",r"clobetasol",r"^PROPIONATO DE CLOBETASOL",r"0,5 MG/G (CREM|POM)|0,5 MG/(G|ML) SOL","emb",None,None),
 ("calcipotriol","Calcipotriol 50 mcg/g pomada",r"calcipotriol",r"^CALCIPOTRIOL$",r"50 MCG/G POM","emb",None,None),
 ("cetoconazol_xampu","Cetoconazol 2% xampu",r"cetoconazol 2% xampu",r"^CETOCONAZOL$",r"SHAMP|XAMP","emb",r"EMB HOSP",None),
 ("miconazol_gel","Miconazol 2% gel oral",r"miconazol 2% gel oral",r"^MICONAZOL$",r"GEL OR","emb",None,None),
 ("adapaleno_bpo","Adapaleno 0,1% + peróxido de benzoíla 2,5% gel",r"adapaleno",r"ADAPALENO.*PEROXIDO|PEROXIDO.*ADAPALENO",r"^\(?1 ?(MG/G)? ?\+ ?25\)? ?MG/G","emb",None,None),
 ("triancinolona_ora","Triancinolona 0,1% em orabase",r"triancinolona",r"^TRIANCINOLONA ACETONIDA$",r"POM BUC","emb",None,None),
 ("imiquimode","Imiquimode 5% creme",r"imiquimode",r"IMIQUIMOD",r".","emb",None,None),
 ("podofilotoxina","Podofilotoxina 0,15% creme",r"podofilotoxina",r"PODOFILOTOX",r".","emb",None,None),
 ("cetoconazol_cr","Cetoconazol 2% creme",r"cetoconazol 2% creme",r"^CETOCONAZOL$",r"^(20(,0)? MG/ ?G|0,02 G/G) CREM","emb",None,None),
 ("dexametasona_cr","Dexametasona 0,1% creme",r"dexametasona 0.1% creme",r"^ACETATO DE DEXAMETASONA$",r"^1(,0+)? ?MG/ ?G CREM","emb",None,None),
 ("miconazol_vag","Miconazol 2% creme vaginal",r"miconazol (creme vaginal )?2%|miconazol creme vaginal",r"^NITRATO DE MICONAZOL$",r"CREM VAG","emb",None,None),
 ("dimeticona4","Dimeticona 4% loção (piolhos)",r"dimeticona 4",r"^DIMETICONA$",r"LOC|LOÇ|SOL TOP","emb",None,None),
 ("diclofenaco_gel","Diclofenaco gel 1%",r"diclofenaco gel",r"^DICLOFENACO (DIETILAM|DE DIETILAM|SÓDICO|SODICO)",r"^(10|11,6) MG/G GEL","emb",None,None),
 # dor / neuro / psiquiatria
 ("colchicina","Colchicina 0,5 mg",r"colchicina 0.5",r"^COLCHICINA$",r"^0,5 MG COM","un",None,None),
 ("sumatriptana","Sumatriptana 50 mg",r"sumatriptan",r"^SUCCINATO DE SUMATRIPTANA$",r"^50 MG COM","un",None,None),
 ("topiramato","Topiramato 25 mg",r"topiramato 25",r"^TOPIRAMATO$",r"^25 MG COM","un",None,None),
 ("escitalopram","Escitalopram 10 mg",r"escitalopram 10",r"ESCITALOPRAM",r"^10 MG COM REV","un",None,None),
 ("duloxetina","Duloxetina 30 mg",r"duloxetina 30",r"DULOXETINA",r"^30 MG CAP","un",None,None),
 ("vareniclina","Vareniclina",r"vareniclina",r"VARENICLINA",r".","un",None,None),
 # GI
 ("macrogol","Macrogol 3350 (PEG)",r"macrogol|polietilenoglicol",r"MACROGOL|POLIETILENOGLICOL",r"PO ","emb",r"OFT",None),
 ("diosmina450","Diosmina 450 mg + hesperidina 50 mg",r"diosmina 450",r"DIOSMINA.*HESPERIDINA|HESPERIDINA.*DIOSMINA",r"^\(?450 ?(MG)? ?(\+|/) ?50\)? ?MG COM","un",None,None),
 ("diosmina900","Diosmina 900 mg + hesperidina 100 mg",r"diosmina 900",r"DIOSMINA.*HESPERIDINA|HESPERIDINA.*DIOSMINA",r"^900 MG \+ 100 MG COM","un",None,None),
 ("ondansetrona","Ondansetrona 4 mg (orodispersível)",r"ondansetrona",r"ONDANSETRONA",r"^4 MG COM ORODISP","un",None,None),
 ("zinco","Sulfato de zinco 4 mg/mL (zinco elementar)",r"sulfato de zinco",r"^SULFATO DE ZINCO",r"SOL OR|XPE","emb",None,None),
 ("doxilamina","Doxilamina + piridoxina",r"doxilamina",r"^SUCCINATO DE DOXILAMINA;CLORIDRATO DE PIRIDOXINA$|^CLORIDRATO DE PIRIDOXINA;SUCCINATO DE DOXILAMINA$",r".","un",None,None),
 ("lreuteri","Lactobacillus reuteri DSM 17938",r"reuteri",r"REUTERI",r".","emb",None,None),
 # urologia / gineco
 ("tansulosina","Tansulosina 0,4 mg",r"tansulosina",r"^CLORIDRATO DE TANSULOSINA$",r"^0,4 MG","un",None,None),
 ("mirabegrona","Mirabegrona 25 mg",r"mirabegrona",r"MIRABEGRONA",r"^25 MG","un",None,None),
 ("sildenafila","Sildenafila 50 mg",r"sildenafila 50",r"^CITRATO DE SILDENAFILA$",r"^50 MG COM","un",None,None),
 ("tadalafila","Tadalafila 5 mg",r"tadalafila 5",r"^TADALAFILA$",r"^5 MG COM","un",None,None),
 ("tranexamico","Ácido tranexâmico 250 mg",r"acido tranexamico 250",r"TRANEX",r"^250 MG COM","un",None,None),
 ("drsp_ee","Drospirenona 3 mg + etinilestradiol 0,02 mg",r"drospirenona",r"DROSPIRENONA.*ETINILESTRADIOL|ETINILESTRADIOL.*DROSPIRENONA|^CLATRATO DE ETINILESTRADIOL",r"^3 MG \+ 0,02 MG","un",None,None),
 ("dienogeste","Dienogeste 2 mg",r"dienogeste",r"^DIENOGESTE$",r"^2 MG COM","un",None,None),
 ("diu_lng","DIU liberador de levonorgestrel 52 mg",r"diu.*levonorgestrel|levonorgestrel 52",r"LEVONORGESTREL",r"^52 MG DIU","emb",None,None),
 ("implante","Implante de etonogestrel 68 mg",r"etonogestrel",r"^ETONOGESTREL$",r"IMPLANTE","emb",None,None),
 ("estriol","Estriol 1 mg/g creme vaginal",r"estriol",r"^ESTRIOL$",r"CREM VAG","emb",None,None),
 ("estradiol_gel","Estradiol gel",r"estradiol gel",r"^ESTRADIOL",r"GEL","emb",None,None),
 ("progesterona","Progesterona micronizada 100 mg",r"progesterona micronizada",r"^PROGESTERONA$",r"^100 MG CAP","un",None,None),
 ("testosterona","Cipionato de testosterona 200 mg/2 mL",r"cipionato de testosterona",r"^CIPIONATO DE TESTOSTERONA$",r"100 MG/ML","dose",None,None),
 # cardiometabólico
 ("dapagliflozina","Dapagliflozina 10 mg",r"dapagliflozina",r"^DAPAGLIFLOZINA$",r"^10 MG COM","un",None,None),
 ("semaglutida","Semaglutida injetável (DM2)",r"semaglutida 0.25",r"^SEMAGLUTIDA$",r"1,34 MG/ML SOL INJ","emb",None,None),
 ("semaglutida_ob","Semaglutida 2,4 mg (obesidade)",r"semaglutida \(apresentacao para obesidade\)",r"^SEMAGLUTIDA$",r"3,2 MG/ML","emb",None,"Preço da caneta de 2,4 mg (4 doses). Canetas de 0,25, 0,5 e 1 mg: mesmo teto do Ozempic; 1,7 mg: ver tabela do item de agonistas de GLP-1."),
 ("semaglutida_oral","Semaglutida oral (Rybelsus)",r"semaglutida oral",r"^SEMAGLUTIDA$",r"COM OR","un",None,None),
 ("liraglutida","Liraglutida 6 mg/mL (caneta de 3 mL)",r"liraglutida",r"^LIRAGLUTIDA$",r"^6 MG/ML SOL INJ","emb",None,"Preço por caneta (18 mg). Saxenda e Olire: controle de peso; Victoza e Lirux: DM2."),
 ("dulaglutida","Dulaglutida (Trulicity)",r"dulaglutida",r"^DULAGLUTIDA$",r"SOL INJ","dose",None,None),
 ("tirzepatida","Tirzepatida",r"tirzepatida",r"^TIRZEPATIDA$",r"^5 MG/ML SOL INJ","dose",None,None),
 ("orlistate","Orlistate 120 mg",r"orlistate",r"^ORLISTATE?$",r"^120 MG","un",None,None),
 ("atorva40","Atorvastatina 40 mg",r"atorvastatina 40",r"^ATORVASTATINA C[AÁ]LCICA$",r"^40 MG COM","un",None,None),
 ("atorva80","Atorvastatina 80 mg",r"atorvastatina 80",r"^ATORVASTATINA C[AÁ]LCICA$",r"^80 MG COM","un",None,None),
 ("ezetimiba","Ezetimiba 10 mg",r"ezetimiba 10",r"^EZETIMIBA$",r"^10 MG COM","un",None,None),
 ("finerenona","Finerenona 10 mg",r"finerenona",r"^FINERENONA$",r"^10 MG","un",None,None),
 ("rivaroxabana","Rivaroxabana 15 mg",r"rivaroxabana 15",r"^RIVAROXABANA$",r"^15 MG COM","un",None,None),
 ("apixabana","Apixabana 5 mg",r"apixabana 5",r"^APIXABANA$",r"^5 MG COM","un",None,None),
 ("nifedipino_ret","Nifedipino retard 20 mg",r"nifedipino retard",r"^NIFEDIPINO$",r"^20 MG.*(RETARD|LIB)","un",None,None),
 ("losar_anlo","Losartana + anlodipino 50 + 5 mg (comprimido único)",r"losartana \+ anlodipino 50 \+ 5",r"ANLODIPINO.*LOSARTANA|LOSARTANA.*ANLODIPINO",r"^\(?(5(,0)? ?(MG)? ?\+ ?50(,0)?|50(,0)? ?(MG)? ?\+ ?5(,0)?)\)? ?MG","un",None,None),
 ("gliclazida_mr","Gliclazida MR 30 mg",r"gliclazida mr 30",r"^GLICLAZIDA$",r"^30 MG COM.*(LIB|MR)","un",None,None),
 ("tiamazol","Tiamazol 10 mg",r"tiamazol 10",r"^TIAMAZOL$",r"^10 MG COM","un",None,None),
 ("colecalciferol50k","Colecalciferol 50.000 UI",r"colecalciferol.*50.000",r"^COLECALCIFEROL$",r"^50\.?000 UI (CAP|COM)","un",None,None),
 ("colecalciferol7k","Colecalciferol 7.000 UI",r"colecalciferol 7.000",r"^COLECALCIFEROL$",r"^7\.?000 UI (CAP|COM)","un",None,None),
 ("colecalciferol_gts","Colecalciferol (vitamina D3) gotas",r"colecalciferol \(vitamina d3\) gotas",r"^COLECALCIFEROL$",r"SOL OR.*GOT|GOT","np",None,None),
 ("cianocobalamina_oral","Cianocobalamina 1.000 mcg oral",r"cianocobalamina 1.000",r"^CIANOCOBALAMINA$",r"^1\.?000 MCG (COM|CAP)|^1 MG (COM|CAP)","un",None,None),
]

def num(v):
    try: return float(v.replace('.','').replace(',','.'))
    except: return None
def cont(a):
    m = re.search(r'C[TX] (\d+) (ENV|SACH|FA|SER|AMP|FR|CAR|BG|TB|STR|BL)', a)
    return int(m.group(1)) if m else 1
def units(a):
    m = re.findall(r' X (\d+)(?![,.\d])(?! ?(ML|G|MG|ACION|DOSE))', a)
    return int(m[-1][0]) if m else 1
def doses(a):
    m = re.search(r'(\d+) ?DOSES|X (\d+) ACION', a)
    if m and int(m.group(1) or m.group(2)): return int(m.group(1) or m.group(2))
    return cont(a) if cont(a)>1 else units(a)
def emb(a):
    m = re.search(r'X (\d+(?:,\d+)?) ?(G|ML)\b', a)
    return (m.group(1)+(' g' if m.group(2)=='G' else ' mL')) if m else ''
out = []; rep = []
for k, rot, mt, sub, apr, un, excl, nota in T:
    s = re.compile(sub, re.I); a = re.compile(apr, re.I); e = re.compile(excl, re.I) if excl else None
    r = [x for x in rows if s.search(x[0]) and a.search(re.sub(r'\s+',' ',x[9]).strip()) and x[65] != 'Sim' and 'EMB HOSP' not in x[9] and not (e and e.search(x[0]+' '+x[8]+' '+x[9]))]
    prods = {}
    for x in r:
        tipo = x[11].strip()
        nome = re.sub(r'\s+',' ',x[8]).strip().replace('®','')
        gen = tipo == 'Genérico'
        key = 'GENÉRICO' if gen else nome
        p = num(x[41] if gen else x[47])
        if p is None: continue
        a9 = re.sub(r'\s+',' ',x[9]).strip()
        e = ''
        if un == 'un': p = p/units(a9)
        elif un == 'dose': p = p/doses(a9)
        elif un == 'np': p = 0.0
        else:
            m = re.search(r'C[TX] (\d+) (SACH|ENV)', a9)
            if m: e = m.group(1) + (' sachês' if m.group(2)=='SACH' else ' envelopes')
            else: p = p/cont(a9); e = emb(a9)
        d = prods.setdefault(key, {'t':tipo,'p':[],'com':False,'labs':set()})
        d['p'].append((p,e)); d['labs'].add(x[2].strip()); d['com'] |= (x[70] == 'Sim')
    lst = []
    for nome, d in prods.items():
        pm = min(d['p'])
        it = {'n': nome.title() if nome != 'GENÉRICO' else 'genérico', 't': d['t'], 'p': round(pm[0], 2) if un!='np' else None, 'c': d['com']}
        if pm[1]: it['e'] = pm[1]
        if nome == 'GENÉRICO': it['l'] = len(d['labs'])
        lst.append(it)
    ordem = {'Genérico':0,'Novo':1,'Biológico':1,'Similar':2,'Específico':2}
    lst.sort(key=lambda z:(ordem.get(z['t'],3), not z['c'], z['p']))
    UL = {'bud_form':'inalação','bdp_form':'inalação','lama_laba':'inalação','tirzepatida':'aplicação','dulaglutida':'caneta','testosterona':'ampola'}
    ent = {'k':k,'rot':rot,'m':mt,'u':('un' if un=='un' else UL.get(k,'') if un=='dose' else un),'it':lst}
    if nota: ent['nota'] = nota
    out.append(ent)
    rep.append(f"{k:20s} {len(lst):2d} " + "; ".join(f"{z['n']}({z['t'][:3]}{'' if z['c'] else '†'}) {z['p']}" for z in lst[:12]))
print("\n".join(rep))
json.dump(out, open(sys.argv[2],'w'), ensure_ascii=False)
