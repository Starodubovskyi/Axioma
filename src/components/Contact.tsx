import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react'
import Modal from './Modal'

interface ContactProps {
  isModalOpen: boolean
  onModalClose: () => void
  onModalOpen: () => void
}

export default function Contact({ isModalOpen, onModalClose, onModalOpen }: ContactProps) {
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
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <CheckCircle2 size={48} className="text-emerald-400 mx-auto mb-4" />
          <h3 className="font-display text-xl font-semibold mb-2">Дякуємо!</h3>
          <p className="text-white/50">Ми зв&apos;яжемось з вами найближчим часом.</p>
        </motion.div>
      ) : (
        <>
          <div>
            <label htmlFor="name" className="block text-sm text-white/60 mb-2">Ім&apos;я</label>
            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl glass bg-white/[0.03] text-white placeholder:text-white/30 focus:outline-none focus:border-axiom-500/50 focus:ring-1 focus:ring-axiom-500/30 transition-all"
              placeholder="Ваше ім'я"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-white/60 mb-2">Email</label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl glass bg-white/[0.03] text-white placeholder:text-white/30 focus:outline-none focus:border-axiom-500/50 focus:ring-1 focus:ring-axiom-500/30 transition-all"
              placeholder="email@company.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm text-white/60 mb-2">Повідомлення</label>
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl glass bg-white/[0.03] text-white placeholder:text-white/30 focus:outline-none focus:border-axiom-500/50 focus:ring-1 focus:ring-axiom-500/30 transition-all resize-none"
              placeholder="Розкажіть про ваш проєкт..."
            />
          </div>
          <button type="submit" className="btn-primary w-full">
            Надіслати
            <Send size={16} />
          </button>
        </>
      )}
    </form>
  )

  return (
    <>
      <section id="contact" className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-t from-axiom-950/30 to-transparent pointer-events-none" />

        <div className="container-custom relative">
          <div className="glass-strong rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 sm:p-12 lg:p-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="text-axiom-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
                    Контакти
                  </span>
                  <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-balance">
                    Готові обговорити{' '}
                    <span className="gradient-text">ваш проєкт?</span>
                  </h2>
                  <p className="text-white/50 mb-8 leading-relaxed">
                    Залиште заявку — ми відповімо протягом 24 годин і запропонуємо оптимальне рішення.
                  </p>

                  <div className="space-y-4 hidden sm:block">
                    <a href="mailto:hello@axioma.dev" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors">
                      <div className="w-10 h-10 rounded-xl glass flex items-center justify-center">
                        <Mail size={18} className="text-axiom-400" />
                      </div>
                      hello@axioma.dev
                    </a>
                    <a href="tel:+380441234567" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors">
                      <div className="w-10 h-10 rounded-xl glass flex items-center justify-center">
                        <Phone size={18} className="text-axiom-400" />
                      </div>
                      +38 (044) 123-45-67
                    </a>
                    <div className="flex items-center gap-3 text-white/60">
                      <div className="w-10 h-10 rounded-xl glass flex items-center justify-center">
                        <MapPin size={18} className="text-axiom-400" />
                      </div>
                      Київ, Україна
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="p-8 sm:p-12 lg:p-16 bg-white/[0.02] border-t lg:border-t-0 lg:border-l border-white/5">
                <div className="hidden lg:block">{formContent}</div>
                <div className="lg:hidden">
                  <button onClick={onModalOpen} className="btn-primary w-full">
                    Написати нам
                    <Send size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={onModalClose} title="Зв'язатись з нами">
        <div className="p-6">{formContent}</div>
      </Modal>
    </>
  )
}
