import { Button } from "@/components/ui/button";
import { SiWhatsapp } from "react-icons/si";
import Logo from "@/assets/pnet-transparente.png";
import OverlayImage from "@/assets/IndiqueGanhe.png";

const IndiqueGanhe = () => {
    return (
        <section className="relative min-h-screen bg-blue-800 overflow-hidden flex items-center justify-center px-4">

            <img
                src={Logo}
                alt="Logo de fundo"
                className="absolute inset-0 w-full object-cover opacity-100"
                style={{ height: '85%', zIndex: 0 }}
            />


            <div className="relative z-10 flex flex-col items-center">
                <img
                    src={OverlayImage}
                    alt="Decorativa"
                    className="w-60 md:w-96"
                />
                <h1 className="text-white text-7xl md:text-6xl font-bold text-center -mt-16 md:-mt-2 leading-tight">
                    <strong>Indique <br />
                        <span className="text-4xl md:text-2xl relative -top-10 md:-top-4">&</span>
                        <span className="relative -top-6 md:-top-4">Ganhe</span></strong>
                </h1>


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

export default IndiqueGanhe;