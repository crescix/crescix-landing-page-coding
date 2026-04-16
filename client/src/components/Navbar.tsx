import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../public/images/logo.jpeg";
import heroImage from "@assets/images/logo.jpeg";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Recursos", href: "#recursos" },
  { label: "Nossa História", href: "#nossa-historia" },
  { label: "Para Quem", href: "#para-quem" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-[#004346]/5 border-b border-[#A3C3D9]/20"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-18 lg:h-20">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2 group">
          <img 
            src={`${import.meta.env.BASE_URL}images/logo.jpeg`} 
            alt="logo"
            className="w-32 h-auto rounded-md"/>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-2 text-sm font-medium text-[#172A3A]/70 hover:text-[#09636B] transition-colors rounded-lg hover:bg-[#D8DDEF]/40"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <a
            href="https://wa.me/5535984219965?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20a%20CrescIX%20IA..."
            target="_blank"
            rel="noopener noreferrer"
          >
          <Button
            className="bg-gradient-to-r from-[#09636B] to-[#004346] hover:from-[#004346] hover:to-[#172A3A] text-white font-display font-semibold px-6 py-2.5 rounded-xl shadow-lg shadow-[#09636B]/25 hover:shadow-xl hover:shadow-[#004346]/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            Testar Agora
          </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-[#D8DDEF]/40 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? (
            <X className="w-6 h-6 text-[#172A3A]" />
          ) : (
            <Menu className="w-6 h-6 text-[#172A3A]" />
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
            className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-[#A3C3D9]/20 overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-[#172A3A]/70 hover:text-[#09636B] hover:bg-[#D8DDEF]/30 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button
                className="mt-3 bg-gradient-to-r from-[#09636B] to-[#004346] text-white font-display font-semibold rounded-xl"
              >
                Testar Agora
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
