import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/**
 * Seção "Perguntas Frequentes" — accordion com 8 dúvidas comuns
 * de quem chega na landing. Foco em remover objeções de compra
 * (preço, dados, instalação, cancelamento).
 */

const faqs = [
  {
    q: "O que é o CrescIX e pra quem serve?",
    a: "É um sistema de gestão financeira pra pequenos negócios — comércios, restaurantes, mercados, salões, autônomos. Você registra vendas, compras e despesas direto pelo Telegram ou pelo app, e a gente organiza tudo num dashboard com fluxo de caixa, contas a pagar/receber, estoque e insights mensais com IA.",
  },
  {
    q: "Preciso instalar alguma coisa?",
    a: "Não. O app web roda no navegador (computador ou celular). O bot usa o Telegram que você já tem instalado no celular. Sem download, sem instalação, sem complicação.",
  },
  {
    q: "Como funciona o teste grátis de 7 dias?",
    a: "Você se cadastra com e-mail e senha (sem cartão de crédito) e tem acesso completo a tudo por 7 dias. Depois, se quiser continuar, escolhe um plano e paga via PIX. Se não pagar, sua conta vira somente-leitura — você consegue consultar tudo que registrou, mas não cria registros novos.",
  },
  {
    q: "O bot do Telegram é pago à parte?",
    a: "Não. O bot está incluso em qualquer plano. Você usa o app web e o bot do Telegram com a mesma conta.",
  },
  {
    q: "Posso cancelar a qualquer momento?",
    a: "Pode. Sem multa, sem ligar pra ninguém — é só desistir de renovar. O tempo que você já pagou continua valendo até o fim. Quando vencer, sua conta passa pra modo de consulta e você decide se quer voltar.",
  },
  {
    q: "Funciona pra qualquer tipo de negócio?",
    a: "Funciona pra varejo, atacado, alimentação (restaurantes, bares, padarias, mercados), serviços (beleza, saúde, automotivo), moda, farmácias, e mais. Quando você se cadastra, escolhe seu tipo de comércio e os bots se adaptam ao vocabulário do seu ramo.",
  },
  {
    q: "Meus dados ficam seguros?",
    a: "Sim. Senhas são criptografadas, comunicação por HTTPS, banco hospedado em servidores no Brasil. Cumprimos a LGPD — você é o dono dos seus dados, pode exportá-los ou pedir exclusão a qualquer momento.",
  },
  {
    q: "E se eu precisar de ajuda?",
    a: "Manda um e-mail pra suporte@crescix.com.br ou fala direto com a gente no WhatsApp. No plano anual o suporte é prioritário (resposta em poucas horas).",
  },
];

export default function FAQ() {
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
