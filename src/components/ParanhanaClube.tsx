import { Button } from "@/components/ui/button";
import { SiWhatsapp } from "react-icons/si";
import LogoFundo from "@/assets/pnet-transparente.png";
import CllParanhanaClube from "@/assets/CllParnhanaClube.png";
import LogoParanhanaClube from "@/assets/LogoParanhanaClube.png";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const ParanhanaClube = () => {
  return (
    <section
      id="paranhanaclube"
      className="min-h-screen bg-gradient-purple relative flex items-center justify-center px-4 py-16 overflow-visible"
    >
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 lg:top-5">
        <img src={LogoParanhanaClube} alt="ParanhanaNet" className="w-60 lg:w-96 max-w-full" />
      </div>

      <img
        src={LogoFundo}
        alt="Logo de fundo"
        className="absolute inset-0 w-full object-cover opacity-100 lg:top-[15%] lg:left-[12%]"
        style={{ height: "90%", maxWidth: "600px", zIndex: 0 }}
      />

      <div className="relative z-40 flex flex-col items-center lg:grid lg:grid-cols-2 lg:gap-10 lg:max-w-6xl lg:mx-auto lg:items-center">
        <div className="flex justify-center lg:justify-end">
          <img
            src={CllParanhanaClube}
            alt="Decorativa"
            className="w-64 md:w-96 relative -top-4 md:-top-16 right-20 lg:w-[60%] lg:relative lg:top-0 lg:right-[20%] max-w-full"
          />
        </div>

        <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:absolute lg:top-1/2 lg:translate-y-[-50%]">
          <h1
            className="
              text-white text-5xl md:text-6xl font-semibold
              text-end md:text-left
              -mb-24 md:mb-6 leading-tight
              relative -top-36 left-14 md:static
              lg:mt-8 lg:top-0 lg:ml-[120%] lg:translate-x-4 lg:text-center
            "
          >
            Vantagens <br />
            <span className="text-6xl md:text-7xl font-bold">Exclusivas</span>
          </h1>

          <p className="text-white text-initial mb-5 text-xl px-8 relative lg:px-0 lg:relative lg:left-[100%] lg:top-4 lg:text-lg">
            Até <strong>50% de descontos</strong> em <strong>lojas online</strong> e <strong>estabelecimentos</strong> da região
          </p>

          <div className="relative bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-8 mt-16 lg:relative lg:bottom-0 lg:left-[100%] lg:transform-none">
            <span className="text-white text-sm font-semibold whitespace-nowrap lg:text-lg">Baixe o APP</span>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <FaGooglePlay className="w-10 h-4 text-white lg:w-12 lg:h-6" />
                <span className="text-white text-xs lg:text-sm">Disponível na Google Play</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaApple className="w-8 h-10 text-white lg:w-10 lg:h-8" />
                <span className="text-white text-xs lg:text-sm">Disponível na App Store</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParanhanaClube;
