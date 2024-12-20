'use client';
import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { FaGithub, FaLinkedin, FaJs, FaPython, FaJava, FaNodeJs, FaLinux, FaVuejs, FaReact } from "react-icons/fa";
import { DiMongodb, DiPostgresql } from "react-icons/di";
import { MdDocumentScanner } from "react-icons/md";

const js = {icon: FaJs, name:"JS"};
const ts = {icon: FaJs, name:"JS"};
const python = {icon: FaGithub, name:"JS"};
const java = {icon: FaGithub, name:"JS"};
const nestJS = {icon: FaGithub, name:"JS"};
const nodeJS = {icon: FaGithub, name:"JS"};
const django = {icon: FaGithub, name:"JS"};
const postgreSQL = {icon: FaGithub, name:"JS"};
const mongoDb = {icon: FaGithub, name:"JS"};
const linux = {icon: FaGithub, name:"JS"};
const vueJs = {icon: FaGithub, name:"JS"};
const react = {icon: FaGithub, name:"JS"};
const postman = {icon: FaJs, name:"JS"};
const playwright = {icon: FaJs, name:"JS"};

const projectsList = [
  {
    id: 1,
    title: "Agroeasy",
    description: "Authentication and CRUD operations",
    image: "/assets/personComputer.jpg",
    tags: [
      {icon: FaGithub, name:"JS"},
      {icon: FaLinkedin, name:"TS"},
      {icon: FaLinkedin, name:"NestJS"},
      {icon: FaLinkedin, name:"NodeJS"},
      {icon: FaLinkedin, name:"PostgreSQL"},
      {icon: FaLinkedin, name:"MongoDB"},
      {icon: FaLinkedin, name:""},
      {icon: FaLinkedin, name:""},
      {icon: FaLinkedin, name:""},
    ],
  },
  {
    id: 2,
    title: "Livestock System",
    description: "Authentication and CRUD operations",
    image: "/assets/personComputer.jpg",
    tags: [
      {icon: FaGithub, name:"React"}, 
      {icon: FaLinkedin, name:"Firebase"}
    ],
  },
  {
    id: 3,
    title: "Internal Freight Management",
    description: "Authentication and CRUD operations",
    image: "/assets/personComputer.jpg",
    tags: [
      {icon: FaGithub, name:"React"}, 
      {icon: FaLinkedin, name:"Firebase"}
    ],
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
            icon={FaJs} 
            onClick={handleTagClick} 
            isSelected={tags.includes("JS")}
          />
          <ProjectTag 
            name="TS"
            icon={FaJs} 
            onClick={handleTagClick} 
            isSelected={tags.includes("TS")}
          />
          <ProjectTag 
            name="Python"
            icon={FaPython} 
            onClick={handleTagClick} 
            isSelected={tags.includes("Python")}
          />
          <ProjectTag 
            name="Java"
            icon={FaJava} 
            onClick={handleTagClick} 
            isSelected={tags.includes("Java")}
          />
          <ProjectTag 
            name="NestJS"
            icon={FaNodeJs} 
            onClick={handleTagClick} 
            isSelected={tags.includes("NestJS")}
          />
          <ProjectTag 
            name="NodeJS"
            icon={FaNodeJs} 
            onClick={handleTagClick} 
            isSelected={tags.includes("NodeJS")}
          />
          <ProjectTag 
            name="Django"
            icon={FaPython} 
            onClick={handleTagClick} 
            isSelected={tags.includes("Django")}
          />
          <ProjectTag 
            name="PostgreSQL"
            icon={DiPostgresql} 
            onClick={handleTagClick} 
            isSelected={tags.includes("PostgreSQL")}
          />
          <ProjectTag 
            name="MongoDB"
            icon={DiMongodb} 
            onClick={handleTagClick} 
            isSelected={tags.includes("MongoDB")}
          />
          <ProjectTag 
            name="Linux"
            icon={FaLinux} 
            onClick={handleTagClick} 
            isSelected={tags.includes("Linux")}
          />
          <ProjectTag 
            name="VueJS"
            icon={FaVuejs} 
            onClick={handleTagClick} 
            isSelected={tags.includes("VueJS")}
          />
          <ProjectTag 
            name="React"
            icon={FaReact} 
            onClick={handleTagClick} 
            isSelected={tags.includes("React")}
          />
          <ProjectTag 
            name="Postman"
            icon={FaJs} 
            onClick={handleTagClick} 
            isSelected={tags.includes("Postman")}
          />
          <ProjectTag 
            name="Playwright"
            icon={FaJs} 
            onClick={handleTagClick} 
            isSelected={tags.includes("Playwright")}
          />
        </div>
        {/* Projects */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mt-4">
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
