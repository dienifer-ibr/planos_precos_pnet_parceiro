import React from "react";
import CelularLivros from "@/assets/CelularLivros.png";
import Livros from "@/assets/Livros.png";
import LogoParanhanaLivros from "@/assets/LogoParanhanaLivros.png";

const ParanhanaLivros: React.FC = () => {
    return (
        <section
            className="relative w-full h-screen bg-cover bg-center"
            style={{
                backgroundImage: `url(${Livros})`,
            }}
        >
            <div className="absolute inset-0 bg-blue-400 bg-opacity-90"></div>

            <div className="absolute top-40 left-1/3 transform -translate-x-1/4">
                <img src={LogoParanhanaLivros} alt="ParanhanaNet" className="w-96 lg:w-96" />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <img
                        src={CelularLivros}
                        alt="Celular Livros"
                        className="h-auto object-center w-80 lg:w-68"
                    />
                </div>
                <div className="mt-[400px] w-[90%] max-w-4xl px-4 md:px-6 text-center">
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">
                        Plataforma digital completa, com diversas opções de livros do o mês, para você acessar quando e onde quiser
                    </p>
                </div>
            </div>

        </section>
    );
};

export default ParanhanaLivros;