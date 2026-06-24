import { motion } from 'framer-motion'
import { services } from '../data/content'

export default function Services() {
  return (
    <section id="services" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-axiom-950/20 to-transparent pointer-events-none" />

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="text-axiom-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Послуги
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Все, що потрібно вашому{' '}
            <span className="gradient-text">бізнесу</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Повний цикл розробки — від ідеї до запуску та підтримки
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="group glass rounded-2xl p-6 sm:p-8 hover:bg-white/[0.05] hover:border-axiom-500/20 transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-axiom-500/20 to-purple-500/20 flex items-center justify-center mb-5 group-hover:from-axiom-500/30 group-hover:to-purple-500/30 transition-colors">
                <service.icon size={24} className="text-axiom-400" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-5">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-white/40 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
