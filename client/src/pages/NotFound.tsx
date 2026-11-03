import { useLocation } from "wouter";
import { useWayfind } from "@/hooks/useWayfind";

export default function NotFound() {
  useWayfind();
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <main className="nao-achei">
      <div className="container nao-achei__grid">
        <h1>404</h1>
        <div className="nao-achei__texto">
          <h2>Página não encontrada</h2>
          <p>
            Essa página não existe. Ela pode ter sido movida ou apagada.
          </p>
          <div className="actions">
            <button
              type="button"
              onClick={handleGoHome}
              className="btn btn--primary"
            >
              Voltar pro início
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
