import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Plataforma completa de comercio electrónico con panel de administración, gestión de inventario y procesamiento de pagos.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Aplicación de gestión de tareas con colaboración en tiempo real, notificaciones push y analytics avanzados.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS", "PWA"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Financial Dashboard",
      description: "Dashboard financiero con visualización de datos en tiempo real, reportes automáticos y predicciones basadas en IA.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      technologies: ["Next.js", "TypeScript", "D3.js", "Python"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Learning Management System",
      description: "Sistema completo de gestión de aprendizaje con videoconferencias, evaluaciones automáticas y seguimiento de progreso.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      technologies: ["React", "Express", "MongoDB", "WebRTC"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Social Media Analytics",
      description: "Herramienta de análisis de redes sociales con procesamiento de datos masivos y generación de insights automáticos.",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a",
      technologies: ["Python", "React", "Docker", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "IoT Monitoring Platform",
      description: "Plataforma de monitoreo IoT con visualización en tiempo real, alertas automáticas y control remoto de dispositivos.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176",
      technologies: ["React", "Node.js", "InfluxDB", "MQTT"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="proyectos" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Proyectos
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Mis trabajos destacados
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Una selección de los proyectos más importantes que he desarrollado, 
            cada uno con sus propios desafíos y soluciones innovadoras.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Proyectos destacados</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-elegant transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    Destacado
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <div className="flex space-x-2">
                      <Button size="sm" variant="ghost" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button size="sm" variant="ghost" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Otros proyectos</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-elegant transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center justify-between">
                    {project.title}
                    <div className="flex space-x-1">
                      <Button size="sm" variant="ghost" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                      <Button size="sm" variant="ghost" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" asChild>
            <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer">
              Ver más en GitHub
              <Github className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
