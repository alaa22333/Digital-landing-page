"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import logo from "@/public/logo.svg";
import bar from "@/public/bar.svg";
import { links } from "@/helpers/data";
import Link from "next/link";
import { useMainContext } from "@/context/main-context";
import { motion } from "framer-motion";
import useMediaQuery from "../UsableComponets/useMediaQuery";
const Header = () => {
  // const { selectedPage }: string = "Home";
  const { selectedPage, setSelectedPage, setShowNav, showNav,setIsOpen,isOpen } =
    useMainContext();

  useEffect(() => {
    const scrollEvent: () => void = window.addEventListener("scroll", () => {
      const height = window.pageYOffset;
      height >= 400 ? setShowNav(true) : setShowNav(false);
    });
    return () => window.removeEventListener("scroll", scrollEvent);
  });
    const isMatch = useMediaQuery("(min-width: 600px)");


  return (
    <motion.nav
      initial={{
        y: 100,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1,
          delay: 0.2,
        },
      }}
      className={`  bg-primary1${
        
        showNav &&
        "  shadow-sm bg-primary1 shadow-primary1 duration-500 transition  "
      }    between md:px-md px-x py-5 rounded-lg  gap-10 left-0 fixed top-0 w-full`}
    >
     
      <Image
        alt="logo"
        src={logo}
        className="w-[150px] md:w-[200px]"
        priority={true}
        height={100}
      />
      {isMatch ? (
        <ul className="between gap-[20px] md:gap-[70px]">
          {links.map((ele, i) => {
            const { title, hash } = ele;
            return (
              <li key={i}>
                <Link
                  className={`text-sm ${
                    selectedPage === title
                      ? " underline  underline-offset-4  shadow-secondary text-secondary  "
                      : "text-white "
                  }`}
                  href={hash}
                  onClick={() => {
                    setSelectedPage(title);
                  }}
                >
                  {title}
                </Link>
              </li>
            );
          })}
          <button className="main-btn ">Contact Us</button>
        </ul>
      ) : (
        <Image
          src={bar}
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer"
          alt="toggle"
        />
      )}
    </motion.nav>
  );
};

export default Header;
