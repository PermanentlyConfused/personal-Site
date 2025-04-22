import CustomCursor from "./components/CustomCursor/CustomCursor";

import Connect from "./components/Connect/Connect";
import MyProjects from "./components/Projects/Projects";
import AboutMe from "./components/AboutMe/AboutMe";

import LeftPanel from "./components/LeftPanel/LeftPanel";
import NavBar from "./components/NavBar/NavBar";
import { ReactLenis } from "lenis/react";

export default function Home() {
  return (
    <ReactLenis root>
      <main className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
        {/* <CustomCursor /> */}
        <div className="flex-col font-[family-name:var(--font-montserrat)] lg:flex lg:flex-row lg:justify-evenly">
          <LeftPanel />

          <div className="lg:flex lg:max-h-screen lg:w-[45%] lg:flex-col lg:justify-between lg:py-15">
            <NavBar />
            {/* <AboutMe /> */}
            {/* <Connect />
            <Current />
            <MyProjects /> */}
          </div>
        </div>
        {/* Footer here */}
      </main>
      <div className="min-h-full bg-[#eee7d7]"></div>
    </ReactLenis>
  );
  // sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0
}
