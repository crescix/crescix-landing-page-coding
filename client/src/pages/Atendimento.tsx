import { useLocation } from "wouter";
import { Check, MessageCircle } from "lucide-react";
import Palco from "@/components/wayfind/Palco";
import SiteFooter from "@/components/wayfind/SiteFooter";
import { useSEO } from "@/hooks/useSEO";
import { useWayfind } from "@/hooks/useWayfind";
import { FOTOS } from "@/lib/fotos";

const WHATSAPP_URL =
  "https://wa.me/5535984219965?text=Ol%C3%A1!%20Vi%20a%20p%C3%A1gina%20de%20atendimento%20autom%C3%A1tico%20e%20queria%20saber%20mais.";

/* ── Conversa que ilustra o produto no hero ───────────────────────────────── */
const CONVERSA = [
  { de: "cliente", texto: "oi, quanto custa o plano mensal?" },
  {
    de: "bot",
    texto:
      "Olá, Ana! Sou o assistente de atendimento da Academia Corpo em Movimento",
  },
  {
    de: "bot",
    texto:
      "Como posso te ajudar hoje?\n\n1  Agendar um horário\n2  Remarcar ou cancelar\n3  Matrículas e planos\n4  Financeiro",
  },
  { de: "cliente", texto: "3" },
  {
    de: "bot",
    texto:
      "Já avisei o setor de Matrículas e planos\nVocê será respondido por aqui em instantes.",
  },
];

const DORES = [
  {
    titulo: "Fora do horário",
    texto: "Boa parte das mensagens chega quando não tem ninguém na recepção.",
  },
  {
    titulo: "Recepção ocupada",
    texto:
      "Quem está no balcão atende quem está na frente, e o WhatsApp acumula.",
  },
  {
    titulo: "Falta sem aviso",
    texto: "Horário marcado e ninguém aparece, porque nada lembrou o cliente.",
  },
];

const COMO_FUNCIONA = [
  {
    titulo: "Atende na hora",
    texto:
      "O cliente manda mensagem a qualquer hora e recebe resposta em segundos, inclusive de madrugada, no fim de semana e no feriado.",
  },
  {
    titulo: "Direciona pro setor certo",
    texto:
      "Financeiro, matrículas, recepção. Quem precisa de gente é encaminhado pro WhatsApp do setor responsável, com nome e contato.",
  },
  {
    titulo: "Agenda sozinho",
    texto:
      "Mostra os horários livres na agenda, marca direto no Google Agenda e confere o horário no instante da confirmação pra não marcar dois clientes no mesmo lugar.",
  },
  {
    titulo: "Lembra e confirma",
    texto:
      "Envia lembrete 24h antes e pede confirmação. Quem não puder ir remarca ali mesmo, e o horário volta a ficar livre.",
  },
];

const RECURSOS = [
  {
    titulo: "Entende o jeito de escrever do cliente",
    texto:
      "Não é menu engessado. Quem escreve “queria marcar um horário” cai direto no agendamento, e quem escreve “preciso falar com alguém” vai pro atendimento humano.",
  },
  {
    titulo: "Confere a agenda antes de confirmar",
    texto:
      "O horário é conferido na agenda no instante da confirmação. Se alguém reservou no meio do caminho, o cliente recebe as opções que sobraram.",
  },
  {
    titulo: "Remarcação e cancelamento sem ligação",
    texto:
      "O próprio cliente resolve pelo WhatsApp, e a agenda é atualizada na hora. A recepção não precisa parar o que está fazendo.",
  },
  {
    titulo: "Sua agenda de sempre",
    texto:
      "Tudo cai no Google Agenda que a equipe já usa. Ninguém precisa aprender sistema novo nem abrir outro aplicativo.",
  },
  {
    titulo: "Cada setor no seu WhatsApp",
    texto:
      "O financeiro recebe o que é financeiro, a recepção recebe o que é dela. As mensagens seguintes do cliente continuam indo pro mesmo lugar.",
  },
  {
    titulo: "Configurado com a sua cara",
    texto:
      "Nome do estabelecimento, serviços, horários, dias de funcionamento e setores. O cliente sente que está falando com você, não com um robô genérico.",
  },
];

