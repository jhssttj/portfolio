/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        red: "#DC4492",
        blue: "#65FADE",
        yellow: "#FDCC49",
        purple: "#A30B9E",
        grey: "#EDEDED",
        "deep-blue" : "#01026",
        "dark-grey" : "#757575",
        "opaque-black" : "rgba(0,0,0,0.35)"
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",
        "gradient-rainblue":
          "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        noto: ["Noto Sans", 'sans-serif'],
      },
      content: {
        brush: "url('./assets/brush.png')",
        work1: "url('./assets/AltusGroup.png')"
      }
    },
    screens: {
      xs: '480px',
      sm: '768px',
      md: '1060px'

    }
  },
  plugins: [],
}
