import { Fraunces, Instrument_Serif, Klee_One } from "next/font/google";
import localFont from "next/font/local";

// Instrument Serif is the display face: headlines, hero titles, section
// headings. Chosen for its conventional 'J' (Fraunces has a deep hooked
// descender that reads wrong in big titles). This is the critical-path
// font for LCP on most pages, so preload stays on.
export const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400"],
  style: ["normal", "italic"],
  preload: true,
});

// Fraunces is the body reading serif: paragraphs, pull quotes, long-form
// text. We do NOT preload it because it is below the fold on the LCP
// element. Using the plain variable font (no extra axes) cuts the
// generated file count significantly.
export const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-body-serif",
  display: "swap",
  preload: false,
});

// Klee One is only used for a handful of Japanese characters (the 墨
// wordmark, decorative jp spans). Not preloaded; falls back to system
// Japanese fonts until it loads.
export const klee = Klee_One({
  subsets: ["latin"],
  variable: "--font-klee",
  display: "swap",
  weight: ["400", "600"],
  preload: false,
});

// Satoshi local woff2 files for UI labels, buttons, small copy. The
// Regular weight is what most UI renders in, so keep it on critical path.
export const satoshi = localFont({
  variable: "--font-satoshi",
  display: "swap",
  preload: true,
  src: [
    {
      path: "../../public/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});
