import { navLinks } from '../data/content'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 py-12 sm:py-16">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-axiom-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-display font-bold text-sm">A</span>
              </div>
              <span className="font-display font-bold text-xl">AXIOMA</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              IT-компанія, яка створює цифрові рішення для вашого бізнесу. Сайти, боти, мікросервіси — все під ключ.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Навігація</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/40 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Послуги</h4>
            <ul className="space-y-2">
              {['Веб-сайти', 'E-Commerce', 'Telegram-боти', 'Мікросервіси', 'Cloud & DevOps'].map((item) => (
                <li key={item}>
                  <span className="text-sm text-white/40">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Контакти</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:hello@axioma.dev" className="text-sm text-white/40 hover:text-white transition-colors">
                  hello@axioma.dev
                </a>
              </li>
              <li>
                <a href="tel:+380441234567" className="text-sm text-white/40 hover:text-white transition-colors">
                  +38 (044) 123-45-67
                </a>
              </li>
              <li>
                <span className="text-sm text-white/40">Київ, Україна</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-sm text-white/30">
            &copy; {currentYear} AXIOMA. Всі права захищені.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-white/30 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-sm text-white/30 hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
