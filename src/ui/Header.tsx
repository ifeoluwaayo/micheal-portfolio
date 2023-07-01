"use client";
import React, { useEffect, useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import AnimatedTitle from "./bits/AnimatedTitle";

export const Header = () => {
  const [scroll, setScroll] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`flex justify-between md:px-10 z-[100] px-3 h-[70px] md:h-[80px] backdrop-blur-md items-center w-full bg-transparent fixed ${
        scroll && "shadow-sm"
      }`}
    >
      <div>
        <Image
          src="/logo.png"
          width={40}
          height={40}
          alt="Micheal"
          priority
          className={`${scroll ? "block" : "hidden"}`}
        />
        <div className="md:flex hidden">
          {!scroll && <AnimatedTitle title="Micheal Ighietsemhe." />}
        </div>
        <div className="md:hidden flex">
          {!scroll && <AnimatedTitle title="Micheal Ighietsemhe." />}
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        <BsGithub
          className="text-2xl cursor-pointer hover:scale-95"
          onClick={() => router.push("https://github.com/micheal081")}
        />
        <BsLinkedin
          className="text-2xl cursor-pointer hover:scale-95"
          onClick={() => router.push("/")}
        />
      </div>
    </div>
  );
};