import { Outfit, Fraunces } from "next/font/google";
import localFont from "next/font/local";

/**
 * Outfit is the body / UI face: paragraph text, eyebrows, buttons,
 * labels, navigation. Variable weight (100-900).
 */
export const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "optional",
  preload: false,
});

/**
 * Fraunces is the editorial display face: hero headlines, section H2s,
 * pricing prices, pull-quotes. Variable weight + optical-size + soft
 * axis. The optical-size axis automatically tightens at large sizes,
 * which Outfit cannot do. This is the "calm, considered" voice of the
 * brand and the single biggest typography move on the site.
 */
export const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "optional",
  preload: false,
  axes: ["opsz", "SOFT"],
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
