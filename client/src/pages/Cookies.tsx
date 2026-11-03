import { Cookie } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { LegalShell, Intro, Section, Ul } from "@/components/legal/LegalShell";
import { EMPRESA } from "@/lib/empresa";

/**
 * Política de Cookies da landing page.
 *
 * O texto descreve o que o site REALMENTE faz hoje, auditado em
 * 03/11/2026: nenhum cookie é gravado (não existe `document.cookie` nem
 * cookie de servidor — a landing é estática), só duas chaves de
 * localStorage (`theme` e `crescix:lgpd-cookies-accepted`) e uma única
 * requisição a terceiro, o Formspree, no envio de formulário. As fontes
 * deixaram de vir do CDN do Google e são servidas por este domínio.
 *
 * SE ENTRAR ANALYTICS, PIXEL OU EMBED (GA4, Meta Pixel, YouTube, Hotjar,
 * mapa): este texto fica falso e o banner de cookies passa a precisar de
 * escolha granular com recusa. Atualize os dois juntos.
 */

const UPDATED_AT = "3 de novembro de 2026";

export default function Cookies() {
  useSEO({
    canonicalPath: "/cookies",
    title: "Política de Cookies | CrescIX",
    description:
      "O que a CrescIX guarda no seu navegador: nenhum cookie de rastreamento, nenhum analytics, nenhum pixel de anúncio. Só o armazenamento essencial.",
  });

  return (
    <LegalShell
      eyebrow="Cookies"
      titulo="Política de Cookies"
      atualizadoEm={UPDATED_AT}
      icone={<Cookie className="h-5 w-5 text-green-400" />}
      rodape={
        <>
          Dúvidas sobre esta política? Escreva pra{" "}
          <a
            href={`mailto:${EMPRESA.emailDpo}`}
            className="text-green-400 hover:text-green-300"
          >
            {EMPRESA.emailDpo}
          </a>
          .
        </>
      }
    >
      <Intro>
        Resumo em uma linha: este site <strong>não grava cookies</strong> e não
        usa analytics, pixel de anúncio nem rastreador de terceiros. O texto
        abaixo explica o pouco que fica guardado no seu navegador e por quê.
      </Intro>

      <Section titulo="1. O que é cookie e o que é armazenamento local">
        <p>
          <strong className="text-white">Cookie</strong> é um arquivinho que um
          site grava no navegador e que volta sozinho em cada requisição ao
          servidor. <strong className="text-white">Armazenamento local</strong>{" "}
          (localStorage) também fica no navegador, mas nunca é enviado
          automaticamente: só o código da própria página lê. A distinção importa
          porque este site usa o segundo e não o primeiro.
        </p>
      </Section>

      <Section titulo="2. Cookies que usamos neste site">
        <p>
          <strong className="text-white">Nenhum.</strong> As páginas de
          crescix.com.br são arquivos estáticos: não há sessão de servidor, não
          há login aqui e nenhum script grava cookie. Se o seu navegador acusar
          algum cookie em <em>crescix.com.br</em>, queremos saber — escreva pra{" "}
          {EMPRESA.emailDpo}.
        </p>
      </Section>

      <Section titulo="3. O que guardamos no armazenamento local">
        <p className="mb-3">
          Duas chaves, as duas estritamente necessárias pro site funcionar como
          você espera. Nenhuma identifica você.
        </p>
        <Ul>
          <li>
            <strong>theme</strong> — se você usa o site no tema claro ou escuro.
            Fica até você limpar os dados do navegador.
          </li>
          <li>
            <strong>crescix:lgpd-cookies-accepted</strong> — registra que você já
            fechou o aviso de privacidade, pra ele não reaparecer em cada visita.
            Fica até você limpar os dados do navegador.
          </li>
        </Ul>
        <p className="mt-4">
          Nada disso sai do seu dispositivo. Não temos como ler essas chaves nem
          ligá-las a uma pessoa.
        </p>
      </Section>

      <Section titulo="4. Terceiros que recebem seu endereço IP">
        <p className="mb-3">
          Carregar qualquer arquivo de outro domínio revela o seu IP pra quem
          serve o arquivo. Aqui, <strong className="text-white">enquanto você
          apenas navega, isso não acontece</strong>: as páginas, as imagens, o
          código e as fontes vêm todos deste mesmo domínio. Um único serviço de
          fora entra em cena, e só se você agir:
        </p>
        <Ul>
          <li>
            <strong>Formspree</strong> (formspree.io) — só quando você{" "}
            <em>envia</em> um formulário. Recebe o conteúdo que você digitou e o
            seu IP, e repassa pro nosso e-mail. É uma empresa dos Estados
            Unidos, então esses dados saem do Brasil; a LGPD permite a
            transferência internacional no art. 33, e o nosso fundamento é o seu
            consentimento no próprio formulário. O que fazemos com esses dados
            está na{" "}
            <a
              href="/privacidade"
              className="text-green-400 hover:text-green-300 underline underline-offset-2"
            >
              Política de Privacidade
            </a>
            .
          </li>
        </Ul>
        <p className="mt-4">
          <strong className="text-white">Sobre as fontes:</strong> até
          novembro de 2026 este site carregava as fontes do CDN do Google, e
          nisso o Google recebia o IP de todo visitante. Passamos a servi-las do
          nosso próprio domínio exatamente pra encerrar essa transferência.
          Nenhuma requisição sai daqui pra fonts.googleapis.com.
        </p>
      </Section>

      <Section titulo="5. O que NÃO existe aqui">
        <Ul>
          <li>Google Analytics ou qualquer medidor de audiência.</li>
          <li>
            Pixel do Meta/Facebook, Google Ads, TikTok ou qualquer tag de
            remarketing.
          </li>
          <li>Mapa, vídeo do YouTube ou chat de terceiros embutido.</li>
          <li>Cookie de parceiro, de afiliado ou de rede de anúncio.</li>
        </Ul>
        <p className="mt-4">
          Se um dia algum desses entrar, esta página muda no mesmo dia e o aviso
          de cookies passa a oferecer aceitar ou recusar por categoria, antes de
          qualquer script carregar.
        </p>
      </Section>

      <Section titulo="6. O aviso de cookies é obrigatório?">
        <p>
          Com a configuração atual, <strong className="text-white">não</strong>.
          A LGPD e a orientação da ANPD sobre cookies dispensam consentimento
          para armazenamento estritamente necessário, que é o nosso caso. O aviso
          que aparece na primeira visita é informativo, por transparência — por
          isso ele só tem &quot;Entendi&quot;, e não aceitar/recusar. Fechá-lo não
          libera rastreamento nenhum, porque não há rastreamento pra liberar.
        </p>
      </Section>

      <Section titulo="7. Como apagar o que está guardado">
        <p>
          Limpar os dados do site no navegador apaga as duas chaves de uma vez.
          No Chrome e no Edge: cadeado ao lado do endereço → &quot;Cookies e
          dados do site&quot; → &quot;Gerenciar dados&quot;. No Firefox e no
          Safari, o caminho equivalente fica nas preferências de privacidade.
          Navegar em janela privada também descarta tudo ao fechar.
        </p>
      </Section>

      <Section titulo="8. O app e o blog são separados">
        <p>
          Esta política cobre o site público <em>crescix.com.br</em>. O
          aplicativo (depois do login) guarda o token que mantém você conectado e
          algumas preferências de tela — está descrito na política de privacidade
          dele. O{" "}
          <a
            href="https://blog.crescix.com.br"
            className="text-green-400 hover:text-green-300 underline underline-offset-2"
          >
            blog
          </a>{" "}
          também não grava cookies nem usa analytics.
        </p>
      </Section>
    </LegalShell>
  );
}
