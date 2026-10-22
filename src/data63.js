// ───────────── data63.js – v50: troca da insulina NPH pela glargina com a NT DAPS Betim nº 14/2026 (pasta DIA A DIA, 22/10/2026).
// Fonte municipal lida na íntegra: SMS Betim/DAPS – Nota Técnica nº 14/2026 (SEI 4133.01.0031439/2026-74, assinada em 19–20/10/2026):
// liberação escalonada da glargina 100 UI/mL refil 3 mL + caneta reutilizável; fase 1 vigente; marcadores de risco; distribuição, prescrição,
// dispensação, conversão (cita a NTC 169/2026, Quadro 3), titulação, seguimento e armazenamento.
// Evidência: Cochrane 2020 (Semlitsch, CD005613.pub4), conferida no PubMed nesta sessão.
Object.assign(FONTES, {
  betim_nt14_2026: {s: "SMS Betim – NT DAPS nº 14/2026 (glargina na APS)", t: "Secretaria Municipal de Saúde de Betim, Diretoria de Atenção Primária (DAPS). Nota Técnica nº 14/2026 – liberação escalonada da insulina glargina 100 UI/mL (refil 3 mL) e da caneta reutilizável na APS: fase 1 vigente (DM1 de 2 a < 18 anos fora do CEAF; ≥ 80 anos com DM1 ou DM2, inclusive novos diagnósticos); fases 2 a 5 (≥ 70 anos) aguardam liberação; marcadores de risco da fase 3; prescrição (dose, horário, refis para até 180 dias, caneta e agulhas); refis/mês = (dose × 30) ÷ 300; dispensação só na UBS de referência, 30 dias por vez; registro no SIGSS/SIGAF; conversão da NTC 169/2026; seguimento (contato na 1ª semana, consulta em até 30 dias, HbA1c ≥ 3 meses); armazenamento; perda da caneta com boletim de ocorrência. SEI 4133.01.0031439/2026-74, assinada em 19–20/10/2026 (Drive da usuária, pasta DIA A DIA).", f: "F", url: ""},
  cochrane_glarg2020: {s: "Cochrane 2020 – análogos de longa ação × NPH no DM2", t: "Semlitsch T, et al. (Ultra-)long-acting insulin analogues versus NPH insulin (human isophane insulin) for adults with type 2 diabetes mellitus. Cochrane Database Syst Rev. 2020;11:CD005613 (RS de 24 ECR): HbA1c semelhante; glargina reduz hipoglicemia confirmada e noturna; hipoglicemia grave RR 0,68 (IC95% 0,46–1,01; RAR −1,2%; certeza muito baixa); desfechos como morte e complicações insuficientes ou sem diferença; metas glicêmicas dos estudos mais rígidas que as atuais. doi:10.1002/14651858.CD005613.pub4; PMID 33166419.", f: "F", url: "https://doi.org/10.1002/14651858.CD005613.pub4"}
});

const BETIM_FASE1 = "em Betim, por fases – hoje só a fase 1: ≥ 80 anos com DM1 ou DM2 e DM1 de 2 a < 18 anos fora do CEAF (NT DAPS 14/2026)";

// troca de texto em todo o item (strings aninhadas)
const TROCA63 = (o, de, para) => {
  if (typeof o === "string") return o.split(de).join(para);
  if (Array.isArray(o)) return o.map(x => TROCA63(x, de, para));
  if (o && typeof o === "object" && typeof o !== "function"){ for (const k of Object.keys(o)) if (typeof o[k] !== "function") o[k] = TROCA63(o[k], de, para); return o; }
  return o;
};

