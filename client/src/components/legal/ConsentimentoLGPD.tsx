import { Link } from "wouter";

/**
 * Caixa de aceite dos formulários.
 *
 * A LGPD exige que o consentimento seja livre, informado e inequívoco
 * (art. 8º): caixa desmarcada por padrão, texto dizendo pra que os dados
 * vão servir e link pra política antes do envio. Por isso o `checked`
 * vem do estado do pai e o botão de enviar tem que ficar desabilitado
 * enquanto estiver falso — pré-marcar a caixa anula o consentimento.
 *
 * O link pra política fica FORA do `<label>`, numa linha própria. Dentro,
 * ele era engolido no cálculo do nome acessível (controle aninhado não
 * entra), e o leitor de tela anunciava a caixa como "Autorizo... Li e
 * aceito a." — frase truncada justamente no documento que o usuário
 * precisa conhecer antes de aceitar. Fora do rótulo, ele é anunciado como
 * link próprio, e abre em outra aba pra não descartar o formulário já
 * preenchido.
 *
 * O `id` é obrigatório porque numa página com mais de um formulário dois
 * `htmlFor` iguais fariam o clique no rótulo marcar a caixa errada.
 */

interface ConsentimentoLGPDProps {
  id: string;
  checked: boolean;
  onChange: (valor: boolean) => void;
  /** Pra que os dados serão usados, em minúsculas, sem ponto final. */
  finalidade: string;
  /**
   * Nome do campo no envio. Vale a pena preencher: o art. 8º, § 2º põe
   * em quem coletou o ônus de provar que houve consentimento, então o
   * aceite viaja junto com o formulário.
   */
  name?: string;
}

export function ConsentimentoLGPD({
  id,
  checked,
  onChange,
  finalidade,
  name,
}: ConsentimentoLGPDProps) {
  return (
    <div className="consent">
      <div className="consent__linha">
        <input
          id={id}
          name={name}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          required
        />
        <label htmlFor={id}>
          Autorizo a CrescIX a usar os dados que eu enviar {finalidade}. Posso
          pedir a exclusão a qualquer momento.
        </label>
      </div>
      <p className="consent__politica">
        <Link
          href="/privacidade"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          Ler a Política de Privacidade
        </Link>{" "}
        (abre em outra aba)
      </p>
    </div>
  );
}
