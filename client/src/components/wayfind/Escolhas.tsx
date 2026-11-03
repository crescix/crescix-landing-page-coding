/**
 * Grupo de escolha única em células quadradas unidas. São rádios de verdade,
 * não botões: as setas do teclado funcionam e o leitor de tela anuncia o item
 * marcado. `rotuloDe` dá um nome acessível quando o texto visível não basta,
 * como o "7" da escala de nota.
 */
export default function Escolhas({
  nome,
  rotuladoPor,
  opcoes,
  valor,
  aoEscolher,
  colunas = "duas",
  rotuloDe,
}: {
  nome: string;
  rotuladoPor: string;
  opcoes: string[];
  valor: string;
  aoEscolher: (opcao: string) => void;
  colunas?: "duas" | "quatro" | "escala";
  rotuloDe?: (opcao: string) => string;
}) {
  return (
    <div
      role="radiogroup"
      aria-labelledby={rotuladoPor}
      className={`escolhas escolhas--${colunas}`}
    >
      {opcoes.map((opcao, i) => (
        <div key={opcao} className="escolha">
          <input
            id={`${nome}-${i}`}
            type="radio"
            name={nome}
            checked={valor === opcao}
            onChange={() => aoEscolher(opcao)}
            aria-label={rotuloDe?.(opcao)}
          />
          <label htmlFor={`${nome}-${i}`}>{opcao}</label>
        </div>
      ))}
    </div>
  );
}
