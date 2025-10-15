/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#dceeff',
          200: '#b9dcff',
          300: '#91c6ff',
          400: '#64a7ff',
          500: '#3b86ff',
          600: '#2768db',
          700: '#1f51af',
          800: '#1d458b',
          900: '#1b3a72',
        },
      },
      boxShadow: {
        soft: '0 10px 25px -10px rgba(2, 6, 23, 0.15)',
      },
    },
  },
  plugins: [],
}