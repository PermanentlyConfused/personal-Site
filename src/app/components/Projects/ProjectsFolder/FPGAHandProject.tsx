"use client";
import Image from "next/image";
import kr260 from "@/assets/Projects/FPGAHand/kr260.png";
import pipeline from "@/assets/Projects/FPGAHand/pipeline.png";
import vitisStep1 from "@/assets/Projects/FPGAHand/vitisStep1.png";

import Architecture from "@/assets/Projects/FPGAHand/DPUArchs.png";
const OpenPDFButton: React.FC = () => {
  const openPDF = () => {
    const pdfUrl = "/assets/Projects/FPGAHand/design_1.pdf";
    window.open(pdfUrl, "_blank");
  };

  return (
    <button
      className="cursor-pointer text-black hover:text-blue-900"
      onClick={(e) => {
        openPDF();
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      Click to show PDF of full design
    </button>
  );
};
const FPGAHandProject: React.FC = () => {
  return (
    <div className="flex h-full w-full flex-col gap-5 rounded-xl px-5 py-10 font-[family-name:var(--font-montserrat)] text-2xl text-black lg:text-3xl">
      {/* First row*/}
      <div className="flex flex-col lg:flex-row lg:justify-center">
        <div className="flex flex-col lg:w-[55%] lg:px-4">
          <h1 className="font-bold">AI Enabled FPGA-based Robotic Hand</h1>
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
            automation application. I will only discuss the hardware
            architecture of this project as I did not actively contribute in the
            development of the functioning flow for Hand itself and its custom
            built models.
          </p>
        </div>
        <div className="flex flex-col items-center lg:w-[45%]">
          <Image src={kr260.src} alt="Kr260" width={300} height={300}></Image>
          <p className="text-center text-base">
            {" "}
            Picture 1: KR260 FPGA Platform{" "}
          </p>
        </div>
      </div>
      <hr className="my-1 lg:mr-0" />

      {/* Row2 */}
      <div className="flex flex-col lg:flex-row lg:justify-center">
        <div className="flex flex-col lg:flex-row lg:gap-10 lg:px-4">
          <div className="lg:w-[60%]">
            <h1 className="font-bold">Technical Stuff</h1>
            <h1 className="text-2xl font-semibold">Creating the Overlay:</h1>
            <p className="text-base">
              In the context of AMD Xilinx's KR SoMs, an overlay refers to a
              synthesized and implemented Vivado design in the form of a
              generated bitstream(.bit) file and hardware handoff(.hwh) file.
              The KR SoMs(Processing System) then are able to reprogram the
              FPGA's carrier card(Programmable Logic) using the aforementioned
              overlay.
            </p>
            <br />
            <h1 className="text-xl">Hardware Platform Definition:</h1>
            <p className="text-base">
              For our use case, we need to implement a Deep-learning Processing
              Unit(DPU) to hardware accelerate our custom Yolo V7 models.
              Luckily for us, Xilinx has developed a verbose and highly
              customizable DPU module for us to implement within our Vivado
              design.{" "}
              <b>
                While this module is exportable into our Vivado project as an
                IP-block, this will not let us ultilize the DPU from the
                soft-core processor as we also need a .XCLBIN file that includes
                the DPU's bitstream to program the DPU onto the FPGA fabric.
              </b>
              For us to ultilie the DPU, we would have to create a brand new
              Vivado project to define the hardware platform base for the DPU.
              The hardware platform would define all the clocking wizards,
              processer clock resets, and Zynq core. This step is required to
              meticulously define the clock speeds and parameters for the DPU to
              use(Notice that we do not add the DPU IP block itself). At this
              step, the Vivado block design would look similar to Picture 2.
            </p>
          </div>
          <div className="flex flex-col items-center pt-4 text-center lg:w-[40%] lg:pt-18">
            <Image
              src={vitisStep1.src}
              alt="asdasdasd"
              width={500}
              height={500}
              unoptimized
            ></Image>
            <p className="text-base">Picture 2: Defined Hardware Platform</p>
          </div>
        </div>
      </div>
      {/* Row3 */}
      <div className="lg:justify-left flex flex-col lg:flex-row lg:px-4">
        <div className="flex flex-col lg:gap-10">
          <div className="">
            <h1 className="text-xl">Vitis AI Flow:</h1>
            <p className="text-base">
              After generating the bitstream, we are now able to export our
              hardware platform into Vitis AI Flow to customize and integrate
              the DPU to our Vivado design.
              <br />
              The DPU provided by Xilinx contains <b>8</b> different
              architectures. The "higher" the architecture, the more performant
              the DPU is but at the cost of more resources required. Our
              targeted platform-- Kria KR260, contains{" "}
              <b>
                144 BRAM(Block Random Access Memory), 64 URAM(Ultra Random
                Access Memory ), 1.2 DSP(Digital Signal Processing) slices.{" "}
              </b>
              According to Xilinx's documentation(Shown in picture 3), we are
              able to ultilize <b>1</b> core of the fastest architecture on our
              targeted platform.
            </p>
            <div className="flex flex-col items-center pt-4 text-center">
              <Image
                src={Architecture.src}
                alt="DPU Architectures"
                width={800}
                height={800}
                unoptimized
              ></Image>
              <p className="text-base">
                Picture 3: Availiable DPU Architectures
              </p>
            </div>
            <p className="text-base">
              Anyone with a keen eye would have picked up on the inconsistency
              with URAM required for the B4096 vs URAM availiable on our board
              and you would be correct-- There are not enough URAM on our board
              to support this architecture. However, this is not an issue. If we
              study Xilinx's BRAM and URAM architecture, we would see that there
              are almost no routing differences between the two. The
              main(concerning) difference is the density between these two--
              Other differences like required clock inputs, cascade will not be
              discussed to save time. Each URAM has 288Kbit fixed-size blocks
              while BRAM has 38Kbit fixed size blocks. Therefore we are able to
              essentially "replace" missing URAM with sufficient BRAM
              allocation. Luckily for us, Vitis AI Flow handles the conversion
              and routing for us so we do not need to manually do this but it is
              good to know. <br /> After configuring all the parameters and
              architecture for the DPU on vitis, we can now run a headless
              Vivado build under Vitis to finally implement the DPU into our
              Vivado project's block design(
              <b>
                Funnily enough, any host computer synthesizing this build with
                less than 32GB of RAM will make the build fail.
              </b>
              ). This step will generate us the .xclbin file that is required
              for the DPU to run.
            </p>
          </div>
        </div>
      </div>
      {/* Row3 */}
      <div className="lg:justify-left flex flex-col lg:flex-row lg:px-4">
        <div className="flex flex-col lg:gap-10">
          <div className="">
            <h1 className="text-xl">
              Peripheral Integration(Back to Vivado--again):
            </h1>
            <p className="text-base">
              After all those steps to add the DPU to our project, we can now
              reopen Vivado with our DPU integrated and we simply can drag and
              drop our AXI IPs along with the defined output/input ports onto
              the block design. In the end, we integrated a total of 6 AXI I2C,
              2 AXI GPIO, and 3 AXI Timer(for PWM) blocks into the design and
              generate the bitstream one last time! The this entire process's
              flow is shown in picture 4. The entire design can be viewed by
              clicking the "SHOW PDF" button below.
            </p>
          </div>
        </div>
      </div>
      {/* Row4 */}
      <div className="flex flex-col lg:flex-row lg:justify-center">
        <div className="flex flex-col items-center justify-center lg:pl-4">
          <Image
            src={pipeline.src}
            alt="perlin noise 1D plot"
            height={250}
            width={756}
            className="rounded-xl"
          />
          <p className="text-center text-base">
            {" "}
            Picture 4: Pipeline to Integrate DPU to an overlay
          </p>
        </div>
      </div>
      <OpenPDFButton></OpenPDFButton>
    </div>
  );
};

export default FPGAHandProject;
