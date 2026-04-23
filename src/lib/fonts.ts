import { Outfit } from "next/font/google";
import localFont from "next/font/local";

/**
 * Outfit is the sole English face: display headings, body reading, UI
 * labels, buttons. Variable weight (100-900). Replaces the previous
 * Instrument Serif + Fraunces + Satoshi stack.
 */
export const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "optional",
  preload: false,
});

/**
 * Noto Sans JP for Japanese UI. The first screen uses a small local
 * subset so Japanese glyphs do not block the hero paint.
 */
export const notoSansJp = localFont({
  src: [
    {
      path: "../../public/fonts/noto-sans-jp-400-critical.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/noto-sans-jp-700-critical.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-jp",
  display: "optional",
  preload: false,
});
