"use client"

import { Button } from "@/components/ui/button"
import { Smartphone, Zap, MapPin, Clock, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export function Hero() {
  const [showDownloadModal, setShowDownloadModal] = useState(false)

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/header-background.jpeg')" }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background/90" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 left-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="container relative mx-auto px-4">
        <div className="flex justify-end">
          <Link href="/flotas"></Link>
        </div>
      </div>

      <div className="container relative mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 text-sm font-medium text-white">
              <Zap className="h-4 w-4 text-accent fill-accent" />
              Carga rápida en toda la ciudad
            </div>

            <Image
              src="/logos/c1_Mesa de trabajo 1.png"
              alt="CITY ENERGY Logo"
              width={300}
              height={80}
              className="h-16 lg:h-20 w-auto mx-auto brightness-0 invert"
            />

            <div className="space-y-6">
              <h2 className="text-5xl lg:text-8xl font-bold leading-tight">
                <span className="text-white">Electrificando tu </span>
                <span className="text-accent animate-pulse">{"manejo"}</span>
              </h2>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed text-pretty max-w-3xl mx-auto">
                Carga inteligente, rápida y confiable. Encuentra tu estación más cercana y carga tu auto eléctrico en
                minutos.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => setShowDownloadModal(true)}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all"
              >
                <Smartphone className="mr-2 h-5 w-5" />
                Descargar App Gratis
              </Button>
              <Link href="/mapa">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 bg-transparent text-white text-lg px-8 py-6 hover:bg-white/10"
                >
                  <MapPin className="mr-2 h-5 w-5" />
                  Ver estaciones
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 max-w-3xl mx-auto">
              <div className="bg-card/50 backdrop-blur-sm border rounded-xl p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-1 justify-center">
                  <MapPin className="h-4 w-4 text-accent" />
                  <div className="text-3xl font-bold text-secondary">500+</div>
                </div>
                <div className="text-sm text-muted-foreground">Estaciones</div>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border rounded-xl p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-1 justify-center">
                  <Zap className="h-4 w-4 text-accent" />
                  <div className="text-3xl font-bold text-secondary">50K+</div>
                </div>
                <div className="text-sm text-muted-foreground">Usuarios</div>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border rounded-xl p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-1 justify-center">
                  <Clock className="h-4 w-4 text-accent" />
                  <div className="text-3xl font-bold text-secondary">24/7</div>
                </div>
                <div className="text-sm text-muted-foreground">Disponible</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showDownloadModal && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowDownloadModal(false)}
        >
          <div
            className="bg-background rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-in fade-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowDownloadModal(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="text-center space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full">
                <Smartphone className="h-8 w-8 text-accent" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-secondary">Descarga CITY ENERGY</h3>
                <p className="text-muted-foreground">Disponible para iOS y Android</p>
              </div>

              <div className="space-y-3 pt-4">
                <a
                  href="https://apps.apple.com/mx/app/city-energy/id6648792582"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-secondary text-secondary-foreground rounded-xl py-4 px-6 hover:bg-secondary/90 transition-all hover:scale-105 font-semibold"
                >
                  <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-80">Descargar en</div>
                    <div className="text-base font-bold">App Store</div>
                  </div>
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.enerlink.evx.cityenergy&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-secondary text-secondary-foreground rounded-xl py-4 px-6 hover:bg-secondary/90 transition-all hover:scale-105 font-semibold"
                >
                  <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-80">Disponible en</div>
                    <div className="text-base font-bold">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
