/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "white-fff": "#fff",
        lightgray: "#d1d1d1",
        "gyar-6a6a6a": "#6a6a6a",
        gainsboro: "#d9d9d9",
        black: "#000",
        "blue-289cac": "#289cac",
        "gray-ededed": "#ededed",
        black333333: "#333",
      },
      spacing: {},
      fontFamily: {
        yugothic: "YuGothic",
        inter: "Inter",
      },
    },
    fontSize: {
      "3xs": "10px",
      xs: "12px",
      "7xs-2": "5.2px",
      lg: "18px",
      sm: "14px",
      base: "16px",
      "7xl": "26px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
