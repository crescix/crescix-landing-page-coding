import { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import CookieBanner from "./components/CookieBanner";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Atendimento from "./pages/Atendimento";
import Erp from "./pages/Erp";
import TesteGratis from "./pages/TesteGratis";
import Feedback from "./pages/Feedback";
import Privacidade from "./pages/Privacidade";
import Termos from "./pages/Termos";

function AppRouter() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/atendimento" component={Atendimento} />
      <Route path="/erp" component={Erp} />
      <Route path="/teste-gratis" component={TesteGratis} />
      <Route path="/feedback" component={Feedback} />
      <Route path="/privacidade" component={Privacidade} />
      <Route path="/termos" component={Termos} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

/**
 * Migra links antigos com hash routing pra rotas limpas.
 *
 * Antes o roteador usava `useHashLocation`, então links compartilhados vinham
 * como "crescix.com.br/#/atendimento". Agora usamos rotas normais
 * ("crescix.com.br/atendimento"). Este efeito detecta esse padrão antigo e
 * substitui a URL sem recarregar a página, pra:
 *   1. Links já compartilhados no WhatsApp continuarem funcionando
 *   2. O Google não indexar dois endereços para a mesma página
 *
 * O hash "#produtos" (âncora de seção na home) NÃO é rota: começa sem barra,
 * então é preservado pelo teste `startsWith("#/")`.
 */
function LegacyHashRedirect() {
  useEffect(() => {
    if (window.location.hash.startsWith("#/")) {
      const path = window.location.hash.slice(1); // "#/atendimento" → "/atendimento"
      window.history.replaceState(null, "", path + window.location.search);
    }
  }, []);
  return null;
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster theme="dark" richColors position="top-right" />
          <LegacyHashRedirect />
          <Router>
            <AppRouter />
            <CookieBanner />
          </Router>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
