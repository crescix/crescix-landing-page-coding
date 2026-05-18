import { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import {
  ArrowLeft,
  Star,
  Send,
  Loader2,
  CheckCircle2,
  Sparkles,
  Heart,
  ThumbsUp,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface FeedbackForm {
  nps: number | null;
  recurso_top: string;
  o_que_mudar: string;
  email: string;
  pagaria: string;
}

const RECURSOS = [
  "Áudio do Telegram virando lançamento",
  "Painel financeiro (fluxo de caixa)",
  "Relatórios em planilha",
  "Conta a receber automática",
  "Controle de estoque",
  "Pedidos / orçamentos",
];

const PAGARIA_OPTS = [
  "Sim, com certeza",
  "Sim, com algumas melhorias",
  "Talvez, depende do preço",
  "Ainda não",
];

export default function Feedback() {
  const [, navigate] = useLocation();
  const [form, setForm] = useState<FeedbackForm>({
    nps: null,
    recurso_top: "",
    o_que_mudar: "",
    email: "",
    pagaria: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canSubmit = form.nps !== null && form.o_que_mudar.trim().length >= 5;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitting(true);
    setError(null);
    try {
      const data = new FormData();
      data.append("nps", String(form.nps));
      data.append("recurso_top", form.recurso_top || "(não respondido)");
      data.append("o_que_mudar", form.o_que_mudar);
      data.append("email", form.email || "(anônimo)");
      data.append("pagaria", form.pagaria || "(não respondido)");
      data.append("_subject", `[CrescIX] Feedback NPS ${form.nps}`);

      const res = await fetch("https://formspree.io/f/xyknelaq", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (!res.ok) throw new Error("falha");
      setDone(true);
    } catch {
      setError("Não conseguimos enviar agora. Tente novamente.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1622] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-dim mask-radial pointer-events-none" />
      <div className="absolute top-1/4 right-[10%] w-[400px] h-[400px] rounded-full bg-green-500/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-[5%] w-[400px] h-[400px] rounded-full bg-green-600/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 container py-8 lg:py-16">
        <div className="flex items-center justify-between mb-10 lg:mb-12">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </button>
          <img
            src={`${import.meta.env.BASE_URL}images/logo.png`}
            alt="CrescIX"
            className="w-28 h-auto rounded-md"
          />
        </div>

        <div className="max-w-2xl mx-auto">
          {!done ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/25 mb-5">
                  <Heart className="w-3.5 h-3.5 text-green-400" />
                  <span className="text-xs font-bold text-green-400 uppercase tracking-wider">
                    Feedback do teste
                  </span>
                </div>
                <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.1] mb-3">
                  E aí, como foi a{" "}
                  <span className="gradient-green">experiência?</span>
                </h1>
                <p className="text-white/60 max-w-lg mx-auto">
                  Leva 2 minutos. Seu feedback molda o produto pros próximos
                  empresários que vão usar.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="glass-card-strong rounded-2xl p-6 lg:p-8 space-y-8"
              >
                {/* NPS 0-10 */}
                <div>
                  <label className="block text-white font-display font-bold text-base mb-2">
                    Você indicaria a CrescIX pra um amigo dono de negócio?
                  </label>
                  <p className="text-white/50 text-sm mb-5">
                    0 = jamais · 10 = com certeza
                  </p>
                  <div className="grid grid-cols-11 gap-1.5">
                    {Array.from({ length: 11 }).map((_, n) => {
                      const selected = form.nps === n;
                      const color =
                        n <= 6
                          ? "hover:bg-red-500/20 hover:border-red-500/40"
                          : n <= 8
                          ? "hover:bg-yellow-500/20 hover:border-yellow-500/40"
                          : "hover:bg-green-500/20 hover:border-green-500/40";
                      const selectedColor =
                        n <= 6
                          ? "bg-red-500/30 border-red-500/60 text-red-200"
                          : n <= 8
                          ? "bg-yellow-500/30 border-yellow-500/60 text-yellow-200"
                          : "bg-green-500/30 border-green-500/60 text-green-200";
                      return (
                        <button
                          key={n}
                          type="button"
                          onClick={() => setForm((p) => ({ ...p, nps: n }))}
                          className={`h-12 rounded-lg border text-sm font-bold transition-all ${
                            selected
                              ? `${selectedColor} scale-105`
                              : `bg-white/5 border-white/10 text-white/70 ${color}`
                          }`}
                        >
                          {n}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Recurso top */}
                <div>
                  <label className="block text-white font-display font-bold text-base mb-2">
                    Qual recurso mais te ajudou?
                  </label>
                  <p className="text-white/50 text-sm mb-4">
                    Escolha o que mais salvou seu tempo durante o teste.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {RECURSOS.map((r) => {
                      const selected = form.recurso_top === r;
                      return (
                        <button
                          key={r}
                          type="button"
                          onClick={() =>
                            setForm((p) => ({ ...p, recurso_top: r }))
                          }
                          className={`text-left px-3.5 py-2.5 rounded-lg text-sm transition-all border ${
                            selected
                              ? "bg-green-500/15 border-green-500/40 text-white"
                              : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:border-white/20"
                          }`}
                        >
                          {selected && (
                            <ThumbsUp className="inline w-3.5 h-3.5 text-green-400 mr-1.5" />
                          )}
                          {r}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* O que mudar */}
                <div>
                  <label className="text-white font-display font-bold text-base mb-2 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-green-400" />O que
                    você mudaria? <span className="text-red-400">*</span>
                  </label>
                  <p className="text-white/50 text-sm mb-3">
                    Pode ser bug, dificuldade no setup, recurso que faltou,
                    UX confusa. Tudo conta.
                  </p>
                  <textarea
                    value={form.o_que_mudar}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, o_que_mudar: e.target.value }))
                    }
                    rows={5}
                    placeholder="Solta o verbo aí... a gente quer saber."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500/40 transition-all resize-none"
                    required
                  />
                </div>

                {/* Pagaria */}
                <div>
                  <label className="block text-white font-display font-bold text-base mb-2">
                    Pagaria pra continuar usando?
                  </label>
                  <p className="text-white/50 text-sm mb-4">
                    Sem compromisso. É só pra entender o quanto somos úteis.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {PAGARIA_OPTS.map((opt) => {
                      const selected = form.pagaria === opt;
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() =>
                            setForm((p) => ({ ...p, pagaria: opt }))
                          }
                          className={`text-left px-3.5 py-2.5 rounded-lg text-sm transition-all border ${
                            selected
                              ? "bg-green-500/15 border-green-500/40 text-white"
                              : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:border-white/20"
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Email opcional */}
                <div>
                  <label className="block text-xs font-bold text-white/70 uppercase tracking-wider mb-2">
                    Seu e-mail (opcional)
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, email: e.target.value }))
                    }
                    placeholder="seu@email.com (pra gente poder responder)"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500/40 transition-all"
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-400 text-center">{error}</p>
                )}

                <Button
                  type="submit"
                  disabled={!canSubmit || submitting}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-display font-bold py-6 rounded-xl shadow-lg shadow-green-500/30 transition-all disabled:opacity-50 glow-brand-hover"
                >
                  {submitting ? (
                    <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="mr-2 w-5 h-5" />
                  )}
                  {submitting ? "Enviando..." : "Enviar feedback"}
                </Button>

                {!canSubmit && (
                  <p className="text-xs text-white/40 text-center -mt-4">
                    Preencha o NPS e &ldquo;o que mudaria&rdquo; pra enviar.
                  </p>
                )}
              </form>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="inline-flex w-20 h-20 rounded-full bg-green-500/15 border border-green-500/30 items-center justify-center mb-6 glow-brand">
                <CheckCircle2 className="w-10 h-10 text-green-400" />
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-3">
                Recebido!{" "}
                <span className="gradient-green">Muito obrigado.</span>
              </h2>
              <p className="text-lg text-white/70 max-w-md mx-auto mb-8">
                Cada palavra vai pro nosso quadro. As próximas versões do
                produto vão refletir o que você compartilhou.
              </p>

              {form.email && (
                <p className="text-sm text-white/50 mb-8">
                  Se fizer sentido a gente responder, te chamamos em{" "}
                  <span className="text-white font-medium">{form.email}</span>.
                </p>
              )}

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  onClick={() => navigate("/")}
                  variant="outline"
                  className="bg-white/5 border-white/15 text-white hover:bg-white/10"
                >
                  Voltar pra inicial
                </Button>
                <a
                  href="https://wa.me/5535984219965?text=Oi,%20acabei%20de%20enviar%20o%20feedback%20do%20teste%20e%20gostaria%20de%20continuar%20a%20conversa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-display font-bold">
                    <Sparkles className="mr-2 w-4 h-4" />
                    Continuar conversa no WhatsApp
                  </Button>
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
