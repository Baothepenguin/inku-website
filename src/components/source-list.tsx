export interface SourceItem {
  label: string;
  url: string;
}

export function SourceList({
  sources,
  lastChecked,
}: {
  sources: SourceItem[];
  lastChecked: string;
}) {
  return (
    <div className="not-prose rounded-lg border border-border bg-cream-raised p-5">
      <p className="label-eyebrow mb-3 text-matcha">Sources and pricing</p>
      <p className="font-sans text-sm leading-relaxed text-ink-muted">
        Pricing last checked: {lastChecked}. Prices can vary by country,
        platform, checkout, tax, and promotion.
      </p>
      <ul className="mt-4 space-y-2 font-sans text-sm">
        {sources.map((source) => (
          <li key={source.url}>
            <a
              href={source.url}
              className="text-matcha underline-offset-4 hover:underline"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              {source.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
