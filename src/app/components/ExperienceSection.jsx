"use client";

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import CircleIcon from "./CircleIcon";

function Details({ position, company, time, address, work }) {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-2 last:mb-0 w-[75%] mx-auto flex flex-col items-center justify-between"
    >
      <CircleIcon reference={ref} />
      <div>
        <h3 className="h3 capitalize">
          {position}&nbsp;
          <span className="text-blue capitalize">@{company}</span>
        </h3>
        <span className="capitalize font-medium text-secondary">
          {time} | {address}
        </span>
        <p className="text-paragraph">{work}</p>
      </div>
    </li>
  );
}

function ExperienceSection({ detailsList, title }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <section className="h-full" id="experience">
      <div className="container mx-auto h-full pt-32">
        <div className="lg:pt-8 lg:pb-12">
          <h2 className="h2 font-bold text-secondary-75 mb-10 w-full text-center">
            {title}
          </h2>
          <div ref={ref} className="w-[85%] mx-auto relative">
            {/* Line */}
            <motion.div
              className="absolute left-9 top-0 w-[4px] h-full bg-secondary origin-top"
              style={{ scaleY: scrollYProgress }}
            />

            {/* Details */}
            <ul className="w-full flex flex-col items-start justify-between ml-4">
              {detailsList.map((details, index) => (
                <Details key={index} {...details} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
