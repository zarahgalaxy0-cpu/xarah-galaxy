/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050B1A',
          900: '#0A1530',
          800: '#0F1E42',
          700: '#16295A',
          600: '#1E3470',
        },
        gold: {
          50: '#FBF6E9',
          200: '#EFD89C',
          400: '#D9B25C',
          500: '#C9A14A',
          600: '#A87F2E',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"Manrope"', 'sans-serif'],
      },
      backgroundImage: {
        'star-field': "radial-gradient(circle at 20% 20%, rgba(201,161,74,0.10) 0, transparent 35%), radial-gradient(circle at 80% 60%, rgba(201,161,74,0.08) 0, transparent 40%)",
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        twinkle: 'twinkle 3s ease-in-out infinite',
        floatY: 'floatY 6s ease-in-out infinite',
        fadeUp: 'fadeUp 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
}
