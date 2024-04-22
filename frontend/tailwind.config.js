/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      color: {
        primaryColor: "#0067FF",
        yellowColor: "#FEB60D",
        purpleColor: "#9771FF",
        irisBlueColor: "#01B5C5",
        headingColor: "#181A1E",
        textColor: "#4E545F",
      },

      // boxShadow: {
      //   panelShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
      // },

      boxShadow: {
        "input": "0 1px 2px 0 #1018280d",
      },
      boxshadow: {
        "bshadow": "inset 0 0 0 0px #fff, inset 0 0 0 1px rgb(209 213 219 / 1), 0 0 #000",
      },
      minHeight: {
        "minus-72": "calc(100vh - 72px)",
      },
    },
  },
  plugins: [require("daisyui")],
};
