import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { SiWhatsapp } from "react-icons/si";

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface FAQCategory {
  category: string;
  questions: FAQ[];
}

const faqData: FAQCategory[] = [
  {
    category: "faq",
    questions: [
      {
        id: "subscriber-1",
        question: "QUAL É A COBERTURA DA PARANHANANET?",
        answer:
          "A ParanhanaNet oferece cobertura nas cidades de Parobé, Taquara e Igrejinha, garantindo uma conexão de qualidade e confiável para nossos clientes em toda a região.",
      },
      {
        id: "subscriber-2",
        question: "QUAL A VELOCIDADE MÉDIA DA INTERNET DA PARANHANANET?",
        answer:
          "A PARANHANANET oferece uma conexão de internet melhor que a média do país. Sua média de velocidade é de 525Mbps.",
      },
      {
        id: "subscriber-3",
        question: "COMO POSSO ENTRAR EM CONTATO COM O SUPORTE DA PARANHANANET FORA DO HORÁRIO COMERCIAL?",
        answer:
          "Facilitamos ainda mais para você: além de ligar, pode solicitar atendimento técnico pelo nosso app MK SAC ou Área do Cliente. Basta selecionar “Abrir Chamado”, descrever seu problema ou contatar-nos via WhatsApp pelo número 3543-1099.",
      },
      {
        id: "subscriber-4",
        question: "EXISTE UM LIMITE DE DADOS OU RESTRIÇÕES DE USO DA MINHA CONEXÃO DE INTERNET?",
        answer:
          "Não há restrições de uso ou limites de dados na sua conexão de internet com a ParanhanaNet. Baixe, faça streaming e conecte vários dispositivos sem se preocupar com limitações.",
      },
      {
        id: "subscriber-5",
        question: "COMO POSSO CONTRATAR OS SERVIÇOS DA PARANHANANET?",
        answer:
          "Para tornar tudo mais prático para você, ligue para 3543-1099 ou visite uma de nossas lojas:Parobé- R. Odorico Mosmann, 441- Sala 02- Centro, Parobé- RS, 95630-000 (Ao lado do Posto Ipiranga) / Taquara- R. Júlio de Castilhos, 2177- Sala 3- Centro, Taquara- RS, 95600-030 (Em frente ao Colégio Santa Terezinha) / Igrejinha- Av. Pres. Castelo Branco, 493- Centro, Igrejinha- RS, 95650-000 (Em frente ao Banco do Brasil) - Você também pode contatar-nos pelo nosso WhatsApp 3543-1099.",
      },
      {
        id: "subscriber-6",
        question: "A INSTALAÇÃO DA PARANHANANET É GRATUITA?",
        answer:
          "Sim, a instalação da ParanhanaNet é gratuita com qualquer plano que você escolher. Queremos que você aproveite nossa internet rápida e estável sem custos extras.",
      },
    ],
  },
];

const FAQSection: React.FC = () => {
  return (
    <section
      className="py-8 text-black"
      style={{
        background: "linear-gradient(135deg, #ffffffff 0%, #ffffffff 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-blue-600 mb-2">FAQ</h2>
          <p className="text-base text-blue-900 mb-2">Dúvidas frequentes</p>
        </div>

        {faqData.map((category) => (
          <div key={category.category} className="mb-6">
            <Accordion type="single" collapsible className="space-y-3">
              {category.questions.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="border-b p-3"
                >
                  <AccordionTrigger className="font-medium text-sm [&>svg]:text-blue-500">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pt-1 text-sm">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
        <div className="text-center">
          <button
            onClick={() =>
              window.open(
                "https://api.whatsapp.com/send/?phone=555135431099&text=Olá, gostaria de tirar algumas dúvidas.",
                "_blank"
              )
            }
            className="inline-flex items-center space-x-2 px-6 py-2 text-sm border border-white rounded-md text-white bg-transparent hover:bg-white/10 transition"
            type="button"
          >
            <SiWhatsapp className="w-5 h-5" />
            <span>Outras dúvidas!</span>
          </button>
        </div>
      </div>
    </section >
  );
};

export default FAQSection;
