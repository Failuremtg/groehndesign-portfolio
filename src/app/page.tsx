import { Hero } from '@/components/Hero';
import { HeroScrollFade } from '@/components/HeroScrollFade';
import { AboutSection } from '@/components/AboutSection';
import { ProjectsSection } from '@/components/ProjectsSection';

export default function Home() {
  return (
    <>
      {/* Hero stays fixed and fades to 10% as you scroll */}
      <HeroScrollFade>
        <Hero />
      </HeroScrollFade>
      {/* Content layer: scrolls up and over the hero (higher z-index + background) */}
      <div className="relative z-10 bg-background">
        <AboutSection id="about" />
        <ProjectsSection id="projects" />
        <div id="contact" className="h-1" aria-hidden />
      </div>
    </>
  );
}
