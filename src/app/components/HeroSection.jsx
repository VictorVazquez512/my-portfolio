import React from "react";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Stats from "./Stats";

// Components
import Socials from "./Socials";
import Photo from "./Photo";
function HeroSection() {
  return (
    <section className="h-full mb-10 lg:mb-24" id="hero">
      <div className="container mt-8 mx-auto h-full w-[95%]">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-4 lg:pb-6">
          {/* Text */}
          <div className="text-center lg:text-left order-2 lg:order-none">
            <span className="text-xl">Software Engineer</span>
            <h1 className="h1 font-bold text-secondary mb-6">
              Hi, I'm <br />
              <span className="text-blue">Victor Vazquez</span>
            </h1>
            <p className="max-w-[650px] mb-9 text-paragraph">
              I'm a Software Engineer based in Hermosillo, Sonora, Mexico with
              over 3 years of experience building robust and efficient web
              applications. Skilled in technologies like NestJS, Django, VueJS,
              and React.
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
          <div className="relative order-1 lg:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
        <Stats />
      </div>
    </section>
  );
}

export default HeroSection;
