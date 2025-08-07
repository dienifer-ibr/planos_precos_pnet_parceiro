import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import mockupImage from "@/assets/mockup-plataforma.png";
import carousel1 from "@/assets/carousel-1.png";
import carousel2 from "@/assets/carousel-2.png";
import carousel3 from "@/assets/carousel-3.png";

const HeroSection = () => {
  const plugin = useRef(
    Autoplay({ delay: 2500, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  const carouselImages = [
    {
      src: carousel1,
      alt: "Interface da plataforma de streaming Watch"
    },
    {
      src: carousel2,
      alt: "Dashboard de analytics da Watch"
    },
    {
      src: carousel3,
      alt: "App móvel da Watch"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-watch-orange via-watch-blue to-watch-gold opacity-90" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                ParanhanaNet
              </h1>
              <h2 className="text-2xl lg:text-3xl font-light opacity-90">
                Internet de Verdade
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-relaxed opacity-90">
              <p>
                A <strong> mais veloz do Vale do Paranhana</strong> e <strong>entre as 3 melhores do estado do RS🏆</strong>
              </p>
            </div>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div className="relative z-10">
              <Carousel
                plugins={[plugin.current]}
                className="w-full"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
              >
                <CarouselContent>
                  {carouselImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative">
                        <img 
                          src={image.src} 
                          alt={image.alt} 
                          className="w-full h-auto rounded-lg shadow-2xl object-cover aspect-video"
                        />
                        {/* Overlay gradient for better text contrast */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
            
            {/* Decorative circles */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute -top-8 -right-8 w-32 h-32 border-2 border-white/30 rounded-full" />
              <div className="absolute top-1/2 -left-12 w-24 h-24 border-2 border-white/20 rounded-full" />
              <div className="absolute -bottom-6 right-1/4 w-20 h-20 border-2 border-white/25 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;