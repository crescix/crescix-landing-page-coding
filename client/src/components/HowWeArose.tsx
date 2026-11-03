import { FOTOS } from "@/lib/fotos";

const milestones = [
  { label: "Origem", text: "Estudantes da UNIFEI e FAI" },
  {
    label: "Dor identificada",
    text: "Vendas e despesas perdidas em áudios e mensagens espalhadas",
  },
  {
    label: "Solução",
    text: "IA que entende o jeito de falar do comerciante brasileiro",
  },
];

/**
 * "Nossa História" e os parceiros: os dois respondem "quem é a CrescIX",
 * então ficam na mesma seção. O id `parceiros` continua existindo.
 */
export default function HowWeArose() {
  return (
    <section id="nossa-historia" className="section--l">
      <div className="container">
        <div className="historia">
          <figure className="historia__foto">
            <div
              data-slot="historia"
              data-alt="A equipe da CrescIX ou um comerciante da região usando o produto"
            >
              <img
                src={`${import.meta.env.BASE_URL}${FOTOS.feiraRua.src}`}
                width={FOTOS.feiraRua.largura}
                height={FOTOS.feiraRua.altura}
                alt={FOTOS.feiraRua.alt}
                style={{ objectPosition: "25% 60%" }}
                loading="lazy"
              />
            </div>
            <figcaption>Feira de rua. Foto ilustrativa.</figcaption>
          </figure>

          <div className="historia__texto">
            <h2>Como a CrescIX surgiu</h2>

            <p>
              Começamos enquanto ainda estudávamos engenharia de software na{" "}
              <strong>UNIFEI</strong> e na <strong>FAI</strong>. Conversando
              com pequenos comerciantes da nossa região, batia sempre a mesma
              dor: as informações que importam pro caixa estavam soltas em
              áudios do WhatsApp, anotações em papel e na cabeça do dono.
            </p>

            <p>
              A gente percebeu que ferramentas de gestão existentes pediam
              tempo, treinamento e disciplina que o comerciante simplesmente
              não tem. Então invertemos a lógica: deixa a IA fazer o trabalho
              de digitar.
            </p>

            <dl className="marcos">
              {milestones.map((m) => (
                <div key={m.label}>
                  <dt>{m.label}</dt>
                  <dd>{m.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div id="parceiros" className="parceiros">
          <div className="parceiros__logos">
            <img
              src={`${import.meta.env.BASE_URL}parceiros/inatel-startups.png`}
              alt="Inatel Startups"
              loading="lazy"
            />
            <img
              src={`${import.meta.env.BASE_URL}parceiros/incit.png`}
              alt="INCIT: Incubadora de Empresas de Base Tecnológica de Itajubá"
              loading="lazy"
            />
          </div>
          <div>
            <h3>Parceiros</h3>
            <p>
              Fazemos parte do <strong>INATEL Startups</strong> e do{" "}
              <strong>Programa de Incubação da INCIT</strong>, iniciativas que
              fortalecem nossa jornada no ecossistema de inovação do Sul de
              Minas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
