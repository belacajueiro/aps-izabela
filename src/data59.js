// ───────────── data59.js – v48: orientações ao paciente reescritas em linguagem concreta (sem frações, siglas ou termos técnicos).
// Começa pela dengue: volumes calculados pelo peso (calcPac – campo na aba Paciente e na Prescrição), preparo do soro, criadouros, sinais de alarme e retorno.
// Conteúdo conferido em 22/10/2026: MS, Dengue: diagnóstico e manejo clínico – adulto e criança, 6ª ed. 2024 (Drive da usuária: Quadro 1, item 6.1.2, Quadro 3, item 2.2.2.1);
// bulas de sais para reidratação oral (Cazi; FURP/SES-SP 2024); MS/Agência Gov 01/02/2024 (10 passos contra criadouros); REMUME Betim (envelope para 1.000 mL).
Object.assign(FONTES, {
  bula_sro: {s: "Bulas de sais para reidratação oral (Cazi; FURP/SES-SP 2024)", t: "Bula de sais para reidratação oral (Cazi Química Farmacêutica): dissolver todo o envelope em 1 litro de água filtrada ou fervida; usar o soro preparado em até 24 horas, conservado em temperatura ambiente (15–30 °C); descartar o que sobrar. Folheto FURP/SES-SP (atualizado em 29/11/2024), envelope de 27,9 g: solução preparada mantida em temperatura ambiente e usada em até 24 horas. Nenhuma das duas menciona geladeira (bula).", f: "F", url: "https://portal.saude.sp.gov.br/resources/ses/perfil/gestor/assistencia-farmaceutica/medicamentos-das-unidades-farmacia-dose-certa/sais_reidratacao_set2024_final_atualizado.pdf"},
  ms_criadouros2024: {s: "Ministério da Saúde – 10 passos para eliminar criadouros (2024)", t: "Ministério da Saúde/Agência Gov, 01/02/2024. Confira 10 passos para eliminar focos do mosquito da dengue: tampar caixas-d'água, ralos e pias; limpar bebedouros de animais; descartar pneus pela coleta (ou guardar cobertos e sem água); esvaziar e lavar a bandeja da geladeira e bebedouros; limpar calhas e lajes e pôr areia em cacos de vidro de muros; areia nos pratos de plantas; lixo bem fechado; vistoria da casa pelo menos 1 vez por semana; repelente e telas; receber os agentes comunitários e de endemias (orientação oficial).", f: "F", url: "https://agenciagov.ebc.com.br/noticias/202402/confira-10-passos-para-eliminar-focos-do-mosquito-da-dengue"}
});

// volume em linguagem do dia a dia: arredonda para 50 mL e escreve "1 litro e 400 mL"
const VOLP = ml => { ml = Math.max(0, Math.round(ml / 50) * 50); const l = Math.floor(ml / 1000), r = ml % 1000; return l ? `${l} ${l === 1 ? "litro" : "litros"}${r ? ` e ${r} mL` : ""}` : `${r} mL`; };
const COPOSP = ml => { const n = Math.round(ml / 200); return n <= 1 ? "1 copo" : `${n} copos`; };

