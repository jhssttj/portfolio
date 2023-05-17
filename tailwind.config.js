/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        red: "#EF5350",
        blue: "#116DFF",
        blueH: "#0d57cc",
        yellow: "#EFD81D",
        purple: "#A30B9E",
        green:"#72BF6A",
        grey: "#E6E6E6",
        grey2: "#F4ECE6",
        beige: "#E6DACE",
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
        cover1: "url('./assets/cover/cover1.jpg')",
        cover1s: "url('./assets/cover/cover1-s.jpg')",
        cover1xs: "url('./assets/cover/cover1-xs.jpg')",
        cover1xxs: "url('./assets/cover/cover1-xxs.jpg')",
        cover1xxxs: "url('./assets/cover/cover1-xxxs.jpg')",
        cover2: "url('./assets/cover/cover2.jpg')",
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
  variants: {
    fill: ['hover', 'focus'], // this line does the trick
  },
  plugins: [],
}
