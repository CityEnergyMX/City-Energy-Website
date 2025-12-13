import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Zap className="h-8 w-8 text-accent fill-accent" />
              <div>
                <div className="text-xl font-bold">CITY</div>
                <div className="text-xs text-secondary-foreground/70">ENERGY</div>
              </div>
            </div>
            <p className="text-sm text-secondary-foreground/70 leading-relaxed">
              Liderando la revolución de la movilidad eléctrica con tecnología inteligente y sostenible.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-secondary-foreground/10 p-2 rounded-lg hover:bg-accent/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-secondary-foreground/10 p-2 rounded-lg hover:bg-accent/20 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/cityenergymx/?hl=es" target="_blank" rel="noopener noreferrer" className="bg-secondary-foreground/10 p-2 rounded-lg hover:bg-accent/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/city-energy-m-xico/?originalSubdomain=mx" target="_blank" rel="noopener noreferrer" className="bg-secondary-foreground/10 p-2 rounded-lg hover:bg-accent/20 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Producto</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Estaciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  App móvil
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Soluciones empresariales
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Precios
                </a>
              </li>
            </ul>
          </div>

          {/* <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Carreras
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div> */
        }

          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm text-secondary-foreground/70">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-accent" />
                <span>hola@cityenergy.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-accent" />
                <span>+52 55 1234 5678</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-accent" />
                <span>Ciudad de México, México</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/70">
          <p>© {new Date().getFullYear()} CITY ENERGY. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">
              Política de privacidad
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Términos y condiciones
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Aviso legal
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
