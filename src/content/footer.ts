export type FooterLink = {
  label: string;
  href: string;
};

export type FooterContent = {
  copyrightName: string;
  poweredByLabel: string;
  businessName: string;
  navLabel: string;
  links: FooterLink[];
};

export const footer: FooterContent = {
  copyrightName: 'Christian Buchholz',
  poweredByLabel: 'Powered by',
  businessName: 'cb.codes.design',
  navLabel: 'Rechtliches',
  links: [
    { label: 'Impressum', href: 'rechtliches.html#impressum' },
    { label: 'Datenschutz', href: 'rechtliches.html#datenschutz' },
  ],
};
