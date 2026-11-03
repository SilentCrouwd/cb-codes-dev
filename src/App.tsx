import { Header } from './components/Header';
import { About } from './sections/About/About';
import { Hero } from './sections/Hero/Hero';

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}
