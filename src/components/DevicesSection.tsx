import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import devicesImage from "@/assets/devices-compatibility.png";

const deviceCategories = [
  {
    title: "Navegadores",
    items: [
      "Chrome 39+ para Desktop (recomendado)",
      "Firefox 42+ para Desktop",
      "Safari 8+ para MacOS 10.10+",
      "Mínimo 20 Mbps"
    ]
  },
  {
    title: "Smart TV",
    items: [
      "Android 7.0 ou posterior",
      "TV TCL Roku | Android",
      "TV Toshiba (Vidaa 4)",
      "TV AOC Roku",
      "TV Samsung Tizen (2021 a 2025)",
      "TV LG Webos (2019 ou superior)"
    ]
  },
  {
    title: "Celular & Tablet",
    items: [
      "Android 7.0 ou posterior",
      "iOS iPhone 12.0 ou posterior",
      "iOS iPadOS 12.0 ou posterior"
    ]
  },
  {
    title: "STB/Portáteis & Fire Stick TV",
    items: [
      "Elysys",
      "ZTE ZXV10",
      "Fire Stick (exceção do modelo lite e modelos produzidos fora do Brasil)",
      "Android TV 9.0 ou posterior",
      "Mi Tv Stick (Xiaomi)"
    ]
  }
];

const DevicesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-8">
            Uma plataforma compatível com os principais dispositivos do mercado.
          </h2>
          <img 
            src={devicesImage} 
            alt="Dispositivos compatíveis" 
            className="mx-auto rounded-lg shadow-lg max-w-2xl w-full"
          />
        </div>

        {/* Device Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {deviceCategories.map((category, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-primary text-center">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-muted-foreground">
                      • {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-watch-orange to-watch-blue hover:from-watch-orange/90 hover:to-watch-blue/90 text-white font-semibold px-12 py-6 text-lg shadow-lg"
          >
            Quero ter Watch!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DevicesSection;