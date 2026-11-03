import { useLocation } from "wouter";
import { Check, ScanBarcode } from "lucide-react";
import Palco from "@/components/wayfind/Palco";
import SiteFooter from "@/components/wayfind/SiteFooter";
import { useSEO } from "@/hooks/useSEO";
import { useWayfind } from "@/hooks/useWayfind";
import { FOTOS } from "@/lib/fotos";

const WHATSAPP_URL =
  "https://wa.me/5535984219965?text=Ol%C3%A1!%20Vi%20a%20p%C3%A1gina%20do%20ERP%20e%20queria%20saber%20mais%20para%20o%20meu%20mercado.";

/* Cupom que ilustra o PDV no hero */
const CUPOM = [
  { cod: "7891000", nome: "Arroz 5kg", qtd: "1", total: "27,90" },
  { cod: "2010045", nome: "Queijo mussarela", qtd: "0,450 kg", total: "17,55" },
  { cod: "7894900", nome: "Refrigerante 2L", qtd: "2", total: "17,80" },
];

const DIFERENCIAIS = [
  {
    titulo: "PDV operado no teclado",
    texto:
      "Frente de caixa em tela cheia, tudo por atalho e leitor de código de barras. O operador não tira a mão do balcão.",
  },
  {
    titulo: "Emite NFC-e",
    texto:
      "Cupom fiscal eletrônico emitido na hora da venda, integrado a provedor homologado. Cupom impresso em bobina 80mm.",
  },
  {
    titulo: "Estoque que bate",
    texto:
      "Toda venda baixa o estoque na hora. Entrada por XML da nota do fornecedor, balanço com contagem e ajuste em lote.",
  },
  {
    titulo: "Produtos pesáveis",
    texto:
      "Vende por quilo lendo a etiqueta da balança. Frios, hortifruti e granel entram com o peso certo, sem digitar.",
  },
  {
    titulo: "Fiado organizado",
    texto:
      "Crediário com limite por cliente, caderneta e recebimento que cai direto no caixa. O fiado do bairro, sob controle.",
  },
  {
    titulo: "Financeiro conectado",
    texto:
      "Contas a pagar e receber, fluxo de caixa e fechamento de caixa que alimenta o financeiro sozinho, por forma de pagamento.",
  },
];

const FLUXO = [
  {
    titulo: "Bipa e vende",
    texto:
      "O operador passa o produto no leitor, recebe em dinheiro, PIX, cartão ou fiado, e a NFC-e sai na hora.",
  },
  {
    titulo: "O estoque se ajusta",
    texto:
      "Cada venda baixa o item na hora. A entrada da mercadoria vem do XML da nota do fornecedor, com um clique.",
  },
  {
    titulo: "O caixa fecha certo",
    texto:
      "No fim do dia, o fechamento confere o dinheiro e joga tudo pro financeiro, separado por forma de pagamento.",
  },
  {
    titulo: "Você enxerga o negócio",
    texto:
      "Relatórios de venda, curva ABC, estoque abaixo do mínimo e produtos sem giro. Decisão com número, não no achismo.",
  },
];

