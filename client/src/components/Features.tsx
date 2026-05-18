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

const features = [
  {
    icon: Mic,
    title: "Transcrição de áudio",
    description:
      "Mande um áudio rapidinho enquanto atende o cliente. O Whisper transcreve em pt-BR com precisão.",
  },
  {
    icon: Bot,
    title: "IA com escopo restrito",
    description:
      "Modelo blindado contra jailbreak — responde só sobre vendas, compras, despesas e relatórios. Foco no que importa.",
  },
  {
    icon: BarChart3,
    title: "Painel financeiro completo",
    description:
      "Dashboard, fluxo de caixa, contas a pagar/receber, estoque e pedidos — tudo conectado pelo mesmo backend.",
  },
  {
    icon: FileSpreadsheet,
    title: "Planilhas sob demanda",
    description:
      'Peça "planilha das vendas da semana por dia" e receba o Excel formatado no chat. Agrupamento, filtros e totais.',
  },
  {
    icon: Lock,
    title: "Multi-tenancy seguro",
    description:
      "Cada negócio tem seus dados isolados. JWT, rate limiting, criptografia bcrypt — pronto pra produção.",
  },
  {
    icon: Clock,
    title: "Setup em 2 minutos",
    description:
      "Cadastro, pareamento do Telegram, primeira venda registrada — tudo em menos de 120 segundos.",
  },
  {
    icon: Zap,
    title: "Conta a receber automática",
    description:
      "Pedido faturado vira conta a receber sozinho, com forma de pagamento mapeada. Sem retrabalho.",
  },
  {
    icon: FileText,
    title: "Histórico imutável",
    description:
      "Movimentações de estoque não podem ser editadas — só compensadas via ajuste manual. Auditoria sempre íntegra.",
  },
  {
    icon: Globe,
    title: "Acesso em qualquer lugar",
    description:
      "Web responsiva + bot Telegram + futuras integrações. Você gerencia de onde quiser.",
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

      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-green-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-cyan-500/8 blur-[100px] pointer-events-none" />

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
            <span className="gradient-green">Em um só lugar.</span>
          </h2>
          <p className="text-lg text-white/60">
            Construído pra empresários que querem foco no negócio, não em
            ferramenta. Cada recurso resolve uma dor real.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
              className="group"
            >
              <div className="h-full glass-card rounded-2xl p-6 hover:border-green-500/30 hover:bg-white/[0.04] transition-all duration-300 group-hover:-translate-y-1 relative overflow-hidden">
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 via-green-500/0 to-green-500/0 group-hover:from-green-500/5 group-hover:to-transparent transition-all duration-300 pointer-events-none" />

                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/25 flex items-center justify-center mb-4 group-hover:bg-green-500/15 transition-all">
                    <feature.icon className="w-5 h-5 text-green-400" />
                  </div>
                  <h3 className="font-display font-bold text-base text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-white/55 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
