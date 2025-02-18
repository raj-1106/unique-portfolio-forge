
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        retro: {
          blue: "#4040FF",
          mint: "#40FFB5",
          dark: "#1A1A1A",
          light: "#F5F5F5",
          gray: "#808080"
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
      },
      fontFamily: {
        mono: ["Space Mono", "monospace"],
        display: ["VT323", "monospace"]
      },
      keyframes: {
        "window-appear": {
          "0%": { 
            opacity: "0",
            transform: "scale(0.95)"
          },
          "100%": { 
            opacity: "1",
            transform: "scale(1)"
          }
        }
      },
      animation: {
        "window-appear": "window-appear 0.3s ease-out forwards"
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
