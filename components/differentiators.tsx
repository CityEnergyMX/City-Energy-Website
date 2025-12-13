import { Building2, TrendingUp, Users, Lock, Lightbulb, Leaf } from "lucide-react"

export function Differentiators() {
  const differentiators = [
    {
      icon: Building2,
      title: "Infraestructura moderna",
      description: "Red de estaciones con la última tecnología en carga rápida",
    },
    {
      icon: TrendingUp,
      title: "Alta disponibilidad",
      description: "99.8% de uptime garantizado en toda nuestra red",
    },
    {
      icon: Users,
      title: "Mejor experiencia",
      description: "Diseñado pensando en la comodidad del usuario",
    },
    {
      icon: Lock,
      title: "Seguridad y confiabilidad",
      description: "Sistemas certificados y monitoreo constante",
    },
    {
      icon: Lightbulb,
      title: "Innovación continua",
      description: "Actualizaciones constantes y nuevas funcionalidades",
    },
    {
      icon: Leaf,
      title: "Energía 100% renovable",
      description: "Todas nuestras estaciones utilizan energía limpia y sostenible",
    },
  ]

  return (
    <section className="py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold">¿Por qué CITY ENERGY?</h2>
          <p className="text-xl text-secondary-foreground/80 max-w-2xl mx-auto">
            Los diferenciadores que nos hacen la mejor opción
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="bg-secondary-foreground/5 backdrop-blur-sm p-8 rounded-xl border border-secondary-foreground/10 hover:bg-secondary-foreground/10 transition-colors"
            >
              <div className="space-y-4">
                <div className="bg-accent/20 w-14 h-14 rounded-lg flex items-center justify-center">
                  <item.icon className="h-7 w-7 text-accent" strokeWidth={1.5} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-secondary-foreground/70 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
