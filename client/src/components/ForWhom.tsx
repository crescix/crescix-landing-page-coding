import { Store, Briefcase, Headphones, ShoppingCart, Building2, Stethoscope } from "lucide-react";
import { motion } from "framer-motion";

const audiences = [
  {
    icon: Store,
    title: "Empreendedores",
    description:
      "Automatize o atendimento e organize pedidos, informações e feedbacks sem esforço manual.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerces",
    description:
      "Capture pedidos via Telegram e transforme-os em dados estruturados para seu sistema.",
  },
  {
    icon: Headphones,
    title: "Equipes de Suporte",
    description:
      "Registre e categorize tickets de suporte automaticamente a partir das conversas.",
  },
  {
    icon: Briefcase,
    title: "Consultores e Freelancers",
    description:
      "Organize briefings, feedbacks e informações de clientes de forma automática.",
  },
  {
    icon: Building2,
    title: "Pequenas e Médias Empresas",
    description:
      "Digitalize e automatize processos operacionais sem investir em sistemas complexos.",
  },
  {
    icon: Stethoscope,
    title: "Profissionais de Saúde",
    description:
      "Registre informações de pacientes de forma segura e organizada via Telegram.",
  },
];

export default function ForWhom() {
  return (
    <section
      id="para-quem"
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/for-whom-image.png')" }}
      />
      <div className="absolute inset-0 bg-[#172A3A]/85" />

      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#A3C3D9] text-sm font-semibold mb-4 border border-white/10">
            Para Quem
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Feito para quem quer{" "}
            <span className="text-[#A3C3D9]">resultados</span>
          </h2>
          <p className="text-lg text-white/55 max-w-2xl mx-auto">
            A CrescIX atende diferentes perfis de negócios que desejam organizar suas vendas e atendimentos de forma prática e eficiente.
          </p>
        </motion.div>

        {/* Audience grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full glass-card rounded-2xl p-6 lg:p-7 hover:bg-white/12 transition-all duration-300 group-hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-[#09636B]/20 flex items-center justify-center mb-4 group-hover:bg-[#09636B]/30 transition-colors">
                  <audience.icon className="w-6 h-6 text-[#A3C3D9]" />
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-2">
                  {audience.title}
                </h3>
                <p className="text-sm text-white/55 leading-relaxed">
                  {audience.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
