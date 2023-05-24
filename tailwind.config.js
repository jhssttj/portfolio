/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        blue: "#116DFF",
        blueH: "#0d57cc",
        grey: "#F4ECE6",
        beige: "#E6DACE",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        cover1: "url('./assets/cover/cover1.jpg')",
        cover1s: "url('./assets/cover/cover1-s.jpg')",
        cover1xs: "url('./assets/cover/cover1-xs.jpg')",
        cover1xxs: "url('./assets/cover/cover1-xxs.jpg')",
        cover1xxxs: "url('./assets/cover/cover1-xxxs.jpg')",
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
