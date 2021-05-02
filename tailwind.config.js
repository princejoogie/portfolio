const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#141414",
        startpoint: "#222E4A",
        midpoint: "#501717",
        gray: colors.trueGray,
        red: colors.rose,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
