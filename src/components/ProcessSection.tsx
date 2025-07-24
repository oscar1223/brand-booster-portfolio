import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Palette, Code, Rocket } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Descubrimiento",
      description: "Entendemos tu marca, audiencia y objetivos. Cada proyecto comienza con preguntas profundas.",
      details: ["Análisis de competencia", "Definición de audiencia", "Objetivos estratégicos"]
    },
    {
      icon: Palette,
      number: "02", 
      title: "Diseño estratégico",
      description: "Creamos conceptos visuales que comunican tu esencia de forma única y memorable.",
      details: ["Concepto creativo", "Sistema visual", "Prototipado"]
    },
    {
      icon: Code,
      number: "03",
      title: "Desarrollo",
      description: "Transformamos las ideas en experiencias digitales funcionales y optimizadas.",
      details: ["Desarrollo frontend", "Optimización", "Testing"]
    },
    {
      icon: Rocket,
      number: "04",
      title: "Lanzamiento",
      description: "Acompañamos el lanzamiento y medimos el impacto para garantizar el éxito.",
      details: ["Deploy", "Métricas", "Optimización continua"]
    }
  ];

  return (
    <section id="proceso" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Mi proceso
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Cómo trabajo{" "}
            <span className="text-primary">contigo</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Un enfoque estructurado pero flexible, donde cada etapa está diseñada para 
            maximizar el valor y minimizar la fricción.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card key={index} className="relative overflow-hidden hover:shadow-elegant transition-all duration-300 group">
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -mr-10 -mt-10"></div>
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-glow">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-3xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                      {step.number}
                    </span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;