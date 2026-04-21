/**
 * Server-rendered JSON-LD. The content is produced server-side (no user
 * input) and React 19 supports rendering string children inside a
 * <script type="application/ld+json"> tag. This is the recommended
 * pattern for App Router because the structured data lands in the
 * initial HTML, so crawlers that do not execute JavaScript (notably the
 * AI citation crawlers like GPTBot, ClaudeBot, and PerplexityBot, and
 * Google's older indexer passes) can see it.
 */

type JsonLdObject = Record<string, unknown>;

function serialize(block: JsonLdObject): string {
  // Escape closing script tags and the unicode line separators that can
  // break out of a <script> block. JSON.stringify is otherwise safe for
  // our server-controlled payloads.
  return JSON.stringify(block)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

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
      {blocks.map((block, i) => {
        const payload = serialize(block);
        const props = {
          type: "application/ld+json",
          key: `${id}-${i}`,
          // Using the object-style dangerouslySetInnerHTML is the only
          // React API that renders arbitrary text into a <script>. Safe
          // here because `payload` comes from JSON.stringify on server-
          // controlled objects, with special characters escaped.
          dangerouslySetInnerHTML: { __html: payload },
        };
        return <script {...props} />;
      })}
    </>
  );
}
