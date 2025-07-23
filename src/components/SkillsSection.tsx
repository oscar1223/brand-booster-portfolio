import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Vue.js", level: 78 },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 82 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "REST APIs", level: 93 },
      ]
    },
    {
      title: "Herramientas",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Figma", level: 85 },
        { name: "Jira", level: 88 },
      ]
    }
  ];

  const technologies = [
    "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Node.js", 
    "Python", "PostgreSQL", "MongoDB", "Tailwind CSS", "AWS", "Docker",
    "Git", "Figma", "REST APIs", "GraphQL", "Jest", "Cypress"
  ];

  return (
    <section id="habilidades" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Habilidades
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Mi stack tecnológico
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estas son las tecnologías y herramientas con las que trabajo día a día 
            para crear soluciones digitales robustas y escalables.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-elegant transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6">Tecnologías que domino</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;