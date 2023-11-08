import React from "react";
import fb from'@/public/Facebook.svg';
import wix from'@/public/wix.svg';
import YouTube from'@/public/YouTube.svg';
import instagram from'@/public/Instagram.svg';
import google from'@/public/google.svg';
import Image from "next/image";

const Sponsors = () => {
    const sponsors = [fb, wix, YouTube, instagram, google];
  return (
    <main className="between -skew-y-3  px-10 w-full h-[80px] bg-white/10">
      {sponsors.map((ele, i) => {
        return <Image className="md:w-auto w-[70px]" key={i} src={ele} alt="sponsor" />;
      })}
    </main>
  );
};

export default Sponsors;
