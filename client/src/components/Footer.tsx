/*
 * CrescIX Footer — Fluid Data Streams Design
 * - Logo, links, redes sociais
 * - Background escuro navy
 */

export default function Footer() {
  return (
    <footer className="bg-[#172A3A] text-white py-16 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#09636B]/30 to-transparent" />

      <div className="container relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#inicio" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-linear-to-br from-[#09636B] to-[#004346] flex items-center justify-center">
                <span className="text-white font-display font-extrabold text-sm tracking-tight">IX</span>
              </div>
              <span className="font-display font-extrabold text-xl tracking-tight text-white">
                Cresc<span className="text-[#A3C3D9]">IX</span>
              </span>
            </a>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Transformando conversas do WhatsApp em dados organizados com Inteligência Artificial.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-display font-bold text-sm text-white/80 mb-4 uppercase tracking-wider">
            Produto
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Como Funciona", href: "#como-funciona" },
                { label: "Recursos", href: "#recursos" },
                { label: "Para Quem", href: "#para-quem" },
                { label: "Preços", href: "#precos" },
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

          {/* Company */}
          <div>
            <h4 className="font-display font-bold text-sm text-white/80 mb-4 uppercase tracking-wider">
              Empresa
            </h4>
            <ul className="space-y-2.5">
              {["Sobre Nós", "Blog", "Carreiras", "Contato"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/40 hover:text-[#A3C3D9] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-bold text-sm text-white/80 mb-4 uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {["Termos de Uso", "Política de Privacidade", "LGPD", "Segurança"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/40 hover:text-[#A3C3D9] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
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
