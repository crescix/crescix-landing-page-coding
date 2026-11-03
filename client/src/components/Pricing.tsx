import { Check } from "lucide-react";
import { Link } from "wouter";

/**
 * Seção "Preços": 2 cards lado-a-lado, Mensal e Anual.
 *
 * Valores em sincronia com a crescix-api (src/lib/subscription.ts):
 *   - MENSAL: R$ 79,90 / 30 dias
 *   - ANUAL: R$ 718,80 / 365 dias (= R$ 59,90 equivalente mensal)
 *
 * Se mudar lá, atualizar aqui, nos Termos de Uso (`pages/Termos.tsx`,
 * seção 6) e na Política de Reembolso (`pages/Reembolso.tsx`, seção 1).
 * O CDC trata preço anunciado como oferta vinculante (art. 30), então
 * divergência entre essas telas não é só inconsistência de texto.
 * Não vale a complexidade de fetchar a API só pra renderizar landing
 * estática.
 */

const MENSAL = {
  valor: 79.9,
  label: "Mensal",
  subtitle: "Pago todo mês",
  description: "Pague mês a mês. Cancele quando quiser.",
};

const ANUAL = {
  valor: 718.8,
  label: "Anual",
  subtitle: "Cobrado uma vez por ano",
};

const benefitsBase = [
  "Acesso completo ao app web",
  "Bots de WhatsApp e Telegram",
  "Reconhecimento de voz e texto por IA",
  "Insights mensais automáticos",
  "Dashboard financeiro e fluxo de caixa",
  "Controle de estoque",
];

const benefitsAnual = [...benefitsBase, "Suporte prioritário"];

function formatBRL(v: number) {
  return v.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export default function Pricing() {
  const mensalEquivalente = ANUAL.valor / 12;
  const economiaPercentual = Math.round(
    ((MENSAL.valor - mensalEquivalente) / MENSAL.valor) * 100
  );
  const economiaMensal = MENSAL.valor - mensalEquivalente;

  return (
    <section id="precos" className="section">
      <div className="container">
        <div className="head head--split">
          <h2>Preços simples e transparentes</h2>
          <p className="lead">
            Comece com 30 dias grátis. Depois, escolha o plano que faz mais
            sentido pra você. Sem letras miúdas.
          </p>
        </div>

        <div className="planos">
          <div className="plano">
            <div className="plano__selos" aria-hidden="true" />
            <h3>{MENSAL.label}</h3>
            <p className="small">{MENSAL.description}</p>
            <p className="plano__preco">
              <b>{formatBRL(MENSAL.valor)}</b>
              <span>/mês</span>
            </p>
            <p className="small muted">{MENSAL.subtitle}</p>

            <ul className="plano__lista">
              {benefitsBase.map((b) => (
                <li key={b}>
                  <Check size={16} aria-hidden="true" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <Link href="/teste-gratis" className="btn btn--full">
              Começar teste grátis de 30 dias
            </Link>
          </div>

          <div className="plano on-ink" role="group" aria-label="Plano Anual">
            {/* "Mais popular" afirmava um comportamento de compra que a
                gente não mede nem publica. "Melhor preço" é aritmética
                verificável nos dois cards ao lado. */}
            <div className="plano__selos">
              <span>Melhor preço</span>
              <span>-{economiaPercentual}%</span>
            </div>
            <h3>{ANUAL.label}</h3>
            <p className="small">
              Pague o ano todo de uma vez e economize{" "}
              <strong>{formatBRL(economiaMensal * 12)}</strong>.
            </p>
            <p className="plano__preco">
              <b>{formatBRL(mensalEquivalente)}</b>
              <span>/mês</span>
            </p>
            <p className="small muted">
              12× {formatBRL(mensalEquivalente)}, ou {formatBRL(ANUAL.valor)} à
              vista. {ANUAL.subtitle}.
            </p>

            <ul className="plano__lista">
              {benefitsAnual.map((b) => (
                <li key={b}>
                  <Check size={16} aria-hidden="true" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <Link href="/teste-gratis" className="btn btn--primary btn--full">
              Começar teste grátis de 30 dias
            </Link>
          </div>
        </div>

        {/* Antes dizia "Sem auto-renovação", o que só é verdade no PIX: no
            cartão o Mercado Pago renova sozinho até o cliente cancelar,
            como dizem os Termos de Uso. Informação de cobrança recorrente
            é exatamente o que o CDC manda deixar claro antes da compra. */}
        <div className="condicoes">
          <p>
            Sem cartão de crédito no teste de 30 dias. Cancele a qualquer
            momento, sem multa: o tempo já pago segue valendo até o fim.
          </p>
          <p>
            Pagando por <strong>PIX</strong>, não há renovação automática.
            Pagando por <strong>cartão</strong>, a assinatura renova sozinha a
            cada período até você cancelar no app. Você tem{" "}
            <Link href="/reembolso" className="link">
              7 dias pra desistir
            </Link>{" "}
            e receber tudo de volta.
          </p>
        </div>
      </div>
    </section>
  );
}
