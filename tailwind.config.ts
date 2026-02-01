import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Y2K/Vaporwave palette
        garfield: {
          orange: "#FF6B35",
          peach: "#FFB997",
          pink: "#FF69B4",
          hotpink: "#FF1493",
          purple: "#9B59B6",
          violet: "#8B5CF6",
          lavender: "#DDA0DD",
          cyan: "#00CED1",
        },
        dark: {
          bg: "#0D0D0D",
          card: "#1A1A2E",
          accent: "#16213E",
        },
        light: {
          bg: "#FFF5F5",
          card: "#FFFFFF",
          accent: "#FFE4E1",
        },
      },
      backgroundImage: {
        "gradient-vaporwave":
          "linear-gradient(135deg, #FF6B35 0%, #FF69B4 50%, #9B59B6 100%)",
        "gradient-sunset":
          "linear-gradient(180deg, #FF6B35 0%, #FF1493 50%, #8B5CF6 100%)",
        "gradient-y2k":
          "linear-gradient(45deg, #FFB997 0%, #FF69B4 25%, #DDA0DD 50%, #8B5CF6 75%, #00CED1 100%)",
        "gradient-dark":
          "linear-gradient(135deg, #1A1A2E 0%, #16213E 50%, #0D0D0D 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "gradient-x": "gradient-x 15s ease infinite",
        "shimmer": "shimmer 2s linear infinite",
        "bounce-slow": "bounce 3s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      fontFamily: {
        retro: ["'Comic Sans MS'", "cursive", "sans-serif"],
      },
      boxShadow: {
        "neon-orange": "0 0 20px rgba(255, 107, 53, 0.5)",
        "neon-pink": "0 0 20px rgba(255, 105, 180, 0.5)",
        "neon-purple": "0 0 20px rgba(155, 89, 182, 0.5)",
      },
    },
  },
  plugins: [],
};
export default config;
