import { Card, CardContent } from "@/components/ui/card";
import businessMeeting from "@/assets/business-meeting.png";

const techFeatures = [
  "Equipe própria e multidisciplinar de desenvolvedores",
  "Desenvolvimento em metodologia ágil",
  "Ingestão automatizada de assets",
  "Equipe de suporte técnico",
  "Backend proprietário com integração de ERPs via API",
  "QA em múltiplos dispositivos",
  "Analitycs de uso e performance",
  "Frontend proprietário, multidevice e multitenant desenvolvido em React",
  "Integração de rede de parceiros tecnológicos de nível global"
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
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <img 
            src={businessMeeting} 
            alt="Para provedores watch brasil" 
            className="w-64 h-48 object-cover rounded-lg mx-auto mb-8 shadow-lg"
          />
          <h2 className="text-4xl font-bold text-primary mb-4">
            Na Watch Brasil, somos apaixonados pela tecnologia.
          </h2>
          <h3 className="text-2xl text-muted-foreground">
            Conheça os nossos diferenciais em TI
          </h3>
        </div>

        {/* Tech Features */}
        <div className="mb-16">
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

        {/* Three Columns */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Product and Innovation */}
          <div>
            <h3 className="text-2xl font-bold text-secondary mb-6">
              Produto e Inovação
            </h3>
            <div className="space-y-4">
              {productFeatures.map((feature, index) => (
                <Card key={index} className="border-l-4 border-l-secondary">
                  <CardContent className="p-4">
                    <p className="text-sm font-medium">{feature}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Project Management */}
          <div>
            <h3 className="text-2xl font-bold text-tertiary mb-6">
              Gestão de Projetos
            </h3>
            <div className="space-y-4">
              {managementFeatures.map((feature, index) => (
                <Card key={index} className="border-l-4 border-l-tertiary">
                  <CardContent className="p-4">
                    <p className="text-sm font-medium">{feature}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Global Standards */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">
              Soluções nos Padrões Globais
            </h3>
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-4">
                  Usamos a mesma tecnologia dos principais streamings mundiais.
                </h4>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">R</span>
                    </div>
                    <span>React</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">A</span>
                    </div>
                    <span>AWS</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-tertiary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">N</span>
                    </div>
                    <span>NPAW</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;