import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useLocation } from "wouter";
import { EMPRESA, identificacaoFornecedor, pendente } from "@/lib/empresa";

/**
 * Os documentos legais do site. Vivem numa lista porque o rodapé precisa
 * mostrar todos e o Decreto 7.962/2013 pede que a identificação e as
 * condições da contratação fiquem em local de destaque — e rodapé de
 * todas as páginas é o lugar onde isso é esperado.
 */
export const DOCS_LEGAIS = [
  { path: "/privacidade", label: "Política de Privacidade" },
  { path: "/termos", label: "Termos de uso" },
  { path: "/cookies", label: "Política de Cookies" },
  { path: "/reembolso", label: "Troca e reembolso" },
];

export default function Footer() {
  const [, navigate] = useLocation();

  return (
    <footer className="bg-[#0B1622] text-white py-16 relative overflow-hidden border-t border-white/5">
      {/* Linha de luz no topo */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent" />

      <div className="container relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <a href="#inicio" className="inline-flex items-center gap-2 mb-4">
              <img
                src={`${import.meta.env.BASE_URL}images/logo.png`}
                alt="CrescIX"
                className="w-32 h-auto rounded-md"
              />
            </a>
            <p className="text-white/70 text-sm leading-relaxed max-w-md">
              Gestão financeira no automático pra pequenas empresas. Áudio do
              Telegram entra como lançamento estruturado, sem planilha nem
              digitação manual.
            </p>

            <div className="flex gap-3 mt-6">
              <a
                href="https://www.instagram.com/crescix_tecnologia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 hover:bg-green-500/15 hover:border-green-500/30 text-white/80 hover:text-green-400 transition-all flex items-center justify-center"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/crescix/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 hover:bg-green-500/15 hover:border-green-500/30 text-white/80 hover:text-green-400 transition-all flex items-center justify-center"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/5535984219965"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 hover:bg-green-500/15 hover:border-green-500/30 text-white/80 hover:text-green-400 transition-all flex items-center justify-center"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Produto */}
          <div>
            <h4 className="font-display font-bold text-xs text-white/80 mb-4 uppercase tracking-wider">
              Produto
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Como Funciona", href: "#como-funciona" },
                { label: "Recursos", href: "#recursos" },
                { label: "Para Quem", href: "#para-quem" },
                { label: "Nossa História", href: "#nossa-historia" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-white/70 hover:text-green-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Acesso */}
          <div>
            <h4 className="font-display font-bold text-xs text-white/80 mb-4 uppercase tracking-wider">
              Acesso
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => navigate("/teste-gratis")}
                  className="text-sm text-white/70 hover:text-green-400 transition-colors text-left"
                >
                  Teste grátis
                </button>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-sm text-white/70 hover:text-green-400 transition-colors"
                >
                  Contato
                </a>
              </li>
              <li>
                <button
                  onClick={() => navigate("/feedback")}
                  className="text-sm text-white/70 hover:text-green-400 transition-colors text-left"
                >
                  Dar feedback
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col gap-4">
          {/* Links legais (LGPD): visíveis sempre, em primeiro plano */}
          <nav
            aria-label="Documentos legais"
            className="flex items-center justify-center sm:justify-start gap-4 flex-wrap text-xs text-white/70"
          >
            {DOCS_LEGAIS.map((doc, i) => (
              <span key={doc.path} className="inline-flex items-center gap-4">
                {i > 0 && (
                  <span aria-hidden="true" className="text-white/25">
                    ·
                  </span>
                )}
                <button
                  onClick={() => navigate(doc.path)}
                  className="hover:text-green-400 transition-colors"
                >
                  {doc.label}
                </button>
              </span>
            ))}
            <span aria-hidden="true" className="text-white/25">·</span>
            <a
              href={`mailto:${EMPRESA.emailDpo}`}
              className="hover:text-green-400 transition-colors"
            >
              Encarregado de dados (DPO)
            </a>
          </nav>

          {/* Identificação do fornecedor: Decreto 7.962/2013, art. 2º, I */}
          <div className="text-xs text-white/60 leading-relaxed space-y-1">
            <p>
              <span className="text-white/80 font-semibold">
                {EMPRESA.nomeFantasia}
              </span>{" "}
              · {identificacaoFornecedor()}
            </p>
            <p>{EMPRESA.endereco}</p>
            <p>
              <a
                href={`mailto:${EMPRESA.emailContato}`}
                className="hover:text-green-400 transition-colors"
              >
                {EMPRESA.emailContato}
              </a>{" "}
              · {EMPRESA.telefone}
            </p>
            {(pendente(EMPRESA.responsavel) ||
              pendente(EMPRESA.cpf) ||
              pendente(EMPRESA.endereco)) && (
              <p className="text-amber-400/80">
                Identificação pendente de preenchimento em{" "}
                <code>client/src/lib/empresa.ts</code> antes do próximo
                deploy.
              </p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-xs text-white/60">
              &copy; {new Date().getFullYear()} CrescIX. Todos os direitos
              reservados.
            </p>
            <p className="text-xs text-white/60 font-mono">
              Feito em Santa Rita do Sapucaí, MG 🇧🇷
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
