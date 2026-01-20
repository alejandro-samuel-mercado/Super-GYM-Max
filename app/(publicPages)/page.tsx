import AboutSection from "@/sections/AboutSection";
import ContactSection from "@/sections/ContactSection";
import CTASection from "@/sections/CTASection";
import Empresas from "@/sections/Empresas";
import FeaturesSection from "@/sections/FeaturesSection";
import HeroSection from "@/sections/HeroSection";
import PricingSection from "@/sections/PricingSection";
import TestimonialSection from "@/sections/TestimonialSection";
export default function Page() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <TestimonialSection />
      <PricingSection />
      <Empresas />
      <AboutSection />
      <ContactSection />
      <CTASection />
    </>
  );
}
