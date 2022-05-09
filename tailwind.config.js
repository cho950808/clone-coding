const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      primary: "#e7473c",
      secondary: "",
      accent: "",
      info: "",
      warning: "",
      danger: "",
      light: "",
      dark: "",
    },
    extend: {},
  },
  plugins: [],
};
