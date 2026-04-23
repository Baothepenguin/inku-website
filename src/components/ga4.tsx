import Script from "next/script";
import { SITE } from "@/lib/site";

/**
 * GA4 loader. Skips injection when NEXT_PUBLIC_GA_ID is empty (preview, local).
 * Respects the `Do-Not-Track` signal at runtime (the config call short-circuits).
 */
export function GA4() {
  const id = SITE.analytics.gaId;
  if (!id) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="lazyOnload"
      />
      <Script id="ga4-init" strategy="lazyOnload">
        {`
          if (navigator.doNotTrack !== "1" && window.doNotTrack !== "1") {
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${id}', {
              anonymize_ip: true,
              transport_type: 'beacon'
            });
          }
        `}
      </Script>
    </>
  );
}
