import { useState } from "react";

function ProjectCard({ imgPath, title, description, tags }) {
  return (
    <div>
      {/* Image */}
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{
          background: `url(${imgPath})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      {/* Details */}
      <div className="text-secondary rounded-b-xl bg-gray-100 py-6 px-4">
        <h3 className="text-xl font-semibold mb-2"> {title} </h3>
        <p className="text-paragraph"> {description} </p>
        <div className="flex flex-row flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <span
              key={tag.name}
              className="text-lg bg-secondary-50 text-secondary-75 px-2 py-1 rounded-full border border-emphasis"
            >
              {" "}
              <tag.icon />{" "}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
