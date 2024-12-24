"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import {
  FaJs,
  FaPython,
  FaJava,
  FaNodeJs,
  FaLinux,
  FaVuejs,
  FaReact,
} from "react-icons/fa";
import { DiMongodb, DiPostgresql } from "react-icons/di";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNestjs, SiDjango, SiPostman } from "react-icons/si";
import PlaywrightIcon from "public/assets/playwrightIcon";

const js = { icon: FaJs, name: "JS" };
const ts = { icon: BiLogoTypescript, name: "TS" };
const python = { icon: FaPython, name: "Python" };
const java = { icon: FaJava, name: "Java" };
const nestJS = { icon: SiNestjs, name: "NestJS" };
const nodeJS = { icon: FaNodeJs, name: "NodeJS" };
const django = { icon: SiDjango, name: "Django" };
const postgreSQL = { icon: DiPostgresql, name: "PostgreSQL" };
const mongoDB = { icon: DiMongodb, name: "MongoDB" };
const linux = { icon: FaLinux, name: "Linux" };
const vueJS = { icon: FaVuejs, name: "VueJS" };
const react = { icon: FaReact, name: "React" };
const postman = { icon: SiPostman, name: "Postman" };
const playwright = { icon: PlaywrightIcon, name: "Playwright" };

const projectsList = [
  {
    id: 1,
    title: "Agroeasy",
    description:
      "An agricultural ERP designed to streamline operations within agricultural fields, tailored for the Mexican market. Agroeasy integrates activity tracking, resource management, and reporting to optimize productivity for agricultural businesses.",
    image: "/assets/agroeasy.png",
    tags: [
      js,
      ts,
      nodeJS,
      nestJS,
      postgreSQL,
      mongoDB,
      vueJS,
      postman,
      playwright,
    ],
    livePath: "https://www.agroeasy.com.mx",
  },
  {
    id: 2,
    title: "Livestock Management System",
    description:
      "An ERP solution for livestock companies to manage livestock records, monitor weight and medications, generate detailed reports, and oversee operational processes, ensuring efficiency and compliance in the livestock industry.",
    image: "/assets/livestockManagementSystem.png",
    tags: [js, python, django, postgreSQL, vueJS, linux, postman],
  },
  {
    id: 3,
    title: "Internal Freight Management",
    description:
      "A web application developed to automate payment calculations by tracking work hours for vehicles and employees. Includes features for process control, detailed reporting, and workflow optimization to replace legacy systems in the agricultural sector.",
    image: "/assets/internalFreightManagement.png",
    tags: [js, python, django, postgreSQL, linux],
  },
  {
    id: 4,
    title: "My Portfolio",
    description:
      "A personal portfolio website showcasing my expertise as software engineer, developed using modern technologies like Tailwind CSS, NextJS, and ShadCN to create a professional and responsive online presence.",
    image: "/assets/myPortfolio.png",
    tags: [js, react],
    repositoryPath: "https://github.com/VictorVazquez512/my-portfolio",
    livePath: "/",
  },
];

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
    <section className="h-full mb-10 lg:mb-24" id="projects">
      <div className="container mx-auto pt-10 h-full w-[90%]">
        <h2 className="h2 font-bold text-secondary-75 mb-10 w-full text-center">
          Projects & Skills
        </h2>
        {/* Skils */}
        <div className="text-secondary flex flex-row flex-wrap justify-center text-md items-center gap-2 py-6">
          <ProjectTag
            name={js.name}
            icon={js.icon}
            onClick={handleTagClick}
            isSelected={tags.includes(js.name)}
          />
          <ProjectTag
            name={ts.name}
            icon={ts.icon}
            onClick={handleTagClick}
            isSelected={tags.includes(ts.name)}
          />
          <ProjectTag
            name={python.name}
            icon={python.icon}
            onClick={handleTagClick}
            isSelected={tags.includes(python.name)}
          />
          <ProjectTag
            name={java.name}
            icon={java.icon}
            onClick={handleTagClick}
            isSelected={tags.includes(java.name)}
          />
          <ProjectTag
            name={nestJS.name}
            icon={nestJS.icon}
            onClick={handleTagClick}
            isSelected={tags.includes(nestJS.name)}
          />
          <ProjectTag
            name={nodeJS.name}
            icon={nodeJS.icon}
            onClick={handleTagClick}
            isSelected={tags.includes(nodeJS.name)}
          />
          <ProjectTag
            name={django.name}
            icon={django.icon}
            onClick={handleTagClick}
            isSelected={tags.includes(django.name)}
          />
          <ProjectTag
            name={postgreSQL.name}
            icon={postgreSQL.icon}
            onClick={handleTagClick}
            isSelected={tags.includes(postgreSQL.name)}
          />
          <ProjectTag
            name={mongoDB.name}
            icon={mongoDB.icon}
            onClick={handleTagClick}
            isSelected={tags.includes(mongoDB.name)}
          />
          <ProjectTag
            name={linux.name}
            icon={linux.icon}
            onClick={handleTagClick}
            isSelected={tags.includes(linux.name)}
          />
          <ProjectTag
            name={vueJS.name}
            icon={vueJS.icon}
            onClick={handleTagClick}
            isSelected={tags.includes(vueJS.name)}
          />
          <ProjectTag
            name={react.name}
            icon={react.icon}
            onClick={handleTagClick}
            isSelected={tags.includes(react.name)}
          />
          <ProjectTag
            name={postman.name}
            icon={postman.icon}
            onClick={handleTagClick}
            isSelected={tags.includes(postman.name)}
          />
          <ProjectTag
            name={playwright.name}
            icon={playwright.icon}
            onClick={handleTagClick}
            isSelected={tags.includes(playwright.name)}
          />
        </div>
        {/* Projects */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-4">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgPath={project.image}
              tags={project.tags}
              repositoryPath={
                project.repositoryPath ? project.repositoryPath : undefined
              }
              livePath={project.livePath ? project.livePath : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsProjectsSection;
