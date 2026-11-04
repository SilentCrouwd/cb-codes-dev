import { contact } from '../../content/contact';
import contactPhoto from '../../assets/contact-chris.webp';

export function Contact() {
  return (
    <section
      id="kontakt"
      aria-labelledby="kontakt-heading"
      className="mx-auto max-w-6xl border-t border-surface px-6 py-16 md:grid md:py-24 md:grid-cols-[2fr_1fr] md:items-center md:gap-16"
    >
      <div>
        <h2 id="kontakt-heading" className="font-display text-3xl md:text-4xl">
          {contact.heading}
        </h2>
        <p className="mt-6 max-w-prose text-lg">{contact.text}</p>
        <ul className="mt-8 space-y-3 text-xl">
          {contact.links.map((link) => (
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

      <img
        src={contactPhoto}
        alt={contact.photoAlt}
        width={341}
        height={512}
        loading="lazy"
        className="mt-12 aspect-4/5 w-full max-w-xs rounded-lg object-cover md:mt-0"
      />
    </section>
  );
}
