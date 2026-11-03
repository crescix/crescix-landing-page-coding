import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

/**
 * Casca e primitivas de prosa das páginas legais (privacidade, termos,
 * cookies, reembolso). Antes cada página repetia o mesmo header e as
 * mesmas `Intro`/`Section`/`Ul`; com quatro documentos isso passou a
 * divergir na primeira edição, então virou um só lugar.
 *
 * Contraste: o corpo usa `text-white/75` e os secundários `text-white/60`.
 * Sobre o navy #0B1622, `white/75` dá ~9:1 e `white/60` ~7:1 — folgado
 * pro mínimo 4,5:1 do WCAG 2.1 AA. Abaixo de `white/50` reprova, então
 * não baixe daqui.
 */

interface LegalShellProps {
  /** Rótulo pequeno acima do título (ex.: "Privacidade"). */
  eyebrow: string;
  titulo: string;
  /** Data por extenso: "18 de maio de 2026". */
  atualizadoEm: string;
  icone: React.ReactNode;
  children: React.ReactNode;
  /** Rodapé do documento (contato, dúvidas). */
  rodape?: React.ReactNode;
}

export function LegalShell({
  eyebrow,
  titulo,
  atualizadoEm,
  icone,
  children,
  rodape,
}: LegalShellProps) {
  const [, navigate] = useLocation();

  return (
    <div className="w-full min-h-screen bg-[var(--color-brand-navy)] text-white">
      <div className="max-w-3xl mx-auto px-5 md:px-8 py-10 md:py-16">
        <header className="mb-10">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-1.5 text-xs text-white/60 hover:text-green-400 transition-colors mb-6"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Voltar pra home
          </button>

          <div className="flex items-start gap-3 mb-3">
            <div className="h-11 w-11 rounded-2xl bg-green-500/15 border border-green-500/25 flex items-center justify-center flex-shrink-0">
              {icone}
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-green-400 font-semibold mb-1">
                {eyebrow}
              </p>
              <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
                {titulo}
              </h1>
              <p className="text-sm text-white/60 mt-1">
                Última atualização: {atualizadoEm}
              </p>
            </div>
          </div>
        </header>

        <article className="space-y-8 text-[15px] leading-relaxed text-white/75">
          {children}

          {rodape && (
            <footer className="pt-8 border-t border-white/10 text-sm text-white/60">
              {rodape}
            </footer>
          )}
        </article>

        <LegalNav />
      </div>
    </div>
  );
}

/** Navegação entre os quatro documentos legais, no pé de cada um. */
function LegalNav() {
  const [location, navigate] = useLocation();

  const docs = [
    { path: "/privacidade", label: "Política de Privacidade" },
    { path: "/termos", label: "Termos de Uso" },
    { path: "/cookies", label: "Política de Cookies" },
    { path: "/reembolso", label: "Troca e Reembolso" },
  ];

  return (
    <nav
      aria-label="Outros documentos legais"
      className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-x-4 gap-y-2 text-xs"
    >
      {docs
        .filter((d) => d.path !== location)
        .map((d) => (
          <button
            key={d.path}
            onClick={() => navigate(d.path)}
            className="text-white/60 hover:text-green-400 transition-colors underline underline-offset-4 decoration-white/20"
          >
            {d.label}
          </button>
        ))}
    </nav>
  );
}

// ─── Primitivas de prosa ──────────────────────────────────────────────────

export function Intro({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-base md:text-lg text-white/85 leading-relaxed pb-2 border-b border-white/10">
      {children}
    </p>
  );
}

export function Section({
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

export function Ul({ children }: { children: React.ReactNode }) {
  return (
    <ul className="space-y-2 list-disc list-outside pl-5 marker:text-green-400">
      {children}
    </ul>
  );
}

/**
 * Bloco de identificação do fornecedor. Repetido nas quatro páginas de
 * propósito: o Decreto 7.962/2013 pede a informação "em local de
 * destaque", e cada documento legal pode ser lido isolado.
 */
export function IdentificacaoBox({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm space-y-1.5">
      {children}
    </div>
  );
}
