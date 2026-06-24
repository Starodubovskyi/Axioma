/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      colors: {
        axiom: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
          950: '#083344',
        },
        dark: {
          950: '#050608',
          900: '#0a0d12',
          800: '#111820',
          700: '#1a2332',
          600: '#243044',
          500: '#2e3d52',
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        shimmer: 'shimmer 4s ease-in-out infinite',
        aurora: 'aurora 14s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        shimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        aurora: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(24px, -18px) scale(1.06)' },
          '66%': { transform: 'translate(-18px, 12px) scale(0.94)' },
        },
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
        'hero-gradient':
          'radial-gradient(ellipse 90% 70% at 50% -15%, rgba(6,182,212,0.18), transparent 55%), radial-gradient(ellipse 55% 45% at 100% 40%, rgba(59,130,246,0.10), transparent 50%), radial-gradient(ellipse 45% 35% at 0% 75%, rgba(6,182,212,0.08), transparent 50%)',
        'card-shine':
          'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 50%, rgba(6,182,212,0.04) 100%)',
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(6,182,212,0.45)',
        'glow-sm': '0 0 20px -4px rgba(6,182,212,0.35)',
        card: '0 4px 24px -4px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)',
      },
      padding: {
        safe: 'env(safe-area-inset-bottom)',
      },
    },
  },
  plugins: [],
}