(() => {
  const c = CONDICOES.find(x => x.id === "dengue-a"); if (!c) return;

  // volumes do MS 2024 (Quadro 3): adulto 60 mL/kg/dia; criança (< 13 anos) até 10 kg 130, > 10–20 kg 100, > 20 kg 80 mL/kg/dia; 1/3 em SRO, no início
  c.calcPac = {
    titulo: "Calcular a hidratação pelo peso",
    campos: [["kg", "Peso (kg)"], ["anos", "Idade (anos)"]],
    nota: "MS 2024, Quadro 3: adulto 60 mL/kg/dia; criança (< 13 anos) até 10 kg 130 mL/kg/dia, > 10 a 20 kg 100 mL/kg/dia, > 20 kg 80 mL/kg/dia; um terço em soro de reidratação oral nas primeiras 4 a 6 horas e o restante em líquidos caseiros; manter durante a febre e até 24–48 h após a defervescência. Volumes arredondados para 50 mL. O manual não define teto: em obesidade, cardiopatia ou doença renal, ajuste pela clínica.",
    f: ({kg, anos}) => {
      const crianca = anos < 13;
      const taxa = crianca ? (kg <= 10 ? 130 : kg <= 20 ? 100 : 80) : 60;
      const total = Math.round(kg * taxa / 50) * 50, sro = Math.round(total / 3 / 50) * 50, outros = total - sro;
      const env = Math.max(1, Math.ceil(sro / 1000));
      return {
        kg: String(kg).replace(".", ","), total: VOLP(total), sro: VOLP(sro), outros: VOLP(outros),
        copos_total: COPOSP(total), copos_sro: COPOSP(sro), copos_outros: COPOSP(outros),
        env: env === 1 ? "1 envelope" : `${env} envelopes`,
        _resumo: `${crianca ? "Criança" : "Adulto"}, ${String(kg).replace(".", ",")} kg × ${taxa} mL/kg = ${VOLP(total)} por dia: ${VOLP(sro)} de soro de reidratação oral nas primeiras 4 a 6 horas + ${VOLP(outros)} de outros líquidos ao longo do dia.`
      };
    }
  };

  c.orient = `## Beber líquidos é o principal tratamento da dengue
- Beba ao todo **{{total}} de líquidos por dia** (cerca de {{copos_total}} de 200 mL), mesmo sem sede. Essa quantidade foi calculada pelo peso ({{kg}} kg).
- **{{sro}} devem ser de soro de reidratação oral**, tomados nas **primeiras 4 a 6 horas do dia** (cerca de {{copos_sro}}). No dia da consulta, comece assim que chegar em casa.
- O restante, **{{outros}}** (cerca de {{copos_outros}}), deve ser bebido ao longo do dia: água, chás, sucos de fruta, água de coco ou soro caseiro.
- Se estiver enjoado, beba aos poucos, em pequenos goles, sem parar.
- **Continue com o soro e os outros líquidos todos os dias enquanto tiver febre e por mais 1 a 2 dias depois que a febre acabar.**
- Continue comendo normalmente, conforme a fome. Se o bebê mama no peito, continue amamentando.

## Como preparar o soro de reidratação oral
- Lave as mãos e use uma jarra e uma colher limpas.
- Dissolva todo o pó do envelope na quantidade de água indicada pelo fabricante na embalagem. O envelope entregue na farmácia do SUS é para **1 litro de água**.
- Use água filtrada ou fervida (espere esfriar antes de misturar).
- Não acrescente açúcar, sal, suco ou outra coisa ao soro.
- Guarde o soro pronto em uma jarra ou garrafa tampada, em lugar fresco.
- **Use o soro preparado em até 24 horas.** Depois de 24 horas, jogue fora o que sobrou e prepare outro.

## Remédios
- Para febre e dor, use só o que foi receitado (paracetamol ou dipirona), nos horários da receita.
- **Não tome** AAS, ibuprofeno, diclofenaco, nimesulida, cetoprofeno ou outros anti-inflamatórios, nem corticoide (como prednisona). Eles aumentam o risco de sangramento.
- Não tome nenhum outro remédio por conta própria.
- Fique em repouso enquanto estiver com febre.

## Atenção quando a febre for embora
- A dengue pode piorar justamente **quando a febre começa a melhorar**, geralmente entre o 3º e o 7º dia da doença. Melhorar da febre não quer dizer que o perigo passou.
- Nesses dias, preste atenção aos sinais de alarme listados abaixo. Se aparecer qualquer um deles, **vá imediatamente à UPA ou ao pronto-socorro**, de dia ou de noite, sem esperar o retorno marcado.

## Quando voltar à unidade
- **Volte no dia em que a febre melhorar** (o primeiro dia sem febre), para ser examinado de novo.
- **Se a febre continuar, volte no 5º dia da doença** (contando a partir do dia em que a febre começou), mesmo que esteja se sentindo bem.
- Leve o cartão de acompanhamento da dengue em todas as consultas.

## Não deixe o mosquito picar outras pessoas
- Enquanto estiver doente, use repelente nas partes do corpo descobertas, para o mosquito não picar você e levar o vírus para outras pessoas da casa.
- Coloque telas em janelas e portas, se possível.

## Acabe com a água parada (10 minutos por semana)
- Tampe bem caixas-d'água, tonéis, ralos e pias que ficam sem uso.
- Coloque areia nos pratinhos dos vasos de plantas.
- Lave e troque a água dos bebedouros de animais com frequência.
- Esvazie e lave com água e sabão a bandeja de trás da geladeira e o reservatório do bebedouro.
- Limpe calhas e lajes; coloque areia nos cacos de vidro em cima de muros.
- Guarde pneus velhos cobertos e sem água, ou entregue na coleta da prefeitura.
- Feche bem os sacos de lixo e não jogue lixo em lotes vagos ou na rua.
- Uma vez por semana, olhe a casa e o quintal procurando água parada.
- Receba os agentes comunitários de saúde e de combate às endemias.`;

  c.alarme = [
    "Dor forte na barriga que não passa",
    "Vômitos repetidos, que não deixam beber o soro",
    "Sangramento pelo nariz, pela gengiva, na urina, no vômito ou nas fezes (fezes pretas ou com sangue)",
    "Tontura ou desmaio ao se levantar",
    "Muita sonolência, confusão ou, na criança, irritação e choro sem parar",
    "Barriga inchada ou falta de ar",
    "Mãos e pés frios, pele pálida e suada",
    "Urinar muito pouco"
  ];

  const h = (c.rx || []).find(r => /reidrata/i.test(r.titulo + r.texto));
  if (h){
    h.texto = `USO ORAL
1. Sais para reidratação oral (envelope para 1 litro) ______ ___ envelopes
   Dissolver 1 envelope em 1 litro de água filtrada ou fervida (já fria).
   Beber {{sro}} de soro por dia, nas primeiras 4 a 6 horas do dia ({{env}} por dia).
   Beber também mais {{outros}} de outros líquidos ao longo do dia (água, chás, sucos, água de coco).
   Total de líquidos por dia: {{total}} (peso {{kg}} kg).
   Manter enquanto houver febre e por 1 a 2 dias depois que a febre passar.
   Usar o soro preparado em até 24 horas; depois disso, jogar fora o que sobrar.`;
    h.nota = "Volumes pelo peso e pela idade no campo 'Calcular a hidratação pelo peso' (MS 2024, Quadro 3) [F]. Envelope da REMUME Betim: pó para 1.000 mL [F]. Preparo e validade de 24 h: bulas [F]. A quantidade total de envelopes depende dos dias de febre – preencher.";
    h.dose = "F";
  }
  const s = (c.rx || []).find(r => /Sintom/i.test(r.titulo));
  if (s) s.texto = s.texto.replace("Tomar 1 comprimido até de 6/6h se dor ou febre.", "Tomar 1 comprimido de 6 em 6 horas, se tiver dor ou febre.").replace("Tomar 1 a 2 comprimidos até de 6/6h se dor ou febre (máximo 4 g/dia).", "Tomar 1 a 2 comprimidos de 6 em 6 horas, se tiver dor ou febre (no máximo 8 comprimidos por dia).");

  c.P = c.P.replace("- Orientados repelente e eliminação de criadouros.", "- Orientados repelente e eliminação de criadouros; orientações de hidratação entregues por escrito, com volumes pelo peso.");
  c.evid.fontes = [...new Set([...(c.evid.fontes || []), "bula_sro", "ms_criadouros2024"])];
  c.mudancas = [...(c.mudancas || []), "v48 (22/10/2026): orientação ao paciente reescrita – volumes calculados pelo peso (sem frações), preparo e validade do soro, criadouros, piora na fase de queda da febre e retorno; sinais de alarme em linguagem leiga."];
  c.nv = [...(c.nv || []), "Guardar o soro pronto na geladeira: as bulas consultadas indicam temperatura ambiente/lugar fresco e não mencionam geladeira – o app orienta 'lugar fresco'."];
})();

// ── reescrita das orientações ao paciente (padrão v48): partes com título, remédios em linguagem simples a partir da receita do item,
// cuidados em casa, quando voltar e prevenção; sinais de alarme (lista "Procure atendimento imediatamente se") sem termos técnicos.
// Nenhum dado clínico novo: o texto deriva do plano (P), da receita (rx), do encaminhamento e das fontes já citadas em cada item.
const ORI59_LOG = [];
const ORI59 = (id, texto, alarme) => {
  const c = CONDICOES.find(x => x.id === id);
  if (!c){ ORI59_LOG.push("não achei: " + id); return; }
  c.orient = texto.trim();
  if (alarme) c.alarme = alarme;
  c.mudancas = [...(c.mudancas || []), "v48 (22/10/2026): orientação ao paciente reescrita em linguagem simples, com partes, remédios, quando voltar" + (alarme ? " e sinais de alarme revistos" : "") + "."];
};
