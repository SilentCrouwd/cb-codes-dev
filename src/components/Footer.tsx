import { footer } from '../content/footer';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mx-auto flex max-w-6xl flex-col items-center gap-4 border-t border-surface px-6 py-8 text-sm text-muted md:flex-row md:justify-between">
      <p>
        © {currentYear} {footer.copyrightName}
      </p>
      <p className="flex items-center gap-2">
        {footer.poweredByLabel}
        {/* Logo placeholder – replaced by the cb.codes.design logo later */}
        <span aria-hidden="true" className="size-5 rounded-full bg-surface" />
        <span className="text-text">{footer.businessName}</span>
      </p>
      <nav aria-label={footer.navLabel}>
        <ul className="flex gap-6">
          {footer.links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-text">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
