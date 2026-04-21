import { TestimonialGrid } from "@/components/testimonial-grid";

export function Testimonials() {
  return (
    <section className="border-t border-border/70 bg-cream py-24 md:py-32">
      <div className="container">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="label-eyebrow mb-4 text-matcha">From the learners</p>
          <h2 className="font-serif text-display-md tracking-tight text-balance">
            Quiet app. Loud reactions.
          </h2>
          <p className="mt-4 font-serif text-lg text-ink-muted">
            Real people, real posts. Tap any card to see where it came from.
          </p>
        </div>
        <TestimonialGrid />
      </div>
    </section>
  );
}
