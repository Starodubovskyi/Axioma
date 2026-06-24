import { motion } from 'framer-motion'
import { processStepIds } from '../data/content'
import { useLanguage } from '../i18n/context'

export default function Process() {
  const { t } = useLanguage()

  return (
    <section id="process" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="section-label">{t.process.label}</span>
          <h2 className="section-title">
            {t.process.title}{' '}
            <span className="gradient-text">{t.process.titleHighlight}</span>
          </h2>
          <p className="section-desc">{t.process.desc}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {processStepIds.map((stepId, i) => {
            const step = t.process.steps[i]
            return (
              <motion.div
                key={stepId}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: i * 0.08 }}
                whileTap={{ scale: 0.98 }}
                className="relative"
              >
                <div className="glass rounded-2xl p-5 sm:p-7 h-full card-hover">
                  <span className="font-display text-3xl sm:text-4xl font-bold gradient-text mb-3 sm:mb-4 block">
                    {stepId}
                  </span>
                <h3 className="font-display text-xl font-semibold mb-3 text-white">{step.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
