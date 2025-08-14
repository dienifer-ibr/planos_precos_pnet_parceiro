import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Gift, Users, Zap } from "lucide-react";
import { useState } from "react";
import { SiWhatsapp } from "react-icons/si";

const IndiqueGanhe = () => {
    const [email, setEmail] = useState("");
    const [copied, setCopied] = useState(false);
    const referralCode = "WATCH2024";

    const handleCopyCode = () => {
        navigator.clipboard.writeText(referralCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const benefits = [
        {
            icon: Gift,
            title: "Participação Fácil",
            description: "Uma vez que você é cliente, pode participar da campanha"
        },
        {
            icon: Users,
            title: "Mensalidade Grátis",
            description: "Cada cliente que você indica representa até um mês de mensalidade como BÔNUS para você."
        },
        {
            icon: Zap,
            title: "Sem limites",
            description: "Indique quantos amigos quiser e multiplique seus ganhos"
        }
    ];

    return (
        <section className="relative overflow-hidden min-h-screen flex items-center">
            {/* Background Gradient */}
            <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(135deg, #2d3f64ff, #1f2937)' }}
            />

            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse delay-500" />
            </div>

            <div className="relative z-10 container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto text-center text-white">
                    {/* Header */}
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Indique e Ganhe
                        </h1>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {benefits.map((benefit, index) => (
                            <Card key={index} className="p-6 bg-white/10 backdrop-blur-lg border-white/20 text-white">
                                <benefit.icon className="w-12 h-12 mx-auto mb-4 text-green-300" />
                                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                                <p className="opacity-90">{benefit.description}</p>
                            </Card>
                        ))}
                    </div>

                    {/* WhatsApp Button */}
                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold px-6 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 mx-auto"
                    >
                        <SiWhatsapp className="w-6 h-6" />
                        Mais informações
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default IndiqueGanhe;