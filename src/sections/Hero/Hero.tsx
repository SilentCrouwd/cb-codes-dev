import { hero } from '../../content/hero';

export function Hero() {
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden py-32">
      {/* Image placeholder – replaced by the AI image of Chris later */}
      <div aria-hidden="true" className="absolute inset-0 md:left-auto md:w-1/2">
        <div className="size-full bg-surface md:fade-from-left" />
        {/* Mobile: darken the image so the text stays readable */}
        <div className="absolute inset-0 bg-page/85 md:hidden" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <h1 className="font-display text-5xl md:text-7xl">{hero.name}</h1>
        <p className="mt-6 max-w-prose text-lg text-muted md:text-xl">
          {hero.story}
        </p>
        <ul className="mt-10 flex flex-wrap gap-8">
          {hero.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-accent underline-offset-4 hover:underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
