import { useEffect, useRef, useState } from "react";
import { Check, Mic } from "lucide-react";

const steps = [
  {
    title: "Você manda no Telegram",
    description:
      'Áudio ou texto curto: "Vendi 4 águas a 3 reais", "Paguei 150 de aluguel". Sem app extra, sem formulário.',
  },
  {
    title: "A IA entende",
    description:
      "Whisper transcreve o áudio e a IA estrutura: tipo da operação, item, valor unitário, quantidade. Tudo em segundos.",
  },
  {
    title: "Você confirma",
    description:
      "O bot mostra um resumo do que entendeu. Você clica em confirmar e o lançamento entra direto no caixa do CrescIX.",
  },
  {
    title: "Tudo guardado",
    description:
      "Dados criptografados, multi-tenancy, relatórios em planilha quando quiser. Sem perda, sem retrabalho.",
  },
];

/* Alturas fixas da onda do áudio de exemplo */
const ONDA = [8, 14, 7, 18, 10, 16, 6, 12, 19, 9, 15, 7, 13, 17, 8, 11, 16, 6];

export default function HowItWorks() {
  const [ativo, setAtivo] = useState(0);
  const passos = useRef<(HTMLLIElement | null)[]>([]);

  // A linha acesa no quadro acompanha o passo que está no meio da tela.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          if (e.isIntersecting) {
            setAtivo(passos.current.indexOf(e.target as HTMLLIElement));
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    passos.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="como-funciona" className="section">
      <div className="container">
        <div className="head">
          <h2>Quatro passos. Zero fricção.</h2>
          <p className="lead">
            Conversa normal no Telegram entra como lançamento estruturado no
            seu painel financeiro.
          </p>
        </div>

        <div className="pinned">
          <div
            className="pinned__visual plate"
            role="group"
            aria-label="Exemplo de conversa com o bot"
          >
            <div className="plate__bar">
              <b>crescix-bot</b>
              <span>Telegram</span>
            </div>

            <div className="board-row" data-on={ativo === 0}>
              <div className="audio">
                <Mic size={20} aria-hidden="true" />
                <span className="audio__wave" aria-hidden="true">
                  {ONDA.map((altura, i) => (
                    <i key={i} style={{ height: altura }} />
                  ))}
                </span>
                <span>0:14</span>
              </div>
            </div>

            <div className="board-row" data-on={ativo === 1}>
              <p className="plate__head">
                <Check size={16} aria-hidden="true" />
                Entendi
              </p>
              <dl className="ledger">
                <dt>Tipo:</dt>
                <dd>Venda</dd>
                <dt>Item:</dt>
                <dd>4 águas</dd>
                <dt>Unitário:</dt>
                <dd>R$ 3,00</dd>
                <dt className="total">Total:</dt>
                <dd className="total">R$ 12,00</dd>
              </dl>
            </div>

            <div className="board-row" data-on={ativo === 2}>
              <p className="board-row__line">
                <Check size={16} aria-hidden="true" />
                Confirmar
              </p>
            </div>

            <div className="board-row" data-on={ativo === 3}>
              <p className="board-row__line">
                <Check size={16} aria-hidden="true" />
                Salvo no caixa
              </p>
            </div>
          </div>

          <ol className="pinned__steps">
            {steps.map((step, i) => (
              <li
                key={step.title}
                ref={(el) => {
                  passos.current[i] = el;
                }}
              >
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
