import { Hero } from '@/components/Hero';
import { HeroScrollFade } from '@/components/HeroScrollFade';
import { AboutSection } from '@/components/AboutSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { PositioningSection } from '@/components/PositioningSection';
import { ProcessSection } from '@/components/ProcessSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ContactSection } from '@/components/ContactSection';
import { getSiteContent } from '@/sanity/queries';

export default async function Home() {
  const site = await getSiteContent();

  return (
    <>
      <HeroScrollFade>
        <Hero content={site?.hero} />
      </HeroScrollFade>
      <div className="relative z-10 bg-background">
        <PositioningSection id="positioning" />
        <ProjectsSection id="projects" content={site?.projects} />
        <ProcessSection id="process" />
        <AboutSection id="about" content={site?.about} />
        <SkillsSection id="skills" />
        <ContactSection id="contact" />
      </div>
    </>
  );
}
