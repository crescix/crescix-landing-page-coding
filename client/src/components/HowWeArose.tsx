import { motion } from "framer-motion";
import { GraduationCap, Lightbulb, Code2 } from "lucide-react";

const milestones = [
  {
    icon: GraduationCap,
    label: "Origem",
    text: "Estudantes da UNIFEI e FAI",
  },
  {
    icon: Lightbulb,
    label: "Dor identificada",
    text: "Vendas e despesas perdidas em áudios e mensagens espalhadas",
  },
  {
    icon: Code2,
    label: "Solução",
    text: "IA que entende o jeito de falar do comerciante brasileiro",
  },
];

export default function HowWeArose() {
  return (
    <section
      id="nossa-historia"
      className="py-24 lg:py-32 relative overflow-hidden bg-[#0B1622]"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-green-500/8 blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left: card grupo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 -m-4 rounded-3xl bg-gradient-to-br from-green-500/20 to-green-600/10 blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={`${import.meta.env.BASE_URL}images/how-we-arose-image.png`}
                alt="Como a CrescIX surgiu"
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Right: texto */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/25 text-green-400 text-xs font-bold uppercase tracking-wider mb-4">
              Nossa História
            </span>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-6 leading-[1.1]">
              Como a{" "}
              <span className="gradient-green">CrescIX</span> surgiu
            </h2>

            <p className="text-white/65 leading-relaxed mb-4">
              Começamos enquanto ainda estudávamos engenharia de software na{" "}
              <span className="text-white font-medium">UNIFEI</span> e na{" "}
              <span className="text-white font-medium">FAI</span>. Conversando
              com pequenos comerciantes da nossa região, batia sempre a mesma
              dor: as informações que importam pro caixa estavam soltas em
              áudios do WhatsApp, anotações em papel e na cabeça do dono.
            </p>

            <p className="text-white/65 leading-relaxed mb-8">
              A gente percebeu que ferramentas de gestão existentes pediam
              tempo, treinamento e disciplina que o comerciante simplesmente
              não tem. Então invertemos a lógica: deixa a IA fazer o trabalho
              de digitar.
            </p>

            <div className="space-y-3">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex gap-3 items-center"
                >
                  <div className="w-9 h-9 rounded-lg bg-green-500/10 border border-green-500/25 flex items-center justify-center flex-shrink-0">
                    <m.icon className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="text-sm">
                    <span className="text-green-400/80 uppercase tracking-wider text-[10px] font-bold mr-2">
                      {m.label}
                    </span>
                    <span className="text-white/80">{m.text}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
