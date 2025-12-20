"use client";
import Image from "next/image";
import SaseLogo from "@/assets/ScavengerHunt/saseWhite.png";
import AccessLogo from "@/assets/ScavengerHunt/width_1600.png";
import "../css/glass_background.css";
import "@/app/CustomCSS/Backgrounds.css";
import "@/app/CustomCSS/PinNTape.css";

const ScavHeader: React.FC = () => {
  return (
    <div>
      <div className="glassContainer top-0 flex w-full py-1 font-[family-name:var(--font-montserrat)] font-semibold text-black lg:flex-nowrap lg:justify-center lg:py-4">
        <div className="relative aspect-[2/1] w-18 md:w-48">
          <Image
            src={SaseLogo}
            alt="SASE Logo"
            fill
            className="object-contain px-1 lg:-translate-y-0"
          />
        </div>
        <div className="relative aspect-[3/1] w-36 sm:w-48 md:w-84">
          <Image
            fill
            src={AccessLogo}
            alt="Clarkson AC Logo"
            className="hidden translate-y-6 lg:block"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default ScavHeader;
