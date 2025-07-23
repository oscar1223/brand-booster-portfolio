import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Star, Zap, Target, Award } from "lucide-react";

const ResultsSection = () => {
  const achievements = [
    {
      icon: TrendingUp,
      title: "Incremento de ventas",
      value: "+250%",
      description: "Aumento promedio en conversiones de mis clientes",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Usuarios impactados",
      value: "50K+",
      description: "Personas que han interactuado con mis proyectos",
      color: "text-secondary-foreground"
    },
    {
      icon: Star,
      title: "Satisfacción del cliente",
      value: "4.9/5",
      description: "Rating promedio en proyectos completados",
      color: "text-accent-foreground"
    },
    {
      icon: Zap,
      title: "Tiempo de carga",
      value: "0.8s",
      description: "Velocidad promedio de sitios optimizados",
      color: "text-primary"
    }
  ];

  const highlights = [
    {
      title: "Transformación Digital Completa",
      client: "Startup Tech",
      result: "De 0 a 10K usuarios en 6 meses",
      impact: "Incremento del 400% en leads cualificados",
      tags: ["UX/UI", "Frontend", "Optimización"]
    },
    {
      title: "E-commerce de Alto Rendimiento",
      client: "Retail Brand",
      result: "Reducción del 60% en tiempo de carga",
      impact: "Aumento del 180% en conversiones móviles",
      tags: ["Performance", "Mobile-First", "SEO"]
    },
    {
      title: "Plataforma SaaS Innovadora",
      client: "Fintech Emergente",
      result: "MVP en 8 semanas",
      impact: "Captación de $2M en ronda inicial",
      tags: ["React", "API Design", "Escalabilidad"]
    }
  ];

  return (
    <section id="resultados" className="py-20 bg-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
            Resultados que hablan
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Impacto{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              real
            </span>{" "}
            y medible
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            No me conformo con entregar código. Me enfoco en generar 
            <span className="text-primary font-medium"> resultados tangibles</span> que 
            impulsen el crecimiento de tu negocio.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card key={index} className="text-center hover:shadow-colorful transition-all duration-300 group border-border/50">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
                    {achievement.value}
                  </h3>
                  <p className="font-semibold text-foreground mb-1">{achievement.title}</p>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Success Stories */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">
            Casos de éxito destacados
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-elegant transition-all duration-300 group border-l-4 border-l-primary">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs font-medium">
                      {highlight.client}
                    </Badge>
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {highlight.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Target className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-foreground">{highlight.result}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-secondary-foreground" />
                      <span className="text-sm text-muted-foreground">{highlight.impact}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {highlight.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs border-primary/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para obtener resultados similares?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Cada proyecto es una oportunidad de superar expectativas y generar impacto real.
            </p>
            <div className="flex items-center justify-center space-x-2 text-primary font-medium">
              <Zap className="w-5 h-5" />
              <span>Hablemos de tu próximo éxito</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;