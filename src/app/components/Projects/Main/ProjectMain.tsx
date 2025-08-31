"use client";
//!This component will not be rendered on small screens

import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import FPGAHandProject from "../ProjectsFolder/FPGAHandProject";
import BoidsProj from "../ProjectsFolder/Boids";
import LoRaWANFarm from "../ProjectsFolder/LoRaWANFarm";
import AutowareProj from "../ProjectsFolder/Autoware";
import React from "react";

import EmblaCarousel from "../../MyEmblaCarousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import "../../MyEmblaCarousel/css/embla.css";
import "@/app/CustomCSS/PinNTape.css";

import LoRa from "@/assets/Projects/LoRaSmartFarm/thumbnail.png";
import Xilinx from "@/assets/Projects/FPGAHand/Xilinx.png";
import Boids from "@/assets/Projects/Boids/BoidsThumbNail.png";
import Fingerprint from "@/assets/Projects/Fingerprint/fingerprintThumbnail.png";
import Autoware from "@/assets/Projects/Autoware/autowareLogo.png";

const OPTIONS: EmblaOptionsType = { loop: true };

const ProjectMain: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [showBoxes, setShowBoxes] = useState(false);
  const boxes = [1, 2, 3, 4, 5];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBoxes(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="">
      <div className="group relative mt-5 flex flex-col items-center justify-center">
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
              {expanded == 4 && <AutowareProj />}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Button Grid */}
        <AnimatePresence>
          {expanded === null && showBoxes && (
            <EmblaCarousel
              slides={
                <div className="embla__container">
                  {boxes.map((_, idx) => {
                    return (
                      <div
                        key={idx}
                        onClick={() => setExpanded(idx)}
                        className="embla__slide"
                      >
                        {idx == 0 && (
                          <div className="embla__slide__content flex flex-col gap-10 rounded-2xl px-10 text-center text-black">
                            {/* <div className="img-tape img-tape--1 bottom-46 left-35" /> */}
                            <span className="mb-2 text-xl font-semibold text-black transition-colors duration-300 group-hover/project-0:text-white lg:text-2xl">
                              LoRaWAN-based Smart Farm
                            </span>
                            <div className="img-tape img-tape--4 -top-5 hidden md:block">
                              <Image
                                src={LoRa.src}
                                height={300}
                                width={300}
                                alt="LoRa Thumbnail"
                                className="rounded-xl border-0 border-black bg-white"
                              />
                            </div>
                          </div>
                        )}
                        {idx == 1 && (
                          <div className="embla__slide__content flex flex-col gap-10 rounded-2xl px-10 text-center text-black">
                            {/* <div className="img-tape img-tape--1 bottom-46 left-35" /> */}
                            <span className="mb-2 text-xl font-semibold text-black transition-colors duration-300 group-hover/project-1:text-white lg:text-2xl">
                              AI Enabled FPGA-based Robotic Hand
                            </span>
                            <div className="img-tape img-tape--4 -top-5 hidden md:block">
                              <Image
                                src={Xilinx.src}
                                height={300}
                                width={300}
                                alt="Xilinx Logo"
                                className="rounded-xl border-1 border-black"
                              />
                            </div>
                          </div>
                        )}
                        {idx == 2 && (
                          <div className="embla__slide__content flex flex-col gap-10 rounded-2xl px-10 text-center text-black">
                            {/* <div className="img-tape img-tape--1 bottom-75 left-40" /> */}
                            <span className="text-xl font-semibold text-black transition-colors duration-300 group-hover/project-2:text-white lg:text-2xl">
                              FPGA-based Children Fingerprint Sensor and
                              Authentication system
                            </span>
                            <div className="img-tape img-tape--4 -top-5 hidden md:block">
                              <Image
                                src={Fingerprint.src}
                                height={300}
                                width={300}
                                alt="Fingerprint Logo"
                                className="rounded-xl border-1 border-black"
                              />
                            </div>
                          </div>
                        )}
                        {idx == 3 && (
                          <div className="embla__slide__content flex flex-col gap-10 rounded-2xl px-10 text-center text-black">
                            {/* <div className="img-tape img-tape--1 bottom-75 left-30" /> */}
                            <span className="mb-2 text-xl font-semibold text-black transition-colors duration-300 group-hover/project-3:text-white lg:text-2xl">
                              Boids Simulation on Procedural Generated World
                            </span>
                            <div className="img-tape img-tape--4 -top-5 hidden md:block">
                              <Image
                                src={Boids.src}
                                height={300}
                                width={300}
                                alt="Boids thumbnail"
                                className="rounded-xl border-1 border-black"
                              />
                            </div>
                          </div>
                        )}
                        {idx == 4 && (
                          <div className="embla__slide__content flex flex-col gap-10 rounded-2xl px-10 text-center text-black">
                            <span className="mb-2 text-xl font-semibold text-black transition-colors duration-300 group-hover/project-4:text-white lg:text-2xl">
                              3D Autonomous Driving with AgileX Scout 2.0
                            </span>
                            <div className="img-tape img-tape--4 -top-5 hidden md:block">
                              <Image
                                src={Autoware.src}
                                height={300}
                                width={300}
                                alt="Boids thumbnail"
                                className="rounded-xl border-1 border-black"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              }
              options={OPTIONS}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjectMain;
