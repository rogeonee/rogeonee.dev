import Hero from '@/components/sections/hero';
import Skills from '@/components/sections/skills';
import Experience from '@/components/sections/experience';
import About from '@/components/sections/about';
import ProjectsCarousel from '@/components/sections/projects';
import Contact from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Experience />
      <About />
      <ProjectsCarousel />
      <Contact />
    </>
  );
}
