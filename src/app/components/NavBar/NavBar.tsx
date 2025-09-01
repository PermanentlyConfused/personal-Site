import { scrollToSection } from "@/app/Helper/Helper";
import { memo } from "react";
import Image from "next/image";
import Dog from "@/assets/dog.png";
import pop from "@/assets/popping.gif";
import bookmark from "@/assets/bookmarks.png";
import construction from "@/assets/under.png";

const NavBar: React.FC = () => {
  const openPDF = () => {
    const pdfUrl = "/docs/Resume.pdf";
    window.open(pdfUrl, "_blank");
  };
  return (
    <div className="flex flex-row flex-wrap items-center justify-center gap-6 py-20 lg:grid lg:grid-cols-2 lg:grid-rows-3 lg:gap-x-10 lg:gap-y-5 lg:py-15 lg:pt-10">
      <a
        href="/about"
        className="flex aspect-square w-40 rotate-2 cursor-pointer items-center justify-center border-2 border-solid border-transparent bg-[#d9bda5]/80 text-center shadow-lg hover:scale-105 hover:border-black lg:w-full lg:shadow-xl"
      >
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ"
          className="absolute -top-20 left-0 -rotate-1"
        >
          <Image
            src={Dog.src}
            alt="dog_peeking.jpeg"
            width={120}
            height={120}
            unoptimized
          ></Image>
        </a>

        <Image
          src={pop.src}
          unoptimized
          alt="me_popping.jpg"
          width={70}
          height={70}
          className="absolute top-19.5 left-25 h-20 w-15 lg:top-26 lg:left-30 lg:h-23 lg:w-18"
        ></Image>
        <div className="text-lg text-black lg:text-xl">About Me</div>
      </a>

      <a
        // onClick={() => scrollToSection("topRight")}
        href="/bookmarks"
        className="flex aspect-square w-40 -rotate-2 cursor-pointer items-center justify-center border-2 border-solid border-transparent bg-[#d9bda5]/80 text-center shadow-lg hover:scale-105 hover:border-black lg:w-full lg:shadow-xl"
      >
        {" "}
        <Image
          src={bookmark.src}
          unoptimized
          alt="mePointBook.jpg"
          width={70}
          height={70}
          className="absolute top-21.5 left-25 h-20 w-15 lg:top-28 lg:left-30 lg:h-23 lg:w-18"
        ></Image>
        <div className="text-lg text-black lg:text-xl">Bookmarks</div>
      </a>

      <a
        onClick={() => openPDF()}
        className="flex aspect-square w-40 -rotate-3 cursor-pointer items-center justify-center border-2 border-solid border-transparent bg-[#d9bda5]/80 text-center shadow-lg hover:scale-105 hover:border-black lg:w-full lg:shadow-xl"
      >
        <div className="text-lg text-black lg:text-xl">Resumé</div>
      </a>

      <a
        href="/projects"
        onClick={() => scrollToSection("midCenter")}
        className="flex aspect-square w-40 rotate-1 cursor-pointer items-center justify-center border-2 border-solid border-transparent bg-[#d9bda5]/80 text-center shadow-lg hover:scale-105 hover:border-black lg:w-full lg:shadow-xl"
      >
        <div className="text-lg text-black lg:text-xl">Projects</div>
      </a>

      <a
        onClick={() => scrollToSection("botLeft")}
        className="flex aspect-square w-40 -rotate-6 cursor-pointer items-center justify-center border-2 border-solid border-transparent bg-[#d9bda5]/80 text-center shadow-lg hover:scale-105 hover:border-black lg:w-full lg:shadow-xl"
      >
        {" "}
        <Image
          src={construction.src}
          unoptimized
          alt="constructiontape.jpg"
          width={210}
          height={210}
          className="absolute bottom-20 opacity-80"
        ></Image>
        <Image
          src={construction.src}
          unoptimized
          alt="constructiontape.jpg"
          width={200}
          height={200}
          className="absolute top-20 opacity-80"
        ></Image>
        <div className="px-2 text-lg text-wrap text-black lg:text-xl">
          Shower Thoughts
        </div>
      </a>

      <a
        onClick={() => scrollToSection("botRight")}
        className="flex aspect-square w-40 -rotate-4 cursor-pointer items-center justify-center border-2 border-solid border-transparent bg-[#d9bda5]/80 text-center shadow-lg hover:scale-105 hover:border-black lg:w-full lg:shadow-xl"
      >
        <Image
          src={construction.src}
          unoptimized
          alt="constructiontape.jpg"
          width={200}
          height={200}
          className="absolute bottom-20 opacity-80"
        ></Image>
        <Image
          src={construction.src}
          unoptimized
          alt="constructiontape.jpg"
          width={200}
          height={200}
          className="absolute top-20 opacity-80"
        ></Image>
        <div className="text-lg text-black lg:text-xl">Guest Book~</div>
      </a>
    </div>
  );
};

export default memo(NavBar);
