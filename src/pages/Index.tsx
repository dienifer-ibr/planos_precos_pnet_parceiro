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
import Formulario from '@/components/Formulario';
import PricingSectionMobile from "@/components/PricingSectionMobile";

const Index = () => {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <TechSection />
        <PricingSection />
        <PricingSectionMobile />
        <Swiper
          modules={[Navigation, Pagination, Keyboard]}
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
          modules={[Navigation, Pagination, Keyboard]}
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
        <Formulario />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
