/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  // mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeOut: "fadeOut 2s ease-in forwards",
      },
      keyframes: {
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },

      variants: {
        animation: ["motion-safe"],
      },
    },
    colors: {
      gray: colors.zinc,
    },
  },
  plugins: [],
};
