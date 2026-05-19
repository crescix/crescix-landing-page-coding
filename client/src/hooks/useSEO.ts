import { useEffect } from "react";

/**
 * Hook minimalista pra atualizar title + meta description por rota
 * num SPA (Vite + Wouter, sem SSR). Não substitui SSR pra robôs antigos,
 * mas Google/Bing executam JS — então o snippet correto aparece no
 * resultado, e o título da aba reflete a página em que o usuário está.
 *
 * Restaura o título original quando o componente desmonta — assim a
 * navegação SPA não deixa rastro de título antigo se o usuário voltar
 * pro home antes do próximo render.
 *
 * Para OG/Twitter Cards dinâmicos por rota precisaríamos de SSR ou
 * pré-renderização. Como o crawler do FB/Twitter NÃO executa JS, esses
 * ficam fixos no index.html. As páginas internas (teste-grátis, feedback)
 * normalmente são compartilhadas via link direto e a card do home
 * (que é genérica mas representa bem a marca) continua sendo apropriada.
 */
interface UseSEOOptions {
  title: string;
  description?: string;
}

export function useSEO({ title, description }: UseSEOOptions) {
  useEffect(() => {
    const previousTitle = document.title;
    const previousDescription = getMetaContent("description");

    document.title = title;
    if (description) setMetaContent("description", description);

    return () => {
      document.title = previousTitle;
      if (previousDescription) setMetaContent("description", previousDescription);
    };
  }, [title, description]);
}

function getMetaContent(name: string): string | null {
  const el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  return el?.getAttribute("content") ?? null;
}

function setMetaContent(name: string, content: string): void {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}
