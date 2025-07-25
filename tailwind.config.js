/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{html,js}', // or ./resources/views/**/*.blade.php if using Laravel
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        noto: ['"Noto Serif"', 'serif'],
      },
    },
  },
  plugins: [],
}
