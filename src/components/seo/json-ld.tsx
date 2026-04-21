import Script from "next/script";

type JsonLdObject = Record<string, unknown>;

function serialize(block: JsonLdObject): string {
  // Escape characters that would otherwise break out of the <script> block.
  return JSON.stringify(block)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026");
}

/**
 * Renders one or more JSON-LD blocks inside <script type="application/ld+json">.
 * Uses next/script with inline children so crawlers and AI engines see the
 * structured data without executing JavaScript.
 */
export function JsonLd({
  data,
  id = "jsonld",
}: {
  data: JsonLdObject | JsonLdObject[];
  id?: string;
}) {
  const blocks = Array.isArray(data) ? data : [data];
  return (
    <>
      {blocks.map((block, i) => (
        <Script
          key={`${id}-${i}`}
          id={`${id}-${i}`}
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {serialize(block)}
        </Script>
      ))}
    </>
  );
}
