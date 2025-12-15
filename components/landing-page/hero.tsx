import Image from "next/image"
import ContactFormButton from "./contact-form-button"
import { Sparkles } from "lucide-react"

export default function Hero() {
  return (
    <section id="hero" className="card my-8 relative overflow-hidden shadow-md border-border/50">
      <div className="p-8 md:p-10 lg:p-16 flex flex-col md:flex-row items-center">
        {/* Text content */}
        <div className="w-full md:w-3/5 z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Powered by AI</span>
          </div>

          <h1 className="text-foreground text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
            Atendimento Inteligente
            <span className="block text-primary">24/7 com IA</span>
          </h1>

          <p className="my-6 text-base md:text-lg max-w-xl text-muted-foreground leading-relaxed">
            Automatize seu atendimento no WhatsApp, crie chatbots inteligentes e sistemas de agendamento que nunca
            dormem. Suas vendas e suporte funcionando mesmo quando você está offline.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <ContactFormButton />
            <a href="#services" className="btn-secondary text-foreground hover:bg-secondary/80">
              Ver soluções
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span>Resposta instantânea</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span>Integração WhatsApp</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span>Setup em 7 dias</span>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="hidden md:block md:w-2/5 md:absolute md:right-0 md:top-0 md:bottom-0 md:flex md:items-center">
          <Image
            src="/purple-circle-wave-static.png"
            alt="AI Automation"
            width={500}
            height={500}
            className="w-full h-auto md:h-full md:w-auto md:object-cover md:object-left"
          />
        </div>
      </div>
    </section>
  )
}
