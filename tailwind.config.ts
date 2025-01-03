import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(51, 51, 51)",
          secondary: "rgb(76, 83, 98)",
          heading: "rgb(9, 74, 206)",
        },
        dark: {
          primary: "rgb(157, 188, 251)",
          secondary: "rgb(168, 175, 189)",
          heading: "rgb(157, 188, 251)",
          background: "rgb(23, 24, 28)",
        },
        background: "rgb(247, 247, 243)",
        "accent-blue": "#094ACE",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      backgroundImage: {
        "name-gradient":
          "linear-gradient(45deg, rgb(9, 74, 206), rgb(51, 51, 51))",
        "name-gradient-dark":
          "linear-gradient(45deg, rgb(157, 188, 251), rgb(168, 175, 189))",
      },
      fontSize: {
        h0: [
          "2rem",
          {
            // or whatever size you want for your name
            lineHeight: "1.2",
          },
        ],
      },
    },
  },
  darkMode: "media",
  plugins: [],
};

export default config;
