"use client";
import { useEffect } from "react";

import DoodleBackgrounds from "./components/DoodleBackgrounds/DoodleBackgrounds";
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
    <div className="homeBG h-full lg:mx-20">
      {/* <DoodleBackgrounds /> */}
      <div id="home" className="font-sans lg:px-12 lg:py-10">
        <div className="flex-col justify-center font-[family-name:var(--font-montserrat)] lg:flex lg:flex-row lg:gap-20">
          <LeftPanel />
          <NavBar />
        </div>
      </div>

      {/* <Footer /> */}
      {/* <MyBookMarks /> */}
      {/* <div id="midRight" className="homeBG text-black"></div> */}
    </div>
  );
}
