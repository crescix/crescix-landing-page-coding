import {
  Mic,
  FileText,
  BarChart3,
  Lock,
  Zap,
  Globe,
  Bot,
  Clock,
  FileSpreadsheet,
} from "lucide-react";
import { motion } from "framer-motion";

/**
 * accent: define a cor de destaque de cada feature.
 *  - "cyan"  = recursos de IA/tecnologia (transcrição, modelo, integrações)
 *  - "amber" = recursos de valor/dinheiro (dashboard, planilhas, contas)
 *  - "green" (default) = confiança/operação (segurança, setup, histórico)
 */
type FeatureAccent = "green" | "cyan" | "amber";

const accentStyles: Record<FeatureAccent, { bg: string; border: string; text: string; hoverBg: string }> = {
  green: {
    bg: "bg-green-500/10",
    border: "border-green-500/25",
    text: "text-green-400",
    hoverBg: "group-hover:bg-green-500/15",
  },
  cyan: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/25",
    text: "text-cyan-400",
    hoverBg: "group-hover:bg-cyan-500/15",
  },
  amber: {
    bg: "bg-amber-500/10",
    border: "border-amber-500/25",
    text: "text-amber-400",
    hoverBg: "group-hover:bg-amber-500/15",
  },
};

const features: { icon: typeof Mic; title: string; description: string; accent: FeatureAccent }[] = [
  {
    icon: Mic,
    title: "Transcrição de áudio",
    description:
      "Mande um áudio rapidinho enquanto atende o cliente. O Whisper transcreve em pt-BR com precisão.",
    accent: "cyan",
  },
  {
    icon: Bot,
    title: "IA com escopo restrito",
    description:
      "Modelo blindado contra jailbreak. Responde só sobre vendas, compras, despesas e relatórios. Foco no que importa.",
    accent: "cyan",
  },
  {
    icon: BarChart3,
    title: "Painel financeiro completo",
    description:
      "Dashboard, fluxo de caixa, contas a pagar e receber, estoque e pedidos. Tudo conectado pelo mesmo backend.",
    accent: "amber",
  },
  {
    icon: FileSpreadsheet,
    title: "Planilhas sob demanda",
    description:
      'Peça "planilha das vendas da semana por dia" e receba o Excel formatado no chat. Agrupamento, filtros e totais.',
    accent: "amber",
  },
  {
    icon: Lock,
    title: "Multi-tenancy seguro",
    description:
      "Cada negócio tem seus dados isolados. JWT, rate limiting e criptografia bcrypt. Pronto pra produção.",
    accent: "green",
  },
  {
    icon: Clock,
    title: "Setup em 2 minutos",
    description:
      "Cadastro, pareamento do Telegram e primeira venda registrada em menos de 2 minutos.",
    accent: "green",
  },
  {
    icon: Zap,
    title: "Conta a receber automática",
    description:
      "Pedido faturado vira conta a receber sozinho, com forma de pagamento mapeada. Sem retrabalho.",
    accent: "amber",
  },
  {
    icon: FileText,
    title: "Histórico imutável",
    description:
      "Movimentações de estoque não podem ser editadas, só compensadas via ajuste manual. Auditoria sempre íntegra.",
    accent: "green",
  },
  {
    icon: Globe,
    title: "Acesso em qualquer lugar",
    description:
      "Web responsiva + bot Telegram + futuras integrações. Você gerencia de onde quiser.",
    accent: "cyan",
  },
];

export default function Features() {
  return (
    <section
      id="recursos"
      className="py-24 lg:py-32 relative overflow-hidden bg-[#0B1622]"
    >
      {/* Subtle gradient transition */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0B1622] to-transparent pointer-events-none" />

      {/* Mesh gradient de fundo */}
      <div className="absolute inset-0 mesh-features pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20 max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/25 text-green-400 text-xs font-bold uppercase tracking-wider mb-4">
            Recursos
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Tudo que sua PME precisa.{" "}
            <span className="gradient-green-cyan">Em um só lugar.</span>
          </h2>
          <p className="text-lg text-white/75">
            Construído pra empresários que querem foco no negócio, não em
            ferramenta. Cada recurso resolve uma dor real.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => {
            const a = accentStyles[feature.accent];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
                className="group"
              >
                <div className="h-full glass-card rounded-2xl p-6 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 group-hover:-translate-y-1 relative overflow-hidden">
                  <div className="relative">
                    <div
                      className={`w-12 h-12 rounded-xl ${a.bg} border ${a.border} flex items-center justify-center mb-4 ${a.hoverBg} transition-all`}
                    >
                      <feature.icon className={`w-5 h-5 ${a.text}`} />
                    </div>
                    <h3 className="font-display font-bold text-base text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-white/75 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
