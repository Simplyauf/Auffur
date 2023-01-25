/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.{js,jsx,ts,tsx}", "./src/pages/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#fca311",
        lighterPrimaryColor: "hsl(37,98%,92%)",
        secondaryColor: "#14213d",
        neutralColor: "#e5e5e5",
        LightSecondaryColor: "#14213d4d",
        lightBlack: "hsl(0deg 0% 50%)",
      },
      screens: {
        tablet: { min: "480px", max: "767px" },
        mdHeight: { raw: "(min-height:700px)" },
        lgHeight: { raw: "(min-height:850px)" },
      },
      fontFamily: {
        OpenSans: ["Open Sans", "sans-serif"],
        RobotoCondensed: ["Roboto Condensed", "sans-serif"],
        RobotoSlab: ["Roboto Slab", "serif"],
      },
    },
  },
  plugins: [],
};
