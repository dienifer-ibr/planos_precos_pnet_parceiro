import React from "react";
import ControleWatch from "@/assets/controle-watch.png";
import FilmesPipocas from "@/assets/filmes-pipocas.png";

const Watch: React.FC = () => {
    return (
        <section
            className="relative w-full h-screen bg-cover bg-center"
            style={{
                backgroundImage: `url(${ControleWatch})`,
            }}
        >
            <div className="absolute inset-0 bg-blue-500 bg-opacity-80"></div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
                <div className="absolute top-[240px] w-full max-w-2xl text-left left-4">
                    <p className="text-lg md:text-xl mb-2">
                        STREAMING BY
                    </p>
                    <h1 className="text-4xl md:text-6xl font-bold">
                        WATCHᴮᴿ
                    </h1>
                    <h1 className="text-4xl md:text-6xl font-bold">
                        +PARAMOUNT
                    </h1>
                </div>
                <div className="absolute w-full left-5">
                    <img
                        src={FilmesPipocas}
                        alt="Filmes e pipocas"
                        className="w-full h-auto object-right"
                    />
                    <p className="absolute bottom-[90px] left-1/2 transform -translate-x-1/2 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl w-full max-w-[90%] px-4 md:px-6 text-center">
                        Acesse quando e onde estiver, Canais de tv aberta, Séries e Filmes
                    </p>
                    <p className="absolute bottom-[-35px] left-1/2 transform -translate-x-1/2 text-lg md:text-xl w-[80%] text-center">
                        *incluso nos planos premium
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Watch;