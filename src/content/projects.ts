import araDineScreenshot from '../assets/project-aradine.webp';
import devBoardScreenshot from '../assets/project-devboard.webp';
import lernprojekteScreenshot from '../assets/project-lernprojekte.webp';
import nutzerverwaltungScreenshot from '../assets/project-nutzerverwaltung.webp';
import portfolioScreenshot from '../assets/project-portfolio.webp';
import wetterScreenshot from '../assets/project-wetter.webp';

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  links: ProjectLink[];
  /** Screenshot (16:10). Without it, the card shows a placeholder */
  image?: ProjectImage;
  /** Optional hint shown below the links, e.g. how to log in to the demo */
  note?: string;
};

export type ProjectsContent = {
  heading: string;
  projects: Project[];
};

export const projectsSection: ProjectsContent = {
  heading: 'Projekte',
  projects: [
    {
      title: 'araDine – Business App',
      description:
        'Im Betrieb laufen Bewirtungen noch über Formular, Drucker und Scanner. araDine bildet den ganzen Ablauf digital ab: von der Buchung über ein Dashboard für Mitarbeitende bis zur Übersicht für die Betriebsleitung. Herzstück ist ein mehrstufiges Formular, dessen Daten über vier Komponenten gesammelt und am Ende mit einem Klick abgeschickt werden. Aktuell testen meine Kolleginnen und Kollegen die App.',
      tech: [
        'React',
        'TypeScript',
        'Vite',
        'Tailwind CSS',
        'shadcn/ui',
        'Supabase',
        'React Router',
      ],
      links: [
        {
          label: 'Code auf GitHub',
          href: 'https://github.com/SilentCrouwd/araDine',
        },
        { label: 'Live-Demo', href: 'https://silentcrouwd.github.io/araDine/' },
      ],
      image: {
        src: araDineScreenshot,
        alt: 'Abrechnungsübersicht von araDine mit Kennzahlen und Listen der Bewirtungen nach Status',
      },
      note: 'Für die Live-Demo reicht eine beliebige E-Mail-Adresse.',
    },
    {
      title: 'Dev Board – Kanban Board',
      description:
        'Aufgaben anlegen und per Drag & Drop zwischen den Spalten verschieben – von „Offen“ bis „Erledigt“. Das Drag & Drop habe ich ohne fertige Bibliothek selbst gebaut. Die Karten werden in Supabase gespeichert, nach dem Neuladen ist also alles noch da.',
      tech: [
        'React',
        'TypeScript',
        'Vite',
        'Tailwind CSS',
        'shadcn/ui',
        'Supabase',
        'React Router',
      ],
      links: [
        {
          label: 'Code auf GitHub',
          href: 'https://github.com/SilentCrouwd/dev-board',
        },
        {
          label: 'Live-Demo',
          href: 'https://silentcrouwd.github.io/dev-board/',
        },
      ],
      image: {
        src: devBoardScreenshot,
        alt: 'Kanban Board von Dev Board mit den Spalten ToDo, inProgress und Done',
      },
      note: 'Für die Live-Demo gibt es einen Gast-Login.',
    },
    {
      title: 'cb-codes-dev – Portfolio',
      description:
        'Die Seite, auf der du gerade bist. Gebaut nach dem Prinzip Mise en place: erst Farben, Schriften und Struktur festlegen, dann umsetzen. Alle Texte liegen getrennt vom Code, die Seite folgt automatisch dem Hell- oder Dunkelmodus, und die Schriften sind DSGVO-konform selbst gehostet. Lighthouse: 100 bei Barrierefreiheit, Best Practices und SEO. Umgesetzt mit Claude Code als KI-Pair-Programmer – Planung, Design-Entscheidungen und Review aller Schritte lagen bei mir.',
      tech: [
        'React',
        'TypeScript',
        'Vite',
        'Tailwind CSS',
        'GitHub Actions',
        'Claude Code',
      ],
      links: [
        {
          label: 'Code auf GitHub',
          href: 'https://github.com/SilentCrouwd/cb-codes-dev',
        },
      ],
      image: {
        src: portfolioScreenshot,
        alt: 'Startseite dieses Portfolios im Dark Mode mit Name, Kurzvorstellung und Foto',
      },
    },
    {
      title: 'Nutzerverwaltung',
      description:
        'Mein erstes TypeScript-Projekt: Nutzer anlegen, anzeigen, bearbeiten und löschen – ein komplettes CRUD mit React. Die Daten werden im localStorage gespeichert und sind nach dem Neuladen noch da.',
      tech: ['React', 'TypeScript', 'Vite', 'React Router', 'CSS'],
      links: [
        {
          label: 'Code auf GitHub',
          href: 'https://github.com/SilentCrouwd/nutzer-verwaltung',
        },
        {
          label: 'Live-Demo',
          href: 'https://silentcrouwd.github.io/nutzer-verwaltung/overview',
        },
      ],
      image: {
        src: nutzerverwaltungScreenshot,
        alt: 'Startseite der Nutzerverwaltung mit Seitenmenü und Graffiti-Schriftzug',
      },
    },
    {
      title: 'Wetter-App',
      description:
        'Das Wetter für jede Stadt, live von WeatherAPI.com: aktuelle Werte, 7-Tage-Übersicht und eine Detailansicht. Ein passendes Bild zeigt, wie es vor Ort gerade aussieht – je nach Wetterlage und ob es Tag oder Nacht ist. Die Daten werden im localStorage zwischengespeichert, und die gesamte Oberfläche entsteht dynamisch per JavaScript – ganz ohne Framework.',
      tech: ['JavaScript', 'HTML', 'CSS', 'WeatherAPI.com'],
      links: [
        {
          label: 'Code auf GitHub',
          href: 'https://github.com/SilentCrouwd/wetter-app',
        },
        {
          label: 'Live-Demo',
          href: 'https://silentcrouwd.github.io/wetter-app/',
        },
      ],
      image: {
        src: wetterScreenshot,
        alt: 'Wetter-App mit drei Städten, aktuellen Temperaturen und passenden Wetterbildern',
      },
    },
    {
      title: 'Lernprojekte',
      description:
        'Meine ersten Schritte mit JavaScript, HTML und CSS: ein Quiz, eine Notiz-App, ein Kassensystem, ein Taschenrechner und eine Witze-App, die ihre Witze per Fetch aus einer API lädt und mit SCSS gestaltet ist. Kleine Projekte, an denen ich die Grundlagen gelernt habe.',
      tech: ['JavaScript', 'HTML', 'CSS', 'SCSS', 'Fetch API'],
      links: [
        { label: 'Quiz', href: 'https://github.com/SilentCrouwd/QuizM4' },
        {
          label: 'Notiz-App',
          href: 'https://github.com/SilentCrouwd/Notiz-appM5',
        },
        {
          label: 'Kassensystem',
          href: 'https://github.com/SilentCrouwd/Kassensystem',
        },
        {
          label: 'Taschenrechner',
          href: 'https://github.com/SilentCrouwd/Calculator',
        },
        {
          label: 'Witze-App',
          href: 'https://github.com/SilentCrouwd/Witze-App',
        },
      ],
      image: {
        src: lernprojekteScreenshot,
        alt: 'Collage aus fünf Lernprojekten: Notiz-App, Taschenrechner, Witze-App, Quiz und Kassensystem',
      },
    },
  ],
};
