"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AvisoDePrivacidadPage() {
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
        <h1 className="text-4xl font-bold text-secondary mb-8">Aviso de Privacidad</h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <p>
            <strong>CITY DIAGNOSTICS SERVICES S.A. DE C.V.</strong> con domicilio en Trigo 8, Granjas Esmeralda, Iztapalapa, 09810 Ciudad de México, CDMX, México (en adelante "City Energy México"), reconoce la importancia del legítimo manejo de sus datos personales, mismo que debe llevarse de forma controlada e informada y por tal motivo hace de su conocimiento el presente Aviso de Privacidad, con la finalidad de enterarlo respecto las prácticas seguidas por City Energy México al obtener, usar, almacenar y, en general, tratar sus datos personales, de conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (en adelante la "LEY") y el Reglamento de Ley Federal de Protección de Datos Personales en Posesión de los Particulares (en adelante el "Reglamento").
          </p>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">I. Datos Personales que pudieran ser tratados</h2>
            <p>
              Algunos de los datos personales que usted proporcione voluntariamente a City Energy México, por ejemplo, enviar un correo para que podamos contactarlo, registrarse para recibir información de interés en relación con los bienes y/o servicios que comercializamos, así como aquellos que nos proporcione con miras al establecimiento de una relación jurídica, comercial o de negocio, pueden ser:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Datos de identificación:</strong> nombre, domicilio particular, fecha de nacimiento, CURP, número de teléfono, fijo o móvil, fax, correo electrónico y/o cualquier otro dato de contacto.</li>
              <li><strong>Datos laborales:</strong> puesto, domicilio, correo electrónico, número de teléfono, fijo o móvil y fax y demás datos de contacto, así como datos relacionados con sus empleos anteriores.</li>
              <li><strong>Datos de facturación:</strong> entidad a la que se hará el cargo, domicilio fiscal, RFC.</li>
              <li><strong>Datos financieros:</strong> información de cuentas bancarias, forma de pago.</li>
              <li><strong>Datos relacionados con la adquisición del bien o la prestación del servicio:</strong> proveedores ya sea personas físicas o morales de las cuales se llegue a tener alguna relación comercial y que se tenga acceso a sus datos personales.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">II. Objetivos, Finalidades y/o Usos de los datos personales</h2>
            <p>
              Los datos personales que sean proporcionados de forma voluntaria a City Energy México por cualquiera de los motivos a que se refiere el primer párrafo del apartado I anterior, serán utilizados para contactarlo dando seguimiento a su petición y enviarle información respecto nuestros productos y/o servicios.
            </p>
            <p>
              Los datos personales que se obtengan por motivo de una relación jurídica, cuyo tratamiento sea necesario para cumplir con obligaciones derivadas de dicha relación, serán utilizados únicamente para cumplir con las obligaciones asumidas por City Energy México al amparo de dicha relación jurídica, comercial y/o de negocio, hacerle llegar comunicaciones y/o información relacionada con dicha relación, llevar a cabo la facturación correspondiente, contratar los servicios o productos que usted y/o la empresa que representa ofrece, hacerle llegar los pagos por estos servicios o productos, formalizar en contratos u otros documentos la relación que se genere con usted y/o la empresa que represente.
            </p>
            <p>
              Sus datos personales podrían utilizarse para finalidades distintas a las antes mencionadas o las incluidas en los Avisos de Privacidad, que se pongan a su disposición, siempre y cuando dichas finalidades sean compatibles con las descritas y puedan considerarse análogas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">III. Transferencias de datos personales</h2>
            <p>
              City Energy México no venderá, cederá o transferirá sus datos personales a terceros ajenos a City Energy México sin su consentimiento previo. Sin embargo, City Energy México podrá transferir sus datos personales cuando dicha transferencia esté prevista en la Ley.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">IV. Medidas de Seguridad</h2>
            <p>
              City Energy México ha implementado y actualmente mantiene las medidas de seguridad, administrativas, técnicas y físicas, necesarias y suficientes para proteger sus datos personales contra daño, pérdida, alteración, destrucción o el uso, acceso o tratamiento no autorizado. Sin embargo, es claro que ninguna comunicación de datos por Internet es totalmente segura, por lo que City Energy México no puede garantizar que sus datos personales estarán libres de todo daño, pérdida, alteración, destrucción o el uso, acceso o tratamiento no autorizado.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">V. Derechos que le corresponden al titular de datos personales</h2>
            <p>
              Usted al ser titular de datos personales, tiene el derecho de ejercer dichos derechos a través del Encargado de Protección de Datos Personales, incluyendo dichos derechos los de acceso, rectificación, cancelación y oposición (en adelante "derechos ARCO"). Asimismo, Usted puede revocar, en todo momento, el consentimiento previamente otorgado y que resultare necesario para el tratamiento y/o manejo de sus datos personales, así como limitar el uso o divulgación de los mismos, cuyo derecho deberá ser ejercido conforme a lo establecido en la Ley y a través del correo electrónico: <a href="mailto:hola@cityenergy.com.mx" className="text-accent hover:underline">hola@cityenergy.com.mx</a> o directamente en el inmueble ubicado en Trigo 8, Granjas Esmeralda, Iztapalapa, 09810 Ciudad de México, CDMX, México.
            </p>
            <p>
              Con la intención de referirle brevemente en qué consisten los derechos ARCO, nos permitimos mencionarle lo siguiente:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Acceso:</strong> que City Energy México le informe cuáles de sus datos personales están contenidos en las bases de datos, para qué se utilizan dichos datos personales, el origen y las comunicaciones que se hayan realizado con los mismos y, en general, las condiciones y generalidades del tratamiento de los datos personales proporcionados por usted a City Energy México.
              </li>
              <li>
                <strong>Rectificación:</strong> que se corrijan, actualicen o modifiquen los datos personales que Usted ha proporcionado a City Energy México en el supuesto de que los mismos resulten, inexactos, incompletos o anteriores en relación con sus datos personales actuales.
              </li>
              <li>
                <strong>Cancelación:</strong> Solicitar que sus datos personales sean dados de baja de forma total o parcial de las bases de datos de City Energy México, por haberse cumplido con la finalidad para la que fueron originalmente proporcionados.
              </li>
              <li>
                <strong>Oposición:</strong> Pedir, derivado de alguna causa legítima, que sus datos personales sean manejados y/o utilizados de forma alguna.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">VI. Cambios al aviso de privacidad</h2>
            <p>
              Cualquier cambio sustancial y/o total al presente aviso de privacidad y/o al que en su momento le haya sido proporcionado, quedará a su disposición en su versión actualizada en esta página y/o en el domicilio ubicado en Trigo 8, Granjas Esmeralda, Iztapalapa, 09810 Ciudad de México, CDMX, México.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">VII. Datos de Contacto</h2>
            <p>
              En caso de que surja cualquier duda, comentario y/o aclaración relacionada con nuestro aviso de privacidad, usted podrá contactar al Encargado de protección de datos Personales mediante correo electrónico a la cuenta: <a href="mailto:hola@cityenergy.com.mx" className="text-accent hover:underline">hola@cityenergy.com.mx</a> y/o directamente en el inmueble ubicado en Trigo 8, Granjas Esmeralda, Iztapalapa, 09810 Ciudad de México, CDMX, México.
            </p>
            <p>
              Se hace igualmente de su conocimiento que, conforme a la Ley y el Reglamento, Usted tiene el derecho de presentar ante el Instituto Federal de Acceso a la Información y Protección de Datos, la correspondiente Solicitud de Protección de Derechos en los plazos y términos fijados por la Ley y el Reglamento, en aquellos casos en que Usted reciba una negativa de respuesta a las solicitudes de derechos ARCO o inconformidad con la solicitud respectiva.
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
