const audiences = [
  {
    title: "Comércio de bairro",
    description:
      "Loja, mercado, papelaria. Vende ao longo do dia e quer fechar o caixa sem planilha no fim do mês.",
  },
  {
    title: "Bares e lanchonetes",
    description:
      "Movimento corrido, valores variados, despesas constantes. Registra por áudio entre um pedido e outro.",
  },
  {
    title: "Salões e estúdios",
    description:
      "Serviços com agendamento, comissões e produtos. Vê o ticket médio e os custos do mês em segundos.",
  },
  {
    title: "Prestadores de serviço",
    description:
      "Eletricista, encanador, freelancer. Quer cobrar certo e saber quanto sobra no fim do mês.",
  },
  {
    title: "Lojas online e vendedores",
    description:
      "Vende pelo Insta/WhatsApp e precisa de organização sem planilha gigante. CrescIX integra tudo.",
  },
  {
    title: "Pequenas distribuidoras",
    description:
      "Estoque, fornecedores, vendedores em campo. Multi-usuário e relatórios sempre na mão.",
  },
];

export default function ForWhom() {
  return (
    <section id="para-quem" className="section on-ink">
      <div className="container">
        <div className="head head--split">
          <h2>Pensado pra quem vive o caixa todo dia.</h2>
          <p className="lead">
            Se você passa o dia atendendo, vendendo e correndo pra anotar tudo
            depois, a CrescIX foi feita pra te tirar dessa.
          </p>
        </div>

        <ul className="board">
          {audiences.map((audience) => (
            <li key={audience.title}>
              <h3>{audience.title}</h3>
              <p>{audience.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
