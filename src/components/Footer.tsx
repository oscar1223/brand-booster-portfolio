import { Linkedin, Github, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Sobre mí", href: "#sobre-mi" },
    { name: "Habilidades", href: "#habilidades" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Contacto", href: "#contacto" },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/tu-perfil",
      name: "LinkedIn"
    },
    {
      icon: Github,
      href: "https://github.com/tu-usuario",
      name: "GitHub"
    },
    {
      icon: Mail,
      href: "mailto:tu@email.com",
      name: "Email"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Mi Portfolio</h3>
            <p className="text-muted-foreground max-w-sm">
              Desarrollador Full Stack especializado en crear experiencias digitales 
              excepcionales y soluciones innovadoras.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Navegación rápida</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">¿Hablamos?</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>¿Tienes un proyecto en mente?</p>
              <a
                href="mailto:tu@email.com"
                className="inline-block text-primary hover:underline"
              >
                tu@email.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
          <p>
            © {currentYear} Mi Portfolio. Todos los derechos reservados.
          </p>
          <p className="flex items-center mt-2 md:mt-0">
            Hecho con <Heart className="h-4 w-4 mx-1 text-red-500" /> usando React y Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;