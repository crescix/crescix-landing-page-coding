const features = [
  {
    title: "Transcrição de áudio",
    description:
      "Mande um áudio rapidinho enquanto atende o cliente. O Whisper transcreve em pt-BR com precisão.",
  },
  {
    title: "IA com escopo restrito",
    description:
      "Modelo blindado contra jailbreak. Responde só sobre vendas, compras, despesas e relatórios. Foco no que importa.",
  },
  {
    title: "Painel financeiro completo",
    description:
      "Dashboard, fluxo de caixa, contas a pagar e receber, estoque e pedidos. Tudo conectado pelo mesmo backend.",
  },
  {
    title: "Planilhas sob demanda",
    description:
      'Peça "planilha das vendas da semana por dia" e receba o Excel formatado no chat. Agrupamento, filtros e totais.',
  },
  {
    title: "Multi-tenancy seguro",
    description:
      "Cada negócio tem seus dados isolados. JWT, rate limiting e criptografia bcrypt. Pronto pra produção.",
  },
  {
    title: "Setup em 2 minutos",
    description:
      "Cadastro, pareamento do Telegram e primeira venda registrada em menos de 2 minutos.",
  },
  {
    title: "Conta a receber automática",
    description:
      "Pedido faturado vira conta a receber sozinho, com forma de pagamento mapeada. Sem retrabalho.",
  },
  {
    title: "Histórico imutável",
    description:
      "Movimentações de estoque não podem ser editadas, só compensadas via ajuste manual. Auditoria sempre íntegra.",
  },
  {
    title: "Acesso em qualquer lugar",
    description:
      "Web responsiva + bot Telegram + futuras integrações. Você gerencia de onde quiser.",
  },
];

export default function Features() {
  return (
    <section id="recursos" className="section--s band">
      <div className="container">
        <div className="head head--split">
          <h2>Tudo que sua PME precisa. Em um só lugar.</h2>
          <p className="lead">
            Construído pra empresários que querem foco no negócio, não em
            ferramenta. Cada recurso resolve uma dor real.
          </p>
        </div>

        <div className="cells">
          {features.map((feature) => (
            <div key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
