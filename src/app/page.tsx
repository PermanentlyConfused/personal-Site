import Image from "next/image";
import AboutMe from "./components/AboutMe/AboutMe";
import Connect from "./components/Connect/Connect";
import UND from "./components/Projects/Projects";
import SideBar from "./components/SideBar/SideBar";
import Current from "./components/Current/Current";
import { ReactLenis } from "lenis/react";

export default function Home() {
  return (
    <ReactLenis root>
      <div className="flex min-h-screen flex-col items-center justify-center gap-10 py-10 font-[family-name:var(--font-geist-sans)] lg:py-8">
        <main className="lg:grid-rows-[auto, 1fr] flex w-md flex-col items-center justify-center gap-2 lg:grid lg:w-5xl lg:grid-cols-4 lg:gap-5">
          <AboutMe />
          <Connect />
          <SideBar />
          <UND />
          <Current />
        </main>
      </div>
    </ReactLenis>
  );
}
