import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Link } from "wouter";

/**
 * Seção "Preços" — 2 cards lado-a-lado: Mensal e Anual.
 *
 * Valores em sincronia com a crescix-api (src/lib/subscription.ts):
 *   - MENSAL: R$ 69,90 / 30 dias
 *   - ANUAL: R$ 598,80 / 365 dias (= R$ 49,90 equivalente mensal)
 *
 * Se mudar lá, atualizar aqui também — não vale a complexidade de
 * fetchar a API só pra renderizar landing estática.
 */

const MENSAL = {
  valor: 69.9,
  label: "Mensal",
  subtitle: "Pago todo mês",
  description: "Pague mês a mês. Cancele quando quiser.",
};

const ANUAL = {
  valor: 598.8,
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
    <section
      id="precos"
      className="py-24 lg:py-32 relative overflow-hidden bg-[#0B1622]"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-green-500/8 blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Preços simples e transparentes
          </h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed">
            Comece com 7 dias grátis. Depois, escolha o plano que faz mais
            sentido pra você. Sem letras miúdas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* MENSAL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative rounded-2xl border border-white/10 bg-white/5 p-8 flex flex-col"
          >
            <h3 className="text-xl font-semibold text-white">
              {MENSAL.label}
            </h3>
            <p className="mt-1 text-sm text-white/60">{MENSAL.description}</p>

            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-4xl font-bold text-white">
                {formatBRL(MENSAL.valor)}
              </span>
              <span className="text-sm text-white/60">/mês</span>
            </div>
            <p className="mt-1 text-xs text-white/50">{MENSAL.subtitle}</p>

            <ul className="mt-6 flex-1 space-y-3">
              {benefitsBase.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2 text-sm text-white/80"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/teste-gratis"
              className="mt-8 inline-flex items-center justify-center h-11 w-full rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm transition-colors"
            >
              Começar teste grátis de 7 dias
            </Link>
          </motion.div>

          {/* ANUAL — destacado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative rounded-2xl border border-green-500/40 bg-gradient-to-b from-green-500/10 to-transparent p-8 flex flex-col shadow-[0_0_50px_-15px_rgba(34,197,94,0.4)]"
          >
            <span className="absolute -top-3 left-8 rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-[#0B1622]">
              Economize {economiaPercentual}%
            </span>

            <h3 className="text-xl font-semibold text-white">
              {ANUAL.label}
            </h3>
            <p className="mt-1 text-sm text-white/60">
              Pague o ano todo de uma vez e economize{" "}
              {formatBRL(economiaMensal * 12)}.
            </p>

            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-4xl font-bold text-white">
                {formatBRL(mensalEquivalente)}
              </span>
              <span className="text-sm text-white/60">/mês</span>
            </div>
            <p className="mt-1 text-xs text-white/50">
              12× {formatBRL(mensalEquivalente)} · {formatBRL(ANUAL.valor)} à
              vista
            </p>

            <ul className="mt-6 flex-1 space-y-3">
              {benefitsAnual.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2 text-sm text-white/80"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/teste-gratis"
              className="mt-8 inline-flex items-center justify-center h-11 w-full rounded-xl bg-green-500 hover:bg-green-400 text-[#0B1622] font-semibold text-sm transition-colors"
            >
              Começar teste grátis de 7 dias
            </Link>
          </motion.div>
        </div>

        <p className="text-center text-xs text-white/40 mt-8 max-w-2xl mx-auto">
          Sem auto-renovação. Sem cartão de crédito no teste. Cancele a
          qualquer momento — o tempo já pago segue valendo até o fim.
        </p>
      </div>
    </section>
  );
}
