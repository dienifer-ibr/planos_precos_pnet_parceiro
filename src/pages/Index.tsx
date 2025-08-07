import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TechSection from "@/components/TechSection";
import ERPSection from "@/components/ERPSection";
import DevicesSection from "@/components/DevicesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TechSection />
        <ERPSection />
        <DevicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
