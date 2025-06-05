import { scrollToSection } from "@/app/Helper/Helper";
import { memo } from "react";
import Image from "next/image";
import Dog from "@/assets/dog.png";
import pop from "@/assets/popping.gif";

const NavBar: React.FC = () => {
  const openPDF = () => {
    const pdfUrl = "/docs/ResumeV2.pdf";
    window.open(pdfUrl, "_blank");
  };
  return (
    <div className="mt-10 grid grid-cols-2 grid-rows-3 gap-x-10 gap-y-5 lg:my-15">
      <a
        href="/about"
        className="flex aspect-square rotate-2 cursor-pointer items-center justify-center border-2 border-solid border-transparent bg-[#d9bda5]/80 text-center shadow-lg hover:scale-105 hover:border-black lg:shadow-xl"
      >
        <Image
          src={Dog.src}
          alt="asdasdasd"
          width={120}
          height={120}
          className="absolute -top-[79px] left-0"
        ></Image>
        <Image
          src={pop.src}
          unoptimized
          alt="asdasdasd"
          width={70}
          height={70}
          className="absolute top-[103px] left-30"
        ></Image>
        <div className="text-lg text-black md:text-2xl lg:text-xl">
          About Me
        </div>
      </a>

      <a
        onClick={() => scrollToSection("topRight")}
        className="flex aspect-square -rotate-2 cursor-pointer items-center justify-center border-2 border-solid border-transparent bg-[#d9bda5]/80 text-center shadow-lg hover:scale-105 hover:border-black lg:shadow-xl"
      >
        <div className="text-lg text-black md:text-2xl lg:text-xl">
          Bookmarks
        </div>
      </a>

      <a
        onClick={() => openPDF()}
        className="flex aspect-square -rotate-3 cursor-pointer items-center justify-center border-2 border-solid border-transparent bg-[#d9bda5]/80 text-center shadow-lg hover:scale-105 hover:border-black lg:shadow-xl"
      >
        <div className="text-lg text-black md:text-2xl lg:text-xl">Resumé</div>
      </a>

      <a
        onClick={() => scrollToSection("midCenter")}
        className="flex aspect-square rotate-1 cursor-pointer items-center justify-center border-2 border-solid border-transparent bg-[#d9bda5]/80 text-center shadow-lg hover:scale-105 hover:border-black lg:shadow-xl"
      >
        <div className="text-lg text-black md:text-2xl lg:text-xl">
          Projects
        </div>
      </a>

      <a
        onClick={() => scrollToSection("botLeft")}
        className="flex aspect-square -rotate-6 cursor-pointer items-center justify-center border-2 border-solid border-transparent bg-[#d9bda5]/80 text-center shadow-lg hover:scale-105 hover:border-black lg:shadow-xl"
      >
        <div className="px-2 text-lg text-wrap text-black md:text-2xl lg:text-xl">
          Shower Thoughts
        </div>
      </a>

      <a
        onClick={() => scrollToSection("botRight")}
        className="flex aspect-square -rotate-4 cursor-pointer items-center justify-center border-2 border-solid border-transparent bg-[#d9bda5]/80 text-center shadow-lg hover:scale-105 hover:border-black lg:shadow-xl"
      >
        <div className="text-lg text-black md:text-2xl lg:text-xl">
          Guest Book~
        </div>
      </a>
    </div>
  );
};

export default memo(NavBar);
