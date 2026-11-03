import { useEffect } from "react";
import { ChevronDown } from "lucide-react";

/**
 * Seção "Perguntas Frequentes": accordion com 8 dúvidas comuns
 * de quem chega na landing. Foco em remover objeções de compra
 * (preço, dados, instalação, cancelamento).
 */

const faqs = [
  {
    q: "O que é o CrescIX e pra quem serve?",
    a: "É um sistema de gestão financeira pra pequenos negócios: comércios, restaurantes, mercados, salões, autônomos. Você registra vendas, compras e despesas direto pelo Telegram ou pelo app, e a gente organiza tudo num dashboard com fluxo de caixa, contas a pagar/receber, estoque e insights mensais com IA.",
  },
  {
    q: "Preciso instalar alguma coisa?",
    a: "Não. O app web roda no navegador (computador ou celular). O bot usa o Telegram que você já tem instalado no celular. Sem download, sem instalação, sem complicação.",
  },
  {
    q: "Como funciona o teste grátis de 30 dias?",
    a: "Você se cadastra com e-mail e senha (sem cartão de crédito) e tem acesso completo a tudo por 30 dias. Depois, se quiser continuar, escolhe um plano e paga via PIX ou cartão. Se não pagar, sua conta vira somente-leitura: você consegue consultar tudo que registrou, mas não cria registros novos.",
  },
  {
    q: "O bot do Telegram é pago à parte?",
    a: "Não. O bot está incluso em qualquer plano. Você usa o app web e o bot do Telegram com a mesma conta.",
  },
  {
    q: "Posso cancelar a qualquer momento?",
    a: "Pode, sem multa. No PIX não existe renovação automática: é só não pagar de novo. No cartão, a assinatura renova sozinha a cada período, e você cancela na tela \"Assinatura\" do app: a renovação para na hora. Nos dois casos, o tempo que você já pagou continua valendo até o fim; depois a conta passa pra modo de consulta.",
  },
  {
    q: "E se eu me arrepender depois de pagar?",
    a: "Você tem 7 dias corridos a partir do primeiro pagamento pra desistir e receber 100% do valor de volta, sem precisar justificar: é o direito de arrependimento do art. 49 do Código de Defesa do Consumidor. Basta um e-mail pro suporte. Os prazos de estorno estão na Política de Troca e Reembolso.",
  },
  {
    q: "Funciona pra qualquer tipo de negócio?",
    a: "Funciona pra varejo, atacado, alimentação (restaurantes, bares, padarias, mercados), serviços (beleza, saúde, automotivo), moda, farmácias, e mais. Quando você se cadastra, escolhe seu tipo de comércio e os bots se adaptam ao vocabulário do seu ramo.",
  },
  {
    /*
      A resposta anterior afirmava "banco hospedado em servidores no
      Brasil". A infraestrutura está em transição (VPS própria e serviços
      gerenciados em paralelo, veja o DEPLOY.md da crescix-api) e parte do
      processamento é feita fora do país pela OpenAI, então a frase não
      era comprovável como estava. Se e quando a localização do banco for
      verificada e estável, ela pode voltar com nome do provedor e região.
    */
    q: "Meus dados ficam seguros?",
    a: "Senhas são guardadas com hash bcrypt, a comunicação é toda por HTTPS e os dados ficam isolados por conta: nenhum usuário vê os dados de outro. Parte do processamento passa por fornecedores de fora do Brasil, como a OpenAI nas transcrições e análises: a lista completa de quem recebe o quê está na Política de Privacidade. Você é o dono dos seus dados e pode exportar ou pedir exclusão a qualquer momento.",
  },
  {
    q: "E se eu precisar de ajuda?",
    a: "Manda um e-mail pra suporte@crescix.com.br ou fala direto com a gente no WhatsApp. No plano anual o suporte é prioritário (resposta em poucas horas).",
  },
];

/**
 * Injeta FAQPage schema no <head> pra habilitar rich snippet do Google
 * (perguntas expandíveis direto no resultado de busca). O crawler renderiza
 * JS, então funciona mesmo no SPA. Remove ao desmontar pra não vazar entre
 * rotas.
 */
function useFAQSchema(faqs: { q: string; a: string }[]) {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = "faq-schema";
    el.textContent = JSON.stringify(schema);
    document.head.appendChild(el);
    return () => {
      document.getElementById("faq-schema")?.remove();
    };
  }, [faqs]);
}

export default function FAQ() {
  useFAQSchema(faqs);

  return (
    <section id="faq" className="section--l">
      <div className="container faq">
        <div className="head">
          <h2>Perguntas frequentes</h2>
          <p className="lead">
            As dúvidas mais comuns de quem está conhecendo o CrescIX.
          </p>
        </div>

        {/* `name` igual faz o navegador manter uma resposta aberta por vez,
            sem JavaScript. */}
        <div className="faq__lista">
          {faqs.map((faq) => (
            <details key={faq.q} name="faq" className="faq__item">
              <summary className="faq__q">
                <h3>{faq.q}</h3>
                <ChevronDown size={20} aria-hidden="true" />
              </summary>
              <p className="faq__a">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
