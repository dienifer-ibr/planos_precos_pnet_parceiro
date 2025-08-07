import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "+30 mil horas de conteúdo",
    description: "infinidade de séries, filmes, realities, coberturas esportivas, notícias, desenhos em +20 mil títulos disponíveis."
  },
  {
    title: "8 perfis e 4 telas simultâneas",
    description: "crie até 8 perfis e assista em até 4 telas de forma simultâneas em diferentes dispositivos."
  },
  {
    title: "Atualização semanal",
    description: "de conteúdo, como séries, filmes, realities, coberturas esportivas, notícias, desenhos e muito mais."
  },
  {
    title: "Canais ao vivo",
    description: "programação variada de canais ao vivo em uma única plataforma exclusiva para assinantes."
  },
  {
    title: "Perfil Kids e Controle Parental",
    description: "plataforma com perfil exclusivo para crianças e Controle Parental para uma experiência segura."
  },
  {
    title: "Catálogo On-demand",
    description: "títulos aclamados e lançamentos do cinema disponível para seus assinantes alugarem."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-primary mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;