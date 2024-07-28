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

        "blue-dark": "#011627",
        black: "#0B0B0D",
      },
      backgroundImage: {
        "gradient-dark-bottom":
          "linear-gradient(180deg, rgba(1, 22, 39, 0) 0%, #011627 76.64%, #011627 100%)",
        "gradient-dark-top":
          "linear-gradient(0deg, rgba(1, 22, 39, 0) 0%, #011627 76.64%, #011627 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      dropShadow: {
        glow: ["0px 0px 8px #D3D5FD"],
        glow2: ["0px 0px 8px #D3D5FD", "0px 0px 8px #D3D5FD"],
        "glow-link-1": ["0px 0px 9px #D3D5FD"],
        "glow-link-2": ["0px 0px 9px #D3D5FD", "0px 0px 9px #D3D5FD"],
        "glow-link-3": ["0px 0px 8px #D3D5FD", "0px 0px 8px #D3D5FD"],
      },
    },
  },
  plugins: [],
};
export default config;
