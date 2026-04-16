import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#172A3A] text-white py-16 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#09636B]/30 to-transparent" />

      <div className="container relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12 max-w-6xl mx-auto">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#inicio" className="flex items-center gap-2 mb-4">
              <img 
                src={`${import.meta.env.BASE_URL}images/logo.jpeg`} 
                alt="logo"
                className="w-32 h-auto rounded-md"/>
            </a>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Transformando conversas do Telegram em dados organizados com Inteligência Artificial.
            </p>
          </div>

          {/* Produto */}
          <div>
            <h4 className="font-display font-bold text-sm text-white/80 mb-4 uppercase tracking-wider">
            Produto
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Como Funciona", href: "#como-funciona" },
                { label: "Recursos", href: "#recursos" },
                { label: "Nossa História", href: "#nossa-historia" },
                { label: "Para Quem", href: "#para-quem" },
                { label: "Contato", href: "#contato" },
              ].map((item) => (
              <li key={item.label}>
                <a
                href={item.href}
                className="text-sm text-white/40 hover:text-[#A3C3D9] transition-colors">
                  {item.label}
                  </a>
                  </li>
                ))}
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h4 className="font-display font-bold text-sm text-white/80 mb-4 uppercase tracking-wider">
              Redes Sociais
            </h4>
            
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/crescix_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-[#A3C3D9] transition-colors"
              >
              <FaInstagram className="w-8 h-8" />
              </a>
              <a
                href="https://www.linkedin.com/company/crescix/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-[#A3C3D9] transition-colors"
              >
              <FaLinkedin className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-sm text-white/30 text-center">
            &copy; {new Date().getFullYear()} CrescIX. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
