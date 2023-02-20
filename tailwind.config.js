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
<<<<<<< HEAD
      textColorBase: "#72809D",
      textColorH: "#2D3954",
      footerText: "#858b9f",
      greenTheme: "#19b12a",
      borderColor: "#353d56",
      ratingColor: "#ff9800",
=======
      footerText:"#858b9f",
      greenTheme: "#00ba74",
      footerborderColor:"#353d56",
      searchbox_bg:"#19365f",
      searchbox_text:"#8b9aad",
      searchbox_border:"#dce3e8",
>>>>>>> 020e86f8ba8ee6ea690b233ed597a3ba9ecd086f
    },
    extend: {
      fontFamily: {
        vazir: ["vazir"],
      },
      backgroundImage: {
        'home_search': "url('../public/search_bg.webp')",
      },
      width: {
        '128': '32rem',
      },
      height: {
        '165':'41.25rem'
      },
    },
  },
  plugins: [],
};
