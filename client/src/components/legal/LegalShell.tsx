import { useLocation } from "wouter";
import { useWayfind } from "@/hooks/useWayfind";

/**
 * Casca e primitivas de prosa das páginas legais (privacidade, termos,
 * cookies, reembolso). Antes cada página repetia o mesmo header e as
 * mesmas `Intro`/`Section`/`Ul`; com quatro documentos isso passou a
 * divergir na primeira edição, então virou um só lugar.
 *
 * Os estilos estão em `wayfind-legal.css`.
 */

interface LegalShellProps {
  titulo: string;
  /** Data por extenso: "18 de maio de 2026". */
  atualizadoEm: string;
  children: React.ReactNode;
  /** Rodapé do documento (contato, dúvidas). */
  rodape?: React.ReactNode;
}

export function LegalShell({
  titulo,
  atualizadoEm,
  children,
  rodape,
}: LegalShellProps) {
  useWayfind();
  const [, navigate] = useLocation();

  return (
    <>
      <nav className="slab on-ink" aria-label="Principal">
        <div className="container slab__bar">
          <img
            className="slab__marca"
            src={`${import.meta.env.BASE_URL}images/logo.png`}
            alt="CrescIX"
            width={703}
            height={260}
          />
          <button
            type="button"
            onClick={() => navigate("/")}
            className="slab__quiet"
          >
            Voltar pra home
          </button>
        </div>
      </nav>

      <main className="legal">
        <div className="container">
          <header className="legal__head">
            <h1>{titulo}</h1>
            <p className="small muted">Última atualização: {atualizadoEm}</p>
          </header>

          <div className="legal__grid">
            <LegalNav />

            <article className="legal__texto">
              {children}

              {rodape && <footer className="legal__fim">{rodape}</footer>}
            </article>
          </div>
        </div>
      </main>
    </>
  );
}

/** Navegação entre os quatro documentos legais. */
function LegalNav() {
  const [location, navigate] = useLocation();

  const docs = [
    { path: "/privacidade", label: "Política de Privacidade" },
    { path: "/termos", label: "Termos de Uso" },
    { path: "/cookies", label: "Política de Cookies" },
    { path: "/reembolso", label: "Troca e Reembolso" },
  ];

  return (
    <nav aria-label="Outros documentos legais" className="legal__nav">
      {docs
        .filter((d) => d.path !== location)
        .map((d) => (
          <button key={d.path} type="button" onClick={() => navigate(d.path)}>
            {d.label}
          </button>
        ))}
    </nav>
  );
}

// ─── Primitivas de prosa ──────────────────────────────────────────────────

export function Intro({ children }: { children: React.ReactNode }) {
  return <p className="lead legal__intro">{children}</p>;
}

export function Section({
  titulo,
  children,
}: {
  titulo: string;
  children: React.ReactNode;
}) {
  return (
    <section className="legal__secao">
      <h2>{titulo}</h2>
      {children}
    </section>
  );
}

export function Ul({ children }: { children: React.ReactNode }) {
  return <ul className="legal__lista">{children}</ul>;
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
  return <div className="legal__caixa">{children}</div>;
}
