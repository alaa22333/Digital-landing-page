"use client";
import React from "react";
import Heading from "../UsableComponets";
import i1 from "@/public/1.svg";
import i2 from "@/public/2.svg";
import i3 from "@/public/3.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import { useMainContext } from "@/context/main-context";
const Work = () => {
  const images = [i1, i2, i3];
  const { setSelectedPage } = useMainContext();

  return (
    <motion.main
      onViewportEnter={() => setSelectedPage("Work")}
      id="work"
      className="md:px-md px-x  scroll-mt-10 my-[100px] center flex-col gap-6"
    >
      <Heading title={"Our Work "} subTitle={"What we did ?"} />
      <div className={` center md:gap-0 gap-4 flex-col md:flex-row `}>
        {images.map((ele, i) => {
          return (
            <Image
              alt="image"
              key={i}
              className="rounded-xl  md:w-auto w-[90%] cursor-pointer"
              src={ele}
            />
          );
        })}
      </div>
    </motion.main>
  );
};

export default Work;
