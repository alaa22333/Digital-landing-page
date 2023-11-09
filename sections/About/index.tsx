"use client";
import { about } from "@/helpers/data";
import Image from "next/image";
import React from "react";
import who from "@/public/who.svg";
import Heading from "../UsableComponets";
import { motion } from "framer-motion";

import { useMainContext } from "@/context/main-context";
const About = () => {
  const { setSelectedPage } = useMainContext();
  return (
    <motion.main
      onViewportEnter={() => setSelectedPage("About")}
      id="about"
      className="md:px-md px-x  scroll-mt-32 md:my-[200px] my-[50px]   gap-6"
    >
      <Heading title={"Who"} subTitle={"Are We ?"} />

      <div className={`between mt-10 gap-5 md:gap-0 flex-col md:flex-row `}>
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
              duration: 0.5,
              delay: 0.3,
            },
          }}
          className="md:w-1/3 w-full "
        >
          <Image alt="about" src={who} />
        </motion.div>
        <motion.div
          initial={{
            x: 100,
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
          className="start gap-6 flex-col lg:w-1/2"
        >
          <h1 className="text-white md:text-h2 text-h3 ">
            <span className="text-secondary">Get More Leads</span> and Sales
            with Our Marketing Experts
          </h1>
          <div className="flex flex-col  gap-3">
            {about.map((ele, i) => {
              return (
                <p key={i} className="flex justify-start items-center gap-4">
                  <Image
                    className="md:w-auto w-[20px] "
                    alt="check"
                    src={ele.img}
                  />
                  <span className="text-white  md:text-sm text-xs">
                    {" "}
                    {ele.subHeadig}
                  </span>
                </p>
              );
            })}
          </div>
          <button className="main-btn"> Get Started</button>
        </motion.div>
      </div>
    </motion.main>
  );
};

export default About;
