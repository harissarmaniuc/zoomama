/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1e2a24',
        pine: '#234338',
        moss: '#385847',
        sage: '#d6dfd7',
        parchment: '#f3efe6',
        linen: '#ece4d5',
        brass: '#ab8a4c',
        clay: '#8e5a43'
      },
      fontFamily: {
        serifDisplay: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"Source Sans 3"', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        panel: '0 16px 40px rgba(25, 35, 30, 0.14)',
        inset: 'inset 0 1px 0 rgba(255, 255, 255, 0.45)'
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
