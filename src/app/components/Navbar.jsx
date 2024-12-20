import React from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

function Navbar() {
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

  return (
    <nav className="py-8 xl:py-8 text-secondary">
      <div className="container mx-auto flex justify-between items-center w-[95%]">
        {/* Logo */}
        <h1 className="text-4xl font-semibold">
          Victor<span className="text-blue">.</span>
        </h1>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <DesktopNav links={links} />
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden">
          <MobileNav links={links} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
