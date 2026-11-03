export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  links: ProjectLink[];
};

export type ProjectsContent = {
  heading: string;
  projects: Project[];
};

export const projectsSection: ProjectsContent = {
  heading: 'Projekte',
  projects: [
    {
      title: 'Business App',
      description:
        'Eine Web-App für kleine Betriebe, die den Arbeitsalltag übersichtlicher macht.',
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
      links: [],
    },
    {
      title: 'Kanban Board',
      description:
        'Aufgaben anlegen und zwischen Spalten verschieben – von „Offen“ bis „Erledigt“.',
      tech: ['React', 'TypeScript'],
      links: [],
    },
    {
      title: 'Weather App',
      description:
        'Zeigt das aktuelle Wetter und eine Vorhersage für jede Stadt – Daten live aus einer API.',
      tech: ['JavaScript', 'REST API', 'CSS'],
      links: [],
    },
    {
      title: 'Quiz App',
      description:
        'Ein Quiz mit Punktestand und direktem Feedback nach jeder Frage.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      links: [],
    },
    {
      title: 'Calculator',
      description:
        'Ein Taschenrechner, der auch mit der Tastatur bedient werden kann.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      links: [],
    },
    {
      title: 'POS App',
      description:
        'Ein Kassensystem: Artikel erfassen, Summe berechnen, Bon anzeigen.',
      tech: ['React', 'TypeScript'],
      links: [],
    },
  ],
};
