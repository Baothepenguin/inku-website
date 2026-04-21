import Link from "next/link";
import { SumiBrush } from "@/components/sumi-brush";

export default function NotFound() {
  return (
    <section className="container flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <SumiBrush
        variant="enso"
        className="mb-8 h-28 w-28 opacity-30"
      />
      <p className="label-eyebrow mb-4 text-matcha">404</p>
      <h1 className="font-serif text-display-md tracking-tight text-ink">
        Nothing here.
      </h1>
      <p className="mt-4 max-w-xl font-serif text-lg text-ink-muted">
        The page you are looking for moved, got renamed, or never existed.
        Start from the home page and follow the trail back in.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-matcha px-5 py-3 font-sans font-medium text-cream shadow-paper hover:bg-matcha-deep"
        >
          Back to home
        </Link>
        <Link
          href="/guides"
          className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-cream/70 px-5 py-3 font-sans font-medium text-ink hover:bg-cream-deep"
        >
          Browse the guides
        </Link>
      </div>
    </section>
  );
}
