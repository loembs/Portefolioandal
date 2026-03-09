/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        yellow: "#FED144",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      backgroundImage: {
        "hero-pattern":
          "url('https://res.cloudinary.com/dsdxrx5je/image/upload/v1689716288/herobg_094859e09f_c46db2dcb3.png')",
      },
    },
  },
  plugins: [],
}
