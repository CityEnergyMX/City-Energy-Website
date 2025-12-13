import { Target, Eye, Leaf, Cpu } from "lucide-react"

export function AboutUs() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-secondary">Sobre nosotros</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Impulsando el futuro de la movilidad eléctrica
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-card p-8 rounded-2xl border shadow-sm space-y-4">
            <div className="bg-accent/10 w-14 h-14 rounded-xl flex items-center justify-center">
              <Target className="h-7 w-7 text-accent" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold text-secondary">Nuestra Misión</h3>
            <p className="text-muted-foreground leading-relaxed">
              Facilitar la transición hacia la movilidad eléctrica mediante una infraestructura de carga accesible,
              confiable y tecnológicamente avanzada que impulse un futuro más sostenible.
            </p>
          </div>

          <div className="bg-card p-8 rounded-2xl border shadow-sm space-y-4">
            <div className="bg-accent/10 w-14 h-14 rounded-xl flex items-center justify-center">
              <Eye className="h-7 w-7 text-accent" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold text-secondary">Nuestra Visión</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ser la red de carga de vehículos eléctricos más grande y confiable del país, liderando la innovación en
              soluciones de energía limpia para la movilidad urbana.
            </p>
          </div>

          <div className="bg-card p-8 rounded-2xl border shadow-sm space-y-4">
            <div className="bg-accent/10 w-14 h-14 rounded-xl flex items-center justify-center">
              <Leaf className="h-7 w-7 text-accent" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold text-secondary">Sostenibilidad</h3>
            <p className="text-muted-foreground leading-relaxed">
              Comprometidos con el medio ambiente, utilizamos energía renovable en nuestras estaciones y promovemos
              prácticas que reducen la huella de carbono.
            </p>
          </div>

          <div className="bg-card p-8 rounded-2xl border shadow-sm space-y-4">
            <div className="bg-accent/10 w-14 h-14 rounded-xl flex items-center justify-center">
              <Cpu className="h-7 w-7 text-accent" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold text-secondary">Tecnología</h3>
            <p className="text-muted-foreground leading-relaxed">
              Innovación constante con sistemas inteligentes de carga, monitoreo en tiempo real y experiencia de usuario
              optimizada a través de nuestra plataforma digital.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
