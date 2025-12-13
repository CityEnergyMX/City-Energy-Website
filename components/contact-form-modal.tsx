"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Loader2, CheckCircle2 } from "lucide-react"

interface ContactFormModalProps {
  isOpen: boolean
  onClose: () => void
  tipo: "demo" | "asesor" | "consulta" | "plan"
  planName?: string
}

export function ContactFormModal({ isOpen, onClose, tipo, planName }: ContactFormModalProps) {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    empresa: "",
    mensaje: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const titles = {
    demo: "Solicitar Demo",
    asesor: "Hablar con un Asesor",
    consulta: "Agendar Consulta",
    plan: `Contratar Plan${planName ? `: ${planName}` : ""}`,
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
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
        setFormData({ nombre: "", telefono: "", email: "", empresa: "", mensaje: "" })
      }, 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al enviar la solicitud")
    } finally {
      setIsSubmitting(false)
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

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Nombre completo <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                  placeholder="Juan Pérez"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Teléfono <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                  placeholder="55 1234 5678"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                  placeholder="juan@empresa.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Empresa</label>
                <input
                  type="text"
                  value={formData.empresa}
                  onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                  placeholder="Mi Empresa S.A."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Mensaje (opcional)</label>
                <textarea
                  value={formData.mensaje}
                  onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
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
