import { useState } from "react";
import { useLocation } from "wouter";
import { useSEO } from "@/hooks/useSEO";
import { useWayfind } from "@/hooks/useWayfind";
import { ConsentimentoLGPD } from "@/components/legal/ConsentimentoLGPD";
import Escolhas from "@/components/wayfind/Escolhas";
import SiteFooter from "@/components/wayfind/SiteFooter";

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
  useWayfind();
  useSEO({
    title: "Teste grátis | CrescIX",
    description:
      "Solicite seu acesso ao CrescIX e teste de graça por 30 dias. Sem cartão, sem compromisso. Só preencher e começar a usar.",
    canonicalPath: "/teste-gratis",
  });

  const [, navigate] = useLocation();
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState<FormState>(initialForm);
  const [consentiu, setConsentiu] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((p) => ({ ...p, [key]: value }));

  const canAdvance = (() => {
    if (step === 1)
      return form.name.trim().length >= 2 && /\S+@\S+\.\S+/.test(form.email);
    if (step === 2)
      return form.empresa.trim().length >= 2 && !!form.tipoComercio;
    if (step === 3) return !!form.funcionarios && consentiu;
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
      // Prova do aceite: LGPD art. 8º, § 2º põe o ônus em quem coletou.
      data.append("consentimento_lgpd", "sim");
      data.append("consentimento_em", new Date().toISOString());
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
          {step !== "success" ? (
            <div className="balcao__grid">
              <div className="balcao__texto">
                <h1 className="display-s">Vamos liberar seu teste grátis</h1>
                <p className="lead">
                  Só 3 passos. Sem cartão. Em até 1 dia útil a gente libera o
                  acesso e te explica o setup.
                </p>
                <ul className="facts">
                  <li>30 dias grátis</li>
                </ul>

                <div
                  className="passos"
                  role="img"
                  aria-label={`Passo ${step} de 3`}
                >
                  {[1, 2, 3].map((n) => (
                    <span key={n} data-on={Number(step) >= n} />
                  ))}
                  <b>{step}/3</b>
                </div>

                <p className="small muted">
                  Sem spam. A gente usa seus dados só pra liberar o acesso e dar
                  suporte, como está na{" "}
                  <button
                    type="button"
                    onClick={() => navigate("/privacidade")}
                    className="link"
                  >
                    Política de Privacidade
                  </button>
                  .
                </p>
              </div>

              <div className="painel">
                {step === 1 && (
                  <>
                    <div className="painel__head">
                      <h2>Quem é você?</h2>
                      <p className="small muted">
                        Pra gente te chamar pelo nome certo.
                      </p>
                    </div>

                    <div className="field">
                      <label htmlFor="teste-nome">Nome completo</label>
                      <input
                        id="teste-nome"
                        type="text"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        placeholder="João da Silva"
                        autoFocus
                      />
                    </div>

                    <div className="field">
                      <label htmlFor="teste-email">E-mail</label>
                      <input
                        id="teste-email"
                        type="email"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        placeholder="joao@empresa.com"
                      />
                    </div>

                    <div className="field">
                      <label htmlFor="teste-whatsapp">
                        WhatsApp (opcional)
                      </label>
                      <input
                        id="teste-whatsapp"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        placeholder="(35) 99999-9999"
                      />
                    </div>
                  </>
                )}

                {step === 2 && (
                  <>
                    <div className="painel__head">
                      <h2>Sobre o seu negócio</h2>
                      <p className="small muted">
                        Pra gente preparar o ambiente certo pra você.
                      </p>
                    </div>

                    <div className="field">
                      <label htmlFor="teste-empresa">Nome da empresa</label>
                      <input
                        id="teste-empresa"
                        type="text"
                        value={form.empresa}
                        onChange={(e) => update("empresa", e.target.value)}
                        placeholder="Mercado do João"
                        autoFocus
                      />
                    </div>

                    <div className="field">
                      <p id="teste-tipo-label" className="field__rotulo">
                        Tipo de negócio
                      </p>
                      <Escolhas
                        nome="tipoComercio"
                        rotuladoPor="teste-tipo-label"
                        opcoes={TIPOS_COMERCIO}
                        valor={form.tipoComercio}
                        aoEscolher={(t) => update("tipoComercio", t)}
                      />
                    </div>
                  </>
                )}

                {step === 3 && (
                  <>
                    <div className="painel__head">
                      <h2>Última parte</h2>
                      <p className="small muted">
                        Pra entender o seu cenário e priorizar o setup.
                      </p>
                    </div>

                    <div className="field">
                      <p id="teste-equipe-label" className="field__rotulo">
                        Tamanho da equipe
                      </p>
                      <Escolhas
                        nome="funcionarios"
                        rotuladoPor="teste-equipe-label"
                        opcoes={FUNCIONARIOS_OPTS}
                        valor={form.funcionarios}
                        aoEscolher={(f) => update("funcionarios", f)}
                        colunas="quatro"
                      />
                    </div>

                    <div className="field">
                      <label htmlFor="teste-desafio">
                        Qual seu maior desafio hoje? (opcional)
                      </label>
                      <textarea
                        id="teste-desafio"
                        value={form.desafio}
                        onChange={(e) => update("desafio", e.target.value)}
                        rows={4}
                        placeholder="Ex.: perco vendas porque não anoto, gasto domingo inteiro fazendo planilha..."
                      />
                    </div>

                    <ConsentimentoLGPD
                      id="teste-consentimento"
                      checked={consentiu}
                      onChange={setConsentiu}
                      finalidade="pra liberar o meu teste e dar suporte"
                    />
                  </>
                )}

                {error && <p className="form__erro">{error}</p>}

                <div className="painel__acoes">
                  {Number(step) > 1 ? (
                    <button type="button" onClick={back} className="btn">
                      Voltar
                    </button>
                  ) : (
                    <span />
                  )}

                  {Number(step) < 3 ? (
                    <button
                      type="button"
                      onClick={next}
                      disabled={!canAdvance}
                      className="btn btn--primary"
                    >
                      Continuar
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={!canAdvance || submitting}
                      className="btn btn--primary"
                      aria-busy={submitting}
                    >
                      {submitting ? "Enviando..." : "Quero meu acesso"}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="balcao__grid">
              <div className="balcao__texto">
                <h2 className="display-s">
                  Pedido recebido, {form.name.split(" ")[0]}!
                </h2>
                <p className="lead">
                  Nossa equipe vai te chamar no WhatsApp em até{" "}
                  <strong>1 dia útil</strong> pra liberar o acesso e fazer o
                  setup junto com você.
                </p>
                <div className="actions">
                  <button
                    type="button"
                    onClick={() => navigate("/")}
                    className="btn"
                  >
                    Voltar pra página inicial
                  </button>
                </div>
              </div>

              <div className="painel">
                <h3>Próximos passos</h3>
                <ol className="proximos">
                  <li>A gente te chama no WhatsApp em até 1 dia útil</li>
                  <li>Setup do seu ambiente, junto com você</li>
                  <li>30 dias de uso completo, com suporte humano</li>
                </ol>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Rodapé completo: esta página coleta dados, então os links legais
          e a identificação do fornecedor precisam estar alcançáveis aqui
          sem voltar pra home. */}
      <SiteFooter />
    </>
  );
}
