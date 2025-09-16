import { Button } from "@/components/ui/button";
import { SiWhatsapp } from "react-icons/si";
import Logo from "@/assets/pnet-transparente.png";
import OverlayImage from "@/assets/indique_ganhe.png";
import Fundo from "@/assets/fundo.png";

const IndiqueGanhe = () => {
    return (
        <section
            id="indique-ganhe"
            className="
    relative min-h-screen overflow-hidden flex items-center justify-center px-4
    bg-[length:140%_60%] bg-[center_top] bg-no-repeat
    lg:bg-[length:40%_60%] lg:bg-[left_top] lg:bg-repeat-y
  "
            style={{ backgroundImage: `url(${Fundo})` }}
        >

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
                    className="w-96 md:w-96 lg:relative mt-20 lg:mt-20"
                />
                <p className="text-lg text-muted-foreground text-blue-800 text-center">
                    Ganhe até <strong>1 mês de internet <br />grátis </strong>por indicação.
                </p>
                <Button
                    size="lg"
                    asChild
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full mt-16 flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
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