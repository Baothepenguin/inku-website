export type AuthorSlug = "bao-hua";

export interface AuthorRecord {
  name: string;
  jobTitle: string;
  location: string;
  bioShort: string;
  bioLong: string;
  links: { label: string; url: string }[];
  /** Topics this author writes with first-hand experience. Surfaced in Person schema. */
  knowsAbout: string[];
  /** ISO language tags this author can write or teach about. */
  knowsLanguage: string[];
  /** Short scannable credentials shown on the bio page and used by AI for E-E-A-T. */
  credentials: string[];
}

export const AUTHORS: Record<AuthorSlug, AuthorRecord> = {
  "bao-hua": {
    name: "Bao Hua",
    jobTitle: "Founder of Inku",
    location: "Calgary, Alberta, Canada",
    bioShort:
      "Independent software maker. Building Inku, a calm iPhone app for learning Japanese, from Calgary.",
    bioLong: `I am an independent software maker based in Calgary. I have been building shipping software for roughly a decade, most recently across small indie iOS projects, internal tools, and a few community newsletters. Inku is my current full-time project.

I started studying Japanese as an adult. I bounced off Duolingo at day 89, burned out on Anki in week three, and ended up building the tool I wished existed. That tool became Inku.

When I am not building, I am reading Kenzaburō Ōe, drinking kōcha, and trying to correct my stroke order. I answer every email to app@inkujapanese.com myself. If you want to talk about Japanese learning, indie software, or small-team design, I am reachable there.`,
    links: [
      { label: "Twitter", url: "https://twitter.com/baothepenguin" },
      { label: "Email", url: "mailto:app@inkujapanese.com" },
      { label: "GitHub", url: "https://github.com/Baothepenguin" },
    ],
    knowsAbout: [
      "Japanese language",
      "Adult language acquisition",
      "Spaced repetition",
      "FSRS algorithm",
      "Hiragana",
      "Katakana",
      "JLPT",
      "iOS development",
      "SwiftUI",
      "Indie software",
    ],
    knowsLanguage: ["en", "ja"],
    credentials: [
      "Adult Japanese learner since 2022",
      "Built Inku full-time from Calgary, Alberta",
      "10+ years shipping software (iOS, web, internal tools)",
      "Personally writes and audits every guide on this site",
    ],
  },
};
