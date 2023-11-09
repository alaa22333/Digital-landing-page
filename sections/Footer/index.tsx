'use client'
import React from 'react'
import logo from '@/public/logo.svg';
import fb from '@/public/Footer/Facebook - Negative.svg';
import instagram from '@/public/Footer/Instagram - Negative.svg';
import twitter from '@/public/Footer/Twitter - Negative.svg';
import youtube from '@/public/Footer/YouTube - Negative.svg';
import Image from 'next/image'
import { links } from '@/helpers/data'
import Link from 'next/link'
import { useMainContext } from '@/context/main-context';
const Footer = () => {
      const { selectedPage }=useMainContext()
const socials=[fb,youtube,instagram,twitter];

  return (
    <div className="bg-white/20 w-full gap-10 py-7 px-x md:px-md start flex-col ">
      <Image className="" alt="logo" src={logo} />

      <div className="center md:mx-auto  w-full gap-4 flex-col">
        <div className="bg-primary2 gap-5   md:flex-row flex-col  rounded-lg between md:w-[80%] w-full px-5 py-4 ">
          <p className="text-white md:text-sm text-xs ">
            Register now so you don't miss our programs
          </p>
          <form className="bg-white flex-1  w-full  py-3 px-2 gap-3 md:between center  md:flex-row flex-col  rounded-lg border">
            <input
              placeholder="Enter Your Email"
              className="rounded-lg w-full flex-1 md:py-3 py-2 px-2 border-black/50 border "
            ></input>
            <button className="main-btn">Subscribe</button>
          </form>
        </div>
        <div className="flex md:flex-row flex-col md:gap-0 gap-5 justify-around items-center w-full">
          <ul className="between gap-6 ">
            {links.map((ele, i) => {
              const { title, hash } = ele;
              return (
                <li key={i}>
                  <Link
                    className={`text-sm  hover:underline hover:text-secondary/40 text-secondary   `}
                    href={hash}
                  >
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <main className="between gap-6">
            {socials.map((ele, i) => {
              return (
                <Image
                  className=" cursor-pointer hover:opacity-60"
                  key={i}
                  src={ele}
                  alt="social"
                />
              );
            })}
          </main>
        </div>
        <hr className="border border-b-gray-600 w-[90%] " />
        <div className="between md:flex-row  flex-col-reverse gap-2 md:text-sm text-xs  md:w-[90%]  text-white">
          <p className="text-center">© 2022 Market Mojo. All rights reserved.</p>
          <div className="text-xs gap-3 between">
            <p className="cursor-pointer  hover:underline hover:text-secondary ">
              Terms of Service{" "}
            </p>
            <p className="cursor-pointer hover:underline hover:text-secondary ">
              Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
