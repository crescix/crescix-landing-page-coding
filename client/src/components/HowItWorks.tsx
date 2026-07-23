import { MessageSquare, Brain, Database, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

type StepAccent = "green" | "cyan" | "amber";

const accentClasses: Record<
  StepAccent,
  { bg: string; border: string; text: string; hoverBg: string; numHover: string }
> = {
  green: {
    bg: "bg-green-500/10",
    border: "border-green-500/25",
    text: "text-green-400",
    hoverBg: "group-hover:bg-green-500/15",
    numHover: "group-hover:text-green-500/40",
  },
  cyan: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/25",
    text: "text-cyan-400",
    hoverBg: "group-hover:bg-cyan-500/15",
    numHover: "group-hover:text-cyan-500/40",
  },
  amber: {
    bg: "bg-amber-500/10",
    border: "border-amber-500/25",
    text: "text-amber-400",
    hoverBg: "group-hover:bg-amber-500/15",
    numHover: "group-hover:text-amber-500/40",
  },
};

const steps: {
  icon: typeof MessageSquare;
  number: string;
  title: string;
  description: string;
  accent: StepAccent;
}[] = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Você manda no Telegram",
    description:
      'Áudio ou texto curto: "Vendi 4 águas a 3 reais", "Paguei 150 de aluguel". Sem app extra, sem formulário.',
    accent: "green",
  },
  {
    icon: Brain,
    number: "02",
    title: "A IA entende",
    description:
      "Whisper transcreve o áudio e a IA estrutura: tipo da operação, item, valor unitário, quantidade. Tudo em segundos.",
    accent: "cyan",
  },
  {
    icon: Database,
    number: "03",
    title: "Você confirma",
    description:
      "O bot mostra um resumo do que entendeu. Você clica em ✅ e o lançamento entra direto no caixa do CrescIX.",
    accent: "amber",
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "Tudo guardado",
    description:
      "Dados criptografados, multi-tenancy, relatórios em planilha quando quiser. Sem perda, sem retrabalho.",
    accent: "green",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="py-24 lg:py-32 relative overflow-hidden bg-[#0B1622]"
    >
      <div className="absolute inset-0 bg-grid-dim mask-radial pointer-events-none" />
      <div className="absolute inset-0 mesh-howitworks pointer-events-none" />

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
            <span className="gradient-green-cyan">Zero fricção.</span>
          </h2>
          <p className="text-lg text-white/75 max-w-2xl mx-auto">
            Conversa normal no Telegram entra como lançamento estruturado no
            seu painel financeiro.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
          {steps.map((step, index) => {
            const a = accentClasses[step.accent];
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="relative group"
              >
                {/* Connector: gradient verde -> cyan pra sugerir progressão */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full z-0">
                    <div className="h-px w-[80%] mx-auto bg-gradient-to-r from-green-500/40 via-cyan-500/30 to-transparent" />
                  </div>
                )}

                <div className="relative glass-card rounded-2xl p-6 lg:p-7 hover:border-white/20 transition-all duration-300 group-hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-14 h-14 rounded-xl ${a.bg} border ${a.border} flex items-center justify-center ${a.hoverBg} group-hover:scale-110 transition-all duration-300`}
                    >
                      <step.icon className={`w-6 h-6 ${a.text}`} />
                    </div>
                    <span
                      className={`text-3xl font-mono font-black text-white/10 ${a.numHover} transition-colors`}
                    >
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-white mb-2.5">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/75 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
