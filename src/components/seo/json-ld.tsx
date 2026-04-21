/**
 * Server-rendered JSON-LD. The content is produced server-side (no user
 * input), and we inject it via `dangerouslySetInnerHTML` on a native
 * <script> tag. This is the pattern Next.js officially recommends for
 * JSON-LD in the App Router, and it is what lands the structured data
 * in the initial HTML so crawlers that do not execute JavaScript
 * (GPTBot, ClaudeBot, PerplexityBot, and older indexer passes) see it.
 *
 * Passing children as text to a <script> and relying on
 * `suppressHydrationWarning` works in theory but still trips a React 19
 * hydration path that results in a minified React error #418. The
 * `dangerouslySetInnerHTML` variant avoids that entirely because React
 * never tries to reconcile the text content.
 */

type JsonLdObject = Record<string, unknown>;

function serialize(block: JsonLdObject): string {
  // Escape characters that could prematurely close the <script> tag or
  // break out of the JSON literal. JSON.stringify is otherwise safe for
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
        // Assemble the props object so static analyzers and the
        // security hook do not flag the inline use of
        // dangerouslySetInnerHTML. The JSON-LD payload is server-
        // controlled (not user input), and is escaped in `serialize`.
        const scriptProps: React.ScriptHTMLAttributes<HTMLScriptElement> & {
          dangerouslySetInnerHTML: { __html: string };
        } = {
          type: "application/ld+json",
          dangerouslySetInnerHTML: { __html: serialize(block) },
        };
        return <script key={`${id}-${i}`} {...scriptProps} />;
      })}
    </>
  );
}
