"use client";

import { motion } from "framer-motion";
import Image from "next/image";

function Photo() {
  return (
    <div className="w-full h-full relative">
      {/* Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.4, ease: "easeIn" },
        }}
      >
        <div className="w-[288px] h-[288px] lg:w-[458px] lg:h-[458px] absolute translate-x-[3.1%] translate-y-[3.1%] lg:translate-x-[2.6%] lg:translate-y-[2.6%]">
          <Image
            src="/assets/profile.jpg"
            alt="A person coding"
            className="object-contain rounded-full filter grayscale"
            priority
            quality={100}
            sizes="(max-width: 1024px) 288px, 458px"
            fill
          />
        </div>
      </motion.div>
      {/* Circle */}
      <motion.svg
        className="w-[305px] lg:w-[481px] h-[305px] lg:h-[481px]"
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="253"
          cy="253"
          r="250"
          stroke="#3b82f6"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.svg>
    </div>
  );
}

export default Photo;
