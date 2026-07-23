import { motion } from "framer-motion";
import { useLocation } from "wouter";
import {
  ArrowLeft,
  MessageCircle,
  CalendarCheck,
  Bell,
  Users,
  Clock,
  MoonStar,
  Building2,
  Dumbbell,
  Stethoscope,
  FlaskConical,
  Scissors,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

const WHATSAPP_URL =
  "https://wa.me/5535984219965?text=Ol%C3%A1!%20Vi%20a%20p%C3%A1gina%20de%20atendimento%20autom%C3%A1tico%20e%20queria%20saber%20mais.";

/* ── Conversa que ilustra o produto no hero ───────────────────────────────── */
const CONVERSA = [
  { de: "cliente", texto: "oi, quanto custa o plano mensal?" },
  {
    de: "bot",
    texto:
      "Olá, Ana! 👋 Sou o assistente de atendimento da Academia Corpo em Movimento 🤖",
  },
  {
    de: "bot",
    texto:
      "Como posso te ajudar hoje?\n\n1  📅 Agendar um horário\n2  🔄 Remarcar ou cancelar\n3  💬 Matrículas e planos\n4  💰 Financeiro",
  },
  { de: "cliente", texto: "3" },
  {
    de: "bot",
    texto:
      "Já avisei o setor de Matrículas e planos 💬\nVocê será respondido por aqui em instantes.",
  },
];

const COMO_FUNCIONA = [
  {
    icone: MessageCircle,
    titulo: "Atende na hora",
    texto:
      "O cliente manda mensagem a qualquer hora e recebe resposta em segundos, inclusive de madrugada, no fim de semana e no feriado.",
  },
  {
    icone: Users,
    titulo: "Direciona pro setor certo",
    texto:
      "Financeiro, matrículas, recepção. Quem precisa de gente é encaminhado pro WhatsApp do setor responsável, com nome e contato.",
  },
  {
    icone: CalendarCheck,
    titulo: "Agenda sozinho",
    texto:
      "Mostra os horários realmente livres, marca direto na agenda do Google e nunca coloca dois clientes no mesmo horário.",
  },
  {
    icone: Bell,
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
    titulo: "Nunca marca dois no mesmo horário",
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
    icone: Dumbbell,
    titulo: "Academias e estúdios",
    texto: "Aula experimental, avaliação física e dúvida de plano fora do horário.",
  },
  {
    icone: Stethoscope,
    titulo: "Clínicas e consultórios",
    texto: "Psicologia, odontologia, dermatologia, nutrição e fisioterapia.",
  },
  {
    icone: FlaskConical,
    titulo: "Laboratórios",
    texto: "Agendamento de coleta e orientação de preparo antes do exame.",
  },
  {
    icone: Scissors,
    titulo: "Salões e estética",
    texto: "Agenda cheia, muitas remarcações e cliente que some sem avisar.",
  },
  {
    icone: Building2,
    titulo: "Oficinas e assistências",
    texto: "Orçamento, status do serviço e agendamento de entrega ou retirada.",
  },
  {
    icone: MessageCircle,
    titulo: "Comércio e serviços",
    texto: "Loja, escritório, prestador. Se o cliente chama no WhatsApp, encaixa.",
  },
];

export default function Atendimento() {
  useSEO({
    title: "Atendimento automático no WhatsApp | CrescIX",
    description:
      "Assistente que atende, direciona e agenda sozinho no WhatsApp do seu negócio. Feito sob medida pra qualquer estabelecimento. Responde em segundos, 24 horas por dia.",
    canonicalPath: "/atendimento",
  });

  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-[#0B1622]">
      {/* ── Barra superior enxuta ─────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-[#0B1622]/85 backdrop-blur-xl border-b border-white/5">
        <div className="container flex items-center justify-between h-18 lg:h-20">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 group"
            aria-label="Voltar para a página inicial"
          >
            <img
              src={`${import.meta.env.BASE_URL}images/logo.png`}
              alt="CrescIX"
              className="w-32 h-auto rounded-md"
            />
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate("/")}
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-white/60 hover:text-white px-3 py-2 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Conhecer a CrescIX
            </button>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-display font-semibold px-5 py-2.5 rounded-xl shadow-lg shadow-green-500/25 transition-all duration-300 hover:-translate-y-0.5">
                Quero testar
              </Button>
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* ── Hero ───────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-40 left-1/4 w-[36rem] h-[36rem] bg-green-500/10 rounded-full blur-[120px]" />
            <div className="absolute top-20 right-0 w-[28rem] h-[28rem] bg-green-400/5 rounded-full blur-[100px]" />
          </div>

          <div className="container relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-[0.16em] uppercase text-green-400 bg-green-500/10 border border-green-500/25 px-3.5 py-1.5 rounded-full">
                <MoonStar className="w-3.5 h-3.5" />
                Atendimento 24 horas
              </span>

              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] tracking-tight mt-6">
                Seu WhatsApp responde{" "}
                <span className="gradient-green">enquanto você atende</span>.
              </h1>

              <p className="text-lg text-white/60 mt-6 max-w-xl leading-relaxed">
                Um assistente que conversa com quem chega, tira dúvida,
                direciona pro setor certo e ainda agenda na sua agenda. Sem
                deixar ninguém esperando, a qualquer hora do dia.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-9">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-display font-semibold px-7 py-6 text-base rounded-xl shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300 hover:-translate-y-0.5">
                    Quero testar de graça
                  </Button>
                </a>
                <a href="#como-funciona">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto border-white/15 bg-white/5 hover:bg-white/10 text-white font-display font-semibold px-7 py-6 text-base rounded-xl"
                  >
                    Ver como funciona
                  </Button>
                </a>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8 text-sm text-white/45">
                <span className="inline-flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-green-500" />
                  90 dias grátis
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-green-500" />
                  Instalação por nossa conta
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-green-500" />
                  Usa o WhatsApp que você já tem
                </span>
              </div>
            </motion.div>

            {/* Conversa ilustrativa */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative"
            >
              <div className="bg-[#172A3A] border border-white/10 rounded-2xl shadow-2xl overflow-hidden max-w-md mx-auto">
                <div className="flex items-center gap-3 px-5 py-3.5 border-b border-white/5 bg-white/[0.03]">
                  <div className="w-9 h-9 rounded-full bg-green-500/15 border border-green-500/25 flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white leading-tight">
                      Academia Corpo em Movimento
                    </p>
                    <p className="text-[11px] text-green-400 font-mono">online</p>
                  </div>
                </div>

                <div className="p-4 flex flex-col gap-2.5 bg-[#0F2230]">
                  {CONVERSA.map((m, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: 0.4 + i * 0.25 }}
                      className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm whitespace-pre-line leading-relaxed ${
                        m.de === "cliente"
                          ? "self-end bg-green-600/90 text-white rounded-br-sm"
                          : "self-start bg-[#1F3447] text-white/90 rounded-bl-sm"
                      }`}
                    >
                      {m.texto}
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="absolute -bottom-5 -right-2 sm:right-6 bg-[#172A3A] border border-green-500/25 rounded-xl px-4 py-3 shadow-xl">
                <p className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                  Tempo de resposta
                </p>
                <p className="font-display font-extrabold text-2xl text-green-400 leading-tight">
                  2 segundos
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── A dor ──────────────────────────────────────────────────────── */}
        <section className="py-20 border-y border-white/5 bg-[#0E1B29]">
          <div className="container">
            <div className="max-w-3xl">
              <span className="text-xs font-mono font-semibold tracking-[0.16em] uppercase text-green-400">
                O problema
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl leading-tight tracking-tight mt-4">
                A pessoa decide às 22h de um sábado.
              </h2>
              <p className="text-lg text-white/60 mt-5 leading-relaxed">
                Ela manda mensagem perguntando o valor, ninguém responde na
                hora, e na segunda-feira já fechou com quem respondeu primeiro.
                O anúncio que trouxe esse contato você pagou. A venda, quem
                levou foi o concorrente.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mt-12">
              {[
                {
                  icone: Clock,
                  titulo: "Fora do horário",
                  texto:
                    "Boa parte das mensagens chega quando não tem ninguém na recepção.",
                },
                {
                  icone: Users,
                  titulo: "Recepção ocupada",
                  texto:
                    "Quem está no balcão atende quem está na frente, e o WhatsApp acumula.",
                },
                {
                  icone: CalendarCheck,
                  titulo: "Falta sem aviso",
                  texto:
                    "Horário marcado e ninguém aparece, porque nada lembrou o cliente.",
                },
              ].map((d) => (
                <div
                  key={d.titulo}
                  className="bg-[#172A3A] border border-white/10 rounded-2xl p-6"
                >
                  <d.icone className="w-5 h-5 text-green-400" />
                  <h3 className="font-display font-bold text-lg mt-4">
                    {d.titulo}
                  </h3>
                  <p className="text-white/55 text-sm mt-2 leading-relaxed">
                    {d.texto}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Como funciona ──────────────────────────────────────────────── */}
        <section id="como-funciona" className="py-20 lg:py-28">
          <div className="container">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-semibold tracking-[0.16em] uppercase text-green-400">
                Como funciona
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl leading-tight tracking-tight mt-4">
                Quatro coisas que ele faz sozinho.
              </h2>
              <p className="text-lg text-white/55 mt-5 leading-relaxed">
                Sem instalar nada, sem treinar equipe e sem trocar o número que
                seus clientes já conhecem.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 mt-14">
              {COMO_FUNCIONA.map((p, i) => (
                <motion.div
                  key={p.titulo}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="bg-[#172A3A] border border-white/10 rounded-2xl p-7 hover:border-green-500/30 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <span className="shrink-0 w-11 h-11 rounded-xl bg-green-500/12 border border-green-500/25 flex items-center justify-center">
                      <p.icone className="w-5 h-5 text-green-400" />
                    </span>
                    <div>
                      <span className="font-mono text-[11px] text-white/30">
                        0{i + 1}
                      </span>
                      <h3 className="font-display font-bold text-xl leading-tight mt-0.5">
                        {p.titulo}
                      </h3>
                      <p className="text-white/55 mt-2.5 leading-relaxed">
                        {p.texto}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Recursos ───────────────────────────────────────────────────── */}
        <section className="py-20 lg:py-24 bg-[#0E1B29] border-y border-white/5">
          <div className="container">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-semibold tracking-[0.16em] uppercase text-green-400">
                Detalhes que importam
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl leading-tight tracking-tight mt-4">
                Pensado pra rotina de quem atende.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
              {RECURSOS.map((r) => (
                <div
                  key={r.titulo}
                  className="bg-[#172A3A] border border-white/10 rounded-2xl p-6 hover:border-green-500/30 transition-colors"
                >
                  <Check className="w-5 h-5 text-green-400" />
                  <h3 className="font-display font-bold text-lg mt-4 leading-snug">
                    {r.titulo}
                  </h3>
                  <p className="text-white/55 text-sm mt-2.5 leading-relaxed">
                    {r.texto}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Para quem ──────────────────────────────────────────────────── */}
        <section className="py-20 lg:py-24">
          <div className="container">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-semibold tracking-[0.16em] uppercase text-green-400">
                Para quem
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl leading-tight tracking-tight mt-4">
                Serve pra qualquer negócio que atende cliente.
              </h2>
              <p className="text-lg text-white/55 mt-5 leading-relaxed">
                Se as pessoas falam com você pelo WhatsApp, o assistente se
                encaixa. Estes são só alguns exemplos de quem já faz sentido:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
              {PARA_QUEM.map((s) => (
                <div
                  key={s.titulo}
                  className="bg-[#172A3A] border border-white/10 rounded-2xl p-6 hover:border-green-500/30 hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="w-11 h-11 rounded-xl bg-green-500/12 border border-green-500/25 flex items-center justify-center">
                    <s.icone className="w-5 h-5 text-green-400" />
                  </span>
                  <h3 className="font-display font-bold text-lg mt-5 leading-snug">
                    {s.titulo}
                  </h3>
                  <p className="text-white/50 text-sm mt-2 leading-relaxed">
                    {s.texto}
                  </p>
                </div>
              ))}
            </div>

            {/* Feito sob medida: o argumento central */}
            <div className="mt-6 bg-gradient-to-br from-[#172A3A] to-[#1F3447] border border-green-500/20 rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-[0.16em] uppercase text-green-400">
                  <Check className="w-3.5 h-3.5" />
                  Feito sob medida
                </span>
                <h3 className="font-display font-bold text-2xl sm:text-3xl leading-tight tracking-tight mt-3">
                  Não achou o seu tipo de negócio? A gente monta do seu jeito.
                </h3>
                <p className="text-white/60 mt-4 leading-relaxed max-w-2xl">
                  Cada negócio atende de um jeito. Por isso o assistente é
                  configurado pra você: os serviços, os setores, os horários e
                  as respostas são montados de acordo com o que o seu
                  estabelecimento precisa. Se tiver uma necessidade específica,
                  a gente adapta.
                </p>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0"
              >
                <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-display font-semibold px-7 py-6 text-base rounded-xl shadow-lg shadow-green-500/25 transition-all duration-300 hover:-translate-y-0.5">
                  Contar o que preciso
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* ── Oferta ─────────────────────────────────────────────────────── */}
        <section className="py-20 lg:py-28 bg-[#0E1B29] border-t border-white/5">
          <div className="container">
            <div className="relative overflow-hidden bg-gradient-to-br from-[#172A3A] to-[#1F3447] border border-green-500/20 rounded-3xl p-8 sm:p-12 lg:p-16">
              <div className="absolute -top-24 -right-16 w-80 h-80 bg-green-500/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="relative z-10 max-w-2xl">
                <span className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-[0.16em] uppercase text-green-400 bg-green-500/10 border border-green-500/25 px-3.5 py-1.5 rounded-full">
                  <Building2 className="w-3.5 h-3.5" />
                  Vagas limitadas
                </span>

                <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight mt-6">
                  Estamos escolhendo{" "}
                  <span className="gradient-green">5 estabelecimentos</span> pra
                  usar de graça.
                </h2>

                <p className="text-lg text-white/60 mt-6 leading-relaxed">
                  São 90 dias sem custo nenhum, em troca de uma coisa só: que
                  você nos diga com honestidade o que funcionou e o que precisa
                  melhorar. A instalação e a configuração são por nossa conta.
                </p>

                <ul className="grid sm:grid-cols-2 gap-3 mt-8">
                  {[
                    "90 dias gratuitos, sem cartão",
                    "Configuramos tudo pra você",
                    "Usa o seu número atual",
                    "Sem fidelidade e sem multa",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-white/75">
                      <span className="w-5 h-5 rounded-md bg-green-500/15 border border-green-500/30 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-green-400" />
                      </span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-display font-semibold px-8 py-6 text-base rounded-xl shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300 hover:-translate-y-0.5">
                      Quero uma das vagas
                    </Button>
                  </a>
                  <p className="text-white/35 text-sm mt-4">
                    Depois do período de teste: R$ 147 por mês. Quem entra agora
                    fica com R$ 97 fixo, pra sempre.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
