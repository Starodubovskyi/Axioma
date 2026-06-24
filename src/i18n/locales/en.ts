import type { Translations } from '../types'

const en: Translations = {
  meta: {
    title: 'AXIOMA — Next-Generation IT Company',
    description: 'AXIOMA — IT company. Websites, e-commerce, Telegram bots, microservices and digital solutions.',
  },
  nav: {
    services: 'Services',
    projects: 'Projects',
    founder: 'Founder',
    team: 'Team',
    contact: 'Contact',
    contactBtn: 'Get in touch',
    contactBtnMobile: 'Contact us',
    menu: 'Menu',
  },
  hero: {
    badge: 'Next-generation IT company',
    titleBefore: 'We build the',
    titleHighlight: 'digital future',
    titleAfter: 'of your business',
    subtitle: 'AXIOMA — websites, e-commerce, Telegram bots, microservices and turnkey IT solutions.',
    founderLabel: 'Founder —',
    ctaPrimary: 'Discuss your project',
    ctaSecondary: 'Our work',
  },
  stats: {
    projects: 'Projects',
    clients: 'Clients',
    years: 'Years of experience',
    satisfaction: 'Satisfaction',
  },
  services: {
    label: 'Services',
    title: 'Everything your',
    titleHighlight: 'business needs',
    desc: 'Full cycle — from idea to launch and support',
    items: {
      websites: {
        title: 'Websites',
        description: 'Modern, fast and SEO-optimized websites of any complexity — from landing pages to corporate portals.',
      },
      ecommerce: {
        title: 'E-Commerce',
        description: 'Online stores with payment integration, CRM and analytics. We boost conversion and average order value.',
      },
      'telegram-bots': {
        title: 'Telegram Bots',
        description: 'Business process automation, CRM bots, sales and 24/7 customer support bots.',
      },
      microservices: {
        title: 'Microservices',
        description: 'Scalable architecture for enterprise solutions. APIs, message queues, event-driven systems.',
      },
      mobile: {
        title: 'Mobile Apps',
        description: 'Native and cross-platform apps for iOS and Android with flawless UX and high performance.',
      },
      cloud: {
        title: 'Cloud & DevOps',
        description: 'Deployment, CI/CD, monitoring and infrastructure optimization on AWS, GCP and Azure.',
      },
      security: {
        title: 'Cybersecurity',
        description: 'Security audits, pentesting, data protection and GDPR compliance.',
      },
      analytics: {
        title: 'Analytics & BI',
        description: 'Dashboards, real-time reporting, ML models for forecasting and decision-making.',
      },
      design: {
        title: 'UI/UX Design',
        description: 'Design systems, prototypes, user research. Interfaces people love to use.',
      },
    },
  },
  projects: {
    label: 'Portfolio',
    title: 'Projects we are',
    titleHighlight: 'proud of',
    desc: 'Real solutions for real business',
    live: 'Live',
    demo: 'Demo',
    orderSimilar: 'Order a similar project',
    items: {
      avalon: {
        category: 'Maritime CRM',
        description: 'CRM platform for maritime logistics: fleet, ports, maps, companies and billing.',
        fullDescription:
          'Full-stack SaaS for the maritime industry. Next.js 14 frontend with ShadCN UI, Recharts and Mapbox. NestJS backend with JWT auth, roles, REST API and Docker.',
        stats: ['Modules', 'Architecture', 'Deploy'],
      },
      botflow: {
        category: 'Telegram Bot',
        description: 'Telegram bot for sales automation, CRM and customer support.',
        fullDescription:
          'CRM bot on Telegram: sales funnel, broadcasts, Google Sheets integration and AI assistant for request handling.',
        stats: ['Channel', 'Integrations', 'Stack'],
      },
      ecommerce: {
        category: 'E-Commerce',
        description: 'Online store with cart, payments and admin panel.',
        fullDescription:
          'Custom e-commerce: catalog, cart, payment integration, product and order admin, responsive design.',
        stats: ['Type', 'Payment', 'UI'],
      },
    },
  },
  founder: {
    badge: 'Founder',
    role: 'Founder & CEO of AXIOMA',
    quote:
      'AXIOMA is a team that turns ideas into products. We build websites, bots and services that are a pleasure to use every day.',
    skills: ['Strategy', 'Full-Stack', 'Product', 'Leadership'],
  },
  team: {
    label: 'Team',
    title: 'Top',
    titleHighlight: 'specialists',
    desc: 'Experienced developers and designers — building products together',
    members: {
      vasyl: {
        role: 'Founder & CEO',
        bio: 'Founded AXIOMA. Leads product direction and architecture of key projects.',
      },
      maria: {
        role: 'Head of Design',
        bio: 'Creates award-winning interfaces. Design systems expert.',
      },
      dmitro: {
        role: 'Senior Full-Stack',
        bio: 'React, Node.js, DevOps — all in one. Fast and quality delivery.',
      },
      anna: {
        role: 'AI/ML Engineer',
        bio: 'Integrates AI into business processes. ChatGPT, custom models, NLP.',
      },
    },
  },
  process: {
    label: 'Process',
    title: 'How we',
    titleHighlight: 'work',
    desc: 'Transparent process from idea to launch',
    steps: [
      { title: 'Discovery', description: 'We study your business, goals and audience. We define the technical specification.' },
      { title: 'Design', description: 'We create prototypes and design. Every screen is approved before development.' },
      { title: 'Development', description: 'Agile development with weekly demos. You see progress in real time.' },
      { title: 'Launch & Support', description: 'Deploy, monitoring, support. We stay with you after launch.' },
    ],
  },
  contact: {
    label: 'Contact',
    title: 'Ready to discuss',
    titleHighlight: 'your project?',
    desc: 'Leave a request — we will respond within 24 hours with the best solution.',
    location: 'Kyiv, Ukraine',
    modalTitle: 'Contact us',
    nameLabel: 'Name',
    namePlaceholder: 'Your name',
    emailLabel: 'Email',
    messageLabel: 'Message',
    messagePlaceholder: 'Tell us about your project...',
    submit: 'Send',
    thanksTitle: 'Thank you!',
    thanksDesc: 'We will contact you shortly.',
  },
  footer: {
    desc: 'IT company building digital solutions for your business.',
    founderLabel: 'Founder —',
    navigation: 'Navigation',
    servicesTitle: 'Services',
    contactsTitle: 'Contact',
    serviceItems: ['Websites', 'E-Commerce', 'Telegram Bots', 'Microservices', 'Cloud & DevOps'],
    privacy: 'Privacy',
    terms: 'Terms',
    rights: 'All rights reserved.',
  },
  mobileCta: 'Discuss project',
  modal: {
    close: 'Close',
  },
}

export default en
