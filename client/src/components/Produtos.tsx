import { motion } from "framer-motion";
import { useLocation } from "wouter";
import {
  MessageCircle,
  Store,
  Bot,
  ArrowRight,
  Check,
} from "lucide-react";

/**
 * Vitrine institucional: a CrescIX não é um produto só. São três soluções
 * que resolvem dores diferentes de pequenos negócios. Esta seção dá a cara
 * de empresa ao site e manda cada visitante pro produto certo.
 */
const PRODUTOS = [
  {
    icone: Bot,
    nome: "Gestão financeira por IA",
    etiqueta: "Nosso carro-chefe",
    descricao:
      "Mande um áudio no Telegram e a IA registra a venda, a despesa ou a compra no seu caixa. Sem planilha, sem digitar.",
    bullets: ["Áudio ou texto", "Painel financeiro completo", "Relatórios em Excel"],
    acao: { label: "Ver como funciona", tipo: "ancora", destino: "#como-funciona" },
    destaque: false,
  },
  {
    icone: MessageCircle,
    nome: "Atendimento automático",
    etiqueta: "Novidade",
    descricao:
      "Um assistente que atende o WhatsApp do seu negócio sozinho, direciona pro setor certo e agenda na sua agenda. 24 horas por dia.",
    bullets: ["Responde em segundos", "Agenda e lembra", "Feito sob medida"],
    acao: { label: "Conhecer", tipo: "rota", destino: "/atendimento" },
    destaque: true,
  },
  {
    icone: Store,
    nome: "ERP para mercados",
    etiqueta: "Para o varejo",
    descricao:
      "PDV, controle de estoque, emissão de NFC-e, crediário e frente de caixa. Tudo que um mercado precisa pra vender e controlar.",
    bullets: ["Frente de caixa", "Estoque e NFC-e", "Crediário e fiado"],
    acao: { label: "Conhecer", tipo: "rota", destino: "/erp" },
    destaque: false,
  },
];

export default function Produtos() {
  const [, navigate] = useLocation();

  return (
    <section id="produtos" className="py-24 lg:py-32 relative overflow-hidden bg-[#0E1B29] border-y border-white/5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 right-1/4 w-[32rem] h-[32rem] bg-green-500/8 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-2xl">
          <span className="text-xs font-mono font-semibold tracking-[0.16em] uppercase text-green-400">
            O que a CrescIX faz
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight mt-4">
            Tecnologia que trabalha pelo{" "}
            <span className="gradient-green-cyan">seu negócio</span>.
          </h2>
          <p className="text-lg text-white/75 mt-5 leading-relaxed">
            Três soluções feitas pra quem vive o dia a dia do balcão. Escolha por
            onde a CrescIX pode começar a te ajudar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-14">
          {PRODUTOS.map((p, i) => (
            <motion.div
              key={p.nome}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col rounded-2xl p-7 transition-all duration-300 ${
                p.destaque
                  ? "bg-gradient-to-br from-[#172A3A] to-[#1F3447] border border-green-500/30 shadow-xl shadow-green-500/5"
                  : "bg-[#172A3A] border border-white/10 hover:border-green-500/30"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="w-12 h-12 rounded-xl bg-green-500/12 border border-green-500/25 flex items-center justify-center">
                  <p.icone className="w-5 h-5 text-green-400" />
                </span>
                <span
                  className={`text-[10px] font-mono font-semibold tracking-[0.12em] uppercase px-2.5 py-1 rounded-full ${
                    p.destaque
                      ? "bg-green-500 text-[#0B1622]"
                      : "bg-white/5 text-white/70 border border-white/10"
                  }`}
                >
                  {p.etiqueta}
                </span>
              </div>

              <h3 className="font-display font-bold text-xl mt-6 leading-tight">
                {p.nome}
              </h3>
              <p className="text-white/75 text-sm mt-3 leading-relaxed">
                {p.descricao}
              </p>

              <ul className="flex flex-col gap-2 mt-5">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-white/70">
                    <Check className="w-3.5 h-3.5 text-green-400 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-7 pt-5 border-t border-white/5">
                {p.acao.tipo === "rota" ? (
                  <button
                    onClick={() => navigate(p.acao.destino)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-400 hover:text-green-300 transition-colors group"
                  >
                    {p.acao.label}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                ) : p.acao.tipo === "whatsapp" ? (
                  <a
                    href={p.acao.destino}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-400 hover:text-green-300 transition-colors group"
                  >
                    {p.acao.label}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                ) : (
                  <a
                    href={p.acao.destino}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-400 hover:text-green-300 transition-colors group"
                  >
                    {p.acao.label}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
