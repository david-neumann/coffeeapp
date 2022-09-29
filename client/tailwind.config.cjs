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
      },
    },
  },
  plugins: [],
};
