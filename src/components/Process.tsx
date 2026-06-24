import { motion } from 'framer-motion'
import { processSteps } from '../data/content'

export default function Process() {
  return (
    <section id="process" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="text-axiom-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Процес
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Як ми{' '}
            <span className="gradient-text">працюємо</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Прозорий процес від ідеї до запуску
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              {i < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(100%+12px)] w-[calc(100%-24px)] h-px bg-gradient-to-r from-axiom-500/50 to-transparent" />
              )}
              <div className="glass rounded-2xl p-6 sm:p-8 h-full hover:bg-white/[0.05] transition-colors">
                <span className="font-display text-4xl font-bold gradient-text mb-4 block">
                  {step.step}
                </span>
                <h3 className="font-display text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
