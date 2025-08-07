import { Button } from "@/components/ui/button";
import { Crown } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Crown className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">WATCH</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Para Provedores
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Plataforma para Assinantes
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Sobre a Watch
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Suporte
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Conheça a Awdio
            </a>
          </nav>

          {/* Account Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-muted-foreground hover:text-primary">
              Ativar conta
            </Button>
            <span className="text-muted-foreground">|</span>
            <Button variant="ghost" className="text-muted-foreground hover:text-primary">
              Entrar
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;