import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Trophy } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const ParanhanaClube = () => {
  const categories = ["Benefícios", "Acesso"];
  const [activeCategory, setActiveCategory] = useState("Benefícios");

  const benefits = [
    { title: "Descontos exclusivos", description: "Ganhe até 50% de desconto em nas Principais Redes, Lojas e Marcas do varejo on-line do Brasil" },
    { title: "Facilidade", description: "Gere cupons de desconto quando e onde quiser" }
  ];

  const access = [
    { title: "Plataforma Online", description: "Acesse todos os benefícios diretamente pelo site ou app." },
    { title: "Vantagens", description: "Inclua dependentes de acordo com o seu plano" },
  ];

  const displayedItems = activeCategory === "Benefícios" ? benefits : access;

  return (
    <section className="min-h-screen py-12 bg-gradient-purple relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2523ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Paranhana Clube
          </h1>
          <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto">
            Super Novidade para os Clientes da ParanhanaNET!
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? "bg-white text-yellow-600 shadow-lg"
                  : "bg-white/10 text-white border-white/30"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {displayedItems.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center shadow-lg"
            >
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-white/80">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl p-8">
          <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Junte-se ao Paranhana Clube!
          </h3>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Faça o seu cadastro e comece a utilizar todos os benefícios
          </p>
          <Button
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 mx-auto"
          >
            <SiWhatsapp className="w-6 h-6" />
            Mais informações
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ParanhanaClube;