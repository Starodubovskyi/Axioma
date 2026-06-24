import { motion } from 'framer-motion'
import { statItems } from '../data/content'
import { useLanguage } from '../i18n/context'

export default function Stats() {
  const { t } = useLanguage()

  const labels = {
    projects: t.stats.projects,
    clients: t.stats.clients,
    years: t.stats.years,
    satisfaction: t.stats.satisfaction,
  }

  return (
    <section className="relative py-12 sm:py-16 border-y border-white/10">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {statItems.map((stat, i) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center group glass rounded-2xl p-4 sm:p-6 card-hover"
            >
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 mb-3 sm:mb-4 group-hover:bg-cyan-500/15 transition-colors">
                <stat.icon size={20} className="text-cyan-400" />
              </div>
              <div className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-zinc-400">{labels[stat.key]}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
