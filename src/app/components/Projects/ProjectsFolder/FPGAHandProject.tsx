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
    <div className="flex h-full w-full flex-col gap-5 rounded-xl px-5 py-10 font-[family-name:var(--font-montserrat)] text-3xl text-white shadow-lg">
      {/* First row*/}
      <div className="flex flex-row justify-center">
        <div className="flex w-[60%] flex-col pr-4">
          <h1>AI Enabled FPGA-based Robotic Hand</h1>
          <p className="text-base">
            This project presents an AI-powered robotic hand system capable of
            real-time object detection and interaction through ultilizing the
            AMD-Xilinx KR260 FPGA platform. At its core, the system utilizes a
            hardware-accelerated YOLOv7 model running on the FPGA’s{" "}
            <b>Deep Learning Processing Unit (DPU)</b> to achieve efficient and
            low-latency visual recognition. The KR260 also integrates key
            interfaces such as I2C for peripheral communication and PWM for
            precise motor control. Upon detecting objects through its vision
            module, the robotic hand interprets the scene and executes
            appropriate gestures to grasp or interact with the object
            accordingly. This project showcases the fusion of edge AI, robotics,
            and FPGA-based acceleration for a responsive and intelligent
            automation application.
          </p>
        </div>
        <div className="flex w-[40%] flex-col items-center pl-4">
          {" "}
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
      {/* Second Row */}

      <OpenPDFButton></OpenPDFButton>
    </div>
  );
};

export default FPGAHandProject;
