import { useLayoutEffect } from "react";

/**
 * Liga o tema Wayfind enquanto a página estiver montada. Os tokens e os
 * estilos de elemento do tema ficam atrás de `:root[data-site="wayfind"]`,
 * então as rotas que ainda não foram redesenhadas não herdam nada dele.
 * `useLayoutEffect` pra trocar antes da pintura, sem flash do tema escuro.
 */
export function useWayfind() {
  useLayoutEffect(() => {
    const raiz = document.documentElement;
    raiz.dataset.site = "wayfind";
    return () => {
      delete raiz.dataset.site;
    };
  }, []);
}
