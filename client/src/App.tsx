import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
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

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster theme="dark" richColors position="top-right" />
          <Router hook={useHashLocation}>
            <AppRouter />
            <CookieBanner />
          </Router>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
