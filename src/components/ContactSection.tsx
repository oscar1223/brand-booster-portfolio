import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    toast({
      title: "Mensaje enviado",
      description: "Te responderé lo antes posible. ¡Gracias por contactarme!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "tu@email.com",
      href: "mailto:tu@email.com"
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: "+34 123 456 789",
      href: "tel:+34123456789"
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Madrid, España",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://linkedin.com/in/tu-perfil",
      color: "hover:text-blue-600"
    },
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com/tu-usuario",
      color: "hover:text-gray-700"
    },
    {
      icon: Twitter,
      name: "Twitter",
      href: "https://twitter.com/tu-usuario",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contacto" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Contacto
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Hablamos?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ¿Tienes un proyecto en mente? ¿Quieres colaborar conmigo? 
            ¡No dudes en contactarme! Estoy siempre abierto a nuevas oportunidades.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle>Envíame un mensaje</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Asunto</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="¿De qué quieres hablar?"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntame sobre tu proyecto o idea..."
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="w-full shadow-elegant hover:shadow-glow transition-all">
                  Enviar mensaje
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Información de contacto</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-accent">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">{info.label}</div>
                      <a 
                        href={info.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Sígueme en redes</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full bg-accent transition-all duration-300 hover:scale-110 ${social.color}`}
                    title={social.name}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>

            <Card className="bg-gradient-hero border-0">
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-2">¿Prefieres una llamada?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Si prefieres hablar directamente, podemos agendar una videollamada para discutir tu proyecto en detalle.
                </p>
                <Button variant="outline" className="w-full">
                  Agendar llamada
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;