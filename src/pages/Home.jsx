import ThemeToggle from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { FooterSection } from "../components/FooterSection";

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <ProjectSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  );
}

export default Home;
