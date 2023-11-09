'use client';
import Image from "next/image";
import React from "react";
import hero from '@/public/Hero 2.svg'
import start from '@/public/sart.svg'
import { motion } from "framer-motion";
import { useMainContext } from "@/context/main-context";
const Hero = () => {
    const {setSelectedPage}=useMainContext()
  return (
    <motion.main
      onViewportEnter={() => setSelectedPage("Home")}
      className=" scroll-mt-24 md:px-md md:my-[200px] my-[70px]  px-x"
      id="home"
    >
      <div className="md:between  flex md:items-start  items-center md:flex-row flex-col md:gap-0 gap-12 ">
        {/* left */}
        <div className="md:w-[700px] flex flex-col gap-3">
          <motion.h1
            initial={{
              x: -100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                type: "easeIn",
                duration: 1,
                delay: 0.3,
              },
            }}
            className="text-white md:text-h1 text-h3 "
          >
            <span className="text-secondary">Grow your business </span> with our
            proven marketing strategies, executed by experts.
          </motion.h1>
          <motion.p
            initial={{
              x: -100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                type: "easeIn",
                duration: 1,
                delay: 0.4,
              },
            }}
            className="text-grey100  md:text-sm text-xs "
          >
            We have a team of experienced marketing experts who are passionate
            about helping businesses succeed.
          </motion.p>
          <motion.div
            initial={{
              x: -100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                type: "easeIn",
                duration: 1,
                delay: 0.5,
              },
            }}
            className="start gap-4 mt-7"
          >
            <button className="main-btn"> Get Started</button>
            <button className="between   md:text-sm text-xs py-2 md:px-5  font-medium  text-white bg-none gap-3">
              {" "}
              <Image alt="start" src={start} />
              See Our Progress
            </button>
          </motion.div>
        </div>
        {/* right */}
        <motion.div
          initial={{
            y: 200,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              type: "tween",
              duration: 1,
              delay: 0.6,
            },
          }}
          className="relative md:w-[400px] w-[300px] md:h-[400px] h-[300px] rounded-full"
        >
          <div className="rounded-full z-0  absolute top-[70px] left-[70px] w-[100px]  h-[100px] blur1"></div>
          <Image
            src={hero}
            className="absolute z-1  top-0 left-0 w-full h-full"
            alt="image"
          ></Image>
        </motion.div>
      </div>
    </motion.main>
  );
};

export default Hero;
