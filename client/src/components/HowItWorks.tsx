import { MessageSquare, Brain, Database, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Envie mensagens e áudios",
    description:
      "O usuário envia mensagens ou áudios normalmente pelo Telegram. Sem complicação, sem apps extras.",
    color: "#508991",
  },
  {
    icon: Brain,
    number: "02",
    title: "IA converte e interpreta",
    description:
      "A CrescIX transcreve áudios em texto e interpreta as mensagens automaticamente com Inteligência Artificial.",
    color: "#09636B",
  },
  {
    icon: Database,
    number: "03",
    title: "Dados organizados",
    description:
      "Informações importantes como pedidos e feedbacks são extraídas e organizadas em dados estruturados.",
    color: "#004346",
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "Armazenamento seguro",
    description:
      "Todos os dados são armazenados com criptografia avançada, garantindo segurança e privacidade total.",
    color: "#172A3A",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-[#D8DDEF]/30 blur-[80px]" />
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] rounded-full bg-[#A3C3D9]/20 blur-[60px]" />

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
            Como Funciona
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#172A3A] mb-4">
            Simples, rápido e{" "}
            <span className="text-[#09636B]">inteligente</span>
          </h2>
          <p className="text-lg text-[#172A3A]/55 max-w-2xl mx-auto">
            Em apenas 4 passos, suas conversas do Telegram se transformam em dados
            organizados e prontos para uso.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Connector line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+40px)] right-[-calc(50%-40px)] w-[calc(100%-40px)]">
                  <div className="border-t-2 border-dashed border-[#A3C3D9]/40 w-full" />
                </div>
              )}

              <div className="relative bg-white rounded-2xl p-6 lg:p-8 border border-[#D8DDEF]/60 hover:border-[#A3C3D9]/60 shadow-sm hover:shadow-lg hover:shadow-[#09636B]/5 transition-all duration-300 group-hover:-translate-y-1">
                {/* Number badge */}
                <div className="absolute -top-3 -right-2 w-8 h-8 rounded-full bg-[#D8DDEF] flex items-center justify-center">
                  <span className="text-xs font-bold text-[#004346] font-mono">{step.number}</span>
                </div>

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${step.color}15` }}
                >
                  <step.icon className="w-7 h-7" style={{ color: step.color }} />
                </div>

                <h3 className="font-display font-bold text-lg text-[#172A3A] mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-[#172A3A]/55 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
