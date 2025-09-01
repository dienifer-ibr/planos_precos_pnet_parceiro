import mockupImage from "@/assets/mockup-plataforma.png";
import carousel1 from "@/assets/carousel-1.png";
import carousel2 from "@/assets/carousel-2.png";
import carousel3 from "@/assets/carousel-3.png";
import carousel4 from "@/assets/carousel-4.png";
import logo from "@/assets/logo.png";

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
      style={{ backgroundImage: `url(${mockupImage})` }}
    >
      {/* Camada azul escura transparente */}
      <div className="absolute inset-0 bg-blue-700/80" />

      {/* Logo centralizada no topo */}
      <div className="relative z-10 w-full flex justify-center pt-20">
        <img src={logo} alt="ParanhanaNet" className="w-48 lg:w-60" />
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 flex-1 flex items-center w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Texto */}
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
                A <strong>mais veloz do Vale do Paranhana</strong> <br />
                <strong>entre as 3 melhores do estado do RS 🏆</strong>
              </p>
            </div>
          </div>

          {/* Premiações */}
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