"use client"

import { useState, useEffect, useRef } from "react"
import { MapPin, Search, Filter, Clock, Navigation2, Locate, Info, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import dynamic from "next/dynamic"
import "leaflet/dist/leaflet.css"
import "./fix-leaflet-icons"
import { stations, type Station } from "@/lib/stations"

const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false })
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false })
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false })
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false })

export default function MapaPage() {
  const [selectedStation, setSelectedStation] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredStations, setFilteredStations] = useState<Station[]>(stations)
  const [mapCenter, setMapCenter] = useState<[number, number]>([19.4326, -99.1332])
  const [mapZoom, setMapZoom] = useState(12)
  const [selectedEstado, setSelectedEstado] = useState<string>("")
  const [selectedCiudad, setSelectedCiudad] = useState<string>("")
  const [showFilters, setShowFilters] = useState(false)
  const [isLoadingLocation, setIsLoadingLocation] = useState(false)
  const [locationError, setLocationError] = useState<string | null>(null)
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null)
  const [locationAttempt, setLocationAttempt] = useState(0)

  const stationItemRefs = useRef<Record<number, HTMLDivElement | null>>({})

  const estados = Array.from(new Set(stations.map((s) => s.estado))).sort()
  const ciudades = selectedEstado
    ? Array.from(new Set(stations.filter((s) => s.estado === selectedEstado).map((s) => s.ciudad))).sort()
    : Array.from(new Set(stations.map((s) => s.ciudad))).sort()

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

  const findNearestStation = (lat: number, lng: number) => {
    let nearest = stations[0]
    let minDistance = calculateDistance(lat, lng, nearest.lat, nearest.lng)

    stations.forEach((station) => {
      const distance = calculateDistance(lat, lng, station.lat, station.lng)
      if (distance < minDistance) {
        minDistance = distance
        nearest = station
      }
    })

    return nearest
  }

  const requestGeolocation = (options: PositionOptions) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLat = position.coords.latitude
        const userLng = position.coords.longitude
        setUserLocation([userLat, userLng])

        const nearest = findNearestStation(userLat, userLng)
        setSelectedStation(nearest.id)
        setMapCenter([nearest.lat, nearest.lng])
        setMapZoom(15)
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
          errorMessage = "Permiso de ubicación denegado. Puedes buscar una estación manualmente o intentar de nuevo."
        } else if (error.code === error.POSITION_UNAVAILABLE) {
          errorMessage = "Ubicación no disponible. Revisa GPS/Señal e inténtalo nuevamente."
        } else if (error.code === error.TIMEOUT) {
          errorMessage = "Tiempo de espera agotado. Intenta nuevamente en unos segundos."
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

  useEffect(() => {
    let filtered = stations.filter(
      (station) =>
        (station.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          station.address.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (selectedEstado === "" || station.estado === selectedEstado) &&
        (selectedCiudad === "" || station.ciudad === selectedCiudad)
    )
    setFilteredStations(filtered)

    if (filtered.length > 0) {
      const avgLat = filtered.reduce((sum, s) => sum + s.lat, 0) / filtered.length
      const avgLng = filtered.reduce((sum, s) => sum + s.lng, 0) / filtered.length
      setMapCenter([avgLat, avgLng])
      setMapZoom(filtered.length === 1 ? 15 : 12)
    }
  }, [searchQuery, selectedEstado, selectedCiudad])

  useEffect(() => {
    if (selectedStation == null) return
    const el = stationItemRefs.current[selectedStation]
    if (!el) return
    el.scrollIntoView({ behavior: "smooth", block: "center" })
  }, [selectedStation, filteredStations])

  const clearFilters = () => {
    setSelectedEstado("")
    setSelectedCiudad("")
    setSearchQuery("")
  }

  const handleStationClick = (station: Station) => {
    if (selectedStation === station.id) {
      setSelectedStation(null)
      const avgLat = filteredStations.reduce((sum, s) => sum + s.lat, 0) / filteredStations.length
      const avgLng = filteredStations.reduce((sum, s) => sum + s.lng, 0) / filteredStations.length
      setMapCenter([avgLat, avgLng])
      setMapZoom(12)
    } else {
      setSelectedStation(station.id)
      setMapCenter([station.lat, station.lng])
      setMapZoom(15)
    }
  }

  const openInGoogleMaps = (station: Station) => {
    window.open(station.link, "_blank")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Zap className="h-8 w-8 text-accent fill-accent" />
            <div>
              <h1 className="text-xl font-bold text-secondary leading-none">CITY</h1>
              <p className="text-sm text-accent font-bold leading-none">ENERGY</p>
            </div>
          </Link>
          <Link href="/">
            <Button variant="outline">Volver al inicio</Button>
          </Link>
        </div>
      </header>

      <div className="flex flex-col md:flex-row h-[calc(100vh-73px)]">
        {/* Sidebar */}
        <div className="w-full md:w-96 bg-card border-r overflow-y-auto max-h-[50vh] md:max-h-full">
          <div className="p-6 space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-bold text-secondary">Estaciones disponibles</h2>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={getUserLocation}
                  disabled={isLoadingLocation}
                  className="gap-2"
                >
                  {isLoadingLocation ? (
                    <>
                      <div className="h-4 w-4 border-2 border-accent border-t-transparent rounded-full animate-spin" />
                      Ubicando...
                    </>
                  ) : (
                    <>
                      <Locate className="h-4 w-4" />
                      Mi ubicación
                    </>
                  )}
                </Button>
              </div>
              <p className="text-muted-foreground">Encuentra tu estación más cercana</p>
              {locationError && (
                <div className="mt-2 text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg p-2">
                  {locationError}
                </div>
              )}
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar por ubicación..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-background"
              />
            </div>

            {/* Filters */}
            <div className="space-y-3">
              <Button
                size="sm"
                variant="outline"
                className="w-full bg-transparent"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="mr-2 h-4 w-4" />
                {showFilters ? "Ocultar filtros" : "Mostrar filtros"}
              </Button>

              {showFilters && (
                <div className="space-y-3 p-4 border rounded-lg bg-background">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Estado</label>
                    <select
                      value={selectedEstado}
                      onChange={(e) => {
                        setSelectedEstado(e.target.value)
                        setSelectedCiudad("")
                      }}
                      className="w-full p-2 border rounded-lg bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="">Todos los estados</option>
                      {estados.map((estado) => (
                        <option key={estado} value={estado}>
                          {estado}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Ciudad</label>
                    <select
                      value={selectedCiudad}
                      onChange={(e) => setSelectedCiudad(e.target.value)}
                      className="w-full p-2 border rounded-lg bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                      disabled={!selectedEstado && ciudades.length > 10}
                    >
                      <option value="">Todas las ciudades</option>
                      {ciudades.map((ciudad) => (
                        <option key={ciudad} value={ciudad}>
                          {ciudad}
                        </option>
                      ))}
                    </select>
                  </div>

                  {(selectedEstado || selectedCiudad || searchQuery) && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full"
                      onClick={clearFilters}
                    >
                      Limpiar filtros
                    </Button>
                  )}

                  <div className="text-xs text-muted-foreground pt-2 border-t">
                    {filteredStations.length} estación{filteredStations.length !== 1 ? "es" : ""} encontrada{filteredStations.length !== 1 ? "s" : ""}
                  </div>
                </div>
              )}
            </div>

            {/* Stations List */}
            <div className="space-y-3">
              {filteredStations.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <p>No se encontraron estaciones</p>
                </div>
              ) : (
                filteredStations.map((station) => (
                <div
                  key={station.id}
                  className="space-y-2"
                  ref={(el) => {
                    stationItemRefs.current[station.id] = el
                  }}
                >
                <button
                  onClick={() => handleStationClick(station)}
                  className={`w-full p-4 rounded-xl border text-left transition-all hover:shadow-md ${
                    selectedStation === station.id
                      ? "border-accent bg-accent/5 shadow-md"
                      : "border-border bg-background hover:border-accent/50"
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
                      <h3 className="font-semibold text-secondary">{station.name}</h3>
                    </div>
                    <div
                      className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                        station.status === "available"
                          ? "bg-green-500/10 text-green-600"
                          : station.status === "busy"
                            ? "bg-yellow-500/10 text-yellow-600"
                            : "bg-red-500/10 text-red-600"
                      }`}
                    >
                      <div
                        className={`h-2 w-2 rounded-full ${
                          station.status === "available"
                            ? "bg-green-500"
                            : station.status === "busy"
                              ? "bg-yellow-500"
                              : "bg-red-500"
                        }`}
                      />
                      {station.status === "available"
                        ? "Disponible"
                        : station.status === "busy"
                          ? "Ocupado"
                          : "Mantenimiento"}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{station.address}</p>
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <span className="px-2 py-1 rounded-full bg-muted text-muted-foreground text-xs">
                      {station.tipo}
                    </span>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-accent" />
                      <span>{station.horario}</span>
                    </div>
                    {station.observaciones && (
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Info className="h-4 w-4" />
                        <span className="text-xs">{station.observaciones}</span>
                      </div>
                    )}
                  </div>
                </button>
                {selectedStation === station.id && (
                  <Button
                    onClick={() => openInGoogleMaps(station)}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                    size="sm"
                  >
                    <Navigation2 className="mr-2 h-4 w-4" />
                    Abrir en Google Maps
                  </Button>
                )}
                </div>
              ))
              )}
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="flex-1 relative bg-muted/30 min-h-[50vh] md:min-h-0 px-4 pb-4 md:px-0 md:pb-0">
          <div className="h-full w-full overflow-hidden rounded-2xl border bg-card shadow-sm md:rounded-none md:border-0 md:bg-transparent md:shadow-none">
            <MapContainer
              center={mapCenter}
              zoom={mapZoom}
              className="w-full h-full"
              key={`${mapCenter[0]}-${mapCenter[1]}-${mapZoom}`}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {filteredStations.map((station) => (
                <Marker
                  key={station.id}
                  position={[station.lat, station.lng]}
                  eventHandlers={{
                    click: () => {
                      setSelectedStation(station.id)
                      setMapCenter([station.lat, station.lng])
                      setMapZoom(15)
                    },
                  }}
                >
                  <Popup>
                    <div className="p-2">
                      <h3 className="font-bold text-sm mb-1">{station.name}</h3>
                      <p className="text-xs text-gray-600 mb-2">{station.address}</p>
                      <div className="flex items-center gap-2 text-xs mb-2">
                        <span
                          className={`px-2 py-1 rounded-full ${
                            station.status === "available"
                              ? "bg-green-100 text-green-700"
                              : station.status === "busy"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-red-100 text-red-700"
                          }`}
                        >
                          {station.status === "available"
                            ? "Disponible"
                            : station.status === "busy"
                              ? "Ocupado"
                              : "Mantenimiento"}
                        </span>
                      </div>
                      <div className="text-xs space-y-1">
                        <div>{station.tipo}</div>
                        <div>Horario: {station.horario}</div>
                        {station.observaciones ? <div>{station.observaciones}</div> : null}
                      </div>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  )
}
