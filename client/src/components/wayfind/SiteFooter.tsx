import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useLocation } from "wouter";
import { DOCS_LEGAIS } from "@/components/Footer";
import { EMPRESA, identificacaoFornecedor, pendente } from "@/lib/empresa";
import type { Foto } from "@/lib/fotos";

/**
 * Rodapé das páginas no tema Wayfind. `Footer.tsx` segue atendendo as rotas
 * que ainda têm o visual escuro; os dados legais vêm das mesmas fontes
 * (`EMPRESA` e `DOCS_LEGAIS`), então não há como as duas versões divergirem.
 */
export default function SiteFooter({ fotos }: { fotos: Foto[] }) {
  const [, navigate] = useLocation();

  return (
    <footer className="rodape on-ink">
      <div className="container">
        <div className="rodape__topo">
          <div className="rodape__marca">
            <a href="#inicio">
              <img
                src={`${import.meta.env.BASE_URL}images/logo.png`}
                alt="CrescIX"
                width={703}
                height={260}
              />
            </a>
            <p className="small">
              Gestão financeira no automático pra pequenas empresas. Áudio do
              Telegram entra como lançamento estruturado, sem planilha nem
              digitação manual.
            </p>
            <div className="rodape__social">
              <a
                href="https://www.instagram.com/crescix_tecnologia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da CrescIX"
              >
                <FaInstagram aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/company/crescix/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn da CrescIX"
              >
                <FaLinkedin aria-hidden="true" />
              </a>
              <a
                href="https://wa.me/5535984219965"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da CrescIX"
              >
                <FaWhatsapp aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="rodape__col">
            <h2>Produto</h2>
            <ul>
              {[
                { label: "Como Funciona", href: "#como-funciona" },
                { label: "Recursos", href: "#recursos" },
                { label: "Para Quem", href: "#para-quem" },
                { label: "Nossa História", href: "#nossa-historia" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="rodape__col">
            <h2>Acesso</h2>
            <ul>
              <li>
                <button type="button" onClick={() => navigate("/teste-gratis")}>
                  Teste grátis
                </button>
              </li>
              <li>
                <a href="#contato">Contato</a>
              </li>
              <li>
                <button type="button" onClick={() => navigate("/feedback")}>
                  Dar feedback
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="rodape__legal">
          {/* Links legais (LGPD): visíveis sempre, em primeiro plano */}
          <nav aria-label="Documentos legais" className="rodape__docs">
            {DOCS_LEGAIS.map((doc) => (
              <button
                key={doc.path}
                type="button"
                onClick={() => navigate(doc.path)}
              >
                {doc.label}
              </button>
            ))}
            <a href={`mailto:${EMPRESA.emailDpo}`}>
              Encarregado de dados (DPO)
            </a>
          </nav>

          {/* Identificação do fornecedor: Decreto 7.962/2013, art. 2º, I */}
          <div className="rodape__id">
            <b>{EMPRESA.nomeFantasia}</b>
            <p>{identificacaoFornecedor()}</p>
            <p>{EMPRESA.endereco}</p>
            <p>
              <a href={`mailto:${EMPRESA.emailContato}`}>
                {EMPRESA.emailContato}
              </a>
            </p>
            <p>{EMPRESA.telefone}</p>
            {(pendente(EMPRESA.responsavel) ||
              pendente(EMPRESA.cpf) ||
              pendente(EMPRESA.endereco)) && (
              <p className="rodape__pendente">
                Identificação pendente de preenchimento em{" "}
                <code>client/src/lib/empresa.ts</code> antes do próximo deploy.
              </p>
            )}
          </div>

          {/* CC BY e CC BY-SA: autor, licença e link de cada foto da página */}
          <p className="rodape__credito" data-credits>
            Fotos:{" "}
            {fotos.map((f, i) => (
              <span key={f.pagina}>
                {i > 0 && ", "}
                <a href={f.pagina} target="_blank" rel="noopener noreferrer">
                  {f.autor}
                </a>{" "}
                ({f.licenca}, Wikimedia Commons)
              </span>
            ))}
            .
          </p>

          <div className="rodape__fim">
            <p>
              &copy; {new Date().getFullYear()} CrescIX. Todos os direitos
              reservados.
            </p>
            <p>Feito em Santa Rita do Sapucaí, MG</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
