import React from "react";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "projects",
    path: "#projects",
  },
  {
    name: "experience",
    path: "#experience",
  },
  {
    name: "education",
    path: "#education",
  },
  {
    name: "contact",
    path: "#contact",
  },
];

function DesktopNav() {
  return (
    <div className="flex gap-8">
      {links.map((link, index) => {
        return (
          <a
            key={index}
            href={link.path}
            className="hover:text-blue active:text-emphasis"
          >
            {link.name}
          </a>
        );
      })}
    </div>
  );
}

export default DesktopNav;
