import { useLocation } from "wouter";
import { Check } from "lucide-react";

/**
 * Vitrine institucional: a CrescIX não é um produto só. São três soluções
 * que resolvem dores diferentes de pequenos negócios. Esta seção dá a cara
 * de empresa ao site e manda cada visitante pro produto certo.
 */
const PRODUTOS = [
  {
    nome: "Gestão financeira por IA",
    etiqueta: "Nosso carro-chefe",
    descricao:
      "Mande um áudio no Telegram e a IA registra a venda, a despesa ou a compra no seu caixa. Sem planilha, sem digitar.",
    bullets: ["Áudio ou texto", "Painel financeiro completo", "Relatórios em Excel"],
    acao: { label: "Ver como funciona", tipo: "ancora", destino: "#como-funciona" },
  },
  {
    nome: "Atendimento automático",
    etiqueta: "Novidade",
    descricao:
      "Um assistente que atende o WhatsApp do seu negócio sozinho, direciona pro setor certo e agenda na sua agenda. 24 horas por dia.",
    bullets: ["Responde em segundos", "Agenda e lembra", "Feito sob medida"],
    acao: { label: "Conhecer", tipo: "rota", destino: "/atendimento" },
  },
  {
    nome: "ERP para mercados",
    etiqueta: "Para o varejo",
    descricao:
      "PDV, controle de estoque, emissão de NFC-e, crediário e frente de caixa. Tudo que um mercado precisa pra vender e controlar.",
    bullets: ["Frente de caixa", "Estoque e NFC-e", "Crediário e fiado"],
    acao: { label: "Conhecer", tipo: "rota", destino: "/erp" },
  },
];

export default function Produtos() {
  const [, navigate] = useLocation();

  return (
    <section id="produtos" className="section band">
      <div className="container">
        <div className="head head--split">
          <h2>Tecnologia que trabalha pelo seu negócio.</h2>
          <p className="lead">
            Três soluções feitas pra quem vive o dia a dia do balcão. Escolha por
            onde a CrescIX pode começar a te ajudar.
          </p>
        </div>

        <ul className="rows rows--tall">
          {PRODUTOS.map((p) => (
            <li key={p.nome} className="produto">
              <div className="produto__nome">
                <h3>{p.nome}</h3>
                <small>{p.etiqueta}</small>
              </div>
              <div className="produto__texto">
                <p>{p.descricao}</p>
                <ul className="produto__itens">
                  {p.bullets.map((b) => (
                    <li key={b}>
                      <Check size={16} aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="produto__acao">
                {p.acao.tipo === "rota" ? (
                  <button
                    type="button"
                    onClick={() => navigate(p.acao.destino)}
                    className="btn"
                    aria-label={`${p.acao.label}: ${p.nome}`}
                  >
                    {p.acao.label}
                  </button>
                ) : (
                  <a href={p.acao.destino} className="btn">
                    {p.acao.label}
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
