"use client";
import Image from "next/image";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { IconContext } from "react-icons";
import Snortlax from "@/assets/Snortlax.png";
import Current from "./Current/Current";
import "@/app/CustomCSS/PinNTape.css";

const LeftPanel: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <header className="flex lg:top-0 lg:flex lg:max-h-fit lg:w-[100%] lg:flex-col lg:justify-between">
        <motion.div
          initial={{
            translateX: "-200px",
          }}
          animate={{
            translateX: "0px",
          }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0, ease: "easeInOut" }}
          className="box-1 rotate-0 rounded-md border-1 border-solid border-black lg:rotate-2"
        >
          <motion.i
            initial={{
              translateY: "-200px",
            }}
            animate={{
              translateY: "0px",
            }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
            className="pin hidden lg:block"
          ></motion.i>
          <h1 className="text-4xl text-slate-900 sm:text-5xl">Art Nguyen</h1>
          <h1 className="mt-3 text-lg tracking-tight text-slate-900 sm:text-xl">
            Computer Engineer & Fullstack Dev <br></br>@Clarkson University
          </h1>

          <div className="group mt-4 inline-block max-w-xs leading-normal">
            <div className="relative">
              <div className="text-gray-900 group-hover:hidden">
                I like to build things.
              </div>
              <div className="hidden text-gray-900 group-hover:inline">
                I love sleep more💤.
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="img-tape img-tape--2 md:left-[5%] lg:left-[5%]">
                <Image
                  src={Snortlax.src}
                  alt="Picture of snortlax"
                  width={400}
                  height={500}
                  quality={80}
                />
              </div>
            </div>
          </div>
          <IconContext.Provider value={{ className: "mt-5", size: "30" }}>
            <div className="flex flex-row justify-center gap-2 lg:gap-5">
              <a
                href="https://github.com/PermanentlyConfused"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-black transition-colors duration-300 hover:text-blue-500" />
              </a>
              <a
                href="https://www.instagram.com/artokusu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-black transition-colors duration-300 hover:text-pink-500" />
              </a>
            </div>
          </IconContext.Provider>
        </motion.div>
      </header>
      <Current />
    </div>
  );
};

export default LeftPanel;
