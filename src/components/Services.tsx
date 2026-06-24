import { motion } from 'framer-motion'
import { serviceItems } from '../data/content'
import { useLanguage } from '../i18n/context'

export default function Services() {
  const { t } = useLanguage()

  return (
    <section id="services" className="section-padding relative">
      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="section-label">{t.services.label}</span>
          <h2 className="section-title">
            {t.services.title}{' '}
            <span className="gradient-text">{t.services.titleHighlight}</span>
          </h2>
          <p className="section-desc">{t.services.desc}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {serviceItems.map((service, i) => {
            const text = t.services.items[service.id]
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: i * 0.04 }}
                whileTap={{ scale: 0.98 }}
                className="group glass rounded-2xl p-5 sm:p-7 card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-cyan-500/15 transition-colors">
                  <service.icon size={22} className="text-cyan-400" />
                </div>
                <h3 className="font-display text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white">{text.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">{text.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-lg bg-dark-600/60 text-zinc-400 font-medium border border-white/[0.06]">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
