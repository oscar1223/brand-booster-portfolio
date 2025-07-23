import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone, Clock, Calendar, Sparkles } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const PhoneCallSection = () => {
  const [phoneData, setPhoneData] = useState({
    name: '',
    phone: '',
    preferredTime: 'morning'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simular la programación de llamada con IA
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "¡Llamada programada!",
        description: `Mi asistente de IA te llamará al ${phoneData.phone} en los próximos 5 minutos para agendar tu cita.`,
      });
      
      setPhoneData({ name: '', phone: '', preferredTime: 'morning' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al programar la llamada. Inténtalo de nuevo.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setPhoneData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const features = [
    {
      icon: Phone,
      title: "Llamada inmediata",
      description: "Mi IA te llama en menos de 5 minutos"
    },
    {
      icon: Calendar,
      title: "Agenda directa",
      description: "Coordina tu cita durante la llamada"
    },
    {
      icon: Clock,
      title: "Disponible 24/7",
      description: "Mi asistente está siempre disponible"
    }
  ];

  return (
    <section id="llamada-ai" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            IA Assistant
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Que mi <span className="text-primary">IA te llame</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            ¿No tienes tiempo para escribir? Deja tu número y mi asistente de IA 
            te llamará inmediatamente para agendar una cita personalizada.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Phone Form */}
            <Card className="shadow-elegant border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl flex items-center justify-center gap-2">
                  <Phone className="w-6 h-6 text-primary" />
                  Llamada instantánea
                </CardTitle>
                <p className="text-muted-foreground">
                  Completa el formulario y prepárate para recibir la llamada
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">¿Cómo te llamas?</Label>
                    <Input
                      id="name"
                      name="name"
                      value={phoneData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Número de teléfono</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={phoneData.phone}
                      onChange={handleChange}
                      placeholder="+34 123 456 789"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="preferredTime">Horario preferido</Label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={phoneData.preferredTime}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="morning">Mañana (9:00 - 12:00)</option>
                      <option value="afternoon">Tarde (14:00 - 18:00)</option>
                      <option value="evening">Noche (19:00 - 21:00)</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full shadow-elegant hover:shadow-glow transition-all"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                        Programando llamada...
                      </>
                    ) : (
                      <>
                        <Phone className="w-4 h-4 mr-2" />
                        Recibir llamada ahora
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-accent/50 rounded-lg">
                  <p className="text-sm text-muted-foreground text-center">
                    <strong>Importante:</strong> Asegúrate de que tu teléfono esté disponible. 
                    La llamada llegará desde un número internacional.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">¿Cómo funciona?</h3>
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">{feature.title}</h4>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold">Asistente María AI</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Mi asistente de IA está entrenada para entender tus necesidades específicas 
                    y agendar la cita perfecta según tu disponibilidad y tipo de proyecto.
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Online ahora</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="text-center mt-16">
          <div className="flex justify-center items-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>100% Gratuito</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Sin compromiso</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Llamada en 5 minutos</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Datos protegidos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhoneCallSection;