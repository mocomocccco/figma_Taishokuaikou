/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gyar-6a6a6a": "#6a6a6a",
        "white-fff": "#fff",
        gainsboro: "#d9d9d9",
        black: "#000",
        "blue-289cac": "#289cac",
        black333333: "#333",
        "gray-ededed": "#ededed",
        whitesmoke: "#f6f6f6",
        lightgray: "#cacaca",
      },
      spacing: {},
      fontFamily: {
        yugothic: "YuGothic",
        inter: "Inter",
      },
    },
    fontSize: {
      "3xs": "10px",
      lg: "18px",
      base: "16px",
      sm: "14px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
