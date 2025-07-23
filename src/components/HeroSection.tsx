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
    <section id="inicio" className="min-h-screen flex items-center pt-16 bg-gradient-hero">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="outline" className="w-fit">
              Disponible para nuevos proyectos
            </Badge>
            
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Hola, soy{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  [Tu Nombre]
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
                Desarrollador Full Stack & Especialista en [Tu Área]
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg">
              Transformo ideas en experiencias digitales excepcionales. 
              Especializado en crear soluciones innovadoras que impulsan el crecimiento empresarial.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('proyectos')}
                className="shadow-elegant hover:shadow-glow transition-all duration-300"
              >
                Ver mi trabajo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contacto')}
              >
                Contáctame
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
            <div className="relative">
              <img
                src={heroImage}
                alt="Foto de perfil profesional"
                className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-2xl shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;