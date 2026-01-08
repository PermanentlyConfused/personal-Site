"use client";
import Image from "next/image";
import lightsOff from "@/assets/Projects/Fingerprint/default.png";
import lightsOn from "@/assets/Projects/Fingerprint/lightson.png";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import "@/app/CustomCSS/imgSlider.css";

const FingerprintProj: React.FC = () => {
    return (
        <div className="flex h-full w-full flex-col gap-y-10 rounded-xl px-5 py-10 font-[family-name:var(--font-montserrat)] text-2xl text-black lg:text-3xl">
            {/* First row*/}
            <h1 className="px-20 text-center text-3xl font-bold">
                FPGA-based Children Fingerprint Sensor and Authenticator
            </h1>

            {/* Second row*/}
            <div className="flex flex-col gap-3 text-black lg:flex-row lg:justify-evenly">
                <div
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                    }}
                    className="flex flex-col items-center justify-center px-2"
                >
                    <h1 className="text-2xl font-semibold"> Introduction</h1>
                    <p className="text-base">
                        This project was the featured project for my major's
                        required senior lab course. This project introduces a
                        novel high resolution(&gt;2000ppi) fingerprint sensor
                        and authenticator designed towards children of &lt; 10
                        years old. The fingerprint sensor itself is a
                        contact-based type that uses light refraction capture
                        fingerprints' ridges and valleys. The authenticator is
                        built on a SOM FPGA-- Kria KV260. The FPGA is used to
                        enroll, store, and verify fingerprints captured from the
                        sensor with an integrated DPU(Deeplearning Processing
                        Unit) and custom trained siamese neural network model.
                    </p>
                    <ImgComparisonSlider className="slider">
                        <Image
                            height={300}
                            width={300}
                            alt="help"
                            slot="first"
                            src={lightsOff.src}
                        />
                        <Image
                            height={300}
                            width={300}
                            alt="help"
                            slot="second"
                            src={lightsOn.src}
                        />
                        <svg
                            {...{
                                slot: "handle",
                                class: "custom-animated-handle",
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            width="100"
                            viewBox="-8 -3 16 6"
                        >
                            <path
                                stroke="#fff"
                                d="M -5 -2 L -7 0 L -5 2 M -5 -2 L -5 2 M 5 -2 L 7 0 L 5 2 M 5 -2 L 5 2"
                                strokeWidth="1"
                                fill="#fff"
                                vectorEffect="non-scaling-stroke"
                            ></path>
                        </svg>
                    </ImgComparisonSlider>
                    <p className="text-base">
                        Image 1: Fingerprint Sensor Lighting Up on Connect
                    </p>
                </div>

                {/* Stupid Verticle Rule  */}
                <div className="border-l-[1px] border-solid"></div>
                {/* Third row*/}
                <div
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                    }}
                    className="flex flex-col items-center justify-center px-2"
                >
                    <div className="">
                        <h1 className="text-2xl font-semibold">
                            {" "}
                            Technical Stuff
                        </h1>
                        <p className="text-base">
                            This project was the featured project for my major's
                            required senior lab course. This project introduces
                            a novel high resolution(&gt;2000ppi) fingerprint
                            sensor and authenticator designed towards children
                            of &lt; 10 years old. The fingerprint sensor itself
                            is a contact-based type that uses light refraction
                            capture fingerprints' ridges and valleys. The
                            authenticator is built on a SOM FPGA-- Kria KV260
                            and can be used to enroll, store, and verify
                            fingerprints captured from the sensor.
                        </p>
                    </div>
                </div>

                {/* Stupid Verticle Rule  */}
                <div className="border-l-[1px] border-solid"></div>
                {/* Fourth row*/}
                <div
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                    }}
                    className="flex flex-col items-center justify-center px-2"
                >
                    <div className="">
                        <h1 className="text-2xl font-semibold">
                            {" "}
                            Introduction
                        </h1>
                        <p className="text-base">
                            This project was the featured project for my major's
                            required senior lab course. This project introduces
                            a novel high resolution(&gt;2000ppi) fingerprint
                            sensor and authenticator designed towards children
                            of &lt; 10 years old. The fingerprint sensor itself
                            is a contact-based type that uses light refraction
                            capture fingerprints' ridges and valleys. The
                            authenticator is built on a SOM FPGA-- Kria KV260
                            and can be used to enroll, store, and verify
                            fingerprints captured from the sensor. It can also
                            be used to
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FingerprintProj;
