import type React from "react"
import { Button } from "@/components/ui/button"
import { Truck, BarChart3, Shield, Zap, Clock, MapPin } from "lucide-react"
import Link from "next/link"

export function FleetSection() {
  const benefits = [
    {
      icon: Truck,
      title: "Gestión centralizada",
      description: "Administra todos tus vehículos desde una sola plataforma",
    },
    {
      icon: BarChart3,
      title: "Analytics avanzado",
      description: "Reportes detallados de consumo, costos y eficiencia",
    },
    {
      icon: Shield,
      title: "Acceso prioritario",
      description: "Espacios en nuestras estaciones con prioridad para flotas",
    },
    {
      icon: Zap,
      title: "Carga optimizada",
      description: "Algoritmos inteligentes para reducir tiempos de espera",
    },
    {
      icon: Clock,
      title: "Facturación simplificada",
      description: "Una sola factura mensual para toda tu operación",
    },
    {
      icon: MapPin,
      title: "Red extendida",
      description: "Acceso a la mayor red de carga en el país",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold">
            Soluciones B2B
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary">Electrifica tu flota empresarial</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Soluciones completas para empresas de logística, transporte y delivery. Reduce costos operativos hasta un
            60% con energía eléctrica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-card p-6 rounded-xl border shadow-sm hover:shadow-lg hover:border-accent/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <benefit.icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="font-bold text-secondary">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-secondary text-secondary-foreground rounded-2xl p-8 lg:p-12 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Panel de control empresarial</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <span>Dashboard en tiempo real con métricas de rendimiento</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <span>Control de usuarios y permisos por departamento</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <span>Historial completo de cargas y costos</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <span>Alertas automáticas y notificaciones</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="bg-background/10 backdrop-blur-sm rounded-xl p-6 border border-accent/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm opacity-90">Ahorro promedio mensual</span>
                  <TrendingUp className="h-4 w-4 text-accent" />
                </div>
                <div className="text-4xl font-bold text-accent">$12,500</div>
                <div className="text-sm opacity-75 mt-1">Por flota de 20 vehículos</div>
              </div>

              <div className="bg-background/10 backdrop-blur-sm rounded-xl p-6 border border-accent/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm opacity-90">Reducción de emisiones</span>
                  <Leaf className="h-4 w-4 text-accent" />
                </div>
                <div className="text-4xl font-bold text-accent">85%</div>
                <div className="text-sm opacity-75 mt-1">Comparado con combustión</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/flotas">
              <Button
                size="lg"
                variant="outline"
                className="bg-background text-secondary border-accent hover:bg-accent hover:text-accent-foreground w-full"
              >
                Ver detalles completos
              </Button>
            </Link>
            <Link href="/flotas#contacto">
              <Button size="lg" variant="outline" className="bg-background text-secondary hover:bg-accent hover:text-accent-foreground">
                Hablar con un asesor
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function TrendingUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  )
}

function Leaf(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  )
}
