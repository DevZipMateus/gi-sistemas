import Navigation from "@/components/gi-system/Navigation";
import HeroSection from "@/components/gi-system/HeroSection";
import AboutSection from "@/components/gi-system/AboutSection";
import ServicesSection from "@/components/gi-system/ServicesSection";
import TestimonialsSection from "@/components/gi-system/TestimonialsSection";
import LocationSection from "@/components/gi-system/LocationSection";
import ContactSection from "@/components/gi-system/ContactSection";
import WhatsAppButton from "@/components/gi-system/WhatsAppButton";

const GiSystemIndex = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <LocationSection />
        <ContactSection />
      </main>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default GiSystemIndex;