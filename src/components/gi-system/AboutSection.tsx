
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Users, Target, TrendingUp, ArrowRight } from "lucide-react";

export default function AboutSection() {
  const handleContactClick = () => {
    const whatsappUrl = "https://api.whatsapp.com/send/?phone=5561992532859&text=Ol%C3%A1%21+Gostaria+de+solicitar+um+or%C3%A7amento+para+sistemas+de+combate+a+inc%C3%AAndio.&type=phone_number&app_absent=0";
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="sobre" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Shield className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium text-primary">Sobre a Gi System</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Referência em 
            <span className="text-primary"> Proteção Contra Incêndio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Há mais de 15 anos no mercado, somos especialistas em sistemas de combate a incêndio, 
            oferecendo soluções completas e personalizadas para patrimônios em Brasília DF.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Nossa Missão é Proteger Seu Patrimônio
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Na Gi System LTDA, entendemos que a segurança contra incêndio não é apenas uma obrigação legal, 
                mas uma responsabilidade com vidas e patrimônio. Por isso, oferecemos soluções técnicas de alta qualidade, 
                sempre em conformidade com as normas vigentes.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nossa equipe técnica especializada trabalha desde o projeto até a manutenção preventiva, 
                garantindo que seus sistemas estejam sempre prontos para proteger o que mais importa.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-foreground">Nossos Diferenciais:</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Mais de 15 anos de experiência no mercado</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Equipe técnica especializada e certificada</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Target className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Atendimento personalizado e focado na sua necessidade</span>
                </li>
                <li className="flex items-start space-x-3">
                  <TrendingUp className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Compromisso com a qualidade e satisfação do cliente</span>
                </li>
              </ul>
            </div>

            <Button 
              onClick={handleContactClick}
              className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold shadow-soft"
            >
              Fale Conosco
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="p-6 text-center bg-gradient-primary text-primary-foreground shadow-strong">
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-sm">Anos de Mercado</div>
            </Card>
            
            <Card className="p-6 text-center border-primary/20 hover:shadow-soft transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Projetos Executados</div>
            </Card>
            
            <Card className="p-6 text-center border-primary/20 hover:shadow-soft transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-2">24h</div>
              <div className="text-sm text-muted-foreground">Suporte Técnico</div>
            </Card>
            
            <Card className="p-6 text-center bg-secondary text-secondary-foreground shadow-strong">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-sm">Conformidade Legal</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
