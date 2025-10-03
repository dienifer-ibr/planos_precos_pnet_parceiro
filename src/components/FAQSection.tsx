import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { SiWhatsapp } from "react-icons/si";
import Logo from "@/assets/logo-azul.png";

interface FAQ {
  id: string;
  question: string;
  answer: string | string[];
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
        question: "Onde a ParanhanaNet está disponível?",
        answer:
          "A ParanhanaNet atende as cidades de Parobé, Taquara e Igrejinha, garantindo uma conexão de qualidade e confiável para seus clientes em toda a região.",
      },
      {
        id: "subscriber-2",
        question: "Qual é a velocidade da internet da ParanhanaNet?",
        answer:
          "A ParanhanaNet oferece velocidades superiores à média nacional. Sua média de velocidade é de 525 Mbps. No rankings de velocidade no Rio Grande do Sul, a ParanhanaNet ocupa posições de destaque, com velocidades médias que variam entre 525 Mbps e 663 Mbps, dependendo da cidade.",
      },
      {
        id: "subscriber-3",
        question: "Como funciona o suporte fora do horário comercial?",
        answer:
          "O suporte técnico da ParanhanaNet está disponível 24 horas por dia, todos os dias da semana, incluindo feriados. Você pode entrar em contato pelo telefone (51) 3543-1099 ou pelo WhatsApp.",
      },
      {
        id: "subscriber-4",
        question: "A instalação é realmente gratuita?",
        answer:
          "Sim, a instalação é gratuita. Além disso, a ParanhanaNet oferece um super roteador Wi-Fi 6 sem custos adicionais.",
      },
      {
        id: "subscriber-5",
        question: "O que devo fazer se a internet cair ou ficar lenta?",
        answer: [
          "Se você estiver enfrentando problemas de conexão, verifique os seguintes pontos:",
          "- Certifique-se de que o roteador está posicionado em um local central e livre de obstruções.",
          "- Evite colocar o roteador próximo a objetos metálicos ou aparelhos eletrônicos que possam interferir no sinal.",
          "- Conecte-se à rede Wi-Fi de 5,8 GHz, se disponível, para melhor desempenho.",
          "- Caso o problema persista, entre em contato com o suporte técnico da ParanhanaNet, disponível 24 horas por dia."
        ],
      }
    ],
  },
];

const FAQSection: React.FC = () => {
  return (
    <section
      className="relative py-8 text-black"
      style={{
        background: "linear-gradient(135deg, #ffffffff 0%, #ffffffff 100%)",
      }}
    >
      <img
        src={Logo}
        alt="Background decorativo"
        className="hidden lg:block absolute opacity-20 -top-[5%] pointer-events-none w-[50%]"
        style={{ zIndex: 0 }}
      />

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
                  <AccordionContent className="pt-1 text-sm space-y-2">
                    {Array.isArray(faq.answer)
                      ? faq.answer.map((line, idx) => <p key={idx}>{line}</p>)
                      : faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
        <div className="text-center">
          <a
            href="#contato"
            className="mt-8 mb-16 inline-flex items-center space-x-2 px-6 py-2 text-sm border border-white rounded-md text-white bg-blue-500 hover:bg-blue-900 transition"
          >
            <span>Outras dúvidas!</span>
          </a>

        </div>
      </div>
    </section >
  );
};

export default FAQSection;
