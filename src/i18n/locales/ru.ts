import type { Translations } from '../types'

const ru: Translations = {
  meta: {
    title: 'AXIOMA — IT-компания нового поколения',
    description: 'AXIOMA — IT-компания. Разработка сайтов, e-commerce, Telegram-ботов, микросервисов и цифровых решений.',
  },
  nav: {
    services: 'Услуги',
    projects: 'Проекты',
    founder: 'Основатель',
    team: 'Команда',
    contact: 'Контакты',
    contactBtn: 'Связаться',
    contactBtnMobile: 'Связаться с нами',
    menu: 'Меню',
  },
  hero: {
    badge: 'IT-компания нового поколения',
    titleBefore: 'Создаём',
    titleHighlight: 'цифровое будущее',
    titleAfter: 'вашего бизнеса',
    subtitle: 'AXIOMA — сайты, e-commerce, Telegram-боты, микросервисы и любые IT-решения под ключ.',
    founderLabel: 'Основатель —',
    ctaPrimary: 'Обсудить проект',
    ctaSecondary: 'Наши работы',
  },
  stats: {
    projects: 'Проектов',
    clients: 'Клиентов',
    years: 'Лет опыта',
    satisfaction: 'Довольных',
  },
  services: {
    label: 'Услуги',
    title: 'Всё для вашего',
    titleHighlight: 'бизнеса',
    desc: 'Полный цикл — от идеи до запуска и поддержки',
    items: {
      websites: {
        title: 'Веб-сайты',
        description: 'Современные, быстрые и SEO-оптимизированные сайты любой сложности — от лендингов до корпоративных порталов.',
      },
      ecommerce: {
        title: 'E-Commerce',
        description: 'Интернет-магазины с интеграцией платежей, CRM и аналитикой. Повышаем конверсию и средний чек.',
      },
      'telegram-bots': {
        title: 'Telegram-боты',
        description: 'Автоматизация бизнес-процессов, CRM-боты, боты для продаж и поддержки клиентов 24/7.',
      },
      microservices: {
        title: 'Микросервисы',
        description: 'Масштабируемая архитектура для enterprise-решений. API, очереди сообщений, event-driven системы.',
      },
      mobile: {
        title: 'Мобильные приложения',
        description: 'Native и cross-platform приложения для iOS и Android с безупречным UX и высокой производительностью.',
      },
      cloud: {
        title: 'Cloud & DevOps',
        description: 'Развёртывание, CI/CD, мониторинг и оптимизация инфраструктуры на AWS, GCP и Azure.',
      },
      security: {
        title: 'Кибербезопасность',
        description: 'Аудит безопасности, pentest, защита данных и соответствие GDPR.',
      },
      analytics: {
        title: 'Аналитика & BI',
        description: 'Дашборды, отчётность в реальном времени, ML-модели для прогнозирования и принятия решений.',
      },
      design: {
        title: 'UI/UX Дизайн',
        description: 'Дизайн-системы, прототипы, user research. Создаём интерфейсы, которыми хочется пользоваться.',
      },
    },
  },
  projects: {
    label: 'Портфолио',
    title: 'Проекты, которыми мы',
    titleHighlight: 'гордимся',
    desc: 'Реальные решения для реального бизнеса',
    live: 'Live',
    demo: 'Демо',
    orderSimilar: 'Заказать похожий проект',
    items: {
      avalon: {
        category: 'Maritime CRM',
        description: 'CRM-платформа для морской логистики: флот, порты, карты, компании и биллинг.',
        fullDescription:
          'Full-stack SaaS для морской индустрии. Frontend на Next.js 14 с ShadCN UI, Recharts и Mapbox. Backend на NestJS с JWT-авторизацией, ролями, REST API и Docker.',
        stats: ['Модулей', 'Архитектура', 'Deploy'],
      },
      botflow: {
        category: 'Telegram Bot',
        description: 'Telegram-бот для автоматизации продаж, CRM и поддержки клиентов.',
        fullDescription:
          'CRM-бот в Telegram: воронка продаж, рассылки, интеграция с Google Sheets и AI-ассистент для обработки запросов.',
        stats: ['Канал', 'Интеграции', 'Стек'],
      },
      ecommerce: {
        category: 'E-Commerce',
        description: 'Интернет-магазин с корзиной, оплатой и админ-панелью.',
        fullDescription:
          'Кастомный e-commerce: каталог, корзина, интеграция платежей, админка для товаров и заказов, адаптивный дизайн.',
        stats: ['Тип', 'Оплата', 'UI'],
      },
    },
  },
  founder: {
    badge: 'Основатель',
    role: 'Основатель & CEO AXIOMA',
    quote:
      'AXIOMA — это команда, которая превращает идеи в продукты. Мы делаем сайты, боты и сервисы, которыми удобно пользоваться каждый день.',
    skills: ['Стратегия', 'Full-Stack', 'Product', 'Leadership'],
  },
  team: {
    label: 'Команда',
    title: 'Лучшие',
    titleHighlight: 'специалисты',
    desc: 'Опытные разработчики и дизайнеры — вместе создаём продукты',
    members: {
      vasyl: {
        role: 'Основатель & CEO',
        bio: 'Основал AXIOMA. Ведёт продуктовое направление и архитектуру ключевых проектов.',
      },
      maria: {
        role: 'Head of Design',
        bio: 'Создаёт интерфейсы, которые выигрывают награды. Эксперт по design systems.',
      },
      dmitro: {
        role: 'Senior Full-Stack',
        bio: 'React, Node.js, DevOps — всё в одном. Быстро и качественно.',
      },
      anna: {
        role: 'AI/ML Engineer',
        bio: 'Интегрирует AI в бизнес-процессы. ChatGPT, custom models, NLP.',
      },
    },
  },
  process: {
    label: 'Процесс',
    title: 'Как мы',
    titleHighlight: 'работаем',
    desc: 'Прозрачный процесс от идеи до запуска',
    steps: [
      { title: 'Discovery', description: 'Изучаем ваш бизнес, цели и аудиторию. Формируем техническое задание.' },
      { title: 'Design', description: 'Создаём прототипы и дизайн. Согласовываем каждый экран до разработки.' },
      { title: 'Development', description: 'Agile-разработка с еженедельными демо. Вы видите прогресс в реальном времени.' },
      { title: 'Launch & Support', description: 'Деплой, мониторинг, поддержка. Мы рядом и после запуска.' },
    ],
  },
  contact: {
    label: 'Контакты',
    title: 'Готовы обсудить',
    titleHighlight: 'ваш проект?',
    desc: 'Оставьте заявку — мы ответим в течение 24 часов и предложим оптимальное решение.',
    location: 'Киев, Украина',
    modalTitle: 'Связаться с нами',
    nameLabel: 'Имя',
    namePlaceholder: 'Ваше имя',
    emailLabel: 'Email',
    messageLabel: 'Сообщение',
    messagePlaceholder: 'Расскажите о вашем проекте...',
    submit: 'Отправить',
    thanksTitle: 'Спасибо!',
    thanksDesc: 'Мы свяжемся с вами в ближайшее время.',
  },
  footer: {
    desc: 'IT-компания, которая создаёт цифровые решения для вашего бизнеса.',
    founderLabel: 'Основатель —',
    navigation: 'Навигация',
    servicesTitle: 'Услуги',
    contactsTitle: 'Контакты',
    serviceItems: ['Веб-сайты', 'E-Commerce', 'Telegram-боты', 'Микросервисы', 'Cloud & DevOps'],
    privacy: 'Privacy',
    terms: 'Terms',
    rights: 'Все права защищены.',
  },
  mobileCta: 'Обсудить проект',
  modal: {
    close: 'Закрыть',
  },
}

export default ru
