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
        // `font-serif` -> Fraunces (editorial display). Used on hero,
        // H1/H2/H3, pricing prices, pull-quotes. `font-body` and
        // `font-sans` stay on Outfit. JSX keeps existing class names
        // since most of the site is already labeled `font-serif` for
        // display surfaces and `font-body`/`font-sans` for body text.
        serif: [
          "var(--font-display)",
          "ui-serif",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "serif",
        ],
        display: [
          "var(--font-display)",
          "ui-serif",
          "Georgia",
          "serif",
        ],
        body: [
          "var(--font-outfit)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        sans: [
          "var(--font-outfit)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        japanese: [
          "var(--font-jp)",
          "Hiragino Sans",
          "Yu Gothic",
          "Meiryo",
          "sans-serif",
        ],
      },
      fontSize: {
        // Tightened top-end clamps to avoid giant headline overflow on
        // ultrawide screens. Instrument Serif prefers slightly tighter
        // tracking than Fraunces.
        "display-xl": [
          "clamp(2.75rem, 5.5vw + 1rem, 5rem)",
          { lineHeight: "1.04", letterSpacing: "-0.015em" },
        ],
        "display-lg": [
          "clamp(2.25rem, 4vw + 1rem, 3.75rem)",
          { lineHeight: "1.06", letterSpacing: "-0.012em" },
        ],
        "display-md": [
          "clamp(1.875rem, 2.8vw + 1rem, 2.875rem)",
          { lineHeight: "1.1", letterSpacing: "-0.01em" },
        ],
        "display-sm": [
          "clamp(1.625rem, 1.6vw + 1rem, 2.125rem)",
          { lineHeight: "1.18", letterSpacing: "-0.005em" },
        ],
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
      backgroundImage: {
        // Asanoha (hemp-leaf) — the most iconic Japanese pattern.
        // Encoded as a tiny SVG so it stays sharp and inherits color
        // through stroke. Use as `bg-asanoha` with a small `bg-size`.
        asanoha:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60' fill='none' stroke='%231A1A1A' stroke-opacity='0.05' stroke-width='1'><path d='M30 0 L30 60 M0 30 L60 30 M0 0 L60 60 M60 0 L0 60 M0 0 L30 30 L0 60 M60 0 L30 30 L60 60'/></svg>\")",
        // Seigaiha (waves) — flowing, used for water/transition strips.
        seigaiha:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30'><g fill='none' stroke='%231A1A1A' stroke-opacity='0.06' stroke-width='1'><circle cx='0' cy='15' r='15'/><circle cx='15' cy='15' r='15'/><circle cx='30' cy='15' r='15'/><circle cx='45' cy='15' r='15'/><circle cx='60' cy='15' r='15'/></g></svg>\")",
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
