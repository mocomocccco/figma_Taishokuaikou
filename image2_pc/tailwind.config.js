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
        "gyar-6a6a6a": "#6a6a6a",
        "blue-289cac": "#289cac",
        gainsboro: "#d9d9d9",
        cadetblue: "#42b5c7",
        "gray-ededed": "#ededed",
        black: "#000",
        black333333: "#333",
      },
      spacing: {},
      fontFamily: {
        yugothic: "YuGothic",
      },
    },
    fontSize: {
      "3xs": "10px",
      xs: "12px",
      lg: "18px",
      sm: "14px",
      base: "16px",
      inherit: "inherit",
    },
    screens: {
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
