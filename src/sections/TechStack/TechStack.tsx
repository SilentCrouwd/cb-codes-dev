import { techStack } from '../../content/techStack';
import { ToolTile } from './components/ToolTile';

export function TechStack() {
  return (
    <section
      id="werkzeuge"
      aria-labelledby="werkzeuge-heading"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <h2 id="werkzeuge-heading" className="font-display text-3xl md:text-4xl">
        {techStack.heading}
      </h2>
      <div className="mt-12 space-y-12">
        {techStack.groups.map((group) => (
          <div key={group.heading}>
            <h3 className="text-sm font-semibold tracking-widest text-accent uppercase">
              {group.heading}
            </h3>
            {group.description && (
              <p className="mt-2 max-w-prose text-muted">{group.description}</p>
            )}
            <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {group.tools.map((tool) => (
                <li key={tool.name}>
                  <ToolTile tool={tool} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
