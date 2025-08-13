import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PlanCardProps {
  title: string;
  price: string;
  originalPrice?: string;
  description: string;
  features: string[];
  popular?: boolean;
  variant: "premium" | "luxury" | "classic";
}

export function PlanCard({
  title,
  price,
  originalPrice,
  description,
  features,
  popular = false,
  variant
}: PlanCardProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case "classic":
        return {
          card: "border-steel/20 bg-gradient-to-br from-card to-steel/5 hover:shadow-glow",
          badge: "bg-gradient-classic text-tertiary-foreground",
          button: "classic" as const
        };
    }
  };

  const variantClasses = getVariantClasses();

  return (
    <Card className={`relative transition-all duration-300 hover:scale-105 ${variantClasses.card}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge className={`px-3 py-1 ${variantClasses.badge}`}>
            Mais Popular
          </Badge>
        </div>
      )}
      
      <CardHeader className="text-center pb-8">
        <CardTitle className="text-2xl font-bold text-foreground">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
        
        <div className="pt-4">
          <div className="flex items-baseline justify-center gap-2">
            {originalPrice && (
              <span className="text-lg text-muted-foreground line-through">
                {originalPrice}
              </span>
            )}
            <span className="text-4xl font-bold text-foreground">
              {price}
            </span>
            <span className="text-muted-foreground">/mês</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <Check className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="text-sm text-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        <Button 
          className="w-full mt-6"
        >
          Escolher Plano
        </Button>
      </CardContent>
    </Card>
  );
}