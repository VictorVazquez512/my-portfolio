import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";

function MobileNav({ links }) {
  return (
    <Sheet>
      <SheetTrigger>
        <CiMenuFries className="text-[32px] text-secondary" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* Logo */}
        <div className="mt-16 mb-12 text-center">
          <a href="/">
            <h1 className="text-4xl font-semibold">
              Victor<span className="text-blue">.</span>
            </h1>
          </a>
        </div>
        {/* Links */}
        <div className="flex flex-col justify-center items-center gap-8">
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
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
