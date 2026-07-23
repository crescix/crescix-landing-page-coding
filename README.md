# crescix-landing-page-coding

Site público (landing page) do **CrescIX**: apresenta a proposta, captura
leads pro teste grátis e recebe feedback. Stack escolhida pra ser leve e
rápida (Vite + React, sem framework de SSR).

Faz parte do ecossistema:
- [crescix-api](https://github.com/crescix/crescix-api): backend
- [crescix-web](https://github.com/crescix/crescix-web): app autenticado
- [crescix-automations](https://github.com/crescix/crescix-automations): bot Telegram

---

## Stack

- **Vite 5** + **React 18**: SPA buildada estaticamente
- **TypeScript**
- **Tailwind CSS 4** + **shadcn/ui** + **Radix**: design system
- **Wouter**: router minimalista (hash-based)
- **Framer Motion**: animações
- **GitHub Pages** ou **Vercel**: deploy

---

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em [http://localhost:5173](http://localhost:5173).

Outros scripts:

| Comando | O que faz |
|---|---|
| `npm run build` | Build de produção em `dist/public/` |
| `npm run preview` | Serve o build pra inspeção local |
| `npm run check` | TypeScript check (não falha o build) |
| `npm run deploy` | Publica em `gh-pages` (config no `package.json`) |
| `npm run format` | Prettier no projeto inteiro |

---

## Páginas

| Rota | Conteúdo |
|---|---|
| `/` | Landing principal: hero, features, "como surgimos", "pra quem é", CTA, contato |
| `/teste-gratis` | Formulário de 3 passos pra solicitar acesso ao MVP |
| `/feedback` | NPS + perguntas qualitativas |
| `/privacidade` | Política de Privacidade (LGPD) |
| `/termos` | Termos de Uso |

Todas usam meta tags próprias via o hook [`useSEO`](client/src/hooks/useSEO.ts).

---

## Estrutura

```
client/
├── index.html               # OG, Twitter Card, theme-color, fontes
├── public/images/           # logos, ilustrações
└── src/
    ├── main.tsx             # entry
    ├── App.tsx              # router (Wouter)
    ├── components/
    │   ├── HeroSection.tsx
    │   ├── Features.tsx
    │   ├── HowItWorks.tsx
    │   ├── ForWhom.tsx
    │   ├── HowWeArose.tsx
    │   ├── CTASection.tsx
    │   ├── Contact.tsx
    │   ├── Footer.tsx
    │   ├── Navbar.tsx
    │   ├── CookieBanner.tsx
    │   ├── ErrorBoundary.tsx
    │   └── ui/              # shadcn primitives
    ├── pages/
    │   ├── Home.tsx
    │   ├── TesteGratis.tsx
    │   ├── Feedback.tsx
    │   ├── Privacidade.tsx
    │   ├── Termos.tsx
    │   └── NotFound.tsx
    └── hooks/
        └── useSEO.ts        # title + description por rota
shared/                       # tipos compartilhados (legado, pouco uso aqui)
server/                       # api fake pra ambiente local (não usado em prod)
```

---

## SEO

- `index.html` tem Open Graph completo (1200x630), Twitter Card `summary_large_image`, canonical, theme-color, robots.
- `useSEO` atualiza `document.title` + `meta[name=description]` por rota.
- Limitação consciente: crawlers do FB/Twitter não executam JS, então OG/Twitter por rota fica fixo. Pro Google/Bing (que executam JS) o snippet correto aparece nos resultados.

---

## Deploy

GitHub Pages via `npm run deploy`. Antes:

```bash
npm run build
```

A pasta `dist/public/` é o output servido. Configurado em `vite.config.ts` e `package.json`.

Pra Vercel ou outro provider, basta apontar pro mesmo output e configurar SPA fallback (`/* → /index.html`). Wouter cuida do roteamento client-side.
