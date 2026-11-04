import type { ProjectImage } from '../../../content/projects';

type ProjectScreenshotProps = {
  image?: ProjectImage;
};

// Shared size and position for the screenshot and its placeholder
const frameClasses = 'aspect-16/10 w-full rounded-lg md:mt-6';

export function ProjectScreenshot({ image }: ProjectScreenshotProps) {
  if (!image) {
    return <div aria-hidden="true" className={`${frameClasses} bg-surface`} />;
  }

  return (
    <img
      src={image.src}
      alt={image.alt}
      width={1200}
      height={750}
      loading="lazy"
      className={`${frameClasses} bg-surface object-cover`}
    />
  );
}
