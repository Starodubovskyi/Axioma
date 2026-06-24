import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navHrefs } from '../data/content'
import { useLanguage } from '../i18n/context'
import LanguageSwitcher from './LanguageSwitcher'

interface NavbarProps {
  onContactClick: () => void
}

export default function Navbar({ onContactClick }: NavbarProps) {
  const { t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const navLabels: Record<(typeof navHrefs)[number]['key'], string> = {
    services: t.nav.services,
    projects: t.nav.projects,
    founder: t.nav.founder,
    team: t.nav.team,
    contact: t.nav.contact,
  }

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileOpen])

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false)
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }, 150)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileOpen
            ? 'glass-strong shadow-lg shadow-black/10'
            : 'bg-dark-900/40 backdrop-blur-md'
        }`}
      >
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20 gap-3">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              className="flex items-center gap-2.5 group shrink-0"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-glow-sm">
                <span className="text-dark-950 font-display font-bold text-sm">A</span>
              </div>
              <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-white">AXIOMA</span>
            </a>

            <div className="hidden lg:flex items-center gap-6">
              {navHrefs.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm text-zinc-400 hover:text-white transition-colors relative group py-2"
                >
                  {navLabels[link.key]}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300 rounded-full" />
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <LanguageSwitcher />
              <button onClick={onContactClick} className="btn-primary text-sm !px-5 !py-2.5 !min-h-[40px]">
                {t.nav.contactBtn}
              </button>
            </div>

            <div className="flex md:hidden items-center gap-2">
              <LanguageSwitcher compact />
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="p-2.5 rounded-xl glass min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label={t.nav.menu}
              >
                {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-dark-900/80 backdrop-blur-xl"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="absolute bottom-0 left-0 right-0 glass-strong rounded-t-3xl p-6 pt-8 mobile-safe-bottom max-h-[85dvh] overflow-y-auto"
            >
              <div className="w-10 h-1 rounded-full bg-white/20 mx-auto mb-6" />
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-4 px-2">{t.nav.menu}</p>
              <div className="flex flex-col gap-1">
                {navHrefs.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left px-4 py-4 rounded-2xl text-lg font-medium text-slate-200 hover:bg-white/[0.08] active:bg-white/[0.12] transition-colors min-h-[52px]"
                  >
                    {navLabels[link.key]}
                  </motion.button>
                ))}
              </div>
              <motion.button
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navHrefs.length * 0.04 }}
                onClick={() => { setIsMobileOpen(false); onContactClick() }}
                className="btn-primary mt-5 w-full text-base"
              >
                {t.nav.contactBtnMobile}
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
