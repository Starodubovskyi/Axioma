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

export interface ServiceItem {
  id: string
  icon: LucideIcon
  tags: string[]
}

export interface ProjectItem {
  id: string
  title: string
  image: string
  gradient: string
  tags: string[]
  statValues: [string, string, string]
  demoUrl?: string
  links?: { label: string; url: string }[]
}

export interface TeamMemberItem {
  id: string
  name: string
  avatar: string
  skills: string[]
  isFounder?: boolean
}

export const founderName = 'Василь Шевчук'
export const founderAvatar = 'ВШ'

export const serviceItems: ServiceItem[] = [
  { id: 'websites', icon: Globe, tags: ['React', 'Next.js', 'TypeScript'] },
  { id: 'ecommerce', icon: ShoppingCart, tags: ['Shopify', 'WooCommerce', 'Custom'] },
  { id: 'telegram-bots', icon: Bot, tags: ['grammY', 'Node.js', 'AI'] },
  { id: 'microservices', icon: Server, tags: ['NestJS', 'Docker', 'RabbitMQ'] },
  { id: 'mobile', icon: Smartphone, tags: ['React Native', 'Flutter', 'Swift'] },
  { id: 'cloud', icon: Cloud, tags: ['AWS', 'Kubernetes', 'Terraform'] },
  { id: 'security', icon: Shield, tags: ['Audit', 'GDPR', 'Pentest'] },
  { id: 'analytics', icon: BarChart3, tags: ['Power BI', 'Python', 'BigQuery'] },
  { id: 'design', icon: Palette, tags: ['Figma', 'Design System', 'Research'] },
]

export const projectItems: ProjectItem[] = [
  {
    id: 'avalon',
    title: 'Avalon',
    image: 'avalon',
    gradient: 'from-sky-500 via-blue-600 to-indigo-700',
    tags: ['Next.js', 'NestJS', 'TypeScript', 'Mapbox', 'PostgreSQL', 'Docker'],
    statValues: ['20+', 'Full-Stack', 'Vercel'],
    demoUrl: 'https://avalon-frontend-ten.vercel.app',
    links: [
      { label: 'Frontend', url: 'https://github.com/Starodubovskyi/Avalon-frontend' },
      { label: 'Backend', url: 'https://github.com/Starodubovskyi/Avalon-backend' },
    ],
  },
  {
    id: 'botflow',
    title: 'BotFlow CRM',
    image: 'bot',
    gradient: 'from-blue-500 via-indigo-500 to-violet-600',
    tags: ['grammY', 'Node.js', 'MongoDB', 'OpenAI'],
    statValues: ['Telegram', 'CRM / AI', 'Node.js'],
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Platform',
    image: 'ecommerce',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
    statValues: ['E-Commerce', 'Stripe', 'Responsive'],
  },
]

export const teamItems: TeamMemberItem[] = [
  { id: 'vasyl', name: founderName, avatar: founderAvatar, skills: ['Strategy', 'NestJS', 'Leadership'], isFounder: true },
  { id: 'maria', name: 'Марія В.', avatar: 'МВ', skills: ['UI/UX', 'Figma', 'Design Systems'] },
  { id: 'dmitro', name: 'Дмитро С.', avatar: 'ДС', skills: ['React', 'Node.js', 'AWS'] },
  { id: 'anna', name: 'Анна Л.', avatar: 'АЛ', skills: ['Python', 'OpenAI', 'ML'] },
]

export const statItems = [
  { value: '150+', key: 'projects' as const, icon: Code2 },
  { value: '50+', key: 'clients' as const, icon: Zap },
  { value: '8', key: 'years' as const, icon: BarChart3 },
  { value: '99%', key: 'satisfaction' as const, icon: Shield },
]

export const processStepIds = ['01', '02', '03', '04'] as const

export const navHrefs = [
  { href: '#services', key: 'services' as const },
  { href: '#projects', key: 'projects' as const },
  { href: '#founder', key: 'founder' as const },
  { href: '#team', key: 'team' as const },
  { href: '#contact', key: 'contact' as const },
]

export const techStack = ['React', 'TypeScript', 'Node.js', 'NestJS', 'Next.js', 'Docker', 'AWS', 'PostgreSQL', 'Telegram', 'Figma']
