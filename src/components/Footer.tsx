import { Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Historia", href: "#mi-historia" },
    { name: "Proceso", href: "#proceso" },
    { name: "Casos", href: "#casos" },
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
      href: "mailto:contacto@tudominio.com",
      name: "Email"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border/40 bg-card/30 backdrop-blur">
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Brand & Description */}
          <div className="space-y-4 max-w-md">
            <h3 className="text-lg font-semibold text-foreground">IA para Empresas</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Especialista en implementar soluciones de Inteligencia Artificial que impulsan el crecimiento y aumentan los ingresos de tu empresa.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex gap-6">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link.name}
                </button>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-border/40 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4 text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border/40 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
          <p>© {currentYear} Todos los derechos reservados</p>
          <p className="mt-2 md:mt-0">
            Transformando empresas con IA
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;