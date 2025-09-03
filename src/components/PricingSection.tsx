import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PlanCard } from "@/components/PlanCard";

export function PricingSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const plans = [
    {
      title: "Plano",
      title2: "Laranja",
      description: "Internet estável para o dia a dia, sem travar",
      features: [
        "Mão de obra especializada",
        "Roteador Wi-fi última geração",
        "Gerenciamento da rede interna (SGRI)",
        "Suporte Premium 24/7",
        "600 Mega",
      ],
      variant: "laranja" as const,
    },
    {
      title: "Plano",
      title2: "Marron",
      description: "Mais popular para famílias",
      features: [
        "Assistir em 2 dispositivos simultaneamente",
        "Downloads em 2 telefones ou tablets",
        "Qualidade Full HD disponível",
        "Filmes e séries ilimitados",
        "Cancelar quando quiser",
        "Sem anúncios",
      ],
      variant: "marron" as const,
    },
    {
      title: "Plano",
      title2: "Marfim",
      description: "A melhor experiência",
      features: [
        "Assistir em 4 dispositivos simultaneamente",
        "Downloads em 6 telefones ou tablets",
        "Qualidade Ultra HD 4K + HDR",
        "Filmes e séries ilimitados",
        "Cancelar quando quiser",
        "Sem anúncios",
        "Áudio espacial disponível",
      ],
      variant: "marfim" as const,
    },
    {
      title: "Plano",
      title2: "Bordô",
      description: "A melhor experiência",
      features: [
        "Assistir em 4 dispositivos simultaneamente",
        "Downloads em 6 telefones ou tablets",
        "Qualidade Ultra HD 4K + HDR",
        "Filmes e séries ilimitados",
        "Cancelar quando quiser",
        "Sem anúncios",
        "Áudio espacial disponível",
      ],
      variant: "bordo" as const,
    },
    {
      title: "Plano",
      title2: "Neon Gamer",
      description: "A melhor experiência",
      features: [
        "Assistir em 4 dispositivos simultaneamente",
        "Downloads em 6 telefones ou tablets",
        "Qualidade Ultra HD 4K + HDR",
        "Filmes e séries ilimitados",
        "Cancelar quando quiser",
        "Sem anúncios",
        "Áudio espacial disponível",
      ],
      variant: "neon" as const,
    },
    {
      title: "Plano",
      title2: "Neon Gamer",
      description: "A melhor experiência",
      features: [
        "Assistir em 4 dispositivos simultaneamente",
        "Downloads em 6 telefones ou tablets",
        "Qualidade Ultra HD 4K + HDR",
        "Filmes e séries ilimitados",
        "Cancelar quando quiser",
        "Sem anúncios",
        "Áudio espacial disponível",
      ],
      variant: "neon2" as const,
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-20 animate-wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            fill="#dcefffff"
            fillOpacity="0.4"
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,74.7C672,53,768,43,864,53.3C960,64,1056,96,1152,90.7C1248,85,1344,43,1392,21.3L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
          <path
            fill="#fff"
            fillOpacity="0.6"
            d="M0,96L48,101.3C96,107,192,117,288,122.7C384,128,480,128,576,112C672,96,768,64,864,48C960,32,1056,32,1152,42.7C1248,53,1344,75,1392,85.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>

      <section className="py-24 px-4 bg-gradient-to-b from-[#a3cef1]/60 via-white/70 to-[#a3cef1]/60 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-16">
              Conheça nossos planos
            </h2>
          </div>

          <div className="relative">
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-background/80 p-1 rounded-full shadow-md hover:bg-background z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div
              ref={scrollRef}
              className="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar px-[50%] -mx-[50%]"
              style={{ scrollSnapType: "x mandatory" }}
            >
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[300px]"
                  style={{ scrollSnapAlign: "center" }}
                >
                  <PlanCard {...plan} />
                </div>
              ))}
            </div>

            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-background/80 p-1 rounded-full shadow-md hover:bg-background z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground">
              Tem dúvidas? Entre em contato conosco através{" "}
              <a
                href="tel:513543-1099"
                className="text-primary hover:underline font-medium"
              >
                (51) 3543-1099
              </a>
            </p>
          </div>
        </div>
      </section>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-full h-20 animate-wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            fill="#a3cef1"
            fillOpacity="0.4"
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,74.7C672,53,768,43,864,53.3C960,64,1056,96,1152,90.7C1248,85,1344,43,1392,21.3L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
          <path
            fill="#fff"
            fillOpacity="0.6"
            d="M0,96L48,101.3C96,107,192,117,288,122.7C384,128,480,128,576,112C672,96,768,64,864,48C960,32,1056,32,1152,42.7C1248,53,1344,75,1392,85.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>

      <style>{`
        @keyframes wave {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-wave path {
          animation: wave 6s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default PricingSection;