CONDICOES.push({
  id: "cr-glargina", modulo: "cr", nome: "Troca da insulina NPH pela glargina (NTC 169/2026 e NT Betim 14/2026)", sistema: "DM", risco: "alto",
  ciap: "T90", cid: "E11.9 / E10.9 / Z79.4",
  tags: "glargina NPH troca transição substituição caneta reutilizável refil tubete escorva teste de fluxo idoso 80 anos 70 anos DM1 criança adolescente fase prioridade Betim hipoglicemia noturna conversão 80% insulina basal CEAF",
  alerta: "Betim (NT DAPS 14/2026): só a FASE 1 está liberada – pessoas ≥ 80 anos com DM1 ou DM2 (inclusive novos diagnósticos) e DM1 de 2 a < 18 anos que não recebem pelo CEAF. As fases 2 a 5 (≥ 70 anos) aguardam liberação oficial. Confirmar caneta e refis com a farmácia ANTES de prescrever.",
  S: `Pessoa com DM___ há ___ anos, ___ anos de idade. Insulina atual: NPH ___ UI manhã / ___ UI almoço / ___ UI noite (total ___ UI/dia = ___ UI/kg); regular ___.
Recebe insulina pelo CEAF (Farmácia de Minas): ___ (não).
Hipoglicemias nos últimos 12 meses: ___; grave ou noturna (precisou de terceiros, SAMU, UPA ou internação): ___.
Glicemias de jejum ___ | outros horários ___.
Mora sozinho ou passa a noite sem alguém que reconheça hipoglicemia: ___. Depende de outra pessoa para aplicar: ___. Visão/destreza para preparar a dose: ___. Refeições regulares/segurança alimentar: ___.`,
  O: `Peso ___ kg | PA ___ mmHg | Glicemia capilar ___ mg/dL.
HbA1c ___% (___) | TFG ___ mL/min/1,73 m².
Locais de aplicação: rodízio ___; lipo-hipertrofia ___ (ausente).`,
  A: "DM___ em insulinoterapia, elegível à glargina na APS de Betim – fase ___ (NT DAPS 14/2026); caneta e refis confirmados com a farmácia da UBS.",
  P: `- Troca NPH → insulina glargina 100 UI/mL (refil 3 mL): ___ UI 1 vez ao dia, às ___ h (NPH 1×/dia: mesma dose e horário; NPH ≥ 2×/dia: 80% da dose total, no horário da maior dose; idoso com hipoglicemias frequentes: reduzir 25–30%). NPH suspensa a partir do início da glargina.
- Insulina regular, se em uso: dose mantida (não muda pela troca).
- Titulação: 1 a 2 UI a cada 3 dias pela glicemia de jejum até a meta individualizada (___). Se basal > 0,5 UI/kg/dia (DM2) ou > 50% da dose total (DM1), ou HbA1c fora da meta com jejum no alvo: reavaliar o esquema, sem subir a basal.
- Prescritos: refis para ___ dias (___ por mês), 1 caneta reutilizável e agulhas para caneta (1 por dia). Dispensação mensal na farmácia desta UBS; registro no SIGSS/SIGAF; incluído na lista nominal.
- Demonstrados montagem do refil, teste de fluxo (escorva), aplicação e conservação; orientada hipoglicemia (regra dos 15) com família/cuidador; caneta da NPH guardada, sem uso com a glargina.
- Glicemia de jejum diária; tiras de reserva para suspeita de hipoglicemia noturna (2–4 h).
- Contato da equipe na 1ª semana; consulta em até 30 dias; HbA1c em ≥ 3 meses após o ajuste. Compartilhado com o farmacêutico clínico da eMulti: ___.`,
  calcPac: {
    titulo: "Converter a NPH em glargina",
    campos: [["total", "Dose total de NPH por dia (UI)"], ["vezes", "Aplicações de NPH por dia"]],
    nota: "Conversão da NTC 169/2026 (Quadro 3), reproduzida na NT DAPS Betim 14/2026: NPH 1 vez ao dia → mesma dose e horário; 2 ou mais vezes → 80% da dose total, no horário da maior dose. Idoso com hipoglicemias frequentes: redução de 25% a 30%, a critério clínico. Refis por mês = (dose diária × 30) ÷ 300, arredondado para cima (NT 14/2026). Refis para 180 dias: 6 vezes o mensal, com no mínimo 7 (o refil aberto vale 28 dias, mesmo que sobre insulina).",
    f: ({total, vezes}) => {
      const dose = vezes <= 1 ? Math.round(total) : Math.round(total * 0.8);
      const h1 = Math.round(total * 0.70), h2 = Math.round(total * 0.75);
      const mes = Math.max(1, Math.ceil(dose * 30 / 300)), r180 = Math.max(mes * 6, 7);
      return {
        dose: String(dose), refis: String(mes), refis180: String(r180),
        _resumo: `${vezes <= 1 ? `NPH 1 vez ao dia: glargina na mesma dose e no mesmo horário = ${dose} UI.` : `NPH ${vezes} vezes ao dia (${total} UI): 80% = ${dose} UI de glargina 1 vez ao dia, no horário da maior dose de NPH.`} Se hipoglicemias frequentes no idoso: ${h1} a ${h2} UI. Refis: ${mes} por mês (${r180} para 180 dias), calculados sobre ${dose} UI.`
      };
    }
  },
  rx: [{
    trilha: "ambos",
    titulo: "Insulina glargina – fase 1 de Betim (refil + caneta)",
    texto: `USO SUBCUTÂNEO
1. Insulina glargina 100 UI/mL, refil 3 mL ______ {{refis180}} refis
   Aplicar {{dose}} UI 1 vez ao dia, sempre às ___ horas.
   ({{refis}} refis por mês; dispensar para 30 dias na farmácia da UBS de referência.)
2. Caneta reutilizável para insulina glargina ______ 1 unidade
3. Agulha para caneta de insulina ______ 180 unidades
   Usar 1 agulha nova por dia.

Suspender a insulina NPH a partir do primeiro dia da glargina. Manter a insulina regular na mesma dose, se em uso.
Ajuste: 1 a 2 UI a cada 3 dias pela glicemia de jejum, até a meta combinada.`,
    dose: "F",
    nota: "Itens da prescrição (dose em UI, horário fixo, refis para até 180 dias ou até o retorno, caneta reutilizável e agulhas), cálculo de refis e dispensação mensal só na UBS de referência: NT DAPS Betim 14/2026 [F]. Conversão e titulação: NTC 169/2026, Quadro 3, reproduzida na NT 14 [F]. 1 agulha por dia por tipo de insulina: NTC 169/2026 [F]. Mínimo de 7 refis em 180 dias para doses baixas (refil vence em 28 dias): cálculo a partir da validade do refil aberto [I]. Use o campo 'Converter a NPH em glargina' para preencher dose e refis. Início sem insulina prévia (novo diagnóstico na fase 1): ver 'Insulinização no DM2'; DM1 na criança: dose com a atenção especializada."
  }],
  orient: `## Por que trocar a insulina
- A insulina NPH está em falta no mundo, e o Ministério da Saúde está trocando por **insulina glargina**. Em Betim, a troca começa pelas pessoas com mais risco de glicose baixa.
- A glargina age o dia todo com **1 aplicação por dia** e causa menos glicose baixa, principalmente durante a noite. Ela não é "mais forte": a dose foi calculada a partir da sua NPH.

## Sua nova dose
- Aplique **{{dose}} unidades de glargina, 1 vez ao dia**, sempre no mesmo horário combinado na consulta.
- **Pare a NPH** no dia em que começar a glargina. Não use as duas.
- Se você também usa insulina regular (a que se aplica antes das refeições), **continue com a mesma dose**.
- A equipe vai ajustar a dose aos poucos, pela glicose de jejum. Não mude a dose por conta própria, a não ser como combinado.

## Como usar a caneta
- Lave as mãos. Coloque o refil na caneta como foi mostrado na farmácia.
- Use **uma agulha nova por dia**.
- Antes de cada aplicação, faça o **teste de fluxo** (escorva) como foi ensinado: com a agulha para cima, aperte até sair uma gotinha de insulina.
- Gire o seletor até a sua dose, aplique na barriga, na coxa ou na parte de trás do braço e aperte o botão até o fim. Mantenha a agulha na pele por alguns segundos, como foi ensinado.
- **Troque o local** de aplicação a cada dia.
- A caneta é só sua: não empreste e não use a de outra pessoa.
- Guarde em casa a caneta antiga da NPH, mas **não use com a glargina**.

## Como guardar
- Refis fechados (reserva): **na geladeira, na prateleira da metade de baixo, longe da parede do fundo**. Não guarde na porta nem na gaveta de frios. **Nunca congele.**
- O refil em uso fica **dentro da caneta, fora da geladeira** (em lugar com até 30 °C), por no máximo **28 dias**. **Anote a data em que abriu.** Depois de 28 dias, jogue fora, mesmo que sobre insulina.
- Perdeu a caneta? Avise a farmácia da unidade; é preciso apresentar boletim de ocorrência.

## Medir a glicose
- Meça a glicose **em jejum todos os dias** e anote.
- Se achar que teve glicose baixa durante a noite, ou se a equipe pedir, meça também **entre 2 e 4 horas da madrugada**.
- Leve as anotações em todas as consultas.

## Glicose baixa (abaixo de 70): regra dos 15
- Tome **1 colher de sopa de açúcar dissolvida em água**, espere **15 minutos** e meça de novo.
- Se continuar abaixo de 70, repita.
- Ensine a família ou quem mora com você a reconhecer e tratar a glicose baixa.

## Retirada e retorno
- Os refis e as agulhas são entregues **só na farmácia da sua UBS**, para 30 dias de cada vez.
- A equipe vai entrar em contato **na primeira semana** para saber como você está.
- **Volte para consulta em até 30 dias** com a glicose anotada.`,
  alarme: ["Glicose abaixo de 70 que não melhora depois de 2 tentativas com açúcar", "Confusão, desmaio ou convulsão (não dê nada pela boca: chame o SAMU 192)", "Glicose acima de 300 com vômitos, muita sede ou sonolência", "Glicose baixa à noite que se repete (pesadelos, suor ao acordar)"],
  encaminhar: "Hipoglicemia com perda de consciência ou que não responde → urgência (SAMU 192). DM1 na criança/adolescente: dose e esquema com a atenção especializada. Necessidade de basal-bolus pleno, hipoglicemias graves recorrentes ou insulinoterapia complexa → endocrinologia (compartilhar o cuidado). Início ou transição: pode ser compartilhado com o farmacêutico clínico da eMulti.",
  sus: {
    nacional: "NTC 169/2026: insulina glargina 100 UI/mL no Componente Básico para DM1 de 2 a < 18 anos e pessoas ≥ 70 anos com DM1 ou DM2, incluindo novos diagnósticos; quem recebe pelo CEAF permanece nas regras do CEAF; implantação gradual conforme organização local; caneta reutilizável, tubetes e agulhas por pessoa.",
    betim: "NT DAPS 14/2026 (19–20/10/2026): fase 1 vigente – DM1 de 2 a < 18 anos fora do CEAF e ≥ 80 anos com DM1 ou DM2 (inclusive novos diagnósticos e quem completar 80 anos); quem completar 18 anos mantém a glargina pela APS; quem já recebe pelo CEAF continua renovando no CEAF. Fases 2 a 5 aguardam liberação. Cada UBS recebe 1 caneta por pessoa da fase 1 levantada + reserva para quem vai iniciar insulina. Confirmar estoque com a farmácia antes de prescrever; dispensação só na UBS de referência, 30 dias por vez; registro no SIGSS e SIGAF; lista nominal na farmácia. Eventos adversos no VigiMed; queixa técnica da caneta/refil no eNotivisa (caneta defeituosa recolhida no estojo original). SES-MG: NT nº 10/SES/SUBASS-SAF-DPAF/2026 citada pela NT municipal (não lida)."
  },
  evid: {
    resumo: "A troca é decisão de abastecimento (restrição global de insulina humana) do MS, implantada em Betim por fases segundo o risco de hipoglicemia. Na RS Cochrane de 2020 (24 ECR, DM2), glargina e NPH baixam a HbA1c de forma semelhante; a glargina reduz hipoglicemia confirmada e noturna; para hipoglicemia grave, RR 0,68 (IC95% 0,46–1,01; redução absoluta de 1,2%; certeza muito baixa). Faltam dados de morte e complicações. Os estudos usaram metas mais rígidas que as atuais para idosos, o que pode superestimar o benefício.",
    certeza: "Normativa (NTC 169/2026; NT Betim 14/2026). Comparação glargina × NPH: baixa a muito baixa para hipoglicemia grave (GRADE, Cochrane 2020).",
    fontes: ["ntc169_2026", "betim_nt14_2026", "cochrane_glarg2020", "betim_dm2026", "pcdt_dm2", "remume"]
  },
  mudancas: ["v50 (22/10/2026): item novo – troca NPH → glargina com a NT DAPS Betim 14/2026 (fases, marcadores de risco, prescrição, dispensação, seguimento, armazenamento) e a NTC 169/2026; campo para converter a dose e calcular os refis."],
  nv: [
    "Datas de liberação das fases 2 a 5 em Betim: a NT diz que serão comunicadas oficialmente – conferir antes de incluir pessoas de 70 a 79 anos.",
    "NT SES-MG nº 10/SES/SUBASS-SAF-DPAF/2026 (citada pela NT municipal): não lida.",
    "Número de unidades do teste de fluxo (escorva) e tempo de espera após a aplicação dependem do fabricante da caneta: seguir a instrução da caneta entregue."
  ],
  guia: {
    resumo: "Em Betim a glargina chega **por fases** (NT DAPS 14/2026). **Hoje só a fase 1**: **≥ 80 anos** com DM1 ou DM2 e **DM1 de 2 a < 18 anos** fora do CEAF. Converta **1:1** (NPH 1×/dia) ou **80% da dose total** (NPH ≥ 2×/dia), 1 vez ao dia no horário da maior dose; titule **1–2 UI a cada 3 dias** pelo jejum. Confirme estoque antes de prescrever.",
    secoes: [
      {t: "Quem troca agora (Betim)", b: [
        {tab: {h: ["Fase", "Público", "Situação"], r: [
          ["1", "DM1 de 2 a < 18 anos que não recebe pelo CEAF; ≥ 80 anos com DM1 ou DM2 (inclui novos diagnósticos e quem completar 80 anos)", "**Vigente** [F]"],
          ["2", "≥ 70 anos com DM1; ≥ 70 anos com hipoglicemia grave ou noturna nos últimos 12 meses (precisou de terceiros, SAMU, UPA ou internação); elegíveis que vão iniciar insulina agora (já começam na glargina)", "Aguardar liberação [F]"],
          ["3", "≥ 70 anos com DM2 em insulina e ≥ 1 marcador de risco (entra antes quem soma mais marcadores)", "Aguardar liberação [F]"],
          ["4", "≥ 70 anos em insulina, sem marcador de risco, com HbA1c acima da meta individualizada", "Aguardar liberação [F]"],
          ["5", "Demais pessoas ≥ 70 anos em insulina, estáveis e sem hipoglicemia", "Aguardar liberação [F]"]
        ]}, nota: "NT DAPS Betim 14/2026, item 3 [F]. Quem completar 18 anos depois do início mantém a glargina pela APS; quem já recebe pelo CEAF continua no CEAF [F]. A NTC 169/2026 define como elegíveis todas as pessoas ≥ 70 anos – a ordem por fases é decisão municipal pela quantidade de canetas [F]."},
        {ul: [
          "**Marcadores de risco (fase 3), clínicos:** DRC com TFG < 45; ida à urgência ou internação por qualquer causa no último ano; idoso comprometido ou muito comprometido (SBD 2026: declínio cognitivo, demência, fragilidade ou múltiplas comorbidades); basal > 0,5 UI/kg/dia; HbA1c < 7% em idoso comprometido (tratamento excessivo) [F].",
          "**Funcionais e sociais (mesmo peso):** mora sozinho ou passa a noite sem alguém capaz de reconhecer e tratar hipoglicemia; depende de outra pessoa para aplicar; baixa visão ou limitação motora para preparar a dose na seringa; insegurança alimentar ou refeições irregulares [F].",
          "**Já anote os marcadores no prontuário** dos idosos de 70 a 79 anos em insulina: a ordem das próximas fases depende deles [I]."
        ]},
        {alerta: "70 a 79 anos ainda não estão liberados em Betim, inclusive quem vai iniciar insulina agora (isso é fase 2): manter ou iniciar NPH até a comunicação oficial da próxima fase [F]."},
        {ref: ["betim_nt14_2026", "ntc169_2026"]}
      ]},
      {t: "Conversão e ajuste", b: [
        {tab: {h: ["Uso atual de NPH", "Glargina", "Horário"], r: [
          ["1 vez ao dia", "Mesma dose [F]", "Mesmo horário da NPH [F]"],
          ["2 ou mais vezes ao dia", "80% da dose total diária de NPH [F]", "Horário da maior dose de NPH [F]"],
          ["Idoso com hipoglicemias frequentes", "Reduzir 25% a 30%, a critério clínico [F]", "—"]
        ]}, nota: "NTC 169/2026, Quadro 3, reproduzido na NT DAPS 14/2026 [F]. Exemplo: NPH 20 UI de manhã + 10 UI à noite = 30 UI → 24 UI de glargina 1 vez ao dia pela manhã [F]."},
        {ul: [
          "**Titular** 1 a 2 UI a cada 3 dias pela glicemia de jejum, até a meta individualizada (SBD) [F].",
          "**Não subir a basal** se passar de 0,5 UI/kg/dia (DM2) ou de 50% da dose total (DM1), ou se a HbA1c estiver fora da meta com o jejum no alvo: reavaliar o esquema (por exemplo, insulina prandial) para evitar a superbasalização [F].",
          "**Insulina regular:** não mudar a dose só por causa da troca [F].",
          "**Tiras:** priorizar a glicemia de jejum e reservar algumas para suspeita de hipoglicemia noturna (2–4 h); curva em horários alternados ao longo de semanas ajuda a decidir sobre insulina prandial [F].",
          "**Seguimento mínimo:** contato na 1ª semana, consulta em até 30 dias e HbA1c em no mínimo 3 meses após o ajuste; orientar hipoglicemia (regra dos 15) com família ou cuidador [F]."
        ]},
        {perola: {t: "O ganho é menos hipoglicemia, não HbA1c", x: "Na RS Cochrane 2020 (DM2), a HbA1c foi semelhante; a glargina reduziu hipoglicemia confirmada e noturna; hipoglicemia grave: redução absoluta de 1,2% (IC95% −2,0 a 0), certeza muito baixa. Por isso a prioridade vai para quem mais sofre com hipoglicemia (idosos frágeis, crianças com DM1) [F].", d: "menos hipoglicemia noturna nos mais vulneráveis.", l: "F"}},
        {ref: ["ntc169_2026", "betim_nt14_2026", "cochrane_glarg2020"]}
      ]},
      {t: "Prescrição, dispensação e insumos", b: [
        {ul: [
          "**Antes de prescrever:** confirmar com a farmácia a disponibilidade de caneta e refis [F].",
          "**A receita deve ter:** insulina glargina 100 UI/mL refil 3 mL, dose em UI e horário fixo, quantidade de refis para até 180 dias (ou até o retorno, se a dose vai ser ajustada), caneta reutilizável e agulhas para caneta [F].",
          "**Refis por mês** = (dose diária × 30) ÷ 300, arredondado para cima. Ex.: 24 UI/dia → 2,4 → 3 refis/mês [F]. Refil aberto vale 28 dias, mesmo que sobre insulina [F].",
          "**Dispensação:** só na UBS de referência; 1 caneta e refis para 30 dias. Não precisa recolher a caneta da NPH: orientar a guardar e não usar com a glargina [F].",
          "**Registro:** SIGSS e SIGAF (assistência farmacêutica); lista nominal com data de início e dose [F].",
          "**Orientação:** profissional capacitado demonstra a caneta, o refil e o teste de fluxo (escorva) [F].",
          "**Armazenamento:** na UBS, refis fechados a 2–8 °C com registro diário de temperatura; em casa, reserva na geladeira, prateleira da metade inferior, longe da parede do fundo, nunca na porta nem na gaveta de frios, nunca congelar; refil em uso na caneta até 30 °C por no máximo 28 dias, com data de abertura anotada; agulha trocada todo dia [F].",
          "**Caneta:** uma por pessoa, uso individual, válida por 3 anos; troca só por defeito (recolhida no estojo original, com eNotivisa); perda ou extravio: comunicar à farmácia com boletim de ocorrência – reposição depende da DAFI [F].",
          "**Notificar:** evento adverso no VigiMed; queixa técnica da caneta ou do refil no eNotivisa [F].",
          "**Cuidado compartilhado:** início ou transição podem ser compartilhados com o farmacêutico clínico da eMulti, que acompanha de forma longitudinal [F]."
        ]},
        {ref: ["betim_nt14_2026", "ntc169_2026"]}
      ]}
    ]
  }
});

