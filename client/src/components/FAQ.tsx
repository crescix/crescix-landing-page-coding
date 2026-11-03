import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    a: "Pode, sem multa. No PIX não existe renovação automática: é só não pagar de novo. No cartão, a assinatura renova sozinha a cada período, e você cancela na tela \"Assinatura\" do app — a renovação para na hora. Nos dois casos, o tempo que você já pagou continua valendo até o fim; depois a conta passa pra modo de consulta.",
  },
  {
    q: "E se eu me arrepender depois de pagar?",
    a: "Você tem 7 dias corridos a partir do primeiro pagamento pra desistir e receber 100% do valor de volta, sem precisar justificar — é o direito de arrependimento do art. 49 do Código de Defesa do Consumidor. Basta um e-mail pro suporte. Os prazos de estorno estão na Política de Troca e Reembolso.",
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
      processamento é feita fora do país pela OpenAI — então a frase não
      era comprovável como estava. Se e quando a localização do banco for
      verificada e estável, ela pode voltar com nome do provedor e região.
    */
    q: "Meus dados ficam seguros?",
    a: "Senhas são guardadas com hash bcrypt, a comunicação é toda por HTTPS e os dados ficam isolados por conta: nenhum usuário vê os dados de outro. Parte do processamento passa por fornecedores de fora do Brasil, como a OpenAI nas transcrições e análises — a lista completa de quem recebe o quê está na Política de Privacidade. Você é o dono dos seus dados e pode exportar ou pedir exclusão a qualquer momento.",
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
    <section
      id="faq"
      className="py-24 lg:py-32 relative overflow-hidden bg-[#0B1622]"
    >
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-green-500/5 blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Perguntas frequentes
          </h2>
          <p className="text-white/70 text-base md:text-lg">
            As dúvidas mais comuns de quem está conhecendo o CrescIX.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-white/10 rounded-xl bg-white/[0.02] px-5 data-[state=open]:bg-white/[0.04] transition-colors"
              >
                <AccordionTrigger className="text-left text-white hover:no-underline font-medium py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-white/70 leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
