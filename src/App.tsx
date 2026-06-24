import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import Projects from './components/Projects'
import Team from './components/Team'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  const openContact = () => setIsContactOpen(true)
  const closeContact = () => setIsContactOpen(false)

  return (
    <div className="min-h-screen">
      <Navbar onContactClick={openContact} />
      <main>
        <Hero onContactClick={openContact} />
        <Stats />
        <Services />
        <Projects />
        <Team />
        <Process />
        <Contact
          isModalOpen={isContactOpen}
          onModalClose={closeContact}
          onModalOpen={openContact}
        />
      </main>
      <Footer />
    </div>
  )
}
