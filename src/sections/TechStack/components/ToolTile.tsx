import type { Tool } from '../../../content/techStack';

type ToolTileProps = {
  tool: Tool;
};

export function ToolTile({ tool }: ToolTileProps) {
  return (
    <div className="flex h-full items-center gap-3 rounded-lg bg-surface px-4 py-3">
      {tool.iconType === 'brand' ? (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="size-5 shrink-0 fill-current"
        >
          <path d={tool.icon.path} />
        </svg>
      ) : (
        <tool.icon aria-hidden="true" className="size-5 shrink-0" />
      )}
      <span>{tool.name}</span>
    </div>
  );
}
