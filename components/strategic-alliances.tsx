import { Handshake, Building2, Car } from "lucide-react"
import Image from "next/image"

export function StrategicAlliances() {
  const alliances = [
    {
      icon: Car,
      name: "OCN",
      description: "Descuento en todas las cargas para usuarios One Car Now registrados",
      logo: "/logos/LOGO_AZUL.png",
    },
    {
      icon: Building2,
      name: "Didi",
      description: "Descuento en todas las cargas para drivers registrados en Didi, aplica términos y condiciones",
      logo: "/logos/LOGO_AZUL.png",
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
            <Handshake className="h-5 w-5" />
            <span className="font-semibold">Beneficios Corporativos</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-4">Descuentos Especiales</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Trabajas en alguna de estas empresas? Obtén descuentos exclusivos y beneficios especiales en nuestras
            estaciones de carga
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {alliances.map((alliance, index) => (
            <div
              key={index}
              className="group bg-card hover:bg-accent/5 p-8 rounded-2xl border hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <alliance.icon className="relative h-16 w-16 text-accent group-hover:scale-110 transition-transform" />
                </div>
                <div className="relative h-10 w-[180px]">
                  <Image src={alliance.logo} alt={`${alliance.name} logo`} fill className="object-contain" />
                </div>
                <div>
                  <h3 className="font-bold text-secondary text-xl mb-2">{alliance.name}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">{alliance.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
