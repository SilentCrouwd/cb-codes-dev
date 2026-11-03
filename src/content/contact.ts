export type ContactLink = {
  label: string;
  href: string;
};

export type ContactContent = {
  heading: string;
  text: string;
  links: ContactLink[];
};

export const contact: ContactContent = {
  heading: 'Kontakt',
  text: 'Du suchst jemanden, der sorgfältig arbeitet und Lust hat, dazuzulernen? Schreib mir – ich freue mich.',
  links: [
    {
      label: 'E-Mail schreiben',
      href: 'mailto:chris.buchholz.lauenau@gmail.com',
    },
    { label: 'GitHub', href: 'https://github.com/SilentCrouwd' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/christian-buchholz-36aa60234/',
    },
  ],
};
