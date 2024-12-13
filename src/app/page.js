import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SkillsProjectsSection from "./components/SkillsProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import ContactMeSection from "./components/ContactMeSection";

export default function Home() {

  const jobDetails = [
    {
      position: "Software Engineer",
      company: "Google",
      time: "2022-Present",
      address: "Mountain View, CA",
      work: "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
    },
    {
      position: "Software Engineer",
      company: "Google",
      time: "2022-Present",
      address: "Mountain View, CA",
      work: "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
    },
    {
      position: "Software Engineer",
      company: "Google",
      time: "2022-Present",
      address: "Mountain View, CA",
      work: "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
    }
  ];

  const educationDetails = [
    {
      position: "Software Engineer",
      company: "Google",
      time: "2022-Present",
      address: "Mountain View, CA",
      work: "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
    },
    {
      position: "Software Engineer",
      company: "Google",
      time: "2022-Present",
      address: "Mountain View, CA",
      work: "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
    },
    {
      position: "Software Engineer",
      company: "Google",
      time: "2022-Present",
      address: "Mountain View, CA",
      work: "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
    }
  ];

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <HeroSection />
        <SkillsProjectsSection />
        <ExperienceSection detailsList={ jobDetails } title="Experience" />
        <ExperienceSection detailsList={ educationDetails } title="Education" />
        <EducationSection />
        <ContactMeSection />
      </main>
    </>
  );
}
