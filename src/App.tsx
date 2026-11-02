import { Header } from './components/Header';

export function App() {
  return (
    <>
      <Header />
      {/* Test content – replaced by the sections in phase 3 */}
      <main className="flex min-h-svh flex-col justify-center gap-6 px-6">
        <h1 className="font-display text-6xl">Christian Buchholz</h1>
        <p className="max-w-prose text-muted">
          Gelernter Koch. Heute baue ich Websites – mit derselben Sorgfalt.
        </p>
        <a href="#" className="text-accent">
          Projekte ansehen
        </a>
      </main>
    </>
  );
}
