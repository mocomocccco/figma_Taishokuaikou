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
      inherit: "inherit",
    },
    screens: {
      mq650: {
        raw: "screen and (max-width: 650px)",
      },
      mq625: {
        raw: "screen and (max-width: 625px)",
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
