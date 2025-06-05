"use client";
import { useEffect } from "react";

import MyProjects from "@/app/components/Projects/MyProjects";
import MyBookMarks from "@/app/components/Bookmarks/Bookmarks";
import LeftPanel from "@/app/components/LeftPanel/LeftPanel";
import NavBar from "@/app/components/NavBar/NavBar";

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
      className="grid grid-cols-2 grid-rows-2"
      style={{
        gridTemplateColumns: "1920px 1920px",
        gridTemplateRows: "1080px 1080px",
      }}
    >
      <div id="home" className="homeBG font-sans md:px-12 md:py-25">
        <div className="mx-[23%] flex-col font-[family-name:var(--font-montserrat)] lg:flex lg:flex-row lg:justify-between">
          <LeftPanel />
          <div className="lg:92[45%] lg:flex lg:max-h-[1080px] lg:flex-col lg:justify-between lg:py-5">
            <NavBar />
          </div>
        </div>
      </div>

      <div id="topRight" className="homeBG flex flex-col text-black">
        <p className="relative top-10 left-20 mt-20 h-auto w-50 bg-linear-to-r from-amber-500/20 to-amber-500/80 py-2 text-center text-3xl font-semibold text-black drop-shadow-xl">
          Bookmarks
        </p>
        <MyBookMarks />
      </div>

      <div
        id="midCenter"
        className="homeBG flex flex-col items-center justify-center text-black"
      >
        <MyProjects />
      </div>

      <div id="midRight" className="homeBG text-black"></div>
    </div>
  );
}
