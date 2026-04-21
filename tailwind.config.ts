import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{ts,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1180px",
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        // Canonical Inku palette (matches Theme.swift)
        cream: {
          DEFAULT: "#FAF8F2",
          deep: "#F2EDDE",
          raised: "#FFFDF6",
        },
        ink: {
          DEFAULT: "#1A1A1A",
          muted: "#6B6B6B",
          subtle: "#8A8A8A",
        },
        matcha: {
          DEFAULT: "#2D8659",
          light: "#4A8565",
          deep: "#1F5F3E",
          tint: "#E4EEE7",
        },
        sakura: {
          DEFAULT: "#E85C5F",
          soft: "#F4A0A4",
        },
        sun: {
          DEFAULT: "#F5A623",
          soft: "#F0B44B",
          deep: "#C67B10",
        },
        border: {
          DEFAULT: "#E4DDC7",
        },
        // SRS card colors (from Theme.swift)
        again: "#C65D4A",
        hard: "#E8913A",
        good: "#2D6A4F",
        easy: "#6BA3D6",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "ui-serif", "Georgia", "serif"],
        sans: [
          "var(--font-satoshi)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        japanese: [
          "var(--font-klee)",
          "var(--font-fraunces)",
          "Hiragino Mincho ProN",
          "Yu Mincho",
          "serif",
        ],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 7vw + 1rem, 6rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.5rem, 5vw + 1rem, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(2rem, 3.5vw + 1rem, 3.25rem)", { lineHeight: "1.08", letterSpacing: "-0.015em" }],
        "display-sm": ["clamp(1.75rem, 2vw + 1rem, 2.25rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
      },
      letterSpacing: {
        whisper: "0.16em",
        breath: "0.08em",
      },
      borderRadius: {
        xs: "8px",
        sm: "12px",
        md: "18px",
        lg: "24px",
        xl: "32px",
      },
      boxShadow: {
        paper:
          "0 1px 0 0 rgba(26,26,26,0.04), 0 10px 30px -18px rgba(26,26,26,0.2)",
        card:
          "0 1px 0 0 rgba(26,26,26,0.03), 0 24px 60px -30px rgba(26,26,26,0.25)",
        brush: "0 30px 80px -40px rgba(45,134,89,0.55)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "brush-in": {
          "0%": { "stroke-dashoffset": "400", opacity: "0" },
          "40%": { opacity: "1" },
          "100%": { "stroke-dashoffset": "0", opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 600ms ease-out both",
        "brush-in": "brush-in 1.6s ease-in-out both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
