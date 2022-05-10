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
    screens: {
      xs: "501px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1800px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      gridTemplateRows: {
        7: "repeat(7, minmax(0, 1fr))",
        8: "repeat(8, minmax(0, 1fr))",

        layout: "200px minmax(900px, 1fr) 100px",
      },
    },
  },
  plugins: [],
};
