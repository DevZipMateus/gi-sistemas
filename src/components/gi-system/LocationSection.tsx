
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Navigation, ArrowRight } from "lucide-react";
import StaticMap from "./StaticMap";

export default function LocationSection() {
  const handleDirectionsClick = () => {
    const address = "Quadra 402 Conjunto 10 Lote 02, Recanto das Emas, Brasília DF";
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(mapsUrl, '_blank');
  };

  const handleContactClick = () => {
    const whatsappUrl = "https://api.whatsapp.com/send/?phone=5561992532859&text=Ol%C3%A1%21+Gostaria+de+solicitar+um+or%C3%A7amento+para+sistemas+de+combate+a+inc%C3%AAndio.&type=phone_number&app_absent=0";
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="localizacao" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <MapPin className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium text-primary">Nossa Localização</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Visite Nosso
            <span className="block text-primary">Escritório</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos localizados no Recanto das Emas, Brasília DF. 
            Nossa equipe está pronta para atendê-lo e desenvolver a melhor solução para seu patrimônio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Google Maps */}
          <div className="space-y-6">
            <StaticMap className="shadow-strong" />
            
            <Card className="p-6 bg-gradient-primary text-primary-foreground shadow-strong">
              <h3 className="text-xl font-bold mb-4">Atendimento Personalizado</h3>
              <p className="mb-4 opacity-90">
                Agende uma visita ao nosso escritório para conhecer melhor nossos serviços e receber um atendimento personalizado.
              </p>
              <Button 
                variant="secondary"
                onClick={handleContactClick}
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Agendar Visita
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            
            {/* Address Card */}
            <Card className="p-6 border-primary/20 hover:shadow-soft transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Endereço</h3>
                  <p className="text-muted-foreground">
                    Quadra 402 Conjunto 10 Lote 02<br />
                    Recanto das Emas<br />
                    Brasília - DF
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="mt-3 border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={handleDirectionsClick}
                  >
                    Como Chegar
                  </Button>
                </div>
              </div>
            </Card>

            {/* Business Hours Card */}
            <Card className="p-6 border-primary/20 hover:shadow-soft transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Horário de Atendimento</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Segunda a Sexta:</span>
                      <span className="font-medium">08:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sábado:</span>
                      <span className="font-medium">08:00 - 12:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Domingo:</span>
                      <span className="font-medium text-primary">Fechado</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Contact Card */}
            <Card className="p-6 border-primary/20 hover:shadow-soft transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Contato Direto</h3>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">
                      <span className="font-medium">Telefone:</span> +55 (61) 99253-2859
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium">E-mail:</span> gcsistemas5@gmail.com
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium">Instagram:</span> @Gi.system
                    </p>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="mt-3 border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={handleContactClick}
                  >
                    Entrar em Contato
                  </Button>
                </div>
              </div>
            </Card>

            {/* Service Area */}
            <Card className="p-6 bg-secondary text-secondary-foreground shadow-strong">
              <h3 className="text-lg font-bold mb-3">Área de Atendimento</h3>
              <p className="mb-3">
                Atendemos Brasília DF e toda região metropolitana com nossa equipe técnica especializada.
              </p>
              <div className="text-sm opacity-90">
                <p>✓ Brasília DF</p>
                <p>✓ Entorno e Região Metropolitana</p>
                <p>✓ Atendimento emergencial 24h</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
