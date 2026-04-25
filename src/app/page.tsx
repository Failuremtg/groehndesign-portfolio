import { Hero } from '@/components/Hero';
import { HeroScrollFade } from '@/components/HeroScrollFade';
import { AboutSection } from '@/components/AboutSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { StrengthsSection } from '@/components/StrengthsSection';
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
        <StrengthsSection id="strengths" content={site?.strengths} />
        <ProjectsSection id="projects" content={site?.projects} />
        <ProcessSection id="process" content={site?.process} />
        <AboutSection id="about" content={site?.about} />
        <SkillsSection id="skills" />
        <ContactSection id="contact" />
      </div>
    </>
  );
}
