import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import type { Locale, Translations } from './types'
export type { Locale } from './types'
import ru from './locales/ru'
import en from './locales/en'
import ro from './locales/ro'

const locales: Record<Locale, Translations> = { ru, en, ro }

const LOCALE_KEY = 'axioma-lang'

interface LanguageContextValue {
  locale: Locale
  t: Translations
  setLocale: (locale: Locale) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function detectLocale(): Locale {
  const saved = localStorage.getItem(LOCALE_KEY) as Locale | null
  if (saved && locales[saved]) return saved
  return 'ru'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => detectLocale())

  const setLocale = (next: Locale) => {
    setLocaleState(next)
    localStorage.setItem(LOCALE_KEY, next)
  }

  useEffect(() => {
    document.documentElement.lang = locale
    document.title = locales[locale].meta.title
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', locales[locale].meta.description)
  }, [locale])

  return (
    <LanguageContext.Provider value={{ locale, t: locales[locale], setLocale }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}

export const localeLabels: Record<Locale, string> = {
  ru: 'RU',
  ro: 'RO',
  en: 'EN',
}
