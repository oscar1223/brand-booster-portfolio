import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Target, Lightbulb } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Award, value: "5+", label: "Años de experiencia" },
    { icon: Users, value: "50+", label: "Proyectos completados" },
    { icon: Target, value: "98%", label: "Satisfacción del cliente" },
    { icon: Lightbulb, value: "100+", label: "Ideas implementadas" },
  ];

  const values = [
    {
      title: "Innovación",
      description: "Siempre busco las últimas tecnologías y mejores prácticas para crear soluciones de vanguardia."
    },
    {
      title: "Calidad",
      description: "Cada línea de código está pensada para ser mantenible, escalable y eficiente."
    },
    {
      title: "Colaboración",
      description: "Trabajo estrechamente con equipos multidisciplinarios para lograr resultados excepcionales."
    },
    {
      title: "Aprendizaje",
      description: "La tecnología evoluciona constantemente, y yo evoluciono con ella."
    }
  ];

  return (
    <section id="sobre-mi" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Sobre mí
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Conóceme mejor
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soy un profesional apasionado por la tecnología con experiencia en desarrollo full-stack. 
            Mi objetivo es crear soluciones digitales que realmente marquen la diferencia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Mi historia</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Comencé mi carrera en tecnología hace más de 5 años, motivado por la curiosidad 
                de entender cómo funcionan las cosas y la pasión por resolver problemas complejos.
              </p>
              <p>
                A lo largo de mi trayectoria, he tenido la oportunidad de trabajar con empresas 
                de diversos tamaños, desde startups hasta corporaciones multinacionales, 
                ayudándoles a digitalizar sus procesos y mejorar su presencia online.
              </p>
              <p>
                Mi enfoque se centra en crear experiencias de usuario excepcionales mientras 
                mantengo código limpio y arquitecturas escalables.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-shadow">
                <CardContent className="pt-6">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-center mb-8">Mis valores</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-elegant transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;