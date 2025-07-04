import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowRight } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Maria Silva",
      company: "Patrimônio Industrial ABC",
      role: "Gerente de Segurança",
      content: "A Gi System foi fundamental para adequarmos nosso patrimônio às normas de segurança. Profissionais competentes e serviço de excelente qualidade.",
      rating: 5
    },
    {
      name: "João Santos",
      company: "Condomínio Residencial XYZ",
      role: "Síndico",
      content: "Trabalho impecável na instalação do sistema de alarme de incêndio. Equipe pontual, organizada e muito profissional. Recomendo!",
      rating: 5
    },
    {
      name: "Ana Costa",
      company: "Clínica Médica Saúde+",
      role: "Diretora Administrativa",
      content: "Excelente atendimento desde o primeiro contato. A manutenção preventiva que fazem é muito confiável. Nossa clínica está sempre protegida.",
      rating: 5
    }
  ];

  const handleContactClick = () => {
    const phone = "5561993368116";
    const message = "Olá! Vi os depoimentos de seus clientes e gostaria de solicitar um orçamento.";
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index} 
        className={`w-4 h-4 ${index < rating ? 'text-primary fill-current' : 'text-muted-foreground'}`} 
      />
    ));
  };

  return (
    <section id="depoimentos" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Star className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium text-primary">Depoimentos</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            O que nossos 
            <span className="text-primary"> clientes dizem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A satisfação dos nossos clientes é nossa maior recompensa. 
            Veja o que patrimônios de Brasília e região falam sobre nossos serviços.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 relative hover:shadow-strong transition-all duration-300 border-border hover:border-primary/30">
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-20">
                <Quote className="w-8 h-8 text-primary" />
              </div>
              
              <div className="space-y-4">
                {/* Rating */}
                <div className="flex space-x-1">
                  {renderStars(testimonial.rating)}
                </div>
                
                {/* Content */}
                <p className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                {/* Author Info */}
                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-primary font-medium">{testimonial.role}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 text-center border-primary/20">
            <div className="text-2xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Satisfação dos Clientes</div>
          </Card>
          
          <Card className="p-6 text-center border-primary/20">
            <div className="text-2xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Anos de Experiência</div>
          </Card>
          
          <Card className="p-6 text-center border-primary/20">
            <div className="text-2xl font-bold text-primary mb-2">24h</div>
            <div className="text-sm text-muted-foreground">Suporte Técnico</div>
          </Card>
          
          <Card className="p-6 text-center border-primary/20">
            <div className="text-2xl font-bold text-primary mb-2">0</div>
            <div className="text-sm text-muted-foreground">Reclamações</div>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="inline-block p-8 bg-gradient-subtle border-primary/20 shadow-soft">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Seja Nosso Próximo Cliente Satisfeito
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Junte-se a centenas de patrimônios que confiam na Gi System para sua proteção contra incêndio. 
              Solicite seu orçamento e comprove nossa qualidade.
            </p>
            <Button 
              onClick={handleContactClick}
              className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold shadow-soft"
            >
              Solicitar Orçamento Gratuito
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}