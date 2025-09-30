import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PlanCard } from "@/components/PlanCard";

import iconPlay from "@/assets/icon-pplay.png";
import iconClube from "@/assets/icon-pclube.png";
import iconLivros from "@/assets/icons-plivros.png";
import iconRevistas from "@/assets/icon-previstas.png";
import iconWatch from "@/assets/logoWatch.png";
import iconParamount from "@/assets/logoParamount.png";
import iconGloboPlay from "@/assets/logo_globoplay.png";

import { FaHandsHelping, FaWifi, FaWrench, FaHeadset, FaTachometerAlt, FaVideo } from "react-icons/fa";

export function PricingSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container && window.innerWidth >= 768) {
      container.scrollLeft = 200;
    }
  }, []);

  return (
    <section id="planos" className="relative overflow-hidden h-[1300px]">
      <section className="py-24 px-4 bg-gradient-to-b">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary">
              <strong>Conheça nossos planos</strong>
            </h1>
          </div>

          <div className="relative">
            <div className="absolute -top-12 -right-8 lg:-right-48 flex space-x-3 z-10">
              <button
                onClick={() => scroll("left")}
                className="bg-background/80 p-1 rounded-full shadow-md hover:bg-background"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="bg-background/80 p-1 rounded-full shadow-md hover:bg-background"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div
              ref={scrollRef}
              className="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar px-[50%] -mx-[50%] h-[1000px]"
              style={{ scrollSnapType: "x mandatory" }}
            >
              {/* PLANO LARANJA */}
              <div className="flex-shrink-0 w-[300px]" style={{ scrollSnapAlign: "center" }}>
                <PlanCard
                  title="Plano"
                  title2="LARANJA"
                  description="Internet estável para o dia a dia, sem travar"
                  features={[
                    { icon: FaHandsHelping, desc: "Mão de obra especializada" },
                    { icon: FaWifi, desc: "Roteador Wi-fi última geração" },
                    { icon: FaWrench, desc: "Gerenciamento da rede interna (SGRI)" },
                    { icon: FaHeadset, desc: "Suporte Premium 24/7" },
                    { icon: FaTachometerAlt, desc: "600 Mega" },
                  ]}
                  benefits={[
                    { icon: iconPlay, title: "PARANHANAPLAY", desc: "3 Acessos Simultâneos" },
                    { icon: iconClube, title: "PARANHANACLUBE", desc: "1 Acesso + 2 Dependentes" },
                    { icon: iconLivros, title: "PARANHANALIVROS", desc: "3 Livros Digital Mensal" },
                    { icon: iconRevistas, title: "PARANHANAREVISTAS", desc: "3 Revistas Digital Mensal" },
                  ]}
                  msg="https://api.whatsapp.com/send/?phone=555135431099&text=Olá, gostaria de mais informações sobre o plano laranja."
                  variant="laranja"
                />
              </div>

              {/* PLANO MARROM */}
              <div className="flex-shrink-0 w-[300px]" style={{ scrollSnapAlign: "center" }}>
                <PlanCard
                  title="Plano"
                  title2="MARROM"
                  description="Conectividade de alto nível para todos os seus dispositivos"
                  features={[
                    { icon: FaHandsHelping, desc: "Mão de obra especializada" },
                    { icon: FaWifi, desc: "Roteador Wi-fi última geração" },
                    { icon: FaVideo, desc: "Câmera Monitoramento Adicional" },
                    { icon: FaWrench, desc: "Gerenciamento da rede interna (SGRI)" },
                    { icon: FaHeadset, desc: "Suporte Premium 24/7" },
                    { icon: FaTachometerAlt, desc: "700 Mega" },
                  ]}
                  benefits={[
                    { icon: iconPlay, title: "PARANHANAPLAY", desc: "4 Acessos Simultâneos" },
                    { icon: iconClube, title: "PARANHANACLUBE", desc: "1 Acesso + 2 Dependentes" },
                    { icon: iconLivros, title: "PARANHANALIVROS", desc: "4 Livros Digital Mensal + 1 AudioBook" },
                    { icon: iconRevistas, title: "PARANHANAREVISTAS", desc: "3 Revistas Digital Mensal" },
                  ]}
                  msg="https://api.whatsapp.com/send/?phone=555135431099&text=Olá, gostaria de mais informações sobre o plano marron."
                  variant="marron"
                />
              </div>

              {/* PLANO MARFIM */}
              <div className="flex-shrink-0 w-[300px]" style={{ scrollSnapAlign: "center" }}>
                <PlanCard
                  title="Plano"
                  title2="MARFIM"
                  description="Potência e performance para todos os seus dispositivos"
                  features={[
                    { icon: FaHandsHelping, desc: "Mão de obra especializada" },
                    { icon: FaWifi, desc: "Roteador Wi-fi última geração" },
                    { icon: FaWrench, desc: "Gerenciamento da rede interna (SGRI)" },
                    { icon: FaHeadset, desc: "Suporte Premium 24/7" },
                    { icon: FaTachometerAlt, desc: "800 Mega" },
                  ]}
                  benefits={[
                    { icon: iconPlay, title: "PARANHANAPLAY", desc: "4 Acessos Simultâneos" },
                    { icon: iconClube, title: "PARANHANACLUBE", desc: "1 Acesso + 2 Dependentes" },
                    { icon: iconLivros, title: "PARANHANALIVROS", desc: "4 Livros Digital Mensal + 1 AudioBook" },
                    { icon: iconRevistas, title: "PARANHANAREVISTAS", desc: "3 Revistas Digital Mensal" },
                  ]}
                  msg="https://api.whatsapp.com/send/?phone=555135431099&text=Olá, gostaria de mais informações sobre o plano marfin."
                  variant="marfim"
                />
              </div>

              {/* PLANO CINZA */}
              <div className="flex-shrink-0 w-[300px]" style={{ scrollSnapAlign: "center" }}>
                <PlanCard
                  title="Plano"
                  title2="CINZA"
                  description="Internet de sobra para toda a família"
                  features={[
                    { icon: FaHandsHelping, desc: "Mão de obra especializada" },
                    { icon: FaWifi, desc: "Roteador Wi-fi última geração" },
                    { icon: FaVideo, desc: "Roteador ou Câmera Monitoramento Adicional" },
                    { icon: FaWrench, desc: "Gerenciamento da rede interna (SGRI)" },
                    { icon: FaHeadset, desc: "Suporte Premium 24/7" },
                    { icon: FaTachometerAlt, desc: "1000 Mega" },
                  ]}
                  benefits={[
                    { icon: iconPlay, title: "PARANHANAPLAY", desc: "6 Acessos Simultâneos" },
                    { icon: iconClube, title: "PARANHANACLUBE", desc: "1 Acesso + 2 Dependentes" },
                    { icon: iconLivros, title: "PARANHANALIVROS", desc: "4 Livros Digital Mensal + 2 AudioBook" },
                    { icon: iconRevistas, title: "PARANHANAREVISTAS", desc: "3 Revistas Digital Mensal" },
                  ]}
                  benefitsAdd2={[
                    { icon: iconGloboPlay, title: "logo Globo Blay", desc: "Globo play" },
                  ]}
                  msg="https://api.whatsapp.com/send/?phone=555135431099&text=Olá, gostaria de mais informações sobre o plano cinza."
                  variant="cinza"
                />
              </div>

              {/* PLANO BORDÔ */}
              <div className="flex-shrink-0 w-[300px]" style={{ scrollSnapAlign: "center" }}>
                <PlanCard
                  title="Plano"
                  title2="BORDÔ"
                  title3="HOME"
                  description="Internet de sobra para toda a família"
                  features={[
                    { icon: FaHandsHelping, desc: "Mão de obra especializada" },
                    { icon: FaWifi, desc: "Roteador Wi-fi última geração" },
                    { icon: FaVideo, desc: "Roteador ou Câmera Monitoramento Adicional" },
                    { icon: FaWrench, desc: "Gerenciamento da rede interna (SGRI)" },
                    { icon: FaHeadset, desc: "Suporte Premium 24/7" },
                    { icon: FaTachometerAlt, desc: "1000 Mega" },
                  ]}
                  benefits={[
                    { icon: iconPlay, title: "PARANHANAPLAY", desc: "6 Acessos Simultâneos" },
                    { icon: iconClube, title: "PARANHANACLUBE", desc: "1 Acesso + 2 Dependentes" },
                    { icon: iconLivros, title: "PARANHANALIVROS", desc: "4 Livros Digital Mensal + 2 AudioBook" },
                    { icon: iconRevistas, title: "PARANHANAREVISTAS", desc: "3 Revistas Digital Mensal" },
                  ]}
                  benefitsAdd={[
                    { icon: iconWatch, title: "logo watch", desc: "4 Acessos Simultâneos" },
                    { icon: iconParamount, title: "logo paramount", desc: "2 Acessos Simultâneos" },
                  ]}
                  msg="https://api.whatsapp.com/send/?phone=555135431099&text=Olá, gostaria de mais informações sobre o plano bordô."
                  variant="bordo"
                />
              </div>

              {/* PLANO NEON */}
              <div className="flex-shrink-0 w-[300px]" style={{ scrollSnapAlign: "center" }}>
                <PlanCard
                  title="Plano"
                  title2="NEON"
                  title3="GAMER"
                  description="A conexão ideal para quem leva o game a sério"
                  features={[
                    { icon: FaHandsHelping, desc: "Mão de obra especializada" },
                    { icon: FaWifi, desc: "Roteador Wi-fi última geração" },
                    { icon: FaVideo, desc: "Roteador ou Câmera Monitoramento Adicional" },
                    { icon: FaWrench, desc: "Gerenciamento da rede interna (SGRI)" },
                    { icon: FaHeadset, desc: "Suporte Premium 24/7" },
                    { icon: FaTachometerAlt, desc: "1000 Mega" },
                  ]}
                  benefits={[
                    { icon: iconPlay, title: "PARANHANAPLAY", desc: "6 Acessos Simultâneos" },
                    { icon: iconClube, title: "PARANHANACLUBE", desc: "1 Acesso + 2 Dependentes" },
                    { icon: iconLivros, title: "PARANHANALIVROS", desc: "4 Livros Digital Mensal + 2 AudioBook" },
                    { icon: iconRevistas, title: "PARANHANAREVISTAS", desc: "3 Revistas Digital Mensal" },
                  ]}
                  benefitsAdd={[
                    { icon: iconWatch, title: "logo watch", desc: "4 Acessos Simultâneos" },
                    { icon: iconParamount, title: "logo paramount", desc: "2 Acessos Simultâneos" },
                  ]}
                  msg="https://api.whatsapp.com/send/?phone=555135431099&text=Olá, gostaria de mais informações sobre o plano neon gamer."
                  variant="neon"
                />
              </div>

              {/* PLANO DOURADO */}
              <div className="flex-shrink-0 w-[300px]" style={{ scrollSnapAlign: "center" }}>
                <PlanCard
                  title="Plano"
                  title2="DOURADO"
                  title3="BUSINESS"
                  description="Potência e performance para todos os seus dispositivos"
                  features={[
                    { icon: FaHandsHelping, desc: "Mão de obra especializada" },
                    { icon: FaWifi, desc: "Roteador Wi-fi última geração" },
                    { icon: FaVideo, desc: "Roteador ou Câmera Monitoramento Adicional" },
                    { icon: FaWrench, desc: "Gerenciamento da rede interna (SGRI)" },
                    { icon: FaHeadset, desc: "Suporte Premium 24/7" },
                    { icon: FaTachometerAlt, desc: "1000 Mega" },
                  ]}
                  benefits={[
                    { icon: iconPlay, title: "PARANHANAPLAY", desc: "6 Acessos Simultâneos" },
                    { icon: iconClube, title: "PARANHANACLUBE", desc: "1 Acesso + 2 Dependentes" },
                    { icon: iconLivros, title: "PARANHANALIVROS", desc: "4 Livros Digital Mensal + 2 AudioBook" },
                    { icon: iconRevistas, title: "PARANHANAREVISTAS", desc: "3 Revistas Digital Mensal" },
                  ]}
                  benefitsAdd={[
                    { icon: iconWatch, title: "logo watch", desc: "4 Acessos Simultâneos" },
                    { icon: iconParamount, title: "logo paramount", desc: "2 Acessos Simultâneos" },
                  ]}
                  msg="https://api.whatsapp.com/send/?phone=555135431099&text=Olá, gostaria de mais informações sobre o plano dourado business."
                  variant="dourado"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default PricingSection;
