import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Linkedin, Github, Mail } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-secondary rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-primary rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gradient-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-primary">
                  Disponible para proyectos increíbles
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Soy{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent relative">
                  María
                  <div className="absolute -bottom-2 left-0 w-full h-4 bg-primary/20 -z-10 transform rotate-1"></div>
                </span>
                <br />
                y convierto problemas en{" "}
                <span className="text-primary">soluciones</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl text-muted-foreground font-light">
                Designer • Strategist • Problem Solver
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Durante 8 años he ayudado a marcas a conectar con sus audiencias a través del diseño estratégico. 
              <span className="text-foreground font-medium">Cada proyecto cuenta una historia</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('mi-historia')}
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
              >
                Conoce mi historia
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('conversemos')}
                className="border-primary hover:bg-primary/5 transition-all duration-300"
              >
                Conversemos
              </Button>
            </div>

            <div className="flex items-center space-x-4 pt-4">
              <a 
                href="https://linkedin.com/in/tu-perfil" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/tu-usuario" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="mailto:tu@email.com"
                className="p-2 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-primary rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <img
                src={heroImage}
                alt="Foto de perfil profesional"
                className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-2xl shadow-colorful transform group-hover:scale-105 transition-all duration-300"
              />
              <div className="absolute top-4 right-4 w-6 h-6 bg-gradient-secondary rounded-full animate-pulse shadow-glow"></div>
              <div className="absolute bottom-4 left-4 px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs font-medium text-primary">
                Disponible 🟢
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;