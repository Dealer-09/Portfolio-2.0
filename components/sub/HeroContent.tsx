"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 lg:px-20 mt-10 sm:mt-20 lg:mt-40 w-full z-[20]"
    >
      <div className="w-full flex flex-col gap-4 sm:gap-5 justify-center m-auto text-start pt-80 sm:pt-0">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] flex items-center"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 mt-4 text-3xl sm:text-5xl lg:text-6xl font-bold text-white max-w-full sm:max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            products experience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base sm:text-lg text-gray-400 my-4 sm:my-5 max-w-full sm:max-w-[600px]"
        >
          I&apos;m Archisman Pal, a Full Stack Web Developer,
          and aspiring Mechatronics Engineer. Check out my projects and skills.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-full sm:max-w-[200px]"
        >
          Learn More!
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-8 lg:mt-0"
      >
        <div className="relative w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] lg:w-[650px] lg:h-[650px]">
          <Image
            src="/mainIconsdark.svg"
            alt="work icons"
            fill
            className="object-contain"
            sizes="(max-width: 640px) 250px, (max-width: 1024px) 400px, 650px"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
