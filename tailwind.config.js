/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#030303',
        cardBg: '#0b0b0f',
        accentBlue: '#10B981', // Emerald 500
        accentPurple: '#059669', // Emerald 600
        glowBlue: '#34d399', // Emerald 400
        glowPurple: '#047857', // Emerald 700
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow-pulse': {
          '0%': { boxShadow: '0 0 5px rgba(16, 185, 129, 0.2), 0 0 10px rgba(5, 150, 105, 0.2)' },
          '100%': { boxShadow: '0 0 15px rgba(16, 185, 129, 0.5), 0 0 25px rgba(5, 150, 105, 0.5)' },
        }
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle, rgba(16,185,129,0.15) 0%, rgba(5,150,105,0.1) 50%, rgba(0,0,0,0) 100%)',
        'grid-pattern': "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
}