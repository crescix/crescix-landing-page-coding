import {
  Store,
  Coffee,
  Scissors,
  Wrench,
  ShoppingBag,
  Truck,
} from "lucide-react";
import { motion } from "framer-motion";

const audiences = [
  {
    icon: Store,
    title: "Comércio de bairro",
    description:
      "Loja, mercado, papelaria. Vende ao longo do dia e quer fechar o caixa sem planilha no fim do mês.",
  },
  {
    icon: Coffee,
    title: "Bares e lanchonetes",
    description:
      "Movimento corrido, valores variados, despesas constantes. Registra por áudio entre um pedido e outro.",
  },
  {
    icon: Scissors,
    title: "Salões e estúdios",
    description:
      "Serviços com agendamento, comissões e produtos. Vê o ticket médio e os custos do mês em segundos.",
  },
  {
    icon: Wrench,
    title: "Prestadores de serviço",
    description:
      "Eletricista, encanador, freelancer. Quer cobrar certo e saber quanto sobra no fim do mês.",
  },
  {
    icon: ShoppingBag,
    title: "Lojas online e vendedores",
    description:
      "Vende pelo Insta/WhatsApp e precisa de organização sem planilha gigante. CrescIX integra tudo.",
  },
  {
    icon: Truck,
    title: "Pequenas distribuidoras",
    description:
      "Estoque, fornecedores, vendedores em campo. Multi-usuário e relatórios sempre na mão.",
  },
];

export default function ForWhom() {
  return (
    <section
      id="para-quem"
      className="py-24 lg:py-32 relative overflow-hidden bg-[#0B1622]"
    >
      {/* Tech grid backdrop */}
      <div className="absolute inset-0 bg-grid-dim mask-radial pointer-events-none" />

      {/* Mesh gradient */}
      <div className="absolute inset-0 mesh-forwhom pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20 max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/25 text-green-400 text-xs font-bold uppercase tracking-wider mb-4">
            Para Quem
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Pensado pra quem{" "}
            <span className="gradient-green">vive o caixa todo dia.</span>
          </h2>
          <p className="text-lg text-white/75">
            Se você passa o dia atendendo, vendendo e correndo pra anotar tudo
            depois, a CrescIX foi feita pra te tirar dessa.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
              className="group"
            >
              <div className="h-full glass-card rounded-2xl p-6 lg:p-7 hover:border-green-500/30 hover:bg-white/[0.04] transition-all duration-300 group-hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/25 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <audience.icon className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-2">
                  {audience.title}
                </h3>
                <p className="text-sm text-white/75 leading-relaxed">
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
