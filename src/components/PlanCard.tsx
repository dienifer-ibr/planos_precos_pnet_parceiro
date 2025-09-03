import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SiWhatsapp } from "react-icons/si";

import iconPlay from "@/assets/logo-branca.png";
import iconClube from "@/assets/logo-branca.png";
import iconLivros from "@/assets/logo-branca.png";
import iconRevistas from "@/assets/logo-branca.png";

interface PlanCardProps {
  title: string;
  title2: string;
  description: string;
  features: string[];
  popular?: boolean;
  variant: "laranja" | "marron" | "marfim" | "bordo" | "neon" | "neon2";
}

export function PlanCard({
  title,
  title2,
  description,
  features,
  popular = false,
  variant
}: PlanCardProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case "laranja":
        return {
          card: "border-steel/20 bg-gradient-to-br from-card to-steel/5 hover:shadow-glow",
          badge: "bg-orange-500 text-white",
          blockBg: "bg-orange-500 text-white",
          title: "text-orange-600",
          button: "bg-orange-500 hover:bg-orange-600 text-white"
        };
      case "marron":
        return {
          card: "border-steel/20 bg-gradient-to-br from-card to-steel/5 hover:shadow-glow",
          badge: "bg-[hsl(var(--watch-brown))] text-white",
          blockBg: "bg-[hsl(var(--watch-brown))] text-white",
          title: "text-[hsl(var(--watch-brown))]",
          button: "bg-[hsl(var(--watch-brown))] hover:bg-[hsl(var(--watch-brown)/0.9)] text-white"
        };
      case "marfim":
        return {
          card: "border-steel/20 bg-gradient-to-br from-card to-steel/5 hover:shadow-glow",
          badge: "bg-orange-300 text-white",
          blockBg: "bg-orange-300 text-white",
          title: "text-orange-300",
          button: "bg-orange-300 hover:bg-orange-300 text-white"
        };
      case "bordo":
        return {
          card: "border-steel/20 bg-gradient-to-br from-card to-steel/5 hover:shadow-glow",
          badge: "bg-red-800 text-white",
          blockBg: "bg-red-800 text-white",
          title: "text-red-800",
          button: "bg-red-800 hover:bg-red-800 text-white"
        };
      case "neon":
        return {
          card: "border-steel/20 bg-gradient-to-br from-card to-steel/5 hover:shadow-glow",
          badge: "bg-purple-600 text-white",
          blockBg: "bg-purple-600 text-white",
          title: "text-purple-600",
          button: "bg-purple-600 hover:bg-purple-700 text-white"
        };
      case "neon2":
        return {
          card: "border-steel/20 bg-gradient-to-br from-card to-steel/5 hover:shadow-glow",
          badge: "bg-green-600 text-white",
          blockBg: "bg-green-600 text-white",
          title: "text-green-600",
          button: "bg-green-600 hover:bg-green-700 text-white"
        };
    }
  };

  const variantClasses = getVariantClasses();

  const benefits = [
    { icon: iconPlay, title: "PARANHANAPLAY", desc: "3 Acessos Simultâneos" },
    { icon: iconClube, title: "PARANHANACLUBE", desc: "1 Acesso + 2 Dependentes" },
    { icon: iconLivros, title: "PARANHANALIVROS", desc: "3 Livros Digital Mensal" },
    { icon: iconRevistas, title: "PARANHANAREVISTAS", desc: "3 Revistas Digital Mensal" },
  ];

  return (
    <Card className={`relative transition-all duration-300 hover:scale-105 ${variantClasses.card}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge className={`px-3 py-1 text-xs sm:text-sm ${variantClasses.badge}`}>
            Mais Popular
          </Badge>
        </div>
      )}

      <CardHeader className="text-initial pb-8">
        <CardTitle className={`text-xl sm:text-2xl md:text-3xl font-bold ${variantClasses.title}`}>
          {title}
        </CardTitle>
        <CardTitle className={`text-2xl sm:text-4xl md:text-5xl font-bold ${variantClasses.title}`}>
          {title2}
        </CardTitle>
        <CardDescription className="text-center text-xs sm:text-sm md:text-base text-muted-foreground">
          {description}
        </CardDescription>

        <p className="text-center text-xs sm:text-sm md:text-base text-muted-foreground">
          Incluso no combo:
        </p>

        <div className="pt-4">
          <div className={`grid grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl text-center ${variantClasses.blockBg}`}>
            {benefits.map((b, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={b.icon}
                  alt={b.title}
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-2"
                />
                <h6 className="font-semibold text-[9px] sm:text-[11px] md:text-xs lg:text-sm">
                  {b.title}
                </h6>
                <p className="text-[7px] sm:text-[9px] md:text-xs lg:text-sm leading-tight">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <ul className="space-y-2 sm:space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 sm:gap-3">
              <Check className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
              <span className="text-xs sm:text-sm md:text-base text-foreground">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <Button className={`w-full mt-6 text-xs sm:text-sm md:text-base py-2 sm:py-3 ${variantClasses.button}`}>
          <SiWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          Contrate Já
        </Button>
      </CardContent>
    </Card>
  );
}