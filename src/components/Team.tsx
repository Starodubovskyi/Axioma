import { motion } from 'framer-motion'
import { Crown } from 'lucide-react'
import { teamItems } from '../data/content'
import { useLanguage } from '../i18n/context'

export default function Team() {
  const { t } = useLanguage()

  return (
    <section id="team" className="section-padding relative">
      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="section-label">{t.team.label}</span>
          <h2 className="section-title">
            {t.team.title}{' '}
            <span className="gradient-text">{t.team.titleHighlight}</span>
          </h2>
          <p className="section-desc">{t.team.desc}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 max-w-4xl mx-auto">
          {teamItems.map((member, i) => {
            const text = t.team.members[member.id]
            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.08 }}
                whileTap={{ scale: 0.98 }}
                className={`group glass rounded-2xl p-6 sm:p-7 text-center card-hover ${
                  member.isFounder ? 'ring-1 ring-cyan-500/25 bg-cyan-500/[0.04]' : ''
                }`}
              >
                <div className="relative inline-block mb-4 sm:mb-5">
                  <div
                    className={`rounded-2xl flex items-center justify-center text-2xl font-display font-bold shadow-lg ${
                      member.isFounder
                        ? 'bg-gradient-to-br from-cyan-400 to-blue-600 text-dark-950 shadow-glow-sm'
                        : 'bg-gradient-to-br from-dark-600 to-dark-500 text-white border border-white/[0.08]'
                    }`}
                    style={{ width: '4.5rem', height: '4.5rem' }}
                  >
                    {member.avatar}
                  </div>
                  {member.isFounder && (
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-lg bg-amber-400 flex items-center justify-center">
                      <Crown size={12} className="text-amber-900" />
                    </div>
                  )}
                </div>

                <h3 className="font-display text-lg font-semibold mb-1 text-white">{member.name}</h3>
                <p className="text-cyan-400 text-sm font-medium mb-3">{text.role}</p>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">{text.bio}</p>

                <div className="flex flex-wrap justify-center gap-2">
                  {member.skills.map((skill) => (
                    <span key={skill} className="text-xs px-2.5 py-1 rounded-lg bg-dark-600/60 text-zinc-400 border border-white/[0.06]">
                      {skill}
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
