import {
  Globe,
  ShoppingCart,
  Bot,
  Server,
  Smartphone,
  Cloud,
  Shield,
  BarChart3,
  Palette,
  Code2,
  Zap,
  type LucideIcon,
} from 'lucide-react'

export interface Service {
  id: string
  icon: LucideIcon
  title: string
  description: string
  tags: string[]
}

export interface Project {
  id: string
  title: string
  category: string
  description: string
  fullDescription: string
  image: string
  gradient: string
  tags: string[]
  stats: { label: string; value: string }[]
  demoUrl?: string
  links?: { label: string; url: string }[]
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  avatar: string
  skills: string[]
}

export const services: Service[] = [
  {
    id: 'websites',
    icon: Globe,
    title: 'Веб-сайти',
    description: 'Сучасні, швидкі та SEO-оптимізовані сайти будь-якої складності — від лендингів до корпоративних порталів.',
    tags: ['React', 'Next.js', 'TypeScript'],
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    title: 'E-Commerce',
    description: 'Інтернет-магазини з інтеграцією платежів, CRM та аналітикою. Підвищуємо конверсію та середній чек.',
    tags: ['Shopify', 'WooCommerce', 'Custom'],
  },
  {
    id: 'telegram-bots',
    icon: Bot,
    title: 'Telegram-боти',
    description: 'Автоматизація бізнес-процесів, CRM-боти, боти для продажів та підтримки клієнтів 24/7.',
    tags: ['grammY', 'Node.js', 'AI'],
  },
  {
    id: 'microservices',
    icon: Server,
    title: 'Мікросервіси',
    description: 'Масштабована архітектура для enterprise-рішень. API, черги повідомлень, event-driven системи.',
    tags: ['NestJS', 'Docker', 'RabbitMQ'],
  },
  {
    id: 'mobile',
    icon: Smartphone,
    title: 'Мобільні додатки',
    description: 'Native та cross-platform додатки для iOS та Android з бездоганним UX та високою продуктивністю.',
    tags: ['React Native', 'Flutter', 'Swift'],
  },
  {
    id: 'cloud',
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Розгортання, CI/CD, моніторинг та оптимізація інфраструктури на AWS, GCP та Azure.',
    tags: ['AWS', 'Kubernetes', 'Terraform'],
  },
  {
    id: 'security',
    icon: Shield,
    title: 'Кібербезпека',
    description: 'Аудит безпеки, pentest, захист даних та відповідність GDPR. Безпека — не опція, а стандарт.',
    tags: ['Audit', 'GDPR', 'Pentest'],
  },
  {
    id: 'analytics',
    icon: BarChart3,
    title: 'Аналітика & BI',
    description: 'Дашборди, звітність у реальному часі, ML-моделі для прогнозування та прийняття рішень.',
    tags: ['Power BI', 'Python', 'BigQuery'],
  },
  {
    id: 'design',
    icon: Palette,
    title: 'UI/UX Дизайн',
    description: 'Дизайн-системи, прототипи, user research. Створюємо інтерфейси, якими хочеться користуватись.',
    tags: ['Figma', 'Design System', 'Research'],
  },
]

