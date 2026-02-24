/*
 * CrescIX "Contato" — Fluid Data Streams Design
 * - Formulário de contato + informações
 * - CTA final persuasivo
 */
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section id="contato" className="py-24 lg:py-32 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #f5f7fc 0%, #D8DDEF 100%)" }}>
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#A3C3D9]/20 blur-[100px]" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-[#09636B]/10 blur-[80px]" />

      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#09636B]/10 text-[#09636B] text-sm font-semibold mb-4">
            Contato
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#172A3A] mb-4">
            Pronto para{" "}
            <span className="text-[#09636B]">transformar</span> seu negócio?
          </h2>
          <p className="text-lg text-[#172A3A]/55 max-w-2xl mx-auto">
            Entre em contato e descubra como a CrescIX pode automatizar seus processos via WhatsApp.
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
            <h3 className="font-display font-bold text-2xl text-[#172A3A] mb-6">
              Fale conosco
            </h3>
            <p className="text-[#172A3A]/55 mb-8 leading-relaxed">
              Nossa equipe está pronta para ajudar você a implementar a automação
              inteligente no seu negócio. Responderemos em até 4 horas.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#09636B]/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#09636B]" />
                </div>
                <div>
                  <p className="font-display font-semibold text-[#172A3A] text-sm">E-mail</p>
                  <p className="text-[#172A3A]/55 text-sm">xxx@email.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#09636B]/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-[#09636B]" />
                </div>
                <div>
                  <p className="font-display font-semibold text-[#172A3A] text-sm">WhatsApp</p>
                  <p className="text-[#172A3A]/55 text-sm">+XX (XX) XXXXX-XXXX</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#09636B]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#09636B]" />
                </div>
                <div>
                  <p className="font-display font-semibold text-[#172A3A] text-sm">Localização</p>
                  <p className="text-[#172A3A]/55 text-sm">Minas Gerais, Brasil</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-7 lg:p-8 shadow-xl shadow-[#172A3A]/5 border border-[#D8DDEF]/40"
            >
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-[#172A3A]/70 mb-1.5">
                    Nome
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#D8DDEF] bg-[#f8f9fd] text-[#172A3A] text-sm focus:outline-none focus:ring-2 focus:ring-[#09636B]/30 focus:border-[#09636B]/50 transition-all"
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#172A3A]/70 mb-1.5">
                    E-mail
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#D8DDEF] bg-[#f8f9fd] text-[#172A3A] text-sm focus:outline-none focus:ring-2 focus:ring-[#09636B]/30 focus:border-[#09636B]/50 transition-all"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-[#172A3A]/70 mb-1.5">
                  Empresa
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#D8DDEF] bg-[#f8f9fd] text-[#172A3A] text-sm focus:outline-none focus:ring-2 focus:ring-[#09636B]/30 focus:border-[#09636B]/50 transition-all"
                  placeholder="Nome da empresa"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-[#172A3A]/70 mb-1.5">
                  Mensagem
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-[#D8DDEF] bg-[#f8f9fd] text-[#172A3A] text-sm focus:outline-none focus:ring-2 focus:ring-[#09636B]/30 focus:border-[#09636B]/50 transition-all resize-none"
                  placeholder="Como podemos ajudar?"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#09636B] to-[#004346] hover:from-[#004346] hover:to-[#172A3A] text-white font-display font-semibold rounded-xl py-5 shadow-lg shadow-[#09636B]/25 hover:shadow-xl transition-all duration-300 group"
              >
                Enviar Mensagem
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
