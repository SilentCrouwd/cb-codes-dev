import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { SkipLink } from './components/SkipLink';
import { About } from './sections/About/About';
import { Contact } from './sections/Contact/Contact';
import { Hero } from './sections/Hero/Hero';
import { Projects } from './sections/Projects/Projects';
import { TechStack } from './sections/TechStack/TechStack';

export function App() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="inhalt">
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
