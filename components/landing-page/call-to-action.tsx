import Image from "next/image"
import ContactFormButton from "./contact-form-button"
import { ArrowRight } from "lucide-react"

export default function CallToAction() {
  return (
    <section id="contact" className="card my-20 relative overflow-hidden shadow-md border-primary/20">
      <div className="p-8 md:p-10 lg:p-12 flex flex-col md:flex-row items-center">
        {/* Text content */}
        <div className="w-full md:w-3/5 z-10">
          <h2 className="text-foreground mb-6 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance">
            Pronto para Atender <span className="text-primary">24/7?</span>
          </h2>

          <p className="my-4 text-base md:text-lg max-w-md text-muted-foreground leading-relaxed">
            Pare de perder clientes por falta de atendimento rápido.
          </p>
          <p className="mb-6 text-base md:text-lg max-w-md text-muted-foreground leading-relaxed">
            Agende uma demonstração gratuita e veja como a automação inteligente pode transformar seu negócio em apenas
            15 minutos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <ContactFormButton />
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border hover:border-primary/50 text-foreground hover:bg-secondary/50 transition-all font-medium"
            >
              Ver demonstração
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            ✓ Sem compromisso inicial &nbsp;&nbsp;|&nbsp;&nbsp; ✓ Setup em 7 dias &nbsp;&nbsp;|&nbsp;&nbsp; ✓ ROI
            garantido
          </p>
        </div>

        {/* Image */}
        <div className="hidden md:block md:w-2/5 md:absolute md:right-0 md:top-0 md:bottom-0 md:flex md:items-center opacity-20">
          <Image
            src="/purple-circle-wave-static.png"
            alt="Contact"
            width={500}
            height={500}
            className="w-full h-auto md:h-full md:w-auto md:object-cover md:object-left"
          />
        </div>
      </div>
    </section>
  )
}
