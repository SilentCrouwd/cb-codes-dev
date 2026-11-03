import { useEffect } from 'react';
import { Footer } from '../components/Footer';
import { Logo } from '../components/Logo';
import { SkipLink } from '../components/SkipLink';
import { legal } from '../content/legal';
import { navigationLabels } from '../content/navigation';

export function LegalPage() {
  // The browser tries to jump to the #anchor before React has rendered
  // the page, so we do the jump ourselves once the content exists
  useEffect(() => {
    const anchorId = window.location.hash.slice(1);
    const target = document.getElementById(anchorId);
    target?.scrollIntoView();
  }, []);

  return (
    <>
      <SkipLink />
      <header className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-8">
        <Logo href="./" />
        <a href="./" className="text-muted transition-colors hover:text-text">
          {navigationLabels.backToHome}
        </a>
      </header>
      <main id="inhalt" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <h1 className="font-display text-4xl md:text-5xl">{legal.heading}</h1>
        {legal.texts.map((legalText) => (
          <article
            key={legalText.id}
            id={legalText.id}
            aria-labelledby={`${legalText.id}-heading`}
            className="mt-16 max-w-prose border-t border-surface pt-12"
          >
            <h2 id={`${legalText.id}-heading`} className="font-display text-3xl">
              {legalText.heading}
            </h2>
            <div className="mt-8 space-y-8">
              {legalText.sections.map((section) => (
                <section key={section.heading}>
                  <h3 className="font-display text-xl">{section.heading}</h3>
                  <div className="mt-3 space-y-3 text-muted">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </article>
        ))}
      </main>
      <Footer />
    </>
  );
}
