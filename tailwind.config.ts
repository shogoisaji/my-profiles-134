import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      saturate: {
        5: ".05",
        100: "1.0",
      },
      animation: {
        scrollHorizontally: "scrollHorizontally 10s linear infinite",
      },
      keyframes: {
        scrollHorizontally: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      colors: {
        "custom-green": "#5C967A",
        "custom-yellow": "#F1DBA3",
        "custom-blue": "#A1CCD1",
        "custom-blown": "#7A5B51",
        "custom-darkBlue": "#474F7A",
        "custom-darkGreen": "#4A8E8E",
        "custom-darkNavy": "#051232",
        "custom-orange": "#ED6560",
        "custom-black": "#081933",
        "custom-dark": "#1A1F33",
        "custom-textWhite": "#D4D8F0",
      },
    },
  },
  plugins: [],
};
export default config;
