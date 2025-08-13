import { Card, CardContent } from "@/components/ui/card";
import businessMeeting from "@/assets/business-meeting.png";

const techFeatures = [
  "Top 1 em Taquara, Igrejinha e Parobé",
  "Top 1 velocidade do Vale do Paranhana",
  "Entre as 3 melhores do Rio Grande do Sul",
  "Entre as 10 melhores do Brasil",
  "Preços acessíveis",
  "Suporte Premium 24h por dia X 7dias",
  "Atendimento rápido",
  "Instalação gratuita",
  "Mensalidades grátis no Programa Indique e Ganhe"
];

const productFeatures = [
  "Inovação: últimas tendências do entretenimento",
  "Referências: equipes presentes nos eventos do setor no mundo todo",
  "Produtos projetados para garantir a melhor experiência do usuário",
  "Parcerias Estratégicas para enriquecer o portfólio de conteúdo"
];

const managementFeatures = [
  "Alinhamento Estratégico: projetos cuidadosamente alinhados com os objetivos do cliente provedor",
  "Equipe com PMO e Scrum Master",
  "Colaboração Interfuncional: cultura de colaboração entre as diversas áreas",
  "Monitoramento e Avaliação: identificam áreas de melhoria e oportunidades de otimização"
];

const TechSection = () => {
  return (
    <section className="py-10 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <img
            src={businessMeeting}
            alt="Para provedores watch brasil"
            className="w-64 h-48 object-cover rounded-lg mx-auto mb-8 shadow-lg"
          />
          <h2 className="text-4xl font-bold text-primary mb-4">
            Porque escolher a ParanhanaNet?
          </h2>
          <h3 className="text-2xl text-muted-foreground">
            Conheça os nossos diferenciais
          </h3>
        </div>

        {/* Tech Features */}
        <div className="mb-0">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techFeatures.map((feature, index) => (
              <Card key={index} className="border-l-4 border-l-primary shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <p className="text-foreground font-medium">{feature}</p>
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