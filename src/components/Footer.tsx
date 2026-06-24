import { navHrefs, founderName } from '../data/content'
import { useLanguage } from '../i18n/context'

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  const navLabels: Record<(typeof navHrefs)[number]['key'], string> = {
    services: t.nav.services,
    projects: t.nav.projects,
    founder: t.nav.founder,
    team: t.nav.team,
    contact: t.nav.contact,
  }

  return (
    <footer className="border-t border-white/10 py-12 sm:py-16 pb-24 md:pb-16">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-glow-sm">
                <span className="text-dark-950 font-display font-bold text-sm">A</span>
              </div>
              <span className="font-display font-bold text-xl text-white">AXIOMA</span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs mb-3">{t.footer.desc}</p>
            <p className="text-sm text-zinc-500">
              {t.footer.founderLabel}{' '}
              <a href="#founder" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                {founderName}
              </a>
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-zinc-200">{t.footer.navigation}</h4>
            <ul className="space-y-2.5">
              {navHrefs.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-zinc-500 hover:text-white transition-colors">
                    {navLabels[link.key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-zinc-200">{t.footer.servicesTitle}</h4>
            <ul className="space-y-2.5">
              {t.footer.serviceItems.map((item) => (
                <li key={item}>
                  <span className="text-sm text-zinc-500">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-zinc-200">{t.footer.contactsTitle}</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="mailto:hello@axioma.dev" className="text-sm text-zinc-500 hover:text-white transition-colors">
                  hello@axioma.dev
                </a>
              </li>
              <li>
                <a href="tel:+380441234567" className="text-sm text-zinc-500 hover:text-white transition-colors">
                  +38 (044) 123-45-67
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
          <p className="text-sm text-zinc-600 text-center sm:text-left">
            &copy; {currentYear} AXIOMA · {founderName}. {t.footer.rights}
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-zinc-600 hover:text-zinc-300 transition-colors">{t.footer.privacy}</a>
            <a href="#" className="text-sm text-zinc-600 hover:text-zinc-300 transition-colors">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
