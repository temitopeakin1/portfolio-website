/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{html,ts,md}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Righteous", "sans-serif"],
        title: ["Manrope", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#FFA500",
        background: "#FFFFFF",
      },
      fontWeight: {
        light: "300",
        normal: "450",
        medium: "500",
      },
    },
  },
  plugins: [],
};
