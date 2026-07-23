import { ArrowLeft, Shield } from "lucide-react";
import { useLocation } from "wouter";
import { useSEO } from "@/hooks/useSEO";

/**
 * Política de Privacidade da CrescIX: versão landing-page.
 *
 * Espelha o conteúdo da página equivalente no crescix-web pra que o
 * visitante público veja o mesmo compromisso de antes mesmo de criar
 * conta. Texto pensado pra atender o mínimo essencial da LGPD
 * (Lei 13.709/2018), em português acessível.
 */

const UPDATED_AT = "18 de maio de 2026";

export default function Privacidade() {
  useSEO({
    title: "Política de Privacidade | CrescIX",
    description:
      "Como a CrescIX coleta, usa e protege seus dados, em linguagem clara e de acordo com a LGPD (Lei 13.709/2018).",
  });

  const [, navigate] = useLocation();

  return (
    <div className="w-full min-h-screen bg-[var(--color-brand-navy)] text-white">
      <div className="max-w-3xl mx-auto px-5 md:px-8 py-10 md:py-16">

        {/* ── Header ───────────────────────────────────────────── */}
        <header className="mb-10">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-1.5 text-xs text-white/50 hover:text-green-400 transition-colors mb-6"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Voltar pra home
          </button>

          <div className="flex items-start gap-3 mb-3">
            <div className="h-11 w-11 rounded-2xl bg-green-500/15 border border-green-500/25 flex items-center justify-center flex-shrink-0">
              <Shield className="h-5 w-5 text-green-400" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-green-400 font-semibold mb-1">
                Privacidade
              </p>
              <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
                Política de Privacidade
              </h1>
              <p className="text-sm text-white/45 mt-1">
                Última atualização: {UPDATED_AT}
              </p>
            </div>
          </div>
        </header>

        {/* ── Conteúdo ────────────────────────────────────────── */}
        <article className="space-y-8 text-[15px] leading-relaxed text-white/75">

          <Intro>
            A CrescIX leva sua privacidade a sério. Este documento
            explica, em português claro, quais dados coletamos, pra que
            usamos, com quem compartilhamos e quais são seus direitos.
            Em conformidade com a Lei Geral de Proteção de Dados (LGPD),
            Lei nº 13.709/2018.
          </Intro>

          <Section titulo="1. Quem somos">
            <p>
              A CrescIX é uma plataforma de gestão financeira pra
              pequenos negócios brasileiros. Operamos a partir de Santa
              Rita do Sapucaí, MG. Nesta política, "nós", "CrescIX" e
              "serviço" significam o time e o produto. "Você" é o
              visitante deste site ou usuário que cria uma conta no app.
            </p>
          </Section>

          <Section titulo="2. Quais dados coletamos">
            <p className="mb-3">
              Coletamos somente o que é necessário pra o serviço
              funcionar:
            </p>
            <Ul>
              <li>
                <strong>Cadastro:</strong> nome, e-mail, telefone e uma
                senha (armazenada criptografada, jamais em texto puro).
              </li>
              <li>
                <strong>Negócio:</strong> tipo de comércio, fornecedores,
                clientes, produtos, pedidos, contas a pagar e receber.
                Informações que você mesmo cadastra ou registra via bot
                Telegram.
              </li>
              <li>
                <strong>Telegram (opcional):</strong> se vincular sua
                conta ao bot, guardamos o identificador do chat do
                Telegram pra ligar as mensagens à sua conta.
              </li>
              <li>
                <strong>Áudios enviados ao bot:</strong> processados pela
                OpenAI (Whisper) pra transcrição. O áudio em si não é
                guardado, só o texto resultante.
              </li>
              <li>
                <strong>Logs técnicos:</strong> endereço IP e horário de
                acesso. Usados pra segurança e detecção de abuso.
                Retidos por até 90 dias.
              </li>
              <li>
                <strong>Visitas neste site:</strong> não usamos cookies
                de rastreamento, analytics ou anúncios. Você pode
                navegar livremente sem deixar pegada.
              </li>
            </Ul>
            <p className="mt-4">
              <strong className="text-white">Não coletamos:</strong>{" "}
              cookies de rastreamento, dados de localização precisa,
              dados biométricos ou qualquer informação sensível
              desnecessária ao serviço.
            </p>
          </Section>

          <Section titulo="3. Pra que usamos seus dados">
            <Ul>
              <li>
                Operar o serviço (autenticação, registros financeiros,
                relatórios).
              </li>
              <li>
                Comunicação operacional: confirmação de cadastro,
                recuperação de senha, avisos relacionados à conta.
              </li>
              <li>
                Gerar análises e sugestões pelo recurso "Análise IA":
                processados pela OpenAI, mas não usados pra treinar
                modelos.
              </li>
              <li>
                Segurança: detectar uso indevido, prevenir fraude, fazer
                backup pra evitar perda de informação.
              </li>
            </Ul>
            <p className="mt-4">
              <strong className="text-white">Não fazemos:</strong>{" "}
              marketing direto, venda de dados ou compartilhamento com
              terceiros que não sejam essenciais à operação.
            </p>
          </Section>

          <Section titulo="4. Base legal (LGPD art. 7º)">
            <p>O tratamento dos seus dados se baseia em:</p>
            <Ul>
              <li>
                <strong>Execução de contrato</strong> (art. 7º, V): pra
                entregar o serviço que você contratou ao se cadastrar.
              </li>
              <li>
                <strong>Consentimento</strong> (art. 7º, I): você marca
                explicitamente no cadastro que aceita essa política e os
                termos de uso.
              </li>
              <li>
                <strong>Legítimo interesse</strong> (art. 7º, IX): pra
                segurança da plataforma e prevenção de fraudes.
              </li>
            </Ul>
          </Section>

          <Section titulo="5. Com quem compartilhamos">
            <p className="mb-3">
              Apenas com prestadores essenciais à operação, sob contrato
              com cláusulas de confidencialidade:
            </p>
            <Ul>
              <li>
                <strong>OpenAI:</strong> transcrição de áudios e
                geração de análises. Não recebem dados de contato, só
                o conteúdo necessário pra processar o pedido.
              </li>
              <li>
                <strong>Provedores de infraestrutura</strong> (banco de
                dados, servidor): guardam os dados criptografados, sob
                acordos de proteção.
              </li>
              <li>
                <strong>Telegram:</strong> quando você opta pelo bot,
                o Telegram processa as mensagens conforme a política
                deles.
              </li>
            </Ul>
            <p className="mt-4">
              Não vendemos, alugamos ou trocamos seus dados com
              ninguém. Em caso de exigência judicial, atendemos apenas
              dentro dos limites da ordem.
            </p>
          </Section>

          <Section titulo="6. Seus direitos (LGPD art. 18)">
            <p className="mb-3">Você pode, a qualquer momento:</p>
            <Ul>
              <li>
                <strong>Acessar</strong> os dados que temos sobre você.
              </li>
              <li>
                <strong>Corrigir</strong> dados incorretos (você mesmo
                edita no app).
              </li>
              <li>
                <strong>Excluir</strong> sua conta e os dados associados.
                Basta enviar e-mail pro nosso Encarregado.
              </li>
              <li>
                <strong>Exportar</strong> seus dados num formato
                estruturado (CSV/JSON).
              </li>
              <li>
                <strong>Revogar consentimento</strong> a qualquer
                momento. Isso encerra sua conta.
              </li>
              <li>
                <strong>Reclamar</strong> à Autoridade Nacional de
                Proteção de Dados (ANPD).
              </li>
            </Ul>
          </Section>

          <Section titulo="7. Segurança">
            <Ul>
              <li>Senhas armazenadas com hash bcrypt.</li>
              <li>Comunicação via HTTPS.</li>
              <li>
                Autenticação por token JWT com expiração e rotação.
              </li>
              <li>
                Limitação de tentativas de login pra prevenir força
                bruta.
              </li>
              <li>
                Dados isolados por usuário: ninguém vê os dados de
                ninguém.
              </li>
            </Ul>
          </Section>

          <Section titulo="8. Cookies e armazenamento local">
            <p>
              Não usamos cookies de rastreamento, analytics ou
              anúncios. No app (depois do login), guardamos no{" "}
              <em>localStorage</em> apenas o token JWT que mantém você
              logado e algumas preferências de interface. Tudo
              essencial pra o serviço funcionar.
            </p>
          </Section>

          <Section titulo="9. Retenção">
            <Ul>
              <li>
                <strong>Conta ativa:</strong> mantemos os dados enquanto
                sua conta existir.
              </li>
              <li>
                <strong>Após exclusão:</strong> apagamos seus dados em
                até 30 dias, exceto quando há obrigação legal de
                retenção (ex.: registros fiscais).
              </li>
              <li>
                <strong>Logs técnicos:</strong> até 90 dias.
              </li>
            </Ul>
          </Section>

          <Section titulo="10. Contato do Encarregado (DPO)">
            <p>
              Pra exercer seus direitos ou tirar dúvidas sobre esta
              política, fale com nosso Encarregado pelo Tratamento de
              Dados Pessoais:
            </p>
            <p className="mt-3 font-mono text-green-400">
              privacidade@crescix.com.br
            </p>
          </Section>

          <Section titulo="11. Atualizações">
            <p>
              Esta política pode ser atualizada pra refletir mudanças
              no serviço ou na legislação. Quando isso acontecer,
              vamos avisar por e-mail e na própria interface antes da
              nova versão entrar em vigor.
            </p>
          </Section>

          <footer className="pt-8 border-t border-white/10 text-sm text-white/45">
            Dúvidas? Manda um e-mail pra{" "}
            <a
              href="mailto:privacidade@crescix.com.br"
              className="text-green-400 hover:text-green-300"
            >
              privacidade@crescix.com.br
            </a>
            . Respondemos em até 5 dias úteis.
          </footer>
        </article>
      </div>
    </div>
  );
}

// ─── Primitivas de prose ──────────────────────────────────────────────────

function Intro({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-base md:text-lg text-white/85 leading-relaxed pb-2 border-b border-white/10">
      {children}
    </p>
  );
}

function Section({
  titulo,
  children,
}: {
  titulo: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="font-display text-lg md:text-xl font-bold text-white tracking-tight">
        {titulo}
      </h2>
      <div className="space-y-2">{children}</div>
    </section>
  );
}

function Ul({ children }: { children: React.ReactNode }) {
  return (
    <ul className="space-y-2 list-disc list-outside pl-5 marker:text-green-400">
      {children}
    </ul>
  );
}
