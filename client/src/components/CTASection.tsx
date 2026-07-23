import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";

const benefits = [
  "30 dias grátis, sem cartão",
  "Cancele quando quiser",
  "Suporte humano durante o teste",
  "Migração de dados sem custo",
];

export default function CTASection() {
  const [, navigate] = useLocation();

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-[#0B1622]">
      <div className="absolute inset-0 bg-grid mask-radial pointer-events-none" />
      <div className="absolute inset-0 mesh-cta pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden max-w-5xl mx-auto"
        >
          {/* Background gradiente verde escuro */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/30 via-green-500/15 to-[#0B1622]" />
          <div className="absolute inset-0 bg-[#0B1622]/40" />

          {/* Conic glow orbital */}
          <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] opacity-15 pointer-events-none">
            <div className="absolute inset-0 conic-glow blur-3xl" />
          </div>

          <div className="relative z-10 px-8 py-16 lg:px-16 lg:py-20 text-center border border-white/10 rounded-3xl glow-brand">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/15 border border-green-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-green-400" />
              <span className="text-sm font-bold text-green-400 uppercase tracking-wider">
                Teste Grátis
              </span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-6xl text-white mb-5 max-w-3xl mx-auto leading-[1.05]">
              Experimente{" "}
              <span className="gradient-green">30 dias grátis</span>.
              <br />
              Decida depois.
            </h2>
            <p className="text-lg lg:text-xl text-white/65 max-w-2xl mx-auto mb-8">
              Sem cartão, sem pegadinha. Só você usando a CrescIX no seu
              negócio e vendo o trabalho manual sumir.
            </p>

            {/* Benefícios */}
            <div className="grid sm:grid-cols-2 gap-3 max-w-xl mx-auto mb-10 text-left">
              {benefits.map((b) => (
                <div
                  key={b}
                  className="flex items-center gap-2.5 text-sm text-white/80"
                >
                  <div className="w-5 h-5 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-green-400" />
                  </div>
                  {b}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                onClick={() => navigate("/teste-gratis")}
                size="lg"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-display font-bold text-base px-8 py-6 rounded-xl shadow-xl shadow-green-500/30 hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:-translate-y-0.5 glow-brand-hover group"
              >
                Quero começar agora
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <a
                href="https://wa.me/5535984219965?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20a%20CrescIX%20IA..."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/5 border-white/15 text-white hover:bg-white/10 hover:border-white/30 font-display font-semibold text-base px-8 py-6 rounded-xl transition-all duration-300"
                >
                  Falar antes
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
