import { FileText } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import {
  LegalShell,
  Intro,
  Section,
  Ul,
  IdentificacaoBox,
} from "@/components/legal/LegalShell";
import { EMPRESA, identificacaoFornecedor } from "@/lib/empresa";

/**
 * Termos de Uso da CrescIX: versão landing-page. Espelha o conteúdo do
 * crescix-web. Linguagem clara, sem latim.
 *
 * ATENÇÃO À SINCRONIA: a seção de pagamento aqui tem que dizer o mesmo
 * que a seção 5 dos termos do app (`crescix-web`,
 * `src/app/(public)/termos/page.tsx`), a `Pricing.tsx` desta landing e a
 * `src/lib/subscription.ts` da API. Até 03/11/2026 esta página afirmava
 * que o uso era gratuito no beta enquanto a página de preços anunciava
 * R$ 79,90 — duas versões do mesmo contrato, o tipo de contradição que o
 * CDC trata como informação enganosa.
 */

const UPDATED_AT = "3 de novembro de 2026";

export default function Termos() {
  useSEO({
    canonicalPath: "/termos",
    title: "Termos de Uso | CrescIX",
    description:
      "Termos de uso da CrescIX: o que esperar do serviço, suas responsabilidades, planos, cancelamento e propriedade dos dados.",
  });

  return (
    <LegalShell
      eyebrow="Termos"
      titulo="Termos de Uso"
      atualizadoEm={UPDATED_AT}
      icone={<FileText className="h-5 w-5 text-green-400" />}
      rodape={
        <>
          Dúvidas sobre os termos? Manda um e-mail pra{" "}
          <a
            href={`mailto:${EMPRESA.emailContato}`}
            className="text-green-400 hover:text-green-300"
          >
            {EMPRESA.emailContato}
          </a>
          .
        </>
      }
    >
      <Intro>
        Este documento define as regras de uso da plataforma CrescIX. Ao
        criar uma conta, você concorda com tudo o que está aqui. Tentamos
        escrever em português claro, sem latim. Se algo ficar confuso, fala
        com a gente.
      </Intro>

      <Section titulo="1. Com quem você está contratando">
        <IdentificacaoBox>
          <p className="text-white font-semibold">{EMPRESA.nomeFantasia}</p>
          {identificacaoFornecedor() && <p>{identificacaoFornecedor()}</p>}
          <p>{EMPRESA.endereco ?? EMPRESA.cidade}</p>
          <p>
            E-mail:{" "}
            <a
              href={`mailto:${EMPRESA.emailContato}`}
              className="text-green-400 hover:text-green-300"
            >
              {EMPRESA.emailContato}
            </a>{" "}
            · Telefone: {EMPRESA.telefone}
          </p>
        </IdentificacaoBox>
      </Section>

      <Section titulo="2. O serviço">
        <p>
          CrescIX é uma plataforma web com bots de Telegram e WhatsApp pra
          gestão financeira de pequenos negócios. Permite registrar vendas,
          despesas e compras, controlar estoque e contas a pagar e receber,
          gerar relatórios e ver análises geradas por IA.
        </p>
      </Section>

      <Section titulo="3. Sua conta">
        <Ul>
          <li>
            Você precisa ter pelo menos 18 anos e poder celebrar contratos
            pra criar uma conta.
          </li>
          <li>
            Os dados informados no cadastro devem ser verdadeiros e
            atualizados.
          </li>
          <li>
            Você é responsável por manter sua senha em segredo. Tudo que
            acontecer na sua conta é de sua responsabilidade.
          </li>
          <li>
            Se notar acesso indevido, comunique imediatamente pelo e-mail de
            suporte.
          </li>
          <li>
            Cada conta pertence a uma pessoa ou um negócio. Compartilhar
            credenciais é proibido.
          </li>
        </Ul>
      </Section>

      <Section titulo="4. Uso permitido">
        <p className="mb-3">
          Você pode usar a CrescIX pra registrar e analisar as finanças do
          seu negócio. Não pode usar pra:
        </p>
        <Ul>
          <li>Atividades ilegais ou que ferem direitos de terceiros.</li>
          <li>
            Tentar acessar dados de outros usuários, fazer engenharia
            reversa do app ou explorar falhas de segurança sem autorização.
          </li>
          <li>
            Sobrecarregar os servidores com requisições automatizadas além
            do necessário.
          </li>
          <li>
            Revender ou repassar acesso à plataforma sem autorização nossa
            por escrito.
          </li>
        </Ul>
        <p className="mt-3">
          Violar essas regras nos dá o direito de suspender ou encerrar sua
          conta. Nesse caso devolvemos a parte proporcional do que você já
          tinha pago e ainda não usou.
        </p>
      </Section>

      <Section titulo="5. Seus dados são seus">
        <p>
          Tudo que você cadastra na CrescIX (fornecedores, clientes,
          produtos, lançamentos) pertence a você. Você pode exportar a
          qualquer momento e, ao encerrar a conta, todos os seus dados são
          apagados (veja a{" "}
          <a
            href="/privacidade"
            className="text-green-400 hover:text-green-300 underline underline-offset-2"
          >
            Política de Privacidade
          </a>
          ).
        </p>
      </Section>

      <Section titulo="6. Teste grátis, planos e pagamento">
        <p className="mb-3">
          Você começa com{" "}
          <strong className="text-white">30 dias de teste gratuito</strong>,
          sem cartão e sem compromisso. Depois disso, pra continuar criando
          registros novos é necessário assinar um plano. Toda cobrança é
          processada pelo <strong className="text-white">Mercado Pago</strong>
          , por PIX ou cartão de crédito.
        </p>
        <Ul>
          <li>
            <strong>Mensal:</strong> R$ 79,90 por 30 dias.
          </li>
          <li>
            <strong>Anual:</strong> R$ 718,80 por 365 dias.
          </li>
        </Ul>
        <p className="mt-3">
          Os valores vigentes aparecem sempre na tela
          &quot;Assinatura&quot; do app antes de você confirmar a
          contratação, e é o valor de lá que vale.
        </p>

        <h3 className="text-white font-semibold text-base mt-5 mb-2">
          6.1. PIX (pagamento único)
        </h3>
        <p>
          Você paga uma vez pelo período contratado, sem renovação
          automática. Quando o período estiver acabando, avisamos por
          e-mail. Se você não pagar de novo, a assinatura simplesmente
          expira.
        </p>

        <h3 className="text-white font-semibold text-base mt-5 mb-2">
          6.2. Cartão de crédito (renovação automática)
        </h3>
        <p className="mb-3">
          A primeira cobrança acontece na contratação. A partir daí o
          Mercado Pago cobra o mesmo cartão automaticamente a cada mês ou a
          cada ano, conforme o plano, até você cancelar. Os dados do cartão
          são tokenizados pelo Mercado Pago direto no seu navegador: a
          CrescIX nunca tem acesso ao número, à validade ou ao CVV.
        </p>
        <p>
          O cancelamento é feito por você mesmo, na tela
          &quot;Assinatura&quot; do app. A renovação para na hora e o tempo
          já pago continua valendo até o fim do período.
        </p>

        <h3 className="text-white font-semibold text-base mt-5 mb-2">
          6.3. Depois do vencimento
        </h3>
        <p>
          Sua conta vira somente leitura: você consulta tudo que registrou,
          mas não cria registro novo até renovar. Nada é apagado por falta
          de pagamento.
        </p>

        <h3 className="text-white font-semibold text-base mt-5 mb-2">
          6.4. Reajuste
        </h3>
        <p>
          Quando mudarmos os preços, avisamos por e-mail e no app com pelo
          menos 30 dias de antecedência. No PIX, o preço novo vale só pras
          próximas contratações. No cartão recorrente, você pode cancelar
          antes da próxima cobrança se não concordar.
        </p>
      </Section>

      <Section titulo="7. Arrependimento e reembolso">
        <p>
          Como a contratação é feita pela internet, você pode desistir em
          até <strong className="text-white">7 dias</strong> contados do
          primeiro pagamento e receber tudo de volta, sem precisar
          justificar — é o art. 49 do Código de Defesa do Consumidor. As
          regras completas, os prazos de estorno e os casos de devolução
          fora desses 7 dias estão na{" "}
          <a
            href="/reembolso"
            className="text-green-400 hover:text-green-300 underline underline-offset-2"
          >
            Política de Troca e Reembolso
          </a>
          , que faz parte destes termos.
        </p>
      </Section>

      <Section titulo="8. Disponibilidade">
        <p>
          A gente faz o que está ao nosso alcance pra manter o serviço no
          ar, mas não garantimos disponibilidade ininterrupta. Manutenções
          programadas serão avisadas com antecedência quando possível.
          Eventuais quedas curtas e imprevistas podem ocorrer. Se a queda
          for longa o suficiente pra inviabilizar o uso, veja a seção 5 da
          política de reembolso.
        </p>
      </Section>

      <Section titulo="9. Análises da IA">
        <p>
          O recurso &quot;Análise IA&quot; gera observações e sugestões a
          partir dos seus números. Os resultados são informativos: não
          substituem aconselhamento contábil, fiscal, jurídico ou financeiro
          profissional. Use o bom senso.
        </p>
      </Section>

      <Section titulo="10. Limitação de responsabilidade">
        <Ul>
          <li>
            A CrescIX é fornecida no estado em que se encontra. Fazemos o
            melhor que podemos, mas não garantimos que vai atender a todos
            os seus objetivos.
          </li>
          <li>
            Não nos responsabilizamos por decisões de negócio que você tomar
            com base nos relatórios e análises da plataforma.
          </li>
          <li>
            Faça backup das informações importantes. Mantemos cópias, mas
            falhas raras de infraestrutura podem acontecer.
          </li>
          <li>
            Nossa responsabilidade financeira fica limitada ao valor que
            você pagou pelo serviço nos 12 meses anteriores ao incidente.
          </li>
        </Ul>
        <p className="mt-3 text-white/60">
          Este limite não afasta os direitos que o Código de Defesa do
          Consumidor te garante: nada aqui pretende excluir a nossa
          responsabilidade por vício ou defeito do serviço.
        </p>
      </Section>

      <Section titulo="11. Encerramento">
        <p>
          Você pode encerrar sua conta a qualquer momento enviando e-mail
          pra{" "}
          <a
            href={`mailto:${EMPRESA.emailDpo}`}
            className="text-green-400 hover:text-green-300"
          >
            {EMPRESA.emailDpo}
          </a>
          . Em até 30 dias após a solicitação, seus dados são apagados.
          Podemos encerrar sua conta se você violar estes termos. Neste
          caso, te avisamos por e-mail antes.
        </p>
      </Section>

      <Section titulo="12. Atualizações destes termos">
        <p>
          Podemos atualizar estes termos. Quando a mudança for
          significativa, te avisamos por e-mail e na interface com
          antecedência. Se você não concordar, pode encerrar a conta antes
          da nova versão entrar em vigor, com devolução proporcional do
          tempo pago e não usado.
        </p>
      </Section>

      <Section titulo="13. Lei aplicável e foro">
        <p>
          Estes termos seguem a lei brasileira. Fica eleito o foro da
          comarca de {EMPRESA.comarca} para as questões originadas deles.
          Se você for consumidor, essa escolha não impede que você
          processe no foro do seu domicílio, como permite o Código de
          Defesa do Consumidor.
        </p>
      </Section>
    </LegalShell>
  );
}