(() => {
  const get = id => CONDICOES.find(x => x.id === id);

  const i = get("cr-dm2-insulina");
  if (i){
    const sg = i.guia && i.guia.secoes.find(s => /Glargina na APS/.test(s.t));
    if (sg){
      sg.t = "Glargina na APS (NTC 169/2026 e NT Betim 14/2026)";
      const nb = sg.b.find(b => b.nota && !b.tab && !b.fluxo && /Betim: a troca será por grupos prioritários/.test(b.nota));
      if (nb) nb.nota = "**Betim: troca por fases (NT DAPS 14/2026, 19–20/10/2026).** **Fase 1, vigente:** ≥ 80 anos com DM1 ou DM2 (inclusive novos diagnósticos) e DM1 de 2 a < 18 anos fora do CEAF. **Fases 2 a 5 (≥ 70 anos)**, inclusive quem vai iniciar insulina agora, aguardam liberação oficial [F]. Passo a passo, marcadores de risco, prescrição e dispensação: item **'Troca da insulina NPH pela glargina'** [F].";
      const f = sg.b.find(b => b.fluxo);
      if (f){ f.fluxo[0].t = "Na fase liberada em Betim (hoje: ≥ 80 anos ou DM1 de 2 a < 18 anos fora do CEAF) e com caneta e refis confirmados na farmácia?"; f.nota = "NTC 169/2026, NT DAPS Betim 14/2026 e PCDT DM2 2026 [F]."; }
      const r = sg.b.find(b => b.ref); if (r) r.ref = [...new Set([...r.ref.filter(x => x !== "betim_glargina_prior"), "betim_nt14_2026", "cochrane_glarg2020"])];
    }
    const rg = (i.rx || []).find(r => /glargina/i.test(r.titulo));
    if (rg){
      rg.titulo = "Insulina glargina – fase liberada em Betim (NT 14/2026)";
      rg.texto = rg.texto.replace("1. Insulina glargina 100 UI/mL, tubete 3 mL ______ ___ tubetes + caneta reutilizável + agulhas 4 mm\n   Aplicar ___ UI 1 vez ao dia, sempre no mesmo horário.", "1. Insulina glargina 100 UI/mL, refil 3 mL ______ ___ refis (para até 180 dias)\n   Aplicar ___ UI 1 vez ao dia, sempre no mesmo horário.\n2. Caneta reutilizável para insulina glargina ______ 1 unidade\n3. Agulha para caneta de insulina ______ ___ unidades (1 por dia)");
      rg.nota = rg.nota.replace("Não iniciar sem estoque garantido nem fora do grupo prioritário de Betim.", "Não iniciar sem estoque confirmado nem fora da fase liberada em Betim (NT DAPS 14/2026: hoje ≥ 80 anos e DM1 de 2 a < 18 anos fora do CEAF) [F]. Refis/mês = (dose × 30) ÷ 300 [F]. Conversão automática no item 'Troca da insulina NPH pela glargina'.");
    }
    i.P = i.P.replace("- ≥ 70 anos: glargina na APS (NT 169/2026), se houver estoque.", "- Glargina na APS: elegíveis da NTC 169/2026 (≥ 70 anos; DM1 de 2 a < 18 anos), " + BETIM_FASE1 + "; só com caneta e refis confirmados.");
    i.orient = i.orient.replace("- **Frascos fechados: na geladeira** (na porta ou na gaveta de verduras), **nunca no congelador**.", "- **Frascos ou refis fechados: na geladeira**, na prateleira da metade de baixo, longe da parede do fundo. Não guarde na porta nem na gaveta de frios. **Nunca no congelador.**");
    i.sus.betim = "Glargina na APS por fases (NT DAPS 14/2026): fase 1 vigente – ≥ 80 anos com DM1 ou DM2 e DM1 de 2 a < 18 anos fora do CEAF; fases 2 a 5 (≥ 70 anos) aguardam liberação. Estoque confirmado com a farmácia antes de prescrever; dispensação mensal só na UBS de referência; registro no SIGSS/SIGAF. 100 tiras/90 dias (curva escalonada); farmácia clínica da eMulti para início/transição, hipoglicemias de repetição e baixa adesão (DAPS, 2026). REMUME Betim: insulina NPH e regular (frasco e caneta 3 mL); glargina consta da lista (uso conforme protocolo). Insumos conforme protocolo municipal.";
    i.nv = (i.nv || []).filter(x => !/Nota técnica municipal de Betim sobre a glargina/.test(x));
    i.nv.push("Liberação das fases 2 a 5 da glargina em Betim: aguardar comunicação oficial (NT DAPS 14/2026).");
    i.evid.fontes = [...new Set([...i.evid.fontes.filter(x => x !== "betim_glargina_prior"), "betim_nt14_2026", "cochrane_glarg2020"])];
    i.mudancas.push("v50 (22/10/2026): NT DAPS Betim 14/2026 – glargina por fases (fase 1: ≥ 80 anos e DM1 de 2 a < 18 anos fora do CEAF), receita com refil, caneta e agulhas; conservação em casa conforme a NT (prateleira de baixo, não na porta); passo a passo no item novo 'Troca da insulina NPH pela glargina'.");
    const st = i.guia.secoes.find(s => /Técnica, insumos/.test(s.t));
    if (st){ const u = st.b.find(b => b.ul); if (u) u.ul = u.ul.map(x => /^Conservação/.test(x) ? x.replace("Conservação: geladeira (2–8 °C, não congelar).", "Conservação: geladeira (2–8 °C, não congelar), na prateleira da metade inferior, longe da parede do fundo; não na porta nem na gaveta de frios (NT Betim 14/2026) [F].") : x); }
  }

  // demais itens que diziam "glargina na APS para ≥ 70 anos"
  for (const id of ["cr-dm2", "hiperglicemia"]){
    const c = get(id); if (!c) continue;
    const antes = JSON.stringify(c);
    TROCA63(c, "glargina na APS para ≥ 70 anos (NT 169/2026)", "glargina na APS para ≥ 70 anos (NT 169/2026; " + BETIM_FASE1 + ")");
    if (c.sus && typeof c.sus.betim === "string" && /insulina glargina/.test(c.sus.betim) && !/NT DAPS 14\/2026/.test(c.sus.betim))
      c.sus.betim = c.sus.betim.replace(/insulinas? glargina( disponíveis)?/, m => m + " (APS por fases – NT DAPS 14/2026: hoje só ≥ 80 anos e DM1 de 2 a < 18 anos fora do CEAF)");
    if (JSON.stringify(c) !== antes){
      c.evid.fontes = [...new Set([...(c.evid.fontes || []), "betim_nt14_2026"])];
      c.mudancas = [...(c.mudancas || []), "v50 (22/10/2026): glargina em Betim por fases (NT DAPS 14/2026)."];
    }
  }
})();
