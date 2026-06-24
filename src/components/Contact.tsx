import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react'
import { useLanguage } from '../i18n/context'
import Modal from './Modal'

interface ContactProps {
  isModalOpen: boolean
  onModalClose: () => void
}

export default function Contact({ isModalOpen, onModalClose }: ContactProps) {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
      onModalClose()
    }, 2500)
  }

  const formContent = (
    <form onSubmit={handleSubmit} className="space-y-5">
      {isSubmitted ? (
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
          <CheckCircle2 size={48} className="text-emerald-400 mx-auto mb-4" />
          <h3 className="font-display text-xl font-semibold mb-2">{t.contact.thanksTitle}</h3>
          <p className="text-slate-400">{t.contact.thanksDesc}</p>
        </motion.div>
      ) : (
        <>
          <div>
            <label htmlFor="name" className="block text-sm text-slate-400 mb-2">{t.contact.nameLabel}</label>
            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-4 sm:py-3 rounded-xl glass bg-dark-700/50 text-white placeholder:text-zinc-600 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/15 transition-all text-base"
              placeholder={t.contact.namePlaceholder}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-slate-400 mb-2">{t.contact.emailLabel}</label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-4 sm:py-3 rounded-xl glass bg-dark-700/50 text-white placeholder:text-zinc-600 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/15 transition-all text-base"
              placeholder="email@company.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm text-slate-400 mb-2">{t.contact.messageLabel}</label>
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-4 sm:py-3 rounded-xl glass bg-dark-700/50 text-white placeholder:text-zinc-600 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/15 transition-all resize-none text-base"
              placeholder={t.contact.messagePlaceholder}
            />
          </div>
          <button type="submit" className="btn-primary w-full">
            {t.contact.submit}
            <Send size={16} />
          </button>
        </>
      )}
    </form>
  )

  return (
    <>
      <section id="contact" className="section-padding relative">
        <div className="container-custom relative">
          <div className="glass-strong rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-6 sm:p-10 lg:p-14">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <span className="section-label">{t.contact.label}</span>
                  <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-balance text-white">
                    {t.contact.title}{' '}
                    <span className="gradient-text">{t.contact.titleHighlight}</span>
                  </h2>
                  <p className="text-zinc-400 mb-8 leading-relaxed">{t.contact.desc}</p>

                  <div className="space-y-4">
                    <a href="mailto:hello@axioma.dev" className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors">
                      <div className="w-10 h-10 rounded-xl glass flex items-center justify-center shrink-0">
                        <Mail size={18} className="text-cyan-400" />
                      </div>
                      hello@axioma.dev
                    </a>
                    <a href="tel:+380441234567" className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors">
                      <div className="w-10 h-10 rounded-xl glass flex items-center justify-center shrink-0">
                        <Phone size={18} className="text-cyan-400" />
                      </div>
                      +38 (044) 123-45-67
                    </a>
                    <div className="flex items-center gap-3 text-zinc-400">
                      <div className="w-10 h-10 rounded-xl glass flex items-center justify-center shrink-0">
                        <MapPin size={18} className="text-cyan-400" />
                      </div>
                      {t.contact.location}
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="p-6 sm:p-10 lg:p-14 bg-dark-800/40 border-t lg:border-t-0 lg:border-l border-white/[0.06]">
                {formContent}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={onModalClose} title={t.contact.modalTitle}>
        <div className="p-6">{formContent}</div>
      </Modal>
    </>
  )
}
