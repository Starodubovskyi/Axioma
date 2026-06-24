import { motion } from 'framer-motion'
import { team } from '../data/content'

export default function Team() {
  return (
    <section id="team" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent pointer-events-none" />

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="text-axiom-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
            Команда
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Найкращі{' '}
            <span className="gradient-text">фахівці</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Досвідчені розробники, дизайнери та менеджери — разом створюємо диво
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group glass rounded-2xl p-6 sm:p-8 text-center hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className="relative inline-block mb-5">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-axiom-500 to-purple-600 flex items-center justify-center text-2xl font-display font-bold shadow-lg shadow-axiom-500/20 group-hover:shadow-axiom-500/40 transition-shadow">
                  {member.avatar}
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-dark-900" />
              </div>

              <h3 className="font-display text-lg font-semibold mb-1">{member.name}</h3>
              <p className="text-axiom-400 text-sm font-medium mb-3">{member.role}</p>
              <p className="text-white/50 text-sm leading-relaxed mb-5">{member.bio}</p>

              <div className="flex flex-wrap justify-center gap-2">
                {member.skills.map((skill) => (
                  <span key={skill} className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-white/40">
                    {skill}
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
