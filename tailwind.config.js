/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00c16a", // ← change this to your preferred color
        dark_primary: "#020618",
      },
    },
  },
  plugins: [],
};

