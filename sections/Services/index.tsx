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
    <main
      onViewportEnter={() => setSelectedPage("Services")}
      id="services"
      className="md:px-md px-x  scroll-mt-10 my-[100px]  center flex-col gap-6"
    >
      <Heading title={"Who"} subTitle={"Are We ?"} />
      {services.map((ele, i) => {
        const { img, heading, subHeadings, direction } = ele;
        return (
          <div
            key={i}
            className={`between flex-col ${
              direction === "left" ? "md:flex-row-reverse " : "md:flex-row"
            } `}
          >
            <Image
              className="md:w-[500px] w-[200px] "
              src={img}
              alt="service"
            />
            <div className="start gap-5 flex-col lg:w-[600px]">
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
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default Services;
