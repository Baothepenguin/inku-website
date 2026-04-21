export const SITE = {
  name: "Inku",
  tagline: "A calm way to learn Japanese.",
  description:
    "Inku is a flashcard app for iPhone that teaches Japanese the way you'd want to learn it: calm, deliberate, native voice. Hiragana, katakana, N5 vocab, phrases, and a handwriting mode, all on one quiet screen.",
  url: "https://inkujapanese.com",
  supportEmail: "app@inkujapanese.com",
  operator: {
    legalName: "Bao Hua",
    role: "Sole proprietor",
    address: {
      street: "The Ampersand, 140 10 Avenue SW",
      locality: "Calgary",
      region: "AB",
      postalCode: "T2R 0A3",
      country: "Canada",
    },
  },
  social: {
    twitter: "@inkujapanese",
    instagram: "@inkujapanese",
  },
  appStore: {
    id: process.env.NEXT_PUBLIC_APP_STORE_ID || "0000000000",
    urlBase:
      process.env.NEXT_PUBLIC_APP_STORE_URL ||
      "https://apps.apple.com/app/id0000000000",
  },
  analytics: {
    gaId: process.env.NEXT_PUBLIC_GA_ID || "",
  },
  pricing: {
    yearly: "$29.99 / year",
    monthly: "$4.99 / month",
    trialDays: 7,
  },
} as const;

export function appStoreUrl(campaign: string = "web"): string {
  const base = SITE.appStore.urlBase;
  const params = new URLSearchParams({
    mt: "8",
    utm_source: "inkujapanese.com",
    utm_medium: "web",
    utm_campaign: campaign,
  });
  return `${base}?${params.toString()}`;
}
