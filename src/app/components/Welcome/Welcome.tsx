"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Me from "@/assets/MeAllTheTime.png";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons";

const Welcome: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -1000 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        delay: 0,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="group items-left flex h-[full] max-h-full w-full max-w-5xl flex-col rounded-lg border-2 border-stone-800 bg-black/30 p-2 shadow-lg transition-all duration-500 select-none hover:border-[#036ffc] lg:col-span-2 lg:row-span-2 lg:h-[100%] lg:p-10"
    >
      <div className="flex h-full w-full flex-col gap-2 font-[family-name:var(--font-montserrat)] lg:gap-5">
        {" "}
        <h1 className="block text-xs font-bold lg:hidden lg:text-xl">
          Welcome!
        </h1>
        <p className="text-xs lg:text-xl">
          Hello~ I'm <b>Art Nguyen</b>, a computer engineer and fullstack
          developer at Clarkson University.{" "}
          <span className="group inline-block">
            <span className="relative">
              <span className="group-hover:hidden">
                I like to build things.
              </span>
              <span className="hidden group-hover:inline">
                I love sleep more💤.
              </span>
            </span>
          </span>
        </p>
        <div className="relative w-[70%] self-center lg:h-[200px] lg:w-[200px]">
          <Image
            src={Me.src}
            alt="Me"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <IconContext.Provider value={{ className: "", size: "30" }}>
          <div className="flex flex-row gap-2 self-center lg:gap-5">
            <a
              href="https://github.com/ArtGithubW"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="transition-colors duration-300 hover:text-blue-500" />
            </a>
            <a
              href="https://www.instagram.com/artokusu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="transition-colors duration-300 hover:text-pink-500" />
            </a>
          </div>
        </IconContext.Provider>
      </div>
      {/* This will only slide out in large screens above */}
      <div className="text-md relative right-[23.5%] bottom-[10%] z-[-1] flex hidden h-[30px] w-[120px] rotate-270 items-center justify-center rounded-t-lg border-t-2 border-r-2 border-l-2 border-[#036ffc] bg-[#036ffc] bg-black/30 px-5 text-white opacity-0 duration-600 ease-in-out select-none lg:block lg:transition-all lg:group-hover:bottom-[80%] lg:group-hover:opacity-100">
        <p className="m-auto self-center font-semibold">Welcome!</p>
      </div>
    </motion.div>
  );
};

export default Welcome;
