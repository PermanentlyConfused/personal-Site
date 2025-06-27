"use client";
import Image from "next/image";
import kr260 from "@/assets/Projects/FPGAHand/kr260.png";
import pipeline from "@/assets/Projects/FPGAHand/pipeline.png";

const OpenPDFButton: React.FC = () => {
  const openPDF = () => {
    const pdfUrl = "/assets/Projects/FPGAHand/design_1.pdf";
    window.open(pdfUrl, "_blank");
  };

  return (
    <button
      className="cursor-pointer text-white hover:text-blue-900"
      onClick={openPDF}
    >
      Click to show PDF of full design
    </button>
  );
};
const FPGAHandProject: React.FC = () => {
  return (
    <div className="flex h-full w-full flex-col gap-5 rounded-xl px-5 font-[family-name:var(--font-montserrat)] text-2xl text-black lg:px-5 lg:py-10 lg:text-3xl lg:text-white">
      {/* First row*/}
      <div className="flex flex-col lg:flex-row lg:justify-center">
        <div className="flex flex-col lg:w-[60%] lg:px-4">
          <h1>AI Enabled FPGA-based Robotic Hand</h1>
          <p className="text-base">
            This project presents an AI-powered robotic hand system capable of
            real-time object detection and interaction through ultilizing the
            AMD-Xilinx KR260 FPGA platform. At its core, the design utilizes a
            hardware-accelerated YOLOv7 model running on the FPGA’s{" "}
            <b>Deep Learning Processing Unit (DPU)</b> to achieve efficient and
            low-latency visual recognition. The design also integrates key
            interfaces such as I2C for peripheral communication and PWM for
            precise motor control. Upon detecting objects through its vision
            module, the robotic hand interprets the scene and executes
            appropriate gestures to grasp or interact with the object
            accordingly. This project showcases the fusion of edge AI, robotics,
            and FPGA-based acceleration for a responsive and intelligent
            automation application.
          </p>
        </div>
        <div className="flex flex-col items-center pt-4 lg:w-[40%]">
          <Image
            src={kr260.src}
            alt="asdasdasd"
            width={300}
            height={300}
          ></Image>
          <p className="text-center text-base">
            {" "}
            Picture 1: KR260 FPGA Platform{" "}
          </p>
        </div>
      </div>
      <hr className="my-1 lg:mr-0" />

      {/* Row2 */}
      <div className="lg:justify-left flex flex-col lg:flex-row">
        <div className="flex flex-col items-center"></div>
        <div className="flex flex-col lg:pl-4">
          <h1 className="font-bold">Technical Stuff</h1>
          <h1 className="text-2xl">Creating the Overlay:</h1>
          <p className="text-base">
            In the context of AMD's KR SoMs, an overlay refers to a programmable
            design for the SOM's Programmable Logic (PL)
          </p>
        </div>
      </div>
      {/* Row3 */}
      <div className="flex flex-col lg:flex-row lg:justify-center">
        <div className="llg:pl-4 flex flex-col items-center justify-center">
          <Image
            src={pipeline.src}
            alt="perlin noise 1D plot"
            height={250}
            width={756}
            className="rounded-xl"
          />
          <p className="text-center text-base">
            {" "}
            Picture 2: Pipeline to Integrate DPU to an overlay
          </p>
        </div>
      </div>
      <OpenPDFButton></OpenPDFButton>
    </div>
  );
};

export default FPGAHandProject;