export const projects: Project[] = [
  {
    id: 'avalon',
    title: 'Avalon',
    category: 'Maritime CRM',
    description: 'CRM-платформа для морської логістики: флот, порти, карти, компанії та білінг.',
    fullDescription:
      'Full-stack SaaS для морської індустрії. Frontend на Next.js 14 з ShadCN UI, Recharts та Mapbox. Backend на NestJS з JWT-авторизацією, ролями, REST API та Docker. Модулі: судна, порти, карти, компанії, задачі, чат, email, білінг, підписки та адмін-панель.',
    image: 'avalon',
    gradient: 'from-sky-500 via-blue-600 to-indigo-700',
    tags: ['Next.js', 'NestJS', 'TypeScript', 'Mapbox', 'PostgreSQL', 'Docker'],
    stats: [
      { label: 'Модулів', value: '20+' },
      { label: 'Архітектура', value: 'Full-Stack' },
      { label: 'Deploy', value: 'Vercel' },
    ],
    demoUrl: 'https://avalon-frontend-ten.vercel.app',
    links: [
      { label: 'Frontend', url: 'https://github.com/Starodubovskyi/Avalon-frontend' },
      { label: 'Backend', url: 'https://github.com/Starodubovskyi/Avalon-backend' },
    ],
  },
  {
    id: 'botflow',
    title: 'BotFlow CRM',
    category: 'Telegram Bot',
    description: 'Telegram-бот для автоматизації продажів, CRM та підтримки клієнтів.',
    fullDescription:
      'CRM-бот у Telegram: воронка продажів, розсилки, інтеграція з Google Sheets та AI-асистент для обробки запитів.',
    image: 'bot',
    gradient: 'from-blue-500 via-indigo-500 to-violet-600',
    tags: ['grammY', 'Node.js', 'MongoDB', 'OpenAI'],
    stats: [
      { label: 'Канал', value: 'Telegram' },
      { label: 'Інтеграції', value: 'CRM / AI' },
      { label: 'Стек', value: 'Node.js' },
    ],
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Platform',
    category: 'E-Commerce',
    description: 'Інтернет-магазин з кошиком, оплатою та адмін-панеллю.',
    fullDescription:
      'Кастомний e-commerce: каталог, кошик, інтеграція платежів, адмінка для товарів і замовлень, адаптивний дизайн.',
    image: 'ecommerce',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
    stats: [
      { label: 'Тип', value: 'E-Commerce' },
      { label: 'Оплата', value: 'Stripe' },
      { label: 'UI', value: 'Responsive' },
    ],
  },
]

export const team: TeamMember[] = [
  {
    id: 'alex',
    name: 'Олександр К.',
    role: 'CEO & Lead Architect',
    bio: '12+ років у enterprise-розробці. Проектує архітектуру, яка масштабується.',
    avatar: 'AK',
    skills: ['Architecture', 'Strategy', 'NestJS'],
  },
  {
    id: 'maria',
    name: 'Марія В.',
    role: 'Head of Design',
    bio: 'Створює інтерфейси, які виграють награди. Експерт з design systems.',
    avatar: 'МВ',
    skills: ['UI/UX', 'Figma', 'Design Systems'],
  },
  {
    id: 'dmitro',
    name: 'Дмитро С.',
    role: 'Senior Full-Stack',
    bio: 'React, Node.js, DevOps — все в одному. Швидко і якісно.',
    avatar: 'ДС',
    skills: ['React', 'Node.js', 'AWS'],
  },
  {
    id: 'anna',
    name: 'Анна Л.',
    role: 'AI/ML Engineer',
    bio: 'Інтегрує AI у бізнес-процеси. ChatGPT, custom models, NLP.',
    avatar: 'АЛ',
    skills: ['Python', 'OpenAI', 'ML'],
  },
  {
    id: 'igor',
    name: 'Ігор М.',
    role: 'Mobile Lead',
    bio: 'React Native та Flutter. Додатки, які люблять користувачі.',
    avatar: 'ІМ',
    skills: ['React Native', 'Flutter', 'iOS'],
  },
  {
    id: 'kate',
    name: 'Катерина П.',
    role: 'Project Manager',
    bio: 'Delivery on time, every time. Agile, Scrum, Kanban.',
    avatar: 'КП',
    skills: ['Agile', 'Scrum', 'Jira'],
  },
]

export const stats = [
  { value: '150+', label: 'Проєктів', icon: Code2 },
  { value: '50+', label: 'Клієнтів', icon: Zap },
  { value: '8', label: 'Років досвіду', icon: BarChart3 },
  { value: '99%', label: 'Задоволеність', icon: Shield },
]

export const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    description: 'Досліджуємо ваш бізнес, цілі та аудиторію. Формуємо технічне завдання.',
  },
  {
    step: '02',
    title: 'Design',
    description: 'Створюємо прототипи та дизайн. Узгоджуємо кожен екран до розробки.',
  },
  {
    step: '03',
    title: 'Development',
    description: 'Agile-розробка з щотижневими демо. Ви бачите прогрес у реальному часі.',
  },
  {
    step: '04',
    title: 'Launch & Support',
    description: 'Деплой, моніторинг, підтримка. Ми поруч і після запуску.',
  },
]

export const navLinks = [
  { href: '#services', label: 'Послуги' },
  { href: '#projects', label: 'Проєкти' },
  { href: '#team', label: 'Команда' },
  { href: '#process', label: 'Процес' },
  { href: '#contact', label: 'Контакти' },
]
