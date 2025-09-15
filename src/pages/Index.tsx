import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import TechSection from "@/components/TechSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import ParanhanaClube from "@/components/ParanhanaClube";
import ParanhanaPlay from "@/components/ParanhanaPlay";
import Depoimentos from "@/components/Depoimentos";
import ParanhanaLivros from "@/components/ParanhanaLivros";
import ParanhanaRevistas from "@/components/ParanhanaRevistas";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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

        <Swiper
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          mousewheel
          keyboard
          className="w-full h-screen text-white custom-swiper"
        >
          <SwiperSlide>
            <ParanhanaClube />
          </SwiperSlide>
          <SwiperSlide>
            <ParanhanaLivros />
          </SwiperSlide>
          <SwiperSlide>
            <ParanhanaRevistas />
          </SwiperSlide>
        </Swiper>

        <Swiper
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          mousewheel
          keyboard
          className="w-full h-screen text-white custom-swiper"
        >
          <SwiperSlide>
            <ParanhanaPlay />
          </SwiperSlide>
          <SwiperSlide>
            <Watch />
          </SwiperSlide>
        </Swiper>
        
        <IndiqueGanhe />
        <Depoimentos />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
