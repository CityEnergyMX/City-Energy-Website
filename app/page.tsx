import { Hero } from "@/components/hero"
import { StationsMap } from "@/components/stations-map"
import { HowItWorks } from "@/components/how-it-works"
import { KeyFeatures } from "@/components/key-features"
import { Differentiators } from "@/components/differentiators"
import { StrategicAlliances } from "@/components/strategic-alliances"
import { FleetSection } from "@/components/fleet-section"
import { AboutUs } from "@/components/about-us"
import { FAQ } from "@/components/faq"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Hero />
      <StationsMap />
      <HowItWorks />
      <KeyFeatures />
      <Differentiators />
      <StrategicAlliances />
      <FleetSection />
      <AboutUs />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
