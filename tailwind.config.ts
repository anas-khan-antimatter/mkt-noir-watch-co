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
        noir: {
          950: "#000000",
          900: "#050505",
          850: "#0a0a0a",
          800: "#111111",
          700: "#1a1a1a",
          600: "#2a2a2a",
          500: "#444444",
          400: "#666666",
          300: "#888888",
          200: "#aaaaaa",
          100: "#cccccc",
          50: "#e8e8e8",
        },
        platinum: {
          950: "#b0b0b0",
          900: "#c4c4c4",
          800: "#d4d4d4",
          700: "#e0e0e0",
          600: "#e8e8e8",
          500: "#f0f0f0",
          400: "#f5f5f5",
          300: "#f8f8f8",
          200: "#fafafa",
          100: "#fcfcfc",
          50: "#ffffff",
        },
        mirror: {
          DEFAULT: "#e8e8e8",
          light: "#f0f0f0",
          dark: "#b0b0b0",
          muted: "#666666",
        },
      },
      fontFamily: {
        serif: [
          '"Cormorant Garamond"',
          "Georgia",
          "Cambria",
          '"Times New Roman"',
          "Times",
          "serif",
        ],
        sans: [
          '"Inter"',
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "sans-serif",
        ],
        display: [
          '"Playfair Display"',
          '"Cormorant Garamond"',
          "Georgia",
          "serif",
        ],
        mono: [
          '"JetBrains Mono"',
          '"Fira Code"',
          "monospace",
        ],
      },
      fontSize: {
        "micro": ["0.625rem", { lineHeight: "0.75rem", letterSpacing: "0.2em" }],
        "detail": ["0.6875rem", { lineHeight: "1rem", letterSpacing: "0.15em" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
        "38": "9.5rem",
      },
      backgroundImage: {
        "noir-gradient":
          "linear-gradient(135deg, #050505 0%, #111111 50%, #050505 100%)",
        "platinum-gradient":
          "linear-gradient(135deg, #b0b0b0 0%, #e8e8e8 50%, #d4d4d4 100%)",
        "mirror-gradient":
          "linear-gradient(180deg, rgba(232,232,232,0.03) 0%, rgba(232,232,232,0.01) 100%)",
        "radial-subtle":
          "radial-gradient(ellipse at 50% 0%, rgba(232,232,232,0.08) 0%, transparent 70%)",
      },
      boxShadow: {
        "mirror-sm": "0 1px 1px rgba(232,232,232,0.06)",
        "mirror-md": "0 4px 24px rgba(232,232,232,0.04)",
        "mirror-lg": "0 8px 48px rgba(232,232,232,0.06)",
        "mirror-inner": "inset 0 1px 0 rgba(232,232,232,0.06)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "reveal": {
          "0%": { opacity: "0", transform: "scaleY(0)" },
          "100%": { opacity: "1", transform: "scaleY(1)" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.7" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.8s ease-out forwards",
        "reveal": "reveal 0.6s ease-out forwards",
        "pulse-subtle": "pulse-subtle 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;