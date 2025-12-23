import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"
import ContactLeadEmail from "@/emails/contact-lead-email"

const resend = new Resend(process.env.RESEND_API_KEY)

const contactSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  telefono: z.string().min(10, "El teléfono debe tener al menos 10 dígitos"),
  email: z.string().email("Email inválido"),
  empresa: z.string().optional(),
  mensaje: z.string().optional(),
  tipo: z.enum(["demo", "asesor", "consulta", "plan"]).default("consulta"),
})

const ALLOWED_ORIGINS = [
  "http://localhost:3000",
  "https://cityenergy.com",
  "https://cityenergy.com.mx",
  process.env.NEXT_PUBLIC_APP_URL,
]

export async function POST(request: NextRequest) {
  try {
    const origin = request.headers.get("origin")
    const referer = request.headers.get("referer")
    
    const isAllowedOrigin = origin && ALLOWED_ORIGINS.some((allowed) => origin.startsWith(allowed!))
    const isAllowedReferer = referer && ALLOWED_ORIGINS.some((allowed) => referer.startsWith(allowed!))
    
    if (!isAllowedOrigin && !isAllowedReferer) {
      return NextResponse.json(
        { error: "Origen no autorizado" },
        { status: 403 }
      )
    }

    const body = await request.json()
    const validatedData = contactSchema.parse(body)

    const tipoLabels = {
      demo: "Solicitud de Demo",
      asesor: "Hablar con Asesor",
      consulta: "Agendar Consulta",
      plan: "Contratar Plan",
    }

    const fecha = new Date().toLocaleString("es-MX", { timeZone: "America/Mexico_City" })

    const from = process.env.RESEND_FROM || "CITY ENERGY <onboarding@resend.dev>"
    const to = process.env.CONTACT_TO_EMAIL || "hola@cityenergy.com.mx"

    const { data, error } = await resend.emails.send({
      from,
      to: [to],
      subject: `Nueva solicitud de contacto | CityEnergy | ${validatedData.nombre}`,
      react: ContactLeadEmail({
        tipo: validatedData.tipo,
        nombre: validatedData.nombre,
        email: validatedData.email,
        telefono: validatedData.telefono,
        empresa: validatedData.empresa,
        mensaje: validatedData.mensaje,
        fecha,
      }),
      replyTo: validatedData.email,
    })

    if (error) {
      console.error("Error sending email:", error)
      return NextResponse.json(
        { error: "Error al enviar el correo" },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { 
        success: true, 
        message: "Solicitud enviada correctamente",
        id: data?.id 
      },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Datos inválidos", details: error.issues },
        { status: 400 }
      )
    }

    console.error("Error in contact API:", error)
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    )
  }
}
