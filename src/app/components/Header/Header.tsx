"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

import "@/app/CustomCSS/FooterStyle.css";
import "@/app/CustomCSS/PinNTape.css";

const Header: React.FC = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  return (
    <div className="relative flex w-full flex-row flex-wrap justify-center gap-5 overflow-hidden bg-[#d9bda5] py-5 font-[family-name:var(--font-montserrat)] font-semibold text-black lg:flex-nowrap lg:gap-x-10 lg:px-40">
      {/* Home */}
      <motion.a
        initial={{ opacity: 0, y: -1000 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="group/home flex text-black lg:relative lg:top-0 lg:flex lg:max-h-fit lg:w-[25%] lg:flex-col lg:py-5"
        href="/"
      >
        <div className="pin top-[10px] hidden lg:block" />
        <div
          className={
            "border-3 border-dashed border-black bg-[#154D71] p-[0.3em] group-hover/home:bg-white lg:rotate-1"
          }
        >
          <div
            className={`HeaderBG h-[100%] w-[100%] p-[1.5em] text-center group-hover/home:font-bold`}
          >
            Home
          </div>
        </div>
      </motion.a>

      {/* About */}
      <motion.a
        initial={{ opacity: 0, y: -1000 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="group/about flex lg:relative lg:top-0 lg:flex lg:max-h-fit lg:w-[25%] lg:flex-col lg:py-5"
        href="/about"
      >
        <div className="pin top-[10px] hidden lg:block" />
        <div
          className={
            "border-3 border-dashed border-black bg-[#1C6EA4] p-[0.3em] group-hover/about:bg-white lg:rotate-2"
          }
        >
          <div
            className={`HeaderBG h-[100%] w-[100%] p-[1.5em] text-center group-hover/about:font-bold ${isActive("/about") ? "font-bold underline" : "font-semibold"}`}
          >
            About
          </div>
        </div>
      </motion.a>

      {/* BookMarks */}
      <motion.a
        initial={{ opacity: 0, y: -1000 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="group/bookmarks flex lg:relative lg:top-0 lg:flex lg:max-h-fit lg:w-[25%] lg:flex-col lg:py-5"
        href="/bookmarks"
      >
        <div className="pin top-[10px] hidden lg:block" />
        <div
          className={
            "border-3 border-dashed border-black bg-[#33A1E0] p-[0.3em] group-hover/bookmarks:bg-white lg:rotate-3"
          }
        >
          <div
            className={`HeaderBG h-[100%] w-[100%] p-[1.5em] text-center group-hover/bookmarks:font-bold ${isActive("/bookmarks") ? "font-bold underline" : "font-semibold"}`}
          >
            Bookmarks
          </div>
        </div>
      </motion.a>

      {/* Projects */}
      <motion.a
        initial={{ opacity: 0, y: -1000 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="group/projects flex lg:relative lg:top-0 lg:flex lg:max-h-fit lg:w-[25%] lg:flex-col lg:py-5"
        href="/projects"
      >
        <div className="pin top-[10px] hidden lg:block" />
        <div
          className={
            "border-3 border-dashed border-black bg-[#FFF9AF] p-[0.3em] group-hover/projects:bg-white lg:rotate-4"
          }
        >
          <div
            className={`HeaderBG h-[100%] w-[100%] p-[1.5em] text-center group-hover/projects:font-bold ${isActive("/projects") ? "font-bold underline" : "font-semibold"}`}
          >
            Projects
          </div>
        </div>
      </motion.a>
    </div>
  );
};

export default Header;
