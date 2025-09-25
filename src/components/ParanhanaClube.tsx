import { Button } from "@/components/ui/button";
import { SiWhatsapp } from "react-icons/si";
import LogoFundo from "@/assets/pnet-transparente.png";
import CllParanhanaClube from "@/assets/CllParnhanaClube.png";
import LogoParanhanaClube from "@/assets/LogoParanhanaClube.png";
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const ParanhanaClube = () => {
  return (
    <section id="paranhanaclube" className="min-h-screen bg-gradient-purple relative overflow-hidden flex items-center justify-center px-4 py-16">
      <div className="absolute top-20 lg:top-5 left-1/2 transform -translate-x-1/2">
        <img src={LogoParanhanaClube} alt="ParanhanaNet" className="w-60 lg:w-96" />
      </div>

      <img
        src={LogoFundo}
        alt="Logo de fundo"
        className="absolute inset-0 w-full object-cover opacity-100 lg:top-[50px] lg:left-[150px]"
        style={{ height: '90%', maxWidth: '600px', zIndex: 0 }}
      />

      <div className="relative z-10 flex flex-col items-center">
        <img
          src={CllParanhanaClube}
          alt="Decorativa"
          className="w-64 md:w-96 relative -top-4 md:-top-16 right-20 lg:w-[400px] lg:right-96 lg:top-2"
        />
        <h1 className="text-white text-5xl md:text-6xl font-semibold text-end -mb-24 md:mb-6 leading-tight relative -top-36 left-14 lg:left-80 lg:-mb-8 lg:-top-[450px]">
          Vantagens <br />
          <span className="text-6xl md:text-6xl font-bold">Exclusivas</span>
        </h1>
        <p className="text-white text-initial mb-5 text-xl px-8 relative lg:left-96 lg:-top-[380px]">
          Até <strong>50% de descontos</strong> em <strong>lojas online</strong> e <strong>estabelecimentos</strong> da região
        </p>

        <div className="relative bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-8 mt-16 lg:-top-16">
          <span className="text-white text-sm font-semibold whitespace-nowrap lg:text-lg">Baixe o APP</span>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <FaGooglePlay className="w-10 h-4 text-white lg:w-12 lg:h-6" />
              <span className="text-white text-xs">Disponível na Google Play</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaApple className="w-8 h-10 text-white lg:w-10 lg:h-8" />
              <span className="text-white text-xs">Disponível na App Store</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParanhanaClube;