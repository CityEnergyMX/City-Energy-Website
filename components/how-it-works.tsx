import { Download, MapPin, Zap, CreditCard } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: Download,
      title: "Descarga la app",
      description: "Disponible para iOS y Android, regístrate en segundos",
    },
    {
      icon: MapPin,
      title: "Encuentra una estación",
      description: "Ubica la estación más cercana con disponibilidad en tiempo real",
    },
    {
      icon: Zap,
      title: "Carga tu vehículo",
      description: "Conecta y comienza la carga de forma segura y rápida",
    },
    {
      icon: CreditCard,
      title: "Paga desde tu teléfono",
      description: "Métodos de pago digitales seguros y convenientes",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-secondary">¿Cómo funciona?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cuatro pasos simples para cargar tu vehículo eléctrico
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-accent/10 rounded-full blur-xl" />
                  <div className="relative bg-accent/10 p-6 rounded-2xl border-2 border-accent/20">
                    <step.icon className="h-10 w-10 text-accent" strokeWidth={1.5} />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-secondary">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-accent/50 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
