import React from "react";
import ControleWatch from "@/assets/controle-watch.png";
import FilmesPipocas from "@/assets/filmes-pipocas.png";
import LogoWatch from "@/assets/logoWatch2.png";
import LogoParamount from "@/assets/logoParamount.png";
import WatchDesktop from "@/assets/watchDesktop.png";

const Watch: React.FC = () => {
    return (
        <section
            className="relative w-full min-h-screen bg-cover bg-center lg:bg-contain"
            style={{
                backgroundImage: `url(${ControleWatch})`,
            }}
        >
            <div
                className="absolute inset-0 hidden lg:block"
                style={{
                    backgroundImage: `url(${WatchDesktop})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "auto",
                }}
                aria-hidden="true"
            />

            <div className="absolute inset-0 bg-blue-500 bg-opacity-80"></div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 py-8 gap-6 
                            lg:flex-row lg:items-center lg:justify-between lg:px-20 lg:text-left">
                <div
                    className="
    max-w-xl w-full 
    relative -left-20 top-40
        lg:flex lg:flex-col lg:items-start lg:justify-center lg:gap-2 lg:h-screen lg:left-1/4 lg:top-0
  "
                >
                    <img
                        src={LogoWatch}
                        alt="Logo Watch"
                        className="relative top-4 left-[50%] transform -translate-x-1/2 w-2/4 max-w-xs lg:static lg:w-72 lg:max-w-none"
                    />
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-0 lg:text-7xl lg:mt-2">
                        +
                    </h2>
                    <img
                        src={LogoParamount}
                        alt="Logo Paramount"
                        className="relative -top-4 left-[50%] transform -translate-x-1/2 w-2/4 max-w-xs lg:static lg:w-72 lg:max-w-none"
                    />
                </div>


                <div className="w-full max-w-3xl relative 
                                lg:flex lg:flex-col lg:items-center lg:justify-center">
                    <img
                        src={FilmesPipocas}
                        alt="Filmes e pipocas"
                        className="absolute w-full h-auto object-contain mb-0
                                   lg:static lg:w-[500px]"
                    />

                    <p className="mt-96 mb-20 text-base sm:text-lg md:text-xl lg:text-2xl px-4 md:px-6 text-center 
                                  lg:-mt-48 lg:mb-4 lg:px-0 lg:text-left">
                        Acesse quando e onde estiver, Canais de tv aberta, Séries e Filmes
                    </p>
                    <p className="mt-1 text-sm sm:text-base md:text-lg text-center 
                                  lg:text-left lg:mt-0">
                        *incluso nos planos premium
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Watch;