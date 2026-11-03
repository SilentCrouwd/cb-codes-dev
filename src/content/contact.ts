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
    // TODO: replace placeholder usernames with the real profile links
    { label: 'GitHub', href: 'https://github.com/USERNAME' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/USERNAME' },
  ],
};
