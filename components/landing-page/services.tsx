import { Bot, Calendar, MessageCircle, Zap, BarChart3, Headphones } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Chatbot Inteligente",
    description:
      "IA que entende seus clientes e responde com precisão. Aprende com cada conversa e melhora continuamente.",
    icon: Bot,
    color: "bg-primary",
  },
  {
    id: 2,
    title: "Automação WhatsApp",
    description: "Atendimento automático no WhatsApp Business. Qualifique leads, tire dúvidas e feche vendas 24/7.",
    icon: MessageCircle,
    color: "bg-primary",
  },
  {
    id: 3,
    title: "Sistema de Agendamento",
    description:
      "Agende consultas, reuniões e serviços automaticamente. Confirmações, lembretes e reagendamentos sem intervenção humana.",
    icon: Calendar,
    color: "bg-primary",
  },
  {
    id: 4,
    title: "Respostas Instantâneas",
    description:
      "Tempo de resposta em segundos. Seus clientes não precisam mais esperar horas por uma resposta simples.",
    icon: Zap,
    color: "bg-primary",
  },
  {
    id: 5,
    title: "Relatórios e Insights",
    description: "Dashboards completos com métricas de atendimento, satisfação do cliente e oportunidades de vendas.",
    icon: BarChart3,
    color: "bg-primary",
  },
  {
    id: 6,
    title: "Suporte Híbrido",
    description: "IA para dúvidas comuns, humanos para casos complexos. O melhor dos dois mundos trabalhando juntos.",
    icon: Headphones,
    color: "bg-primary",
  },
]

export default function Services() {
  return (
    <section id="services" className="my-20">
      <h2 className="text-foreground mb-6 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance">
        Automatize Seu
        <span className="block text-primary">Atendimento</span>
      </h2>
      <p className="mb-12 max-w-2xl text-muted-foreground leading-relaxed">
        Soluções de IA que transformam a forma como você se comunica com seus clientes. Mais eficiência, menos custos e
        clientes mais satisfeitos.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="card p-6 shadow-md hover:shadow-lg hover:border-primary/50 transition-all duration-300 group"
          >
            <div
              className={`${service.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform`}
            >
              <service.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
