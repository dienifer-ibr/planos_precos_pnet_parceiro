import { Button } from "@/components/ui/button";
import { ExternalLink, Globe, MapPin } from "lucide-react";
import { SiWhatsapp, SiYoutube, SiInstagram, SiFacebook } from "react-icons/si";
import LogoFooter from "@/assets/logo-branca.png";
import FooterImage from "@/assets/pnet-transparente.png"; 


const Footer = () => {
  const links = [
    { title: "Planos", href: "#planos" },
    { title: "ParanhanaPlay", href: "#paranhanaplay" },
    { title: "ParanhanaClube", href: "#paranhanaclube" },
    { title: "Watch + Paramount", href: "#watch-paramount" },
    { title: "Constate-nos", href: "#contato" },
  ];

  const addresses = [
    "Av. Pres. Castelo Branco, 493 - Centro Igrejinha/RS",
    "R. Odorico Mosmann, 441 - Sala 02 Centro Parobé/RS",
    "R. Júlio de Castilhos, 2177 - Sala 3 Centro Taquara/RS",
  ];

  const socialIcons = [
    { icon: SiYoutube, href: "#youtube" },
    { icon: SiInstagram, href: "#instagram" },
    { icon: SiFacebook, href: "#facebook" },
  ];

  return (
    <section className="relative w-full bg-[#1800ad] flex flex-col justify-center items-center px-6 py-16 overflow-hidden">
      <img
        src={FooterImage}
        alt="Background decorativo"
        className="absolute inset-0 w-full h-full object-cover opacity-80 pointer-events-none"
        style={{ zIndex: 0, objectPosition: "160% center" }}
      />

      <div className="relative z-10 mb-12">
        <img
          src={LogoFooter}
          alt="Paranhananet - Internet de Verdade"
          className="h-20 w-auto mb-4 mx-auto filter drop-shadow-lg"
        />
      </div>

      <div className="relative z-10 w-full max-w-md mx-auto text-center">
        <h1 className="text-2xl font-bold text-white mb-12 tracking-wide">
          Links Úteis
        </h1>

        <div className="space-y-4 mb-16">
          {links.map((link, index) => (
            <Button
              key={index}
              variant="ghost"
              size="lg"
              className="w-full text-white border-0 bg-transparent hover:bg-white/20 transition-all duration-300 hover:scale-105 text-lg font-medium py-4 rounded-xl"
              asChild
            >
              <a
                href={link.href}
                className="flex items-center justify-center gap-2"
              >
                {link.title}
              </a>
            </Button>
          ))}
        </div>

        <div className="space-y-6 text-white">
          <div className="text-center">
            <div className="text-sm font-medium text-white mb-1">(51) WhatsApp</div>
            <div className="flex items-center justify-center gap-2 text-2xl font-bold">
              <SiWhatsapp className="w-6 h-6 text-white" />
              <span>3543-1099</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 text-lg mb-8">
            <Globe className="w-5 h-5" />
            <span>www.paranhananet.com.br</span>
          </div>

          <div className="flex justify-center gap-6 mb-12">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-white hover:text-gray-300 transition-colors duration-300 text-3xl"
              >
                <social.icon />
              </a>
            ))}
          </div>

          <div className="space-y-4 text-sm">
            {addresses.map((address, index) => (
              <div
                key={index}
                className="flex items-start justify-center gap-2 opacity-90"
              >
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-center leading-relaxed">{address}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;