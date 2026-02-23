/*
 * CrescIX "Preços" — Fluid Data Streams Design
 * - 3 planos de preço com destaque no plano principal
 * - Cards com hover effects e CTA
 */
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    description: "Para quem está começando a automatizar",
    price: "Grátis",
    period: "",
    features: [
      "100 mensagens/mês",
      "Transcrição de áudios básica",
      "1 número de WhatsApp",
      "Dados estruturados simples",
      "Suporte por e-mail",
    ],
    cta: "Começar Grátis",
    highlighted: false,
  },
  {
    name: "Profissional",
    description: "Para negócios em crescimento",
    price: "R$ 97",
    period: "/mês",
    features: [
      "5.000 mensagens/mês",
      "Transcrição de áudios avançada",
      "3 números de WhatsApp",
      "Extração inteligente de dados",
      "Criptografia avançada",
      "Integrações com ferramentas",
      "Suporte prioritário",
    ],
    cta: "Testar 7 Dias Grátis",
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "Para operações de grande escala",
    price: "Sob consulta",
    period: "",
    features: [
      "Mensagens ilimitadas",
      "IA personalizada para seu negócio",
      "Números ilimitados",
      "API completa de integração",
      "Criptografia enterprise",
      "Gerente de conta dedicado",
      "SLA garantido",
    ],
    cta: "Falar com Vendas",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="precos" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-20 left-0 w-[400px] h-[400px] rounded-full bg-[#D8DDEF]/30 blur-[100px]" />
      <div className="absolute bottom-20 right-0 w-[300px] h-[300px] rounded-full bg-[#A3C3D9]/20 blur-[80px]" />

      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#09636B]/10 text-[#09636B] text-sm font-semibold mb-4">
            Preços
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#172A3A] mb-4">
            Planos que cabem no seu{" "}
            <span className="text-[#09636B]">bolso</span>
          </h2>
          <p className="text-lg text-[#172A3A]/55 max-w-2xl mx-auto">
            Comece gratuitamente e escale conforme seu negócio cresce. Sem surpresas, sem taxas ocultas.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className={`relative group ${plan.highlighted ? "md:-mt-4 md:mb-[-16px]" : ""}`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#09636B] to-[#004346] text-white text-xs font-bold shadow-lg">
                    <Sparkles className="w-3.5 h-3.5" />
                    Mais Popular
                  </span>
                </div>
              )}

              <div
                className={`h-full rounded-2xl p-7 lg:p-8 transition-all duration-300 group-hover:-translate-y-1 ${
                  plan.highlighted
                    ? "bg-gradient-to-b from-[#004346] to-[#172A3A] text-white shadow-2xl shadow-[#004346]/30 border border-[#09636B]/30"
                    : "bg-white border border-[#D8DDEF]/60 shadow-sm hover:shadow-lg hover:shadow-[#09636B]/5"
                }`}
              >
                <div className="mb-6">
                  <h3
                    className={`font-display font-bold text-xl mb-1 ${
                      plan.highlighted ? "text-white" : "text-[#172A3A]"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm ${
                      plan.highlighted ? "text-white/60" : "text-[#172A3A]/50"
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6">
                  <span
                    className={`font-display font-extrabold text-4xl ${
                      plan.highlighted ? "text-white" : "text-[#172A3A]"
                    }`}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span
                      className={`text-base ml-1 ${
                        plan.highlighted ? "text-white/50" : "text-[#172A3A]/40"
                      }`}
                    >
                      {plan.period}
                    </span>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        className={`w-4.5 h-4.5 mt-0.5 flex-shrink-0 ${
                          plan.highlighted ? "text-[#A3C3D9]" : "text-[#09636B]"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          plan.highlighted ? "text-white/75" : "text-[#172A3A]/60"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full font-display font-semibold rounded-xl py-5 transition-all duration-300 group/btn ${
                    plan.highlighted
                      ? "bg-white text-[#004346] hover:bg-[#D8DDEF] shadow-lg"
                      : "bg-[#09636B] text-white hover:bg-[#004346] shadow-md shadow-[#09636B]/20"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
