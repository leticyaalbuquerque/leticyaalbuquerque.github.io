/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'roxo': '#57047a',
        'cinza-claro': '#F2F2F0',
        'cinza': '#A6A5A4',
        'cinza-medio': '#595857',
        'cinza-escuro': '#262626',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}
