import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { useLanguage } from '../i18n/context'

interface MobileCTAProps {
  onContactClick: () => void
}

export default function MobileCTA({ onContactClick }: MobileCTAProps) {
  const { t } = useLanguage()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 22, stiffness: 280 }}
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden p-4 mobile-safe-bottom"
        >
          <div className="glass-strong rounded-2xl p-2 shadow-2xl shadow-black/30">
            <button onClick={onContactClick} className="btn-primary w-full rounded-xl text-base">
              <MessageCircle size={20} />
              {t.mobileCta}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
