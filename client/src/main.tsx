import { createRoot } from "react-dom/client";
import App from "./App";

/**
 * Fontes servidas pelo próprio domínio, não pelo CDN do Google.
 *
 * Antes o `index.html` tinha um `<link>` pra fonts.googleapis.com, e com
 * isso o Google recebia o IP, o user-agent e a página de origem de todo
 * visitante — dado pessoal transferido pro exterior sem necessidade
 * técnica nenhuma. Os `@fontsource-variable/*` trazem os mesmos arquivos
 * (as três fontes são SIL Open Font License) pro bundle, e o Vite os
 * publica junto do site.
 *
 * São fontes variáveis: um arquivo por idioma cobre toda a faixa de peso
 * (Plus Jakarta 200–800, DM Sans 100–1000, JetBrains Mono 100–800), em
 * vez de um arquivo por peso. O `unicode-range` de cada `@font-face` faz
 * o navegador baixar só o subconjunto latino em pt-BR; os outros ficam
 * no servidor sem nunca ser requisitados.
 *
 * As famílias chamam-se "... Variable" — é o nome que os pacotes
 * declaram, e é o que `--font-display`, `--font-body` e `--font-mono`
 * usam no `index.css`.
 */
import "@fontsource-variable/plus-jakarta-sans";
import "@fontsource-variable/dm-sans";
import "@fontsource-variable/jetbrains-mono";
import "@fontsource-variable/chivo-mono";

import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
