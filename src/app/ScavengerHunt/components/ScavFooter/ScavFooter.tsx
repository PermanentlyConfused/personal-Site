"use client";
import Image from "next/image";
import GlobalFoundries from "@/assets/ScavengerHunt/globalfoundries.png";

import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import "../css/glass_background.css";

const ScavFooter: React.FC = () => {
  return (
    <footer className="border-t-1 border-black bg-[#1e262e] text-gray-900">
      <div className="mx-auto flex flex-col divide-gray-600 px-2 py-4 md:px-40 md:py-8 lg:flex-row lg:justify-between">
        <div className="lg: flex flex-row items-center gap-3 space-y-2 self-center py-2 text-center font-[family-name:var(--font-montserrat)] font-semibold text-black md:flex-col md:space-y-0 md:space-x-4 lg:flex">
          <p className="text-sm text-[#cbe3f5]">
            Thank you to our Corporate Sponsor
          </p>
          <Image
            src={GlobalFoundries}
            alt="Global"
            height={100}
            width={200}
            className="-translate-y-1"
          ></Image>
        </div>
        <div className="flex flex-col justify-center lg:pt-0">
          <div className="flex justify-end space-x-4 px-2">
            <a
              href="#"
              title="Instagram"
              className="md8-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#cbe3f5] text-gray-50 md:h-8"
            >
              <FaInstagram color="#0f6cb6" />
            </a>
            <a
              href="https://www.linkedin.com/in/cusase/"
              title="LinkedIn"
              className="md8-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#cbe3f5] text-gray-50 md:h-8"
            >
              <FaLinkedin color="#0f6cb6" />
            </a>
            <a
              href="https://discord.gg/8JVSNvP5zZ"
              title="Discord"
              className="md8-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#cbe3f5] text-gray-50 md:h-8"
            >
              <FaDiscord color="#0f6cb6" />
            </a>
            <a
              href="mailto:sase@clarkson.edu"
              title="Gmail"
              className="md8-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#cbe3f5] text-gray-50 md:h-8"
            >
              <IoIosMail color="#0f6cb6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
    // <div className="relative flex w-full justify-center overflow-hidden border-b-1 border-black bg-[#d9bda5] py-5 font-[family-name:var(--font-montserrat)] font-semibold text-black lg:flex-nowrap"></div>
  );
};

export default ScavFooter;
