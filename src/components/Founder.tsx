import { motion } from 'framer-motion'
import { Crown, Quote } from 'lucide-react'
import { founderAvatar, founderName } from '../data/content'
import { useLanguage } from '../i18n/context'

export default function Founder() {
  const { t } = useLanguage()

  return (
    <section id="founder" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="glass-strong rounded-3xl p-6 sm:p-10 lg:p-14 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] animate-aurora pointer-events-none" />

          <div className="relative grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, type: 'spring', stiffness: 200 }}
              className="flex flex-col items-center md:items-start"
            >
              <div className="relative">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-4xl sm:text-5xl font-display font-bold text-dark-950 shadow-glow">
                  {founderAvatar}
                </div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-xl bg-amber-400 flex items-center justify-center shadow-lg">
                  <Crown size={18} className="text-amber-900" />
                </div>
              </div>
              <span className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider border border-cyan-500/20">
                {t.founder.badge}
              </span>
            </motion.div>

            <div className="text-center md:text-left">
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                {founderName}
              </h2>
              <p className="text-cyan-400 font-medium mb-5 sm:mb-6">{t.founder.role}</p>

              <div className="relative md:pl-6 md:border-l-2 border-cyan-500/30 mb-6">
                <Quote size={20} className="text-cyan-500/40 mb-3 mx-auto md:mx-0 hidden sm:block" />
                <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">{t.founder.quote}</p>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {t.founder.skills.map((skill) => (
                  <span key={skill} className="text-xs sm:text-sm px-3 py-1.5 rounded-xl bg-dark-600/80 text-zinc-300 border border-white/[0.08]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
