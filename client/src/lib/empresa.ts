/**
 * Identificação do fornecedor: fonte única pra todo o site.
 *
 * O Decreto 7.962/2013 (regulamenta o CDC pro comércio eletrônico) exige,
 * no art. 2º, I, que o site de quem vende pela internet mostre em local
 * de destaque o nome empresarial e o número de inscrição no CNPJ **ou no
 * CPF**, além de endereço físico e eletrônico. Enquanto a CrescIX não tem
 * CNPJ, quem responde pelo contrato é a pessoa física abaixo, e é o CPF
 * dela que precisa aparecer.
 *
 * COMO PREENCHER: troque cada `[PREENCHER: ...]` pelo dado real. O que
 * ficar com placeholder aparece no rodapé como pendência visível, de
 * propósito — site no ar com identificação falsa é pior que site no ar
 * com identificação incompleta.
 *
 * Quando o CNPJ sair: preencha `cnpj` e `razaoSocial`; o rodapé e as
 * páginas legais passam a usar o CNPJ no lugar do CPF sozinhos.
 */

export const EMPRESA = {
  /** Nome fantasia / marca. Esse já é público. */
  nomeFantasia: "CrescIX",

  /**
   * Nome civil completo de quem responde legalmente hoje (pessoa física).
   * Sem CNPJ, é este nome que vale como "nome empresarial".
   */
  responsavel: "[PREENCHER: nome civil completo do responsável]",

  /** CPF do responsável, formatado 000.000.000-00. */
  cpf: "[PREENCHER: CPF do responsável]",

  /** Razão social. Só depois de abrir a empresa. */
  razaoSocial: null as string | null,

  /** CNPJ, quando existir. Formatado 00.000.000/0000-00. */
  cnpj: null as string | null,

  /**
   * Endereço físico completo. O decreto pede endereço, não só cidade.
   * Se hoje o endereço é residencial e você não quer expor, o caminho é
   * abrir um MEI com endereço comercial — e não omitir o campo.
   */
  endereco: "[PREENCHER: logradouro, número, bairro, cidade/UF, CEP]",

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

/** `true` quando o campo ainda está com placeholder. */
export function pendente(valor: string | null): boolean {
  return !valor || valor.startsWith("[PREENCHER");
}

/**
 * Linha de identificação pro rodapé e pras páginas legais.
 * Usa CNPJ quando existe; senão, nome civil + CPF.
 */
export function identificacaoFornecedor(): string {
  if (EMPRESA.cnpj && EMPRESA.razaoSocial) {
    return `${EMPRESA.razaoSocial} — CNPJ ${EMPRESA.cnpj}`;
  }
  return `${EMPRESA.responsavel} — CPF ${EMPRESA.cpf}`;
}
