import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Inku — Learn Japanese",
    short_name: "Inku",
    description:
      "A calm iPhone app for learning Japanese. Flashcards, native voice, no streaks.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF8F2",
    theme_color: "#FAF8F2",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/apple-touch-icon.svg",
        sizes: "180x180",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
