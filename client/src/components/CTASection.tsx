import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/security-image.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#172A3A]/95 via-[#004346]/90 to-[#172A3A]/80" />

          <div className="relative z-10 px-8 py-16 lg:px-16 lg:py-20 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-6">
              <ShieldCheck className="w-4 h-4 text-[#A3C3D9]" />
              <span className="text-sm font-medium text-[#A3C3D9]">
                Segurança e privacidade garantidas
              </span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-4 max-w-3xl mx-auto leading-tight">
              Comece a automatizar seu negócio{" "}
              <span className="text-[#A3C3D9]">agora mesmo</span>
            </h2>
            <p className="text-lg text-white/55 max-w-2xl mx-auto mb-8">
              Transforme seu negócio com mais eficiência e menos trabalho manual com a CrescIX.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#004346] hover:bg-[#D8DDEF] font-display font-bold text-base px-8 py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 group"
              >
                Testar Agora — É Grátis
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 font-display font-semibold text-base px-8 py-6 rounded-xl transition-all duration-300"
              >
                Agendar Demonstração
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
