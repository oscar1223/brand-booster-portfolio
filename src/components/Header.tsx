import { Button } from "@/components/ui/button";
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-bold text-xl text-primary">Mi Portfolio</div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('inicio')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Inicio
          </button>
          <button 
            onClick={() => scrollToSection('sobre-mi')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Sobre Mí
          </button>
          <button 
            onClick={() => scrollToSection('habilidades')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Habilidades
          </button>
          <button 
            onClick={() => scrollToSection('proyectos')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Proyectos
          </button>
          <button 
            onClick={() => scrollToSection('contacto')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Contacto
          </button>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button 
            variant="outline"
            onClick={() => scrollToSection('contacto')}
          >
            Contáctame
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="flex flex-col p-4 space-y-4">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('sobre-mi')}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              Sobre Mí
            </button>
            <button 
              onClick={() => scrollToSection('habilidades')}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              Habilidades
            </button>
            <button 
              onClick={() => scrollToSection('proyectos')}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              Proyectos
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              Contacto
            </button>
            <Button 
              variant="outline"
              className="self-start"
              onClick={() => scrollToSection('contacto')}
            >
              Contáctame
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;