"use client";

//import DoodleBackgrounds from "./components/DoodleBackgrounds/DoodleBackgrounds";
import LeftPanel from "@/app/components/LeftPanel/LeftPanel";
import NavBar from "@/app/components/NavBar/NavBar";

export default function Home() {
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
