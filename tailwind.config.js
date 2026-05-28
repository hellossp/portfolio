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
        accentBlue: '#0052FF',
        accentPurple: '#7c3aed',
        glowBlue: '#3b82f6',
        glowPurple: '#a855f7',
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
          '0%': { boxShadow: '0 0 5px rgba(124, 58, 237, 0.2), 0 0 10px rgba(59, 130, 246, 0.2)' },
          '100%': { boxShadow: '0 0 15px rgba(124, 58, 237, 0.5), 0 0 25px rgba(59, 130, 246, 0.5)' },
        }
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, rgba(59,130,246,0.1) 50%, rgba(0,0,0,0) 100%)',
        'grid-pattern': "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
}