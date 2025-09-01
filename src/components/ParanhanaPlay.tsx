import React from "react";
import ParanhanaPlay_Fundo from "@/assets/ParanhanaPlayFundo.jpg";
import LogoParanhana_Play from "@/assets/LogoParanhanaPlay.png";
import Paranhana_Play from "@/assets/ParanhanaPlay.png";

const ParanhanaPlay: React.FC = () => {
    return (
        <section
            className="relative w-full h-screen bg-cover bg-center flex flex-col items-center justify-center"
            style={{
                backgroundImage: `url(${ParanhanaPlay_Fundo})`,
            }}
        >
            <div className="absolute inset-0 bg-red-800 bg-opacity-90">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(128,0,0,0.05) 0px, rgba(128,0,0,0.05) 1px, transparent 1px, transparent 2px)]"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center text-white text-center px-4">
                <img
                    src={Paranhana_Play}
                    alt="Filmes e pipocas"
                    className="w-full h-auto"
                />

                <img
                    src={LogoParanhana_Play}
                    alt="Logo Paranhana Play"
                    className="absolute top-[-45px] left-[38%] transform -translate-x-1/2 w-3/4 max-w-xs"
                />

                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-3xl mt-20">
                    +2000 filmes, +150 canais de TV grátis e streaming on-demand em qualquer lugar.
                </p>
            </div>

        </section>
    );
};

export default ParanhanaPlay;
