/*
 * CrescIX Social Proof — Fluid Data Streams Design
 * - Métricas de impacto + depoimentos
 */
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "A CrescIX revolucionou nosso atendimento. Antes perdíamos informações importantes nos áudios, agora tudo é organizado automaticamente.",
    author: "Ana Rodrigues",
    role: "CEO, TechStore",
    rating: 5,
  },
  {
    quote:
      "Economizamos mais de 20 horas por semana com a automação. Os dados chegam estruturados e prontos para uso no nosso CRM.",
    author: "Carlos Mendes",
    role: "Gerente Comercial, VendaMais",
    rating: 5,
  },
  {
    quote:
      "A segurança dos dados era nossa maior preocupação. Com a criptografia da CrescIX, nossos clientes confiam plenamente no processo.",
    author: "Dra. Patrícia Lima",
    role: "Diretora, Clínica Saúde+",
    rating: 5,
  },
];

export default function SocialProof() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #ffffff 0%, #f5f7fc 50%, #ffffff 100%)" }}>
      <div className="container relative z-10">
        {/* Testimonials header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#09636B]/10 text-[#09636B] text-sm font-semibold mb-4">
            Depoimentos
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#172A3A] mb-4">
            O que nossos clientes{" "}
            <span className="text-[#09636B]">dizem</span>
          </h2>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group"
            >
              <div className="h-full bg-white rounded-2xl p-7 border border-[#D8DDEF]/60 shadow-sm hover:shadow-lg hover:shadow-[#09636B]/5 transition-all duration-300 group-hover:-translate-y-1">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>

                <p className="text-[#172A3A]/65 text-sm leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#09636B] to-[#004346] flex items-center justify-center">
                    <span className="text-white text-sm font-bold">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-display font-semibold text-sm text-[#172A3A]">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-[#172A3A]/45">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
