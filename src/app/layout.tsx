import type { Metadata, Viewport } from "next";
import { outfit, notoSansJp } from "@/lib/fonts";
import { SITE } from "@/lib/site";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { GA4 } from "@/components/ga4";
import { JsonLd } from "@/components/seo/json-ld";
import {
  organizationSchema,
  websiteSchema,
  softwareApplicationSchema,
} from "@/lib/schema";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name}: A calm way to learn Japanese on iPhone`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.operator.legalName, url: SITE.url }],
  creator: SITE.operator.legalName,
  publisher: SITE.operator.legalName,
  alternates: { canonical: SITE.url },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    url: SITE.url,
    locale: "en_US",
    title: `${SITE.name}: A calm way to learn Japanese on iPhone`,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    creator: SITE.social.twitter,
  },
  other: {
    "apple-itunes-app": `app-id=${SITE.appStore.id}`,
    "format-detection": "telephone=no",
  },
  verification: {
    ...(SITE.verification.google ? { google: SITE.verification.google } : {}),
    ...(SITE.verification.bing
      ? { other: { "msvalidate.01": SITE.verification.bing } }
      : {}),
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF8F2",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${notoSansJp.variable}`}
    >
      <body className="min-h-screen antialiased">
        <JsonLd
          id="site-root"
          data={[
            organizationSchema(),
            websiteSchema(),
            softwareApplicationSchema(),
          ]}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-cream"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex min-h-[70vh] flex-col">
          {children}
        </main>
        <SiteFooter />
        <GA4 />
      </body>
    </html>
  );
}
