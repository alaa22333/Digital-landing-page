"use client";
import React from "react";
import review from "@/public/review.svg";
import Image from "next/image";
import Heading from "../UsableComponets";
import { motion } from "framer-motion";

const Review = () => {
  return (
    <main className="  scroll-mt-10 my-[100px]   gap-6">
      <Heading title={"Reviews"} subTitle={"What our clients said ?"} />
      <div
        className={`between md:px-md md:p-0 md:py-10 pt-10 px-x  bg-white/20 md:gap-5 gap-10 mt-10  flex-col-reverse md:flex-row `}
      >
        {" "}
        <motion.div
          viewport={{ once: true }}
          className="md:w-1/2 w-full "
          initial={{
            y: 50,
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
        >
          <Image alt="image" src={review} />
        </motion.div>{" "}
        <div className="start gap-3 flex-col lg:w-1/2">
          <h1 className="text-white md:text-lg text-sm ">
            “ I've worked with a lot of digital agencies over the years, but
            Market Mojo is the best. They're always up-to-date on the latest
            trends and technologies, and they're always willing to go the extra
            mile. I'm so grateful for their help in growing my business.”
          </h1>
          <p className="  flex text-secondary font-medium justify-end w-full">
            {" "}
            Jane Doe, Founder of Jane Doe
          </p>
        </div>
      </div>
    </main>
  );
};

export default Review;
