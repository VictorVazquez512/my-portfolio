import React from "react";
import Socials from "./Socials";

function ContactMeSection() {
  return (
    <footer id="contact" className="h-full mb-10 lg:mb-24">
      <div className="container flex mt-8 mx-auto h-full w-[95%]">
        {/* Description */}
        <div className="flex flex-col max-w-[50%] my-12 md:my-12 py-24 gap-4 bg-red-500">
          <h2 className="h2 font-bold text-secondary-75 mb-10 w-full">
            Let's Connect
          </h2>
          <p className="text-paragraph mb-4 max-w-md">
            {" "}
            I’m always open to connecting with new people! Whether you have a
            question, want to collaborate, or just want to say hello, feel free
            to reach out. I’ll do my best to respond as soon as possible!
          </p>
          <div className="mb-8 xl:mb-0">
            <Socials
              containerStyles="flex gap-6"
              iconStyles="w-9 h-9 border border-blue rounded-full flex 
                  justify-center items-center text-blue text-base hover:bg-blue 
                  hover:text-primary hover:transition-all duration-500"
            ></Socials>
          </div>
        </div>
        {/* Form */}
        <div className="max-w-[50%] bg-green-500">
          <form className="flex flex-col gap-4">
            <label
              htmlFor="email"
              className="text-paragraph block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="bg-transparent border border-secondary placeholder-paragraph text-secondary text-sm rounded-lg w-full p-2.5"
              placeholder="jacob@gmail.com"
            />
          </form>
        </div>
      </div>
    </footer>
  );
}

export default ContactMeSection;
