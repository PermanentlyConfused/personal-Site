"use client";

import Image from "next/image";
import amogus from "@/assets/Doodles/amogus.png";
import shinji from "@/assets/Doodles/shinji.png";
import sprout from "@/assets/Doodles/sprout.png";
import bald from "@/assets/Doodles/bald.png";
import help from "@/assets/Doodles/help.png";
const DoodleBackgrounds: React.FC = () => {
  return (
    <div className="z-0">
      <Image
        alt={"SomeDoodle"}
        className="top-60 left-110 hidden lg:absolute lg:block"
        src={amogus.src}
        width={150}
        height={150}
      ></Image>
      <Image
        alt={"SomeDoodle"}
        className="right-100 bottom-50 hidden rotate-20 lg:absolute lg:block"
        src={shinji.src}
        width={150}
        height={150}
      ></Image>
      <Image
        alt={"SomeDoodle"}
        className="bottom-45 left-120 hidden -rotate-20 lg:absolute lg:block"
        src={sprout.src}
        width={110}
        height={110}
      ></Image>
      <Image
        alt={"SomeDoodle"}
        className="right-220 bottom-70 hidden lg:absolute lg:block"
        src={bald.src}
        width={150}
        height={150}
      ></Image>
      <Image
        alt={"SomeDoodle"}
        className="top-40 right-70 hidden lg:absolute lg:block"
        src={help.src}
        width={150}
        height={150}
      ></Image>
    </div>
  );
};

export default DoodleBackgrounds;
