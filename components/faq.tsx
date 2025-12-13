import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "¿Cómo me registro en CITY ENERGY?",
      answer:
        "Descarga nuestra app desde App Store o Google Play, crea una cuenta con tu correo electrónico y agrega un método de pago. ¡Es rápido y sencillo!",
    },
    {
      question: "¿Cuánto tiempo tarda una carga completa?",
      answer:
        "El tiempo varía según el modelo de tu vehículo y el tipo de cargador. Con nuestros cargadores rápidos, puedes obtener el 80% de carga en 20-40 minutos.",
    },
    {
      question: "¿Cuáles son las formas de pago disponibles?",
      answer:
        "Aceptamos tarjetas de crédito y débito, wallets digitales (Apple Pay, Google Pay) y pagos directos desde la app con saldo precargado.",
    },
    {
      question: "¿Qué hago si una estación no funciona?",
      answer:
        "Puedes reportar el problema directamente desde la app. Nuestro equipo de soporte 24/7 atenderá tu reporte de inmediato y te sugerirá la estación más cercana disponible.",
    },
    {
      question: "¿Ofrecen planes para empresas?",
      answer:
        "Sí, tenemos soluciones especiales para flotillas empresariales con facturación centralizada, reportes detallados y tarifas corporativas preferenciales.",
    },
    {
      question: "¿La app funciona en cualquier ciudad?",
      answer:
        "Actualmente operamos en las principales ciudades del país. Puedes consultar la cobertura exacta en el mapa de nuestra app o sitio web.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-secondary">Preguntas frecuentes</h2>
            <p className="text-xl text-muted-foreground">Encuentra respuestas a las dudas más comunes</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card border rounded-lg px-6 shadow-sm">
                <AccordionTrigger className="text-left font-semibold text-secondary hover:no-underline hover:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
