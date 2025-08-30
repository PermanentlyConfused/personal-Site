"use client";
//!This component will not be rendered on small screens

import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import FPGAHandProject from "../ProjectsFolder/FPGAHandProject";
import BoidsProj from "../ProjectsFolder/Boids";
import LoRaWANFarm from "../ProjectsFolder/LoRaWANFarm";
import AutowareProj from "../ProjectsFolder/Autoware";
import "@/app/CustomCSS/PinNTape.css";

import LoRa from "@/assets/Projects/LoRaSmartFarm/thumbnail.png";
import Xilinx from "@/assets/Projects/FPGAHand/Xilinx.png";
import Boids from "@/assets/Projects/Boids/BoidsThumbNail.png";
import Fingerprint from "@/assets/Projects/Fingerprint/fingerprintThumbnail.png";
import Autoware from "@/assets/Projects/Autoware/autowareLogo.png";

const ProjectMain: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [showBoxes, setShowBoxes] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const boxes = [1, 2, 3, 4, 5];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBoxes(true);
      setHasAnimated(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="">
      <div className="group relative mt-5 flex h-auto w-auto flex-col items-center justify-center">
        <h1 className="mb-10 bg-linear-to-r from-[#eee7d7]/0 to-[#e5cbba]/100 px-5 py-2 text-center text-3xl font-semibold text-black drop-shadow-lg xl:px-10 xl:py-3 xl:text-5xl">
          Some Projects I Worked On
        </h1>

        {/* Expanded Box */}
        <AnimatePresence>
          {expanded !== null && (
            <motion.div
              key="expanded-box"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-5 overflow-y-scroll rounded-lg bg-[#f6eee3] lg:h-[30%] lg:w-[70%] xl:pt-0"
              onClick={() => setExpanded(null)}
            >
              <div className="pin bot-20" />
              {expanded == 0 && <LoRaWANFarm />}
              {expanded == 1 && <FPGAHandProject />}
              {expanded == 2 && (
                <div className="flex flex-col items-center justify-center bg-white p-10 text-lg text-black shadow-lg">
                  Box {expanded + 1} Content
                  <p className="mt-4 text-base">Click anywhere to close</p>
                </div>
              )}
              {expanded == 3 && <BoidsProj />}
              {expanded == 3 && <AutowareProj />}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Button Grid */}
        <AnimatePresence>
          {expanded === null && showBoxes && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.2,
                delay: hasAnimated ? 0 : 0.2,
              }}
              className="flex-col flex-wrap justify-items-center rounded-lg lg:grid lg:grid-cols-2 lg:grid-rows-3 lg:gap-2 lg:gap-x-5 lg:px-30 lg:py-10"
            >
              {boxes.map((_, idx) => {
                let positionClasses = [];

                if (idx === 0) positionClasses[0] = "col-start-1 row-start-1"; // box1
                if (idx === 1) positionClasses[1] = "col-start-1 row-start-2"; // box2
                if (idx === 2) positionClasses[2] = "col-start-1 row-start-3"; // box3
                if (idx === 3) positionClasses[3] = "col-start-2 row-start-1"; // box4
                if (idx === 4) positionClasses[4] = "col-start-2 row-start-2"; // box5
                if (idx === 5) positionClasses[5] = "col-start-2 row-start-3"; // box6
                return (
                  <div
                    key={idx}
                    onClick={() => setExpanded(idx)}
                    className={`mb-5 h-[80%] w-[90%] cursor-pointer text-center transition lg:mb-0 ${positionClasses[idx]}`}
                  >
                    {idx == 0 && (
                      <motion.div
                        whileHover={{
                          boxShadow: "0px 0px 19px 4px rgba(0,0,0,0.2)",
                        }}
                        transition={{
                          duration: 0.5,
                          delay: 0,
                          ease: "easeInOut",
                        }}
                        className="group/project-0 flex h-full w-full flex-row items-center justify-evenly gap-x-5 rounded-xl border-1 border-black bg-white/80 bg-cover bg-center px-5 bg-blend-soft-light hover:bg-gray-800 lg:gap-x-10"
                      >
                        {/* <div className="img-tape img-tape--1 bottom-46 left-35" /> */}
                        <span className="mb-2 text-xl font-semibold text-black transition-colors duration-300 group-hover/project-0:text-white lg:text-2xl">
                          LoRaWAN-based Smart Farm
                        </span>
                        <div className="img-tape img-tape--4 -top-5">
                          <Image
                            src={LoRa.src}
                            height={200}
                            width={200}
                            alt="LoRa Thumbnail"
                            className="rounded-xl border-0 border-black bg-white"
                          />
                        </div>
                      </motion.div>
                    )}
                    {idx == 1 && (
                      <motion.div
                        whileHover={{
                          boxShadow: "0px 0px 19px 2px rgba(0,0,0,0.2)",
                        }}
                        transition={{
                          duration: 0.5,
                          delay: 0,
                          ease: "easeInOut",
                        }}
                        style={{
                          alignSelf: idx % 2 === 1 ? "flex-start" : "flex-end",
                        }}
                        className="group/project-1 flex h-full w-full flex-row items-center justify-evenly gap-5 rounded-xl border-1 border-black bg-white/80 bg-cover bg-center p-5 px-5 bg-blend-soft-light hover:bg-gray-800 lg:gap-x-3"
                      >
                        {/* <div className="img-tape img-tape--1 bottom-46 left-35" /> */}
                        <span className="mb-2 text-xl font-semibold text-black transition-colors duration-300 group-hover/project-1:text-white lg:text-2xl">
                          AI Enabled FPGA-based Robotic Hand
                        </span>
                        <div className="img-tape img-tape--4 -top-5">
                          <Image
                            src={Xilinx.src}
                            height={300}
                            width={300}
                            alt="Xilinx Logo"
                            className="rounded-xl border-1 border-black"
                          />
                        </div>
                      </motion.div>
                    )}
                    {idx == 2 && (
                      <motion.div
                        whileHover={{
                          boxShadow: "0px 0px 19px 2px rgba(0,0,0,0.2)",
                        }}
                        transition={{
                          duration: 0.5,
                          delay: 0,
                          ease: "easeInOut",
                        }}
                        style={{
                          alignSelf: idx % 2 === 1 ? "flex-start" : "flex-end",
                        }}
                        className="group/project-2 flex h-full w-full flex-row items-center justify-evenly gap-5 rounded-xl border-1 border-black bg-white/80 bg-cover bg-center p-5 px-5 bg-blend-soft-light hover:bg-gray-800 lg:gap-x-3"
                      >
                        {/* <div className="img-tape img-tape--1 bottom-75 left-40" /> */}
                        <span className="text-xl font-semibold text-black transition-colors duration-300 group-hover/project-2:text-white lg:text-2xl">
                          FPGA-based Children Fingerprint Sensor and
                          Authentication system
                        </span>
                        <div className="img-tape img-tape--4 -top-5">
                          <Image
                            src={Fingerprint.src}
                            height={300}
                            width={300}
                            alt="Fingerprint Logo"
                            className="rounded-xl border-1 border-black"
                          />
                        </div>
                      </motion.div>
                    )}
                    {idx == 3 && (
                      <motion.div
                        whileHover={{
                          boxShadow: "0px 0px 19px 2px rgba(0,0,0,0.2)",
                        }}
                        transition={{
                          duration: 0.5,
                          delay: 0,
                          ease: "easeInOut",
                        }}
                        style={{
                          alignSelf: idx % 2 === 1 ? "flex-start" : "flex-end",
                        }}
                        className="group/project-3 flex h-full w-full flex-row items-center justify-evenly gap-5 rounded-xl border-1 border-black bg-white/80 bg-cover bg-center p-5 px-5 bg-blend-soft-light hover:bg-gray-800 lg:gap-x-3"
                      >
                        {/* <div className="img-tape img-tape--1 bottom-75 left-30" /> */}
                        <span className="mb-2 text-xl font-semibold text-black transition-colors duration-300 group-hover/project-3:text-white lg:text-2xl">
                          Boids Simulation on Procedural Generated World
                        </span>
                        <div className="img-tape img-tape--4 -top-5">
                          <Image
                            src={Boids.src}
                            height={300}
                            width={300}
                            alt="Boids thumbnail"
                            className="rounded-xl border-1 border-black"
                          />
                        </div>
                      </motion.div>
                    )}
                    {idx == 4 && (
                      <motion.div
                        whileHover={{
                          boxShadow: "0px 0px 19px 2px rgba(0,0,0,0.2)",
                        }}
                        transition={{
                          duration: 0.5,
                          delay: 0,
                          ease: "easeInOut",
                        }}
                        style={{
                          alignSelf: idx % 2 === 1 ? "flex-start" : "flex-end",
                        }}
                        className="group/project-4 flex h-full w-full flex-row items-center justify-evenly gap-5 rounded-xl border-1 border-black bg-white/80 bg-cover bg-center p-5 px-5 bg-blend-soft-light hover:bg-gray-800 lg:gap-x-3"
                      >
                        <span className="mb-2 text-xl font-semibold text-black transition-colors duration-300 group-hover/project-4:text-white lg:text-2xl">
                          3D Autonomous Driving with AgileX Scout 2.0
                        </span>
                        <div className="img-tape img-tape--4 -top-5">
                          <Image
                            src={Autoware.src}
                            height={300}
                            width={300}
                            alt="Boids thumbnail"
                            className="rounded-xl border-1 border-black"
                          />
                        </div>
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjectMain;
