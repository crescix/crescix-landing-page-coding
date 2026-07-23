import { motion } from "framer-motion";
import { useLocation } from "wouter";
import {
  ArrowLeft,
  ScanBarcode,
  Boxes,
  ReceiptText,
  Wallet,
  Keyboard,
  FileText,
  CreditCard,
  ClipboardCheck,
  Scale,
  ShieldCheck,
  Check,
  Store,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

const WHATSAPP_URL =
  "https://wa.me/5535984219965?text=Ol%C3%A1!%20Vi%20a%20p%C3%A1gina%20do%20ERP%20e%20queria%20saber%20mais%20para%20o%20meu%20mercado.";

/* Cupom que ilustra o PDV no hero */
const CUPOM = [
  { cod: "7891000", nome: "Arroz 5kg", qtd: "1", total: "27,90" },
  { cod: "2010045", nome: "Queijo mussarela", qtd: "0,450 kg", total: "17,55" },
  { cod: "7894900", nome: "Refrigerante 2L", qtd: "2", total: "17,80" },
];

const DIFERENCIAIS = [
  {
    icone: Keyboard,
    titulo: "PDV operado no teclado",
    texto:
      "Frente de caixa em tela cheia, tudo por atalho e leitor de código de barras. O operador não tira a mão do balcão.",
  },
  {
    icone: ReceiptText,
    titulo: "Emite NFC-e",
    texto:
      "Cupom fiscal eletrônico emitido na hora da venda, integrado a provedor homologado. Cupom impresso em bobina 80mm.",
  },
  {
    icone: Boxes,
    titulo: "Estoque que bate",
    texto:
      "Toda venda baixa o estoque na hora. Entrada por XML da nota do fornecedor, balanço com contagem e ajuste em lote.",
  },
  {
    icone: Scale,
    titulo: "Produtos pesáveis",
    texto:
      "Vende por quilo lendo a etiqueta da balança. Frios, hortifruti e granel entram com o peso certo, sem digitar.",
  },
  {
    icone: CreditCard,
    titulo: "Fiado organizado",
    texto:
      "Crediário com limite por cliente, caderneta e recebimento que cai direto no caixa. O fiado do bairro, sob controle.",
  },
  {
    icone: Wallet,
    titulo: "Financeiro conectado",
    texto:
      "Contas a pagar e receber, fluxo de caixa e fechamento de caixa que alimenta o financeiro sozinho, por forma de pagamento.",
  },
];

const FLUXO = [
  {
    icone: ScanBarcode,
    titulo: "Bipa e vende",
    texto:
      "O operador passa o produto no leitor, recebe em dinheiro, PIX, cartão ou fiado, e a NFC-e sai na hora.",
  },
  {
    icone: Boxes,
    titulo: "O estoque se ajusta",
    texto:
      "Cada venda baixa o item na hora. A entrada da mercadoria vem do XML da nota do fornecedor, com um clique.",
  },
  {
    icone: FileText,
    titulo: "O caixa fecha certo",
    texto:
      "No fim do dia, o fechamento confere o dinheiro e joga tudo pro financeiro, separado por forma de pagamento.",
  },
  {
    icone: ClipboardCheck,
    titulo: "Você enxerga o negócio",
    texto:
      "Relatórios de venda, curva ABC, estoque abaixo do mínimo e produtos sem giro. Decisão com número, não no achismo.",
  },
];

export default function Erp() {
  useSEO({
    title: "ERP para mercados | CrescIX",
    description:
      "Sistema completo para mercados e varejo: PDV por teclado, emissão de NFC-e, controle de estoque, produtos pesáveis, crediário e financeiro. Tudo conectado.",
    canonicalPath: "/erp",
  });

  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-[#0B1622]">
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
                Falar com a gente
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
                <Store className="w-3.5 h-3.5" />
                Para mercados e varejo
              </span>

              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] tracking-tight mt-6">
                O sistema completo do seu{" "}
                <span className="gradient-green">mercado</span>.
              </h1>

              <p className="text-lg text-white/60 mt-6 max-w-xl leading-relaxed">
                Frente de caixa, nota fiscal, estoque, fiado e financeiro no
                mesmo lugar. Do bipe do produto ao fechamento do caixa, sem
                planilha e sem retrabalho.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-9">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-display font-semibold px-7 py-6 text-base rounded-xl shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300 hover:-translate-y-0.5">
                    Quero conhecer
                  </Button>
                </a>
                <a href="#recursos">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto border-white/15 bg-white/5 hover:bg-white/10 text-white font-display font-semibold px-7 py-6 text-base rounded-xl"
                  >
                    Ver os recursos
                  </Button>
                </a>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8 text-sm text-white/45">
                <span className="inline-flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-green-500" />
                  PDV por teclado
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-green-500" />
                  Emite NFC-e
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-green-500" />
                  Estoque e fiado
                </span>
              </div>
            </motion.div>

            {/* Cupom ilustrativo do PDV */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative"
            >
              <div className="bg-[#172A3A] border border-white/10 rounded-2xl shadow-2xl overflow-hidden max-w-md mx-auto">
                <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/5 bg-white/[0.03]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-green-500/15 border border-green-500/25 flex items-center justify-center">
                      <ScanBarcode className="w-4 h-4 text-green-400" />
                    </div>
                    <p className="text-sm font-semibold text-white">Caixa 01</p>
                  </div>
                  <span className="text-[11px] text-green-400 font-mono uppercase">
                    aberto
                  </span>
                </div>

                <div className="p-4 font-mono text-sm bg-[#0F2230]">
                  <div className="grid grid-cols-[1fr_auto] gap-1 text-[11px] uppercase text-white/30 border-b border-white/5 pb-2 mb-2">
                    <span>Item</span>
                    <span className="text-right">R$</span>
                  </div>
                  {CUPOM.map((c, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + i * 0.2 }}
                      className="grid grid-cols-[1fr_auto] gap-1 py-1.5"
                    >
                      <span className="min-w-0">
                        <span className="block text-white/90 truncate font-sans">
                          {c.nome}
                        </span>
                        <span className="text-white/40 text-xs">
                          {c.qtd} · {c.cod}
                        </span>
                      </span>
                      <span className="text-white font-semibold self-end">
                        {c.total}
                      </span>
                    </motion.div>
                  ))}
                  <div className="border-t-2 border-white/10 mt-2 pt-3 flex items-end justify-between">
                    <span className="text-xs uppercase text-white/40">Total</span>
                    <span className="font-display font-extrabold text-2xl text-green-400">
                      R$ 63,25
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-2 sm:left-4 bg-[#172A3A] border border-green-500/25 rounded-xl px-4 py-3 shadow-xl">
                <p className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                  NFC-e
                </p>
                <p className="font-display font-bold text-sm text-green-400 leading-tight">
                  Autorizada ✓
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Recursos ───────────────────────────────────────────────────── */}
        <section id="recursos" className="py-20 lg:py-28 border-y border-white/5 bg-[#0E1B29]">
          <div className="container">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-semibold tracking-[0.16em] uppercase text-green-400">
                Tudo em um lugar
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl leading-tight tracking-tight mt-4">
                Feito pra rotina de mercado.
              </h2>
              <p className="text-lg text-white/55 mt-5 leading-relaxed">
                Cada recurso resolve uma dor de quem toca o balcão, o estoque e o
                caixa todo dia.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
              {DIFERENCIAIS.map((r, i) => (
                <motion.div
                  key={r.titulo}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="bg-[#172A3A] border border-white/10 rounded-2xl p-6 hover:border-green-500/30 transition-colors"
                >
                  <span className="w-11 h-11 rounded-xl bg-green-500/12 border border-green-500/25 flex items-center justify-center">
                    <r.icone className="w-5 h-5 text-green-400" />
                  </span>
                  <h3 className="font-display font-bold text-lg mt-5 leading-snug">
                    {r.titulo}
                  </h3>
                  <p className="text-white/55 text-sm mt-2.5 leading-relaxed">
                    {r.texto}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Fluxo ──────────────────────────────────────────────────────── */}
        <section className="py-20 lg:py-28">
          <div className="container">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-semibold tracking-[0.16em] uppercase text-green-400">
                Como funciona
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl leading-tight tracking-tight mt-4">
                Do bipe ao fechamento do caixa.
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 mt-14">
              {FLUXO.map((p, i) => (
                <div
                  key={p.titulo}
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Confiança ──────────────────────────────────────────────────── */}
        <section className="py-16 bg-[#0E1B29] border-y border-white/5">
          <div className="container">
            <div className="flex flex-col md:flex-row md:items-center gap-6 bg-[#172A3A] border border-white/10 rounded-2xl p-8">
              <span className="w-12 h-12 rounded-xl bg-green-500/12 border border-green-500/25 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-green-400" />
              </span>
              <div>
                <h3 className="font-display font-bold text-xl leading-snug">
                  Pensado pra quem não pode errar no caixa.
                </h3>
                <p className="text-white/55 mt-2 leading-relaxed max-w-3xl">
                  Cada operador tem o seu acesso, ações sensíveis como cancelar
                  venda exigem o gerente, e todo movimento fica registrado. As
                  movimentações de estoque não podem ser apagadas, só corrigidas
                  por ajuste, pra o controle nunca perder a integridade.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────────────────────── */}
        <section className="py-20 lg:py-28">
          <div className="container">
            <div className="relative overflow-hidden bg-gradient-to-br from-[#172A3A] to-[#1F3447] border border-green-500/20 rounded-3xl p-8 sm:p-12 lg:p-16">
              <div className="absolute -top-24 -right-16 w-80 h-80 bg-green-500/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="relative z-10 max-w-2xl">
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight">
                  Vamos colocar seu mercado{" "}
                  <span className="gradient-green">no controle</span>.
                </h2>
                <p className="text-lg text-white/60 mt-6 leading-relaxed">
                  Conte pra gente como é o seu mercado que a gente mostra o
                  sistema funcionando e ajuda a colocar pra rodar. Sem
                  compromisso.
                </p>

                <div className="mt-9">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-display font-semibold px-8 py-6 text-base rounded-xl shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300 hover:-translate-y-0.5">
                      Falar no WhatsApp
                    </Button>
                  </a>
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
