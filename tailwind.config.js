/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}","./component/**/*.{html,js}"],
  theme: {
     colors: {
      redTheme: "#fd5332",
      topHeader: "#2b4db9",
      blueFooter: "#252c41",
      textColor: "#92a4ca",
      greenTheme: "#00ba74",
    },
    extend: {
      fontFamily: {
        vazir: ["vazir"],
      },
    },
  },
  plugins: [],
}
