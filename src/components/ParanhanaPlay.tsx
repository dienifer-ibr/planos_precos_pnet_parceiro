import { FaPlay } from "react-icons/fa";

import mortalkombat from "@/assets/mortalkombat.jpg";
import velozes from "@/assets/velozes.jpg";
import percyjackson from "@/assets/percyjackson.jpg";
import controleRemoto from "@/assets/controle-remoto.jpg";
import pipoca from "@/assets/pipoca.png";

const posters = [
    { src: mortalkombat, alt: "Mortal Kombat" },
    { src: velozes, alt: "Velozes e Furiosos 5" },
    { src: percyjackson, alt: "Percy Jackson" },
];

export function ParanhanaPlay() {
    return (
        <section className="relative min-h-screen px-6 text-white flex flex-col items-center overflow-hidden max-w-full bg-gradient-to-b from-red-950 via-red-800 to-red-600">
            <div className="relative z-10 flex flex-col items-center max-w-xl w-full">

                {/* Título */}
                <div className="absolute top-10 sm:top-16 flex items-center gap-4">
                    <FaPlay className="text-red-400 w-8 h-8 drop-shadow-lg" />
                    <h2 className="text-3xl sm:text-4xl font-bold flex gap-1">
                        <span>PARANHANA</span>
                        <span className="text-red-400">PLAY</span>
                    </h2>
                    <FaPlay className="text-red-400 w-8 h-8 drop-shadow-lg" />
                </div>

                {/* Bloco das imagens */}
                <div className="relative flex justify-center items-end gap-6 w-full max-w-xl mt-36">
                    <div className="flex gap-4">
                        {posters.map(({ src, alt }, i) => (
                            <img
                                key={i}
                                src={src}
                                alt={alt}
                                className="rounded-lg shadow-lg w-24 sm:w-28 md:w-32 object-cover"
                            />
                        ))}
                    </div>

                    <img
                        src={controleRemoto}
                        alt="Controle remoto"
                        className="absolute left-0 bottom-0 w-20 sm:w-24 md:w-28 -translate-x-8 rotate-[-15deg] drop-shadow-2xl"
                        style={{ zIndex: 20 }}
                    />

                    <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 flex items-center gap-2 z-30">
                        <img
                            src={pipoca}
                            alt="Pipoca"
                            className="w-12 sm:w-16 object-contain"
                        />
                        <div className="bg-white bg-opacity-20 rounded px-3 py-2 max-w-xs text-sm italic text-center text-white drop-shadow-lg">
                            "O melhor do entretenimento está aqui. Assine o ParanhanaPlay!"
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ParanhanaPlay;