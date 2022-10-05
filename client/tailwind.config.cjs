/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Caslon Doric', 'sans-serif'],
    },
    extend: {
      colors: {
        coffee: '#62453C',
      },
      boxShadow: {
        solid: '2px 2px rgba(67, 31, 18, 1)',
        even: '0 0 10px -3px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        '4xl': '1.75rem',
        '5xl': '2rem',
      },
    },
  },
  plugins: [],
};
