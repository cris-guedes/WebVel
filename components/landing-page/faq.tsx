"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "Como funciona a implementação do chatbot?",
    answer:
      "Começamos com uma reunião para entender seu negócio e fluxo de atendimento. Em seguida, treinamos a IA com suas informações e integramos aos seus canais. O processo completo leva de 7 a 14 dias, dependendo da complexidade.",
  },
  {
    id: 2,
    question: "O chatbot substitui completamente minha equipe?",
    answer:
      "Não necessariamente. Recomendamos um modelo híbrido: o chatbot responde dúvidas comuns e qualifica leads, enquanto sua equipe foca em casos complexos e fechamento de vendas. Isso aumenta a eficiência sem perder o toque humano.",
  },
  {
    id: 3,
    question: "Posso integrar com WhatsApp Business?",
    answer:
      "Sim! A integração com WhatsApp Business é uma de nossas principais soluções. Seu chatbot atende automaticamente mensagens, envia confirmações, lembretes e pode até processar pedidos diretamente pelo WhatsApp.",
  },
  {
    id: 4,
    question: "Quanto custa uma solução de automação?",
    answer:
      "Os valores variam conforme a complexidade e volume de atendimentos. Chatbots básicos começam em R$ 997/mês. Soluções completas com WhatsApp, agendamento e CRM integrado a partir de R$ 2.997/mês. Oferecemos planos personalizados.",
  },
  {
    id: 5,
    question: "E se o cliente fizer uma pergunta que a IA não sabe responder?",
    answer:
      "O sistema transfere automaticamente para um atendente humano, preservando todo o histórico da conversa. Além disso, a IA aprende continuamente - cada nova pergunta é uma oportunidade de treinamento para melhorar as respostas futuras.",
  },
  {
    id: 6,
    question: "Vocês oferecem suporte e manutenção?",
    answer:
      "Sim! Todos os nossos planos incluem suporte técnico, atualizações da IA e ajustes nas respostas. Também oferecemos treinamento para sua equipe e relatórios mensais de performance com insights para otimização contínua.",
  },
]

export default function Faq() {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id)
  }

  return (
    <section id="faq" className="my-20">
      <div className="card p-8 md:p-10 shadow-lg border-border/50">
        <h2 className="text-foreground mb-6 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance">
          Perguntas
          <span className="block text-primary">Frequentes</span>
        </h2>
        <p className="mb-8 max-w-2xl text-muted-foreground leading-relaxed">
          Tem dúvidas sobre automação com IA? Encontre respostas para as perguntas mais comuns e descubra como podemos
          transformar seu atendimento.
        </p>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border-b pb-4 border-border">
              <button
                onClick={() => toggleItem(faq.id)}
                className="flex justify-between items-center w-full text-left py-2 font-medium text-foreground hover:text-primary transition-colors"
                aria-expanded={openItem === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <span className="font-semibold pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform ${openItem === faq.id ? "rotate-180 text-primary" : ""}`}
                />
              </button>
              {openItem === faq.id && (
                <div id={`faq-answer-${faq.id}`} className="mt-2 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