export default function Erp() {
  useWayfind();
  useSEO({
    title: "ERP para mercados | CrescIX",
    description:
      "Sistema completo para mercados e varejo: PDV por teclado, emissão de NFC-e, controle de estoque, produtos pesáveis, crediário e financeiro. Tudo conectado.",
    canonicalPath: "/erp",
  });

  const [, navigate] = useLocation();

  return (
    <>
      <nav className="slab on-ink" aria-label="Principal">
        <div className="container slab__bar">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="slab__logo"
            aria-label="Voltar para a página inicial"
          >
            <img
              src={`${import.meta.env.BASE_URL}images/logo.png`}
              alt="CrescIX"
              width={703}
              height={260}
            />
          </button>

          <div className="slab__right">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="slab__quiet"
            >
              Conhecer a CrescIX
            </button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              Falar com a gente
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* ── Hero ───────────────────────────────────────────────────────── */}
        <section className="hero">
          <div className="container hero__grid">
            <div className="hero__text">
              <h1>O sistema completo do seu mercado.</h1>

              <p className="lead">
                Frente de caixa, nota fiscal, estoque, fiado e financeiro no
                mesmo lugar. Do bipe do produto ao fechamento do caixa, sem
                planilha e sem retrabalho.
              </p>

              <div className="actions">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                >
                  Quero conhecer
                </a>
                <a href="#recursos" className="btn">
                  Ver os recursos
                </a>
              </div>

              <ul className="facts">
                <li>Para mercados e varejo</li>
                <li>PDV por teclado</li>
                <li>Emite NFC-e</li>
                <li>Estoque e fiado</li>
              </ul>
            </div>

            {/* Cupom ilustrativo do PDV */}
            <Palco
              foto={FOTOS.loja}
              slot="hero"
              descricao="O caixa de um mercado cliente da CrescIX, com o PDV em uso"
              posicao="78% 50%"
            >
              <div className="sign stage__sign" data-keep>
                <span>NFC-e</span>
                <b>
                  <Check size={20} aria-hidden="true" className="sign__check" />
                  Autorizada
                </b>
              </div>

              <div className="plate stage__plate" data-keep>
                <div className="plate__bar">
                  <span className="audio">
                    <ScanBarcode size={16} aria-hidden="true" />
                    <b>Caixa 01</b>
                  </span>
                  <span>aberto</span>
                </div>
                <div className="plate__body">
                  <p className="cupom__head">
                    <span>Item</span>
                    <span>R$</span>
                  </p>
                  <ul className="cupom">
                    {CUPOM.map((c) => (
                      <li key={c.cod}>
                        {c.nome}
                        <span>
                          {c.qtd}, cód. {c.cod}
                        </span>
                        <b>{c.total}</b>
                      </li>
                    ))}
                  </ul>
                  <p className="cupom__total">
                    <span>Total</span>
                    <b>R$ 63,25</b>
                  </p>
                </div>
              </div>
            </Palco>
          </div>
        </section>

        {/* ── Recursos ───────────────────────────────────────────────────── */}
        <section id="recursos" className="section band">
          <div className="container">
            <div className="head head--split">
              <h2>Feito pra rotina de mercado.</h2>
              <p className="lead">
                Tudo em um lugar. Cada recurso resolve uma dor de quem toca o
                balcão, o estoque e o caixa todo dia.
              </p>
            </div>

            <div className="cells">
              {DIFERENCIAIS.map((r) => (
                <div key={r.titulo}>
                  <h3>{r.titulo}</h3>
                  <p>{r.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Fluxo ──────────────────────────────────────────────────────── */}
        <section className="section--l">
          <div className="container">
            <div className="head">
              <h2>Do bipe ao fechamento do caixa.</h2>
            </div>

            <ol className="route">
              {FLUXO.map((p) => (
                <li key={p.titulo}>
                  <h3>{p.titulo}</h3>
                  <p>{p.texto}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Confiança ──────────────────────────────────────────────────── */}
        <section className="section--s on-ink">
          <div className="container statement">
            <h2>Pensado pra quem não pode errar no caixa.</h2>
            <p>
              Cada operador tem o seu acesso, ações sensíveis como cancelar
              venda exigem o gerente, e todo movimento fica registrado. As
              movimentações de estoque não podem ser apagadas, só corrigidas
              por ajuste, pra o controle nunca perder a integridade.
            </p>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────────────────────── */}
        <section className="section--s">
          <div className="container statement">
            <h2>Vamos colocar seu mercado no controle.</h2>
            <p className="lead">
              Conte pra gente como é o seu mercado que a gente mostra o sistema
              funcionando e ajuda a colocar pra rodar. Sem compromisso.
            </p>
            <div className="actions">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter fotos={[FOTOS.loja]} />
    </>
  );
}
