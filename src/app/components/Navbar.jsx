import React from "react";
import DesktopNav from "./DesktopNav";

function Navbar() {
  return (
    <nav className="py-8 xl:py-12 text-secondary">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-4xl font-semibold">
          Victor<span className="text-blue">.</span>
        </h1>

        {/* Desktop Nav */}
        <DesktopNav />

        {/* Mobile Nav */}
      </div>
    </nav>
  );
}

export default Navbar;
