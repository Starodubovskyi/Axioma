import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink, Github, Globe } from 'lucide-react'
import { projectItems } from '../data/content'
import { useLanguage } from '../i18n/context'
import Modal from './Modal'

export default function Projects() {
  const { t } = useLanguage()
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const selected = projectItems.find((p) => p.id === selectedId)
  const selectedText = selectedId ? t.projects.items[selectedId] : null

  return (
    <>
      <section id="projects" className="section-padding relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="section-label">{t.projects.label}</span>
            <h2 className="section-title">
              {t.projects.title}{' '}
              <span className="gradient-text">{t.projects.titleHighlight}</span>
            </h2>
            <p className="section-desc">{t.projects.desc}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {projectItems.map((project, i) => {
              const text = t.projects.items[project.id]
              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ delay: i * 0.06 }}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedId(project.id)}
                  className="group glass rounded-2xl overflow-hidden cursor-pointer card-hover"
                >
                  <div className={`h-48 sm:h-52 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 bg-grid-pattern bg-[size:32px_32px] opacity-30" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-display text-4xl sm:text-5xl font-bold text-white/20 group-hover:text-white/30 transition-colors">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="text-xs px-3 py-1 rounded-full glass text-white/80 font-medium">
                        {text.category}
                      </span>
                      {project.demoUrl && (
                        <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-medium">
                          {t.projects.live}
                        </span>
                      )}
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-8 h-8 rounded-full glass flex items-center justify-center">
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6">
                    <h3 className="font-display text-lg sm:text-xl font-semibold mb-2 group-hover:text-cyan-300 transition-colors text-white">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-2">
                      {text.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-dark-600/60 text-zinc-500 border border-white/[0.06]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <Modal isOpen={!!selected} onClose={() => setSelectedId(null)} size="xl">
        {selected && selectedText && (
          <div>
            <div className={`h-48 sm:h-64 bg-gradient-to-br ${selected.gradient} relative`}>
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 bg-gradient-to-t from-dark-900 to-transparent">
                <span className="text-xs px-3 py-1 rounded-full glass text-white/80 font-medium mb-3 inline-block">
                  {selectedText.category}
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold">{selected.title}</h2>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-zinc-300 leading-relaxed mb-8">{selectedText.fullDescription}</p>

              <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8">
                {selected.statValues.map((value, idx) => (
                  <div key={idx} className="text-center p-3 sm:p-4 rounded-xl glass">
                    <div className="font-display text-lg sm:text-2xl font-bold gradient-text">{value}</div>
                    <div className="text-xs sm:text-sm text-zinc-500 mt-1">{selectedText.stats[idx]}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {selected.tags.map((tag) => (
                  <span key={tag} className="text-sm px-3 py-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 font-medium border border-cyan-500/15">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                {selected.demoUrl && (
                  <a href={selected.demoUrl} target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto">
                    <Globe size={16} />
                    {t.projects.demo}
                  </a>
                )}
                {selected.links?.map((link) => (
                  <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="btn-secondary w-full sm:w-auto">
                    <Github size={16} />
                    {link.label}
                  </a>
                ))}
                <button
                  onClick={() => {
                    setSelectedId(null)
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="btn-secondary w-full sm:w-auto"
                >
                  {t.projects.orderSimilar}
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  )
}
