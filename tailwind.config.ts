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
        white: "#ffffff",
        light: "#929AAB",
        dark: "#474A56",
        "blue-light": "#00C9E0",
        "green-light": "#41EAD4",
        purple: "#BE41EA",

        "blue-dark": "#011627",
        "blue-dark-1": "#011627",
        "blue-dark-2": "#133149",
        black: "#0B0B0D",
      },
      backgroundImage: {
        "gradient-dark-bottom":
          "linear-gradient(180deg, rgba(1, 22, 39, 0) 0%, #011627 76.64%, #011627 100%)",
        "gradient-dark-top":
          "linear-gradient(0deg, rgba(1, 22, 39, 0) 0%, #011627 76.64%, #011627 100%)",
        "gradient-dark-top-2":
          "linear-gradient(0deg, hsla(0, 0%, 100%, 0) 0%, #011627 100%)",
        "gradient-dark-top-light":
          "linear-gradient(0deg, rgba(255 255 255 / 0) 0%, #01162793 76.64%, #011627fB 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-white-top":
          "linear-gradient(180deg, rgba(255 255 255 / 0) 0%, #ffffff 76.64%, #ffffff 100%)",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",

        welcome: "url('/images/welcome-background.jpg')",
        "pick-your-trip": "url('/images/pick-your-trip/pick-your-trip.jpg')",
      },
      dropShadow: {
        glow: ["0px 0px 8px #D3D5FD"],
        glow2: ["0px 0px 8px #D3D5FD", "0px 0px 8px #D3D5FD"],
        "glow-btn-1": ["0px 2px 4px #00C9E0a0"],
        "glow-link-1": ["0px 0px 9px #D3D5FD"],
        "glow-link-2": ["0px 0px 9px #D3D5FD", "0px 0px 9px #D3D5FD"],
        "glow-link-3": ["0px 0px 8px #D3D5FD", "0px 0px 8px #D3D5FD"],
      },
      fontFamily: {
        "libre-caslon": ["Libre Caslon Text", "serif"],
        "albert-sans": ["Albert Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
