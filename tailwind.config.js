/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        customRed: "#F64A4A",
        customOrange: "#FB7C58",
        customYellow: "#F8CD65",
        customGreen: "#A4FFAF",
        customLightGray: "#E6E5EA",
        customGray: "#817D92",
        customDarkGray: "#24232C",
        customDarkerGray: "#18171F",
      },
      fontFamily: {
        sans: ["Roboto Mono", "monospace"],
        mono: ["JetBrainsMono", "monospace"],
      },
    },
  },
  plugins: [],
};
