import { Crown } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Copyright notices */}
        <div className="space-y-4 text-xs text-muted-foreground mb-12">
          <p>© 2025 Warner Bros. Entertainment Inc. Todos os direitos reservados.</p>
          <p>©2025 WarnerMedia Direct Latin America, LLC. Todos os direitos reservados. HBO Max é propriedade de Home Box Office, Inc.</p>
          <p>© 2025 Globo Comunicação e Participações S.A. Todos os direitos reservados. Big Brother Brasil é usado sob licença. As marcas registradas GLOBO®, TV GLOBO®, GLOBO NEWS®, CANAL BRASIL® SPORTV®, MULTISHOW®, OFF®, GNT®, BIS®, GLOOBINHO®, GLOOB®, VIVA®, MODO VIAGEM®, PREMIERE® e COMBATE® são propriedades da Globo Comunicação e Participações S.A.</p>
          <p>© 2025 NBCUniversal. Todos os direitos reservados. As marcas Universal, Studio Universal e USA Network são propriedades da NBCUniversal.</p>
          <p>© 2025 Telecine Programação De Filmes Ltda. Todos os direitos reservados. As marcas registradas TELECINE® e MEGAPIX® são propriedades da Telecine Programação De Filmes Ltda.</p>
          <p>Paramount+ © 2025 Paramount. Todos os direitos reservados.</p>
        </div>

        {/* Watch Brasil info */}
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Crown className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">WATCH</span>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2025 Watch Brasil. Todos os direitos reservados.
          </p>

          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#" className="inline-block">
              <div className="bg-foreground text-background px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-foreground/90 transition-colors">
                <span className="text-sm font-medium">Baixar na Google Play</span>
              </div>
            </a>
            <a href="#" className="inline-block">
              <div className="bg-foreground text-background px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-foreground/90 transition-colors">
                <span className="text-sm font-medium">Baixar na App Store</span>
              </div>
            </a>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              A Watch Brasil
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Termos de uso e privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;