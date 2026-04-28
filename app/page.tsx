import Hero from './components/Hero';
import About from './components/About';
import Research from './components/Research';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Team from './components/Team';
import Partners from './components/Partners';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Research />
        <Projects preview />
        <Team preview />
        <Publications preview />
        <Partners />
      </main>
    </>
  );
}
