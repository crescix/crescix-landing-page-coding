# Design: CrescIX (site)

O sistema travado. Toda execução do Hallmark lê este arquivo primeiro, e as páginas o compartilham. Mude de propósito; o arquivo é a regra.

## Sistema
- Gênero: modern-minimal
- Forma da primeira página: Split Studio
- Tema: Wayfind, com ink, verde e âmbar da marca CrescIX no lugar do cobalto
- Eixos: light/mono/cool, posture: committed
- Vale em todas as rotas. Só a tela de erro do `ErrorBoundary` ainda usa os tokens escuros do `index.css`.

## Como ligar numa página
Chame `useWayfind()` no componente da página e use `SiteFooter`. Os tokens e os estilos de elemento ficam atrás de `:root[data-site="wayfind"]`. Documentos legais usam `LegalShell`, que já faz isso, com estilos em `wayfind-legal.css`.

## Tokens
`client/src/tokens.css` é a fonte da verdade. Os papéis:
- Papel: `--color-paper`, `--color-paper-2`, `--color-paper-3`
- Tinta: `--color-ink` (#011C38, igual ao fundo do `logo.png`), `--color-ink-2`, `--color-muted`, `--color-rule`
- Sobre tinta: `--color-on-ink`, `--color-on-ink-muted`, `--color-ink-rule`
- Verde: `--color-accent` (preenchimento, sempre com `--color-accent-ink`), `--color-accent-text` (texto e foco sobre papel)
- Âmbar: `--color-accent-2`, só sobre tinta ou como preenchimento sob tinta
- Fonte: Chivo Mono, servida pelo próprio domínio via `@fontsource-variable/chivo-mono`

## Controles
- Um botão verde preenchido e um transparente com borda de 2px, ambos quadrados, Chivo Mono 800, 44 a 52px.
- Texto do botão verde sempre em tinta: branco sobre esse verde reprova em contraste.
- Foco com `outline` de 2px, instantâneo. Sobre tinta, `.on-ink` troca o foco para âmbar.
- Escolha única: `Escolhas`, rádios de verdade em células quadradas unidas.

## Superfícies
- Raio 0, bordas de 2px em tinta, divisórias de 1px.
- Placa: campo de tinta com a instrução e a figura. Sinal: preenchimento âmbar com tinta por cima.
- Sem gradiente, sem textura, sem sombra em card. `--shadow-card` só sob o que flutua sobre outra superfície.

## Fotos
Reais, com autor, licença e link no rodapé (`client/src/lib/fotos.ts`), servidas pelo próprio domínio. Tipo só em placa dentro do quadro, nunca direto sobre a foto. Nenhum banco de imagem.

## Exports
Rode o verificador com os estilos e as páginas do grupo. Os documentos legais rodam à parte, com `wayfind-legal.css` no lugar de `wayfind.css`, porque têm carimbo próprio (`copy: verbatim`).

```
node <skill-dir>/scripts/sloplint.mjs client/src/wayfind.css client/src/tokens.css client/src/base.css <páginas> --genre modern-minimal --render --url http://localhost:3000/<rota>
```
