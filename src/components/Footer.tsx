import { footer } from '../content/footer';
import logo from '../assets/logo-cb-codes-design.webp';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mx-auto flex max-w-6xl flex-col items-center gap-4 border-t border-surface px-6 py-8 text-sm text-muted md:flex-row md:justify-between">
      <p>
        © {currentYear} {footer.copyrightName}
      </p>
      <p className="flex items-center gap-2">
        <span lang="en">{footer.poweredByLabel}</span>
        <img src={logo} alt={footer.businessName} className="h-10 w-auto" />
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
