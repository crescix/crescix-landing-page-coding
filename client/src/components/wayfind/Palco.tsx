import type { ReactNode } from "react";
import type { Foto } from "@/lib/fotos";

/**
 * O quadro do hero: a foto real preenche o slot, e a placa do produto fica
 * por cima, dentro do quadro (`data-keep` mantém a placa quando uma foto do
 * próprio cliente substituir esta). `posicao` é o `object-position` do recorte.
 */
export default function Palco({
  foto,
  slot,
  descricao,
  posicao,
  children,
}: {
  foto: Foto;
  slot: string;
  descricao: string;
  posicao?: string;
  children: ReactNode;
}) {
  return (
    <figure className="stage" data-slot={slot} data-alt={descricao}>
      <img
        className="stage__photo"
        src={`${import.meta.env.BASE_URL}${foto.src}`}
        width={foto.largura}
        height={foto.altura}
        alt={foto.alt}
        style={posicao ? { objectPosition: posicao } : undefined}
        fetchPriority="high"
      />
      {children}
    </figure>
  );
}
