import parobe from "@/assets/parobe.jpg";
import carousel1 from "@/assets/carousel-1.png";
import carousel2 from "@/assets/carousel-2.png";
import carousel3 from "@/assets/carousel-3.png";
import carousel4 from "@/assets/carousel-4.png";
import logo from "@/assets/logo-branca.png";

const HeroSection = () => {
  const awardImages = [
    { src: carousel1, alt: "Prêmio - Maior Satisfação" },
    { src: carousel2, alt: "Prêmio - Melhor Provedor" },
    { src: carousel3, alt: "Prêmio - Melhor Internet Gamer" },
    { src: carousel4, alt: "Prêmio - Melhor Velocidade" },
  ];

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${parobe})` }}
    >
      <div className="absolute inset-0 bg-blue-700/80" />

      <div className="relative z-10 w-full flex justify-center pt-20">
        <img src={logo} alt="ParanhanaNet" className="w-56 lg:w-68" />
      </div>

      <div className="relative z-10 flex-1 flex items-center w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="text-white space-y-8">

            <div className="space-y-6 text-lg leading-relaxed opacity-90">
              <p>
                A <strong>MAIS VELOZ DO PARANHANA</strong> <br />
                <strong>ENTRE AS 3 MELHORES DO ESTADO DO RS</strong>
              </p>
            </div>
          </div>

          <div className="flex flex-col items-end space-y-6">
            {awardImages.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className="w-56 lg:w-64 rounded-2xl shadow-lg object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;