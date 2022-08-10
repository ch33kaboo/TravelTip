/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        recursive: ["Marck Script"],
        cool: ["Carter One"],
      },
      scale: {
        102: '1.02'
      },
      animation: {
        shake: "shake 1s 2",
      },
      keyframes: {
        shake: {
          "0%": {
            transform: "rotate(0)",
          },
          "33%": {
            transform: "rotate(15deg)",
          },
          "66%": {
            transform: "rotate(-15deg)",
          },
          "100%": {
            transform: "rotate(0)",
          },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: false,
    base: false,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
