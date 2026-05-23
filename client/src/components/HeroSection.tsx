import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Mic,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";

export default function HeroSection() {
  const [, navigate] = useLocation();

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16 bg-[#0B1622]"
    >
      {/* Grid pattern de fundo */}
      <div className="absolute inset-0 bg-grid mask-radial pointer-events-none" />

      {/* Glow orbs */}
      <div className="absolute top-1/3 right-[10%] w-[500px] h-[500px] rounded-full bg-green-500/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-[5%] w-[400px] h-[400px] rounded-full bg-green-600/15 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 w-[250px] h-[250px] rounded-full bg-cyan-500/10 blur-[80px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-[55fr_45fr] gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-500/10 border border-green-500/25 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-xs font-semibold text-green-400 uppercase tracking-wider">
                IA financeira para PMEs
              </span>
            </motion.div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl leading-[1.05] tracking-tight text-white mb-6">
              Sua gestão financeira{" "}
              <span className="relative inline-block">
                <span className="relative z-10 gradient-green">
                  no automático.
                </span>
                <span className="absolute -inset-1 bg-green-500/10 blur-2xl rounded-full -z-0" />
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-white/70 leading-relaxed mb-8 max-w-xl">
              Mande um <span className="text-white font-semibold">áudio</span>{" "}
              ou <span className="text-white font-semibold">texto</span> pelo
              Telegram. A CrescIX entende, registra e organiza vendas, despesas
              e compras do seu negócio. Tudo sob controle, em segundos.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Button
                onClick={() => navigate("/teste-gratis")}
                size="lg"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-display font-bold text-base px-8 py-6 rounded-xl shadow-xl shadow-green-500/30 hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:-translate-y-0.5 glow-brand-hover group"
              >
                <Sparkles className="mr-2 w-5 h-5" />
                Começar teste grátis
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
                  className="bg-white/5 border-white/15 text-white hover:bg-white/10 hover:border-green-500/40 font-display font-semibold text-base px-8 py-6 rounded-xl transition-all duration-300"
                >
                  Falar no WhatsApp
                </Button>
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/50">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-green-400" />
                <span>Dados criptografados</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span>Setup em 2 minutos</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span>7 dias grátis</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Terminal mockup com chat */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              {/* Halo */}
              <div className="absolute inset-0 -m-8 rounded-3xl bg-gradient-to-br from-green-500/20 to-green-600/10 blur-3xl" />

              {/* Terminal card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
                className="relative terminal p-1 overflow-hidden"
              >
                {/* Title bar */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/70" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <span className="w-3 h-3 rounded-full bg-green-500/70" />
                  </div>
                  <span className="text-xs text-white/40 font-mono">
                    crescix-bot · telegram
                  </span>
                  <div className="w-12" />
                </div>

                {/* Chat content */}
                <div className="p-5 space-y-3 text-sm font-mono">
                  {/* Audio incoming */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex gap-2"
                  >
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-xs">
                      👤
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-md px-3 py-2 max-w-[80%]">
                      <div className="flex items-center gap-2">
                        <Mic className="w-3.5 h-3.5 text-green-400" />
                        <div className="flex gap-0.5 items-center">
                          {[...Array(18)].map((_, i) => (
                            <div
                              key={i}
                              className="w-0.5 bg-green-400 rounded-full"
                              style={{ height: `${6 + ((i * 7) % 14)}px` }}
                            />
                          ))}
                        </div>
                        <span className="text-[10px] text-white/40">0:14</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Bot processing */}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                    className="flex gap-2 justify-end"
                  >
                    <div className="bg-green-500/15 border border-green-500/25 rounded-2xl rounded-tr-md px-3 py-2 max-w-[85%]">
                      <p className="text-green-400 text-xs uppercase tracking-wider font-semibold mb-1.5">
                        Entendi ✓
                      </p>
                      <div className="space-y-0.5 text-[11px] text-white/70">
                        <p>
                          <span className="text-white/40">Tipo:</span>{" "}
                          <span className="text-green-300">Venda</span>
                        </p>
                        <p>
                          <span className="text-white/40">Item:</span>{" "}
                          <span className="text-white">4 águas</span>
                        </p>
                        <p>
                          <span className="text-white/40">Unitário:</span>{" "}
                          <span className="text-white">R$ 3,00</span>
                        </p>
                        <p className="pt-1 border-t border-green-500/20 mt-1">
                          <span className="text-white/40">Total:</span>{" "}
                          <span className="text-green-400 font-bold">
                            R$ 12,00
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">
                      IX
                    </div>
                  </motion.div>

                  {/* User confirm */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4 }}
                    className="flex gap-2"
                  >
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-xs">
                      👤
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-md px-3 py-2">
                      <p className="text-white/80 text-xs">✅ Confirmar</p>
                    </div>
                  </motion.div>

                  {/* Saved */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.8 }}
                    className="flex gap-2 justify-end"
                  >
                    <div className="bg-green-500/15 border border-green-500/25 rounded-2xl rounded-tr-md px-3 py-2">
                      <p className="text-green-400 text-xs flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Salvo no caixa
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">
                      IX
                    </div>
                  </motion.div>

                  {/* Typing indicator */}
                  <div className="flex gap-2 pt-1">
                    <span className="text-white/30 text-xs">
                      digitando<span className="animate-blink">_</span>
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Floating metric card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.2 }}
                className="absolute -bottom-6 -left-6 glass-card-strong rounded-2xl p-4 shadow-2xl shadow-green-500/10"
              >
                <p className="text-[10px] text-white/40 uppercase tracking-wider mb-1">
                  Receita do mês
                </p>
                <p className="text-2xl font-black text-green-400 font-display tabular-nums">
                  R$ 18.430
                </p>
                <p className="text-[10px] text-green-400/60 mt-0.5 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  +12,4% vs último mês
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
