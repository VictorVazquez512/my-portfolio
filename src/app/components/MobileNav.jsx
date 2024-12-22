"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";

function MobileNav({ links }) {
  const [isTOCOpen, setIsTOCOpen] = useState(false);

  return (
    <Sheet open={isTOCOpen}>
      <SheetTitle className="hidden">Mobile Menu</SheetTitle>
      <SheetTrigger
        onClick={(e) => {
          if (isTOCOpen) setIsTOCOpen(false);
          else setIsTOCOpen(true);
        }}
      >
        <CiMenuFries className="text-[32px] text-secondary" />
      </SheetTrigger>
      <SheetContent
        onCloseAutoFocus={(event) => event.preventDefault()}
        className="flex flex-col"
        onToggleTOC={() => setIsTOCOpen(false)}
      >
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
                onClick={(e) => {
                  setIsTOCOpen(false);
                }}
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
