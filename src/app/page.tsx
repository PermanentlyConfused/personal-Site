"use client";
import { useEffect, useRef } from "react";

import CustomCursor from "./components/CustomCursor/CustomCursor";

import Connect from "./components/Connect/Connect";
import MyProjects from "./components/Projects/Projects";
import AboutMe from "./components/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";
import LeftPanel from "./components/LeftPanel/LeftPanel";
import NavBar from "./components/NavBar/NavBar";
import { ReactLenis } from "lenis/react";

export default function Home() {
  function scrollToSection(id: string) {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }
  //This shit is called on website launch
  useEffect(() => {
    const target = document.getElementById("home");
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }, []);
  return (
    <ReactLenis root>
      {/* 
      <Footer /> */}
      <button
        onClick={() => scrollToSection("home")}
        className="m-4 bg-blue-500 p-2 text-white"
      >
        Go to Grid Cell 5
      </button>
      <div
        className="grid grid-cols-3 grid-rows-3"
        style={{ width: "5760px", height: "3240px" }}
      >
        <div className="homeBG h-[1080px] max-w-[1920px] text-black">1</div>
        <div className="homeBG h-[1080px] max-w-[1920px] text-black">2</div>
        <div className="homeBG h-[1080px] max-w-[1920px] text-black">3</div>
        <div className="homeBG h-[1080px] max-w-[1920px] text-black">4</div>
        <div
          id="home"
          className="homeBG min-h-[1080px] w-[1920px] px-6 py-5 font-sans md:px-12 md:py-25"
        >
          <div className="mx-[20%] flex-col font-[family-name:var(--font-montserrat)] lg:flex lg:flex-row lg:justify-between">
            <LeftPanel />

            <div className="[1080px]g:flex-col lg:92[45%] lg:flex lg:max-h-[1080px] lg:justify-between lg:py-5">
              <NavBar />
            </div>
          </div>
        </div>
        <div className="homeBG h-[1080px] max-w-[1920px] text-black">6</div>
        <div className="homeBG h-[1080px] max-w-[1920px] text-black">7</div>
        <div className="homeBG h-[1080px] max-w-[1920px] text-black">8</div>
        <div className="homeBG h-[1080px] max-w-[1920px] text-black">9</div>
      </div>
    </ReactLenis>
  );
}
