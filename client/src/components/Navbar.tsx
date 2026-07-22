import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";

/**
 * `href` com "#" rola até a seção do home. `route` leva a outra página
 * (produto próprio, com público e discurso diferentes do bot financeiro).
 */
const navLinks: { label: string; href?: string; route?: string }[] = [
  { label: "Início", href: "#inicio" },
  { label: "Produtos", href: "#produtos" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Atendimento", route: "/atendimento" },
  { label: "Preços", href: "#precos" },
  { label: "Nossa História", href: "#nossa-historia" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [, navigate] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B1622]/85 backdrop-blur-xl border-b border-white/5 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-18 lg:h-20">
        {/* Logo */}
        <a
          href="#inicio"
          onClick={(e) => handleNavClick(e, "#inicio")}
          className="flex items-center gap-2 group"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/logo.png`}
            alt="CrescIX"
            className="w-32 h-auto rounded-md"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.route ? (
              <button
                key={link.route}
                onClick={() => navigate(link.route!)}
                className="px-3.5 py-2 text-sm font-medium text-green-400/90 hover:text-green-300 transition-colors rounded-lg hover:bg-green-500/10"
              >
                {link.label}
              </button>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href!)}
                className="px-3.5 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                {link.label}
              </a>
            )
          )}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-2">
          <button
            onClick={() => navigate("/teste-gratis")}
            className="hidden xl:inline-flex items-center gap-1.5 text-sm font-medium text-white/70 hover:text-green-400 px-3 py-2 rounded-lg transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Teste Grátis
          </button>
          <a
            href="https://wa.me/5535984219965?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20a%20CrescIX%20IA..."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-display font-semibold px-6 py-2.5 rounded-xl shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300 hover:-translate-y-0.5 glow-brand-hover">
              Falar no WhatsApp
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0B1622]/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-1">
              {navLinks.map((link) =>
                link.route ? (
                  <button
                    key={link.route}
                    onClick={() => {
                      navigate(link.route!);
                      setMobileOpen(false);
                    }}
                    className="px-4 py-3 text-sm font-medium text-green-400/90 hover:text-green-300 hover:bg-green-500/10 rounded-lg transition-colors text-left"
                  >
                    {link.label}
                  </button>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      handleNavClick(e, link.href!);
                      setMobileOpen(false);
                    }}
                    className="px-4 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {link.label}
                  </a>
                )
              )}
              <button
                onClick={() => {
                  navigate("/teste-gratis");
                  setMobileOpen(false);
                }}
                className="px-4 py-3 text-sm font-medium text-green-400 hover:text-green-300 hover:bg-green-500/10 rounded-lg transition-colors flex items-center gap-2 text-left"
              >
                <Sparkles className="w-4 h-4" />
                Teste Grátis
              </button>
              <a
                href="https://wa.me/5535984219965?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20a%20CrescIX%20IA..."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
              >
                <Button className="mt-3 w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-display font-semibold rounded-xl">
                  Falar no WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
