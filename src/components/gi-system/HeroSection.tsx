import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Clock, Award, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const backgroundImages = [
    "/lovable-uploads/f2d0efb7-18bd-4098-88d4-0684857cdd93.png",
    "/lovable-uploads/97a2b03e-62c8-4d57-9b68-6eec4a6bccf9.png", 
    "/lovable-uploads/05fab6a7-3064-43a3-a6fd-8cbfc1705910.png"
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);
  const handleContactClick = () => {
    const phone = "5561993368116";
    const message = "Olá! Gostaria de solicitar um orçamento para sistemas de combate a incêndio.";
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToServices = () => {
    const element = document.getElementById('servicos');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="inicio" className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center">
      {/* Background Images with Rotation */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
        {/* Orange gradient overlay to match brand */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
      </div>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-primary-foreground rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-primary-foreground rounded-lg rotate-45"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 border-2 border-primary-foreground rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-primary-foreground rounded-lg rotate-12"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-foreground/20 backdrop-blur-sm border border-primary-foreground/30">
            <Shield className="w-4 h-4 mr-2 text-primary-foreground" />
            <span className="text-sm font-medium text-primary-foreground">Mais de 13 anos de experiência</span>
          </div>
          
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
              Proteção e 
              <span className="block text-accent">Segurança</span>
              para seu negócio
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed">
              Somos referência em sistemas de combate a incêndio em Brasília DF. 
              Oferecemos soluções completas para manter sua empresa protegida e em conformidade.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={handleContactClick} 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold shadow-strong"
            >
              Solicitar Orçamento Gratuito
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              onClick={scrollToServices}
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              Conheça Nossos Serviços
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 p-6 text-center">
              <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">Segurança Certificada</h3>
              <p className="text-primary-foreground/80">Todos os nossos sistemas seguem rigorosamente as normas de segurança</p>
            </Card>
            
            <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 p-6 text-center">
              <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">13+ Anos de Experiência</h3>
              <p className="text-primary-foreground/80">Mais de uma década protegendo empresas em Brasília e região</p>
            </Card>
            
            <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 p-6 text-center">
              <Award className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">Qualidade Garantida</h3>
              <p className="text-primary-foreground/80">Instalação, manutenção e treinamento com excelência comprovada</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}