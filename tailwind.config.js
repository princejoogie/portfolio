const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
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
  plugins: [require("@tailwindcss/line-clamp")],
};
