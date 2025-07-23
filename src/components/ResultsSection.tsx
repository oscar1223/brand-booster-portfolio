import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Star, Zap, Target, Award } from "lucide-react";

const ResultsSection = () => {
  const achievements = [
    {
      icon: TrendingUp,
      title: "Marcas transformadas",
      value: "50+",
      description: "Empresas que han redefinido su identidad",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Audiencias conectadas",
      value: "2M+",
      description: "Personas impactadas por mis diseños",
      color: "text-secondary-foreground"
    },
    {
      icon: Star,
      title: "Proyectos exitosos",
      value: "95%",
      description: "Superan objetivos iniciales",
      color: "text-accent-foreground"
    },
    {
      icon: Target,
      title: "Años de experiencia",
      value: "8+",
      description: "Creando experiencias memorables",
      color: "text-primary"
    }
  ];

  const highlights = [
    {
      title: "Rebranding que cambió todo",
      client: "Eco Startup",
      result: "Inversión de €500K tras el rebrand",
      impact: "Posicionamiento como líder en sostenibilidad",
      tags: ["Branding", "Strategy", "Storytelling"],
      story: "Una startup verde que no sabía cómo comunicar su misión. Creamos una identidad que habla por sí sola."
    },
    {
      title: "E-commerce que emociona",
      client: "Fashion Brand",
      result: "300% más conversiones en 3 meses",
      impact: "Experiencia de compra memorable",
      tags: ["UX/UI", "E-commerce", "Mobile"],
      story: "Transformamos una tienda online aburrida en una experiencia que conecta emocionalmente."
    },
    {
      title: "App que simplifica vidas",
      client: "FinTech",
      result: "100K usuarios en el primer mes",
      impact: "4.8★ en App Store desde el lanzamiento",
      tags: ["Product Design", "Mobile App", "UX"],
      story: "Hicimos que las finanzas sean tan simples como enviar un mensaje. La gente ama la simplicidad."
    }
  ];

  return (
    <section id="casos" className="py-20 bg-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Casos de éxito
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Historias que{" "}
            <span className="text-primary">transformaron</span>{" "}
            negocios
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cada proyecto es único, pero todos comparten algo: 
            <span className="text-foreground font-medium">el poder de una buena historia bien contada</span>.
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
              <Card key={index} className="overflow-hidden hover:shadow-elegant transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs font-medium">
                      {highlight.client}
                    </Badge>
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {highlight.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground italic leading-relaxed">
                    "{highlight.story}"
                  </p>
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center space-x-2">
                      <Target className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-foreground">{highlight.result}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{highlight.impact}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {highlight.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl border border-primary/20 max-w-2xl">
            <h3 className="text-2xl font-bold mb-4">
              Mi filosofía
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Creo que cada marca tiene una historia única que merece ser contada de forma extraordinaria. 
              <span className="text-foreground font-medium">No se trata de seguir tendencias, sino de crear experiencias auténticas</span> que 
              conecten, emocionen y generen resultados duraderos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;