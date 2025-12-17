"use client"

import { useEffect, useMemo, useState } from "react"
import { Locate, MapPin, Navigation, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import dynamic from "next/dynamic"
import "leaflet/dist/leaflet.css"
import "@/app/mapa/fix-leaflet-icons"
import { stations } from "@/lib/stations"

const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false })
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false })
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false })
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false })

const createCustomIcon = (isNearest: boolean) => {
  if (typeof window === "undefined") return undefined
  const L = require("leaflet")
  
  if (isNearest) {
    return new L.Icon({
      iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
      shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      iconSize: [30, 48],
      iconAnchor: [15, 48],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    })
  }
  
  // Icono azul normal para las demás estaciones
  return new L.Icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  })
}

export function StationsMap() {
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null)
  const [isLoadingLocation, setIsLoadingLocation] = useState(false)
  const [locationError, setLocationError] = useState<string | null>(null)
  const [locationAttempt, setLocationAttempt] = useState(0)

  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    const R = 6371
    const dLat = (lat2 - lat1) * (Math.PI / 180)
    const dLon = (lon2 - lon1) * (Math.PI / 180)
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    return R * c
  }

  const nearestStation = useMemo(() => {
    if (!userLocation) return null
    const [lat, lng] = userLocation

    let nearest = stations[0]
    let minDistance = calculateDistance(lat, lng, nearest.lat, nearest.lng)

    stations.forEach((station) => {
      const distance = calculateDistance(lat, lng, station.lat, station.lng)
      if (distance < minDistance) {
        minDistance = distance
        nearest = station
      }
    })

    return { station: nearest, distanceKm: minDistance }
  }, [userLocation])

  const mapCenter: [number, number] = nearestStation
    ? [nearestStation.station.lat, nearestStation.station.lng]
    : [stations[0].lat, stations[0].lng]

  const stationsToRender = useMemo(() => {
    const base = stations.slice(0, 10)
    if (!nearestStation) return base
    const exists = base.some((s) => s.id === nearestStation.station.id)
    return exists ? base : [...base, nearestStation.station]
  }, [nearestStation])

  const requestGeolocation = (options: PositionOptions) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation([position.coords.latitude, position.coords.longitude])
        setIsLoadingLocation(false)
      },
      (error) => {
        const shouldRetry =
          (error.code === error.TIMEOUT || error.code === error.POSITION_UNAVAILABLE) && locationAttempt === 0

        if (shouldRetry) {
          setLocationAttempt(1)
          requestGeolocation({ enableHighAccuracy: false, timeout: 20000, maximumAge: 60000 })
          return
        }

        let errorMessage = "No se pudo obtener tu ubicación"
        if (error.code === error.PERMISSION_DENIED) {
          errorMessage = "Permiso de ubicación denegado"
        } else if (error.code === error.POSITION_UNAVAILABLE) {
          errorMessage = "Ubicación no disponible"
        } else if (error.code === error.TIMEOUT) {
          errorMessage = "Tiempo de espera agotado"
        }
        setLocationError(errorMessage)
        setIsLoadingLocation(false)
      },
      options
    )
  }

  const getUserLocation = () => {
    if (!navigator.geolocation) {
      setLocationError("Tu navegador no soporta geolocalización")
      return
    }

    setIsLoadingLocation(true)
    setLocationError(null)
    setLocationAttempt(0)

    requestGeolocation({ enableHighAccuracy: true, timeout: 12000, maximumAge: 0 })
  }

  useEffect(() => {
    getUserLocation()
  }, [])

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold text-secondary">Encuentra tu estación más cercana</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Más de 70 conectores disponibles en todo el país
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-xl bg-card border">
            <div className="h-[360px] sm:h-[420px]">
              <MapContainer center={mapCenter} zoom={nearestStation ? 6 : 5} className="w-full h-full">
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {stationsToRender.map((station) => {
                  const isNearest = nearestStation?.station.id === station.id
                  return (
                    <Marker
                      key={station.id}
                      position={[station.lat, station.lng]}
                      icon={createCustomIcon(isNearest)}
                    >
                      <Popup>
                        <div className="p-2">
                          <div className="font-semibold text-sm">
                            {station.name}
                            {isNearest && <span className="text-accent ml-2">⚡ Más cercana</span>}
                          </div>
                          <div className="text-xs text-muted-foreground">{station.address}</div>
                        </div>
                      </Popup>
                    </Marker>
                  )
                })}
              </MapContainer>
            </div>
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-3">
              <div className="bg-background/90 backdrop-blur border rounded-xl px-3 py-2 text-sm font-medium flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                Mapa interactivo de estaciones
              </div>
              <Button size="sm" variant="outline" onClick={getUserLocation} disabled={isLoadingLocation} className="bg-background/90 backdrop-blur">
                <Locate className="mr-2 h-4 w-4" />
                {isLoadingLocation ? "Ubicando..." : "Mi ubicación"}
              </Button>
            </div>
          </div>

          <div className="rounded-2xl bg-card border shadow-xl p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-accent/10 w-10 h-10 rounded-lg flex items-center justify-center">
                <Zap className="h-5 w-5 text-accent" />
              </div>
              <div>
                <div className="font-bold text-secondary">Cerca de ti</div>
                <div className="text-sm text-muted-foreground">Ubicación más cercana (si das permiso)</div>
              </div>
            </div>

            {locationError && (
              <div className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg p-2 mb-4">
                {locationError}
              </div>
            )}

            {nearestStation ? (
              <div className="space-y-2 mb-6">
                <div className="text-lg font-semibold text-secondary">{nearestStation.station.name}</div>
                <div className="text-sm text-muted-foreground">{nearestStation.station.address}</div>
                <div className="text-sm">
                  Distancia aproximada: <span className="font-semibold">{nearestStation.distanceKm.toFixed(1)} km</span>
                </div>
              </div>
            ) : (
              <div className="space-y-2 mb-6">
                <div className="text-sm text-muted-foreground">
                  Activa tu ubicación para sugerirte automáticamente la estación más cercana.
                </div>
              </div>
            )}

            <div className="mt-auto space-y-3">
              <Link href="/mapa">
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Navigation className="mr-2 h-4 w-4" />
                  Ver mapa completo
                </Button>
              </Link>
              <p className="text-xs text-muted-foreground text-center">
                En el mapa completo puedes filtrar por estado/ciudad y abrir direcciones en Google Maps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
