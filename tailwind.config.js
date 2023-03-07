/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./pages/**/*.{html,js}", "./component/**/*.{html,js}"],
  theme: {
    colors: {
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
      redTheme: "#fd5332",
      topHeader: "#2b4db9",
      blueFooter: "#252c41",
      copyRightFooter: "#1b2132",
      textColor: "#92a4ca",
      textColorBase: "#72809D",
      footerText: "#858b9f",
      greenTheme: "#00ba74",
<<<<<<< HEAD
      footerborderColor:"#353d56",
      searchbox_bg:"#19365f",
      searchbox_text:"#8b9aad",
      searchbox_border:"#dce3e8",
      textColorH:"#2D3954",
      textColorBase:"#72809D",
      tickColor:'#0ac186'
=======
      footerborderColor: "#353d56",
      searchbox_bg: "#19365f",
      searchbox_text: "#8b9aad",
      searchbox_border: "#dce3e8",
>>>>>>> 133648ae97651391cf72e075699abcc73c05c2cb
    },
    extend: {
      fontFamily: {
        vazir: ["vazir"],
      },
      backgroundImage: {
        home_search: "url('../public/search_bg.webp')",
      },
      width: {
        128: "32rem",
      },
      height: {
        104: "26rem",
        165: "41.25rem",
      },
      inset: {
        111: "27.75rem",
        142: "35.5rem",
      },
      boxShadow: {
        radika: "0 0px 20px 0px rgba(62, 28, 131, 0.1)",
      },
    },
  },
  plugins: [],
};
