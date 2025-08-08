"use client";
import Image from "next/image";
import architecture from "@/assets/Projects/LoRaSmartFarm/highlevelArch.png";
import singlePCB from "@/assets/Projects/LoRaSmartFarm/singular.png";
import solderedPCB from "@/assets/Projects/LoRaSmartFarm/both.png";
import gateway from "@/assets/Projects/LoRaSmartFarm/Gateway.png";

const LoRaWANFarm: React.FC = () => {
  return (
    <div className="flex h-full w-full flex-col gap-5 rounded-xl px-5 font-[family-name:var(--font-montserrat)] text-2xl text-black lg:px-5 lg:py-10 lg:text-3xl">
      {/* First row*/}
      <div className="flex flex-col lg:flex-row lg:justify-center">
        <div className="flex flex-col lg:w-[60%] lg:px-4">
          <h1 className="font-bold">LoRaWAN-based Smart Farm</h1>
          <p className="text-base">
            This project presents a smart farm system that leverages a network
            of sensors and LoRaWAN technology to provide real-time insights into
            key environmental parameters. At the core of this smart farm is the
            Wio-E5 module from Seeed, a LoRa-enabled microcontroller that is
            used in conjunction with sensors to monitor soil moisture,
            temperature, and humidity levels. These sensors collect data to be
            transmitted wirelessly via LoRa technology to a centralized LoRaWAN
            gateway, utilizing ChirpStack for network management and data
            forwarding. By integrating these technologies, the system enables
            remote monitoring of agricultural fields, allowing farmers to make
            informed decisions that optimize irrigation, reduce water usage, and
            improve overall crop health.
          </p>
        </div>
        <div className="flex flex-col items-center pt-4 lg:w-[40%]">
          <Image
            src={singlePCB.src}
            alt="CustomPCBs"
            width={400}
            height={400}
          ></Image>
          <p className="text-center text-base">
            {" "}
            Picture 1: Custom PCB with Seeed's Wio-E5
          </p>
        </div>
      </div>
      <hr className="my-1 lg:mr-0" />

      {/* Row2 */}
      <div className="lg:justify-left flex flex-col lg:flex-row">
        <div className="flex flex-col items-center"></div>
        <div className="flex flex-col lg:pl-4">
          <h1 className="font-bold">Technical Stuff</h1>
          <h1 className="text-2xl">High-Level Architecture:</h1>
          <p className="text-base">
            The design can be broken down into three main components: LoRa end
            nodes, server, and client.
          </p>
        </div>
      </div>
      {/* Row3 */}
      <div className="flex flex-col lg:flex-row lg:justify-center">
        <div className="flex flex-col items-center justify-center lg:pl-4">
          <Image
            src={architecture.src}
            alt="HighLvArch.png"
            height={400}
            width={700}
            className="rounded-xl"
          />
          <p className="text-center text-base">
            Picture 2: High-level architecture of the design
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-[50%] lg:pl-4">
          <h1 className="text-2xl">LoRa End Nodes:</h1>
          <p className="text-left text-base">
            This component of the design is composed of custom-made LoRa devices
            (IoT nodes) that collect and send <b>encoded</b> sensor data
            wirelessly to the LoRaWAN gateway using LoRa modulation(Chirps).
            These custom-made PCBs are equipped with an STM32+LoRa MCU, SMA RF
            connectors, and Temperature/Humidity IC and are all hand assembled.
            Each of these LoRa devices carry a globally unique 64-bit EUI and
            NWK that is registered in our Chirpstack backend for security. Each
            data package sent by the LoRa devices will be forwarded to the
            server component's LoRaWAN Gateway Bridge through the LoRaWAN Gatway
            via Samtech's UDP package forwarding protocol.
          </p>
        </div>
        <div className="flex flex-col items-center lg:w-[50%]">
          <Image
            src={solderedPCB.src}
            alt="CustomPCBs"
            width={400}
            height={300}
          ></Image>
          <p className="text-center text-base">
            Picture 3: Finalized Custom LoRa End Nodes.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col items-center lg:w-[35%] lg:pt-2">
          <Image
            src={gateway.src}
            alt="CustomPCBs"
            width={300}
            height={300}
          ></Image>
          <p className="text-center text-base">Picture 3: Seeed M2 Gateway.</p>
        </div>
        <div className="flex flex-col lg:w-[65%] lg:pl-4">
          <h1 className="text-2xl">Server Component:</h1>
          <p className="text-left text-base">
            The first point of contact from the LoRaWAN Gateway to the server
            component is through the LoRaWAN Gateway Bridge. The Bridge will
            convert the forwarded UDP packages into MQTT messages and these
            messages will be sent to the MQTT server(aka MQTT broker). This step
            guarantees reliable data transport from the Gateway to the server.
            MQTT server will send the messages to our core ChirpStack network
            server. ChirpStack is in charge of device activation(authentication
            with each individual LoRa device, ensuring the device have correct
            keys for security), data decoding, and network application layer
            routing. ChirpStack uses rGPC to communicate with Redis and
            PostgreSQL for caching and database respectively.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col lg:pl-4">
          <h1 className="text-2xl">Client Component:</h1>
          <p className="text-left text-base">
            The Client component is a simple GUI that ultilizes RESTful api
            calls to the Server component to show and visualize sensor data,
            manage LoRa Devices(battery, signal strength), and alerts the users
            of important events.
            <br></br>
            <b>Currently WIP :D</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoRaWANFarm;
