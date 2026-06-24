import { motion } from 'framer-motion'
import { stats } from '../data/content'

export default function Stats() {
  return (
    <section className="relative py-16 sm:py-20 border-y border-white/5">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl glass mb-4 group-hover:bg-axiom-500/10 transition-colors">
                <stat.icon size={22} className="text-axiom-400" />
              </div>
              <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base text-white/50">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
