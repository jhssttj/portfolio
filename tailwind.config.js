/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        red: "#EF5350",
        blue: "#65FADE",
        yellow: "#EFD81D",
        purple: "#A30B9E",
        green:"#72BF6A",
        grey: "#EDEDED",
      },
      fontFamily: {
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
      backgroundImage: {
        cover1: "url('./assets/test/cover1.jpg')",
        test2: "url('./assets/test/test3.jpg')",
      },
      boxShadow: {
        "sd": '5px 5px black',
        "sm":  '2px 2px black'
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
