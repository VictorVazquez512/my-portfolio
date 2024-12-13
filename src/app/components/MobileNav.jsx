import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";

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

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger>
        <CiMenuFries className="text-[32px] text-secondary" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* Logo */}
        <div>Logo</div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
