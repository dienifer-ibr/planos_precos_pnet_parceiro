import parobe from "@/assets/parobe.png";
import carousel1 from "@/assets/carousel-1.png";
import carousel2 from "@/assets/carousel-2.png";
import carousel3 from "@/assets/carousel-3.png";
import carousel4 from "@/assets/carousel-4.png";
import logo from "@/assets/logo-simples.png";
import premio from "@/assets/premio.png";
import cidades from "@/assets/cidade.png";

const HeroSection = () => {
  const awardImages = [
    { src: carousel1, alt: "Prêmio - Melhor Provedor" },
    { src: carousel2, alt: "Prêmio - Melhor Velocidade" },
    { src: carousel3, alt: "Prêmio - Maior Satisfação" },
    { src: carousel4, alt: "Prêmio - Melhor Internet Gamer" },
  ];

  return (
    <section id="herosection"
      className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${parobe})` }}
    >
      <div className="absolute inset-0 bg-blue-800/80" />

      <div className="relative z-10 w-full flex justify-center pt-20">
        <img src={logo} alt="ParanhanaNet" className="w-56 lg:w-68" />
      </div>

      <div className="relative z-10 flex-1 flex items-center w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 gap-12 items-center w-full">
          <div className="flex flex-col items-center text-center text-white space-y-8 -mt-16">
            <div className="opacity-90">
              <img src={premio} alt="prêmio" className="w-68 mb-12 lg:w-72 lg:relative lg:left-36" />
              <h2 className="lg:text-[30px]">
                <strong>A MAIS VELOZ DO VALE DO PARANHANA</strong>
              </h2>
              <p className="text-[10px] leading-none mt-2 lg:text-[25px]">
                ENTRE AS 3 MELHORES DO ESTADO DO RS
              </p>
            </div>
          </div>

          <div className="flex flex-col items-end space-y-6 lg:grid lg:grid-cols-2 lg:gap-6 lg:items-center lg:space-y-0 lg:relative lg:-right-[5%]">
            {awardImages.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className="w-56 lg:w-60 rounded-2xl object-contain"
              />
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
    @media (min-width: 1024px) {
      #herosection {
        background-image: url(${cidades}) !important;
      }
    }
  `}
      </style>
    </section>
  );
};

export default HeroSection;
