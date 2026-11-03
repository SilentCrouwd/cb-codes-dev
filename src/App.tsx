import { Header } from './components/Header';
import { About } from './sections/About/About';
import { Contact } from './sections/Contact/Contact';
import { Hero } from './sections/Hero/Hero';
import { Projects } from './sections/Projects/Projects';
import { TechStack } from './sections/TechStack/TechStack';

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Contact />
      </main>
    </>
  );
}
