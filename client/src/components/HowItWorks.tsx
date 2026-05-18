import { MessageSquare, Brain, Database, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Você manda no Telegram",
    description:
      'Áudio ou texto curto: "Vendi 4 águas a 3 reais", "Paguei 150 de aluguel". Sem app extra, sem formulário.',
  },
  {
    icon: Brain,
    number: "02",
    title: "A IA entende",
    description:
      "Whisper transcreve o áudio e a IA estrutura: tipo da operação, item, valor unitário, quantidade. Tudo em segundos.",
  },
  {
    icon: Database,
    number: "03",
    title: "Você confirma",
    description:
      "O bot mostra um resumo do que entendeu. Você clica em ✅ e o lançamento entra direto no caixa do CrescIX.",
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "Tudo guardado",
    description:
      "Dados criptografados, multi-tenancy, relatórios em planilha quando quiser. Sem perda, sem retrabalho.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="py-24 lg:py-32 relative overflow-hidden bg-[#0B1622]"
    >
      <div className="absolute inset-0 bg-grid-dim mask-radial pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-green-500/10 blur-[100px] pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/25 text-green-400 text-xs font-bold uppercase tracking-wider mb-4">
            Como Funciona
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Quatro passos.{" "}
            <span className="gradient-green">Zero fricção.</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Conversa normal no Telegram entra como lançamento estruturado no
            seu painel financeiro.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="relative group"
            >
              {/* Connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full z-0">
                  <div className="border-t-2 border-dashed border-green-500/20 w-[80%] mx-auto" />
                </div>
              )}

              <div className="relative glass-card rounded-2xl p-6 lg:p-7 hover:border-green-500/30 transition-all duration-300 group-hover:-translate-y-1">
                {/* Number monospace */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-xl bg-green-500/10 border border-green-500/25 flex items-center justify-center group-hover:bg-green-500/15 group-hover:scale-110 transition-all duration-300">
                    <step.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <span className="text-3xl font-mono font-black text-white/10 group-hover:text-green-500/30 transition-colors">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-white mb-2.5">
                  {step.title}
                </h3>
                <p className="text-sm text-white/55 leading-relaxed">
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
