import CustomCursor from "./components/CustomCursor/CustomCursor";
import Welcome from "./components/Welcome/Welcome";
import Connect from "./components/Connect/Connect";
import MyProjects from "./components/Projects/Projects";
import SideBar from "./components/SideBar/SideBar";
import Current from "./components/Current/Current";
import NavBar from "./components/NavBar/NavBar";
import { ReactLenis } from "lenis/react";

export default function Home() {
  return (
    <ReactLenis root>
      <CustomCursor />
      <div className="flex min-h-screen flex-col items-center justify-center gap-5 py-10 font-[family-name:var(--font-geist-sans)] lg:py-8">
        <NavBar></NavBar>
        <main className="lg:grid-rows-[auto, 1fr] xs:w-xs flex w-2xs flex-col gap-2 sm:w-sm md:w-md lg:grid lg:w-5xl lg:grid-cols-4 lg:gap-3 xl:w-6xl">
          <Welcome />
          <SideBar />
          <Connect />
          {/* <Current /> */}
          <br className="hidden lg:block"></br>
          <br className="hidden lg:block"></br>
          <br className="hidden lg:block"></br>
          <MyProjects />
        </main>
      </div>
    </ReactLenis>
  );
}
