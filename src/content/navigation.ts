export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: 'Über mich', href: '#ueber-mich' },
  { label: 'Projekte', href: '#projekte' },
  { label: 'Werkzeuge', href: '#werkzeuge' },
  { label: 'Kontakt', href: '#kontakt' },
];

export type NavigationLabels = {
  skipLink: string;
  mainNav: string;
  logo: string;
  backToHome: string;
};

export const navigationLabels: NavigationLabels = {
  skipLink: 'Zum Inhalt springen',
  mainNav: 'Hauptnavigation',
  logo: 'CB – Christian Buchholz, zum Seitenanfang',
  backToHome: '← Zur Startseite',
};
