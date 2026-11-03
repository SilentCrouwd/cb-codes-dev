import { Header } from './components/Header';
import { About } from './sections/About/About';
import { Hero } from './sections/Hero/Hero';
import { Projects } from './sections/Projects/Projects';

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
    </>
  );
}
