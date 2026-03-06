import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Mic, ShieldCheck, CheckCircle2, BotMessageSquare, BotMessageSquareIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{
        background: "linear-gradient(135deg, #f0f2fa 0%, #D8DDEF 30%, #e8f0f5 60%, #f5f7fc 100%)",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-[#A3C3D9]/20 blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#09636B]/10 blur-[80px]" />
      <div className="absolute top-1/2 left-1/3 w-[200px] h-[200px] rounded-full bg-[#508991]/10 blur-[60px]" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-[55fr_45fr] gap-12 lg:gap-8 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl leading-[1.1] tracking-tight text-[#172A3A] mb-6">
              Transforme{" "}
              <span className="relative">
                <span className="relative z-10 text-[#09636B]">áudios e mensagens</span>
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-[#A3C3D9]/30 -z-0 rounded-sm" />
              </span>{" "}
              em dados organizados com IA
            </h1>

            <p className="text-lg lg:text-xl text-[#172A3A]/65 leading-relaxed mb-8 max-w-xl">
              A CrescIX converte automaticamente suas conversas do Telegram em informações
              estruturadas, organizadas e seguras. Automatize processos, venda mais e
              mantenha tudo sob controle.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="https://wa.me/5535984219965?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20a%20CrescIX%20IA..."
                target="_blank"
                rel="noopener noreferrer"
              >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#09636B] to-[#004346] hover:from-[#004346] hover:to-[#172A3A] text-white font-display font-bold text-base px-8 py-6 rounded-xl shadow-xl shadow-[#09636B]/25 hover:shadow-2xl hover:shadow-[#004346]/30 transition-all duration-300 hover:-translate-y-0.5 group"
              >
                Testar Agora
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              </a>
              
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
              <Button
                size="lg"
                variant="outline"
                className="bg-white/60 border-[#A3C3D9]/50 text-[#172A3A] font-display font-semibold text-base px-8 py-6 rounded-xl hover:bg-white/80 hover:border-[#09636B]/30 transition-all duration-300 group"
              >
                <Play className="mr-2 w-5 h-5 text-[#09636B] group-hover:scale-110 transition-transform" />
                Ver Vídeo
              </Button>
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-[#172A3A]/50">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#09636B]" />
                <span>Criptografia de ponta</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#09636B]" />
                <span>Setup em 5 minutos</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Telegram Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Phone mockup with generated image */}
              <div
                className="relative w-[320px] sm:w-[420px] lg:w-[500px] rounded-[2rem] overflow-hidden shadow-2xl shadow-[#172A3A]/20"
                style={{ animation: "float 6s ease-in-out infinite" }}
              >
                <img
                  src="/images/hero-section-image.png" alt="CrescIX Telegram IA - Conversão de áudios em dados estruturados" className="w-full h-auto"
                />
              </div>

              {/* Floating chat bubble - Audio sent */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -left-8 sm:-left-16 top-1/2 glass-card-light rounded-2xl p-3.5 shadow-xl max-w-[200px]"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center">
                    <Mic className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#172A3A]">Áudio enviado</p>
                    <p className="text-[10px] text-[#172A3A]/50">0:15</p>
                  </div>
                </div>
                <div className="flex gap-0.5 items-center">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 bg-[#25D366] rounded-full"
                      style={{ height: `${Math.random() * 16 + 4}px` }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Floating chat bubble - AI Response */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -right-2 sm:-right-6 bottom-1/4 glass-card-light rounded-2xl p-3.5 shadow-xl max-w-[200px]"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#09636B] to-[#004346] flex items-center justify-center">
                    <BotMessageSquare className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-xs font-semibold text-[#172A3A]">CrescIX IA</p>
                </div>
                <div className="space-y-1.5 text-[11px] text-[#172A3A]/70 font-mono">
                  <p className="text-[#09636B] font-semibold">Dados extraídos:</p>
                  <p>Cliente: Lucas Moreira</p>
                  <p>Pedido: 3x Produto A</p>
                  <p>Total: R$ 450,00</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
