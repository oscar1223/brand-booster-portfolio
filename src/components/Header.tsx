import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 max-w-fit hidden md:block">
        <div className="bg-background/80 backdrop-blur-lg rounded-full border border-border/20 px-6 py-3 shadow-lg">
          <nav className="flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              Inicio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('mi-historia')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              Historia
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('proceso')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              Proceso
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('casos')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              Casos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              Contacto
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>
        </div>
      </header>
      
      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          className="bg-background/80 backdrop-blur-lg rounded-full p-3 border border-border/20 shadow-lg"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        
        {isMenuOpen && (
          <div className="absolute top-full right-0 mt-2 bg-background/90 backdrop-blur-lg rounded-lg border border-border/20 shadow-lg p-4 min-w-[200px]">
            <nav className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('mi-historia')}
                className="text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Historia
              </button>
              <button 
                onClick={() => scrollToSection('proceso')}
                className="text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Proceso
              </button>
              <button 
                onClick={() => scrollToSection('casos')}
                className="text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Casos
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contacto
              </button>
            </nav>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;