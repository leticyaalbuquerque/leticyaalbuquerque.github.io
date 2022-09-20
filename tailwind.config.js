/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html", "main.js"],
  theme: {
    extend: {
      backgroundImage: {
        'portfolio1': "url('/images/projeto-1.png')",
        'portfolio2': "url('/images/projeto-2.png')"
      },
      colors: {
        'cinza-navbar': '#f2f2f2',
        'rosa': '#d001d8',
        'roxo': '#57047a',
        'azul-escuro': '#1d1053',
        'azul-medio': '#014469',
        'azul-claro': '#02b6c4',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}
