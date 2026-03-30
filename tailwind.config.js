/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        space: {
          950: '#02020f',
          900: '#04040e',
          800: '#07071a',
          700: '#0d0d25',
          600: '#13133a',
          500: '#1a1a4e',
        },
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(0,212,255,0.35), 0 0 60px rgba(0,212,255,0.12)',
        'glow-purple': '0 0 20px rgba(168,85,247,0.35), 0 0 60px rgba(168,85,247,0.12)',
        'glow-sm-cyan': '0 0 12px rgba(0,212,255,0.5)',
        'glow-sm-purple': '0 0 12px rgba(168,85,247,0.5)',
        'glass': '0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.08)',
        'glass-lg': '0 25px 50px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.08)',
        'neuro': '6px 6px 16px rgba(0,0,0,0.6), -3px -3px 10px rgba(255,255,255,0.03)',
        'neuro-inset': 'inset 4px 4px 10px rgba(0,0,0,0.5), inset -2px -2px 6px rgba(255,255,255,0.03)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'blink': 'blink 1s step-end infinite',
        'scan': 'scan 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
    },
  },
  plugins: [],
}
