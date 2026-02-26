/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#2d3748',
        pine: '#2d7a6f',
        moss: '#3d9085',
        sage: '#dfeae7',
        parchment: '#f5f7f6',
        linen: '#e7edeb',
        brass: '#c08b3e',
        clay: '#c25050'
      },
      fontFamily: {
        serifDisplay: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"Source Sans 3"', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        panel: '0 8px 30px rgba(15, 23, 42, 0.07)',
        inset: 'inset 0 1px 0 rgba(255, 255, 255, 0.50)'
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        drift: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        }
      },
      animation: {
        rise: 'rise 700ms ease-out both',
        drift: 'drift 7s ease-in-out infinite'
      }
    }
  },
  plugins: []
};
