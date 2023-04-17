const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#141414",
        startpoint: "#222E4A",
        midpoint: "#501717",
        gray: colors.neutral,
        red: colors.rose,
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
