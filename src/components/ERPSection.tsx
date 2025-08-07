import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const erpList = [
  "Alta Rede",
  "BeesWeb (NOVO)",
  "Gerenet",
  "Gesprov",
  "Hubsoft",
  "Infofire",
  "Interfocus",
  "Integrator",
  "IXC",
  "ISPFY (NOVO)",
  "LEAF",
  "MikWeb (NOVO)",
  "Mk Auth",
  "MK Solutions",
  "Phoenix (Tecmil)",
  "Quaza (NOVO)",
  "Radiusnet",
  "RB Full (ATLAZ)",
  "RBX",
  "SGP",
  "SisGP",
  "Synsuite (Voalle)",
  "Topsapp",
  "VigoWEB",
  "ISP Cloud (NOVO)"
];

const ERPSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-xl">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl font-bold text-primary mb-4">
              Integração com os principais ERPs
            </CardTitle>
            <p className="text-muted-foreground text-lg">
              Oferecemos plataforma para gerenciamento dos seus clientes.
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {erpList.map((erp, index) => (
                <div
                  key={index}
                  className="p-4 bg-background rounded-lg border border-border hover:shadow-md transition-shadow text-center"
                >
                  <span className="text-sm font-medium text-foreground">
                    {erp}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ERPSection;