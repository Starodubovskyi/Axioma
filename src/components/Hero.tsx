import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react'

interface HeroProps {
  onContactClick: () => void
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-dark-900">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:64px_64px]" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-axiom-600/20 rounded-full blur-[128px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px]" />
      </div>

      {/* Floating elements */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-32 right-[10%] hidden lg:block w-16 h-16 glass rounded-2xl rotate-12"
      />
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-40 left-[8%] hidden lg:block w-12 h-12 glass rounded-xl -rotate-12"
      />
      <motion.div
        animate={{ y: [-15, 15, -15] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-48 left-[15%] hidden xl:block w-20 h-20 glass rounded-2xl rotate-45"
      />

      <div className="relative container-custom px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm mb-8"
        >
          <Sparkles size={16} className="text-axiom-400" />
          <span className="text-white/80">IT-компанія нового покоління</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.1] mb-6 text-balance"
        >
          Створюємо{' '}
          <span className="gradient-text">цифрове майбутнє</span>
          <br />
          вашого бізнесу
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed text-balance"
        >
          AXIOMA — команда експертів, яка розробляє сайти, e-commerce, Telegram-ботів,
          мікросервіси та вирішує будь-які IT-завдання. Швидко. Якісно. Надійно.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button onClick={onContactClick} className="btn-primary text-base w-full sm:w-auto">
            Обговорити проєкт
            <ArrowRight size={18} />
          </button>
          <button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary text-base w-full sm:w-auto"
          >
            Наші роботи
          </button>
        </motion.div>

        {/* Tech stack marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 overflow-hidden"
        >
          <div className="flex animate-[marquee_30s_linear_infinite] gap-8 whitespace-nowrap">
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className="flex gap-8">
                {['React', 'TypeScript', 'Node.js', 'NestJS', 'Next.js', 'Docker', 'AWS', 'PostgreSQL', 'Telegram API', 'Figma'].map((tech) => (
                  <span key={`${setIdx}-${tech}`} className="text-white/30 text-sm font-medium px-4 py-2 glass rounded-lg">
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
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={24} className="text-white/30" />
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
