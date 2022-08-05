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
      gray: {
        50: "#fafafa",
        100: "#f2f2f4",
        200: "#e4e4e7",
        300: "#a0a0a0",
        400: "#a1a1aa",
        500: "#71717a",
        600: "#52525b",
        700: "#3f3f46",
        800: "#27272a",
        900: "#101010",
      },

      yellow: {
        50: "#fefce8",
        100: "#fef9c3",
        200: "#fef08a",
        300: "#fde047",
        400: "#facc15",
        500: "#fdbb34",
        600: "#ca8a04",
        700: "#a16207",
        800: "#854d0e",
        900: "#b07c19",
      },

      wds: {
        50: "#f2f2f2",
        100: "#d5d9cf",
        200: "#e4e4e7",
        300: "#a2a69e",
        400: "#595a55",
        500: "#595a55",
        600: "#4b4b4d",
        700: "#595a55",
        800: "#27272a",
        900: "#0d0d0d",
      },

      sss: {
        50: "#213c96",
        100: "#d5d9cf",
        200: "#9ba8d0",
        300: "#d6d8d9",
        400: "#595a55",
        500: "#595a55",
        600: "#4b4b4d",
        700: "#595a55",
        800: "#27272a",
        900: "#0d0d0d",
      },
    },
  },
  plugins: [],
};
