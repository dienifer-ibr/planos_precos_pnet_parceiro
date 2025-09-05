import React from "react";
import ControleWatch from "@/assets/controle-watch.png";
import FilmesPipocas from "@/assets/filmes-pipocas.png";
import LogoWatch from "@/assets/logoWatch2.png";
import LogoParamount from "@/assets/logoParamount.png";
const Watch: React.FC = () => {
    return (
        <section
            className="relative w-full min-h-screen bg-cover bg-center"
            style={{
                backgroundImage: `url(${ControleWatch})`,
            }}
        >
            <div className="absolute inset-0 bg-blue-500 bg-opacity-80"></div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 py-8 gap-6">
                <div className="max-w-xl w-full relative left-[-20%] top-48">
                    <img
                        src={LogoWatch}
                        alt="Logo Watch"
                        className="relative top-4 left-[50%] transform -translate-x-1/2 w-2/4 max-w-xs"
                    />
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tightmb-0 ">
                        +
                    </h2>
                    <img
                        src={LogoParamount}
                        alt="Logo Paramount"
                        className="relative -top-4 left-[50%] transform -translate-x-1/2 w-2/4 max-w-xs"
                    />
                </div>

                <div className="w-full max-w-3xl relative">
                    <img
                        src={FilmesPipocas}
                        alt="Filmes e pipocas"
                        className="absolute w-full h-auto object-contain mb-0"
                    />

                    <p className="mt-96 mb-20 text-base sm:text-lg md:text-xl lg:text-2xl px-4 md:px-6 text-center">
                        Acesse quando e onde estiver, Canais de tv aberta, Séries e Filmes
                    </p>
                    <p className="mt-1 text-sm sm:text-base md:text-lg text-center">
                        *incluso nos planos premium
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Watch;