import { useEffect } from 'react';
import { Navigation } from './components/navigation';
import { HeroSection } from './components/hero-section';
import { SkillsSection } from './components/skills-section';
import { ExperienceSection } from './components/experience-section';
import { ProjectsSection } from './components/projects-section';
import { EducationSection } from './components/education-section';
import { ContactSection } from './components/contact-section';

export default function App() {
  useEffect(() => {
    // Add dark mode class to html element
    document.documentElement.classList.add('dark');
    
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main>
        <div id="hero">
          <HeroSection />
        </div>
        
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      
      {/* Scroll to top button could be added here */}
    </div>
  );
}