import { Check, Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SiWhatsapp } from "react-icons/si";
import { FaPlus } from 'react-icons/fa';
import { IconType } from "react-icons";
import cameraEsquerda from "@/assets/camera-esquerda.png";
import cameraDireita from "@/assets/camera-direita.png";
import LogoFundo from "@/assets/pnet-transparente2.png";

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

interface benefitsAdd2 {
  icon: string;
  title: string;
  desc: string;
}
interface Feature {
  icon: IconType;
  desc: string;
}

interface PlanCardProps {
  title: string;
  title2: string;
  title3?: string;
  description: string;
  features: Feature[];
  popular?: boolean;
  benefits: Benefit[];
  benefitsAdd?: benefitsAdd[];
  benefitsAdd2?: benefitsAdd2[];
  cameraleft?: boolean;
  cameraright?: boolean;
  msg?: string;
  variant: "laranja" | "marron" | "marfim" | "bordo" | "neon" | "dourado" | "cinza";
}

export function PlanCard({
  title,
  title2,
  title3,
  description,
  features,
  benefits,
  benefitsAdd,
  benefitsAdd2,
  cameraleft,
  cameraright,
  msg,
  variant
}: PlanCardProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case "laranja":
        return {
          card: "border-steel/20 bg-gradient-to-br from-card to-steel/5 hover:shadow-glow",
          borderColor: "border-orange-500",
          badge: "bg-orange-500 text-white",
          blockBg: "bg-orange-500 text-white",
          title: "text-orange-600",
          button: "bg-orange-500 hover:bg-orange-600 text-white",
          color: "text-orange-600",
          iconAdd: "bg-orange-500 text-white",
          iconFeature: "text-orange-500",
        };
      case "marron":
        return {
          card: "border-steel/20 bg-gradient-to-br from-card to-steel/5 hover:shadow-glow",
          borderColor: "border-amber-900",
          badge: "bg-amber-900 text-white",
          blockBg: "bg-amber-900 text-white",
          title: "text-amber-900",
          button: "bg-amber-900 hover:bg-amber-950 text-white",
          color: "text-amber-900",
          iconAdd: "bg-amber-900 text-white",
          iconFeature: "text-amber-900",
        };
      case "marfim":
        return {
          card: "border-steel/20 bg-gradient-to-br from-card to-steel/5 hover:shadow-glow",
          borderColor: "border-orange-400",
          badge: "bg-orange-300 text-white",
          blockBg: "bg-orange-300 text-white",
          title: "text-orange-400",
          button: "bg-orange-300 hover:bg-orange-400 text-white",
          color: "text-orange-400",
          iconAdd: "bg-orange-300 text-white",
          iconFeature: "text-orange-300",
        };
      case "bordo":
        return {
          card: "border-steel/20 bg-gradient-to-br from-card to-steel/5 hover:shadow-glow",
          borderColor: "border-red-900",
          badge: "bg-red-900 text-white",
          blockBg: "bg-red-900 text-white",
          title: "text-red-900",
          button: "bg-red-900 hover:bg-red-800 text-white",
          color: "text-red-900",
          iconAdd: "bg-red-900 text-white",
          iconFeature: "text-red-900",
        };
      case "neon":
        return {
          card: "border-steel/20 bg-gradient-to-br from-card to-steel/5 hover:shadow-glow",
          borderColor: "border-purple-600",
          badge: "bg-purple-600 text-white",
          blockBg: "bg-purple-600 text-white",
          title: "text-purple-600",
          button: "bg-purple-600 hover:bg-purple-700 text-white",
          color: "text-purple-600",
          iconAdd: "bg-purple-600 text-white",
          iconFeature: "text-purple-600",
        };
      case "dourado":
        return {
          card: "border-steel/20 bg-gradient-to-br from-card to-steel/5 hover:shadow-glow",
          borderColor: "border-yellow-600",
          badge: "bg-yellow-600 text-white",
          blockBg: "bg-yellow-600 text-white",
          title: "text-yellow-600",
          button: "bg-yellow-600 hover:bg-yellow-700 text-white",
          color: "text-yellow-600",
          iconAdd: "bg-yellow-600 text-white",
          iconFeature: "text-yellow-600",
        };
      case "cinza":
        return {
          card: "border-steel/20 bg-gradient-to-br from-card to-steel/5 hover:shadow-glow",
          borderColor: "border-gray-600",
          badge: "bg-gray-600 text-white",
          blockBg: "bg-gray-600 text-white",
          title: "text-gray-600",
          button: "bg-gray-600 hover:bg-gray-700 text-white",
          color: "text-gray-600",
          iconAdd: "bg-gray-600 text-white",
          iconFeature: "text-gray-600",
        };
    }
  };

  const variantClasses = getVariantClasses();

  const showCameraLeft = cameraleft ?? (variant === "bordo" || variant === "cinza" || variant === "marron" || variant === "neon" || variant === "dourado");
  const showCameraRight = cameraleft ?? (variant === "laranja" || variant === "marfim");

  return (
    <Card className={`relative overflow-hidden transition-all duration-300 mb-8 lg:mb-24 h-[950px] ${variantClasses.card}`}>
      <CardHeader className="text-initial pb-8 lg:-pb-2 relative">
        {(showCameraLeft || showCameraRight) && (<img
          src={showCameraLeft ? cameraEsquerda : cameraDireita}
          alt="Câmera"
          className={
            showCameraLeft
              ? "absolute top-48 right-56 w-20 h-20 lg:w-18 lg:h-18 lg:top-52"
              : "absolute top-48 right-10 w-20 h-20 lg:w-18 lg:h-18 lg:top-52 opacity-0"
          }
        />
        )}

        <div className="relative w-full h-28">
          <div className="absolute left-1/2 -translate-x-1/2">
            <CardTitle className={`text-3xl sm:text-3xl md:text-4xl lg:text-3xl font-bold lg:relative lg:left-1/2 lg:-translate-x-1/2 text-start lg:-bottom-[14px] ${variantClasses.title}`}>
              {title}
            </CardTitle>
            <CardTitle className={`text-5xl sm:text-3xl md:text-4xl lg:text-5xl font-bold lg:left-1/2 text-start -top-[20px] ${variantClasses.title}`}>
              {title2}
            </CardTitle>
            <CardTitle className={`lg:text-xl text-base font-bold relative lg:left-1/2 lg:-translate-x-1/2 text-right lg:-top-[10px] ${variantClasses.title}`}>
              {title3}
            </CardTitle>
          </div>
        </div>

        <div className="flex flex-col h-full p-4">
          <CardDescription className="text-center text-xs sm:text-sm md:text-base lg:text-sm text-muted-foreground">
            {description}
          </CardDescription>
        </div>

        <div className="mt-auto">
          <p className={`text-center text-sm sm:text-sm md:text-base lg:text-xs text-muted-foreground relative -bottom-4 lg:-bottom-2 ${variantClasses.color}`}>
            Incluso no combo:
          </p>

          <div className="pt-4 lg:pt-2 mb-4">
            <div className="absolute left-1/2 -translate-x-1/2">
              <img src={LogoFundo} alt="Background" className="opacity-80" />
            </div>
            <div
              className={`grid grid-cols-2 gap-4 sm:gap-6 lg:gap-4 p-4 sm:p-6 lg:p-3 rounded-2xl text-center h-[300px] ${variantClasses.blockBg}`}
            >
              {benefits.map((b, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={b.icon}
                    alt={b.title}
                    className="w-18 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-8 lg:h-8 mb-2"
                  />
                  <h6 className="font-semibold text-[9px] sm:text-[11px] md:text-xs lg:text-[10px]">
                    {b.title}
                  </h6>
                  <p className="text-[7px] sm:text-[9px] md:text-xs lg:text-[11px] leading-tight">
                    {b.desc}
                  </p>
                </div>
              ))}

              {benefitsAdd?.map((b, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={b.icon}
                    alt={b.title}
                    className="w-30 h-12 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-20 lg:h-10 -mb-2 -mt-2"
                  />
                  <p className="text-[7px] sm:text-[9px] md:text-xs lg:text-[11px] leading-tight mt-0">
                    {b.desc}
                  </p>
                </div>
              )) ?? null}

              {benefitsAdd2?.map((b, index) => (
                <div key={index} className="flex flex-col items-center col-span-2">
                  <img
                    src={b.icon}
                    className="w-30 h-12 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-24 lg:h-12"
                  />
                </div>
              )) ?? null}
            </div>


            {/* <div className={`grid grid-cols-1 gap-4 sm:gap-6 lg:gap-4 p-4 sm:p-6 lg:p-3 rounded-2xl text-center ${variantClasses.blockBg}`}>
              {benefitsAdd2?.map((b, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={b.icon}
                    className="w-30 h-12 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-24 lg:h-12"
                  />
                </div>
              )) ?? null}
            </div> */}
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex flex-col items-center justify-between h-full">
        <div className="absolute inset-x-0 -translate-y-1/2 flex justify-center z-20">
          <button className={`p-2 rounded-full ${variantClasses.iconAdd}`}>
            <FaPlus size={8} />
          </button>
        </div>

        <ul className="space-y-1 sm:space-y-2 mt-6">
          {features.map((b, index) => (
            <li key={index} className="flex items-center gap-2 sm:gap-3">
              {typeof b.icon === "string" ? (
                <img
                  src={b.icon}
                  alt="icon"
                  className={`h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 ${variantClasses.iconFeature}`}
                />
              ) : (
                <b.icon
                  className={`h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 ${variantClasses.iconFeature}`}
                />
              )}
              <span className="text-xs sm:text-sm md:text-base text-foreground">
                {b.desc}
              </span>
            </li>
          ))}
        </ul>

        <Button
          asChild
          className={`absolute w-[80%] text-xs sm:text-sm md:text-base py-2 sm:py-3 mt-72 ${variantClasses.button}`}
        >
          <a
            href={msg}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            <SiWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            Contrate Já
          </a>
        </Button>
      </CardContent>
    </Card>

  );
}