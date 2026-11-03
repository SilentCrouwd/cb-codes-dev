import { navigationLabels } from '../content/navigation';

export function SkipLink() {
  return (
    <a
      href="#inhalt"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-20 focus:rounded-lg focus:bg-surface focus:px-4 focus:py-2"
    >
      {navigationLabels.skipLink}
    </a>
  );
}
