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
        <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute">
          <Image
            src="/assets/profile.jpg"
            alt="A person coding"
            className="object-contain rounded-full"
            priority
            quality={100}
            fill
          />
        </div>
      </motion.div>
      {/* Circle */}
      <motion.svg
        className="w-[305px] xl:w-[511px] h-[305px] xl:h-[511px]"
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
