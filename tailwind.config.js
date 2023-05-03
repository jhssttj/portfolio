/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        red: "#DC4492",
        blue: "#65FADE",
        yellow: "#EFD81D",
        purple: "#A30B9E",
        green:"#72BF6A",
        grey: "#EDEDED",
        "deep-blue" : "#01026",
        "dark-grey" : "#757575",
        "opaque-black" : "rgba(0,0,0,0.5)"
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
        brush: "url('./assets/brush/brush.png')",
        brush2: "url('./assets/brush/brush2.jpg')",
        brush3: "url('./assets/brush/brush3.png')",
        brush4: "url('./assets/brush/brush4.png')",
        brush5: "url('./assets/brush/brush5.png')",
      },
      boxShadow: {
        "sd": '5px 5px black'
      },
    },
    screens: {
      xxs: '360px',
      xs: '480px',
      sm: '768px',
      md: '1060px'
    }
  },
  plugins: [],
}
