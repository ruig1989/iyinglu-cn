/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0a2540',
        'primary-dark': '#051a2c',
        secondary: '#b8924a',
        'secondary-light': '#d4b06a',
        gray: '#6b7a8a',
        'gray-border': '#e8ecf0',
        'gray-light': '#f8fafc',
      },
      fontFamily: { sans: ['Noto Sans SC', '思源雅黑', 'sans-serif'] },
      borderRadius: { card: '24px' },
      boxShadow: {
        sm: '0 4px 12px rgba(0,0,0,0.03), 0 1px 2px rgba(0,0,0,0.02)',
        md: '0 12px 28px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.02)',
        hover: '0 24px 48px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.04)',
      },
      animation: { 'fade-in': 'fadeIn 0.5s ease-out' },
      keyframes: { fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } } },
    },
  },
  plugins: [],
};