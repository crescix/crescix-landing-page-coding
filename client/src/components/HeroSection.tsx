import { Check, Mic } from "lucide-react";
import { useLocation } from "wouter";
import Palco from "@/components/wayfind/Palco";
import { FOTOS } from "@/lib/fotos";

/* Alturas fixas da onda do áudio de exemplo */
const ONDA = [8, 14, 7, 18, 10, 16, 6, 12, 19, 9, 15, 7, 13, 17, 8, 11, 16, 6];

export default function HeroSection() {
  const [, navigate] = useLocation();

  return (
    <section id="inicio" className="hero">
      <div className="container hero__grid">
        <div className="hero__text">
          <h1>Sua gestão financeira no automático.</h1>

          <p className="lead">
            Mande um <strong>áudio</strong> ou <strong>texto</strong> pelo
            Telegram. A CrescIX entende, registra e organiza vendas, despesas
            e compras do seu negócio. Tudo sob controle, em segundos.
          </p>

          <div className="actions">
            <button
              type="button"
              onClick={() => navigate("/teste-gratis")}
              className="btn btn--primary"
            >
              Começar teste grátis
            </button>
            <a
              href="https://wa.me/5535984219965?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20a%20CrescIX%20IA..."
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Falar no WhatsApp
            </a>
          </div>

          <ul className="facts">
            <li>IA financeira para PMEs</li>
            <li>Dados criptografados</li>
            <li>Setup em 2 minutos</li>
            <li>30 dias grátis</li>
          </ul>
        </div>

        <Palco
          foto={FOTOS.feiraSaude}
          slot="hero"
          descricao="O balcão ou a banca de um cliente da CrescIX vendendo"
          posicao="50% 45%"
        >
          {/* Números ilustrativos de uma tela do produto. O rótulo
              "exemplo" fica visível de propósito: sem ele, o card lê
              como resultado que a CrescIX entrega, e crescimento de
              receita é coisa que a gente não pode prometer. */}
          <div className="sign stage__sign" data-keep>
            <span>Receita do mês, exemplo</span>
            <b>R$ 18.430</b>
            <span>+12,4% vs último mês</span>
          </div>

          <div className="plate stage__plate" data-keep>
            <div className="plate__bar">
              <b>crescix-bot</b>
              <span>Telegram</span>
            </div>
            <div className="plate__body">
              <div className="audio">
                <Mic size={16} aria-hidden="true" />
                <span className="audio__wave" aria-hidden="true">
                  {ONDA.map((altura, i) => (
                    <i key={i} style={{ height: altura }} />
                  ))}
                </span>
                <span>0:14</span>
              </div>
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
          </div>
        </Palco>
      </div>
    </section>
  );
}
