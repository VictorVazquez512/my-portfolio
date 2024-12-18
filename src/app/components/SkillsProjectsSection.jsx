'use client';
import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { FaGithub, FaLinkedin, FaJs, FaPython, FaJava, FaNodeJs, FaLinux, FaVuejs, FaReact } from "react-icons/fa";
import { DiMongodb, DiPostgresql } from "react-icons/di";
import { MdDocumentScanner } from "react-icons/md";

const projectsList = [
  {
    id: 1,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/assets/personComputer.jpg",
    tags: [{icon: FaGithub, name:"React"}, {icon: FaLinkedin, name:"Firebase"}],
  },
  {
    id: 2,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/assets/personComputer.jpg",
    tags: [{icon: FaGithub, name:"React"}, {icon: FaLinkedin, name:"Firebase"}],
  },
  {
    id: 3,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/assets/personComputer.jpg",
    tags: [{icon: FaGithub, name:"React"}, {icon: FaLinkedin, name:"Firebase"}],
  },
  {
    id: 4,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/assets/personComputer.jpg",
    tags: [{icon: FaLinkedin, name:"Firebase"}],
  },
]


function SkillsProjectsSection() {

  const [tags, setTags] = React.useState([]);

  const handleTagClick = async (newTag) => {
    
    if (tags.includes(newTag)) {
      setTags((prevList) => prevList.filter((tag) => tag != newTag));
    } else {
      await setTags((prevList) => [...prevList, newTag]);
    }

  };

  const filteredProjects = projectsList.filter((project) => {
    if (tags.length === 0) return true;
    return project.tags.some((projectTag) => 
      tags.some((selectedTag) => selectedTag === projectTag.name)
    );
  });

  return (
    <section className="h-full" id="skills-projects">
      <div className="container mx-auto pt-10 h-full w-[90%]">
        <h2 className="h2 font-bold text-secondary-75 mb-10 w-full text-center">Projects & Skills</h2>
        {/* Skils */}
        <div className="text-secondary flex flex-row flex-wrap justify-center text-md items-center gap-2 py-6"> 
          <ProjectTag 
            name="JS"
            icon={FaGithub} 
            onClick={handleTagClick} 
            isSelected={tags.includes("React")}
          />
          <ProjectTag 
            name="TS"
            icon={FaGithub} 
            onClick={handleTagClick} 
            isSelected={tags.includes("React")}
          />
          <ProjectTag 
            name="Python"
            icon={FaGithub} 
            onClick={handleTagClick} 
            isSelected={tags.includes("React")}
          />
          <ProjectTag 
            name="Java"
            icon={FaGithub} 
            onClick={handleTagClick} 
            isSelected={tags.includes("React")}
          />
          <ProjectTag 
            name="NestJS"
            icon={FaGithub} 
            onClick={handleTagClick} 
            isSelected={tags.includes("React")}
          />
          <ProjectTag 
            name="NodeJS"
            icon={FaGithub} 
            onClick={handleTagClick} 
            isSelected={tags.includes("React")}
          />
          <ProjectTag 
            name="Django"
            icon={FaGithub} 
            onClick={handleTagClick} 
            isSelected={tags.includes("React")}
          />
          <ProjectTag 
            name="PostgreSQL"
            icon={FaGithub} 
            onClick={handleTagClick} 
            isSelected={tags.includes("React")}
          />
          <ProjectTag 
            name="MongoDB"
            icon={FaGithub} 
            onClick={handleTagClick} 
            isSelected={tags.includes("React")}
          />
          <ProjectTag 
            name="Linux"
            icon={FaGithub} 
            onClick={handleTagClick} 
            isSelected={tags.includes("React")}
          />
          <ProjectTag 
            name="VueJS"
            icon={FaGithub} 
            onClick={handleTagClick} 
            isSelected={tags.includes("React")}
          />
          <ProjectTag 
            name="React"
            icon={FaGithub} 
            onClick={handleTagClick} 
            isSelected={tags.includes("React")}
          />
          <ProjectTag 
            name="Postman"
            icon={FaGithub} 
            onClick={handleTagClick} 
            isSelected={tags.includes("React")}
          />
          <ProjectTag 
            name="Playwright"
            icon={FaGithub} 
            onClick={handleTagClick} 
            isSelected={tags.includes("React")}
          />
        </div>
        {/* Projects */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgPath={project.image}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsProjectsSection;
