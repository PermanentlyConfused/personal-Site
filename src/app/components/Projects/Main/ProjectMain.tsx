"use client";
//!This component will not be rendered on small screens

import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import FPGAHandProject from "../ProjectsFolder/FPGAHandProject";
import BoidsProj from "../ProjectsFolder/Boids";
import LoRaWANFarm from "../ProjectsFolder/LoRaWANFarm";
import "@/app/CustomCSS/PinNTape.css";

import LoRa from "@/assets/Projects/LoRaSmartFarm/thumbnail.png";

const ProjectMain: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [showBoxes, setShowBoxes] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const boxes = [1, 2, 3, 4];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBoxes(true);
      setHasAnimated(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hidden lg:block">
      <div className="group duration:500 relative mt-5 flex h-auto w-auto flex-col items-center justify-center">
        <h1 className="mb-10 bg-linear-to-r from-[#eee7d7]/0 to-[#e5cbba]/100 px-10 py-3 text-center text-5xl font-semibold text-black drop-shadow-lg">
          Projects I Worked On
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
              className="mt-5 h-[30%] w-[70%] overflow-y-scroll rounded-lg bg-[#f6eee3]"
              onClick={() => setExpanded(null)}
            >
              <div className="pin mt-33" />
              {expanded == 0 && <LoRaWANFarm />}
              {expanded == 1 && <FPGAHandProject />}
              {expanded == 2 && (
                <div className="flex flex-col items-center justify-center bg-white p-10 text-lg text-black shadow-lg">
                  Box {expanded + 1} Content
                  <p className="mt-4 text-base">Click anywhere to close</p>
                </div>
              )}
              {expanded == 3 && <BoidsProj />}
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
              className="grid grid-cols-3 grid-rows-3 items-center justify-center gap-10 rounded-lg px-10 py-10"
            >
              {boxes.map((_, idx) => {
                let positionClasses = [];

                if (idx === 0) positionClasses[0] = "col-start-1 row-start-1"; // box1
                if (idx === 1) positionClasses[1] = "col-start-1 row-start-3"; // box2
                if (idx === 2) positionClasses[2] = "col-start-2 row-start-2"; // box3
                if (idx === 3) positionClasses[3] = "col-start-3 row-start-1"; // box4
                if (idx === 4) positionClasses[4] = "col-start-3 row-start-3"; // box5
                return (
                  <div
                    key={idx}
                    onClick={() => setExpanded(idx)}
                    className={`w- h-70 cursor-pointer gap-y-10 text-center transition ${positionClasses[idx]}`}
                  >
                    {idx == 0 && (
                      <motion.div
                        whileHover={{
                          boxShadow: "0px 0px 19px 2px rgba(0,0,0,0.2)",
                        }}
                        transition={{
                          duration: 0.5,
                          delay: 0,
                          ease: "easeInOut",
                        }}
                        className="group/project-0 flex h-full w-full items-end justify-center bg-[url('@/assets/Projects/LoRaSmartFarm/thumbnail.png')] bg-cover bg-center bg-blend-soft-light hover:bg-gray-800"
                        style={{}}
                      >
                        <div className="img-tape img-tape--1 bottom-75 left-15" />
                        <span className="mb-2 px-5 text-2xl font-semibold text-black transition-colors duration-300 group-hover/project-0:-translate-y-30 group-hover/project-0:text-white">
                          LoRaWAN-based Smart Farm
                        </span>
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
                        className="group/project-1 flex h-full w-full items-end justify-center bg-[url('@/assets/Projects/FPGAHand/Xilinx.png')] bg-cover bg-center bg-blend-soft-light hover:bg-gray-900"
                      >
                        <div className="img-tape img-tape--1 bottom-75 left-25" />
                        <span className="mb-2 px-5 text-2xl font-semibold text-black transition-colors duration-300 group-hover/project-1:-translate-y-30 group-hover/project-1:text-white">
                          AI Enabled FPGA-based Robotic Hand
                        </span>
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
                        className="group/project-2 flex h-full w-full items-end justify-center bg-[url('@/assets/Projects/Fingerprint/fingerprintThumbnail.png')] bg-cover bg-center bg-blend-soft-light hover:bg-gray-800"
                      >
                        <div className="img-tape img-tape--1 bottom-75 left-40" />
                        <span className="mb-2 text-2xl font-semibold text-black transition-colors duration-300 group-hover/project-2:-translate-y-25 group-hover/project-2:text-white">
                          FPGA-based Children Fingerprint Sensor and
                          Authentication system
                        </span>
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
                        className="group/project-3 flex h-full w-full items-end justify-center bg-[url('@/assets/Projects/Boids/BoidsThumbNail.png')] bg-cover bg-center bg-blend-soft-light hover:bg-gray-800"
                      >
                        <div className="img-tape img-tape--1 bottom-75 left-30" />
                        <span className="mb-2 px-5 text-2xl font-semibold text-black transition-colors duration-300 group-hover/project-3:-translate-y-25 group-hover/project-3:text-white">
                          Boids Simulation on Procedural Generated World
                        </span>
                      </motion.div>
                    )}
                    {/* {idx == 3 && (
                      <div className="group/project-1 flex h-full w-full items-end justify-center bg-[url('@/assets/Projects/NagUTron/ThumbNail.png')] bg-cover bg-center bg-blend-soft-light hover:bg-gray-800">
                        <span className="mb-7 font-semibold text-black transition-colors duration-300 group-hover/project-1:text-white">
                          Nag-U-Tron
                        </span>
                      </div>
                    )} */}
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
