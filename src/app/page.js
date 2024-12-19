import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SkillsProjectsSection from "./components/SkillsProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactMeSection from "./components/ContactMeSection";

export default function Home() {
  const jobDetails = [
    {
      position: "Fullstack Developer",
      company: "Sistemas ALM",
      time: "2023-Present",
      address: "Hermosillo, Sonora",
      work: "As a Fullstack Developer, I design and implement RESTful APIs with NestJS and TypeScript, leveraging MongoDB for data handling. I develop and maintain user-friendly frontend components with VueJS, lead small teams in Agile environments, and collaborate closely with stakeholders to deliver impactful solutions. My cross-functional work spans DevOps, UI/UX, and mobile teams, enhancing features across platforms, including payment gateway integration with Openpay. I also ensure quality through end-to-end testing using Playwright and Postman, integrating these tests into CI/CD pipelines.",
    },
    {
      position: "Backend Developer",
      company: "Sistemas ALM",
      time: "2022-2023",
      address: "Hermosillo, Sonora",
      work: "In this role, I built robust backend systems using Django REST and PostgreSQL while collaborating with frontend developers to deliver high-performance applications tailored to the livestock industry. I mentored team members, refined database models, and contributed to occasional VueJS features. Additionally, I deployed and managed systems on Linux servers, ensuring reliability and scalability in an Agile setting.",
    },
    {
      position: "Software Engineering Intern",
      company: "Sistemas ALM",
      time: "2021-2022",
      address: "Hermosillo, Sonora",
      work: "As an intern, I contributed to a prototype web application modernizing legacy systems for truck monitoring in agriculture. I developed backend features with Django and PostgreSQL and created frontend components with HTML, CSS, and JQuery. Working in a scrum-driven environment, I gained foundational engineering skills, collaborated with mentors, and engaged with product owners to align technical solutions with business goals.",
    },
  ];

  const educationDetails = [
    {
      position: "Information Systems Engineering",
      company: "Universidad de Sonora",
      time: "2019-2023",
      address: "Hermosillo, Sonora",
      work: "Earned a degree in Information Systems Engineering with a focus on web application development. Acquired skills in HTML, CSS, SQL, PostgreSQL, Java, Python, JavaScript, and C#. Completed relevant courses in Databases, Programming Languages, Algorithms and Data Structures, Networking, Servers, Cloud Computing, Cybersecurity, and Web Development, preparing for a career in software engineering.",
    },
    {
      position: "Technical Degree in Programming",
      company:
        "Colegio de Estudios Científicos y Tecnológicos del Estado de Sonora",
      time: "2016-2019",
      address: "Hermosillo, Sonora",
      work: "Graduated with a technical degree in Computer Programming, gaining foundational skills in HTML, CSS, SQL, MySQL, and Java. Studied relevant courses in Databases, Programming Languages, and Introduction to Algorithms, building a strong technical base for higher education in software development.",
    },
  ];

  return (
    <>
      <header className="min-h-screen">
        <Navbar />
        <HeroSection />
      </header>
      <main>
        <SkillsProjectsSection />
        <ExperienceSection detailsList={jobDetails} title="Experience" />
        <ExperienceSection detailsList={educationDetails} title="Education" />
        <ContactMeSection />
      </main>
    </>
  );
}
