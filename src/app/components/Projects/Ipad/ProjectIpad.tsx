"use client";
//!This component will not be rendered on small screens

import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import FPGAHandProject from "../ProjectsFolder/FPGAHandProject";
import BoidsProj from "../ProjectsFolder/Boids";
import LoRaWANFarm from "../ProjectsFolder/LoRaWANFarm";

const ProjectIpad: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [showBoxes, setShowBoxes] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const boxes = [1, 2, 3, 4];
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBoxes(true);
      setHasAnimated(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="hidden lg:block">
      <div className="group duration:500 relative mt-12 h-[720px] w-[1080px] rounded-3xl bg-gray-800 px-9 py-8 drop-shadow-xl lg:flex lg:flex-col lg:items-center lg:justify-between">
        <motion.div
          initial={{
            borderColor: "#6b7280",
            backgroundColor: "#6b7280",
            boxShadow: "0px 0px 0px 0px rgba(81,95,117, 0)",
          }}
          whileInView={{
            borderColor: "#90a1b9",
            backgroundColor: "#90a1b9", // gray-400
            boxShadow: "0px 0px 19px 2px rgba(81,95,117,1)",
          }}
          viewport={{ once: true }}
          transition={{
            duration: 3.5,
            ease: "easeInOut",
          }}
          className="absolute top-50 left-5 h-70 w-1 rounded-full"
        />
        {/* <motion.div
          initial={{
            borderColor: "#6b7280",
            backgroundColor: "#6b7280",
            borderWidth: "3px",
            boxShadow: "0px 0px 0px 0px rgba(81,95,117, 0)",
          }}
          whileInView={{
            borderColor: "#90a1b9",
            backgroundColor: "#90a1b9",
            borderWidth: "3px",
            boxShadow: "0px 0px 19px 2px rgba(81,95,117,1)",
          }}
          viewport={{ once: true }}
          transition={{
            duration: 3.5,
            ease: "easeInOut",
          }}
          className="absolute top-[50%] right-2 h-12 w-12 rounded-full"
        ></motion.div> */}

        <motion.div
          initial={{
            borderColor: "#6b7280",
            backgroundColor: "#000000",
            borderWidth: "3px",
            boxShadow: "0px 0px 0px 0px rgba(81,95,117, 0)",
          }}
          whileInView={{
            borderColor: "#90a1b9",
            backgroundColor: "#101828",
            borderWidth: "3px",
            boxShadow: "0px 0px 19px 2px rgba(81,95,117,1)",
          }}
          viewport={{ once: true }}
          transition={{ duration: 3.5, delay: 0, ease: "easeInOut" }}
          className="flex h-full w-full flex-col rounded-xl"
        >
          {/* Expanded Box */}

          <AnimatePresence>
            {expanded !== null && (
              <motion.div
                key="expanded-box"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-[0.5] mt-9 mr-10 mb-8.5 ml-9.5 flex items-center justify-center overflow-y-auto rounded-lg bg-gray-700"
                onClick={() => setExpanded(null)}
              >
                {expanded == 0 && <LoRaWANFarm />}
                {expanded == 1 && <FPGAHandProject />}
                {expanded == 2 && (
                  <div className="flex flex-col items-center justify-center rounded-xl bg-white p-10 text-3xl text-black shadow-lg">
                    Box {expanded + 1} Content
                    <p className="mt-4 text-base">Click anywhere to close</p>
                  </div>
                )}
                {expanded == 3 && <BoidsProj />}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button Grid */}
          <h1 className="mt-10 text-center font-[family-name:var(--font-montserrat)] text-4xl font-bold text-white">
            Projects I Worked On
          </h1>
          <AnimatePresence>
            {expanded === null && showBoxes && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.3,
                  delay: hasAnimated ? 0 : 0.2,
                }}
                className="flex w-full flex-row flex-wrap items-center justify-center gap-x-25 gap-y-10 rounded-lg px-10 py-10"
              >
                {boxes.map((_, idx) => (
                  <div
                    key={idx}
                    onClick={() => setExpanded(idx)}
                    className="flex h-50 w-70 cursor-pointer flex-col items-center justify-center text-center transition"
                  >
                    {idx == 0 && (
                      <motion.div
                        initial={{
                          borderColor: "transparent",
                          borderWidth: "1px",
                          boxShadow: "0px 0px 0px 0px rgba(255,255,255, 0)",
                        }}
                        whileHover={{
                          borderColor: "#ffffff",
                          boxShadow: "0px 0px 19px 2px rgba(255,255,255,1)",
                        }}
                        transition={{
                          duration: 0.5,
                          delay: 0,
                          ease: "easeInOut",
                        }}
                        className="group/project-0 flex h-full items-end rounded-xl bg-[url('@/assets/Projects/LoRaSmartFarm/thumbnail.png')] bg-cover bg-center bg-blend-soft-light hover:bg-gray-800"
                      >
                        <span className="mb-2 px-5 font-semibold text-black transition-colors duration-300 group-hover/project-0:text-white">
                          LoRaWAN-based Smart Farm
                        </span>
                      </motion.div>
                    )}
                    {idx == 1 && (
                      <motion.div
                        initial={{
                          borderColor: "transparent",
                          borderWidth: "1px",
                          boxShadow: "0px 0px 0px 0px rgba(255,255,255, 0)",
                        }}
                        whileHover={{
                          borderColor: "#ffffff",
                          boxShadow: "0px 0px 19px 2px rgba(255,255,255,1)",
                        }}
                        transition={{
                          duration: 0.5,
                          delay: 0,
                          ease: "easeInOut",
                        }}
                        className="group/project-0 flex h-full items-end rounded-xl bg-[url('@/assets/Projects/FPGAHand/ThumbNail.png')] bg-cover bg-center bg-blend-soft-light hover:bg-gray-800"
                      >
                        <span className="mb-2 px-5 font-semibold text-black transition-colors duration-300 group-hover/project-0:text-white">
                          AI Enabled FPGA-based Robotic Hand
                        </span>
                      </motion.div>
                    )}
                    {idx == 2 && (
                      <motion.div
                        initial={{
                          borderColor: "transparent",
                          borderWidth: "1px",
                          boxShadow: "0px 0px 0px 0px rgba(255,255,255, 0)",
                        }}
                        whileHover={{
                          borderColor: "#ffffff",
                          boxShadow: "0px 0px 19px 2px rgba(255,255,255,1)",
                        }}
                        transition={{
                          duration: 0.5,
                          delay: 0,
                          ease: "easeInOut",
                        }}
                        className="group/project-1 flex h-full items-end rounded-xl bg-[url('@/assets/Projects/Fingerprint/fingerprintThumbnail.png')] bg-cover bg-center bg-blend-soft-light hover:bg-gray-800"
                      >
                        <span className="mb-2 font-semibold text-black transition-colors duration-300 group-hover/project-1:text-white">
                          FPGA-based Children Fingerprint Sensor and
                          Authentication system
                        </span>
                      </motion.div>
                    )}
                    {idx == 3 && (
                      <motion.div
                        initial={{
                          borderColor: "transparent",
                          borderWidth: "1px",
                          boxShadow: "0px 0px 0px 0px rgba(255,255,255, 0)",
                        }}
                        whileHover={{
                          borderColor: "#ffffff",
                          boxShadow: "0px 0px 19px 2px rgba(255,255,255,1)",
                        }}
                        transition={{
                          duration: 0.5,
                          delay: 0,
                          ease: "easeInOut",
                        }}
                        className="group/project-2 flex h-full items-end rounded-xl bg-[url('@/assets/Projects/Boids/BoidsThumbNail.png')] bg-cover bg-center bg-blend-soft-light hover:bg-gray-800"
                      >
                        <span className="mb-2 font-semibold text-black transition-colors duration-300 group-hover/project-2:text-white">
                          Boids Simulation on Procedural Generated World
                        </span>
                      </motion.div>
                    )}
                    {/* {idx == 3 && (
                      <div className="group/project-1 flex h-full w-full items-end justify-center rounded-xl bg-[url('@/assets/Projects/NagUTron/ThumbNail.png')] bg-cover bg-center bg-blend-soft-light hover:bg-gray-800">
                        <span className="mb-7 font-semibold text-black transition-colors duration-300 group-hover/project-1:text-white">
                          Nag-U-Tron
                        </span>
                      </div>
                    )} */}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectIpad;
