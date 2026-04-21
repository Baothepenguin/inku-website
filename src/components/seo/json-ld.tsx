/**
 * Server-rendered JSON-LD. The content is produced server-side (no user
 * input) and React 19 supports rendering string children inside a
 * <script type="application/ld+json"> tag. The script gets written to
 * the initial HTML so crawlers that do not execute JavaScript (notably
 * the AI citation crawlers like GPTBot, ClaudeBot, and PerplexityBot)
 * can see the structured data.
 */

type JsonLdObject = Record<string, unknown>;

function serialize(block: JsonLdObject): string {
  // Escape closing script tags and unicode line separators that can
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
      {blocks.map((block, i) => (
        <script
          key={`${id}-${i}`}
          type="application/ld+json"
          // suppressHydrationWarning lets React emit the script server-
          // side but skip re-rendering its children during hydration,
          // which avoids the "Failed to execute appendChild" error that
          // React 19 otherwise throws on scripts with text children.
          suppressHydrationWarning
        >
          {serialize(block)}
        </script>
      ))}
    </>
  );
}
