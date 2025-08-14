import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Share2, Gift, Users, TrendingUp, Copy, Smartphone } from "lucide-react";

const ReferralSection = () => {
    return (
        <section className="min-h-screen bg-gradient-primary flex items-center justify-center p-4">
            <div className="container max-w-4xl mx-auto">
                <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl overflow-hidden">
                    <CardContent className="p-0">
                        {/* Header */}
                        <div className="bg-gradient-secondary text-white p-6 md:p-8 text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                                <Gift className="w-8 h-8" />
                            </div>
                            <h1 className="text-2xl md:text-3xl font-bold mb-3">
                                Indique e Ganhe
                            </h1>
                            <p className="text-white/90 text-lg">
                                Compartilhe e receba <span className="font-bold">R$ 50</span> para cada amigo
                            </p>
                        </div>

                        {/* Main Content */}
                        <div className="p-6 md:p-8">
                            {/* Steps */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                <div className="text-center">
                                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3">
                                        <Share2 className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="font-semibold mb-2">Compartilhe</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Envie seu link único para amigos
                                    </p>
                                </div>
                                <div className="text-center">
                                    <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-full mb-3">
                                        <Users className="w-6 h-6 text-secondary" />
                                    </div>
                                    <h3 className="font-semibold mb-2">Eles se cadastram</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Amigos criam conta usando seu link
                                    </p>
                                </div>
                                <div className="text-center">
                                    <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-3">
                                        <TrendingUp className="w-6 h-6 text-accent" />
                                    </div>
                                    <h3 className="font-semibold mb-2">Vocês ganham</h3>
                                    <p className="text-sm text-muted-foreground">
                                        R$ 50 para você e R$ 25 para ele
                                    </p>
                                </div>
                            </div>

                            {/* CTA Section */}
                            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6 text-center">
                                <div className="flex items-center justify-center gap-2 mb-4">
                                    <Smartphone className="w-5 h-5 text-primary" />
                                    <span className="font-medium">Seu link de indicação:</span>
                                </div>

                                <div className="bg-white border border-border rounded-lg p-3 flex items-center gap-3 mb-6">
                                    <span className="flex-1 text-sm text-muted-foreground truncate">
                                        https://app.exemplo.com/ref/SEUCOD123
                                    </span>
                                    <Button variant="outline" size="sm" className="shrink-0">
                                        <Copy className="w-4 h-4" />
                                    </Button>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                    <Button className="bg-gradient-primary text-white border-0 hover:opacity-90 transition-opacity">
                                        <Share2 className="w-4 h-4 mr-2" />
                                        Compartilhar agora
                                    </Button>
                                    <Button variant="outline">
                                        Ver meu histórico
                                    </Button>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4 mt-6">
                                <div className="text-center">
                                    <div className="text-xl font-bold text-primary">2.5k+</div>
                                    <div className="text-xs text-muted-foreground">Indicações</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-xl font-bold text-secondary">R$ 125k</div>
                                    <div className="text-xs text-muted-foreground">Pagos</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-xl font-bold text-accent">4.9★</div>
                                    <div className="text-xs text-muted-foreground">Avaliação</div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export default ReferralSection;