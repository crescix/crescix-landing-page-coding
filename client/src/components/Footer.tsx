import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useLocation } from "wouter";

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
            <p className="text-white/50 text-sm leading-relaxed max-w-md">
              Gestão financeira no automático pra pequenas empresas. Áudio do
              Telegram entra como lançamento estruturado — sem planilha, sem
              digitação.
            </p>

            <div className="flex gap-3 mt-6">
              <a
                href="https://www.instagram.com/crescix_tecnologia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:bg-green-500/15 hover:border-green-500/30 text-white/60 hover:text-green-400 transition-all flex items-center justify-center"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/crescix/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:bg-green-500/15 hover:border-green-500/30 text-white/60 hover:text-green-400 transition-all flex items-center justify-center"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/5535984219965"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:bg-green-500/15 hover:border-green-500/30 text-white/60 hover:text-green-400 transition-all flex items-center justify-center"
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
                    className="text-sm text-white/50 hover:text-green-400 transition-colors"
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
                  className="text-sm text-white/50 hover:text-green-400 transition-colors text-left"
                >
                  Teste grátis
                </button>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-sm text-white/50 hover:text-green-400 transition-colors"
                >
                  Contato
                </a>
              </li>
              <li>
                <button
                  onClick={() => navigate("/feedback")}
                  className="text-sm text-white/50 hover:text-green-400 transition-colors text-left"
                >
                  Dar feedback
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} CrescIX. Todos os direitos
            reservados.
          </p>
          <p className="text-xs text-white/30 font-mono">
            Feito em Santa Rita do Sapucaí — MG 🇧🇷
          </p>
        </div>
      </div>
    </footer>
  );
}
