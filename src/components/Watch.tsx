import React from "react";
import ControleWatch from "@/assets/controle-watch.png";
import FilmesPipocas from "@/assets/filmes-pipocas.png";

const Watch: React.FC = () => {
    return (
        <section
            className="relative w-full min-h-screen bg-cover bg-center"
            style={{
                backgroundImage: `url(${ControleWatch})`,
            }}
        >
            {/* Overlay azul */}
            <div className="absolute inset-0 bg-blue-500 bg-opacity-80"></div>

            {/* Conteúdo */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 py-8 gap-6">
                <div className="max-w-xl w-full relative left-[-20%] top-40">
                    <p className="text-lg md:text-xl mb-0">
                        STREAMING BY
                    </p>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-0">
                        WATCHᴮᴿ
                    </h2>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tightmb-0 ">
                        +
                    </h2>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-0">
                        Paramount
                    </h2>
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