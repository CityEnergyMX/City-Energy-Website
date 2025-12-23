"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Loader2, CheckCircle2 } from "lucide-react"

interface FormData {
  nombre: string
  telefono: string
  email: string
  empresa: string
  mensaje: string
}

interface ContactFormModalProps {
  isOpen: boolean
  onClose: () => void
  tipo: "demo" | "asesor" | "consulta" | "plan"
  planName?: string
}

export function ContactFormModal({ isOpen, onClose, tipo, planName }: ContactFormModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    mode: "onTouched",
  })
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const titles = {
    demo: "Solicitar Demo",
    asesor: "Hablar con un Asesor",
    consulta: "Agendar Consulta",
    plan: `Contratar Plan${planName ? `: ${planName}` : ""}`,
  }

  const onSubmit = async (formData: FormData) => {
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          tipo,
          mensaje: planName ? `${formData.mensaje}\n\nPlan seleccionado: ${planName}` : formData.mensaje,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Error al enviar la solicitud")
      }

      setIsSuccess(true)
      setTimeout(() => {
        onClose()
        setIsSuccess(false)
        reset()
      }, 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al enviar la solicitud")
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        {isSuccess ? (
          <div className="text-center py-8">
            <CheckCircle2 className="h-16 w-16 text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-secondary mb-2">¡Solicitud Enviada!</h3>
            <p className="text-muted-foreground">
              Nos pondremos en contacto contigo muy pronto.
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-secondary">{titles[tipo]}</DialogTitle>
            </DialogHeader>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Nombre completo <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  {...register("nombre", {
                    required: "El nombre es obligatorio",
                    minLength: {
                      value: 2,
                      message: "El nombre debe tener al menos 2 caracteres",
                    },
                  })}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background ${
                    errors.nombre ? "border-red-500" : ""
                  }`}
                  placeholder="Juan Pérez"
                />
                {errors.nombre && (
                  <p className="text-red-500 text-sm mt-1">{errors.nombre.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Teléfono <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  {...register("telefono", {
                    required: "El teléfono es obligatorio",
                    pattern: {
                      value: /^[0-9]{10,14}$/,
                      message: "El teléfono debe contener solo números (10-14 dígitos)",
                    },
                  })}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background ${
                    errors.telefono ? "border-red-500" : ""
                  }`}
                  placeholder="5512345678"
                  maxLength={14}
                  onKeyPress={(e) => {
                    if (!/[0-9]/.test(e.key)) {
                      e.preventDefault()
                    }
                  }}
                />
                {errors.telefono && (
                  <p className="text-red-500 text-sm mt-1">{errors.telefono.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: "El email es obligatorio",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Email inválido",
                    },
                  })}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  placeholder="juan@empresa.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Empresa</label>
                <input
                  type="text"
                  {...register("empresa")}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                  placeholder="Mi Empresa S.A."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Mensaje (opcional)</label>
                <textarea
                  {...register("mensaje")}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background resize-none"
                  rows={3}
                  placeholder="Cuéntanos más sobre tus necesidades..."
                />
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Enviar Solicitud"
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Al enviar este formulario, aceptas que nos comuniquemos contigo para brindarte información sobre
                nuestros servicios.
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
