import { Button } from "@/components/ui/button";
import { SiWhatsapp } from "react-icons/si";
import LogoFundo from "@/assets/pnet-transparente.png";
import CllParanhanaClube from "@/assets/CllParnhanaClube.png";
import LogoParanhanaClube from "@/assets/LogoParanhanaClube.png";
const ParanhanaClube = () => {
  return (
    <section className="min-h-screen bg-gradient-purple relative overflow-hidden flex items-center justify-center px-4 py-16">
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
        <img src={LogoParanhanaClube} alt="ParanhanaNet" className="w-56 lg:w-68" />
      </div>

      <img
        src={LogoFundo}
        alt="Logo de fundo"
        className="absolute inset-0 w-full object-cover opacity-100"
        style={{ height: '85%', zIndex: 0 }}
      />

      <div className="relative z-10 flex flex-col items-center">
        <img
          src={CllParanhanaClube}
          alt="Decorativa"
          className="w-60 md:w-96 relative left-[-20%] mt-20"
        />
        <h1 className="text-white text-4xl md:text-6xl font-bold text-end md:-mt-0 leading-tight relative right-[-20%] mb-10">
          Vantagens <br />
          <span className=" -top-4 md:-top-4 text-5xl md:text-6xl">Exclusivas</span>
        </h1>

        <p className="text-white text-center">
          Até 50% de descontos em lojas online e estabelecimento da região.
        </p>

        <Button
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full mt-6 flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <SiWhatsapp className="w-6 h-6" />
          Mais informações
        </Button>
      </div>
    </section>

  );
};

export default ParanhanaClube;