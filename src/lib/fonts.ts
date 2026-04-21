import { Fraunces, Instrument_Serif, Klee_One } from "next/font/google";
import localFont from "next/font/local";

// Instrument Serif is the display face: headlines, hero titles, section
// headings. Chosen for its conventional 'J' (Fraunces has a deep hooked
// descender that reads wrong in big titles).
export const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400"],
  style: ["normal", "italic"],
});

// Fraunces remains the body reading serif: paragraphs, pull quotes,
// long-form text. It is designed for comfortable body-size reading with
// optical-size scaling.
export const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-body-serif",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

export const klee = Klee_One({
  subsets: ["latin"],
  variable: "--font-klee",
  display: "swap",
  weight: ["400", "600"],
});

export const satoshi = localFont({
  variable: "--font-satoshi",
  display: "swap",
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
