import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react'
import { founderName, techStack } from '../data/content'
import { useLanguage } from '../i18n/context'

interface HeroProps {
  onContactClick: () => void
}

export default function Hero({ onContactClick }: HeroProps) {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] sm:bg-[size:64px_64px]" />

      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.55, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 -left-20 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/20 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.45, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-1/4 -right-20 w-72 sm:w-96 h-72 sm:h-96 bg-blue-500/15 rounded-full blur-[100px]"
      />

      <div className="relative container-custom px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-28 sm:pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full glass text-sm mb-6 sm:mb-8"
        >
          <Sparkles size={16} className="text-axiom-300" />
          <span className="text-zinc-300">{t.hero.badge}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-5 sm:mb-6 text-balance text-white"
        >
          {t.hero.titleBefore}{' '}
          <span className="gradient-text">{t.hero.titleHighlight}</span>
          <br />
          {t.hero.titleAfter}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-xl sm:max-w-2xl mx-auto mb-4 sm:mb-6 leading-relaxed text-balance px-1"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="text-sm sm:text-base text-zinc-500 mb-8 sm:mb-10"
        >
          {t.hero.founderLabel}{' '}
          <a
            href="#founder"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#founder')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="text-cyan-400 font-medium hover:text-cyan-300 transition-colors underline-offset-4 hover:underline"
          >
            {founderName}
          </a>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-sm sm:max-w-none mx-auto"
        >
          <button onClick={onContactClick} className="btn-primary text-base w-full sm:w-auto">
            {t.hero.ctaPrimary}
            <ArrowRight size={18} />
          </button>
          <button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary text-base w-full sm:w-auto"
          >
            {t.hero.ctaSecondary}
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-14 sm:mt-20 overflow-hidden"
        >
          <div className="flex animate-marquee gap-4 sm:gap-6 whitespace-nowrap">
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className="flex gap-4 sm:gap-6">
                {techStack.map((tech) => (
                  <span
                    key={`${setIdx}-${tech}`}
                    className="text-zinc-500 text-xs sm:text-sm font-medium px-3 sm:px-4 py-2 glass rounded-xl"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
        >
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ChevronDown size={22} className="text-slate-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
