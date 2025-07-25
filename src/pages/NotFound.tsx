import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-background">
      <div className="text-center p-8 bg-card/50 backdrop-blur-sm rounded-lg border shadow-elegant max-w-md mx-4">
        <div className="text-6xl font-bold text-primary mb-4">404</div>
        <h1 className="text-2xl font-semibold text-foreground mb-2">Página no encontrada</h1>
        <p className="text-muted-foreground mb-6">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <Button asChild className="shadow-glow">
          <a href="/">
            <Home className="w-4 h-4 mr-2" />
            Volver al inicio
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
