import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "wouter";

const navLinks: { label: string; href: string }[] = [
  { label: "Início", href: "#inicio" },
  { label: "Produtos", href: "#produtos" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Preços", href: "#precos" },
  { label: "Nossa História", href: "#nossa-historia" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

const WHATSAPP_URL =
  "https://wa.me/5535984219965?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20a%20CrescIX%20IA...";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [, navigate] = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="slab on-ink" aria-label="Principal">
      <div className="container slab__bar">
        <a
          href="#inicio"
          onClick={(e) => handleNavClick(e, "#inicio")}
          className="slab__logo"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/logo.png`}
            alt="CrescIX"
            width={703}
            height={260}
          />
        </a>

        <div className="slab__links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="slab__right slab__right--home">
          <button
            type="button"
            onClick={() => navigate("/teste-gratis")}
            className="slab__quiet"
          >
            Teste Grátis
          </button>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            Falar no WhatsApp
          </a>
        </div>

        <button
          type="button"
          className="slab__toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {mobileOpen && (
        <div id="mobile-menu" className="container slab__sheet">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    handleNavClick(e, link.href);
                    setMobileOpen(false);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={() => {
                  navigate("/teste-gratis");
                  setMobileOpen(false);
                }}
              >
                Teste Grátis
              </button>
            </li>
          </ul>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="btn btn--primary btn--full"
          >
            Falar no WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
