"use client";
import { useEffect, useRef } from "react";

import MyProjects from "./components/Projects/MyProjects";
import MyBookMarks from "./components/Bookmarks/Bookmarks";
import LeftPanel from "./components/LeftPanel/LeftPanel";
import NavBar from "./components/NavBar/NavBar";
import { scrollToSection } from "./Helper/Helper";

export default function Home() {
  // useEffect(() => {
  //   const handler = (e: KeyboardEvent) => {
  //     if (
  //       (e.ctrlKey || e.metaKey) &&
  //       (e.key === "+" || e.key === "-" || e.key === "=" || e.key === "0")
  //     ) {
  //       e.preventDefault();
  //     }
  //   };

  //   const wheelHandler = (e: WheelEvent) => {
  //     if (e.ctrlKey) {
  //       e.preventDefault();
  //     }
  //   };

  //   window.addEventListener("keydown", handler, { passive: false });
  //   window.addEventListener("wheel", wheelHandler, { passive: false });

  //   return () => {
  //     window.removeEventListener("keydown", handler);
  //     window.removeEventListener("wheel", wheelHandler);
  //   };
  // }, []);
  // //Override default scrolling
  // const handleWheel = (e: MouseEvent) => {
  //   e.preventDefault();
  // };

  // useEffect(() => {
  //   window.addEventListener("wheel", handleWheel, { passive: false });
  //   return () => {
  //     window.removeEventListener("wheel", handleWheel);
  //   };
  // }, []);
  //Focuses on specified div on start
  useEffect(() => {
    const target = document.getElementById("home"); //home,topRight
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }, []);
  return (
    <div
      className="grid grid-cols-3 grid-rows-3"
      style={{
        width: "3080px",
        height: "4840px",
        gridTemplateColumns: "1920px 1920px 1920px",
        gridTemplateRows: "1080px 1080px 1080px",
      }}
    >
      <div id="topLeft" className="homeBG h-[1080px] max-w-[1920px] text-black">
        <button
          onClick={() => scrollToSection("home")}
          className="relative top-[10%] left-[50%] m-4 bg-blue-500 p-2 text-white"
        >
          Go to Home
        </button>
      </div>
      <div
        id="home"
        className="homeBG min-h-[1080px] w-[1920px] px-6 py-5 font-sans md:px-12 md:py-25"
      >
        <div className="mx-[23%] flex-col font-[family-name:var(--font-montserrat)] lg:flex lg:flex-row lg:justify-between">
          <LeftPanel />

          <div className="[1080px]g:flex-col lg:92[45%] lg:flex lg:max-h-[1080px] lg:justify-between lg:py-5">
            <NavBar />
          </div>
        </div>
      </div>

      <div
        id="topRight"
        className="homeBG h-[1080px] max-w-[1920px] text-black"
      >
        <button
          onClick={() => scrollToSection("home")}
          className="relative top-[10%] left-[50%] m-4 bg-blue-500 p-2 text-white"
        >
          Go to Home
        </button>
        <MyBookMarks />
      </div>

      <div id="midLeft" className="homeBG h-[1080px] max-w-[1920px] text-black">
        <button
          onClick={() => scrollToSection("home")}
          className="relative top-[10%] left-[50%] m-4 bg-blue-500 p-2 text-white"
        >
          Go to Home
        </button>
      </div>
      <div
        id="midCenter"
        className="homeBG flex h-[1080px] max-w-[1920px] flex-col items-center justify-center text-black"
      >
        <MyProjects />
      </div>
      <div
        id="midRight"
        className="homeBG h-[1080px] max-w-[1920px] text-black"
      >
        <button
          onClick={() => scrollToSection("home")}
          className="relative top-[10%] left-[50%] m-4 bg-blue-500 p-2 text-white"
        >
          Go to Home
        </button>
      </div>

      <div id="botLeft" className="homeBG h-[1080px] max-w-[1920px] text-black">
        <button
          onClick={() => scrollToSection("home")}
          className="relative top-[10%] left-[50%] m-4 bg-blue-500 p-2 text-white"
        >
          Go to Home
        </button>
      </div>
      <div
        id="botCenter"
        className="homeBG h-[1080px] max-w-[1920px] text-black"
      >
        <button
          onClick={() => scrollToSection("home")}
          className="relative top-[10%] left-[50%] m-4 bg-blue-500 p-2 text-white"
        >
          Go to Home
        </button>
      </div>

      <div
        id="botRight"
        className="homeBG h-[1080px] max-w-[1920px] text-black"
      >
        <button
          onClick={() => scrollToSection("home")}
          className="relative top-[10%] left-[50%] m-4 bg-blue-500 p-2 text-white"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}
