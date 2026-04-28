export const SITE = {
  name: "Inku",
  tagline: "A calm way to learn Japanese.",
  description:
    "Inku is a calm Japanese flashcard app for iPhone. Learn kana, JLPT vocabulary, useful phrases, audio-supported cards, handwriting, and spaced review without ads or accounts.",
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    bing: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || "",
  },
  pricing: {
    yearly: "$70.99 / year",
    monthly: "$12.99 / month",
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
