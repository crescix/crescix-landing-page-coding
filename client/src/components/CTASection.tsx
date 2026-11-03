import { Check } from "lucide-react";
import { useLocation } from "wouter";

const benefits = [
  "30 dias grátis, sem cartão",
  "Cancele quando quiser",
  "Suporte humano durante o teste",
  "Migração de dados sem custo",
];

export default function CTASection() {
  const [, navigate] = useLocation();

  return (
    <section className="section--s on-ink">
      <div className="container statement">
        <h2>Experimente 30 dias grátis. Decida depois.</h2>
        <p className="lead">
          Sem cartão, sem pegadinha. Só você usando a CrescIX no seu negócio e
          vendo o trabalho manual sumir.
        </p>
        <ul className="facts statement__facts">
          {benefits.map((b) => (
            <li key={b}>
              <Check size={16} aria-hidden="true" />
              {b}
            </li>
          ))}
        </ul>
        <div className="actions">
          <button
            type="button"
            onClick={() => navigate("/teste-gratis")}
            className="btn btn--primary"
          >
            Quero começar agora
          </button>
          <a
            href="https://wa.me/5535984219965?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20a%20CrescIX%20IA..."
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Falar antes
          </a>
        </div>
      </div>
    </section>
  );
}
