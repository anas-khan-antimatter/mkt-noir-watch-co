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
        mirror: {
          DEFAULT: "#e8e8e8",
          light: "#f0f0f0",
          dark: "#b0b0b0",
          muted: "#666666",
        },
      },
      fontFamily: {
        serif: [
          '"Playfair Display"',
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
          "Georgia",
          "serif",
        ],
        mono: [
          '"JetBrains Mono"',
          '"Fira Code"',
          "Consolas",
          "monospace",
        ],
      },
      fontSize: {
        micro: ["0.625rem", { lineHeight: "0.75rem", letterSpacing: "0.2em" }],
        detail: ["0.6875rem", { lineHeight: "1rem", letterSpacing: "0.15em" }],
      },
      backgroundImage: {
        "noir-gradient":
          "linear-gradient(135deg, #050505 0%, #111111 50%, #050505 100%)",
        "mirror-gradient":
          "linear-gradient(180deg, rgba(232,232,232,0.03) 0%, rgba(232,232,232,0.01) 100%)",
        "radial-subtle":
          "radial-gradient(ellipse at 50% 0%, rgba(232,232,232,0.08) 0%, transparent 70%)",
        "macro-grid":
          `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0v40M0 20h40' stroke='%23e8e8e8' stroke-width='0.3' fill='none' opacity='0.2'/%3E%3C/svg%3E")`,
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
        "micro-reveal": {
          "0%": { opacity: "0", transform: "scaleY(0) translateY(-4px)" },
          "100%": { opacity: "1", transform: "scaleY(1) translateY(0)" },
        },
        "pulse-mirror": {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.7" },
        },
        "lens-flare": {
          "0%": { transform: "translateX(-100%) skewX(-12deg)", opacity: "0" },
          "50%": { transform: "translateX(0%) skewX(-12deg)", opacity: "0.15" },
          "100%": { transform: "translateX(100%) skewX(-12deg)", opacity: "0" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.8s ease-out forwards",
        "micro-reveal": "micro-reveal 0.6s ease-out forwards",
        "pulse-mirror": "pulse-mirror 3s ease-in-out infinite",
        "lens-flare": "lens-flare 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;