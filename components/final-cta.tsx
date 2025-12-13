import { Button } from "@/components/ui/button"
import { Apple, Play } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">
              Carga tu vehículo con tecnología inteligente
            </h2>
            <p className="text-xl text-secondary-foreground/80 text-pretty max-w-2xl mx-auto">
              Únete a miles de usuarios que ya disfrutan de la mejor experiencia de carga para vehículos eléctricos
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            >
              <a
                href="https://apps.apple.com/mx/app/city-energy/id6648792582"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Apple className="mr-2 h-5 w-5" />
                Descargar en App Store
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            >
              <a
                href="https://play.google.com/store/apps/details?id=com.enerlink.evx.cityenergy&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Play className="mr-2 h-5 w-5" />
                Descargar en Google Play
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-12 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">4.8</div>
              <div className="text-sm text-secondary-foreground/70">★★★★★</div>
              <div className="text-sm text-secondary-foreground/70">Calificación</div>
            </div>
            <div className="h-12 w-px bg-secondary-foreground/20" />
            <div className="text-center">
              <div className="text-3xl font-bold">50K+</div>
              <div className="text-sm text-secondary-foreground/70">Descargas</div>
            </div>
            <div className="h-12 w-px bg-secondary-foreground/20" />
            <div className="text-center">
              <div className="text-3xl font-bold">2M+</div>
              <div className="text-sm text-secondary-foreground/70">Cargas realizadas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
