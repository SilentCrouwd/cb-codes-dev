import { hero } from '../../content/hero';
import heroImage from '../../assets/hero-chris.webp';

export function Hero() {
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden py-32">
      {/* Decorative background image – the name is already shown as text */}
      <div
        aria-hidden="true"
        className="absolute inset-0 md:left-auto md:w-1/2"
      >
        <img
          src={heroImage}
          alt=""
          fetchPriority="high"
          className="size-full object-cover md:fade-from-left"
        />
        {/* Mobile: darken the image so the text stays readable */}
        <div className="absolute inset-0 bg-page/85 md:hidden" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <h1 className="font-display text-5xl motion-safe:animate-fade-in-up motion-safe:[animation-delay:300ms] md:text-7xl">
          {hero.firstName}{' '}
          {/* Last name on its own line below lg, so the name stays clear of the image */}
          <span className="block lg:inline">{hero.lastName}</span>
        </h1>
        <p className="mt-6 max-w-prose text-lg text-muted motion-safe:animate-fade-in-up motion-safe:[animation-delay:600ms] md:text-xl">
          {hero.story}
        </p>
        <ul className="mt-10 flex flex-wrap gap-8 motion-safe:animate-fade-in-up motion-safe:[animation-delay:900ms]">
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
