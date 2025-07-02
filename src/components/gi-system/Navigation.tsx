import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isInHeroSection, setIsInHeroSection] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Check if we're in the hero section
      const heroSection = document.getElementById('inicio');
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        setIsInHeroSection(heroRect.bottom > 100); // Consider in hero if section bottom is still visible
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  const handleContactClick = () => {
    const phone = "5561993368116";
    const message = "Olá! Gostaria de solicitar um orçamento para sistemas de combate a incêndio.";
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-soft' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/bcc36ae3-ba59-4d9b-b859-6d4ef8984711.png" 
              alt="Gi System LTDA Logo" 
              className="h-8 w-auto"
            />
            <div className="hidden sm:block">
              <h1 className={`text-xl font-bold transition-colors ${isInHeroSection ? 'text-white' : 'text-foreground'}`}>Gi System</h1>
              <p className={`text-xs transition-colors ${isInHeroSection ? 'text-white/70' : 'text-muted-foreground'}`}>Combate a Incêndio</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')} 
              className={`transition-colors font-medium ${isInHeroSection ? 'text-white hover:text-white/80' : 'text-foreground hover:text-primary'}`}
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('sobre')} 
              className={`transition-colors font-medium ${isInHeroSection ? 'text-white hover:text-white/80' : 'text-foreground hover:text-primary'}`}
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('servicos')} 
              className={`transition-colors font-medium ${isInHeroSection ? 'text-white hover:text-white/80' : 'text-foreground hover:text-primary'}`}
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('depoimentos')} 
              className={`transition-colors font-medium ${isInHeroSection ? 'text-white hover:text-white/80' : 'text-foreground hover:text-primary'}`}
            >
              Depoimentos
            </button>
            <button 
              onClick={() => scrollToSection('localizacao')} 
              className={`transition-colors font-medium ${isInHeroSection ? 'text-white hover:text-white/80' : 'text-foreground hover:text-primary'}`}
            >
              Localização
            </button>
            <button 
              onClick={() => scrollToSection('contato')} 
              className={`transition-colors font-medium ${isInHeroSection ? 'text-white hover:text-white/80' : 'text-foreground hover:text-primary'}`}
            >
              Contato
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={handleContactClick} 
              className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold shadow-soft"
            >
              Solicitar Orçamento
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className={`md:hidden transition-colors ${isInHeroSection ? 'text-white' : 'text-foreground'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-card/95 backdrop-blur-md rounded-lg border border-border p-4 shadow-strong">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')} 
                className="text-foreground hover:text-primary transition-colors text-left font-medium"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')} 
                className="text-foreground hover:text-primary transition-colors text-left font-medium"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('servicos')} 
                className="text-foreground hover:text-primary transition-colors text-left font-medium"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('depoimentos')} 
                className="text-foreground hover:text-primary transition-colors text-left font-medium"
              >
                Depoimentos
              </button>
              <button 
                onClick={() => scrollToSection('localizacao')} 
                className="text-foreground hover:text-primary transition-colors text-left font-medium"
              >
                Localização
              </button>
              <button 
                onClick={() => scrollToSection('contato')} 
                className="text-foreground hover:text-primary transition-colors text-left font-medium"
              >
                Contato
              </button>
              <Button 
                onClick={handleContactClick} 
                className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold mt-4"
              >
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}