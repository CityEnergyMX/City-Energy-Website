"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  Truck,
  DollarSign,
  Settings,
  BarChart3,
  Shield,
  Clock,
  CheckCircle,
  Zap,
  Users,
  HeadphonesIcon,
} from "lucide-react"
import Link from "next/link"
import { ContactFormModal } from "@/components/contact-form-modal"

export default function FlotasPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalType, setModalType] = useState<"demo" | "asesor" | "consulta" | "plan">("consulta")
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>()

  const openModal = (tipo: "demo" | "asesor" | "consulta" | "plan", planName?: string) => {
    setModalType(tipo)
    setSelectedPlan(planName)
    setIsModalOpen(true)
  }
  const benefits = [
    {
      icon: DollarSign,
      title: "Ahorro Garantizado",
      description:
        "Reduce costos operativos hasta un 70% comparado con combustibles fósiles. Tarifas preferenciales para flotas empresariales.",
    },
    {
      icon: BarChart3,
      title: "Dashboard Empresarial",
      description:
        "Monitoreo en tiempo real de consumo, patrones de carga y análisis de ahorro por vehículo y conductor.",
    },
    {
      icon: Settings,
      title: "Gestión Centralizada",
      description:
        "Administra toda tu flota desde una sola plataforma. Asigna vehículos, controla presupuestos y genera reportes.",
    },
    {
      icon: Shield,
      title: "Prioridad en Estaciones",
      description:
        "Acceso garantizado a estaciones de carga rápida incluso en horas pico. Reserva de espacios disponible.",
    },
    {
      icon: Clock,
      title: "Facturación Unificada",
      description:
        "Una sola factura mensual para toda tu flota. Reportes detallados por departamento, proyecto o centro de costos.",
    },
    {
      icon: Users,
      title: "Soporte Dedicado",
      description:
        "Asesor empresarial asignado 24/7. Capacitación incluida para conductores y administradores de flota.",
    },
  ]

  const plans = [
    {
      name: "Flota Pequeña",
      vehicles: "50-200 vehículos",
      price: "Descuento 5%",
      features: [
        "Dashboard básico de monitoreo",
        "Facturación mensual unificada",
        "Tarifas preferenciales - 5%",
        "Soporte por email",
        "Reportes mensuales",
      ],
    },
    {
      name: "Flota Mediana",
      vehicles: "200-500 vehículos",
      price: "Descuento 8%",
      features: [
        "Dashboard básico de monitoreo",
        "Facturación mensual unificada",
        "Tarifas preferenciales - 8%",
        "Soporte por email",
        "Reportes mensuales",
        "Asesor dedicado",
      ],
      featured: true,
    },
    {
      name: "Flota Corporativa",
      vehicles: "500-1000 vehículos",
      price: "Descuento 10%",
      features: [
        "Dashboard avanzado con IA",
        "Facturación por centro de costos",
        "Tarifas preferenciales - 10%",
        "Soporte por email",
        "Reportes semanales",
        "Asesor dedicado",
        "Cajones prioritarios",
      ],
    },
    {
      name: "Grandes Consumidores",
      vehicles: ">1000 vehículos",
      price: "Descuento 15%",
      features: [
        "Dashboard avanzado con IA",
        "Facturación por centro de costos",
        "Tarifas preferenciales - 15%",
        "Estaciones privadas opcionales",
        "Soporte 24/7 prioritario",
        "Reportes personalizados",
        "Consultoría de electrificación",
        "SLA garantizado",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-accent/5 via-secondary/5 to-background">
        <div className="container mx-auto px-4 py-12">
          <Link href="/">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al inicio
            </Button>
          </Link>

          <div className="max-w-4xl mx-auto text-center space-y-8 py-12">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 text-sm font-medium text-secondary">
              <Truck className="h-4 w-4 text-accent" />
              Soluciones empresariales
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="text-secondary">Electrifica tu </span>
              <span className="text-accent">Flota</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Optimiza costos, reduce emisiones y lidera la transformación hacia la movilidad sostenible con nuestras
              soluciones integrales para flotas empresariales.
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button
                size="lg"
                onClick={() => openModal("demo")}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6"
              >
                Solicitar Demo
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 text-lg px-8 py-6 bg-transparent"
                onClick={() => openModal("asesor")}
              >
                Hablar con un asesor
              </Button>
            </div>

            {/* Key Metrics */}
            <div className="grid md:grid-cols-3 gap-6 pt-12">
              <div className="bg-card border rounded-xl p-6">
                <div className="text-4xl font-bold text-accent mb-2">70%</div>
                <div className="text-sm text-muted-foreground">Reducción de costos</div>
              </div>
              <div className="bg-card border rounded-xl p-6">
                <div className="text-4xl font-bold text-accent mb-2">85%</div>
                <div className="text-sm text-muted-foreground">Menos emisiones</div>
              </div>
              <div className="bg-card border rounded-xl p-6">
                <div className="text-4xl font-bold text-accent mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Empresas confían en nosotros</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-4">Beneficios para tu Empresa</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Todo lo que necesitas para gestionar tu flota eléctrica de manera eficiente
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-card border rounded-xl p-6 hover:shadow-lg hover:border-accent/30 transition-all"
              >
                <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-4">Planes para Flotas</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Elige el plan que mejor se adapte al tamaño de tu flota
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-card border rounded-2xl p-8 flex flex-col min-h-[520px] ${
                  plan.featured ? "ring-2 ring-accent shadow-xl" : ""
                }`}
              >
                {plan.featured && (
                  <div className="bg-accent text-accent-foreground text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Más Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-secondary mb-2">{plan.name}</h3>
                <div className="text-muted-foreground mb-4">{plan.vehicles}</div>
                <div className="text-4xl font-bold text-secondary mb-6">{plan.price}</div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => openModal("plan", plan.name)}
                  className={`w-full ${
                    plan.featured
                      ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                      : "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  }`}
                >
                  Contratar Plan
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contacto" className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-accent/10 to-secondary/10 rounded-3xl p-12 lg:p-16 text-center max-w-4xl mx-auto">
            <Zap className="h-16 w-16 text-accent mx-auto mb-6" />
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">¿Listo para electrificar tu flota?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Agenda una consulta gratuita con nuestros expertos y descubre cómo puedes ahorrar miles de dólares al mes.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => openModal("consulta")}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6"
              >
                <HeadphonesIcon className="mr-2 h-5 w-5" />
                Agendar Consulta
              </Button>
              {/* <Button size="lg" variant="outline" className="border-2 text-lg px-8 py-6 bg-transparent">
                Descargar Brochure
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        tipo={modalType}
        planName={selectedPlan}
      />
    </div>
  )
}
