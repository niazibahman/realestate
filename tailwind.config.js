/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./pages/**/*.{html,js}","./component/**/*.{html,js}"],
  theme: {
     colors: {
      white:colors.white,
      black:colors.black,
      gray:colors.gray,
      redTheme: "#fd5332",
      topHeader: "#2b4db9",
      blueFooter: "#252c41",
      copyRightFooter:"#1b2132",
      textColor: "#92a4ca",
      footerText:"#858b9f",
      greenTheme: "#00ba74",
      borderColor:"#353d56"
    },
    extend: {
      fontFamily: {
        vazir: ["vazir"],
      },
    },
  },
  plugins: [],
}
