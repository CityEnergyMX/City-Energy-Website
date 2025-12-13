import { Clock, CreditCard, History, Headphones, Smartphone, Shield } from "lucide-react"

export function KeyFeatures() {
  const features = [
    {
      icon: Clock,
      title: "Disponibilidad en tiempo real",
      description: "Conoce el estado de cada estación antes de llegar",
    },
    {
      icon: CreditCard,
      title: "Métodos de pago digitales",
      description: "Paga con tarjeta, wallet o app de forma segura",
    },
    {
      icon: History,
      title: "Historial de cargas",
      description: "Revisa todas tus sesiones y gastos en un solo lugar",
    },
    {
      icon: Headphones,
      title: "Soporte 24/7",
      description: "Asistencia técnica disponible en cualquier momento",
    },
    {
      icon: Smartphone,
      title: "App intuitiva",
      description: "Interfaz simple y fácil de usar para todos",
    },
    {
      icon: Shield,
      title: "Carga rápida y segura",
      description: "Tecnología certificada con los mejores estándares",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-secondary">Características clave</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Todo lo que necesitas para una experiencia de carga perfecta
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl border shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="text-lg font-semibold text-secondary">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
