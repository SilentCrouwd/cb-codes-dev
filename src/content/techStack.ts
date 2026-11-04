import type { LucideIcon } from 'lucide-react';
import { Bot, Server } from 'lucide-react';
import type { SimpleIcon } from 'simple-icons';
import {
  siClaude,
  siCss,
  siGit,
  siGithub,
  siGithubcopilot,
  siHtml5,
  siJavascript,
  siNpm,
  siReact,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siVite,
} from 'simple-icons';

// A tool shows either a brand logo (Simple Icons) or a generic icon (Lucide)
export type Tool =
  | { name: string; iconType: 'brand'; icon: SimpleIcon }
  | { name: string; iconType: 'ui'; icon: LucideIcon };

export type ToolGroup = {
  heading: string;
  description?: string;
  tools: Tool[];
};

export type TechStackContent = {
  heading: string;
  groups: ToolGroup[];
};

export const techStack: TechStackContent = {
  heading: 'Werkzeuge',
  groups: [
    {
      heading: 'Frontend',
      tools: [
        { name: 'HTML', iconType: 'brand', icon: siHtml5 },
        { name: 'CSS', iconType: 'brand', icon: siCss },
        { name: 'JavaScript', iconType: 'brand', icon: siJavascript },
        { name: 'TypeScript', iconType: 'brand', icon: siTypescript },
        { name: 'React', iconType: 'brand', icon: siReact },
        { name: 'Tailwind CSS', iconType: 'brand', icon: siTailwindcss },
        { name: 'Vite', iconType: 'brand', icon: siVite },
      ],
    },
    {
      heading: 'Handwerkszeug',
      tools: [
        { name: 'Git', iconType: 'brand', icon: siGit },
        { name: 'GitHub', iconType: 'brand', icon: siGithub },
        { name: 'npm', iconType: 'brand', icon: siNpm },
        { name: 'Agentic Coding', iconType: 'ui', icon: Bot },
        { name: 'Claude Code', iconType: 'brand', icon: siClaude },
        { name: 'GitHub Copilot', iconType: 'brand', icon: siGithubcopilot },
      ],
    },
    {
      heading: 'Als Nächstes',
      description:
        'Backend lerne ich gerade in meiner Weiterbildung. Erste Erfahrung: Supabase in araDine und dem Dev Board.',
      tools: [
        { name: 'Supabase', iconType: 'brand', icon: siSupabase },
        { name: 'Backend-Entwicklung', iconType: 'ui', icon: Server },
      ],
    },
  ],
};
