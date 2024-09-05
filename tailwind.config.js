/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          moderateviolet: "hsl(263, 55%, 52%)",
          verydarkgrayishblue: "hsl(217, 19%, 35%)",
          verydarkblackishblue: "hsl(219, 29%, 14%)",
          white: "hsl(0, 0%, 100%)",
        },
        neutral: {
          lightgray: "hsl(0, 0%, 81%)",
          lightgrayfifty: "hsla(0, 0%, 81%, 50%)",
          lightgrayseventy: "hsla(0, 0%, 81%, 70%)",
          lightgrayishblue: "hsl(0, 0%, 13%)",
          lightgrayishbluefifty: "hsla(0, 0%, 13%, 50%)",
          lightgrayishblueseventy: "hsla(0, 0%, 13%, 70%)",
        },
      },
    },
  },
  plugins: [],
};
