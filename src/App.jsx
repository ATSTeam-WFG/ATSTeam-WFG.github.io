import BgGlow from './components/shared/BgGlow'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'

import Hero from './components/sections/Hero/Hero'
import Vision from './components/sections/Vision/Vision'
import ATSJourney from './components/sections/ATSJourney/ATSJourney'
import AIOperatingModel from './components/sections/AIOperatingModel/AIOperatingModel'
import CapabilityPillars from './components/sections/CapabilityPillars/CapabilityPillars'
import ProductEcosystem from './components/sections/ProductEcosystem/ProductEcosystem'
import Impact from './components/sections/Impact/Impact'
import PrototypeShowcase from './components/sections/PrototypeShowcase/PrototypeShowcase'
import Testimonials from './components/sections/Testimonials/Testimonials'
import VideoGallery from './components/sections/VideoGallery/VideoGallery'
import Team from './components/sections/Team/Team'
import Newsletter from './components/sections/Newsletter/Newsletter'
import Contact from './components/sections/Contact/Contact'

export default function App() {
  return (
    <>
      <BgGlow />
      <Nav />
      <main>
        <Hero />
        <Vision />
        <ATSJourney />
        <AIOperatingModel />
        <CapabilityPillars />
        <ProductEcosystem />
        <Impact />
        <PrototypeShowcase />
        <Testimonials />
        <VideoGallery />
        <Team />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
