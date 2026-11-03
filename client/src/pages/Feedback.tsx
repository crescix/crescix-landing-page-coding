import { useState } from "react";
import { useLocation } from "wouter";
import { useSEO } from "@/hooks/useSEO";
import { useWayfind } from "@/hooks/useWayfind";
import { ConsentimentoLGPD } from "@/components/legal/ConsentimentoLGPD";
import Escolhas from "@/components/wayfind/Escolhas";
import SiteFooter from "@/components/wayfind/SiteFooter";

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
  useWayfind();
  useSEO({
    canonicalPath: "/feedback",
    title: "Feedback | CrescIX",
    description:
      "Sua opinião nos ajuda a melhorar o CrescIX. Conta pra gente o que tá funcionando, o que falta e como podemos crescer junto com você.",
  });

  const [, navigate] = useLocation();
  const [form, setForm] = useState<FeedbackForm>({
    nps: null,
    recurso_top: "",
    o_que_mudar: "",
    email: "",
    pagaria: "",
  });
  const [consentiu, setConsentiu] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * O e-mail é opcional: sem ele o feedback não tem dado pessoal e não
   * há o que consentir. Preenchido, passa a ter — e aí o aceite é
   * obrigatório antes de enviar.
   */
  const identificado = form.email.trim().length > 0;
  const canSubmit =
    form.nps !== null &&
    form.o_que_mudar.trim().length >= 5 &&
    (!identificado || consentiu);

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
      if (identificado) {
        // Prova do aceite: LGPD art. 8º, § 2º põe o ônus em quem coletou.
        data.append("consentimento_lgpd", "sim");
        data.append("consentimento_em", new Date().toISOString());
      }
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
    <>
      <nav className="slab on-ink" aria-label="Principal">
        <div className="container slab__bar">
          <img
            className="slab__marca"
            src={`${import.meta.env.BASE_URL}images/logo.png`}
            alt="CrescIX"
            width={703}
            height={260}
          />
          <button
            type="button"
            onClick={() => navigate("/")}
            className="slab__quiet"
          >
            Voltar
          </button>
        </div>
      </nav>

      <main className="balcao">
        <div className="container">
          {!done ? (
            <div className="balcao__grid">
              <div className="balcao__texto">
                <h1 className="display-s">E aí, como foi a experiência?</h1>
                <p className="lead">
                  Feedback do teste. Leva 2 minutos. Seu feedback molda o
                  produto pros próximos empresários que vão usar.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="painel">
                {/* NPS 0-10 */}
                <div className="field">
                  <p id="fb-nps-label" className="field__titulo">
                    Você indicaria a CrescIX pra um amigo dono de negócio?
                  </p>
                  <Escolhas
                    nome="nps"
                    rotuladoPor="fb-nps-label"
                    opcoes={Array.from({ length: 11 }, (_, n) => String(n))}
                    valor={form.nps === null ? "" : String(form.nps)}
                    aoEscolher={(n) => setForm((p) => ({ ...p, nps: Number(n) }))}
                    colunas="escala"
                    rotuloDe={(n) => `Nota ${n}`}
                  />
                  <p className="escala__fim small muted">
                    <span>0 = jamais</span>
                    <span>10 = com certeza</span>
                  </p>
                </div>

                {/* Recurso top */}
                <div className="field">
                  <p id="fb-recurso-label" className="field__titulo">
                    Qual recurso mais te ajudou?
                  </p>
                  <p className="small muted">
                    Escolha o que mais salvou seu tempo durante o teste.
                  </p>
                  <Escolhas
                    nome="recurso_top"
                    rotuladoPor="fb-recurso-label"
                    opcoes={RECURSOS}
                    valor={form.recurso_top}
                    aoEscolher={(r) => setForm((p) => ({ ...p, recurso_top: r }))}
                  />
                </div>

                {/* O que mudar */}
                <div className="field">
                  <label htmlFor="fb-mudar" className="field__titulo">
                    O que você mudaria?{" "}
                    <span className="field__obrigatorio">(obrigatório)</span>
                  </label>
                  <p className="small muted">
                    Pode ser bug, dificuldade no setup, recurso que faltou, UX
                    confusa. Tudo conta.
                  </p>
                  <textarea
                    id="fb-mudar"
                    value={form.o_que_mudar}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, o_que_mudar: e.target.value }))
                    }
                    rows={5}
                    placeholder="Solta o verbo aí... a gente quer saber."
                    required
                  />
                </div>

                {/* Pagaria */}
                <div className="field">
                  <p id="fb-pagaria-label" className="field__titulo">
                    Pagaria pra continuar usando?
                  </p>
                  <p className="small muted">
                    Sem compromisso. É só pra entender o quanto somos úteis.
                  </p>
                  <Escolhas
                    nome="pagaria"
                    rotuladoPor="fb-pagaria-label"
                    opcoes={PAGARIA_OPTS}
                    valor={form.pagaria}
                    aoEscolher={(opt) => setForm((p) => ({ ...p, pagaria: opt }))}
                  />
                </div>

                {/* Email opcional */}
                <div className="field">
                  <label htmlFor="fb-email">Seu e-mail (opcional)</label>
                  <input
                    id="fb-email"
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, email: e.target.value }))
                    }
                    placeholder="seu@email.com (pra gente poder responder)"
                  />
                </div>

                {identificado && (
                  <ConsentimentoLGPD
                    id="fb-consentimento"
                    checked={consentiu}
                    onChange={setConsentiu}
                    finalidade="pra responder este feedback e melhorar o produto"
                  />
                )}

                {error && <p className="form__erro">{error}</p>}

                <button
                  type="submit"
                  disabled={!canSubmit || submitting}
                  className="btn btn--primary btn--full"
                  aria-busy={submitting}
                >
                  {submitting ? "Enviando..." : "Enviar feedback"}
                </button>

                {!canSubmit && (
                  <p className="small muted">
                    Preencha o NPS e &ldquo;o que mudaria&rdquo; pra enviar.
                  </p>
                )}
              </form>
            </div>
          ) : (
            <div className="balcao__texto balcao__texto--fim">
              <h2 className="display-s">Recebido! Muito obrigado.</h2>
              <p className="lead">
                Cada palavra vai pro nosso quadro. As próximas versões do
                produto vão refletir o que você compartilhou.
              </p>

              {form.email && (
                <p>
                  Se fizer sentido a gente responder, te chamamos em{" "}
                  <strong>{form.email}</strong>.
                </p>
              )}

              <div className="actions">
                <a
                  href="https://wa.me/5535984219965?text=Oi,%20acabei%20de%20enviar%20o%20feedback%20do%20teste%20e%20gostaria%20de%20continuar%20a%20conversa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                >
                  Continuar conversa no WhatsApp
                </a>
                <button
                  type="button"
                  onClick={() => navigate("/")}
                  className="btn"
                >
                  Voltar pra inicial
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Rodapé completo: a página coleta dados, então os links legais e a
          identificação do fornecedor precisam estar alcançáveis daqui. */}
      <SiteFooter />
    </>
  );
}
