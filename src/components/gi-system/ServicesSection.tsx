import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Droplets, 
  Zap, 
  DoorOpen, 
  Lightbulb, 
  Wind, 
  MapPin, 
  Settings, 
  GraduationCap,
  ArrowRight 
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Shield,
      title: "Sistema de Alarme de Incêndio",
      description: "Instalação e manutenção de sistemas de detecção e alarme de incêndio com tecnologia avançada.",
      features: ["Detecção automática", "Central de alarme", "Sinalizadores sonoros e visuais"]
    },
    {
      icon: Droplets,
      title: "Sistema de Hidrante Grooved",
      description: "Instalação e manutenção de hidrantes ranhurados para combate direto ao fogo.",
      features: ["Hidrantes certificados", "Mangueiras resistentes", "Esguichos profissionais"]
    },
    {
      icon: Zap,
      title: "Sistema SPDA",
      description: "Sistema de Proteção contra Descargas Atmosféricas para proteger edificações.",
      features: ["Para-raios certificados", "Aterramento adequado", "Laudo técnico"]
    },
    {
      icon: DoorOpen,
      title: "Portas Corta-Fogo",
      description: "Instalação e manutenção de portas corta-fogo para contenção de incêndios.",
      features: ["Certificação INMETRO", "Resistência RF-60 a RF-120", "Fechadores automáticos"]
    },
    {
      icon: Lightbulb,
      title: "Iluminação de Emergência",
      description: "Sistema de iluminação de emergência para evacuação segura em casos de emergência.",
      features: ["Blocos autônomos", "Bateria de longa duração", "Teste automático"]
    },
    {
      icon: Wind,
      title: "Sistema de Pressurização",
      description: "Pressurização de escadas de segurança e antecâmaras conforme normas técnicas.",
      features: ["Ventiladores certificados", "Controle automático", "Monitoramento constante"]
    },
    {
      icon: MapPin,
      title: "Placas de Sinalização",
      description: "Instalação de placas de sinalização de emergência e rotas de fuga.",
      features: ["Material fotoluminescente", "Norma NBR 13434", "Durabilidade garantida"]
    },
    {
      icon: Settings,
      title: "Quadros de Comando",
      description: "Montagem de quadros de comando para sistemas de combate a incêndio.",
      features: ["Componentes certificados", "Programação personalizada", "Interface intuitiva"]
    },
    {
      icon: GraduationCap,
      title: "Treinamento PPCI",
      description: "Treinamento de funcionários sobre comportamento em caso de incêndio.",
      features: ["Certificado incluso", "Prática e teoria", "Brigada de emergência"]
    },
    {
      icon: Droplets,
      title: "Sistema de Sprinklers",
      description: "Instalação e manutenção de sistemas automáticos de sprinklers para extinção de incêndios.",
      features: ["Ativação automática", "Cobertura total", "Manutenção preventiva"]
    }
  ];

  const handleServiceClick = (serviceName: string) => {
    const phone = "5561993368116";
    const message = `Olá! Gostaria de solicitar um orçamento para ${serviceName}.`;
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="servicos" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Shield className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium text-primary">Nossos Serviços</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Soluções Completas em
            <span className="block text-primary">Combate a Incêndio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços para manter sua empresa protegida e em conformidade 
            com todas as normas de segurança contra incêndio.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-strong transition-all duration-300 group border-border hover:border-primary/30">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="outline" 
                    className="w-full mt-4 border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => handleServiceClick(service.title)}
                  >
                    Solicitar Orçamento
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="inline-block p-8 bg-gradient-primary text-primary-foreground shadow-strong">
            <h3 className="text-2xl font-bold mb-4">Precisa de uma Solução Personalizada?</h3>
            <p className="mb-6 opacity-90">
              Nossa equipe técnica pode desenvolver um projeto específico para suas necessidades.
            </p>
            <Button 
              variant="secondary"
              onClick={() => handleServiceClick("uma solução personalizada")}
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Fale com Nossos Especialistas
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}