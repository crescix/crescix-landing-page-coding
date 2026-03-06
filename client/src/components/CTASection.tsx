import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const SECURITY_IMG = "https://private-us-east-1.manuscdn.com/sessionFile/NILrLvhOseMgl2wuRyzK9T/sandbox/JIQattWdqpo9ecdM28nzWV-img-3_1771841716000_na1fn_Y3Jlc2NpeC1zZWN1cml0eQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTklMckx2aE9zZU1nbDJ3dVJ5eks5VC9zYW5kYm94L0pJUWF0dFdkcXBvOWVjZE0yOG56V1YtaW1nLTNfMTc3MTg0MTcxNjAwMF9uYTFmbl9ZM0psYzJOcGVDMXpaV04xY21sMGVRLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Mlrd5EoTKYY~TZEK8AmmABv8Am8EniWIG1rFeVKlWCmpnn9WnKQHZlvV4lXb36oKLWosPzexaJu4AzjcOfeqNrUDS5ZQAmkZgMgsET2GnI9XDSTcrYRmXyk9XqwJrm9~EVXkTzuGBLzB7EFj5ZjIBPv0-16vLEvh3IxJ9E~oD1VmTls-RMV5MADGEHQ7gP2alIkrM0yl5nVQmlQR3LQww-l1vD53IgRgWJaREpEWnMik~6RDEqkM0k6XsFY039qUHcDRmUaxks7mftUTdC7F54BNEPg52FlAFvbb7y2bFtGLjZ9k0mE6Ets7ea5b5cYpkDSLpZVGXKLrXpl2mYv-3Q__";

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
            style={{ backgroundImage: `url(${SECURITY_IMG})` }}
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
              Junte-se a centenas de empresas que já estão economizando tempo e
              aumentando vendas com a CrescIX.
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
