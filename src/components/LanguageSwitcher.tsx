import { useLanguage, localeLabels, type Locale } from '../i18n/context'

export default function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale } = useLanguage()

  const langs: Locale[] = ['ru', 'ro', 'en']

  return (
    <div className={`flex items-center gap-0.5 p-1 rounded-xl glass ${compact ? '' : ''}`}>
      {langs.map((lang) => (
        <button
          key={lang}
          onClick={() => setLocale(lang)}
          className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all min-w-[36px] min-h-[32px] ${
            locale === lang
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-glow-sm'
              : 'text-zinc-500 hover:text-zinc-200 hover:bg-white/[0.05]'
          }`}
          aria-label={localeLabels[lang]}
        >
          {localeLabels[lang]}
        </button>
      ))}
    </div>
  )
}
