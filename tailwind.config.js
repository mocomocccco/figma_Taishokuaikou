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
        black333333: "#333",
        "gray-ededed": "#ededed",
        "gray-f6f6f6": "#f6f6f6",
        "gray-cecece": "#cecece",
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
      base: "16px",
      sm: "14px",
      inherit: "inherit",
    },
    screens: {
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
