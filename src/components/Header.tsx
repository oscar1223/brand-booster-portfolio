import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/20">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-lg bg-gradient-primary bg-clip-text text-transparent">
            CreativeStudio
          </span>
        </div>
        
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
            onClick={() => scrollToSection('resultados')}
            className="text-foreground hover:text-primary transition-all duration-300 relative group"
          >
            Resultados
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
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
            className="bg-gradient-primary text-white border-0 shadow-glow hover:shadow-colorful transition-all duration-300 hover:scale-105"
            onClick={() => scrollToSection('contacto')}
          >
            Trabajemos juntos ✨
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
              onClick={() => scrollToSection('resultados')}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              Resultados
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