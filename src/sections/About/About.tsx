import { about } from '../../content/about';

export function About() {
  return (
    <section
      id="ueber-mich"
      aria-labelledby="ueber-mich-heading"
      className="mx-auto max-w-6xl border-t border-surface px-6 py-16 md:grid md:py-24 md:grid-cols-[1fr_2fr] md:gap-16"
    >
      <h2 id="ueber-mich-heading" className="font-display text-3xl md:text-4xl">
        {about.heading}
      </h2>
      <div className="mt-6 max-w-prose space-y-5 text-lg md:mt-0">
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
