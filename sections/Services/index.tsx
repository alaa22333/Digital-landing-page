'use client'
import { services } from "@/helpers/data";
import Image from "next/image";
import React from "react";
import check from "@/public/check.svg";
import Heading from "../UsableComponets";
import { motion } from "framer-motion";
import { useMainContext } from "@/context/main-context";

const Services = () => {
  const { setSelectedPage } = useMainContext();

  return (
    <motion.main
      onViewportEnter={() => setSelectedPage("Services")}
      id="services"
      className="md:px-md px-x  scroll-mt-32 md:my-[200px] my-[50px]   center flex-col gap-6"
    >
      <Heading title={"Services"} subTitle={"we can do to you"} />

      {services.map((ele, i) => {
        const { img, heading, subHeadings, direction } = ele;
        return (
          <motion.div
            key={i}
            className={`between flex-col gap-5  ${
              direction === "left" ? "md:flex-row-reverse " : "md:flex-row"
            } `}
          >
            <motion.div
              viewport={{ once: true }}
              initial={{
                x: direction === "left" ? 100 : -100,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                  duration: 1,
                  delay: 0.2 * i,
                },
              }}
            >
              <Image
                className="md:w-[500px] w-[300px] "
                src={img}
                alt="service"
              />
            </motion.div>
            <motion.div
              viewport={{ once: true }}
              initial={{
                x: direction === "right" ? 100 : -100,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                  duration: 1,
                  delay: 0.2 * i,
                },
              }}
              className="start gap-5 flex-col lg:w-[600px]"
            >
              <h1 className="text-secondary md:text-h2 text-h3 ">{heading}</h1>
              <div className="flex flex-col  gap-3">
                {subHeadings.map((ele, i) => {
                  return (
                    <p
                      key={i}
                      className="flex justify-start items-center gap-4"
                    >
                      <Image
                        className="md:w-auto w-[20px] "
                        alt="check"
                        src={check}
                      />
                      <span className="text-grey100  md:text-sm text-xs">
                        {" "}
                        {ele}
                      </span>
                    </p>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </motion.main>
  );
};

export default Services;
