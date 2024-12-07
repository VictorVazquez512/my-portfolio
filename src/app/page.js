import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SkillsProjectsSection from "./components/SkillsProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import ContactMeSection from "./components/ContactMeSection";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <HeroSection />
        <SkillsProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactMeSection />
      </main>
    </>
  );
}
