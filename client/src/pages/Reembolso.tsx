import { useSEO } from "@/hooks/useSEO";
import { LegalShell, Intro, Section, Ul } from "@/components/legal/LegalShell";
import { EMPRESA } from "@/lib/empresa";

/**
 * Política de Troca e Reembolso.
 *
 * Base: Código de Defesa do Consumidor (Lei 8.078/1990), art. 49 —
 * direito de arrependimento de 7 dias em compra fora do estabelecimento,
 * que é o caso de assinatura contratada pela internet. O prazo e o
 * procedimento aqui espelham a seção 5 dos Termos de Uso do app
 * (crescix-web, `src/app/(public)/termos/page.tsx`): se mudar lá, mude
 * aqui, senão o cliente lê duas regras diferentes pro mesmo contrato.
 *
 * Valores: sincronizados com `Pricing.tsx` e com a crescix-api
 * (`src/lib/subscription.ts`).
 */

const UPDATED_AT = "3 de novembro de 2026";

export default function Reembolso() {
  useSEO({
    canonicalPath: "/reembolso",
    title: "Política de Troca e Reembolso | CrescIX",
    description:
      "Direito de arrependimento de 7 dias, como cancelar a assinatura da CrescIX e como pedir reembolso. De acordo com o Código de Defesa do Consumidor.",
  });

  return (
    <LegalShell
      titulo="Política de Troca e Reembolso"
      atualizadoEm={UPDATED_AT}
      rodape={
        <>
          Pra pedir cancelamento ou reembolso, escreva pra{" "}
          <a
            href={`mailto:${EMPRESA.emailSuporte}`}
            className="link"
          >
            {EMPRESA.emailSuporte}
          </a>
          . Respondemos em até 5 dias úteis.
        </>
      }
    >
      <Intro>
        A CrescIX é um serviço por assinatura, contratado pela internet.
        Isso te dá <strong>7 dias pra desistir e receber todo o dinheiro de
        volta</strong>, sem precisar justificar — é o direito de
        arrependimento do art. 49 do Código de Defesa do Consumidor.
        Abaixo, como isso funciona na prática.
      </Intro>

      <Section titulo="1. O que você está contratando">
        <p>
          Um serviço digital por assinatura. Não há produto físico, então
          não existe troca nem devolução de mercadoria: o que existe é
          cancelamento da assinatura e, nos casos abaixo, devolução do
          valor pago.
        </p>
        <Ul>
          <li>
            <strong>Teste grátis de 30 dias:</strong> não pedimos cartão e
            não cobramos nada. Se você não assinar depois, não há nada pra
            reembolsar — a conta simplesmente passa pra modo consulta.
          </li>
          <li>
            <strong>Plano mensal:</strong> R$ 79,90 por 30 dias.
          </li>
          <li>
            <strong>Plano anual:</strong> R$ 718,80 por 365 dias.
          </li>
        </Ul>
        <p>
          Os valores vigentes aparecem sempre na tela &quot;Assinatura&quot;
          do app antes de você confirmar. A cobrança é processada pelo
          Mercado Pago, por PIX ou cartão de crédito.
        </p>
      </Section>

      <Section titulo="2. Direito de arrependimento: 7 dias, reembolso integral">
        <p>
          Você pode desistir da assinatura em até{" "}
          <strong>7 dias corridos</strong> e receber
          de volta <strong>100% do que pagou</strong>,
          sem multa e sem precisar explicar o motivo.
        </p>
        <Ul>
          <li>
            <strong>Quando o prazo começa:</strong> na data do primeiro
            pagamento. No cartão com renovação automática, conta da
            primeira cobrança.
          </li>
          <li>
            <strong>Como pedir:</strong> um e-mail pra{" "}
            <a
              href={`mailto:${EMPRESA.emailSuporte}`}
              className="link"
            >
              {EMPRESA.emailSuporte}
            </a>{" "}
            dizendo que quer desistir, do mesmo e-mail da sua conta. Não
            precisa de formulário nem de ligação.
          </li>
          <li>
            <strong>Vale mesmo se você usou:</strong> ter usado o serviço
            nesses 7 dias não tira o seu direito.
          </li>
        </Ul>
      </Section>

      <Section titulo="3. Prazos e forma do estorno">
        <Ul>
          <li>
            <strong>Nossa parte:</strong> confirmamos o pedido em até 2 dias
            úteis e autorizamos a devolução no Mercado Pago no mesmo prazo.
          </li>
          <li>
            <strong>PIX:</strong> devolvemos pela mesma chave ou conta de
            origem. O crédito costuma cair em poucos dias úteis depois da
            autorização.
          </li>
          <li>
            <strong>Cartão de crédito:</strong> o estorno é feito no cartão
            usado na compra. Pode aparecer na fatura do mês seguinte, porque
            o prazo final é do banco emissor, não nosso.
          </li>
          <li>
            <strong>Sempre o valor integral:</strong> não descontamos taxa de
            processamento do seu reembolso.
          </li>
        </Ul>
        <p>
          Se o prazo estourar sem explicação, cobre da gente: o atraso é
          nossa responsabilidade perante você, mesmo quando a execução
          depende do Mercado Pago.
        </p>
      </Section>

      <Section titulo="4. Cancelamento depois dos 7 dias">
        <Ul>
          <li>
            <strong>Sem multa, a qualquer momento.</strong> No cartão, você
            cancela na tela &quot;Assinatura&quot; do app e a renovação para
            na hora. No PIX, basta não pagar de novo.
          </li>
          <li>
            <strong>O tempo pago continua valendo</strong> até o fim do
            período contratado. Passado isso, a conta vira somente leitura:
            você consulta tudo que registrou, mas não cria registro novo.
          </li>
          <li>
            <strong>Fora dos 7 dias não há reembolso proporcional</strong> do
            tempo que ainda falta — você fica com o acesso até o fim do
            período, em vez de receber o dinheiro de volta.
          </li>
        </Ul>
      </Section>

      <Section titulo="5. Quando devolvemos o dinheiro mesmo fora dos 7 dias">
        <p>
          O prazo de arrependimento é um direito seu, não um limite pro
          nosso. Devolvemos o valor proporcional, ou integral quando fizer
          sentido, nestes casos:
        </p>
        <Ul>
          <li>
            <strong>Cobrança indevida ou duplicada:</strong> estorno integral
            do valor cobrado a mais.
          </li>
          <li>
            <strong>Cobrança após o cancelamento:</strong> estorno integral.
          </li>
          <li>
            <strong>Serviço indisponível por culpa nossa</strong> por um
            período longo o suficiente pra inviabilizar o uso: devolvemos
            proporcional aos dias afetados ou estendemos a assinatura, você
            escolhe.
          </li>
          <li>
            <strong>Encerramento do serviço pela CrescIX:</strong> devolvemos
            proporcional ao tempo pago e não usado.
          </li>
        </Ul>
      </Section>

      <Section titulo="6. Mudança de plano">
        <p>
          Trocar de mensal pra anual, ou o contrário, não cobra nada a mais
          nem gera reembolso automático: o plano novo começa a valer no fim
          do período já pago. Se precisar da troca imediata, fale com o
          suporte que a gente calcula o ajuste junto com você.
        </p>
      </Section>

      <Section titulo="7. Nota fiscal e comprovante">
        <p>
          O comprovante da transação é emitido pelo Mercado Pago e fica
          disponível pra você. Pedidos de documento fiscal passam pelo{" "}
          <a
            href={`mailto:${EMPRESA.emailContato}`}
            className="link"
          >
            {EMPRESA.emailContato}
          </a>
          .
        </p>
      </Section>

      <Section titulo="8. Se a gente não resolver">
        <p>
          Procure primeiro o nosso suporte: é o caminho mais rápido. Se não
          chegarmos a um acordo, você pode registrar reclamação no{" "}
          <a
            href="https://www.consumidor.gov.br"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            consumidor.gov.br
          </a>
          , no Procon do seu município ou acionar o Juizado Especial Cível.
          Esta política não restringe nenhum direito que o Código de Defesa
          do Consumidor te garante.
        </p>
      </Section>
    </LegalShell>
  );
}
