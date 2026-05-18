import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const data = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formspree.io/f/xyknelaq", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        toast.success(
          "Mensagem enviada! Entraremos em contato em até 8h.",
        );
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        toast.error("Erro ao enviar mensagem. Tente novamente.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  const inputCls =
    "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500/40 transition-all";

  return (
    <section
      id="contato"
      className="py-24 lg:py-32 relative overflow-hidden bg-[#0B1622]"
    >
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-green-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-green-600/10 blur-[80px] pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/25 text-green-400 text-xs font-bold uppercase tracking-wider mb-4">
            Contato
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Pronto pra{" "}
            <span className="gradient-green">transformar</span> seu negócio?
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Manda uma mensagem que respondemos em até 8h. Sem robô. Você fala
            direto com a equipe que construiu o produto.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display font-bold text-2xl text-white mb-6">
              Fale conosco
            </h3>
            <p className="text-white/60 mb-8 leading-relaxed">
              Nossa equipe está pronta pra te ajudar a colocar a CrescIX
              rodando no seu negócio. Responde rápido.
            </p>

            <div className="space-y-5">
              <a
                href="https://www.instagram.com/crescix_tecnologia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl bg-green-500/10 border border-green-500/25 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                  <FaInstagram className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="font-display font-semibold text-white text-sm">
                    Instagram
                  </p>
                  <p className="text-white/55 text-sm group-hover:text-green-400 transition-colors">
                    @crescix_tecnologia
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/5535984219965"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl bg-green-500/10 border border-green-500/25 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                  <FaWhatsapp className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="font-display font-semibold text-white text-sm">
                    WhatsApp
                  </p>
                  <p className="text-white/55 text-sm group-hover:text-green-400 transition-colors">
                    +55 (35) 98421-9965
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-green-500/10 border border-green-500/25 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="font-display font-semibold text-white text-sm">
                    Localização
                  </p>
                  <p className="text-white/55 text-sm">
                    Santa Rita do Sapucaí, MG
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card-strong rounded-2xl p-7 lg:p-8"
            >
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-bold text-white/60 uppercase tracking-wider mb-2">
                    Nome
                  </label>
                  <input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className={inputCls}
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-white/60 uppercase tracking-wider mb-2">
                    E-mail
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className={inputCls}
                    placeholder="seu@email.com"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-xs font-bold text-white/60 uppercase tracking-wider mb-2">
                  Empresa
                </label>
                <input
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className={inputCls}
                  placeholder="Nome da empresa"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-xs font-bold text-white/60 uppercase tracking-wider mb-2">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className={`${inputCls} resize-none`}
                  placeholder="Como podemos ajudar?"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={submitting}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-display font-semibold rounded-xl py-5 shadow-lg shadow-green-500/25 hover:shadow-xl transition-all duration-300 group disabled:opacity-60"
              >
                {submitting ? "Enviando..." : "Enviar Mensagem"}
                {!submitting && (
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
