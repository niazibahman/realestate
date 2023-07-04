/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./pages/**/*.{html,js}", "./component/**/*.{html,js}"],
  theme: {
    colors: {
      transparent:colors.transparent,
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
      footerborderColor:"#353d56",
      searchbox_bg:"#19365f",
      searchbox_text:"#8b9aad",
      searchbox_border:"#dce3e8",
      textColorH:"#2D3954",
      textColorBase:"#72809D",
      tickColor:'#0ac186',
      grayBackground:"#f7f9fc",
      commentBackground:"#122947",
      commentText:"#f8f9fa",
      paginationBlackText:"#5a6f7c",
      paginationBorder:"#eaeff5",
      paginationForward:"#35434E",
      listingHeader:"#f4f5f7",
      listingFilter:"#333c56",
      advancedSearchBorder:"#e3e8ef"
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
        125: "31.25rem",
        165: "41.25rem",
      },
      inset: {
        111: "27.75rem",
        142: "35.5rem",
      },
      boxShadow: {
        radika: "0 0px 20px 0px rgba(62, 28, 131, 0.1)",
        paginationShadow:"0 2px 10px 0 rgba(216, 221, 230)"
      },
      keyframes: {
        expand_width: {
          '0%': { width: '0',opacity: '0'},
          '100%': { width: '320px' ,opacity: '1.0'}
        },
        shrink_width: {
          '0%': {width: '320'},
          '100%': {width: '0%'}
        }
      },
      animation: {
        'open-width': 'expand_width 300ms forwards',
        'close-width': 'shrink_width 60ms forwards'
      }
    },
  },
  plugins: [],
};
