import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink, Github, Globe } from 'lucide-react'
import { projects, type Project } from '../data/content'
import Modal from './Modal'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <>
      <section id="projects" className="section-padding relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <span className="text-axiom-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
              Портфоліо
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              Проєкти, якими ми{' '}
              <span className="gradient-text">пишаємось</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Реальні рішення для реального бізнесу
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {projects.map((project, i) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedProject(project)}
                className="group glass rounded-2xl overflow-hidden cursor-pointer hover:border-white/15 transition-all duration-300"
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
                      {project.category}
                    </span>
                    {project.demoUrl && (
                      <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-medium">
                        Live
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
                  <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-axiom-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-white/40">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        size="xl"
      >
        {selectedProject && (
          <div>
            <div className={`h-48 sm:h-64 bg-gradient-to-br ${selectedProject.gradient} relative`}>
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 bg-grid-pattern bg-[size:32px_32px] opacity-20" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 bg-gradient-to-t from-dark-900 to-transparent">
                <span className="text-xs px-3 py-1 rounded-full glass text-white/80 font-medium mb-3 inline-block">
                  {selectedProject.category}
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold">{selectedProject.title}</h2>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-white/70 leading-relaxed mb-8">{selectedProject.fullDescription}</p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                {selectedProject.stats.map((stat) => (
                  <div key={stat.label} className="text-center p-4 rounded-xl glass">
                    <div className="font-display text-xl sm:text-2xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-white/40 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.tags.map((tag) => (
                  <span key={tag} className="text-sm px-3 py-1.5 rounded-lg bg-axiom-500/10 text-axiom-300 font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                {selectedProject.demoUrl && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full sm:w-auto"
                  >
                    <Globe size={16} />
                    Демо
                  </a>
                )}
                {selectedProject.links?.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary w-full sm:w-auto"
                  >
                    <Github size={16} />
                    {link.label}
                  </a>
                ))}
                <button
                  onClick={() => {
                    setSelectedProject(null)
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                  className="btn-secondary w-full sm:w-auto"
                >
                  Замовити схожий проєкт
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
