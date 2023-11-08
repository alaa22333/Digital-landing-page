'use client';
import Image from "next/image";
import React from "react";
import hero from '@/public/Hero 2.svg'
import start from '@/public/sart.svg'
import light from '@/public/light.svg'
import { motion } from "framer-motion";
import { useMainContext } from "@/context/main-context";
const Hero = () => {
    const {setSelectedPage}=useMainContext()
  return (
    <motion.main
      onViewportEnter={() => setSelectedPage('Home')}
      className=" scroll-mt-10 md:px-md my-[100px]  px-x"
      id="home"
    >
      <div className="md:between  flex items-start  md:flex-row flex-col md:gap-0 gap-12 ">
        {/* left */}
        <div className="md:w-[700px] flex flex-col gap-3">
          <h1 className="text-white md:text-h1 text-h3 ">
            <span className="text-secondary">Grow your business </span> with our
            proven marketing strategies, executed by experts.
          </h1>
          <p className="text-grey100  md:text-lg text-sm ">
            We have a team of experienced marketing experts who are passionate
            about helping businesses succeed.
          </p>
          <div className="start gap-4 mt-7">
            <button className="main-btn"> Get Started</button>
            <button className="between   md:text-sm text-xs py-2 px-5  font-medium  text-white bg-none gap-3">
              {" "}
              <Image src={start} />
              See Our Progress
            </button>
          </div>
        </div>
        {/* right */}
        <div className="relative w-[400px] h-[400px] rounded-full">
          <div className="rounded-full z-0  absolute top-[70px] left-[70px] w-[200px]  h-[260px] blur1"></div>
          <Image
            src={hero}
            className="absolute z-10  top-0 left-0 w-full h-full"
            alt="image"
          ></Image>
        </div>
      </div>
    </motion.main>
  );
};

export default Hero;
