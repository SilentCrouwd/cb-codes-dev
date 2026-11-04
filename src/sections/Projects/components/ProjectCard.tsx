import type { Project } from '../../../content/projects';
import { ProjectScreenshot } from './ProjectScreenshot';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="grid gap-6 md:grid-cols-2 md:gap-12">
      <ProjectScreenshot image={project.image} />

      <div>
        <h3 className="font-display text-2xl">{project.title}</h3>
        <p className="mt-3 max-w-prose text-muted">{project.description}</p>
        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm">
          {project.tech.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
        {project.links.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-6">
            {project.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-label={`${link.label}: ${project.title}`}
                  className="text-accent underline-offset-4 hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
        {project.note && (
          <p className="mt-3 text-sm text-muted">{project.note}</p>
        )}
      </div>
    </article>
  );
}
