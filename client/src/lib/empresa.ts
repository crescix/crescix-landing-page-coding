/**
 * Identificação do fornecedor: fonte única pra todo o site.
 *
 * O Decreto 7.962/2013 (regulamenta o CDC pro comércio eletrônico) exige,
 * no art. 2º, I, que o site de quem vende pela internet mostre em local
 * de destaque o nome empresarial e o número de inscrição no CNPJ ou no
 * CPF, além de endereço físico e eletrônico.
 *
 * Decisão de 03/11/2026: enquanto a CrescIX não tem CNPJ, o site não publica
 * o nome civil nem o CPF do responsável, e mostra só a cidade. Isso deixa a
 * exigência acima em aberto, de propósito.
 *
 * Quando o CNPJ sair: preencha `cnpj`, `razaoSocial` e `endereco`; o rodapé e
 * as páginas legais passam a mostrar esses dados sozinhos.
 */

export const EMPRESA = {
  /** Nome fantasia / marca. Esse já é público. */
  nomeFantasia: "CrescIX",

  /** Razão social. Só depois de abrir a empresa. */
  razaoSocial: null as string | null,

  /** CNPJ, quando existir. Formatado 00.000.000/0000-00. */
  cnpj: null as string | null,

  /** Endereço físico completo: logradouro, número, bairro, cidade/UF, CEP. */
  endereco: null as string | null,

  /** Cidade/UF usada nos textos corridos e no foro dos termos. */
  cidade: "Santa Rita do Sapucaí, MG",

  /** Comarca eleita como foro nos Termos de Uso. */
  comarca: "Santa Rita do Sapucaí, MG",

  /** E-mail de contato geral. Precisa receber de verdade. */
  emailContato: "contato@crescix.com.br",

  /** E-mail do Encarregado de dados (DPO). Precisa receber de verdade. */
  emailDpo: "privacidade@crescix.com.br",

  /** E-mail de suporte. Precisa receber de verdade. */
  emailSuporte: "suporte@crescix.com.br",

  /** Telefone/WhatsApp de atendimento, em formato internacional. */
  telefone: "+55 (35) 98421-9965",
  whatsappLink: "https://wa.me/5535984219965",
} as const;

/** Linha com razão social e CNPJ, ou `null` enquanto não existirem. */
export function identificacaoFornecedor(): string | null {
  if (EMPRESA.cnpj && EMPRESA.razaoSocial) {
    return `${EMPRESA.razaoSocial}, CNPJ ${EMPRESA.cnpj}`;
  }
  return null;
}
