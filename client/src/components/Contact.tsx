import { MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { ConsentimentoLGPD } from "@/components/legal/ConsentimentoLGPD";
import { EMPRESA } from "@/lib/empresa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [consentiu, setConsentiu] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!consentiu) return;
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
          "Mensagem enviada! Respondemos em até 1 dia útil.",
        );
        setFormData({ name: "", email: "", company: "", message: "" });
        setConsentiu(false);
      } else {
        toast.error("Erro ao enviar mensagem. Tente novamente.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contato" className="section">
      <div className="container">
        <div className="head">
          <h2>Pronto pra transformar seu negócio?</h2>
          <p className="lead">
            Manda uma mensagem que respondemos em até 1 dia útil. Sem robô.
            Você fala direto com a equipe que construiu o produto.
          </p>
        </div>

        <div className="contato">
          <div>
            <h3>Fale conosco</h3>
            <p>
              Nossa equipe está pronta pra te ajudar a colocar a CrescIX
              rodando no seu negócio.
            </p>

            <ul className="canais">
              <li>
                <a
                  href="https://www.instagram.com/crescix_tecnologia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={20} aria-hidden="true" />
                  <div>
                    <b>Instagram</b>
                    <span>@crescix_tecnologia</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={EMPRESA.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp size={20} aria-hidden="true" />
                  <div>
                    <b>WhatsApp</b>
                    <span>{EMPRESA.telefone}</span>
                  </div>
                </a>
              </li>
              <li>
                <div className="canais__item">
                  <MapPin size={20} aria-hidden="true" />
                  <div>
                    <b>Localização</b>
                    <span>Santa Rita do Sapucaí, MG</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="form">
            <div className="field">
              <label htmlFor="contato-nome">Nome</label>
              <input
                id="contato-nome"
                name="name"
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Seu nome"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="contato-email">E-mail</label>
              <input
                id="contato-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="seu@email.com"
                required
              />
            </div>

            {/* Opcional de propósito: pra responder uma mensagem a gente
                não precisa saber o nome da empresa (LGPD art. 6º, III:
                só o necessário pra finalidade). */}
            <div className="field form__full">
              <label htmlFor="contato-empresa">Empresa (opcional)</label>
              <input
                id="contato-empresa"
                name="company"
                type="text"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                placeholder="Nome da empresa"
              />
            </div>

            <div className="field form__full">
              <label htmlFor="contato-mensagem">Mensagem</label>
              <textarea
                id="contato-mensagem"
                name="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={4}
                placeholder="Como podemos ajudar?"
                required
              />
            </div>

            <div className="form__full consent">
              <ConsentimentoLGPD
                id="contato-consentimento"
                name="consentimento_lgpd"
                checked={consentiu}
                onChange={setConsentiu}
                finalidade="pra responder esta mensagem"
              />
            </div>

            <button
              type="submit"
              disabled={submitting || !consentiu}
              className="btn btn--primary btn--full form__full"
            >
              {submitting ? "Enviando..." : "Enviar Mensagem"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
