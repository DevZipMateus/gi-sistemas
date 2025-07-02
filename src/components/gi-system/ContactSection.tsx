import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, Send, ArrowRight } from "lucide-react";

export default function ContactSection() {
  const handleWhatsAppClick = () => {
    const phone = "5561993368116";
    const message = "Olá! Gostaria de solicitar um orçamento para sistemas de combate a incêndio.";
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailClick = () => {
    const email = "gcsistemas5@gmail.com";
    const subject = "Solicitação de Orçamento - Gi System";
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.open(mailtoUrl, '_blank');
  };

  return (
    <section id="contato" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Mail className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium text-primary">Entre em Contato</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Vamos
            <span className="block text-primary">Conversar?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Solicite seu orçamento gratuito ou tire suas dúvidas conosco. 
            Nossa equipe está pronta para desenvolver a melhor solução para sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Methods */}
          <div className="space-y-6">
            <Card className="p-6 bg-gradient-primary text-primary-foreground shadow-strong">
              <h3 className="text-2xl font-bold mb-6">Fale Conosco Agora</h3>
              <div className="space-y-4">
                <Button 
                  onClick={handleWhatsAppClick}
                  variant="secondary"
                  className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold"
                >
                  <Phone className="mr-2 w-4 h-4" />
                  WhatsApp: (61) 99336-8116
                </Button>
                
                <Button 
                  onClick={handleEmailClick}
                  variant="outline"
                  className="w-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Mail className="mr-2 w-4 h-4" />
                  E-mail: gcsistemas5@gmail.com
                </Button>
              </div>
              <p className="mt-4 text-sm opacity-90">
                ⚡ Resposta rápida garantida • 📱 Atendimento personalizado
              </p>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="p-4 text-center border-primary/20">
                <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-foreground mb-1">Horário</h4>
                <p className="text-sm text-muted-foreground">Seg-Sex: 8h-18h</p>
                <p className="text-sm text-muted-foreground">Sáb: 8h-12h</p>
              </Card>
              
              <Card className="p-4 text-center border-primary/20">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-foreground mb-1">Localização</h4>
                <p className="text-sm text-muted-foreground">Recanto das Emas</p>
                <p className="text-sm text-muted-foreground">Brasília - DF</p>
              </Card>
            </div>
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            <Card className="p-6 border-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-4">Por que escolher a Gi System?</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span className="text-muted-foreground">13+ anos de experiência no mercado</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span className="text-muted-foreground">Equipe técnica especializada e certificada</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span className="text-muted-foreground">Atendimento 24h para emergências</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span className="text-muted-foreground">Conformidade com todas as normas</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-secondary text-secondary-foreground shadow-strong">
              <h3 className="text-xl font-bold mb-4">Orçamento Gratuito</h3>
              <p className="mb-4">
                Receba uma proposta personalizada sem compromisso. 
                Analisamos suas necessidades e oferecemos a melhor solução.
              </p>
              <Button 
                onClick={handleWhatsAppClick}
                variant="outline"
                className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}