import { navItems } from '../content/navigation';
import { Logo } from './Logo';

export function Header() {
  return (
    <header className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8">
      <Logo />
      <nav aria-label="Hauptnavigation">
        <ul className="flex flex-wrap gap-7">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-muted transition-colors hover:text-text"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
