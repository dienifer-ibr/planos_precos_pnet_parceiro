import { Crown } from "lucide-react";
import { SiWhatsapp, SiMessenger, SiYoutube, SiInstagram, SiFacebook } from "react-icons/si";
import { FaPhone } from "react-icons/fa";
import logo from "@/assets/logo.png";
import todascores from "@/assets/todascores.png";

const Footer = () => {
  return (
    <footer className="bg-muted py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space">
          <div className="flex items-center space-x-2">
            <img
              src={logo}
            />
          </div>
        </div>

        <div className="flex items-center justify-center space-x-4 mt-6">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-foreground/10 hover:bg-foreground/20 p-3 rounded-full transition-colors group"
            aria-label="Messenger"
          >
            <SiMessenger className="h-5 w-5 text-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-foreground/10 hover:bg-foreground/20 p-3 rounded-full transition-colors group"
            aria-label="Instagram"
          >
            <SiInstagram className="h-5 w-5 text-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-foreground/10 hover:bg-foreground/20 p-3 rounded-full transition-colors group"
            aria-label="Facebook"
          >
            <SiFacebook className="h-5 w-5 text-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-foreground/10 hover:bg-foreground/20 p-3 rounded-full transition-colors group"
            aria-label="WhatsApp"
          >
            <SiWhatsapp className="h-5 w-5 text-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-foreground/10 hover:bg-foreground/20 p-3 rounded-full transition-colors group"
            aria-label="YouTube"
          >
            <SiYoutube className="h-5 w-5 text-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8 flex justify-center items-center space-x-2 mt-6">
          <FaPhone className="w-4 h-4 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">
            (51) 3543-1099
          </p>
        </div>
        
        <div className="flex flex-row gap-4 mt-6">
          <a href="#" className="inline-block">
            <div className="bg-foreground text-background px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-foreground/90 transition-colors">
              <span className="text-sm font-medium">Loja Taquara</span>
            </div>
          </a>
          <a href="#" className="inline-block">
            <div className="bg-foreground text-background px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-foreground/90 transition-colors">
              <span className="text-sm font-medium">Loja Parobé</span>
            </div>
          </a>
          <a href="#" className="inline-block">
            <div className="bg-foreground text-background px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-foreground/90 transition-colors">
              <span className="text-sm font-medium">Loja Igrejinha</span>
            </div>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;