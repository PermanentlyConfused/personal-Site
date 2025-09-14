"use client";
import Image from "next/image";
import scout from "@/assets/Projects/Autoware/scout_20.png";
import autowareStack from "@/assets/Projects/Autoware/AutowareStack.png";
import parking from "@/assets/Projects/Autoware/Parking.gif";

const AutowareProj: React.FC = () => {
  return (
    <div className="flex h-full w-full flex-col gap-5 rounded-xl px-5 py-10 font-[family-name:var(--font-montserrat)] text-2xl text-black lg:text-3xl">
      {/* First row*/}
      <div className="flex flex-col lg:flex-row lg:justify-center">
        <div className="flex flex-col lg:w-[70%] lg:px-4">
          <h1 className="font-bold">
            3D Autonomous Driving with AgileX Scout 2.0
          </h1>
          <h1 className="text-2xl">Introduction:</h1>
          <p className="text-semibold text-base">
            This project was one of my 2025 summer research project. Clarkson
            University's Cybersecurity, Autonomous system, and Machine learning
            Engineering Lab(CAMEL) were working with autononmous vehicles over
            the years with Nav2 as their main navigation framework. Nav2 have
            served them well as a 2D navigation framework as they have mainly
            developing their vehicles for simple, indoor environments. This 2D
            navigation framework proved to be ineffective in more complicated
            outdoor urban environments as there are vertical obstacles,
            clearances, and multi-layered structures. Over the summer, I have
            introduced the 3D navigation framework, Autoware, to Clarkson to
            serve as a foundation for their future works and projects.
          </p>
        </div>
        <div className="flex flex-col items-center lg:w-[30%]">
          <Image
            src={scout.src}
            alt="Scout2.0Img"
            height={300}
            width={300}
            unoptimized
            className="rounded-xl"
          />
          <p className="mt-2 text-center text-base">
            {" "}
            Picture 1: AgileX Scout 2.0(without add-ons){" "}
          </p>
        </div>
      </div>
      <hr className="my-1 lg:mr-0" />
      {/* Row2 */}
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="flex flex-col items-center justify-center lg:w-[30%] lg:pl-4">
          <Image
            src={autowareStack.src}
            alt="High Level design"
            height={250}
            width={400}
            className="rounded-xl"
          />
          <p className="text-center text-base">
            Picture 2: High-level view of autoware AV stack
          </p>
        </div>
        <div className="flex flex-col lg:w-[70%] lg:pl-6">
          <h1 className="font-bold">Technical Stuff</h1>
          <h1 className="text-2xl">Autoware as a navigation framework</h1>
          <p className="text-base">
            Autoware's AV(Autonomous Vehicle) stack is a layered, modular
            architecture that follows the typical flow of autonomous driving:
            sensing the environment, understanding it, deciding on actions, and
            executing those actions — with tight feedback loops for real-time
            operation.
          </p>
          <h1 className="text-2xl">Hardware Inputs </h1>
          <p className="text-base">
            At the top of the Autoware stack are the hardware components that
            serve as the foundation for autonomous functionality. These include
            a variety of sensors such as Helios P16 LiDAR Logitech C920 camera,
            along with the vehicle’s onboard computing and control interfaces
            communicated via CAN interface. The sensors collect real-time data
            from the vehicle's environment, providing crucial inputs for
            mapping, localization, and perception. The vehicle interface handles
            communication between the software stack and the physical vehicle,
            allowing software-generated commands to be executed by the vehicle's
            actuators.{" "}
          </p>
          <h1 className="text-2xl">Localization </h1>
          <p className="text-base">
            Localization determines the vehicle’s exact position using sensor
            data like LiDAR, GPS, and IMU. This accurate positioning is
            essential for safe navigation and aligning the vehicle with its
            environment and map.{" "}
          </p>
          <h1 className="text-2xl">Perception </h1>
          <p className="text-base">
            Perception processes sensor data to understand the surroundings. It
            detects and tracks dynamic objects, segments obstacles, and
            identifies traffic lights, providing the system with a real-time
            view of the environment.
          </p>
          <h1 className="text-2xl">Planning </h1>
          <p className="text-base">
            Planning decides how the vehicle should move. It sets the mission
            goal, selects the driving scenario (e.g., lane following, parking),
            and generates a path based on the current situation.{" "}
          </p>
          <h1 className="text-2xl">Control </h1>
          <p className="text-base">
            Control executes the planned path by sending commands to the
            vehicle's actuators for steering, acceleration, and braking. This is
            done with a custom Scout 2.0 vehicle interface communicating via the
            aforementioned on-board CAN interface.
          </p>
        </div>
      </div>
      <hr className="my-1 lg:mr-0" />
      <div className="flex flex-col justify-center lg:flex-row">
        <div className="flex flex-col lg:w-[50%] lg:px-2">
          <h2 className="text-2xl">Simulation Environment</h2>
          <p className="text-base">
            With the Autonomous Vehicle (AV) Stack fully implemented, all
            sensors accurately defined, and high-fidelity 3D vehicle models
            integrated into the system, we are now able to successfully launch a
            comprehensive simulation environment. <br />
            This environment operates on a 3D Point Cloud Data (PCD) and
            high-definition vector map, providing a realistic and detailed
            testing ground to observe how Autoware controls the vehicle and
            responds to a variety of real-world scenarios. Ultilizing data from
            both LiDAR and camera sensors, Autoware is capable of detecting and
            identifying a wide range of objects. Static obstacles such as
            traffic lights and road signs are reliably recognized, while dynamic
            entities—including pedestrians, other vehicles, and cyclists—are
            tracked in real time. This allows for reliable navigation through
            complex urban and suburban settings. Additionally, the AV Stack
            demonstrates advanced decision-making capabilities. It supports
            adaptive behavior such as dynamic lane merging and precision
            parking(as shown in picture 3).
            <br />
          </p>
        </div>
        <div className="flex flex-col items-center justify-center lg:w-[50%]">
          <Image
            src={parking.src}
            alt="RViz View Parking"
            height={700}
            width={700}
            unoptimized
            className="rounded-xl"
          />
          <p className="text-center text-base">
            Picture 3: AgileX Scout 2.0 Parking on Simulated Environment
          </p>
          <br />
        </div>
      </div>
      <hr className="my-1 lg:mr-0" />
      <h1 className="font-bold">Live Integration</h1>
      <p className="text-base">To be updated</p>
      <div className="flex flex-row">
        <div className="flex w-[30%] flex-col items-center justify-center lg:pl-4"></div>
        <div className="flex w-[70%] flex-col pl-6"></div>
      </div>
    </div>
  );
};

export default AutowareProj;
