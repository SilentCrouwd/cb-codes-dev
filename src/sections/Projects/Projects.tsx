import { projectsSection } from '../../content/projects';
import { ProjectCard } from './components/ProjectCard';

export function Projects() {
  return (
    <section
      id="projekte"
      aria-labelledby="projekte-heading"
      className="mx-auto max-w-6xl border-t border-surface px-6 py-16 md:py-24"
    >
      <h2 id="projekte-heading" className="font-display text-3xl md:text-4xl">
        {projectsSection.heading}
      </h2>
      <ul className="mt-12 space-y-14 md:space-y-20">
        {projectsSection.projects.map((project) => (
          <li key={project.title}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}
