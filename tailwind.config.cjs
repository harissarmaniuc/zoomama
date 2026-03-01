/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1f2937',
        pine: '#00683D',
        moss: '#0B7D4E',
        forest: '#004D2C',
        sage: '#bcd5c8',
        parchment: '#e4ede7',
        linen: '#cfddd6',
        cream: '#fcfbf8',
        sand: '#efe7dc',
        brass: '#b07c2e',
        clay: '#c25050'
      },
      fontFamily: {
        serifDisplay: ['"Times New Roman"', 'Times', 'serif'],
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
        },
        ping: {
          '75%, 100%': { transform: 'scale(2)', opacity: '0' }
        }
      },
      animation: {
        rise: 'rise 700ms ease-out both',
        drift: 'drift 7s ease-in-out infinite',
        ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite'
      }
    }
  },
  plugins: []
};
