import React from "react";

function DesktopNav({ links }) {
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
