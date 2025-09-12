import { Button } from "@/components/ui/button";
import { SiWhatsapp } from "react-icons/si";
import Logo from "@/assets/pnet-transparente.png";
import OverlayImage from "@/assets/IndiqueGanhe.png";

const IndiqueGanhe = () => {
    return (
        <section className="relative min-h-screen bg-blue-800 overflow-hidden flex items-center justify-center px-4">

            {/* Imagem de fundo centralizada */}
            <img
                src={Logo}
                alt="Logo de fundo"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain opacity-100"
                style={{ height: '85%', maxWidth: '600px', zIndex: 0 }}
            />

            <div className="relative z-10 flex flex-col items-center mb-24">
                <img
                    src={OverlayImage}
                    alt="Decorativa"
                    className="w-60 md:w-96 lg:relative lg:mt-20"
                />
                <h1 className="text-white text-7xl md:text-6xl font-bold text-center -mt-16 md:-mt-2 leading-tight lg:relative lg:-top-16 lg:text-[7rem] text-shadow-blue">
                    <strong>
                        Indique <br />
                        <span className="text-4xl md:text-2xl relative -top-10 md:-top-4">&</span>
                        <span className="relative -top-6 md:-top-4">Ganhe</span>
                    </strong>
                </h1>

                <Button
                    size="lg"
                    asChild
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full mt-6 flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                    <a
                        href="https://api.whatsapp.com/send/?phone=555135431099&text=Olá, gostaria de mais informações sobre a campanha Indique e Ganhe."
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SiWhatsapp className="w-6 h-6" />
                        Mais informações
                    </a>
                </Button>

            </div>
        </section>
    );
};

export default IndiqueGanhe;