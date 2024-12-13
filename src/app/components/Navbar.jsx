import React from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

function Navbar() {
  return (
    <nav className="py-6 xl:py-8 text-secondary">
      <div className="container mx-auto flex justify-between items-center w-[95%]">
        {/* Logo */}
        <h1 className="text-4xl font-semibold">
          Victor<span className="text-blue">.</span>
        </h1>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <DesktopNav />
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
