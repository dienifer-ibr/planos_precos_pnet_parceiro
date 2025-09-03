import React from "react";
import CelularRevistas from "@/assets/CelularRevistas.png";
import Revistas from "@/assets/paranhanarevistas.png";
import LogoParanhanaRevistas from "@/assets/LogoParanhanaRevistas.png";

const ParanhanaRevistas: React.FC = () => {
    return (
        <section
            className="relative w-full h-screen bg-cover bg-center"
            style={{
                backgroundImage: `url(${Revistas})`,
            }}
        >
            <div className="absolute inset-0 bg-orange-500 bg-opacity-90"></div>

            <div className="absolute top-48 left-1/3 transform -translate-x-1/4">
                <img src={LogoParanhanaRevistas} alt="ParanhanaNet" className="w-96 lg:w-96" />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <img
                        src={CelularRevistas}
                        alt="Filmes e pipocas"
                        className="h-auto object-center w-60 lg:w-68"
                    />
                    <p className="absolute bottom-[-70px] left-1/2 transform -translate-x-1/2 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl w-full px-4 md:px-6">
                        frase frase frase
                    </p>
                </div>
            </div>

        </section>
    );
};

export default ParanhanaRevistas;