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
        cadetblue: {
          "100": "#42b5c7",
          "200": "rgba(66, 181, 199, 0.09)",
        },
        "gray-": "#333",
        "gray-ededed": "#ededed",
      },
      spacing: {},
      fontFamily: {
        yugothic: "YuGothic",
      },
    },
    fontSize: {
      "3xs": "10px",
      lg: "18px",
      base: "16px",
      inherit: "inherit",
    },
    screens: {
      mq600: {
        raw: "screen and (max-width: 600px)",
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
