import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import Projects from './components/Projects'
import Founder from './components/Founder'
import Team from './components/Team'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MobileCTA from './components/MobileCTA'

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  const openContact = () => setIsContactOpen(true)
  const closeContact = () => setIsContactOpen(false)

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar onContactClick={openContact} />
      <main className="pb-safe">
        <Hero onContactClick={openContact} />
        <Stats />
        <Services />
        <Projects />
        <Founder />
        <Team />
        <Process />
        <Contact
          isModalOpen={isContactOpen}
          onModalClose={closeContact}
        />
      </main>
      <Footer />
      <MobileCTA onContactClick={openContact} />
    </div>
  )
}
