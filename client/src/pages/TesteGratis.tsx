import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Check,
  Loader2,
  CheckCircle2,
  Mail,
  Building2,
  Phone,
  User,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";

type Step = 1 | 2 | 3 | "success";

interface FormState {
  name: string;
  email: string;
  phone: string;
  empresa: string;
  tipoComercio: string;
  funcionarios: string;
  desafio: string;
}

const TIPOS_COMERCIO = [
  "Comércio de bairro",
  "Bar / Lanchonete / Restaurante",
  "Salão / Estúdio / Beleza",
  "Serviços (eletricista, encanador, freelancer)",
  "E-commerce / Vendas pelo WhatsApp",
  "Distribuidora / Atacado",
  "Outro",
];

const FUNCIONARIOS_OPTS = ["Sozinho(a)", "2 a 5", "6 a 20", "Mais de 20"];

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  empresa: "",
  tipoComercio: "",
  funcionarios: "",
  desafio: "",
};

export default function TesteGratis() {
  useSEO({
    title: "Teste grátis | CrescIX",
    description:
      "Solicite seu acesso ao CrescIX e teste de graça por 30 dias. Sem cartão, sem compromisso. Só preencher e começar a usar.",
    canonicalPath: "/teste-gratis",
  });

  const [, navigate] = useLocation();
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((p) => ({ ...p, [key]: value }));

  const canAdvance = (() => {
    if (step === 1) return form.name.trim().length >= 2 && /\S+@\S+\.\S+/.test(form.email);
    if (step === 2) return form.empresa.trim().length >= 2 && !!form.tipoComercio;
    if (step === 3) return !!form.funcionarios;
    return false;
  })();

  const next = () => setStep((s) => ((s as number) + 1) as Step);
  const back = () => setStep((s) => ((s as number) - 1) as Step);

  const handleSubmit = async () => {
    if (!canAdvance) return;
    setSubmitting(true);
    setError(null);
    try {
      const data = new FormData();
      data.append("name", form.name);
      data.append("email", form.email);
      data.append("phone", form.phone);
      data.append("empresa", form.empresa);
      data.append("tipoComercio", form.tipoComercio);
      data.append("funcionarios", form.funcionarios);
      data.append("desafio", form.desafio);
      data.append("_subject", "[CrescIX] Pedido de teste grátis");

      const res = await fetch("https://formspree.io/f/xyknelaq", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (!res.ok) throw new Error("falha");
      setStep("success");
    } catch {
      setError("Não conseguimos enviar agora. Tente novamente em instantes.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1622] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-dim mask-radial pointer-events-none" />
      <div className="absolute top-1/4 right-[5%] w-[500px] h-[500px] rounded-full bg-green-500/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-[5%] w-[400px] h-[400px] rounded-full bg-green-600/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 container py-8 lg:py-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-10 lg:mb-16">
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
          <AnimatePresence mode="wait">
            {step !== "success" ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Tag + título */}
                <div className="text-center mb-10">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/25 mb-5">
                    <Sparkles className="w-3.5 h-3.5 text-green-400" />
                    <span className="text-xs font-bold text-green-400 uppercase tracking-wider">
                      30 dias grátis
                    </span>
                  </div>
                  <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.1] mb-3">
                    Vamos liberar seu{" "}
                    <span className="gradient-green">teste grátis</span>
                  </h1>
                  <p className="text-white/60">
                    Só 3 passos. Sem cartão. Em até 24h a gente libera o
                    acesso e te explica o setup.
                  </p>
                </div>

                {/* Progress */}
                <div className="flex items-center gap-2 mb-8 max-w-xs mx-auto">
                  {[1, 2, 3].map((n) => {
                    const filled = step >= (n as Step);
                    return (
                      <div
                        key={n}
                        className={`flex-1 h-1.5 rounded-full transition-all ${
                          filled ? "bg-green-500" : "bg-white/10"
                        }`}
                      />
                    );
                  })}
                  <span className="text-xs text-white/50 font-mono font-bold ml-2">
                    {step}/3
                  </span>
                </div>

                {/* Card form */}
                <div className="glass-card-strong rounded-2xl p-6 lg:p-8">
                  {step === 1 && (
                    <div className="space-y-5">
                      <h2 className="font-display font-bold text-xl text-white mb-1">
                        Quem é você?
                      </h2>
                      <p className="text-white/55 text-sm mb-6">
                        Pra gente te chamar pelo nome certo.
                      </p>

                      <Field label="Nome completo" icon={<User className="w-3.5 h-3.5" />}>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => update("name", e.target.value)}
                          placeholder="João da Silva"
                          className={inputCls}
                          autoFocus
                        />
                      </Field>

                      <Field label="E-mail" icon={<Mail className="w-3.5 h-3.5" />}>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => update("email", e.target.value)}
                          placeholder="joao@empresa.com"
                          className={inputCls}
                        />
                      </Field>

                      <Field label="WhatsApp (opcional)" icon={<Phone className="w-3.5 h-3.5" />}>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => update("phone", e.target.value)}
                          placeholder="(35) 99999-9999"
                          className={inputCls}
                        />
                      </Field>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-5">
                      <h2 className="font-display font-bold text-xl text-white mb-1">
                        Sobre o seu negócio
                      </h2>
                      <p className="text-white/55 text-sm mb-6">
                        Pra gente preparar o ambiente certo pra você.
                      </p>

                      <Field label="Nome da empresa" icon={<Building2 className="w-3.5 h-3.5" />}>
                        <input
                          type="text"
                          value={form.empresa}
                          onChange={(e) => update("empresa", e.target.value)}
                          placeholder="Mercado do João"
                          className={inputCls}
                          autoFocus
                        />
                      </Field>

                      <div>
                        <label className="text-xs font-bold text-white/70 uppercase tracking-wider block mb-2">
                          Tipo de negócio
                        </label>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {TIPOS_COMERCIO.map((t) => {
                            const selected = form.tipoComercio === t;
                            return (
                              <button
                                key={t}
                                type="button"
                                onClick={() => update("tipoComercio", t)}
                                className={`text-left px-3.5 py-2.5 rounded-lg text-sm transition-all border ${
                                  selected
                                    ? "bg-green-500/15 border-green-500/40 text-white"
                                    : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:border-white/20"
                                }`}
                              >
                                {selected && (
                                  <Check className="inline w-3.5 h-3.5 text-green-400 mr-1.5" />
                                )}
                                {t}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-5">
                      <h2 className="font-display font-bold text-xl text-white mb-1">
                        Última parte
                      </h2>
                      <p className="text-white/55 text-sm mb-6">
                        Pra entender o seu cenário e priorizar o setup.
                      </p>

                      <div>
                        <label className="text-xs font-bold text-white/70 uppercase tracking-wider block mb-2">
                          Tamanho da equipe
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {FUNCIONARIOS_OPTS.map((f) => {
                            const selected = form.funcionarios === f;
                            return (
                              <button
                                key={f}
                                type="button"
                                onClick={() => update("funcionarios", f)}
                                className={`px-3 py-3 rounded-lg text-sm transition-all border ${
                                  selected
                                    ? "bg-green-500/15 border-green-500/40 text-white font-semibold"
                                    : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"
                                }`}
                              >
                                {f}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <Field
                        label="Qual seu maior desafio hoje? (opcional)"
                        icon={<MessageSquare className="w-3.5 h-3.5" />}
                      >
                        <textarea
                          value={form.desafio}
                          onChange={(e) => update("desafio", e.target.value)}
                          rows={4}
                          placeholder="Ex.: perco vendas porque não anoto, gasto domingo inteiro fazendo planilha..."
                          className={`${inputCls} resize-none`}
                        />
                      </Field>
                    </div>
                  )}

                  {error && (
                    <p className="mt-4 text-sm text-red-400 text-center">
                      {error}
                    </p>
                  )}

                  {/* Nav buttons */}
                  <div className="flex items-center justify-between gap-3 mt-8 pt-6 border-t border-white/5">
                    {step > 1 ? (
                      <Button
                        type="button"
                        onClick={back}
                        variant="ghost"
                        className="text-white/70 hover:text-white hover:bg-white/5 px-4"
                      >
                        <ArrowLeft className="mr-1.5 w-4 h-4" />
                        Voltar
                      </Button>
                    ) : (
                      <div />
                    )}

                    {step < 3 ? (
                      <Button
                        type="button"
                        onClick={next}
                        disabled={!canAdvance}
                        className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-display font-bold px-6 disabled:opacity-50"
                      >
                        Continuar
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    ) : (
                      <Button
                        type="button"
                        onClick={handleSubmit}
                        disabled={!canAdvance || submitting}
                        className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-display font-bold px-6 glow-brand-hover disabled:opacity-60"
                      >
                        {submitting ? (
                          <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                        ) : (
                          <Sparkles className="mr-2 w-4 h-4" />
                        )}
                        {submitting ? "Enviando..." : "Quero meu acesso"}
                      </Button>
                    )}
                  </div>
                </div>

                <p className="text-center text-xs text-white/40 mt-6">
                  Seus dados ficam protegidos. Sem spam. A gente usa só pra
                  liberar seu acesso e dar suporte.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="inline-flex w-20 h-20 rounded-full bg-green-500/15 border border-green-500/30 items-center justify-center mb-6 glow-brand">
                  <CheckCircle2 className="w-10 h-10 text-green-400" />
                </div>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-3">
                  Pedido recebido,{" "}
                  <span className="gradient-green">{form.name.split(" ")[0]}</span>!
                </h2>
                <p className="text-lg text-white/70 max-w-md mx-auto mb-8">
                  Nossa equipe vai te chamar no WhatsApp em até{" "}
                  <span className="text-white font-semibold">24 horas</span>{" "}
                  pra liberar o acesso e fazer o setup junto com você.
                </p>

                <div className="glass-card-strong rounded-2xl p-6 max-w-md mx-auto mb-8 text-left">
                  <p className="text-xs font-bold text-white/50 uppercase tracking-wider mb-3">
                    Próximos passos
                  </p>
                  <ul className="space-y-2.5 text-sm text-white/80">
                    <li className="flex gap-2.5">
                      <span className="text-green-400 font-mono">01</span>
                      <span>A gente te chama no WhatsApp em até 24h</span>
                    </li>
                    <li className="flex gap-2.5">
                      <span className="text-green-400 font-mono">02</span>
                      <span>Setup do seu ambiente (cerca de 15 minutos)</span>
                    </li>
                    <li className="flex gap-2.5">
                      <span className="text-green-400 font-mono">03</span>
                      <span>30 dias de uso completo, com suporte humano</span>
                    </li>
                  </ul>
                </div>

                <Button
                  onClick={() => navigate("/")}
                  variant="outline"
                  className="bg-white/5 border-white/15 text-white hover:bg-white/10"
                >
                  Voltar pra página inicial
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

const inputCls =
  "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500/40 transition-all";

function Field({
  label,
  icon,
  children,
}: {
  label: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="text-xs font-bold text-white/70 uppercase tracking-wider mb-2 flex items-center gap-1.5">
        {icon}
        {label}
      </label>
      {children}
    </div>
  );
}