const PARA_QUEM = [
  {
    titulo: "Academias e estúdios",
    texto: "Aula experimental, avaliação física e dúvida de plano fora do horário.",
  },
  {
    titulo: "Clínicas e consultórios",
    texto: "Psicologia, odontologia, dermatologia, nutrição e fisioterapia.",
  },
  {
    titulo: "Laboratórios",
    texto: "Agendamento de coleta e orientação de preparo antes do exame.",
  },
  {
    titulo: "Salões e estética",
    texto: "Agenda cheia, muitas remarcações e cliente que some sem avisar.",
  },
  {
    titulo: "Oficinas e assistências",
    texto: "Orçamento, status do serviço e agendamento de entrega ou retirada.",
  },
  {
    titulo: "Comércio e serviços",
    texto: "Loja, escritório, prestador. Se o cliente chama no WhatsApp, encaixa.",
  },
];

export default function Atendimento() {
  useWayfind();
  useSEO({
    title: "Atendimento automático no WhatsApp | CrescIX",
    description:
      "Assistente que atende, direciona e agenda sozinho no WhatsApp do seu negócio. Feito sob medida pra qualquer estabelecimento. Responde em segundos, 24 horas por dia.",
    canonicalPath: "/atendimento",
  });

  const [, navigate] = useLocation();

  return (
    <>
      {/* ── Barra superior enxuta ─────────────────────────────────────────── */}
      <nav className="slab on-ink" aria-label="Principal">
        <div className="container slab__bar">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="slab__logo"
            aria-label="Voltar para a página inicial"
          >
            <img
              src={`${import.meta.env.BASE_URL}images/logo.png`}
              alt="CrescIX"
              width={703}
              height={260}
            />
          </button>

          <div className="slab__right">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="slab__quiet"
            >
              Conhecer a CrescIX
            </button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              Quero testar
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* ── Hero ───────────────────────────────────────────────────────── */}
        <section className="hero">
          <div className="container hero__grid">
            <div className="hero__text">
              <h1 className="display-s">
                Seu WhatsApp responde enquanto você atende.
              </h1>

              <p className="lead">
                Um assistente que conversa com quem chega, tira dúvida,
                direciona pro setor certo e ainda agenda na sua agenda. Sem
                deixar ninguém esperando, a qualquer hora do dia.
              </p>

              <div className="actions">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                >
                  Quero testar de graça
                </a>
                <a href="#como-funciona" className="btn">
                  Ver como funciona
                </a>
              </div>

              <ul className="facts">
                <li>Atendimento 24 horas</li>
                <li>14 dias grátis</li>
                <li>Instalação por nossa conta</li>
                <li>Usa o WhatsApp que você já tem</li>
              </ul>
            </div>

            {/* Conversa ilustrativa */}
            <Palco
              foto={FOTOS.haltere}
              slot="hero"
              descricao="A recepção de um negócio que usa o atendimento, ou a conversa real capturada do WhatsApp"
              posicao="30% 55%"
            >
              <div className="sign stage__sign stage__sign--low" data-keep>
                <span>Tempo de resposta</span>
                <b>2 segundos</b>
              </div>

              <div className="plate stage__plate stage__plate--tall" data-keep>
                {/* Negócio fictício: o rótulo evita que a conversa de
                    demonstração seja lida como cliente real. */}
                <div className="plate__bar">
                  <span className="audio">
                    <MessageCircle size={16} aria-hidden="true" />
                    <b>Academia Corpo em Movimento</b>
                  </span>
                  <span>exemplo de conversa</span>
                </div>
                <div className="plate__body">
                  {CONVERSA.map((m, i) => (
                    <p
                      key={i}
                      className={
                        m.de === "cliente" ? "bubble bubble--me" : "bubble"
                      }
                    >
                      {m.texto}
                    </p>
                  ))}
                </div>
              </div>
            </Palco>
          </div>
        </section>

        {/* ── A dor ──────────────────────────────────────────────────────── */}
        <section className="section band">
          <div className="container">
            <div className="head head--split">
              <h2>A pessoa decide às 22h de um sábado.</h2>
              <p className="lead">
                Ela manda mensagem perguntando o valor, ninguém responde na
                hora, e na segunda-feira já fechou com quem respondeu primeiro.
                O anúncio que trouxe esse contato você pagou. A venda, quem
                levou foi o concorrente.
              </p>
            </div>

            <ul className="rows">
              {DORES.map((d) => (
                <li key={d.titulo}>
                  <h3>{d.titulo}</h3>
                  <p>{d.texto}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Como funciona ──────────────────────────────────────────────── */}
        <section id="como-funciona" className="section--l">
          <div className="container">
            <div className="head">
              <h2>Quatro coisas que ele faz sozinho.</h2>
              <p className="lead">
                Sem instalar nada, sem treinar equipe e sem trocar o número que
                seus clientes já conhecem.
              </p>
            </div>

            <ol className="route">
              {COMO_FUNCIONA.map((p) => (
                <li key={p.titulo}>
                  <h3>{p.titulo}</h3>
                  <p>{p.texto}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Recursos ───────────────────────────────────────────────────── */}
        <section className="section band">
          <div className="container">
            <div className="head">
              <h2>Pensado pra rotina de quem atende.</h2>
              <p className="lead">Detalhes que importam.</p>
            </div>

            <div className="cells">
              {RECURSOS.map((r) => (
                <div key={r.titulo}>
                  <h3>{r.titulo}</h3>
                  <p>{r.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Para quem ──────────────────────────────────────────────────── */}
        <section className="section on-ink">
          <div className="container">
            <div className="head head--split">
              <h2>Serve pra qualquer negócio que atende cliente.</h2>
              <p className="lead">
                Se as pessoas falam com você pelo WhatsApp, o assistente se
                encaixa. Estes são só alguns exemplos de quem já faz sentido:
              </p>
            </div>

            <ul className="board">
              {PARA_QUEM.map((s) => (
                <li key={s.titulo}>
                  <h3>{s.titulo}</h3>
                  <p>{s.texto}</p>
                </li>
              ))}
            </ul>

            {/* Feito sob medida: o argumento central */}
            <div className="statement sob-medida">
              <h3>Não achou o seu tipo de negócio? A gente monta do seu jeito.</h3>
              <p>
                Feito sob medida. Cada negócio atende de um jeito. Por isso o
                assistente é configurado pra você: os serviços, os setores, os
                horários e as respostas são montados de acordo com o que o seu
                estabelecimento precisa. Se tiver uma necessidade específica, a
                gente adapta.
              </p>
              <div className="actions">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                >
                  Contar o que preciso
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Oferta ─────────────────────────────────────────────────────── */}
        <section className="section--l">
          <div className="container oferta">
            <div className="oferta__placa plate" aria-hidden="true">
              <b>14</b>
              <span>dias grátis</span>
            </div>

            <div className="oferta__texto">
              <h2>Coloque o assistente pra atender pra você em 14 dias grátis.</h2>

              <p className="lead">
                Comece hoje. A gente instala, configura tudo com a cara do seu
                negócio e liga o assistente no seu WhatsApp. Se depois de duas
                semanas não quiser continuar, é só desligar. Sem multa, sem
                fidelidade, sem cobrança.
              </p>

              <ul className="facts">
                {[
                  "14 dias grátis, sem cartão",
                  "Configuramos tudo pra você",
                  "Usa o WhatsApp que você já tem",
                  "Sem fidelidade e sem multa",
                ].map((item) => (
                  <li key={item}>
                    <Check size={16} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="actions">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                >
                  Começar teste grátis
                </a>
              </div>
              <p className="small muted">
                Depois do período de teste: R$ 147 por mês.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter fotos={[FOTOS.haltere]} />
    </>
  );
}
