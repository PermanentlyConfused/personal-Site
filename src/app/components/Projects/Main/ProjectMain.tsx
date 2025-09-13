"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import React from "react";
import Image from "next/image";

import FPGAHandProject from "../ProjectsFolder/FPGAHandProject";
import BoidsProj from "../ProjectsFolder/Boids";
import LoRaWANFarm from "../ProjectsFolder/LoRaWANFarm";
import AutowareProj from "../ProjectsFolder/Autoware";
import FingerprintProj from "../ProjectsFolder/Fingerprint";

import EmblaCarousel from "../../MyEmblaCarousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import "../../MyEmblaCarousel/css/embla.css";
import "@/app/CustomCSS/PinNTape.css";

import LoRa from "@/assets/Projects/LoRaSmartFarm/thumbnail.png";
import Xilinx from "@/assets/Projects/FPGAHand/Xilinx.png";
import Boids from "@/assets/Projects/Boids/BoidsThumbNail.png";
import Fingerprint from "@/assets/Projects/Fingerprint/fingerprintThumbnail.png";
import Autoware from "@/assets/Projects/Autoware/autowareLogo.png";
import construction from "@/assets/under.png";

import AutoDoodle from "@/assets/Projects/Autoware/doodle.png";
import LoraDoodle from "@/assets/Projects/LoRaSmartFarm/doodle.png";
import BoidDoodle from "@/assets/Projects/Boids/doodle.png";
import FingerDoodle from "@/assets/Projects/Fingerprint/doodle.png";
import HandDoodle from "@/assets/Projects/FPGAHand/doodle.png";

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
        <h1 className="mb-10 bg-[url('/assets/stupid.png')] bg-cover px-5 py-2 text-center text-3xl font-semibold text-black xl:px-10 xl:py-8 xl:text-5xl">
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
              className="mt-5 overflow-y-scroll rounded-lg bg-[#f6eee3] shadow-2xl lg:h-[30%] lg:w-[70%] xl:pt-0"
              onClick={() => setExpanded(null)}
            >
              <div className="pin bot-20" />
              {expanded == 0 && <LoRaWANFarm />}
              {expanded == 1 && <FPGAHandProject />}
              {expanded == 2 && <FingerprintProj />}
              {expanded == 3 && <AutowareProj />}
              {expanded == 4 && <BoidsProj />}
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
                          <div className="embla__slide__content flex flex-col gap-3 rounded-3xl px-10 text-center text-black">
                            {/* <div className="img-tape img-tape--1 bottom-46 left-35" /> */}
                            <span className="mb-2 text-xl font-semibold text-black transition-colors duration-300 group-hover/project-0:text-white lg:text-2xl">
                              LoRaWAN-based Smart Farm
                            </span>
                            <Image
                              src={LoraDoodle.src}
                              height={100}
                              width={100}
                              alt="Lora Doodle"
                              className="absolute right-2 bottom-0"
                            />
                            <div className="img-tape img-tape--4 -top-5">
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
                          <div className="embla__slide__content flex flex-col gap-4 rounded-3xl px-10 text-center text-black">
                            {/* <div className="img-tape img-tape--1 bottom-46 left-35" /> */}
                            <span className="mb-2 text-xl font-semibold text-black transition-colors duration-300 group-hover/project-1:text-white lg:text-2xl">
                              AI Enabled FPGA-based Robotic Hand
                            </span>
                            <Image
                              src={HandDoodle.src}
                              height={100}
                              width={100}
                              alt="Hand Doodle"
                              className="absolute right-2 bottom-0"
                            />
                            <div className="img-tape img-tape--4 -top-5">
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
                          <div
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                            }}
                            className="embla__slide__content relative flex flex-col gap-3 overflow-hidden rounded-3xl px-10 text-center text-black"
                          >
                            {" "}
                            <Image
                              src={FingerDoodle.src}
                              height={100}
                              width={100}
                              alt="Finger Doodle"
                              className="absolute right-2 bottom-0"
                            />
                            <Image
                              src={construction.src}
                              unoptimized
                              alt="constructiontape.jpg"
                              width={660}
                              height={660}
                              className="absolute top-20 z-2 opacity-80"
                            ></Image>
                            {/* <div className="img-tape img-tape--1 bottom-75 left-40" /> */}
                            <span className="text-xl font-semibold text-black transition-colors duration-300 group-hover/project-2:text-white lg:text-2xl">
                              FPGA-based Children Fingerprint Sensor and
                              Authenticator
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
                            <Image
                              src={construction.src}
                              unoptimized
                              alt="constructiontape.jpg"
                              width={660}
                              height={660}
                              className="absolute top-80 z-2 opacity-80"
                            ></Image>
                          </div>
                        )}
                        {idx == 3 && (
                          <div className="embla__slide__content flex flex-col gap-3 rounded-3xl px-10 text-center text-black">
                            <span className="mb-2 text-xl font-semibold text-black transition-colors duration-300 group-hover/project-4:text-white lg:text-2xl">
                              3D Autonomous Driving with AgileX Scout 2.0
                            </span>
                            <Image
                              src={AutoDoodle.src}
                              height={100}
                              width={100}
                              alt="Autoware Doodle"
                              className="absolute right-2 bottom-0"
                            />
                            <div className="img-tape img-tape--4 -top-5">
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
                        {idx == 4 && (
                          <div className="embla__slide__content flex flex-col gap-3 rounded-3xl px-10 text-center text-black">
                            {/* <div className="img-tape img-tape--1 bottom-75 left-30" /> */}
                            <span className="mb-2 text-xl font-semibold text-black transition-colors duration-300 group-hover/project-3:text-white lg:text-2xl">
                              Boids Simulation on Procedural Generated World
                            </span>
                            <Image
                              src={BoidDoodle.src}
                              height={100}
                              width={200}
                              alt="Boids Doodle"
                              className="absolute right-2 bottom-0"
                            />
                            <div className="img-tape img-tape--4 -top-5">
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
