import React from "react";
import { Button } from "@/components/ui/button";
import FiDownload from "react-icons/fi";

function HeroSection() {
  return (
    <section className="h-full" id="hero">
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left">
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
            <div>
              <Button></Button>
            </div>
          </div>
          {/* Photo */}
          <div>
            <img
              src="https://media.istockphoto.com/id/1075599562/photo/programmer-working-with-program-code.jpg?s=612x612&w=0&k=20&c=n3Vw5SMbMCWW1YGG6lnTfrwndNQ8B_R4Vw-BN7LkqpA="
              alt="A person coding"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
