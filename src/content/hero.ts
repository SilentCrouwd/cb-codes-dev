export type HeroLink = {
  label: string;
  href: string;
};

export type HeroContent = {
  firstName: string;
  lastName: string;
  story: string;
  links: HeroLink[];
};

export const hero: HeroContent = {
  firstName: 'Christian',
  lastName: 'Buchholz',
  story: 'Gelernter Koch. Heute baue ich Websites – mit derselben Sorgfalt.',
  links: [
    { label: 'Projekte ansehen', href: '#projekte' },
    { label: 'Kontakt aufnehmen', href: '#kontakt' },
  ],
};
