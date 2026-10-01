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
          950: "#050505",
          900: "#0a0a0a",
          850: "#111111",
          800: "#1a1a1a",
          750: "#222222",
          700: "#2a2a2a",
          600: "#3a3a3a",
          500: "#6b6b6b",
          400: "#9a9a9a",
          300: "#c4c4c4",
          200: "#e0e0e0",
          100: "#f5f5f5",
          50: "#fafafa",
        },
        platinum: {
          900: "#e8e8e8",
          800: "#d4d4d4",
          700: "#bfbfbf",
          600: "#a8a8a8",
          500: "#8a8a8a",
          400: "#6e6e6e",
          300: "#545454",
        },
        mirror: {
          light: "rgba(232,232,232,0.08)",
          medium: "rgba(232,232,232,0.15)",
          strong: "rgba(232,232,232,0.3)",
        },
        accent: {
          red: "#b84747",
          blue: "#4a6fa5",
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
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "sans-serif",
        ],
        mono: [
          '"SF Mono"',
          '"SFMono"',
          "Consolas",
          '"Liberation Mono"',
          "Menlo",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};
export default config;