import { Shield } from "lucide-react";
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
 * Política de Privacidade da CrescIX: versão landing-page.
 *
 * Espelha a página equivalente do crescix-web pra que o visitante
 * público veja o mesmo compromisso antes de criar conta. Texto pensado
 * pra atender a LGPD (Lei 13.709/2018) em português acessível.
 *
 * O que esta versão descreve e a do app não: os dados de LEAD que os
 * formulários desta landing coletam (contato, teste grátis, feedback) e
 * o Formspree, que é o operador que recebe esses envios. Se um
 * formulário mudar de campo ou de destino, esta página muda junto.
 *
 * A seção 2.3 afirma que nada é coletado de quem só navega. Isso só
 * continua verdade enquanto nenhum recurso de terceiro for carregado
 * pela página — foi por isso que as fontes saíram do CDN do Google.
 * Qualquer script, fonte, mapa ou vídeo externo que entrar invalida a
 * afirmação, aqui e na Política de Cookies.
 */

const UPDATED_AT = "3 de novembro de 2026";

export default function Privacidade() {
  useSEO({
    canonicalPath: "/privacidade",
    title: "Política de Privacidade | CrescIX",
    description:
      "Como a CrescIX coleta, usa e protege seus dados, em linguagem clara e de acordo com a LGPD (Lei 13.709/2018).",
  });

  return (
    <LegalShell
      eyebrow="Privacidade"
      titulo="Política de Privacidade"
      atualizadoEm={UPDATED_AT}
      icone={<Shield className="h-5 w-5 text-green-400" />}
      rodape={
        <>
          Dúvidas? Manda um e-mail pra{" "}
          <a
            href={`mailto:${EMPRESA.emailDpo}`}
            className="text-green-400 hover:text-green-300"
          >
            {EMPRESA.emailDpo}
          </a>
          . Respondemos em até 5 dias úteis.
        </>
      }
    >
      <Intro>
        A CrescIX leva sua privacidade a sério. Este documento explica, em
        português claro, quais dados coletamos, pra que usamos, com quem
        compartilhamos e quais são seus direitos. Em conformidade com a Lei
        Geral de Proteção de Dados (LGPD), Lei nº 13.709/2018.
      </Intro>

      <Section titulo="1. Quem é o controlador dos seus dados">
        <p className="mb-4">
          Controlador é quem decide o que fazer com os dados pessoais e
          responde por isso. No nosso caso:
        </p>
        <IdentificacaoBox>
          <p className="text-white font-semibold">
            {EMPRESA.nomeFantasia}
          </p>
          <p>{identificacaoFornecedor()}</p>
          <p>{EMPRESA.endereco}</p>
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
        <p className="mt-4">
          A CrescIX é uma plataforma de gestão financeira pra pequenos
          negócios brasileiros. Operamos a partir de {EMPRESA.cidade}. Nesta
          política, &quot;nós&quot;, &quot;CrescIX&quot; e &quot;serviço&quot;
          significam o time e o produto. &quot;Você&quot; é o visitante deste
          site ou usuário que cria uma conta no app.
        </p>
      </Section>

      <Section titulo="2. Quais dados coletamos">
        <p className="mb-3">
          Coletamos somente o que é necessário pra o serviço funcionar.
        </p>

        <h3 className="text-white font-semibold text-base mt-5 mb-2">
          2.1. Quando você preenche um formulário neste site
        </h3>
        <Ul>
          <li>
            <strong>Formulário de contato:</strong> nome, e-mail, empresa
            (opcional) e a mensagem que você escrever.
          </li>
          <li>
            <strong>Pedido de teste grátis:</strong> nome, e-mail, WhatsApp
            (opcional), nome do negócio, tipo de comércio, faixa de tamanho
            da equipe e, se você quiser contar, o seu maior desafio hoje.
          </li>
          <li>
            <strong>Formulário de feedback:</strong> a nota que você der, o
            recurso que mais gostou, o que mudaria e, opcionalmente, seu
            e-mail — ele pode ficar em branco, e aí o feedback é anônimo.
          </li>
        </Ul>
        <p className="mt-3">
          Esses envios passam pelo <strong className="text-white">Formspree</strong>,
          serviço que recebe o formulário e entrega no nosso e-mail. Ele
          registra também o seu endereço IP, como proteção antispam. Usamos
          esses dados pra responder você e, no caso do teste, pra liberar o
          acesso — nunca pra montar mala direta.
        </p>

        <h3 className="text-white font-semibold text-base mt-5 mb-2">
          2.2. Quando você cria uma conta no app
        </h3>
        <Ul>
          <li>
            <strong>Cadastro:</strong> nome, e-mail, telefone e uma senha
            (armazenada criptografada, jamais em texto puro).
          </li>
          <li>
            <strong>Negócio:</strong> tipo de comércio, fornecedores,
            clientes, produtos, pedidos, contas a pagar e receber.
            Informações que você mesmo cadastra ou registra via bot.
          </li>
          <li>
            <strong>Telegram e WhatsApp (opcional):</strong> se vincular sua
            conta ao bot, guardamos o identificador do chat pra ligar as
            mensagens à sua conta.
          </li>
          <li>
            <strong>Áudios enviados ao bot:</strong> processados pela OpenAI
            (Whisper) pra transcrição. O áudio em si não é guardado, só o
            texto resultante.
          </li>
          <li>
            <strong>Assinatura:</strong> quando você contrata um plano, o
            Mercado Pago processa a cobrança. Guardamos o identificador do
            pagamento e, no cartão, só a bandeira e os 4 últimos dígitos.
            Nunca temos acesso ao número completo, à validade ou ao CVV.
          </li>
          <li>
            <strong>Logs técnicos:</strong> endereço IP e horário de acesso.
            Usados pra segurança e detecção de abuso. Retidos por até 90
            dias.
          </li>
        </Ul>

        <h3 className="text-white font-semibold text-base mt-5 mb-2">
          2.3. Quando você só navega neste site
        </h3>
        <p>
          Nada é coletado. Não gravamos cookie nenhum, não usamos
          analytics, pixel de anúncio ou rastreador, e as páginas, imagens
          e fontes vêm todas do nosso próprio domínio — nenhuma requisição
          sai pro servidor de outra empresa enquanto você navega. Está
          detalhado na{" "}
          <a
            href="/cookies"
            className="text-green-400 hover:text-green-300 underline underline-offset-2"
          >
            Política de Cookies
          </a>
          .
        </p>
        <p className="mt-4">
          <strong className="text-white">Não coletamos:</strong> cookies de
          rastreamento, dados de localização precisa, dados biométricos ou
          qualquer informação sensível desnecessária ao serviço.
        </p>
      </Section>

      <Section titulo="3. Pra que usamos seus dados">
        <Ul>
          <li>
            Responder quem nos procura pelo formulário de contato e liberar
            o acesso de quem pede o teste grátis.
          </li>
          <li>
            Operar o serviço (autenticação, registros financeiros,
            relatórios, cobrança da assinatura).
          </li>
          <li>
            Comunicação operacional: confirmação de cadastro, recuperação de
            senha, avisos de vencimento e avisos relacionados à conta.
          </li>
          <li>
            Gerar análises e sugestões pelo recurso &quot;Análise IA&quot;:
            processados pela OpenAI, mas não usados pra treinar modelos.
          </li>
          <li>
            Entender o que melhorar no produto, a partir do que você escreve
            no formulário de feedback.
          </li>
          <li>
            Segurança: detectar uso indevido, prevenir fraude, fazer backup
            pra evitar perda de informação.
          </li>
        </Ul>
        <p className="mt-4">
          <strong className="text-white">Não fazemos:</strong> marketing
          direto sem você ter pedido, venda de dados ou compartilhamento com
          terceiros que não sejam essenciais à operação.
        </p>
      </Section>

      <Section titulo="4. Base legal (LGPD art. 7º)">
        <p>O tratamento dos seus dados se baseia em:</p>
        <Ul>
          <li>
            <strong>Consentimento</strong> (art. 7º, I): nos formulários
            deste site, você marca a caixa de aceite antes de enviar. No
            cadastro do app, você aceita esta política e os termos de uso.
          </li>
          <li>
            <strong>Execução de contrato</strong> (art. 7º, V): pra entregar
            o serviço que você contratou e processar a sua assinatura.
          </li>
          <li>
            <strong>Legítimo interesse</strong> (art. 7º, IX): pra segurança
            da plataforma e prevenção de fraudes.
          </li>
          <li>
            <strong>Cumprimento de obrigação legal</strong> (art. 7º, II):
            quando a lei exige que a gente guarde ou informe algo.
          </li>
        </Ul>
      </Section>

      <Section titulo="5. Com quem compartilhamos">
        <p className="mb-3">
          Apenas com prestadores essenciais à operação, que atuam como
          operadores por nossa conta:
        </p>
        <Ul>
          <li>
            <strong>Formspree</strong> (Estados Unidos) — recebe os
            formulários deste site e entrega no nosso e-mail.
          </li>
          <li>
            <strong>OpenAI</strong> (Estados Unidos) — transcrição de áudios
            e geração de análises. Não recebem dados de contato, só o
            conteúdo necessário pra processar o pedido.
          </li>
          <li>
            <strong>Mercado Pago</strong> (Brasil) — processamento dos
            pagamentos por PIX e cartão, com certificação PCI-DSS.
          </li>
          <li>
            <strong>Telegram e WhatsApp</strong> — quando você opta pelo
            bot, eles processam as mensagens conforme as políticas deles.
          </li>
          <li>
            <strong>Provedores de infraestrutura</strong> (hospedagem, banco
            de dados) — guardam os dados sob acordos de proteção.
          </li>
          <li>
            <strong>Sentry</strong> — no app, quando configurado, recebe
            relatórios técnicos de erro que podem conter o seu IP e a tela
            em que o erro aconteceu.
          </li>
        </Ul>
        <p className="mt-4">
          Não vendemos, alugamos ou trocamos seus dados com ninguém. Em caso
          de exigência judicial, atendemos apenas dentro dos limites da
          ordem.
        </p>
      </Section>

      <Section titulo="6. Transferência internacional">
        <p>
          Formspree, OpenAI e Sentry são empresas de fora do Brasil, então
          parte dos dados descritos acima é tratada no exterior. A LGPD
          permite isso no art. 33; os nossos fundamentos são a execução do
          contrato com você, o seu consentimento nos formulários e o
          legítimo interesse em operar o serviço. Escolhemos fornecedores que
          publicam compromissos contratuais de proteção de dados, e evitamos
          a transferência quando ela não é necessária — foi o caso das fontes
          do site, que saíram do CDN do Google e passaram a ser servidas pelo
          nosso domínio.
        </p>
      </Section>

      <Section titulo="7. Seus direitos (LGPD art. 18)">
        <p className="mb-3">Você pode, a qualquer momento:</p>
        <Ul>
          <li>
            <strong>Acessar</strong> os dados que temos sobre você.
          </li>
          <li>
            <strong>Corrigir</strong> dados incorretos (no app você mesmo
            edita).
          </li>
          <li>
            <strong>Excluir</strong> sua conta e os dados associados, ou
            pedir que apaguemos um formulário que você enviou.
          </li>
          <li>
            <strong>Exportar</strong> seus dados num formato estruturado
            (CSV/JSON).
          </li>
          <li>
            <strong>Revogar consentimento</strong> a qualquer momento. No
            caso da conta, isso a encerra.
          </li>
          <li>
            <strong>Saber com quem compartilhamos</strong> seus dados — a
            lista está na seção 5.
          </li>
          <li>
            <strong>Reclamar</strong> à Autoridade Nacional de Proteção de
            Dados (ANPD).
          </li>
        </Ul>
        <p className="mt-4">
          Basta escrever pro nosso Encarregado (seção 11). Respondemos em
          até 5 dias úteis.
        </p>
      </Section>

      <Section titulo="8. Segurança">
        <Ul>
          <li>Senhas armazenadas com hash bcrypt.</li>
          <li>Comunicação via HTTPS.</li>
          <li>Autenticação por token JWT com expiração e rotação.</li>
          <li>Limitação de tentativas de login pra prevenir força bruta.</li>
          <li>
            Dados isolados por usuário: ninguém vê os dados de ninguém.
          </li>
        </Ul>
        <p className="mt-4">
          Se acontecer um incidente de segurança que possa te colocar em
          risco, comunicamos você e a ANPD, como manda o art. 48 da LGPD.
        </p>
      </Section>

      <Section titulo="9. Cookies e armazenamento local">
        <p>
          Neste site não existe cookie. No app (depois do login), guardamos
          no <em>localStorage</em> apenas o token JWT que mantém você logado
          e algumas preferências de interface. O detalhamento completo está
          na{" "}
          <a
            href="/cookies"
            className="text-green-400 hover:text-green-300 underline underline-offset-2"
          >
            Política de Cookies
          </a>
          .
        </p>
      </Section>

      <Section titulo="10. Retenção">
        <Ul>
          <li>
            <strong>Formulários deste site:</strong> ficam na nossa caixa de
            e-mail enquanto a conversa fizer sentido, e no máximo 24 meses.
            Depois apagamos, e você pode pedir a exclusão antes disso.
          </li>
          <li>
            <strong>Conta ativa:</strong> mantemos os dados enquanto sua
            conta existir.
          </li>
          <li>
            <strong>Após exclusão:</strong> apagamos seus dados em até 30
            dias, exceto quando há obrigação legal de retenção (ex.:
            registros fiscais e os registros de acesso que o Marco Civil da
            Internet manda guardar por 6 meses).
          </li>
          <li>
            <strong>Logs técnicos:</strong> até 90 dias.
          </li>
        </Ul>
      </Section>

      <Section titulo="11. Contato do Encarregado (DPO)">
        <p>
          Pra exercer seus direitos ou tirar dúvidas sobre esta política,
          fale com nosso Encarregado pelo Tratamento de Dados Pessoais:
        </p>
        <p className="mt-3 font-mono text-green-400">{EMPRESA.emailDpo}</p>
      </Section>

      <Section titulo="12. Crianças e adolescentes">
        <p>
          A CrescIX é uma ferramenta de trabalho e não se destina a menores
          de 18 anos. Não coletamos dados de crianças e adolescentes de
          propósito. Se isso acontecer por engano, escreva pro Encarregado
          que apagamos.
        </p>
      </Section>

      <Section titulo="13. Atualizações">
        <p>
          Esta política pode ser atualizada pra refletir mudanças no serviço
          ou na legislação. Quando isso acontecer, vamos avisar por e-mail e
          na própria interface antes da nova versão entrar em vigor.
        </p>
      </Section>
    </LegalShell>
  );
}
