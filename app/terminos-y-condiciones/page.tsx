"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TerminosYCondicionesPage() {
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
        <h1 className="text-4xl font-bold text-secondary mb-8">Términos y Condiciones de Uso</h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <p>
            Esta aplicación ha sido diseñada y administrada por Enerlink Tecnología y Electromovilidad de México S.A. de C.V. para <strong>CITY DIAGNOSTICS SERVICES S.A. DE C.V.</strong>, constituida en la Ciudad de México, con domicilio en Trigo 8, Granjas Esmeralda, Iztapalapa, 09810 Ciudad de México, CDMX, México. Así mismo, los módulos que integran está aplicación han sido diseñados para integrar información de utilidad que pueda ser consultada desde un dispositivo móvil, como lo es información relativa a los puntos de recarga de vehículos eléctricos y disponibilidad de uso de puntos de recarga en México y que realicen la transacción para el suministro de la recarga eléctrica a sus vehículos. Así mismo, los usuarios de "CITY ENERGY" podrán emitir reportes, aclaraciones y quejas a través del módulo de Soporte Técnico.
          </p>
          <p>
            Cualquier persona que desee hacer uso de los servicios que ofrece esta aplicación móvil, podrá hacerlo sujetándose a los presentes "Términos y Condiciones de Uso" así como a las políticas y principios que se describen en el presente documento.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">I. OBJETO</h2>
            <p>
              Este documento describe los términos y condiciones generales de uso de la aplicación móvil en adelante "CITY ENERGY", misma que es aplicación para dispositivos móviles que integra en una sola aplicación el acceso a los distintos módulos por los que está integrada; a través de los cuales, CITY DIAGNOSTICS SERVICES S.A. DE C.V. pondrá a disposición la información relativa a puntos de recarga de vehículos eléctricos, disponibilidad de los mismos y facilitará la transacción del suministro de recarga eléctrica. Lo anterior en el entendido de que CITY DIAGNOSTICS SERVICES S.A. DE C.V. no tiene el carácter de Usuario Final (de conformidad con la definición de dicho término conforme Ley Aplicable) y únicamente actúa a nombre y cuenta del propietario del inmueble donde se realiza la recarga para facilitar la transacción de venta de energía eléctrica de Usuario Final a Tercero (de conformidad con la definición de dicho término conforme Ley Aplicable).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">II. ACEPTACIÓN DE LOS TÉRMINOS</h2>
            <p>
              El ingreso y utilización de la aplicación "CITY ENERGY" implica que usted ha leído, entendido y aceptado los presentes "Términos y Condiciones de Uso".
            </p>
            <p>
              Y esta aplicación requerirá la autorización expresa de los usuarios para acceder a las funciones como Cámara, Teléfono, Cuenta de Correo Electronico, SMS y GPS para brindar atención y seguimiento a los trámites y servicios solicitados en alguno de los módulos de la aplicación.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">III. RESPONSABILIDAD SOBRE EL USO DE LA APLICACIÓN "CITY ENERGY"</h2>
            <p>
              Usted asume la responsabilidad de todas las acciones que ejecute, en la utilización y consulta de "CITY ENERGY", mismas que se considera que usted realiza voluntariamente. Usted no utilizará, ni permitirá que otros usuarios utilicen esta aplicación móvil o cualquier servicio prestado a través de ella, de forma contraria a lo establecido en estos "Términos y Condiciones de Uso", así como a las disposiciones legales aplicables a los servicios que ofrece la aplicación "CITY ENERGY". Es responsabilidad de usted todo acto que se realice en esta aplicación móvil, por medio de su "Nombre de Usuario" y "Contraseña"; asimismo, usted se responsabiliza del cuidado y custodia de los mismos, para que esta aplicación móvil únicamente sea utilizada para los fines para los cuales ha sido diseñada, por lo que cualquier mal uso que se realice en su nombre, se presumirá realizada por usted.
            </p>
            <p>
              Usted reconoce y acepta que CITY DIAGNOSTICS SERVICES S.A. DE C.V. queda liberado de toda responsabilidad por el mal uso que llegara a realizarse en alguno de los módulos de "CITY ENERGY".
            </p>
            <p>
              Como todo desarrollo tecnológico, "CITY ENERGY" es falible y estará en proceso permanente de mejora; por lo que existe la posibilidad de que ocurran fallas técnicas durante su uso; por lo que CITY DIAGNOSTICS SERVICES S.A. DE C.V. no garantiza que la aplicación móvil esté libre de errores; por tal motivo, usted deslinda de toda la responsabilidad a CITY DIAGNOSTICS SERVICES S.A. DE C.V., respondiendo de todos los daños y perjuicios derivados de las circunstancias expuestas en este párrafo.
            </p>
            <p>
              CITY DIAGNOSTICS SERVICES S.A. DE C.V. no asumirá ninguna responsabilidad por los inconvenientes que usted pudiera experimentar con el equipo de cómputo y accesorios —hardware y software— utilizados para conectarse a esta aplicación móvil; de igual manera, tampoco asumirá responsabilidad alguna por procedimientos que hayan quedado inconclusos, por razones ajenas a las funciones de CITY DIAGNOSTICS SERVICES S.A. DE C.V..
            </p>
            <p>
              En ningún caso CITY DIAGNOSTICS SERVICES S.A. DE C.V. será responsable por las consecuencias del uso indebido o fraudulento de "CITY ENERGY", cualquiera que sea la causa del eventual daño. CITY DIAGNOSTICS SERVICES S.A. DE C.V. se reserva el derecho de cancelar cualquier cuenta y/o de prohibir el acceso a CITY ENERGY a cualquier consumidor que realice conductas violatorias de los presentes Términos y Condiciones o que incumplan las obligaciones contraídas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">IV. COMPRA DE LOS SERVICIOS</h2>
            <p>
              Todas las compras y transacciones que se lleven a cabo por medio de este sitio web, están sujetas a un proceso de confirmación y verificación, el cual podría incluir la verificación y disponibilidad de la recarga eléctrica, validación de la forma de pago, validación de la factura (en caso de existir) y el cumplimiento de las condiciones requeridas por el medio de pago seleccionado. En algunos casos puede que se requiera una verificación por medio de correo electrónico.
            </p>
            <p>
              Los precios de los servicios ofrecidos en esta aplicación son válidos solamente en las compras realizadas en esta aplicación.
            </p>
            <p>
              CITY DIAGNOSTICS SERVICES S.A. DE C.V. no almacena datos sensibles de los medios de pago, puesto que los pagos se realizan a través de un tercero que cuenta con las certificaciones PCI necesarias para almacenar y procesar de forma segura las transacciones bancarias.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">V. USO DE APLICACIÓN</h2>
            <p>
              El uso de la aplicación, así como de la infraestructura de recarga para el desarrollo del servicio será responsabilidad del usuario, quien deberá seguir las indicaciones que le señale la aplicación para la ejecución de los servicios, en caso de existir un uso indebido de la aplicación por parte del usuario, este último libera a CITY DIAGNOSTICS SERVICES S.A. DE C.V. de cualquier responsabilidad, además en el supuesto de que el usuario haga un uso indebido de la infraestructura de recarga seleccionada para el desarrollo del servicio, el usuario será responsable frente a CITY DIAGNOSTICS SERVICES S.A. DE C.V. o terceros afiliados o subsidiarias de CITY DIAGNOSTICS SERVICES S.A. DE C.V. por los daños y perjuicios que se generen por los daños a la infraestructura de recarga.
            </p>
            <p>
              Usted reconoce que CITY DIAGNOSTICS SERVICES S.A. DE C.V. pone a disposición los servicios de infraestructura de recarga bajo la marca CITY ENERGY.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">VI. REEMBOLSO Y GARANTÍA</h2>
            <p>
              Una vez iniciado el servicio solicitado, no realizamos reembolsos después de que se envíen los resultados, usted tiene la responsabilidad de entender antes de solicitarlo. Le pedimos que lea cuidadosamente antes de solicitarlo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">VII. CAMBIOS Y ACTUALIZACIONES DEL SERVICIO</h2>
            <p>
              CITY DIAGNOSTICS SERVICES S.A. DE C.V. tiene pleno derecho de realizar modificaciones en los contenidos que se ofrecen, ya sean temporales o permanentes, en cualquier momento; por lo tanto, no es posible garantizar la disponibilidad ni la continuidad del funcionamiento de "CITY ENERGY" en todo momento o durante el tiempo de actualización. CITY DIAGNOSTICS SERVICES S.A. DE C.V. no asume responsabilidad alguna por cualquier falla que pudiera presentarse con el uso de esta aplicación, ya sean por cambios y actualizaciones, o por cualquiera otra causa.
            </p>
            <p>
              CITY DIAGNOSTICS SERVICES S.A. DE C.V. se reserva el derecho de modificar, restringir o suprimir todos o cualquiera de los atributos de los módulos de "CITY ENERGY", en forma temporal o definitiva, sin que estas medidas puedan ser objeto de requerimiento alguno, ni de derecho a reclamar daños y perjuicios por parte de usted.
            </p>
            <p>
              CITY DIAGNOSTICS SERVICES S.A. DE C.V. podrá modificar libremente y en cualquier momento en aspectos formales, procedimentales o sustanciales los presentes Términos y Condiciones de uso de CITY ENERGY, los cuales serán actualizados y puestos a disposición de los usuarios en la aplicación CITY ENERGY, siendo la última versión publicada la que regulará inmediatamente las relaciones comerciales que se generen al momento de realizarse la transacción.
            </p>
            <p>
              Asimismo, cuenta con plena autonomía para modificar los usos de la aplicación permitidos a los usuarios, con el único deber de informarlo por un medio virtual que permita su publicación y comunicación al público en general.
            </p>
            <p>
              El usuario libera de cualquier responsabilidad a CITY DIAGNOSTICS SERVICES S.A. DE C.V. con motivo del mal uso de la aplicación, de los cargadores e infraestructura de recarga, y, en general, de cualquier causa que no sea imputable directamente a CITY DIAGNOSTICS SERVICES S.A. DE C.V. en conexión con el uso de la aplicación o por cualquier otro motivo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">VIII. POLÍTICAS DE PRIVACIDAD Y PROTECCIÓN DE DATOS PERSONALES</h2>
            <p>
              El tratamiento de sus datos personales se limitará al cumplimiento de la finalidad establecida en el <Link href="/aviso-de-privacidad" className="text-accent hover:underline">aviso de privacidad</Link> de la aplicación.
            </p>
            <p>
              El tratamiento de sus datos personales se limitará al cumplimiento de la finalidad establecida en el aviso de privacidad de la aplicación y se realizará de conformidad con lo establecido en la Ley Federal de Protección de Datos Personales en Posesión los Particulares.
            </p>
            <p>
              Los datos requeridos en la aplicación para el registro de usuarios de la aplicación son: Nombre y teléfono celular, correo electrónico, usuario, contraseña, tipo de vehículo, geolocalización, perfilamiento de usuario y método de pago (Número de tarjeta, fecha de expiración y código de seguridad) los cuales serán necesarios para acceder a los servicios otorgados por "CITY ENERGY".
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">IX. POLÍTICA DE PROPIEDAD INTELECTUAL</h2>
            <p>
              "CITY ENERGY" es una obra protegida por las leyes mexicanas, internacionales y tratados en materia de propiedad intelectual.
            </p>
            <p>
              El uso de "CITY ENERGY", no lo convierte a usted en titular de ninguno de los derechos de propiedad intelectual del mismo, ni del contenido o información a la que acceda.
            </p>
            <p>
              Queda prohibido utilizar el nombre, la marca o el logotipo del mismo, así como el de CITY DIAGNOSTICS SERVICES S.A. DE C.V.
            </p>
            <p>
              Asimismo, no se podrá eliminar, ocultar ni alterar los avisos legales que se muestran en la misma. Sin perjuicio de lo anterior, usted podrá imprimirlos, copiarlos o almacenarlos, siempre y cuando sea para uso estrictamente personal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">X. CONTROVERSIAS Y JURISDICCIÓN APLICABLE</h2>
            <p>
              CITY DIAGNOSTICS SERVICES S.A. DE C.V. se reserva el derecho de presentar acciones civiles o penales cuando se advierta el uso indebido de la información contenida en "CITY ENERGY", o por el incumplimiento de los presentes "TÉRMINOS Y CONDICIONES DE USO".
            </p>
            <p>
              La relación entre CITY DIAGNOSTICS SERVICES S.A. DE C.V. y los "USUARIOS" se regirá por la legislación vigente en la Ciudad de México, y la que sea aplicable en el ámbito federal. En caso de existir controversia legal, las partes se sujetarán a la jurisdicción de los tribunales de la Ciudad de México, conforme a la materia que corresponda.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">XI. ACEPTACIÓN DE LOS TÉRMINOS</h2>
            <p>
              El ingreso y utilización de "CITY ENERGY" implica que ha leído y aceptado los presentes "TÉRMINOS Y CONDICIONES DE USO".
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
