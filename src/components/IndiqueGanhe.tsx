import { Button } from "@/components/ui/button";
import { SiWhatsapp } from "react-icons/si";
import Logo from "@/assets/pnet-transparente.png";
import OverlayImage from "@/assets/IndiqueGanhe2.png";
import Fundo from "@/assets/fundo.png";

const IndiqueGanhe = () => {
    return (
        <section
            id="indique-ganhe"
            className="relative min-h-screen overflow-hidden flex items-center justify-center px-4 bg-white">

            <div
                className="absolute inset-0 bg-no-repeat bg-[length:140%_60%] bg-[center_top] lg:hidden"
                style={{ backgroundImage: `url(${Fundo})` }}
            />

            <img
                src={Logo}
                alt="Logo de fundo"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain opacity-100"
                style={{ height: '85%', maxWidth: '600px', zIndex: 0 }}
            />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-6 h-full w-full lg:justify-between lg:text-left lg:gap-12">

                <img
                    src={OverlayImage}
                    alt="Decorativa"
                    className="w-60 md:w-96 lg:w-1/2 h-full object-cover mb-0"
                />

                <div className="flex flex-col items-center lg:items-start lg:max-w-[50%]">
                    <h1 className="text-lg text-blue-800 mb-6 lg:text-[4.3rem] lg:mb-16 lg:leading-snug lg:text-center lg:-left-[15%] lg:relative font-bold">INDIQUE & GANHE</h1>
                    <p className="text-lg text-blue-800 mb-6 lg:text-[2.5rem] lg:mb-16 lg:leading-snug lg:text-center lg:-left-[8%] lg:relative">
                        Ganhe até <strong>1 mês de internet <br />grátis</strong> por indicação.
                    </p>
                    <Button
                        size="lg"
                        asChild
                        className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 lg:py-8 lg:px-12 rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 lg:text-[1.2rem] lg:relative lg:left-[12%]"
                    >
                        <a
                            href="#contato"
                            rel="noopener noreferrer"
                        >
                            {/* <SiWhatsapp className="w-6 h-6" /> */}
                            Mais informações
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default IndiqueGanhe;
