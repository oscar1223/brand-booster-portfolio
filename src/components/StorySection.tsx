import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Lightbulb, Target } from "lucide-react";

const StorySection = () => {
  return (
    <section id="mi-historia" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Mi historia
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Todo comenzó con una{" "}
            <span className="text-primary">pregunta</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-16">
          {/* Chapter 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                  1
                </div>
                <h3 className="text-2xl font-bold">El despertar</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                En 2016, trabajando en una agencia tradicional, me di cuenta de que muchas marcas 
                tenían historias increíbles pero no sabían cómo contarlas. 
                <span className="text-foreground font-medium"> ¿Cómo hacer que una marca conecte emocionalmente?</span>
              </p>
            </div>
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-8 text-center">
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-sm text-muted-foreground italic">
                  "El diseño no es solo cómo se ve. Es cómo funciona y cómo se siente."
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Chapter 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card className="bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20 md:order-1">
              <CardContent className="p-8 text-center">
                <Lightbulb className="w-12 h-12 text-secondary mx-auto mb-4" />
                <p className="text-sm text-muted-foreground italic">
                  "Cada proyecto es una oportunidad de crear algo memorable."
                </p>
              </CardContent>
            </Card>
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white text-sm font-bold">
                  2
                </div>
                <h3 className="text-2xl font-bold">La experimentación</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Decidí explorar más allá del diseño tradicional. Comencé a estudiar psicología del usuario, 
                estrategia de marca y tecnología. Descubrí que 
                <span className="text-foreground font-medium"> la magia sucede cuando combinas creatividad con datos</span>.
              </p>
            </div>
          </div>

          {/* Chapter 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                  3
                </div>
                <h3 className="text-2xl font-bold">El presente</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hoy ayudo a marcas valientes a contar sus historias de manera auténtica. 
                No se trata solo de diseño bonito, sino de 
                <span className="text-foreground font-medium"> crear experiencias que transformen negocios y conecten personas</span>.
              </p>
            </div>
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-sm text-muted-foreground italic">
                  "El mejor diseño es invisible. Solo se siente el resultado."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Current focus */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-primary/20 max-w-2xl">
            <h3 className="text-2xl font-bold mb-4">Mi enfoque actual</h3>
            <p className="text-muted-foreground leading-relaxed">
              Me especializo en crear identidades visuales coherentes y experiencias digitales 
              que no solo se ven bien, sino que <span className="text-foreground font-medium">generan resultados medibles</span>. 
              Trabajo con founders y equipos que quieren hacer una diferencia real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;