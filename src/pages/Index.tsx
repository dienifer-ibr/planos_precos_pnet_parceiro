import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import TechSection from "@/components/TechSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import ParanhanaClube from "@/components/ParanhanaClube";
import ParanhanaPlay from "@/components/ParanhanaPlay";
import Depoimentos from "@/components/Depoimentos";
import ParanhanaLivrosRevistas from "@/components/ParanhanaRevistas";
import Watch from "@/components/Watch";
import IndiqueGanhe from "@/components/IndiqueGanhe";

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
        <Watch />
        <ParanhanaLivrosRevistas />
        <IndiqueGanhe />
        <Depoimentos />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
