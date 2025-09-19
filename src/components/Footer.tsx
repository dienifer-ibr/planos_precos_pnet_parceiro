import { Button } from "@/components/ui/button";
import { Globe, MapPin } from "lucide-react";
import { SiWhatsapp, SiYoutube, SiInstagram, SiFacebook } from "react-icons/si";
import LogoFooter from "@/assets/logo-branca.png";
import FooterImage from "@/assets/pnet-transparente.png";

const Footer = () => {
  const links = [
    { title: "Planos", href: "#planos" },
    { title: "ParanhanaPlay", href: "#paranhanaplay" },
    { title: "ParanhanaClube", href: "#paranhanaclube" },
    { title: "Watch + Paramount", href: "#watch-paramount" },
    { title: "Contate-nos", href: "#contato" },
  ];

  const addresses = [
    "Av. Pres. Castelo Branco, 493 - Centro Igrejinha/RS",
    "R. Odorico Mosmann, 441 - Sala 02 Centro Parobé/RS",
    "R. Júlio de Castilhos, 2177 - Sala 3 Centro Taquara/RS",
  ];

  const socialIcons = [
    { icon: SiYoutube, href: "https://www.youtube.com/channel/UCi_OjHL24L9Tug3-LJkbZqQ" },
    { icon: SiInstagram, href: "https://www.instagram.com/paranhananet.br/" },
    { icon: SiFacebook, href: "https://www.facebook.com/ParanhanaNET" },
  ];

  return (
    <section className="relative w-full bg-[#1800ad] flex flex-col justify-center items-center px-6 py-16 overflow-hidden">
      <style>{`html { scroll-behavior: smooth; }`}</style>

      <img
        src={FooterImage}
        alt="Background decorativo"
        className="absolute inset-0 w-full h-full object-cover opacity-80 pointer-events-none"
        style={{ zIndex: 0, objectPosition: "160% center", maxWidth: "600px" }}
      />

      <div className="relative z-10 mb-12">
        <img
          src={LogoFooter}
          alt="Paranhananet - Internet de Verdade"
          className="h-20 w-auto mb-4 mx-auto filter drop-shadow-lg"
        />
      </div>

      <div className="relative z-10 w-full max-w-md mx-auto text-center 
                      md:max-w-7xl md:text-left md:grid md:grid-cols-3 md:gap-12">
        <div className="mb-12 md:mb-0">
          <h1 className="text-2xl font-bold text-white mb-6 tracking-wide">
            Links Úteis
          </h1>

          <div className="space-y-4 md:hidden">
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

          <ul className="hidden md:flex md:flex-col md:gap-3 text-white">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="hover:text-gray-300 transition-colors"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6 text-white md:max-w-xs mx-auto md:mx-0">
          <div className="text-center md:text-left">
            <div className="text-sm font-medium text-white mb-1">(51) WhatsApp</div>
            <div className="flex items-center gap-2 text-2xl font-bold justify-center md:justify-start">
              <SiWhatsapp className="w-6 h-6 text-white" />
              <span>3543-1099</span>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-2 text-lg">
            <Globe className="w-5 h-5" />
            <span>www.paranhananet.com.br</span>
          </div>

          <div className="flex justify-center md:justify-start gap-6 text-3xl">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-white hover:text-gray-300 transition-colors duration-300"
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-4 text-sm mt-6 md:mt-0 text-white">
          <h2 className="font-bold text-xl mb-4 hidden md:block">Nossos Endereços</h2>
          {addresses.map((address, index) => (
            <div
              key={index}
              className="flex items-start justify-center md:justify-start gap-2 opacity-90"
            >
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span className="leading-relaxed">{address}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:flex relative z-10 border-t border-white/20 mt-12 pt-6 flex-col md:flex-row justify-between items-center text-sm text-white/80 max-w-7xl w-full">
        <p>© 2025 Paranhananet - Todos os direitos reservados.</p>
        <div className="flex gap-4 mt-4 md:mt-0 text-2xl">
          {socialIcons.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="hover:text-gray-300 transition-colors"
            >
              <social.icon />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;