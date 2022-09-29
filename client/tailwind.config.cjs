/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        iconorange: '#EC662B',
        coffee: '#431F12',
        offwhite: '#FDF2DF',
        accentteal: '#05A8AA',
        tilewhite: '#FEF7EB',
      },
      boxShadow: {
        solid: '2px 2px rgba(67, 31, 18, 1)',
        even: '0 0 10px -3px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
