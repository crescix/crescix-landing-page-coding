/**
 * Fotos reais do Wikimedia Commons, servidas pelo próprio domínio (sem
 * mandar o IP do visitante pra terceiros). CC BY e CC BY-SA exigem crédito
 * com autor, licença e link: `FOTOS` alimenta a linha de créditos do rodapé.
 * Fotos dos clientes da CrescIX, quando existirem, entram no lugar destas.
 */
export const FOTOS = {
  feiraSaude: {
    src: "images/fotos/feira-saude-sao-paulo.jpg",
    largura: 1920,
    altura: 1523,
    alt: "Bacias de pimentas coloridas vistas de cima numa banca da feira da Saúde, em São Paulo",
    autor: "Wilfredor",
    licenca: "CC BY-SA 4.0",
    pagina:
      "https://commons.wikimedia.org/wiki/File:Capsicum_baccatum_in_Sa%C3%BAde_flea_market,_S%C3%A3o_Paulo,_Brazil.jpg",
  },
  feiraRua: {
    src: "images/fotos/feira-de-rua.jpg",
    largura: 1920,
    altura: 1442,
    alt: "Clientes e feirantes numa banca de verduras sob toldos verdes",
    autor: "Touam (Hervé Agnoux)",
    licenca: "CC BY-SA 4.0",
    pagina:
      "https://commons.wikimedia.org/wiki/File:Matin_ensoleill%C3%A9_au_march%C3%A9_de_la_Terrasse.jpg",
  },
  loja: {
    src: "images/fotos/loja-balcao.jpg",
    largura: 1920,
    altura: 1440,
    alt: "Interior de uma loja com prateleiras de madeira, etiquetas de preço e balcão de mármore",
    autor: "Steffen Mokosch",
    licenca: "CC BY-SA 4.0",
    pagina:
      "https://commons.wikimedia.org/wiki/File:Sabor_Espana_shop_interior_Cala_Millor.jpg",
  },
  haltere: {
    src: "images/fotos/haltere-mao.jpg",
    largura: 1920,
    altura: 2876,
    alt: "Mão segurando um haltere preto ao lado de um banco de academia",
    autor: "Nenad Stojkovic",
    licenca: "CC BY 2.0",
    pagina:
      "https://commons.wikimedia.org/wiki/File:Close-up_Hand_holding_dumbbell_in_gym.jpg",
  },
} as const;

export type Foto = (typeof FOTOS)[keyof typeof FOTOS];
