/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      body: ["sans-serif"],
    },
    extend: {
      colors: {
        aradPink: "#BD6678",
        aradDirtyGold: "#D3AE36",
        aradGold: "#FFD700",
        aradDark: "#2B2B2B",
        aradLight: "#424242",
        aradFontPink: "#A5525F",
        aradFontGray: "#757575",
        aradFontDark: "#212121",
        aradBG: "#F5F5F5",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
  },
  plugins: [],
};
