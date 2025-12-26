import Image from "next/image";
import GlobalFoundries from "@/assets/ScavengerHunt/globalfoundries.png";

import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import "../css/glass_background.css";

const ScavFooter: React.FC = () => {
  return (
    <footer className="absolute bottom-0 w-full border-t-1 border-black bg-[#1e262e] text-gray-900">
      <div className="flex flex-col divide-gray-600 px-2 py-5 md:px-40 md:py-8 lg:flex-row lg:justify-between">
        <div className="lg: flex flex-row items-center gap-3 self-center py-4 text-center font-[family-name:var(--font-montserrat)] font-semibold text-black md:flex-col md:space-y-0 md:space-x-4 lg:flex">
          <p className="text-sm text-[#cbe3f5]">
            Thank you to our Corporate Sponsor
          </p>
          <Image
            src={GlobalFoundries}
            alt="Global"
            height={100}
            width={200}
          ></Image>
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex flex-row justify-evenly gap-2 sm:justify-center">
            <a
              href="https://www.instagram.com/sase_clarkson/"
              title="Instagram"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#cbe3f5] text-gray-50 md:h-10 md:w-10"
            >
              <FaInstagram color="#0f6cb6" />
            </a>
            <a
              href="https://www.linkedin.com/in/cusase/"
              title="LinkedIn"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#cbe3f5] text-gray-50 md:h-10 md:w-10"
            >
              <FaLinkedin color="#0f6cb6" />
            </a>
            <a
              href="https://discord.gg/8JVSNvP5zZ"
              title="Discord"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#cbe3f5] text-gray-50 md:h-10 md:w-10"
            >
              <FaDiscord color="#0f6cb6" />
            </a>
            <a
              href="mailto:sase@clarkson.edu"
              title="Gmail"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#cbe3f5] text-gray-50 md:h-10 md:w-10"
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
