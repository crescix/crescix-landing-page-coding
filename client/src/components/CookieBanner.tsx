import { useEffect, useState } from "react";
import { Cookie, X } from "lucide-react";
import { useLocation } from "wouter";

/**
 * Banner LGPD que aparece na primeira visita ao site.
 *
 * A landing CrescIX hoje não usa cookies de rastreamento nem analytics
 * — só armazenamento local essencial (preferências da própria página).
 * Por isso o banner é discreto, com 1 único botão "Entendi". Quando
 * entrarem analytics ou cookies de terceiros, este componente precisa
 * ganhar opção de "Personalizar".
 *
 * Persistência: localStorage. Aparece exatamente uma vez por dispositivo.
 */

const ACCEPTED_KEY = "crescix:lgpd-cookies-accepted";

export default function CookieBanner() {
  // null = ainda não checou localStorage (evita flash de banner no SSR/hydrate)
  const [visivel, setVisivel] = useState<boolean | null>(null);
  const [, navigate] = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return;
    setVisivel(localStorage.getItem(ACCEPTED_KEY) !== "1");
  }, []);

  function aceitar() {
    try {
      localStorage.setItem(ACCEPTED_KEY, "1");
    } catch {
      // localStorage desabilitado (modo privado). Ignora silenciosamente.
    }
    setVisivel(false);
  }

  if (!visivel) return null;

  return (
    <div
      role="region"
      aria-label="Aviso de cookies"
      className="fixed inset-x-3 bottom-3 md:inset-x-auto md:right-4 md:left-auto md:bottom-4 md:max-w-md z-50"
      style={{ animation: "auth-slide-up 0.3s ease-out forwards" }}
    >
      <div className="bg-[#1F3447]/95 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-5 shadow-2xl shadow-black/40">
        <div className="flex items-start gap-3">
          <div className="h-9 w-9 rounded-xl bg-green-500/15 flex items-center justify-center flex-shrink-0">
            <Cookie className="h-4 w-4 text-green-400" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-white">
              Usamos só o essencial
            </p>
            <p className="text-xs text-white/55 mt-1 leading-relaxed">
              Não usamos cookies de rastreamento, analytics nem
              anúncios. Apenas armazenamento essencial pro site
              funcionar.{" "}
              <button
                type="button"
                onClick={() => navigate("/privacidade")}
                className="text-green-400 hover:text-green-300 underline underline-offset-2"
              >
                Mais detalhes
              </button>
              .
            </p>
          </div>
          <button
            type="button"
            onClick={aceitar}
            aria-label="Fechar aviso"
            className="h-7 w-7 inline-flex items-center justify-center rounded-lg text-white/40 hover:text-white/80 hover:bg-white/5 transition-colors flex-shrink-0"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <button
          type="button"
          onClick={aceitar}
          className="mt-4 w-full h-9 px-4 bg-green-500 hover:bg-green-400 text-white text-sm font-semibold rounded-lg transition-colors"
        >
          Entendi
        </button>
      </div>

      {/* Animação de entrada inline — evita poluir o CSS global por
          um único componente. */}
      <style>{`
        @keyframes auth-slide-up {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
