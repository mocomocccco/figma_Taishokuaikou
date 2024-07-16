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
        cadetblue: "#42b5c7",
        "gray-ededed": "#ededed",
        black: "#000",
        "gray-": "#333",
        "gray-cecece": "#cecece",
        "gray-f6f6f6": "#f6f6f6",
      },
      spacing: {},
      fontFamily: {
        yugothic: "YuGothic",
      },
    },
    fontSize: {
      "3xs": "10px",
      xs: "12px",
      base: "16px",
      lg: "18px",
      xl: "20px",
      "7xl": "26px",
      "2xl": "21px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
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
