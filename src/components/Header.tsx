import { navigationLabels, navItems } from '../content/navigation';
import { Logo } from './Logo';

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-10 mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8">
      <Logo />
      <nav aria-label={navigationLabels.mainNav}>
        <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm sm:gap-7 sm:text-base">
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
