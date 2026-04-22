import { Outfit, Noto_Sans_JP } from "next/font/google";

/**
 * Outfit is the sole English face: display headings, body reading, UI
 * labels, buttons. Variable weight (100-900). Replaces the previous
 * Instrument Serif + Fraunces + Satoshi stack.
 */
export const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  preload: true,
});

/**
 * Noto Sans JP for every Japanese character on the site. Google's pan-
 * CJK family, designed specifically for screen rendering. Google Fonts
 * subsets this to just the Japanese + latin glyphs we actually use.
 */
export const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-jp",
  display: "swap",
  preload: false,
  weight: ["400", "500", "700"],
});
