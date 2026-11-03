import { navigationLabels } from '../content/navigation';

type LogoProps = {
  href?: string;
};

export function Logo({ href = '#top' }: LogoProps) {
  return (
    <a
      href={href}
      aria-label={navigationLabels.logo}
      className="flex size-13 items-center justify-center rounded-full border-2 border-text font-display text-xl"
    >
      CB
    </a>
  );
}
