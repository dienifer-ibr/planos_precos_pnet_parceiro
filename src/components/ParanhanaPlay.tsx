import React from "react";
import ParanhanaPlay_Fundo from "@/assets/ParanhanaPlayFundo.jpg";
import LogoParanhana_Play from "@/assets/LogoParanhanaPlay.png";
import Paranhana_Play from "@/assets/ParanhanaPlay.png";
import Paranhana_Play_desktop from "@/assets/Paranhana_Play-desktop.png";
import ParanhanaPlayDesktop from "@/assets/ParanhanaPlayDesktop.png";

const ParanhanaPlay: React.FC = () => {
    return (
        <section id="paranhanaplay"
            className="relative w-full h-screen bg-center flex flex-col items-center justify-center
                 bg-[url('@/assets/ParanhanaPlayFundo.jpg')] 
                 lg:bg-[url('@/assets/Paranhana_Play-desktop.png')] 
                 bg-cover lg:bg-contain"
        >

            <div
                className="absolute inset-0 hidden lg:block"
                style={{
                    backgroundImage: `url(${Paranhana_Play_desktop})`,
                    backgroundRepeat: "repeat",
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                }}
                aria-hidden
                ="true"
            />
            <div className="absolute inset-0 bg-red-900 bg-opacity-90">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(128,0,0,0.05) 0px, rgba(128,0,0,0.05) 1px, transparent 1px, transparent 2px)]"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center text-white text-center px-4">
                <img
                    src={Paranhana_Play}
                    alt="Filmes e pipocas"
                    className="w-full h-auto lg:w-[600px] lg:relative lg:left-[400px] lg:hidden"
                />

                <div
                className="absolute inset-0 hidden lg:block h-[400px] -top-[100px] -right-[85%]"
                style={{
                    backgroundImage: `url(${ParanhanaPlayDesktop})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                }}
                aria-hidden
                ="true"
            />

                <img
                    src={LogoParanhana_Play}
                    alt="Logo Paranhana Play"
                    className="absolute top-[-50px] left-[38%] transform -translate-x-1/2 w-3/4 lg:w-[70%] lg:-top-[110%] lg:-left-[10%]"
                />

                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-3xl mt-10 lg:relative lg:-left-[60%] lg:top-[5%] lg:max-w-xl">
                    +2000 filmes, +150 canais de TV grátis e streaming on-demand em qualquer lugar.
                </p>
            </div>

        </section>
    );
};

export default ParanhanaPlay;
