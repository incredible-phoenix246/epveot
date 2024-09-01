import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        'brand-main': '#FFB342',
        'brand-blue': '#1C2752',
        'brand-white': '#E2E2E2',
        'brand-brown': '#7E7E7E',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        slideUp: {
          '70%': {
            opacity: '0.7',
            transform: 'translateY(50px)',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        slideDown: {
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        slideNavUp: {
          '100%': {
            transform: 'translateY(-112px)',
            opacity: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        slideUp: 'slideUp 1s 0.2s ease forwards',
        slideDown: 'slideDown 1s 0.2s ease forwards',
        slideNavUp: 'slideDown 1s 0.2s ease forwards',
      },
      fontFamily: {
        raleway: [`var(--font-raleway)`, 'montserrat'],
        unica: [`var(--font-unica)`, 'montserrat'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
