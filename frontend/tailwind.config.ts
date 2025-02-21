import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nueubig: ["Bold", "sans-serif"],
        nueuthin: ["Regular", "sans-serif"],
      },
      colors: {
        primary: "#FFD600",
        secondary: "black",
        secondary2: "white",

        dark1: "#0F0D0D",
        dark2: "#16171F",

        light1: "#FAFAFB",
        light2: "#FFFFFF",
        gray1: "#737A85",
      },
    },
  },
  plugins: [],
} satisfies Config;
