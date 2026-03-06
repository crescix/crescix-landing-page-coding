/*
 * CrescIX "Recursos" — Fluid Data Streams Design
 * - Grid de features com ícones e glassmorphism cards
 * - Imagem gerada de automação como destaque
 */
import {
  Mic,
  FileText,
  BarChart3,
  Lock,
  Zap,
  Users,
  Bell,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";

const AUTOMATION_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/NILrLvhOseMgl2wuRyzK9T/sandbox/JIQattWdqpo9ecdM28nzWV-img-4_1771841711000_na1fn_Y3Jlc2NpeC1hdXRvbWF0aW9u.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTklMckx2aE9zZU1nbDJ3dVJ5eks5VC9zYW5kYm94L0pJUWF0dFdkcXBvOWVjZE0yOG56V1YtaW1nLTRfMTc3MTg0MTcxMTAwMF9uYTFmbl9ZM0psYzJOcGVDMWhkWFJ2YldGMGFXOXUucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=gDS724Ik7e4XmUV2hRGNMWy~QoNL8Qjc9Q2CuOpb9INUembxNgc3wrJhfJJNxnikHpCF8r1sSXkxBi5FMpj3~hnb4~jTicgLPG6h10iXM5pjbc~K5OouYfWrTEQkZh2dY8MxW2Hl0r8bKYqgHzBzyaOfhmx76k-Q-wWf1foriaoMMu~i~bSxKJ353D9TM3S0WHHxtGrRt4OwBeG9bJsTfox551EaeYYYcEUNv9NvT-q1Ogezmm0qH8oplzd2P0PMDBETnOEkx6gHe1lfIfdZx2KV~QEQqx-fPMn5sxdO3Xzf64rB4tAZg-bXNKjONx5VJY0hU7nNUwnC60oO1SmVFg__";

const features = [
  {
    icon: Mic,
    title: "Transcrição de Áudios",
    description:
      "Converta áudios do Telegram em texto com precisão usando IA avançada de reconhecimento de voz.",
  },
  {
    icon: FileText,
    title: "Texto Estruturado",
    description:
      "Mensagens são automaticamente organizadas em formato estruturado, prontas para análise e ação.",
  },
  {
    icon: BarChart3,
    title: "Extração de Dados",
    description:
      "Dados como pedidos, feedbacks e informações-chave são extraídos automaticamente das conversas.",
  },
  {
    icon: Lock,
    title: "Criptografia de Ponta",
    description:
      "Todos os dados são protegidos com criptografia avançada end-to-end, garantindo total privacidade.",
  },
  {
    icon: Zap,
    title: "Economia de Tempo",
    description:
      "Reduza o trabalho manual e dedique mais tempo às áreas estratégicas do seu negócio.",
  },
  {
    icon: Globe,
    title: "Gestão do Negócio",
    description:
      "Gerencie facilmente informações de clientes, compras e histórico em um local centralizado.",
  },
];

export default function Features() {
  return (
    <section id="recursos" className="py-24 lg:py-32 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #ffffff 0%, #f5f7fc 100%)" }}>
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
            Recursos
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#172A3A] mb-4">
            Tudo que você precisa para{" "}
            <span className="text-[#09636B]">crescer</span>
          </h2>
          <p className="text-lg text-[#172A3A]/55 max-w-2xl mx-auto">
            Ferramentas poderosas de IA para transformar suas conversas em resultados concretos.
          </p>
        </motion.div>

        {/* Featured image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 rounded-2xl overflow-hidden shadow-2xl shadow-[#172A3A]/10 max-w-4xl mx-auto"
        >
          <img
            src={AUTOMATION_IMG}
            alt="CrescIX - Automação e organização de dados com IA"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group"
            >
              <div className="h-full bg-white rounded-2xl p-6 border border-[#D8DDEF]/60 hover:border-[#09636B]/20 shadow-sm hover:shadow-lg hover:shadow-[#09636B]/5 transition-all duration-300 group-hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-[#D8DDEF]/50 flex items-center justify-center mb-4 group-hover:bg-[#09636B]/10 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-[#09636B]" />
                </div>
                <h3 className="font-display font-bold text-base text-[#172A3A] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#172A3A]/55 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
