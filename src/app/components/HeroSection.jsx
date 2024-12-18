import React from "react";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Stats from "./Stats";

// Components
import Socials from "./Socials";
import Photo from "./Photo";
function HeroSection() {
  return (
    <section className="h-full" id="hero">
      <div className="container mt-8 mx-auto h-full w-[95%]">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-4 lg:pb-12 lg:mb-6">
          {/* Text */}
          <div className="text-center lg:text-left order-2 lg:order-none">
            <span className="text-xl">Software Engineer</span>
            <h1 className="h1 font-bold text-secondary mb-6">
              Hi, I'm <br />
              <span className="text-blue">Victor Vazquez</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-paragraph">
              I'm a software engineer based in Miami, FL. I specialize in
              building high-quality websites and applications.
            </p>
            {/* Btn and socials */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 border border-blue 
                text-blue text-base hover:bg-blue 
                hover:text-primary hover:transition-all duration-500"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-blue rounded-full flex 
                  justify-center items-center text-blue text-base hover:bg-blue 
                  hover:text-primary hover:transition-all duration-500"
                ></Socials>
              </div>
            </div>
          </div>
          {/* Photo */}
          <div className="order-1 lg:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
        <Stats />
      </div>
    </section>
  );
}

export default HeroSection;
