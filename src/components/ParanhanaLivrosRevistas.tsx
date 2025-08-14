import React from "react";
import imagem1 from "@/assets/paranhanalivros.png";
import imagem2 from "@/assets/paranhanarevistas.png";

const ParanhanaMobile: React.FC = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-200 p-4">
            {/* Simulação do celular */}
            <div className="w-80 sm:w-96 h-[650px] bg-gradient-to-br from-orange-500 to-blue-500 rounded-[40px] shadow-2xl border-4 border-black overflow-hidden flex flex-col">

                <div className="h-6 bg-black rounded-b-xl flex items-center justify-center text-white font-semibold text-sm">
                    ParanhanaNet
                </div>

                <div className="flex-1 p-4 overflow-y-auto space-y-4">

                    <div className="bg-white bg-opacity-90 rounded-2xl shadow-md p-4">
                        <h2 className="text-xl font-bold text-orange-600 mb-2 text-center">
                            Paranhana Livros
                        </h2>
                        <p className="text-gray-800 text-sm text-center">
                            A Paranhana Livros é uma plataforma com diversos títulos para leitura em qualquer lugar, a qualquer hora. Explore gêneros como romance, aventura, ficção científica, autoajuda e muito mais.
                        </p>
                    </div>

                    <div className="bg-white bg-opacity-90 rounded-2xl shadow-md p-4">
                        <h2 className="text-xl font-bold text-blue-600 mb-2 text-center">
                            Paranhana Revistas
                        </h2>
                        <p className="text-gray-800 text-sm text-center">
                            A Paranhana Revistas oferece centenas de revistas digitais de diversos gêneros para todos os gostos, sempre atualizadas e disponíveis em qualquer dispositivo.
                        </p>
                    </div>

                    <div className="flex justify-between mt-4 space-x-2">
                        <img
                            src={imagem1}
                            alt="Imagem 1"
                            className="w-1/2 rounded-2xl shadow-md"
                        />
                        <img
                            src={imagem2}
                            alt="Imagem 2"
                            className="w-1/2 rounded-2xl shadow-md"
                        />
                    </div>
                </div>

                <div className="h-6 bg-black flex items-center justify-center rounded-t-xl">
                    <span className="w-16 h-1 bg-white rounded-full"></span>
                </div>
            </div>
        </div>
    );
};

export default ParanhanaMobile;