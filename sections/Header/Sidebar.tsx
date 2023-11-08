'use client'
import { useMainContext } from '@/context/main-context'
import { links } from '@/helpers/data'
import Link from 'next/link'
import React from 'react'
import cancel from '@/public/cancel.svg'
import Image from 'next/image'
const Sidebar = () => {
    const { isOpen, setIsOpen, selectedPage, setSelectedPage } =
      useMainContext();
  return (
    isOpen && (
      <div className="w-full h-auto py-8 shadow-sm shadow-primary1/40 z-[100] bg-primary1 fixed top-0 left-0">
      <Image src={cancel} onClick={()=>setIsOpen(!isOpen)} className='absolute top-4 cursor-pointer right-10' alt="cancel"  />
        <ul className="center h-full pt-10 flex-col">
          {links.map((ele, i) => {
            const { title, hash } = ele;
            return (
              <li
                className={`py-5 w-full center  transition duration-300  ${
                  selectedPage === title && " bg-white/50"
                }`}
                key={i}
              >
                <Link
                  className={`text-sm ${
                    selectedPage === title
                      ? "  shadow-secondary text-secondary  "
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
        <button className="main-btn w-[90%] py-3 mt-7">Contact Us</button>
        </ul>
      </div>
    )
  );
}

export default Sidebar
