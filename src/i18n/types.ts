export type Locale = 'ru' | 'ro' | 'en'

export interface ServiceTranslation {
  title: string
  description: string
}

export interface ProjectTranslation {
  category: string
  description: string
  fullDescription: string
  stats: [string, string, string]
}

export interface TeamTranslation {
  role: string
  bio: string
}

export interface Translations {
  meta: {
    title: string
    description: string
  }
  nav: {
    services: string
    projects: string
    founder: string
    team: string
    contact: string
    contactBtn: string
    contactBtnMobile: string
    menu: string
  }
  hero: {
    badge: string
    titleBefore: string
    titleHighlight: string
    titleAfter: string
    subtitle: string
    founderLabel: string
    ctaPrimary: string
    ctaSecondary: string
  }
  stats: {
    projects: string
    clients: string
    years: string
    satisfaction: string
  }
  services: {
    label: string
    title: string
    titleHighlight: string
    desc: string
    items: Record<string, ServiceTranslation>
  }
  projects: {
    label: string
    title: string
    titleHighlight: string
    desc: string
    live: string
    demo: string
    orderSimilar: string
    items: Record<string, ProjectTranslation>
  }
  founder: {
    badge: string
    role: string
    quote: string
    skills: [string, string, string, string]
  }
  team: {
    label: string
    title: string
    titleHighlight: string
    desc: string
    members: Record<string, TeamTranslation>
  }
  process: {
    label: string
    title: string
    titleHighlight: string
    desc: string
    steps: [{ title: string; description: string }, { title: string; description: string }, { title: string; description: string }, { title: string; description: string }]
  }
  contact: {
    label: string
    title: string
    titleHighlight: string
    desc: string
    location: string
    modalTitle: string
    nameLabel: string
    namePlaceholder: string
    emailLabel: string
    messageLabel: string
    messagePlaceholder: string
    submit: string
    thanksTitle: string
    thanksDesc: string
  }
  footer: {
    desc: string
    founderLabel: string
    navigation: string
    servicesTitle: string
    contactsTitle: string
    serviceItems: [string, string, string, string, string]
    privacy: string
    terms: string
    rights: string
  }
  mobileCta: string
  modal: {
    close: string
  }
}
