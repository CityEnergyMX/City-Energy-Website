import * as React from "react"
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components"
import { Tailwind } from "@react-email/tailwind"

export type ContactEmailTipo = "demo" | "asesor" | "consulta" | "plan"

export interface ContactLeadEmailProps {
  tipo: ContactEmailTipo
  nombre: string
  email: string
  telefono: string
  empresa?: string
  mensaje?: string
  fecha: string
}

const tipoLabels: Record<ContactEmailTipo, string> = {
  demo: "Solicitud de Demo",
  asesor: "Hablar con Asesor",
  consulta: "Agendar Consulta",
  plan: "Contratar Plan",
}

export function ContactLeadEmail({ tipo, nombre, email, telefono, empresa, mensaje, fecha }: ContactLeadEmailProps) {
  const title = tipoLabels[tipo]

  return (
    <Html>
      <Head />
      <Preview>{`CITY ENERGY - ${title} (${nombre})`}</Preview>
      <Tailwind>
        <Body className="bg-slate-50 font-sans text-slate-900">
          <Container className="mx-auto my-8 w-full max-w-[600px] overflow-hidden rounded-xl border border-slate-200 bg-white">
            <Section className="bg-lime-600 px-8 py-6 text-center text-white">
              <Heading className="m-0 text-2xl font-bold">CITY ENERGY</Heading>
              <Text className="m-0 mt-2 text-base opacity-90">{title}</Text>
            </Section>

            <Section className="px-8 py-6">
              <Field label="Nombre" value={nombre} />
              <Field label="Email" value={email} />
              <Field label="Teléfono" value={telefono} />
              {empresa ? <Field label="Empresa" value={empresa} /> : null}
              {mensaje ? <Field label="Mensaje" value={mensaje} /> : null}
              <Field label="Fecha" value={fecha} />

              <Hr className="my-6 border-slate-200" />

              <Text className="m-0 text-center text-xs text-slate-500">
                Este correo fue enviado automáticamente desde el sitio web de CITY ENERGY.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <Section className="mb-4">
      <Text className="m-0 text-sm font-semibold text-lime-700">{label}:</Text>
      <Text className="m-0 mt-1 rounded-md border-l-4 border-lime-500 bg-slate-50 px-4 py-3 text-sm text-slate-800">
        {value}
      </Text>
    </Section>
  )
}
