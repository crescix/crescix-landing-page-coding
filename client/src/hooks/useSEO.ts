import { useEffect } from "react";

/**
 * Hook de SEO por rota num SPA. Atualiza title, description, canonical,
 * OG (title/description/url) e Twitter Card. O Googlebot renderiza JS,
 * então o snippet correto entra no índice de busca.
 *
 * Restaura os valores anteriores ao desmontar, pra navegação SPA não
 * deixar rastro se o usuário voltar pro home antes do próximo render.
 *
 * Sobre OG pra Facebook/WhatsApp/LinkedIn: os crawlers deles NÃO
 * executam JS, então o card compartilhado será sempre a versão fixa
 * do index.html. Pra ter card específico por rota precisa SSR ou
 * pré-renderização. Ainda assim, atualizar OG aqui ajuda o Google e
 * ferramentas que fazem render (Slack unfurl usa Chrome headless).
 */
interface UseSEOOptions {
  title: string;
  description?: string;
  /** Path relativo (ex: "/erp"). Se omitido, mantém o canonical atual. */
  canonicalPath?: string;
  /** URL absoluta de imagem OG específica dessa rota. Default: hero da landing. */
  ogImage?: string;
}

const SITE_ORIGIN = "https://crescix.com.br";

export function useSEO({ title, description, canonicalPath, ogImage }: UseSEOOptions) {
  useEffect(() => {
    const anteriores = capturarEstadoAtual();

    document.title = title;
    if (description) {
      setMetaName("description", description);
      setMetaProp("og:description", description);
      setMetaName("twitter:description", description);
    }

    setMetaProp("og:title", title);
    setMetaName("twitter:title", title);

    if (canonicalPath) {
      const canonicalUrl = `${SITE_ORIGIN}${canonicalPath}`;
      setLinkRel("canonical", canonicalUrl);
      setMetaProp("og:url", canonicalUrl);
    }

    if (ogImage) {
      setMetaProp("og:image", ogImage);
      setMetaName("twitter:image", ogImage);
    }

    return () => restaurarEstado(anteriores);
  }, [title, description, canonicalPath, ogImage]);
}

interface EstadoSEO {
  title: string;
  description: string | null;
  ogTitle: string | null;
  ogDescription: string | null;
  ogUrl: string | null;
  ogImage: string | null;
  twitterTitle: string | null;
  twitterDescription: string | null;
  twitterImage: string | null;
  canonical: string | null;
}

function capturarEstadoAtual(): EstadoSEO {
  return {
    title: document.title,
    description: getMetaName("description"),
    ogTitle: getMetaProp("og:title"),
    ogDescription: getMetaProp("og:description"),
    ogUrl: getMetaProp("og:url"),
    ogImage: getMetaProp("og:image"),
    twitterTitle: getMetaName("twitter:title"),
    twitterDescription: getMetaName("twitter:description"),
    twitterImage: getMetaName("twitter:image"),
    canonical: getLinkRel("canonical"),
  };
}

function restaurarEstado(estado: EstadoSEO): void {
  document.title = estado.title;
  if (estado.description) setMetaName("description", estado.description);
  if (estado.ogTitle) setMetaProp("og:title", estado.ogTitle);
  if (estado.ogDescription) setMetaProp("og:description", estado.ogDescription);
  if (estado.ogUrl) setMetaProp("og:url", estado.ogUrl);
  if (estado.ogImage) setMetaProp("og:image", estado.ogImage);
  if (estado.twitterTitle) setMetaName("twitter:title", estado.twitterTitle);
  if (estado.twitterDescription) setMetaName("twitter:description", estado.twitterDescription);
  if (estado.twitterImage) setMetaName("twitter:image", estado.twitterImage);
  if (estado.canonical) setLinkRel("canonical", estado.canonical);
}

function getMetaName(name: string): string | null {
  return document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)?.getAttribute("content") ?? null;
}

function getMetaProp(property: string): string | null {
  return document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`)?.getAttribute("content") ?? null;
}

function getLinkRel(rel: string): string | null {
  return document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)?.getAttribute("href") ?? null;
}

function setMetaName(name: string, content: string): void {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setMetaProp(property: string, content: string): void {
  let el = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLinkRel(rel: string, href: string): void {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}
