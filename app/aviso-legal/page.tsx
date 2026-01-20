"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AvisoLegalPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-4">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al inicio
            </Button>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-secondary mb-8">Aviso Legal</h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">1. Identificación del Titular</h2>
            <ul className="list-none space-y-2">
              <li><strong>Denominación Social:</strong> CITY DIAGNOSTICS SERVICES S.A. DE C.V.</li>
              <li><strong>Domicilio Social:</strong> Trigo 8, Granjas Esmeralda, Iztapalapa, 09810 Ciudad de México, CDMX, México</li>
              <li><strong>CIF/NIF:</strong> CDS221007EZ2</li>
              <li><strong>Correo electrónico de contacto:</strong> <a href="mailto:hola@cityenergy.com" className="text-accent hover:underline">hola@cityenergy.com</a></li>
              <li><strong>Teléfono de contacto:</strong> 5561466203</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">2. Objeto y Aceptación</h2>
            <p>
              Este sitio web tiene carácter informativo sobre los servicios energéticos ofrecidos por CITY DIAGNOSTICS SERVICES S.A. DE C.V., en adelante "CITY ENERGY". La navegación y uso de este sitio web implica la aceptación plena y sin reservas de las condiciones del presente Aviso Legal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">3. Propiedad Intelectual e Industrial</h2>
            <p>
              Todos los contenidos (textos, imágenes, logotipos, diseño, software) de este sitio web son propiedad de CITY ENERGY o de terceros que han autorizado su uso, y están protegidos por la legislación de propiedad intelectual e industrial. Su reproducción, distribución o comunicación pública sin autorización expresa está prohibida.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">4. Limitación de Responsabilidad</h2>
            <p>CITY ENERGY no se hace responsable de:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Daños o perjuicios derivados de la navegación o uso de la información contenida en el sitio web.</li>
              <li>Interrupciones, errores o fallos técnicos en el funcionamiento del sitio web.</li>
              <li>Contenidos o enlaces a sitios web de terceros que puedan accederse desde este sitio.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">5. Protección de Datos Personales</h2>
            <p>
              El tratamiento de datos personales se realiza conforme a lo dispuesto en nuestra <Link href="/aviso-de-privacidad" className="text-accent hover:underline">Política de Privacidad</Link>, disponible en el enlace correspondiente del sitio web, y conforme al Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">6. Legislación Aplicable y Jurisdicción</h2>
            <p>
              Este Aviso Legal se rige por la legislación española. Para la resolución de cualquier controversia, las partes se someten a los juzgados y tribunales del domicilio social de CITY ENERGY, salvo que la ley aplicable disponga otra cosa.
            </p>
          </section>

          <p className="text-sm text-muted-foreground mt-8">
            <strong>Última actualización:</strong> 15 de enero de 2026.
          </p>
        </div>
      </div>
    </div>
  )
}
