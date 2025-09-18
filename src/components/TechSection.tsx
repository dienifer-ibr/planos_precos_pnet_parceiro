import { Card, CardContent } from "@/components/ui/card";
import iconVelocidade from "@/assets/icon_velocidade.png";
import iconsuporte from "@/assets/icon_suporte.png";
import iconPremiacoes from "@/assets/icon_premiacoes.png";
import iconInstalacao from "@/assets/icon_instalacao.png";

const techFeatures = [
  { icon: iconVelocidade, text: "Alta velocidade" },
  { icon: iconsuporte, text: "Suporte 24/7" },
  { icon: iconPremiacoes, text: "Entre os 3 melhores do RS" },
  { icon: iconInstalacao, text: "Instalação gratuita" },
];

const TechSection = () => {
  return (
    <section className="py-10 bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-white mb-4">
            Porque escolher a ParanhanaNet?
          </h2>
          <h3 className="text-2xl text-white text-opacity-80">
            Conheça os nossos diferenciais
          </h3>
        </div>

        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {techFeatures.map((feature, index) => (
              <Card
                key={index}
                className="shadow-md hover:shadow-lg transition-shadow bg-white/20 flex flex-col items-center text-center
                   w-full max-w-[50%] md:max-w-full mx-auto"
              >
                <CardContent className="p-6 flex flex-col items-center lg:gap-4">
                  <img src={feature.icon} alt={`Ícone ${index}`} className="w-16 h-18" />
                  <p className="text-white font-medium">{feature.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechSection;
