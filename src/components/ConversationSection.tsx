import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Calendar, Coffee, ArrowRight } from "lucide-react";

const ConversationSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="conversemos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Conversemos
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Tienes un proyecto en{" "}
            <span className="text-primary">mente</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Las mejores colaboraciones comienzan con una buena conversación. 
            Cuéntame tu visión y exploremos cómo podemos hacerla realidad.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center hover:shadow-elegant transition-all duration-300 group">
            <CardHeader>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Coffee className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Coffee Chat</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Una conversación relajada para conocernos y explorar ideas.
              </p>
              <Badge variant="outline" className="text-xs">
                30 min • Gratis
              </Badge>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-elegant transition-all duration-300 group border-primary/20">
            <CardHeader>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow group-hover:shadow-colorful transition-all">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl">Strategy Session</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Análisis profundo de tu marca y definición de estrategia.
              </p>
              <Badge className="text-xs bg-primary text-white">
                90 min • Recomendado
              </Badge>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-elegant transition-all duration-300 group">
            <CardHeader>
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                <Calendar className="w-8 h-8 text-secondary" />
              </div>
              <CardTitle className="text-xl">Project Planning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Planificación detallada y roadmap para tu proyecto.
              </p>
              <Badge variant="outline" className="text-xs">
                2 hrs • Personalizado
              </Badge>
            </CardContent>
          </Card>
        </div>

        {/* Contact form preview */}
        <div className="max-w-2xl mx-auto">
          <Card className="border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">¿Hablamos?</CardTitle>
              <p className="text-muted-foreground">
                Cuéntame sobre tu proyecto y agendemos una conversación
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection('contacto')}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
                >
                  Iniciar conversación
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Respuesta en 24h</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Sin compromiso</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Consulta gratuita</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Personal note */}
        <div className="text-center mt-12">
          <div className="inline-block p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border border-primary/20 max-w-lg">
            <p className="text-muted-foreground italic">
              "Cada proyecto es una oportunidad de revolucionar tu negocio con IA. 
              <span className="text-foreground font-medium">Estoy emocionado de conocer tu empresa</span>."
            </p>
            <p className="text-sm text-primary font-medium mt-2">— Óscar</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversationSection;