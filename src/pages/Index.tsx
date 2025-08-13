import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import TechSection from "@/components/TechSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import ParanhanaClube from "@/components/ParanhanaClube";
import ParanhanaPlay from "@/components/ParanhanaPlay";
import Depoimentos from "@/components/Depoimentos";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/*<Header />*/}
      <main>
        <HeroSection />
        <TechSection />
        <PricingSection />
        <ParanhanaClube />
        <ParanhanaPlay />
        <Depoimentos />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
