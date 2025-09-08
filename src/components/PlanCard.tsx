import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SiWhatsapp } from "react-icons/si";
import { FaPlus } from 'react-icons/fa';

interface Benefit {
  icon: string;
  title: string;
  desc: string;
}

interface benefitsAdd {
  icon: string;
  title: string;
  desc: string;
}

interface PlanCardProps {
  title: string;
  title2: string;
  description: string;
  features: string[];
  popular?: boolean;
  benefits: Benefit[];
  benefitsAdd?: benefitsAdd[];
  variant: "laranja" | "marron" | "marfim" | "bordo" | "neon" | "dourado";
}

export function PlanCard({
  title,
  title2,
  description,
  features,
  popular = false,
  benefits,
  benefitsAdd,
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
          button: "bg-orange-500 hover:bg-orange-600 text-white",
          color: "text-orange-600",
          iconAdd: "bg-orange-500 text-white",
        };
      case "marron":
        return {
          card: "border-steel/20 bg-gradient-to-br from-card to-steel/5 hover:shadow-glow",
          badge: "bg-amber-900 text-white",
          blockBg: "bg-amber-900 text-white",
          title: "text-amber-900",
          button: "bg-amber-900 hover:bg-amber-950 text-white",
          color: "text-amber-900",
          iconAdd: "bg-amber-900 text-white",
        };
      case "marfim":
        return {
          card: "border-steel/20 bg-gradient-to-br from-card to-steel/5 hover:shadow-glow",
          badge: "bg-orange-300 text-white",
          blockBg: "bg-orange-300 text-white",
          title: "text-orange-400",
          button: "bg-orange-300 hover:bg-orange-400 text-white",
          color: "text-orange-400",
          iconAdd: "bg-orange-300 text-white",
        };
      case "bordo":
        return {
          card: "border-steel/20 bg-gradient-to-br from-card to-steel/5 hover:shadow-glow",
          badge: "bg-red-900 text-white",
          blockBg: "bg-red-900 text-white",
          title: "text-red-900",
          button: "bg-red-900 hover:bg-red-800 text-white",
          color: "text-red-900",
          iconAdd: "bg-red-900 text-white",
        };
      case "neon":
        return {
          card: "border-steel/20 bg-gradient-to-br from-card to-steel/5 hover:shadow-glow",
          badge: "bg-purple-600 text-white",
          blockBg: "bg-purple-600 text-white",
          title: "text-purple-600",
          button: "bg-purple-600 hover:bg-purple-700 text-white",
          color: "text-purple-600",
          iconAdd: "bg-purple-600 text-white",
        };
      case "dourado":
        return {
          card: "border-steel/20 bg-gradient-to-br from-card to-steel/5 hover:shadow-glow",
          badge: "bg-yellow-600 text-white",
          blockBg: "bg-yellow-600 text-white",
          title: "text-yellow-600",
          button: "bg-yellow-600 hover:bg-yellow-700 text-white",
          color: "text-yellow-600",
          iconAdd: "bg-yellow-600 text-white",
        };
    }
  };

  const variantClasses = getVariantClasses();

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
        <CardTitle className={`text-3xl sm:text-4xl md:text-5xl font-bold ${variantClasses.title}`}>
          {title2}
        </CardTitle>
        <CardDescription className="text-center text-xs sm:text-sm md:text-base text-muted-foreground">
          {description}
        </CardDescription>

        <p className={`text-center text-sm sm:text-sm md:text-base text-muted-foreground ${variantClasses.color}`}>
          Incluso no combo:
        </p>

        <div className="pt-4">
          <div className={`grid grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl text-center -mb-6 ${variantClasses.blockBg}`}>
            {benefits.map((b, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={b.icon}
                  alt={b.title}
                  className="w-10 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-2"
                />
                <h6 className="font-semibold text-[9px] sm:text-[11px] md:text-xs lg:text-sm">
                  {b.title}
                </h6>
                <p className="text-[7px] sm:text-[9px] md:text-xs lg:text-sm leading-tight">
                  {b.desc}
                </p>
              </div>
            ))}

            {benefitsAdd?.map((b, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={b.icon}
                  alt={b.title}
                  className="w-24 h-12 sm:w-10 sm:h-10 md:w-12 md:h-12 -mb-2 -mt-2"
                />
                <p className="text-[7px] sm:text-[9px] md:text-xs lg:text-sm leading-tight mt-0">
                  {b.desc}
                </p>
              </div>
            )) ?? null}
          </div>

        </div>

      </CardHeader>

      <CardContent className="space-y-1">
        <div className="flex justify-center">
          <button className={`p-2 rounded-full ${variantClasses.iconAdd}`}>
            <FaPlus size={8} />
          </button>
        </div>

        <ul className="space-y-1 sm:space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 sm:gap-3">
              <Check className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
              <span className="text-xs sm:text-sm md:text-base text-foreground">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <Button className={`w-full mt-4 text-xs sm:text-sm md:text-base py-2 sm:py-3 ${variantClasses.button}`}>
          <SiWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          Contrate Já
        </Button>
      </CardContent>
    </Card>
  );
}
